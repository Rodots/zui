var Go = (s, e, t) => {
  if (!e.has(s))
    throw TypeError("Cannot " + t);
};
var p = (s, e, t) => (Go(s, e, "read from private field"), t ? t.call(s) : e.get(s)), _ = (s, e, t) => {
  if (e.has(s))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(s) : e.set(s, t);
}, C = (s, e, t, n) => (Go(s, e, "write to private field"), n ? n.call(s, t) : e.set(s, t), t);
var A = (s, e, t) => (Go(s, e, "access private method"), t);
const Ht = document, ri = window, bl = Ht.documentElement, He = Ht.createElement.bind(Ht), vl = He("div"), Zo = He("table"), bh = He("tbody"), ua = He("tr"), { isArray: Oo, prototype: _l } = Array, { concat: vh, filter: Ir, indexOf: xl, map: Cl, push: _h, slice: $l, some: Dr, splice: xh } = _l, Ch = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, $h = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Sh = /<.+>/, kh = /^\w+$/;
function Pr(s, e) {
  const t = Eh(e);
  return !s || !t && !Ae(e) && !V(e) ? [] : !t && $h.test(s) ? e.getElementsByClassName(s.slice(1).replace(/\\/g, "")) : !t && kh.test(s) ? e.getElementsByTagName(s) : e.querySelectorAll(s);
}
class Ho {
  constructor(e, t) {
    if (!e)
      return;
    if (hr(e))
      return e;
    let n = e;
    if (nt(e)) {
      const i = t || Ht;
      if (n = Ch.test(e) && Ae(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : Sh.test(e) ? El(e) : hr(i) ? i.find(e) : nt(i) ? g(i).find(e) : Pr(e, i), !n)
        return;
    } else if (Be(e))
      return this.ready(e);
    (n.nodeType || n === ri) && (n = [n]), this.length = n.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = n[i];
  }
  init(e, t) {
    return new Ho(e, t);
  }
}
const T = Ho.prototype, g = T.init;
g.fn = g.prototype = T;
T.length = 0;
T.splice = xh;
typeof Symbol == "function" && (T[Symbol.iterator] = _l[Symbol.iterator]);
function hr(s) {
  return s instanceof Ho;
}
function xn(s) {
  return !!s && s === s.window;
}
function Ae(s) {
  return !!s && s.nodeType === 9;
}
function Eh(s) {
  return !!s && s.nodeType === 11;
}
function V(s) {
  return !!s && s.nodeType === 1;
}
function Th(s) {
  return !!s && s.nodeType === 3;
}
function Nh(s) {
  return typeof s == "boolean";
}
function Be(s) {
  return typeof s == "function";
}
function nt(s) {
  return typeof s == "string";
}
function rt(s) {
  return s === void 0;
}
function Dn(s) {
  return s === null;
}
function Sl(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}
function Or(s) {
  if (typeof s != "object" || s === null)
    return !1;
  const e = Object.getPrototypeOf(s);
  return e === null || e === Object.prototype;
}
g.isWindow = xn;
g.isFunction = Be;
g.isArray = Oo;
g.isNumeric = Sl;
g.isPlainObject = Or;
function q(s, e, t) {
  if (t) {
    let n = s.length;
    for (; n--; )
      if (e.call(s[n], n, s[n]) === !1)
        return s;
  } else if (Or(s)) {
    const n = Object.keys(s);
    for (let i = 0, o = n.length; i < o; i++) {
      const r = n[i];
      if (e.call(s[r], r, s[r]) === !1)
        return s;
    }
  } else
    for (let n = 0, i = s.length; n < i; n++)
      if (e.call(s[n], n, s[n]) === !1)
        return s;
  return s;
}
g.each = q;
T.each = function(s) {
  return q(this, s);
};
T.empty = function() {
  return this.each((s, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function ai(...s) {
  const e = Nh(s[0]) ? s.shift() : !1, t = s.shift(), n = s.length;
  if (!t)
    return {};
  if (!n)
    return ai(e, g, t);
  for (let i = 0; i < n; i++) {
    const o = s[i];
    for (const r in o)
      e && (Oo(o[r]) || Or(o[r])) ? ((!t[r] || t[r].constructor !== o[r].constructor) && (t[r] = new o[r].constructor()), ai(e, t[r], o[r])) : t[r] = o[r];
  }
  return t;
}
g.extend = ai;
T.extend = function(s) {
  return ai(T, s);
};
const Mh = /\S+/g;
function Bo(s) {
  return nt(s) ? s.match(Mh) || [] : [];
}
T.toggleClass = function(s, e) {
  const t = Bo(s), n = !rt(e);
  return this.each((i, o) => {
    V(o) && q(t, (r, a) => {
      n ? e ? o.classList.add(a) : o.classList.remove(a) : o.classList.toggle(a);
    });
  });
};
T.addClass = function(s) {
  return this.toggleClass(s, !0);
};
T.removeAttr = function(s) {
  const e = Bo(s);
  return this.each((t, n) => {
    V(n) && q(e, (i, o) => {
      n.removeAttribute(o);
    });
  });
};
function Rh(s, e) {
  if (s) {
    if (nt(s)) {
      if (arguments.length < 2) {
        if (!this[0] || !V(this[0]))
          return;
        const t = this[0].getAttribute(s);
        return Dn(t) ? void 0 : t;
      }
      return rt(e) ? this : Dn(e) ? this.removeAttr(s) : this.each((t, n) => {
        V(n) && n.setAttribute(s, e);
      });
    }
    for (const t in s)
      this.attr(t, s[t]);
    return this;
  }
}
T.attr = Rh;
T.removeClass = function(s) {
  return arguments.length ? this.toggleClass(s, !1) : this.attr("class", "");
};
T.hasClass = function(s) {
  return !!s && Dr.call(this, (e) => V(e) && e.classList.contains(s));
};
T.get = function(s) {
  return rt(s) ? $l.call(this) : (s = Number(s), this[s < 0 ? s + this.length : s]);
};
T.eq = function(s) {
  return g(this.get(s));
};
T.first = function() {
  return this.eq(0);
};
T.last = function() {
  return this.eq(-1);
};
function Lh(s) {
  return rt(s) ? this.get().map((e) => V(e) || Th(e) ? e.textContent : "").join("") : this.each((e, t) => {
    V(t) && (t.textContent = s);
  });
}
T.text = Lh;
function Bt(s, e, t) {
  if (!V(s))
    return;
  const n = ri.getComputedStyle(s, null);
  return t ? n.getPropertyValue(e) || void 0 : n[e] || s.style[e];
}
function kt(s, e) {
  return parseInt(Bt(s, e), 10) || 0;
}
function da(s, e) {
  return kt(s, `border${e ? "Left" : "Top"}Width`) + kt(s, `padding${e ? "Left" : "Top"}`) + kt(s, `padding${e ? "Right" : "Bottom"}`) + kt(s, `border${e ? "Right" : "Bottom"}Width`);
}
const Jo = {};
function Ah(s) {
  if (Jo[s])
    return Jo[s];
  const e = He(s);
  Ht.body.insertBefore(e, null);
  const t = Bt(e, "display");
  return Ht.body.removeChild(e), Jo[s] = t !== "none" ? t : "block";
}
function fa(s) {
  return Bt(s, "display") === "none";
}
function kl(s, e) {
  const t = s && (s.matches || s.webkitMatchesSelector || s.msMatchesSelector);
  return !!t && !!e && t.call(s, e);
}
function Wo(s) {
  return nt(s) ? (e, t) => kl(t, s) : Be(s) ? s : hr(s) ? (e, t) => s.is(t) : s ? (e, t) => t === s : () => !1;
}
T.filter = function(s) {
  const e = Wo(s);
  return g(Ir.call(this, (t, n) => e.call(t, n, t)));
};
function le(s, e) {
  return e ? s.filter(e) : s;
}
T.detach = function(s) {
  return le(this, s).each((e, t) => {
    t.parentNode && t.parentNode.removeChild(t);
  }), this;
};
const Ih = /^\s*<(\w+)[^>]*>/, Dh = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, pa = {
  "*": vl,
  tr: bh,
  td: ua,
  th: ua,
  thead: Zo,
  tbody: Zo,
  tfoot: Zo
};
function El(s) {
  if (!nt(s))
    return [];
  if (Dh.test(s))
    return [He(RegExp.$1)];
  const e = Ih.test(s) && RegExp.$1, t = pa[e] || pa["*"];
  return t.innerHTML = s, g(t.childNodes).detach().get();
}
g.parseHTML = El;
T.has = function(s) {
  const e = nt(s) ? (t, n) => Pr(s, n).length : (t, n) => n.contains(s);
  return this.filter(e);
};
T.not = function(s) {
  const e = Wo(s);
  return this.filter((t, n) => (!nt(s) || V(n)) && !e.call(n, t, n));
};
function Ft(s, e, t, n) {
  const i = [], o = Be(e), r = n && Wo(n);
  for (let a = 0, l = s.length; a < l; a++)
    if (o) {
      const h = e(s[a]);
      h.length && _h.apply(i, h);
    } else {
      let h = s[a][e];
      for (; h != null && !(n && r(-1, h)); )
        i.push(h), h = t ? h[e] : null;
    }
  return i;
}
function Tl(s) {
  return s.multiple && s.options ? Ft(Ir.call(s.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : s.value || "";
}
function Ph(s) {
  return arguments.length ? this.each((e, t) => {
    const n = t.multiple && t.options;
    if (n || Pl.test(t.type)) {
      const i = Oo(s) ? Cl.call(s, String) : Dn(s) ? [] : [String(s)];
      n ? q(t.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : t.checked = i.indexOf(t.value) >= 0;
    } else
      t.value = rt(s) || Dn(s) ? "" : s;
  }) : this[0] && Tl(this[0]);
}
T.val = Ph;
T.is = function(s) {
  const e = Wo(s);
  return Dr.call(this, (t, n) => e.call(t, n, t));
};
g.guid = 1;
function Nt(s) {
  return s.length > 1 ? Ir.call(s, (e, t, n) => xl.call(n, e) === t) : s;
}
g.unique = Nt;
T.add = function(s, e) {
  return g(Nt(this.get().concat(g(s, e).get())));
};
T.children = function(s) {
  return le(g(Nt(Ft(this, (e) => e.children))), s);
};
T.parent = function(s) {
  return le(g(Nt(Ft(this, "parentNode"))), s);
};
T.index = function(s) {
  const e = s ? g(s)[0] : this[0], t = s ? this : g(e).parent().children();
  return xl.call(t, e);
};
T.closest = function(s) {
  const e = this.filter(s);
  if (e.length)
    return e;
  const t = this.parent();
  return t.length ? t.closest(s) : e;
};
T.siblings = function(s) {
  return le(g(Nt(Ft(this, (e) => g(e).parent().children().not(e)))), s);
};
T.find = function(s) {
  return g(Nt(Ft(this, (e) => Pr(s, e))));
};
const Oh = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Hh = /^$|^module$|\/(java|ecma)script/i, Bh = ["type", "src", "nonce", "noModule"];
function Wh(s, e) {
  const t = g(s);
  t.filter("script").add(t.find("script")).each((n, i) => {
    if (Hh.test(i.type) && bl.contains(i)) {
      const o = He("script");
      o.text = i.textContent.replace(Oh, ""), q(Bh, (r, a) => {
        i[a] && (o[a] = i[a]);
      }), e.head.insertBefore(o, null), e.head.removeChild(o);
    }
  });
}
function zh(s, e, t, n, i) {
  n ? s.insertBefore(e, t ? s.firstChild : null) : s.nodeName === "HTML" ? s.parentNode.replaceChild(e, s) : s.parentNode.insertBefore(e, t ? s : s.nextSibling), i && Wh(e, s.ownerDocument);
}
function ce(s, e, t, n, i, o, r, a) {
  return q(s, (l, h) => {
    q(g(h), (u, c) => {
      q(g(e), (d, f) => {
        const y = t ? c : f, w = t ? f : c, v = t ? u : d;
        zh(y, v ? w.cloneNode(!0) : w, n, i, !v);
      }, a);
    }, r);
  }, o), e;
}
T.after = function() {
  return ce(arguments, this, !1, !1, !1, !0, !0);
};
T.append = function() {
  return ce(arguments, this, !1, !1, !0);
};
function Fh(s) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (rt(s))
    return this;
  const e = /<script[\s>]/.test(s);
  return this.each((t, n) => {
    V(n) && (e ? g(n).empty().append(s) : n.innerHTML = s);
  });
}
T.html = Fh;
T.appendTo = function(s) {
  return ce(arguments, this, !0, !1, !0);
};
T.wrapInner = function(s) {
  return this.each((e, t) => {
    const n = g(t), i = n.contents();
    i.length ? i.wrapAll(s) : n.append(s);
  });
};
T.before = function() {
  return ce(arguments, this, !1, !0);
};
T.wrapAll = function(s) {
  let e = g(s), t = e[0];
  for (; t.children.length; )
    t = t.firstElementChild;
  return this.first().before(e), this.appendTo(t);
};
T.wrap = function(s) {
  return this.each((e, t) => {
    const n = g(s)[0];
    g(t).wrapAll(e ? n.cloneNode(!0) : n);
  });
};
T.insertAfter = function(s) {
  return ce(arguments, this, !0, !1, !1, !1, !1, !0);
};
T.insertBefore = function(s) {
  return ce(arguments, this, !0, !0);
};
T.prepend = function() {
  return ce(arguments, this, !1, !0, !0, !0, !0);
};
T.prependTo = function(s) {
  return ce(arguments, this, !0, !0, !0, !1, !1, !0);
};
T.contents = function() {
  return g(Nt(Ft(this, (s) => s.tagName === "IFRAME" ? [s.contentDocument] : s.tagName === "TEMPLATE" ? s.content.childNodes : s.childNodes)));
};
T.next = function(s, e, t) {
  return le(g(Nt(Ft(this, "nextElementSibling", e, t))), s);
};
T.nextAll = function(s) {
  return this.next(s, !0);
};
T.nextUntil = function(s, e) {
  return this.next(e, !0, s);
};
T.parents = function(s, e) {
  return le(g(Nt(Ft(this, "parentElement", !0, e))), s);
};
T.parentsUntil = function(s, e) {
  return this.parents(e, s);
};
T.prev = function(s, e, t) {
  return le(g(Nt(Ft(this, "previousElementSibling", e, t))), s);
};
T.prevAll = function(s) {
  return this.prev(s, !0);
};
T.prevUntil = function(s, e) {
  return this.prev(e, !0, s);
};
T.map = function(s) {
  return g(vh.apply([], Cl.call(this, (e, t) => s.call(e, t, e))));
};
T.clone = function() {
  return this.map((s, e) => e.cloneNode(!0));
};
T.offsetParent = function() {
  return this.map((s, e) => {
    let t = e.offsetParent;
    for (; t && Bt(t, "position") === "static"; )
      t = t.offsetParent;
    return t || bl;
  });
};
T.slice = function(s, e) {
  return g($l.call(this, s, e));
};
const jh = /-([a-z])/g;
function Hr(s) {
  return s.replace(jh, (e, t) => t.toUpperCase());
}
T.ready = function(s) {
  const e = () => setTimeout(s, 0, g);
  return Ht.readyState !== "loading" ? e() : Ht.addEventListener("DOMContentLoaded", e), this;
};
T.unwrap = function() {
  return this.parent().each((s, e) => {
    if (e.tagName === "BODY")
      return;
    const t = g(e);
    t.replaceWith(t.children());
  }), this;
};
T.offset = function() {
  const s = this[0];
  if (!s)
    return;
  const e = s.getBoundingClientRect();
  return {
    top: e.top + ri.pageYOffset,
    left: e.left + ri.pageXOffset
  };
};
T.position = function() {
  const s = this[0];
  if (!s)
    return;
  const e = Bt(s, "position") === "fixed", t = e ? s.getBoundingClientRect() : this.offset();
  if (!e) {
    const n = s.ownerDocument;
    let i = s.offsetParent || n.documentElement;
    for (; (i === n.body || i === n.documentElement) && Bt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== s && V(i)) {
      const o = g(i).offset();
      t.top -= o.top + kt(i, "borderTopWidth"), t.left -= o.left + kt(i, "borderLeftWidth");
    }
  }
  return {
    top: t.top - kt(s, "marginTop"),
    left: t.left - kt(s, "marginLeft")
  };
};
const Nl = {
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
T.prop = function(s, e) {
  if (s) {
    if (nt(s))
      return s = Nl[s] || s, arguments.length < 2 ? this[0] && this[0][s] : this.each((t, n) => {
        n[s] = e;
      });
    for (const t in s)
      this.prop(t, s[t]);
    return this;
  }
};
T.removeProp = function(s) {
  return this.each((e, t) => {
    delete t[Nl[s] || s];
  });
};
const Vh = /^--/;
function Br(s) {
  return Vh.test(s);
}
const Qo = {}, { style: Uh } = vl, qh = ["webkit", "moz", "ms"];
function Yh(s, e = Br(s)) {
  if (e)
    return s;
  if (!Qo[s]) {
    const t = Hr(s), n = `${t[0].toUpperCase()}${t.slice(1)}`, i = `${t} ${qh.join(`${n} `)}${n}`.split(" ");
    q(i, (o, r) => {
      if (r in Uh)
        return Qo[s] = r, !1;
    });
  }
  return Qo[s];
}
const Kh = {
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
function Ml(s, e, t = Br(s)) {
  return !t && !Kh[s] && Sl(e) ? `${e}px` : e;
}
function Xh(s, e) {
  if (nt(s)) {
    const t = Br(s);
    return s = Yh(s, t), arguments.length < 2 ? this[0] && Bt(this[0], s, t) : s ? (e = Ml(s, e, t), this.each((n, i) => {
      V(i) && (t ? i.style.setProperty(s, e) : i.style[s] = e);
    })) : this;
  }
  for (const t in s)
    this.css(t, s[t]);
  return this;
}
T.css = Xh;
function Rl(s, e) {
  try {
    return s(e);
  } catch {
    return e;
  }
}
const Gh = /^\s+|\s+$/;
function ma(s, e) {
  const t = s.dataset[e] || s.dataset[Hr(e)];
  return Gh.test(t) ? t : Rl(JSON.parse, t);
}
function Zh(s, e, t) {
  t = Rl(JSON.stringify, t), s.dataset[Hr(e)] = t;
}
function Jh(s, e) {
  if (!s) {
    if (!this[0])
      return;
    const t = {};
    for (const n in this[0].dataset)
      t[n] = ma(this[0], n);
    return t;
  }
  if (nt(s))
    return arguments.length < 2 ? this[0] && ma(this[0], s) : rt(e) ? this : this.each((t, n) => {
      Zh(n, s, e);
    });
  for (const t in s)
    this.data(t, s[t]);
  return this;
}
T.data = Jh;
function Ll(s, e) {
  const t = s.documentElement;
  return Math.max(s.body[`scroll${e}`], t[`scroll${e}`], s.body[`offset${e}`], t[`offset${e}`], t[`client${e}`]);
}
q([!0, !1], (s, e) => {
  q(["Width", "Height"], (t, n) => {
    const i = `${e ? "outer" : "inner"}${n}`;
    T[i] = function(o) {
      if (this[0])
        return xn(this[0]) ? e ? this[0][`inner${n}`] : this[0].document.documentElement[`client${n}`] : Ae(this[0]) ? Ll(this[0], n) : this[0][`${e ? "offset" : "client"}${n}`] + (o && e ? kt(this[0], `margin${t ? "Top" : "Left"}`) + kt(this[0], `margin${t ? "Bottom" : "Right"}`) : 0);
    };
  });
});
q(["Width", "Height"], (s, e) => {
  const t = e.toLowerCase();
  T[t] = function(n) {
    if (!this[0])
      return rt(n) ? void 0 : this;
    if (!arguments.length)
      return xn(this[0]) ? this[0].document.documentElement[`client${e}`] : Ae(this[0]) ? Ll(this[0], e) : this[0].getBoundingClientRect()[t] - da(this[0], !s);
    const i = parseInt(n, 10);
    return this.each((o, r) => {
      if (!V(r))
        return;
      const a = Bt(r, "boxSizing");
      r.style[t] = Ml(t, i + (a === "border-box" ? da(r, !s) : 0));
    });
  };
});
const ga = "___cd";
T.toggle = function(s) {
  return this.each((e, t) => {
    if (!V(t))
      return;
    const n = fa(t);
    (rt(s) ? n : s) ? (t.style.display = t[ga] || "", fa(t) && (t.style.display = Ah(t.tagName))) : n || (t[ga] = Bt(t, "display"), t.style.display = "none");
  });
};
T.hide = function() {
  return this.toggle(!1);
};
T.show = function() {
  return this.toggle(!0);
};
const ya = "___ce", Wr = ".", zr = { focus: "focusin", blur: "focusout" }, Al = { mouseenter: "mouseover", mouseleave: "mouseout" }, Qh = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Fr(s) {
  return Al[s] || zr[s] || s;
}
function jr(s) {
  const e = s.split(Wr);
  return [e[0], e.slice(1).sort()];
}
T.trigger = function(s, e) {
  if (nt(s)) {
    const [n, i] = jr(s), o = Fr(n);
    if (!o)
      return this;
    const r = Qh.test(o) ? "MouseEvents" : "HTMLEvents";
    s = Ht.createEvent(r), s.initEvent(o, !0, !0), s.namespace = i.join(Wr), s.___ot = n;
  }
  s.___td = e;
  const t = s.___ot in zr;
  return this.each((n, i) => {
    t && Be(i[s.___ot]) && (i[`___i${s.type}`] = !0, i[s.___ot](), i[`___i${s.type}`] = !1), i.dispatchEvent(s);
  });
};
function Il(s) {
  return s[ya] = s[ya] || {};
}
function tu(s, e, t, n, i) {
  const o = Il(s);
  o[e] = o[e] || [], o[e].push([t, n, i]), s.addEventListener(e, i);
}
function Dl(s, e) {
  return !e || !Dr.call(e, (t) => s.indexOf(t) < 0);
}
function li(s, e, t, n, i) {
  const o = Il(s);
  if (e)
    o[e] && (o[e] = o[e].filter(([r, a, l]) => {
      if (i && l.guid !== i.guid || !Dl(r, t) || n && n !== a)
        return !0;
      s.removeEventListener(e, l);
    }));
  else
    for (e in o)
      li(s, e, t, n, i);
}
T.off = function(s, e, t) {
  if (rt(s))
    this.each((n, i) => {
      !V(i) && !Ae(i) && !xn(i) || li(i);
    });
  else if (nt(s))
    Be(e) && (t = e, e = ""), q(Bo(s), (n, i) => {
      const [o, r] = jr(i), a = Fr(o);
      this.each((l, h) => {
        !V(h) && !Ae(h) && !xn(h) || li(h, a, r, e, t);
      });
    });
  else
    for (const n in s)
      this.off(n, s[n]);
  return this;
};
T.remove = function(s) {
  return le(this, s).detach().off(), this;
};
T.replaceWith = function(s) {
  return this.before(s).remove();
};
T.replaceAll = function(s) {
  return g(s).replaceWith(this), this;
};
function eu(s, e, t, n, i) {
  if (!nt(s)) {
    for (const o in s)
      this.on(o, e, t, s[o], i);
    return this;
  }
  return nt(e) || (rt(e) || Dn(e) ? e = "" : rt(t) ? (t = e, e = "") : (n = t, t = e, e = "")), Be(n) || (n = t, t = void 0), n ? (q(Bo(s), (o, r) => {
    const [a, l] = jr(r), h = Fr(a), u = a in Al, c = a in zr;
    h && this.each((d, f) => {
      if (!V(f) && !Ae(f) && !xn(f))
        return;
      const y = function(w) {
        if (w.target[`___i${w.type}`])
          return w.stopImmediatePropagation();
        if (w.namespace && !Dl(l, w.namespace.split(Wr)) || !e && (c && (w.target !== f || w.___ot === h) || u && w.relatedTarget && f.contains(w.relatedTarget)))
          return;
        let v = f;
        if (e) {
          let x = w.target;
          for (; !kl(x, e); )
            if (x === f || (x = x.parentNode, !x))
              return;
          v = x;
        }
        Object.defineProperty(w, "currentTarget", {
          configurable: !0,
          get() {
            return v;
          }
        }), Object.defineProperty(w, "delegateTarget", {
          configurable: !0,
          get() {
            return f;
          }
        }), Object.defineProperty(w, "data", {
          configurable: !0,
          get() {
            return t;
          }
        });
        const b = n.call(v, w, w.___td);
        i && li(f, h, l, e, y), b === !1 && (w.preventDefault(), w.stopPropagation());
      };
      y.guid = n.guid = n.guid || g.guid++, tu(f, h, l, e, y);
    });
  }), this) : this;
}
T.on = eu;
function nu(s, e, t, n) {
  return this.on(s, e, t, n, !0);
}
T.one = nu;
const su = /\r?\n/g;
function iu(s, e) {
  return `&${encodeURIComponent(s)}=${encodeURIComponent(e.replace(su, `\r
`))}`;
}
const ou = /file|reset|submit|button|image/i, Pl = /radio|checkbox/i;
T.serialize = function() {
  let s = "";
  return this.each((e, t) => {
    q(t.elements || [t], (n, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || ou.test(i.type) || Pl.test(i.type) && !i.checked)
        return;
      const o = Tl(i);
      if (!rt(o)) {
        const r = Oo(o) ? o : [o];
        q(r, (a, l) => {
          s += iu(i.name, l);
        });
      }
    });
  }), s.slice(1);
};
window.$ = g;
function ru(s, e) {
  if (s == null)
    return [s, void 0];
  typeof e == "string" && (e = e.split("."));
  const t = e.join(".");
  let n = s;
  const i = [n];
  for (; typeof n == "object" && n !== null && e.length; ) {
    let o = e.shift(), r;
    const a = o.indexOf("[");
    if (a > 0 && a < o.length - 1 && o.endsWith("]") && (r = o.substring(a + 1, o.length - 1), o = o.substring(0, a)), n = n[o], i.push(n), r !== void 0)
      if (typeof n == "object" && n !== null)
        n instanceof Map ? n = n.get(r) : n = n[r], i.push(n);
      else
        throw new Error(`Cannot access property "${o}[${r}]", the full path is "${t}".`);
  }
  if (e.length)
    throw new Error(`Cannot access property with rest path "${e.join(".")}", the full path is "${t}".`);
  return i;
}
function au(s, e, t) {
  try {
    const n = ru(s, e), i = n[n.length - 1];
    return i === void 0 ? t : i;
  } catch {
    return t;
  }
}
function Y(s, ...e) {
  if (e.length === 0)
    return s;
  if (e.length === 1 && typeof e[0] == "object" && e[0]) {
    const t = e[0];
    return Object.keys(t).forEach((n) => {
      const i = t[n] ?? "";
      s = s.replace(new RegExp(`\\{${n}\\}`, "g"), `${i}`);
    }), s;
  }
  for (let t = 0; t < e.length; t++) {
    const n = e[t] ?? "";
    s = s.replace(new RegExp(`\\{${t}\\}`, "g"), `${n}`);
  }
  return s;
}
var Vr = /* @__PURE__ */ ((s) => (s[s.B = 1] = "B", s[s.KB = 1024] = "KB", s[s.MB = 1048576] = "MB", s[s.GB = 1073741824] = "GB", s[s.TB = 1099511627776] = "TB", s))(Vr || {});
function lu(s, e = 2, t) {
  return Number.isNaN(s) ? "?KB" : (t || (s < 1024 ? t = "B" : s < 1048576 ? t = "KB" : s < 1073741824 ? t = "MB" : s < 1099511627776 ? t = "GB" : t = "TB"), (s / Vr[t]).toFixed(e) + t);
}
const cu = (s) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  s = s.toUpperCase();
  const t = s.match(e);
  if (!t)
    return 0;
  const n = t[1];
  return s = s.replace(n, ""), Number.parseInt(s, 10) * Vr[n];
};
let Ur = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Vt;
function hu() {
  return Ur;
}
function uu(s) {
  Ur = s.toLowerCase();
}
function Ol(s, e) {
  Vt || (Vt = {}), typeof s == "string" && (s = { [s]: e ?? {} }), g.extend(!0, Vt, s);
}
function J(s, e, t, n, i, o) {
  Array.isArray(s) ? Vt && s.unshift(Vt) : s = Vt ? [Vt, s] : [s], typeof t == "string" && (o = i, i = n, n = t, t = void 0);
  const r = i || Ur;
  let a;
  for (const l of s) {
    if (!l)
      continue;
    const h = l[r];
    if (!h)
      continue;
    const u = o && l === Vt ? `${o}.${e}` : e;
    if (a = au(h, u), a !== void 0)
      break;
  }
  return a === void 0 ? n : t ? Y(a, ...Array.isArray(t) ? t : [t]) : a;
}
function du(s, e, t, n) {
  return J(void 0, s, e, t, n);
}
J.addLang = Ol;
J.getLang = du;
J.getCode = hu;
J.setCode = uu;
Ol({
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
function Hl(...s) {
  const e = [], t = /* @__PURE__ */ new Map(), n = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = t.get(i);
    typeof r == "number" ? e[r][1] = !!o : (t.set(i, e.length), e.push([i, !!o]));
  };
  return s.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Hl(...i).forEach(n) : i && typeof i == "object" ? Object.entries(i).forEach(n) : typeof i == "string" && i.split(" ").forEach((o) => n(o, !0));
  }), e.sort((i, o) => (t.get(i[0]) || 0) - (t.get(o[0]) || 0));
}
const R = (...s) => Hl(...s).reduce((e, [t, n]) => (n && e.push(t), e), []).join(" ");
g.classes = R;
g.fn.setClass = function(s, ...e) {
  return this.each((t, n) => {
    const i = g(n);
    s === !0 ? i.attr("class", R(i.attr("class"), ...e)) : i.addClass(R(s, ...e));
  });
};
const Mn = /* @__PURE__ */ new WeakMap();
function Bl(s, e, t) {
  const n = Mn.has(s), i = n ? Mn.get(s) : {};
  typeof e == "string" ? i[e] = t : e === null ? Object.keys(i).forEach((o) => {
    delete i[o];
  }) : Object.assign(i, e), Object.keys(i).forEach((o) => {
    i[o] === void 0 && delete i[o];
  }), Object.keys(i).length ? (!n && s instanceof Element && Object.assign(i, g(s).dataset(), i), Mn.set(s, i)) : Mn.delete(s);
}
function Wl(s, e, t) {
  let n = Mn.get(s) || {};
  return !t && s instanceof Element && (n = Object.assign({}, g(s).dataset(), n)), e === void 0 ? n : n[e];
}
g.fn.dataset = g.fn.data;
g.fn.data = function(...s) {
  if (!this.length)
    return;
  const [e, t] = s;
  return !s.length || s.length === 1 && typeof e == "string" ? Wl(this[0], e) : this.each((n, i) => Bl(i, e, t));
};
g.fn.removeData = function(s = null) {
  return this.each((e, t) => Bl(t, s));
};
g.fn._attr = g.fn.attr;
g.fn.extend({
  attr(...s) {
    const [e, t] = s;
    return !s.length || s.length === 1 && typeof e == "string" ? this._attr.apply(this, s) : typeof e == "object" ? (e && Object.keys(e).forEach((n) => {
      const i = e[n];
      i === null ? this.removeAttr(n) : this._attr(n, i);
    }), this) : t === null ? this.removeAttr(e) : this._attr(e, t);
  }
});
g.Event = (s, e) => {
  const [t, ...n] = s.split("."), i = new Event(t, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = n.join("."), i.___ot = t, i.___td = e, i;
};
const ci = (s, e) => new Promise((t) => {
  const n = window.setTimeout(t, s);
  e && e(n);
}), ti = /* @__PURE__ */ new Map();
function hi(s) {
  const { zui: e } = window;
  return ti.size || Object.keys(e).forEach((t) => {
    const n = e[t];
    !n.NAME || !n.ZUI || ti.set(t.toLowerCase(), n);
  }), s ? ti.get(s.toLowerCase()) : void 0;
}
function fu(s, e, t) {
  const n = hi(s);
  return n ? new n(e, t) : null;
}
function Af(s) {
  if (s) {
    const e = hi(s);
    e && e.defineFn();
  } else
    hi(), ti.forEach((e) => {
      e.defineFn();
    });
}
g.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const e = g(this).dataset(), t = e.zui;
    delete e.zui, fu(t, this, e);
  }), this;
};
g.fn.zui = function(s, e) {
  const t = this[0];
  if (!t)
    return;
  if (typeof s != "string") {
    const i = Wl(t, void 0, !0), o = {};
    let r;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        o[a] = l, (!r || r.gid < l.gid) && (r = o[a]);
      }
    }), s === !0 ? o : r;
  }
  const n = hi(s);
  if (n)
    return e === !0 ? n.getAll(t) : n.query(t, e);
};
g(() => {
  g("body").zuiInit();
});
function qr(s, e) {
  const t = g(s)[0];
  if (!t)
    return !1;
  let { viewport: n } = e || {};
  const { left: i, top: o, width: r, height: a } = t.getBoundingClientRect();
  if (!n) {
    const { innerHeight: y, innerWidth: w } = window, { clientHeight: v, clientWidth: b } = document.documentElement;
    n = { left: 0, top: 0, width: w || b, height: y || v };
  }
  const { left: l, top: h, width: u, height: c } = n;
  if (e != null && e.fullyCheck)
    return i >= l && o >= h && i + r <= u && o + a <= c;
  const d = i <= u && i + r >= l;
  return o <= c && o + a >= h && d;
}
g.fn.isVisible = function(s) {
  return this.each((e, t) => {
    qr(t, s);
  });
};
function Yr(s, e, t = !1) {
  const n = g(s);
  if (e !== void 0) {
    if (e.length) {
      const i = `zui-runjs-${g.guid++}`;
      n.append(`<script id="${i}">${e}<\/script>`), t && n.find(`#${i}`).remove();
    }
    return;
  }
  n.find("script").each((i, o) => {
    Yr(n, o.innerHTML), o.remove();
  });
}
g.runJS = (s, ...e) => (s = s.trim(), !s.startsWith("return ") && !s.endsWith(";") && (s = `return ${s}`), new Function(...e.map(([n]) => n), s)(...e.map(([, n]) => n)));
g.fn.runJS = function(s) {
  return this.each((e, t) => {
    Yr(t, s);
  });
};
function zl(s, e) {
  const t = g(s), { ifNeeded: n = !0, ...i } = e || {};
  return t.each((o, r) => {
    n && qr(r, { viewport: r.getBoundingClientRect() }) || r.scrollIntoView(i);
  }), t;
}
g.fn.scrollIntoView = function(s) {
  return this.each((e, t) => {
    zl(t, s);
  });
};
g.getScript = function(s, e, t) {
  return new Promise((n) => {
    const i = g(`script[src="${s}"]`), o = () => {
      n(), t == null || t();
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
      o(), (g(r).dataset("loaded", !0).data("loadCalls") || []).forEach((l) => l()), g(r).removeData("loadCalls");
    }, r.src = s, g("head").append(r);
  });
};
const If = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: qr,
  runJS: Yr,
  scrollIntoView: zl
}, Symbol.toStringTag, { value: "Module" }));
var zo, F, Fl, Z, ue, wa, jl, ur, Ve = {}, Vl = [], pu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Kr = Array.isArray;
function te(s, e) {
  for (var t in e)
    s[t] = e[t];
  return s;
}
function Ul(s) {
  var e = s.parentNode;
  e && e.removeChild(s);
}
function U(s, e, t) {
  var n, i, o, r = {};
  for (o in e)
    o == "key" ? n = e[o] : o == "ref" ? i = e[o] : r[o] = e[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? zo.call(arguments, 2) : t), typeof s == "function" && s.defaultProps != null)
    for (o in s.defaultProps)
      r[o] === void 0 && (r[o] = s.defaultProps[o]);
  return ei(s, r, n, i, null);
}
function ei(s, e, t, n, i) {
  var o = { type: s, props: e, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Fl };
  return i == null && F.vnode != null && F.vnode(o), o;
}
function K() {
  return { current: null };
}
function En(s) {
  return s.children;
}
function W(s, e) {
  this.props = s, this.context = e;
}
function ui(s, e) {
  if (e == null)
    return s.__ ? ui(s.__, s.__.__k.indexOf(s) + 1) : null;
  for (var t; e < s.__k.length; e++)
    if ((t = s.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof s.type == "function" ? ui(s) : null;
}
function ql(s) {
  var e, t;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, e = 0; e < s.__k.length; e++)
      if ((t = s.__k[e]) != null && t.__e != null) {
        s.__e = s.__c.base = t.__e;
        break;
      }
    return ql(s);
  }
}
function ba(s) {
  (!s.__d && (s.__d = !0) && ue.push(s) && !di.__r++ || wa !== F.debounceRendering) && ((wa = F.debounceRendering) || jl)(di);
}
function di() {
  var s, e, t, n, i, o, r, a, l;
  for (ue.sort(ur); s = ue.shift(); )
    s.__d && (e = ue.length, n = void 0, i = void 0, o = void 0, a = (r = (t = s).__v).__e, (l = t.__P) && (n = [], i = [], (o = te({}, r)).__v = r.__v + 1, Xr(l, r, o, t.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, n, a ?? ui(r), r.__h, i), Gl(n, r, i), r.__e != a && ql(r)), ue.length > e && ue.sort(ur));
  di.__r = 0;
}
function Yl(s, e, t, n, i, o, r, a, l, h, u) {
  var c, d, f, y, w, v, b, x, $, k, S = 0, N = n && n.__k || Vl, L = N.length, I = L, D = e.length;
  for (t.__k = [], c = 0; c < D; c++)
    (y = t.__k[c] = (y = e[c]) == null || typeof y == "boolean" || typeof y == "function" ? null : typeof y == "string" || typeof y == "number" || typeof y == "bigint" ? ei(null, y, null, null, y) : Kr(y) ? ei(En, { children: y }, null, null, null) : y.__b > 0 ? ei(y.type, y.props, y.key, y.ref ? y.ref : null, y.__v) : y) != null && (y.__ = t, y.__b = t.__b + 1, (x = mu(y, N, b = c + S, I)) === -1 ? f = Ve : (f = N[x] || Ve, N[x] = void 0, I--), Xr(s, y, f, i, o, r, a, l, h, u), w = y.__e, (d = y.ref) && f.ref != d && (f.ref && Gr(f.ref, null, y), u.push(d, y.__c || w, y)), w != null && (v == null && (v = w), k = !($ = f === Ve || f.__v === null) && x === b, $ ? x == -1 && S-- : x !== b && (x === b + 1 ? (S++, k = !0) : x > b ? I > D - b ? (S += x - b, k = !0) : S-- : S = x < b && x == b - 1 ? x - b : 0), b = c + S, k = k || x == c && !$, typeof y.type != "function" || x === b && f.__k !== y.__k ? typeof y.type == "function" || k ? y.__d !== void 0 ? (l = y.__d, y.__d = void 0) : l = w.nextSibling : l = Xl(s, w, l) : l = Kl(y, l, s), typeof t.type == "function" && (t.__d = l)));
  for (t.__e = v, c = L; c--; )
    N[c] != null && (typeof t.type == "function" && N[c].__e != null && N[c].__e == t.__d && (t.__d = N[c].__e.nextSibling), Zl(N[c], N[c]));
}
function Kl(s, e, t) {
  for (var n, i = s.__k, o = 0; i && o < i.length; o++)
    (n = i[o]) && (n.__ = s, e = typeof n.type == "function" ? Kl(n, e, t) : Xl(t, n.__e, e));
  return e;
}
function Xl(s, e, t) {
  return t == null || t.parentNode !== s ? s.insertBefore(e, null) : e == t && e.parentNode != null || s.insertBefore(e, t), e.nextSibling;
}
function mu(s, e, t, n) {
  var i = s.key, o = s.type, r = t - 1, a = t + 1, l = e[t];
  if (l === null || l && i == l.key && o === l.type)
    return t;
  if (n > (l != null ? 1 : 0))
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
function gu(s, e, t, n, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in e || fi(s, o, null, t[o], n);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === e[o] || fi(s, o, e[o], t[o], n);
}
function va(s, e, t) {
  e[0] === "-" ? s.setProperty(e, t ?? "") : s[e] = t == null ? "" : typeof t != "number" || pu.test(e) ? t : t + "px";
}
function fi(s, e, t, n, i) {
  var o;
  t:
    if (e === "style")
      if (typeof t == "string")
        s.style.cssText = t;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (e in n)
            t && e in t || va(s.style, e, "");
        if (t)
          for (e in t)
            n && t[e] === n[e] || va(s.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in s ? e.toLowerCase().slice(2) : e.slice(2), s.l || (s.l = {}), s.l[e + o] = t, t ? n || s.addEventListener(e, o ? xa : _a, o) : s.removeEventListener(e, o ? xa : _a, o);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e in s)
        try {
          s[e] = t ?? "";
          break t;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && e[4] !== "-" ? s.removeAttribute(e) : s.setAttribute(e, t));
    }
}
function _a(s) {
  return this.l[s.type + !1](F.event ? F.event(s) : s);
}
function xa(s) {
  return this.l[s.type + !0](F.event ? F.event(s) : s);
}
function Xr(s, e, t, n, i, o, r, a, l, h) {
  var u, c, d, f, y, w, v, b, x, $, k, S, N, L, I, D = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (l = t.__h, a = e.__e = t.__e, e.__h = null, o = [a]), (u = F.__b) && u(e);
  try {
    t:
      if (typeof D == "function") {
        if (b = e.props, x = (u = D.contextType) && n[u.__c], $ = u ? x ? x.props.value : u.__ : n, t.__c ? v = (c = e.__c = t.__c).__ = c.__E : ("prototype" in D && D.prototype.render ? e.__c = c = new D(b, $) : (e.__c = c = new W(b, $), c.constructor = D, c.render = wu), x && x.sub(c), c.props = b, c.state || (c.state = {}), c.context = $, c.__n = n, d = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), D.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = te({}, c.__s)), te(c.__s, D.getDerivedStateFromProps(b, c.__s))), f = c.props, y = c.state, c.__v = e, d)
          D.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (D.getDerivedStateFromProps == null && b !== f && c.componentWillReceiveProps != null && c.componentWillReceiveProps(b, $), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(b, c.__s, $) === !1 || e.__v === t.__v)) {
            for (e.__v !== t.__v && (c.props = b, c.state = c.__s, c.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(O) {
              O && (O.__ = e);
            }), k = 0; k < c._sb.length; k++)
              c.__h.push(c._sb[k]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(b, c.__s, $), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(f, y, w);
          });
        }
        if (c.context = $, c.props = b, c.__P = s, c.__e = !1, S = F.__r, N = 0, "prototype" in D && D.prototype.render) {
          for (c.state = c.__s, c.__d = !1, S && S(e), u = c.render(c.props, c.state, c.context), L = 0; L < c._sb.length; L++)
            c.__h.push(c._sb[L]);
          c._sb = [];
        } else
          do
            c.__d = !1, S && S(e), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++N < 25);
        c.state = c.__s, c.getChildContext != null && (n = te(te({}, n), c.getChildContext())), d || c.getSnapshotBeforeUpdate == null || (w = c.getSnapshotBeforeUpdate(f, y)), Yl(s, Kr(I = u != null && u.type === En && u.key == null ? u.props.children : u) ? I : [I], e, t, n, i, o, r, a, l, h), c.base = e.__e, e.__h = null, c.__h.length && r.push(c), v && (c.__E = c.__ = null);
      } else
        o == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = yu(t.__e, e, t, n, i, o, r, l, h);
    (u = F.diffed) && u(e);
  } catch (O) {
    e.__v = null, (l || o != null) && (e.__e = a, e.__h = !!l, o[o.indexOf(a)] = null), F.__e(O, e, t);
  }
}
function Gl(s, e, t) {
  for (var n = 0; n < t.length; n++)
    Gr(t[n], t[++n], t[++n]);
  F.__c && F.__c(e, s), s.some(function(i) {
    try {
      s = i.__h, i.__h = [], s.some(function(o) {
        o.call(i);
      });
    } catch (o) {
      F.__e(o, i.__v);
    }
  });
}
function yu(s, e, t, n, i, o, r, a, l) {
  var h, u, c, d = t.props, f = e.props, y = e.type, w = 0;
  if (y === "svg" && (i = !0), o != null) {
    for (; w < o.length; w++)
      if ((h = o[w]) && "setAttribute" in h == !!y && (y ? h.localName === y : h.nodeType === 3)) {
        s = h, o[w] = null;
        break;
      }
  }
  if (s == null) {
    if (y === null)
      return document.createTextNode(f);
    s = i ? document.createElementNS("http://www.w3.org/2000/svg", y) : document.createElement(y, f.is && f), o = null, a = !1;
  }
  if (y === null)
    d === f || a && s.data === f || (s.data = f);
  else {
    if (o = o && zo.call(s.childNodes), u = (d = t.props || Ve).dangerouslySetInnerHTML, c = f.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (d = {}, w = 0; w < s.attributes.length; w++)
          d[s.attributes[w].name] = s.attributes[w].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === s.innerHTML) || (s.innerHTML = c && c.__html || ""));
    }
    if (gu(s, f, d, i, a), c)
      e.__k = [];
    else if (Yl(s, Kr(w = e.props.children) ? w : [w], e, t, n, i && y !== "foreignObject", o, r, o ? o[0] : t.__k && ui(t, 0), a, l), o != null)
      for (w = o.length; w--; )
        o[w] != null && Ul(o[w]);
    a || ("value" in f && (w = f.value) !== void 0 && (w !== s.value || y === "progress" && !w || y === "option" && w !== d.value) && fi(s, "value", w, d.value, !1), "checked" in f && (w = f.checked) !== void 0 && w !== s.checked && fi(s, "checked", w, d.checked, !1));
  }
  return s;
}
function Gr(s, e, t) {
  try {
    typeof s == "function" ? s(e) : s.current = e;
  } catch (n) {
    F.__e(n, t);
  }
}
function Zl(s, e, t) {
  var n, i;
  if (F.unmount && F.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || Gr(n, null, e)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (o) {
        F.__e(o, e);
      }
    n.base = n.__P = null, s.__c = void 0;
  }
  if (n = s.__k)
    for (i = 0; i < n.length; i++)
      n[i] && Zl(n[i], e, t || typeof s.type != "function");
  t || s.__e == null || Ul(s.__e), s.__ = s.__e = s.__d = void 0;
}
function wu(s, e, t) {
  return this.constructor(s, t);
}
function Pn(s, e, t) {
  var n, i, o, r;
  F.__ && F.__(s, e), i = (n = typeof t == "function") ? null : t && t.__k || e.__k, o = [], r = [], Xr(e, s = (!n && t || e).__k = U(En, null, [s]), i || Ve, Ve, e.ownerSVGElement !== void 0, !n && t ? [t] : i ? null : e.firstChild ? zo.call(e.childNodes) : null, o, !n && t ? t : i ? i.__e : e.firstChild, n, r), Gl(o, s, r);
}
zo = Vl.slice, F = { __e: function(s, e, t, n) {
  for (var i, o, r; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(s)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), r = i.__d), r)
          return i.__E = i;
      } catch (a) {
        s = a;
      }
  throw s;
} }, Fl = 0, Z = function(s) {
  return s != null && s.constructor === void 0;
}, W.prototype.setState = function(s, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = te({}, this.state), typeof s == "function" && (s = s(te({}, t), this.props)), s && te(t, s), s != null && this.__v && (e && this._sb.push(e), ba(this));
}, W.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), ba(this));
}, W.prototype.render = En, ue = [], jl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ur = function(s, e) {
  return s.__v.__b - e.__v.__b;
}, di.__r = 0;
var Jl = function(s, e, t, n) {
  var i;
  e[0] = 0;
  for (var o = 1; o < e.length; o++) {
    var r = e[o++], a = e[o] ? (e[0] |= r ? 1 : 2, t[e[o++]]) : e[++o];
    r === 3 ? n[0] = a : r === 4 ? n[1] = Object.assign(n[1] || {}, a) : r === 5 ? (n[1] = n[1] || {})[e[++o]] = a : r === 6 ? n[1][e[++o]] += a + "" : r ? (i = s.apply(a, Jl(s, a, t, ["", null])), n.push(i), a[0] ? e[0] |= 2 : (e[o - 2] = 0, e[o] = i)) : n.push(a);
  }
  return n;
}, Ca = /* @__PURE__ */ new Map();
function bu(s) {
  var e = Ca.get(this);
  return e || (e = /* @__PURE__ */ new Map(), Ca.set(this, e)), (e = Jl(this, e.get(s) || (e.set(s, e = function(t) {
    for (var n, i, o = 1, r = "", a = "", l = [0], h = function(d) {
      o === 1 && (d || (r = r.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, d, r) : o === 3 && (d || r) ? (l.push(3, d, r), o = 2) : o === 2 && r === "..." && d ? l.push(4, d, 0) : o === 2 && r && !d ? l.push(5, 0, !0, r) : o >= 5 && ((r || !d && o === 5) && (l.push(o, 0, r, i), o = 6), d && (l.push(o, d, 0, i), o = 6)), r = "";
    }, u = 0; u < t.length; u++) {
      u && (o === 1 && h(), h(u));
      for (var c = 0; c < t[u].length; c++)
        n = t[u][c], o === 1 ? n === "<" ? (h(), l = [l], o = 3) : r += n : o === 4 ? r === "--" && n === ">" ? (o = 1, r = "") : r = n + r[0] : a ? n === a ? a = "" : r += n : n === '"' || n === "'" ? a = n : n === ">" ? (h(), o = 1) : o && (n === "=" ? (o = 5, i = r, r = "") : n === "/" && (o < 5 || t[u][c + 1] === ">") ? (h(), o === 3 && (l = l[0]), o = l, (l = l[0]).push(2, 0, o), o = 0) : n === " " || n === "	" || n === `
` || n === "\r" ? (h(), o = 2) : r += n), o === 3 && r === "!--" && (o = 4, l = l[0]);
    }
    return h(), l;
  }(s)), e), arguments, [])).length > 1 ? e : e[0];
}
const Df = bu.bind(U);
function Ql(s) {
  const { tagName: e = "div", className: t, style: n, children: i, attrs: o, forwardRef: r, ...a } = s;
  return U(e, { ref: r, class: R(t), style: n, ...a, ...o }, i);
}
var vu = 0;
function m(s, e, t, n, i, o) {
  var r, a, l = {};
  for (a in e)
    a == "ref" ? r = e[a] : l[a] = e[a];
  var h = { type: s, props: l, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --vu, __source: i, __self: o };
  if (typeof s == "function" && (r = s.defaultProps))
    for (a in r)
      l[a] === void 0 && (l[a] = r[a]);
  return F.vnode && F.vnode(h), h;
}
var Fn, jn, dr;
class Hs extends W {
  constructor() {
    super(...arguments);
    _(this, jn);
    _(this, Fn, K());
  }
  componentDidMount() {
    A(this, jn, dr).call(this);
  }
  componentDidUpdate(t) {
    this.props.html !== t.html && A(this, jn, dr).call(this);
  }
  render(t) {
    const { executeScript: n, html: i, ...o } = t;
    return /* @__PURE__ */ m(Ql, { forwardRef: p(this, Fn), dangerouslySetInnerHTML: { __html: i }, ...o });
  }
}
Fn = new WeakMap(), jn = new WeakSet(), dr = function() {
  this.props.executeScript && g(p(this, Fn).current).runJS();
};
function _u(s) {
  const {
    tag: e,
    className: t,
    style: n,
    renders: i,
    generateArgs: o = [],
    generatorThis: r,
    generators: a,
    onGenerate: l,
    onRenderItem: h,
    ...u
  } = s, c = [t], d = { ...n }, f = [], y = [];
  return i.forEach((w) => {
    const v = [];
    if (typeof w == "string" && a && a[w] && (w = a[w]), typeof w == "function")
      if (l)
        v.push(...l.call(r, w, f, ...o));
      else {
        const b = w.call(r, f, ...o);
        b && (Array.isArray(b) ? v.push(...b) : v.push(b));
      }
    else
      v.push(w);
    v.forEach((b) => {
      b != null && (typeof b == "object" && !Z(b) && ("html" in b || "__html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b) ? b.html ? f.push(
        /* @__PURE__ */ m("div", { className: R(b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })
      ) : b.__html ? y.push(b.__html) : (b.style && Object.assign(d, b.style), b.className && c.push(b.className), b.children && f.push(b.children), b.attrs && Object.assign(u, b.attrs)) : f.push(b));
    });
  }), y.length && Object.assign(u, { dangerouslySetInnerHTML: { __html: y } }), [{
    className: R(c),
    style: d,
    ...u
  }, f];
}
function fr({
  tag: s = "div",
  ...e
}) {
  const [t, n] = _u(e);
  return U(s, t, ...n);
}
function tc(s, e, t) {
  return typeof s == "function" ? s.call(e, ...t) : Array.isArray(s) ? s.map((n) => tc(n, e, t)) : Z(s) || s === null ? s : typeof s == "object" ? s.html ? /* @__PURE__ */ m(Hs, { ...s }) : /* @__PURE__ */ m(Ql, { ...s }) : s;
}
function Tn(s) {
  const { content: e, generatorThis: t, generatorArgs: n } = s, i = tc(e, t, n);
  return i == null || typeof i == "boolean" ? null : Z(i) ? i : /* @__PURE__ */ m(En, { children: i });
}
const $a = (s) => s.startsWith("icon-") ? s : `icon-${s}`;
function et(s) {
  const { icon: e, className: t, ...n } = s;
  if (!e)
    return null;
  if (Z(e))
    return e;
  const i = ["icon", t];
  if (typeof e == "string")
    i.push($a(e));
  else if (typeof e == "object") {
    const { className: o, icon: r, ...a } = e;
    i.push(o, r ? $a(r) : ""), Object.assign(n, a);
  }
  return /* @__PURE__ */ m("i", { className: R(i), ...n });
}
function xu(s) {
  return this.getChildContext = () => s.context, s.children;
}
function Cu(s) {
  const e = this, t = s._container;
  e.componentWillUnmount = function() {
    Pn(null, e._temp), e._temp = null, e._container = null;
  }, e._container && e._container !== t && e.componentWillUnmount(), s._vnode ? (e._temp || (e._container = t, e._temp = {
    nodeType: 1,
    parentNode: t,
    childNodes: [],
    appendChild(n) {
      this.childNodes.push(n), e._container.appendChild(n);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    insertBefore(n, i) {
      this.childNodes.push(n), e._container.appendChild(n);
    },
    removeChild(n) {
      this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e._container.removeChild(n);
    }
  }), Pn(
    U(xu, { context: e.context }, s._vnode),
    e._temp
  )) : e._temp && e.componentWillUnmount();
}
function $u(s, e) {
  const t = U(Cu, { _vnode: s, _container: e });
  return t.containerInfo = e, t;
}
const ki = class ki {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    this._inited = !1;
    const { KEY: n, DATA_KEY: i, DEFAULT: o, MULTI_INSTANCE: r, NAME: a } = this.constructor;
    if (!a)
      throw new Error('[ZUI] The component must have a "NAME" static property.');
    const l = g(e);
    if (l.data(n) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const h = g.guid++;
    if (this._gid = h, this._element = l[0], l.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), this._options = { ...o, ...l.dataset() }, this.setOptions(t), this._key = this.options.key ?? `__${h}`, l.data(n, this).attr(i, `${h}`), r) {
      const u = `${n}:ALL`;
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
    return g(this.element);
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
    const { KEY: e, DATA_KEY: t, MULTI_INSTANCE: n } = this.constructor, { $element: i } = this;
    if (this.emit("destroyed"), i.off(this.namespace).removeData(e).attr(t, null), n) {
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
    return e && g.extend(this._options, e), this._options;
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(e, ...t) {
    const n = g.Event(e);
    return n.__src = this, this.$emitter.trigger(n, [this, ...t]), n;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(e, t, n) {
    const i = this;
    this.$element[n != null && n.once ? "one" : "on"](this._wrapEvent(e), function(o, r) {
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
  i18n(e, t, n) {
    return J(this.options.i18n, e, t, n, this.options.lang, this.constructor.NAME) ?? J(this.options.i18n, e, t, n, this.options.lang) ?? `{i18n:${e}}`;
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
    const n = g(e);
    if (this.MULTI_INSTANCE && t !== void 0) {
      const i = n.data(`${this.KEY}:ALL`);
      return i ? i.get(t) : void 0;
    }
    return n.data(this.KEY);
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
    const n = this.get(e, t == null ? void 0 : t.key);
    return n ? (t && n.setOptions(t), n) : new this(e, t);
  }
  /**
   * Get all component instances.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        All component instances.
   */
  static getAll(e) {
    const { MULTI_INSTANCE: t, DATA_KEY: n } = this, i = [];
    return g(e || document).find(`[${n}]`).each((o, r) => {
      if (t) {
        const l = g(r).data(`${this.KEY}:ALL`);
        if (l) {
          i.push(...l.values());
          return;
        }
      }
      const a = g(r).data(this.KEY);
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
    return e === void 0 ? this.getAll().sort((n, i) => n.gid - i.gid)[0] : this.get(g(e).closest(`[${this.DATA_KEY}]`), t);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(e) {
    let t = e || this.ZUI;
    g.fn[t] && (t = `zui${this.NAME}`);
    const n = this;
    g.fn.extend({
      [t](i, ...o) {
        const r = typeof i == "object" ? i : void 0, a = typeof i == "string" ? i : void 0;
        let l;
        return this.each((h, u) => {
          let c = n.get(u);
          if (c ? r && c.render(r) : c = new n(u, r), a) {
            let d = c[a], f = c;
            d === void 0 && (f = c.$, d = f[a]), typeof d == "function" ? l = d.call(f, ...o) : l = d;
          }
        }), l !== void 0 ? l : this;
      }
    });
  }
};
ki.DEFAULT = {}, ki.MULTI_INSTANCE = !1;
let ht = ki;
class j extends ht {
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
    Pn(
      U(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(e)
      }),
      this.element
    );
  }
}
function Su({
  component: s = "div",
  className: e,
  children: t,
  style: n,
  attrs: i
}) {
  return U(s, {
    className: R(e),
    style: n,
    ...i
  }, t);
}
function ec({
  type: s,
  component: e = "a",
  className: t,
  children: n,
  content: i,
  attrs: o,
  url: r,
  disabled: a,
  active: l,
  icon: h,
  text: u,
  target: c,
  trailingIcon: d,
  hint: f,
  checked: y,
  onClick: w,
  data: v,
  ...b
}) {
  const x = [
    typeof y == "boolean" ? /* @__PURE__ */ m("div", { class: `checkbox-primary${y ? " checked" : ""}`, children: /* @__PURE__ */ m("label", {}) }) : null,
    /* @__PURE__ */ m(et, { icon: h }),
    /* @__PURE__ */ m("span", { className: "text", children: u }),
    /* @__PURE__ */ m(Tn, { content: i }),
    n,
    /* @__PURE__ */ m(et, { icon: d })
  ];
  return U(e, {
    className: R(t, { disabled: a, active: l }),
    title: f,
    [e === "a" ? "href" : "data-url"]: r,
    [e === "a" ? "target" : "data-target"]: c,
    onClick: w,
    ...b,
    ...o
  }, ...x);
}
function ku({
  component: s = "div",
  className: e,
  text: t,
  attrs: n,
  children: i,
  content: o,
  style: r,
  onClick: a
}) {
  return U(s, {
    className: R(e),
    style: r,
    onClick: a,
    ...n
  }, t, /* @__PURE__ */ m(Tn, { content: o }), i);
}
function Eu({
  component: s = "div",
  className: e,
  style: t,
  space: n,
  flex: i,
  attrs: o,
  onClick: r,
  children: a
}) {
  return U(s, {
    className: R(e),
    style: { width: n, height: n, flex: i, ...t },
    onClick: r,
    ...o
  }, a);
}
function Tu({ type: s, ...e }) {
  return /* @__PURE__ */ m(fr, { ...e });
}
function nc({
  component: s = "div",
  className: e,
  children: t,
  content: n,
  style: i,
  attrs: o
}) {
  return U(s, {
    className: R(e),
    style: i,
    ...o
  }, /* @__PURE__ */ m(Tn, { content: n }), t);
}
var It;
let Fo = (It = class extends W {
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
    var t, n;
    (n = (t = this.props).afterRender) == null || n.call(t, { menu: this, firstRender: e });
  }
  handleItemClick(e, t, n, i) {
    n && n.call(i.target, i, e, t);
    const { onClickItem: o } = this.props;
    o && o({ menu: this, item: e, index: t, event: i });
  }
  beforeRender() {
    var n;
    const e = { ...this.props };
    typeof e.items == "function" && (e.items = e.items(this)), e.items || (e.items = []);
    const t = (n = e.beforeRender) == null ? void 0 : n.call(e, { menu: this, options: e });
    return t && Object.assign(e, t), e;
  }
  getItemRenderProps(e, t, n) {
    const { commonItemProps: i, onClickItem: o, itemRenderProps: r } = e;
    let a = { ...t };
    return i && Object.assign(a, i[t.type || "item"]), (o || t.onClick) && (a.onClick = this.handleItemClick.bind(this, a, n, t.onClick)), a.className = R(a.className), r && (a = r(a)), a;
  }
  renderItem(e, t, n) {
    if (!t)
      return null;
    const i = this.getItemRenderProps(e, t, n), { itemRender: o } = e;
    if (o) {
      if (typeof o == "object") {
        const w = o[t.type || "item"];
        if (w)
          return /* @__PURE__ */ m(w, { ...i });
      } else if (typeof o == "function") {
        const w = o.call(this, i, U);
        if (Z(w))
          return w;
        typeof w == "object" && Object.assign(i, w);
      }
    }
    const { type: r = "item", component: a, key: l = n, rootAttrs: h, rootClass: u, rootStyle: c, rootChildren: d, ...f } = i;
    if (r === "html")
      return /* @__PURE__ */ m(
        "li",
        {
          className: R("action-menu-item", `${this.name}-html`, u, f.className),
          ...h,
          style: c || f.style,
          dangerouslySetInnerHTML: { __html: f.html }
        },
        l
      );
    const y = !a || typeof a == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || It.ItemComponents[r] : a;
    return Object.assign(f, {
      type: r,
      component: typeof a == "string" ? a : void 0
    }), e.checkbox && r === "item" && f.checked === void 0 && (f.checked = !!f.active), this.renderTypedItem(y, {
      className: R(u),
      children: d,
      style: c,
      key: l,
      ...h
    }, {
      ...f,
      type: r,
      component: typeof a == "string" ? a : void 0
    });
  }
  renderTypedItem(e, t, n) {
    const { children: i, className: o, key: r, ...a } = t;
    return /* @__PURE__ */ m(
      "li",
      {
        className: R(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, o),
        ...a,
        children: [
          /* @__PURE__ */ m(e, { ...n }),
          typeof i == "function" ? i() : i
        ]
      },
      r
    );
  }
  render() {
    const e = this.beforeRender(), {
      name: t,
      style: n,
      commonItemProps: i,
      className: o,
      items: r,
      children: a,
      itemRender: l,
      onClickItem: h,
      beforeRender: u,
      afterRender: c,
      beforeDestroy: d,
      ...f
    } = e, y = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ m(y, { class: R(this.name, o), style: n, ...f, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, e)),
      a
    ] });
  }
}, It.ItemComponents = {
  divider: Su,
  item: ec,
  heading: ku,
  space: Eu,
  custom: Tu,
  basic: nc
}, It.ROOT_TAG = "menu", It.NAME = "action-menu", It);
const Ei = class Ei extends j {
};
Ei.NAME = "ActionMenu", Ei.Component = Fo;
let Sa = Ei;
function Nu({
  items: s,
  show: e,
  level: t,
  ...n
}) {
  return /* @__PURE__ */ m(ec, { ...n });
}
var Vn, gt, Xe, Un;
let Zr = (Un = class extends Fo {
  constructor(t) {
    super(t);
    _(this, Vn, /* @__PURE__ */ new Set());
    _(this, gt, void 0);
    _(this, Xe, (t, n, i) => {
      g(i.target).closest(".not-nested-toggle").length || (this.toggle(t, n), i.preventDefault());
    });
    C(this, gt, t.nestedShow === void 0), p(this, gt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const t = super.beforeRender(), { nestedShow: n, nestedTrigger: i, defaultNestedShow: o, controlledMenu: r, indent: a, ...l } = t;
    return typeof l.items == "function" && (l.items = l.items(this)), l.items || (l.items = []), l.items.some((h) => h.items) || (l.className = R(l.className, "no-nested-items")), !r && a && (l.style = Object.assign({
      [`--${this.name}-indent`]: `${a}px`
    }, l.style)), l;
  }
  getNestedMenuProps(t) {
    const { name: n, controlledMenu: i, nestedShow: o, beforeDestroy: r, beforeRender: a, itemRender: l, onClickItem: h, afterRender: u, commonItemProps: c, level: d, itemRenderProps: f } = this.props;
    return {
      items: t,
      name: n,
      nestedShow: p(this, gt) ? this.state.nestedShow : o,
      nestedTrigger: this.nestedTrigger,
      controlledMenu: i || this,
      commonItemProps: c,
      onClickItem: h,
      afterRender: u,
      beforeRender: a,
      beforeDestroy: r,
      itemRender: l,
      itemRenderProps: f,
      level: (d || 0) + 1
    };
  }
  renderNestedMenu(t) {
    let { items: n } = t;
    if (!n || (typeof n == "function" && (n = n(t, this)), !n.length))
      return;
    const i = this.constructor, o = this.getNestedMenuProps(n);
    return /* @__PURE__ */ m(i, { ...o, "data-level": o.level });
  }
  isNestedItem(t) {
    return (!t.type || t.type === "item") && !!t.items;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renderToggleIcon(t, n) {
  }
  getItemRenderProps(t, n, i) {
    const o = super.getItemRenderProps(t, n, i);
    if (o.level = t.level || 0, !this.isNestedItem(o))
      return o;
    const r = o.key ?? o.id ?? `${t.level || 0}:${i}`;
    p(this, Vn).add(r);
    const a = this.isExpanded(r);
    if (a && (o.rootChildren = [
      o.rootChildren,
      this.renderNestedMenu(n)
    ]), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: p(this, Xe).bind(this, r, !0),
        onMouseLeave: p(this, Xe).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = o;
      o.onClick = (u) => {
        p(this, Xe).call(this, r, void 0, u), h == null || h(u);
      };
    }
    const l = this.renderToggleIcon(a, o);
    return l && (o.children = [o.children, l]), o.show = a, o.rootClass = [o.rootClass, "has-nested-menu", a ? "show" : ""], o;
  }
  isExpanded(t) {
    const n = p(this, gt) ? this.state.nestedShow : this.props.nestedShow;
    return n && typeof n == "object" ? n[t] : !!n;
  }
  toggle(t, n) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggle(t, n);
    if (!p(this, gt))
      return !1;
    let { nestedShow: o = {} } = this.state;
    if (typeof o == "boolean" && (o === !0 ? o = [...p(this, Vn).values()].reduce((r, a) => (r[a] = !0, r), {}) : o = {}), n === void 0)
      n = !o[t];
    else if (!!o[t] == !!n)
      return !1;
    return n ? o[t] = n : delete o[t], this.setState({ nestedShow: { ...o } }), !0;
  }
  expand(t) {
    return this.toggle(t, !0);
  }
  collapse(t) {
    return this.toggle(t, !1);
  }
  expandAll() {
    p(this, gt) && this.setState({ nestedShow: !0 });
  }
  collapseAll() {
    p(this, gt) && this.setState({ nestedShow: !1 });
  }
}, Vn = new WeakMap(), gt = new WeakMap(), Xe = new WeakMap(), Un.ItemComponents = {
  item: Nu
}, Un);
const Ti = class Ti extends j {
};
Ti.NAME = "ActionMenuNested", Ti.Component = Zr;
let ka = Ti;
var qn;
let Ie = (qn = class extends Zr {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const e = super.beforeRender();
    let { hasIcons: t } = e;
    return t === void 0 && (t = e.items.some((n) => n.icon)), e.className = R(e.className, this.menuName, {
      "has-icons": t,
      "has-nested-items": e.items.some((n) => this.isNestedItem(n)),
      popup: e.popup
    }), e;
  }
  renderToggleIcon(e) {
    return /* @__PURE__ */ m("span", { class: `${this.name}-toggle-icon caret-${e ? "down" : "right"}` });
  }
}, qn.NAME = "menu", qn);
const Ni = class Ni extends j {
};
Ni.NAME = "Menu", Ni.Component = Ie;
let Ea = Ni;
class tt extends W {
  render() {
    const {
      component: e,
      type: t,
      btnType: n,
      size: i,
      className: o,
      children: r,
      url: a,
      target: l,
      disabled: h,
      active: u,
      loading: c,
      loadingIcon: d,
      loadingText: f,
      icon: y,
      text: w,
      trailingIcon: v,
      caret: b,
      square: x,
      rounded: $ = !0,
      hint: k,
      ...S
    } = this.props, N = e || (a ? "a" : "button"), L = w == null || typeof w == "string" && !w.length || c && !f, I = b && L && !y && !v && !r && !c;
    return U(
      N,
      {
        className: R("btn", t, o, {
          "btn-caret": I,
          disabled: h || c,
          active: u,
          loading: c,
          square: x === void 0 ? !I && !r && L : x
        }, i ? `size-${i}` : "", typeof $ == "string" ? $ : { rounded: $ }),
        title: k,
        [N === "a" ? "href" : "data-url"]: a,
        [N === "a" ? "target" : "data-target"]: l,
        type: N === "button" ? n : void 0,
        ...S
      },
      c ? /* @__PURE__ */ m(et, { icon: d || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ m(et, { icon: y }),
      L ? null : /* @__PURE__ */ m("span", { className: "text", children: c ? f : w }),
      c ? null : r,
      c ? null : /* @__PURE__ */ m(et, { icon: v }),
      c ? null : b ? /* @__PURE__ */ m("span", { className: typeof b == "string" ? `caret-${b}` : "caret" }) : null
    );
  }
}
function Mu({
  key: s,
  type: e,
  btnType: t,
  ...n
}) {
  return /* @__PURE__ */ m(tt, { type: t, ...n });
}
function Bs(s) {
  return s.split("-")[1];
}
function Jr(s) {
  return s === "y" ? "height" : "width";
}
function Me(s) {
  return s.split("-")[0];
}
function Ws(s) {
  return ["top", "bottom"].includes(Me(s)) ? "x" : "y";
}
function Ta(s, e, t) {
  let { reference: n, floating: i } = s;
  const o = n.x + n.width / 2 - i.width / 2, r = n.y + n.height / 2 - i.height / 2, a = Ws(e), l = Jr(a), h = n[l] / 2 - i[l] / 2, u = a === "x";
  let c;
  switch (Me(e)) {
    case "top":
      c = { x: o, y: n.y - i.height };
      break;
    case "bottom":
      c = { x: o, y: n.y + n.height };
      break;
    case "right":
      c = { x: n.x + n.width, y: r };
      break;
    case "left":
      c = { x: n.x - i.width, y: r };
      break;
    default:
      c = { x: n.x, y: n.y };
  }
  switch (Bs(e)) {
    case "start":
      c[a] -= h * (t && u ? -1 : 1);
      break;
    case "end":
      c[a] += h * (t && u ? -1 : 1);
  }
  return c;
}
const Ru = async (s, e, t) => {
  const { placement: n = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let h = await r.getElementRects({ reference: s, floating: e, strategy: i }), { x: u, y: c } = Ta(h, n, l), d = n, f = {}, y = 0;
  for (let w = 0; w < a.length; w++) {
    const { name: v, fn: b } = a[w], { x, y: $, data: k, reset: S } = await b({ x: u, y: c, initialPlacement: n, placement: d, strategy: i, middlewareData: f, rects: h, platform: r, elements: { reference: s, floating: e } });
    u = x ?? u, c = $ ?? c, f = { ...f, [v]: { ...f[v], ...k } }, S && y <= 50 && (y++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (h = S.rects === !0 ? await r.getElementRects({ reference: s, floating: e, strategy: i }) : S.rects), { x: u, y: c } = Ta(h, d, l)), w = -1);
  }
  return { x: u, y: c, placement: d, strategy: i, middlewareData: f };
};
function zs(s, e) {
  return typeof s == "function" ? s(e) : s;
}
function sc(s) {
  return typeof s != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(s) : { top: s, right: s, bottom: s, left: s };
}
function pi(s) {
  return { ...s, top: s.y, left: s.x, right: s.x + s.width, bottom: s.y + s.height };
}
async function ic(s, e) {
  var t;
  e === void 0 && (e = {});
  const { x: n, y: i, platform: o, rects: r, elements: a, strategy: l } = s, { boundary: h = "clippingAncestors", rootBoundary: u = "viewport", elementContext: c = "floating", altBoundary: d = !1, padding: f = 0 } = zs(e, s), y = sc(f), w = a[d ? c === "floating" ? "reference" : "floating" : c], v = pi(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(w))) == null || t ? w : w.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)), boundary: h, rootBoundary: u, strategy: l })), b = c === "floating" ? { ...r.floating, x: n, y: i } : r.reference, x = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), $ = await (o.isElement == null ? void 0 : o.isElement(x)) && await (o.getScale == null ? void 0 : o.getScale(x)) || { x: 1, y: 1 }, k = pi(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: b, offsetParent: x, strategy: l }) : b);
  return { top: (v.top - k.top + y.top) / $.y, bottom: (k.bottom - v.bottom + y.bottom) / $.y, left: (v.left - k.left + y.left) / $.x, right: (k.right - v.right + y.right) / $.x };
}
const pr = Math.min, Lu = Math.max;
function mr(s, e, t) {
  return Lu(s, pr(e, t));
}
const mi = (s) => ({ name: "arrow", options: s, async fn(e) {
  const { x: t, y: n, placement: i, rects: o, platform: r, elements: a } = e, { element: l, padding: h = 0 } = zs(s, e) || {};
  if (l == null)
    return {};
  const u = sc(h), c = { x: t, y: n }, d = Ws(i), f = Jr(d), y = await r.getDimensions(l), w = d === "y", v = w ? "top" : "left", b = w ? "bottom" : "right", x = w ? "clientHeight" : "clientWidth", $ = o.reference[f] + o.reference[d] - c[d] - o.floating[f], k = c[d] - o.reference[d], S = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l));
  let N = S ? S[x] : 0;
  N && await (r.isElement == null ? void 0 : r.isElement(S)) || (N = a.floating[x] || o.floating[f]);
  const L = $ / 2 - k / 2, I = N / 2 - y[f] / 2 - 1, D = pr(u[v], I), O = pr(u[b], I), P = D, M = N - y[f] - O, E = N / 2 - y[f] / 2 + L, H = mr(P, E, M), B = Bs(i) != null && E != H && o.reference[f] / 2 - (E < P ? D : O) - y[f] / 2 < 0 ? E < P ? P - E : M - E : 0;
  return { [d]: c[d] - B, data: { [d]: H, centerOffset: E - H + B } };
} }), Au = ["top", "right", "bottom", "left"];
Au.reduce((s, e) => s.concat(e, e + "-start", e + "-end"), []);
const Iu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function gi(s) {
  return s.replace(/left|right|bottom|top/g, (e) => Iu[e]);
}
function Du(s, e, t) {
  t === void 0 && (t = !1);
  const n = Bs(s), i = Ws(s), o = Jr(i);
  let r = i === "x" ? n === (t ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[o] > e.floating[o] && (r = gi(r)), { main: r, cross: gi(r) };
}
const Pu = { start: "end", end: "start" };
function tr(s) {
  return s.replace(/start|end/g, (e) => Pu[e]);
}
const Fs = function(s) {
  return s === void 0 && (s = {}), { name: "flip", options: s, async fn(e) {
    var t;
    const { placement: n, middlewareData: i, rects: o, initialPlacement: r, platform: a, elements: l } = e, { mainAxis: h = !0, crossAxis: u = !0, fallbackPlacements: c, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: y = !0, ...w } = zs(s, e), v = Me(n), b = Me(r) === r, x = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = c || (b || !y ? [gi(r)] : function(P) {
      const M = gi(P);
      return [tr(P), M, tr(M)];
    }(r));
    c || f === "none" || $.push(...function(P, M, E, H) {
      const B = Bs(P);
      let z = function(G, he, Ys) {
        const Nn = ["left", "right"], Ks = ["right", "left"], Xo = ["top", "bottom"], wh = ["bottom", "top"];
        switch (G) {
          case "top":
          case "bottom":
            return Ys ? he ? Ks : Nn : he ? Nn : Ks;
          case "left":
          case "right":
            return he ? Xo : wh;
          default:
            return [];
        }
      }(Me(P), E === "start", H);
      return B && (z = z.map((G) => G + "-" + B), M && (z = z.concat(z.map(tr)))), z;
    }(r, y, f, x));
    const k = [r, ...$], S = await ic(e, w), N = [];
    let L = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (h && N.push(S[v]), u) {
      const { main: P, cross: M } = Du(n, o, x);
      N.push(S[P], S[M]);
    }
    if (L = [...L, { placement: n, overflows: N }], !N.every((P) => P <= 0)) {
      var I, D;
      const P = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, M = k[P];
      if (M)
        return { data: { index: P, overflows: L }, reset: { placement: M } };
      let E = (D = L.filter((H) => H.overflows[0] <= 0).sort((H, B) => H.overflows[1] - B.overflows[1])[0]) == null ? void 0 : D.placement;
      if (!E)
        switch (d) {
          case "bestFit": {
            var O;
            const H = (O = L.map((B) => [B.placement, B.overflows.filter((z) => z > 0).reduce((z, G) => z + G, 0)]).sort((B, z) => B[1] - z[1])[0]) == null ? void 0 : O[0];
            H && (E = H);
            break;
          }
          case "initialPlacement":
            E = r;
        }
      if (n !== E)
        return { reset: { placement: E } };
    }
    return {};
  } };
}, js = function(s) {
  return s === void 0 && (s = 0), { name: "offset", options: s, async fn(e) {
    const { x: t, y: n } = e, i = await async function(o, r) {
      const { placement: a, platform: l, elements: h } = o, u = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), c = Me(a), d = Bs(a), f = Ws(a) === "x", y = ["left", "top"].includes(c) ? -1 : 1, w = u && f ? -1 : 1, v = zs(r, o);
      let { mainAxis: b, crossAxis: x, alignmentAxis: $ } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return d && typeof $ == "number" && (x = d === "end" ? -1 * $ : $), f ? { x: x * w, y: b * y } : { x: b * y, y: x * w };
    }(e, s);
    return { x: t + i.x, y: n + i.y, data: i };
  } };
};
function Ou(s) {
  return s === "x" ? "y" : "x";
}
const On = function(s) {
  return s === void 0 && (s = {}), { name: "shift", options: s, async fn(e) {
    const { x: t, y: n, placement: i } = e, { mainAxis: o = !0, crossAxis: r = !1, limiter: a = { fn: (v) => {
      let { x: b, y: x } = v;
      return { x: b, y: x };
    } }, ...l } = zs(s, e), h = { x: t, y: n }, u = await ic(e, l), c = Ws(Me(i)), d = Ou(c);
    let f = h[c], y = h[d];
    if (o) {
      const v = c === "y" ? "bottom" : "right";
      f = mr(f + u[c === "y" ? "top" : "left"], f, f - u[v]);
    }
    if (r) {
      const v = d === "y" ? "bottom" : "right";
      y = mr(y + u[d === "y" ? "top" : "left"], y, y - u[v]);
    }
    const w = a.fn({ ...e, [c]: f, [d]: y });
    return { ...w, data: { x: w.x - t, y: w.y - n } };
  } };
};
function ot(s) {
  var e;
  return (s == null || (e = s.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Tt(s) {
  return ot(s).getComputedStyle(s);
}
function oc(s) {
  return s instanceof ot(s).Node;
}
function ie(s) {
  return oc(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function ft(s) {
  return s instanceof HTMLElement || s instanceof ot(s).HTMLElement;
}
function Na(s) {
  return typeof ShadowRoot < "u" && (s instanceof ot(s).ShadowRoot || s instanceof ShadowRoot);
}
function Hn(s) {
  const { overflow: e, overflowX: t, overflowY: n, display: i } = Tt(s);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + t) && !["inline", "contents"].includes(i);
}
function Hu(s) {
  return ["table", "td", "th"].includes(ie(s));
}
function gr(s) {
  const e = Qr(), t = Tt(s);
  return t.transform !== "none" || t.perspective !== "none" || !!t.containerType && t.containerType !== "normal" || !e && !!t.backdropFilter && t.backdropFilter !== "none" || !e && !!t.filter && t.filter !== "none" || ["transform", "perspective", "filter"].some((n) => (t.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (t.contain || "").includes(n));
}
function Qr() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function jo(s) {
  return ["html", "body", "#document"].includes(ie(s));
}
const yr = Math.min, Ue = Math.max, yi = Math.round, Xs = Math.floor, oe = (s) => ({ x: s, y: s });
function rc(s) {
  const e = Tt(s);
  let t = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const i = ft(s), o = i ? s.offsetWidth : t, r = i ? s.offsetHeight : n, a = yi(t) !== o || yi(n) !== r;
  return a && (t = o, n = r), { width: t, height: n, $: a };
}
function Dt(s) {
  return s instanceof Element || s instanceof ot(s).Element;
}
function ta(s) {
  return Dt(s) ? s : s.contextElement;
}
function qe(s) {
  const e = ta(s);
  if (!ft(e))
    return oe(1);
  const t = e.getBoundingClientRect(), { width: n, height: i, $: o } = rc(e);
  let r = (o ? yi(t.width) : t.width) / n, a = (o ? yi(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
const Bu = oe(0);
function ac(s) {
  const e = ot(s);
  return Qr() && e.visualViewport ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop } : Bu;
}
function De(s, e, t, n) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const i = s.getBoundingClientRect(), o = ta(s);
  let r = oe(1);
  e && (n ? Dt(n) && (r = qe(n)) : r = qe(s));
  const a = function(d, f, y) {
    return f === void 0 && (f = !1), !(!y || f && y !== ot(d)) && f;
  }(o, t, n) ? ac(o) : oe(0);
  let l = (i.left + a.x) / r.x, h = (i.top + a.y) / r.y, u = i.width / r.x, c = i.height / r.y;
  if (o) {
    const d = ot(o), f = n && Dt(n) ? ot(n) : n;
    let y = d.frameElement;
    for (; y && n && f !== d; ) {
      const w = qe(y), v = y.getBoundingClientRect(), b = getComputedStyle(y), x = v.left + (y.clientLeft + parseFloat(b.paddingLeft)) * w.x, $ = v.top + (y.clientTop + parseFloat(b.paddingTop)) * w.y;
      l *= w.x, h *= w.y, u *= w.x, c *= w.y, l += x, h += $, y = ot(y).frameElement;
    }
  }
  return pi({ width: u, height: c, x: l, y: h });
}
function Vo(s) {
  return Dt(s) ? { scrollLeft: s.scrollLeft, scrollTop: s.scrollTop } : { scrollLeft: s.pageXOffset, scrollTop: s.pageYOffset };
}
function Pt(s) {
  var e;
  return (e = (oc(s) ? s.ownerDocument : s.document) || window.document) == null ? void 0 : e.documentElement;
}
function lc(s) {
  return De(Pt(s)).left + Vo(s).scrollLeft;
}
function Cn(s) {
  if (ie(s) === "html")
    return s;
  const e = s.assignedSlot || s.parentNode || Na(s) && s.host || Pt(s);
  return Na(e) ? e.host : e;
}
function cc(s) {
  const e = Cn(s);
  return jo(e) ? s.ownerDocument ? s.ownerDocument.body : s.body : ft(e) && Hn(e) ? e : cc(e);
}
function wi(s, e) {
  var t;
  e === void 0 && (e = []);
  const n = cc(s), i = n === ((t = s.ownerDocument) == null ? void 0 : t.body), o = ot(n);
  return i ? e.concat(o, o.visualViewport || [], Hn(n) ? n : []) : e.concat(n, wi(n));
}
function Ma(s, e, t) {
  let n;
  if (e === "viewport")
    n = function(i, o) {
      const r = ot(i), a = Pt(i), l = r.visualViewport;
      let h = a.clientWidth, u = a.clientHeight, c = 0, d = 0;
      if (l) {
        h = l.width, u = l.height;
        const f = Qr();
        (!f || f && o === "fixed") && (c = l.offsetLeft, d = l.offsetTop);
      }
      return { width: h, height: u, x: c, y: d };
    }(s, t);
  else if (e === "document")
    n = function(i) {
      const o = Pt(i), r = Vo(i), a = i.ownerDocument.body, l = Ue(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), h = Ue(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
      let u = -r.scrollLeft + lc(i);
      const c = -r.scrollTop;
      return Tt(a).direction === "rtl" && (u += Ue(o.clientWidth, a.clientWidth) - l), { width: l, height: h, x: u, y: c };
    }(Pt(s));
  else if (Dt(e))
    n = function(i, o) {
      const r = De(i, !0, o === "fixed"), a = r.top + i.clientTop, l = r.left + i.clientLeft, h = ft(i) ? qe(i) : oe(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(e, t);
  else {
    const i = ac(s);
    n = { ...e, x: e.x - i.x, y: e.y - i.y };
  }
  return pi(n);
}
function hc(s, e) {
  const t = Cn(s);
  return !(t === e || !Dt(t) || jo(t)) && (Tt(t).position === "fixed" || hc(t, e));
}
function Wu(s, e, t) {
  const n = ft(e), i = Pt(e), o = t === "fixed", r = De(s, !0, o, e);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = oe(0);
  if (n || !n && !o)
    if ((ie(e) !== "body" || Hn(i)) && (a = Vo(e)), ft(e)) {
      const h = De(e, !0, o, e);
      l.x = h.x + e.clientLeft, l.y = h.y + e.clientTop;
    } else
      i && (l.x = lc(i));
  return { x: r.left + a.scrollLeft - l.x, y: r.top + a.scrollTop - l.y, width: r.width, height: r.height };
}
function Ra(s, e) {
  return ft(s) && Tt(s).position !== "fixed" ? e ? e(s) : s.offsetParent : null;
}
function La(s, e) {
  const t = ot(s);
  if (!ft(s))
    return t;
  let n = Ra(s, e);
  for (; n && Hu(n) && Tt(n).position === "static"; )
    n = Ra(n, e);
  return n && (ie(n) === "html" || ie(n) === "body" && Tt(n).position === "static" && !gr(n)) ? t : n || function(i) {
    let o = Cn(i);
    for (; ft(o) && !jo(o); ) {
      if (gr(o))
        return o;
      o = Cn(o);
    }
    return null;
  }(s) || t;
}
const zu = { convertOffsetParentRelativeRectToViewportRelativeRect: function(s) {
  let { rect: e, offsetParent: t, strategy: n } = s;
  const i = ft(t), o = Pt(t);
  if (t === o)
    return e;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = oe(1);
  const l = oe(0);
  if ((i || !i && n !== "fixed") && ((ie(t) !== "body" || Hn(o)) && (r = Vo(t)), ft(t))) {
    const h = De(t);
    a = qe(t), l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
  }
  return { width: e.width * a.x, height: e.height * a.y, x: e.x * a.x - r.scrollLeft * a.x + l.x, y: e.y * a.y - r.scrollTop * a.y + l.y };
}, getDocumentElement: Pt, getClippingRect: function(s) {
  let { element: e, boundary: t, rootBoundary: n, strategy: i } = s;
  const o = [...t === "clippingAncestors" ? function(l, h) {
    const u = h.get(l);
    if (u)
      return u;
    let c = wi(l).filter((w) => Dt(w) && ie(w) !== "body"), d = null;
    const f = Tt(l).position === "fixed";
    let y = f ? Cn(l) : l;
    for (; Dt(y) && !jo(y); ) {
      const w = Tt(y), v = gr(y);
      v || w.position !== "fixed" || (d = null), (f ? !v && !d : !v && w.position === "static" && d && ["absolute", "fixed"].includes(d.position) || Hn(y) && !v && hc(l, y)) ? c = c.filter((b) => b !== y) : d = w, y = Cn(y);
    }
    return h.set(l, c), c;
  }(e, this._c) : [].concat(t), n], r = o[0], a = o.reduce((l, h) => {
    const u = Ma(e, h, i);
    return l.top = Ue(u.top, l.top), l.right = yr(u.right, l.right), l.bottom = yr(u.bottom, l.bottom), l.left = Ue(u.left, l.left), l;
  }, Ma(e, r, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, getOffsetParent: La, getElementRects: async function(s) {
  let { reference: e, floating: t, strategy: n } = s;
  const i = this.getOffsetParent || La, o = this.getDimensions;
  return { reference: Wu(e, await i(t), n), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: function(s) {
  return Array.from(s.getClientRects());
}, getDimensions: function(s) {
  return rc(s);
}, getScale: qe, isElement: Dt, isRTL: function(s) {
  return getComputedStyle(s).direction === "rtl";
} };
function Uo(s, e, t, n) {
  n === void 0 && (n = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = n, h = ta(s), u = i || o ? [...h ? wi(h) : [], ...wi(e)] : [];
  u.forEach((v) => {
    i && v.addEventListener("scroll", t, { passive: !0 }), o && v.addEventListener("resize", t);
  });
  const c = h && a ? function(v, b) {
    let x, $ = null;
    const k = Pt(v);
    function S() {
      clearTimeout(x), $ && $.disconnect(), $ = null;
    }
    return function N(L, I) {
      L === void 0 && (L = !1), I === void 0 && (I = 1), S();
      const { left: D, top: O, width: P, height: M } = v.getBoundingClientRect();
      if (L || b(), !P || !M)
        return;
      const E = { rootMargin: -Xs(O) + "px " + -Xs(k.clientWidth - (D + P)) + "px " + -Xs(k.clientHeight - (O + M)) + "px " + -Xs(D) + "px", threshold: Ue(0, yr(1, I)) || 1 };
      let H = !0;
      function B(z) {
        const G = z[0].intersectionRatio;
        if (G !== I) {
          if (!H)
            return N();
          G ? N(!1, G) : x = setTimeout(() => {
            N(!1, 1e-7);
          }, 100);
        }
        H = !1;
      }
      try {
        $ = new IntersectionObserver(B, { ...E, root: k.ownerDocument });
      } catch {
        $ = new IntersectionObserver(B, E);
      }
      $.observe(v);
    }(!0), S;
  }(h, t) : null;
  let d, f = -1, y = null;
  r && (y = new ResizeObserver((v) => {
    let [b] = v;
    b && b.target === h && y && (y.unobserve(e), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      y && y.observe(e);
    })), t();
  }), h && !l && y.observe(h), y.observe(e));
  let w = l ? De(s) : null;
  return l && function v() {
    const b = De(s);
    !w || b.x === w.x && b.y === w.y && b.width === w.width && b.height === w.height || t(), w = b, d = requestAnimationFrame(v);
  }(), t(), () => {
    u.forEach((v) => {
      i && v.removeEventListener("scroll", t), o && v.removeEventListener("resize", t);
    }), c && c(), y && y.disconnect(), y = null, l && cancelAnimationFrame(d);
  };
}
const Vs = (s, e, t) => {
  const n = /* @__PURE__ */ new Map(), i = { platform: zu, ...t }, o = { ...i.platform, _c: n };
  return Ru(s, e, { ...i, platform: o });
};
var Ge, Yn;
let Fu = (Yn = class extends Ie {
  constructor() {
    super(...arguments);
    _(this, Ge, 0);
  }
  get nestedTrigger() {
    return this.props.nestedTrigger || "hover";
  }
  get name() {
    return "menu";
  }
  get menuName() {
    return "menu-context";
  }
  layout() {
    const t = this.ref.current, n = t == null ? void 0 : t.parentElement;
    !t || !n || Vs(n, t, {
      placement: "right-start",
      middleware: [Fs(), On(), js(1)]
    }).then(({ x: i, y: o }) => {
      g(t).css({
        left: i,
        top: o
      });
    });
  }
  getNestedMenuProps(t) {
    const n = super.getNestedMenuProps(t);
    return {
      ...n,
      className: R("absolute", n.className),
      popup: !0
    };
  }
  afterRender(t) {
    super.afterRender(t), this.props.controlledMenu && (this.layout(), C(this, Ge, window.setTimeout(this.layout.bind(this), 100)));
  }
  renderToggleIcon() {
    return /* @__PURE__ */ m("span", { class: "contextmenu-toggle-icon caret-right" });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), p(this, Ge) && clearTimeout(p(this, Ge));
  }
}, Ge = new WeakMap(), Yn.defaultProps = {
  ...Ie.defaultProps,
  popup: !0
}, Yn);
const er = "show", ju = '[data-toggle="contextmenu"]';
var Mt, Ze, Kn, Xn, Mi, uc, Ri, dc;
const ze = class ze extends ht {
  constructor() {
    super(...arguments);
    _(this, Mi);
    _(this, Ri);
    _(this, Mt, void 0);
    _(this, Ze, void 0);
    _(this, Kn, void 0);
    _(this, Xn, void 0);
  }
  get isShown() {
    return p(this, Mt) && g(p(this, Mt)).hasClass(er);
  }
  get menu() {
    return p(this, Mt) || this.ensureMenu();
  }
  get trigger() {
    return p(this, Kn) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { $element: t } = this;
    !t.is("body") && !t.attr("data-toggle") && t.attr("data-toggle", this.constructor.NAME.toLowerCase());
  }
  afterInit() {
    super.afterInit(), this.on("hidden", () => {
      this.options.destoryOnHide && this.isDynamic && this.destroy();
    });
  }
  show(t) {
    return this.isShown || (C(this, Kn, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (g(this.menu).addClass(er), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var n;
    return !this.isShown || ((n = p(this, Xn)) == null || n.call(this), this.emit("hide").defaultPrevented) ? !1 : (g(p(this, Mt)).removeClass(er), this.emit("hidden"), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), this.hide(), (t = p(this, Mt)) == null || t.remove();
  }
  ensureMenu() {
    const { $element: t } = this, n = this.constructor.MENU_CLASS;
    let i;
    if (this.isDynamic)
      i = g(`<div class="${n}" />`).appendTo("body");
    else if (t.length) {
      const o = t.attr("href") || t.dataset("target") || "";
      if (o[0] === "#" && (i = g(document).find(o)), !(i != null && i.length)) {
        const r = t.next();
        r.hasClass(n) ? i = r : i = t.parent().find(`.${n}`);
      }
      i && i.addClass("popup");
    }
    if (!(i != null && i.length))
      throw new Error("[ZUI] ContextMenu: Cannot find menu element.");
    return i.css({
      width: "max-content",
      position: this.options.strategy,
      top: 0,
      left: 0
    }), C(this, Mt, i[0]), i[0];
  }
  getPopperOptions() {
    var o;
    const { placement: t, strategy: n } = this.options, i = {
      middleware: [],
      placement: t,
      strategy: n
    };
    return this.options.flip && ((o = i.middleware) == null || o.push(Fs())), i;
  }
  createPopper() {
    const t = this.getPopperOptions(), n = this.getPopperElement(), i = this.menu;
    C(this, Xn, Uo(n, i, () => {
      Vs(n, i, t).then(({ x: o, y: r, middlewareData: a, placement: l }) => {
        if (g(i).css({ left: o, top: r }), a.arrow && this.arrowEl) {
          const h = l.split("-")[0], u = A(this, Mi, uc).call(this, h), { x: c, y: d } = a.arrow;
          g(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: d != null ? `${d}px` : "",
            [u]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...A(this, Ri, dc).call(this, h)
          });
        }
      });
    }));
  }
  getMenuOptions() {
    const { menu: t, items: n } = this.options;
    let i = n || (t == null ? void 0 : t.items);
    if (i)
      return typeof i == "function" && (i = i(this)), {
        nestedTrigger: "hover",
        ...t,
        items: i
      };
  }
  renderMenu() {
    const t = this.getMenuOptions();
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (Pn(U(Fu, t), this.menu), !0);
  }
  getPopperElement() {
    return p(this, Ze) || C(this, Ze, {
      getBoundingClientRect: () => {
        const { trigger: t } = this;
        if (t instanceof MouseEvent) {
          const { clientX: n, clientY: i } = t;
          return {
            width: 0,
            height: 0,
            top: i,
            right: n,
            bottom: i,
            left: n
          };
        }
        return t instanceof HTMLElement ? t.getBoundingClientRect() : t;
      },
      contextElement: this.element
    }), p(this, Ze);
  }
  static clear(t) {
    var l, h;
    t instanceof Event && (t = { event: t });
    const { event: n, exclude: i, ignoreSelector: o = ".not-hide-menu" } = t || {};
    if (n && o && ((h = (l = n.target).closest) != null && h.call(l, o)) || n && n.button === 2)
      return;
    const r = this.getAll(), a = new Set(i || []);
    for (const u of r)
      a.has(u.element) || u.hide();
  }
  static show(t) {
    const { event: n, ...i } = t, o = this.ensure(document.body);
    return o.setOptions(i), o.show(n), n instanceof Event && n.stopPropagation(), o;
  }
  static hide(t) {
    const n = this.query(t);
    return n == null || n.hide(), n;
  }
};
Mt = new WeakMap(), Ze = new WeakMap(), Kn = new WeakMap(), Xn = new WeakMap(), Mi = new WeakSet(), uc = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}, Ri = new WeakSet(), dc = function(t) {
  const n = {
    bottom: "Right",
    top: "Left",
    left: "Bottom",
    right: "Top"
  };
  return {
    [`border${t[0].toUpperCase()}${t.substring(1)}Style`]: "none",
    [`border${n[t]}Style`]: "none"
  };
}, ze.MENU_CLASS = "contextmenu", ze.NAME = "ContextMenu", ze.MULTI_INSTANCE = !0, ze.DEFAULT = {
  placement: "bottom-start",
  strategy: "absolute",
  flip: !0,
  preventOverflow: !0,
  destoryOnHide: !0
};
let lt = ze;
g(document).on(`contextmenu${lt.NAMESPACE}`, (s) => {
  const e = g(s.target);
  if (e.closest(`.${lt.MENU_CLASS}`).length)
    return;
  const t = e.closest(ju).not(":disabled,.disabled");
  if (t.length) {
    const n = `${lt.KEY}:options`, i = t.data(n), o = lt.ensure(t, i);
    i || t.data(n, o.options), o.show(s), s.preventDefault();
  }
}).on(`click${lt.NAMESPACE}`, lt.clear.bind(lt));
const Aa = '[data-toggle="dropdown"]';
var pe, me, Je, Li, fc;
const Fe = class Fe extends lt {
  constructor() {
    super(...arguments);
    _(this, Li);
    _(this, pe, void 0);
    _(this, me, void 0);
    _(this, Je, void 0);
    C(this, pe, !1), C(this, me, 0), this.hideLater = () => {
      p(this, Je).call(this), C(this, me, window.setTimeout(this.hide.bind(this), 100));
    }, C(this, Je, () => {
      clearTimeout(p(this, me)), C(this, me, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(t, n) {
    (n == null ? void 0 : n.clearOthers) !== !1 && Fe.clear({ event: n == null ? void 0 : n.event, exclude: [this.element] });
    const i = super.show(t);
    return i && (!p(this, pe) && this.isHover && A(this, Li, fc).call(this), this.$element.addClass(this.elementShowClass)), i;
  }
  hide() {
    const t = super.hide();
    return t && this.$element.removeClass(this.elementShowClass), t;
  }
  toggle(t, n) {
    return this.isShown ? this.hide() : this.show(t, { event: t, ...n });
  }
  destroy() {
    p(this, pe) && g(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: t } = this.options;
    return t ? typeof t == "number" ? t : 8 : 0;
  }
  getPopperOptions() {
    var i, o;
    const t = super.getPopperOptions(), n = this.getArrowSize();
    return n && this.arrowEl && ((i = t.middleware) == null || i.push(js(n)), (o = t.middleware) == null || o.push(mi({ element: this.arrowEl }))), t;
  }
  ensureMenu() {
    const t = super.ensureMenu();
    if (this.options.arrow) {
      const n = this.getArrowSize(), i = g('<div class="arrow-el" />').css({
        position: "absolute",
        width: `${n}px`,
        height: `${n}px`,
        transform: "rotate(45deg)"
      });
      this.arrowEl = i[0];
    }
    return t;
  }
  getMenuOptions() {
    const t = super.getMenuOptions();
    if (t && this.options.arrow) {
      const { afterRender: n } = t;
      t.afterRender = (...i) => {
        this.arrowEl && g(this.menu).find(".menu").each((o, r) => {
          g(r).find(".arrow-el").length === 0 && g(r).parent().hasClass("dropdown-menu") && g(r).append(this.arrowEl);
        }), n == null || n(...i);
      };
    }
    return t;
  }
};
pe = new WeakMap(), me = new WeakMap(), Je = new WeakMap(), Li = new WeakSet(), fc = function() {
  g(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, p(this, Je)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), C(this, pe, !0);
}, Fe.MENU_CLASS = "dropdown-menu", Fe.NAME = "Dropdown", Fe.DEFAULT = {
  ...lt.DEFAULT,
  trigger: "click"
};
let ne = Fe;
const Gs = `${ne.KEY}:options`;
g(document).on("click", function(s) {
  const e = g(s.target).closest(Aa).not(":disabled,.disabled");
  if (!e.length) {
    ne.clear({ event: s });
    return;
  }
  const t = e.data(Gs), n = ne.ensure(e, t);
  t || e.data(Gs, n.options), n.options.trigger === "click" && n.toggle();
}).on("mouseover", function(s) {
  const e = g(s.target).closest(Aa);
  if (!e.length)
    return;
  const t = e.data(Gs), n = ne.ensure(e, t);
  t || e.data(Gs, n.options), n.isHover && n.show();
});
let Zs = 0;
window.addEventListener("scroll", (s) => {
  Zs && clearTimeout(Zs), Zs = window.setTimeout(() => {
    ne.clear({ event: s }), Zs = 0;
  }, 50);
}, !0);
var Gn, Qe;
class Vu extends W {
  constructor(t) {
    var n;
    super(t);
    _(this, Gn, void 0);
    _(this, Qe, K());
    this.state = { placement: ((n = t.dropdown) == null ? void 0 : n.placement) || "", show: !1 };
  }
  get ref() {
    return p(this, Qe);
  }
  get triggerElement() {
    return p(this, Qe).current;
  }
  componentDidMount() {
    const { items: t } = this.props, { modifiers: n = [], ...i } = this.props.dropdown || {};
    n.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: o }) => {
        var a;
        const r = ((a = o.placement) == null ? void 0 : a.split("-").shift()) || "";
        this.setState({ placement: r });
      }
    }), C(this, Gn, ne.ensure(this.triggerElement, {
      items: t,
      ...i,
      modifiers: n,
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
    (t = p(this, Gn)) == null || t.destroy();
  }
  beforeRender() {
    const { className: t, children: n, dropdown: i, items: o, ...r } = this.props;
    return {
      className: R("dropdown", t),
      children: typeof n == "function" ? n(this.state) : n,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: p(this, Qe)
    };
  }
  render() {
    const { children: t, ...n } = this.beforeRender();
    return /* @__PURE__ */ m("div", { ...n, children: t });
  }
}
Gn = new WeakMap(), Qe = new WeakMap();
class pc extends Vu {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var o;
    const { placement: e, show: t } = this.state, n = this.beforeRender();
    let { caret: i = !0 } = n;
    if (i !== !1 && (t || i === !0)) {
      const r = (t ? e : (o = this.props.dropdown) == null ? void 0 : o.placement) || "";
      i = (r.includes("top") ? "up" : r.includes("bottom") ? "down" : r) || (typeof i == "string" ? i : "") || "down";
    }
    return n.caret = i, /* @__PURE__ */ m(tt, { ...n });
  }
}
function mc({
  key: s,
  type: e,
  btnType: t,
  ...n
}) {
  return /* @__PURE__ */ m(pc, { type: t, ...n });
}
let gc = class extends W {
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
  handleItemClick(e, t, n, i) {
    n && n.call(i.target, i);
    const { onClickItem: o } = this.props;
    o && o.call(this, { item: e, index: t, event: i });
  }
  beforeRender() {
    var n;
    const e = { ...this.props }, t = (n = e.beforeRender) == null ? void 0 : n.call(this, e);
    return t && Object.assign(e, t), typeof e.items == "function" && (e.items = e.items.call(this)), e;
  }
  onRenderItem(e, t) {
    const { key: n = t, ...i } = e, o = e.dropdown || e.items ? pc : tt;
    return /* @__PURE__ */ m(o, { ...i }, n);
  }
  renderItem(e, t, n) {
    const { itemRender: i, btnProps: o, onClickItem: r } = e, a = { key: n, ...t };
    if (o && Object.assign(a, o), r && (a.onClick = this.handleItemClick.bind(this, a, n, t.onClick)), i) {
      const l = i.call(this, a, U);
      if (Z(l))
        return l;
      typeof l == "object" && Object.assign(a, l);
    }
    return this.onRenderItem(a, n);
  }
  render() {
    const e = this.beforeRender(), {
      className: t,
      items: n,
      size: i,
      type: o,
      btnProps: r,
      children: a,
      itemRender: l,
      onClickItem: h,
      beforeRender: u,
      afterRender: c,
      beforeDestroy: d,
      ...f
    } = e;
    return /* @__PURE__ */ m(
      "div",
      {
        className: R("btn-group", i ? `size-${i}` : "", t),
        ...f,
        children: [
          n && n.map(this.renderItem.bind(this, e)),
          a
        ]
      }
    );
  }
};
function Uu({
  key: s,
  type: e,
  btnType: t,
  ...n
}) {
  return /* @__PURE__ */ m(gc, { type: t, ...n });
}
var ee;
let re = (ee = class extends Fo {
  beforeRender() {
    const { gap: e, btnProps: t, wrap: n, ...i } = super.beforeRender();
    return i.className = R(i.className, n ? "flex-wrap" : "", typeof e == "number" ? `gap-${e}` : ""), typeof e == "string" && (i.style ? i.style.gap = e : i.style = { gap: e }), i;
  }
  isBtnItem(e) {
    return e === "item" || e === "dropdown";
  }
  renderTypedItem(e, t, n) {
    const { type: i } = n, o = this.props.btnProps, r = this.isBtnItem(i) ? { btnType: "ghost", ...o } : {}, a = {
      ...t,
      ...r,
      ...n,
      className: R(`${this.name}-${i}`, t.className, r.className, n.className),
      style: Object.assign({}, t.style, r.style, n.style)
    };
    return i === "btn-group" && (a.btnProps = o), /* @__PURE__ */ m(e, { ...a });
  }
}, ee.ItemComponents = {
  item: Mu,
  dropdown: mc,
  "btn-group": Uu
}, ee.ROOT_TAG = "nav", ee.NAME = "toolbar", ee.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
}, ee);
function qu({
  className: s,
  style: e,
  actions: t,
  heading: n,
  content: i,
  contentClass: o,
  children: r,
  close: a,
  onClose: l,
  icon: h,
  ...u
}) {
  let c;
  a === !0 ? c = /* @__PURE__ */ m(tt, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ m("span", { class: "close" }) }) : Z(a) ? c = a : typeof a == "object" && (c = /* @__PURE__ */ m(tt, { ...a, onClick: l }));
  const d = Z(t) ? t : t ? /* @__PURE__ */ m(re, { ...t }) : null;
  return /* @__PURE__ */ m("div", { className: R("alert", s), style: e, ...u, children: [
    /* @__PURE__ */ m(et, { icon: h, className: "alert-icon" }),
    Z(i) ? i : /* @__PURE__ */ m("div", { className: R("alert-content", o), children: [
      Z(n) ? n : n && /* @__PURE__ */ m("div", { className: "alert-heading", children: n }),
      /* @__PURE__ */ m("div", { className: "alert-text", children: i }),
      n ? d : null
    ] }),
    n ? null : d,
    c,
    r
  ] });
}
function Yu(s) {
  if (s === "center")
    return "fade-from-center";
  if (s) {
    if (s.includes("top"))
      return "fade-from-top";
    if (s.includes("bottom"))
      return "fade-from-bottom";
  }
  return "fade";
}
function Ku({
  margin: s,
  type: e,
  placement: t,
  animation: n,
  show: i,
  className: o,
  time: r,
  ...a
}) {
  return /* @__PURE__ */ m(
    qu,
    {
      className: R("messager", o, e, n === !0 ? Yu(t) : n, i ? "in" : ""),
      ...a
    }
  );
}
var Ut, We;
const Ai = class Ai extends j {
  constructor() {
    super(...arguments);
    _(this, Ut);
    this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
      t && this.show();
      const { margin: n } = this.options;
      n && this.$element.css("margin", `${n}px`);
    };
  }
  get isShown() {
    return this._show;
  }
  afterInit() {
    this.on("click", (t) => {
      g(t.target).closest('.alert-close,[data-dismiss="messager"]').length && (t.preventDefault(), t.stopPropagation(), this.hide());
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
    this.render(), this.emit("show"), A(this, Ut, We).call(this, () => {
      this._show = !0, this.render(), A(this, Ut, We).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && A(this, Ut, We).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && A(this, Ut, We).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), A(this, Ut, We).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
};
Ut = new WeakSet(), We = function(t, n = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    t(), this._showTimer = 0;
  }, n);
}, Ai.NAME = "MessagerItem", Ai.Component = Ku;
let wr = Ai;
var ge, yt, Ii, yc, Di, wc;
const In = class In extends ht {
  constructor() {
    super(...arguments);
    _(this, Ii);
    _(this, Di);
    _(this, ge, void 0);
    _(this, yt, void 0);
  }
  get isShown() {
    var t;
    return !!((t = p(this, yt)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), A(this, Ii, yc).call(this).show();
  }
  hide() {
    var t;
    (t = p(this, yt)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: n, ...i } = t, o = In.ensure(n || "body");
    return o.setOptions(i), o.hide(), o.show(), o;
  }
};
ge = new WeakMap(), yt = new WeakMap(), Ii = new WeakSet(), yc = function() {
  if (p(this, yt))
    p(this, yt).setOptions(this.options);
  else {
    const t = A(this, Di, wc).call(this), n = new wr(t, this.options);
    n.on("hidden", () => {
      n.destroy(), t == null || t.remove(), C(this, ge, void 0), C(this, yt, void 0);
    }), C(this, yt, n);
  }
  return p(this, yt);
}, Di = new WeakSet(), wc = function() {
  if (p(this, ge))
    return p(this, ge);
  const { placement: t = "top" } = this.options;
  let n = this.$element.find(`.messagers-${t}`);
  n.length || (n = g(`<div class="messagers messagers-${t}"></div>`).appendTo(this.$element));
  let i = n.find(`#messager-${this.gid}`);
  return i.length || (i = g(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(n), C(this, ge, i[0])), i[0];
}, In.NAME = "messager", In.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
let Ia = In;
var Zn;
let Xu = (Zn = class extends W {
  render(e) {
    const { percent: t = 50, size: n = 24, circleBg: i, circleColor: o, text: r, className: a, textStyle: l, textX: h, textY: u } = e, c = n / 2;
    let { circleWidth: d = 0.2 } = e;
    d < 1 && (d = n * d);
    const f = (n - d) / 2;
    return /* @__PURE__ */ m("svg", { className: a, width: n, height: n, children: [
      /* @__PURE__ */ m("circle", { cx: c, cy: c, r: f, "stroke-width": d, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ m("circle", { cx: c, cy: c, r: f, "stroke-width": d, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * f * 2, "stroke-dashoffset": Math.PI * f * 2 * (100 - t) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      r ? /* @__PURE__ */ m("text", { x: h ?? c, y: u ?? c + d / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${f}px` }, children: r === !0 ? Math.round(t) : r }) : null
    ] });
  }
}, Zn.defaultProps = {
  percent: 50,
  size: 24,
  circleWidth: 0.1,
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
}, Zn);
const Pi = class Pi extends j {
};
Pi.NAME = "ProgressCircle", Pi.Component = Xu;
let Da = Pi;
var Rt;
class Gu {
  constructor(e = "") {
    _(this, Rt, void 0);
    typeof e == "object" ? C(this, Rt, e) : C(this, Rt, document.appendChild(document.createComment(e)));
  }
  on(e, t, n) {
    p(this, Rt).addEventListener(e, t, n);
  }
  once(e, t, n) {
    p(this, Rt).addEventListener(e, t, { once: !0, ...n });
  }
  off(e, t, n) {
    p(this, Rt).removeEventListener(e, t, n);
  }
  emit(e) {
    return p(this, Rt).dispatchEvent(e), e;
  }
}
Rt = new WeakMap();
const Pa = /* @__PURE__ */ new Set([
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
class bc extends Gu {
  on(e, t, n) {
    super.on(e, t, n);
  }
  off(e, t, n) {
    super.off(e, t, n);
  }
  once(e, t, n) {
    super.once(e, t, n);
  }
  emit(e, t) {
    return typeof e == "string" && (Pa.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), super.emit(bc.createEvent(e, t));
  }
  static createEvent(e, t) {
    return typeof e == "string" && (Pa.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), e;
  }
}
let vc = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
const nr = "```ZUI_STR\n";
var Jn, ye, tn, wt, en, nn, ni;
const oa = class oa {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, t = "local") {
    _(this, nn);
    _(this, Jn, void 0);
    _(this, ye, void 0);
    _(this, tn, void 0);
    _(this, wt, void 0);
    _(this, en, void 0);
    C(this, Jn, t), C(this, tn, e ?? vc()), C(this, ye, `ZUI_STORE:${p(this, tn)}`), C(this, wt, t === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return p(this, Jn);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (p(this, en) || C(this, en, new oa(p(this, tn), "session")), p(this, en));
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(e, t) {
    const n = p(this, wt).getItem(A(this, nn, ni).call(this, e));
    if (typeof n == "string") {
      if (n.startsWith(nr))
        return n.substring(nr.length);
      try {
        return JSON.parse(n);
      } catch {
      }
    }
    return n ?? t;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(e, t) {
    if (t == null)
      return this.remove(e);
    p(this, wt).setItem(A(this, nn, ni).call(this, e), typeof t == "string" ? `${nr}${t}` : JSON.stringify(t));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    p(this, wt).removeItem(A(this, nn, ni).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let t = 0; t < p(this, wt).length; t++) {
      const n = p(this, wt).key(t);
      if (n != null && n.startsWith(p(this, ye))) {
        const i = p(this, wt).getItem(n);
        typeof i == "string" && e(n.substring(p(this, ye).length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const e = {};
    return this.each((t, n) => {
      e[t] = n;
    }), e;
  }
};
Jn = new WeakMap(), ye = new WeakMap(), tn = new WeakMap(), wt = new WeakMap(), en = new WeakMap(), nn = new WeakSet(), ni = function(e) {
  return `${p(this, ye)}:${e}`;
};
let bi = oa;
const Rn = new bi("DEFAULT");
function Zu(s, e = "local") {
  return new bi(s, e);
}
Object.assign(Rn, { create: Zu });
function Ju(s) {
  if (s.indexOf("#") === 0 && (s = s.slice(1)), s.length === 3 && (s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2]), s.length !== 6)
    throw new Error(`Invalid HEX color "${s}".`);
  return [
    parseInt(s.slice(0, 2), 16),
    // r
    parseInt(s.slice(2, 4), 16),
    // g
    parseInt(s.slice(4, 6), 16)
    // b
  ];
}
function Qu(s) {
  const [e, t, n] = typeof s == "string" ? Ju(s) : s;
  return e * 0.299 + t * 0.587 + n * 0.114 > 186;
}
function Oa(s, e) {
  return Qu(s) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function Ha(s, e = 255) {
  return Math.min(Math.max(s, 0), e);
}
function td(s, e, t) {
  s = s % 360 / 360, e = Ha(e), t = Ha(t);
  const n = t <= 0.5 ? t * (e + 1) : t + e - t * e, i = t * 2 - n, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (n - i) * r * 6 : r * 2 < 1 ? n : r * 3 < 2 ? i + (n - i) * (2 / 3 - r) * 6 : i);
  return [
    o(s + 1 / 3) * 255,
    o(s) * 255,
    o(s - 1 / 3) * 255
  ];
}
function ed(s) {
  let e = 0;
  if (typeof s != "string" && (s = String(s)), s && s.length)
    for (let t = 0; t < s.length; ++t)
      e += (t + 1) * s.charCodeAt(t);
  return e;
}
function nd(s, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(s) ? s.length <= e ? s : s.substring(s.length - e) : /^[A-Za-z\d\s]+$/.test(s) ? s[0].toUpperCase() : s.length <= e ? s : s.substring(0, e);
}
let _c = class extends W {
  render() {
    const {
      className: e,
      style: t,
      size: n = "",
      circle: i,
      rounded: o,
      background: r,
      foreColor: a,
      text: l,
      code: h,
      maxTextLength: u = 2,
      src: c,
      hueDistance: d = 43,
      saturation: f = 0.4,
      lightness: y = 0.6,
      children: w,
      ...v
    } = this.props, b = ["avatar", e], x = { ...t, background: r, color: a };
    let $ = 32;
    n && (typeof n == "number" ? (x.width = `${n}px`, x.height = `${n}px`, x.fontSize = `${Math.max(12, Math.round(n / 2))}px`, $ = n) : (b.push(`size-${n}`), $ = { xs: 20, sm: 24, lg: 48, xl: 80 }[n])), i ? b.push("circle") : o && (typeof o == "number" ? x.borderRadius = `${o}px` : b.push(`rounded-${o}`));
    let k;
    if (c)
      b.push("has-img"), k = /* @__PURE__ */ m("img", { className: "avatar-img", src: c, alt: l });
    else if (l != null && l.length) {
      const S = nd(l, u);
      if (b.push("has-text", `has-text-${S.length}`), r)
        !a && r && (x.color = Oa(r));
      else {
        const L = h ?? l, I = (typeof L == "number" ? L : ed(L)) * d % 360;
        if (x.background = `hsl(${I},${f * 100}%,${y * 100}%)`, !a) {
          const D = td(I, f, y);
          x.color = Oa(D);
        }
      }
      let N;
      $ && $ < 14 * S.length && (N = { transform: `scale(${$ / (14 * S.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ m("div", { "data-actualSize": $, className: "avatar-text", style: N, children: S });
    }
    return /* @__PURE__ */ m(
      "div",
      {
        className: R(b),
        style: x,
        ...v,
        children: [
          k,
          w
        ]
      }
    );
  }
};
const Oi = class Oi extends j {
};
Oi.NAME = "Avatar", Oi.Component = _c;
let Ba = Oi;
const Hi = class Hi extends j {
};
Hi.NAME = "BtnGroup", Hi.Component = gc;
let Wa = Hi;
const br = Symbol("EVENT_PICK");
var sn;
class ea extends W {
  constructor(t) {
    super(t);
    _(this, sn, void 0);
    this._handleClick = this._handleClick.bind(this), C(this, sn, !!g(`#${t.id}`).length);
  }
  get hasInput() {
    return p(this, sn);
  }
  _handleClick(t) {
    const { togglePop: n, clickType: i, onClick: o } = this.props;
    let r = i === "open" ? !0 : void 0;
    const a = g(t.target), l = o == null ? void 0 : o(t);
    if (!t.defaultPrevented) {
      if (typeof l == "boolean")
        r = l;
      else {
        if (a.closest('[data-dismiss="pick"]').length) {
          n(!1);
          return;
        }
        if (a.closest("a,input").length)
          return;
      }
      requestAnimationFrame(() => n(r));
    }
  }
  _getClass(t) {
    const { state: n, className: i } = t, { open: o, disabled: r } = n;
    return R(
      "pick",
      i,
      o && "is-open focus",
      r && "disabled"
    );
  }
  _getProps(t) {
    const { id: n, style: i, attrs: o } = t;
    return {
      id: `pick-${n}`,
      className: this._getClass(t),
      style: i,
      tabIndex: -1,
      onClick: this._handleClick,
      ...o
    };
  }
  _renderTrigger(t) {
    const { children: n, state: i } = t;
    return n ?? i.value;
  }
  _renderValue(t) {
    const { name: n, state: { value: i = "" }, id: o } = t;
    if (n)
      if (p(this, sn))
        g(`#${o}`).val(i);
      else
        return /* @__PURE__ */ m("input", { id: o, type: "hidden", className: "pick-value", name: n, value: i });
    return null;
  }
  componentDidMount() {
    const { id: t, state: n } = this.props;
    g(`#${t}`).on(`change.pick.zui.${t}`, (i, o) => {
      if (o === br)
        return;
      const r = i.target.value;
      r !== n.value && this.props.changeState({ value: r });
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    g(`#${t}`).off(`change.pick.zui.${t}`);
  }
  componentDidUpdate(t) {
    const { id: n, state: i, name: o } = this.props;
    o && t.state.value !== i.value && g(`#${n}`).trigger("change", br);
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
sn = new WeakMap();
var we, bt, qt;
class xc extends W {
  constructor(t) {
    super(t);
    _(this, we, void 0);
    _(this, bt, void 0);
    _(this, qt, void 0);
    C(this, we, K()), this._handleDocClick = (n) => {
      const { state: { open: i }, id: o, togglePop: r } = this.props, a = g(n.target);
      i !== "closing" && !a.closest(`#pick-${o},#pick-pop-${o}`).length && a.parent().length && r(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return g(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var t;
    return (t = p(this, we)) == null ? void 0 : t.current;
  }
  get container() {
    return p(this, qt);
  }
  _handleClick(t) {
    const { togglePop: n } = this.props, i = g(t.target), o = i.closest("[data-pick-value]");
    if (o.length)
      return t.stopPropagation(), n(!1, { value: `${o.dataset("pickValue")}` });
    if (i.closest('[data-dismiss="pick"]').length)
      return n(!1);
  }
  _getClass(t) {
    const { className: n, state: i } = t, { open: o } = i;
    return R(
      "pick-pop",
      n,
      o === !0 && "in"
    );
  }
  _getProps(t) {
    const {
      id: n,
      style: i,
      maxHeight: o,
      maxWidth: r,
      minHeight: a,
      minWidth: l
    } = t, h = g.extend({
      maxHeight: o,
      maxWidth: r,
      minHeight: a,
      minWidth: l
    }, i);
    return {
      id: `pick-pop-${n}`,
      className: this._getClass(t),
      style: h,
      ref: p(this, we),
      onClick: this._handleClick
    };
  }
  _getContainer(t) {
    if (!p(this, qt)) {
      const n = g(t.container || "body");
      let i = n.find(".pick-container");
      i.length || (i = g("<div>").addClass("pick-container").appendTo(n)), C(this, qt, i[0]);
    }
    return p(this, qt);
  }
  _render(t) {
    return /* @__PURE__ */ m("div", { ...this._getProps(t), children: this._renderPop(t) });
  }
  _renderPop(t) {
    return t.children;
  }
  layout() {
    const { element: t, trigger: n, props: i } = this, { state: o } = i;
    if (!t || !n || !o.open) {
      p(this, bt) && (p(this, bt).call(this), C(this, bt, void 0));
      return;
    }
    p(this, bt) || C(this, bt, Uo(n, t, () => {
      const { placement: r, width: a } = i;
      Vs(n, t, {
        placement: !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" ? Fs() : null, On(), js(1)].filter(Boolean)
      }).then(({ x: l, y: h }) => {
        var u, c;
        g(t).css({
          left: l,
          top: h,
          width: a === "100%" ? g(n).outerWidth() : void 0
        }), (c = (u = this.props).onLayout) == null || c.call(u, t);
      }), a === "100%" && g(t).css({ width: g(t).width() });
    }));
  }
  componentDidMount() {
    var t, n;
    this.layout(), g(document).on("click", this._handleDocClick), (n = (t = this.props).afterRender) == null || n.call(t, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t, n;
    (n = (t = this.props).afterRender) == null || n.call(t, { firstRender: !1 });
  }
  componentWillUnmount() {
    var n, i;
    g(document).off("click", this._handleDocClick);
    const t = p(this, bt);
    t && (t(), C(this, bt, void 0)), C(this, qt, void 0), C(this, we, void 0), g(`pick-pop-${this.props.id}`).remove(), (i = (n = this.props).beforeDestroy) == null || i.call(n);
  }
  render(t) {
    return $u(this._render(t), this._getContainer(t));
  }
}
we = new WeakMap(), bt = new WeakMap(), qt = new WeakMap();
var Qn, it, be, Re;
let Wt = (Re = class extends W {
  constructor(t) {
    super(t);
    _(this, Qn, void 0);
    _(this, it, void 0);
    _(this, be, void 0);
    C(this, it, 0), C(this, be, K()), this.changeState = (n, i) => new Promise((o) => {
      this.setState(n, () => {
        i == null || i(), o(this.state);
      });
    }), this.toggle = async (n, i) => {
      this.props.disabled && (n = !1);
      const { state: o } = this;
      if (typeof n == "boolean" && n === (!!o.open && o.open !== "closing"))
        return i && await this.changeState(i), this.state;
      p(this, it) && (clearTimeout(p(this, it)), C(this, it, 0));
      let r = await this.changeState((l) => (n = n ?? !l.open, {
        open: n ? "opening" : "closing",
        ...i
      }));
      const { open: a } = r;
      return a === "closing" ? (await ci(200, (l) => {
        C(this, it, l);
      }), C(this, it, 0), r = await this.changeState({ open: !1 })) : a === "opening" && (await ci(50, (l) => {
        C(this, it, l);
      }), C(this, it, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, C(this, Qn, t.id ?? `_pick${g.guid++}`);
  }
  get id() {
    return p(this, Qn);
  }
  get pop() {
    return p(this, be).current;
  }
  open(t) {
    return this.toggle(!0, t);
  }
  close(t) {
    return this.toggle(!1, t);
  }
  _getTriggerProps(t, n) {
    return {
      id: this.id,
      state: n,
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
  _getPopProps(t, n) {
    return {
      id: this.id,
      state: n,
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
  _renderTrigger(t, n) {
    return null;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderPop(t, n) {
    return null;
  }
  _afterRender(t = !1) {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: t });
  }
  _getPop(t) {
    return t.Pop || this.constructor.Pop;
  }
  _getTrigger(t) {
    return t.Trigger || this.constructor.Trigger;
  }
  _handleChange(t, n) {
    const { onChange: i } = this.props;
    i && i(t, n);
  }
  componentDidMount() {
    this._afterRender(!0);
  }
  componentWillUpdate(t, n) {
    const { open: i } = this.state, { open: o } = n;
    if (i === o)
      return;
    const { onPopShow: r, onPopHide: a } = this.props;
    o && r ? r() : !o && a && a();
  }
  componentDidUpdate(t, n) {
    const { open: i, value: o } = this.state, { open: r, value: a } = n;
    if (!!i != !!r) {
      const { onPopShown: l, onPopHidden: h } = this.props;
      i && l ? l() : !i && h && h();
    }
    o !== a && this._handleChange(o, a), this._afterRender();
  }
  componentWillUnmount() {
    var n;
    (n = this.props.beforeDestroy) == null || n.call(this), p(this, it) && clearTimeout(p(this, it));
    const t = p(this, be).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, n) {
    const { open: i } = n, o = this._getTrigger(t);
    let r;
    if (i) {
      const a = this._getPop(t);
      r = /* @__PURE__ */ m(a, { ref: p(this, be), ...this._getPopProps(t, n), children: this._renderPop(t, n) }, "pop");
    }
    return /* @__PURE__ */ m(En, { children: [
      /* @__PURE__ */ m(o, { ...this._getTriggerProps(t, n), children: this._renderTrigger(t, n) }, "pick"),
      r
    ] });
  }
}, Qn = new WeakMap(), it = new WeakMap(), be = new WeakMap(), Re.Trigger = ea, Re.Pop = xc, Re.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
}, Re);
var ts;
let sd = (ts = class extends Wt {
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
    const { syncBackground: e, syncBorder: t, syncColor: n, syncValue: i } = this.props, o = this.state.value || "";
    if (e && g(e).css("backgroundColor", o), t && g(t).css("borderColor", o), n && g(n).css("color", o), i) {
      const r = g(i);
      r.is("input,textarea,select") ? r.val(o) : r.text(o);
    }
  }
  _handleChange(e, t) {
    this.props.disabled || (super._handleChange(e, t), this.syncColor());
  }
  _renderTrigger(e, t) {
    const { icon: n } = e, { value: i } = t;
    return [
      n ? /* @__PURE__ */ m(et, { icon: n }, "icon") : /* @__PURE__ */ m("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(e, t) {
    const n = super._getTriggerProps(e, t);
    return n.style = g.extend({
      color: t.value
    }, n.style), n.className = R("color-picker", n.className, { disabled: e.disabled }), n;
  }
  _renderPop(e, t) {
    const { closeBtn: n, heading: i } = e, o = this.getColors(), { value: r } = t;
    let a;
    return i && (a = /* @__PURE__ */ m("div", { className: "color-picker-heading", children: [
      i,
      n ? /* @__PURE__ */ m("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ m("div", { className: "color-picker-row", children: [
        o.map((l) => /* @__PURE__ */ m("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: r === l ? /* @__PURE__ */ m(et, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ m("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ m(et, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
}, ts.defaultProps = {
  ...Wt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
}, ts);
const Bi = class Bi extends j {
};
Bi.NAME = "ColorPicker", Bi.Component = sd;
let za = Bi;
const Bn = 24 * 60 * 60 * 1e3, X = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : /* @__PURE__ */ new Date(), id = (s, e, t = "day") => {
  if (typeof e == "string") {
    const n = Number.parseInt(e, 10);
    t = e.replace(n.toString(), ""), e = n;
  }
  return s = new Date(X(s).getTime()), t === "month" ? s.setMonth(s.getMonth() + e) : t === "year" ? s.setFullYear(s.getFullYear() + e) : t === "week" ? s.setDate(s.getDate() + e * 7) : t === "hour" ? s.setHours(s.getHours() + e) : t === "minute" ? s.setMinutes(s.getMinutes() + e) : t === "second" ? s.setSeconds(s.getSeconds() + e) : s.setDate(s.getDate() + e), s;
}, Us = (s, e = /* @__PURE__ */ new Date()) => X(s).toDateString() === X(e).toDateString(), vr = (s, e = /* @__PURE__ */ new Date()) => X(s).getFullYear() === X(e).getFullYear(), Cc = (s, e = /* @__PURE__ */ new Date()) => (s = X(s), e = X(e), s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth()), Hf = (s, e = /* @__PURE__ */ new Date()) => {
  s = X(s), e = X(e);
  const t = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / t), i = Math.floor(e.getTime() / t);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, Bf = (s, e) => Us(X(e), s), Wf = (s, e) => Us(X(e).getTime() - Bn, s), zf = (s, e) => Us(X(e).getTime() + Bn, s), pt = (s, e = "yyyy-MM-dd hh:mm", t = "") => {
  if (s = X(s), Number.isNaN(s.getDay()))
    return t;
  const n = {
    "M+": s.getMonth() + 1,
    "d+": s.getDate(),
    "h+": s.getHours(),
    "H+": s.getHours() % 12,
    "m+": s.getMinutes(),
    "s+": s.getSeconds(),
    "S+": s.getMilliseconds()
  };
  return /(y+)/i.test(e) && (e.includes("[yyyy-]") && (e = e.replace("[yyyy-]", vr(s) ? "" : "yyyy-")), e = e.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((i) => {
    if (new RegExp(`(${i})`).test(e)) {
      const o = `${n[i]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), e;
}, Ff = (s, e, t) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, i = pt(s, vr(s) ? n.month : n.full);
  if (Us(s, e))
    return i;
  const o = pt(e, vr(s, e) ? Cc(s, e) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", o);
};
var es, ns;
class od extends W {
  constructor() {
    super(...arguments);
    _(this, es, K());
    _(this, ns, (t, n) => {
      var i, o;
      (o = (i = this.props).onChange) == null || o.call(i, t, String(n.item.key || ""));
    });
  }
  componentDidMount() {
    g(p(this, es).current).find(".menu-item>.active").scrollIntoView();
  }
  render(t) {
    const { minuteStep: n = 5, hour: i, minute: o } = t, r = [], a = [];
    for (let h = 0; h < 24; ++h)
      r.push({ key: h, text: h < 10 ? `0${h}` : h, active: i === h });
    for (let h = 0; h < 60; h += n)
      a.push({ key: h, text: h < 10 ? `0${h}` : h, active: o === h });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ m("div", { className: "time-picker-menu row", ref: p(this, es), children: [
      /* @__PURE__ */ m(
        Ie,
        {
          className: l,
          items: r,
          onClickItem: p(this, ns).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ m(
        Ie,
        {
          className: l,
          items: a,
          onClickItem: p(this, ns).bind(this, "minute")
        }
      )
    ] });
  }
}
es = new WeakMap(), ns = new WeakMap();
const Fa = (s) => {
  if (!s)
    return;
  const e = X(`1999-01-01 ${s}`);
  if (!Number.isNaN(e.getDay()))
    return e;
};
var Wi, zi, Fi, ji, ss;
let rd = (ss = class extends Wt {
  constructor(t) {
    super(t);
    _(this, Wi, () => {
      this.toggle(!0);
    });
    _(this, zi, (t) => {
      this.setTime(t.target.value);
    });
    _(this, Fi, (t, n) => {
      this.setTime({ [t]: n });
    });
    _(this, ji, () => {
      this.setTime("");
    });
    const n = this.state;
    n.value === "now" && (n.value = pt(/* @__PURE__ */ new Date(), t.format));
  }
  setTime(t) {
    if (this.props.disabled)
      return;
    let n = "";
    if (typeof t == "string")
      n = t;
    else {
      const [l, h] = (this.state.value || "00:00").split(":"), { hour: u = +l, minute: c = +h } = t;
      n = `${u}:${c}`;
    }
    const i = Fa(n), { onInvalid: o, required: r, defaultValue: a } = this.props;
    this.setState({ value: i ? pt(i, this.props.format) : r ? a : "" }, () => {
      !i && o && o(n);
    });
  }
  getTime() {
    const t = Fa(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, n) {
    const { placeholder: i, name: o, icon: r, required: a, disabled: l, readonly: h } = t, { value: u = "", open: c } = n, d = `time-picker-${this.id}`;
    let f;
    return c && !a && u.length ? f = /* @__PURE__ */ m("button", { type: "button", className: "btn size-sm square ghost", onClick: p(this, ji), children: /* @__PURE__ */ m("span", { className: "close" }) }) : r && (r === !0 ? f = /* @__PURE__ */ m("i", { class: "i-time" }) : f = /* @__PURE__ */ m(et, { icon: r })), [
      /* @__PURE__ */ m("input", { name: o, id: d, type: "text", class: "form-control", placeholder: i, value: u, disabled: l, readOnly: h, onFocus: p(this, Wi), onChange: p(this, zi) }, "input"),
      f ? /* @__PURE__ */ m("label", { for: d, class: "input-control-suffix", children: f }, "icon") : null
    ];
  }
  _getTriggerProps(t, n) {
    const i = super._getTriggerProps(t, n);
    return {
      ...i,
      className: R(i.className, "time-picker input-control has-suffix-icon"),
      name: ""
    };
  }
  _renderPop(t) {
    const [n, i] = this.getTime() || [];
    return /* @__PURE__ */ m(od, { hour: n, minute: i, minuteStep: t.minuteStep, onChange: p(this, Fi) });
  }
}, Wi = new WeakMap(), zi = new WeakMap(), Fi = new WeakMap(), ji = new WeakMap(), ss.defaultProps = {
  ...Wt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
}, ss);
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
const ad = (s, e, t = 0) => {
  const n = new Date(s, e - 1, 1), i = new Date(s, e, 0), o = n.getDay(), r = n.getTime() - (7 + o - t) % 7 * Bn;
  return {
    days: i.getDate(),
    startTime: r,
    firstDay: n.getTime()
  };
}, ja = (s, e) => new Set((Array.isArray(s) ? s : [s]).map((t) => pt(t, e)));
var Vi;
class ld extends W {
  constructor() {
    super(...arguments);
    _(this, Vi, (t) => {
      const { onClickDate: n } = this.props;
      if (!n)
        return;
      const i = g(t.target).closest(".mini-calendar-day").dataset("date");
      i && n(i);
    });
  }
  render(t) {
    const n = /* @__PURE__ */ new Date(), {
      weekStart: i = 1,
      weekNames: o = J.getLang("weekNames"),
      monthNames: r = J.getLang("monthNames"),
      year: a = n.getFullYear(),
      month: l = n.getMonth() + 1,
      highlights: h = [],
      selections: u = []
    } = t, c = [], d = "btn ghost square rounded-full";
    for (let N = 0; N < 7; N++) {
      const L = (i + N) % 7;
      c.push(/* @__PURE__ */ m("div", { className: R("col mini-calendar-day", { "is-weekend": L === 0 || L === 6 }), children: /* @__PURE__ */ m("div", { children: o ? o[L] : L }) }, N));
    }
    const { startTime: f, days: y, firstDay: w } = ad(a, l, i), v = w + y * Bn;
    let b = f;
    const x = [], $ = "yyyy-MM-dd", k = ja(h, $), S = ja(u, $);
    for (; b <= v; ) {
      const N = [];
      for (let L = 0; L < 7; L++) {
        const I = new Date(b), D = I.getDate(), O = pt(I, $), P = I.getDay(), M = Cc(I, w), E = R("col mini-calendar-day", {
          active: k.has(O),
          selected: S.has(O),
          "is-first": D === 1,
          "is-in-month": M,
          "is-out-month": !M,
          "is-today": Us(I, n),
          "is-weekend": P === 0 || P === 6
        });
        N.push(
          /* @__PURE__ */ m("div", { className: E, "data-date": O, children: /* @__PURE__ */ m("a", { className: d, onClick: p(this, Vi), children: D === 1 && r ? r[I.getMonth()] : I.getDate() }) }, O)
        ), b += Bn;
      }
      x.push(/* @__PURE__ */ m("div", { className: "row", children: N }, b));
    }
    return /* @__PURE__ */ m("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ m("div", { className: "row", children: c }),
      x
    ] });
  }
}
Vi = new WeakMap();
var is, Ui;
class Va extends W {
  constructor() {
    super(...arguments);
    _(this, is, K());
    _(this, Ui, (t) => {
      const { onChange: n } = this.props;
      if (!n)
        return;
      const o = g(t.target).closest("[data-value]").dataset("value");
      o && (n(+o), t.stopPropagation());
    });
  }
  componentDidMount() {
    g(p(this, is).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(t) {
    const { className: n, max: i, min: o, value: r } = t, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let h = o; h <= i; ++h)
      a.push(/* @__PURE__ */ m(tt, { type: "ghost", "data-value": h, active: h === r, className: R(l === h ? "is-current" : ""), onClick: p(this, Ui), children: h }, h));
    return /* @__PURE__ */ m("div", { className: n, ref: p(this, is), children: a });
  }
}
is = new WeakMap(), Ui = new WeakMap();
var on, os, rs, as, ls, cs, qi, $c, Yi, Sc;
class cd extends W {
  constructor(t) {
    super(t);
    _(this, qi);
    _(this, Yi);
    _(this, on, void 0);
    _(this, os, void 0);
    _(this, rs, void 0);
    _(this, as, void 0);
    _(this, ls, void 0);
    _(this, cs, void 0);
    C(this, on, K()), C(this, os, (r) => {
      const a = g(r.target).closest("[data-set-date]");
      a.length && this.changeDate(a.dataset("set-date"));
    }), C(this, rs, () => {
      const { year: r, month: a } = this.state;
      a === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: a - 1 });
    }), C(this, as, () => {
      const { year: r, month: a } = this.state;
      a === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: a + 1 });
    }), C(this, ls, (r) => {
      this.setState({ year: r, select: "day" });
    }), C(this, cs, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var a, l;
      if (r.startsWith("today")) {
        let h = /* @__PURE__ */ new Date();
        r.length > 3 && (h = id(h, r.substring(5).replace("+", ""))), r = pt(h, "yyyy-MM-dd");
      }
      (l = (a = this.props).onChange) == null || l.call(a, r);
    };
    const { date: n } = t, i = /* @__PURE__ */ new Date(), o = n ? new Date(n) : void 0;
    this.state = { select: "day", year: o ? o.getFullYear() : i.getFullYear(), month: o ? o.getMonth() + 1 : i.getMonth() + 1 };
  }
  _showSelect(t) {
    this.setState((n) => n.select === t ? { select: "day" } : { select: t });
  }
  componentDidMount() {
    g(p(this, on).current).find(".active").scrollIntoView();
  }
  render(t, n) {
    const {
      date: i,
      yearText: o = J.getLang("yearFormat") || "{0}",
      weekNames: r = J.getLang("weekNames"),
      monthNames: a = J.getLang("monthNames"),
      weekStart: l
    } = t, h = i ? new Date(i) : void 0, {
      year: u,
      month: c,
      select: d
    } = n, f = d === "day", y = X(t.minDate || "1970-1-1"), w = X(t.maxDate || "2099-12-1");
    return /* @__PURE__ */ m("div", { className: "date-picker-menu row", ref: p(this, on), onClick: p(this, os), children: [
      A(this, qi, $c).call(this, t),
      /* @__PURE__ */ m("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ m("div", { className: "row p-2", children: [
          /* @__PURE__ */ m(tt, { type: d === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: Y(o, u) }),
          /* @__PURE__ */ m(tt, { type: d === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[c - 1] : c }),
          /* @__PURE__ */ m("div", { className: "flex-auto" }),
          f ? /* @__PURE__ */ m("div", { children: [
            /* @__PURE__ */ m(tt, { type: "ghost", size: "sm", square: !0, onClick: p(this, rs), children: /* @__PURE__ */ m("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ m(tt, { type: "ghost", size: "sm", square: !0, onClick: p(this, as), children: /* @__PURE__ */ m("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        f ? /* @__PURE__ */ m(
          ld,
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
        d === "year" ? /* @__PURE__ */ m(
          Va,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: u,
            min: y.getFullYear(),
            max: w.getFullYear(),
            onChange: p(this, ls)
          }
        ) : d === "month" ? /* @__PURE__ */ m(
          Va,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: c,
            min: 1,
            max: 12,
            onChange: p(this, cs)
          }
        ) : null,
        f ? A(this, Yi, Sc).call(this, t) : null
      ] })
    ] });
  }
}
on = new WeakMap(), os = new WeakMap(), rs = new WeakMap(), as = new WeakMap(), ls = new WeakMap(), cs = new WeakMap(), qi = new WeakSet(), $c = function(t) {
  let { menu: n } = t;
  return n ? (Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ m(Ie, { ...n })) : null;
}, Yi = new WeakSet(), Sc = function(t) {
  let { actions: n } = t;
  const { todayText: i, clearText: o } = t;
  return n || (n = [{ text: i, "data-set-date": pt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ m("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ m(re, { btnProps: { className: "ghost text-primary" }, ...n }),
    o ? /* @__PURE__ */ m(tt, { type: "ghost text-link", "data-set-date": "", children: o }) : null
  ] });
};
var hs, us, ds, fs;
let hd = (fs = class extends Wt {
  constructor(t) {
    super(t);
    _(this, hs, void 0);
    _(this, us, void 0);
    _(this, ds, void 0);
    C(this, hs, () => {
      this.toggle(!0);
    }), C(this, us, (i) => {
      this.setDate(i.target.value);
    }), C(this, ds, () => {
      this.setDate("");
    }), this.setDate = (i) => {
      if (this.props.disabled)
        return;
      const o = X(i), r = !i || Number.isNaN(o.getDay()), { onInvalid: a, defaultValue: l = "", required: h } = this.props;
      this.setState({ value: r ? h ? l : "" : pt(o, this.props.format) }, () => {
        !r && a && a(i), this.toggle(!1);
      });
    };
    const { value: n } = this.state;
    n && (this.state.value = pt(n === "today" ? /* @__PURE__ */ new Date() : n, t.format));
  }
  _renderTrigger(t, n) {
    const { placeholder: i, icon: o, required: r, disabled: a, readonly: l } = t, { value: h = "", open: u } = n, c = `date-picker-${this.id}`;
    let d;
    return u && !r && h.length ? d = /* @__PURE__ */ m("button", { type: "button", className: "btn size-sm square ghost", onClick: p(this, ds), children: /* @__PURE__ */ m("span", { className: "close" }) }) : o && (o === !0 ? d = /* @__PURE__ */ m("i", { class: "i-calendar" }) : d = /* @__PURE__ */ m(et, { icon: o })), [
      /* @__PURE__ */ m("input", { id: c, type: "text", class: "form-control", placeholder: i, value: h, disabled: a, readOnly: l, onFocus: p(this, hs), onChange: p(this, us) }, "input"),
      d ? /* @__PURE__ */ m("label", { for: c, class: "input-control-suffix", children: d }, "icon") : null
    ];
  }
  _getTriggerProps(t, n) {
    const i = super._getTriggerProps(t, n);
    return {
      ...i,
      className: R(i.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, n) {
    const i = super._getPopProps(t, n);
    return {
      ...i,
      className: R(i.className, "popup")
    };
  }
  _renderPop(t, n) {
    const { weekNames: i, monthNames: o, weekStart: r, yearText: a, todayText: l = J.getLang("today"), clearText: h, menu: u, actions: c, minDate: d, maxDate: f, required: y } = t;
    return /* @__PURE__ */ m(
      cd,
      {
        onChange: this.setDate,
        date: n.value,
        weekNames: i,
        monthNames: o,
        weekStart: r,
        yearText: a,
        todayText: l,
        clearText: y ? "" : h,
        menu: u,
        actions: c,
        minDate: d,
        maxDate: f
      }
    );
  }
}, hs = new WeakMap(), us = new WeakMap(), ds = new WeakMap(), fs.defaultProps = {
  ...Wt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
}, fs);
const Ki = class Ki extends j {
};
Ki.NAME = "TimePicker", Ki.Component = rd;
let Ua = Ki;
const Xi = class Xi extends j {
};
Xi.NAME = "DatePicker", Xi.Component = hd;
let qa = Xi;
const sr = "show", Ya = "in", ud = '[data-dismiss="modal"]';
var ve, Yt, rn, Gi, an, si;
const mt = class mt extends ht {
  constructor() {
    super(...arguments);
    _(this, an);
    _(this, ve, 0);
    _(this, Yt, void 0);
    _(this, rn, void 0);
    _(this, Gi, (t) => {
      const n = t.target, i = n.closest(".modal");
      !i || i !== this.modalElement || (n.closest(ud) || this.options.backdrop === !0 && n === i) && (t.stopPropagation(), this.hide());
    });
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(sr);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  get rob() {
    return p(this, Yt);
  }
  _observeResize() {
    var t;
    if (this.options.responsive && typeof ResizeObserver < "u") {
      (t = p(this, Yt)) == null || t.disconnect();
      const { dialog: n } = this;
      if (n) {
        const i = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const o = n.clientWidth, r = n.clientHeight, [a, l] = p(this, rn) || [];
          (a !== o || l !== r) && (C(this, rn, [o, r]), this.layout());
        });
        i.observe(n), C(this, Yt, i);
      }
    }
  }
  afterInit() {
    this.on("click", p(this, Gi)), this.options.show && this.show(), this._observeResize();
  }
  destroy() {
    var t;
    super.destroy(), (t = p(this, Yt)) == null || t.disconnect(), C(this, Yt, void 0);
  }
  show(t) {
    const { modalElement: n } = this;
    if (this.shown)
      return g(n).css("z-index", `${mt.zIndex++}`), !1;
    this.setOptions(t);
    const { animation: i, backdrop: o, className: r, style: a } = this.options;
    return g(n).setClass({
      "modal-trans": i,
      "modal-no-backdrop": !o
    }, sr, r).css({
      zIndex: `${mt.zIndex++}`,
      ...a
    }), this.layout(), this.emit("show"), A(this, an, si).call(this, () => {
      g(n).addClass(Ya), A(this, an, si).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (g(this.modalElement).removeClass(Ya), this.emit("hide"), A(this, an, si).call(this, () => {
      g(this.modalElement).removeClass(sr), this.emit("hidden");
    }), !0) : !1;
  }
  layout(t, n) {
    if (!this.shown)
      return;
    const { dialog: i } = this;
    if (!i)
      return;
    const o = g(i);
    if (n = n ?? this.options.size, n) {
      o.removeAttr("data-size");
      const h = { width: "", height: "" };
      typeof n == "object" ? (h.width = n.width, h.height = n.height) : typeof n == "string" && ["md", "sm", "lg", "full"].includes(n) ? o.attr("data-size", n) : n && (h.width = n), o.css(h);
    }
    t = t ?? this.options.position ?? "fit";
    const r = i.clientWidth, a = i.clientHeight;
    C(this, rn, [r, a]), typeof t == "function" && (t = t({ width: r, height: a }));
    const l = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof t == "number" ? (l.alignSelf = "flex-start", l.top = t) : typeof t == "object" && t ? (l.alignSelf = "flex-start", Object.assign(l, t)) : t === "fit" ? (l.alignSelf = "flex-start", l.top = `${Math.max(0, Math.floor((window.innerHeight - a) / 3))}px`) : t === "bottom" ? l.alignSelf = "flex-end" : t === "top" ? l.alignSelf = "flex-start" : t !== "center" && typeof t == "string" && (l.alignSelf = "flex-start", l.top = t), o.css(l), g(this.modalElement).css("justifyContent", l.left ? "flex-start" : "center");
  }
  static hide(t) {
    var n;
    (n = mt.query(t)) == null || n.hide();
  }
  static show(t) {
    var n;
    (n = mt.query(t)) == null || n.show();
  }
};
ve = new WeakMap(), Yt = new WeakMap(), rn = new WeakMap(), Gi = new WeakMap(), an = new WeakSet(), si = function(t, n) {
  p(this, ve) && (clearTimeout(p(this, ve)), C(this, ve, 0)), t && (this.options.animation ? C(this, ve, window.setTimeout(t, n ?? this.options.transTime)) : t());
}, mt.NAME = "Modal", mt.MULTI_INSTANCE = !0, mt.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}, mt.zIndex = 1500;
let Pe = mt;
g(window).on("resize.modal.zui", () => {
  Pe.getAll().forEach((s) => {
    const e = s;
    e.shown && e.options.responsive && e.layout();
  });
});
g(document).on("to-hide.modal.zui", (s, e) => {
  Pe.hide(e == null ? void 0 : e.target);
});
const ra = class ra extends W {
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
      title: n
    } = this.props;
    return Z(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ m("div", { className: R("modal-header", t), children: /* @__PURE__ */ m("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: e,
      closeBtn: t
    } = this.props;
    return !t && !e ? null : Z(e) ? e : /* @__PURE__ */ m("div", { className: "modal-actions", children: [
      e ? /* @__PURE__ */ m(re, { ...e }) : null,
      t ? /* @__PURE__ */ m("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: e,
      bodyClass: t
    } = this.props;
    return e ? Z(e) ? e : /* @__PURE__ */ m("div", { className: R("modal-body", t), children: e }) : null;
  }
  renderFooter() {
    const {
      footer: e,
      footerClass: t,
      footerActions: n
    } = this.props;
    return Z(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ m("div", { className: R("modal-footer", t), children: n ? /* @__PURE__ */ m(re, { ...n }) : null });
  }
  render() {
    const {
      className: e,
      style: t,
      contentClass: n,
      children: i
    } = this.props;
    return /* @__PURE__ */ m("div", { className: R("modal-dialog", e), style: t, children: /* @__PURE__ */ m("div", { className: R("modal-content", n), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
};
ra.defaultProps = { closeBtn: !0 };
let _r = ra;
var ln, cn, hn;
class dd extends W {
  constructor() {
    super(...arguments);
    _(this, ln, void 0);
    _(this, cn, void 0);
    _(this, hn, void 0);
    C(this, ln, K()), this.state = {}, C(this, hn, () => {
      var i, o;
      const t = (o = (i = p(this, ln).current) == null ? void 0 : i.contentWindow) == null ? void 0 : o.document;
      if (!t)
        return;
      let n = p(this, cn);
      n == null || n.disconnect(), n = new ResizeObserver(() => {
        const r = t.body, a = t.documentElement, l = Math.ceil(Math.max(r.scrollHeight, r.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), n.observe(t.body), n.observe(t.documentElement), C(this, cn, n);
    });
  }
  componentDidMount() {
    p(this, hn).call(this);
  }
  componentWillUnmount() {
    var t;
    (t = p(this, cn)) == null || t.disconnect();
  }
  render() {
    const { url: t } = this.props;
    return /* @__PURE__ */ m(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: t,
        ref: p(this, ln),
        onLoad: p(this, hn)
      }
    );
  }
}
ln = new WeakMap(), cn = new WeakMap(), hn = new WeakMap();
function fd(s, e) {
  const { custom: t, title: n, content: i } = e;
  return {
    body: i,
    title: n,
    ...typeof t == "function" ? t() : t
  };
}
async function pd(s, e) {
  const { dataType: t = "html", url: n, request: i, custom: o, title: r, replace: a = !0, executeScript: l = !0 } = e, u = await (await fetch(n, {
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
    body: t === "html" ? /* @__PURE__ */ m(Hs, { className: "modal-body", html: u, executeScript: l }) : u
  };
}
async function md(s, e) {
  const { url: t, custom: n, title: i } = e;
  return {
    title: i,
    ...n,
    body: /* @__PURE__ */ m(dd, { url: t })
  };
}
const gd = {
  custom: fd,
  ajax: pd,
  iframe: md
}, ir = "loading";
var vt, un, _t, ps, Cr, ms, $r;
const de = class de extends Pe {
  constructor() {
    super(...arguments);
    _(this, ps);
    _(this, ms);
    _(this, vt, void 0);
    _(this, un, void 0);
    _(this, _t, void 0);
  }
  get id() {
    return p(this, un);
  }
  get loading() {
    var t;
    return (t = p(this, vt)) == null ? void 0 : t.classList.contains(ir);
  }
  get shown() {
    var t;
    return !!((t = p(this, vt)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = p(this, vt);
    if (!t) {
      const { options: n } = this;
      let i = p(this, un);
      i || (i = n.id || `modal-${g.guid++}`, C(this, un, i));
      const { $element: o } = this;
      if (t = o.find(`#${i}`)[0], !t) {
        const r = this.key;
        t = g("<div>").attr({
          id: i,
          "data-key": r
        }).data(this.constructor.KEY, this).css(n.style || {}).setClass("modal modal-async load-indicator", n.className).appendTo(o)[0];
      }
      C(this, vt, t);
    }
    return t;
  }
  get $emitter() {
    const t = p(this, vt);
    return t ? g(t) : this.$element;
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
    const t = p(this, vt);
    t && (g(t).removeData(this.constructor.KEY).remove(), C(this, vt, void 0));
  }
  render(t) {
    super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    p(this, _t) && clearTimeout(p(this, _t));
    const { modalElement: t, options: n } = this, i = g(t), { type: o, loadTimeout: r, loadingText: a = null } = n, l = gd[o];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${o}"`), !1;
    i.attr("data-loading", a).addClass(ir), r && C(this, _t, window.setTimeout(() => {
      C(this, _t, 0), A(this, ms, $r).call(this, this.options.timeoutTip);
    }, r));
    const h = await l.call(this, t, n);
    return h === !1 ? await A(this, ms, $r).call(this, this.options.failedTip) : h && typeof h == "object" && await A(this, ps, Cr).call(this, h), p(this, _t) && (clearTimeout(p(this, _t)), C(this, _t, 0)), this.layout(), await ci(100), i.removeClass(ir), !0;
  }
  static open(t) {
    return new Promise((n) => {
      const { container: i = document.body, ...o } = t, r = { show: !0, ...o };
      !r.type && r.url && (r.type = "ajax");
      const a = de.ensure(i, r), l = `.zui.Modal.open${g.guid++}`;
      a.on(`hidden${l}`, () => {
        a.off(l), n(a);
      }), a.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: n, message: i, icon: o, iconClass: r = "icon-lg muted", actions: a = "confirm", onClickAction: l, custom: h, key: u = "__alert", ...c } = t, d = (typeof h == "function" ? h() : h) || {};
    let f = typeof i == "object" && i.html ? /* @__PURE__ */ m("div", { dangerouslySetInnerHTML: { __html: i.html } }) : /* @__PURE__ */ m("div", { children: i });
    o ? f = /* @__PURE__ */ m("div", { className: R("modal-body row gap-4 items-center", d.bodyClass), children: [
      /* @__PURE__ */ m("div", { className: `icon ${o} ${r}` }),
      f
    ] }) : f = /* @__PURE__ */ m("div", { className: R("modal-body", d.bodyClass), children: f });
    const y = [];
    (Array.isArray(a) ? a : [a]).forEach((b) => {
      b = {
        ...typeof b == "string" ? { key: b } : b
      }, typeof b.key == "string" && (b.text || (b.text = J.getLang(b.key, b.key)), b.btnType || (b.btnType = `btn-wide ${b.key === "confirm" ? "primary" : "btn-default"}`)), b && y.push(b);
    }, []);
    let w;
    const v = y.length ? {
      gap: 4,
      items: y,
      onClickItem: ({ item: b, event: x }) => {
        const $ = de.query(x.target, u);
        w = b.key, (l == null ? void 0 : l(b, $)) !== !1 && $ && $.hide();
      }
    } : void 0;
    return await de.open({
      key: u,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: f,
      backdrop: "static",
      custom: { footerActions: v, ...d },
      ...c
    }), w;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: n, onResult: i, ...o } = t;
    return await de.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (a, l) => {
        i == null || i(a.key === "confirm", l), n == null || n(a, l);
      },
      ...o
    }) === "confirm";
  }
};
vt = new WeakMap(), un = new WeakMap(), _t = new WeakMap(), ps = new WeakSet(), Cr = function(t) {
  return new Promise((n) => {
    if (Array.isArray(t))
      return g(this.modalElement).html(t[0]), this.layout(), this._observeResize(), n();
    const { afterRender: i, ...o } = t;
    t = {
      afterRender: (r) => {
        this.layout(), i == null || i(r), this._observeResize(), n();
      },
      ...o
    }, Pn(
      /* @__PURE__ */ m(_r, { ...t }),
      this.modalElement
    );
  });
}, ms = new WeakSet(), $r = function(t) {
  if (t)
    return A(this, ps, Cr).call(this, {
      body: /* @__PURE__ */ m("div", { className: "modal-load-failed", children: t })
    });
}, de.DEFAULT = {
  ...Pe.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let xr = de;
const yd = '[data-toggle="modal"]';
var Kt, Zi, kc, Ji, Ec, Qi, Tc;
const aa = class aa extends ht {
  constructor() {
    super(...arguments);
    _(this, Zi);
    _(this, Ji);
    _(this, Qi);
    _(this, Kt, void 0);
  }
  get modal() {
    return p(this, Kt);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = A(this, Ji, Ec).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = p(this, Kt)) == null ? void 0 : t.hide();
  }
};
Kt = new WeakMap(), Zi = new WeakSet(), kc = function() {
  const {
    container: t,
    ...n
  } = this.options, i = n, o = this.$element.attr("href") || "";
  return i.type || (i.target || o[0] === "#" ? i.type = "static" : i.type = i.type || (i.url || o ? "ajax" : "custom")), !i.url && (i.type === "iframe" || i.type === "ajax") && o[0] !== "#" && (i.url = o), !i.key && i.id && (i.key = i.id), i;
}, Ji = new WeakSet(), Ec = function() {
  const t = A(this, Zi, kc).call(this);
  let n = p(this, Kt);
  if (n)
    return n.setOptions(t), n;
  if (t.type === "static") {
    const i = A(this, Qi, Tc).call(this);
    if (!i)
      return;
    n = Pe.ensure(i, t);
  } else
    n = xr.ensure(this.container, t);
  return C(this, Kt, n), n.on("destroyed", () => {
    C(this, Kt, void 0);
  }), n;
}, Qi = new WeakSet(), Tc = function() {
  let t = this.options.target;
  if (!t) {
    const { $element: n } = this;
    if (n.is("a")) {
      const i = n.attr("href");
      i != null && i.startsWith("#") && (t = i);
    }
  }
  return this.container.querySelector(t || ".modal");
}, aa.NAME = "ModalTrigger";
let Sr = aa;
g(document).on("click.modal.zui", (s) => {
  var n;
  const e = s.target, t = (n = e.closest) == null ? void 0 : n.call(e, yd);
  if (t) {
    const i = Sr.ensure(t);
    i && (i.show(), s.preventDefault());
  }
});
var gs;
let wd = (gs = class extends Fo {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = R(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
}, gs.NAME = "nav", gs);
const to = class to extends j {
};
to.NAME = "Nav", to.Component = wd;
let Ka = to;
function Wn(s, e) {
  const t = s.pageTotal || Math.ceil(s.recTotal / s.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = t : e === "prev" ? e = s.page - 1 : e === "next" ? e = s.page + 1 : e === "current" ? e = s.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? t + e : e, t)) : s.page, {
    ...s,
    pageTotal: t,
    page: e
  };
}
function bd({
  key: s,
  type: e,
  btnType: t,
  page: n,
  format: i,
  pagerInfo: o,
  linkCreator: r,
  ...a
}) {
  const l = Wn(o, n);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : Y(i, l)), a.url === void 0 && r && (a.url = typeof r == "function" ? r(l) : Y(r, l)), a.disabled === void 0 && (a.disabled = n !== void 0 && l.page === o.page), /* @__PURE__ */ m(tt, { type: t, ...a });
}
function vd({
  key: s,
  type: e,
  page: t,
  text: n = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const a = Wn(i, t);
  return n = typeof n == "function" ? n(a) : Y(n, a), /* @__PURE__ */ m(nc, { ...r, children: [
    o,
    n
  ] });
}
function _d({
  key: s,
  type: e,
  btnType: t,
  count: n = 12,
  pagerInfo: i,
  onClick: o,
  linkCreator: r,
  ...a
}) {
  if (!i.pageTotal)
    return;
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ m(tt, { type: t, ...l })), u = (d, f) => {
    const y = [];
    for (let w = d; w <= f; w++) {
      l.text = w, delete l.icon, l.disabled = !1;
      const v = Wn(i, w);
      r && (l.url = typeof r == "function" ? r(v) : Y(r, v)), y.push(/* @__PURE__ */ m(tt, { type: t, ...l, onClick: o }));
    }
    return y;
  };
  let c = [];
  return c = [...u(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= n ? c = [...c, ...u(2, i.pageTotal)] : i.page < n - 2 ? c = [...c, ...u(2, n - 2), h(), ...u(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - n + 3 ? c = [...c, h(), ...u(i.pageTotal - n + 3, i.pageTotal)] : c = [...c, h(), ...u(i.page - Math.ceil((n - 4) / 2), i.page + Math.floor((n - 4) / 2)), h(), ...u(i.pageTotal, i.pageTotal)]), c;
}
function xd({
  type: s,
  pagerInfo: e,
  linkCreator: t,
  items: n = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  itemProps: o,
  ...r
}) {
  var l;
  i.items = i.items ?? n.map((h) => {
    const u = { ...e, recPerPage: h };
    return {
      ...o,
      text: `${h}`,
      active: h === e.recPerPage,
      url: typeof t == "function" ? t(u) : Y(t, u)
    };
  });
  const { text: a = "" } = r;
  return r.text = typeof a == "function" ? a(e) : Y(a, e), i.menu = { ...i.menu, className: R((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ m(mc, { type: "dropdown", dropdown: i, ...r });
}
function Cd({
  key: s,
  page: e,
  type: t,
  btnType: n,
  pagerInfo: i,
  size: o,
  onClick: r,
  onChange: a,
  linkCreator: l,
  ...h
}) {
  const u = { ...h };
  let c;
  const d = (w) => {
    var v;
    c = Number((v = w.target) == null ? void 0 : v.value) || 1, c = c > i.pageTotal ? i.pageTotal : c;
  }, f = (w) => {
    if (!(w != null && w.target))
      return;
    c = c <= i.pageTotal ? c : i.pageTotal;
    const v = Wn(i, c);
    a && !a({ info: v, event: w }) || (w.target.href = u.url = typeof l == "function" ? l(v) : Y(l, v));
  }, y = Wn(i, e || 0);
  return u.url = typeof l == "function" ? l(y) : Y(l, y), /* @__PURE__ */ m("div", { className: R("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ m("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: d }),
    /* @__PURE__ */ m(tt, { type: n, ...u, onClick: f })
  ] });
}
var Le;
let $d = (Le = class extends re {
  get pagerInfo() {
    const { page: e = 1, recTotal: t = 0, recPerPage: n = 10 } = this.props;
    return { page: e, recTotal: t, recPerPage: n, pageTotal: n ? Math.ceil(t / n) : 0 };
  }
  isBtnItem(e) {
    return e === "link" || e === "nav" || e === "size-menu" || e === "goto" || super.isBtnItem(e);
  }
  getItemRenderProps(e, t, n) {
    const i = super.getItemRenderProps(e, t, n), o = t.type || "item";
    return o === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (o === "link" || o === "size-menu" || o === "nav" || o === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: e.linkCreator }), i;
  }
}, Le.NAME = "pager", Le.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}, Le.ItemComponents = {
  ...re.ItemComponents,
  link: bd,
  info: vd,
  nav: _d,
  "size-menu": xd,
  goto: Cd
}, Le);
const eo = class eo extends j {
};
eo.NAME = "Pager", eo.Component = $d;
let Xa = eo;
const no = class no extends j {
};
no.NAME = "Pick", no.Component = Wt;
let Ga = no;
var dn, ys, ws, so;
class Nc extends W {
  constructor(t) {
    super(t);
    _(this, dn, K());
    _(this, ys, K());
    _(this, ws, (t) => {
      var i, o;
      const n = t.target.value;
      (o = (i = this.props).onSearch) == null || o.call(i, n), this.setState({ search: n }), t.stopPropagation();
    });
    _(this, so, (t) => {
      var n, i;
      t.stopPropagation(), (i = (n = this.props).onClear) == null || i.call(n), this.setState({ search: "" }, () => this.focus());
    });
    this.state = { search: t.defaultSearch ?? "" };
  }
  focus() {
    var t;
    (t = p(this, dn).current) == null || t.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: t } = this.props;
    if (t) {
      const { current: n } = p(this, ys), { current: i } = p(this, dn);
      if (n && i) {
        const o = g(i).parent();
        o.width(Math.ceil(Math.min(n.clientWidth, o.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(t, n) {
    const { placeholder: i, inline: o } = t, { search: r } = n, a = r.trim().length > 0;
    let l;
    return o ? l = /* @__PURE__ */ m("div", { className: "picker-search-measure", ref: p(this, ys), children: r }) : a ? l = /* @__PURE__ */ m("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: p(this, so), children: /* @__PURE__ */ m("span", { className: "close" }) }) : l = /* @__PURE__ */ m("span", { className: "magnifier" }), /* @__PURE__ */ m("div", { className: `picker-search${o ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ m(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: r,
          onChange: p(this, ws),
          onInput: p(this, ws),
          ref: p(this, dn)
        }
      ),
      l
    ] });
  }
}
dn = new WeakMap(), ys = new WeakMap(), ws = new WeakMap(), so = new WeakMap();
var fn, bs, vs, _s;
class Sd extends ea {
  constructor() {
    super(...arguments);
    _(this, fn, void 0);
    _(this, bs, void 0);
    _(this, vs, void 0);
    _(this, _s, void 0);
    C(this, fn, K()), C(this, bs, (t) => {
      const { onDeselect: n, state: { selections: i } } = this.props, o = g(t.target).closest(".picker-deselect-btn").attr("data-value");
      n && i.length && typeof o == "string" && n(o), t.stopPropagation();
    }), C(this, vs, (t) => {
      this.props.changeState({ search: t });
    }), C(this, _s, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (t) => /* @__PURE__ */ m("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ m("span", { className: "text", children: t.text }),
      this.props.disabled ? null : /* @__PURE__ */ m("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: p(this, bs), "data-value": t.value, children: /* @__PURE__ */ m("span", { className: "close" }) })
    ] }, t.value);
  }
  _handleClick(t) {
    var n;
    super._handleClick(t), (n = p(this, fn).current) == null || n.focus();
  }
  _getClass(t) {
    return R(
      super._getClass(t),
      "picker-select picker-select-multi form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: n }, searchHint: i } = t;
    return /* @__PURE__ */ m(
      Nc,
      {
        inline: !0,
        ref: p(this, fn),
        defaultSearch: n,
        onSearch: p(this, vs),
        onClear: p(this, _s),
        placeholder: i
      }
    );
  }
  _renderTrigger(t) {
    const { state: { selections: n = [], open: i }, search: o, placeholder: r, children: a } = this.props, l = i && o;
    return !l && !n.length ? /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: r }, "selections") : [
      /* @__PURE__ */ m("div", { className: "picker-multi-selections", children: [
        n.map(this._renderSelection),
        l ? this._renderSearch(t) : null
      ] }, "selections"),
      a,
      /* @__PURE__ */ m("span", { class: "caret" }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: n, state: { value: i = "" }, id: o, valueList: r, emptyValue: a } = t, l = r.length ? r : [a];
    if (n)
      if (this.hasInput)
        g(`#${o}`).val(i);
      else
        return /* @__PURE__ */ m("select", { id: o, multiple: !0, className: "pick-value", name: n, style: { display: "none" }, children: l.map((h) => /* @__PURE__ */ m("option", { value: h, children: h }, h)) });
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: n, emptyValue: i } = this.props;
    g(`#${t}`).val(n.length ? n : [i]);
  }
  componentDidUpdate(t) {
    const { id: n, state: i, name: o, valueList: r, emptyValue: a } = this.props;
    o && t.state.value !== i.value && g(`#${n}`).val(r.length ? r : [a]).trigger("change", br);
  }
}
fn = new WeakMap(), bs = new WeakMap(), vs = new WeakMap(), _s = new WeakMap();
var xs, io, oo, ro, ao, Mc;
class kd extends ea {
  constructor() {
    super(...arguments);
    _(this, ao);
    _(this, xs, K());
    _(this, io, (t) => {
      this.props.disabled || (this.props.onClear(), t.stopPropagation());
    });
    _(this, oo, (t) => {
      this.props.changeState({ search: t });
    });
    _(this, ro, () => {
      this.props.togglePop(!0, { search: "" });
    });
  }
  _handleClick(t) {
    var n;
    super._handleClick(t), (n = p(this, xs).current) == null || n.focus();
  }
  _getClass(t) {
    return R(
      super._getClass(t),
      "picker-select picker-select-single form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: n } } = t;
    return /* @__PURE__ */ m(
      Nc,
      {
        ref: p(this, xs),
        defaultSearch: n,
        onSearch: p(this, oo),
        onClear: p(this, ro),
        placeholder: A(this, ao, Mc).call(this)
      }
    );
  }
  _renderTrigger(t) {
    const { children: n, state: { selections: i = [], open: o }, placeholder: r, search: a, disabled: l, clearable: h } = t, [u] = i, c = o && a;
    let d;
    c ? d = this._renderSearch(t) : u ? d = /* @__PURE__ */ m("span", { className: "picker-single-selection", children: u.text }, "main") : d = /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: r }, "main");
    const f = h && !c ? /* @__PURE__ */ m("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: l, onClick: p(this, io), children: /* @__PURE__ */ m("span", { className: "close" }) }, "deselect") : null;
    return [
      d,
      n,
      f,
      c ? null : /* @__PURE__ */ m("span", { className: "caret" }, "caret")
    ];
  }
}
xs = new WeakMap(), io = new WeakMap(), oo = new WeakMap(), ro = new WeakMap(), ao = new WeakSet(), Mc = function() {
  const { searchHint: t, state: { value: n, selections: i } } = this.props;
  let o = t;
  if (o === void 0) {
    const r = i.find((a) => a.value === n);
    r && typeof r.text == "string" && (o = r.text);
  }
  return o;
};
const Ed = (s, e, t = "is-match") => s.reduce((n, i) => [...n].reduce((o, r) => {
  if (typeof r != "string")
    return o.push(r), o;
  const a = r.toLowerCase().split(i);
  if (a.length === 1)
    return o.push(r), o;
  let l = 0;
  return a.forEach((h, u) => {
    u && (o.push(/* @__PURE__ */ m("span", { class: t, children: r.substring(l, l + i.length) })), l += i.length), o.push(r.substring(l, l + h.length)), l += h.length;
  }), o;
}, []), e);
var lo, co, Rc, ho, Lc, uo;
class Td extends xc {
  constructor() {
    super(...arguments);
    _(this, co);
    _(this, ho);
    _(this, lo, K());
    _(this, uo, ({ item: t }) => {
      const n = t.key, { multiple: i, onToggleValue: o, onSelect: r, togglePop: a } = this.props;
      i ? o(n) : (r(n), a(!1, { search: "" }));
    });
  }
  componentDidMount() {
    super.componentDidMount();
    const t = this.element;
    t && g(t).on("mouseenter.picker.zui", ".menu-item", (n) => {
      const i = g(n.currentTarget);
      this.setHoverItem(i.children("a").attr("data-value") ?? "");
    });
  }
  componentWillUnmount() {
    super.componentDidMount();
    const t = this.element;
    t && g(t).off(".picker.zui");
  }
  setHoverItem(t) {
    this.props.changeState({ hoverItem: t }, () => {
      const n = A(this, co, Rc).call(this);
      n != null && n.length && n.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _getClass(t) {
    return R(
      super._getClass(t),
      "picker-menu"
    );
  }
  _renderPop(t) {
    const { menu: n } = t;
    return /* @__PURE__ */ m(
      Ie,
      {
        ref: p(this, lo),
        className: "picker-menu-list",
        items: A(this, ho, Lc).call(this),
        onClickItem: p(this, uo),
        ...n
      }
    );
  }
}
lo = new WeakMap(), co = new WeakSet(), Rc = function() {
  const t = this.element;
  if (t)
    return g(t).find(".menu-item>a.hover");
}, ho = new WeakSet(), Lc = function() {
  const { selections: t, items: n, hoverItem: i, search: o } = this.props.state, r = new Set(t.map((u) => u.value));
  let a = !1;
  const l = g.unique(o.toLowerCase().split(" ").filter((u) => u.length)), h = n.reduce((u, c) => {
    const {
      value: d = "",
      keys: f,
      text: y,
      className: w,
      ...v
    } = c;
    d === i && (a = !0);
    const b = y ?? d;
    return b && u.push({
      key: d,
      active: r.has(d),
      text: typeof b == "string" ? Ed(l, [b]) : /* @__PURE__ */ m(Tn, { content: b }),
      className: R(w, { hover: d === i }),
      "data-value": d,
      ...v
    }), u;
  }, []);
  return !a && h.length && (h[0].className = R(h[0].className, "hover")), h;
}, uo = new WeakMap();
var pn, xt, Lt, mn, $n;
let Nd = ($n = class extends Wt {
  constructor(t) {
    super(t);
    _(this, pn, void 0);
    _(this, xt, void 0);
    _(this, Lt, void 0);
    _(this, mn, void 0);
    C(this, Lt, 0), this.isEmptyValue = (r) => p(this, mn).has(r), this.toggleValue = (r, a) => {
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
    }, this.isSelected = (r) => this.valueList.includes(r), g.extend(this.state, {
      loading: !1,
      search: "",
      items: t.items,
      selections: []
    });
    const { valueSplitter: n = ",", emptyValue: i = "" } = this.props;
    C(this, mn, new Set(i.split(n)));
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
    return p(this, mn).values().next().value;
  }
  async load() {
    let t = p(this, xt);
    t && t.abort(), t = new AbortController(), C(this, xt, t);
    const { items: n, searchDelay: i } = this.props, { search: o } = this.state;
    let r = [];
    if (typeof n == "function") {
      if (await ci(i || 500), p(this, xt) !== t || (r = await n(o, { signal: t.signal }), p(this, xt) !== t))
        return r;
    } else if (o.length) {
      const a = g.unique(o.toLowerCase().split(" ").filter((l) => l.length));
      a.length ? r = n.reduce((l, h) => {
        const {
          value: u,
          keys: c = "",
          text: d
        } = h;
        return a.every((f) => u.toLowerCase().includes(f) || c.toLowerCase().includes(f) || typeof d == "string" && d.toLowerCase().includes(f)) && l.push(h), l;
      }, []) : r = n;
    } else
      r = n;
    return C(this, xt, void 0), r;
  }
  async update(t) {
    const { state: n, props: i } = this, o = p(this, pn) || {}, r = {};
    if (C(this, pn, o), (t || o.search !== n.search || i.items !== o.items) && (r.items = (await this.load()).filter((l) => (l.value = String(l.value), !this.isEmptyValue(l.value))), r.loading = !1, o.items = i.items, o.search = n.search), t || o.value !== n.value) {
      const l = r.items || n.items, h = new Map(l.map((u) => [u.value, u]));
      r.selections = this.valueList.reduce((u, c) => (this.isEmptyValue(c) || u.push(h.get(c) || { value: c }), u), []), o.value = n.value;
    }
    const a = r.items;
    i.required && !i.multiple && this.isEmptyValue(this.state.value) && Array.isArray(a) && a.length && (r.value = a[0].value), Object.keys(r).length && await this.changeState(r);
  }
  async tryUpdate() {
    p(this, Lt) && clearTimeout(p(this, Lt)), C(this, Lt, window.setTimeout(() => {
      C(this, Lt, 0), this.update();
    }, 50));
  }
  componentDidUpdate(t, n) {
    super.componentDidUpdate(t, n), this.tryUpdate();
  }
  componentDidMount() {
    super.componentDidMount(), this.tryUpdate();
  }
  componentWillUnmount() {
    var t;
    (t = p(this, xt)) == null || t.abort(), C(this, xt, void 0), C(this, pn, void 0), clearTimeout(p(this, Lt)), super.componentWillUnmount();
  }
  _getTriggerProps(t, n) {
    return {
      ...super._getTriggerProps(t, n),
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
  _getPopProps(t, n) {
    return {
      ...super._getPopProps(t, n),
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
    return t.Trigger || (t.multiple ? Sd : kd);
  }
  formatValueList(t) {
    let n = [];
    return typeof t == "string" && t.length ? n = g.unique(t.split(this.props.valueSplitter ?? ",")) : Array.isArray(t) && (n = g.unique(t)), n.filter((i) => !this.isEmptyValue(i));
  }
  formatValue(t) {
    const n = this.formatValueList(t);
    return n.length ? n.join(this.props.valueSplitter ?? ",") : this.firstEmptyValue;
  }
  setValue(t = []) {
    if (this.props.disabled)
      return;
    !Array.isArray(t) && typeof t != "string" && (t = t !== null ? String(t) : this.firstEmptyValue);
    let n = this.formatValueList(t);
    if (!n.length)
      return this.changeState({ value: this.firstEmptyValue });
    const { items: i, limitValueInList: o } = this.props;
    if (o) {
      const a = new Set((Array.isArray(i) ? i : this.state.items).map((l) => String(l.value)));
      n = n.filter((l) => a.has(l));
    }
    const r = this.formatValue(n);
    return this.changeState({ value: r });
  }
}, pn = new WeakMap(), xt = new WeakMap(), Lt = new WeakMap(), mn = new WeakMap(), $n.defaultProps = {
  ...Wt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
}, $n.Pop = Td, $n);
const fo = class fo extends j {
};
fo.NAME = "Picker", fo.Component = Nd;
let Za = fo, Md = class extends W {
  render(e) {
    const {
      id: t,
      popup: n,
      title: i,
      content: o,
      style: r,
      className: a,
      closeBtn: l,
      arrow: h,
      headingClass: u = "popover-heading",
      titleClass: c = "popover-title",
      contentClass: d = "popover-content",
      arrowStyle: f,
      onlyInner: y
    } = e;
    let w = /* @__PURE__ */ m(Tn, { content: o }, "content");
    d && (w = /* @__PURE__ */ m("div", { className: d, children: w }, "content"));
    const v = [];
    return (i || l) && v.push(/* @__PURE__ */ m("div", { className: u, children: [
      i ? /* @__PURE__ */ m("div", { className: c, children: i }) : null,
      l ? /* @__PURE__ */ m("button", { className: "btn ghost square size-sm", "data-dismiss": "popover", children: /* @__PURE__ */ m("span", { className: "close" }) }) : null
    ] }, "heading")), v.push(w), h && v.push(/* @__PURE__ */ m("div", { className: typeof h == "string" ? h : "arrow", style: f }, "arrow")), y ? v : /* @__PURE__ */ m("div", { id: t, className: R("popover", a, { popup: n }), style: r, children: v });
  }
};
const po = class po extends j {
};
po.NAME = "PopoverPanel", po.Component = Md;
let kr = po;
const je = class je extends ht {
  get shown() {
    return this._shown;
  }
  get id() {
    return this._id;
  }
  afterInit() {
    const { element: e = this.element, trigger: t, id: n } = this.options;
    let i;
    if (typeof e == "function" ? i = e() : i = typeof e == "string" ? g(e)[0] : e, !!i) {
      if (this._triggerElement = i, this._id = n || `popover_${this.gid}`, this._virtual = !i, i instanceof HTMLElement) {
        const o = g(i), { namespace: r } = this;
        t === "hover" ? o.on(`mouseenter${r}`, () => {
          this.show(!0);
        }).on(`mouseleave${r}`, () => {
          this.hide();
        }) : t === "click" && o.on(`click${r}`, () => {
          this.toggle();
        });
      }
      this.options.show && this.show();
    }
  }
  initTarget() {
    let e = this.options.target;
    return this._dynamic = !e, e ? (typeof e == "function" && (e = e()), g(e)[0]) : this._createTarget();
  }
  show(e) {
    if (e)
      return this._setTimer(() => {
        this.show();
      }, e === !0 ? this.options.delay : e);
    if (!this.inited) {
      this.setOptions({ show: !0 });
      return;
    }
    if (this._shown)
      return;
    const t = this.initTarget();
    if (!t)
      return;
    this._targetElement = t;
    const n = g(t), { animation: i, mask: o } = this.options;
    if (n.addClass("show"), i && n.addClass(i === !0 ? "fade" : i), this._shown = !0, this.render(), this.emit("show"), !this._virtual) {
      const r = this._triggerElement;
      g(r).addClass("with-popover-show");
    }
    this._setTimer(() => {
      n.addClass("in"), this._setTimer(() => {
        this.emit("shown");
      }, 200), o && g(document).on(`click${this.namespace}`, (r) => {
        const a = g(r.target);
        (!a.closest(`#${this._id}`).length || a.closest('[data-dismiss="popover"]').length) && this.hide();
      });
    }, 50);
  }
  hide() {
    if (!this._shown || !this._targetElement)
      return;
    const e = g(this._targetElement);
    if (this._shown = !1, this.emit("hide"), e.removeClass("in"), !this._virtual) {
      const t = this._triggerElement;
      g(t).removeClass("with-popover-show");
    }
    g(document).off(this.namespace), this._setTimer(() => {
      this.emit("hidden"), e.removeClass("show"), this._destoryTarget();
    }, this.options.animation ? 200 : 0);
  }
  toggle() {
    this._shown ? this.hide() : this.show();
  }
  destroy() {
    if (super.destroy(), !this._virtual) {
      const { namespace: e } = this;
      g(this._triggerElement).off(e);
    }
    this._timer && clearTimeout(this._timer), this._destoryTarget(), g(document).off(this.namespace);
  }
  layout() {
    const e = this._triggerElement, t = this._targetElement, n = this._layoutWatcher;
    if (!t || !e || !this._shown) {
      n && (n(), this._layoutWatcher = void 0);
      return;
    }
    n || (this._layoutWatcher = Uo(e, t, () => {
      const { placement: i, width: o, flip: r, shift: a, offset: l, arrow: h } = this.options;
      o === "100%" && !this._virtual && g(t).css({ width: g(e).width() });
      const u = h ? t.querySelector(".arrow") : null, c = h ? typeof h == "number" ? h : 8 : 0;
      Vs(e, t, {
        placement: i,
        middleware: [
          r ? Fs() : null,
          a ? On(typeof a == "object" ? a : void 0) : null,
          l || c ? js((l || 0) + c) : null,
          h ? mi({ element: u }) : null
        ].filter(Boolean)
      }).then(({ x: d, y: f, middlewareData: y, placement: w }) => {
        g(t).css({
          left: d,
          top: f
        });
        const v = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[w.split("-")[0]], b = y.arrow;
        b && g(u).css({
          left: b.x,
          top: b.y
        }).attr("class", `arrow arrow-${v}`);
      });
    }));
  }
  render(e) {
    super.render(e);
    const t = this._targetElement;
    if (!t)
      return;
    const n = this._getRenderOptions();
    if (g(t).toggleClass("popup", n.popup).css(n.style), this._dynamic) {
      let i = this._panel;
      i && i.element !== t && (i.destroy(), i = void 0), i ? i.render(n) : (i = new kr(t, n), i.on("inited", () => this.layout())), this._panel = i;
    } else
      this.layout();
  }
  _getRenderOptions() {
    const {
      popup: e,
      title: t,
      titleClass: n,
      headingClass: i,
      content: o,
      style: r,
      className: a,
      closeBtn: l,
      arrow: h
    } = this.options;
    return {
      id: `${this._id}_panel`,
      popup: e,
      title: t,
      titleClass: n,
      headingClass: i,
      content: o,
      style: { zIndex: this.constructor.Z_INDEX++, ...r },
      className: a,
      closeBtn: l,
      arrow: !!h,
      onlyInner: !0
    };
  }
  _destoryTarget() {
    var e, t, n;
    (e = this._layoutWatcher) == null || e.call(this), this._layoutWatcher = void 0, this._dynamic && ((t = this._panel) == null || t.destroy(), (n = this._targetElement) == null || n.remove(), this._panel = void 0, this._targetElement = void 0);
  }
  _setTimer(e, t = 0) {
    this._timer && clearTimeout(this._timer), this._timer = window.setTimeout(() => {
      this._timer = 0, e();
    }, t);
  }
  _createTarget() {
    const { container: e = "body" } = this.options, t = g(e);
    let n = t.find(`#${this._id}`);
    return n.length || (n = g("<div />").attr({ id: this._id, class: "popover" }).appendTo(t)), n[0];
  }
};
je.NAME = "Popover", je.Z_INDEX = 1700, je.MULTI_INSTANCE = !0, je.DEFAULT = {
  placement: "top",
  strategy: "absolute",
  flip: !0,
  arrow: !0,
  offset: 1,
  trigger: "click",
  mask: !0,
  delay: 0,
  animation: "fade",
  closeBtn: !0,
  popup: !0
};
let Ja = je;
const mo = class mo extends ht {
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
    const { placement: e, strategy: t } = this.options, n = {
      placement: e,
      strategy: t,
      middleware: []
    }, { flip: i, shift: o, arrow: r, offset: a } = this.options;
    return i && n.middleware.push(Fs()), o && n.middleware.push(o === !0 ? On() : On(o)), r && n.middleware.push(mi({ element: this.$arrow[0] })), a && n.middleware.push(js(a)), n;
  }
  createPopper() {
    const e = this.element, t = this.$target[0];
    this.cleanup = Uo(e, t, () => {
      Vs(e, t, this.computePositionConfig()).then(({ x: n, y: i, placement: o, middlewareData: r }) => {
        if (Object.assign(t.style, {
          left: `${n}px`,
          top: `${i}px`
        }), !mi || !r.arrow)
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
    const t = g(e);
    if (!t.length)
      throw new Error("popovers target must exist.");
    const { strategy: n } = this.options;
    t.addClass(n), t.addClass("hidden"), t.addClass("z-50"), t.on("click", (i) => {
      g(i.target).data("dismiss") === "popovers" && this.hide();
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
    const t = g('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
    t.on("click", () => {
      this.hide();
    }), this.$target.parent().append(t), this.$mask = t;
  }
  initArrow() {
    const { arrow: e } = this.options;
    e && (this.$arrow = g('<div class="fl-arrow bg-inherit rotate-45 absolute w-2 h-2"></div>'), this.$target.append(this.$arrow));
  }
};
mo.NAME = "Popovers", mo.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1,
  trigger: "click",
  mask: !0
};
let Qa = mo;
var Cs, $s, Xt, go, Ss, ks, Es, Er, Ts;
let Rd = (Ts = class extends W {
  constructor(t) {
    super(t);
    _(this, Es);
    _(this, Cs, void 0);
    _(this, $s, K());
    _(this, Xt, 0);
    _(this, go, (t) => {
      const n = this.state.value;
      t.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: o } = this.props;
        o == null || o(t), this.focus(), n.trim() !== "" && (i == null || i("", t));
      });
    });
    _(this, Ss, (t) => {
      const n = this.state.value, i = t.target.value, { onChange: o } = this.props;
      this.setState({ value: i }, () => {
        !o || n === i || (A(this, Es, Er).call(this), C(this, Xt, window.setTimeout(() => {
          o(i, t), C(this, Xt, 0);
        }, this.props.delay || 0)));
      });
    });
    _(this, ks, (t) => {
      const n = t.type === "focus";
      this.setState({ focus: n }, () => {
        const i = n ? this.props.onFocus : this.props.onBlur;
        i == null || i(t);
      });
    });
    this.state = { focus: !1, value: t.defaultValue || "" }, C(this, Cs, t.id || `search-box-${g.guid++}`);
  }
  get id() {
    return p(this, Cs);
  }
  get input() {
    return p(this, $s).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    A(this, Es, Er).call(this);
  }
  render(t, n) {
    const { style: i, className: o, rootClass: r, rootStyle: a, readonly: l, disabled: h, circle: u, placeholder: c, mergeIcon: d, searchIcon: f, clearIcon: y } = t, { focus: w, value: v } = n, { id: b } = this, x = typeof v != "string" || !v.trim().length;
    let $, k, S;
    return f && (S = f === !0 ? /* @__PURE__ */ m("span", { class: "magnifier" }) : /* @__PURE__ */ m(et, { icon: f })), !d && f && ($ = /* @__PURE__ */ m("label", { for: b, class: "input-control-prefix", children: S }, "prefix")), y && !x ? k = /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: p(this, go),
        children: y === !0 ? /* @__PURE__ */ m("span", { class: "close" }) : /* @__PURE__ */ m(et, { icon: y })
      }
    ) : d && f && (k = S), k && (k = /* @__PURE__ */ m("label", { for: b, class: "input-control-suffix", children: k }, "suffix")), /* @__PURE__ */ m("div", { class: R("search-box input-control", r, { focus: w, empty: x, "has-prefix-icon": $, "has-suffix-icon": k }), style: a, children: [
      $,
      /* @__PURE__ */ m(
        "input",
        {
          ref: p(this, $s),
          id: b,
          type: "text",
          class: R("form-control", o, { "rounded-full": u }),
          style: i,
          placeholder: c,
          disabled: h,
          readonly: l,
          value: v,
          onInput: p(this, Ss),
          onChange: p(this, Ss),
          onFocus: p(this, ks),
          onBlur: p(this, ks)
        }
      ),
      k
    ] });
  }
}, Cs = new WeakMap(), $s = new WeakMap(), Xt = new WeakMap(), go = new WeakMap(), Ss = new WeakMap(), ks = new WeakMap(), Es = new WeakSet(), Er = function() {
  p(this, Xt) && clearTimeout(p(this, Xt)), C(this, Xt, 0);
}, Ts.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
}, Ts);
const yo = class yo extends j {
};
yo.NAME = "SearchBox", yo.Component = Rd;
let tl = yo;
const wo = class wo extends j {
};
wo.NAME = "Toolbar", wo.Component = re;
let el = wo;
function qs(s) {
  return s.split("-")[1];
}
function na(s) {
  return s === "y" ? "height" : "width";
}
function Ye(s) {
  return s.split("-")[0];
}
function qo(s) {
  return ["top", "bottom"].includes(Ye(s)) ? "x" : "y";
}
function nl(s, e, t) {
  let { reference: n, floating: i } = s;
  const o = n.x + n.width / 2 - i.width / 2, r = n.y + n.height / 2 - i.height / 2, a = qo(e), l = na(a), h = n[l] / 2 - i[l] / 2, u = a === "x";
  let c;
  switch (Ye(e)) {
    case "top":
      c = { x: o, y: n.y - i.height };
      break;
    case "bottom":
      c = { x: o, y: n.y + n.height };
      break;
    case "right":
      c = { x: n.x + n.width, y: r };
      break;
    case "left":
      c = { x: n.x - i.width, y: r };
      break;
    default:
      c = { x: n.x, y: n.y };
  }
  switch (qs(e)) {
    case "start":
      c[a] -= h * (t && u ? -1 : 1);
      break;
    case "end":
      c[a] += h * (t && u ? -1 : 1);
  }
  return c;
}
const Ld = async (s, e, t) => {
  const { placement: n = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let h = await r.getElementRects({ reference: s, floating: e, strategy: i }), { x: u, y: c } = nl(h, n, l), d = n, f = {}, y = 0;
  for (let w = 0; w < a.length; w++) {
    const { name: v, fn: b } = a[w], { x, y: $, data: k, reset: S } = await b({ x: u, y: c, initialPlacement: n, placement: d, strategy: i, middlewareData: f, rects: h, platform: r, elements: { reference: s, floating: e } });
    u = x ?? u, c = $ ?? c, f = { ...f, [v]: { ...f[v], ...k } }, S && y <= 50 && (y++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (h = S.rects === !0 ? await r.getElementRects({ reference: s, floating: e, strategy: i }) : S.rects), { x: u, y: c } = nl(h, d, l)), w = -1);
  }
  return { x: u, y: c, placement: d, strategy: i, middlewareData: f };
};
function Ac(s) {
  return typeof s != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(s) : { top: s, right: s, bottom: s, left: s };
}
function vi(s) {
  return { ...s, top: s.y, left: s.x, right: s.x + s.width, bottom: s.y + s.height };
}
async function Ad(s, e) {
  var t;
  e === void 0 && (e = {});
  const { x: n, y: i, platform: o, rects: r, elements: a, strategy: l } = s, { boundary: h = "clippingAncestors", rootBoundary: u = "viewport", elementContext: c = "floating", altBoundary: d = !1, padding: f = 0 } = e, y = Ac(f), w = a[d ? c === "floating" ? "reference" : "floating" : c], v = vi(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(w))) == null || t ? w : w.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)), boundary: h, rootBoundary: u, strategy: l })), b = c === "floating" ? { ...r.floating, x: n, y: i } : r.reference, x = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), $ = await (o.isElement == null ? void 0 : o.isElement(x)) && await (o.getScale == null ? void 0 : o.getScale(x)) || { x: 1, y: 1 }, k = vi(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: b, offsetParent: x, strategy: l }) : b);
  return { top: (v.top - k.top + y.top) / $.y, bottom: (k.bottom - v.bottom + y.bottom) / $.y, left: (v.left - k.left + y.left) / $.x, right: (k.right - v.right + y.right) / $.x };
}
const Id = Math.min, Dd = Math.max;
function Pd(s, e, t) {
  return Dd(s, Id(e, t));
}
const Od = (s) => ({ name: "arrow", options: s, async fn(e) {
  const { element: t, padding: n = 0 } = s || {}, { x: i, y: o, placement: r, rects: a, platform: l } = e;
  if (t == null)
    return {};
  const h = Ac(n), u = { x: i, y: o }, c = qo(r), d = na(c), f = await l.getDimensions(t), y = c === "y" ? "top" : "left", w = c === "y" ? "bottom" : "right", v = a.reference[d] + a.reference[c] - u[c] - a.floating[d], b = u[c] - a.reference[c], x = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(t));
  let $ = x ? c === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0;
  $ === 0 && ($ = a.floating[d]);
  const k = v / 2 - b / 2, S = h[y], N = $ - f[d] - h[w], L = $ / 2 - f[d] / 2 + k, I = Pd(S, L, N), D = qs(r) != null && L != I && a.reference[d] / 2 - (L < S ? h[y] : h[w]) - f[d] / 2 < 0;
  return { [c]: u[c] - (D ? L < S ? S - L : N - L : 0), data: { [c]: I, centerOffset: L - I } };
} }), Hd = ["top", "right", "bottom", "left"];
Hd.reduce((s, e) => s.concat(e, e + "-start", e + "-end"), []);
const Bd = { left: "right", right: "left", bottom: "top", top: "bottom" };
function _i(s) {
  return s.replace(/left|right|bottom|top/g, (e) => Bd[e]);
}
function Wd(s, e, t) {
  t === void 0 && (t = !1);
  const n = qs(s), i = qo(s), o = na(i);
  let r = i === "x" ? n === (t ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[o] > e.floating[o] && (r = _i(r)), { main: r, cross: _i(r) };
}
const zd = { start: "end", end: "start" };
function or(s) {
  return s.replace(/start|end/g, (e) => zd[e]);
}
const Fd = function(s) {
  return s === void 0 && (s = {}), { name: "flip", options: s, async fn(e) {
    var t;
    const { placement: n, middlewareData: i, rects: o, initialPlacement: r, platform: a, elements: l } = e, { mainAxis: h = !0, crossAxis: u = !0, fallbackPlacements: c, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: y = !0, ...w } = s, v = Ye(n), b = Ye(r) === r, x = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = c || (b || !y ? [_i(r)] : function(O) {
      const P = _i(O);
      return [or(O), P, or(P)];
    }(r));
    c || f === "none" || $.push(...function(O, P, M, E) {
      const H = qs(O);
      let B = function(z, G, he) {
        const Ys = ["left", "right"], Nn = ["right", "left"], Ks = ["top", "bottom"], Xo = ["bottom", "top"];
        switch (z) {
          case "top":
          case "bottom":
            return he ? G ? Nn : Ys : G ? Ys : Nn;
          case "left":
          case "right":
            return G ? Ks : Xo;
          default:
            return [];
        }
      }(Ye(O), M === "start", E);
      return H && (B = B.map((z) => z + "-" + H), P && (B = B.concat(B.map(or)))), B;
    }(r, y, f, x));
    const k = [r, ...$], S = await Ad(e, w), N = [];
    let L = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (h && N.push(S[v]), u) {
      const { main: O, cross: P } = Wd(n, o, x);
      N.push(S[O], S[P]);
    }
    if (L = [...L, { placement: n, overflows: N }], !N.every((O) => O <= 0)) {
      var I;
      const O = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, P = k[O];
      if (P)
        return { data: { index: O, overflows: L }, reset: { placement: P } };
      let M = "bottom";
      switch (d) {
        case "bestFit": {
          var D;
          const E = (D = L.map((H) => [H, H.overflows.filter((B) => B > 0).reduce((B, z) => B + z, 0)]).sort((H, B) => H[1] - B[1])[0]) == null ? void 0 : D[0].placement;
          E && (M = E);
          break;
        }
        case "initialPlacement":
          M = r;
      }
      if (n !== M)
        return { reset: { placement: M } };
    }
    return {};
  } };
}, jd = function(s) {
  return s === void 0 && (s = 0), { name: "offset", options: s, async fn(e) {
    const { x: t, y: n } = e, i = await async function(o, r) {
      const { placement: a, platform: l, elements: h } = o, u = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), c = Ye(a), d = qs(a), f = qo(a) === "x", y = ["left", "top"].includes(c) ? -1 : 1, w = u && f ? -1 : 1, v = typeof r == "function" ? r(o) : r;
      let { mainAxis: b, crossAxis: x, alignmentAxis: $ } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return d && typeof $ == "number" && (x = d === "end" ? -1 * $ : $), f ? { x: x * w, y: b * y } : { x: b * y, y: x * w };
    }(e, s);
    return { x: t + i.x, y: n + i.y, data: i };
  } };
};
function ct(s) {
  var e;
  return ((e = s.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Et(s) {
  return ct(s).getComputedStyle(s);
}
function ae(s) {
  return Dc(s) ? (s.nodeName || "").toLowerCase() : "";
}
let Js;
function Ic() {
  if (Js)
    return Js;
  const s = navigator.userAgentData;
  return s && Array.isArray(s.brands) ? (Js = s.brands.map((e) => e.brand + "/" + e.version).join(" "), Js) : navigator.userAgent;
}
function zt(s) {
  return s instanceof ct(s).HTMLElement;
}
function dt(s) {
  return s instanceof ct(s).Element;
}
function Dc(s) {
  return s instanceof ct(s).Node;
}
function sl(s) {
  return typeof ShadowRoot > "u" ? !1 : s instanceof ct(s).ShadowRoot || s instanceof ShadowRoot;
}
function Yo(s) {
  const { overflow: e, overflowX: t, overflowY: n, display: i } = Et(s);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + t) && !["inline", "contents"].includes(i);
}
function Vd(s) {
  return ["table", "td", "th"].includes(ae(s));
}
function Tr(s) {
  const e = /firefox/i.test(Ic()), t = Et(s), n = t.backdropFilter || t.WebkitBackdropFilter;
  return t.transform !== "none" || t.perspective !== "none" || !!n && n !== "none" || e && t.willChange === "filter" || e && !!t.filter && t.filter !== "none" || ["transform", "perspective"].some((i) => t.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = t.contain;
    return o != null && o.includes(i);
  });
}
function Pc() {
  return !/^((?!chrome|android).)*safari/i.test(Ic());
}
function sa(s) {
  return ["html", "body", "#document"].includes(ae(s));
}
const il = Math.min, Ln = Math.max, xi = Math.round;
function Oc(s) {
  const e = Et(s);
  let t = parseFloat(e.width), n = parseFloat(e.height);
  const i = s.offsetWidth, o = s.offsetHeight, r = xi(t) !== i || xi(n) !== o;
  return r && (t = i, n = o), { width: t, height: n, fallback: r };
}
function Hc(s) {
  return dt(s) ? s : s.contextElement;
}
const Bc = { x: 1, y: 1 };
function Ke(s) {
  const e = Hc(s);
  if (!zt(e))
    return Bc;
  const t = e.getBoundingClientRect(), { width: n, height: i, fallback: o } = Oc(e);
  let r = (o ? xi(t.width) : t.width) / n, a = (o ? xi(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
function Oe(s, e, t, n) {
  var i, o;
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const r = s.getBoundingClientRect(), a = Hc(s);
  let l = Bc;
  e && (n ? dt(n) && (l = Ke(n)) : l = Ke(s));
  const h = a ? ct(a) : window, u = !Pc() && t;
  let c = (r.left + (u && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, d = (r.top + (u && ((o = h.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / l.y, f = r.width / l.x, y = r.height / l.y;
  if (a) {
    const w = ct(a), v = n && dt(n) ? ct(n) : n;
    let b = w.frameElement;
    for (; b && n && v !== w; ) {
      const x = Ke(b), $ = b.getBoundingClientRect(), k = getComputedStyle(b);
      $.x += (b.clientLeft + parseFloat(k.paddingLeft)) * x.x, $.y += (b.clientTop + parseFloat(k.paddingTop)) * x.y, c *= x.x, d *= x.y, f *= x.x, y *= x.y, c += $.x, d += $.y, b = ct(b).frameElement;
    }
  }
  return { width: f, height: y, top: d, right: c + f, bottom: d + y, left: c, x: c, y: d };
}
function se(s) {
  return ((Dc(s) ? s.ownerDocument : s.document) || window.document).documentElement;
}
function Ko(s) {
  return dt(s) ? { scrollLeft: s.scrollLeft, scrollTop: s.scrollTop } : { scrollLeft: s.pageXOffset, scrollTop: s.pageYOffset };
}
function Wc(s) {
  return Oe(se(s)).left + Ko(s).scrollLeft;
}
function Ud(s, e, t) {
  const n = zt(e), i = se(e), o = Oe(s, !0, t === "fixed", e);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (n || !n && t !== "fixed")
    if ((ae(e) !== "body" || Yo(i)) && (r = Ko(e)), zt(e)) {
      const l = Oe(e, !0);
      a.x = l.x + e.clientLeft, a.y = l.y + e.clientTop;
    } else
      i && (a.x = Wc(i));
  return { x: o.left + r.scrollLeft - a.x, y: o.top + r.scrollTop - a.y, width: o.width, height: o.height };
}
function zn(s) {
  if (ae(s) === "html")
    return s;
  const e = s.assignedSlot || s.parentNode || (sl(s) ? s.host : null) || se(s);
  return sl(e) ? e.host : e;
}
function ol(s) {
  return zt(s) && Et(s).position !== "fixed" ? s.offsetParent : null;
}
function rl(s) {
  const e = ct(s);
  let t = ol(s);
  for (; t && Vd(t) && Et(t).position === "static"; )
    t = ol(t);
  return t && (ae(t) === "html" || ae(t) === "body" && Et(t).position === "static" && !Tr(t)) ? e : t || function(n) {
    let i = zn(n);
    for (; zt(i) && !sa(i); ) {
      if (Tr(i))
        return i;
      i = zn(i);
    }
    return null;
  }(s) || e;
}
function zc(s) {
  const e = zn(s);
  return sa(e) ? s.ownerDocument.body : zt(e) && Yo(e) ? e : zc(e);
}
function An(s, e) {
  var t;
  e === void 0 && (e = []);
  const n = zc(s), i = n === ((t = s.ownerDocument) == null ? void 0 : t.body), o = ct(n);
  return i ? e.concat(o, o.visualViewport || [], Yo(n) ? n : []) : e.concat(n, An(n));
}
function al(s, e, t) {
  return e === "viewport" ? vi(function(n, i) {
    const o = ct(n), r = se(n), a = o.visualViewport;
    let l = r.clientWidth, h = r.clientHeight, u = 0, c = 0;
    if (a) {
      l = a.width, h = a.height;
      const d = Pc();
      (d || !d && i === "fixed") && (u = a.offsetLeft, c = a.offsetTop);
    }
    return { width: l, height: h, x: u, y: c };
  }(s, t)) : dt(e) ? function(n, i) {
    const o = Oe(n, !0, i === "fixed"), r = o.top + n.clientTop, a = o.left + n.clientLeft, l = zt(n) ? Ke(n) : { x: 1, y: 1 }, h = n.clientWidth * l.x, u = n.clientHeight * l.y, c = a * l.x, d = r * l.y;
    return { top: d, left: c, right: c + h, bottom: d + u, x: c, y: d, width: h, height: u };
  }(e, t) : vi(function(n) {
    var i;
    const o = se(n), r = Ko(n), a = (i = n.ownerDocument) == null ? void 0 : i.body, l = Ln(o.scrollWidth, o.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = Ln(o.scrollHeight, o.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let u = -r.scrollLeft + Wc(n);
    const c = -r.scrollTop;
    return Et(a || o).direction === "rtl" && (u += Ln(o.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: u, y: c };
  }(se(s)));
}
const qd = { getClippingRect: function(s) {
  let { element: e, boundary: t, rootBoundary: n, strategy: i } = s;
  const o = t === "clippingAncestors" ? function(h, u) {
    const c = u.get(h);
    if (c)
      return c;
    let d = An(h).filter((v) => dt(v) && ae(v) !== "body"), f = null;
    const y = Et(h).position === "fixed";
    let w = y ? zn(h) : h;
    for (; dt(w) && !sa(w); ) {
      const v = Et(w), b = Tr(w);
      (y ? b || f : b || v.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = v : d = d.filter((x) => x !== w), w = zn(w);
    }
    return u.set(h, d), d;
  }(e, this._c) : [].concat(t), r = [...o, n], a = r[0], l = r.reduce((h, u) => {
    const c = al(e, u, i);
    return h.top = Ln(c.top, h.top), h.right = il(c.right, h.right), h.bottom = il(c.bottom, h.bottom), h.left = Ln(c.left, h.left), h;
  }, al(e, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(s) {
  let { rect: e, offsetParent: t, strategy: n } = s;
  const i = zt(t), o = se(t);
  if (t === o)
    return e;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && n !== "fixed") && ((ae(t) !== "body" || Yo(o)) && (r = Ko(t)), zt(t))) {
    const h = Oe(t);
    a = Ke(t), l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
  }
  return { width: e.width * a.x, height: e.height * a.y, x: e.x * a.x - r.scrollLeft * a.x + l.x, y: e.y * a.y - r.scrollTop * a.y + l.y };
}, isElement: dt, getDimensions: function(s) {
  return Oc(s);
}, getOffsetParent: rl, getDocumentElement: se, getScale: Ke, async getElementRects(s) {
  let { reference: e, floating: t, strategy: n } = s;
  const i = this.getOffsetParent || rl, o = this.getDimensions;
  return { reference: Ud(e, await i(t), n), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: (s) => Array.from(s.getClientRects()), isRTL: (s) => Et(s).direction === "rtl" };
function Yd(s, e, t, n) {
  n === void 0 && (n = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, animationFrame: a = !1 } = n, l = i && !a, h = l || o ? [...dt(s) ? An(s) : s.contextElement ? An(s.contextElement) : [], ...An(e)] : [];
  h.forEach((f) => {
    l && f.addEventListener("scroll", t, { passive: !0 }), o && f.addEventListener("resize", t);
  });
  let u, c = null;
  if (r) {
    let f = !0;
    c = new ResizeObserver(() => {
      f || t(), f = !1;
    }), dt(s) && !a && c.observe(s), dt(s) || !s.contextElement || a || c.observe(s.contextElement), c.observe(e);
  }
  let d = a ? Oe(s) : null;
  return a && function f() {
    const y = Oe(s);
    !d || y.x === d.x && y.y === d.y && y.width === d.width && y.height === d.height || t(), d = y, u = requestAnimationFrame(f);
  }(), t(), () => {
    var f;
    h.forEach((y) => {
      l && y.removeEventListener("scroll", t), o && y.removeEventListener("resize", t);
    }), (f = c) == null || f.disconnect(), c = null, a && cancelAnimationFrame(u);
  };
}
const Kd = (s, e, t) => {
  const n = /* @__PURE__ */ new Map(), i = { platform: qd, ...t }, o = { ...i.platform, _c: n };
  return Ld(s, e, { ...i, platform: o });
};
var _e, gn, xe, Ce, st, bo, Ns, Ms, Nr, vo, Fc, _o, jc, xo, Vc, Co, Uc, $o, qc, So, Yc, ko, Kc, $e, Eo, Xc;
const at = class at extends ht {
  constructor() {
    super(...arguments);
    _(this, Ms);
    _(this, vo);
    _(this, _o);
    _(this, xo);
    _(this, Co);
    _(this, $o);
    _(this, So);
    _(this, ko);
    _(this, Eo);
    _(this, _e, void 0);
    _(this, gn, void 0);
    _(this, xe, void 0);
    _(this, Ce, void 0);
    _(this, st, void 0);
    _(this, bo, void 0);
    _(this, Ns, void 0);
    _(this, $e, void 0);
    C(this, _e, !1), C(this, xe, 0), this.hideLater = () => {
      p(this, $e).call(this), C(this, xe, window.setTimeout(this.hide.bind(this), 100));
    }, C(this, $e, () => {
      clearTimeout(p(this, xe)), C(this, xe, 0);
    });
  }
  get isShown() {
    var t;
    return (t = p(this, Ce)) == null ? void 0 : t.classList.contains(at.CLASS_SHOW);
  }
  get tooltip() {
    return p(this, Ce) || A(this, _o, jc).call(this);
  }
  get trigger() {
    return p(this, bo) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${at.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "tooltip");
  }
  show(t) {
    return this.setOptions(t), !p(this, _e) && this.isHover && A(this, Eo, Xc).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(at.CLASS_SHOW), A(this, So, Yc).call(this), !0;
  }
  hide() {
    var t, n;
    return (t = p(this, Ns)) == null || t.call(this), this.element.classList.remove(this.elementShowClass), (n = p(this, Ce)) == null || n.classList.remove(at.CLASS_SHOW), !0;
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    p(this, _e) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", p(this, $e)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(t = {}) {
    t instanceof Event && (t = { event: t });
    const { exclude: n } = t;
    if (n) {
      const i = this.getAll(), o = new Set(n);
      for (const r of i)
        o.has(r.element) || r.hide();
    }
  }
};
_e = new WeakMap(), gn = new WeakMap(), xe = new WeakMap(), Ce = new WeakMap(), st = new WeakMap(), bo = new WeakMap(), Ns = new WeakMap(), Ms = new WeakSet(), Nr = function() {
  const { arrow: t } = this.options;
  return typeof t == "number" ? t : 8;
}, vo = new WeakSet(), Fc = function() {
  const t = A(this, Ms, Nr).call(this);
  return C(this, st, document.createElement("div")), p(this, st).style.position = this.options.strategy, p(this, st).style.width = `${t}px`, p(this, st).style.height = `${t}px`, p(this, st).style.transform = "rotate(45deg)", p(this, st);
}, _o = new WeakSet(), jc = function() {
  var i;
  const t = at.TOOLTIP_CLASS;
  let n;
  if (this.isDynamic) {
    n = document.createElement("div");
    const o = this.options.className ? this.options.className.split(" ") : [];
    let r = [t, this.options.type || ""];
    r = r.concat(o), n.classList.add(...r), n[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "";
  } else if (this.element) {
    const o = this.element.getAttribute("href") ?? this.element.dataset.target;
    if (o != null && o.startsWith("#") && (n = document.querySelector(o)), !n) {
      const r = this.element.nextElementSibling;
      r != null && r.classList.contains(t) ? n = r : n = (i = this.element.parentNode) == null ? void 0 : i.querySelector(`.${t}`);
    }
  }
  if (this.options.arrow && (n == null || n.append(A(this, vo, Fc).call(this))), !n)
    throw new Error("Tooltip: Cannot find tooltip element");
  return n.style.width = "max-content", n.style.position = "absolute", n.style.top = "0", n.style.left = "0", document.body.appendChild(n), C(this, Ce, n), n;
}, xo = new WeakSet(), Vc = function() {
  var r;
  const t = A(this, Ms, Nr).call(this), { strategy: n, placement: i } = this.options, o = {
    middleware: [jd(t), Fd()],
    strategy: n,
    placement: i
  };
  return this.options.arrow && p(this, st) && ((r = o.middleware) == null || r.push(Od({ element: p(this, st) }))), o;
}, Co = new WeakSet(), Uc = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}, $o = new WeakSet(), qc = function(t) {
  return t === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : t === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : t === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
}, So = new WeakSet(), Yc = function() {
  const t = A(this, xo, Vc).call(this), n = A(this, ko, Kc).call(this);
  C(this, Ns, Yd(n, this.tooltip, () => {
    this.element && Kd(n, this.tooltip, t).then(({ x: i, y: o, middlewareData: r, placement: a }) => {
      Object.assign(this.tooltip.style, {
        left: `${i}px`,
        top: `${o}px`
      });
      const l = a.split("-")[0], h = A(this, Co, Uc).call(this, l);
      if (r.arrow && p(this, st)) {
        const { x: u, y: c } = r.arrow;
        Object.assign(p(this, st).style, {
          left: u != null ? `${u}px` : "",
          top: c != null ? `${c}px` : "",
          [h]: `${-p(this, st).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...A(this, $o, qc).call(this, l)
        });
      }
    });
  }));
}, ko = new WeakSet(), Kc = function() {
  return p(this, gn) || C(this, gn, {
    getBoundingClientRect: () => {
      const { element: t } = this;
      if (t instanceof MouseEvent) {
        const { clientX: n, clientY: i } = t;
        return {
          width: 0,
          height: 0,
          top: i,
          right: n,
          bottom: i,
          left: n
        };
      }
      return t instanceof HTMLElement ? t.getBoundingClientRect() : t;
    },
    contextElement: this.element
  }), p(this, gn);
}, $e = new WeakMap(), Eo = new WeakSet(), Xc = function() {
  const { tooltip: t } = this;
  t.addEventListener("mouseenter", p(this, $e)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), C(this, _e, !0);
}, at.NAME = "tooltip", at.TOOLTIP_CLASS = "tooltip", at.CLASS_SHOW = "show", at.MENU_SELECTOR = '[data-toggle="tooltip"]:not(.disabled):not(:disabled)', at.DEFAULT = {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
};
let Ot = at;
document.addEventListener("click", function(s) {
  var n;
  const e = s.target, t = (n = e.closest) == null ? void 0 : n.call(e, Ot.MENU_SELECTOR);
  if (t) {
    const i = Ot.ensure(t);
    i.options.trigger === "click" && i.toggle();
  } else
    Ot.clear({ event: s });
});
document.addEventListener("mouseover", function(s) {
  var i;
  const e = s.target, t = (i = e.closest) == null ? void 0 : i.call(e, Ot.MENU_SELECTOR);
  if (!t)
    return;
  const n = Ot.ensure(t);
  n.isHover && n.show();
});
function Xd({
  type: s,
  component: e,
  className: t,
  children: n,
  content: i,
  style: o,
  attrs: r,
  url: a,
  disabled: l,
  active: h,
  icon: u,
  text: c,
  target: d,
  trailingIcon: f,
  hint: y,
  checked: w,
  actions: v,
  show: b,
  level: x = 0,
  items: $,
  ...k
}) {
  const S = Array.isArray(v) ? { items: v } : v;
  return S && (S.btnProps || (S.btnProps = { size: "sm" }), S.className = R("tree-actions not-nested-toggle", S.className)), /* @__PURE__ */ m(
    "div",
    {
      className: R("tree-item-content", t, { disabled: l, active: h }),
      title: y,
      "data-target": d,
      style: Object.assign({ paddingLeft: `calc(${x} * var(--tree-indent, 20px))` }, o),
      "data-level": x,
      ...r,
      ...k,
      children: [
        /* @__PURE__ */ m("span", { class: `tree-toggle-icon${$ ? " state" : ""}`, children: $ ? /* @__PURE__ */ m("span", { class: `caret-${b ? "down" : "right"}` }) : null }),
        typeof w == "boolean" ? /* @__PURE__ */ m("div", { class: `tree-checkbox checkbox-primary${w ? " checked" : ""}`, children: /* @__PURE__ */ m("label", {}) }) : null,
        /* @__PURE__ */ m(et, { icon: u, className: "tree-icon" }),
        a ? /* @__PURE__ */ m("a", { className: "text tree-link not-nested-toggle", href: a, children: c }) : /* @__PURE__ */ m("span", { class: "text", children: c }),
        /* @__PURE__ */ m(Tn, { content: i }),
        n,
        S ? /* @__PURE__ */ m(re, { ...S }) : null,
        /* @__PURE__ */ m(et, { icon: f, className: "tree-trailing-icon" })
      ]
    }
  );
}
var Sn;
let Gd = (Sn = class extends Zr {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "tree";
  }
  getNestedMenuProps(e) {
    const t = super.getNestedMenuProps(e), { collapsedIcon: n, expandedIcon: i, normalIcon: o, itemActions: r } = this.props;
    return {
      collapsedIcon: n,
      expandedIcon: i,
      normalIcon: o,
      itemActions: r,
      ...t
    };
  }
  getItemRenderProps(e, t, n) {
    const i = super.getItemRenderProps(e, t, n), { collapsedIcon: o, expandedIcon: r, normalIcon: a, itemActions: l } = e;
    return i.icon === void 0 && (i.icon = i.items ? i.show ? r : o : a), i.actions === void 0 && l && (i.actions = typeof l == "function" ? l(t) : l), i;
  }
  renderToggleIcon() {
    return null;
  }
  beforeRender() {
    const e = super.beforeRender(), { hover: t } = this.props;
    return t && (e.className = R(e.className, "tree-hover")), e;
  }
}, Sn.ItemComponents = {
  item: Xd
}, Sn.NAME = "tree", Sn);
const To = class To extends j {
};
To.NAME = "Tree", To.Component = Gd;
let ll = To;
const la = class la extends ht {
  init() {
    const { multiple: e, defaultFileList: t, limitSize: n } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = n ? cu(n) : Number.MAX_VALUE, this.currentBytes = 0, e || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), t && this.addFileItem(t);
  }
  initUploadCash() {
    const { name: e, uploadText: t, uploadIcon: n, listPosition: i, btnClass: o, tip: r, draggable: a } = this.options;
    this.$list = g('<ul class="file-list py-1"></ul>');
    const l = g(`<span class="upload-tip">${r}</span>`);
    if (!a) {
      if (this.$label = g(`<label class="btn ${o}" for="${e}">${t}</label>`), n) {
        const d = g(`<i class="icon icon-${n}"></i>`);
        this.$label.prepend(d);
      }
      const c = i === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...c);
      return;
    }
    const h = g(`<span class="text-primary">${t}</span>`);
    if (n) {
      const c = g(`<i class="icon icon-${n} mr-1"></i>`);
      h.prepend(c);
    }
    this.$label = g(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16 border border-dashed border-gray" for="${e}"></label>`).append(h).append(l), this.bindDragEvent();
    const u = i === "bottom" ? [this.$label, this.$list] : [this.$list, this.$label];
    this.$element.append(this.$input, ...u);
  }
  bindDragEvent() {
    this.$label.on("dragover", (e) => {
      e.preventDefault(), console.log("dragover"), this.$label.hasClass("border-primary") || (this.$label.removeClass("border-gray"), this.$label.addClass("border-primary"));
    }).on("dragleave", (e) => {
      e.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray");
    }).on("drop", (e) => {
      var n;
      e.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray");
      const t = Array.from(((n = e.dataTransfer) == null ? void 0 : n.files) ?? []);
      console.log(e.dataTransfer.files), this.addFileItem(t);
    });
  }
  initFileInputCash() {
    const { name: e, multiple: t, accept: n } = this.options;
    this.$input = g("<input />").addClass("hidden").prop("type", "file").prop("name", e).prop("id", e).prop("multiple", t).on("change", (i) => {
      const o = i.target.files;
      if (!o)
        return;
      const r = [...o];
      this.addFileItem(r);
    }), n && this.$input.prop("accept", n);
  }
  addFile(e) {
    const { multiple: t, onSizeChange: n } = this.options;
    t || (this.renameMap.clear(), this.fileMap.clear(), this.dataTransfer.items.clear(), this.currentBytes = e.size), this.renameMap.set(e.name, e.name), this.fileMap.set(e.name, e), this.dataTransfer.items.add(e), this.$input.prop("files", this.dataTransfer.files), this.currentBytes += e.size, n == null || n(this.currentBytes);
  }
  renameDuplicatedFile(e) {
    if (!this.fileMap.has(e.name))
      return e;
    const t = e.name.lastIndexOf(".");
    if (t === -1)
      return this.renameDuplicatedFile(new File([e], `${e.name}(1)`));
    const n = e.name.substring(0, t), i = e.name.substring(t);
    return this.renameDuplicatedFile(new File([e], `${n}(1)${i}`));
  }
  filterFiles(e) {
    const { accept: t } = this.options;
    if (!t)
      return e;
    const n = t.replace(/\s/g, "").split(","), i = [], o = [], r = [];
    return n.forEach((a) => {
      a.endsWith("/*") ? o.push(a.substring(0, a.length - 1)) : a.includes("/") ? i.push(a) : a.startsWith(".") && r.push(a);
    }), e.filter((a) => i.includes(a.type) || o.some((l) => a.type.startsWith(l)) || r.some((l) => a.name.endsWith(l)));
  }
  addFileItem(e) {
    e = this.filterFiles(e);
    const { multiple: t, limitCount: n, exceededSizeHint: i, exceededCountHint: o, onAdd: r } = this.options;
    if (t) {
      const h = [];
      for (let u of e) {
        if (n && this.fileMap.size >= n)
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
    const n = this.fileMap.get(t);
    if (!n)
      return;
    const { onDelete: i, onSizeChange: o } = this.options, r = this.itemMap.get(n.name);
    this.itemMap.delete(n.name), r == null || r.addClass("hidden");
    const a = (l = r == null ? void 0 : r.find(".file-delete")) == null ? void 0 : l.data("tooltip");
    a && (a.destroy(), a.tooltip.remove()), setTimeout(() => r == null ? void 0 : r.remove(), 3e3), i == null || i(n), this.fileMap.delete(n.name), this.currentBytes -= n.size, o == null || o(this.currentBytes), this.dataTransfer = new DataTransfer(), this.fileMap.forEach((h) => this.dataTransfer.items.add(h)), this.$input.prop("files", this.dataTransfer.files);
  }
  renameFileItem(e, t) {
    var o, r;
    const n = this.renameMap.get(e.name);
    this.renameMap.set(e.name, t), n && (e = this.fileMap.get(n) ?? e);
    const i = this.itemMap.get(e.name);
    i && (this.itemMap.set(t, i).delete(e.name), (r = (o = this.options).onRename) == null || r.call(o, t, e.name), this.fileMap.delete(e.name), this.dataTransfer = new DataTransfer(), e = new File([e], t), this.fileMap.set(t, e).forEach((a) => this.dataTransfer.items.add(a)), this.$input.prop("files", this.dataTransfer.files));
  }
  createFileItem(e) {
    const { showIcon: t } = this.options;
    return this.addFile(e), g('<li class="file-item my-1 flex items-center gap-2"></li>').append(t ? this.fileIcon() : null).append(this.createFileInfo(e)).append(this.createRenameContainer(e));
  }
  fileIcon() {
    const { icon: e } = this.options;
    return g(`<i class="icon icon-${e}"></i>`);
  }
  fileRenameBtn() {
    const { useIconBtn: e, renameText: t, renameIcon: n, renameClass: i } = this.options;
    if (e) {
      const o = g(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-rename");
      return new Ot(o, { title: t }), o;
    }
    return g("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(t);
  }
  fileDeleteBtn() {
    const { useIconBtn: e, deleteText: t, deleteIcon: n, deleteClass: i } = this.options;
    if (e) {
      const o = g(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return o.data("tooltip", new Ot(o, { title: t })), o;
    }
    return g("<button />").html(t).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(e) {
    return g(`<span class="file-name">${e}</span>`);
  }
  fileSize(e) {
    return g(`<span class="file-size text-gray">${lu(e)}</span>`);
  }
  createFileInfo(e) {
    const { renameBtn: t, deleteBtn: n, showSize: i } = this.options, o = g('<div class="file-info flex items-center gap-2"></div>');
    return o.append(this.fileName(e.name)), i && o.append(this.fileSize(e.size)), t && o.append(
      this.fileRenameBtn().on("click", (r) => {
        o.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = g(r.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), n && o.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(e.name))
    ), o;
  }
  createRenameContainer(e) {
    const { confirmText: t, cancelText: n, duplicatedHint: i } = this.options, o = g('<div class="input-group input-rename-container hidden"></div>'), r = g("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", e.name).on("keydown", (u) => {
      if (u.key === "Enter") {
        const c = o.closest(".file-item"), d = c.find(".file-name");
        if (d.html() === r.val()) {
          o.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(r.val()))
          return alert(i);
        this.renameFileItem(e, r.val()), o.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden"), d.html(r.val());
      } else
        u.key === "Escape" && (r.val(e.name), o.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden"));
    }), a = g("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(t).on("click", () => {
      const u = o.closest(".file-item"), c = u.find(".file-name");
      if (c.html() === r.val()) {
        o.addClass("hidden"), u.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(r.val()))
        return alert(i);
      this.renameFileItem(e, r.val()), o.addClass("hidden"), u.find(".file-info.hidden").removeClass("hidden"), c.html(r.val());
    }), l = g("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(n).on("click", () => {
      r.val(e.name), o.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), h = g('<div class="btn-group"></div').append(a).append(l);
    return o.append(r).append(h);
  }
};
la.DEFAULT = {
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
let Mr = la;
const ca = class ca extends Mr {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = g(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(g('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: e, tip: t, uploadText: n, uploadIcon: i, totalCountText: o } = this.options;
    this.$list = g('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = g('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const r = g(`<label for="${e}" class="text-primary cursor-pointer">${n}</label>`);
    if (i) {
      const a = g(`<i class="icon icon-${i} mr-1"></i>`);
      r.prepend(a);
    }
    this.$tip = g('<div class="absolute inset-0 col justify-center items-center"></div>').append(r), t && this.$tip.append(g(`<span class="upload-tip">${t}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = g('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(o.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
  }
  filterFiles(e) {
    const { accept: t } = this.options;
    if (t === "image/*")
      return e.filter((i) => i.type.includes("image"));
    const n = t.replace(/\s/g, "").replace(/\./g, "image/").split(",");
    return e.filter((i) => n.includes(i.type));
  }
  createFileItem(e) {
    const t = super.createFileItem(e).addClass("relative").removeClass("flex items-center gap-2 my-1");
    this.setImageUrl(e, t);
    const { deleteBtn: n, showSize: i } = this.options;
    return n && t.append(
      this.fileDeleteBtn().addClass("absolute right-0 top-0 text-white").css({ background: "var(--color-slate-500)" }).on("click", () => this.deleteFileItem(e.name))
    ), i && t.append(
      this.fileSize(e.size).addClass("file-size label text-white circle darker absolute px-1 hidden").removeClass("text-gray").css({ top: 96, left: 4 })
    ), t;
  }
  setImageUrl(e, t) {
    const n = new FileReader();
    n.onload = () => {
      g('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${n.result})` }).prependTo(t);
    }, n.readAsDataURL(e);
  }
  createFileInfo(e) {
    const t = this.fileRenameBtn().addClass("flex-none").on("click", (i) => {
      const o = g(i.target).closest(".file-item");
      o.find(".file-info").addClass("hidden"), o.find(".input-rename-container").removeClass("hidden");
      const r = o.find("input")[0];
      r.focus(), r.value.lastIndexOf(".") !== -1 && r.setSelectionRange(0, r.value.lastIndexOf("."));
    });
    return g('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(g(`<div class="file-name py-1 ellipsis">${e.name}</div>`)).append(t);
  }
  createRenameContainer(e) {
    const { duplicatedHint: t } = this.options, n = g("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", e.name).css({ width: 120 }).on("keydown", (i) => {
      if (i.key === "Enter") {
        const o = n.closest(".file-item").find(".file-name");
        if (o.html() === n.val()) {
          n.addClass("hidden"), o.closest(".file-info").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(n.val()))
          return alert(t);
        this.renameFileItem(e, n.val()), n.addClass("hidden"), o.html(n.val()).closest(".file-info").removeClass("hidden");
      } else
        i.key === "Escape" && n.val(e.name).addClass("hidden").closest(".file-item").find(".file-name").removeClass("hidden");
    }).on("blur", () => {
      const i = n.closest(".file-item").find(".file-name");
      if (i.html() === n.val()) {
        n.addClass("hidden"), i.closest(".file-info").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(n.val()))
        return alert(t);
      this.renameFileItem(e, n.val()), n.addClass("hidden"), i.html(n.val()).closest(".file-info").removeClass("hidden");
    });
    return n;
  }
};
ca.DEFAULT = {
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
let cl = ca;
let Zd = class extends W {
  constructor() {
    super(...arguments), this._onDragStart = (e) => {
      var i, o, r;
      const t = e.target.closest(".dashboard-block");
      if (!t)
        return;
      const n = t.getBoundingClientRect();
      if (e.clientY - n.top > 48) {
        e.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (i = e.dataTransfer) == null || i.setData("application/id", this.props.id), (r = (o = this.props).onDragStart) == null || r.call(o, e);
    }, this._onDragEnd = (e) => {
      var t, n;
      this.setState({ dragging: !1 }), (n = (t = this.props).onDragEnd) == null || n.call(t, e);
    };
  }
  render() {
    const { left: e, top: t, id: n, onMenuBtnClick: i, title: o, width: r, height: a, content: l, loading: h } = this.props, { dragging: u } = this.state;
    return /* @__PURE__ */ m("div", { class: "dashboard-block-cell", style: { left: e, top: t, width: r, height: a }, children: /* @__PURE__ */ m(
      "div",
      {
        class: `dashboard-block load-indicator${h && !l ? " loading" : ""}${i ? " has-more-menu" : ""}${u ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: this._onDragStart,
        onDragEnd: this._onDragEnd,
        "data-id": n,
        children: [
          /* @__PURE__ */ m("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ m("div", { class: "dashboard-block-title", children: o }),
            i ? /* @__PURE__ */ m("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ m("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: i, children: /* @__PURE__ */ m("div", { class: "more-vert" }) }) }) : null
          ] }),
          g.isPlainObject(l) && l.html ? /* @__PURE__ */ m(Hs, { class: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ m("div", { class: "dashboard-block-body", children: l })
        ]
      }
    ) });
  }
};
const hl = ([s, e, t, n], [i, o, r, a]) => !(s + t <= i || i + r <= s || e + n <= o || o + a <= e), Qs = "Dashboard:Block.cache:";
var Rs;
let Jd = (Rs = class extends W {
  constructor(e) {
    super(e), this.map = /* @__PURE__ */ new Map(), this._handleDragStart = (t) => {
      var i;
      const n = (i = t.dataTransfer) == null ? void 0 : i.getData("application/id");
      n !== void 0 && (this.setState({ dragging: n }), console.log("handleBlockDragStart", t));
    }, this._handleDragEnd = (t) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", t);
    }, this._handleMenuClick = (t) => {
      const n = t.target.closest(".dashboard-block");
      if (!n)
        return;
      const i = n.dataset.id;
      if (!i)
        return;
      const o = this.getBlock(i);
      if (!o || !o.menu)
        return;
      t.stopPropagation();
      const { menu: r } = o, { onClickMenu: a } = this.props;
      lt.show({
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
    const { id: n } = e, { blocks: i } = this.state, o = i.findIndex((a) => a.id === n);
    if (o < 0)
      return;
    const r = i[o];
    e.fetch && e.fetch !== r.fetch && r.needLoad && (e.needLoad = !1), i[o] = { ...r, ...e }, this.setState({ blocks: i }, t);
  }
  delete(e) {
    const { blocks: t } = this.state, n = t.findIndex((i) => i.id === e);
    n < 0 || (t.splice(n, 1), this.setState({ blocks: t }));
  }
  add(e) {
    e = Array.isArray(e) ? e : [e], this.setState({ blocks: [...this.state.blocks, ...this._initBlocks(e)] });
  }
  load(e, t) {
    const n = this.getBlock(e);
    if (!n || n.loading || (t = t || n.fetch, typeof t == "string" ? t = { url: t } : typeof t == "function" && (t = t(n.id, n)), !t || !t.url))
      return;
    const { url: i, ...o } = t;
    this.update({ id: e, loading: !0, needLoad: !1 }, async () => {
      const r = Y(i, n);
      try {
        const a = await fetch(Y(r, n), {
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
        const l = /* @__PURE__ */ m("div", { class: "panel center text-danger p-5", children: [
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
    for (const n of e) {
      if (n.loading)
        return;
      n.needLoad && (t = n.id);
    }
    t.length && requestAnimationFrame(() => this.load(t));
  }
  _setCache(e, t) {
    const { cache: n } = this.props;
    if (n)
      try {
        typeof n == "string" ? Rn.set(`${Qs}${n}:${e}`, t) : Rn.session.set(`${Qs}${e}`, t);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: e, html: t });
      }
  }
  _getCache(e) {
    const { cache: t } = this.props;
    if (!t)
      return;
    const n = typeof t == "string" ? Rn.get(`${Qs}${t}:${e}`) : Rn.session.get(`${Qs}${e}`);
    if (n)
      return { html: n };
  }
  _initBlocks(e) {
    const { blockFetch: t, blockMenu: n } = this.props;
    return e.map((o) => {
      const {
        id: r,
        size: a,
        left: l = -1,
        top: h = -1,
        fetch: u = t,
        menu: c = n,
        content: d,
        ...f
      } = o, [y, w] = this._getBlockSize(a);
      return {
        id: `${r}`,
        width: y,
        height: w,
        left: l,
        top: h,
        fetch: u,
        menu: c,
        content: d ?? this._getCache(`${r}`),
        loading: !1,
        needLoad: !!u,
        ...f
      };
    });
  }
  _getBlockSize(e) {
    const { blockDefaultSize: t, blockSizeMap: n } = this.props;
    return e = e ?? t, typeof e == "string" && (e = n[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
  }
  _layout() {
    this.map.clear();
    let e = 0;
    const { blocks: t } = this.state;
    return t.forEach((n) => {
      this._layoutBlock(n);
      const [, i, , o] = this.map.get(n.id);
      e = Math.max(e, i + o);
    }), { blocks: t, height: e };
  }
  _layoutBlock(e) {
    const t = this.map, { id: n, left: i, top: o, width: r, height: a } = e;
    if (i < 0 || o < 0) {
      const [l, h] = this._appendBlock(r, a, i, o);
      t.set(n, [l, h, r, a]);
    } else
      this._insertBlock(n, [i, o, r, a]);
  }
  _canPlace(e) {
    const { dragging: t } = this.state;
    for (const [n, i] of this.map.entries())
      if (n !== t && hl(i, e))
        return !1;
    return !0;
  }
  _insertBlock(e, t) {
    this.map.set(e, t);
    for (const [n, i] of this.map.entries())
      n !== e && hl(i, t) && (i[1] = t[1] + t[3], this._insertBlock(n, i));
  }
  _appendBlock(e, t, n, i) {
    if (n >= 0 && i >= 0) {
      if (this._canPlace([n, i, e, t]))
        return [n, i];
      i = -1;
    }
    let o = n < 0 ? 0 : n, r = i < 0 ? 0 : i, a = !1;
    const l = this.props.grid;
    for (; !a; ) {
      if (this._canPlace([o, r, e, t])) {
        a = !0;
        break;
      }
      n < 0 ? (o += 1, o + e > l && (o = 0, r += 1)) : r += 1;
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
    const { blocks: e, height: t } = this._layout(), { cellHeight: n, grid: i } = this.props, o = this.map;
    return /* @__PURE__ */ m("div", { class: "dashboard", children: /* @__PURE__ */ m("div", { class: "dashboard-blocks", style: { height: t * n }, children: e.map((r, a) => {
      const { id: l, menu: h, content: u, title: c } = r, [d, f, y, w] = o.get(l) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ m(
        Zd,
        {
          id: l,
          index: a,
          left: `${100 * d / i}%`,
          top: n * f,
          width: `${100 * y / i}%`,
          height: n * w,
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
}, Rs.defaultProps = {
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
}, Rs);
const No = class No extends j {
};
No.NAME = "Dashboard", No.Component = Jd;
let ul = No;
var Gt, Zt;
class dl extends W {
  constructor(t) {
    super(t);
    _(this, Gt, void 0);
    _(this, Zt, void 0);
    C(this, Gt, 0), C(this, Zt, null), this._handleWheel = (n) => {
      const { wheelContainer: i } = this.props, o = n.target;
      if (!(!o || !i) && (typeof i == "string" && o.closest(i) || typeof i == "object")) {
        const r = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && n.preventDefault();
      }
    }, this._handleMouseMove = (n) => {
      const { dragStart: i } = this.state;
      i && (p(this, Gt) && cancelAnimationFrame(p(this, Gt)), C(this, Gt, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? n.clientX - i.x : n.clientY - i.y;
        this.scroll(i.offset + o * this.props.scrollSize / this.props.clientSize), C(this, Gt, 0);
      })), n.preventDefault());
    }, this._handleMouseUp = () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    }, this._handleMouseDown = (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.stopPropagation();
    }, this._handleClick = (n) => {
      const i = n.currentTarget;
      if (!i)
        return;
      const o = i.getBoundingClientRect(), { type: r, clientSize: a, scrollSize: l } = this.props, h = (r === "horz" ? n.clientX - o.left : n.clientY - o.top) - this.barSize / 2;
      this.scroll(h * l / a), n.preventDefault();
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
    const { scrollSize: t, clientSize: n } = this.props;
    return Math.max(0, t - n);
  }
  get barSize() {
    const { clientSize: t, scrollSize: n, size: i = 12, minBarSize: o = 3 * i } = this.props;
    return Math.max(Math.round(t * t / n), o);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: t } = this.props;
    t && (C(this, Zt, typeof t == "string" ? document : t.current), p(this, Zt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), p(this, Zt) && p(this, Zt).removeEventListener("wheel", this._handleWheel);
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
    const { onScroll: n } = this.props;
    n && n(t, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: t,
      type: n,
      size: i = 12,
      className: o,
      style: r,
      left: a,
      top: l,
      bottom: h,
      right: u
    } = this.props, { maxScrollPos: c, scrollPos: d } = this, { dragStart: f } = this.state, y = {
      left: a,
      top: l,
      bottom: h,
      right: u,
      ...r
    }, w = {};
    return n === "horz" ? (y.height = i, y.width = t, w.width = this.barSize, w.left = Math.round(Math.min(c, d) * (t - w.width) / c)) : (y.width = i, y.height = t, w.height = this.barSize, w.top = Math.round(Math.min(c, d) * (t - w.height) / c)), /* @__PURE__ */ m(
      "div",
      {
        className: R("scrollbar", o, {
          "is-vert": n === "vert",
          "is-horz": n === "horz",
          "is-dragging": f
        }),
        style: y,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ m(
          "div",
          {
            className: "scrollbar-bar",
            style: w,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
Gt = new WeakMap(), Zt = new WeakMap();
const Ci = /* @__PURE__ */ new Map(), $i = [];
function Gc(s, e) {
  const { name: t } = s;
  if (!(e != null && e.override) && Ci.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  Ci.set(t, s), e != null && e.buildIn && !$i.includes(t) && $i.push(t);
}
function jt(s, e) {
  Gc(s, e);
  const t = (n) => {
    if (!n)
      return s;
    const { defaultOptions: i, ...o } = s;
    return {
      ...o,
      defaultOptions: { ...i, ...n }
    };
  };
  return t.plugin = s, t;
}
function Zc(s) {
  return Ci.delete(s);
}
function Qd(s) {
  if (typeof s == "string") {
    const e = Ci.get(s);
    return e || console.warn(`DTable: Cannot found plugin "${s}"`), e;
  }
  if (typeof s == "function" && "plugin" in s)
    return s.plugin;
  if (typeof s == "object")
    return s;
  console.warn("DTable: Invalid plugin", s);
}
function Jc(s, e, t) {
  return e.forEach((n) => {
    var o;
    if (!n)
      return;
    const i = Qd(n);
    i && (t.has(i.name) || ((o = i.plugins) != null && o.length && Jc(s, i.plugins, t), s.push(i), t.add(i.name)));
  }), s;
}
function tf(s = [], e = !0) {
  return e && $i.length && s.unshift(...$i), s != null && s.length ? Jc([], s, /* @__PURE__ */ new Set()) : [];
}
function fl() {
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
function ef(s, e, t) {
  return s && (e && (s = Math.max(e, s)), t && (s = Math.min(t, s))), s;
}
function pl(s, e) {
  return typeof s == "string" && (s = s.endsWith("%") ? parseFloat(s) / 100 : parseFloat(s)), typeof e == "number" && (typeof s != "number" || isNaN(s)) && (s = e), s;
}
function rr(s, e = !1) {
  if (!s.list.length)
    return;
  if (s.widthSetting && s.width !== s.widthSetting) {
    s.width = s.widthSetting;
    const n = s.width - s.totalWidth;
    if (!e && n > 0 || e && n !== 0) {
      const i = s.flexList.length ? s.flexList : s.list, o = i.reduce((r, a) => r + (a.flex || 1), 0);
      i.forEach((r) => {
        const a = Math[n < 0 ? "max" : "min"](n, Math.ceil(n * ((r.flex || 1) / o)));
        r.realWidth = r.width + a;
      });
    }
  }
  let t = 0;
  s.list.forEach((n) => {
    n.realWidth || (n.realWidth = n.width), n.left = t, t += n.realWidth;
  });
}
function nf(s, e, t, n) {
  const { defaultColWidth: i, minColWidth: o, maxColWidth: r, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = e, h = (x) => (typeof x == "function" && (x = x.call(s)), x = pl(x, 0), x < 1 && (x = Math.round(x * n)), x), u = {
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
  }, d = {
    ...u,
    list: [],
    flexList: [],
    widthSetting: h(l)
  }, f = [], y = {};
  let w = !1;
  const v = [], b = {};
  if (t.forEach((x) => {
    const { colTypes: $, onAddCol: k } = x;
    $ && Object.entries($).forEach(([S, N]) => {
      b[S] || (b[S] = []), b[S].push(N);
    }), k && v.push(k);
  }), e.cols.forEach((x) => {
    if (x.hidden)
      return;
    const { type: $ = "", name: k } = x, S = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: o,
      maxWidth: r,
      ...x,
      type: $
    }, N = {
      name: k,
      type: $,
      setting: S,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: f.length
    }, L = b[$];
    L && L.forEach((H) => {
      const B = typeof H == "function" ? H.call(s, S) : H;
      B && Object.assign(S, B, x);
    });
    const { fixed: I, flex: D, minWidth: O = o, maxWidth: P = r } = S, M = pl(S.width || i, i);
    N.flex = D === !0 ? 1 : typeof D == "number" ? D : 0, N.width = ef(M < 1 ? Math.round(M * n) : M, O, P), v.forEach((H) => H.call(s, N)), f.push(N), y[N.name] = N;
    const E = I ? I === "left" ? c : d : u;
    E.list.push(N), E.totalWidth += N.width, E.width = E.totalWidth, N.flex && E.flexList.push(N), typeof S.order == "number" && (w = !0);
  }), w) {
    const x = ($, k) => ($.setting.order ?? 0) - (k.setting.order ?? 0);
    f.sort(x), c.list.sort(x), u.list.sort(x), d.list.sort(x);
  }
  return rr(c, !0), rr(d, !0), u.widthSetting = n - c.width - d.width, rr(u), {
    list: f,
    map: y,
    left: c,
    center: u,
    right: d
  };
}
function sf({ col: s, className: e, height: t, row: n, onRenderCell: i, style: o, outerStyle: r, children: a, outerClass: l, width: h, left: u, top: c, ...d }) {
  var M;
  const f = {
    left: u ?? s.left,
    top: c ?? n.top,
    width: h ?? s.realWidth,
    height: t,
    ...r
  }, { align: y, border: w } = s.setting, v = {
    justifyContent: y ? y === "left" ? "start" : y === "right" ? "end" : y : void 0,
    ...s.setting.cellStyle,
    ...o
  }, b = ["dtable-cell", l, e, s.setting.className, {
    "has-border-left": w === !0 || w === "left",
    "has-border-right": w === !0 || w === "right"
  }], x = ["dtable-cell-content", s.setting.cellClass], $ = (M = n.data) == null ? void 0 : M[s.name], k = [a ?? $ ?? ""], S = i ? i(k, { row: n, col: s, value: $ }, U) : k, N = [], L = [], I = {}, D = {};
  let O = "div";
  S == null || S.forEach((E) => {
    if (typeof E == "object" && E && !Z(E) && ("html" in E || "className" in E || "style" in E || "attrs" in E || "children" in E || "tagName" in E)) {
      const H = E.outer ? N : L;
      E.html ? H.push(/* @__PURE__ */ m("div", { className: R("dtable-cell-html", E.className), style: E.style, dangerouslySetInnerHTML: { __html: E.html }, ...E.attrs ?? {} })) : (E.style && Object.assign(E.outer ? f : v, E.style), E.className && (E.outer ? b : x).push(E.className), E.children && H.push(E.children), E.attrs && Object.assign(E.outer ? I : D, E.attrs)), E.tagName && !E.outer && (O = E.tagName);
    } else
      L.push(E);
  });
  const P = O;
  return /* @__PURE__ */ m(
    "div",
    {
      className: R(b),
      style: f,
      "data-col": s.name,
      "data-row": n.id,
      "data-type": s.type || null,
      ...d,
      ...I,
      children: [
        L.length > 0 && /* @__PURE__ */ m(P, { className: R(x), style: v, ...D, children: L }),
        N
      ]
    }
  );
}
function ar({
  rows: s = [],
  cols: e,
  rowHeight: t,
  scrollLeft: n = 0,
  scrollTop: i = 0,
  left: o = 0,
  top: r = 0,
  width: a,
  height: l = "100%",
  className: h,
  CellComponent: u = sf,
  onRenderCell: c
}) {
  var w;
  const d = Array.isArray(s) ? s : [s], f = ((w = d[0]) == null ? void 0 : w.top) ?? 0, y = d.length;
  return /* @__PURE__ */ m(
    "div",
    {
      className: R("dtable-cells", h),
      style: { top: r, left: o, width: a, height: l },
      children: /* @__PURE__ */ m("div", { className: "dtable-cells-container", style: { left: -n, top: -i + f }, children: d.reduce((v, b, x) => {
        const $ = e.length;
        return e.forEach((k, S) => {
          v.push(
            /* @__PURE__ */ m(
              u,
              {
                className: R(
                  `is-${b.index % 2 ? "odd" : "even"}-row`,
                  S ? "" : "is-first-in-row",
                  S === $ - 1 ? "is-last-in-row" : "",
                  x ? "" : "is-first-row",
                  x === y - 1 ? "is-last-row" : ""
                ),
                col: k,
                row: b,
                top: b.top - f,
                height: t,
                onRenderCell: c
              },
              `${b.index}:${k.name}`
            )
          );
        }), v;
      }, []) })
    }
  );
}
function ml({
  top: s,
  height: e,
  rowHeight: t,
  rows: n,
  cols: { left: i, center: o, right: r },
  scrollLeft: a,
  scrollTop: l,
  className: h,
  style: u,
  onRenderCell: c
}) {
  let d = null;
  i.list.length && (d = /* @__PURE__ */ m(
    ar,
    {
      className: "dtable-fixed-left",
      rows: n,
      scrollTop: l,
      cols: i.list,
      width: i.width,
      rowHeight: t,
      onRenderCell: c
    },
    "left"
  ));
  let f = null;
  o.list.length && (f = /* @__PURE__ */ m(
    ar,
    {
      rows: n,
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
  let y = null;
  return r.list.length && (y = /* @__PURE__ */ m(
    ar,
    {
      className: "dtable-fixed-right",
      rows: n,
      scrollTop: l,
      cols: r.list,
      left: i.width + o.width,
      width: r.width,
      rowHeight: t,
      onRenderCell: c
    },
    "right"
  )), /* @__PURE__ */ m(
    "div",
    {
      className: R("dtable-block", h),
      style: { ...u, top: s, height: e },
      children: [
        d,
        f,
        y
      ]
    }
  );
}
var Jt, yn, At, Ct, Qt, Q, $t, ut, Se, Ls, wn, ke, St, Ee, Te, Mo, Qc, Ro, th, Lo, eh, Ao, nh, As, Rr, bn, vn, Is, Ds, Ps, Os, _n, ii, Io, sh, Do, ih, Po, oh, kn;
let of = (kn = class extends W {
  constructor(t) {
    super(t);
    _(this, Mo);
    _(this, Ro);
    _(this, Lo);
    _(this, Ao);
    _(this, As);
    _(this, _n);
    _(this, Io);
    _(this, Do);
    _(this, Po);
    _(this, Jt, void 0);
    _(this, yn, void 0);
    _(this, At, void 0);
    _(this, Ct, void 0);
    _(this, Qt, void 0);
    _(this, Q, void 0);
    _(this, $t, void 0);
    _(this, ut, void 0);
    _(this, Se, void 0);
    _(this, Ls, void 0);
    _(this, wn, void 0);
    _(this, ke, void 0);
    _(this, St, void 0);
    _(this, Ee, void 0);
    _(this, Te, void 0);
    _(this, bn, void 0);
    _(this, vn, void 0);
    _(this, Is, void 0);
    _(this, Ds, void 0);
    _(this, Ps, void 0);
    _(this, Os, void 0);
    this.ref = K(), C(this, Jt, 0), C(this, At, !1), C(this, Q, []), C(this, ut, /* @__PURE__ */ new Map()), C(this, Se, {}), C(this, wn, []), C(this, ke, { in: !1 }), this.updateLayout = () => {
      p(this, Jt) && cancelAnimationFrame(p(this, Jt)), C(this, Jt, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), C(this, Jt, 0);
      }));
    }, C(this, St, (n, i) => {
      i = i || n.type;
      const o = p(this, ut).get(i);
      if (o != null && o.length) {
        for (const r of o)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), C(this, Ee, (n) => {
      p(this, St).call(this, n, `window_${n.type}`);
    }), C(this, Te, (n) => {
      p(this, St).call(this, n, `document_${n.type}`);
    }), C(this, bn, (n, i, o) => {
      const { row: r, col: a } = i;
      i.value = this.getCellValue(r, a), n[0] = i.value;
      const l = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return p(this, Q).forEach((h) => {
        h[l] && (n = h[l].call(this, n, i, o));
      }), this.options[l] && (n = this.options[l].call(this, n, i, o)), a.setting[l] && (n = a.setting[l].call(this, n, i, o)), n;
    }), C(this, vn, (n, i) => {
      i === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), C(this, Is, (n) => {
      var l, h, u;
      const i = this.getPointerInfo(n);
      if (!i)
        return;
      const { rowID: o, colName: r, cellElement: a } = i;
      if (o === "HEADER")
        a && ((l = this.options.onHeaderCellClick) == null || l.call(this, n, { colName: r, element: a }), p(this, Q).forEach((c) => {
          var d;
          (d = c.onHeaderCellClick) == null || d.call(this, n, { colName: r, element: a });
        }));
      else {
        const c = this.layout.visibleRows.find((d) => d.id === o);
        if (a) {
          if (((h = this.options.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: o, rowInfo: c, element: a })) === !0)
            return;
          for (const d of p(this, Q))
            if (((u = d.onCellClick) == null ? void 0 : u.call(this, n, { colName: r, rowID: o, rowInfo: c, element: a })) === !0)
              return;
        }
      }
    }), C(this, Ds, (n) => {
      const i = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(i))
        return !this.scroll({ to: i.replace("page", "") });
    }), C(this, Ps, (n) => {
      const i = g(n.target).closest(".dtable-cell");
      if (!i.length)
        return A(this, _n, ii).call(this, !1);
      A(this, _n, ii).call(this, [i.attr("data-row"), i.attr("data-col")]);
    }), C(this, Os, () => {
      A(this, _n, ii).call(this, !1);
    }), C(this, yn, t.id ?? `dtable-${vc(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, C(this, Qt, Object.freeze(tf(t.plugins))), p(this, Qt).forEach((n) => {
      var a;
      const { methods: i, data: o, state: r } = n;
      i && Object.entries(i).forEach(([l, h]) => {
        typeof h == "function" && Object.assign(this, { [l]: h.bind(this) });
      }), o && Object.assign(p(this, Se), o.call(this)), r && Object.assign(this.state, r.call(this)), (a = n.onCreate) == null || a.call(this, n);
    });
  }
  get options() {
    var t;
    return ((t = p(this, $t)) == null ? void 0 : t.options) || p(this, Ct) || fl();
  }
  get plugins() {
    return p(this, Q);
  }
  get layout() {
    return p(this, $t);
  }
  get id() {
    return p(this, yn);
  }
  get data() {
    return p(this, Se);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return p(this, ke);
  }
  componentWillReceiveProps() {
    C(this, Ct, void 0);
  }
  componentDidMount() {
    p(this, At) ? this.forceUpdate() : A(this, As, Rr).call(this), p(this, Q).forEach((n) => {
      let { events: i } = n;
      i && (typeof i == "function" && (i = i.call(this)), Object.entries(i).forEach(([o, r]) => {
        r && this.on(o, r);
      }));
    }), this.on("click", p(this, Is)), this.on("keydown", p(this, Ds));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", p(this, Ps)), this.on("mouseleave", p(this, Os))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const i = new ResizeObserver(this.updateLayout);
          i.observe(n), C(this, Ls, i);
        }
      } else
        this.on("window_resize", this.updateLayout);
    p(this, Q).forEach((n) => {
      var i;
      (i = n.onMounted) == null || i.call(this);
    });
  }
  componentDidUpdate() {
    p(this, At) ? A(this, As, Rr).call(this) : p(this, Q).forEach((t) => {
      var n;
      (n = t.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = p(this, Ls)) == null || n.disconnect();
    const { element: t } = this;
    if (t)
      for (const i of p(this, ut).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), p(this, Ee)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), p(this, Te)) : t.removeEventListener(i, p(this, St));
    p(this, Q).forEach((i) => {
      var o;
      (o = i.onUnmounted) == null || o.call(this);
    }), p(this, Qt).forEach((i) => {
      var o;
      (o = i.onDestory) == null || o.call(this);
    }), C(this, Se, {}), p(this, ut).clear();
  }
  on(t, n, i) {
    var r;
    i && (t = `${i}_${t}`);
    const o = p(this, ut).get(t);
    o ? o.push(n) : (p(this, ut).set(t, [n]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), p(this, Ee)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), p(this, Te)) : (r = this.element) == null || r.addEventListener(t, p(this, St)));
  }
  off(t, n, i) {
    var a;
    i && (t = `${i}_${t}`);
    const o = p(this, ut).get(t);
    if (!o)
      return;
    const r = o.indexOf(n);
    r >= 0 && o.splice(r, 1), o.length || (p(this, ut).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), p(this, Ee)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), p(this, Te)) : (a = this.element) == null || a.removeEventListener(t, p(this, St)));
  }
  emitCustomEvent(t, n) {
    p(this, St).call(this, n instanceof Event ? n : new CustomEvent(t, { detail: n }), t);
  }
  scroll(t, n) {
    const { scrollLeft: i, scrollTop: o, rowsHeightTotal: r, rowsHeight: a, rowHeight: l, cols: { center: { totalWidth: h, width: u } } } = this.layout, { to: c } = t;
    let { scrollLeft: d, scrollTop: f } = t;
    if (c === "up" || c === "down")
      f = o + (c === "down" ? 1 : -1) * Math.floor(a / l) * l;
    else if (c === "left" || c === "right")
      d = i + (c === "right" ? 1 : -1) * u;
    else if (c === "top")
      f = 0;
    else if (c === "bottom")
      f = r - a;
    else if (c === "begin")
      d = 0;
    else if (c === "end")
      d = h - u;
    else {
      const { offsetLeft: w, offsetTop: v } = t;
      typeof w == "number" && (d = i + w), typeof v == "number" && (d = o + v);
    }
    const y = {};
    return typeof d == "number" && (d = Math.max(0, Math.min(d, h - u)), d !== i && (y.scrollLeft = d)), typeof f == "number" && (f = Math.max(0, Math.min(f, r - a)), f !== o && (y.scrollTop = f)), Object.keys(y).length ? (this.setState(y, () => {
      var w;
      (w = this.options.onScroll) == null || w.call(this, y), n == null || n.call(this, !0);
    }), !0) : (n == null || n.call(this, !1), !1);
  }
  getColInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    const { cols: n } = this.layout;
    return typeof t == "number" ? n.list[t] : n.map[t];
  }
  getRowInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    if (t === -1 || t === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: n, rowsMap: i, allRows: o } = this.layout;
    return typeof t == "number" ? n[t] : i[t] || o.find((r) => r.id === t);
  }
  getCellValue(t, n) {
    var l;
    const i = typeof t == "object" ? t : this.getRowInfo(t);
    if (!i)
      return;
    const o = typeof n == "object" ? n : this.getColInfo(n);
    if (!o)
      return;
    let r = i.id === "HEADER" ? o.setting.title : (l = i.data) == null ? void 0 : l[o.name];
    const { cellValueGetter: a } = this.options;
    return a && (r = a.call(this, i, o, r)), r;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, n) {
    if (!p(this, Ct))
      return;
    typeof t == "function" && (n = t, t = {});
    const { dirtyType: i, state: o } = t;
    if (i === "layout")
      C(this, $t, void 0);
    else if (i === "options") {
      if (C(this, Ct, void 0), !p(this, $t))
        return;
      C(this, $t, void 0);
    }
    this.setState(o ?? ((r) => ({ renderCount: r.renderCount + 1 })), n);
  }
  getPointerInfo(t) {
    const n = t.target;
    if (!n || n.closest(".no-cell-event"))
      return;
    const i = g(n).closest(".dtable-cell");
    if (!i.length)
      return;
    const o = i.attr("data-row"), r = i.attr("data-col");
    if (!(typeof r != "string" || typeof o != "string"))
      return {
        cellElement: i[0],
        colName: r,
        rowID: o,
        target: n
      };
  }
  i18n(t, n, i) {
    return J(p(this, wn), t, n, i, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((n) => n.name === t);
  }
  render() {
    const t = A(this, Po, oh).call(this), { className: n, rowHover: i, colHover: o, cellHover: r, bordered: a, striped: l, scrollbarHover: h } = this.options, u = {}, c = ["dtable", n, {
      "dtable-hover-row": i,
      "dtable-hover-col": o,
      "dtable-hover-cell": r,
      "dtable-bordered": a,
      "dtable-striped": l,
      "scrollbar-hover": h
    }], d = [];
    return t && (u.width = t.width, u.height = t.height, c.push({
      "dtable-scrolled-down": t.scrollTop > 0,
      "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
      "dtable-scrolled-right": t.scrollLeft > 0,
      "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
    }), d.push(
      A(this, Mo, Qc).call(this, t),
      A(this, Ro, th).call(this, t),
      A(this, Lo, eh).call(this, t),
      A(this, Ao, nh).call(this, t)
    ), p(this, Q).forEach((f) => {
      var w;
      const y = (w = f.onRender) == null ? void 0 : w.call(this, t);
      y && (y.style && Object.assign(u, y.style), y.className && c.push(y.className), y.children && d.push(y.children));
    })), /* @__PURE__ */ m(
      "div",
      {
        id: p(this, yn),
        className: R(c),
        style: u,
        ref: this.ref,
        tabIndex: -1,
        children: d
      }
    );
  }
}, Jt = new WeakMap(), yn = new WeakMap(), At = new WeakMap(), Ct = new WeakMap(), Qt = new WeakMap(), Q = new WeakMap(), $t = new WeakMap(), ut = new WeakMap(), Se = new WeakMap(), Ls = new WeakMap(), wn = new WeakMap(), ke = new WeakMap(), St = new WeakMap(), Ee = new WeakMap(), Te = new WeakMap(), Mo = new WeakSet(), Qc = function(t) {
  const { header: n, cols: i, headerHeight: o, scrollLeft: r } = t;
  if (!n)
    return null;
  if (n === !0)
    return /* @__PURE__ */ m(
      ml,
      {
        className: "dtable-header",
        cols: i,
        height: o,
        scrollLeft: r,
        rowHeight: o,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: p(this, bn)
      },
      "header"
    );
  const a = Array.isArray(n) ? n : [n];
  return /* @__PURE__ */ m(
    fr,
    {
      className: "dtable-header",
      style: { height: o },
      renders: a,
      generateArgs: [t],
      generatorThis: this
    },
    "header"
  );
}, Ro = new WeakSet(), th = function(t) {
  const { headerHeight: n, rowsHeight: i, visibleRows: o, rowHeight: r, cols: a, scrollLeft: l, scrollTop: h } = t;
  return /* @__PURE__ */ m(
    ml,
    {
      className: "dtable-body",
      top: n,
      height: i,
      rows: o,
      rowHeight: r,
      scrollLeft: l,
      scrollTop: h,
      cols: a,
      onRenderCell: p(this, bn)
    },
    "body"
  );
}, Lo = new WeakSet(), eh = function(t) {
  let { footer: n } = t;
  if (typeof n == "function" && (n = n.call(this, t)), !n)
    return null;
  const i = Array.isArray(n) ? n : [n];
  return /* @__PURE__ */ m(
    fr,
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
}, Ao = new WeakSet(), nh = function(t) {
  const n = [], { scrollLeft: i, cols: { left: { width: o }, center: { width: r, totalWidth: a } }, scrollTop: l, rowsHeight: h, rowsHeightTotal: u, footerHeight: c, headerHeight: d } = t, { scrollbarSize: f = 12, horzScrollbarPos: y } = this.options;
  return a > r && n.push(
    /* @__PURE__ */ m(
      dl,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: a,
        clientSize: r,
        onScroll: p(this, vn),
        left: o,
        bottom: (y === "inside" ? 0 : -f) + c,
        size: f,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ m("div", { className: "dtable-scroll-shadow is-left", style: { left: o, height: d + h } }),
    /* @__PURE__ */ m("div", { className: "dtable-scroll-shadow is-right", style: { left: o + r, height: d + h } })
  ), u > h && n.push(
    /* @__PURE__ */ m(
      dl,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: u,
        clientSize: h,
        onScroll: p(this, vn),
        right: 0,
        size: f,
        top: d,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), n.length ? n : null;
}, As = new WeakSet(), Rr = function() {
  var t;
  C(this, At, !1), (t = this.options.afterRender) == null || t.call(this), p(this, Q).forEach((n) => {
    var i;
    return (i = n.afterRender) == null ? void 0 : i.call(this);
  });
}, bn = new WeakMap(), vn = new WeakMap(), Is = new WeakMap(), Ds = new WeakMap(), Ps = new WeakMap(), Os = new WeakMap(), _n = new WeakSet(), ii = function(t) {
  const { element: n, options: i } = this;
  if (!n)
    return;
  const o = g(n), r = t ? { in: !0, row: t[0], col: t[1] } : { in: !1 };
  i.colHover === "header" && r.row !== "HEADER" && (r.col = void 0);
  const a = p(this, ke);
  r.in !== a.in && o.toggleClass("dtable-hover", r.in), r.row !== a.row && (o.find(".is-hover-row").removeClass("is-hover-row"), r.row && o.find(`.dtable-cell[data-row="${r.row}"]`).addClass("is-hover-row")), r.col !== a.col && (o.find(".is-hover-col").removeClass("is-hover-col"), r.col && o.find(`.dtable-cell[data-col="${r.col}"]`).addClass("is-hover-col")), C(this, ke, r);
}, Io = new WeakSet(), sh = function() {
  if (p(this, Ct))
    return !1;
  const n = { ...fl(), ...p(this, Qt).reduce((i, o) => {
    const { defaultOptions: r } = o;
    return r && Object.assign(i, r), i;
  }, {}), ...this.props };
  return C(this, Ct, n), C(this, Q, p(this, Qt).reduce((i, o) => {
    const { when: r, options: a } = o;
    let l = n;
    return a && (l = Object.assign({ ...l }, typeof a == "function" ? a.call(this, n) : a)), (!r || r(l)) && (l !== n && Object.assign(n, l), i.push(o)), i;
  }, [])), C(this, wn, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Do = new WeakSet(), ih = function() {
  var O, P;
  const { plugins: t } = this;
  let n = p(this, Ct);
  const i = {
    flex: /* @__PURE__ */ m("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ m("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  t.forEach((M) => {
    var H;
    const E = (H = M.beforeLayout) == null ? void 0 : H.call(this, n);
    E && (n = { ...n, ...E }), Object.assign(i, M.footer);
  });
  let o = n.width, r = 0;
  if (typeof o == "function" && (o = o.call(this)), o === "100%") {
    const { parent: M } = this;
    if (M)
      r = M.clientWidth;
    else {
      C(this, At, !0);
      return;
    }
  }
  const a = nf(this, n, t, r), { data: l, rowKey: h = "id", rowHeight: u } = n, c = [], d = (M, E, H) => {
    var z, G;
    const B = { data: H ?? { [h]: M }, id: M, index: c.length, top: 0 };
    if (H || (B.lazy = !0), c.push(B), ((z = n.onAddRow) == null ? void 0 : z.call(this, B, E)) !== !1) {
      for (const he of t)
        if (((G = he.onAddRow) == null ? void 0 : G.call(this, B, E)) === !1)
          return;
    }
  };
  if (typeof l == "number")
    for (let M = 0; M < l; M++)
      d(`${M}`, M);
  else
    Array.isArray(l) && l.forEach((M, E) => {
      typeof M == "object" ? d(`${M[h] ?? ""}`, E, M) : d(`${M ?? ""}`, E);
    });
  let f = c;
  const y = {};
  if (n.onAddRows) {
    const M = n.onAddRows.call(this, f);
    M && (f = M);
  }
  for (const M of t) {
    const E = (O = M.onAddRows) == null ? void 0 : O.call(this, f);
    E && (f = E);
  }
  f.forEach((M, E) => {
    y[M.id] = M, M.index = E, M.top = M.index * u;
  });
  const { header: w, footer: v } = n, b = w ? n.headerHeight || u : 0, x = v ? n.footerHeight || u : 0;
  let $ = n.height, k = 0;
  const S = f.length * u, N = b + x + S;
  if (typeof $ == "function" && ($ = $.call(this, N)), $ === "auto")
    k = N;
  else if (typeof $ == "object")
    k = Math.min($.max, Math.max($.min, N));
  else if ($ === "100%") {
    const { parent: M } = this;
    if (M)
      k = M.clientHeight;
    else {
      k = 0, C(this, At, !0);
      return;
    }
  } else
    k = $;
  const L = k - b - x, I = {
    options: n,
    allRows: c,
    width: r,
    height: k,
    rows: f,
    rowsMap: y,
    rowHeight: u,
    rowsHeight: L,
    rowsHeightTotal: S,
    header: w,
    footer: v,
    footerGenerators: i,
    headerHeight: b,
    footerHeight: x,
    cols: a
  }, D = (P = n.onLayout) == null ? void 0 : P.call(this, I);
  D && Object.assign(I, D), t.forEach((M) => {
    if (M.onLayout) {
      const E = M.onLayout.call(this, I);
      E && Object.assign(I, E);
    }
  }), C(this, $t, I);
}, Po = new WeakSet(), oh = function() {
  (A(this, Io, sh).call(this) || !p(this, $t)) && A(this, Do, ih).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  const { cols: { center: n } } = t;
  let { scrollLeft: i } = this.state;
  i = Math.min(Math.max(0, n.totalWidth - n.width), i);
  let o = 0;
  n.list.forEach((v) => {
    v.left = o, o += v.realWidth, v.visible = v.left + v.realWidth >= i && v.left <= i + n.width;
  });
  const { rowsHeightTotal: r, rowsHeight: a, rows: l, rowHeight: h } = t, u = Math.min(Math.max(0, r - a), this.state.scrollTop), c = Math.floor(u / h), d = u + a, f = Math.min(l.length, Math.ceil(d / h)), y = [], { rowDataGetter: w } = this.options;
  for (let v = c; v < f; v++) {
    const b = l[v];
    b.lazy && w && (b.data = w([b.id])[0], b.lazy = !1), y.push(b);
  }
  return t.visibleRows = y, t.scrollTop = u, t.scrollLeft = i, t;
}, kn.addPlugin = Gc, kn.removePlugin = Zc, kn);
const rf = {
  html: { component: Hs }
}, af = {
  name: "custom",
  onRenderCell(s, e) {
    const { col: t } = e;
    let { custom: n } = t.setting;
    if (typeof n == "function" && (n = n.call(this, e)), !n)
      return s;
    const i = Array.isArray(n) ? n : [n], { customMap: o } = this.options;
    return i.forEach((r) => {
      let a;
      typeof r == "string" ? a = r.startsWith("<") ? {
        component: Hs,
        props: { html: Y(r, { value: e.value, ...e.row.data, $value: e.value }) }
      } : {
        component: r
      } : a = r;
      let { component: l } = a;
      const h = [a];
      typeof l == "string" && h.unshift(rf[l], o == null ? void 0 : o[l]);
      const u = {};
      h.forEach((d) => {
        if (d) {
          const { props: f } = d;
          f && g.extend(u, typeof f == "function" ? f.call(this, e) : f), l = d.component || l;
        }
      }, { props: {} });
      const c = l;
      s[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ m(c, { ...u }) };
    }), s;
  }
}, lf = jt(af);
function rh(s, e, t, n) {
  if (typeof s == "function" && (s = s(e)), typeof s == "string" && s.length && (s = { url: s }), !s)
    return t;
  const { url: i, ...o } = s, { setting: r } = e.col, a = {};
  return r && Object.keys(r).forEach((l) => {
    l.startsWith("data-") && (a[l] = r[l]);
  }), /* @__PURE__ */ m("a", { href: Y(i, e.row.data), ...n, ...o, ...a, children: t });
}
function ia(s, e, t) {
  var n;
  if (s != null)
    return t = t ?? ((n = e.row.data) == null ? void 0 : n[e.col.name]), typeof s == "function" ? s(t, e) : Y(s, t);
}
function ah(s, e, t, n) {
  var i;
  return t ? (t = t ?? ((i = e.row.data) == null ? void 0 : i[e.col.name]), s === !1 ? t : (s === !0 && (s = "[yyyy-]MM-dd hh:mm"), typeof s == "function" && (s = s(t, e)), pt(t, s, n ?? t))) : n ?? t;
}
function lh(s, e) {
  const { link: t } = e.col.setting, n = rh(t, e, s[0]);
  return n && (s[0] = n), s;
}
function ch(s, e) {
  const { format: t } = e.col.setting;
  return t && (s[0] = ia(t, e, s[0])), s;
}
function hh(s, e) {
  const { map: t } = e.col.setting;
  return typeof t == "function" ? s[0] = t(s[0], e) : typeof t == "object" && t && (s[0] = t[s[0]] ?? s[0]), s;
}
function uh(s, e, t = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: n = t, invalidDate: i } = e.col.setting;
  return s[0] = ah(n, e, s[0], i), s;
}
function Lr(s, e, t = !1) {
  const { html: n = t } = e.col.setting;
  if (n === !1)
    return s;
  const i = s[0], o = n === !0 ? i : ia(n, e, i);
  return s[0] = {
    html: o
  }, s;
}
const cf = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(s, e) {
        return Lr(s, e, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(s, { col: e }) {
        const { circleSize: t = 24, circleBorderSize: n = 1, circleBgColor: i = "var(--color-border)", circleColor: o = "var(--color-success-500)" } = e.setting, r = (t - n) / 2, a = t / 2, l = s[0];
        return s[0] = /* @__PURE__ */ m("svg", { width: t, height: t, children: [
          /* @__PURE__ */ m("circle", { cx: a, cy: a, r, "stroke-width": n, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ m("circle", { cx: a, cy: a, r, "stroke-width": n, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * r * 2, "stroke-dashoffset": Math.PI * r * 2 * (100 - l) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ m("text", { x: a, y: a + n, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${r}px` }, children: Math.round(l) })
        ] }), s;
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
  onRenderCell(s, e) {
    const { formatDate: t, html: n, hint: i } = e.col.setting;
    if (t && (s = uh(s, e, t)), s = hh(s, e), s = ch(s, e), n ? s = Lr(s, e) : s = lh(s, e), i) {
      let o = s[0];
      typeof i == "function" ? o = i.call(this, e) : typeof i == "string" && (o = Y(i, e.row.data)), s.push({ attrs: { title: o } });
    }
    return s;
  }
}, hf = jt(cf, { buildIn: !0 });
function uf(s, e, t = !1) {
  var a, l;
  typeof s == "boolean" && (e = s, s = void 0);
  const n = this.state.checkedRows, i = {}, { canRowCheckable: o } = this.options, r = (h, u) => {
    const c = o ? o.call(this, h) : !0;
    !c || t && c === "disabled" || !!n[h] === u || (u ? n[h] = !0 : delete n[h], i[h] = u);
  };
  if (s === void 0 ? (e === void 0 && (e = !dh.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
    r(h, !!e);
  })) : (Array.isArray(s) || (s = [s]), s.forEach((h) => {
    r(h, e ?? !n[h]);
  })), Object.keys(i).length) {
    const h = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, s, i, n);
    h && Object.keys(h).forEach((u) => {
      h[u] ? n[u] = !0 : delete n[u];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var u;
      (u = this.options.onCheckChange) == null || u.call(this, i);
    });
  }
  return i;
}
function df(s) {
  return this.state.checkedRows[s] ?? !1;
}
function dh() {
  var n, i;
  const s = (n = this.layout) == null ? void 0 : n.allRows.length;
  if (!s)
    return !1;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((i = this.layout) == null ? void 0 : i.allRows.reduce((o, r) => o + (t.call(this, r.id) ? 1 : 0), 0)) : e === s;
}
function ff() {
  return Object.keys(this.state.checkedRows);
}
function pf(s) {
  const { checkable: e } = this.options;
  s === void 0 && (s = !e), e !== s && this.setState({ forceCheckable: s });
}
function gl(s, e, t = !1) {
  return /* @__PURE__ */ m("div", { class: `checkbox-primary dtable-checkbox${s ? " checked" : ""}${t ? " disabled" : ""}`, children: /* @__PURE__ */ m("label", {}) });
}
const yl = 'input[type="checkbox"],.dtable-checkbox', mf = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: gl
  },
  when: (s) => !!s.checkable,
  options(s) {
    const { forceCheckable: e } = this.state;
    return e !== void 0 ? s.checkable = e : s.checkable === "auto" && (s.checkable = !!s.cols.some((t) => t.checkbox)), s;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: uf,
    isRowChecked: df,
    isAllRowChecked: dh,
    getChecks: ff,
    toggleCheckable: pf
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
      const s = this.isAllRowChecked();
      return [
        /* @__PURE__ */ m("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: gl(s) })
      ];
    },
    checkedInfo(s, e) {
      const t = this.getChecks(), { checkInfo: n } = this.options;
      if (n)
        return [n.call(this, t)];
      const i = t.length, o = [];
      return i && o.push(this.i18n("checkedCountInfo", { selected: i })), o.push(this.i18n("totalCountInfo", { total: e.allRows.length })), [
        /* @__PURE__ */ m("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(s, { row: e, col: t }) {
    var h;
    const { id: n } = e, { canRowCheckable: i } = this.options, o = i ? i.call(this, n) : !0;
    if (!o)
      return s;
    const { checkbox: r } = t.setting, a = typeof r == "function" ? r.call(this, n) : r, l = this.isRowChecked(n);
    if (a) {
      const u = (h = this.options.checkboxRender) == null ? void 0 : h.call(this, l, n, o === "disabled");
      s.unshift(u), s.push({ outer: !0, className: "has-checkbox" });
    }
    return l && s.push({ outer: !0, className: "is-checked" }), s;
  },
  onRenderHeaderCell(s, { row: e, col: t }) {
    var r;
    const { id: n } = e, { checkbox: i } = t.setting;
    if (typeof i == "function" ? i.call(this, n) : i) {
      const a = this.isAllRowChecked(), l = (r = this.options.checkboxRender) == null ? void 0 : r.call(this, a, n);
      s.unshift(l), s.push({ outer: !0, className: "has-checkbox" });
    }
    return s;
  },
  onHeaderCellClick(s) {
    const e = s.target;
    if (!e)
      return;
    const t = e.closest(yl);
    t && (this.toggleCheckRows(t.checked), s.stopPropagation());
  },
  onCellClick(s, { rowID: e }) {
    const t = g(s.target);
    if (!t.length || t.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (t.closest(yl).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(e, void 0, !0);
  }
}, gf = jt(mf);
var fh = /* @__PURE__ */ ((s) => (s.unknown = "", s.collapsed = "collapsed", s.expanded = "expanded", s.hidden = "hidden", s.normal = "normal", s))(fh || {});
function Si(s) {
  const e = this.data.nestedMap.get(s);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const t = this.state.collapsedRows, n = e.children && t && t[s];
  let i = !1, { parent: o } = e;
  for (; o; ) {
    const r = Si.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return e.state = i ? "hidden" : n ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? Si.call(this, e.parent).level + 1 : 0, e;
}
function yf(s) {
  return s !== void 0 ? Si.call(this, s) : this.data.nestedMap;
}
function wf(s, e) {
  let t = this.state.collapsedRows ?? {};
  const { nestedMap: n } = this.data;
  if (s === "HEADER")
    if (e === void 0 && (e = !ph.call(this)), e) {
      const i = n.entries();
      for (const [o, r] of i)
        r.state === "expanded" && (t[o] = !0);
    } else
      t = {};
  else {
    const i = Array.isArray(s) ? s : [s];
    e === void 0 && (e = !t[i[0]]), i.forEach((o) => {
      const r = n.get(o);
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
function ph() {
  const s = this.data.nestedMap.values();
  for (const e of s)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function mh(s, e = 0, t, n = 0) {
  var i;
  t || (t = [...s.keys()]);
  for (const o of t) {
    const r = s.get(o);
    r && (r.level === n && (r.order = e++), (i = r.children) != null && i.length && (e = mh(s, e, r.children, n + 1)));
  }
  return e;
}
function gh(s, e, t, n) {
  const i = s.getNestedRowInfo(e);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    n[o] = t, gh(s, o, t, n);
  }), i;
}
function yh(s, e, t, n, i) {
  var a;
  const o = s.getNestedRowInfo(e);
  if (!o || o.state === "")
    return;
  ((a = o.children) == null ? void 0 : a.every((l) => {
    const h = !!(n[l] !== void 0 ? n[l] : i[l]);
    return t === h;
  })) && (n[e] = t), o.parent && yh(s, o.parent, t, n, i);
}
const bf = {
  name: "nested",
  defaultOptions: {
    nested: "auto",
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(s, e) {
      const { nestedMap: t } = this.data, n = t.get(s.id), i = t.get(e.id);
      return (n == null ? void 0 : n.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(s, e, t) {
      if (!this.options.checkable || !(s != null && s.length))
        return;
      const n = {};
      return Object.entries(e).forEach(([i, o]) => {
        const r = gh(this, i, o, n);
        r != null && r.parent && yh(this, r.parent, o, n, t);
      }), n;
    }
  },
  options(s) {
    return s.nested === "auto" && (s.nested = !!s.cols.some((e) => e.nestedToggle)), s;
  },
  when: (s) => !!s.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    getNestedInfo: yf,
    toggleRow: wf,
    isAllCollapsed: ph,
    getNestedRowInfo: Si
  },
  beforeLayout() {
    var s;
    (s = this.data.nestedMap) == null || s.clear();
  },
  onAddRow(s) {
    var i, o;
    const { nestedMap: e } = this.data, t = String((i = s.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"]), n = e.get(s.id) ?? {
      state: "",
      level: 0
    };
    if (n.parent = t === "0" ? void 0 : t, (o = s.data) != null && o[this.options.asParentKey ?? "asParent"] && (n.children = []), e.set(s.id, n), t) {
      let r = e.get(t);
      r || (r = {
        state: "",
        level: 0
      }, e.set(t, r)), r.children || (r.children = []), r.children.push(s.id);
    }
  },
  onAddRows(s) {
    return s = s.filter(
      (e) => this.getNestedRowInfo(e.id).state !== "hidden"
      /* hidden */
    ), mh(this.data.nestedMap), s.sort((e, t) => {
      const n = this.getNestedRowInfo(e.id), i = this.getNestedRowInfo(t.id), o = (n.order ?? 0) - (i.order ?? 0);
      return o === 0 ? e.index - t.index : o;
    }), s;
  },
  onRenderCell(s, { col: e, row: t }) {
    var a;
    const { id: n, data: i } = t, { nestedToggle: o } = e.setting, r = this.getNestedRowInfo(n);
    if (o && (r.children || r.parent) && s.unshift(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, r, n, e, i)) ?? /* @__PURE__ */ m("a", { className: `dtable-nested-toggle state${r.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${r.state}` }
    ), r.level) {
      let { nestedIndent: l = o } = e.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), s.unshift(/* @__PURE__ */ m("div", { className: "dtable-nested-indent", style: { width: l * r.level + "px" } })));
    }
    return s;
  },
  onRenderHeaderCell(s, { row: e, col: t }) {
    var i;
    const { id: n } = e;
    return t.setting.nestedToggle && s.unshift(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, n, t, void 0)) ?? /* @__PURE__ */ m("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), s;
  },
  onHeaderCellClick(s) {
    const e = s.target;
    if (!(!e || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(s, { rowID: e }) {
    const t = s.target;
    if (!(!t || !this.getNestedRowInfo(e).children || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow(e), !0;
  }
}, vf = jt(bf);
function lr(s, { row: e, col: t }) {
  const { data: n } = e, i = n ? n[t.name] : void 0;
  if (!(i != null && i.length))
    return s;
  const { avatarClass: o = "rounded-full", avatarKey: r = `${t.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: h = `${t.name}Name` } = t.setting, u = (n ? n[h] : i) || s[0], c = {
    size: "xs",
    className: R(o, a == null ? void 0 : a.className, "flex-none"),
    src: n ? n[r] : void 0,
    text: u,
    code: l ? n ? n[l] : void 0 : i,
    ...a
  };
  if (s[0] = /* @__PURE__ */ m(_c, { ...c }), t.type === "avatarBtn") {
    const { avatarBtnProps: d } = t.setting, f = typeof d == "function" ? d(t, e) : d;
    s[0] = /* @__PURE__ */ m("button", { type: "button", className: "btn btn-avatar", ...f, children: [
      s[0],
      /* @__PURE__ */ m("div", { children: u })
    ] });
  } else
    t.type === "avatarName" && (s[0] = /* @__PURE__ */ m("div", { className: "flex items-center gap-1", children: [
      s[0],
      /* @__PURE__ */ m("span", { children: u })
    ] }));
  return s;
}
const _f = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: lr
    },
    avatarBtn: {
      onRenderCell: lr
    },
    avatarName: {
      onRenderCell: lr
    }
  }
}, xf = jt(_f, { buildIn: !0 }), Cf = {
  name: "sort-type",
  onRenderHeaderCell(s, e) {
    const { col: t } = e, { sortType: n } = t.setting;
    if (n) {
      const i = n === !0 ? "none" : n;
      s.push(
        /* @__PURE__ */ m("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: o = this.options.sortLink } = t.setting;
      if (o) {
        const r = i === "asc" ? "desc" : "asc";
        typeof o == "function" && (o = o.call(this, t, r, i)), typeof o == "string" && (o = { url: o });
        const { url: a, ...l } = o;
        s[0] = /* @__PURE__ */ m("a", { href: Y(a, { ...t.setting, sortType: r }), ...l, children: s[0] });
      }
    }
    return s;
  }
}, $f = jt(Cf, { buildIn: !0 }), cr = (s) => {
  s.length !== 1 && s.forEach((e, t) => {
    !t || e.setting.border || e.setting.group === s[t - 1].setting.group || (e.setting.border = "left");
  });
}, Sf = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (s) => !!s.groupDivider,
  onLayout(s) {
    if (!this.options.groupDivider)
      return;
    const { cols: e } = s;
    cr(e.left.list), cr(e.center.list), cr(e.right.list);
  }
}, kf = jt(Sf), Ef = {
  name: "cellspan",
  when: (s) => !!s.getCellSpan,
  data() {
    return { cellSpanMap: /* @__PURE__ */ new Map(), overlayedCellSet: /* @__PURE__ */ new Set() };
  },
  onLayout(s) {
    const { getCellSpan: e } = this.options;
    if (!e)
      return;
    const { cellSpanMap: t, overlayedCellSet: n } = this.data, { rows: i, cols: o, rowHeight: r } = s;
    t.clear(), n.clear();
    const a = (l, h, u) => {
      const { index: c } = h;
      l.forEach((d, f) => {
        const { index: y } = d, w = `C${y}R${c}`;
        if (n.has(w))
          return;
        const v = e.call(this, { row: h, col: d });
        if (!v)
          return;
        const b = Math.min(v.colSpan || 1, l.length - f), x = Math.min(v.rowSpan || 1, i.length - u);
        if (b <= 1 && x <= 1)
          return;
        let $ = 0;
        for (let k = 0; k < b; k++) {
          $ += l[f + k].realWidth;
          for (let S = 0; S < x; S++) {
            const N = `C${y + k}R${c + S}`;
            N !== w && n.add(N);
          }
        }
        t.set(w, {
          colSpan: b,
          rowSpan: x,
          width: $,
          height: r * x
        });
      });
    };
    i.forEach((l, h) => {
      ["left", "center", "right"].forEach((u) => {
        a(o[u].list, l, h);
      });
    });
  },
  onRenderCell(s, { row: e, col: t }) {
    const n = `C${t.index}R${e.index}`;
    if (this.data.overlayedCellSet.has(n))
      s.push({ outer: !0, style: { display: "none", className: "cellspan-overlayed-cell" } });
    else {
      const i = this.data.cellSpanMap.get(n);
      i && s.push({
        outer: !0,
        style: {
          width: i.width,
          height: i.height
        }
      });
    }
    return s;
  }
}, Tf = jt(Ef), Nf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: fh,
  avatar: xf,
  cellspan: Tf,
  checkable: gf,
  custom: lf,
  group: kf,
  nested: vf,
  renderDatetime: ah,
  renderDatetimeCell: uh,
  renderFormat: ia,
  renderFormatCell: ch,
  renderHtmlCell: Lr,
  renderLink: rh,
  renderLinkCell: lh,
  renderMapCell: hh,
  rich: hf,
  sortType: $f
}, Symbol.toStringTag, { value: "Module" })), fe = class fe extends j {
};
fe.NAME = "DTable", fe.Component = of, fe.definePlugin = jt, fe.removePlugin = Zc, fe.plugins = Nf;
let wl = fe;
const Mf = "nav", oi = '[data-toggle="tab"]', Rf = "active";
var Ne;
const ha = class ha extends ht {
  constructor() {
    super(...arguments);
    _(this, Ne, 0);
  }
  active(t) {
    const n = this.$element, i = n.find(oi);
    let o = t ? g(t).closest(oi) : i.filter(`.${Rf}`);
    if (!o.length && (o = n.find(oi).first(), !o.length))
      return;
    i.removeClass("active"), o.addClass("active");
    const r = o.attr("href") || o.data("target"), a = o.data("name") || r, l = g(r);
    l.length && (l.parent().children(".tab-pane").removeClass("active in"), l.addClass("active").trigger("show", [a]), this.emit("show", a), p(this, Ne) && clearTimeout(p(this, Ne)), C(this, Ne, setTimeout(() => {
      l.addClass("in").trigger("show", [a]), this.emit("shown", a), C(this, Ne, 0);
    }, 10)));
  }
};
Ne = new WeakMap(), ha.NAME = "Tabs";
let Ar = ha;
g(document).on("click.tabs.zui", oi, (s) => {
  s.preventDefault();
  const e = g(s.target), t = e.closest(`.${Mf}`);
  t.length && Ar.ensure(t).active(e);
});
g(() => {
  g(".disabled, [disabled]").on("click", (s) => {
    s.preventDefault(), s.stopImmediatePropagation();
  });
});
export {
  g as $,
  Sa as ActionMenu,
  ka as ActionMenuNested,
  Ba as Avatar,
  Wa as BtnGroup,
  za as ColorPicker,
  ht as Component,
  j as ComponentFromReact,
  lt as ContextMenu,
  Tn as CustomContent,
  fr as CustomRender,
  wl as DTable,
  ul as Dashboard,
  qa as DatePicker,
  ne as Dropdown,
  bc as EventBus,
  Ql as HElement,
  Hs as HtmlContent,
  et as Icon,
  Ea as Menu,
  Ia as Messager,
  xr as Modal,
  Pe as ModalBase,
  Sr as ModalTrigger,
  Ka as Nav,
  Xa as Pager,
  Ga as Pick,
  Za as Picker,
  Ja as Popover,
  kr as PopoverPanel,
  Qa as Popovers,
  Da as ProgressCircle,
  W as ReactComponent,
  tl as SearchBox,
  Bn as TIME_DAY,
  Ar as Tabs,
  Ua as TimePicker,
  el as Toolbar,
  Ot as Tooltip,
  ll as Tree,
  Mr as Upload,
  cl as UploadImgs,
  id as addDate,
  g as cash,
  R as classes,
  ti as componentsMap,
  cu as convertBytes,
  fu as create,
  X as createDate,
  $u as createPortal,
  K as createRef,
  au as deepGet,
  ru as deepGetPath,
  Af as defineFn,
  ci as delay,
  If as dom,
  lu as formatBytes,
  pt as formatDate,
  Ff as formatDateSpan,
  Y as formatString,
  Hl as getClassList,
  hi as getComponent,
  U as h,
  Df as hh,
  bu as htm,
  J as i18n,
  Us as isSameDay,
  Cc as isSameMonth,
  Hf as isSameWeek,
  vr as isSameYear,
  Bf as isToday,
  zf as isTomorrow,
  Z as isValidElement,
  Wf as isYesterday,
  Pa as nativeEvents,
  Pn as render,
  tc as renderCustomContent,
  _u as renderCustomResult,
  Rn as store,
  Bl as storeData,
  Wl as takeData
};
//# sourceMappingURL=zui.js.map
