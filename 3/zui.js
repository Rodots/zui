var Bi = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var k = (e, t, n) => (Bi(e, t, "read from private field"), n ? n.call(e) : t.get(e)), L = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, B = (e, t, n, s) => (Bi(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var pe = (e, t, n) => (Bi(e, t, "access private method"), n);
const Ut = document, Os = window, Oa = Ut.documentElement, Pe = Ut.createElement.bind(Ut), Ha = Pe("div"), zi = Pe("table"), wh = Pe("tbody"), Jo = Pe("tr"), { isArray: _i, prototype: Ba } = Array, { concat: vh, filter: zr, indexOf: za, map: Fa, push: _h, slice: Ua, some: Fr, splice: bh } = Ba, xh = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, $h = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, kh = /<.+>/, Ch = /^\w+$/;
function Ur(e, t) {
  const n = Sh(t);
  return !e || !n && !Te(t) && !G(t) ? [] : !n && $h.test(e) ? t.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !n && Ch.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e);
}
class bi {
  constructor(t, n) {
    if (!t)
      return;
    if (er(t))
      return t;
    let s = t;
    if (Q(t)) {
      const i = n || Ut;
      if (s = xh.test(t) && Te(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : kh.test(t) ? Ga(t) : er(i) ? i.find(t) : Q(i) ? m(i).find(t) : Ur(t, i), !s)
        return;
    } else if (We(t))
      return this.ready(t);
    (s.nodeType || s === Os) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(t, n) {
    return new bi(t, n);
  }
}
const x = bi.prototype, m = x.init;
m.fn = m.prototype = x;
x.length = 0;
x.splice = bh;
typeof Symbol == "function" && (x[Symbol.iterator] = Ba[Symbol.iterator]);
function er(e) {
  return e instanceof bi;
}
function cn(e) {
  return !!e && e === e.window;
}
function Te(e) {
  return !!e && e.nodeType === 9;
}
function Sh(e) {
  return !!e && e.nodeType === 11;
}
function G(e) {
  return !!e && e.nodeType === 1;
}
function Eh(e) {
  return !!e && e.nodeType === 3;
}
function Mh(e) {
  return typeof e == "boolean";
}
function We(e) {
  return typeof e == "function";
}
function Q(e) {
  return typeof e == "string";
}
function st(e) {
  return e === void 0;
}
function Fn(e) {
  return e === null;
}
function Va(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function Vr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
m.isWindow = cn;
m.isFunction = We;
m.isArray = _i;
m.isNumeric = Va;
m.isPlainObject = Vr;
function K(e, t, n) {
  if (n) {
    let s = e.length;
    for (; s--; )
      if (t.call(e[s], s, e[s]) === !1)
        return e;
  } else if (Vr(e)) {
    const s = Object.keys(e);
    for (let i = 0, r = s.length; i < r; i++) {
      const o = s[i];
      if (t.call(e[o], o, e[o]) === !1)
        return e;
    }
  } else
    for (let s = 0, i = e.length; s < i; s++)
      if (t.call(e[s], s, e[s]) === !1)
        return e;
  return e;
}
m.each = K;
x.each = function(e) {
  return K(this, e);
};
x.empty = function() {
  return this.each((e, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Hs(...e) {
  const t = Mh(e[0]) ? e.shift() : !1, n = e.shift(), s = e.length;
  if (!n)
    return {};
  if (!s)
    return Hs(t, m, n);
  for (let i = 0; i < s; i++) {
    const r = e[i];
    for (const o in r)
      t && (_i(r[o]) || Vr(r[o])) ? ((!n[o] || n[o].constructor !== r[o].constructor) && (n[o] = new r[o].constructor()), Hs(t, n[o], r[o])) : n[o] = r[o];
  }
  return n;
}
m.extend = Hs;
x.extend = function(e) {
  return Hs(x, e);
};
const Th = /\S+/g;
function xi(e) {
  return Q(e) ? e.match(Th) || [] : [];
}
x.toggleClass = function(e, t) {
  const n = xi(e), s = !st(t);
  return this.each((i, r) => {
    G(r) && K(n, (o, a) => {
      s ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
x.addClass = function(e) {
  return this.toggleClass(e, !0);
};
x.removeAttr = function(e) {
  const t = xi(e);
  return this.each((n, s) => {
    G(s) && K(t, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function Rh(e, t) {
  if (e) {
    if (Q(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !G(this[0]))
          return;
        const n = this[0].getAttribute(e);
        return Fn(n) ? void 0 : n;
      }
      return st(t) ? this : Fn(t) ? this.removeAttr(e) : this.each((n, s) => {
        G(s) && s.setAttribute(e, t);
      });
    }
    for (const n in e)
      this.attr(n, e[n]);
    return this;
  }
}
x.attr = Rh;
x.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
x.hasClass = function(e) {
  return !!e && Fr.call(this, (t) => G(t) && t.classList.contains(e));
};
x.get = function(e) {
  return st(e) ? Ua.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
};
x.eq = function(e) {
  return m(this.get(e));
};
x.first = function() {
  return this.eq(0);
};
x.last = function() {
  return this.eq(-1);
};
function Nh(e) {
  return st(e) ? this.get().map((t) => G(t) || Eh(t) ? t.textContent : "").join("") : this.each((t, n) => {
    G(n) && (n.textContent = e);
  });
}
x.text = Nh;
function Vt(e, t, n) {
  if (!G(e))
    return;
  const s = Os.getComputedStyle(e, null);
  return n ? s.getPropertyValue(t) || void 0 : s[t] || e.style[t];
}
function xt(e, t) {
  return parseInt(Vt(e, t), 10) || 0;
}
function Zo(e, t) {
  return xt(e, `border${t ? "Left" : "Top"}Width`) + xt(e, `padding${t ? "Left" : "Top"}`) + xt(e, `padding${t ? "Right" : "Bottom"}`) + xt(e, `border${t ? "Right" : "Bottom"}Width`);
}
const Fi = {};
function Ah(e) {
  if (Fi[e])
    return Fi[e];
  const t = Pe(e);
  Ut.body.insertBefore(t, null);
  const n = Vt(t, "display");
  return Ut.body.removeChild(t), Fi[e] = n !== "none" ? n : "block";
}
function Qo(e) {
  return Vt(e, "display") === "none";
}
function qa(e, t) {
  const n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!n && !!t && n.call(e, t);
}
function $i(e) {
  return Q(e) ? (t, n) => qa(n, e) : We(e) ? e : er(e) ? (t, n) => e.is(n) : e ? (t, n) => n === e : () => !1;
}
x.filter = function(e) {
  const t = $i(e);
  return m(zr.call(this, (n, s) => t.call(n, s, n)));
};
function de(e, t) {
  return t ? e.filter(t) : e;
}
x.detach = function(e) {
  return de(this, e).each((t, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Lh = /^\s*<(\w+)[^>]*>/, Ph = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, ta = {
  "*": Ha,
  tr: wh,
  td: Jo,
  th: Jo,
  thead: zi,
  tbody: zi,
  tfoot: zi
};
function Ga(e) {
  if (!Q(e))
    return [];
  if (Ph.test(e))
    return [Pe(RegExp.$1)];
  const t = Lh.test(e) && RegExp.$1, n = ta[t] || ta["*"];
  return n.innerHTML = e, m(n.childNodes).detach().get();
}
m.parseHTML = Ga;
x.has = function(e) {
  const t = Q(e) ? (n, s) => Ur(e, s).length : (n, s) => s.contains(e);
  return this.filter(t);
};
x.not = function(e) {
  const t = $i(e);
  return this.filter((n, s) => (!Q(e) || G(s)) && !t.call(s, n, s));
};
function Kt(e, t, n, s) {
  const i = [], r = We(t), o = s && $i(s);
  for (let a = 0, l = e.length; a < l; a++)
    if (r) {
      const h = t(e[a]);
      h.length && _h.apply(i, h);
    } else {
      let h = e[a][t];
      for (; h != null && !(s && o(-1, h)); )
        i.push(h), h = n ? h[t] : null;
    }
  return i;
}
function ja(e) {
  return e.multiple && e.options ? Kt(zr.call(e.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : e.value || "";
}
function Wh(e) {
  return arguments.length ? this.each((t, n) => {
    const s = n.multiple && n.options;
    if (s || el.test(n.type)) {
      const i = _i(e) ? Fa.call(e, String) : Fn(e) ? [] : [String(e)];
      s ? K(n.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = st(e) || Fn(e) ? "" : e;
  }) : this[0] && ja(this[0]);
}
x.val = Wh;
x.is = function(e) {
  const t = $i(e);
  return Fr.call(this, (n, s) => t.call(n, s, n));
};
m.guid = 1;
function St(e) {
  return e.length > 1 ? zr.call(e, (t, n, s) => za.call(s, t) === n) : e;
}
m.unique = St;
x.add = function(e, t) {
  return m(St(this.get().concat(m(e, t).get())));
};
x.children = function(e) {
  return de(m(St(Kt(this, (t) => t.children))), e);
};
x.parent = function(e) {
  return de(m(St(Kt(this, "parentNode"))), e);
};
x.index = function(e) {
  const t = e ? m(e)[0] : this[0], n = e ? this : m(t).parent().children();
  return za.call(n, t);
};
x.closest = function(e) {
  const t = this.filter(e);
  if (t.length)
    return t;
  const n = this.parent();
  return n.length ? n.closest(e) : t;
};
x.siblings = function(e) {
  return de(m(St(Kt(this, (t) => m(t).parent().children().not(t)))), e);
};
x.find = function(e) {
  return m(St(Kt(this, (t) => Ur(e, t))));
};
const Dh = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ih = /^$|^module$|\/(java|ecma)script/i, Oh = ["type", "src", "nonce", "noModule"];
function Hh(e, t) {
  const n = m(e);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (Ih.test(i.type) && Oa.contains(i)) {
      const r = Pe("script");
      r.text = i.textContent.replace(Dh, ""), K(Oh, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function Bh(e, t, n, s, i) {
  s ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), i && Hh(t, e.ownerDocument);
}
function ue(e, t, n, s, i, r, o, a) {
  return K(e, (l, h) => {
    K(m(h), (c, d) => {
      K(m(t), (u, f) => {
        const p = n ? d : f, g = n ? f : d, v = n ? c : u;
        Bh(p, v ? g.cloneNode(!0) : g, s, i, !v);
      }, a);
    }, o);
  }, r), t;
}
x.after = function() {
  return ue(arguments, this, !1, !1, !1, !0, !0);
};
x.append = function() {
  return ue(arguments, this, !1, !1, !0);
};
function zh(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (st(e))
    return this;
  const t = /<script[\s>]/.test(e);
  return this.each((n, s) => {
    G(s) && (t ? m(s).empty().append(e) : s.innerHTML = e);
  });
}
x.html = zh;
x.appendTo = function(e) {
  return ue(arguments, this, !0, !1, !0);
};
x.wrapInner = function(e) {
  return this.each((t, n) => {
    const s = m(n), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
x.before = function() {
  return ue(arguments, this, !1, !0);
};
x.wrapAll = function(e) {
  let t = m(e), n = t[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(t), this.appendTo(n);
};
x.wrap = function(e) {
  return this.each((t, n) => {
    const s = m(e)[0];
    m(n).wrapAll(t ? s.cloneNode(!0) : s);
  });
};
x.insertAfter = function(e) {
  return ue(arguments, this, !0, !1, !1, !1, !1, !0);
};
x.insertBefore = function(e) {
  return ue(arguments, this, !0, !0);
};
x.prepend = function() {
  return ue(arguments, this, !1, !0, !0, !0, !0);
};
x.prependTo = function(e) {
  return ue(arguments, this, !0, !0, !0, !1, !1, !0);
};
x.contents = function() {
  return m(St(Kt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
x.next = function(e, t, n) {
  return de(m(St(Kt(this, "nextElementSibling", t, n))), e);
};
x.nextAll = function(e) {
  return this.next(e, !0);
};
x.nextUntil = function(e, t) {
  return this.next(t, !0, e);
};
x.parents = function(e, t) {
  return de(m(St(Kt(this, "parentElement", !0, t))), e);
};
x.parentsUntil = function(e, t) {
  return this.parents(t, e);
};
x.prev = function(e, t, n) {
  return de(m(St(Kt(this, "previousElementSibling", t, n))), e);
};
x.prevAll = function(e) {
  return this.prev(e, !0);
};
x.prevUntil = function(e, t) {
  return this.prev(t, !0, e);
};
x.map = function(e) {
  return m(vh.apply([], Fa.call(this, (t, n) => e.call(t, n, t))));
};
x.clone = function() {
  return this.map((e, t) => t.cloneNode(!0));
};
x.offsetParent = function() {
  return this.map((e, t) => {
    let n = t.offsetParent;
    for (; n && Vt(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Oa;
  });
};
x.slice = function(e, t) {
  return m(Ua.call(this, e, t));
};
const Fh = /-([a-z])/g;
function qr(e) {
  return e.replace(Fh, (t, n) => n.toUpperCase());
}
x.ready = function(e) {
  const t = () => setTimeout(e, 0, m);
  return Ut.readyState !== "loading" ? t() : Ut.addEventListener("DOMContentLoaded", t), this;
};
x.unwrap = function() {
  return this.parent().each((e, t) => {
    if (t.tagName === "BODY")
      return;
    const n = m(t);
    n.replaceWith(n.children());
  }), this;
};
x.offset = function() {
  const e = this[0];
  if (!e)
    return;
  const t = e.getBoundingClientRect();
  return {
    top: t.top + Os.pageYOffset,
    left: t.left + Os.pageXOffset
  };
};
x.position = function() {
  const e = this[0];
  if (!e)
    return;
  const t = Vt(e, "position") === "fixed", n = t ? e.getBoundingClientRect() : this.offset();
  if (!t) {
    const s = e.ownerDocument;
    let i = e.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && Vt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== e && G(i)) {
      const r = m(i).offset();
      n.top -= r.top + xt(i, "borderTopWidth"), n.left -= r.left + xt(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - xt(e, "marginTop"),
    left: n.left - xt(e, "marginLeft")
  };
};
const Ya = {
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
x.prop = function(e, t) {
  if (e) {
    if (Q(e))
      return e = Ya[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((n, s) => {
        s[e] = t;
      });
    for (const n in e)
      this.prop(n, e[n]);
    return this;
  }
};
x.removeProp = function(e) {
  return this.each((t, n) => {
    delete n[Ya[e] || e];
  });
};
const Uh = /^--/;
function Gr(e) {
  return Uh.test(e);
}
const Ui = {}, { style: Vh } = Ha, qh = ["webkit", "moz", "ms"];
function Gh(e, t = Gr(e)) {
  if (t)
    return e;
  if (!Ui[e]) {
    const n = qr(e), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${qh.join(`${s} `)}${s}`.split(" ");
    K(i, (r, o) => {
      if (o in Vh)
        return Ui[e] = o, !1;
    });
  }
  return Ui[e];
}
const jh = {
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
function Ka(e, t, n = Gr(e)) {
  return !n && !jh[e] && Va(t) ? `${t}px` : t;
}
function Yh(e, t) {
  if (Q(e)) {
    const n = Gr(e);
    return e = Gh(e, n), arguments.length < 2 ? this[0] && Vt(this[0], e, n) : e ? (t = Ka(e, t, n), this.each((s, i) => {
      G(i) && (n ? i.style.setProperty(e, t) : i.style[e] = t);
    })) : this;
  }
  for (const n in e)
    this.css(n, e[n]);
  return this;
}
x.css = Yh;
function Xa(e, t) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
const Kh = /^\s+|\s+$/;
function ea(e, t) {
  const n = e.dataset[t] || e.dataset[qr(t)];
  return Kh.test(n) ? n : Xa(JSON.parse, n);
}
function Xh(e, t, n) {
  n = Xa(JSON.stringify, n), e.dataset[qr(t)] = n;
}
function Jh(e, t) {
  if (!e) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = ea(this[0], s);
    return n;
  }
  if (Q(e))
    return arguments.length < 2 ? this[0] && ea(this[0], e) : st(t) ? this : this.each((n, s) => {
      Xh(s, e, t);
    });
  for (const n in e)
    this.data(n, e[n]);
  return this;
}
x.data = Jh;
function Ja(e, t) {
  const n = e.documentElement;
  return Math.max(e.body[`scroll${t}`], n[`scroll${t}`], e.body[`offset${t}`], n[`offset${t}`], n[`client${t}`]);
}
K([!0, !1], (e, t) => {
  K(["Width", "Height"], (n, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    x[i] = function(r) {
      if (this[0])
        return cn(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : Te(this[0]) ? Ja(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (r && t ? xt(this[0], `margin${n ? "Top" : "Left"}`) + xt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
K(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  x[n] = function(s) {
    if (!this[0])
      return st(s) ? void 0 : this;
    if (!arguments.length)
      return cn(this[0]) ? this[0].document.documentElement[`client${t}`] : Te(this[0]) ? Ja(this[0], t) : this[0].getBoundingClientRect()[n] - Zo(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!G(o))
        return;
      const a = Vt(o, "boxSizing");
      o.style[n] = Ka(n, i + (a === "border-box" ? Zo(o, !e) : 0));
    });
  };
});
const na = "___cd";
x.toggle = function(e) {
  return this.each((t, n) => {
    if (!G(n))
      return;
    const s = Qo(n);
    (st(e) ? s : e) ? (n.style.display = n[na] || "", Qo(n) && (n.style.display = Ah(n.tagName))) : s || (n[na] = Vt(n, "display"), n.style.display = "none");
  });
};
x.hide = function() {
  return this.toggle(!1);
};
x.show = function() {
  return this.toggle(!0);
};
const sa = "___ce", jr = ".", Yr = { focus: "focusin", blur: "focusout" }, Za = { mouseenter: "mouseover", mouseleave: "mouseout" }, Zh = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Kr(e) {
  return Za[e] || Yr[e] || e;
}
function Xr(e) {
  const t = e.split(jr);
  return [t[0], t.slice(1).sort()];
}
x.trigger = function(e, t) {
  if (Q(e)) {
    const [s, i] = Xr(e), r = Kr(s);
    if (!r)
      return this;
    const o = Zh.test(r) ? "MouseEvents" : "HTMLEvents";
    e = Ut.createEvent(o), e.initEvent(r, !0, !0), e.namespace = i.join(jr), e.___ot = s;
  }
  e.___td = t;
  const n = e.___ot in Yr;
  return this.each((s, i) => {
    n && We(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function Qa(e) {
  return e[sa] = e[sa] || {};
}
function Qh(e, t, n, s, i) {
  const r = Qa(e);
  r[t] = r[t] || [], r[t].push([n, s, i]), e.addEventListener(t, i);
}
function tl(e, t) {
  return !t || !Fr.call(t, (n) => e.indexOf(n) < 0);
}
function Bs(e, t, n, s, i) {
  const r = Qa(e);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !tl(o, n) || s && s !== a)
        return !0;
      e.removeEventListener(t, l);
    }));
  else
    for (t in r)
      Bs(e, t, n, s, i);
}
x.off = function(e, t, n) {
  if (st(e))
    this.each((s, i) => {
      !G(i) && !Te(i) && !cn(i) || Bs(i);
    });
  else if (Q(e))
    We(t) && (n = t, t = ""), K(xi(e), (s, i) => {
      const [r, o] = Xr(i), a = Kr(r);
      this.each((l, h) => {
        !G(h) && !Te(h) && !cn(h) || Bs(h, a, o, t, n);
      });
    });
  else
    for (const s in e)
      this.off(s, e[s]);
  return this;
};
x.remove = function(e) {
  return de(this, e).detach().off(), this;
};
x.replaceWith = function(e) {
  return this.before(e).remove();
};
x.replaceAll = function(e) {
  return m(e).replaceWith(this), this;
};
function td(e, t, n, s, i) {
  if (!Q(e)) {
    for (const r in e)
      this.on(r, t, n, e[r], i);
    return this;
  }
  return Q(t) || (st(t) || Fn(t) ? t = "" : st(n) ? (n = t, t = "") : (s = n, n = t, t = "")), We(s) || (s = n, n = void 0), s ? (K(xi(e), (r, o) => {
    const [a, l] = Xr(o), h = Kr(a), c = a in Za, d = a in Yr;
    h && this.each((u, f) => {
      if (!G(f) && !Te(f) && !cn(f))
        return;
      const p = function(g) {
        if (g.target[`___i${g.type}`])
          return g.stopImmediatePropagation();
        if (g.namespace && !tl(l, g.namespace.split(jr)) || !t && (d && (g.target !== f || g.___ot === h) || c && g.relatedTarget && f.contains(g.relatedTarget)))
          return;
        let v = f;
        if (t) {
          let _ = g.target;
          for (; !qa(_, t); )
            if (_ === f || (_ = _.parentNode, !_))
              return;
          v = _;
        }
        Object.defineProperty(g, "currentTarget", {
          configurable: !0,
          get() {
            return v;
          }
        }), Object.defineProperty(g, "delegateTarget", {
          configurable: !0,
          get() {
            return f;
          }
        }), Object.defineProperty(g, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const w = s.call(v, g, g.___td);
        i && Bs(f, h, l, t, p), w === !1 && (g.preventDefault(), g.stopPropagation());
      };
      p.guid = s.guid = s.guid || m.guid++, Qh(f, h, l, t, p);
    });
  }), this) : this;
}
x.on = td;
function ed(e, t, n, s) {
  return this.on(e, t, n, s, !0);
}
x.one = ed;
const nd = /\r?\n/g;
function sd(e, t) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(t.replace(nd, `\r
`))}`;
}
const id = /file|reset|submit|button|image/i, el = /radio|checkbox/i;
x.serialize = function() {
  let e = "";
  return this.each((t, n) => {
    K(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || id.test(i.type) || el.test(i.type) && !i.checked)
        return;
      const r = ja(i);
      if (!st(r)) {
        const o = _i(r) ? r : [r];
        K(o, (a, l) => {
          e += sd(i.name, l);
        });
      }
    });
  }), e.slice(1);
};
window.$ = m;
function rd(e, t) {
  if (e == null)
    return [e, void 0];
  typeof t == "string" && (t = t.split("."));
  const n = t.join(".");
  let s = e;
  const i = [s];
  for (; typeof s == "object" && s !== null && t.length; ) {
    let r = t.shift(), o;
    const a = r.indexOf("[");
    if (a > 0 && a < r.length - 1 && r.endsWith("]") && (o = r.substring(a + 1, r.length - 1), r = r.substring(0, a)), s = s[r], i.push(s), o !== void 0)
      if (typeof s == "object" && s !== null)
        s instanceof Map ? s = s.get(o) : s = s[o], i.push(s);
      else
        throw new Error(`Cannot access property "${r}[${o}]", the full path is "${n}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${n}".`);
  return i;
}
function od(e, t, n) {
  try {
    const s = rd(e, t), i = s[s.length - 1];
    return i === void 0 ? n : i;
  } catch {
    return n;
  }
}
function et(e, ...t) {
  if (t.length === 0)
    return e;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const n = t[0];
    return Object.keys(n).forEach((s) => {
      const i = n[s] ?? "";
      e = e.replace(new RegExp(`\\{${s}\\}`, "g"), `${i}`);
    }), e;
  }
  for (let n = 0; n < t.length; n++) {
    const s = t[n] ?? "";
    e = e.replace(new RegExp(`\\{${n}\\}`, "g"), `${s}`);
  }
  return e;
}
var Jr = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Jr || {});
function ad(e, t = 2, n) {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Jr[n]).toFixed(t) + n);
}
const ld = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const s = n[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * Jr[s];
};
let Zr = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), ne;
function cd() {
  return Zr;
}
function hd(e) {
  Zr = e.toLowerCase();
}
function nl(e, t) {
  ne || (ne = {}), typeof e == "string" && (e = { [e]: t ?? {} }), m.extend(!0, ne, e);
}
function qt(e, t, n, s, i, r) {
  Array.isArray(e) ? ne && e.unshift(ne) : e = ne ? [ne, e] : [e], typeof n == "string" && (r = i, i = s, s = n, n = void 0);
  const o = i || Zr;
  let a;
  for (const l of e) {
    if (!l)
      continue;
    const h = l[o];
    if (!h)
      continue;
    const c = r && l === ne ? `${r}.${t}` : t;
    if (a = od(h, c), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? et(a, ...Array.isArray(n) ? n : [n]) : a;
}
function dd(e, t, n, s) {
  return qt(void 0, e, t, n, s);
}
qt.addLang = nl;
qt.getLang = dd;
qt.getCode = cd;
qt.setCode = hd;
nl({
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
function sl(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = n.get(i);
    typeof o == "number" ? t[o][1] = !!r : (n.set(i, t.length), t.push([i, !!r]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? sl(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), t.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const T = (...e) => sl(...e).reduce((t, [n, s]) => (s && t.push(n), t), []).join(" ");
m.classes = T;
m.fn.setClass = function(e, ...t) {
  return this.each((n, s) => {
    const i = m(s);
    e === !0 ? i.attr("class", T(i.attr("class"), ...t)) : i.addClass(T(e, ...t));
  });
};
const yn = /* @__PURE__ */ new WeakMap();
function il(e, t, n) {
  const s = yn.has(e), i = s ? yn.get(e) : {};
  typeof t == "string" ? i[t] = n : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && e instanceof Element && Object.assign(i, m(e).dataset(), i), yn.set(e, i)) : yn.delete(e);
}
function ud(e, t) {
  let n = yn.get(e) || {};
  return e instanceof Element && (n = Object.assign({}, m(e).dataset(), n)), t === void 0 ? n : n[t];
}
m.fn.dataset = m.fn.data;
m.fn.data = function(...e) {
  if (!this.length)
    return;
  const [t, n] = e;
  return !e.length || e.length === 1 && typeof t == "string" ? ud(this[0], t) : this.each((s, i) => il(i, t, n));
};
m.fn.removeData = function(e = null) {
  return this.each((t, n) => il(n, e));
};
m.fn._attr = m.fn.attr;
m.fn.extend({
  attr(...e) {
    const [t, n] = e;
    return !e.length || e.length === 1 && typeof t == "string" ? this._attr.apply(this, e) : typeof t == "object" ? (t && Object.keys(t).forEach((s) => {
      const i = t[s];
      i === null ? this.removeAttr(s) : this._attr(s, i);
    }), this) : n === null ? this.removeAttr(t) : this._attr(t, n);
  }
});
m.Event = (e, t) => {
  const [n, ...s] = e.split("."), i = new Event(n, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = s.join("."), i.___ot = n, i.___td = t, i;
};
const zs = (e, t) => new Promise((n) => {
  const s = window.setTimeout(n, e);
  t && t(s);
});
function rl(e, t) {
  const n = m(e)[0];
  if (!n)
    return !1;
  const { left: s, top: i, width: r, height: o } = n.getBoundingClientRect(), { innerHeight: a, innerWidth: l } = window, { clientHeight: h, clientWidth: c } = document.documentElement, d = a || h, u = l || c;
  if (t != null && t.fullyCheck)
    return s >= 0 && i >= 0 && s + r <= u && i + o <= d;
  const f = i <= d && i + o >= 0, p = s <= u && s + r >= 0;
  return f && p;
}
m.fn.isVisible = function(e) {
  return this.each((t, n) => {
    rl(n, e);
  });
};
function Qr(e, t, n = !1) {
  const s = m(e);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${m.guid++}`;
      s.append(`<script id="${i}">${t}<\/script>`), n && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, r) => {
    Qr(s, r.innerHTML), r.remove();
  });
}
m.runJS = (e, ...t) => (e = e.trim(), e.startsWith("return ") || (e = `return ${e}`), new Function(...t.map(([s]) => s), e)(...t.map(([, s]) => s)));
m.fn.runJS = function(e) {
  return this.each((t, n) => {
    Qr(n, e);
  });
};
const xf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: rl,
  runJS: Qr
}, Symbol.toStringTag, { value: "Module" }));
var ki, z, ol, Z, be, ia, al, nr, Fs = {}, ll = [], fd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, to = Array.isArray;
function ae(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function cl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function q(e, t, n) {
  var s, i, r, o = {};
  for (r in t)
    r == "key" ? s = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? ki.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      o[r] === void 0 && (o[r] = e.defaultProps[r]);
  return $s(e, o, s, i, null);
}
function $s(e, t, n, s, i) {
  var r = { type: e, props: t, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++ol };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function it() {
  return { current: null };
}
function rs(e) {
  return e.children;
}
function V(e, t) {
  this.props = e, this.context = t;
}
function Un(e, t) {
  if (t == null)
    return e.__ ? Un(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Un(e) : null;
}
function hl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return hl(e);
  }
}
function ra(e) {
  (!e.__d && (e.__d = !0) && be.push(e) && !Us.__r++ || ia !== z.debounceRendering) && ((ia = z.debounceRendering) || al)(Us);
}
function Us() {
  var e, t, n, s, i, r, o, a;
  for (be.sort(nr); e = be.shift(); )
    e.__d && (t = be.length, s = void 0, i = void 0, o = (r = (n = e).__v).__e, (a = n.__P) && (s = [], (i = ae({}, r)).__v = r.__v + 1, eo(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? Un(r), r.__h), gl(s, r), r.__e != o && hl(r)), be.length > t && be.sort(nr));
  Us.__r = 0;
}
function dl(e, t, n, s, i, r, o, a, l, h) {
  var c, d, u, f, p, g, v, w = s && s.__k || ll, _ = w.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((f = n.__k[c] = (f = t[c]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? $s(null, f, null, null, f) : to(f) ? $s(rs, { children: f }, null, null, null) : f.__b > 0 ? $s(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
      if (f.__ = n, f.__b = n.__b + 1, (u = w[c]) === null || u && f.key == u.key && f.type === u.type)
        w[c] = void 0;
      else
        for (d = 0; d < _; d++) {
          if ((u = w[d]) && f.key == u.key && f.type === u.type) {
            w[d] = void 0;
            break;
          }
          u = null;
        }
      eo(e, f, u = u || Fs, i, r, o, a, l, h), p = f.__e, (d = f.ref) && u.ref != d && (v || (v = []), u.ref && v.push(u.ref, null, f), v.push(d, f.__c || p, f)), p != null ? (g == null && (g = p), typeof f.type == "function" && f.__k === u.__k ? f.__d = l = ul(f, l, e) : l = fl(e, f, u, w, p, l), typeof n.type == "function" && (n.__d = l)) : l && u.__e == l && l.parentNode != e && (l = Un(u));
    }
  for (n.__e = g, c = _; c--; )
    w[c] != null && (typeof n.type == "function" && w[c].__e != null && w[c].__e == n.__d && (n.__d = pl(s).nextSibling), yl(w[c], w[c]));
  if (v)
    for (c = 0; c < v.length; c++)
      ml(v[c], v[++c], v[++c]);
}
function ul(e, t, n) {
  for (var s, i = e.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = e, t = typeof s.type == "function" ? ul(s, t, n) : fl(n, s, s, i, s.__e, t));
  return t;
}
function fl(e, t, n, s, i, r) {
  var o, a, l;
  if (t.__d !== void 0)
    o = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), o = null;
      else {
        for (a = r, l = 0; (a = a.nextSibling) && l < s.length; l += 1)
          if (a == i)
            break t;
        e.insertBefore(i, r), o = r;
      }
  return o !== void 0 ? o : i.nextSibling;
}
function pl(e) {
  var t, n, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (s = pl(n)))
        return s;
  }
  return null;
}
function pd(e, t, n, s, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Vs(e, r, null, n[r], s);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Vs(e, r, t[r], n[r], s);
}
function oa(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || fd.test(t) ? n : n + "px";
}
function Vs(e, t, n, s, i) {
  var r;
  t:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (t in s)
            n && t in n || oa(e.style, t, "");
        if (n)
          for (t in n)
            s && n[t] === s[t] || oa(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? s || e.addEventListener(t, r ? la : aa, r) : e.removeEventListener(t, r ? la : aa, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t in e)
        try {
          e[t] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function aa(e) {
  return this.l[e.type + !1](z.event ? z.event(e) : e);
}
function la(e) {
  return this.l[e.type + !0](z.event ? z.event(e) : e);
}
function eo(e, t, n, s, i, r, o, a, l) {
  var h, c, d, u, f, p, g, v, w, _, $, S, C, M, N, A = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = z.__b) && h(t);
  try {
    t:
      if (typeof A == "function") {
        if (v = t.props, w = (h = A.contextType) && s[h.__c], _ = h ? w ? w.props.value : h.__ : s, n.__c ? g = (c = t.__c = n.__c).__ = c.__E : ("prototype" in A && A.prototype.render ? t.__c = c = new A(v, _) : (t.__c = c = new V(v, _), c.constructor = A, c.render = md), w && w.sub(c), c.props = v, c.state || (c.state = {}), c.context = _, c.__n = s, d = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), A.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ae({}, c.__s)), ae(c.__s, A.getDerivedStateFromProps(v, c.__s))), u = c.props, f = c.state, c.__v = t, d)
          A.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && v !== u && c.componentWillReceiveProps != null && c.componentWillReceiveProps(v, _), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(v, c.__s, _) === !1 || t.__v === n.__v) {
            for (t.__v !== n.__v && (c.props = v, c.state = c.__s, c.__d = !1), c.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(O) {
              O && (O.__ = t);
            }), $ = 0; $ < c._sb.length; $++)
              c.__h.push(c._sb[$]);
            c._sb = [], c.__h.length && o.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(v, c.__s, _), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(u, f, p);
          });
        }
        if (c.context = _, c.props = v, c.__P = e, S = z.__r, C = 0, "prototype" in A && A.prototype.render) {
          for (c.state = c.__s, c.__d = !1, S && S(t), h = c.render(c.props, c.state, c.context), M = 0; M < c._sb.length; M++)
            c.__h.push(c._sb[M]);
          c._sb = [];
        } else
          do
            c.__d = !1, S && S(t), h = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++C < 25);
        c.state = c.__s, c.getChildContext != null && (s = ae(ae({}, s), c.getChildContext())), d || c.getSnapshotBeforeUpdate == null || (p = c.getSnapshotBeforeUpdate(u, f)), dl(e, to(N = h != null && h.type === rs && h.key == null ? h.props.children : h) ? N : [N], t, n, s, i, r, o, a, l), c.base = t.__e, t.__h = null, c.__h.length && o.push(c), g && (c.__E = c.__ = null), c.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = gd(n.__e, t, n, s, i, r, o, l);
    (h = z.diffed) && h(t);
  } catch (O) {
    t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), z.__e(O, t, n);
  }
}
function gl(e, t) {
  z.__c && z.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(s) {
        s.call(n);
      });
    } catch (s) {
      z.__e(s, n.__v);
    }
  });
}
function gd(e, t, n, s, i, r, o, a) {
  var l, h, c, d = n.props, u = t.props, f = t.type, p = 0;
  if (f === "svg" && (i = !0), r != null) {
    for (; p < r.length; p++)
      if ((l = r[p]) && "setAttribute" in l == !!f && (f ? l.localName === f : l.nodeType === 3)) {
        e = l, r[p] = null;
        break;
      }
  }
  if (e == null) {
    if (f === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, u.is && u), r = null, a = !1;
  }
  if (f === null)
    d === u || a && e.data === u || (e.data = u);
  else {
    if (r = r && ki.call(e.childNodes), h = (d = n.props || Fs).dangerouslySetInnerHTML, c = u.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (pd(e, u, d, i, a), c)
      t.__k = [];
    else if (dl(e, to(p = t.props.children) ? p : [p], t, n, s, i && f !== "foreignObject", r, o, r ? r[0] : n.__k && Un(n, 0), a), r != null)
      for (p = r.length; p--; )
        r[p] != null && cl(r[p]);
    a || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || f === "progress" && !p || f === "option" && p !== d.value) && Vs(e, "value", p, d.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && Vs(e, "checked", p, d.checked, !1));
  }
  return e;
}
function ml(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (s) {
    z.__e(s, n);
  }
}
function yl(e, t, n) {
  var s, i;
  if (z.unmount && z.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || ml(s, null, t)), (s = e.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (r) {
        z.__e(r, t);
      }
    s.base = s.__P = null, e.__c = void 0;
  }
  if (s = e.__k)
    for (i = 0; i < s.length; i++)
      s[i] && yl(s[i], t, n || typeof e.type != "function");
  n || e.__e == null || cl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function md(e, t, n) {
  return this.constructor(e, n);
}
function Vn(e, t, n) {
  var s, i, r;
  z.__ && z.__(e, t), i = (s = typeof n == "function") ? null : n && n.__k || t.__k, r = [], eo(t, e = (!s && n || t).__k = q(rs, null, [e]), i || Fs, Fs, t.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : t.firstChild ? ki.call(t.childNodes) : null, r, !s && n ? n : i ? i.__e : t.firstChild, s), gl(r, e);
}
ki = ll.slice, z = { __e: function(e, t, n, s) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        e = a;
      }
  throw e;
} }, ol = 0, Z = function(e) {
  return e != null && e.constructor === void 0;
}, V.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ae({}, this.state), typeof e == "function" && (e = e(ae({}, n), this.props)), e && ae(n, e), e != null && this.__v && (t && this._sb.push(t), ra(this));
}, V.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ra(this));
}, V.prototype.render = rs, be = [], al = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, nr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Us.__r = 0;
var wl = function(e, t, n, s) {
  var i;
  t[0] = 0;
  for (var r = 1; r < t.length; r++) {
    var o = t[r++], a = t[r] ? (t[0] |= o ? 1 : 2, n[t[r++]]) : t[++r];
    o === 3 ? s[0] = a : o === 4 ? s[1] = Object.assign(s[1] || {}, a) : o === 5 ? (s[1] = s[1] || {})[t[++r]] = a : o === 6 ? s[1][t[++r]] += a + "" : o ? (i = e.apply(a, wl(e, a, n, ["", null])), s.push(i), a[0] ? t[0] |= 2 : (t[r - 2] = 0, t[r] = i)) : s.push(a);
  }
  return s;
}, ca = /* @__PURE__ */ new Map();
function yd(e) {
  var t = ca.get(this);
  return t || (t = /* @__PURE__ */ new Map(), ca.set(this, t)), (t = wl(this, t.get(e) || (t.set(e, t = function(n) {
    for (var s, i, r = 1, o = "", a = "", l = [0], h = function(u) {
      r === 1 && (u || (o = o.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, u, o) : r === 3 && (u || o) ? (l.push(3, u, o), r = 2) : r === 2 && o === "..." && u ? l.push(4, u, 0) : r === 2 && o && !u ? l.push(5, 0, !0, o) : r >= 5 && ((o || !u && r === 5) && (l.push(r, 0, o, i), r = 6), u && (l.push(r, u, 0, i), r = 6)), o = "";
    }, c = 0; c < n.length; c++) {
      c && (r === 1 && h(), h(c));
      for (var d = 0; d < n[c].length; d++)
        s = n[c][d], r === 1 ? s === "<" ? (h(), l = [l], r = 3) : o += s : r === 4 ? o === "--" && s === ">" ? (r = 1, o = "") : o = s + o[0] : a ? s === a ? a = "" : o += s : s === '"' || s === "'" ? a = s : s === ">" ? (h(), r = 1) : r && (s === "=" ? (r = 5, i = o, o = "") : s === "/" && (r < 5 || n[c][d + 1] === ">") ? (h(), r === 3 && (l = l[0]), r = l, (l = l[0]).push(2, 0, r), r = 0) : s === " " || s === "	" || s === `
` || s === "\r" ? (h(), r = 2) : o += s), r === 3 && o === "!--" && (r = 4, l = l[0]);
    }
    return h(), l;
  }(e)), t), arguments, [])).length > 1 ? t : t[0];
}
const $f = yd.bind(q);
function wd(e) {
  const { tagName: t = "div", className: n, style: s, children: i, attrs: r, ...o } = e;
  return q(t, { class: T(n), style: s, ...o, ...r }, i);
}
var vd = 0;
function y(e, t, n, s, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var h = { type: e, props: l, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --vd, __source: i, __self: r };
  if (typeof e == "function" && (o = e.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return z.vnode && z.vnode(h), h;
}
var Kn;
class vl extends V {
  constructor() {
    super(...arguments);
    L(this, Kn, it());
  }
  componentDidMount() {
    this.props.executeScript && m(k(this, Kn).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...r } = n;
    return /* @__PURE__ */ y(wd, { ref: k(this, Kn), dangerouslySetInnerHTML: { __html: i }, ...r });
  }
}
Kn = new WeakMap();
function _d(e) {
  const {
    tag: t,
    className: n,
    style: s,
    renders: i,
    generateArgs: r = [],
    generatorThis: o,
    generators: a,
    onGenerate: l,
    onRenderItem: h,
    ...c
  } = e, d = [n], u = { ...s }, f = [], p = [];
  return i.forEach((g) => {
    const v = [];
    if (typeof g == "string" && a && a[g] && (g = a[g]), typeof g == "function")
      if (l)
        v.push(...l.call(o, g, f, ...r));
      else {
        const w = g.call(o, f, ...r);
        w && (Array.isArray(w) ? v.push(...w) : v.push(w));
      }
    else
      v.push(g);
    v.forEach((w) => {
      w != null && (typeof w == "object" && !Z(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? f.push(
        /* @__PURE__ */ y("div", { className: T(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? p.push(w.__html) : (w.style && Object.assign(u, w.style), w.className && d.push(w.className), w.children && f.push(w.children), w.attrs && Object.assign(c, w.attrs)) : f.push(w));
    });
  }), p.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: T(d),
    style: u,
    ...c
  }, f];
}
function no({
  tag: e = "div",
  ...t
}) {
  const [n, s] = _d(t);
  return q(e, n, ...s);
}
function qn(e) {
  const { icon: t, className: n, ...s } = e;
  if (!t)
    return null;
  if (Z(t))
    return t;
  const i = ["icon", n];
  return typeof t == "string" ? i.push(t.startsWith("icon-") ? t : `icon-${t}`) : typeof t == "object" && (i.push(t.className), Object.assign(s, t)), /* @__PURE__ */ y("i", { className: T(i), ...s });
}
function bd(e) {
  return this.getChildContext = () => e.context, e.children;
}
function xd(e) {
  const t = this, n = e._container;
  t.componentWillUnmount = function() {
    Vn(null, t._temp), t._temp = null, t._container = null;
  }, t._container && t._container !== n && t.componentWillUnmount(), e._vnode ? (t._temp || (t._container = n, t._temp = {
    nodeType: 1,
    parentNode: n,
    childNodes: [],
    appendChild(s) {
      this.childNodes.push(s), t._container.appendChild(s);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    insertBefore(s, i) {
      this.childNodes.push(s), t._container.appendChild(s);
    },
    removeChild(s) {
      this.childNodes.splice(this.childNodes.indexOf(s) >>> 1, 1), t._container.removeChild(s);
    }
  }), Vn(
    q(bd, { context: t.context }, e._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function $d(e, t) {
  const n = q(xd, { _vnode: e, _container: t });
  return n.containerInfo = t, n;
}
var _l = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ie = (e, t, n) => (_l(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ps = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Oe = (e, t, n, s) => (_l(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), me, wn, ks, Cs;
const bl = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    ps(this, me, void 0), ps(this, wn, void 0), ps(this, ks, void 0), ps(this, Cs, !1);
    const { KEY: n, DATA_KEY: s, DEFAULT: i, MULTI_INSTANCE: r } = this.constructor, o = m(e);
    if (o.data(n) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const a = m.guid++;
    if (Oe(this, ks, a), Oe(this, wn, o[0]), o.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), Oe(this, me, { ...i, ...o.dataset() }), this.setOptions(t), this._key = this.options.key ?? `__${a}`, o.data(n, this).attr(s, `${a}`), r) {
      const l = `${n}:ALL`;
      let h = o.data(l);
      h || (h = /* @__PURE__ */ new Map(), o.data(l, h)), h.set(this._key, this);
    }
    this.init(), requestAnimationFrame(() => {
      Oe(this, Cs, !0), this.emit("inited", this.options), this.afterInit();
    });
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
    return `.${this.NAME}.zui`;
  }
  static get DATA_KEY() {
    return `data-zui-${this.NAME}`;
  }
  get inited() {
    return Ie(this, Cs);
  }
  /**
   * Get the component element.
   */
  get element() {
    return Ie(this, wn);
  }
  get key() {
    return this._key;
  }
  /**
   * Get the component options.
   */
  get options() {
    return Ie(this, me);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return Ie(this, ks);
  }
  /**
   * Get the component element as a jQuery like object.
   */
  get $element() {
    return m(this.element);
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
    const { KEY: e, DATA_KEY: t, MULTI_INSTANCE: n } = this.constructor, { $element: s } = this;
    if (this.emit("destroyed"), s.off(this.namespace).removeData(e).attr(t, null), n) {
      const i = this.$element.data(`${e}:ALL`);
      if (i)
        if (i.delete(this._key), i.size === 0)
          this.$element.removeData(`${e}:ALL`);
        else {
          const r = i.values().next().value;
          s.data(e, r).attr(t, r.gid);
        }
    }
    Oe(this, me, void 0), Oe(this, wn, void 0);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(e) {
    return e && m.extend(Ie(this, me), e), Ie(this, me);
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(e, ...t) {
    const n = m.Event(this._wrapEvent(e));
    return this.$emitter.trigger(n, [this, ...t]), n;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(e, t) {
    this.$element.on(this._wrapEvent(e), t);
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  one(e, t) {
    this.$element.one(this._wrapEvent(e), t);
  }
  /**
   * Stop listening to a component event.
   * @param event     The event name.
   * @param callback  The event callback.
   */
  off(e, t) {
    this.$element.off(this._wrapEvent(e), t);
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
    return qt(this.options.i18n, e, t, n, this.options.lang, this.constructor.NAME) ?? qt(this.options.i18n, e, t, n, this.options.lang) ?? `{i18n:${e}}`;
  }
  /**
   * Get event namespace.
   * @returns Event namespace.
   */
  get namespace() {
    return `.${this._key}${this.constructor.NAMESPACE}`;
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
    const n = m(e);
    if (this.MULTI_INSTANCE && t !== void 0) {
      const s = n.data(`${this.KEY}:ALL`);
      return s ? s.get(t) : void 0;
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
    const { MULTI_INSTANCE: t, DATA_KEY: n } = this, s = [];
    return m(e || document).find(`[${n}]`).each((i, r) => {
      if (t) {
        const a = m(r).data(`${this.KEY}:ALL`);
        if (a) {
          s.push(...a.values());
          return;
        }
      }
      const o = m(r).data(this.KEY);
      o && s.push(o);
    }), s;
  }
  /**
   * Query the component instance.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static query(e, t) {
    return e === void 0 ? this.getAll().sort((n, s) => n.gid - s.gid)[0] : this.get(m(e).closest(`[${this.DATA_KEY}]`), t);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(e) {
    m.fn.extend({
      [e || this.NAME.replace(/(^[A-Z]+)/, (t) => t.toLowerCase())](t, ...n) {
        return this.each((s, i) => {
          var o;
          const r = this.ensure(i, typeof t == "object" ? t : void 0);
          typeof t == "string" && ((o = r[t]) == null || o.call(r, ...n));
        });
      }
    });
  }
};
let lt = bl;
me = /* @__PURE__ */ new WeakMap();
wn = /* @__PURE__ */ new WeakMap();
ks = /* @__PURE__ */ new WeakMap();
Cs = /* @__PURE__ */ new WeakMap();
lt.DEFAULT = {};
lt.NAME = bl.name;
lt.MULTI_INSTANCE = !1;
class J extends lt {
  constructor() {
    super(...arguments), this.ref = it();
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
    var t, n;
    (n = (t = this.$) == null ? void 0 : t.componentWillUnmount) == null || n.call(t), this.element && (this.element.innerHTML = ""), super.destroy();
  }
  /**
   * Render component.
   *
   * @param options new options.
   */
  render(t) {
    Vn(
      q(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(t)
      }),
      this.element
    );
  }
}
function kd({
  component: e = "div",
  className: t,
  children: n,
  style: s,
  attrs: i
}) {
  return q(e, {
    className: T(t),
    style: s,
    ...i
  }, n);
}
function xl({
  type: e,
  component: t = "a",
  className: n,
  children: s,
  attrs: i,
  url: r,
  disabled: o,
  active: a,
  icon: l,
  text: h,
  target: c,
  trailingIcon: d,
  hint: u,
  checked: f,
  onClick: p,
  ...g
}) {
  const v = [
    typeof f == "boolean" ? /* @__PURE__ */ y("div", { class: `checkbox-primary${f ? " checked" : ""}`, children: /* @__PURE__ */ y("label", {}) }) : null,
    /* @__PURE__ */ y(qn, { icon: l }),
    /* @__PURE__ */ y("span", { className: "text", children: h }),
    typeof s == "function" ? s() : s,
    /* @__PURE__ */ y(qn, { icon: d })
  ];
  return q(t, {
    className: T(n, { disabled: o, active: a }),
    title: u,
    [t === "a" ? "href" : "data-url"]: r,
    [t === "a" ? "target" : "data-target"]: c,
    onClick: p,
    ...g,
    ...i
  }, ...v);
}
function Cd({
  component: e = "div",
  className: t,
  text: n,
  attrs: s,
  children: i,
  style: r,
  onClick: o
}) {
  return q(e, {
    className: T(t),
    style: r,
    onClick: o,
    ...s
  }, n, typeof i == "function" ? i() : i);
}
function Sd({
  component: e = "div",
  className: t,
  style: n,
  space: s,
  flex: i,
  attrs: r,
  onClick: o,
  children: a
}) {
  return q(e, {
    className: T(t),
    style: { width: s, height: s, flex: i, ...n },
    onClick: o,
    ...r
  }, a);
}
function Ed({ type: e, ...t }) {
  return /* @__PURE__ */ y(no, { ...t });
}
function $l({
  component: e = "div",
  className: t,
  children: n,
  style: s,
  attrs: i
}) {
  return q(e, {
    className: T(t),
    style: s,
    ...i
  }, n);
}
const sr = class extends V {
  constructor() {
    super(...arguments), this.ref = it();
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
  handleItemClick(e, t, n, s) {
    n && n.call(s.target, s, e, t);
    const { onClickItem: i } = this.props;
    i && i({ menu: this, item: e, index: t, event: s });
  }
  beforeRender() {
    var n;
    const e = { ...this.props }, t = (n = e.beforeRender) == null ? void 0 : n.call(e, { menu: this, options: e });
    return t && Object.assign(e, t), e;
  }
  getItemRenderProps(e, t, n) {
    const { commonItemProps: s, onClickItem: i } = e, r = { ...t };
    return s && Object.assign(r, s[t.type || "item"]), (i || t.onClick) && (r.onClick = this.handleItemClick.bind(this, r, n, t.onClick)), r.className = T(r.className), r;
  }
  renderItem(e, t, n) {
    if (!t)
      return null;
    const s = this.getItemRenderProps(e, t, n), { itemRender: i } = e;
    if (i) {
      if (typeof i == "object") {
        const p = i[t.type || "item"];
        if (p)
          return /* @__PURE__ */ y(p, { ...s });
      } else if (typeof i == "function") {
        const p = i.call(this, s, q);
        if (Z(p))
          return p;
        typeof p == "object" && Object.assign(s, p);
      }
    }
    const { type: r = "item", component: o, key: a = n, rootAttrs: l, rootClass: h, rootStyle: c, rootChildren: d, ...u } = s;
    if (r === "html")
      return /* @__PURE__ */ y(
        "li",
        {
          className: T("action-menu-item", `${this.name}-html`, h, u.className),
          ...l,
          style: c || u.style,
          dangerouslySetInnerHTML: { __html: u.html }
        },
        a
      );
    const f = !o || typeof o == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || sr.ItemComponents[r] : o;
    return Object.assign(u, {
      type: r,
      component: typeof o == "string" ? o : void 0
    }), e.checkbox && r === "item" && u.checked === void 0 && (u.checked = !!u.active), this.renderTypedItem(f, {
      className: T(h),
      children: d,
      style: c,
      key: a,
      ...l
    }, {
      ...u,
      type: r,
      component: typeof o == "string" ? o : void 0
    });
  }
  renderTypedItem(e, t, n) {
    const { children: s, className: i, key: r, ...o } = t;
    return /* @__PURE__ */ y(
      "li",
      {
        className: T(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, i),
        ...o,
        children: [
          /* @__PURE__ */ y(e, { ...n }),
          typeof s == "function" ? s() : s
        ]
      },
      r
    );
  }
  render() {
    const e = this.beforeRender(), {
      name: t,
      style: n,
      commonItemProps: s,
      className: i,
      items: r,
      children: o,
      itemRender: a,
      onClickItem: l,
      beforeRender: h,
      afterRender: c,
      beforeDestroy: d,
      ...u
    } = e, f = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ y(f, { class: T(this.name, i), style: n, ...u, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, e)),
      o
    ] });
  }
};
let De = sr;
De.ItemComponents = {
  divider: kd,
  item: xl,
  heading: Cd,
  space: Sd,
  custom: Ed,
  basic: $l
};
De.ROOT_TAG = "menu";
De.NAME = "action-menu";
class kl extends J {
}
kl.NAME = "ActionMenu";
kl.Component = De;
function Md({
  items: e,
  show: t,
  level: n,
  ...s
}) {
  return /* @__PURE__ */ y(xl, { ...s });
}
var Cl = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ht = (e, t, n) => (Cl(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Vi = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Td = (e, t, n, s) => (Cl(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ss, Tt, vn;
let Ci = class extends De {
  constructor(t) {
    super(t), Vi(this, Ss, /* @__PURE__ */ new Set()), Vi(this, Tt, void 0), Vi(this, vn, (n, s, i) => {
      m(i.target).closest(".not-nested-toggle").length || (this.toggleNestedMenu(n, s), i.preventDefault());
    }), Td(this, Tt, t.nestedShow === void 0), ht(this, Tt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const t = super.beforeRender(), { nestedShow: n, nestedTrigger: s, defaultNestedShow: i, controlledMenu: r, indent: o, ...a } = t;
    return typeof a.items == "function" && (a.items = a.items(this)), !r && o && (a.style = Object.assign({
      [`--${this.name}-indent`]: `${o}px`
    }, a.style)), a;
  }
  getNestedMenuProps(t) {
    const { name: n, controlledMenu: s, nestedShow: i, beforeDestroy: r, beforeRender: o, itemRender: a, onClickItem: l, afterRender: h, commonItemProps: c, level: d } = this.props;
    return {
      items: t,
      name: n,
      nestedShow: ht(this, Tt) ? this.state.nestedShow : i,
      nestedTrigger: this.nestedTrigger,
      controlledMenu: s || this,
      commonItemProps: c,
      onClickItem: l,
      afterRender: h,
      beforeRender: o,
      beforeDestroy: r,
      itemRender: a,
      level: (d || 0) + 1
    };
  }
  renderNestedMenu(t) {
    let { items: n } = t;
    if (!n || (typeof n == "function" && (n = n(t, this)), !n.length))
      return;
    const s = this.constructor, i = this.getNestedMenuProps(n);
    return /* @__PURE__ */ y(s, { ...i, "data-level": i.level });
  }
  isNestedItem(t) {
    return (!t.type || t.type === "item") && !!t.items;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renderToggleIcon(t, n) {
  }
  getItemRenderProps(t, n, s) {
    const i = super.getItemRenderProps(t, n, s);
    if (i.level = t.level || 0, !this.isNestedItem(i))
      return i;
    const r = i.key ?? i.id ?? `${t.level || 0}:${s}`;
    ht(this, Ss).add(r);
    const o = this.isNestedMenuShow(r);
    if (o && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ]), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: ht(this, vn).bind(this, r, !0),
        onMouseLeave: ht(this, vn).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (h) => {
        ht(this, vn).call(this, r, void 0, h), l == null || l(h);
      };
    }
    const a = this.renderToggleIcon(o, i);
    return a && (i.children = [i.children, a]), i.show = o, i.rootClass = [i.rootClass, "has-nested-menu", o ? "show" : ""], i;
  }
  isNestedMenuShow(t) {
    const n = ht(this, Tt) ? this.state.nestedShow : this.props.nestedShow;
    return n && typeof n == "object" ? n[t] : !!n;
  }
  toggleNestedMenu(t, n) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(t, n);
    if (!ht(this, Tt))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [...ht(this, Ss).values()].reduce((r, o) => (r[o] = !0, r), {}) : i = {}), n === void 0)
      n = !i[t];
    else if (!!i[t] == !!n)
      return !1;
    return n ? i[t] = n : delete i[t], this.setState({ nestedShow: { ...i } }), !0;
  }
  showNestedMenu(t) {
    return this.toggleNestedMenu(t, !0);
  }
  hideNestedMenu(t) {
    return this.toggleNestedMenu(t, !1);
  }
  showAllNestedMenu() {
    ht(this, Tt) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    ht(this, Tt) && this.setState({ nestedShow: !1 });
  }
};
Ss = /* @__PURE__ */ new WeakMap();
Tt = /* @__PURE__ */ new WeakMap();
vn = /* @__PURE__ */ new WeakMap();
Ci.ItemComponents = {
  item: Md
};
class Sl extends J {
}
Sl.NAME = "ActionMenuNested";
Sl.Component = Ci;
let Si = class extends Ci {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((s) => s.icon)), t.className = T(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((s) => this.isNestedItem(s)),
      "menu-popup": t.popup
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ y("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
};
Si.NAME = "menu";
class El extends J {
}
El.NAME = "Menu";
El.Component = Si;
class Gt extends V {
  render() {
    const {
      component: t,
      type: n,
      btnType: s,
      size: i,
      className: r,
      children: o,
      url: a,
      target: l,
      disabled: h,
      active: c,
      loading: d,
      loadingIcon: u,
      loadingText: f,
      icon: p,
      text: g,
      trailingIcon: v,
      caret: w,
      square: _,
      hint: $,
      ...S
    } = this.props, C = t || (a ? "a" : "button"), M = g == null || typeof g == "string" && !g.length || d && !f, N = w && M && !p && !v && !o && !d;
    return q(
      C,
      {
        className: T("btn", n, r, {
          "btn-caret": N,
          disabled: h || d,
          active: c,
          loading: d,
          square: _ === void 0 ? !N && !o && M : _
        }, i ? `size-${i}` : ""),
        title: $,
        [C === "a" ? "href" : "data-url"]: a,
        [C === "a" ? "target" : "data-target"]: l,
        type: C === "button" ? s : void 0,
        ...S
      },
      /* @__PURE__ */ y(qn, { icon: d ? `icon ${u || "icon-spinner-snake"} spin` : p }),
      M ? null : /* @__PURE__ */ y("span", { className: "text", children: d ? f : g }),
      d ? null : o,
      d ? null : typeof v == "string" ? /* @__PURE__ */ y("i", { class: `icon ${v}` }) : v,
      d ? null : w ? /* @__PURE__ */ y("span", { className: typeof w == "string" ? `caret-${w}` : "caret" }) : null
    );
  }
}
function Rd({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ y(Gt, { type: n, ...s });
}
function os(e) {
  return e.split("-")[1];
}
function so(e) {
  return e === "y" ? "height" : "width";
}
function Ce(e) {
  return e.split("-")[0];
}
function as(e) {
  return ["top", "bottom"].includes(Ce(e)) ? "x" : "y";
}
function ha(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = as(t), l = so(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let d;
  switch (Ce(t)) {
    case "top":
      d = { x: r, y: s.y - i.height };
      break;
    case "bottom":
      d = { x: r, y: s.y + s.height };
      break;
    case "right":
      d = { x: s.x + s.width, y: o };
      break;
    case "left":
      d = { x: s.x - i.width, y: o };
      break;
    default:
      d = { x: s.x, y: s.y };
  }
  switch (os(t)) {
    case "start":
      d[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      d[a] += h * (n && c ? -1 : 1);
  }
  return d;
}
const Nd = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: d } = ha(h, s, l), u = s, f = {}, p = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: v, fn: w } = a[g], { x: _, y: $, data: S, reset: C } = await w({ x: c, y: d, initialPlacement: s, placement: u, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, d = $ ?? d, f = { ...f, [v]: { ...f[v], ...S } }, C && p <= 50 && (p++, typeof C == "object" && (C.placement && (u = C.placement), C.rects && (h = C.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : C.rects), { x: c, y: d } = ha(h, u, l)), g = -1);
  }
  return { x: c, y: d, placement: u, strategy: i, middlewareData: f };
};
function ls(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ml(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function qs(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Tl(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: f = 0 } = ls(t, e), p = Ml(f), g = a[u ? d === "floating" ? "reference" : "floating" : d], v = qs(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(g))) == null || n ? g : g.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = d === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, S = qs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - S.top + p.top) / $.y, bottom: (S.bottom - v.bottom + p.bottom) / $.y, left: (v.left - S.left + p.left) / $.x, right: (S.right - v.right + p.right) / $.x };
}
const ir = Math.min, Ad = Math.max;
function rr(e, t, n) {
  return Ad(e, ir(t, n));
}
const or = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: s, placement: i, rects: r, platform: o, elements: a } = t, { element: l, padding: h = 0 } = ls(e, t) || {};
  if (l == null)
    return {};
  const c = Ml(h), d = { x: n, y: s }, u = as(i), f = so(u), p = await o.getDimensions(l), g = u === "y", v = g ? "top" : "left", w = g ? "bottom" : "right", _ = g ? "clientHeight" : "clientWidth", $ = r.reference[f] + r.reference[u] - d[u] - r.floating[f], S = d[u] - r.reference[u], C = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
  let M = C ? C[_] : 0;
  M && await (o.isElement == null ? void 0 : o.isElement(C)) || (M = a.floating[_] || r.floating[f]);
  const N = $ / 2 - S / 2, A = M / 2 - p[f] / 2 - 1, O = ir(c[v], A), b = ir(c[w], A), R = O, D = M - p[f] - b, P = M / 2 - p[f] / 2 + N, I = rr(R, P, D), W = os(i) != null && P != I && r.reference[f] / 2 - (P < R ? O : b) - p[f] / 2 < 0 ? P < R ? R - P : D - P : 0;
  return { [u]: d[u] - W, data: { [u]: I, centerOffset: P - I + W } };
} }), Ld = ["top", "right", "bottom", "left"];
Ld.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Pd = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Gs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Pd[t]);
}
function Wd(e, t, n) {
  n === void 0 && (n = !1);
  const s = os(e), i = as(e), r = so(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Gs(o)), { main: o, cross: Gs(o) };
}
const Dd = { start: "end", end: "start" };
function qi(e) {
  return e.replace(/start|end/g, (t) => Dd[t]);
}
const Ei = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...g } = ls(e, t), v = Ce(s), w = Ce(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = d || (w || !p ? [Gs(o)] : function(R) {
      const D = Gs(R);
      return [qi(R), D, qi(D)];
    }(o));
    d || f === "none" || $.push(...function(R, D, P, I) {
      const W = os(R);
      let F = function(ct, Et, us) {
        const un = ["left", "right"], fs = ["right", "left"], Hi = ["top", "bottom"], yh = ["bottom", "top"];
        switch (ct) {
          case "top":
          case "bottom":
            return us ? Et ? fs : un : Et ? un : fs;
          case "left":
          case "right":
            return Et ? Hi : yh;
          default:
            return [];
        }
      }(Ce(R), P === "start", I);
      return W && (F = F.map((ct) => ct + "-" + W), D && (F = F.concat(F.map(qi)))), F;
    }(o, p, f, _));
    const S = [o, ...$], C = await Tl(t, g), M = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && M.push(C[v]), c) {
      const { main: R, cross: D } = Wd(s, r, _);
      M.push(C[R], C[D]);
    }
    if (N = [...N, { placement: s, overflows: M }], !M.every((R) => R <= 0)) {
      var A, O;
      const R = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, D = S[R];
      if (D)
        return { data: { index: R, overflows: N }, reset: { placement: D } };
      let P = (O = N.filter((I) => I.overflows[0] <= 0).sort((I, W) => I.overflows[1] - W.overflows[1])[0]) == null ? void 0 : O.placement;
      if (!P)
        switch (u) {
          case "bestFit": {
            var b;
            const I = (b = N.map((W) => [W.placement, W.overflows.filter((F) => F > 0).reduce((F, ct) => F + ct, 0)]).sort((W, F) => W[1] - F[1])[0]) == null ? void 0 : b[0];
            I && (P = I);
            break;
          }
          case "initialPlacement":
            P = o;
        }
      if (s !== P)
        return { reset: { placement: P } };
    }
    return {};
  } };
}, io = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), d = Ce(a), u = os(a), f = as(a) === "x", p = ["left", "top"].includes(d) ? -1 : 1, g = c && f ? -1 : 1, v = ls(o, r);
      let { mainAxis: w, crossAxis: _, alignmentAxis: $ } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return u && typeof $ == "number" && (_ = u === "end" ? -1 * $ : $), f ? { x: _ * g, y: w * p } : { x: w * p, y: _ * g };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function Id(e) {
  return e === "x" ? "y" : "x";
}
const ar = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: s, placement: i } = t, { mainAxis: r = !0, crossAxis: o = !1, limiter: a = { fn: (v) => {
      let { x: w, y: _ } = v;
      return { x: w, y: _ };
    } }, ...l } = ls(e, t), h = { x: n, y: s }, c = await Tl(t, l), d = as(Ce(i)), u = Id(d);
    let f = h[d], p = h[u];
    if (r) {
      const v = d === "y" ? "bottom" : "right";
      f = rr(f + c[d === "y" ? "top" : "left"], f, f - c[v]);
    }
    if (o) {
      const v = u === "y" ? "bottom" : "right";
      p = rr(p + c[u === "y" ? "top" : "left"], p, p - c[v]);
    }
    const g = a.fn({ ...t, [d]: f, [u]: p });
    return { ...g, data: { x: g.x - n, y: g.y - s } };
  } };
};
function at(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function pt(e) {
  return at(e).getComputedStyle(e);
}
function Rl(e) {
  return e instanceof at(e).Node;
}
function ce(e) {
  return Rl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function mt(e) {
  return e instanceof at(e).HTMLElement;
}
function Ht(e) {
  return e instanceof at(e).Element;
}
function da(e) {
  return typeof ShadowRoot < "u" && (e instanceof at(e).ShadowRoot || e instanceof ShadowRoot);
}
function Gn(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = pt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function Od(e) {
  return ["table", "td", "th"].includes(ce(e));
}
function lr(e) {
  const t = ro(), n = pt(e);
  return n.transform !== "none" || n.perspective !== "none" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (n.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (n.contain || "").includes(s));
}
function ro() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Mi(e) {
  return ["html", "body", "#document"].includes(ce(e));
}
const ua = Math.min, Ln = Math.max, js = Math.round, gs = Math.floor, Re = (e) => ({ x: e, y: e });
function Nl(e) {
  const t = pt(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = mt(e), r = i ? e.offsetWidth : n, o = i ? e.offsetHeight : s, a = js(n) !== r || js(s) !== o;
  return a && (n = r, s = o), { width: n, height: s, $: a };
}
function oo(e) {
  return Ht(e) ? e : e.contextElement;
}
function Xe(e) {
  const t = oo(e);
  if (!mt(t))
    return Re(1);
  const n = t.getBoundingClientRect(), { width: s, height: i, $: r } = Nl(t);
  let o = (r ? js(n.width) : n.width) / s, a = (r ? js(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
const fa = Re(0);
function Al(e, t, n) {
  var s, i;
  if (t === void 0 && (t = !0), !ro())
    return fa;
  const r = e ? at(e) : window;
  return !n || t && n !== r ? fa : { x: ((s = r.visualViewport) == null ? void 0 : s.offsetLeft) || 0, y: ((i = r.visualViewport) == null ? void 0 : i.offsetTop) || 0 };
}
function Ne(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), r = oo(e);
  let o = Re(1);
  t && (s ? Ht(s) && (o = Xe(s)) : o = Xe(e));
  const a = Al(r, n, s);
  let l = (i.left + a.x) / o.x, h = (i.top + a.y) / o.y, c = i.width / o.x, d = i.height / o.y;
  if (r) {
    const u = at(r), f = s && Ht(s) ? at(s) : s;
    let p = u.frameElement;
    for (; p && s && f !== u; ) {
      const g = Xe(p), v = p.getBoundingClientRect(), w = getComputedStyle(p), _ = v.left + (p.clientLeft + parseFloat(w.paddingLeft)) * g.x, $ = v.top + (p.clientTop + parseFloat(w.paddingTop)) * g.y;
      l *= g.x, h *= g.y, c *= g.x, d *= g.y, l += _, h += $, p = at(p).frameElement;
    }
  }
  return qs({ width: c, height: d, x: l, y: h });
}
function Bt(e) {
  return ((Rl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ti(e) {
  return Ht(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Ll(e) {
  return Ne(Bt(e)).left + Ti(e).scrollLeft;
}
function hn(e) {
  if (ce(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || da(e) && e.host || Bt(e);
  return da(t) ? t.host : t;
}
function Pl(e) {
  const t = hn(e);
  return Mi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : mt(t) && Gn(t) ? t : Pl(t);
}
function Ys(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Pl(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = at(s);
  return i ? t.concat(r, r.visualViewport || [], Gn(s) ? s : []) : t.concat(s, Ys(s));
}
function pa(e, t, n) {
  let s;
  if (t === "viewport")
    s = function(i, r) {
      const o = at(i), a = Bt(i), l = o.visualViewport;
      let h = a.clientWidth, c = a.clientHeight, d = 0, u = 0;
      if (l) {
        h = l.width, c = l.height;
        const f = ro();
        (!f || f && r === "fixed") && (d = l.offsetLeft, u = l.offsetTop);
      }
      return { width: h, height: c, x: d, y: u };
    }(e, n);
  else if (t === "document")
    s = function(i) {
      const r = Bt(i), o = Ti(i), a = i.ownerDocument.body, l = Ln(r.scrollWidth, r.clientWidth, a.scrollWidth, a.clientWidth), h = Ln(r.scrollHeight, r.clientHeight, a.scrollHeight, a.clientHeight);
      let c = -o.scrollLeft + Ll(i);
      const d = -o.scrollTop;
      return pt(a).direction === "rtl" && (c += Ln(r.clientWidth, a.clientWidth) - l), { width: l, height: h, x: c, y: d };
    }(Bt(e));
  else if (Ht(t))
    s = function(i, r) {
      const o = Ne(i, !0, r === "fixed"), a = o.top + i.clientTop, l = o.left + i.clientLeft, h = mt(i) ? Xe(i) : Re(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(t, n);
  else {
    const i = Al(e);
    s = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return qs(s);
}
function Wl(e, t) {
  const n = hn(e);
  return !(n === t || !Ht(n) || Mi(n)) && (pt(n).position === "fixed" || Wl(n, t));
}
function ga(e, t) {
  return mt(e) && pt(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function ma(e, t) {
  const n = at(e);
  if (!mt(e))
    return n;
  let s = ga(e, t);
  for (; s && Od(s) && pt(s).position === "static"; )
    s = ga(s, t);
  return s && (ce(s) === "html" || ce(s) === "body" && pt(s).position === "static" && !lr(s)) ? n : s || function(i) {
    let r = hn(i);
    for (; mt(r) && !Mi(r); ) {
      if (lr(r))
        return r;
      r = hn(r);
    }
    return null;
  }(e) || n;
}
function Hd(e, t, n) {
  const s = mt(t), i = Bt(t), r = n === "fixed", o = Ne(e, !0, r, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Re(0);
  if (s || !s && !r)
    if ((ce(t) !== "body" || Gn(i)) && (a = Ti(t)), mt(t)) {
      const h = Ne(t, !0, r, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = Ll(i));
  return { x: o.left + a.scrollLeft - l.x, y: o.top + a.scrollTop - l.y, width: o.width, height: o.height };
}
const Bd = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const d = c.get(h);
    if (d)
      return d;
    let u = Ys(h).filter((v) => Ht(v) && ce(v) !== "body"), f = null;
    const p = pt(h).position === "fixed";
    let g = p ? hn(h) : h;
    for (; Ht(g) && !Mi(g); ) {
      const v = pt(g), w = lr(g);
      w || v.position !== "fixed" || (f = null), (p ? !w && !f : !w && v.position === "static" && f && ["absolute", "fixed"].includes(f.position) || Gn(g) && !w && Wl(h, g)) ? u = u.filter((_) => _ !== g) : f = v, g = hn(g);
    }
    return c.set(h, u), u;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const d = pa(t, c, i);
    return h.top = Ln(d.top, h.top), h.right = ua(d.right, h.right), h.bottom = ua(d.bottom, h.bottom), h.left = Ln(d.left, h.left), h;
  }, pa(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = mt(n), r = Bt(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = Re(1);
  const l = Re(0);
  if ((i || !i && s !== "fixed") && ((ce(n) !== "body" || Gn(r)) && (o = Ti(n)), mt(n))) {
    const h = Ne(n);
    a = Xe(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: Ht, getDimensions: function(e) {
  return Nl(e);
}, getOffsetParent: ma, getDocumentElement: Bt, getScale: Xe, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || ma, r = this.getDimensions;
  return { reference: Hd(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => pt(e).direction === "rtl" };
function ao(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = oo(e), c = i || r ? [...h ? Ys(h) : [], ...Ys(t)] : [];
  c.forEach((g) => {
    i && g.addEventListener("scroll", n, { passive: !0 }), r && g.addEventListener("resize", n);
  });
  const d = h && a ? function(g, v) {
    let w, _ = null;
    const $ = Bt(g);
    function S() {
      clearTimeout(w), _ && _.disconnect(), _ = null;
    }
    return function C(M, N) {
      M === void 0 && (M = !1), N === void 0 && (N = 1), S();
      const { left: A, top: O, width: b, height: R } = g.getBoundingClientRect();
      if (M || v(), !b || !R)
        return;
      const D = gs(O), P = gs($.clientWidth - (A + b)), I = gs($.clientHeight - (O + R)), W = gs(A);
      let F = !0;
      _ = new IntersectionObserver((ct) => {
        const Et = ct[0].intersectionRatio;
        if (Et !== N) {
          if (!F)
            return C();
          Et === 0 ? w = setTimeout(() => {
            C(!1, 1e-7);
          }, 100) : C(!1, Et);
        }
        F = !1;
      }, { rootMargin: -D + "px " + -P + "px " + -I + "px " + -W + "px", threshold: N }), _.observe(g);
    }(!0), S;
  }(h, n) : null;
  let u, f = null;
  o && (f = new ResizeObserver(n), h && !l && f.observe(h), f.observe(t));
  let p = l ? Ne(e) : null;
  return l && function g() {
    const v = Ne(e);
    !p || v.x === p.x && v.y === p.y && v.width === p.width && v.height === p.height || n(), p = v, u = requestAnimationFrame(g);
  }(), n(), () => {
    c.forEach((g) => {
      i && g.removeEventListener("scroll", n), r && g.removeEventListener("resize", n);
    }), d && d(), f && f.disconnect(), f = null, l && cancelAnimationFrame(u);
  };
}
const Ri = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Bd, ...n }, r = { ...i.platform, _c: s };
  return Nd(e, t, { ...i, platform: r });
};
let zd = class extends Si {
  get nestedTrigger() {
    return this.props.nestedTrigger || "hover";
  }
  get name() {
    return "menu";
  }
  get menuName() {
    return "menu-context";
  }
  getPopperOptions() {
    return {
      middleware: [Ei()],
      placement: "right-start"
    };
  }
  getPopperElement() {
    var t;
    return (t = this.ref.current) == null ? void 0 : t.parentElement;
  }
  createPopper() {
    const t = this.getPopperOptions();
    this.ref.current && Ri(this.getPopperElement(), this.ref.current, t).then(({ x: n, y: s }) => {
      Object.assign(this.ref.current.style, {
        left: `${n}px`,
        top: `${s}px`,
        position: "absolute"
      });
    });
  }
  afterRender(t) {
    super.afterRender(t), this.props.controlledMenu && this.createPopper();
  }
  beforeRender() {
    const t = super.beforeRender();
    return t.className = T(t.className, "menu-popup"), t;
  }
  renderToggleIcon() {
    return /* @__PURE__ */ y("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var lo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Mt = (e, t, n) => (lo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), He = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ms = (e, t, n, s) => (lo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ya = (e, t, n) => (lo(e, t, "access private method"), n), Zt, _n, Es, Ms, cr, Dl, hr, Il;
const Gi = "show", Fd = '[data-toggle="contextmenu"]';
class tt extends lt {
  constructor() {
    super(...arguments), He(this, cr), He(this, hr), He(this, Zt, void 0), He(this, _n, void 0), He(this, Es, void 0), He(this, Ms, void 0);
  }
  get isShown() {
    return Mt(this, Zt) && m(Mt(this, Zt)).hasClass(Gi);
  }
  get menu() {
    return Mt(this, Zt) || this.ensureMenu();
  }
  get trigger() {
    return Mt(this, Es) || this.element;
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
    return this.isShown || (ms(this, Es, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (m(this.menu).addClass(Gi), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var t;
    return !this.isShown || ((t = Mt(this, Ms)) == null || t.call(this), this.emit("hide").defaultPrevented) ? !1 : (m(Mt(this, Zt)).removeClass(Gi), this.emit("hidden"), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), this.hide(), (t = Mt(this, Zt)) == null || t.remove();
  }
  ensureMenu() {
    const { $element: t } = this, n = this.constructor.MENU_CLASS;
    let s;
    if (this.isDynamic)
      s = m(`<div class="${n}" />`).appendTo("body");
    else if (t.length) {
      const i = t.attr("href") || t.dataset("target") || "";
      if (i[0] === "#" && (s = m(document).find(i)), !(s != null && s.length)) {
        const r = t.next();
        r.hasClass(n) ? s = r : s = t.parent().find(`.${n}`);
      }
      s && s.addClass("menu-popup");
    }
    if (!(s != null && s.length))
      throw new Error("[ZUI] ContextMenu: Cannot find menu element.");
    return s.css({
      width: "max-content",
      position: this.options.strategy,
      top: 0,
      left: 0
    }), ms(this, Zt, s[0]), s[0];
  }
  getPopperOptions() {
    var i;
    const { placement: t, strategy: n } = this.options, s = {
      middleware: [],
      placement: t,
      strategy: n
    };
    return this.options.flip && ((i = s.middleware) == null || i.push(Ei())), s;
  }
  createPopper() {
    const t = this.getPopperOptions(), n = this.getPopperElement(), s = this.menu;
    ms(this, Ms, ao(n, s, () => {
      Ri(n, s, t).then(({ x: i, y: r, middlewareData: o, placement: a }) => {
        m(s).css({ left: `${i}px`, top: `${r}px` });
        const l = a.split("-")[0], h = ya(this, cr, Dl).call(this, l);
        if (o.arrow && this.arrowEl) {
          const { x: c, y: d } = o.arrow;
          m(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: d != null ? `${d}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...ya(this, hr, Il).call(this, l)
          });
        }
      });
    }));
  }
  getMenuOptions() {
    const { menu: t, items: n } = this.options;
    let s = n || (t == null ? void 0 : t.items);
    if (s)
      return typeof s == "function" && (s = s(this)), {
        nestedTrigger: "hover",
        ...t,
        items: s
      };
  }
  renderMenu() {
    const t = this.getMenuOptions();
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (Vn(q(zd, t), this.menu), !0);
  }
  getPopperElement() {
    return Mt(this, _n) || ms(this, _n, {
      getBoundingClientRect: () => {
        const { trigger: t } = this;
        if (t instanceof MouseEvent) {
          const { clientX: n, clientY: s } = t;
          return {
            width: 0,
            height: 0,
            top: s,
            right: n,
            bottom: s,
            left: n
          };
        }
        return t instanceof HTMLElement ? t.getBoundingClientRect() : t;
      },
      contextElement: this.element
    }), Mt(this, _n);
  }
  static clear(t) {
    var a, l;
    t instanceof Event && (t = { event: t });
    const { event: n, exclude: s, ignoreSelector: i = ".not-hide-menu" } = t || {};
    if (n && i && ((l = (a = n.target).closest) != null && l.call(a, i)) || n && n.button === 2)
      return;
    const r = this.getAll(), o = new Set(s || []);
    for (const h of r)
      o.has(h.element) || h.hide();
  }
  static show(t) {
    const { event: n, ...s } = t, i = this.ensure(document.body);
    return i.setOptions(s), i.show(n), n instanceof Event && n.stopPropagation(), i;
  }
  static hide(t) {
    const n = this.query(t);
    return n == null || n.hide(), n;
  }
}
Zt = /* @__PURE__ */ new WeakMap();
_n = /* @__PURE__ */ new WeakMap();
Es = /* @__PURE__ */ new WeakMap();
Ms = /* @__PURE__ */ new WeakMap();
cr = /* @__PURE__ */ new WeakSet();
Dl = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
hr = /* @__PURE__ */ new WeakSet();
Il = function(e) {
  const t = {
    bottom: "Right",
    top: "Left",
    left: "Bottom",
    right: "Top"
  };
  return {
    [`border${e[0].toUpperCase()}${e.substring(1)}Style`]: "none",
    [`border${t[e]}Style`]: "none"
  };
};
tt.MENU_CLASS = "contextmenu";
tt.NAME = "ContextMenu";
tt.MULTI_INSTANCE = !0;
tt.DEFAULT = {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0,
  destoryOnHide: !0
};
m(document).on(`contextmenu${tt.NAMESPACE}`, (e) => {
  const t = m(e.target);
  if (t.closest(`.${tt.MENU_CLASS}`).length)
    return;
  const n = t.closest(Fd).not(":disabled,.disabled");
  if (n.length) {
    const s = `${tt.KEY}:options`, i = n.data(s), r = tt.ensure(n, i);
    i || n.data(s, r.options), r.show(e), e.preventDefault();
  }
}).on(`click${tt.NAMESPACE}`, tt.clear.bind(tt));
var co = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, bn = (e, t, n) => (co(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ys = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, dr = (e, t, n, s) => (co(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ud = (e, t, n) => (co(e, t, "access private method"), n), Pn, xn, Ks, ur, Ol;
const wa = '[data-toggle="dropdown"]', Hl = class extends tt {
  constructor() {
    super(...arguments), ys(this, ur), ys(this, Pn, !1), ys(this, xn, 0), this.hideLater = () => {
      bn(this, Ks).call(this), dr(this, xn, window.setTimeout(this.hide.bind(this), 100));
    }, ys(this, Ks, () => {
      clearTimeout(bn(this, xn)), dr(this, xn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(e, t) {
    (t == null ? void 0 : t.clearOthers) !== !1 && Hl.clear({ event: t == null ? void 0 : t.event, exclude: [this.element] });
    const n = super.show(e);
    return n && (!bn(this, Pn) && this.isHover && Ud(this, ur, Ol).call(this), this.$element.addClass(this.elementShowClass)), n;
  }
  hide() {
    const e = super.hide();
    return e && this.$element.removeClass(this.elementShowClass), e;
  }
  toggle(e, t) {
    return this.isShown ? this.hide() : this.show(e, { event: e, ...t });
  }
  destroy() {
    bn(this, Pn) && m(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: e } = this.options;
    return e ? typeof e == "number" ? e : 8 : 0;
  }
  getPopperOptions() {
    var n, s;
    const e = super.getPopperOptions(), t = this.getArrowSize();
    return t && this.arrowEl && ((n = e.middleware) == null || n.push(io(t)), (s = e.middleware) == null || s.push(or({ element: this.arrowEl }))), e;
  }
  ensureMenu() {
    const e = super.ensureMenu();
    if (this.options.arrow) {
      const t = this.getArrowSize(), n = m('<div class="arrow-el" />').css({
        position: "absolute",
        width: `${t}px`,
        height: `${t}px`,
        transform: "rotate(45deg)"
      });
      this.arrowEl = n[0];
    }
    return e;
  }
  getMenuOptions() {
    const e = super.getMenuOptions();
    if (e && this.options.arrow) {
      const { afterRender: t } = e;
      e.afterRender = (...n) => {
        this.arrowEl && m(this.menu).find(".menu").each((s, i) => {
          m(i).find(".arrow-el").length === 0 && m(i).parent().hasClass("dropdown-menu") && m(i).append(this.arrowEl);
        }), t == null || t(...n);
      };
    }
    return e;
  }
};
let zt = Hl;
Pn = /* @__PURE__ */ new WeakMap();
xn = /* @__PURE__ */ new WeakMap();
Ks = /* @__PURE__ */ new WeakMap();
ur = /* @__PURE__ */ new WeakSet();
Ol = function() {
  m(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, bn(this, Ks)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), dr(this, Pn, !0);
};
zt.MENU_CLASS = "dropdown-menu";
zt.NAME = "Dropdown";
zt.DEFAULT = {
  ...tt.DEFAULT,
  strategy: "fixed",
  trigger: "click"
};
const ws = `${zt.KEY}:options`;
m(document).on("click", function(e) {
  const t = m(e.target).closest(wa).not(":disabled,.disabled");
  if (!t.length) {
    zt.clear({ event: e });
    return;
  }
  const n = t.data(ws), s = zt.ensure(t, n);
  n || t.data(ws, s.options), s.options.trigger === "click" && s.toggle();
}).on("mouseover", function(e) {
  const t = m(e.target).closest(wa);
  if (!t.length)
    return;
  const n = t.data(ws), s = zt.ensure(t, n);
  n || t.data(ws, s.options), s.isHover && s.show();
});
let vs = 0;
window.addEventListener("scroll", (e) => {
  vs && clearTimeout(vs), vs = window.setTimeout(() => {
    zt.clear({ event: e }), vs = 0;
  }, 50);
}, !0);
var Xn, tn;
class Vd extends V {
  constructor(n) {
    var s;
    super(n);
    L(this, Xn, void 0);
    L(this, tn, it());
    this.state = { placement: ((s = n.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return k(this, tn);
  }
  get triggerElement() {
    return k(this, tn).current;
  }
  componentDidMount() {
    const { modifiers: n = [], ...s } = this.props.dropdown || {};
    n.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: i }) => {
        var o;
        const r = ((o = i.placement) == null ? void 0 : o.split("-").shift()) || "";
        this.setState({ placement: r });
      }
    }), B(this, Xn, zt.ensure(this.triggerElement, {
      ...s,
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
    var n;
    (n = k(this, Xn)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: s, dropdown: i, ...r } = this.props;
    return {
      className: T("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: k(this, tn)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ y("div", { ...s, children: n });
  }
}
Xn = new WeakMap(), tn = new WeakMap();
class qd extends Vd {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var r;
    const { placement: t, show: n } = this.state, s = this.beforeRender();
    let { caret: i = !0 } = s;
    if (i !== !1 && (n || i === !0)) {
      const o = (n ? t : (r = this.props.dropdown) == null ? void 0 : r.placement) || "";
      i = (o.includes("top") ? "up" : o.includes("bottom") ? "down" : o) || (typeof i == "string" ? i : "") || "down";
    }
    return s.caret = i, /* @__PURE__ */ y(Gt, { ...s });
  }
}
function Bl({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ y(qd, { type: n, ...s });
}
let zl = class extends V {
  componentDidMount() {
    var t;
    (t = this.props.afterRender) == null || t.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t;
    (t = this.props.afterRender) == null || t.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this);
  }
  handleItemClick(t, n, s, i) {
    s && s.call(i.target, i);
    const { onClickItem: r } = this.props;
    r && r.call(this, { item: t, index: n, event: i });
  }
  beforeRender() {
    var s;
    const t = { ...this.props }, n = (s = t.beforeRender) == null ? void 0 : s.call(this, t);
    return n && Object.assign(t, n), typeof t.items == "function" && (t.items = t.items.call(this)), t;
  }
  onRenderItem(t, n) {
    const { key: s = n, ...i } = t;
    return /* @__PURE__ */ y(Gt, { ...i }, s);
  }
  renderItem(t, n, s) {
    const { itemRender: i, btnProps: r, onClickItem: o } = t, a = { key: s, ...n };
    if (r && Object.assign(a, r), o && (a.onClick = this.handleItemClick.bind(this, a, s, n.onClick)), i) {
      const l = i.call(this, a, q);
      if (Z(l))
        return l;
      typeof l == "object" && Object.assign(a, l);
    }
    return this.onRenderItem(a, s);
  }
  render() {
    const t = this.beforeRender(), {
      className: n,
      items: s,
      size: i,
      type: r,
      btnProps: o,
      children: a,
      itemRender: l,
      onClickItem: h,
      beforeRender: c,
      afterRender: d,
      beforeDestroy: u,
      ...f
    } = t;
    return /* @__PURE__ */ y(
      "div",
      {
        className: T("btn-group", i ? `size-${i}` : "", n),
        ...f,
        children: [
          s && s.map(this.renderItem.bind(this, t)),
          a
        ]
      }
    );
  }
};
function Gd({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ y(zl, { type: n, ...s });
}
let yt = class extends De {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: s, ...i } = super.beforeRender();
    return i.className = T(i.className, s ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (i.style ? i.style.gap = t : i.style = { gap: t }), i;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, s) {
    const { type: i } = s, r = this.props.btnProps, o = this.isBtnItem(i) ? { btnType: "ghost", ...r } : {}, a = {
      ...n,
      ...o,
      ...s,
      className: T(`${this.name}-${i}`, n.className, o.className, s.className),
      style: Object.assign({}, n.style, o.style, s.style)
    };
    return i === "btn-group" && (a.btnProps = r), /* @__PURE__ */ y(t, { ...a });
  }
};
yt.ItemComponents = {
  item: Rd,
  dropdown: Bl,
  "btn-group": Gd
};
yt.ROOT_TAG = "nav";
yt.NAME = "toolbar";
yt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function jd({
  className: e,
  style: t,
  actions: n,
  heading: s,
  content: i,
  contentClass: r,
  children: o,
  close: a,
  onClose: l,
  icon: h,
  ...c
}) {
  let d;
  a === !0 ? d = /* @__PURE__ */ y(Gt, { className: "alert-close btn ghost", square: !0, onClick: l, children: /* @__PURE__ */ y("span", { class: "close" }) }) : Z(a) ? d = a : typeof a == "object" && (d = /* @__PURE__ */ y(Gt, { ...a, onClick: l }));
  const u = Z(n) ? n : n ? /* @__PURE__ */ y(yt, { ...n }) : null;
  return /* @__PURE__ */ y("div", { className: T("alert", e), style: t, ...c, children: [
    Z(h) ? h : typeof h == "string" ? /* @__PURE__ */ y("i", { className: `icon ${h}` }) : null,
    Z(i) ? i : /* @__PURE__ */ y("div", { className: T("alert-content", r), children: [
      Z(s) ? s : s && /* @__PURE__ */ y("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ y("div", { className: "alert-text", children: i }),
      s ? u : null
    ] }),
    s ? null : u,
    d,
    o
  ] });
}
function Yd(e) {
  if (e === "center")
    return "fade-from-center";
  if (e) {
    if (e.includes("top"))
      return "fade-from-top";
    if (e.includes("bottom"))
      return "fade-from-bottom";
  }
  return "fade";
}
let Kd = class extends V {
  componentDidMount() {
    var t;
    (t = this.props.afterRender) == null || t.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t;
    (t = this.props.afterRender) == null || t.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this);
  }
  render() {
    const {
      afterRender: t,
      beforeDestroy: n,
      margin: s,
      type: i,
      placement: r,
      animation: o,
      show: a,
      className: l,
      time: h,
      ...c
    } = this.props;
    return /* @__PURE__ */ y(
      jd,
      {
        className: T("messager", l, i, o === !0 ? Yd(r) : o, a ? "in" : ""),
        ...c
      }
    );
  }
};
var Xd = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Jd = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, fn = (e, t, n) => (Xd(e, t, "access private method"), n), ye, Ue;
class ho extends J {
  constructor() {
    super(...arguments), Jd(this, ye), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
      m(t.target).closest('.alert-close,[data-dismiss="messager"]').length && (t.preventDefault(), t.stopPropagation(), this.hide());
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
    this.render(), this.emit("show"), fn(this, ye, Ue).call(this, () => {
      this._show = !0, this.render(), fn(this, ye, Ue).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && fn(this, ye, Ue).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && fn(this, ye, Ue).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), fn(this, ye, Ue).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
ye = /* @__PURE__ */ new WeakSet();
Ue = function(e, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    e(), this._showTimer = 0;
  }, t);
};
ho.NAME = "MessagerItem";
ho.Component = Kd;
var uo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Se = (e, t, n) => (uo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), _s = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ts = (e, t, n, s) => (uo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Fl = (e, t, n) => (uo(e, t, "access private method"), n), Je, It, fr, Ul, fo, Vl;
const ql = class extends lt {
  constructor() {
    super(...arguments), _s(this, fr), _s(this, fo), _s(this, Je, void 0), _s(this, It, void 0);
  }
  get isShown() {
    var e;
    return !!((e = Se(this, It)) != null && e.isShown);
  }
  show(e) {
    this.setOptions(e), Fl(this, fr, Ul).call(this).show();
  }
  hide() {
    var e;
    (e = Se(this, It)) == null || e.hide();
  }
  static show(e) {
    typeof e == "string" && (e = { content: e });
    const { container: t, ...n } = e, s = ql.ensure(t || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let po = ql;
Je = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
fr = /* @__PURE__ */ new WeakSet();
Ul = function() {
  if (Se(this, It))
    Se(this, It).setOptions(this.options);
  else {
    const e = Fl(this, fo, Vl).call(this), t = new ho(e, this.options);
    t.on("hidden", () => {
      t.destroy(), e == null || e.remove(), Ts(this, Je, void 0), Ts(this, It, void 0);
    }), Ts(this, It, t);
  }
  return Se(this, It);
};
fo = /* @__PURE__ */ new WeakSet();
Vl = function() {
  if (Se(this, Je))
    return Se(this, Je);
  const { placement: e = "top" } = this.options;
  let t = this.$element.find(`.messagers-${e}`);
  t.length || (t = m(`<div class="messagers messagers-${e}"></div>`).appendTo(this.$element));
  let n = t.find(`#messager-${this.gid}`);
  return n.length || (n = m(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), Ts(this, Je, n[0])), n[0];
};
po.NAME = "messager";
po.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
m(document).on("to-show.messager.zui", (e, t) => {
  t && po.show(t);
});
let go = class extends V {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: s, circleBgColor: i, circleColor: r } = this.props, o = (n - s) / 2, a = n / 2;
    return /* @__PURE__ */ y("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ y("circle", { cx: a, cy: a, r: o, stroke: i, "stroke-width": s }),
      /* @__PURE__ */ y("circle", { cx: a, cy: a, r: o, stroke: r, "stroke-dasharray": Math.PI * o * 2, "stroke-dashoffset": Math.PI * o * 2 * (100 - t) / 100, "stroke-width": s }),
      /* @__PURE__ */ y("text", { x: a, y: a + s / 4, "dominant-baseline": "middle", style: { fontSize: `${o}px` }, children: Math.round(t) })
    ] });
  }
};
go.NAME = "zui.progress-circle";
go.defaultProps = {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
};
class Gl extends J {
}
Gl.NAME = "ProgressCircle";
Gl.Component = go;
let Zd = class extends V {
  constructor() {
    super(...arguments), this.state = { checked: !1 }, this.handleOnClick = () => {
      this.setState({ checked: !this.state.checked });
    };
  }
  componentDidMount() {
    this.setState({ checked: this.props.defaultChecked ?? !1 });
  }
  render() {
    const {
      component: t,
      className: n,
      children: s,
      text: i,
      icon: r,
      surffixIcon: o,
      disabled: a,
      defaultChecked: l,
      onChange: h,
      ...c
    } = this.props, d = this.state.checked ? 1 : 0, u = t || "div", f = typeof r == "string" ? /* @__PURE__ */ y("i", { class: `icon ${r}` }) : r, p = typeof o == "string" ? /* @__PURE__ */ y("i", { class: `icon ${o}` }) : o, g = [
      /* @__PURE__ */ y("input", { onChange: h, type: "checkbox", value: d, checked: !!this.state.checked }),
      /* @__PURE__ */ y("label", { children: [
        f,
        i,
        p
      ] })
    ];
    return q(
      u,
      {
        className: T("switch", n, { disabled: a }),
        onClick: this.handleOnClick,
        ...c
      },
      ...g,
      s
    );
  }
};
class jl extends J {
}
jl.NAME = "Switch";
jl.Component = Zd;
class Yl extends J {
}
Yl.NAME = "BtnGroup";
Yl.Component = zl;
class Qd extends lt {
  init() {
    const { multiple: t, defaultFileList: n, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? ld(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), n && this.addFileItem(n);
  }
  initUploadCash() {
    const { name: t, uploadText: n, listPosition: s, limitSize: i, btnClass: r, tipText: o, draggable: a } = this.options;
    this.$list = m('<div class="file-list py-1"></div>');
    const l = i ? m(`<span class="upload-tip">${o == null ? void 0 : o.replace("%s", i)}</span>`) : null;
    if (!a) {
      this.$label = m(`<label class="btn ${r}" for="${t}">${n}</label>`);
      const c = s === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...c);
      return;
    }
    this.$label = m(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16 border border-dashed border-gray" for="${t}"></label>`).append(`<span class="text-primary">${n}</span>`).append(l), this.bindDragEvent();
    const h = s === "bottom" ? [this.$label, this.$list] : [this.$list, this.$label];
    this.$element.append(this.$input, ...h);
  }
  bindDragEvent() {
    this.$label.on("dragover", (t) => {
      t.preventDefault(), console.log("dragover"), this.$label.hasClass("border-primary") || (this.$label.removeClass("border-gray"), this.$label.addClass("border-primary"));
    }).on("dragleave", (t) => {
      t.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray");
    }).on("drop", (t) => {
      var s;
      t.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray");
      const n = Array.from(((s = t.dataTransfer) == null ? void 0 : s.files) ?? []);
      console.log(t.dataTransfer.files), this.addFileItem(n);
    });
  }
  initFileInputCash() {
    const { name: t, multiple: n, accept: s, onChange: i } = this.options;
    this.$input = m("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", n).on("change", (r) => {
      const o = r.target.files;
      if (!o)
        return;
      const a = [...o];
      this.addFileItem(a), i == null || i(a);
    }), s && this.$input.prop("accept", s);
  }
  addFile(t) {
    this.options.multiple || (this.renameMap.clear(), this.fileMap.clear(), this.dataTransfer.items.clear(), this.currentBytes = t.size), this.renameMap.set(t.name, t.name), this.fileMap.set(t.name, t), this.dataTransfer.items.add(t), this.$input.prop("files", this.dataTransfer.files), this.currentBytes += t.size;
  }
  addFileItem(t) {
    const { multiple: n, limitCount: s } = this.options;
    if (n) {
      for (const o of t) {
        if (console.log(this.limitBytes, this.currentBytes, o.size), s && this.fileMap.size >= s || this.currentBytes + o.size > this.limitBytes)
          return;
        const a = this.createFileItem(o);
        this.itemMap.set(o.name, a), this.$list.append(a);
      }
      return;
    }
    const i = t[0];
    if (i.size > this.limitBytes)
      return;
    const r = this.createFileItem(i);
    this.itemMap.clear(), this.itemMap.set(i.name, r), this.$list.empty().append(r);
  }
  deleteFileItem(t) {
    var i, r, o;
    const n = this.renameMap.get(t) ?? t;
    this.renameMap.delete(t);
    const s = this.fileMap.get(n);
    s && ((i = this.itemMap.get(s.name)) == null || i.remove(), this.itemMap.delete(s.name), (o = (r = this.options).onDelete) == null || o.call(r, s), this.fileMap.delete(s.name), this.currentBytes -= s.size, this.dataTransfer = new DataTransfer(), this.fileMap.forEach((a) => this.dataTransfer.items.add(a)), this.$input.prop("files", this.dataTransfer.files));
  }
  renameFileItem(t, n) {
    var r, o;
    const s = this.renameMap.get(t.name);
    this.renameMap.set(t.name, n), s && (t = this.fileMap.get(s) ?? t);
    const i = this.itemMap.get(t.name);
    i && (this.itemMap.set(n, i).delete(t.name), (o = (r = this.options).onRename) == null || o.call(r, n, t.name), this.fileMap.delete(t.name), this.dataTransfer = new DataTransfer(), t = new File([t], n), this.fileMap.set(n, t).forEach((a) => this.dataTransfer.items.add(a)), this.$input.prop("files", this.dataTransfer.files));
  }
  createFileItem(t) {
    const { showIcon: n } = this.options;
    return this.addFile(t), m('<li class="file-item my-1 flex items-center gap-2"></li>').append(n ? this.fileIcon() : null).append(this.createfileInfo(t)).append(this.createRenameContainer(t));
  }
  fileIcon() {
    const { icon: t } = this.options;
    return m(`<i class="icon icon-${t}"></i>`);
  }
  createfileInfo(t) {
    const n = m(`<span class="file-name">${t.name}</span>`), s = m(`<span class="file-size text-gray">${ad(t.size)}</span>`), i = m('<div class="file-info flex items-center gap-2"></div>').append(n).append(s), { renameBtn: r, renameText: o, deleteBtn: a, deleteText: l } = this.options;
    return r && i.append(
      m("<span />").addClass("btn size-sm rounded-sm text-primary canvas file-action file-rename").html(o).on("click", (h) => {
        i.addClass("hidden").closest(".file-item").find(".input-group.hidden").removeClass("hidden");
        const c = m(h.target).closest("li").find("input")[0];
        c.focus(), c.value.lastIndexOf(".") !== -1 && c.setSelectionRange(0, c.value.lastIndexOf("."));
      })
    ), a && i.append(
      m("<span />").html(l).addClass("btn size-sm rounded-sm text-primary canvas file-action file-delete").on("click", () => this.deleteFileItem(n.html()))
    ), i;
  }
  createRenameContainer(t) {
    const { confirmText: n, cancelText: s } = this.options, i = m('<div class="input-group hidden"></div>'), r = m("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).on("keydown", (h) => {
      h.key === "Enter" ? (this.renameFileItem(t, r.val()), i.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden").find(".file-name").html(r.val())) : h.key === "Escape" && (r.val(t.name), i.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden"));
    }), o = m("<button />").addClass("btn rename-confirm-btn").prop("type", "button").html(n).on("click", () => {
      this.renameFileItem(t, r.val()), i.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden").find(".file-name").html(r.val());
    }), a = m("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(s).on("click", () => {
      r.val(t.name), i.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), l = m('<div class="btn-group"></div').append(o).append(a);
    return i.append(r).append(l);
  }
}
Qd.DEFAULT = {
  uploadText: "上传文件",
  renameText: "重命名",
  deleteText: "删除",
  confirmText: "确定",
  cancelText: "取消",
  tipText: "（不超过 %s）",
  renameBtn: !0,
  deleteBtn: !0,
  showIcon: !0,
  multiple: !0,
  listPosition: "bottom",
  limitSize: !1,
  icon: "file-o",
  btnClass: "",
  draggable: !1
};
var Dt;
class tu {
  constructor(t = "") {
    L(this, Dt, void 0);
    typeof t == "object" ? B(this, Dt, t) : B(this, Dt, document.appendChild(document.createComment(t)));
  }
  on(t, n, s) {
    k(this, Dt).addEventListener(t, n, s);
  }
  once(t, n, s) {
    k(this, Dt).addEventListener(t, n, { once: !0, ...s });
  }
  off(t, n, s) {
    k(this, Dt).removeEventListener(t, n, s);
  }
  emit(t) {
    return k(this, Dt).dispatchEvent(t), t;
  }
}
Dt = new WeakMap();
const va = /* @__PURE__ */ new Set([
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
class Kl extends tu {
  on(t, n, s) {
    super.on(t, n, s);
  }
  off(t, n, s) {
    super.off(t, n, s);
  }
  once(t, n, s) {
    super.once(t, n, s);
  }
  emit(t, n) {
    return typeof t == "string" && (va.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(Kl.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (va.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
let Xl = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Jn, se, _t, en, nn, Rs;
const Xo = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    L(this, nn);
    L(this, Jn, void 0);
    L(this, se, void 0);
    L(this, _t, void 0);
    L(this, en, void 0);
    B(this, Jn, n), B(this, se, `ZUI_STORE:${t ?? Xl()}`), B(this, _t, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return k(this, Jn);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (k(this, en) || B(this, en, new Xo(k(this, se), "session")), k(this, en));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const s = k(this, _t).getItem(pe(this, nn, Rs).call(this, t));
    return typeof s == "string" ? JSON.parse(s) : s ?? n;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(t, n) {
    if (n == null)
      return this.remove(t);
    k(this, _t).setItem(pe(this, nn, Rs).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    k(this, _t).removeItem(pe(this, nn, Rs).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < k(this, _t).length; n++) {
      const s = k(this, _t).key(n);
      if (s != null && s.startsWith(k(this, se))) {
        const i = k(this, _t).getItem(s);
        typeof i == "string" && t(s.substring(k(this, se).length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const t = {};
    return this.each((n, s) => {
      t[n] = s;
    }), t;
  }
};
let Xs = Xo;
Jn = new WeakMap(), se = new WeakMap(), _t = new WeakMap(), en = new WeakMap(), nn = new WeakSet(), Rs = function(t) {
  return `${k(this, se)}:${t}`;
};
const eu = new Xs("DEFAULT");
function nu(e, t = "local") {
  return new Xs(e, t);
}
Object.assign(eu, { create: nu });
function su(e) {
  if (e.indexOf("#") === 0 && (e = e.slice(1)), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e.length !== 6)
    throw new Error(`Invalid HEX color "${e}".`);
  return [
    parseInt(e.slice(0, 2), 16),
    // r
    parseInt(e.slice(2, 4), 16),
    // g
    parseInt(e.slice(4, 6), 16)
    // b
  ];
}
function iu(e) {
  const [t, n, s] = typeof e == "string" ? su(e) : e;
  return t * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function _a(e, t) {
  return iu(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function ba(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function ru(e, t, n) {
  e = e % 360 / 360, t = ba(t), n = ba(n);
  const s = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function ou(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function au(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e[0].toUpperCase() : e.length <= t ? e : e.substring(0, t);
}
let Jl = class extends V {
  render() {
    const {
      className: t,
      style: n,
      size: s = "",
      circle: i,
      rounded: r,
      background: o,
      foreColor: a,
      text: l,
      code: h,
      maxTextLength: c = 2,
      src: d,
      hueDistance: u = 43,
      saturation: f = 0.4,
      lightness: p = 0.6,
      children: g,
      ...v
    } = this.props, w = ["avatar", t], _ = { ...n, background: o, color: a };
    let $ = 32;
    s && (typeof s == "number" ? (_.width = `${s}px`, _.height = `${s}px`, _.fontSize = `${Math.max(12, Math.round(s / 2))}px`, $ = s) : (w.push(`size-${s}`), $ = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? w.push("circle") : r && (typeof r == "number" ? _.borderRadius = `${r}px` : w.push(`rounded-${r}`));
    let S;
    if (d)
      w.push("has-img"), S = /* @__PURE__ */ y("img", { className: "avatar-img", src: d, alt: l });
    else if (l != null && l.length) {
      const C = au(l, c);
      if (w.push("has-text", `has-text-${C.length}`), o)
        !a && o && (_.color = _a(o));
      else {
        const N = h ?? l, A = (typeof N == "number" ? N : ou(N)) * u % 360;
        if (_.background = `hsl(${A},${f * 100}%,${p * 100}%)`, !a) {
          const O = ru(A, f, p);
          _.color = _a(O);
        }
      }
      let M;
      $ && $ < 14 * C.length && (M = { transform: `scale(${$ / (14 * C.length)})`, whiteSpace: "nowrap" }), S = /* @__PURE__ */ y("div", { "data-actualSize": $, className: "avatar-text", style: M, children: C });
    }
    return /* @__PURE__ */ y(
      "div",
      {
        className: T(w),
        style: _,
        ...v,
        children: [
          S,
          g
        ]
      }
    );
  }
};
class Zl extends J {
}
Zl.NAME = "Avatar";
Zl.Component = Jl;
var mo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, xe = (e, t, n) => (mo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), pn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Wn = (e, t, n, s) => (mo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ji = (e, t, n) => (mo(e, t, "access private method"), n), Ge, Ns, we, pr, $n, As;
const Yi = "show", xa = "in", lu = '[data-dismiss="modal"]', kn = class extends lt {
  constructor() {
    super(...arguments), pn(this, $n), pn(this, Ge, 0), pn(this, Ns, void 0), pn(this, we, void 0), pn(this, pr, (e) => {
      const t = e.target, n = t.closest(".modal");
      !n || n !== this.modalElement || (t.closest(lu) || this.options.backdrop === !0 && t === n) && (e.stopPropagation(), this.hide());
    });
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(Yi);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", xe(this, pr)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: e } = this;
      if (e) {
        const t = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const n = e.clientWidth, s = e.clientHeight;
          (!xe(this, we) || xe(this, we)[0] !== n || xe(this, we)[1] !== s) && (Wn(this, we, [n, s]), this.layout());
        });
        t.observe(e), Wn(this, Ns, t);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var e;
    super.destroy(), (e = xe(this, Ns)) == null || e.disconnect();
  }
  show(e) {
    const { modalElement: t } = this;
    if (this.shown)
      return m(t).css("z-index", `${kn.zIndex++}`), !1;
    this.setOptions(e);
    const { animation: n, backdrop: s, className: i, style: r } = this.options;
    return m(t).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, Yi, i).css({
      zIndex: `${kn.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), ji(this, $n, As).call(this, () => {
      m(t).addClass(xa), ji(this, $n, As).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (m(this.modalElement).removeClass(xa), this.emit("hide"), ji(this, $n, As).call(this, () => {
      m(this.modalElement).removeClass(Yi), this.emit("hidden");
    }), !0) : !1;
  }
  layout(e, t) {
    if (!this.shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    t = t ?? this.options.size, m(n).removeAttr("data-size");
    const s = { width: "", height: "" };
    typeof t == "object" ? (s.width = t.width, s.height = t.height) : typeof t == "string" && ["md", "sm", "lg", "full"].includes(t) ? m(n).attr("data-size", t) : t && (s.width = t), m(n).css(s), e = e ?? this.options.position ?? "fit";
    const i = n.clientWidth, r = n.clientHeight;
    Wn(this, we, [i, r]), typeof e == "function" && (e = e({ width: i, height: r }));
    const o = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof e == "number" ? (o.alignSelf = "flex-start", o.top = e) : typeof e == "object" && e ? (o.alignSelf = "flex-start", Object.assign(o, e)) : e === "fit" ? (o.alignSelf = "flex-start", o.top = `${Math.max(0, Math.floor((window.innerHeight - r) / 3))}px`) : e === "bottom" ? o.alignSelf = "flex-end" : e === "top" ? o.alignSelf = "flex-start" : e !== "center" && typeof e == "string" && (o.alignSelf = "flex-start", o.top = e), m(n).css(o), m(this.modalElement).css("justifyContent", o.left ? "flex-start" : "center");
  }
  static hide(e) {
    var t;
    (t = kn.query(e)) == null || t.hide();
  }
  static show(e) {
    var t;
    (t = kn.query(e)) == null || t.show();
  }
};
let Xt = kn;
Ge = /* @__PURE__ */ new WeakMap();
Ns = /* @__PURE__ */ new WeakMap();
we = /* @__PURE__ */ new WeakMap();
pr = /* @__PURE__ */ new WeakMap();
$n = /* @__PURE__ */ new WeakSet();
As = function(e, t) {
  xe(this, Ge) && (clearTimeout(xe(this, Ge)), Wn(this, Ge, 0)), e && (this.options.animation ? Wn(this, Ge, window.setTimeout(e, t ?? this.options.transTime)) : e());
};
Xt.NAME = "Modal";
Xt.MULTI_INSTANCE = !0;
Xt.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Xt.zIndex = 2e3;
m(window).on("resize.modal.zui", () => {
  Xt.getAll().forEach((e) => {
    const t = e;
    t.shown && t.options.responsive && t.layout();
  });
});
m(document).on("to-hide.modal.zui", (e, t) => {
  Xt.hide(t == null ? void 0 : t.target);
});
class Ql extends V {
  componentDidMount() {
    var t;
    (t = this.props.afterRender) == null || t.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t;
    (t = this.props.afterRender) == null || t.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this);
  }
  renderHeader() {
    const {
      header: t,
      title: n
    } = this.props;
    return Z(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ y("div", { className: "modal-header", children: /* @__PURE__ */ y("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : Z(t) ? t : /* @__PURE__ */ y("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ y(yt, { ...t }) : null,
      n ? /* @__PURE__ */ y("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ y("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t
    } = this.props;
    return t ? Z(t) ? t : /* @__PURE__ */ y("div", { className: "modal-body", children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerActions: n
    } = this.props;
    return Z(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ y("div", { className: "modal-footer", children: n ? /* @__PURE__ */ y(yt, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: n,
      children: s
    } = this.props;
    return /* @__PURE__ */ y("div", { className: T("modal-dialog", t), style: n, children: /* @__PURE__ */ y("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      s,
      this.renderFooter()
    ] }) });
  }
}
Ql.defaultProps = { closeBtn: !0 };
var sn, rn, on;
class cu extends V {
  constructor() {
    super(...arguments);
    L(this, sn, void 0);
    L(this, rn, void 0);
    L(this, on, void 0);
    B(this, sn, it()), this.state = {}, B(this, on, () => {
      var i, r;
      const n = (r = (i = k(this, sn).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let s = k(this, rn);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const o = n.body, a = n.documentElement, l = Math.ceil(Math.max(o.scrollHeight, o.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), s.observe(n.body), s.observe(n.documentElement), B(this, rn, s);
    });
  }
  componentDidMount() {
    k(this, on).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = k(this, rn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ y(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: k(this, sn),
        onLoad: k(this, on)
      }
    );
  }
}
sn = new WeakMap(), rn = new WeakMap(), on = new WeakMap();
var yo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, vt = (e, t, n) => (yo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), gn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Be = (e, t, n, s) => (yo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ls = (e, t, n) => (yo(e, t, "access private method"), n), Qt, Cn, Rt, Js, wo, Ps, gr;
function hu(e, t) {
  const { custom: n, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function du(e, t) {
  const { dataType: n = "html", url: s, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await (await fetch(s, {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "X-ZUI-Modal": "true"
    },
    ...i
  })).text();
  if (n !== "html")
    try {
      const d = JSON.parse(c);
      return {
        title: o,
        ...r,
        ...d
      };
    } catch {
    }
  return a !== !1 && n === "html" ? [c] : {
    title: o,
    ...r,
    body: n === "html" ? /* @__PURE__ */ y(vl, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function uu(e, t) {
  const { url: n, custom: s, title: i } = t;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ y(cu, { url: n })
  };
}
const fu = {
  custom: hu,
  ajax: du,
  iframe: uu
}, Ki = "loading", Sn = class extends Xt {
  constructor() {
    super(...arguments), gn(this, Js), gn(this, Ps), gn(this, Qt, void 0), gn(this, Cn, void 0), gn(this, Rt, void 0);
  }
  get id() {
    return vt(this, Cn);
  }
  get loading() {
    var e;
    return (e = this.modalElement) == null ? void 0 : e.classList.contains(Ki);
  }
  get shown() {
    var e;
    return !!((e = vt(this, Qt)) != null && e.classList.contains("show"));
  }
  get modalElement() {
    let e = vt(this, Qt);
    if (!e) {
      const { options: t } = this;
      let n = vt(this, Cn);
      n || (n = t.id || `modal-${m.guid++}`, Be(this, Cn, n));
      const { $element: s } = this;
      if (e = s.find(`#${n}`)[0], !e) {
        const i = this.key;
        e = m("<div>").attr({
          id: n,
          "data-key": i
        }).data(this.constructor.KEY, this).css(t.style || {}).setClass("modal modal-async load-indicator", t.className).appendTo(s)[0];
      }
      Be(this, Qt, e);
    }
    return e;
  }
  get $emitter() {
    const e = vt(this, Qt);
    return e ? m(e) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.on("hidden", () => {
      this.options.destoryOnHide && this.destroy();
    });
  }
  show(e) {
    return super.show(e) ? (this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const e = vt(this, Qt);
    e && (m(e).removeData(this.constructor.KEY).remove(), Be(this, Qt, void 0));
  }
  render(e) {
    super.render(e), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    vt(this, Rt) && clearTimeout(vt(this, Rt));
    const { modalElement: e, options: t } = this, n = m(e), { type: s, loadTimeout: i, loadingText: r = null } = t, o = fu[s];
    if (!o)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.attr("data-loading", r).addClass(Ki), i && Be(this, Rt, window.setTimeout(() => {
      Be(this, Rt, 0), Ls(this, Ps, gr).call(this, this.options.timeoutTip);
    }, i));
    const a = await o.call(this, e, t);
    return a === !1 ? await Ls(this, Ps, gr).call(this, this.options.failedTip) : a && typeof a == "object" && await Ls(this, Js, wo).call(this, a), vt(this, Rt) && (clearTimeout(vt(this, Rt)), Be(this, Rt, 0)), await zs(100), n.removeClass(Ki), !0;
  }
  static open(e) {
    return new Promise((t) => {
      const { container: n = document.body, ...s } = e, i = { show: !0, ...s };
      !i.type && i.url && (i.type = "ajax");
      const r = Sn.ensure(n, i);
      r.one("hidden", () => t(r)), r.show();
    });
  }
  static async alert(e) {
    typeof e == "string" && (e = { message: e });
    const { type: t, message: n, icon: s, iconClass: i = "icon-lg muted", actions: r = "confirm", onClickAction: o, custom: a, key: l = "__alert", ...h } = e;
    let c = /* @__PURE__ */ y("div", { children: n });
    s ? c = /* @__PURE__ */ y("div", { className: "modal-body row gap-4 items-center", children: [
      /* @__PURE__ */ y("div", { className: `icon ${s} ${i}` }),
      c
    ] }) : c = /* @__PURE__ */ y("div", { className: "modal-body", children: c });
    const d = [];
    (Array.isArray(r) ? r : [r]).forEach((p) => {
      p = {
        ...typeof p == "string" ? { key: p } : p
      }, typeof p.key == "string" && (p.text || (p.text = qt.getLang(p.key, p.key)), p.btnType || (p.btnType = `btn-wide ${p.key === "confirm" ? "primary" : "btn-default"}`)), p && d.push(p);
    }, []);
    let u;
    const f = d.length ? {
      gap: 4,
      items: d,
      onClickItem: ({ item: p, event: g }) => {
        const v = Sn.query(g.target, l);
        u = p.key, (o == null ? void 0 : o(p, v)) !== !1 && v && v.hide();
      }
    } : void 0;
    return await Sn.open({
      key: l,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: c,
      backdrop: "static",
      custom: { footerActions: f, ...typeof a == "function" ? a() : a },
      ...h
    }), u;
  }
  static async confirm(e) {
    typeof e == "string" && (e = { message: e });
    const { onClickAction: t, onResult: n, ...s } = e;
    return await Sn.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (r, o) => {
        n == null || n(r.key === "confirm", o), t == null || t(r, o);
      },
      ...s
    }) === "confirm";
  }
};
let tc = Sn;
Qt = /* @__PURE__ */ new WeakMap();
Cn = /* @__PURE__ */ new WeakMap();
Rt = /* @__PURE__ */ new WeakMap();
Js = /* @__PURE__ */ new WeakSet();
wo = function(e) {
  return new Promise((t) => {
    if (Array.isArray(e))
      return this.modalElement.innerHTML = e[0], m(this.modalElement).runJS(), t();
    const { afterRender: n, ...s } = e;
    e = {
      afterRender: (i) => {
        this.layout(), n == null || n(i), t();
      },
      ...s
    }, Vn(
      /* @__PURE__ */ y(Ql, { ...e }),
      this.modalElement
    );
  });
};
Ps = /* @__PURE__ */ new WeakSet();
gr = function(e) {
  if (e)
    return Ls(this, Js, wo).call(this, {
      body: /* @__PURE__ */ y("div", { className: "modal-load-failed", children: e })
    });
};
tc.DEFAULT = {
  ...Xt.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
var vo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, mr = (e, t, n) => (vo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), bs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, $a = (e, t, n, s) => (vo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), yr = (e, t, n) => (vo(e, t, "access private method"), n), Ee, _o, ec, wr, nc, bo, sc;
const pu = '[data-toggle="modal"]';
class ic extends lt {
  constructor() {
    super(...arguments), bs(this, _o), bs(this, wr), bs(this, bo), bs(this, Ee, void 0);
  }
  get modal() {
    return mr(this, Ee);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = yr(this, wr, nc).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = mr(this, Ee)) == null ? void 0 : t.hide();
  }
}
Ee = /* @__PURE__ */ new WeakMap();
_o = /* @__PURE__ */ new WeakSet();
ec = function() {
  const {
    container: e,
    ...t
  } = this.options, n = t, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), !n.key && n.id && (n.key = n.id), n;
};
wr = /* @__PURE__ */ new WeakSet();
nc = function() {
  const e = yr(this, _o, ec).call(this);
  let t = mr(this, Ee);
  if (t)
    return t.setOptions(e), t;
  if (e.type === "static") {
    const n = yr(this, bo, sc).call(this);
    if (!n)
      return;
    t = Xt.ensure(n, e);
  } else
    t = tc.ensure(this.container, e);
  return $a(this, Ee, t), t.on("destroyed", () => {
    $a(this, Ee, void 0);
  }), t;
};
bo = /* @__PURE__ */ new WeakSet();
sc = function() {
  let e = this.options.target;
  if (!e) {
    const { $element: t } = this;
    if (t.is("a")) {
      const n = t.attr("href");
      n != null && n.startsWith("#") && (e = n);
    }
  }
  return this.container.querySelector(e || ".modal");
};
ic.NAME = "ModalTrigger";
m(document).on("click.modal.zui", (e) => {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, pu);
  if (n) {
    const i = ic.ensure(n);
    i && (i.show(), e.preventDefault());
  }
});
let rc = class extends De {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = T(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
};
rc.NAME = "nav";
class oc extends J {
}
oc.NAME = "Nav";
oc.Component = rc;
function jn(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function gu({
  key: e,
  type: t,
  btnType: n,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = jn(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : et(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : et(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ y(Gt, { type: n, ...a });
}
const Pt = 24 * 60 * 60 * 1e3, rt = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), cs = (e, t = /* @__PURE__ */ new Date()) => (e = rt(e), t = rt(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), vr = (e, t = /* @__PURE__ */ new Date()) => rt(e).getFullYear() === rt(t).getFullYear(), mu = (e, t = /* @__PURE__ */ new Date()) => (e = rt(e), t = rt(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Pf = (e, t = /* @__PURE__ */ new Date()) => {
  e = rt(e), t = rt(t);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, Wf = (e, t) => cs(rt(t), e), Df = (e, t) => cs(rt(t).getTime() - Pt, e), If = (e, t) => cs(rt(t).getTime() + Pt, e), Of = (e, t) => cs(rt(t).getTime() - 2 * Pt, e), _r = (e, t = "yyyy-MM-dd hh:mm", n = "") => {
  if (e = rt(e), Number.isNaN(e.getDay()))
    return n;
  const s = {
    "M+": e.getMonth() + 1,
    "d+": e.getDate(),
    "h+": e.getHours(),
    "H+": e.getHours() % 12,
    "m+": e.getMinutes(),
    "s+": e.getSeconds(),
    "S+": e.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", vr(e) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, Hf = (e, t, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = _r(e, vr(e) ? s.month : s.full);
  if (cs(e, t))
    return i;
  const r = _r(t, vr(e, t) ? mu(e, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
}, Bf = (e) => {
  const t = (/* @__PURE__ */ new Date()).getTime();
  switch (e) {
    case "oneWeek":
      return t - Pt * 7;
    case "oneMonth":
      return t - Pt * 31;
    case "threeMonth":
      return t - Pt * 31 * 3;
    case "halfYear":
      return t - Pt * 183;
    case "oneYear":
      return t - Pt * 365;
    case "twoYear":
      return t - 2 * (Pt * 365);
    default:
      return 0;
  }
}, ka = (e, t, n = !0, s = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, ka(e, "day", n, s);
    case "quarter":
      e *= 3;
      break;
    case "month":
      return e *= 30, ka(e, "day", n, s);
    case "week":
      e *= 7;
      break;
    case "day":
      e *= 24;
      break;
    case "hour":
      e *= 60;
      break;
    case "minute":
      e *= 6e4;
      break;
    default:
      e = 0;
  }
  return n ? s + e : s - e;
};
function yu({
  key: e,
  type: t,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = jn(i, n);
  return s = typeof s == "function" ? s(a) : et(s, a), /* @__PURE__ */ y($l, { ...o, children: [
    r,
    s
  ] });
}
function wu({
  key: e,
  type: t,
  btnType: n,
  count: s = 12,
  pagerInfo: i,
  onClick: r,
  linkCreator: o,
  ...a
}) {
  if (!i.pageTotal)
    return;
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ y(Gt, { type: n, ...l })), c = (u, f) => {
    const p = [];
    for (let g = u; g <= f; g++) {
      l.text = g, delete l.icon, l.disabled = !1;
      const v = jn(i, g);
      o && (l.url = typeof o == "function" ? o(v) : et(o, v)), p.push(/* @__PURE__ */ y(Gt, { type: n, ...l, onClick: r }));
    }
    return p;
  };
  let d = [];
  return d = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? d = [...d, ...c(2, i.pageTotal)] : i.page < s - 2 ? d = [...d, ...c(2, s - 2), h(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? d = [...d, h(), ...c(i.pageTotal - s + 3, i.pageTotal)] : d = [...d, h(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...c(i.pageTotal, i.pageTotal)]), d;
}
function vu({
  type: e,
  pagerInfo: t,
  linkCreator: n,
  items: s = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  itemProps: r,
  ...o
}) {
  var l;
  i.items = i.items ?? s.map((h) => {
    const c = { ...t, recPerPage: h };
    return {
      ...r,
      text: `${h}`,
      active: h === t.recPerPage,
      url: typeof n == "function" ? n(c) : et(n, c)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : et(a, t), i.menu = { ...i.menu, className: T((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ y(Bl, { type: "dropdown", dropdown: i, ...o });
}
function _u({
  key: e,
  page: t,
  type: n,
  btnType: s,
  pagerInfo: i,
  size: r,
  onClick: o,
  onChange: a,
  linkCreator: l,
  ...h
}) {
  const c = { ...h };
  let d;
  const u = (g) => {
    var v;
    d = Number((v = g.target) == null ? void 0 : v.value) || 1, d = d > i.pageTotal ? i.pageTotal : d;
  }, f = (g) => {
    if (!(g != null && g.target))
      return;
    d = d <= i.pageTotal ? d : i.pageTotal;
    const v = jn(i, d);
    a && !a({ info: v, event: g }) || (g.target.href = c.url = typeof l == "function" ? l(v) : et(l, v));
  }, p = jn(i, t || 0);
  return c.url = typeof l == "function" ? l(p) : et(l, p), /* @__PURE__ */ y("div", { className: T("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ y("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: u }),
    /* @__PURE__ */ y(Gt, { type: s, ...c, onClick: f })
  ] });
}
let Ni = class extends yt {
  get pagerInfo() {
    const { page: t = 1, recTotal: n = 0, recPerPage: s = 10 } = this.props;
    return { page: t, recTotal: n, recPerPage: s, pageTotal: s ? Math.ceil(n / s) : 0 };
  }
  isBtnItem(t) {
    return t === "link" || t === "nav" || t === "size-menu" || t === "goto" || super.isBtnItem(t);
  }
  getItemRenderProps(t, n, s) {
    const i = super.getItemRenderProps(t, n, s), r = n.type || "item";
    return r === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: t.linkCreator }), i;
  }
};
Ni.NAME = "pager";
Ni.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
Ni.ItemComponents = {
  ...yt.ItemComponents,
  link: gu,
  info: yu,
  nav: wu,
  "size-menu": vu,
  goto: _u
};
class ac extends J {
}
ac.NAME = "Pager";
ac.Component = Ni;
class xo extends V {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this);
  }
  _handleClick(t) {
    t.stopPropagation();
    const { togglePop: n } = this.props, s = m(t.target);
    if (s.closest('[data-dismiss="pick"]').length)
      return n(!1);
    s.closest("a,input").length || n(!0);
  }
  _getClass() {
    const { state: t, className: n } = this.props, { open: s, disabled: i } = t;
    return T(
      "pick",
      n,
      s && "is-open focus",
      i && "disabled"
    );
  }
  _renderTrigger() {
    const { children: t, state: n } = this.props;
    return t ?? n.value;
  }
  _renderValue() {
    const { name: t, state: n } = this.props;
    return t ? /* @__PURE__ */ y("input", { type: "hidden", className: "pick-value", name: t, value: n.value }) : null;
  }
  render(t) {
    const { id: n, style: s } = t;
    return /* @__PURE__ */ y(
      "div",
      {
        id: `pick-${n}`,
        className: this._getClass(),
        style: s,
        tabIndex: -1,
        onClick: this._handleClick,
        children: [
          this._renderTrigger(),
          this._renderValue()
        ]
      }
    );
  }
}
var ke, bt, ie;
class lc extends V {
  constructor(n) {
    super(n);
    L(this, ke, void 0);
    L(this, bt, void 0);
    L(this, ie, void 0);
    this.state = { show: !1 }, B(this, ke, it()), this._handleDocClick = (s) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = m(s.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return m(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var n;
    return (n = k(this, ke)) == null ? void 0 : n.current;
  }
  get container() {
    return k(this, ie);
  }
  _handleClick(n) {
    const { togglePop: s } = this.props, i = m(n.target), r = i.closest("[data-pick-value]");
    if (r.length)
      return n.stopPropagation(), s(!1, { value: `${r.dataset("pickValue")}` });
    if (i.closest('[data-dismiss="pick"]').length)
      return s(!1);
  }
  _getClass(n) {
    const { className: s, state: i } = n, { open: r } = i;
    return T(
      "pick-pop",
      s,
      r === !0 && "in"
    );
  }
  _getContainer(n) {
    if (!k(this, ie)) {
      const s = m(n.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = m("<div>").addClass("pick-container").appendTo(s)), B(this, ie, i[0]);
    }
    return k(this, ie);
  }
  _render(n) {
    const {
      id: s,
      style: i,
      maxHeight: r,
      maxWidth: o,
      minHeight: a,
      minWidth: l
    } = n, h = m.extend({
      maxHeight: r,
      maxWidth: o,
      minHeight: a,
      minWidth: l
    }, i);
    return /* @__PURE__ */ y(
      "div",
      {
        id: `pick-pop-${s}`,
        className: this._getClass(n),
        style: h,
        ref: k(this, ke),
        onClick: this._handleClick,
        children: this._renderPop(n)
      }
    );
  }
  _renderPop(n) {
    return n.children;
  }
  layout() {
    const { element: n, trigger: s, props: i } = this, { state: r } = i;
    if (!n || !s || !r.open) {
      k(this, bt) && (k(this, bt).call(this), B(this, bt, void 0));
      return;
    }
    k(this, bt) || B(this, bt, ao(s, n, () => {
      const { placement: o, width: a } = i;
      Ri(s, n, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? Ei() : null, ar(), io(1)].filter(Boolean)
      }).then(({ x: l, y: h }) => {
        m(n).css({
          left: l,
          top: h,
          width: a === "100%" ? m(s).outerWidth() : void 0
        });
      }), a === "100%" && m(n).css({ width: m(n).width() });
    }));
  }
  componentDidMount() {
    this.layout(), m(document).on("click", this._handleDocClick);
  }
  componentWillUnmount() {
    m(document).off("click", this._handleDocClick);
    const n = k(this, bt);
    n && (n(), B(this, bt, void 0)), B(this, ie, void 0), B(this, ke, void 0);
  }
  render(n) {
    return $d(this._render(n), this._getContainer(n));
  }
}
ke = new WeakMap(), bt = new WeakMap(), ie = new WeakMap();
var cc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, mn = (e, t, n) => (cc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ca = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ze = (e, t, n, s) => (cc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ws, dt;
let dn = class extends V {
  constructor(t) {
    super(t), Ca(this, Ws, void 0), Ca(this, dt, 0), this.changeState = (n, s) => new Promise((i) => {
      this.setState(n, () => {
        s == null || s(), i(this.state);
      });
    }), this.toggle = async (n, s) => {
      const { state: i } = this;
      if (typeof n == "boolean" && n === (!!i.open && i.open !== "closing"))
        return s && await this.changeState(s), this.state;
      mn(this, dt) && (clearTimeout(mn(this, dt)), ze(this, dt, 0));
      let r = await this.changeState((a) => (n = n ?? !a.open, {
        open: n ? "opening" : "closing",
        ...s
      }));
      const { open: o } = r;
      return o === "closing" ? (await zs(200, (a) => {
        ze(this, dt, a);
      }), ze(this, dt, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await zs(50, (a) => {
        ze(this, dt, a);
      }), ze(this, dt, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: t.defaultValue,
      open: !1,
      disabled: !1
    }, ze(this, Ws, t.id ?? `_${m.guid++}`);
  }
  get id() {
    return mn(this, Ws);
  }
  _getTriggerProps(t, n) {
    return {
      id: this.id,
      state: n,
      className: t.className,
      style: t.style,
      name: t.name,
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
  componentDidMount() {
    this._afterRender(!0);
  }
  componentWillUpdate(t, n) {
    const { open: s } = this.state, { open: i } = n;
    if (s === i)
      return;
    const { onPopShow: r, onPopHide: o } = this.props;
    i && r ? r() : !i && o && o();
  }
  componentDidUpdate(t, n) {
    const { open: s, value: i } = this.state, { open: r, value: o } = n;
    if (!!s != !!r) {
      const { onPopShown: a, onPopHidden: l } = this.props;
      s && a ? a() : !s && l && l();
    }
    if (i !== o) {
      const { onChange: a } = this.props;
      a == null || a(i, o);
    }
    this._afterRender();
  }
  componentWillUnmount() {
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this), mn(this, dt) && clearTimeout(mn(this, dt));
  }
  render(t, n) {
    const { open: s } = n, i = this._getTrigger(t);
    let r;
    if (s) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ y(o, { ...this._getPopProps(t, n), children: this._renderPop(t, n) }, "pop");
    }
    return /* @__PURE__ */ y(rs, { children: [
      /* @__PURE__ */ y(i, { ...this._getTriggerProps(t, n), children: this._renderTrigger(t, n) }, "pick"),
      r
    ] });
  }
};
Ws = /* @__PURE__ */ new WeakMap();
dt = /* @__PURE__ */ new WeakMap();
dn.Trigger = xo;
dn.Pop = lc;
dn.defaultProps = {
  popContainer: "body",
  popClass: "menu-popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300
};
class hc extends J {
}
hc.NAME = "Pick";
hc.Component = dn;
var an, Zn, Qn, li;
class dc extends V {
  constructor(n) {
    super(n);
    L(this, an, it());
    L(this, Zn, it());
    L(this, Qn, (n) => {
      var i, r;
      const s = n.target.value;
      (r = (i = this.props).onSearch) == null || r.call(i, s), this.setState({ search: s });
    });
    L(this, li, (n) => {
      var s, i;
      n.stopPropagation(), (i = (s = this.props).onClear) == null || i.call(s), this.setState({ search: "" }, () => this.focus());
    });
    this.state = { search: n.defaultSearch ?? "" };
  }
  focus() {
    var n;
    (n = k(this, an).current) == null || n.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: n } = this.props;
    if (n) {
      const { current: s } = k(this, Zn), { current: i } = k(this, an);
      if (s && i) {
        const r = m(i).parent();
        r.width(Math.ceil(Math.min(s.clientWidth, r.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(n, s) {
    const { placeholder: i, inline: r } = n, { search: o } = s, a = o.trim().length > 0;
    let l;
    return r ? l = /* @__PURE__ */ y("div", { className: "picker-search-measure", ref: k(this, Zn), children: o }) : a ? l = /* @__PURE__ */ y("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: k(this, li), children: /* @__PURE__ */ y("span", { className: "close" }) }) : l = /* @__PURE__ */ y("span", { className: "magnifier" }), /* @__PURE__ */ y("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ y(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          onChange: k(this, Qn),
          onInput: k(this, Qn),
          ref: k(this, an)
        }
      ),
      l
    ] });
  }
}
an = new WeakMap(), Zn = new WeakMap(), Qn = new WeakMap(), li = new WeakMap();
var ln, ts, es, ns;
class bu extends xo {
  constructor() {
    super(...arguments);
    L(this, ln, void 0);
    L(this, ts, void 0);
    L(this, es, void 0);
    L(this, ns, void 0);
    B(this, ln, it()), B(this, ts, (n) => {
      const { onDeselect: s, state: { selections: i } } = this.props, r = m(n.target).closest(".picker-deselect-btn").dataset("value");
      s && i.length && r && s(r), n.stopPropagation();
    }), B(this, es, (n) => {
      this.props.changeState({ search: n });
    }), B(this, ns, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (n) => /* @__PURE__ */ y("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ y("span", { className: "text", children: n.text ?? n.value }),
      /* @__PURE__ */ y("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: k(this, ts), "data-value": n.value, children: /* @__PURE__ */ y("span", { className: "close" }) })
    ] }, n.value);
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = k(this, ln).current) == null || s.focus();
  }
  _getClass() {
    return T(
      super._getClass(),
      "picker-select picker-select-multi form-control"
    );
  }
  _renderSearch() {
    const { state: { search: n }, searchHint: s } = this.props;
    return /* @__PURE__ */ y(
      dc,
      {
        inline: !0,
        ref: k(this, ln),
        defaultSearch: n,
        onSearch: k(this, es),
        onClear: k(this, ns),
        placeholder: s
      }
    );
  }
  _renderTrigger() {
    const { state: { selections: n = [], open: s }, search: i, placeholder: r, children: o } = this.props, a = s && i;
    return !a && !n.length ? /* @__PURE__ */ y("span", { className: "picker-select-placeholder", children: r }, "selections") : [
      /* @__PURE__ */ y("div", { className: "picker-multi-selections", children: [
        n.map(this._renderSelection),
        a ? this._renderSearch() : null
      ] }, "selections"),
      o,
      /* @__PURE__ */ y("span", { class: "caret" }, "caret")
    ];
  }
}
ln = new WeakMap(), ts = new WeakMap(), es = new WeakMap(), ns = new WeakMap();
var ss, ci, hi, di, ui, uc;
class xu extends xo {
  constructor() {
    super(...arguments);
    L(this, ui);
    L(this, ss, it());
    L(this, ci, (n) => {
      this.props.onClear(), this.props.togglePop(!0, { search: "" }), n.stopPropagation();
    });
    L(this, hi, (n) => {
      this.props.changeState({ search: n });
    });
    L(this, di, () => {
      this.props.togglePop(!0, { search: "" });
    });
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = k(this, ss).current) == null || s.focus();
  }
  _getClass() {
    return T(
      super._getClass(),
      "picker-select picker-select-single form-control"
    );
  }
  _renderSearch() {
    const { state: { search: n } } = this.props;
    return /* @__PURE__ */ y(
      dc,
      {
        ref: k(this, ss),
        defaultSearch: n,
        onSearch: k(this, hi),
        onClear: k(this, di),
        placeholder: pe(this, ui, uc).call(this)
      }
    );
  }
  _renderTrigger() {
    const { children: n, state: { selections: s = [], open: i }, placeholder: r, search: o } = this.props, [a] = s, l = i && o;
    let h;
    l ? h = this._renderSearch() : a ? h = /* @__PURE__ */ y("span", { className: "picker-single-selection", children: a.text ?? a.value }, "main") : h = /* @__PURE__ */ y("span", { className: "picker-select-placeholder", children: r }, "main");
    const c = a && !l ? /* @__PURE__ */ y("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", onClick: k(this, ci), children: /* @__PURE__ */ y("span", { className: "close" }) }, "deselect") : null;
    return [
      h,
      n,
      c,
      l ? null : /* @__PURE__ */ y("span", { className: "caret" }, "caret")
    ];
  }
}
ss = new WeakMap(), ci = new WeakMap(), hi = new WeakMap(), di = new WeakMap(), ui = new WeakSet(), uc = function() {
  const { searchHint: n, state: { value: s, selections: i } } = this.props;
  let r = n;
  if (r === void 0) {
    const o = i.find((a) => a.value === s);
    o && typeof o.text == "string" ? r = o.text : r = s;
  }
  return r;
};
const $u = (e, t) => e.reduce((n, s) => [...n].reduce((i, r) => {
  if (typeof r != "string")
    return i.push(r), i;
  const o = r.toLowerCase().split(s);
  if (o.length === 1)
    return i.push(r), i;
  let a = 0;
  return o.forEach((l, h) => {
    h && (i.push(/* @__PURE__ */ y("span", { class: "picker-menu-item-match", children: r.substring(a, a + s.length) })), a += s.length), i.push(r.substring(a, a + l.length)), a += l.length;
  }), i;
}, []), t);
var fi, pi, fc, gi, pc, mi;
class ku extends lc {
  constructor() {
    super(...arguments);
    L(this, pi);
    L(this, gi);
    L(this, fi, it());
    L(this, mi, ({ item: n }) => {
      const s = n.key, { multiple: i, onToggleValue: r, onSelect: o, togglePop: a } = this.props;
      i ? r(s) : (o(s), a(!1, { search: "" }));
    });
  }
  componentDidMount() {
    super.componentDidMount();
    const n = this.element;
    n && m(n).on("mouseenter.picker.zui", ".menu-item", (s) => {
      const i = m(s.currentTarget);
      this.setHoverItem(i.children("a").dataset("value"));
    });
  }
  componentWillUnmount() {
    super.componentDidMount();
    const n = this.element;
    n && m(n).off(".picker.zui");
  }
  setHoverItem(n) {
    this.props.changeState({ hoverItem: n }, () => {
      const s = pe(this, pi, fc).call(this);
      s != null && s.length && s[0].scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _getClass(n) {
    return T(
      super._getClass(n),
      "picker-menu"
    );
  }
  _renderPop(n) {
    const { menu: s } = n;
    return /* @__PURE__ */ y(
      Si,
      {
        ref: k(this, fi),
        className: "picker-menu-list",
        items: pe(this, gi, pc).call(this),
        onClickItem: k(this, mi),
        ...s
      }
    );
  }
}
fi = new WeakMap(), pi = new WeakSet(), fc = function() {
  const n = this.element;
  if (n)
    return m(n).find(".menu-item>a.hover");
}, gi = new WeakSet(), pc = function() {
  const { selections: n, items: s, hoverItem: i, search: r } = this.props.state, o = new Set(n.map((c) => c.value));
  let a = !1;
  const l = m.unique(r.toLowerCase().split(" ").filter((c) => c.length)), h = s.reduce((c, d) => {
    const {
      value: u = "",
      keys: f,
      text: p,
      className: g,
      ...v
    } = d;
    u === i && (a = !0);
    const w = `${p ?? u}`;
    return c.push({
      key: u,
      active: o.has(u),
      text: $u(l, [w]),
      className: T(g, { hover: u === i }),
      "data-value": u,
      ...v
    }), c;
  }, []);
  return !a && h.length && (h[0].className = T(h[0].className, "hover")), h;
}, mi = new WeakMap();
var $o = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Jt = (e, t, n) => ($o(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Fe = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ge = (e, t, n, s) => ($o(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ft = (e, t, n) => ($o(e, t, "access private method"), n), En, Nt, ve, je, Dn, ko, gc, te, _e;
let Co = class extends dn {
  constructor(t) {
    super(t), Fe(this, je), Fe(this, ko), Fe(this, te), Fe(this, En, void 0), Fe(this, Nt, void 0), Fe(this, ve, 0), this.toggleValue = (n, s) => {
      if (!this.props.multiple)
        return s || n !== this.value ? ft(this, te, _e).call(this, n) : ft(this, te, _e).call(this);
      const { valueList: i } = this, r = i.indexOf(n);
      if (s !== r >= 0)
        return r > -1 ? i.splice(r, 1) : i.push(n), ft(this, te, _e).call(this, i);
    }, this.deselect = (n) => {
      const { valueList: s } = this, i = new Set(ft(this, je, Dn).call(this, n)), r = s.filter((o) => !i.has(o));
      ft(this, te, _e).call(this, r);
    }, this.clear = () => {
      ft(this, te, _e).call(this);
    }, this.select = (n) => {
      const s = ft(this, je, Dn).call(this, n), i = this.props.multiple ? [...this.valueList, ...s] : s[0];
      return ft(this, te, _e).call(this, i);
    }, this.isSelected = (n) => this.valueList.includes(n), m.extend(this.state, {
      loading: !1,
      search: "",
      items: t.items,
      selections: []
    });
  }
  get value() {
    return this.state.value;
  }
  get valueList() {
    return ft(this, je, Dn).call(this, this.state.value);
  }
  async load() {
    let t = Jt(this, Nt);
    t && t.abort(), t = new AbortController(), ge(this, Nt, t);
    const { items: n, searchDelay: s } = this.props, { search: i } = this.state;
    let r = [];
    if (typeof n == "function") {
      if (await zs(s || 500), Jt(this, Nt) !== t || (r = await n(i, { signal: t.signal }), Jt(this, Nt) !== t))
        return r;
    } else if (i.length) {
      const o = m.unique(i.toLowerCase().split(" ").filter((a) => a.length));
      o.length ? r = n.reduce((a, l) => {
        const {
          value: h,
          keys: c = "",
          text: d
        } = l;
        return o.every((u) => h.toLowerCase().includes(u) || c.toLowerCase().includes(u) || typeof d == "string" && d.toLowerCase().includes(u)) && a.push(l), a;
      }, []) : r = n;
    } else
      r = n;
    return ge(this, Nt, void 0), r;
  }
  async update(t) {
    const { state: n, props: s } = this, i = Jt(this, En) || {}, r = {};
    if (ge(this, En, i), (t || i.search !== n.search || s.items !== i.items) && (r.items = await this.load(), r.loading = !1, i.items = s.items, i.search = n.search), t || i.value !== n.value) {
      const o = r.items || n.items, a = new Map(o.map((l) => [l.value, l]));
      r.selections = this.valueList.map((l) => a.get(l) || { value: l }), i.value = n.value;
    }
    Object.keys(r).length && await this.changeState(r);
  }
  async tryUpdate() {
    Jt(this, ve) && clearTimeout(Jt(this, ve)), ge(this, ve, window.setTimeout(() => {
      ge(this, ve, 0), this.update();
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
    (t = Jt(this, Nt)) == null || t.abort(), ge(this, Nt, void 0), ge(this, En, void 0), clearTimeout(Jt(this, ve)), super.componentWillUnmount();
  }
  _getTriggerProps(t, n) {
    return {
      ...super._getTriggerProps(t, n),
      multiple: t.multiple,
      placeholder: t.placeholder,
      search: t.search,
      searchHint: t.searchHint,
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
    return t.Trigger || (t.multiple ? bu : xu);
  }
};
En = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakMap();
ve = /* @__PURE__ */ new WeakMap();
je = /* @__PURE__ */ new WeakSet();
Dn = function(e) {
  return typeof e == "string" ? e.length ? m.unique(e.split(this.props.valueSplitter ?? ",")) : [] : Array.isArray(e) ? m.unique(e) : [];
};
ko = /* @__PURE__ */ new WeakSet();
gc = function(e) {
  const t = ft(this, je, Dn).call(this, e);
  return t.length ? t.join(this.props.valueSplitter ?? ",") : void 0;
};
te = /* @__PURE__ */ new WeakSet();
_e = function(e) {
  const t = e === void 0 ? e : ft(this, ko, gc).call(this, e);
  if (t !== this.state.value)
    return this.changeState({ value: t });
};
Co.defaultProps = {
  ...dn.defaultProps,
  className: "picker",
  valueSplitter: ",",
  search: !0
};
Co.Pop = ku;
class mc extends J {
}
mc.NAME = "Picker";
mc.Component = Co;
class yc extends lt {
  constructor() {
    super(...arguments), this.cleanup = () => {
    }, this.toggle = () => {
    };
  }
  init() {
    this.initTarget(), this.initMask(), this.initArrow(), this.createPopper(), this.toggle = () => {
      if (this.$target.hasClass("hidden")) {
        this.show();
        return;
      }
      this.hide();
    }, this.$element.addClass("z-50").on("click", this.toggle);
  }
  destroy() {
    this.cleanup(), this.$element.off("click", this.toggle), this.$target.remove();
  }
  computePositionConfig() {
    const { placement: t, strategy: n } = this.options, s = {
      placement: t,
      strategy: n,
      middleware: []
    }, { flip: i, shift: r, arrow: o, offset: a } = this.options;
    return i && s.middleware.push(Ei()), r && s.middleware.push(r === !0 ? ar() : ar(r)), o && s.middleware.push(or({ element: this.$arrow[0] })), a && s.middleware.push(io(a)), s;
  }
  createPopper() {
    const t = this.element, n = this.$target[0];
    this.cleanup = ao(t, n, () => {
      Ri(t, n, this.computePositionConfig()).then(({ x: s, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(n.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !or || !o.arrow)
          return;
        const { x: a, y: l } = o.arrow, h = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[r.split("-")[0]];
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
    const t = this.$element.data("target");
    if (!t)
      throw new Error("popsvers trigger must have target.");
    const n = m(t);
    if (!n.length)
      throw new Error("popovers target must exist.");
    const { strategy: s } = this.options;
    n.addClass(s), n.addClass("hidden"), n.addClass("z-50"), n.on("click", (i) => {
      m(i.target).data("dismiss") === "popovers" && this.hide();
    }), this.$target = n;
  }
  show() {
    this.$target.removeClass("hidden"), this.$mask.removeClass("hidden");
  }
  hide() {
    this.$target.addClass("hidden"), this.$mask.addClass("hidden");
  }
  initMask() {
    const t = m('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
    t.on("click", () => {
      this.hide();
    }), this.$target.parent().append(t), this.$mask = t;
  }
  initArrow() {
    const { arrow: t } = this.options;
    t && (this.$arrow = m('<div class="fl-arrow bg-inherit rotate-45 absolute w-2 h-2"></div>'), this.$target.append(this.$arrow));
  }
}
yc.NAME = "Popovers";
yc.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1
};
class wc extends J {
}
wc.NAME = "Toolbar";
wc.Component = yt;
function hs(e) {
  return e.split("-")[1];
}
function So(e) {
  return e === "y" ? "height" : "width";
}
function Ze(e) {
  return e.split("-")[0];
}
function Ai(e) {
  return ["top", "bottom"].includes(Ze(e)) ? "x" : "y";
}
function Sa(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = Ai(t), l = So(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let d;
  switch (Ze(t)) {
    case "top":
      d = { x: r, y: s.y - i.height };
      break;
    case "bottom":
      d = { x: r, y: s.y + s.height };
      break;
    case "right":
      d = { x: s.x + s.width, y: o };
      break;
    case "left":
      d = { x: s.x - i.width, y: o };
      break;
    default:
      d = { x: s.x, y: s.y };
  }
  switch (hs(t)) {
    case "start":
      d[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      d[a] += h * (n && c ? -1 : 1);
  }
  return d;
}
const Cu = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: d } = Sa(h, s, l), u = s, f = {}, p = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: v, fn: w } = a[g], { x: _, y: $, data: S, reset: C } = await w({ x: c, y: d, initialPlacement: s, placement: u, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, d = $ ?? d, f = { ...f, [v]: { ...f[v], ...S } }, C && p <= 50 && (p++, typeof C == "object" && (C.placement && (u = C.placement), C.rects && (h = C.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : C.rects), { x: c, y: d } = Sa(h, u, l)), g = -1);
  }
  return { x: c, y: d, placement: u, strategy: i, middlewareData: f };
};
function vc(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Zs(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Su(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: f = 0 } = t, p = vc(f), g = a[u ? d === "floating" ? "reference" : "floating" : d], v = Zs(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(g))) == null || n ? g : g.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = d === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, S = Zs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - S.top + p.top) / $.y, bottom: (S.bottom - v.bottom + p.bottom) / $.y, left: (v.left - S.left + p.left) / $.x, right: (S.right - v.right + p.right) / $.x };
}
const Eu = Math.min, Mu = Math.max;
function Tu(e, t, n) {
  return Mu(e, Eu(t, n));
}
const Ru = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: s = 0 } = e || {}, { x: i, y: r, placement: o, rects: a, platform: l } = t;
  if (n == null)
    return {};
  const h = vc(s), c = { x: i, y: r }, d = Ai(o), u = So(d), f = await l.getDimensions(n), p = d === "y" ? "top" : "left", g = d === "y" ? "bottom" : "right", v = a.reference[u] + a.reference[d] - c[d] - a.floating[u], w = c[d] - a.reference[d], _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let $ = _ ? d === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0;
  $ === 0 && ($ = a.floating[u]);
  const S = v / 2 - w / 2, C = h[p], M = $ - f[u] - h[g], N = $ / 2 - f[u] / 2 + S, A = Tu(C, N, M), O = hs(o) != null && N != A && a.reference[u] / 2 - (N < C ? h[p] : h[g]) - f[u] / 2 < 0;
  return { [d]: c[d] - (O ? N < C ? C - N : M - N : 0), data: { [d]: A, centerOffset: N - A } };
} }), Nu = ["top", "right", "bottom", "left"];
Nu.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Au = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Qs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Au[t]);
}
function Lu(e, t, n) {
  n === void 0 && (n = !1);
  const s = hs(e), i = Ai(e), r = So(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Qs(o)), { main: o, cross: Qs(o) };
}
const Pu = { start: "end", end: "start" };
function Xi(e) {
  return e.replace(/start|end/g, (t) => Pu[t]);
}
const Wu = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...g } = e, v = Ze(s), w = Ze(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = d || (w || !p ? [Qs(o)] : function(b) {
      const R = Qs(b);
      return [Xi(b), R, Xi(R)];
    }(o));
    d || f === "none" || $.push(...function(b, R, D, P) {
      const I = hs(b);
      let W = function(F, ct, Et) {
        const us = ["left", "right"], un = ["right", "left"], fs = ["top", "bottom"], Hi = ["bottom", "top"];
        switch (F) {
          case "top":
          case "bottom":
            return Et ? ct ? un : us : ct ? us : un;
          case "left":
          case "right":
            return ct ? fs : Hi;
          default:
            return [];
        }
      }(Ze(b), D === "start", P);
      return I && (W = W.map((F) => F + "-" + I), R && (W = W.concat(W.map(Xi)))), W;
    }(o, p, f, _));
    const S = [o, ...$], C = await Su(t, g), M = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && M.push(C[v]), c) {
      const { main: b, cross: R } = Lu(s, r, _);
      M.push(C[b], C[R]);
    }
    if (N = [...N, { placement: s, overflows: M }], !M.every((b) => b <= 0)) {
      var A;
      const b = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, R = S[b];
      if (R)
        return { data: { index: b, overflows: N }, reset: { placement: R } };
      let D = "bottom";
      switch (u) {
        case "bestFit": {
          var O;
          const P = (O = N.map((I) => [I, I.overflows.filter((W) => W > 0).reduce((W, F) => W + F, 0)]).sort((I, W) => I[1] - W[1])[0]) == null ? void 0 : O[0].placement;
          P && (D = P);
          break;
        }
        case "initialPlacement":
          D = o;
      }
      if (s !== D)
        return { reset: { placement: D } };
    }
    return {};
  } };
}, Du = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), d = Ze(a), u = hs(a), f = Ai(a) === "x", p = ["left", "top"].includes(d) ? -1 : 1, g = c && f ? -1 : 1, v = typeof o == "function" ? o(r) : o;
      let { mainAxis: w, crossAxis: _, alignmentAxis: $ } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return u && typeof $ == "number" && (_ = u === "end" ? -1 * $ : $), f ? { x: _ * g, y: w * p } : { x: w * p, y: _ * g };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function ot(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function kt(e) {
  return ot(e).getComputedStyle(e);
}
function he(e) {
  return bc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let xs;
function _c() {
  if (xs)
    return xs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (xs = e.brands.map((t) => t.brand + "/" + t.version).join(" "), xs) : navigator.userAgent;
}
function jt(e) {
  return e instanceof ot(e).HTMLElement;
}
function gt(e) {
  return e instanceof ot(e).Element;
}
function bc(e) {
  return e instanceof ot(e).Node;
}
function Ea(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ot(e).ShadowRoot || e instanceof ShadowRoot;
}
function Li(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = kt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function Iu(e) {
  return ["table", "td", "th"].includes(he(e));
}
function br(e) {
  const t = /firefox/i.test(_c()), n = kt(e), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function xc() {
  return !/^((?!chrome|android).)*safari/i.test(_c());
}
function Eo(e) {
  return ["html", "body", "#document"].includes(he(e));
}
const Ma = Math.min, In = Math.max, ti = Math.round;
function $c(e) {
  const t = kt(e);
  let n = parseFloat(t.width), s = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, o = ti(n) !== i || ti(s) !== r;
  return o && (n = i, s = r), { width: n, height: s, fallback: o };
}
function kc(e) {
  return gt(e) ? e : e.contextElement;
}
const Cc = { x: 1, y: 1 };
function Qe(e) {
  const t = kc(e);
  if (!jt(t))
    return Cc;
  const n = t.getBoundingClientRect(), { width: s, height: i, fallback: r } = $c(t);
  let o = (r ? ti(n.width) : n.width) / s, a = (r ? ti(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function Ae(e, t, n, s) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = kc(e);
  let l = Cc;
  t && (s ? gt(s) && (l = Qe(s)) : l = Qe(e));
  const h = a ? ot(a) : window, c = !xc() && n;
  let d = (o.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, u = (o.top + (c && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, f = o.width / l.x, p = o.height / l.y;
  if (a) {
    const g = ot(a), v = s && gt(s) ? ot(s) : s;
    let w = g.frameElement;
    for (; w && s && v !== g; ) {
      const _ = Qe(w), $ = w.getBoundingClientRect(), S = getComputedStyle(w);
      $.x += (w.clientLeft + parseFloat(S.paddingLeft)) * _.x, $.y += (w.clientTop + parseFloat(S.paddingTop)) * _.y, d *= _.x, u *= _.y, f *= _.x, p *= _.y, d += $.x, u += $.y, w = ot(w).frameElement;
    }
  }
  return { width: f, height: p, top: u, right: d + f, bottom: u + p, left: d, x: d, y: u };
}
function le(e) {
  return ((bc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Pi(e) {
  return gt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Sc(e) {
  return Ae(le(e)).left + Pi(e).scrollLeft;
}
function Ou(e, t, n) {
  const s = jt(t), i = le(t), r = Ae(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((he(t) !== "body" || Li(i)) && (o = Pi(t)), jt(t)) {
      const l = Ae(t, !0);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      i && (a.x = Sc(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
function Yn(e) {
  if (he(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (Ea(e) ? e.host : null) || le(e);
  return Ea(t) ? t.host : t;
}
function Ta(e) {
  return jt(e) && kt(e).position !== "fixed" ? e.offsetParent : null;
}
function Ra(e) {
  const t = ot(e);
  let n = Ta(e);
  for (; n && Iu(n) && kt(n).position === "static"; )
    n = Ta(n);
  return n && (he(n) === "html" || he(n) === "body" && kt(n).position === "static" && !br(n)) ? t : n || function(s) {
    let i = Yn(s);
    for (; jt(i) && !Eo(i); ) {
      if (br(i))
        return i;
      i = Yn(i);
    }
    return null;
  }(e) || t;
}
function Ec(e) {
  const t = Yn(e);
  return Eo(t) ? e.ownerDocument.body : jt(t) && Li(t) ? t : Ec(t);
}
function On(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Ec(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = ot(s);
  return i ? t.concat(r, r.visualViewport || [], Li(s) ? s : []) : t.concat(s, On(s));
}
function Na(e, t, n) {
  return t === "viewport" ? Zs(function(s, i) {
    const r = ot(s), o = le(s), a = r.visualViewport;
    let l = o.clientWidth, h = o.clientHeight, c = 0, d = 0;
    if (a) {
      l = a.width, h = a.height;
      const u = xc();
      (u || !u && i === "fixed") && (c = a.offsetLeft, d = a.offsetTop);
    }
    return { width: l, height: h, x: c, y: d };
  }(e, n)) : gt(t) ? function(s, i) {
    const r = Ae(s, !0, i === "fixed"), o = r.top + s.clientTop, a = r.left + s.clientLeft, l = jt(s) ? Qe(s) : { x: 1, y: 1 }, h = s.clientWidth * l.x, c = s.clientHeight * l.y, d = a * l.x, u = o * l.y;
    return { top: u, left: d, right: d + h, bottom: u + c, x: d, y: u, width: h, height: c };
  }(t, n) : Zs(function(s) {
    var i;
    const r = le(s), o = Pi(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, l = In(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = In(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let c = -o.scrollLeft + Sc(s);
    const d = -o.scrollTop;
    return kt(a || r).direction === "rtl" && (c += In(r.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: c, y: d };
  }(le(e)));
}
const Hu = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const d = c.get(h);
    if (d)
      return d;
    let u = On(h).filter((v) => gt(v) && he(v) !== "body"), f = null;
    const p = kt(h).position === "fixed";
    let g = p ? Yn(h) : h;
    for (; gt(g) && !Eo(g); ) {
      const v = kt(g), w = br(g);
      (p ? w || f : w || v.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = v : u = u.filter((_) => _ !== g), g = Yn(g);
    }
    return c.set(h, u), u;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const d = Na(t, c, i);
    return h.top = In(d.top, h.top), h.right = Ma(d.right, h.right), h.bottom = Ma(d.bottom, h.bottom), h.left = In(d.left, h.left), h;
  }, Na(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = jt(n), r = le(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((he(n) !== "body" || Li(r)) && (o = Pi(n)), jt(n))) {
    const h = Ae(n);
    a = Qe(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: gt, getDimensions: function(e) {
  return $c(e);
}, getOffsetParent: Ra, getDocumentElement: le, getScale: Qe, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || Ra, r = this.getDimensions;
  return { reference: Ou(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => kt(e).direction === "rtl" };
function Bu(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, l = i && !a, h = l || r ? [...gt(e) ? On(e) : e.contextElement ? On(e.contextElement) : [], ...On(t)] : [];
  h.forEach((f) => {
    l && f.addEventListener("scroll", n, { passive: !0 }), r && f.addEventListener("resize", n);
  });
  let c, d = null;
  if (o) {
    let f = !0;
    d = new ResizeObserver(() => {
      f || n(), f = !1;
    }), gt(e) && !a && d.observe(e), gt(e) || !e.contextElement || a || d.observe(e.contextElement), d.observe(t);
  }
  let u = a ? Ae(e) : null;
  return a && function f() {
    const p = Ae(e);
    !u || p.x === u.x && p.y === u.y && p.width === u.width && p.height === u.height || n(), u = p, c = requestAnimationFrame(f);
  }(), n(), () => {
    var f;
    h.forEach((p) => {
      l && p.removeEventListener("scroll", n), r && p.removeEventListener("resize", n);
    }), (f = d) == null || f.disconnect(), d = null, a && cancelAnimationFrame(c);
  };
}
const zu = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Hu, ...n }, r = { ...i.platform, _c: s };
  return Cu(e, t, { ...i, platform: r });
};
var Mo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, U = (e, t, n) => (Mo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), j = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Le = (e, t, n, s) => (Mo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), $t = (e, t, n) => (Mo(e, t, "access private method"), n), Hn, Bn, Mn, Ye, nt, xr, ei, Wi, To, Ro, Mc, $r, Tc, No, Rc, Ao, Nc, Lo, Ac, kr, Lc, Po, Pc, zn, Cr, Wc;
const Ke = class extends lt {
  constructor() {
    super(...arguments), j(this, Wi), j(this, Ro), j(this, $r), j(this, No), j(this, Ao), j(this, Lo), j(this, kr), j(this, Po), j(this, Cr), j(this, Hn, !1), j(this, Bn, void 0), j(this, Mn, 0), j(this, Ye, void 0), j(this, nt, void 0), j(this, xr, void 0), j(this, ei, void 0), this.hideLater = () => {
      U(this, zn).call(this), Le(this, Mn, window.setTimeout(this.hide.bind(this), 100));
    }, j(this, zn, () => {
      clearTimeout(U(this, Mn)), Le(this, Mn, 0);
    });
  }
  get isShown() {
    var e;
    return (e = U(this, Ye)) == null ? void 0 : e.classList.contains(Ke.CLASS_SHOW);
  }
  get tooltip() {
    return U(this, Ye) || $t(this, $r, Tc).call(this);
  }
  get trigger() {
    return U(this, xr) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${Ke.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: e } = this;
    e !== document.body && !e.hasAttribute("data-toggle") && e.setAttribute("data-toggle", "tooltip");
  }
  show(e) {
    return this.setOptions(e), !U(this, Hn) && this.isHover && $t(this, Cr, Wc).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(Ke.CLASS_SHOW), $t(this, kr, Lc).call(this), !0;
  }
  hide() {
    var t;
    var e;
    return (e = U(this, ei)) == null || e.call(this), this.element.classList.remove(this.elementShowClass), (t = U(this, Ye)) == null || t.classList.remove(Ke.CLASS_SHOW), !0;
  }
  toggle(e) {
    return this.isShown ? this.hide() : this.show(e);
  }
  destroy() {
    U(this, Hn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", U(this, zn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(e) {
    e instanceof Event && (e = { event: e });
    const { exclude: t } = e || {}, n = this.getAll().entries(), s = new Set(t || []);
    for (const [i, r] of n)
      s.has(i) || r.hide();
  }
};
let Ct = Ke;
Hn = /* @__PURE__ */ new WeakMap();
Bn = /* @__PURE__ */ new WeakMap();
Mn = /* @__PURE__ */ new WeakMap();
Ye = /* @__PURE__ */ new WeakMap();
nt = /* @__PURE__ */ new WeakMap();
xr = /* @__PURE__ */ new WeakMap();
ei = /* @__PURE__ */ new WeakMap();
Wi = /* @__PURE__ */ new WeakSet();
To = function() {
  const { arrow: e } = this.options;
  return typeof e == "number" ? e : 8;
};
Ro = /* @__PURE__ */ new WeakSet();
Mc = function() {
  const e = $t(this, Wi, To).call(this);
  return Le(this, nt, document.createElement("div")), U(this, nt).style.position = this.options.strategy, U(this, nt).style.width = `${e}px`, U(this, nt).style.height = `${e}px`, U(this, nt).style.transform = "rotate(45deg)", U(this, nt);
};
$r = /* @__PURE__ */ new WeakSet();
Tc = function() {
  var n;
  const e = Ke.TOOLTIP_CLASS;
  let t;
  if (this.isDynamic) {
    t = document.createElement("div");
    const s = this.options.className ? this.options.className.split(" ") : [];
    let i = [e, this.options.type || ""];
    i = i.concat(s), t.classList.add(...i), t[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "";
  } else if (this.element) {
    const s = this.element.getAttribute("href") ?? this.element.dataset.target;
    if (s != null && s.startsWith("#") && (t = document.querySelector(s)), !t) {
      const i = this.element.nextElementSibling;
      i != null && i.classList.contains(e) ? t = i : t = (n = this.element.parentNode) == null ? void 0 : n.querySelector(`.${e}`);
    }
  }
  if (this.options.arrow && (t == null || t.append($t(this, Ro, Mc).call(this))), !t)
    throw new Error("Tooltip: Cannot find tooltip element");
  return t.style.width = "max-content", t.style.position = "absolute", t.style.top = "0", t.style.left = "0", document.body.appendChild(t), Le(this, Ye, t), t;
};
No = /* @__PURE__ */ new WeakSet();
Rc = function() {
  var i;
  const e = $t(this, Wi, To).call(this), { strategy: t, placement: n } = this.options, s = {
    middleware: [Du(e), Wu()],
    strategy: t,
    placement: n
  };
  return this.options.arrow && U(this, nt) && ((i = s.middleware) == null || i.push(Ru({ element: U(this, nt) }))), s;
};
Ao = /* @__PURE__ */ new WeakSet();
Nc = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
Lo = /* @__PURE__ */ new WeakSet();
Ac = function(e) {
  return e === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : e === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : e === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
};
kr = /* @__PURE__ */ new WeakSet();
Lc = function() {
  const e = $t(this, No, Rc).call(this), t = $t(this, Po, Pc).call(this);
  Le(this, ei, Bu(t, this.tooltip, () => {
    zu(t, this.tooltip, e).then(({ x: n, y: s, middlewareData: i, placement: r }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const o = r.split("-")[0], a = $t(this, Ao, Nc).call(this, o);
      if (i.arrow && U(this, nt)) {
        const { x: l, y: h } = i.arrow;
        Object.assign(U(this, nt).style, {
          left: l != null ? `${l}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-U(this, nt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...$t(this, Lo, Ac).call(this, o)
        });
      }
    });
  }));
};
Po = /* @__PURE__ */ new WeakSet();
Pc = function() {
  return U(this, Bn) || Le(this, Bn, {
    getBoundingClientRect: () => {
      const { element: e } = this;
      if (e instanceof MouseEvent) {
        const { clientX: t, clientY: n } = e;
        return {
          width: 0,
          height: 0,
          top: n,
          right: t,
          bottom: n,
          left: t
        };
      }
      return e instanceof HTMLElement ? e.getBoundingClientRect() : e;
    },
    contextElement: this.element
  }), U(this, Bn);
};
zn = /* @__PURE__ */ new WeakMap();
Cr = /* @__PURE__ */ new WeakSet();
Wc = function() {
  const { tooltip: e } = this;
  e.addEventListener("mouseenter", U(this, zn)), e.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), Le(this, Hn, !0);
};
Ct.NAME = "tooltip";
Ct.TOOLTIP_CLASS = "tooltip";
Ct.CLASS_SHOW = "show";
Ct.MENU_SELECTOR = '[data-toggle="tooltip"]:not(.disabled):not(:disabled)';
Ct.DEFAULT = {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
};
document.addEventListener("click", function(e) {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, Ct.MENU_SELECTOR);
  if (n) {
    const i = Ct.ensure(n);
    i.options.trigger === "click" && i.toggle();
  } else
    Ct.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const t = e.target, n = (i = t.closest) == null ? void 0 : i.call(t, Ct.MENU_SELECTOR);
  if (!n)
    return;
  const s = Ct.ensure(n);
  s.isHover && s.show();
});
function Fu({
  type: e,
  component: t,
  className: n,
  children: s,
  style: i,
  attrs: r,
  url: o,
  disabled: a,
  active: l,
  icon: h,
  text: c,
  target: d,
  trailingIcon: u,
  hint: f,
  checked: p,
  actions: g,
  show: v,
  level: w = 0,
  items: _,
  ...$
}) {
  const S = Array.isArray(g) ? { items: g } : g;
  return S && (S.btnProps || (S.btnProps = { size: "sm" }), S.className = T("tree-actions not-nested-toggle", S.className)), /* @__PURE__ */ y(
    "div",
    {
      className: T("tree-item-content", n, { disabled: a, active: l }),
      title: f,
      "data-target": d,
      style: Object.assign({ paddingLeft: `calc(${w} * var(--tree-indent, 20px))` }, i),
      "data-level": w,
      ...r,
      ...$,
      children: [
        /* @__PURE__ */ y("span", { class: `tree-toggle-icon${_ ? " state" : ""}`, children: _ ? /* @__PURE__ */ y("span", { class: `caret-${v ? "down" : "right"}` }) : null }),
        typeof p == "boolean" ? /* @__PURE__ */ y("div", { class: `tree-checkbox checkbox-primary${p ? " checked" : ""}`, children: /* @__PURE__ */ y("label", {}) }) : null,
        /* @__PURE__ */ y(qn, { icon: h, className: "tree-icon" }),
        o ? /* @__PURE__ */ y("a", { className: "text tree-link not-nested-toggle", href: o, children: c }) : /* @__PURE__ */ y("span", { class: "text", children: c }),
        typeof s == "function" ? s() : s,
        S ? /* @__PURE__ */ y(yt, { ...S }) : null,
        /* @__PURE__ */ y(qn, { icon: u, className: "tree-trailing-icon" })
      ]
    }
  );
}
let Wo = class extends Ci {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "tree";
  }
  getNestedMenuProps(t) {
    const n = super.getNestedMenuProps(t), { collapsedIcon: s, expandedIcon: i, normalIcon: r, itemActions: o } = this.props;
    return {
      collapsedIcon: s,
      expandedIcon: i,
      normalIcon: r,
      itemActions: o,
      ...n
    };
  }
  getItemRenderProps(t, n, s) {
    const i = super.getItemRenderProps(t, n, s), { collapsedIcon: r, expandedIcon: o, normalIcon: a, itemActions: l } = t;
    return i.icon === void 0 && (i.icon = i.items ? i.show ? o : r : a), i.actions === void 0 && l && (i.actions = typeof l == "function" ? l(n) : l), i;
  }
  renderToggleIcon() {
    return null;
  }
  beforeRender() {
    const t = super.beforeRender(), { hover: n } = this.props;
    return n && (t.className = T(t.className, "tree-hover")), t;
  }
};
Wo.ItemComponents = {
  item: Fu
};
Wo.NAME = "tree";
class Dc extends J {
}
Dc.NAME = "Tree";
Dc.Component = Wo;
var is, yi, wi, vi;
class Uu extends V {
  constructor(n) {
    super(n);
    L(this, is, it());
    L(this, yi, (n) => {
      n.stopPropagation(), tt.show({
        event: n.target,
        placement: "bottom-end",
        menu: {
          onClickItem: ({ item: s }) => {
            var i;
            ((i = s.attrs) == null ? void 0 : i["data-type"]) === "refresh" && this.load();
          }
        },
        ...this.props.block.menu
      });
    });
    L(this, wi, (n) => {
      var r, o, a;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (n.clientY - i.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (r = n.dataTransfer) == null || r.setData("application/id", this.props.block.id), (a = (o = this.props).onDragStart) == null || a.call(o, n);
    });
    L(this, vi, (n) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, n);
    });
    this.state = { content: /* @__PURE__ */ y("div", { class: "dashboard-block-body", children: n.block.content }) };
  }
  get element() {
    return k(this, is).current;
  }
  componentDidMount() {
    this.load(), m(this.element).on("load.zui.dashboard", this.load.bind(this));
  }
  componentWillUnmount() {
    m(this.element).off("load.zui.dashboard");
  }
  load() {
    const { block: n } = this.props;
    let s = n.fetch;
    if (!s || this.state.loading)
      return;
    typeof s == "string" ? s = { url: s } : typeof s == "function" && (s = s(n.id, n));
    const { url: i, ...r } = s;
    this.setState({ loading: !0 }, () => {
      fetch(et(i, n), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...r
      }).then((o) => {
        o.ok ? o.text().then((a) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ y(vl, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
        }) : this.setState({ loading: !1, content: /* @__PURE__ */ y("div", { class: "text-danger p-5 text-center", children: [
          "Error: ",
          o.statusText
        ] }) });
      });
    });
  }
  render() {
    const { left: n, top: s, width: i, height: r, style: o, block: a } = this.props, { title: l, menu: h, id: c } = a, { loading: d, content: u, dragging: f } = this.state;
    return /* @__PURE__ */ y("div", { class: "dashboard-block-cell", style: { left: n, top: s, width: i, height: r, ...o }, children: /* @__PURE__ */ y(
      "div",
      {
        class: `dashboard-block load-indicator${d ? " loading" : ""}${h ? " has-more-menu" : ""}${f ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: k(this, wi),
        onDragEnd: k(this, vi),
        "data-id": c,
        ref: k(this, is),
        children: [
          /* @__PURE__ */ y("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ y("div", { class: "dashboard-block-title", children: l }),
            h ? /* @__PURE__ */ y("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ y("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: k(this, yi), children: /* @__PURE__ */ y("div", { class: "more-vert" }) }) }) : null
          ] }),
          u
        ]
      }
    ) });
  }
}
is = new WeakMap(), yi = new WeakMap(), wi = new WeakMap(), vi = new WeakMap();
var Ic = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ft = (e, t, n) => (Ic(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ut = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, wt = (e, t, n) => (Ic(e, t, "access private method"), n), Yt, Do, Oc, Io, Hc, Sr, Bc, Oo, zc, ni, Er, Di, Mr, Ho, Fc, Tr, Rr, Ii, Bo;
const zo = class extends V {
  constructor() {
    super(...arguments), ut(this, Do), ut(this, Io), ut(this, Sr), ut(this, Oo), ut(this, ni), ut(this, Di), ut(this, Ho), ut(this, Yt, /* @__PURE__ */ new Map()), this.state = {}, ut(this, Tr, (e) => {
      var n;
      const t = (n = e.dataTransfer) == null ? void 0 : n.getData("application/id");
      t !== void 0 && (this.setState({ dragging: t }), console.log("handleBlockDragStart", e));
    }), ut(this, Rr, (e) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", e);
    });
  }
  render() {
    const { blocks: e, height: t } = wt(this, Sr, Bc).call(this), { cellHeight: n, grid: s } = this.props, i = Ft(this, Yt);
    return console.log("Dashboard.render", { blocks: e, map: i }, this), /* @__PURE__ */ y("div", { class: "dashboard", children: /* @__PURE__ */ y("div", { class: "dashboard-blocks", style: { height: t * n }, children: e.map((r, o) => {
      const { id: a } = r, [l, h, c, d] = i.get(a) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ y(
        Uu,
        {
          id: a,
          index: o,
          left: `${100 * l / s}%`,
          top: n * h,
          height: n * d,
          width: `${100 * c / s}%`,
          block: r,
          moreMenu: !0,
          onDragStart: Ft(this, Tr),
          onDragEnd: Ft(this, Rr)
        },
        r.id
      );
    }) }) });
  }
};
let Fo = zo;
Yt = /* @__PURE__ */ new WeakMap();
Do = /* @__PURE__ */ new WeakSet();
Oc = function(e) {
  const { blockDefaultSize: t, blockSizeMap: n } = this.props;
  return e = e ?? t, typeof e == "string" && (e = n[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
};
Io = /* @__PURE__ */ new WeakSet();
Hc = function() {
  const { blocks: e, blockFetch: t, blockMenu: n } = this.props;
  return e.map((i) => {
    const {
      id: r,
      size: o,
      left: a = -1,
      top: l = -1,
      fetch: h = t,
      menu: c = n,
      ...d
    } = i, [u, f] = wt(this, Do, Oc).call(this, o);
    return {
      id: `${r}`,
      width: u,
      height: f,
      left: a,
      top: l,
      fetch: h,
      menu: c,
      ...d
    };
  });
};
Sr = /* @__PURE__ */ new WeakSet();
Bc = function() {
  Ft(this, Yt).clear();
  let e = 0;
  const t = wt(this, Io, Hc).call(this);
  return t.forEach((n) => {
    wt(this, Oo, zc).call(this, n);
    const [, s, , i] = Ft(this, Yt).get(n.id);
    e = Math.max(e, s + i);
  }), { blocks: t, height: e };
};
Oo = /* @__PURE__ */ new WeakSet();
zc = function(e) {
  const t = Ft(this, Yt), { id: n, left: s, top: i, width: r, height: o } = e;
  if (s < 0 || i < 0) {
    const [a, l] = wt(this, Ho, Fc).call(this, r, o, s, i);
    t.set(n, [a, l, r, o]);
  } else
    wt(this, Di, Mr).call(this, n, [s, i, r, o]);
};
ni = /* @__PURE__ */ new WeakSet();
Er = function(e) {
  var t;
  const { dragging: n } = this.state;
  for (const [s, i] of Ft(this, Yt).entries())
    if (s !== n && wt(t = zo, Ii, Bo).call(t, i, e))
      return !1;
  return !0;
};
Di = /* @__PURE__ */ new WeakSet();
Mr = function(e, t) {
  var n;
  Ft(this, Yt).set(e, t);
  for (const [s, i] of Ft(this, Yt).entries())
    s !== e && wt(n = zo, Ii, Bo).call(n, i, t) && (i[1] = t[1] + t[3], wt(this, Di, Mr).call(this, s, i));
};
Ho = /* @__PURE__ */ new WeakSet();
Fc = function(e, t, n, s) {
  if (n >= 0 && s >= 0) {
    if (wt(this, ni, Er).call(this, [n, s, e, t]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, r = s < 0 ? 0 : s, o = !1;
  const a = this.props.grid;
  for (; !o; ) {
    if (wt(this, ni, Er).call(this, [i, r, e, t])) {
      o = !0;
      break;
    }
    n < 0 ? (i += 1, i + e > a && (i = 0, r += 1)) : r += 1;
  }
  return [i, r];
};
Tr = /* @__PURE__ */ new WeakMap();
Rr = /* @__PURE__ */ new WeakMap();
Ii = /* @__PURE__ */ new WeakSet();
Bo = function([e, t, n, s], [i, r, o, a]) {
  return !(e + n <= i || i + o <= e || t + s <= r || r + a <= t);
};
ut(Fo, Ii);
Fo.defaultProps = {
  responsive: !1,
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
};
class Uc extends J {
}
Uc.NAME = "Dashboard";
Uc.Component = Fo;
var re, oe;
class Aa extends V {
  constructor(n) {
    super(n);
    L(this, re, void 0);
    L(this, oe, void 0);
    B(this, re, 0), B(this, oe, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (k(this, re) && cancelAnimationFrame(k(this, re)), B(this, re, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), B(this, re, 0);
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
      const r = i.getBoundingClientRect(), { type: o, clientSize: a, scrollSize: l } = this.props, h = (o === "horz" ? s.clientX - r.left : s.clientY - r.top) - this.barSize / 2;
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
    const { scrollSize: n, clientSize: s } = this.props;
    return Math.max(0, n - s);
  }
  get barSize() {
    const { clientSize: n, scrollSize: s, size: i = 12, minBarSize: r = 3 * i } = this.props;
    return Math.max(Math.round(n * n / s), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: n } = this.props;
    n && (B(this, oe, typeof n == "string" ? document : n.current), k(this, oe).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), k(this, oe) && k(this, oe).removeEventListener("wheel", this._handleWheel);
  }
  scroll(n) {
    return n = Math.max(0, Math.min(Math.round(n), this.maxScrollPos)), n === this.scrollPos ? !1 : (this.controlled ? this._afterScroll(n) : this.setState({
      scrollPos: n
    }, this._afterScroll.bind(this, n)), !0);
  }
  scrollOffset(n) {
    return this.scroll(this.scrollPos + n);
  }
  _afterScroll(n) {
    const { onScroll: s } = this.props;
    s && s(n, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: n,
      type: s,
      size: i = 12,
      className: r,
      style: o,
      left: a,
      top: l,
      bottom: h,
      right: c
    } = this.props, { maxScrollPos: d, scrollPos: u } = this, { dragStart: f } = this.state, p = {
      left: a,
      top: l,
      bottom: h,
      right: c,
      ...o
    }, g = {};
    return s === "horz" ? (p.height = i, p.width = n, g.width = this.barSize, g.left = Math.round(Math.min(d, u) * (n - g.width) / d)) : (p.width = i, p.height = n, g.height = this.barSize, g.top = Math.round(Math.min(d, u) * (n - g.height) / d)), /* @__PURE__ */ y(
      "div",
      {
        className: T("scrollbar", r, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": f
        }),
        style: p,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ y(
          "div",
          {
            className: "scrollbar-bar",
            style: g,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
re = new WeakMap(), oe = new WeakMap();
function Vc({ col: e, className: t, height: n, row: s, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, ...h }) {
  var O;
  const c = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...o
  }, { align: d, border: u } = e.setting, f = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...e.setting.cellStyle,
    ...r
  }, p = ["dtable-cell", l, t, e.setting.className, {
    "has-border-left": u === !0 || u === "left",
    "has-border-right": u === !0 || u === "right"
  }], g = ["dtable-cell-content", e.setting.cellClass], v = (O = s.data) == null ? void 0 : O[e.name], w = [a ?? v ?? ""], _ = i ? i(w, { row: s, col: e, value: v }, q) : w, $ = [], S = [], C = {}, M = {};
  let N = "div";
  _ == null || _.forEach((b) => {
    if (typeof b == "object" && b && !Z(b) && ("html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b || "tagName" in b)) {
      const R = b.outer ? $ : S;
      b.html ? R.push(/* @__PURE__ */ y("div", { className: T("dtable-cell-html", b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })) : (b.style && Object.assign(b.outer ? c : f, b.style), b.className && (b.outer ? p : g).push(b.className), b.children && R.push(b.children), b.attrs && Object.assign(b.outer ? C : M, b.attrs)), b.tagName && !b.outer && (N = b.tagName);
    } else
      S.push(b);
  });
  const A = N;
  return /* @__PURE__ */ y(
    "div",
    {
      className: T(p),
      style: c,
      "data-col": e.name,
      "data-type": e.type,
      ...h,
      ...C,
      children: [
        S.length > 0 && /* @__PURE__ */ y(A, { className: T(g), style: f, ...M, children: S }),
        $
      ]
    }
  );
}
function Ji({ row: e, className: t, top: n = 0, left: s = 0, width: i, height: r, cols: o, CellComponent: a = Vc, onRenderCell: l }) {
  return /* @__PURE__ */ y("div", { className: T("dtable-cells", t), style: { top: n, left: s, width: i, height: r }, children: o.map((h) => h.visible ? /* @__PURE__ */ y(
    a,
    {
      col: h,
      row: e,
      onRenderCell: l
    },
    h.name
  ) : null) });
}
function qc({
  row: e,
  className: t,
  top: n,
  height: s,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  CellComponent: l = Vc,
  onRenderCell: h,
  style: c,
  ...d
}) {
  let u = null;
  i.list.length && (u = /* @__PURE__ */ y(
    Ji,
    {
      className: "dtable-fixed-left",
      cols: i.list,
      width: i.width,
      row: e,
      CellComponent: l,
      onRenderCell: h
    }
  ));
  let f = null;
  r.list.length && (f = /* @__PURE__ */ y(
    Ji,
    {
      className: "dtable-flexable",
      cols: r.list,
      left: i.width - a,
      width: Math.max(r.width, r.totalWidth),
      row: e,
      CellComponent: l,
      onRenderCell: h
    }
  ));
  let p = null;
  o.list.length && (p = /* @__PURE__ */ y(
    Ji,
    {
      className: "dtable-fixed-right",
      cols: o.list,
      left: i.width + r.width,
      width: o.width,
      row: e,
      CellComponent: l,
      onRenderCell: h
    }
  ));
  const g = { top: n, height: s, lineHeight: `${s - 2}px`, ...c };
  return /* @__PURE__ */ y(
    "div",
    {
      className: T("dtable-row", t),
      style: g,
      "data-id": e.id,
      ...d,
      children: [
        u,
        f,
        p
      ]
    }
  );
}
function Vu({ height: e, onRenderRow: t, ...n }) {
  const s = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (t) {
    const i = t({ props: s }, q);
    i && Object.assign(s, i);
  }
  return /* @__PURE__ */ y("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ y(qc, { ...s }) });
}
function qu({
  className: e,
  style: t,
  top: n,
  rows: s,
  height: i,
  rowHeight: r,
  scrollTop: o,
  onRenderRow: a,
  ...l
}) {
  return t = { ...t, top: n, height: i }, /* @__PURE__ */ y("div", { className: T("dtable-rows", e), style: t, children: s.map((h) => {
    const c = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - o,
      height: r,
      ...l
    }, d = a == null ? void 0 : a({ props: c, row: h }, q);
    return d && Object.assign(c, d), /* @__PURE__ */ y(qc, { ...c }, h.id);
  }) });
}
const si = /* @__PURE__ */ new Map(), ii = [];
function Gc(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && si.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  si.set(n, e), t != null && t.buildIn && !ii.includes(n) && ii.push(n);
}
function fe(e, t) {
  Gc(e, t);
  const n = (s) => {
    if (!s)
      return e;
    const { defaultOptions: i, ...r } = e;
    return {
      ...r,
      defaultOptions: { ...i, ...s }
    };
  };
  return n.plugin = e, n;
}
function jc(e) {
  return si.delete(e);
}
function Gu(e) {
  if (typeof e == "string") {
    const t = si.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Yc(e, t, n) {
  return t.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = Gu(s);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && Yc(e, i.plugins, n), e.push(i), n.add(i.name)));
  }), e;
}
function ju(e = [], t = !0) {
  return t && ii.length && e.unshift(...ii), e != null && e.length ? Yc([], e, /* @__PURE__ */ new Set()) : [];
}
function Kc() {
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
function Yu(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function La(e, t) {
  return typeof e == "string" && (e = e.endsWith("%") ? parseFloat(e) / 100 : parseFloat(e)), typeof t == "number" && (typeof e != "number" || isNaN(e)) && (e = t), e;
}
function Zi(e, t = !1) {
  if (!e.list.length)
    return;
  if (e.widthSetting && e.width !== e.widthSetting) {
    e.width = e.widthSetting;
    const s = e.width - e.totalWidth;
    if (t || s > 0) {
      const i = e.flexList.length ? e.flexList : e.list, r = i.reduce((o, a) => o + (a.flex || 1), 0);
      i.forEach((o) => {
        const a = Math.min(s, Math.ceil(s * ((o.flex || 1) / r)));
        o.realWidth = o.width + a;
      });
    }
  }
  let n = 0;
  e.list.forEach((s) => {
    s.realWidth || (s.realWidth = s.width), s.left = n, n += s.realWidth;
  });
}
function Ku(e, t, n, s) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, h = (_) => (typeof _ == "function" && (_ = _.call(e)), _ = La(_, 0), _ < 1 && (_ = Math.round(_ * s)), _), c = {
    width: 0,
    list: [],
    flexList: [],
    widthSetting: 0,
    totalWidth: 0
  }, d = {
    ...c,
    list: [],
    flexList: [],
    widthSetting: h(a)
  }, u = {
    ...c,
    list: [],
    flexList: [],
    widthSetting: h(l)
  }, f = [], p = {};
  let g = !1;
  const v = [], w = {};
  if (n.forEach((_) => {
    const { colTypes: $, onAddCol: S } = _;
    $ && Object.entries($).forEach(([C, M]) => {
      w[C] || (w[C] = []), w[C].push(M);
    }), S && v.push(S);
  }), t.cols.forEach((_) => {
    if (_.hidden)
      return;
    const { type: $ = "", name: S } = _, C = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ..._,
      type: $
    }, M = {
      name: S,
      type: $,
      setting: C,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: f.length
    }, N = w[$];
    N && N.forEach((I) => {
      const W = typeof I == "function" ? I.call(e, C) : I;
      W && Object.assign(C, W, _);
    });
    const { fixed: A, flex: O, minWidth: b = r, maxWidth: R = o } = C, D = La(C.width || i, i);
    M.flex = O === !0 ? 1 : typeof O == "number" ? O : 0, M.width = Yu(D < 1 ? Math.round(D * s) : D, b, R), v.forEach((I) => I.call(e, M)), f.push(M), p[M.name] = M;
    const P = A ? A === "left" ? d : u : c;
    P.list.push(M), P.totalWidth += M.width, P.width = P.totalWidth, M.flex && P.flexList.push(M), typeof C.order == "number" && (g = !0);
  }), g) {
    const _ = ($, S) => ($.setting.order ?? 0) - (S.setting.order ?? 0);
    f.sort(_), d.list.sort(_), c.list.sort(_), u.list.sort(_);
  }
  return Zi(d, !0), Zi(u, !0), c.widthSetting = s - d.width - u.width, Zi(c), {
    list: f,
    map: p,
    left: d,
    center: c,
    right: u
  };
}
var Uo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, E = (e, t, n) => (Uo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), H = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Y = (e, t, n, s) => (Uo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Lt = (e, t, n) => (Uo(e, t, "access private method"), n), Ve, Tn, Me, Ot, $e, X, Wt, At, Rn, Ds, ri, ee, Nn, An, Nr, Xc, Ar, Jc, Lr, Zc, Pr, Qc, Is, Wr, Vo, qo, Oi, oi, Dr, Ir, Go, th, jo, eh, Or, nh;
let Yo = class extends V {
  constructor(t) {
    super(t), H(this, Nr), H(this, Ar), H(this, Lr), H(this, Pr), H(this, Is), H(this, Go), H(this, jo), H(this, Or), this.ref = it(), H(this, Ve, 0), H(this, Tn, void 0), H(this, Me, !1), H(this, Ot, void 0), H(this, $e, void 0), H(this, X, []), H(this, Wt, void 0), H(this, At, /* @__PURE__ */ new Map()), H(this, Rn, {}), H(this, Ds, void 0), H(this, ri, []), this.updateLayout = () => {
      E(this, Ve) && cancelAnimationFrame(E(this, Ve)), Y(this, Ve, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), Y(this, Ve, 0);
      }));
    }, H(this, ee, (n, s) => {
      s = s || n.type;
      const i = E(this, At).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), H(this, Nn, (n) => {
      E(this, ee).call(this, n, `window_${n.type}`);
    }), H(this, An, (n) => {
      E(this, ee).call(this, n, `document_${n.type}`);
    }), H(this, Vo, (n, s) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, s);
        i && Object.assign(n.props, i);
      }
      return E(this, X).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, s);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    }), H(this, qo, (n, s) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, s)), E(this, X).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, s));
    }), n.props)), H(this, Oi, (n, s, i) => {
      const { row: r, col: o } = s;
      s.value = this.getCellValue(r, o), n[0] = s.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return E(this, X).forEach((l) => {
        l[a] && (n = l[a].call(this, n, s, i));
      }), this.options[a] && (n = this.options[a].call(this, n, s, i)), o.setting[a] && (n = o.setting[a].call(this, n, s, i)), n;
    }), H(this, oi, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), H(this, Dr, (n) => {
      var a, l, h, c, d;
      const s = this.getPointerInfo(n);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: o }), E(this, X).forEach((u) => {
          var f;
          (f = u.onHeaderCellClick) == null || f.call(this, n, { colName: r, element: o });
        }));
      else {
        const { rowElement: u } = s, f = this.layout.visibleRows.find((p) => p.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: u })) === !0)
            return;
          for (const p of E(this, X))
            if (((h = p.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: u })) === !0)
              return;
        }
        if (((c = this.options.onRowClick) == null ? void 0 : c.call(this, n, { rowID: i, rowInfo: f, element: u })) === !0)
          return;
        for (const p of E(this, X))
          if (((d = p.onRowClick) == null ? void 0 : d.call(this, n, { rowID: i, rowInfo: f, element: u })) === !0)
            return;
      }
    }), H(this, Ir, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), Y(this, Tn, t.id ?? `dtable-${Xl(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, Y(this, $e, Object.freeze(ju(t.plugins))), E(this, $e).forEach((n) => {
      var o;
      const { methods: s, data: i, state: r } = n;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(E(this, Rn), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = n.onCreate) == null || o.call(this, n);
    });
  }
  get options() {
    var t;
    return ((t = E(this, Wt)) == null ? void 0 : t.options) || E(this, Ot) || Kc();
  }
  get plugins() {
    return E(this, X);
  }
  get layout() {
    return E(this, Wt);
  }
  get id() {
    return E(this, Tn);
  }
  get data() {
    return E(this, Rn);
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.ref.current) == null ? void 0 : t.parentElement);
  }
  componentWillReceiveProps() {
    Y(this, Ot, void 0);
  }
  componentDidMount() {
    if (E(this, Me) ? this.forceUpdate() : Lt(this, Is, Wr).call(this), E(this, X).forEach((t) => {
      let { events: n } = t;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([s, i]) => {
        i && this.on(s, i);
      }));
    }), this.on("click", E(this, Dr)), this.on("keydown", E(this, Ir)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(t), Y(this, Ds, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    E(this, X).forEach((t) => {
      var n;
      (n = t.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    E(this, Me) ? Lt(this, Is, Wr).call(this) : E(this, X).forEach((t) => {
      var n;
      (n = t.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = E(this, Ds)) == null || n.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const s of E(this, At).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), E(this, Nn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), E(this, An)) : t.removeEventListener(s, E(this, ee));
    E(this, X).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), E(this, $e).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), Y(this, Rn, {}), E(this, At).clear();
  }
  on(t, n, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = E(this, At).get(t);
    i ? i.push(n) : (E(this, At).set(t, [n]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), E(this, Nn)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), E(this, An)) : (r = this.ref.current) == null || r.addEventListener(t, E(this, ee)));
  }
  off(t, n, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = E(this, At).get(t);
    if (!i)
      return;
    const r = i.indexOf(n);
    r >= 0 && i.splice(r, 1), i.length || (E(this, At).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), E(this, Nn)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), E(this, An)) : (o = this.ref.current) == null || o.removeEventListener(t, E(this, ee)));
  }
  emitCustomEvent(t, n) {
    E(this, ee).call(this, n instanceof Event ? n : new CustomEvent(t, { detail: n }), t);
  }
  scroll(t, n) {
    const { scrollLeft: s, scrollTop: i, rowsHeightTotal: r, rowsHeight: o, rowHeight: a, cols: { center: { totalWidth: l, width: h } } } = this.layout, { to: c } = t;
    let { scrollLeft: d, scrollTop: u } = t;
    if (c === "up" || c === "down")
      u = i + (c === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (c === "left" || c === "right")
      d = s + (c === "right" ? 1 : -1) * h;
    else if (c === "top")
      u = 0;
    else if (c === "bottom")
      u = r - o;
    else if (c === "begin")
      d = 0;
    else if (c === "end")
      d = l - h;
    else {
      const { offsetLeft: p, offsetTop: g } = t;
      typeof p == "number" && (d = s + p), typeof g == "number" && (d = i + g);
    }
    const f = {};
    return typeof d == "number" && (d = Math.max(0, Math.min(d, l - h)), d !== s && (f.scrollLeft = d)), typeof u == "number" && (u = Math.max(0, Math.min(u, r - o)), u !== i && (f.scrollTop = u)), Object.keys(f).length ? (this.setState(f, () => {
      var p;
      (p = this.options.onScroll) == null || p.call(this, f), n == null || n.call(this, !0);
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
    const { rows: n, rowsMap: s, allRows: i } = this.layout;
    return typeof t == "number" ? n[t] : s[t] || i.find((r) => r.id === t);
  }
  getCellValue(t, n) {
    var a;
    const s = typeof t == "object" ? t : this.getRowInfo(t);
    if (!s)
      return;
    const i = typeof n == "object" ? n : this.getColInfo(n);
    if (!i)
      return;
    let r = s.id === "HEADER" ? i.setting.title : (a = s.data) == null ? void 0 : a[i.name];
    const { cellValueGetter: o } = this.options;
    return o && (r = o.call(this, s, i, r)), r;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, n) {
    if (!E(this, Ot))
      return;
    typeof t == "function" && (n = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      Y(this, Wt, void 0);
    else if (s === "options") {
      if (Y(this, Ot, void 0), !E(this, Wt))
        return;
      Y(this, Wt, void 0);
    }
    this.setState(i ?? ((r) => ({ renderCount: r.renderCount + 1 })), n);
  }
  getPointerInfo(t) {
    const n = t.target;
    if (!n || n.closest(".no-cell-event"))
      return;
    const s = n.closest(".dtable-cell");
    if (!s)
      return;
    const i = s.closest(".dtable-row");
    if (!i)
      return;
    const r = s == null ? void 0 : s.getAttribute("data-col"), o = i == null ? void 0 : i.getAttribute("data-id");
    if (!(typeof r != "string" || typeof o != "string"))
      return {
        cellElement: s,
        rowElement: i,
        colName: r,
        rowID: o,
        target: n
      };
  }
  i18n(t, n, s) {
    return qt(E(this, ri), t, n, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((n) => n.name === t);
  }
  render() {
    const t = Lt(this, Or, nh).call(this), { className: n, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l } = this.options, h = {}, c = ["dtable", n, {
      "dtable-hover-row": s,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "scrollbar-hover": l
    }], d = [];
    return t && (h.width = t.width, h.height = t.height, c.push({
      "dtable-scrolled-down": t.scrollTop > 0,
      "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
      "dtable-scrolled-right": t.scrollLeft > 0,
      "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
    }), d.push(
      Lt(this, Nr, Xc).call(this, t),
      Lt(this, Ar, Jc).call(this, t),
      Lt(this, Lr, Zc).call(this, t),
      Lt(this, Pr, Qc).call(this, t)
    ), E(this, X).forEach((u) => {
      var p;
      const f = (p = u.onRender) == null ? void 0 : p.call(this, t);
      f && (f.style && Object.assign(h, f.style), f.className && c.push(f.className), f.children && d.push(f.children));
    })), /* @__PURE__ */ y(
      "div",
      {
        id: E(this, Tn),
        className: T(c),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: d
      }
    );
  }
};
Ve = /* @__PURE__ */ new WeakMap();
Tn = /* @__PURE__ */ new WeakMap();
Me = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
$e = /* @__PURE__ */ new WeakMap();
X = /* @__PURE__ */ new WeakMap();
Wt = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
Rn = /* @__PURE__ */ new WeakMap();
Ds = /* @__PURE__ */ new WeakMap();
ri = /* @__PURE__ */ new WeakMap();
ee = /* @__PURE__ */ new WeakMap();
Nn = /* @__PURE__ */ new WeakMap();
An = /* @__PURE__ */ new WeakMap();
Nr = /* @__PURE__ */ new WeakSet();
Xc = function(e) {
  const { header: t, cols: n, headerHeight: s, scrollLeft: i } = e;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ y(
      Vu,
      {
        scrollLeft: i,
        height: s,
        cols: n,
        onRenderCell: E(this, Oi),
        onRenderRow: E(this, qo)
      },
      "header"
    );
  const r = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ y(
    no,
    {
      className: "dtable-header",
      style: { height: s },
      renders: r,
      generateArgs: [e],
      generatorThis: this
    },
    "header"
  );
};
Ar = /* @__PURE__ */ new WeakSet();
Jc = function(e) {
  const { headerHeight: t, rowsHeight: n, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a } = e;
  return /* @__PURE__ */ y(
    qu,
    {
      top: t,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: E(this, Oi),
      onRenderRow: E(this, Vo)
    },
    "rows"
  );
};
Lr = /* @__PURE__ */ new WeakSet();
Zc = function(e) {
  let { footer: t } = e;
  if (typeof t == "function" && (t = t.call(this, e)), !t)
    return null;
  const n = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ y(
    no,
    {
      className: "dtable-footer",
      style: { height: e.footerHeight, top: e.rowsHeight + e.headerHeight },
      renders: n,
      generateArgs: [e],
      generatorThis: this,
      generators: e.footerGenerators
    },
    "footer"
  );
};
Pr = /* @__PURE__ */ new WeakSet();
Qc = function(e) {
  const t = [], { scrollLeft: n, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: h, headerHeight: c } = e, { scrollbarSize: d = 12, horzScrollbarPos: u } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ y(
      Aa,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: r,
        clientSize: i,
        onScroll: E(this, oi),
        left: s,
        bottom: (u === "inside" ? 0 : -d) + h,
        size: d,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ y("div", { className: "dtable-scroll-shadow is-left", style: { left: s, height: c + a } }),
    /* @__PURE__ */ y("div", { className: "dtable-scroll-shadow is-right", style: { left: s + i, height: c + a } })
  ), l > a && t.push(
    /* @__PURE__ */ y(
      Aa,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: E(this, oi),
        right: 0,
        size: d,
        top: c,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
Is = /* @__PURE__ */ new WeakSet();
Wr = function() {
  var e;
  Y(this, Me, !1), (e = this.options.afterRender) == null || e.call(this), E(this, X).forEach((t) => {
    var n;
    return (n = t.afterRender) == null ? void 0 : n.call(this);
  });
};
Vo = /* @__PURE__ */ new WeakMap();
qo = /* @__PURE__ */ new WeakMap();
Oi = /* @__PURE__ */ new WeakMap();
oi = /* @__PURE__ */ new WeakMap();
Dr = /* @__PURE__ */ new WeakMap();
Ir = /* @__PURE__ */ new WeakMap();
Go = /* @__PURE__ */ new WeakSet();
th = function() {
  if (E(this, Ot))
    return !1;
  const t = { ...Kc(), ...E(this, $e).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return Y(this, X, E(this, $e).reduce((n, s) => {
    const { when: i, options: r } = s;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), n.push(s)), n;
  }, [])), Y(this, Ot, t), Y(this, ri, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
jo = /* @__PURE__ */ new WeakSet();
eh = function() {
  var A, O;
  const { plugins: e } = this;
  let t = E(this, Ot);
  const n = {
    flex: /* @__PURE__ */ y("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ y("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  e.forEach((b) => {
    var D;
    const R = (D = b.beforeLayout) == null ? void 0 : D.call(this, t);
    R && (t = { ...t, ...R }), Object.assign(n, b.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: b } = this;
    if (b)
      i = b.clientWidth;
    else {
      Y(this, Me, !0);
      return;
    }
  }
  const r = Ku(this, t, e, i), { data: o, rowKey: a = "id", rowHeight: l } = t, h = [], c = (b, R, D) => {
    var I, W;
    const P = { data: D ?? { [a]: b }, id: b, index: h.length, top: 0 };
    if (D || (P.lazy = !0), h.push(P), ((I = t.onAddRow) == null ? void 0 : I.call(this, P, R)) !== !1) {
      for (const F of e)
        if (((W = F.onAddRow) == null ? void 0 : W.call(this, P, R)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let b = 0; b < o; b++)
      c(`${b}`, b);
  else
    Array.isArray(o) && o.forEach((b, R) => {
      typeof b == "object" ? c(`${b[a] ?? ""}`, R, b) : c(`${b ?? ""}`, R);
    });
  let d = h;
  const u = {};
  if (t.onAddRows) {
    const b = t.onAddRows.call(this, d);
    b && (d = b);
  }
  for (const b of e) {
    const R = (A = b.onAddRows) == null ? void 0 : A.call(this, d);
    R && (d = R);
  }
  d.forEach((b, R) => {
    u[b.id] = b, b.index = R, b.top = b.index * l;
  });
  const { header: f, footer: p } = t, g = f ? t.headerHeight || l : 0, v = p ? t.footerHeight || l : 0;
  let w = t.height, _ = 0;
  const $ = d.length * l, S = g + v + $;
  if (typeof w == "function" && (w = w.call(this, S)), w === "auto")
    _ = S;
  else if (typeof w == "object")
    _ = Math.min(w.max, Math.max(w.min, S));
  else if (w === "100%") {
    const { parent: b } = this;
    if (b)
      _ = b.clientHeight;
    else {
      _ = 0, Y(this, Me, !0);
      return;
    }
  } else
    _ = w;
  const C = _ - g - v, M = {
    options: t,
    allRows: h,
    width: i,
    height: _,
    rows: d,
    rowsMap: u,
    rowHeight: l,
    rowsHeight: C,
    rowsHeightTotal: $,
    header: f,
    footer: p,
    footerGenerators: n,
    headerHeight: g,
    footerHeight: v,
    cols: r
  }, N = (O = t.onLayout) == null ? void 0 : O.call(this, M);
  N && Object.assign(M, N), e.forEach((b) => {
    if (b.onLayout) {
      const R = b.onLayout.call(this, M);
      R && Object.assign(M, R);
    }
  }), Y(this, Wt, M);
};
Or = /* @__PURE__ */ new WeakSet();
nh = function() {
  (Lt(this, Go, th).call(this) || !E(this, Wt)) && Lt(this, jo, eh).call(this);
  const { layout: e } = this;
  if (!e)
    return;
  const { cols: { center: t } } = e;
  let { scrollLeft: n } = this.state;
  n = Math.min(Math.max(0, t.totalWidth - t.width), n);
  let s = 0;
  t.list.forEach((p) => {
    p.left = s, s += p.realWidth, p.visible = p.left + p.realWidth >= n && p.left <= n + t.width;
  });
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = e, l = Math.min(Math.max(0, i - r), this.state.scrollTop), h = Math.floor(l / a), c = l + r, d = Math.min(o.length, Math.ceil(c / a)), u = [], { rowDataGetter: f } = this.options;
  for (let p = h; p < d; p++) {
    const g = o[p];
    g.lazy && f && (g.data = f([g.id])[0], g.lazy = !1), u.push(g);
  }
  return e.visibleRows = u, e.scrollTop = l, e.scrollLeft = n, e;
};
Yo.addPlugin = Gc;
Yo.removePlugin = jc;
function Pa(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const s = "dtable-col-hover";
  n.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(s));
}
const Xu = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (e) => !!e.colHover,
  events: {
    mouseover(e) {
      var i;
      const { colHover: t } = this.options;
      if (!t)
        return;
      const n = (i = e.target) == null ? void 0 : i.closest(".dtable-cell");
      if (!n || t === "header" && !n.closest(".dtable-header"))
        return;
      const s = (n == null ? void 0 : n.getAttribute("data-col")) ?? !1;
      Pa(this, s);
    },
    mouseleave() {
      Pa(this, !1);
    }
  }
}, Ju = fe(Xu, { buildIn: !0 });
function Zu(e, t, n = !1) {
  var a, l;
  typeof e == "boolean" && (t = e, e = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (h, c) => {
    const d = r ? r.call(this, h) : !0;
    !d || n && d === "disabled" || !!s[h] === c || (c ? s[h] = !0 : delete s[h], i[h] = c);
  };
  if (e === void 0 ? (t === void 0 && (t = !sh.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
    o(h, !!t);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((h) => {
    o(h, t ?? !s[h]);
  })), Object.keys(i).length) {
    const h = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, e, i, s);
    h && Object.keys(h).forEach((c) => {
      h[c] ? s[c] = !0 : delete s[c];
    }), this.setState({ checkedRows: { ...s } }, () => {
      var c;
      (c = this.options.onCheckChange) == null || c.call(this, i);
    });
  }
  return i;
}
function Qu(e) {
  return this.state.checkedRows[e] ?? !1;
}
function sh() {
  var s, i;
  const e = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!e)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (n.call(this, o.id) ? 1 : 0), 0)) : t === e;
}
function tf() {
  return Object.keys(this.state.checkedRows);
}
function ef(e) {
  const { checkable: t } = this.options;
  e === void 0 && (e = !t), t !== e && this.setState({ forceCheckable: e });
}
function Wa(e, t, n = !1) {
  return /* @__PURE__ */ y("div", { class: `checkbox-primary dtable-checkbox${e ? " checked" : ""}${n ? " disabled" : ""}`, children: /* @__PURE__ */ y("label", {}) });
}
const nf = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Wa
  },
  when: (e) => e.checkable !== void 0,
  options(e) {
    const { forceCheckable: t } = this.state;
    return t !== void 0 ? e.checkable = t : e.checkable === "auto" && (e.checkable = !!e.cols.some((n) => n.checkbox)), e;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Zu,
    isRowChecked: Qu,
    isAllRowChecked: sh,
    getChecks: tf,
    toggleCheckable: ef
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
      const e = this.isAllRowChecked();
      return [
        /* @__PURE__ */ y("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Wa(e) })
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [s.call(this, n)];
      const i = n.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ y("div", { children: r.join(", ") })
      ];
    }
  },
  onRenderCell(e, { row: t, col: n }) {
    var l;
    const { id: s } = t, { canRowCheckable: i } = this.options, r = i ? i.call(this, s) : !0;
    if (!r)
      return e;
    const { checkbox: o } = n.setting;
    if (typeof o == "function" ? o.call(this, s) : o) {
      const h = this.isRowChecked(s), c = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, h, s, r === "disabled");
      e.unshift(c), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var o;
    const { id: s } = t, { checkbox: i } = n.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const a = this.isAllRowChecked(), l = (o = this.options.checkboxRender) == null ? void 0 : o.call(this, a, s);
      e.unshift(l), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: t }) {
    if (this.isRowChecked(t.id))
      return { className: T(e.className, "is-checked") };
  },
  onHeaderCellClick(e) {
    const t = e.target;
    if (!t)
      return;
    const n = t.closest('input[type="checkbox"],.dtable-checkbox');
    n && (this.toggleCheckRows(n.checked), e.stopPropagation());
  },
  onRowClick(e, { rowID: t }) {
    const n = m(e.target);
    if (!n.length || n.closest("btn,a,button").length)
      return;
    (n.closest('input[type="checkbox"],.dtable-checkbox').not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, sf = fe(nf);
var ih = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(ih || {});
function ai(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, s = t.children && n && n[e];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const o = ai.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return t.state = i ? "hidden" : s ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? ai.call(this, t.parent).level + 1 : 0, t;
}
function rf(e) {
  return e !== void 0 ? ai.call(this, e) : this.data.nestedMap;
}
function of(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !rh.call(this)), t) {
      const i = s.entries();
      for (const [r, o] of i)
        o.state === "expanded" && (n[r] = !0);
    } else
      n = {};
  else {
    const i = Array.isArray(e) ? e : [e];
    t === void 0 && (t = !n[i[0]]), i.forEach((r) => {
      const o = s.get(r);
      t && (o != null && o.children) ? n[r] = !0 : delete n[r];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...n } }
  }, () => {
    var i;
    (i = this.options.onNestedChange) == null || i.call(this);
  });
}
function rh() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function oh(e, t = 0, n, s = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const o = e.get(r);
    o && (o.level === s && (o.order = t++), (i = o.children) != null && i.length && (t = oh(e, t, o.children, s + 1)));
  }
  return t;
}
function ah(e, t, n, s) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = n, ah(e, r, n, s);
  }), i;
}
function lh(e, t, n, s, i) {
  var a;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return n === h;
  })) && (s[t] = n), r.parent && lh(e, r.parent, n, s, i);
}
const af = {
  name: "nested",
  defaultOptions: {
    nested: "auto",
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(e, t) {
      const { nestedMap: n } = this.data, s = n.get(e.id), i = n.get(t.id);
      return (s == null ? void 0 : s.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(e, t, n) {
      if (!this.options.checkable || !(e != null && e.length))
        return;
      const s = {};
      return Object.entries(t).forEach(([i, r]) => {
        const o = ah(this, i, r, s);
        o != null && o.parent && lh(this, o.parent, r, s, n);
      }), s;
    }
  },
  options(e) {
    return e.nested === "auto" && (e.nested = !!e.cols.some((t) => t.nestedToggle)), e;
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    getNestedInfo: rf,
    toggleRow: of,
    isAllCollapsed: rh,
    getNestedRowInfo: ai
  },
  beforeLayout() {
    var e;
    (e = this.data.nestedMap) == null || e.clear();
  },
  onAddRow(e) {
    var i, r;
    const { nestedMap: t } = this.data, n = String((i = e.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"]), s = t.get(e.id) ?? {
      state: "",
      level: 0
    };
    if (s.parent = n === "0" ? void 0 : n, (r = e.data) != null && r[this.options.asParentKey ?? "asParent"] && (s.children = []), t.set(e.id, s), n) {
      let o = t.get(n);
      o || (o = {
        state: "",
        level: 0
      }, t.set(n, o)), o.children || (o.children = []), o.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter(
      (t) => this.getNestedRowInfo(t.id).state !== "hidden"
      /* hidden */
    ), oh(this.data.nestedMap), e.sort((t, n) => {
      const s = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(n.id), r = (s.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var a;
    const { id: s, data: i } = n, { nestedToggle: r } = t.setting, o = this.getNestedRowInfo(s);
    if (r && (o.children || o.parent) && e.unshift(((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, s, t, i)) ?? /* @__PURE__ */ y("a", { className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ y("span", { className: "toggle-icon" }) })), o.level) {
      let { nestedIndent: l = r } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), e.unshift(/* @__PURE__ */ y("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var i;
    const { id: s } = t;
    return n.setting.nestedToggle && e.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, n, void 0)) ?? /* @__PURE__ */ y("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ y("span", { className: "toggle-icon" }) })), e;
  },
  onRenderRow({ props: e, row: t }) {
    const n = this.getNestedRowInfo(t.id);
    return {
      className: T(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = T(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
  },
  onHeaderCellClick(e) {
    const t = e.target;
    if (!(!t || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(e, { rowID: t }) {
    const n = e.target;
    if (!(!n || !this.getNestedRowInfo(t).children || !n.closest(".dtable-nested-toggle")))
      return this.toggleRow(t), !0;
  }
}, lf = fe(af);
function ch(e, t, n, s) {
  if (typeof e == "function" && (e = e(t)), typeof e == "string" && e.length && (e = { url: e }), !e)
    return n;
  const { url: i, ...r } = e, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ y("a", { href: et(i, t.row.data), ...s, ...r, ...a, children: n });
}
function Ko(e, t, n) {
  var s;
  if (e != null)
    return n = n ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof e == "function" ? e(n, t) : et(e, n);
}
function hh(e, t, n, s) {
  var i;
  return n = n ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === !1 ? n : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(n, t)), _r(n, e, s ?? n));
}
function dh(e, t) {
  const { link: n } = t.col.setting, s = ch(n, t, e[0]);
  return s && (e[0] = s), e;
}
function uh(e, t) {
  const { format: n } = t.col.setting;
  return n && (e[0] = Ko(n, t, e[0])), e;
}
function fh(e, t) {
  const { map: n } = t.col.setting;
  return typeof n == "function" ? e[0] = n(e[0], t) : typeof n == "object" && n && (e[0] = n[e[0]] ?? e[0]), e;
}
function ph(e, t, n = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = n, invalidDate: i } = t.col.setting;
  return e[0] = hh(s, t, e[0], i), e;
}
function Hr(e, t, n = !1) {
  const { html: s = n } = t.col.setting;
  if (s === !1)
    return e;
  const i = e[0], r = s === !0 ? i : Ko(s, t, i);
  return e[0] = {
    html: r
  }, e;
}
const cf = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e, t) {
        return Hr(e, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: s = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, o = (n - s) / 2, a = n / 2, l = e[0];
        return e[0] = /* @__PURE__ */ y("svg", { width: n, height: n, children: [
          /* @__PURE__ */ y("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ y("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * o * 2, "stroke-dashoffset": Math.PI * o * 2 * (100 - l) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ y("text", { x: a, y: a + s, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${o}px` }, children: Math.round(l) })
        ] }), e;
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
  onRenderCell(e, t) {
    const { formatDate: n, html: s, hint: i } = t.col.setting;
    if (n && (e = ph(e, t, n)), e = fh(e, t), e = uh(e, t), s ? e = Hr(e, t) : e = dh(e, t), i) {
      let r = e[0];
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" && (r = et(i, t.row.data)), e.push({ attrs: { title: r } });
    }
    return e;
  }
}, hf = fe(cf, { buildIn: !0 });
function Qi(e, { row: t, col: n }) {
  const { data: s } = t, i = s ? s[n.name] : void 0;
  if (!(i != null && i.length))
    return e;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${n.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: h = `${n.name}Name` } = n.setting, c = (s ? s[h] : i) || e[0], d = {
    size: "xs",
    className: T(r, a == null ? void 0 : a.className, "flex-none"),
    src: s ? s[o] : void 0,
    text: c,
    code: l ? s ? s[l] : void 0 : i,
    ...a
  };
  if (e[0] = /* @__PURE__ */ y(Jl, { ...d }), n.type === "avatarBtn") {
    const { avatarBtnProps: u } = n.setting, f = typeof u == "function" ? u(n, t) : u;
    e[0] = /* @__PURE__ */ y("button", { type: "button", className: "btn btn-avatar", ...f, children: [
      e[0],
      /* @__PURE__ */ y("div", { children: c })
    ] });
  } else
    n.type === "avatarName" && (e[0] = /* @__PURE__ */ y("div", { className: "flex items-center gap-1", children: [
      e[0],
      /* @__PURE__ */ y("span", { children: c })
    ] }));
  return e;
}
const df = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Qi
    },
    avatarBtn: {
      onRenderCell: Qi
    },
    avatarName: {
      onRenderCell: Qi
    }
  }
}, uf = fe(df, { buildIn: !0 }), ff = {
  name: "sort-type",
  onRenderHeaderCell(e, t) {
    const { col: n } = t, { sortType: s } = n.setting;
    if (s) {
      const i = s === !0 ? "none" : s;
      e.push(
        /* @__PURE__ */ y("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: r = this.options.sortLink } = n.setting;
      if (r) {
        const o = i === "asc" ? "desc" : "asc";
        typeof r == "function" && (r = r.call(this, n, o, i)), typeof r == "string" && (r = { url: r });
        const { url: a, ...l } = r;
        e[0] = /* @__PURE__ */ y("a", { href: et(a, { ...n.setting, sortType: o }), ...l, children: e[0] });
      }
    }
    return e;
  }
}, pf = fe(ff, { buildIn: !0 }), tr = (e) => {
  e.length !== 1 && e.forEach((t, n) => {
    !n || t.setting.border || t.setting.group === e[n - 1].setting.group || (t.setting.border = "left");
  });
}, gf = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (e) => !!e.groupDivider,
  onLayout(e) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = e;
    tr(t.left.list), tr(t.center.list), tr(t.right.list);
  }
}, mf = fe(gf), yf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: ih,
  avatar: uf,
  checkable: sf,
  colHover: Ju,
  group: mf,
  nested: lf,
  renderDatetime: hh,
  renderDatetimeCell: ph,
  renderFormat: Ko,
  renderFormatCell: uh,
  renderHtmlCell: Hr,
  renderLink: ch,
  renderLinkCell: dh,
  renderMapCell: fh,
  rich: hf,
  sortType: pf
}, Symbol.toStringTag, { value: "Module" }));
class ds extends J {
}
ds.NAME = "DTable";
ds.Component = Yo;
ds.definePlugin = fe;
ds.removePlugin = jc;
ds.plugins = yf;
var gh = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Da = (e, t, n) => (gh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), wf = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ia = (e, t, n, s) => (gh(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), qe;
const vf = "nav", Br = '[data-toggle="tab"]', _f = "active";
class mh extends lt {
  constructor() {
    super(...arguments), wf(this, qe, 0);
  }
  active(t) {
    const n = this.$element, s = n.find(Br);
    let i = t ? m(t).first() : s.filter(`.${_f}`);
    if (!i.length && (i = n.find(Br).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = m(r);
    o.length && (o.parent().children(".tab-pane").removeClass("active in"), o.addClass("active"), Da(this, qe) && clearTimeout(Da(this, qe)), Ia(this, qe, setTimeout(() => {
      o.addClass("in"), Ia(this, qe, 0);
    }, 10)));
  }
}
qe = /* @__PURE__ */ new WeakMap();
mh.NAME = "Tabs";
m(document).on("click.tabs.zui", Br, (e) => {
  e.preventDefault();
  const t = m(e.target), n = t.closest(`.${vf}`);
  n.length && mh.ensure(n).active(t);
});
m(() => {
  m(".disabled, [disabled]").on("click", (e) => {
    e.preventDefault(), e.stopImmediatePropagation();
  });
});
export {
  m as $,
  kl as ActionMenu,
  Sl as ActionMenuNested,
  Zl as Avatar,
  Yl as BtnGroup,
  lt as Component,
  J as ComponentFromReact,
  tt as ContextMenu,
  no as CustomRender,
  ds as DTable,
  Uc as Dashboard,
  zt as Dropdown,
  Kl as EventBus,
  wd as HElement,
  vl as HtmlContent,
  qn as Icon,
  El as Menu,
  po as Messager,
  tc as Modal,
  Xt as ModalBase,
  ic as ModalTrigger,
  oc as Nav,
  ac as Pager,
  hc as Pick,
  mc as Picker,
  yc as Popovers,
  Gl as ProgressCircle,
  V as ReactComponent,
  jl as Switch,
  Pt as TIME_DAY,
  mh as Tabs,
  wc as Toolbar,
  Ct as Tooltip,
  Dc as Tree,
  Qd as Upload,
  ka as calculateTimestamp,
  m as cash,
  T as classes,
  ld as convertBytes,
  rt as createDate,
  $d as createPortal,
  it as createRef,
  od as deepGet,
  rd as deepGetPath,
  zs as delay,
  xf as dom,
  ad as formatBytes,
  _r as formatDate,
  Hf as formatDateSpan,
  et as formatString,
  sl as getClassList,
  Bf as getTimeBeforeDesc,
  q as h,
  $f as hh,
  yd as htm,
  qt as i18n,
  Of as isDBY,
  cs as isSameDay,
  mu as isSameMonth,
  Pf as isSameWeek,
  vr as isSameYear,
  Wf as isToday,
  If as isTomorrow,
  Z as isValidElement,
  Df as isYesterday,
  va as nativeEvents,
  Vn as render,
  _d as renderCustomResult,
  eu as store,
  il as storeData,
  ud as takeData
};
//# sourceMappingURL=zui.js.map
