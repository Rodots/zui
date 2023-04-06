var Ti = Object.defineProperty;
var Ai = (E, R, D) => R in E ? Ti(E, R, { enumerable: !0, configurable: !0, writable: !0, value: D }) : E[R] = D;
var me = (E, R, D) => (Ai(E, typeof R != "symbol" ? R + "" : R, D), D), _r = (E, R, D) => {
  if (!R.has(E))
    throw TypeError("Cannot " + D);
};
var re = (E, R, D) => (_r(E, R, "read from private field"), D ? D.call(E) : R.get(E)), he = (E, R, D) => {
  if (R.has(E))
    throw TypeError("Cannot add the same private member more than once");
  R instanceof WeakSet ? R.add(E) : R.set(E, D);
}, xe = (E, R, D, W) => (_r(E, R, "write to private field"), W ? W.call(E, D) : R.set(E, D), D), Mr = (E, R, D, W) => ({
  set _(V) {
    xe(E, R, V, D);
  },
  get _() {
    return re(E, R, W);
  }
}), ke = (E, R, D) => (_r(E, R, "access private method"), D);
const tailwind = "", global$1 = "", link = "", index$z = "";
var n$i, l$l, u$h, i$6, t$i, o$C, f$h = {}, e$h = [], c$h = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$h(E, R) {
  for (var D in R)
    E[D] = R[D];
  return E;
}
function a$h(E) {
  var R = E.parentNode;
  R && R.removeChild(E);
}
function h$a(E, R, D) {
  var W, V, F, Y = {};
  for (F in R)
    F == "key" ? W = R[F] : F == "ref" ? V = R[F] : Y[F] = R[F];
  if (arguments.length > 2 && (Y.children = arguments.length > 3 ? n$i.call(arguments, 2) : D), typeof E == "function" && E.defaultProps != null)
    for (F in E.defaultProps)
      Y[F] === void 0 && (Y[F] = E.defaultProps[F]);
  return v$h(E, Y, W, V, null);
}
function v$h(E, R, D, W, V) {
  var F = { type: E, props: R, key: D, ref: W, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: V ?? ++u$h };
  return V == null && l$l.vnode != null && l$l.vnode(F), F;
}
function y$8() {
  return { current: null };
}
function p$h(E) {
  return E.children;
}
function d$h(E, R) {
  this.props = E, this.context = R;
}
function _$C(E, R) {
  if (R == null)
    return E.__ ? _$C(E.__, E.__.__k.indexOf(E) + 1) : null;
  for (var D; R < E.__k.length; R++)
    if ((D = E.__k[R]) != null && D.__e != null)
      return D.__e;
  return typeof E.type == "function" ? _$C(E) : null;
}
function k$h(E) {
  var R, D;
  if ((E = E.__) != null && E.__c != null) {
    for (E.__e = E.__c.base = null, R = 0; R < E.__k.length; R++)
      if ((D = E.__k[R]) != null && D.__e != null) {
        E.__e = E.__c.base = D.__e;
        break;
      }
    return k$h(E);
  }
}
function b$h(E) {
  (!E.__d && (E.__d = !0) && t$i.push(E) && !g$h.__r++ || o$C !== l$l.debounceRendering) && ((o$C = l$l.debounceRendering) || setTimeout)(g$h);
}
function g$h() {
  for (var E; g$h.__r = t$i.length; )
    E = t$i.sort(function(R, D) {
      return R.__v.__b - D.__v.__b;
    }), t$i = [], E.some(function(R) {
      var D, W, V, F, Y, G;
      R.__d && (Y = (F = (D = R).__v).__e, (G = D.__P) && (W = [], (V = s$h({}, F)).__v = F.__v + 1, j$h(G, F, V, D.__n, G.ownerSVGElement !== void 0, F.__h != null ? [Y] : null, W, Y ?? _$C(F), F.__h), z$h(W, F), F.__e != Y && k$h(F)));
    });
}
function w$h(E, R, D, W, V, F, Y, G, K, Q) {
  var U, ee, J, X, Z, ie, te, ne = W && W.__k || e$h, oe = ne.length;
  for (D.__k = [], U = 0; U < R.length; U++)
    if ((X = D.__k[U] = (X = R[U]) == null || typeof X == "boolean" ? null : typeof X == "string" || typeof X == "number" || typeof X == "bigint" ? v$h(null, X, null, null, X) : Array.isArray(X) ? v$h(p$h, { children: X }, null, null, null) : X.__b > 0 ? v$h(X.type, X.props, X.key, X.ref ? X.ref : null, X.__v) : X) != null) {
      if (X.__ = D, X.__b = D.__b + 1, (J = ne[U]) === null || J && X.key == J.key && X.type === J.type)
        ne[U] = void 0;
      else
        for (ee = 0; ee < oe; ee++) {
          if ((J = ne[ee]) && X.key == J.key && X.type === J.type) {
            ne[ee] = void 0;
            break;
          }
          J = null;
        }
      j$h(E, X, J = J || f$h, V, F, Y, G, K, Q), Z = X.__e, (ee = X.ref) && J.ref != ee && (te || (te = []), J.ref && te.push(J.ref, null, X), te.push(ee, X.__c || Z, X)), Z != null ? (ie == null && (ie = Z), typeof X.type == "function" && X.__k === J.__k ? X.__d = K = m$i(X, K, E) : K = A$h(E, X, J, ne, Z, K), typeof D.type == "function" && (D.__d = K)) : K && J.__e == K && K.parentNode != E && (K = _$C(J));
    }
  for (D.__e = ie, U = oe; U--; )
    ne[U] != null && N$h(ne[U], ne[U]);
  if (te)
    for (U = 0; U < te.length; U++)
      M$h(te[U], te[++U], te[++U]);
}
function m$i(E, R, D) {
  for (var W, V = E.__k, F = 0; V && F < V.length; F++)
    (W = V[F]) && (W.__ = E, R = typeof W.type == "function" ? m$i(W, R, D) : A$h(D, W, W, V, W.__e, R));
  return R;
}
function A$h(E, R, D, W, V, F) {
  var Y, G, K;
  if (R.__d !== void 0)
    Y = R.__d, R.__d = void 0;
  else if (D == null || V != F || V.parentNode == null)
    e:
      if (F == null || F.parentNode !== E)
        E.appendChild(V), Y = null;
      else {
        for (G = F, K = 0; (G = G.nextSibling) && K < W.length; K += 2)
          if (G == V)
            break e;
        E.insertBefore(V, F), Y = F;
      }
  return Y !== void 0 ? Y : V.nextSibling;
}
function C$h(E, R, D, W, V) {
  var F;
  for (F in D)
    F === "children" || F === "key" || F in R || H$h(E, F, null, D[F], W);
  for (F in R)
    V && typeof R[F] != "function" || F === "children" || F === "key" || F === "value" || F === "checked" || D[F] === R[F] || H$h(E, F, R[F], D[F], W);
}
function $$i(E, R, D) {
  R[0] === "-" ? E.setProperty(R, D) : E[R] = D == null ? "" : typeof D != "number" || c$h.test(R) ? D : D + "px";
}
function H$h(E, R, D, W, V) {
  var F;
  e:
    if (R === "style")
      if (typeof D == "string")
        E.style.cssText = D;
      else {
        if (typeof W == "string" && (E.style.cssText = W = ""), W)
          for (R in W)
            D && R in D || $$i(E.style, R, "");
        if (D)
          for (R in D)
            W && D[R] === W[R] || $$i(E.style, R, D[R]);
      }
    else if (R[0] === "o" && R[1] === "n")
      F = R !== (R = R.replace(/Capture$/, "")), R = R.toLowerCase() in E ? R.toLowerCase().slice(2) : R.slice(2), E.l || (E.l = {}), E.l[R + F] = D, D ? W || E.addEventListener(R, F ? T$h : I$h, F) : E.removeEventListener(R, F ? T$h : I$h, F);
    else if (R !== "dangerouslySetInnerHTML") {
      if (V)
        R = R.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (R !== "href" && R !== "list" && R !== "form" && R !== "tabIndex" && R !== "download" && R in E)
        try {
          E[R] = D ?? "";
          break e;
        } catch {
        }
      typeof D == "function" || (D == null || D === !1 && R.indexOf("-") == -1 ? E.removeAttribute(R) : E.setAttribute(R, D));
    }
}
function I$h(E) {
  this.l[E.type + !1](l$l.event ? l$l.event(E) : E);
}
function T$h(E) {
  this.l[E.type + !0](l$l.event ? l$l.event(E) : E);
}
function j$h(E, R, D, W, V, F, Y, G, K) {
  var Q, U, ee, J, X, Z, ie, te, ne, oe, le, ce, ue, pe, de, se = R.type;
  if (R.constructor !== void 0)
    return null;
  D.__h != null && (K = D.__h, G = R.__e = D.__e, R.__h = null, F = [G]), (Q = l$l.__b) && Q(R);
  try {
    e:
      if (typeof se == "function") {
        if (te = R.props, ne = (Q = se.contextType) && W[Q.__c], oe = Q ? ne ? ne.props.value : Q.__ : W, D.__c ? ie = (U = R.__c = D.__c).__ = U.__E : ("prototype" in se && se.prototype.render ? R.__c = U = new se(te, oe) : (R.__c = U = new d$h(te, oe), U.constructor = se, U.render = O$h), ne && ne.sub(U), U.props = te, U.state || (U.state = {}), U.context = oe, U.__n = W, ee = U.__d = !0, U.__h = [], U._sb = []), U.__s == null && (U.__s = U.state), se.getDerivedStateFromProps != null && (U.__s == U.state && (U.__s = s$h({}, U.__s)), s$h(U.__s, se.getDerivedStateFromProps(te, U.__s))), J = U.props, X = U.state, ee)
          se.getDerivedStateFromProps == null && U.componentWillMount != null && U.componentWillMount(), U.componentDidMount != null && U.__h.push(U.componentDidMount);
        else {
          if (se.getDerivedStateFromProps == null && te !== J && U.componentWillReceiveProps != null && U.componentWillReceiveProps(te, oe), !U.__e && U.shouldComponentUpdate != null && U.shouldComponentUpdate(te, U.__s, oe) === !1 || R.__v === D.__v) {
            for (U.props = te, U.state = U.__s, R.__v !== D.__v && (U.__d = !1), U.__v = R, R.__e = D.__e, R.__k = D.__k, R.__k.forEach(function(ae) {
              ae && (ae.__ = R);
            }), le = 0; le < U._sb.length; le++)
              U.__h.push(U._sb[le]);
            U._sb = [], U.__h.length && Y.push(U);
            break e;
          }
          U.componentWillUpdate != null && U.componentWillUpdate(te, U.__s, oe), U.componentDidUpdate != null && U.__h.push(function() {
            U.componentDidUpdate(J, X, Z);
          });
        }
        if (U.context = oe, U.props = te, U.__v = R, U.__P = E, ce = l$l.__r, ue = 0, "prototype" in se && se.prototype.render) {
          for (U.state = U.__s, U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), pe = 0; pe < U._sb.length; pe++)
            U.__h.push(U._sb[pe]);
          U._sb = [];
        } else
          do
            U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), U.state = U.__s;
          while (U.__d && ++ue < 25);
        U.state = U.__s, U.getChildContext != null && (W = s$h(s$h({}, W), U.getChildContext())), ee || U.getSnapshotBeforeUpdate == null || (Z = U.getSnapshotBeforeUpdate(J, X)), de = Q != null && Q.type === p$h && Q.key == null ? Q.props.children : Q, w$h(E, Array.isArray(de) ? de : [de], R, D, W, V, F, Y, G, K), U.base = R.__e, R.__h = null, U.__h.length && Y.push(U), ie && (U.__E = U.__ = null), U.__e = !1;
      } else
        F == null && R.__v === D.__v ? (R.__k = D.__k, R.__e = D.__e) : R.__e = L$h(D.__e, R, D, W, V, F, Y, K);
    (Q = l$l.diffed) && Q(R);
  } catch (ae) {
    R.__v = null, (K || F != null) && (R.__e = G, R.__h = !!K, F[F.indexOf(G)] = null), l$l.__e(ae, R, D);
  }
}
function z$h(E, R) {
  l$l.__c && l$l.__c(R, E), E.some(function(D) {
    try {
      E = D.__h, D.__h = [], E.some(function(W) {
        W.call(D);
      });
    } catch (W) {
      l$l.__e(W, D.__v);
    }
  });
}
function L$h(E, R, D, W, V, F, Y, G) {
  var K, Q, U, ee = D.props, J = R.props, X = R.type, Z = 0;
  if (X === "svg" && (V = !0), F != null) {
    for (; Z < F.length; Z++)
      if ((K = F[Z]) && "setAttribute" in K == !!X && (X ? K.localName === X : K.nodeType === 3)) {
        E = K, F[Z] = null;
        break;
      }
  }
  if (E == null) {
    if (X === null)
      return document.createTextNode(J);
    E = V ? document.createElementNS("http://www.w3.org/2000/svg", X) : document.createElement(X, J.is && J), F = null, G = !1;
  }
  if (X === null)
    ee === J || G && E.data === J || (E.data = J);
  else {
    if (F = F && n$i.call(E.childNodes), Q = (ee = D.props || f$h).dangerouslySetInnerHTML, U = J.dangerouslySetInnerHTML, !G) {
      if (F != null)
        for (ee = {}, Z = 0; Z < E.attributes.length; Z++)
          ee[E.attributes[Z].name] = E.attributes[Z].value;
      (U || Q) && (U && (Q && U.__html == Q.__html || U.__html === E.innerHTML) || (E.innerHTML = U && U.__html || ""));
    }
    if (C$h(E, J, ee, V, G), U)
      R.__k = [];
    else if (Z = R.props.children, w$h(E, Array.isArray(Z) ? Z : [Z], R, D, W, V && X !== "foreignObject", F, Y, F ? F[0] : D.__k && _$C(D, 0), G), F != null)
      for (Z = F.length; Z--; )
        F[Z] != null && a$h(F[Z]);
    G || ("value" in J && (Z = J.value) !== void 0 && (Z !== E.value || X === "progress" && !Z || X === "option" && Z !== ee.value) && H$h(E, "value", Z, ee.value, !1), "checked" in J && (Z = J.checked) !== void 0 && Z !== E.checked && H$h(E, "checked", Z, ee.checked, !1));
  }
  return E;
}
function M$h(E, R, D) {
  try {
    typeof E == "function" ? E(R) : E.current = R;
  } catch (W) {
    l$l.__e(W, D);
  }
}
function N$h(E, R, D) {
  var W, V;
  if (l$l.unmount && l$l.unmount(E), (W = E.ref) && (W.current && W.current !== E.__e || M$h(W, null, R)), (W = E.__c) != null) {
    if (W.componentWillUnmount)
      try {
        W.componentWillUnmount();
      } catch (F) {
        l$l.__e(F, R);
      }
    W.base = W.__P = null, E.__c = void 0;
  }
  if (W = E.__k)
    for (V = 0; V < W.length; V++)
      W[V] && N$h(W[V], R, D || typeof E.type != "function");
  D || E.__e == null || a$h(E.__e), E.__ = E.__e = E.__d = void 0;
}
function O$h(E, R, D) {
  return this.constructor(E, D);
}
function P$5(E, R, D) {
  var W, V, F;
  l$l.__ && l$l.__(E, R), V = (W = typeof D == "function") ? null : D && D.__k || R.__k, F = [], j$h(R, E = (!W && D || R).__k = h$a(p$h, null, [E]), V || f$h, f$h, R.ownerSVGElement !== void 0, !W && D ? [D] : V ? null : R.firstChild ? n$i.call(R.childNodes) : null, F, !W && D ? D : V ? V.__e : R.firstChild, W), z$h(F, E);
}
n$i = e$h.slice, l$l = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} }, u$h = 0, i$6 = function(E) {
  return E != null && E.constructor === void 0;
}, d$h.prototype.setState = function(E, R) {
  var D;
  D = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s$h({}, this.state), typeof E == "function" && (E = E(s$h({}, D), this.props)), E && s$h(D, E), E != null && this.__v && (R && this._sb.push(R), b$h(this));
}, d$h.prototype.forceUpdate = function(E) {
  this.__v && (this.__e = !0, E && this.__h.push(E), b$h(this));
}, d$h.prototype.render = p$h, t$i = [], g$h.__r = 0;
var _$B = 0;
function o$B(E, R, D, W, V) {
  var F, Y, G = {};
  for (Y in R)
    Y == "ref" ? F = R[Y] : G[Y] = R[Y];
  var K = { type: E, props: G, key: D, ref: F, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_$B, __source: V, __self: W };
  if (typeof E == "function" && (F = E.defaultProps))
    for (Y in F)
      G[Y] === void 0 && (G[Y] = F[Y]);
  return l$l.vnode && l$l.vnode(K), K;
}
var ot;
class EventEmitter {
  constructor(R = "") {
    he(this, ot, void 0);
    typeof R == "object" ? xe(this, ot, R) : xe(this, ot, document.appendChild(document.createComment(R)));
  }
  on(R, D, W) {
    re(this, ot).addEventListener(R, D, W);
  }
  once(R, D, W) {
    re(this, ot).addEventListener(R, D, { once: !0, ...W });
  }
  off(R, D, W) {
    re(this, ot).removeEventListener(R, D, W);
  }
  emit(R) {
    return re(this, ot).dispatchEvent(R), R;
  }
}
ot = new WeakMap();
const nativeEvents = /* @__PURE__ */ new Set([
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
class EventBus extends EventEmitter {
  on(R, D, W) {
    super.on(R, D, W);
  }
  off(R, D, W) {
    super.off(R, D, W);
  }
  once(R, D, W) {
    super.once(R, D, W);
  }
  emit(R, D) {
    return typeof R == "string" && (nativeEvents.has(R) ? (R = new Event(R), Object.assign(R, { detail: D })) : R = new CustomEvent(R, { detail: D })), super.emit(EventBus.createEvent(R, D));
  }
  static createEvent(R, D) {
    return typeof R == "string" && (nativeEvents.has(R) ? (R = new Event(R), Object.assign(R, { detail: D })) : R = new CustomEvent(R, { detail: D })), R;
  }
}
var rt, ln, gt, rn;
class EventHub extends EventBus {
  constructor(D = "", W) {
    super(D);
    he(this, gt);
    he(this, rt, /* @__PURE__ */ new Map());
    he(this, ln, void 0);
    xe(this, ln, W == null ? void 0 : W.customEventSuffix);
  }
  on(D, W, V) {
    D = ke(this, gt, rn).call(this, D), super.on(D, W, V), re(this, rt).set(W, [D, V]);
  }
  off(D, W, V) {
    D = ke(this, gt, rn).call(this, D), super.off(D, W, V), re(this, rt).delete(W);
  }
  once(D, W, V) {
    D = ke(this, gt, rn).call(this, D);
    const F = (Y) => {
      W(Y), re(this, rt).delete(F);
    };
    super.once(D, F, V), re(this, rt).set(F, [D, V]);
  }
  emit(D, W) {
    return typeof D == "string" && (D = ke(this, gt, rn).call(this, D)), super.emit(D, W);
  }
  offAll() {
    Array.from(re(this, rt).entries()).forEach(([D, [W, V]]) => {
      super.off(W, D, V);
    }), re(this, rt).clear();
  }
}
rt = new WeakMap(), ln = new WeakMap(), gt = new WeakSet(), rn = function(D) {
  const W = re(this, ln);
  return nativeEvents.has(D) || typeof W != "string" || D.endsWith(W) ? D : `${D}${W}`;
};
function deepGetPath(E, R) {
  if (E == null)
    return [E, void 0];
  typeof R == "string" && (R = R.split("."));
  const D = R.join(".");
  let W = E;
  const V = [W];
  for (; typeof W == "object" && W !== null && R.length; ) {
    let F = R.shift(), Y;
    const G = F.indexOf("[");
    if (G > 0 && G < F.length - 1 && F.endsWith("]") && (Y = F.substring(G + 1, F.length - 1), F = F.substring(0, G)), W = W[F], V.push(W), Y !== void 0)
      if (typeof W == "object" && W !== null)
        W instanceof Map ? W = W.get(Y) : W = W[Y], V.push(W);
      else
        throw new Error(`Cannot access property "${F}[${Y}]", the full path is "${D}".`);
  }
  if (R.length)
    throw new Error(`Cannot access property with rest path "${R.join(".")}", the full path is "${D}".`);
  return V;
}
function deepGet(E, R, D) {
  const W = deepGetPath(E, R), V = W[W.length - 1];
  return V === void 0 ? D : V;
}
function isObject(E) {
  return !!E && typeof E == "object" && !Array.isArray(E);
}
function mergeDeep(E, ...R) {
  if (!R.length)
    return E;
  const D = R.shift();
  if (isObject(E) && isObject(D))
    for (const W in D)
      isObject(D[W]) ? (E[W] || Object.assign(E, { [W]: {} }), mergeDeep(E[W], D[W])) : Object.assign(E, { [W]: D[W] });
  return mergeDeep(E, ...R);
}
function formatString(E, ...R) {
  if (R.length === 0)
    return E;
  if (R.length === 1 && typeof R[0] == "object" && R[0]) {
    const D = R[0];
    return Object.keys(D).forEach((W) => {
      const V = D[W] ?? 0;
      E = E.replace(new RegExp(`\\{${W}\\}`, "g"), `${V}`);
    }), E;
  }
  for (let D = 0; D < R.length; D++) {
    const W = R[D] ?? "";
    E = E.replace(new RegExp(`\\{${D}\\}`, "g"), `${W}`);
  }
  return E;
}
var BYTE_UNITS = /* @__PURE__ */ ((E) => (E[E.B = 1] = "B", E[E.KB = 1024] = "KB", E[E.MB = 1048576] = "MB", E[E.GB = 1073741824] = "GB", E[E.TB = 1099511627776] = "TB", E))(BYTE_UNITS || {});
function formatBytes(E, R = 2, D = "") {
  return Number.isNaN(E) ? "?KB" : (D || (E < 1024 ? D = "B" : E < 1048576 ? D = "KB" : E < 1073741824 ? D = "MB" : E < 1099511627776 ? D = "GB" : D = "TB"), (E / BYTE_UNITS[D]).toFixed(R) + D);
}
const convertBytes = (E) => {
  const R = /^[0-9]*(B|KB|MB|GB|TB)$/;
  E = E.toUpperCase();
  const D = E.match(R);
  if (!D)
    return 0;
  const W = D[1];
  return E = E.replace(W, ""), Number.parseInt(E, 10) * BYTE_UNITS[W];
};
var Lr;
let globalLangCode = ((Lr = document.documentElement.getAttribute("lang")) == null ? void 0 : Lr.toLowerCase()) ?? "zh_cn", globalLangMap;
function getLangCode() {
  return globalLangCode;
}
function setLangCode(E) {
  globalLangCode = E.toLowerCase();
}
function addI18nMap(E, R) {
  globalLangMap || (globalLangMap = {}), typeof E == "string" && (E = { [E]: R ?? {} }), mergeDeep(globalLangMap, E);
}
function i18n(E, R, D, W, V, F) {
  Array.isArray(E) ? globalLangMap && E.unshift(globalLangMap) : E = globalLangMap ? [globalLangMap, E] : [E], typeof D == "string" && (F = V, V = W, W = D, D = void 0);
  const Y = V || globalLangCode;
  let G;
  for (const K of E) {
    if (!K)
      continue;
    const Q = K[Y];
    if (!Q)
      continue;
    const U = F && K === globalLangMap ? `${F}.${R}` : R;
    if (G = deepGet(Q, U), G !== void 0)
      break;
  }
  return G === void 0 ? W : D ? formatString(G, ...Array.isArray(D) ? D : [D]) : G;
}
i18n.addLang = addI18nMap;
i18n.getCode = getLangCode;
i18n.setCode = setLangCode;
function parseDataset(E) {
  return Object.fromEntries(Object.entries(E).map(([R, D]) => {
    if (typeof D == "string")
      try {
        D = JSON.parse(D);
      } catch {
      }
    return [R, D];
  }));
}
const allComponents = /* @__PURE__ */ new Map();
var it, Tt, qe;
class ComponentBase {
  constructor(R, D) {
    he(this, it, void 0);
    he(this, Tt, void 0);
    he(this, qe, void 0);
    R = typeof R == "string" ? document.querySelector(R) : R, this.constructor.EVENTS && xe(this, qe, new EventHub(R, { customEventSuffix: `.${this.constructor.KEY}` })), xe(this, it, { ...this.constructor.DEFAULT }), this.setOptions({ ...R instanceof HTMLElement ? parseDataset(R.dataset) : null, ...D }), this.constructor.all.set(R, this), xe(this, Tt, R), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return re(this, it);
  }
  get element() {
    return re(this, Tt);
  }
  get events() {
    return re(this, qe);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(R) {
    return R && Object.assign(re(this, it), R), re(this, it);
  }
  render(R) {
    this.setOptions(R);
  }
  destroy() {
    this.constructor.all.delete(re(this, Tt)), re(this, qe) && (this.emit("destroyed", this), re(this, qe).offAll());
  }
  on(R, D, W) {
    var V;
    (V = re(this, qe)) == null || V.on(R, D, W);
  }
  once(R, D, W) {
    var V;
    (V = re(this, qe)) == null || V.once(R, D, W);
  }
  off(R, D, W) {
    var V;
    (V = re(this, qe)) == null || V.off(R, D, W);
  }
  emit(R, D) {
    var Y;
    let W = EventHub.createEvent(R, D);
    const V = `on${R[0].toUpperCase()}${R.substring(1)}`, F = re(this, it)[V];
    return F && F(W) === !1 && (W.preventDefault(), W.stopPropagation()), W = (Y = re(this, qe)) == null ? void 0 : Y.emit(R, D), W;
  }
  i18n(R, D, W) {
    return i18n(re(this, it).i18n, R, D, W, this.options.lang, this.constructor.NAME) ?? `{i18n:${R}}`;
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
    const R = this.NAME;
    if (allComponents.has(R))
      return allComponents.get(R);
    const D = /* @__PURE__ */ new Map();
    return allComponents.set(R, D), D;
  }
  static getAll() {
    return this.all;
  }
  static get(R) {
    return this.all.get(R);
  }
  static ensure(R, D) {
    return this.get(R) || new this(R, D);
  }
}
it = new WeakMap(), Tt = new WeakMap(), qe = new WeakMap(), me(ComponentBase, "EVENTS", !1), me(ComponentBase, "DEFAULT", {});
class ComponentFromReact extends ComponentBase {
  constructor() {
    super(...arguments);
    me(this, "ref", y$8());
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
  render(D) {
    const W = this.constructor.Component;
    P$5(/* @__PURE__ */ o$B(W, { ref: this.ref, ...this.setOptions(D) }), this.element);
  }
}
me(ComponentFromReact, "Component");
var n$h, l$k, u$g, i$5, t$h, o$A, f$g = {}, e$g = [], c$g = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$g(E, R) {
  for (var D in R)
    E[D] = R[D];
  return E;
}
function a$g(E) {
  var R = E.parentNode;
  R && R.removeChild(E);
}
function h$9(E, R, D) {
  var W, V, F, Y = {};
  for (F in R)
    F == "key" ? W = R[F] : F == "ref" ? V = R[F] : Y[F] = R[F];
  if (arguments.length > 2 && (Y.children = arguments.length > 3 ? n$h.call(arguments, 2) : D), typeof E == "function" && E.defaultProps != null)
    for (F in E.defaultProps)
      Y[F] === void 0 && (Y[F] = E.defaultProps[F]);
  return v$g(E, Y, W, V, null);
}
function v$g(E, R, D, W, V) {
  var F = { type: E, props: R, key: D, ref: W, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: V ?? ++u$g };
  return V == null && l$k.vnode != null && l$k.vnode(F), F;
}
function y$7() {
  return { current: null };
}
function p$g(E) {
  return E.children;
}
function d$g(E, R) {
  this.props = E, this.context = R;
}
function _$A(E, R) {
  if (R == null)
    return E.__ ? _$A(E.__, E.__.__k.indexOf(E) + 1) : null;
  for (var D; R < E.__k.length; R++)
    if ((D = E.__k[R]) != null && D.__e != null)
      return D.__e;
  return typeof E.type == "function" ? _$A(E) : null;
}
function k$g(E) {
  var R, D;
  if ((E = E.__) != null && E.__c != null) {
    for (E.__e = E.__c.base = null, R = 0; R < E.__k.length; R++)
      if ((D = E.__k[R]) != null && D.__e != null) {
        E.__e = E.__c.base = D.__e;
        break;
      }
    return k$g(E);
  }
}
function b$g(E) {
  (!E.__d && (E.__d = !0) && t$h.push(E) && !g$g.__r++ || o$A !== l$k.debounceRendering) && ((o$A = l$k.debounceRendering) || setTimeout)(g$g);
}
function g$g() {
  for (var E; g$g.__r = t$h.length; )
    E = t$h.sort(function(R, D) {
      return R.__v.__b - D.__v.__b;
    }), t$h = [], E.some(function(R) {
      var D, W, V, F, Y, G;
      R.__d && (Y = (F = (D = R).__v).__e, (G = D.__P) && (W = [], (V = s$g({}, F)).__v = F.__v + 1, j$g(G, F, V, D.__n, G.ownerSVGElement !== void 0, F.__h != null ? [Y] : null, W, Y ?? _$A(F), F.__h), z$g(W, F), F.__e != Y && k$g(F)));
    });
}
function w$g(E, R, D, W, V, F, Y, G, K, Q) {
  var U, ee, J, X, Z, ie, te, ne = W && W.__k || e$g, oe = ne.length;
  for (D.__k = [], U = 0; U < R.length; U++)
    if ((X = D.__k[U] = (X = R[U]) == null || typeof X == "boolean" ? null : typeof X == "string" || typeof X == "number" || typeof X == "bigint" ? v$g(null, X, null, null, X) : Array.isArray(X) ? v$g(p$g, { children: X }, null, null, null) : X.__b > 0 ? v$g(X.type, X.props, X.key, X.ref ? X.ref : null, X.__v) : X) != null) {
      if (X.__ = D, X.__b = D.__b + 1, (J = ne[U]) === null || J && X.key == J.key && X.type === J.type)
        ne[U] = void 0;
      else
        for (ee = 0; ee < oe; ee++) {
          if ((J = ne[ee]) && X.key == J.key && X.type === J.type) {
            ne[ee] = void 0;
            break;
          }
          J = null;
        }
      j$g(E, X, J = J || f$g, V, F, Y, G, K, Q), Z = X.__e, (ee = X.ref) && J.ref != ee && (te || (te = []), J.ref && te.push(J.ref, null, X), te.push(ee, X.__c || Z, X)), Z != null ? (ie == null && (ie = Z), typeof X.type == "function" && X.__k === J.__k ? X.__d = K = m$h(X, K, E) : K = A$g(E, X, J, ne, Z, K), typeof D.type == "function" && (D.__d = K)) : K && J.__e == K && K.parentNode != E && (K = _$A(J));
    }
  for (D.__e = ie, U = oe; U--; )
    ne[U] != null && N$g(ne[U], ne[U]);
  if (te)
    for (U = 0; U < te.length; U++)
      M$g(te[U], te[++U], te[++U]);
}
function m$h(E, R, D) {
  for (var W, V = E.__k, F = 0; V && F < V.length; F++)
    (W = V[F]) && (W.__ = E, R = typeof W.type == "function" ? m$h(W, R, D) : A$g(D, W, W, V, W.__e, R));
  return R;
}
function A$g(E, R, D, W, V, F) {
  var Y, G, K;
  if (R.__d !== void 0)
    Y = R.__d, R.__d = void 0;
  else if (D == null || V != F || V.parentNode == null)
    e:
      if (F == null || F.parentNode !== E)
        E.appendChild(V), Y = null;
      else {
        for (G = F, K = 0; (G = G.nextSibling) && K < W.length; K += 2)
          if (G == V)
            break e;
        E.insertBefore(V, F), Y = F;
      }
  return Y !== void 0 ? Y : V.nextSibling;
}
function C$g(E, R, D, W, V) {
  var F;
  for (F in D)
    F === "children" || F === "key" || F in R || H$g(E, F, null, D[F], W);
  for (F in R)
    V && typeof R[F] != "function" || F === "children" || F === "key" || F === "value" || F === "checked" || D[F] === R[F] || H$g(E, F, R[F], D[F], W);
}
function $$h(E, R, D) {
  R[0] === "-" ? E.setProperty(R, D) : E[R] = D == null ? "" : typeof D != "number" || c$g.test(R) ? D : D + "px";
}
function H$g(E, R, D, W, V) {
  var F;
  e:
    if (R === "style")
      if (typeof D == "string")
        E.style.cssText = D;
      else {
        if (typeof W == "string" && (E.style.cssText = W = ""), W)
          for (R in W)
            D && R in D || $$h(E.style, R, "");
        if (D)
          for (R in D)
            W && D[R] === W[R] || $$h(E.style, R, D[R]);
      }
    else if (R[0] === "o" && R[1] === "n")
      F = R !== (R = R.replace(/Capture$/, "")), R = R.toLowerCase() in E ? R.toLowerCase().slice(2) : R.slice(2), E.l || (E.l = {}), E.l[R + F] = D, D ? W || E.addEventListener(R, F ? T$g : I$g, F) : E.removeEventListener(R, F ? T$g : I$g, F);
    else if (R !== "dangerouslySetInnerHTML") {
      if (V)
        R = R.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (R !== "href" && R !== "list" && R !== "form" && R !== "tabIndex" && R !== "download" && R in E)
        try {
          E[R] = D ?? "";
          break e;
        } catch {
        }
      typeof D == "function" || (D == null || D === !1 && R.indexOf("-") == -1 ? E.removeAttribute(R) : E.setAttribute(R, D));
    }
}
function I$g(E) {
  this.l[E.type + !1](l$k.event ? l$k.event(E) : E);
}
function T$g(E) {
  this.l[E.type + !0](l$k.event ? l$k.event(E) : E);
}
function j$g(E, R, D, W, V, F, Y, G, K) {
  var Q, U, ee, J, X, Z, ie, te, ne, oe, le, ce, ue, pe, de, se = R.type;
  if (R.constructor !== void 0)
    return null;
  D.__h != null && (K = D.__h, G = R.__e = D.__e, R.__h = null, F = [G]), (Q = l$k.__b) && Q(R);
  try {
    e:
      if (typeof se == "function") {
        if (te = R.props, ne = (Q = se.contextType) && W[Q.__c], oe = Q ? ne ? ne.props.value : Q.__ : W, D.__c ? ie = (U = R.__c = D.__c).__ = U.__E : ("prototype" in se && se.prototype.render ? R.__c = U = new se(te, oe) : (R.__c = U = new d$g(te, oe), U.constructor = se, U.render = O$g), ne && ne.sub(U), U.props = te, U.state || (U.state = {}), U.context = oe, U.__n = W, ee = U.__d = !0, U.__h = [], U._sb = []), U.__s == null && (U.__s = U.state), se.getDerivedStateFromProps != null && (U.__s == U.state && (U.__s = s$g({}, U.__s)), s$g(U.__s, se.getDerivedStateFromProps(te, U.__s))), J = U.props, X = U.state, ee)
          se.getDerivedStateFromProps == null && U.componentWillMount != null && U.componentWillMount(), U.componentDidMount != null && U.__h.push(U.componentDidMount);
        else {
          if (se.getDerivedStateFromProps == null && te !== J && U.componentWillReceiveProps != null && U.componentWillReceiveProps(te, oe), !U.__e && U.shouldComponentUpdate != null && U.shouldComponentUpdate(te, U.__s, oe) === !1 || R.__v === D.__v) {
            for (U.props = te, U.state = U.__s, R.__v !== D.__v && (U.__d = !1), U.__v = R, R.__e = D.__e, R.__k = D.__k, R.__k.forEach(function(ae) {
              ae && (ae.__ = R);
            }), le = 0; le < U._sb.length; le++)
              U.__h.push(U._sb[le]);
            U._sb = [], U.__h.length && Y.push(U);
            break e;
          }
          U.componentWillUpdate != null && U.componentWillUpdate(te, U.__s, oe), U.componentDidUpdate != null && U.__h.push(function() {
            U.componentDidUpdate(J, X, Z);
          });
        }
        if (U.context = oe, U.props = te, U.__v = R, U.__P = E, ce = l$k.__r, ue = 0, "prototype" in se && se.prototype.render) {
          for (U.state = U.__s, U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), pe = 0; pe < U._sb.length; pe++)
            U.__h.push(U._sb[pe]);
          U._sb = [];
        } else
          do
            U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), U.state = U.__s;
          while (U.__d && ++ue < 25);
        U.state = U.__s, U.getChildContext != null && (W = s$g(s$g({}, W), U.getChildContext())), ee || U.getSnapshotBeforeUpdate == null || (Z = U.getSnapshotBeforeUpdate(J, X)), de = Q != null && Q.type === p$g && Q.key == null ? Q.props.children : Q, w$g(E, Array.isArray(de) ? de : [de], R, D, W, V, F, Y, G, K), U.base = R.__e, R.__h = null, U.__h.length && Y.push(U), ie && (U.__E = U.__ = null), U.__e = !1;
      } else
        F == null && R.__v === D.__v ? (R.__k = D.__k, R.__e = D.__e) : R.__e = L$g(D.__e, R, D, W, V, F, Y, K);
    (Q = l$k.diffed) && Q(R);
  } catch (ae) {
    R.__v = null, (K || F != null) && (R.__e = G, R.__h = !!K, F[F.indexOf(G)] = null), l$k.__e(ae, R, D);
  }
}
function z$g(E, R) {
  l$k.__c && l$k.__c(R, E), E.some(function(D) {
    try {
      E = D.__h, D.__h = [], E.some(function(W) {
        W.call(D);
      });
    } catch (W) {
      l$k.__e(W, D.__v);
    }
  });
}
function L$g(E, R, D, W, V, F, Y, G) {
  var K, Q, U, ee = D.props, J = R.props, X = R.type, Z = 0;
  if (X === "svg" && (V = !0), F != null) {
    for (; Z < F.length; Z++)
      if ((K = F[Z]) && "setAttribute" in K == !!X && (X ? K.localName === X : K.nodeType === 3)) {
        E = K, F[Z] = null;
        break;
      }
  }
  if (E == null) {
    if (X === null)
      return document.createTextNode(J);
    E = V ? document.createElementNS("http://www.w3.org/2000/svg", X) : document.createElement(X, J.is && J), F = null, G = !1;
  }
  if (X === null)
    ee === J || G && E.data === J || (E.data = J);
  else {
    if (F = F && n$h.call(E.childNodes), Q = (ee = D.props || f$g).dangerouslySetInnerHTML, U = J.dangerouslySetInnerHTML, !G) {
      if (F != null)
        for (ee = {}, Z = 0; Z < E.attributes.length; Z++)
          ee[E.attributes[Z].name] = E.attributes[Z].value;
      (U || Q) && (U && (Q && U.__html == Q.__html || U.__html === E.innerHTML) || (E.innerHTML = U && U.__html || ""));
    }
    if (C$g(E, J, ee, V, G), U)
      R.__k = [];
    else if (Z = R.props.children, w$g(E, Array.isArray(Z) ? Z : [Z], R, D, W, V && X !== "foreignObject", F, Y, F ? F[0] : D.__k && _$A(D, 0), G), F != null)
      for (Z = F.length; Z--; )
        F[Z] != null && a$g(F[Z]);
    G || ("value" in J && (Z = J.value) !== void 0 && (Z !== E.value || X === "progress" && !Z || X === "option" && Z !== ee.value) && H$g(E, "value", Z, ee.value, !1), "checked" in J && (Z = J.checked) !== void 0 && Z !== E.checked && H$g(E, "checked", Z, ee.checked, !1));
  }
  return E;
}
function M$g(E, R, D) {
  try {
    typeof E == "function" ? E(R) : E.current = R;
  } catch (W) {
    l$k.__e(W, D);
  }
}
function N$g(E, R, D) {
  var W, V;
  if (l$k.unmount && l$k.unmount(E), (W = E.ref) && (W.current && W.current !== E.__e || M$g(W, null, R)), (W = E.__c) != null) {
    if (W.componentWillUnmount)
      try {
        W.componentWillUnmount();
      } catch (F) {
        l$k.__e(F, R);
      }
    W.base = W.__P = null, E.__c = void 0;
  }
  if (W = E.__k)
    for (V = 0; V < W.length; V++)
      W[V] && N$g(W[V], R, D || typeof E.type != "function");
  D || E.__e == null || a$g(E.__e), E.__ = E.__e = E.__d = void 0;
}
function O$g(E, R, D) {
  return this.constructor(E, D);
}
n$h = e$g.slice, l$k = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} }, u$g = 0, i$5 = function(E) {
  return E != null && E.constructor === void 0;
}, d$g.prototype.setState = function(E, R) {
  var D;
  D = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s$g({}, this.state), typeof E == "function" && (E = E(s$g({}, D), this.props)), E && s$g(D, E), E != null && this.__v && (R && this._sb.push(R), b$g(this));
}, d$g.prototype.forceUpdate = function(E) {
  this.__v && (this.__e = !0, E && this.__h.push(E), b$g(this));
}, d$g.prototype.render = p$g, t$h = [], g$g.__r = 0;
var _$z = 0;
function o$z(E, R, D, W, V) {
  var F, Y, G = {};
  for (Y in R)
    Y == "ref" ? F = R[Y] : G[Y] = R[Y];
  var K = { type: E, props: G, key: D, ref: F, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_$z, __source: V, __self: W };
  if (typeof E == "function" && (F = E.defaultProps))
    for (Y in F)
      G[Y] === void 0 && (G[Y] = F[Y]);
  return l$k.vnode && l$k.vnode(K), K;
}
function getClassList(...E) {
  const R = [], D = /* @__PURE__ */ new Map(), W = (V, F) => {
    if (Array.isArray(V) && (F = V[1], V = V[0]), !V.length)
      return;
    const Y = D.get(V);
    typeof Y == "number" ? R[Y][1] = !!F : (D.set(V, R.length), R.push([V, !!F]));
  };
  return E.forEach((V) => {
    typeof V == "function" && (V = V()), Array.isArray(V) ? getClassList(...V).forEach(W) : V && typeof V == "object" ? Object.entries(V).forEach(W) : typeof V == "string" && V.split(" ").forEach((F) => W(F, !0));
  }), R.sort((V, F) => (D.get(V[0]) || 0) - (D.get(F[0]) || 0));
}
const classes = (...E) => getClassList(...E).reduce((R, [D, W]) => (W && R.push(D), R), []).join(" "), caret = "";
function ActionDivider({
  component: E = "div",
  className: R,
  children: D,
  style: W,
  attrs: V
}) {
  return h$9(E, {
    className: classes(R),
    style: W,
    ...V
  }, D);
}
function ActionItem({
  component: E = "a",
  className: R,
  children: D,
  attrs: W,
  url: V,
  disabled: F,
  active: Y,
  icon: G,
  text: K,
  target: Q,
  trailingIcon: U,
  hint: ee,
  style: J,
  onClick: X
}) {
  const Z = [
    typeof G == "string" ? /* @__PURE__ */ o$z("i", { class: `icon ${G}` }) : G,
    /* @__PURE__ */ o$z("span", { className: "text", children: K }),
    typeof D == "function" ? D() : D,
    typeof U == "string" ? /* @__PURE__ */ o$z("i", { class: `icon ${U}` }) : U
  ];
  return h$9(E, {
    className: classes(R, { disabled: F, active: Y }),
    title: ee,
    [E === "a" ? "href" : "data-url"]: V,
    [E === "a" ? "target" : "data-target"]: Q,
    style: J,
    onClick: X,
    ...W
  }, ...Z);
}
function ActionHeading({
  component: E = "div",
  className: R,
  text: D,
  attrs: W,
  children: V,
  style: F,
  onClick: Y
}) {
  return h$9(E, {
    className: classes(R),
    style: F,
    onClick: Y,
    ...W
  }, D, typeof V == "function" ? V() : V);
}
function ActionSpace({
  component: E = "div",
  className: R,
  style: D,
  space: W,
  flex: V,
  attrs: F,
  onClick: Y,
  children: G
}) {
  return h$9(E, {
    className: classes(R),
    style: { width: W, height: W, flex: V, ...D },
    onClick: Y,
    ...F
  }, G);
}
function renderCustomResult(E) {
  const {
    tag: R,
    className: D,
    style: W,
    renders: V,
    generateArgs: F = [],
    generatorThis: Y,
    generators: G,
    onGenerate: K,
    onRenderItem: Q,
    ...U
  } = E, ee = [D], J = { ...W }, X = [], Z = [];
  return V.forEach((ie) => {
    const te = [];
    typeof ie == "string" && G && G[ie] && (ie = G[ie]), typeof ie == "function" ? K ? te.push(...K.call(Y, ie, X, ...F)) : te.push(...ie.call(Y, X, ...F) ?? []) : te.push(ie), te.forEach((ne) => {
      ne != null && (typeof ne == "object" && !i$6(ne) && ("html" in ne || "__html" in ne || "className" in ne || "style" in ne || "attrs" in ne || "children" in ne) ? ne.html ? X.push(
        /* @__PURE__ */ o$B("div", { className: classes(ne.className), style: ne.style, dangerouslySetInnerHTML: { __html: ne.html }, ...ne.attrs ?? {} })
      ) : ne.__html ? Z.push(ne.__html) : (ne.style && Object.assign(J, ne.style), ne.className && ee.push(ne.className), ne.children && X.push(ne.children), ne.attrs && Object.assign(U, ne.attrs)) : X.push(ne));
    });
  }), Z.length && Object.assign(U, { dangerouslySetInnerHTML: { __html: Z } }), [{
    className: classes(ee),
    style: J,
    ...U
  }, X];
}
function CustomRender({
  tag: E = "div",
  ...R
}) {
  const [D, W] = renderCustomResult(R);
  return h$a(E, D, ...W);
}
function ActionCustom({ type: E, ...R }) {
  return /* @__PURE__ */ o$z(CustomRender, { ...R });
}
function ActionBasic({
  component: E = "div",
  className: R,
  children: D,
  style: W,
  attrs: V
}) {
  return h$9(E, {
    className: classes(R),
    style: W,
    ...V
  }, D);
}
var tn;
let ActionMenu$1 = (tn = class extends d$g {
  constructor() {
    super(...arguments);
    me(this, "ref", y$7());
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
    var D, W;
    (W = (D = this.props).beforeDestroy) == null || W.call(D, { menu: this });
  }
  afterRender(D) {
    var W, V;
    (V = (W = this.props).afterRender) == null || V.call(W, { menu: this, firstRender: D });
  }
  handleItemClick(D, W, V, F) {
    V && V.call(F.target, F);
    const { onClickItem: Y } = this.props;
    Y && Y({ menu: this, item: D, index: W, event: F });
  }
  beforeRender() {
    var V;
    const D = { ...this.props };
    typeof D.items == "function" && (D.items = D.items(this));
    const W = (V = D.beforeRender) == null ? void 0 : V.call(D, { menu: this, options: D });
    return W && Object.assign(D, W), D;
  }
  getItemRenderProps(D, W, V) {
    const { commonItemProps: F, onClickItem: Y } = D, G = { key: V, ...W };
    return F && Object.assign(G, F[W.type || "item"]), (Y || W.onClick) && (G.onClick = this.handleItemClick.bind(this, G, V, W.onClick)), G.className = classes(G.className), G;
  }
  renderItem(D, W, V) {
    const F = this.getItemRenderProps(D, W, V), { itemRender: Y } = D;
    if (Y) {
      if (typeof Y == "object") {
        const te = Y[W.type || "item"];
        if (te)
          return /* @__PURE__ */ o$z(te, { ...F });
      } else if (typeof Y == "function") {
        const te = Y.call(this, F, h$9);
        if (i$5(te))
          return te;
        typeof te == "object" && Object.assign(F, te);
      }
    }
    const { type: G = "item", component: K, key: Q = V, rootAttrs: U, rootClass: ee, rootStyle: J, rootChildren: X, ...Z } = F;
    if (G === "html")
      return /* @__PURE__ */ o$z(
        "li",
        {
          className: classes("action-menu-item", `${this.name}-html`, ee, Z.className),
          ...U,
          style: J || Z.style,
          dangerouslySetInnerHTML: { __html: Z.html }
        },
        Q
      );
    const ie = !K || typeof K == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[G] || ActionMenu$1.ItemComponents[G] : K;
    return Object.assign(Z, {
      type: G,
      component: typeof K == "string" ? K : void 0
    }), this.renderTypedItem(ie, {
      className: classes(ee),
      children: X,
      style: J,
      key: Q,
      ...U
    }, {
      ...Z,
      type: G,
      component: typeof K == "string" ? K : void 0
    });
  }
  renderTypedItem(D, W, V) {
    const { children: F, className: Y, key: G, ...K } = W, { activeClass: Q = "", activeKey: U, activeIcon: ee } = this.props, J = ee && U === G ? /* @__PURE__ */ o$z("i", { className: `checked icon icon-${ee}` }) : null, X = U === G;
    return /* @__PURE__ */ o$z(
      "li",
      {
        className: classes("action-menu-item", `${this.name}-${V.type}`, Y, { [Q]: X }),
        ...K,
        children: [
          /* @__PURE__ */ o$z(D, { ...V }),
          J,
          typeof F == "function" ? F() : F
        ]
      },
      G
    );
  }
  render() {
    const D = this.beforeRender(), {
      name: W,
      style: V,
      commonItemProps: F,
      className: Y,
      items: G,
      children: K,
      itemRender: Q,
      onClickItem: U,
      beforeRender: ee,
      afterRender: J,
      beforeDestroy: X,
      activeClass: Z,
      activeKey: ie,
      ...te
    } = D, ne = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ o$z(ne, { class: classes(this.name, Y), style: V, ...te, ref: this.ref, children: [
      G && G.map(this.renderItem.bind(this, D)),
      K
    ] });
  }
}, me(tn, "ItemComponents", {
  divider: ActionDivider,
  item: ActionItem,
  heading: ActionHeading,
  space: ActionSpace,
  custom: ActionCustom,
  basic: ActionBasic
}), me(tn, "ROOT_TAG", "menu"), me(tn, "NAME", "action-menu"), tn);
class ActionMenu extends ComponentFromReact {
}
me(ActionMenu, "NAME", "actionmenu"), me(ActionMenu, "Component", ActionMenu$1);
function ActionNestedItem({
  ...E
}) {
  return /* @__PURE__ */ o$z(ActionItem, { ...E });
}
var ur, cn, Je, At;
let ActionMenuNested$1 = (ur = class extends ActionMenu$1 {
  constructor(D) {
    super(D);
    he(this, cn, /* @__PURE__ */ new Set());
    he(this, Je, void 0);
    he(this, At, (D, W, V) => {
      this.toggleNestedMenu(D, W), V.preventDefault();
    });
    xe(this, Je, D.nestedShow === void 0), re(this, Je) && (this.state = { nestedShow: D.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const D = super.beforeRender(), { nestedShow: W, nestedTrigger: V, defaultNestedShow: F, controlledMenu: Y, ...G } = D;
    return G;
  }
  renderNestedMenu(D) {
    let { items: W } = D;
    if (!W || (typeof W == "function" && (W = W(D, this)), !W.length))
      return;
    const V = this.constructor, { name: F, controlledMenu: Y, nestedShow: G, beforeDestroy: K, beforeRender: Q, itemRender: U, activeClass: ee, activeKey: J, onClickItem: X, afterRender: Z, commonItemProps: ie, activeIcon: te } = this.props;
    return /* @__PURE__ */ o$z(
      V,
      {
        items: W,
        name: F,
        nestedShow: re(this, Je) ? this.state.nestedShow : G,
        nestedTrigger: this.nestedTrigger,
        controlledMenu: Y || this,
        commonItemProps: ie,
        onClickItem: X,
        afterRender: Z,
        beforeRender: Q,
        beforeDestroy: K,
        itemRender: U,
        activeClass: ee,
        activeKey: J,
        activeIcon: te
      }
    );
  }
  isNestedItem(D) {
    return (!D.type || D.type === "item") && !!D.items;
  }
  renderToggleIcon(D, W) {
  }
  getItemRenderProps(D, W, V) {
    const F = super.getItemRenderProps(D, W, V);
    if (!this.isNestedItem(F))
      return F;
    const Y = F.key ?? V;
    re(this, cn).add(Y);
    const G = this.isNestedMenuShow(Y);
    if (G && (F.rootChildren = [
      F.rootChildren,
      this.renderNestedMenu(W)
    ], F.component = ActionNestedItem), this.nestedTrigger === "hover")
      F.rootAttrs = {
        ...F.rootAttrs,
        onMouseEnter: re(this, At).bind(this, Y, !0),
        onMouseLeave: re(this, At).bind(this, Y, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: Q } = F;
      F.onClick = (U) => {
        re(this, At).call(this, Y, void 0, U), Q == null || Q(U);
      };
    }
    const K = this.renderToggleIcon(G, F);
    return K && (F.children = [F.children, K]), F.rootClass = [F.rootClass, "has-nested-menu", G ? "show" : ""], F;
  }
  isNestedMenuShow(D) {
    const W = re(this, Je) ? this.state.nestedShow : this.props.nestedShow;
    return W && typeof W == "object" ? W[D] : !!W;
  }
  toggleNestedMenu(D, W) {
    const { controlledMenu: V } = this.props;
    if (V)
      return V.toggleNestedMenu(D, W);
    if (!re(this, Je))
      return !1;
    let { nestedShow: F = {} } = this.state;
    if (typeof F == "boolean" && (F === !0 ? F = [...re(this, cn).values()].reduce((Y, G) => (Y[G] = !0, Y), {}) : F = {}), W === void 0)
      W = !F[D];
    else if (!!F[D] == !!W)
      return !1;
    return W ? F[D] = W : delete F[D], this.setState({ nestedShow: { ...F } }), !0;
  }
  showNestedMenu(D) {
    return this.toggleNestedMenu(D, !0);
  }
  hideNestedMenu(D) {
    return this.toggleNestedMenu(D, !1);
  }
  showAllNestedMenu() {
    re(this, Je) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    re(this, Je) && this.setState({ nestedShow: !1 });
  }
}, cn = new WeakMap(), Je = new WeakMap(), At = new WeakMap(), me(ur, "ItemComponents", {
  item: ActionNestedItem
}), ur);
class ActionMenuNested extends ComponentFromReact {
}
me(ActionMenuNested, "NAME", "actionmenunested"), me(ActionMenuNested, "Component", ActionMenuNested$1);
const index$y = "", vars$7 = "", breadcrumb = "", index$x = "";
var n$g, l$j, u$f, t$g, o$y, f$f = {}, e$f = [], c$f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$f(E, R) {
  for (var D in R)
    E[D] = R[D];
  return E;
}
function a$f(E) {
  var R = E.parentNode;
  R && R.removeChild(E);
}
function h$8(E, R, D) {
  var W, V, F, Y = {};
  for (F in R)
    F == "key" ? W = R[F] : F == "ref" ? V = R[F] : Y[F] = R[F];
  if (arguments.length > 2 && (Y.children = arguments.length > 3 ? n$g.call(arguments, 2) : D), typeof E == "function" && E.defaultProps != null)
    for (F in E.defaultProps)
      Y[F] === void 0 && (Y[F] = E.defaultProps[F]);
  return v$f(E, Y, W, V, null);
}
function v$f(E, R, D, W, V) {
  var F = { type: E, props: R, key: D, ref: W, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: V ?? ++u$f };
  return V == null && l$j.vnode != null && l$j.vnode(F), F;
}
function p$f(E) {
  return E.children;
}
function d$f(E, R) {
  this.props = E, this.context = R;
}
function _$y(E, R) {
  if (R == null)
    return E.__ ? _$y(E.__, E.__.__k.indexOf(E) + 1) : null;
  for (var D; R < E.__k.length; R++)
    if ((D = E.__k[R]) != null && D.__e != null)
      return D.__e;
  return typeof E.type == "function" ? _$y(E) : null;
}
function k$f(E) {
  var R, D;
  if ((E = E.__) != null && E.__c != null) {
    for (E.__e = E.__c.base = null, R = 0; R < E.__k.length; R++)
      if ((D = E.__k[R]) != null && D.__e != null) {
        E.__e = E.__c.base = D.__e;
        break;
      }
    return k$f(E);
  }
}
function b$f(E) {
  (!E.__d && (E.__d = !0) && t$g.push(E) && !g$f.__r++ || o$y !== l$j.debounceRendering) && ((o$y = l$j.debounceRendering) || setTimeout)(g$f);
}
function g$f() {
  for (var E; g$f.__r = t$g.length; )
    E = t$g.sort(function(R, D) {
      return R.__v.__b - D.__v.__b;
    }), t$g = [], E.some(function(R) {
      var D, W, V, F, Y, G;
      R.__d && (Y = (F = (D = R).__v).__e, (G = D.__P) && (W = [], (V = s$f({}, F)).__v = F.__v + 1, j$f(G, F, V, D.__n, G.ownerSVGElement !== void 0, F.__h != null ? [Y] : null, W, Y ?? _$y(F), F.__h), z$f(W, F), F.__e != Y && k$f(F)));
    });
}
function w$f(E, R, D, W, V, F, Y, G, K, Q) {
  var U, ee, J, X, Z, ie, te, ne = W && W.__k || e$f, oe = ne.length;
  for (D.__k = [], U = 0; U < R.length; U++)
    if ((X = D.__k[U] = (X = R[U]) == null || typeof X == "boolean" ? null : typeof X == "string" || typeof X == "number" || typeof X == "bigint" ? v$f(null, X, null, null, X) : Array.isArray(X) ? v$f(p$f, { children: X }, null, null, null) : X.__b > 0 ? v$f(X.type, X.props, X.key, X.ref ? X.ref : null, X.__v) : X) != null) {
      if (X.__ = D, X.__b = D.__b + 1, (J = ne[U]) === null || J && X.key == J.key && X.type === J.type)
        ne[U] = void 0;
      else
        for (ee = 0; ee < oe; ee++) {
          if ((J = ne[ee]) && X.key == J.key && X.type === J.type) {
            ne[ee] = void 0;
            break;
          }
          J = null;
        }
      j$f(E, X, J = J || f$f, V, F, Y, G, K, Q), Z = X.__e, (ee = X.ref) && J.ref != ee && (te || (te = []), J.ref && te.push(J.ref, null, X), te.push(ee, X.__c || Z, X)), Z != null ? (ie == null && (ie = Z), typeof X.type == "function" && X.__k === J.__k ? X.__d = K = m$g(X, K, E) : K = A$f(E, X, J, ne, Z, K), typeof D.type == "function" && (D.__d = K)) : K && J.__e == K && K.parentNode != E && (K = _$y(J));
    }
  for (D.__e = ie, U = oe; U--; )
    ne[U] != null && N$f(ne[U], ne[U]);
  if (te)
    for (U = 0; U < te.length; U++)
      M$f(te[U], te[++U], te[++U]);
}
function m$g(E, R, D) {
  for (var W, V = E.__k, F = 0; V && F < V.length; F++)
    (W = V[F]) && (W.__ = E, R = typeof W.type == "function" ? m$g(W, R, D) : A$f(D, W, W, V, W.__e, R));
  return R;
}
function A$f(E, R, D, W, V, F) {
  var Y, G, K;
  if (R.__d !== void 0)
    Y = R.__d, R.__d = void 0;
  else if (D == null || V != F || V.parentNode == null)
    e:
      if (F == null || F.parentNode !== E)
        E.appendChild(V), Y = null;
      else {
        for (G = F, K = 0; (G = G.nextSibling) && K < W.length; K += 2)
          if (G == V)
            break e;
        E.insertBefore(V, F), Y = F;
      }
  return Y !== void 0 ? Y : V.nextSibling;
}
function C$f(E, R, D, W, V) {
  var F;
  for (F in D)
    F === "children" || F === "key" || F in R || H$f(E, F, null, D[F], W);
  for (F in R)
    V && typeof R[F] != "function" || F === "children" || F === "key" || F === "value" || F === "checked" || D[F] === R[F] || H$f(E, F, R[F], D[F], W);
}
function $$g(E, R, D) {
  R[0] === "-" ? E.setProperty(R, D) : E[R] = D == null ? "" : typeof D != "number" || c$f.test(R) ? D : D + "px";
}
function H$f(E, R, D, W, V) {
  var F;
  e:
    if (R === "style")
      if (typeof D == "string")
        E.style.cssText = D;
      else {
        if (typeof W == "string" && (E.style.cssText = W = ""), W)
          for (R in W)
            D && R in D || $$g(E.style, R, "");
        if (D)
          for (R in D)
            W && D[R] === W[R] || $$g(E.style, R, D[R]);
      }
    else if (R[0] === "o" && R[1] === "n")
      F = R !== (R = R.replace(/Capture$/, "")), R = R.toLowerCase() in E ? R.toLowerCase().slice(2) : R.slice(2), E.l || (E.l = {}), E.l[R + F] = D, D ? W || E.addEventListener(R, F ? T$f : I$f, F) : E.removeEventListener(R, F ? T$f : I$f, F);
    else if (R !== "dangerouslySetInnerHTML") {
      if (V)
        R = R.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (R !== "href" && R !== "list" && R !== "form" && R !== "tabIndex" && R !== "download" && R in E)
        try {
          E[R] = D ?? "";
          break e;
        } catch {
        }
      typeof D == "function" || (D == null || D === !1 && R.indexOf("-") == -1 ? E.removeAttribute(R) : E.setAttribute(R, D));
    }
}
function I$f(E) {
  this.l[E.type + !1](l$j.event ? l$j.event(E) : E);
}
function T$f(E) {
  this.l[E.type + !0](l$j.event ? l$j.event(E) : E);
}
function j$f(E, R, D, W, V, F, Y, G, K) {
  var Q, U, ee, J, X, Z, ie, te, ne, oe, le, ce, ue, pe, de, se = R.type;
  if (R.constructor !== void 0)
    return null;
  D.__h != null && (K = D.__h, G = R.__e = D.__e, R.__h = null, F = [G]), (Q = l$j.__b) && Q(R);
  try {
    e:
      if (typeof se == "function") {
        if (te = R.props, ne = (Q = se.contextType) && W[Q.__c], oe = Q ? ne ? ne.props.value : Q.__ : W, D.__c ? ie = (U = R.__c = D.__c).__ = U.__E : ("prototype" in se && se.prototype.render ? R.__c = U = new se(te, oe) : (R.__c = U = new d$f(te, oe), U.constructor = se, U.render = O$f), ne && ne.sub(U), U.props = te, U.state || (U.state = {}), U.context = oe, U.__n = W, ee = U.__d = !0, U.__h = [], U._sb = []), U.__s == null && (U.__s = U.state), se.getDerivedStateFromProps != null && (U.__s == U.state && (U.__s = s$f({}, U.__s)), s$f(U.__s, se.getDerivedStateFromProps(te, U.__s))), J = U.props, X = U.state, ee)
          se.getDerivedStateFromProps == null && U.componentWillMount != null && U.componentWillMount(), U.componentDidMount != null && U.__h.push(U.componentDidMount);
        else {
          if (se.getDerivedStateFromProps == null && te !== J && U.componentWillReceiveProps != null && U.componentWillReceiveProps(te, oe), !U.__e && U.shouldComponentUpdate != null && U.shouldComponentUpdate(te, U.__s, oe) === !1 || R.__v === D.__v) {
            for (U.props = te, U.state = U.__s, R.__v !== D.__v && (U.__d = !1), U.__v = R, R.__e = D.__e, R.__k = D.__k, R.__k.forEach(function(ae) {
              ae && (ae.__ = R);
            }), le = 0; le < U._sb.length; le++)
              U.__h.push(U._sb[le]);
            U._sb = [], U.__h.length && Y.push(U);
            break e;
          }
          U.componentWillUpdate != null && U.componentWillUpdate(te, U.__s, oe), U.componentDidUpdate != null && U.__h.push(function() {
            U.componentDidUpdate(J, X, Z);
          });
        }
        if (U.context = oe, U.props = te, U.__v = R, U.__P = E, ce = l$j.__r, ue = 0, "prototype" in se && se.prototype.render) {
          for (U.state = U.__s, U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), pe = 0; pe < U._sb.length; pe++)
            U.__h.push(U._sb[pe]);
          U._sb = [];
        } else
          do
            U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), U.state = U.__s;
          while (U.__d && ++ue < 25);
        U.state = U.__s, U.getChildContext != null && (W = s$f(s$f({}, W), U.getChildContext())), ee || U.getSnapshotBeforeUpdate == null || (Z = U.getSnapshotBeforeUpdate(J, X)), de = Q != null && Q.type === p$f && Q.key == null ? Q.props.children : Q, w$f(E, Array.isArray(de) ? de : [de], R, D, W, V, F, Y, G, K), U.base = R.__e, R.__h = null, U.__h.length && Y.push(U), ie && (U.__E = U.__ = null), U.__e = !1;
      } else
        F == null && R.__v === D.__v ? (R.__k = D.__k, R.__e = D.__e) : R.__e = L$f(D.__e, R, D, W, V, F, Y, K);
    (Q = l$j.diffed) && Q(R);
  } catch (ae) {
    R.__v = null, (K || F != null) && (R.__e = G, R.__h = !!K, F[F.indexOf(G)] = null), l$j.__e(ae, R, D);
  }
}
function z$f(E, R) {
  l$j.__c && l$j.__c(R, E), E.some(function(D) {
    try {
      E = D.__h, D.__h = [], E.some(function(W) {
        W.call(D);
      });
    } catch (W) {
      l$j.__e(W, D.__v);
    }
  });
}
function L$f(E, R, D, W, V, F, Y, G) {
  var K, Q, U, ee = D.props, J = R.props, X = R.type, Z = 0;
  if (X === "svg" && (V = !0), F != null) {
    for (; Z < F.length; Z++)
      if ((K = F[Z]) && "setAttribute" in K == !!X && (X ? K.localName === X : K.nodeType === 3)) {
        E = K, F[Z] = null;
        break;
      }
  }
  if (E == null) {
    if (X === null)
      return document.createTextNode(J);
    E = V ? document.createElementNS("http://www.w3.org/2000/svg", X) : document.createElement(X, J.is && J), F = null, G = !1;
  }
  if (X === null)
    ee === J || G && E.data === J || (E.data = J);
  else {
    if (F = F && n$g.call(E.childNodes), Q = (ee = D.props || f$f).dangerouslySetInnerHTML, U = J.dangerouslySetInnerHTML, !G) {
      if (F != null)
        for (ee = {}, Z = 0; Z < E.attributes.length; Z++)
          ee[E.attributes[Z].name] = E.attributes[Z].value;
      (U || Q) && (U && (Q && U.__html == Q.__html || U.__html === E.innerHTML) || (E.innerHTML = U && U.__html || ""));
    }
    if (C$f(E, J, ee, V, G), U)
      R.__k = [];
    else if (Z = R.props.children, w$f(E, Array.isArray(Z) ? Z : [Z], R, D, W, V && X !== "foreignObject", F, Y, F ? F[0] : D.__k && _$y(D, 0), G), F != null)
      for (Z = F.length; Z--; )
        F[Z] != null && a$f(F[Z]);
    G || ("value" in J && (Z = J.value) !== void 0 && (Z !== E.value || X === "progress" && !Z || X === "option" && Z !== ee.value) && H$f(E, "value", Z, ee.value, !1), "checked" in J && (Z = J.checked) !== void 0 && Z !== E.checked && H$f(E, "checked", Z, ee.checked, !1));
  }
  return E;
}
function M$f(E, R, D) {
  try {
    typeof E == "function" ? E(R) : E.current = R;
  } catch (W) {
    l$j.__e(W, D);
  }
}
function N$f(E, R, D) {
  var W, V;
  if (l$j.unmount && l$j.unmount(E), (W = E.ref) && (W.current && W.current !== E.__e || M$f(W, null, R)), (W = E.__c) != null) {
    if (W.componentWillUnmount)
      try {
        W.componentWillUnmount();
      } catch (F) {
        l$j.__e(F, R);
      }
    W.base = W.__P = null, E.__c = void 0;
  }
  if (W = E.__k)
    for (V = 0; V < W.length; V++)
      W[V] && N$f(W[V], R, D || typeof E.type != "function");
  D || E.__e == null || a$f(E.__e), E.__ = E.__e = E.__d = void 0;
}
function O$f(E, R, D) {
  return this.constructor(E, D);
}
n$g = e$f.slice, l$j = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} }, u$f = 0, d$f.prototype.setState = function(E, R) {
  var D;
  D = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s$f({}, this.state), typeof E == "function" && (E = E(s$f({}, D), this.props)), E && s$f(D, E), E != null && this.__v && (R && this._sb.push(R), b$f(this));
}, d$f.prototype.forceUpdate = function(E) {
  this.__v && (this.__e = !0, E && this.__h.push(E), b$f(this));
}, d$f.prototype.render = p$f, t$g = [], g$f.__r = 0;
var _$x = 0;
function o$x(E, R, D, W, V) {
  var F, Y, G = {};
  for (Y in R)
    Y == "ref" ? F = R[Y] : G[Y] = R[Y];
  var K = { type: E, props: G, key: D, ref: F, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_$x, __source: V, __self: W };
  if (typeof E == "function" && (F = E.defaultProps))
    for (Y in F)
      G[Y] === void 0 && (G[Y] = F[Y]);
  return l$j.vnode && l$j.vnode(K), K;
}
let Button$1 = class extends d$f {
  render() {
    const {
      component: R,
      type: D,
      size: W,
      className: V,
      children: F,
      url: Y,
      target: G,
      disabled: K,
      active: Q,
      loading: U,
      loadingIcon: ee,
      loadingText: J,
      icon: X,
      text: Z,
      trailingIcon: ie,
      caret: te,
      square: ne,
      hint: oe,
      ...le
    } = this.props, ce = R || (Y ? "a" : "button"), ue = Z == null || typeof Z == "string" && !Z.length || U && !J, pe = te && ue && !X && !ie && !F && !U;
    return h$8(
      ce,
      {
        className: classes("btn", D, V, {
          "btn-caret": pe,
          disabled: K || U,
          active: Q,
          loading: U,
          square: ne === void 0 ? !pe && !F && ue : ne
        }, W ? `size-${W}` : ""),
        title: oe,
        [ce === "a" ? "href" : "data-url"]: Y,
        [ce === "a" ? "target" : "data-target"]: G,
        type: ce === "button" ? "button" : void 0,
        ...le
      },
      U ? /* @__PURE__ */ o$x("i", { class: `spin icon ${ee || "icon-spinner-snake"}` }) : typeof X == "string" ? /* @__PURE__ */ o$x("i", { class: `icon ${X}` }) : X,
      ue ? null : /* @__PURE__ */ o$x("span", { className: "text", children: U ? J : Z }),
      U ? null : F,
      U ? null : typeof ie == "string" ? /* @__PURE__ */ o$x("i", { class: `icon ${ie}` }) : ie,
      U ? null : te ? /* @__PURE__ */ o$x("span", { className: typeof te == "string" ? `caret-${te}` : "caret" }) : null
    );
  }
};
class Button extends ComponentFromReact {
}
me(Button, "NAME", "button"), me(Button, "Component", Button$1);
const index$w = "", index$v = "", index$u = "", index$t = "", index$s = "", index$r = "", vars$6 = "", label = "";
var l$i;
l$i = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} };
var _$w = 0;
function o$w(E, R, D, W, V) {
  var F, Y, G = {};
  for (Y in R)
    Y == "ref" ? F = R[Y] : G[Y] = R[Y];
  var K = { type: E, props: G, key: D, ref: F, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_$w, __source: V, __self: W };
  if (typeof E == "function" && (F = E.defaultProps))
    for (Y in F)
      G[Y] === void 0 && (G[Y] = F[Y]);
  return l$i.vnode && l$i.vnode(K), K;
}
const index$q = "";
var fr;
let Menu$1 = (fr = class extends ActionMenuNested$1 {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const R = super.beforeRender();
    let { hasIcons: D } = R;
    return D === void 0 && (D = R.items.some((W) => W.icon)), R.className = classes(R.className, this.menuName, {
      "has-icons": D,
      "has-nested-items": R.items.some((W) => this.isNestedItem(W))
    }), R;
  }
  renderToggleIcon(R) {
    return /* @__PURE__ */ o$w("span", { class: `${this.name}-toggle-icon caret-${R ? "down" : "right"}` });
  }
}, me(fr, "NAME", "menu"), fr);
class Menu extends ComponentFromReact {
}
me(Menu, "NAME", "menu"), me(Menu, "Component", Menu$1);
const index$p = "";
let nanoid$4 = (E = 21) => crypto.getRandomValues(new Uint8Array(E)).reduce((R, D) => (D &= 63, D < 36 ? R += D.toString(36) : D < 62 ? R += (D - 26).toString(36).toUpperCase() : D > 62 ? R += "-" : R += "_", R), "");
var n$f, l$h, u$e, t$f, o$v, f$e = {}, e$e = [], c$e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$e(E, R) {
  for (var D in R)
    E[D] = R[D];
  return E;
}
function a$e(E) {
  var R = E.parentNode;
  R && R.removeChild(E);
}
function v$e(E, R, D, W, V) {
  var F = { type: E, props: R, key: D, ref: W, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: V ?? ++u$e };
  return V == null && l$h.vnode != null && l$h.vnode(F), F;
}
function p$e(E) {
  return E.children;
}
function d$e(E, R) {
  this.props = E, this.context = R;
}
function _$v(E, R) {
  if (R == null)
    return E.__ ? _$v(E.__, E.__.__k.indexOf(E) + 1) : null;
  for (var D; R < E.__k.length; R++)
    if ((D = E.__k[R]) != null && D.__e != null)
      return D.__e;
  return typeof E.type == "function" ? _$v(E) : null;
}
function k$e(E) {
  var R, D;
  if ((E = E.__) != null && E.__c != null) {
    for (E.__e = E.__c.base = null, R = 0; R < E.__k.length; R++)
      if ((D = E.__k[R]) != null && D.__e != null) {
        E.__e = E.__c.base = D.__e;
        break;
      }
    return k$e(E);
  }
}
function b$e(E) {
  (!E.__d && (E.__d = !0) && t$f.push(E) && !g$e.__r++ || o$v !== l$h.debounceRendering) && ((o$v = l$h.debounceRendering) || setTimeout)(g$e);
}
function g$e() {
  for (var E; g$e.__r = t$f.length; )
    E = t$f.sort(function(R, D) {
      return R.__v.__b - D.__v.__b;
    }), t$f = [], E.some(function(R) {
      var D, W, V, F, Y, G;
      R.__d && (Y = (F = (D = R).__v).__e, (G = D.__P) && (W = [], (V = s$e({}, F)).__v = F.__v + 1, j$e(G, F, V, D.__n, G.ownerSVGElement !== void 0, F.__h != null ? [Y] : null, W, Y ?? _$v(F), F.__h), z$e(W, F), F.__e != Y && k$e(F)));
    });
}
function w$e(E, R, D, W, V, F, Y, G, K, Q) {
  var U, ee, J, X, Z, ie, te, ne = W && W.__k || e$e, oe = ne.length;
  for (D.__k = [], U = 0; U < R.length; U++)
    if ((X = D.__k[U] = (X = R[U]) == null || typeof X == "boolean" ? null : typeof X == "string" || typeof X == "number" || typeof X == "bigint" ? v$e(null, X, null, null, X) : Array.isArray(X) ? v$e(p$e, { children: X }, null, null, null) : X.__b > 0 ? v$e(X.type, X.props, X.key, X.ref ? X.ref : null, X.__v) : X) != null) {
      if (X.__ = D, X.__b = D.__b + 1, (J = ne[U]) === null || J && X.key == J.key && X.type === J.type)
        ne[U] = void 0;
      else
        for (ee = 0; ee < oe; ee++) {
          if ((J = ne[ee]) && X.key == J.key && X.type === J.type) {
            ne[ee] = void 0;
            break;
          }
          J = null;
        }
      j$e(E, X, J = J || f$e, V, F, Y, G, K, Q), Z = X.__e, (ee = X.ref) && J.ref != ee && (te || (te = []), J.ref && te.push(J.ref, null, X), te.push(ee, X.__c || Z, X)), Z != null ? (ie == null && (ie = Z), typeof X.type == "function" && X.__k === J.__k ? X.__d = K = m$f(X, K, E) : K = A$e(E, X, J, ne, Z, K), typeof D.type == "function" && (D.__d = K)) : K && J.__e == K && K.parentNode != E && (K = _$v(J));
    }
  for (D.__e = ie, U = oe; U--; )
    ne[U] != null && N$e(ne[U], ne[U]);
  if (te)
    for (U = 0; U < te.length; U++)
      M$e(te[U], te[++U], te[++U]);
}
function m$f(E, R, D) {
  for (var W, V = E.__k, F = 0; V && F < V.length; F++)
    (W = V[F]) && (W.__ = E, R = typeof W.type == "function" ? m$f(W, R, D) : A$e(D, W, W, V, W.__e, R));
  return R;
}
function A$e(E, R, D, W, V, F) {
  var Y, G, K;
  if (R.__d !== void 0)
    Y = R.__d, R.__d = void 0;
  else if (D == null || V != F || V.parentNode == null)
    e:
      if (F == null || F.parentNode !== E)
        E.appendChild(V), Y = null;
      else {
        for (G = F, K = 0; (G = G.nextSibling) && K < W.length; K += 2)
          if (G == V)
            break e;
        E.insertBefore(V, F), Y = F;
      }
  return Y !== void 0 ? Y : V.nextSibling;
}
function C$e(E, R, D, W, V) {
  var F;
  for (F in D)
    F === "children" || F === "key" || F in R || H$e(E, F, null, D[F], W);
  for (F in R)
    V && typeof R[F] != "function" || F === "children" || F === "key" || F === "value" || F === "checked" || D[F] === R[F] || H$e(E, F, R[F], D[F], W);
}
function $$f(E, R, D) {
  R[0] === "-" ? E.setProperty(R, D) : E[R] = D == null ? "" : typeof D != "number" || c$e.test(R) ? D : D + "px";
}
function H$e(E, R, D, W, V) {
  var F;
  e:
    if (R === "style")
      if (typeof D == "string")
        E.style.cssText = D;
      else {
        if (typeof W == "string" && (E.style.cssText = W = ""), W)
          for (R in W)
            D && R in D || $$f(E.style, R, "");
        if (D)
          for (R in D)
            W && D[R] === W[R] || $$f(E.style, R, D[R]);
      }
    else if (R[0] === "o" && R[1] === "n")
      F = R !== (R = R.replace(/Capture$/, "")), R = R.toLowerCase() in E ? R.toLowerCase().slice(2) : R.slice(2), E.l || (E.l = {}), E.l[R + F] = D, D ? W || E.addEventListener(R, F ? T$e : I$e, F) : E.removeEventListener(R, F ? T$e : I$e, F);
    else if (R !== "dangerouslySetInnerHTML") {
      if (V)
        R = R.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (R !== "href" && R !== "list" && R !== "form" && R !== "tabIndex" && R !== "download" && R in E)
        try {
          E[R] = D ?? "";
          break e;
        } catch {
        }
      typeof D == "function" || (D == null || D === !1 && R.indexOf("-") == -1 ? E.removeAttribute(R) : E.setAttribute(R, D));
    }
}
function I$e(E) {
  this.l[E.type + !1](l$h.event ? l$h.event(E) : E);
}
function T$e(E) {
  this.l[E.type + !0](l$h.event ? l$h.event(E) : E);
}
function j$e(E, R, D, W, V, F, Y, G, K) {
  var Q, U, ee, J, X, Z, ie, te, ne, oe, le, ce, ue, pe, de, se = R.type;
  if (R.constructor !== void 0)
    return null;
  D.__h != null && (K = D.__h, G = R.__e = D.__e, R.__h = null, F = [G]), (Q = l$h.__b) && Q(R);
  try {
    e:
      if (typeof se == "function") {
        if (te = R.props, ne = (Q = se.contextType) && W[Q.__c], oe = Q ? ne ? ne.props.value : Q.__ : W, D.__c ? ie = (U = R.__c = D.__c).__ = U.__E : ("prototype" in se && se.prototype.render ? R.__c = U = new se(te, oe) : (R.__c = U = new d$e(te, oe), U.constructor = se, U.render = O$e), ne && ne.sub(U), U.props = te, U.state || (U.state = {}), U.context = oe, U.__n = W, ee = U.__d = !0, U.__h = [], U._sb = []), U.__s == null && (U.__s = U.state), se.getDerivedStateFromProps != null && (U.__s == U.state && (U.__s = s$e({}, U.__s)), s$e(U.__s, se.getDerivedStateFromProps(te, U.__s))), J = U.props, X = U.state, ee)
          se.getDerivedStateFromProps == null && U.componentWillMount != null && U.componentWillMount(), U.componentDidMount != null && U.__h.push(U.componentDidMount);
        else {
          if (se.getDerivedStateFromProps == null && te !== J && U.componentWillReceiveProps != null && U.componentWillReceiveProps(te, oe), !U.__e && U.shouldComponentUpdate != null && U.shouldComponentUpdate(te, U.__s, oe) === !1 || R.__v === D.__v) {
            for (U.props = te, U.state = U.__s, R.__v !== D.__v && (U.__d = !1), U.__v = R, R.__e = D.__e, R.__k = D.__k, R.__k.forEach(function(ae) {
              ae && (ae.__ = R);
            }), le = 0; le < U._sb.length; le++)
              U.__h.push(U._sb[le]);
            U._sb = [], U.__h.length && Y.push(U);
            break e;
          }
          U.componentWillUpdate != null && U.componentWillUpdate(te, U.__s, oe), U.componentDidUpdate != null && U.__h.push(function() {
            U.componentDidUpdate(J, X, Z);
          });
        }
        if (U.context = oe, U.props = te, U.__v = R, U.__P = E, ce = l$h.__r, ue = 0, "prototype" in se && se.prototype.render) {
          for (U.state = U.__s, U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), pe = 0; pe < U._sb.length; pe++)
            U.__h.push(U._sb[pe]);
          U._sb = [];
        } else
          do
            U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), U.state = U.__s;
          while (U.__d && ++ue < 25);
        U.state = U.__s, U.getChildContext != null && (W = s$e(s$e({}, W), U.getChildContext())), ee || U.getSnapshotBeforeUpdate == null || (Z = U.getSnapshotBeforeUpdate(J, X)), de = Q != null && Q.type === p$e && Q.key == null ? Q.props.children : Q, w$e(E, Array.isArray(de) ? de : [de], R, D, W, V, F, Y, G, K), U.base = R.__e, R.__h = null, U.__h.length && Y.push(U), ie && (U.__E = U.__ = null), U.__e = !1;
      } else
        F == null && R.__v === D.__v ? (R.__k = D.__k, R.__e = D.__e) : R.__e = L$e(D.__e, R, D, W, V, F, Y, K);
    (Q = l$h.diffed) && Q(R);
  } catch (ae) {
    R.__v = null, (K || F != null) && (R.__e = G, R.__h = !!K, F[F.indexOf(G)] = null), l$h.__e(ae, R, D);
  }
}
function z$e(E, R) {
  l$h.__c && l$h.__c(R, E), E.some(function(D) {
    try {
      E = D.__h, D.__h = [], E.some(function(W) {
        W.call(D);
      });
    } catch (W) {
      l$h.__e(W, D.__v);
    }
  });
}
function L$e(E, R, D, W, V, F, Y, G) {
  var K, Q, U, ee = D.props, J = R.props, X = R.type, Z = 0;
  if (X === "svg" && (V = !0), F != null) {
    for (; Z < F.length; Z++)
      if ((K = F[Z]) && "setAttribute" in K == !!X && (X ? K.localName === X : K.nodeType === 3)) {
        E = K, F[Z] = null;
        break;
      }
  }
  if (E == null) {
    if (X === null)
      return document.createTextNode(J);
    E = V ? document.createElementNS("http://www.w3.org/2000/svg", X) : document.createElement(X, J.is && J), F = null, G = !1;
  }
  if (X === null)
    ee === J || G && E.data === J || (E.data = J);
  else {
    if (F = F && n$f.call(E.childNodes), Q = (ee = D.props || f$e).dangerouslySetInnerHTML, U = J.dangerouslySetInnerHTML, !G) {
      if (F != null)
        for (ee = {}, Z = 0; Z < E.attributes.length; Z++)
          ee[E.attributes[Z].name] = E.attributes[Z].value;
      (U || Q) && (U && (Q && U.__html == Q.__html || U.__html === E.innerHTML) || (E.innerHTML = U && U.__html || ""));
    }
    if (C$e(E, J, ee, V, G), U)
      R.__k = [];
    else if (Z = R.props.children, w$e(E, Array.isArray(Z) ? Z : [Z], R, D, W, V && X !== "foreignObject", F, Y, F ? F[0] : D.__k && _$v(D, 0), G), F != null)
      for (Z = F.length; Z--; )
        F[Z] != null && a$e(F[Z]);
    G || ("value" in J && (Z = J.value) !== void 0 && (Z !== E.value || X === "progress" && !Z || X === "option" && Z !== ee.value) && H$e(E, "value", Z, ee.value, !1), "checked" in J && (Z = J.checked) !== void 0 && Z !== E.checked && H$e(E, "checked", Z, ee.checked, !1));
  }
  return E;
}
function M$e(E, R, D) {
  try {
    typeof E == "function" ? E(R) : E.current = R;
  } catch (W) {
    l$h.__e(W, D);
  }
}
function N$e(E, R, D) {
  var W, V;
  if (l$h.unmount && l$h.unmount(E), (W = E.ref) && (W.current && W.current !== E.__e || M$e(W, null, R)), (W = E.__c) != null) {
    if (W.componentWillUnmount)
      try {
        W.componentWillUnmount();
      } catch (F) {
        l$h.__e(F, R);
      }
    W.base = W.__P = null, E.__c = void 0;
  }
  if (W = E.__k)
    for (V = 0; V < W.length; V++)
      W[V] && N$e(W[V], R, D || typeof E.type != "function");
  D || E.__e == null || a$e(E.__e), E.__ = E.__e = E.__d = void 0;
}
function O$e(E, R, D) {
  return this.constructor(E, D);
}
n$f = e$e.slice, l$h = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} }, u$e = 0, d$e.prototype.setState = function(E, R) {
  var D;
  D = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s$e({}, this.state), typeof E == "function" && (E = E(s$e({}, D), this.props)), E && s$e(D, E), E != null && this.__v && (R && this._sb.push(R), b$e(this));
}, d$e.prototype.forceUpdate = function(E) {
  this.__v && (this.__e = !0, E && this.__h.push(E), b$e(this));
}, d$e.prototype.render = p$e, t$f = [], g$e.__r = 0;
var _$u = 0;
function o$u(E, R, D, W, V) {
  var F, Y, G = {};
  for (Y in R)
    Y == "ref" ? F = R[Y] : G[Y] = R[Y];
  var K = { type: E, props: G, key: D, ref: F, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_$u, __source: V, __self: W };
  if (typeof E == "function" && (F = E.defaultProps))
    for (Y in F)
      G[Y] === void 0 && (G[Y] = F[Y]);
  return l$h.vnode && l$h.vnode(K), K;
}
var l$g, i$4;
l$g = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} }, i$4 = function(E) {
  return E != null && E.constructor === void 0;
};
var _$t = 0;
function o$t(E, R, D, W, V) {
  var F, Y, G = {};
  for (Y in R)
    Y == "ref" ? F = R[Y] : G[Y] = R[Y];
  var K = { type: E, props: G, key: D, ref: F, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_$t, __source: V, __self: W };
  if (typeof E == "function" && (F = E.defaultProps))
    for (Y in F)
      G[Y] === void 0 && (G[Y] = F[Y]);
  return l$g.vnode && l$g.vnode(K), K;
}
const close = "";
var l$f;
l$f = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} };
var _$s = 0;
function o$s(E, R, D, W, V) {
  var F, Y, G = {};
  for (Y in R)
    Y == "ref" ? F = R[Y] : G[Y] = R[Y];
  var K = { type: E, props: G, key: D, ref: F, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_$s, __source: V, __self: W };
  if (typeof E == "function" && (F = E.defaultProps))
    for (Y in F)
      G[Y] === void 0 && (G[Y] = F[Y]);
  return l$f.vnode && l$f.vnode(K), K;
}
const index$o = "";
function ToolbarItem({
  key: E,
  type: R,
  btnType: D,
  ...W
}) {
  return /* @__PURE__ */ o$s(Button$1, { type: D, ...W });
}
var n$e, l$e, u$d, t$e, o$r, f$d = {}, e$d = [], c$d = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$d(E, R) {
  for (var D in R)
    E[D] = R[D];
  return E;
}
function a$d(E) {
  var R = E.parentNode;
  R && R.removeChild(E);
}
function v$d(E, R, D, W, V) {
  var F = { type: E, props: R, key: D, ref: W, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: V ?? ++u$d };
  return V == null && l$e.vnode != null && l$e.vnode(F), F;
}
function y$6() {
  return { current: null };
}
function p$d(E) {
  return E.children;
}
function d$d(E, R) {
  this.props = E, this.context = R;
}
function _$r(E, R) {
  if (R == null)
    return E.__ ? _$r(E.__, E.__.__k.indexOf(E) + 1) : null;
  for (var D; R < E.__k.length; R++)
    if ((D = E.__k[R]) != null && D.__e != null)
      return D.__e;
  return typeof E.type == "function" ? _$r(E) : null;
}
function k$d(E) {
  var R, D;
  if ((E = E.__) != null && E.__c != null) {
    for (E.__e = E.__c.base = null, R = 0; R < E.__k.length; R++)
      if ((D = E.__k[R]) != null && D.__e != null) {
        E.__e = E.__c.base = D.__e;
        break;
      }
    return k$d(E);
  }
}
function b$d(E) {
  (!E.__d && (E.__d = !0) && t$e.push(E) && !g$d.__r++ || o$r !== l$e.debounceRendering) && ((o$r = l$e.debounceRendering) || setTimeout)(g$d);
}
function g$d() {
  for (var E; g$d.__r = t$e.length; )
    E = t$e.sort(function(R, D) {
      return R.__v.__b - D.__v.__b;
    }), t$e = [], E.some(function(R) {
      var D, W, V, F, Y, G;
      R.__d && (Y = (F = (D = R).__v).__e, (G = D.__P) && (W = [], (V = s$d({}, F)).__v = F.__v + 1, j$d(G, F, V, D.__n, G.ownerSVGElement !== void 0, F.__h != null ? [Y] : null, W, Y ?? _$r(F), F.__h), z$d(W, F), F.__e != Y && k$d(F)));
    });
}
function w$d(E, R, D, W, V, F, Y, G, K, Q) {
  var U, ee, J, X, Z, ie, te, ne = W && W.__k || e$d, oe = ne.length;
  for (D.__k = [], U = 0; U < R.length; U++)
    if ((X = D.__k[U] = (X = R[U]) == null || typeof X == "boolean" ? null : typeof X == "string" || typeof X == "number" || typeof X == "bigint" ? v$d(null, X, null, null, X) : Array.isArray(X) ? v$d(p$d, { children: X }, null, null, null) : X.__b > 0 ? v$d(X.type, X.props, X.key, X.ref ? X.ref : null, X.__v) : X) != null) {
      if (X.__ = D, X.__b = D.__b + 1, (J = ne[U]) === null || J && X.key == J.key && X.type === J.type)
        ne[U] = void 0;
      else
        for (ee = 0; ee < oe; ee++) {
          if ((J = ne[ee]) && X.key == J.key && X.type === J.type) {
            ne[ee] = void 0;
            break;
          }
          J = null;
        }
      j$d(E, X, J = J || f$d, V, F, Y, G, K, Q), Z = X.__e, (ee = X.ref) && J.ref != ee && (te || (te = []), J.ref && te.push(J.ref, null, X), te.push(ee, X.__c || Z, X)), Z != null ? (ie == null && (ie = Z), typeof X.type == "function" && X.__k === J.__k ? X.__d = K = m$e(X, K, E) : K = A$d(E, X, J, ne, Z, K), typeof D.type == "function" && (D.__d = K)) : K && J.__e == K && K.parentNode != E && (K = _$r(J));
    }
  for (D.__e = ie, U = oe; U--; )
    ne[U] != null && N$d(ne[U], ne[U]);
  if (te)
    for (U = 0; U < te.length; U++)
      M$d(te[U], te[++U], te[++U]);
}
function m$e(E, R, D) {
  for (var W, V = E.__k, F = 0; V && F < V.length; F++)
    (W = V[F]) && (W.__ = E, R = typeof W.type == "function" ? m$e(W, R, D) : A$d(D, W, W, V, W.__e, R));
  return R;
}
function A$d(E, R, D, W, V, F) {
  var Y, G, K;
  if (R.__d !== void 0)
    Y = R.__d, R.__d = void 0;
  else if (D == null || V != F || V.parentNode == null)
    e:
      if (F == null || F.parentNode !== E)
        E.appendChild(V), Y = null;
      else {
        for (G = F, K = 0; (G = G.nextSibling) && K < W.length; K += 2)
          if (G == V)
            break e;
        E.insertBefore(V, F), Y = F;
      }
  return Y !== void 0 ? Y : V.nextSibling;
}
function C$d(E, R, D, W, V) {
  var F;
  for (F in D)
    F === "children" || F === "key" || F in R || H$d(E, F, null, D[F], W);
  for (F in R)
    V && typeof R[F] != "function" || F === "children" || F === "key" || F === "value" || F === "checked" || D[F] === R[F] || H$d(E, F, R[F], D[F], W);
}
function $$e(E, R, D) {
  R[0] === "-" ? E.setProperty(R, D) : E[R] = D == null ? "" : typeof D != "number" || c$d.test(R) ? D : D + "px";
}
function H$d(E, R, D, W, V) {
  var F;
  e:
    if (R === "style")
      if (typeof D == "string")
        E.style.cssText = D;
      else {
        if (typeof W == "string" && (E.style.cssText = W = ""), W)
          for (R in W)
            D && R in D || $$e(E.style, R, "");
        if (D)
          for (R in D)
            W && D[R] === W[R] || $$e(E.style, R, D[R]);
      }
    else if (R[0] === "o" && R[1] === "n")
      F = R !== (R = R.replace(/Capture$/, "")), R = R.toLowerCase() in E ? R.toLowerCase().slice(2) : R.slice(2), E.l || (E.l = {}), E.l[R + F] = D, D ? W || E.addEventListener(R, F ? T$d : I$d, F) : E.removeEventListener(R, F ? T$d : I$d, F);
    else if (R !== "dangerouslySetInnerHTML") {
      if (V)
        R = R.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (R !== "href" && R !== "list" && R !== "form" && R !== "tabIndex" && R !== "download" && R in E)
        try {
          E[R] = D ?? "";
          break e;
        } catch {
        }
      typeof D == "function" || (D == null || D === !1 && R.indexOf("-") == -1 ? E.removeAttribute(R) : E.setAttribute(R, D));
    }
}
function I$d(E) {
  this.l[E.type + !1](l$e.event ? l$e.event(E) : E);
}
function T$d(E) {
  this.l[E.type + !0](l$e.event ? l$e.event(E) : E);
}
function j$d(E, R, D, W, V, F, Y, G, K) {
  var Q, U, ee, J, X, Z, ie, te, ne, oe, le, ce, ue, pe, de, se = R.type;
  if (R.constructor !== void 0)
    return null;
  D.__h != null && (K = D.__h, G = R.__e = D.__e, R.__h = null, F = [G]), (Q = l$e.__b) && Q(R);
  try {
    e:
      if (typeof se == "function") {
        if (te = R.props, ne = (Q = se.contextType) && W[Q.__c], oe = Q ? ne ? ne.props.value : Q.__ : W, D.__c ? ie = (U = R.__c = D.__c).__ = U.__E : ("prototype" in se && se.prototype.render ? R.__c = U = new se(te, oe) : (R.__c = U = new d$d(te, oe), U.constructor = se, U.render = O$d), ne && ne.sub(U), U.props = te, U.state || (U.state = {}), U.context = oe, U.__n = W, ee = U.__d = !0, U.__h = [], U._sb = []), U.__s == null && (U.__s = U.state), se.getDerivedStateFromProps != null && (U.__s == U.state && (U.__s = s$d({}, U.__s)), s$d(U.__s, se.getDerivedStateFromProps(te, U.__s))), J = U.props, X = U.state, ee)
          se.getDerivedStateFromProps == null && U.componentWillMount != null && U.componentWillMount(), U.componentDidMount != null && U.__h.push(U.componentDidMount);
        else {
          if (se.getDerivedStateFromProps == null && te !== J && U.componentWillReceiveProps != null && U.componentWillReceiveProps(te, oe), !U.__e && U.shouldComponentUpdate != null && U.shouldComponentUpdate(te, U.__s, oe) === !1 || R.__v === D.__v) {
            for (U.props = te, U.state = U.__s, R.__v !== D.__v && (U.__d = !1), U.__v = R, R.__e = D.__e, R.__k = D.__k, R.__k.forEach(function(ae) {
              ae && (ae.__ = R);
            }), le = 0; le < U._sb.length; le++)
              U.__h.push(U._sb[le]);
            U._sb = [], U.__h.length && Y.push(U);
            break e;
          }
          U.componentWillUpdate != null && U.componentWillUpdate(te, U.__s, oe), U.componentDidUpdate != null && U.__h.push(function() {
            U.componentDidUpdate(J, X, Z);
          });
        }
        if (U.context = oe, U.props = te, U.__v = R, U.__P = E, ce = l$e.__r, ue = 0, "prototype" in se && se.prototype.render) {
          for (U.state = U.__s, U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), pe = 0; pe < U._sb.length; pe++)
            U.__h.push(U._sb[pe]);
          U._sb = [];
        } else
          do
            U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), U.state = U.__s;
          while (U.__d && ++ue < 25);
        U.state = U.__s, U.getChildContext != null && (W = s$d(s$d({}, W), U.getChildContext())), ee || U.getSnapshotBeforeUpdate == null || (Z = U.getSnapshotBeforeUpdate(J, X)), de = Q != null && Q.type === p$d && Q.key == null ? Q.props.children : Q, w$d(E, Array.isArray(de) ? de : [de], R, D, W, V, F, Y, G, K), U.base = R.__e, R.__h = null, U.__h.length && Y.push(U), ie && (U.__E = U.__ = null), U.__e = !1;
      } else
        F == null && R.__v === D.__v ? (R.__k = D.__k, R.__e = D.__e) : R.__e = L$d(D.__e, R, D, W, V, F, Y, K);
    (Q = l$e.diffed) && Q(R);
  } catch (ae) {
    R.__v = null, (K || F != null) && (R.__e = G, R.__h = !!K, F[F.indexOf(G)] = null), l$e.__e(ae, R, D);
  }
}
function z$d(E, R) {
  l$e.__c && l$e.__c(R, E), E.some(function(D) {
    try {
      E = D.__h, D.__h = [], E.some(function(W) {
        W.call(D);
      });
    } catch (W) {
      l$e.__e(W, D.__v);
    }
  });
}
function L$d(E, R, D, W, V, F, Y, G) {
  var K, Q, U, ee = D.props, J = R.props, X = R.type, Z = 0;
  if (X === "svg" && (V = !0), F != null) {
    for (; Z < F.length; Z++)
      if ((K = F[Z]) && "setAttribute" in K == !!X && (X ? K.localName === X : K.nodeType === 3)) {
        E = K, F[Z] = null;
        break;
      }
  }
  if (E == null) {
    if (X === null)
      return document.createTextNode(J);
    E = V ? document.createElementNS("http://www.w3.org/2000/svg", X) : document.createElement(X, J.is && J), F = null, G = !1;
  }
  if (X === null)
    ee === J || G && E.data === J || (E.data = J);
  else {
    if (F = F && n$e.call(E.childNodes), Q = (ee = D.props || f$d).dangerouslySetInnerHTML, U = J.dangerouslySetInnerHTML, !G) {
      if (F != null)
        for (ee = {}, Z = 0; Z < E.attributes.length; Z++)
          ee[E.attributes[Z].name] = E.attributes[Z].value;
      (U || Q) && (U && (Q && U.__html == Q.__html || U.__html === E.innerHTML) || (E.innerHTML = U && U.__html || ""));
    }
    if (C$d(E, J, ee, V, G), U)
      R.__k = [];
    else if (Z = R.props.children, w$d(E, Array.isArray(Z) ? Z : [Z], R, D, W, V && X !== "foreignObject", F, Y, F ? F[0] : D.__k && _$r(D, 0), G), F != null)
      for (Z = F.length; Z--; )
        F[Z] != null && a$d(F[Z]);
    G || ("value" in J && (Z = J.value) !== void 0 && (Z !== E.value || X === "progress" && !Z || X === "option" && Z !== ee.value) && H$d(E, "value", Z, ee.value, !1), "checked" in J && (Z = J.checked) !== void 0 && Z !== E.checked && H$d(E, "checked", Z, ee.checked, !1));
  }
  return E;
}
function M$d(E, R, D) {
  try {
    typeof E == "function" ? E(R) : E.current = R;
  } catch (W) {
    l$e.__e(W, D);
  }
}
function N$d(E, R, D) {
  var W, V;
  if (l$e.unmount && l$e.unmount(E), (W = E.ref) && (W.current && W.current !== E.__e || M$d(W, null, R)), (W = E.__c) != null) {
    if (W.componentWillUnmount)
      try {
        W.componentWillUnmount();
      } catch (F) {
        l$e.__e(F, R);
      }
    W.base = W.__P = null, E.__c = void 0;
  }
  if (W = E.__k)
    for (V = 0; V < W.length; V++)
      W[V] && N$d(W[V], R, D || typeof E.type != "function");
  D || E.__e == null || a$d(E.__e), E.__ = E.__e = E.__d = void 0;
}
function O$d(E, R, D) {
  return this.constructor(E, D);
}
n$e = e$d.slice, l$e = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} }, u$d = 0, d$d.prototype.setState = function(E, R) {
  var D;
  D = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s$d({}, this.state), typeof E == "function" && (E = E(s$d({}, D), this.props)), E && s$d(D, E), E != null && this.__v && (R && this._sb.push(R), b$d(this));
}, d$d.prototype.forceUpdate = function(E) {
  this.__v && (this.__e = !0, E && this.__h.push(E), b$d(this));
}, d$d.prototype.render = p$d, t$e = [], g$d.__r = 0;
var _$q = 0;
function o$q(E, R, D, W, V) {
  var F, Y, G = {};
  for (Y in R)
    Y == "ref" ? F = R[Y] : G[Y] = R[Y];
  var K = { type: E, props: G, key: D, ref: F, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_$q, __source: V, __self: W };
  if (typeof E == "function" && (F = E.defaultProps))
    for (Y in F)
      G[Y] === void 0 && (G[Y] = F[Y]);
  return l$e.vnode && l$e.vnode(K), K;
}
const arrow$4 = "";
var n$d, l$d, u$c, t$d, o$p, f$c = {}, e$c = [], c$c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$c(E, R) {
  for (var D in R)
    E[D] = R[D];
  return E;
}
function a$c(E) {
  var R = E.parentNode;
  R && R.removeChild(E);
}
function h$7(E, R, D) {
  var W, V, F, Y = {};
  for (F in R)
    F == "key" ? W = R[F] : F == "ref" ? V = R[F] : Y[F] = R[F];
  if (arguments.length > 2 && (Y.children = arguments.length > 3 ? n$d.call(arguments, 2) : D), typeof E == "function" && E.defaultProps != null)
    for (F in E.defaultProps)
      Y[F] === void 0 && (Y[F] = E.defaultProps[F]);
  return v$c(E, Y, W, V, null);
}
function v$c(E, R, D, W, V) {
  var F = { type: E, props: R, key: D, ref: W, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: V ?? ++u$c };
  return V == null && l$d.vnode != null && l$d.vnode(F), F;
}
function p$c(E) {
  return E.children;
}
function d$c(E, R) {
  this.props = E, this.context = R;
}
function _$p(E, R) {
  if (R == null)
    return E.__ ? _$p(E.__, E.__.__k.indexOf(E) + 1) : null;
  for (var D; R < E.__k.length; R++)
    if ((D = E.__k[R]) != null && D.__e != null)
      return D.__e;
  return typeof E.type == "function" ? _$p(E) : null;
}
function k$c(E) {
  var R, D;
  if ((E = E.__) != null && E.__c != null) {
    for (E.__e = E.__c.base = null, R = 0; R < E.__k.length; R++)
      if ((D = E.__k[R]) != null && D.__e != null) {
        E.__e = E.__c.base = D.__e;
        break;
      }
    return k$c(E);
  }
}
function b$c(E) {
  (!E.__d && (E.__d = !0) && t$d.push(E) && !g$c.__r++ || o$p !== l$d.debounceRendering) && ((o$p = l$d.debounceRendering) || setTimeout)(g$c);
}
function g$c() {
  for (var E; g$c.__r = t$d.length; )
    E = t$d.sort(function(R, D) {
      return R.__v.__b - D.__v.__b;
    }), t$d = [], E.some(function(R) {
      var D, W, V, F, Y, G;
      R.__d && (Y = (F = (D = R).__v).__e, (G = D.__P) && (W = [], (V = s$c({}, F)).__v = F.__v + 1, j$c(G, F, V, D.__n, G.ownerSVGElement !== void 0, F.__h != null ? [Y] : null, W, Y ?? _$p(F), F.__h), z$c(W, F), F.__e != Y && k$c(F)));
    });
}
function w$c(E, R, D, W, V, F, Y, G, K, Q) {
  var U, ee, J, X, Z, ie, te, ne = W && W.__k || e$c, oe = ne.length;
  for (D.__k = [], U = 0; U < R.length; U++)
    if ((X = D.__k[U] = (X = R[U]) == null || typeof X == "boolean" ? null : typeof X == "string" || typeof X == "number" || typeof X == "bigint" ? v$c(null, X, null, null, X) : Array.isArray(X) ? v$c(p$c, { children: X }, null, null, null) : X.__b > 0 ? v$c(X.type, X.props, X.key, X.ref ? X.ref : null, X.__v) : X) != null) {
      if (X.__ = D, X.__b = D.__b + 1, (J = ne[U]) === null || J && X.key == J.key && X.type === J.type)
        ne[U] = void 0;
      else
        for (ee = 0; ee < oe; ee++) {
          if ((J = ne[ee]) && X.key == J.key && X.type === J.type) {
            ne[ee] = void 0;
            break;
          }
          J = null;
        }
      j$c(E, X, J = J || f$c, V, F, Y, G, K, Q), Z = X.__e, (ee = X.ref) && J.ref != ee && (te || (te = []), J.ref && te.push(J.ref, null, X), te.push(ee, X.__c || Z, X)), Z != null ? (ie == null && (ie = Z), typeof X.type == "function" && X.__k === J.__k ? X.__d = K = m$d(X, K, E) : K = A$c(E, X, J, ne, Z, K), typeof D.type == "function" && (D.__d = K)) : K && J.__e == K && K.parentNode != E && (K = _$p(J));
    }
  for (D.__e = ie, U = oe; U--; )
    ne[U] != null && N$c(ne[U], ne[U]);
  if (te)
    for (U = 0; U < te.length; U++)
      M$c(te[U], te[++U], te[++U]);
}
function m$d(E, R, D) {
  for (var W, V = E.__k, F = 0; V && F < V.length; F++)
    (W = V[F]) && (W.__ = E, R = typeof W.type == "function" ? m$d(W, R, D) : A$c(D, W, W, V, W.__e, R));
  return R;
}
function A$c(E, R, D, W, V, F) {
  var Y, G, K;
  if (R.__d !== void 0)
    Y = R.__d, R.__d = void 0;
  else if (D == null || V != F || V.parentNode == null)
    e:
      if (F == null || F.parentNode !== E)
        E.appendChild(V), Y = null;
      else {
        for (G = F, K = 0; (G = G.nextSibling) && K < W.length; K += 2)
          if (G == V)
            break e;
        E.insertBefore(V, F), Y = F;
      }
  return Y !== void 0 ? Y : V.nextSibling;
}
function C$c(E, R, D, W, V) {
  var F;
  for (F in D)
    F === "children" || F === "key" || F in R || H$c(E, F, null, D[F], W);
  for (F in R)
    V && typeof R[F] != "function" || F === "children" || F === "key" || F === "value" || F === "checked" || D[F] === R[F] || H$c(E, F, R[F], D[F], W);
}
function $$d(E, R, D) {
  R[0] === "-" ? E.setProperty(R, D) : E[R] = D == null ? "" : typeof D != "number" || c$c.test(R) ? D : D + "px";
}
function H$c(E, R, D, W, V) {
  var F;
  e:
    if (R === "style")
      if (typeof D == "string")
        E.style.cssText = D;
      else {
        if (typeof W == "string" && (E.style.cssText = W = ""), W)
          for (R in W)
            D && R in D || $$d(E.style, R, "");
        if (D)
          for (R in D)
            W && D[R] === W[R] || $$d(E.style, R, D[R]);
      }
    else if (R[0] === "o" && R[1] === "n")
      F = R !== (R = R.replace(/Capture$/, "")), R = R.toLowerCase() in E ? R.toLowerCase().slice(2) : R.slice(2), E.l || (E.l = {}), E.l[R + F] = D, D ? W || E.addEventListener(R, F ? T$c : I$c, F) : E.removeEventListener(R, F ? T$c : I$c, F);
    else if (R !== "dangerouslySetInnerHTML") {
      if (V)
        R = R.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (R !== "href" && R !== "list" && R !== "form" && R !== "tabIndex" && R !== "download" && R in E)
        try {
          E[R] = D ?? "";
          break e;
        } catch {
        }
      typeof D == "function" || (D == null || D === !1 && R.indexOf("-") == -1 ? E.removeAttribute(R) : E.setAttribute(R, D));
    }
}
function I$c(E) {
  this.l[E.type + !1](l$d.event ? l$d.event(E) : E);
}
function T$c(E) {
  this.l[E.type + !0](l$d.event ? l$d.event(E) : E);
}
function j$c(E, R, D, W, V, F, Y, G, K) {
  var Q, U, ee, J, X, Z, ie, te, ne, oe, le, ce, ue, pe, de, se = R.type;
  if (R.constructor !== void 0)
    return null;
  D.__h != null && (K = D.__h, G = R.__e = D.__e, R.__h = null, F = [G]), (Q = l$d.__b) && Q(R);
  try {
    e:
      if (typeof se == "function") {
        if (te = R.props, ne = (Q = se.contextType) && W[Q.__c], oe = Q ? ne ? ne.props.value : Q.__ : W, D.__c ? ie = (U = R.__c = D.__c).__ = U.__E : ("prototype" in se && se.prototype.render ? R.__c = U = new se(te, oe) : (R.__c = U = new d$c(te, oe), U.constructor = se, U.render = O$c), ne && ne.sub(U), U.props = te, U.state || (U.state = {}), U.context = oe, U.__n = W, ee = U.__d = !0, U.__h = [], U._sb = []), U.__s == null && (U.__s = U.state), se.getDerivedStateFromProps != null && (U.__s == U.state && (U.__s = s$c({}, U.__s)), s$c(U.__s, se.getDerivedStateFromProps(te, U.__s))), J = U.props, X = U.state, ee)
          se.getDerivedStateFromProps == null && U.componentWillMount != null && U.componentWillMount(), U.componentDidMount != null && U.__h.push(U.componentDidMount);
        else {
          if (se.getDerivedStateFromProps == null && te !== J && U.componentWillReceiveProps != null && U.componentWillReceiveProps(te, oe), !U.__e && U.shouldComponentUpdate != null && U.shouldComponentUpdate(te, U.__s, oe) === !1 || R.__v === D.__v) {
            for (U.props = te, U.state = U.__s, R.__v !== D.__v && (U.__d = !1), U.__v = R, R.__e = D.__e, R.__k = D.__k, R.__k.forEach(function(ae) {
              ae && (ae.__ = R);
            }), le = 0; le < U._sb.length; le++)
              U.__h.push(U._sb[le]);
            U._sb = [], U.__h.length && Y.push(U);
            break e;
          }
          U.componentWillUpdate != null && U.componentWillUpdate(te, U.__s, oe), U.componentDidUpdate != null && U.__h.push(function() {
            U.componentDidUpdate(J, X, Z);
          });
        }
        if (U.context = oe, U.props = te, U.__v = R, U.__P = E, ce = l$d.__r, ue = 0, "prototype" in se && se.prototype.render) {
          for (U.state = U.__s, U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), pe = 0; pe < U._sb.length; pe++)
            U.__h.push(U._sb[pe]);
          U._sb = [];
        } else
          do
            U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), U.state = U.__s;
          while (U.__d && ++ue < 25);
        U.state = U.__s, U.getChildContext != null && (W = s$c(s$c({}, W), U.getChildContext())), ee || U.getSnapshotBeforeUpdate == null || (Z = U.getSnapshotBeforeUpdate(J, X)), de = Q != null && Q.type === p$c && Q.key == null ? Q.props.children : Q, w$c(E, Array.isArray(de) ? de : [de], R, D, W, V, F, Y, G, K), U.base = R.__e, R.__h = null, U.__h.length && Y.push(U), ie && (U.__E = U.__ = null), U.__e = !1;
      } else
        F == null && R.__v === D.__v ? (R.__k = D.__k, R.__e = D.__e) : R.__e = L$c(D.__e, R, D, W, V, F, Y, K);
    (Q = l$d.diffed) && Q(R);
  } catch (ae) {
    R.__v = null, (K || F != null) && (R.__e = G, R.__h = !!K, F[F.indexOf(G)] = null), l$d.__e(ae, R, D);
  }
}
function z$c(E, R) {
  l$d.__c && l$d.__c(R, E), E.some(function(D) {
    try {
      E = D.__h, D.__h = [], E.some(function(W) {
        W.call(D);
      });
    } catch (W) {
      l$d.__e(W, D.__v);
    }
  });
}
function L$c(E, R, D, W, V, F, Y, G) {
  var K, Q, U, ee = D.props, J = R.props, X = R.type, Z = 0;
  if (X === "svg" && (V = !0), F != null) {
    for (; Z < F.length; Z++)
      if ((K = F[Z]) && "setAttribute" in K == !!X && (X ? K.localName === X : K.nodeType === 3)) {
        E = K, F[Z] = null;
        break;
      }
  }
  if (E == null) {
    if (X === null)
      return document.createTextNode(J);
    E = V ? document.createElementNS("http://www.w3.org/2000/svg", X) : document.createElement(X, J.is && J), F = null, G = !1;
  }
  if (X === null)
    ee === J || G && E.data === J || (E.data = J);
  else {
    if (F = F && n$d.call(E.childNodes), Q = (ee = D.props || f$c).dangerouslySetInnerHTML, U = J.dangerouslySetInnerHTML, !G) {
      if (F != null)
        for (ee = {}, Z = 0; Z < E.attributes.length; Z++)
          ee[E.attributes[Z].name] = E.attributes[Z].value;
      (U || Q) && (U && (Q && U.__html == Q.__html || U.__html === E.innerHTML) || (E.innerHTML = U && U.__html || ""));
    }
    if (C$c(E, J, ee, V, G), U)
      R.__k = [];
    else if (Z = R.props.children, w$c(E, Array.isArray(Z) ? Z : [Z], R, D, W, V && X !== "foreignObject", F, Y, F ? F[0] : D.__k && _$p(D, 0), G), F != null)
      for (Z = F.length; Z--; )
        F[Z] != null && a$c(F[Z]);
    G || ("value" in J && (Z = J.value) !== void 0 && (Z !== E.value || X === "progress" && !Z || X === "option" && Z !== ee.value) && H$c(E, "value", Z, ee.value, !1), "checked" in J && (Z = J.checked) !== void 0 && Z !== E.checked && H$c(E, "checked", Z, ee.checked, !1));
  }
  return E;
}
function M$c(E, R, D) {
  try {
    typeof E == "function" ? E(R) : E.current = R;
  } catch (W) {
    l$d.__e(W, D);
  }
}
function N$c(E, R, D) {
  var W, V;
  if (l$d.unmount && l$d.unmount(E), (W = E.ref) && (W.current && W.current !== E.__e || M$c(W, null, R)), (W = E.__c) != null) {
    if (W.componentWillUnmount)
      try {
        W.componentWillUnmount();
      } catch (F) {
        l$d.__e(F, R);
      }
    W.base = W.__P = null, E.__c = void 0;
  }
  if (W = E.__k)
    for (V = 0; V < W.length; V++)
      W[V] && N$c(W[V], R, D || typeof E.type != "function");
  D || E.__e == null || a$c(E.__e), E.__ = E.__e = E.__d = void 0;
}
function O$c(E, R, D) {
  return this.constructor(E, D);
}
function P$4(E, R, D) {
  var W, V, F;
  l$d.__ && l$d.__(E, R), V = (W = typeof D == "function") ? null : D && D.__k || R.__k, F = [], j$c(R, E = (!W && D || R).__k = h$7(p$c, null, [E]), V || f$c, f$c, R.ownerSVGElement !== void 0, !W && D ? [D] : V ? null : R.firstChild ? n$d.call(R.childNodes) : null, F, !W && D ? D : V ? V.__e : R.firstChild, W), z$c(F, E);
}
n$d = e$c.slice, l$d = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} }, u$c = 0, d$c.prototype.setState = function(E, R) {
  var D;
  D = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s$c({}, this.state), typeof E == "function" && (E = E(s$c({}, D), this.props)), E && s$c(D, E), E != null && this.__v && (R && this._sb.push(R), b$c(this));
}, d$c.prototype.forceUpdate = function(E) {
  this.__v && (this.__e = !0, E && this.__h.push(E), b$c(this));
}, d$c.prototype.render = p$c, t$d = [], g$c.__r = 0;
function isRightBtn(E) {
  return E.button === 2;
}
const vars$5 = "", contextmenu = "";
var _$o = 0;
function o$o(E, R, D, W, V) {
  var F, Y, G = {};
  for (Y in R)
    Y == "ref" ? F = R[Y] : G[Y] = R[Y];
  var K = { type: E, props: G, key: D, ref: F, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_$o, __source: V, __self: W };
  if (typeof E == "function" && (F = E.defaultProps))
    for (Y in F)
      G[Y] === void 0 && (G[Y] = F[Y]);
  return l$d.vnode && l$d.vnode(K), K;
}
const index$n = "";
function getAlignment$4(E) {
  return E.split("-")[1];
}
function getLengthFromAxis$4(E) {
  return E === "y" ? "height" : "width";
}
function getSide$4(E) {
  return E.split("-")[0];
}
function getMainAxisFromPlacement$4(E) {
  return ["top", "bottom"].includes(getSide$4(E)) ? "x" : "y";
}
function computeCoordsFromPlacement$3(E, R, D) {
  let {
    reference: W,
    floating: V
  } = E;
  const F = W.x + W.width / 2 - V.width / 2, Y = W.y + W.height / 2 - V.height / 2, G = getMainAxisFromPlacement$4(R), K = getLengthFromAxis$4(G), Q = W[K] / 2 - V[K] / 2, U = getSide$4(R), ee = G === "x";
  let J;
  switch (U) {
    case "top":
      J = {
        x: F,
        y: W.y - V.height
      };
      break;
    case "bottom":
      J = {
        x: F,
        y: W.y + W.height
      };
      break;
    case "right":
      J = {
        x: W.x + W.width,
        y: Y
      };
      break;
    case "left":
      J = {
        x: W.x - V.width,
        y: Y
      };
      break;
    default:
      J = {
        x: W.x,
        y: W.y
      };
  }
  switch (getAlignment$4(R)) {
    case "start":
      J[G] -= Q * (D && ee ? -1 : 1);
      break;
    case "end":
      J[G] += Q * (D && ee ? -1 : 1);
      break;
  }
  return J;
}
const computePosition$7 = async (E, R, D) => {
  const {
    placement: W = "bottom",
    strategy: V = "absolute",
    middleware: F = [],
    platform: Y
  } = D, G = F.filter(Boolean), K = await (Y.isRTL == null ? void 0 : Y.isRTL(R));
  let Q = await Y.getElementRects({
    reference: E,
    floating: R,
    strategy: V
  }), {
    x: U,
    y: ee
  } = computeCoordsFromPlacement$3(Q, W, K), J = W, X = {}, Z = 0;
  for (let ie = 0; ie < G.length; ie++) {
    const {
      name: te,
      fn: ne
    } = G[ie], {
      x: oe,
      y: le,
      data: ce,
      reset: ue
    } = await ne({
      x: U,
      y: ee,
      initialPlacement: W,
      placement: J,
      strategy: V,
      middlewareData: X,
      rects: Q,
      platform: Y,
      elements: {
        reference: E,
        floating: R
      }
    });
    if (U = oe ?? U, ee = le ?? ee, X = {
      ...X,
      [te]: {
        ...X[te],
        ...ce
      }
    }, ue && Z <= 50) {
      Z++, typeof ue == "object" && (ue.placement && (J = ue.placement), ue.rects && (Q = ue.rects === !0 ? await Y.getElementRects({
        reference: E,
        floating: R,
        strategy: V
      }) : ue.rects), {
        x: U,
        y: ee
      } = computeCoordsFromPlacement$3(Q, J, K)), ie = -1;
      continue;
    }
  }
  return {
    x: U,
    y: ee,
    placement: J,
    strategy: V,
    middlewareData: X
  };
};
function expandPaddingObject$4(E) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...E
  };
}
function getSideObjectFromPadding$4(E) {
  return typeof E != "number" ? expandPaddingObject$4(E) : {
    top: E,
    right: E,
    bottom: E,
    left: E
  };
}
function rectToClientRect$3(E) {
  return {
    ...E,
    top: E.y,
    left: E.x,
    right: E.x + E.width,
    bottom: E.y + E.height
  };
}
async function detectOverflow$3(E, R) {
  var D;
  R === void 0 && (R = {});
  const {
    x: W,
    y: V,
    platform: F,
    rects: Y,
    elements: G,
    strategy: K
  } = E, {
    boundary: Q = "clippingAncestors",
    rootBoundary: U = "viewport",
    elementContext: ee = "floating",
    altBoundary: J = !1,
    padding: X = 0
  } = R, Z = getSideObjectFromPadding$4(X), te = G[J ? ee === "floating" ? "reference" : "floating" : ee], ne = rectToClientRect$3(await F.getClippingRect({
    element: (D = await (F.isElement == null ? void 0 : F.isElement(te))) == null || D ? te : te.contextElement || await (F.getDocumentElement == null ? void 0 : F.getDocumentElement(G.floating)),
    boundary: Q,
    rootBoundary: U,
    strategy: K
  })), oe = ee === "floating" ? {
    ...Y.floating,
    x: W,
    y: V
  } : Y.reference, le = await (F.getOffsetParent == null ? void 0 : F.getOffsetParent(G.floating)), ce = await (F.isElement == null ? void 0 : F.isElement(le)) ? await (F.getScale == null ? void 0 : F.getScale(le)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, ue = rectToClientRect$3(F.convertOffsetParentRelativeRectToViewportRelativeRect ? await F.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: oe,
    offsetParent: le,
    strategy: K
  }) : oe);
  return {
    top: (ne.top - ue.top + Z.top) / ce.y,
    bottom: (ue.bottom - ne.bottom + Z.bottom) / ce.y,
    left: (ne.left - ue.left + Z.left) / ce.x,
    right: (ue.right - ne.right + Z.right) / ce.x
  };
}
const oppositeSideMap$3 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement$3(E) {
  return E.replace(/left|right|bottom|top/g, (R) => oppositeSideMap$3[R]);
}
function getAlignmentSides$3(E, R, D) {
  D === void 0 && (D = !1);
  const W = getAlignment$4(E), V = getMainAxisFromPlacement$4(E), F = getLengthFromAxis$4(V);
  let Y = V === "x" ? W === (D ? "end" : "start") ? "right" : "left" : W === "start" ? "bottom" : "top";
  return R.reference[F] > R.floating[F] && (Y = getOppositePlacement$3(Y)), {
    main: Y,
    cross: getOppositePlacement$3(Y)
  };
}
const oppositeAlignmentMap$3 = {
  start: "end",
  end: "start"
};
function getOppositeAlignmentPlacement$3(E) {
  return E.replace(/start|end/g, (R) => oppositeAlignmentMap$3[R]);
}
function getExpandedPlacements$3(E) {
  const R = getOppositePlacement$3(E);
  return [getOppositeAlignmentPlacement$3(E), R, getOppositeAlignmentPlacement$3(R)];
}
function getSideList$3(E, R, D) {
  const W = ["left", "right"], V = ["right", "left"], F = ["top", "bottom"], Y = ["bottom", "top"];
  switch (E) {
    case "top":
    case "bottom":
      return D ? R ? V : W : R ? W : V;
    case "left":
    case "right":
      return R ? F : Y;
    default:
      return [];
  }
}
function getOppositeAxisPlacements$3(E, R, D, W) {
  const V = getAlignment$4(E);
  let F = getSideList$3(getSide$4(E), D === "start", W);
  return V && (F = F.map((Y) => Y + "-" + V), R && (F = F.concat(F.map(getOppositeAlignmentPlacement$3)))), F;
}
const flip$3 = function(E) {
  return E === void 0 && (E = {}), {
    name: "flip",
    options: E,
    async fn(R) {
      var D;
      const {
        placement: W,
        middlewareData: V,
        rects: F,
        initialPlacement: Y,
        platform: G,
        elements: K
      } = R, {
        mainAxis: Q = !0,
        crossAxis: U = !0,
        fallbackPlacements: ee,
        fallbackStrategy: J = "bestFit",
        fallbackAxisSideDirection: X = "none",
        flipAlignment: Z = !0,
        ...ie
      } = E, te = getSide$4(W), ne = getSide$4(Y) === Y, oe = await (G.isRTL == null ? void 0 : G.isRTL(K.floating)), le = ee || (ne || !Z ? [getOppositePlacement$3(Y)] : getExpandedPlacements$3(Y));
      !ee && X !== "none" && le.push(...getOppositeAxisPlacements$3(Y, Z, X, oe));
      const ce = [Y, ...le], ue = await detectOverflow$3(R, ie), pe = [];
      let de = ((D = V.flip) == null ? void 0 : D.overflows) || [];
      if (Q && pe.push(ue[te]), U) {
        const {
          main: ge,
          cross: Me
        } = getAlignmentSides$3(W, F, oe);
        pe.push(ue[ge], ue[Me]);
      }
      if (de = [...de, {
        placement: W,
        overflows: pe
      }], !pe.every((ge) => ge <= 0)) {
        var se;
        const ge = (((se = V.flip) == null ? void 0 : se.index) || 0) + 1, Me = ce[ge];
        if (Me)
          return {
            data: {
              index: ge,
              overflows: de
            },
            reset: {
              placement: Me
            }
          };
        let Ee = "bottom";
        switch (J) {
          case "bestFit": {
            var ae;
            const ye = (ae = de.map((fe) => [fe, fe.overflows.filter((_e) => _e > 0).reduce((_e, ve) => _e + ve, 0)]).sort((fe, _e) => fe[1] - _e[1])[0]) == null ? void 0 : ae[0].placement;
            ye && (Ee = ye);
            break;
          }
          case "initialPlacement":
            Ee = Y;
            break;
        }
        if (W !== Ee)
          return {
            reset: {
              placement: Ee
            }
          };
      }
      return {};
    }
  };
};
function getWindow$3(E) {
  var R;
  return ((R = E.ownerDocument) == null ? void 0 : R.defaultView) || window;
}
function getComputedStyle$1$3(E) {
  return getWindow$3(E).getComputedStyle(E);
}
function getNodeName$3(E) {
  return isNode$3(E) ? (E.nodeName || "").toLowerCase() : "";
}
let uaString$3;
function getUAString$3() {
  if (uaString$3)
    return uaString$3;
  const E = navigator.userAgentData;
  return E && Array.isArray(E.brands) ? (uaString$3 = E.brands.map((R) => R.brand + "/" + R.version).join(" "), uaString$3) : navigator.userAgent;
}
function isHTMLElement$3(E) {
  return E instanceof getWindow$3(E).HTMLElement;
}
function isElement$4(E) {
  return E instanceof getWindow$3(E).Element;
}
function isNode$3(E) {
  return E instanceof getWindow$3(E).Node;
}
function isShadowRoot$3(E) {
  if (typeof ShadowRoot > "u")
    return !1;
  const R = getWindow$3(E).ShadowRoot;
  return E instanceof R || E instanceof ShadowRoot;
}
function isOverflowElement$3(E) {
  const {
    overflow: R,
    overflowX: D,
    overflowY: W,
    display: V
  } = getComputedStyle$1$3(E);
  return /auto|scroll|overlay|hidden|clip/.test(R + W + D) && !["inline", "contents"].includes(V);
}
function isTableElement$3(E) {
  return ["table", "td", "th"].includes(getNodeName$3(E));
}
function isContainingBlock$3(E) {
  const R = /firefox/i.test(getUAString$3()), D = getComputedStyle$1$3(E), W = D.backdropFilter || D.WebkitBackdropFilter;
  return D.transform !== "none" || D.perspective !== "none" || (W ? W !== "none" : !1) || R && D.willChange === "filter" || R && (D.filter ? D.filter !== "none" : !1) || ["transform", "perspective"].some((V) => D.willChange.includes(V)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (V) => {
      const F = D.contain;
      return F != null ? F.includes(V) : !1;
    }
  );
}
function isLayoutViewport$3() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString$3());
}
function isLastTraversableNode$3(E) {
  return ["html", "body", "#document"].includes(getNodeName$3(E));
}
const min$7 = Math.min, max$7 = Math.max, round$3 = Math.round;
function getCssDimensions$3(E) {
  const R = getComputedStyle$1$3(E);
  let D = parseFloat(R.width), W = parseFloat(R.height);
  const V = E.offsetWidth, F = E.offsetHeight, Y = round$3(D) !== V || round$3(W) !== F;
  return Y && (D = V, W = F), {
    width: D,
    height: W,
    fallback: Y
  };
}
function unwrapElement$3(E) {
  return isElement$4(E) ? E : E.contextElement;
}
const FALLBACK_SCALE$3 = {
  x: 1,
  y: 1
};
function getScale$3(E) {
  const R = unwrapElement$3(E);
  if (!isHTMLElement$3(R))
    return FALLBACK_SCALE$3;
  const D = R.getBoundingClientRect(), {
    width: W,
    height: V,
    fallback: F
  } = getCssDimensions$3(R);
  let Y = (F ? round$3(D.width) : D.width) / W, G = (F ? round$3(D.height) : D.height) / V;
  return (!Y || !Number.isFinite(Y)) && (Y = 1), (!G || !Number.isFinite(G)) && (G = 1), {
    x: Y,
    y: G
  };
}
function getBoundingClientRect$3(E, R, D, W) {
  var V, F;
  R === void 0 && (R = !1), D === void 0 && (D = !1);
  const Y = E.getBoundingClientRect(), G = unwrapElement$3(E);
  let K = FALLBACK_SCALE$3;
  R && (W ? isElement$4(W) && (K = getScale$3(W)) : K = getScale$3(E));
  const Q = G ? getWindow$3(G) : window, U = !isLayoutViewport$3() && D;
  let ee = (Y.left + (U && ((V = Q.visualViewport) == null ? void 0 : V.offsetLeft) || 0)) / K.x, J = (Y.top + (U && ((F = Q.visualViewport) == null ? void 0 : F.offsetTop) || 0)) / K.y, X = Y.width / K.x, Z = Y.height / K.y;
  if (G) {
    const ie = getWindow$3(G), te = W && isElement$4(W) ? getWindow$3(W) : W;
    let ne = ie.frameElement;
    for (; ne && W && te !== ie; ) {
      const oe = getScale$3(ne), le = ne.getBoundingClientRect(), ce = getComputedStyle(ne);
      le.x += (ne.clientLeft + parseFloat(ce.paddingLeft)) * oe.x, le.y += (ne.clientTop + parseFloat(ce.paddingTop)) * oe.y, ee *= oe.x, J *= oe.y, X *= oe.x, Z *= oe.y, ee += le.x, J += le.y, ne = getWindow$3(ne).frameElement;
    }
  }
  return {
    width: X,
    height: Z,
    top: J,
    right: ee + X,
    bottom: J + Z,
    left: ee,
    x: ee,
    y: J
  };
}
function getDocumentElement$3(E) {
  return ((isNode$3(E) ? E.ownerDocument : E.document) || window.document).documentElement;
}
function getNodeScroll$3(E) {
  return isElement$4(E) ? {
    scrollLeft: E.scrollLeft,
    scrollTop: E.scrollTop
  } : {
    scrollLeft: E.pageXOffset,
    scrollTop: E.pageYOffset
  };
}
function getWindowScrollBarX$3(E) {
  return getBoundingClientRect$3(getDocumentElement$3(E)).left + getNodeScroll$3(E).scrollLeft;
}
function getRectRelativeToOffsetParent$3(E, R, D) {
  const W = isHTMLElement$3(R), V = getDocumentElement$3(R), F = getBoundingClientRect$3(E, !0, D === "fixed", R);
  let Y = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const G = {
    x: 0,
    y: 0
  };
  if (W || !W && D !== "fixed")
    if ((getNodeName$3(R) !== "body" || isOverflowElement$3(V)) && (Y = getNodeScroll$3(R)), isHTMLElement$3(R)) {
      const K = getBoundingClientRect$3(R, !0);
      G.x = K.x + R.clientLeft, G.y = K.y + R.clientTop;
    } else
      V && (G.x = getWindowScrollBarX$3(V));
  return {
    x: F.left + Y.scrollLeft - G.x,
    y: F.top + Y.scrollTop - G.y,
    width: F.width,
    height: F.height
  };
}
function getParentNode$3(E) {
  if (getNodeName$3(E) === "html")
    return E;
  const R = (
    // Step into the shadow DOM of the parent of a slotted node
    E.assignedSlot || // DOM Element detected
    E.parentNode || // ShadowRoot detected
    (isShadowRoot$3(E) ? E.host : null) || // Fallback
    getDocumentElement$3(E)
  );
  return isShadowRoot$3(R) ? R.host : R;
}
function getTrueOffsetParent$3(E) {
  return !isHTMLElement$3(E) || getComputedStyle$1$3(E).position === "fixed" ? null : E.offsetParent;
}
function getContainingBlock$3(E) {
  let R = getParentNode$3(E);
  for (; isHTMLElement$3(R) && !isLastTraversableNode$3(R); ) {
    if (isContainingBlock$3(R))
      return R;
    R = getParentNode$3(R);
  }
  return null;
}
function getOffsetParent$3(E) {
  const R = getWindow$3(E);
  let D = getTrueOffsetParent$3(E);
  for (; D && isTableElement$3(D) && getComputedStyle$1$3(D).position === "static"; )
    D = getTrueOffsetParent$3(D);
  return D && (getNodeName$3(D) === "html" || getNodeName$3(D) === "body" && getComputedStyle$1$3(D).position === "static" && !isContainingBlock$3(D)) ? R : D || getContainingBlock$3(E) || R;
}
function getDimensions$3(E) {
  return getCssDimensions$3(E);
}
function convertOffsetParentRelativeRectToViewportRelativeRect$3(E) {
  let {
    rect: R,
    offsetParent: D,
    strategy: W
  } = E;
  const V = isHTMLElement$3(D), F = getDocumentElement$3(D);
  if (D === F)
    return R;
  let Y = {
    scrollLeft: 0,
    scrollTop: 0
  }, G = {
    x: 1,
    y: 1
  };
  const K = {
    x: 0,
    y: 0
  };
  if ((V || !V && W !== "fixed") && ((getNodeName$3(D) !== "body" || isOverflowElement$3(F)) && (Y = getNodeScroll$3(D)), isHTMLElement$3(D))) {
    const Q = getBoundingClientRect$3(D);
    G = getScale$3(D), K.x = Q.x + D.clientLeft, K.y = Q.y + D.clientTop;
  }
  return {
    width: R.width * G.x,
    height: R.height * G.y,
    x: R.x * G.x - Y.scrollLeft * G.x + K.x,
    y: R.y * G.y - Y.scrollTop * G.y + K.y
  };
}
function getViewportRect$3(E, R) {
  const D = getWindow$3(E), W = getDocumentElement$3(E), V = D.visualViewport;
  let F = W.clientWidth, Y = W.clientHeight, G = 0, K = 0;
  if (V) {
    F = V.width, Y = V.height;
    const Q = isLayoutViewport$3();
    (Q || !Q && R === "fixed") && (G = V.offsetLeft, K = V.offsetTop);
  }
  return {
    width: F,
    height: Y,
    x: G,
    y: K
  };
}
function getDocumentRect$3(E) {
  var R;
  const D = getDocumentElement$3(E), W = getNodeScroll$3(E), V = (R = E.ownerDocument) == null ? void 0 : R.body, F = max$7(D.scrollWidth, D.clientWidth, V ? V.scrollWidth : 0, V ? V.clientWidth : 0), Y = max$7(D.scrollHeight, D.clientHeight, V ? V.scrollHeight : 0, V ? V.clientHeight : 0);
  let G = -W.scrollLeft + getWindowScrollBarX$3(E);
  const K = -W.scrollTop;
  return getComputedStyle$1$3(V || D).direction === "rtl" && (G += max$7(D.clientWidth, V ? V.clientWidth : 0) - F), {
    width: F,
    height: Y,
    x: G,
    y: K
  };
}
function getNearestOverflowAncestor$3(E) {
  const R = getParentNode$3(E);
  return isLastTraversableNode$3(R) ? E.ownerDocument.body : isHTMLElement$3(R) && isOverflowElement$3(R) ? R : getNearestOverflowAncestor$3(R);
}
function getOverflowAncestors$3(E, R) {
  var D;
  R === void 0 && (R = []);
  const W = getNearestOverflowAncestor$3(E), V = W === ((D = E.ownerDocument) == null ? void 0 : D.body), F = getWindow$3(W);
  return V ? R.concat(F, F.visualViewport || [], isOverflowElement$3(W) ? W : []) : R.concat(W, getOverflowAncestors$3(W));
}
function getInnerBoundingClientRect$3(E, R) {
  const D = getBoundingClientRect$3(E, !0, R === "fixed"), W = D.top + E.clientTop, V = D.left + E.clientLeft, F = isHTMLElement$3(E) ? getScale$3(E) : {
    x: 1,
    y: 1
  }, Y = E.clientWidth * F.x, G = E.clientHeight * F.y, K = V * F.x, Q = W * F.y;
  return {
    top: Q,
    left: K,
    right: K + Y,
    bottom: Q + G,
    x: K,
    y: Q,
    width: Y,
    height: G
  };
}
function getClientRectFromClippingAncestor$3(E, R, D) {
  return R === "viewport" ? rectToClientRect$3(getViewportRect$3(E, D)) : isElement$4(R) ? getInnerBoundingClientRect$3(R, D) : rectToClientRect$3(getDocumentRect$3(getDocumentElement$3(E)));
}
function getClippingElementAncestors$3(E, R) {
  const D = R.get(E);
  if (D)
    return D;
  let W = getOverflowAncestors$3(E).filter((G) => isElement$4(G) && getNodeName$3(G) !== "body"), V = null;
  const F = getComputedStyle$1$3(E).position === "fixed";
  let Y = F ? getParentNode$3(E) : E;
  for (; isElement$4(Y) && !isLastTraversableNode$3(Y); ) {
    const G = getComputedStyle$1$3(Y), K = isContainingBlock$3(Y);
    (F ? !K && !V : !K && G.position === "static" && !!V && ["absolute", "fixed"].includes(V.position)) ? W = W.filter((U) => U !== Y) : V = G, Y = getParentNode$3(Y);
  }
  return R.set(E, W), W;
}
function getClippingRect$3(E) {
  let {
    element: R,
    boundary: D,
    rootBoundary: W,
    strategy: V
  } = E;
  const Y = [...D === "clippingAncestors" ? getClippingElementAncestors$3(R, this._c) : [].concat(D), W], G = Y[0], K = Y.reduce((Q, U) => {
    const ee = getClientRectFromClippingAncestor$3(R, U, V);
    return Q.top = max$7(ee.top, Q.top), Q.right = min$7(ee.right, Q.right), Q.bottom = min$7(ee.bottom, Q.bottom), Q.left = max$7(ee.left, Q.left), Q;
  }, getClientRectFromClippingAncestor$3(R, G, V));
  return {
    width: K.right - K.left,
    height: K.bottom - K.top,
    x: K.left,
    y: K.top
  };
}
const platform$3 = {
  getClippingRect: getClippingRect$3,
  convertOffsetParentRelativeRectToViewportRelativeRect: convertOffsetParentRelativeRectToViewportRelativeRect$3,
  isElement: isElement$4,
  getDimensions: getDimensions$3,
  getOffsetParent: getOffsetParent$3,
  getDocumentElement: getDocumentElement$3,
  getScale: getScale$3,
  async getElementRects(E) {
    let {
      reference: R,
      floating: D,
      strategy: W
    } = E;
    const V = this.getOffsetParent || getOffsetParent$3, F = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent$3(R, await V(D), W),
      floating: {
        x: 0,
        y: 0,
        ...await F(D)
      }
    };
  },
  getClientRects: (E) => Array.from(E.getClientRects()),
  isRTL: (E) => getComputedStyle$1$3(E).direction === "rtl"
};
function autoUpdate$3(E, R, D, W) {
  W === void 0 && (W = {});
  const {
    ancestorScroll: V = !0,
    ancestorResize: F = !0,
    elementResize: Y = !0,
    animationFrame: G = !1
  } = W, K = V && !G, Q = K || F ? [...isElement$4(E) ? getOverflowAncestors$3(E) : E.contextElement ? getOverflowAncestors$3(E.contextElement) : [], ...getOverflowAncestors$3(R)] : [];
  Q.forEach((Z) => {
    K && Z.addEventListener("scroll", D, {
      passive: !0
    }), F && Z.addEventListener("resize", D);
  });
  let U = null;
  if (Y) {
    let Z = !0;
    U = new ResizeObserver(() => {
      Z || D(), Z = !1;
    }), isElement$4(E) && !G && U.observe(E), !isElement$4(E) && E.contextElement && !G && U.observe(E.contextElement), U.observe(R);
  }
  let ee, J = G ? getBoundingClientRect$3(E) : null;
  G && X();
  function X() {
    const Z = getBoundingClientRect$3(E);
    J && (Z.x !== J.x || Z.y !== J.y || Z.width !== J.width || Z.height !== J.height) && D(), J = Z, ee = requestAnimationFrame(X);
  }
  return D(), () => {
    var Z;
    Q.forEach((ie) => {
      K && ie.removeEventListener("scroll", D), F && ie.removeEventListener("resize", D);
    }), (Z = U) == null || Z.disconnect(), U = null, G && cancelAnimationFrame(ee);
  };
}
const computePosition$6 = (E, R, D) => {
  const W = /* @__PURE__ */ new Map(), V = {
    platform: platform$3,
    ...D
  }, F = {
    ...V.platform,
    _c: W
  };
  return computePosition$7(E, R, {
    ...V,
    platform: F
  });
};
let ContextMenu$1 = class extends Menu$1 {
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
      middleware: [flip$3()],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var R;
    return (R = this.ref.current) == null ? void 0 : R.parentElement;
  }
  _createPopper() {
    const R = this._getPopperOptions();
    this.ref.current && computePosition$6(this._getPopperElement(), this.ref.current, R).then(({ x: D, y: W }) => {
      Object.assign(this.ref.current.style, {
        left: `${D}px`,
        top: `${W}px`,
        position: "absolute"
      });
    });
  }
  afterRender(R) {
    super.afterRender(R), this.props.controlledMenu && this._createPopper();
  }
  beforeRender() {
    const R = super.beforeRender();
    return R.className = classes(R.className, "menu-popup"), R;
  }
  renderToggleIcon() {
    return /* @__PURE__ */ o$o("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var ct, Mt, an, _n, Jn, Nr, Zn, Rr;
class ContextMenu extends ComponentBase {
  constructor() {
    super(...arguments);
    he(this, Jn);
    he(this, Zn);
    he(this, ct, void 0);
    he(this, Mt, void 0);
    he(this, an, void 0);
    me(this, "arrowEl");
    he(this, _n, void 0);
  }
  get isShown() {
    var D;
    return (D = re(this, ct)) == null ? void 0 : D.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return re(this, ct) || this._ensureMenu();
  }
  get trigger() {
    return re(this, an) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: D } = this;
    D !== document.body && !D.hasAttribute("data-toggle") && D.setAttribute("data-toggle", "contextmenu");
  }
  show(D) {
    return xe(this, an, D), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper(), this.emit("shown", this), !0);
  }
  hide() {
    var W, V;
    return (W = re(this, _n)) == null || W.call(this), this.emit("hide", this).defaultPrevented ? !1 : ((V = re(this, ct)) == null || V.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(D) {
    return this.isShown ? this.hide() : this.show(D);
  }
  destroy() {
    var D;
    super.destroy(), (D = re(this, ct)) == null || D.remove();
  }
  _ensureMenu() {
    var F;
    const { element: D } = this, W = this.constructor.MENU_CLASS;
    let V;
    if (this.isDynamic)
      V = document.createElement("div"), V.classList.add(W), document.body.appendChild(V);
    else if (D) {
      const Y = D.getAttribute("href") ?? D.dataset.target;
      if ((Y == null ? void 0 : Y[0]) === "#" && (V = document.querySelector(Y)), !V) {
        const G = D.nextElementSibling;
        G != null && G.classList.contains(W) ? V = G : V = (F = D.parentNode) == null ? void 0 : F.querySelector(`.${W}`);
      }
      V && V.classList.add("menu-popup");
    }
    if (!V)
      throw new Error("ContextMenu: Cannot find menu element");
    return V.style.width = "max-content", V.style.position = this.options.strategy, V.style.top = "0", V.style.left = "0", xe(this, ct, V), V;
  }
  _getPopperOptions() {
    var F;
    const { placement: D, strategy: W } = this.options, V = {
      middleware: [],
      placement: D,
      strategy: W
    };
    return this.options.flip && ((F = V.middleware) == null || F.push(flip$3())), V;
  }
  _createPopper() {
    const D = this._getPopperOptions(), W = this._getPopperElement();
    xe(this, _n, autoUpdate$3(W, this.menu, () => {
      computePosition$6(W, this.menu, D).then(({ x: V, y: F, middlewareData: Y, placement: G }) => {
        Object.assign(this.menu.style, {
          left: `${V}px`,
          top: `${F}px`
        });
        const K = G.split("-")[0], Q = ke(this, Jn, Nr).call(this, K);
        if (Y.arrow && this.arrowEl) {
          const { x: U, y: ee } = Y.arrow;
          Object.assign(this.arrowEl.style, {
            left: U != null ? `${U}px` : "",
            top: ee != null ? `${ee}px` : "",
            [Q]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...ke(this, Zn, Rr).call(this, K)
          });
        }
      });
    }));
  }
  _getMenuOptions() {
    const { menu: D, items: W } = this.options;
    let V = W || (D == null ? void 0 : D.items);
    if (V)
      return typeof V == "function" && (V = V(this)), {
        nestedTrigger: "hover",
        ...D,
        items: V
      };
  }
  _renderMenu() {
    const D = this._getMenuOptions();
    return !D || this.emit("updateMenu", { menu: D, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (P$4(h$7(ContextMenu$1, D), this.menu), !0);
  }
  _getPopperElement() {
    return re(this, Mt) || xe(this, Mt, {
      getBoundingClientRect: () => {
        const { trigger: D } = this;
        if (D instanceof MouseEvent) {
          const { clientX: W, clientY: V } = D;
          return {
            width: 0,
            height: 0,
            top: V,
            right: W,
            bottom: V,
            left: W
          };
        }
        return D instanceof HTMLElement ? D.getBoundingClientRect() : D;
      },
      contextElement: this.element
    }), re(this, Mt);
  }
  static clear(D) {
    var K, Q;
    D instanceof Event && (D = { event: D });
    const { event: W, exclude: V, ignoreSelector: F = ".not-hide-menu" } = D || {};
    if (W && F && ((Q = (K = W.target).closest) != null && Q.call(K, F)) || W && isRightBtn(W))
      return;
    const Y = this.getAll().entries(), G = new Set(V || []);
    for (const [U, ee] of Y)
      G.has(U) || ee.hide();
  }
  static show(D) {
    const { event: W, ...V } = D, F = this.ensure(document.body);
    return Object.keys(V).length && F.setOptions(V), F.show(W), W instanceof Event && W.stopPropagation(), F;
  }
  static hide() {
    const D = this.get(document.body);
    return D == null || D.hide(), D;
  }
}
ct = new WeakMap(), Mt = new WeakMap(), an = new WeakMap(), _n = new WeakMap(), Jn = new WeakSet(), Nr = function(D) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[D];
}, Zn = new WeakSet(), Rr = function(D) {
  return D === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : D === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : D === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
}, me(ContextMenu, "NAME", "contextmenu"), me(ContextMenu, "EVENTS", !0), me(ContextMenu, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), me(ContextMenu, "MENU_CLASS", "contextmenu"), me(ContextMenu, "CLASS_SHOW", "show"), me(ContextMenu, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (E) => {
  var W;
  const R = E.target;
  if ((W = R.closest) != null && W.call(R, `.${ContextMenu.MENU_CLASS}`))
    return;
  const D = R.closest(ContextMenu.MENU_SELECTOR);
  D && (ContextMenu.ensure(D).show(E), E.preventDefault());
});
document.addEventListener("click", ContextMenu.clear.bind(ContextMenu));
const dropdown = "";
function getAlignment$3(E) {
  return E.split("-")[1];
}
function getLengthFromAxis$3(E) {
  return E === "y" ? "height" : "width";
}
function getSide$3(E) {
  return E.split("-")[0];
}
function getMainAxisFromPlacement$3(E) {
  return ["top", "bottom"].includes(getSide$3(E)) ? "x" : "y";
}
function expandPaddingObject$3(E) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...E
  };
}
function getSideObjectFromPadding$3(E) {
  return typeof E != "number" ? expandPaddingObject$3(E) : {
    top: E,
    right: E,
    bottom: E,
    left: E
  };
}
const min$6 = Math.min, max$6 = Math.max;
function within$3(E, R, D) {
  return max$6(E, min$6(R, D));
}
const arrow$3 = (E) => ({
  name: "arrow",
  options: E,
  async fn(R) {
    const {
      element: D,
      padding: W = 0
    } = E || {}, {
      x: V,
      y: F,
      placement: Y,
      rects: G,
      platform: K
    } = R;
    if (D == null)
      return {};
    const Q = getSideObjectFromPadding$3(W), U = {
      x: V,
      y: F
    }, ee = getMainAxisFromPlacement$3(Y), J = getLengthFromAxis$3(ee), X = await K.getDimensions(D), Z = ee === "y" ? "top" : "left", ie = ee === "y" ? "bottom" : "right", te = G.reference[J] + G.reference[ee] - U[ee] - G.floating[J], ne = U[ee] - G.reference[ee], oe = await (K.getOffsetParent == null ? void 0 : K.getOffsetParent(D));
    let le = oe ? ee === "y" ? oe.clientHeight || 0 : oe.clientWidth || 0 : 0;
    le === 0 && (le = G.floating[J]);
    const ce = te / 2 - ne / 2, ue = Q[Z], pe = le - X[J] - Q[ie], de = le / 2 - X[J] / 2 + ce, se = within$3(ue, de, pe), ge = getAlignment$3(Y) != null && de != se && G.reference[J] / 2 - (de < ue ? Q[Z] : Q[ie]) - X[J] / 2 < 0 ? de < ue ? ue - de : pe - de : 0;
    return {
      [ee]: U[ee] - ge,
      data: {
        [ee]: se,
        centerOffset: de - se
      }
    };
  }
});
async function convertValueToCoords$3(E, R) {
  const {
    placement: D,
    platform: W,
    elements: V
  } = E, F = await (W.isRTL == null ? void 0 : W.isRTL(V.floating)), Y = getSide$3(D), G = getAlignment$3(D), K = getMainAxisFromPlacement$3(D) === "x", Q = ["left", "top"].includes(Y) ? -1 : 1, U = F && K ? -1 : 1, ee = typeof R == "function" ? R(E) : R;
  let {
    mainAxis: J,
    crossAxis: X,
    alignmentAxis: Z
  } = typeof ee == "number" ? {
    mainAxis: ee,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...ee
  };
  return G && typeof Z == "number" && (X = G === "end" ? Z * -1 : Z), K ? {
    x: X * U,
    y: J * Q
  } : {
    x: J * Q,
    y: X * U
  };
}
const offset$3 = function(E) {
  return E === void 0 && (E = 0), {
    name: "offset",
    options: E,
    async fn(R) {
      const {
        x: D,
        y: W
      } = R, V = await convertValueToCoords$3(R, E);
      return {
        x: D + V.x,
        y: W + V.y,
        data: V
      };
    }
  };
};
var Lt, Nt, Rt, Qn, Dr;
const xr = class extends ContextMenu {
  constructor() {
    super(...arguments);
    he(this, Qn);
    he(this, Lt, !1);
    he(this, Nt, 0);
    me(this, "hideLater", () => {
      re(this, Rt).call(this), xe(this, Nt, window.setTimeout(this.hide.bind(this), 100));
    });
    he(this, Rt, () => {
      clearTimeout(re(this, Nt)), xe(this, Nt, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(D, W) {
    (W == null ? void 0 : W.clearOthers) !== !1 && xr.clear({ event: W == null ? void 0 : W.event, exclude: [this.element] });
    const V = super.show(D);
    return V && (!re(this, Lt) && this.isHover && ke(this, Qn, Dr).call(this), this.element.classList.add(this.elementShowClass)), V;
  }
  hide() {
    const D = super.hide();
    return D && this.element.classList.remove(this.elementShowClass), D;
  }
  toggle(D, W) {
    return this.isShown ? this.hide() : this.show(D, { event: D, ...W });
  }
  destroy() {
    re(this, Lt) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", re(this, Rt)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: D } = this.options;
    return D ? typeof D == "number" ? D : 8 : 0;
  }
  _getPopperOptions() {
    var V, F;
    const D = super._getPopperOptions(), W = this._getArrowSize();
    return W && this.arrowEl && ((V = D.middleware) == null || V.push(offset$3(W)), (F = D.middleware) == null || F.push(arrow$3({ element: this.arrowEl }))), D;
  }
  _ensureMenu() {
    const D = super._ensureMenu();
    if (this.options.arrow) {
      const W = this._getArrowSize();
      this.arrowEl = document.createElement("div"), this.arrowEl.style.position = "absolute", this.arrowEl.style.width = `${W}px`, this.arrowEl.style.height = `${W}px`, this.arrowEl.style.transform = "rotate(45deg)", D.append(this.arrowEl);
    }
    return D;
  }
  _getMenuOptions() {
    const D = super._getMenuOptions();
    if (D && this.options.arrow) {
      const { afterRender: W } = D;
      D.afterRender = (...V) => {
        var F;
        this.arrowEl && ((F = this.menu.querySelector(".menu")) == null || F.appendChild(this.arrowEl)), W == null || W(...V);
      };
    }
    return D;
  }
};
let Dropdown = xr;
Lt = new WeakMap(), Nt = new WeakMap(), Rt = new WeakMap(), Qn = new WeakSet(), Dr = function() {
  const { menu: D } = this;
  D.addEventListener("mouseenter", re(this, Rt)), D.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), xe(this, Lt, !0);
}, me(Dropdown, "NAME", "dropdown"), me(Dropdown, "MENU_CLASS", "dropdown-menu"), me(Dropdown, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), me(Dropdown, "DEFAULT", {
  ...ContextMenu.DEFAULT,
  strategy: "fixed",
  trigger: "click"
});
document.addEventListener("click", function(E) {
  var W;
  const R = E.target, D = (W = R.closest) == null ? void 0 : W.call(R, Dropdown.MENU_SELECTOR);
  if (D) {
    const V = Dropdown.ensure(D);
    V.options.trigger === "click" && V.toggle();
  } else
    Dropdown.clear({ event: E });
});
document.addEventListener("mouseover", function(E) {
  var V;
  const R = E.target, D = (V = R.closest) == null ? void 0 : V.call(R, Dropdown.MENU_SELECTOR);
  if (!D)
    return;
  const W = Dropdown.ensure(D);
  W.isHover && W.show();
});
const handleScroll$2 = (E) => {
  const R = document.getElementsByClassName("with-dropdown-show")[0];
  if (!R)
    return;
  const D = typeof R.closest == "function" ? R.closest(Dropdown.MENU_SELECTOR) : null;
  !D || !E.target.contains(D) || Dropdown.clear({ event: E });
};
window.addEventListener("scroll", handleScroll$2, !0);
var un, Dt;
class DropdownTrigger extends d$d {
  constructor(D) {
    var W;
    super(D);
    he(this, un, void 0);
    he(this, Dt, y$6());
    this.state = { placement: ((W = D.dropdown) == null ? void 0 : W.placement) || "", show: !1 };
  }
  get ref() {
    return re(this, Dt);
  }
  get triggerElement() {
    return re(this, Dt).current;
  }
  componentDidMount() {
    const { modifiers: D = [], ...W } = this.props.dropdown || {};
    D.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: V }) => {
        var Y;
        const F = ((Y = V.placement) == null ? void 0 : Y.split("-").shift()) || "";
        this.setState({ placement: F });
      }
    }), xe(this, un, Dropdown.ensure(this.triggerElement, {
      ...W,
      modifiers: D,
      onShow: () => {
        this.setState({ show: !0 });
      },
      onHide: () => {
        this.setState({ show: !0 });
      }
    }));
  }
  componentWillUnmount() {
    var D;
    (D = re(this, un)) == null || D.destroy();
  }
  beforeRender() {
    const { className: D, children: W, dropdown: V, ...F } = this.props;
    return {
      className: classes("dropdown", D),
      children: typeof W == "function" ? W(this.state) : W,
      ...F,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: re(this, Dt)
    };
  }
  render() {
    const { children: D, ...W } = this.beforeRender();
    return /* @__PURE__ */ o$q("div", { ...W, children: D });
  }
}
un = new WeakMap(), Dt = new WeakMap();
class DropdownButton extends DropdownTrigger {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var F;
    const { placement: R, show: D } = this.state, W = this.beforeRender();
    let { caret: V = !0 } = W;
    if (V !== !1 && (D || V === !0)) {
      const Y = D ? R : (F = this.props.dropdown) == null ? void 0 : F.placement;
      V = (Y === "top" ? "up" : Y === "bottom" ? "down" : Y) || (typeof V == "string" ? V : "") || "down";
    }
    return W.caret = V, /* @__PURE__ */ o$q(Button$1, { ...W });
  }
}
function ToolbarDropdown({
  key: E,
  type: R,
  btnType: D,
  ...W
}) {
  return /* @__PURE__ */ o$s(DropdownButton, { type: D, ...W });
}
var n$c, l$c, u$b, i$3, t$c, o$n, f$b = {}, e$b = [], c$b = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$b(E, R) {
  for (var D in R)
    E[D] = R[D];
  return E;
}
function a$b(E) {
  var R = E.parentNode;
  R && R.removeChild(E);
}
function h$6(E, R, D) {
  var W, V, F, Y = {};
  for (F in R)
    F == "key" ? W = R[F] : F == "ref" ? V = R[F] : Y[F] = R[F];
  if (arguments.length > 2 && (Y.children = arguments.length > 3 ? n$c.call(arguments, 2) : D), typeof E == "function" && E.defaultProps != null)
    for (F in E.defaultProps)
      Y[F] === void 0 && (Y[F] = E.defaultProps[F]);
  return v$b(E, Y, W, V, null);
}
function v$b(E, R, D, W, V) {
  var F = { type: E, props: R, key: D, ref: W, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: V ?? ++u$b };
  return V == null && l$c.vnode != null && l$c.vnode(F), F;
}
function p$b(E) {
  return E.children;
}
function d$b(E, R) {
  this.props = E, this.context = R;
}
function _$n(E, R) {
  if (R == null)
    return E.__ ? _$n(E.__, E.__.__k.indexOf(E) + 1) : null;
  for (var D; R < E.__k.length; R++)
    if ((D = E.__k[R]) != null && D.__e != null)
      return D.__e;
  return typeof E.type == "function" ? _$n(E) : null;
}
function k$b(E) {
  var R, D;
  if ((E = E.__) != null && E.__c != null) {
    for (E.__e = E.__c.base = null, R = 0; R < E.__k.length; R++)
      if ((D = E.__k[R]) != null && D.__e != null) {
        E.__e = E.__c.base = D.__e;
        break;
      }
    return k$b(E);
  }
}
function b$b(E) {
  (!E.__d && (E.__d = !0) && t$c.push(E) && !g$b.__r++ || o$n !== l$c.debounceRendering) && ((o$n = l$c.debounceRendering) || setTimeout)(g$b);
}
function g$b() {
  for (var E; g$b.__r = t$c.length; )
    E = t$c.sort(function(R, D) {
      return R.__v.__b - D.__v.__b;
    }), t$c = [], E.some(function(R) {
      var D, W, V, F, Y, G;
      R.__d && (Y = (F = (D = R).__v).__e, (G = D.__P) && (W = [], (V = s$b({}, F)).__v = F.__v + 1, j$b(G, F, V, D.__n, G.ownerSVGElement !== void 0, F.__h != null ? [Y] : null, W, Y ?? _$n(F), F.__h), z$b(W, F), F.__e != Y && k$b(F)));
    });
}
function w$b(E, R, D, W, V, F, Y, G, K, Q) {
  var U, ee, J, X, Z, ie, te, ne = W && W.__k || e$b, oe = ne.length;
  for (D.__k = [], U = 0; U < R.length; U++)
    if ((X = D.__k[U] = (X = R[U]) == null || typeof X == "boolean" ? null : typeof X == "string" || typeof X == "number" || typeof X == "bigint" ? v$b(null, X, null, null, X) : Array.isArray(X) ? v$b(p$b, { children: X }, null, null, null) : X.__b > 0 ? v$b(X.type, X.props, X.key, X.ref ? X.ref : null, X.__v) : X) != null) {
      if (X.__ = D, X.__b = D.__b + 1, (J = ne[U]) === null || J && X.key == J.key && X.type === J.type)
        ne[U] = void 0;
      else
        for (ee = 0; ee < oe; ee++) {
          if ((J = ne[ee]) && X.key == J.key && X.type === J.type) {
            ne[ee] = void 0;
            break;
          }
          J = null;
        }
      j$b(E, X, J = J || f$b, V, F, Y, G, K, Q), Z = X.__e, (ee = X.ref) && J.ref != ee && (te || (te = []), J.ref && te.push(J.ref, null, X), te.push(ee, X.__c || Z, X)), Z != null ? (ie == null && (ie = Z), typeof X.type == "function" && X.__k === J.__k ? X.__d = K = m$c(X, K, E) : K = A$b(E, X, J, ne, Z, K), typeof D.type == "function" && (D.__d = K)) : K && J.__e == K && K.parentNode != E && (K = _$n(J));
    }
  for (D.__e = ie, U = oe; U--; )
    ne[U] != null && N$b(ne[U], ne[U]);
  if (te)
    for (U = 0; U < te.length; U++)
      M$b(te[U], te[++U], te[++U]);
}
function m$c(E, R, D) {
  for (var W, V = E.__k, F = 0; V && F < V.length; F++)
    (W = V[F]) && (W.__ = E, R = typeof W.type == "function" ? m$c(W, R, D) : A$b(D, W, W, V, W.__e, R));
  return R;
}
function A$b(E, R, D, W, V, F) {
  var Y, G, K;
  if (R.__d !== void 0)
    Y = R.__d, R.__d = void 0;
  else if (D == null || V != F || V.parentNode == null)
    e:
      if (F == null || F.parentNode !== E)
        E.appendChild(V), Y = null;
      else {
        for (G = F, K = 0; (G = G.nextSibling) && K < W.length; K += 2)
          if (G == V)
            break e;
        E.insertBefore(V, F), Y = F;
      }
  return Y !== void 0 ? Y : V.nextSibling;
}
function C$b(E, R, D, W, V) {
  var F;
  for (F in D)
    F === "children" || F === "key" || F in R || H$b(E, F, null, D[F], W);
  for (F in R)
    V && typeof R[F] != "function" || F === "children" || F === "key" || F === "value" || F === "checked" || D[F] === R[F] || H$b(E, F, R[F], D[F], W);
}
function $$c(E, R, D) {
  R[0] === "-" ? E.setProperty(R, D) : E[R] = D == null ? "" : typeof D != "number" || c$b.test(R) ? D : D + "px";
}
function H$b(E, R, D, W, V) {
  var F;
  e:
    if (R === "style")
      if (typeof D == "string")
        E.style.cssText = D;
      else {
        if (typeof W == "string" && (E.style.cssText = W = ""), W)
          for (R in W)
            D && R in D || $$c(E.style, R, "");
        if (D)
          for (R in D)
            W && D[R] === W[R] || $$c(E.style, R, D[R]);
      }
    else if (R[0] === "o" && R[1] === "n")
      F = R !== (R = R.replace(/Capture$/, "")), R = R.toLowerCase() in E ? R.toLowerCase().slice(2) : R.slice(2), E.l || (E.l = {}), E.l[R + F] = D, D ? W || E.addEventListener(R, F ? T$b : I$b, F) : E.removeEventListener(R, F ? T$b : I$b, F);
    else if (R !== "dangerouslySetInnerHTML") {
      if (V)
        R = R.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (R !== "href" && R !== "list" && R !== "form" && R !== "tabIndex" && R !== "download" && R in E)
        try {
          E[R] = D ?? "";
          break e;
        } catch {
        }
      typeof D == "function" || (D == null || D === !1 && R.indexOf("-") == -1 ? E.removeAttribute(R) : E.setAttribute(R, D));
    }
}
function I$b(E) {
  this.l[E.type + !1](l$c.event ? l$c.event(E) : E);
}
function T$b(E) {
  this.l[E.type + !0](l$c.event ? l$c.event(E) : E);
}
function j$b(E, R, D, W, V, F, Y, G, K) {
  var Q, U, ee, J, X, Z, ie, te, ne, oe, le, ce, ue, pe, de, se = R.type;
  if (R.constructor !== void 0)
    return null;
  D.__h != null && (K = D.__h, G = R.__e = D.__e, R.__h = null, F = [G]), (Q = l$c.__b) && Q(R);
  try {
    e:
      if (typeof se == "function") {
        if (te = R.props, ne = (Q = se.contextType) && W[Q.__c], oe = Q ? ne ? ne.props.value : Q.__ : W, D.__c ? ie = (U = R.__c = D.__c).__ = U.__E : ("prototype" in se && se.prototype.render ? R.__c = U = new se(te, oe) : (R.__c = U = new d$b(te, oe), U.constructor = se, U.render = O$b), ne && ne.sub(U), U.props = te, U.state || (U.state = {}), U.context = oe, U.__n = W, ee = U.__d = !0, U.__h = [], U._sb = []), U.__s == null && (U.__s = U.state), se.getDerivedStateFromProps != null && (U.__s == U.state && (U.__s = s$b({}, U.__s)), s$b(U.__s, se.getDerivedStateFromProps(te, U.__s))), J = U.props, X = U.state, ee)
          se.getDerivedStateFromProps == null && U.componentWillMount != null && U.componentWillMount(), U.componentDidMount != null && U.__h.push(U.componentDidMount);
        else {
          if (se.getDerivedStateFromProps == null && te !== J && U.componentWillReceiveProps != null && U.componentWillReceiveProps(te, oe), !U.__e && U.shouldComponentUpdate != null && U.shouldComponentUpdate(te, U.__s, oe) === !1 || R.__v === D.__v) {
            for (U.props = te, U.state = U.__s, R.__v !== D.__v && (U.__d = !1), U.__v = R, R.__e = D.__e, R.__k = D.__k, R.__k.forEach(function(ae) {
              ae && (ae.__ = R);
            }), le = 0; le < U._sb.length; le++)
              U.__h.push(U._sb[le]);
            U._sb = [], U.__h.length && Y.push(U);
            break e;
          }
          U.componentWillUpdate != null && U.componentWillUpdate(te, U.__s, oe), U.componentDidUpdate != null && U.__h.push(function() {
            U.componentDidUpdate(J, X, Z);
          });
        }
        if (U.context = oe, U.props = te, U.__v = R, U.__P = E, ce = l$c.__r, ue = 0, "prototype" in se && se.prototype.render) {
          for (U.state = U.__s, U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), pe = 0; pe < U._sb.length; pe++)
            U.__h.push(U._sb[pe]);
          U._sb = [];
        } else
          do
            U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), U.state = U.__s;
          while (U.__d && ++ue < 25);
        U.state = U.__s, U.getChildContext != null && (W = s$b(s$b({}, W), U.getChildContext())), ee || U.getSnapshotBeforeUpdate == null || (Z = U.getSnapshotBeforeUpdate(J, X)), de = Q != null && Q.type === p$b && Q.key == null ? Q.props.children : Q, w$b(E, Array.isArray(de) ? de : [de], R, D, W, V, F, Y, G, K), U.base = R.__e, R.__h = null, U.__h.length && Y.push(U), ie && (U.__E = U.__ = null), U.__e = !1;
      } else
        F == null && R.__v === D.__v ? (R.__k = D.__k, R.__e = D.__e) : R.__e = L$b(D.__e, R, D, W, V, F, Y, K);
    (Q = l$c.diffed) && Q(R);
  } catch (ae) {
    R.__v = null, (K || F != null) && (R.__e = G, R.__h = !!K, F[F.indexOf(G)] = null), l$c.__e(ae, R, D);
  }
}
function z$b(E, R) {
  l$c.__c && l$c.__c(R, E), E.some(function(D) {
    try {
      E = D.__h, D.__h = [], E.some(function(W) {
        W.call(D);
      });
    } catch (W) {
      l$c.__e(W, D.__v);
    }
  });
}
function L$b(E, R, D, W, V, F, Y, G) {
  var K, Q, U, ee = D.props, J = R.props, X = R.type, Z = 0;
  if (X === "svg" && (V = !0), F != null) {
    for (; Z < F.length; Z++)
      if ((K = F[Z]) && "setAttribute" in K == !!X && (X ? K.localName === X : K.nodeType === 3)) {
        E = K, F[Z] = null;
        break;
      }
  }
  if (E == null) {
    if (X === null)
      return document.createTextNode(J);
    E = V ? document.createElementNS("http://www.w3.org/2000/svg", X) : document.createElement(X, J.is && J), F = null, G = !1;
  }
  if (X === null)
    ee === J || G && E.data === J || (E.data = J);
  else {
    if (F = F && n$c.call(E.childNodes), Q = (ee = D.props || f$b).dangerouslySetInnerHTML, U = J.dangerouslySetInnerHTML, !G) {
      if (F != null)
        for (ee = {}, Z = 0; Z < E.attributes.length; Z++)
          ee[E.attributes[Z].name] = E.attributes[Z].value;
      (U || Q) && (U && (Q && U.__html == Q.__html || U.__html === E.innerHTML) || (E.innerHTML = U && U.__html || ""));
    }
    if (C$b(E, J, ee, V, G), U)
      R.__k = [];
    else if (Z = R.props.children, w$b(E, Array.isArray(Z) ? Z : [Z], R, D, W, V && X !== "foreignObject", F, Y, F ? F[0] : D.__k && _$n(D, 0), G), F != null)
      for (Z = F.length; Z--; )
        F[Z] != null && a$b(F[Z]);
    G || ("value" in J && (Z = J.value) !== void 0 && (Z !== E.value || X === "progress" && !Z || X === "option" && Z !== ee.value) && H$b(E, "value", Z, ee.value, !1), "checked" in J && (Z = J.checked) !== void 0 && Z !== E.checked && H$b(E, "checked", Z, ee.checked, !1));
  }
  return E;
}
function M$b(E, R, D) {
  try {
    typeof E == "function" ? E(R) : E.current = R;
  } catch (W) {
    l$c.__e(W, D);
  }
}
function N$b(E, R, D) {
  var W, V;
  if (l$c.unmount && l$c.unmount(E), (W = E.ref) && (W.current && W.current !== E.__e || M$b(W, null, R)), (W = E.__c) != null) {
    if (W.componentWillUnmount)
      try {
        W.componentWillUnmount();
      } catch (F) {
        l$c.__e(F, R);
      }
    W.base = W.__P = null, E.__c = void 0;
  }
  if (W = E.__k)
    for (V = 0; V < W.length; V++)
      W[V] && N$b(W[V], R, D || typeof E.type != "function");
  D || E.__e == null || a$b(E.__e), E.__ = E.__e = E.__d = void 0;
}
function O$b(E, R, D) {
  return this.constructor(E, D);
}
n$c = e$b.slice, l$c = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} }, u$b = 0, i$3 = function(E) {
  return E != null && E.constructor === void 0;
}, d$b.prototype.setState = function(E, R) {
  var D;
  D = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s$b({}, this.state), typeof E == "function" && (E = E(s$b({}, D), this.props)), E && s$b(D, E), E != null && this.__v && (R && this._sb.push(R), b$b(this));
}, d$b.prototype.forceUpdate = function(E) {
  this.__v && (this.__e = !0, E && this.__h.push(E), b$b(this));
}, d$b.prototype.render = p$b, t$c = [], g$b.__r = 0;
var _$m = 0;
function o$m(E, R, D, W, V) {
  var F, Y, G = {};
  for (Y in R)
    Y == "ref" ? F = R[Y] : G[Y] = R[Y];
  var K = { type: E, props: G, key: D, ref: F, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_$m, __source: V, __self: W };
  if (typeof E == "function" && (F = E.defaultProps))
    for (Y in F)
      G[Y] === void 0 && (G[Y] = F[Y]);
  return l$c.vnode && l$c.vnode(K), K;
}
const index$m = "";
let BtnGroup$1 = class extends d$b {
  componentDidMount() {
    var R;
    (R = this.props.afterRender) == null || R.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var R;
    (R = this.props.afterRender) == null || R.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var R;
    (R = this.props.beforeDestroy) == null || R.call(this);
  }
  handleItemClick(R, D, W, V) {
    W && W.call(V.target, V);
    const { onClickItem: F } = this.props;
    F && F.call(this, { item: R, index: D, event: V });
  }
  beforeRender() {
    var W;
    const R = { ...this.props }, D = (W = R.beforeRender) == null ? void 0 : W.call(this, R);
    return D && Object.assign(R, D), typeof R.items == "function" && (R.items = R.items.call(this)), R;
  }
  onRenderItem(R, D) {
    const { key: W = D, ...V } = R;
    return /* @__PURE__ */ o$m(Button$1, { ...V }, W);
  }
  renderItem(R, D, W) {
    const { itemRender: V, defaultBtnProps: F, onClickItem: Y } = R, G = { key: W, ...D };
    if (F && Object.assign(G, F), Y && (G.onClick = this.handleItemClick.bind(this, G, W, D.onClick)), V) {
      const K = V.call(this, G, h$6);
      if (i$3(K))
        return K;
      typeof K == "object" && Object.assign(G, K);
    }
    return this.onRenderItem(G, W);
  }
  render() {
    const R = this.beforeRender(), {
      className: D,
      items: W,
      size: V,
      type: F,
      defaultBtnProps: Y,
      children: G,
      itemRender: K,
      onClickItem: Q,
      beforeRender: U,
      afterRender: ee,
      beforeDestroy: J,
      ...X
    } = R;
    return /* @__PURE__ */ o$m(
      "div",
      {
        className: classes("btn-group", V ? `size-${V}` : "", D),
        ...X,
        children: [
          W && W.map(this.renderItem.bind(this, R)),
          G
        ]
      }
    );
  }
};
function ToolbarBtnGroup({
  key: E,
  type: R,
  btnType: D,
  ...W
}) {
  return /* @__PURE__ */ o$s(BtnGroup$1, { type: D, ...W });
}
var Et;
let Toolbar$1 = (Et = class extends ActionMenu$1 {
  beforeRender() {
    const { gap: R, btnProps: D, wrap: W, ...V } = super.beforeRender();
    return V.className = classes(V.className, W ? "flex-wrap" : "", typeof R == "number" ? `gap-${R}` : ""), typeof R == "string" && (V.style ? V.style.gap = R : V.style = { gap: R }), V;
  }
  isBtnItem(R) {
    return R === "item" || R === "dropdown";
  }
  renderTypedItem(R, D, W) {
    const V = this.isBtnItem(W.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, F = {
      ...D,
      ...V,
      ...W,
      className: classes(`${this.name}-${W.type}`, D.className, V.className, W.className),
      style: Object.assign({}, D.style, V.style, W.style)
    };
    return /* @__PURE__ */ o$s(R, { ...F });
  }
}, me(Et, "ItemComponents", {
  item: ToolbarItem,
  dropdown: ToolbarDropdown,
  "btn-group": ToolbarBtnGroup
}), me(Et, "ROOT_TAG", "nav"), me(Et, "NAME", "toolbar"), me(Et, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), Et);
function Alert({
  className: E,
  style: R,
  actions: D,
  heading: W,
  content: V,
  contentClass: F,
  children: Y,
  close: G,
  onClose: K,
  icon: Q,
  ...U
}) {
  let ee;
  G === !0 ? ee = /* @__PURE__ */ o$t(Button$1, { className: "alert-close btn ghost", square: !0, onClick: K, children: /* @__PURE__ */ o$t("span", { class: "close" }) }) : i$4(G) ? ee = G : typeof G == "object" && (ee = /* @__PURE__ */ o$t(Button$1, { ...G, onClick: K }));
  const J = i$4(D) ? D : D ? /* @__PURE__ */ o$t(Toolbar$1, { ...D }) : null;
  return /* @__PURE__ */ o$t("div", { className: classes("alert", E), style: R, ...U, children: [
    i$4(Q) ? Q : typeof Q == "string" ? /* @__PURE__ */ o$t("i", { className: `icon ${Q}` }) : null,
    i$4(V) ? V : /* @__PURE__ */ o$t("div", { className: classes("alert-content", F), children: [
      i$4(W) ? W : W && /* @__PURE__ */ o$t("div", { className: "alert-heading", children: W }),
      /* @__PURE__ */ o$t("div", { className: "alert-text", children: V }),
      W ? J : null
    ] }),
    W ? null : J,
    ee,
    Y
  ] });
}
function getAnimationFromPlacement(E) {
  if (E === "center")
    return "fade-from-center";
  if (E) {
    if (E.includes("top"))
      return "fade-from-top";
    if (E.includes("bottom"))
      return "fade-from-bottom";
  }
  return "fade";
}
let MessagerItem$1 = class extends d$e {
  componentDidMount() {
    var R;
    (R = this.props.afterRender) == null || R.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var R;
    (R = this.props.afterRender) == null || R.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var R;
    (R = this.props.beforeDestroy) == null || R.call(this);
  }
  render() {
    const {
      afterRender: R,
      beforeDestroy: D,
      margin: W,
      type: V,
      placement: F,
      animation: Y,
      show: G,
      className: K,
      time: Q,
      ...U
    } = this.props;
    return /* @__PURE__ */ o$u(
      Alert,
      {
        className: classes("messager", K, V, Y === !0 ? getAnimationFromPlacement(F) : Y, G ? "in" : ""),
        ...U
      }
    );
  }
};
var Pt, Yn;
class MessagerItem extends ComponentFromReact {
  constructor() {
    super(...arguments);
    he(this, Pt);
    me(this, "_show", !1);
    me(this, "_showTimer", 0);
    me(this, "_afterRender", ({ firstRender: D }) => {
      D && this.show();
      const { margin: W } = this.options;
      W && (this.element.style.margin = `${W}px`);
    });
  }
  get isShown() {
    return this._show;
  }
  afterInit() {
    this.on("click", (D) => {
      D.target.closest('.alert-close,[data-dismiss="messager"]') && (D.preventDefault(), D.stopPropagation(), this.hide());
    });
  }
  setOptions(D) {
    return D = super.setOptions(D), {
      ...D,
      show: this._show,
      afterRender: this._afterRender
    };
  }
  show() {
    this._show || (this.emit("show"), this.render(), this._show = !0, ke(this, Pt, Yn).call(this, () => {
      this.emit("shown");
      const { time: D } = this.options;
      D && ke(this, Pt, Yn).call(this, () => this.hide(), D);
    }));
  }
  hide() {
    this._show && (this._show = !1, this.emit("hide"), this.render(), ke(this, Pt, Yn).call(this, () => {
      this.emit("hidden");
    }));
  }
}
Pt = new WeakSet(), Yn = function(D, W = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    D(), this._showTimer = 0;
  }, W);
}, me(MessagerItem, "NAME", "MessagerItem"), me(MessagerItem, "EVENTS", !0), me(MessagerItem, "Component", MessagerItem$1);
var yt, Ot, st, eo, Pr, to, Or;
const kr = class extends ComponentBase {
  constructor() {
    super(...arguments);
    he(this, eo);
    he(this, to);
    he(this, yt, void 0);
    he(this, Ot, nanoid$4(6));
    he(this, st, void 0);
  }
  get id() {
    return re(this, Ot);
  }
  get isShown() {
    var D;
    return !!((D = re(this, st)) != null && D.isShown);
  }
  show(D) {
    this.setOptions(D), ke(this, eo, Pr).call(this).show();
  }
  hide() {
    var D;
    (D = re(this, st)) == null || D.hide();
  }
  static show(D) {
    typeof D == "string" && (D = { content: D });
    const { container: W, ...V } = D, F = new kr(W || "body", V);
    return F.show(), F;
  }
};
let Messager = kr;
yt = new WeakMap(), Ot = new WeakMap(), st = new WeakMap(), eo = new WeakSet(), Pr = function() {
  if (re(this, st))
    re(this, st).setOptions(this.options);
  else {
    const D = ke(this, to, Or).call(this), W = new MessagerItem(D, this.options);
    W.on("hidden", () => {
      W.destroy(), D.remove(), xe(this, yt, void 0);
    }), xe(this, st, W);
  }
  return re(this, st);
}, to = new WeakSet(), Or = function() {
  if (re(this, yt))
    return re(this, yt);
  const { placement: D = "top" } = this.options;
  let W = this.element.querySelector(`.messagers-${D}`);
  W || (W = document.createElement("div"), W.className = `messagers messagers-${D}`, this.element.appendChild(W));
  let V = W.querySelector(`#messager-${re(this, Ot)}`);
  return V || (V = document.createElement("div"), V.className = "messager-holder", V.id = `messager-${re(this, Ot)}`, W.appendChild(V), xe(this, yt, V)), V;
}, me(Messager, "NAME", "messager"), me(Messager, "DEFAULT", {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
});
const vars$4 = "", progress = "", vars$3 = "", progressCircle = "";
var n$b, l$b, u$a, t$b, o$l, f$a = {}, e$a = [], c$a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$a(E, R) {
  for (var D in R)
    E[D] = R[D];
  return E;
}
function a$a(E) {
  var R = E.parentNode;
  R && R.removeChild(E);
}
function v$a(E, R, D, W, V) {
  var F = { type: E, props: R, key: D, ref: W, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: V ?? ++u$a };
  return V == null && l$b.vnode != null && l$b.vnode(F), F;
}
function p$a(E) {
  return E.children;
}
function d$a(E, R) {
  this.props = E, this.context = R;
}
function _$l(E, R) {
  if (R == null)
    return E.__ ? _$l(E.__, E.__.__k.indexOf(E) + 1) : null;
  for (var D; R < E.__k.length; R++)
    if ((D = E.__k[R]) != null && D.__e != null)
      return D.__e;
  return typeof E.type == "function" ? _$l(E) : null;
}
function k$a(E) {
  var R, D;
  if ((E = E.__) != null && E.__c != null) {
    for (E.__e = E.__c.base = null, R = 0; R < E.__k.length; R++)
      if ((D = E.__k[R]) != null && D.__e != null) {
        E.__e = E.__c.base = D.__e;
        break;
      }
    return k$a(E);
  }
}
function b$a(E) {
  (!E.__d && (E.__d = !0) && t$b.push(E) && !g$a.__r++ || o$l !== l$b.debounceRendering) && ((o$l = l$b.debounceRendering) || setTimeout)(g$a);
}
function g$a() {
  for (var E; g$a.__r = t$b.length; )
    E = t$b.sort(function(R, D) {
      return R.__v.__b - D.__v.__b;
    }), t$b = [], E.some(function(R) {
      var D, W, V, F, Y, G;
      R.__d && (Y = (F = (D = R).__v).__e, (G = D.__P) && (W = [], (V = s$a({}, F)).__v = F.__v + 1, j$a(G, F, V, D.__n, G.ownerSVGElement !== void 0, F.__h != null ? [Y] : null, W, Y ?? _$l(F), F.__h), z$a(W, F), F.__e != Y && k$a(F)));
    });
}
function w$a(E, R, D, W, V, F, Y, G, K, Q) {
  var U, ee, J, X, Z, ie, te, ne = W && W.__k || e$a, oe = ne.length;
  for (D.__k = [], U = 0; U < R.length; U++)
    if ((X = D.__k[U] = (X = R[U]) == null || typeof X == "boolean" ? null : typeof X == "string" || typeof X == "number" || typeof X == "bigint" ? v$a(null, X, null, null, X) : Array.isArray(X) ? v$a(p$a, { children: X }, null, null, null) : X.__b > 0 ? v$a(X.type, X.props, X.key, X.ref ? X.ref : null, X.__v) : X) != null) {
      if (X.__ = D, X.__b = D.__b + 1, (J = ne[U]) === null || J && X.key == J.key && X.type === J.type)
        ne[U] = void 0;
      else
        for (ee = 0; ee < oe; ee++) {
          if ((J = ne[ee]) && X.key == J.key && X.type === J.type) {
            ne[ee] = void 0;
            break;
          }
          J = null;
        }
      j$a(E, X, J = J || f$a, V, F, Y, G, K, Q), Z = X.__e, (ee = X.ref) && J.ref != ee && (te || (te = []), J.ref && te.push(J.ref, null, X), te.push(ee, X.__c || Z, X)), Z != null ? (ie == null && (ie = Z), typeof X.type == "function" && X.__k === J.__k ? X.__d = K = m$b(X, K, E) : K = A$a(E, X, J, ne, Z, K), typeof D.type == "function" && (D.__d = K)) : K && J.__e == K && K.parentNode != E && (K = _$l(J));
    }
  for (D.__e = ie, U = oe; U--; )
    ne[U] != null && N$a(ne[U], ne[U]);
  if (te)
    for (U = 0; U < te.length; U++)
      M$a(te[U], te[++U], te[++U]);
}
function m$b(E, R, D) {
  for (var W, V = E.__k, F = 0; V && F < V.length; F++)
    (W = V[F]) && (W.__ = E, R = typeof W.type == "function" ? m$b(W, R, D) : A$a(D, W, W, V, W.__e, R));
  return R;
}
function A$a(E, R, D, W, V, F) {
  var Y, G, K;
  if (R.__d !== void 0)
    Y = R.__d, R.__d = void 0;
  else if (D == null || V != F || V.parentNode == null)
    e:
      if (F == null || F.parentNode !== E)
        E.appendChild(V), Y = null;
      else {
        for (G = F, K = 0; (G = G.nextSibling) && K < W.length; K += 2)
          if (G == V)
            break e;
        E.insertBefore(V, F), Y = F;
      }
  return Y !== void 0 ? Y : V.nextSibling;
}
function C$a(E, R, D, W, V) {
  var F;
  for (F in D)
    F === "children" || F === "key" || F in R || H$a(E, F, null, D[F], W);
  for (F in R)
    V && typeof R[F] != "function" || F === "children" || F === "key" || F === "value" || F === "checked" || D[F] === R[F] || H$a(E, F, R[F], D[F], W);
}
function $$b(E, R, D) {
  R[0] === "-" ? E.setProperty(R, D) : E[R] = D == null ? "" : typeof D != "number" || c$a.test(R) ? D : D + "px";
}
function H$a(E, R, D, W, V) {
  var F;
  e:
    if (R === "style")
      if (typeof D == "string")
        E.style.cssText = D;
      else {
        if (typeof W == "string" && (E.style.cssText = W = ""), W)
          for (R in W)
            D && R in D || $$b(E.style, R, "");
        if (D)
          for (R in D)
            W && D[R] === W[R] || $$b(E.style, R, D[R]);
      }
    else if (R[0] === "o" && R[1] === "n")
      F = R !== (R = R.replace(/Capture$/, "")), R = R.toLowerCase() in E ? R.toLowerCase().slice(2) : R.slice(2), E.l || (E.l = {}), E.l[R + F] = D, D ? W || E.addEventListener(R, F ? T$a : I$a, F) : E.removeEventListener(R, F ? T$a : I$a, F);
    else if (R !== "dangerouslySetInnerHTML") {
      if (V)
        R = R.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (R !== "href" && R !== "list" && R !== "form" && R !== "tabIndex" && R !== "download" && R in E)
        try {
          E[R] = D ?? "";
          break e;
        } catch {
        }
      typeof D == "function" || (D == null || D === !1 && R.indexOf("-") == -1 ? E.removeAttribute(R) : E.setAttribute(R, D));
    }
}
function I$a(E) {
  this.l[E.type + !1](l$b.event ? l$b.event(E) : E);
}
function T$a(E) {
  this.l[E.type + !0](l$b.event ? l$b.event(E) : E);
}
function j$a(E, R, D, W, V, F, Y, G, K) {
  var Q, U, ee, J, X, Z, ie, te, ne, oe, le, ce, ue, pe, de, se = R.type;
  if (R.constructor !== void 0)
    return null;
  D.__h != null && (K = D.__h, G = R.__e = D.__e, R.__h = null, F = [G]), (Q = l$b.__b) && Q(R);
  try {
    e:
      if (typeof se == "function") {
        if (te = R.props, ne = (Q = se.contextType) && W[Q.__c], oe = Q ? ne ? ne.props.value : Q.__ : W, D.__c ? ie = (U = R.__c = D.__c).__ = U.__E : ("prototype" in se && se.prototype.render ? R.__c = U = new se(te, oe) : (R.__c = U = new d$a(te, oe), U.constructor = se, U.render = O$a), ne && ne.sub(U), U.props = te, U.state || (U.state = {}), U.context = oe, U.__n = W, ee = U.__d = !0, U.__h = [], U._sb = []), U.__s == null && (U.__s = U.state), se.getDerivedStateFromProps != null && (U.__s == U.state && (U.__s = s$a({}, U.__s)), s$a(U.__s, se.getDerivedStateFromProps(te, U.__s))), J = U.props, X = U.state, ee)
          se.getDerivedStateFromProps == null && U.componentWillMount != null && U.componentWillMount(), U.componentDidMount != null && U.__h.push(U.componentDidMount);
        else {
          if (se.getDerivedStateFromProps == null && te !== J && U.componentWillReceiveProps != null && U.componentWillReceiveProps(te, oe), !U.__e && U.shouldComponentUpdate != null && U.shouldComponentUpdate(te, U.__s, oe) === !1 || R.__v === D.__v) {
            for (U.props = te, U.state = U.__s, R.__v !== D.__v && (U.__d = !1), U.__v = R, R.__e = D.__e, R.__k = D.__k, R.__k.forEach(function(ae) {
              ae && (ae.__ = R);
            }), le = 0; le < U._sb.length; le++)
              U.__h.push(U._sb[le]);
            U._sb = [], U.__h.length && Y.push(U);
            break e;
          }
          U.componentWillUpdate != null && U.componentWillUpdate(te, U.__s, oe), U.componentDidUpdate != null && U.__h.push(function() {
            U.componentDidUpdate(J, X, Z);
          });
        }
        if (U.context = oe, U.props = te, U.__v = R, U.__P = E, ce = l$b.__r, ue = 0, "prototype" in se && se.prototype.render) {
          for (U.state = U.__s, U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), pe = 0; pe < U._sb.length; pe++)
            U.__h.push(U._sb[pe]);
          U._sb = [];
        } else
          do
            U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), U.state = U.__s;
          while (U.__d && ++ue < 25);
        U.state = U.__s, U.getChildContext != null && (W = s$a(s$a({}, W), U.getChildContext())), ee || U.getSnapshotBeforeUpdate == null || (Z = U.getSnapshotBeforeUpdate(J, X)), de = Q != null && Q.type === p$a && Q.key == null ? Q.props.children : Q, w$a(E, Array.isArray(de) ? de : [de], R, D, W, V, F, Y, G, K), U.base = R.__e, R.__h = null, U.__h.length && Y.push(U), ie && (U.__E = U.__ = null), U.__e = !1;
      } else
        F == null && R.__v === D.__v ? (R.__k = D.__k, R.__e = D.__e) : R.__e = L$a(D.__e, R, D, W, V, F, Y, K);
    (Q = l$b.diffed) && Q(R);
  } catch (ae) {
    R.__v = null, (K || F != null) && (R.__e = G, R.__h = !!K, F[F.indexOf(G)] = null), l$b.__e(ae, R, D);
  }
}
function z$a(E, R) {
  l$b.__c && l$b.__c(R, E), E.some(function(D) {
    try {
      E = D.__h, D.__h = [], E.some(function(W) {
        W.call(D);
      });
    } catch (W) {
      l$b.__e(W, D.__v);
    }
  });
}
function L$a(E, R, D, W, V, F, Y, G) {
  var K, Q, U, ee = D.props, J = R.props, X = R.type, Z = 0;
  if (X === "svg" && (V = !0), F != null) {
    for (; Z < F.length; Z++)
      if ((K = F[Z]) && "setAttribute" in K == !!X && (X ? K.localName === X : K.nodeType === 3)) {
        E = K, F[Z] = null;
        break;
      }
  }
  if (E == null) {
    if (X === null)
      return document.createTextNode(J);
    E = V ? document.createElementNS("http://www.w3.org/2000/svg", X) : document.createElement(X, J.is && J), F = null, G = !1;
  }
  if (X === null)
    ee === J || G && E.data === J || (E.data = J);
  else {
    if (F = F && n$b.call(E.childNodes), Q = (ee = D.props || f$a).dangerouslySetInnerHTML, U = J.dangerouslySetInnerHTML, !G) {
      if (F != null)
        for (ee = {}, Z = 0; Z < E.attributes.length; Z++)
          ee[E.attributes[Z].name] = E.attributes[Z].value;
      (U || Q) && (U && (Q && U.__html == Q.__html || U.__html === E.innerHTML) || (E.innerHTML = U && U.__html || ""));
    }
    if (C$a(E, J, ee, V, G), U)
      R.__k = [];
    else if (Z = R.props.children, w$a(E, Array.isArray(Z) ? Z : [Z], R, D, W, V && X !== "foreignObject", F, Y, F ? F[0] : D.__k && _$l(D, 0), G), F != null)
      for (Z = F.length; Z--; )
        F[Z] != null && a$a(F[Z]);
    G || ("value" in J && (Z = J.value) !== void 0 && (Z !== E.value || X === "progress" && !Z || X === "option" && Z !== ee.value) && H$a(E, "value", Z, ee.value, !1), "checked" in J && (Z = J.checked) !== void 0 && Z !== E.checked && H$a(E, "checked", Z, ee.checked, !1));
  }
  return E;
}
function M$a(E, R, D) {
  try {
    typeof E == "function" ? E(R) : E.current = R;
  } catch (W) {
    l$b.__e(W, D);
  }
}
function N$a(E, R, D) {
  var W, V;
  if (l$b.unmount && l$b.unmount(E), (W = E.ref) && (W.current && W.current !== E.__e || M$a(W, null, R)), (W = E.__c) != null) {
    if (W.componentWillUnmount)
      try {
        W.componentWillUnmount();
      } catch (F) {
        l$b.__e(F, R);
      }
    W.base = W.__P = null, E.__c = void 0;
  }
  if (W = E.__k)
    for (V = 0; V < W.length; V++)
      W[V] && N$a(W[V], R, D || typeof E.type != "function");
  D || E.__e == null || a$a(E.__e), E.__ = E.__e = E.__d = void 0;
}
function O$a(E, R, D) {
  return this.constructor(E, D);
}
n$b = e$a.slice, l$b = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} }, u$a = 0, d$a.prototype.setState = function(E, R) {
  var D;
  D = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s$a({}, this.state), typeof E == "function" && (E = E(s$a({}, D), this.props)), E && s$a(D, E), E != null && this.__v && (R && this._sb.push(R), b$a(this));
}, d$a.prototype.forceUpdate = function(E) {
  this.__v && (this.__e = !0, E && this.__h.push(E), b$a(this));
}, d$a.prototype.render = p$a, t$b = [], g$a.__r = 0;
var _$k = 0;
function o$k(E, R, D, W, V) {
  var F, Y, G = {};
  for (Y in R)
    Y == "ref" ? F = R[Y] : G[Y] = R[Y];
  var K = { type: E, props: G, key: D, ref: F, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_$k, __source: V, __self: W };
  if (typeof E == "function" && (F = E.defaultProps))
    for (Y in F)
      G[Y] === void 0 && (G[Y] = F[Y]);
  return l$b.vnode && l$b.vnode(K), K;
}
var zn;
let ProgressCircle$1 = (zn = class extends d$a {
  render() {
    const { percent: R, circleSize: D, circleBorderSize: W, circleBgColor: V, circleColor: F } = this.props, Y = (D - W) / 2, G = D / 2;
    return /* @__PURE__ */ o$k("svg", { width: D, height: D, class: "progress-circle", children: [
      /* @__PURE__ */ o$k("circle", { cx: G, cy: G, r: Y, stroke: V, "stroke-width": W }),
      /* @__PURE__ */ o$k("circle", { cx: G, cy: G, r: Y, stroke: F, "stroke-dasharray": Math.PI * Y * 2, "stroke-dashoffset": Math.PI * Y * 2 * (100 - R) / 100, "stroke-width": W }),
      /* @__PURE__ */ o$k("text", { x: G, y: G + W / 4, "dominant-baseline": "middle", style: { fontSize: `${Y}px` }, children: Math.round(R) })
    ] });
  }
}, me(zn, "NAME", "zui.progress-circle"), me(zn, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), zn);
class ProgressCircle extends ComponentFromReact {
}
me(ProgressCircle, "NAME", "table-sorter"), me(ProgressCircle, "Component", ProgressCircle$1);
const index$l = "", index$k = "";
var n$a, l$a, u$9, t$a, o$j, f$9 = {}, e$9 = [], c$9 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$9(E, R) {
  for (var D in R)
    E[D] = R[D];
  return E;
}
function a$9(E) {
  var R = E.parentNode;
  R && R.removeChild(E);
}
function h$5(E, R, D) {
  var W, V, F, Y = {};
  for (F in R)
    F == "key" ? W = R[F] : F == "ref" ? V = R[F] : Y[F] = R[F];
  if (arguments.length > 2 && (Y.children = arguments.length > 3 ? n$a.call(arguments, 2) : D), typeof E == "function" && E.defaultProps != null)
    for (F in E.defaultProps)
      Y[F] === void 0 && (Y[F] = E.defaultProps[F]);
  return v$9(E, Y, W, V, null);
}
function v$9(E, R, D, W, V) {
  var F = { type: E, props: R, key: D, ref: W, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: V ?? ++u$9 };
  return V == null && l$a.vnode != null && l$a.vnode(F), F;
}
function p$9(E) {
  return E.children;
}
function d$9(E, R) {
  this.props = E, this.context = R;
}
function _$j(E, R) {
  if (R == null)
    return E.__ ? _$j(E.__, E.__.__k.indexOf(E) + 1) : null;
  for (var D; R < E.__k.length; R++)
    if ((D = E.__k[R]) != null && D.__e != null)
      return D.__e;
  return typeof E.type == "function" ? _$j(E) : null;
}
function k$9(E) {
  var R, D;
  if ((E = E.__) != null && E.__c != null) {
    for (E.__e = E.__c.base = null, R = 0; R < E.__k.length; R++)
      if ((D = E.__k[R]) != null && D.__e != null) {
        E.__e = E.__c.base = D.__e;
        break;
      }
    return k$9(E);
  }
}
function b$9(E) {
  (!E.__d && (E.__d = !0) && t$a.push(E) && !g$9.__r++ || o$j !== l$a.debounceRendering) && ((o$j = l$a.debounceRendering) || setTimeout)(g$9);
}
function g$9() {
  for (var E; g$9.__r = t$a.length; )
    E = t$a.sort(function(R, D) {
      return R.__v.__b - D.__v.__b;
    }), t$a = [], E.some(function(R) {
      var D, W, V, F, Y, G;
      R.__d && (Y = (F = (D = R).__v).__e, (G = D.__P) && (W = [], (V = s$9({}, F)).__v = F.__v + 1, j$9(G, F, V, D.__n, G.ownerSVGElement !== void 0, F.__h != null ? [Y] : null, W, Y ?? _$j(F), F.__h), z$9(W, F), F.__e != Y && k$9(F)));
    });
}
function w$9(E, R, D, W, V, F, Y, G, K, Q) {
  var U, ee, J, X, Z, ie, te, ne = W && W.__k || e$9, oe = ne.length;
  for (D.__k = [], U = 0; U < R.length; U++)
    if ((X = D.__k[U] = (X = R[U]) == null || typeof X == "boolean" ? null : typeof X == "string" || typeof X == "number" || typeof X == "bigint" ? v$9(null, X, null, null, X) : Array.isArray(X) ? v$9(p$9, { children: X }, null, null, null) : X.__b > 0 ? v$9(X.type, X.props, X.key, X.ref ? X.ref : null, X.__v) : X) != null) {
      if (X.__ = D, X.__b = D.__b + 1, (J = ne[U]) === null || J && X.key == J.key && X.type === J.type)
        ne[U] = void 0;
      else
        for (ee = 0; ee < oe; ee++) {
          if ((J = ne[ee]) && X.key == J.key && X.type === J.type) {
            ne[ee] = void 0;
            break;
          }
          J = null;
        }
      j$9(E, X, J = J || f$9, V, F, Y, G, K, Q), Z = X.__e, (ee = X.ref) && J.ref != ee && (te || (te = []), J.ref && te.push(J.ref, null, X), te.push(ee, X.__c || Z, X)), Z != null ? (ie == null && (ie = Z), typeof X.type == "function" && X.__k === J.__k ? X.__d = K = m$a(X, K, E) : K = A$9(E, X, J, ne, Z, K), typeof D.type == "function" && (D.__d = K)) : K && J.__e == K && K.parentNode != E && (K = _$j(J));
    }
  for (D.__e = ie, U = oe; U--; )
    ne[U] != null && N$9(ne[U], ne[U]);
  if (te)
    for (U = 0; U < te.length; U++)
      M$9(te[U], te[++U], te[++U]);
}
function m$a(E, R, D) {
  for (var W, V = E.__k, F = 0; V && F < V.length; F++)
    (W = V[F]) && (W.__ = E, R = typeof W.type == "function" ? m$a(W, R, D) : A$9(D, W, W, V, W.__e, R));
  return R;
}
function A$9(E, R, D, W, V, F) {
  var Y, G, K;
  if (R.__d !== void 0)
    Y = R.__d, R.__d = void 0;
  else if (D == null || V != F || V.parentNode == null)
    e:
      if (F == null || F.parentNode !== E)
        E.appendChild(V), Y = null;
      else {
        for (G = F, K = 0; (G = G.nextSibling) && K < W.length; K += 2)
          if (G == V)
            break e;
        E.insertBefore(V, F), Y = F;
      }
  return Y !== void 0 ? Y : V.nextSibling;
}
function C$9(E, R, D, W, V) {
  var F;
  for (F in D)
    F === "children" || F === "key" || F in R || H$9(E, F, null, D[F], W);
  for (F in R)
    V && typeof R[F] != "function" || F === "children" || F === "key" || F === "value" || F === "checked" || D[F] === R[F] || H$9(E, F, R[F], D[F], W);
}
function $$a(E, R, D) {
  R[0] === "-" ? E.setProperty(R, D) : E[R] = D == null ? "" : typeof D != "number" || c$9.test(R) ? D : D + "px";
}
function H$9(E, R, D, W, V) {
  var F;
  e:
    if (R === "style")
      if (typeof D == "string")
        E.style.cssText = D;
      else {
        if (typeof W == "string" && (E.style.cssText = W = ""), W)
          for (R in W)
            D && R in D || $$a(E.style, R, "");
        if (D)
          for (R in D)
            W && D[R] === W[R] || $$a(E.style, R, D[R]);
      }
    else if (R[0] === "o" && R[1] === "n")
      F = R !== (R = R.replace(/Capture$/, "")), R = R.toLowerCase() in E ? R.toLowerCase().slice(2) : R.slice(2), E.l || (E.l = {}), E.l[R + F] = D, D ? W || E.addEventListener(R, F ? T$9 : I$9, F) : E.removeEventListener(R, F ? T$9 : I$9, F);
    else if (R !== "dangerouslySetInnerHTML") {
      if (V)
        R = R.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (R !== "href" && R !== "list" && R !== "form" && R !== "tabIndex" && R !== "download" && R in E)
        try {
          E[R] = D ?? "";
          break e;
        } catch {
        }
      typeof D == "function" || (D == null || D === !1 && R.indexOf("-") == -1 ? E.removeAttribute(R) : E.setAttribute(R, D));
    }
}
function I$9(E) {
  this.l[E.type + !1](l$a.event ? l$a.event(E) : E);
}
function T$9(E) {
  this.l[E.type + !0](l$a.event ? l$a.event(E) : E);
}
function j$9(E, R, D, W, V, F, Y, G, K) {
  var Q, U, ee, J, X, Z, ie, te, ne, oe, le, ce, ue, pe, de, se = R.type;
  if (R.constructor !== void 0)
    return null;
  D.__h != null && (K = D.__h, G = R.__e = D.__e, R.__h = null, F = [G]), (Q = l$a.__b) && Q(R);
  try {
    e:
      if (typeof se == "function") {
        if (te = R.props, ne = (Q = se.contextType) && W[Q.__c], oe = Q ? ne ? ne.props.value : Q.__ : W, D.__c ? ie = (U = R.__c = D.__c).__ = U.__E : ("prototype" in se && se.prototype.render ? R.__c = U = new se(te, oe) : (R.__c = U = new d$9(te, oe), U.constructor = se, U.render = O$9), ne && ne.sub(U), U.props = te, U.state || (U.state = {}), U.context = oe, U.__n = W, ee = U.__d = !0, U.__h = [], U._sb = []), U.__s == null && (U.__s = U.state), se.getDerivedStateFromProps != null && (U.__s == U.state && (U.__s = s$9({}, U.__s)), s$9(U.__s, se.getDerivedStateFromProps(te, U.__s))), J = U.props, X = U.state, ee)
          se.getDerivedStateFromProps == null && U.componentWillMount != null && U.componentWillMount(), U.componentDidMount != null && U.__h.push(U.componentDidMount);
        else {
          if (se.getDerivedStateFromProps == null && te !== J && U.componentWillReceiveProps != null && U.componentWillReceiveProps(te, oe), !U.__e && U.shouldComponentUpdate != null && U.shouldComponentUpdate(te, U.__s, oe) === !1 || R.__v === D.__v) {
            for (U.props = te, U.state = U.__s, R.__v !== D.__v && (U.__d = !1), U.__v = R, R.__e = D.__e, R.__k = D.__k, R.__k.forEach(function(ae) {
              ae && (ae.__ = R);
            }), le = 0; le < U._sb.length; le++)
              U.__h.push(U._sb[le]);
            U._sb = [], U.__h.length && Y.push(U);
            break e;
          }
          U.componentWillUpdate != null && U.componentWillUpdate(te, U.__s, oe), U.componentDidUpdate != null && U.__h.push(function() {
            U.componentDidUpdate(J, X, Z);
          });
        }
        if (U.context = oe, U.props = te, U.__v = R, U.__P = E, ce = l$a.__r, ue = 0, "prototype" in se && se.prototype.render) {
          for (U.state = U.__s, U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), pe = 0; pe < U._sb.length; pe++)
            U.__h.push(U._sb[pe]);
          U._sb = [];
        } else
          do
            U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), U.state = U.__s;
          while (U.__d && ++ue < 25);
        U.state = U.__s, U.getChildContext != null && (W = s$9(s$9({}, W), U.getChildContext())), ee || U.getSnapshotBeforeUpdate == null || (Z = U.getSnapshotBeforeUpdate(J, X)), de = Q != null && Q.type === p$9 && Q.key == null ? Q.props.children : Q, w$9(E, Array.isArray(de) ? de : [de], R, D, W, V, F, Y, G, K), U.base = R.__e, R.__h = null, U.__h.length && Y.push(U), ie && (U.__E = U.__ = null), U.__e = !1;
      } else
        F == null && R.__v === D.__v ? (R.__k = D.__k, R.__e = D.__e) : R.__e = L$9(D.__e, R, D, W, V, F, Y, K);
    (Q = l$a.diffed) && Q(R);
  } catch (ae) {
    R.__v = null, (K || F != null) && (R.__e = G, R.__h = !!K, F[F.indexOf(G)] = null), l$a.__e(ae, R, D);
  }
}
function z$9(E, R) {
  l$a.__c && l$a.__c(R, E), E.some(function(D) {
    try {
      E = D.__h, D.__h = [], E.some(function(W) {
        W.call(D);
      });
    } catch (W) {
      l$a.__e(W, D.__v);
    }
  });
}
function L$9(E, R, D, W, V, F, Y, G) {
  var K, Q, U, ee = D.props, J = R.props, X = R.type, Z = 0;
  if (X === "svg" && (V = !0), F != null) {
    for (; Z < F.length; Z++)
      if ((K = F[Z]) && "setAttribute" in K == !!X && (X ? K.localName === X : K.nodeType === 3)) {
        E = K, F[Z] = null;
        break;
      }
  }
  if (E == null) {
    if (X === null)
      return document.createTextNode(J);
    E = V ? document.createElementNS("http://www.w3.org/2000/svg", X) : document.createElement(X, J.is && J), F = null, G = !1;
  }
  if (X === null)
    ee === J || G && E.data === J || (E.data = J);
  else {
    if (F = F && n$a.call(E.childNodes), Q = (ee = D.props || f$9).dangerouslySetInnerHTML, U = J.dangerouslySetInnerHTML, !G) {
      if (F != null)
        for (ee = {}, Z = 0; Z < E.attributes.length; Z++)
          ee[E.attributes[Z].name] = E.attributes[Z].value;
      (U || Q) && (U && (Q && U.__html == Q.__html || U.__html === E.innerHTML) || (E.innerHTML = U && U.__html || ""));
    }
    if (C$9(E, J, ee, V, G), U)
      R.__k = [];
    else if (Z = R.props.children, w$9(E, Array.isArray(Z) ? Z : [Z], R, D, W, V && X !== "foreignObject", F, Y, F ? F[0] : D.__k && _$j(D, 0), G), F != null)
      for (Z = F.length; Z--; )
        F[Z] != null && a$9(F[Z]);
    G || ("value" in J && (Z = J.value) !== void 0 && (Z !== E.value || X === "progress" && !Z || X === "option" && Z !== ee.value) && H$9(E, "value", Z, ee.value, !1), "checked" in J && (Z = J.checked) !== void 0 && Z !== E.checked && H$9(E, "checked", Z, ee.checked, !1));
  }
  return E;
}
function M$9(E, R, D) {
  try {
    typeof E == "function" ? E(R) : E.current = R;
  } catch (W) {
    l$a.__e(W, D);
  }
}
function N$9(E, R, D) {
  var W, V;
  if (l$a.unmount && l$a.unmount(E), (W = E.ref) && (W.current && W.current !== E.__e || M$9(W, null, R)), (W = E.__c) != null) {
    if (W.componentWillUnmount)
      try {
        W.componentWillUnmount();
      } catch (F) {
        l$a.__e(F, R);
      }
    W.base = W.__P = null, E.__c = void 0;
  }
  if (W = E.__k)
    for (V = 0; V < W.length; V++)
      W[V] && N$9(W[V], R, D || typeof E.type != "function");
  D || E.__e == null || a$9(E.__e), E.__ = E.__e = E.__d = void 0;
}
function O$9(E, R, D) {
  return this.constructor(E, D);
}
n$a = e$9.slice, l$a = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} }, u$9 = 0, d$9.prototype.setState = function(E, R) {
  var D;
  D = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s$9({}, this.state), typeof E == "function" && (E = E(s$9({}, D), this.props)), E && s$9(D, E), E != null && this.__v && (R && this._sb.push(R), b$9(this));
}, d$9.prototype.forceUpdate = function(E) {
  this.__v && (this.__e = !0, E && this.__h.push(E), b$9(this));
}, d$9.prototype.render = p$9, t$a = [], g$9.__r = 0;
var _$i = 0;
function o$i(E, R, D, W, V) {
  var F, Y, G = {};
  for (Y in R)
    Y == "ref" ? F = R[Y] : G[Y] = R[Y];
  var K = { type: E, props: G, key: D, ref: F, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_$i, __source: V, __self: W };
  if (typeof E == "function" && (F = E.defaultProps))
    for (Y in F)
      G[Y] === void 0 && (G[Y] = F[Y]);
  return l$a.vnode && l$a.vnode(K), K;
}
let Switch$1 = class extends d$9 {
  constructor() {
    super(...arguments);
    me(this, "state", { checked: !1 });
    me(this, "handleOnClick", () => {
      this.setState({ checked: !this.state.checked });
    });
  }
  componentDidMount() {
    this.setState({ checked: this.props.defaultChecked ?? !1 });
  }
  render() {
    const {
      component: D,
      className: W,
      children: V,
      text: F,
      icon: Y,
      surffixIcon: G,
      disabled: K,
      defaultChecked: Q,
      onChange: U,
      ...ee
    } = this.props, J = this.state.checked ? 1 : 0, X = D || "div", Z = typeof Y == "string" ? /* @__PURE__ */ o$i("i", { class: `icon ${Y}` }) : Y, ie = typeof G == "string" ? /* @__PURE__ */ o$i("i", { class: `icon ${G}` }) : G, te = [
      /* @__PURE__ */ o$i("input", { onChange: U, type: "checkbox", value: J, checked: !!this.state.checked }),
      /* @__PURE__ */ o$i("label", { children: [
        Z,
        F,
        ie
      ] })
    ];
    return h$5(
      X,
      {
        className: classes("switch", W, { disabled: K }),
        onClick: this.handleOnClick,
        ...ee
      },
      ...te,
      V
    );
  }
};
class Switch extends ComponentFromReact {
}
me(Switch, "NAME", "switch"), me(Switch, "Component", Switch$1);
const upload = "", doc = document, win = window, docEle = doc.documentElement, createElement = doc.createElement.bind(doc), div = createElement("div"), table$1 = createElement("table"), tbody = createElement("tbody"), tr = createElement("tr"), { isArray, prototype: ArrayPrototype } = Array, { concat, filter, indexOf, map, push, slice, some, splice } = ArrayPrototype, idRe = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, classRe = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, htmlRe = /<.+>/, tagRe = /^\w+$/;
function find(E, R) {
  const D = isDocumentFragment(R);
  return !E || !D && !isDocument(R) && !isElement$3(R) ? [] : !D && classRe.test(E) ? R.getElementsByClassName(E.slice(1).replace(/\\/g, "")) : !D && tagRe.test(E) ? R.getElementsByTagName(E) : R.querySelectorAll(E);
}
class Cash {
  constructor(R, D) {
    if (!R)
      return;
    if (isCash(R))
      return R;
    let W = R;
    if (isString(R)) {
      const V = (isCash(D) ? D[0] : D) || doc;
      if (W = idRe.test(R) && "getElementById" in V ? V.getElementById(R.slice(1).replace(/\\/g, "")) : htmlRe.test(R) ? parseHTML(R) : find(R, V), !W)
        return;
    } else if (isFunction(R))
      return this.ready(R);
    (W.nodeType || W === win) && (W = [W]), this.length = W.length;
    for (let V = 0, F = this.length; V < F; V++)
      this[V] = W[V];
  }
  init(R, D) {
    return new Cash(R, D);
  }
}
const fn = Cash.prototype, cash$1 = fn.init;
cash$1.fn = cash$1.prototype = fn;
fn.length = 0;
fn.splice = splice;
typeof Symbol == "function" && (fn[Symbol.iterator] = ArrayPrototype[Symbol.iterator]);
function isCash(E) {
  return E instanceof Cash;
}
function isWindow(E) {
  return !!E && E === E.window;
}
function isDocument(E) {
  return !!E && E.nodeType === 9;
}
function isDocumentFragment(E) {
  return !!E && E.nodeType === 11;
}
function isElement$3(E) {
  return !!E && E.nodeType === 1;
}
function isText(E) {
  return !!E && E.nodeType === 3;
}
function isBoolean(E) {
  return typeof E == "boolean";
}
function isFunction(E) {
  return typeof E == "function";
}
function isString(E) {
  return typeof E == "string";
}
function isUndefined(E) {
  return E === void 0;
}
function isNull(E) {
  return E === null;
}
function isNumeric(E) {
  return !isNaN(parseFloat(E)) && isFinite(E);
}
function isPlainObject(E) {
  if (typeof E != "object" || E === null)
    return !1;
  const R = Object.getPrototypeOf(E);
  return R === null || R === Object.prototype;
}
cash$1.isWindow = isWindow;
cash$1.isFunction = isFunction;
cash$1.isArray = isArray;
cash$1.isNumeric = isNumeric;
cash$1.isPlainObject = isPlainObject;
function each(E, R, D) {
  if (D) {
    let W = E.length;
    for (; W--; )
      if (R.call(E[W], W, E[W]) === !1)
        return E;
  } else if (isPlainObject(E)) {
    const W = Object.keys(E);
    for (let V = 0, F = W.length; V < F; V++) {
      const Y = W[V];
      if (R.call(E[Y], Y, E[Y]) === !1)
        return E;
    }
  } else
    for (let W = 0, V = E.length; W < V; W++)
      if (R.call(E[W], W, E[W]) === !1)
        return E;
  return E;
}
cash$1.each = each;
fn.each = function(E) {
  return each(this, E);
};
fn.empty = function() {
  return this.each((E, R) => {
    for (; R.firstChild; )
      R.removeChild(R.firstChild);
  });
};
function extend(...E) {
  const R = isBoolean(E[0]) ? E.shift() : !1, D = E.shift(), W = E.length;
  if (!D)
    return {};
  if (!W)
    return extend(R, cash$1, D);
  for (let V = 0; V < W; V++) {
    const F = E[V];
    for (const Y in F)
      R && (isArray(F[Y]) || isPlainObject(F[Y])) ? ((!D[Y] || D[Y].constructor !== F[Y].constructor) && (D[Y] = new F[Y].constructor()), extend(R, D[Y], F[Y])) : D[Y] = F[Y];
  }
  return D;
}
cash$1.extend = extend;
fn.extend = function(E) {
  return extend(fn, E);
};
const splitValuesRe = /\S+/g;
function getSplitValues(E) {
  return isString(E) ? E.match(splitValuesRe) || [] : [];
}
fn.toggleClass = function(E, R) {
  const D = getSplitValues(E), W = !isUndefined(R);
  return this.each((V, F) => {
    isElement$3(F) && each(D, (Y, G) => {
      W ? R ? F.classList.add(G) : F.classList.remove(G) : F.classList.toggle(G);
    });
  });
};
fn.addClass = function(E) {
  return this.toggleClass(E, !0);
};
fn.removeAttr = function(E) {
  const R = getSplitValues(E);
  return this.each((D, W) => {
    isElement$3(W) && each(R, (V, F) => {
      W.removeAttribute(F);
    });
  });
};
function attr(E, R) {
  if (E) {
    if (isString(E)) {
      if (arguments.length < 2) {
        if (!this[0] || !isElement$3(this[0]))
          return;
        const D = this[0].getAttribute(E);
        return isNull(D) ? void 0 : D;
      }
      return isUndefined(R) ? this : isNull(R) ? this.removeAttr(E) : this.each((D, W) => {
        isElement$3(W) && W.setAttribute(E, R);
      });
    }
    for (const D in E)
      this.attr(D, E[D]);
    return this;
  }
}
fn.attr = attr;
fn.removeClass = function(E) {
  return arguments.length ? this.toggleClass(E, !1) : this.attr("class", "");
};
fn.hasClass = function(E) {
  return !!E && some.call(this, (R) => isElement$3(R) && R.classList.contains(E));
};
fn.get = function(E) {
  return isUndefined(E) ? slice.call(this) : (E = Number(E), this[E < 0 ? E + this.length : E]);
};
fn.eq = function(E) {
  return cash$1(this.get(E));
};
fn.first = function() {
  return this.eq(0);
};
fn.last = function() {
  return this.eq(-1);
};
function text(E) {
  return isUndefined(E) ? this.get().map((R) => isElement$3(R) || isText(R) ? R.textContent : "").join("") : this.each((R, D) => {
    isElement$3(D) && (D.textContent = E);
  });
}
fn.text = text;
function computeStyle(E, R, D) {
  if (!isElement$3(E))
    return;
  const W = win.getComputedStyle(E, null);
  return D ? W.getPropertyValue(R) || void 0 : W[R] || E.style[R];
}
function computeStyleInt(E, R) {
  return parseInt(computeStyle(E, R), 10) || 0;
}
function getExtraSpace(E, R) {
  return computeStyleInt(E, `border${R ? "Left" : "Top"}Width`) + computeStyleInt(E, `padding${R ? "Left" : "Top"}`) + computeStyleInt(E, `padding${R ? "Right" : "Bottom"}`) + computeStyleInt(E, `border${R ? "Right" : "Bottom"}Width`);
}
const defaultDisplay = {};
function getDefaultDisplay(E) {
  if (defaultDisplay[E])
    return defaultDisplay[E];
  const R = createElement(E);
  doc.body.insertBefore(R, null);
  const D = computeStyle(R, "display");
  return doc.body.removeChild(R), defaultDisplay[E] = D !== "none" ? D : "block";
}
function isHidden(E) {
  return computeStyle(E, "display") === "none";
}
function matches(E, R) {
  const D = E && (E.matches || E.webkitMatchesSelector || E.msMatchesSelector);
  return !!D && !!R && D.call(E, R);
}
function getCompareFunction(E) {
  return isString(E) ? (R, D) => matches(D, E) : isFunction(E) ? E : isCash(E) ? (R, D) => E.is(D) : E ? (R, D) => D === E : () => !1;
}
fn.filter = function(E) {
  const R = getCompareFunction(E);
  return cash$1(filter.call(this, (D, W) => R.call(D, W, D)));
};
function filtered(E, R) {
  return R ? E.filter(R) : E;
}
fn.detach = function(E) {
  return filtered(this, E).each((R, D) => {
    D.parentNode && D.parentNode.removeChild(D);
  }), this;
};
const fragmentRe = /^\s*<(\w+)[^>]*>/, singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, containers = {
  "*": div,
  tr: tbody,
  td: tr,
  th: tr,
  thead: table$1,
  tbody: table$1,
  tfoot: table$1
};
function parseHTML(E) {
  if (!isString(E))
    return [];
  if (singleTagRe.test(E))
    return [createElement(RegExp.$1)];
  const R = fragmentRe.test(E) && RegExp.$1, D = containers[R] || containers["*"];
  return D.innerHTML = E, cash$1(D.childNodes).detach().get();
}
cash$1.parseHTML = parseHTML;
fn.has = function(E) {
  const R = isString(E) ? (D, W) => find(E, W).length : (D, W) => W.contains(E);
  return this.filter(R);
};
fn.not = function(E) {
  const R = getCompareFunction(E);
  return this.filter((D, W) => (!isString(E) || isElement$3(W)) && !R.call(W, D, W));
};
function pluck(E, R, D, W) {
  const V = [], F = isFunction(R), Y = W && getCompareFunction(W);
  for (let G = 0, K = E.length; G < K; G++)
    if (F) {
      const Q = R(E[G]);
      Q.length && push.apply(V, Q);
    } else {
      let Q = E[G][R];
      for (; Q != null && !(W && Y(-1, Q)); )
        V.push(Q), Q = D ? Q[R] : null;
    }
  return V;
}
function getValue(E) {
  return E.multiple && E.options ? pluck(filter.call(E.options, (R) => R.selected && !R.disabled && !R.parentNode.disabled), "value") : E.value || "";
}
function val(E) {
  return arguments.length ? this.each((R, D) => {
    const W = D.multiple && D.options;
    if (W || checkableRe.test(D.type)) {
      const V = isArray(E) ? map.call(E, String) : isNull(E) ? [] : [String(E)];
      W ? each(D.options, (F, Y) => {
        Y.selected = V.indexOf(Y.value) >= 0;
      }, !0) : D.checked = V.indexOf(D.value) >= 0;
    } else
      D.value = isUndefined(E) || isNull(E) ? "" : E;
  }) : this[0] && getValue(this[0]);
}
fn.val = val;
fn.is = function(E) {
  const R = getCompareFunction(E);
  return some.call(this, (D, W) => R.call(D, W, D));
};
cash$1.guid = 1;
function unique(E) {
  return E.length > 1 ? filter.call(E, (R, D, W) => indexOf.call(W, R) === D) : E;
}
cash$1.unique = unique;
fn.add = function(E, R) {
  return cash$1(unique(this.get().concat(cash$1(E, R).get())));
};
fn.children = function(E) {
  return filtered(cash$1(unique(pluck(this, (R) => R.children))), E);
};
fn.parent = function(E) {
  return filtered(cash$1(unique(pluck(this, "parentNode"))), E);
};
fn.index = function(E) {
  const R = E ? cash$1(E)[0] : this[0], D = E ? this : cash$1(R).parent().children();
  return indexOf.call(D, R);
};
fn.closest = function(E) {
  const R = this.filter(E);
  if (R.length)
    return R;
  const D = this.parent();
  return D.length ? D.closest(E) : R;
};
fn.siblings = function(E) {
  return filtered(cash$1(unique(pluck(this, (R) => cash$1(R).parent().children().not(R)))), E);
};
fn.find = function(E) {
  return cash$1(unique(pluck(this, (R) => find(E, R))));
};
const HTMLCDATARe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, scriptTypeRe = /^$|^module$|\/(java|ecma)script/i, scriptAttributes = ["type", "src", "nonce", "noModule"];
function evalScripts(E, R) {
  const D = cash$1(E);
  D.filter("script").add(D.find("script")).each((W, V) => {
    if (scriptTypeRe.test(V.type) && docEle.contains(V)) {
      const F = createElement("script");
      F.text = V.textContent.replace(HTMLCDATARe, ""), each(scriptAttributes, (Y, G) => {
        V[G] && (F[G] = V[G]);
      }), R.head.insertBefore(F, null), R.head.removeChild(F);
    }
  });
}
function insertElement(E, R, D, W, V) {
  W ? E.insertBefore(R, D ? E.firstChild : null) : E.nodeName === "HTML" ? E.parentNode.replaceChild(R, E) : E.parentNode.insertBefore(R, D ? E : E.nextSibling), V && evalScripts(R, E.ownerDocument);
}
function insertSelectors(E, R, D, W, V, F, Y, G) {
  return each(E, (K, Q) => {
    each(cash$1(Q), (U, ee) => {
      each(cash$1(R), (J, X) => {
        const Z = D ? ee : X, ie = D ? X : ee, te = D ? U : J;
        insertElement(Z, te ? ie.cloneNode(!0) : ie, W, V, !te);
      }, G);
    }, Y);
  }, F), R;
}
fn.after = function() {
  return insertSelectors(arguments, this, !1, !1, !1, !0, !0);
};
fn.append = function() {
  return insertSelectors(arguments, this, !1, !1, !0);
};
function html(E) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (isUndefined(E))
    return this;
  const R = /<script[\s>]/.test(E);
  return this.each((D, W) => {
    isElement$3(W) && (R ? cash$1(W).empty().append(E) : W.innerHTML = E);
  });
}
fn.html = html;
fn.appendTo = function(E) {
  return insertSelectors(arguments, this, !0, !1, !0);
};
fn.wrapInner = function(E) {
  return this.each((R, D) => {
    const W = cash$1(D), V = W.contents();
    V.length ? V.wrapAll(E) : W.append(E);
  });
};
fn.before = function() {
  return insertSelectors(arguments, this, !1, !0);
};
fn.wrapAll = function(E) {
  let R = cash$1(E), D = R[0];
  for (; D.children.length; )
    D = D.firstElementChild;
  return this.first().before(R), this.appendTo(D);
};
fn.wrap = function(E) {
  return this.each((R, D) => {
    const W = cash$1(E)[0];
    cash$1(D).wrapAll(R ? W.cloneNode(!0) : W);
  });
};
fn.insertAfter = function(E) {
  return insertSelectors(arguments, this, !0, !1, !1, !1, !1, !0);
};
fn.insertBefore = function(E) {
  return insertSelectors(arguments, this, !0, !0);
};
fn.prepend = function() {
  return insertSelectors(arguments, this, !1, !0, !0, !0, !0);
};
fn.prependTo = function(E) {
  return insertSelectors(arguments, this, !0, !0, !0, !1, !1, !0);
};
fn.contents = function() {
  return cash$1(unique(pluck(this, (E) => E.tagName === "IFRAME" ? [E.contentDocument] : E.tagName === "TEMPLATE" ? E.content.childNodes : E.childNodes)));
};
fn.next = function(E, R, D) {
  return filtered(cash$1(unique(pluck(this, "nextElementSibling", R, D))), E);
};
fn.nextAll = function(E) {
  return this.next(E, !0);
};
fn.nextUntil = function(E, R) {
  return this.next(R, !0, E);
};
fn.parents = function(E, R) {
  return filtered(cash$1(unique(pluck(this, "parentElement", !0, R))), E);
};
fn.parentsUntil = function(E, R) {
  return this.parents(R, E);
};
fn.prev = function(E, R, D) {
  return filtered(cash$1(unique(pluck(this, "previousElementSibling", R, D))), E);
};
fn.prevAll = function(E) {
  return this.prev(E, !0);
};
fn.prevUntil = function(E, R) {
  return this.prev(R, !0, E);
};
fn.map = function(E) {
  return cash$1(concat.apply([], map.call(this, (R, D) => E.call(R, D, R))));
};
fn.clone = function() {
  return this.map((E, R) => R.cloneNode(!0));
};
fn.offsetParent = function() {
  return this.map((E, R) => {
    let D = R.offsetParent;
    for (; D && computeStyle(D, "position") === "static"; )
      D = D.offsetParent;
    return D || docEle;
  });
};
fn.slice = function(E, R) {
  return cash$1(slice.call(this, E, R));
};
const dashAlphaRe = /-([a-z])/g;
function camelCase(E) {
  return E.replace(dashAlphaRe, (R, D) => D.toUpperCase());
}
fn.ready = function(E) {
  const R = () => setTimeout(E, 0, cash$1);
  return doc.readyState !== "loading" ? R() : doc.addEventListener("DOMContentLoaded", R), this;
};
fn.unwrap = function() {
  return this.parent().each((E, R) => {
    if (R.tagName === "BODY")
      return;
    const D = cash$1(R);
    D.replaceWith(D.children());
  }), this;
};
fn.offset = function() {
  const E = this[0];
  if (!E)
    return;
  const R = E.getBoundingClientRect();
  return {
    top: R.top + win.pageYOffset,
    left: R.left + win.pageXOffset
  };
};
fn.position = function() {
  const E = this[0];
  if (!E)
    return;
  const R = computeStyle(E, "position") === "fixed", D = R ? E.getBoundingClientRect() : this.offset();
  if (!R) {
    const W = E.ownerDocument;
    let V = E.offsetParent || W.documentElement;
    for (; (V === W.body || V === W.documentElement) && computeStyle(V, "position") === "static"; )
      V = V.parentNode;
    if (V !== E && isElement$3(V)) {
      const F = cash$1(V).offset();
      D.top -= F.top + computeStyleInt(V, "borderTopWidth"), D.left -= F.left + computeStyleInt(V, "borderLeftWidth");
    }
  }
  return {
    top: D.top - computeStyleInt(E, "marginTop"),
    left: D.left - computeStyleInt(E, "marginLeft")
  };
};
const propMap = {
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
fn.prop = function(E, R) {
  if (E) {
    if (isString(E))
      return E = propMap[E] || E, arguments.length < 2 ? this[0] && this[0][E] : this.each((D, W) => {
        W[E] = R;
      });
    for (const D in E)
      this.prop(D, E[D]);
    return this;
  }
};
fn.removeProp = function(E) {
  return this.each((R, D) => {
    delete D[propMap[E] || E];
  });
};
const cssVariableRe = /^--/;
function isCSSVariable(E) {
  return cssVariableRe.test(E);
}
const prefixedProps = {}, { style: style$3 } = div, vendorsPrefixes = ["webkit", "moz", "ms"];
function getPrefixedProp(E, R = isCSSVariable(E)) {
  if (R)
    return E;
  if (!prefixedProps[E]) {
    const D = camelCase(E), W = `${D[0].toUpperCase()}${D.slice(1)}`, V = `${D} ${vendorsPrefixes.join(`${W} `)}${W}`.split(" ");
    each(V, (F, Y) => {
      if (Y in style$3)
        return prefixedProps[E] = Y, !1;
    });
  }
  return prefixedProps[E];
}
const numericProps = {
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
function getSuffixedValue(E, R, D = isCSSVariable(E)) {
  return !D && !numericProps[E] && isNumeric(R) ? `${R}px` : R;
}
function css(E, R) {
  if (isString(E)) {
    const D = isCSSVariable(E);
    return E = getPrefixedProp(E, D), arguments.length < 2 ? this[0] && computeStyle(this[0], E, D) : E ? (R = getSuffixedValue(E, R, D), this.each((W, V) => {
      isElement$3(V) && (D ? V.style.setProperty(E, R) : V.style[E] = R);
    })) : this;
  }
  for (const D in E)
    this.css(D, E[D]);
  return this;
}
fn.css = css;
function attempt(E, R) {
  try {
    return E(R);
  } catch {
    return R;
  }
}
const JSONStringRe = /^\s+|\s+$/;
function getData(E, R) {
  const D = E.dataset[R] || E.dataset[camelCase(R)];
  return JSONStringRe.test(D) ? D : attempt(JSON.parse, D);
}
function setData(E, R, D) {
  D = attempt(JSON.stringify, D), E.dataset[camelCase(R)] = D;
}
function data(E, R) {
  if (!E) {
    if (!this[0])
      return;
    const D = {};
    for (const W in this[0].dataset)
      D[W] = getData(this[0], W);
    return D;
  }
  if (isString(E))
    return arguments.length < 2 ? this[0] && getData(this[0], E) : isUndefined(R) ? this : this.each((D, W) => {
      setData(W, E, R);
    });
  for (const D in E)
    this.data(D, E[D]);
  return this;
}
fn.data = data;
function getDocumentDimension(E, R) {
  const D = E.documentElement;
  return Math.max(E.body[`scroll${R}`], D[`scroll${R}`], E.body[`offset${R}`], D[`offset${R}`], D[`client${R}`]);
}
each([!0, !1], (E, R) => {
  each(["Width", "Height"], (D, W) => {
    const V = `${R ? "outer" : "inner"}${W}`;
    fn[V] = function(F) {
      if (this[0])
        return isWindow(this[0]) ? R ? this[0][`inner${W}`] : this[0].document.documentElement[`client${W}`] : isDocument(this[0]) ? getDocumentDimension(this[0], W) : this[0][`${R ? "offset" : "client"}${W}`] + (F && R ? computeStyleInt(this[0], `margin${D ? "Top" : "Left"}`) + computeStyleInt(this[0], `margin${D ? "Bottom" : "Right"}`) : 0);
    };
  });
});
each(["Width", "Height"], (E, R) => {
  const D = R.toLowerCase();
  fn[D] = function(W) {
    if (!this[0])
      return isUndefined(W) ? void 0 : this;
    if (!arguments.length)
      return isWindow(this[0]) ? this[0].document.documentElement[`client${R}`] : isDocument(this[0]) ? getDocumentDimension(this[0], R) : this[0].getBoundingClientRect()[D] - getExtraSpace(this[0], !E);
    const V = parseInt(W, 10);
    return this.each((F, Y) => {
      if (!isElement$3(Y))
        return;
      const G = computeStyle(Y, "boxSizing");
      Y.style[D] = getSuffixedValue(D, V + (G === "border-box" ? getExtraSpace(Y, !E) : 0));
    });
  };
});
const displayProperty = "___cd";
fn.toggle = function(E) {
  return this.each((R, D) => {
    if (!isElement$3(D))
      return;
    (isUndefined(E) ? isHidden(D) : E) ? (D.style.display = D[displayProperty] || "", isHidden(D) && (D.style.display = getDefaultDisplay(D.tagName))) : (D[displayProperty] = computeStyle(D, "display"), D.style.display = "none");
  });
};
fn.hide = function() {
  return this.toggle(!1);
};
fn.show = function() {
  return this.toggle(!0);
};
const eventsNamespace = "___ce", eventsNamespacesSeparator = ".", eventsFocus = { focus: "focusin", blur: "focusout" }, eventsHover = { mouseenter: "mouseover", mouseleave: "mouseout" }, eventsMouseRe = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function getEventNameBubbling(E) {
  return eventsHover[E] || eventsFocus[E] || E;
}
function parseEventName(E) {
  const R = E.split(eventsNamespacesSeparator);
  return [R[0], R.slice(1).sort()];
}
fn.trigger = function(E, R) {
  if (isString(E)) {
    const [W, V] = parseEventName(E), F = getEventNameBubbling(W);
    if (!F)
      return this;
    const Y = eventsMouseRe.test(F) ? "MouseEvents" : "HTMLEvents";
    E = doc.createEvent(Y), E.initEvent(F, !0, !0), E.namespace = V.join(eventsNamespacesSeparator), E.___ot = W;
  }
  E.___td = R;
  const D = E.___ot in eventsFocus;
  return this.each((W, V) => {
    D && isFunction(V[E.___ot]) && (V[`___i${E.type}`] = !0, V[E.___ot](), V[`___i${E.type}`] = !1), V.dispatchEvent(E);
  });
};
function getEventsCache(E) {
  return E[eventsNamespace] = E[eventsNamespace] || {};
}
function addEvent(E, R, D, W, V) {
  const F = getEventsCache(E);
  F[R] = F[R] || [], F[R].push([D, W, V]), E.addEventListener(R, V);
}
function hasNamespaces(E, R) {
  return !R || !some.call(R, (D) => E.indexOf(D) < 0);
}
function removeEvent(E, R, D, W, V) {
  const F = getEventsCache(E);
  if (R)
    F[R] && (F[R] = F[R].filter(([Y, G, K]) => {
      if (V && K.guid !== V.guid || !hasNamespaces(Y, D) || W && W !== G)
        return !0;
      E.removeEventListener(R, K);
    }));
  else
    for (R in F)
      removeEvent(E, R, D, W, V);
}
fn.off = function(E, R, D) {
  if (isUndefined(E))
    this.each((W, V) => {
      !isElement$3(V) && !isDocument(V) && !isWindow(V) || removeEvent(V);
    });
  else if (isString(E))
    isFunction(R) && (D = R, R = ""), each(getSplitValues(E), (W, V) => {
      const [F, Y] = parseEventName(V), G = getEventNameBubbling(F);
      this.each((K, Q) => {
        !isElement$3(Q) && !isDocument(Q) && !isWindow(Q) || removeEvent(Q, G, Y, R, D);
      });
    });
  else
    for (const W in E)
      this.off(W, E[W]);
  return this;
};
fn.remove = function(E) {
  return filtered(this, E).detach().off(), this;
};
fn.replaceWith = function(E) {
  return this.before(E).remove();
};
fn.replaceAll = function(E) {
  return cash$1(E).replaceWith(this), this;
};
function on(E, R, D, W, V) {
  if (!isString(E)) {
    for (const F in E)
      this.on(F, R, D, E[F], V);
    return this;
  }
  return isString(R) || (isUndefined(R) || isNull(R) ? R = "" : isUndefined(D) ? (D = R, R = "") : (W = D, D = R, R = "")), isFunction(W) || (W = D, D = void 0), W ? (each(getSplitValues(E), (F, Y) => {
    const [G, K] = parseEventName(Y), Q = getEventNameBubbling(G), U = G in eventsHover, ee = G in eventsFocus;
    Q && this.each((J, X) => {
      if (!isElement$3(X) && !isDocument(X) && !isWindow(X))
        return;
      const Z = function(ie) {
        if (ie.target[`___i${ie.type}`])
          return ie.stopImmediatePropagation();
        if (ie.namespace && !hasNamespaces(K, ie.namespace.split(eventsNamespacesSeparator)) || !R && (ee && (ie.target !== X || ie.___ot === Q) || U && ie.relatedTarget && X.contains(ie.relatedTarget)))
          return;
        let te = X;
        if (R) {
          let oe = ie.target;
          for (; !matches(oe, R); )
            if (oe === X || (oe = oe.parentNode, !oe))
              return;
          te = oe;
        }
        Object.defineProperty(ie, "currentTarget", {
          configurable: !0,
          get() {
            return te;
          }
        }), Object.defineProperty(ie, "delegateTarget", {
          configurable: !0,
          get() {
            return X;
          }
        }), Object.defineProperty(ie, "data", {
          configurable: !0,
          get() {
            return D;
          }
        });
        const ne = W.call(te, ie, ie.___td);
        V && removeEvent(X, Q, K, R, Z), ne === !1 && (ie.preventDefault(), ie.stopPropagation());
      };
      Z.guid = W.guid = W.guid || cash$1.guid++, addEvent(X, Q, K, R, Z);
    });
  }), this) : this;
}
fn.on = on;
function one(E, R, D, W) {
  return this.on(E, R, D, W, !0);
}
fn.one = one;
const queryEncodeCRLFRe = /\r?\n/g;
function queryEncode(E, R) {
  return `&${encodeURIComponent(E)}=${encodeURIComponent(R.replace(queryEncodeCRLFRe, `\r
`))}`;
}
const skippableRe = /file|reset|submit|button|image/i, checkableRe = /radio|checkbox/i;
fn.serialize = function() {
  let E = "";
  return this.each((R, D) => {
    each(D.elements || [D], (W, V) => {
      if (V.disabled || !V.name || V.tagName === "FIELDSET" || skippableRe.test(V.type) || checkableRe.test(V.type) && !V.checked)
        return;
      const F = getValue(V);
      if (!isUndefined(F)) {
        const Y = isArray(F) ? F : [F];
        each(Y, (G, K) => {
          E += queryEncode(V.name, K);
        });
      }
    });
  }), E.slice(1);
};
window.$ = cash$1;
const cash = cash$1, $$9 = cash, document$1 = window.document;
let key, name;
const rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, scriptTypeRE = /^(?:text|application)\/javascript/i, xmlTypeRE = /^(?:text|application)\/xml/i, jsonType = "application/json", htmlType = "text/html", blankRE = /^\s*$/, originAnchor = document$1.createElement("a");
originAnchor.href = window.location.href;
function triggerAndReturn(E, R, D) {
  const W = new CustomEvent(R, { detail: D });
  return $$9(E).trigger(W, D), !W.defaultPrevented;
}
function triggerGlobal(E, R, D, W) {
  if (E.global)
    return triggerAndReturn(R || document$1, D, W);
}
$$9.active = 0;
function ajaxStart(E) {
  E.global && $$9.active++ === 0 && triggerGlobal(E, null, "ajaxStart");
}
function ajaxStop(E) {
  E.global && !--$$9.active && triggerGlobal(E, null, "ajaxStop");
}
function ajaxBeforeSend(E, R) {
  const D = R.context;
  if (R.beforeSend.call(D, E, R) === !1 || triggerGlobal(R, D, "ajaxBeforeSend", [E, R]) === !1)
    return !1;
  triggerGlobal(R, D, "ajaxSend", [E, R]);
}
function ajaxSuccess(E, R, D) {
  const W = D.context, V = "success";
  D.success.call(W, E, V, R), triggerGlobal(D, W, "ajaxSuccess", [R, D, E]), ajaxComplete(V, R, D);
}
function ajaxError(E, R, D, W) {
  const V = W.context;
  W.error.call(V, D, R, E), triggerGlobal(W, V, "ajaxError", [D, W, E || R]), ajaxComplete(R, D, W);
}
function ajaxComplete(E, R, D) {
  const W = D.context;
  D.complete.call(W, R, E), triggerGlobal(D, W, "ajaxComplete", [R, D]), ajaxStop(D);
}
function ajaxDataFilter(E, R, D) {
  if (D.dataFilter == empty)
    return E;
  const W = D.context;
  return D.dataFilter.call(W, E, R);
}
function empty() {
}
$$9.ajaxSettings = {
  // Default type of request
  type: "GET",
  // Callback that is executed before request
  beforeSend: empty,
  // Callback that is executed if the request succeeds
  success: empty,
  // Callback that is executed the the server drops error
  error: empty,
  // Callback that is executed on request complete (both: error and success)
  complete: empty,
  // The context for the callbacks
  context: null,
  // Whether to trigger "global" Ajax events
  global: !0,
  // Transport
  xhr: function() {
    return new window.XMLHttpRequest();
  },
  // MIME types mapping
  // IIS returns Javascript as "application/x-javascript"
  accepts: {
    script: "text/javascript, application/javascript, application/x-javascript",
    json: jsonType,
    xml: "application/xml, text/xml",
    html: htmlType,
    text: "text/plain"
  },
  // Whether the request is to another domain
  crossDomain: !1,
  // Default timeout
  timeout: 0,
  // Whether data should be serialized to string
  processData: !0,
  // Whether the browser should be allowed to cache GET responses
  cache: !0,
  //Used to handle the raw response data of XMLHttpRequest.
  //This is a pre-filtering function to sanitize the response.
  //The sanitized response should be returned
  dataFilter: empty
};
function mimeToDataType(E) {
  return E && (E = E.split(";", 2)[0]), E && (E == htmlType ? "html" : E == jsonType ? "json" : scriptTypeRE.test(E) ? "script" : xmlTypeRE.test(E) && "xml") || "text";
}
function appendQuery(E, R) {
  return R == "" ? E : (E + "&" + R).replace(/[&?]{1,2}/, "?");
}
function serializeData(E) {
  E.processData && E.data && typeof E.data != "string" && (E.data = $$9.param(E.data, E.traditional)), E.data && (!E.type || E.type.toUpperCase() == "GET" || E.dataType == "jsonp") && (E.url = appendQuery(E.url, E.data), E.data = void 0);
}
$$9.ajax = function(options) {
  var E;
  const settings = $$9.extend({}, options || {});
  let urlAnchor, hashIndex;
  for (key in $$9.ajaxSettings)
    settings[key] === void 0 && (settings[key] = $$9.ajaxSettings[key]);
  ajaxStart(settings), settings.crossDomain || (urlAnchor = document$1.createElement("a"), urlAnchor.href = settings.url, urlAnchor.href = urlAnchor.href, settings.crossDomain = originAnchor.protocol + "//" + originAnchor.host != urlAnchor.protocol + "//" + urlAnchor.host), settings.url || (settings.url = window.location.toString()), (hashIndex = settings.url.indexOf("#")) > -1 && (settings.url = settings.url.slice(0, hashIndex)), serializeData(settings);
  let dataType = settings.dataType;
  const hasPlaceholder = /\?.+=\?/.test(settings.url);
  hasPlaceholder && (dataType = "jsonp"), (settings.cache === !1 || (!options || options.cache !== !0) && (dataType == "script" || dataType == "jsonp")) && (settings.url = appendQuery(settings.url, "_=" + Date.now()));
  let mime = settings.accepts[dataType];
  const headers = {}, setHeader = function(R, D) {
    headers[R.toLowerCase()] = [R, D];
  }, protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol, xhr = settings.xhr(), nativeSetHeader = xhr.setRequestHeader;
  let abortTimeout;
  if (settings.crossDomain || setHeader("X-Requested-With", "XMLHttpRequest"), setHeader("Accept", mime || "*/*"), mime = settings.mimeType, mime && (mime.indexOf(",") > -1 && (mime = mime.split(",", 2)[0]), (E = xhr.overrideMimeType) == null || E.call(xhr, mime)), (settings.contentType || settings.contentType !== !1 && settings.data && settings.type.toUpperCase() != "GET") && setHeader("Content-Type", settings.contentType || "application/x-www-form-urlencoded"), settings.headers)
    for (name in settings.headers)
      setHeader(name, settings.headers[name]);
  if (xhr.setRequestHeader = setHeader, xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      xhr.onreadystatechange = empty, clearTimeout(abortTimeout);
      let result, error = !1;
      if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == "file:") {
        if (dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader("content-type")), xhr.responseType == "arraybuffer" || xhr.responseType == "blob")
          result = xhr.response;
        else {
          result = xhr.responseText;
          try {
            result = ajaxDataFilter(result, dataType, settings), dataType == "script" ? eval(result) : dataType == "xml" ? result = xhr.responseXML : dataType == "json" && (result = blankRE.test(result) ? null : JSON.parse(result));
          } catch (R) {
            error = R;
          }
          if (error)
            return ajaxError(error, "parsererror", xhr, settings);
        }
        ajaxSuccess(result, xhr, settings);
      } else
        ajaxError(xhr.statusText || null, xhr.status ? "error" : "abort", xhr, settings);
    }
  }, ajaxBeforeSend(xhr, settings) === !1)
    return xhr.abort(), ajaxError(null, "abort", xhr, settings), xhr;
  const async = "async" in settings ? settings.async : !0;
  if (xhr.open(settings.type, settings.url, async, settings.username, settings.password), settings.xhrFields)
    for (name in settings.xhrFields)
      xhr[name] = settings.xhrFields[name];
  for (name in headers)
    nativeSetHeader.apply(xhr, headers[name]);
  return settings.timeout > 0 && (abortTimeout = setTimeout(function() {
    xhr.onreadystatechange = empty, xhr.abort(), ajaxError(null, "timeout", xhr, settings);
  }, settings.timeout)), xhr.send(settings.data ? settings.data : null), xhr;
};
function parseArguments(E, R, D, W) {
  return $$9.isFunction(R) && (W = D, D = R, R = void 0), $$9.isFunction(D) || (W = D, D = void 0), {
    url: E,
    data: R,
    success: D,
    dataType: W
  };
}
$$9.get = function(E, R, D, W) {
  return $$9.ajax(parseArguments(E, R, D, W));
};
$$9.post = function(E, R, D, W) {
  const V = parseArguments(E, R, D, W);
  return $$9.ajax(Object.assign(V, { type: "POST" }));
};
$$9.getJSON = function(E, R, D, W) {
  const V = parseArguments(E, R, D, W);
  return V.dataType = "json", $$9.ajax(V);
};
$$9.fn.load = function(E, R, D) {
  if (!this.length)
    return this;
  const W = E.split(/\s/);
  let V;
  const F = parseArguments(E, R, D), Y = F.success;
  return W.length > 1 && (F.url = W[0], V = W[1]), F.success = (G, ...K) => {
    this.html(V ? $$9("<div>").html(G.replace(rscript, "")).find(V) : G), Y == null || Y.call(this, G, ...K);
  }, $$9.ajax(F), this;
};
const escape$1 = encodeURIComponent;
function serialize(E, R, D, W) {
  const V = $$9.isArray(R), F = $$9.isPlainObject(R);
  $$9.each(R, function(Y, G) {
    const K = Array.isArray(G) ? "array" : typeof G;
    W && (Y = D ? W : W + "[" + (F || K == "object" || K == "array" ? Y : "") + "]"), !W && V ? E.add(G.name, G.value) : K == "array" || !D && K == "object" ? serialize(E, G, D, Y) : E.add(Y, G);
  });
}
$$9.param = function(E, R) {
  const D = [];
  return D.add = function(W, V) {
    $$9.isFunction(V) && (V = V()), V == null && (V = ""), this.push(escape$1(W) + "=" + escape$1(V));
  }, serialize(D, E, R), D.join("&").replace(/%20/g, "+");
};
const ajax$1 = Object.assign($$9.ajax, {
  get: $$9.get,
  post: $$9.post,
  getJSON: $$9.getJSON,
  param: $$9.param,
  ajaxSettings: $$9.ajaxSettings
});
function selectText(E) {
  const R = typeof E == "string" ? document.querySelector(E) : E;
  if (!R)
    return !1;
  if (R instanceof HTMLInputElement || R instanceof HTMLTextAreaElement)
    return R.select(), !0;
  if (window.getSelection) {
    const D = window.getSelection();
    if (D) {
      const W = document.createRange();
      return W.selectNodeContents(R), D.removeAllRanges(), D.addRange(W), !0;
    }
  }
  return !1;
}
function isElementVisible(E, R) {
  const D = typeof E == "string" ? document.querySelector(E) : E;
  if (!D)
    return !1;
  const W = D.getBoundingClientRect(), V = window.innerHeight || document.documentElement.clientHeight, F = window.innerWidth || document.documentElement.clientWidth;
  if (R != null && R.fullyCheck)
    return W.left >= 0 && W.top >= 0 && W.left + W.width <= F && W.top + W.height <= V;
  const Y = W.top <= V && W.top + W.height >= 0, G = W.left <= F && W.left + W.width >= 0;
  return Y && G;
}
const main = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classes,
  getClassList,
  isElementVisible,
  selectText
}, Symbol.toStringTag, { value: "Module" }));
/*! js-cookie v3.0.1 | MIT */
function assign(E) {
  for (var R = 1; R < arguments.length; R++) {
    var D = arguments[R];
    for (var W in D)
      E[W] = D[W];
  }
  return E;
}
var defaultConverter = {
  read: function(E) {
    return E[0] === '"' && (E = E.slice(1, -1)), E.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(E) {
    return encodeURIComponent(E).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function init(E, R) {
  function D(V, F, Y) {
    if (!(typeof document > "u")) {
      Y = assign({}, R, Y), typeof Y.expires == "number" && (Y.expires = new Date(Date.now() + Y.expires * 864e5)), Y.expires && (Y.expires = Y.expires.toUTCString()), V = encodeURIComponent(V).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var G = "";
      for (var K in Y)
        Y[K] && (G += "; " + K, Y[K] !== !0 && (G += "=" + Y[K].split(";")[0]));
      return document.cookie = V + "=" + E.write(F, V) + G;
    }
  }
  function W(V) {
    if (!(typeof document > "u" || arguments.length && !V)) {
      for (var F = document.cookie ? document.cookie.split("; ") : [], Y = {}, G = 0; G < F.length; G++) {
        var K = F[G].split("="), Q = K.slice(1).join("=");
        try {
          var U = decodeURIComponent(K[0]);
          if (Y[U] = E.read(Q, U), V === U)
            break;
        } catch {
        }
      }
      return V ? Y[V] : Y;
    }
  }
  return Object.create(
    {
      set: D,
      get: W,
      remove: function(V, F) {
        D(
          V,
          "",
          assign({}, F, {
            expires: -1
          })
        );
      },
      withAttributes: function(V) {
        return init(this.converter, assign({}, this.attributes, V));
      },
      withConverter: function(V) {
        return init(assign({}, this.converter, V), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(R) },
      converter: { value: Object.freeze(E) }
    }
  );
}
var api = init(defaultConverter, { path: "/" });
window.$ && Object.assign(window.$, { cookie: api });
var n$9 = function(E, R, D, W) {
  var V;
  R[0] = 0;
  for (var F = 1; F < R.length; F++) {
    var Y = R[F++], G = R[F] ? (R[0] |= Y ? 1 : 2, D[R[F++]]) : R[++F];
    Y === 3 ? W[0] = G : Y === 4 ? W[1] = Object.assign(W[1] || {}, G) : Y === 5 ? (W[1] = W[1] || {})[R[++F]] = G : Y === 6 ? W[1][R[++F]] += G + "" : Y ? (V = E.apply(G, n$9(E, G, D, ["", null])), W.push(V), G[0] ? R[0] |= 2 : (R[F - 2] = 0, R[F] = V)) : W.push(G);
  }
  return W;
}, t$9 = /* @__PURE__ */ new Map();
function htm(E) {
  var R = t$9.get(this);
  return R || (R = /* @__PURE__ */ new Map(), t$9.set(this, R)), (R = n$9(this, R.get(E) || (R.set(E, R = function(D) {
    for (var W, V, F = 1, Y = "", G = "", K = [0], Q = function(J) {
      F === 1 && (J || (Y = Y.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? K.push(0, J, Y) : F === 3 && (J || Y) ? (K.push(3, J, Y), F = 2) : F === 2 && Y === "..." && J ? K.push(4, J, 0) : F === 2 && Y && !J ? K.push(5, 0, !0, Y) : F >= 5 && ((Y || !J && F === 5) && (K.push(F, 0, Y, V), F = 6), J && (K.push(F, J, 0, V), F = 6)), Y = "";
    }, U = 0; U < D.length; U++) {
      U && (F === 1 && Q(), Q(U));
      for (var ee = 0; ee < D[U].length; ee++)
        W = D[U][ee], F === 1 ? W === "<" ? (Q(), K = [K], F = 3) : Y += W : F === 4 ? Y === "--" && W === ">" ? (F = 1, Y = "") : Y = W + Y[0] : G ? W === G ? G = "" : Y += W : W === '"' || W === "'" ? G = W : W === ">" ? (Q(), F = 1) : F && (W === "=" ? (F = 5, V = Y, Y = "") : W === "/" && (F < 5 || D[U][ee + 1] === ">") ? (Q(), F === 3 && (K = K[0]), F = K, (K = K[0]).push(2, 0, F), F = 0) : W === " " || W === "	" || W === `
` || W === "\r" ? (Q(), F = 2) : Y += W), F === 3 && Y === "!--" && (F = 4, K = K[0]);
    }
    return Q(), K;
  }(E)), R), arguments, [])).length > 1 ? R : R[0];
}
var n$8, l$9, u$8, i$2, t$8, o$h, r, f$8 = {}, e$8 = [], c$8 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$8(E, R) {
  for (var D in R)
    E[D] = R[D];
  return E;
}
function a$8(E) {
  var R = E.parentNode;
  R && R.removeChild(E);
}
function h$4(E, R, D) {
  var W, V, F, Y = {};
  for (F in R)
    F == "key" ? W = R[F] : F == "ref" ? V = R[F] : Y[F] = R[F];
  if (arguments.length > 2 && (Y.children = arguments.length > 3 ? n$8.call(arguments, 2) : D), typeof E == "function" && E.defaultProps != null)
    for (F in E.defaultProps)
      Y[F] === void 0 && (Y[F] = E.defaultProps[F]);
  return v$8(E, Y, W, V, null);
}
function v$8(E, R, D, W, V) {
  var F = { type: E, props: R, key: D, ref: W, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: V ?? ++u$8 };
  return V == null && l$9.vnode != null && l$9.vnode(F), F;
}
function y$5() {
  return { current: null };
}
function p$8(E) {
  return E.children;
}
function d$8(E, R) {
  this.props = E, this.context = R;
}
function _$h(E, R) {
  if (R == null)
    return E.__ ? _$h(E.__, E.__.__k.indexOf(E) + 1) : null;
  for (var D; R < E.__k.length; R++)
    if ((D = E.__k[R]) != null && D.__e != null)
      return D.__e;
  return typeof E.type == "function" ? _$h(E) : null;
}
function k$8(E) {
  var R, D;
  if ((E = E.__) != null && E.__c != null) {
    for (E.__e = E.__c.base = null, R = 0; R < E.__k.length; R++)
      if ((D = E.__k[R]) != null && D.__e != null) {
        E.__e = E.__c.base = D.__e;
        break;
      }
    return k$8(E);
  }
}
function b$8(E) {
  (!E.__d && (E.__d = !0) && t$8.push(E) && !g$8.__r++ || o$h !== l$9.debounceRendering) && ((o$h = l$9.debounceRendering) || setTimeout)(g$8);
}
function g$8() {
  for (var E; g$8.__r = t$8.length; )
    E = t$8.sort(function(R, D) {
      return R.__v.__b - D.__v.__b;
    }), t$8 = [], E.some(function(R) {
      var D, W, V, F, Y, G;
      R.__d && (Y = (F = (D = R).__v).__e, (G = D.__P) && (W = [], (V = s$8({}, F)).__v = F.__v + 1, j$8(G, F, V, D.__n, G.ownerSVGElement !== void 0, F.__h != null ? [Y] : null, W, Y ?? _$h(F), F.__h), z$8(W, F), F.__e != Y && k$8(F)));
    });
}
function w$8(E, R, D, W, V, F, Y, G, K, Q) {
  var U, ee, J, X, Z, ie, te, ne = W && W.__k || e$8, oe = ne.length;
  for (D.__k = [], U = 0; U < R.length; U++)
    if ((X = D.__k[U] = (X = R[U]) == null || typeof X == "boolean" ? null : typeof X == "string" || typeof X == "number" || typeof X == "bigint" ? v$8(null, X, null, null, X) : Array.isArray(X) ? v$8(p$8, { children: X }, null, null, null) : X.__b > 0 ? v$8(X.type, X.props, X.key, X.ref ? X.ref : null, X.__v) : X) != null) {
      if (X.__ = D, X.__b = D.__b + 1, (J = ne[U]) === null || J && X.key == J.key && X.type === J.type)
        ne[U] = void 0;
      else
        for (ee = 0; ee < oe; ee++) {
          if ((J = ne[ee]) && X.key == J.key && X.type === J.type) {
            ne[ee] = void 0;
            break;
          }
          J = null;
        }
      j$8(E, X, J = J || f$8, V, F, Y, G, K, Q), Z = X.__e, (ee = X.ref) && J.ref != ee && (te || (te = []), J.ref && te.push(J.ref, null, X), te.push(ee, X.__c || Z, X)), Z != null ? (ie == null && (ie = Z), typeof X.type == "function" && X.__k === J.__k ? X.__d = K = m$9(X, K, E) : K = A$8(E, X, J, ne, Z, K), typeof D.type == "function" && (D.__d = K)) : K && J.__e == K && K.parentNode != E && (K = _$h(J));
    }
  for (D.__e = ie, U = oe; U--; )
    ne[U] != null && N$8(ne[U], ne[U]);
  if (te)
    for (U = 0; U < te.length; U++)
      M$8(te[U], te[++U], te[++U]);
}
function m$9(E, R, D) {
  for (var W, V = E.__k, F = 0; V && F < V.length; F++)
    (W = V[F]) && (W.__ = E, R = typeof W.type == "function" ? m$9(W, R, D) : A$8(D, W, W, V, W.__e, R));
  return R;
}
function x(E, R) {
  return R = R || [], E == null || typeof E == "boolean" || (Array.isArray(E) ? E.some(function(D) {
    x(D, R);
  }) : R.push(E)), R;
}
function A$8(E, R, D, W, V, F) {
  var Y, G, K;
  if (R.__d !== void 0)
    Y = R.__d, R.__d = void 0;
  else if (D == null || V != F || V.parentNode == null)
    e:
      if (F == null || F.parentNode !== E)
        E.appendChild(V), Y = null;
      else {
        for (G = F, K = 0; (G = G.nextSibling) && K < W.length; K += 2)
          if (G == V)
            break e;
        E.insertBefore(V, F), Y = F;
      }
  return Y !== void 0 ? Y : V.nextSibling;
}
function C$8(E, R, D, W, V) {
  var F;
  for (F in D)
    F === "children" || F === "key" || F in R || H$8(E, F, null, D[F], W);
  for (F in R)
    V && typeof R[F] != "function" || F === "children" || F === "key" || F === "value" || F === "checked" || D[F] === R[F] || H$8(E, F, R[F], D[F], W);
}
function $$8(E, R, D) {
  R[0] === "-" ? E.setProperty(R, D) : E[R] = D == null ? "" : typeof D != "number" || c$8.test(R) ? D : D + "px";
}
function H$8(E, R, D, W, V) {
  var F;
  e:
    if (R === "style")
      if (typeof D == "string")
        E.style.cssText = D;
      else {
        if (typeof W == "string" && (E.style.cssText = W = ""), W)
          for (R in W)
            D && R in D || $$8(E.style, R, "");
        if (D)
          for (R in D)
            W && D[R] === W[R] || $$8(E.style, R, D[R]);
      }
    else if (R[0] === "o" && R[1] === "n")
      F = R !== (R = R.replace(/Capture$/, "")), R = R.toLowerCase() in E ? R.toLowerCase().slice(2) : R.slice(2), E.l || (E.l = {}), E.l[R + F] = D, D ? W || E.addEventListener(R, F ? T$8 : I$8, F) : E.removeEventListener(R, F ? T$8 : I$8, F);
    else if (R !== "dangerouslySetInnerHTML") {
      if (V)
        R = R.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (R !== "href" && R !== "list" && R !== "form" && R !== "tabIndex" && R !== "download" && R in E)
        try {
          E[R] = D ?? "";
          break e;
        } catch {
        }
      typeof D == "function" || (D == null || D === !1 && R.indexOf("-") == -1 ? E.removeAttribute(R) : E.setAttribute(R, D));
    }
}
function I$8(E) {
  this.l[E.type + !1](l$9.event ? l$9.event(E) : E);
}
function T$8(E) {
  this.l[E.type + !0](l$9.event ? l$9.event(E) : E);
}
function j$8(E, R, D, W, V, F, Y, G, K) {
  var Q, U, ee, J, X, Z, ie, te, ne, oe, le, ce, ue, pe, de, se = R.type;
  if (R.constructor !== void 0)
    return null;
  D.__h != null && (K = D.__h, G = R.__e = D.__e, R.__h = null, F = [G]), (Q = l$9.__b) && Q(R);
  try {
    e:
      if (typeof se == "function") {
        if (te = R.props, ne = (Q = se.contextType) && W[Q.__c], oe = Q ? ne ? ne.props.value : Q.__ : W, D.__c ? ie = (U = R.__c = D.__c).__ = U.__E : ("prototype" in se && se.prototype.render ? R.__c = U = new se(te, oe) : (R.__c = U = new d$8(te, oe), U.constructor = se, U.render = O$8), ne && ne.sub(U), U.props = te, U.state || (U.state = {}), U.context = oe, U.__n = W, ee = U.__d = !0, U.__h = [], U._sb = []), U.__s == null && (U.__s = U.state), se.getDerivedStateFromProps != null && (U.__s == U.state && (U.__s = s$8({}, U.__s)), s$8(U.__s, se.getDerivedStateFromProps(te, U.__s))), J = U.props, X = U.state, ee)
          se.getDerivedStateFromProps == null && U.componentWillMount != null && U.componentWillMount(), U.componentDidMount != null && U.__h.push(U.componentDidMount);
        else {
          if (se.getDerivedStateFromProps == null && te !== J && U.componentWillReceiveProps != null && U.componentWillReceiveProps(te, oe), !U.__e && U.shouldComponentUpdate != null && U.shouldComponentUpdate(te, U.__s, oe) === !1 || R.__v === D.__v) {
            for (U.props = te, U.state = U.__s, R.__v !== D.__v && (U.__d = !1), U.__v = R, R.__e = D.__e, R.__k = D.__k, R.__k.forEach(function(ae) {
              ae && (ae.__ = R);
            }), le = 0; le < U._sb.length; le++)
              U.__h.push(U._sb[le]);
            U._sb = [], U.__h.length && Y.push(U);
            break e;
          }
          U.componentWillUpdate != null && U.componentWillUpdate(te, U.__s, oe), U.componentDidUpdate != null && U.__h.push(function() {
            U.componentDidUpdate(J, X, Z);
          });
        }
        if (U.context = oe, U.props = te, U.__v = R, U.__P = E, ce = l$9.__r, ue = 0, "prototype" in se && se.prototype.render) {
          for (U.state = U.__s, U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), pe = 0; pe < U._sb.length; pe++)
            U.__h.push(U._sb[pe]);
          U._sb = [];
        } else
          do
            U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), U.state = U.__s;
          while (U.__d && ++ue < 25);
        U.state = U.__s, U.getChildContext != null && (W = s$8(s$8({}, W), U.getChildContext())), ee || U.getSnapshotBeforeUpdate == null || (Z = U.getSnapshotBeforeUpdate(J, X)), de = Q != null && Q.type === p$8 && Q.key == null ? Q.props.children : Q, w$8(E, Array.isArray(de) ? de : [de], R, D, W, V, F, Y, G, K), U.base = R.__e, R.__h = null, U.__h.length && Y.push(U), ie && (U.__E = U.__ = null), U.__e = !1;
      } else
        F == null && R.__v === D.__v ? (R.__k = D.__k, R.__e = D.__e) : R.__e = L$8(D.__e, R, D, W, V, F, Y, K);
    (Q = l$9.diffed) && Q(R);
  } catch (ae) {
    R.__v = null, (K || F != null) && (R.__e = G, R.__h = !!K, F[F.indexOf(G)] = null), l$9.__e(ae, R, D);
  }
}
function z$8(E, R) {
  l$9.__c && l$9.__c(R, E), E.some(function(D) {
    try {
      E = D.__h, D.__h = [], E.some(function(W) {
        W.call(D);
      });
    } catch (W) {
      l$9.__e(W, D.__v);
    }
  });
}
function L$8(E, R, D, W, V, F, Y, G) {
  var K, Q, U, ee = D.props, J = R.props, X = R.type, Z = 0;
  if (X === "svg" && (V = !0), F != null) {
    for (; Z < F.length; Z++)
      if ((K = F[Z]) && "setAttribute" in K == !!X && (X ? K.localName === X : K.nodeType === 3)) {
        E = K, F[Z] = null;
        break;
      }
  }
  if (E == null) {
    if (X === null)
      return document.createTextNode(J);
    E = V ? document.createElementNS("http://www.w3.org/2000/svg", X) : document.createElement(X, J.is && J), F = null, G = !1;
  }
  if (X === null)
    ee === J || G && E.data === J || (E.data = J);
  else {
    if (F = F && n$8.call(E.childNodes), Q = (ee = D.props || f$8).dangerouslySetInnerHTML, U = J.dangerouslySetInnerHTML, !G) {
      if (F != null)
        for (ee = {}, Z = 0; Z < E.attributes.length; Z++)
          ee[E.attributes[Z].name] = E.attributes[Z].value;
      (U || Q) && (U && (Q && U.__html == Q.__html || U.__html === E.innerHTML) || (E.innerHTML = U && U.__html || ""));
    }
    if (C$8(E, J, ee, V, G), U)
      R.__k = [];
    else if (Z = R.props.children, w$8(E, Array.isArray(Z) ? Z : [Z], R, D, W, V && X !== "foreignObject", F, Y, F ? F[0] : D.__k && _$h(D, 0), G), F != null)
      for (Z = F.length; Z--; )
        F[Z] != null && a$8(F[Z]);
    G || ("value" in J && (Z = J.value) !== void 0 && (Z !== E.value || X === "progress" && !Z || X === "option" && Z !== ee.value) && H$8(E, "value", Z, ee.value, !1), "checked" in J && (Z = J.checked) !== void 0 && Z !== E.checked && H$8(E, "checked", Z, ee.checked, !1));
  }
  return E;
}
function M$8(E, R, D) {
  try {
    typeof E == "function" ? E(R) : E.current = R;
  } catch (W) {
    l$9.__e(W, D);
  }
}
function N$8(E, R, D) {
  var W, V;
  if (l$9.unmount && l$9.unmount(E), (W = E.ref) && (W.current && W.current !== E.__e || M$8(W, null, R)), (W = E.__c) != null) {
    if (W.componentWillUnmount)
      try {
        W.componentWillUnmount();
      } catch (F) {
        l$9.__e(F, R);
      }
    W.base = W.__P = null, E.__c = void 0;
  }
  if (W = E.__k)
    for (V = 0; V < W.length; V++)
      W[V] && N$8(W[V], R, D || typeof E.type != "function");
  D || E.__e == null || a$8(E.__e), E.__ = E.__e = E.__d = void 0;
}
function O$8(E, R, D) {
  return this.constructor(E, D);
}
function P$3(E, R, D) {
  var W, V, F;
  l$9.__ && l$9.__(E, R), V = (W = typeof D == "function") ? null : D && D.__k || R.__k, F = [], j$8(R, E = (!W && D || R).__k = h$4(p$8, null, [E]), V || f$8, f$8, R.ownerSVGElement !== void 0, !W && D ? [D] : V ? null : R.firstChild ? n$8.call(R.childNodes) : null, F, !W && D ? D : V ? V.__e : R.firstChild, W), z$8(F, E);
}
function S(E, R) {
  P$3(E, R, S);
}
function q(E, R, D) {
  var W, V, F, Y = s$8({}, E.props);
  for (F in R)
    F == "key" ? W = R[F] : F == "ref" ? V = R[F] : Y[F] = R[F];
  return arguments.length > 2 && (Y.children = arguments.length > 3 ? n$8.call(arguments, 2) : D), v$8(E.type, Y, W || E.key, V || E.ref, null);
}
function B(E, R) {
  var D = { __c: R = "__cC" + r++, __: E, Consumer: function(W, V) {
    return W.children(V);
  }, Provider: function(W) {
    var V, F;
    return this.getChildContext || (V = [], (F = {})[R] = this, this.getChildContext = function() {
      return F;
    }, this.shouldComponentUpdate = function(Y) {
      this.props.value !== Y.value && V.some(b$8);
    }, this.sub = function(Y) {
      V.push(Y);
      var G = Y.componentWillUnmount;
      Y.componentWillUnmount = function() {
        V.splice(V.indexOf(Y), 1), G && G.call(Y);
      };
    }), W.children;
  } };
  return D.Provider.__ = D.Consumer.contextType = D;
}
n$8 = e$8.slice, l$9 = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} }, u$8 = 0, i$2 = function(E) {
  return E != null && E.constructor === void 0;
}, d$8.prototype.setState = function(E, R) {
  var D;
  D = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s$8({}, this.state), typeof E == "function" && (E = E(s$8({}, D), this.props)), E && s$8(D, E), E != null && this.__v && (R && this._sb.push(R), b$8(this));
}, d$8.prototype.forceUpdate = function(E) {
  this.__v && (this.__e = !0, E && this.__h.push(E), b$8(this));
}, d$8.prototype.render = p$8, t$8 = [], g$8.__r = 0, r = 0;
const preact = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: d$8,
  Fragment: p$8,
  cloneElement: q,
  createContext: B,
  createElement: h$4,
  createRef: y$5,
  h: h$4,
  hydrate: S,
  get isValidElement() {
    return i$2;
  },
  get options() {
    return l$9;
  },
  render: P$3,
  toChildArray: x
}, Symbol.toStringTag, { value: "Module" }));
var m$8 = htm.bind(h$4);
Object.assign(window, { htm, html: m$8, preact });
let nanoid$3 = (E = 21) => crypto.getRandomValues(new Uint8Array(E)).reduce((R, D) => (D &= 63, D < 36 ? R += D.toString(36) : D < 62 ? R += (D - 26).toString(36).toUpperCase() : D > 62 ? R += "-" : R += "_", R), "");
var dn, at, Ze, Ht, It, Gn;
const Sr = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(R, D = "local") {
    he(this, It);
    he(this, dn, void 0);
    he(this, at, void 0);
    he(this, Ze, void 0);
    he(this, Ht, void 0);
    xe(this, dn, D), xe(this, at, `ZUI_STORE:${R ?? nanoid$3()}`), xe(this, Ze, D === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return re(this, dn);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (re(this, Ht) || xe(this, Ht, new Sr(re(this, at), "session")), re(this, Ht));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(R, D) {
    const W = re(this, Ze).getItem(ke(this, It, Gn).call(this, R));
    return typeof W == "string" ? JSON.parse(W) : W ?? D;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(R, D) {
    if (D == null)
      return this.remove(R);
    re(this, Ze).setItem(ke(this, It, Gn).call(this, R), JSON.stringify(D));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(R) {
    re(this, Ze).removeItem(ke(this, It, Gn).call(this, R));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(R) {
    for (let D = 0; D < re(this, Ze).length; D++) {
      const W = re(this, Ze).key(D);
      if (W != null && W.startsWith(re(this, at))) {
        const V = re(this, Ze).getItem(W);
        typeof V == "string" && R(W.substring(re(this, at).length + 1), JSON.parse(V));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const R = {};
    return this.each((D, W) => {
      R[D] = W;
    }), R;
  }
};
let Store = Sr;
dn = new WeakMap(), at = new WeakMap(), Ze = new WeakMap(), Ht = new WeakMap(), It = new WeakSet(), Gn = function(R) {
  return `${re(this, at)}:${R}`;
};
const store = new Store("DEFAULT");
function createStore(E, R = "local") {
  return new Store(E, R);
}
Object.assign(store, { create: createStore });
const index$j = "";
var n$7, l$8, u$7, t$7, o$g, f$7 = {}, e$7 = [], c$7 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$7(E, R) {
  for (var D in R)
    E[D] = R[D];
  return E;
}
function a$7(E) {
  var R = E.parentNode;
  R && R.removeChild(E);
}
function v$7(E, R, D, W, V) {
  var F = { type: E, props: R, key: D, ref: W, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: V ?? ++u$7 };
  return V == null && l$8.vnode != null && l$8.vnode(F), F;
}
function p$7(E) {
  return E.children;
}
function d$7(E, R) {
  this.props = E, this.context = R;
}
function _$g(E, R) {
  if (R == null)
    return E.__ ? _$g(E.__, E.__.__k.indexOf(E) + 1) : null;
  for (var D; R < E.__k.length; R++)
    if ((D = E.__k[R]) != null && D.__e != null)
      return D.__e;
  return typeof E.type == "function" ? _$g(E) : null;
}
function k$7(E) {
  var R, D;
  if ((E = E.__) != null && E.__c != null) {
    for (E.__e = E.__c.base = null, R = 0; R < E.__k.length; R++)
      if ((D = E.__k[R]) != null && D.__e != null) {
        E.__e = E.__c.base = D.__e;
        break;
      }
    return k$7(E);
  }
}
function b$7(E) {
  (!E.__d && (E.__d = !0) && t$7.push(E) && !g$7.__r++ || o$g !== l$8.debounceRendering) && ((o$g = l$8.debounceRendering) || setTimeout)(g$7);
}
function g$7() {
  for (var E; g$7.__r = t$7.length; )
    E = t$7.sort(function(R, D) {
      return R.__v.__b - D.__v.__b;
    }), t$7 = [], E.some(function(R) {
      var D, W, V, F, Y, G;
      R.__d && (Y = (F = (D = R).__v).__e, (G = D.__P) && (W = [], (V = s$7({}, F)).__v = F.__v + 1, j$7(G, F, V, D.__n, G.ownerSVGElement !== void 0, F.__h != null ? [Y] : null, W, Y ?? _$g(F), F.__h), z$7(W, F), F.__e != Y && k$7(F)));
    });
}
function w$7(E, R, D, W, V, F, Y, G, K, Q) {
  var U, ee, J, X, Z, ie, te, ne = W && W.__k || e$7, oe = ne.length;
  for (D.__k = [], U = 0; U < R.length; U++)
    if ((X = D.__k[U] = (X = R[U]) == null || typeof X == "boolean" ? null : typeof X == "string" || typeof X == "number" || typeof X == "bigint" ? v$7(null, X, null, null, X) : Array.isArray(X) ? v$7(p$7, { children: X }, null, null, null) : X.__b > 0 ? v$7(X.type, X.props, X.key, X.ref ? X.ref : null, X.__v) : X) != null) {
      if (X.__ = D, X.__b = D.__b + 1, (J = ne[U]) === null || J && X.key == J.key && X.type === J.type)
        ne[U] = void 0;
      else
        for (ee = 0; ee < oe; ee++) {
          if ((J = ne[ee]) && X.key == J.key && X.type === J.type) {
            ne[ee] = void 0;
            break;
          }
          J = null;
        }
      j$7(E, X, J = J || f$7, V, F, Y, G, K, Q), Z = X.__e, (ee = X.ref) && J.ref != ee && (te || (te = []), J.ref && te.push(J.ref, null, X), te.push(ee, X.__c || Z, X)), Z != null ? (ie == null && (ie = Z), typeof X.type == "function" && X.__k === J.__k ? X.__d = K = m$7(X, K, E) : K = A$7(E, X, J, ne, Z, K), typeof D.type == "function" && (D.__d = K)) : K && J.__e == K && K.parentNode != E && (K = _$g(J));
    }
  for (D.__e = ie, U = oe; U--; )
    ne[U] != null && N$7(ne[U], ne[U]);
  if (te)
    for (U = 0; U < te.length; U++)
      M$7(te[U], te[++U], te[++U]);
}
function m$7(E, R, D) {
  for (var W, V = E.__k, F = 0; V && F < V.length; F++)
    (W = V[F]) && (W.__ = E, R = typeof W.type == "function" ? m$7(W, R, D) : A$7(D, W, W, V, W.__e, R));
  return R;
}
function A$7(E, R, D, W, V, F) {
  var Y, G, K;
  if (R.__d !== void 0)
    Y = R.__d, R.__d = void 0;
  else if (D == null || V != F || V.parentNode == null)
    e:
      if (F == null || F.parentNode !== E)
        E.appendChild(V), Y = null;
      else {
        for (G = F, K = 0; (G = G.nextSibling) && K < W.length; K += 2)
          if (G == V)
            break e;
        E.insertBefore(V, F), Y = F;
      }
  return Y !== void 0 ? Y : V.nextSibling;
}
function C$7(E, R, D, W, V) {
  var F;
  for (F in D)
    F === "children" || F === "key" || F in R || H$7(E, F, null, D[F], W);
  for (F in R)
    V && typeof R[F] != "function" || F === "children" || F === "key" || F === "value" || F === "checked" || D[F] === R[F] || H$7(E, F, R[F], D[F], W);
}
function $$7(E, R, D) {
  R[0] === "-" ? E.setProperty(R, D) : E[R] = D == null ? "" : typeof D != "number" || c$7.test(R) ? D : D + "px";
}
function H$7(E, R, D, W, V) {
  var F;
  e:
    if (R === "style")
      if (typeof D == "string")
        E.style.cssText = D;
      else {
        if (typeof W == "string" && (E.style.cssText = W = ""), W)
          for (R in W)
            D && R in D || $$7(E.style, R, "");
        if (D)
          for (R in D)
            W && D[R] === W[R] || $$7(E.style, R, D[R]);
      }
    else if (R[0] === "o" && R[1] === "n")
      F = R !== (R = R.replace(/Capture$/, "")), R = R.toLowerCase() in E ? R.toLowerCase().slice(2) : R.slice(2), E.l || (E.l = {}), E.l[R + F] = D, D ? W || E.addEventListener(R, F ? T$7 : I$7, F) : E.removeEventListener(R, F ? T$7 : I$7, F);
    else if (R !== "dangerouslySetInnerHTML") {
      if (V)
        R = R.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (R !== "href" && R !== "list" && R !== "form" && R !== "tabIndex" && R !== "download" && R in E)
        try {
          E[R] = D ?? "";
          break e;
        } catch {
        }
      typeof D == "function" || (D == null || D === !1 && R.indexOf("-") == -1 ? E.removeAttribute(R) : E.setAttribute(R, D));
    }
}
function I$7(E) {
  this.l[E.type + !1](l$8.event ? l$8.event(E) : E);
}
function T$7(E) {
  this.l[E.type + !0](l$8.event ? l$8.event(E) : E);
}
function j$7(E, R, D, W, V, F, Y, G, K) {
  var Q, U, ee, J, X, Z, ie, te, ne, oe, le, ce, ue, pe, de, se = R.type;
  if (R.constructor !== void 0)
    return null;
  D.__h != null && (K = D.__h, G = R.__e = D.__e, R.__h = null, F = [G]), (Q = l$8.__b) && Q(R);
  try {
    e:
      if (typeof se == "function") {
        if (te = R.props, ne = (Q = se.contextType) && W[Q.__c], oe = Q ? ne ? ne.props.value : Q.__ : W, D.__c ? ie = (U = R.__c = D.__c).__ = U.__E : ("prototype" in se && se.prototype.render ? R.__c = U = new se(te, oe) : (R.__c = U = new d$7(te, oe), U.constructor = se, U.render = O$7), ne && ne.sub(U), U.props = te, U.state || (U.state = {}), U.context = oe, U.__n = W, ee = U.__d = !0, U.__h = [], U._sb = []), U.__s == null && (U.__s = U.state), se.getDerivedStateFromProps != null && (U.__s == U.state && (U.__s = s$7({}, U.__s)), s$7(U.__s, se.getDerivedStateFromProps(te, U.__s))), J = U.props, X = U.state, ee)
          se.getDerivedStateFromProps == null && U.componentWillMount != null && U.componentWillMount(), U.componentDidMount != null && U.__h.push(U.componentDidMount);
        else {
          if (se.getDerivedStateFromProps == null && te !== J && U.componentWillReceiveProps != null && U.componentWillReceiveProps(te, oe), !U.__e && U.shouldComponentUpdate != null && U.shouldComponentUpdate(te, U.__s, oe) === !1 || R.__v === D.__v) {
            for (U.props = te, U.state = U.__s, R.__v !== D.__v && (U.__d = !1), U.__v = R, R.__e = D.__e, R.__k = D.__k, R.__k.forEach(function(ae) {
              ae && (ae.__ = R);
            }), le = 0; le < U._sb.length; le++)
              U.__h.push(U._sb[le]);
            U._sb = [], U.__h.length && Y.push(U);
            break e;
          }
          U.componentWillUpdate != null && U.componentWillUpdate(te, U.__s, oe), U.componentDidUpdate != null && U.__h.push(function() {
            U.componentDidUpdate(J, X, Z);
          });
        }
        if (U.context = oe, U.props = te, U.__v = R, U.__P = E, ce = l$8.__r, ue = 0, "prototype" in se && se.prototype.render) {
          for (U.state = U.__s, U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), pe = 0; pe < U._sb.length; pe++)
            U.__h.push(U._sb[pe]);
          U._sb = [];
        } else
          do
            U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), U.state = U.__s;
          while (U.__d && ++ue < 25);
        U.state = U.__s, U.getChildContext != null && (W = s$7(s$7({}, W), U.getChildContext())), ee || U.getSnapshotBeforeUpdate == null || (Z = U.getSnapshotBeforeUpdate(J, X)), de = Q != null && Q.type === p$7 && Q.key == null ? Q.props.children : Q, w$7(E, Array.isArray(de) ? de : [de], R, D, W, V, F, Y, G, K), U.base = R.__e, R.__h = null, U.__h.length && Y.push(U), ie && (U.__E = U.__ = null), U.__e = !1;
      } else
        F == null && R.__v === D.__v ? (R.__k = D.__k, R.__e = D.__e) : R.__e = L$7(D.__e, R, D, W, V, F, Y, K);
    (Q = l$8.diffed) && Q(R);
  } catch (ae) {
    R.__v = null, (K || F != null) && (R.__e = G, R.__h = !!K, F[F.indexOf(G)] = null), l$8.__e(ae, R, D);
  }
}
function z$7(E, R) {
  l$8.__c && l$8.__c(R, E), E.some(function(D) {
    try {
      E = D.__h, D.__h = [], E.some(function(W) {
        W.call(D);
      });
    } catch (W) {
      l$8.__e(W, D.__v);
    }
  });
}
function L$7(E, R, D, W, V, F, Y, G) {
  var K, Q, U, ee = D.props, J = R.props, X = R.type, Z = 0;
  if (X === "svg" && (V = !0), F != null) {
    for (; Z < F.length; Z++)
      if ((K = F[Z]) && "setAttribute" in K == !!X && (X ? K.localName === X : K.nodeType === 3)) {
        E = K, F[Z] = null;
        break;
      }
  }
  if (E == null) {
    if (X === null)
      return document.createTextNode(J);
    E = V ? document.createElementNS("http://www.w3.org/2000/svg", X) : document.createElement(X, J.is && J), F = null, G = !1;
  }
  if (X === null)
    ee === J || G && E.data === J || (E.data = J);
  else {
    if (F = F && n$7.call(E.childNodes), Q = (ee = D.props || f$7).dangerouslySetInnerHTML, U = J.dangerouslySetInnerHTML, !G) {
      if (F != null)
        for (ee = {}, Z = 0; Z < E.attributes.length; Z++)
          ee[E.attributes[Z].name] = E.attributes[Z].value;
      (U || Q) && (U && (Q && U.__html == Q.__html || U.__html === E.innerHTML) || (E.innerHTML = U && U.__html || ""));
    }
    if (C$7(E, J, ee, V, G), U)
      R.__k = [];
    else if (Z = R.props.children, w$7(E, Array.isArray(Z) ? Z : [Z], R, D, W, V && X !== "foreignObject", F, Y, F ? F[0] : D.__k && _$g(D, 0), G), F != null)
      for (Z = F.length; Z--; )
        F[Z] != null && a$7(F[Z]);
    G || ("value" in J && (Z = J.value) !== void 0 && (Z !== E.value || X === "progress" && !Z || X === "option" && Z !== ee.value) && H$7(E, "value", Z, ee.value, !1), "checked" in J && (Z = J.checked) !== void 0 && Z !== E.checked && H$7(E, "checked", Z, ee.checked, !1));
  }
  return E;
}
function M$7(E, R, D) {
  try {
    typeof E == "function" ? E(R) : E.current = R;
  } catch (W) {
    l$8.__e(W, D);
  }
}
function N$7(E, R, D) {
  var W, V;
  if (l$8.unmount && l$8.unmount(E), (W = E.ref) && (W.current && W.current !== E.__e || M$7(W, null, R)), (W = E.__c) != null) {
    if (W.componentWillUnmount)
      try {
        W.componentWillUnmount();
      } catch (F) {
        l$8.__e(F, R);
      }
    W.base = W.__P = null, E.__c = void 0;
  }
  if (W = E.__k)
    for (V = 0; V < W.length; V++)
      W[V] && N$7(W[V], R, D || typeof E.type != "function");
  D || E.__e == null || a$7(E.__e), E.__ = E.__e = E.__d = void 0;
}
function O$7(E, R, D) {
  return this.constructor(E, D);
}
n$7 = e$7.slice, l$8 = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} }, u$7 = 0, d$7.prototype.setState = function(E, R) {
  var D;
  D = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s$7({}, this.state), typeof E == "function" && (E = E(s$7({}, D), this.props)), E && s$7(D, E), E != null && this.__v && (R && this._sb.push(R), b$7(this));
}, d$7.prototype.forceUpdate = function(E) {
  this.__v && (this.__e = !0, E && this.__h.push(E), b$7(this));
}, d$7.prototype.render = p$7, t$7 = [], g$7.__r = 0;
var _$f = 0;
function o$f(E, R, D, W, V) {
  var F, Y, G = {};
  for (Y in R)
    Y == "ref" ? F = R[Y] : G[Y] = R[Y];
  var K = { type: E, props: G, key: D, ref: F, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_$f, __source: V, __self: W };
  if (typeof E == "function" && (F = E.defaultProps))
    for (Y in F)
      G[Y] === void 0 && (G[Y] = F[Y]);
  return l$8.vnode && l$8.vnode(K), K;
}
function hex2Rgb(E) {
  if (E.indexOf("#") === 0 && (E = E.slice(1)), E.length === 3 && (E = E[0] + E[0] + E[1] + E[1] + E[2] + E[2]), E.length !== 6)
    throw new Error(`Invalid HEX color "${E}".`);
  return [
    parseInt(E.slice(0, 2), 16),
    // r
    parseInt(E.slice(2, 4), 16),
    // g
    parseInt(E.slice(4, 6), 16)
    // b
  ];
}
function isLightColor(E) {
  const [R, D, W] = typeof E == "string" ? hex2Rgb(E) : E;
  return R * 0.299 + D * 0.587 + W * 0.114 > 186;
}
function contrastColor(E, R) {
  return isLightColor(E) ? (R == null ? void 0 : R.dark) ?? "#333333" : (R == null ? void 0 : R.light) ?? "#ffffff";
}
function clamp$1(E, R = 255) {
  return Math.min(Math.max(E, 0), R);
}
function hslToRgb(E, R, D) {
  E = E % 360 / 360, R = clamp$1(R), D = clamp$1(D);
  const W = D <= 0.5 ? D * (R + 1) : D + R - D * R, V = D * 2 - W, F = (Y) => (Y = Y < 0 ? Y + 1 : Y > 1 ? Y - 1 : Y, Y * 6 < 1 ? V + (W - V) * Y * 6 : Y * 2 < 1 ? W : Y * 3 < 2 ? V + (W - V) * (2 / 3 - Y) * 6 : V);
  return [
    F(E + 1 / 3) * 255,
    F(E) * 255,
    F(E - 1 / 3) * 255
  ];
}
function getUniqueCode(E) {
  let R = 0;
  if (typeof E != "string" && (E = String(E)), E && E.length)
    for (let D = 0; D < E.length; ++D)
      R += (D + 1) * E.charCodeAt(D);
  return R;
}
function getAvatarText(E, R) {
  return /^[\u4e00-\u9fa5\s]+$/.test(E) ? E = E.length <= R ? E : E.substring(E.length - R) : /^[A-Za-z\d\s]+$/.test(E) ? E = E[0].toUpperCase() : E = E.length <= R ? E : E.substring(0, R), E;
}
let Avatar$1 = class extends d$7 {
  render() {
    const {
      className: R,
      style: D,
      size: W = "",
      circle: V,
      rounded: F,
      background: Y,
      foreColor: G,
      text: K,
      code: Q,
      maxTextLength: U = 2,
      src: ee,
      hueDistance: J = 43,
      saturation: X = 0.4,
      lightness: Z = 0.6,
      children: ie,
      ...te
    } = this.props, ne = ["avatar", R], oe = { ...D, background: Y, color: G };
    let le = 32;
    W && (typeof W == "number" ? (oe.width = `${W}px`, oe.height = `${W}px`, oe.fontSize = `${Math.max(12, Math.round(W / 2))}px`, le = W) : (ne.push(`size-${W}`), le = { xs: 20, sm: 24, lg: 48, xl: 80 }[W])), V ? ne.push("circle") : F && (typeof F == "number" ? oe.borderRadius = `${F}px` : ne.push(`rounded-${F}`));
    let ce;
    if (ee)
      ne.push("has-img"), ce = /* @__PURE__ */ o$f("img", { className: "avatar-img", src: ee, alt: K });
    else if (K != null && K.length) {
      const ue = getAvatarText(K, U);
      if (ne.push("has-text", `has-text-${ue.length}`), Y)
        !G && Y && (oe.color = contrastColor(Y));
      else {
        const de = Q ?? K, se = (typeof de == "number" ? de : getUniqueCode(de)) * J % 360;
        if (oe.background = `hsl(${se},${X * 100}%,${Z * 100}%)`, !G) {
          const ae = hslToRgb(se, X, Z);
          oe.color = contrastColor(ae);
        }
      }
      let pe;
      le && le < 14 * ue.length && (pe = { transform: `scale(${le / (14 * ue.length)})`, whiteSpace: "nowrap" }), ce = /* @__PURE__ */ o$f("div", { "data-actualSize": le, className: "avatar-text", style: pe, children: ue });
    }
    return /* @__PURE__ */ o$f(
      "div",
      {
        className: classes(ne),
        style: oe,
        ...te,
        children: [
          ce,
          ie
        ]
      }
    );
  }
};
class Avatar extends ComponentFromReact {
}
me(Avatar, "NAME", "avatar"), me(Avatar, "Component", Avatar$1);
const avatarGroup = "";
class BtnGroup extends ComponentFromReact {
}
me(BtnGroup, "NAME", "btngroup"), me(BtnGroup, "Component", BtnGroup$1);
var n$6, l$7, u$6, t$6, o$e, f$6 = {}, e$6 = [], c$6 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$6(E, R) {
  for (var D in R)
    E[D] = R[D];
  return E;
}
function a$6(E) {
  var R = E.parentNode;
  R && R.removeChild(E);
}
function h$3(E, R, D) {
  var W, V, F, Y = {};
  for (F in R)
    F == "key" ? W = R[F] : F == "ref" ? V = R[F] : Y[F] = R[F];
  if (arguments.length > 2 && (Y.children = arguments.length > 3 ? n$6.call(arguments, 2) : D), typeof E == "function" && E.defaultProps != null)
    for (F in E.defaultProps)
      Y[F] === void 0 && (Y[F] = E.defaultProps[F]);
  return v$6(E, Y, W, V, null);
}
function v$6(E, R, D, W, V) {
  var F = { type: E, props: R, key: D, ref: W, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: V ?? ++u$6 };
  return V == null && l$7.vnode != null && l$7.vnode(F), F;
}
function y$4() {
  return { current: null };
}
function p$6(E) {
  return E.children;
}
function d$6(E, R) {
  this.props = E, this.context = R;
}
function _$e(E, R) {
  if (R == null)
    return E.__ ? _$e(E.__, E.__.__k.indexOf(E) + 1) : null;
  for (var D; R < E.__k.length; R++)
    if ((D = E.__k[R]) != null && D.__e != null)
      return D.__e;
  return typeof E.type == "function" ? _$e(E) : null;
}
function k$6(E) {
  var R, D;
  if ((E = E.__) != null && E.__c != null) {
    for (E.__e = E.__c.base = null, R = 0; R < E.__k.length; R++)
      if ((D = E.__k[R]) != null && D.__e != null) {
        E.__e = E.__c.base = D.__e;
        break;
      }
    return k$6(E);
  }
}
function b$6(E) {
  (!E.__d && (E.__d = !0) && t$6.push(E) && !g$6.__r++ || o$e !== l$7.debounceRendering) && ((o$e = l$7.debounceRendering) || setTimeout)(g$6);
}
function g$6() {
  for (var E; g$6.__r = t$6.length; )
    E = t$6.sort(function(R, D) {
      return R.__v.__b - D.__v.__b;
    }), t$6 = [], E.some(function(R) {
      var D, W, V, F, Y, G;
      R.__d && (Y = (F = (D = R).__v).__e, (G = D.__P) && (W = [], (V = s$6({}, F)).__v = F.__v + 1, j$6(G, F, V, D.__n, G.ownerSVGElement !== void 0, F.__h != null ? [Y] : null, W, Y ?? _$e(F), F.__h), z$6(W, F), F.__e != Y && k$6(F)));
    });
}
function w$6(E, R, D, W, V, F, Y, G, K, Q) {
  var U, ee, J, X, Z, ie, te, ne = W && W.__k || e$6, oe = ne.length;
  for (D.__k = [], U = 0; U < R.length; U++)
    if ((X = D.__k[U] = (X = R[U]) == null || typeof X == "boolean" ? null : typeof X == "string" || typeof X == "number" || typeof X == "bigint" ? v$6(null, X, null, null, X) : Array.isArray(X) ? v$6(p$6, { children: X }, null, null, null) : X.__b > 0 ? v$6(X.type, X.props, X.key, X.ref ? X.ref : null, X.__v) : X) != null) {
      if (X.__ = D, X.__b = D.__b + 1, (J = ne[U]) === null || J && X.key == J.key && X.type === J.type)
        ne[U] = void 0;
      else
        for (ee = 0; ee < oe; ee++) {
          if ((J = ne[ee]) && X.key == J.key && X.type === J.type) {
            ne[ee] = void 0;
            break;
          }
          J = null;
        }
      j$6(E, X, J = J || f$6, V, F, Y, G, K, Q), Z = X.__e, (ee = X.ref) && J.ref != ee && (te || (te = []), J.ref && te.push(J.ref, null, X), te.push(ee, X.__c || Z, X)), Z != null ? (ie == null && (ie = Z), typeof X.type == "function" && X.__k === J.__k ? X.__d = K = m$6(X, K, E) : K = A$6(E, X, J, ne, Z, K), typeof D.type == "function" && (D.__d = K)) : K && J.__e == K && K.parentNode != E && (K = _$e(J));
    }
  for (D.__e = ie, U = oe; U--; )
    ne[U] != null && N$6(ne[U], ne[U]);
  if (te)
    for (U = 0; U < te.length; U++)
      M$6(te[U], te[++U], te[++U]);
}
function m$6(E, R, D) {
  for (var W, V = E.__k, F = 0; V && F < V.length; F++)
    (W = V[F]) && (W.__ = E, R = typeof W.type == "function" ? m$6(W, R, D) : A$6(D, W, W, V, W.__e, R));
  return R;
}
function A$6(E, R, D, W, V, F) {
  var Y, G, K;
  if (R.__d !== void 0)
    Y = R.__d, R.__d = void 0;
  else if (D == null || V != F || V.parentNode == null)
    e:
      if (F == null || F.parentNode !== E)
        E.appendChild(V), Y = null;
      else {
        for (G = F, K = 0; (G = G.nextSibling) && K < W.length; K += 2)
          if (G == V)
            break e;
        E.insertBefore(V, F), Y = F;
      }
  return Y !== void 0 ? Y : V.nextSibling;
}
function C$6(E, R, D, W, V) {
  var F;
  for (F in D)
    F === "children" || F === "key" || F in R || H$6(E, F, null, D[F], W);
  for (F in R)
    V && typeof R[F] != "function" || F === "children" || F === "key" || F === "value" || F === "checked" || D[F] === R[F] || H$6(E, F, R[F], D[F], W);
}
function $$6(E, R, D) {
  R[0] === "-" ? E.setProperty(R, D) : E[R] = D == null ? "" : typeof D != "number" || c$6.test(R) ? D : D + "px";
}
function H$6(E, R, D, W, V) {
  var F;
  e:
    if (R === "style")
      if (typeof D == "string")
        E.style.cssText = D;
      else {
        if (typeof W == "string" && (E.style.cssText = W = ""), W)
          for (R in W)
            D && R in D || $$6(E.style, R, "");
        if (D)
          for (R in D)
            W && D[R] === W[R] || $$6(E.style, R, D[R]);
      }
    else if (R[0] === "o" && R[1] === "n")
      F = R !== (R = R.replace(/Capture$/, "")), R = R.toLowerCase() in E ? R.toLowerCase().slice(2) : R.slice(2), E.l || (E.l = {}), E.l[R + F] = D, D ? W || E.addEventListener(R, F ? T$6 : I$6, F) : E.removeEventListener(R, F ? T$6 : I$6, F);
    else if (R !== "dangerouslySetInnerHTML") {
      if (V)
        R = R.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (R !== "href" && R !== "list" && R !== "form" && R !== "tabIndex" && R !== "download" && R in E)
        try {
          E[R] = D ?? "";
          break e;
        } catch {
        }
      typeof D == "function" || (D == null || D === !1 && R.indexOf("-") == -1 ? E.removeAttribute(R) : E.setAttribute(R, D));
    }
}
function I$6(E) {
  this.l[E.type + !1](l$7.event ? l$7.event(E) : E);
}
function T$6(E) {
  this.l[E.type + !0](l$7.event ? l$7.event(E) : E);
}
function j$6(E, R, D, W, V, F, Y, G, K) {
  var Q, U, ee, J, X, Z, ie, te, ne, oe, le, ce, ue, pe, de, se = R.type;
  if (R.constructor !== void 0)
    return null;
  D.__h != null && (K = D.__h, G = R.__e = D.__e, R.__h = null, F = [G]), (Q = l$7.__b) && Q(R);
  try {
    e:
      if (typeof se == "function") {
        if (te = R.props, ne = (Q = se.contextType) && W[Q.__c], oe = Q ? ne ? ne.props.value : Q.__ : W, D.__c ? ie = (U = R.__c = D.__c).__ = U.__E : ("prototype" in se && se.prototype.render ? R.__c = U = new se(te, oe) : (R.__c = U = new d$6(te, oe), U.constructor = se, U.render = O$6), ne && ne.sub(U), U.props = te, U.state || (U.state = {}), U.context = oe, U.__n = W, ee = U.__d = !0, U.__h = [], U._sb = []), U.__s == null && (U.__s = U.state), se.getDerivedStateFromProps != null && (U.__s == U.state && (U.__s = s$6({}, U.__s)), s$6(U.__s, se.getDerivedStateFromProps(te, U.__s))), J = U.props, X = U.state, ee)
          se.getDerivedStateFromProps == null && U.componentWillMount != null && U.componentWillMount(), U.componentDidMount != null && U.__h.push(U.componentDidMount);
        else {
          if (se.getDerivedStateFromProps == null && te !== J && U.componentWillReceiveProps != null && U.componentWillReceiveProps(te, oe), !U.__e && U.shouldComponentUpdate != null && U.shouldComponentUpdate(te, U.__s, oe) === !1 || R.__v === D.__v) {
            for (U.props = te, U.state = U.__s, R.__v !== D.__v && (U.__d = !1), U.__v = R, R.__e = D.__e, R.__k = D.__k, R.__k.forEach(function(ae) {
              ae && (ae.__ = R);
            }), le = 0; le < U._sb.length; le++)
              U.__h.push(U._sb[le]);
            U._sb = [], U.__h.length && Y.push(U);
            break e;
          }
          U.componentWillUpdate != null && U.componentWillUpdate(te, U.__s, oe), U.componentDidUpdate != null && U.__h.push(function() {
            U.componentDidUpdate(J, X, Z);
          });
        }
        if (U.context = oe, U.props = te, U.__v = R, U.__P = E, ce = l$7.__r, ue = 0, "prototype" in se && se.prototype.render) {
          for (U.state = U.__s, U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), pe = 0; pe < U._sb.length; pe++)
            U.__h.push(U._sb[pe]);
          U._sb = [];
        } else
          do
            U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), U.state = U.__s;
          while (U.__d && ++ue < 25);
        U.state = U.__s, U.getChildContext != null && (W = s$6(s$6({}, W), U.getChildContext())), ee || U.getSnapshotBeforeUpdate == null || (Z = U.getSnapshotBeforeUpdate(J, X)), de = Q != null && Q.type === p$6 && Q.key == null ? Q.props.children : Q, w$6(E, Array.isArray(de) ? de : [de], R, D, W, V, F, Y, G, K), U.base = R.__e, R.__h = null, U.__h.length && Y.push(U), ie && (U.__E = U.__ = null), U.__e = !1;
      } else
        F == null && R.__v === D.__v ? (R.__k = D.__k, R.__e = D.__e) : R.__e = L$6(D.__e, R, D, W, V, F, Y, K);
    (Q = l$7.diffed) && Q(R);
  } catch (ae) {
    R.__v = null, (K || F != null) && (R.__e = G, R.__h = !!K, F[F.indexOf(G)] = null), l$7.__e(ae, R, D);
  }
}
function z$6(E, R) {
  l$7.__c && l$7.__c(R, E), E.some(function(D) {
    try {
      E = D.__h, D.__h = [], E.some(function(W) {
        W.call(D);
      });
    } catch (W) {
      l$7.__e(W, D.__v);
    }
  });
}
function L$6(E, R, D, W, V, F, Y, G) {
  var K, Q, U, ee = D.props, J = R.props, X = R.type, Z = 0;
  if (X === "svg" && (V = !0), F != null) {
    for (; Z < F.length; Z++)
      if ((K = F[Z]) && "setAttribute" in K == !!X && (X ? K.localName === X : K.nodeType === 3)) {
        E = K, F[Z] = null;
        break;
      }
  }
  if (E == null) {
    if (X === null)
      return document.createTextNode(J);
    E = V ? document.createElementNS("http://www.w3.org/2000/svg", X) : document.createElement(X, J.is && J), F = null, G = !1;
  }
  if (X === null)
    ee === J || G && E.data === J || (E.data = J);
  else {
    if (F = F && n$6.call(E.childNodes), Q = (ee = D.props || f$6).dangerouslySetInnerHTML, U = J.dangerouslySetInnerHTML, !G) {
      if (F != null)
        for (ee = {}, Z = 0; Z < E.attributes.length; Z++)
          ee[E.attributes[Z].name] = E.attributes[Z].value;
      (U || Q) && (U && (Q && U.__html == Q.__html || U.__html === E.innerHTML) || (E.innerHTML = U && U.__html || ""));
    }
    if (C$6(E, J, ee, V, G), U)
      R.__k = [];
    else if (Z = R.props.children, w$6(E, Array.isArray(Z) ? Z : [Z], R, D, W, V && X !== "foreignObject", F, Y, F ? F[0] : D.__k && _$e(D, 0), G), F != null)
      for (Z = F.length; Z--; )
        F[Z] != null && a$6(F[Z]);
    G || ("value" in J && (Z = J.value) !== void 0 && (Z !== E.value || X === "progress" && !Z || X === "option" && Z !== ee.value) && H$6(E, "value", Z, ee.value, !1), "checked" in J && (Z = J.checked) !== void 0 && Z !== E.checked && H$6(E, "checked", Z, ee.checked, !1));
  }
  return E;
}
function M$6(E, R, D) {
  try {
    typeof E == "function" ? E(R) : E.current = R;
  } catch (W) {
    l$7.__e(W, D);
  }
}
function N$6(E, R, D) {
  var W, V;
  if (l$7.unmount && l$7.unmount(E), (W = E.ref) && (W.current && W.current !== E.__e || M$6(W, null, R)), (W = E.__c) != null) {
    if (W.componentWillUnmount)
      try {
        W.componentWillUnmount();
      } catch (F) {
        l$7.__e(F, R);
      }
    W.base = W.__P = null, E.__c = void 0;
  }
  if (W = E.__k)
    for (V = 0; V < W.length; V++)
      W[V] && N$6(W[V], R, D || typeof E.type != "function");
  D || E.__e == null || a$6(E.__e), E.__ = E.__e = E.__d = void 0;
}
function O$6(E, R, D) {
  return this.constructor(E, D);
}
function P$2(E, R, D) {
  var W, V, F;
  l$7.__ && l$7.__(E, R), V = (W = typeof D == "function") ? null : D && D.__k || R.__k, F = [], j$6(R, E = (!W && D || R).__k = h$3(p$6, null, [E]), V || f$6, f$6, R.ownerSVGElement !== void 0, !W && D ? [D] : V ? null : R.firstChild ? n$6.call(R.childNodes) : null, F, !W && D ? D : V ? V.__e : R.firstChild, W), z$6(F, E);
}
n$6 = e$6.slice, l$7 = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} }, u$6 = 0, d$6.prototype.setState = function(E, R) {
  var D;
  D = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s$6({}, this.state), typeof E == "function" && (E = E(s$6({}, D), this.props)), E && s$6(D, E), E != null && this.__v && (R && this._sb.push(R), b$6(this));
}, d$6.prototype.forceUpdate = function(E) {
  this.__v && (this.__e = !0, E && this.__h.push(E), b$6(this));
}, d$6.prototype.render = p$6, t$6 = [], g$6.__r = 0;
var _$d = 0;
function o$d(E, R, D, W, V) {
  var F, Y, G = {};
  for (Y in R)
    Y == "ref" ? F = R[Y] : G[Y] = R[Y];
  var K = { type: E, props: G, key: D, ref: F, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_$d, __source: V, __self: W };
  if (typeof E == "function" && (F = E.defaultProps))
    for (Y in F)
      G[Y] === void 0 && (G[Y] = F[Y]);
  return l$7.vnode && l$7.vnode(K), K;
}
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, dayjs_minExports$1 = {}, dayjs_min$1 = {
  get exports() {
    return dayjs_minExports$1;
  },
  set exports(E) {
    dayjs_minExports$1 = E;
  }
};
(function(E, R) {
  (function(D, W) {
    E.exports = W();
  })(commonjsGlobal, function() {
    var D = 1e3, W = 6e4, V = 36e5, F = "millisecond", Y = "second", G = "minute", K = "hour", Q = "day", U = "week", ee = "month", J = "quarter", X = "year", Z = "date", ie = "Invalid Date", te = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, ne = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, oe = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(ye) {
      var fe = ["th", "st", "nd", "rd"], _e = ye % 100;
      return "[" + ye + (fe[(_e - 20) % 10] || fe[_e] || fe[0]) + "]";
    } }, le = function(ye, fe, _e) {
      var ve = String(ye);
      return !ve || ve.length >= fe ? ye : "" + Array(fe + 1 - ve.length).join(_e) + ye;
    }, ce = { s: le, z: function(ye) {
      var fe = -ye.utcOffset(), _e = Math.abs(fe), ve = Math.floor(_e / 60), $e = _e % 60;
      return (fe <= 0 ? "+" : "-") + le(ve, 2, "0") + ":" + le($e, 2, "0");
    }, m: function ye(fe, _e) {
      if (fe.date() < _e.date())
        return -ye(_e, fe);
      var ve = 12 * (_e.year() - fe.year()) + (_e.month() - fe.month()), $e = fe.clone().add(ve, ee), we = _e - $e < 0, be = fe.clone().add(ve + (we ? -1 : 1), ee);
      return +(-(ve + (_e - $e) / (we ? $e - be : be - $e)) || 0);
    }, a: function(ye) {
      return ye < 0 ? Math.ceil(ye) || 0 : Math.floor(ye);
    }, p: function(ye) {
      return { M: ee, y: X, w: U, d: Q, D: Z, h: K, m: G, s: Y, ms: F, Q: J }[ye] || String(ye || "").toLowerCase().replace(/s$/, "");
    }, u: function(ye) {
      return ye === void 0;
    } }, ue = "en", pe = {};
    pe[ue] = oe;
    var de = function(ye) {
      return ye instanceof Me;
    }, se = function ye(fe, _e, ve) {
      var $e;
      if (!fe)
        return ue;
      if (typeof fe == "string") {
        var we = fe.toLowerCase();
        pe[we] && ($e = we), _e && (pe[we] = _e, $e = we);
        var be = fe.split("-");
        if (!$e && be.length > 1)
          return ye(be[0]);
      } else {
        var Se = fe.name;
        pe[Se] = fe, $e = Se;
      }
      return !ve && $e && (ue = $e), $e || !ve && ue;
    }, ae = function(ye, fe) {
      if (de(ye))
        return ye.clone();
      var _e = typeof fe == "object" ? fe : {};
      return _e.date = ye, _e.args = arguments, new Me(_e);
    }, ge = ce;
    ge.l = se, ge.i = de, ge.w = function(ye, fe) {
      return ae(ye, { locale: fe.$L, utc: fe.$u, x: fe.$x, $offset: fe.$offset });
    };
    var Me = function() {
      function ye(_e) {
        this.$L = se(_e.locale, null, !0), this.parse(_e);
      }
      var fe = ye.prototype;
      return fe.parse = function(_e) {
        this.$d = function(ve) {
          var $e = ve.date, we = ve.utc;
          if ($e === null)
            return new Date(NaN);
          if (ge.u($e))
            return new Date();
          if ($e instanceof Date)
            return new Date($e);
          if (typeof $e == "string" && !/Z$/i.test($e)) {
            var be = $e.match(te);
            if (be) {
              var Se = be[2] - 1 || 0, Ae = (be[7] || "0").substring(0, 3);
              return we ? new Date(Date.UTC(be[1], Se, be[3] || 1, be[4] || 0, be[5] || 0, be[6] || 0, Ae)) : new Date(be[1], Se, be[3] || 1, be[4] || 0, be[5] || 0, be[6] || 0, Ae);
            }
          }
          return new Date($e);
        }(_e), this.$x = _e.x || {}, this.init();
      }, fe.init = function() {
        var _e = this.$d;
        this.$y = _e.getFullYear(), this.$M = _e.getMonth(), this.$D = _e.getDate(), this.$W = _e.getDay(), this.$H = _e.getHours(), this.$m = _e.getMinutes(), this.$s = _e.getSeconds(), this.$ms = _e.getMilliseconds();
      }, fe.$utils = function() {
        return ge;
      }, fe.isValid = function() {
        return this.$d.toString() !== ie;
      }, fe.isSame = function(_e, ve) {
        var $e = ae(_e);
        return this.startOf(ve) <= $e && $e <= this.endOf(ve);
      }, fe.isAfter = function(_e, ve) {
        return ae(_e) < this.startOf(ve);
      }, fe.isBefore = function(_e, ve) {
        return this.endOf(ve) < ae(_e);
      }, fe.$g = function(_e, ve, $e) {
        return ge.u(_e) ? this[ve] : this.set($e, _e);
      }, fe.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, fe.valueOf = function() {
        return this.$d.getTime();
      }, fe.startOf = function(_e, ve) {
        var $e = this, we = !!ge.u(ve) || ve, be = ge.p(_e), Se = function(Oe, Le) {
          var He = ge.w($e.$u ? Date.UTC($e.$y, Le, Oe) : new Date($e.$y, Le, Oe), $e);
          return we ? He : He.endOf(Q);
        }, Ae = function(Oe, Le) {
          return ge.w($e.toDate()[Oe].apply($e.toDate("s"), (we ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Le)), $e);
        }, Te = this.$W, Ne = this.$M, We = this.$D, Ce = "set" + (this.$u ? "UTC" : "");
        switch (be) {
          case X:
            return we ? Se(1, 0) : Se(31, 11);
          case ee:
            return we ? Se(1, Ne) : Se(0, Ne + 1);
          case U:
            var Re = this.$locale().weekStart || 0, Ie = (Te < Re ? Te + 7 : Te) - Re;
            return Se(we ? We - Ie : We + (6 - Ie), Ne);
          case Q:
          case Z:
            return Ae(Ce + "Hours", 0);
          case K:
            return Ae(Ce + "Minutes", 1);
          case G:
            return Ae(Ce + "Seconds", 2);
          case Y:
            return Ae(Ce + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, fe.endOf = function(_e) {
        return this.startOf(_e, !1);
      }, fe.$set = function(_e, ve) {
        var $e, we = ge.p(_e), be = "set" + (this.$u ? "UTC" : ""), Se = ($e = {}, $e[Q] = be + "Date", $e[Z] = be + "Date", $e[ee] = be + "Month", $e[X] = be + "FullYear", $e[K] = be + "Hours", $e[G] = be + "Minutes", $e[Y] = be + "Seconds", $e[F] = be + "Milliseconds", $e)[we], Ae = we === Q ? this.$D + (ve - this.$W) : ve;
        if (we === ee || we === X) {
          var Te = this.clone().set(Z, 1);
          Te.$d[Se](Ae), Te.init(), this.$d = Te.set(Z, Math.min(this.$D, Te.daysInMonth())).$d;
        } else
          Se && this.$d[Se](Ae);
        return this.init(), this;
      }, fe.set = function(_e, ve) {
        return this.clone().$set(_e, ve);
      }, fe.get = function(_e) {
        return this[ge.p(_e)]();
      }, fe.add = function(_e, ve) {
        var $e, we = this;
        _e = Number(_e);
        var be = ge.p(ve), Se = function(Ne) {
          var We = ae(we);
          return ge.w(We.date(We.date() + Math.round(Ne * _e)), we);
        };
        if (be === ee)
          return this.set(ee, this.$M + _e);
        if (be === X)
          return this.set(X, this.$y + _e);
        if (be === Q)
          return Se(1);
        if (be === U)
          return Se(7);
        var Ae = ($e = {}, $e[G] = W, $e[K] = V, $e[Y] = D, $e)[be] || 1, Te = this.$d.getTime() + _e * Ae;
        return ge.w(Te, this);
      }, fe.subtract = function(_e, ve) {
        return this.add(-1 * _e, ve);
      }, fe.format = function(_e) {
        var ve = this, $e = this.$locale();
        if (!this.isValid())
          return $e.invalidDate || ie;
        var we = _e || "YYYY-MM-DDTHH:mm:ssZ", be = ge.z(this), Se = this.$H, Ae = this.$m, Te = this.$M, Ne = $e.weekdays, We = $e.months, Ce = function(Le, He, Ve, Ye) {
          return Le && (Le[He] || Le(ve, we)) || Ve[He].slice(0, Ye);
        }, Re = function(Le) {
          return ge.s(Se % 12 || 12, Le, "0");
        }, Ie = $e.meridiem || function(Le, He, Ve) {
          var Ye = Le < 12 ? "AM" : "PM";
          return Ve ? Ye.toLowerCase() : Ye;
        }, Oe = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: Te + 1, MM: ge.s(Te + 1, 2, "0"), MMM: Ce($e.monthsShort, Te, We, 3), MMMM: Ce(We, Te), D: this.$D, DD: ge.s(this.$D, 2, "0"), d: String(this.$W), dd: Ce($e.weekdaysMin, this.$W, Ne, 2), ddd: Ce($e.weekdaysShort, this.$W, Ne, 3), dddd: Ne[this.$W], H: String(Se), HH: ge.s(Se, 2, "0"), h: Re(1), hh: Re(2), a: Ie(Se, Ae, !0), A: Ie(Se, Ae, !1), m: String(Ae), mm: ge.s(Ae, 2, "0"), s: String(this.$s), ss: ge.s(this.$s, 2, "0"), SSS: ge.s(this.$ms, 3, "0"), Z: be };
        return we.replace(ne, function(Le, He) {
          return He || Oe[Le] || be.replace(":", "");
        });
      }, fe.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, fe.diff = function(_e, ve, $e) {
        var we, be = ge.p(ve), Se = ae(_e), Ae = (Se.utcOffset() - this.utcOffset()) * W, Te = this - Se, Ne = ge.m(this, Se);
        return Ne = (we = {}, we[X] = Ne / 12, we[ee] = Ne, we[J] = Ne / 3, we[U] = (Te - Ae) / 6048e5, we[Q] = (Te - Ae) / 864e5, we[K] = Te / V, we[G] = Te / W, we[Y] = Te / D, we)[be] || Te, $e ? Ne : ge.a(Ne);
      }, fe.daysInMonth = function() {
        return this.endOf(ee).$D;
      }, fe.$locale = function() {
        return pe[this.$L];
      }, fe.locale = function(_e, ve) {
        if (!_e)
          return this.$L;
        var $e = this.clone(), we = se(_e, ve, !0);
        return we && ($e.$L = we), $e;
      }, fe.clone = function() {
        return ge.w(this.$d, this);
      }, fe.toDate = function() {
        return new Date(this.valueOf());
      }, fe.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, fe.toISOString = function() {
        return this.$d.toISOString();
      }, fe.toString = function() {
        return this.$d.toUTCString();
      }, ye;
    }(), Ee = Me.prototype;
    return ae.prototype = Ee, [["$ms", F], ["$s", Y], ["$m", G], ["$H", K], ["$W", Q], ["$M", ee], ["$y", X], ["$D", Z]].forEach(function(ye) {
      Ee[ye[1]] = function(fe) {
        return this.$g(fe, ye[0], ye[1]);
      };
    }), ae.extend = function(ye, fe) {
      return ye.$i || (ye(fe, Me, ae), ye.$i = !0), ae;
    }, ae.locale = se, ae.isDayjs = de, ae.unix = function(ye) {
      return ae(1e3 * ye);
    }, ae.en = pe[ue], ae.Ls = pe, ae.p = {}, ae;
  });
})(dayjs_min$1);
const generateArrayNumber = (E = 0, R = 0) => {
  const D = [];
  for (let W = E; W <= R; W++)
    D.push(W);
  return D;
}, createGroups = (E, R) => {
  const D = Math.ceil(E.length / R);
  return new Array(R).fill({}).map((W, V) => E.slice(V * D, (V + 1) * D));
}, DayPanel = (E) => {
  const { format: R, minDate: D, maxDate: W, tagDate: V, DATEROWCOUNT: F, showOtherMonth: Y, clickDay: G, selectedDate: K, handleChangePanel: Q, showToday: U, handleChange: ee, clickToday: J } = E, X = (ge) => dayjs_minExports$1(ge).isValid() ? dayjs_minExports$1(ge).add(1, "months").format(R) : "", Z = (ge) => dayjs_minExports$1(ge).isValid() ? dayjs_minExports$1(ge).subtract(1, "months").format(R) : "", ie = () => {
    const ge = Z(K);
    ee(ge, !1);
  }, te = () => {
    const ge = X(K);
    ee(ge, !1);
  }, ne = () => {
    ee("", !0);
  }, oe = () => {
    ee(K, !0);
  }, le = (ge, Me, Ee, ye) => {
    const fe = dayjs_minExports$1(), _e = dayjs_minExports$1(K), ve = new Array(ge);
    for (let $e = 0; $e < ge; $e++) {
      const we = Me + $e + 1, be = Ee.set("date", we), Se = ye && !Y ? !0 : D && be.isBefore(D, "date") || W && be.isAfter(W, "date");
      ve[$e] = {
        isSelected: _e.isSame(Ee.set("date", we), "date"),
        isToday: fe.isSame(be, "date"),
        isDisable: !!Se,
        isTag: !!(V != null && V.includes(be.format(R))),
        date: be,
        isOtherMonth: ye,
        onClick: () => Se ? {} : G(be)
      };
    }
    return ve;
  }, ce = () => {
    const ge = dayjs_minExports$1(K), Me = dayjs_minExports$1(), Ee = K ? ge : Me, ye = Ee.set("date", 1).day(), fe = ye === 0 ? 6 : ye - 1, _e = Ee.subtract(1, "month"), $e = Number(_e.endOf("month").get("date")) - fe;
    return le(fe, $e, _e, !0);
  }, ue = () => {
    const ge = dayjs_minExports$1(K), Me = dayjs_minExports$1(), Ee = K ? ge : Me, ye = Ee.set("date", 1).day(), fe = ye === 0 ? 6 : ye - 1, _e = Ee.endOf("month").get("date"), ve = Ee.add(1, "month"), $e = 7 * 6 % (fe + _e);
    return le($e, 0, ve, !0);
  }, pe = () => {
    const ge = K, Me = dayjs_minExports$1(), Ee = K ? dayjs_minExports$1(ge) : Me, ye = Ee.endOf("month").get("date"), fe = le(ye, 0, Ee, !1), _e = ce(), ve = ue(), $e = [..._e, ...fe, ...ve];
    return createGroups($e, F);
  }, de = ["一", "二", "三", "四", "五", "六", "日"], se = pe(), ae = K || dayjs_minExports$1().format(R);
  return /* @__PURE__ */ o$d("div", { className: classes("datepicker-calendar-day"), children: [
    /* @__PURE__ */ o$d("div", { className: "datepicker-calendar-bar not-hide-datepicker", children: [
      /* @__PURE__ */ o$d("div", { class: "flex", children: /* @__PURE__ */ o$d("button", { type: "button", className: "btn ghost", onClick: () => Q("year"), children: [
        /* @__PURE__ */ o$d("span", { children: dayjs_minExports$1(ae).format("YYYY 年 MM 月") }),
        /* @__PURE__ */ o$d("span", { class: "caret" })
      ] }) }),
      /* @__PURE__ */ o$d("div", { class: "flex", children: [
        U && /* @__PURE__ */ o$d("button", { type: "button", className: "btn ghost", onClick: () => {
          J();
        }, children: "今天" }),
        /* @__PURE__ */ o$d("button", { type: "button", className: "btn ghost", onClick: () => ie(), children: /* @__PURE__ */ o$d("i", { className: "icon icon-angle-left" }) }),
        /* @__PURE__ */ o$d("button", { type: "button", className: "btn ghost", onClick: () => te(), children: /* @__PURE__ */ o$d("i", { className: "icon icon-angle-right" }) })
      ] })
    ] }),
    /* @__PURE__ */ o$d("table", { className: "datepicker-calendar-table not-hide-datepicker", children: [
      /* @__PURE__ */ o$d("thead", { className: "datepicker-calendar-thead", children: /* @__PURE__ */ o$d("tr", { children: de.map((ge, Me) => /* @__PURE__ */ o$d("th", { children: ge }, Me)) }) }),
      /* @__PURE__ */ o$d("tbody", { className: "datepicker-calendar-tbody", children: se.map((ge, Me) => /* @__PURE__ */ o$d("tr", { children: ge.map((Ee, ye) => {
        const fe = ["text-center"];
        return Ee.isToday && fe.push("datepicker-calendar-today"), Ee.isSelected && fe.push("datepicker-calendar-selected-date"), Ee.isOtherMonth && fe.push("datepicker-calendar-other-month"), Ee.isTag && fe.push("datepicker-calendar-tag"), /* @__PURE__ */ o$d("td", { className: classes(fe), children: /* @__PURE__ */ o$d("div", { className: classes("btn", "ghost", "datepicker-calendar-date", Ee.isDisable ? "disabled" : ""), onClick: Ee.onClick, children: !Y && Ee.isOtherMonth ? "" : dayjs_minExports$1(Ee.date).format("DD") }) }, ye);
      }) }, Me)) })
    ] }),
    /* @__PURE__ */ o$d("div", { class: "datepicker-calendar-footer text-right mt-1", children: [
      /* @__PURE__ */ o$d("button", { type: "button", className: "btn ghost text-primary", onClick: ne, children: /* @__PURE__ */ o$d("span", { children: "清除" }) }),
      /* @__PURE__ */ o$d("button", { type: "button", className: "btn ghost text-primary", onClick: oe, children: /* @__PURE__ */ o$d("span", { children: "确认" }) })
    ] })
  ] });
}, index$i = "", MonthPanel = (E) => {
  const { format: R, selectedDate: D, minDate: W, maxDate: V, year: F, handleChangeMonth: Y } = E, G = dayjs_minExports$1(W).format("M"), K = dayjs_minExports$1(V).format("M"), Q = createGroups(generateArrayNumber(1, 12), 3), U = (ee, J) => {
    J || Y(ee);
  };
  return /* @__PURE__ */ o$d("div", { className: classes("datepicker-calendar-month", "not-hide-datepicker"), children: /* @__PURE__ */ o$d("table", { className: "datepicker-calendar-month-table", children: /* @__PURE__ */ o$d("tbody", { className: "datepicker-calendar-month-table-body", children: Q.map((ee, J) => /* @__PURE__ */ o$d("tr", { children: ee.map((X, Z) => {
    const ie = ["text-center"], te = dayjs_minExports$1(`${F}-${X}-01`).format(R), ne = !!(G && dayjs_minExports$1(D).isBefore(G) || K && dayjs_minExports$1(D).isBefore(K));
    return /* @__PURE__ */ o$d("td", { className: classes(ie), children: /* @__PURE__ */ o$d("div", { className: classes("btn", "size-sm", "ghost", "datepicker-calendar-month", ne ? "disabled" : ""), onClick: () => {
      U(te, ne);
    }, children: [
      dayjs_minExports$1(te).format("MM"),
      " 月"
    ] }) }, Z);
  }) }, J)) }) }) });
}, MonthAndYearPanel = (E) => {
  const { selectedDate: R, handleChangeMonth: D } = E;
  setTimeout(() => {
    const Y = document.getElementsByClassName("datepicker-accordion");
    Y != null && Y.length && (Y[0].scrollTop = 2400);
  }, 800);
  const W = dayjs_minExports$1(R).year(), V = [...generateArrayNumber(W - 100, W), ...generateArrayNumber(W + 1, W + 100)], F = (Y, G) => {
    var U, ee, J;
    if (!(Y != null && Y.target))
      return;
    const K = document.querySelectorAll(".datepicker-accordion > ul > li > .datepicker-accordion-title");
    for (let X = 0; X < K.length; X++)
      (U = K[X].nextElementSibling) != null && U.classList.contains("hidden") || (ee = K[X].nextElementSibling) == null || ee.classList.add("hidden");
    (J = Y.target.nextElementSibling) == null || J.classList.toggle("hidden");
    const Q = document.querySelector(".datepicker-accordion");
    Q && (Q.scrollTop + Q.clientHeight === Q.scrollHeight ? Q.scrollTop = 0 : G < W ? Q.scrollTop = Q.scrollTop - 30 : Q.scrollTop = Q.scrollTop + 30);
  };
  return /* @__PURE__ */ o$d("div", { class: "datepicker-accordion scroll-smooth not-hide-datepicker", children: /* @__PURE__ */ o$d("ul", { children: V.map((Y, G) => /* @__PURE__ */ o$d("li", { id: W === Y ? "selected" : "", children: [
    /* @__PURE__ */ o$d("div", { class: "datepicker-accordion-title", onClick: (K) => F(K, Y), children: Y }),
    /* @__PURE__ */ o$d("div", { className: classes("datepicker-accordion-content", W === Y ? "" : "hidden"), children: h$3(MonthPanel, {
      ...E,
      year: Y.toString(),
      handleChangeMonth: D
    }) }, G)
  ] })) }) });
};
class Calendar extends d$6 {
  constructor() {
    super(...arguments);
    me(this, "DATEROWCOUNT", 6);
    me(this, "ref", y$4());
    me(this, "state", {
      selectedDate: this.props.date || dayjs_minExports$1().format("YYYY-MM-DD"),
      type: "day"
    });
  }
  handleChange(D, W = !1) {
    var V, F;
    this.setState({ selectedDate: D }), W && ((F = (V = this.props).onChange) == null || F.call(V, D));
  }
  handleChangePanel(D) {
    this.setState({ type: D });
  }
  handleChangeMonth(D) {
    this.setState({ selectedDate: D, type: "day" });
  }
  handleChangeYear(D) {
    this.setState({ selectedDate: D, type: "month" });
  }
  changeYear(D) {
    const W = D === "subtract" ? dayjs_minExports$1(this.state.selectedDate).subtract(1, "year").startOf("year").format(this.props.format) : dayjs_minExports$1(this.state.selectedDate).add(1, "year").startOf("year").format(this.props.format);
    this.handleChange(W);
  }
  clickDay(D) {
    const W = dayjs_minExports$1(D).format(this.props.format);
    this.handleChange(W);
  }
  clickToday() {
    this.handleChange(dayjs_minExports$1().format(this.props.format));
  }
  renderPanel() {
    return this.state.type === "day" ? h$3(DayPanel, {
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleChangePanel: this.handleChangePanel.bind(this),
      clickToday: this.clickToday.bind(this),
      clickDay: this.clickDay.bind(this),
      selectedDate: this.state.selectedDate,
      DATEROWCOUNT: this.DATEROWCOUNT
    }) : h$3(MonthAndYearPanel, {
      ...this.props,
      selectedDate: this.state.selectedDate,
      handleChangeMonth: this.handleChangeMonth.bind(this)
    });
  }
  render() {
    const { className: D } = this.props;
    return /* @__PURE__ */ o$d("div", { className: classes("datepicker-calendar", D), ref: this.ref, children: this.renderPanel() });
  }
}
function getAlignment$2(E) {
  return E.split("-")[1];
}
function getLengthFromAxis$2(E) {
  return E === "y" ? "height" : "width";
}
function getSide$2(E) {
  return E.split("-")[0];
}
function getMainAxisFromPlacement$2(E) {
  return ["top", "bottom"].includes(getSide$2(E)) ? "x" : "y";
}
function computeCoordsFromPlacement$2(E, R, D) {
  let {
    reference: W,
    floating: V
  } = E;
  const F = W.x + W.width / 2 - V.width / 2, Y = W.y + W.height / 2 - V.height / 2, G = getMainAxisFromPlacement$2(R), K = getLengthFromAxis$2(G), Q = W[K] / 2 - V[K] / 2, U = getSide$2(R), ee = G === "x";
  let J;
  switch (U) {
    case "top":
      J = {
        x: F,
        y: W.y - V.height
      };
      break;
    case "bottom":
      J = {
        x: F,
        y: W.y + W.height
      };
      break;
    case "right":
      J = {
        x: W.x + W.width,
        y: Y
      };
      break;
    case "left":
      J = {
        x: W.x - V.width,
        y: Y
      };
      break;
    default:
      J = {
        x: W.x,
        y: W.y
      };
  }
  switch (getAlignment$2(R)) {
    case "start":
      J[G] -= Q * (D && ee ? -1 : 1);
      break;
    case "end":
      J[G] += Q * (D && ee ? -1 : 1);
      break;
  }
  return J;
}
const computePosition$5 = async (E, R, D) => {
  const {
    placement: W = "bottom",
    strategy: V = "absolute",
    middleware: F = [],
    platform: Y
  } = D, G = F.filter(Boolean), K = await (Y.isRTL == null ? void 0 : Y.isRTL(R));
  let Q = await Y.getElementRects({
    reference: E,
    floating: R,
    strategy: V
  }), {
    x: U,
    y: ee
  } = computeCoordsFromPlacement$2(Q, W, K), J = W, X = {}, Z = 0;
  for (let ie = 0; ie < G.length; ie++) {
    const {
      name: te,
      fn: ne
    } = G[ie], {
      x: oe,
      y: le,
      data: ce,
      reset: ue
    } = await ne({
      x: U,
      y: ee,
      initialPlacement: W,
      placement: J,
      strategy: V,
      middlewareData: X,
      rects: Q,
      platform: Y,
      elements: {
        reference: E,
        floating: R
      }
    });
    if (U = oe ?? U, ee = le ?? ee, X = {
      ...X,
      [te]: {
        ...X[te],
        ...ce
      }
    }, ue && Z <= 50) {
      Z++, typeof ue == "object" && (ue.placement && (J = ue.placement), ue.rects && (Q = ue.rects === !0 ? await Y.getElementRects({
        reference: E,
        floating: R,
        strategy: V
      }) : ue.rects), {
        x: U,
        y: ee
      } = computeCoordsFromPlacement$2(Q, J, K)), ie = -1;
      continue;
    }
  }
  return {
    x: U,
    y: ee,
    placement: J,
    strategy: V,
    middlewareData: X
  };
};
function expandPaddingObject$2(E) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...E
  };
}
function getSideObjectFromPadding$2(E) {
  return typeof E != "number" ? expandPaddingObject$2(E) : {
    top: E,
    right: E,
    bottom: E,
    left: E
  };
}
function rectToClientRect$2(E) {
  return {
    ...E,
    top: E.y,
    left: E.x,
    right: E.x + E.width,
    bottom: E.y + E.height
  };
}
async function detectOverflow$2(E, R) {
  var D;
  R === void 0 && (R = {});
  const {
    x: W,
    y: V,
    platform: F,
    rects: Y,
    elements: G,
    strategy: K
  } = E, {
    boundary: Q = "clippingAncestors",
    rootBoundary: U = "viewport",
    elementContext: ee = "floating",
    altBoundary: J = !1,
    padding: X = 0
  } = R, Z = getSideObjectFromPadding$2(X), te = G[J ? ee === "floating" ? "reference" : "floating" : ee], ne = rectToClientRect$2(await F.getClippingRect({
    element: (D = await (F.isElement == null ? void 0 : F.isElement(te))) == null || D ? te : te.contextElement || await (F.getDocumentElement == null ? void 0 : F.getDocumentElement(G.floating)),
    boundary: Q,
    rootBoundary: U,
    strategy: K
  })), oe = ee === "floating" ? {
    ...Y.floating,
    x: W,
    y: V
  } : Y.reference, le = await (F.getOffsetParent == null ? void 0 : F.getOffsetParent(G.floating)), ce = await (F.isElement == null ? void 0 : F.isElement(le)) ? await (F.getScale == null ? void 0 : F.getScale(le)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, ue = rectToClientRect$2(F.convertOffsetParentRelativeRectToViewportRelativeRect ? await F.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: oe,
    offsetParent: le,
    strategy: K
  }) : oe);
  return {
    top: (ne.top - ue.top + Z.top) / ce.y,
    bottom: (ue.bottom - ne.bottom + Z.bottom) / ce.y,
    left: (ne.left - ue.left + Z.left) / ce.x,
    right: (ue.right - ne.right + Z.right) / ce.x
  };
}
const min$5 = Math.min, max$5 = Math.max;
function within$2(E, R, D) {
  return max$5(E, min$5(R, D));
}
const arrow$2 = (E) => ({
  name: "arrow",
  options: E,
  async fn(R) {
    const {
      element: D,
      padding: W = 0
    } = E || {}, {
      x: V,
      y: F,
      placement: Y,
      rects: G,
      platform: K
    } = R;
    if (D == null)
      return {};
    const Q = getSideObjectFromPadding$2(W), U = {
      x: V,
      y: F
    }, ee = getMainAxisFromPlacement$2(Y), J = getLengthFromAxis$2(ee), X = await K.getDimensions(D), Z = ee === "y" ? "top" : "left", ie = ee === "y" ? "bottom" : "right", te = G.reference[J] + G.reference[ee] - U[ee] - G.floating[J], ne = U[ee] - G.reference[ee], oe = await (K.getOffsetParent == null ? void 0 : K.getOffsetParent(D));
    let le = oe ? ee === "y" ? oe.clientHeight || 0 : oe.clientWidth || 0 : 0;
    le === 0 && (le = G.floating[J]);
    const ce = te / 2 - ne / 2, ue = Q[Z], pe = le - X[J] - Q[ie], de = le / 2 - X[J] / 2 + ce, se = within$2(ue, de, pe), ge = getAlignment$2(Y) != null && de != se && G.reference[J] / 2 - (de < ue ? Q[Z] : Q[ie]) - X[J] / 2 < 0 ? de < ue ? ue - de : pe - de : 0;
    return {
      [ee]: U[ee] - ge,
      data: {
        [ee]: se,
        centerOffset: de - se
      }
    };
  }
}), oppositeSideMap$2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement$2(E) {
  return E.replace(/left|right|bottom|top/g, (R) => oppositeSideMap$2[R]);
}
function getAlignmentSides$2(E, R, D) {
  D === void 0 && (D = !1);
  const W = getAlignment$2(E), V = getMainAxisFromPlacement$2(E), F = getLengthFromAxis$2(V);
  let Y = V === "x" ? W === (D ? "end" : "start") ? "right" : "left" : W === "start" ? "bottom" : "top";
  return R.reference[F] > R.floating[F] && (Y = getOppositePlacement$2(Y)), {
    main: Y,
    cross: getOppositePlacement$2(Y)
  };
}
const oppositeAlignmentMap$2 = {
  start: "end",
  end: "start"
};
function getOppositeAlignmentPlacement$2(E) {
  return E.replace(/start|end/g, (R) => oppositeAlignmentMap$2[R]);
}
function getExpandedPlacements$2(E) {
  const R = getOppositePlacement$2(E);
  return [getOppositeAlignmentPlacement$2(E), R, getOppositeAlignmentPlacement$2(R)];
}
function getSideList$2(E, R, D) {
  const W = ["left", "right"], V = ["right", "left"], F = ["top", "bottom"], Y = ["bottom", "top"];
  switch (E) {
    case "top":
    case "bottom":
      return D ? R ? V : W : R ? W : V;
    case "left":
    case "right":
      return R ? F : Y;
    default:
      return [];
  }
}
function getOppositeAxisPlacements$2(E, R, D, W) {
  const V = getAlignment$2(E);
  let F = getSideList$2(getSide$2(E), D === "start", W);
  return V && (F = F.map((Y) => Y + "-" + V), R && (F = F.concat(F.map(getOppositeAlignmentPlacement$2)))), F;
}
const flip$2 = function(E) {
  return E === void 0 && (E = {}), {
    name: "flip",
    options: E,
    async fn(R) {
      var D;
      const {
        placement: W,
        middlewareData: V,
        rects: F,
        initialPlacement: Y,
        platform: G,
        elements: K
      } = R, {
        mainAxis: Q = !0,
        crossAxis: U = !0,
        fallbackPlacements: ee,
        fallbackStrategy: J = "bestFit",
        fallbackAxisSideDirection: X = "none",
        flipAlignment: Z = !0,
        ...ie
      } = E, te = getSide$2(W), ne = getSide$2(Y) === Y, oe = await (G.isRTL == null ? void 0 : G.isRTL(K.floating)), le = ee || (ne || !Z ? [getOppositePlacement$2(Y)] : getExpandedPlacements$2(Y));
      !ee && X !== "none" && le.push(...getOppositeAxisPlacements$2(Y, Z, X, oe));
      const ce = [Y, ...le], ue = await detectOverflow$2(R, ie), pe = [];
      let de = ((D = V.flip) == null ? void 0 : D.overflows) || [];
      if (Q && pe.push(ue[te]), U) {
        const {
          main: ge,
          cross: Me
        } = getAlignmentSides$2(W, F, oe);
        pe.push(ue[ge], ue[Me]);
      }
      if (de = [...de, {
        placement: W,
        overflows: pe
      }], !pe.every((ge) => ge <= 0)) {
        var se;
        const ge = (((se = V.flip) == null ? void 0 : se.index) || 0) + 1, Me = ce[ge];
        if (Me)
          return {
            data: {
              index: ge,
              overflows: de
            },
            reset: {
              placement: Me
            }
          };
        let Ee = "bottom";
        switch (J) {
          case "bestFit": {
            var ae;
            const ye = (ae = de.map((fe) => [fe, fe.overflows.filter((_e) => _e > 0).reduce((_e, ve) => _e + ve, 0)]).sort((fe, _e) => fe[1] - _e[1])[0]) == null ? void 0 : ae[0].placement;
            ye && (Ee = ye);
            break;
          }
          case "initialPlacement":
            Ee = Y;
            break;
        }
        if (W !== Ee)
          return {
            reset: {
              placement: Ee
            }
          };
      }
      return {};
    }
  };
};
async function convertValueToCoords$2(E, R) {
  const {
    placement: D,
    platform: W,
    elements: V
  } = E, F = await (W.isRTL == null ? void 0 : W.isRTL(V.floating)), Y = getSide$2(D), G = getAlignment$2(D), K = getMainAxisFromPlacement$2(D) === "x", Q = ["left", "top"].includes(Y) ? -1 : 1, U = F && K ? -1 : 1, ee = typeof R == "function" ? R(E) : R;
  let {
    mainAxis: J,
    crossAxis: X,
    alignmentAxis: Z
  } = typeof ee == "number" ? {
    mainAxis: ee,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...ee
  };
  return G && typeof Z == "number" && (X = G === "end" ? Z * -1 : Z), K ? {
    x: X * U,
    y: J * Q
  } : {
    x: J * Q,
    y: X * U
  };
}
const offset$2 = function(E) {
  return E === void 0 && (E = 0), {
    name: "offset",
    options: E,
    async fn(R) {
      const {
        x: D,
        y: W
      } = R, V = await convertValueToCoords$2(R, E);
      return {
        x: D + V.x,
        y: W + V.y,
        data: V
      };
    }
  };
};
function getWindow$2(E) {
  var R;
  return ((R = E.ownerDocument) == null ? void 0 : R.defaultView) || window;
}
function getComputedStyle$1$2(E) {
  return getWindow$2(E).getComputedStyle(E);
}
function getNodeName$2(E) {
  return isNode$2(E) ? (E.nodeName || "").toLowerCase() : "";
}
let uaString$2;
function getUAString$2() {
  if (uaString$2)
    return uaString$2;
  const E = navigator.userAgentData;
  return E && Array.isArray(E.brands) ? (uaString$2 = E.brands.map((R) => R.brand + "/" + R.version).join(" "), uaString$2) : navigator.userAgent;
}
function isHTMLElement$2(E) {
  return E instanceof getWindow$2(E).HTMLElement;
}
function isElement$2(E) {
  return E instanceof getWindow$2(E).Element;
}
function isNode$2(E) {
  return E instanceof getWindow$2(E).Node;
}
function isShadowRoot$2(E) {
  if (typeof ShadowRoot > "u")
    return !1;
  const R = getWindow$2(E).ShadowRoot;
  return E instanceof R || E instanceof ShadowRoot;
}
function isOverflowElement$2(E) {
  const {
    overflow: R,
    overflowX: D,
    overflowY: W,
    display: V
  } = getComputedStyle$1$2(E);
  return /auto|scroll|overlay|hidden|clip/.test(R + W + D) && !["inline", "contents"].includes(V);
}
function isTableElement$2(E) {
  return ["table", "td", "th"].includes(getNodeName$2(E));
}
function isContainingBlock$2(E) {
  const R = /firefox/i.test(getUAString$2()), D = getComputedStyle$1$2(E), W = D.backdropFilter || D.WebkitBackdropFilter;
  return D.transform !== "none" || D.perspective !== "none" || (W ? W !== "none" : !1) || R && D.willChange === "filter" || R && (D.filter ? D.filter !== "none" : !1) || ["transform", "perspective"].some((V) => D.willChange.includes(V)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (V) => {
      const F = D.contain;
      return F != null ? F.includes(V) : !1;
    }
  );
}
function isLayoutViewport$2() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString$2());
}
function isLastTraversableNode$2(E) {
  return ["html", "body", "#document"].includes(getNodeName$2(E));
}
const min$4 = Math.min, max$4 = Math.max, round$2 = Math.round;
function getCssDimensions$2(E) {
  const R = getComputedStyle$1$2(E);
  let D = parseFloat(R.width), W = parseFloat(R.height);
  const V = E.offsetWidth, F = E.offsetHeight, Y = round$2(D) !== V || round$2(W) !== F;
  return Y && (D = V, W = F), {
    width: D,
    height: W,
    fallback: Y
  };
}
function unwrapElement$2(E) {
  return isElement$2(E) ? E : E.contextElement;
}
const FALLBACK_SCALE$2 = {
  x: 1,
  y: 1
};
function getScale$2(E) {
  const R = unwrapElement$2(E);
  if (!isHTMLElement$2(R))
    return FALLBACK_SCALE$2;
  const D = R.getBoundingClientRect(), {
    width: W,
    height: V,
    fallback: F
  } = getCssDimensions$2(R);
  let Y = (F ? round$2(D.width) : D.width) / W, G = (F ? round$2(D.height) : D.height) / V;
  return (!Y || !Number.isFinite(Y)) && (Y = 1), (!G || !Number.isFinite(G)) && (G = 1), {
    x: Y,
    y: G
  };
}
function getBoundingClientRect$2(E, R, D, W) {
  var V, F;
  R === void 0 && (R = !1), D === void 0 && (D = !1);
  const Y = E.getBoundingClientRect(), G = unwrapElement$2(E);
  let K = FALLBACK_SCALE$2;
  R && (W ? isElement$2(W) && (K = getScale$2(W)) : K = getScale$2(E));
  const Q = G ? getWindow$2(G) : window, U = !isLayoutViewport$2() && D;
  let ee = (Y.left + (U && ((V = Q.visualViewport) == null ? void 0 : V.offsetLeft) || 0)) / K.x, J = (Y.top + (U && ((F = Q.visualViewport) == null ? void 0 : F.offsetTop) || 0)) / K.y, X = Y.width / K.x, Z = Y.height / K.y;
  if (G) {
    const ie = getWindow$2(G), te = W && isElement$2(W) ? getWindow$2(W) : W;
    let ne = ie.frameElement;
    for (; ne && W && te !== ie; ) {
      const oe = getScale$2(ne), le = ne.getBoundingClientRect(), ce = getComputedStyle(ne);
      le.x += (ne.clientLeft + parseFloat(ce.paddingLeft)) * oe.x, le.y += (ne.clientTop + parseFloat(ce.paddingTop)) * oe.y, ee *= oe.x, J *= oe.y, X *= oe.x, Z *= oe.y, ee += le.x, J += le.y, ne = getWindow$2(ne).frameElement;
    }
  }
  return {
    width: X,
    height: Z,
    top: J,
    right: ee + X,
    bottom: J + Z,
    left: ee,
    x: ee,
    y: J
  };
}
function getDocumentElement$2(E) {
  return ((isNode$2(E) ? E.ownerDocument : E.document) || window.document).documentElement;
}
function getNodeScroll$2(E) {
  return isElement$2(E) ? {
    scrollLeft: E.scrollLeft,
    scrollTop: E.scrollTop
  } : {
    scrollLeft: E.pageXOffset,
    scrollTop: E.pageYOffset
  };
}
function getWindowScrollBarX$2(E) {
  return getBoundingClientRect$2(getDocumentElement$2(E)).left + getNodeScroll$2(E).scrollLeft;
}
function getRectRelativeToOffsetParent$2(E, R, D) {
  const W = isHTMLElement$2(R), V = getDocumentElement$2(R), F = getBoundingClientRect$2(E, !0, D === "fixed", R);
  let Y = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const G = {
    x: 0,
    y: 0
  };
  if (W || !W && D !== "fixed")
    if ((getNodeName$2(R) !== "body" || isOverflowElement$2(V)) && (Y = getNodeScroll$2(R)), isHTMLElement$2(R)) {
      const K = getBoundingClientRect$2(R, !0);
      G.x = K.x + R.clientLeft, G.y = K.y + R.clientTop;
    } else
      V && (G.x = getWindowScrollBarX$2(V));
  return {
    x: F.left + Y.scrollLeft - G.x,
    y: F.top + Y.scrollTop - G.y,
    width: F.width,
    height: F.height
  };
}
function getParentNode$2(E) {
  if (getNodeName$2(E) === "html")
    return E;
  const R = (
    // Step into the shadow DOM of the parent of a slotted node
    E.assignedSlot || // DOM Element detected
    E.parentNode || // ShadowRoot detected
    (isShadowRoot$2(E) ? E.host : null) || // Fallback
    getDocumentElement$2(E)
  );
  return isShadowRoot$2(R) ? R.host : R;
}
function getTrueOffsetParent$2(E) {
  return !isHTMLElement$2(E) || getComputedStyle$1$2(E).position === "fixed" ? null : E.offsetParent;
}
function getContainingBlock$2(E) {
  let R = getParentNode$2(E);
  for (; isHTMLElement$2(R) && !isLastTraversableNode$2(R); ) {
    if (isContainingBlock$2(R))
      return R;
    R = getParentNode$2(R);
  }
  return null;
}
function getOffsetParent$2(E) {
  const R = getWindow$2(E);
  let D = getTrueOffsetParent$2(E);
  for (; D && isTableElement$2(D) && getComputedStyle$1$2(D).position === "static"; )
    D = getTrueOffsetParent$2(D);
  return D && (getNodeName$2(D) === "html" || getNodeName$2(D) === "body" && getComputedStyle$1$2(D).position === "static" && !isContainingBlock$2(D)) ? R : D || getContainingBlock$2(E) || R;
}
function getDimensions$2(E) {
  return getCssDimensions$2(E);
}
function convertOffsetParentRelativeRectToViewportRelativeRect$2(E) {
  let {
    rect: R,
    offsetParent: D,
    strategy: W
  } = E;
  const V = isHTMLElement$2(D), F = getDocumentElement$2(D);
  if (D === F)
    return R;
  let Y = {
    scrollLeft: 0,
    scrollTop: 0
  }, G = {
    x: 1,
    y: 1
  };
  const K = {
    x: 0,
    y: 0
  };
  if ((V || !V && W !== "fixed") && ((getNodeName$2(D) !== "body" || isOverflowElement$2(F)) && (Y = getNodeScroll$2(D)), isHTMLElement$2(D))) {
    const Q = getBoundingClientRect$2(D);
    G = getScale$2(D), K.x = Q.x + D.clientLeft, K.y = Q.y + D.clientTop;
  }
  return {
    width: R.width * G.x,
    height: R.height * G.y,
    x: R.x * G.x - Y.scrollLeft * G.x + K.x,
    y: R.y * G.y - Y.scrollTop * G.y + K.y
  };
}
function getViewportRect$2(E, R) {
  const D = getWindow$2(E), W = getDocumentElement$2(E), V = D.visualViewport;
  let F = W.clientWidth, Y = W.clientHeight, G = 0, K = 0;
  if (V) {
    F = V.width, Y = V.height;
    const Q = isLayoutViewport$2();
    (Q || !Q && R === "fixed") && (G = V.offsetLeft, K = V.offsetTop);
  }
  return {
    width: F,
    height: Y,
    x: G,
    y: K
  };
}
function getDocumentRect$2(E) {
  var R;
  const D = getDocumentElement$2(E), W = getNodeScroll$2(E), V = (R = E.ownerDocument) == null ? void 0 : R.body, F = max$4(D.scrollWidth, D.clientWidth, V ? V.scrollWidth : 0, V ? V.clientWidth : 0), Y = max$4(D.scrollHeight, D.clientHeight, V ? V.scrollHeight : 0, V ? V.clientHeight : 0);
  let G = -W.scrollLeft + getWindowScrollBarX$2(E);
  const K = -W.scrollTop;
  return getComputedStyle$1$2(V || D).direction === "rtl" && (G += max$4(D.clientWidth, V ? V.clientWidth : 0) - F), {
    width: F,
    height: Y,
    x: G,
    y: K
  };
}
function getNearestOverflowAncestor$2(E) {
  const R = getParentNode$2(E);
  return isLastTraversableNode$2(R) ? E.ownerDocument.body : isHTMLElement$2(R) && isOverflowElement$2(R) ? R : getNearestOverflowAncestor$2(R);
}
function getOverflowAncestors$2(E, R) {
  var D;
  R === void 0 && (R = []);
  const W = getNearestOverflowAncestor$2(E), V = W === ((D = E.ownerDocument) == null ? void 0 : D.body), F = getWindow$2(W);
  return V ? R.concat(F, F.visualViewport || [], isOverflowElement$2(W) ? W : []) : R.concat(W, getOverflowAncestors$2(W));
}
function getInnerBoundingClientRect$2(E, R) {
  const D = getBoundingClientRect$2(E, !0, R === "fixed"), W = D.top + E.clientTop, V = D.left + E.clientLeft, F = isHTMLElement$2(E) ? getScale$2(E) : {
    x: 1,
    y: 1
  }, Y = E.clientWidth * F.x, G = E.clientHeight * F.y, K = V * F.x, Q = W * F.y;
  return {
    top: Q,
    left: K,
    right: K + Y,
    bottom: Q + G,
    x: K,
    y: Q,
    width: Y,
    height: G
  };
}
function getClientRectFromClippingAncestor$2(E, R, D) {
  return R === "viewport" ? rectToClientRect$2(getViewportRect$2(E, D)) : isElement$2(R) ? getInnerBoundingClientRect$2(R, D) : rectToClientRect$2(getDocumentRect$2(getDocumentElement$2(E)));
}
function getClippingElementAncestors$2(E, R) {
  const D = R.get(E);
  if (D)
    return D;
  let W = getOverflowAncestors$2(E).filter((G) => isElement$2(G) && getNodeName$2(G) !== "body"), V = null;
  const F = getComputedStyle$1$2(E).position === "fixed";
  let Y = F ? getParentNode$2(E) : E;
  for (; isElement$2(Y) && !isLastTraversableNode$2(Y); ) {
    const G = getComputedStyle$1$2(Y), K = isContainingBlock$2(Y);
    (F ? !K && !V : !K && G.position === "static" && !!V && ["absolute", "fixed"].includes(V.position)) ? W = W.filter((U) => U !== Y) : V = G, Y = getParentNode$2(Y);
  }
  return R.set(E, W), W;
}
function getClippingRect$2(E) {
  let {
    element: R,
    boundary: D,
    rootBoundary: W,
    strategy: V
  } = E;
  const Y = [...D === "clippingAncestors" ? getClippingElementAncestors$2(R, this._c) : [].concat(D), W], G = Y[0], K = Y.reduce((Q, U) => {
    const ee = getClientRectFromClippingAncestor$2(R, U, V);
    return Q.top = max$4(ee.top, Q.top), Q.right = min$4(ee.right, Q.right), Q.bottom = min$4(ee.bottom, Q.bottom), Q.left = max$4(ee.left, Q.left), Q;
  }, getClientRectFromClippingAncestor$2(R, G, V));
  return {
    width: K.right - K.left,
    height: K.bottom - K.top,
    x: K.left,
    y: K.top
  };
}
const platform$2 = {
  getClippingRect: getClippingRect$2,
  convertOffsetParentRelativeRectToViewportRelativeRect: convertOffsetParentRelativeRectToViewportRelativeRect$2,
  isElement: isElement$2,
  getDimensions: getDimensions$2,
  getOffsetParent: getOffsetParent$2,
  getDocumentElement: getDocumentElement$2,
  getScale: getScale$2,
  async getElementRects(E) {
    let {
      reference: R,
      floating: D,
      strategy: W
    } = E;
    const V = this.getOffsetParent || getOffsetParent$2, F = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent$2(R, await V(D), W),
      floating: {
        x: 0,
        y: 0,
        ...await F(D)
      }
    };
  },
  getClientRects: (E) => Array.from(E.getClientRects()),
  isRTL: (E) => getComputedStyle$1$2(E).direction === "rtl"
};
function autoUpdate$2(E, R, D, W) {
  W === void 0 && (W = {});
  const {
    ancestorScroll: V = !0,
    ancestorResize: F = !0,
    elementResize: Y = !0,
    animationFrame: G = !1
  } = W, K = V && !G, Q = K || F ? [...isElement$2(E) ? getOverflowAncestors$2(E) : E.contextElement ? getOverflowAncestors$2(E.contextElement) : [], ...getOverflowAncestors$2(R)] : [];
  Q.forEach((Z) => {
    K && Z.addEventListener("scroll", D, {
      passive: !0
    }), F && Z.addEventListener("resize", D);
  });
  let U = null;
  if (Y) {
    let Z = !0;
    U = new ResizeObserver(() => {
      Z || D(), Z = !1;
    }), isElement$2(E) && !G && U.observe(E), !isElement$2(E) && E.contextElement && !G && U.observe(E.contextElement), U.observe(R);
  }
  let ee, J = G ? getBoundingClientRect$2(E) : null;
  G && X();
  function X() {
    const Z = getBoundingClientRect$2(E);
    J && (Z.x !== J.x || Z.y !== J.y || Z.width !== J.width || Z.height !== J.height) && D(), J = Z, ee = requestAnimationFrame(X);
  }
  return D(), () => {
    var Z;
    Q.forEach((ie) => {
      K && ie.removeEventListener("scroll", D), F && ie.removeEventListener("resize", D);
    }), (Z = U) == null || Z.disconnect(), U = null, G && cancelAnimationFrame(ee);
  };
}
const computePosition$4 = (E, R, D) => {
  const W = /* @__PURE__ */ new Map(), V = {
    platform: platform$2,
    ...D
  }, F = {
    ...V.platform,
    _c: W
  };
  return computePosition$5(E, R, {
    ...V,
    platform: F
  });
};
var Wt, Ft, Be, vt, hn, pn, $n, pr, no, Hr, oo, Ir, ro, Wr, io, Fr, so, jr, lo, Br, co, Ur, ao;
const pt = class extends ComponentBase {
  constructor() {
    super(...arguments);
    he(this, $n);
    he(this, no);
    he(this, oo);
    he(this, ro);
    he(this, io);
    he(this, so);
    he(this, lo);
    he(this, co);
    he(this, Wt, void 0);
    he(this, Ft, 0);
    he(this, Be, void 0);
    he(this, vt, void 0);
    he(this, hn, void 0);
    he(this, pn, void 0);
    me(this, "hideLater", () => {
      re(this, ao).call(this), xe(this, Ft, window.setTimeout(this.hide.bind(this), 100));
    });
    he(this, ao, () => {
      clearTimeout(re(this, Ft)), xe(this, Ft, 0);
    });
  }
  get isShown() {
    var D;
    return (D = re(this, vt)) == null ? void 0 : D.classList.contains(pt.CLASS_SHOW);
  }
  get datepicker() {
    return re(this, vt) || ke(this, oo, Ir).call(this);
  }
  get trigger() {
    return re(this, hn) || this.element;
  }
  get elementShowClass() {
    return `with-${pt.NAME}-show`;
  }
  show(D) {
    return xe(this, hn, D), !this.datepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.datepicker.classList.add(pt.CLASS_SHOW), this.datepicker.classList.add("fade"), ke(this, lo, Br).call(this), !0);
  }
  hide() {
    var D, W;
    return (D = re(this, pn)) == null || D.call(this), this.element.classList.remove(this.elementShowClass), (W = re(this, vt)) == null || W.classList.remove(pt.CLASS_SHOW), this.datepicker.classList.remove("fade"), !0;
  }
  toggle(D) {
    return this.isShown ? this.hide() : this.show(D);
  }
  static clear(D) {
    var K, Q;
    D instanceof Event && (D = { event: D });
    const { event: W, exclude: V, ignoreSelector: F = ".not-hide-datepicker" } = D || {};
    if (W && F && ((Q = (K = W.target).closest) != null && Q.call(K, F)))
      return;
    const Y = this.getAll().entries(), G = new Set(V || []);
    for (const [U, ee] of Y)
      G.has(U) || ee.hide();
  }
};
let Datepicker = pt;
Wt = new WeakMap(), Ft = new WeakMap(), Be = new WeakMap(), vt = new WeakMap(), hn = new WeakMap(), pn = new WeakMap(), $n = new WeakSet(), pr = function() {
  const { arrow: D } = this.options;
  return typeof D == "number" ? D : 8;
}, no = new WeakSet(), Hr = function() {
  const D = ke(this, $n, pr).call(this);
  return xe(this, Be, document.createElement("div")), re(this, Be).style.position = "absolute", re(this, Be).style.width = `${D}px`, re(this, Be).style.height = `${D}px`, re(this, Be).style.transform = "rotate(45deg)", re(this, Be);
}, oo = new WeakSet(), Ir = function() {
  const D = pt.CLASSNAME, W = document.createElement("div");
  return W.classList.add(D), P$2(h$3(Calendar, { ...this.options }), W), this.options.arrow && W.append(ke(this, no, Hr).call(this)), W.style.width = "max-content", W.style.position = this.options.strategy, W.style.top = "0", W.style.left = "0", document.body.appendChild(W), xe(this, vt, W), W;
}, ro = new WeakSet(), Wr = function() {
  var Y;
  const D = ke(this, $n, pr).call(this), { strategy: W, placement: V } = this.options, F = {
    middleware: [offset$2(D), flip$2()],
    strategy: W,
    placement: V
  };
  return this.options.arrow && re(this, Be) && ((Y = F.middleware) == null || Y.push(arrow$2({ element: re(this, Be) }))), F;
}, io = new WeakSet(), Fr = function(D) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[D];
}, so = new WeakSet(), jr = function(D) {
  return D === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : D === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : D === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
}, lo = new WeakSet(), Br = function() {
  const D = ke(this, ro, Wr).call(this), W = ke(this, co, Ur).call(this);
  xe(this, pn, autoUpdate$2(W, this.datepicker, () => {
    computePosition$4(W, this.datepicker, D).then(({ x: V, y: F, middlewareData: Y, placement: G }) => {
      Object.assign(this.datepicker.style, {
        left: `${V}px`,
        top: `${F}px`
      });
      const K = G.split("-")[0], Q = ke(this, io, Fr).call(this, K);
      if (Y.arrow && re(this, Be)) {
        const { x: U, y: ee } = Y.arrow;
        Object.assign(re(this, Be).style, {
          left: U != null ? `${U}px` : "",
          top: ee != null ? `${ee}px` : "",
          [Q]: `${-re(this, Be).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...ke(this, so, jr).call(this, K)
        });
      }
    });
  }));
}, co = new WeakSet(), Ur = function() {
  return re(this, Wt) || xe(this, Wt, {
    getBoundingClientRect: () => {
      const { element: D } = this;
      if (D instanceof MouseEvent) {
        const { clientX: W, clientY: V } = D;
        return {
          width: 0,
          height: 0,
          top: V,
          right: W,
          bottom: V,
          left: W
        };
      }
      return D instanceof HTMLElement ? D.getBoundingClientRect() : D;
    },
    contextElement: this.element
  }), re(this, Wt);
}, ao = new WeakMap(), me(Datepicker, "NAME", "datepicker"), me(Datepicker, "CLASSNAME", "datepicker"), me(Datepicker, "CLASS_SHOW", "show"), me(Datepicker, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), me(Datepicker, "DEFAULT", {
  date: dayjs_minExports$1().format("YYYY-MM-DD"),
  format: "YYYY-MM-DD",
  showOtherMonth: !0,
  placement: "bottom-start",
  strategy: "absolute",
  trigger: "click",
  showToday: !0,
  arrow: !0
});
document.addEventListener("click", function(E) {
  var V, F;
  const R = E.target, D = (V = R.closest) == null ? void 0 : V.call(R, Datepicker.MENU_SELECTOR), W = (F = R.closest) == null ? void 0 : F.call(R, ".datepicker-calendar-bar, .datepicker-calendar-thead, .datepicker-calendar-month-table");
  D ? Datepicker.ensure(D).toggle() : W || Datepicker.clear({ event: E });
});
const handleScroll$1 = (E) => {
  var W;
  const R = document.getElementsByClassName("with-datepicker-show")[0];
  if (!R)
    return;
  const D = (W = R.closest) == null ? void 0 : W.call(R, Datepicker.MENU_SELECTOR);
  !D || !E.target.contains(D) || Datepicker.clear({ event: E });
};
window.addEventListener("scroll", handleScroll$1, !0);
const index$h = "";
function setClass(E, R, D) {
  if (D) {
    E.setAttribute("class", classes(R));
    return;
  }
  getClassList(E.getAttribute("class"), R).forEach(([W, V]) => {
    E.classList.toggle(W, V);
  });
}
function setStyle(E, R, D) {
  if (typeof R == "object")
    return Object.entries(R).forEach(([W, V]) => {
      setStyle(E, W, V);
    });
  D !== void 0 && (E.style[R] = typeof D == "number" ? `${D}px` : D);
}
function setAttr(E, R, D) {
  if (typeof R == "object")
    return Object.entries(R).forEach(([W, V]) => {
      setAttr(E, W, V);
    });
  D !== void 0 && (D === null ? E.removeAttribute(R) : E.setAttribute(R, D));
}
var bt, mn, _t, _o, jt, qn;
const nt = class extends ComponentBase {
  constructor() {
    super(...arguments);
    he(this, jt);
    he(this, bt, 0);
    he(this, mn, void 0);
    he(this, _t, void 0);
    he(this, _o, (D) => {
      const W = D.target;
      (W.closest(nt.DISMISS_SELECTOR) || this.options.backdrop === !0 && !W.closest(".modal-dialog") && W.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(nt.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", re(this, _o)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: D } = this;
      if (D) {
        const W = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const V = D.clientWidth, F = D.clientHeight;
          (!re(this, _t) || re(this, _t)[0] !== V || re(this, _t)[1] !== F) && (xe(this, _t, [V, F]), this.layout());
        });
        W.observe(D), xe(this, mn, W);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var D;
    super.destroy(), (D = re(this, mn)) == null || D.disconnect();
  }
  show(D) {
    if (this.isShown)
      return !1;
    this.setOptions(D);
    const { modalElement: W } = this, { animation: V, backdrop: F, className: Y, style: G } = this.options;
    return setClass(W, [{
      "modal-trans": V,
      "modal-no-backdrop": !F
    }, nt.CLASS_SHOW, Y]), setStyle(W, {
      zIndex: `${nt.zIndex++}`,
      ...G
    }), this.layout(), this.emit("show", this), ke(this, jt, qn).call(this, () => {
      W.classList.add(nt.CLASS_SHOWN), ke(this, jt, qn).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(nt.CLASS_SHOWN), this.emit("hide", this), ke(this, jt, qn).call(this, () => {
      this.modalElement.classList.remove(nt.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(D, W) {
    if (!this.isShown)
      return;
    const { dialog: V } = this;
    if (!V)
      return;
    W = W ?? this.options.size, setAttr(V, "data-size", null);
    const F = { width: null, height: null };
    typeof W == "object" ? (F.width = W.width, F.height = W.height) : typeof W == "string" && ["md", "sm", "lg", "full"].includes(W) ? setAttr(V, "data-size", W) : W && (F.width = W), setStyle(V, F), D = D ?? this.options.position ?? "fit";
    const Y = V.clientWidth, G = V.clientHeight;
    xe(this, _t, [Y, G]), typeof D == "function" && (D = D({ width: Y, height: G }));
    const K = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof D == "number" ? (K.alignSelf = "flex-start", K.top = D) : typeof D == "object" && D ? (K.alignSelf = "flex-start", Object.assign(K, D)) : D === "fit" ? (K.alignSelf = "flex-start", K.top = `${Math.max(0, Math.floor((window.innerHeight - G) / 3))}px`) : D === "bottom" ? K.alignSelf = "flex-end" : D === "top" ? K.alignSelf = "flex-start" : D !== "center" && typeof D == "string" && (K.alignSelf = "flex-start", K.top = D), setStyle(V, K), setStyle(this.modalElement, "justifyContent", K.left ? "flex-start" : "center");
  }
};
let Modal = nt;
bt = new WeakMap(), mn = new WeakMap(), _t = new WeakMap(), _o = new WeakMap(), jt = new WeakSet(), qn = function(D, W) {
  re(this, bt) && (clearTimeout(re(this, bt)), xe(this, bt, 0)), D && (this.options.animation ? xe(this, bt, window.setTimeout(D, W ?? this.options.transTime)) : D());
}, me(Modal, "NAME", "Modal"), me(Modal, "EVENTS", !0), me(Modal, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), me(Modal, "CLASS_SHOW", "show"), me(Modal, "CLASS_SHOWN", "in"), me(Modal, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), me(Modal, "zIndex", 2e3);
window.addEventListener("resize", () => {
  Modal.all.forEach((E) => {
    const R = E;
    R.isShown && R.options.responsive && R.layout();
  });
});
var n$5, l$6, u$5, i$1, t$5, o$c, f$5 = {}, e$5 = [], c$5 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$5(E, R) {
  for (var D in R)
    E[D] = R[D];
  return E;
}
function a$5(E) {
  var R = E.parentNode;
  R && R.removeChild(E);
}
function h$2(E, R, D) {
  var W, V, F, Y = {};
  for (F in R)
    F == "key" ? W = R[F] : F == "ref" ? V = R[F] : Y[F] = R[F];
  if (arguments.length > 2 && (Y.children = arguments.length > 3 ? n$5.call(arguments, 2) : D), typeof E == "function" && E.defaultProps != null)
    for (F in E.defaultProps)
      Y[F] === void 0 && (Y[F] = E.defaultProps[F]);
  return v$5(E, Y, W, V, null);
}
function v$5(E, R, D, W, V) {
  var F = { type: E, props: R, key: D, ref: W, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: V ?? ++u$5 };
  return V == null && l$6.vnode != null && l$6.vnode(F), F;
}
function y$3() {
  return { current: null };
}
function p$5(E) {
  return E.children;
}
function d$5(E, R) {
  this.props = E, this.context = R;
}
function _$c(E, R) {
  if (R == null)
    return E.__ ? _$c(E.__, E.__.__k.indexOf(E) + 1) : null;
  for (var D; R < E.__k.length; R++)
    if ((D = E.__k[R]) != null && D.__e != null)
      return D.__e;
  return typeof E.type == "function" ? _$c(E) : null;
}
function k$5(E) {
  var R, D;
  if ((E = E.__) != null && E.__c != null) {
    for (E.__e = E.__c.base = null, R = 0; R < E.__k.length; R++)
      if ((D = E.__k[R]) != null && D.__e != null) {
        E.__e = E.__c.base = D.__e;
        break;
      }
    return k$5(E);
  }
}
function b$5(E) {
  (!E.__d && (E.__d = !0) && t$5.push(E) && !g$5.__r++ || o$c !== l$6.debounceRendering) && ((o$c = l$6.debounceRendering) || setTimeout)(g$5);
}
function g$5() {
  for (var E; g$5.__r = t$5.length; )
    E = t$5.sort(function(R, D) {
      return R.__v.__b - D.__v.__b;
    }), t$5 = [], E.some(function(R) {
      var D, W, V, F, Y, G;
      R.__d && (Y = (F = (D = R).__v).__e, (G = D.__P) && (W = [], (V = s$5({}, F)).__v = F.__v + 1, j$5(G, F, V, D.__n, G.ownerSVGElement !== void 0, F.__h != null ? [Y] : null, W, Y ?? _$c(F), F.__h), z$5(W, F), F.__e != Y && k$5(F)));
    });
}
function w$5(E, R, D, W, V, F, Y, G, K, Q) {
  var U, ee, J, X, Z, ie, te, ne = W && W.__k || e$5, oe = ne.length;
  for (D.__k = [], U = 0; U < R.length; U++)
    if ((X = D.__k[U] = (X = R[U]) == null || typeof X == "boolean" ? null : typeof X == "string" || typeof X == "number" || typeof X == "bigint" ? v$5(null, X, null, null, X) : Array.isArray(X) ? v$5(p$5, { children: X }, null, null, null) : X.__b > 0 ? v$5(X.type, X.props, X.key, X.ref ? X.ref : null, X.__v) : X) != null) {
      if (X.__ = D, X.__b = D.__b + 1, (J = ne[U]) === null || J && X.key == J.key && X.type === J.type)
        ne[U] = void 0;
      else
        for (ee = 0; ee < oe; ee++) {
          if ((J = ne[ee]) && X.key == J.key && X.type === J.type) {
            ne[ee] = void 0;
            break;
          }
          J = null;
        }
      j$5(E, X, J = J || f$5, V, F, Y, G, K, Q), Z = X.__e, (ee = X.ref) && J.ref != ee && (te || (te = []), J.ref && te.push(J.ref, null, X), te.push(ee, X.__c || Z, X)), Z != null ? (ie == null && (ie = Z), typeof X.type == "function" && X.__k === J.__k ? X.__d = K = m$5(X, K, E) : K = A$5(E, X, J, ne, Z, K), typeof D.type == "function" && (D.__d = K)) : K && J.__e == K && K.parentNode != E && (K = _$c(J));
    }
  for (D.__e = ie, U = oe; U--; )
    ne[U] != null && N$5(ne[U], ne[U]);
  if (te)
    for (U = 0; U < te.length; U++)
      M$5(te[U], te[++U], te[++U]);
}
function m$5(E, R, D) {
  for (var W, V = E.__k, F = 0; V && F < V.length; F++)
    (W = V[F]) && (W.__ = E, R = typeof W.type == "function" ? m$5(W, R, D) : A$5(D, W, W, V, W.__e, R));
  return R;
}
function A$5(E, R, D, W, V, F) {
  var Y, G, K;
  if (R.__d !== void 0)
    Y = R.__d, R.__d = void 0;
  else if (D == null || V != F || V.parentNode == null)
    e:
      if (F == null || F.parentNode !== E)
        E.appendChild(V), Y = null;
      else {
        for (G = F, K = 0; (G = G.nextSibling) && K < W.length; K += 2)
          if (G == V)
            break e;
        E.insertBefore(V, F), Y = F;
      }
  return Y !== void 0 ? Y : V.nextSibling;
}
function C$5(E, R, D, W, V) {
  var F;
  for (F in D)
    F === "children" || F === "key" || F in R || H$5(E, F, null, D[F], W);
  for (F in R)
    V && typeof R[F] != "function" || F === "children" || F === "key" || F === "value" || F === "checked" || D[F] === R[F] || H$5(E, F, R[F], D[F], W);
}
function $$5(E, R, D) {
  R[0] === "-" ? E.setProperty(R, D) : E[R] = D == null ? "" : typeof D != "number" || c$5.test(R) ? D : D + "px";
}
function H$5(E, R, D, W, V) {
  var F;
  e:
    if (R === "style")
      if (typeof D == "string")
        E.style.cssText = D;
      else {
        if (typeof W == "string" && (E.style.cssText = W = ""), W)
          for (R in W)
            D && R in D || $$5(E.style, R, "");
        if (D)
          for (R in D)
            W && D[R] === W[R] || $$5(E.style, R, D[R]);
      }
    else if (R[0] === "o" && R[1] === "n")
      F = R !== (R = R.replace(/Capture$/, "")), R = R.toLowerCase() in E ? R.toLowerCase().slice(2) : R.slice(2), E.l || (E.l = {}), E.l[R + F] = D, D ? W || E.addEventListener(R, F ? T$5 : I$5, F) : E.removeEventListener(R, F ? T$5 : I$5, F);
    else if (R !== "dangerouslySetInnerHTML") {
      if (V)
        R = R.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (R !== "href" && R !== "list" && R !== "form" && R !== "tabIndex" && R !== "download" && R in E)
        try {
          E[R] = D ?? "";
          break e;
        } catch {
        }
      typeof D == "function" || (D == null || D === !1 && R.indexOf("-") == -1 ? E.removeAttribute(R) : E.setAttribute(R, D));
    }
}
function I$5(E) {
  this.l[E.type + !1](l$6.event ? l$6.event(E) : E);
}
function T$5(E) {
  this.l[E.type + !0](l$6.event ? l$6.event(E) : E);
}
function j$5(E, R, D, W, V, F, Y, G, K) {
  var Q, U, ee, J, X, Z, ie, te, ne, oe, le, ce, ue, pe, de, se = R.type;
  if (R.constructor !== void 0)
    return null;
  D.__h != null && (K = D.__h, G = R.__e = D.__e, R.__h = null, F = [G]), (Q = l$6.__b) && Q(R);
  try {
    e:
      if (typeof se == "function") {
        if (te = R.props, ne = (Q = se.contextType) && W[Q.__c], oe = Q ? ne ? ne.props.value : Q.__ : W, D.__c ? ie = (U = R.__c = D.__c).__ = U.__E : ("prototype" in se && se.prototype.render ? R.__c = U = new se(te, oe) : (R.__c = U = new d$5(te, oe), U.constructor = se, U.render = O$5), ne && ne.sub(U), U.props = te, U.state || (U.state = {}), U.context = oe, U.__n = W, ee = U.__d = !0, U.__h = [], U._sb = []), U.__s == null && (U.__s = U.state), se.getDerivedStateFromProps != null && (U.__s == U.state && (U.__s = s$5({}, U.__s)), s$5(U.__s, se.getDerivedStateFromProps(te, U.__s))), J = U.props, X = U.state, ee)
          se.getDerivedStateFromProps == null && U.componentWillMount != null && U.componentWillMount(), U.componentDidMount != null && U.__h.push(U.componentDidMount);
        else {
          if (se.getDerivedStateFromProps == null && te !== J && U.componentWillReceiveProps != null && U.componentWillReceiveProps(te, oe), !U.__e && U.shouldComponentUpdate != null && U.shouldComponentUpdate(te, U.__s, oe) === !1 || R.__v === D.__v) {
            for (U.props = te, U.state = U.__s, R.__v !== D.__v && (U.__d = !1), U.__v = R, R.__e = D.__e, R.__k = D.__k, R.__k.forEach(function(ae) {
              ae && (ae.__ = R);
            }), le = 0; le < U._sb.length; le++)
              U.__h.push(U._sb[le]);
            U._sb = [], U.__h.length && Y.push(U);
            break e;
          }
          U.componentWillUpdate != null && U.componentWillUpdate(te, U.__s, oe), U.componentDidUpdate != null && U.__h.push(function() {
            U.componentDidUpdate(J, X, Z);
          });
        }
        if (U.context = oe, U.props = te, U.__v = R, U.__P = E, ce = l$6.__r, ue = 0, "prototype" in se && se.prototype.render) {
          for (U.state = U.__s, U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), pe = 0; pe < U._sb.length; pe++)
            U.__h.push(U._sb[pe]);
          U._sb = [];
        } else
          do
            U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), U.state = U.__s;
          while (U.__d && ++ue < 25);
        U.state = U.__s, U.getChildContext != null && (W = s$5(s$5({}, W), U.getChildContext())), ee || U.getSnapshotBeforeUpdate == null || (Z = U.getSnapshotBeforeUpdate(J, X)), de = Q != null && Q.type === p$5 && Q.key == null ? Q.props.children : Q, w$5(E, Array.isArray(de) ? de : [de], R, D, W, V, F, Y, G, K), U.base = R.__e, R.__h = null, U.__h.length && Y.push(U), ie && (U.__E = U.__ = null), U.__e = !1;
      } else
        F == null && R.__v === D.__v ? (R.__k = D.__k, R.__e = D.__e) : R.__e = L$5(D.__e, R, D, W, V, F, Y, K);
    (Q = l$6.diffed) && Q(R);
  } catch (ae) {
    R.__v = null, (K || F != null) && (R.__e = G, R.__h = !!K, F[F.indexOf(G)] = null), l$6.__e(ae, R, D);
  }
}
function z$5(E, R) {
  l$6.__c && l$6.__c(R, E), E.some(function(D) {
    try {
      E = D.__h, D.__h = [], E.some(function(W) {
        W.call(D);
      });
    } catch (W) {
      l$6.__e(W, D.__v);
    }
  });
}
function L$5(E, R, D, W, V, F, Y, G) {
  var K, Q, U, ee = D.props, J = R.props, X = R.type, Z = 0;
  if (X === "svg" && (V = !0), F != null) {
    for (; Z < F.length; Z++)
      if ((K = F[Z]) && "setAttribute" in K == !!X && (X ? K.localName === X : K.nodeType === 3)) {
        E = K, F[Z] = null;
        break;
      }
  }
  if (E == null) {
    if (X === null)
      return document.createTextNode(J);
    E = V ? document.createElementNS("http://www.w3.org/2000/svg", X) : document.createElement(X, J.is && J), F = null, G = !1;
  }
  if (X === null)
    ee === J || G && E.data === J || (E.data = J);
  else {
    if (F = F && n$5.call(E.childNodes), Q = (ee = D.props || f$5).dangerouslySetInnerHTML, U = J.dangerouslySetInnerHTML, !G) {
      if (F != null)
        for (ee = {}, Z = 0; Z < E.attributes.length; Z++)
          ee[E.attributes[Z].name] = E.attributes[Z].value;
      (U || Q) && (U && (Q && U.__html == Q.__html || U.__html === E.innerHTML) || (E.innerHTML = U && U.__html || ""));
    }
    if (C$5(E, J, ee, V, G), U)
      R.__k = [];
    else if (Z = R.props.children, w$5(E, Array.isArray(Z) ? Z : [Z], R, D, W, V && X !== "foreignObject", F, Y, F ? F[0] : D.__k && _$c(D, 0), G), F != null)
      for (Z = F.length; Z--; )
        F[Z] != null && a$5(F[Z]);
    G || ("value" in J && (Z = J.value) !== void 0 && (Z !== E.value || X === "progress" && !Z || X === "option" && Z !== ee.value) && H$5(E, "value", Z, ee.value, !1), "checked" in J && (Z = J.checked) !== void 0 && Z !== E.checked && H$5(E, "checked", Z, ee.checked, !1));
  }
  return E;
}
function M$5(E, R, D) {
  try {
    typeof E == "function" ? E(R) : E.current = R;
  } catch (W) {
    l$6.__e(W, D);
  }
}
function N$5(E, R, D) {
  var W, V;
  if (l$6.unmount && l$6.unmount(E), (W = E.ref) && (W.current && W.current !== E.__e || M$5(W, null, R)), (W = E.__c) != null) {
    if (W.componentWillUnmount)
      try {
        W.componentWillUnmount();
      } catch (F) {
        l$6.__e(F, R);
      }
    W.base = W.__P = null, E.__c = void 0;
  }
  if (W = E.__k)
    for (V = 0; V < W.length; V++)
      W[V] && N$5(W[V], R, D || typeof E.type != "function");
  D || E.__e == null || a$5(E.__e), E.__ = E.__e = E.__d = void 0;
}
function O$5(E, R, D) {
  return this.constructor(E, D);
}
function P$1(E, R, D) {
  var W, V, F;
  l$6.__ && l$6.__(E, R), V = (W = typeof D == "function") ? null : D && D.__k || R.__k, F = [], j$5(R, E = (!W && D || R).__k = h$2(p$5, null, [E]), V || f$5, f$5, R.ownerSVGElement !== void 0, !W && D ? [D] : V ? null : R.firstChild ? n$5.call(R.childNodes) : null, F, !W && D ? D : V ? V.__e : R.firstChild, W), z$5(F, E);
}
n$5 = e$5.slice, l$6 = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} }, u$5 = 0, i$1 = function(E) {
  return E != null && E.constructor === void 0;
}, d$5.prototype.setState = function(E, R) {
  var D;
  D = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s$5({}, this.state), typeof E == "function" && (E = E(s$5({}, D), this.props)), E && s$5(D, E), E != null && this.__v && (R && this._sb.push(R), b$5(this));
}, d$5.prototype.forceUpdate = function(E) {
  this.__v && (this.__e = !0, E && this.__h.push(E), b$5(this));
}, d$5.prototype.render = p$5, t$5 = [], g$5.__r = 0;
var _$b = 0;
function o$b(E, R, D, W, V) {
  var F, Y, G = {};
  for (Y in R)
    Y == "ref" ? F = R[Y] : G[Y] = R[Y];
  var K = { type: E, props: G, key: D, ref: F, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_$b, __source: V, __self: W };
  if (typeof E == "function" && (F = E.defaultProps))
    for (Y in F)
      G[Y] === void 0 && (G[Y] = F[Y]);
  return l$6.vnode && l$6.vnode(K), K;
}
let nanoid$2 = (E = 21) => crypto.getRandomValues(new Uint8Array(E)).reduce((R, D) => (D &= 63, D < 36 ? R += D.toString(36) : D < 62 ? R += (D - 26).toString(36).toUpperCase() : D > 62 ? R += "-" : R += "_", R), "");
class ModalDialog extends d$5 {
  componentDidMount() {
    var R;
    (R = this.props.afterRender) == null || R.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var R;
    (R = this.props.afterRender) == null || R.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var R;
    (R = this.props.beforeDestroy) == null || R.call(this);
  }
  renderHeader() {
    const {
      header: R,
      title: D
    } = this.props;
    return i$1(R) ? R : R === !1 || !D ? null : /* @__PURE__ */ o$b("div", { className: "modal-header", children: /* @__PURE__ */ o$b("div", { className: "modal-title", children: D }) });
  }
  renderActions() {
    const {
      actions: R,
      closeBtn: D
    } = this.props;
    return !D && !R ? null : i$1(R) ? R : /* @__PURE__ */ o$b("div", { className: "modal-actions", children: [
      R ? /* @__PURE__ */ o$b(Toolbar$1, { ...R }) : null,
      D ? /* @__PURE__ */ o$b("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ o$b("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: R
    } = this.props;
    return R ? i$1(R) ? R : /* @__PURE__ */ o$b("div", { className: "modal-body", children: R }) : null;
  }
  renderFooter() {
    const {
      footer: R,
      footerActions: D
    } = this.props;
    return i$1(R) ? R : R === !1 || !D ? null : /* @__PURE__ */ o$b("div", { className: "modal-footer", children: D ? /* @__PURE__ */ o$b(Toolbar$1, { ...D }) : null });
  }
  render() {
    const {
      className: R,
      style: D,
      children: W
    } = this.props;
    return /* @__PURE__ */ o$b("div", { className: classes("modal-dialog", R), style: D, children: /* @__PURE__ */ o$b("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      W,
      this.renderFooter()
    ] }) });
  }
}
me(ModalDialog, "defaultProps", { closeBtn: !0 });
var gn, Bt, yn;
class ModalIframeContent extends d$5 {
  constructor() {
    super(...arguments);
    he(this, gn, y$3());
    he(this, Bt, void 0);
    me(this, "state", {});
    he(this, yn, () => {
      var V, F;
      const D = (F = (V = re(this, gn).current) == null ? void 0 : V.contentWindow) == null ? void 0 : F.document;
      if (!D)
        return;
      let W = re(this, Bt);
      W == null || W.disconnect(), W = new ResizeObserver(() => {
        const Y = D.body, G = D.documentElement, K = Math.ceil(Math.max(Y.scrollHeight, Y.offsetHeight, G.offsetHeight));
        this.setState({ height: K });
      }), W.observe(D.body), W.observe(D.documentElement), xe(this, Bt, W);
    });
  }
  componentDidMount() {
    re(this, yn).call(this);
  }
  componentWillUnmount() {
    var D;
    (D = re(this, Bt)) == null || D.disconnect();
  }
  render() {
    const { url: D } = this.props;
    return /* @__PURE__ */ o$b(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: D,
        ref: re(this, gn),
        onLoad: re(this, yn)
      }
    );
  }
}
gn = new WeakMap(), Bt = new WeakMap(), yn = new WeakMap();
function buildCustomModal(E, R) {
  const { custom: D, title: W, content: V } = R;
  return {
    body: V,
    title: W,
    ...typeof D == "function" ? D() : D
  };
}
async function buildAjaxModal(E, R) {
  const { dataType: D, url: W, request: V, custom: F, title: Y } = R, K = await (await fetch(W, V)).text();
  if (D !== "html")
    try {
      const Q = JSON.parse(K);
      return {
        title: Y,
        ...F,
        ...Q
      };
    } catch {
    }
  return R.replace !== !1 && D === "html" ? [K] : {
    title: Y,
    ...F,
    body: D === "html" ? /* @__PURE__ */ o$b("div", { className: "modal-body", dangerouslySetInnerHTML: { __html: K } }) : K
  };
}
async function buildIframeModal(E, R) {
  const { url: D, custom: W, title: V } = R;
  return {
    title: V,
    ...W,
    body: /* @__PURE__ */ o$b(ModalIframeContent, { url: D })
  };
}
const builders = {
  custom: buildCustomModal,
  ajax: buildAjaxModal,
  iframe: buildIframeModal
};
var vn, bn, Qe, Ut, Xn, uo, zr, wn, $r;
const sn = class extends Modal {
  constructor() {
    super(...arguments);
    he(this, Ut);
    he(this, uo);
    he(this, wn);
    he(this, vn, void 0);
    he(this, bn, void 0);
    he(this, Qe, void 0);
  }
  get id() {
    return re(this, bn);
  }
  get loading() {
    return this.modalElement.classList.contains(sn.LOADING_CLASS);
  }
  get modalElement() {
    let D = re(this, vn);
    if (!D) {
      const { id: W } = this;
      D = this.element.querySelector(`#${W}`), D || (D = document.createElement("div"), setAttr(D, {
        id: W,
        style: this.options.style
      }), setClass(D, ["modal modal-async", this.options.className]), this.element.appendChild(D)), xe(this, vn, D);
    }
    return D;
  }
  afterInit() {
    super.afterInit(), xe(this, bn, this.options.id || `modal-${nanoid$2()}`);
  }
  show(D) {
    return super.show(D) ? (this.buildDialog(), !0) : !1;
  }
  render(D) {
    super.render(D), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    re(this, Qe) && clearTimeout(re(this, Qe));
    const { modalElement: D, options: W } = this, { type: V, loadTimeout: F } = W, Y = builders[V];
    if (!Y)
      return console.warn(`Modal: Cannot build modal with type "${V}"`), !1;
    D.classList.add(sn.LOADING_CLASS), await ke(this, uo, zr).call(this), F && xe(this, Qe, window.setTimeout(() => {
      xe(this, Qe, 0), ke(this, wn, $r).call(this, this.options.timeoutTip);
    }, F));
    const G = await Y(D, W);
    return G === !1 ? await ke(this, wn, $r).call(this, this.options.failedTip) : G && typeof G == "object" && await ke(this, Ut, Xn).call(this, G), re(this, Qe) && (clearTimeout(re(this, Qe)), xe(this, Qe, 0)), D.classList.remove(sn.LOADING_CLASS), !0;
  }
};
let ModalBuilder = sn;
vn = new WeakMap(), bn = new WeakMap(), Qe = new WeakMap(), Ut = new WeakSet(), Xn = function(D) {
  return new Promise((W) => {
    if (Array.isArray(D))
      return this.modalElement.innerHTML = D[0], W();
    const { afterRender: V, ...F } = D;
    D = {
      afterRender: (Y) => {
        this.layout(), V == null || V(Y), W();
      },
      ...F
    }, P$1(
      /* @__PURE__ */ o$b(ModalDialog, { ...D }),
      this.modalElement
    );
  });
}, uo = new WeakSet(), zr = function() {
  const { loadingText: D } = this.options;
  return ke(this, Ut, Xn).call(this, {
    body: /* @__PURE__ */ o$b("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ o$b("span", { className: "spinner" }),
      D ? /* @__PURE__ */ o$b("span", { className: "modal-loading-text", children: D }) : null
    ] })
  });
}, wn = new WeakSet(), $r = function(D) {
  if (D)
    return ke(this, Ut, Xn).call(this, {
      body: /* @__PURE__ */ o$b("div", { className: "modal-load-failed", children: D })
    });
}, me(ModalBuilder, "LOADING_CLASS", "loading"), me(ModalBuilder, "DEFAULT", {
  ...Modal.DEFAULT,
  loadTimeout: 1e4
});
var ut, fo, Vr, ho, Yr, po, Gr;
class ModalTrigger extends ComponentBase {
  constructor() {
    super(...arguments);
    he(this, fo);
    he(this, ho);
    he(this, po);
    he(this, ut, void 0);
  }
  get modal() {
    return re(this, ut);
  }
  get container() {
    const { container: D } = this.options;
    return typeof D == "string" ? document.querySelector(D) : D instanceof HTMLElement ? D : document.body;
  }
  show() {
    return ke(this, ho, Yr).call(this).show();
  }
  hide() {
    var D;
    (D = re(this, ut)) == null || D.hide();
  }
}
ut = new WeakMap(), fo = new WeakSet(), Vr = function() {
  const {
    container: D,
    ...W
  } = this.options, V = W, F = this.element.getAttribute("href") || "";
  return V.type || (V.target || F[0] === "#" ? V.type = "static" : V.type = V.type || (V.url ? "iframe" : "custom")), !V.url && (V.type === "iframe" || V.type === "ajax") && F[0] !== "#" && (V.url = F), V;
}, ho = new WeakSet(), Yr = function() {
  const D = ke(this, fo, Vr).call(this);
  let W = re(this, ut);
  return W ? W.setOptions(D) : D.type === "static" ? (W = new Modal(ke(this, po, Gr).call(this), D), xe(this, ut, W)) : (W = new ModalBuilder(this.container, D), xe(this, ut, W)), W;
}, po = new WeakSet(), Gr = function() {
  let D = this.options.target;
  if (!D) {
    const { element: W } = this;
    if (W.tagName === "A") {
      const V = W.getAttribute("href");
      V != null && V.startsWith("#") && (D = V);
    }
  }
  return this.container.querySelector(D || ".modal");
}, me(ModalTrigger, "NAME", "ModalTrigger"), me(ModalTrigger, "EVENTS", !0), me(ModalTrigger, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (E) => {
  var W;
  const R = E.target, D = (W = R.closest) == null ? void 0 : W.call(R, ModalTrigger.TOGGLE_SELECTOR);
  if (D) {
    const V = ModalTrigger.ensure(D);
    V && V.show(), console.log("> modalTrigger", V);
  }
});
const index$g = "";
var dr;
let Nav$1 = (dr = class extends ActionMenu$1 {
  beforeRender() {
    const R = super.beforeRender();
    return R.className = classes(R.className, R.type ? `nav-${R.type}` : "", {
      "nav-stacked": R.stacked
    }), R;
  }
}, me(dr, "NAME", "nav"), dr);
class Nav extends ComponentFromReact {
}
me(Nav, "NAME", "nav"), me(Nav, "Component", Nav$1);
var l$5;
l$5 = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} };
const index$f = "";
var _$a = 0;
function o$a(E, R, D, W, V) {
  var F, Y, G = {};
  for (Y in R)
    Y == "ref" ? F = R[Y] : G[Y] = R[Y];
  var K = { type: E, props: G, key: D, ref: F, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_$a, __source: V, __self: W };
  if (typeof E == "function" && (F = E.defaultProps))
    for (Y in F)
      G[Y] === void 0 && (G[Y] = F[Y]);
  return l$5.vnode && l$5.vnode(K), K;
}
function updatePagerInfo(E, R) {
  const D = E.pageTotal || Math.ceil(E.recTotal / E.recPerPage);
  return typeof R == "string" && (R === "first" ? R = 1 : R === "last" ? R = D : R === "prev" ? R = E.page - 1 : R === "next" ? R = E.page + 1 : R === "current" ? R = E.page : R = Number.parseInt(R, 10)), R = R !== void 0 ? Math.max(1, Math.min(R < 0 ? D + R : R, D)) : E.page, {
    ...E,
    pageTotal: D,
    page: R
  };
}
function PagerLink({
  key: E,
  type: R,
  btnType: D,
  page: W,
  format: V,
  pagerInfo: F,
  linkCreator: Y,
  ...G
}) {
  const K = updatePagerInfo(F, W);
  return G.text === void 0 && !G.icon && V && (G.text = typeof V == "function" ? V(K) : formatString(V, K)), G.url === void 0 && Y && (G.url = typeof Y == "function" ? Y(K) : formatString(Y, K)), G.disabled === void 0 && (G.disabled = W !== void 0 && K.page === F.page), /* @__PURE__ */ o$a(Button$1, { type: D, ...G });
}
const TIME_DAY = 24 * 60 * 60 * 1e3, createDate = (E) => E ? (E instanceof Date || (typeof E == "string" && (E = E.trim(), /^\d+$/.test(E) && (E = Number.parseInt(E, 10))), typeof E == "number" && E < 1e10 && (E *= 1e3), E = new Date(E)), E) : new Date(), isSameDay = (E, R = new Date()) => (E = createDate(E), R = createDate(R), E.getFullYear() === R.getFullYear() && E.getMonth() === R.getMonth() && E.getDate() === R.getDate()), isSameYear = (E, R = new Date()) => createDate(E).getFullYear() === createDate(R).getFullYear(), isSameMonth = (E, R = new Date()) => (E = createDate(E), R = createDate(R), E.getFullYear() === R.getFullYear() && E.getMonth() === R.getMonth()), isSameWeek = (E, R = new Date()) => {
  E = createDate(E), R = createDate(R);
  const D = 1e3 * 60 * 60 * 24, W = Math.floor(E.getTime() / D), V = Math.floor(R.getTime() / D);
  return Math.floor((W + 4) / 7) === Math.floor((V + 4) / 7);
}, isToday = (E, R) => isSameDay(createDate(R), E), isYesterday = (E, R) => isSameDay(createDate(R).getTime() - TIME_DAY, E), isTomorrow = (E, R) => isSameDay(createDate(R).getTime() + TIME_DAY, E), isDBY = (E, R) => isSameDay(createDate(R).getTime() - 2 * TIME_DAY, E), formatDate = (E, R = "yyyy-MM-dd hh:mm") => {
  E = createDate(E);
  const D = {
    "M+": E.getMonth() + 1,
    "d+": E.getDate(),
    "h+": E.getHours(),
    "H+": E.getHours() % 12,
    "m+": E.getMinutes(),
    "s+": E.getSeconds(),
    "S+": E.getMilliseconds()
  };
  return /(y+)/i.test(R) && (R = R.replace(RegExp.$1, `${E.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(D).forEach((W) => {
    if (new RegExp(`(${W})`).test(R)) {
      const V = `${D[W]}`;
      R = R.replace(RegExp.$1, RegExp.$1.length === 1 ? V : `00${V}`.substring(V.length));
    }
  }), R;
}, formatDateSpan = (E, R, D) => {
  const W = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...D
  }, V = formatDate(E, isSameYear(E) ? W.month : W.full);
  if (isSameDay(E, R))
    return V;
  const F = formatDate(R, isSameYear(E, R) ? isSameMonth(E, R) ? W.day : W.month : W.full);
  return W.str.replace("{0}", V).replace("{1}", F);
}, getTimeBeforeDesc = (E) => {
  const R = new Date().getTime();
  switch (E) {
    case "oneWeek":
      return R - TIME_DAY * 7;
    case "oneMonth":
      return R - TIME_DAY * 31;
    case "threeMonth":
      return R - TIME_DAY * 31 * 3;
    case "halfYear":
      return R - TIME_DAY * 183;
    case "oneYear":
      return R - TIME_DAY * 365;
    case "twoYear":
      return R - 2 * (TIME_DAY * 365);
    default:
      return 0;
  }
}, calculateTimestamp = (E, R, D = !0, W = Date.now()) => {
  switch (R) {
    case "year":
      return E *= 365, calculateTimestamp(E, "day", D, W);
    case "quarter":
      E *= 3;
    case "month":
      return E *= 30, calculateTimestamp(E, "day", D, W);
    case "week":
      E *= 7;
    case "day":
      E *= 24;
    case "hour":
      E *= 60;
    case "minute":
      E *= 6e4;
      break;
    default:
      E = 0;
  }
  return D ? W + E : W - E;
};
function PagerInfoItem({
  key: E,
  type: R,
  page: D,
  text: W = "",
  pagerInfo: V,
  children: F,
  ...Y
}) {
  const G = updatePagerInfo(V, D);
  return W = typeof W == "function" ? W(G) : formatString(W, G), /* @__PURE__ */ o$a(ActionBasic, { ...Y, children: [
    F,
    W
  ] });
}
function PagerNav({
  key: E,
  type: R,
  btnType: D,
  count: W = 12,
  pagerInfo: V,
  onClick: F,
  linkCreator: Y,
  ...G
}) {
  if (!V.pageTotal)
    return;
  const K = { ...G, square: !0 }, Q = () => (K.text = "", K.icon = "icon-ellipsis-h", K.disabled = !0, /* @__PURE__ */ o$a(Button$1, { type: D, ...K })), U = (J, X) => {
    const Z = [];
    for (let ie = J; ie <= X; ie++) {
      K.text = ie, delete K.icon, K.disabled = !1;
      const te = updatePagerInfo(V, ie);
      Y && (K.url = typeof Y == "function" ? Y(te) : formatString(Y, te)), Z.push(/* @__PURE__ */ o$a(Button$1, { type: D, ...K, onClick: F }));
    }
    return Z;
  };
  let ee = [];
  return ee = [...U(1, 1)], V.pageTotal <= 1 || (V.pageTotal <= W ? ee = [...ee, ...U(2, V.pageTotal)] : V.page < W - 2 ? ee = [...ee, ...U(2, W - 2), Q(), ...U(V.pageTotal, V.pageTotal)] : V.page > V.pageTotal - W + 3 ? ee = [...ee, Q(), ...U(V.pageTotal - W + 3, V.pageTotal)] : ee = [...ee, Q(), ...U(V.page - Math.ceil((W - 4) / 2), V.page + Math.floor((W - 4) / 2)), Q(), ...U(V.pageTotal, V.pageTotal)]), ee;
}
function PagerSizeMenu({
  type: E,
  pagerInfo: R,
  linkCreator: D,
  items: W = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: V = {},
  ...F
}) {
  var G;
  V.items = V.items ?? W.map((K) => {
    const Q = { ...R, recPerPage: K };
    return {
      text: `${K}`,
      url: typeof D == "function" ? D(Q) : formatString(D, Q)
    };
  });
  const { text: Y = "" } = F;
  return F.text = typeof Y == "function" ? Y(R) : formatString(Y, R), V.menu = { ...V.menu, className: classes((G = V.menu) == null ? void 0 : G.className, "pager-size-menu") }, /* @__PURE__ */ o$a(ToolbarDropdown, { type: "dropdown", dropdown: V, ...F });
}
function PagerGoto({
  key: E,
  page: R,
  type: D,
  btnType: W,
  pagerInfo: V,
  size: F,
  onClick: Y,
  onChange: G,
  linkCreator: K,
  ...Q
}) {
  const U = { ...Q };
  let ee;
  const J = (ie) => {
    var te;
    ee = Number((te = ie.target) == null ? void 0 : te.value) || 1, ee = ee > V.pageTotal ? V.pageTotal : ee;
  }, X = (ie) => {
    if (!(ie != null && ie.target))
      return;
    ee = ee <= V.pageTotal ? ee : V.pageTotal;
    const te = updatePagerInfo(V, ee);
    G && !G({ info: te, event: ie }) || (ie.target.href = U.url = typeof K == "function" ? K(te) : formatString(K, te));
  }, Z = updatePagerInfo(V, R || 0);
  return U.url = typeof K == "function" ? K(Z) : formatString(K, Z), U.className = classes("input-group-addon", U.className), /* @__PURE__ */ o$a("div", { className: classes("input-group", "pager-goto-group", F ? `size-${F}` : ""), children: [
    /* @__PURE__ */ o$a("input", { type: "number", class: "form-control", max: V.pageTotal, min: "1", onInput: J }),
    /* @__PURE__ */ o$a(Button$1, { type: W, ...U, onClick: X })
  ] });
}
var nn;
let Pager$1 = (nn = class extends Toolbar$1 {
  get pagerInfo() {
    const { page: R = 1, recTotal: D = 0, recPerPage: W = 10 } = this.props;
    return { page: R, recTotal: D, recPerPage: W, pageTotal: W ? Math.ceil(D / W) : 0 };
  }
  isBtnItem(R) {
    return R === "link" || R === "nav" || R === "size-menu" || R === "goto" || super.isBtnItem(R);
  }
  getItemRenderProps(R, D, W) {
    const V = super.getItemRenderProps(R, D, W), F = D.type || "item";
    return F === "info" ? Object.assign(V, { pagerInfo: this.pagerInfo }) : (F === "link" || F === "size-menu" || F === "nav" || F === "goto") && Object.assign(V, { pagerInfo: this.pagerInfo, linkCreator: R.linkCreator }), V;
  }
}, me(nn, "NAME", "pager"), me(nn, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), me(nn, "ItemComponents", {
  ...Toolbar$1.ItemComponents,
  link: PagerLink,
  info: PagerInfoItem,
  nav: PagerNav,
  "size-menu": PagerSizeMenu,
  goto: PagerGoto
}), nn);
class Pager extends ComponentFromReact {
}
me(Pager, "NAME", "pager"), me(Pager, "Component", Pager$1);
const vars$2 = "", panel = "", theme = "", index$e = "";
var n$4, l$4, u$4, t$4, o$9, f$4 = {}, e$4 = [], c$4 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$4(E, R) {
  for (var D in R)
    E[D] = R[D];
  return E;
}
function a$4(E) {
  var R = E.parentNode;
  R && R.removeChild(E);
}
function v$4(E, R, D, W, V) {
  var F = { type: E, props: R, key: D, ref: W, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: V ?? ++u$4 };
  return V == null && l$4.vnode != null && l$4.vnode(F), F;
}
function y$2() {
  return { current: null };
}
function p$4(E) {
  return E.children;
}
function d$4(E, R) {
  this.props = E, this.context = R;
}
function _$9(E, R) {
  if (R == null)
    return E.__ ? _$9(E.__, E.__.__k.indexOf(E) + 1) : null;
  for (var D; R < E.__k.length; R++)
    if ((D = E.__k[R]) != null && D.__e != null)
      return D.__e;
  return typeof E.type == "function" ? _$9(E) : null;
}
function k$4(E) {
  var R, D;
  if ((E = E.__) != null && E.__c != null) {
    for (E.__e = E.__c.base = null, R = 0; R < E.__k.length; R++)
      if ((D = E.__k[R]) != null && D.__e != null) {
        E.__e = E.__c.base = D.__e;
        break;
      }
    return k$4(E);
  }
}
function b$4(E) {
  (!E.__d && (E.__d = !0) && t$4.push(E) && !g$4.__r++ || o$9 !== l$4.debounceRendering) && ((o$9 = l$4.debounceRendering) || setTimeout)(g$4);
}
function g$4() {
  for (var E; g$4.__r = t$4.length; )
    E = t$4.sort(function(R, D) {
      return R.__v.__b - D.__v.__b;
    }), t$4 = [], E.some(function(R) {
      var D, W, V, F, Y, G;
      R.__d && (Y = (F = (D = R).__v).__e, (G = D.__P) && (W = [], (V = s$4({}, F)).__v = F.__v + 1, j$4(G, F, V, D.__n, G.ownerSVGElement !== void 0, F.__h != null ? [Y] : null, W, Y ?? _$9(F), F.__h), z$4(W, F), F.__e != Y && k$4(F)));
    });
}
function w$4(E, R, D, W, V, F, Y, G, K, Q) {
  var U, ee, J, X, Z, ie, te, ne = W && W.__k || e$4, oe = ne.length;
  for (D.__k = [], U = 0; U < R.length; U++)
    if ((X = D.__k[U] = (X = R[U]) == null || typeof X == "boolean" ? null : typeof X == "string" || typeof X == "number" || typeof X == "bigint" ? v$4(null, X, null, null, X) : Array.isArray(X) ? v$4(p$4, { children: X }, null, null, null) : X.__b > 0 ? v$4(X.type, X.props, X.key, X.ref ? X.ref : null, X.__v) : X) != null) {
      if (X.__ = D, X.__b = D.__b + 1, (J = ne[U]) === null || J && X.key == J.key && X.type === J.type)
        ne[U] = void 0;
      else
        for (ee = 0; ee < oe; ee++) {
          if ((J = ne[ee]) && X.key == J.key && X.type === J.type) {
            ne[ee] = void 0;
            break;
          }
          J = null;
        }
      j$4(E, X, J = J || f$4, V, F, Y, G, K, Q), Z = X.__e, (ee = X.ref) && J.ref != ee && (te || (te = []), J.ref && te.push(J.ref, null, X), te.push(ee, X.__c || Z, X)), Z != null ? (ie == null && (ie = Z), typeof X.type == "function" && X.__k === J.__k ? X.__d = K = m$4(X, K, E) : K = A$4(E, X, J, ne, Z, K), typeof D.type == "function" && (D.__d = K)) : K && J.__e == K && K.parentNode != E && (K = _$9(J));
    }
  for (D.__e = ie, U = oe; U--; )
    ne[U] != null && N$4(ne[U], ne[U]);
  if (te)
    for (U = 0; U < te.length; U++)
      M$4(te[U], te[++U], te[++U]);
}
function m$4(E, R, D) {
  for (var W, V = E.__k, F = 0; V && F < V.length; F++)
    (W = V[F]) && (W.__ = E, R = typeof W.type == "function" ? m$4(W, R, D) : A$4(D, W, W, V, W.__e, R));
  return R;
}
function A$4(E, R, D, W, V, F) {
  var Y, G, K;
  if (R.__d !== void 0)
    Y = R.__d, R.__d = void 0;
  else if (D == null || V != F || V.parentNode == null)
    e:
      if (F == null || F.parentNode !== E)
        E.appendChild(V), Y = null;
      else {
        for (G = F, K = 0; (G = G.nextSibling) && K < W.length; K += 2)
          if (G == V)
            break e;
        E.insertBefore(V, F), Y = F;
      }
  return Y !== void 0 ? Y : V.nextSibling;
}
function C$4(E, R, D, W, V) {
  var F;
  for (F in D)
    F === "children" || F === "key" || F in R || H$4(E, F, null, D[F], W);
  for (F in R)
    V && typeof R[F] != "function" || F === "children" || F === "key" || F === "value" || F === "checked" || D[F] === R[F] || H$4(E, F, R[F], D[F], W);
}
function $$4(E, R, D) {
  R[0] === "-" ? E.setProperty(R, D) : E[R] = D == null ? "" : typeof D != "number" || c$4.test(R) ? D : D + "px";
}
function H$4(E, R, D, W, V) {
  var F;
  e:
    if (R === "style")
      if (typeof D == "string")
        E.style.cssText = D;
      else {
        if (typeof W == "string" && (E.style.cssText = W = ""), W)
          for (R in W)
            D && R in D || $$4(E.style, R, "");
        if (D)
          for (R in D)
            W && D[R] === W[R] || $$4(E.style, R, D[R]);
      }
    else if (R[0] === "o" && R[1] === "n")
      F = R !== (R = R.replace(/Capture$/, "")), R = R.toLowerCase() in E ? R.toLowerCase().slice(2) : R.slice(2), E.l || (E.l = {}), E.l[R + F] = D, D ? W || E.addEventListener(R, F ? T$4 : I$4, F) : E.removeEventListener(R, F ? T$4 : I$4, F);
    else if (R !== "dangerouslySetInnerHTML") {
      if (V)
        R = R.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (R !== "href" && R !== "list" && R !== "form" && R !== "tabIndex" && R !== "download" && R in E)
        try {
          E[R] = D ?? "";
          break e;
        } catch {
        }
      typeof D == "function" || (D == null || D === !1 && R.indexOf("-") == -1 ? E.removeAttribute(R) : E.setAttribute(R, D));
    }
}
function I$4(E) {
  this.l[E.type + !1](l$4.event ? l$4.event(E) : E);
}
function T$4(E) {
  this.l[E.type + !0](l$4.event ? l$4.event(E) : E);
}
function j$4(E, R, D, W, V, F, Y, G, K) {
  var Q, U, ee, J, X, Z, ie, te, ne, oe, le, ce, ue, pe, de, se = R.type;
  if (R.constructor !== void 0)
    return null;
  D.__h != null && (K = D.__h, G = R.__e = D.__e, R.__h = null, F = [G]), (Q = l$4.__b) && Q(R);
  try {
    e:
      if (typeof se == "function") {
        if (te = R.props, ne = (Q = se.contextType) && W[Q.__c], oe = Q ? ne ? ne.props.value : Q.__ : W, D.__c ? ie = (U = R.__c = D.__c).__ = U.__E : ("prototype" in se && se.prototype.render ? R.__c = U = new se(te, oe) : (R.__c = U = new d$4(te, oe), U.constructor = se, U.render = O$4), ne && ne.sub(U), U.props = te, U.state || (U.state = {}), U.context = oe, U.__n = W, ee = U.__d = !0, U.__h = [], U._sb = []), U.__s == null && (U.__s = U.state), se.getDerivedStateFromProps != null && (U.__s == U.state && (U.__s = s$4({}, U.__s)), s$4(U.__s, se.getDerivedStateFromProps(te, U.__s))), J = U.props, X = U.state, ee)
          se.getDerivedStateFromProps == null && U.componentWillMount != null && U.componentWillMount(), U.componentDidMount != null && U.__h.push(U.componentDidMount);
        else {
          if (se.getDerivedStateFromProps == null && te !== J && U.componentWillReceiveProps != null && U.componentWillReceiveProps(te, oe), !U.__e && U.shouldComponentUpdate != null && U.shouldComponentUpdate(te, U.__s, oe) === !1 || R.__v === D.__v) {
            for (U.props = te, U.state = U.__s, R.__v !== D.__v && (U.__d = !1), U.__v = R, R.__e = D.__e, R.__k = D.__k, R.__k.forEach(function(ae) {
              ae && (ae.__ = R);
            }), le = 0; le < U._sb.length; le++)
              U.__h.push(U._sb[le]);
            U._sb = [], U.__h.length && Y.push(U);
            break e;
          }
          U.componentWillUpdate != null && U.componentWillUpdate(te, U.__s, oe), U.componentDidUpdate != null && U.__h.push(function() {
            U.componentDidUpdate(J, X, Z);
          });
        }
        if (U.context = oe, U.props = te, U.__v = R, U.__P = E, ce = l$4.__r, ue = 0, "prototype" in se && se.prototype.render) {
          for (U.state = U.__s, U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), pe = 0; pe < U._sb.length; pe++)
            U.__h.push(U._sb[pe]);
          U._sb = [];
        } else
          do
            U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), U.state = U.__s;
          while (U.__d && ++ue < 25);
        U.state = U.__s, U.getChildContext != null && (W = s$4(s$4({}, W), U.getChildContext())), ee || U.getSnapshotBeforeUpdate == null || (Z = U.getSnapshotBeforeUpdate(J, X)), de = Q != null && Q.type === p$4 && Q.key == null ? Q.props.children : Q, w$4(E, Array.isArray(de) ? de : [de], R, D, W, V, F, Y, G, K), U.base = R.__e, R.__h = null, U.__h.length && Y.push(U), ie && (U.__E = U.__ = null), U.__e = !1;
      } else
        F == null && R.__v === D.__v ? (R.__k = D.__k, R.__e = D.__e) : R.__e = L$4(D.__e, R, D, W, V, F, Y, K);
    (Q = l$4.diffed) && Q(R);
  } catch (ae) {
    R.__v = null, (K || F != null) && (R.__e = G, R.__h = !!K, F[F.indexOf(G)] = null), l$4.__e(ae, R, D);
  }
}
function z$4(E, R) {
  l$4.__c && l$4.__c(R, E), E.some(function(D) {
    try {
      E = D.__h, D.__h = [], E.some(function(W) {
        W.call(D);
      });
    } catch (W) {
      l$4.__e(W, D.__v);
    }
  });
}
function L$4(E, R, D, W, V, F, Y, G) {
  var K, Q, U, ee = D.props, J = R.props, X = R.type, Z = 0;
  if (X === "svg" && (V = !0), F != null) {
    for (; Z < F.length; Z++)
      if ((K = F[Z]) && "setAttribute" in K == !!X && (X ? K.localName === X : K.nodeType === 3)) {
        E = K, F[Z] = null;
        break;
      }
  }
  if (E == null) {
    if (X === null)
      return document.createTextNode(J);
    E = V ? document.createElementNS("http://www.w3.org/2000/svg", X) : document.createElement(X, J.is && J), F = null, G = !1;
  }
  if (X === null)
    ee === J || G && E.data === J || (E.data = J);
  else {
    if (F = F && n$4.call(E.childNodes), Q = (ee = D.props || f$4).dangerouslySetInnerHTML, U = J.dangerouslySetInnerHTML, !G) {
      if (F != null)
        for (ee = {}, Z = 0; Z < E.attributes.length; Z++)
          ee[E.attributes[Z].name] = E.attributes[Z].value;
      (U || Q) && (U && (Q && U.__html == Q.__html || U.__html === E.innerHTML) || (E.innerHTML = U && U.__html || ""));
    }
    if (C$4(E, J, ee, V, G), U)
      R.__k = [];
    else if (Z = R.props.children, w$4(E, Array.isArray(Z) ? Z : [Z], R, D, W, V && X !== "foreignObject", F, Y, F ? F[0] : D.__k && _$9(D, 0), G), F != null)
      for (Z = F.length; Z--; )
        F[Z] != null && a$4(F[Z]);
    G || ("value" in J && (Z = J.value) !== void 0 && (Z !== E.value || X === "progress" && !Z || X === "option" && Z !== ee.value) && H$4(E, "value", Z, ee.value, !1), "checked" in J && (Z = J.checked) !== void 0 && Z !== E.checked && H$4(E, "checked", Z, ee.checked, !1));
  }
  return E;
}
function M$4(E, R, D) {
  try {
    typeof E == "function" ? E(R) : E.current = R;
  } catch (W) {
    l$4.__e(W, D);
  }
}
function N$4(E, R, D) {
  var W, V;
  if (l$4.unmount && l$4.unmount(E), (W = E.ref) && (W.current && W.current !== E.__e || M$4(W, null, R)), (W = E.__c) != null) {
    if (W.componentWillUnmount)
      try {
        W.componentWillUnmount();
      } catch (F) {
        l$4.__e(F, R);
      }
    W.base = W.__P = null, E.__c = void 0;
  }
  if (W = E.__k)
    for (V = 0; V < W.length; V++)
      W[V] && N$4(W[V], R, D || typeof E.type != "function");
  D || E.__e == null || a$4(E.__e), E.__ = E.__e = E.__d = void 0;
}
function O$4(E, R, D) {
  return this.constructor(E, D);
}
n$4 = e$4.slice, l$4 = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} }, u$4 = 0, d$4.prototype.setState = function(E, R) {
  var D;
  D = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s$4({}, this.state), typeof E == "function" && (E = E(s$4({}, D), this.props)), E && s$4(D, E), E != null && this.__v && (R && this._sb.push(R), b$4(this));
}, d$4.prototype.forceUpdate = function(E) {
  this.__v && (this.__e = !0, E && this.__h.push(E), b$4(this));
}, d$4.prototype.render = p$4, t$4 = [], g$4.__r = 0;
var _$8 = 0;
function o$8(E, R, D, W, V) {
  var F, Y, G = {};
  for (Y in R)
    Y == "ref" ? F = R[Y] : G[Y] = R[Y];
  var K = { type: E, props: G, key: D, ref: F, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_$8, __source: V, __self: W };
  if (typeof E == "function" && (F = E.defaultProps))
    for (Y in F)
      G[Y] === void 0 && (G[Y] = F[Y]);
  return l$4.vnode && l$4.vnode(K), K;
}
let nanoid$1 = (E = 21) => crypto.getRandomValues(new Uint8Array(E)).reduce((R, D) => (D &= 63, D < 36 ? R += D.toString(36) : D < 62 ? R += (D - 26).toString(36).toUpperCase() : D > 62 ? R += "-" : R += "_", R), "");
var $o;
class PickerMultiSelect extends d$4 {
  constructor() {
    super(...arguments);
    he(this, $o, (D) => {
      var Y;
      const { onDeselect: W, selections: V } = this.props, F = (Y = D.target.closest(".picker-deselect-btn")) == null ? void 0 : Y.dataset.idx;
      F && W && (V != null && V.length) && (D.stopPropagation(), W([V[+F]], D));
    });
  }
  render() {
    const {
      className: D,
      style: W,
      disabled: V,
      placeholder: F,
      focused: Y,
      selections: G = [],
      onClick: K,
      children: Q
    } = this.props;
    let U;
    return G.length ? U = /* @__PURE__ */ o$8("div", { className: "picker-multi-selections", children: G.map((ee, J) => /* @__PURE__ */ o$8("div", { className: "picker-multi-selection", children: [
      ee.text ?? ee.value,
      /* @__PURE__ */ o$8("div", { className: "picker-deselect-btn btn", onClick: re(this, $o), "data-idx": J, children: /* @__PURE__ */ o$8("span", { className: "close" }) })
    ] })) }) : U = /* @__PURE__ */ o$8("span", { className: "picker-select-placeholder", children: F }), /* @__PURE__ */ o$8(
      "div",
      {
        className: classes("picker-select picker-select-multi form-control", D, { disabled: V, focused: Y }),
        style: W,
        onClick: K,
        children: [
          U,
          Q,
          /* @__PURE__ */ o$8("span", { class: "caret" })
        ]
      }
    );
  }
}
$o = new WeakMap();
var mo;
class PickerSingleSelect extends d$4 {
  constructor() {
    super(...arguments);
    he(this, mo, (D) => {
      const { onDeselect: W, selections: V } = this.props;
      W && (V != null && V.length) && (D.stopPropagation(), W(V, D));
    });
  }
  render() {
    const {
      className: D,
      style: W,
      disabled: V,
      placeholder: F,
      focused: Y,
      selections: G = [],
      onDeselect: K,
      onClick: Q,
      children: U
    } = this.props, [ee] = G, J = ee ? /* @__PURE__ */ o$8("span", { className: "picker-single-selection", children: ee.text ?? ee.value }) : /* @__PURE__ */ o$8("span", { className: "picker-select-placeholder", children: F }), X = ee && K ? /* @__PURE__ */ o$8("button", { type: "button", className: "btn picker-deselect-btn", onClick: re(this, mo), children: /* @__PURE__ */ o$8("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ o$8(
      "div",
      {
        className: classes("picker-select picker-select-single form-control", D, { disabled: V, focused: Y }),
        style: W,
        onClick: Q,
        children: [
          J,
          U,
          X,
          /* @__PURE__ */ o$8("span", { class: "caret" })
        ]
      }
    );
  }
}
mo = new WeakMap();
const magnifier = "";
var go, qr, xn, yo, kn, vo;
class PickerMenu extends d$4 {
  constructor() {
    super(...arguments);
    he(this, go);
    me(this, "state", { keys: "", shown: !1 });
    he(this, xn, (D) => {
      var W;
      (W = D.target) != null && W.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    he(this, yo, ({ item: D }) => {
      const W = this.props.items.find((V) => V.value === D.key);
      W && this.props.onSelectItem(W);
    });
    he(this, kn, (D) => {
      this.setState({ keys: D.target.value });
    });
    he(this, vo, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", re(this, xn)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", re(this, xn));
  }
  show() {
    this.state.shown || this.setState({ shown: !0 });
  }
  hide() {
    this.state.shown && this.setState({ shown: !1 }, () => {
      window.setTimeout(() => {
        var D, W;
        (W = (D = this.props).onRequestHide) == null || W.call(D);
      }, 200);
    });
  }
  render() {
    const {
      id: D,
      search: W,
      className: V,
      style: F = {},
      maxHeight: Y,
      maxWidth: G,
      width: K,
      menu: Q,
      searchHint: U
    } = this.props, { shown: ee, keys: J } = this.state, X = J.trim().length;
    return /* @__PURE__ */ o$8("div", { className: classes("picker-menu", V, { shown: ee, "has-search": X }), id: `picker-menu-${D}`, style: { maxHeight: Y, maxWidth: G, width: K, ...F }, children: [
      W ? /* @__PURE__ */ o$8("div", { className: "picker-menu-search", children: [
        /* @__PURE__ */ o$8("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: U, value: J, onChange: re(this, kn), onInput: re(this, kn) }),
        X ? /* @__PURE__ */ o$8("button", { type: "button", className: "btn picker-menu-search-clear", onClick: re(this, vo), children: /* @__PURE__ */ o$8("span", { className: "close" }) }) : /* @__PURE__ */ o$8("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ o$8(Menu$1, { className: "picker-menu-list", items: ke(this, go, qr).call(this), onClickItem: re(this, yo), ...Q })
    ] });
  }
}
go = new WeakSet(), qr = function() {
  const { selections: D, items: W } = this.props, V = new Set(D), F = this.state.keys.toLowerCase().split(" ").filter((Y) => Y.length);
  return W.reduce((Y, G) => {
    const {
      value: K,
      keys: Q,
      text: U,
      ...ee
    } = G;
    if (!F.length || F.every((J) => K.toLowerCase().includes(J) || (Q == null ? void 0 : Q.toLowerCase().includes(J)) || typeof U == "string" && U.toLowerCase().includes(J))) {
      let J = U ?? K;
      typeof J == "string" && F.length && (J = /* @__PURE__ */ o$8("span", { dangerouslySetInnerHTML: { __html: F.reduce((X, Z) => X.replace(Z, `<span class="picker-menu-item-match">${Z}</span>`), J) } })), Y.push({
        key: K,
        active: V.has(K),
        text: J,
        ...ee
      });
    }
    return Y;
  }, []);
}, xn = new WeakMap(), yo = new WeakMap(), kn = new WeakMap(), vo = new WeakMap();
function createUniqList(E) {
  const R = /* @__PURE__ */ new Set();
  return E.reduce((D, W) => (R.has(W) || (R.add(W), D.push(W)), D), []);
}
var hr, Sn, Cn, En, zt, Kn, Tn, mr, bo, Xr, wo, Kr, xo, ko, So, Co, Eo, Jr;
let Picker$1 = (hr = class extends d$4 {
  constructor(D) {
    super(D);
    he(this, zt);
    he(this, Tn);
    he(this, bo);
    he(this, wo);
    he(this, Eo);
    he(this, Sn, 0);
    he(this, Cn, nanoid$1());
    he(this, En, y$2());
    he(this, xo, (D, W) => {
      const { valueList: V } = this, F = new Set(D.map((G) => G.value)), Y = V.filter((G) => !F.has(G));
      this.setState({ value: Y.length ? Y.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    he(this, ko, (D) => {
      console.log("#handleSelectClick", D), this.setState({ open: !0 });
    });
    he(this, So, () => {
      this.close();
    });
    he(this, Co, (D) => {
      this.props.multi ? this.toggleValue(D.value) : this.setState({ value: D.value }, () => {
        var W;
        (W = re(this, En).current) == null || W.hide();
      });
    });
    this.state = {
      value: ke(this, bo, Xr).call(this, D.defaultValue) ?? "",
      open: !1,
      loading: !1,
      search: "",
      items: Array.isArray(D.items) ? D.items : []
    };
  }
  get value() {
    return this.state.value;
  }
  get valueList() {
    return ke(this, Tn, mr).call(this, this.state.value);
  }
  componentDidMount() {
    var D;
    (D = this.props.afterRender) == null || D.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var D;
    (D = this.props.afterRender) == null || D.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var D;
    (D = this.props.beforeDestroy) == null || D.call(this);
  }
  async loadItemList() {
    let { items: D } = this.props;
    if (typeof D == "function") {
      const V = ++Mr(this, Sn)._;
      if (await ke(this, zt, Kn).call(this, { loading: !0, items: [] }), D = await D(), re(this, Sn) !== V)
        return [];
    }
    const W = {};
    return Array.isArray(D) && this.state.items !== D && (W.items = D), this.state.loading && (W.loading = !1), Object.keys(W).length && await ke(this, zt, Kn).call(this, W), D;
  }
  getItemList() {
    return this.state.items;
  }
  getItemMap() {
    return this.getItemList().reduce((D, W) => (D[W.value] = W, D), {});
  }
  getItemByValue(D) {
    return this.getItemList().find((W) => W.value === D);
  }
  getSelections() {
    const D = this.getItemMap();
    return this.valueList.map((W) => D[W] || { value: W });
  }
  async toggle(D) {
    if (D === void 0)
      D = !this.state.open;
    else if (D === this.state.open)
      return;
    await ke(this, zt, Kn).call(this, { open: D }), D && this.loadItemList();
  }
  open() {
    return this.toggle(!0);
  }
  close() {
    return this.toggle(!1);
  }
  toggleValue(D, W) {
    const { valueList: V } = this, F = V.indexOf(D);
    W !== !!F && (F > -1 ? V.splice(F, 1) : V.push(D), this.setState({ value: V.join(this.props.valueSplitter ?? ",") }));
  }
  render() {
    const {
      className: D,
      style: W,
      children: V,
      multi: F
    } = this.props, Y = F ? PickerMultiSelect : PickerSingleSelect;
    return /* @__PURE__ */ o$8("div", { className: classes("picker", D), style: W, id: `picker-${re(this, Cn)}`, children: [
      /* @__PURE__ */ o$8(Y, { ...ke(this, wo, Kr).call(this) }),
      V,
      this.state.open ? /* @__PURE__ */ o$8(PickerMenu, { ...ke(this, Eo, Jr).call(this), ref: re(this, En) }) : null
    ] });
  }
}, Sn = new WeakMap(), Cn = new WeakMap(), En = new WeakMap(), zt = new WeakSet(), Kn = function(D) {
  return new Promise((W) => {
    this.setState(D, W);
  });
}, Tn = new WeakSet(), mr = function(D) {
  return typeof D == "string" ? createUniqList(D.split(this.props.valueSplitter ?? ",")) : Array.isArray(D) ? createUniqList(D) : [];
}, bo = new WeakSet(), Xr = function(D) {
  const W = ke(this, Tn, mr).call(this, D);
  return W.length ? W.join(this.props.valueSplitter ?? ",") : void 0;
}, wo = new WeakSet(), Kr = function() {
  const { placeholder: D, disabled: W } = this.props, { open: V } = this.state;
  return {
    focused: V,
    placeholder: D,
    disabled: W,
    selections: this.getSelections(),
    onClick: re(this, ko),
    onDeselect: re(this, xo)
  };
}, xo = new WeakMap(), ko = new WeakMap(), So = new WeakMap(), Co = new WeakMap(), Eo = new WeakSet(), Jr = function() {
  const { search: D, menuClass: W, menuWidth: V, menuStyle: F, menuMaxHeight: Y, menuMaxWidth: G } = this.props, { items: K } = this.state;
  return {
    id: re(this, Cn),
    items: K,
    selections: this.valueList,
    search: D === !0 || typeof D == "number" && D <= K.length,
    style: F,
    className: W,
    width: V,
    maxHeight: Y,
    maxWidth: G,
    onRequestHide: re(this, So),
    onSelectItem: re(this, Co)
  };
}, me(hr, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), hr);
class Picker extends ComponentFromReact {
}
me(Picker, "NAME", "picker"), me(Picker, "Component", Picker$1);
const vars$1 = "", table = "";
var n$3, l$3, u$3, t$3, o$7, f$3 = {}, e$3 = [], c$3 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$3(E, R) {
  for (var D in R)
    E[D] = R[D];
  return E;
}
function a$3(E) {
  var R = E.parentNode;
  R && R.removeChild(E);
}
function h$1(E, R, D) {
  var W, V, F, Y = {};
  for (F in R)
    F == "key" ? W = R[F] : F == "ref" ? V = R[F] : Y[F] = R[F];
  if (arguments.length > 2 && (Y.children = arguments.length > 3 ? n$3.call(arguments, 2) : D), typeof E == "function" && E.defaultProps != null)
    for (F in E.defaultProps)
      Y[F] === void 0 && (Y[F] = E.defaultProps[F]);
  return v$3(E, Y, W, V, null);
}
function v$3(E, R, D, W, V) {
  var F = { type: E, props: R, key: D, ref: W, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: V ?? ++u$3 };
  return V == null && l$3.vnode != null && l$3.vnode(F), F;
}
function y$1() {
  return { current: null };
}
function p$3(E) {
  return E.children;
}
function d$3(E, R) {
  this.props = E, this.context = R;
}
function _$7(E, R) {
  if (R == null)
    return E.__ ? _$7(E.__, E.__.__k.indexOf(E) + 1) : null;
  for (var D; R < E.__k.length; R++)
    if ((D = E.__k[R]) != null && D.__e != null)
      return D.__e;
  return typeof E.type == "function" ? _$7(E) : null;
}
function k$3(E) {
  var R, D;
  if ((E = E.__) != null && E.__c != null) {
    for (E.__e = E.__c.base = null, R = 0; R < E.__k.length; R++)
      if ((D = E.__k[R]) != null && D.__e != null) {
        E.__e = E.__c.base = D.__e;
        break;
      }
    return k$3(E);
  }
}
function b$3(E) {
  (!E.__d && (E.__d = !0) && t$3.push(E) && !g$3.__r++ || o$7 !== l$3.debounceRendering) && ((o$7 = l$3.debounceRendering) || setTimeout)(g$3);
}
function g$3() {
  for (var E; g$3.__r = t$3.length; )
    E = t$3.sort(function(R, D) {
      return R.__v.__b - D.__v.__b;
    }), t$3 = [], E.some(function(R) {
      var D, W, V, F, Y, G;
      R.__d && (Y = (F = (D = R).__v).__e, (G = D.__P) && (W = [], (V = s$3({}, F)).__v = F.__v + 1, j$3(G, F, V, D.__n, G.ownerSVGElement !== void 0, F.__h != null ? [Y] : null, W, Y ?? _$7(F), F.__h), z$3(W, F), F.__e != Y && k$3(F)));
    });
}
function w$3(E, R, D, W, V, F, Y, G, K, Q) {
  var U, ee, J, X, Z, ie, te, ne = W && W.__k || e$3, oe = ne.length;
  for (D.__k = [], U = 0; U < R.length; U++)
    if ((X = D.__k[U] = (X = R[U]) == null || typeof X == "boolean" ? null : typeof X == "string" || typeof X == "number" || typeof X == "bigint" ? v$3(null, X, null, null, X) : Array.isArray(X) ? v$3(p$3, { children: X }, null, null, null) : X.__b > 0 ? v$3(X.type, X.props, X.key, X.ref ? X.ref : null, X.__v) : X) != null) {
      if (X.__ = D, X.__b = D.__b + 1, (J = ne[U]) === null || J && X.key == J.key && X.type === J.type)
        ne[U] = void 0;
      else
        for (ee = 0; ee < oe; ee++) {
          if ((J = ne[ee]) && X.key == J.key && X.type === J.type) {
            ne[ee] = void 0;
            break;
          }
          J = null;
        }
      j$3(E, X, J = J || f$3, V, F, Y, G, K, Q), Z = X.__e, (ee = X.ref) && J.ref != ee && (te || (te = []), J.ref && te.push(J.ref, null, X), te.push(ee, X.__c || Z, X)), Z != null ? (ie == null && (ie = Z), typeof X.type == "function" && X.__k === J.__k ? X.__d = K = m$3(X, K, E) : K = A$3(E, X, J, ne, Z, K), typeof D.type == "function" && (D.__d = K)) : K && J.__e == K && K.parentNode != E && (K = _$7(J));
    }
  for (D.__e = ie, U = oe; U--; )
    ne[U] != null && N$3(ne[U], ne[U]);
  if (te)
    for (U = 0; U < te.length; U++)
      M$3(te[U], te[++U], te[++U]);
}
function m$3(E, R, D) {
  for (var W, V = E.__k, F = 0; V && F < V.length; F++)
    (W = V[F]) && (W.__ = E, R = typeof W.type == "function" ? m$3(W, R, D) : A$3(D, W, W, V, W.__e, R));
  return R;
}
function A$3(E, R, D, W, V, F) {
  var Y, G, K;
  if (R.__d !== void 0)
    Y = R.__d, R.__d = void 0;
  else if (D == null || V != F || V.parentNode == null)
    e:
      if (F == null || F.parentNode !== E)
        E.appendChild(V), Y = null;
      else {
        for (G = F, K = 0; (G = G.nextSibling) && K < W.length; K += 2)
          if (G == V)
            break e;
        E.insertBefore(V, F), Y = F;
      }
  return Y !== void 0 ? Y : V.nextSibling;
}
function C$3(E, R, D, W, V) {
  var F;
  for (F in D)
    F === "children" || F === "key" || F in R || H$3(E, F, null, D[F], W);
  for (F in R)
    V && typeof R[F] != "function" || F === "children" || F === "key" || F === "value" || F === "checked" || D[F] === R[F] || H$3(E, F, R[F], D[F], W);
}
function $$3(E, R, D) {
  R[0] === "-" ? E.setProperty(R, D) : E[R] = D == null ? "" : typeof D != "number" || c$3.test(R) ? D : D + "px";
}
function H$3(E, R, D, W, V) {
  var F;
  e:
    if (R === "style")
      if (typeof D == "string")
        E.style.cssText = D;
      else {
        if (typeof W == "string" && (E.style.cssText = W = ""), W)
          for (R in W)
            D && R in D || $$3(E.style, R, "");
        if (D)
          for (R in D)
            W && D[R] === W[R] || $$3(E.style, R, D[R]);
      }
    else if (R[0] === "o" && R[1] === "n")
      F = R !== (R = R.replace(/Capture$/, "")), R = R.toLowerCase() in E ? R.toLowerCase().slice(2) : R.slice(2), E.l || (E.l = {}), E.l[R + F] = D, D ? W || E.addEventListener(R, F ? T$3 : I$3, F) : E.removeEventListener(R, F ? T$3 : I$3, F);
    else if (R !== "dangerouslySetInnerHTML") {
      if (V)
        R = R.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (R !== "href" && R !== "list" && R !== "form" && R !== "tabIndex" && R !== "download" && R in E)
        try {
          E[R] = D ?? "";
          break e;
        } catch {
        }
      typeof D == "function" || (D == null || D === !1 && R.indexOf("-") == -1 ? E.removeAttribute(R) : E.setAttribute(R, D));
    }
}
function I$3(E) {
  this.l[E.type + !1](l$3.event ? l$3.event(E) : E);
}
function T$3(E) {
  this.l[E.type + !0](l$3.event ? l$3.event(E) : E);
}
function j$3(E, R, D, W, V, F, Y, G, K) {
  var Q, U, ee, J, X, Z, ie, te, ne, oe, le, ce, ue, pe, de, se = R.type;
  if (R.constructor !== void 0)
    return null;
  D.__h != null && (K = D.__h, G = R.__e = D.__e, R.__h = null, F = [G]), (Q = l$3.__b) && Q(R);
  try {
    e:
      if (typeof se == "function") {
        if (te = R.props, ne = (Q = se.contextType) && W[Q.__c], oe = Q ? ne ? ne.props.value : Q.__ : W, D.__c ? ie = (U = R.__c = D.__c).__ = U.__E : ("prototype" in se && se.prototype.render ? R.__c = U = new se(te, oe) : (R.__c = U = new d$3(te, oe), U.constructor = se, U.render = O$3), ne && ne.sub(U), U.props = te, U.state || (U.state = {}), U.context = oe, U.__n = W, ee = U.__d = !0, U.__h = [], U._sb = []), U.__s == null && (U.__s = U.state), se.getDerivedStateFromProps != null && (U.__s == U.state && (U.__s = s$3({}, U.__s)), s$3(U.__s, se.getDerivedStateFromProps(te, U.__s))), J = U.props, X = U.state, ee)
          se.getDerivedStateFromProps == null && U.componentWillMount != null && U.componentWillMount(), U.componentDidMount != null && U.__h.push(U.componentDidMount);
        else {
          if (se.getDerivedStateFromProps == null && te !== J && U.componentWillReceiveProps != null && U.componentWillReceiveProps(te, oe), !U.__e && U.shouldComponentUpdate != null && U.shouldComponentUpdate(te, U.__s, oe) === !1 || R.__v === D.__v) {
            for (U.props = te, U.state = U.__s, R.__v !== D.__v && (U.__d = !1), U.__v = R, R.__e = D.__e, R.__k = D.__k, R.__k.forEach(function(ae) {
              ae && (ae.__ = R);
            }), le = 0; le < U._sb.length; le++)
              U.__h.push(U._sb[le]);
            U._sb = [], U.__h.length && Y.push(U);
            break e;
          }
          U.componentWillUpdate != null && U.componentWillUpdate(te, U.__s, oe), U.componentDidUpdate != null && U.__h.push(function() {
            U.componentDidUpdate(J, X, Z);
          });
        }
        if (U.context = oe, U.props = te, U.__v = R, U.__P = E, ce = l$3.__r, ue = 0, "prototype" in se && se.prototype.render) {
          for (U.state = U.__s, U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), pe = 0; pe < U._sb.length; pe++)
            U.__h.push(U._sb[pe]);
          U._sb = [];
        } else
          do
            U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), U.state = U.__s;
          while (U.__d && ++ue < 25);
        U.state = U.__s, U.getChildContext != null && (W = s$3(s$3({}, W), U.getChildContext())), ee || U.getSnapshotBeforeUpdate == null || (Z = U.getSnapshotBeforeUpdate(J, X)), de = Q != null && Q.type === p$3 && Q.key == null ? Q.props.children : Q, w$3(E, Array.isArray(de) ? de : [de], R, D, W, V, F, Y, G, K), U.base = R.__e, R.__h = null, U.__h.length && Y.push(U), ie && (U.__E = U.__ = null), U.__e = !1;
      } else
        F == null && R.__v === D.__v ? (R.__k = D.__k, R.__e = D.__e) : R.__e = L$3(D.__e, R, D, W, V, F, Y, K);
    (Q = l$3.diffed) && Q(R);
  } catch (ae) {
    R.__v = null, (K || F != null) && (R.__e = G, R.__h = !!K, F[F.indexOf(G)] = null), l$3.__e(ae, R, D);
  }
}
function z$3(E, R) {
  l$3.__c && l$3.__c(R, E), E.some(function(D) {
    try {
      E = D.__h, D.__h = [], E.some(function(W) {
        W.call(D);
      });
    } catch (W) {
      l$3.__e(W, D.__v);
    }
  });
}
function L$3(E, R, D, W, V, F, Y, G) {
  var K, Q, U, ee = D.props, J = R.props, X = R.type, Z = 0;
  if (X === "svg" && (V = !0), F != null) {
    for (; Z < F.length; Z++)
      if ((K = F[Z]) && "setAttribute" in K == !!X && (X ? K.localName === X : K.nodeType === 3)) {
        E = K, F[Z] = null;
        break;
      }
  }
  if (E == null) {
    if (X === null)
      return document.createTextNode(J);
    E = V ? document.createElementNS("http://www.w3.org/2000/svg", X) : document.createElement(X, J.is && J), F = null, G = !1;
  }
  if (X === null)
    ee === J || G && E.data === J || (E.data = J);
  else {
    if (F = F && n$3.call(E.childNodes), Q = (ee = D.props || f$3).dangerouslySetInnerHTML, U = J.dangerouslySetInnerHTML, !G) {
      if (F != null)
        for (ee = {}, Z = 0; Z < E.attributes.length; Z++)
          ee[E.attributes[Z].name] = E.attributes[Z].value;
      (U || Q) && (U && (Q && U.__html == Q.__html || U.__html === E.innerHTML) || (E.innerHTML = U && U.__html || ""));
    }
    if (C$3(E, J, ee, V, G), U)
      R.__k = [];
    else if (Z = R.props.children, w$3(E, Array.isArray(Z) ? Z : [Z], R, D, W, V && X !== "foreignObject", F, Y, F ? F[0] : D.__k && _$7(D, 0), G), F != null)
      for (Z = F.length; Z--; )
        F[Z] != null && a$3(F[Z]);
    G || ("value" in J && (Z = J.value) !== void 0 && (Z !== E.value || X === "progress" && !Z || X === "option" && Z !== ee.value) && H$3(E, "value", Z, ee.value, !1), "checked" in J && (Z = J.checked) !== void 0 && Z !== E.checked && H$3(E, "checked", Z, ee.checked, !1));
  }
  return E;
}
function M$3(E, R, D) {
  try {
    typeof E == "function" ? E(R) : E.current = R;
  } catch (W) {
    l$3.__e(W, D);
  }
}
function N$3(E, R, D) {
  var W, V;
  if (l$3.unmount && l$3.unmount(E), (W = E.ref) && (W.current && W.current !== E.__e || M$3(W, null, R)), (W = E.__c) != null) {
    if (W.componentWillUnmount)
      try {
        W.componentWillUnmount();
      } catch (F) {
        l$3.__e(F, R);
      }
    W.base = W.__P = null, E.__c = void 0;
  }
  if (W = E.__k)
    for (V = 0; V < W.length; V++)
      W[V] && N$3(W[V], R, D || typeof E.type != "function");
  D || E.__e == null || a$3(E.__e), E.__ = E.__e = E.__d = void 0;
}
function O$3(E, R, D) {
  return this.constructor(E, D);
}
function P(E, R, D) {
  var W, V, F;
  l$3.__ && l$3.__(E, R), V = (W = typeof D == "function") ? null : D && D.__k || R.__k, F = [], j$3(R, E = (!W && D || R).__k = h$1(p$3, null, [E]), V || f$3, f$3, R.ownerSVGElement !== void 0, !W && D ? [D] : V ? null : R.firstChild ? n$3.call(R.childNodes) : null, F, !W && D ? D : V ? V.__e : R.firstChild, W), z$3(F, E);
}
n$3 = e$3.slice, l$3 = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} }, u$3 = 0, d$3.prototype.setState = function(E, R) {
  var D;
  D = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s$3({}, this.state), typeof E == "function" && (E = E(s$3({}, D), this.props)), E && s$3(D, E), E != null && this.__v && (R && this._sb.push(R), b$3(this));
}, d$3.prototype.forceUpdate = function(E) {
  this.__v && (this.__e = !0, E && this.__h.push(E), b$3(this));
}, d$3.prototype.render = p$3, t$3 = [], g$3.__r = 0;
var _$6 = 0;
function o$6(E, R, D, W, V) {
  var F, Y, G = {};
  for (Y in R)
    Y == "ref" ? F = R[Y] : G[Y] = R[Y];
  var K = { type: E, props: G, key: D, ref: F, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_$6, __source: V, __self: W };
  if (typeof E == "function" && (F = E.defaultProps))
    for (Y in F)
      G[Y] === void 0 && (G[Y] = F[Y]);
  return l$3.vnode && l$3.vnode(K), K;
}
var dayjs_minExports = {}, dayjs_min = {
  get exports() {
    return dayjs_minExports;
  },
  set exports(E) {
    dayjs_minExports = E;
  }
};
(function(E, R) {
  (function(D, W) {
    E.exports = W();
  })(commonjsGlobal, function() {
    var D = 1e3, W = 6e4, V = 36e5, F = "millisecond", Y = "second", G = "minute", K = "hour", Q = "day", U = "week", ee = "month", J = "quarter", X = "year", Z = "date", ie = "Invalid Date", te = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, ne = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, oe = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(ye) {
      var fe = ["th", "st", "nd", "rd"], _e = ye % 100;
      return "[" + ye + (fe[(_e - 20) % 10] || fe[_e] || fe[0]) + "]";
    } }, le = function(ye, fe, _e) {
      var ve = String(ye);
      return !ve || ve.length >= fe ? ye : "" + Array(fe + 1 - ve.length).join(_e) + ye;
    }, ce = { s: le, z: function(ye) {
      var fe = -ye.utcOffset(), _e = Math.abs(fe), ve = Math.floor(_e / 60), $e = _e % 60;
      return (fe <= 0 ? "+" : "-") + le(ve, 2, "0") + ":" + le($e, 2, "0");
    }, m: function ye(fe, _e) {
      if (fe.date() < _e.date())
        return -ye(_e, fe);
      var ve = 12 * (_e.year() - fe.year()) + (_e.month() - fe.month()), $e = fe.clone().add(ve, ee), we = _e - $e < 0, be = fe.clone().add(ve + (we ? -1 : 1), ee);
      return +(-(ve + (_e - $e) / (we ? $e - be : be - $e)) || 0);
    }, a: function(ye) {
      return ye < 0 ? Math.ceil(ye) || 0 : Math.floor(ye);
    }, p: function(ye) {
      return { M: ee, y: X, w: U, d: Q, D: Z, h: K, m: G, s: Y, ms: F, Q: J }[ye] || String(ye || "").toLowerCase().replace(/s$/, "");
    }, u: function(ye) {
      return ye === void 0;
    } }, ue = "en", pe = {};
    pe[ue] = oe;
    var de = function(ye) {
      return ye instanceof Me;
    }, se = function ye(fe, _e, ve) {
      var $e;
      if (!fe)
        return ue;
      if (typeof fe == "string") {
        var we = fe.toLowerCase();
        pe[we] && ($e = we), _e && (pe[we] = _e, $e = we);
        var be = fe.split("-");
        if (!$e && be.length > 1)
          return ye(be[0]);
      } else {
        var Se = fe.name;
        pe[Se] = fe, $e = Se;
      }
      return !ve && $e && (ue = $e), $e || !ve && ue;
    }, ae = function(ye, fe) {
      if (de(ye))
        return ye.clone();
      var _e = typeof fe == "object" ? fe : {};
      return _e.date = ye, _e.args = arguments, new Me(_e);
    }, ge = ce;
    ge.l = se, ge.i = de, ge.w = function(ye, fe) {
      return ae(ye, { locale: fe.$L, utc: fe.$u, x: fe.$x, $offset: fe.$offset });
    };
    var Me = function() {
      function ye(_e) {
        this.$L = se(_e.locale, null, !0), this.parse(_e);
      }
      var fe = ye.prototype;
      return fe.parse = function(_e) {
        this.$d = function(ve) {
          var $e = ve.date, we = ve.utc;
          if ($e === null)
            return new Date(NaN);
          if (ge.u($e))
            return new Date();
          if ($e instanceof Date)
            return new Date($e);
          if (typeof $e == "string" && !/Z$/i.test($e)) {
            var be = $e.match(te);
            if (be) {
              var Se = be[2] - 1 || 0, Ae = (be[7] || "0").substring(0, 3);
              return we ? new Date(Date.UTC(be[1], Se, be[3] || 1, be[4] || 0, be[5] || 0, be[6] || 0, Ae)) : new Date(be[1], Se, be[3] || 1, be[4] || 0, be[5] || 0, be[6] || 0, Ae);
            }
          }
          return new Date($e);
        }(_e), this.$x = _e.x || {}, this.init();
      }, fe.init = function() {
        var _e = this.$d;
        this.$y = _e.getFullYear(), this.$M = _e.getMonth(), this.$D = _e.getDate(), this.$W = _e.getDay(), this.$H = _e.getHours(), this.$m = _e.getMinutes(), this.$s = _e.getSeconds(), this.$ms = _e.getMilliseconds();
      }, fe.$utils = function() {
        return ge;
      }, fe.isValid = function() {
        return this.$d.toString() !== ie;
      }, fe.isSame = function(_e, ve) {
        var $e = ae(_e);
        return this.startOf(ve) <= $e && $e <= this.endOf(ve);
      }, fe.isAfter = function(_e, ve) {
        return ae(_e) < this.startOf(ve);
      }, fe.isBefore = function(_e, ve) {
        return this.endOf(ve) < ae(_e);
      }, fe.$g = function(_e, ve, $e) {
        return ge.u(_e) ? this[ve] : this.set($e, _e);
      }, fe.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, fe.valueOf = function() {
        return this.$d.getTime();
      }, fe.startOf = function(_e, ve) {
        var $e = this, we = !!ge.u(ve) || ve, be = ge.p(_e), Se = function(Oe, Le) {
          var He = ge.w($e.$u ? Date.UTC($e.$y, Le, Oe) : new Date($e.$y, Le, Oe), $e);
          return we ? He : He.endOf(Q);
        }, Ae = function(Oe, Le) {
          return ge.w($e.toDate()[Oe].apply($e.toDate("s"), (we ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Le)), $e);
        }, Te = this.$W, Ne = this.$M, We = this.$D, Ce = "set" + (this.$u ? "UTC" : "");
        switch (be) {
          case X:
            return we ? Se(1, 0) : Se(31, 11);
          case ee:
            return we ? Se(1, Ne) : Se(0, Ne + 1);
          case U:
            var Re = this.$locale().weekStart || 0, Ie = (Te < Re ? Te + 7 : Te) - Re;
            return Se(we ? We - Ie : We + (6 - Ie), Ne);
          case Q:
          case Z:
            return Ae(Ce + "Hours", 0);
          case K:
            return Ae(Ce + "Minutes", 1);
          case G:
            return Ae(Ce + "Seconds", 2);
          case Y:
            return Ae(Ce + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, fe.endOf = function(_e) {
        return this.startOf(_e, !1);
      }, fe.$set = function(_e, ve) {
        var $e, we = ge.p(_e), be = "set" + (this.$u ? "UTC" : ""), Se = ($e = {}, $e[Q] = be + "Date", $e[Z] = be + "Date", $e[ee] = be + "Month", $e[X] = be + "FullYear", $e[K] = be + "Hours", $e[G] = be + "Minutes", $e[Y] = be + "Seconds", $e[F] = be + "Milliseconds", $e)[we], Ae = we === Q ? this.$D + (ve - this.$W) : ve;
        if (we === ee || we === X) {
          var Te = this.clone().set(Z, 1);
          Te.$d[Se](Ae), Te.init(), this.$d = Te.set(Z, Math.min(this.$D, Te.daysInMonth())).$d;
        } else
          Se && this.$d[Se](Ae);
        return this.init(), this;
      }, fe.set = function(_e, ve) {
        return this.clone().$set(_e, ve);
      }, fe.get = function(_e) {
        return this[ge.p(_e)]();
      }, fe.add = function(_e, ve) {
        var $e, we = this;
        _e = Number(_e);
        var be = ge.p(ve), Se = function(Ne) {
          var We = ae(we);
          return ge.w(We.date(We.date() + Math.round(Ne * _e)), we);
        };
        if (be === ee)
          return this.set(ee, this.$M + _e);
        if (be === X)
          return this.set(X, this.$y + _e);
        if (be === Q)
          return Se(1);
        if (be === U)
          return Se(7);
        var Ae = ($e = {}, $e[G] = W, $e[K] = V, $e[Y] = D, $e)[be] || 1, Te = this.$d.getTime() + _e * Ae;
        return ge.w(Te, this);
      }, fe.subtract = function(_e, ve) {
        return this.add(-1 * _e, ve);
      }, fe.format = function(_e) {
        var ve = this, $e = this.$locale();
        if (!this.isValid())
          return $e.invalidDate || ie;
        var we = _e || "YYYY-MM-DDTHH:mm:ssZ", be = ge.z(this), Se = this.$H, Ae = this.$m, Te = this.$M, Ne = $e.weekdays, We = $e.months, Ce = function(Le, He, Ve, Ye) {
          return Le && (Le[He] || Le(ve, we)) || Ve[He].slice(0, Ye);
        }, Re = function(Le) {
          return ge.s(Se % 12 || 12, Le, "0");
        }, Ie = $e.meridiem || function(Le, He, Ve) {
          var Ye = Le < 12 ? "AM" : "PM";
          return Ve ? Ye.toLowerCase() : Ye;
        }, Oe = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: Te + 1, MM: ge.s(Te + 1, 2, "0"), MMM: Ce($e.monthsShort, Te, We, 3), MMMM: Ce(We, Te), D: this.$D, DD: ge.s(this.$D, 2, "0"), d: String(this.$W), dd: Ce($e.weekdaysMin, this.$W, Ne, 2), ddd: Ce($e.weekdaysShort, this.$W, Ne, 3), dddd: Ne[this.$W], H: String(Se), HH: ge.s(Se, 2, "0"), h: Re(1), hh: Re(2), a: Ie(Se, Ae, !0), A: Ie(Se, Ae, !1), m: String(Ae), mm: ge.s(Ae, 2, "0"), s: String(this.$s), ss: ge.s(this.$s, 2, "0"), SSS: ge.s(this.$ms, 3, "0"), Z: be };
        return we.replace(ne, function(Le, He) {
          return He || Oe[Le] || be.replace(":", "");
        });
      }, fe.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, fe.diff = function(_e, ve, $e) {
        var we, be = ge.p(ve), Se = ae(_e), Ae = (Se.utcOffset() - this.utcOffset()) * W, Te = this - Se, Ne = ge.m(this, Se);
        return Ne = (we = {}, we[X] = Ne / 12, we[ee] = Ne, we[J] = Ne / 3, we[U] = (Te - Ae) / 6048e5, we[Q] = (Te - Ae) / 864e5, we[K] = Te / V, we[G] = Te / W, we[Y] = Te / D, we)[be] || Te, $e ? Ne : ge.a(Ne);
      }, fe.daysInMonth = function() {
        return this.endOf(ee).$D;
      }, fe.$locale = function() {
        return pe[this.$L];
      }, fe.locale = function(_e, ve) {
        if (!_e)
          return this.$L;
        var $e = this.clone(), we = se(_e, ve, !0);
        return we && ($e.$L = we), $e;
      }, fe.clone = function() {
        return ge.w(this.$d, this);
      }, fe.toDate = function() {
        return new Date(this.valueOf());
      }, fe.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, fe.toISOString = function() {
        return this.$d.toISOString();
      }, fe.toString = function() {
        return this.$d.toUTCString();
      }, ye;
    }(), Ee = Me.prototype;
    return ae.prototype = Ee, [["$ms", F], ["$s", Y], ["$m", G], ["$H", K], ["$W", Q], ["$M", ee], ["$y", X], ["$D", Z]].forEach(function(ye) {
      Ee[ye[1]] = function(fe) {
        return this.$g(fe, ye[0], ye[1]);
      };
    }), ae.extend = function(ye, fe) {
      return ye.$i || (ye(fe, Me, ae), ye.$i = !0), ae;
    }, ae.locale = se, ae.isDayjs = de, ae.unix = function(ye) {
      return ae(1e3 * ye);
    }, ae.en = pe[ue], ae.Ls = pe, ae.p = {}, ae;
  });
})(dayjs_min);
const getTimeFormat = (E = "00:00:00") => {
  const R = dayjs_minExports(`1989-01-01 ${E}`);
  return {
    hour: R.hour(),
    minute: R.minute(),
    second: R.second()
  };
};
function getTimeList() {
  let E = new Array(24).fill(0), R = new Array(60).fill(0), D = new Array(60).fill(0);
  return E = E.map((W, V) => W + V), R = R.map((W, V) => W + V), D = D.map((W, V) => W + V), { hourList: E, minuteList: R, secondList: D };
}
class TimePanel extends d$3 {
  constructor() {
    super(...arguments);
    me(this, "cellHeight", 24);
    me(this, "ref", y$1());
    me(this, "hourRef", y$1());
    me(this, "minuteRef", y$1());
    me(this, "secondRef", y$1());
    me(this, "state", {
      selectTime: this.props.value || "00:00:00"
    });
  }
  handleMoveTime(D) {
    var V, F, Y;
    const W = "smooth";
    D.hour && this.hourRef.current && ((V = this.hourRef.current) == null || V.scrollTo({ behavior: W, top: D.hour * this.cellHeight })), D.minute && this.minuteRef.current && ((F = this.minuteRef.current) == null || F.scrollTo({ behavior: W, top: D.minute * this.cellHeight })), D.second && this.secondRef.current && ((Y = this.secondRef.current) == null || Y.scrollTo({ behavior: W, top: D.second * this.cellHeight }));
  }
  handleChange(D) {
    this.handleMoveTime(D), this.setState({ selectTime: this.getTimeString(D) });
  }
  getTimeString(D) {
    return this.props.showSeconds ? `${(D == null ? void 0 : D.hour) && this.addZero(D.hour) || "00"}:${(D == null ? void 0 : D.minute) && this.addZero(D.minute) || "00"}:${(D == null ? void 0 : D.second) && this.addZero(D.second) || "00"}` : `${(D == null ? void 0 : D.hour) && this.addZero(D.hour) || "00"}:${(D == null ? void 0 : D.minute) && this.addZero(D.minute) || "00"}`;
  }
  addZero(D) {
    return D < 10 ? `0${D}` : D;
  }
  renderColumn(D, W) {
    const V = getTimeFormat(this.state.selectTime);
    return W.map((F) => {
      const Y = V[D] === F, G = { ...V, [D]: F };
      return /* @__PURE__ */ o$6(
        "button",
        {
          className: classes("btn", "size-sm", "ghost", "flex", { active: Y }),
          type: "button",
          onClick: () => this.handleChange(G),
          children: this.addZero(F)
        },
        `unit-${D}-${F}`
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
    const { showSeconds: D, style: W } = this.props, { hourList: V, minuteList: F, secondList: Y } = getTimeList();
    return /* @__PURE__ */ o$6("div", { className: classes("timepicker-timepanel", "pt-px"), style: W, ref: this.ref, children: [
      /* @__PURE__ */ o$6("div", { className: classes("flex", " justify-around", "p-px", "not-hide-timepicker"), children: [
        /* @__PURE__ */ o$6("div", { className: "overflow-hidden", children: /* @__PURE__ */ o$6("div", { className: "timepicker-timepanel-select-col", ref: this.hourRef, children: this.renderColumn("hour", V) }) }),
        /* @__PURE__ */ o$6("div", { className: "overflow-hidden", children: /* @__PURE__ */ o$6("div", { className: "timepicker-timepanel-select-col", ref: this.minuteRef, children: this.renderColumn("minute", F) }) }),
        D && /* @__PURE__ */ o$6("div", { className: "overflow-hidden", children: /* @__PURE__ */ o$6("div", { className: "timepicker-timepanel-select-col", ref: this.secondRef, children: this.renderColumn("second", Y) }) })
      ] }),
      /* @__PURE__ */ o$6("div", { className: classes("timepicker-timepanel-actions", "flex", "p-px", "justify-between", "align-center"), children: [
        /* @__PURE__ */ o$6("button", { className: classes("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onClear.bind(this), children: "清除" }),
        /* @__PURE__ */ o$6("button", { className: classes("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onSubmit.bind(this), children: "确认" })
      ] })
    ] });
  }
}
const index$d = "";
function getAlignment$1(E) {
  return E.split("-")[1];
}
function getLengthFromAxis$1(E) {
  return E === "y" ? "height" : "width";
}
function getSide$1(E) {
  return E.split("-")[0];
}
function getMainAxisFromPlacement$1(E) {
  return ["top", "bottom"].includes(getSide$1(E)) ? "x" : "y";
}
function computeCoordsFromPlacement$1(E, R, D) {
  let {
    reference: W,
    floating: V
  } = E;
  const F = W.x + W.width / 2 - V.width / 2, Y = W.y + W.height / 2 - V.height / 2, G = getMainAxisFromPlacement$1(R), K = getLengthFromAxis$1(G), Q = W[K] / 2 - V[K] / 2, U = getSide$1(R), ee = G === "x";
  let J;
  switch (U) {
    case "top":
      J = {
        x: F,
        y: W.y - V.height
      };
      break;
    case "bottom":
      J = {
        x: F,
        y: W.y + W.height
      };
      break;
    case "right":
      J = {
        x: W.x + W.width,
        y: Y
      };
      break;
    case "left":
      J = {
        x: W.x - V.width,
        y: Y
      };
      break;
    default:
      J = {
        x: W.x,
        y: W.y
      };
  }
  switch (getAlignment$1(R)) {
    case "start":
      J[G] -= Q * (D && ee ? -1 : 1);
      break;
    case "end":
      J[G] += Q * (D && ee ? -1 : 1);
      break;
  }
  return J;
}
const computePosition$3 = async (E, R, D) => {
  const {
    placement: W = "bottom",
    strategy: V = "absolute",
    middleware: F = [],
    platform: Y
  } = D, G = F.filter(Boolean), K = await (Y.isRTL == null ? void 0 : Y.isRTL(R));
  let Q = await Y.getElementRects({
    reference: E,
    floating: R,
    strategy: V
  }), {
    x: U,
    y: ee
  } = computeCoordsFromPlacement$1(Q, W, K), J = W, X = {}, Z = 0;
  for (let ie = 0; ie < G.length; ie++) {
    const {
      name: te,
      fn: ne
    } = G[ie], {
      x: oe,
      y: le,
      data: ce,
      reset: ue
    } = await ne({
      x: U,
      y: ee,
      initialPlacement: W,
      placement: J,
      strategy: V,
      middlewareData: X,
      rects: Q,
      platform: Y,
      elements: {
        reference: E,
        floating: R
      }
    });
    if (U = oe ?? U, ee = le ?? ee, X = {
      ...X,
      [te]: {
        ...X[te],
        ...ce
      }
    }, ue && Z <= 50) {
      Z++, typeof ue == "object" && (ue.placement && (J = ue.placement), ue.rects && (Q = ue.rects === !0 ? await Y.getElementRects({
        reference: E,
        floating: R,
        strategy: V
      }) : ue.rects), {
        x: U,
        y: ee
      } = computeCoordsFromPlacement$1(Q, J, K)), ie = -1;
      continue;
    }
  }
  return {
    x: U,
    y: ee,
    placement: J,
    strategy: V,
    middlewareData: X
  };
};
function expandPaddingObject$1(E) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...E
  };
}
function getSideObjectFromPadding$1(E) {
  return typeof E != "number" ? expandPaddingObject$1(E) : {
    top: E,
    right: E,
    bottom: E,
    left: E
  };
}
function rectToClientRect$1(E) {
  return {
    ...E,
    top: E.y,
    left: E.x,
    right: E.x + E.width,
    bottom: E.y + E.height
  };
}
async function detectOverflow$1(E, R) {
  var D;
  R === void 0 && (R = {});
  const {
    x: W,
    y: V,
    platform: F,
    rects: Y,
    elements: G,
    strategy: K
  } = E, {
    boundary: Q = "clippingAncestors",
    rootBoundary: U = "viewport",
    elementContext: ee = "floating",
    altBoundary: J = !1,
    padding: X = 0
  } = R, Z = getSideObjectFromPadding$1(X), te = G[J ? ee === "floating" ? "reference" : "floating" : ee], ne = rectToClientRect$1(await F.getClippingRect({
    element: (D = await (F.isElement == null ? void 0 : F.isElement(te))) == null || D ? te : te.contextElement || await (F.getDocumentElement == null ? void 0 : F.getDocumentElement(G.floating)),
    boundary: Q,
    rootBoundary: U,
    strategy: K
  })), oe = ee === "floating" ? {
    ...Y.floating,
    x: W,
    y: V
  } : Y.reference, le = await (F.getOffsetParent == null ? void 0 : F.getOffsetParent(G.floating)), ce = await (F.isElement == null ? void 0 : F.isElement(le)) ? await (F.getScale == null ? void 0 : F.getScale(le)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, ue = rectToClientRect$1(F.convertOffsetParentRelativeRectToViewportRelativeRect ? await F.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: oe,
    offsetParent: le,
    strategy: K
  }) : oe);
  return {
    top: (ne.top - ue.top + Z.top) / ce.y,
    bottom: (ue.bottom - ne.bottom + Z.bottom) / ce.y,
    left: (ne.left - ue.left + Z.left) / ce.x,
    right: (ue.right - ne.right + Z.right) / ce.x
  };
}
const min$3 = Math.min, max$3 = Math.max;
function within$1(E, R, D) {
  return max$3(E, min$3(R, D));
}
const arrow$1 = (E) => ({
  name: "arrow",
  options: E,
  async fn(R) {
    const {
      element: D,
      padding: W = 0
    } = E || {}, {
      x: V,
      y: F,
      placement: Y,
      rects: G,
      platform: K
    } = R;
    if (D == null)
      return {};
    const Q = getSideObjectFromPadding$1(W), U = {
      x: V,
      y: F
    }, ee = getMainAxisFromPlacement$1(Y), J = getLengthFromAxis$1(ee), X = await K.getDimensions(D), Z = ee === "y" ? "top" : "left", ie = ee === "y" ? "bottom" : "right", te = G.reference[J] + G.reference[ee] - U[ee] - G.floating[J], ne = U[ee] - G.reference[ee], oe = await (K.getOffsetParent == null ? void 0 : K.getOffsetParent(D));
    let le = oe ? ee === "y" ? oe.clientHeight || 0 : oe.clientWidth || 0 : 0;
    le === 0 && (le = G.floating[J]);
    const ce = te / 2 - ne / 2, ue = Q[Z], pe = le - X[J] - Q[ie], de = le / 2 - X[J] / 2 + ce, se = within$1(ue, de, pe), ge = getAlignment$1(Y) != null && de != se && G.reference[J] / 2 - (de < ue ? Q[Z] : Q[ie]) - X[J] / 2 < 0 ? de < ue ? ue - de : pe - de : 0;
    return {
      [ee]: U[ee] - ge,
      data: {
        [ee]: se,
        centerOffset: de - se
      }
    };
  }
}), oppositeSideMap$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement$1(E) {
  return E.replace(/left|right|bottom|top/g, (R) => oppositeSideMap$1[R]);
}
function getAlignmentSides$1(E, R, D) {
  D === void 0 && (D = !1);
  const W = getAlignment$1(E), V = getMainAxisFromPlacement$1(E), F = getLengthFromAxis$1(V);
  let Y = V === "x" ? W === (D ? "end" : "start") ? "right" : "left" : W === "start" ? "bottom" : "top";
  return R.reference[F] > R.floating[F] && (Y = getOppositePlacement$1(Y)), {
    main: Y,
    cross: getOppositePlacement$1(Y)
  };
}
const oppositeAlignmentMap$1 = {
  start: "end",
  end: "start"
};
function getOppositeAlignmentPlacement$1(E) {
  return E.replace(/start|end/g, (R) => oppositeAlignmentMap$1[R]);
}
function getExpandedPlacements$1(E) {
  const R = getOppositePlacement$1(E);
  return [getOppositeAlignmentPlacement$1(E), R, getOppositeAlignmentPlacement$1(R)];
}
function getSideList$1(E, R, D) {
  const W = ["left", "right"], V = ["right", "left"], F = ["top", "bottom"], Y = ["bottom", "top"];
  switch (E) {
    case "top":
    case "bottom":
      return D ? R ? V : W : R ? W : V;
    case "left":
    case "right":
      return R ? F : Y;
    default:
      return [];
  }
}
function getOppositeAxisPlacements$1(E, R, D, W) {
  const V = getAlignment$1(E);
  let F = getSideList$1(getSide$1(E), D === "start", W);
  return V && (F = F.map((Y) => Y + "-" + V), R && (F = F.concat(F.map(getOppositeAlignmentPlacement$1)))), F;
}
const flip$1 = function(E) {
  return E === void 0 && (E = {}), {
    name: "flip",
    options: E,
    async fn(R) {
      var D;
      const {
        placement: W,
        middlewareData: V,
        rects: F,
        initialPlacement: Y,
        platform: G,
        elements: K
      } = R, {
        mainAxis: Q = !0,
        crossAxis: U = !0,
        fallbackPlacements: ee,
        fallbackStrategy: J = "bestFit",
        fallbackAxisSideDirection: X = "none",
        flipAlignment: Z = !0,
        ...ie
      } = E, te = getSide$1(W), ne = getSide$1(Y) === Y, oe = await (G.isRTL == null ? void 0 : G.isRTL(K.floating)), le = ee || (ne || !Z ? [getOppositePlacement$1(Y)] : getExpandedPlacements$1(Y));
      !ee && X !== "none" && le.push(...getOppositeAxisPlacements$1(Y, Z, X, oe));
      const ce = [Y, ...le], ue = await detectOverflow$1(R, ie), pe = [];
      let de = ((D = V.flip) == null ? void 0 : D.overflows) || [];
      if (Q && pe.push(ue[te]), U) {
        const {
          main: ge,
          cross: Me
        } = getAlignmentSides$1(W, F, oe);
        pe.push(ue[ge], ue[Me]);
      }
      if (de = [...de, {
        placement: W,
        overflows: pe
      }], !pe.every((ge) => ge <= 0)) {
        var se;
        const ge = (((se = V.flip) == null ? void 0 : se.index) || 0) + 1, Me = ce[ge];
        if (Me)
          return {
            data: {
              index: ge,
              overflows: de
            },
            reset: {
              placement: Me
            }
          };
        let Ee = "bottom";
        switch (J) {
          case "bestFit": {
            var ae;
            const ye = (ae = de.map((fe) => [fe, fe.overflows.filter((_e) => _e > 0).reduce((_e, ve) => _e + ve, 0)]).sort((fe, _e) => fe[1] - _e[1])[0]) == null ? void 0 : ae[0].placement;
            ye && (Ee = ye);
            break;
          }
          case "initialPlacement":
            Ee = Y;
            break;
        }
        if (W !== Ee)
          return {
            reset: {
              placement: Ee
            }
          };
      }
      return {};
    }
  };
};
async function convertValueToCoords$1(E, R) {
  const {
    placement: D,
    platform: W,
    elements: V
  } = E, F = await (W.isRTL == null ? void 0 : W.isRTL(V.floating)), Y = getSide$1(D), G = getAlignment$1(D), K = getMainAxisFromPlacement$1(D) === "x", Q = ["left", "top"].includes(Y) ? -1 : 1, U = F && K ? -1 : 1, ee = typeof R == "function" ? R(E) : R;
  let {
    mainAxis: J,
    crossAxis: X,
    alignmentAxis: Z
  } = typeof ee == "number" ? {
    mainAxis: ee,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...ee
  };
  return G && typeof Z == "number" && (X = G === "end" ? Z * -1 : Z), K ? {
    x: X * U,
    y: J * Q
  } : {
    x: J * Q,
    y: X * U
  };
}
const offset$1 = function(E) {
  return E === void 0 && (E = 0), {
    name: "offset",
    options: E,
    async fn(R) {
      const {
        x: D,
        y: W
      } = R, V = await convertValueToCoords$1(R, E);
      return {
        x: D + V.x,
        y: W + V.y,
        data: V
      };
    }
  };
};
function getWindow$1(E) {
  var R;
  return ((R = E.ownerDocument) == null ? void 0 : R.defaultView) || window;
}
function getComputedStyle$1$1(E) {
  return getWindow$1(E).getComputedStyle(E);
}
function getNodeName$1(E) {
  return isNode$1(E) ? (E.nodeName || "").toLowerCase() : "";
}
let uaString$1;
function getUAString$1() {
  if (uaString$1)
    return uaString$1;
  const E = navigator.userAgentData;
  return E && Array.isArray(E.brands) ? (uaString$1 = E.brands.map((R) => R.brand + "/" + R.version).join(" "), uaString$1) : navigator.userAgent;
}
function isHTMLElement$1(E) {
  return E instanceof getWindow$1(E).HTMLElement;
}
function isElement$1(E) {
  return E instanceof getWindow$1(E).Element;
}
function isNode$1(E) {
  return E instanceof getWindow$1(E).Node;
}
function isShadowRoot$1(E) {
  if (typeof ShadowRoot > "u")
    return !1;
  const R = getWindow$1(E).ShadowRoot;
  return E instanceof R || E instanceof ShadowRoot;
}
function isOverflowElement$1(E) {
  const {
    overflow: R,
    overflowX: D,
    overflowY: W,
    display: V
  } = getComputedStyle$1$1(E);
  return /auto|scroll|overlay|hidden|clip/.test(R + W + D) && !["inline", "contents"].includes(V);
}
function isTableElement$1(E) {
  return ["table", "td", "th"].includes(getNodeName$1(E));
}
function isContainingBlock$1(E) {
  const R = /firefox/i.test(getUAString$1()), D = getComputedStyle$1$1(E), W = D.backdropFilter || D.WebkitBackdropFilter;
  return D.transform !== "none" || D.perspective !== "none" || (W ? W !== "none" : !1) || R && D.willChange === "filter" || R && (D.filter ? D.filter !== "none" : !1) || ["transform", "perspective"].some((V) => D.willChange.includes(V)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (V) => {
      const F = D.contain;
      return F != null ? F.includes(V) : !1;
    }
  );
}
function isLayoutViewport$1() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString$1());
}
function isLastTraversableNode$1(E) {
  return ["html", "body", "#document"].includes(getNodeName$1(E));
}
const min$2 = Math.min, max$2 = Math.max, round$1 = Math.round;
function getCssDimensions$1(E) {
  const R = getComputedStyle$1$1(E);
  let D = parseFloat(R.width), W = parseFloat(R.height);
  const V = E.offsetWidth, F = E.offsetHeight, Y = round$1(D) !== V || round$1(W) !== F;
  return Y && (D = V, W = F), {
    width: D,
    height: W,
    fallback: Y
  };
}
function unwrapElement$1(E) {
  return isElement$1(E) ? E : E.contextElement;
}
const FALLBACK_SCALE$1 = {
  x: 1,
  y: 1
};
function getScale$1(E) {
  const R = unwrapElement$1(E);
  if (!isHTMLElement$1(R))
    return FALLBACK_SCALE$1;
  const D = R.getBoundingClientRect(), {
    width: W,
    height: V,
    fallback: F
  } = getCssDimensions$1(R);
  let Y = (F ? round$1(D.width) : D.width) / W, G = (F ? round$1(D.height) : D.height) / V;
  return (!Y || !Number.isFinite(Y)) && (Y = 1), (!G || !Number.isFinite(G)) && (G = 1), {
    x: Y,
    y: G
  };
}
function getBoundingClientRect$1(E, R, D, W) {
  var V, F;
  R === void 0 && (R = !1), D === void 0 && (D = !1);
  const Y = E.getBoundingClientRect(), G = unwrapElement$1(E);
  let K = FALLBACK_SCALE$1;
  R && (W ? isElement$1(W) && (K = getScale$1(W)) : K = getScale$1(E));
  const Q = G ? getWindow$1(G) : window, U = !isLayoutViewport$1() && D;
  let ee = (Y.left + (U && ((V = Q.visualViewport) == null ? void 0 : V.offsetLeft) || 0)) / K.x, J = (Y.top + (U && ((F = Q.visualViewport) == null ? void 0 : F.offsetTop) || 0)) / K.y, X = Y.width / K.x, Z = Y.height / K.y;
  if (G) {
    const ie = getWindow$1(G), te = W && isElement$1(W) ? getWindow$1(W) : W;
    let ne = ie.frameElement;
    for (; ne && W && te !== ie; ) {
      const oe = getScale$1(ne), le = ne.getBoundingClientRect(), ce = getComputedStyle(ne);
      le.x += (ne.clientLeft + parseFloat(ce.paddingLeft)) * oe.x, le.y += (ne.clientTop + parseFloat(ce.paddingTop)) * oe.y, ee *= oe.x, J *= oe.y, X *= oe.x, Z *= oe.y, ee += le.x, J += le.y, ne = getWindow$1(ne).frameElement;
    }
  }
  return {
    width: X,
    height: Z,
    top: J,
    right: ee + X,
    bottom: J + Z,
    left: ee,
    x: ee,
    y: J
  };
}
function getDocumentElement$1(E) {
  return ((isNode$1(E) ? E.ownerDocument : E.document) || window.document).documentElement;
}
function getNodeScroll$1(E) {
  return isElement$1(E) ? {
    scrollLeft: E.scrollLeft,
    scrollTop: E.scrollTop
  } : {
    scrollLeft: E.pageXOffset,
    scrollTop: E.pageYOffset
  };
}
function getWindowScrollBarX$1(E) {
  return getBoundingClientRect$1(getDocumentElement$1(E)).left + getNodeScroll$1(E).scrollLeft;
}
function getRectRelativeToOffsetParent$1(E, R, D) {
  const W = isHTMLElement$1(R), V = getDocumentElement$1(R), F = getBoundingClientRect$1(E, !0, D === "fixed", R);
  let Y = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const G = {
    x: 0,
    y: 0
  };
  if (W || !W && D !== "fixed")
    if ((getNodeName$1(R) !== "body" || isOverflowElement$1(V)) && (Y = getNodeScroll$1(R)), isHTMLElement$1(R)) {
      const K = getBoundingClientRect$1(R, !0);
      G.x = K.x + R.clientLeft, G.y = K.y + R.clientTop;
    } else
      V && (G.x = getWindowScrollBarX$1(V));
  return {
    x: F.left + Y.scrollLeft - G.x,
    y: F.top + Y.scrollTop - G.y,
    width: F.width,
    height: F.height
  };
}
function getParentNode$1(E) {
  if (getNodeName$1(E) === "html")
    return E;
  const R = (
    // Step into the shadow DOM of the parent of a slotted node
    E.assignedSlot || // DOM Element detected
    E.parentNode || // ShadowRoot detected
    (isShadowRoot$1(E) ? E.host : null) || // Fallback
    getDocumentElement$1(E)
  );
  return isShadowRoot$1(R) ? R.host : R;
}
function getTrueOffsetParent$1(E) {
  return !isHTMLElement$1(E) || getComputedStyle$1$1(E).position === "fixed" ? null : E.offsetParent;
}
function getContainingBlock$1(E) {
  let R = getParentNode$1(E);
  for (; isHTMLElement$1(R) && !isLastTraversableNode$1(R); ) {
    if (isContainingBlock$1(R))
      return R;
    R = getParentNode$1(R);
  }
  return null;
}
function getOffsetParent$1(E) {
  const R = getWindow$1(E);
  let D = getTrueOffsetParent$1(E);
  for (; D && isTableElement$1(D) && getComputedStyle$1$1(D).position === "static"; )
    D = getTrueOffsetParent$1(D);
  return D && (getNodeName$1(D) === "html" || getNodeName$1(D) === "body" && getComputedStyle$1$1(D).position === "static" && !isContainingBlock$1(D)) ? R : D || getContainingBlock$1(E) || R;
}
function getDimensions$1(E) {
  return getCssDimensions$1(E);
}
function convertOffsetParentRelativeRectToViewportRelativeRect$1(E) {
  let {
    rect: R,
    offsetParent: D,
    strategy: W
  } = E;
  const V = isHTMLElement$1(D), F = getDocumentElement$1(D);
  if (D === F)
    return R;
  let Y = {
    scrollLeft: 0,
    scrollTop: 0
  }, G = {
    x: 1,
    y: 1
  };
  const K = {
    x: 0,
    y: 0
  };
  if ((V || !V && W !== "fixed") && ((getNodeName$1(D) !== "body" || isOverflowElement$1(F)) && (Y = getNodeScroll$1(D)), isHTMLElement$1(D))) {
    const Q = getBoundingClientRect$1(D);
    G = getScale$1(D), K.x = Q.x + D.clientLeft, K.y = Q.y + D.clientTop;
  }
  return {
    width: R.width * G.x,
    height: R.height * G.y,
    x: R.x * G.x - Y.scrollLeft * G.x + K.x,
    y: R.y * G.y - Y.scrollTop * G.y + K.y
  };
}
function getViewportRect$1(E, R) {
  const D = getWindow$1(E), W = getDocumentElement$1(E), V = D.visualViewport;
  let F = W.clientWidth, Y = W.clientHeight, G = 0, K = 0;
  if (V) {
    F = V.width, Y = V.height;
    const Q = isLayoutViewport$1();
    (Q || !Q && R === "fixed") && (G = V.offsetLeft, K = V.offsetTop);
  }
  return {
    width: F,
    height: Y,
    x: G,
    y: K
  };
}
function getDocumentRect$1(E) {
  var R;
  const D = getDocumentElement$1(E), W = getNodeScroll$1(E), V = (R = E.ownerDocument) == null ? void 0 : R.body, F = max$2(D.scrollWidth, D.clientWidth, V ? V.scrollWidth : 0, V ? V.clientWidth : 0), Y = max$2(D.scrollHeight, D.clientHeight, V ? V.scrollHeight : 0, V ? V.clientHeight : 0);
  let G = -W.scrollLeft + getWindowScrollBarX$1(E);
  const K = -W.scrollTop;
  return getComputedStyle$1$1(V || D).direction === "rtl" && (G += max$2(D.clientWidth, V ? V.clientWidth : 0) - F), {
    width: F,
    height: Y,
    x: G,
    y: K
  };
}
function getNearestOverflowAncestor$1(E) {
  const R = getParentNode$1(E);
  return isLastTraversableNode$1(R) ? E.ownerDocument.body : isHTMLElement$1(R) && isOverflowElement$1(R) ? R : getNearestOverflowAncestor$1(R);
}
function getOverflowAncestors$1(E, R) {
  var D;
  R === void 0 && (R = []);
  const W = getNearestOverflowAncestor$1(E), V = W === ((D = E.ownerDocument) == null ? void 0 : D.body), F = getWindow$1(W);
  return V ? R.concat(F, F.visualViewport || [], isOverflowElement$1(W) ? W : []) : R.concat(W, getOverflowAncestors$1(W));
}
function getInnerBoundingClientRect$1(E, R) {
  const D = getBoundingClientRect$1(E, !0, R === "fixed"), W = D.top + E.clientTop, V = D.left + E.clientLeft, F = isHTMLElement$1(E) ? getScale$1(E) : {
    x: 1,
    y: 1
  }, Y = E.clientWidth * F.x, G = E.clientHeight * F.y, K = V * F.x, Q = W * F.y;
  return {
    top: Q,
    left: K,
    right: K + Y,
    bottom: Q + G,
    x: K,
    y: Q,
    width: Y,
    height: G
  };
}
function getClientRectFromClippingAncestor$1(E, R, D) {
  return R === "viewport" ? rectToClientRect$1(getViewportRect$1(E, D)) : isElement$1(R) ? getInnerBoundingClientRect$1(R, D) : rectToClientRect$1(getDocumentRect$1(getDocumentElement$1(E)));
}
function getClippingElementAncestors$1(E, R) {
  const D = R.get(E);
  if (D)
    return D;
  let W = getOverflowAncestors$1(E).filter((G) => isElement$1(G) && getNodeName$1(G) !== "body"), V = null;
  const F = getComputedStyle$1$1(E).position === "fixed";
  let Y = F ? getParentNode$1(E) : E;
  for (; isElement$1(Y) && !isLastTraversableNode$1(Y); ) {
    const G = getComputedStyle$1$1(Y), K = isContainingBlock$1(Y);
    (F ? !K && !V : !K && G.position === "static" && !!V && ["absolute", "fixed"].includes(V.position)) ? W = W.filter((U) => U !== Y) : V = G, Y = getParentNode$1(Y);
  }
  return R.set(E, W), W;
}
function getClippingRect$1(E) {
  let {
    element: R,
    boundary: D,
    rootBoundary: W,
    strategy: V
  } = E;
  const Y = [...D === "clippingAncestors" ? getClippingElementAncestors$1(R, this._c) : [].concat(D), W], G = Y[0], K = Y.reduce((Q, U) => {
    const ee = getClientRectFromClippingAncestor$1(R, U, V);
    return Q.top = max$2(ee.top, Q.top), Q.right = min$2(ee.right, Q.right), Q.bottom = min$2(ee.bottom, Q.bottom), Q.left = max$2(ee.left, Q.left), Q;
  }, getClientRectFromClippingAncestor$1(R, G, V));
  return {
    width: K.right - K.left,
    height: K.bottom - K.top,
    x: K.left,
    y: K.top
  };
}
const platform$1 = {
  getClippingRect: getClippingRect$1,
  convertOffsetParentRelativeRectToViewportRelativeRect: convertOffsetParentRelativeRectToViewportRelativeRect$1,
  isElement: isElement$1,
  getDimensions: getDimensions$1,
  getOffsetParent: getOffsetParent$1,
  getDocumentElement: getDocumentElement$1,
  getScale: getScale$1,
  async getElementRects(E) {
    let {
      reference: R,
      floating: D,
      strategy: W
    } = E;
    const V = this.getOffsetParent || getOffsetParent$1, F = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent$1(R, await V(D), W),
      floating: {
        x: 0,
        y: 0,
        ...await F(D)
      }
    };
  },
  getClientRects: (E) => Array.from(E.getClientRects()),
  isRTL: (E) => getComputedStyle$1$1(E).direction === "rtl"
};
function autoUpdate$1(E, R, D, W) {
  W === void 0 && (W = {});
  const {
    ancestorScroll: V = !0,
    ancestorResize: F = !0,
    elementResize: Y = !0,
    animationFrame: G = !1
  } = W, K = V && !G, Q = K || F ? [...isElement$1(E) ? getOverflowAncestors$1(E) : E.contextElement ? getOverflowAncestors$1(E.contextElement) : [], ...getOverflowAncestors$1(R)] : [];
  Q.forEach((Z) => {
    K && Z.addEventListener("scroll", D, {
      passive: !0
    }), F && Z.addEventListener("resize", D);
  });
  let U = null;
  if (Y) {
    let Z = !0;
    U = new ResizeObserver(() => {
      Z || D(), Z = !1;
    }), isElement$1(E) && !G && U.observe(E), !isElement$1(E) && E.contextElement && !G && U.observe(E.contextElement), U.observe(R);
  }
  let ee, J = G ? getBoundingClientRect$1(E) : null;
  G && X();
  function X() {
    const Z = getBoundingClientRect$1(E);
    J && (Z.x !== J.x || Z.y !== J.y || Z.width !== J.width || Z.height !== J.height) && D(), J = Z, ee = requestAnimationFrame(X);
  }
  return D(), () => {
    var Z;
    Q.forEach((ie) => {
      K && ie.removeEventListener("scroll", D), F && ie.removeEventListener("resize", D);
    }), (Z = U) == null || Z.disconnect(), U = null, G && cancelAnimationFrame(ee);
  };
}
const computePosition$2 = (E, R, D) => {
  const W = /* @__PURE__ */ new Map(), V = {
    platform: platform$1,
    ...D
  }, F = {
    ...V.platform,
    _c: W
  };
  return computePosition$3(E, R, {
    ...V,
    platform: F
  });
};
var Vt, Yt, wt, An, Ue, Mn, Ln, gr, To, Zr, Ao, Qr, Mo, ei, Lo, ti, No, ni, Ro, oi, Do, ri, Po;
const $t = class extends ComponentBase {
  constructor() {
    super(...arguments);
    he(this, Ln);
    he(this, To);
    he(this, Ao);
    he(this, Mo);
    he(this, Lo);
    he(this, No);
    he(this, Ro);
    he(this, Do);
    he(this, Vt, void 0);
    he(this, Yt, 0);
    he(this, wt, void 0);
    he(this, An, void 0);
    he(this, Ue, void 0);
    he(this, Mn, void 0);
    me(this, "hideLater", () => {
      re(this, Po).call(this), xe(this, Yt, window.setTimeout(this.hide.bind(this), 100));
    });
    he(this, Po, () => {
      clearTimeout(re(this, Yt)), xe(this, Yt, 0);
    });
  }
  get isShown() {
    var D;
    return (D = re(this, wt)) == null ? void 0 : D.classList.contains($t.CLASS_SHOW);
  }
  get timepicker() {
    return re(this, wt) || ke(this, Ao, Qr).call(this);
  }
  get trigger() {
    return re(this, An) || this.element;
  }
  get elementShowClass() {
    return `with-${$t.NAME}-show`;
  }
  show(D) {
    return xe(this, An, D), !this.timepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.timepicker.classList.add($t.CLASS_SHOW), ke(this, Ro, oi).call(this), !0);
  }
  hide() {
    var D, W;
    return (D = re(this, Mn)) == null || D.call(this), this.element.classList.remove(this.elementShowClass), (W = re(this, wt)) == null || W.classList.remove($t.CLASS_SHOW), !0;
  }
  toggle(D) {
    return this.isShown ? this.hide() : this.show(D);
  }
  static show(D) {
    var Y;
    const { event: W, ...V } = D, F = this.ensure(document.body);
    return Object.keys(V).length && F.setOptions(V), F.show(W), (Y = W == null ? void 0 : W.stopPropagation) == null || Y.call(W), F;
  }
  static hide() {
    const D = this.get(document.body);
    return D == null || D.hide(), D;
  }
  static clear(D) {
    var K, Q;
    D instanceof Event && (D = { event: D });
    const { event: W, exclude: V, ignoreSelector: F = ".not-hide-timepicker" } = D || {};
    if (W && F && ((Q = (K = W.target).closest) != null && Q.call(K, F)))
      return;
    const Y = this.getAll().entries(), G = new Set(V || []);
    for (const [U, ee] of Y)
      G.has(U) || ee.hide();
  }
};
let Timepicker = $t;
Vt = new WeakMap(), Yt = new WeakMap(), wt = new WeakMap(), An = new WeakMap(), Ue = new WeakMap(), Mn = new WeakMap(), Ln = new WeakSet(), gr = function() {
  const { arrow: D } = this.options;
  return typeof D == "number" ? D : 8;
}, To = new WeakSet(), Zr = function() {
  const D = ke(this, Ln, gr).call(this);
  return xe(this, Ue, document.createElement("div")), re(this, Ue).style.position = "absolute", re(this, Ue).style.width = `${D}px`, re(this, Ue).style.height = `${D}px`, re(this, Ue).style.transform = "rotate(45deg)", re(this, Ue);
}, Ao = new WeakSet(), Qr = function() {
  const D = $t.CLASSNAME, W = document.createElement("div");
  return W.classList.add(D), P(h$1(TimePanel, { ...this.options }), W), this.options.arrow && W.append(ke(this, To, Zr).call(this)), W.style.width = "max-content", W.style.position = this.options.strategy, W.style.top = "0", W.style.left = "0", document.body.appendChild(W), xe(this, wt, W), W;
}, Mo = new WeakSet(), ei = function() {
  var Y;
  const D = ke(this, Ln, gr).call(this), { strategy: W, placement: V } = this.options, F = {
    middleware: [offset$1(D), flip$1()],
    strategy: W,
    placement: V
  };
  return this.options.arrow && re(this, Ue) && ((Y = F.middleware) == null || Y.push(arrow$1({ element: re(this, Ue) }))), F;
}, Lo = new WeakSet(), ti = function(D) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[D];
}, No = new WeakSet(), ni = function(D) {
  return D === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : D === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : D === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
}, Ro = new WeakSet(), oi = function() {
  const D = ke(this, Mo, ei).call(this), W = ke(this, Do, ri).call(this);
  xe(this, Mn, autoUpdate$1(W, this.timepicker, () => {
    computePosition$2(W, this.timepicker, D).then(({ x: V, y: F, middlewareData: Y, placement: G }) => {
      Object.assign(this.timepicker.style, {
        left: `${V}px`,
        top: `${F}px`
      });
      const K = G.split("-")[0], Q = ke(this, Lo, ti).call(this, K);
      if (Y.arrow && re(this, Ue)) {
        const { x: U, y: ee } = Y.arrow;
        Object.assign(re(this, Ue).style, {
          left: U != null ? `${U}px` : "",
          top: ee != null ? `${ee}px` : "",
          [Q]: `${-re(this, Ue).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...ke(this, No, ni).call(this, K)
        });
      }
    });
  }));
}, Do = new WeakSet(), ri = function() {
  return re(this, Vt) || xe(this, Vt, {
    getBoundingClientRect: () => {
      const { element: D } = this;
      if (D instanceof MouseEvent) {
        const { clientX: W, clientY: V } = D;
        return {
          width: 0,
          height: 0,
          top: V,
          right: W,
          bottom: V,
          left: W
        };
      }
      return D instanceof HTMLElement ? D.getBoundingClientRect() : D;
    },
    contextElement: this.element
  }), re(this, Vt);
}, Po = new WeakMap(), me(Timepicker, "NAME", "timepicker"), me(Timepicker, "CLASSNAME", "timepicker"), me(Timepicker, "CLASS_SHOW", "show"), me(Timepicker, "MENU_SELECTOR", ".form-time input:not(.disabled):not(:disabled)"), me(Timepicker, "DEFAULT", {
  value: dayjs_minExports().format("HH:mm:ss"),
  showSeconds: !1,
  placement: "bottom-start",
  strategy: "absolute",
  arrow: !0
});
document.addEventListener("click", function(E) {
  const D = E.target.closest(Timepicker.MENU_SELECTOR);
  D ? Timepicker.ensure(D).toggle() : Timepicker.clear({ event: E });
});
const handleScroll = (E) => {
  const R = document.getElementsByClassName("with-timepicker-show")[0];
  if (!R)
    return;
  const D = typeof R.closest == "function" ? R.closest(Timepicker.MENU_SELECTOR) : null;
  !D || !E.target.contains(D) || Timepicker.clear({ event: E });
};
window.addEventListener("scroll", handleScroll, !0);
class Toolbar extends ComponentFromReact {
}
me(Toolbar, "NAME", "toolbar"), me(Toolbar, "Component", Toolbar$1);
const index$c = "";
function getAlignment(E) {
  return E.split("-")[1];
}
function getLengthFromAxis(E) {
  return E === "y" ? "height" : "width";
}
function getSide(E) {
  return E.split("-")[0];
}
function getMainAxisFromPlacement(E) {
  return ["top", "bottom"].includes(getSide(E)) ? "x" : "y";
}
function computeCoordsFromPlacement(E, R, D) {
  let {
    reference: W,
    floating: V
  } = E;
  const F = W.x + W.width / 2 - V.width / 2, Y = W.y + W.height / 2 - V.height / 2, G = getMainAxisFromPlacement(R), K = getLengthFromAxis(G), Q = W[K] / 2 - V[K] / 2, U = getSide(R), ee = G === "x";
  let J;
  switch (U) {
    case "top":
      J = {
        x: F,
        y: W.y - V.height
      };
      break;
    case "bottom":
      J = {
        x: F,
        y: W.y + W.height
      };
      break;
    case "right":
      J = {
        x: W.x + W.width,
        y: Y
      };
      break;
    case "left":
      J = {
        x: W.x - V.width,
        y: Y
      };
      break;
    default:
      J = {
        x: W.x,
        y: W.y
      };
  }
  switch (getAlignment(R)) {
    case "start":
      J[G] -= Q * (D && ee ? -1 : 1);
      break;
    case "end":
      J[G] += Q * (D && ee ? -1 : 1);
      break;
  }
  return J;
}
const computePosition$1 = async (E, R, D) => {
  const {
    placement: W = "bottom",
    strategy: V = "absolute",
    middleware: F = [],
    platform: Y
  } = D, G = F.filter(Boolean), K = await (Y.isRTL == null ? void 0 : Y.isRTL(R));
  let Q = await Y.getElementRects({
    reference: E,
    floating: R,
    strategy: V
  }), {
    x: U,
    y: ee
  } = computeCoordsFromPlacement(Q, W, K), J = W, X = {}, Z = 0;
  for (let ie = 0; ie < G.length; ie++) {
    const {
      name: te,
      fn: ne
    } = G[ie], {
      x: oe,
      y: le,
      data: ce,
      reset: ue
    } = await ne({
      x: U,
      y: ee,
      initialPlacement: W,
      placement: J,
      strategy: V,
      middlewareData: X,
      rects: Q,
      platform: Y,
      elements: {
        reference: E,
        floating: R
      }
    });
    if (U = oe ?? U, ee = le ?? ee, X = {
      ...X,
      [te]: {
        ...X[te],
        ...ce
      }
    }, ue && Z <= 50) {
      Z++, typeof ue == "object" && (ue.placement && (J = ue.placement), ue.rects && (Q = ue.rects === !0 ? await Y.getElementRects({
        reference: E,
        floating: R,
        strategy: V
      }) : ue.rects), {
        x: U,
        y: ee
      } = computeCoordsFromPlacement(Q, J, K)), ie = -1;
      continue;
    }
  }
  return {
    x: U,
    y: ee,
    placement: J,
    strategy: V,
    middlewareData: X
  };
};
function expandPaddingObject(E) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...E
  };
}
function getSideObjectFromPadding(E) {
  return typeof E != "number" ? expandPaddingObject(E) : {
    top: E,
    right: E,
    bottom: E,
    left: E
  };
}
function rectToClientRect(E) {
  return {
    ...E,
    top: E.y,
    left: E.x,
    right: E.x + E.width,
    bottom: E.y + E.height
  };
}
async function detectOverflow(E, R) {
  var D;
  R === void 0 && (R = {});
  const {
    x: W,
    y: V,
    platform: F,
    rects: Y,
    elements: G,
    strategy: K
  } = E, {
    boundary: Q = "clippingAncestors",
    rootBoundary: U = "viewport",
    elementContext: ee = "floating",
    altBoundary: J = !1,
    padding: X = 0
  } = R, Z = getSideObjectFromPadding(X), te = G[J ? ee === "floating" ? "reference" : "floating" : ee], ne = rectToClientRect(await F.getClippingRect({
    element: (D = await (F.isElement == null ? void 0 : F.isElement(te))) == null || D ? te : te.contextElement || await (F.getDocumentElement == null ? void 0 : F.getDocumentElement(G.floating)),
    boundary: Q,
    rootBoundary: U,
    strategy: K
  })), oe = ee === "floating" ? {
    ...Y.floating,
    x: W,
    y: V
  } : Y.reference, le = await (F.getOffsetParent == null ? void 0 : F.getOffsetParent(G.floating)), ce = await (F.isElement == null ? void 0 : F.isElement(le)) ? await (F.getScale == null ? void 0 : F.getScale(le)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, ue = rectToClientRect(F.convertOffsetParentRelativeRectToViewportRelativeRect ? await F.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: oe,
    offsetParent: le,
    strategy: K
  }) : oe);
  return {
    top: (ne.top - ue.top + Z.top) / ce.y,
    bottom: (ue.bottom - ne.bottom + Z.bottom) / ce.y,
    left: (ne.left - ue.left + Z.left) / ce.x,
    right: (ue.right - ne.right + Z.right) / ce.x
  };
}
const min$1 = Math.min, max$1 = Math.max;
function within(E, R, D) {
  return max$1(E, min$1(R, D));
}
const arrow = (E) => ({
  name: "arrow",
  options: E,
  async fn(R) {
    const {
      element: D,
      padding: W = 0
    } = E || {}, {
      x: V,
      y: F,
      placement: Y,
      rects: G,
      platform: K
    } = R;
    if (D == null)
      return {};
    const Q = getSideObjectFromPadding(W), U = {
      x: V,
      y: F
    }, ee = getMainAxisFromPlacement(Y), J = getLengthFromAxis(ee), X = await K.getDimensions(D), Z = ee === "y" ? "top" : "left", ie = ee === "y" ? "bottom" : "right", te = G.reference[J] + G.reference[ee] - U[ee] - G.floating[J], ne = U[ee] - G.reference[ee], oe = await (K.getOffsetParent == null ? void 0 : K.getOffsetParent(D));
    let le = oe ? ee === "y" ? oe.clientHeight || 0 : oe.clientWidth || 0 : 0;
    le === 0 && (le = G.floating[J]);
    const ce = te / 2 - ne / 2, ue = Q[Z], pe = le - X[J] - Q[ie], de = le / 2 - X[J] / 2 + ce, se = within(ue, de, pe), ge = getAlignment(Y) != null && de != se && G.reference[J] / 2 - (de < ue ? Q[Z] : Q[ie]) - X[J] / 2 < 0 ? de < ue ? ue - de : pe - de : 0;
    return {
      [ee]: U[ee] - ge,
      data: {
        [ee]: se,
        centerOffset: de - se
      }
    };
  }
}), oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(E) {
  return E.replace(/left|right|bottom|top/g, (R) => oppositeSideMap[R]);
}
function getAlignmentSides(E, R, D) {
  D === void 0 && (D = !1);
  const W = getAlignment(E), V = getMainAxisFromPlacement(E), F = getLengthFromAxis(V);
  let Y = V === "x" ? W === (D ? "end" : "start") ? "right" : "left" : W === "start" ? "bottom" : "top";
  return R.reference[F] > R.floating[F] && (Y = getOppositePlacement(Y)), {
    main: Y,
    cross: getOppositePlacement(Y)
  };
}
const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function getOppositeAlignmentPlacement(E) {
  return E.replace(/start|end/g, (R) => oppositeAlignmentMap[R]);
}
function getExpandedPlacements(E) {
  const R = getOppositePlacement(E);
  return [getOppositeAlignmentPlacement(E), R, getOppositeAlignmentPlacement(R)];
}
function getSideList(E, R, D) {
  const W = ["left", "right"], V = ["right", "left"], F = ["top", "bottom"], Y = ["bottom", "top"];
  switch (E) {
    case "top":
    case "bottom":
      return D ? R ? V : W : R ? W : V;
    case "left":
    case "right":
      return R ? F : Y;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(E, R, D, W) {
  const V = getAlignment(E);
  let F = getSideList(getSide(E), D === "start", W);
  return V && (F = F.map((Y) => Y + "-" + V), R && (F = F.concat(F.map(getOppositeAlignmentPlacement)))), F;
}
const flip = function(E) {
  return E === void 0 && (E = {}), {
    name: "flip",
    options: E,
    async fn(R) {
      var D;
      const {
        placement: W,
        middlewareData: V,
        rects: F,
        initialPlacement: Y,
        platform: G,
        elements: K
      } = R, {
        mainAxis: Q = !0,
        crossAxis: U = !0,
        fallbackPlacements: ee,
        fallbackStrategy: J = "bestFit",
        fallbackAxisSideDirection: X = "none",
        flipAlignment: Z = !0,
        ...ie
      } = E, te = getSide(W), ne = getSide(Y) === Y, oe = await (G.isRTL == null ? void 0 : G.isRTL(K.floating)), le = ee || (ne || !Z ? [getOppositePlacement(Y)] : getExpandedPlacements(Y));
      !ee && X !== "none" && le.push(...getOppositeAxisPlacements(Y, Z, X, oe));
      const ce = [Y, ...le], ue = await detectOverflow(R, ie), pe = [];
      let de = ((D = V.flip) == null ? void 0 : D.overflows) || [];
      if (Q && pe.push(ue[te]), U) {
        const {
          main: ge,
          cross: Me
        } = getAlignmentSides(W, F, oe);
        pe.push(ue[ge], ue[Me]);
      }
      if (de = [...de, {
        placement: W,
        overflows: pe
      }], !pe.every((ge) => ge <= 0)) {
        var se;
        const ge = (((se = V.flip) == null ? void 0 : se.index) || 0) + 1, Me = ce[ge];
        if (Me)
          return {
            data: {
              index: ge,
              overflows: de
            },
            reset: {
              placement: Me
            }
          };
        let Ee = "bottom";
        switch (J) {
          case "bestFit": {
            var ae;
            const ye = (ae = de.map((fe) => [fe, fe.overflows.filter((_e) => _e > 0).reduce((_e, ve) => _e + ve, 0)]).sort((fe, _e) => fe[1] - _e[1])[0]) == null ? void 0 : ae[0].placement;
            ye && (Ee = ye);
            break;
          }
          case "initialPlacement":
            Ee = Y;
            break;
        }
        if (W !== Ee)
          return {
            reset: {
              placement: Ee
            }
          };
      }
      return {};
    }
  };
};
async function convertValueToCoords(E, R) {
  const {
    placement: D,
    platform: W,
    elements: V
  } = E, F = await (W.isRTL == null ? void 0 : W.isRTL(V.floating)), Y = getSide(D), G = getAlignment(D), K = getMainAxisFromPlacement(D) === "x", Q = ["left", "top"].includes(Y) ? -1 : 1, U = F && K ? -1 : 1, ee = typeof R == "function" ? R(E) : R;
  let {
    mainAxis: J,
    crossAxis: X,
    alignmentAxis: Z
  } = typeof ee == "number" ? {
    mainAxis: ee,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...ee
  };
  return G && typeof Z == "number" && (X = G === "end" ? Z * -1 : Z), K ? {
    x: X * U,
    y: J * Q
  } : {
    x: J * Q,
    y: X * U
  };
}
const offset = function(E) {
  return E === void 0 && (E = 0), {
    name: "offset",
    options: E,
    async fn(R) {
      const {
        x: D,
        y: W
      } = R, V = await convertValueToCoords(R, E);
      return {
        x: D + V.x,
        y: W + V.y,
        data: V
      };
    }
  };
};
function getWindow(E) {
  var R;
  return ((R = E.ownerDocument) == null ? void 0 : R.defaultView) || window;
}
function getComputedStyle$1(E) {
  return getWindow(E).getComputedStyle(E);
}
function getNodeName(E) {
  return isNode(E) ? (E.nodeName || "").toLowerCase() : "";
}
let uaString;
function getUAString() {
  if (uaString)
    return uaString;
  const E = navigator.userAgentData;
  return E && Array.isArray(E.brands) ? (uaString = E.brands.map((R) => R.brand + "/" + R.version).join(" "), uaString) : navigator.userAgent;
}
function isHTMLElement(E) {
  return E instanceof getWindow(E).HTMLElement;
}
function isElement(E) {
  return E instanceof getWindow(E).Element;
}
function isNode(E) {
  return E instanceof getWindow(E).Node;
}
function isShadowRoot(E) {
  if (typeof ShadowRoot > "u")
    return !1;
  const R = getWindow(E).ShadowRoot;
  return E instanceof R || E instanceof ShadowRoot;
}
function isOverflowElement(E) {
  const {
    overflow: R,
    overflowX: D,
    overflowY: W,
    display: V
  } = getComputedStyle$1(E);
  return /auto|scroll|overlay|hidden|clip/.test(R + W + D) && !["inline", "contents"].includes(V);
}
function isTableElement(E) {
  return ["table", "td", "th"].includes(getNodeName(E));
}
function isContainingBlock(E) {
  const R = /firefox/i.test(getUAString()), D = getComputedStyle$1(E), W = D.backdropFilter || D.WebkitBackdropFilter;
  return D.transform !== "none" || D.perspective !== "none" || (W ? W !== "none" : !1) || R && D.willChange === "filter" || R && (D.filter ? D.filter !== "none" : !1) || ["transform", "perspective"].some((V) => D.willChange.includes(V)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (V) => {
      const F = D.contain;
      return F != null ? F.includes(V) : !1;
    }
  );
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function isLastTraversableNode(E) {
  return ["html", "body", "#document"].includes(getNodeName(E));
}
const min = Math.min, max = Math.max, round = Math.round;
function getCssDimensions(E) {
  const R = getComputedStyle$1(E);
  let D = parseFloat(R.width), W = parseFloat(R.height);
  const V = E.offsetWidth, F = E.offsetHeight, Y = round(D) !== V || round(W) !== F;
  return Y && (D = V, W = F), {
    width: D,
    height: W,
    fallback: Y
  };
}
function unwrapElement(E) {
  return isElement(E) ? E : E.contextElement;
}
const FALLBACK_SCALE = {
  x: 1,
  y: 1
};
function getScale(E) {
  const R = unwrapElement(E);
  if (!isHTMLElement(R))
    return FALLBACK_SCALE;
  const D = R.getBoundingClientRect(), {
    width: W,
    height: V,
    fallback: F
  } = getCssDimensions(R);
  let Y = (F ? round(D.width) : D.width) / W, G = (F ? round(D.height) : D.height) / V;
  return (!Y || !Number.isFinite(Y)) && (Y = 1), (!G || !Number.isFinite(G)) && (G = 1), {
    x: Y,
    y: G
  };
}
function getBoundingClientRect(E, R, D, W) {
  var V, F;
  R === void 0 && (R = !1), D === void 0 && (D = !1);
  const Y = E.getBoundingClientRect(), G = unwrapElement(E);
  let K = FALLBACK_SCALE;
  R && (W ? isElement(W) && (K = getScale(W)) : K = getScale(E));
  const Q = G ? getWindow(G) : window, U = !isLayoutViewport() && D;
  let ee = (Y.left + (U && ((V = Q.visualViewport) == null ? void 0 : V.offsetLeft) || 0)) / K.x, J = (Y.top + (U && ((F = Q.visualViewport) == null ? void 0 : F.offsetTop) || 0)) / K.y, X = Y.width / K.x, Z = Y.height / K.y;
  if (G) {
    const ie = getWindow(G), te = W && isElement(W) ? getWindow(W) : W;
    let ne = ie.frameElement;
    for (; ne && W && te !== ie; ) {
      const oe = getScale(ne), le = ne.getBoundingClientRect(), ce = getComputedStyle(ne);
      le.x += (ne.clientLeft + parseFloat(ce.paddingLeft)) * oe.x, le.y += (ne.clientTop + parseFloat(ce.paddingTop)) * oe.y, ee *= oe.x, J *= oe.y, X *= oe.x, Z *= oe.y, ee += le.x, J += le.y, ne = getWindow(ne).frameElement;
    }
  }
  return {
    width: X,
    height: Z,
    top: J,
    right: ee + X,
    bottom: J + Z,
    left: ee,
    x: ee,
    y: J
  };
}
function getDocumentElement(E) {
  return ((isNode(E) ? E.ownerDocument : E.document) || window.document).documentElement;
}
function getNodeScroll(E) {
  return isElement(E) ? {
    scrollLeft: E.scrollLeft,
    scrollTop: E.scrollTop
  } : {
    scrollLeft: E.pageXOffset,
    scrollTop: E.pageYOffset
  };
}
function getWindowScrollBarX(E) {
  return getBoundingClientRect(getDocumentElement(E)).left + getNodeScroll(E).scrollLeft;
}
function getRectRelativeToOffsetParent(E, R, D) {
  const W = isHTMLElement(R), V = getDocumentElement(R), F = getBoundingClientRect(E, !0, D === "fixed", R);
  let Y = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const G = {
    x: 0,
    y: 0
  };
  if (W || !W && D !== "fixed")
    if ((getNodeName(R) !== "body" || isOverflowElement(V)) && (Y = getNodeScroll(R)), isHTMLElement(R)) {
      const K = getBoundingClientRect(R, !0);
      G.x = K.x + R.clientLeft, G.y = K.y + R.clientTop;
    } else
      V && (G.x = getWindowScrollBarX(V));
  return {
    x: F.left + Y.scrollLeft - G.x,
    y: F.top + Y.scrollTop - G.y,
    width: F.width,
    height: F.height
  };
}
function getParentNode(E) {
  if (getNodeName(E) === "html")
    return E;
  const R = (
    // Step into the shadow DOM of the parent of a slotted node
    E.assignedSlot || // DOM Element detected
    E.parentNode || // ShadowRoot detected
    (isShadowRoot(E) ? E.host : null) || // Fallback
    getDocumentElement(E)
  );
  return isShadowRoot(R) ? R.host : R;
}
function getTrueOffsetParent(E) {
  return !isHTMLElement(E) || getComputedStyle$1(E).position === "fixed" ? null : E.offsetParent;
}
function getContainingBlock(E) {
  let R = getParentNode(E);
  for (; isHTMLElement(R) && !isLastTraversableNode(R); ) {
    if (isContainingBlock(R))
      return R;
    R = getParentNode(R);
  }
  return null;
}
function getOffsetParent(E) {
  const R = getWindow(E);
  let D = getTrueOffsetParent(E);
  for (; D && isTableElement(D) && getComputedStyle$1(D).position === "static"; )
    D = getTrueOffsetParent(D);
  return D && (getNodeName(D) === "html" || getNodeName(D) === "body" && getComputedStyle$1(D).position === "static" && !isContainingBlock(D)) ? R : D || getContainingBlock(E) || R;
}
function getDimensions(E) {
  return getCssDimensions(E);
}
function convertOffsetParentRelativeRectToViewportRelativeRect(E) {
  let {
    rect: R,
    offsetParent: D,
    strategy: W
  } = E;
  const V = isHTMLElement(D), F = getDocumentElement(D);
  if (D === F)
    return R;
  let Y = {
    scrollLeft: 0,
    scrollTop: 0
  }, G = {
    x: 1,
    y: 1
  };
  const K = {
    x: 0,
    y: 0
  };
  if ((V || !V && W !== "fixed") && ((getNodeName(D) !== "body" || isOverflowElement(F)) && (Y = getNodeScroll(D)), isHTMLElement(D))) {
    const Q = getBoundingClientRect(D);
    G = getScale(D), K.x = Q.x + D.clientLeft, K.y = Q.y + D.clientTop;
  }
  return {
    width: R.width * G.x,
    height: R.height * G.y,
    x: R.x * G.x - Y.scrollLeft * G.x + K.x,
    y: R.y * G.y - Y.scrollTop * G.y + K.y
  };
}
function getViewportRect(E, R) {
  const D = getWindow(E), W = getDocumentElement(E), V = D.visualViewport;
  let F = W.clientWidth, Y = W.clientHeight, G = 0, K = 0;
  if (V) {
    F = V.width, Y = V.height;
    const Q = isLayoutViewport();
    (Q || !Q && R === "fixed") && (G = V.offsetLeft, K = V.offsetTop);
  }
  return {
    width: F,
    height: Y,
    x: G,
    y: K
  };
}
function getDocumentRect(E) {
  var R;
  const D = getDocumentElement(E), W = getNodeScroll(E), V = (R = E.ownerDocument) == null ? void 0 : R.body, F = max(D.scrollWidth, D.clientWidth, V ? V.scrollWidth : 0, V ? V.clientWidth : 0), Y = max(D.scrollHeight, D.clientHeight, V ? V.scrollHeight : 0, V ? V.clientHeight : 0);
  let G = -W.scrollLeft + getWindowScrollBarX(E);
  const K = -W.scrollTop;
  return getComputedStyle$1(V || D).direction === "rtl" && (G += max(D.clientWidth, V ? V.clientWidth : 0) - F), {
    width: F,
    height: Y,
    x: G,
    y: K
  };
}
function getNearestOverflowAncestor(E) {
  const R = getParentNode(E);
  return isLastTraversableNode(R) ? E.ownerDocument.body : isHTMLElement(R) && isOverflowElement(R) ? R : getNearestOverflowAncestor(R);
}
function getOverflowAncestors(E, R) {
  var D;
  R === void 0 && (R = []);
  const W = getNearestOverflowAncestor(E), V = W === ((D = E.ownerDocument) == null ? void 0 : D.body), F = getWindow(W);
  return V ? R.concat(F, F.visualViewport || [], isOverflowElement(W) ? W : []) : R.concat(W, getOverflowAncestors(W));
}
function getInnerBoundingClientRect(E, R) {
  const D = getBoundingClientRect(E, !0, R === "fixed"), W = D.top + E.clientTop, V = D.left + E.clientLeft, F = isHTMLElement(E) ? getScale(E) : {
    x: 1,
    y: 1
  }, Y = E.clientWidth * F.x, G = E.clientHeight * F.y, K = V * F.x, Q = W * F.y;
  return {
    top: Q,
    left: K,
    right: K + Y,
    bottom: Q + G,
    x: K,
    y: Q,
    width: Y,
    height: G
  };
}
function getClientRectFromClippingAncestor(E, R, D) {
  return R === "viewport" ? rectToClientRect(getViewportRect(E, D)) : isElement(R) ? getInnerBoundingClientRect(R, D) : rectToClientRect(getDocumentRect(getDocumentElement(E)));
}
function getClippingElementAncestors(E, R) {
  const D = R.get(E);
  if (D)
    return D;
  let W = getOverflowAncestors(E).filter((G) => isElement(G) && getNodeName(G) !== "body"), V = null;
  const F = getComputedStyle$1(E).position === "fixed";
  let Y = F ? getParentNode(E) : E;
  for (; isElement(Y) && !isLastTraversableNode(Y); ) {
    const G = getComputedStyle$1(Y), K = isContainingBlock(Y);
    (F ? !K && !V : !K && G.position === "static" && !!V && ["absolute", "fixed"].includes(V.position)) ? W = W.filter((U) => U !== Y) : V = G, Y = getParentNode(Y);
  }
  return R.set(E, W), W;
}
function getClippingRect(E) {
  let {
    element: R,
    boundary: D,
    rootBoundary: W,
    strategy: V
  } = E;
  const Y = [...D === "clippingAncestors" ? getClippingElementAncestors(R, this._c) : [].concat(D), W], G = Y[0], K = Y.reduce((Q, U) => {
    const ee = getClientRectFromClippingAncestor(R, U, V);
    return Q.top = max(ee.top, Q.top), Q.right = min(ee.right, Q.right), Q.bottom = min(ee.bottom, Q.bottom), Q.left = max(ee.left, Q.left), Q;
  }, getClientRectFromClippingAncestor(R, G, V));
  return {
    width: K.right - K.left,
    height: K.bottom - K.top,
    x: K.left,
    y: K.top
  };
}
const platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getScale,
  async getElementRects(E) {
    let {
      reference: R,
      floating: D,
      strategy: W
    } = E;
    const V = this.getOffsetParent || getOffsetParent, F = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(R, await V(D), W),
      floating: {
        x: 0,
        y: 0,
        ...await F(D)
      }
    };
  },
  getClientRects: (E) => Array.from(E.getClientRects()),
  isRTL: (E) => getComputedStyle$1(E).direction === "rtl"
};
function autoUpdate(E, R, D, W) {
  W === void 0 && (W = {});
  const {
    ancestorScroll: V = !0,
    ancestorResize: F = !0,
    elementResize: Y = !0,
    animationFrame: G = !1
  } = W, K = V && !G, Q = K || F ? [...isElement(E) ? getOverflowAncestors(E) : E.contextElement ? getOverflowAncestors(E.contextElement) : [], ...getOverflowAncestors(R)] : [];
  Q.forEach((Z) => {
    K && Z.addEventListener("scroll", D, {
      passive: !0
    }), F && Z.addEventListener("resize", D);
  });
  let U = null;
  if (Y) {
    let Z = !0;
    U = new ResizeObserver(() => {
      Z || D(), Z = !1;
    }), isElement(E) && !G && U.observe(E), !isElement(E) && E.contextElement && !G && U.observe(E.contextElement), U.observe(R);
  }
  let ee, J = G ? getBoundingClientRect(E) : null;
  G && X();
  function X() {
    const Z = getBoundingClientRect(E);
    J && (Z.x !== J.x || Z.y !== J.y || Z.width !== J.width || Z.height !== J.height) && D(), J = Z, ee = requestAnimationFrame(X);
  }
  return D(), () => {
    var Z;
    Q.forEach((ie) => {
      K && ie.removeEventListener("scroll", D), F && ie.removeEventListener("resize", D);
    }), (Z = U) == null || Z.disconnect(), U = null, G && cancelAnimationFrame(ee);
  };
}
const computePosition = (E, R, D) => {
  const W = /* @__PURE__ */ new Map(), V = {
    platform,
    ...D
  }, F = {
    ...V.platform,
    _c: W
  };
  return computePosition$1(E, R, {
    ...V,
    platform: F
  });
};
var Gt, qt, Xt, xt, ze, Oo, Nn, Rn, yr, Ho, ii, Io, si, Wo, li, Fo, ci, jo, ai, Bo, _i, Uo, ui, Kt, zo, fi;
const mt = class extends ComponentBase {
  constructor() {
    super(...arguments);
    he(this, Rn);
    he(this, Ho);
    he(this, Io);
    he(this, Wo);
    he(this, Fo);
    he(this, jo);
    he(this, Bo);
    he(this, Uo);
    he(this, zo);
    he(this, Gt, !1);
    he(this, qt, void 0);
    he(this, Xt, 0);
    he(this, xt, void 0);
    he(this, ze, void 0);
    he(this, Oo, void 0);
    he(this, Nn, void 0);
    me(this, "hideLater", () => {
      re(this, Kt).call(this), xe(this, Xt, window.setTimeout(this.hide.bind(this), 100));
    });
    he(this, Kt, () => {
      clearTimeout(re(this, Xt)), xe(this, Xt, 0);
    });
  }
  get isShown() {
    var D;
    return (D = re(this, xt)) == null ? void 0 : D.classList.contains(mt.CLASS_SHOW);
  }
  get tooltip() {
    return re(this, xt) || ke(this, Io, si).call(this);
  }
  get trigger() {
    return re(this, Oo) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${mt.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: D } = this;
    D !== document.body && !D.hasAttribute("data-toggle") && D.setAttribute("data-toggle", "tooltip");
  }
  show(D) {
    return this.setOptions(D), !re(this, Gt) && this.isHover && ke(this, zo, fi).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(mt.CLASS_SHOW), ke(this, Bo, _i).call(this), !0;
  }
  hide() {
    var D, W;
    return (D = re(this, Nn)) == null || D.call(this), this.element.classList.remove(this.elementShowClass), (W = re(this, xt)) == null || W.classList.remove(mt.CLASS_SHOW), !0;
  }
  toggle(D) {
    return this.isShown ? this.hide() : this.show(D);
  }
  destroy() {
    re(this, Gt) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", re(this, Kt)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(D) {
    D instanceof Event && (D = { event: D });
    const { exclude: W } = D || {}, V = this.getAll().entries(), F = new Set(W || []);
    for (const [Y, G] of V)
      F.has(Y) || G.hide();
  }
};
let Tooltip = mt;
Gt = new WeakMap(), qt = new WeakMap(), Xt = new WeakMap(), xt = new WeakMap(), ze = new WeakMap(), Oo = new WeakMap(), Nn = new WeakMap(), Rn = new WeakSet(), yr = function() {
  const { arrow: D } = this.options;
  return typeof D == "number" ? D : 8;
}, Ho = new WeakSet(), ii = function() {
  const D = ke(this, Rn, yr).call(this);
  return xe(this, ze, document.createElement("div")), re(this, ze).style.position = this.options.strategy, re(this, ze).style.width = `${D}px`, re(this, ze).style.height = `${D}px`, re(this, ze).style.transform = "rotate(45deg)", re(this, ze);
}, Io = new WeakSet(), si = function() {
  var V;
  const D = mt.TOOLTIP_CLASS;
  let W;
  if (this.isDynamic) {
    W = document.createElement("div");
    const F = this.options.className ? this.options.className.split(" ") : [];
    let Y = [D, this.options.type || ""];
    Y = Y.concat(F), W.classList.add(...Y), W[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "";
  } else if (this.element) {
    const F = this.element.getAttribute("href") ?? this.element.dataset.target;
    if (F != null && F.startsWith("#") && (W = document.querySelector(F)), !W) {
      const Y = this.element.nextElementSibling;
      Y != null && Y.classList.contains(D) ? W = Y : W = (V = this.element.parentNode) == null ? void 0 : V.querySelector(`.${D}`);
    }
  }
  if (this.options.arrow && (W == null || W.append(ke(this, Ho, ii).call(this))), !W)
    throw new Error("Tooltip: Cannot find tooltip element");
  return W.style.width = "max-content", W.style.position = "absolute", W.style.top = "0", W.style.left = "0", document.body.appendChild(W), xe(this, xt, W), W;
}, Wo = new WeakSet(), li = function() {
  var Y;
  const D = ke(this, Rn, yr).call(this), { strategy: W, placement: V } = this.options, F = {
    middleware: [offset(D), flip()],
    strategy: W,
    placement: V
  };
  return this.options.arrow && re(this, ze) && ((Y = F.middleware) == null || Y.push(arrow({ element: re(this, ze) }))), F;
}, Fo = new WeakSet(), ci = function(D) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[D];
}, jo = new WeakSet(), ai = function(D) {
  return D === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : D === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : D === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
}, Bo = new WeakSet(), _i = function() {
  const D = ke(this, Wo, li).call(this), W = ke(this, Uo, ui).call(this);
  xe(this, Nn, autoUpdate(W, this.tooltip, () => {
    computePosition(W, this.tooltip, D).then(({ x: V, y: F, middlewareData: Y, placement: G }) => {
      Object.assign(this.tooltip.style, {
        left: `${V}px`,
        top: `${F}px`
      });
      const K = G.split("-")[0], Q = ke(this, Fo, ci).call(this, K);
      if (Y.arrow && re(this, ze)) {
        const { x: U, y: ee } = Y.arrow;
        Object.assign(re(this, ze).style, {
          left: U != null ? `${U}px` : "",
          top: ee != null ? `${ee}px` : "",
          [Q]: `${-re(this, ze).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...ke(this, jo, ai).call(this, K)
        });
      }
    });
  }));
}, Uo = new WeakSet(), ui = function() {
  return re(this, qt) || xe(this, qt, {
    getBoundingClientRect: () => {
      const { element: D } = this;
      if (D instanceof MouseEvent) {
        const { clientX: W, clientY: V } = D;
        return {
          width: 0,
          height: 0,
          top: V,
          right: W,
          bottom: V,
          left: W
        };
      }
      return D instanceof HTMLElement ? D.getBoundingClientRect() : D;
    },
    contextElement: this.element
  }), re(this, qt);
}, Kt = new WeakMap(), zo = new WeakSet(), fi = function() {
  const { tooltip: D } = this;
  D.addEventListener("mouseenter", re(this, Kt)), D.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), xe(this, Gt, !0);
}, me(Tooltip, "NAME", "tooltip"), me(Tooltip, "TOOLTIP_CLASS", "tooltip"), me(Tooltip, "CLASS_SHOW", "show"), me(Tooltip, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), me(Tooltip, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(E) {
  var W;
  const R = E.target, D = (W = R.closest) == null ? void 0 : W.call(R, Tooltip.MENU_SELECTOR);
  if (D) {
    const V = Tooltip.ensure(D);
    V.options.trigger === "click" && V.toggle();
  } else
    Tooltip.clear({ event: E });
});
document.addEventListener("mouseover", function(E) {
  var V;
  const R = E.target, D = (V = R.closest) == null ? void 0 : V.call(R, Tooltip.MENU_SELECTOR);
  if (!D)
    return;
  const W = Tooltip.ensure(D);
  W.isHover && W.show();
});
var n$2, l$2, u$2, t$2, o$5, f$2 = {}, e$2 = [], c$2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$2(E, R) {
  for (var D in R)
    E[D] = R[D];
  return E;
}
function a$2(E) {
  var R = E.parentNode;
  R && R.removeChild(E);
}
function v$2(E, R, D, W, V) {
  var F = { type: E, props: R, key: D, ref: W, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: V ?? ++u$2 };
  return V == null && l$2.vnode != null && l$2.vnode(F), F;
}
function p$2(E) {
  return E.children;
}
function d$2(E, R) {
  this.props = E, this.context = R;
}
function _$5(E, R) {
  if (R == null)
    return E.__ ? _$5(E.__, E.__.__k.indexOf(E) + 1) : null;
  for (var D; R < E.__k.length; R++)
    if ((D = E.__k[R]) != null && D.__e != null)
      return D.__e;
  return typeof E.type == "function" ? _$5(E) : null;
}
function k$2(E) {
  var R, D;
  if ((E = E.__) != null && E.__c != null) {
    for (E.__e = E.__c.base = null, R = 0; R < E.__k.length; R++)
      if ((D = E.__k[R]) != null && D.__e != null) {
        E.__e = E.__c.base = D.__e;
        break;
      }
    return k$2(E);
  }
}
function b$2(E) {
  (!E.__d && (E.__d = !0) && t$2.push(E) && !g$2.__r++ || o$5 !== l$2.debounceRendering) && ((o$5 = l$2.debounceRendering) || setTimeout)(g$2);
}
function g$2() {
  for (var E; g$2.__r = t$2.length; )
    E = t$2.sort(function(R, D) {
      return R.__v.__b - D.__v.__b;
    }), t$2 = [], E.some(function(R) {
      var D, W, V, F, Y, G;
      R.__d && (Y = (F = (D = R).__v).__e, (G = D.__P) && (W = [], (V = s$2({}, F)).__v = F.__v + 1, j$2(G, F, V, D.__n, G.ownerSVGElement !== void 0, F.__h != null ? [Y] : null, W, Y ?? _$5(F), F.__h), z$2(W, F), F.__e != Y && k$2(F)));
    });
}
function w$2(E, R, D, W, V, F, Y, G, K, Q) {
  var U, ee, J, X, Z, ie, te, ne = W && W.__k || e$2, oe = ne.length;
  for (D.__k = [], U = 0; U < R.length; U++)
    if ((X = D.__k[U] = (X = R[U]) == null || typeof X == "boolean" ? null : typeof X == "string" || typeof X == "number" || typeof X == "bigint" ? v$2(null, X, null, null, X) : Array.isArray(X) ? v$2(p$2, { children: X }, null, null, null) : X.__b > 0 ? v$2(X.type, X.props, X.key, X.ref ? X.ref : null, X.__v) : X) != null) {
      if (X.__ = D, X.__b = D.__b + 1, (J = ne[U]) === null || J && X.key == J.key && X.type === J.type)
        ne[U] = void 0;
      else
        for (ee = 0; ee < oe; ee++) {
          if ((J = ne[ee]) && X.key == J.key && X.type === J.type) {
            ne[ee] = void 0;
            break;
          }
          J = null;
        }
      j$2(E, X, J = J || f$2, V, F, Y, G, K, Q), Z = X.__e, (ee = X.ref) && J.ref != ee && (te || (te = []), J.ref && te.push(J.ref, null, X), te.push(ee, X.__c || Z, X)), Z != null ? (ie == null && (ie = Z), typeof X.type == "function" && X.__k === J.__k ? X.__d = K = m$2(X, K, E) : K = A$2(E, X, J, ne, Z, K), typeof D.type == "function" && (D.__d = K)) : K && J.__e == K && K.parentNode != E && (K = _$5(J));
    }
  for (D.__e = ie, U = oe; U--; )
    ne[U] != null && N$2(ne[U], ne[U]);
  if (te)
    for (U = 0; U < te.length; U++)
      M$2(te[U], te[++U], te[++U]);
}
function m$2(E, R, D) {
  for (var W, V = E.__k, F = 0; V && F < V.length; F++)
    (W = V[F]) && (W.__ = E, R = typeof W.type == "function" ? m$2(W, R, D) : A$2(D, W, W, V, W.__e, R));
  return R;
}
function A$2(E, R, D, W, V, F) {
  var Y, G, K;
  if (R.__d !== void 0)
    Y = R.__d, R.__d = void 0;
  else if (D == null || V != F || V.parentNode == null)
    e:
      if (F == null || F.parentNode !== E)
        E.appendChild(V), Y = null;
      else {
        for (G = F, K = 0; (G = G.nextSibling) && K < W.length; K += 2)
          if (G == V)
            break e;
        E.insertBefore(V, F), Y = F;
      }
  return Y !== void 0 ? Y : V.nextSibling;
}
function C$2(E, R, D, W, V) {
  var F;
  for (F in D)
    F === "children" || F === "key" || F in R || H$2(E, F, null, D[F], W);
  for (F in R)
    V && typeof R[F] != "function" || F === "children" || F === "key" || F === "value" || F === "checked" || D[F] === R[F] || H$2(E, F, R[F], D[F], W);
}
function $$2(E, R, D) {
  R[0] === "-" ? E.setProperty(R, D) : E[R] = D == null ? "" : typeof D != "number" || c$2.test(R) ? D : D + "px";
}
function H$2(E, R, D, W, V) {
  var F;
  e:
    if (R === "style")
      if (typeof D == "string")
        E.style.cssText = D;
      else {
        if (typeof W == "string" && (E.style.cssText = W = ""), W)
          for (R in W)
            D && R in D || $$2(E.style, R, "");
        if (D)
          for (R in D)
            W && D[R] === W[R] || $$2(E.style, R, D[R]);
      }
    else if (R[0] === "o" && R[1] === "n")
      F = R !== (R = R.replace(/Capture$/, "")), R = R.toLowerCase() in E ? R.toLowerCase().slice(2) : R.slice(2), E.l || (E.l = {}), E.l[R + F] = D, D ? W || E.addEventListener(R, F ? T$2 : I$2, F) : E.removeEventListener(R, F ? T$2 : I$2, F);
    else if (R !== "dangerouslySetInnerHTML") {
      if (V)
        R = R.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (R !== "href" && R !== "list" && R !== "form" && R !== "tabIndex" && R !== "download" && R in E)
        try {
          E[R] = D ?? "";
          break e;
        } catch {
        }
      typeof D == "function" || (D == null || D === !1 && R.indexOf("-") == -1 ? E.removeAttribute(R) : E.setAttribute(R, D));
    }
}
function I$2(E) {
  this.l[E.type + !1](l$2.event ? l$2.event(E) : E);
}
function T$2(E) {
  this.l[E.type + !0](l$2.event ? l$2.event(E) : E);
}
function j$2(E, R, D, W, V, F, Y, G, K) {
  var Q, U, ee, J, X, Z, ie, te, ne, oe, le, ce, ue, pe, de, se = R.type;
  if (R.constructor !== void 0)
    return null;
  D.__h != null && (K = D.__h, G = R.__e = D.__e, R.__h = null, F = [G]), (Q = l$2.__b) && Q(R);
  try {
    e:
      if (typeof se == "function") {
        if (te = R.props, ne = (Q = se.contextType) && W[Q.__c], oe = Q ? ne ? ne.props.value : Q.__ : W, D.__c ? ie = (U = R.__c = D.__c).__ = U.__E : ("prototype" in se && se.prototype.render ? R.__c = U = new se(te, oe) : (R.__c = U = new d$2(te, oe), U.constructor = se, U.render = O$2), ne && ne.sub(U), U.props = te, U.state || (U.state = {}), U.context = oe, U.__n = W, ee = U.__d = !0, U.__h = [], U._sb = []), U.__s == null && (U.__s = U.state), se.getDerivedStateFromProps != null && (U.__s == U.state && (U.__s = s$2({}, U.__s)), s$2(U.__s, se.getDerivedStateFromProps(te, U.__s))), J = U.props, X = U.state, ee)
          se.getDerivedStateFromProps == null && U.componentWillMount != null && U.componentWillMount(), U.componentDidMount != null && U.__h.push(U.componentDidMount);
        else {
          if (se.getDerivedStateFromProps == null && te !== J && U.componentWillReceiveProps != null && U.componentWillReceiveProps(te, oe), !U.__e && U.shouldComponentUpdate != null && U.shouldComponentUpdate(te, U.__s, oe) === !1 || R.__v === D.__v) {
            for (U.props = te, U.state = U.__s, R.__v !== D.__v && (U.__d = !1), U.__v = R, R.__e = D.__e, R.__k = D.__k, R.__k.forEach(function(ae) {
              ae && (ae.__ = R);
            }), le = 0; le < U._sb.length; le++)
              U.__h.push(U._sb[le]);
            U._sb = [], U.__h.length && Y.push(U);
            break e;
          }
          U.componentWillUpdate != null && U.componentWillUpdate(te, U.__s, oe), U.componentDidUpdate != null && U.__h.push(function() {
            U.componentDidUpdate(J, X, Z);
          });
        }
        if (U.context = oe, U.props = te, U.__v = R, U.__P = E, ce = l$2.__r, ue = 0, "prototype" in se && se.prototype.render) {
          for (U.state = U.__s, U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), pe = 0; pe < U._sb.length; pe++)
            U.__h.push(U._sb[pe]);
          U._sb = [];
        } else
          do
            U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), U.state = U.__s;
          while (U.__d && ++ue < 25);
        U.state = U.__s, U.getChildContext != null && (W = s$2(s$2({}, W), U.getChildContext())), ee || U.getSnapshotBeforeUpdate == null || (Z = U.getSnapshotBeforeUpdate(J, X)), de = Q != null && Q.type === p$2 && Q.key == null ? Q.props.children : Q, w$2(E, Array.isArray(de) ? de : [de], R, D, W, V, F, Y, G, K), U.base = R.__e, R.__h = null, U.__h.length && Y.push(U), ie && (U.__E = U.__ = null), U.__e = !1;
      } else
        F == null && R.__v === D.__v ? (R.__k = D.__k, R.__e = D.__e) : R.__e = L$2(D.__e, R, D, W, V, F, Y, K);
    (Q = l$2.diffed) && Q(R);
  } catch (ae) {
    R.__v = null, (K || F != null) && (R.__e = G, R.__h = !!K, F[F.indexOf(G)] = null), l$2.__e(ae, R, D);
  }
}
function z$2(E, R) {
  l$2.__c && l$2.__c(R, E), E.some(function(D) {
    try {
      E = D.__h, D.__h = [], E.some(function(W) {
        W.call(D);
      });
    } catch (W) {
      l$2.__e(W, D.__v);
    }
  });
}
function L$2(E, R, D, W, V, F, Y, G) {
  var K, Q, U, ee = D.props, J = R.props, X = R.type, Z = 0;
  if (X === "svg" && (V = !0), F != null) {
    for (; Z < F.length; Z++)
      if ((K = F[Z]) && "setAttribute" in K == !!X && (X ? K.localName === X : K.nodeType === 3)) {
        E = K, F[Z] = null;
        break;
      }
  }
  if (E == null) {
    if (X === null)
      return document.createTextNode(J);
    E = V ? document.createElementNS("http://www.w3.org/2000/svg", X) : document.createElement(X, J.is && J), F = null, G = !1;
  }
  if (X === null)
    ee === J || G && E.data === J || (E.data = J);
  else {
    if (F = F && n$2.call(E.childNodes), Q = (ee = D.props || f$2).dangerouslySetInnerHTML, U = J.dangerouslySetInnerHTML, !G) {
      if (F != null)
        for (ee = {}, Z = 0; Z < E.attributes.length; Z++)
          ee[E.attributes[Z].name] = E.attributes[Z].value;
      (U || Q) && (U && (Q && U.__html == Q.__html || U.__html === E.innerHTML) || (E.innerHTML = U && U.__html || ""));
    }
    if (C$2(E, J, ee, V, G), U)
      R.__k = [];
    else if (Z = R.props.children, w$2(E, Array.isArray(Z) ? Z : [Z], R, D, W, V && X !== "foreignObject", F, Y, F ? F[0] : D.__k && _$5(D, 0), G), F != null)
      for (Z = F.length; Z--; )
        F[Z] != null && a$2(F[Z]);
    G || ("value" in J && (Z = J.value) !== void 0 && (Z !== E.value || X === "progress" && !Z || X === "option" && Z !== ee.value) && H$2(E, "value", Z, ee.value, !1), "checked" in J && (Z = J.checked) !== void 0 && Z !== E.checked && H$2(E, "checked", Z, ee.checked, !1));
  }
  return E;
}
function M$2(E, R, D) {
  try {
    typeof E == "function" ? E(R) : E.current = R;
  } catch (W) {
    l$2.__e(W, D);
  }
}
function N$2(E, R, D) {
  var W, V;
  if (l$2.unmount && l$2.unmount(E), (W = E.ref) && (W.current && W.current !== E.__e || M$2(W, null, R)), (W = E.__c) != null) {
    if (W.componentWillUnmount)
      try {
        W.componentWillUnmount();
      } catch (F) {
        l$2.__e(F, R);
      }
    W.base = W.__P = null, E.__c = void 0;
  }
  if (W = E.__k)
    for (V = 0; V < W.length; V++)
      W[V] && N$2(W[V], R, D || typeof E.type != "function");
  D || E.__e == null || a$2(E.__e), E.__ = E.__e = E.__d = void 0;
}
function O$2(E, R, D) {
  return this.constructor(E, D);
}
n$2 = e$2.slice, l$2 = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} }, u$2 = 0, d$2.prototype.setState = function(E, R) {
  var D;
  D = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s$2({}, this.state), typeof E == "function" && (E = E(s$2({}, D), this.props)), E && s$2(D, E), E != null && this.__v && (R && this._sb.push(R), b$2(this));
}, d$2.prototype.forceUpdate = function(E) {
  this.__v && (this.__e = !0, E && this.__h.push(E), b$2(this));
}, d$2.prototype.render = p$2, t$2 = [], g$2.__r = 0;
var _$4 = 0;
function o$4(E, R, D, W, V) {
  var F, Y, G = {};
  for (Y in R)
    Y == "ref" ? F = R[Y] : G[Y] = R[Y];
  var K = { type: E, props: G, key: D, ref: F, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_$4, __source: V, __self: W };
  if (typeof E == "function" && (F = E.defaultProps))
    for (Y in F)
      G[Y] === void 0 && (G[Y] = F[Y]);
  return l$2.vnode && l$2.vnode(K), K;
}
function GridCell({
  type: E,
  key: R,
  style: D,
  bounding: W,
  offsetX: V = 0,
  offsetY: F = 0,
  component: Y,
  data: G,
  hidden: K,
  props: Q,
  children: U,
  onRender: ee,
  ...J
}) {
  if (K)
    return null;
  let X;
  ee ? X = ee(E, G) : Y ? X = /* @__PURE__ */ o$4(Y, { ...Q }) : X = G;
  const { left: Z, top: ie, width: te, height: ne } = W;
  return /* @__PURE__ */ o$4("div", { style: { width: te, height: ne, left: Z + V, top: ie + F, ...D }, ...J, children: [
    X,
    U
  ] });
}
function isCellVisible(E, R, D = 0, W = 0) {
  const V = E.left + D, F = E.top + W;
  return !(V > R.left + R.width || F > R.top + R.height || V + E.width < R.left || F + E.height < R.top);
}
let VirtualGrid$1 = class extends d$2 {
  render() {
    const { width: R, height: D, cells: W, left: V, top: F, visibleBounding: Y, onRenderCell: G, style: K, children: Q, offsetX: U = 0, offsetY: ee = 0, ...J } = this.props, X = Y ? W.filter((Z) => isCellVisible(Z.bounding, Y, U, ee)) : W;
    return /* @__PURE__ */ o$4("div", { style: { width: R, height: D, left: V, top: F, ...K }, ...J, children: [
      X.map((Z) => /* @__PURE__ */ o$4(GridCell, { offsetX: U, offsetY: ee, ...Z })),
      Q
    ] });
  }
};
class VirtualGrid extends ComponentFromReact {
}
me(VirtualGrid, "NAME", "virtualgrid"), me(VirtualGrid, "Component", VirtualGrid$1);
const ajax = "";
var Xe, Dn, Pn, ft, Fe, De, Vo, di, Yo, hi, On, vr, Go, pi, qo, $i, Hn, br, Xo, mi, Ko, gi, Jo, yi;
class AjaxForm {
  constructor(R, D = {}) {
    he(this, Vo);
    he(this, Yo);
    he(this, On);
    he(this, Go);
    he(this, qo);
    he(this, Hn);
    he(this, Xo);
    he(this, Ko);
    he(this, Jo);
    he(this, Xe, void 0);
    he(this, Dn, void 0);
    he(this, Pn, void 0);
    he(this, ft, void 0);
    he(this, Fe, void 0);
    he(this, De, new XMLHttpRequest());
    var W, V;
    if (xe(this, Fe, D), xe(this, Xe, R instanceof HTMLFormElement ? R : document.querySelector(R)), !(re(this, Xe) instanceof HTMLFormElement))
      throw new Error("Param form must be a HTMLFormElement.");
    if (xe(this, Pn, (this.formEl.method ?? D.method ?? "POST").toUpperCase()), !["GET", "POST"].includes(this.method))
      throw new Error('Method must be "GET" or "POST"!');
    if (this.method === "GET" && (re(this, Fe).formType = "AJAX"), xe(this, Dn, re(this, Xe).action ?? D.url ?? ""), !this.url)
      throw new Error("Form action is required!");
    (W = this.formEl.querySelector("[data-type=submit]")) == null || W.addEventListener("click", () => {
      this.submit();
    }), (V = this.formEl.querySelector("[data-type=reset]")) == null || V.addEventListener("click", () => {
      this.reset();
    });
  }
  get responseType() {
    return re(this, Fe).responseType ?? "json";
  }
  get formType() {
    return re(this, Fe).formType ?? "AJAX";
  }
  get url() {
    return re(this, Dn);
  }
  get method() {
    return re(this, Pn);
  }
  get formEl() {
    return re(this, Xe);
  }
  get onLoad() {
    return re(this, Fe).onLoad;
  }
  get onError() {
    return re(this, Fe).onError;
  }
  get onLoadend() {
    return re(this, Fe).onLoadend;
  }
  get onLoadstart() {
    return re(this, Fe).onLoadstart;
  }
  get onProgress() {
    return re(this, Fe).onProgress;
  }
  get onAbort() {
    return re(this, Fe).onAbort;
  }
  get onTimeout() {
    return re(this, Fe).onTimeout;
  }
  get beforeSubmit() {
    return re(this, Fe).beforeSubmit;
  }
  get generateGetURL() {
    return re(this, Fe).generateGetURL;
  }
  get formData() {
    return re(this, ft);
  }
  get headers() {
    return re(this, Fe).headers;
  }
  get rules() {
    return re(this, Fe).rules;
  }
  get timeout() {
    return re(this, Fe).timeout;
  }
  get status() {
    return re(this, De).status;
  }
  get statusText() {
    return re(this, De).statusText;
  }
  get readyState() {
    return re(this, De).readyState;
  }
  get response() {
    return re(this, De).response;
  }
  get responseXML() {
    return re(this, De).responseXML;
  }
  get responseText() {
    return re(this, De).responseText;
  }
  get responseURL() {
    return re(this, De).responseURL;
  }
  get withCredentials() {
    return re(this, De).withCredentials;
  }
  get upload() {
    return re(this, De).upload;
  }
  submit() {
    ke(this, qo, $i).call(this), ke(this, Go, pi).call(this) && (this.beforeSubmit && !this.beforeSubmit(this.formData) || (this.method === "POST" ? ke(this, Jo, yi).call(this) : ke(this, Ko, gi).call(this)));
  }
  abort() {
    re(this, De).abort();
  }
  getAllResponseHeaders() {
    return re(this, De).getAllResponseHeaders();
  }
  getResponseHeader(R) {
    return re(this, De).getResponseHeader(R);
  }
  overrideMimeType(R) {
    return re(this, De).overrideMimeType(R);
  }
  reset() {
    re(this, Xe).reset(), ke(this, On, vr).call(this);
  }
}
Xe = new WeakMap(), Dn = new WeakMap(), Pn = new WeakMap(), ft = new WeakMap(), Fe = new WeakMap(), De = new WeakMap(), Vo = new WeakSet(), di = function(R, D) {
  const W = R.closest(".form-group");
  if (!W) {
    console.warn("Form element should be in .form-group!");
    return;
  }
  W.querySelectorAll(".form-tip").forEach((F) => F.remove());
  const V = document.createElement("div");
  V.innerText = D, V.classList.add("form-tip"), W.classList.add("has-error"), W.append(V);
}, Yo = new WeakSet(), hi = function(R) {
  const D = R.closest(".form-group");
  if (!D) {
    console.warn("Form element should be in .form-group!");
    return;
  }
  D.classList.remove("has-error"), D.querySelectorAll(".form-tip").forEach((W) => W.remove());
}, On = new WeakSet(), vr = function() {
  re(this, Xe).querySelectorAll("[name]").forEach((D) => {
    ke(this, Yo, hi).call(this, D);
  });
}, Go = new WeakSet(), pi = function() {
  if (!this.rules || !Object.keys(this.rules).length)
    return !0;
  ke(this, On, vr).call(this);
  let R = !0;
  return re(this, Xe).querySelectorAll("[name]:not(.disabled)").forEach((D) => {
    const { name: W, value: V } = D, F = this.rules[W];
    if (!F)
      return;
    const Y = (G) => "required" in G && G.required && !V || "regexp" in G && G.regexp && !G.regexp.test(V) || "validate" in G && G.validate && !G.validate(V) ? (ke(this, Vo, di).call(this, D, G.errMsg), R = !1) : !0;
    if (Array.isArray(F)) {
      for (const G of F)
        if (!Y(G))
          break;
      return;
    }
    Y(F);
  }), R;
}, qo = new WeakSet(), $i = function() {
  const R = [...re(this, Xe).querySelectorAll("[name]:not(.disabled)")].filter((D) => !(D.tagName.toLowerCase() === "input" && (D.type.toLowerCase() === "radio" || D.type.toLowerCase() === "checkbox") && !D.checked));
  if (this.formType === "AJAX") {
    xe(this, ft, {}), R.forEach(({ name: D, value: W, tagName: V, type: F }) => {
      const Y = re(this, ft);
      if (V.toLowerCase() === "input" && F.toLowerCase() === "checkbox") {
        Y[D] ? Y[D].push(W) : Y[D] = [W];
        return;
      }
      Y[D] = W;
    });
    return;
  }
  xe(this, ft, new FormData(this.formEl));
}, Hn = new WeakSet(), br = function() {
  this.headers && Object.entries(this.headers).forEach(([R, D]) => {
    re(this, De).setRequestHeader(R, D);
  }), re(this, De).responseType = this.responseType, this.onLoadstart && re(this, De).addEventListener("loadstart", this.onLoadstart), this.onLoad && re(this, De).addEventListener("load", this.onLoad), this.onLoadend && re(this, De).addEventListener("loadend", this.onLoadend), this.onProgress && re(this, De).addEventListener("progress", this.onProgress), this.onError && re(this, De).addEventListener("error", this.onError), this.onAbort && re(this, De).addEventListener("abort", this.onAbort), this.onTimeout && re(this, De).addEventListener("timeout", this.onTimeout);
}, Xo = new WeakSet(), mi = function(R) {
  return Object.entries(R).map(([D, W]) => `${encodeURIComponent(D)}=${encodeURIComponent(W)}`).join("&");
}, Ko = new WeakSet(), gi = function() {
  const R = this.generateGetURL ? this.generateGetURL(this.url, this.formData) : `${this.url}?${ke(this, Xo, mi).call(this, re(this, ft))}`;
  re(this, De).open("GET", R), ke(this, Hn, br).call(this), re(this, De).send();
}, Jo = new WeakSet(), yi = function() {
  re(this, De).open("POST", this.url), ke(this, Hn, br).call(this);
  const R = this.formType === "AJAX" ? JSON.stringify(this.formData) : this.formData;
  re(this, De).send(R);
}, me(AjaxForm, "NAME", "zui.ajaxForm");
var n$1, l$1, u$1, i, t$1, o$3, f$1 = {}, e$1 = [], c$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$1(E, R) {
  for (var D in R)
    E[D] = R[D];
  return E;
}
function a$1(E) {
  var R = E.parentNode;
  R && R.removeChild(E);
}
function h(E, R, D) {
  var W, V, F, Y = {};
  for (F in R)
    F == "key" ? W = R[F] : F == "ref" ? V = R[F] : Y[F] = R[F];
  if (arguments.length > 2 && (Y.children = arguments.length > 3 ? n$1.call(arguments, 2) : D), typeof E == "function" && E.defaultProps != null)
    for (F in E.defaultProps)
      Y[F] === void 0 && (Y[F] = E.defaultProps[F]);
  return v$1(E, Y, W, V, null);
}
function v$1(E, R, D, W, V) {
  var F = { type: E, props: R, key: D, ref: W, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: V ?? ++u$1 };
  return V == null && l$1.vnode != null && l$1.vnode(F), F;
}
function y() {
  return { current: null };
}
function p$1(E) {
  return E.children;
}
function d$1(E, R) {
  this.props = E, this.context = R;
}
function _$3(E, R) {
  if (R == null)
    return E.__ ? _$3(E.__, E.__.__k.indexOf(E) + 1) : null;
  for (var D; R < E.__k.length; R++)
    if ((D = E.__k[R]) != null && D.__e != null)
      return D.__e;
  return typeof E.type == "function" ? _$3(E) : null;
}
function k$1(E) {
  var R, D;
  if ((E = E.__) != null && E.__c != null) {
    for (E.__e = E.__c.base = null, R = 0; R < E.__k.length; R++)
      if ((D = E.__k[R]) != null && D.__e != null) {
        E.__e = E.__c.base = D.__e;
        break;
      }
    return k$1(E);
  }
}
function b$1(E) {
  (!E.__d && (E.__d = !0) && t$1.push(E) && !g$1.__r++ || o$3 !== l$1.debounceRendering) && ((o$3 = l$1.debounceRendering) || setTimeout)(g$1);
}
function g$1() {
  for (var E; g$1.__r = t$1.length; )
    E = t$1.sort(function(R, D) {
      return R.__v.__b - D.__v.__b;
    }), t$1 = [], E.some(function(R) {
      var D, W, V, F, Y, G;
      R.__d && (Y = (F = (D = R).__v).__e, (G = D.__P) && (W = [], (V = s$1({}, F)).__v = F.__v + 1, j$1(G, F, V, D.__n, G.ownerSVGElement !== void 0, F.__h != null ? [Y] : null, W, Y ?? _$3(F), F.__h), z$1(W, F), F.__e != Y && k$1(F)));
    });
}
function w$1(E, R, D, W, V, F, Y, G, K, Q) {
  var U, ee, J, X, Z, ie, te, ne = W && W.__k || e$1, oe = ne.length;
  for (D.__k = [], U = 0; U < R.length; U++)
    if ((X = D.__k[U] = (X = R[U]) == null || typeof X == "boolean" ? null : typeof X == "string" || typeof X == "number" || typeof X == "bigint" ? v$1(null, X, null, null, X) : Array.isArray(X) ? v$1(p$1, { children: X }, null, null, null) : X.__b > 0 ? v$1(X.type, X.props, X.key, X.ref ? X.ref : null, X.__v) : X) != null) {
      if (X.__ = D, X.__b = D.__b + 1, (J = ne[U]) === null || J && X.key == J.key && X.type === J.type)
        ne[U] = void 0;
      else
        for (ee = 0; ee < oe; ee++) {
          if ((J = ne[ee]) && X.key == J.key && X.type === J.type) {
            ne[ee] = void 0;
            break;
          }
          J = null;
        }
      j$1(E, X, J = J || f$1, V, F, Y, G, K, Q), Z = X.__e, (ee = X.ref) && J.ref != ee && (te || (te = []), J.ref && te.push(J.ref, null, X), te.push(ee, X.__c || Z, X)), Z != null ? (ie == null && (ie = Z), typeof X.type == "function" && X.__k === J.__k ? X.__d = K = m$1(X, K, E) : K = A$1(E, X, J, ne, Z, K), typeof D.type == "function" && (D.__d = K)) : K && J.__e == K && K.parentNode != E && (K = _$3(J));
    }
  for (D.__e = ie, U = oe; U--; )
    ne[U] != null && N$1(ne[U], ne[U]);
  if (te)
    for (U = 0; U < te.length; U++)
      M$1(te[U], te[++U], te[++U]);
}
function m$1(E, R, D) {
  for (var W, V = E.__k, F = 0; V && F < V.length; F++)
    (W = V[F]) && (W.__ = E, R = typeof W.type == "function" ? m$1(W, R, D) : A$1(D, W, W, V, W.__e, R));
  return R;
}
function A$1(E, R, D, W, V, F) {
  var Y, G, K;
  if (R.__d !== void 0)
    Y = R.__d, R.__d = void 0;
  else if (D == null || V != F || V.parentNode == null)
    e:
      if (F == null || F.parentNode !== E)
        E.appendChild(V), Y = null;
      else {
        for (G = F, K = 0; (G = G.nextSibling) && K < W.length; K += 2)
          if (G == V)
            break e;
        E.insertBefore(V, F), Y = F;
      }
  return Y !== void 0 ? Y : V.nextSibling;
}
function C$1(E, R, D, W, V) {
  var F;
  for (F in D)
    F === "children" || F === "key" || F in R || H$1(E, F, null, D[F], W);
  for (F in R)
    V && typeof R[F] != "function" || F === "children" || F === "key" || F === "value" || F === "checked" || D[F] === R[F] || H$1(E, F, R[F], D[F], W);
}
function $$1(E, R, D) {
  R[0] === "-" ? E.setProperty(R, D) : E[R] = D == null ? "" : typeof D != "number" || c$1.test(R) ? D : D + "px";
}
function H$1(E, R, D, W, V) {
  var F;
  e:
    if (R === "style")
      if (typeof D == "string")
        E.style.cssText = D;
      else {
        if (typeof W == "string" && (E.style.cssText = W = ""), W)
          for (R in W)
            D && R in D || $$1(E.style, R, "");
        if (D)
          for (R in D)
            W && D[R] === W[R] || $$1(E.style, R, D[R]);
      }
    else if (R[0] === "o" && R[1] === "n")
      F = R !== (R = R.replace(/Capture$/, "")), R = R.toLowerCase() in E ? R.toLowerCase().slice(2) : R.slice(2), E.l || (E.l = {}), E.l[R + F] = D, D ? W || E.addEventListener(R, F ? T$1 : I$1, F) : E.removeEventListener(R, F ? T$1 : I$1, F);
    else if (R !== "dangerouslySetInnerHTML") {
      if (V)
        R = R.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (R !== "href" && R !== "list" && R !== "form" && R !== "tabIndex" && R !== "download" && R in E)
        try {
          E[R] = D ?? "";
          break e;
        } catch {
        }
      typeof D == "function" || (D == null || D === !1 && R.indexOf("-") == -1 ? E.removeAttribute(R) : E.setAttribute(R, D));
    }
}
function I$1(E) {
  this.l[E.type + !1](l$1.event ? l$1.event(E) : E);
}
function T$1(E) {
  this.l[E.type + !0](l$1.event ? l$1.event(E) : E);
}
function j$1(E, R, D, W, V, F, Y, G, K) {
  var Q, U, ee, J, X, Z, ie, te, ne, oe, le, ce, ue, pe, de, se = R.type;
  if (R.constructor !== void 0)
    return null;
  D.__h != null && (K = D.__h, G = R.__e = D.__e, R.__h = null, F = [G]), (Q = l$1.__b) && Q(R);
  try {
    e:
      if (typeof se == "function") {
        if (te = R.props, ne = (Q = se.contextType) && W[Q.__c], oe = Q ? ne ? ne.props.value : Q.__ : W, D.__c ? ie = (U = R.__c = D.__c).__ = U.__E : ("prototype" in se && se.prototype.render ? R.__c = U = new se(te, oe) : (R.__c = U = new d$1(te, oe), U.constructor = se, U.render = O$1), ne && ne.sub(U), U.props = te, U.state || (U.state = {}), U.context = oe, U.__n = W, ee = U.__d = !0, U.__h = [], U._sb = []), U.__s == null && (U.__s = U.state), se.getDerivedStateFromProps != null && (U.__s == U.state && (U.__s = s$1({}, U.__s)), s$1(U.__s, se.getDerivedStateFromProps(te, U.__s))), J = U.props, X = U.state, ee)
          se.getDerivedStateFromProps == null && U.componentWillMount != null && U.componentWillMount(), U.componentDidMount != null && U.__h.push(U.componentDidMount);
        else {
          if (se.getDerivedStateFromProps == null && te !== J && U.componentWillReceiveProps != null && U.componentWillReceiveProps(te, oe), !U.__e && U.shouldComponentUpdate != null && U.shouldComponentUpdate(te, U.__s, oe) === !1 || R.__v === D.__v) {
            for (U.props = te, U.state = U.__s, R.__v !== D.__v && (U.__d = !1), U.__v = R, R.__e = D.__e, R.__k = D.__k, R.__k.forEach(function(ae) {
              ae && (ae.__ = R);
            }), le = 0; le < U._sb.length; le++)
              U.__h.push(U._sb[le]);
            U._sb = [], U.__h.length && Y.push(U);
            break e;
          }
          U.componentWillUpdate != null && U.componentWillUpdate(te, U.__s, oe), U.componentDidUpdate != null && U.__h.push(function() {
            U.componentDidUpdate(J, X, Z);
          });
        }
        if (U.context = oe, U.props = te, U.__v = R, U.__P = E, ce = l$1.__r, ue = 0, "prototype" in se && se.prototype.render) {
          for (U.state = U.__s, U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), pe = 0; pe < U._sb.length; pe++)
            U.__h.push(U._sb[pe]);
          U._sb = [];
        } else
          do
            U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), U.state = U.__s;
          while (U.__d && ++ue < 25);
        U.state = U.__s, U.getChildContext != null && (W = s$1(s$1({}, W), U.getChildContext())), ee || U.getSnapshotBeforeUpdate == null || (Z = U.getSnapshotBeforeUpdate(J, X)), de = Q != null && Q.type === p$1 && Q.key == null ? Q.props.children : Q, w$1(E, Array.isArray(de) ? de : [de], R, D, W, V, F, Y, G, K), U.base = R.__e, R.__h = null, U.__h.length && Y.push(U), ie && (U.__E = U.__ = null), U.__e = !1;
      } else
        F == null && R.__v === D.__v ? (R.__k = D.__k, R.__e = D.__e) : R.__e = L$1(D.__e, R, D, W, V, F, Y, K);
    (Q = l$1.diffed) && Q(R);
  } catch (ae) {
    R.__v = null, (K || F != null) && (R.__e = G, R.__h = !!K, F[F.indexOf(G)] = null), l$1.__e(ae, R, D);
  }
}
function z$1(E, R) {
  l$1.__c && l$1.__c(R, E), E.some(function(D) {
    try {
      E = D.__h, D.__h = [], E.some(function(W) {
        W.call(D);
      });
    } catch (W) {
      l$1.__e(W, D.__v);
    }
  });
}
function L$1(E, R, D, W, V, F, Y, G) {
  var K, Q, U, ee = D.props, J = R.props, X = R.type, Z = 0;
  if (X === "svg" && (V = !0), F != null) {
    for (; Z < F.length; Z++)
      if ((K = F[Z]) && "setAttribute" in K == !!X && (X ? K.localName === X : K.nodeType === 3)) {
        E = K, F[Z] = null;
        break;
      }
  }
  if (E == null) {
    if (X === null)
      return document.createTextNode(J);
    E = V ? document.createElementNS("http://www.w3.org/2000/svg", X) : document.createElement(X, J.is && J), F = null, G = !1;
  }
  if (X === null)
    ee === J || G && E.data === J || (E.data = J);
  else {
    if (F = F && n$1.call(E.childNodes), Q = (ee = D.props || f$1).dangerouslySetInnerHTML, U = J.dangerouslySetInnerHTML, !G) {
      if (F != null)
        for (ee = {}, Z = 0; Z < E.attributes.length; Z++)
          ee[E.attributes[Z].name] = E.attributes[Z].value;
      (U || Q) && (U && (Q && U.__html == Q.__html || U.__html === E.innerHTML) || (E.innerHTML = U && U.__html || ""));
    }
    if (C$1(E, J, ee, V, G), U)
      R.__k = [];
    else if (Z = R.props.children, w$1(E, Array.isArray(Z) ? Z : [Z], R, D, W, V && X !== "foreignObject", F, Y, F ? F[0] : D.__k && _$3(D, 0), G), F != null)
      for (Z = F.length; Z--; )
        F[Z] != null && a$1(F[Z]);
    G || ("value" in J && (Z = J.value) !== void 0 && (Z !== E.value || X === "progress" && !Z || X === "option" && Z !== ee.value) && H$1(E, "value", Z, ee.value, !1), "checked" in J && (Z = J.checked) !== void 0 && Z !== E.checked && H$1(E, "checked", Z, ee.checked, !1));
  }
  return E;
}
function M$1(E, R, D) {
  try {
    typeof E == "function" ? E(R) : E.current = R;
  } catch (W) {
    l$1.__e(W, D);
  }
}
function N$1(E, R, D) {
  var W, V;
  if (l$1.unmount && l$1.unmount(E), (W = E.ref) && (W.current && W.current !== E.__e || M$1(W, null, R)), (W = E.__c) != null) {
    if (W.componentWillUnmount)
      try {
        W.componentWillUnmount();
      } catch (F) {
        l$1.__e(F, R);
      }
    W.base = W.__P = null, E.__c = void 0;
  }
  if (W = E.__k)
    for (V = 0; V < W.length; V++)
      W[V] && N$1(W[V], R, D || typeof E.type != "function");
  D || E.__e == null || a$1(E.__e), E.__ = E.__e = E.__d = void 0;
}
function O$1(E, R, D) {
  return this.constructor(E, D);
}
n$1 = e$1.slice, l$1 = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} }, u$1 = 0, i = function(E) {
  return E != null && E.constructor === void 0;
}, d$1.prototype.setState = function(E, R) {
  var D;
  D = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s$1({}, this.state), typeof E == "function" && (E = E(s$1({}, D), this.props)), E && s$1(D, E), E != null && this.__v && (R && this._sb.push(R), b$1(this));
}, d$1.prototype.forceUpdate = function(E) {
  this.__v && (this.__e = !0, E && this.__h.push(E), b$1(this));
}, d$1.prototype.render = p$1, t$1 = [], g$1.__r = 0;
var _$2 = 0;
function o$2(E, R, D, W, V) {
  var F, Y, G = {};
  for (Y in R)
    Y == "ref" ? F = R[Y] : G[Y] = R[Y];
  var K = { type: E, props: G, key: D, ref: F, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_$2, __source: V, __self: W };
  if (typeof E == "function" && (F = E.defaultProps))
    for (Y in F)
      G[Y] === void 0 && (G[Y] = F[Y]);
  return l$1.vnode && l$1.vnode(K), K;
}
let nanoid = (E = 21) => crypto.getRandomValues(new Uint8Array(E)).reduce((R, D) => (D &= 63, D < 36 ? R += D.toString(36) : D < 62 ? R += (D - 26).toString(36).toUpperCase() : D > 62 ? R += "-" : R += "_", R), "");
var n, l, u, t, o$1, f = {}, e = [], c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s(E, R) {
  for (var D in R)
    E[D] = R[D];
  return E;
}
function a(E) {
  var R = E.parentNode;
  R && R.removeChild(E);
}
function v(E, R, D, W, V) {
  var F = { type: E, props: R, key: D, ref: W, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: V ?? ++u };
  return V == null && l.vnode != null && l.vnode(F), F;
}
function p(E) {
  return E.children;
}
function d(E, R) {
  this.props = E, this.context = R;
}
function _$1(E, R) {
  if (R == null)
    return E.__ ? _$1(E.__, E.__.__k.indexOf(E) + 1) : null;
  for (var D; R < E.__k.length; R++)
    if ((D = E.__k[R]) != null && D.__e != null)
      return D.__e;
  return typeof E.type == "function" ? _$1(E) : null;
}
function k(E) {
  var R, D;
  if ((E = E.__) != null && E.__c != null) {
    for (E.__e = E.__c.base = null, R = 0; R < E.__k.length; R++)
      if ((D = E.__k[R]) != null && D.__e != null) {
        E.__e = E.__c.base = D.__e;
        break;
      }
    return k(E);
  }
}
function b(E) {
  (!E.__d && (E.__d = !0) && t.push(E) && !g.__r++ || o$1 !== l.debounceRendering) && ((o$1 = l.debounceRendering) || setTimeout)(g);
}
function g() {
  for (var E; g.__r = t.length; )
    E = t.sort(function(R, D) {
      return R.__v.__b - D.__v.__b;
    }), t = [], E.some(function(R) {
      var D, W, V, F, Y, G;
      R.__d && (Y = (F = (D = R).__v).__e, (G = D.__P) && (W = [], (V = s({}, F)).__v = F.__v + 1, j(G, F, V, D.__n, G.ownerSVGElement !== void 0, F.__h != null ? [Y] : null, W, Y ?? _$1(F), F.__h), z(W, F), F.__e != Y && k(F)));
    });
}
function w(E, R, D, W, V, F, Y, G, K, Q) {
  var U, ee, J, X, Z, ie, te, ne = W && W.__k || e, oe = ne.length;
  for (D.__k = [], U = 0; U < R.length; U++)
    if ((X = D.__k[U] = (X = R[U]) == null || typeof X == "boolean" ? null : typeof X == "string" || typeof X == "number" || typeof X == "bigint" ? v(null, X, null, null, X) : Array.isArray(X) ? v(p, { children: X }, null, null, null) : X.__b > 0 ? v(X.type, X.props, X.key, X.ref ? X.ref : null, X.__v) : X) != null) {
      if (X.__ = D, X.__b = D.__b + 1, (J = ne[U]) === null || J && X.key == J.key && X.type === J.type)
        ne[U] = void 0;
      else
        for (ee = 0; ee < oe; ee++) {
          if ((J = ne[ee]) && X.key == J.key && X.type === J.type) {
            ne[ee] = void 0;
            break;
          }
          J = null;
        }
      j(E, X, J = J || f, V, F, Y, G, K, Q), Z = X.__e, (ee = X.ref) && J.ref != ee && (te || (te = []), J.ref && te.push(J.ref, null, X), te.push(ee, X.__c || Z, X)), Z != null ? (ie == null && (ie = Z), typeof X.type == "function" && X.__k === J.__k ? X.__d = K = m(X, K, E) : K = A(E, X, J, ne, Z, K), typeof D.type == "function" && (D.__d = K)) : K && J.__e == K && K.parentNode != E && (K = _$1(J));
    }
  for (D.__e = ie, U = oe; U--; )
    ne[U] != null && N(ne[U], ne[U]);
  if (te)
    for (U = 0; U < te.length; U++)
      M(te[U], te[++U], te[++U]);
}
function m(E, R, D) {
  for (var W, V = E.__k, F = 0; V && F < V.length; F++)
    (W = V[F]) && (W.__ = E, R = typeof W.type == "function" ? m(W, R, D) : A(D, W, W, V, W.__e, R));
  return R;
}
function A(E, R, D, W, V, F) {
  var Y, G, K;
  if (R.__d !== void 0)
    Y = R.__d, R.__d = void 0;
  else if (D == null || V != F || V.parentNode == null)
    e:
      if (F == null || F.parentNode !== E)
        E.appendChild(V), Y = null;
      else {
        for (G = F, K = 0; (G = G.nextSibling) && K < W.length; K += 2)
          if (G == V)
            break e;
        E.insertBefore(V, F), Y = F;
      }
  return Y !== void 0 ? Y : V.nextSibling;
}
function C(E, R, D, W, V) {
  var F;
  for (F in D)
    F === "children" || F === "key" || F in R || H(E, F, null, D[F], W);
  for (F in R)
    V && typeof R[F] != "function" || F === "children" || F === "key" || F === "value" || F === "checked" || D[F] === R[F] || H(E, F, R[F], D[F], W);
}
function $(E, R, D) {
  R[0] === "-" ? E.setProperty(R, D) : E[R] = D == null ? "" : typeof D != "number" || c.test(R) ? D : D + "px";
}
function H(E, R, D, W, V) {
  var F;
  e:
    if (R === "style")
      if (typeof D == "string")
        E.style.cssText = D;
      else {
        if (typeof W == "string" && (E.style.cssText = W = ""), W)
          for (R in W)
            D && R in D || $(E.style, R, "");
        if (D)
          for (R in D)
            W && D[R] === W[R] || $(E.style, R, D[R]);
      }
    else if (R[0] === "o" && R[1] === "n")
      F = R !== (R = R.replace(/Capture$/, "")), R = R.toLowerCase() in E ? R.toLowerCase().slice(2) : R.slice(2), E.l || (E.l = {}), E.l[R + F] = D, D ? W || E.addEventListener(R, F ? T : I, F) : E.removeEventListener(R, F ? T : I, F);
    else if (R !== "dangerouslySetInnerHTML") {
      if (V)
        R = R.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (R !== "href" && R !== "list" && R !== "form" && R !== "tabIndex" && R !== "download" && R in E)
        try {
          E[R] = D ?? "";
          break e;
        } catch {
        }
      typeof D == "function" || (D == null || D === !1 && R.indexOf("-") == -1 ? E.removeAttribute(R) : E.setAttribute(R, D));
    }
}
function I(E) {
  this.l[E.type + !1](l.event ? l.event(E) : E);
}
function T(E) {
  this.l[E.type + !0](l.event ? l.event(E) : E);
}
function j(E, R, D, W, V, F, Y, G, K) {
  var Q, U, ee, J, X, Z, ie, te, ne, oe, le, ce, ue, pe, de, se = R.type;
  if (R.constructor !== void 0)
    return null;
  D.__h != null && (K = D.__h, G = R.__e = D.__e, R.__h = null, F = [G]), (Q = l.__b) && Q(R);
  try {
    e:
      if (typeof se == "function") {
        if (te = R.props, ne = (Q = se.contextType) && W[Q.__c], oe = Q ? ne ? ne.props.value : Q.__ : W, D.__c ? ie = (U = R.__c = D.__c).__ = U.__E : ("prototype" in se && se.prototype.render ? R.__c = U = new se(te, oe) : (R.__c = U = new d(te, oe), U.constructor = se, U.render = O), ne && ne.sub(U), U.props = te, U.state || (U.state = {}), U.context = oe, U.__n = W, ee = U.__d = !0, U.__h = [], U._sb = []), U.__s == null && (U.__s = U.state), se.getDerivedStateFromProps != null && (U.__s == U.state && (U.__s = s({}, U.__s)), s(U.__s, se.getDerivedStateFromProps(te, U.__s))), J = U.props, X = U.state, ee)
          se.getDerivedStateFromProps == null && U.componentWillMount != null && U.componentWillMount(), U.componentDidMount != null && U.__h.push(U.componentDidMount);
        else {
          if (se.getDerivedStateFromProps == null && te !== J && U.componentWillReceiveProps != null && U.componentWillReceiveProps(te, oe), !U.__e && U.shouldComponentUpdate != null && U.shouldComponentUpdate(te, U.__s, oe) === !1 || R.__v === D.__v) {
            for (U.props = te, U.state = U.__s, R.__v !== D.__v && (U.__d = !1), U.__v = R, R.__e = D.__e, R.__k = D.__k, R.__k.forEach(function(ae) {
              ae && (ae.__ = R);
            }), le = 0; le < U._sb.length; le++)
              U.__h.push(U._sb[le]);
            U._sb = [], U.__h.length && Y.push(U);
            break e;
          }
          U.componentWillUpdate != null && U.componentWillUpdate(te, U.__s, oe), U.componentDidUpdate != null && U.__h.push(function() {
            U.componentDidUpdate(J, X, Z);
          });
        }
        if (U.context = oe, U.props = te, U.__v = R, U.__P = E, ce = l.__r, ue = 0, "prototype" in se && se.prototype.render) {
          for (U.state = U.__s, U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), pe = 0; pe < U._sb.length; pe++)
            U.__h.push(U._sb[pe]);
          U._sb = [];
        } else
          do
            U.__d = !1, ce && ce(R), Q = U.render(U.props, U.state, U.context), U.state = U.__s;
          while (U.__d && ++ue < 25);
        U.state = U.__s, U.getChildContext != null && (W = s(s({}, W), U.getChildContext())), ee || U.getSnapshotBeforeUpdate == null || (Z = U.getSnapshotBeforeUpdate(J, X)), de = Q != null && Q.type === p && Q.key == null ? Q.props.children : Q, w(E, Array.isArray(de) ? de : [de], R, D, W, V, F, Y, G, K), U.base = R.__e, R.__h = null, U.__h.length && Y.push(U), ie && (U.__E = U.__ = null), U.__e = !1;
      } else
        F == null && R.__v === D.__v ? (R.__k = D.__k, R.__e = D.__e) : R.__e = L(D.__e, R, D, W, V, F, Y, K);
    (Q = l.diffed) && Q(R);
  } catch (ae) {
    R.__v = null, (K || F != null) && (R.__e = G, R.__h = !!K, F[F.indexOf(G)] = null), l.__e(ae, R, D);
  }
}
function z(E, R) {
  l.__c && l.__c(R, E), E.some(function(D) {
    try {
      E = D.__h, D.__h = [], E.some(function(W) {
        W.call(D);
      });
    } catch (W) {
      l.__e(W, D.__v);
    }
  });
}
function L(E, R, D, W, V, F, Y, G) {
  var K, Q, U, ee = D.props, J = R.props, X = R.type, Z = 0;
  if (X === "svg" && (V = !0), F != null) {
    for (; Z < F.length; Z++)
      if ((K = F[Z]) && "setAttribute" in K == !!X && (X ? K.localName === X : K.nodeType === 3)) {
        E = K, F[Z] = null;
        break;
      }
  }
  if (E == null) {
    if (X === null)
      return document.createTextNode(J);
    E = V ? document.createElementNS("http://www.w3.org/2000/svg", X) : document.createElement(X, J.is && J), F = null, G = !1;
  }
  if (X === null)
    ee === J || G && E.data === J || (E.data = J);
  else {
    if (F = F && n.call(E.childNodes), Q = (ee = D.props || f).dangerouslySetInnerHTML, U = J.dangerouslySetInnerHTML, !G) {
      if (F != null)
        for (ee = {}, Z = 0; Z < E.attributes.length; Z++)
          ee[E.attributes[Z].name] = E.attributes[Z].value;
      (U || Q) && (U && (Q && U.__html == Q.__html || U.__html === E.innerHTML) || (E.innerHTML = U && U.__html || ""));
    }
    if (C(E, J, ee, V, G), U)
      R.__k = [];
    else if (Z = R.props.children, w(E, Array.isArray(Z) ? Z : [Z], R, D, W, V && X !== "foreignObject", F, Y, F ? F[0] : D.__k && _$1(D, 0), G), F != null)
      for (Z = F.length; Z--; )
        F[Z] != null && a(F[Z]);
    G || ("value" in J && (Z = J.value) !== void 0 && (Z !== E.value || X === "progress" && !Z || X === "option" && Z !== ee.value) && H(E, "value", Z, ee.value, !1), "checked" in J && (Z = J.checked) !== void 0 && Z !== E.checked && H(E, "checked", Z, ee.checked, !1));
  }
  return E;
}
function M(E, R, D) {
  try {
    typeof E == "function" ? E(R) : E.current = R;
  } catch (W) {
    l.__e(W, D);
  }
}
function N(E, R, D) {
  var W, V;
  if (l.unmount && l.unmount(E), (W = E.ref) && (W.current && W.current !== E.__e || M(W, null, R)), (W = E.__c) != null) {
    if (W.componentWillUnmount)
      try {
        W.componentWillUnmount();
      } catch (F) {
        l.__e(F, R);
      }
    W.base = W.__P = null, E.__c = void 0;
  }
  if (W = E.__k)
    for (V = 0; V < W.length; V++)
      W[V] && N(W[V], R, D || typeof E.type != "function");
  D || E.__e == null || a(E.__e), E.__ = E.__e = E.__d = void 0;
}
function O(E, R, D) {
  return this.constructor(E, D);
}
n = e.slice, l = { __e: function(E, R, D, W) {
  for (var V, F, Y; R = R.__; )
    if ((V = R.__c) && !V.__)
      try {
        if ((F = V.constructor) && F.getDerivedStateFromError != null && (V.setState(F.getDerivedStateFromError(E)), Y = V.__d), V.componentDidCatch != null && (V.componentDidCatch(E, W || {}), Y = V.__d), Y)
          return V.__E = V;
      } catch (G) {
        E = G;
      }
  throw E;
} }, u = 0, d.prototype.setState = function(E, R) {
  var D;
  D = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), typeof E == "function" && (E = E(s({}, D), this.props)), E && s(D, E), E != null && this.__v && (R && this._sb.push(R), b(this));
}, d.prototype.forceUpdate = function(E) {
  this.__v && (this.__e = !0, E && this.__h.push(E), b(this));
}, d.prototype.render = p, t = [], g.__r = 0;
var _ = 0;
function o(E, R, D, W, V) {
  var F, Y, G = {};
  for (Y in R)
    Y == "ref" ? F = R[Y] : G[Y] = R[Y];
  var K = { type: E, props: G, key: D, ref: F, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_, __source: V, __self: W };
  if (typeof E == "function" && (F = E.defaultProps))
    for (Y in F)
      G[Y] === void 0 && (G[Y] = F[Y]);
  return l.vnode && l.vnode(K), K;
}
const scrollbar = "";
var kt, St;
class Scrollbar extends d {
  constructor(D) {
    super(D);
    he(this, kt, 0);
    he(this, St, null);
    me(this, "_handleWheel", (D) => {
      const { wheelContainer: W } = this.props, V = D.target;
      if (!(!V || !W) && (typeof W == "string" && V.closest(W) || typeof W == "object")) {
        const F = (this.props.type === "horz" ? D.deltaX : D.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(F) && D.preventDefault();
      }
    });
    me(this, "_handleMouseMove", (D) => {
      const { dragStart: W } = this.state;
      W && (re(this, kt) && cancelAnimationFrame(re(this, kt)), xe(this, kt, requestAnimationFrame(() => {
        const V = this.props.type === "horz" ? D.clientX - W.x : D.clientY - W.y;
        this.scroll(W.offset + V * this.props.scrollSize / this.props.clientSize), xe(this, kt, 0);
      })), D.preventDefault());
    });
    me(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    me(this, "_handleMouseDown", (D) => {
      this.state.dragStart || this.setState({ dragStart: { x: D.clientX, y: D.clientY, offset: this.scrollPos } }), D.stopPropagation();
    });
    me(this, "_handleClick", (D) => {
      const W = D.currentTarget;
      if (!W)
        return;
      const V = W.getBoundingClientRect(), { type: F, clientSize: Y, scrollSize: G } = this.props, K = (F === "horz" ? D.clientX - V.left : D.clientY - V.top) - this.barSize / 2;
      this.scroll(K * G / Y), D.preventDefault();
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
    const { scrollSize: D, clientSize: W } = this.props;
    return Math.max(0, D - W);
  }
  get barSize() {
    const { clientSize: D, scrollSize: W, size: V = 12, minBarSize: F = 3 * V } = this.props;
    return Math.max(Math.round(D * D / W), F);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: D } = this.props;
    D && (xe(this, St, typeof D == "string" ? document : D.current), re(this, St).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), re(this, St) && re(this, St).removeEventListener("wheel", this._handleWheel);
  }
  scroll(D) {
    return D = Math.max(0, Math.min(Math.round(D), this.maxScrollPos)), D === this.scrollPos ? !1 : (this.controlled ? this._afterScroll(D) : this.setState({
      scrollPos: D
    }, this._afterScroll.bind(this, D)), !0);
  }
  scrollOffset(D) {
    return this.scroll(this.scrollPos + D);
  }
  _afterScroll(D) {
    const { onScroll: W } = this.props;
    W && W(D, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: D,
      type: W,
      size: V = 12,
      className: F,
      style: Y,
      left: G,
      top: K,
      bottom: Q,
      right: U
    } = this.props, { maxScrollPos: ee, scrollPos: J } = this, { dragStart: X } = this.state, Z = {
      left: G,
      top: K,
      bottom: Q,
      right: U,
      ...Y
    }, ie = {};
    return W === "horz" ? (Z.height = V, Z.width = D, ie.width = this.barSize, ie.left = Math.round(Math.min(ee, J) * (D - ie.width) / ee)) : (Z.width = V, Z.height = D, ie.height = this.barSize, ie.top = Math.round(Math.min(ee, J) * (D - ie.height) / ee)), /* @__PURE__ */ o(
      "div",
      {
        className: classes("scrollbar", F, {
          "is-vert": W === "vert",
          "is-horz": W === "horz",
          "is-dragging": X
        }),
        style: Z,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ o(
          "div",
          {
            className: "scrollbar-bar",
            style: ie,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
kt = new WeakMap(), St = new WeakMap();
function clamp(E, R, D) {
  return E && (R && (E = Math.max(R, E)), D && (E = Math.min(D, E))), E;
}
function Cell({ col: E, className: R, height: D, row: W, onRenderCell: V, style: F, outerStyle: Y, children: G, outerClass: K, ...Q }) {
  var se;
  const U = {
    left: E.left,
    width: E.realWidth,
    height: D,
    ...Y
  }, { align: ee, border: J } = E.setting, X = {
    justifyContent: ee ? ee === "left" ? "start" : ee === "right" ? "end" : ee : void 0,
    ...E.setting.cellStyle,
    ...F
  }, Z = ["dtable-cell", K, E.setting.className, {
    "has-border-left": J === !0 || J === "left",
    "has-border-right": J === !0 || J === "right"
  }], ie = ["dtable-cell-content", R], te = [G ?? ((se = W.data) == null ? void 0 : se[E.name]) ?? ""], ne = V ? V(te, { row: W, col: E }, h) : te, oe = [], le = [], ce = {}, ue = {};
  let pe = "div";
  ne == null || ne.forEach((ae) => {
    if (typeof ae == "object" && ae && !i(ae) && ("html" in ae || "className" in ae || "style" in ae || "attrs" in ae || "children" in ae || "tagName" in ae)) {
      const ge = ae.outer ? oe : le;
      ae.html ? ge.push(/* @__PURE__ */ o$2("div", { className: classes("dtable-cell-html", ae.className), style: ae.style, dangerouslySetInnerHTML: { __html: ae.html }, ...ae.attrs ?? {} })) : (ae.style && Object.assign(ae.outer ? U : X, ae.style), ae.className && (ae.outer ? Z : ie).push(ae.className), ae.children && ge.push(ae.children), ae.attrs && Object.assign(ae.outer ? ce : ue, ae.attrs)), ae.tagName && !ae.outer && (pe = ae.tagName);
    } else
      le.push(ae);
  });
  const de = pe;
  return /* @__PURE__ */ o$2(
    "div",
    {
      className: classes(Z),
      style: U,
      "data-col": E.name,
      ...Q,
      ...ce,
      children: [
        le.length > 0 && /* @__PURE__ */ o$2(de, { className: classes(ie), style: X, ...ue, children: le }),
        oe
      ]
    }
  );
}
function Cells({ row: E, className: R, top: D = 0, left: W = 0, width: V, height: F, cols: Y, CellComponent: G = Cell, onRenderCell: K }) {
  return /* @__PURE__ */ o$2("div", { className: classes("dtable-cells", R), style: { top: D, left: W, width: V, height: F }, children: Y.map((Q) => Q.visible ? /* @__PURE__ */ o$2(
    G,
    {
      col: Q,
      row: E,
      onRenderCell: K
    },
    Q.name
  ) : null) });
}
function Row({
  row: E,
  className: R,
  top: D,
  height: W,
  fixedLeftCols: V,
  fixedRightCols: F,
  scrollCols: Y,
  fixedLeftWidth: G,
  scrollWidth: K,
  scrollColsWidth: Q,
  fixedRightWidth: U,
  scrollLeft: ee,
  CellComponent: J = Cell,
  onRenderCell: X,
  style: Z,
  ...ie
}) {
  let te = null;
  V != null && V.length && (te = /* @__PURE__ */ o$2(
    Cells,
    {
      className: "dtable-fixed-left",
      cols: V,
      width: G,
      row: E,
      CellComponent: J,
      onRenderCell: X
    }
  ));
  let ne = null;
  Y != null && Y.length && (ne = /* @__PURE__ */ o$2(
    Cells,
    {
      className: "dtable-flexable",
      cols: Y,
      left: G - ee,
      width: Math.max(K, Q),
      row: E,
      CellComponent: J,
      onRenderCell: X
    }
  ));
  let oe = null;
  F != null && F.length && (oe = /* @__PURE__ */ o$2(
    Cells,
    {
      className: "dtable-fixed-right",
      cols: F,
      left: G + K,
      width: U,
      row: E,
      CellComponent: J,
      onRenderCell: X
    }
  ));
  const le = { top: D, height: W, lineHeight: `${W - 2}px`, ...Z };
  return /* @__PURE__ */ o$2(
    "div",
    {
      className: classes("dtable-row", R),
      style: le,
      "data-id": E.id,
      ...ie,
      children: [
        te,
        ne,
        oe
      ]
    }
  );
}
function Header({ height: E, onRenderRow: R, ...D }) {
  const W = {
    height: E,
    ...D,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (R) {
    const V = R({ props: W }, h);
    V && Object.assign(W, V);
  }
  return /* @__PURE__ */ o$2("div", { className: "dtable-header", style: { height: E }, children: /* @__PURE__ */ o$2(Row, { ...W }) });
}
function Rows({
  className: E,
  style: R,
  top: D,
  rows: W,
  height: V,
  rowHeight: F,
  scrollTop: Y,
  onRenderRow: G,
  ...K
}) {
  return R = { ...R, top: D, height: V }, /* @__PURE__ */ o$2("div", { className: classes("dtable-rows", E), style: R, children: W.map((Q) => {
    const U = {
      className: `dtable-row-${Q.index % 2 ? "odd" : "even"}`,
      row: Q,
      top: Q.top - Y,
      height: F,
      ...K
    }, ee = G == null ? void 0 : G({ props: U, row: Q }, h);
    return ee && Object.assign(U, ee), /* @__PURE__ */ o$2(Row, { ...U });
  }) });
}
const sharedPlugins = /* @__PURE__ */ new Map(), buildInPlugins = [];
function addPlugin(E, R) {
  const { name: D } = E;
  if (!(R != null && R.override) && sharedPlugins.has(D))
    throw new Error(`DTable: Plugin with name ${D} already exists`);
  sharedPlugins.set(D, E), R != null && R.buildIn && !buildInPlugins.includes(D) && buildInPlugins.push(D);
}
function definePlugin(E, R) {
  addPlugin(E, R);
  const D = (W) => {
    if (!W)
      return E;
    const { defaultOptions: V, ...F } = E;
    return {
      ...F,
      defaultOptions: { ...V, ...W }
    };
  };
  return D.plugin = E, D;
}
function removePlugin(E) {
  return sharedPlugins.delete(E);
}
function getDTablePlugin(E) {
  if (typeof E == "string") {
    const R = sharedPlugins.get(E);
    return R || console.warn(`DTable: Cannot found plugin "${E}"`), R;
  }
  if (typeof E == "function" && "plugin" in E)
    return E.plugin;
  if (typeof E == "object")
    return E;
  console.warn("DTable: Invalid plugin", E);
}
function initPluginsInner(E, R, D) {
  return R.forEach((W) => {
    var F;
    if (!W)
      return;
    const V = getDTablePlugin(W);
    V && (D.has(V.name) || ((F = V.plugins) != null && F.length && initPluginsInner(E, V.plugins, D), E.push(V), D.add(V.name)));
  }), E;
}
function initPlugins(E = [], R = !0) {
  return R && buildInPlugins.length && E.unshift(...buildInPlugins), E != null && E.length ? initPluginsInner([], E, /* @__PURE__ */ new Set()) : [];
}
function getDefaultOptions() {
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
const index$b = "";
var Vn, Ct, Jt, dt, et, ht, je, Ke, tt, Zt, In, Wn, lt, Qt, en, Zo, vi, Qo, bi, er, wi, nr, xi, Fn, wr, or, rr, jn, Bn, ir, sr, lr, ki, cr, Si, ar, Ci;
let DTable$1 = (Vn = class extends d$1 {
  constructor(D) {
    super(D);
    he(this, Zo);
    he(this, Qo);
    he(this, er);
    he(this, nr);
    he(this, Fn);
    he(this, lr);
    he(this, cr);
    he(this, ar);
    me(this, "ref", y());
    he(this, Ct, 0);
    he(this, Jt, void 0);
    he(this, dt, !1);
    he(this, et, void 0);
    he(this, ht, void 0);
    he(this, je, []);
    he(this, Ke, void 0);
    he(this, tt, /* @__PURE__ */ new Map());
    he(this, Zt, {});
    he(this, In, void 0);
    he(this, Wn, []);
    me(this, "updateLayout", () => {
      re(this, Ct) && cancelAnimationFrame(re(this, Ct)), xe(this, Ct, requestAnimationFrame(() => {
        xe(this, Ke, void 0), this.forceUpdate(), xe(this, Ct, 0);
      }));
    });
    he(this, lt, (D, W) => {
      W = W || D.type;
      const V = re(this, tt).get(W);
      if (V != null && V.length) {
        for (const F of V)
          if (F.call(this, D) === !1) {
            D.stopPropagation(), D.preventDefault();
            break;
          }
      }
    });
    he(this, Qt, (D) => {
      re(this, lt).call(this, D, `window_${D.type}`);
    });
    he(this, en, (D) => {
      re(this, lt).call(this, D, `document_${D.type}`);
    });
    he(this, or, (D, W) => {
      if (this.options.onRenderRow) {
        const V = this.options.onRenderRow.call(this, D, W);
        V && Object.assign(D.props, V);
      }
      return re(this, je).forEach((V) => {
        if (V.onRenderRow) {
          const F = V.onRenderRow.call(this, D, W);
          F && Object.assign(D.props, F);
        }
      }), D.props;
    });
    he(this, rr, (D, W) => (this.options.onRenderHeaderRow && (D.props = this.options.onRenderHeaderRow.call(this, D, W)), re(this, je).forEach((V) => {
      V.onRenderHeaderRow && (D.props = V.onRenderHeaderRow.call(this, D, W));
    }), D.props));
    he(this, jn, (D, W, V) => {
      const { row: F, col: Y } = W;
      D[0] = this.getCellValue(F, Y);
      const G = F.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return Y.setting[G] && (D = Y.setting[G].call(this, D, W, V)), this.options[G] && (D = this.options[G].call(this, D, W, V)), re(this, je).forEach((K) => {
        K[G] && (D = K[G].call(this, D, W, V));
      }), D;
    });
    he(this, Bn, (D, W) => {
      W === "horz" ? this.scroll({ scrollLeft: D }) : this.scroll({ scrollTop: D });
    });
    he(this, ir, (D) => {
      var G, K, Q, U, ee;
      const W = this.getPointerInfo(D);
      if (!W)
        return;
      const { rowID: V, colName: F, cellElement: Y } = W;
      if (V === "HEADER")
        Y && ((G = this.options.onHeaderCellClick) == null || G.call(this, D, { colName: F, element: Y }), re(this, je).forEach((J) => {
          var X;
          (X = J.onHeaderCellClick) == null || X.call(this, D, { colName: F, element: Y });
        }));
      else {
        const { rowElement: J } = W, X = this.layout.visibleRows.find((Z) => Z.id === V);
        if (Y) {
          if (((K = this.options.onCellClick) == null ? void 0 : K.call(this, D, { colName: F, rowID: V, rowInfo: X, element: Y, rowElement: J })) === !0)
            return;
          for (const Z of re(this, je))
            if (((Q = Z.onCellClick) == null ? void 0 : Q.call(this, D, { colName: F, rowID: V, rowInfo: X, element: Y, rowElement: J })) === !0)
              return;
        }
        if (((U = this.options.onRowClick) == null ? void 0 : U.call(this, D, { rowID: V, rowInfo: X, element: J })) === !0)
          return;
        for (const Z of re(this, je))
          if (((ee = Z.onRowClick) == null ? void 0 : ee.call(this, D, { rowID: V, rowInfo: X, element: J })) === !0)
            return;
      }
    });
    he(this, sr, (D) => {
      const W = D.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(W))
        return !this.scroll({ to: W.replace("page", "") });
    });
    xe(this, Jt, D.id ?? `dtable-${nanoid(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, xe(this, ht, Object.freeze(initPlugins(D.plugins))), re(this, ht).forEach((W) => {
      var G;
      const { methods: V, data: F, state: Y } = W;
      V && Object.entries(V).forEach(([K, Q]) => {
        typeof Q == "function" && Object.assign(this, { [K]: Q.bind(this) });
      }), F && Object.assign(re(this, Zt), F.call(this)), Y && Object.assign(this.state, Y.call(this)), (G = W.onCreate) == null || G.call(this, W);
    });
  }
  get options() {
    var D;
    return ((D = re(this, Ke)) == null ? void 0 : D.options) || re(this, et) || getDefaultOptions();
  }
  get plugins() {
    return re(this, je);
  }
  get layout() {
    return re(this, Ke);
  }
  get id() {
    return re(this, Jt);
  }
  get data() {
    return re(this, Zt);
  }
  get parent() {
    var D;
    return this.props.parent ?? ((D = this.ref.current) == null ? void 0 : D.parentElement);
  }
  componentWillReceiveProps() {
    xe(this, et, void 0);
  }
  componentDidMount() {
    if (re(this, dt) ? this.forceUpdate() : ke(this, Fn, wr).call(this), re(this, je).forEach((D) => {
      let { events: W } = D;
      W && (typeof W == "function" && (W = W.call(this)), Object.entries(W).forEach(([V, F]) => {
        F && this.on(V, F);
      }));
    }), this.on("click", re(this, ir)), this.on("keydown", re(this, sr)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: D } = this;
        if (D) {
          const W = new ResizeObserver(this.updateLayout);
          W.observe(D), xe(this, In, W);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    re(this, je).forEach((D) => {
      var W;
      (W = D.onMounted) == null || W.call(this);
    });
  }
  componentDidUpdate() {
    re(this, dt) ? ke(this, Fn, wr).call(this) : re(this, je).forEach((D) => {
      var W;
      (W = D.onUpdated) == null || W.call(this);
    });
  }
  componentWillUnmount() {
    var W;
    (W = re(this, In)) == null || W.disconnect();
    const { current: D } = this.ref;
    if (D)
      for (const V of re(this, tt).keys())
        V.startsWith("window_") ? window.removeEventListener(V.replace("window_", ""), re(this, Qt)) : V.startsWith("document_") ? document.removeEventListener(V.replace("document_", ""), re(this, en)) : D.removeEventListener(V, re(this, lt));
    re(this, je).forEach((V) => {
      var F;
      (F = V.onUnmounted) == null || F.call(this);
    }), re(this, ht).forEach((V) => {
      var F;
      (F = V.onDestory) == null || F.call(this);
    }), xe(this, Zt, {}), re(this, tt).clear();
  }
  on(D, W, V) {
    var Y;
    V && (D = `${V}_${D}`);
    const F = re(this, tt).get(D);
    F ? F.push(W) : (re(this, tt).set(D, [W]), D.startsWith("window_") ? window.addEventListener(D.replace("window_", ""), re(this, Qt)) : D.startsWith("document_") ? document.addEventListener(D.replace("document_", ""), re(this, en)) : (Y = this.ref.current) == null || Y.addEventListener(D, re(this, lt)));
  }
  off(D, W, V) {
    var G;
    V && (D = `${V}_${D}`);
    const F = re(this, tt).get(D);
    if (!F)
      return;
    const Y = F.indexOf(W);
    Y >= 0 && F.splice(Y, 1), F.length || (re(this, tt).delete(D), D.startsWith("window_") ? window.removeEventListener(D.replace("window_", ""), re(this, Qt)) : D.startsWith("document_") ? document.removeEventListener(D.replace("document_", ""), re(this, en)) : (G = this.ref.current) == null || G.removeEventListener(D, re(this, lt)));
  }
  emitCustomEvent(D, W) {
    re(this, lt).call(this, W instanceof Event ? W : new CustomEvent(D, { detail: W }), D);
  }
  scroll(D, W) {
    const { scrollLeft: V, scrollTop: F, rowsHeightTotal: Y, rowsHeight: G, rowHeight: K, colsInfo: { scrollWidth: Q, scrollColsWidth: U } } = this.layout, { to: ee } = D;
    let { scrollLeft: J, scrollTop: X } = D;
    if (ee === "up" || ee === "down")
      X = F + (ee === "down" ? 1 : -1) * Math.floor(G / K) * K;
    else if (ee === "left" || ee === "right")
      J = V + (ee === "right" ? 1 : -1) * Q;
    else if (ee === "home")
      X = 0;
    else if (ee === "end")
      X = Y - G;
    else if (ee === "left-begin")
      J = 0;
    else if (ee === "right-end")
      J = U - Q;
    else {
      const { offsetLeft: ie, offsetTop: te } = D;
      typeof ie == "number" && (J = V + ie), typeof te == "number" && (J = F + te);
    }
    const Z = {};
    return typeof J == "number" && (J = Math.max(0, Math.min(J, U - Q)), J !== V && (Z.scrollLeft = J)), typeof X == "number" && (X = Math.max(0, Math.min(X, Y - G)), X !== F && (Z.scrollTop = X)), Object.keys(Z).length ? (this.setState(Z, () => {
      var ie;
      (ie = this.options.onScroll) == null || ie.call(this, Z), W == null || W.call(this, !0);
    }), !0) : (W == null || W.call(this, !1), !1);
  }
  getColInfo(D) {
    if (D === void 0)
      return;
    if (typeof D == "object")
      return D;
    const { colsMap: W, colsList: V } = this.layout;
    return typeof D == "number" ? V[D] : W[D];
  }
  getRowInfo(D) {
    if (D === void 0)
      return;
    if (typeof D == "object")
      return D;
    if (D === -1 || D === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: W, rowsMap: V } = this.layout;
    return typeof D == "number" ? W[D] : V[D];
  }
  getCellValue(D, W) {
    var K;
    const V = typeof D == "object" ? D : this.getRowInfo(D);
    if (!V)
      return;
    const F = typeof W == "object" ? W : this.getColInfo(W);
    if (!F)
      return;
    let Y = V.id === "HEADER" ? F.setting.title : (K = V.data) == null ? void 0 : K[F.name];
    const { cellValueGetter: G } = this.options;
    return G && (Y = G.call(this, V, F, Y)), Y;
  }
  getRowInfoByIndex(D) {
    return this.layout.rows[D];
  }
  update(D = {}, W) {
    if (!re(this, et))
      return;
    typeof D == "function" && (W = D, D = {});
    const { dirtyType: V, state: F } = D;
    if (V === "layout")
      xe(this, Ke, void 0);
    else if (V === "options") {
      if (xe(this, et, void 0), !re(this, Ke))
        return;
      xe(this, Ke, void 0);
    }
    this.setState(F ?? ((Y) => ({ renderCount: Y.renderCount + 1 })), W);
  }
  getPointerInfo(D) {
    const W = D.target;
    if (!W || W.closest(".no-cell-event"))
      return;
    const V = W.closest(".dtable-cell");
    if (!V)
      return;
    const F = V.closest(".dtable-row");
    if (!F)
      return;
    const Y = V == null ? void 0 : V.getAttribute("data-col"), G = F == null ? void 0 : F.getAttribute("data-id");
    if (!(typeof Y != "string" || typeof G != "string"))
      return {
        cellElement: V,
        rowElement: F,
        colName: Y,
        rowID: G,
        target: W
      };
  }
  i18n(D, W, V) {
    return i18n(re(this, Wn), D, W, V, this.options.lang) ?? `{i18n:${D}}`;
  }
  render() {
    const D = ke(this, ar, Ci).call(this), { className: W, rowHover: V, colHover: F, cellHover: Y, bordered: G, striped: K, scrollbarHover: Q } = this.options, U = { width: D == null ? void 0 : D.width, height: D == null ? void 0 : D.height }, ee = ["dtable", W, {
      "dtable-hover-row": V,
      "dtable-hover-col": F,
      "dtable-hover-cell": Y,
      "dtable-bordered": G,
      "dtable-striped": K,
      "dtable-scrolled-down": ((D == null ? void 0 : D.scrollTop) ?? 0) > 0,
      "scrollbar-hover": Q
    }], J = [];
    return D && re(this, je).forEach((X) => {
      var ie;
      const Z = (ie = X.onRender) == null ? void 0 : ie.call(this, D);
      Z && (Z.style && Object.assign(U, Z.style), Z.className && ee.push(Z.className), Z.children && J.push(Z.children));
    }), /* @__PURE__ */ o$2(
      "div",
      {
        id: re(this, Jt),
        className: classes(ee),
        style: U,
        ref: this.ref,
        tabIndex: -1,
        children: [
          D && ke(this, Zo, vi).call(this, D),
          D && ke(this, Qo, bi).call(this, D),
          D && ke(this, er, wi).call(this, D),
          D && ke(this, nr, xi).call(this, D)
        ]
      }
    );
  }
}, Ct = new WeakMap(), Jt = new WeakMap(), dt = new WeakMap(), et = new WeakMap(), ht = new WeakMap(), je = new WeakMap(), Ke = new WeakMap(), tt = new WeakMap(), Zt = new WeakMap(), In = new WeakMap(), Wn = new WeakMap(), lt = new WeakMap(), Qt = new WeakMap(), en = new WeakMap(), Zo = new WeakSet(), vi = function(D) {
  const { header: W, colsInfo: V, headerHeight: F, scrollLeft: Y } = D;
  if (!W)
    return null;
  if (W === !0)
    return /* @__PURE__ */ o$2(
      Header,
      {
        scrollLeft: Y,
        height: F,
        onRenderCell: re(this, jn),
        onRenderRow: re(this, rr),
        ...V
      }
    );
  const G = Array.isArray(W) ? W : [W];
  return /* @__PURE__ */ o$2(
    CustomRender,
    {
      className: "dtable-header",
      style: { height: F },
      renders: G,
      generateArgs: [D],
      generatorThis: this
    }
  );
}, Qo = new WeakSet(), bi = function(D) {
  const { headerHeight: W, rowsHeight: V, visibleRows: F, rowHeight: Y, colsInfo: G, scrollLeft: K, scrollTop: Q } = D;
  return /* @__PURE__ */ o$2(
    Rows,
    {
      top: W,
      height: V,
      rows: F,
      rowHeight: Y,
      scrollLeft: K,
      scrollTop: Q,
      onRenderCell: re(this, jn),
      onRenderRow: re(this, or),
      ...G
    }
  );
}, er = new WeakSet(), wi = function(D) {
  const { footer: W } = D;
  if (!W)
    return null;
  const V = typeof W == "function" ? W.call(this, D) : Array.isArray(W) ? W : [W];
  return /* @__PURE__ */ o$2(
    CustomRender,
    {
      className: "dtable-footer",
      style: { height: D.footerHeight, top: D.rowsHeight + D.headerHeight },
      renders: V,
      generateArgs: [D],
      generatorThis: this,
      generators: D.footerGenerators
    }
  );
}, nr = new WeakSet(), xi = function(D) {
  const W = [], { scrollLeft: V, colsInfo: F, scrollTop: Y, rowsHeight: G, rowsHeightTotal: K, footerHeight: Q } = D, { scrollColsWidth: U, scrollWidth: ee } = F, { scrollbarSize: J = 12, horzScrollbarPos: X } = this.options;
  return U > ee && W.push(
    /* @__PURE__ */ o$2(
      Scrollbar,
      {
        type: "horz",
        scrollPos: V,
        scrollSize: U,
        clientSize: ee,
        onScroll: re(this, Bn),
        left: F.fixedLeftWidth,
        bottom: (X === "inside" ? 0 : -J) + Q,
        size: J,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), K > G && W.push(
    /* @__PURE__ */ o$2(
      Scrollbar,
      {
        type: "vert",
        scrollPos: Y,
        scrollSize: K,
        clientSize: G,
        onScroll: re(this, Bn),
        right: 0,
        size: J,
        top: D.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), W.length ? W : null;
}, Fn = new WeakSet(), wr = function() {
  var D;
  xe(this, dt, !1), (D = this.options.afterRender) == null || D.call(this), re(this, je).forEach((W) => {
    var V;
    return (V = W.afterRender) == null ? void 0 : V.call(this);
  });
}, or = new WeakMap(), rr = new WeakMap(), jn = new WeakMap(), Bn = new WeakMap(), ir = new WeakMap(), sr = new WeakMap(), lr = new WeakSet(), ki = function() {
  if (re(this, et))
    return !1;
  const W = { ...getDefaultOptions(), ...re(this, ht).reduce((V, F) => {
    const { defaultOptions: Y } = F;
    return Y && Object.assign(V, Y), V;
  }, {}), ...this.props };
  return xe(this, et, W), xe(this, je, re(this, ht).reduce((V, F) => {
    const { when: Y, options: G } = F;
    return (!Y || Y(W)) && (V.push(F), G && Object.assign(W, typeof G == "function" ? G.call(this, W) : G)), V;
  }, [])), xe(this, Wn, [this.options.i18n, ...this.plugins.map((V) => V.i18n)].filter(Boolean)), !0;
}, cr = new WeakSet(), Si = function() {
  var Ne, We;
  const { plugins: D } = this;
  let W = re(this, et);
  const V = {
    flex: /* @__PURE__ */ o$2("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ o$2("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  D.forEach((Ce) => {
    var Ie;
    const Re = (Ie = Ce.beforeLayout) == null ? void 0 : Ie.call(this, W);
    Re && (W = { ...W, ...Re }), Object.assign(V, Ce.footer);
  });
  const { defaultColWidth: F, minColWidth: Y, maxColWidth: G } = W, K = [], Q = [], U = [], ee = {}, J = [], X = [];
  let Z = 0, ie = 0, te = 0;
  W.cols.forEach((Ce) => {
    if (Ce.hidden)
      return;
    const {
      name: Re,
      type: Ie = "",
      fixed: Oe = !1,
      flex: Le = !1,
      width: He = F,
      minWidth: Ve = Y,
      maxWidth: Ye = G,
      ...Ei
    } = Ce, Pe = {
      name: Re,
      type: Ie,
      setting: {
        name: Re,
        type: Ie,
        fixed: Oe,
        flex: Le,
        width: He,
        minWidth: Ve,
        maxWidth: Ye,
        ...Ei
      },
      flex: Oe ? 0 : Le === !0 ? 1 : typeof Le == "number" ? Le : 0,
      left: 0,
      width: clamp(He, Ve, Ye),
      realWidth: 0,
      visible: !0,
      index: J.length
    };
    D.forEach((Cr) => {
      var Er, Tr;
      const Un = (Er = Cr.colTypes) == null ? void 0 : Er[Ie];
      if (Un) {
        const Ar = typeof Un == "function" ? Un(Pe) : Un;
        Ar && Object.assign(Pe.setting, Ar);
      }
      (Tr = Cr.onAddCol) == null || Tr.call(this, Pe);
    }), Pe.width = clamp(Pe.setting.width ?? Pe.width, Pe.setting.minWidth ?? Ve, Pe.setting.maxWidth ?? Ye), Pe.realWidth = Pe.realWidth || Pe.width, Oe === "left" ? (Pe.left = Z, Z += Pe.width, K.push(Pe)) : Oe === "right" ? (Pe.left = ie, ie += Pe.width, Q.push(Pe)) : (Pe.left = te, te += Pe.width, U.push(Pe)), Pe.flex && X.push(Pe), J.push(Pe), ee[Pe.name] = Pe;
  });
  let ne = W.width, oe = 0;
  const le = Z + te + ie;
  if (typeof ne == "function" && (ne = ne.call(this, le)), ne === "auto")
    oe = le;
  else if (ne === "100%") {
    const { parent: Ce } = this;
    if (Ce)
      oe = Ce.clientWidth;
    else {
      oe = 0, xe(this, dt, !0);
      return;
    }
  } else
    oe = ne ?? 0;
  const { data: ce, rowKey: ue = "id", rowHeight: pe } = W, de = [], se = (Ce, Re, Ie) => {
    var Le, He;
    const Oe = { data: Ie ?? { [ue]: Ce }, id: Ce, index: de.length, top: 0 };
    if (Ie || (Oe.lazy = !0), de.push(Oe), ((Le = W.onAddRow) == null ? void 0 : Le.call(this, Oe, Re)) !== !1) {
      for (const Ve of D)
        if (((He = Ve.onAddRow) == null ? void 0 : He.call(this, Oe, Re)) === !1)
          return;
    }
  };
  if (typeof ce == "number")
    for (let Ce = 0; Ce < ce; Ce++)
      se(`${Ce}`, Ce);
  else
    Array.isArray(ce) && ce.forEach((Ce, Re) => {
      typeof Ce == "object" ? se(`${Ce[ue] ?? ""}`, Re, Ce) : se(`${Ce ?? ""}`, Re);
    });
  let ae = de;
  const ge = {};
  if (W.onAddRows) {
    const Ce = W.onAddRows.call(this, ae);
    Ce && (ae = Ce);
  }
  for (const Ce of D) {
    const Re = (Ne = Ce.onAddRows) == null ? void 0 : Ne.call(this, ae);
    Re && (ae = Re);
  }
  ae.forEach((Ce, Re) => {
    ge[Ce.id] = Ce, Ce.index = Re, Ce.top = Ce.index * pe;
  });
  const { header: Me, footer: Ee } = W, ye = Me ? W.headerHeight || pe : 0, fe = Ee ? W.footerHeight || pe : 0;
  let _e = W.height, ve = 0;
  const $e = ae.length * pe, we = ye + fe + $e;
  if (typeof _e == "function" && (_e = _e.call(this, we)), _e === "auto")
    ve = we;
  else if (typeof _e == "object")
    ve = Math.min(_e.max, Math.max(_e.min, we));
  else if (_e === "100%") {
    const { parent: Ce } = this;
    if (Ce)
      ve = Ce.clientHeight;
    else {
      ve = 0, xe(this, dt, !0);
      return;
    }
  } else
    ve = _e;
  const be = ve - ye - fe, Se = oe - Z - ie, Ae = {
    options: W,
    allRows: de,
    width: oe,
    height: ve,
    rows: ae,
    rowsMap: ge,
    rowHeight: pe,
    rowsHeight: be,
    rowsHeightTotal: $e,
    header: Me,
    footer: Ee,
    footerGenerators: V,
    headerHeight: ye,
    footerHeight: fe,
    colsMap: ee,
    colsList: J,
    flexCols: X,
    colsInfo: {
      fixedLeftCols: K,
      fixedRightCols: Q,
      scrollCols: U,
      fixedLeftWidth: Z,
      scrollWidth: Se,
      scrollColsWidth: te,
      fixedRightWidth: ie
    }
  }, Te = (We = W.onLayout) == null ? void 0 : We.call(this, Ae);
  Te && Object.assign(Ae, Te), D.forEach((Ce) => {
    if (Ce.onLayout) {
      const Re = Ce.onLayout.call(this, Ae);
      Re && Object.assign(Ae, Re);
    }
  }), xe(this, Ke, Ae);
}, ar = new WeakSet(), Ci = function() {
  (ke(this, lr, ki).call(this) || !re(this, Ke)) && ke(this, cr, Si).call(this);
  const { layout: D } = this;
  if (!D)
    return;
  let { scrollLeft: W } = this.state;
  const { flexCols: V, colsInfo: { scrollCols: F, scrollWidth: Y, scrollColsWidth: G } } = D;
  if (V.length) {
    const le = Y - G;
    if (le > 0) {
      const ce = V.reduce((pe, de) => pe + de.flex, 0);
      let ue = 0;
      V.forEach((pe) => {
        const de = Math.min(le - ue, Math.ceil(le * (pe.flex / ce)));
        pe.realWidth = de + pe.width, ue += pe.realWidth;
      });
    } else
      V.forEach((ce) => {
        ce.realWidth = ce.width;
      });
  }
  W = Math.min(Math.max(0, G - Y), W);
  let K = 0;
  F.forEach((le) => {
    le.left = K, K += le.realWidth, le.visible = le.left + le.realWidth >= W && le.left <= W + Y;
  });
  const { rowsHeightTotal: Q, rowsHeight: U, rows: ee, rowHeight: J } = D, X = Math.min(Math.max(0, Q - U), this.state.scrollTop), Z = Math.floor(X / J), ie = X + U, te = Math.min(ee.length, Math.ceil(ie / J)), ne = [], { rowDataGetter: oe } = this.options;
  for (let le = Z; le < te; le++) {
    const ce = ee[le];
    ce.lazy && oe && (ce.data = oe([ce.id])[0], ce.lazy = !1), ne.push(ce);
  }
  return D.visibleRows = ne, D.scrollTop = X, D.scrollLeft = W, D;
}, me(Vn, "addPlugin", addPlugin), me(Vn, "removePlugin", removePlugin), Vn);
function applyColHover(E, R) {
  R !== void 0 ? E.data.hoverCol = R : R = E.data.hoverCol;
  const { current: D } = E.ref;
  if (!D)
    return;
  const W = "dtable-col-hover";
  D.querySelectorAll(`.${W}`).forEach((V) => V.classList.remove(W)), typeof R == "string" && R.length && D.querySelectorAll(`.dtable-cell[data-col="${R}"]`).forEach((V) => V.classList.add(W));
}
const colHoverPlugin = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (E) => !!E.colHover,
  events: {
    mouseover(E) {
      var V;
      const { colHover: R } = this.options;
      if (!R)
        return;
      const D = (V = E.target) == null ? void 0 : V.closest(".dtable-cell");
      if (!D || R === "header" && !D.closest(".dtable-header"))
        return;
      const W = (D == null ? void 0 : D.getAttribute("data-col")) ?? !1;
      applyColHover(this, W);
    },
    mouseleave() {
      applyColHover(this, !1);
    }
  }
}, colHover = definePlugin(colHoverPlugin, { buildIn: !0 }), style$2 = "";
function toggleCheckRows(E, R) {
  var Y, G;
  typeof E == "boolean" && (R = E, E = void 0);
  const D = this.state.checkedRows, W = {}, { canRowCheckable: V } = this.options, F = (K, Q) => {
    V && !V.call(this, K) || !!D[K] === Q || (Q ? D[K] = !0 : delete D[K], W[K] = Q);
  };
  if (E === void 0 ? (R === void 0 && (R = !isAllRowChecked.call(this)), (Y = this.layout) == null || Y.allRows.forEach(({ id: K }) => {
    F(K, !!R);
  })) : (Array.isArray(E) || (E = [E]), E.forEach((K) => {
    F(K, R ?? !D[K]);
  })), Object.keys(W).length) {
    const K = (G = this.options.beforeCheckRows) == null ? void 0 : G.call(this, E, W, D);
    K && Object.keys(K).forEach((Q) => {
      K[Q] ? D[Q] = !0 : delete D[Q];
    }), this.setState({ checkedRows: { ...D } }, () => {
      var Q;
      (Q = this.options.onCheckChange) == null || Q.call(this, W);
    });
  }
  return W;
}
function isRowChecked(E) {
  return this.state.checkedRows[E] ?? !1;
}
function isAllRowChecked() {
  var D, W;
  const E = this.getChecks().length, { canRowCheckable: R } = this.options;
  return R ? E === ((D = this.layout) == null ? void 0 : D.allRows.reduce((V, F) => V + (R.call(this, F.id) ? 1 : 0), 0)) : E === ((W = this.layout) == null ? void 0 : W.allRows.length);
}
function getChecks() {
  return Object.keys(this.state.checkedRows);
}
const checkablePlugin = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (E) => !!E.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows,
    isRowChecked,
    isAllRowChecked,
    getChecks
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
      const E = this.isAllRowChecked();
      return [
        /* @__PURE__ */ o$2("div", { style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: /* @__PURE__ */ o$2("input", { type: "checkbox", checked: E }) })
      ];
    },
    checkedInfo(E, R) {
      const D = this.getChecks().length, W = [];
      return D && W.push(this.i18n("checkedCountInfo", { selected: D })), W.push(this.i18n("totalCountInfo", { total: R.allRows.length })), [
        /* @__PURE__ */ o$2("div", { children: W.join(", ") })
      ];
    }
  },
  onRenderCell(E, { row: R, col: D }) {
    var G;
    const { id: W } = R, { canRowCheckable: V } = this.options;
    if (V && !V.call(this, W))
      return E;
    const { checkbox: F } = D.setting;
    if (typeof F == "function" ? F.call(this, W) : F) {
      const K = this.isRowChecked(W), Q = ((G = this.options.checkboxRender) == null ? void 0 : G.call(this, K, W)) ?? /* @__PURE__ */ o$2("input", { type: "checkbox", checked: K });
      E.unshift(Q), E.push({ className: "has-checkbox" });
    }
    return E;
  },
  onRenderHeaderCell(E, { row: R, col: D }) {
    var Y;
    const { id: W } = R, { checkbox: V } = D.setting;
    if (typeof V == "function" ? V.call(this, W) : V) {
      const G = this.isAllRowChecked(), K = ((Y = this.options.checkboxRender) == null ? void 0 : Y.call(this, G, W)) ?? /* @__PURE__ */ o$2("input", { type: "checkbox", checked: G });
      E.unshift(K), E.push({ className: "has-checkbox" });
    }
    return E;
  },
  onRenderRow({ props: E, row: R }) {
    if (this.isRowChecked(R.id))
      return { className: classes(E.className, "is-checked") };
  },
  onHeaderCellClick(E) {
    const R = E.target;
    if (!R)
      return;
    const D = R.closest('input[type="checkbox"],.dtable-checkbox');
    D && (this.toggleCheckRows(D.checked), E.stopPropagation());
  },
  onRowClick(E, { rowID: R }) {
    const D = E.target;
    if (!D)
      return;
    (D.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(R);
  }
}, checkable = definePlugin(checkablePlugin), toggle = "", style$1 = "";
var NestedRowState = /* @__PURE__ */ ((E) => (E.unknown = "", E.collapsed = "collapsed", E.expanded = "expanded", E.hidden = "hidden", E.normal = "normal", E))(NestedRowState || {});
function getNestedRowInfo(E) {
  const R = this.data.nestedMap.get(E);
  if (!R || R.state !== "")
    return R ?? { state: "normal", level: -1 };
  if (!R.parent && !R.children)
    return R.state = "normal", R;
  const D = this.state.collapsedRows, W = R.children && D && D[E];
  let V = !1, { parent: F } = R;
  for (; F; ) {
    const Y = getNestedRowInfo.call(this, F);
    if (Y.state !== "expanded") {
      V = !0;
      break;
    }
    F = Y.parent;
  }
  return R.state = V ? "hidden" : W ? "collapsed" : R.children ? "expanded" : "normal", R.level = R.parent ? getNestedRowInfo.call(this, R.parent).level + 1 : 0, R;
}
function toggleRow(E, R) {
  let D = this.state.collapsedRows ?? {};
  const { nestedMap: W } = this.data;
  if (E === "HEADER")
    if (R === void 0 && (R = !isAllCollapsed.call(this)), R) {
      const V = W.entries();
      for (const [F, Y] of V)
        Y.state === "expanded" && (D[F] = !0);
    } else
      D = {};
  else {
    const V = Array.isArray(E) ? E : [E];
    R === void 0 && (R = !D[V[0]]), V.forEach((F) => {
      const Y = W.get(F);
      R && (Y != null && Y.children) ? D[F] = !0 : delete D[F];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...D } }
  }, () => {
    var V;
    (V = this.options.onNestedChange) == null || V.call(this);
  });
}
function isAllCollapsed() {
  const E = this.data.nestedMap.values();
  for (const R of E)
    if (R.state === "expanded")
      return !1;
  return !0;
}
function updateNestedMapOrders(E, R = 0, D, W = 0) {
  var V;
  D || (D = [...E.keys()]);
  for (const F of D) {
    const Y = E.get(F);
    Y && (Y.level === W && (Y.order = R++), (V = Y.children) != null && V.length && (R = updateNestedMapOrders(E, R, Y.children, W + 1)));
  }
  return R;
}
function checkNestedRow(E, R, D, W) {
  const V = E.getNestedRowInfo(R);
  return !V || V.state === "" || !V.children || V.children.forEach((F) => {
    W[F] = D, checkNestedRow(E, F, D, W);
  }), V;
}
function updateParentRow(E, R, D, W, V) {
  var G;
  const F = E.getNestedRowInfo(R);
  if (!F || F.state === "")
    return;
  ((G = F.children) == null ? void 0 : G.every((K) => {
    const Q = !!(W[K] !== void 0 ? W[K] : V[K]);
    return D === Q;
  })) && (W[R] = D), F.parent && updateParentRow(E, F.parent, D, W, V);
}
const nestedPlugin = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(E, R) {
      const { nestedMap: D } = this.data, W = D.get(E.id), V = D.get(R.id);
      return (W == null ? void 0 : W.parent) === (V == null ? void 0 : V.parent);
    },
    beforeCheckRows(E, R, D) {
      if (!this.options.checkable || !(E != null && E.length))
        return;
      const W = {};
      return Object.entries(R).forEach(([V, F]) => {
        const Y = checkNestedRow(this, V, F, W);
        Y != null && Y.parent && updateParentRow(this, Y.parent, F, W, D);
      }), W;
    }
  },
  when: (E) => !!E.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow,
    isAllCollapsed,
    getNestedRowInfo
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(E) {
    var V, F;
    const { nestedMap: R } = this.data, D = (V = E.data) == null ? void 0 : V[this.options.nestedParentKey ?? "parent"], W = R.get(E.id) ?? {
      state: "",
      level: 0
    };
    if (W.parent = D, (F = E.data) != null && F[this.options.asParentKey ?? "asParent"] && (W.children = []), R.set(E.id, W), D) {
      let Y = R.get(D);
      Y || (Y = {
        state: "",
        level: 0
      }, R.set(D, Y)), Y.children || (Y.children = []), Y.children.push(E.id);
    }
  },
  onAddRows(E) {
    return E = E.filter(
      (R) => this.getNestedRowInfo(R.id).state !== "hidden"
      /* hidden */
    ), updateNestedMapOrders(this.data.nestedMap), E.sort((R, D) => {
      const W = this.getNestedRowInfo(R.id), V = this.getNestedRowInfo(D.id), F = (W.order ?? 0) - (V.order ?? 0);
      return F === 0 ? R.index - D.index : F;
    }), E;
  },
  onRenderCell(E, { col: R, row: D }) {
    var G;
    const { id: W, data: V } = D, { nestedToggle: F } = R.setting, Y = this.getNestedRowInfo(W);
    if (F && (Y.children || Y.parent) && E.unshift(((G = this.options.onRenderNestedToggle) == null ? void 0 : G.call(this, Y, W, R, V)) ?? /* @__PURE__ */ o$2("a", { role: "button", className: `dtable-nested-toggle state${Y.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ o$2("span", { className: "toggle-icon" }) })), Y.level) {
      let { nestedIndent: K = F } = R.setting;
      K && (K === !0 && (K = this.options.nestedIndent ?? 12), E.unshift(/* @__PURE__ */ o$2("div", { className: "dtable-nested-indent", style: { width: K * Y.level + "px" } })));
    }
    return E;
  },
  onRenderHeaderCell(E, { row: R, col: D }) {
    var V;
    const { id: W } = R;
    return D.setting.nestedToggle && E.unshift(((V = this.options.onRenderNestedToggle) == null ? void 0 : V.call(this, void 0, W, D, void 0)) ?? /* @__PURE__ */ o$2("a", { type: "button", className: "dtable-nested-toggle state", children: /* @__PURE__ */ o$2("span", { className: "toggle-icon" }) })), E;
  },
  onRenderRow({ props: E, row: R }) {
    const D = this.getNestedRowInfo(R.id);
    return {
      className: classes(E.className, `is-${D.state}`),
      "data-parent": D.parent
    };
  },
  onRenderHeaderRow({ props: E }) {
    return E.className = classes(E.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), E;
  },
  onHeaderCellClick(E) {
    const R = E.target;
    if (!(!R || !R.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(E, { rowID: R }) {
    const D = E.target;
    if (!(!D || !this.getNestedRowInfo(R).children || !D.closest(".dtable-nested-toggle")))
      return this.toggleRow(R), !0;
  }
}, nested = definePlugin(nestedPlugin), style = "", richPlugin = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(E) {
        return E[0] = {
          html: E[0]
        }, E;
      }
    },
    link: {
      onRenderCell(E, { col: R, row: D }) {
        const { linkTemplate: W = "", linkProps: V } = R.setting, F = formatString(W, D.data);
        return E[0] = /* @__PURE__ */ o$2("a", { href: F, ...V, children: E[0] }), E;
      }
    },
    avatar: {
      onRenderCell(E, { col: R, row: D }) {
        const { data: W } = D, { avatarWithName: V, avatarClass: F = "size-xs circle", avatarKey: Y = `${R.name}Avatar` } = R.setting, G = /* @__PURE__ */ o$2("div", { className: `avatar ${F} flex-none`, children: /* @__PURE__ */ o$2("img", { src: W ? W[Y] : "" }) });
        return V ? E.unshift(G) : E[0] = G, E;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(E, { col: R }) {
        const { circleSize: D = 24, circleBorderSize: W = 1, circleBgColor: V = "var(--color-border)", circleColor: F = "var(--color-success-500)" } = R.setting, Y = (D - W) / 2, G = D / 2, K = E[0];
        return E[0] = /* @__PURE__ */ o$2("svg", { width: D, height: D, children: [
          /* @__PURE__ */ o$2("circle", { cx: G, cy: G, r: Y, "stroke-width": W, stroke: V, fill: "transparent" }),
          /* @__PURE__ */ o$2("circle", { cx: G, cy: G, r: Y, "stroke-width": W, stroke: F, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * Y * 2, "stroke-dashoffset": Math.PI * Y * 2 * (100 - K) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ o$2("text", { x: G, y: G + W, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${Y}px` }, children: Math.round(K) })
        ] }), E;
      }
    },
    actionButtons: {
      onRenderCell(E, { col: R, row: D }) {
        var G;
        const W = (G = D.data) == null ? void 0 : G[R.name];
        if (!W)
          return E;
        const { actionBtnTemplate: V = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: F = {}, actionBtnClass: Y = "btn text-primary square size-sm ghost" } = R.setting;
        return [{
          html: W.map((K) => {
            typeof K == "string" && (K = { action: K });
            const Q = F[K.action];
            return Q && (K = { className: Y, ...Q, ...K }), formatString(V, K);
          }).join(" ")
        }];
      }
    },
    format: {
      onRenderCell(E, { col: R }) {
        let { format: D } = R.setting;
        if (!D)
          return E;
        typeof D == "string" && (D = { type: "text", format: D });
        const { format: W, type: V } = D, F = E[0];
        return typeof W == "function" ? E[0] = V === "html" ? { html: W(F) } : W(F) : V === "datetime" ? E[0] = formatDate(F, W) : V === "html" ? E[0] = { html: formatString(W, F) } : E[0] = formatString(W, F), E;
      }
    }
  }
}, rich = definePlugin(richPlugin, { buildIn: !0 }), sortTypePlugin = {
  name: "sort-type",
  onRenderHeaderCell(E, { col: R }) {
    const { sortType: D } = R.setting;
    if (D) {
      const { sortLink: W = this.options.sortLink, sortAttrs: V } = R.setting, F = D === !0 ? "none" : D;
      if (E.push(
        /* @__PURE__ */ o$2("div", { className: `dtable-sort dtable-sort-${F}` }),
        { outer: !0, attrs: { "data-sort": F } }
      ), W) {
        const Y = typeof W == "function" ? W.call(this, R, F) : W;
        E.push(
          { tagName: "a", attrs: { href: Y, ...V } }
        );
      }
    }
    return E;
  }
}, sortType = definePlugin(sortTypePlugin, { buildIn: !0 }), plugins = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState,
  checkable,
  colHover,
  nested,
  rich,
  sortType
}, Symbol.toStringTag, { value: "Module" }));
class DTable extends ComponentFromReact {
}
me(DTable, "NAME", "dtable"), me(DTable, "Component", DTable$1), me(DTable, "definePlugin", definePlugin), me(DTable, "removePlugin", removePlugin), me(DTable, "plugins", plugins);
const navTabs = "";
var Ge;
class NavTabs extends ComponentBase {
  constructor() {
    super(...arguments);
    he(this, Ge, void 0);
  }
  init() {
    const { element: D } = this;
    D !== document.body && !D.hasAttribute("data-toggle") && D.setAttribute("data-toggle", "tab");
  }
  showTarget() {
    const D = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    D != null && D.startsWith("#") && xe(this, Ge, document.querySelector(D)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), re(this, Ge) && (this.addActive(re(this, Ge).parentElement, re(this, Ge)), re(this, Ge).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const D = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    D != null && D.startsWith("#") && xe(this, Ge, document.querySelector(D)), re(this, Ge) && (this.addActive(re(this, Ge).parentElement, re(this, Ge)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
  }
  addActive(D, W) {
    const V = D.children;
    Array.from(V).forEach((Y) => {
      Y.classList.remove("active"), Y.classList.contains("fade") && Y.classList.remove("in");
    }), W.classList.add("active"), W.classList.contains("fade") && this.transition(W).then(function() {
      W.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(D) {
    return new Promise(function(W) {
      setTimeout(() => {
        D.classList.add("in"), W();
      }, 100);
    });
  }
}
Ge = new WeakMap(), me(NavTabs, "NAME", "NavTabs"), me(NavTabs, "NAV_CLASS", "nav-tabs"), me(NavTabs, "EVENTS", !0), me(NavTabs, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (E) => {
  E.target instanceof HTMLElement && (E.target.dataset.toggle === "tab" || E.target.getAttribute("data-tab")) && (E.preventDefault(), new NavTabs(E.target).showTarget());
});
const index$a = "", vars = "", index$9 = "", index$8 = "", index$7 = "", index$6 = "", index$5 = "", index$4 = "", index$3 = "", index$2 = "", index$1 = "", index = "";
export {
  ActionMenu,
  ActionMenuNested,
  AjaxForm,
  Avatar,
  BtnGroup,
  Button,
  ContextMenu,
  DTable,
  Datepicker,
  Dropdown,
  EventBus,
  Menu,
  Messager,
  Modal,
  ModalTrigger,
  Nav,
  NavTabs,
  Pager,
  Picker,
  ProgressCircle,
  Switch,
  TIME_DAY,
  Timepicker,
  Toolbar,
  Tooltip,
  VirtualGrid,
  addI18nMap,
  ajax$1 as ajax,
  main as browser,
  calculateTimestamp,
  cash,
  convertBytes,
  createDate,
  formatBytes,
  formatDate,
  formatDateSpan,
  formatString,
  getLangCode,
  getTimeBeforeDesc,
  i18n,
  isDBY,
  isObject,
  isSameDay,
  isSameMonth,
  isSameWeek,
  isSameYear,
  isToday,
  isTomorrow,
  isYesterday,
  mergeDeep,
  nativeEvents,
  setLangCode,
  store
};
