var Bi = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var y = (n, e, t) => (Bi(n, e, "read from private field"), t ? t.call(n) : e.get(n)), _ = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
}, $ = (n, e, t, s) => (Bi(n, e, "write to private field"), s ? s.call(n, t) : e.set(n, t), t);
var L = (n, e, t) => (Bi(n, e, "access private method"), t);
const At = document, un = window, ea = At.documentElement, be = At.createElement.bind(At), sa = be("div"), Wi = be("table"), Dl = be("tbody"), Qo = be("tr"), { isArray: Ti, prototype: na } = Array, { concat: Ll, filter: Co, indexOf: ia, map: oa, push: Pl, slice: ra, some: $o, splice: Ol } = na, Hl = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Bl = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Wl = /<.+>/, Fl = /^\w+$/;
function xo(n, e) {
  const t = zl(e);
  return !n || !t && !me(e) && !V(e) ? [] : !t && Bl.test(n) ? e.getElementsByClassName(n.slice(1).replace(/\\/g, "")) : !t && Fl.test(n) ? e.getElementsByTagName(n) : e.querySelectorAll(n);
}
class Ni {
  constructor(e, t) {
    if (!e)
      return;
    if (Ji(e))
      return e;
    let s = e;
    if (et(e)) {
      const i = t || At;
      if (s = Hl.test(e) && me(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : Wl.test(e) ? ca(e) : Ji(i) ? i.find(e) : et(i) ? f(i).find(e) : xo(e, i), !s)
        return;
    } else if (we(e))
      return this.ready(e);
    (s.nodeType || s === un) && (s = [s]), this.length = s.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = s[i];
  }
  init(e, t) {
    return new Ni(e, t);
  }
}
const k = Ni.prototype, f = k.init;
f.fn = f.prototype = k;
k.length = 0;
k.splice = Ol;
typeof Symbol == "function" && (k[Symbol.iterator] = na[Symbol.iterator]);
function Ji(n) {
  return n instanceof Ni;
}
function Ue(n) {
  return !!n && n === n.window;
}
function me(n) {
  return !!n && n.nodeType === 9;
}
function zl(n) {
  return !!n && n.nodeType === 11;
}
function V(n) {
  return !!n && n.nodeType === 1;
}
function jl(n) {
  return !!n && n.nodeType === 3;
}
function Vl(n) {
  return typeof n == "boolean";
}
function we(n) {
  return typeof n == "function";
}
function et(n) {
  return typeof n == "string";
}
function it(n) {
  return n === void 0;
}
function ss(n) {
  return n === null;
}
function aa(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function ko(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const e = Object.getPrototypeOf(n);
  return e === null || e === Object.prototype;
}
f.isWindow = Ue;
f.isFunction = we;
f.isArray = Ti;
f.isNumeric = aa;
f.isPlainObject = ko;
function q(n, e, t) {
  if (t) {
    let s = n.length;
    for (; s--; )
      if (e.call(n[s], s, n[s]) === !1)
        return n;
  } else if (ko(n)) {
    const s = Object.keys(n);
    for (let i = 0, o = s.length; i < o; i++) {
      const r = s[i];
      if (e.call(n[r], r, n[r]) === !1)
        return n;
    }
  } else
    for (let s = 0, i = n.length; s < i; s++)
      if (e.call(n[s], s, n[s]) === !1)
        return n;
  return n;
}
f.each = q;
k.each = function(n) {
  return q(this, n);
};
k.empty = function() {
  return this.each((n, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function dn(...n) {
  const e = Vl(n[0]) ? n.shift() : !1, t = n.shift(), s = n.length;
  if (!t)
    return {};
  if (!s)
    return dn(e, f, t);
  for (let i = 0; i < s; i++) {
    const o = n[i];
    for (const r in o)
      e && (Ti(o[r]) || ko(o[r])) ? ((!t[r] || t[r].constructor !== o[r].constructor) && (t[r] = new o[r].constructor()), dn(e, t[r], o[r])) : t[r] = o[r];
  }
  return t;
}
f.extend = dn;
k.extend = function(n) {
  return dn(k, n);
};
const Ul = /\S+/g;
function Mi(n) {
  return et(n) ? n.match(Ul) || [] : [];
}
k.toggleClass = function(n, e) {
  const t = Mi(n), s = !it(e);
  return this.each((i, o) => {
    V(o) && q(t, (r, a) => {
      s ? e ? o.classList.add(a) : o.classList.remove(a) : o.classList.toggle(a);
    });
  });
};
k.addClass = function(n) {
  return this.toggleClass(n, !0);
};
k.removeAttr = function(n) {
  const e = Mi(n);
  return this.each((t, s) => {
    V(s) && q(e, (i, o) => {
      s.removeAttribute(o);
    });
  });
};
function ql(n, e) {
  if (n) {
    if (et(n)) {
      if (arguments.length < 2) {
        if (!this[0] || !V(this[0]))
          return;
        const t = this[0].getAttribute(n);
        return ss(t) ? void 0 : t;
      }
      return it(e) ? this : ss(e) ? this.removeAttr(n) : this.each((t, s) => {
        V(s) && s.setAttribute(n, e);
      });
    }
    for (const t in n)
      this.attr(t, n[t]);
    return this;
  }
}
k.attr = ql;
k.removeClass = function(n) {
  return arguments.length ? this.toggleClass(n, !1) : this.attr("class", "");
};
k.hasClass = function(n) {
  return !!n && $o.call(this, (e) => V(e) && e.classList.contains(n));
};
k.get = function(n) {
  return it(n) ? ra.call(this) : (n = Number(n), this[n < 0 ? n + this.length : n]);
};
k.eq = function(n) {
  return f(this.get(n));
};
k.first = function() {
  return this.eq(0);
};
k.last = function() {
  return this.eq(-1);
};
function Yl(n) {
  return it(n) ? this.get().map((e) => V(e) || jl(e) ? e.textContent : "").join("") : this.each((e, t) => {
    V(t) && (t.textContent = n);
  });
}
k.text = Yl;
function Dt(n, e, t) {
  if (!V(n))
    return;
  const s = un.getComputedStyle(n, null);
  return t ? s.getPropertyValue(e) || void 0 : s[e] || n.style[e];
}
function vt(n, e) {
  return parseInt(Dt(n, e), 10) || 0;
}
function tr(n, e) {
  return vt(n, `border${e ? "Left" : "Top"}Width`) + vt(n, `padding${e ? "Left" : "Top"}`) + vt(n, `padding${e ? "Right" : "Bottom"}`) + vt(n, `border${e ? "Right" : "Bottom"}Width`);
}
const Fi = {};
function Kl(n) {
  if (Fi[n])
    return Fi[n];
  const e = be(n);
  At.body.insertBefore(e, null);
  const t = Dt(e, "display");
  return At.body.removeChild(e), Fi[n] = t !== "none" ? t : "block";
}
function er(n) {
  return Dt(n, "display") === "none";
}
function la(n, e) {
  const t = n && (n.matches || n.webkitMatchesSelector || n.msMatchesSelector);
  return !!t && !!e && t.call(n, e);
}
function Ri(n) {
  return et(n) ? (e, t) => la(t, n) : we(n) ? n : Ji(n) ? (e, t) => n.is(t) : n ? (e, t) => t === n : () => !1;
}
k.filter = function(n) {
  const e = Ri(n);
  return f(Co.call(this, (t, s) => e.call(t, s, t)));
};
function Qt(n, e) {
  return e ? n.filter(e) : n;
}
k.detach = function(n) {
  return Qt(this, n).each((e, t) => {
    t.parentNode && t.parentNode.removeChild(t);
  }), this;
};
const Gl = /^\s*<(\w+)[^>]*>/, Xl = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, sr = {
  "*": sa,
  tr: Dl,
  td: Qo,
  th: Qo,
  thead: Wi,
  tbody: Wi,
  tfoot: Wi
};
function ca(n) {
  if (!et(n))
    return [];
  if (Xl.test(n))
    return [be(RegExp.$1)];
  const e = Gl.test(n) && RegExp.$1, t = sr[e] || sr["*"];
  return t.innerHTML = n, f(t.childNodes).detach().get();
}
f.parseHTML = ca;
k.has = function(n) {
  const e = et(n) ? (t, s) => xo(n, s).length : (t, s) => s.contains(n);
  return this.filter(e);
};
k.not = function(n) {
  const e = Ri(n);
  return this.filter((t, s) => (!et(n) || V(s)) && !e.call(s, t, s));
};
function Ot(n, e, t, s) {
  const i = [], o = we(e), r = s && Ri(s);
  for (let a = 0, l = n.length; a < l; a++)
    if (o) {
      const h = e(n[a]);
      h.length && Pl.apply(i, h);
    } else {
      let h = n[a][e];
      for (; h != null && !(s && r(-1, h)); )
        i.push(h), h = t ? h[e] : null;
    }
  return i;
}
function ha(n) {
  return n.multiple && n.options ? Ot(Co.call(n.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : n.value || "";
}
function Jl(n) {
  return arguments.length ? this.each((e, t) => {
    const s = t.multiple && t.options;
    if (s || ba.test(t.type)) {
      const i = Ti(n) ? oa.call(n, String) : ss(n) ? [] : [String(n)];
      s ? q(t.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : t.checked = i.indexOf(t.value) >= 0;
    } else
      t.value = it(n) || ss(n) ? "" : n;
  }) : this[0] && ha(this[0]);
}
k.val = Jl;
k.is = function(n) {
  const e = Ri(n);
  return $o.call(this, (t, s) => e.call(t, s, t));
};
f.guid = 1;
function xt(n) {
  return n.length > 1 ? Co.call(n, (e, t, s) => ia.call(s, e) === t) : n;
}
f.unique = xt;
k.add = function(n, e) {
  return f(xt(this.get().concat(f(n, e).get())));
};
k.children = function(n) {
  return Qt(f(xt(Ot(this, (e) => e.children))), n);
};
k.parent = function(n) {
  return Qt(f(xt(Ot(this, "parentNode"))), n);
};
k.index = function(n) {
  const e = n ? f(n)[0] : this[0], t = n ? this : f(e).parent().children();
  return ia.call(t, e);
};
k.closest = function(n) {
  const e = this.filter(n);
  if (e.length)
    return e;
  const t = this.parent();
  return t.length ? t.closest(n) : e;
};
k.siblings = function(n) {
  return Qt(f(xt(Ot(this, (e) => f(e).parent().children().not(e)))), n);
};
k.find = function(n) {
  return f(xt(Ot(this, (e) => xo(n, e))));
};
const Zl = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ql = /^$|^module$|\/(java|ecma)script/i, tc = ["type", "src", "nonce", "noModule"];
function ec(n, e) {
  const t = f(n);
  t.filter("script").add(t.find("script")).each((s, i) => {
    if (Ql.test(i.type) && ea.contains(i)) {
      const o = be("script");
      o.text = i.textContent.replace(Zl, ""), q(tc, (r, a) => {
        i[a] && (o[a] = i[a]);
      }), e.head.insertBefore(o, null), e.head.removeChild(o);
    }
  });
}
function sc(n, e, t, s, i) {
  s ? n.insertBefore(e, t ? n.firstChild : null) : n.nodeName === "HTML" ? n.parentNode.replaceChild(e, n) : n.parentNode.insertBefore(e, t ? n : n.nextSibling), i && ec(e, n.ownerDocument);
}
function te(n, e, t, s, i, o, r, a) {
  return q(n, (l, h) => {
    q(f(h), (u, c) => {
      q(f(e), (p, m) => {
        const g = t ? c : m, b = t ? m : c, v = t ? u : p;
        sc(g, v ? b.cloneNode(!0) : b, s, i, !v);
      }, a);
    }, r);
  }, o), e;
}
k.after = function() {
  return te(arguments, this, !1, !1, !1, !0, !0);
};
k.append = function() {
  return te(arguments, this, !1, !1, !0);
};
function nc(n) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (it(n))
    return this;
  const e = /<script[\s>]/.test(n);
  return this.each((t, s) => {
    V(s) && (e ? f(s).empty().append(n) : s.innerHTML = n);
  });
}
k.html = nc;
k.appendTo = function(n) {
  return te(arguments, this, !0, !1, !0);
};
k.wrapInner = function(n) {
  return this.each((e, t) => {
    const s = f(t), i = s.contents();
    i.length ? i.wrapAll(n) : s.append(n);
  });
};
k.before = function() {
  return te(arguments, this, !1, !0);
};
k.wrapAll = function(n) {
  let e = f(n), t = e[0];
  for (; t.children.length; )
    t = t.firstElementChild;
  return this.first().before(e), this.appendTo(t);
};
k.wrap = function(n) {
  return this.each((e, t) => {
    const s = f(n)[0];
    f(t).wrapAll(e ? s.cloneNode(!0) : s);
  });
};
k.insertAfter = function(n) {
  return te(arguments, this, !0, !1, !1, !1, !1, !0);
};
k.insertBefore = function(n) {
  return te(arguments, this, !0, !0);
};
k.prepend = function() {
  return te(arguments, this, !1, !0, !0, !0, !0);
};
k.prependTo = function(n) {
  return te(arguments, this, !0, !0, !0, !1, !1, !0);
};
k.contents = function() {
  return f(xt(Ot(this, (n) => n.tagName === "IFRAME" ? [n.contentDocument] : n.tagName === "TEMPLATE" ? n.content.childNodes : n.childNodes)));
};
k.next = function(n, e, t) {
  return Qt(f(xt(Ot(this, "nextElementSibling", e, t))), n);
};
k.nextAll = function(n) {
  return this.next(n, !0);
};
k.nextUntil = function(n, e) {
  return this.next(e, !0, n);
};
k.parents = function(n, e) {
  return Qt(f(xt(Ot(this, "parentElement", !0, e))), n);
};
k.parentsUntil = function(n, e) {
  return this.parents(e, n);
};
k.prev = function(n, e, t) {
  return Qt(f(xt(Ot(this, "previousElementSibling", e, t))), n);
};
k.prevAll = function(n) {
  return this.prev(n, !0);
};
k.prevUntil = function(n, e) {
  return this.prev(e, !0, n);
};
k.map = function(n) {
  return f(Ll.apply([], oa.call(this, (e, t) => n.call(e, t, e))));
};
k.clone = function() {
  return this.map((n, e) => e.cloneNode(!0));
};
k.offsetParent = function() {
  return this.map((n, e) => {
    let t = e.offsetParent;
    for (; t && Dt(t, "position") === "static"; )
      t = t.offsetParent;
    return t || ea;
  });
};
k.slice = function(n, e) {
  return f(ra.call(this, n, e));
};
const ic = /-([a-z])/g;
function So(n) {
  return n.replace(ic, (e, t) => t.toUpperCase());
}
k.ready = function(n) {
  const e = () => setTimeout(n, 0, f);
  return At.readyState !== "loading" ? e() : At.addEventListener("DOMContentLoaded", e), this;
};
k.unwrap = function() {
  return this.parent().each((n, e) => {
    if (e.tagName === "BODY")
      return;
    const t = f(e);
    t.replaceWith(t.children());
  }), this;
};
k.offset = function() {
  const n = this[0];
  if (!n)
    return;
  const e = n.getBoundingClientRect();
  return {
    top: e.top + un.pageYOffset,
    left: e.left + un.pageXOffset
  };
};
k.position = function() {
  const n = this[0];
  if (!n)
    return;
  const e = Dt(n, "position") === "fixed", t = e ? n.getBoundingClientRect() : this.offset();
  if (!e) {
    const s = n.ownerDocument;
    let i = n.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && Dt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== n && V(i)) {
      const o = f(i).offset();
      t.top -= o.top + vt(i, "borderTopWidth"), t.left -= o.left + vt(i, "borderLeftWidth");
    }
  }
  return {
    top: t.top - vt(n, "marginTop"),
    left: t.left - vt(n, "marginLeft")
  };
};
const ua = {
  /* GENERAL */
  class: "className",
  contenteditable: "contentEditable",
  /* LABEL */
  for: "htmlFor",
  /* INPUT */
  readonly: "readOnly",
  maxlength: "maxLength",
  tabindex: "tabIndex",
  /* TABLE */
  colspan: "colSpan",
  rowspan: "rowSpan",
  /* IMAGE */
  usemap: "useMap"
};
k.prop = function(n, e) {
  if (n) {
    if (et(n))
      return n = ua[n] || n, arguments.length < 2 ? this[0] && this[0][n] : this.each((t, s) => {
        s[n] = e;
      });
    for (const t in n)
      this.prop(t, n[t]);
    return this;
  }
};
k.removeProp = function(n) {
  return this.each((e, t) => {
    delete t[ua[n] || n];
  });
};
const oc = /^--/;
function Eo(n) {
  return oc.test(n);
}
const zi = {}, { style: rc } = sa, ac = ["webkit", "moz", "ms"];
function lc(n, e = Eo(n)) {
  if (e)
    return n;
  if (!zi[n]) {
    const t = So(n), s = `${t[0].toUpperCase()}${t.slice(1)}`, i = `${t} ${ac.join(`${s} `)}${s}`.split(" ");
    q(i, (o, r) => {
      if (r in rc)
        return zi[n] = r, !1;
    });
  }
  return zi[n];
}
const cc = {
  animationIterationCount: !0,
  columnCount: !0,
  flexGrow: !0,
  flexShrink: !0,
  fontWeight: !0,
  gridArea: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnStart: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowStart: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  widows: !0,
  zIndex: !0
};
function da(n, e, t = Eo(n)) {
  return !t && !cc[n] && aa(e) ? `${e}px` : e;
}
function hc(n, e) {
  if (et(n)) {
    const t = Eo(n);
    return n = lc(n, t), arguments.length < 2 ? this[0] && Dt(this[0], n, t) : n ? (e = da(n, e, t), this.each((s, i) => {
      V(i) && (t ? i.style.setProperty(n, e) : i.style[n] = e);
    })) : this;
  }
  for (const t in n)
    this.css(t, n[t]);
  return this;
}
k.css = hc;
function fa(n, e) {
  try {
    return n(e);
  } catch {
    return e;
  }
}
const uc = /^\s+|\s+$/;
function nr(n, e) {
  const t = n.dataset[e] || n.dataset[So(e)];
  return uc.test(t) ? t : fa(JSON.parse, t);
}
function dc(n, e, t) {
  t = fa(JSON.stringify, t), n.dataset[So(e)] = t;
}
function fc(n, e) {
  if (!n) {
    if (!this[0])
      return;
    const t = {};
    for (const s in this[0].dataset)
      t[s] = nr(this[0], s);
    return t;
  }
  if (et(n))
    return arguments.length < 2 ? this[0] && nr(this[0], n) : it(e) ? this : this.each((t, s) => {
      dc(s, n, e);
    });
  for (const t in n)
    this.data(t, n[t]);
  return this;
}
k.data = fc;
function pa(n, e) {
  const t = n.documentElement;
  return Math.max(n.body[`scroll${e}`], t[`scroll${e}`], n.body[`offset${e}`], t[`offset${e}`], t[`client${e}`]);
}
q([!0, !1], (n, e) => {
  q(["Width", "Height"], (t, s) => {
    const i = `${e ? "outer" : "inner"}${s}`;
    k[i] = function(o) {
      if (this[0])
        return Ue(this[0]) ? e ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : me(this[0]) ? pa(this[0], s) : this[0][`${e ? "offset" : "client"}${s}`] + (o && e ? vt(this[0], `margin${t ? "Top" : "Left"}`) + vt(this[0], `margin${t ? "Bottom" : "Right"}`) : 0);
    };
  });
});
q(["Width", "Height"], (n, e) => {
  const t = e.toLowerCase();
  k[t] = function(s) {
    if (!this[0])
      return it(s) ? void 0 : this;
    if (!arguments.length)
      return Ue(this[0]) ? this[0].document.documentElement[`client${e}`] : me(this[0]) ? pa(this[0], e) : this[0].getBoundingClientRect()[t] - tr(this[0], !n);
    const i = parseInt(s, 10);
    return this.each((o, r) => {
      if (!V(r))
        return;
      const a = Dt(r, "boxSizing");
      r.style[t] = da(t, i + (a === "border-box" ? tr(r, !n) : 0));
    });
  };
});
const ir = "___cd";
k.toggle = function(n) {
  return this.each((e, t) => {
    if (!V(t))
      return;
    const s = er(t);
    (it(n) ? s : n) ? (t.style.display = t[ir] || "", er(t) && (t.style.display = Kl(t.tagName))) : s || (t[ir] = Dt(t, "display"), t.style.display = "none");
  });
};
k.hide = function() {
  return this.toggle(!1);
};
k.show = function() {
  return this.toggle(!0);
};
const or = "___ce", To = ".", No = { focus: "focusin", blur: "focusout" }, ma = { mouseenter: "mouseover", mouseleave: "mouseout" }, pc = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Mo(n) {
  return ma[n] || No[n] || n;
}
function Ro(n) {
  const e = n.split(To);
  return [e[0], e.slice(1).sort()];
}
k.trigger = function(n, e) {
  if (et(n)) {
    const [s, i] = Ro(n), o = Mo(s);
    if (!o)
      return this;
    const r = pc.test(o) ? "MouseEvents" : "HTMLEvents";
    n = At.createEvent(r), n.initEvent(o, !0, !0), n.namespace = i.join(To), n.___ot = s;
  }
  n.___td = e;
  const t = n.___ot in No;
  return this.each((s, i) => {
    t && we(i[n.___ot]) && (i[`___i${n.type}`] = !0, i[n.___ot](), i[`___i${n.type}`] = !1), i.dispatchEvent(n);
  });
};
function ga(n) {
  return n[or] = n[or] || {};
}
function mc(n, e, t, s, i) {
  const o = ga(n);
  o[e] = o[e] || [], o[e].push([t, s, i]), n.addEventListener(e, i);
}
function ya(n, e) {
  return !e || !$o.call(e, (t) => n.indexOf(t) < 0);
}
function fn(n, e, t, s, i) {
  const o = ga(n);
  if (e)
    o[e] && (o[e] = o[e].filter(([r, a, l]) => {
      if (i && l.guid !== i.guid || !ya(r, t) || s && s !== a)
        return !0;
      n.removeEventListener(e, l);
    }));
  else
    for (e in o)
      fn(n, e, t, s, i);
}
k.off = function(n, e, t) {
  if (it(n))
    this.each((s, i) => {
      !V(i) && !me(i) && !Ue(i) || fn(i);
    });
  else if (et(n))
    we(e) && (t = e, e = ""), q(Mi(n), (s, i) => {
      const [o, r] = Ro(i), a = Mo(o);
      this.each((l, h) => {
        !V(h) && !me(h) && !Ue(h) || fn(h, a, r, e, t);
      });
    });
  else
    for (const s in n)
      this.off(s, n[s]);
  return this;
};
k.remove = function(n) {
  return Qt(this, n).detach().off(), this;
};
k.replaceWith = function(n) {
  return this.before(n).remove();
};
k.replaceAll = function(n) {
  return f(n).replaceWith(this), this;
};
function gc(n, e, t, s, i) {
  if (!et(n)) {
    for (const o in n)
      this.on(o, e, t, n[o], i);
    return this;
  }
  return et(e) || (it(e) || ss(e) ? e = "" : it(t) ? (t = e, e = "") : (s = t, t = e, e = "")), we(s) || (s = t, t = void 0), s ? (q(Mi(n), (o, r) => {
    const [a, l] = Ro(r), h = Mo(a), u = a in ma, c = a in No;
    h && this.each((p, m) => {
      if (!V(m) && !me(m) && !Ue(m))
        return;
      const g = function(b) {
        if (b.target[`___i${b.type}`])
          return b.stopImmediatePropagation();
        if (b.namespace && !ya(l, b.namespace.split(To)) || !e && (c && (b.target !== m || b.___ot === h) || u && b.relatedTarget && m.contains(b.relatedTarget)))
          return;
        let v = m;
        if (e) {
          let C = b.target;
          for (; !la(C, e); )
            if (C === m || (C = C.parentNode, !C))
              return;
          v = C;
        }
        Object.defineProperty(b, "currentTarget", {
          configurable: !0,
          get() {
            return v;
          }
        }), Object.defineProperty(b, "delegateTarget", {
          configurable: !0,
          get() {
            return m;
          }
        }), Object.defineProperty(b, "data", {
          configurable: !0,
          get() {
            return t;
          }
        });
        const w = s.call(v, b, b.___td);
        i && fn(m, h, l, e, g), w === !1 && (b.preventDefault(), b.stopPropagation());
      };
      g.guid = s.guid = s.guid || f.guid++, mc(m, h, l, e, g);
    });
  }), this) : this;
}
k.on = gc;
function yc(n, e, t, s) {
  return this.on(n, e, t, s, !0);
}
k.one = yc;
const bc = /\r?\n/g;
function wc(n, e) {
  return `&${encodeURIComponent(n)}=${encodeURIComponent(e.replace(bc, `\r
`))}`;
}
const vc = /file|reset|submit|button|image/i, ba = /radio|checkbox/i;
k.serialize = function() {
  let n = "";
  return this.each((e, t) => {
    q(t.elements || [t], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || vc.test(i.type) || ba.test(i.type) && !i.checked)
        return;
      const o = ha(i);
      if (!it(o)) {
        const r = Ti(o) ? o : [o];
        q(r, (a, l) => {
          n += wc(i.name, l);
        });
      }
    });
  }), n.slice(1);
};
window.$ = f;
function _c(n, e) {
  if (n == null)
    return [n, void 0];
  typeof e == "string" && (e = e.split("."));
  const t = e.join(".");
  let s = n;
  const i = [s];
  for (; typeof s == "object" && s !== null && e.length; ) {
    let o = e.shift(), r;
    const a = o.indexOf("[");
    if (a > 0 && a < o.length - 1 && o.endsWith("]") && (r = o.substring(a + 1, o.length - 1), o = o.substring(0, a)), s = s[o], i.push(s), r !== void 0)
      if (typeof s == "object" && s !== null)
        s instanceof Map ? s = s.get(r) : s = s[r], i.push(s);
      else
        throw new Error(`Cannot access property "${o}[${r}]", the full path is "${t}".`);
  }
  if (e.length)
    throw new Error(`Cannot access property with rest path "${e.join(".")}", the full path is "${t}".`);
  return i;
}
function Cc(n, e, t) {
  try {
    const s = _c(n, e), i = s[s.length - 1];
    return i === void 0 ? t : i;
  } catch {
    return t;
  }
}
function Y(n, ...e) {
  if (e.length === 0)
    return n;
  if (e.length === 1 && typeof e[0] == "object" && e[0]) {
    const t = e[0];
    return Object.keys(t).forEach((s) => {
      const i = t[s] ?? "";
      n = n.replace(new RegExp(`\\{${s}\\}`, "g"), `${i}`);
    }), n;
  }
  for (let t = 0; t < e.length; t++) {
    const s = e[t] ?? "";
    n = n.replace(new RegExp(`\\{${t}\\}`, "g"), `${s}`);
  }
  return n;
}
var Io = /* @__PURE__ */ ((n) => (n[n.B = 1] = "B", n[n.KB = 1024] = "KB", n[n.MB = 1048576] = "MB", n[n.GB = 1073741824] = "GB", n[n.TB = 1099511627776] = "TB", n))(Io || {});
function $c(n, e = 2, t) {
  return Number.isNaN(n) ? "?KB" : (t || (n < 1024 ? t = "B" : n < 1048576 ? t = "KB" : n < 1073741824 ? t = "MB" : n < 1099511627776 ? t = "GB" : t = "TB"), (n / Io[t]).toFixed(e) + t);
}
const xc = (n) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  n = n.toUpperCase();
  const t = n.match(e);
  if (!t)
    return 0;
  const s = t[1];
  return n = n.replace(s, ""), Number.parseInt(n, 10) * Io[s];
};
let Ao = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Wt;
function kc() {
  return Ao;
}
function Sc(n) {
  Ao = n.toLowerCase();
}
function wa(n, e) {
  Wt || (Wt = {}), typeof n == "string" && (n = { [n]: e ?? {} }), f.extend(!0, Wt, n);
}
function J(n, e, t, s, i, o) {
  Array.isArray(n) ? Wt && n.unshift(Wt) : n = Wt ? [Wt, n] : [n], typeof t == "string" && (o = i, i = s, s = t, t = void 0);
  const r = i || Ao;
  let a;
  for (const l of n) {
    if (!l)
      continue;
    const h = l[r];
    if (!h)
      continue;
    const u = o && l === Wt ? `${o}.${e}` : e;
    if (a = Cc(h, u), a !== void 0)
      break;
  }
  return a === void 0 ? s : t ? Y(a, ...Array.isArray(t) ? t : [t]) : a;
}
function Ec(n, e, t, s) {
  return J(void 0, n, e, t, s);
}
J.addLang = wa;
J.getLang = Ec;
J.getCode = kc;
J.setCode = Sc;
wa({
  zh_cn: {
    confirm: "确定",
    cancel: "取消",
    delete: "删除",
    add: "添加"
  },
  zh_tw: {
    confirm: "確定",
    cancel: "取消",
    delete: "刪除",
    add: "添加"
  },
  en: {
    confirm: "Confirm",
    cancel: "Cancel",
    delete: "Delete",
    add: "Add"
  }
});
function va(...n) {
  const e = [], t = /* @__PURE__ */ new Map(), s = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = t.get(i);
    typeof r == "number" ? e[r][1] = !!o : (t.set(i, e.length), e.push([i, !!o]));
  };
  return n.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? va(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((o) => s(o, !0));
  }), e.sort((i, o) => (t.get(i[0]) || 0) - (t.get(o[0]) || 0));
}
const N = (...n) => va(...n).reduce((e, [t, s]) => (s && e.push(t), e), []).join(" ");
f.classes = N;
f.fn.setClass = function(n, ...e) {
  return this.each((t, s) => {
    const i = f(s);
    n === !0 ? i.attr("class", N(i.attr("class"), ...e)) : i.addClass(N(n, ...e));
  });
};
const Qe = /* @__PURE__ */ new WeakMap();
function _a(n, e, t) {
  const s = Qe.has(n), i = s ? Qe.get(n) : {};
  typeof e == "string" ? i[e] = t : e === null ? Object.keys(i).forEach((o) => {
    delete i[o];
  }) : Object.assign(i, e), Object.keys(i).forEach((o) => {
    i[o] === void 0 && delete i[o];
  }), Object.keys(i).length ? (!s && n instanceof Element && Object.assign(i, f(n).dataset(), i), Qe.set(n, i)) : Qe.delete(n);
}
function Ca(n, e, t) {
  let s = Qe.get(n) || {};
  return !t && n instanceof Element && (s = Object.assign({}, f(n).dataset(), s)), e === void 0 ? s : s[e];
}
f.fn.dataset = f.fn.data;
f.fn.data = function(...n) {
  if (!this.length)
    return;
  const [e, t] = n;
  return !n.length || n.length === 1 && typeof e == "string" ? Ca(this[0], e) : this.each((s, i) => _a(i, e, t));
};
f.fn.removeData = function(n = null) {
  return this.each((e, t) => _a(t, n));
};
f.fn._attr = f.fn.attr;
f.fn.extend({
  attr(...n) {
    const [e, t] = n;
    return !n.length || n.length === 1 && typeof e == "string" ? this._attr.apply(this, n) : typeof e == "object" ? (e && Object.keys(e).forEach((s) => {
      const i = e[s];
      i === null ? this.removeAttr(s) : this._attr(s, i);
    }), this) : t === null ? this.removeAttr(e) : this._attr(e, t);
  }
});
f.Event = (n, e) => {
  const [t, ...s] = n.split("."), i = new Event(t, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = s.join("."), i.___ot = t, i.___td = e, i;
};
const pn = (n, e) => new Promise((t) => {
  const s = window.setTimeout(t, n);
  e && e(s);
}), rn = /* @__PURE__ */ new Map();
function mn(n) {
  const { zui: e } = window;
  return rn.size || Object.keys(e).forEach((t) => {
    const s = e[t];
    !s.NAME || !s.ZUI || rn.set(t.toLowerCase(), s);
  }), n ? rn.get(n.toLowerCase()) : void 0;
}
function Tc(n, e, t) {
  const s = mn(n);
  return s ? new s(e, t) : null;
}
function Ru(n) {
  if (n) {
    const e = mn(n);
    e && e.defineFn();
  } else
    mn(), rn.forEach((e) => {
      e.defineFn();
    });
}
f.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const e = f(this).dataset(), t = e.zui;
    delete e.zui, Tc(t, this, e);
  }), this;
};
f.fn.zui = function(n, e) {
  const t = this[0];
  if (!t)
    return;
  if (typeof n != "string") {
    const i = Ca(t, void 0, !0), o = {};
    let r;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        o[a] = l, (!r || r.gid < l.gid) && (r = o[a]);
      }
    }), n === !0 ? o : r;
  }
  const s = mn(n);
  if (s)
    return e === !0 ? s.getAll(t) : s.query(t, e);
};
f(() => {
  f("body").zuiInit();
});
function Do(n, e) {
  const t = f(n)[0];
  if (!t)
    return !1;
  let { viewport: s } = e || {};
  const { left: i, top: o, width: r, height: a } = t.getBoundingClientRect();
  if (!s) {
    const { innerHeight: g, innerWidth: b } = window, { clientHeight: v, clientWidth: w } = document.documentElement;
    s = { left: 0, top: 0, width: b || w, height: g || v };
  }
  const { left: l, top: h, width: u, height: c } = s;
  if (e != null && e.fullyCheck)
    return i >= l && o >= h && i + r <= u && o + a <= c;
  const p = i <= u && i + r >= l;
  return o <= c && o + a >= h && p;
}
f.fn.isVisible = function(n) {
  return this.each((e, t) => {
    Do(t, n);
  });
};
function Lo(n, e, t = !1) {
  const s = f(n);
  if (e !== void 0) {
    if (e.length) {
      const i = `zui-runjs-${f.guid++}`;
      s.append(`<script id="${i}">${e}<\/script>`), t && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, o) => {
    Lo(s, o.innerHTML), o.remove();
  });
}
f.runJS = (n, ...e) => (n = n.trim(), !n.startsWith("return ") && !n.endsWith(";") && (n = `return ${n}`), new Function(...e.map(([s]) => s), n)(...e.map(([, s]) => s)));
f.fn.runJS = function(n) {
  return this.each((e, t) => {
    Lo(t, n);
  });
};
function $a(n, e) {
  const t = f(n), { ifNeeded: s = !0, ...i } = e || {};
  return t.each((o, r) => {
    s && Do(r, { viewport: r.getBoundingClientRect() }) || r.scrollIntoView(i);
  }), t;
}
f.fn.scrollIntoView = function(n) {
  return this.each((e, t) => {
    $a(t, n);
  });
};
f.getScript = function(n, e, t) {
  return new Promise((s) => {
    const i = f(`script[src="${n}"]`), o = () => {
      s(), t == null || t();
    };
    if (i.length) {
      if (i.dataset("loaded"))
        o();
      else {
        const a = i.data("loadCalls") || [];
        a.push(o), i.data("loadCalls", a);
      }
      return;
    }
    const r = document.createElement("script");
    r.async = !0, e && Object.assign(r, e), r.onload = () => {
      o(), (f(r).dataset("loaded", !0).data("loadCalls") || []).forEach((l) => l()), f(r).removeData("loadCalls");
    }, r.src = n, f("head").append(r);
  });
};
const Iu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: Do,
  runJS: Lo,
  scrollIntoView: $a
}, Symbol.toStringTag, { value: "Module" }));
var Ii, W, xa, X, ee, rr, ka, Zi, Ce = {}, Sa = [], Nc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Po = Array.isArray;
function Kt(n, e) {
  for (var t in e)
    n[t] = e[t];
  return n;
}
function Ea(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
function U(n, e, t) {
  var s, i, o, r = {};
  for (o in e)
    o == "key" ? s = e[o] : o == "ref" ? i = e[o] : r[o] = e[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Ii.call(arguments, 2) : t), typeof n == "function" && n.defaultProps != null)
    for (o in n.defaultProps)
      r[o] === void 0 && (r[o] = n.defaultProps[o]);
  return an(n, r, s, i, null);
}
function an(n, e, t, s, i) {
  var o = { type: n, props: e, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++xa };
  return i == null && W.vnode != null && W.vnode(o), o;
}
function K() {
  return { current: null };
}
function Xe(n) {
  return n.children;
}
function H(n, e) {
  this.props = n, this.context = e;
}
function gn(n, e) {
  if (e == null)
    return n.__ ? gn(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var t; e < n.__k.length; e++)
    if ((t = n.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof n.type == "function" ? gn(n) : null;
}
function Ta(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++)
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    return Ta(n);
  }
}
function ar(n) {
  (!n.__d && (n.__d = !0) && ee.push(n) && !yn.__r++ || rr !== W.debounceRendering) && ((rr = W.debounceRendering) || ka)(yn);
}
function yn() {
  var n, e, t, s, i, o, r, a, l;
  for (ee.sort(Zi); n = ee.shift(); )
    n.__d && (e = ee.length, s = void 0, i = void 0, o = void 0, a = (r = (t = n).__v).__e, (l = t.__P) && (s = [], i = [], (o = Kt({}, r)).__v = r.__v + 1, Oo(l, r, o, t.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, s, a ?? gn(r), r.__h, i), Ia(s, r, i), r.__e != a && Ta(r)), ee.length > e && ee.sort(Zi));
  yn.__r = 0;
}
function Na(n, e, t, s, i, o, r, a, l, h, u) {
  var c, p, m, g, b, v, w, C, x, T, S = 0, M = s && s.__k || Sa, I = M.length, A = I, D = e.length;
  for (t.__k = [], c = 0; c < D; c++)
    (g = t.__k[c] = (g = e[c]) == null || typeof g == "boolean" || typeof g == "function" ? null : typeof g == "string" || typeof g == "number" || typeof g == "bigint" ? an(null, g, null, null, g) : Po(g) ? an(Xe, { children: g }, null, null, null) : g.__b > 0 ? an(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g) != null && (g.__ = t, g.__b = t.__b + 1, (C = Mc(g, M, w = c + S, A)) === -1 ? m = Ce : (m = M[C] || Ce, M[C] = void 0, A--), Oo(n, g, m, i, o, r, a, l, h, u), b = g.__e, (p = g.ref) && m.ref != p && (m.ref && Ho(m.ref, null, g), u.push(p, g.__c || b, g)), b != null && (v == null && (v = b), T = !(x = m === Ce || m.__v === null) && C === w, x ? C == -1 && S-- : C !== w && (C === w + 1 ? (S++, T = !0) : C > w ? A > D - w ? (S += C - w, T = !0) : S-- : S = C < w && C == w - 1 ? C - w : 0), w = c + S, T = T || C == c && !x, typeof g.type != "function" || C === w && m.__k !== g.__k ? typeof g.type == "function" || T ? g.__d !== void 0 ? (l = g.__d, g.__d = void 0) : l = b.nextSibling : l = Ra(n, b, l) : l = Ma(g, l, n), typeof t.type == "function" && (t.__d = l)));
  for (t.__e = v, c = I; c--; )
    M[c] != null && (typeof t.type == "function" && M[c].__e != null && M[c].__e == t.__d && (t.__d = M[c].__e.nextSibling), Aa(M[c], M[c]));
}
function Ma(n, e, t) {
  for (var s, i = n.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = n, e = typeof s.type == "function" ? Ma(s, e, t) : Ra(t, s.__e, e));
  return e;
}
function Ra(n, e, t) {
  return t == null || t.parentNode !== n ? n.insertBefore(e, null) : e == t && e.parentNode != null || n.insertBefore(e, t), e.nextSibling;
}
function Mc(n, e, t, s) {
  var i = n.key, o = n.type, r = t - 1, a = t + 1, l = e[t];
  if (l === null || l && i == l.key && o === l.type)
    return t;
  if (s > (l != null ? 1 : 0))
    for (; r >= 0 || a < e.length; ) {
      if (r >= 0) {
        if ((l = e[r]) && i == l.key && o === l.type)
          return r;
        r--;
      }
      if (a < e.length) {
        if ((l = e[a]) && i == l.key && o === l.type)
          return a;
        a++;
      }
    }
  return -1;
}
function Rc(n, e, t, s, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in e || bn(n, o, null, t[o], s);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === e[o] || bn(n, o, e[o], t[o], s);
}
function lr(n, e, t) {
  e[0] === "-" ? n.setProperty(e, t ?? "") : n[e] = t == null ? "" : typeof t != "number" || Nc.test(e) ? t : t + "px";
}
function bn(n, e, t, s, i) {
  var o;
  t:
    if (e === "style")
      if (typeof t == "string")
        n.style.cssText = t;
      else {
        if (typeof s == "string" && (n.style.cssText = s = ""), s)
          for (e in s)
            t && e in t || lr(n.style, e, "");
        if (t)
          for (e in t)
            s && t[e] === s[e] || lr(n.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2), n.l || (n.l = {}), n.l[e + o] = t, t ? s || n.addEventListener(e, o ? hr : cr, o) : n.removeEventListener(e, o ? hr : cr, o);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e in n)
        try {
          n[e] = t ?? "";
          break t;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && e[4] !== "-" ? n.removeAttribute(e) : n.setAttribute(e, t));
    }
}
function cr(n) {
  return this.l[n.type + !1](W.event ? W.event(n) : n);
}
function hr(n) {
  return this.l[n.type + !0](W.event ? W.event(n) : n);
}
function Oo(n, e, t, s, i, o, r, a, l, h) {
  var u, c, p, m, g, b, v, w, C, x, T, S, M, I, A, D = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (l = t.__h, a = e.__e = t.__e, e.__h = null, o = [a]), (u = W.__b) && u(e);
  try {
    t:
      if (typeof D == "function") {
        if (w = e.props, C = (u = D.contextType) && s[u.__c], x = u ? C ? C.props.value : u.__ : s, t.__c ? v = (c = e.__c = t.__c).__ = c.__E : ("prototype" in D && D.prototype.render ? e.__c = c = new D(w, x) : (e.__c = c = new H(w, x), c.constructor = D, c.render = Ac), C && C.sub(c), c.props = w, c.state || (c.state = {}), c.context = x, c.__n = s, p = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), D.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Kt({}, c.__s)), Kt(c.__s, D.getDerivedStateFromProps(w, c.__s))), m = c.props, g = c.state, c.__v = e, p)
          D.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (D.getDerivedStateFromProps == null && w !== m && c.componentWillReceiveProps != null && c.componentWillReceiveProps(w, x), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(w, c.__s, x) === !1 || e.__v === t.__v)) {
            for (e.__v !== t.__v && (c.props = w, c.state = c.__s, c.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(B) {
              B && (B.__ = e);
            }), T = 0; T < c._sb.length; T++)
              c.__h.push(c._sb[T]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(w, c.__s, x), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(m, g, b);
          });
        }
        if (c.context = x, c.props = w, c.__P = n, c.__e = !1, S = W.__r, M = 0, "prototype" in D && D.prototype.render) {
          for (c.state = c.__s, c.__d = !1, S && S(e), u = c.render(c.props, c.state, c.context), I = 0; I < c._sb.length; I++)
            c.__h.push(c._sb[I]);
          c._sb = [];
        } else
          do
            c.__d = !1, S && S(e), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++M < 25);
        c.state = c.__s, c.getChildContext != null && (s = Kt(Kt({}, s), c.getChildContext())), p || c.getSnapshotBeforeUpdate == null || (b = c.getSnapshotBeforeUpdate(m, g)), Na(n, Po(A = u != null && u.type === Xe && u.key == null ? u.props.children : u) ? A : [A], e, t, s, i, o, r, a, l, h), c.base = e.__e, e.__h = null, c.__h.length && r.push(c), v && (c.__E = c.__ = null);
      } else
        o == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = Ic(t.__e, e, t, s, i, o, r, l, h);
    (u = W.diffed) && u(e);
  } catch (B) {
    e.__v = null, (l || o != null) && (e.__e = a, e.__h = !!l, o[o.indexOf(a)] = null), W.__e(B, e, t);
  }
}
function Ia(n, e, t) {
  for (var s = 0; s < t.length; s++)
    Ho(t[s], t[++s], t[++s]);
  W.__c && W.__c(e, n), n.some(function(i) {
    try {
      n = i.__h, i.__h = [], n.some(function(o) {
        o.call(i);
      });
    } catch (o) {
      W.__e(o, i.__v);
    }
  });
}
function Ic(n, e, t, s, i, o, r, a, l) {
  var h, u, c, p = t.props, m = e.props, g = e.type, b = 0;
  if (g === "svg" && (i = !0), o != null) {
    for (; b < o.length; b++)
      if ((h = o[b]) && "setAttribute" in h == !!g && (g ? h.localName === g : h.nodeType === 3)) {
        n = h, o[b] = null;
        break;
      }
  }
  if (n == null) {
    if (g === null)
      return document.createTextNode(m);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, m.is && m), o = null, a = !1;
  }
  if (g === null)
    p === m || a && n.data === m || (n.data = m);
  else {
    if (o = o && Ii.call(n.childNodes), u = (p = t.props || Ce).dangerouslySetInnerHTML, c = m.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (p = {}, b = 0; b < n.attributes.length; b++)
          p[n.attributes[b].name] = n.attributes[b].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === n.innerHTML) || (n.innerHTML = c && c.__html || ""));
    }
    if (Rc(n, m, p, i, a), c)
      e.__k = [];
    else if (Na(n, Po(b = e.props.children) ? b : [b], e, t, s, i && g !== "foreignObject", o, r, o ? o[0] : t.__k && gn(t, 0), a, l), o != null)
      for (b = o.length; b--; )
        o[b] != null && Ea(o[b]);
    a || ("value" in m && (b = m.value) !== void 0 && (b !== n.value || g === "progress" && !b || g === "option" && b !== p.value) && bn(n, "value", b, p.value, !1), "checked" in m && (b = m.checked) !== void 0 && b !== n.checked && bn(n, "checked", b, p.checked, !1));
  }
  return n;
}
function Ho(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (s) {
    W.__e(s, t);
  }
}
function Aa(n, e, t) {
  var s, i;
  if (W.unmount && W.unmount(n), (s = n.ref) && (s.current && s.current !== n.__e || Ho(s, null, e)), (s = n.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (o) {
        W.__e(o, e);
      }
    s.base = s.__P = null, n.__c = void 0;
  }
  if (s = n.__k)
    for (i = 0; i < s.length; i++)
      s[i] && Aa(s[i], e, t || typeof n.type != "function");
  t || n.__e == null || Ea(n.__e), n.__ = n.__e = n.__d = void 0;
}
function Ac(n, e, t) {
  return this.constructor(n, t);
}
function wn(n, e, t) {
  var s, i, o, r;
  W.__ && W.__(n, e), i = (s = typeof t == "function") ? null : t && t.__k || e.__k, o = [], r = [], Oo(e, n = (!s && t || e).__k = U(Xe, null, [n]), i || Ce, Ce, e.ownerSVGElement !== void 0, !s && t ? [t] : i ? null : e.firstChild ? Ii.call(e.childNodes) : null, o, !s && t ? t : i ? i.__e : e.firstChild, s, r), Ia(o, n, r);
}
Ii = Sa.slice, W = { __e: function(n, e, t, s) {
  for (var i, o, r; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, xa = 0, X = function(n) {
  return n != null && n.constructor === void 0;
}, H.prototype.setState = function(n, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Kt({}, this.state), typeof n == "function" && (n = n(Kt({}, t), this.props)), n && Kt(t, n), n != null && this.__v && (e && this._sb.push(e), ar(this));
}, H.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), ar(this));
}, H.prototype.render = Xe, ee = [], ka = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Zi = function(n, e) {
  return n.__v.__b - e.__v.__b;
}, yn.__r = 0;
var Da = function(n, e, t, s) {
  var i;
  e[0] = 0;
  for (var o = 1; o < e.length; o++) {
    var r = e[o++], a = e[o] ? (e[0] |= r ? 1 : 2, t[e[o++]]) : e[++o];
    r === 3 ? s[0] = a : r === 4 ? s[1] = Object.assign(s[1] || {}, a) : r === 5 ? (s[1] = s[1] || {})[e[++o]] = a : r === 6 ? s[1][e[++o]] += a + "" : r ? (i = n.apply(a, Da(n, a, t, ["", null])), s.push(i), a[0] ? e[0] |= 2 : (e[o - 2] = 0, e[o] = i)) : s.push(a);
  }
  return s;
}, ur = /* @__PURE__ */ new Map();
function Dc(n) {
  var e = ur.get(this);
  return e || (e = /* @__PURE__ */ new Map(), ur.set(this, e)), (e = Da(this, e.get(n) || (e.set(n, e = function(t) {
    for (var s, i, o = 1, r = "", a = "", l = [0], h = function(p) {
      o === 1 && (p || (r = r.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, p, r) : o === 3 && (p || r) ? (l.push(3, p, r), o = 2) : o === 2 && r === "..." && p ? l.push(4, p, 0) : o === 2 && r && !p ? l.push(5, 0, !0, r) : o >= 5 && ((r || !p && o === 5) && (l.push(o, 0, r, i), o = 6), p && (l.push(o, p, 0, i), o = 6)), r = "";
    }, u = 0; u < t.length; u++) {
      u && (o === 1 && h(), h(u));
      for (var c = 0; c < t[u].length; c++)
        s = t[u][c], o === 1 ? s === "<" ? (h(), l = [l], o = 3) : r += s : o === 4 ? r === "--" && s === ">" ? (o = 1, r = "") : r = s + r[0] : a ? s === a ? a = "" : r += s : s === '"' || s === "'" ? a = s : s === ">" ? (h(), o = 1) : o && (s === "=" ? (o = 5, i = r, r = "") : s === "/" && (o < 5 || t[u][c + 1] === ">") ? (h(), o === 3 && (l = l[0]), o = l, (l = l[0]).push(2, 0, o), o = 0) : s === " " || s === "	" || s === `
` || s === "\r" ? (h(), o = 2) : r += s), o === 3 && r === "!--" && (o = 4, l = l[0]);
    }
    return h(), l;
  }(n)), e), arguments, [])).length > 1 ? e : e[0];
}
const Au = Dc.bind(U);
function La(n) {
  const { tagName: e = "div", className: t, style: s, children: i, attrs: o, forwardRef: r, ...a } = n;
  return U(e, { ref: r, class: N(t), style: s, ...a, ...o }, i);
}
var Lc = 0;
function d(n, e, t, s, i, o) {
  var r, a, l = {};
  for (a in e)
    a == "ref" ? r = e[a] : l[a] = e[a];
  var h = { type: n, props: l, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Lc, __source: i, __self: o };
  if (typeof n == "function" && (r = n.defaultProps))
    for (a in r)
      l[a] === void 0 && (l[a] = r[a]);
  return W.vnode && W.vnode(h), h;
}
var as, ls, Qi;
class Zs extends H {
  constructor() {
    super(...arguments);
    _(this, ls);
    _(this, as, K());
  }
  componentDidMount() {
    L(this, ls, Qi).call(this);
  }
  componentDidUpdate(t) {
    this.props.html !== t.html && L(this, ls, Qi).call(this);
  }
  render(t) {
    const { executeScript: s, html: i, ...o } = t;
    return /* @__PURE__ */ d(La, { forwardRef: y(this, as), dangerouslySetInnerHTML: { __html: i }, ...o });
  }
}
as = new WeakMap(), ls = new WeakSet(), Qi = function() {
  this.props.executeScript && f(y(this, as).current).runJS();
};
function Pc(n) {
  const {
    tag: e,
    className: t,
    style: s,
    renders: i,
    generateArgs: o = [],
    generatorThis: r,
    generators: a,
    onGenerate: l,
    onRenderItem: h,
    ...u
  } = n, c = [t], p = { ...s }, m = [], g = [];
  return i.forEach((b) => {
    const v = [];
    if (typeof b == "string" && a && a[b] && (b = a[b]), typeof b == "function")
      if (l)
        v.push(...l.call(r, b, m, ...o));
      else {
        const w = b.call(r, m, ...o);
        w && (Array.isArray(w) ? v.push(...w) : v.push(w));
      }
    else
      v.push(b);
    v.forEach((w) => {
      w != null && (typeof w == "object" && !X(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? m.push(
        /* @__PURE__ */ d("div", { className: N(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? g.push(w.__html) : (w.style && Object.assign(p, w.style), w.className && c.push(w.className), w.children && m.push(w.children), w.attrs && Object.assign(u, w.attrs)) : m.push(w));
    });
  }), g.length && Object.assign(u, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: N(c),
    style: p,
    ...u
  }, m];
}
function to({
  tag: n = "div",
  ...e
}) {
  const [t, s] = Pc(e);
  return U(n, t, ...s);
}
function Pa(n, e, t) {
  return typeof n == "function" ? n.call(e, ...t) : Array.isArray(n) ? n.map((s) => Pa(s, e, t)) : X(n) || n === null ? n : typeof n == "object" ? n.html ? /* @__PURE__ */ d(Zs, { ...n }) : /* @__PURE__ */ d(La, { ...n }) : n;
}
function Je(n) {
  const { content: e, generatorThis: t, generatorArgs: s } = n, i = Pa(e, t, s);
  return i == null || typeof i == "boolean" ? null : X(i) ? i : /* @__PURE__ */ d(Xe, { children: i });
}
const dr = (n) => n.startsWith("icon-") ? n : `icon-${n}`;
function tt(n) {
  const { icon: e, className: t, ...s } = n;
  if (!e)
    return null;
  if (X(e))
    return e;
  const i = ["icon", t];
  if (typeof e == "string")
    i.push(dr(e));
  else if (typeof e == "object") {
    const { className: o, icon: r, ...a } = e;
    i.push(o, r ? dr(r) : ""), Object.assign(s, a);
  }
  return /* @__PURE__ */ d("i", { className: N(i), ...s });
}
function Oc(n) {
  return this.getChildContext = () => n.context, n.children;
}
function Hc(n) {
  const e = this, t = n._container;
  e.componentWillUnmount = function() {
    wn(null, e._temp), e._temp = null, e._container = null;
  }, e._container && e._container !== t && e.componentWillUnmount(), n._vnode ? (e._temp || (e._container = t, e._temp = {
    nodeType: 1,
    parentNode: t,
    childNodes: [],
    appendChild(s) {
      this.childNodes.push(s), e._container.appendChild(s);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    insertBefore(s, i) {
      this.childNodes.push(s), e._container.appendChild(s);
    },
    removeChild(s) {
      this.childNodes.splice(this.childNodes.indexOf(s) >>> 1, 1), e._container.removeChild(s);
    }
  }), wn(
    U(Oc, { context: e.context }, n._vnode),
    e._temp
  )) : e._temp && e.componentWillUnmount();
}
function Bc(n, e) {
  const t = U(Hc, { _vnode: n, _container: e });
  return t.containerInfo = e, t;
}
const Nn = class Nn {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    this._inited = !1;
    const { KEY: s, DATA_KEY: i, DEFAULT: o, MULTI_INSTANCE: r, NAME: a } = this.constructor;
    if (!a)
      throw new Error('[ZUI] The component must have a "NAME" static property.');
    const l = f(e);
    if (l.data(s) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const h = f.guid++;
    if (this._gid = h, this._element = l[0], l.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), this._options = { ...o, ...l.dataset() }, this.setOptions(t), this._key = this.options.key ?? `__${h}`, l.data(s, this).attr(i, `${h}`), r) {
      const u = `${s}:ALL`;
      let c = l.data(u);
      c || (c = /* @__PURE__ */ new Map(), l.data(u, c)), c.set(this._key, this);
    }
    this.init(), requestAnimationFrame(() => {
      this._inited = !0, this.afterInit(), this.emit("inited", this.options);
    });
  }
  /**
   * ZUI name
   */
  static get ZUI() {
    return this.NAME.replace(/(^[A-Z]+)/, (e) => e.toLowerCase());
  }
  /**
   * Component data key, like "zui.menu"
   */
  static get KEY() {
    return `zui.${this.NAME}`;
  }
  /**
   * Component namespace, like ".zui.menu"
   */
  static get NAMESPACE() {
    return `.zui.${this.ZUI}`;
  }
  static get DATA_KEY() {
    return `data-zui-${this.NAME}`;
  }
  get inited() {
    return this._inited;
  }
  /**
   * Get the component element.
   */
  get element() {
    return this._element;
  }
  get key() {
    return this._key;
  }
  /**
   * Get the component options.
   */
  get options() {
    return this._options;
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return this._gid;
  }
  /**
   * Get the component element as a jQuery like object.
   */
  get $element() {
    return f(this.element);
  }
  /**
   * Get the component event emitter.
   */
  get $emitter() {
    return this.$element;
  }
  /**
   * Initialize the component.
   */
  init() {
  }
  /**
   * Do something after the component initialized.
   */
  afterInit() {
  }
  /**
   * Render the component.
   *
   * @param options The component options to override before render.
   */
  render(e) {
    this.setOptions(e);
  }
  /**
   * Destroy the component.
   */
  destroy() {
    const { KEY: e, DATA_KEY: t, MULTI_INSTANCE: s } = this.constructor, { $element: i } = this;
    if (this.emit("destroyed"), i.off(this.namespace).removeData(e).attr(t, null), s) {
      const o = this.$element.data(`${e}:ALL`);
      if (o)
        if (o.delete(this._key), o.size === 0)
          this.$element.removeData(`${e}:ALL`);
        else {
          const r = o.values().next().value;
          i.data(e, r).attr(t, r.gid);
        }
    }
    this._options = void 0, this._element = void 0;
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(e) {
    return e && f.extend(this._options, e), this._options;
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(e, ...t) {
    const s = f.Event(e);
    return s.__src = this, this.$emitter.trigger(s, [this, ...t]), s;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(e, t, s) {
    const i = this;
    this.$element[s != null && s.once ? "one" : "on"](this._wrapEvent(e), function(o, r) {
      (!o.__src || o.__src === i) && t.call(this, o, r);
    });
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  one(e, t) {
    this.on(e, t, { once: !0 });
  }
  /**
   * Stop listening to a component event.
   * @param event     The event name.
   * @param callback  The event callback.
   */
  off(e) {
    this.$element.off(this._wrapEvent(e));
  }
  /**
   * Get the i18n text.
   *
   * @param key          The i18n key.
   * @param args         The i18n arguments or the default value.
   * @param defaultValue The default value if the key is not found.
   * @returns            The i18n text.
   */
  i18n(e, t, s) {
    return J(this.options.i18n, e, t, s, this.options.lang, this.constructor.NAME) ?? J(this.options.i18n, e, t, s, this.options.lang) ?? `{i18n:${e}}`;
  }
  /**
   * Get event namespace.
   * @returns Event namespace.
   */
  get namespace() {
    return `${this.constructor.NAMESPACE}.${this._key}`;
  }
  /**
   * Wrap event names with component namespace.
   *
   * @param names The event names.
   * @returns     The wrapped event names.
   */
  _wrapEvent(e) {
    return e.split(" ").map((t) => t.includes(".") ? t : `${t}${this.namespace}`).join(" ");
  }
  /**
   * Get the component instance of the given element.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static get(e, t) {
    const s = f(e);
    if (this.MULTI_INSTANCE && t !== void 0) {
      const i = s.data(`${this.KEY}:ALL`);
      return i ? i.get(t) : void 0;
    }
    return s.data(this.KEY);
  }
  /**
   * Ensure the component instance of the given element.
   *
   * @param this      Current component constructor.
   * @param selector  The component element selector.
   * @param options   The component options.
   * @returns         The component instance.
   */
  static ensure(e, t) {
    const s = this.get(e, t == null ? void 0 : t.key);
    return s ? (t && s.setOptions(t), s) : new this(e, t);
  }
  /**
   * Get all component instances.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        All component instances.
   */
  static getAll(e) {
    const { MULTI_INSTANCE: t, DATA_KEY: s } = this, i = [];
    return f(e || document).find(`[${s}]`).each((o, r) => {
      if (t) {
        const l = f(r).data(`${this.KEY}:ALL`);
        if (l) {
          i.push(...l.values());
          return;
        }
      }
      const a = f(r).data(this.KEY);
      a && i.push(a);
    }), i;
  }
  /**
   * Query the component instance.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static query(e, t) {
    return e === void 0 ? this.getAll().sort((s, i) => s.gid - i.gid)[0] : this.get(f(e).closest(`[${this.DATA_KEY}]`), t);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(e) {
    let t = e || this.ZUI;
    f.fn[t] && (t = `zui${this.NAME}`);
    const s = this;
    f.fn.extend({
      [t](i, ...o) {
        const r = typeof i == "object" ? i : void 0, a = typeof i == "string" ? i : void 0;
        let l;
        return this.each((h, u) => {
          let c = s.get(u);
          if (c ? r && c.render(r) : c = new s(u, r), a) {
            let p = c[a], m = c;
            p === void 0 && (m = c.$, p = m[a]), typeof p == "function" ? l = p.call(m, ...o) : l = p;
          }
        }), l !== void 0 ? l : this;
      }
    });
  }
};
Nn.DEFAULT = {}, Nn.MULTI_INSTANCE = !1;
let Ct = Nn;
class z extends Ct {
  constructor() {
    super(...arguments), this.ref = K();
  }
  /**
   * The React component instance.
   */
  get $() {
    return this.ref.current;
  }
  /**
   * Render after component init.
   */
  afterInit() {
    this.render();
  }
  /**
   * Destroy component.
   */
  destroy() {
    var e, t;
    (t = (e = this.$) == null ? void 0 : e.componentWillUnmount) == null || t.call(e), this.element && (this.element.innerHTML = ""), super.destroy();
  }
  /**
   * Render component.
   *
   * @param options new options.
   */
  render(e) {
    wn(
      U(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(e)
      }),
      this.element
    );
  }
}
function Wc({
  component: n = "div",
  className: e,
  children: t,
  style: s,
  attrs: i
}) {
  return U(n, {
    className: N(e),
    style: s,
    ...i
  }, t);
}
function Oa({
  type: n,
  component: e = "a",
  className: t,
  children: s,
  content: i,
  attrs: o,
  url: r,
  disabled: a,
  active: l,
  icon: h,
  text: u,
  target: c,
  trailingIcon: p,
  hint: m,
  checked: g,
  onClick: b,
  data: v,
  ...w
}) {
  const C = [
    typeof g == "boolean" ? /* @__PURE__ */ d("div", { class: `checkbox-primary${g ? " checked" : ""}`, children: /* @__PURE__ */ d("label", {}) }) : null,
    /* @__PURE__ */ d(tt, { icon: h }),
    /* @__PURE__ */ d("span", { className: "text", children: u }),
    /* @__PURE__ */ d(Je, { content: i }),
    s,
    /* @__PURE__ */ d(tt, { icon: p })
  ];
  return U(e, {
    className: N(t, { disabled: a, active: l }),
    title: m,
    [e === "a" ? "href" : "data-url"]: r,
    [e === "a" ? "target" : "data-target"]: c,
    onClick: b,
    ...w,
    ...o
  }, ...C);
}
function Fc({
  component: n = "div",
  className: e,
  text: t,
  attrs: s,
  children: i,
  content: o,
  style: r,
  onClick: a
}) {
  return U(n, {
    className: N(e),
    style: r,
    onClick: a,
    ...s
  }, t, /* @__PURE__ */ d(Je, { content: o }), i);
}
function zc({
  component: n = "div",
  className: e,
  style: t,
  space: s,
  flex: i,
  attrs: o,
  onClick: r,
  children: a
}) {
  return U(n, {
    className: N(e),
    style: { width: s, height: s, flex: i, ...t },
    onClick: r,
    ...o
  }, a);
}
function jc({ type: n, ...e }) {
  return /* @__PURE__ */ d(to, { ...e });
}
function Ha({
  component: n = "div",
  className: e,
  children: t,
  content: s,
  style: i,
  attrs: o
}) {
  return U(n, {
    className: N(e),
    style: i,
    ...o
  }, /* @__PURE__ */ d(Je, { content: s }), t);
}
var Nt;
let Ai = (Nt = class extends H {
  constructor() {
    super(...arguments), this.ref = K();
  }
  get name() {
    return this.props.name ?? this.constructor.NAME;
  }
  componentDidMount() {
    this.afterRender(!0);
  }
  componentDidUpdate() {
    this.afterRender(!1);
  }
  componentWillUnmount() {
    var e, t;
    (t = (e = this.props).beforeDestroy) == null || t.call(e, { menu: this });
  }
  afterRender(e) {
    var t, s;
    (s = (t = this.props).afterRender) == null || s.call(t, { menu: this, firstRender: e });
  }
  handleItemClick(e, t, s, i) {
    s && s.call(i.target, i, e, t);
    const { onClickItem: o } = this.props;
    o && o({ menu: this, item: e, index: t, event: i });
  }
  beforeRender() {
    var s;
    const e = { ...this.props };
    typeof e.items == "function" && (e.items = e.items(this)), e.items || (e.items = []);
    const t = (s = e.beforeRender) == null ? void 0 : s.call(e, { menu: this, options: e });
    return t && Object.assign(e, t), e;
  }
  getItemRenderProps(e, t, s) {
    const { commonItemProps: i, onClickItem: o, itemRenderProps: r } = e;
    let a = { ...t };
    return i && Object.assign(a, i[t.type || "item"]), (o || t.onClick) && (a.onClick = this.handleItemClick.bind(this, a, s, t.onClick)), a.className = N(a.className), r && (a = r(a)), a;
  }
  renderItem(e, t, s) {
    if (!t)
      return null;
    const i = this.getItemRenderProps(e, t, s), { itemRender: o } = e;
    if (o) {
      if (typeof o == "object") {
        const b = o[t.type || "item"];
        if (b)
          return /* @__PURE__ */ d(b, { ...i });
      } else if (typeof o == "function") {
        const b = o.call(this, i, U);
        if (X(b))
          return b;
        typeof b == "object" && Object.assign(i, b);
      }
    }
    const { type: r = "item", component: a, key: l = s, rootAttrs: h, rootClass: u, rootStyle: c, rootChildren: p, ...m } = i;
    if (r === "html")
      return /* @__PURE__ */ d(
        "li",
        {
          className: N("action-menu-item", `${this.name}-html`, u, m.className),
          ...h,
          style: c || m.style,
          dangerouslySetInnerHTML: { __html: m.html }
        },
        l
      );
    const g = !a || typeof a == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || Nt.ItemComponents[r] : a;
    return Object.assign(m, {
      type: r,
      component: typeof a == "string" ? a : void 0
    }), e.checkbox && r === "item" && m.checked === void 0 && (m.checked = !!m.active), this.renderTypedItem(g, {
      className: N(u),
      children: p,
      style: c,
      key: l,
      ...h
    }, {
      ...m,
      type: r,
      component: typeof a == "string" ? a : void 0
    });
  }
  renderTypedItem(e, t, s) {
    const { children: i, className: o, key: r, ...a } = t;
    return /* @__PURE__ */ d(
      "li",
      {
        className: N(`${this.constructor.NAME}-item`, `${this.name}-${s.type}`, o),
        ...a,
        children: [
          /* @__PURE__ */ d(e, { ...s }),
          typeof i == "function" ? i() : i
        ]
      },
      r
    );
  }
  render() {
    const e = this.beforeRender(), {
      name: t,
      style: s,
      commonItemProps: i,
      className: o,
      items: r,
      children: a,
      itemRender: l,
      onClickItem: h,
      beforeRender: u,
      afterRender: c,
      beforeDestroy: p,
      ...m
    } = e, g = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ d(g, { class: N(this.name, o), style: s, ...m, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, e)),
      a
    ] });
  }
}, Nt.ItemComponents = {
  divider: Wc,
  item: Oa,
  heading: Fc,
  space: zc,
  custom: jc,
  basic: Ha
}, Nt.ROOT_TAG = "menu", Nt.NAME = "action-menu", Nt);
const Mn = class Mn extends z {
};
Mn.NAME = "ActionMenu", Mn.Component = Ai;
let fr = Mn;
function Vc({
  items: n,
  show: e,
  level: t,
  ...s
}) {
  return /* @__PURE__ */ d(Oa, { ...s });
}
var cs, ht, ke, hs;
let Bo = (hs = class extends Ai {
  constructor(t) {
    super(t);
    _(this, cs, /* @__PURE__ */ new Set());
    _(this, ht, void 0);
    _(this, ke, (t, s, i) => {
      f(i.target).closest(".not-nested-toggle").length || (this.toggle(t, s), i.preventDefault());
    });
    $(this, ht, t.nestedShow === void 0), y(this, ht) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const t = super.beforeRender(), { nestedShow: s, nestedTrigger: i, defaultNestedShow: o, controlledMenu: r, indent: a, ...l } = t;
    return typeof l.items == "function" && (l.items = l.items(this)), l.items || (l.items = []), l.items.some((h) => h.items) || (l.className = N(l.className, "no-nested-items")), !r && a && (l.style = Object.assign({
      [`--${this.name}-indent`]: `${a}px`
    }, l.style)), l;
  }
  getNestedMenuProps(t) {
    const { name: s, controlledMenu: i, nestedShow: o, beforeDestroy: r, beforeRender: a, itemRender: l, onClickItem: h, afterRender: u, commonItemProps: c, level: p, itemRenderProps: m } = this.props;
    return {
      items: t,
      name: s,
      nestedShow: y(this, ht) ? this.state.nestedShow : o,
      nestedTrigger: this.nestedTrigger,
      controlledMenu: i || this,
      commonItemProps: c,
      onClickItem: h,
      afterRender: u,
      beforeRender: a,
      beforeDestroy: r,
      itemRender: l,
      itemRenderProps: m,
      level: (p || 0) + 1
    };
  }
  renderNestedMenu(t) {
    let { items: s } = t;
    if (!s || (typeof s == "function" && (s = s(t, this)), !s.length))
      return;
    const i = this.constructor, o = this.getNestedMenuProps(s);
    return /* @__PURE__ */ d(i, { ...o, "data-level": o.level });
  }
  isNestedItem(t) {
    return (!t.type || t.type === "item") && !!t.items;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renderToggleIcon(t, s) {
  }
  getItemRenderProps(t, s, i) {
    const o = super.getItemRenderProps(t, s, i);
    if (o.level = t.level || 0, !this.isNestedItem(o))
      return o;
    const r = o.key ?? o.id ?? `${t.level || 0}:${i}`;
    y(this, cs).add(r);
    const a = this.isExpanded(r);
    if (a && (o.rootChildren = [
      o.rootChildren,
      this.renderNestedMenu(s)
    ]), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: y(this, ke).bind(this, r, !0),
        onMouseLeave: y(this, ke).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = o;
      o.onClick = (u) => {
        y(this, ke).call(this, r, void 0, u), h == null || h(u);
      };
    }
    const l = this.renderToggleIcon(a, o);
    return l && (o.children = [o.children, l]), o.show = a, o.rootClass = [o.rootClass, "has-nested-menu", a ? "show" : ""], o;
  }
  isExpanded(t) {
    const s = y(this, ht) ? this.state.nestedShow : this.props.nestedShow;
    return s && typeof s == "object" ? s[t] : !!s;
  }
  toggle(t, s) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggle(t, s);
    if (!y(this, ht))
      return !1;
    let { nestedShow: o = {} } = this.state;
    if (typeof o == "boolean" && (o === !0 ? o = [...y(this, cs).values()].reduce((r, a) => (r[a] = !0, r), {}) : o = {}), s === void 0)
      s = !o[t];
    else if (!!o[t] == !!s)
      return !1;
    return s ? o[t] = s : delete o[t], this.setState({ nestedShow: { ...o } }), !0;
  }
  expand(t) {
    return this.toggle(t, !0);
  }
  collapse(t) {
    return this.toggle(t, !1);
  }
  expandAll() {
    y(this, ht) && this.setState({ nestedShow: !0 });
  }
  collapseAll() {
    y(this, ht) && this.setState({ nestedShow: !1 });
  }
}, cs = new WeakMap(), ht = new WeakMap(), ke = new WeakMap(), hs.ItemComponents = {
  item: Vc
}, hs);
const Rn = class Rn extends z {
};
Rn.NAME = "ActionMenuNested", Rn.Component = Bo;
let pr = Rn;
var us;
let ge = (us = class extends Bo {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const e = super.beforeRender();
    let { hasIcons: t } = e;
    return t === void 0 && (t = e.items.some((s) => s.icon)), e.className = N(e.className, this.menuName, {
      "has-icons": t,
      "has-nested-items": e.items.some((s) => this.isNestedItem(s)),
      popup: e.popup
    }), e;
  }
  renderToggleIcon(e) {
    return /* @__PURE__ */ d("span", { class: `${this.name}-toggle-icon caret-${e ? "down" : "right"}` });
  }
}, us.NAME = "menu", us);
const In = class In extends z {
};
In.NAME = "Menu", In.Component = ge;
let mr = In;
class Q extends H {
  render() {
    const {
      component: e,
      type: t,
      btnType: s,
      size: i,
      className: o,
      children: r,
      url: a,
      target: l,
      disabled: h,
      active: u,
      loading: c,
      loadingIcon: p,
      loadingText: m,
      icon: g,
      text: b,
      trailingIcon: v,
      caret: w,
      square: C,
      rounded: x = !0,
      hint: T,
      ...S
    } = this.props, M = e || (a ? "a" : "button"), I = b == null || typeof b == "string" && !b.length || c && !m, A = w && I && !g && !v && !r && !c;
    return U(
      M,
      {
        className: N("btn", t, o, {
          "btn-caret": A,
          disabled: h || c,
          active: u,
          loading: c,
          square: C === void 0 ? !A && !r && I : C
        }, i ? `size-${i}` : "", typeof x == "string" ? x : { rounded: x }),
        title: T,
        [M === "a" ? "href" : "data-url"]: a,
        [M === "a" ? "target" : "data-target"]: l,
        type: M === "button" ? s : void 0,
        ...S
      },
      c ? /* @__PURE__ */ d(tt, { icon: p || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ d(tt, { icon: g }),
      I ? null : /* @__PURE__ */ d("span", { className: "text", children: c ? m : b }),
      c ? null : r,
      c ? null : /* @__PURE__ */ d(tt, { icon: v }),
      c ? null : w ? /* @__PURE__ */ d("span", { className: typeof w == "string" ? `caret-${w}` : "caret" }) : null
    );
  }
}
function Uc({
  key: n,
  type: e,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ d(Q, { type: t, ...s });
}
let qc = class extends H {
  render(e) {
    const {
      id: t,
      popup: s,
      title: i,
      content: o,
      style: r,
      className: a,
      closeBtn: l,
      arrow: h,
      headingClass: u,
      titleClass: c,
      contentClass: p,
      arrowStyle: m,
      onlyInner: g
    } = e;
    let b = /* @__PURE__ */ d(Je, { content: o }, "content");
    (p || i) && (b = /* @__PURE__ */ d("div", { className: p, children: b }, "content"));
    const v = [], w = l ? /* @__PURE__ */ d("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ d("span", { className: "close" }) }) : null;
    return i ? v.push(/* @__PURE__ */ d("div", { className: u, children: [
      i ? /* @__PURE__ */ d("div", { className: c, children: i }) : null,
      w
    ] }, "heading")) : v.push(w), v.push(b), h && v.push(/* @__PURE__ */ d("div", { className: typeof h == "string" ? h : "arrow", style: m }, "arrow")), g ? v : /* @__PURE__ */ d("div", { id: t, className: N("popover", a, { popup: s }), style: r, children: v });
  }
};
const An = class An extends z {
};
An.NAME = "PopoverPanel", An.Component = qc;
let eo = An;
function Qs(n) {
  return n.split("-")[1];
}
function Wo(n) {
  return n === "y" ? "height" : "width";
}
function de(n) {
  return n.split("-")[0];
}
function tn(n) {
  return ["top", "bottom"].includes(de(n)) ? "x" : "y";
}
function gr(n, e, t) {
  let { reference: s, floating: i } = n;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, a = tn(e), l = Wo(a), h = s[l] / 2 - i[l] / 2, u = a === "x";
  let c;
  switch (de(e)) {
    case "top":
      c = { x: o, y: s.y - i.height };
      break;
    case "bottom":
      c = { x: o, y: s.y + s.height };
      break;
    case "right":
      c = { x: s.x + s.width, y: r };
      break;
    case "left":
      c = { x: s.x - i.width, y: r };
      break;
    default:
      c = { x: s.x, y: s.y };
  }
  switch (Qs(e)) {
    case "start":
      c[a] -= h * (t && u ? -1 : 1);
      break;
    case "end":
      c[a] += h * (t && u ? -1 : 1);
  }
  return c;
}
const Yc = async (n, e, t) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let h = await r.getElementRects({ reference: n, floating: e, strategy: i }), { x: u, y: c } = gr(h, s, l), p = s, m = {}, g = 0;
  for (let b = 0; b < a.length; b++) {
    const { name: v, fn: w } = a[b], { x: C, y: x, data: T, reset: S } = await w({ x: u, y: c, initialPlacement: s, placement: p, strategy: i, middlewareData: m, rects: h, platform: r, elements: { reference: n, floating: e } });
    u = C ?? u, c = x ?? c, m = { ...m, [v]: { ...m[v], ...T } }, S && g <= 50 && (g++, typeof S == "object" && (S.placement && (p = S.placement), S.rects && (h = S.rects === !0 ? await r.getElementRects({ reference: n, floating: e, strategy: i }) : S.rects), { x: u, y: c } = gr(h, p, l)), b = -1);
  }
  return { x: u, y: c, placement: p, strategy: i, middlewareData: m };
};
function en(n, e) {
  return typeof n == "function" ? n(e) : n;
}
function Ba(n) {
  return typeof n != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(n) : { top: n, right: n, bottom: n, left: n };
}
function vn(n) {
  return { ...n, top: n.y, left: n.x, right: n.x + n.width, bottom: n.y + n.height };
}
async function Wa(n, e) {
  var t;
  e === void 0 && (e = {});
  const { x: s, y: i, platform: o, rects: r, elements: a, strategy: l } = n, { boundary: h = "clippingAncestors", rootBoundary: u = "viewport", elementContext: c = "floating", altBoundary: p = !1, padding: m = 0 } = en(e, n), g = Ba(m), b = a[p ? c === "floating" ? "reference" : "floating" : c], v = vn(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(b))) == null || t ? b : b.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)), boundary: h, rootBoundary: u, strategy: l })), w = c === "floating" ? { ...r.floating, x: s, y: i } : r.reference, C = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), x = await (o.isElement == null ? void 0 : o.isElement(C)) && await (o.getScale == null ? void 0 : o.getScale(C)) || { x: 1, y: 1 }, T = vn(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: C, strategy: l }) : w);
  return { top: (v.top - T.top + g.top) / x.y, bottom: (T.bottom - v.bottom + g.bottom) / x.y, left: (v.left - T.left + g.left) / x.x, right: (T.right - v.right + g.right) / x.x };
}
const so = Math.min, Kc = Math.max;
function no(n, e, t) {
  return Kc(n, so(e, t));
}
const io = (n) => ({ name: "arrow", options: n, async fn(e) {
  const { x: t, y: s, placement: i, rects: o, platform: r, elements: a } = e, { element: l, padding: h = 0 } = en(n, e) || {};
  if (l == null)
    return {};
  const u = Ba(h), c = { x: t, y: s }, p = tn(i), m = Wo(p), g = await r.getDimensions(l), b = p === "y", v = b ? "top" : "left", w = b ? "bottom" : "right", C = b ? "clientHeight" : "clientWidth", x = o.reference[m] + o.reference[p] - c[p] - o.floating[m], T = c[p] - o.reference[p], S = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l));
  let M = S ? S[C] : 0;
  M && await (r.isElement == null ? void 0 : r.isElement(S)) || (M = a.floating[C] || o.floating[m]);
  const I = x / 2 - T / 2, A = M / 2 - g[m] / 2 - 1, D = so(u[v], A), B = so(u[w], A), P = D, R = M - g[m] - B, E = M / 2 - g[m] / 2 + I, O = no(P, E, R), F = Qs(i) != null && E != O && o.reference[m] / 2 - (E < P ? D : B) - g[m] / 2 < 0 ? E < P ? P - E : R - E : 0;
  return { [p]: c[p] - F, data: { [p]: O, centerOffset: E - O + F } };
} }), Gc = ["top", "right", "bottom", "left"];
Gc.reduce((n, e) => n.concat(e, e + "-start", e + "-end"), []);
const Xc = { left: "right", right: "left", bottom: "top", top: "bottom" };
function _n(n) {
  return n.replace(/left|right|bottom|top/g, (e) => Xc[e]);
}
function Jc(n, e, t) {
  t === void 0 && (t = !1);
  const s = Qs(n), i = tn(n), o = Wo(i);
  let r = i === "x" ? s === (t ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return e.reference[o] > e.floating[o] && (r = _n(r)), { main: r, cross: _n(r) };
}
const Zc = { start: "end", end: "start" };
function ji(n) {
  return n.replace(/start|end/g, (e) => Zc[e]);
}
const Di = function(n) {
  return n === void 0 && (n = {}), { name: "flip", options: n, async fn(e) {
    var t;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: a, elements: l } = e, { mainAxis: h = !0, crossAxis: u = !0, fallbackPlacements: c, fallbackStrategy: p = "bestFit", fallbackAxisSideDirection: m = "none", flipAlignment: g = !0, ...b } = en(n, e), v = de(s), w = de(r) === r, C = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), x = c || (w || !g ? [_n(r)] : function(P) {
      const R = _n(P);
      return [ji(P), R, ji(R)];
    }(r));
    c || m === "none" || x.push(...function(P, R, E, O) {
      const F = Qs(P);
      let j = function(ot, Ze, Rl) {
        const Jo = ["left", "right"], Zo = ["right", "left"], Il = ["top", "bottom"], Al = ["bottom", "top"];
        switch (ot) {
          case "top":
          case "bottom":
            return Rl ? Ze ? Zo : Jo : Ze ? Jo : Zo;
          case "left":
          case "right":
            return Ze ? Il : Al;
          default:
            return [];
        }
      }(de(P), E === "start", O);
      return F && (j = j.map((ot) => ot + "-" + F), R && (j = j.concat(j.map(ji)))), j;
    }(r, g, m, C));
    const T = [r, ...x], S = await Wa(e, b), M = [];
    let I = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (h && M.push(S[v]), u) {
      const { main: P, cross: R } = Jc(s, o, C);
      M.push(S[P], S[R]);
    }
    if (I = [...I, { placement: s, overflows: M }], !M.every((P) => P <= 0)) {
      var A, D;
      const P = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, R = T[P];
      if (R)
        return { data: { index: P, overflows: I }, reset: { placement: R } };
      let E = (D = I.filter((O) => O.overflows[0] <= 0).sort((O, F) => O.overflows[1] - F.overflows[1])[0]) == null ? void 0 : D.placement;
      if (!E)
        switch (p) {
          case "bestFit": {
            var B;
            const O = (B = I.map((F) => [F.placement, F.overflows.filter((j) => j > 0).reduce((j, ot) => j + ot, 0)]).sort((F, j) => F[1] - j[1])[0]) == null ? void 0 : B[0];
            O && (E = O);
            break;
          }
          case "initialPlacement":
            E = r;
        }
      if (s !== E)
        return { reset: { placement: E } };
    }
    return {};
  } };
}, Li = function(n) {
  return n === void 0 && (n = 0), { name: "offset", options: n, async fn(e) {
    const { x: t, y: s } = e, i = await async function(o, r) {
      const { placement: a, platform: l, elements: h } = o, u = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), c = de(a), p = Qs(a), m = tn(a) === "x", g = ["left", "top"].includes(c) ? -1 : 1, b = u && m ? -1 : 1, v = en(r, o);
      let { mainAxis: w, crossAxis: C, alignmentAxis: x } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return p && typeof x == "number" && (C = p === "end" ? -1 * x : x), m ? { x: C * b, y: w * g } : { x: w * g, y: C * b };
    }(e, n);
    return { x: t + i.x, y: s + i.y, data: i };
  } };
};
function Qc(n) {
  return n === "x" ? "y" : "x";
}
const ns = function(n) {
  return n === void 0 && (n = {}), { name: "shift", options: n, async fn(e) {
    const { x: t, y: s, placement: i } = e, { mainAxis: o = !0, crossAxis: r = !1, limiter: a = { fn: (v) => {
      let { x: w, y: C } = v;
      return { x: w, y: C };
    } }, ...l } = en(n, e), h = { x: t, y: s }, u = await Wa(e, l), c = tn(de(i)), p = Qc(c);
    let m = h[c], g = h[p];
    if (o) {
      const v = c === "y" ? "bottom" : "right";
      m = no(m + u[c === "y" ? "top" : "left"], m, m - u[v]);
    }
    if (r) {
      const v = p === "y" ? "bottom" : "right";
      g = no(g + u[p === "y" ? "top" : "left"], g, g - u[v]);
    }
    const b = a.fn({ ...e, [c]: m, [p]: g });
    return { ...b, data: { x: b.x - t, y: b.y - s } };
  } };
};
function nt(n) {
  var e;
  return (n == null || (e = n.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function $t(n) {
  return nt(n).getComputedStyle(n);
}
function Fa(n) {
  return n instanceof nt(n).Node;
}
function Xt(n) {
  return Fa(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function at(n) {
  return n instanceof HTMLElement || n instanceof nt(n).HTMLElement;
}
function yr(n) {
  return typeof ShadowRoot < "u" && (n instanceof nt(n).ShadowRoot || n instanceof ShadowRoot);
}
function is(n) {
  const { overflow: e, overflowX: t, overflowY: s, display: i } = $t(n);
  return /auto|scroll|overlay|hidden|clip/.test(e + s + t) && !["inline", "contents"].includes(i);
}
function th(n) {
  return ["table", "td", "th"].includes(Xt(n));
}
function oo(n) {
  const e = Fo(), t = $t(n);
  return t.transform !== "none" || t.perspective !== "none" || !!t.containerType && t.containerType !== "normal" || !e && !!t.backdropFilter && t.backdropFilter !== "none" || !e && !!t.filter && t.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (t.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (t.contain || "").includes(s));
}
function Fo() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Pi(n) {
  return ["html", "body", "#document"].includes(Xt(n));
}
const ro = Math.min, $e = Math.max, Cn = Math.round, nn = Math.floor, Jt = (n) => ({ x: n, y: n });
function za(n) {
  const e = $t(n);
  let t = parseFloat(e.width) || 0, s = parseFloat(e.height) || 0;
  const i = at(n), o = i ? n.offsetWidth : t, r = i ? n.offsetHeight : s, a = Cn(t) !== o || Cn(s) !== r;
  return a && (t = o, s = r), { width: t, height: s, $: a };
}
function Rt(n) {
  return n instanceof Element || n instanceof nt(n).Element;
}
function zo(n) {
  return Rt(n) ? n : n.contextElement;
}
function xe(n) {
  const e = zo(n);
  if (!at(e))
    return Jt(1);
  const t = e.getBoundingClientRect(), { width: s, height: i, $: o } = za(e);
  let r = (o ? Cn(t.width) : t.width) / s, a = (o ? Cn(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
const eh = Jt(0);
function ja(n) {
  const e = nt(n);
  return Fo() && e.visualViewport ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop } : eh;
}
function ye(n, e, t, s) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const i = n.getBoundingClientRect(), o = zo(n);
  let r = Jt(1);
  e && (s ? Rt(s) && (r = xe(s)) : r = xe(n));
  const a = function(p, m, g) {
    return m === void 0 && (m = !1), !(!g || m && g !== nt(p)) && m;
  }(o, t, s) ? ja(o) : Jt(0);
  let l = (i.left + a.x) / r.x, h = (i.top + a.y) / r.y, u = i.width / r.x, c = i.height / r.y;
  if (o) {
    const p = nt(o), m = s && Rt(s) ? nt(s) : s;
    let g = p.frameElement;
    for (; g && s && m !== p; ) {
      const b = xe(g), v = g.getBoundingClientRect(), w = getComputedStyle(g), C = v.left + (g.clientLeft + parseFloat(w.paddingLeft)) * b.x, x = v.top + (g.clientTop + parseFloat(w.paddingTop)) * b.y;
      l *= b.x, h *= b.y, u *= b.x, c *= b.y, l += C, h += x, g = nt(g).frameElement;
    }
  }
  return vn({ width: u, height: c, x: l, y: h });
}
function Oi(n) {
  return Rt(n) ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop } : { scrollLeft: n.pageXOffset, scrollTop: n.pageYOffset };
}
function It(n) {
  var e;
  return (e = (Fa(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : e.documentElement;
}
function Va(n) {
  return ye(It(n)).left + Oi(n).scrollLeft;
}
function qe(n) {
  if (Xt(n) === "html")
    return n;
  const e = n.assignedSlot || n.parentNode || yr(n) && n.host || It(n);
  return yr(e) ? e.host : e;
}
function Ua(n) {
  const e = qe(n);
  return Pi(e) ? n.ownerDocument ? n.ownerDocument.body : n.body : at(e) && is(e) ? e : Ua(e);
}
function $n(n, e) {
  var t;
  e === void 0 && (e = []);
  const s = Ua(n), i = s === ((t = n.ownerDocument) == null ? void 0 : t.body), o = nt(s);
  return i ? e.concat(o, o.visualViewport || [], is(s) ? s : []) : e.concat(s, $n(s));
}
function br(n, e, t) {
  let s;
  if (e === "viewport")
    s = function(i, o) {
      const r = nt(i), a = It(i), l = r.visualViewport;
      let h = a.clientWidth, u = a.clientHeight, c = 0, p = 0;
      if (l) {
        h = l.width, u = l.height;
        const m = Fo();
        (!m || m && o === "fixed") && (c = l.offsetLeft, p = l.offsetTop);
      }
      return { width: h, height: u, x: c, y: p };
    }(n, t);
  else if (e === "document")
    s = function(i) {
      const o = It(i), r = Oi(i), a = i.ownerDocument.body, l = $e(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), h = $e(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
      let u = -r.scrollLeft + Va(i);
      const c = -r.scrollTop;
      return $t(a).direction === "rtl" && (u += $e(o.clientWidth, a.clientWidth) - l), { width: l, height: h, x: u, y: c };
    }(It(n));
  else if (Rt(e))
    s = function(i, o) {
      const r = ye(i, !0, o === "fixed"), a = r.top + i.clientTop, l = r.left + i.clientLeft, h = at(i) ? xe(i) : Jt(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(e, t);
  else {
    const i = ja(n);
    s = { ...e, x: e.x - i.x, y: e.y - i.y };
  }
  return vn(s);
}
function qa(n, e) {
  const t = qe(n);
  return !(t === e || !Rt(t) || Pi(t)) && ($t(t).position === "fixed" || qa(t, e));
}
function sh(n, e, t) {
  const s = at(e), i = It(e), o = t === "fixed", r = ye(n, !0, o, e);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Jt(0);
  if (s || !s && !o)
    if ((Xt(e) !== "body" || is(i)) && (a = Oi(e)), at(e)) {
      const h = ye(e, !0, o, e);
      l.x = h.x + e.clientLeft, l.y = h.y + e.clientTop;
    } else
      i && (l.x = Va(i));
  return { x: r.left + a.scrollLeft - l.x, y: r.top + a.scrollTop - l.y, width: r.width, height: r.height };
}
function wr(n, e) {
  return at(n) && $t(n).position !== "fixed" ? e ? e(n) : n.offsetParent : null;
}
function vr(n, e) {
  const t = nt(n);
  if (!at(n))
    return t;
  let s = wr(n, e);
  for (; s && th(s) && $t(s).position === "static"; )
    s = wr(s, e);
  return s && (Xt(s) === "html" || Xt(s) === "body" && $t(s).position === "static" && !oo(s)) ? t : s || function(i) {
    let o = qe(i);
    for (; at(o) && !Pi(o); ) {
      if (oo(o))
        return o;
      o = qe(o);
    }
    return null;
  }(n) || t;
}
const nh = { convertOffsetParentRelativeRectToViewportRelativeRect: function(n) {
  let { rect: e, offsetParent: t, strategy: s } = n;
  const i = at(t), o = It(t);
  if (t === o)
    return e;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = Jt(1);
  const l = Jt(0);
  if ((i || !i && s !== "fixed") && ((Xt(t) !== "body" || is(o)) && (r = Oi(t)), at(t))) {
    const h = ye(t);
    a = xe(t), l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
  }
  return { width: e.width * a.x, height: e.height * a.y, x: e.x * a.x - r.scrollLeft * a.x + l.x, y: e.y * a.y - r.scrollTop * a.y + l.y };
}, getDocumentElement: It, getClippingRect: function(n) {
  let { element: e, boundary: t, rootBoundary: s, strategy: i } = n;
  const o = [...t === "clippingAncestors" ? function(l, h) {
    const u = h.get(l);
    if (u)
      return u;
    let c = $n(l).filter((b) => Rt(b) && Xt(b) !== "body"), p = null;
    const m = $t(l).position === "fixed";
    let g = m ? qe(l) : l;
    for (; Rt(g) && !Pi(g); ) {
      const b = $t(g), v = oo(g);
      v || b.position !== "fixed" || (p = null), (m ? !v && !p : !v && b.position === "static" && p && ["absolute", "fixed"].includes(p.position) || is(g) && !v && qa(l, g)) ? c = c.filter((w) => w !== g) : p = b, g = qe(g);
    }
    return h.set(l, c), c;
  }(e, this._c) : [].concat(t), s], r = o[0], a = o.reduce((l, h) => {
    const u = br(e, h, i);
    return l.top = $e(u.top, l.top), l.right = ro(u.right, l.right), l.bottom = ro(u.bottom, l.bottom), l.left = $e(u.left, l.left), l;
  }, br(e, r, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, getOffsetParent: vr, getElementRects: async function(n) {
  let { reference: e, floating: t, strategy: s } = n;
  const i = this.getOffsetParent || vr, o = this.getDimensions;
  return { reference: sh(e, await i(t), s), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: function(n) {
  return Array.from(n.getClientRects());
}, getDimensions: function(n) {
  return za(n);
}, getScale: xe, isElement: Rt, isRTL: function(n) {
  return getComputedStyle(n).direction === "rtl";
} };
function jo(n, e, t, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = zo(n), u = i || o ? [...h ? $n(h) : [], ...$n(e)] : [];
  u.forEach((v) => {
    i && v.addEventListener("scroll", t, { passive: !0 }), o && v.addEventListener("resize", t);
  });
  const c = h && a ? function(v, w) {
    let C, x = null;
    const T = It(v);
    function S() {
      clearTimeout(C), x && x.disconnect(), x = null;
    }
    return function M(I, A) {
      I === void 0 && (I = !1), A === void 0 && (A = 1), S();
      const { left: D, top: B, width: P, height: R } = v.getBoundingClientRect();
      if (I || w(), !P || !R)
        return;
      const E = { rootMargin: -nn(B) + "px " + -nn(T.clientWidth - (D + P)) + "px " + -nn(T.clientHeight - (B + R)) + "px " + -nn(D) + "px", threshold: $e(0, ro(1, A)) || 1 };
      let O = !0;
      function F(j) {
        const ot = j[0].intersectionRatio;
        if (ot !== A) {
          if (!O)
            return M();
          ot ? M(!1, ot) : C = setTimeout(() => {
            M(!1, 1e-7);
          }, 100);
        }
        O = !1;
      }
      try {
        x = new IntersectionObserver(F, { ...E, root: T.ownerDocument });
      } catch {
        x = new IntersectionObserver(F, E);
      }
      x.observe(v);
    }(!0), S;
  }(h, t) : null;
  let p, m = -1, g = null;
  r && (g = new ResizeObserver((v) => {
    let [w] = v;
    w && w.target === h && g && (g.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      g && g.observe(e);
    })), t();
  }), h && !l && g.observe(h), g.observe(e));
  let b = l ? ye(n) : null;
  return l && function v() {
    const w = ye(n);
    !b || w.x === b.x && w.y === b.y && w.width === b.width && w.height === b.height || t(), b = w, p = requestAnimationFrame(v);
  }(), t(), () => {
    u.forEach((v) => {
      i && v.removeEventListener("scroll", t), o && v.removeEventListener("resize", t);
    }), c && c(), g && g.disconnect(), g = null, l && cancelAnimationFrame(p);
  };
}
const Hi = (n, e, t) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: nh, ...t }, o = { ...i.platform, _c: s };
  return Yc(n, e, { ...i, platform: o });
}, ih = '[data-toggle="popover"]', _r = "show", Cr = "in", _e = class _e extends Ct {
  constructor() {
    super(...arguments), this._getClickBounding = () => {
      const e = this._triggerEvent;
      return {
        x: e.clientX,
        y: e.clientY,
        left: e.clientX,
        top: e.clientY,
        width: 0,
        height: 0,
        bottom: e.clientY,
        right: e.clientX
      };
    }, this._onClickDoc = (e) => {
      const t = f(e.target);
      (!t.closest(`#${this._id}`).length && this._targetElement !== t.closest(".popover")[0] || t.closest('[data-dismiss="popover"]').length) && this.hide();
    };
  }
  get shown() {
    return this._shown;
  }
  get id() {
    return this._id;
  }
  afterInit() {
    const { trigger: e, id: t, triggerEvent: s } = this.options;
    this._triggerEvent = s, this._id = t || `popover_${this.gid}`;
    const i = this.getTriggerElement();
    if (i instanceof HTMLElement) {
      const r = f(i), { namespace: a } = this;
      e === "hover" ? r.on(`mouseenter${a}`, (l) => {
        this.show({ delay: !0, event: l });
      }).on(`mouseleave${a}`, () => {
        this.hide();
      }) : e && r.on(`${e}${a}`, (l) => {
        this.toggle({ event: l }), l.preventDefault();
      });
    }
    const { show: o } = this.options;
    o && this.show({ delay: typeof o == "number" ? o : !1 });
  }
  getTriggerElement() {
    if (!this._triggerElement) {
      let { element: e = this.element } = this.options;
      e === document.body && (e = {
        getBoundingClientRect: this._getClickBounding
      }), this._triggerElement = e, this._virtual = !(e instanceof HTMLElement);
    }
    return this._triggerElement;
  }
  initTarget() {
    let e = this.options.target;
    return this._dynamic = !e, e ? (typeof e == "function" && (e = e()), f(e)[0]) : this._createTarget();
  }
  show(e) {
    const { delay: t, event: s } = e || {};
    if (s && (this._triggerEvent = s), t)
      return this._setTimer(() => {
        this.show();
      }, t === !0 ? this.options.delay : t);
    if (!this.inited) {
      this.setOptions({ show: !0 });
      return;
    }
    if (this._shown)
      return;
    const i = this.initTarget();
    if (!i)
      return;
    this._targetElement = i;
    const o = f(i), { animation: r, mask: a, onShow: l, onShown: h } = this.options;
    o.addClass(_r), r && o.addClass(r === !0 ? "fade" : r), this._shown = !0, this.render(), l == null || l.call(this), this.emit("show"), this._virtual || f(this._triggerElement).addClass("with-popover-show"), this._setTimer(() => {
      o.addClass(Cr), this._setTimer(() => {
        h == null || h.call(this), this.emit("shown");
      }, 200), a && f(document).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide() {
    (!this._shown || !this._targetElement) && this._setTimer();
    const { destroyOnHide: e, animation: t, onHide: s, onHidden: i } = this.options, o = f(this._targetElement);
    this._shown = !1, s == null || s.call(this), this.emit("hide"), o.removeClass(Cr), this._virtual || f(this._triggerElement).removeClass("with-popover-show").removeAttr("data-popover-placement"), f(document).off(this.namespace), this._setTimer(() => {
      i == null || i.call(this), this.emit("hidden"), o.removeClass(_r), e && this._setTimer(() => {
        this.destroy();
      }, typeof e == "number" ? e : 0), this._destoryTarget();
    }, t ? 200 : 0);
  }
  toggle(e) {
    this._shown ? this.hide() : this.show(e);
  }
  destroy() {
    if (super.destroy(), f(document).off(this.namespace), !this._virtual) {
      const { namespace: e } = this;
      f(this._triggerElement).off(e);
    }
    this._setTimer(), this._destoryTarget();
  }
  layout() {
    const e = this._triggerElement, t = this._targetElement, s = this._layoutWatcher;
    if (!t || !e || !this._shown) {
      s && (s(), this._layoutWatcher = void 0);
      return;
    }
    s || (this._layoutWatcher = jo(e, t, () => {
      const { width: i, animation: o, name: r = "popover" } = this.options;
      i === "100%" && !this._virtual && f(t).css({ width: f(e).width() }), Hi(...this._getLayoutOptions()).then(({ x: a, y: l, middlewareData: h, placement: u }) => {
        const c = f(t).css({
          left: a,
          top: l
        }), p = u.split("-")[0], m = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[p], g = h.arrow;
        g && c.find(".arrow").css({
          left: g.x,
          top: g.y
        }).attr("class", `arrow ${r}-arrow arrow-${m}`), o === !0 && c.attr("class", `${c.attr("class").split(" ").filter((b) => b !== "fade" && !b.startsWith("fade-from")).join(" ")} fade-from-${m}`), this._virtual || f(this._triggerElement).attr("data-popover-placement", p);
      });
    }));
  }
  render(e) {
    super.render(e);
    const t = this._targetElement;
    if (!t)
      return;
    const s = this._getRenderOptions(), i = f(t);
    if (i.toggleClass("popup", s.popup).css(s.style), s.className && i.setClass(s.className), this._dynamic) {
      let o = this._panel;
      o && o.element !== t && (o.destroy(), o = void 0), o ? o.render(s) : (o = new eo(t, s), o.on("inited", () => this.layout())), this._panel = o;
    } else
      s.arrow && (i.find(".arrow").length || i.append(f('<div class="arrow"></div>').css(s.arrowStyle))), this.layout();
  }
  _getLayoutOptions() {
    const e = this._triggerElement, t = this._targetElement, { placement: s, flip: i, shift: o, offset: r, arrow: a } = this.options, l = a ? t.querySelector(".arrow") : null, h = l ? typeof a == "number" ? a : 8 : 0;
    return [e, t, {
      placement: s,
      middleware: [
        i ? Di() : null,
        o ? ns(typeof o == "object" ? o : void 0) : null,
        r || h ? Li((r || 0) + h) : null,
        a ? io({ element: l }) : null
      ].filter(Boolean)
    }];
  }
  _getRenderOptions() {
    const { name: e = "popover" } = this.options, {
      popup: t,
      title: s,
      content: i,
      headingClass: o = `${e}-heading`,
      titleClass: r = `${e}-title`,
      contentClass: a = `${e}-content`,
      style: l,
      className: h = e,
      closeBtn: u,
      arrow: c
    } = this.options;
    return {
      popup: t,
      title: s,
      titleClass: r,
      headingClass: o,
      contentClass: a,
      content: i,
      style: { zIndex: this.constructor.Z_INDEX++, ...l },
      className: h,
      closeBtn: u,
      arrow: c ? `arrow ${e}-arrow` : !1,
      arrowStyle: { "--arrow-size": `${typeof c == "number" ? c : 8}px` },
      onlyInner: !0
    };
  }
  _destoryTarget() {
    var e, t, s;
    (e = this._layoutWatcher) == null || e.call(this), this._layoutWatcher = void 0, this._dynamic && ((t = this._panel) == null || t.destroy(), (s = this._targetElement) == null || s.remove(), this._panel = void 0, this._targetElement = void 0);
  }
  _setTimer(e, t = 0) {
    this._timer && clearTimeout(this._timer), e && (this._timer = window.setTimeout(() => {
      this._timer = 0, e();
    }, t));
  }
  _createTarget() {
    const { container: e = "body" } = this.options, t = f(e);
    let s = t.find(`#${this._id}`);
    return s.length || (s = f("<div />").attr({ id: this._id, class: "popover" }).appendTo(t)), s[0];
  }
  static show(e) {
    const { element: t } = e;
    return new this(t instanceof HTMLElement ? t : document.body, { show: !0, destroyOnHide: !0, ...e });
  }
};
_e.NAME = "Popover", _e.Z_INDEX = 1700, _e.MULTI_INSTANCE = !0, _e.DEFAULT = {
  placement: "top",
  strategy: "absolute",
  flip: !0,
  arrow: !0,
  offset: 1,
  trigger: "click",
  mask: !0,
  delay: 0,
  animation: !0,
  closeBtn: !0,
  popup: !0
};
let _t = _e;
f(document).on(`click${_t.NAMESPACE} mouseenter${_t.NAMESPACE}`, ih, (n) => {
  const e = f(n.currentTarget);
  if (e.length && !e.data(_t.KEY)) {
    const t = e.data("trigger") || "click";
    if ((n.type === "mouseover" ? "hover" : "click") !== t)
      return;
    _t.ensure(e, { show: !0, triggerEvent: n }), n.preventDefault();
  }
});
const oh = '[data-toggle="dropdown"]', Dn = class Dn extends _t {
  constructor() {
    super(...arguments), this._onClickDoc = (e) => {
      f(e.target).closest(".not-hide-menu").length || this.hide();
    };
  }
  _getMenuOptions() {
    let { items: e = [] } = this.options;
    return typeof e == "function" && (e = e(this)), {
      items: e,
      nestedTrigger: "hover",
      placement: this.options.placement,
      popup: !1,
      ...this.options.menu
    };
  }
  _getRenderOptions() {
    return {
      ...super._getRenderOptions(),
      contentClass: "",
      content: U(ao, this._getMenuOptions())
    };
  }
};
Dn.NAME = "Dropdown", Dn.DEFAULT = {
  ..._t.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade"
};
let Mt = Dn;
f(document).on(`click${Mt.NAMESPACE} mouseenter${Mt.NAMESPACE}`, oh, (n) => {
  const e = f(n.currentTarget);
  if (e.length && !e.data(Mt.KEY)) {
    const t = e.data("trigger") || "click";
    if ((n.type === "mouseover" ? "hover" : "click") !== t)
      return;
    const i = {
      ...e.data(),
      show: !0,
      triggerEvent: n
    };
    !i.target && !i.items && !i.menu && (i.target = e.next(".dropdown-menu")), Mt.ensure(e, i), n.preventDefault();
  }
});
var ds, Se;
class rh extends H {
  constructor(t) {
    var s;
    super(t);
    _(this, ds, void 0);
    _(this, Se, K());
    this.state = { placement: ((s = t.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return y(this, Se);
  }
  get triggerElement() {
    return y(this, Se).current;
  }
  componentDidMount() {
    const { items: t } = this.props, { modifiers: s = [], ...i } = this.props.dropdown || {};
    s.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: o }) => {
        var a;
        const r = ((a = o.placement) == null ? void 0 : a.split("-").shift()) || "";
        this.setState({ placement: r });
      }
    }), $(this, ds, Mt.ensure(this.triggerElement, {
      items: t,
      ...i,
      modifiers: s,
      onShow: () => {
        this.setState({ show: !0 });
      },
      onHide: () => {
        this.setState({ show: !0 });
      }
    }));
  }
  componentWillUnmount() {
    var t;
    (t = y(this, ds)) == null || t.destroy();
  }
  beforeRender() {
    const { className: t, children: s, dropdown: i, items: o, ...r } = this.props;
    return {
      className: N("dropdown", t),
      children: typeof s == "function" ? s(this.state) : s,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: y(this, Se)
    };
  }
  render() {
    const { children: t, ...s } = this.beforeRender();
    return /* @__PURE__ */ d("div", { ...s, children: t });
  }
}
ds = new WeakMap(), Se = new WeakMap();
class Ya extends rh {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var o;
    const { placement: e, show: t } = this.state, s = this.beforeRender();
    let { caret: i = !0 } = s;
    if (i !== !1 && (t || i === !0)) {
      const r = (t ? e : (o = this.props.dropdown) == null ? void 0 : o.placement) || "";
      i = (r.includes("top") ? "up" : r.includes("bottom") ? "down" : r) || (typeof i == "string" ? i : "") || "down";
    }
    return s.caret = i, /* @__PURE__ */ d(Q, { ...s });
  }
}
const qo = class qo extends ge {
  constructor() {
    super(...arguments), this._layoutTimer = 0;
  }
  get name() {
    return "menu";
  }
  get menuName() {
    return "dropdown-menu";
  }
  layout() {
    const e = this.ref.current, t = e == null ? void 0 : e.parentElement;
    !e || !t || Hi(t, e, {
      placement: this.props.placement,
      middleware: [Di(), ns(), Li(1)]
    }).then(({ x: s, y: i }) => {
      f(e).css({
        left: s,
        top: i
      });
    });
  }
  getNestedMenuProps(e) {
    const t = super.getNestedMenuProps(e);
    return {
      ...t,
      className: N("show", t.className),
      popup: !0
    };
  }
  afterRender(e) {
    super.afterRender(e), this.props.controlledMenu && (this.layout(), this._layoutTimer = window.setTimeout(this.layout.bind(this), 100));
  }
  renderToggleIcon() {
    return /* @__PURE__ */ d("span", { class: "dropdown-menu-toggle-icon caret-right ml-2" });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), this._layoutTimer && clearTimeout(this._layoutTimer);
  }
};
qo.defaultProps = {
  ...ge.defaultProps,
  popup: !0,
  nestedTrigger: "hover",
  placement: "right-start"
};
let ao = qo;
function Ka({
  key: n,
  type: e,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ d(Ya, { type: t, ...s });
}
let Ga = class extends H {
  componentDidMount() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this);
  }
  handleItemClick(e, t, s, i) {
    s && s.call(i.target, i);
    const { onClickItem: o } = this.props;
    o && o.call(this, { item: e, index: t, event: i });
  }
  beforeRender() {
    var s;
    const e = { ...this.props }, t = (s = e.beforeRender) == null ? void 0 : s.call(this, e);
    return t && Object.assign(e, t), typeof e.items == "function" && (e.items = e.items.call(this)), e;
  }
  onRenderItem(e, t) {
    const { key: s = t, ...i } = e, o = e.dropdown || e.items ? Ya : Q;
    return /* @__PURE__ */ d(o, { ...i }, s);
  }
  renderItem(e, t, s) {
    const { itemRender: i, btnProps: o, onClickItem: r } = e, a = { key: s, ...t };
    if (o && Object.assign(a, o), r && (a.onClick = this.handleItemClick.bind(this, a, s, t.onClick)), i) {
      const l = i.call(this, a, U);
      if (X(l))
        return l;
      typeof l == "object" && Object.assign(a, l);
    }
    return this.onRenderItem(a, s);
  }
  render() {
    const e = this.beforeRender(), {
      className: t,
      items: s,
      size: i,
      type: o,
      btnProps: r,
      children: a,
      itemRender: l,
      onClickItem: h,
      beforeRender: u,
      afterRender: c,
      beforeDestroy: p,
      ...m
    } = e;
    return /* @__PURE__ */ d(
      "div",
      {
        className: N("btn-group", i ? `size-${i}` : "", t),
        ...m,
        children: [
          s && s.map(this.renderItem.bind(this, e)),
          a
        ]
      }
    );
  }
};
function ah({
  key: n,
  type: e,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ d(Ga, { type: t, ...s });
}
var Gt;
let Zt = (Gt = class extends Ai {
  beforeRender() {
    const { gap: e, btnProps: t, wrap: s, ...i } = super.beforeRender();
    return i.className = N(i.className, s ? "flex-wrap" : "", typeof e == "number" ? `gap-${e}` : ""), typeof e == "string" && (i.style ? i.style.gap = e : i.style = { gap: e }), i;
  }
  isBtnItem(e) {
    return e === "item" || e === "dropdown";
  }
  renderTypedItem(e, t, s) {
    const { type: i } = s, o = this.props.btnProps, r = this.isBtnItem(i) ? { btnType: "ghost", ...o } : {}, a = {
      ...t,
      ...r,
      ...s,
      className: N(`${this.name}-${i}`, t.className, r.className, s.className),
      style: Object.assign({}, t.style, r.style, s.style)
    };
    return i === "btn-group" && (a.btnProps = o), /* @__PURE__ */ d(e, { ...a });
  }
}, Gt.ItemComponents = {
  item: Uc,
  dropdown: Ka,
  "btn-group": ah
}, Gt.ROOT_TAG = "nav", Gt.NAME = "toolbar", Gt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
}, Gt);
function lh({
  className: n,
  style: e,
  actions: t,
  heading: s,
  content: i,
  contentClass: o,
  children: r,
  close: a,
  onClose: l,
  icon: h,
  ...u
}) {
  let c;
  a === !0 ? c = /* @__PURE__ */ d(Q, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ d("span", { class: "close" }) }) : X(a) ? c = a : typeof a == "object" && (c = /* @__PURE__ */ d(Q, { ...a, onClick: l }));
  const p = X(t) ? t : t ? /* @__PURE__ */ d(Zt, { ...t }) : null;
  return /* @__PURE__ */ d("div", { className: N("alert", n), style: e, ...u, children: [
    /* @__PURE__ */ d(tt, { icon: h, className: "alert-icon" }),
    X(i) ? i : /* @__PURE__ */ d("div", { className: N("alert-content", o), children: [
      X(s) ? s : s && /* @__PURE__ */ d("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ d("div", { className: "alert-text", children: i }),
      s ? p : null
    ] }),
    s ? null : p,
    c,
    r
  ] });
}
function ch(n) {
  if (n === "center")
    return "fade-from-center";
  if (n) {
    if (n.includes("top"))
      return "fade-from-top";
    if (n.includes("bottom"))
      return "fade-from-bottom";
  }
  return "fade";
}
function hh({
  margin: n,
  type: e,
  placement: t,
  animation: s,
  show: i,
  className: o,
  time: r,
  ...a
}) {
  return /* @__PURE__ */ d(
    lh,
    {
      className: N("messager", o, e, s === !0 ? ch(t) : s, i ? "in" : ""),
      ...a
    }
  );
}
var Ft, ve;
const Ln = class Ln extends z {
  constructor() {
    super(...arguments);
    _(this, Ft);
    this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
      t && this.show();
      const { margin: s } = this.options;
      s && this.$element.css("margin", `${s}px`);
    };
  }
  get isShown() {
    return this._show;
  }
  afterInit() {
    this.on("click", (t) => {
      f(t.target).closest('.alert-close,[data-dismiss="messager"]').length && (t.preventDefault(), t.stopPropagation(), this.hide());
    });
  }
  setOptions(t) {
    return t = super.setOptions(t), {
      ...t,
      show: this._show,
      afterRender: this._afterRender
    };
  }
  show() {
    this.render(), this.emit("show"), L(this, Ft, ve).call(this, () => {
      this._show = !0, this.render(), L(this, Ft, ve).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && L(this, Ft, ve).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && L(this, Ft, ve).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), L(this, Ft, ve).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
};
Ft = new WeakSet(), ve = function(t, s = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    t(), this._showTimer = 0;
  }, s);
}, Ln.NAME = "MessagerItem", Ln.Component = hh;
let lo = Ln;
var ne, ut, Pn, Xa, On, Ja;
const es = class es extends Ct {
  constructor() {
    super(...arguments);
    _(this, Pn);
    _(this, On);
    _(this, ne, void 0);
    _(this, ut, void 0);
  }
  get isShown() {
    var t;
    return !!((t = y(this, ut)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), L(this, Pn, Xa).call(this).show();
  }
  hide() {
    var t;
    (t = y(this, ut)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: s, ...i } = t, o = es.ensure(s || "body");
    return o.setOptions(i), o.hide(), o.show(), o;
  }
};
ne = new WeakMap(), ut = new WeakMap(), Pn = new WeakSet(), Xa = function() {
  if (y(this, ut))
    y(this, ut).setOptions(this.options);
  else {
    const t = L(this, On, Ja).call(this), s = new lo(t, this.options);
    s.on("hidden", () => {
      s.destroy(), t == null || t.remove(), $(this, ne, void 0), $(this, ut, void 0);
    }), $(this, ut, s);
  }
  return y(this, ut);
}, On = new WeakSet(), Ja = function() {
  if (y(this, ne))
    return y(this, ne);
  const { placement: t = "top" } = this.options;
  let s = this.$element.find(`.messagers-${t}`);
  s.length || (s = f(`<div class="messagers messagers-${t}"></div>`).appendTo(this.$element));
  let i = s.find(`#messager-${this.gid}`);
  return i.length || (i = f(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(s), $(this, ne, i[0])), i[0];
}, es.NAME = "messager", es.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
let $r = es;
var fs;
let uh = (fs = class extends H {
  render(e) {
    const { percent: t = 50, size: s = 24, circleBg: i, circleColor: o, text: r, className: a, textStyle: l, textX: h, textY: u } = e, c = s / 2;
    let { circleWidth: p = 0.2 } = e;
    p < 1 && (p = s * p);
    const m = (s - p) / 2;
    return /* @__PURE__ */ d("svg", { className: a, width: s, height: s, children: [
      /* @__PURE__ */ d("circle", { cx: c, cy: c, r: m, "stroke-width": p, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ d("circle", { cx: c, cy: c, r: m, "stroke-width": p, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * m * 2, "stroke-dashoffset": Math.PI * m * 2 * (100 - t) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      r ? /* @__PURE__ */ d("text", { x: h ?? c, y: u ?? c + p / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${m}px` }, children: r === !0 ? Math.round(t) : r }) : null
    ] });
  }
}, fs.defaultProps = {
  percent: 50,
  size: 24,
  circleWidth: 0.1,
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
}, fs);
const Hn = class Hn extends z {
};
Hn.NAME = "ProgressCircle", Hn.Component = uh;
let xr = Hn;
var kt;
class dh {
  constructor(e = "") {
    _(this, kt, void 0);
    typeof e == "object" ? $(this, kt, e) : $(this, kt, document.appendChild(document.createComment(e)));
  }
  on(e, t, s) {
    y(this, kt).addEventListener(e, t, s);
  }
  once(e, t, s) {
    y(this, kt).addEventListener(e, t, { once: !0, ...s });
  }
  off(e, t, s) {
    y(this, kt).removeEventListener(e, t, s);
  }
  emit(e) {
    return y(this, kt).dispatchEvent(e), e;
  }
}
kt = new WeakMap();
const kr = /* @__PURE__ */ new Set([
  "click",
  "dblclick",
  "mouseup",
  "mousedown",
  "contextmenu",
  "mousewheel",
  "DOMMouseScroll",
  "mouseover",
  "mouseout",
  "mousemove",
  "selectstart",
  "selectend",
  "keydown",
  "keypress",
  "keyup",
  "orientationchange",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointerleave",
  "pointercancel",
  "gesturestart",
  "gesturechange",
  "gestureend",
  "focus",
  "blur",
  "change",
  "reset",
  "select",
  "submit",
  "focusin",
  "focusout",
  "load",
  "unload",
  "beforeunload",
  "resize",
  "move",
  "DOMContentLoaded",
  "readystatechange",
  "error",
  "abort",
  "scroll"
]);
class Za extends dh {
  on(e, t, s) {
    super.on(e, t, s);
  }
  off(e, t, s) {
    super.off(e, t, s);
  }
  once(e, t, s) {
    super.once(e, t, s);
  }
  emit(e, t) {
    return typeof e == "string" && (kr.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), super.emit(Za.createEvent(e, t));
  }
  static createEvent(e, t) {
    return typeof e == "string" && (kr.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), e;
  }
}
let Qa = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
const Vi = "```ZUI_STR\n";
var ps, ie, Ee, dt, Te, Ne, ln;
const Yo = class Yo {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, t = "local") {
    _(this, Ne);
    _(this, ps, void 0);
    _(this, ie, void 0);
    _(this, Ee, void 0);
    _(this, dt, void 0);
    _(this, Te, void 0);
    $(this, ps, t), $(this, Ee, e ?? Qa()), $(this, ie, `ZUI_STORE:${y(this, Ee)}`), $(this, dt, t === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return y(this, ps);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (y(this, Te) || $(this, Te, new Yo(y(this, Ee), "session")), y(this, Te));
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(e, t) {
    const s = y(this, dt).getItem(L(this, Ne, ln).call(this, e));
    if (typeof s == "string") {
      if (s.startsWith(Vi))
        return s.substring(Vi.length);
      try {
        return JSON.parse(s);
      } catch {
      }
    }
    return s ?? t;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(e, t) {
    if (t == null)
      return this.remove(e);
    y(this, dt).setItem(L(this, Ne, ln).call(this, e), typeof t == "string" ? `${Vi}${t}` : JSON.stringify(t));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    y(this, dt).removeItem(L(this, Ne, ln).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let t = 0; t < y(this, dt).length; t++) {
      const s = y(this, dt).key(t);
      if (s != null && s.startsWith(y(this, ie))) {
        const i = y(this, dt).getItem(s);
        typeof i == "string" && e(s.substring(y(this, ie).length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const e = {};
    return this.each((t, s) => {
      e[t] = s;
    }), e;
  }
};
ps = new WeakMap(), ie = new WeakMap(), Ee = new WeakMap(), dt = new WeakMap(), Te = new WeakMap(), Ne = new WeakSet(), ln = function(e) {
  return `${y(this, ie)}:${e}`;
};
let xn = Yo;
const ts = new xn("DEFAULT");
function fh(n, e = "local") {
  return new xn(n, e);
}
Object.assign(ts, { create: fh });
function ph(n) {
  if (n.indexOf("#") === 0 && (n = n.slice(1)), n.length === 3 && (n = n[0] + n[0] + n[1] + n[1] + n[2] + n[2]), n.length !== 6)
    throw new Error(`Invalid HEX color "${n}".`);
  return [
    parseInt(n.slice(0, 2), 16),
    // r
    parseInt(n.slice(2, 4), 16),
    // g
    parseInt(n.slice(4, 6), 16)
    // b
  ];
}
function mh(n) {
  const [e, t, s] = typeof n == "string" ? ph(n) : n;
  return e * 0.299 + t * 0.587 + s * 0.114 > 186;
}
function Sr(n, e) {
  return mh(n) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function Er(n, e = 255) {
  return Math.min(Math.max(n, 0), e);
}
function gh(n, e, t) {
  n = n % 360 / 360, e = Er(e), t = Er(t);
  const s = t <= 0.5 ? t * (e + 1) : t + e - t * e, i = t * 2 - s, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (s - i) * r * 6 : r * 2 < 1 ? s : r * 3 < 2 ? i + (s - i) * (2 / 3 - r) * 6 : i);
  return [
    o(n + 1 / 3) * 255,
    o(n) * 255,
    o(n - 1 / 3) * 255
  ];
}
function yh(n) {
  let e = 0;
  if (typeof n != "string" && (n = String(n)), n && n.length)
    for (let t = 0; t < n.length; ++t)
      e += (t + 1) * n.charCodeAt(t);
  return e;
}
function bh(n, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(n) ? n.length <= e ? n : n.substring(n.length - e) : /^[A-Za-z\d\s]+$/.test(n) ? n[0].toUpperCase() : n.length <= e ? n : n.substring(0, e);
}
let tl = class extends H {
  render() {
    const {
      className: e,
      style: t,
      size: s = "",
      circle: i,
      rounded: o,
      background: r,
      foreColor: a,
      text: l,
      code: h,
      maxTextLength: u = 2,
      src: c,
      hueDistance: p = 43,
      saturation: m = 0.4,
      lightness: g = 0.6,
      children: b,
      ...v
    } = this.props, w = ["avatar", e], C = { ...t, background: r, color: a };
    let x = 32;
    s && (typeof s == "number" ? (C.width = `${s}px`, C.height = `${s}px`, C.fontSize = `${Math.max(12, Math.round(s / 2))}px`, x = s) : (w.push(`size-${s}`), x = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? w.push("circle") : o && (typeof o == "number" ? C.borderRadius = `${o}px` : w.push(`rounded-${o}`));
    let T;
    if (c)
      w.push("has-img"), T = /* @__PURE__ */ d("img", { className: "avatar-img", src: c, alt: l });
    else if (l != null && l.length) {
      const S = bh(l, u);
      if (w.push("has-text", `has-text-${S.length}`), r)
        !a && r && (C.color = Sr(r));
      else {
        const I = h ?? l, A = (typeof I == "number" ? I : yh(I)) * p % 360;
        if (C.background = `hsl(${A},${m * 100}%,${g * 100}%)`, !a) {
          const D = gh(A, m, g);
          C.color = Sr(D);
        }
      }
      let M;
      x && x < 14 * S.length && (M = { transform: `scale(${x / (14 * S.length)})`, whiteSpace: "nowrap" }), T = /* @__PURE__ */ d("div", { "data-actualSize": x, className: "avatar-text", style: M, children: S });
    }
    return /* @__PURE__ */ d(
      "div",
      {
        className: N(w),
        style: C,
        ...v,
        children: [
          T,
          b
        ]
      }
    );
  }
};
const Bn = class Bn extends z {
};
Bn.NAME = "Avatar", Bn.Component = tl;
let Tr = Bn;
const Wn = class Wn extends z {
};
Wn.NAME = "BtnGroup", Wn.Component = Ga;
let Nr = Wn;
const co = Symbol("EVENT_PICK");
var Me;
class Vo extends H {
  constructor(t) {
    super(t);
    _(this, Me, void 0);
    this._handleClick = this._handleClick.bind(this), $(this, Me, !!f(`#${t.id}`).length);
  }
  get hasInput() {
    return y(this, Me);
  }
  _handleClick(t) {
    const { togglePop: s, clickType: i, onClick: o } = this.props;
    let r = i === "open" ? !0 : void 0;
    const a = f(t.target), l = o == null ? void 0 : o(t);
    if (!t.defaultPrevented) {
      if (typeof l == "boolean")
        r = l;
      else {
        if (a.closest('[data-dismiss="pick"]').length) {
          s(!1);
          return;
        }
        if (a.closest("a,input").length)
          return;
      }
      requestAnimationFrame(() => s(r));
    }
  }
  _getClass(t) {
    const { state: s, className: i } = t, { open: o, disabled: r } = s;
    return N(
      "pick",
      i,
      o && "is-open focus",
      r && "disabled"
    );
  }
  _getProps(t) {
    const { id: s, style: i, attrs: o } = t;
    return {
      id: `pick-${s}`,
      className: this._getClass(t),
      style: i,
      tabIndex: -1,
      onClick: this._handleClick,
      ...o
    };
  }
  _renderTrigger(t) {
    const { children: s, state: i } = t;
    return s ?? i.value;
  }
  _renderValue(t) {
    const { name: s, state: { value: i = "" }, id: o } = t;
    if (s)
      if (y(this, Me))
        f(`#${o}`).val(i);
      else
        return /* @__PURE__ */ d("input", { id: o, type: "hidden", className: "pick-value", name: s, value: i });
    return null;
  }
  componentDidMount() {
    const { id: t, state: s } = this.props;
    f(`#${t}`).on(`change.pick.zui.${t}`, (i, o) => {
      if (o === co)
        return;
      const r = i.target.value;
      r !== s.value && this.props.changeState({ value: r });
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    f(`#${t}`).off(`change.pick.zui.${t}`);
  }
  componentDidUpdate(t) {
    const { id: s, state: i, name: o } = this.props;
    o && t.state.value !== i.value && f(`#${s}`).trigger("change", co);
  }
  render(t) {
    return U(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
Me = new WeakMap();
var oe, ft, zt;
class el extends H {
  constructor(t) {
    super(t);
    _(this, oe, void 0);
    _(this, ft, void 0);
    _(this, zt, void 0);
    $(this, oe, K()), this._handleDocClick = (s) => {
      const { state: { open: i }, id: o, togglePop: r } = this.props, a = f(s.target);
      i !== "closing" && !a.closest(`#pick-${o},#pick-pop-${o}`).length && a.parent().length && r(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return f(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var t;
    return (t = y(this, oe)) == null ? void 0 : t.current;
  }
  get container() {
    return y(this, zt);
  }
  _handleClick(t) {
    const { togglePop: s } = this.props, i = f(t.target), o = i.closest("[data-pick-value]");
    if (o.length)
      return t.stopPropagation(), s(!1, { value: `${o.dataset("pickValue")}` });
    if (i.closest('[data-dismiss="pick"]').length)
      return s(!1);
  }
  _getClass(t) {
    const { className: s, state: i } = t, { open: o } = i;
    return N(
      "pick-pop",
      s,
      o === !0 && "in"
    );
  }
  _getProps(t) {
    const {
      id: s,
      style: i,
      maxHeight: o,
      maxWidth: r,
      minHeight: a,
      minWidth: l
    } = t, h = f.extend({
      maxHeight: o,
      maxWidth: r,
      minHeight: a,
      minWidth: l
    }, i);
    return {
      id: `pick-pop-${s}`,
      className: this._getClass(t),
      style: h,
      ref: y(this, oe),
      onClick: this._handleClick
    };
  }
  _getContainer(t) {
    if (!y(this, zt)) {
      const s = f(t.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = f("<div>").addClass("pick-container").appendTo(s)), $(this, zt, i[0]);
    }
    return y(this, zt);
  }
  _render(t) {
    return /* @__PURE__ */ d("div", { ...this._getProps(t), children: this._renderPop(t) });
  }
  _renderPop(t) {
    return t.children;
  }
  layout() {
    const { element: t, trigger: s, props: i } = this, { state: o } = i;
    if (!t || !s || !o.open) {
      y(this, ft) && (y(this, ft).call(this), $(this, ft, void 0));
      return;
    }
    y(this, ft) || $(this, ft, jo(s, t, () => {
      const { placement: r, width: a } = i;
      Hi(s, t, {
        placement: !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" ? Di() : null, ns(), Li(1)].filter(Boolean)
      }).then(({ x: l, y: h }) => {
        var u, c;
        f(t).css({
          left: l,
          top: h,
          width: a === "100%" ? f(s).outerWidth() : void 0
        }), (c = (u = this.props).onLayout) == null || c.call(u, t);
      }), a === "100%" && f(t).css({ width: f(t).width() });
    }));
  }
  componentDidMount() {
    var t, s;
    this.layout(), f(document).on("click", this._handleDocClick), (s = (t = this.props).afterRender) == null || s.call(t, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t, s;
    (s = (t = this.props).afterRender) == null || s.call(t, { firstRender: !1 });
  }
  componentWillUnmount() {
    var s, i;
    f(document).off("click", this._handleDocClick);
    const t = y(this, ft);
    t && (t(), $(this, ft, void 0)), $(this, zt, void 0), $(this, oe, void 0), f(`pick-pop-${this.props.id}`).remove(), (i = (s = this.props).beforeDestroy) == null || i.call(s);
  }
  render(t) {
    return Bc(this._render(t), this._getContainer(t));
  }
}
oe = new WeakMap(), ft = new WeakMap(), zt = new WeakMap();
var ms, st, re, fe;
let Lt = (fe = class extends H {
  constructor(t) {
    super(t);
    _(this, ms, void 0);
    _(this, st, void 0);
    _(this, re, void 0);
    $(this, st, 0), $(this, re, K()), this.changeState = (s, i) => new Promise((o) => {
      this.setState(s, () => {
        i == null || i(), o(this.state);
      });
    }), this.toggle = async (s, i) => {
      this.props.disabled && (s = !1);
      const { state: o } = this;
      if (typeof s == "boolean" && s === (!!o.open && o.open !== "closing"))
        return i && await this.changeState(i), this.state;
      y(this, st) && (clearTimeout(y(this, st)), $(this, st, 0));
      let r = await this.changeState((l) => (s = s ?? !l.open, {
        open: s ? "opening" : "closing",
        ...i
      }));
      const { open: a } = r;
      return a === "closing" ? (await pn(200, (l) => {
        $(this, st, l);
      }), $(this, st, 0), r = await this.changeState({ open: !1 })) : a === "opening" && (await pn(50, (l) => {
        $(this, st, l);
      }), $(this, st, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, $(this, ms, t.id ?? `_pick${f.guid++}`);
  }
  get id() {
    return y(this, ms);
  }
  get pop() {
    return y(this, re).current;
  }
  open(t) {
    return this.toggle(!0, t);
  }
  close(t) {
    return this.toggle(!1, t);
  }
  _getTriggerProps(t, s) {
    return {
      id: this.id,
      state: s,
      className: t.className,
      style: t.style,
      name: t.name,
      tagName: t.tagName,
      attrs: t.attrs,
      clickType: t.clickType,
      onClick: t.onClick,
      changeState: this.changeState,
      togglePop: this.toggle
    };
  }
  _getPopProps(t, s) {
    return {
      id: this.id,
      state: s,
      className: t.popClass,
      style: t.popStyle,
      changeState: this.changeState,
      togglePop: this.toggle,
      placement: t.popPlacement,
      container: t.popContainer,
      width: t.popWidth,
      height: t.popHeight,
      minHeight: t.popMinHeight,
      maxHeight: t.popMaxHeight,
      maxWidth: t.popMaxWidth,
      minWidth: t.popMinWidth
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderTrigger(t, s) {
    return null;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderPop(t, s) {
    return null;
  }
  _afterRender(t = !1) {
    var s;
    (s = this.props.afterRender) == null || s.call(this, { firstRender: t });
  }
  _getPop(t) {
    return t.Pop || this.constructor.Pop;
  }
  _getTrigger(t) {
    return t.Trigger || this.constructor.Trigger;
  }
  _handleChange(t, s) {
    const { onChange: i } = this.props;
    i && i(t, s);
  }
  componentDidMount() {
    this._afterRender(!0);
  }
  componentWillUpdate(t, s) {
    const { open: i } = this.state, { open: o } = s;
    if (i === o)
      return;
    const { onPopShow: r, onPopHide: a } = this.props;
    o && r ? r() : !o && a && a();
  }
  componentDidUpdate(t, s) {
    const { open: i, value: o } = this.state, { open: r, value: a } = s;
    if (!!i != !!r) {
      const { onPopShown: l, onPopHidden: h } = this.props;
      i && l ? l() : !i && h && h();
    }
    o !== a && this._handleChange(o, a), this._afterRender();
  }
  componentWillUnmount() {
    var s;
    (s = this.props.beforeDestroy) == null || s.call(this), y(this, st) && clearTimeout(y(this, st));
    const t = y(this, re).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, s) {
    const { open: i } = s, o = this._getTrigger(t);
    let r;
    if (i) {
      const a = this._getPop(t);
      r = /* @__PURE__ */ d(a, { ref: y(this, re), ...this._getPopProps(t, s), children: this._renderPop(t, s) }, "pop");
    }
    return /* @__PURE__ */ d(Xe, { children: [
      /* @__PURE__ */ d(o, { ...this._getTriggerProps(t, s), children: this._renderTrigger(t, s) }, "pick"),
      r
    ] });
  }
}, ms = new WeakMap(), st = new WeakMap(), re = new WeakMap(), fe.Trigger = Vo, fe.Pop = el, fe.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
}, fe);
var gs;
let wh = (gs = class extends Lt {
  constructor(e) {
    super(e), this.state.value === void 0 && e.required && (this.state.value = this.getColors()[0]);
  }
  getColors() {
    const { colors: e } = this.props;
    return typeof e == "string" ? e.split(",") : e || [];
  }
  componentDidMount() {
    this.syncColor();
  }
  syncColor() {
    const { syncBackground: e, syncBorder: t, syncColor: s, syncValue: i } = this.props, o = this.state.value || "";
    if (e && f(e).css("backgroundColor", o), t && f(t).css("borderColor", o), s && f(s).css("color", o), i) {
      const r = f(i);
      r.is("input,textarea,select") ? r.val(o) : r.text(o);
    }
  }
  _handleChange(e, t) {
    this.props.disabled || (super._handleChange(e, t), this.syncColor());
  }
  _renderTrigger(e, t) {
    const { icon: s } = e, { value: i } = t;
    return [
      s ? /* @__PURE__ */ d(tt, { icon: s }, "icon") : /* @__PURE__ */ d("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(e, t) {
    const s = super._getTriggerProps(e, t);
    return s.style = f.extend({
      color: t.value
    }, s.style), s.className = N("color-picker", s.className, { disabled: e.disabled }), s;
  }
  _renderPop(e, t) {
    const { closeBtn: s, heading: i } = e, o = this.getColors(), { value: r } = t;
    let a;
    return i && (a = /* @__PURE__ */ d("div", { className: "color-picker-heading", children: [
      i,
      s ? /* @__PURE__ */ d("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ d("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ d("div", { className: "color-picker-row", children: [
        o.map((l) => /* @__PURE__ */ d("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: r === l ? /* @__PURE__ */ d(tt, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ d("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ d(tt, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
}, gs.defaultProps = {
  ...Lt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
}, gs);
const Fn = class Fn extends z {
};
Fn.NAME = "ColorPicker", Fn.Component = wh;
let Mr = Fn;
const os = 24 * 60 * 60 * 1e3, G = (n) => n ? (n instanceof Date || (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n)), n) : /* @__PURE__ */ new Date(), vh = (n, e, t = "day") => {
  if (typeof e == "string") {
    const s = Number.parseInt(e, 10);
    t = e.replace(s.toString(), ""), e = s;
  }
  return n = new Date(G(n).getTime()), t === "month" ? n.setMonth(n.getMonth() + e) : t === "year" ? n.setFullYear(n.getFullYear() + e) : t === "week" ? n.setDate(n.getDate() + e * 7) : t === "hour" ? n.setHours(n.getHours() + e) : t === "minute" ? n.setMinutes(n.getMinutes() + e) : t === "second" ? n.setSeconds(n.getSeconds() + e) : n.setDate(n.getDate() + e), n;
}, sn = (n, e = /* @__PURE__ */ new Date()) => G(n).toDateString() === G(e).toDateString(), ho = (n, e = /* @__PURE__ */ new Date()) => G(n).getFullYear() === G(e).getFullYear(), sl = (n, e = /* @__PURE__ */ new Date()) => (n = G(n), e = G(e), n.getFullYear() === e.getFullYear() && n.getMonth() === e.getMonth()), Ou = (n, e = /* @__PURE__ */ new Date()) => {
  n = G(n), e = G(e);
  const t = 1e3 * 60 * 60 * 24, s = Math.floor(n.getTime() / t), i = Math.floor(e.getTime() / t);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, Hu = (n, e) => sn(G(e), n), Bu = (n, e) => sn(G(e).getTime() - os, n), Wu = (n, e) => sn(G(e).getTime() + os, n), lt = (n, e = "yyyy-MM-dd hh:mm", t = "") => {
  if (n = G(n), Number.isNaN(n.getDay()))
    return t;
  const s = {
    "M+": n.getMonth() + 1,
    "d+": n.getDate(),
    "h+": n.getHours(),
    "H+": n.getHours() % 12,
    "m+": n.getMinutes(),
    "s+": n.getSeconds(),
    "S+": n.getMilliseconds()
  };
  return /(y+)/i.test(e) && (e.includes("[yyyy-]") && (e = e.replace("[yyyy-]", ho(n) ? "" : "yyyy-")), e = e.replace(RegExp.$1, `${n.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(e)) {
      const o = `${s[i]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), e;
}, Fu = (n, e, t) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, i = lt(n, ho(n) ? s.month : s.full);
  if (sn(n, e))
    return i;
  const o = lt(e, ho(n, e) ? sl(n, e) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", o);
};
var ys, bs;
class _h extends H {
  constructor() {
    super(...arguments);
    _(this, ys, K());
    _(this, bs, (t, s) => {
      var i, o;
      (o = (i = this.props).onChange) == null || o.call(i, t, String(s.item.key || ""));
    });
  }
  componentDidMount() {
    f(y(this, ys).current).find(".menu-item>.active").scrollIntoView();
  }
  render(t) {
    const { minuteStep: s = 5, hour: i, minute: o } = t, r = [], a = [];
    for (let h = 0; h < 24; ++h)
      r.push({ key: h, text: h < 10 ? `0${h}` : h, active: i === h });
    for (let h = 0; h < 60; h += s)
      a.push({ key: h, text: h < 10 ? `0${h}` : h, active: o === h });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ d("div", { className: "time-picker-menu row", ref: y(this, ys), children: [
      /* @__PURE__ */ d(
        ge,
        {
          className: l,
          items: r,
          onClickItem: y(this, bs).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ d(
        ge,
        {
          className: l,
          items: a,
          onClickItem: y(this, bs).bind(this, "minute")
        }
      )
    ] });
  }
}
ys = new WeakMap(), bs = new WeakMap();
const Rr = (n) => {
  if (!n)
    return;
  const e = G(`1999-01-01 ${n}`);
  if (!Number.isNaN(e.getDay()))
    return e;
};
var zn, jn, Vn, Un, ws;
let Ch = (ws = class extends Lt {
  constructor(t) {
    super(t);
    _(this, zn, () => {
      this.toggle(!0);
    });
    _(this, jn, (t) => {
      this.setTime(t.target.value);
    });
    _(this, Vn, (t, s) => {
      this.setTime({ [t]: s });
    });
    _(this, Un, () => {
      this.setTime("");
    });
    const s = this.state;
    s.value === "now" && (s.value = lt(/* @__PURE__ */ new Date(), t.format));
  }
  setTime(t) {
    if (this.props.disabled)
      return;
    let s = "";
    if (typeof t == "string")
      s = t;
    else {
      const [l, h] = (this.state.value || "00:00").split(":"), { hour: u = +l, minute: c = +h } = t;
      s = `${u}:${c}`;
    }
    const i = Rr(s), { onInvalid: o, required: r, defaultValue: a } = this.props;
    this.setState({ value: i ? lt(i, this.props.format) : r ? a : "" }, () => {
      !i && o && o(s);
    });
  }
  getTime() {
    const t = Rr(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, s) {
    const { placeholder: i, name: o, icon: r, required: a, disabled: l, readonly: h } = t, { value: u = "", open: c } = s, p = `time-picker-${this.id}`;
    let m;
    return c && !a && u.length ? m = /* @__PURE__ */ d("button", { type: "button", className: "btn size-sm square ghost", onClick: y(this, Un), children: /* @__PURE__ */ d("span", { className: "close" }) }) : r && (r === !0 ? m = /* @__PURE__ */ d("i", { class: "i-time" }) : m = /* @__PURE__ */ d(tt, { icon: r })), [
      /* @__PURE__ */ d("input", { name: o, id: p, type: "text", class: "form-control", placeholder: i, value: u, disabled: l, readOnly: h, onFocus: y(this, zn), onChange: y(this, jn) }, "input"),
      m ? /* @__PURE__ */ d("label", { for: p, class: "input-control-suffix", children: m }, "icon") : null
    ];
  }
  _getTriggerProps(t, s) {
    const i = super._getTriggerProps(t, s);
    return {
      ...i,
      className: N(i.className, "time-picker input-control has-suffix-icon"),
      name: ""
    };
  }
  _renderPop(t) {
    const [s, i] = this.getTime() || [];
    return /* @__PURE__ */ d(_h, { hour: s, minute: i, minuteStep: t.minuteStep, onChange: y(this, Vn) });
  }
}, zn = new WeakMap(), jn = new WeakMap(), Vn = new WeakMap(), Un = new WeakMap(), ws.defaultProps = {
  ...Lt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
}, ws);
J.addLang({
  zh_cn: {
    today: "今天",
    yearFormat: "{0}年",
    weekNames: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
  },
  zh_tw: {
    today: "今天",
    yearFormat: "{0}年",
    weekNames: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
  },
  en: {
    today: "Today",
    yearFormat: "{0}",
    weekNames: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    monthNames: ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."]
  }
});
const $h = (n, e, t = 0) => {
  const s = new Date(n, e - 1, 1), i = new Date(n, e, 0), o = s.getDay(), r = s.getTime() - (7 + o - t) % 7 * os;
  return {
    days: i.getDate(),
    startTime: r,
    firstDay: s.getTime()
  };
}, Ir = (n, e) => new Set((Array.isArray(n) ? n : [n]).map((t) => lt(t, e)));
var qn;
class xh extends H {
  constructor() {
    super(...arguments);
    _(this, qn, (t) => {
      const { onClickDate: s } = this.props;
      if (!s)
        return;
      const i = f(t.target).closest(".mini-calendar-day").dataset("date");
      i && s(i);
    });
  }
  render(t) {
    const s = /* @__PURE__ */ new Date(), {
      weekStart: i = 1,
      weekNames: o = J.getLang("weekNames"),
      monthNames: r = J.getLang("monthNames"),
      year: a = s.getFullYear(),
      month: l = s.getMonth() + 1,
      highlights: h = [],
      selections: u = []
    } = t, c = [], p = "btn ghost square rounded-full";
    for (let M = 0; M < 7; M++) {
      const I = (i + M) % 7;
      c.push(/* @__PURE__ */ d("div", { className: N("col mini-calendar-day", { "is-weekend": I === 0 || I === 6 }), children: /* @__PURE__ */ d("div", { children: o ? o[I] : I }) }, M));
    }
    const { startTime: m, days: g, firstDay: b } = $h(a, l, i), v = b + g * os;
    let w = m;
    const C = [], x = "yyyy-MM-dd", T = Ir(h, x), S = Ir(u, x);
    for (; w <= v; ) {
      const M = [];
      for (let I = 0; I < 7; I++) {
        const A = new Date(w), D = A.getDate(), B = lt(A, x), P = A.getDay(), R = sl(A, b), E = N("col mini-calendar-day", {
          active: T.has(B),
          selected: S.has(B),
          "is-first": D === 1,
          "is-in-month": R,
          "is-out-month": !R,
          "is-today": sn(A, s),
          "is-weekend": P === 0 || P === 6
        });
        M.push(
          /* @__PURE__ */ d("div", { className: E, "data-date": B, children: /* @__PURE__ */ d("a", { className: p, onClick: y(this, qn), children: D === 1 && r ? r[A.getMonth()] : A.getDate() }) }, B)
        ), w += os;
      }
      C.push(/* @__PURE__ */ d("div", { className: "row", children: M }, w));
    }
    return /* @__PURE__ */ d("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ d("div", { className: "row", children: c }),
      C
    ] });
  }
}
qn = new WeakMap();
var vs, Yn;
class Ar extends H {
  constructor() {
    super(...arguments);
    _(this, vs, K());
    _(this, Yn, (t) => {
      const { onChange: s } = this.props;
      if (!s)
        return;
      const o = f(t.target).closest("[data-value]").dataset("value");
      o && (s(+o), t.stopPropagation());
    });
  }
  componentDidMount() {
    f(y(this, vs).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(t) {
    const { className: s, max: i, min: o, value: r } = t, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let h = o; h <= i; ++h)
      a.push(/* @__PURE__ */ d(Q, { type: "ghost", "data-value": h, active: h === r, className: N(l === h ? "is-current" : ""), onClick: y(this, Yn), children: h }, h));
    return /* @__PURE__ */ d("div", { className: s, ref: y(this, vs), children: a });
  }
}
vs = new WeakMap(), Yn = new WeakMap();
var Re, _s, Cs, $s, xs, ks, Kn, nl, Gn, il;
class kh extends H {
  constructor(t) {
    super(t);
    _(this, Kn);
    _(this, Gn);
    _(this, Re, void 0);
    _(this, _s, void 0);
    _(this, Cs, void 0);
    _(this, $s, void 0);
    _(this, xs, void 0);
    _(this, ks, void 0);
    $(this, Re, K()), $(this, _s, (r) => {
      const a = f(r.target).closest("[data-set-date]");
      a.length && this.changeDate(a.dataset("set-date"));
    }), $(this, Cs, () => {
      const { year: r, month: a } = this.state;
      a === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: a - 1 });
    }), $(this, $s, () => {
      const { year: r, month: a } = this.state;
      a === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: a + 1 });
    }), $(this, xs, (r) => {
      this.setState({ year: r, select: "day" });
    }), $(this, ks, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var a, l;
      if (r.startsWith("today")) {
        let h = /* @__PURE__ */ new Date();
        r.length > 3 && (h = vh(h, r.substring(5).replace("+", ""))), r = lt(h, "yyyy-MM-dd");
      }
      (l = (a = this.props).onChange) == null || l.call(a, r);
    };
    const { date: s } = t, i = /* @__PURE__ */ new Date(), o = s ? new Date(s) : void 0;
    this.state = { select: "day", year: o ? o.getFullYear() : i.getFullYear(), month: o ? o.getMonth() + 1 : i.getMonth() + 1 };
  }
  _showSelect(t) {
    this.setState((s) => s.select === t ? { select: "day" } : { select: t });
  }
  componentDidMount() {
    f(y(this, Re).current).find(".active").scrollIntoView();
  }
  render(t, s) {
    const {
      date: i,
      yearText: o = J.getLang("yearFormat") || "{0}",
      weekNames: r = J.getLang("weekNames"),
      monthNames: a = J.getLang("monthNames"),
      weekStart: l
    } = t, h = i ? new Date(i) : void 0, {
      year: u,
      month: c,
      select: p
    } = s, m = p === "day", g = G(t.minDate || "1970-1-1"), b = G(t.maxDate || "2099-12-1");
    return /* @__PURE__ */ d("div", { className: "date-picker-menu row", ref: y(this, Re), onClick: y(this, _s), children: [
      L(this, Kn, nl).call(this, t),
      /* @__PURE__ */ d("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ d("div", { className: "row p-2", children: [
          /* @__PURE__ */ d(Q, { type: p === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: Y(o, u) }),
          /* @__PURE__ */ d(Q, { type: p === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[c - 1] : c }),
          /* @__PURE__ */ d("div", { className: "flex-auto" }),
          m ? /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ d(Q, { type: "ghost", size: "sm", square: !0, onClick: y(this, Cs), children: /* @__PURE__ */ d("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ d(Q, { type: "ghost", size: "sm", square: !0, onClick: y(this, $s), children: /* @__PURE__ */ d("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        m ? /* @__PURE__ */ d(
          xh,
          {
            weekStart: l,
            weekNames: r,
            monthNames: a,
            year: u,
            month: c,
            selections: h,
            onClickDate: this.changeDate
          }
        ) : null,
        p === "year" ? /* @__PURE__ */ d(
          Ar,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: u,
            min: g.getFullYear(),
            max: b.getFullYear(),
            onChange: y(this, xs)
          }
        ) : p === "month" ? /* @__PURE__ */ d(
          Ar,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: c,
            min: 1,
            max: 12,
            onChange: y(this, ks)
          }
        ) : null,
        m ? L(this, Gn, il).call(this, t) : null
      ] })
    ] });
  }
}
Re = new WeakMap(), _s = new WeakMap(), Cs = new WeakMap(), $s = new WeakMap(), xs = new WeakMap(), ks = new WeakMap(), Kn = new WeakSet(), nl = function(t) {
  let { menu: s } = t;
  return s ? (Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ d(ge, { ...s })) : null;
}, Gn = new WeakSet(), il = function(t) {
  let { actions: s } = t;
  const { todayText: i, clearText: o } = t;
  return s || (s = [{ text: i, "data-set-date": lt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ d("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ d(Zt, { btnProps: { className: "ghost text-primary" }, ...s }),
    o ? /* @__PURE__ */ d(Q, { type: "ghost text-link", "data-set-date": "", children: o }) : null
  ] });
};
var Ss, Es, Ts, Ns;
let Sh = (Ns = class extends Lt {
  constructor(t) {
    super(t);
    _(this, Ss, void 0);
    _(this, Es, void 0);
    _(this, Ts, void 0);
    $(this, Ss, () => {
      this.toggle(!0);
    }), $(this, Es, (i) => {
      this.setDate(i.target.value);
    }), $(this, Ts, () => {
      this.setDate("");
    }), this.setDate = (i) => {
      if (this.props.disabled)
        return;
      const o = G(i), r = !i || Number.isNaN(o.getDay()), { onInvalid: a, defaultValue: l = "", required: h } = this.props;
      this.setState({ value: r ? h ? l : "" : lt(o, this.props.format) }, () => {
        !r && a && a(i), this.toggle(!1);
      });
    };
    const { value: s } = this.state;
    s && (this.state.value = lt(s === "today" ? /* @__PURE__ */ new Date() : s, t.format));
  }
  _renderTrigger(t, s) {
    const { placeholder: i, icon: o, required: r, disabled: a, readonly: l } = t, { value: h = "", open: u } = s, c = `date-picker-${this.id}`;
    let p;
    return u && !r && h.length ? p = /* @__PURE__ */ d("button", { type: "button", className: "btn size-sm square ghost", onClick: y(this, Ts), children: /* @__PURE__ */ d("span", { className: "close" }) }) : o && (o === !0 ? p = /* @__PURE__ */ d("i", { class: "i-calendar" }) : p = /* @__PURE__ */ d(tt, { icon: o })), [
      /* @__PURE__ */ d("input", { id: c, type: "text", class: "form-control", placeholder: i, value: h, disabled: a, readOnly: l, onFocus: y(this, Ss), onChange: y(this, Es) }, "input"),
      p ? /* @__PURE__ */ d("label", { for: c, class: "input-control-suffix", children: p }, "icon") : null
    ];
  }
  _getTriggerProps(t, s) {
    const i = super._getTriggerProps(t, s);
    return {
      ...i,
      className: N(i.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, s) {
    const i = super._getPopProps(t, s);
    return {
      ...i,
      className: N(i.className, "popup")
    };
  }
  _renderPop(t, s) {
    const { weekNames: i, monthNames: o, weekStart: r, yearText: a, todayText: l = J.getLang("today"), clearText: h, menu: u, actions: c, minDate: p, maxDate: m, required: g } = t;
    return /* @__PURE__ */ d(
      kh,
      {
        onChange: this.setDate,
        date: s.value,
        weekNames: i,
        monthNames: o,
        weekStart: r,
        yearText: a,
        todayText: l,
        clearText: g ? "" : h,
        menu: u,
        actions: c,
        minDate: p,
        maxDate: m
      }
    );
  }
}, Ss = new WeakMap(), Es = new WeakMap(), Ts = new WeakMap(), Ns.defaultProps = {
  ...Lt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
}, Ns);
const Xn = class Xn extends z {
};
Xn.NAME = "TimePicker", Xn.Component = Ch;
let Dr = Xn;
const Jn = class Jn extends z {
};
Jn.NAME = "DatePicker", Jn.Component = Sh;
let Lr = Jn;
const Ui = "show", Pr = "in", Eh = '[data-dismiss="modal"]', ct = class ct extends Ct {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (e) => {
      const t = e.target, s = t.closest(".modal");
      !s || s !== this.modalElement || (t.closest(Eh) || this.options.backdrop === !0 && t === s) && (e.stopPropagation(), this.hide());
    };
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(Ui);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  get rob() {
    return this._rob;
  }
  _observeResize() {
    var e;
    if (this.options.responsive && typeof ResizeObserver < "u") {
      (e = this._rob) == null || e.disconnect();
      const { dialog: t } = this;
      if (t) {
        const s = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const i = t.clientWidth, o = t.clientHeight, [r, a] = this._lastDialogSize || [];
          (r !== i || a !== o) && (this._lastDialogSize = [i, o], this.layout());
        });
        s.observe(t), this._rob = s;
      }
    }
  }
  afterInit() {
    this.on("click", this._handleClick), this.options.show && this.show(), this._observeResize();
  }
  destroy() {
    var e;
    super.destroy(), (e = this._rob) == null || e.disconnect(), this._rob = void 0;
  }
  show(e) {
    const { modalElement: t } = this;
    if (this.shown)
      return f(t).css("z-index", `${ct.zIndex++}`), !1;
    this.setOptions(e);
    const { animation: s, backdrop: i, className: o, style: r } = this.options;
    return f(t).setClass({
      "modal-trans": s,
      "modal-no-backdrop": !i
    }, Ui, o).css({
      zIndex: `${ct.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      f(t).addClass(Pr), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (f(this.modalElement).removeClass(Pr), this.emit("hide"), this._setTimer(() => {
      f(this.modalElement).removeClass(Ui), this.emit("hidden");
    }), !0) : !1;
  }
  layout(e, t) {
    if (!this.shown)
      return;
    const { dialog: s } = this;
    if (!s)
      return;
    const i = f(s);
    if (t = t ?? this.options.size, t) {
      i.removeAttr("data-size");
      const l = { width: "", height: "" };
      typeof t == "object" ? (l.width = t.width, l.height = t.height) : typeof t == "string" && ["md", "sm", "lg", "full"].includes(t) ? i.attr("data-size", t) : t && (l.width = t), i.css(l);
    }
    e = e ?? this.options.position ?? "fit";
    const o = s.clientWidth, r = s.clientHeight;
    this._lastDialogSize = [o, r], typeof e == "function" && (e = e({ width: o, height: r }));
    const a = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof e == "number" ? (a.alignSelf = "flex-start", a.top = e) : typeof e == "object" && e ? (a.alignSelf = "flex-start", Object.assign(a, e)) : e === "fit" ? (a.alignSelf = "flex-start", a.top = `${Math.max(0, Math.floor((window.innerHeight - r) / 3))}px`) : e === "bottom" ? a.alignSelf = "flex-end" : e === "top" ? a.alignSelf = "flex-start" : e !== "center" && typeof e == "string" && (a.alignSelf = "flex-start", a.top = e), i.css(a), f(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  _setTimer(e, t) {
    this._timer && (clearTimeout(this._timer), this._timer = 0), e && (this.options.animation ? this._timer = window.setTimeout(e, t ?? this.options.transTime) : e());
  }
  static hide(e) {
    var t;
    (t = ct.query(e)) == null || t.hide();
  }
  static show(e) {
    var t;
    (t = ct.query(e)) == null || t.show();
  }
};
ct.NAME = "Modal", ct.MULTI_INSTANCE = !0, ct.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}, ct.zIndex = 1500;
let Pt = ct;
f(window).on(`resize.${Pt.NAMESPACE}`, () => {
  Pt.getAll().forEach((n) => {
    const e = n;
    e.shown && e.options.responsive && e.layout();
  });
});
f(document).on(`to-hide.${Pt.NAMESPACE}`, (n, e) => {
  Pt.hide(e == null ? void 0 : e.target);
});
const Ko = class Ko extends H {
  componentDidMount() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this);
  }
  renderHeader() {
    const {
      header: e,
      headerClass: t,
      title: s
    } = this.props;
    return X(e) ? e : e === !1 || !s ? null : /* @__PURE__ */ d("div", { className: N("modal-header", t), children: /* @__PURE__ */ d("div", { className: "modal-title", children: s }) });
  }
  renderActions() {
    const {
      actions: e,
      closeBtn: t
    } = this.props;
    return !t && !e ? null : X(e) ? e : /* @__PURE__ */ d("div", { className: "modal-actions", children: [
      e ? /* @__PURE__ */ d(Zt, { ...e }) : null,
      t ? /* @__PURE__ */ d("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ d("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: e,
      bodyClass: t
    } = this.props;
    return e ? X(e) ? e : /* @__PURE__ */ d("div", { className: N("modal-body", t), children: e }) : null;
  }
  renderFooter() {
    const {
      footer: e,
      footerClass: t,
      footerActions: s
    } = this.props;
    return X(e) ? e : e === !1 || !s ? null : /* @__PURE__ */ d("div", { className: N("modal-footer", t), children: s ? /* @__PURE__ */ d(Zt, { ...s }) : null });
  }
  render() {
    const {
      className: e,
      style: t,
      contentClass: s,
      children: i
    } = this.props;
    return /* @__PURE__ */ d("div", { className: N("modal-dialog", e), style: t, children: /* @__PURE__ */ d("div", { className: N("modal-content", s), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
};
Ko.defaultProps = { closeBtn: !0 };
let uo = Ko;
var Ie, Ae, De;
class Th extends H {
  constructor() {
    super(...arguments);
    _(this, Ie, void 0);
    _(this, Ae, void 0);
    _(this, De, void 0);
    $(this, Ie, K()), this.state = {}, $(this, De, () => {
      var i, o;
      const t = (o = (i = y(this, Ie).current) == null ? void 0 : i.contentWindow) == null ? void 0 : o.document;
      if (!t)
        return;
      let s = y(this, Ae);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const r = t.body, a = t.documentElement, l = Math.ceil(Math.max(r.scrollHeight, r.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), s.observe(t.body), s.observe(t.documentElement), $(this, Ae, s);
    });
  }
  componentDidMount() {
    y(this, De).call(this);
  }
  componentWillUnmount() {
    var t;
    (t = y(this, Ae)) == null || t.disconnect();
  }
  render() {
    const { url: t } = this.props;
    return /* @__PURE__ */ d(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: t,
        ref: y(this, Ie),
        onLoad: y(this, De)
      }
    );
  }
}
Ie = new WeakMap(), Ae = new WeakMap(), De = new WeakMap();
function Nh(n, e) {
  const { custom: t, title: s, content: i } = e;
  return {
    body: i,
    title: s,
    ...typeof t == "function" ? t() : t
  };
}
async function Mh(n, e) {
  const { dataType: t = "html", url: s, request: i, custom: o, title: r, replace: a = !0, executeScript: l = !0 } = e, u = await (await fetch(s, {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "X-ZUI-Modal": "true"
    },
    ...i
  })).text();
  if (t !== "html")
    try {
      const c = JSON.parse(u);
      return {
        title: r,
        ...o,
        ...c
      };
    } catch {
    }
  return a !== !1 && t === "html" ? [u] : {
    title: r,
    ...o,
    body: t === "html" ? /* @__PURE__ */ d(Zs, { className: "modal-body", html: u, executeScript: l }) : u
  };
}
async function Rh(n, e) {
  const { url: t, custom: s, title: i } = e;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ d(Th, { url: t })
  };
}
const Ih = {
  custom: Nh,
  ajax: Mh,
  iframe: Rh
}, qi = "loading";
var pt, Le, mt, Ms, po, Rs, mo;
const Bt = class Bt extends Pt {
  constructor() {
    super(...arguments);
    _(this, Ms);
    _(this, Rs);
    _(this, pt, void 0);
    _(this, Le, void 0);
    _(this, mt, void 0);
  }
  get id() {
    return y(this, Le);
  }
  get loading() {
    var t;
    return (t = y(this, pt)) == null ? void 0 : t.classList.contains(qi);
  }
  get shown() {
    var t;
    return !!((t = y(this, pt)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = y(this, pt);
    if (!t) {
      const { options: s } = this;
      let i = y(this, Le);
      i || (i = s.id || `modal-${f.guid++}`, $(this, Le, i));
      const { $element: o } = this;
      if (t = o.find(`#${i}`)[0], !t) {
        const r = this.key;
        t = f("<div>").attr({
          id: i,
          "data-key": r
        }).data(this.constructor.KEY, this).css(s.style || {}).setClass("modal modal-async load-indicator", s.className).appendTo(o)[0];
      }
      $(this, pt, t);
    }
    return t;
  }
  get $emitter() {
    const t = y(this, pt);
    return t ? f(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.on("hidden", () => {
      this.options.destoryOnHide && this.destroy();
    });
  }
  show(t) {
    return super.show(t) ? (this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const t = y(this, pt);
    t && (f(t).removeData(this.constructor.KEY).remove(), $(this, pt, void 0));
  }
  render(t) {
    super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    y(this, mt) && clearTimeout(y(this, mt));
    const { modalElement: t, options: s } = this, i = f(t), { type: o, loadTimeout: r, loadingText: a = null } = s, l = Ih[o];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${o}"`), !1;
    i.attr("data-loading", a).addClass(qi), r && $(this, mt, window.setTimeout(() => {
      $(this, mt, 0), L(this, Rs, mo).call(this, this.options.timeoutTip);
    }, r));
    const h = await l.call(this, t, s);
    return h === !1 ? await L(this, Rs, mo).call(this, this.options.failedTip) : h && typeof h == "object" && await L(this, Ms, po).call(this, h), y(this, mt) && (clearTimeout(y(this, mt)), $(this, mt, 0)), this.layout(), await pn(100), i.removeClass(qi), !0;
  }
  static open(t) {
    return new Promise((s) => {
      const { container: i = document.body, ...o } = t, r = { show: !0, ...o };
      !r.type && r.url && (r.type = "ajax");
      const a = Bt.ensure(i, r), l = `${Bt.NAMESPACE}.open${f.guid++}`;
      a.on(`hidden${l}`, () => {
        a.off(l), s(a);
      }), a.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: s, message: i, icon: o, iconClass: r = "icon-lg muted", actions: a = "confirm", onClickAction: l, custom: h, key: u = "__alert", ...c } = t, p = (typeof h == "function" ? h() : h) || {};
    let m = typeof i == "object" && i.html ? /* @__PURE__ */ d("div", { dangerouslySetInnerHTML: { __html: i.html } }) : /* @__PURE__ */ d("div", { children: i });
    o ? m = /* @__PURE__ */ d("div", { className: N("modal-body row gap-4 items-center", p.bodyClass), children: [
      /* @__PURE__ */ d("div", { className: `icon ${o} ${r}` }),
      m
    ] }) : m = /* @__PURE__ */ d("div", { className: N("modal-body", p.bodyClass), children: m });
    const g = [];
    (Array.isArray(a) ? a : [a]).forEach((w) => {
      w = {
        ...typeof w == "string" ? { key: w } : w
      }, typeof w.key == "string" && (w.text || (w.text = J.getLang(w.key, w.key)), w.btnType || (w.btnType = `btn-wide ${w.key === "confirm" ? "primary" : "btn-default"}`)), w && g.push(w);
    }, []);
    let b;
    const v = g.length ? {
      gap: 4,
      items: g,
      onClickItem: ({ item: w, event: C }) => {
        const x = Bt.query(C.target, u);
        b = w.key, (l == null ? void 0 : l(w, x)) !== !1 && x && x.hide();
      }
    } : void 0;
    return await Bt.open({
      key: u,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: m,
      backdrop: "static",
      custom: { footerActions: v, ...p },
      ...c
    }), b;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: s, onResult: i, ...o } = t;
    return await Bt.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (a, l) => {
        i == null || i(a.key === "confirm", l), s == null || s(a, l);
      },
      ...o
    }) === "confirm";
  }
};
pt = new WeakMap(), Le = new WeakMap(), mt = new WeakMap(), Ms = new WeakSet(), po = function(t) {
  return new Promise((s) => {
    if (Array.isArray(t))
      return f(this.modalElement).html(t[0]), this.layout(), this._observeResize(), s();
    const { afterRender: i, ...o } = t;
    t = {
      afterRender: (r) => {
        this.layout(), i == null || i(r), this._observeResize(), s();
      },
      ...o
    }, wn(
      /* @__PURE__ */ d(uo, { ...t }),
      this.modalElement
    );
  });
}, Rs = new WeakSet(), mo = function(t) {
  if (t)
    return L(this, Ms, po).call(this, {
      body: /* @__PURE__ */ d("div", { className: "modal-load-failed", children: t })
    });
}, Bt.DEFAULT = {
  ...Pt.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let fo = Bt;
const Ah = '[data-toggle="modal"]', Go = class Go extends Ct {
  get modal() {
    return this._modal;
  }
  get container() {
    const { container: e } = this.options;
    return typeof e == "string" ? document.querySelector(e) : e instanceof HTMLElement ? e : document.body;
  }
  show() {
    var e;
    return (e = this._initModal()) == null ? void 0 : e.show();
  }
  hide() {
    var e;
    return (e = this._modal) == null ? void 0 : e.hide();
  }
  _getBuilderOptions() {
    const {
      container: e,
      ...t
    } = this.options, s = t, i = this.$element.attr("href") || "";
    return s.type || (s.target || i[0] === "#" ? s.type = "static" : s.type = s.type || (s.url || i ? "ajax" : "custom")), !s.url && (s.type === "iframe" || s.type === "ajax") && i[0] !== "#" && (s.url = i), !s.key && s.id && (s.key = s.id), s;
  }
  _initModal() {
    const e = this._getBuilderOptions();
    let t = this._modal;
    if (t)
      return t.setOptions(e), t;
    if (e.type === "static") {
      const s = this._getStaticModalElement();
      if (!s)
        return;
      t = Pt.ensure(s, e);
    } else
      t = fo.ensure(this.container, e);
    return this._modal = t, t.on("destroyed", () => {
      this._modal = void 0;
    }), t;
  }
  _getStaticModalElement() {
    let e = this.options.target;
    if (!e) {
      const { $element: t } = this;
      if (t.is("a")) {
        const s = t.attr("href");
        s != null && s.startsWith("#") && (e = s);
      }
    }
    return this.container.querySelector(e || ".modal");
  }
};
Go.NAME = "ModalTrigger";
let kn = Go;
f(document).on(`click${kn.NAMESPACE}`, Ah, (n) => {
  const e = n.currentTarget;
  if (e) {
    const t = kn.ensure(e);
    t && (t.show(), n.preventDefault());
  }
});
var Is;
let Dh = (Is = class extends Ai {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = N(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
}, Is.NAME = "nav", Is);
const Zn = class Zn extends z {
};
Zn.NAME = "Nav", Zn.Component = Dh;
let Or = Zn;
function rs(n, e) {
  const t = n.pageTotal || Math.ceil(n.recTotal / n.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = t : e === "prev" ? e = n.page - 1 : e === "next" ? e = n.page + 1 : e === "current" ? e = n.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? t + e : e, t)) : n.page, {
    ...n,
    pageTotal: t,
    page: e
  };
}
function Lh({
  key: n,
  type: e,
  btnType: t,
  page: s,
  format: i,
  pagerInfo: o,
  linkCreator: r,
  ...a
}) {
  const l = rs(o, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : Y(i, l)), a.url === void 0 && r && (a.url = typeof r == "function" ? r(l) : Y(r, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === o.page), /* @__PURE__ */ d(Q, { type: t, ...a });
}
function Ph({
  key: n,
  type: e,
  page: t,
  text: s = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const a = rs(i, t);
  return s = typeof s == "function" ? s(a) : Y(s, a), /* @__PURE__ */ d(Ha, { ...r, children: [
    o,
    s
  ] });
}
function Oh({
  key: n,
  type: e,
  btnType: t,
  count: s = 12,
  pagerInfo: i,
  onClick: o,
  linkCreator: r,
  ...a
}) {
  if (!i.pageTotal)
    return;
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ d(Q, { type: t, ...l })), u = (p, m) => {
    const g = [];
    for (let b = p; b <= m; b++) {
      l.text = b, delete l.icon, l.disabled = !1;
      const v = rs(i, b);
      r && (l.url = typeof r == "function" ? r(v) : Y(r, v)), g.push(/* @__PURE__ */ d(Q, { type: t, ...l, onClick: o }));
    }
    return g;
  };
  let c = [];
  return c = [...u(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? c = [...c, ...u(2, i.pageTotal)] : i.page < s - 2 ? c = [...c, ...u(2, s - 2), h(), ...u(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? c = [...c, h(), ...u(i.pageTotal - s + 3, i.pageTotal)] : c = [...c, h(), ...u(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...u(i.pageTotal, i.pageTotal)]), c;
}
function Hh({
  type: n,
  pagerInfo: e,
  linkCreator: t,
  items: s = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  itemProps: o,
  ...r
}) {
  var l;
  i.items = i.items ?? s.map((h) => {
    const u = { ...e, recPerPage: h };
    return {
      ...o,
      text: `${h}`,
      active: h === e.recPerPage,
      url: typeof t == "function" ? t(u) : Y(t, u)
    };
  });
  const { text: a = "" } = r;
  return r.text = typeof a == "function" ? a(e) : Y(a, e), i.menu = { ...i.menu, className: N((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ d(Ka, { type: "dropdown", dropdown: i, ...r });
}
function Bh({
  key: n,
  page: e,
  type: t,
  btnType: s,
  pagerInfo: i,
  size: o,
  onClick: r,
  onChange: a,
  linkCreator: l,
  ...h
}) {
  const u = { ...h };
  let c;
  const p = (b) => {
    var v;
    c = Number((v = b.target) == null ? void 0 : v.value) || 1, c = c > i.pageTotal ? i.pageTotal : c;
  }, m = (b) => {
    if (!(b != null && b.target))
      return;
    c = c <= i.pageTotal ? c : i.pageTotal;
    const v = rs(i, c);
    a && !a({ info: v, event: b }) || (b.target.href = u.url = typeof l == "function" ? l(v) : Y(l, v));
  }, g = rs(i, e || 0);
  return u.url = typeof l == "function" ? l(g) : Y(l, g), /* @__PURE__ */ d("div", { className: N("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ d("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: p }),
    /* @__PURE__ */ d(Q, { type: s, ...u, onClick: m })
  ] });
}
var pe;
let Wh = (pe = class extends Zt {
  get pagerInfo() {
    const { page: e = 1, recTotal: t = 0, recPerPage: s = 10 } = this.props;
    return { page: e, recTotal: t, recPerPage: s, pageTotal: s ? Math.ceil(t / s) : 0 };
  }
  isBtnItem(e) {
    return e === "link" || e === "nav" || e === "size-menu" || e === "goto" || super.isBtnItem(e);
  }
  getItemRenderProps(e, t, s) {
    const i = super.getItemRenderProps(e, t, s), o = t.type || "item";
    return o === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (o === "link" || o === "size-menu" || o === "nav" || o === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: e.linkCreator }), i;
  }
}, pe.NAME = "pager", pe.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}, pe.ItemComponents = {
  ...Zt.ItemComponents,
  link: Lh,
  info: Ph,
  nav: Oh,
  "size-menu": Hh,
  goto: Bh
}, pe);
const Qn = class Qn extends z {
};
Qn.NAME = "Pager", Qn.Component = Wh;
let Hr = Qn;
const ti = class ti extends z {
};
ti.NAME = "Pick", ti.Component = Lt;
let Br = ti;
var Pe, As, Ds, ei;
class ol extends H {
  constructor(t) {
    super(t);
    _(this, Pe, K());
    _(this, As, K());
    _(this, Ds, (t) => {
      var i, o;
      const s = t.target.value;
      (o = (i = this.props).onSearch) == null || o.call(i, s), this.setState({ search: s }), t.stopPropagation();
    });
    _(this, ei, (t) => {
      var s, i;
      t.stopPropagation(), (i = (s = this.props).onClear) == null || i.call(s), this.setState({ search: "" }, () => this.focus());
    });
    this.state = { search: t.defaultSearch ?? "" };
  }
  focus() {
    var t;
    (t = y(this, Pe).current) == null || t.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: t } = this.props;
    if (t) {
      const { current: s } = y(this, As), { current: i } = y(this, Pe);
      if (s && i) {
        const o = f(i).parent();
        o.width(Math.ceil(Math.min(s.clientWidth, o.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(t, s) {
    const { placeholder: i, inline: o } = t, { search: r } = s, a = r.trim().length > 0;
    let l;
    return o ? l = /* @__PURE__ */ d("div", { className: "picker-search-measure", ref: y(this, As), children: r }) : a ? l = /* @__PURE__ */ d("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: y(this, ei), children: /* @__PURE__ */ d("span", { className: "close" }) }) : l = /* @__PURE__ */ d("span", { className: "magnifier" }), /* @__PURE__ */ d("div", { className: `picker-search${o ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ d(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: r,
          onChange: y(this, Ds),
          onInput: y(this, Ds),
          ref: y(this, Pe)
        }
      ),
      l
    ] });
  }
}
Pe = new WeakMap(), As = new WeakMap(), Ds = new WeakMap(), ei = new WeakMap();
var Oe, Ls, Ps, Os;
class Fh extends Vo {
  constructor() {
    super(...arguments);
    _(this, Oe, void 0);
    _(this, Ls, void 0);
    _(this, Ps, void 0);
    _(this, Os, void 0);
    $(this, Oe, K()), $(this, Ls, (t) => {
      const { onDeselect: s, state: { selections: i } } = this.props, o = f(t.target).closest(".picker-deselect-btn").attr("data-value");
      s && i.length && typeof o == "string" && s(o), t.stopPropagation();
    }), $(this, Ps, (t) => {
      this.props.changeState({ search: t });
    }), $(this, Os, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (t) => /* @__PURE__ */ d("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ d("span", { className: "text", children: t.text }),
      this.props.disabled ? null : /* @__PURE__ */ d("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: y(this, Ls), "data-value": t.value, children: /* @__PURE__ */ d("span", { className: "close" }) })
    ] }, t.value);
  }
  _handleClick(t) {
    var s;
    super._handleClick(t), (s = y(this, Oe).current) == null || s.focus();
  }
  _getClass(t) {
    return N(
      super._getClass(t),
      "picker-select picker-select-multi form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: s }, searchHint: i } = t;
    return /* @__PURE__ */ d(
      ol,
      {
        inline: !0,
        ref: y(this, Oe),
        defaultSearch: s,
        onSearch: y(this, Ps),
        onClear: y(this, Os),
        placeholder: i
      }
    );
  }
  _renderTrigger(t) {
    const { state: { selections: s = [], open: i }, search: o, placeholder: r, children: a } = this.props, l = i && o;
    return !l && !s.length ? /* @__PURE__ */ d("span", { className: "picker-select-placeholder", children: r }, "selections") : [
      /* @__PURE__ */ d("div", { className: "picker-multi-selections", children: [
        s.map(this._renderSelection),
        l ? this._renderSearch(t) : null
      ] }, "selections"),
      a,
      /* @__PURE__ */ d("span", { class: "caret" }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: s, state: { value: i = "" }, id: o, valueList: r, emptyValue: a } = t, l = r.length ? r : [a];
    if (s)
      if (this.hasInput)
        f(`#${o}`).val(i);
      else
        return /* @__PURE__ */ d("select", { id: o, multiple: !0, className: "pick-value", name: s, style: { display: "none" }, children: l.map((h) => /* @__PURE__ */ d("option", { value: h, children: h }, h)) });
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: s, emptyValue: i } = this.props;
    f(`#${t}`).val(s.length ? s : [i]);
  }
  componentDidUpdate(t) {
    const { id: s, state: i, name: o, valueList: r, emptyValue: a } = this.props;
    o && t.state.value !== i.value && f(`#${s}`).val(r.length ? r : [a]).trigger("change", co);
  }
}
Oe = new WeakMap(), Ls = new WeakMap(), Ps = new WeakMap(), Os = new WeakMap();
var Hs, si, ni, ii, oi, rl;
class zh extends Vo {
  constructor() {
    super(...arguments);
    _(this, oi);
    _(this, Hs, K());
    _(this, si, (t) => {
      this.props.disabled || (this.props.onClear(), t.stopPropagation());
    });
    _(this, ni, (t) => {
      this.props.changeState({ search: t });
    });
    _(this, ii, () => {
      this.props.togglePop(!0, { search: "" });
    });
  }
  _handleClick(t) {
    var s;
    super._handleClick(t), (s = y(this, Hs).current) == null || s.focus();
  }
  _getClass(t) {
    return N(
      super._getClass(t),
      "picker-select picker-select-single form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: s } } = t;
    return /* @__PURE__ */ d(
      ol,
      {
        ref: y(this, Hs),
        defaultSearch: s,
        onSearch: y(this, ni),
        onClear: y(this, ii),
        placeholder: L(this, oi, rl).call(this)
      }
    );
  }
  _renderTrigger(t) {
    const { children: s, state: { selections: i = [], open: o }, placeholder: r, search: a, disabled: l, clearable: h } = t, [u] = i, c = o && a;
    let p;
    c ? p = this._renderSearch(t) : u ? p = /* @__PURE__ */ d("span", { className: "picker-single-selection", children: u.text }, "main") : p = /* @__PURE__ */ d("span", { className: "picker-select-placeholder", children: r }, "main");
    const m = h && !c ? /* @__PURE__ */ d("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: l, onClick: y(this, si), children: /* @__PURE__ */ d("span", { className: "close" }) }, "deselect") : null;
    return [
      p,
      s,
      m,
      c ? null : /* @__PURE__ */ d("span", { className: "caret" }, "caret")
    ];
  }
}
Hs = new WeakMap(), si = new WeakMap(), ni = new WeakMap(), ii = new WeakMap(), oi = new WeakSet(), rl = function() {
  const { searchHint: t, state: { value: s, selections: i } } = this.props;
  let o = t;
  if (o === void 0) {
    const r = i.find((a) => a.value === s);
    r && typeof r.text == "string" && (o = r.text);
  }
  return o;
};
const jh = (n, e, t = "is-match") => n.reduce((s, i) => [...s].reduce((o, r) => {
  if (typeof r != "string")
    return o.push(r), o;
  const a = r.toLowerCase().split(i);
  if (a.length === 1)
    return o.push(r), o;
  let l = 0;
  return a.forEach((h, u) => {
    u && (o.push(/* @__PURE__ */ d("span", { class: t, children: r.substring(l, l + i.length) })), l += i.length), o.push(r.substring(l, l + h.length)), l += h.length;
  }), o;
}, []), e);
var ri, ai, al, li, ll, ci;
class Vh extends el {
  constructor() {
    super(...arguments);
    _(this, ai);
    _(this, li);
    _(this, ri, K());
    _(this, ci, ({ item: t }) => {
      const s = t.key, { multiple: i, onToggleValue: o, onSelect: r, togglePop: a } = this.props;
      i ? o(s) : (r(s), a(!1, { search: "" }));
    });
  }
  componentDidMount() {
    super.componentDidMount();
    const t = this.element;
    t && f(t).on("mouseenter.picker.zui", ".menu-item", (s) => {
      const i = f(s.currentTarget);
      this.setHoverItem(i.children("a").attr("data-value") ?? "");
    });
  }
  componentWillUnmount() {
    super.componentDidMount();
    const t = this.element;
    t && f(t).off(".picker.zui");
  }
  setHoverItem(t) {
    this.props.changeState({ hoverItem: t }, () => {
      const s = L(this, ai, al).call(this);
      s != null && s.length && s.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _getClass(t) {
    return N(
      super._getClass(t),
      "picker-menu"
    );
  }
  _renderPop(t) {
    const { menu: s } = t;
    return /* @__PURE__ */ d(
      ge,
      {
        ref: y(this, ri),
        className: "picker-menu-list",
        items: L(this, li, ll).call(this),
        onClickItem: y(this, ci),
        ...s
      }
    );
  }
}
ri = new WeakMap(), ai = new WeakSet(), al = function() {
  const t = this.element;
  if (t)
    return f(t).find(".menu-item>a.hover");
}, li = new WeakSet(), ll = function() {
  const { selections: t, items: s, hoverItem: i, search: o } = this.props.state, r = new Set(t.map((u) => u.value));
  let a = !1;
  const l = f.unique(o.toLowerCase().split(" ").filter((u) => u.length)), h = s.reduce((u, c) => {
    const {
      value: p = "",
      keys: m,
      text: g,
      className: b,
      ...v
    } = c;
    p === i && (a = !0);
    const w = g ?? p;
    return w && u.push({
      key: p,
      active: r.has(p),
      text: typeof w == "string" ? jh(l, [w]) : /* @__PURE__ */ d(Je, { content: w }),
      className: N(b, { hover: p === i }),
      "data-value": p,
      ...v
    }), u;
  }, []);
  return !a && h.length && (h[0].className = N(h[0].className, "hover")), h;
}, ci = new WeakMap();
var He, gt, St, Be, Ye;
let Uh = (Ye = class extends Lt {
  constructor(t) {
    super(t);
    _(this, He, void 0);
    _(this, gt, void 0);
    _(this, St, void 0);
    _(this, Be, void 0);
    $(this, St, 0), this.isEmptyValue = (r) => y(this, Be).has(r), this.toggleValue = (r, a) => {
      if (!this.props.multiple)
        return a || r !== this.value ? this.setValue(r) : this.setValue();
      const { valueList: l } = this, h = l.indexOf(r);
      if (a !== h >= 0)
        return h > -1 ? l.splice(h, 1) : l.push(r), this.setValue(l);
    }, this.deselect = (r) => {
      const { valueList: a } = this, l = new Set(this.formatValueList(r)), h = a.filter((u) => !l.has(u));
      this.setValue(h);
    }, this.clear = () => {
      this.setValue();
    }, this.select = (r) => {
      const a = this.formatValueList(r), l = this.props.multiple ? [...this.valueList, ...a] : a[0];
      return this.setValue(l);
    }, this.isSelected = (r) => this.valueList.includes(r), f.extend(this.state, {
      loading: !1,
      search: "",
      items: t.items,
      selections: []
    });
    const { valueSplitter: s = ",", emptyValue: i = "" } = this.props;
    $(this, Be, new Set(i.split(s)));
    const { items: o } = this.state;
    if (Array.isArray(o) && o.length) {
      if (o.forEach((r) => r.value = String(r.value)), t.limitValueInList) {
        const r = new Set(o.map((a) => a.value));
        this.state.value = this.valueList.filter((a) => r.has(a)).join(t.valueSplitter);
      }
      !this.valueList.length && t.required && !t.multiple && (this.state.value = o[0].value);
    }
  }
  get value() {
    return this.state.value;
  }
  get valueList() {
    return this.formatValueList(this.state.value);
  }
  get firstEmptyValue() {
    return y(this, Be).values().next().value;
  }
  async load() {
    let t = y(this, gt);
    t && t.abort(), t = new AbortController(), $(this, gt, t);
    const { items: s, searchDelay: i } = this.props, { search: o } = this.state;
    let r = [];
    if (typeof s == "function") {
      if (await pn(i || 500), y(this, gt) !== t || (r = await s(o, { signal: t.signal }), y(this, gt) !== t))
        return r;
    } else if (o.length) {
      const a = f.unique(o.toLowerCase().split(" ").filter((l) => l.length));
      a.length ? r = s.reduce((l, h) => {
        const {
          value: u,
          keys: c = "",
          text: p
        } = h;
        return a.every((m) => u.toLowerCase().includes(m) || c.toLowerCase().includes(m) || typeof p == "string" && p.toLowerCase().includes(m)) && l.push(h), l;
      }, []) : r = s;
    } else
      r = s;
    return $(this, gt, void 0), r;
  }
  async update(t) {
    const { state: s, props: i } = this, o = y(this, He) || {}, r = {};
    if ($(this, He, o), (t || o.search !== s.search || i.items !== o.items) && (r.items = (await this.load()).filter((l) => (l.value = String(l.value), !this.isEmptyValue(l.value))), r.loading = !1, o.items = i.items, o.search = s.search), t || o.value !== s.value) {
      const l = r.items || s.items, h = new Map(l.map((u) => [u.value, u]));
      r.selections = this.valueList.reduce((u, c) => (this.isEmptyValue(c) || u.push(h.get(c) || { value: c }), u), []), o.value = s.value;
    }
    const a = r.items;
    i.required && !i.multiple && this.isEmptyValue(this.state.value) && Array.isArray(a) && a.length && (r.value = a[0].value), Object.keys(r).length && await this.changeState(r);
  }
  async tryUpdate() {
    y(this, St) && clearTimeout(y(this, St)), $(this, St, window.setTimeout(() => {
      $(this, St, 0), this.update();
    }, 50));
  }
  componentDidUpdate(t, s) {
    super.componentDidUpdate(t, s), this.tryUpdate();
  }
  componentDidMount() {
    super.componentDidMount(), this.tryUpdate();
  }
  componentWillUnmount() {
    var t;
    (t = y(this, gt)) == null || t.abort(), $(this, gt, void 0), $(this, He, void 0), clearTimeout(y(this, St)), super.componentWillUnmount();
  }
  _getTriggerProps(t, s) {
    return {
      ...super._getTriggerProps(t, s),
      multiple: t.multiple,
      placeholder: t.placeholder,
      search: t.search,
      searchHint: t.searchHint,
      disabled: t.disabled,
      clearable: !!this.valueList.length && !t.required,
      valueList: this.valueList,
      emptyValue: this.firstEmptyValue,
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue
    };
  }
  _getPopProps(t, s) {
    return {
      ...super._getPopProps(t, s),
      menu: t.menu,
      multiple: t.multiple,
      search: t.search,
      searchHint: t.searchHint,
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue
    };
  }
  _getTrigger(t) {
    return t.Trigger || (t.multiple ? Fh : zh);
  }
  formatValueList(t) {
    let s = [];
    return typeof t == "string" && t.length ? s = f.unique(t.split(this.props.valueSplitter ?? ",")) : Array.isArray(t) && (s = f.unique(t)), s.filter((i) => !this.isEmptyValue(i));
  }
  formatValue(t) {
    const s = this.formatValueList(t);
    return s.length ? s.join(this.props.valueSplitter ?? ",") : this.firstEmptyValue;
  }
  setValue(t = []) {
    if (this.props.disabled)
      return;
    !Array.isArray(t) && typeof t != "string" && (t = t !== null ? String(t) : this.firstEmptyValue);
    let s = this.formatValueList(t);
    if (!s.length)
      return this.changeState({ value: this.firstEmptyValue });
    const { items: i, limitValueInList: o } = this.props;
    if (o) {
      const a = new Set((Array.isArray(i) ? i : this.state.items).map((l) => String(l.value)));
      s = s.filter((l) => a.has(l));
    }
    const r = this.formatValue(s);
    return this.changeState({ value: r });
  }
}, He = new WeakMap(), gt = new WeakMap(), St = new WeakMap(), Be = new WeakMap(), Ye.defaultProps = {
  ...Lt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
}, Ye.Pop = Vh, Ye);
const hi = class hi extends z {
};
hi.NAME = "Picker", hi.Component = Uh;
let Wr = hi;
const ui = class ui extends Ct {
  init() {
    const { trigger: e } = this.options;
    this.initTarget(), this.initMask(), this.initArrow(), this.createPopper(), this.toggle = () => {
      if (this.$target.hasClass("hidden")) {
        this.show();
        return;
      }
      this.hide();
    }, this.$element.addClass("z-50").on(e, this.toggle);
  }
  destroy() {
    this.cleanup(), this.$element.off(this.options.trigger, this.toggle), this.$target.remove();
  }
  computePositionConfig() {
    const { placement: e, strategy: t } = this.options, s = {
      placement: e,
      strategy: t,
      middleware: []
    }, { flip: i, shift: o, arrow: r, offset: a } = this.options;
    return i && s.middleware.push(Di()), o && s.middleware.push(o === !0 ? ns() : ns(o)), r && s.middleware.push(io({ element: this.$arrow[0] })), a && s.middleware.push(Li(a)), s;
  }
  createPopper() {
    const e = this.element, t = this.$target[0];
    this.cleanup = jo(e, t, () => {
      Hi(e, t, this.computePositionConfig()).then(({ x: s, y: i, placement: o, middlewareData: r }) => {
        if (Object.assign(t.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !io || !r.arrow)
          return;
        const { x: a, y: l } = r.arrow, h = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[o.split("-")[0]];
        Object.assign(this.$arrow[0].style, {
          left: a != null ? `${a}px` : "",
          top: l != null ? `${l}px` : "",
          right: "",
          bottom: "",
          [h]: "-4px"
        });
      });
    });
  }
  initTarget() {
    const e = this.$element.data("target");
    if (!e)
      throw new Error("popsvers trigger must have target.");
    const t = f(e);
    if (!t.length)
      throw new Error("popovers target must exist.");
    const { strategy: s } = this.options;
    t.addClass(s), t.addClass("hidden"), t.addClass("z-50"), t.on("click", (i) => {
      f(i.target).data("dismiss") === "popovers" && this.hide();
    }), this.$target = t;
  }
  show() {
    var e;
    this.$target.removeClass("hidden"), (e = this.$mask) == null || e.removeClass("hidden");
  }
  hide() {
    var e;
    this.$target.addClass("hidden"), (e = this.$mask) == null || e.addClass("hidden");
  }
  initMask() {
    const { mask: e } = this.options;
    if (!e)
      return;
    const t = f('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
    t.on("click", () => {
      this.hide();
    }), this.$target.parent().append(t), this.$mask = t;
  }
  initArrow() {
    const { arrow: e } = this.options;
    e && (this.$arrow = f('<div class="fl-arrow bg-inherit rotate-45 absolute w-2 h-2"></div>'), this.$target.append(this.$arrow));
  }
};
ui.NAME = "Popovers", ui.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1,
  trigger: "click",
  mask: !0
};
let Fr = ui;
var Bs, Ws, jt, di, Fs, zs, js, go, Vs;
let qh = (Vs = class extends H {
  constructor(t) {
    super(t);
    _(this, js);
    _(this, Bs, void 0);
    _(this, Ws, K());
    _(this, jt, 0);
    _(this, di, (t) => {
      const s = this.state.value;
      t.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: o } = this.props;
        o == null || o(t), this.focus(), s.trim() !== "" && (i == null || i("", t));
      });
    });
    _(this, Fs, (t) => {
      const s = this.state.value, i = t.target.value, { onChange: o } = this.props;
      this.setState({ value: i }, () => {
        !o || s === i || (L(this, js, go).call(this), $(this, jt, window.setTimeout(() => {
          o(i, t), $(this, jt, 0);
        }, this.props.delay || 0)));
      });
    });
    _(this, zs, (t) => {
      const s = t.type === "focus";
      this.setState({ focus: s }, () => {
        const i = s ? this.props.onFocus : this.props.onBlur;
        i == null || i(t);
      });
    });
    this.state = { focus: !1, value: t.defaultValue || "" }, $(this, Bs, t.id || `search-box-${f.guid++}`);
  }
  get id() {
    return y(this, Bs);
  }
  get input() {
    return y(this, Ws).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    L(this, js, go).call(this);
  }
  render(t, s) {
    const { style: i, className: o, rootClass: r, rootStyle: a, readonly: l, disabled: h, circle: u, placeholder: c, mergeIcon: p, searchIcon: m, clearIcon: g } = t, { focus: b, value: v } = s, { id: w } = this, C = typeof v != "string" || !v.trim().length;
    let x, T, S;
    return m && (S = m === !0 ? /* @__PURE__ */ d("span", { class: "magnifier" }) : /* @__PURE__ */ d(tt, { icon: m })), !p && m && (x = /* @__PURE__ */ d("label", { for: w, class: "input-control-prefix", children: S }, "prefix")), g && !C ? T = /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: y(this, di),
        children: g === !0 ? /* @__PURE__ */ d("span", { class: "close" }) : /* @__PURE__ */ d(tt, { icon: g })
      }
    ) : p && m && (T = S), T && (T = /* @__PURE__ */ d("label", { for: w, class: "input-control-suffix", children: T }, "suffix")), /* @__PURE__ */ d("div", { class: N("search-box input-control", r, { focus: b, empty: C, "has-prefix-icon": x, "has-suffix-icon": T }), style: a, children: [
      x,
      /* @__PURE__ */ d(
        "input",
        {
          ref: y(this, Ws),
          id: w,
          type: "text",
          class: N("form-control", o, { "rounded-full": u }),
          style: i,
          placeholder: c,
          disabled: h,
          readonly: l,
          value: v,
          onInput: y(this, Fs),
          onChange: y(this, Fs),
          onFocus: y(this, zs),
          onBlur: y(this, zs)
        }
      ),
      T
    ] });
  }
}, Bs = new WeakMap(), Ws = new WeakMap(), jt = new WeakMap(), di = new WeakMap(), Fs = new WeakMap(), zs = new WeakMap(), js = new WeakSet(), go = function() {
  y(this, jt) && clearTimeout(y(this, jt)), $(this, jt, 0);
}, Vs.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
}, Vs);
const fi = class fi extends z {
};
fi.NAME = "SearchBox", fi.Component = qh;
let zr = fi;
const pi = class pi extends z {
};
pi.NAME = "Toolbar", pi.Component = Zt;
let jr = pi;
const Yh = '[data-toggle="tooltip"]', mi = class mi extends _t {
  _getRenderOptions() {
    const { type: e, className: t, title: s } = this.options;
    return {
      ...super._getRenderOptions(),
      className: N("tooltip", e, t, s ? "tooltip-has-title" : ""),
      contentClass: s ? "tooltip-content" : ""
    };
  }
};
mi.NAME = "Tooltip", mi.DEFAULT = {
  ..._t.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
let Tt = mi;
f(document).on(`click${Tt.NAMESPACE} mouseenter${Tt.NAMESPACE}`, Yh, (n) => {
  const e = f(n.currentTarget);
  if (e.length && !e.data(Tt.KEY)) {
    const t = e.data("trigger") || "hover";
    if ((n.type === "mouseover" ? "hover" : "click") !== t)
      return;
    let i = e.attr("title"), o = e.dataset("content");
    i ? e.removeAttr("title").attr("data-origin-title", i) : i = e.dataset("title"), o || (o = i, i = ""), Tt.ensure(e, { show: Tt.DEFAULT.delay || !0, content: o || i, title: o ? i : void 0 }), n.preventDefault();
  }
});
function Kh({
  type: n,
  component: e,
  className: t,
  children: s,
  content: i,
  style: o,
  attrs: r,
  url: a,
  disabled: l,
  active: h,
  icon: u,
  text: c,
  target: p,
  trailingIcon: m,
  hint: g,
  checked: b,
  actions: v,
  show: w,
  level: C = 0,
  items: x,
  ...T
}) {
  const S = Array.isArray(v) ? { items: v } : v;
  return S && (S.btnProps || (S.btnProps = { size: "sm" }), S.className = N("tree-actions not-nested-toggle", S.className)), /* @__PURE__ */ d(
    "div",
    {
      className: N("tree-item-content", t, { disabled: l, active: h }),
      title: g,
      "data-target": p,
      style: Object.assign({ paddingLeft: `calc(${C} * var(--tree-indent, 20px))` }, o),
      "data-level": C,
      ...r,
      ...T,
      children: [
        /* @__PURE__ */ d("span", { class: `tree-toggle-icon${x ? " state" : ""}`, children: x ? /* @__PURE__ */ d("span", { class: `caret-${w ? "down" : "right"}` }) : null }),
        typeof b == "boolean" ? /* @__PURE__ */ d("div", { class: `tree-checkbox checkbox-primary${b ? " checked" : ""}`, children: /* @__PURE__ */ d("label", {}) }) : null,
        /* @__PURE__ */ d(tt, { icon: u, className: "tree-icon" }),
        a ? /* @__PURE__ */ d("a", { className: "text tree-link not-nested-toggle", href: a, children: c }) : /* @__PURE__ */ d("span", { class: "text", children: c }),
        /* @__PURE__ */ d(Je, { content: i }),
        s,
        S ? /* @__PURE__ */ d(Zt, { ...S }) : null,
        /* @__PURE__ */ d(tt, { icon: m, className: "tree-trailing-icon" })
      ]
    }
  );
}
var Ke;
let Gh = (Ke = class extends Bo {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "tree";
  }
  getNestedMenuProps(e) {
    const t = super.getNestedMenuProps(e), { collapsedIcon: s, expandedIcon: i, normalIcon: o, itemActions: r } = this.props;
    return {
      collapsedIcon: s,
      expandedIcon: i,
      normalIcon: o,
      itemActions: r,
      ...t
    };
  }
  getItemRenderProps(e, t, s) {
    const i = super.getItemRenderProps(e, t, s), { collapsedIcon: o, expandedIcon: r, normalIcon: a, itemActions: l } = e;
    return i.icon === void 0 && (i.icon = i.items ? i.show ? r : o : a), i.actions === void 0 && l && (i.actions = typeof l == "function" ? l(t) : l), i;
  }
  renderToggleIcon() {
    return null;
  }
  beforeRender() {
    const e = super.beforeRender(), { hover: t } = this.props;
    return t && (e.className = N(e.className, "tree-hover")), e;
  }
}, Ke.ItemComponents = {
  item: Kh
}, Ke.NAME = "tree", Ke);
const gi = class gi extends z {
};
gi.NAME = "Tree", gi.Component = Gh;
let Vr = gi;
const yi = class yi extends Ct {
  init() {
    const { multiple: e, defaultFileList: t, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? xc(s) : Number.MAX_VALUE, this.currentBytes = 0, e || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), t && this.addFileItem(t);
  }
  initUploadCash() {
    const { name: e, uploadText: t, uploadIcon: s, listPosition: i, btnClass: o, tip: r, draggable: a } = this.options;
    this.$list = f('<ul class="file-list py-1"></ul>');
    const l = f(`<span class="upload-tip">${r}</span>`);
    if (!a) {
      if (this.$label = f(`<label class="btn ${o}" for="${e}">${t}</label>`), s) {
        const p = f(`<i class="icon icon-${s}"></i>`);
        this.$label.prepend(p);
      }
      const c = i === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...c);
      return;
    }
    const h = f(`<span class="text-primary">${t}</span>`);
    if (s) {
      const c = f(`<i class="icon icon-${s} mr-1"></i>`);
      h.prepend(c);
    }
    this.$label = f(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16 border border-dashed border-gray" for="${e}"></label>`).append(h).append(l), this.bindDragEvent();
    const u = i === "bottom" ? [this.$label, this.$list] : [this.$list, this.$label];
    this.$element.append(this.$input, ...u);
  }
  bindDragEvent() {
    this.$label.on("dragover", (e) => {
      e.preventDefault(), console.log("dragover"), this.$label.hasClass("border-primary") || (this.$label.removeClass("border-gray"), this.$label.addClass("border-primary"));
    }).on("dragleave", (e) => {
      e.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray");
    }).on("drop", (e) => {
      var s;
      e.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray");
      const t = Array.from(((s = e.dataTransfer) == null ? void 0 : s.files) ?? []);
      console.log(e.dataTransfer.files), this.addFileItem(t);
    });
  }
  initFileInputCash() {
    const { name: e, multiple: t, accept: s } = this.options;
    this.$input = f("<input />").addClass("hidden").prop("type", "file").prop("name", e).prop("id", e).prop("multiple", t).on("change", (i) => {
      const o = i.target.files;
      if (!o)
        return;
      const r = [...o];
      this.addFileItem(r);
    }), s && this.$input.prop("accept", s);
  }
  addFile(e) {
    const { multiple: t, onSizeChange: s } = this.options;
    t || (this.renameMap.clear(), this.fileMap.clear(), this.dataTransfer.items.clear(), this.currentBytes = e.size), this.renameMap.set(e.name, e.name), this.fileMap.set(e.name, e), this.dataTransfer.items.add(e), this.$input.prop("files", this.dataTransfer.files), this.currentBytes += e.size, s == null || s(this.currentBytes);
  }
  renameDuplicatedFile(e) {
    if (!this.fileMap.has(e.name))
      return e;
    const t = e.name.lastIndexOf(".");
    if (t === -1)
      return this.renameDuplicatedFile(new File([e], `${e.name}(1)`));
    const s = e.name.substring(0, t), i = e.name.substring(t);
    return this.renameDuplicatedFile(new File([e], `${s}(1)${i}`));
  }
  filterFiles(e) {
    const { accept: t } = this.options;
    if (!t)
      return e;
    const s = t.replace(/\s/g, "").split(","), i = [], o = [], r = [];
    return s.forEach((a) => {
      a.endsWith("/*") ? o.push(a.substring(0, a.length - 1)) : a.includes("/") ? i.push(a) : a.startsWith(".") && r.push(a);
    }), e.filter((a) => i.includes(a.type) || o.some((l) => a.type.startsWith(l)) || r.some((l) => a.name.endsWith(l)));
  }
  addFileItem(e) {
    e = this.filterFiles(e);
    const { multiple: t, limitCount: s, exceededSizeHint: i, exceededCountHint: o, onAdd: r } = this.options;
    if (t) {
      const h = [];
      for (let u of e) {
        if (s && this.fileMap.size >= s)
          return r == null || r(h), alert(o);
        if (this.currentBytes + u.size > this.limitBytes)
          return r == null || r(h), alert(i);
        u = this.renameDuplicatedFile(u);
        const c = this.createFileItem(u);
        this.itemMap.set(u.name, c), this.$list.append(c), h.push(u);
      }
      r == null || r(h);
      return;
    }
    if (e[0].size > this.limitBytes)
      return;
    const a = this.renameDuplicatedFile(e[0]), l = this.createFileItem(a);
    this.itemMap.clear(), this.itemMap.set(a.name, l), this.$list.empty().append(l), r == null || r(a);
  }
  deleteFileItem(e) {
    var l;
    const t = this.renameMap.get(e) ?? e;
    this.renameMap.delete(e);
    const s = this.fileMap.get(t);
    if (!s)
      return;
    const { onDelete: i, onSizeChange: o } = this.options, r = this.itemMap.get(s.name);
    this.itemMap.delete(s.name), r == null || r.addClass("hidden");
    const a = (l = r == null ? void 0 : r.find(".file-delete")) == null ? void 0 : l.data("tooltip");
    a && (a.destroy(), a.tooltip.remove()), setTimeout(() => r == null ? void 0 : r.remove(), 3e3), i == null || i(s), this.fileMap.delete(s.name), this.currentBytes -= s.size, o == null || o(this.currentBytes), this.dataTransfer = new DataTransfer(), this.fileMap.forEach((h) => this.dataTransfer.items.add(h)), this.$input.prop("files", this.dataTransfer.files);
  }
  renameFileItem(e, t) {
    var o, r;
    const s = this.renameMap.get(e.name);
    this.renameMap.set(e.name, t), s && (e = this.fileMap.get(s) ?? e);
    const i = this.itemMap.get(e.name);
    i && (this.itemMap.set(t, i).delete(e.name), (r = (o = this.options).onRename) == null || r.call(o, t, e.name), this.fileMap.delete(e.name), this.dataTransfer = new DataTransfer(), e = new File([e], t), this.fileMap.set(t, e).forEach((a) => this.dataTransfer.items.add(a)), this.$input.prop("files", this.dataTransfer.files));
  }
  createFileItem(e) {
    const { showIcon: t } = this.options;
    return this.addFile(e), f('<li class="file-item my-1 flex items-center gap-2"></li>').append(t ? this.fileIcon() : null).append(this.createFileInfo(e)).append(this.createRenameContainer(e));
  }
  fileIcon() {
    const { icon: e } = this.options;
    return f(`<i class="icon icon-${e}"></i>`);
  }
  fileRenameBtn() {
    const { useIconBtn: e, renameText: t, renameIcon: s, renameClass: i } = this.options;
    if (e) {
      const o = f(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).prop("type", "button").addClass("file-action file-rename");
      return new Tt(o, { title: t }), o;
    }
    return f("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(t);
  }
  fileDeleteBtn() {
    const { useIconBtn: e, deleteText: t, deleteIcon: s, deleteClass: i } = this.options;
    if (e) {
      const o = f(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return o.data("tooltip", new Tt(o, { title: t })), o;
    }
    return f("<button />").html(t).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(e) {
    return f(`<span class="file-name">${e}</span>`);
  }
  fileSize(e) {
    return f(`<span class="file-size text-gray">${$c(e)}</span>`);
  }
  createFileInfo(e) {
    const { renameBtn: t, deleteBtn: s, showSize: i } = this.options, o = f('<div class="file-info flex items-center gap-2"></div>');
    return o.append(this.fileName(e.name)), i && o.append(this.fileSize(e.size)), t && o.append(
      this.fileRenameBtn().on("click", (r) => {
        o.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = f(r.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), s && o.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(e.name))
    ), o;
  }
  createRenameContainer(e) {
    const { confirmText: t, cancelText: s, duplicatedHint: i } = this.options, o = f('<div class="input-group input-rename-container hidden"></div>'), r = f("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", e.name).on("keydown", (u) => {
      if (u.key === "Enter") {
        const c = o.closest(".file-item"), p = c.find(".file-name");
        if (p.html() === r.val()) {
          o.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(r.val()))
          return alert(i);
        this.renameFileItem(e, r.val()), o.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden"), p.html(r.val());
      } else
        u.key === "Escape" && (r.val(e.name), o.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden"));
    }), a = f("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(t).on("click", () => {
      const u = o.closest(".file-item"), c = u.find(".file-name");
      if (c.html() === r.val()) {
        o.addClass("hidden"), u.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(r.val()))
        return alert(i);
      this.renameFileItem(e, r.val()), o.addClass("hidden"), u.find(".file-info.hidden").removeClass("hidden"), c.html(r.val());
    }), l = f("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(s).on("click", () => {
      r.val(e.name), o.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), h = f('<div class="btn-group"></div').append(a).append(l);
    return o.append(r).append(h);
  }
};
yi.NAME = "Upload", yi.DEFAULT = {
  uploadText: "上传文件",
  confirmText: "确定",
  cancelText: "取消",
  useIconBtn: !0,
  renameBtn: !0,
  renameText: "重命名",
  renameIcon: "edit",
  renameClass: "",
  deleteBtn: !0,
  deleteText: "删除",
  deleteIcon: "trash",
  deleteClass: "",
  showIcon: !0,
  multiple: !0,
  listPosition: "bottom",
  limitSize: !1,
  icon: "file-o",
  btnClass: "",
  tip: "",
  draggable: !1,
  showSize: !0
};
let yo = yi;
const bi = class bi extends yo {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = f(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(f('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: e, tip: t, uploadText: s, uploadIcon: i, totalCountText: o } = this.options;
    this.$list = f('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = f('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const r = f(`<label for="${e}" class="text-primary cursor-pointer">${s}</label>`);
    if (i) {
      const a = f(`<i class="icon icon-${i} mr-1"></i>`);
      r.prepend(a);
    }
    this.$tip = f('<div class="absolute inset-0 col justify-center items-center"></div>').append(r), t && this.$tip.append(f(`<span class="upload-tip">${t}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = f('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(o.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
  }
  filterFiles(e) {
    const { accept: t } = this.options;
    if (t === "image/*")
      return e.filter((i) => i.type.includes("image"));
    const s = t.replace(/\s/g, "").replace(/\./g, "image/").split(",");
    return e.filter((i) => s.includes(i.type));
  }
  createFileItem(e) {
    const t = super.createFileItem(e).addClass("relative").removeClass("flex items-center gap-2 my-1");
    this.setImageUrl(e, t);
    const { deleteBtn: s, showSize: i } = this.options;
    return s && t.append(
      this.fileDeleteBtn().addClass("absolute right-0 top-0 text-white").css({ background: "var(--color-slate-500)" }).on("click", () => this.deleteFileItem(e.name))
    ), i && t.append(
      this.fileSize(e.size).addClass("file-size label text-white circle darker absolute px-1 hidden").removeClass("text-gray").css({ top: 96, left: 4 })
    ), t;
  }
  setImageUrl(e, t) {
    const s = new FileReader();
    s.onload = () => {
      f('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${s.result})` }).prependTo(t);
    }, s.readAsDataURL(e);
  }
  createFileInfo(e) {
    const t = this.fileRenameBtn().addClass("flex-none").on("click", (i) => {
      const o = f(i.target).closest(".file-item");
      o.find(".file-info").addClass("hidden"), o.find(".input-rename-container").removeClass("hidden");
      const r = o.find("input")[0];
      r.focus(), r.value.lastIndexOf(".") !== -1 && r.setSelectionRange(0, r.value.lastIndexOf("."));
    });
    return f('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(f(`<div class="file-name py-1 ellipsis">${e.name}</div>`)).append(t);
  }
  createRenameContainer(e) {
    const { duplicatedHint: t } = this.options, s = f("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", e.name).css({ width: 120 }).on("keydown", (i) => {
      if (i.key === "Enter") {
        const o = s.closest(".file-item").find(".file-name");
        if (o.html() === s.val()) {
          s.addClass("hidden"), o.closest(".file-info").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(s.val()))
          return alert(t);
        this.renameFileItem(e, s.val()), s.addClass("hidden"), o.html(s.val()).closest(".file-info").removeClass("hidden");
      } else
        i.key === "Escape" && s.val(e.name).addClass("hidden").closest(".file-item").find(".file-name").removeClass("hidden");
    }).on("blur", () => {
      const i = s.closest(".file-item").find(".file-name");
      if (i.html() === s.val()) {
        s.addClass("hidden"), i.closest(".file-info").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(s.val()))
        return alert(t);
      this.renameFileItem(e, s.val()), s.addClass("hidden"), i.html(s.val()).closest(".file-info").removeClass("hidden");
    });
    return s;
  }
};
bi.NAME = "UploadImgs", bi.DEFAULT = {
  uploadText: "添加文件",
  renameBtn: !0,
  renameText: "重命名",
  renameIcon: "edit",
  renameClass: "",
  deleteBtn: !0,
  deleteText: "删除",
  deleteIcon: "trash",
  deleteClass: "",
  showIcon: !1,
  multiple: !0,
  limitSize: !1,
  btnClass: "",
  draggable: !0,
  accept: "image/jpg, image/jpeg, image/gif, image/png",
  showSize: !0,
  useIconBtn: !0,
  totalCountText: '共 <span class="font-bold text-black">%s</span> 个文件 <span class="font-bold text-black">%s</span> 个文件等待上传。'
};
let Ur = bi;
const wi = class wi extends Mt {
  _getLayoutOptions() {
    const e = super._getLayoutOptions();
    return e[0] = {
      getBoundingClientRect: this._getClickBounding
    }, e;
  }
};
wi.NAME = "ContextMenu", wi.DEFAULT = {
  ...Mt.DEFAULT,
  name: "contextmenu",
  trigger: "contextmenu"
};
let bo = wi;
let Xh = class extends H {
  constructor() {
    super(...arguments), this._onDragStart = (e) => {
      var i, o, r;
      const t = e.target.closest(".dashboard-block");
      if (!t)
        return;
      const s = t.getBoundingClientRect();
      if (e.clientY - s.top > 48) {
        e.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (i = e.dataTransfer) == null || i.setData("application/id", this.props.id), (r = (o = this.props).onDragStart) == null || r.call(o, e);
    }, this._onDragEnd = (e) => {
      var t, s;
      this.setState({ dragging: !1 }), (s = (t = this.props).onDragEnd) == null || s.call(t, e);
    };
  }
  render() {
    const { left: e, top: t, id: s, onMenuBtnClick: i, title: o, width: r, height: a, content: l, loading: h } = this.props, { dragging: u } = this.state;
    return /* @__PURE__ */ d("div", { class: "dashboard-block-cell", style: { left: e, top: t, width: r, height: a }, children: /* @__PURE__ */ d(
      "div",
      {
        class: `dashboard-block load-indicator${h && !l ? " loading" : ""}${i ? " has-more-menu" : ""}${u ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: this._onDragStart,
        onDragEnd: this._onDragEnd,
        "data-id": s,
        children: [
          /* @__PURE__ */ d("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ d("div", { class: "dashboard-block-title", children: o }),
            i ? /* @__PURE__ */ d("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ d("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: i, children: /* @__PURE__ */ d("div", { class: "more-vert" }) }) }) : null
          ] }),
          f.isPlainObject(l) && l.html ? /* @__PURE__ */ d(Zs, { class: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ d("div", { class: "dashboard-block-body", children: l })
        ]
      }
    ) });
  }
};
const qr = ([n, e, t, s], [i, o, r, a]) => !(n + t <= i || i + r <= n || e + s <= o || o + a <= e), on = "Dashboard:Block.cache:";
var Us;
let Jh = (Us = class extends H {
  constructor(e) {
    super(e), this.map = /* @__PURE__ */ new Map(), this._handleDragStart = (t) => {
      var i;
      const s = (i = t.dataTransfer) == null ? void 0 : i.getData("application/id");
      s !== void 0 && (this.setState({ dragging: s }), console.log("handleBlockDragStart", t));
    }, this._handleDragEnd = (t) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", t);
    }, this._handleMenuClick = (t) => {
      const s = t.target.closest(".dashboard-block");
      if (!s)
        return;
      const i = s.dataset.id;
      if (!i)
        return;
      const o = this.getBlock(i);
      if (!o || !o.menu)
        return;
      t.stopPropagation();
      const { menu: r } = o, { onClickMenu: a } = this.props;
      bo.show({
        event: t.target,
        placement: "bottom-end",
        menu: {
          onClickItem: (l) => {
            var h;
            ((h = l.item.data) == null ? void 0 : h.type) === "refresh" && this.load(i), a && a.call(this, l, o);
          }
        },
        ...r
      });
    }, this.state = { blocks: this._initBlocks(e.blocks) };
  }
  getBlock(e) {
    return this.state.blocks.find((t) => t.id === e);
  }
  update(e, t) {
    const { id: s } = e, { blocks: i } = this.state, o = i.findIndex((a) => a.id === s);
    if (o < 0)
      return;
    const r = i[o];
    e.fetch && e.fetch !== r.fetch && r.needLoad && (e.needLoad = !1), i[o] = { ...r, ...e }, this.setState({ blocks: i }, t);
  }
  delete(e) {
    const { blocks: t } = this.state, s = t.findIndex((i) => i.id === e);
    s < 0 || (t.splice(s, 1), this.setState({ blocks: t }));
  }
  add(e) {
    e = Array.isArray(e) ? e : [e], this.setState({ blocks: [...this.state.blocks, ...this._initBlocks(e)] });
  }
  load(e, t) {
    const s = this.getBlock(e);
    if (!s || s.loading || (t = t || s.fetch, typeof t == "string" ? t = { url: t } : typeof t == "function" && (t = t(s.id, s)), !t || !t.url))
      return;
    const { url: i, ...o } = t;
    this.update({ id: e, loading: !0, needLoad: !1 }, async () => {
      const r = Y(i, s);
      try {
        const a = await fetch(Y(r, s), {
          headers: { "X-Requested-With": "XMLHttpRequest" },
          ...o
        });
        if (!a.ok)
          throw new Error(`Server response: ${a.status} ${a.statusText}}`);
        const l = await a.text();
        this.update({ id: e, loading: !1, content: { html: l } }, () => {
          this._setCache(e, l);
        });
      } catch (a) {
        const l = /* @__PURE__ */ d("div", { class: "panel center text-danger p-5", children: [
          "Error: ",
          a.message
        ] });
        this.update({ id: e, loading: !1, content: l });
      }
    });
  }
  reset(e) {
    this.setState({ blocks: this._initBlocks(e) });
  }
  loadNext() {
    const { blocks: e } = this.state;
    let t = "";
    for (const s of e) {
      if (s.loading)
        return;
      s.needLoad && (t = s.id);
    }
    t.length && requestAnimationFrame(() => this.load(t));
  }
  _setCache(e, t) {
    const { cache: s } = this.props;
    if (s)
      try {
        typeof s == "string" ? ts.set(`${on}${s}:${e}`, t) : ts.session.set(`${on}${e}`, t);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: e, html: t });
      }
  }
  _getCache(e) {
    const { cache: t } = this.props;
    if (!t)
      return;
    const s = typeof t == "string" ? ts.get(`${on}${t}:${e}`) : ts.session.get(`${on}${e}`);
    if (s)
      return { html: s };
  }
  _initBlocks(e) {
    const { blockFetch: t, blockMenu: s } = this.props;
    return e.map((o) => {
      const {
        id: r,
        size: a,
        left: l = -1,
        top: h = -1,
        fetch: u = t,
        menu: c = s,
        content: p,
        ...m
      } = o, [g, b] = this._getBlockSize(a);
      return {
        id: `${r}`,
        width: g,
        height: b,
        left: l,
        top: h,
        fetch: u,
        menu: c,
        content: p ?? this._getCache(`${r}`),
        loading: !1,
        needLoad: !!u,
        ...m
      };
    });
  }
  _getBlockSize(e) {
    const { blockDefaultSize: t, blockSizeMap: s } = this.props;
    return e = e ?? t, typeof e == "string" && (e = s[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
  }
  _layout() {
    this.map.clear();
    let e = 0;
    const { blocks: t } = this.state;
    return t.forEach((s) => {
      this._layoutBlock(s);
      const [, i, , o] = this.map.get(s.id);
      e = Math.max(e, i + o);
    }), { blocks: t, height: e };
  }
  _layoutBlock(e) {
    const t = this.map, { id: s, left: i, top: o, width: r, height: a } = e;
    if (i < 0 || o < 0) {
      const [l, h] = this._appendBlock(r, a, i, o);
      t.set(s, [l, h, r, a]);
    } else
      this._insertBlock(s, [i, o, r, a]);
  }
  _canPlace(e) {
    const { dragging: t } = this.state;
    for (const [s, i] of this.map.entries())
      if (s !== t && qr(i, e))
        return !1;
    return !0;
  }
  _insertBlock(e, t) {
    this.map.set(e, t);
    for (const [s, i] of this.map.entries())
      s !== e && qr(i, t) && (i[1] = t[1] + t[3], this._insertBlock(s, i));
  }
  _appendBlock(e, t, s, i) {
    if (s >= 0 && i >= 0) {
      if (this._canPlace([s, i, e, t]))
        return [s, i];
      i = -1;
    }
    let o = s < 0 ? 0 : s, r = i < 0 ? 0 : i, a = !1;
    const l = this.props.grid;
    for (; !a; ) {
      if (this._canPlace([o, r, e, t])) {
        a = !0;
        break;
      }
      s < 0 ? (o += 1, o + e > l && (o = 0, r += 1)) : r += 1;
    }
    return [o, r];
  }
  componentDidMount() {
    this.loadNext();
  }
  componentDidUpdate(e) {
    e.blocks !== this.props.blocks ? this.setState({ blocks: this._initBlocks(this.props.blocks) }) : this.loadNext();
  }
  render() {
    const { blocks: e, height: t } = this._layout(), { cellHeight: s, grid: i } = this.props, o = this.map;
    return /* @__PURE__ */ d("div", { class: "dashboard", children: /* @__PURE__ */ d("div", { class: "dashboard-blocks", style: { height: t * s }, children: e.map((r, a) => {
      const { id: l, menu: h, content: u, title: c } = r, [p, m, g, b] = o.get(l) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ d(
        Xh,
        {
          id: l,
          index: a,
          left: `${100 * p / i}%`,
          top: s * m,
          width: `${100 * g / i}%`,
          height: s * b,
          content: u,
          title: c,
          onDragStart: this._handleDragStart,
          onDragEnd: this._handleDragEnd,
          onMenuBtnClick: h ? this._handleMenuClick : void 0
        },
        r.id
      );
    }) }) });
  }
}, Us.defaultProps = {
  responsive: !1,
  cache: !0,
  blocks: [],
  grid: 3,
  gap: 16,
  cellHeight: 64,
  blockDefaultSize: [1, 3],
  blockMenu: { items: [{ text: "Refresh", attrs: { "data-type": "refresh" } }] },
  blockSizeMap: {
    xs: [1, 3],
    sm: [1, 4],
    md: [1, 5],
    lg: [1, 6],
    xl: [1, 8],
    xsWide: [2, 3],
    smWide: [2, 4],
    mdWide: [2, 5],
    lgWide: [2, 6],
    xlWide: [2, 8],
    xsLong: [3, 3],
    smLong: [3, 4],
    mdLong: [3, 5],
    lgLong: [3, 6],
    xlLong: [3, 8]
  }
}, Us);
const vi = class vi extends z {
};
vi.NAME = "Dashboard", vi.Component = Jh;
let Yr = vi;
var Vt, Ut;
class Kr extends H {
  constructor(t) {
    super(t);
    _(this, Vt, void 0);
    _(this, Ut, void 0);
    $(this, Vt, 0), $(this, Ut, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, o = s.target;
      if (!(!o || !i) && (typeof i == "string" && o.closest(i) || typeof i == "object")) {
        const r = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (y(this, Vt) && cancelAnimationFrame(y(this, Vt)), $(this, Vt, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + o * this.props.scrollSize / this.props.clientSize), $(this, Vt, 0);
      })), s.preventDefault());
    }, this._handleMouseUp = () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    }, this._handleMouseDown = (s) => {
      this.state.dragStart || this.setState({ dragStart: { x: s.clientX, y: s.clientY, offset: this.scrollPos } }), s.stopPropagation();
    }, this._handleClick = (s) => {
      const i = s.currentTarget;
      if (!i)
        return;
      const o = i.getBoundingClientRect(), { type: r, clientSize: a, scrollSize: l } = this.props, h = (r === "horz" ? s.clientX - o.left : s.clientY - o.top) - this.barSize / 2;
      this.scroll(h * l / a), s.preventDefault();
    }, this.state = {
      scrollPos: this.props.defaultScrollPos ?? 0,
      dragStart: !1
    };
  }
  get scrollPos() {
    return this.props.scrollPos ?? this.state.scrollPos;
  }
  get controlled() {
    return this.props.scrollPos !== void 0;
  }
  get maxScrollPos() {
    const { scrollSize: t, clientSize: s } = this.props;
    return Math.max(0, t - s);
  }
  get barSize() {
    const { clientSize: t, scrollSize: s, size: i = 12, minBarSize: o = 3 * i } = this.props;
    return Math.max(Math.round(t * t / s), o);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: t } = this.props;
    t && ($(this, Ut, typeof t == "string" ? document : t.current), y(this, Ut).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), y(this, Ut) && y(this, Ut).removeEventListener("wheel", this._handleWheel);
  }
  scroll(t) {
    return t = Math.max(0, Math.min(Math.round(t), this.maxScrollPos)), t === this.scrollPos ? !1 : (this.controlled ? this._afterScroll(t) : this.setState({
      scrollPos: t
    }, this._afterScroll.bind(this, t)), !0);
  }
  scrollOffset(t) {
    return this.scroll(this.scrollPos + t);
  }
  _afterScroll(t) {
    const { onScroll: s } = this.props;
    s && s(t, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: t,
      type: s,
      size: i = 12,
      className: o,
      style: r,
      left: a,
      top: l,
      bottom: h,
      right: u
    } = this.props, { maxScrollPos: c, scrollPos: p } = this, { dragStart: m } = this.state, g = {
      left: a,
      top: l,
      bottom: h,
      right: u,
      ...r
    }, b = {};
    return s === "horz" ? (g.height = i, g.width = t, b.width = this.barSize, b.left = Math.round(Math.min(c, p) * (t - b.width) / c)) : (g.width = i, g.height = t, b.height = this.barSize, b.top = Math.round(Math.min(c, p) * (t - b.height) / c)), /* @__PURE__ */ d(
      "div",
      {
        className: N("scrollbar", o, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": m
        }),
        style: g,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ d(
          "div",
          {
            className: "scrollbar-bar",
            style: b,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
Vt = new WeakMap(), Ut = new WeakMap();
const Sn = /* @__PURE__ */ new Map(), En = [];
function cl(n, e) {
  const { name: t } = n;
  if (!(e != null && e.override) && Sn.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  Sn.set(t, n), e != null && e.buildIn && !En.includes(t) && En.push(t);
}
function Ht(n, e) {
  cl(n, e);
  const t = (s) => {
    if (!s)
      return n;
    const { defaultOptions: i, ...o } = n;
    return {
      ...o,
      defaultOptions: { ...i, ...s }
    };
  };
  return t.plugin = n, t;
}
function hl(n) {
  return Sn.delete(n);
}
function Zh(n) {
  if (typeof n == "string") {
    const e = Sn.get(n);
    return e || console.warn(`DTable: Cannot found plugin "${n}"`), e;
  }
  if (typeof n == "function" && "plugin" in n)
    return n.plugin;
  if (typeof n == "object")
    return n;
  console.warn("DTable: Invalid plugin", n);
}
function ul(n, e, t) {
  return e.forEach((s) => {
    var o;
    if (!s)
      return;
    const i = Zh(s);
    i && (t.has(i.name) || ((o = i.plugins) != null && o.length && ul(n, i.plugins, t), n.push(i), t.add(i.name)));
  }), n;
}
function Qh(n = [], e = !0) {
  return e && En.length && n.unshift(...En), n != null && n.length ? ul([], n, /* @__PURE__ */ new Set()) : [];
}
function Gr() {
  return {
    cols: [],
    data: [],
    rowKey: "id",
    width: "100%",
    height: "auto",
    rowHeight: 35,
    defaultColWidth: 80,
    minColWidth: 20,
    maxColWidth: 9999,
    header: !0,
    footer: void 0,
    headerHeight: 0,
    footerHeight: 0,
    rowHover: !0,
    colHover: !1,
    cellHover: !1,
    bordered: !1,
    striped: !0,
    responsive: !1,
    scrollbarHover: !0,
    horzScrollbarPos: "outside"
  };
}
function tu(n, e, t) {
  return n && (e && (n = Math.max(e, n)), t && (n = Math.min(t, n))), n;
}
function Xr(n, e) {
  return typeof n == "string" && (n = n.endsWith("%") ? parseFloat(n) / 100 : parseFloat(n)), typeof e == "number" && (typeof n != "number" || isNaN(n)) && (n = e), n;
}
function Yi(n, e = !1) {
  if (!n.list.length)
    return;
  if (n.widthSetting && n.width !== n.widthSetting) {
    n.width = n.widthSetting;
    const s = n.width - n.totalWidth;
    if (!e && s > 0 || e && s !== 0) {
      const i = n.flexList.length ? n.flexList : n.list, o = i.reduce((r, a) => r + (a.flex || 1), 0);
      i.forEach((r) => {
        const a = Math[s < 0 ? "max" : "min"](s, Math.ceil(s * ((r.flex || 1) / o)));
        r.realWidth = r.width + a;
      });
    }
  }
  let t = 0;
  n.list.forEach((s) => {
    s.realWidth || (s.realWidth = s.width), s.left = t, t += s.realWidth;
  });
}
function eu(n, e, t, s) {
  const { defaultColWidth: i, minColWidth: o, maxColWidth: r, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = e, h = (C) => (typeof C == "function" && (C = C.call(n)), C = Xr(C, 0), C < 1 && (C = Math.round(C * s)), C), u = {
    width: 0,
    list: [],
    flexList: [],
    widthSetting: 0,
    totalWidth: 0
  }, c = {
    ...u,
    list: [],
    flexList: [],
    widthSetting: h(a)
  }, p = {
    ...u,
    list: [],
    flexList: [],
    widthSetting: h(l)
  }, m = [], g = {};
  let b = !1;
  const v = [], w = {};
  if (t.forEach((C) => {
    const { colTypes: x, onAddCol: T } = C;
    x && Object.entries(x).forEach(([S, M]) => {
      w[S] || (w[S] = []), w[S].push(M);
    }), T && v.push(T);
  }), e.cols.forEach((C) => {
    if (C.hidden)
      return;
    const { type: x = "", name: T } = C, S = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: o,
      maxWidth: r,
      ...C,
      type: x
    }, M = {
      name: T,
      type: x,
      setting: S,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: m.length
    }, I = w[x];
    I && I.forEach((O) => {
      const F = typeof O == "function" ? O.call(n, S) : O;
      F && Object.assign(S, F, C);
    });
    const { fixed: A, flex: D, minWidth: B = o, maxWidth: P = r } = S, R = Xr(S.width || i, i);
    M.flex = D === !0 ? 1 : typeof D == "number" ? D : 0, M.width = tu(R < 1 ? Math.round(R * s) : R, B, P), v.forEach((O) => O.call(n, M)), m.push(M), g[M.name] = M;
    const E = A ? A === "left" ? c : p : u;
    E.list.push(M), E.totalWidth += M.width, E.width = E.totalWidth, M.flex && E.flexList.push(M), typeof S.order == "number" && (b = !0);
  }), b) {
    const C = (x, T) => (x.setting.order ?? 0) - (T.setting.order ?? 0);
    m.sort(C), c.list.sort(C), u.list.sort(C), p.list.sort(C);
  }
  return Yi(c, !0), Yi(p, !0), u.widthSetting = s - c.width - p.width, Yi(u), {
    list: m,
    map: g,
    left: c,
    center: u,
    right: p
  };
}
function su({ col: n, className: e, height: t, row: s, onRenderCell: i, style: o, outerStyle: r, children: a, outerClass: l, width: h, left: u, top: c, ...p }) {
  var R;
  const m = {
    left: u ?? n.left,
    top: c ?? s.top,
    width: h ?? n.realWidth,
    height: t,
    ...r
  }, { align: g, border: b } = n.setting, v = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...n.setting.cellStyle,
    ...o
  }, w = ["dtable-cell", l, e, n.setting.className, {
    "has-border-left": b === !0 || b === "left",
    "has-border-right": b === !0 || b === "right"
  }], C = ["dtable-cell-content", n.setting.cellClass], x = (R = s.data) == null ? void 0 : R[n.name], T = [a ?? x ?? ""], S = i ? i(T, { row: s, col: n, value: x }, U) : T, M = [], I = [], A = {}, D = {};
  let B = "div";
  S == null || S.forEach((E) => {
    if (typeof E == "object" && E && !X(E) && ("html" in E || "className" in E || "style" in E || "attrs" in E || "children" in E || "tagName" in E)) {
      const O = E.outer ? M : I;
      E.html ? O.push(/* @__PURE__ */ d("div", { className: N("dtable-cell-html", E.className), style: E.style, dangerouslySetInnerHTML: { __html: E.html }, ...E.attrs ?? {} })) : (E.style && Object.assign(E.outer ? m : v, E.style), E.className && (E.outer ? w : C).push(E.className), E.children && O.push(E.children), E.attrs && Object.assign(E.outer ? A : D, E.attrs)), E.tagName && !E.outer && (B = E.tagName);
    } else
      I.push(E);
  });
  const P = B;
  return /* @__PURE__ */ d(
    "div",
    {
      className: N(w),
      style: m,
      "data-col": n.name,
      "data-row": s.id,
      "data-type": n.type || null,
      ...p,
      ...A,
      children: [
        I.length > 0 && /* @__PURE__ */ d(P, { className: N(C), style: v, ...D, children: I }),
        M
      ]
    }
  );
}
function Ki({
  rows: n = [],
  cols: e,
  rowHeight: t,
  scrollLeft: s = 0,
  scrollTop: i = 0,
  left: o = 0,
  top: r = 0,
  width: a,
  height: l = "100%",
  className: h,
  CellComponent: u = su,
  onRenderCell: c
}) {
  var b;
  const p = Array.isArray(n) ? n : [n], m = ((b = p[0]) == null ? void 0 : b.top) ?? 0, g = p.length;
  return /* @__PURE__ */ d(
    "div",
    {
      className: N("dtable-cells", h),
      style: { top: r, left: o, width: a, height: l },
      children: /* @__PURE__ */ d("div", { className: "dtable-cells-container", style: { left: -s, top: -i + m }, children: p.reduce((v, w, C) => {
        const x = e.length;
        return e.forEach((T, S) => {
          v.push(
            /* @__PURE__ */ d(
              u,
              {
                className: N(
                  `is-${w.index % 2 ? "odd" : "even"}-row`,
                  S ? "" : "is-first-in-row",
                  S === x - 1 ? "is-last-in-row" : "",
                  C ? "" : "is-first-row",
                  C === g - 1 ? "is-last-row" : ""
                ),
                col: T,
                row: w,
                top: w.top - m,
                height: t,
                onRenderCell: c
              },
              `${w.index}:${T.name}`
            )
          );
        }), v;
      }, []) })
    }
  );
}
function Jr({
  top: n,
  height: e,
  rowHeight: t,
  rows: s,
  cols: { left: i, center: o, right: r },
  scrollLeft: a,
  scrollTop: l,
  className: h,
  style: u,
  onRenderCell: c
}) {
  let p = null;
  i.list.length && (p = /* @__PURE__ */ d(
    Ki,
    {
      className: "dtable-fixed-left",
      rows: s,
      scrollTop: l,
      cols: i.list,
      width: i.width,
      rowHeight: t,
      onRenderCell: c
    },
    "left"
  ));
  let m = null;
  o.list.length && (m = /* @__PURE__ */ d(
    Ki,
    {
      rows: s,
      className: "dtable-scroll-center",
      scrollLeft: a,
      scrollTop: l,
      cols: o.list,
      left: i.width,
      width: o.width,
      rowHeight: t,
      onRenderCell: c
    },
    "center"
  ));
  let g = null;
  return r.list.length && (g = /* @__PURE__ */ d(
    Ki,
    {
      className: "dtable-fixed-right",
      rows: s,
      scrollTop: l,
      cols: r.list,
      left: i.width + o.width,
      width: r.width,
      rowHeight: t,
      onRenderCell: c
    },
    "right"
  )), /* @__PURE__ */ d(
    "div",
    {
      className: N("dtable-block", h),
      style: { ...u, top: n, height: e },
      children: [
        p,
        m,
        g
      ]
    }
  );
}
var qt, We, Et, yt, Yt, Z, bt, rt, ae, qs, Fe, le, wt, ce, he, _i, dl, Ci, fl, $i, pl, xi, ml, Ys, wo, ze, je, Ks, Gs, Xs, Js, Ve, cn, ki, gl, Si, yl, Ei, bl, Ge;
let nu = (Ge = class extends H {
  constructor(t) {
    super(t);
    _(this, _i);
    _(this, Ci);
    _(this, $i);
    _(this, xi);
    _(this, Ys);
    _(this, Ve);
    _(this, ki);
    _(this, Si);
    _(this, Ei);
    _(this, qt, void 0);
    _(this, We, void 0);
    _(this, Et, void 0);
    _(this, yt, void 0);
    _(this, Yt, void 0);
    _(this, Z, void 0);
    _(this, bt, void 0);
    _(this, rt, void 0);
    _(this, ae, void 0);
    _(this, qs, void 0);
    _(this, Fe, void 0);
    _(this, le, void 0);
    _(this, wt, void 0);
    _(this, ce, void 0);
    _(this, he, void 0);
    _(this, ze, void 0);
    _(this, je, void 0);
    _(this, Ks, void 0);
    _(this, Gs, void 0);
    _(this, Xs, void 0);
    _(this, Js, void 0);
    this.ref = K(), $(this, qt, 0), $(this, Et, !1), $(this, Z, []), $(this, rt, /* @__PURE__ */ new Map()), $(this, ae, {}), $(this, Fe, []), $(this, le, { in: !1 }), this.updateLayout = () => {
      y(this, qt) && cancelAnimationFrame(y(this, qt)), $(this, qt, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), $(this, qt, 0);
      }));
    }, $(this, wt, (s, i) => {
      i = i || s.type;
      const o = y(this, rt).get(i);
      if (o != null && o.length) {
        for (const r of o)
          if (r.call(this, s) === !1) {
            s.stopPropagation(), s.preventDefault();
            break;
          }
      }
    }), $(this, ce, (s) => {
      y(this, wt).call(this, s, `window_${s.type}`);
    }), $(this, he, (s) => {
      y(this, wt).call(this, s, `document_${s.type}`);
    }), $(this, ze, (s, i, o) => {
      const { row: r, col: a } = i;
      i.value = this.getCellValue(r, a), s[0] = i.value;
      const l = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return y(this, Z).forEach((h) => {
        h[l] && (s = h[l].call(this, s, i, o));
      }), this.options[l] && (s = this.options[l].call(this, s, i, o)), a.setting[l] && (s = a.setting[l].call(this, s, i, o)), s;
    }), $(this, je, (s, i) => {
      i === "horz" ? this.scroll({ scrollLeft: s }) : this.scroll({ scrollTop: s });
    }), $(this, Ks, (s) => {
      var l, h, u;
      const i = this.getPointerInfo(s);
      if (!i)
        return;
      const { rowID: o, colName: r, cellElement: a } = i;
      if (o === "HEADER")
        a && ((l = this.options.onHeaderCellClick) == null || l.call(this, s, { colName: r, element: a }), y(this, Z).forEach((c) => {
          var p;
          (p = c.onHeaderCellClick) == null || p.call(this, s, { colName: r, element: a });
        }));
      else {
        const c = this.layout.visibleRows.find((p) => p.id === o);
        if (a) {
          if (((h = this.options.onCellClick) == null ? void 0 : h.call(this, s, { colName: r, rowID: o, rowInfo: c, element: a })) === !0)
            return;
          for (const p of y(this, Z))
            if (((u = p.onCellClick) == null ? void 0 : u.call(this, s, { colName: r, rowID: o, rowInfo: c, element: a })) === !0)
              return;
        }
      }
    }), $(this, Gs, (s) => {
      const i = s.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(i))
        return !this.scroll({ to: i.replace("page", "") });
    }), $(this, Xs, (s) => {
      const i = f(s.target).closest(".dtable-cell");
      if (!i.length)
        return L(this, Ve, cn).call(this, !1);
      L(this, Ve, cn).call(this, [i.attr("data-row"), i.attr("data-col")]);
    }), $(this, Js, () => {
      L(this, Ve, cn).call(this, !1);
    }), $(this, We, t.id ?? `dtable-${Qa(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, $(this, Yt, Object.freeze(Qh(t.plugins))), y(this, Yt).forEach((s) => {
      var a;
      const { methods: i, data: o, state: r } = s;
      i && Object.entries(i).forEach(([l, h]) => {
        typeof h == "function" && Object.assign(this, { [l]: h.bind(this) });
      }), o && Object.assign(y(this, ae), o.call(this)), r && Object.assign(this.state, r.call(this)), (a = s.onCreate) == null || a.call(this, s);
    });
  }
  get options() {
    var t;
    return ((t = y(this, bt)) == null ? void 0 : t.options) || y(this, yt) || Gr();
  }
  get plugins() {
    return y(this, Z);
  }
  get layout() {
    return y(this, bt);
  }
  get id() {
    return y(this, We);
  }
  get data() {
    return y(this, ae);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return y(this, le);
  }
  componentWillReceiveProps() {
    $(this, yt, void 0);
  }
  componentDidMount() {
    y(this, Et) ? this.forceUpdate() : L(this, Ys, wo).call(this), y(this, Z).forEach((s) => {
      let { events: i } = s;
      i && (typeof i == "function" && (i = i.call(this)), Object.entries(i).forEach(([o, r]) => {
        r && this.on(o, r);
      }));
    }), this.on("click", y(this, Ks)), this.on("keydown", y(this, Gs));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", y(this, Xs)), this.on("mouseleave", y(this, Js))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: s } = this;
        if (s) {
          const i = new ResizeObserver(this.updateLayout);
          i.observe(s), $(this, qs, i);
        }
      } else
        this.on("window_resize", this.updateLayout);
    y(this, Z).forEach((s) => {
      var i;
      (i = s.onMounted) == null || i.call(this);
    });
  }
  componentDidUpdate() {
    y(this, Et) ? L(this, Ys, wo).call(this) : y(this, Z).forEach((t) => {
      var s;
      (s = t.onUpdated) == null || s.call(this);
    });
  }
  componentWillUnmount() {
    var s;
    (s = y(this, qs)) == null || s.disconnect();
    const { element: t } = this;
    if (t)
      for (const i of y(this, rt).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), y(this, ce)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), y(this, he)) : t.removeEventListener(i, y(this, wt));
    y(this, Z).forEach((i) => {
      var o;
      (o = i.onUnmounted) == null || o.call(this);
    }), y(this, Yt).forEach((i) => {
      var o;
      (o = i.onDestory) == null || o.call(this);
    }), $(this, ae, {}), y(this, rt).clear();
  }
  on(t, s, i) {
    var r;
    i && (t = `${i}_${t}`);
    const o = y(this, rt).get(t);
    o ? o.push(s) : (y(this, rt).set(t, [s]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), y(this, ce)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), y(this, he)) : (r = this.element) == null || r.addEventListener(t, y(this, wt)));
  }
  off(t, s, i) {
    var a;
    i && (t = `${i}_${t}`);
    const o = y(this, rt).get(t);
    if (!o)
      return;
    const r = o.indexOf(s);
    r >= 0 && o.splice(r, 1), o.length || (y(this, rt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), y(this, ce)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), y(this, he)) : (a = this.element) == null || a.removeEventListener(t, y(this, wt)));
  }
  emitCustomEvent(t, s) {
    y(this, wt).call(this, s instanceof Event ? s : new CustomEvent(t, { detail: s }), t);
  }
  scroll(t, s) {
    const { scrollLeft: i, scrollTop: o, rowsHeightTotal: r, rowsHeight: a, rowHeight: l, cols: { center: { totalWidth: h, width: u } } } = this.layout, { to: c } = t;
    let { scrollLeft: p, scrollTop: m } = t;
    if (c === "up" || c === "down")
      m = o + (c === "down" ? 1 : -1) * Math.floor(a / l) * l;
    else if (c === "left" || c === "right")
      p = i + (c === "right" ? 1 : -1) * u;
    else if (c === "top")
      m = 0;
    else if (c === "bottom")
      m = r - a;
    else if (c === "begin")
      p = 0;
    else if (c === "end")
      p = h - u;
    else {
      const { offsetLeft: b, offsetTop: v } = t;
      typeof b == "number" && (p = i + b), typeof v == "number" && (p = o + v);
    }
    const g = {};
    return typeof p == "number" && (p = Math.max(0, Math.min(p, h - u)), p !== i && (g.scrollLeft = p)), typeof m == "number" && (m = Math.max(0, Math.min(m, r - a)), m !== o && (g.scrollTop = m)), Object.keys(g).length ? (this.setState(g, () => {
      var b;
      (b = this.options.onScroll) == null || b.call(this, g), s == null || s.call(this, !0);
    }), !0) : (s == null || s.call(this, !1), !1);
  }
  getColInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    const { cols: s } = this.layout;
    return typeof t == "number" ? s.list[t] : s.map[t];
  }
  getRowInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    if (t === -1 || t === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: s, rowsMap: i, allRows: o } = this.layout;
    return typeof t == "number" ? s[t] : i[t] || o.find((r) => r.id === t);
  }
  getCellValue(t, s) {
    var l;
    const i = typeof t == "object" ? t : this.getRowInfo(t);
    if (!i)
      return;
    const o = typeof s == "object" ? s : this.getColInfo(s);
    if (!o)
      return;
    let r = i.id === "HEADER" ? o.setting.title : (l = i.data) == null ? void 0 : l[o.name];
    const { cellValueGetter: a } = this.options;
    return a && (r = a.call(this, i, o, r)), r;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, s) {
    if (!y(this, yt))
      return;
    typeof t == "function" && (s = t, t = {});
    const { dirtyType: i, state: o } = t;
    if (i === "layout")
      $(this, bt, void 0);
    else if (i === "options") {
      if ($(this, yt, void 0), !y(this, bt))
        return;
      $(this, bt, void 0);
    }
    this.setState(o ?? ((r) => ({ renderCount: r.renderCount + 1 })), s);
  }
  getPointerInfo(t) {
    const s = t.target;
    if (!s || s.closest(".no-cell-event"))
      return;
    const i = f(s).closest(".dtable-cell");
    if (!i.length)
      return;
    const o = i.attr("data-row"), r = i.attr("data-col");
    if (!(typeof r != "string" || typeof o != "string"))
      return {
        cellElement: i[0],
        colName: r,
        rowID: o,
        target: s
      };
  }
  i18n(t, s, i) {
    return J(y(this, Fe), t, s, i, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((s) => s.name === t);
  }
  render() {
    const t = L(this, Ei, bl).call(this), { className: s, rowHover: i, colHover: o, cellHover: r, bordered: a, striped: l, scrollbarHover: h } = this.options, u = {}, c = ["dtable", s, {
      "dtable-hover-row": i,
      "dtable-hover-col": o,
      "dtable-hover-cell": r,
      "dtable-bordered": a,
      "dtable-striped": l,
      "scrollbar-hover": h
    }], p = [];
    return t && (u.width = t.width, u.height = t.height, c.push({
      "dtable-scrolled-down": t.scrollTop > 0,
      "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
      "dtable-scrolled-right": t.scrollLeft > 0,
      "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
    }), p.push(
      L(this, _i, dl).call(this, t),
      L(this, Ci, fl).call(this, t),
      L(this, $i, pl).call(this, t),
      L(this, xi, ml).call(this, t)
    ), y(this, Z).forEach((m) => {
      var b;
      const g = (b = m.onRender) == null ? void 0 : b.call(this, t);
      g && (g.style && Object.assign(u, g.style), g.className && c.push(g.className), g.children && p.push(g.children));
    })), /* @__PURE__ */ d(
      "div",
      {
        id: y(this, We),
        className: N(c),
        style: u,
        ref: this.ref,
        tabIndex: -1,
        children: p
      }
    );
  }
}, qt = new WeakMap(), We = new WeakMap(), Et = new WeakMap(), yt = new WeakMap(), Yt = new WeakMap(), Z = new WeakMap(), bt = new WeakMap(), rt = new WeakMap(), ae = new WeakMap(), qs = new WeakMap(), Fe = new WeakMap(), le = new WeakMap(), wt = new WeakMap(), ce = new WeakMap(), he = new WeakMap(), _i = new WeakSet(), dl = function(t) {
  const { header: s, cols: i, headerHeight: o, scrollLeft: r } = t;
  if (!s)
    return null;
  if (s === !0)
    return /* @__PURE__ */ d(
      Jr,
      {
        className: "dtable-header",
        cols: i,
        height: o,
        scrollLeft: r,
        rowHeight: o,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: y(this, ze)
      },
      "header"
    );
  const a = Array.isArray(s) ? s : [s];
  return /* @__PURE__ */ d(
    to,
    {
      className: "dtable-header",
      style: { height: o },
      renders: a,
      generateArgs: [t],
      generatorThis: this
    },
    "header"
  );
}, Ci = new WeakSet(), fl = function(t) {
  const { headerHeight: s, rowsHeight: i, visibleRows: o, rowHeight: r, cols: a, scrollLeft: l, scrollTop: h } = t;
  return /* @__PURE__ */ d(
    Jr,
    {
      className: "dtable-body",
      top: s,
      height: i,
      rows: o,
      rowHeight: r,
      scrollLeft: l,
      scrollTop: h,
      cols: a,
      onRenderCell: y(this, ze)
    },
    "body"
  );
}, $i = new WeakSet(), pl = function(t) {
  let { footer: s } = t;
  if (typeof s == "function" && (s = s.call(this, t)), !s)
    return null;
  const i = Array.isArray(s) ? s : [s];
  return /* @__PURE__ */ d(
    to,
    {
      className: "dtable-footer",
      style: { height: t.footerHeight, top: t.rowsHeight + t.headerHeight },
      renders: i,
      generateArgs: [t],
      generatorThis: this,
      generators: t.footerGenerators
    },
    "footer"
  );
}, xi = new WeakSet(), ml = function(t) {
  const s = [], { scrollLeft: i, cols: { left: { width: o }, center: { width: r, totalWidth: a } }, scrollTop: l, rowsHeight: h, rowsHeightTotal: u, footerHeight: c, headerHeight: p } = t, { scrollbarSize: m = 12, horzScrollbarPos: g } = this.options;
  return a > r && s.push(
    /* @__PURE__ */ d(
      Kr,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: a,
        clientSize: r,
        onScroll: y(this, je),
        left: o,
        bottom: (g === "inside" ? 0 : -m) + c,
        size: m,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ d("div", { className: "dtable-scroll-shadow is-left", style: { left: o, height: p + h } }),
    /* @__PURE__ */ d("div", { className: "dtable-scroll-shadow is-right", style: { left: o + r, height: p + h } })
  ), u > h && s.push(
    /* @__PURE__ */ d(
      Kr,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: u,
        clientSize: h,
        onScroll: y(this, je),
        right: 0,
        size: m,
        top: p,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), s.length ? s : null;
}, Ys = new WeakSet(), wo = function() {
  var t;
  $(this, Et, !1), (t = this.options.afterRender) == null || t.call(this), y(this, Z).forEach((s) => {
    var i;
    return (i = s.afterRender) == null ? void 0 : i.call(this);
  });
}, ze = new WeakMap(), je = new WeakMap(), Ks = new WeakMap(), Gs = new WeakMap(), Xs = new WeakMap(), Js = new WeakMap(), Ve = new WeakSet(), cn = function(t) {
  const { element: s, options: i } = this;
  if (!s)
    return;
  const o = f(s), r = t ? { in: !0, row: t[0], col: t[1] } : { in: !1 };
  i.colHover === "header" && r.row !== "HEADER" && (r.col = void 0);
  const a = y(this, le);
  r.in !== a.in && o.toggleClass("dtable-hover", r.in), r.row !== a.row && (o.find(".is-hover-row").removeClass("is-hover-row"), r.row && o.find(`.dtable-cell[data-row="${r.row}"]`).addClass("is-hover-row")), r.col !== a.col && (o.find(".is-hover-col").removeClass("is-hover-col"), r.col && o.find(`.dtable-cell[data-col="${r.col}"]`).addClass("is-hover-col")), $(this, le, r);
}, ki = new WeakSet(), gl = function() {
  if (y(this, yt))
    return !1;
  const s = { ...Gr(), ...y(this, Yt).reduce((i, o) => {
    const { defaultOptions: r } = o;
    return r && Object.assign(i, r), i;
  }, {}), ...this.props };
  return $(this, yt, s), $(this, Z, y(this, Yt).reduce((i, o) => {
    const { when: r, options: a } = o;
    let l = s;
    return a && (l = Object.assign({ ...l }, typeof a == "function" ? a.call(this, s) : a)), (!r || r(l)) && (l !== s && Object.assign(s, l), i.push(o)), i;
  }, [])), $(this, Fe, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Si = new WeakSet(), yl = function() {
  var B, P;
  const { plugins: t } = this;
  let s = y(this, yt);
  const i = {
    flex: /* @__PURE__ */ d("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ d("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  t.forEach((R) => {
    var O;
    const E = (O = R.beforeLayout) == null ? void 0 : O.call(this, s);
    E && (s = { ...s, ...E }), Object.assign(i, R.footer);
  });
  let o = s.width, r = 0;
  if (typeof o == "function" && (o = o.call(this)), o === "100%") {
    const { parent: R } = this;
    if (R)
      r = R.clientWidth;
    else {
      $(this, Et, !0);
      return;
    }
  }
  const a = eu(this, s, t, r), { data: l, rowKey: h = "id", rowHeight: u } = s, c = [], p = (R, E, O) => {
    var j, ot;
    const F = { data: O ?? { [h]: R }, id: R, index: c.length, top: 0 };
    if (O || (F.lazy = !0), c.push(F), ((j = s.onAddRow) == null ? void 0 : j.call(this, F, E)) !== !1) {
      for (const Ze of t)
        if (((ot = Ze.onAddRow) == null ? void 0 : ot.call(this, F, E)) === !1)
          return;
    }
  };
  if (typeof l == "number")
    for (let R = 0; R < l; R++)
      p(`${R}`, R);
  else
    Array.isArray(l) && l.forEach((R, E) => {
      typeof R == "object" ? p(`${R[h] ?? ""}`, E, R) : p(`${R ?? ""}`, E);
    });
  let m = c;
  const g = {};
  if (s.onAddRows) {
    const R = s.onAddRows.call(this, m);
    R && (m = R);
  }
  for (const R of t) {
    const E = (B = R.onAddRows) == null ? void 0 : B.call(this, m);
    E && (m = E);
  }
  m.forEach((R, E) => {
    g[R.id] = R, R.index = E, R.top = R.index * u;
  });
  const { header: b, footer: v } = s, w = b ? s.headerHeight || u : 0, C = v ? s.footerHeight || u : 0;
  let x = s.height, T = 0;
  const S = m.length * u, M = w + C + S;
  if (typeof x == "function" && (x = x.call(this, M)), x === "auto")
    T = M;
  else if (typeof x == "object")
    T = Math.min(x.max, Math.max(x.min, M));
  else if (x === "100%") {
    const { parent: R } = this;
    if (R)
      T = R.clientHeight;
    else {
      T = 0, $(this, Et, !0);
      return;
    }
  } else
    T = x;
  const I = T - w - C, A = {
    options: s,
    allRows: c,
    width: r,
    height: T,
    rows: m,
    rowsMap: g,
    rowHeight: u,
    rowsHeight: I,
    rowsHeightTotal: S,
    header: b,
    footer: v,
    footerGenerators: i,
    headerHeight: w,
    footerHeight: C,
    cols: a
  }, D = (P = s.onLayout) == null ? void 0 : P.call(this, A);
  D && Object.assign(A, D), t.forEach((R) => {
    if (R.onLayout) {
      const E = R.onLayout.call(this, A);
      E && Object.assign(A, E);
    }
  }), $(this, bt, A);
}, Ei = new WeakSet(), bl = function() {
  (L(this, ki, gl).call(this) || !y(this, bt)) && L(this, Si, yl).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  const { cols: { center: s } } = t;
  let { scrollLeft: i } = this.state;
  i = Math.min(Math.max(0, s.totalWidth - s.width), i);
  let o = 0;
  s.list.forEach((v) => {
    v.left = o, o += v.realWidth, v.visible = v.left + v.realWidth >= i && v.left <= i + s.width;
  });
  const { rowsHeightTotal: r, rowsHeight: a, rows: l, rowHeight: h } = t, u = Math.min(Math.max(0, r - a), this.state.scrollTop), c = Math.floor(u / h), p = u + a, m = Math.min(l.length, Math.ceil(p / h)), g = [], { rowDataGetter: b } = this.options;
  for (let v = c; v < m; v++) {
    const w = l[v];
    w.lazy && b && (w.data = b([w.id])[0], w.lazy = !1), g.push(w);
  }
  return t.visibleRows = g, t.scrollTop = u, t.scrollLeft = i, t;
}, Ge.addPlugin = cl, Ge.removePlugin = hl, Ge);
const iu = {
  html: { component: Zs }
}, ou = {
  name: "custom",
  onRenderCell(n, e) {
    const { col: t } = e;
    let { custom: s } = t.setting;
    if (typeof s == "function" && (s = s.call(this, e)), !s)
      return n;
    const i = Array.isArray(s) ? s : [s], { customMap: o } = this.options;
    return i.forEach((r) => {
      let a;
      typeof r == "string" ? a = r.startsWith("<") ? {
        component: Zs,
        props: { html: Y(r, { value: e.value, ...e.row.data, $value: e.value }) }
      } : {
        component: r
      } : a = r;
      let { component: l } = a;
      const h = [a];
      typeof l == "string" && h.unshift(iu[l], o == null ? void 0 : o[l]);
      const u = {};
      h.forEach((p) => {
        if (p) {
          const { props: m } = p;
          m && f.extend(u, typeof m == "function" ? m.call(this, e) : m), l = p.component || l;
        }
      }, { props: {} });
      const c = l;
      n[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ d(c, { ...u }) };
    }), n;
  }
}, ru = Ht(ou);
function wl(n, e, t, s) {
  if (typeof n == "function" && (n = n(e)), typeof n == "string" && n.length && (n = { url: n }), !n)
    return t;
  const { url: i, ...o } = n, { setting: r } = e.col, a = {};
  return r && Object.keys(r).forEach((l) => {
    l.startsWith("data-") && (a[l] = r[l]);
  }), /* @__PURE__ */ d("a", { href: Y(i, e.row.data), ...s, ...o, ...a, children: t });
}
function Uo(n, e, t) {
  var s;
  if (n != null)
    return t = t ?? ((s = e.row.data) == null ? void 0 : s[e.col.name]), typeof n == "function" ? n(t, e) : Y(n, t);
}
function vl(n, e, t, s) {
  var i;
  return t ? (t = t ?? ((i = e.row.data) == null ? void 0 : i[e.col.name]), n === !1 ? t : (n === !0 && (n = "[yyyy-]MM-dd hh:mm"), typeof n == "function" && (n = n(t, e)), lt(t, n, s ?? t))) : s ?? t;
}
function _l(n, e) {
  const { link: t } = e.col.setting, s = wl(t, e, n[0]);
  return s && (n[0] = s), n;
}
function Cl(n, e) {
  const { format: t } = e.col.setting;
  return t && (n[0] = Uo(t, e, n[0])), n;
}
function $l(n, e) {
  const { map: t } = e.col.setting;
  return typeof t == "function" ? n[0] = t(n[0], e) : typeof t == "object" && t && (n[0] = t[n[0]] ?? n[0]), n;
}
function xl(n, e, t = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = t, invalidDate: i } = e.col.setting;
  return n[0] = vl(s, e, n[0], i), n;
}
function vo(n, e, t = !1) {
  const { html: s = t } = e.col.setting;
  if (s === !1)
    return n;
  const i = n[0], o = s === !0 ? i : Uo(s, e, i);
  return n[0] = {
    html: o
  }, n;
}
const au = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(n, e) {
        return vo(n, e, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(n, { col: e }) {
        const { circleSize: t = 24, circleBorderSize: s = 1, circleBgColor: i = "var(--color-border)", circleColor: o = "var(--color-success-500)" } = e.setting, r = (t - s) / 2, a = t / 2, l = n[0];
        return n[0] = /* @__PURE__ */ d("svg", { width: t, height: t, children: [
          /* @__PURE__ */ d("circle", { cx: a, cy: a, r, "stroke-width": s, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ d("circle", { cx: a, cy: a, r, "stroke-width": s, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * r * 2, "stroke-dashoffset": Math.PI * r * 2 * (100 - l) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ d("text", { x: a, y: a + s, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${r}px` }, children: Math.round(l) })
        ] }), n;
      }
    },
    datetime: {
      formatDate: "[yyyy-]MM-dd hh:mm"
    },
    date: {
      formatDate: "yyyy-MM-dd"
    },
    time: {
      formatDate: "hh:mm"
    }
  },
  onRenderCell(n, e) {
    const { formatDate: t, html: s, hint: i } = e.col.setting;
    if (t && (n = xl(n, e, t)), n = $l(n, e), n = Cl(n, e), s ? n = vo(n, e) : n = _l(n, e), i) {
      let o = n[0];
      typeof i == "function" ? o = i.call(this, e) : typeof i == "string" && (o = Y(i, e.row.data)), n.push({ attrs: { title: o } });
    }
    return n;
  }
}, lu = Ht(au, { buildIn: !0 });
function cu(n, e, t = !1) {
  var a, l;
  typeof n == "boolean" && (e = n, n = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: o } = this.options, r = (h, u) => {
    const c = o ? o.call(this, h) : !0;
    !c || t && c === "disabled" || !!s[h] === u || (u ? s[h] = !0 : delete s[h], i[h] = u);
  };
  if (n === void 0 ? (e === void 0 && (e = !kl.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
    r(h, !!e);
  })) : (Array.isArray(n) || (n = [n]), n.forEach((h) => {
    r(h, e ?? !s[h]);
  })), Object.keys(i).length) {
    const h = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, n, i, s);
    h && Object.keys(h).forEach((u) => {
      h[u] ? s[u] = !0 : delete s[u];
    }), this.setState({ checkedRows: { ...s } }, () => {
      var u;
      (u = this.options.onCheckChange) == null || u.call(this, i);
    });
  }
  return i;
}
function hu(n) {
  return this.state.checkedRows[n] ?? !1;
}
function kl() {
  var s, i;
  const n = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!n)
    return !1;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((i = this.layout) == null ? void 0 : i.allRows.reduce((o, r) => o + (t.call(this, r.id) ? 1 : 0), 0)) : e === n;
}
function uu() {
  return Object.keys(this.state.checkedRows);
}
function du(n) {
  const { checkable: e } = this.options;
  n === void 0 && (n = !e), e !== n && this.setState({ forceCheckable: n });
}
function Zr(n, e, t = !1) {
  return /* @__PURE__ */ d("div", { class: `checkbox-primary dtable-checkbox${n ? " checked" : ""}${t ? " disabled" : ""}`, children: /* @__PURE__ */ d("label", {}) });
}
const Qr = 'input[type="checkbox"],.dtable-checkbox', fu = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Zr
  },
  when: (n) => !!n.checkable,
  options(n) {
    const { forceCheckable: e } = this.state;
    return e !== void 0 ? n.checkable = e : n.checkable === "auto" && (n.checkable = !!n.cols.some((t) => t.checkbox)), n;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: cu,
    isRowChecked: hu,
    isAllRowChecked: kl,
    getChecks: uu,
    toggleCheckable: du
  },
  i18n: {
    zh_cn: {
      checkedCountInfo: "已选择 {selected} 项",
      totalCountInfo: "共 {total} 项"
    },
    zh_tw: {
      checkedCountInfo: "已選擇 {selected} 項",
      totalCountInfo: "共 {total} 項"
    },
    en: {
      checkedCountInfo: "Selected {selected} items",
      totalCountInfo: "Total {total} items"
    }
  },
  footer: {
    checkbox() {
      const n = this.isAllRowChecked();
      return [
        /* @__PURE__ */ d("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Zr(n) })
      ];
    },
    checkedInfo(n, e) {
      const t = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [s.call(this, t)];
      const i = t.length, o = [];
      return i && o.push(this.i18n("checkedCountInfo", { selected: i })), o.push(this.i18n("totalCountInfo", { total: e.allRows.length })), [
        /* @__PURE__ */ d("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(n, { row: e, col: t }) {
    var h;
    const { id: s } = e, { canRowCheckable: i } = this.options, o = i ? i.call(this, s) : !0;
    if (!o)
      return n;
    const { checkbox: r } = t.setting, a = typeof r == "function" ? r.call(this, s) : r, l = this.isRowChecked(s);
    if (a) {
      const u = (h = this.options.checkboxRender) == null ? void 0 : h.call(this, l, s, o === "disabled");
      n.unshift(u), n.push({ outer: !0, className: "has-checkbox" });
    }
    return l && n.push({ outer: !0, className: "is-checked" }), n;
  },
  onRenderHeaderCell(n, { row: e, col: t }) {
    var r;
    const { id: s } = e, { checkbox: i } = t.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const a = this.isAllRowChecked(), l = (r = this.options.checkboxRender) == null ? void 0 : r.call(this, a, s);
      n.unshift(l), n.push({ outer: !0, className: "has-checkbox" });
    }
    return n;
  },
  onHeaderCellClick(n) {
    const e = n.target;
    if (!e)
      return;
    const t = e.closest(Qr);
    t && (this.toggleCheckRows(t.checked), n.stopPropagation());
  },
  onCellClick(n, { rowID: e }) {
    const t = f(n.target);
    if (!t.length || t.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (t.closest(Qr).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(e, void 0, !0);
  }
}, pu = Ht(fu);
var Sl = /* @__PURE__ */ ((n) => (n.unknown = "", n.collapsed = "collapsed", n.expanded = "expanded", n.hidden = "hidden", n.normal = "normal", n))(Sl || {});
function Tn(n) {
  const e = this.data.nestedMap.get(n);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const t = this.state.collapsedRows, s = e.children && t && t[n];
  let i = !1, { parent: o } = e;
  for (; o; ) {
    const r = Tn.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return e.state = i ? "hidden" : s ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? Tn.call(this, e.parent).level + 1 : 0, e;
}
function mu(n) {
  return n !== void 0 ? Tn.call(this, n) : this.data.nestedMap;
}
function gu(n, e) {
  let t = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (n === "HEADER")
    if (e === void 0 && (e = !El.call(this)), e) {
      const i = s.entries();
      for (const [o, r] of i)
        r.state === "expanded" && (t[o] = !0);
    } else
      t = {};
  else {
    const i = Array.isArray(n) ? n : [n];
    e === void 0 && (e = !t[i[0]]), i.forEach((o) => {
      const r = s.get(o);
      e && (r != null && r.children) ? t[o] = !0 : delete t[o];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...t } }
  }, () => {
    var i;
    (i = this.options.onNestedChange) == null || i.call(this);
  });
}
function El() {
  const n = this.data.nestedMap.values();
  for (const e of n)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function Tl(n, e = 0, t, s = 0) {
  var i;
  t || (t = [...n.keys()]);
  for (const o of t) {
    const r = n.get(o);
    r && (r.level === s && (r.order = e++), (i = r.children) != null && i.length && (e = Tl(n, e, r.children, s + 1)));
  }
  return e;
}
function Nl(n, e, t, s) {
  const i = n.getNestedRowInfo(e);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    s[o] = t, Nl(n, o, t, s);
  }), i;
}
function Ml(n, e, t, s, i) {
  var a;
  const o = n.getNestedRowInfo(e);
  if (!o || o.state === "")
    return;
  ((a = o.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return t === h;
  })) && (s[e] = t), o.parent && Ml(n, o.parent, t, s, i);
}
const yu = {
  name: "nested",
  defaultOptions: {
    nested: "auto",
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(n, e) {
      const { nestedMap: t } = this.data, s = t.get(n.id), i = t.get(e.id);
      return (s == null ? void 0 : s.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(n, e, t) {
      if (!this.options.checkable || !(n != null && n.length))
        return;
      const s = {};
      return Object.entries(e).forEach(([i, o]) => {
        const r = Nl(this, i, o, s);
        r != null && r.parent && Ml(this, r.parent, o, s, t);
      }), s;
    }
  },
  options(n) {
    return n.nested === "auto" && (n.nested = !!n.cols.some((e) => e.nestedToggle)), n;
  },
  when: (n) => !!n.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    getNestedInfo: mu,
    toggleRow: gu,
    isAllCollapsed: El,
    getNestedRowInfo: Tn
  },
  beforeLayout() {
    var n;
    (n = this.data.nestedMap) == null || n.clear();
  },
  onAddRow(n) {
    var i, o;
    const { nestedMap: e } = this.data, t = String((i = n.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"]), s = e.get(n.id) ?? {
      state: "",
      level: 0
    };
    if (s.parent = t === "0" ? void 0 : t, (o = n.data) != null && o[this.options.asParentKey ?? "asParent"] && (s.children = []), e.set(n.id, s), t) {
      let r = e.get(t);
      r || (r = {
        state: "",
        level: 0
      }, e.set(t, r)), r.children || (r.children = []), r.children.push(n.id);
    }
  },
  onAddRows(n) {
    return n = n.filter(
      (e) => this.getNestedRowInfo(e.id).state !== "hidden"
      /* hidden */
    ), Tl(this.data.nestedMap), n.sort((e, t) => {
      const s = this.getNestedRowInfo(e.id), i = this.getNestedRowInfo(t.id), o = (s.order ?? 0) - (i.order ?? 0);
      return o === 0 ? e.index - t.index : o;
    }), n;
  },
  onRenderCell(n, { col: e, row: t }) {
    var a;
    const { id: s, data: i } = t, { nestedToggle: o } = e.setting, r = this.getNestedRowInfo(s);
    if (o && (r.children || r.parent) && n.unshift(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, r, s, e, i)) ?? /* @__PURE__ */ d("a", { className: `dtable-nested-toggle state${r.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ d("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${r.state}` }
    ), r.level) {
      let { nestedIndent: l = o } = e.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), n.unshift(/* @__PURE__ */ d("div", { className: "dtable-nested-indent", style: { width: l * r.level + "px" } })));
    }
    return n;
  },
  onRenderHeaderCell(n, { row: e, col: t }) {
    var i;
    const { id: s } = e;
    return t.setting.nestedToggle && n.unshift(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, t, void 0)) ?? /* @__PURE__ */ d("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ d("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), n;
  },
  onHeaderCellClick(n) {
    const e = n.target;
    if (!(!e || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(n, { rowID: e }) {
    const t = n.target;
    if (!(!t || !this.getNestedRowInfo(e).children || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow(e), !0;
  }
}, bu = Ht(yu);
function Gi(n, { row: e, col: t }) {
  const { data: s } = e, i = s ? s[t.name] : void 0;
  if (!(i != null && i.length))
    return n;
  const { avatarClass: o = "rounded-full", avatarKey: r = `${t.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: h = `${t.name}Name` } = t.setting, u = (s ? s[h] : i) || n[0], c = {
    size: "xs",
    className: N(o, a == null ? void 0 : a.className, "flex-none"),
    src: s ? s[r] : void 0,
    text: u,
    code: l ? s ? s[l] : void 0 : i,
    ...a
  };
  if (n[0] = /* @__PURE__ */ d(tl, { ...c }), t.type === "avatarBtn") {
    const { avatarBtnProps: p } = t.setting, m = typeof p == "function" ? p(t, e) : p;
    n[0] = /* @__PURE__ */ d("button", { type: "button", className: "btn btn-avatar", ...m, children: [
      n[0],
      /* @__PURE__ */ d("div", { children: u })
    ] });
  } else
    t.type === "avatarName" && (n[0] = /* @__PURE__ */ d("div", { className: "flex items-center gap-1", children: [
      n[0],
      /* @__PURE__ */ d("span", { children: u })
    ] }));
  return n;
}
const wu = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Gi
    },
    avatarBtn: {
      onRenderCell: Gi
    },
    avatarName: {
      onRenderCell: Gi
    }
  }
}, vu = Ht(wu, { buildIn: !0 }), _u = {
  name: "sort-type",
  onRenderHeaderCell(n, e) {
    const { col: t } = e, { sortType: s } = t.setting;
    if (s) {
      const i = s === !0 ? "none" : s;
      n.push(
        /* @__PURE__ */ d("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: o = this.options.sortLink } = t.setting;
      if (o) {
        const r = i === "asc" ? "desc" : "asc";
        typeof o == "function" && (o = o.call(this, t, r, i)), typeof o == "string" && (o = { url: o });
        const { url: a, ...l } = o;
        n[0] = /* @__PURE__ */ d("a", { href: Y(a, { ...t.setting, sortType: r }), ...l, children: n[0] });
      }
    }
    return n;
  }
}, Cu = Ht(_u, { buildIn: !0 }), Xi = (n) => {
  n.length !== 1 && n.forEach((e, t) => {
    !t || e.setting.border || e.setting.group === n[t - 1].setting.group || (e.setting.border = "left");
  });
}, $u = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (n) => !!n.groupDivider,
  onLayout(n) {
    if (!this.options.groupDivider)
      return;
    const { cols: e } = n;
    Xi(e.left.list), Xi(e.center.list), Xi(e.right.list);
  }
}, xu = Ht($u), ku = {
  name: "cellspan",
  when: (n) => !!n.getCellSpan,
  data() {
    return { cellSpanMap: /* @__PURE__ */ new Map(), overlayedCellSet: /* @__PURE__ */ new Set() };
  },
  onLayout(n) {
    const { getCellSpan: e } = this.options;
    if (!e)
      return;
    const { cellSpanMap: t, overlayedCellSet: s } = this.data, { rows: i, cols: o, rowHeight: r } = n;
    t.clear(), s.clear();
    const a = (l, h, u) => {
      const { index: c } = h;
      l.forEach((p, m) => {
        const { index: g } = p, b = `C${g}R${c}`;
        if (s.has(b))
          return;
        const v = e.call(this, { row: h, col: p });
        if (!v)
          return;
        const w = Math.min(v.colSpan || 1, l.length - m), C = Math.min(v.rowSpan || 1, i.length - u);
        if (w <= 1 && C <= 1)
          return;
        let x = 0;
        for (let T = 0; T < w; T++) {
          x += l[m + T].realWidth;
          for (let S = 0; S < C; S++) {
            const M = `C${g + T}R${c + S}`;
            M !== b && s.add(M);
          }
        }
        t.set(b, {
          colSpan: w,
          rowSpan: C,
          width: x,
          height: r * C
        });
      });
    };
    i.forEach((l, h) => {
      ["left", "center", "right"].forEach((u) => {
        a(o[u].list, l, h);
      });
    });
  },
  onRenderCell(n, { row: e, col: t }) {
    const s = `C${t.index}R${e.index}`;
    if (this.data.overlayedCellSet.has(s))
      n.push({ outer: !0, style: { display: "none", className: "cellspan-overlayed-cell" } });
    else {
      const i = this.data.cellSpanMap.get(s);
      i && n.push({
        outer: !0,
        style: {
          width: i.width,
          height: i.height
        }
      });
    }
    return n;
  }
}, Su = Ht(ku), Eu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Sl,
  avatar: vu,
  cellspan: Su,
  checkable: pu,
  custom: ru,
  group: xu,
  nested: bu,
  renderDatetime: vl,
  renderDatetimeCell: xl,
  renderFormat: Uo,
  renderFormatCell: Cl,
  renderHtmlCell: vo,
  renderLink: wl,
  renderLinkCell: _l,
  renderMapCell: $l,
  rich: lu,
  sortType: Cu
}, Symbol.toStringTag, { value: "Module" })), se = class se extends z {
};
se.NAME = "DTable", se.Component = nu, se.definePlugin = Ht, se.removePlugin = hl, se.plugins = Eu;
let ta = se;
const Tu = "nav", hn = '[data-toggle="tab"]', Nu = "active";
var ue;
const Xo = class Xo extends Ct {
  constructor() {
    super(...arguments);
    _(this, ue, 0);
  }
  active(t) {
    const s = this.$element, i = s.find(hn);
    let o = t ? f(t).closest(hn) : i.filter(`.${Nu}`);
    if (!o.length && (o = s.find(hn).first(), !o.length))
      return;
    i.removeClass("active"), o.addClass("active");
    const r = o.attr("href") || o.data("target"), a = o.data("name") || r, l = f(r);
    l.length && (l.parent().children(".tab-pane").removeClass("active in"), l.addClass("active").trigger("show", [a]), this.emit("show", a), y(this, ue) && clearTimeout(y(this, ue)), $(this, ue, setTimeout(() => {
      l.addClass("in").trigger("show", [a]), this.emit("shown", a), $(this, ue, 0);
    }, 10)));
  }
};
ue = new WeakMap(), Xo.NAME = "Tabs";
let _o = Xo;
f(document).on("click.tabs.zui", hn, (n) => {
  n.preventDefault();
  const e = f(n.target), t = e.closest(`.${Tu}`);
  t.length && _o.ensure(t).active(e);
});
f(() => {
  f(".disabled, [disabled]").on("click", (n) => {
    n.preventDefault(), n.stopImmediatePropagation();
  });
});
export {
  f as $,
  fr as ActionMenu,
  pr as ActionMenuNested,
  Tr as Avatar,
  Nr as BtnGroup,
  Mr as ColorPicker,
  Ct as Component,
  z as ComponentFromReact,
  bo as ContextMenu,
  Je as CustomContent,
  to as CustomRender,
  ta as DTable,
  Yr as Dashboard,
  Lr as DatePicker,
  Mt as Dropdown,
  Za as EventBus,
  La as HElement,
  Zs as HtmlContent,
  tt as Icon,
  mr as Menu,
  $r as Messager,
  fo as Modal,
  Pt as ModalBase,
  kn as ModalTrigger,
  Or as Nav,
  Hr as Pager,
  Br as Pick,
  Wr as Picker,
  _t as Popover,
  eo as PopoverPanel,
  Fr as Popovers,
  xr as ProgressCircle,
  H as ReactComponent,
  zr as SearchBox,
  os as TIME_DAY,
  _o as Tabs,
  Dr as TimePicker,
  jr as Toolbar,
  Tt as Tooltip,
  Vr as Tree,
  yo as Upload,
  Ur as UploadImgs,
  vh as addDate,
  f as cash,
  N as classes,
  rn as componentsMap,
  xc as convertBytes,
  Tc as create,
  G as createDate,
  Bc as createPortal,
  K as createRef,
  Cc as deepGet,
  _c as deepGetPath,
  Ru as defineFn,
  pn as delay,
  Iu as dom,
  $c as formatBytes,
  lt as formatDate,
  Fu as formatDateSpan,
  Y as formatString,
  va as getClassList,
  mn as getComponent,
  U as h,
  Au as hh,
  Dc as htm,
  J as i18n,
  sn as isSameDay,
  sl as isSameMonth,
  Ou as isSameWeek,
  ho as isSameYear,
  Hu as isToday,
  Wu as isTomorrow,
  X as isValidElement,
  Bu as isYesterday,
  kr as nativeEvents,
  wn as render,
  Pa as renderCustomContent,
  Pc as renderCustomResult,
  ts as store,
  _a as storeData,
  Ca as takeData
};
//# sourceMappingURL=zui.js.map
