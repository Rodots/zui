var Fm = Object.defineProperty;
var Bm = (t, e, n) => e in t ? Fm(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var L = (t, e, n) => (Bm(t, typeof e != "symbol" ? e + "" : e, n), n), Ml = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var v = (t, e, n) => (Ml(t, e, "read from private field"), n ? n.call(t) : e.get(t)), M = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, H = (t, e, n, o) => (Ml(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n), Zc = (t, e, n, o) => ({
  set _(i) {
    H(t, e, i, n);
  },
  get _() {
    return v(t, e, o);
  }
}), U = (t, e, n) => (Ml(t, e, "access private method"), n);
var sl, tt, kf, xf, Zn, Jc, is = {}, Sf = [], jm = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ye(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Cf(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Ef(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? sl.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Vr(t, l, o, i, null);
}
function Vr(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++kf };
  return i == null && tt.vnode != null && tt.vnode(r), r;
}
function Vm() {
  return { current: null };
}
function il(t) {
  return t.children;
}
function zr(t, e) {
  this.props = t, this.context = e;
}
function No(t, e) {
  if (e == null)
    return t.__ ? No(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? No(t) : null;
}
function Af(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Af(t);
  }
}
function Qc(t) {
  (!t.__d && (t.__d = !0) && Zn.push(t) && !ls.__r++ || Jc !== tt.debounceRendering) && ((Jc = tt.debounceRendering) || setTimeout)(ls);
}
function ls() {
  for (var t; ls.__r = Zn.length; )
    t = Zn.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Zn = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = ye({}, r)).__v = r.__v + 1, lc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? No(r), r.__h), Nf(o, r), r.__e != l && Af(r)));
    });
}
function Tf(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Sf, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Vr(null, a, null, null, a) : Array.isArray(a) ? Vr(il, { children: a }, null, null, null) : a.__b > 0 ? Vr(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      lc(t, a, f = f || is, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Mf(a, _, t) : _ = Lf(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = No(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Rf(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Df(p[s], p[++s], p[++s]);
}
function Mf(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Mf(o, e, n) : Lf(n, o, o, i, o.__e, e));
  return e;
}
function Lf(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function zm(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || cs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || cs(t, r, e[r], n[r], o);
}
function ta(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || jm.test(e) ? n : n + "px";
}
function cs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || ta(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || ta(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? na : ea, r) : t.removeEventListener(e, r ? na : ea, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function ea(t) {
  this.l[t.type + !1](tt.event ? tt.event(t) : t);
}
function na(t) {
  this.l[t.type + !0](tt.event ? tt.event(t) : t);
}
function lc(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = tt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new zr(p, g), s.constructor = y, s.render = Gm), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = ye({}, s.__s)), ye(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = tt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = ye(ye({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === il && h.key == null ? h.props.children : h, Tf(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Ym(n.__e, e, n, o, i, r, l, _);
    (h = tt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), tt.__e(x, e, n);
  }
}
function Nf(t, e) {
  tt.__c && tt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      tt.__e(o, n.__v);
    }
  });
}
function Ym(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && sl.call(t.childNodes), h = (d = n.props || is).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (zm(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Tf(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && No(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Cf(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && cs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && cs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Df(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    tt.__e(o, n);
  }
}
function Rf(t, e, n) {
  var o, i;
  if (tt.unmount && tt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Df(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        tt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Rf(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Cf(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Gm(t, e, n) {
  return this.constructor(t, n);
}
function qm(t, e, n) {
  var o, i, r;
  tt.__ && tt.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], lc(e, t = (!o && n || e).__k = Ef(il, null, [t]), i || is, is, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? sl.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), Nf(r, t);
}
sl = Sf.slice, tt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, kf = 0, xf = function(t) {
  return t != null && t.constructor === void 0;
}, zr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ye({}, this.state), typeof t == "function" && (t = t(ye({}, n), this.props)), t && ye(n, t), t != null && this.__v && (e && this._sb.push(e), Qc(this));
}, zr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Qc(this));
}, zr.prototype.render = il, Zn = [], ls.__r = 0;
var Xm = 0;
function Pf(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Xm, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return tt.vnode && tt.vnode(_), _;
}
var oe;
class Km {
  constructor(e = "") {
    M(this, oe, void 0);
    typeof e == "object" ? H(this, oe, e) : H(this, oe, document.appendChild(document.createComment(e)));
  }
  on(e, n, o) {
    v(this, oe).addEventListener(e, n, o);
  }
  once(e, n, o) {
    v(this, oe).addEventListener(e, n, { once: !0, ...o });
  }
  off(e, n, o) {
    v(this, oe).removeEventListener(e, n, o);
  }
  emit(e) {
    return v(this, oe).dispatchEvent(e), e;
  }
}
oe = new WeakMap();
const Vl = /* @__PURE__ */ new Set([
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
class cc extends Km {
  on(e, n, o) {
    super.on(e, n, o);
  }
  off(e, n, o) {
    super.off(e, n, o);
  }
  once(e, n, o) {
    super.once(e, n, o);
  }
  emit(e, n) {
    return typeof e == "string" && (Vl.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), super.emit(cc.createEvent(e, n));
  }
  static createEvent(e, n) {
    return typeof e == "string" && (Vl.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), e;
  }
}
var re, ir, Xe, Yn;
class oa extends cc {
  constructor(n = "", o) {
    super(n);
    M(this, Xe);
    M(this, re, /* @__PURE__ */ new Map());
    M(this, ir, void 0);
    H(this, ir, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, i) {
    n = U(this, Xe, Yn).call(this, n), super.on(n, o, i), v(this, re).set(o, [n, i]);
  }
  off(n, o, i) {
    n = U(this, Xe, Yn).call(this, n), super.off(n, o, i), v(this, re).delete(o);
  }
  once(n, o, i) {
    n = U(this, Xe, Yn).call(this, n);
    const r = (l) => {
      o(l), v(this, re).delete(r);
    };
    super.once(n, r, i), v(this, re).set(r, [n, i]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = U(this, Xe, Yn).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(v(this, re).entries()).forEach(([n, [o, i]]) => {
      super.off(o, n, i);
    }), v(this, re).clear();
  }
}
re = new WeakMap(), ir = new WeakMap(), Xe = new WeakSet(), Yn = function(n) {
  const o = v(this, ir);
  return Vl.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function Zm(t, e) {
  if (t == null)
    return [t, void 0];
  typeof e == "string" && (e = e.split("."));
  const n = e.join(".");
  let o = t;
  const i = [o];
  for (; typeof o == "object" && o !== null && e.length; ) {
    let r = e.shift(), l;
    const c = r.indexOf("[");
    if (c > 0 && c < r.length - 1 && r.endsWith("]") && (l = r.substring(c + 1, r.length - 1), r = r.substring(0, c)), o = o[r], i.push(o), l !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(l) : o = o[l], i.push(o);
      else
        throw new Error(`Cannot access property "${r}[${l}]", the full path is "${n}".`);
  }
  if (e.length)
    throw new Error(`Cannot access property with rest path "${e.join(".")}", the full path is "${n}".`);
  return i;
}
function Jm(t, e, n) {
  const o = Zm(t, e), i = o[o.length - 1];
  return i === void 0 ? n : i;
}
function Ll(t) {
  return !!t && typeof t == "object" && !Array.isArray(t);
}
function zl(t, ...e) {
  if (!e.length)
    return t;
  const n = e.shift();
  if (Ll(t) && Ll(n))
    for (const o in n)
      Ll(n[o]) ? (t[o] || Object.assign(t, { [o]: {} }), zl(t[o], n[o])) : Object.assign(t, { [o]: n[o] });
  return zl(t, ...e);
}
function Lt(t, ...e) {
  if (e.length === 0)
    return t;
  if (e.length === 1 && typeof e[0] == "object" && e[0]) {
    const n = e[0];
    return Object.keys(n).forEach((o) => {
      const i = n[o] ?? 0;
      t = t.replace(new RegExp(`\\{${o}\\}`, "g"), `${i}`);
    }), t;
  }
  for (let n = 0; n < e.length; n++) {
    const o = e[n] ?? "";
    t = t.replace(new RegExp(`\\{${n}\\}`, "g"), `${o}`);
  }
  return t;
}
var ac = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(ac || {});
function Lw(t, e = 2, n = "") {
  return Number.isNaN(t) ? "?KB" : (n || (t < 1024 ? n = "B" : t < 1048576 ? n = "KB" : t < 1073741824 ? n = "MB" : t < 1099511627776 ? n = "GB" : n = "TB"), (t / ac[n]).toFixed(e) + n);
}
const Nw = (t) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const n = t.match(e);
  if (!n)
    return 0;
  const o = n[1];
  return t = t.replace(o, ""), Number.parseInt(t, 10) * ac[o];
};
var $f;
let _c = (($f = document.documentElement.getAttribute("lang")) == null ? void 0 : $f.toLowerCase()) ?? "zh_cn", fe;
function Qm() {
  return _c;
}
function tg(t) {
  _c = t.toLowerCase();
}
function eg(t, e) {
  fe || (fe = {}), typeof t == "string" && (t = { [t]: e ?? {} }), zl(fe, t);
}
function Mr(t, e, n, o, i, r) {
  Array.isArray(t) ? fe && t.unshift(fe) : t = fe ? [fe, t] : [t], typeof n == "string" && (r = i, i = o, o = n, n = void 0);
  const l = i || _c;
  let c;
  for (const _ of t) {
    if (!_)
      continue;
    const h = _[l];
    if (!h)
      continue;
    const s = r && _ === fe ? `${r}.${e}` : e;
    if (c = Jm(h, s), c !== void 0)
      break;
  }
  return c === void 0 ? o : n ? Lt(c, ...Array.isArray(n) ? n : [n]) : c;
}
Mr.addLang = eg;
Mr.getCode = Qm;
Mr.setCode = tg;
function ng(t) {
  return Object.fromEntries(Object.entries(t).map(([e, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [e, n];
  }));
}
var se, fn, At;
class Ut {
  constructor(e, n) {
    M(this, se, void 0);
    M(this, fn, void 0);
    M(this, At, void 0);
    e = typeof e == "string" ? document.querySelector(e) : e, this.constructor.EVENTS && H(this, At, new oa(e, { customEventSuffix: `.${this.constructor.KEY}` })), H(this, se, { ...this.constructor.DEFAULT }), this.setOptions({ ...e instanceof HTMLElement ? ng(e.dataset) : null, ...n }), this.constructor.all.set(e, this), H(this, fn, e), this.init(), requestAnimationFrame(() => {
      var o;
      this.afterInit(), (o = v(this, At)) == null || o.emit("inited", this);
    });
  }
  get options() {
    return v(this, se);
  }
  get element() {
    return v(this, fn);
  }
  get events() {
    return v(this, At);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(e) {
    return e && Object.assign(v(this, se), e), v(this, se);
  }
  render(e) {
    this.setOptions(e);
  }
  destroy() {
    this.constructor.all.delete(v(this, fn)), v(this, At) && (v(this, At).emit("destroyed", this), v(this, At).offAll());
  }
  on(e, n, o) {
    var i;
    (i = v(this, At)) == null || i.on(e, n, o);
  }
  once(e, n, o) {
    var i;
    (i = v(this, At)) == null || i.once(e, n, o);
  }
  off(e, n, o) {
    var i;
    (i = v(this, At)) == null || i.off(e, n, o);
  }
  emit(e, n) {
    var l;
    let o = oa.createEvent(e, n);
    const i = `on${o.type.replace(`.${this.constructor.KEY}`, "")}`, r = v(this, se)[i];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = v(this, At)) == null ? void 0 : l.emit(o), o;
  }
  i18n(e, n, o) {
    return Mr(v(this, se).i18n, e, n, o, this.options.lang, this.constructor.NAME) ?? `{i18n:${e}}`;
  }
  /**
   * Component internal name, like "Menu"
   */
  static get NAME() {
    throw new Error(`static NAME should be override in class ${this.name}`);
  }
  /**
   * Component data key, like "zui.menu"
   */
  static get KEY() {
    return `zui.${this.NAME}`;
  }
  static get all() {
    const e = this.NAME;
    if (this.allComponents.has(e))
      return this.allComponents.get(e);
    const n = /* @__PURE__ */ new Map();
    return this.allComponents.set(e, n), n;
  }
  static getAll() {
    return this.all;
  }
  static get(e) {
    return this.all.get(e);
  }
  static ensure(e, n) {
    return this.get(e) || new this(e, n);
  }
}
se = new WeakMap(), fn = new WeakMap(), At = new WeakMap(), L(Ut, "EVENTS", !1), L(Ut, "DEFAULT", {}), L(Ut, "allComponents", /* @__PURE__ */ new Map());
class Dt extends Ut {
  constructor() {
    super(...arguments);
    L(this, "ref", Vm());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  destroy() {
    super.destroy(), this.element.innerHTML = "";
  }
  render(n) {
    const o = this.constructor.Component;
    qm(/* @__PURE__ */ Pf(o, { ref: this.ref, ...this.setOptions(n) }), this.element);
  }
}
var fc, ct, Of, Hf, Jn, ra, Wf = {}, If = [], og = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ve(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Uf(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Un(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? fc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Yr(t, l, o, i, null);
}
function Yr(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Of };
  return i == null && ct.vnode != null && ct.vnode(r), r;
}
function rg() {
  return { current: null };
}
function uc(t) {
  return t.children;
}
function Qn(t, e) {
  this.props = t, this.context = e;
}
function Do(t, e) {
  if (e == null)
    return t.__ ? Do(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Do(t) : null;
}
function Ff(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Ff(t);
  }
}
function sa(t) {
  (!t.__d && (t.__d = !0) && Jn.push(t) && !as.__r++ || ra !== ct.debounceRendering) && ((ra = ct.debounceRendering) || setTimeout)(as);
}
function as() {
  for (var t; as.__r = Jn.length; )
    t = Jn.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Jn = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = ve({}, r)).__v = r.__v + 1, zf(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Do(r), r.__h), ig(o, r), r.__e != l && Ff(r)));
    });
}
function Bf(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || If, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Yr(null, a, null, null, a) : Array.isArray(a) ? Yr(uc, { children: a }, null, null, null) : a.__b > 0 ? Yr(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      zf(t, a, f = f || Wf, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = jf(a, _, t) : _ = Vf(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Do(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Gf(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Yf(p[s], p[++s], p[++s]);
}
function jf(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? jf(o, e, n) : Vf(n, o, o, i, o.__e, e));
  return e;
}
function Vf(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function sg(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || _s(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || _s(t, r, e[r], n[r], o);
}
function ia(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || og.test(e) ? n : n + "px";
}
function _s(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || ia(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || ia(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? ca : la, r) : t.removeEventListener(e, r ? ca : la, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function la(t) {
  this.l[t.type + !1](ct.event ? ct.event(t) : t);
}
function ca(t) {
  this.l[t.type + !0](ct.event ? ct.event(t) : t);
}
function zf(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ct.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Qn(p, g), s.constructor = y, s.render = cg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = ve({}, s.__s)), ve(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = ct.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = ve(ve({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === uc && h.key == null ? h.props.children : h, Bf(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = lg(n.__e, e, n, o, i, r, l, _);
    (h = ct.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ct.__e(x, e, n);
  }
}
function ig(t, e) {
  ct.__c && ct.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ct.__e(o, n.__v);
    }
  });
}
function lg(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && fc.call(t.childNodes), h = (d = n.props || Wf).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (sg(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Bf(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Do(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Uf(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && _s(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && _s(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Yf(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ct.__e(o, n);
  }
}
function Gf(t, e, n) {
  var o, i;
  if (ct.unmount && ct.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Yf(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ct.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Gf(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Uf(t.__e), t.__ = t.__e = t.__d = void 0;
}
function cg(t, e, n) {
  return this.constructor(t, n);
}
fc = If.slice, ct = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Of = 0, Hf = function(t) {
  return t != null && t.constructor === void 0;
}, Qn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ve({}, this.state), typeof t == "function" && (t = t(ve({}, n), this.props)), t && ve(n, t), t != null && this.__v && (e && this._sb.push(e), sa(this));
}, Qn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), sa(this));
}, Qn.prototype.render = uc, Jn = [], as.__r = 0;
var ag = 0;
function Kt(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ag, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ct.vnode && ct.vnode(_), _;
}
function ll(...t) {
  const e = [], n = /* @__PURE__ */ new Map(), o = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const l = n.get(i);
    typeof l == "number" ? e[l][1] = !!r : (n.set(i, e.length), e.push([i, !!r]));
  };
  return t.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? ll(...i).forEach(o) : i && typeof i == "object" ? Object.entries(i).forEach(o) : typeof i == "string" && i.split(" ").forEach((r) => o(r, !0));
  }), e.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const F = (...t) => ll(...t).reduce((e, [n, o]) => (o && e.push(n), e), []).join(" ");
function _g({
  component: t = "div",
  className: e,
  children: n,
  style: o,
  attrs: i
}) {
  return Un(t, {
    className: F(e),
    style: o,
    ...i
  }, n);
}
function qf({
  component: t = "a",
  className: e,
  children: n,
  attrs: o,
  url: i,
  disabled: r,
  active: l,
  icon: c,
  text: _,
  target: h,
  trailingIcon: s,
  hint: d,
  style: f,
  onClick: a
}) {
  const u = [
    typeof c == "string" ? /* @__PURE__ */ Kt("i", { class: `icon ${c}` }) : c,
    /* @__PURE__ */ Kt("span", { className: "text", children: _ }),
    typeof n == "function" ? n() : n,
    typeof s == "string" ? /* @__PURE__ */ Kt("i", { class: `icon ${s}` }) : s
  ];
  return Un(t, {
    className: F(e, { disabled: r, active: l }),
    title: d,
    [t === "a" ? "href" : "data-url"]: i,
    [t === "a" ? "target" : "data-target"]: h,
    style: f,
    onClick: a,
    ...o
  }, ...u);
}
function fg({
  component: t = "div",
  className: e,
  text: n,
  attrs: o,
  children: i,
  style: r,
  onClick: l
}) {
  return Un(t, {
    className: F(e),
    style: r,
    onClick: l,
    ...o
  }, n, typeof i == "function" ? i() : i);
}
function ug({
  component: t = "div",
  className: e,
  style: n,
  space: o,
  flex: i,
  attrs: r,
  onClick: l,
  children: c
}) {
  return Un(t, {
    className: F(e),
    style: { width: o, height: o, flex: i, ...n },
    onClick: l,
    ...r
  }, c);
}
function hg(t) {
  const {
    tag: e,
    className: n,
    style: o,
    renders: i,
    generateArgs: r = [],
    generatorThis: l,
    generators: c,
    onGenerate: _,
    onRenderItem: h,
    ...s
  } = t, d = [n], f = { ...o }, a = [], u = [];
  return i.forEach((b) => {
    const p = [];
    typeof b == "string" && c && c[b] && (b = c[b]), typeof b == "function" ? _ ? p.push(..._.call(l, b, a, ...r)) : p.push(...b.call(l, a, ...r) ?? []) : p.push(b), p.forEach((m) => {
      m != null && (typeof m == "object" && !xf(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? a.push(
        /* @__PURE__ */ Pf("div", { className: F(m.className), style: m.style, dangerouslySetInnerHTML: { __html: m.html }, ...m.attrs ?? {} })
      ) : m.__html ? u.push(m.__html) : (m.style && Object.assign(f, m.style), m.className && d.push(m.className), m.children && a.push(m.children), m.attrs && Object.assign(s, m.attrs)) : a.push(m));
    });
  }), u.length && Object.assign(s, { dangerouslySetInnerHTML: { __html: u } }), [{
    className: F(d),
    style: f,
    ...s
  }, a];
}
function Yl({
  tag: t = "div",
  ...e
}) {
  const [n, o] = hg(e);
  return Ef(t, n, ...o);
}
function dg(t) {
  return /* @__PURE__ */ Kt(Yl, { ...t });
}
function Xf({
  component: t = "div",
  className: e,
  children: n,
  style: o,
  attrs: i
}) {
  return Un(t, {
    className: F(e),
    style: o,
    ...i
  }, n);
}
var Vn;
let On = (Vn = class extends Qn {
  constructor() {
    super(...arguments);
    L(this, "ref", rg());
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
    var n, o;
    (o = (n = this.props).beforeDestroy) == null || o.call(n, { menu: this });
  }
  afterRender(n) {
    var o, i;
    (i = (o = this.props).afterRender) == null || i.call(o, { menu: this, firstRender: n });
  }
  handleItemClick(n, o, i, r) {
    i && i.call(r.target, r);
    const { onClickItem: l } = this.props;
    l && l({ menu: this, item: n, index: o, event: r });
  }
  beforeRender() {
    var i;
    const n = { ...this.props };
    typeof n.items == "function" && (n.items = n.items(this));
    const o = (i = n.beforeRender) == null ? void 0 : i.call(n, { menu: this, options: n });
    return o && Object.assign(n, o), n;
  }
  getItemRenderProps(n, o, i) {
    const { itemProps: r, onClickItem: l } = n, c = { key: i, ...o };
    return r && Object.assign(c, r[o.type || "item"]), (l || o.onClick) && (c.onClick = this.handleItemClick.bind(this, c, i, o.onClick)), c.className = F(c.className), c;
  }
  renderItem(n, o, i) {
    const r = this.getItemRenderProps(n, o, i), { itemRender: l } = n;
    if (l) {
      if (typeof l == "object") {
        const p = l[o.type || "item"];
        if (p)
          return /* @__PURE__ */ Kt(p, { ...r });
      } else if (typeof l == "function") {
        const p = l.call(this, r, Un);
        if (Hf(p))
          return p;
        typeof p == "object" && Object.assign(r, p);
      }
    }
    const { type: c = "item", component: _, key: h = i, rootAttrs: s, rootClass: d, rootStyle: f, rootChildren: a, ...u } = r, b = !_ || typeof _ == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || On.ItemComponents[c] : _;
    return Object.assign(u, {
      type: c,
      component: typeof _ == "string" ? _ : void 0
    }), this.renderTypedItem(b, {
      className: F(d),
      children: a,
      style: f,
      key: h,
      ...s
    }, {
      ...u,
      type: c,
      component: typeof _ == "string" ? _ : void 0
    });
  }
  renderTypedItem(n, o, i) {
    const { children: r, className: l, key: c, ..._ } = o;
    return /* @__PURE__ */ Kt(
      "li",
      {
        className: F(`${this.name}-${i.type}`, l),
        ..._,
        children: [
          /* @__PURE__ */ Kt(n, { ...i }),
          typeof r == "function" ? r() : r
        ]
      },
      c
    );
  }
  render() {
    const n = this.beforeRender(), {
      name: o,
      style: i,
      itemProps: r,
      className: l,
      items: c,
      children: _,
      itemRender: h,
      onClickItem: s,
      beforeRender: d,
      afterRender: f,
      beforeDestroy: a,
      ...u
    } = n, b = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ Kt(b, { class: F(this.name, l), ...u, ref: this.ref, children: [
      c && c.map(this.renderItem.bind(this, n)),
      _
    ] });
  }
}, L(Vn, "ItemComponents", {
  divider: _g,
  item: qf,
  heading: fg,
  space: ug,
  custom: dg,
  basic: Xf
}), L(Vn, "ROOT_TAG", "menu"), L(Vn, "NAME", "action-menu"), Vn);
class aa extends Dt {
}
L(aa, "NAME", "actionmenu"), L(aa, "Component", On);
function _a({
  ...t
}) {
  return /* @__PURE__ */ Kt(qf, { ...t });
}
var Ul, lr, Bt, un;
let Kf = (Ul = class extends On {
  constructor(n) {
    super(n);
    M(this, lr, /* @__PURE__ */ new Set());
    M(this, Bt, void 0);
    M(this, un, (n, o, i) => {
      this.toggleNestedMenu(n, o), i.preventDefault();
    });
    H(this, Bt, n.nestedShow === void 0), v(this, Bt) && (this.state = { nestedShow: n.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const n = super.beforeRender(), { nestedShow: o, nestedTrigger: i, defaultNestedShow: r, controlledMenu: l, ...c } = n;
    return c;
  }
  renderNestedMenu(n) {
    let { items: o } = n;
    if (!o || (typeof o == "function" && (o = o(n, this)), !o.length))
      return;
    const i = this.constructor;
    return /* @__PURE__ */ Kt(
      i,
      {
        items: o,
        name: this.props.name,
        nestedShow: v(this, Bt) ? this.state.nestedShow : this.props.nestedShow,
        nestedTrigger: this.nestedTrigger,
        controlledMenu: this.props.controlledMenu || this,
        itemProps: this.props.itemProps,
        onClickItem: this.props.onClickItem,
        afterRender: this.props.afterRender,
        beforeRender: this.props.beforeRender,
        beforeDestroy: this.props.beforeDestroy,
        itemRender: this.props.itemRender
      }
    );
  }
  isNestedItem(n) {
    return (!n.type || n.type === "item") && !!n.items;
  }
  renderToggleIcon(n, o) {
  }
  getItemRenderProps(n, o, i) {
    const r = super.getItemRenderProps(n, o, i);
    if (!this.isNestedItem(r))
      return r;
    const l = r.key ?? i;
    v(this, lr).add(l);
    const c = this.isNestedMenuShow(l);
    if (c && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = _a), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: v(this, un).bind(this, l, !0),
        onMouseLeave: v(this, un).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = r;
      r.onClick = (s) => {
        v(this, un).call(this, l, void 0, s), h == null || h(s);
      };
    }
    const _ = this.renderToggleIcon(c, r);
    return _ && (r.children = [r.children, _]), r.rootClass = [r.rootClass, "has-nested-menu", c ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = v(this, Bt) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggleNestedMenu(n, o);
    if (!v(this, Bt))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...v(this, lr).values()].reduce((l, c) => (l[c] = !0, l), {}) : r = {}), o === void 0)
      o = !r[n];
    else if (!!r[n] == !!o)
      return !1;
    return o ? r[n] = o : delete r[n], this.setState({ nestedShow: { ...r } }), !0;
  }
  showNestedMenu(n) {
    return this.toggleNestedMenu(n, !0);
  }
  hideNestedMenu(n) {
    return this.toggleNestedMenu(n, !1);
  }
  showAllNestedMenu() {
    v(this, Bt) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    v(this, Bt) && this.setState({ nestedShow: !1 });
  }
}, lr = new WeakMap(), Bt = new WeakMap(), un = new WeakMap(), L(Ul, "ItemComponents", {
  item: _a
}), Ul);
class fa extends Dt {
}
L(fa, "NAME", "actionmenunested"), L(fa, "Component", Kf);
var hc, at, Zf, to, ua, Jf = {}, Qf = [], pg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function be(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function tu(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function mg(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? hc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Gr(t, l, o, i, null);
}
function Gr(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Zf };
  return i == null && at.vnode != null && at.vnode(r), r;
}
function dc(t) {
  return t.children;
}
function eo(t, e) {
  this.props = t, this.context = e;
}
function Ro(t, e) {
  if (e == null)
    return t.__ ? Ro(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Ro(t) : null;
}
function eu(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return eu(t);
  }
}
function ha(t) {
  (!t.__d && (t.__d = !0) && to.push(t) && !fs.__r++ || ua !== at.debounceRendering) && ((ua = at.debounceRendering) || setTimeout)(fs);
}
function fs() {
  for (var t; fs.__r = to.length; )
    t = to.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), to = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = be({}, r)).__v = r.__v + 1, su(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ro(r), r.__h), yg(o, r), r.__e != l && eu(r)));
    });
}
function nu(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Qf, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Gr(null, a, null, null, a) : Array.isArray(a) ? Gr(dc, { children: a }, null, null, null) : a.__b > 0 ? Gr(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      su(t, a, f = f || Jf, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = ou(a, _, t) : _ = ru(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Ro(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && lu(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      iu(p[s], p[++s], p[++s]);
}
function ou(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? ou(o, e, n) : ru(n, o, o, i, o.__e, e));
  return e;
}
function ru(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function gg(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || us(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || us(t, r, e[r], n[r], o);
}
function da(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || pg.test(e) ? n : n + "px";
}
function us(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || da(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || da(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? ma : pa, r) : t.removeEventListener(e, r ? ma : pa, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function pa(t) {
  this.l[t.type + !1](at.event ? at.event(t) : t);
}
function ma(t) {
  this.l[t.type + !0](at.event ? at.event(t) : t);
}
function su(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = at.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new eo(p, g), s.constructor = y, s.render = bg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = be({}, s.__s)), be(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = at.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = be(be({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === dc && h.key == null ? h.props.children : h, nu(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = vg(n.__e, e, n, o, i, r, l, _);
    (h = at.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), at.__e(x, e, n);
  }
}
function yg(t, e) {
  at.__c && at.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      at.__e(o, n.__v);
    }
  });
}
function vg(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && hc.call(t.childNodes), h = (d = n.props || Jf).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (gg(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, nu(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Ro(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && tu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && us(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && us(t, "checked", u, d.checked, !1));
  }
  return t;
}
function iu(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    at.__e(o, n);
  }
}
function lu(t, e, n) {
  var o, i;
  if (at.unmount && at.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || iu(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        at.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && lu(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || tu(t.__e), t.__ = t.__e = t.__d = void 0;
}
function bg(t, e, n) {
  return this.constructor(t, n);
}
hc = Qf.slice, at = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Zf = 0, eo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = be({}, this.state), typeof t == "function" && (t = t(be({}, n), this.props)), t && be(n, t), t != null && this.__v && (e && this._sb.push(e), ha(this));
}, eo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ha(this));
}, eo.prototype.render = dc, to = [], fs.__r = 0;
var wg = 0;
function Bn(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --wg, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return at.vnode && at.vnode(_), _;
}
let Oe = class extends eo {
  render() {
    const {
      component: e,
      type: n,
      size: o,
      className: i,
      children: r,
      url: l,
      target: c,
      disabled: _,
      active: h,
      loading: s,
      loadingIcon: d,
      loadingText: f,
      icon: a,
      text: u,
      trailingIcon: b,
      caret: p,
      square: m,
      hint: g,
      ...w
    } = this.props, k = e || (l ? "a" : "button"), C = u == null || typeof u == "string" && !u.length || s && !f, A = C && !a && !b && !r && !s;
    return mg(
      k,
      {
        className: F("btn", n, i, {
          "btn-caret": A,
          disabled: _ || s,
          active: h,
          loading: s,
          square: m === void 0 ? !A && !r && C : m
        }, o ? `size-${o}` : ""),
        title: g,
        [k === "a" ? "href" : "data-url"]: l,
        [k === "a" ? "target" : "data-target"]: c,
        type: k === "button" ? "button" : void 0,
        ...w
      },
      s ? /* @__PURE__ */ Bn("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : typeof a == "string" ? /* @__PURE__ */ Bn("i", { class: `icon ${a}` }) : a,
      C ? null : /* @__PURE__ */ Bn("span", { className: "text", children: s ? f : u }),
      s ? null : r,
      s ? null : typeof b == "string" ? /* @__PURE__ */ Bn("i", { class: `icon ${b}` }) : b,
      s ? null : p ? /* @__PURE__ */ Bn("span", { className: typeof p == "string" ? `caret-${p}` : "caret" }) : null
    );
  }
};
class ga extends Dt {
}
L(ga, "NAME", "button"), L(ga, "Component", Oe);
var Gl;
Gl = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} };
var $g = 0;
function kg(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --$g, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Gl.vnode && Gl.vnode(_), _;
}
var Fl;
let pc = (Fl = class extends Kf {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const e = super.beforeRender();
    let { hasIcons: n } = e;
    return n === void 0 && (n = e.items.some((o) => o.icon)), e.className = F(e.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": e.items.some((o) => this.isNestedItem(o))
    }), e;
  }
  renderToggleIcon(e) {
    return /* @__PURE__ */ kg("span", { class: `${this.name}-toggle-icon caret-${e ? "down" : "right"}` });
  }
}, L(Fl, "NAME", "menu"), Fl);
class ya extends Dt {
}
L(ya, "NAME", "menu"), L(ya, "Component", pc);
var cl, et, cu, no, va, hs = {}, au = [], xg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function we(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function _u(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ql(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? cl.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return qr(t, l, o, i, null);
}
function qr(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++cu };
  return i == null && et.vnode != null && et.vnode(r), r;
}
function al(t) {
  return t.children;
}
function rn(t, e) {
  this.props = t, this.context = e;
}
function Po(t, e) {
  if (e == null)
    return t.__ ? Po(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Po(t) : null;
}
function fu(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return fu(t);
  }
}
function ba(t) {
  (!t.__d && (t.__d = !0) && no.push(t) && !ds.__r++ || va !== et.debounceRendering) && ((va = et.debounceRendering) || setTimeout)(ds);
}
function ds() {
  for (var t; ds.__r = no.length; )
    t = no.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), no = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = we({}, r)).__v = r.__v + 1, mc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Po(r), r.__h), pu(o, r), r.__e != l && fu(r)));
    });
}
function uu(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || au, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? qr(null, a, null, null, a) : Array.isArray(a) ? qr(al, { children: a }, null, null, null) : a.__b > 0 ? qr(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      mc(t, a, f = f || hs, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = hu(a, _, t) : _ = du(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Po(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && gu(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      mu(p[s], p[++s], p[++s]);
}
function hu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? hu(o, e, n) : du(n, o, o, i, o.__e, e));
  return e;
}
function du(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Sg(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ps(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ps(t, r, e[r], n[r], o);
}
function wa(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || xg.test(e) ? n : n + "px";
}
function ps(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || wa(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || wa(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? ka : $a, r) : t.removeEventListener(e, r ? ka : $a, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function $a(t) {
  this.l[t.type + !1](et.event ? et.event(t) : t);
}
function ka(t) {
  this.l[t.type + !0](et.event ? et.event(t) : t);
}
function mc(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = et.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new rn(p, g), s.constructor = y, s.render = Eg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = we({}, s.__s)), we(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = et.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = we(we({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === al && h.key == null ? h.props.children : h, uu(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Cg(n.__e, e, n, o, i, r, l, _);
    (h = et.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), et.__e(x, e, n);
  }
}
function pu(t, e) {
  et.__c && et.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      et.__e(o, n.__v);
    }
  });
}
function Cg(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && cl.call(t.childNodes), h = (d = n.props || hs).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Sg(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, uu(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Po(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && _u(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && ps(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && ps(t, "checked", u, d.checked, !1));
  }
  return t;
}
function mu(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    et.__e(o, n);
  }
}
function gu(t, e, n) {
  var o, i;
  if (et.unmount && et.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || mu(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        et.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && gu(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || _u(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Eg(t, e, n) {
  return this.constructor(t, n);
}
function xa(t, e, n) {
  var o, i, r;
  et.__ && et.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], mc(e, t = (!o && n || e).__k = ql(al, null, [t]), i || hs, hs, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? cl.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), pu(r, t);
}
cl = au.slice, et = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, cu = 0, rn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = we({}, this.state), typeof t == "function" && (t = t(we({}, n), this.props)), t && we(n, t), t != null && this.__v && (e && this._sb.push(e), ba(this));
}, rn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ba(this));
}, rn.prototype.render = al, no = [], ds.__r = 0;
var Ag = 0;
function oo(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ag, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return et.vnode && et.vnode(_), _;
}
var gc, _t, yu, vu, ro, Sa, bu = {}, wu = [], Tg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function $e(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function $u(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Mg(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? gc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Xr(t, l, o, i, null);
}
function Xr(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++yu };
  return i == null && _t.vnode != null && _t.vnode(r), r;
}
function yc(t) {
  return t.children;
}
function so(t, e) {
  this.props = t, this.context = e;
}
function Oo(t, e) {
  if (e == null)
    return t.__ ? Oo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Oo(t) : null;
}
function ku(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return ku(t);
  }
}
function Ca(t) {
  (!t.__d && (t.__d = !0) && ro.push(t) && !ms.__r++ || Sa !== _t.debounceRendering) && ((Sa = _t.debounceRendering) || setTimeout)(ms);
}
function ms() {
  for (var t; ms.__r = ro.length; )
    t = ro.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), ro = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = $e({}, r)).__v = r.__v + 1, Eu(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Oo(r), r.__h), Ng(o, r), r.__e != l && ku(r)));
    });
}
function xu(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || wu, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Xr(null, a, null, null, a) : Array.isArray(a) ? Xr(yc, { children: a }, null, null, null) : a.__b > 0 ? Xr(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Eu(t, a, f = f || bu, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Su(a, _, t) : _ = Cu(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Oo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Tu(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Au(p[s], p[++s], p[++s]);
}
function Su(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Su(o, e, n) : Cu(n, o, o, i, o.__e, e));
  return e;
}
function Cu(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Lg(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || gs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || gs(t, r, e[r], n[r], o);
}
function Ea(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Tg.test(e) ? n : n + "px";
}
function gs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Ea(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Ea(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Ta : Aa, r) : t.removeEventListener(e, r ? Ta : Aa, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Aa(t) {
  this.l[t.type + !1](_t.event ? _t.event(t) : t);
}
function Ta(t) {
  this.l[t.type + !0](_t.event ? _t.event(t) : t);
}
function Eu(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = _t.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new so(p, g), s.constructor = y, s.render = Rg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = $e({}, s.__s)), $e(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = _t.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = $e($e({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === yc && h.key == null ? h.props.children : h, xu(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Dg(n.__e, e, n, o, i, r, l, _);
    (h = _t.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), _t.__e(x, e, n);
  }
}
function Ng(t, e) {
  _t.__c && _t.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      _t.__e(o, n.__v);
    }
  });
}
function Dg(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && gc.call(t.childNodes), h = (d = n.props || bu).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Lg(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, xu(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Oo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && $u(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && gs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && gs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Au(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    _t.__e(o, n);
  }
}
function Tu(t, e, n) {
  var o, i;
  if (_t.unmount && _t.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Au(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        _t.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Tu(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || $u(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Rg(t, e, n) {
  return this.constructor(t, n);
}
gc = wu.slice, _t = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, yu = 0, vu = function(t) {
  return t != null && t.constructor === void 0;
}, so.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = $e({}, this.state), typeof t == "function" && (t = t($e({}, n), this.props)), t && $e(n, t), t != null && this.__v && (e && this._sb.push(e), Ca(this));
}, so.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ca(this));
}, so.prototype.render = yc, ro = [], ms.__r = 0;
var Pg = 0;
function Ma(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Pg, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return _t.vnode && _t.vnode(_), _;
}
let vc = class extends so {
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
  handleItemClick(e, n, o, i) {
    o && o.call(i.target, i);
    const { onClickItem: r } = this.props;
    r && r.call(this, { item: e, index: n, event: i });
  }
  beforeRender() {
    var o;
    const e = { ...this.props }, n = (o = e.beforeRender) == null ? void 0 : o.call(this, e);
    return n && Object.assign(e, n), typeof e.items == "function" && (e.items = e.items.call(this)), e;
  }
  onRenderItem(e, n) {
    const { key: o = n, ...i } = e;
    return /* @__PURE__ */ Ma(Oe, { ...i }, o);
  }
  renderItem(e, n, o) {
    const { itemRender: i, defaultBtnProps: r, onClickItem: l } = e, c = { key: o, ...n };
    if (r && Object.assign(c, r), l && (c.onClick = this.handleItemClick.bind(this, c, o, n.onClick)), i) {
      const _ = i.call(this, c, Mg);
      if (vu(_))
        return _;
      typeof _ == "object" && Object.assign(c, _);
    }
    return this.onRenderItem(c, o);
  }
  render() {
    const e = this.beforeRender(), {
      className: n,
      items: o,
      size: i,
      type: r,
      defaultBtnProps: l,
      children: c,
      itemRender: _,
      onClickItem: h,
      beforeRender: s,
      afterRender: d,
      beforeDestroy: f,
      ...a
    } = e;
    return /* @__PURE__ */ Ma(
      "div",
      {
        className: F("btn-group", i ? `size-${i}` : "", n),
        ...a,
        children: [
          o && o.map(this.renderItem.bind(this, e)),
          c
        ]
      }
    );
  }
};
function Og({
  ...t
}) {
  return /* @__PURE__ */ oo(vc, { ...t });
}
class Mu extends rn {
  render() {
    const { message: e, className: n, type: o, actions: i, close: r } = this.props, l = F([o, "border-none"]), c = i != null && i.length ? i.map((_) => ({ ..._, className: l })) : [];
    if (r) {
      const _ = {
        name: "times",
        icon: "icon-times",
        className: l,
        action: function() {
          console.log("你点击了关闭按钮。");
        }
      };
      c.push(_);
    }
    return /* @__PURE__ */ oo("div", { class: F([n, o || "default", "messager"]), children: [
      /* @__PURE__ */ oo("div", { class: "messager-content", children: e }),
      /* @__PURE__ */ oo(
        Og,
        {
          items: c
        }
      )
    ] });
  }
}
L(Mu, "defaultProps");
class Lu extends rn {
  render() {
    const { className: e, placement: n } = this.props;
    return /* @__PURE__ */ oo(
      "div",
      {
        class: F([e || "", "messagers-holder", "col"]),
        "data-placement": n
      }
    );
  }
}
L(Lu, "defaultProps");
class La extends Ut {
  show(e, n) {
    console.log(e, n, "showFunc");
    const o = n != null && n.placement ? n.placement : "top", i = (n == null ? void 0 : n.close) !== !1;
    let r = document.querySelector(".messagers-holder[data-placement=" + o + "]");
    if (!r) {
      const _ = document.createElement("div");
      document.body.appendChild(_);
      const h = {
        ...n,
        placement: o
      };
      xa(ql(Lu, h), _);
    }
    r = document.querySelector(".messagers-holder[data-placement=" + o + "]");
    const l = document.createElement("div");
    r.appendChild(l);
    const c = {
      ...n,
      message: e,
      placement: o,
      close: i
    };
    xa(ql(Mu, c), r, l);
  }
}
L(La, "NAME", "messager"), L(La, "DEFAULT", {
  placement: "top",
  type: "default",
  close: !0
});
var Nu, ft, Du, io, Na, Ru = {}, Pu = [], Hg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ke(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Ou(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Nl(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Du };
  return i == null && ft.vnode != null && ft.vnode(r), r;
}
function bc(t) {
  return t.children;
}
function lo(t, e) {
  this.props = t, this.context = e;
}
function Ho(t, e) {
  if (e == null)
    return t.__ ? Ho(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Ho(t) : null;
}
function Hu(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Hu(t);
  }
}
function Da(t) {
  (!t.__d && (t.__d = !0) && io.push(t) && !ys.__r++ || Na !== ft.debounceRendering) && ((Na = ft.debounceRendering) || setTimeout)(ys);
}
function ys() {
  for (var t; ys.__r = io.length; )
    t = io.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), io = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = ke({}, r)).__v = r.__v + 1, Fu(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ho(r), r.__h), Ig(o, r), r.__e != l && Hu(r)));
    });
}
function Wu(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Pu, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Nl(null, a, null, null, a) : Array.isArray(a) ? Nl(bc, { children: a }, null, null, null) : a.__b > 0 ? Nl(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Fu(t, a, f = f || Ru, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Iu(a, _, t) : _ = Uu(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Ho(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && ju(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Bu(p[s], p[++s], p[++s]);
}
function Iu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Iu(o, e, n) : Uu(n, o, o, i, o.__e, e));
  return e;
}
function Uu(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Wg(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || vs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || vs(t, r, e[r], n[r], o);
}
function Ra(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Hg.test(e) ? n : n + "px";
}
function vs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Ra(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Ra(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Oa : Pa, r) : t.removeEventListener(e, r ? Oa : Pa, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Pa(t) {
  this.l[t.type + !1](ft.event ? ft.event(t) : t);
}
function Oa(t) {
  this.l[t.type + !0](ft.event ? ft.event(t) : t);
}
function Fu(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ft.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new lo(p, g), s.constructor = y, s.render = Fg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = ke({}, s.__s)), ke(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = ft.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = ke(ke({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === bc && h.key == null ? h.props.children : h, Wu(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Ug(n.__e, e, n, o, i, r, l, _);
    (h = ft.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ft.__e(x, e, n);
  }
}
function Ig(t, e) {
  ft.__c && ft.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ft.__e(o, n.__v);
    }
  });
}
function Ug(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Nu.call(t.childNodes), h = (d = n.props || Ru).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Wg(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Wu(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Ho(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ou(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && vs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && vs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Bu(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ft.__e(o, n);
  }
}
function ju(t, e, n) {
  var o, i;
  if (ft.unmount && ft.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Bu(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ft.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && ju(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Ou(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Fg(t, e, n) {
  return this.constructor(t, n);
}
Nu = Pu.slice, ft = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Du = 0, lo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ke({}, this.state), typeof t == "function" && (t = t(ke({}, n), this.props)), t && ke(n, t), t != null && this.__v && (e && this._sb.push(e), Da(this));
}, lo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Da(this));
}, lo.prototype.render = bc, io = [], ys.__r = 0;
var Bg = 0;
function Or(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Bg, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ft.vnode && ft.vnode(_), _;
}
var Br;
let jg = (Br = class extends lo {
  render() {
    const { percent: e, circleSize: n, circleBorderSize: o, circleBgColor: i, circleColor: r } = this.props, l = (n - o) / 2, c = n / 2;
    return /* @__PURE__ */ Or("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ Or("circle", { cx: c, cy: c, r: l, stroke: i, "stroke-width": o }),
      /* @__PURE__ */ Or("circle", { cx: c, cy: c, r: l, stroke: r, "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - e) / 100, "stroke-width": o }),
      /* @__PURE__ */ Or("text", { x: c, y: c + o / 4, "dominant-baseline": "middle", style: { fontSize: `${l}px` }, children: Math.round(e) })
    ] });
  }
}, L(Br, "NAME", "zui.progress-circle"), L(Br, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), Br);
class Ha extends Dt {
}
L(Ha, "NAME", "table-sorter"), L(Ha, "Component", jg);
function Vg(t) {
  const e = typeof t == "string" ? document.querySelector(t) : t;
  if (!e)
    return !1;
  if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)
    return e.select(), !0;
  if (window.getSelection) {
    const n = window.getSelection();
    if (n) {
      const o = document.createRange();
      return o.selectNodeContents(e), n.removeAllRanges(), n.addRange(o), !0;
    }
  }
  return !1;
}
function zg(t) {
  document.readyState !== "loading" ? t() : document.addEventListener("DOMContentLoaded", t);
}
function Yg(t, e) {
  const n = typeof t == "string" ? document.querySelector(t) : t;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (e != null && e.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= i;
  const l = o.top <= i && o.top + o.height >= 0, c = o.left <= r && o.left + o.width >= 0;
  return l && c;
}
const Iw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classes: F,
  domReady: zg,
  getClassList: ll,
  isElementVisible: Yg,
  selectText: Vg
}, Symbol.toStringTag, { value: "Module" }));
let Gg = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var cr, ue, jt, hn, dn, Kr;
const zc = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, n = "local") {
    M(this, dn);
    M(this, cr, void 0);
    M(this, ue, void 0);
    M(this, jt, void 0);
    M(this, hn, void 0);
    H(this, cr, n), H(this, ue, `ZUI_STORE:${e ?? Gg()}`), H(this, jt, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return v(this, cr);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (v(this, hn) || H(this, hn, new zc(v(this, ue), "session")), v(this, hn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(e, n) {
    const o = v(this, jt).getItem(U(this, dn, Kr).call(this, e));
    return typeof o == "string" ? JSON.parse(o) : o ?? n;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(e, n) {
    if (n == null)
      return this.remove(e);
    v(this, jt).setItem(U(this, dn, Kr).call(this, e), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    v(this, jt).removeItem(U(this, dn, Kr).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let n = 0; n < v(this, jt).length; n++) {
      const o = v(this, jt).key(n);
      if (o != null && o.startsWith(v(this, ue))) {
        const i = v(this, jt).getItem(o);
        typeof i == "string" && e(o.substring(v(this, ue).length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const e = {};
    return this.each((n, o) => {
      e[n] = o;
    }), e;
  }
};
let bs = zc;
cr = new WeakMap(), ue = new WeakMap(), jt = new WeakMap(), hn = new WeakMap(), dn = new WeakSet(), Kr = function(e) {
  return `${v(this, ue)}:${e}`;
};
const qg = new bs("DEFAULT");
function Xg(t, e = "local") {
  return new bs(t, e);
}
Object.assign(qg, { create: Xg });
var Vu, ut, zu, co, Wa, Yu = {}, Gu = [], Kg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function xe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function qu(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Dl(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++zu };
  return i == null && ut.vnode != null && ut.vnode(r), r;
}
function wc(t) {
  return t.children;
}
function ao(t, e) {
  this.props = t, this.context = e;
}
function Wo(t, e) {
  if (e == null)
    return t.__ ? Wo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Wo(t) : null;
}
function Xu(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Xu(t);
  }
}
function Ia(t) {
  (!t.__d && (t.__d = !0) && co.push(t) && !ws.__r++ || Wa !== ut.debounceRendering) && ((Wa = ut.debounceRendering) || setTimeout)(ws);
}
function ws() {
  for (var t; ws.__r = co.length; )
    t = co.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), co = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = xe({}, r)).__v = r.__v + 1, Qu(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Wo(r), r.__h), Jg(o, r), r.__e != l && Xu(r)));
    });
}
function Ku(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Gu, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Dl(null, a, null, null, a) : Array.isArray(a) ? Dl(wc, { children: a }, null, null, null) : a.__b > 0 ? Dl(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Qu(t, a, f = f || Yu, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Zu(a, _, t) : _ = Ju(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Wo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && eh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      th(p[s], p[++s], p[++s]);
}
function Zu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Zu(o, e, n) : Ju(n, o, o, i, o.__e, e));
  return e;
}
function Ju(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Zg(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || $s(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || $s(t, r, e[r], n[r], o);
}
function Ua(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Kg.test(e) ? n : n + "px";
}
function $s(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Ua(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Ua(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Ba : Fa, r) : t.removeEventListener(e, r ? Ba : Fa, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Fa(t) {
  this.l[t.type + !1](ut.event ? ut.event(t) : t);
}
function Ba(t) {
  this.l[t.type + !0](ut.event ? ut.event(t) : t);
}
function Qu(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ut.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new ao(p, g), s.constructor = y, s.render = ty), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = xe({}, s.__s)), xe(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = ut.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = xe(xe({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === wc && h.key == null ? h.props.children : h, Ku(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Qg(n.__e, e, n, o, i, r, l, _);
    (h = ut.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ut.__e(x, e, n);
  }
}
function Jg(t, e) {
  ut.__c && ut.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ut.__e(o, n.__v);
    }
  });
}
function Qg(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Vu.call(t.childNodes), h = (d = n.props || Yu).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Zg(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Ku(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Wo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && qu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && $s(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && $s(t, "checked", u, d.checked, !1));
  }
  return t;
}
function th(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ut.__e(o, n);
  }
}
function eh(t, e, n) {
  var o, i;
  if (ut.unmount && ut.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || th(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ut.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && eh(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || qu(t.__e), t.__ = t.__e = t.__d = void 0;
}
function ty(t, e, n) {
  return this.constructor(t, n);
}
Vu = Gu.slice, ut = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, zu = 0, ao.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = xe({}, this.state), typeof t == "function" && (t = t(xe({}, n), this.props)), t && xe(n, t), t != null && this.__v && (e && this._sb.push(e), Ia(this));
}, ao.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ia(this));
}, ao.prototype.render = wc, co = [], ws.__r = 0;
var ey = 0;
function Rl(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ey, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ut.vnode && ut.vnode(_), _;
}
function ny(t) {
  if (t.indexOf("#") === 0 && (t = t.slice(1)), t.length === 3 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), t.length !== 6)
    throw new Error(`Invalid HEX color "${t}".`);
  return [
    parseInt(t.slice(0, 2), 16),
    // r
    parseInt(t.slice(2, 4), 16),
    // g
    parseInt(t.slice(4, 6), 16)
    // b
  ];
}
function oy(t) {
  const [e, n, o] = typeof t == "string" ? ny(t) : t;
  return e * 0.299 + n * 0.587 + o * 0.114 > 186;
}
function ja(t, e) {
  return oy(t) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function Va(t, e = 255) {
  return Math.min(Math.max(t, 0), e);
}
function ry(t, e, n) {
  t = t % 360 / 360, e = Va(e), n = Va(n);
  const o = n <= 0.5 ? n * (e + 1) : n + e - n * e, i = n * 2 - o, r = (l) => (l = l < 0 ? l + 1 : l > 1 ? l - 1 : l, l * 6 < 1 ? i + (o - i) * l * 6 : l * 2 < 1 ? o : l * 3 < 2 ? i + (o - i) * (2 / 3 - l) * 6 : i);
  return [
    r(t + 1 / 3) * 255,
    r(t) * 255,
    r(t - 1 / 3) * 255
  ];
}
function sy(t) {
  let e = 0;
  if (typeof t != "string" && (t = String(t)), t && t.length)
    for (let n = 0; n < t.length; ++n)
      e += (n + 1) * t.charCodeAt(n);
  return e;
}
function iy(t, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(t) ? t = t.length <= e ? t : t.substring(t.length - e) : /^[A-Za-z\d\s]+$/.test(t) ? t = t[0].toUpperCase() : t = t.length <= e ? t : t.substring(0, e), t;
}
let ly = class extends ao {
  render() {
    const {
      className: e,
      style: n,
      size: o = "",
      circle: i,
      rounded: r,
      background: l,
      foreColor: c,
      text: _,
      code: h,
      maxTextLength: s = 2,
      src: d,
      hueDistance: f = 43,
      saturation: a = 0.4,
      lightness: u = 0.6,
      children: b,
      ...p
    } = this.props, m = ["avatar", e], g = { ...n, background: l, color: c };
    let w = 32;
    o && (typeof o == "number" ? (g.width = `${o}px`, g.height = `${o}px`, g.fontSize = `${Math.max(12, Math.round(o / 2))}px`, w = o) : (m.push(`size-${o}`), w = { xs: 20, sm: 24, lg: 48, xl: 80 }[o])), i ? m.push("circle") : r && (typeof r == "number" ? g.borderRadius = `${r}px` : m.push(`rounded-${r}`));
    let k;
    if (d)
      m.push("has-img"), k = /* @__PURE__ */ Rl("img", { className: "avatar-img", src: d, alt: _ });
    else if (_ != null && _.length) {
      const C = iy(_, s);
      if (m.push("has-text", `has-text-${C.length}`), l)
        !c && l && (g.color = ja(l));
      else {
        const E = h ?? _, y = (typeof E == "number" ? E : sy(E)) * f % 360;
        if (g.background = `hsl(${y},${a * 100}%,${u * 100}%)`, !c) {
          const x = ry(y, a, u);
          g.color = ja(x);
        }
      }
      let A;
      w && w < 14 * C.length && (A = { transform: `scale(${w / (14 * C.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ Rl("div", { "data-actualSize": w, className: "avatar-text", style: A, children: C });
    }
    return /* @__PURE__ */ Rl(
      "div",
      {
        className: F(m),
        style: g,
        ...p,
        children: [
          k,
          b
        ]
      }
    );
  }
};
class za extends Dt {
}
L(za, "NAME", "avatar"), L(za, "Component", ly);
class Ya extends Dt {
}
L(Ya, "NAME", "btngroup"), L(Ya, "Component", vc);
var _l, nt, nh, _o, Ga, ks = {}, oh = [], cy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Se(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function rh(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Io(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? _l.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Zr(t, l, o, i, null);
}
function Zr(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++nh };
  return i == null && nt.vnode != null && nt.vnode(r), r;
}
function ay() {
  return { current: null };
}
function fl(t) {
  return t.children;
}
function fo(t, e) {
  this.props = t, this.context = e;
}
function Uo(t, e) {
  if (e == null)
    return t.__ ? Uo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Uo(t) : null;
}
function sh(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return sh(t);
  }
}
function qa(t) {
  (!t.__d && (t.__d = !0) && _o.push(t) && !xs.__r++ || Ga !== nt.debounceRendering) && ((Ga = nt.debounceRendering) || setTimeout)(xs);
}
function xs() {
  for (var t; xs.__r = _o.length; )
    t = _o.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), _o = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Se({}, r)).__v = r.__v + 1, $c(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Uo(r), r.__h), ah(o, r), r.__e != l && sh(r)));
    });
}
function ih(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || oh, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Zr(null, a, null, null, a) : Array.isArray(a) ? Zr(fl, { children: a }, null, null, null) : a.__b > 0 ? Zr(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      $c(t, a, f = f || ks, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = lh(a, _, t) : _ = ch(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Uo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && fh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      _h(p[s], p[++s], p[++s]);
}
function lh(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? lh(o, e, n) : ch(n, o, o, i, o.__e, e));
  return e;
}
function ch(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function _y(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ss(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ss(t, r, e[r], n[r], o);
}
function Xa(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || cy.test(e) ? n : n + "px";
}
function Ss(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Xa(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Xa(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Za : Ka, r) : t.removeEventListener(e, r ? Za : Ka, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Ka(t) {
  this.l[t.type + !1](nt.event ? nt.event(t) : t);
}
function Za(t) {
  this.l[t.type + !0](nt.event ? nt.event(t) : t);
}
function $c(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = nt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new fo(p, g), s.constructor = y, s.render = uy), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Se({}, s.__s)), Se(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = nt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Se(Se({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === fl && h.key == null ? h.props.children : h, ih(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = fy(n.__e, e, n, o, i, r, l, _);
    (h = nt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), nt.__e(x, e, n);
  }
}
function ah(t, e) {
  nt.__c && nt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      nt.__e(o, n.__v);
    }
  });
}
function fy(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && _l.call(t.childNodes), h = (d = n.props || ks).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (_y(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, ih(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Uo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && rh(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Ss(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Ss(t, "checked", u, d.checked, !1));
  }
  return t;
}
function _h(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    nt.__e(o, n);
  }
}
function fh(t, e, n) {
  var o, i;
  if (nt.unmount && nt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || _h(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        nt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && fh(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || rh(t.__e), t.__ = t.__e = t.__d = void 0;
}
function uy(t, e, n) {
  return this.constructor(t, n);
}
function hy(t, e, n) {
  var o, i, r;
  nt.__ && nt.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], $c(e, t = (!o && n || e).__k = Io(fl, null, [t]), i || ks, ks, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? _l.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), ah(r, t);
}
_l = oh.slice, nt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, nh = 0, fo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Se({}, this.state), typeof t == "function" && (t = t(Se({}, n), this.props)), t && Se(n, t), t != null && this.__v && (e && this._sb.push(e), qa(this));
}, fo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), qa(this));
}, fo.prototype.render = fl, _o = [], xs.__r = 0;
var dy = 0;
function q(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --dy, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return nt.vnode && nt.vnode(_), _;
}
var uh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Z = {}, py = {
  get exports() {
    return Z;
  },
  set exports(t) {
    Z = t;
  }
};
(function(t, e) {
  (function(n, o) {
    t.exports = o();
  })(uh, function() {
    var n = 1e3, o = 6e4, i = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", s = "week", d = "month", f = "quarter", a = "year", u = "date", b = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(D) {
      var S = ["th", "st", "nd", "rd"], $ = D % 100;
      return "[" + D + (S[($ - 20) % 10] || S[$] || S[0]) + "]";
    } }, w = function(D, S, $) {
      var R = String(D);
      return !R || R.length >= S ? D : "" + Array(S + 1 - R.length).join($) + D;
    }, k = { s: w, z: function(D) {
      var S = -D.utcOffset(), $ = Math.abs(S), R = Math.floor($ / 60), T = $ % 60;
      return (S <= 0 ? "+" : "-") + w(R, 2, "0") + ":" + w(T, 2, "0");
    }, m: function D(S, $) {
      if (S.date() < $.date())
        return -D($, S);
      var R = 12 * ($.year() - S.year()) + ($.month() - S.month()), T = S.clone().add(R, d), O = $ - T < 0, P = S.clone().add(R + (O ? -1 : 1), d);
      return +(-(R + ($ - T) / (O ? T - P : P - T)) || 0);
    }, a: function(D) {
      return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
    }, p: function(D) {
      return { M: d, y: a, w: s, d: h, D: u, h: _, m: c, s: l, ms: r, Q: f }[D] || String(D || "").toLowerCase().replace(/s$/, "");
    }, u: function(D) {
      return D === void 0;
    } }, C = "en", A = {};
    A[C] = g;
    var E = function(D) {
      return D instanceof z;
    }, y = function D(S, $, R) {
      var T;
      if (!S)
        return C;
      if (typeof S == "string") {
        var O = S.toLowerCase();
        A[O] && (T = O), $ && (A[O] = $, T = O);
        var P = S.split("-");
        if (!T && P.length > 1)
          return D(P[0]);
      } else {
        var W = S.name;
        A[W] = S, T = W;
      }
      return !R && T && (C = T), T || !R && C;
    }, x = function(D, S) {
      if (E(D))
        return D.clone();
      var $ = typeof S == "object" ? S : {};
      return $.date = D, $.args = arguments, new z($);
    }, N = k;
    N.l = y, N.i = E, N.w = function(D, S) {
      return x(D, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
    };
    var z = function() {
      function D($) {
        this.$L = y($.locale, null, !0), this.parse($);
      }
      var S = D.prototype;
      return S.parse = function($) {
        this.$d = function(R) {
          var T = R.date, O = R.utc;
          if (T === null)
            return new Date(NaN);
          if (N.u(T))
            return new Date();
          if (T instanceof Date)
            return new Date(T);
          if (typeof T == "string" && !/Z$/i.test(T)) {
            var P = T.match(p);
            if (P) {
              var W = P[2] - 1 || 0, V = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], W, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V)) : new Date(P[1], W, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V);
            }
          }
          return new Date(T);
        }($), this.$x = $.x || {}, this.init();
      }, S.init = function() {
        var $ = this.$d;
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
      }, S.$utils = function() {
        return N;
      }, S.isValid = function() {
        return this.$d.toString() !== b;
      }, S.isSame = function($, R) {
        var T = x($);
        return this.startOf(R) <= T && T <= this.endOf(R);
      }, S.isAfter = function($, R) {
        return x($) < this.startOf(R);
      }, S.isBefore = function($, R) {
        return this.endOf(R) < x($);
      }, S.$g = function($, R, T) {
        return N.u($) ? this[R] : this.set(T, $);
      }, S.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S.valueOf = function() {
        return this.$d.getTime();
      }, S.startOf = function($, R) {
        var T = this, O = !!N.u(R) || R, P = N.p($), W = function(it, G) {
          var lt = N.w(T.$u ? Date.UTC(T.$y, G, it) : new Date(T.$y, G, it), T);
          return O ? lt : lt.endOf(h);
        }, V = function(it, G) {
          return N.w(T.toDate()[it].apply(T.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), T);
        }, j = this.$W, X = this.$M, vt = this.$D, I = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? W(1, 0) : W(31, 11);
          case d:
            return O ? W(1, X) : W(0, X + 1);
          case s:
            var K = this.$locale().weekStart || 0, yt = (j < K ? j + 7 : j) - K;
            return W(O ? vt - yt : vt + (6 - yt), X);
          case h:
          case u:
            return V(I + "Hours", 0);
          case _:
            return V(I + "Minutes", 1);
          case c:
            return V(I + "Seconds", 2);
          case l:
            return V(I + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, S.endOf = function($) {
        return this.startOf($, !1);
      }, S.$set = function($, R) {
        var T, O = N.p($), P = "set" + (this.$u ? "UTC" : ""), W = (T = {}, T[h] = P + "Date", T[u] = P + "Date", T[d] = P + "Month", T[a] = P + "FullYear", T[_] = P + "Hours", T[c] = P + "Minutes", T[l] = P + "Seconds", T[r] = P + "Milliseconds", T)[O], V = O === h ? this.$D + (R - this.$W) : R;
        if (O === d || O === a) {
          var j = this.clone().set(u, 1);
          j.$d[W](V), j.init(), this.$d = j.set(u, Math.min(this.$D, j.daysInMonth())).$d;
        } else
          W && this.$d[W](V);
        return this.init(), this;
      }, S.set = function($, R) {
        return this.clone().$set($, R);
      }, S.get = function($) {
        return this[N.p($)]();
      }, S.add = function($, R) {
        var T, O = this;
        $ = Number($);
        var P = N.p(R), W = function(X) {
          var vt = x(O);
          return N.w(vt.date(vt.date() + Math.round(X * $)), O);
        };
        if (P === d)
          return this.set(d, this.$M + $);
        if (P === a)
          return this.set(a, this.$y + $);
        if (P === h)
          return W(1);
        if (P === s)
          return W(7);
        var V = (T = {}, T[c] = o, T[_] = i, T[l] = n, T)[P] || 1, j = this.$d.getTime() + $ * V;
        return N.w(j, this);
      }, S.subtract = function($, R) {
        return this.add(-1 * $, R);
      }, S.format = function($) {
        var R = this, T = this.$locale();
        if (!this.isValid())
          return T.invalidDate || b;
        var O = $ || "YYYY-MM-DDTHH:mm:ssZ", P = N.z(this), W = this.$H, V = this.$m, j = this.$M, X = T.weekdays, vt = T.months, I = function(G, lt, Ct, Et) {
          return G && (G[lt] || G(R, O)) || Ct[lt].slice(0, Et);
        }, K = function(G) {
          return N.s(W % 12 || 12, G, "0");
        }, yt = T.meridiem || function(G, lt, Ct) {
          var Et = G < 12 ? "AM" : "PM";
          return Ct ? Et.toLowerCase() : Et;
        }, it = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: j + 1, MM: N.s(j + 1, 2, "0"), MMM: I(T.monthsShort, j, vt, 3), MMMM: I(vt, j), D: this.$D, DD: N.s(this.$D, 2, "0"), d: String(this.$W), dd: I(T.weekdaysMin, this.$W, X, 2), ddd: I(T.weekdaysShort, this.$W, X, 3), dddd: X[this.$W], H: String(W), HH: N.s(W, 2, "0"), h: K(1), hh: K(2), a: yt(W, V, !0), A: yt(W, V, !1), m: String(V), mm: N.s(V, 2, "0"), s: String(this.$s), ss: N.s(this.$s, 2, "0"), SSS: N.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(G, lt) {
          return lt || it[G] || P.replace(":", "");
        });
      }, S.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S.diff = function($, R, T) {
        var O, P = N.p(R), W = x($), V = (W.utcOffset() - this.utcOffset()) * o, j = this - W, X = N.m(this, W);
        return X = (O = {}, O[a] = X / 12, O[d] = X, O[f] = X / 3, O[s] = (j - V) / 6048e5, O[h] = (j - V) / 864e5, O[_] = j / i, O[c] = j / o, O[l] = j / n, O)[P] || j, T ? X : N.a(X);
      }, S.daysInMonth = function() {
        return this.endOf(d).$D;
      }, S.$locale = function() {
        return A[this.$L];
      }, S.locale = function($, R) {
        if (!$)
          return this.$L;
        var T = this.clone(), O = y($, R, !0);
        return O && (T.$L = O), T;
      }, S.clone = function() {
        return N.w(this.$d, this);
      }, S.toDate = function() {
        return new Date(this.valueOf());
      }, S.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S.toISOString = function() {
        return this.$d.toISOString();
      }, S.toString = function() {
        return this.$d.toUTCString();
      }, D;
    }(), B = z.prototype;
    return x.prototype = B, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", u]].forEach(function(D) {
      B[D[1]] = function(S) {
        return this.$g(S, D[0], D[1]);
      };
    }), x.extend = function(D, S) {
      return D.$i || (D(S, z, x), D.$i = !0), x;
    }, x.locale = y, x.isDayjs = E, x.unix = function(D) {
      return x(1e3 * D);
    }, x.en = A[C], x.Ls = A, x.p = {}, x;
  });
})(py);
const Xl = (t = 0, e = 0) => {
  const n = [];
  for (let o = t; o <= e; o++)
    n.push(o);
  return n;
}, hh = (t, e) => {
  const n = Math.ceil(t.length / e);
  return new Array(e).fill({}).map((o, i) => t.slice(i * n, (i + 1) * n));
}, my = (t) => {
  const { format: e, minDate: n, maxDate: o, tagDate: i, DATEROWCOUNT: r, showOtherMonth: l, clickDay: c, selectedDate: _, handleChangePanel: h, showToday: s, handleChange: d, clickToday: f } = t, a = (N) => Z(N).isValid() ? Z(N).add(1, "months").format(e) : "", u = (N) => Z(N).isValid() ? Z(N).subtract(1, "months").format(e) : "", b = () => {
    const N = u(_ || Z().format(e));
    d(N, !1);
  }, p = () => {
    const N = a(_ || Z().format(e));
    d(N, !1);
  }, m = () => {
    d("", !0);
  }, g = () => {
    d(_, !0);
  }, w = (N, z, B, D) => {
    const S = Z(), $ = Z(_), R = new Array(N);
    for (let T = 0; T < N; T++) {
      const O = z + T + 1, P = B.set("date", O), W = D && !l ? !0 : n && P.isBefore(n, "date") || o && P.isAfter(o, "date");
      R[T] = {
        isSelected: $.isSame(B.set("date", O), "date"),
        isToday: S.isSame(P, "date"),
        isDisable: !!W,
        isTag: !!(i != null && i.includes(P.format(e))),
        date: P,
        isOtherMonth: D,
        onClick: () => W ? {} : c(P)
      };
    }
    return R;
  }, k = () => {
    const N = Z(_), z = Z(), B = _ ? N : z, D = B.set("date", 1).day(), S = D === 0 ? 6 : D - 1, $ = B.subtract(1, "month"), T = Number($.endOf("month").get("date")) - S;
    return w(S, T, $, !0);
  }, C = () => {
    const N = Z(_), z = Z(), B = _ ? N : z, D = B.set("date", 1).day(), S = D === 0 ? 6 : D - 1, $ = B.endOf("month").get("date"), R = B.add(1, "month"), T = 7 * 6 % (S + $);
    return w(T, 0, R, !0);
  }, A = () => {
    const N = _, z = Z(), B = _ ? Z(N) : z, D = B.endOf("month").get("date"), S = w(D, 0, B, !1), $ = k(), R = C(), T = [...$, ...S, ...R];
    return hh(T, r);
  }, E = ["一", "二", "三", "四", "五", "六", "日"], y = A(), x = _ || Z().format(e);
  return /* @__PURE__ */ q("div", { className: F("datepicker-calendar-day"), children: [
    /* @__PURE__ */ q("div", { className: "datepicker-calendar-bar not-hide-datepicker", children: [
      /* @__PURE__ */ q("div", { class: "flex", children: /* @__PURE__ */ q("button", { type: "button", className: "btn ghost", onClick: () => h("year"), children: [
        /* @__PURE__ */ q("span", { children: Z(x).format("YYYY 年 MM 月") }),
        /* @__PURE__ */ q("span", { class: "caret" })
      ] }) }),
      /* @__PURE__ */ q("div", { class: "flex", children: [
        s && /* @__PURE__ */ q("button", { type: "button", className: "btn ghost", onClick: () => {
          f();
        }, children: "今天" }),
        /* @__PURE__ */ q("button", { type: "button", className: "btn ghost", onClick: () => b(), children: /* @__PURE__ */ q("i", { className: "icon icon-angle-left" }) }),
        /* @__PURE__ */ q("button", { type: "button", className: "btn ghost", onClick: () => p(), children: /* @__PURE__ */ q("i", { className: "icon icon-angle-right" }) })
      ] })
    ] }),
    /* @__PURE__ */ q("table", { className: "datepicker-calendar-table not-hide-datepicker", children: [
      /* @__PURE__ */ q("thead", { className: "datepicker-calendar-thead", children: /* @__PURE__ */ q("tr", { children: E.map((N, z) => /* @__PURE__ */ q("th", { children: N }, z)) }) }),
      /* @__PURE__ */ q("tbody", { className: "datepicker-calendar-tbody", children: y.map((N, z) => /* @__PURE__ */ q("tr", { children: N.map((B, D) => {
        const S = ["text-center"];
        return B.isToday && S.push("datepicker-calendar-today"), B.isSelected && S.push("datepicker-calendar-selected-date"), B.isOtherMonth && S.push("datepicker-calendar-other-month"), B.isTag && S.push("datepicker-calendar-tag"), /* @__PURE__ */ q("td", { className: F(S), children: /* @__PURE__ */ q("div", { className: F("btn", "ghost", "datepicker-calendar-date", B.isDisable ? "disabled" : ""), onClick: B.onClick, children: !l && B.isOtherMonth ? "" : Z(B.date).format("DD") }) }, D);
      }) }, z)) })
    ] }),
    /* @__PURE__ */ q("div", { class: "datepicker-calendar-footer text-right mt-1", children: [
      /* @__PURE__ */ q("button", { type: "button", className: "btn ghost text-primary", onClick: m, children: /* @__PURE__ */ q("span", { children: "清除" }) }),
      /* @__PURE__ */ q("button", { type: "button", className: "btn ghost text-primary", onClick: g, children: /* @__PURE__ */ q("span", { children: "确认" }) })
    ] })
  ] });
};
const gy = (t) => {
  const { format: e, selectedDate: n, minDate: o, maxDate: i, year: r, handleChangeMonth: l } = t, c = Z(o).format("M"), _ = Z(i).format("M"), h = hh(Xl(1, 12), 3), s = (d, f) => {
    f || l(d);
  };
  return /* @__PURE__ */ q("div", { className: F("datepicker-calendar-month", "not-hide-datepicker"), children: /* @__PURE__ */ q("table", { className: "datepicker-calendar-month-table", children: /* @__PURE__ */ q("tbody", { className: "datepicker-calendar-month-table-body", children: h.map((d, f) => /* @__PURE__ */ q("tr", { children: d.map((a, u) => {
    const b = ["text-center"], p = Z(`${r}-${a}-01`).format(e), m = !!(c && Z(n).isBefore(c) || _ && Z(n).isBefore(_));
    return /* @__PURE__ */ q("td", { className: F(b), children: /* @__PURE__ */ q("div", { className: F("btn", "size-sm", "ghost", "datepicker-calendar-month", m ? "disabled" : ""), onClick: () => {
      s(p, m);
    }, children: [
      Z(p).format("MM"),
      " 月"
    ] }) }, u);
  }) }, f)) }) }) });
}, yy = (t) => {
  const { selectedDate: e, handleChangeMonth: n } = t;
  setTimeout(() => {
    const l = document.getElementsByClassName("datepicker-accordion");
    l != null && l.length && (l[0].scrollTop = 2400);
  }, 800);
  const o = Z(e).year(), i = [...Xl(o - 100, o), ...Xl(o + 1, o + 100)], r = (l, c) => {
    var s, d, f;
    if (!(l != null && l.target))
      return;
    const _ = document.querySelectorAll(".datepicker-accordion > ul > li > .datepicker-accordion-title");
    for (let a = 0; a < _.length; a++)
      (s = _[a].nextElementSibling) != null && s.classList.contains("hidden") || (d = _[a].nextElementSibling) == null || d.classList.add("hidden");
    (f = l.target.nextElementSibling) == null || f.classList.toggle("hidden");
    const h = document.querySelector(".datepicker-accordion");
    h && (h.scrollTop + h.clientHeight === h.scrollHeight ? h.scrollTop = 0 : c < o ? h.scrollTop = h.scrollTop - 30 : h.scrollTop = h.scrollTop + 30);
  };
  return /* @__PURE__ */ q("div", { class: "datepicker-accordion scroll-smooth not-hide-datepicker", children: /* @__PURE__ */ q("ul", { children: i.map((l, c) => /* @__PURE__ */ q("li", { id: o === l ? "selected" : "", children: [
    /* @__PURE__ */ q("div", { class: "datepicker-accordion-title", onClick: (_) => r(_, l), children: l }),
    /* @__PURE__ */ q("div", { className: F("datepicker-accordion-content", o === l ? "" : "hidden"), children: Io(gy, {
      ...t,
      year: l,
      handleChangeMonth: n
    }) }, c)
  ] })) }) });
};
class vy extends fo {
  constructor() {
    super(...arguments);
    L(this, "DATEROWCOUNT", 6);
    L(this, "ref", ay());
    L(this, "state", {
      selectedDate: this.props.date || null,
      type: "day"
    });
  }
  handleChange(n, o = !1) {
    var i;
    this.setState({ selectedDate: n }), o && ((i = this.props) == null || i.onChange(n));
  }
  handleChangePanel(n) {
    this.setState({ type: n });
  }
  handleChangeMonth(n) {
    this.setState({ selectedDate: n, type: "day" });
  }
  handleChangeYear(n) {
    this.setState({ selectedDate: n, type: "month" });
  }
  changeYear(n) {
    const o = n === "subtract" ? Z(this.state.selectedDate).subtract(1, "year").startOf("year").format(this.props.format) : Z(this.state.selectedDate).add(1, "year").startOf("year").format(this.props.format);
    this.handleChange(o);
  }
  clickDay(n) {
    const o = Z(n).format(this.props.format);
    this.handleChange(o);
  }
  clickToday() {
    this.handleChange(Z().format(this.props.format));
  }
  renderPanel() {
    return this.state.type === "day" ? Io(my, {
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleChangePanel: this.handleChangePanel.bind(this),
      clickToday: this.clickToday.bind(this),
      clickDay: this.clickDay.bind(this),
      selectedDate: this.state.selectedDate,
      DATEROWCOUNT: this.DATEROWCOUNT
    }) : Io(yy, {
      ...this.props,
      selectedDate: this.state.selectedDate,
      handleChangeMonth: this.handleChangeMonth.bind(this)
    });
  }
  render() {
    const { className: n } = this.props;
    return /* @__PURE__ */ q("div", { className: F("datepicker-calendar", n), ref: this.ref, children: this.renderPanel() });
  }
}
function Lr(t) {
  return t.split("-")[1];
}
function kc(t) {
  return t === "y" ? "height" : "width";
}
function Hn(t) {
  return t.split("-")[0];
}
function ul(t) {
  return ["top", "bottom"].includes(Hn(t)) ? "x" : "y";
}
function Ja(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = ul(e), _ = kc(c), h = o[_] / 2 - i[_] / 2, s = Hn(e), d = c === "x";
  let f;
  switch (s) {
    case "top":
      f = {
        x: r,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      f = {
        x: o.x - i.width,
        y: l
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (Lr(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const by = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let h = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: s,
    y: d
  } = Ja(h, o, _), f = o, a = {}, u = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: p,
      fn: m
    } = c[b], {
      x: g,
      y: w,
      data: k,
      reset: C
    } = await m({
      x: s,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: i,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (s = g ?? s, d = w ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...k
      }
    }, C && u <= 50) {
      u++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (h = C.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : C.rects), {
        x: s,
        y: d
      } = Ja(h, f, _)), b = -1;
      continue;
    }
  }
  return {
    x: s,
    y: d,
    placement: f,
    strategy: i,
    middlewareData: a
  };
};
function wy(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function dh(t) {
  return typeof t != "number" ? wy(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Cs(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function $y(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = t, {
    boundary: h = "clippingAncestors",
    rootBoundary: s = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = e, u = dh(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = Cs(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Cs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - C.top + u.top) / k.y,
    bottom: (C.bottom - m.bottom + u.bottom) / k.y,
    left: (m.left - C.left + u.left) / k.x,
    right: (C.right - m.right + u.right) / k.x
  };
}
const ky = Math.min, xy = Math.max;
function Sy(t, e, n) {
  return xy(t, ky(e, n));
}
const Cy = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t || {}, {
      x: i,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = e;
    if (n == null)
      return {};
    const h = dh(o), s = {
      x: i,
      y: r
    }, d = ul(l), f = kc(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], E = w / 2 - a[f] / 2 + k, y = Sy(C, E, A), N = Lr(l) != null && E != y && c.reference[f] / 2 - (E < C ? h[u] : h[b]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - N,
      data: {
        [d]: y,
        centerOffset: E - y
      }
    };
  }
}), Ey = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Es(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Ey[e]);
}
function Ay(t, e, n) {
  n === void 0 && (n = !1);
  const o = Lr(t), i = ul(t), r = kc(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Es(l)), {
    main: l,
    cross: Es(l)
  };
}
const Ty = {
  start: "end",
  end: "start"
};
function Kl(t) {
  return t.replace(/start|end/g, (e) => Ty[e]);
}
function My(t) {
  const e = Es(t);
  return [Kl(t), e, Kl(e)];
}
function Ly(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function Ny(t, e, n, o) {
  const i = Lr(t);
  let r = Ly(Hn(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(Kl)))), r;
}
const Dy = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        middlewareData: i,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = e, {
        mainAxis: h = !0,
        crossAxis: s = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...b
      } = t, p = Hn(o), m = Hn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [Es(l)] : My(l));
      !d && a !== "none" && w.push(...Ny(l, u, a, g));
      const k = [l, ...w], C = await $y(e, b), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: N,
          cross: z
        } = Ay(o, r, g);
        A.push(C[N], C[z]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((N) => N <= 0)) {
        var y;
        const N = (((y = i.flip) == null ? void 0 : y.index) || 0) + 1, z = k[N];
        if (z)
          return {
            data: {
              index: N,
              overflows: E
            },
            reset: {
              placement: z
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const D = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, R) => $ + R, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
            D && (B = D);
            break;
          }
          case "initialPlacement":
            B = l;
            break;
        }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
async function Ry(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Hn(n), c = Lr(n), _ = ul(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: f,
    crossAxis: a,
    alignmentAxis: u
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof u == "number" && (a = c === "end" ? u * -1 : u), _ ? {
    x: a * s,
    y: f * h
  } : {
    x: f * h,
    y: a * s
  };
}
const Py = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await Ry(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
function Ot(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Zt(t) {
  return Ot(t).getComputedStyle(t);
}
function He(t) {
  return mh(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Hr;
function ph() {
  if (Hr)
    return Hr;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Hr = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Hr) : navigator.userAgent;
}
function le(t) {
  return t instanceof Ot(t).HTMLElement;
}
function We(t) {
  return t instanceof Ot(t).Element;
}
function mh(t) {
  return t instanceof Ot(t).Node;
}
function Qa(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Ot(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function hl(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = Zt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function Oy(t) {
  return ["table", "td", "th"].includes(He(t));
}
function xc(t) {
  const e = /firefox/i.test(ph()), n = Zt(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function gh() {
  return !/^((?!chrome|android).)*safari/i.test(ph());
}
function Sc(t) {
  return ["html", "body", "#document"].includes(He(t));
}
const t_ = Math.min, uo = Math.max, As = Math.round;
function yh(t) {
  const e = Zt(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = As(n) !== i || As(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function vh(t) {
  return We(t) ? t : t.contextElement;
}
const bh = {
  x: 1,
  y: 1
};
function sn(t) {
  const e = vh(t);
  if (!le(e))
    return bh;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = yh(e);
  let l = (r ? As(n.width) : n.width) / o, c = (r ? As(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function Fo(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = vh(t);
  let _ = bh;
  e && (o ? We(o) && (_ = sn(o)) : _ = sn(t));
  const h = c ? Ot(c) : window, s = !gh() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = Ot(c), p = o && We(o) ? Ot(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = sn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = Ot(m).frameElement;
    }
  }
  return {
    width: a,
    height: u,
    top: f,
    right: d + a,
    bottom: f + u,
    left: d,
    x: d,
    y: f
  };
}
function ze(t) {
  return ((mh(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function dl(t) {
  return We(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function wh(t) {
  return Fo(ze(t)).left + dl(t).scrollLeft;
}
function Hy(t, e, n) {
  const o = le(e), i = ze(e), r = Fo(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((He(e) !== "body" || hl(i)) && (l = dl(e)), le(e)) {
      const _ = Fo(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = wh(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function Bo(t) {
  if (He(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (Qa(t) ? t.host : null) || // Fallback
    ze(t)
  );
  return Qa(e) ? e.host : e;
}
function e_(t) {
  return !le(t) || Zt(t).position === "fixed" ? null : t.offsetParent;
}
function Wy(t) {
  let e = Bo(t);
  for (; le(e) && !Sc(e); ) {
    if (xc(e))
      return e;
    e = Bo(e);
  }
  return null;
}
function n_(t) {
  const e = Ot(t);
  let n = e_(t);
  for (; n && Oy(n) && Zt(n).position === "static"; )
    n = e_(n);
  return n && (He(n) === "html" || He(n) === "body" && Zt(n).position === "static" && !xc(n)) ? e : n || Wy(t) || e;
}
function Iy(t) {
  return yh(t);
}
function Uy(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = le(n), r = ze(n);
  if (n === r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 1,
    y: 1
  };
  const _ = {
    x: 0,
    y: 0
  };
  if ((i || !i && o !== "fixed") && ((He(n) !== "body" || hl(r)) && (l = dl(n)), le(n))) {
    const h = Fo(n);
    c = sn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function Fy(t, e) {
  const n = Ot(t), o = ze(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = gh();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function By(t) {
  var e;
  const n = ze(t), o = dl(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = uo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = uo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + wh(t);
  const _ = -o.scrollTop;
  return Zt(i || n).direction === "rtl" && (c += uo(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function $h(t) {
  const e = Bo(t);
  return Sc(e) ? t.ownerDocument.body : le(e) && hl(e) ? e : $h(e);
}
function kh(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = $h(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Ot(o);
  return i ? e.concat(r, r.visualViewport || [], hl(o) ? o : []) : e.concat(o, kh(o));
}
function jy(t, e) {
  const n = Fo(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = le(t) ? sn(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * r.x, c = t.clientHeight * r.y, _ = i * r.x, h = o * r.y;
  return {
    top: h,
    left: _,
    right: _ + l,
    bottom: h + c,
    x: _,
    y: h,
    width: l,
    height: c
  };
}
function o_(t, e, n) {
  return e === "viewport" ? Cs(Fy(t, n)) : We(e) ? jy(e, n) : Cs(By(ze(t)));
}
function Vy(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = kh(t).filter((c) => We(c) && He(c) !== "body"), i = null;
  const r = Zt(t).position === "fixed";
  let l = r ? Bo(t) : t;
  for (; We(l) && !Sc(l); ) {
    const c = Zt(l), _ = xc(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = Bo(l);
  }
  return e.set(t, o), o;
}
function zy(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? Vy(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = o_(e, s, i);
    return h.top = uo(d.top, h.top), h.right = t_(d.right, h.right), h.bottom = t_(d.bottom, h.bottom), h.left = uo(d.left, h.left), h;
  }, o_(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Yy = {
  getClippingRect: zy,
  convertOffsetParentRelativeRectToViewportRelativeRect: Uy,
  isElement: We,
  getDimensions: Iy,
  getOffsetParent: n_,
  getDocumentElement: ze,
  getScale: sn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || n_, r = this.getDimensions;
    return {
      reference: Hy(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => Zt(t).direction === "rtl"
}, Gy = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Yy,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return by(t, e, {
    ...i,
    platform: r
  });
};
var pn, mn, xt, Ke, ar, ci, xh, ai, Sh, _i, Ch, fi, Eh, ui, Ah, hi, Th, di;
class Gt extends Ut {
  constructor() {
    super(...arguments);
    M(this, ci);
    M(this, ai);
    M(this, _i);
    M(this, fi);
    M(this, ui);
    M(this, hi);
    M(this, pn, void 0);
    M(this, mn, 0);
    M(this, xt, void 0);
    M(this, Ke, void 0);
    M(this, ar, void 0);
    L(this, "hideLater", () => {
      v(this, di).call(this), H(this, mn, window.setTimeout(this.hide.bind(this), 100));
    });
    M(this, di, () => {
      clearTimeout(v(this, mn)), H(this, mn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = v(this, Ke)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get datepicker() {
    return v(this, Ke) || U(this, _i, Ch).call(this);
  }
  get trigger() {
    return v(this, ar) || this.element;
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n) {
    return H(this, ar, n), !this.datepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.datepicker.classList.add(this.constructor.CLASS_SHOW), this.datepicker.classList.add("fade"), U(this, ui, Ah).call(this), !0);
  }
  hide() {
    var n;
    return this.element.classList.remove(this.elementShowClass), (n = v(this, Ke)) == null || n.classList.remove(this.constructor.CLASS_SHOW), this.datepicker.classList.remove("fade"), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    super.destroy();
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-datepicker" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)))
      return;
    const l = this.getAll().entries(), c = new Set(i || []);
    for (const [s, d] of l)
      c.has(s) || d.hide();
  }
}
pn = new WeakMap(), mn = new WeakMap(), xt = new WeakMap(), Ke = new WeakMap(), ar = new WeakMap(), ci = new WeakSet(), xh = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 4;
}, ai = new WeakSet(), Sh = function() {
  const n = document.createElement("div");
  return H(this, xt, n), v(this, xt).style.position = "absolute", v(this, xt).style.width = "8px", v(this, xt).style.height = "8px", v(this, xt).style.transform = "rotate(45deg)", v(this, xt).style.border = "inherit", v(this, xt).style.background = "inherit", n;
}, _i = new WeakSet(), Ch = function() {
  const n = this.constructor.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), hy(Io(vy, { ...this.options }), o), this.options.arrow && o.append(U(this, ai, Sh).call(this)), o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, Ke, o), o;
}, fi = new WeakSet(), Eh = function() {
  var i;
  const n = U(this, ci, xh).call(this), o = {
    middleware: [Py(n + 3), Dy()]
  };
  return this.options.arrow && v(this, xt) && ((i = o.middleware) == null || i.push(Cy({ element: v(this, xt) }))), this.options.placement && (o.placement = this.options.placement), o;
}, ui = new WeakSet(), Ah = function() {
  const n = U(this, fi, Eh).call(this);
  Gy(U(this, hi, Th).call(this), this.datepicker, n).then(({ x: o, y: i, middlewareData: r }) => {
    if (Object.assign(this.datepicker.style, {
      left: `${o}px`,
      top: `${i}px`
    }), this.options.placement) {
      const l = this.options.placement.split("-")[0], c = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
      }[l];
      if (r.arrow && v(this, xt)) {
        const { x: _, y: h } = r.arrow;
        Object.assign(v(this, xt).style, {
          left: _ != null ? `${_}px` : "",
          top: h != null ? `${h}px` : "",
          [c]: `${-v(this, xt).offsetWidth / 2}px`
        });
      }
    }
  });
}, hi = new WeakSet(), Th = function() {
  return v(this, pn) || H(this, pn, {
    getBoundingClientRect: () => {
      const { element: n } = this;
      if (n instanceof MouseEvent) {
        const { clientX: o, clientY: i } = n;
        return {
          width: 0,
          height: 0,
          top: i,
          right: o,
          bottom: i,
          left: o
        };
      }
      return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
    },
    contextElement: this.element
  }), v(this, pn);
}, di = new WeakMap(), L(Gt, "NAME", "datepicker"), L(Gt, "CLASSNAME", "datepicker"), L(Gt, "CLASS_SHOW", "show"), L(Gt, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), L(Gt, "DEFAULT", {
  date: Z().format("YYYY-MM-DD"),
  format: "YYYY-MM-DD",
  showOtherMonth: !0,
  placement: "bottom-start",
  strategy: "absolute",
  trigger: "click",
  showToday: !0,
  arrow: !0
});
document.addEventListener("click", function(t) {
  const e = t.target, n = e.closest(Gt.MENU_SELECTOR), o = e.closest(".datepicker-calendar-bar, .datepicker-calendar-thead, .datepicker-calendar-month-table");
  n ? Gt.ensure(n).toggle() : o || Gt.clear({ event: t });
});
const qy = (t) => {
  const e = document.getElementsByClassName("with-datepicker-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Gt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Gt.clear({ event: t });
};
window.addEventListener("scroll", qy, !0);
function Mh(t, e, n) {
  if (n) {
    t.setAttribute("class", F(e));
    return;
  }
  ll(t.getAttribute("class"), e).forEach(([o, i]) => {
    t.classList.toggle(o, i);
  });
}
function Gn(t, e, n) {
  if (typeof e == "object")
    return Object.entries(e).forEach(([o, i]) => {
      Gn(t, o, i);
    });
  n !== void 0 && (t.style[e] = typeof n == "number" ? `${n}px` : n);
}
function Ts(t, e, n) {
  if (typeof e == "object")
    return Object.entries(e).forEach(([o, i]) => {
      Ts(t, o, i);
    });
  n !== void 0 && (n === null ? t.removeAttribute(e) : t.setAttribute(e, n));
}
var Ze, _r, he, pi, gn, Jr;
const ee = class extends Ut {
  constructor() {
    super(...arguments);
    M(this, gn);
    M(this, Ze, 0);
    M(this, _r, void 0);
    M(this, he, void 0);
    M(this, pi, (n) => {
      const o = n.target;
      (o.closest(ee.DISMISS_SELECTOR) || this.options.backdrop === !0 && !o.closest(".modal-dialog") && o.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(ee.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", v(this, pi)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: n } = this;
      if (n) {
        const o = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const i = n.clientWidth, r = n.clientHeight;
          (!v(this, he) || v(this, he)[0] !== i || v(this, he)[1] !== r) && (H(this, he, [i, r]), this.layout());
        });
        o.observe(n), H(this, _r, o);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var n;
    super.destroy(), (n = v(this, _r)) == null || n.disconnect();
  }
  show(n) {
    if (this.isShown)
      return !1;
    this.setOptions(n);
    const { modalElement: o } = this, { animation: i, backdrop: r, className: l, style: c } = this.options;
    return Mh(o, [{
      "modal-trans": i,
      "modal-no-backdrop": !r
    }, ee.CLASS_SHOW, l]), Gn(o, {
      zIndex: `${ee.zIndex++}`,
      ...c
    }), this.layout(), this.emit("show", this), U(this, gn, Jr).call(this, () => {
      o.classList.add(ee.CLASS_SHOWN), U(this, gn, Jr).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(ee.CLASS_SHOWN), this.emit("hide", this), U(this, gn, Jr).call(this, () => {
      this.modalElement.classList.remove(ee.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(n, o) {
    if (!this.isShown)
      return;
    const { dialog: i } = this;
    if (!i)
      return;
    o = o ?? this.options.size, Ts(i, "data-size", null);
    const r = { width: null, height: null };
    typeof o == "object" ? (r.width = o.width, r.height = o.height) : typeof o == "string" && ["md", "sm", "lg", "full"].includes(o) ? Ts(i, "data-size", o) : o && (r.width = o), Gn(i, r), n = n ?? this.options.position ?? "fit";
    const l = i.clientWidth, c = i.clientHeight;
    H(this, he, [l, c]), typeof n == "function" && (n = n({ width: l, height: c }));
    const _ = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof n == "number" ? (_.alignSelf = "flex-start", _.top = n) : typeof n == "object" && n ? (_.alignSelf = "flex-start", Object.assign(_, n)) : n === "fit" ? (_.alignSelf = "flex-start", _.top = `${Math.max(0, Math.floor((window.innerHeight - c) / 3))}px`) : n === "bottom" ? _.alignSelf = "flex-end" : n === "top" ? _.alignSelf = "flex-start" : n !== "center" && typeof n == "string" && (_.alignSelf = "flex-start", _.top = n), Gn(i, _), Gn(this.modalElement, "justifyContent", _.left ? "flex-start" : "center");
  }
};
let Tt = ee;
Ze = new WeakMap(), _r = new WeakMap(), he = new WeakMap(), pi = new WeakMap(), gn = new WeakSet(), Jr = function(n, o) {
  v(this, Ze) && (clearTimeout(v(this, Ze)), H(this, Ze, 0)), n && (this.options.animation ? H(this, Ze, window.setTimeout(n, o ?? this.options.transTime)) : n());
}, L(Tt, "NAME", "Modal"), L(Tt, "EVENTS", !0), L(Tt, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), L(Tt, "CLASS_SHOW", "show"), L(Tt, "CLASS_SHOWN", "in"), L(Tt, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), L(Tt, "zIndex", 2e3);
window.addEventListener("resize", () => {
  Tt.all.forEach((t) => {
    const e = t;
    e.isShown && e.options.responsive && e.layout();
  });
});
var pl, ot, Lh, qn, ho, r_, Ms = {}, Nh = [], Xy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ce(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Dh(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Ky(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? pl.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Qr(t, l, o, i, null);
}
function Qr(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Lh };
  return i == null && ot.vnode != null && ot.vnode(r), r;
}
function Zy() {
  return { current: null };
}
function ml(t) {
  return t.children;
}
function ln(t, e) {
  this.props = t, this.context = e;
}
function jo(t, e) {
  if (e == null)
    return t.__ ? jo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? jo(t) : null;
}
function Rh(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Rh(t);
  }
}
function s_(t) {
  (!t.__d && (t.__d = !0) && ho.push(t) && !Ls.__r++ || r_ !== ot.debounceRendering) && ((r_ = ot.debounceRendering) || setTimeout)(Ls);
}
function Ls() {
  for (var t; Ls.__r = ho.length; )
    t = ho.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), ho = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ce({}, r)).__v = r.__v + 1, Cc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? jo(r), r.__h), Wh(o, r), r.__e != l && Rh(r)));
    });
}
function Ph(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Nh, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Qr(null, a, null, null, a) : Array.isArray(a) ? Qr(ml, { children: a }, null, null, null) : a.__b > 0 ? Qr(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Cc(t, a, f = f || Ms, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Oh(a, _, t) : _ = Hh(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = jo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Uh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Ih(p[s], p[++s], p[++s]);
}
function Oh(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Oh(o, e, n) : Hh(n, o, o, i, o.__e, e));
  return e;
}
function Hh(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Jy(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ns(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ns(t, r, e[r], n[r], o);
}
function i_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Xy.test(e) ? n : n + "px";
}
function Ns(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || i_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || i_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? c_ : l_, r) : t.removeEventListener(e, r ? c_ : l_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function l_(t) {
  this.l[t.type + !1](ot.event ? ot.event(t) : t);
}
function c_(t) {
  this.l[t.type + !0](ot.event ? ot.event(t) : t);
}
function Cc(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ot.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new ln(p, g), s.constructor = y, s.render = tv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ce({}, s.__s)), Ce(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = ot.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ce(Ce({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === ml && h.key == null ? h.props.children : h, Ph(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Qy(n.__e, e, n, o, i, r, l, _);
    (h = ot.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ot.__e(x, e, n);
  }
}
function Wh(t, e) {
  ot.__c && ot.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ot.__e(o, n.__v);
    }
  });
}
function Qy(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && pl.call(t.childNodes), h = (d = n.props || Ms).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Jy(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Ph(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && jo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Dh(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Ns(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Ns(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Ih(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ot.__e(o, n);
  }
}
function Uh(t, e, n) {
  var o, i;
  if (ot.unmount && ot.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Ih(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ot.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Uh(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Dh(t.__e), t.__ = t.__e = t.__d = void 0;
}
function tv(t, e, n) {
  return this.constructor(t, n);
}
function ev(t, e, n) {
  var o, i, r;
  ot.__ && ot.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Cc(e, t = (!o && n || e).__k = Ky(ml, null, [t]), i || Ms, Ms, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? pl.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), Wh(r, t);
}
pl = Nh.slice, ot = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Lh = 0, qn = function(t) {
  return t != null && t.constructor === void 0;
}, ln.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ce({}, this.state), typeof t == "function" && (t = t(Ce({}, n), this.props)), t && Ce(n, t), t != null && this.__v && (e && this._sb.push(e), s_(this));
}, ln.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), s_(this));
}, ln.prototype.render = ml, ho = [], Ls.__r = 0;
var nv = 0;
function bt(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --nv, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ot.vnode && ot.vnode(_), _;
}
let ov = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Zl;
Zl = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} };
var rv = 0;
function gl(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --rv, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Zl.vnode && Zl.vnode(_), _;
}
function sv({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ gl(Oe, { type: n, ...o });
}
var Fh, ht, Bh, po, a_, jh = {}, Vh = [], iv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ee(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function zh(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Pl(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Bh };
  return i == null && ht.vnode != null && ht.vnode(r), r;
}
function lv() {
  return { current: null };
}
function Ec(t) {
  return t.children;
}
function mo(t, e) {
  this.props = t, this.context = e;
}
function Vo(t, e) {
  if (e == null)
    return t.__ ? Vo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Vo(t) : null;
}
function Yh(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Yh(t);
  }
}
function __(t) {
  (!t.__d && (t.__d = !0) && po.push(t) && !Ds.__r++ || a_ !== ht.debounceRendering) && ((a_ = ht.debounceRendering) || setTimeout)(Ds);
}
function Ds() {
  for (var t; Ds.__r = po.length; )
    t = po.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), po = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ee({}, r)).__v = r.__v + 1, Kh(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Vo(r), r.__h), av(o, r), r.__e != l && Yh(r)));
    });
}
function Gh(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Vh, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Pl(null, a, null, null, a) : Array.isArray(a) ? Pl(Ec, { children: a }, null, null, null) : a.__b > 0 ? Pl(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Kh(t, a, f = f || jh, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = qh(a, _, t) : _ = Xh(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Vo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Jh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Zh(p[s], p[++s], p[++s]);
}
function qh(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? qh(o, e, n) : Xh(n, o, o, i, o.__e, e));
  return e;
}
function Xh(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function cv(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Rs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Rs(t, r, e[r], n[r], o);
}
function f_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || iv.test(e) ? n : n + "px";
}
function Rs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || f_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || f_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? h_ : u_, r) : t.removeEventListener(e, r ? h_ : u_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function u_(t) {
  this.l[t.type + !1](ht.event ? ht.event(t) : t);
}
function h_(t) {
  this.l[t.type + !0](ht.event ? ht.event(t) : t);
}
function Kh(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ht.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new mo(p, g), s.constructor = y, s.render = fv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ee({}, s.__s)), Ee(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = ht.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ee(Ee({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Ec && h.key == null ? h.props.children : h, Gh(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = _v(n.__e, e, n, o, i, r, l, _);
    (h = ht.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ht.__e(x, e, n);
  }
}
function av(t, e) {
  ht.__c && ht.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ht.__e(o, n.__v);
    }
  });
}
function _v(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Fh.call(t.childNodes), h = (d = n.props || jh).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (cv(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Gh(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Vo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && zh(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Rs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Rs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Zh(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ht.__e(o, n);
  }
}
function Jh(t, e, n) {
  var o, i;
  if (ht.unmount && ht.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Zh(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ht.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Jh(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || zh(t.__e), t.__ = t.__e = t.__d = void 0;
}
function fv(t, e, n) {
  return this.constructor(t, n);
}
Fh = Vh.slice, ht = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Bh = 0, mo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ee({}, this.state), typeof t == "function" && (t = t(Ee({}, n), this.props)), t && Ee(n, t), t != null && this.__v && (e && this._sb.push(e), __(this));
}, mo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), __(this));
}, mo.prototype.render = Ec, po = [], Ds.__r = 0;
var uv = 0;
function Qh(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --uv, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ht.vnode && ht.vnode(_), _;
}
var yl, rt, td, go, d_, Ps = {}, ed = [], hv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ae(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function nd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function od(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? yl.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ts(t, l, o, i, null);
}
function ts(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++td };
  return i == null && rt.vnode != null && rt.vnode(r), r;
}
function vl(t) {
  return t.children;
}
function es(t, e) {
  this.props = t, this.context = e;
}
function zo(t, e) {
  if (e == null)
    return t.__ ? zo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? zo(t) : null;
}
function rd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return rd(t);
  }
}
function p_(t) {
  (!t.__d && (t.__d = !0) && go.push(t) && !Os.__r++ || d_ !== rt.debounceRendering) && ((d_ = rt.debounceRendering) || setTimeout)(Os);
}
function Os() {
  for (var t; Os.__r = go.length; )
    t = go.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), go = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ae({}, r)).__v = r.__v + 1, Ac(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? zo(r), r.__h), cd(o, r), r.__e != l && rd(r)));
    });
}
function sd(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || ed, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ts(null, a, null, null, a) : Array.isArray(a) ? ts(vl, { children: a }, null, null, null) : a.__b > 0 ? ts(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Ac(t, a, f = f || Ps, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = id(a, _, t) : _ = ld(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = zo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && _d(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      ad(p[s], p[++s], p[++s]);
}
function id(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? id(o, e, n) : ld(n, o, o, i, o.__e, e));
  return e;
}
function ld(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function dv(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Hs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Hs(t, r, e[r], n[r], o);
}
function m_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || hv.test(e) ? n : n + "px";
}
function Hs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || m_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || m_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? y_ : g_, r) : t.removeEventListener(e, r ? y_ : g_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function g_(t) {
  this.l[t.type + !1](rt.event ? rt.event(t) : t);
}
function y_(t) {
  this.l[t.type + !0](rt.event ? rt.event(t) : t);
}
function Ac(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = rt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new es(p, g), s.constructor = y, s.render = mv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ae({}, s.__s)), Ae(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = rt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ae(Ae({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === vl && h.key == null ? h.props.children : h, sd(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = pv(n.__e, e, n, o, i, r, l, _);
    (h = rt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), rt.__e(x, e, n);
  }
}
function cd(t, e) {
  rt.__c && rt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      rt.__e(o, n.__v);
    }
  });
}
function pv(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && yl.call(t.childNodes), h = (d = n.props || Ps).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (dv(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, sd(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && zo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && nd(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Hs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Hs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function ad(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    rt.__e(o, n);
  }
}
function _d(t, e, n) {
  var o, i;
  if (rt.unmount && rt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || ad(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        rt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && _d(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || nd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function mv(t, e, n) {
  return this.constructor(t, n);
}
function gv(t, e, n) {
  var o, i, r;
  rt.__ && rt.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Ac(e, t = (!o && n || e).__k = od(vl, null, [t]), i || Ps, Ps, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? yl.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), cd(r, t);
}
yl = ed.slice, rt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, td = 0, es.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ae({}, this.state), typeof t == "function" && (t = t(Ae({}, n), this.props)), t && Ae(n, t), t != null && this.__v && (e && this._sb.push(e), p_(this));
}, es.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), p_(this));
}, es.prototype.render = vl, go = [], Os.__r = 0;
function yv(t) {
  return t.button === 2;
}
var vv = 0;
function bv(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --vv, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return rt.vnode && rt.vnode(_), _;
}
function Tc(t) {
  return t.split("-")[1];
}
function fd(t) {
  return t === "y" ? "height" : "width";
}
function Yo(t) {
  return t.split("-")[0];
}
function ud(t) {
  return ["top", "bottom"].includes(Yo(t)) ? "x" : "y";
}
function v_(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = ud(e), _ = fd(c), h = o[_] / 2 - i[_] / 2, s = Yo(e), d = c === "x";
  let f;
  switch (s) {
    case "top":
      f = {
        x: r,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      f = {
        x: o.x - i.width,
        y: l
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (Tc(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const wv = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let h = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: s,
    y: d
  } = v_(h, o, _), f = o, a = {}, u = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: p,
      fn: m
    } = c[b], {
      x: g,
      y: w,
      data: k,
      reset: C
    } = await m({
      x: s,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: i,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (s = g ?? s, d = w ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...k
      }
    }, C && u <= 50) {
      u++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (h = C.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : C.rects), {
        x: s,
        y: d
      } = v_(h, f, _)), b = -1;
      continue;
    }
  }
  return {
    x: s,
    y: d,
    placement: f,
    strategy: i,
    middlewareData: a
  };
};
function $v(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function kv(t) {
  return typeof t != "number" ? $v(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Ws(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function xv(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = t, {
    boundary: h = "clippingAncestors",
    rootBoundary: s = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = e, u = kv(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = Ws(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Ws(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - C.top + u.top) / k.y,
    bottom: (C.bottom - m.bottom + u.bottom) / k.y,
    left: (m.left - C.left + u.left) / k.x,
    right: (C.right - m.right + u.right) / k.x
  };
}
const Sv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Is(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Sv[e]);
}
function Cv(t, e, n) {
  n === void 0 && (n = !1);
  const o = Tc(t), i = ud(t), r = fd(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Is(l)), {
    main: l,
    cross: Is(l)
  };
}
const Ev = {
  start: "end",
  end: "start"
};
function Jl(t) {
  return t.replace(/start|end/g, (e) => Ev[e]);
}
function Av(t) {
  const e = Is(t);
  return [Jl(t), e, Jl(e)];
}
function Tv(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function Mv(t, e, n, o) {
  const i = Tc(t);
  let r = Tv(Yo(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(Jl)))), r;
}
const hd = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        middlewareData: i,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = e, {
        mainAxis: h = !0,
        crossAxis: s = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...b
      } = t, p = Yo(o), m = Yo(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [Is(l)] : Av(l));
      !d && a !== "none" && w.push(...Mv(l, u, a, g));
      const k = [l, ...w], C = await xv(e, b), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: N,
          cross: z
        } = Cv(o, r, g);
        A.push(C[N], C[z]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((N) => N <= 0)) {
        var y;
        const N = (((y = i.flip) == null ? void 0 : y.index) || 0) + 1, z = k[N];
        if (z)
          return {
            data: {
              index: N,
              overflows: E
            },
            reset: {
              placement: z
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const D = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, R) => $ + R, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
            D && (B = D);
            break;
          }
          case "initialPlacement":
            B = l;
            break;
        }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
function Ht(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Jt(t) {
  return Ht(t).getComputedStyle(t);
}
function Ie(t) {
  return pd(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Wr;
function dd() {
  if (Wr)
    return Wr;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Wr = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Wr) : navigator.userAgent;
}
function ce(t) {
  return t instanceof Ht(t).HTMLElement;
}
function Ue(t) {
  return t instanceof Ht(t).Element;
}
function pd(t) {
  return t instanceof Ht(t).Node;
}
function b_(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Ht(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function bl(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = Jt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function Lv(t) {
  return ["table", "td", "th"].includes(Ie(t));
}
function Mc(t) {
  const e = /firefox/i.test(dd()), n = Jt(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function md() {
  return !/^((?!chrome|android).)*safari/i.test(dd());
}
function Lc(t) {
  return ["html", "body", "#document"].includes(Ie(t));
}
const w_ = Math.min, yo = Math.max, Us = Math.round;
function gd(t) {
  const e = Jt(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = Us(n) !== i || Us(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function yd(t) {
  return Ue(t) ? t : t.contextElement;
}
const vd = {
  x: 1,
  y: 1
};
function cn(t) {
  const e = yd(t);
  if (!ce(e))
    return vd;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = gd(e);
  let l = (r ? Us(n.width) : n.width) / o, c = (r ? Us(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function Go(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = yd(t);
  let _ = vd;
  e && (o ? Ue(o) && (_ = cn(o)) : _ = cn(t));
  const h = c ? Ht(c) : window, s = !md() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = Ht(c), p = o && Ue(o) ? Ht(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = cn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = Ht(m).frameElement;
    }
  }
  return {
    width: a,
    height: u,
    top: f,
    right: d + a,
    bottom: f + u,
    left: d,
    x: d,
    y: f
  };
}
function Ye(t) {
  return ((pd(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function wl(t) {
  return Ue(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function bd(t) {
  return Go(Ye(t)).left + wl(t).scrollLeft;
}
function Nv(t, e, n) {
  const o = ce(e), i = Ye(e), r = Go(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Ie(e) !== "body" || bl(i)) && (l = wl(e)), ce(e)) {
      const _ = Go(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = bd(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function qo(t) {
  if (Ie(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (b_(t) ? t.host : null) || // Fallback
    Ye(t)
  );
  return b_(e) ? e.host : e;
}
function $_(t) {
  return !ce(t) || Jt(t).position === "fixed" ? null : t.offsetParent;
}
function Dv(t) {
  let e = qo(t);
  for (; ce(e) && !Lc(e); ) {
    if (Mc(e))
      return e;
    e = qo(e);
  }
  return null;
}
function k_(t) {
  const e = Ht(t);
  let n = $_(t);
  for (; n && Lv(n) && Jt(n).position === "static"; )
    n = $_(n);
  return n && (Ie(n) === "html" || Ie(n) === "body" && Jt(n).position === "static" && !Mc(n)) ? e : n || Dv(t) || e;
}
function Rv(t) {
  return gd(t);
}
function Pv(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = ce(n), r = Ye(n);
  if (n === r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 1,
    y: 1
  };
  const _ = {
    x: 0,
    y: 0
  };
  if ((i || !i && o !== "fixed") && ((Ie(n) !== "body" || bl(r)) && (l = wl(n)), ce(n))) {
    const h = Go(n);
    c = cn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function Ov(t, e) {
  const n = Ht(t), o = Ye(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = md();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Hv(t) {
  var e;
  const n = Ye(t), o = wl(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = yo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = yo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + bd(t);
  const _ = -o.scrollTop;
  return Jt(i || n).direction === "rtl" && (c += yo(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function wd(t) {
  const e = qo(t);
  return Lc(e) ? t.ownerDocument.body : ce(e) && bl(e) ? e : wd(e);
}
function $d(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = wd(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Ht(o);
  return i ? e.concat(r, r.visualViewport || [], bl(o) ? o : []) : e.concat(o, $d(o));
}
function Wv(t, e) {
  const n = Go(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = ce(t) ? cn(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * r.x, c = t.clientHeight * r.y, _ = i * r.x, h = o * r.y;
  return {
    top: h,
    left: _,
    right: _ + l,
    bottom: h + c,
    x: _,
    y: h,
    width: l,
    height: c
  };
}
function x_(t, e, n) {
  return e === "viewport" ? Ws(Ov(t, n)) : Ue(e) ? Wv(e, n) : Ws(Hv(Ye(t)));
}
function Iv(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = $d(t).filter((c) => Ue(c) && Ie(c) !== "body"), i = null;
  const r = Jt(t).position === "fixed";
  let l = r ? qo(t) : t;
  for (; Ue(l) && !Lc(l); ) {
    const c = Jt(l), _ = Mc(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = qo(l);
  }
  return e.set(t, o), o;
}
function Uv(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? Iv(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = x_(e, s, i);
    return h.top = yo(d.top, h.top), h.right = w_(d.right, h.right), h.bottom = w_(d.bottom, h.bottom), h.left = yo(d.left, h.left), h;
  }, x_(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Fv = {
  getClippingRect: Uv,
  convertOffsetParentRelativeRectToViewportRelativeRect: Pv,
  isElement: Ue,
  getDimensions: Rv,
  getOffsetParent: k_,
  getDocumentElement: Ye,
  getScale: cn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || k_, r = this.getDimensions;
    return {
      reference: Nv(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => Jt(t).direction === "rtl"
}, kd = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Fv,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return wv(t, e, {
    ...i,
    platform: r
  });
};
let Bv = class extends pc {
  get nestedTrigger() {
    return this.props.nestedTrigger || "hover";
  }
  get name() {
    return "menu";
  }
  get menuName() {
    return "menu-context";
  }
  componentWillUnmount() {
    super.componentWillUnmount();
  }
  _getPopperOptions() {
    return {
      middleware: [hd()],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var e;
    return (e = this.ref.current) == null ? void 0 : e.parentElement;
  }
  _createPopper() {
    const e = this._getPopperOptions();
    this.ref.current && kd(this._getPopperElement(), this.ref.current, e).then(({ x: n, y: o }) => {
      Object.assign(this.ref.current.style, {
        left: `${n}px`,
        top: `${o}px`
      });
    });
  }
  afterRender(e) {
    super.afterRender(e), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ bv("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var de, yn, fr;
class Mt extends Ut {
  constructor() {
    super(...arguments);
    M(this, de, void 0);
    M(this, yn, void 0);
    M(this, fr, void 0);
    L(this, "arrowEl");
  }
  get isShown() {
    var n;
    return (n = v(this, de)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return v(this, de) || this._ensureMenu();
  }
  get trigger() {
    return v(this, fr) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return H(this, fr, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper(), this.emit("shown", this), !0);
  }
  hide() {
    var o;
    return this.emit("hide", this).defaultPrevented ? !1 : ((o = v(this, de)) == null || o.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n;
    super.destroy(), (n = v(this, de)) == null || n.remove();
  }
  _ensureMenu() {
    var r;
    const { element: n } = this, o = this.constructor.MENU_CLASS;
    let i;
    if (this.isDynamic)
      i = document.createElement("div"), i.classList.add(o), document.body.appendChild(i);
    else if (n) {
      const l = n.getAttribute("href") ?? n.dataset.target;
      if ((l == null ? void 0 : l[0]) === "#" && (i = document.querySelector(l)), !i) {
        const c = n.nextElementSibling;
        c != null && c.classList.contains(o) ? i = c : i = (r = n.parentNode) == null ? void 0 : r.querySelector(`.${o}`);
      }
    }
    if (!i)
      throw new Error("ContextMenu: Cannot find menu element");
    return i.style.width = "max-content", i.style.position = "absolute", i.style.top = "0", i.style.left = "0", H(this, de, i), i;
  }
  _getPopperOptions() {
    var o;
    const n = {
      middleware: []
    };
    return this.options.flip && ((o = n.middleware) == null || o.push(hd())), this.options.placement && (n.placement = this.options.placement), n;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    kd(this._getPopperElement(), this.menu, n).then(({ x: o, y: i, middlewareData: r }) => {
      if (Object.assign(this.menu.style, {
        left: `${o}px`,
        top: `${i}px`
      }), this.options.placement) {
        const l = this.options.placement.split("-")[0], c = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[l];
        if (r.arrow && this.arrowEl) {
          const { x: _, y: h } = r.arrow;
          Object.assign(this.arrowEl.style, {
            left: _ != null ? `${_}px` : "",
            top: h != null ? `${h}px` : "",
            [c]: `${-this.arrowEl.offsetWidth / 2}px`
          });
        }
      }
    });
  }
  _getMenuOptions() {
    const { menu: n, items: o } = this.options;
    let i = o || (n == null ? void 0 : n.items);
    if (i)
      return typeof i == "function" && (i = i(this)), {
        nestedTrigger: "hover",
        ...n,
        items: i
      };
  }
  _renderMenu() {
    const n = this._getMenuOptions();
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (gv(od(Bv, n), this.menu), !0);
  }
  _getPopperElement() {
    return v(this, yn) || H(this, yn, {
      getBoundingClientRect: () => {
        const { trigger: n } = this;
        if (n instanceof MouseEvent) {
          const { clientX: o, clientY: i } = n;
          return {
            width: 0,
            height: 0,
            top: i,
            right: o,
            bottom: i,
            left: o
          };
        }
        return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
      },
      contextElement: this.element
    }), v(this, yn);
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)) || o && yv(o))
      return;
    const l = this.getAll().entries(), c = new Set(i || []);
    for (const [s, d] of l)
      c.has(s) || d.hide();
  }
  static show(n) {
    var l;
    const { event: o, ...i } = n, r = this.ensure(document.body);
    return Object.keys(i).length && r.setOptions(i), r.show(o), (l = o == null ? void 0 : o.stopPropagation) == null || l.call(o), r;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
}
de = new WeakMap(), yn = new WeakMap(), fr = new WeakMap(), L(Mt, "NAME", "contextmenu"), L(Mt, "EVENTS", !0), L(Mt, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), L(Mt, "MENU_CLASS", "contextmenu"), L(Mt, "CLASS_SHOW", "show"), L(Mt, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (t) => {
  const e = t.target;
  if (e.closest(`.${Mt.MENU_CLASS}`))
    return;
  const n = e.closest(Mt.MENU_SELECTOR);
  n && (Mt.ensure(n).show(t), t.preventDefault());
});
document.addEventListener("click", Mt.clear.bind(Mt));
function xd(t) {
  return t.split("-")[1];
}
function jv(t) {
  return t === "y" ? "height" : "width";
}
function Sd(t) {
  return t.split("-")[0];
}
function Cd(t) {
  return ["top", "bottom"].includes(Sd(t)) ? "x" : "y";
}
function Vv(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function zv(t) {
  return typeof t != "number" ? Vv(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
const Yv = Math.min, Gv = Math.max;
function qv(t, e, n) {
  return Gv(t, Yv(e, n));
}
const Xv = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t || {}, {
      x: i,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = e;
    if (n == null)
      return {};
    const h = zv(o), s = {
      x: i,
      y: r
    }, d = Cd(l), f = jv(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], E = w / 2 - a[f] / 2 + k, y = qv(C, E, A), N = xd(l) != null && E != y && c.reference[f] / 2 - (E < C ? h[u] : h[b]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - N,
      data: {
        [d]: y,
        centerOffset: E - y
      }
    };
  }
});
async function Kv(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Sd(n), c = xd(n), _ = Cd(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: f,
    crossAxis: a,
    alignmentAxis: u
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof u == "number" && (a = c === "end" ? u * -1 : u), _ ? {
    x: a * s,
    y: f * h
  } : {
    x: f * h,
    y: a * s
  };
}
const Zv = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await Kv(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
var vn, bn, wn, mi, Ed;
const Yc = class extends Mt {
  constructor() {
    super(...arguments);
    M(this, mi);
    M(this, vn, !1);
    M(this, bn, 0);
    L(this, "hideLater", () => {
      v(this, wn).call(this), H(this, bn, window.setTimeout(this.hide.bind(this), 100));
    });
    M(this, wn, () => {
      clearTimeout(v(this, bn)), H(this, bn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, o) {
    (o == null ? void 0 : o.clearOthers) !== !1 && Yc.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const i = super.show(n);
    return i && (!v(this, vn) && this.isHover && U(this, mi, Ed).call(this), this.element.classList.add(this.elementShowClass)), i;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    v(this, vn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", v(this, wn)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var i, r;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    return o && ((i = n.middleware) == null || i.push(Zv(o + (this.options.offset ?? 0))), (r = n.middleware) == null || r.push(Xv({ element: this.arrowEl }))), n;
  }
  _ensureMenu() {
    const n = super._ensureMenu();
    if (this.options.arrow) {
      const o = document.createElement("div");
      this.arrowEl = o, this.arrowEl.style.position = "absolute", this.arrowEl.style.width = "8px", this.arrowEl.style.height = "8px", this.arrowEl.style.transform = "rotate(45deg)", this.arrowEl.style.background = "inherit", this.arrowEl.style.border = "inherit", n.append(o);
    }
    return n;
  }
  _getMenuOptions() {
    const n = super._getMenuOptions();
    if (n && this.options.arrow) {
      const { afterRender: o } = n;
      n.afterRender = (...i) => {
        o == null || o(...i);
      };
    }
    return n;
  }
};
let St = Yc;
vn = new WeakMap(), bn = new WeakMap(), wn = new WeakMap(), mi = new WeakSet(), Ed = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", v(this, wn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, vn, !0);
}, L(St, "NAME", "dropdown"), L(St, "MENU_CLASS", "dropdown-menu"), L(St, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), L(St, "DEFAULT", {
  ...Mt.DEFAULT,
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(St.MENU_SELECTOR);
  if (n) {
    const o = St.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    St.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  const e = t.target, n = typeof e.closest == "function" ? e.closest(St.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = St.ensure(n);
  o.isHover && o.show();
});
const Jv = (t) => {
  const e = document.getElementsByClassName("with-dropdown-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(St.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || St.clear({ event: t });
};
window.addEventListener("scroll", Jv, !0);
var ur, $n;
class Qv extends mo {
  constructor(n) {
    var o;
    super(n);
    M(this, ur, void 0);
    M(this, $n, lv());
    this.state = { placement: ((o = n.dropdown) == null ? void 0 : o.placement) || "", show: !1 };
  }
  get ref() {
    return v(this, $n);
  }
  get triggerElement() {
    return v(this, $n).current;
  }
  componentDidMount() {
    const { modifiers: n = [], ...o } = this.props.dropdown || {};
    n.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: i }) => {
        var l;
        const r = ((l = i.placement) == null ? void 0 : l.split("-").shift()) || "";
        this.setState({ placement: r });
      }
    }), H(this, ur, St.ensure(this.triggerElement, {
      ...o,
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
    (n = v(this, ur)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: o, dropdown: i, ...r } = this.props;
    return {
      className: F("dropdown", n),
      children: typeof o == "function" ? o(this.state) : o,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: v(this, $n)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ Qh("div", { ...o, children: n });
  }
}
ur = new WeakMap(), $n = new WeakMap();
class tb extends Qv {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var r;
    const { placement: e, show: n } = this.state, o = this.beforeRender();
    let { caret: i = !0 } = o;
    if (i !== !1 && (n || i === !0)) {
      const l = n ? e : (r = this.props.dropdown) == null ? void 0 : r.placement;
      i = (l === "top" ? "up" : l === "bottom" ? "down" : l) || (typeof i == "string" ? i : "") || "down";
    }
    return o.caret = i, /* @__PURE__ */ Qh(Oe, { ...o });
  }
}
function Ad({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ gl(tb, { type: n, ...o });
}
function eb({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ gl(vc, { type: n, ...o });
}
var on;
let Xo = (on = class extends On {
  beforeRender() {
    const { gap: e, btnProps: n, wrap: o, ...i } = super.beforeRender();
    return i.className = F(i.className, o ? "flex-wrap" : "", typeof e == "number" ? `gap-${e}` : ""), typeof e == "string" && (i.style ? i.style.gap = e : i.style = { gap: e }), i;
  }
  isBtnItem(e) {
    return e === "item" || e === "dropdown";
  }
  renderTypedItem(e, n, o) {
    const i = this.isBtnItem(o.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, r = {
      ...n,
      ...i,
      ...o,
      className: F(`${this.name}-${o.type}`, n.className, i.className, o.className),
      style: Object.assign({}, n.style, i.style, o.style)
    };
    return /* @__PURE__ */ gl(e, { ...r });
  }
}, L(on, "ItemComponents", {
  item: sv,
  dropdown: Ad,
  "btn-group": eb
}), L(on, "ROOT_TAG", "nav"), L(on, "NAME", "toolbar"), L(on, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), on);
class Td extends ln {
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
      title: n
    } = this.props;
    return qn(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ bt("div", { className: "modal-header", children: /* @__PURE__ */ bt("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: e,
      closeBtn: n
    } = this.props;
    return !n && !e ? null : qn(e) ? e : /* @__PURE__ */ bt("div", { className: "modal-actions", children: [
      e ? /* @__PURE__ */ bt(Xo, { ...e }) : null,
      n ? /* @__PURE__ */ bt("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ bt("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: e
    } = this.props;
    return e ? qn(e) ? e : /* @__PURE__ */ bt("div", { className: "modal-body", children: e }) : null;
  }
  renderFooter() {
    const {
      footer: e,
      footerActions: n
    } = this.props;
    return qn(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ bt("div", { className: "modal-footer", children: n ? /* @__PURE__ */ bt(Xo, { ...n }) : null });
  }
  render() {
    const {
      className: e,
      style: n,
      children: o
    } = this.props;
    return /* @__PURE__ */ bt("div", { className: F("modal-dialog", e), style: n, children: /* @__PURE__ */ bt("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      o,
      this.renderFooter()
    ] }) });
  }
}
L(Td, "defaultProps", { closeBtn: !0 });
var hr, kn, dr;
class nb extends ln {
  constructor() {
    super(...arguments);
    M(this, hr, Zy());
    M(this, kn, void 0);
    L(this, "state", {});
    M(this, dr, () => {
      var i, r;
      const n = (r = (i = v(this, hr).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let o = v(this, kn);
      o == null || o.disconnect(), o = new ResizeObserver(() => {
        const l = n.body, c = n.documentElement, _ = Math.ceil(Math.max(l.scrollHeight, l.offsetHeight, c.offsetHeight));
        this.setState({ height: _ });
      }), o.observe(n.body), o.observe(n.documentElement), H(this, kn, o);
    });
  }
  componentDidMount() {
    v(this, dr).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = v(this, kn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ bt(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: v(this, hr),
        onLoad: v(this, dr)
      }
    );
  }
}
hr = new WeakMap(), kn = new WeakMap(), dr = new WeakMap();
function ob(t, e) {
  const { custom: n, title: o, content: i } = e;
  return {
    body: i,
    title: o,
    ...typeof n == "function" ? n() : n
  };
}
async function rb(t, e) {
  const { dataType: n, url: o, request: i, custom: r, title: l } = e, _ = await (await fetch(o, i)).text();
  if (n !== "html")
    try {
      const h = JSON.parse(_);
      return {
        title: l,
        ...r,
        ...h
      };
    } catch {
    }
  return {
    title: l,
    ...r,
    body: n === "html" ? /* @__PURE__ */ bt("div", { className: "modal-body", dangerouslySetInnerHTML: { __html: _ } }) : _
  };
}
async function sb(t, e) {
  const { url: n, custom: o, title: i } = e;
  return {
    title: i,
    ...o,
    body: /* @__PURE__ */ bt(nb, { url: n })
  };
}
const ib = {
  custom: ob,
  ajax: rb,
  iframe: sb
};
var pr, mr, Vt, xn, ns, gi, Md, gr, Ql;
const Lo = class extends Tt {
  constructor() {
    super(...arguments);
    M(this, xn);
    M(this, gi);
    M(this, gr);
    M(this, pr, void 0);
    M(this, mr, void 0);
    M(this, Vt, void 0);
  }
  get id() {
    return v(this, mr);
  }
  get loading() {
    return this.modalElement.classList.contains(Lo.LOADING_CLASS);
  }
  get modalElement() {
    let n = v(this, pr);
    if (!n) {
      const { id: o } = this;
      n = this.element.querySelector(`#${o}`), n || (n = document.createElement("div"), Ts(n, {
        id: o,
        style: this.options.style
      }), Mh(n, ["modal modal-async", this.options.className]), this.element.appendChild(n)), H(this, pr, n);
    }
    return n;
  }
  afterInit() {
    super.afterInit(), H(this, mr, this.options.id || `modal-${ov()}`);
  }
  show(n) {
    return super.show(n) ? (this.buildDialog(), !0) : !1;
  }
  render(n) {
    super.render(n), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    v(this, Vt) && clearTimeout(v(this, Vt));
    const { modalElement: n, options: o } = this, { type: i, loadTimeout: r } = o, l = ib[i];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.classList.add(Lo.LOADING_CLASS), await U(this, gi, Md).call(this), r && H(this, Vt, window.setTimeout(() => {
      H(this, Vt, 0), U(this, gr, Ql).call(this, this.options.timeoutTip);
    }, r));
    const c = await l(n, o);
    return c === !1 ? await U(this, gr, Ql).call(this, this.options.failedTip) : c && typeof c == "object" && await U(this, xn, ns).call(this, c), v(this, Vt) && (clearTimeout(v(this, Vt)), H(this, Vt, 0)), n.classList.remove(Lo.LOADING_CLASS), !0;
  }
};
let Xn = Lo;
pr = new WeakMap(), mr = new WeakMap(), Vt = new WeakMap(), xn = new WeakSet(), ns = function(n) {
  return new Promise((o) => {
    const { afterRender: i, ...r } = n;
    n = {
      afterRender: (l) => {
        this.layout(), i == null || i(l), o();
      },
      ...r
    }, ev(
      /* @__PURE__ */ bt(Td, { ...n }),
      this.modalElement
    );
  });
}, gi = new WeakSet(), Md = function() {
  const { loadingText: n } = this.options;
  return U(this, xn, ns).call(this, {
    body: /* @__PURE__ */ bt("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ bt("span", { className: "spinner" }),
      n ? /* @__PURE__ */ bt("span", { className: "modal-loading-text", children: n }) : null
    ] })
  });
}, gr = new WeakSet(), Ql = function(n) {
  if (n)
    return U(this, xn, ns).call(this, {
      body: /* @__PURE__ */ bt("div", { className: "modal-load-failed", children: n })
    });
}, L(Xn, "LOADING_CLASS", "loading"), L(Xn, "DEFAULT", {
  ...Tt.DEFAULT,
  loadTimeout: 1e4
});
var pe, yi, Ld, vi, Nd, bi, Dd;
class vo extends Ut {
  constructor() {
    super(...arguments);
    M(this, yi);
    M(this, vi);
    M(this, bi);
    M(this, pe, void 0);
  }
  get modal() {
    return v(this, pe);
  }
  get container() {
    const { container: n } = this.options;
    return typeof n == "string" ? document.querySelector(n) : n instanceof HTMLElement ? n : document.body;
  }
  show() {
    return U(this, vi, Nd).call(this).show();
  }
  hide() {
    var n;
    (n = v(this, pe)) == null || n.hide();
  }
}
pe = new WeakMap(), yi = new WeakSet(), Ld = function() {
  const {
    container: n,
    ...o
  } = this.options, i = o, r = this.element.getAttribute("href") || "";
  return i.type || (i.target || r[0] === "#" ? i.type = "static" : i.type = i.type || (i.url ? "iframe" : "custom")), !i.url && (i.type === "iframe" || i.type === "ajax") && r[0] !== "#" && (i.url = r), i;
}, vi = new WeakSet(), Nd = function() {
  const n = U(this, yi, Ld).call(this);
  let o = v(this, pe);
  return o ? o.setOptions(n) : n.type === "static" ? (o = new Tt(U(this, bi, Dd).call(this), n), H(this, pe, o)) : (o = new Xn(this.container, n), H(this, pe, o)), o;
}, bi = new WeakSet(), Dd = function() {
  let n = this.options.target;
  if (!n) {
    const { element: o } = this;
    if (o.tagName === "A") {
      const i = o.getAttribute("href");
      i != null && i.startsWith("#") && (n = i);
    }
  }
  return this.container.querySelector(n || ".modal");
}, L(vo, "NAME", "ModalTrigger"), L(vo, "EVENTS", !0), L(vo, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (t) => {
  const n = t.target.closest(vo.TOGGLE_SELECTOR);
  if (n) {
    const o = vo.ensure(n);
    o && o.show(), console.log("> modalTrigger", o);
  }
});
var Bl;
let lb = (Bl = class extends On {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = F(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
}, L(Bl, "NAME", "nav"), Bl);
class S_ extends Dt {
}
L(S_, "NAME", "nav"), L(S_, "Component", lb);
var tc;
tc = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} };
var cb = 0;
function Re(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --cb, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return tc.vnode && tc.vnode(_), _;
}
function Ko(t, e) {
  const n = t.pageTotal || Math.ceil(t.recTotal / t.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = n : e === "prev" ? e = t.page - 1 : e === "next" ? e = t.page + 1 : e === "current" ? e = t.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? n + e : e, n)) : t.page, {
    ...t,
    pageTotal: n,
    page: e
  };
}
function ab({
  key: t,
  type: e,
  btnType: n,
  page: o,
  format: i,
  pagerInfo: r,
  linkCreator: l,
  ...c
}) {
  const _ = Ko(r, o);
  return c.text === void 0 && !c.icon && i && (c.text = typeof i == "function" ? i(_) : Lt(i, _)), c.url === void 0 && l && (c.url = typeof l == "function" ? l(_) : Lt(l, _)), c.disabled === void 0 && (c.disabled = o !== void 0 && _.page === r.page), /* @__PURE__ */ Re(Oe, { type: n, ...c });
}
const ne = 24 * 60 * 60 * 1e3, Nt = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : new Date(), Nr = (t, e = new Date()) => (t = Nt(t), e = Nt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()), C_ = (t, e = new Date()) => Nt(t).getFullYear() === Nt(e).getFullYear(), _b = (t, e = new Date()) => (t = Nt(t), e = Nt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()), Vw = (t, e = new Date()) => {
  t = Nt(t), e = Nt(e);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(t.getTime() / n), i = Math.floor(e.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((i + 4) / 7);
}, zw = (t, e) => Nr(Nt(e), t), Yw = (t, e) => Nr(Nt(e).getTime() - ne, t), Gw = (t, e) => Nr(Nt(e).getTime() + ne, t), qw = (t, e) => Nr(Nt(e).getTime() - 2 * ne, t), ec = (t, e = "yyyy-MM-dd hh:mm") => {
  t = Nt(t);
  const n = {
    "M+": t.getMonth() + 1,
    "d+": t.getDate(),
    "h+": t.getHours(),
    "H+": t.getHours() % 12,
    "m+": t.getMinutes(),
    "s+": t.getSeconds(),
    "S+": t.getMilliseconds()
  };
  return /(y+)/i.test(e) && (e = e.replace(RegExp.$1, `${t.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((o) => {
    if (new RegExp(`(${o})`).test(e)) {
      const i = `${n[o]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? i : `00${i}`.substring(i.length));
    }
  }), e;
}, Xw = (t, e, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = ec(t, C_(t) ? o.month : o.full);
  if (Nr(t, e))
    return i;
  const r = ec(e, C_(t, e) ? _b(t, e) ? o.day : o.month : o.full);
  return o.str.replace("{0}", i).replace("{1}", r);
}, Kw = (t) => {
  const e = new Date().getTime();
  switch (t) {
    case "oneWeek":
      return e - ne * 7;
    case "oneMonth":
      return e - ne * 31;
    case "threeMonth":
      return e - ne * 31 * 3;
    case "halfYear":
      return e - ne * 183;
    case "oneYear":
      return e - ne * 365;
    case "twoYear":
      return e - 2 * (ne * 365);
    default:
      return 0;
  }
}, E_ = (t, e, n = !0, o = Date.now()) => {
  switch (e) {
    case "year":
      return t *= 365, E_(t, "day", n, o);
    case "quarter":
      t *= 3;
    case "month":
      return t *= 30, E_(t, "day", n, o);
    case "week":
      t *= 7;
    case "day":
      t *= 24;
    case "hour":
      t *= 60;
    case "minute":
      t *= 6e4;
      break;
    default:
      t = 0;
  }
  return n ? o + t : o - t;
};
function fb({
  key: t,
  type: e,
  page: n,
  text: o = "",
  pagerInfo: i,
  children: r,
  ...l
}) {
  const c = Ko(i, n);
  return o = typeof o == "function" ? o(c) : Lt(o, c), /* @__PURE__ */ Re(Xf, { ...l, children: [
    r,
    o
  ] });
}
function ub({
  key: t,
  type: e,
  btnType: n,
  count: o = 12,
  pagerInfo: i,
  onClick: r,
  linkCreator: l,
  ...c
}) {
  if (!i.pageTotal)
    return;
  const _ = { ...c, square: !0 }, h = () => (_.text = "", _.icon = "icon-ellipsis-h", _.disabled = !0, /* @__PURE__ */ Re(Oe, { type: n, ..._ })), s = (f, a) => {
    const u = [];
    for (let b = f; b <= a; b++) {
      _.text = b, delete _.icon, _.disabled = !1;
      const p = Ko(i, b);
      l && (_.url = typeof l == "function" ? l(p) : Lt(l, p)), u.push(/* @__PURE__ */ Re(Oe, { type: n, ..._, onClick: r }));
    }
    return u;
  };
  let d = [];
  return d = [...s(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= o ? d = [...d, ...s(2, i.pageTotal)] : i.page < o - 2 ? d = [...d, ...s(2, o - 2), h(), ...s(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - o + 3 ? d = [...d, h(), ...s(i.pageTotal - o + 3, i.pageTotal)] : d = [...d, h(), ...s(i.page - Math.ceil((o - 4) / 2), i.page + Math.floor((o - 4) / 2)), h(), ...s(i.pageTotal, i.pageTotal)]), d;
}
function hb({
  type: t,
  pagerInfo: e,
  linkCreator: n,
  items: o = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  ...r
}) {
  var c;
  i.items = i.items ?? o.map((_) => {
    const h = { ...e, recPerPage: _ };
    return {
      text: `${_}`,
      url: typeof n == "function" ? n(h) : Lt(n, h)
    };
  });
  const { text: l = "" } = r;
  return r.text = typeof l == "function" ? l(e) : Lt(l, e), i.menu = { ...i.menu, className: F((c = i.menu) == null ? void 0 : c.className, "pager-size-menu") }, /* @__PURE__ */ Re(Ad, { type: "dropdown", dropdown: i, ...r });
}
function db({
  key: t,
  page: e,
  type: n,
  btnType: o,
  pagerInfo: i,
  size: r,
  onClick: l,
  onChange: c,
  linkCreator: _,
  ...h
}) {
  const s = { ...h };
  let d;
  const f = (b) => {
    var p;
    d = Number((p = b.target) == null ? void 0 : p.value) || 1, d = d > i.pageTotal ? i.pageTotal : d;
  }, a = (b) => {
    if (!(b != null && b.target))
      return;
    d = d <= i.pageTotal ? d : i.pageTotal;
    const p = Ko(i, d);
    c && !c({ info: p, event: b }) || (b.target.href = s.url = typeof _ == "function" ? _(p) : Lt(_, p));
  }, u = Ko(i, e || 0);
  return s.url = typeof _ == "function" ? _(u) : Lt(_, u), s.className = F("input-group-addon", s.className), /* @__PURE__ */ Re("div", { className: F("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ Re("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: f }),
    /* @__PURE__ */ Re(Oe, { type: o, ...s, onClick: a })
  ] });
}
var zn;
let pb = (zn = class extends Xo {
  get pagerInfo() {
    const { page: e = 1, recTotal: n = 0, recPerPage: o = 10 } = this.props;
    return { page: e, recTotal: n, recPerPage: o, pageTotal: o ? Math.ceil(n / o) : 0 };
  }
  isBtnItem(e) {
    return e === "link" || e === "nav" || e === "size-menu" || e === "goto" || super.isBtnItem(e);
  }
  getItemRenderProps(e, n, o) {
    const i = super.getItemRenderProps(e, n, o), r = n.type || "item";
    return r === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: e.linkCreator }), i;
  }
}, L(zn, "NAME", "pager"), L(zn, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), L(zn, "ItemComponents", {
  ...Xo.ItemComponents,
  link: ab,
  info: fb,
  nav: ub,
  "size-menu": hb,
  goto: db
}), zn);
class A_ extends Dt {
}
L(A_, "NAME", "pager"), L(A_, "Component", pb);
var Rd, dt, Pd, bo, T_, Od = {}, Hd = [], mb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Te(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Wd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Ol(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Pd };
  return i == null && dt.vnode != null && dt.vnode(r), r;
}
function gb() {
  return { current: null };
}
function Nc(t) {
  return t.children;
}
function Pe(t, e) {
  this.props = t, this.context = e;
}
function Zo(t, e) {
  if (e == null)
    return t.__ ? Zo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Zo(t) : null;
}
function Id(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Id(t);
  }
}
function M_(t) {
  (!t.__d && (t.__d = !0) && bo.push(t) && !Fs.__r++ || T_ !== dt.debounceRendering) && ((T_ = dt.debounceRendering) || setTimeout)(Fs);
}
function Fs() {
  for (var t; Fs.__r = bo.length; )
    t = bo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), bo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Te({}, r)).__v = r.__v + 1, jd(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Zo(r), r.__h), vb(o, r), r.__e != l && Id(r)));
    });
}
function Ud(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Hd, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Ol(null, a, null, null, a) : Array.isArray(a) ? Ol(Nc, { children: a }, null, null, null) : a.__b > 0 ? Ol(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      jd(t, a, f = f || Od, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Fd(a, _, t) : _ = Bd(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Zo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && zd(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Vd(p[s], p[++s], p[++s]);
}
function Fd(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Fd(o, e, n) : Bd(n, o, o, i, o.__e, e));
  return e;
}
function Bd(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function yb(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Bs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Bs(t, r, e[r], n[r], o);
}
function L_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || mb.test(e) ? n : n + "px";
}
function Bs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || L_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || L_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? D_ : N_, r) : t.removeEventListener(e, r ? D_ : N_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function N_(t) {
  this.l[t.type + !1](dt.event ? dt.event(t) : t);
}
function D_(t) {
  this.l[t.type + !0](dt.event ? dt.event(t) : t);
}
function jd(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = dt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Pe(p, g), s.constructor = y, s.render = wb), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Te({}, s.__s)), Te(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = dt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Te(Te({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Nc && h.key == null ? h.props.children : h, Ud(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = bb(n.__e, e, n, o, i, r, l, _);
    (h = dt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), dt.__e(x, e, n);
  }
}
function vb(t, e) {
  dt.__c && dt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      dt.__e(o, n.__v);
    }
  });
}
function bb(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Rd.call(t.childNodes), h = (d = n.props || Od).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (yb(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Ud(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Zo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Wd(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Bs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Bs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Vd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    dt.__e(o, n);
  }
}
function zd(t, e, n) {
  var o, i;
  if (dt.unmount && dt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Vd(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        dt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && zd(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Wd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function wb(t, e, n) {
  return this.constructor(t, n);
}
Rd = Hd.slice, dt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Pd = 0, Pe.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Te({}, this.state), typeof t == "function" && (t = t(Te({}, n), this.props)), t && Te(n, t), t != null && this.__v && (e && this._sb.push(e), M_(this));
}, Pe.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), M_(this));
}, Pe.prototype.render = Nc, bo = [], Fs.__r = 0;
var $b = 0;
function Q(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --$b, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return dt.vnode && dt.vnode(_), _;
}
let kb = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var wi;
class xb extends Pe {
  constructor() {
    super(...arguments);
    M(this, wi, (n) => {
      var l;
      const { onDeselect: o, selections: i } = this.props, r = (l = n.target.closest(".picker-deselect-btn")) == null ? void 0 : l.dataset.idx;
      r && o && (i != null && i.length) && (n.stopPropagation(), o([i[+r]], n));
    });
  }
  render() {
    const {
      className: n,
      style: o,
      disabled: i,
      placeholder: r,
      focused: l,
      selections: c = [],
      onClick: _,
      children: h
    } = this.props;
    let s;
    return c.length ? s = /* @__PURE__ */ Q("div", { className: "picker-multi-selections", children: c.map((d, f) => /* @__PURE__ */ Q("div", { className: "picker-multi-selection", children: [
      d.text ?? d.value,
      /* @__PURE__ */ Q("div", { className: "picker-deselect-btn btn", onClick: v(this, wi), "data-idx": f, children: /* @__PURE__ */ Q("span", { className: "close" }) })
    ] })) }) : s = /* @__PURE__ */ Q("span", { className: "picker-select-placeholder", children: r }), /* @__PURE__ */ Q(
      "div",
      {
        className: F("picker-select picker-select-multi form-control", n, { disabled: i, focused: l }),
        style: o,
        onClick: _,
        children: [
          s,
          h,
          /* @__PURE__ */ Q("span", { class: "caret" })
        ]
      }
    );
  }
}
wi = new WeakMap();
var $i;
class Sb extends Pe {
  constructor() {
    super(...arguments);
    M(this, $i, (n) => {
      const { onDeselect: o, selections: i } = this.props;
      o && (i != null && i.length) && (n.stopPropagation(), o(i, n));
    });
  }
  render() {
    const {
      className: n,
      style: o,
      disabled: i,
      placeholder: r,
      focused: l,
      selections: c = [],
      onDeselect: _,
      onClick: h,
      children: s
    } = this.props, [d] = c, f = d ? /* @__PURE__ */ Q("span", { className: "picker-single-selection", children: d.text ?? d.value }) : /* @__PURE__ */ Q("span", { className: "picker-select-placeholder", children: r }), a = d && _ ? /* @__PURE__ */ Q("button", { type: "button", className: "btn picker-deselect-btn", onClick: v(this, $i), children: /* @__PURE__ */ Q("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ Q(
      "div",
      {
        className: F("picker-select picker-select-single form-control", n, { disabled: i, focused: l }),
        style: o,
        onClick: h,
        children: [
          f,
          s,
          a,
          /* @__PURE__ */ Q("span", { class: "caret" })
        ]
      }
    );
  }
}
$i = new WeakMap();
var ki, Yd, yr, xi, vr, Si;
class Cb extends Pe {
  constructor() {
    super(...arguments);
    M(this, ki);
    L(this, "state", { keys: "", shown: !1 });
    M(this, yr, (n) => {
      var o;
      (o = n.target) != null && o.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    M(this, xi, ({ item: n }) => {
      const o = this.props.items.find((i) => i.value === n.key);
      o && this.props.onSelectItem(o);
    });
    M(this, vr, (n) => {
      this.setState({ keys: n.target.value });
    });
    M(this, Si, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", v(this, yr)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", v(this, yr));
  }
  show() {
    this.state.shown || this.setState({ shown: !0 });
  }
  hide() {
    this.state.shown && this.setState({ shown: !1 }, () => {
      window.setTimeout(() => {
        var n, o;
        (o = (n = this.props).onRequestHide) == null || o.call(n);
      }, 200);
    });
  }
  render() {
    const {
      id: n,
      search: o,
      className: i,
      style: r = {},
      maxHeight: l,
      maxWidth: c,
      width: _,
      menu: h,
      searchHint: s
    } = this.props, { shown: d, keys: f } = this.state, a = f.trim().length;
    return /* @__PURE__ */ Q("div", { className: F("picker-menu", i, { shown: d, "has-search": a }), id: `picker-menu-${n}`, style: { maxHeight: l, maxWidth: c, width: _, ...r }, children: [
      o ? /* @__PURE__ */ Q("div", { className: "picker-menu-search", children: [
        /* @__PURE__ */ Q("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: s, value: f, onChange: v(this, vr), onInput: v(this, vr) }),
        a ? /* @__PURE__ */ Q("button", { type: "button", className: "btn picker-menu-search-clear", onClick: v(this, Si), children: /* @__PURE__ */ Q("span", { className: "close" }) }) : /* @__PURE__ */ Q("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ Q(pc, { className: "picker-menu-list", items: U(this, ki, Yd).call(this), onClickItem: v(this, xi), ...h })
    ] });
  }
}
ki = new WeakSet(), Yd = function() {
  const { selections: n, items: o } = this.props, i = new Set(n), r = this.state.keys.toLowerCase().split(" ").filter((l) => l.length);
  return o.reduce((l, c) => {
    const {
      value: _,
      keys: h,
      text: s,
      ...d
    } = c;
    if (!r.length || r.every((f) => _.toLowerCase().includes(f) || (h == null ? void 0 : h.toLowerCase().includes(f)) || typeof s == "string" && s.toLowerCase().includes(f))) {
      let f = s ?? _;
      typeof f == "string" && r.length && (f = /* @__PURE__ */ Q("span", { dangerouslySetInnerHTML: { __html: r.reduce((a, u) => a.replace(u, `<span class="picker-menu-item-match">${u}</span>`), f) } })), l.push({
        key: _,
        active: i.has(_),
        text: f,
        ...d
      });
    }
    return l;
  }, []);
}, yr = new WeakMap(), xi = new WeakMap(), vr = new WeakMap(), Si = new WeakMap();
function R_(t) {
  const e = /* @__PURE__ */ new Set();
  return t.reduce((n, o) => (e.has(o) || (e.add(o), n.push(o)), n), []);
}
var jl, br, wr, $r, Sn, os, kr, nc, Ci, Gd, Ei, qd, Ai, Ti, Mi, Li, Ni, Xd;
let Eb = (jl = class extends Pe {
  constructor(n) {
    super(n);
    M(this, Sn);
    M(this, kr);
    M(this, Ci);
    M(this, Ei);
    M(this, Ni);
    M(this, br, 0);
    M(this, wr, kb());
    M(this, $r, gb());
    M(this, Ai, (n, o) => {
      const { valueList: i } = this, r = new Set(n.map((c) => c.value)), l = i.filter((c) => !r.has(c));
      this.setState({ value: l.length ? l.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    M(this, Ti, (n) => {
      console.log("#handleSelectClick", n), this.setState({ open: !0 });
    });
    M(this, Mi, () => {
      this.close();
    });
    M(this, Li, (n) => {
      this.props.multi ? this.toggleValue(n.value) : this.setState({ value: n.value }, () => {
        var o;
        (o = v(this, $r).current) == null || o.hide();
      });
    });
    this.state = {
      value: U(this, Ci, Gd).call(this, n.defaultValue) ?? "",
      open: !1,
      loading: !1,
      search: "",
      items: Array.isArray(n.items) ? n.items : []
    };
  }
  get value() {
    return this.state.value;
  }
  get valueList() {
    return U(this, kr, nc).call(this, this.state.value);
  }
  componentDidMount() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var n;
    (n = this.props.beforeDestroy) == null || n.call(this);
  }
  async loadItemList() {
    let { items: n } = this.props;
    if (typeof n == "function") {
      const i = ++Zc(this, br)._;
      if (await U(this, Sn, os).call(this, { loading: !0, items: [] }), n = await n(), v(this, br) !== i)
        return [];
    }
    const o = {};
    return Array.isArray(n) && this.state.items !== n && (o.items = n), this.state.loading && (o.loading = !1), Object.keys(o).length && await U(this, Sn, os).call(this, o), n;
  }
  getItemList() {
    return this.state.items;
  }
  getItemMap() {
    return this.getItemList().reduce((n, o) => (n[o.value] = o, n), {});
  }
  getItemByValue(n) {
    return this.getItemList().find((o) => o.value === n);
  }
  getSelections() {
    const n = this.getItemMap();
    return this.valueList.map((o) => n[o] || { value: o });
  }
  async toggle(n) {
    if (n === void 0)
      n = !this.state.open;
    else if (n === this.state.open)
      return;
    await U(this, Sn, os).call(this, { open: n }), n && this.loadItemList();
  }
  open() {
    return this.toggle(!0);
  }
  close() {
    return this.toggle(!1);
  }
  toggleValue(n, o) {
    const { valueList: i } = this, r = i.indexOf(n);
    o !== !!r && (r > -1 ? i.splice(r, 1) : i.push(n), this.setState({ value: i.join(this.props.valueSplitter ?? ",") }));
  }
  render() {
    const {
      className: n,
      style: o,
      children: i,
      multi: r
    } = this.props, l = r ? xb : Sb;
    return /* @__PURE__ */ Q("div", { className: F("picker", n), style: o, id: `picker-${v(this, wr)}`, children: [
      /* @__PURE__ */ Q(l, { ...U(this, Ei, qd).call(this) }),
      i,
      this.state.open ? /* @__PURE__ */ Q(Cb, { ...U(this, Ni, Xd).call(this), ref: v(this, $r) }) : null
    ] });
  }
}, br = new WeakMap(), wr = new WeakMap(), $r = new WeakMap(), Sn = new WeakSet(), os = function(n) {
  return new Promise((o) => {
    this.setState(n, o);
  });
}, kr = new WeakSet(), nc = function(n) {
  return typeof n == "string" ? R_(n.split(this.props.valueSplitter ?? ",")) : Array.isArray(n) ? R_(n) : [];
}, Ci = new WeakSet(), Gd = function(n) {
  const o = U(this, kr, nc).call(this, n);
  return o.length ? o.join(this.props.valueSplitter ?? ",") : void 0;
}, Ei = new WeakSet(), qd = function() {
  const { placeholder: n, disabled: o } = this.props, { open: i } = this.state;
  return {
    focused: i,
    placeholder: n,
    disabled: o,
    selections: this.getSelections(),
    onClick: v(this, Ti),
    onDeselect: v(this, Ai)
  };
}, Ai = new WeakMap(), Ti = new WeakMap(), Mi = new WeakMap(), Li = new WeakMap(), Ni = new WeakSet(), Xd = function() {
  const { search: n, menuClass: o, menuWidth: i, menuStyle: r, menuMaxHeight: l, menuMaxWidth: c } = this.props, { items: _ } = this.state;
  return {
    id: v(this, wr),
    items: _,
    selections: this.valueList,
    search: n === !0 || typeof n == "number" && n <= _.length,
    style: r,
    className: o,
    width: i,
    maxHeight: l,
    maxWidth: c,
    onRequestHide: v(this, Mi),
    onSelectItem: v(this, Li)
  };
}, L(jl, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), jl);
class P_ extends Dt {
}
L(P_, "NAME", "picker"), L(P_, "Component", Eb);
var $l, st, Kd, wo, O_, js = {}, Zd = [], Ab = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Me(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Jd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Qd(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? $l.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return rs(t, l, o, i, null);
}
function rs(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Kd };
  return i == null && st.vnode != null && st.vnode(r), r;
}
function Ir() {
  return { current: null };
}
function kl(t) {
  return t.children;
}
function $o(t, e) {
  this.props = t, this.context = e;
}
function Jo(t, e) {
  if (e == null)
    return t.__ ? Jo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Jo(t) : null;
}
function tp(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return tp(t);
  }
}
function H_(t) {
  (!t.__d && (t.__d = !0) && wo.push(t) && !Vs.__r++ || O_ !== st.debounceRendering) && ((O_ = st.debounceRendering) || setTimeout)(Vs);
}
function Vs() {
  for (var t; Vs.__r = wo.length; )
    t = wo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), wo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Me({}, r)).__v = r.__v + 1, Dc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Jo(r), r.__h), rp(o, r), r.__e != l && tp(r)));
    });
}
function ep(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Zd, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? rs(null, a, null, null, a) : Array.isArray(a) ? rs(kl, { children: a }, null, null, null) : a.__b > 0 ? rs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Dc(t, a, f = f || js, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = np(a, _, t) : _ = op(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Jo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && ip(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      sp(p[s], p[++s], p[++s]);
}
function np(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? np(o, e, n) : op(n, o, o, i, o.__e, e));
  return e;
}
function op(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Tb(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || zs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || zs(t, r, e[r], n[r], o);
}
function W_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Ab.test(e) ? n : n + "px";
}
function zs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || W_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || W_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? U_ : I_, r) : t.removeEventListener(e, r ? U_ : I_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function I_(t) {
  this.l[t.type + !1](st.event ? st.event(t) : t);
}
function U_(t) {
  this.l[t.type + !0](st.event ? st.event(t) : t);
}
function Dc(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = st.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new $o(p, g), s.constructor = y, s.render = Lb), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Me({}, s.__s)), Me(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = st.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Me(Me({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === kl && h.key == null ? h.props.children : h, ep(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Mb(n.__e, e, n, o, i, r, l, _);
    (h = st.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), st.__e(x, e, n);
  }
}
function rp(t, e) {
  st.__c && st.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      st.__e(o, n.__v);
    }
  });
}
function Mb(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && $l.call(t.childNodes), h = (d = n.props || js).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Tb(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, ep(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Jo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Jd(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && zs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && zs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function sp(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    st.__e(o, n);
  }
}
function ip(t, e, n) {
  var o, i;
  if (st.unmount && st.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || sp(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        st.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && ip(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Jd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Lb(t, e, n) {
  return this.constructor(t, n);
}
function Nb(t, e, n) {
  var o, i, r;
  st.__ && st.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Dc(e, t = (!o && n || e).__k = Qd(kl, null, [t]), i || js, js, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? $l.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), rp(r, t);
}
$l = Zd.slice, st = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Kd = 0, $o.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Me({}, this.state), typeof t == "function" && (t = t(Me({}, n), this.props)), t && Me(n, t), t != null && this.__v && (e && this._sb.push(e), H_(this));
}, $o.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), H_(this));
}, $o.prototype.render = kl, wo = [], Vs.__r = 0;
var Db = 0;
function Rt(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Db, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return st.vnode && st.vnode(_), _;
}
var Ys = {}, Rb = {
  get exports() {
    return Ys;
  },
  set exports(t) {
    Ys = t;
  }
};
(function(t, e) {
  (function(n, o) {
    t.exports = o();
  })(uh, function() {
    var n = 1e3, o = 6e4, i = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", s = "week", d = "month", f = "quarter", a = "year", u = "date", b = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(D) {
      var S = ["th", "st", "nd", "rd"], $ = D % 100;
      return "[" + D + (S[($ - 20) % 10] || S[$] || S[0]) + "]";
    } }, w = function(D, S, $) {
      var R = String(D);
      return !R || R.length >= S ? D : "" + Array(S + 1 - R.length).join($) + D;
    }, k = { s: w, z: function(D) {
      var S = -D.utcOffset(), $ = Math.abs(S), R = Math.floor($ / 60), T = $ % 60;
      return (S <= 0 ? "+" : "-") + w(R, 2, "0") + ":" + w(T, 2, "0");
    }, m: function D(S, $) {
      if (S.date() < $.date())
        return -D($, S);
      var R = 12 * ($.year() - S.year()) + ($.month() - S.month()), T = S.clone().add(R, d), O = $ - T < 0, P = S.clone().add(R + (O ? -1 : 1), d);
      return +(-(R + ($ - T) / (O ? T - P : P - T)) || 0);
    }, a: function(D) {
      return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
    }, p: function(D) {
      return { M: d, y: a, w: s, d: h, D: u, h: _, m: c, s: l, ms: r, Q: f }[D] || String(D || "").toLowerCase().replace(/s$/, "");
    }, u: function(D) {
      return D === void 0;
    } }, C = "en", A = {};
    A[C] = g;
    var E = function(D) {
      return D instanceof z;
    }, y = function D(S, $, R) {
      var T;
      if (!S)
        return C;
      if (typeof S == "string") {
        var O = S.toLowerCase();
        A[O] && (T = O), $ && (A[O] = $, T = O);
        var P = S.split("-");
        if (!T && P.length > 1)
          return D(P[0]);
      } else {
        var W = S.name;
        A[W] = S, T = W;
      }
      return !R && T && (C = T), T || !R && C;
    }, x = function(D, S) {
      if (E(D))
        return D.clone();
      var $ = typeof S == "object" ? S : {};
      return $.date = D, $.args = arguments, new z($);
    }, N = k;
    N.l = y, N.i = E, N.w = function(D, S) {
      return x(D, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
    };
    var z = function() {
      function D($) {
        this.$L = y($.locale, null, !0), this.parse($);
      }
      var S = D.prototype;
      return S.parse = function($) {
        this.$d = function(R) {
          var T = R.date, O = R.utc;
          if (T === null)
            return new Date(NaN);
          if (N.u(T))
            return new Date();
          if (T instanceof Date)
            return new Date(T);
          if (typeof T == "string" && !/Z$/i.test(T)) {
            var P = T.match(p);
            if (P) {
              var W = P[2] - 1 || 0, V = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], W, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V)) : new Date(P[1], W, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V);
            }
          }
          return new Date(T);
        }($), this.$x = $.x || {}, this.init();
      }, S.init = function() {
        var $ = this.$d;
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
      }, S.$utils = function() {
        return N;
      }, S.isValid = function() {
        return this.$d.toString() !== b;
      }, S.isSame = function($, R) {
        var T = x($);
        return this.startOf(R) <= T && T <= this.endOf(R);
      }, S.isAfter = function($, R) {
        return x($) < this.startOf(R);
      }, S.isBefore = function($, R) {
        return this.endOf(R) < x($);
      }, S.$g = function($, R, T) {
        return N.u($) ? this[R] : this.set(T, $);
      }, S.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S.valueOf = function() {
        return this.$d.getTime();
      }, S.startOf = function($, R) {
        var T = this, O = !!N.u(R) || R, P = N.p($), W = function(it, G) {
          var lt = N.w(T.$u ? Date.UTC(T.$y, G, it) : new Date(T.$y, G, it), T);
          return O ? lt : lt.endOf(h);
        }, V = function(it, G) {
          return N.w(T.toDate()[it].apply(T.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), T);
        }, j = this.$W, X = this.$M, vt = this.$D, I = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? W(1, 0) : W(31, 11);
          case d:
            return O ? W(1, X) : W(0, X + 1);
          case s:
            var K = this.$locale().weekStart || 0, yt = (j < K ? j + 7 : j) - K;
            return W(O ? vt - yt : vt + (6 - yt), X);
          case h:
          case u:
            return V(I + "Hours", 0);
          case _:
            return V(I + "Minutes", 1);
          case c:
            return V(I + "Seconds", 2);
          case l:
            return V(I + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, S.endOf = function($) {
        return this.startOf($, !1);
      }, S.$set = function($, R) {
        var T, O = N.p($), P = "set" + (this.$u ? "UTC" : ""), W = (T = {}, T[h] = P + "Date", T[u] = P + "Date", T[d] = P + "Month", T[a] = P + "FullYear", T[_] = P + "Hours", T[c] = P + "Minutes", T[l] = P + "Seconds", T[r] = P + "Milliseconds", T)[O], V = O === h ? this.$D + (R - this.$W) : R;
        if (O === d || O === a) {
          var j = this.clone().set(u, 1);
          j.$d[W](V), j.init(), this.$d = j.set(u, Math.min(this.$D, j.daysInMonth())).$d;
        } else
          W && this.$d[W](V);
        return this.init(), this;
      }, S.set = function($, R) {
        return this.clone().$set($, R);
      }, S.get = function($) {
        return this[N.p($)]();
      }, S.add = function($, R) {
        var T, O = this;
        $ = Number($);
        var P = N.p(R), W = function(X) {
          var vt = x(O);
          return N.w(vt.date(vt.date() + Math.round(X * $)), O);
        };
        if (P === d)
          return this.set(d, this.$M + $);
        if (P === a)
          return this.set(a, this.$y + $);
        if (P === h)
          return W(1);
        if (P === s)
          return W(7);
        var V = (T = {}, T[c] = o, T[_] = i, T[l] = n, T)[P] || 1, j = this.$d.getTime() + $ * V;
        return N.w(j, this);
      }, S.subtract = function($, R) {
        return this.add(-1 * $, R);
      }, S.format = function($) {
        var R = this, T = this.$locale();
        if (!this.isValid())
          return T.invalidDate || b;
        var O = $ || "YYYY-MM-DDTHH:mm:ssZ", P = N.z(this), W = this.$H, V = this.$m, j = this.$M, X = T.weekdays, vt = T.months, I = function(G, lt, Ct, Et) {
          return G && (G[lt] || G(R, O)) || Ct[lt].slice(0, Et);
        }, K = function(G) {
          return N.s(W % 12 || 12, G, "0");
        }, yt = T.meridiem || function(G, lt, Ct) {
          var Et = G < 12 ? "AM" : "PM";
          return Ct ? Et.toLowerCase() : Et;
        }, it = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: j + 1, MM: N.s(j + 1, 2, "0"), MMM: I(T.monthsShort, j, vt, 3), MMMM: I(vt, j), D: this.$D, DD: N.s(this.$D, 2, "0"), d: String(this.$W), dd: I(T.weekdaysMin, this.$W, X, 2), ddd: I(T.weekdaysShort, this.$W, X, 3), dddd: X[this.$W], H: String(W), HH: N.s(W, 2, "0"), h: K(1), hh: K(2), a: yt(W, V, !0), A: yt(W, V, !1), m: String(V), mm: N.s(V, 2, "0"), s: String(this.$s), ss: N.s(this.$s, 2, "0"), SSS: N.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(G, lt) {
          return lt || it[G] || P.replace(":", "");
        });
      }, S.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S.diff = function($, R, T) {
        var O, P = N.p(R), W = x($), V = (W.utcOffset() - this.utcOffset()) * o, j = this - W, X = N.m(this, W);
        return X = (O = {}, O[a] = X / 12, O[d] = X, O[f] = X / 3, O[s] = (j - V) / 6048e5, O[h] = (j - V) / 864e5, O[_] = j / i, O[c] = j / o, O[l] = j / n, O)[P] || j, T ? X : N.a(X);
      }, S.daysInMonth = function() {
        return this.endOf(d).$D;
      }, S.$locale = function() {
        return A[this.$L];
      }, S.locale = function($, R) {
        if (!$)
          return this.$L;
        var T = this.clone(), O = y($, R, !0);
        return O && (T.$L = O), T;
      }, S.clone = function() {
        return N.w(this.$d, this);
      }, S.toDate = function() {
        return new Date(this.valueOf());
      }, S.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S.toISOString = function() {
        return this.$d.toISOString();
      }, S.toString = function() {
        return this.$d.toUTCString();
      }, D;
    }(), B = z.prototype;
    return x.prototype = B, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", u]].forEach(function(D) {
      B[D[1]] = function(S) {
        return this.$g(S, D[0], D[1]);
      };
    }), x.extend = function(D, S) {
      return D.$i || (D(S, z, x), D.$i = !0), x;
    }, x.locale = y, x.isDayjs = E, x.unix = function(D) {
      return x(1e3 * D);
    }, x.en = A[C], x.Ls = A, x.p = {}, x;
  });
})(Rb);
const Pb = (t) => {
  const e = Ys(`1989-01-01 ${t || "00:00:00"}`);
  return {
    hour: e.hour(),
    minute: e.minute(),
    second: e.second()
  };
};
function Ob() {
  let t = new Array(24).fill(0), e = new Array(60).fill(0), n = new Array(60).fill(0);
  return t = t.map((o, i) => o + i), e = e.map((o, i) => o + i), n = n.map((o, i) => o + i), { hourList: t, minuteList: e, secondList: n };
}
class Hb extends $o {
  constructor() {
    super(...arguments);
    L(this, "cellHeight", 24);
    L(this, "ref", Ir());
    L(this, "hourRef", Ir());
    L(this, "minuteRef", Ir());
    L(this, "secondRef", Ir());
    L(this, "state", {
      selectTime: this.props.value || "00:00:00"
    });
  }
  handleMoveTime(n) {
    var i, r, l;
    const o = "smooth";
    n.hour && this.hourRef.current && ((i = this.hourRef.current) == null || i.scrollTo({ behavior: o, top: n.hour * this.cellHeight })), n.minute && this.minuteRef.current && ((r = this.minuteRef.current) == null || r.scrollTo({ behavior: o, top: n.minute * this.cellHeight })), n.second && this.secondRef.current && ((l = this.secondRef.current) == null || l.scrollTo({ behavior: o, top: n.second * this.cellHeight }));
  }
  handleChange(n) {
    this.handleMoveTime(n), this.setState({ selectTime: this.getTimeString(n) });
  }
  getTimeString(n) {
    return this.props.showSeconds ? `${(n == null ? void 0 : n.hour) && this.addZero(n.hour) || "00"}:${(n == null ? void 0 : n.minute) && this.addZero(n.minute) || "00"}:${(n == null ? void 0 : n.second) && this.addZero(n.second) || "00"}` : `${(n == null ? void 0 : n.hour) && this.addZero(n.hour) || "00"}:${(n == null ? void 0 : n.minute) && this.addZero(n.minute) || "00"}`;
  }
  addZero(n) {
    return n < 10 ? `0${n}` : n;
  }
  renderColumn(n, o) {
    const i = Pb(this.state.selectTime);
    return o.map((r) => {
      const l = i[n] === r, c = { ...i, [n]: r };
      return /* @__PURE__ */ Rt(
        "button",
        {
          className: F("btn", "size-sm", "ghost", "flex", { active: l }),
          type: "button",
          onClick: () => this.handleChange(c),
          children: this.addZero(r)
        },
        `unit-${n}-${r}`
      );
    });
  }
  onSubmit() {
    console.log(this.state.selectTime), this.props.onChange && this.props.onChange(this.state.selectTime);
  }
  onClear() {
    this.setState({ selectTime: "" }), this.props.onChange && this.props.onChange("");
  }
  render() {
    const { showSeconds: n, style: o } = this.props, { hourList: i, minuteList: r, secondList: l } = Ob();
    return /* @__PURE__ */ Rt("div", { className: F("timepicker-timepanel", "pt-px"), style: o, ref: this.ref, children: [
      /* @__PURE__ */ Rt("div", { className: F("flex", " justify-around", "p-px", "not-hide-timepicker"), children: [
        /* @__PURE__ */ Rt("div", { className: "overflow-hidden", children: /* @__PURE__ */ Rt("div", { className: "timepicker-timepanel-select-col", ref: this.hourRef, children: this.renderColumn("hour", i) }) }),
        /* @__PURE__ */ Rt("div", { className: "overflow-hidden", children: /* @__PURE__ */ Rt("div", { className: "timepicker-timepanel-select-col", ref: this.minuteRef, children: this.renderColumn("minute", r) }) }),
        n && /* @__PURE__ */ Rt("div", { className: "overflow-hidden", children: /* @__PURE__ */ Rt("div", { className: "timepicker-timepanel-select-col", ref: this.secondRef, children: this.renderColumn("second", l) }) })
      ] }),
      /* @__PURE__ */ Rt("div", { className: F("timepicker-timepanel-actions", "flex", "p-px", "justify-between", "align-center"), children: [
        /* @__PURE__ */ Rt("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onClear.bind(this), children: "清除" }),
        /* @__PURE__ */ Rt("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onSubmit.bind(this), children: "确认" })
      ] })
    ] });
  }
}
function Dr(t) {
  return t.split("-")[1];
}
function Rc(t) {
  return t === "y" ? "height" : "width";
}
function Wn(t) {
  return t.split("-")[0];
}
function xl(t) {
  return ["top", "bottom"].includes(Wn(t)) ? "x" : "y";
}
function F_(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = xl(e), _ = Rc(c), h = o[_] / 2 - i[_] / 2, s = Wn(e), d = c === "x";
  let f;
  switch (s) {
    case "top":
      f = {
        x: r,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      f = {
        x: o.x - i.width,
        y: l
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (Dr(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const Wb = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let h = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: s,
    y: d
  } = F_(h, o, _), f = o, a = {}, u = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: p,
      fn: m
    } = c[b], {
      x: g,
      y: w,
      data: k,
      reset: C
    } = await m({
      x: s,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: i,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (s = g ?? s, d = w ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...k
      }
    }, C && u <= 50) {
      u++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (h = C.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : C.rects), {
        x: s,
        y: d
      } = F_(h, f, _)), b = -1;
      continue;
    }
  }
  return {
    x: s,
    y: d,
    placement: f,
    strategy: i,
    middlewareData: a
  };
};
function Ib(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function lp(t) {
  return typeof t != "number" ? Ib(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Gs(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Ub(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = t, {
    boundary: h = "clippingAncestors",
    rootBoundary: s = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = e, u = lp(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = Gs(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Gs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - C.top + u.top) / k.y,
    bottom: (C.bottom - m.bottom + u.bottom) / k.y,
    left: (m.left - C.left + u.left) / k.x,
    right: (C.right - m.right + u.right) / k.x
  };
}
const Fb = Math.min, Bb = Math.max;
function jb(t, e, n) {
  return Bb(t, Fb(e, n));
}
const Vb = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t || {}, {
      x: i,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = e;
    if (n == null)
      return {};
    const h = lp(o), s = {
      x: i,
      y: r
    }, d = xl(l), f = Rc(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], E = w / 2 - a[f] / 2 + k, y = jb(C, E, A), N = Dr(l) != null && E != y && c.reference[f] / 2 - (E < C ? h[u] : h[b]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - N,
      data: {
        [d]: y,
        centerOffset: E - y
      }
    };
  }
}), zb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function qs(t) {
  return t.replace(/left|right|bottom|top/g, (e) => zb[e]);
}
function Yb(t, e, n) {
  n === void 0 && (n = !1);
  const o = Dr(t), i = xl(t), r = Rc(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = qs(l)), {
    main: l,
    cross: qs(l)
  };
}
const Gb = {
  start: "end",
  end: "start"
};
function oc(t) {
  return t.replace(/start|end/g, (e) => Gb[e]);
}
function qb(t) {
  const e = qs(t);
  return [oc(t), e, oc(e)];
}
function Xb(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function Kb(t, e, n, o) {
  const i = Dr(t);
  let r = Xb(Wn(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(oc)))), r;
}
const Zb = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        middlewareData: i,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = e, {
        mainAxis: h = !0,
        crossAxis: s = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...b
      } = t, p = Wn(o), m = Wn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [qs(l)] : qb(l));
      !d && a !== "none" && w.push(...Kb(l, u, a, g));
      const k = [l, ...w], C = await Ub(e, b), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: N,
          cross: z
        } = Yb(o, r, g);
        A.push(C[N], C[z]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((N) => N <= 0)) {
        var y;
        const N = (((y = i.flip) == null ? void 0 : y.index) || 0) + 1, z = k[N];
        if (z)
          return {
            data: {
              index: N,
              overflows: E
            },
            reset: {
              placement: z
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const D = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, R) => $ + R, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
            D && (B = D);
            break;
          }
          case "initialPlacement":
            B = l;
            break;
        }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
async function Jb(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Wn(n), c = Dr(n), _ = xl(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: f,
    crossAxis: a,
    alignmentAxis: u
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof u == "number" && (a = c === "end" ? u * -1 : u), _ ? {
    x: a * s,
    y: f * h
  } : {
    x: f * h,
    y: a * s
  };
}
const Qb = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await Jb(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
function Wt(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Qt(t) {
  return Wt(t).getComputedStyle(t);
}
function Fe(t) {
  return ap(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Ur;
function cp() {
  if (Ur)
    return Ur;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Ur = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Ur) : navigator.userAgent;
}
function ae(t) {
  return t instanceof Wt(t).HTMLElement;
}
function Be(t) {
  return t instanceof Wt(t).Element;
}
function ap(t) {
  return t instanceof Wt(t).Node;
}
function B_(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Wt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Sl(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = Qt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function t0(t) {
  return ["table", "td", "th"].includes(Fe(t));
}
function Pc(t) {
  const e = /firefox/i.test(cp()), n = Qt(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function _p() {
  return !/^((?!chrome|android).)*safari/i.test(cp());
}
function Oc(t) {
  return ["html", "body", "#document"].includes(Fe(t));
}
const j_ = Math.min, ko = Math.max, Xs = Math.round;
function fp(t) {
  const e = Qt(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = Xs(n) !== i || Xs(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function up(t) {
  return Be(t) ? t : t.contextElement;
}
const hp = {
  x: 1,
  y: 1
};
function an(t) {
  const e = up(t);
  if (!ae(e))
    return hp;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = fp(e);
  let l = (r ? Xs(n.width) : n.width) / o, c = (r ? Xs(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function Qo(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = up(t);
  let _ = hp;
  e && (o ? Be(o) && (_ = an(o)) : _ = an(t));
  const h = c ? Wt(c) : window, s = !_p() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = Wt(c), p = o && Be(o) ? Wt(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = an(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = Wt(m).frameElement;
    }
  }
  return {
    width: a,
    height: u,
    top: f,
    right: d + a,
    bottom: f + u,
    left: d,
    x: d,
    y: f
  };
}
function Ge(t) {
  return ((ap(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Cl(t) {
  return Be(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function dp(t) {
  return Qo(Ge(t)).left + Cl(t).scrollLeft;
}
function e0(t, e, n) {
  const o = ae(e), i = Ge(e), r = Qo(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Fe(e) !== "body" || Sl(i)) && (l = Cl(e)), ae(e)) {
      const _ = Qo(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = dp(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function tr(t) {
  if (Fe(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (B_(t) ? t.host : null) || // Fallback
    Ge(t)
  );
  return B_(e) ? e.host : e;
}
function V_(t) {
  return !ae(t) || Qt(t).position === "fixed" ? null : t.offsetParent;
}
function n0(t) {
  let e = tr(t);
  for (; ae(e) && !Oc(e); ) {
    if (Pc(e))
      return e;
    e = tr(e);
  }
  return null;
}
function z_(t) {
  const e = Wt(t);
  let n = V_(t);
  for (; n && t0(n) && Qt(n).position === "static"; )
    n = V_(n);
  return n && (Fe(n) === "html" || Fe(n) === "body" && Qt(n).position === "static" && !Pc(n)) ? e : n || n0(t) || e;
}
function o0(t) {
  return fp(t);
}
function r0(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = ae(n), r = Ge(n);
  if (n === r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 1,
    y: 1
  };
  const _ = {
    x: 0,
    y: 0
  };
  if ((i || !i && o !== "fixed") && ((Fe(n) !== "body" || Sl(r)) && (l = Cl(n)), ae(n))) {
    const h = Qo(n);
    c = an(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function s0(t, e) {
  const n = Wt(t), o = Ge(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = _p();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function i0(t) {
  var e;
  const n = Ge(t), o = Cl(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = ko(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = ko(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + dp(t);
  const _ = -o.scrollTop;
  return Qt(i || n).direction === "rtl" && (c += ko(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function pp(t) {
  const e = tr(t);
  return Oc(e) ? t.ownerDocument.body : ae(e) && Sl(e) ? e : pp(e);
}
function mp(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = pp(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Wt(o);
  return i ? e.concat(r, r.visualViewport || [], Sl(o) ? o : []) : e.concat(o, mp(o));
}
function l0(t, e) {
  const n = Qo(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = ae(t) ? an(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * r.x, c = t.clientHeight * r.y, _ = i * r.x, h = o * r.y;
  return {
    top: h,
    left: _,
    right: _ + l,
    bottom: h + c,
    x: _,
    y: h,
    width: l,
    height: c
  };
}
function Y_(t, e, n) {
  return e === "viewport" ? Gs(s0(t, n)) : Be(e) ? l0(e, n) : Gs(i0(Ge(t)));
}
function c0(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = mp(t).filter((c) => Be(c) && Fe(c) !== "body"), i = null;
  const r = Qt(t).position === "fixed";
  let l = r ? tr(t) : t;
  for (; Be(l) && !Oc(l); ) {
    const c = Qt(l), _ = Pc(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = tr(l);
  }
  return e.set(t, o), o;
}
function a0(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? c0(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = Y_(e, s, i);
    return h.top = ko(d.top, h.top), h.right = j_(d.right, h.right), h.bottom = j_(d.bottom, h.bottom), h.left = ko(d.left, h.left), h;
  }, Y_(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const _0 = {
  getClippingRect: a0,
  convertOffsetParentRelativeRectToViewportRelativeRect: r0,
  isElement: Be,
  getDimensions: o0,
  getOffsetParent: z_,
  getDocumentElement: Ge,
  getScale: an,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || z_, r = this.getDimensions;
    return {
      reference: e0(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => Qt(t).direction === "rtl"
}, f0 = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: _0,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return Wb(t, e, {
    ...i,
    platform: r
  });
};
var Cn, En, Je, xr, wt, Di, gp, Ri, yp, Pi, vp, Oi, bp, Hi, wp, Wi, $p, Ii;
class qt extends Ut {
  constructor() {
    super(...arguments);
    M(this, Di);
    M(this, Ri);
    M(this, Pi);
    M(this, Oi);
    M(this, Hi);
    M(this, Wi);
    M(this, Cn, void 0);
    M(this, En, 0);
    M(this, Je, void 0);
    M(this, xr, void 0);
    M(this, wt, void 0);
    L(this, "hideLater", () => {
      v(this, Ii).call(this), H(this, En, window.setTimeout(this.hide.bind(this), 100));
    });
    M(this, Ii, () => {
      clearTimeout(v(this, En)), H(this, En, 0);
    });
  }
  get isShown() {
    var n;
    return (n = v(this, Je)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get timepicker() {
    return v(this, Je) || U(this, Pi, vp).call(this);
  }
  get trigger() {
    return v(this, xr) || this.element;
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n) {
    return H(this, xr, n), !this.timepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.timepicker.classList.add(this.constructor.CLASS_SHOW), U(this, Hi, wp).call(this), !0);
  }
  hide() {
    var n;
    return this.element.classList.remove(this.elementShowClass), (n = v(this, Je)) == null || n.classList.remove(this.constructor.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  static show(n) {
    var l;
    const { event: o, ...i } = n, r = this.ensure(document.body);
    return Object.keys(i).length && r.setOptions(i), r.show(o), (l = o == null ? void 0 : o.stopPropagation) == null || l.call(o), r;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-timepicker" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)))
      return;
    const l = this.getAll().entries(), c = new Set(i || []);
    for (const [s, d] of l)
      c.has(s) || d.hide();
  }
}
Cn = new WeakMap(), En = new WeakMap(), Je = new WeakMap(), xr = new WeakMap(), wt = new WeakMap(), Di = new WeakSet(), gp = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 4;
}, Ri = new WeakSet(), yp = function() {
  const n = document.createElement("div");
  return H(this, wt, n), v(this, wt).style.position = "absolute", v(this, wt).style.width = "8px", v(this, wt).style.height = "8px", v(this, wt).style.transform = "rotate(45deg)", v(this, wt).style.background = "inherit", v(this, wt).style.border = "inherit", v(this, wt).style.borderBottomStyle = "none", v(this, wt).style.borderRightStyle = "none", n;
}, Pi = new WeakSet(), vp = function() {
  const n = this.constructor.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), Nb(Qd(Hb, { ...this.options }), o), this.options.arrow && o.append(U(this, Ri, yp).call(this)), o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, Je, o), o;
}, Oi = new WeakSet(), bp = function() {
  var i;
  const n = U(this, Di, gp).call(this), o = {
    middleware: [Qb(n + 3), Zb()]
  };
  return this.options.arrow && v(this, wt) && ((i = o.middleware) == null || i.push(Vb({ element: v(this, wt) }))), this.options.placement && (o.placement = this.options.placement), o;
}, Hi = new WeakSet(), wp = function() {
  const n = U(this, Oi, bp).call(this);
  f0(U(this, Wi, $p).call(this), this.timepicker, n).then(({ x: o, y: i, middlewareData: r }) => {
    if (Object.assign(this.timepicker.style, {
      left: `${o}px`,
      top: `${i}px`
    }), this.options.placement) {
      const l = this.options.placement.split("-")[0], c = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
      }[l];
      if (r.arrow && v(this, wt)) {
        const { x: _, y: h } = r.arrow;
        Object.assign(v(this, wt).style, {
          left: _ != null ? `${_}px` : "",
          top: h != null ? `${h}px` : "",
          [c]: `${-v(this, wt).offsetWidth / 2}px`
        });
      }
    }
  });
}, Wi = new WeakSet(), $p = function() {
  return v(this, Cn) || H(this, Cn, {
    getBoundingClientRect: () => {
      const { element: n } = this;
      if (n instanceof MouseEvent) {
        const { clientX: o, clientY: i } = n;
        return {
          width: 0,
          height: 0,
          top: i,
          right: o,
          bottom: i,
          left: o
        };
      }
      return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
    },
    contextElement: this.element
  }), v(this, Cn);
}, Ii = new WeakMap(), L(qt, "NAME", "timepicker"), L(qt, "CLASSNAME", "timepicker"), L(qt, "CLASS_SHOW", "show"), L(qt, "MENU_SELECTOR", ".form-time input:not(.disabled):not(:disabled)"), L(qt, "DEFAULT", {
  value: Ys().format("HH:mm:ss"),
  showSeconds: !1,
  placement: "bottom-start",
  strategy: "absolute",
  // trigger: 'click',
  arrow: !0
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(qt.MENU_SELECTOR);
  n ? qt.ensure(n).toggle() : qt.clear({ event: t });
});
const u0 = (t) => {
  const e = document.getElementsByClassName("with-timepicker-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(qt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || qt.clear({ event: t });
};
window.addEventListener("scroll", u0, !0);
class G_ extends Dt {
}
L(G_, "NAME", "toolbar"), L(G_, "Component", Xo);
function Rr(t) {
  return t.split("-")[1];
}
function Hc(t) {
  return t === "y" ? "height" : "width";
}
function In(t) {
  return t.split("-")[0];
}
function El(t) {
  return ["top", "bottom"].includes(In(t)) ? "x" : "y";
}
function q_(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = El(e), _ = Hc(c), h = o[_] / 2 - i[_] / 2, s = In(e), d = c === "x";
  let f;
  switch (s) {
    case "top":
      f = {
        x: r,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      f = {
        x: o.x - i.width,
        y: l
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (Rr(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const h0 = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let h = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: s,
    y: d
  } = q_(h, o, _), f = o, a = {}, u = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: p,
      fn: m
    } = c[b], {
      x: g,
      y: w,
      data: k,
      reset: C
    } = await m({
      x: s,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: i,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (s = g ?? s, d = w ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...k
      }
    }, C && u <= 50) {
      u++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (h = C.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : C.rects), {
        x: s,
        y: d
      } = q_(h, f, _)), b = -1;
      continue;
    }
  }
  return {
    x: s,
    y: d,
    placement: f,
    strategy: i,
    middlewareData: a
  };
};
function d0(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function kp(t) {
  return typeof t != "number" ? d0(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Ks(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function p0(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = t, {
    boundary: h = "clippingAncestors",
    rootBoundary: s = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = e, u = kp(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = Ks(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Ks(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - C.top + u.top) / k.y,
    bottom: (C.bottom - m.bottom + u.bottom) / k.y,
    left: (m.left - C.left + u.left) / k.x,
    right: (C.right - m.right + u.right) / k.x
  };
}
const m0 = Math.min, g0 = Math.max;
function y0(t, e, n) {
  return g0(t, m0(e, n));
}
const v0 = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t || {}, {
      x: i,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = e;
    if (n == null)
      return {};
    const h = kp(o), s = {
      x: i,
      y: r
    }, d = El(l), f = Hc(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], E = w / 2 - a[f] / 2 + k, y = y0(C, E, A), N = Rr(l) != null && E != y && c.reference[f] / 2 - (E < C ? h[u] : h[b]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - N,
      data: {
        [d]: y,
        centerOffset: E - y
      }
    };
  }
}), b0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Zs(t) {
  return t.replace(/left|right|bottom|top/g, (e) => b0[e]);
}
function w0(t, e, n) {
  n === void 0 && (n = !1);
  const o = Rr(t), i = El(t), r = Hc(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Zs(l)), {
    main: l,
    cross: Zs(l)
  };
}
const $0 = {
  start: "end",
  end: "start"
};
function rc(t) {
  return t.replace(/start|end/g, (e) => $0[e]);
}
function k0(t) {
  const e = Zs(t);
  return [rc(t), e, rc(e)];
}
function x0(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function S0(t, e, n, o) {
  const i = Rr(t);
  let r = x0(In(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(rc)))), r;
}
const C0 = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        middlewareData: i,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = e, {
        mainAxis: h = !0,
        crossAxis: s = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...b
      } = t, p = In(o), m = In(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [Zs(l)] : k0(l));
      !d && a !== "none" && w.push(...S0(l, u, a, g));
      const k = [l, ...w], C = await p0(e, b), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: N,
          cross: z
        } = w0(o, r, g);
        A.push(C[N], C[z]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((N) => N <= 0)) {
        var y;
        const N = (((y = i.flip) == null ? void 0 : y.index) || 0) + 1, z = k[N];
        if (z)
          return {
            data: {
              index: N,
              overflows: E
            },
            reset: {
              placement: z
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const D = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, R) => $ + R, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
            D && (B = D);
            break;
          }
          case "initialPlacement":
            B = l;
            break;
        }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
async function E0(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = In(n), c = Rr(n), _ = El(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: f,
    crossAxis: a,
    alignmentAxis: u
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof u == "number" && (a = c === "end" ? u * -1 : u), _ ? {
    x: a * s,
    y: f * h
  } : {
    x: f * h,
    y: a * s
  };
}
const A0 = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await E0(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
function It(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function te(t) {
  return It(t).getComputedStyle(t);
}
function je(t) {
  return Sp(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Fr;
function xp() {
  if (Fr)
    return Fr;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Fr = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Fr) : navigator.userAgent;
}
function _e(t) {
  return t instanceof It(t).HTMLElement;
}
function Ve(t) {
  return t instanceof It(t).Element;
}
function Sp(t) {
  return t instanceof It(t).Node;
}
function X_(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = It(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Al(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = te(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function T0(t) {
  return ["table", "td", "th"].includes(je(t));
}
function Wc(t) {
  const e = /firefox/i.test(xp()), n = te(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function Cp() {
  return !/^((?!chrome|android).)*safari/i.test(xp());
}
function Ic(t) {
  return ["html", "body", "#document"].includes(je(t));
}
const K_ = Math.min, xo = Math.max, Js = Math.round;
function Ep(t) {
  const e = te(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = Js(n) !== i || Js(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Ap(t) {
  return Ve(t) ? t : t.contextElement;
}
const Tp = {
  x: 1,
  y: 1
};
function _n(t) {
  const e = Ap(t);
  if (!_e(e))
    return Tp;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = Ep(e);
  let l = (r ? Js(n.width) : n.width) / o, c = (r ? Js(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function er(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = Ap(t);
  let _ = Tp;
  e && (o ? Ve(o) && (_ = _n(o)) : _ = _n(t));
  const h = c ? It(c) : window, s = !Cp() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = It(c), p = o && Ve(o) ? It(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = _n(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = It(m).frameElement;
    }
  }
  return {
    width: a,
    height: u,
    top: f,
    right: d + a,
    bottom: f + u,
    left: d,
    x: d,
    y: f
  };
}
function qe(t) {
  return ((Sp(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Tl(t) {
  return Ve(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Mp(t) {
  return er(qe(t)).left + Tl(t).scrollLeft;
}
function M0(t, e, n) {
  const o = _e(e), i = qe(e), r = er(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((je(e) !== "body" || Al(i)) && (l = Tl(e)), _e(e)) {
      const _ = er(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = Mp(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function nr(t) {
  if (je(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (X_(t) ? t.host : null) || // Fallback
    qe(t)
  );
  return X_(e) ? e.host : e;
}
function Z_(t) {
  return !_e(t) || te(t).position === "fixed" ? null : t.offsetParent;
}
function L0(t) {
  let e = nr(t);
  for (; _e(e) && !Ic(e); ) {
    if (Wc(e))
      return e;
    e = nr(e);
  }
  return null;
}
function J_(t) {
  const e = It(t);
  let n = Z_(t);
  for (; n && T0(n) && te(n).position === "static"; )
    n = Z_(n);
  return n && (je(n) === "html" || je(n) === "body" && te(n).position === "static" && !Wc(n)) ? e : n || L0(t) || e;
}
function N0(t) {
  return Ep(t);
}
function D0(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = _e(n), r = qe(n);
  if (n === r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 1,
    y: 1
  };
  const _ = {
    x: 0,
    y: 0
  };
  if ((i || !i && o !== "fixed") && ((je(n) !== "body" || Al(r)) && (l = Tl(n)), _e(n))) {
    const h = er(n);
    c = _n(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function R0(t, e) {
  const n = It(t), o = qe(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = Cp();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function P0(t) {
  var e;
  const n = qe(t), o = Tl(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = xo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = xo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + Mp(t);
  const _ = -o.scrollTop;
  return te(i || n).direction === "rtl" && (c += xo(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Lp(t) {
  const e = nr(t);
  return Ic(e) ? t.ownerDocument.body : _e(e) && Al(e) ? e : Lp(e);
}
function Np(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Lp(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = It(o);
  return i ? e.concat(r, r.visualViewport || [], Al(o) ? o : []) : e.concat(o, Np(o));
}
function O0(t, e) {
  const n = er(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = _e(t) ? _n(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * r.x, c = t.clientHeight * r.y, _ = i * r.x, h = o * r.y;
  return {
    top: h,
    left: _,
    right: _ + l,
    bottom: h + c,
    x: _,
    y: h,
    width: l,
    height: c
  };
}
function Q_(t, e, n) {
  return e === "viewport" ? Ks(R0(t, n)) : Ve(e) ? O0(e, n) : Ks(P0(qe(t)));
}
function H0(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Np(t).filter((c) => Ve(c) && je(c) !== "body"), i = null;
  const r = te(t).position === "fixed";
  let l = r ? nr(t) : t;
  for (; Ve(l) && !Ic(l); ) {
    const c = te(l), _ = Wc(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = nr(l);
  }
  return e.set(t, o), o;
}
function W0(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? H0(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = Q_(e, s, i);
    return h.top = xo(d.top, h.top), h.right = K_(d.right, h.right), h.bottom = K_(d.bottom, h.bottom), h.left = xo(d.left, h.left), h;
  }, Q_(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const I0 = {
  getClippingRect: W0,
  convertOffsetParentRelativeRectToViewportRelativeRect: D0,
  isElement: Ve,
  getDimensions: N0,
  getOffsetParent: J_,
  getDocumentElement: qe,
  getScale: _n,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || J_, r = this.getDimensions;
    return {
      reference: M0(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => te(t).direction === "rtl"
}, U0 = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: I0,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return h0(t, e, {
    ...i,
    platform: r
  });
};
var An, Tn, Mn, Qe, $t, Ui, Fi, Dp, Bi, Rp, ji, Pp, Vi, Op, zi, Hp, Yi, Wp, Ln, Gi, Ip;
class Xt extends Ut {
  constructor() {
    super(...arguments);
    M(this, Fi);
    M(this, Bi);
    M(this, ji);
    M(this, Vi);
    M(this, zi);
    M(this, Yi);
    M(this, Gi);
    M(this, An, !1);
    M(this, Tn, void 0);
    M(this, Mn, 0);
    M(this, Qe, void 0);
    M(this, $t, void 0);
    M(this, Ui, void 0);
    L(this, "hideLater", () => {
      v(this, Ln).call(this), H(this, Mn, window.setTimeout(this.hide.bind(this), 100));
    });
    M(this, Ln, () => {
      clearTimeout(v(this, Mn)), H(this, Mn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = v(this, Qe)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get tooltip() {
    return v(this, Qe) || U(this, ji, Pp).call(this);
  }
  get trigger() {
    return v(this, Ui) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tooltip");
  }
  show(n) {
    return this.setOptions(n), !v(this, An) && this.isHover && U(this, Gi, Ip).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(this.constructor.CLASS_SHOW), U(this, zi, Hp).call(this), !0;
  }
  hide() {
    var n;
    return this.element.classList.remove(this.elementShowClass), (n = v(this, Qe)) == null || n.classList.remove(this.constructor.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    v(this, An) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", v(this, Ln)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: o } = n || {}, i = this.getAll().entries(), r = new Set(o || []);
    for (const [l, c] of i)
      r.has(l) || c.hide();
  }
}
An = new WeakMap(), Tn = new WeakMap(), Mn = new WeakMap(), Qe = new WeakMap(), $t = new WeakMap(), Ui = new WeakMap(), Fi = new WeakSet(), Dp = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 4;
}, Bi = new WeakSet(), Rp = function() {
  const n = document.createElement("div");
  return H(this, $t, n), v(this, $t).style.position = "absolute", v(this, $t).style.width = "8px", v(this, $t).style.height = "8px", this.options.className && (v(this, $t).className = this.options.className), this.options.type && v(this, $t).classList.add(this.options.type), v(this, $t).style.transform = "rotate(45deg)", v(this, $t).style.borderTopStyle = "none", v(this, $t).style.borderLeftStyle = "none", n;
}, ji = new WeakSet(), Pp = function() {
  var i;
  const n = this.constructor.TOOLTIP_CLASS;
  let o;
  if (this.isDynamic) {
    o = document.createElement("div");
    const r = this.options.className ? this.options.className.split(" ") : [];
    let l = [n, this.options.type || ""];
    l = l.concat(r), o.classList.add(...l), o[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "";
  } else if (this.element) {
    const r = this.element.getAttribute("href") ?? this.element.dataset.target;
    if (r != null && r.startsWith("#") && (o = document.querySelector(r)), !o) {
      const l = this.element.nextElementSibling;
      l != null && l.classList.contains(n) ? o = l : o = (i = this.element.parentNode) == null ? void 0 : i.querySelector(`.${n}`);
    }
  }
  if (this.options.arrow && (o == null || o.append(U(this, Bi, Rp).call(this))), !o)
    throw new Error("Tooltip: Cannot find tooltip element");
  return o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, Qe, o), o;
}, Vi = new WeakSet(), Op = function() {
  var i;
  const n = U(this, Fi, Dp).call(this), o = {
    middleware: [A0(n + 3), C0()]
  };
  return this.options.arrow && v(this, $t) && ((i = o.middleware) == null || i.push(v0({ element: v(this, $t) }))), this.options.placement && (o.placement = this.options.placement), o;
}, zi = new WeakSet(), Hp = function() {
  const n = U(this, Vi, Op).call(this);
  U0(U(this, Yi, Wp).call(this), this.tooltip, n).then(({ x: o, y: i, middlewareData: r }) => {
    if (Object.assign(this.tooltip.style, {
      left: `${o}px`,
      top: `${i}px`
    }), this.options.placement) {
      const l = this.options.placement.split("-")[0], c = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
      }[l];
      if (r.arrow && v(this, $t)) {
        const { x: _, y: h } = r.arrow;
        Object.assign(v(this, $t).style, {
          left: _ != null ? `${_}px` : "",
          top: h != null ? `${h}px` : "",
          [c]: `${-v(this, $t).offsetWidth / 2}px`
        });
      }
    }
  });
}, Yi = new WeakSet(), Wp = function() {
  return v(this, Tn) || H(this, Tn, {
    getBoundingClientRect: () => {
      const { element: n } = this;
      if (n instanceof MouseEvent) {
        const { clientX: o, clientY: i } = n;
        return {
          width: 0,
          height: 0,
          top: i,
          right: o,
          bottom: i,
          left: o
        };
      }
      return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
    },
    contextElement: this.element
  }), v(this, Tn);
}, Ln = new WeakMap(), Gi = new WeakSet(), Ip = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", v(this, Ln)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, An, !0);
}, L(Xt, "NAME", "tooltip"), L(Xt, "TOOLTIP_CLASS", "tooltip"), L(Xt, "CLASS_SHOW", "show"), L(Xt, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), L(Xt, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Xt.MENU_SELECTOR);
  if (n) {
    const o = Xt.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    Xt.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  const e = t.target, n = typeof e.closest == "function" ? e.closest(Xt.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = Xt.ensure(n);
  o.isHover && o.show();
});
var Up, pt, Fp, So, tf, Bp = {}, jp = [], F0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Le(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Vp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Hl(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Fp };
  return i == null && pt.vnode != null && pt.vnode(r), r;
}
function Uc(t) {
  return t.children;
}
function Co(t, e) {
  this.props = t, this.context = e;
}
function or(t, e) {
  if (e == null)
    return t.__ ? or(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? or(t) : null;
}
function zp(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return zp(t);
  }
}
function ef(t) {
  (!t.__d && (t.__d = !0) && So.push(t) && !Qs.__r++ || tf !== pt.debounceRendering) && ((tf = pt.debounceRendering) || setTimeout)(Qs);
}
function Qs() {
  for (var t; Qs.__r = So.length; )
    t = So.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), So = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Le({}, r)).__v = r.__v + 1, Xp(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? or(r), r.__h), j0(o, r), r.__e != l && zp(r)));
    });
}
function Yp(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || jp, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Hl(null, a, null, null, a) : Array.isArray(a) ? Hl(Uc, { children: a }, null, null, null) : a.__b > 0 ? Hl(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Xp(t, a, f = f || Bp, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Gp(a, _, t) : _ = qp(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = or(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Zp(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Kp(p[s], p[++s], p[++s]);
}
function Gp(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Gp(o, e, n) : qp(n, o, o, i, o.__e, e));
  return e;
}
function qp(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function B0(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ti(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ti(t, r, e[r], n[r], o);
}
function nf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || F0.test(e) ? n : n + "px";
}
function ti(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || nf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || nf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? rf : of, r) : t.removeEventListener(e, r ? rf : of, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function of(t) {
  this.l[t.type + !1](pt.event ? pt.event(t) : t);
}
function rf(t) {
  this.l[t.type + !0](pt.event ? pt.event(t) : t);
}
function Xp(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = pt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Co(p, g), s.constructor = y, s.render = z0), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Le({}, s.__s)), Le(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = pt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Le(Le({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Uc && h.key == null ? h.props.children : h, Yp(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = V0(n.__e, e, n, o, i, r, l, _);
    (h = pt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), pt.__e(x, e, n);
  }
}
function j0(t, e) {
  pt.__c && pt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      pt.__e(o, n.__v);
    }
  });
}
function V0(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Up.call(t.childNodes), h = (d = n.props || Bp).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (B0(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Yp(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && or(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Vp(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && ti(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && ti(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Kp(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    pt.__e(o, n);
  }
}
function Zp(t, e, n) {
  var o, i;
  if (pt.unmount && pt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Kp(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        pt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Zp(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Vp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function z0(t, e, n) {
  return this.constructor(t, n);
}
Up = jp.slice, pt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Fp = 0, Co.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Le({}, this.state), typeof t == "function" && (t = t(Le({}, n), this.props)), t && Le(n, t), t != null && this.__v && (e && this._sb.push(e), ef(this));
}, Co.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ef(this));
}, Co.prototype.render = Uc, So = [], Qs.__r = 0;
var Y0 = 0;
function ei(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Y0, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return pt.vnode && pt.vnode(_), _;
}
function G0({
  type: t,
  key: e,
  style: n,
  bounding: o,
  offsetX: i = 0,
  offsetY: r = 0,
  component: l,
  data: c,
  hidden: _,
  props: h,
  children: s,
  onRender: d,
  ...f
}) {
  if (_)
    return null;
  let a;
  d ? a = d(t, c) : l ? a = /* @__PURE__ */ ei(l, { ...h }) : a = c;
  const { left: u, top: b, width: p, height: m } = o;
  return /* @__PURE__ */ ei("div", { style: { width: p, height: m, left: u + i, top: b + r, ...n }, ...f, children: [
    a,
    s
  ] });
}
function q0(t, e, n = 0, o = 0) {
  const i = t.left + n, r = t.top + o;
  return !(i > e.left + e.width || r > e.top + e.height || i + t.width < e.left || r + t.height < e.top);
}
let X0 = class extends Co {
  render() {
    const { width: e, height: n, cells: o, left: i, top: r, visibleBounding: l, onRenderCell: c, style: _, children: h, offsetX: s = 0, offsetY: d = 0, ...f } = this.props, a = l ? o.filter((u) => q0(u.bounding, l, s, d)) : o;
    return /* @__PURE__ */ ei("div", { style: { width: e, height: n, left: i, top: r, ..._ }, ...f, children: [
      a.map((u) => /* @__PURE__ */ ei(G0, { offsetX: s, offsetY: d, ...u })),
      h
    ] });
  }
};
class sf extends Dt {
}
L(sf, "NAME", "virtualgrid"), L(sf, "Component", X0);
var Fc, mt, Jp, Qp, Eo, lf, tm = {}, em = [], K0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ne(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function nm(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Bc(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Fc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ss(t, l, o, i, null);
}
function ss(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Jp };
  return i == null && mt.vnode != null && mt.vnode(r), r;
}
function Z0() {
  return { current: null };
}
function jc(t) {
  return t.children;
}
function Ao(t, e) {
  this.props = t, this.context = e;
}
function rr(t, e) {
  if (e == null)
    return t.__ ? rr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? rr(t) : null;
}
function om(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return om(t);
  }
}
function cf(t) {
  (!t.__d && (t.__d = !0) && Eo.push(t) && !ni.__r++ || lf !== mt.debounceRendering) && ((lf = mt.debounceRendering) || setTimeout)(ni);
}
function ni() {
  for (var t; ni.__r = Eo.length; )
    t = Eo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Eo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ne({}, r)).__v = r.__v + 1, lm(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? rr(r), r.__h), Q0(o, r), r.__e != l && om(r)));
    });
}
function rm(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || em, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ss(null, a, null, null, a) : Array.isArray(a) ? ss(jc, { children: a }, null, null, null) : a.__b > 0 ? ss(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      lm(t, a, f = f || tm, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = sm(a, _, t) : _ = im(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = rr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && am(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      cm(p[s], p[++s], p[++s]);
}
function sm(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? sm(o, e, n) : im(n, o, o, i, o.__e, e));
  return e;
}
function im(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function J0(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || oi(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || oi(t, r, e[r], n[r], o);
}
function af(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || K0.test(e) ? n : n + "px";
}
function oi(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || af(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || af(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? ff : _f, r) : t.removeEventListener(e, r ? ff : _f, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function _f(t) {
  this.l[t.type + !1](mt.event ? mt.event(t) : t);
}
function ff(t) {
  this.l[t.type + !0](mt.event ? mt.event(t) : t);
}
function lm(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = mt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Ao(p, g), s.constructor = y, s.render = ew), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ne({}, s.__s)), Ne(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = mt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ne(Ne({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === jc && h.key == null ? h.props.children : h, rm(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = tw(n.__e, e, n, o, i, r, l, _);
    (h = mt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), mt.__e(x, e, n);
  }
}
function Q0(t, e) {
  mt.__c && mt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      mt.__e(o, n.__v);
    }
  });
}
function tw(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Fc.call(t.childNodes), h = (d = n.props || tm).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (J0(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, rm(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && rr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && nm(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && oi(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && oi(t, "checked", u, d.checked, !1));
  }
  return t;
}
function cm(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    mt.__e(o, n);
  }
}
function am(t, e, n) {
  var o, i;
  if (mt.unmount && mt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || cm(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        mt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && am(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || nm(t.__e), t.__ = t.__e = t.__d = void 0;
}
function ew(t, e, n) {
  return this.constructor(t, n);
}
Fc = em.slice, mt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Jp = 0, Qp = function(t) {
  return t != null && t.constructor === void 0;
}, Ao.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ne({}, this.state), typeof t == "function" && (t = t(Ne({}, n), this.props)), t && Ne(n, t), t != null && this.__v && (e && this._sb.push(e), cf(this));
}, Ao.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), cf(this));
}, Ao.prototype.render = jc, Eo = [], ni.__r = 0;
var nw = 0;
function Y(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --nw, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return mt.vnode && mt.vnode(_), _;
}
let ow = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var _m, gt, fm, To, uf, um = {}, hm = [], rw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function De(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function dm(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Wl(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++fm };
  return i == null && gt.vnode != null && gt.vnode(r), r;
}
function Vc(t) {
  return t.children;
}
function Mo(t, e) {
  this.props = t, this.context = e;
}
function sr(t, e) {
  if (e == null)
    return t.__ ? sr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? sr(t) : null;
}
function pm(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return pm(t);
  }
}
function hf(t) {
  (!t.__d && (t.__d = !0) && To.push(t) && !ri.__r++ || uf !== gt.debounceRendering) && ((uf = gt.debounceRendering) || setTimeout)(ri);
}
function ri() {
  for (var t; ri.__r = To.length; )
    t = To.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), To = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = De({}, r)).__v = r.__v + 1, vm(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? sr(r), r.__h), iw(o, r), r.__e != l && pm(r)));
    });
}
function mm(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || hm, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Wl(null, a, null, null, a) : Array.isArray(a) ? Wl(Vc, { children: a }, null, null, null) : a.__b > 0 ? Wl(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      vm(t, a, f = f || um, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = gm(a, _, t) : _ = ym(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = sr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && wm(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      bm(p[s], p[++s], p[++s]);
}
function gm(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? gm(o, e, n) : ym(n, o, o, i, o.__e, e));
  return e;
}
function ym(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function sw(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || si(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || si(t, r, e[r], n[r], o);
}
function df(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || rw.test(e) ? n : n + "px";
}
function si(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || df(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || df(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? mf : pf, r) : t.removeEventListener(e, r ? mf : pf, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function pf(t) {
  this.l[t.type + !1](gt.event ? gt.event(t) : t);
}
function mf(t) {
  this.l[t.type + !0](gt.event ? gt.event(t) : t);
}
function vm(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = gt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Mo(p, g), s.constructor = y, s.render = cw), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = De({}, s.__s)), De(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = gt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = De(De({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Vc && h.key == null ? h.props.children : h, mm(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = lw(n.__e, e, n, o, i, r, l, _);
    (h = gt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), gt.__e(x, e, n);
  }
}
function iw(t, e) {
  gt.__c && gt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      gt.__e(o, n.__v);
    }
  });
}
function lw(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && _m.call(t.childNodes), h = (d = n.props || um).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (sw(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, mm(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && sr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && dm(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && si(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && si(t, "checked", u, d.checked, !1));
  }
  return t;
}
function bm(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    gt.__e(o, n);
  }
}
function wm(t, e, n) {
  var o, i;
  if (gt.unmount && gt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || bm(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        gt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && wm(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || dm(t.__e), t.__ = t.__e = t.__d = void 0;
}
function cw(t, e, n) {
  return this.constructor(t, n);
}
_m = hm.slice, gt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, fm = 0, Mo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = De({}, this.state), typeof t == "function" && (t = t(De({}, n), this.props)), t && De(n, t), t != null && this.__v && (e && this._sb.push(e), hf(this));
}, Mo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), hf(this));
}, Mo.prototype.render = Vc, To = [], ri.__r = 0;
var aw = 0;
function gf(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --aw, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return gt.vnode && gt.vnode(_), _;
}
var tn, en;
class yf extends Mo {
  constructor(n) {
    super(n);
    M(this, tn, 0);
    M(this, en, null);
    L(this, "_handleWheel", (n) => {
      const { wheelContainer: o } = this.props, i = n.target;
      if (!(!i || !o) && (typeof o == "string" && i.closest(o) || typeof o == "object")) {
        const r = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && n.preventDefault();
      }
    });
    L(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (v(this, tn) && cancelAnimationFrame(v(this, tn)), H(this, tn, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + i * this.props.scrollSize / this.props.clientSize), H(this, tn, 0);
      })), n.preventDefault());
    });
    L(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    L(this, "_handleMouseDown", (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.stopPropagation();
    });
    L(this, "_handleClick", (n) => {
      const o = n.currentTarget;
      if (!o)
        return;
      const i = o.getBoundingClientRect(), { type: r, clientSize: l, scrollSize: c } = this.props, _ = (r === "horz" ? n.clientX - i.left : n.clientY - i.top) - this.barSize / 2;
      this.scroll(_ * c / l), n.preventDefault();
    });
    this.state = {
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
    const { scrollSize: n, clientSize: o } = this.props;
    return Math.max(0, n - o);
  }
  get barSize() {
    const { clientSize: n, scrollSize: o, size: i = 12, minBarSize: r = 3 * i } = this.props;
    return Math.max(Math.round(n * n / o), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: n } = this.props;
    n && (H(this, en, typeof n == "string" ? document : n.current), v(this, en).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), v(this, en) && v(this, en).removeEventListener("wheel", this._handleWheel);
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
    const { onScroll: o } = this.props;
    o && o(n, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: n,
      type: o,
      size: i = 12,
      className: r,
      style: l,
      left: c,
      top: _,
      bottom: h,
      right: s
    } = this.props, { maxScrollPos: d, scrollPos: f } = this, { dragStart: a } = this.state, u = {
      left: c,
      top: _,
      bottom: h,
      right: s,
      ...l
    }, b = {};
    return o === "horz" ? (u.height = i, u.width = n, b.width = this.barSize, b.left = Math.round(Math.min(d, f) * (n - b.width) / d)) : (u.width = i, u.height = n, b.height = this.barSize, b.top = Math.round(Math.min(d, f) * (n - b.height) / d)), /* @__PURE__ */ gf(
      "div",
      {
        className: F("scrollbar", r, {
          "is-vert": o === "vert",
          "is-horz": o === "horz",
          "is-dragging": a
        }),
        style: u,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ gf(
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
tn = new WeakMap(), en = new WeakMap();
function vf(t, e, n) {
  return t && (e && (t = Math.max(e, t)), n && (t = Math.min(n, t))), t;
}
function $m({ col: t, className: e, height: n, row: o, onRenderCell: i, style: r, outerStyle: l, children: c, outerClass: _, ...h }) {
  var y;
  const s = {
    left: t.left,
    width: t.realWidth,
    height: n,
    ...l
  }, { align: d, border: f } = t.setting, a = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...t.setting.cellStyle,
    ...r
  }, u = ["dtable-cell", _, t.setting.className, {
    "has-border-left": f === !0 || f === "left",
    "has-border-right": f === !0 || f === "right"
  }], b = ["dtable-cell-content", e], p = [c ?? ((y = o.data) == null ? void 0 : y[t.name]) ?? ""], m = i ? i(p, { row: o, col: t }, Bc) : p, g = [], w = [], k = {}, C = {};
  let A = "div";
  m == null || m.forEach((x) => {
    if (typeof x == "object" && x && !Qp(x) && ("html" in x || "className" in x || "style" in x || "attrs" in x || "children" in x || "tagName" in x)) {
      const N = x.outer ? g : w;
      x.html ? N.push(/* @__PURE__ */ Y("div", { className: F("dtable-cell-html", x.className), style: x.style, dangerouslySetInnerHTML: { __html: x.html }, ...x.attrs ?? {} })) : (x.style && Object.assign(x.outer ? s : a, x.style), x.className && (x.outer ? u : b).push(x.className), x.children && N.push(x.children), x.attrs && Object.assign(x.outer ? k : C, x.attrs)), x.tagName && !x.outer && (A = x.tagName);
    } else
      w.push(x);
  });
  const E = A;
  return /* @__PURE__ */ Y(
    "div",
    {
      className: F(u),
      style: s,
      "data-col": t.name,
      ...h,
      ...k,
      children: [
        w.length > 0 && /* @__PURE__ */ Y(E, { className: F(b), style: a, ...C, children: w }),
        g
      ]
    }
  );
}
function Il({ row: t, className: e, top: n = 0, left: o = 0, width: i, height: r, cols: l, CellComponent: c = $m, onRenderCell: _ }) {
  return /* @__PURE__ */ Y("div", { className: F("dtable-cells", e), style: { top: n, left: o, width: i, height: r }, children: l.map((h) => h.visible ? /* @__PURE__ */ Y(
    c,
    {
      col: h,
      row: t,
      onRenderCell: _
    },
    h.name
  ) : null) });
}
function km({
  row: t,
  className: e,
  top: n,
  height: o,
  fixedLeftCols: i,
  fixedRightCols: r,
  scrollCols: l,
  fixedLeftWidth: c,
  scrollWidth: _,
  scrollColsWidth: h,
  fixedRightWidth: s,
  scrollLeft: d,
  CellComponent: f = $m,
  onRenderCell: a,
  style: u,
  ...b
}) {
  let p = null;
  i != null && i.length && (p = /* @__PURE__ */ Y(
    Il,
    {
      className: "dtable-fixed-left",
      cols: i,
      width: c,
      row: t,
      CellComponent: f,
      onRenderCell: a
    }
  ));
  let m = null;
  l != null && l.length && (m = /* @__PURE__ */ Y(
    Il,
    {
      className: "dtable-flexable",
      cols: l,
      left: c - d,
      width: Math.max(_, h),
      row: t,
      CellComponent: f,
      onRenderCell: a
    }
  ));
  let g = null;
  r != null && r.length && (g = /* @__PURE__ */ Y(
    Il,
    {
      className: "dtable-fixed-right",
      cols: r,
      left: c + _,
      width: s,
      row: t,
      CellComponent: f,
      onRenderCell: a
    }
  ));
  const w = { top: n, height: o, lineHeight: `${o - 2}px`, ...u };
  return /* @__PURE__ */ Y(
    "div",
    {
      className: F("dtable-row", e),
      style: w,
      "data-id": t.id,
      ...b,
      children: [
        p,
        m,
        g
      ]
    }
  );
}
function _w({ height: t, onRenderRow: e, ...n }) {
  const o = {
    height: t,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (e) {
    const i = e({ props: o }, Bc);
    i && Object.assign(o, i);
  }
  return /* @__PURE__ */ Y("div", { className: "dtable-header", style: { height: t }, children: /* @__PURE__ */ Y(km, { ...o }) });
}
function fw({
  className: t,
  style: e,
  top: n,
  rows: o,
  height: i,
  rowHeight: r,
  scrollTop: l,
  onRenderRow: c,
  ..._
}) {
  return e = { ...e, top: n, height: i }, /* @__PURE__ */ Y("div", { className: F("dtable-rows", t), style: e, children: o.map((h) => {
    const s = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - l,
      height: r,
      ..._
    }, d = c == null ? void 0 : c({ props: s, row: h }, Bc);
    return d && Object.assign(s, d), /* @__PURE__ */ Y(km, { ...s });
  }) });
}
const ii = /* @__PURE__ */ new Map(), li = [];
function xm(t, e) {
  const { name: n } = t;
  if (!(e != null && e.override) && ii.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  ii.set(n, t), e != null && e.buildIn && !li.includes(n) && li.push(n);
}
function Fn(t, e) {
  xm(t, e);
  const n = (o) => {
    if (!o)
      return t;
    const { defaultOptions: i, ...r } = t;
    return {
      ...r,
      defaultOptions: { ...i, ...o }
    };
  };
  return n.plugin = t, n;
}
function Sm(t) {
  return ii.delete(t);
}
function uw(t) {
  if (typeof t == "string") {
    const e = ii.get(t);
    return e || console.warn(`DTable: Cannot found plugin "${t}"`), e;
  }
  if (typeof t == "function" && "plugin" in t)
    return t.plugin;
  if (typeof t == "object")
    return t;
  console.warn("DTable: Invalid plugin", t);
}
function Cm(t, e, n) {
  return e.forEach((o) => {
    var r;
    if (!o)
      return;
    const i = uw(o);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && Cm(t, i.plugins, n), t.push(i), n.add(i.name)));
  }), t;
}
function hw(t = [], e = !0) {
  return e && li.length && t.unshift(...li), t != null && t.length ? Cm([], t, /* @__PURE__ */ new Set()) : [];
}
function bf() {
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
    footer: !1,
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
var jr, nn, Nn, me, zt, ge, kt, Ft, Yt, Dn, Sr, Cr, ie, Rn, Pn, qi, Em, Xi, Am, Ki, Tm, Zi, Mm, Er, sc, Ji, Qi, Ar, Tr, tl, el, nl, Lm, ol, Nm, rl, Dm;
let dw = (jr = class extends Ao {
  constructor(n) {
    super(n);
    M(this, qi);
    M(this, Xi);
    M(this, Ki);
    M(this, Zi);
    M(this, Er);
    M(this, nl);
    M(this, ol);
    M(this, rl);
    L(this, "ref", Z0());
    M(this, nn, 0);
    M(this, Nn, void 0);
    M(this, me, !1);
    M(this, zt, void 0);
    M(this, ge, void 0);
    M(this, kt, []);
    M(this, Ft, void 0);
    M(this, Yt, /* @__PURE__ */ new Map());
    M(this, Dn, {});
    M(this, Sr, void 0);
    M(this, Cr, []);
    L(this, "updateLayout", () => {
      v(this, nn) && cancelAnimationFrame(v(this, nn)), H(this, nn, requestAnimationFrame(() => {
        H(this, Ft, void 0), this.forceUpdate(), H(this, nn, 0);
      }));
    });
    M(this, ie, (n, o) => {
      o = o || n.type;
      const i = v(this, Yt).get(o);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    M(this, Rn, (n) => {
      v(this, ie).call(this, n, `window_${n.type}`);
    });
    M(this, Pn, (n) => {
      v(this, ie).call(this, n, `document_${n.type}`);
    });
    M(this, Ji, (n, o) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, o);
        i && Object.assign(n.props, i);
      }
      return v(this, kt).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    M(this, Qi, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), v(this, kt).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    M(this, Ar, (n, o, i) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const c = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[c] && (n = l.setting[c].call(this, n, o, i)), this.options[c] && (n = this.options[c].call(this, n, o, i)), v(this, kt).forEach((_) => {
        _[c] && (n = _[c].call(this, n, o, i));
      }), n;
    });
    M(this, Tr, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    M(this, tl, (n) => {
      var c, _, h, s, d;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: i, colName: r, cellElement: l } = o;
      if (i === "HEADER")
        l && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l }), v(this, kt).forEach((f) => {
          var a;
          (a = f.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: f } = o, a = this.layout.visibleRows.find((u) => u.id === i);
        if (l) {
          if (((_ = this.options.onCellClick) == null ? void 0 : _.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
            return;
          for (const u of v(this, kt))
            if (((h = u.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
              return;
        }
        if (((s = this.options.onRowClick) == null ? void 0 : s.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
          return;
        for (const u of v(this, kt))
          if (((d = u.onRowClick) == null ? void 0 : d.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
            return;
      }
    });
    M(this, el, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    H(this, Nn, n.id ?? `dtable-${ow(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, H(this, ge, Object.freeze(hw(n.plugins))), v(this, ge).forEach((o) => {
      var c;
      const { methods: i, data: r, state: l } = o;
      i && Object.entries(i).forEach(([_, h]) => {
        typeof h == "function" && Object.assign(this, { [_]: h.bind(this) });
      }), r && Object.assign(v(this, Dn), r.call(this)), l && Object.assign(this.state, l.call(this)), (c = o.onCreate) == null || c.call(this, o);
    });
  }
  get options() {
    var n;
    return ((n = v(this, Ft)) == null ? void 0 : n.options) || v(this, zt) || bf();
  }
  get plugins() {
    return v(this, kt);
  }
  get layout() {
    return v(this, Ft);
  }
  get id() {
    return v(this, Nn);
  }
  get data() {
    return v(this, Dn);
  }
  get parent() {
    var n;
    return this.props.parent ?? ((n = this.ref.current) == null ? void 0 : n.parentElement);
  }
  componentWillReceiveProps() {
    H(this, zt, void 0);
  }
  componentDidMount() {
    if (v(this, me) ? this.forceUpdate() : U(this, Er, sc).call(this), v(this, kt).forEach((n) => {
      let { events: o } = n;
      o && (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", v(this, tl)), this.on("keydown", v(this, el)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), H(this, Sr, o);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    v(this, kt).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    v(this, me) ? U(this, Er, sc).call(this) : v(this, kt).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = v(this, Sr)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const i of v(this, Yt).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), v(this, Rn)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), v(this, Pn)) : n.removeEventListener(i, v(this, ie));
    v(this, kt).forEach((i) => {
      var r;
      (r = i.onUnmounted) == null || r.call(this);
    }), v(this, ge).forEach((i) => {
      var r;
      (r = i.onDestory) == null || r.call(this);
    }), H(this, Dn, {}), v(this, Yt).clear();
  }
  on(n, o, i) {
    var l;
    i && (n = `${i}_${n}`);
    const r = v(this, Yt).get(n);
    r ? r.push(o) : (v(this, Yt).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), v(this, Rn)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), v(this, Pn)) : (l = this.ref.current) == null || l.addEventListener(n, v(this, ie)));
  }
  off(n, o, i) {
    var c;
    i && (n = `${i}_${n}`);
    const r = v(this, Yt).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (v(this, Yt).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), v(this, Rn)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), v(this, Pn)) : (c = this.ref.current) == null || c.removeEventListener(n, v(this, ie)));
  }
  emitCustomEvent(n, o) {
    v(this, ie).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
  }
  scroll(n, o) {
    const { scrollLeft: i, scrollTop: r, rowsHeightTotal: l, rowsHeight: c, rowHeight: _, colsInfo: { scrollWidth: h, scrollColsWidth: s } } = this.layout, { to: d } = n;
    let { scrollLeft: f, scrollTop: a } = n;
    if (d === "up" || d === "down")
      a = r + (d === "down" ? 1 : -1) * Math.floor(c / _) * _;
    else if (d === "left" || d === "right")
      f = i + (d === "right" ? 1 : -1) * h;
    else if (d === "home")
      a = 0;
    else if (d === "end")
      a = l - c;
    else if (d === "left-begin")
      f = 0;
    else if (d === "right-end")
      f = s - h;
    else {
      const { offsetLeft: b, offsetTop: p } = n;
      typeof b == "number" && (f = i + b), typeof p == "number" && (f = r + p);
    }
    const u = {};
    return typeof f == "number" && (f = Math.max(0, Math.min(f, s - h)), f !== i && (u.scrollLeft = f)), typeof a == "number" && (a = Math.max(0, Math.min(a, l - c)), a !== r && (u.scrollTop = a)), Object.keys(u).length ? (this.setState(u, () => {
      var b;
      (b = this.options.onScroll) == null || b.call(this, u), o == null || o.call(this, !0);
    }), !0) : (o == null || o.call(this, !1), !1);
  }
  getColInfo(n) {
    if (n === void 0)
      return;
    if (typeof n == "object")
      return n;
    const { colsMap: o, colsList: i } = this.layout;
    return typeof n == "number" ? i[n] : o[n];
  }
  getRowInfo(n) {
    if (n === void 0)
      return;
    if (typeof n == "object")
      return n;
    if (n === -1 || n === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: o, rowsMap: i } = this.layout;
    return typeof n == "number" ? o[n] : i[n];
  }
  getCellValue(n, o) {
    var _;
    const i = typeof n == "object" ? n : this.getRowInfo(n);
    if (!i)
      return;
    const r = typeof o == "object" ? o : this.getColInfo(o);
    if (!r)
      return;
    let l = i.id === "HEADER" ? r.setting.title ?? r.setting.name : (_ = i.data) == null ? void 0 : _[r.name];
    const { cellValueGetter: c } = this.options;
    return c && (l = c.call(this, i, r, l)), l;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, o) {
    if (!v(this, zt))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: i, state: r } = n;
    if (i === "layout")
      H(this, Ft, void 0);
    else if (i === "options") {
      if (H(this, zt, void 0), !v(this, Ft))
        return;
      H(this, Ft, void 0);
    }
    this.setState(r ?? ((l) => ({ renderCount: l.renderCount + 1 })), o);
  }
  getPointerInfo(n) {
    const o = n.target;
    if (!o || o.closest(".no-cell-event"))
      return;
    const i = o.closest(".dtable-cell");
    if (!i)
      return;
    const r = i.closest(".dtable-row");
    if (!r)
      return;
    const l = i == null ? void 0 : i.getAttribute("data-col"), c = r == null ? void 0 : r.getAttribute("data-id");
    if (!(typeof l != "string" || typeof c != "string"))
      return {
        cellElement: i,
        rowElement: r,
        colName: l,
        rowID: c,
        target: o
      };
  }
  i18n(n, o, i) {
    return Mr(v(this, Cr), n, o, i, this.options.lang) ?? `{i18n:${n}}`;
  }
  render() {
    const n = U(this, rl, Dm).call(this), { className: o, rowHover: i, colHover: r, cellHover: l, bordered: c, striped: _, scrollbarHover: h } = this.options, s = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", o, {
      "dtable-hover-row": i,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": c,
      "dtable-striped": _,
      "dtable-scrolled-down": ((n == null ? void 0 : n.scrollTop) ?? 0) > 0,
      "scrollbar-hover": h
    }], f = [];
    return n && v(this, kt).forEach((a) => {
      var b;
      const u = (b = a.onRender) == null ? void 0 : b.call(this, n);
      u && (u.style && Object.assign(s, u.style), u.className && d.push(u.className), u.children && f.push(u.children));
    }), /* @__PURE__ */ Y(
      "div",
      {
        id: v(this, Nn),
        className: F(d),
        style: s,
        ref: this.ref,
        tabIndex: -1,
        children: [
          n && U(this, qi, Em).call(this, n),
          n && U(this, Xi, Am).call(this, n),
          n && U(this, Ki, Tm).call(this, n),
          n && U(this, Zi, Mm).call(this, n)
        ]
      }
    );
  }
}, nn = new WeakMap(), Nn = new WeakMap(), me = new WeakMap(), zt = new WeakMap(), ge = new WeakMap(), kt = new WeakMap(), Ft = new WeakMap(), Yt = new WeakMap(), Dn = new WeakMap(), Sr = new WeakMap(), Cr = new WeakMap(), ie = new WeakMap(), Rn = new WeakMap(), Pn = new WeakMap(), qi = new WeakSet(), Em = function(n) {
  const { header: o, colsInfo: i, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ Y(
      _w,
      {
        scrollLeft: l,
        height: r,
        onRenderCell: v(this, Ar),
        onRenderRow: v(this, Qi),
        ...i
      }
    );
  const c = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ Y(
    Yl,
    {
      className: "dtable-header",
      style: { height: r },
      renders: c,
      generateArgs: [n],
      generatorThis: this
    }
  );
}, Xi = new WeakSet(), Am = function(n) {
  const { headerHeight: o, rowsHeight: i, visibleRows: r, rowHeight: l, colsInfo: c, scrollLeft: _, scrollTop: h } = n;
  return /* @__PURE__ */ Y(
    fw,
    {
      top: o,
      height: i,
      rows: r,
      rowHeight: l,
      scrollLeft: _,
      scrollTop: h,
      onRenderCell: v(this, Ar),
      onRenderRow: v(this, Ji),
      ...c
    }
  );
}, Ki = new WeakSet(), Tm = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const i = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ Y(
    Yl,
    {
      className: "dtable-footer",
      style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
      renders: i,
      generateArgs: [n],
      generatorThis: this,
      generators: n.footerGenerators
    }
  );
}, Zi = new WeakSet(), Mm = function(n) {
  const o = [], { scrollLeft: i, colsInfo: r, scrollTop: l, rowsHeight: c, rowsHeightTotal: _, footerHeight: h } = n, { scrollColsWidth: s, scrollWidth: d } = r, { scrollbarSize: f = 12, horzScrollbarPos: a } = this.options;
  return s > d && o.push(
    /* @__PURE__ */ Y(
      yf,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: s,
        clientSize: d,
        onScroll: v(this, Tr),
        left: r.fixedLeftWidth,
        bottom: (a === "inside" ? 0 : -f) + h,
        size: f,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), _ > c && o.push(
    /* @__PURE__ */ Y(
      yf,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: _,
        clientSize: c,
        onScroll: v(this, Tr),
        right: 0,
        size: f,
        top: n.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), o.length ? o : null;
}, Er = new WeakSet(), sc = function() {
  var n;
  H(this, me, !1), (n = this.options.afterRender) == null || n.call(this), v(this, kt).forEach((o) => {
    var i;
    return (i = o.afterRender) == null ? void 0 : i.call(this);
  });
}, Ji = new WeakMap(), Qi = new WeakMap(), Ar = new WeakMap(), Tr = new WeakMap(), tl = new WeakMap(), el = new WeakMap(), nl = new WeakSet(), Lm = function() {
  if (v(this, zt))
    return !1;
  const o = { ...bf(), ...v(this, ge).reduce((i, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(i, l), i;
  }, {}), ...this.props };
  return H(this, zt, o), H(this, kt, v(this, ge).reduce((i, r) => {
    const { when: l, options: c } = r;
    return (!l || l(o)) && (i.push(r), c && Object.assign(o, typeof c == "function" ? c.call(this, o) : c)), i;
  }, [])), H(this, Cr, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, ol = new WeakSet(), Nm = function() {
  var X, vt;
  const { plugins: n } = this;
  let o = v(this, zt);
  const i = {
    flex: /* @__PURE__ */ Y("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ Y("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((I) => {
    var yt;
    const K = (yt = I.beforeLayout) == null ? void 0 : yt.call(this, o);
    K && (o = { ...o, ...K }), Object.assign(i, I.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: c } = o, _ = [], h = [], s = [], d = {}, f = [], a = [];
  let u = 0, b = 0, p = 0;
  o.cols.forEach((I) => {
    if (I.hidden)
      return;
    const {
      name: K,
      type: yt = "",
      fixed: it = !1,
      flex: G = !1,
      width: lt = r,
      minWidth: Ct = l,
      maxWidth: Et = c,
      ...Um
    } = I, J = {
      name: K,
      type: yt,
      setting: {
        name: K,
        type: yt,
        fixed: it,
        flex: G,
        width: lt,
        minWidth: Ct,
        maxWidth: Et,
        ...Um
      },
      flex: it ? 0 : G === !0 ? 1 : typeof G == "number" ? G : 0,
      left: 0,
      width: vf(lt, Ct, Et),
      realWidth: 0,
      visible: !0,
      index: f.length
    };
    n.forEach((Gc) => {
      var qc, Xc;
      const Pr = (qc = Gc.colTypes) == null ? void 0 : qc[yt];
      if (Pr) {
        const Kc = typeof Pr == "function" ? Pr(J) : Pr;
        Kc && Object.assign(J.setting, Kc);
      }
      (Xc = Gc.onAddCol) == null || Xc.call(this, J);
    }), J.width = vf(J.setting.width ?? J.width, J.setting.minWidth ?? Ct, J.setting.maxWidth ?? Et), J.realWidth = J.realWidth || J.width, it === "left" ? (J.left = u, u += J.width, _.push(J)) : it === "right" ? (J.left = b, b += J.width, h.push(J)) : (J.left = p, p += J.width, s.push(J)), J.flex && a.push(J), f.push(J), d[J.name] = J;
  });
  let m = o.width, g = 0;
  const w = u + p + b;
  if (typeof m == "function" && (m = m.call(this, w)), m === "auto")
    g = w;
  else if (m === "100%") {
    const { parent: I } = this;
    if (I)
      g = I.clientWidth;
    else {
      g = 0, H(this, me, !0);
      return;
    }
  } else
    g = m ?? 0;
  const { data: k, rowKey: C = "id", rowHeight: A } = o, E = [], y = (I, K, yt) => {
    var G, lt;
    const it = { data: yt ?? { [C]: I }, id: I, index: E.length, top: 0 };
    if (yt || (it.lazy = !0), E.push(it), ((G = o.onAddRow) == null ? void 0 : G.call(this, it, K)) !== !1) {
      for (const Ct of n)
        if (((lt = Ct.onAddRow) == null ? void 0 : lt.call(this, it, K)) === !1)
          return;
    }
  };
  if (typeof k == "number")
    for (let I = 0; I < k; I++)
      y(`${I}`, I);
  else
    Array.isArray(k) && k.forEach((I, K) => {
      typeof I == "object" ? y(`${I[C] ?? ""}`, K, I) : y(`${I ?? ""}`, K);
    });
  let x = E;
  const N = {};
  if (o.onAddRows) {
    const I = o.onAddRows.call(this, x);
    I && (x = I);
  }
  for (const I of n) {
    const K = (X = I.onAddRows) == null ? void 0 : X.call(this, x);
    K && (x = K);
  }
  x.forEach((I, K) => {
    N[I.id] = I, I.index = K, I.top = I.index * A;
  });
  const { header: z, footer: B } = o, D = z ? o.headerHeight || A : 0, S = B ? o.footerHeight || A : 0;
  let $ = o.height, R = 0;
  const T = x.length * A, O = D + S + T;
  if (typeof $ == "function" && ($ = $.call(this, O)), $ === "auto")
    R = O;
  else if (typeof $ == "object")
    R = Math.min($.max, Math.max($.min, O));
  else if ($ === "100%") {
    const { parent: I } = this;
    if (I)
      R = I.clientHeight;
    else {
      R = 0, H(this, me, !0);
      return;
    }
  } else
    R = $;
  const P = R - D - S, W = g - u - b, V = {
    options: o,
    allRows: E,
    width: g,
    height: R,
    rows: x,
    rowsMap: N,
    rowHeight: A,
    rowsHeight: P,
    rowsHeightTotal: T,
    header: z,
    footer: B,
    footerGenerators: i,
    headerHeight: D,
    footerHeight: S,
    colsMap: d,
    colsList: f,
    flexCols: a,
    colsInfo: {
      fixedLeftCols: _,
      fixedRightCols: h,
      scrollCols: s,
      fixedLeftWidth: u,
      scrollWidth: W,
      scrollColsWidth: p,
      fixedRightWidth: b
    }
  }, j = (vt = o.onLayout) == null ? void 0 : vt.call(this, V);
  j && Object.assign(V, j), n.forEach((I) => {
    if (I.onLayout) {
      const K = I.onLayout.call(this, V);
      K && Object.assign(V, K);
    }
  }), H(this, Ft, V);
}, rl = new WeakSet(), Dm = function() {
  (U(this, nl, Lm).call(this) || !v(this, Ft)) && U(this, ol, Nm).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: r, scrollWidth: l, scrollColsWidth: c } } = n;
  if (i.length) {
    const w = l - c;
    if (w > 0) {
      const k = i.reduce((A, E) => A + E.flex, 0);
      let C = 0;
      i.forEach((A) => {
        const E = Math.min(w - C, Math.ceil(w * (A.flex / k)));
        A.realWidth = E + A.width, C += A.realWidth;
      });
    } else
      i.forEach((k) => {
        k.realWidth = k.width;
      });
  }
  o = Math.min(Math.max(0, c - l), o);
  let _ = 0;
  r.forEach((w) => {
    w.left = _, _ += w.realWidth, w.visible = w.left + w.realWidth >= o && w.left <= o + l;
  });
  const { rowsHeightTotal: h, rowsHeight: s, rows: d, rowHeight: f } = n, a = Math.min(Math.max(0, h - s), this.state.scrollTop), u = Math.floor(a / f), b = a + s, p = Math.min(d.length, Math.ceil(b / f)), m = [], { rowDataGetter: g } = this.options;
  for (let w = u; w < p; w++) {
    const k = d[w];
    k.lazy && g && (k.data = g([k.id])[0], k.lazy = !1), m.push(k);
  }
  return n.visibleRows = m, n.scrollTop = a, n.scrollLeft = o, n;
}, L(jr, "addPlugin", xm), L(jr, "removePlugin", Sm), jr);
function wf(t, e) {
  e !== void 0 ? t.data.hoverCol = e : e = t.data.hoverCol;
  const { current: n } = t.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof e == "string" && e.length && n.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((i) => i.classList.add(o));
}
const pw = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (t) => !!t.colHover,
  events: {
    mouseover(t) {
      var i;
      const { colHover: e } = this.options;
      if (!e)
        return;
      const n = (i = t.target) == null ? void 0 : i.closest(".dtable-cell");
      if (!n || e === "header" && !n.closest(".dtable-header"))
        return;
      const o = (n == null ? void 0 : n.getAttribute("data-col")) ?? !1;
      wf(this, o);
    },
    mouseleave() {
      wf(this, !1);
    }
  }
}, mw = Fn(pw, { buildIn: !0 });
function gw(t, e) {
  var l, c;
  typeof t == "boolean" && (e = t, t = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: i } = this.options, r = (_, h) => {
    i && !i.call(this, _) || !!n[_] === h || (h ? n[_] = !0 : delete n[_], o[_] = h);
  };
  if (t === void 0 ? (e === void 0 && (e = !Rm.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: _ }) => {
    r(_, !!e);
  })) : (Array.isArray(t) || (t = [t]), t.forEach((_) => {
    r(_, e ?? !n[_]);
  })), Object.keys(o).length) {
    const _ = (c = this.options.beforeCheckRows) == null ? void 0 : c.call(this, t, o, n);
    _ && Object.keys(_).forEach((h) => {
      _[h] ? n[h] = !0 : delete n[h];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var h;
      (h = this.options.onCheckChange) == null || h.call(this, o);
    });
  }
  return o;
}
function yw(t) {
  return this.state.checkedRows[t] ?? !1;
}
function Rm() {
  var n, o;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, r) => i + (e.call(this, r.id) ? 1 : 0), 0)) : t === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function vw() {
  return Object.keys(this.state.checkedRows);
}
const bw = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (t) => !!t.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: gw,
    isRowChecked: yw,
    isAllRowChecked: Rm,
    getChecks: vw
  },
  i18n: {
    zh_cn: {
      checkedCountInfo: "已选择 {selected} 项",
      totalCountInfo: "共 {total} 项"
    },
    en: {
      checkedCountInfo: "Selected {selected} items",
      totalCountInfo: "Total {total} items"
    }
  },
  footer: {
    checkbox() {
      const t = this.isAllRowChecked();
      return [
        /* @__PURE__ */ Y("div", { style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: /* @__PURE__ */ Y("input", { type: "checkbox", checked: t }) })
      ];
    },
    checkedInfo(t, e) {
      const n = this.getChecks().length, o = [];
      return n && o.push(this.i18n("checkedCountInfo", { selected: n })), o.push(this.i18n("totalCountInfo", { total: e.allRows.length })), [
        /* @__PURE__ */ Y("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(t, { row: e, col: n }) {
    var c;
    const { id: o } = e, { canRowCheckable: i } = this.options;
    if (i && !i.call(this, o))
      return t;
    const { checkbox: r } = n.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const _ = this.isRowChecked(o), h = ((c = this.options.checkboxRender) == null ? void 0 : c.call(this, _, o)) ?? /* @__PURE__ */ Y("input", { type: "checkbox", checked: _ });
      t.unshift(h), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderHeaderCell(t, { row: e, col: n }) {
    var l;
    const { id: o } = e, { checkbox: i } = n.setting;
    if (typeof i == "function" ? i.call(this, o) : i) {
      const c = this.isAllRowChecked(), _ = ((l = this.options.checkboxRender) == null ? void 0 : l.call(this, c, o)) ?? /* @__PURE__ */ Y("input", { type: "checkbox", checked: c });
      t.unshift(_), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderRow({ props: t, row: e }) {
    if (this.isRowChecked(e.id))
      return { className: F(t.className, "is-checked") };
  },
  onHeaderCellClick(t) {
    const e = t.target;
    if (!e)
      return;
    const n = e.closest('input[type="checkbox"],.dtable-checkbox');
    n && this.toggleCheckRows(n.checked);
  },
  onRowClick(t, { rowID: e }) {
    const n = t.target;
    if (!n)
      return;
    (n.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(e);
  }
}, ww = Fn(bw);
var Pm = /* @__PURE__ */ ((t) => (t.unknown = "", t.collapsed = "collapsed", t.expanded = "expanded", t.hidden = "hidden", t.normal = "normal", t))(Pm || {});
function ic(t) {
  const e = this.data.nestedMap.get(t);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const n = this.state.collapsedRows, o = e.children && n && n[t];
  let i = !1, { parent: r } = e;
  for (; r; ) {
    const l = ic.call(this, r);
    if (l.state !== "expanded") {
      i = !0;
      break;
    }
    r = l.parent;
  }
  return e.state = i ? "hidden" : o ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? ic.call(this, e.parent).level + 1 : 0, e;
}
function $w(t, e) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: o } = this.data;
  if (t === "HEADER")
    if (e === void 0 && (e = !Om.call(this)), e) {
      const i = o.entries();
      for (const [r, l] of i)
        l.state === "expanded" && (n[r] = !0);
    } else
      n = {};
  else {
    const i = Array.isArray(t) ? t : [t];
    e === void 0 && (e = !n[i[0]]), i.forEach((r) => {
      const l = o.get(r);
      e && (l != null && l.children) ? n[r] = !0 : delete n[r];
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
function Om() {
  const t = this.data.nestedMap.values();
  for (const e of t)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function Hm(t, e = 0, n, o = 0) {
  var i;
  n || (n = [...t.keys()]);
  for (const r of n) {
    const l = t.get(r);
    l && (l.level === o && (l.order = e++), (i = l.children) != null && i.length && (e = Hm(t, e, l.children, o + 1)));
  }
  return e;
}
function Wm(t, e, n, o) {
  const i = t.getNestedRowInfo(e);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    o[r] = n, Wm(t, r, n, o);
  }), i;
}
function Im(t, e, n, o, i) {
  var c;
  const r = t.getNestedRowInfo(e);
  if (!r || r.state === "")
    return;
  ((c = r.children) == null ? void 0 : c.every((_) => {
    const h = !!(o[_] !== void 0 ? o[_] : i[_]);
    return n === h;
  })) && (o[e] = n), r.parent && Im(t, r.parent, n, o, i);
}
const kw = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(t, e) {
      const { nestedMap: n } = this.data, o = n.get(t.id), i = n.get(e.id);
      return (o == null ? void 0 : o.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(t, e, n) {
      if (!this.options.checkable || !(t != null && t.length))
        return;
      const o = {};
      return Object.entries(e).forEach(([i, r]) => {
        const l = Wm(this, i, r, o);
        l != null && l.parent && Im(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (t) => !!t.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: $w,
    isAllCollapsed: Om,
    getNestedRowInfo: ic
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(t) {
    var i, r;
    const { nestedMap: e } = this.data, n = (i = t.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"], o = e.get(t.id) ?? {
      state: "",
      level: 0
    };
    if (o.parent = n, (r = t.data) != null && r[this.options.asParentKey ?? "asParent"] && (o.children = []), e.set(t.id, o), n) {
      let l = e.get(n);
      l || (l = {
        state: "",
        level: 0
      }, e.set(n, l)), l.children || (l.children = []), l.children.push(t.id);
    }
  },
  onAddRows(t) {
    return t = t.filter(
      (e) => this.getNestedRowInfo(e.id).state !== "hidden"
      /* hidden */
    ), Hm(this.data.nestedMap), t.sort((e, n) => {
      const o = this.getNestedRowInfo(e.id), i = this.getNestedRowInfo(n.id), r = (o.order ?? 0) - (i.order ?? 0);
      return r === 0 ? e.index - n.index : r;
    }), t;
  },
  onRenderCell(t, { col: e, row: n }) {
    var c;
    const { id: o, data: i } = n, { nestedToggle: r } = e.setting, l = this.getNestedRowInfo(o);
    if (r && (l.children || l.parent) && t.unshift(((c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, o, e, i)) ?? /* @__PURE__ */ Y("a", { role: "button", className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ Y("span", { className: "toggle-icon" }) })), l.level) {
      let { nestedIndent: _ = r } = e.setting;
      _ && (_ === !0 && (_ = this.options.nestedIndent ?? 12), t.unshift(/* @__PURE__ */ Y("div", { className: "dtable-nested-indent", style: { width: _ * l.level + "px" } })));
    }
    return t;
  },
  onRenderHeaderCell(t, { row: e, col: n }) {
    var i;
    const { id: o } = e;
    return n.setting.nestedToggle && t.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, o, n, void 0)) ?? /* @__PURE__ */ Y("a", { type: "button", className: "dtable-nested-toggle state", children: /* @__PURE__ */ Y("span", { className: "toggle-icon" }) })), t;
  },
  onRenderRow({ props: t, row: e }) {
    const n = this.getNestedRowInfo(e.id);
    return {
      className: F(t.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: t }) {
    return t.className = F(t.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), t;
  },
  onHeaderCellClick(t) {
    const e = t.target;
    if (!(!e || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(t, { rowID: e }) {
    const n = t.target;
    if (!(!n || !this.getNestedRowInfo(e).children || !n.closest(".dtable-nested-toggle")))
      return this.toggleRow(e), !0;
  }
}, xw = Fn(kw);
const Sw = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(t) {
        return t[0] = {
          html: t[0]
        }, t;
      }
    },
    link: {
      onRenderCell(t, { col: e, row: n }) {
        const { linkTemplate: o = "", linkProps: i } = e.setting, r = Lt(o, n.data);
        return t[0] = /* @__PURE__ */ Y("a", { href: r, ...i, children: t[0] }), t;
      }
    },
    avatar: {
      onRenderCell(t, { col: e, row: n }) {
        const { data: o } = n, { avatarWithName: i, avatarClass: r = "size-xs circle", avatarKey: l = `${e.name}Avatar` } = e.setting, c = /* @__PURE__ */ Y("div", { className: `avatar ${r} flex-none`, children: /* @__PURE__ */ Y("img", { src: o ? o[l] : "" }) });
        return i ? t.unshift(c) : t[0] = c, t;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(t, { col: e }) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = e.setting, l = (n - o) / 2, c = n / 2, _ = t[0];
        return t[0] = /* @__PURE__ */ Y("svg", { width: n, height: n, children: [
          /* @__PURE__ */ Y("circle", { cx: c, cy: c, r: l, "stroke-width": o, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ Y("circle", { cx: c, cy: c, r: l, "stroke-width": o, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - _) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ Y("text", { x: c, y: c + o, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${l}px` }, children: Math.round(_) })
        ] }), t;
      }
    },
    actionButtons: {
      onRenderCell(t, { col: e, row: n }) {
        var c;
        const o = (c = n.data) == null ? void 0 : c[e.name];
        if (!o)
          return t;
        const { actionBtnTemplate: i = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: l = "btn text-primary square size-sm ghost" } = e.setting;
        return [{
          html: o.map((_) => {
            typeof _ == "string" && (_ = { action: _ });
            const h = r[_.action];
            return h && (_ = { className: l, ...h, ..._ }), Lt(i, _);
          }).join(" ")
        }];
      }
    },
    format: {
      onRenderCell(t, { col: e }) {
        let { format: n } = e.setting;
        if (!n)
          return t;
        typeof n == "string" && (n = { type: "text", format: n });
        const { format: o, type: i } = n, r = t[0];
        return typeof o == "function" ? t[0] = i === "html" ? { html: o(r) } : o(r) : i === "datetime" ? t[0] = ec(r, o) : i === "html" ? t[0] = { html: Lt(o, r) } : t[0] = Lt(o, r), t;
      }
    }
  }
}, Cw = Fn(Sw, { buildIn: !0 }), Ew = {
  name: "sort-type",
  onRenderHeaderCell(t, { col: e }) {
    const { sortType: n } = e.setting;
    if (n) {
      const { sortLink: o = this.options.sortLink, sortAttrs: i } = e.setting, r = n === !0 ? "none" : n;
      if (t.push(
        /* @__PURE__ */ Y("div", { className: `dtable-sort dtable-sort-${r}` }),
        { outer: !0, attrs: { "data-sort": r } }
      ), o) {
        const l = typeof o == "function" ? o.call(this, e, r) : o;
        t.push(
          { tagName: "a", attrs: { href: l, ...i } }
        );
      }
    }
    return t;
  }
}, Aw = Fn(Ew, { buildIn: !0 }), Tw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Pm,
  checkable: ww,
  colHover: mw,
  nested: xw,
  rich: Cw,
  sortType: Aw
}, Symbol.toStringTag, { value: "Module" }));
class jn extends Dt {
}
L(jn, "NAME", "dtable"), L(jn, "Component", dw), L(jn, "definePlugin", Fn), L(jn, "removePlugin", Sm), L(jn, "plugins", Tw);
var Pt;
class Kn extends Ut {
  constructor() {
    super(...arguments);
    M(this, Pt, void 0);
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tab");
  }
  showTarget() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, Pt, document.querySelector(n)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), v(this, Pt) && (this.addActive(v(this, Pt).parentElement, v(this, Pt)), v(this, Pt).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, Pt, document.querySelector(n)), v(this, Pt) && (this.addActive(v(this, Pt).parentElement, v(this, Pt)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
  }
  addActive(n, o) {
    const i = n.children;
    Array.from(i).forEach((l) => {
      l.classList.remove("active"), l.classList.contains("fade") && l.classList.remove("in");
    }), o.classList.add("active"), o.classList.contains("fade") && this.transition(o).then(function() {
      o.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(n) {
    return new Promise(function(o) {
      setTimeout(() => {
        n.classList.add("in"), o();
      }, 100);
    });
  }
}
Pt = new WeakMap(), L(Kn, "NAME", "NavTabs"), L(Kn, "NAV_CLASS", "nav-tabs"), L(Kn, "EVENTS", !0), L(Kn, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (t) => {
  t.target instanceof HTMLElement && (t.target.dataset.toggle === "tab" || t.target.getAttribute("data-tab")) && (t.preventDefault(), new Kn(t.target).showTarget());
});
export {
  aa as ActionMenu,
  fa as ActionMenuNested,
  za as Avatar,
  Ya as BtnGroup,
  ga as Button,
  Mt as ContextMenu,
  jn as DTable,
  Gt as Datepicker,
  St as Dropdown,
  cc as EventBus,
  ya as Menu,
  La as Messager,
  Tt as Modal,
  vo as ModalTrigger,
  S_ as Nav,
  Kn as NavTabs,
  A_ as Pager,
  P_ as Picker,
  Ha as ProgressCircle,
  ne as TIME_DAY,
  qt as Timepicker,
  G_ as Toolbar,
  Xt as Tooltip,
  sf as VirtualGrid,
  eg as addI18nMap,
  Iw as browser,
  E_ as calculateTimestamp,
  Nw as convertBytes,
  Nt as createDate,
  Lw as formatBytes,
  ec as formatDate,
  Xw as formatDateSpan,
  Lt as formatString,
  Qm as getLangCode,
  Kw as getTimeBeforeDesc,
  Mr as i18n,
  qw as isDBY,
  Ll as isObject,
  Nr as isSameDay,
  _b as isSameMonth,
  Vw as isSameWeek,
  C_ as isSameYear,
  zw as isToday,
  Gw as isTomorrow,
  Yw as isYesterday,
  zl as mergeDeep,
  Vl as nativeEvents,
  tg as setLangCode,
  qg as store
};
