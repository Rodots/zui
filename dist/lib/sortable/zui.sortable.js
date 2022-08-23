/*!
 * ZUI: 排序 - v1.10.0 - 2022-08-23
 * http://openzui.com
 * GitHub: https://github.com/easysoft/zui.git 
 * Copyright (c) 2022 cnezsoft.com; Licensed MIT
 */

/* ========================================================================
 * ZUI: sortable.js
 * http://openzui.com
 * ========================================================================
 * Copyright (c) 2014-2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */


+ function($, window, document) {
    'use strict';

    if(!$.fn.droppable) {
        console.error('Sortable requires droppable.js');
        return;
    }

    var NAME     = 'zui.sortable',
        DEFAULTS = {
            selector     : 'li,div',
            dragCssClass : 'invisible',
            sortingClass : 'sortable-sorting'
        },
        STR_ORDER = 'order';

    var Sortable = function(element, options) {
        var that     = this;
        that.$       = $(element);
        that.options = $.extend({}, DEFAULTS, that.$.data(), options);
        that.init();
    };

    Sortable.DEFAULTS = DEFAULTS;
    Sortable.NAME     = NAME;

    Sortable.prototype.init = function() {
        var that         = this,
            $root        = that.$,
            options      = that.options,
            selector     = options.selector,
            containerSelector = options.containerSelector,
            sortingClass = options.sortingClass,
            dragCssClass = options.dragCssClass,
            targetSelector = options.targetSelector,
            isReverse    = options.reverse,
            moveDirection = options.moveDirection,
            orderChanged,
            insertType;

        var markOrders = function($items) {
            $items = $items || that.getItems(1);
            var itemsCount = $items.length;
            if (itemsCount) {
                $items.each(function(itemIndex) {
                    var itemOrder = isReverse ? itemsCount - itemIndex : itemIndex;
                    $(this).attr('data-' + STR_ORDER, itemOrder).data(STR_ORDER, itemOrder);
                });
            }
        };

        if(!targetSelector) {
            markOrders();
        }

        $root.droppable({
            handle      : options.trigger,
            target      : targetSelector ? targetSelector : (containerSelector ? (selector + ',' + containerSelector) : selector),
            selector    : selector,
            container   : options.container || $root,
            always      : options.always,
            flex        : true,
            lazy        : options.lazy,
            canMoveHere : options.canMoveHere,
            dropToClass : options.dropToClass,
            before      : options.before,
            nested      : !!containerSelector,
            mouseButton : options.mouseButton,
            noShadow    : options.noShadow,
            dropOnMouseleave    : options.dropOnMouseleave,
            stopPropagation : options.stopPropagation,
            start: function(e) {
                if(dragCssClass) e.element.addClass(dragCssClass);
                orderChanged = false;
                that.$element = e.element;

                if(!moveDirection && e.targets.length > 1) {
                    var offset1 = e.targets.eq(0).offset();
                    var offset2 = e.targets.eq(1).offset();
                    moveDirection = Math.abs(offset1.left - offset2.left) > Math.abs(offset1.top - offset2.top) ? 'h' : 'v';
                }

                markOrders();
                that.trigger('start', e);
            },
            drag: function(e) {
                $root.addClass(sortingClass);
                if(!e.isIn) {
                    return;
                }

                var $target     = e.target;
                var $ele        = e.element;
                var isContainer = containerSelector && $target.is(containerSelector);

                if (isContainer) {
                    if (!$target.children(selector).filter('.dragging').length) {
                        $target.append($ele);
                        markOrders($items);
                        that.trigger(STR_ORDER, {
                            list: $items,
                            element: $ele
                        });
                    }
                    return;
                }

                var eleOrder    = $ele.data(STR_ORDER),
                    targetOrder = $target.data(STR_ORDER);

                if(eleOrder === targetOrder) {
                    return;
                }
                var distanceDimension = moveDirection === 'h' ? 'left' : 'top';
                var deltaDistance = e.mouseOffset[distanceDimension] - e.lastMouseOffset[distanceDimension];
                if (deltaDistance === 0) {
                    return;
                }

                var isInsertAfter = eleOrder > targetOrder ? isReverse : !isReverse;
                if ((deltaDistance < 0 && isInsertAfter) || (deltaDistance > 0 && !isInsertAfter)) {
                    return;
                }

                insertType = isInsertAfter ? 'after' : 'before';
                $target[insertType]($ele);
                orderChanged = true;

                that.$target = $target;
                that.$element = $ele;

                var $items = that.getItems(1);
                markOrders($items);
                that.trigger(STR_ORDER, {
                    insert: insertType,
                    target: $target,
                    list: $items,
                    element: $ele
                });
            },
            finish: function(e) {
                if(dragCssClass && e.element) e.element.removeClass(dragCssClass);
                $root.removeClass(sortingClass);
                that.trigger('finish', {
                    insert: insertType,
                    target: that.$target,
                    list: that.getItems(),
                    element: that.$element,
                    changed: orderChanged
                });
                that.$element = null;
                that.$target = null;
            }
        });
    };

    Sortable.prototype.destroy = function() {
        this.$.droppable('destroy');
        this.$.data(NAME, null);
    };

    Sortable.prototype.reset = function() {
        this.destroy();
        this.init();
    };

    Sortable.prototype.getItems = function(onlyElements) {
        var that = this;
        var $items;
        var targetSelector = that.options.targetSelector;
        if (targetSelector) {
            if(typeof targetSelector === 'function') {
                $items = targetSelector(that.$element, that.$);
            } else {
                $items = that.$.find(targetSelector);
            }
        } else {
            $items = that.$.find(that.options.selector);
        }
        $items = $items.not('.drag-shadow');
        if(!onlyElements) {
            return $items.map(function() {
                var $item = $(this);
                return {
                    item: $item,
                    order: $item.data('order')
                };
            });
        }
        return $items;
    };

    Sortable.prototype.trigger = function(name, params) {
        return $.zui.callEvent(this.options[name], params, this);
    };

    $.fn.sortable = function(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data(NAME);
            var options = typeof option == 'object' && option;

            if(!data) $this.data(NAME, (data = new Sortable(this, options)));
            else if(typeof option == 'object') data.reset();

            if(typeof option == 'string') data[option]();
        });
    };

    $.fn.sortable.Constructor = Sortable;
}(jQuery, window, document);
