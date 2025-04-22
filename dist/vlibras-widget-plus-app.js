var ir, V, Aa, ft, mi, Ea, Sa, Ta, Sn, dn, pn, Na, rr = {}, ka = [], Cl = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, or = Array.isArray;
function Ze(e, r) {
  for (var t in r) e[t] = r[t];
  return e;
}
function Tn(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Xe(e, r, t) {
  var n, i, o, s = {};
  for (o in r) o == "key" ? n = r[o] : o == "ref" ? i = r[o] : s[o] = r[o];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? ir.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null) for (o in e.defaultProps) s[o] === void 0 && (s[o] = e.defaultProps[o]);
  return Jt(e, s, n, i, null);
}
function Jt(e, r, t, n, i) {
  var o = { type: e, props: r, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++Aa, __i: -1, __u: 0 };
  return i == null && V.vnode != null && V.vnode(o), o;
}
function La() {
  return { current: null };
}
function ve(e) {
  return e.children;
}
function Ue(e, r) {
  this.props = e, this.context = r;
}
function kt(e, r) {
  if (r == null) return e.__ ? kt(e.__, e.__i + 1) : null;
  for (var t; r < e.__k.length; r++) if ((t = e.__k[r]) != null && t.__e != null) return t.__e;
  return typeof e.type == "function" ? kt(e) : null;
}
function Ra(e) {
  var r, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, r = 0; r < e.__k.length; r++) if ((t = e.__k[r]) != null && t.__e != null) {
      e.__e = e.__c.base = t.__e;
      break;
    }
    return Ra(e);
  }
}
function hn(e) {
  (!e.__d && (e.__d = !0) && ft.push(e) && !Ar.__r++ || mi !== V.debounceRendering) && ((mi = V.debounceRendering) || Ea)(Ar);
}
function Ar() {
  for (var e, r, t, n, i, o, s, l = 1; ft.length; ) ft.length > l && ft.sort(Sa), e = ft.shift(), l = ft.length, e.__d && (t = void 0, i = (n = (r = e).__v).__e, o = [], s = [], r.__P && ((t = Ze({}, n)).__v = n.__v + 1, V.vnode && V.vnode(t), Nn(r.__P, t, n, r.__n, r.__P.namespaceURI, 32 & n.__u ? [i] : null, o, i ?? kt(n), !!(32 & n.__u), s), t.__v = n.__v, t.__.__k[t.__i] = t, Pa(o, t, s), t.__e != i && Ra(t)));
  Ar.__r = 0;
}
function Ma(e, r, t, n, i, o, s, l, c, u, p) {
  var d, g, v, x, _, A, E = n && n.__k || ka, b = r.length;
  for (c = yl(t, r, E, c, b), d = 0; d < b; d++) (v = t.__k[d]) != null && (g = v.__i === -1 ? rr : E[v.__i] || rr, v.__i = d, A = Nn(e, v, g, i, o, s, l, c, u, p), x = v.__e, v.ref && g.ref != v.ref && (g.ref && kn(g.ref, null, v), p.push(v.ref, v.__c || x, v)), _ == null && x != null && (_ = x), 4 & v.__u || g.__k === v.__k ? c = Ia(v, c, e) : typeof v.type == "function" && A !== void 0 ? c = A : x && (c = x.nextSibling), v.__u &= -7);
  return t.__e = _, c;
}
function yl(e, r, t, n, i) {
  var o, s, l, c, u, p = t.length, d = p, g = 0;
  for (e.__k = new Array(i), o = 0; o < i; o++) (s = r[o]) != null && typeof s != "boolean" && typeof s != "function" ? (c = o + g, (s = e.__k[o] = typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? Jt(null, s, null, null, null) : or(s) ? Jt(ve, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? Jt(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s).__ = e, s.__b = e.__b + 1, l = null, (u = s.__i = _l(s, t, c, d)) !== -1 && (d--, (l = t[u]) && (l.__u |= 2)), l == null || l.__v === null ? (u == -1 && (i > p ? g-- : i < p && g++), typeof s.type != "function" && (s.__u |= 4)) : u != c && (u == c - 1 ? g-- : u == c + 1 ? g++ : (u > c ? g-- : g++, s.__u |= 4))) : e.__k[o] = null;
  if (d) for (o = 0; o < p; o++) (l = t[o]) != null && (2 & l.__u) == 0 && (l.__e == n && (n = kt(l)), Da(l, l));
  return n;
}
function Ia(e, r, t) {
  var n, i;
  if (typeof e.type == "function") {
    for (n = e.__k, i = 0; n && i < n.length; i++) n[i] && (n[i].__ = e, r = Ia(n[i], r, t));
    return r;
  }
  e.__e != r && (r && e.type && !t.contains(r) && (r = kt(e)), t.insertBefore(e.__e, r || null), r = e.__e);
  do
    r = r && r.nextSibling;
  while (r != null && r.nodeType == 8);
  return r;
}
function tt(e, r) {
  return r = r || [], e == null || typeof e == "boolean" || (or(e) ? e.some(function(t) {
    tt(t, r);
  }) : r.push(e)), r;
}
function _l(e, r, t, n) {
  var i, o, s = e.key, l = e.type, c = r[t];
  if (c === null && e.key == null || c && s == c.key && l === c.type && (2 & c.__u) == 0) return t;
  if (n > (c != null && (2 & c.__u) == 0 ? 1 : 0)) for (i = t - 1, o = t + 1; i >= 0 || o < r.length; ) {
    if (i >= 0) {
      if ((c = r[i]) && (2 & c.__u) == 0 && s == c.key && l === c.type) return i;
      i--;
    }
    if (o < r.length) {
      if ((c = r[o]) && (2 & c.__u) == 0 && s == c.key && l === c.type) return o;
      o++;
    }
  }
  return -1;
}
function vi(e, r, t) {
  r[0] == "-" ? e.setProperty(r, t ?? "") : e[r] = t == null ? "" : typeof t != "number" || Cl.test(r) ? t : t + "px";
}
function mr(e, r, t, n, i) {
  var o;
  e: if (r == "style") if (typeof t == "string") e.style.cssText = t;
  else {
    if (typeof n == "string" && (e.style.cssText = n = ""), n) for (r in n) t && r in t || vi(e.style, r, "");
    if (t) for (r in t) n && t[r] === n[r] || vi(e.style, r, t[r]);
  }
  else if (r[0] == "o" && r[1] == "n") o = r != (r = r.replace(Ta, "$1")), r = r.toLowerCase() in e || r == "onFocusOut" || r == "onFocusIn" ? r.toLowerCase().slice(2) : r.slice(2), e.l || (e.l = {}), e.l[r + o] = t, t ? n ? t.t = n.t : (t.t = Sn, e.addEventListener(r, o ? pn : dn, o)) : e.removeEventListener(r, o ? pn : dn, o);
  else {
    if (i == "http://www.w3.org/2000/svg") r = r.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (r != "width" && r != "height" && r != "href" && r != "list" && r != "form" && r != "tabIndex" && r != "download" && r != "rowSpan" && r != "colSpan" && r != "role" && r != "popover" && r in e) try {
      e[r] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && r[4] != "-" ? e.removeAttribute(r) : e.setAttribute(r, r == "popover" && t == 1 ? "" : t));
  }
}
function Ci(e) {
  return function(r) {
    if (this.l) {
      var t = this.l[r.type + e];
      if (r.u == null) r.u = Sn++;
      else if (r.u < t.t) return;
      return t(V.event ? V.event(r) : r);
    }
  };
}
function Nn(e, r, t, n, i, o, s, l, c, u) {
  var p, d, g, v, x, _, A, E, b, y, w, h, f, C, T, R, k, B = r.type;
  if (r.constructor !== void 0) return null;
  128 & t.__u && (c = !!(32 & t.__u), o = [l = r.__e = t.__e]), (p = V.__b) && p(r);
  e: if (typeof B == "function") try {
    if (E = r.props, b = "prototype" in B && B.prototype.render, y = (p = B.contextType) && n[p.__c], w = p ? y ? y.props.value : p.__ : n, t.__c ? A = (d = r.__c = t.__c).__ = d.__E : (b ? r.__c = d = new B(E, w) : (r.__c = d = new Ue(E, w), d.constructor = B, d.render = wl), y && y.sub(d), d.props = E, d.state || (d.state = {}), d.context = w, d.__n = n, g = d.__d = !0, d.__h = [], d._sb = []), b && d.__s == null && (d.__s = d.state), b && B.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = Ze({}, d.__s)), Ze(d.__s, B.getDerivedStateFromProps(E, d.__s))), v = d.props, x = d.state, d.__v = r, g) b && B.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), b && d.componentDidMount != null && d.__h.push(d.componentDidMount);
    else {
      if (b && B.getDerivedStateFromProps == null && E !== v && d.componentWillReceiveProps != null && d.componentWillReceiveProps(E, w), !d.__e && (d.shouldComponentUpdate != null && d.shouldComponentUpdate(E, d.__s, w) === !1 || r.__v == t.__v)) {
        for (r.__v != t.__v && (d.props = E, d.state = d.__s, d.__d = !1), r.__e = t.__e, r.__k = t.__k, r.__k.some(function(M) {
          M && (M.__ = r);
        }), h = 0; h < d._sb.length; h++) d.__h.push(d._sb[h]);
        d._sb = [], d.__h.length && s.push(d);
        break e;
      }
      d.componentWillUpdate != null && d.componentWillUpdate(E, d.__s, w), b && d.componentDidUpdate != null && d.__h.push(function() {
        d.componentDidUpdate(v, x, _);
      });
    }
    if (d.context = w, d.props = E, d.__P = e, d.__e = !1, f = V.__r, C = 0, b) {
      for (d.state = d.__s, d.__d = !1, f && f(r), p = d.render(d.props, d.state, d.context), T = 0; T < d._sb.length; T++) d.__h.push(d._sb[T]);
      d._sb = [];
    } else do
      d.__d = !1, f && f(r), p = d.render(d.props, d.state, d.context), d.state = d.__s;
    while (d.__d && ++C < 25);
    d.state = d.__s, d.getChildContext != null && (n = Ze(Ze({}, n), d.getChildContext())), b && !g && d.getSnapshotBeforeUpdate != null && (_ = d.getSnapshotBeforeUpdate(v, x)), R = p, p != null && p.type === ve && p.key == null && (R = Oa(p.props.children)), l = Ma(e, or(R) ? R : [R], r, t, n, i, o, s, l, c, u), d.base = r.__e, r.__u &= -161, d.__h.length && s.push(d), A && (d.__E = d.__ = null);
  } catch (M) {
    if (r.__v = null, c || o != null) if (M.then) {
      for (r.__u |= c ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
      o[o.indexOf(l)] = null, r.__e = l;
    } else for (k = o.length; k--; ) Tn(o[k]);
    else r.__e = t.__e, r.__k = t.__k;
    V.__e(M, r, t);
  }
  else o == null && r.__v == t.__v ? (r.__k = t.__k, r.__e = t.__e) : l = r.__e = bl(t.__e, r, t, n, i, o, s, c, u);
  return (p = V.diffed) && p(r), 128 & r.__u ? void 0 : l;
}
function Pa(e, r, t) {
  for (var n = 0; n < t.length; n++) kn(t[n], t[++n], t[++n]);
  V.__c && V.__c(r, e), e.some(function(i) {
    try {
      e = i.__h, i.__h = [], e.some(function(o) {
        o.call(i);
      });
    } catch (o) {
      V.__e(o, i.__v);
    }
  });
}
function Oa(e) {
  return typeof e != "object" || e == null ? e : or(e) ? e.map(Oa) : Ze({}, e);
}
function bl(e, r, t, n, i, o, s, l, c) {
  var u, p, d, g, v, x, _, A = t.props, E = r.props, b = r.type;
  if (b == "svg" ? i = "http://www.w3.org/2000/svg" : b == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), o != null) {
    for (u = 0; u < o.length; u++) if ((v = o[u]) && "setAttribute" in v == !!b && (b ? v.localName == b : v.nodeType == 3)) {
      e = v, o[u] = null;
      break;
    }
  }
  if (e == null) {
    if (b == null) return document.createTextNode(E);
    e = document.createElementNS(i, b, E.is && E), l && (V.__m && V.__m(r, o), l = !1), o = null;
  }
  if (b === null) A === E || l && e.data === E || (e.data = E);
  else {
    if (o = o && ir.call(e.childNodes), A = t.props || rr, !l && o != null) for (A = {}, u = 0; u < e.attributes.length; u++) A[(v = e.attributes[u]).name] = v.value;
    for (u in A) if (v = A[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") d = v;
      else if (!(u in E)) {
        if (u == "value" && "defaultValue" in E || u == "checked" && "defaultChecked" in E) continue;
        mr(e, u, null, v, i);
      }
    }
    for (u in E) v = E[u], u == "children" ? g = v : u == "dangerouslySetInnerHTML" ? p = v : u == "value" ? x = v : u == "checked" ? _ = v : l && typeof v != "function" || A[u] === v || mr(e, u, v, A[u], i);
    if (p) l || d && (p.__html === d.__html || p.__html === e.innerHTML) || (e.innerHTML = p.__html), r.__k = [];
    else if (d && (e.innerHTML = ""), Ma(r.type === "template" ? e.content : e, or(g) ? g : [g], r, t, n, b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, o, s, o ? o[0] : t.__k && kt(t, 0), l, c), o != null) for (u = o.length; u--; ) Tn(o[u]);
    l || (u = "value", b == "progress" && x == null ? e.removeAttribute("value") : x !== void 0 && (x !== e[u] || b == "progress" && !x || b == "option" && x !== A[u]) && mr(e, u, x, A[u], i), u = "checked", _ !== void 0 && _ !== e[u] && mr(e, u, _, A[u], i));
  }
  return e;
}
function kn(e, r, t) {
  try {
    if (typeof e == "function") {
      var n = typeof e.__u == "function";
      n && e.__u(), n && r == null || (e.__u = e(r));
    } else e.current = r;
  } catch (i) {
    V.__e(i, t);
  }
}
function Da(e, r, t) {
  var n, i;
  if (V.unmount && V.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || kn(n, null, r)), (n = e.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (o) {
      V.__e(o, r);
    }
    n.base = n.__P = null;
  }
  if (n = e.__k) for (i = 0; i < n.length; i++) n[i] && Da(n[i], r, t || typeof e.type != "function");
  t || Tn(e.__e), e.__c = e.__ = e.__e = void 0;
}
function wl(e, r, t) {
  return this.constructor(e, t);
}
function Ye(e, r, t) {
  var n, i, o, s;
  r == document && (r = document.documentElement), V.__ && V.__(e, r), i = (n = typeof t == "function") ? null : t && t.__k || r.__k, o = [], s = [], Nn(r, e = (!n && t || r).__k = Xe(ve, null, [e]), i || rr, rr, r.namespaceURI, !n && t ? [t] : i ? null : r.firstChild ? ir.call(r.childNodes) : null, o, !n && t ? t : i ? i.__e : r.firstChild, n, s), Pa(o, e, s);
}
function Ha(e, r) {
  Ye(e, r, Ha);
}
function xl(e, r, t) {
  var n, i, o, s, l = Ze({}, e.props);
  for (o in e.type && e.type.defaultProps && (s = e.type.defaultProps), r) o == "key" ? n = r[o] : o == "ref" ? i = r[o] : l[o] = r[o] === void 0 && s !== void 0 ? s[o] : r[o];
  return arguments.length > 2 && (l.children = arguments.length > 3 ? ir.call(arguments, 2) : t), Jt(e.type, l, n || e.key, i || e.ref, null);
}
function Ba(e) {
  function r(t) {
    var n, i;
    return this.getChildContext || (n = /* @__PURE__ */ new Set(), (i = {})[r.__c] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value !== o.value && n.forEach(function(s) {
        s.__e = !0, hn(s);
      });
    }, this.sub = function(o) {
      n.add(o);
      var s = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        n && n.delete(o), s && s.call(o);
      };
    }), t.children;
  }
  return r.__c = "__cC" + Na++, r.__ = e, r.Provider = r.__l = (r.Consumer = function(t, n) {
    return t.children(n);
  }).contextType = r, r;
}
ir = ka.slice, V = { __e: function(e, r, t, n) {
  for (var i, o, s; r = r.__; ) if ((i = r.__c) && !i.__) try {
    if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), s = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, n || {}), s = i.__d), s) return i.__E = i;
  } catch (l) {
    e = l;
  }
  throw e;
} }, Aa = 0, Ue.prototype.setState = function(e, r) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ze({}, this.state), typeof e == "function" && (e = e(Ze({}, t), this.props)), e && Ze(t, e), e != null && this.__v && (r && this._sb.push(r), hn(this));
}, Ue.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), hn(this));
}, Ue.prototype.render = ve, ft = [], Ea = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Sa = function(e, r) {
  return e.__v.__b - r.__v.__b;
}, Ar.__r = 0, Ta = /(PointerCapture)$|Capture$/i, Sn = 0, dn = Ci(!1), pn = Ci(!0), Na = 0;
var Al = 0;
function a(e, r, t, n, i, o) {
  r || (r = {});
  var s, l, c = r;
  if ("ref" in c) for (l in c = {}, r) l == "ref" ? s = r[l] : c[l] = r[l];
  var u = { type: e, props: c, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Al, __i: -1, __u: 0, __source: i, __self: o };
  if (typeof e == "function" && (s = e.defaultProps)) for (l in s) c[l] === void 0 && (c[l] = s[l]);
  return V.vnode && V.vnode(u), u;
}
var nt, re, Hr, yi, Lt = 0, Fa = [], se = V, _i = se.__b, bi = se.__r, wi = se.diffed, xi = se.__c, Ai = se.unmount, Ei = se.__;
function mt(e, r) {
  se.__h && se.__h(re, e, Lt || r), Lt = 0;
  var t = re.__H || (re.__H = { __: [], __h: [] });
  return e >= t.__.length && t.__.push({}), t.__[e];
}
function $(e) {
  return Lt = 1, Sr($a, e);
}
function Sr(e, r, t) {
  var n = mt(nt++, 2);
  if (n.t = e, !n.__c && (n.__ = [t ? t(r) : $a(void 0, r), function(l) {
    var c = n.__N ? n.__N[0] : n.__[0], u = n.t(c, l);
    c !== u && (n.__N = [u, n.__[1]], n.__c.setState({}));
  }], n.__c = re, !re.__f)) {
    var i = function(l, c, u) {
      if (!n.__c.__H) return !0;
      var p = n.__c.__H.__.filter(function(g) {
        return !!g.__c;
      });
      if (p.every(function(g) {
        return !g.__N;
      })) return !o || o.call(this, l, c, u);
      var d = n.__c.props !== l;
      return p.forEach(function(g) {
        if (g.__N) {
          var v = g.__[0];
          g.__ = g.__N, g.__N = void 0, v !== g.__[0] && (d = !0);
        }
      }), o && o.call(this, l, c, u) || d;
    };
    re.__f = !0;
    var o = re.shouldComponentUpdate, s = re.componentWillUpdate;
    re.componentWillUpdate = function(l, c, u) {
      if (this.__e) {
        var p = o;
        o = void 0, i(l, c, u), o = p;
      }
      s && s.call(this, l, c, u);
    }, re.shouldComponentUpdate = i;
  }
  return n.__N || n.__;
}
function P(e, r) {
  var t = mt(nt++, 3);
  !se.__s && Pn(t.__H, r) && (t.__ = e, t.u = r, re.__H.__h.push(t));
}
function Mt(e, r) {
  var t = mt(nt++, 4);
  !se.__s && Pn(t.__H, r) && (t.__ = e, t.u = r, re.__h.push(t));
}
function Te(e) {
  return Lt = 5, ar(function() {
    return { current: e };
  }, []);
}
function Ln(e, r, t) {
  Lt = 6, Mt(function() {
    if (typeof e == "function") {
      var n = e(r());
      return function() {
        e(null), n && typeof n == "function" && n();
      };
    }
    if (e) return e.current = r(), function() {
      return e.current = null;
    };
  }, t == null ? t : t.concat(e));
}
function ar(e, r) {
  var t = mt(nt++, 7);
  return Pn(t.__H, r) && (t.__ = e(), t.__H = r, t.__h = e), t.__;
}
function sr(e, r) {
  return Lt = 8, ar(function() {
    return e;
  }, r);
}
function Rn(e) {
  var r = re.context[e.__c], t = mt(nt++, 9);
  return t.c = e, r ? (t.__ == null && (t.__ = !0, r.sub(re)), r.props.value) : e.__;
}
function Mn(e, r) {
  se.useDebugValue && se.useDebugValue(r ? r(e) : e);
}
function El(e) {
  var r = mt(nt++, 10), t = $();
  return r.__ = e, re.componentDidCatch || (re.componentDidCatch = function(n, i) {
    r.__ && r.__(n, i), t[1](n);
  }), [t[0], function() {
    t[1](void 0);
  }];
}
function In() {
  var e = mt(nt++, 11);
  if (!e.__) {
    for (var r = re.__v; r !== null && !r.__m && r.__ !== null; ) r = r.__;
    var t = r.__m || (r.__m = [0, 0]);
    e.__ = "P" + t[0] + "-" + t[1]++;
  }
  return e.__;
}
function Sl() {
  for (var e; e = Fa.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(wr), e.__H.__h.forEach(fn), e.__H.__h = [];
  } catch (r) {
    e.__H.__h = [], se.__e(r, e.__v);
  }
}
se.__b = function(e) {
  re = null, _i && _i(e);
}, se.__ = function(e, r) {
  e && r.__k && r.__k.__m && (e.__m = r.__k.__m), Ei && Ei(e, r);
}, se.__r = function(e) {
  bi && bi(e), nt = 0;
  var r = (re = e.__c).__H;
  r && (Hr === re ? (r.__h = [], re.__h = [], r.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (r.__h.forEach(wr), r.__h.forEach(fn), r.__h = [], nt = 0)), Hr = re;
}, se.diffed = function(e) {
  wi && wi(e);
  var r = e.__c;
  r && r.__H && (r.__H.__h.length && (Fa.push(r) !== 1 && yi === se.requestAnimationFrame || ((yi = se.requestAnimationFrame) || Tl)(Sl)), r.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), Hr = re = null;
}, se.__c = function(e, r) {
  r.some(function(t) {
    try {
      t.__h.forEach(wr), t.__h = t.__h.filter(function(n) {
        return !n.__ || fn(n);
      });
    } catch (n) {
      r.some(function(i) {
        i.__h && (i.__h = []);
      }), r = [], se.__e(n, t.__v);
    }
  }), xi && xi(e, r);
}, se.unmount = function(e) {
  Ai && Ai(e);
  var r, t = e.__c;
  t && t.__H && (t.__H.__.forEach(function(n) {
    try {
      wr(n);
    } catch (i) {
      r = i;
    }
  }), t.__H = void 0, r && se.__e(r, t.__v));
};
var Si = typeof requestAnimationFrame == "function";
function Tl(e) {
  var r, t = function() {
    clearTimeout(n), Si && cancelAnimationFrame(r), setTimeout(e);
  }, n = setTimeout(t, 100);
  Si && (r = requestAnimationFrame(t));
}
function wr(e) {
  var r = re, t = e.__c;
  typeof t == "function" && (e.__c = void 0, t()), re = r;
}
function fn(e) {
  var r = re;
  e.__c = e.__(), re = r;
}
function Pn(e, r) {
  return !e || e.length !== r.length || r.some(function(t, n) {
    return t !== e[n];
  });
}
function $a(e, r) {
  return typeof r == "function" ? r(e) : r;
}
const Ti = (e) => {
  let r;
  const t = /* @__PURE__ */ new Set(), n = (u, p) => {
    const d = typeof u == "function" ? u(r) : u;
    if (!Object.is(d, r)) {
      const g = r;
      r = p ?? (typeof d != "object" || d === null) ? d : Object.assign({}, r, d), t.forEach((v) => v(r, g));
    }
  }, i = () => r, l = { setState: n, getState: i, getInitialState: () => c, subscribe: (u) => (t.add(u), () => t.delete(u)) }, c = r = e(n, i, l);
  return l;
}, Nl = (e) => e ? Ti(e) : Ti;
function za(e, r) {
  for (var t in r) e[t] = r[t];
  return e;
}
function gn(e, r) {
  for (var t in e) if (t !== "__source" && !(t in r)) return !0;
  for (var n in r) if (n !== "__source" && e[n] !== r[n]) return !0;
  return !1;
}
function On(e, r) {
  var t = r(), n = $({ t: { __: t, u: r } }), i = n[0].t, o = n[1];
  return Mt(function() {
    i.__ = t, i.u = r, Br(i) && o({ t: i });
  }, [e, t, r]), P(function() {
    return Br(i) && o({ t: i }), e(function() {
      Br(i) && o({ t: i });
    });
  }, [e]), t;
}
function Br(e) {
  var r, t, n = e.u, i = e.__;
  try {
    var o = n();
    return !((r = i) === (t = o) && (r !== 0 || 1 / r == 1 / t) || r != r && t != t);
  } catch {
    return !0;
  }
}
function Dn(e) {
  e();
}
function Hn(e) {
  return e;
}
function Bn() {
  return [!1, Dn];
}
var Fn = Mt;
function Er(e, r) {
  this.props = e, this.context = r;
}
function Ua(e, r) {
  function t(i) {
    var o = this.props.ref, s = o == i.ref;
    return !s && o && (o.call ? o(null) : o.current = null), r ? !r(this.props, i) || !s : gn(this.props, i);
  }
  function n(i) {
    return this.shouldComponentUpdate = t, Xe(e, i);
  }
  return n.displayName = "Memo(" + (e.displayName || e.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n;
}
(Er.prototype = new Ue()).isPureReactComponent = !0, Er.prototype.shouldComponentUpdate = function(e, r) {
  return gn(this.props, e) || gn(this.state, r);
};
var Ni = V.__b;
V.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Ni && Ni(e);
};
var kl = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Ie(e) {
  function r(t) {
    var n = za({}, t);
    return delete n.ref, e(n, t.ref || null);
  }
  return r.$$typeof = kl, r.render = r, r.prototype.isReactComponent = r.__f = !0, r.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", r;
}
var ki = function(e, r) {
  return e == null ? null : tt(tt(e).map(r));
}, Va = { map: ki, forEach: ki, count: function(e) {
  return e ? tt(e).length : 0;
}, only: function(e) {
  var r = tt(e);
  if (r.length !== 1) throw "Children.only";
  return r[0];
}, toArray: tt }, Ll = V.__e;
V.__e = function(e, r, t, n) {
  if (e.then) {
    for (var i, o = r; o = o.__; ) if ((i = o.__c) && i.__c) return r.__e == null && (r.__e = t.__e, r.__k = t.__k), i.__c(e, r);
  }
  Ll(e, r, t, n);
};
var Li = V.unmount;
function Ga(e, r, t) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), e.__c.__H = null), (e = za({}, e)).__c != null && (e.__c.__P === t && (e.__c.__P = r), e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
    return Ga(n, r, t);
  })), e;
}
function ja(e, r, t) {
  return e && t && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
    return ja(n, r, t);
  }), e.__c && e.__c.__P === r && (e.__e && t.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = t)), e;
}
function Qt() {
  this.__u = 0, this.o = null, this.__b = null;
}
function qa(e) {
  var r = e.__.__c;
  return r && r.__a && r.__a(e);
}
function Wa(e) {
  var r, t, n;
  function i(o) {
    if (r || (r = e()).then(function(s) {
      t = s.default || s;
    }, function(s) {
      n = s;
    }), n) throw n;
    if (!t) throw r;
    return Xe(t, o);
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function Nt() {
  this.i = null, this.l = null;
}
V.unmount = function(e) {
  var r = e.__c;
  r && r.__R && r.__R(), r && 32 & e.__u && (e.type = null), Li && Li(e);
}, (Qt.prototype = new Ue()).__c = function(e, r) {
  var t = r.__c, n = this;
  n.o == null && (n.o = []), n.o.push(t);
  var i = qa(n.__v), o = !1, s = function() {
    o || (o = !0, t.__R = null, i ? i(l) : l());
  };
  t.__R = s;
  var l = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var c = n.state.__a;
        n.__v.__k[0] = ja(c, c.__c.__P, c.__c.__O);
      }
      var u;
      for (n.setState({ __a: n.__b = null }); u = n.o.pop(); ) u.forceUpdate();
    }
  };
  n.__u++ || 32 & r.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(s, s);
}, Qt.prototype.componentWillUnmount = function() {
  this.o = [];
}, Qt.prototype.render = function(e, r) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = Ga(this.__b, t, n.__O = n.__P);
    }
    this.__b = null;
  }
  var i = r.__a && Xe(ve, null, e.fallback);
  return i && (i.__u &= -33), [Xe(ve, null, r.__a ? null : e.children), i];
};
var Ri = function(e, r, t) {
  if (++t[1] === t[0] && e.l.delete(r), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (t = e.i; t; ) {
    for (; t.length > 3; ) t.pop()();
    if (t[1] < t[0]) break;
    e.i = t = t[2];
  }
};
function Rl(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Ml(e) {
  var r = this, t = e.h;
  r.componentWillUnmount = function() {
    Ye(null, r.v), r.v = null, r.h = null;
  }, r.h && r.h !== t && r.componentWillUnmount(), r.v || (r.h = t, r.v = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(n) {
    this.childNodes.push(n), r.h.appendChild(n);
  }, insertBefore: function(n, i) {
    this.childNodes.push(n), r.h.insertBefore(n, i);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), r.h.removeChild(n);
  } }), Ye(Xe(Rl, { context: r.context }, e.__v), r.v);
}
function Za(e, r) {
  var t = Xe(Ml, { __v: e, h: r });
  return t.containerInfo = r, t;
}
(Nt.prototype = new Ue()).__a = function(e) {
  var r = this, t = qa(r.__v), n = r.l.get(e);
  return n[0]++, function(i) {
    var o = function() {
      r.props.revealOrder ? (n.push(i), Ri(r, e, n)) : i();
    };
    t ? t(o) : o();
  };
}, Nt.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var r = tt(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && r.reverse();
  for (var t = r.length; t--; ) this.l.set(r[t], this.i = [1, 0, this.i]);
  return e.children;
}, Nt.prototype.componentDidUpdate = Nt.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(r, t) {
    Ri(e, t, r);
  });
};
var Xa = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Il = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Pl = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Ol = /[A-Z0-9]/g, Dl = typeof document < "u", Hl = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Ya(e, r, t) {
  return r.__k == null && (r.textContent = ""), Ye(e, r), typeof t == "function" && t(), e ? e.__c : null;
}
function Ka(e, r, t) {
  return Ha(e, r), typeof t == "function" && t(), e ? e.__c : null;
}
Ue.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(Ue.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(r) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: r });
  } });
});
var Mi = V.event;
function Bl() {
}
function Fl() {
  return this.cancelBubble;
}
function $l() {
  return this.defaultPrevented;
}
V.event = function(e) {
  return Mi && (e = Mi(e)), e.persist = Bl, e.isPropagationStopped = Fl, e.isDefaultPrevented = $l, e.nativeEvent = e;
};
var $n, zl = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Ii = V.vnode;
V.vnode = function(e) {
  typeof e.type == "string" && function(r) {
    var t = r.props, n = r.type, i = {}, o = n.indexOf("-") === -1;
    for (var s in t) {
      var l = t[s];
      if (!(s === "value" && "defaultValue" in t && l == null || Dl && s === "children" && n === "noscript" || s === "class" || s === "className")) {
        var c = s.toLowerCase();
        s === "defaultValue" && "value" in t && t.value == null ? s = "value" : s === "download" && l === !0 ? l = "" : c === "translate" && l === "no" ? l = !1 : c[0] === "o" && c[1] === "n" ? c === "ondoubleclick" ? s = "ondblclick" : c !== "onchange" || n !== "input" && n !== "textarea" || Hl(t.type) ? c === "onfocus" ? s = "onfocusin" : c === "onblur" ? s = "onfocusout" : Pl.test(s) && (s = c) : c = s = "oninput" : o && Il.test(s) ? s = s.replace(Ol, "-$&").toLowerCase() : l === null && (l = void 0), c === "oninput" && i[s = c] && (s = "oninputCapture"), i[s] = l;
      }
    }
    n == "select" && i.multiple && Array.isArray(i.value) && (i.value = tt(t.children).forEach(function(u) {
      u.props.selected = i.value.indexOf(u.props.value) != -1;
    })), n == "select" && i.defaultValue != null && (i.value = tt(t.children).forEach(function(u) {
      u.props.selected = i.multiple ? i.defaultValue.indexOf(u.props.value) != -1 : i.defaultValue == u.props.value;
    })), t.class && !t.className ? (i.class = t.class, Object.defineProperty(i, "className", zl)) : (t.className && !t.class || t.class && t.className) && (i.class = i.className = t.className), r.props = i;
  }(e), e.$$typeof = Xa, Ii && Ii(e);
};
var Pi = V.__r;
V.__r = function(e) {
  Pi && Pi(e), $n = e.__c;
};
var Oi = V.diffed;
V.diffed = function(e) {
  Oi && Oi(e);
  var r = e.props, t = e.__e;
  t != null && e.type === "textarea" && "value" in r && r.value !== t.value && (t.value = r.value == null ? "" : r.value), $n = null;
};
var Ja = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return $n.__n[e.__c].props.value;
}, useCallback: sr, useContext: Rn, useDebugValue: Mn, useDeferredValue: Hn, useEffect: P, useId: In, useImperativeHandle: Ln, useInsertionEffect: Fn, useLayoutEffect: Mt, useMemo: ar, useReducer: Sr, useRef: Te, useState: $, useSyncExternalStore: On, useTransition: Bn } } }, Ul = "18.3.1";
function Qa(e) {
  return Xe.bind(null, e);
}
function lr(e) {
  return !!e && e.$$typeof === Xa;
}
function es(e) {
  return lr(e) && e.type === ve;
}
function ts(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function rs(e) {
  return lr(e) ? xl.apply(null, arguments) : e;
}
function ns(e) {
  return !!e.__k && (Ye(null, e), !0);
}
function is(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var os = function(e, r) {
  return e(r);
}, as = function(e, r) {
  return e(r);
}, ss = ve, ls = lr, mn = { useState: $, useId: In, useReducer: Sr, useEffect: P, useLayoutEffect: Mt, useInsertionEffect: Fn, useTransition: Bn, useDeferredValue: Hn, useSyncExternalStore: On, startTransition: Dn, useRef: Te, useImperativeHandle: Ln, useMemo: ar, useCallback: sr, useContext: Rn, useDebugValue: Mn, version: "18.3.1", Children: Va, render: Ya, hydrate: Ka, unmountComponentAtNode: ns, createPortal: Za, createElement: Xe, createContext: Ba, createFactory: Qa, cloneElement: rs, createRef: La, Fragment: ve, isValidElement: lr, isElement: ls, isFragment: es, isMemo: ts, findDOMNode: is, Component: Ue, PureComponent: Er, memo: Ua, forwardRef: Ie, flushSync: as, unstable_batchedUpdates: os, StrictMode: ss, Suspense: Qt, SuspenseList: Nt, lazy: Wa, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ja };
const Vl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: Va,
  Component: Ue,
  Fragment: ve,
  PureComponent: Er,
  StrictMode: ss,
  Suspense: Qt,
  SuspenseList: Nt,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ja,
  cloneElement: rs,
  createContext: Ba,
  createElement: Xe,
  createFactory: Qa,
  createPortal: Za,
  createRef: La,
  default: mn,
  findDOMNode: is,
  flushSync: as,
  forwardRef: Ie,
  hydrate: Ka,
  isElement: ls,
  isFragment: es,
  isMemo: ts,
  isValidElement: lr,
  lazy: Wa,
  memo: Ua,
  render: Ya,
  startTransition: Dn,
  unmountComponentAtNode: ns,
  unstable_batchedUpdates: os,
  useCallback: sr,
  useContext: Rn,
  useDebugValue: Mn,
  useDeferredValue: Hn,
  useEffect: P,
  useErrorBoundary: El,
  useId: In,
  useImperativeHandle: Ln,
  useInsertionEffect: Fn,
  useLayoutEffect: Mt,
  useMemo: ar,
  useReducer: Sr,
  useRef: Te,
  useState: $,
  useSyncExternalStore: On,
  useTransition: Bn,
  version: Ul
}, Symbol.toStringTag, { value: "Module" })), Gl = (e) => e;
function jl(e, r = Gl) {
  const t = mn.useSyncExternalStore(
    e.subscribe,
    () => r(e.getState()),
    () => r(e.getInitialState())
  );
  return mn.useDebugValue(t), t;
}
const Di = (e) => {
  const r = Nl(e), t = (n) => jl(r, n);
  return Object.assign(t, r), t;
}, vt = (e) => e ? Di(e) : Di;
function ql(e, r) {
  let t;
  try {
    t = e();
  } catch {
    return;
  }
  return {
    getItem: (i) => {
      var o;
      const s = (c) => c === null ? null : JSON.parse(c, void 0), l = (o = t.getItem(i)) != null ? o : null;
      return l instanceof Promise ? l.then(s) : s(l);
    },
    setItem: (i, o) => t.setItem(
      i,
      JSON.stringify(o, void 0)
    ),
    removeItem: (i) => t.removeItem(i)
  };
}
const vn = (e) => (r) => {
  try {
    const t = e(r);
    return t instanceof Promise ? t : {
      then(n) {
        return vn(n)(t);
      },
      catch(n) {
        return this;
      }
    };
  } catch (t) {
    return {
      then(n) {
        return this;
      },
      catch(n) {
        return vn(n)(t);
      }
    };
  }
}, Wl = (e, r) => (t, n, i) => {
  let o = {
    storage: ql(() => localStorage),
    partialize: (_) => _,
    version: 0,
    merge: (_, A) => ({
      ...A,
      ..._
    }),
    ...r
  }, s = !1;
  const l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let u = o.storage;
  if (!u)
    return e(
      (..._) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
        ), t(..._);
      },
      n,
      i
    );
  const p = () => {
    const _ = o.partialize({ ...n() });
    return u.setItem(o.name, {
      state: _,
      version: o.version
    });
  }, d = i.setState;
  i.setState = (_, A) => {
    d(_, A), p();
  };
  const g = e(
    (..._) => {
      t(..._), p();
    },
    n,
    i
  );
  i.getInitialState = () => g;
  let v;
  const x = () => {
    var _, A;
    if (!u) return;
    s = !1, l.forEach((b) => {
      var y;
      return b((y = n()) != null ? y : g);
    });
    const E = ((A = o.onRehydrateStorage) == null ? void 0 : A.call(o, (_ = n()) != null ? _ : g)) || void 0;
    return vn(u.getItem.bind(u))(o.name).then((b) => {
      if (b)
        if (typeof b.version == "number" && b.version !== o.version) {
          if (o.migrate) {
            const y = o.migrate(
              b.state,
              b.version
            );
            return y instanceof Promise ? y.then((w) => [!0, w]) : [!0, y];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, b.state];
      return [!1, void 0];
    }).then((b) => {
      var y;
      const [w, h] = b;
      if (v = o.merge(
        h,
        (y = n()) != null ? y : g
      ), t(v, !0), w)
        return p();
    }).then(() => {
      E == null || E(v, void 0), v = n(), s = !0, c.forEach((b) => b(v));
    }).catch((b) => {
      E == null || E(void 0, b);
    });
  };
  return i.persist = {
    setOptions: (_) => {
      o = {
        ...o,
        ..._
      }, _.storage && (u = _.storage);
    },
    clearStorage: () => {
      u == null || u.removeItem(o.name);
    },
    getOptions: () => o,
    rehydrate: () => x(),
    hasHydrated: () => s,
    onHydrate: (_) => (l.add(_), () => {
      l.delete(_);
    }),
    onFinishHydration: (_) => (c.add(_), () => {
      c.delete(_);
    })
  }, o.skipHydration || x(), v || g;
}, cs = Wl;
function us(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Zl(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
var Fr, Hi;
function ds() {
  if (Hi) return Fr;
  Hi = 1;
  var e = Object.prototype.toString;
  return Fr = function(t) {
    var n = e.call(t), i = n === "[object Arguments]";
    return i || (i = n !== "[object Array]" && t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && e.call(t.callee) === "[object Function]"), i;
  }, Fr;
}
var $r, Bi;
function Xl() {
  if (Bi) return $r;
  Bi = 1;
  var e;
  if (!Object.keys) {
    var r = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = ds(), i = Object.prototype.propertyIsEnumerable, o = !i.call({ toString: null }, "toString"), s = i.call(function() {
    }, "prototype"), l = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], c = function(g) {
      var v = g.constructor;
      return v && v.prototype === g;
    }, u = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    }, p = function() {
      if (typeof window > "u")
        return !1;
      for (var g in window)
        try {
          if (!u["$" + g] && r.call(window, g) && window[g] !== null && typeof window[g] == "object")
            try {
              c(window[g]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), d = function(g) {
      if (typeof window > "u" || !p)
        return c(g);
      try {
        return c(g);
      } catch {
        return !1;
      }
    };
    e = function(v) {
      var x = v !== null && typeof v == "object", _ = t.call(v) === "[object Function]", A = n(v), E = x && t.call(v) === "[object String]", b = [];
      if (!x && !_ && !A)
        throw new TypeError("Object.keys called on a non-object");
      var y = s && _;
      if (E && v.length > 0 && !r.call(v, 0))
        for (var w = 0; w < v.length; ++w)
          b.push(String(w));
      if (A && v.length > 0)
        for (var h = 0; h < v.length; ++h)
          b.push(String(h));
      else
        for (var f in v)
          !(y && f === "prototype") && r.call(v, f) && b.push(String(f));
      if (o)
        for (var C = d(v), T = 0; T < l.length; ++T)
          !(C && l[T] === "constructor") && r.call(v, l[T]) && b.push(l[T]);
      return b;
    };
  }
  return $r = e, $r;
}
var zr, Fi;
function Yl() {
  if (Fi) return zr;
  Fi = 1;
  var e = Array.prototype.slice, r = ds(), t = Object.keys, n = t ? function(s) {
    return t(s);
  } : Xl(), i = Object.keys;
  return n.shim = function() {
    if (Object.keys) {
      var s = function() {
        var l = Object.keys(arguments);
        return l && l.length === arguments.length;
      }(1, 2);
      s || (Object.keys = function(c) {
        return r(c) ? i(e.call(c)) : i(c);
      });
    } else
      Object.keys = n;
    return Object.keys || n;
  }, zr = n, zr;
}
var Ur, $i;
function Tr() {
  if ($i) return Ur;
  $i = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Ur = e, Ur;
}
var Vr, zi;
function ps() {
  return zi || (zi = 1, Vr = SyntaxError), Vr;
}
var Gr, Ui;
function cr() {
  return Ui || (Ui = 1, Gr = TypeError), Gr;
}
var jr, Vi;
function Kl() {
  return Vi || (Vi = 1, jr = Object.getOwnPropertyDescriptor), jr;
}
var qr, Gi;
function Nr() {
  if (Gi) return qr;
  Gi = 1;
  var e = /* @__PURE__ */ Kl();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return qr = e, qr;
}
var Wr, ji;
function hs() {
  if (ji) return Wr;
  ji = 1;
  var e = /* @__PURE__ */ Tr(), r = /* @__PURE__ */ ps(), t = /* @__PURE__ */ cr(), n = /* @__PURE__ */ Nr();
  return Wr = function(o, s, l) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new t("`obj` must be an object or a function`");
    if (typeof s != "string" && typeof s != "symbol")
      throw new t("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
      throw new t("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
      throw new t("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
      throw new t("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
      throw new t("`loose`, if provided, must be a boolean");
    var c = arguments.length > 3 ? arguments[3] : null, u = arguments.length > 4 ? arguments[4] : null, p = arguments.length > 5 ? arguments[5] : null, d = arguments.length > 6 ? arguments[6] : !1, g = !!n && n(o, s);
    if (e)
      e(o, s, {
        configurable: p === null && g ? g.configurable : !p,
        enumerable: c === null && g ? g.enumerable : !c,
        value: l,
        writable: u === null && g ? g.writable : !u
      });
    else if (d || !c && !u && !p)
      o[s] = l;
    else
      throw new r("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, Wr;
}
var Zr, qi;
function fs() {
  if (qi) return Zr;
  qi = 1;
  var e = /* @__PURE__ */ Tr(), r = function() {
    return !!e;
  };
  return r.hasArrayLengthDefineBug = function() {
    if (!e)
      return null;
    try {
      return e([], "length", { value: 1 }).length !== 1;
    } catch {
      return !0;
    }
  }, Zr = r, Zr;
}
var Xr, Wi;
function gs() {
  if (Wi) return Xr;
  Wi = 1;
  var e = Yl(), r = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", t = Object.prototype.toString, n = Array.prototype.concat, i = /* @__PURE__ */ hs(), o = function(u) {
    return typeof u == "function" && t.call(u) === "[object Function]";
  }, s = /* @__PURE__ */ fs()(), l = function(u, p, d, g) {
    if (p in u) {
      if (g === !0) {
        if (u[p] === d)
          return;
      } else if (!o(g) || !g())
        return;
    }
    s ? i(u, p, d, !0) : i(u, p, d);
  }, c = function(u, p) {
    var d = arguments.length > 2 ? arguments[2] : {}, g = e(p);
    r && (g = n.call(g, Object.getOwnPropertySymbols(p)));
    for (var v = 0; v < g.length; v += 1)
      l(u, g[v], p[g[v]], d[g[v]]);
  };
  return c.supportsDescriptors = !!s, Xr = c, Xr;
}
var Yr = { exports: {} }, Kr, Zi;
function ms() {
  return Zi || (Zi = 1, Kr = Object), Kr;
}
var Jr, Xi;
function Jl() {
  return Xi || (Xi = 1, Jr = Error), Jr;
}
var Qr, Yi;
function Ql() {
  return Yi || (Yi = 1, Qr = EvalError), Qr;
}
var e1, Ki;
function e2() {
  return Ki || (Ki = 1, e1 = RangeError), e1;
}
var t1, Ji;
function t2() {
  return Ji || (Ji = 1, t1 = ReferenceError), t1;
}
var r1, Qi;
function r2() {
  return Qi || (Qi = 1, r1 = URIError), r1;
}
var n1, eo;
function n2() {
  return eo || (eo = 1, n1 = Math.abs), n1;
}
var i1, to;
function i2() {
  return to || (to = 1, i1 = Math.floor), i1;
}
var o1, ro;
function o2() {
  return ro || (ro = 1, o1 = Math.max), o1;
}
var a1, no;
function a2() {
  return no || (no = 1, a1 = Math.min), a1;
}
var s1, io;
function s2() {
  return io || (io = 1, s1 = Math.pow), s1;
}
var l1, oo;
function l2() {
  return oo || (oo = 1, l1 = Math.round), l1;
}
var c1, ao;
function c2() {
  return ao || (ao = 1, c1 = Number.isNaN || function(r) {
    return r !== r;
  }), c1;
}
var u1, so;
function u2() {
  if (so) return u1;
  so = 1;
  var e = /* @__PURE__ */ c2();
  return u1 = function(t) {
    return e(t) || t === 0 ? t : t < 0 ? -1 : 1;
  }, u1;
}
var d1, lo;
function d2() {
  return lo || (lo = 1, d1 = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var r = {}, t = Symbol("test"), n = Object(t);
    if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var i = 42;
    r[t] = i;
    for (var o in r)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(r).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(r).length !== 0)
      return !1;
    var s = Object.getOwnPropertySymbols(r);
    if (s.length !== 1 || s[0] !== t || !Object.prototype.propertyIsEnumerable.call(r, t))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var l = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(r, t)
      );
      if (l.value !== i || l.enumerable !== !0)
        return !1;
    }
    return !0;
  }), d1;
}
var p1, co;
function p2() {
  if (co) return p1;
  co = 1;
  var e = typeof Symbol < "u" && Symbol, r = d2();
  return p1 = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : r();
  }, p1;
}
var h1, uo;
function vs() {
  return uo || (uo = 1, h1 = typeof Reflect < "u" && Reflect.getPrototypeOf || null), h1;
}
var f1, po;
function Cs() {
  if (po) return f1;
  po = 1;
  var e = /* @__PURE__ */ ms();
  return f1 = e.getPrototypeOf || null, f1;
}
var g1, ho;
function h2() {
  if (ho) return g1;
  ho = 1;
  var e = "Function.prototype.bind called on incompatible ", r = Object.prototype.toString, t = Math.max, n = "[object Function]", i = function(c, u) {
    for (var p = [], d = 0; d < c.length; d += 1)
      p[d] = c[d];
    for (var g = 0; g < u.length; g += 1)
      p[g + c.length] = u[g];
    return p;
  }, o = function(c, u) {
    for (var p = [], d = u, g = 0; d < c.length; d += 1, g += 1)
      p[g] = c[d];
    return p;
  }, s = function(l, c) {
    for (var u = "", p = 0; p < l.length; p += 1)
      u += l[p], p + 1 < l.length && (u += c);
    return u;
  };
  return g1 = function(c) {
    var u = this;
    if (typeof u != "function" || r.apply(u) !== n)
      throw new TypeError(e + u);
    for (var p = o(arguments, 1), d, g = function() {
      if (this instanceof d) {
        var E = u.apply(
          this,
          i(p, arguments)
        );
        return Object(E) === E ? E : this;
      }
      return u.apply(
        c,
        i(p, arguments)
      );
    }, v = t(0, u.length - p.length), x = [], _ = 0; _ < v; _++)
      x[_] = "$" + _;
    if (d = Function("binder", "return function (" + s(x, ",") + "){ return binder.apply(this,arguments); }")(g), u.prototype) {
      var A = function() {
      };
      A.prototype = u.prototype, d.prototype = new A(), A.prototype = null;
    }
    return d;
  }, g1;
}
var m1, fo;
function ur() {
  if (fo) return m1;
  fo = 1;
  var e = h2();
  return m1 = Function.prototype.bind || e, m1;
}
var v1, go;
function zn() {
  return go || (go = 1, v1 = Function.prototype.call), v1;
}
var C1, mo;
function Un() {
  return mo || (mo = 1, C1 = Function.prototype.apply), C1;
}
var y1, vo;
function f2() {
  return vo || (vo = 1, y1 = typeof Reflect < "u" && Reflect && Reflect.apply), y1;
}
var _1, Co;
function ys() {
  if (Co) return _1;
  Co = 1;
  var e = ur(), r = Un(), t = zn(), n = f2();
  return _1 = n || e.call(t, r), _1;
}
var b1, yo;
function Vn() {
  if (yo) return b1;
  yo = 1;
  var e = ur(), r = /* @__PURE__ */ cr(), t = zn(), n = ys();
  return b1 = function(o) {
    if (o.length < 1 || typeof o[0] != "function")
      throw new r("a function is required");
    return n(e, t, o);
  }, b1;
}
var w1, _o;
function g2() {
  if (_o) return w1;
  _o = 1;
  var e = Vn(), r = /* @__PURE__ */ Nr(), t;
  try {
    t = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (s) {
    if (!s || typeof s != "object" || !("code" in s) || s.code !== "ERR_PROTO_ACCESS")
      throw s;
  }
  var n = !!t && r && r(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), i = Object, o = i.getPrototypeOf;
  return w1 = n && typeof n.get == "function" ? e([n.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    function(l) {
      return o(l == null ? l : i(l));
    }
  ) : !1, w1;
}
var x1, bo;
function m2() {
  if (bo) return x1;
  bo = 1;
  var e = vs(), r = Cs(), t = /* @__PURE__ */ g2();
  return x1 = e ? function(i) {
    return e(i);
  } : r ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return r(i);
  } : t ? function(i) {
    return t(i);
  } : null, x1;
}
var A1, wo;
function _s() {
  if (wo) return A1;
  wo = 1;
  var e = Function.prototype.call, r = Object.prototype.hasOwnProperty, t = ur();
  return A1 = t.call(e, r), A1;
}
var E1, xo;
function bs() {
  if (xo) return E1;
  xo = 1;
  var e, r = /* @__PURE__ */ ms(), t = /* @__PURE__ */ Jl(), n = /* @__PURE__ */ Ql(), i = /* @__PURE__ */ e2(), o = /* @__PURE__ */ t2(), s = /* @__PURE__ */ ps(), l = /* @__PURE__ */ cr(), c = /* @__PURE__ */ r2(), u = /* @__PURE__ */ n2(), p = /* @__PURE__ */ i2(), d = /* @__PURE__ */ o2(), g = /* @__PURE__ */ a2(), v = /* @__PURE__ */ s2(), x = /* @__PURE__ */ l2(), _ = /* @__PURE__ */ u2(), A = Function, E = function(_e) {
    try {
      return A('"use strict"; return (' + _e + ").constructor;")();
    } catch {
    }
  }, b = /* @__PURE__ */ Nr(), y = /* @__PURE__ */ Tr(), w = function() {
    throw new l();
  }, h = b ? function() {
    try {
      return arguments.callee, w;
    } catch {
      try {
        return b(arguments, "callee").get;
      } catch {
        return w;
      }
    }
  }() : w, f = p2()(), C = m2(), T = Cs(), R = vs(), k = Un(), B = zn(), M = {}, I = typeof Uint8Array > "u" || !C ? e : C(Uint8Array), L = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": f && C ? C([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": M,
    "%AsyncGenerator%": M,
    "%AsyncGeneratorFunction%": M,
    "%AsyncIteratorPrototype%": M,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": t,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": A,
    "%GeneratorFunction%": M,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": f && C ? C(C([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !f || !C ? e : C((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": r,
    "%Object.getOwnPropertyDescriptor%": b,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": i,
    "%ReferenceError%": o,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !f || !C ? e : C((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": f && C ? C(""[Symbol.iterator]()) : e,
    "%Symbol%": f ? Symbol : e,
    "%SyntaxError%": s,
    "%ThrowTypeError%": h,
    "%TypedArray%": I,
    "%TypeError%": l,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": c,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": B,
    "%Function.prototype.apply%": k,
    "%Object.defineProperty%": y,
    "%Object.getPrototypeOf%": T,
    "%Math.abs%": u,
    "%Math.floor%": p,
    "%Math.max%": d,
    "%Math.min%": g,
    "%Math.pow%": v,
    "%Math.round%": x,
    "%Math.sign%": _,
    "%Reflect.getPrototypeOf%": R
  };
  if (C)
    try {
      null.error;
    } catch (_e) {
      var Q = C(C(_e));
      L["%Error.prototype%"] = Q;
    }
  var j = function _e(te) {
    var oe;
    if (te === "%AsyncFunction%")
      oe = E("async function () {}");
    else if (te === "%GeneratorFunction%")
      oe = E("function* () {}");
    else if (te === "%AsyncGeneratorFunction%")
      oe = E("async function* () {}");
    else if (te === "%AsyncGenerator%") {
      var X = _e("%AsyncGeneratorFunction%");
      X && (oe = X.prototype);
    } else if (te === "%AsyncIteratorPrototype%") {
      var ae = _e("%AsyncGenerator%");
      ae && C && (oe = C(ae.prototype));
    }
    return L[te] = oe, oe;
  }, Le = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, K = ur(), ne = /* @__PURE__ */ _s(), Oe = K.call(B, Array.prototype.concat), q = K.call(k, Array.prototype.splice), Ve = K.call(B, String.prototype.replace), ee = K.call(B, String.prototype.slice), Re = K.call(B, RegExp.prototype.exec), Y = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, J = /\\(\\)?/g, xe = function(te) {
    var oe = ee(te, 0, 1), X = ee(te, -1);
    if (oe === "%" && X !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (X === "%" && oe !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var ae = [];
    return Ve(te, Y, function(pe, De, he, fe) {
      ae[ae.length] = he ? Ve(fe, J, "$1") : De || pe;
    }), ae;
  }, lt = function(te, oe) {
    var X = te, ae;
    if (ne(Le, X) && (ae = Le[X], X = "%" + ae[0] + "%"), ne(L, X)) {
      var pe = L[X];
      if (pe === M && (pe = j(X)), typeof pe > "u" && !oe)
        throw new l("intrinsic " + te + " exists, but is not available. Please file an issue!");
      return {
        alias: ae,
        name: X,
        value: pe
      };
    }
    throw new s("intrinsic " + te + " does not exist!");
  };
  return E1 = function(te, oe) {
    if (typeof te != "string" || te.length === 0)
      throw new l("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof oe != "boolean")
      throw new l('"allowMissing" argument must be a boolean');
    if (Re(/^%?[^%]*%?$/, te) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var X = xe(te), ae = X.length > 0 ? X[0] : "", pe = lt("%" + ae + "%", oe), De = pe.name, he = pe.value, fe = !1, be = pe.alias;
    be && (ae = be[0], q(X, Oe([0, 1], be)));
    for (var He = 1, Pe = !0; He < X.length; He += 1) {
      var ge = X[He], Ge = ee(ge, 0, 1), Be = ee(ge, -1);
      if ((Ge === '"' || Ge === "'" || Ge === "`" || Be === '"' || Be === "'" || Be === "`") && Ge !== Be)
        throw new s("property names with quotes must have matching quotes");
      if ((ge === "constructor" || !Pe) && (fe = !0), ae += "." + ge, De = "%" + ae + "%", ne(L, De))
        he = L[De];
      else if (he != null) {
        if (!(ge in he)) {
          if (!oe)
            throw new l("base intrinsic for " + te + " exists, but the property is not available.");
          return;
        }
        if (b && He + 1 >= X.length) {
          var je = b(he, ge);
          Pe = !!je, Pe && "get" in je && !("originalValue" in je.get) ? he = je.get : he = he[ge];
        } else
          Pe = ne(he, ge), he = he[ge];
        Pe && !fe && (L[De] = he);
      }
    }
    return he;
  }, E1;
}
var S1, Ao;
function v2() {
  if (Ao) return S1;
  Ao = 1;
  var e = /* @__PURE__ */ bs(), r = /* @__PURE__ */ hs(), t = /* @__PURE__ */ fs()(), n = /* @__PURE__ */ Nr(), i = /* @__PURE__ */ cr(), o = e("%Math.floor%");
  return S1 = function(l, c) {
    if (typeof l != "function")
      throw new i("`fn` is not a function");
    if (typeof c != "number" || c < 0 || c > 4294967295 || o(c) !== c)
      throw new i("`length` must be a positive 32-bit integer");
    var u = arguments.length > 2 && !!arguments[2], p = !0, d = !0;
    if ("length" in l && n) {
      var g = n(l, "length");
      g && !g.configurable && (p = !1), g && !g.writable && (d = !1);
    }
    return (p || d || !u) && (t ? r(
      /** @type {Parameters<define>[0]} */
      l,
      "length",
      c,
      !0,
      !0
    ) : r(
      /** @type {Parameters<define>[0]} */
      l,
      "length",
      c
    )), l;
  }, S1;
}
var T1, Eo;
function C2() {
  if (Eo) return T1;
  Eo = 1;
  var e = ur(), r = Un(), t = ys();
  return T1 = function() {
    return t(e, r, arguments);
  }, T1;
}
var So;
function y2() {
  return So || (So = 1, function(e) {
    var r = /* @__PURE__ */ v2(), t = /* @__PURE__ */ Tr(), n = Vn(), i = C2();
    e.exports = function(s) {
      var l = n(arguments), c = s.length - (arguments.length - 1);
      return r(
        l,
        1 + (c > 0 ? c : 0),
        !0
      );
    }, t ? t(e.exports, "apply", { value: i }) : e.exports.apply = i;
  }(Yr)), Yr.exports;
}
var N1, To;
function _2() {
  if (To) return N1;
  To = 1;
  var e = /* @__PURE__ */ cr();
  return N1 = function(t) {
    if (t == null)
      throw new e(arguments.length > 0 && arguments[1] || "Cannot call method on " + t);
    return t;
  }, N1;
}
var k1, No;
function b2() {
  if (No) return k1;
  No = 1;
  var e = /* @__PURE__ */ bs(), r = Vn(), t = r([e("%String.prototype.indexOf%")]);
  return k1 = function(i, o) {
    var s = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(i, !!o)
    );
    return typeof s == "function" && t(i, ".prototype.") > -1 ? r(
      /** @type {const} */
      [s]
    ) : s;
  }, k1;
}
var L1, ko;
function ws() {
  if (ko) return L1;
  ko = 1;
  var e = /* @__PURE__ */ _2(), r = /* @__PURE__ */ b2(), t = r("Object.prototype.propertyIsEnumerable"), n = r("Array.prototype.push");
  return L1 = function(o) {
    var s = e(o), l = [];
    for (var c in s)
      t(s, c) && n(l, [c, s[c]]);
    return l;
  }, L1;
}
var R1, Lo;
function xs() {
  if (Lo) return R1;
  Lo = 1;
  var e = ws();
  return R1 = function() {
    return typeof Object.entries == "function" ? Object.entries : e;
  }, R1;
}
var M1, Ro;
function w2() {
  if (Ro) return M1;
  Ro = 1;
  var e = xs(), r = gs();
  return M1 = function() {
    var n = e();
    return r(Object, { entries: n }, {
      entries: function() {
        return Object.entries !== n;
      }
    }), n;
  }, M1;
}
var I1, Mo;
function x2() {
  if (Mo) return I1;
  Mo = 1;
  var e = gs(), r = y2(), t = ws(), n = xs(), i = w2(), o = r(n(), Object);
  return e(o, {
    getPolyfill: n,
    implementation: t,
    shim: i
  }), I1 = o, I1;
}
var P1, Io;
function A2() {
  if (Io) return P1;
  Io = 1;
  var e = {}, r = e.NODE_ENV !== "production", t = function() {
  };
  if (r) {
    var n = function(o, s) {
      var l = arguments.length;
      s = new Array(l > 1 ? l - 1 : 0);
      for (var c = 1; c < l; c++)
        s[c - 1] = arguments[c];
      var u = 0, p = "Warning: " + o.replace(/%s/g, function() {
        return s[u++];
      });
      typeof console < "u" && console.error(p);
      try {
        throw new Error(p);
      } catch {
      }
    };
    t = function(i, o, s) {
      var l = arguments.length;
      s = new Array(l > 2 ? l - 2 : 0);
      for (var c = 2; c < l; c++)
        s[c - 2] = arguments[c];
      if (o === void 0)
        throw new Error(
          "`warning(condition, format, ...args)` requires a warning message argument"
        );
      i || n.apply(null, [o].concat(s));
    };
  }
  return P1 = t, P1;
}
var O1, Po;
function E2() {
  if (Po) return O1;
  Po = 1;
  var e = x2(), r = A2(), t = /* @__PURE__ */ _s(), n = function(w) {
    r(!1, w);
  }, i = String.prototype.replace, o = String.prototype.split, s = "||||", l = function(y) {
    var w = y % 100, h = w % 10;
    return w !== 11 && h === 1 ? 0 : 2 <= h && h <= 4 && !(w >= 12 && w <= 14) ? 1 : 2;
  }, c = {
    // Mapping from pluralization group plural logic.
    pluralTypes: {
      arabic: function(y) {
        if (y < 3)
          return y;
        var w = y % 100;
        return w >= 3 && w <= 10 ? 3 : w >= 11 ? 4 : 5;
      },
      bosnian_serbian: l,
      chinese: function() {
        return 0;
      },
      croatian: l,
      french: function(y) {
        return y >= 2 ? 1 : 0;
      },
      german: function(y) {
        return y !== 1 ? 1 : 0;
      },
      russian: l,
      lithuanian: function(y) {
        return y % 10 === 1 && y % 100 !== 11 ? 0 : y % 10 >= 2 && y % 10 <= 9 && (y % 100 < 11 || y % 100 > 19) ? 1 : 2;
      },
      czech: function(y) {
        return y === 1 ? 0 : y >= 2 && y <= 4 ? 1 : 2;
      },
      polish: function(y) {
        if (y === 1)
          return 0;
        var w = y % 10;
        return 2 <= w && w <= 4 && (y % 100 < 10 || y % 100 >= 20) ? 1 : 2;
      },
      icelandic: function(y) {
        return y % 10 !== 1 || y % 100 === 11 ? 1 : 0;
      },
      slovenian: function(y) {
        var w = y % 100;
        return w === 1 ? 0 : w === 2 ? 1 : w === 3 || w === 4 ? 2 : 3;
      },
      romanian: function(y) {
        if (y === 1)
          return 0;
        var w = y % 100;
        return y === 0 || w >= 2 && w <= 19 ? 1 : 2;
      },
      ukrainian: l
    },
    // Mapping from pluralization group to individual language codes/locales.
    // Will look up based on exact match, if not found and it's a locale will parse the locale
    // for language code, and if that does not exist will default to 'en'
    pluralTypeToLanguages: {
      arabic: ["ar"],
      bosnian_serbian: ["bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS"],
      chinese: ["id", "id-ID", "ja", "ko", "ko-KR", "lo", "ms", "th", "th-TH", "zh"],
      croatian: ["hr", "hr-HR"],
      german: ["fa", "da", "de", "en", "es", "fi", "el", "he", "hi-IN", "hu", "hu-HU", "it", "nl", "no", "pt", "sv", "tr"],
      french: ["fr", "tl", "pt-br"],
      russian: ["ru", "ru-RU"],
      lithuanian: ["lt"],
      czech: ["cs", "cs-CZ", "sk"],
      polish: ["pl"],
      icelandic: ["is", "mk"],
      slovenian: ["sl-SL"],
      romanian: ["ro"],
      ukrainian: ["uk", "ua"]
    }
  };
  function u(y) {
    for (var w = {}, h = e(y), f = 0; f < h.length; f += 1)
      for (var C = h[f][0], T = h[f][1], R = 0; R < T.length; R += 1)
        w[T[R]] = C;
    return w;
  }
  function p(y, w) {
    var h = u(y.pluralTypeToLanguages);
    return h[w] || h[o.call(w, /-/, 1)[0]] || h.en;
  }
  function d(y, w, h) {
    return y.pluralTypes[w](h);
  }
  function g() {
    var y = {};
    return function(w, h) {
      var f = y[h];
      return f && !w.pluralTypes[f] && (f = null, y[h] = f), f || (f = p(w, h), f && (y[h] = f)), f;
    };
  }
  function v(y) {
    return y.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function x(y) {
    var w = y && y.prefix || "%{", h = y && y.suffix || "}";
    if (w === s || h === s)
      throw new RangeError('"' + s + '" token is reserved for pluralization');
    return new RegExp(v(w) + "(.*?)" + v(h), "g");
  }
  var _ = g(), A = /%\{(.*?)\}/g;
  function E(y, w, h, f, C, T) {
    if (typeof y != "string")
      throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
    if (w == null)
      return y;
    var R = y, k = f || A, B = T || i, M = typeof w == "number" ? { smart_count: w } : w;
    if (M.smart_count != null && y) {
      var I = C || c, L = o.call(y, s), Q = h || "en", j = _(I, Q), Le = d(
        I,
        j,
        M.smart_count
      );
      R = i.call(L[Le] || L[0], /^[^\S]*|[^\S]*$/g, "");
    }
    return R = B.call(R, k, function(K, ne) {
      return !t(M, ne) || M[ne] == null ? K : M[ne];
    }), R;
  }
  function b(y) {
    var w = y || {};
    this.phrases = {}, this.extend(w.phrases || {}), this.currentLocale = w.locale || "en";
    var h = w.allowMissing ? E : null;
    this.onMissingKey = typeof w.onMissingKey == "function" ? w.onMissingKey : h, this.warn = w.warn || n, this.replaceImplementation = w.replace || i, this.tokenRegex = x(w.interpolation), this.pluralRules = w.pluralRules || c;
  }
  return b.prototype.locale = function(y) {
    return y && (this.currentLocale = y), this.currentLocale;
  }, b.prototype.extend = function(y, w) {
    for (var h = e(y || {}), f = 0; f < h.length; f += 1) {
      var C = h[f][0], T = h[f][1], R = w ? w + "." + C : C;
      typeof T == "object" ? this.extend(T, R) : this.phrases[R] = T;
    }
  }, b.prototype.unset = function(y, w) {
    if (typeof y == "string")
      delete this.phrases[y];
    else
      for (var h = e(y || {}), f = 0; f < h.length; f += 1) {
        var C = h[f][0], T = h[f][1], R = w ? w + "." + C : C;
        typeof T == "object" ? this.unset(T, R) : delete this.phrases[R];
      }
  }, b.prototype.clear = function() {
    this.phrases = {};
  }, b.prototype.replace = function(y) {
    this.clear(), this.extend(y);
  }, b.prototype.t = function(y, w) {
    var h, f, C = w ?? {};
    if (typeof this.phrases[y] == "string")
      h = this.phrases[y];
    else if (typeof C._ == "string")
      h = C._;
    else if (this.onMissingKey) {
      var T = this.onMissingKey;
      f = T(
        y,
        C,
        this.currentLocale,
        this.tokenRegex,
        this.pluralRules,
        this.replaceImplementation
      );
    } else
      this.warn('Missing translation for key: "' + y + '"'), f = y;
    return typeof h == "string" && (f = E(
      h,
      C,
      this.currentLocale,
      this.tokenRegex,
      this.pluralRules,
      this.replaceImplementation
    )), f;
  }, b.prototype.has = function(y) {
    return t(this.phrases, y);
  }, b.transformPhrase = function(w, h, f) {
    return E(w, h, f);
  }, O1 = b, O1;
}
var S2 = E2();
const Oo = /* @__PURE__ */ us(S2), T2 = "Apenas Português", N2 = "Selecionar cor", k2 = "Expandir", L2 = "Colapsar", R2 = "Filtro Noturno", M2 = "Diminuir brilho", I2 = "Leitor de Texto ativado", P2 = "Filtro de daltonismo", O2 = "Desativar Sons", D2 = "Desativar Autoplay", H2 = "Fonte para Dislexia", B2 = "Leitor de Texto", F2 = "Aumentar Fonte", $2 = "Espaço entre letras", z2 = "Espaço entre linhas", U2 = "Destacar links", V2 = "Destacar títulos", G2 = "Modo Leitor", j2 = "Pausar animações", q2 = "Navegação por teclas", W2 = "Cores da página", Z2 = "Ocultar imagens", X2 = "Guia de leitura", Y2 = "Máscara de leitura", K2 = "Cursor grande", J2 = "Cor do texto", Q2 = "Saturação", ec = "Estrutura da Página", tc = "Dicionário", rc = "Personalizada", nc = "Médio", ic = "Grande", oc = "Muito grande", ac = "Desativado", sc = "Em breve", lc = "Ativado", cc = "Tela inteira", uc = "Normal", dc = "Claro", pc = "Escuro", hc = "Configurações", fc = "Resetar", gc = "Alterar idioma", mc = "Sem suporte", vc = "O sintetizador de voz não é suportado pelo seu navegador", Cc = "Interagir", yc = "Acessar link", _c = "Mover para cima", bc = "Mover para baixo", wc = "Azul", xc = "Amarelo", Ac = { blind: "Cego", low_vision: "Baixa visão", cognitive: "Cognitivo", dyslexic: "Dislexia", color_blind: "Daltônico", mobility: "Mobilidade" }, Ec = { keyboard_navigation: "Ativar navegação por teclas", page_structure: "Visualizar estrutura da página", page_colors: "Alterar as cores da páginas", disable_autoplay: "Impedir início automático de mídias", adjust_saturation: "Ajustar saturação", open_settings: "Abrir configurações", large_window: "Janela grande", small_window: "Janela pequena", night_filter: "Ativar filtro noturno", reduce_brightness: "Diminuir o brilho da tela", color_blind_filter: "Ativar filtro para daltonismo", disable_sound: "Desativar o som de vídeos e audios", dyslexic_font: "Ativar font para dyslexia", "dictionary.search": "Pesquisar no dicionário", definition_to_libras: "Ler definição em Libras", read_definition: "Ler definição", dictionary: "Ativar o dicionário", text_reader: "Ouvir o texto", font_increase: "Aumentar o tamanho da fonte", letter_spacing: "Modificar espaço entre as letras", line_spacing: "Modificar espaço entre linhas", highlight_links: "Destacar links", highlight_titles: "Destacar títulos", reset: "Resetar definições", close: "Fechar", change_language: "Alterar o idioma da ferramenta", reader_mode: "Ativar modo leitor", toggle_theme: "Alterar o tema", pause_animations: "Pausar animações", hide_images: "Esconder todas as imagens", reading_guide: "Ativar o Guia de leitura", reading_mask: "Ativar a Máscara de leitura", move_reading_mask: "Mover a Máscara de leitura", move_reading_guide: "Mover o Guia de leitura", large_cursor: "Ativar o cursor grande", text_color: "Alterar a cor do texto", open_navigation_profiles: "Abrir ou fechar os perfis de navegação", blind: "Definições para pessoas cegas", low_vision: "Definições para pessoas com baixa visão" }, Sc = { reset: "Resetar definições", close: "Fechar", toggle_theme: "Alterar o tema" }, Tc = { text_and_typography: "Texto e Tipografia", reading_and_comprehension: "Leitura e Compreensão", focus_and_visibility: "Foco e Acessibilidade Visual", colors_filters_and_contrast: "Cores, Filtros e Contraste", distraction_reduction: "Redução de Distrações", navigation_profiles: "Perfis de Navegação", navigation: "Navegação", profiles: "Perfis" }, Nc = "Definição em Libras", kc = "Ler definição", Lc = "Acessibilidade em Libras", Rc = "Relatar problema", Mc = "Sobre o projeto", Ic = "Novidades da versão", Pc = {
  only_pt: T2,
  color_picker: N2,
  expand: k2,
  collapse: L2,
  night_filter: R2,
  reduce_brightness: M2,
  text_reader_is_actived: I2,
  color_blind_filter: P2,
  disable_sounds: O2,
  disable_autoplay: D2,
  dyslexic_font: H2,
  text_reader: B2,
  font_increase: F2,
  letter_spacing: $2,
  line_spacing: z2,
  highlight_links: U2,
  highlight_titles: V2,
  reader_mode: G2,
  pause_animations: j2,
  keyboard_navigation: q2,
  page_colors: W2,
  hide_images: Z2,
  reading_guide: X2,
  reading_mask: Y2,
  large_cursor: K2,
  text_color: J2,
  saturation: Q2,
  page_structure: ec,
  dictionary: tc,
  custom: rc,
  default: "Padrão",
  medium: nc,
  large: ic,
  very_large: oc,
  deactivated: ac,
  upcoming: sc,
  actived: lc,
  full: cc,
  normal: uc,
  light: dc,
  dark: pc,
  settings: hc,
  reset: fc,
  change_language: gc,
  no_support: mc,
  speech_is_not_supported: vc,
  interact: Cc,
  access_link: yc,
  move_top: _c,
  move_bottom: bc,
  blue: wc,
  yellow: xc,
  profiles: Ac,
  al: Ec,
  titles: Sc,
  sections: Tc,
  definition_to_libras: Nc,
  read_definition: kc,
  "dictionary.select_word": "Selecione uma palavra para ver o significado ou faça uma pesquisa customizada.",
  "dictionary.no_result": "Nenhum resultado encontrado",
  "dictionary.close": "Fechar dicionário",
  "status.loading": "Carregando...",
  "status.searching": "Pesquisando...",
  "saturation.low": "Baixa",
  "saturation.high": "Alta",
  "saturation.grayscale": "Escala de cinza",
  libras_accessibility: Lc,
  bug_report: Rc,
  about_the_project: Mc,
  version_updates: Ic,
  "structure.titles": "Títulos",
  "structure.sections": "Seções",
  "structure.links": "Links",
  "structure.no_results": "Nenhum resultado encontrado"
}, Oc = "Only Portuguese", Dc = "Color Picker", Hc = "Expand", Bc = "Collapse", Fc = "Night Filter", $c = "Reduce Brightness", zc = "Text Reader is actived", Uc = "Color Blind Filter", Vc = "Disable Sounds", Gc = "Disable Autoplay", jc = "Dyslexic Font", qc = "Text Reader", Wc = "Increase Font", Zc = "Letter Spacing", Xc = "Line Spacing", Yc = "Highlight Links", Kc = "Highlight Titles", Jc = "Reader Mode", Qc = "Page Colors", e5 = "Pause Animations", t5 = "Keyboard Navigation", r5 = "Hide images", n5 = "Reading Guide", i5 = "Reading Mask", o5 = "Large Cursor", a5 = "Text Color", s5 = "Saturation", l5 = "Page Structure", c5 = "Dictionary", u5 = "Custom", d5 = "Medium", p5 = "Large", h5 = "Very Large", f5 = "Deactivated", g5 = "Upcoming", m5 = "Actived", v5 = "Full", C5 = "Normal", y5 = "Light", _5 = "Dark", b5 = "Settings", w5 = "Reset", x5 = "Change language", A5 = "No support", E5 = "Speech Synthesis is not supported in this browser", S5 = "Interact", T5 = "Access link", N5 = "Move up", k5 = "Move down", L5 = "Blue", R5 = "Yellow", M5 = { blind: "Blind", low_vision: "Low Vision", cognitive: "Cognitive", dyslexic: "Dyslexic", color_blind: "Color Blind", mobility: "Mobility" }, I5 = { keyboard_navigation: "Activate keyboard navigation", page_structure: "View page structure", page_colors: "Change page colors", disable_autoplay: "Prevent automatic media playback", adjust_saturation: "Adjust saturation", open_settings: "Open settings", large_window: "Large Window", small_window: "Small Window", night_filter: "Activate night filter", reduce_brightness: "Reduce brightness", color_blind_filter: "Activate color blind filter", disable_sound: "Disable the sound of the videos and audios", dyslexic_font: "Activate font for dyslexic", "dictionary.search": "Search in dictionary", dictionary: "Activate dictionary", text_reader: "Read text", font_increase: "Increase font", letter_spacing: "Modify letter spacing", line_spacing: "Modify line spacing", highlight_links: "Highlight links", highlight_titles: "Highlight titles", reset: "Reset definitions", close: "Close", change_language: "Change application language", reader_mode: "Activate reader mode", toggle_theme: "Toggle theme", pause_animations: "Pause animations", hide_images: "Hide all images", reading_guide: "Activate reading guide", reading_mask: "Activate reading mask", move_reading_mask: "Move reading mask", move_reading_guide: "Move reading guide", large_cursor: "Activate large cursor", text_color: "Change text color", open_navigation_profiles: "Open or close navigation profiles", blind: "Definitions for blind people", low_vision: "Definitions for low vision people" }, P5 = { reset: "Reset definitions", close: "Close", toggle_theme: "Toggle theme" }, O5 = { text_and_typography: "Text and Typography", reading_and_comprehension: "Reading and Comprehension", focus_and_visibility: "Focus and Visibility", colors_filters_and_contrast: "Colors, Filters and Contrast", distraction_reduction: "Distraction Reduction", navigation_profiles: "Navigation Profiles", navigation: "Navigation", profiles: "Profiles" }, D5 = "Bug report", H5 = "About the project", B5 = "Version updates", F5 = {
  only_pt: Oc,
  color_picker: Dc,
  expand: Hc,
  collapse: Bc,
  night_filter: Fc,
  reduce_brightness: $c,
  text_reader_is_actived: zc,
  color_blind_filter: Uc,
  disable_sounds: Vc,
  disable_autoplay: Gc,
  dyslexic_font: jc,
  text_reader: qc,
  font_increase: Wc,
  letter_spacing: Zc,
  line_spacing: Xc,
  highlight_links: Yc,
  highlight_titles: Kc,
  reader_mode: Jc,
  page_colors: Qc,
  pause_animations: e5,
  keyboard_navigation: t5,
  hide_images: r5,
  reading_guide: n5,
  reading_mask: i5,
  large_cursor: o5,
  text_color: a5,
  saturation: s5,
  page_structure: l5,
  dictionary: c5,
  custom: u5,
  default: "Default",
  medium: d5,
  large: p5,
  very_large: h5,
  deactivated: f5,
  upcoming: g5,
  actived: m5,
  full: v5,
  normal: C5,
  light: y5,
  dark: _5,
  settings: b5,
  reset: w5,
  change_language: x5,
  no_support: A5,
  speech_is_not_supported: E5,
  interact: S5,
  access_link: T5,
  move_top: N5,
  move_bottom: k5,
  blue: L5,
  yellow: R5,
  profiles: M5,
  al: I5,
  titles: P5,
  sections: O5,
  "dictionary.select_word": "Select a word to see its meaning or perform a custom search.",
  "dictionary.no_result": "No result",
  "dictionary.close": "Close dictionary",
  "status.loading": "Loading...",
  "status.searching": "Searching...",
  "saturation.low": "Low",
  "saturation.high": "High",
  "saturation.grayscale": "Grayscale",
  bug_report: D5,
  about_the_project: H5,
  version_updates: B5,
  "structure.titles": "Titles",
  "structure.sections": "Sections",
  "structure.links": "Links",
  "structure.no_results": "No results"
}, $5 = "Solo Portugués", z5 = "Seleccionar color", U5 = "Expandir", V5 = "Colapsar", G5 = "Filtro Nocturno", j5 = "Diminuir brillo", q5 = "Leitor de texto ativado", W5 = "Filtro de daltonismo", Z5 = "Desactivar sonidos", X5 = "Desactivar autoplay", Y5 = "Fonte para dyslexia", K5 = "Leer texto", J5 = "Aumentar fuente", Q5 = "Espaciado entre letras", e7 = "Espaciado entre líneas", t7 = "Resaltar enlaces", r7 = "Resaltar títulos", n7 = "Modo lector", i7 = "Colores de la página", o7 = "Pausar animaciones", a7 = "Navegación por teclas", s7 = "Ocultar imágenes", l7 = "Guía de lectura", c7 = "Máscara de lectura", u7 = "Cursor grande", d7 = "Color del texto", p7 = "Saturación", h7 = "Estructura de la página", f7 = "Diccionario", g7 = "Personalizada", m7 = "Mediano", v7 = "Grande", C7 = "Muy grande", y7 = "Desactivado", _7 = "Proximamente", b7 = "Activado", w7 = "Pantalla completa", x7 = "Normal", A7 = "Claro", E7 = "Oscuro", S7 = "Configuraciones", T7 = "Restablecer", N7 = "Cambiar idioma", k7 = "Sin soporte", L7 = "El sintetizador de voz no es compatible con su navegador", R7 = "Interactuar", M7 = "Acceder enlace", I7 = "Mover hacia arriba", P7 = "Mover hacia abajo", O7 = "Azul", D7 = "Amarillo", H7 = { blind: "Ciego", low_vision: "Baja visión", cognitive: "Cognitivo", dyslexic: "Disléxico", color_blind: "Daltónico", mobility: "Movilidad" }, B7 = { keyboard_navigation: "Activar navegación por teclado", page_structure: "Visualizar la estructura de la página", page_colors: "Cambiar los colores de la página", disable_autoplay: "Impedir reproducción automática de medios", open_settings: "Abrir configuraciones", large_window: "Ventana grande", small_window: "Ventana pequeña", night_filter: "Activar filtro nocturno", reduce_brightness: "Diminuir el brillo de la pantalla", color_blind_filter: "Activar filtro para daltonismo", disable_sound: "Desactivar sonido de vídeos y audios", dyslexic_font: "Activar fuente para dislexia", "dictionary.search": "Buscar en diccionario", dictionary: "Activar el diccionario", text_reader: "Leer el texto", font_increase: "Aumentar el tamaño de la fuente", letter_spacing: "Modificar el espaciado entre letras", line_spacing: "Modificar el espaciado entre líneas", highlight_links: "Resaltar enlaces", highlight_titles: "Resaltar títulos", reset: "Restablecer configuraciones", close: "Cerrar", change_language: "Cambiar el idioma de la herramienta", reader_mode: "Activar modo lector", toggle_theme: "Cambiar el tema", pause_animations: "Pausar animaciones", hide_images: "Ocultar todas las imágenes", reading_guide: "Activar la guía de lectura", reading_mask: "Activar la máscara de lectura", move_reading_mask: "Mover la máscara de lectura", move_reading_guide: "Mover la guía de lectura", large_cursor: "Activar el cursor grande", text_color: "Cambiar el color del texto", open_navigation_profiles: "Abrir o cerrar los perfiles de navegación", blind: "Configuraciones para personas ciegas", low_vision: "Configuraciones para personas con baja visión" }, F7 = { reset: "Restablecer configuraciones", close: "Cerrar", toggle_theme: "Cambiar el tema" }, $7 = { text_and_typography: "Texto y tipografía", reading_and_comprehension: "Lectura y comprensión", focus_and_visibility: "Enfoque y accesibilidad visual", colors_filters_and_contrast: "Colores, filtros y contraste", distraction_reduction: "Reducción de distracciones", navigation_profiles: "Perfiles de navegación", navigation: "Navegación", profiles: "Perfiles" }, z7 = "Reportar problema", U7 = "Sobre el proyecto", V7 = "Actualizaciones de la versión", G7 = {
  only_pt: $5,
  color_picker: z5,
  expand: U5,
  collapse: V5,
  night_filter: G5,
  reduce_brightness: j5,
  text_reader_is_actived: q5,
  color_blind_filter: W5,
  disable_sounds: Z5,
  disable_autoplay: X5,
  dyslexic_font: Y5,
  text_reader: K5,
  font_increase: J5,
  letter_spacing: Q5,
  line_spacing: e7,
  highlight_links: t7,
  highlight_titles: r7,
  reader_mode: n7,
  page_colors: i7,
  pause_animations: o7,
  keyboard_navigation: a7,
  hide_images: s7,
  reading_guide: l7,
  reading_mask: c7,
  large_cursor: u7,
  text_color: d7,
  saturation: p7,
  page_structure: h7,
  dictionary: f7,
  custom: g7,
  default: "Predeterminada",
  medium: m7,
  large: v7,
  very_large: C7,
  deactivated: y7,
  upcoming: _7,
  actived: b7,
  full: w7,
  normal: x7,
  light: A7,
  dark: E7,
  settings: S7,
  reset: T7,
  change_language: N7,
  no_support: k7,
  speech_is_not_supported: L7,
  interact: R7,
  access_link: M7,
  move_top: I7,
  move_bottom: P7,
  blue: O7,
  yellow: D7,
  profiles: H7,
  al: B7,
  titles: F7,
  sections: $7,
  "dictionary.select_word": "Selecciona una palabra para ver su significado o haz una búsqueda personalizada",
  "dictionary.no_result": "Sin resultado",
  "dictionary.close": "Cerrar diccionario",
  "status.loading": "Cargando...",
  "status.searching": "Pesquisando...",
  "saturation.low": "Baja",
  "saturation.high": "Alta",
  "saturation.grayscale": "Escala de grises",
  bug_report: z7,
  about_the_project: U7,
  version_updates: V7,
  "structure.titles": "Títulos",
  "structure.sections": "Secciones",
  "structure.links": "Enlaces",
  "structure.no_results": "Sin resultados"
}, Do = { pt: Pc, en: F5, es: G7 }, z = vt()(
  cs(
    (e, r) => ({
      locale: "pt",
      polyglot: new Oo({ locale: "pt", phrases: Do.pt }),
      setLocale: (t) => e(() => ({ locale: t, polyglot: new Oo({ locale: t, phrases: Do[t] }) })),
      t: (t, n) => r().polyglot.t(t, n)
    }),
    {
      name: "@vlibras-widget-plus.locale",
      partialize: (e) => ({ locale: e.locale }),
      version: 1
    }
  )
), As = (e, r) => z.getState().t(e, r), Gn = () => {
  const [e, r] = $(!1);
  return P(() => {
    const t = () => {
      r(window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(hover: none)").matches);
    };
    return t(), window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, []), e;
}, Es = () => {
  const [e, r] = $({ x: 0, y: 0 });
  return P(() => {
    const t = (n) => {
      r({ x: n.clientX, y: n.clientY });
    };
    return window.addEventListener("mousemove", t), () => window.removeEventListener("mousemove", t);
  }, []), e;
}, Ss = () => {
  const [e, r] = $({
    width: window.innerWidth,
    height: window.innerHeight
  });
  return P(() => {
    function t() {
      r({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, []), e;
}, jn = (e) => {
  const [r, t] = $(!1);
  return P(() => {
    function n(o) {
      t(o.matches);
    }
    const i = matchMedia(e);
    return i.addEventListener("change", n), t(i.matches), () => i.removeEventListener("change", n);
  }, [e]), r;
}, D1 = "@vwp-theme", j7 = (e) => ["light", "dark"].includes(e), kr = vt((e) => ({
  theme: (() => {
    const r = localStorage.getItem(D1) || "";
    return j7(r) ? r : "light";
  })(),
  toggleTheme: () => e((r) => {
    const t = r.theme === "dark" ? "light" : "dark";
    return localStorage.setItem(D1, t), { theme: t };
  }),
  setTheme: (r) => {
    localStorage.setItem(D1, r), e({ theme: r });
  }
})), Lr = () => {
  const [e, r] = $(""), [t, n] = $("");
  return P(() => {
    var i;
    e || r("0.2.0-alpha.8"), t || n(((i = window == null ? void 0 : window.VLibrasWidgetPlus) == null ? void 0 : i.path) ?? "./");
  }, [e, t]), { version: e, path: t };
}, q7 = (e, r = []) => {
  const [t, n] = $(null), [i, o] = $(null), [s, l] = $(!0);
  return P(() => {
    let c = !0;
    return l(!0), o(null), n(null), e().then((u) => {
      c && (n(u), l(!1));
    }).catch((u) => {
      c && (o(u), l(!1));
    }), () => {
      c = !1;
    };
  }, [e, ...r]), { data: t, error: i, isLoading: s };
};
function Ts(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (r = 0; r < i; r++) e[r] && (t = Ts(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function W7() {
  for (var e, r, t = 0, n = "", i = arguments.length; t < i; t++) (e = arguments[t]) && (r = Ts(e)) && (n && (n += " "), n += r);
  return n;
}
const qn = "-", Z7 = (e) => {
  const r = Y7(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const l = s.split(qn);
      return l[0] === "" && l.length !== 1 && l.shift(), Ns(l, r) || X7(s);
    },
    getConflictingClassGroupIds: (s, l) => {
      const c = t[s] || [];
      return l && n[s] ? [...c, ...n[s]] : c;
    }
  };
}, Ns = (e, r) => {
  var s;
  if (e.length === 0)
    return r.classGroupId;
  const t = e[0], n = r.nextPart.get(t), i = n ? Ns(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (r.validators.length === 0)
    return;
  const o = e.join(qn);
  return (s = r.validators.find(({
    validator: l
  }) => l(o))) == null ? void 0 : s.classGroupId;
}, Ho = /^\[(.+)\]$/, X7 = (e) => {
  if (Ho.test(e)) {
    const r = Ho.exec(e)[1], t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, Y7 = (e) => {
  const {
    theme: r,
    classGroups: t
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const i in t)
    Cn(t[i], n, i, r);
  return n;
}, Cn = (e, r, t, n) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const o = i === "" ? r : Bo(r, i);
      o.classGroupId = t;
      return;
    }
    if (typeof i == "function") {
      if (K7(i)) {
        Cn(i(n), r, t, n);
        return;
      }
      r.validators.push({
        validator: i,
        classGroupId: t
      });
      return;
    }
    Object.entries(i).forEach(([o, s]) => {
      Cn(s, Bo(r, o), t, n);
    });
  });
}, Bo = (e, r) => {
  let t = e;
  return r.split(qn).forEach((n) => {
    t.nextPart.has(n) || t.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(n);
  }), t;
}, K7 = (e) => e.isThemeGetter, J7 = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const i = (o, s) => {
    t.set(o, s), r++, r > e && (r = 0, n = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let s = t.get(o);
      if (s !== void 0)
        return s;
      if ((s = n.get(o)) !== void 0)
        return i(o, s), s;
    },
    set(o, s) {
      t.has(o) ? t.set(o, s) : i(o, s);
    }
  };
}, yn = "!", _n = ":", Q7 = _n.length, eu = (e) => {
  const {
    prefix: r,
    experimentalParseClassName: t
  } = e;
  let n = (i) => {
    const o = [];
    let s = 0, l = 0, c = 0, u;
    for (let x = 0; x < i.length; x++) {
      let _ = i[x];
      if (s === 0 && l === 0) {
        if (_ === _n) {
          o.push(i.slice(c, x)), c = x + Q7;
          continue;
        }
        if (_ === "/") {
          u = x;
          continue;
        }
      }
      _ === "[" ? s++ : _ === "]" ? s-- : _ === "(" ? l++ : _ === ")" && l--;
    }
    const p = o.length === 0 ? i : i.substring(c), d = tu(p), g = d !== p, v = u && u > c ? u - c : void 0;
    return {
      modifiers: o,
      hasImportantModifier: g,
      baseClassName: d,
      maybePostfixModifierPosition: v
    };
  };
  if (r) {
    const i = r + _n, o = n;
    n = (s) => s.startsWith(i) ? o(s.substring(i.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (t) {
    const i = n;
    n = (o) => t({
      className: o,
      parseClassName: i
    });
  }
  return n;
}, tu = (e) => e.endsWith(yn) ? e.substring(0, e.length - 1) : e.startsWith(yn) ? e.substring(1) : e, ru = (e) => {
  const r = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const i = [];
    let o = [];
    return n.forEach((s) => {
      s[0] === "[" || r[s] ? (i.push(...o.sort(), s), o = []) : o.push(s);
    }), i.push(...o.sort()), i;
  };
}, nu = (e) => ({
  cache: J7(e.cacheSize),
  parseClassName: eu(e),
  sortModifiers: ru(e),
  ...Z7(e)
}), iu = /\s+/, ou = (e, r) => {
  const {
    parseClassName: t,
    getClassGroupId: n,
    getConflictingClassGroupIds: i,
    sortModifiers: o
  } = r, s = [], l = e.trim().split(iu);
  let c = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const p = l[u], {
      isExternal: d,
      modifiers: g,
      hasImportantModifier: v,
      baseClassName: x,
      maybePostfixModifierPosition: _
    } = t(p);
    if (d) {
      c = p + (c.length > 0 ? " " + c : c);
      continue;
    }
    let A = !!_, E = n(A ? x.substring(0, _) : x);
    if (!E) {
      if (!A) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (E = n(x), !E) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      A = !1;
    }
    const b = o(g).join(":"), y = v ? b + yn : b, w = y + E;
    if (s.includes(w))
      continue;
    s.push(w);
    const h = i(E, A);
    for (let f = 0; f < h.length; ++f) {
      const C = h[f];
      s.push(y + C);
    }
    c = p + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function au() {
  let e = 0, r, t, n = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (t = ks(r)) && (n && (n += " "), n += t);
  return n;
}
const ks = (e) => {
  if (typeof e == "string")
    return e;
  let r, t = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (r = ks(e[n])) && (t && (t += " "), t += r);
  return t;
};
function su(e, ...r) {
  let t, n, i, o = s;
  function s(c) {
    const u = r.reduce((p, d) => d(p), e());
    return t = nu(u), n = t.cache.get, i = t.cache.set, o = l, l(c);
  }
  function l(c) {
    const u = n(c);
    if (u)
      return u;
    const p = ou(c, t);
    return i(c, p), p;
  }
  return function() {
    return o(au.apply(null, arguments));
  };
}
const ye = (e) => {
  const r = (t) => t[e] || [];
  return r.isThemeGetter = !0, r;
}, Ls = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Rs = /^\((?:(\w[\w-]*):)?(.+)\)$/i, lu = /^\d+\/\d+$/, cu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, uu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, du = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, pu = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, hu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, wt = (e) => lu.test(e), Z = (e) => !!e && !Number.isNaN(Number(e)), ot = (e) => !!e && Number.isInteger(Number(e)), Fo = (e) => e.endsWith("%") && Z(e.slice(0, -1)), at = (e) => cu.test(e), fu = () => !0, gu = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  uu.test(e) && !du.test(e)
), Wn = () => !1, mu = (e) => pu.test(e), vu = (e) => hu.test(e), Cu = (e) => !O(e) && !D(e), yu = (e) => It(e, Ps, Wn), O = (e) => Ls.test(e), ct = (e) => It(e, Os, gu), H1 = (e) => It(e, Lu, Z), _u = (e) => It(e, Ms, Wn), bu = (e) => It(e, Is, vu), wu = (e) => It(e, Wn, mu), D = (e) => Rs.test(e), Bt = (e) => Pt(e, Os), xu = (e) => Pt(e, Ru), Au = (e) => Pt(e, Ms), Eu = (e) => Pt(e, Ps), Su = (e) => Pt(e, Is), Tu = (e) => Pt(e, Mu, !0), It = (e, r, t) => {
  const n = Ls.exec(e);
  return n ? n[1] ? r(n[1]) : t(n[2]) : !1;
}, Pt = (e, r, t = !1) => {
  const n = Rs.exec(e);
  return n ? n[1] ? r(n[1]) : t : !1;
}, Ms = (e) => e === "position", Nu = /* @__PURE__ */ new Set(["image", "url"]), Is = (e) => Nu.has(e), ku = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Ps = (e) => ku.has(e), Os = (e) => e === "length", Lu = (e) => e === "number", Ru = (e) => e === "family-name", Mu = (e) => e === "shadow", Iu = () => {
  const e = ye("color"), r = ye("font"), t = ye("text"), n = ye("font-weight"), i = ye("tracking"), o = ye("leading"), s = ye("breakpoint"), l = ye("container"), c = ye("spacing"), u = ye("radius"), p = ye("shadow"), d = ye("inset-shadow"), g = ye("drop-shadow"), v = ye("blur"), x = ye("perspective"), _ = ye("aspect"), A = ye("ease"), E = ye("animate"), b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], w = () => ["auto", "hidden", "clip", "visible", "scroll"], h = () => ["auto", "contain", "none"], f = () => [D, O, c], C = () => [wt, "full", "auto", ...f()], T = () => [ot, "none", "subgrid", D, O], R = () => ["auto", {
    span: ["full", ot, D, O]
  }, ot, D, O], k = () => [ot, "auto", D, O], B = () => ["auto", "min", "max", "fr", D, O], M = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], I = () => ["start", "end", "center", "stretch"], L = () => ["auto", ...f()], Q = () => [wt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...f()], j = () => [e, D, O], Le = () => [Fo, Bt, ct], K = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    D,
    O
  ], ne = () => ["", Z, Bt, ct], Oe = () => ["solid", "dashed", "dotted", "double"], q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Ve = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    D,
    O
  ], ee = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", D, O], Re = () => ["none", Z, D, O], Y = () => ["none", Z, D, O], J = () => [Z, D, O], xe = () => [wt, "full", ...f()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [at],
      breakpoint: [at],
      color: [fu],
      container: [at],
      "drop-shadow": [at],
      ease: ["in", "out", "in-out"],
      font: [Cu],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [at],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [at],
      shadow: [at],
      spacing: ["px", Z],
      text: [at],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", wt, O, D, _]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Z, O, D, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": b()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": b()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...y(), O, D]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: w()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": w()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": w()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: h()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": h()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": h()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: C()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": C()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": C()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: C()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: C()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: C()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: C()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: C()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: C()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [ot, "auto", D, O]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [wt, "full", "auto", l, ...f()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [Z, wt, "auto", "initial", "none", O]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Z, D, O]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Z, D, O]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ot, "first", "last", "none", D, O]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": T()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: R()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": k()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": k()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": T()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: R()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": k()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": k()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": B()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": B()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: f()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": f()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": f()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...M(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...I(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...I()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...M()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...I(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...I(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": M()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...I(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...I()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: f()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: f()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: f()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: f()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: f()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: f()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: f()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: f()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: f()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: L()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: L()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: L()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: L()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: L()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: L()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: L()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: L()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: L()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": f()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": f()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: Q()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...Q()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          l,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...Q()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          l,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [s]
          },
          ...Q()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...Q()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...Q()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...Q()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, Bt, ct]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, D, H1]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Fo, O]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [xu, O, r]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [i, D, O]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Z, "none", D, H1]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...f()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", D, O]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", D, O]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: j()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: j()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Oe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Z, "from-font", "auto", D, ct]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: j()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Z, "auto", D, O]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: f()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", D, O]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", D, O]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...y(), Au, _u]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "space", "round"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Eu, yu]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ot, D, O],
          radial: ["", D, O],
          conic: [ot, D, O]
        }, Su, bu]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: j()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: Le()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Le()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Le()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: j()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: j()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: j()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: K()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": K()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": K()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": K()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": K()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": K()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": K()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": K()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": K()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": K()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": K()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": K()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": K()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": K()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": K()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: ne()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": ne()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": ne()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": ne()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": ne()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": ne()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": ne()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": ne()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": ne()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": ne()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": ne()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Oe(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Oe(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: j()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": j()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": j()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": j()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": j()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": j()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": j()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": j()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": j()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: j()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Oe(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Z, D, O]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Z, Bt, ct]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          p,
          Tu,
          wu
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: j()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", D, O, d]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": j()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: ne()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: j()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Z, ct]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": j()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": ne()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": j()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Z, D, O]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...q(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": q()
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          D,
          O
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Ve()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Z, D, O]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Z, D, O]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          g,
          D,
          O
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Z, D, O]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Z, D, O]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Z, D, O]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Z, D, O]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Z, D, O]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          D,
          O
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Ve()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Z, D, O]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Z, D, O]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Z, D, O]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Z, D, O]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Z, D, O]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Z, D, O]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Z, D, O]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Z, D, O]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": f()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": f()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": f()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", D, O]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [Z, "initial", D, O]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", A, D, O]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Z, D, O]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", E, D, O]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [x, D, O]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": ee()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Re()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Re()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Re()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Re()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Y()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Y()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Y()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Y()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: J()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": J()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": J()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [D, O, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ee()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: xe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": xe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": xe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": xe()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: j()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: j()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", D, O]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": f()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": f()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": f()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": f()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": f()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": f()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": f()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": f()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": f()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": f()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": f()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": f()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": f()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": f()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": f()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": f()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": f()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": f()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", D, O]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...j()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Z, Bt, ct, H1]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...j()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["before", "after", "placeholder", "file", "marker", "selection", "first-line", "first-letter", "backdrop", "*", "**"]
  };
}, Pu = /* @__PURE__ */ su(Iu), B1 = {};
function G(...e) {
  return Pu(W7(e));
}
const Ke = (e, r, t) => {
  if (!B1[r]) {
    const n = document.createElement("style");
    n.id = r, n.innerHTML = e, B1[r] = n, document.head.appendChild(n);
  }
  document.head.appendChild(B1[r]);
};
function Ds(e, r) {
  const t = { ...e };
  for (const n of r) delete t[n];
  return t;
}
const Ou = (e) => e.split(" ").map((r) => r.charAt(0).toUpperCase() + r.slice(1)).join(" "), Rt = (e, r) => (r || document).querySelector(e), Ot = (e, r) => Array.from(document.querySelectorAll(e)), Du = () => {
  var e;
  return (e = Rt("[vp]")) == null ? void 0 : e.closest("[vw]");
}, Zn = {
  fontSize: void 0,
  letterSpacing: void 0,
  lineSpacing: void 0,
  highlightLinks: void 0,
  highlightTitles: void 0,
  hideImages: void 0,
  readingMask: void 0,
  readingGuide: void 0,
  pauseAnimations: void 0,
  largeCursor: void 0,
  textReader: void 0,
  textColor: void 0,
  dictionary: void 0,
  dyslexicFont: void 0,
  disableSound: void 0,
  profile: void 0,
  brightness: void 0,
  colorBlindFilter: void 0,
  nightFilter: void 0,
  disableAutoplay: void 0,
  saturation: void 0,
  readerMode: void 0,
  pageColor: void 0,
  pageStructure: void 0,
  keyboardNavigation: void 0,
  isActive: !1
}, N = vt()(
  cs(
    (e) => ({
      isOpenWidget: !1,
      isExpanded: !1,
      isLoaded: !1,
      isActive: !1,
      setIsExpanded: (r) => e((t) => ({ isExpanded: typeof r == "function" ? r(t.isExpanded) : r })),
      setIsOpenWidget: (r) => e((t) => ({ isOpenWidget: typeof r == "function" ? r(t.isExpanded) : r })),
      setIsLoaded: (r) => e({ isLoaded: r }),
      reset: () => e(Zn)
    }),
    {
      name: "@vlibras-widget-plus",
      partialize: (e) => Ds(e, ["textReader", "dictionary", "readerMode", "pageStructure"]),
      version: 1
    }
  )
);
N.subscribe((e, r) => {
  const n = Object.keys(Ds(Zn, ["isActive"])).some((i) => {
    const o = e[i];
    return ["textReader", "textColor", "dictionary"].includes(i) ? o == null ? void 0 : o.isActive : !!o;
  });
  n !== r.isActive && (e.isActive = n), window.VLibrasWidgetPlus && (window.VLibrasWidgetPlus.isOpen = e.isOpenWidget);
});
const Tt = "vwp-app-root", rt = {}, vr = `vwp-root-overlay-${Date.now().toString().slice(0, 3)}`, Hu = () => {
  if (!rt[vr]) {
    const r = document.createElement("div");
    r.id = vr, document.body.appendChild(r), rt[vr] = r;
  }
  const e = rt[vr];
  return e.shadowRoot || e.attachShadow({ mode: "open" });
}, Xn = (e) => {
  if (!rt[e]) {
    const r = document.createElement("div");
    return r.id = e, Hu().appendChild(r), rt[e] = r, r;
  }
  return rt[e];
}, Bu = () => {
  if (!rt[Tt]) {
    let n = document.getElementById(Tt);
    n || (n = document.createElement("div"), n.id = Tt, document.body.appendChild(n)), rt[Tt] = n;
  }
  const e = rt[Tt], r = e.shadowRoot || e.attachShadow({ mode: "open" });
  return { root: e, shadowRoot: r, isRootActive: () => e.getAttribute("data-active") === "true" };
}, Yn = (e, r) => {
  const n = ["html", "input", "head", "script", "style", "iframe", "meta", "canvas", "noscript"], i = e.tagName.toLowerCase(), o = n.includes(i), s = e.classList.contains("vwp-ignore"), l = e.closest("[vw]");
  return e.id !== Tt && !o && !s && !l;
}, Fu = async (e, r) => {
  const t = [
    new FontFace("VLibrasWidget_Font", `url(${e}/assets/fonts/rawline/rawline-500.ttf) format('truetype')`, {
      weight: "500"
    }),
    new FontFace("VLibrasWidget_Font", `url(${e}/assets/fonts/rawline/rawline-500i.ttf) format('truetype')`, {
      weight: "500",
      style: "italic"
    })
  ];
  await Kn(t, (n) => {
    r.adoptedStyleSheets = [...r.adoptedStyleSheets, ...n];
  });
}, $u = async (e) => {
  const r = [
    new FontFace(
      "OpenDyslexic_Font",
      `url(${e}/assets/fonts/open-dyslexic/OpenDyslexic3-Regular.ttf) format('truetype')`,
      {
        weight: "500"
      }
    ),
    new FontFace(
      "OpenDyslexic_Font",
      `url(${e}/assets/fonts/open-dyslexic/OpenDyslexic3-Bold.ttf) format('truetype')`,
      {
        weight: "700"
      }
    )
  ];
  await Kn(r, (t) => {
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, ...t];
  });
}, zu = async (e) => {
  const r = [
    new FontFace("ComicNeue_Font", `url(${e}/assets/fonts/comic-neue/ComicNeue-Regular.ttf) format('truetype')`, {
      weight: "500"
    }),
    new FontFace("ComicNeue_Font", `url(${e}/assets/fonts/comic-neue/ComicNeue-Italic.ttf) format('truetype')`, {
      weight: "500",
      style: "italic"
    }),
    new FontFace("ComicNeue_Font", `url(${e}/assets/fonts/comic-neue/ComicNeue-Bold.ttf) format('truetype')`, {
      weight: "700"
    }),
    new FontFace("ComicNeue_Font", `url(${e}/assets/fonts/comic-neue/ComicNeue-BoldItalic.ttf) format('truetype')`, {
      weight: "700",
      style: "italic"
    })
  ];
  await Kn(r, (t) => {
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, ...t];
  });
}, Kn = async (e, r) => {
  await Promise.all(e.map((t) => t.load())), e.forEach((t) => document.fonts.add(t)), r && r(document.adoptedStyleSheets);
}, F1 = Ie(({ children: e, disabled: r, variant: t = "default", className: n, ...i }, o) => /* @__PURE__ */ a(
  "button",
  {
    ref: o,
    className: G(
      "cursor-pointer text-foreground flex justify-center items-center gap-x-2",
      "size-9 hover:bg-muted rounded-full",
      "[&>svg]:pointer-events-none [&>svg]:fill-foreground/80 hover:[&>svg]:fill-foreground",
      r && "!pointer-events-none *:!pointer-events-none opacity-50",
      t === "destructive" && "hover:bg-destructive/10 hover:[&>svg]:fill-destructive",
      n
    ),
    type: i.type || "button",
    ...i,
    children: e
  }
)), Uu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M4.675 15.425L3.65 18.275C3.56667 18.5083 3.43333 18.6875 3.25 18.8125C3.06667 18.9375 2.85833 19 2.625 19C2.24167 19 1.9375 18.8375 1.7125 18.5125C1.4875 18.1875 1.44167 17.8417 1.575 17.475L5.975 5.75C6.05833 5.51667 6.2 5.33333 6.4 5.2C6.6 5.06667 6.81667 5 7.05 5H7.95C8.2 5 8.42083 5.06667 8.6125 5.2C8.80417 5.33333 8.94167 5.51667 9.025 5.75L13.45 17.5C13.5833 17.8667 13.5375 18.2083 13.3125 18.525C13.0875 18.8417 12.7833 19 12.4 19C12.1667 19 11.95 18.9333 11.75 18.8C11.55 18.6667 11.4083 18.4833 11.325 18.25L10.325 15.425H4.675ZM5.4 13.4H9.6L7.55 7.6H7.45L5.4 13.4ZM18 13H16C15.7167 13 15.4792 12.9042 15.2875 12.7125C15.0958 12.5208 15 12.2833 15 12C15 11.7167 15.0958 11.4792 15.2875 11.2875C15.4792 11.0958 15.7167 11 16 11H18V9C18 8.71667 18.0958 8.47917 18.2875 8.2875C18.4792 8.09583 18.7167 8 19 8C19.2833 8 19.5208 8.09583 19.7125 8.2875C19.9042 8.47917 20 8.71667 20 9V11H22C22.2833 11 22.5208 11.0958 22.7125 11.2875C22.9042 11.4792 23 11.7167 23 12C23 12.2833 22.9042 12.5208 22.7125 12.7125C22.5208 12.9042 22.2833 13 22 13H20V15C20 15.2833 19.9042 15.5208 19.7125 15.7125C19.5208 15.9042 19.2833 16 19 16C18.7167 16 18.4792 15.9042 18.2875 15.7125C18.0958 15.5208 18 15.2833 18 15V13Z" })
    ]
  }
), Vu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M2.5875 19.4125C2.97917 19.8042 3.45 20 4 20H20C20.55 20 21.0208 19.8042 21.4125 19.4125C21.8042 19.0208 22 18.55 22 18V6C22 5.45 21.8042 4.97917 21.4125 4.5875C21.0208 4.19583 20.55 4 20 4H4C3.45 4 2.97917 4.19583 2.5875 4.5875C2.19583 4.97917 2 5.45 2 6V18C2 18.55 2.19583 19.0208 2.5875 19.4125ZM5.17 14.83C5.95 15.61 6.89333 16 8 16H10.4C10.6267 16 10.8167 15.9233 10.97 15.77C11.1233 15.6167 11.2 15.4267 11.2 15.2C11.2 14.9733 11.1233 14.7833 10.97 14.63C10.8167 14.4767 10.6267 14.4 10.4 14.4H8C7.33333 14.4 6.76667 14.1667 6.3 13.7C5.83333 13.2333 5.6 12.6667 5.6 12C5.6 11.3333 5.83333 10.7667 6.3 10.3C6.76667 9.83333 7.33333 9.6 8 9.6H10.4C10.6267 9.6 10.8167 9.52333 10.97 9.37C11.1233 9.21667 11.2 9.02667 11.2 8.8C11.2 8.57333 11.1233 8.38333 10.97 8.23C10.8167 8.07667 10.6267 8 10.4 8H8C6.89333 8 5.95 8.39 5.17 9.17C4.39 9.95 4 10.8933 4 12C4 13.1067 4.39 14.05 5.17 14.83ZM9.03 12.57C9.18333 12.7233 9.37333 12.8 9.6 12.8H14.4C14.6267 12.8 14.8167 12.7233 14.97 12.57C15.1233 12.4167 15.2 12.2267 15.2 12C15.2 11.7733 15.1233 11.5833 14.97 11.43C14.8167 11.2767 14.6267 11.2 14.4 11.2H9.6C9.37333 11.2 9.18333 11.2767 9.03 11.43C8.87667 11.5833 8.8 11.7733 8.8 12C8.8 12.2267 8.87667 12.4167 9.03 12.57ZM13.03 15.77C13.1833 15.9233 13.3733 16 13.6 16H16C17.1067 16 18.05 15.61 18.83 14.83C19.61 14.05 20 13.1067 20 12C20 10.8933 19.61 9.95 18.83 9.17C18.05 8.39 17.1067 8 16 8H13.6C13.3733 8 13.1833 8.07667 13.03 8.23C12.8767 8.38333 12.8 8.57333 12.8 8.8C12.8 9.02667 12.8767 9.21667 13.03 9.37C13.1833 9.52333 13.3733 9.6 13.6 9.6H16C16.6667 9.6 17.2333 9.83333 17.7 10.3C18.1667 10.7667 18.4 11.3333 18.4 12C18.4 12.6667 18.1667 13.2333 17.7 13.7C17.2333 14.1667 16.6667 14.4 16 14.4H13.6C13.3733 14.4 13.1833 14.4767 13.03 14.63C12.8767 14.7833 12.8 14.9733 12.8 15.2C12.8 15.4267 12.8767 15.6167 13.03 15.77Z"
        }
      )
    ]
  }
), Gu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M11 18.15V15C11 14.7167 11.0958 14.4792 11.2875 14.2875C11.4792 14.0959 11.7167 14 12 14C12.2833 14 12.5208 14.0959 12.7125 14.2875C12.9042 14.4792 13 14.7167 13 15V18.125L14.075 17.025C14.275 16.825 14.5167 16.725 14.8 16.725C15.0833 16.725 15.325 16.825 15.525 17.025C15.725 17.225 15.825 17.4667 15.825 17.75C15.825 18.0334 15.725 18.2751 15.525 18.475L12.7 21.3C12.6 21.4 12.4917 21.4709 12.375 21.5125C12.2583 21.5542 12.1333 21.575 12 21.575C11.8667 21.575 11.7417 21.5542 11.625 21.5125C11.5083 21.4709 11.4 21.4 11.3 21.3L8.44999 18.45C8.24999 18.25 8.15415 18.0125 8.16249 17.7375C8.17082 17.4625 8.27499 17.225 8.47499 17.025C8.67499 16.825 8.91249 16.725 9.18749 16.725C9.46249 16.725 9.69999 16.825 9.89999 17.025L11 18.15ZM11 5.85005L9.87499 6.97505C9.67499 7.17505 9.44165 7.27505 9.17499 7.27505C8.90832 7.27505 8.67499 7.17505 8.47499 6.97505C8.27499 6.77505 8.17499 6.53755 8.17499 6.26255C8.17499 5.98755 8.27499 5.75005 8.47499 5.55005L11.3 2.70005C11.4 2.60005 11.5083 2.52922 11.625 2.48755C11.7417 2.44588 11.8667 2.42505 12 2.42505C12.1333 2.42505 12.2583 2.44588 12.375 2.48755C12.4917 2.52922 12.6 2.60005 12.7 2.70005L15.55 5.55005C15.75 5.75005 15.85 5.98338 15.85 6.25005C15.85 6.51672 15.75 6.75005 15.55 6.95005C15.35 7.15005 15.1125 7.25005 14.8375 7.25005C14.5625 7.25005 14.325 7.15005 14.125 6.95005L13 5.85005V9.00005C13 9.28338 12.9042 9.52088 12.7125 9.71255C12.5208 9.90422 12.2833 10 12 10C11.7167 10 11.4792 9.90422 11.2875 9.71255C11.0958 9.52088 11 9.28338 11 9.00005V5.85005Z" })
    ]
  }
), ju = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M6.7 21.3C6.5 21.5 6.26667 21.6 6 21.6C5.73334 21.6 5.5 21.5 5.3 21.3L2.7 18.7C2.5 18.5 2.4 18.2667 2.4 18C2.4 17.7333 2.5 17.5 2.7 17.3L5.3 14.7C5.5 14.5 5.73334 14.4 6 14.4C6.26667 14.4 6.5 14.5 6.7 14.7C6.9 14.9 7 15.1375 7 15.4125C7 15.6875 6.9 15.925 6.7 16.125L5.825 17H18.175L17.3 16.125C17.1167 15.925 17.0208 15.6875 17.0125 15.4125C17.0042 15.1375 17.1 14.9 17.3 14.7C17.5 14.5 17.7333 14.4 18 14.4C18.2667 14.4 18.5 14.5 18.7 14.7L21.3 17.3C21.5 17.5 21.6 17.7333 21.6 18C21.6 18.2667 21.5 18.5 21.3 18.7L18.7 21.3C18.5 21.5 18.2667 21.6 18 21.6C17.7333 21.6 17.5 21.5 17.3 21.3C17.1 21.1 17 20.8625 17 20.5875C17 20.3125 17.1 20.075 17.3 19.875L18.175 19H5.825L6.7 19.875C6.88334 20.075 6.97917 20.3125 6.9875 20.5875C6.99583 20.8625 6.9 21.1 6.7 21.3ZM7.35 11.8L10.775 2.6C10.8417 2.41667 10.9542 2.27083 11.1125 2.1625C11.2708 2.05417 11.45 2 11.65 2H12.35C12.55 2 12.7292 2.05417 12.8875 2.1625C13.0458 2.27083 13.1583 2.41667 13.225 2.6L16.65 11.825C16.75 12.1083 16.7167 12.375 16.55 12.625C16.3833 12.875 16.15 13 15.85 13C15.6667 13 15.4958 12.9458 15.3375 12.8375C15.1792 12.7292 15.0667 12.5833 15 12.4L14.25 10.2H9.8L9 12.425C8.93333 12.6083 8.825 12.75 8.675 12.85C8.525 12.95 8.35834 13 8.175 13C7.85834 13 7.6125 12.8708 7.4375 12.6125C7.2625 12.3542 7.23334 12.0833 7.35 11.8ZM10.35 8.6H13.65L12.05 4.05H11.95L10.35 8.6Z" }),
      " "
    ]
  }
), qu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M5 16C4.45 16 3.97917 15.8042 3.5875 15.4125C3.19583 15.0208 3 14.55 3 14V10C3 9.45 3.19583 8.97917 3.5875 8.5875C3.97917 8.19583 4.45 8 5 8H19C19.55 8 20.0208 8.19583 20.4125 8.5875C20.8042 8.97917 21 9.45 21 10V14C21 14.55 20.8042 15.0208 20.4125 15.4125C20.0208 15.8042 19.55 16 19 16H5ZM19 10H5V14H19V10Z" }),
      /* @__PURE__ */ a("path", { d: "M5 5.5C5 4.67157 5.67157 4 6.5 4H17.5C18.3284 4 19 4.67157 19 5.5C19 6.32843 18.3284 7 17.5 7H6.5C5.67157 7 5 6.32843 5 5.5Z" }),
      /* @__PURE__ */ a("path", { d: "M5 18.5C5 17.6716 5.67157 17 6.5 17H17.5C18.3284 17 19 17.6716 19 18.5C19 19.3284 18.3284 20 17.5 20H6.5C5.67157 20 5 19.3284 5 18.5Z" }),
      " "
    ]
  }
), Wu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("g", { clipPath: "url(#clip0_1_148)", children: /* @__PURE__ */ a("path", { d: "M19.2535 0.622806C19.3084 0.240758 19.3471 0.0804978 19.3932 0.0451324C19.4789 -0.0206635 19.5056 -0.0169822 19.5926 0.0724691C19.6724 0.154597 19.9771 1.09947 20.0779 1.57791C20.1352 1.84951 20.135 1.88989 20.0759 2.13771C19.9652 2.6008 19.6335 2.99013 19.1006 3.28241C18.9851 3.34574 18.6504 3.45983 18.3568 3.53592C17.6512 3.71874 17.2297 3.86298 16.6183 4.13083C16.3401 4.25267 16.1052 4.35943 16.0961 4.36813C16.087 4.37678 16.0979 4.40271 16.1203 4.42574C16.1492 4.45543 16.1959 4.44896 16.2814 4.4035C16.4124 4.33378 16.5502 4.35454 16.5502 4.44395C16.5502 4.47481 16.5344 4.50007 16.515 4.50007C16.4958 4.50007 16.4276 4.54543 16.3636 4.60085C16.1919 4.74959 16.153 4.94505 16.23 5.27227C16.4027 6.00515 16.4017 6.31432 16.2248 6.90867C16.1409 7.19097 16.1305 7.78395 16.204 8.10319C16.2764 8.41752 16.5183 8.91056 16.7329 9.18098C16.9939 9.50977 17.2719 9.71782 17.7142 9.91544C18.3958 10.2199 18.5918 10.4187 18.4804 10.6927C18.4052 10.878 18.0014 11.3848 17.7604 11.5963C17.5332 11.7959 17.2539 11.9842 16.8998 12.1767C16.7628 12.2512 16.6378 12.3507 16.609 12.4082C16.5812 12.4638 16.5461 12.6806 16.5308 12.8901C16.5156 13.0995 16.4839 13.2872 16.4601 13.3072C16.4364 13.3272 16.3449 13.3634 16.2569 13.3875C16.0586 13.4422 16.0299 13.485 16.139 13.5635C16.3328 13.7033 16.3293 13.7678 16.1085 14.1161C15.7627 14.6622 15.5852 15.232 15.4256 16.3081C15.3178 17.0344 15.2468 17.1655 14.9046 17.2695C14.7149 17.3271 12.514 16.953 12.108 16.7942C12.0481 16.7707 11.9722 16.7795 11.8698 16.8217C11.7411 16.8747 11.6952 16.9297 11.5518 17.2029C11.4596 17.3785 11.302 17.7121 11.2015 17.9442L11.0188 18.3664L11.1826 18.6055C11.3396 18.8345 11.3486 18.8634 11.3972 19.2935C11.4369 19.6445 11.4696 19.7806 11.5474 19.9171C11.6255 20.0542 11.6373 20.1038 11.6025 20.147C11.5645 20.1941 11.5446 20.1929 11.4653 20.1394C11.3005 20.0283 11.3201 20.1208 11.4978 20.2926C11.7142 20.5018 11.9786 20.9245 12.1167 21.2819C12.1749 21.4328 12.3047 21.8998 12.405 22.3198C12.5051 22.7387 12.6975 23.4938 12.8331 24H3.00041C2.98473 24.0403 3.01575 23.9574 3.00041 24C3.16755 23.5707 3.4904 22.8509 3.8808 22.252C4.46487 21.3561 5.02401 20.2783 5.51163 19.1083C5.90984 18.153 6.38331 17.7143 6.38331 17.7143C6.26008 17.6461 6.61797 17.7551 6.61797 17.6382C6.61797 17.5579 6.95175 16.9075 7.18483 16.5336C7.41605 16.1626 7.56918 16.0665 7.81704 16.1369C8.03326 16.1984 8.13338 16.1546 8.21257 15.9642C8.44094 15.4149 8.80668 14.3393 8.92336 13.8742C9.09575 13.1867 9.09445 13.1799 8.59894 12.1515C7.87567 10.6507 7.07851 9.43031 6.08246 8.29901C5.30939 7.4209 4.92823 6.89207 4.53928 6.1577C4.44428 5.97837 4.352 5.83166 4.33416 5.83166C4.27867 5.83166 4.2574 5.96502 4.29268 6.09167C4.33792 6.25393 4.28061 6.35286 4.20245 6.24751C4.09167 6.09833 4.0688 5.80017 4.11919 5.16328C4.16417 4.59497 4.17478 4.54327 4.27559 4.39958C4.33507 4.31487 4.49186 4.16043 4.62398 4.05642C4.86278 3.86847 4.95514 3.74635 5.20995 3.28159C5.42598 2.88755 6.07318 2.27883 6.17007 2.37854C6.18754 2.39651 6.12596 2.59367 6.03326 2.81675C5.94055 3.03979 5.87255 3.24333 5.88218 3.2691C5.89398 3.30074 6.03748 3.25265 6.3254 3.12058C6.55955 3.01315 7.18784 2.73145 7.72155 2.49458C8.76213 2.0328 9.98105 1.42003 10.7474 0.973443C11.3249 0.636944 11.4547 0.576866 11.8752 0.451541C12.4345 0.284896 12.9336 0.260615 14.431 0.327233C15.1596 0.359661 15.7719 0.396397 15.7914 0.40889C15.8718 0.46 15.8169 0.533433 15.6409 0.609921C15.454 0.691226 15.3534 0.806369 15.4018 0.88411C15.4356 0.938705 16.9252 1.61359 17.2819 1.73598C17.4341 1.78822 17.6956 1.86067 17.8631 1.89705C18.5205 2.03985 18.8096 1.96939 18.9947 1.6215C19.1339 1.35987 19.164 1.24355 19.2535 0.622806Z" }) })
    ]
  }
), Zu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M8.65 20.5L2.5 14.35C2.33333 14.1833 2.20833 14 2.125 13.8C2.04167 13.6 2 13.3916 2 13.175C2 12.9583 2.04167 12.75 2.125 12.55C2.20833 12.35 2.33333 12.1666 2.5 12L8.25 6.27498L6.375 4.39998C6.15833 4.18331 6.04583 3.92498 6.0375 3.62498C6.02917 3.32498 6.13333 3.05831 6.35 2.82498C6.56667 2.59164 6.83333 2.47498 7.15 2.47498C7.46667 2.47498 7.74167 2.59164 7.975 2.82498L17.15 12C17.3167 12.1666 17.4375 12.35 17.5125 12.55C17.5875 12.75 17.625 12.9583 17.625 13.175C17.625 13.3916 17.5875 13.6 17.5125 13.8C17.4375 14 17.3167 14.1833 17.15 14.35L11 20.5C10.8333 20.6666 10.65 20.7916 10.45 20.875C10.25 20.9583 10.0417 21 9.825 21C9.60833 21 9.4 20.9583 9.2 20.875C9 20.7916 8.81667 20.6666 8.65 20.5ZM9.825 7.84998L4.475 13.2H15.175L9.825 7.84998ZM19.8 21C19.2 21 18.6917 20.7875 18.275 20.3625C17.8583 19.9375 17.65 19.4166 17.65 18.8C17.65 18.35 17.7625 17.925 17.9875 17.525C18.2125 17.125 18.4667 16.7333 18.75 16.35L19.225 15.75C19.375 15.5666 19.5708 15.4708 19.8125 15.4625C20.0542 15.4541 20.25 15.5416 20.4 15.725L20.9 16.35C21.1667 16.7333 21.4167 17.125 21.65 17.525C21.8833 17.925 22 18.35 22 18.8C22 19.4166 21.7833 19.9375 21.35 20.3625C20.9167 20.7875 20.4 21 19.8 21Z" })
    ]
  }
), Xu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M21 5V15.725C21 15.9583 20.9417 16.15 20.825 16.3C20.7083 16.45 20.5583 16.5667 20.375 16.65C20.1917 16.7333 20.0083 16.7625 19.825 16.7375C19.6417 16.7125 19.4667 16.6167 19.3 16.45L7.55001 4.7C7.38335 4.53333 7.28751 4.35833 7.26251 4.175C7.23751 3.99167 7.26668 3.80833 7.35001 3.625C7.43335 3.44167 7.55001 3.29167 7.70001 3.175C7.85001 3.05833 8.04168 3 8.27501 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5ZM5.00001 21C4.45001 21 3.97918 20.8042 3.58751 20.4125C3.19585 20.0208 3.00001 19.55 3.00001 19V5.8L2.10001 4.9C1.91668 4.71667 1.82501 4.48333 1.82501 4.2C1.82501 3.91667 1.91668 3.68333 2.10001 3.5C2.28335 3.31667 2.51668 3.225 2.80001 3.225C3.08335 3.225 3.31668 3.31667 3.50001 3.5L20.5 20.5C20.6833 20.6833 20.775 20.9167 20.775 21.2C20.775 21.4833 20.6833 21.7167 20.5 21.9C20.3167 22.0833 20.0833 22.175 19.8 22.175C19.5167 22.175 19.2833 22.0833 19.1 21.9L18.2 21H5.00001ZM14.175 17L12.075 14.9L11.25 16L9.40001 13.525C9.30001 13.3917 9.16668 13.325 9.00001 13.325C8.83335 13.325 8.70001 13.3917 8.60001 13.525L6.60001 16.2C6.46668 16.3667 6.45001 16.5417 6.55001 16.725C6.65001 16.9083 6.80001 17 7.00001 17H14.175Z" }),
      " "
    ]
  }
), Yu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M11.6875 22L9.7375 17.1667L6 20.5V2L19 14.5833L13.9625 15.25L15.9125 20.1667L11.6875 22ZM10.3875 14.5833L12.5813 19.9167L13.9625 19.25L11.6875 14L15.5063 13.5L7.4625 5.66667V17.1667L10.3875 14.5833Z" })
    ]
  }
), Ku = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M9.47259 13.2703L8.37438 16.3514C8.28509 16.6036 8.14223 16.7973 7.94581 16.9324C7.74938 17.0676 7.52616 17.1351 7.27616 17.1351C6.86545 17.1351 6.53956 16.9595 6.29848 16.6081C6.05741 16.2568 6.00831 15.8829 6.15116 15.4865L10.8654 2.81081C10.9547 2.55856 11.1065 2.36036 11.3208 2.21622C11.5351 2.07207 11.7672 2 12.0172 2H12.9815C13.2494 2 13.486 2.07207 13.6913 2.21622C13.8967 2.36036 14.044 2.55856 14.1333 2.81081L18.8744 15.5135C19.0172 15.9099 18.9681 16.2793 18.7271 16.6216C18.486 16.964 18.1601 17.1351 17.7494 17.1351C17.4994 17.1351 17.2672 17.0631 17.0529 16.9189C16.8387 16.7748 16.6869 16.5766 16.5976 16.3243L15.5262 13.2703H9.47259ZM10.2494 11.0811H14.7494L12.5529 4.81081H12.4458L10.2494 11.0811Z" }),
      /* @__PURE__ */ a("path", { d: "M5.30804 21.6892C5.51339 21.8964 5.76786 22 6.07143 22H18.9286C19.2321 22 19.4866 21.8964 19.692 21.6892C19.8973 21.482 20 21.2252 20 20.9189C20 20.6126 19.8973 20.3559 19.692 20.1486C19.4866 19.9414 19.2321 19.8378 18.9286 19.8378H6.07143C5.76786 19.8378 5.51339 19.9414 5.30804 20.1486C5.10268 20.3559 5 20.6126 5 20.9189C5 21.2252 5.10268 21.482 5.30804 21.6892Z" }),
      " "
    ]
  }
), Ju = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M10 15C10.2833 15 10.5208 14.9042 10.7125 14.7125C10.9042 14.5208 11 14.2833 11 14V10C11 9.71667 10.9042 9.47917 10.7125 9.2875C10.5208 9.09583 10.2833 9 10 9C9.71667 9 9.47917 9.09583 9.2875 9.2875C9.09583 9.47917 9 9.71667 9 10V14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15ZM14 15C14.2833 15 14.5208 14.9042 14.7125 14.7125C14.9042 14.5208 15 14.2833 15 14V10C15 9.71667 14.9042 9.47917 14.7125 9.2875C14.5208 9.09583 14.2833 9 14 9C13.7167 9 13.4792 9.09583 13.2875 9.2875C13.0958 9.47917 13 9.71667 13 10V14C13 14.2833 13.0958 14.5208 13.2875 14.7125C13.4792 14.9042 13.7167 15 14 15ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 11.4667 2.04167 10.9333 2.125 10.4C2.20833 9.86667 2.33333 9.34167 2.5 8.825C2.58333 8.55833 2.75417 8.37917 3.0125 8.2875C3.27083 8.19583 3.51667 8.21667 3.75 8.35C4 8.48333 4.17917 8.67917 4.2875 8.9375C4.39583 9.19583 4.40833 9.46667 4.325 9.75C4.225 10.1167 4.14583 10.4875 4.0875 10.8625C4.02917 11.2375 4 11.6167 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C11.6 4 11.2042 4.02917 10.8125 4.0875C10.4208 4.14583 10.0333 4.23333 9.65 4.35C9.36667 4.43333 9.1 4.425 8.85 4.325C8.6 4.225 8.41667 4.05 8.3 3.8C8.18333 3.55 8.17917 3.29583 8.2875 3.0375C8.39583 2.77917 8.58333 2.60833 8.85 2.525C9.35 2.34167 9.86667 2.20833 10.4 2.125C10.9333 2.04167 11.4667 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM5.5 7C5.08333 7 4.72917 6.85417 4.4375 6.5625C4.14583 6.27083 4 5.91667 4 5.5C4 5.08333 4.14583 4.72917 4.4375 4.4375C4.72917 4.14583 5.08333 4 5.5 4C5.91667 4 6.27083 4.14583 6.5625 4.4375C6.85417 4.72917 7 5.08333 7 5.5C7 5.91667 6.85417 6.27083 6.5625 6.5625C6.27083 6.85417 5.91667 7 5.5 7ZM6 12C6 10.3333 6.58333 8.91667 7.75 7.75C8.91667 6.58333 10.3333 6 12 6C13.6667 6 15.0833 6.58333 16.25 7.75C17.4167 8.91667 18 10.3333 18 12C18 13.6667 17.4167 15.0833 16.25 16.25C15.0833 17.4167 13.6667 18 12 18C10.3333 18 8.91667 17.4167 7.75 16.25C6.58333 15.0833 6 13.6667 6 12Z" }),
      " "
    ]
  }
), Qu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM13 18H20V6H13V18ZM18.25 15C18.4667 15 18.6458 14.9292 18.7875 14.7875C18.9292 14.6458 19 14.4667 19 14.25C19 14.0333 18.9292 13.8542 18.7875 13.7125C18.6458 13.5708 18.4667 13.5 18.25 13.5H14.75C14.5333 13.5 14.3542 13.5708 14.2125 13.7125C14.0708 13.8542 14 14.0333 14 14.25C14 14.4667 14.0708 14.6458 14.2125 14.7875C14.3542 14.9292 14.5333 15 14.75 15H18.25ZM18.25 12.5C18.4667 12.5 18.6458 12.4292 18.7875 12.2875C18.9292 12.1458 19 11.9667 19 11.75C19 11.5333 18.9292 11.3542 18.7875 11.2125C18.6458 11.0708 18.4667 11 18.25 11H14.75C14.5333 11 14.3542 11.0708 14.2125 11.2125C14.0708 11.3542 14 11.5333 14 11.75C14 11.9667 14.0708 12.1458 14.2125 12.2875C14.3542 12.4292 14.5333 12.5 14.75 12.5H18.25ZM18.25 10C18.4667 10 18.6458 9.92917 18.7875 9.7875C18.9292 9.64583 19 9.46667 19 9.25C19 9.03333 18.9292 8.85417 18.7875 8.7125C18.6458 8.57083 18.4667 8.5 18.25 8.5H14.75C14.5333 8.5 14.3542 8.57083 14.2125 8.7125C14.0708 8.85417 14 9.03333 14 9.25C14 9.46667 14.0708 9.64583 14.2125 9.7875C14.3542 9.92917 14.5333 10 14.75 10H18.25Z" }),
      " "
    ]
  }
), e3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M8.20101 12.3166L11.1558 9.36181C11.397 9.1206 11.6784 9 12 9C12.3216 9 12.603 9.1206 12.8442 9.36181L15.799 12.3166C16 12.5176 16.0503 12.7387 15.9497 12.9799C15.8492 13.2211 15.6583 13.3417 15.3769 13.3417L8.62312 13.3417C8.34171 13.3417 8.15075 13.2211 8.05025 12.9799C7.94975 12.7387 8 12.5176 8.20101 12.3166Z" }),
      /* @__PURE__ */ a("path", { d: "M2 13.5C2 12.6716 2.67157 12 3.5 12H20.5C21.3284 12 22 12.6716 22 13.5C22 14.3284 21.3284 15 20.5 15H3.5C2.67157 15 2 14.3284 2 13.5Z" }),
      " "
    ]
  }
), t3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M4.99999 7.84999L4.09999 8.72499C3.91665 8.90832 3.68749 8.99999 3.41249 8.99999C3.13749 8.99999 2.89999 8.89999 2.69999 8.69999C2.51665 8.51665 2.42499 8.28332 2.42499 7.99999C2.42499 7.71665 2.51665 7.48332 2.69999 7.29999L5.29999 4.69999C5.39999 4.59999 5.50832 4.52915 5.62499 4.48749C5.74165 4.44582 5.86665 4.42499 5.99999 4.42499C6.13332 4.42499 6.25832 4.44582 6.37499 4.48749C6.49165 4.52915 6.59999 4.59999 6.69999 4.69999L9.29999 7.29999C9.48332 7.48332 9.57915 7.71249 9.58749 7.98749C9.59582 8.26249 9.49999 8.49999 9.29999 8.69999C9.11665 8.88332 8.88749 8.97915 8.61249 8.98749C8.33749 8.99582 8.09999 8.90832 7.89999 8.72499L6.99999 7.84999V16.15L7.89999 15.275C8.08332 15.0917 8.31249 15 8.58749 15C8.86249 15 9.09999 15.1 9.29999 15.3C9.48332 15.4833 9.57499 15.7167 9.57499 16C9.57499 16.2833 9.48332 16.5167 9.29999 16.7L6.69999 19.3C6.59999 19.4 6.49165 19.4708 6.37499 19.5125C6.25832 19.5542 6.13332 19.575 5.99999 19.575C5.86665 19.575 5.74165 19.5542 5.62499 19.5125C5.50832 19.4708 5.39999 19.4 5.29999 19.3L2.69999 16.7C2.51665 16.5167 2.42082 16.2875 2.41249 16.0125C2.40415 15.7375 2.49999 15.5 2.69999 15.3C2.88332 15.1167 3.11249 15.0208 3.38749 15.0125C3.66249 15.0042 3.89999 15.0917 4.09999 15.275L4.99999 16.15V7.84999ZM13 19C12.7167 19 12.4792 18.9042 12.2875 18.7125C12.0958 18.5208 12 18.2833 12 18C12 17.7167 12.0958 17.4792 12.2875 17.2875C12.4792 17.0958 12.7167 17 13 17H21C21.2833 17 21.5208 17.0958 21.7125 17.2875C21.9042 17.4792 22 17.7167 22 18C22 18.2833 21.9042 18.5208 21.7125 18.7125C21.5208 18.9042 21.2833 19 21 19H13ZM13 13C12.7167 13 12.4792 12.9042 12.2875 12.7125C12.0958 12.5208 12 12.2833 12 12C12 11.7167 12.0958 11.4792 12.2875 11.2875C12.4792 11.0958 12.7167 11 13 11H21C21.2833 11 21.5208 11.0958 21.7125 11.2875C21.9042 11.4792 22 11.7167 22 12C22 12.2833 21.9042 12.5208 21.7125 12.7125C21.5208 12.9042 21.2833 13 21 13H13ZM13 6.99999C12.7167 6.99999 12.4792 6.90415 12.2875 6.71249C12.0958 6.52082 12 6.28332 12 5.99999C12 5.71665 12.0958 5.47915 12.2875 5.28749C12.4792 5.09582 12.7167 4.99999 13 4.99999H21C21.2833 4.99999 21.5208 5.09582 21.7125 5.28749C21.9042 5.47915 22 5.71665 22 5.99999C22 6.28332 21.9042 6.52082 21.7125 6.71249C21.5208 6.90415 21.2833 6.99999 21 6.99999H13Z" })
    ]
  }
), Jn = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M10.6 13.8L8.45 11.65C8.26667 11.4667 8.03333 11.375 7.75 11.375C7.46667 11.375 7.23333 11.4667 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.1 16.1 10.3333 16.2 10.6 16.2C10.8667 16.2 11.1 16.1 11.3 15.9L16.95 10.25C17.1333 10.0667 17.225 9.83333 17.225 9.55C17.225 9.26667 17.1333 9.03333 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z" }),
      " "
    ]
  }
), Rr = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M18.3 5.70998C18.2075 5.61727 18.0976 5.54372 17.9766 5.49354C17.8557 5.44336 17.726 5.41753 17.595 5.41753C17.464 5.41753 17.3343 5.44336 17.2134 5.49354C17.0924 5.54372 16.9825 5.61727 16.89 5.70998L12 10.59L7.11 5.69998C7.01749 5.60727 6.9076 5.53372 6.78663 5.48354C6.66565 5.43336 6.53597 5.40753 6.405 5.40753C6.27403 5.40753 6.14435 5.43336 6.02338 5.48354C5.9024 5.53372 5.79251 5.60727 5.7 5.69998C5.31 6.08998 5.31 6.71998 5.7 7.10998L10.59 12L5.7 16.89C5.31 17.28 5.31 17.91 5.7 18.3C6.09 18.69 6.72 18.69 7.11 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10998C18.68 6.72998 18.68 6.08998 18.3 5.70998Z" }),
      " "
    ]
  }
), r3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M12 21C9.9 21 8.04167 20.3625 6.425 19.0875C4.80833 17.8125 3.75833 16.1833 3.275 14.2C3.20833 13.95 3.25833 13.7208 3.425 13.5125C3.59167 13.3042 3.81667 13.1833 4.1 13.15C4.36667 13.1167 4.60833 13.1667 4.825 13.3C5.04167 13.4333 5.19167 13.6333 5.275 13.9C5.675 15.4 6.5 16.625 7.75 17.575C9 18.525 10.4167 19 12 19C13.95 19 15.6042 18.3208 16.9625 16.9625C18.3208 15.6042 19 13.95 19 12C19 10.05 18.3208 8.39583 16.9625 7.0375C15.6042 5.67917 13.95 5 12 5C10.85 5 9.775 5.26667 8.775 5.8C7.775 6.33333 6.93333 7.06667 6.25 8H8C8.28333 8 8.52083 8.09583 8.7125 8.2875C8.90417 8.47917 9 8.71667 9 9C9 9.28333 8.90417 9.52083 8.7125 9.7125C8.52083 9.90417 8.28333 10 8 10H4C3.71667 10 3.47917 9.90417 3.2875 9.7125C3.09583 9.52083 3 9.28333 3 9V5C3 4.71667 3.09583 4.47917 3.2875 4.2875C3.47917 4.09583 3.71667 4 4 4C4.28333 4 4.52083 4.09583 4.7125 4.2875C4.90417 4.47917 5 4.71667 5 5V6.35C5.85 5.28333 6.8875 4.45833 8.1125 3.875C9.3375 3.29167 10.6333 3 12 3C13.25 3 14.4208 3.2375 15.5125 3.7125C16.6042 4.1875 17.5542 4.82917 18.3625 5.6375C19.1708 6.44583 19.8125 7.39583 20.2875 8.4875C20.7625 9.57917 21 10.75 21 12C21 13.25 20.7625 14.4208 20.2875 15.5125C19.8125 16.6042 19.1708 17.5542 18.3625 18.3625C17.5542 19.1708 16.6042 19.8125 15.5125 20.2875C14.4208 20.7625 13.25 21 12 21Z" }),
      " "
    ]
  }
), n3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M12 5C11.7167 5 11.4792 4.90417 11.2875 4.7125C11.0958 4.52083 11 4.28333 11 4V2C11 1.71667 11.0958 1.47917 11.2875 1.2875C11.4792 1.09583 11.7167 1 12 1C12.2833 1 12.5208 1.09583 12.7125 1.2875C12.9042 1.47917 13 1.71667 13 2V4C13 4.28333 12.9042 4.52083 12.7125 4.7125C12.5208 4.90417 12.2833 5 12 5ZM16.95 7.05C16.7667 6.86667 16.675 6.6375 16.675 6.3625C16.675 6.0875 16.7667 5.85 16.95 5.65L18.35 4.225C18.55 4.025 18.7875 3.925 19.0625 3.925C19.3375 3.925 19.575 4.025 19.775 4.225C19.9583 4.40833 20.05 4.64167 20.05 4.925C20.05 5.20833 19.9583 5.44167 19.775 5.625L18.35 7.05C18.1667 7.23333 17.9333 7.325 17.65 7.325C17.3667 7.325 17.1333 7.23333 16.95 7.05ZM20 13C19.7167 13 19.4792 12.9042 19.2875 12.7125C19.0958 12.5208 19 12.2833 19 12C19 11.7167 19.0958 11.4792 19.2875 11.2875C19.4792 11.0958 19.7167 11 20 11H22C22.2833 11 22.5208 11.0958 22.7125 11.2875C22.9042 11.4792 23 11.7167 23 12C23 12.2833 22.9042 12.5208 22.7125 12.7125C22.5208 12.9042 22.2833 13 22 13H20ZM12 23C11.7167 23 11.4792 22.9042 11.2875 22.7125C11.0958 22.5208 11 22.2833 11 22V20C11 19.7167 11.0958 19.4792 11.2875 19.2875C11.4792 19.0958 11.7167 19 12 19C12.2833 19 12.5208 19.0958 12.7125 19.2875C12.9042 19.4792 13 19.7167 13 20V22C13 22.2833 12.9042 22.5208 12.7125 22.7125C12.5208 22.9042 12.2833 23 12 23ZM5.65 7.05L4.225 5.65C4.025 5.45 3.925 5.20833 3.925 4.925C3.925 4.64167 4.025 4.40833 4.225 4.225C4.40833 4.04167 4.64167 3.95 4.925 3.95C5.20833 3.95 5.44167 4.04167 5.625 4.225L7.05 5.65C7.23333 5.83333 7.325 6.06667 7.325 6.35C7.325 6.63333 7.23333 6.86667 7.05 7.05C6.85 7.23333 6.61667 7.325 6.35 7.325C6.08333 7.325 5.85 7.23333 5.65 7.05ZM18.35 19.775L16.95 18.35C16.7667 18.15 16.675 17.9125 16.675 17.6375C16.675 17.3625 16.7667 17.1333 16.95 16.95C17.1333 16.7667 17.3625 16.675 17.6375 16.675C17.9125 16.675 18.15 16.7667 18.35 16.95L19.775 18.35C19.975 18.5333 20.0708 18.7667 20.0625 19.05C20.0542 19.3333 19.9583 19.575 19.775 19.775C19.575 19.975 19.3333 20.075 19.05 20.075C18.7667 20.075 18.5333 19.975 18.35 19.775ZM2 13C1.71667 13 1.47917 12.9042 1.2875 12.7125C1.09583 12.5208 1 12.2833 1 12C1 11.7167 1.09583 11.4792 1.2875 11.2875C1.47917 11.0958 1.71667 11 2 11H4C4.28333 11 4.52083 11.0958 4.7125 11.2875C4.90417 11.4792 5 11.7167 5 12C5 12.2833 4.90417 12.5208 4.7125 12.7125C4.52083 12.9042 4.28333 13 4 13H2ZM4.225 19.775C4.04167 19.5917 3.95 19.3583 3.95 19.075C3.95 18.7917 4.04167 18.5583 4.225 18.375L5.65 16.95C5.83333 16.7667 6.0625 16.675 6.3375 16.675C6.6125 16.675 6.85 16.7667 7.05 16.95C7.25 17.15 7.35 17.3875 7.35 17.6625C7.35 17.9375 7.25 18.175 7.05 18.375L5.65 19.775C5.45 19.975 5.20833 20.075 4.925 20.075C4.64167 20.075 4.40833 19.975 4.225 19.775ZM12 18C10.3333 18 8.91667 17.4167 7.75 16.25C6.58333 15.0833 6 13.6667 6 12C6 10.3333 6.58333 8.91667 7.75 7.75C8.91667 6.58333 10.3333 6 12 6C13.6667 6 15.0833 6.58333 16.25 7.75C17.4167 8.91667 18 10.3333 18 12C18 13.6667 17.4167 15.0833 16.25 16.25C15.0833 17.4167 13.6667 18 12 18ZM12 16C13.1 16 14.0417 15.6083 14.825 14.825C15.6083 14.0417 16 13.1 16 12C16 10.9 15.6083 9.95833 14.825 9.175C14.0417 8.39167 13.1 8 12 8C10.9 8 9.95833 8.39167 9.175 9.175C8.39167 9.95833 8 10.9 8 12C8 13.1 8.39167 14.0417 9.175 14.825C9.95833 15.6083 10.9 16 12 16Z" }),
      " "
    ]
  }
), i3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M12 21C9.48333 21 7.35417 20.1292 5.6125 18.3875C3.87083 16.6458 3 14.5167 3 12C3 9.70002 3.75 7.70418 5.25 6.01252C6.75 4.32085 8.66667 3.33335 11 3.05002C11.2167 3.01668 11.4083 3.04585 11.575 3.13752C11.7417 3.22918 11.875 3.35002 11.975 3.50002C12.075 3.65002 12.1292 3.82502 12.1375 4.02502C12.1458 4.22502 12.0833 4.41668 11.95 4.60002C11.6667 5.03335 11.4542 5.49168 11.3125 5.97502C11.1708 6.45835 11.1 6.96668 11.1 7.50002C11.1 9.00002 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.0167 12.9 17.5292 12.825 18.0375 12.675C18.5458 12.525 19 12.3167 19.4 12.05C19.5833 11.9333 19.7708 11.8792 19.9625 11.8875C20.1542 11.8958 20.325 11.9417 20.475 12.025C20.6417 12.1083 20.7708 12.2333 20.8625 12.4C20.9542 12.5667 20.9833 12.7667 20.95 13C20.7167 15.3 19.7375 17.2083 18.0125 18.725C16.2875 20.2417 14.2833 21 12 21ZM12 19C13.4667 19 14.7833 18.5958 15.95 17.7875C17.1167 16.9792 17.9667 15.925 18.5 14.625C18.1667 14.7083 17.8333 14.775 17.5 14.825C17.1667 14.875 16.8333 14.9 16.5 14.9C14.45 14.9 12.7042 14.1792 11.2625 12.7375C9.82083 11.2958 9.1 9.55002 9.1 7.50002C9.1 7.16668 9.125 6.83335 9.175 6.50002C9.225 6.16668 9.29167 5.83335 9.375 5.50002C8.075 6.03335 7.02083 6.88335 6.2125 8.05002C5.40417 9.21668 5 10.5333 5 12C5 13.9333 5.68333 15.5833 7.05 16.95C8.41667 18.3167 10.0667 19 12 19Z" }),
      " "
    ]
  }
), o3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M11 18.15V15C11 14.7167 11.0958 14.4792 11.2875 14.2875C11.4792 14.0959 11.7167 14 12 14C12.2833 14 12.5208 14.0959 12.7125 14.2875C12.9042 14.4792 13 14.7167 13 15V18.125L14.075 17.025C14.275 16.825 14.5167 16.725 14.8 16.725C15.0833 16.725 15.325 16.825 15.525 17.025C15.725 17.225 15.825 17.4667 15.825 17.75C15.825 18.0334 15.725 18.275 15.525 18.475L12.7 21.3C12.6 21.4 12.4917 21.4709 12.375 21.5125C12.2583 21.5542 12.1333 21.575 12 21.575C11.8667 21.575 11.7417 21.5542 11.625 21.5125C11.5083 21.4709 11.4 21.4 11.3 21.3L8.44999 18.45C8.24999 18.25 8.15415 18.0125 8.16249 17.7375C8.17082 17.4625 8.27499 17.225 8.47499 17.025C8.67499 16.825 8.91249 16.725 9.18749 16.725C9.46249 16.725 9.69999 16.825 9.89999 17.025L11 18.15ZM5.87499 13L6.97499 14.075C7.17499 14.275 7.27499 14.5167 7.27499 14.8C7.27499 15.0834 7.17499 15.325 6.97499 15.525C6.77499 15.725 6.53332 15.825 6.24999 15.825C5.96665 15.825 5.72499 15.725 5.52499 15.525L2.69999 12.7C2.59999 12.6 2.52915 12.4917 2.48749 12.375C2.44582 12.2584 2.42499 12.1334 2.42499 12C2.42499 11.8667 2.44582 11.7417 2.48749 11.625C2.52915 11.5084 2.59999 11.4 2.69999 11.3L5.52499 8.47505C5.72499 8.27505 5.96249 8.17505 6.23749 8.17505C6.51249 8.17505 6.74999 8.27505 6.94999 8.47505C7.14999 8.67505 7.24999 8.91255 7.24999 9.18755C7.24999 9.46255 7.14999 9.70005 6.94999 9.90005L5.84999 11H8.99999C9.28332 11 9.52082 11.0959 9.71249 11.2875C9.90415 11.4792 9.99999 11.7167 9.99999 12C9.99999 12.2834 9.90415 12.5209 9.71249 12.7125C9.52082 12.9042 9.28332 13 8.99999 13H5.87499ZM18.15 13H15C14.7167 13 14.4792 12.9042 14.2875 12.7125C14.0958 12.5209 14 12.2834 14 12C14 11.7167 14.0958 11.4792 14.2875 11.2875C14.4792 11.0959 14.7167 11 15 11H18.125L17.025 9.92505C16.825 9.72505 16.725 9.48338 16.725 9.20005C16.725 8.91672 16.825 8.67505 17.025 8.47505C17.225 8.27505 17.4667 8.17505 17.75 8.17505C18.0333 8.17505 18.275 8.27505 18.475 8.47505L21.3 11.3C21.4 11.4 21.4708 11.5084 21.5125 11.625C21.5542 11.7417 21.575 11.8667 21.575 12C21.575 12.1334 21.5542 12.2584 21.5125 12.375C21.4708 12.4917 21.4 12.6 21.3 12.7L18.45 15.55C18.25 15.75 18.0167 15.8459 17.75 15.8375C17.4833 15.8292 17.25 15.725 17.05 15.525C16.85 15.325 16.75 15.0875 16.75 14.8125C16.75 14.5375 16.85 14.3 17.05 14.1L18.15 13ZM11 5.85005L9.87499 6.97505C9.67499 7.17505 9.44165 7.27505 9.17499 7.27505C8.90832 7.27505 8.67499 7.17505 8.47499 6.97505C8.27499 6.77505 8.17499 6.53755 8.17499 6.26255C8.17499 5.98755 8.27499 5.75005 8.47499 5.55005L11.3 2.70005C11.4 2.60005 11.5083 2.52922 11.625 2.48755C11.7417 2.44588 11.8667 2.42505 12 2.42505C12.1333 2.42505 12.2583 2.44588 12.375 2.48755C12.4917 2.52922 12.6 2.60005 12.7 2.70005L15.55 5.55005C15.75 5.75005 15.85 5.98338 15.85 6.25005C15.85 6.51672 15.75 6.75005 15.55 6.95005C15.35 7.15005 15.1125 7.25005 14.8375 7.25005C14.5625 7.25005 14.325 7.15005 14.125 6.95005L13 5.85005V9.00005C13 9.28338 12.9042 9.52088 12.7125 9.71255C12.5208 9.90422 12.2833 10 12 10C11.7167 10 11.4792 9.90422 11.2875 9.71255C11.0958 9.52088 11 9.28338 11 9.00005V5.85005Z" }),
      " "
    ]
  }
), Hs = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M23 9.00002C23 10.15 22.7958 11.2458 22.3875 12.2875C21.9792 13.3292 21.425 14.275 20.725 15.125C20.525 15.3583 20.275 15.4833 19.975 15.5C19.675 15.5167 19.4083 15.4083 19.175 15.175C18.9583 14.9583 18.8583 14.7 18.875 14.4C18.8917 14.1 18.9917 13.825 19.175 13.575C19.675 12.9417 20.0625 12.2333 20.3375 11.45C20.6125 10.6667 20.75 9.85002 20.75 9.00002C20.75 8.15002 20.6125 7.34168 20.3375 6.57502C20.0625 5.80835 19.675 5.10835 19.175 4.47502C18.975 4.22502 18.8708 3.95002 18.8625 3.65002C18.8542 3.35002 18.9583 3.08335 19.175 2.85002C19.3917 2.61668 19.6542 2.50418 19.9625 2.51252C20.2708 2.52085 20.525 2.64168 20.725 2.87502C21.425 3.72502 21.9792 4.67085 22.3875 5.71252C22.7958 6.75418 23 7.85002 23 9.00002ZM18.45 9.00002C18.45 9.53335 18.3667 10.0458 18.2 10.5375C18.0333 11.0292 17.8 11.4833 17.5 11.9C17.3167 12.15 17.0708 12.2792 16.7625 12.2875C16.4542 12.2958 16.1833 12.1833 15.95 11.95C15.7333 11.7333 15.6208 11.4708 15.6125 11.1625C15.6042 10.8542 15.675 10.5583 15.825 10.275C15.925 10.0917 16.0042 9.89168 16.0625 9.67502C16.1208 9.45835 16.15 9.23335 16.15 9.00002C16.15 8.76668 16.1208 8.54168 16.0625 8.32502C16.0042 8.10835 15.925 7.90002 15.825 7.70002C15.675 7.41668 15.6042 7.12502 15.6125 6.82502C15.6208 6.52502 15.7333 6.26668 15.95 6.05002C16.1833 5.81668 16.4542 5.70418 16.7625 5.71252C17.0708 5.72085 17.3167 5.85002 17.5 6.10002C17.8 6.51668 18.0333 6.97085 18.2 7.46252C18.3667 7.95418 18.45 8.46668 18.45 9.00002ZM9 13C7.9 13 6.95833 12.6083 6.175 11.825C5.39167 11.0417 5 10.1 5 9.00002C5 7.90002 5.39167 6.95835 6.175 6.17502C6.95833 5.39168 7.9 5.00002 9 5.00002C10.1 5.00002 11.0417 5.39168 11.825 6.17502C12.6083 6.95835 13 7.90002 13 9.00002C13 10.1 12.6083 11.0417 11.825 11.825C11.0417 12.6083 10.1 13 9 13ZM1 19V18.2C1 17.65 1.14167 17.1333 1.425 16.65C1.70833 16.1667 2.1 15.8 2.6 15.55C3.45 15.1167 4.40833 14.75 5.475 14.45C6.54167 14.15 7.71667 14 9 14C10.2833 14 11.4583 14.15 12.525 14.45C13.5917 14.75 14.55 15.1167 15.4 15.55C15.9 15.8 16.2917 16.1667 16.575 16.65C16.8583 17.1333 17 17.65 17 18.2V19C17 19.55 16.8042 20.0208 16.4125 20.4125C16.0208 20.8042 15.55 21 15 21H3C2.45 21 1.97917 20.8042 1.5875 20.4125C1.19583 20.0208 1 19.55 1 19Z" }),
      " "
    ]
  }
), Bs = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M7 17C5.61667 17 4.4375 16.5125 3.4625 15.5375C2.4875 14.5625 2 13.3833 2 12C2 10.6167 2.4875 9.4375 3.4625 8.4625C4.4375 7.4875 5.61667 7 7 7H10C10.2833 7 10.5208 7.09583 10.7125 7.2875C10.9042 7.47917 11 7.71667 11 8C11 8.28333 10.9042 8.52083 10.7125 8.7125C10.5208 8.90417 10.2833 9 10 9H7C6.16667 9 5.45833 9.29167 4.875 9.875C4.29167 10.4583 4 11.1667 4 12C4 12.8333 4.29167 13.5417 4.875 14.125C5.45833 14.7083 6.16667 15 7 15H10C10.2833 15 10.5208 15.0958 10.7125 15.2875C10.9042 15.4792 11 15.7167 11 16C11 16.2833 10.9042 16.5208 10.7125 16.7125C10.5208 16.9042 10.2833 17 10 17H7ZM9 13C8.71667 13 8.47917 12.9042 8.2875 12.7125C8.09583 12.5208 8 12.2833 8 12C8 11.7167 8.09583 11.4792 8.2875 11.2875C8.47917 11.0958 8.71667 11 9 11H15C15.2833 11 15.5208 11.0958 15.7125 11.2875C15.9042 11.4792 16 11.7167 16 12C16 12.2833 15.9042 12.5208 15.7125 12.7125C15.5208 12.9042 15.2833 13 15 13H9ZM14 17C13.7167 17 13.4792 16.9042 13.2875 16.7125C13.0958 16.5208 13 16.2833 13 16C13 15.7167 13.0958 15.4792 13.2875 15.2875C13.4792 15.0958 13.7167 15 14 15H17C17.8333 15 18.5417 14.7083 19.125 14.125C19.7083 13.5417 20 12.8333 20 12C20 11.1667 19.7083 10.4583 19.125 9.875C18.5417 9.29167 17.8333 9 17 9H14C13.7167 9 13.4792 8.90417 13.2875 8.7125C13.0958 8.52083 13 8.28333 13 8C13 7.71667 13.0958 7.47917 13.2875 7.2875C13.4792 7.09583 13.7167 7 14 7H17C18.3833 7 19.5625 7.4875 20.5375 8.4625C21.5125 9.4375 22 10.6167 22 12C22 13.3833 21.5125 14.5625 20.5375 15.5375C19.5625 16.5125 18.3833 17 17 17H14Z" }),
      " "
    ]
  }
), a3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M10.475 22C10.0083 22 9.57082 21.9 9.16249 21.7C8.75416 21.5 8.40832 21.2167 8.12499 20.85L3.09999 14.475C2.96666 14.325 2.90832 14.1458 2.92499 13.9375C2.94166 13.7292 3.01666 13.5583 3.14999 13.425C3.48332 13.075 3.88332 12.8667 4.34999 12.8C4.81666 12.7333 5.24999 12.825 5.64999 13.075L7.49999 14.2V6C7.49999 5.71667 7.59582 5.47917 7.78749 5.2875C7.97916 5.09583 8.21666 5 8.49999 5C8.78332 5 9.02499 5.09583 9.22499 5.2875C9.42499 5.47917 9.52499 5.71667 9.52499 6V11H17C17.8333 11 18.5417 11.2917 19.125 11.875C19.7083 12.4583 20 13.1667 20 14V18C20 19.1 19.6083 20.0417 18.825 20.825C18.0417 21.6083 17.1 22 16 22H10.475ZM11.975 9C11.6917 9 11.4542 8.90417 11.2625 8.7125C11.0708 8.52083 10.975 8.28333 10.975 8C10.975 7.96667 11.0167 7.8 11.1 7.5C11.2333 7.26667 11.3333 7.02917 11.4 6.7875C11.4667 6.54583 11.5 6.28333 11.5 6C11.5 5.16667 11.2083 4.45833 10.625 3.875C10.0417 3.29167 9.33332 3 8.49999 3C7.66666 3 6.95832 3.29167 6.37499 3.875C5.79166 4.45833 5.49999 5.16667 5.49999 6C5.49999 6.28333 5.53332 6.54583 5.59999 6.7875C5.66666 7.02917 5.76666 7.26667 5.89999 7.5C5.94999 7.58333 5.98332 7.66667 5.99999 7.75C6.01666 7.83333 6.02499 7.91667 6.02499 8C6.02499 8.28333 5.93332 8.52083 5.74999 8.7125C5.56666 8.90417 5.33332 9 5.04999 9C4.86666 9 4.69582 8.95 4.53749 8.85C4.37916 8.75 4.25832 8.625 4.17499 8.475C3.95832 8.10833 3.79166 7.71667 3.67499 7.3C3.55832 6.88333 3.49999 6.45 3.49999 6C3.49999 4.61667 3.98749 3.4375 4.96249 2.4625C5.93749 1.4875 7.11666 1 8.49999 1C9.88332 1 11.0625 1.4875 12.0375 2.4625C13.0125 3.4375 13.5 4.61667 13.5 6C13.5 6.45 13.4417 6.88333 13.325 7.3C13.2083 7.71667 13.0417 8.10833 12.825 8.475C12.7417 8.625 12.625 8.75 12.475 8.85C12.325 8.95 12.1583 9 11.975 9Z" }),
      " "
    ]
  }
), Fs = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M13 17.05C13.7333 16.7 14.4708 16.4375 15.2125 16.2625C15.9542 16.0875 16.7167 16 17.5 16C18.1 16 18.6875 16.05 19.2625 16.15C19.8375 16.25 20.4167 16.4 21 16.6V6.7C20.45 6.46667 19.8792 6.29167 19.2875 6.175C18.6958 6.05833 18.1 6 17.5 6C16.7167 6 15.9417 6.1 15.175 6.3C14.4083 6.5 13.6833 6.8 13 7.2V17.05ZM12 19.475C11.7667 19.475 11.5458 19.4458 11.3375 19.3875C11.1292 19.3292 10.9333 19.25 10.75 19.15C10.1 18.7667 9.41667 18.4792 8.7 18.2875C7.98333 18.0958 7.25 18 6.5 18C5.8 18 5.1125 18.0917 4.4375 18.275C3.7625 18.4583 3.11667 18.7167 2.5 19.05C2.15 19.2333 1.8125 19.225 1.4875 19.025C1.1625 18.825 1 18.5333 1 18.15V6.1C1 5.91667 1.04583 5.74167 1.1375 5.575C1.22917 5.40833 1.36667 5.28333 1.55 5.2C2.33333 4.81667 3.1375 4.52083 3.9625 4.3125C4.7875 4.10417 5.63333 4 6.5 4C7.46667 4 8.4125 4.125 9.3375 4.375C10.2625 4.625 11.15 5 12 5.5C12.85 5 13.7375 4.625 14.6625 4.375C15.5875 4.125 16.5333 4 17.5 4C18.3667 4 19.2125 4.10417 20.0375 4.3125C20.8625 4.52083 21.6667 4.81667 22.45 5.2C22.6333 5.28333 22.7708 5.40833 22.8625 5.575C22.9542 5.74167 23 5.91667 23 6.1V18.15C23 18.5333 22.8375 18.825 22.5125 19.025C22.1875 19.225 21.85 19.2333 21.5 19.05C20.8833 18.7167 20.2375 18.4583 19.5625 18.275C18.8875 18.0917 18.2 18 17.5 18C16.75 18 16.0167 18.0958 15.3 18.2875C14.5833 18.4792 13.9 18.7667 13.25 19.15C13.0667 19.25 12.8708 19.3292 12.6625 19.3875C12.4542 19.4458 12.2333 19.475 12 19.475ZM14 8.775C14 8.625 14.0542 8.47083 14.1625 8.3125C14.2708 8.15417 14.3917 8.05 14.525 8C15.0083 7.83333 15.4917 7.70833 15.975 7.625C16.4583 7.54167 16.9667 7.5 17.5 7.5C17.8333 7.5 18.1625 7.52083 18.4875 7.5625C18.8125 7.60417 19.1333 7.65833 19.45 7.725C19.6 7.75833 19.7292 7.84167 19.8375 7.975C19.9458 8.10833 20 8.25833 20 8.425C20 8.70833 19.9083 8.91667 19.725 9.05C19.5417 9.18333 19.3083 9.21667 19.025 9.15C18.7917 9.1 18.5458 9.0625 18.2875 9.0375C18.0292 9.0125 17.7667 9 17.5 9C17.0667 9 16.6417 9.04167 16.225 9.125C15.8083 9.20833 15.4083 9.31667 15.025 9.45C14.725 9.56667 14.4792 9.55833 14.2875 9.425C14.0958 9.29167 14 9.075 14 8.775ZM14 14.275C14 14.125 14.0542 13.9708 14.1625 13.8125C14.2708 13.6542 14.3917 13.55 14.525 13.5C15.0083 13.3333 15.4917 13.2083 15.975 13.125C16.4583 13.0417 16.9667 13 17.5 13C17.8333 13 18.1625 13.0208 18.4875 13.0625C18.8125 13.1042 19.1333 13.1583 19.45 13.225C19.6 13.2583 19.7292 13.3417 19.8375 13.475C19.9458 13.6083 20 13.7583 20 13.925C20 14.2083 19.9083 14.4167 19.725 14.55C19.5417 14.6833 19.3083 14.7167 19.025 14.65C18.7917 14.6 18.5458 14.5625 18.2875 14.5375C18.0292 14.5125 17.7667 14.5 17.5 14.5C17.0667 14.5 16.6417 14.5375 16.225 14.6125C15.8083 14.6875 15.4083 14.7917 15.025 14.925C14.725 15.0417 14.4792 15.0375 14.2875 14.9125C14.0958 14.7875 14 14.575 14 14.275ZM14 11.525C14 11.375 14.0542 11.2208 14.1625 11.0625C14.2708 10.9042 14.3917 10.8 14.525 10.75C15.0083 10.5833 15.4917 10.4583 15.975 10.375C16.4583 10.2917 16.9667 10.25 17.5 10.25C17.8333 10.25 18.1625 10.2708 18.4875 10.3125C18.8125 10.3542 19.1333 10.4083 19.45 10.475C19.6 10.5083 19.7292 10.5917 19.8375 10.725C19.9458 10.8583 20 11.0083 20 11.175C20 11.4583 19.9083 11.6667 19.725 11.8C19.5417 11.9333 19.3083 11.9667 19.025 11.9C18.7917 11.85 18.5458 11.8125 18.2875 11.7875C18.0292 11.7625 17.7667 11.75 17.5 11.75C17.0667 11.75 16.6417 11.7917 16.225 11.875C15.8083 11.9583 15.4083 12.0667 15.025 12.2C14.725 12.3167 14.4792 12.3083 14.2875 12.175C14.0958 12.0417 14 11.825 14 11.525Z" }),
      " "
    ]
  }
), $s = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M7.74687 1.00812C7.66942 1.02044 7.51497 1.11665 7.40368 1.22196C7.20272 1.41219 7.20164 1.41645 7.24371 1.87875C7.26705 2.1347 7.31392 2.69232 7.34776 3.11796C7.61178 6.43593 7.65513 7.42951 7.53904 7.5022C7.34378 7.62448 7.23611 7.43996 5.4151 3.86266C4.79087 2.63635 4.67189 2.50711 4.2859 2.63614C3.67367 2.84085 3.72185 3.15023 4.69994 5.29459C4.82544 5.56968 4.92804 5.80618 4.92804 5.82021C4.92804 5.83432 5.03816 6.08815 5.17297 6.38423C5.90324 7.98987 6.09352 8.6429 5.85782 8.73457C5.69079 8.79947 5.39329 8.63804 5.14872 8.34994C5.02431 8.20336 4.87122 8.02534 4.80861 7.95439C4.7459 7.88354 4.56811 7.66583 4.41348 7.47076C4.25885 7.27569 4.11761 7.10162 4.0996 7.08383C4.0816 7.06614 3.78704 6.71341 3.4451 6.29999C3.10309 5.88657 2.77897 5.53109 2.72474 5.51001C2.41291 5.38882 2 5.62798 2 5.92975C2 6.1932 2.62513 7.25305 3.92633 9.19547C4.74183 10.4127 4.93347 10.851 5.11805 11.9204C5.50893 14.1859 6.04086 15.5747 6.72906 16.1271C7.19756 16.5032 7.21077 16.506 8.31382 16.4582L9.32404 16.4145L10.0917 15.3766C10.5139 14.8057 10.8924 14.2951 10.9331 14.2418C11.2275 13.8553 11.9934 12.4858 11.9934 12.346C11.9934 12.326 11.5954 12.3281 11.1089 12.3505C10.51 12.3781 10.0939 12.3655 9.81996 12.3116C9.34503 12.2179 8.74686 11.9422 8.41869 11.6655C7.90078 11.2289 7.74859 10.454 8.07143 9.89599C8.31256 9.47909 8.64688 9.30024 9.34964 9.21197C9.91759 9.14074 10.5252 8.97299 11.4046 8.64492L11.8661 8.47277V7.71973C11.8661 6.94826 12.0114 4.25775 12.1217 2.98899C12.2083 1.99134 12.2097 2.00218 11.968 1.75726C11.8009 1.58811 11.6985 1.53801 11.5195 1.53801C11.0687 1.53801 11.0441 1.60107 10.5976 3.89255C10.3765 5.02711 10.1557 6.18752 10.1069 6.47123C10.0003 7.09053 9.9166 7.31878 9.77581 7.3735C9.59186 7.44509 9.41968 7.15323 9.33698 6.62999C9.29518 6.36535 9.18624 5.66997 9.09485 5.08477C8.92565 4.00081 8.58735 1.97013 8.51505 1.60372C8.47162 1.38388 8.1867 1.05499 8.00266 1.01237C7.93951 0.99773 7.82441 0.995796 7.74687 1.00812ZM16.2263 7.64538C15.9431 7.71349 15.12 8.01544 14.7447 8.18897C14.5251 8.29054 14.3287 8.37358 14.3083 8.37358C14.288 8.37358 13.7516 8.63383 13.1164 8.952C11.7752 9.62364 10.2221 10.1791 9.68469 10.1793C9.31526 10.1794 8.91769 10.3451 8.88702 10.5115C8.85291 10.6978 9.23971 11.0663 9.62615 11.2154C9.9688 11.3476 10.0583 11.3531 11.2858 11.3164C12.3829 11.2837 12.6156 11.2932 12.7917 11.3779C13.0946 11.5234 13.1779 11.7716 13.0775 12.2305C12.9753 12.6983 12.4059 13.8553 11.947 14.5277C11.6488 14.9647 9.87371 17.3579 8.84259 18.7132C8.47461 19.197 8.45814 19.4434 8.77256 19.762C9.17981 20.1745 9.12724 20.2112 11.3156 17.9827C13.3582 15.9029 13.5287 15.7665 13.6211 16.1396C13.6772 16.3662 13.6901 16.3331 12.782 18.2958C12.6283 18.6278 12.5026 18.9087 12.5026 18.9198C12.5026 18.9309 12.3989 19.167 12.2723 19.4445C11.2318 21.7231 11.1894 21.8762 11.4905 22.2639C11.5982 22.4027 11.6723 22.4313 11.9185 22.4297C12.0822 22.4286 12.2603 22.3923 12.3142 22.349C12.3682 22.3058 12.6808 21.7772 13.009 21.1742C13.584 20.1178 13.9216 19.5059 14.2076 19.0011C15.2641 17.1362 15.2589 17.1438 15.4502 17.1438C15.5724 17.1438 15.5758 17.1739 15.538 17.9338C15.5035 18.6276 15.4165 19.4544 15.1769 21.3677C15.0863 22.09 15.0979 22.6972 15.2049 22.8402C15.3309 23.0086 15.7683 23.0562 15.9687 22.9233C16.1743 22.7867 16.2702 22.4417 16.5086 20.9808C17.0134 17.8841 17.14 17.2951 17.34 17.1118C17.4632 16.9988 17.472 16.9989 17.6007 17.1169C17.6739 17.1841 17.7601 17.2887 17.7921 17.3494C17.8242 17.41 17.9206 18.1358 18.0065 18.9623C18.2479 21.2883 18.2687 21.4088 18.4576 21.5773C18.6664 21.7635 18.8796 21.7613 19.0981 21.571C19.2645 21.426 19.2741 21.3836 19.3292 20.5554C19.3608 20.08 19.3739 19.1397 19.3582 18.4657C19.3278 17.1534 19.3875 16.0546 19.5099 15.6715C19.5515 15.5414 19.7501 15.0432 19.9513 14.5643C20.1526 14.0855 20.4383 13.3165 20.5862 12.8554C21.0422 11.4342 21.0078 10.2932 20.4931 9.76903C20.3838 9.65775 20.0548 9.43637 19.7619 9.27714C19.3877 9.07383 19.0357 8.80332 18.5784 8.36772C18.056 7.87024 17.8702 7.73311 17.6375 7.67371C17.3547 7.60166 16.4811 7.58406 16.2263 7.64538ZM21.1923 9.53069C21.1675 9.60989 21.2138 9.82614 21.3071 10.0665C21.5134 10.5978 21.5604 11.0656 21.4707 11.6947C21.3551 12.5054 21.3599 12.5943 21.5214 12.6176C21.7393 12.649 21.8504 12.3982 21.9315 11.6911C22.0198 10.9209 21.9423 10.334 21.6807 9.79231C21.4926 9.40282 21.2697 9.28347 21.1923 9.53069ZM22.3483 9.75326C22.3295 9.80267 22.372 10.0276 22.4425 10.253C22.6088 10.7841 22.5769 11.6232 22.366 12.2625C22.234 12.6626 22.2301 12.7103 22.3218 12.8033C22.5391 13.0235 22.7617 12.7194 22.9131 11.9954C23.0736 11.2284 23.006 10.2756 22.7576 9.80542C22.6731 9.64546 22.4022 9.6109 22.3483 9.75326ZM4.7516 15.2847C4.6205 15.4175 4.66339 15.6069 4.9389 16.112C5.4065 16.9693 6.53615 17.9508 6.7999 17.7292C6.98675 17.5721 6.91282 17.4272 6.5205 17.1819C6.03028 16.8754 5.59868 16.3776 5.27512 15.7453C5.01716 15.2414 4.898 15.1365 4.7516 15.2847ZM3.84671 15.6918C3.74599 15.8148 3.82653 16.119 4.12023 16.7246C4.52341 17.556 5.39555 18.4088 5.71531 18.2844C5.8846 18.2187 5.84099 17.9585 5.64067 17.8386C5.10936 17.5206 4.59317 16.8063 4.323 16.0153C4.18248 15.6036 4.01319 15.4886 3.84671 15.6918Z" }),
      " "
    ]
  }
), s3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M8.5 22C8.08333 22 7.72917 21.8542 7.4375 21.5625C7.14583 21.2708 7 20.9167 7 20.5V7.5C7 7.08333 7.14583 6.72917 7.4375 6.4375C7.72917 6.14583 8.08333 6 8.5 6C8.91667 6 9.27083 6.14583 9.5625 6.4375C9.85417 6.72917 10 7.08333 10 7.5V20.5C10 20.9167 9.85417 21.2708 9.5625 21.5625C9.27083 21.8542 8.91667 22 8.5 22ZM15.5 16C15.0833 16 14.7292 15.8542 14.4375 15.5625C14.1458 15.2708 14 14.9167 14 14.5V7.5C14 7.08333 14.1458 6.72917 14.4375 6.4375C14.7292 6.14583 15.0833 6 15.5 6C15.9167 6 16.2708 6.14583 16.5625 6.4375C16.8542 6.72917 17 7.08333 17 7.5V14.5C17 14.9167 16.8542 15.2708 16.5625 15.5625C16.2708 15.8542 15.9167 16 15.5 16ZM3 4C2.71667 4 2.47917 3.90417 2.2875 3.7125C2.09583 3.52083 2 3.28333 2 3C2 2.71667 2.09583 2.47917 2.2875 2.2875C2.47917 2.09583 2.71667 2 3 2H21C21.2833 2 21.5208 2.09583 21.7125 2.2875C21.9042 2.47917 22 2.71667 22 3C22 3.28333 21.9042 3.52083 21.7125 3.7125C21.5208 3.90417 21.2833 4 21 4H3Z" }),
      " "
    ]
  }
), l3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M3 22C2.71667 22 2.47917 21.9042 2.2875 21.7125C2.09583 21.5208 2 21.2833 2 21C2 20.7167 2.09583 20.4792 2.2875 20.2875C2.47917 20.0958 2.71667 20 3 20H21C21.2833 20 21.5208 20.0958 21.7125 20.2875C21.9042 20.4792 22 20.7167 22 21C22 21.2833 21.9042 21.5208 21.7125 21.7125C21.5208 21.9042 21.2833 22 21 22H3ZM8.5 18C8.08333 18 7.72917 17.8542 7.4375 17.5625C7.14583 17.2708 7 16.9167 7 16.5V3.5C7 3.08333 7.14583 2.72917 7.4375 2.4375C7.72917 2.14583 8.08333 2 8.5 2C8.91667 2 9.27083 2.14583 9.5625 2.4375C9.85417 2.72917 10 3.08333 10 3.5V16.5C10 16.9167 9.85417 17.2708 9.5625 17.5625C9.27083 17.8542 8.91667 18 8.5 18ZM15.5 18C15.0833 18 14.7292 17.8542 14.4375 17.5625C14.1458 17.2708 14 16.9167 14 16.5V9.5C14 9.08333 14.1458 8.72917 14.4375 8.4375C14.7292 8.14583 15.0833 8 15.5 8C15.9167 8 16.2708 8.14583 16.5625 8.4375C16.8542 8.72917 17 9.08333 17 9.5V16.5C17 16.9167 16.8542 17.2708 16.5625 17.5625C16.2708 17.8542 15.9167 18 15.5 18Z" }),
      " "
    ]
  }
), zs = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M7.85894 17.8215C7.69777 17.8215 7.5603 17.7803 7.44654 17.6979C7.34225 17.6064 7.29011 17.4783 7.29011 17.3135V17.1625C6.68336 17.7208 5.85856 18 4.8157 18C4.39856 18 4.0146 17.9405 3.66382 17.8215C3.32253 17.7117 3.02863 17.5515 2.78214 17.341C2.53565 17.1213 2.3413 16.8604 2.19909 16.5584C2.06636 16.2563 2 15.9176 2 15.5423C2 14.6545 2.3176 13.9954 2.95279 13.5652C3.58798 13.135 4.50759 12.9199 5.71161 12.9199H7.16212C7.20952 12.9199 7.24271 12.9382 7.26167 12.9748C7.28063 13.0114 7.29011 13.0206 7.29011 13.0023C7.29011 12.508 7.13368 12.1236 6.82082 11.849C6.50797 11.5652 5.99602 11.405 5.28499 11.3684C4.93421 11.3501 4.58817 11.3776 4.24687 11.4508C3.91506 11.524 3.59272 11.6247 3.27986 11.7529C3.09974 11.8261 2.93383 11.8307 2.78214 11.7666C2.63993 11.6934 2.56883 11.5561 2.56883 11.3547V11.0801C2.56883 10.8146 2.71104 10.6316 2.99545 10.5309C3.82973 10.2563 4.64031 10.119 5.42719 10.119C7.80679 10.119 8.99659 11.2632 8.99659 13.5515V17.3135C8.99659 17.46 8.94919 17.5835 8.85439 17.6842C8.75958 17.7757 8.62212 17.8215 8.44199 17.8215H7.85894ZM5.6405 14.1831C5.2044 14.1831 4.84888 14.2014 4.57395 14.238C4.3085 14.2746 4.09519 14.3295 3.93402 14.4027C3.78233 14.476 3.6733 14.5675 3.60694 14.6773C3.55006 14.7872 3.51688 14.9153 3.5074 15.0618C3.49792 15.1167 3.49318 15.167 3.49318 15.2128C3.50266 15.2494 3.51688 15.2952 3.53584 15.3501C3.61168 15.5515 3.76337 15.6796 3.9909 15.7346C4.21843 15.7895 4.55973 15.8169 5.01479 15.8169C5.29921 15.8169 5.54096 15.8032 5.74005 15.7757C5.93914 15.7391 6.10031 15.6705 6.22355 15.5698C6.3468 15.46 6.43686 15.3043 6.49375 15.103C6.55063 14.9016 6.57907 14.627 6.57907 14.2792C6.57907 14.2426 6.56959 14.2197 6.55063 14.2105C6.54115 14.1922 6.50797 14.1831 6.45109 14.1831H5.6405Z" }),
      /* @__PURE__ */ a("path", { d: "M19.7531 17.8078C19.592 17.8078 19.4498 17.7712 19.3265 17.6979C19.2127 17.6156 19.1322 17.492 19.0848 17.3272L18.7861 16.0778C18.7672 15.9954 18.7435 15.9451 18.715 15.9268C18.6866 15.8993 18.6297 15.8856 18.5444 15.8856H14.1075C14.0032 15.8856 13.9369 15.8993 13.9084 15.9268C13.88 15.9451 13.861 15.9771 13.8515 16.0229L13.6098 17.3272C13.5813 17.5011 13.5007 17.6247 13.368 17.6979C13.2448 17.7712 13.1026 17.8078 12.9414 17.8078H11.2349C11.0737 17.8078 10.9315 17.7712 10.8083 17.6979C10.6945 17.6156 10.6376 17.4966 10.6376 17.341C10.6376 17.2586 10.6566 17.1762 10.6945 17.0938L15.2309 6.4119C15.3447 6.1373 15.5675 6 15.8993 6H16.7526C17.0844 6 17.3072 6.1373 17.4209 6.4119L21.9431 17.0938C21.981 17.1762 22 17.2586 22 17.341C22 17.4966 21.9384 17.6156 21.8151 17.6979C21.7014 17.7712 21.5686 17.8078 21.417 17.8078H19.7531ZM16.3259 9.14416L14.7332 13.5789C14.7237 13.5881 14.719 13.6156 14.719 13.6613C14.719 13.7071 14.7711 13.73 14.8754 13.73H17.7764C17.8523 13.73 17.895 13.7208 17.9044 13.7025C17.9234 13.6842 17.9329 13.6705 17.9329 13.6613C17.9329 13.6064 17.9281 13.5744 17.9187 13.5652L16.3259 9.14416Z" }),
      " "
    ]
  }
), c3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M16.775 19.575C16.5917 19.6916 16.4083 19.8 16.225 19.9C16.0417 20 15.85 20.0916 15.65 20.175C15.4 20.2916 15.1458 20.2916 14.8875 20.175C14.6292 20.0583 14.45 19.8666 14.35 19.6C14.25 19.35 14.2625 19.1041 14.3875 18.8625C14.5125 18.6208 14.7 18.4416 14.95 18.325C15.0167 18.2916 15.0792 18.2583 15.1375 18.225C15.1958 18.1916 15.2583 18.1583 15.325 18.125L12 14.8V17.575C12 18.025 11.7958 18.3375 11.3875 18.5125C10.9792 18.6875 10.6167 18.6166 10.3 18.3L7 15H4C3.71666 15 3.47916 14.9041 3.2875 14.7125C3.09583 14.5208 3 14.2833 3 14V9.99998C3 9.71664 3.09583 9.47914 3.2875 9.28748C3.47916 9.09581 3.71666 8.99998 4 8.99998H6.2L2.1 4.89998C1.91666 4.71664 1.825 4.48331 1.825 4.19998C1.825 3.91664 1.91666 3.68331 2.1 3.49998C2.28333 3.31664 2.51666 3.22498 2.8 3.22498C3.08333 3.22498 3.31666 3.31664 3.5 3.49998L20.5 20.5C20.6833 20.6833 20.775 20.9166 20.775 21.2C20.775 21.4833 20.6833 21.7166 20.5 21.9C20.3167 22.0833 20.0833 22.175 19.8 22.175C19.5167 22.175 19.2833 22.0833 19.1 21.9L16.775 19.575ZM19 11.975C19 10.5916 18.6333 9.32914 17.9 8.18748C17.1667 7.04581 16.1833 6.19164 14.95 5.62498C14.7 5.50831 14.5167 5.32914 14.4 5.08748C14.2833 4.84581 14.2667 4.59998 14.35 4.34998C14.45 4.08331 14.6292 3.89164 14.8875 3.77498C15.1458 3.65831 15.4083 3.65831 15.675 3.77498C17.2917 4.49164 18.5833 5.58331 19.55 7.04998C20.5167 8.51664 21 10.1583 21 11.975C21 12.525 20.95 13.0708 20.85 13.6125C20.75 14.1541 20.6083 14.675 20.425 15.175C20.2917 15.5416 20.0875 15.7708 19.8125 15.8625C19.5375 15.9541 19.2833 15.9583 19.05 15.875C18.8167 15.7916 18.6292 15.6416 18.4875 15.425C18.3458 15.2083 18.3417 14.9583 18.475 14.675C18.6583 14.2416 18.7917 13.8041 18.875 13.3625C18.9583 12.9208 19 12.4583 19 11.975ZM14.775 8.42498C15.325 8.77498 15.75 9.29998 16.05 9.99998C16.35 10.7 16.5 11.3666 16.5 12V12.25C16.5 12.3333 16.4917 12.4166 16.475 12.5C16.4417 12.7166 16.325 12.8583 16.125 12.925C15.925 12.9916 15.7417 12.9416 15.575 12.775L14.3 11.5C14.2 11.4 14.125 11.2875 14.075 11.1625C14.025 11.0375 14 10.9083 14 10.775V8.84998C14 8.64998 14.0875 8.50414 14.2625 8.41248C14.4375 8.32081 14.6083 8.32498 14.775 8.42498ZM9.75 6.94998C9.65 6.84998 9.6 6.73331 9.6 6.59998C9.6 6.46664 9.65 6.34998 9.75 6.24998L10.3 5.69998C10.6167 5.38331 10.9792 5.31248 11.3875 5.48748C11.7958 5.66248 12 5.97498 12 6.42498V7.99998C12 8.23331 11.9 8.39164 11.7 8.47498C11.5 8.55831 11.3167 8.51664 11.15 8.34998L9.75 6.94998Z" }),
      " "
    ]
  }
), u3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M12 10.8L8.1 14.7C7.91667 14.8834 7.68334 14.975 7.4 14.975C7.11667 14.975 6.88334 14.8834 6.7 14.7C6.51667 14.5167 6.425 14.2834 6.425 14C6.425 13.7167 6.51667 13.4834 6.7 13.3L11.3 8.70002C11.5 8.50002 11.7333 8.40002 12 8.40002C12.2667 8.40002 12.5 8.50002 12.7 8.70002L17.3 13.3C17.4833 13.4834 17.575 13.7167 17.575 14C17.575 14.2834 17.4833 14.5167 17.3 14.7C17.1167 14.8834 16.8833 14.975 16.6 14.975C16.3167 14.975 16.0833 14.8834 15.9 14.7L12 10.8Z" }),
      " "
    ]
  }
), d3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M12 4.00305C11.9087 4.00102 11.817 4 11.725 4C9.49167 4 7.45417 4.6 5.6125 5.8C3.77083 7 2.31667 8.58333 1.25 10.55C1.16667 10.7 1.10417 10.8542 1.0625 11.0125C1.02083 11.1708 1 11.3333 1 11.5C1 11.6667 1.02083 11.8292 1.0625 11.9875C1.10417 12.1458 1.16667 12.3 1.25 12.45C2.31667 14.4167 3.77083 16 5.6125 17.2C7.45417 18.4 9.49167 19 11.725 19C11.817 19 11.9087 18.999 12 18.9969V15.9928C11.9094 15.9976 11.8177 16 11.725 16C10.475 16 9.4125 15.5625 8.5375 14.6875C7.6625 13.8125 7.225 12.75 7.225 11.5C7.225 10.25 7.6625 9.1875 8.5375 8.3125C9.4125 7.4375 10.475 7 11.725 7C11.8177 7 11.9094 7.00241 12 7.00722V4.00305Z" }),
      /* @__PURE__ */ a("path", { d: "M12 8.81222C11.9101 8.80407 11.8184 8.8 11.725 8.8C10.975 8.8 10.3375 9.0625 9.8125 9.5875C9.2875 10.1125 9.025 10.75 9.025 11.5C9.025 12.25 9.2875 12.8875 9.8125 13.4125C10.3375 13.9375 10.975 14.2 11.725 14.2C11.8184 14.2 11.9101 14.1959 12 14.1878V8.81222Z" }),
      /* @__PURE__ */ a("path", { d: "M12 18.9939C14.1259 18.9465 16.0717 18.3475 17.8375 17.1969C19.6792 15.9969 21.1333 14.4136 22.2 12.4469C22.2833 12.2969 22.3458 12.1428 22.3875 11.9844C22.4292 11.8261 22.45 11.6636 22.45 11.4969C22.45 11.3303 22.4292 11.1678 22.3875 11.0094C22.3458 10.8511 22.2833 10.6969 22.2 10.5469C21.1333 8.58028 19.6792 6.99695 17.8375 5.79695C16.0717 4.64638 14.1259 4.0474 12 4V6.0005C13.777 6.04659 15.4145 6.54124 16.9125 7.48445C18.4875 8.47611 19.6917 9.81361 20.525 11.4969C19.6917 13.1803 18.4875 14.5178 16.9125 15.5094C15.4145 16.4527 13.777 16.9473 12 16.9934V18.9939Z" }),
      /* @__PURE__ */ a("path", { d: "M12 15.9897C13.1316 15.9297 14.1024 15.4946 14.9125 14.6844C15.7875 13.8094 16.225 12.7469 16.225 11.4969C16.225 10.2469 15.7875 9.18445 14.9125 8.30945C14.1024 7.49933 13.1316 7.06424 12 7.00416V8.80916C12.6321 8.86641 13.1779 9.12483 13.6375 9.58445C14.1625 10.1094 14.425 10.7469 14.425 11.4969C14.425 12.2469 14.1625 12.8844 13.6375 13.4094C13.1779 13.8691 12.6321 14.1275 12 14.1847V15.9897Z" }),
      " "
    ]
  }
), p3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M12 22C10.6333 22 9.34167 21.7375 8.125 21.2125C6.90833 20.6875 5.84583 19.9708 4.9375 19.0625C4.02917 18.1542 3.3125 17.0917 2.7875 15.875C2.2625 14.6583 2 13.3667 2 12C2 10.6167 2.27083 9.31667 2.8125 8.1C3.35417 6.88333 4.0875 5.825 5.0125 4.925C5.9375 4.025 7.01667 3.3125 8.25 2.7875C9.48333 2.2625 10.8 2 12.2 2C13.5333 2 14.7917 2.22917 15.975 2.6875C17.1583 3.14583 18.1958 3.77917 19.0875 4.5875C19.9792 5.39583 20.6875 6.35417 21.2125 7.4625C21.7375 8.57083 22 9.76667 22 11.05C22 12.9667 21.4167 14.4375 20.25 15.4625C19.0833 16.4875 17.6667 17 16 17H14.15C14 17 13.8958 17.0417 13.8375 17.125C13.7792 17.2083 13.75 17.3 13.75 17.4C13.75 17.6 13.875 17.8875 14.125 18.2625C14.375 18.6375 14.5 19.0667 14.5 19.55C14.5 20.3833 14.2708 21 13.8125 21.4C13.3542 21.8 12.75 22 12 22ZM6.5 13C6.93333 13 7.29167 12.8583 7.575 12.575C7.85833 12.2917 8 11.9333 8 11.5C8 11.0667 7.85833 10.7083 7.575 10.425C7.29167 10.1417 6.93333 10 6.5 10C6.06667 10 5.70833 10.1417 5.425 10.425C5.14167 10.7083 5 11.0667 5 11.5C5 11.9333 5.14167 12.2917 5.425 12.575C5.70833 12.8583 6.06667 13 6.5 13ZM9.5 9C9.93333 9 10.2917 8.85833 10.575 8.575C10.8583 8.29167 11 7.93333 11 7.5C11 7.06667 10.8583 6.70833 10.575 6.425C10.2917 6.14167 9.93333 6 9.5 6C9.06667 6 8.70833 6.14167 8.425 6.425C8.14167 6.70833 8 7.06667 8 7.5C8 7.93333 8.14167 8.29167 8.425 8.575C8.70833 8.85833 9.06667 9 9.5 9ZM14.5 9C14.9333 9 15.2917 8.85833 15.575 8.575C15.8583 8.29167 16 7.93333 16 7.5C16 7.06667 15.8583 6.70833 15.575 6.425C15.2917 6.14167 14.9333 6 14.5 6C14.0667 6 13.7083 6.14167 13.425 6.425C13.1417 6.70833 13 7.06667 13 7.5C13 7.93333 13.1417 8.29167 13.425 8.575C13.7083 8.85833 14.0667 9 14.5 9ZM17.5 13C17.9333 13 18.2917 12.8583 18.575 12.575C18.8583 12.2917 19 11.9333 19 11.5C19 11.0667 18.8583 10.7083 18.575 10.425C18.2917 10.1417 17.9333 10 17.5 10C17.0667 10 16.7083 10.1417 16.425 10.425C16.1417 10.7083 16 11.0667 16 11.5C16 11.9333 16.1417 12.2917 16.425 12.575C16.7083 12.8583 17.0667 13 17.5 13Z" }),
      " "
    ]
  }
), h3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M10 22C8.61667 22 7.4375 21.5125 6.4625 20.5375C5.4875 19.5625 5 18.3833 5 17C5 16.15 5.19167 15.3667 5.575 14.65C5.95833 13.9333 6.46667 13.35 7.1 12.9C7.33333 12.7333 7.58333 12.675 7.85 12.725C8.11667 12.775 8.33333 12.9167 8.5 13.15C8.66667 13.3833 8.72917 13.6333 8.6875 13.9C8.64583 14.1667 8.50833 14.3833 8.275 14.55C7.89167 14.8333 7.58333 15.1875 7.35 15.6125C7.11667 16.0375 7 16.5 7 17C7 17.8333 7.29167 18.5417 7.875 19.125C8.45833 19.7083 9.16667 20 10 20C10.5 20 10.9625 19.8833 11.3875 19.65C11.8125 19.4167 12.1667 19.1083 12.45 18.725C12.6167 18.4917 12.8333 18.3542 13.1 18.3125C13.3667 18.2708 13.6167 18.3333 13.85 18.5C14.0833 18.6667 14.225 18.8833 14.275 19.15C14.325 19.4167 14.2667 19.6667 14.1 19.9C13.65 20.5333 13.0667 21.0417 12.35 21.425C11.6333 21.8083 10.85 22 10 22ZM18 22C17.7167 22 17.4792 21.9042 17.2875 21.7125C17.0958 21.5208 17 21.2833 17 21V17H12C11.45 17 10.9792 16.8042 10.5875 16.4125C10.1958 16.0208 10 15.55 10 15V9C10 8.45 10.1958 7.97917 10.5875 7.5875C10.9792 7.19583 11.45 7 12 7C12.4 7 12.7458 7.0875 13.0375 7.2625C13.3292 7.4375 13.6417 7.71667 13.975 8.1C14.725 9 15.4042 9.65833 16.0125 10.075C16.6208 10.4917 17.275 10.7667 17.975 10.9C18.2583 10.95 18.5 11.075 18.7 11.275C18.9 11.475 19 11.7167 19 12C19 12.2833 18.8958 12.5167 18.6875 12.7C18.4792 12.8833 18.2417 12.95 17.975 12.9C17.2417 12.7667 16.5292 12.5333 15.8375 12.2C15.1458 11.8667 14.5333 11.4833 14 11.05V14.5H17C17.55 14.5 18.0208 14.6958 18.4125 15.0875C18.8042 15.4792 19 15.95 19 16.5V21C19 21.2833 18.9042 21.5208 18.7125 21.7125C18.5208 21.9042 18.2833 22 18 22ZM12 6C11.45 6 10.9792 5.80417 10.5875 5.4125C10.1958 5.02083 10 4.55 10 4C10 3.45 10.1958 2.97917 10.5875 2.5875C10.9792 2.19583 11.45 2 12 2C12.55 2 13.0208 2.19583 13.4125 2.5875C13.8042 2.97917 14 3.45 14 4C14 4.55 13.8042 5.02083 13.4125 5.4125C13.0208 5.80417 12.55 6 12 6Z" }),
      " "
    ]
  }
), f3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20ZM12 18C10.3333 18 8.91667 17.4167 7.75 16.25C6.58333 15.0833 6 13.6667 6 12C6 10.3333 6.58333 8.91667 7.75 7.75C8.91667 6.58333 10.3333 6 12 6C13.6667 6 15.0833 6.58333 16.25 7.75C17.4167 8.91667 18 10.3333 18 12C18 13.6667 17.4167 15.0833 16.25 16.25C15.0833 17.4167 13.6667 18 12 18ZM12 16C13.1 16 14.0417 15.6083 14.825 14.825C15.6083 14.0417 16 13.1 16 12C16 10.9 15.6083 9.95833 14.825 9.175C14.0417 8.39167 13.1 8 12 8C10.9 8 9.95833 8.39167 9.175 9.175C8.39167 9.95833 8 10.9 8 12C8 13.1 8.39167 14.0417 9.175 14.825C9.95833 15.6083 10.9 16 12 16ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14Z" }),
      " "
    ]
  }
), g3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M12.275 15.525C13.4417 15.525 14.4333 15.15 15.25 14.4C16.0667 13.65 16.475 12.7417 16.475 11.675C16.475 10.725 16.1708 9.92083 15.5625 9.2625C14.9542 8.60417 14.2167 8.275 13.35 8.275C12.5667 8.275 11.9042 8.525 11.3625 9.025C10.8208 9.525 10.55 10.1417 10.55 10.875C10.55 11.1917 10.6042 11.5042 10.7125 11.8125C10.8208 12.1208 11.0083 12.3917 11.275 12.625C11.5417 12.8583 11.8083 12.9542 12.075 12.9125C12.3417 12.8708 12.5583 12.7583 12.725 12.575C12.8917 12.3917 12.9875 12.1708 13.0125 11.9125C13.0375 11.6542 12.9333 11.4167 12.7 11.2C12.6667 11.1667 12.6333 11.125 12.6 11.075C12.5667 11.025 12.55 10.9667 12.55 10.9C12.55 10.7167 12.625 10.5708 12.775 10.4625C12.925 10.3542 13.1167 10.3 13.35 10.3C13.6833 10.3 13.9583 10.4375 14.175 10.7125C14.3917 10.9875 14.5 11.3167 14.5 11.7C14.5 12.2167 14.2875 12.6542 13.8625 13.0125C13.4375 13.3708 12.9167 13.55 12.3 13.55C11.5167 13.55 10.8542 13.2333 10.3125 12.6C9.77083 11.9667 9.5 11.1917 9.5 10.275C9.5 9.95833 9.5375 9.65 9.6125 9.35C9.6875 9.05 9.8 8.76667 9.95 8.5C10.0833 8.25 10.15 7.9875 10.15 7.7125C10.15 7.4375 10.05 7.2 9.85 7C9.65 6.8 9.40833 6.70417 9.125 6.7125C8.84167 6.72083 8.625 6.84167 8.475 7.075C8.14167 7.54167 7.89167 8.04167 7.725 8.575C7.55833 9.10833 7.475 9.66667 7.475 10.25C7.475 11.7167 7.94167 12.9625 8.875 13.9875C9.80833 15.0125 10.9417 15.525 12.275 15.525ZM7 22C6.71667 22 6.47917 21.9042 6.2875 21.7125C6.09583 21.5208 6 21.2833 6 21V17.7C5.05 16.8333 4.3125 15.8208 3.7875 14.6625C3.2625 13.5042 3 12.2833 3 11C3 8.5 3.875 6.375 5.625 4.625C7.375 2.875 9.5 2 12 2C14.0833 2 15.9292 2.6125 17.5375 3.8375C19.1458 5.0625 20.1917 6.65833 20.675 8.625L21.975 13.75C22.0583 14.0667 22 14.3542 21.8 14.6125C21.6 14.8708 21.3333 15 21 15H19V18C19 18.55 18.8042 19.0208 18.4125 19.4125C18.0208 19.8042 17.55 20 17 20H15V21C15 21.2833 14.9042 21.5208 14.7125 21.7125C14.5208 21.9042 14.2833 22 14 22H7Z" })
    ]
  }
), m3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M8.63849 19C8.34916 19 8.11045 18.9212 7.92238 18.7636C7.74878 18.606 7.66198 18.3983 7.66198 18.1404V17.8395C7.06884 18.4699 6.24423 18.7851 5.18815 18.7851C4.39247 18.7851 3.67637 18.5917 3.03982 18.2049C2.40328 17.8181 1.90418 17.2736 1.54251 16.5716C1.18084 15.8553 1 15.0458 1 14.1433C1 13.1404 1.217 12.1734 1.65101 11.2421C2.08501 10.2966 2.69262 9.53009 3.47383 8.94269C4.26951 8.3553 5.18092 8.0616 6.20806 8.0616C6.87354 8.0616 7.47391 8.15473 8.00919 8.34097C8.54446 8.51289 9.10143 8.72779 9.68011 8.98567V17.9255C9.68011 18.212 9.57884 18.4628 9.3763 18.6776C9.17377 18.8925 8.92783 19 8.63849 19ZM5.34005 16.7865C5.75959 16.7865 6.16466 16.7006 6.55527 16.5287C6.96034 16.3567 7.29308 16.149 7.55348 15.9054L7.61858 10.2966C7.19904 10.1246 6.74334 10.0387 6.25146 10.0387C5.62939 10.0387 5.07965 10.2321 4.60224 10.6189C4.12484 10.9914 3.75593 11.4928 3.49553 12.1232C3.23513 12.7393 3.10493 13.3983 3.10493 14.1003C3.10493 14.9742 3.30023 15.6404 3.69083 16.0989C4.08144 16.5573 4.63118 16.7865 5.34005 16.7865Z" }),
      /* @__PURE__ */ a("path", { d: "M21.915 18.8066C21.3942 18.8066 21.0542 18.563 20.8951 18.0759L19.3327 13.606L14.9058 14.5731L13.4953 18.0974C13.4085 18.298 13.2783 18.4628 13.1047 18.5917C12.9455 18.7206 12.743 18.7851 12.4971 18.7851C12.2077 18.7851 11.9546 18.6848 11.7376 18.4842C11.5206 18.2837 11.4121 18.0473 11.4121 17.7751C11.4121 17.5888 11.4627 17.3739 11.564 17.1304L12.432 14.9814C12.3452 14.9527 12.2801 14.9241 12.2367 14.8954C11.8605 14.7092 11.6725 14.394 11.6725 13.9499C11.6725 13.692 11.7448 13.4699 11.8895 13.2837C12.0486 13.0974 12.2511 12.9756 12.4971 12.9183L13.3 12.7464L16.5116 4.66619C16.5984 4.45129 16.7359 4.28653 16.9239 4.17192C17.112 4.05731 17.3145 4 17.5315 4C17.763 4 17.9655 4.05731 18.1391 4.17192C18.3127 4.28653 18.4429 4.46562 18.5297 4.70917L22.8481 17.1089C22.8626 17.1375 22.8915 17.2235 22.9349 17.3668C22.9783 17.4957 23 17.6318 23 17.7751C23 18.0473 22.8987 18.2908 22.6962 18.5057C22.4937 18.7063 22.2333 18.8066 21.915 18.8066ZM18.6165 11.6074L17.4447 8.14756L15.8172 12.2092L18.6165 11.6074Z" }),
      " "
    ]
  }
), v3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M8.65 20H6C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15.35L2.075 13.4C1.89167 13.2 1.75 12.9792 1.65 12.7375C1.55 12.4958 1.5 12.25 1.5 12C1.5 11.75 1.55 11.5042 1.65 11.2625C1.75 11.0208 1.89167 10.8 2.075 10.6L4 8.65V6C4 5.45 4.19583 4.97917 4.5875 4.5875C4.97917 4.19583 5.45 4 6 4H8.65L10.6 2.075C10.8 1.89167 11.0208 1.75 11.2625 1.65C11.5042 1.55 11.75 1.5 12 1.5C12.25 1.5 12.4958 1.55 12.7375 1.65C12.9792 1.75 13.2 1.89167 13.4 2.075L15.35 4H18C18.55 4 19.0208 4.19583 19.4125 4.5875C19.8042 4.97917 20 5.45 20 6V8.65L21.925 10.6C22.1083 10.8 22.25 11.0208 22.35 11.2625C22.45 11.5042 22.5 11.75 22.5 12C22.5 12.25 22.45 12.4958 22.35 12.7375C22.25 12.9792 22.1083 13.2 21.925 13.4L20 15.35V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H15.35L13.4 21.925C13.2 22.1083 12.9792 22.25 12.7375 22.35C12.4958 22.45 12.25 22.5 12 22.5C11.75 22.5 11.5042 22.45 11.2625 22.35C11.0208 22.25 10.8 22.1083 10.6 21.925L8.65 20ZM12 17C13.3833 17 14.5625 16.5125 15.5375 15.5375C16.5125 14.5625 17 13.3833 17 12C17 10.6167 16.5125 9.4375 15.5375 8.4625C14.5625 7.4875 13.3833 7 12 7V17Z" }),
      " "
    ]
  }
), C3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M12 21C9.48333 21 7.35417 20.1292 5.6125 18.3875C3.87083 16.6458 3 14.5167 3 12C3 9.70002 3.75 7.70418 5.25 6.01252C6.75 4.32085 8.66667 3.33335 11 3.05002C11.2167 3.01668 11.4083 3.04585 11.575 3.13752C11.7417 3.22918 11.875 3.35002 11.975 3.50002C12.075 3.65002 12.1292 3.82502 12.1375 4.02502C12.1458 4.22502 12.0833 4.41668 11.95 4.60002C11.6667 5.03335 11.4542 5.49168 11.3125 5.97502C11.1708 6.45835 11.1 6.96668 11.1 7.50002C11.1 9.00002 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.0167 12.9 17.5292 12.825 18.0375 12.675C18.5458 12.525 19 12.3167 19.4 12.05C19.5833 11.9333 19.7708 11.8792 19.9625 11.8875C20.1542 11.8958 20.325 11.9417 20.475 12.025C20.6417 12.1083 20.7708 12.2333 20.8625 12.4C20.9542 12.5667 20.9833 12.7667 20.95 13C20.7167 15.3 19.7375 17.2083 18.0125 18.725C16.2875 20.2417 14.2833 21 12 21Z" }),
      " "
    ]
  }
), y3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M12 21C10.9167 21 9.9125 20.7334 8.9875 20.2C8.0625 19.6667 7.33333 18.9334 6.8 18H5C4.71667 18 4.47917 17.9042 4.2875 17.7125C4.09583 17.5209 4 17.2834 4 17C4 16.7167 4.09583 16.4792 4.2875 16.2875C4.47917 16.0959 4.71667 16 5 16H6.1C6.05 15.6667 6.02083 15.3334 6.0125 15C6.00417 14.6667 6 14.3334 6 14H5C4.71667 14 4.47917 13.9042 4.2875 13.7125C4.09583 13.5209 4 13.2834 4 13C4 12.7167 4.09583 12.4792 4.2875 12.2875C4.47917 12.0959 4.71667 12 5 12H6C6 11.6667 6.00417 11.3334 6.0125 11C6.02083 10.6667 6.05 10.3334 6.1 10H5C4.71667 10 4.47917 9.90419 4.2875 9.71252C4.09583 9.52086 4 9.28336 4 9.00002C4 8.71669 4.09583 8.47919 4.2875 8.28752C4.47917 8.09586 4.71667 8.00002 5 8.00002H6.8C7.03333 7.61669 7.29583 7.25836 7.5875 6.92502C7.87917 6.59169 8.21667 6.30002 8.6 6.05002L7.675 5.10002C7.49167 4.91669 7.4 4.68752 7.4 4.41252C7.4 4.13752 7.5 3.90002 7.7 3.70002C7.88333 3.51669 8.11667 3.42502 8.4 3.42502C8.68333 3.42502 8.91667 3.51669 9.1 3.70002L10.55 5.15002C11.0167 5.00002 11.4917 4.92502 11.975 4.92502C12.4583 4.92502 12.9333 5.00002 13.4 5.15002L14.9 3.67502C15.0833 3.49169 15.3125 3.40002 15.5875 3.40002C15.8625 3.40002 16.1 3.50002 16.3 3.70002C16.4833 3.88336 16.575 4.11669 16.575 4.40002C16.575 4.68336 16.4833 4.91669 16.3 5.10002L15.35 6.05002C15.7333 6.30002 16.0792 6.58752 16.3875 6.91252C16.6958 7.23752 16.9667 7.60002 17.2 8.00002H19C19.2833 8.00002 19.5208 8.09586 19.7125 8.28752C19.9042 8.47919 20 8.71669 20 9.00002C20 9.28336 19.9042 9.52086 19.7125 9.71252C19.5208 9.90419 19.2833 10 19 10H17.9C17.95 10.3334 17.9792 10.6667 17.9875 11C17.9958 11.3334 18 11.6667 18 12H19C19.2833 12 19.5208 12.0959 19.7125 12.2875C19.9042 12.4792 20 12.7167 20 13C20 13.2834 19.9042 13.5209 19.7125 13.7125C19.5208 13.9042 19.2833 14 19 14H18C18 14.3334 17.9958 14.6667 17.9875 15C17.9792 15.3334 17.95 15.6667 17.9 16H19C19.2833 16 19.5208 16.0959 19.7125 16.2875C19.9042 16.4792 20 16.7167 20 17C20 17.2834 19.9042 17.5209 19.7125 17.7125C19.5208 17.9042 19.2833 18 19 18H17.2C16.6667 18.9334 15.9375 19.6667 15.0125 20.2C14.0875 20.7334 13.0833 21 12 21ZM12 19C13.1 19 14.0417 18.6084 14.825 17.825C15.6083 17.0417 16 16.1 16 15V11C16 9.90002 15.6083 8.95836 14.825 8.17502C14.0417 7.39169 13.1 7.00002 12 7.00002C10.9 7.00002 9.95833 7.39169 9.175 8.17502C8.39167 8.95836 8 9.90002 8 11V15C8 16.1 8.39167 17.0417 9.175 17.825C9.95833 18.6084 10.9 19 12 19ZM11 16H13C13.2833 16 13.5208 15.9042 13.7125 15.7125C13.9042 15.5209 14 15.2834 14 15C14 14.7167 13.9042 14.4792 13.7125 14.2875C13.5208 14.0959 13.2833 14 13 14H11C10.7167 14 10.4792 14.0959 10.2875 14.2875C10.0958 14.4792 10 14.7167 10 15C10 15.2834 10.0958 15.5209 10.2875 15.7125C10.4792 15.9042 10.7167 16 11 16ZM11 12H13C13.2833 12 13.5208 11.9042 13.7125 11.7125C13.9042 11.5209 14 11.2834 14 11C14 10.7167 13.9042 10.4792 13.7125 10.2875C13.5208 10.0959 13.2833 10 13 10H11C10.7167 10 10.4792 10.0959 10.2875 10.2875C10.0958 10.4792 10 10.7167 10 11C10 11.2834 10.0958 11.5209 10.2875 11.7125C10.4792 11.9042 10.7167 12 11 12Z" }),
      " "
    ]
  }
), _3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M12 17C12.2833 17 12.5208 16.9042 12.7125 16.7125C12.9042 16.5208 13 16.2833 13 16V12C13 11.7167 12.9042 11.4792 12.7125 11.2875C12.5208 11.0958 12.2833 11 12 11C11.7167 11 11.4792 11.0958 11.2875 11.2875C11.0958 11.4792 11 11.7167 11 12V16C11 16.2833 11.0958 16.5208 11.2875 16.7125C11.4792 16.9042 11.7167 17 12 17ZM12 9C12.2833 9 12.5208 8.90417 12.7125 8.7125C12.9042 8.52083 13 8.28333 13 8C13 7.71667 12.9042 7.47917 12.7125 7.2875C12.5208 7.09583 12.2833 7 12 7C11.7167 7 11.4792 7.09583 11.2875 7.2875C11.0958 7.47917 11 7.71667 11 8C11 8.28333 11.0958 8.52083 11.2875 8.7125C11.4792 8.90417 11.7167 9 12 9ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" }),
      " "
    ]
  }
), b3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M16.45 13.6L8.35 5.49998C8.51666 5.36664 8.70833 5.28748 8.925 5.26248C9.14166 5.23748 9.35 5.29164 9.55 5.42498L17.675 11.15C17.9917 11.35 18.1458 11.6333 18.1375 12C18.1292 12.3666 17.9667 12.65 17.65 12.85L16.45 13.6ZM19.05 21.9L13 15.8L9.55 18.025C9.21666 18.2416 8.875 18.2541 8.525 18.0625C8.175 17.8708 8 17.575 8 17.175V10.8L2.1 4.89998C1.91666 4.71664 1.825 4.48331 1.825 4.19998C1.825 3.91664 1.91666 3.68331 2.1 3.49998C2.28333 3.31664 2.51666 3.22498 2.8 3.22498C3.08333 3.22498 3.31666 3.31664 3.5 3.49998L20.475 20.475C20.675 20.675 20.775 20.9125 20.775 21.1875C20.775 21.4625 20.675 21.7 20.475 21.9C20.275 22.0833 20.0375 22.1791 19.7625 22.1875C19.4875 22.1958 19.25 22.1 19.05 21.9Z" }),
      " "
    ]
  }
), w3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M12 21.4C9.78333 21.4 7.89583 20.6333 6.3375 19.1C4.77917 17.5667 4 15.7083 4 13.525C4 12.425 4.20833 11.4042 4.625 10.4625C5.04167 9.52083 5.61667 8.68333 6.35 7.95L10.95 3.425C11.1 3.29167 11.2667 3.1875 11.45 3.1125C11.6333 3.0375 11.8167 3 12 3C12.1833 3 12.3667 3.0375 12.55 3.1125C12.7333 3.1875 12.9 3.29167 13.05 3.425L17.65 7.95C18.3833 8.68333 18.9583 9.52083 19.375 10.4625C19.7917 11.4042 20 12.425 20 13.525C20 15.7083 19.2208 17.5667 17.6625 19.1C16.1042 20.6333 14.2167 21.4 12 21.4ZM12 19.4V5.2L7.75 9.4C7.16667 9.95 6.72917 10.575 6.4375 11.275C6.14583 11.975 6 12.725 6 13.525C6 15.1417 6.58333 16.525 7.75 17.675C8.91667 18.825 10.3333 19.4 12 19.4Z" }),
      " "
    ]
  }
), x3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M17.65 7.57498C18.45 8.37498 19.0417 9.23748 19.425 10.1625C19.8083 11.0875 20 12.0666 20 13.1C20 13.3833 19.9875 13.6583 19.9625 13.925C19.9375 14.1916 19.9 14.45 19.85 14.7C19.8 14.95 19.675 15.1458 19.475 15.2875C19.275 15.4291 19.0583 15.5 18.825 15.5C18.675 15.5 18.5292 15.475 18.3875 15.425C18.2458 15.375 18.1083 15.2833 17.975 15.15L12.575 9.74998C12.3917 9.56664 12.25 9.35414 12.15 9.11248C12.05 8.87081 12 8.61664 12 8.34998V4.79998L10.475 6.29998C10.2917 6.48331 10.0583 6.57081 9.77501 6.56248C9.49168 6.55414 9.25835 6.45831 9.07501 6.27498C8.87501 6.07498 8.77918 5.83748 8.78751 5.56248C8.79585 5.28748 8.90001 5.05831 9.10001 4.87498L10.95 3.04998C11.1 2.89998 11.2667 2.78748 11.45 2.71248C11.6333 2.63748 11.8167 2.59998 12 2.59998C12.1833 2.59998 12.3667 2.63748 12.55 2.71248C12.7333 2.78748 12.9 2.89998 13.05 3.04998L17.65 7.57498ZM12 21C9.78335 21 7.89585 20.2375 6.33751 18.7125C4.77918 17.1875 4.00001 15.3166 4.00001 13.1C4.00001 12.25 4.13335 11.4333 4.40001 10.65C4.66668 9.86664 5.06668 9.11664 5.60001 8.39998L2.10001 4.89998C1.91668 4.71664 1.82501 4.48331 1.82501 4.19998C1.82501 3.91664 1.91668 3.68331 2.10001 3.49998C2.28335 3.31664 2.51668 3.22498 2.80001 3.22498C3.08335 3.22498 3.31668 3.31664 3.50001 3.49998L20.5 20.5C20.6833 20.6833 20.775 20.9166 20.775 21.2C20.775 21.4833 20.6833 21.7166 20.5 21.9C20.3167 22.0833 20.0833 22.175 19.8 22.175C19.5167 22.175 19.2833 22.0833 19.1 21.9L16.7 19.5C16 20.0166 15.2375 20.3958 14.4125 20.6375C13.5875 20.8791 12.7833 21 12 21ZM12 19V14.825L7.00001 9.82498C6.65001 10.3583 6.39585 10.8958 6.23751 11.4375C6.07918 11.9791 6.00001 12.5333 6.00001 13.1C6.00001 14.7666 6.58335 16.1666 7.75001 17.3C8.91668 18.4333 10.3333 19 12 19Z" }),
      " "
    ]
  }
), A3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M12 21.4C9.78333 21.4 7.89583 20.6333 6.3375 19.1C4.77917 17.5667 4 15.7083 4 13.525C4 12.425 4.20833 11.4042 4.625 10.4625C5.04167 9.52083 5.61667 8.68333 6.35 7.95L10.95 3.425C11.1 3.29167 11.2667 3.1875 11.45 3.1125C11.6333 3.0375 11.8167 3 12 3C12.1833 3 12.3667 3.0375 12.55 3.1125C12.7333 3.1875 12.9 3.29167 13.05 3.425L17.65 7.95C18.3833 8.68333 18.9583 9.52083 19.375 10.4625C19.7917 11.4042 20 12.425 20 13.525C20 15.7083 19.2208 17.5667 17.6625 19.1C16.1042 20.6333 14.2167 21.4 12 21.4ZM12 19.4V5.2L7.75 9.4C7.16667 9.95 6.72917 10.575 6.4375 11.275C6.14583 11.975 6 12.725 6 13.525C6 15.1417 6.58333 16.525 7.75 17.675C8.91667 18.825 10.3333 19.4 12 19.4Z" }),
      /* @__PURE__ */ a("path", { d: "M18 5H19V6C19 6.28333 19.0958 6.52083 19.2875 6.7125C19.4792 6.90417 19.7167 7 20 7C20.2833 7 20.5208 6.90417 20.7125 6.7125C20.9042 6.52083 21 6.28333 21 6V5H22C22.2833 5 22.5208 4.90417 22.7125 4.7125C22.9042 4.52083 23 4.28333 23 4C23 3.71667 22.9042 3.47917 22.7125 3.2875C22.5208 3.09583 22.2833 3 22 3H21V2C21 1.71667 20.9042 1.47917 20.7125 1.2875C20.5208 1.09583 20.2833 1 20 1C19.7167 1 19.4792 1.09583 19.2875 1.2875C19.0958 1.47917 19 1.71667 19 2V3H18C17.7167 3 17.4792 3.09583 17.2875 3.2875C17.0958 3.47917 17 3.71667 17 4C17 4.28333 17.0958 4.52083 17.2875 4.7125C17.4792 4.90417 17.7167 5 18 5Z" }),
      " "
    ]
  }
), E3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M12 21.4C9.78333 21.4 7.89583 20.6333 6.3375 19.1C4.77917 17.5667 4 15.7083 4 13.525C4 12.425 4.20833 11.4042 4.625 10.4625C5.04167 9.52083 5.61667 8.68333 6.35 7.95L10.95 3.425C11.1 3.29167 11.2667 3.1875 11.45 3.1125C11.6333 3.0375 11.8167 3 12 3C12.1833 3 12.3667 3.0375 12.55 3.1125C12.7333 3.1875 12.9 3.29167 13.05 3.425L17.65 7.95C18.3833 8.68333 18.9583 9.52083 19.375 10.4625C19.7917 11.4042 20 12.425 20 13.525C20 15.7083 19.2208 17.5667 17.6625 19.1C16.1042 20.6333 14.2167 21.4 12 21.4ZM12 19.4V5.2L7.75 9.4C7.16667 9.95 6.72917 10.575 6.4375 11.275C6.14583 11.975 6 12.725 6 13.525C6 15.1417 6.58333 16.525 7.75 17.675C8.91667 18.825 10.3333 19.4 12 19.4Z" }),
      /* @__PURE__ */ a("path", { d: "M18 2.40002C17.7167 2.40002 17.4792 2.49586 17.2875 2.68752C17.0958 2.87919 17 3.11669 17 3.40002C17 3.68336 17.0958 3.92086 17.2875 4.11252C17.4792 4.30419 17.7167 4.40002 18 4.40002H22C22.2833 4.40002 22.5208 4.30419 22.7125 4.11252C22.9042 3.92086 23 3.68336 23 3.40002C23 3.11669 22.9042 2.87919 22.7125 2.68752C22.5208 2.49586 22.2833 2.40002 22 2.40002H18Z" }),
      " "
    ]
  }
), S3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M7.1 11.35C7.33334 10.8833 7.575 10.4333 7.825 9.99996C8.075 9.56663 8.35 9.13329 8.65 8.69996L7.25 8.42496L5.15 10.525L7.1 11.35ZM19.15 4.47496C17.9833 4.50829 16.7375 4.84996 15.4125 5.49996C14.0875 6.14996 12.8833 7.01663 11.8 8.09996C11.1 8.79996 10.475 9.54996 9.925 10.35C9.375 11.15 8.96667 11.9 8.7 12.6L11.55 15.425C12.25 15.1583 13 14.75 13.8 14.2C14.6 13.65 15.35 13.025 16.05 12.325C17.1333 11.2416 18 10.0416 18.65 8.72496C19.3 7.40829 19.6417 6.16663 19.675 4.99996C19.675 4.93329 19.6625 4.86663 19.6375 4.79996C19.6125 4.73329 19.575 4.67496 19.525 4.62496C19.475 4.57496 19.4167 4.53746 19.35 4.51246C19.2833 4.48746 19.2167 4.47496 19.15 4.47496ZM13.65 10.475C13.2667 10.0916 13.075 9.62079 13.075 9.06246C13.075 8.50413 13.2667 8.03329 13.65 7.64996C14.0333 7.26663 14.5083 7.07496 15.075 7.07496C15.6417 7.07496 16.1167 7.26663 16.5 7.64996C16.8833 8.03329 17.075 8.50413 17.075 9.06246C17.075 9.62079 16.8833 10.0916 16.5 10.475C16.1167 10.8583 15.6417 11.05 15.075 11.05C14.5083 11.05 14.0333 10.8583 13.65 10.475ZM12.8 17.025L13.625 19L15.725 16.9L15.45 15.5C15.0167 15.8 14.5833 16.0708 14.15 16.3125C13.7167 16.5541 13.2667 16.7916 12.8 17.025ZM21.575 3.67496C21.7083 5.50829 21.4083 7.29579 20.675 9.03746C19.9417 10.7791 18.7833 12.4416 17.2 14.025L17.7 16.5C17.7667 16.8333 17.75 17.1583 17.65 17.475C17.55 17.7916 17.3833 18.0666 17.15 18.3L14 21.45C13.75 21.7 13.45 21.7958 13.1 21.7375C12.75 21.6791 12.5083 21.4833 12.375 21.15L10.85 17.575L6.575 13.3L3 11.775C2.66667 11.6416 2.46667 11.4 2.4 11.05C2.33334 10.7 2.425 10.4 2.675 10.15L5.825 6.99996C6.05834 6.76663 6.3375 6.59996 6.6625 6.49996C6.9875 6.39996 7.31667 6.38329 7.65 6.44996L10.125 6.94996C11.7083 5.36663 13.3708 4.20829 15.1125 3.47496C16.8542 2.74163 18.6417 2.44163 20.475 2.57496C20.6083 2.59163 20.7417 2.62913 20.875 2.68746C21.0083 2.74579 21.125 2.82496 21.225 2.92496C21.325 3.02496 21.4042 3.14163 21.4625 3.27496C21.5208 3.40829 21.5583 3.54163 21.575 3.67496ZM3.925 15.975C4.50834 15.3916 5.22084 15.0958 6.0625 15.0875C6.90417 15.0791 7.61667 15.3666 8.2 15.95C8.78334 16.5333 9.07084 17.2458 9.0625 18.0875C9.05417 18.9291 8.75834 19.6416 8.175 20.225C7.375 21.025 6.42917 21.5 5.3375 21.65C4.24584 21.8 3.15 21.95 2.05 22.1C2.2 21 2.35 19.9041 2.5 18.8125C2.65 17.7208 3.125 16.775 3.925 15.975ZM5.35 17.375C5.06667 17.6583 4.87084 18 4.7625 18.4C4.65417 18.8 4.56667 19.2083 4.5 19.625C4.91667 19.5583 5.325 19.475 5.725 19.375C6.125 19.275 6.46667 19.0833 6.75 18.8C6.95 18.6 7.05834 18.3583 7.075 18.075C7.09167 17.7916 7 17.55 6.8 17.35C6.6 17.15 6.35834 17.0541 6.075 17.0625C5.79167 17.0708 5.55 17.175 5.35 17.375Z" }),
      " "
    ]
  }
), T3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M12 13.725C11.8333 13.725 11.6708 13.7042 11.5125 13.6625C11.3542 13.6209 11.2 13.5584 11.05 13.475L2.6 8.87502C2.41667 8.77502 2.2875 8.65002 2.2125 8.50002C2.1375 8.35002 2.1 8.18336 2.1 8.00002C2.1 7.81669 2.1375 7.65002 2.2125 7.50002C2.2875 7.35002 2.41667 7.22502 2.6 7.12502L11.05 2.52502C11.2 2.44169 11.3542 2.37919 11.5125 2.33752C11.6708 2.29586 11.8333 2.27502 12 2.27502C12.1667 2.27502 12.3292 2.29586 12.4875 2.33752C12.6458 2.37919 12.8 2.44169 12.95 2.52502L21.4 7.12502C21.5833 7.22502 21.7125 7.35002 21.7875 7.50002C21.8625 7.65002 21.9 7.81669 21.9 8.00002C21.9 8.18336 21.8625 8.35002 21.7875 8.50002C21.7125 8.65002 21.5833 8.77502 21.4 8.87502L12.95 13.475C12.8 13.5584 12.6458 13.6209 12.4875 13.6625C12.3292 13.7042 12.1667 13.725 12 13.725ZM12 15.725L19.85 11.45C19.8833 11.4334 20.0417 11.3917 20.325 11.325C20.6083 11.325 20.8458 11.4209 21.0375 11.6125C21.2292 11.8042 21.325 12.0417 21.325 12.325C21.325 12.5084 21.2833 12.675 21.2 12.825C21.1167 12.975 20.9833 13.1 20.8 13.2L12.95 17.475C12.8 17.5584 12.6458 17.6209 12.4875 17.6625C12.3292 17.7042 12.1667 17.725 12 17.725C11.8333 17.725 11.6708 17.7042 11.5125 17.6625C11.3542 17.6209 11.2 17.5584 11.05 17.475L3.2 13.2C3.01667 13.1 2.88333 12.975 2.8 12.825C2.71667 12.675 2.675 12.5084 2.675 12.325C2.675 12.0417 2.77083 11.8042 2.9625 11.6125C3.15417 11.4209 3.39167 11.325 3.675 11.325C3.75833 11.325 3.8375 11.3375 3.9125 11.3625C3.9875 11.3875 4.06667 11.4167 4.15 11.45L12 15.725ZM12 19.725L19.85 15.45C19.8833 15.4334 20.0417 15.3917 20.325 15.325C20.6083 15.325 20.8458 15.4209 21.0375 15.6125C21.2292 15.8042 21.325 16.0417 21.325 16.325C21.325 16.5084 21.2833 16.675 21.2 16.825C21.1167 16.975 20.9833 17.1 20.8 17.2L12.95 21.475C12.8 21.5584 12.6458 21.6209 12.4875 21.6625C12.3292 21.7042 12.1667 21.725 12 21.725C11.8333 21.725 11.6708 21.7042 11.5125 21.6625C11.3542 21.6209 11.2 21.5584 11.05 21.475L3.2 17.2C3.01667 17.1 2.88333 16.975 2.8 16.825C2.71667 16.675 2.675 16.5084 2.675 16.325C2.675 16.0417 2.77083 15.8042 2.9625 15.6125C3.15417 15.4209 3.39167 15.325 3.675 15.325C3.75833 15.325 3.8375 15.3375 3.9125 15.3625C3.9875 15.3875 4.06667 15.4167 4.15 15.45L12 19.725Z" }),
      " "
    ]
  }
), N3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M16 8.4L7.1 17.3C6.91667 17.4833 6.68334 17.575 6.4 17.575C6.11667 17.575 5.88334 17.4833 5.7 17.3C5.51667 17.1167 5.425 16.8833 5.425 16.6C5.425 16.3167 5.51667 16.0833 5.7 15.9L14.6 7H7C6.71667 7 6.47917 6.90417 6.2875 6.7125C6.09584 6.52083 6 6.28333 6 6C6 5.71667 6.09584 5.47917 6.2875 5.2875C6.47917 5.09583 6.71667 5 7 5H17C17.2833 5 17.5208 5.09583 17.7125 5.2875C17.9042 5.47917 18 5.71667 18 6V16C18 16.2833 17.9042 16.5208 17.7125 16.7125C17.5208 16.9042 17.2833 17 17 17C16.7167 17 16.4792 16.9042 16.2875 16.7125C16.0958 16.5208 16 16.2833 16 16V8.4Z" }),
      " "
    ]
  }
), k3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M4.82499 12.025L8.69999 15.9C8.88332 16.0834 8.97499 16.3167 8.97499 16.6C8.97499 16.8834 8.88332 17.1167 8.69999 17.3C8.51665 17.4834 8.28332 17.575 7.99999 17.575C7.71665 17.575 7.48332 17.4834 7.29999 17.3L2.69999 12.7C2.59999 12.6 2.52915 12.4917 2.48749 12.375C2.44582 12.2584 2.42499 12.1334 2.42499 12C2.42499 11.8667 2.44582 11.7417 2.48749 11.625C2.52915 11.5084 2.59999 11.4 2.69999 11.3L7.29999 6.70002C7.49999 6.50002 7.73749 6.40002 8.01249 6.40002C8.28749 6.40002 8.52499 6.50002 8.72499 6.70002C8.92499 6.90002 9.02499 7.13752 9.02499 7.41252C9.02499 7.68752 8.92499 7.92502 8.72499 8.12502L4.82499 12.025ZM19.175 11.975L15.3 8.10002C15.1167 7.91669 15.025 7.68336 15.025 7.40002C15.025 7.11669 15.1167 6.88336 15.3 6.70002C15.4833 6.51669 15.7167 6.42502 16 6.42502C16.2833 6.42502 16.5167 6.51669 16.7 6.70002L21.3 11.3C21.4 11.4 21.4708 11.5084 21.5125 11.625C21.5542 11.7417 21.575 11.8667 21.575 12C21.575 12.1334 21.5542 12.2584 21.5125 12.375C21.4708 12.4917 21.4 12.6 21.3 12.7L16.7 17.3C16.5 17.5 16.2667 17.5959 16 17.5875C15.7333 17.5792 15.5 17.475 15.3 17.275C15.1 17.075 15 16.8375 15 16.5625C15 16.2875 15.1 16.05 15.3 15.85L19.175 11.975Z" }),
      " "
    ]
  }
), L3 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M4 19C3.45 19 2.97917 18.8042 2.5875 18.4125C2.19583 18.0208 2 17.55 2 17V7C2 6.45 2.19583 5.97917 2.5875 5.5875C2.97917 5.19583 3.45 5 4 5H20C20.55 5 21.0208 5.19583 21.4125 5.5875C21.8042 5.97917 22 6.45 22 7V17C22 17.55 21.8042 18.0208 21.4125 18.4125C21.0208 18.8042 20.55 19 20 19H4ZM9 16H15C15.2833 16 15.5208 15.9042 15.7125 15.7125C15.9042 15.5208 16 15.2833 16 15C16 14.7167 15.9042 14.4792 15.7125 14.2875C15.5208 14.0958 15.2833 14 15 14H9C8.71667 14 8.47917 14.0958 8.2875 14.2875C8.09583 14.4792 8 14.7167 8 15C8 15.2833 8.09583 15.5208 8.2875 15.7125C8.47917 15.9042 8.71667 16 9 16ZM6 10C6.28333 10 6.52083 9.90417 6.7125 9.7125C6.90417 9.52083 7 9.28333 7 9C7 8.71667 6.90417 8.47917 6.7125 8.2875C6.52083 8.09583 6.28333 8 6 8C5.71667 8 5.47917 8.09583 5.2875 8.2875C5.09583 8.47917 5 8.71667 5 9C5 9.28333 5.09583 9.52083 5.2875 9.7125C5.47917 9.90417 5.71667 10 6 10ZM9 10C9.28333 10 9.52083 9.90417 9.7125 9.7125C9.90417 9.52083 10 9.28333 10 9C10 8.71667 9.90417 8.47917 9.7125 8.2875C9.52083 8.09583 9.28333 8 9 8C8.71667 8 8.47917 8.09583 8.2875 8.2875C8.09583 8.47917 8 8.71667 8 9C8 9.28333 8.09583 9.52083 8.2875 9.7125C8.47917 9.90417 8.71667 10 9 10ZM12 10C12.2833 10 12.5208 9.90417 12.7125 9.7125C12.9042 9.52083 13 9.28333 13 9C13 8.71667 12.9042 8.47917 12.7125 8.2875C12.5208 8.09583 12.2833 8 12 8C11.7167 8 11.4792 8.09583 11.2875 8.2875C11.0958 8.47917 11 8.71667 11 9C11 9.28333 11.0958 9.52083 11.2875 9.7125C11.4792 9.90417 11.7167 10 12 10ZM15 10C15.2833 10 15.5208 9.90417 15.7125 9.7125C15.9042 9.52083 16 9.28333 16 9C16 8.71667 15.9042 8.47917 15.7125 8.2875C15.5208 8.09583 15.2833 8 15 8C14.7167 8 14.4792 8.09583 14.2875 8.2875C14.0958 8.47917 14 8.71667 14 9C14 9.28333 14.0958 9.52083 14.2875 9.7125C14.4792 9.90417 14.7167 10 15 10ZM18 10C18.2833 10 18.5208 9.90417 18.7125 9.7125C18.9042 9.52083 19 9.28333 19 9C19 8.71667 18.9042 8.47917 18.7125 8.2875C18.5208 8.09583 18.2833 8 18 8C17.7167 8 17.4792 8.09583 17.2875 8.2875C17.0958 8.47917 17 8.71667 17 9C17 9.28333 17.0958 9.52083 17.2875 9.7125C17.4792 9.90417 17.7167 10 18 10ZM6 13C6.28333 13 6.52083 12.9042 6.7125 12.7125C6.90417 12.5208 7 12.2833 7 12C7 11.7167 6.90417 11.4792 6.7125 11.2875C6.52083 11.0958 6.28333 11 6 11C5.71667 11 5.47917 11.0958 5.2875 11.2875C5.09583 11.4792 5 11.7167 5 12C5 12.2833 5.09583 12.5208 5.2875 12.7125C5.47917 12.9042 5.71667 13 6 13ZM9 13C9.28333 13 9.52083 12.9042 9.7125 12.7125C9.90417 12.5208 10 12.2833 10 12C10 11.7167 9.90417 11.4792 9.7125 11.2875C9.52083 11.0958 9.28333 11 9 11C8.71667 11 8.47917 11.0958 8.2875 11.2875C8.09583 11.4792 8 11.7167 8 12C8 12.2833 8.09583 12.5208 8.2875 12.7125C8.47917 12.9042 8.71667 13 9 13ZM12 13C12.2833 13 12.5208 12.9042 12.7125 12.7125C12.9042 12.5208 13 12.2833 13 12C13 11.7167 12.9042 11.4792 12.7125 11.2875C12.5208 11.0958 12.2833 11 12 11C11.7167 11 11.4792 11.0958 11.2875 11.2875C11.0958 11.4792 11 11.7167 11 12C11 12.2833 11.0958 12.5208 11.2875 12.7125C11.4792 12.9042 11.7167 13 12 13ZM15 13C15.2833 13 15.5208 12.9042 15.7125 12.7125C15.9042 12.5208 16 12.2833 16 12C16 11.7167 15.9042 11.4792 15.7125 11.2875C15.5208 11.0958 15.2833 11 15 11C14.7167 11 14.4792 11.0958 14.2875 11.2875C14.0958 11.4792 14 11.7167 14 12C14 12.2833 14.0958 12.5208 14.2875 12.7125C14.4792 12.9042 14.7167 13 15 13ZM18 13C18.2833 13 18.5208 12.9042 18.7125 12.7125C18.9042 12.5208 19 12.2833 19 12C19 11.7167 18.9042 11.4792 18.7125 11.2875C18.5208 11.0958 18.2833 11 18 11C17.7167 11 17.4792 11.0958 17.2875 11.2875C17.0958 11.4792 17 11.7167 17 12C17 12.2833 17.0958 12.5208 17.2875 12.7125C17.4792 12.9042 17.7167 13 18 13Z" }),
      " "
    ]
  }
), R3 = () => {
  const { toggleTheme: e, theme: r } = kr(), { setIsOpenWidget: t, reset: n, isActive: i } = N(), { t: o } = z(), { version: s } = Lr();
  return /* @__PURE__ */ a("div", { className: "flex gap-2 items-center justify-between w-full border-b-1 border-border p-4", children: [
    /* @__PURE__ */ a(
      "a",
      {
        tabIndex: -1,
        href: "https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras",
        target: "_blank",
        rel: "noreferrer noopener",
        className: G(
          "bg-primary min-w-9 size-9 relative overflow-hidden",
          "rounded-sm grid place-items-center hover:brightness-110"
        ),
        children: /* @__PURE__ */ a(Wu, { "aria-hidden": !0, size: 22, className: "text-white absolute size-7 bottom-0" })
      }
    ),
    /* @__PURE__ */ a("div", { className: "flex max-xxs:hidden flex-col ml-1 leading-tight relative -top-[1px]", children: [
      /* @__PURE__ */ a("p", { className: "text-sm xs:text-lg font-bold text-foreground truncate", children: [
        "VLibras ",
        /* @__PURE__ */ a("span", { className: "max-xxs:hidden", children: "Widget+" })
      ] }),
      /* @__PURE__ */ a("span", { className: "text-xs truncate font-medium text-muted-foreground", children: [
        "v",
        s
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "ml-auto flex items-center xs:gap-x-1", children: [
      i && /* @__PURE__ */ a(F1, { title: o("titles.reset"), "aria-label": o("titles.reset"), onClick: n, children: /* @__PURE__ */ a(r3, { "aria-hidden": !0, size: 22 }) }),
      /* @__PURE__ */ a(F1, { title: o("titles.toggle_theme"), onClick: e, children: [
        r === "light" && /* @__PURE__ */ a(n3, { "aria-hidden": !0, size: 22, iconTitle: o("titles.reset") }),
        r === "dark" && /* @__PURE__ */ a(i3, { "aria-hidden": !0, size: 22, iconTitle: o("titles.reset") })
      ] }),
      /* @__PURE__ */ a(
        F1,
        {
          title: o("titles.close"),
          "aria-label": o("titles.close"),
          variant: "destructive",
          onClick: () => t(!1),
          children: /* @__PURE__ */ a(Rr, { "aria-hidden": !0, size: 22 })
        }
      )
    ] })
  ] });
}, M3 = ({ children: e }) => /* @__PURE__ */ a("div", { className: G("overflow-y-auto space-y-4 rounded-sm p-4"), children: e }), me = Ie(({ children: e, disabled: r, className: t, variant: n, ...i }, o) => /* @__PURE__ */ a(
  "button",
  {
    tabIndex: r ? -1 : 0,
    ref: o,
    className: G(
      "cursor-pointer text-foreground rounded-md flex justify-center items-center gap-x-2",
      r && "pointer-events-none *:!pointer-events-none opacity-50",
      !!n && "px-4 h-9",
      n === "primary" && "bg-primary text-primary-foreground hover:brightness-110 outline-primary-foreground",
      n === "outline" && "border-1 border-foreground/20 hover:bg-foreground/5",
      n === "ghost" && "hover:bg-foreground/10",
      n === "secondary" && "bg-accent text-foreground hover:brightness-110",
      n === "destructive" && "bg-destructive text-destructive-foreground hover:brightness-110 outline-destructive-foreground",
      t
    ),
    type: i.type || "button",
    ...i,
    children: e
  }
)), I3 = Ie(
  ({ children: e, className: r, ...t }, n) => /* @__PURE__ */ a(
    me,
    {
      ref: n,
      type: "button",
      className: G(
        "w-full relative group rounded-full border-1 border-border hover:border-primary bg-white",
        "leading-none text-xs xs:text-sm justify-start p-1.5 pr-2 dark:bg-background",
        "[&>svg]:size-7 xs:[&>svg]:size-8 [&>svg]:bg-accent [&>svg]:fill-foreground [&>svg]:p-1 xs:[&>svg]:p-1.5 [&>svg]:rounded-full",
        "data-[active=true]:!border-primary data-[active=true]:!bg-primary/10",
        "data-[active=true]:[&>svg]:bg-primary data-[active=true]:[&>svg]:fill-primary-foreground",
        r
      ),
      ...t,
      children: e
    }
  )
), xt = Ie(
  ({ children: e, className: r, ...t }, n) => /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      className: G(
        "gap-4 grid xs:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] grid-cols-[repeat(auto-fill,minmax(132px,1fr))] auto-rows-min",
        r
      ),
      ...t,
      children: e
    }
  )
), pt = Ie(
  ({ children: e, className: r, ...t }, n) => /* @__PURE__ */ a(
    "p",
    {
      ref: n,
      className: G("text-foreground/80 text-base font-bold leading-normal col-[1/-1]", r),
      ...t,
      children: e
    }
  )
), P3 = [
  {
    nameKey: "profiles.blind",
    icon: f3
  },
  {
    nameKey: "profiles.dyslexic",
    icon: zs
  },
  {
    nameKey: "profiles.low_vision",
    icon: d3
  },
  {
    nameKey: "profiles.mobility",
    icon: h3
  },
  {
    nameKey: "profiles.cognitive",
    icon: g3
  }
], O3 = () => {
  const { t: e } = z(), { profile: r, reset: t } = N(), [n, i] = $(!0);
  P(() => {
    const { profile: s } = N.getState();
    s && o(s, !0);
  }, []);
  const o = (s, l) => {
    if (!l && r === s) return t();
    const c = { ...Zn, isActive: !0, profile: s };
    switch (s) {
      case "profiles.blind":
        break;
      case "profiles.dyslexic": {
        N.setState({
          ...c,
          dyslexicFont: "open-dyslexic",
          fontSize: "large",
          lineSpacing: "large"
        });
        break;
      }
      case "profiles.low_vision":
        N.setState({
          ...c,
          fontSize: "very_large",
          letterSpacing: "large",
          highlightLinks: !0,
          highlightTitles: !0
        });
        break;
      case "profiles.color_blind":
        N.setState({
          ...c,
          colorBlindFilter: "deuteranopia"
        });
        break;
      case "profiles.mobility":
        N.setState({
          ...c,
          largeCursor: !0
        });
        break;
      case "profiles.cognitive":
        N.setState({
          ...c,
          pauseAnimations: !0,
          disableSound: !0
        });
        break;
    }
  };
  return /* @__PURE__ */ a(
    "div",
    {
      style: { boxShadow: n ? "" : "2px 2px 15px -5px rgba(0, 0, 0, .2)" },
      className: G(
        "dark:bg-muted dark:!shadow-none border-1 rounded-lg",
        r && "border-primary/50",
        r && !n && "border-primary"
      ),
      children: [
        /* @__PURE__ */ a("div", { className: "flex items-center gap-x-2 p-2.5 pl-4 relative", children: [
          /* @__PURE__ */ a("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ a("span", { className: "text-xs sm:text-sm text-muted-foreground h-4.5 sm:h-[22px]", children: [
              r && /* @__PURE__ */ a(Jn, { className: "inline relative -top-[3px] mr-1.5 size-4 fill-primary" }),
              e(r || "deactivated")
            ] }),
            /* @__PURE__ */ a(pt, { className: "line-clamp-1 break-all text-base max-sm:text-sm col-auto", children: e("sections.navigation_profiles") })
          ] }),
          /* @__PURE__ */ a(
            me,
            {
              "aria-label": e("al.open_navigation_profiles"),
              title: e(n ? "expand" : "collapse"),
              onClick: () => i(!n),
              className: "size-7 sm:size-10 fill-muted-foreground absolute right-2 hover:fill-foreground",
              children: /* @__PURE__ */ a(u3, { className: G("transition-all rotate-180 size-5 sm:size-6", !n && "rotate-0") })
            }
          )
        ] }),
        /* @__PURE__ */ a(
          "div",
          {
            className: G(
              "grid xs:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2 transition-all overflow-hidden px-4",
              n ? "!max-h-0 [&>*]:!pointer-events-none" : "pb-4 pt-2 max-h-[400px]"
            ),
            children: P3.map(({ nameKey: s, icon: l }) => {
              const c = s === r, u = ["profiles.blind", "profiles.mobility"].includes(s);
              return /* @__PURE__ */ a(
                I3,
                {
                  disabled: u,
                  "aria-label": `${e("sections.navigation_profiles")}: ${e(s)}`,
                  onClick: () => o(s),
                  tabindex: n ? -1 : 0,
                  "data-active": c,
                  children: [
                    /* @__PURE__ */ a(l, {}),
                    /* @__PURE__ */ a("span", { children: e(s) })
                  ]
                },
                s
              );
            })
          }
        )
      ]
    }
  );
}, Ft = [
  { key: "medium", value: 1.25 },
  { key: "large", value: 1.5 },
  { key: "very_large", value: 2 }
];
function Us() {
  const { fontSize: e } = N(), { current: r } = Te(/* @__PURE__ */ new Map()), [t, n] = $(-1), [i, o] = $();
  P(() => {
    r.size || s();
    const u = Ft.find(({ key: p }) => p === e);
    n(Ft.findIndex(({ key: p }) => p === e)), o(u), c(e);
  }, [e]);
  const s = () => {
    document.querySelectorAll(
      "p, span, a, strong, h1, h2, h3, h4, h5, h6, b, em, i, code, mark, pre, blockquote, abbr, cite, q, time"
    ).forEach((u) => {
      if (!Yn(u)) return;
      const p = window.getComputedStyle(u);
      r.set(u, {
        fontSize: Number.parseFloat(p.fontSize),
        inlineFontSize: u.style.fontSize || ""
      });
    });
  }, l = () => {
    const u = t + 1 < Ft.length ? t + 1 : -1, p = Ft[u] || void 0;
    n(u), o(p), N.setState({ fontSize: p == null ? void 0 : p.key });
  }, c = (u) => {
    const p = Ft.find(({ key: d }) => d === u);
    r.forEach(({ inlineFontSize: d, fontSize: g }, v) => {
      v.style.fontSize = p ? `${g * p.value}px` : d || "";
    });
  };
  return { increaseFontSize: l, index: t, option: i };
}
const le = Ie(({ children: e, className: r, disabled: t, isActive: n, showActiveIndicator: i, ...o }) => {
  const s = Te(null);
  return P(() => {
    const l = s.current;
    l == null || l.addEventListener("click", () => N.setState({ profile: void 0 }));
  }, []), /* @__PURE__ */ a(
    me,
    {
      ref: s,
      className: G(
        "cursor-pointer bg-muted fill-foreground/80 text-foreground/80 border-1 border-border",
        "flex flex-col rounded-lg max-h-28 p-4 font-bold relative",
        "hover:text-foreground hover:fill-foreground hover:border-primary",
        n && "!bg-primary/5 border-primary [&>*]:text-primary [&>*]:fill-primary",
        t && "!cursor-not-allowed pointer-events-none *:pointer-events-none !text-muted-foreground opacity-80 !border-border !bg-muted/30",
        r
      ),
      ...o,
      children: [
        e,
        !t && i && n && /* @__PURE__ */ a(D3, {})
      ]
    }
  );
}), D3 = () => {
  const { t: e } = z();
  return /* @__PURE__ */ a("div", { "aria-hidden": !0, className: "absolute top-2 right-2 fill-primary", children: /* @__PURE__ */ a(Jn, { iconTitle: e("actived"), size: 16 }) });
}, st = ({ size: e, actived: r }) => {
  if (r !== -1)
    return /* @__PURE__ */ a("div", { className: "absolute top-2 right-2 flex items-center gap-1", children: Array.from({ length: e }).map((t, n) => /* @__PURE__ */ a(
      "div",
      {
        className: G(
          "w-2.5 h-2.5 rounded-full bg-primary/30",
          r === -1 && "bg-foreground/15",
          r === n && "bg-primary"
        )
      },
      n
    )) });
}, ce = Ie(
  ({ children: e, className: r, ...t }, n) => /* @__PURE__ */ a("span", { ref: n, className: G("text-[13.5px] xs:text-[15px] leading-tight font-semibold", r), ...t, children: e })
), ue = Ie(
  ({ children: e, className: r, ...t }, n) => /* @__PURE__ */ a(
    "span",
    {
      ref: n,
      className: G("text-[13px] xs:text-[13.5px] text-muted-foreground font-medium", r),
      ...t,
      children: e
    }
  )
), de = Ie(
  ({ children: e, className: r, ...t }, n) => /* @__PURE__ */ a("span", { ref: n, className: G("xs:mb-1 mt-1 [&_svg]:size-8", r), ...t, children: e })
), H3 = () => {
  const { t: e } = z(), { increaseFontSize: r, option: t, index: n } = Us();
  return /* @__PURE__ */ a(le, { "aria-label": e("al.font_increase"), isActive: !!t, onClick: r, children: [
    /* @__PURE__ */ a(st, { size: 3, actived: n }),
    /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(Uu, { iconTitle: e("al.font_increase") }) }),
    /* @__PURE__ */ a(ce, { children: e("font_increase") }),
    /* @__PURE__ */ a(ue, { children: e((t == null ? void 0 : t.key) || "deactivated") })
  ] });
}, B3 = "body.vwp-highlight-links a:not(.vwp-ignore,.vwp-ignore--text-color,.vwp-ignore--text-color *,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus){outline:2px solid yellow!important;font-weight:700!important;background:#000!important;transition:transform .3s ease!important;color:#fff!important}body.vwp-highlight-links a:not(.vwp-ignore,.vwp-ignore--text-color,.vwp-ignore--text-color *,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus) *:not(.vwp-ignore,.vwp-ignore--text-color,.vwp-ignore--text-color *,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus){color:#fff!important;background-color:#000!important}body.vwp-highlight-links a:not(.vwp-ignore,.vwp-ignore--text-color,.vwp-ignore--text-color *,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus) button{background:#000!important}body.vwp-highlight-links a:not(.vwp-ignore,.vwp-ignore--text-color,.vwp-ignore--text-color *,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus):hover{transform:scale(1.05)!important}", $1 = "vwp-highlight-links", F3 = "vwp-highlight-links-style", $3 = () => {
  const { highlightLinks: e } = N();
  return P(() => {
    e && Ke(B3, F3);
  }, [e]), P(() => (document.body.classList.toggle($1, !!e), () => document.body.classList.remove($1)), [e]), { toggle: (t) => {
    const n = t !== void 0 ? t : !e;
    document.body.classList.toggle($1, n), N.setState({ highlightLinks: n });
  }, isActive: !!e };
}, z3 = () => {
  const { t: e } = z(), { toggle: r, isActive: t } = $3();
  return /* @__PURE__ */ a(le, { showActiveIndicator: !0, "aria-label": e("al.highlight_links"), isActive: t, onClick: () => r(), children: [
    /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(Vu, { iconTitle: e("al.highlight_links") }) }),
    /* @__PURE__ */ a(ce, { children: e("highlight_links") }),
    /* @__PURE__ */ a(ue, { children: e(t ? "actived" : "deactivated") })
  ] });
}, $t = [
  { key: "medium", value: 1.5 },
  { key: "large", value: 3 },
  { key: "very_large", value: 6 }
];
function Vs() {
  const { letterSpacing: e } = N(), { current: r } = Te(/* @__PURE__ */ new Map()), [t, n] = $(-1), [i, o] = $();
  P(() => {
    r.size || s();
    const u = $t.find(({ key: p }) => p === e);
    n($t.findIndex(({ key: p }) => p === e)), o(u), c(e);
  }, [e]);
  const s = () => {
    document.querySelectorAll(
      "p, span, a, strong, h1, h2, h3, h4, h5, h6, b, em, i, code, mark, pre, blockquote, abbr, cite, q, time"
    ).forEach((u) => {
      if (!Yn(u)) return;
      const p = window.getComputedStyle(u);
      r.set(u, {
        letterSpacing: Number.parseFloat(p.letterSpacing) || 1,
        inlineLetterSpacing: u.style.letterSpacing || ""
      });
    });
  }, l = () => {
    const u = t + 1 < $t.length ? t + 1 : -1, p = $t[u] || void 0;
    n(u), o(p), N.setState({ letterSpacing: p == null ? void 0 : p.key });
  }, c = (u) => {
    const p = $t.find(({ key: d }) => d === u);
    r.forEach(({ inlineLetterSpacing: d, letterSpacing: g }, v) => {
      v.style.letterSpacing = p ? `${g * p.value}px` : d ?? "";
    });
  };
  return { increaseLetterSpacing: l, index: t, option: i };
}
const U3 = () => {
  const { t: e } = z(), { increaseLetterSpacing: r, option: t, index: n } = Vs();
  return /* @__PURE__ */ a(le, { "aria-label": e("al.letter_spacing"), isActive: !!t, onClick: r, children: [
    /* @__PURE__ */ a(st, { size: 3, actived: n }),
    /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(ju, { iconTitle: e("al.letter_spacing") }) }),
    /* @__PURE__ */ a(ce, { children: e("letter_spacing") }),
    /* @__PURE__ */ a(ue, { children: e((t == null ? void 0 : t.key) || "deactivated") })
  ] });
}, V3 = () => {
  const { readingMask: e } = N();
  return { toggle: (t) => {
    const n = t !== void 0 ? t : !e;
    N.setState({ readingMask: n, readingGuide: !1 });
  }, isActive: !!e };
}, G3 = () => {
  const { t: e } = z(), { toggle: r, isActive: t } = V3();
  return /* @__PURE__ */ a(le, { showActiveIndicator: !0, "aria-label": e("al.reading_mask"), isActive: t, onClick: () => r(), children: [
    /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(qu, { iconTitle: e("al.reading_mask") }) }),
    /* @__PURE__ */ a(ce, { children: e("reading_mask") }),
    /* @__PURE__ */ a(ue, { children: e(t ? "actived" : "deactivated") })
  ] });
}, j3 = "body.vwp-highlight-titles :is(h1,h2,h3,h4,h5,h6):not(.vwp-ignore,.vwp-ignore--text-color,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus){text-decoration:underline!important;color:#1351b4!important;font-weight:700!important}", z1 = "vwp-highlight-titles", q3 = "vwp-highlight-titles-style", W3 = () => {
  const { highlightTitles: e } = N();
  return P(() => {
    e && Ke(j3, q3);
  }, [e]), P(() => (document.body.classList.toggle(z1, !!e), () => document.body.classList.remove(z1)), [e]), { toggle: (t) => {
    const n = t !== void 0 ? t : !e;
    document.body.classList.toggle(z1, n), N.setState({ highlightTitles: n });
  }, isActive: !!e };
}, Z3 = () => {
  const { t: e } = z(), { toggle: r, isActive: t } = W3();
  return /* @__PURE__ */ a(
    le,
    {
      showActiveIndicator: !0,
      "aria-label": e("al.highlight_titles"),
      isActive: t,
      onClick: () => r(),
      children: [
        /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(Ku, { iconTitle: e("al.highlight_titles") }) }),
        /* @__PURE__ */ a(ce, { children: e("highlight_titles") }),
        /* @__PURE__ */ a(ue, { children: e(t ? "actived" : "deactivated") })
      ]
    }
  );
}, X3 = "body.vwp-text-color *:not(.vwp-ignore,.vwp-ignore--text-color,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus){color:var(--vwp-text-color)!important}", $o = "vwp-text-color", Y3 = "--vwp-text-color", K3 = "vwp-text-color-style", J3 = () => {
  const [e, r] = $(!1), { textColor: t } = N();
  P(() => {
    t != null && t.isActive && Ke(X3, K3);
  }, [t]), P(() => {
    if (!(t != null && t.isActive) || e) return;
    document.querySelectorAll(
      "body *:not(.vwp-ignore, .sr-only, .sr-only *, [vw], [vw] *, vlibras-widget-plus):where(a, span, p, h1, h2, h3, h4, h5, h6, strong, em, label)"
    ).forEach((s) => {
      const l = window.getComputedStyle(s).color;
      ["rgba(0, 0, 0, 0)", "rgb(0, 0, 0)"].includes(l) && s.classList.add("vwp-ignore--text-color");
    }), r(!0);
  }, [t, e]), P(() => {
    if (t != null && t.color)
      return document.body.classList.toggle($o, !!(t != null && t.isActive)), document.body.style.setProperty(Y3, t.color), () => document.body.classList.remove($o);
  }, [t]);
  const n = (o) => {
    (o !== void 0 ? o : !(t != null && t.isActive)) ? i(t == null ? void 0 : t.color) : N.setState({
      textColor: {
        isActive: !1,
        color: t == null ? void 0 : t.color
      }
    });
  }, i = (o) => {
    o && N.setState({ textColor: { color: o, isActive: !0 } });
  };
  return { toggle: n, apply: i, textColor: t, isActive: t == null ? void 0 : t.isActive };
}, Q3 = () => {
  const e = Te(null), { path: r } = Lr(), { t } = z(), { apply: n, toggle: i, textColor: o, isActive: s } = J3(), l = () => {
    var p;
    s || (p = e.current) == null || p.click(), i();
  }, c = () => {
    var p;
    return (p = e.current) == null ? void 0 : p.click();
  }, u = (p) => {
    const d = p.target.value;
    n(d);
  };
  return /* @__PURE__ */ a(le, { "aria-label": t("al.text_color"), isActive: s, onClick: l, children: [
    /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(Zu, { iconTitle: t("al.text_color") }) }),
    /* @__PURE__ */ a(ce, { children: t("text_color") }),
    /* @__PURE__ */ a(ue, { children: t(s ? "custom" : "default") }),
    /* @__PURE__ */ a(
      "div",
      {
        "aria-label": t("color_picker"),
        tabindex: 0,
        onClick: c,
        onKeyDown: () => {
        },
        style: { backgroundColor: (o == null ? void 0 : o.color) || "#000" },
        className: "absolute top-2 right-2 size-6 rounded-full border-1 grid place-content-center",
        children: !(o != null && o.color) && /* @__PURE__ */ a("img", { src: `${r}/assets/images/color-picker.png`, alt: "" })
      }
    ),
    /* @__PURE__ */ a(
      "input",
      {
        ref: e,
        onChange: u,
        type: "color",
        className: "pointer-events-none absolute top-2 right-2 size-6 sr-only"
      }
    )
  ] });
}, ed = "body.vwp-large-cursor *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus){cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAA0CAYAAAAACoF6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJtSURBVHgBzZmN0aIwEIbfuwoogQ6kA7CCswPmKuDrADqwBK4DSsAOtAPsAK0glwXDxJiEAAF8ZnZGIMLjZvOjAkCBL4Lhi4TYK0p8AUyKikeAHWFKXPcUYppoeITYAfZNQoPA+XzeXWh4OFGW5a5CbzJEXdcsCAJZqOURYQM+ZIjr9aoTSrAyWhmiaRoWhqHabSlWxChjEfrBSlhlLEIFVmBUZkshJxmibVsWRdGqQs4yQuh0OqlCZ3hikowgTVNVqIQHZskQRVF4X/Fny1iEQsxkkYxBqJkrtFjGp5AXGcLHiu9NhqiqSl1gSch5xfcqQxhWfCch7zLE3BV/FRmL0M8uMhahYheZqUKryxAuK/5vbMD9fu+CL67go0y+lENa8X+hN+zgHwBzeDwe3cNut9vwWhw/n8/u3Aj/ePztHLCwm7IsU9M/NRrKkJfMXC4XHI9HWxNKzZ3HTXotjp+vc72DS2aoAGlmNZEkifxJax5/0M+6k/Y3ozJiaNIDTSjf01vMxCpD2ZDnCMqQKXPKepRgBkYZ2hIoD2B5nhuzQ9fw3lV+ZJQbD0FyJiiLSvvJ++EPGc1QbdDXQXdMexYTSiHnmMhbPcRxrIqIHX8uztkKmX5OwYJCHt6sWcxKqV0gX6OHmlhSyKZZUZfiSlynrjSxpJB1IqmhbQKpkG3DXLnf9D0w+j6OR9rXoj1NdL4LWR4xoUP7TLyH9icmNDOy0zAXIyaEGwGkYS4XMnUPSRwOB13XZy43LzF9csohDXMSooJWZ2u8F/Fqv5ZGwOgepX1JH7ABQyHjMwvUJZv+GZJoJGLsCI1A6govWfgPEfBNVkVYxn8AAAAASUVORK5CYII=),pointer!important}", U1 = "vwp-large-cursor", td = "vwp-large-cursor-style", rd = () => {
  const { largeCursor: e } = N();
  return P(() => {
    e && Ke(ed, td);
  }, [e]), P(() => (document.body.classList.toggle(U1, !!e), () => document.body.classList.remove(U1)), [e]), { toggle: (t) => {
    const n = t !== void 0 ? t : !e;
    document.body.classList.toggle(U1, n), N.setState({ largeCursor: n, textReader: void 0 });
  }, isActive: !!e };
}, nd = () => {
  const { t: e } = z(), { toggle: r, isActive: t } = rd();
  return Gn() ? null : /* @__PURE__ */ a(le, { showActiveIndicator: !0, "aria-label": e("al.large_cursor"), isActive: t, onClick: () => r(), children: [
    /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(Yu, { iconTitle: e("al.large_cursor") }) }),
    /* @__PURE__ */ a(ce, { children: e("large_cursor") }),
    /* @__PURE__ */ a(ue, { children: e(t ? "actived" : "deactivated") })
  ] });
}, zt = [
  { key: "medium", value: 1.1 },
  { key: "large", value: 1.2 },
  { key: "very_large", value: 1.3 }
];
function Gs() {
  const { lineSpacing: e } = N(), { current: r } = Te(/* @__PURE__ */ new Map()), [t, n] = $(-1), [i, o] = $();
  P(() => {
    r.size || s();
    const u = zt.find(({ key: p }) => p === e);
    n(zt.findIndex(({ key: p }) => p === e)), o(u), c(e);
  }, [e]);
  const s = () => {
    document.querySelectorAll(
      "p, span, a, strong, h1, h2, h3, h4, h5, h6, b, em, i, code, mark, pre, blockquote, abbr, cite, q, time"
    ).forEach((u) => {
      if (!Yn(u)) return;
      const p = window.getComputedStyle(u), d = Number.parseFloat(p.fontSize), g = p.lineHeight === "normal" ? d * 1.2 : Number.parseFloat(p.lineHeight);
      r.set(u, {
        lineHeight: g,
        inlineLineHeight: u.style.lineHeight || ""
      });
    });
  }, l = () => {
    const u = t + 1 < zt.length ? t + 1 : -1, p = zt[u] || void 0;
    n(u), o(p), N.setState({ lineSpacing: p == null ? void 0 : p.key });
  }, c = (u) => {
    const p = zt.find(({ key: d }) => d === u);
    r.forEach(({ lineHeight: d, inlineLineHeight: g }, v) => {
      let x = d;
      const _ = window.getComputedStyle(v), A = Number.parseFloat(_.fontSize);
      _.lineHeight.endsWith("px") && (x = Number.parseFloat(_.lineHeight) / A), v.style.lineHeight = p ? `${x * p.value}` : g || "";
    });
  };
  return { increaseLineSpacing: l, index: t, option: i };
}
const id = () => {
  const { t: e } = z(), { increaseLineSpacing: r, option: t, index: n } = Gs();
  return /* @__PURE__ */ a(le, { "aria-label": e("al.line_spacing"), isActive: !!t, onClick: r, children: [
    /* @__PURE__ */ a(st, { size: 3, actived: n }),
    /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(t3, { iconTitle: e("al.line_spacing") }) }),
    /* @__PURE__ */ a(ce, { children: e("line_spacing") }),
    /* @__PURE__ */ a(ue, { children: e((t == null ? void 0 : t.key) || "deactivated") })
  ] });
}, od = "body.vwp-hide-images *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus) img,body.vwp-hide-images *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus) figure{display:none!important}", V1 = "vwp-hide-images", ad = "vwp-hide-images-style", sd = () => {
  const { hideImages: e } = N();
  return P(() => {
    e && Ke(od, ad);
  }, [e]), P(() => (document.body.classList.toggle(V1, !!e), () => document.body.classList.remove(V1)), [e]), { toggle: (t) => {
    const n = t !== void 0 ? t : !e;
    document.body.classList.toggle(V1, n), N.setState({ hideImages: n });
  }, isActive: !!e };
}, ld = () => {
  const { t: e } = z(), { toggle: r, isActive: t } = sd();
  return /* @__PURE__ */ a(le, { showActiveIndicator: !0, "aria-label": e("al.hide_images"), isActive: t, onClick: () => r(), children: [
    /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(Xu, { iconTitle: e("al.hide_images") }) }),
    /* @__PURE__ */ a(ce, { children: e("hide_images") }),
    /* @__PURE__ */ a(ue, { children: e(t ? "actived" : "deactivated") })
  ] });
}, cd = "body.vwp-pause-animations *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus) *{animation-play-state:paused!important}", G1 = "vwp-pause-animations", ud = "vwp-pause-animations-style", dd = () => {
  const { pauseAnimations: e } = N();
  return P(() => {
    e && Ke(cd, ud);
  }, [e]), P(() => (document.body.classList.toggle(G1, !!e), () => document.body.classList.remove(G1)), [e]), { toggle: (t) => {
    const n = t !== void 0 ? t : !e;
    document.body.classList.toggle(G1, n), N.setState({ pauseAnimations: n });
  }, isActive: !!e };
}, pd = () => {
  const { t: e } = z(), { toggle: r, isActive: t } = dd();
  return /* @__PURE__ */ a(
    le,
    {
      showActiveIndicator: !0,
      "aria-label": e("al.pause_animations"),
      isActive: t,
      onClick: () => r(),
      children: [
        /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(Ju, { iconTitle: e("al.pause_animations") }) }),
        /* @__PURE__ */ a(ce, { children: e("pause_animations") }),
        /* @__PURE__ */ a(ue, { children: e(t ? "actived" : "deactivated") })
      ]
    }
  );
}, hd = () => {
  const { readingGuide: e } = N();
  return { toggle: (t) => {
    const n = t !== void 0 ? t : !e;
    N.setState({ readingGuide: n, readingMask: !1 });
  }, isActive: !!e };
}, zo = () => {
  const { t: e } = z(), { toggle: r, isActive: t } = hd();
  return /* @__PURE__ */ a(le, { showActiveIndicator: !0, "aria-label": e("al.reading_guide"), isActive: t, onClick: () => r(), children: [
    /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(e3, { iconTitle: e("al.reading_guide") }) }),
    /* @__PURE__ */ a(ce, { children: e("reading_guide") }),
    /* @__PURE__ */ a(ue, { children: e(t ? "actived" : "deactivated") })
  ] });
}, fd = "#vwp-reader-mode-view::-webkit-scrollbar{height:10px;width:10px}#vwp-reader-mode-view::-webkit-scrollbar-track{background-color:transparent}#vwp-reader-mode-view::-webkit-scrollbar-thumb{border-radius:10000px;border:1px solid transparent;background-clip:padding-box;border-color:transparent;background-color:#333}#vwp-reader-mode-view[data-theme=light]::-webkit-scrollbar-thumb{background-color:#bbb}#vwp-reader-mode-view{display:none;flex-direction:column;z-index:2147483630;position:fixed;align-items:center;top:0;right:0;bottom:0;left:0;overflow-y:auto}#vwp-reader-mode-view[data-active=true]{display:flex}#vwp-reader-mode-view[data-theme=light]{color:#111;background-color:#fff}#vwp-reader-mode-view[data-theme=dark]{color:#eee;background-color:#0a0a0a}#vwp-reader-mode-view[highlight-titles=true] h1,#vwp-reader-mode-view[highlight-titles=true] h2,#vwp-reader-mode-view[highlight-titles=true] h3,#vwp-reader-mode-view[highlight-titles=true] h4,#vwp-reader-mode-view[highlight-titles=true] h5,#vwp-reader-mode-view[highlight-titles=true] h6{text-decoration:underline!important;color:#1351b4!important;font-weight:700!important}#vwp-reader-mode-view[highlight-links=true] a:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus){outline:2px solid yellow!important;font-weight:700!important;background:#000!important;transition:transform .3s ease!important;color:#fff!important}#vwp-reader-mode-view[highlight-links=true] a:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus) *{color:#fff!important}#vwp-reader-mode-view[highlight-links=true] a:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus) button{background:#000!important}#vwp-reader-mode-view[highlight-links=true] a:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus):hover{transform:scale(1.05)!important}#vwp-reader-mode-view *{color:inherit;background-color:inherit}#vwp-reader-mode-view img{display:none}#vwp-reader-mode-view header{display:flex;flex-direction:column}#vwp-reader-mode-view header p{opacity:70%}#vwp-reader-mode-view a{color:#2362c7}#vwp-reader-mode-view a:hover{filter:brightness(1.2)}#vwp-reader-mode-view .vwp-reader-mode-container{padding:48px;display:flex;flex-direction:column;gap:24px;max-width:1024px}@media (max-width: 640px){#vwp-reader-mode-view .vwp-reader-mode-container{padding:24px}}#vwp-reader-mode-view .vwp-reader-mode-container .vwp-reader-mode-content p{margin-bottom:16px}#vwp-reader-mode-view *{background-color:transparent;border:none;outline:transparent;padding:0;margin:0}body.vwp-reader-mode{overflow:hidden!important;height:100dvh!important}";
var Ut = {}, At = {}, Cr = {}, ut = {}, dt = {}, j1 = {}, Uo;
function js() {
  return Uo || (Uo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Doctype = e.CDATA = e.Tag = e.Style = e.Script = e.Comment = e.Directive = e.Text = e.Root = e.isTag = e.ElementType = void 0;
    var r;
    (function(n) {
      n.Root = "root", n.Text = "text", n.Directive = "directive", n.Comment = "comment", n.Script = "script", n.Style = "style", n.Tag = "tag", n.CDATA = "cdata", n.Doctype = "doctype";
    })(r = e.ElementType || (e.ElementType = {}));
    function t(n) {
      return n.type === r.Tag || n.type === r.Script || n.type === r.Style;
    }
    e.isTag = t, e.Root = r.Root, e.Text = r.Text, e.Directive = r.Directive, e.Comment = r.Comment, e.Script = r.Script, e.Style = r.Style, e.Tag = r.Tag, e.CDATA = r.CDATA, e.Doctype = r.Doctype;
  }(j1)), j1;
}
var U = {}, Vo;
function Go() {
  if (Vo) return U;
  Vo = 1;
  var e = U && U.__extends || /* @__PURE__ */ function() {
    var h = function(f, C) {
      return h = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(T, R) {
        T.__proto__ = R;
      } || function(T, R) {
        for (var k in R) Object.prototype.hasOwnProperty.call(R, k) && (T[k] = R[k]);
      }, h(f, C);
    };
    return function(f, C) {
      if (typeof C != "function" && C !== null)
        throw new TypeError("Class extends value " + String(C) + " is not a constructor or null");
      h(f, C);
      function T() {
        this.constructor = f;
      }
      f.prototype = C === null ? Object.create(C) : (T.prototype = C.prototype, new T());
    };
  }(), r = U && U.__assign || function() {
    return r = Object.assign || function(h) {
      for (var f, C = 1, T = arguments.length; C < T; C++) {
        f = arguments[C];
        for (var R in f) Object.prototype.hasOwnProperty.call(f, R) && (h[R] = f[R]);
      }
      return h;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(U, "__esModule", { value: !0 }), U.cloneNode = U.hasChildren = U.isDocument = U.isDirective = U.isComment = U.isText = U.isCDATA = U.isTag = U.Element = U.Document = U.CDATA = U.NodeWithChildren = U.ProcessingInstruction = U.Comment = U.Text = U.DataNode = U.Node = void 0;
  var t = /* @__PURE__ */ js(), n = (
    /** @class */
    function() {
      function h() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
      }
      return Object.defineProperty(h.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.parent;
        },
        set: function(f) {
          this.parent = f;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(h.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.prev;
        },
        set: function(f) {
          this.prev = f;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(h.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.next;
        },
        set: function(f) {
          this.next = f;
        },
        enumerable: !1,
        configurable: !0
      }), h.prototype.cloneNode = function(f) {
        return f === void 0 && (f = !1), y(this, f);
      }, h;
    }()
  );
  U.Node = n;
  var i = (
    /** @class */
    function(h) {
      e(f, h);
      function f(C) {
        var T = h.call(this) || this;
        return T.data = C, T;
      }
      return Object.defineProperty(f.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.data;
        },
        set: function(C) {
          this.data = C;
        },
        enumerable: !1,
        configurable: !0
      }), f;
    }(n)
  );
  U.DataNode = i;
  var o = (
    /** @class */
    function(h) {
      e(f, h);
      function f() {
        var C = h !== null && h.apply(this, arguments) || this;
        return C.type = t.ElementType.Text, C;
      }
      return Object.defineProperty(f.prototype, "nodeType", {
        get: function() {
          return 3;
        },
        enumerable: !1,
        configurable: !0
      }), f;
    }(i)
  );
  U.Text = o;
  var s = (
    /** @class */
    function(h) {
      e(f, h);
      function f() {
        var C = h !== null && h.apply(this, arguments) || this;
        return C.type = t.ElementType.Comment, C;
      }
      return Object.defineProperty(f.prototype, "nodeType", {
        get: function() {
          return 8;
        },
        enumerable: !1,
        configurable: !0
      }), f;
    }(i)
  );
  U.Comment = s;
  var l = (
    /** @class */
    function(h) {
      e(f, h);
      function f(C, T) {
        var R = h.call(this, T) || this;
        return R.name = C, R.type = t.ElementType.Directive, R;
      }
      return Object.defineProperty(f.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: !1,
        configurable: !0
      }), f;
    }(i)
  );
  U.ProcessingInstruction = l;
  var c = (
    /** @class */
    function(h) {
      e(f, h);
      function f(C) {
        var T = h.call(this) || this;
        return T.children = C, T;
      }
      return Object.defineProperty(f.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function() {
          var C;
          return (C = this.children[0]) !== null && C !== void 0 ? C : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(f.prototype, "lastChild", {
        /** Last child of the node. */
        get: function() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(f.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.children;
        },
        set: function(C) {
          this.children = C;
        },
        enumerable: !1,
        configurable: !0
      }), f;
    }(n)
  );
  U.NodeWithChildren = c;
  var u = (
    /** @class */
    function(h) {
      e(f, h);
      function f() {
        var C = h !== null && h.apply(this, arguments) || this;
        return C.type = t.ElementType.CDATA, C;
      }
      return Object.defineProperty(f.prototype, "nodeType", {
        get: function() {
          return 4;
        },
        enumerable: !1,
        configurable: !0
      }), f;
    }(c)
  );
  U.CDATA = u;
  var p = (
    /** @class */
    function(h) {
      e(f, h);
      function f() {
        var C = h !== null && h.apply(this, arguments) || this;
        return C.type = t.ElementType.Root, C;
      }
      return Object.defineProperty(f.prototype, "nodeType", {
        get: function() {
          return 9;
        },
        enumerable: !1,
        configurable: !0
      }), f;
    }(c)
  );
  U.Document = p;
  var d = (
    /** @class */
    function(h) {
      e(f, h);
      function f(C, T, R, k) {
        R === void 0 && (R = []), k === void 0 && (k = C === "script" ? t.ElementType.Script : C === "style" ? t.ElementType.Style : t.ElementType.Tag);
        var B = h.call(this, R) || this;
        return B.name = C, B.attribs = T, B.type = k, B;
      }
      return Object.defineProperty(f.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(f.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.name;
        },
        set: function(C) {
          this.name = C;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(f.prototype, "attributes", {
        get: function() {
          var C = this;
          return Object.keys(this.attribs).map(function(T) {
            var R, k;
            return {
              name: T,
              value: C.attribs[T],
              namespace: (R = C["x-attribsNamespace"]) === null || R === void 0 ? void 0 : R[T],
              prefix: (k = C["x-attribsPrefix"]) === null || k === void 0 ? void 0 : k[T]
            };
          });
        },
        enumerable: !1,
        configurable: !0
      }), f;
    }(c)
  );
  U.Element = d;
  function g(h) {
    return (0, t.isTag)(h);
  }
  U.isTag = g;
  function v(h) {
    return h.type === t.ElementType.CDATA;
  }
  U.isCDATA = v;
  function x(h) {
    return h.type === t.ElementType.Text;
  }
  U.isText = x;
  function _(h) {
    return h.type === t.ElementType.Comment;
  }
  U.isComment = _;
  function A(h) {
    return h.type === t.ElementType.Directive;
  }
  U.isDirective = A;
  function E(h) {
    return h.type === t.ElementType.Root;
  }
  U.isDocument = E;
  function b(h) {
    return Object.prototype.hasOwnProperty.call(h, "children");
  }
  U.hasChildren = b;
  function y(h, f) {
    f === void 0 && (f = !1);
    var C;
    if (x(h))
      C = new o(h.data);
    else if (_(h))
      C = new s(h.data);
    else if (g(h)) {
      var T = f ? w(h.children) : [], R = new d(h.name, r({}, h.attribs), T);
      T.forEach(function(I) {
        return I.parent = R;
      }), h.namespace != null && (R.namespace = h.namespace), h["x-attribsNamespace"] && (R["x-attribsNamespace"] = r({}, h["x-attribsNamespace"])), h["x-attribsPrefix"] && (R["x-attribsPrefix"] = r({}, h["x-attribsPrefix"])), C = R;
    } else if (v(h)) {
      var T = f ? w(h.children) : [], k = new u(T);
      T.forEach(function(L) {
        return L.parent = k;
      }), C = k;
    } else if (E(h)) {
      var T = f ? w(h.children) : [], B = new p(T);
      T.forEach(function(L) {
        return L.parent = B;
      }), h["x-mode"] && (B["x-mode"] = h["x-mode"]), C = B;
    } else if (A(h)) {
      var M = new l(h.name, h.data);
      h["x-name"] != null && (M["x-name"] = h["x-name"], M["x-publicId"] = h["x-publicId"], M["x-systemId"] = h["x-systemId"]), C = M;
    } else
      throw new Error("Not implemented yet: ".concat(h.type));
    return C.startIndex = h.startIndex, C.endIndex = h.endIndex, h.sourceCodeLocation != null && (C.sourceCodeLocation = h.sourceCodeLocation), C;
  }
  U.cloneNode = y;
  function w(h) {
    for (var f = h.map(function(T) {
      return y(T, !0);
    }), C = 1; C < f.length; C++)
      f[C].prev = f[C - 1], f[C - 1].next = f[C];
    return f;
  }
  return U;
}
var jo;
function qs() {
  return jo || (jo = 1, function(e) {
    var r = dt && dt.__createBinding || (Object.create ? function(l, c, u, p) {
      p === void 0 && (p = u);
      var d = Object.getOwnPropertyDescriptor(c, u);
      (!d || ("get" in d ? !c.__esModule : d.writable || d.configurable)) && (d = { enumerable: !0, get: function() {
        return c[u];
      } }), Object.defineProperty(l, p, d);
    } : function(l, c, u, p) {
      p === void 0 && (p = u), l[p] = c[u];
    }), t = dt && dt.__exportStar || function(l, c) {
      for (var u in l) u !== "default" && !Object.prototype.hasOwnProperty.call(c, u) && r(c, l, u);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DomHandler = void 0;
    var n = /* @__PURE__ */ js(), i = /* @__PURE__ */ Go();
    t(/* @__PURE__ */ Go(), e);
    var o = {
      withStartIndices: !1,
      withEndIndices: !1,
      xmlMode: !1
    }, s = (
      /** @class */
      function() {
        function l(c, u, p) {
          this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof u == "function" && (p = u, u = o), typeof c == "object" && (u = c, c = void 0), this.callback = c ?? null, this.options = u ?? o, this.elementCB = p ?? null;
        }
        return l.prototype.onparserinit = function(c) {
          this.parser = c;
        }, l.prototype.onreset = function() {
          this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
        }, l.prototype.onend = function() {
          this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
        }, l.prototype.onerror = function(c) {
          this.handleCallback(c);
        }, l.prototype.onclosetag = function() {
          this.lastNode = null;
          var c = this.tagStack.pop();
          this.options.withEndIndices && (c.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(c);
        }, l.prototype.onopentag = function(c, u) {
          var p = this.options.xmlMode ? n.ElementType.Tag : void 0, d = new i.Element(c, u, void 0, p);
          this.addNode(d), this.tagStack.push(d);
        }, l.prototype.ontext = function(c) {
          var u = this.lastNode;
          if (u && u.type === n.ElementType.Text)
            u.data += c, this.options.withEndIndices && (u.endIndex = this.parser.endIndex);
          else {
            var p = new i.Text(c);
            this.addNode(p), this.lastNode = p;
          }
        }, l.prototype.oncomment = function(c) {
          if (this.lastNode && this.lastNode.type === n.ElementType.Comment) {
            this.lastNode.data += c;
            return;
          }
          var u = new i.Comment(c);
          this.addNode(u), this.lastNode = u;
        }, l.prototype.oncommentend = function() {
          this.lastNode = null;
        }, l.prototype.oncdatastart = function() {
          var c = new i.Text(""), u = new i.CDATA([c]);
          this.addNode(u), c.parent = u, this.lastNode = c;
        }, l.prototype.oncdataend = function() {
          this.lastNode = null;
        }, l.prototype.onprocessinginstruction = function(c, u) {
          var p = new i.ProcessingInstruction(c, u);
          this.addNode(p);
        }, l.prototype.handleCallback = function(c) {
          if (typeof this.callback == "function")
            this.callback(c, this.dom);
          else if (c)
            throw c;
        }, l.prototype.addNode = function(c) {
          var u = this.tagStack[this.tagStack.length - 1], p = u.children[u.children.length - 1];
          this.options.withStartIndices && (c.startIndex = this.parser.startIndex), this.options.withEndIndices && (c.endIndex = this.parser.endIndex), u.children.push(c), p && (c.prev = p, p.next = c), c.parent = u, this.lastNode = null;
        }, l;
      }()
    );
    e.DomHandler = s, e.default = s;
  }(dt)), dt;
}
var q1 = {}, qo;
function gd() {
  return qo || (qo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CARRIAGE_RETURN_PLACEHOLDER_REGEX = e.CARRIAGE_RETURN_PLACEHOLDER = e.CARRIAGE_RETURN_REGEX = e.CARRIAGE_RETURN = e.CASE_SENSITIVE_TAG_NAMES_MAP = e.CASE_SENSITIVE_TAG_NAMES = void 0, e.CASE_SENSITIVE_TAG_NAMES = [
      "animateMotion",
      "animateTransform",
      "clipPath",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "foreignObject",
      "linearGradient",
      "radialGradient",
      "textPath"
    ], e.CASE_SENSITIVE_TAG_NAMES_MAP = e.CASE_SENSITIVE_TAG_NAMES.reduce(function(r, t) {
      return r[t.toLowerCase()] = t, r;
    }, {}), e.CARRIAGE_RETURN = "\r", e.CARRIAGE_RETURN_REGEX = new RegExp(e.CARRIAGE_RETURN, "g"), e.CARRIAGE_RETURN_PLACEHOLDER = "__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_".concat(Date.now(), "__"), e.CARRIAGE_RETURN_PLACEHOLDER_REGEX = new RegExp(e.CARRIAGE_RETURN_PLACEHOLDER, "g");
  }(q1)), q1;
}
var Wo;
function Ws() {
  if (Wo) return ut;
  Wo = 1, Object.defineProperty(ut, "__esModule", { value: !0 }), ut.formatAttributes = n, ut.escapeSpecialCharacters = o, ut.revertEscapedCharacters = s, ut.formatDOM = l;
  var e = /* @__PURE__ */ qs(), r = gd();
  function t(c) {
    return r.CASE_SENSITIVE_TAG_NAMES_MAP[c];
  }
  function n(c) {
    for (var u = {}, p = 0, d = c.length; p < d; p++) {
      var g = c[p];
      u[g.name] = g.value;
    }
    return u;
  }
  function i(c) {
    c = c.toLowerCase();
    var u = t(c);
    return u || c;
  }
  function o(c) {
    return c.replace(r.CARRIAGE_RETURN_REGEX, r.CARRIAGE_RETURN_PLACEHOLDER);
  }
  function s(c) {
    return c.replace(r.CARRIAGE_RETURN_PLACEHOLDER_REGEX, r.CARRIAGE_RETURN);
  }
  function l(c, u, p) {
    u === void 0 && (u = null);
    for (var d = [], g, v = 0, x = c.length; v < x; v++) {
      var _ = c[v];
      switch (_.nodeType) {
        case 1: {
          var A = i(_.nodeName);
          g = new e.Element(A, n(_.attributes)), g.children = l(
            // template children are on content
            A === "template" ? _.content.childNodes : _.childNodes,
            g
          );
          break;
        }
        case 3:
          g = new e.Text(s(_.nodeValue));
          break;
        case 8:
          g = new e.Comment(_.nodeValue);
          break;
        default:
          continue;
      }
      var E = d[v - 1] || null;
      E && (E.next = g), g.parent = u, g.prev = E, g.next = null, d.push(g);
    }
    return p && (g = new e.ProcessingInstruction(p.substring(0, p.indexOf(" ")).toLowerCase(), p), g.next = d[0] || null, g.parent = u, d.unshift(g), d[1] && (d[1].prev = d[0])), d;
  }
  return ut;
}
var Zo;
function md() {
  if (Zo) return Cr;
  Zo = 1, Object.defineProperty(Cr, "__esModule", { value: !0 }), Cr.default = _;
  var e = Ws(), r = "html", t = "head", n = "body", i = /<([a-zA-Z]+[0-9]?)/, o = /<head[^]*>/i, s = /<body[^]*>/i, l = function(A, E) {
    throw new Error("This browser does not support `document.implementation.createHTMLDocument`");
  }, c = function(A, E) {
    throw new Error("This browser does not support `DOMParser.prototype.parseFromString`");
  }, u = typeof window == "object" && window.DOMParser;
  if (typeof u == "function") {
    var p = new u(), d = "text/html";
    c = function(A, E) {
      return E && (A = "<".concat(E, ">").concat(A, "</").concat(E, ">")), p.parseFromString(A, d);
    }, l = c;
  }
  if (typeof document == "object" && document.implementation) {
    var g = document.implementation.createHTMLDocument();
    l = function(A, E) {
      if (E) {
        var b = g.documentElement.querySelector(E);
        return b && (b.innerHTML = A), g;
      }
      return g.documentElement.innerHTML = A, g;
    };
  }
  var v = typeof document == "object" && document.createElement("template"), x;
  v && v.content && (x = function(A) {
    return v.innerHTML = A, v.content.childNodes;
  });
  function _(A) {
    var E, b;
    A = (0, e.escapeSpecialCharacters)(A);
    var y = A.match(i), w = y && y[1] ? y[1].toLowerCase() : "";
    switch (w) {
      case r: {
        var h = c(A);
        if (!o.test(A)) {
          var f = h.querySelector(t);
          (E = f == null ? void 0 : f.parentNode) === null || E === void 0 || E.removeChild(f);
        }
        if (!s.test(A)) {
          var f = h.querySelector(n);
          (b = f == null ? void 0 : f.parentNode) === null || b === void 0 || b.removeChild(f);
        }
        return h.querySelectorAll(r);
      }
      case t:
      case n: {
        var C = l(A).querySelectorAll(w);
        return s.test(A) && o.test(A) ? C[0].parentNode.childNodes : C;
      }
      // low-level tag or text
      default: {
        if (x)
          return x(A);
        var f = l(A, n).querySelector(n);
        return f.childNodes;
      }
    }
  }
  return Cr;
}
var Xo;
function vd() {
  if (Xo) return At;
  Xo = 1;
  var e = At && At.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(At, "__esModule", { value: !0 }), At.default = i;
  var r = e(md()), t = Ws(), n = /<(![a-zA-Z\s]+)>/;
  function i(o) {
    if (typeof o != "string")
      throw new TypeError("First argument must be a string");
    if (!o)
      return [];
    var s = o.match(n), l = s ? s[1] : void 0;
    return (0, t.formatDOM)((0, r.default)(o), null, l);
  }
  return At;
}
var yr = {}, Fe = {}, Vt = {}, Yo;
function Cd() {
  if (Yo) return Vt;
  Yo = 1;
  var e = 0;
  Vt.SAME = e;
  var r = 1;
  return Vt.CAMELCASE = r, Vt.possibleStandardNames = {
    accept: 0,
    acceptCharset: 1,
    "accept-charset": "acceptCharset",
    accessKey: 1,
    action: 0,
    allowFullScreen: 1,
    alt: 0,
    as: 0,
    async: 0,
    autoCapitalize: 1,
    autoComplete: 1,
    autoCorrect: 1,
    autoFocus: 1,
    autoPlay: 1,
    autoSave: 1,
    capture: 0,
    cellPadding: 1,
    cellSpacing: 1,
    challenge: 0,
    charSet: 1,
    checked: 0,
    children: 0,
    cite: 0,
    class: "className",
    classID: 1,
    className: 1,
    cols: 0,
    colSpan: 1,
    content: 0,
    contentEditable: 1,
    contextMenu: 1,
    controls: 0,
    controlsList: 1,
    coords: 0,
    crossOrigin: 1,
    dangerouslySetInnerHTML: 1,
    data: 0,
    dateTime: 1,
    default: 0,
    defaultChecked: 1,
    defaultValue: 1,
    defer: 0,
    dir: 0,
    disabled: 0,
    disablePictureInPicture: 1,
    disableRemotePlayback: 1,
    download: 0,
    draggable: 0,
    encType: 1,
    enterKeyHint: 1,
    for: "htmlFor",
    form: 0,
    formMethod: 1,
    formAction: 1,
    formEncType: 1,
    formNoValidate: 1,
    formTarget: 1,
    frameBorder: 1,
    headers: 0,
    height: 0,
    hidden: 0,
    high: 0,
    href: 0,
    hrefLang: 1,
    htmlFor: 1,
    httpEquiv: 1,
    "http-equiv": "httpEquiv",
    icon: 0,
    id: 0,
    innerHTML: 1,
    inputMode: 1,
    integrity: 0,
    is: 0,
    itemID: 1,
    itemProp: 1,
    itemRef: 1,
    itemScope: 1,
    itemType: 1,
    keyParams: 1,
    keyType: 1,
    kind: 0,
    label: 0,
    lang: 0,
    list: 0,
    loop: 0,
    low: 0,
    manifest: 0,
    marginWidth: 1,
    marginHeight: 1,
    max: 0,
    maxLength: 1,
    media: 0,
    mediaGroup: 1,
    method: 0,
    min: 0,
    minLength: 1,
    multiple: 0,
    muted: 0,
    name: 0,
    noModule: 1,
    nonce: 0,
    noValidate: 1,
    open: 0,
    optimum: 0,
    pattern: 0,
    placeholder: 0,
    playsInline: 1,
    poster: 0,
    preload: 0,
    profile: 0,
    radioGroup: 1,
    readOnly: 1,
    referrerPolicy: 1,
    rel: 0,
    required: 0,
    reversed: 0,
    role: 0,
    rows: 0,
    rowSpan: 1,
    sandbox: 0,
    scope: 0,
    scoped: 0,
    scrolling: 0,
    seamless: 0,
    selected: 0,
    shape: 0,
    size: 0,
    sizes: 0,
    span: 0,
    spellCheck: 1,
    src: 0,
    srcDoc: 1,
    srcLang: 1,
    srcSet: 1,
    start: 0,
    step: 0,
    style: 0,
    summary: 0,
    tabIndex: 1,
    target: 0,
    title: 0,
    type: 0,
    useMap: 1,
    value: 0,
    width: 0,
    wmode: 0,
    wrap: 0,
    about: 0,
    accentHeight: 1,
    "accent-height": "accentHeight",
    accumulate: 0,
    additive: 0,
    alignmentBaseline: 1,
    "alignment-baseline": "alignmentBaseline",
    allowReorder: 1,
    alphabetic: 0,
    amplitude: 0,
    arabicForm: 1,
    "arabic-form": "arabicForm",
    ascent: 0,
    attributeName: 1,
    attributeType: 1,
    autoReverse: 1,
    azimuth: 0,
    baseFrequency: 1,
    baselineShift: 1,
    "baseline-shift": "baselineShift",
    baseProfile: 1,
    bbox: 0,
    begin: 0,
    bias: 0,
    by: 0,
    calcMode: 1,
    capHeight: 1,
    "cap-height": "capHeight",
    clip: 0,
    clipPath: 1,
    "clip-path": "clipPath",
    clipPathUnits: 1,
    clipRule: 1,
    "clip-rule": "clipRule",
    color: 0,
    colorInterpolation: 1,
    "color-interpolation": "colorInterpolation",
    colorInterpolationFilters: 1,
    "color-interpolation-filters": "colorInterpolationFilters",
    colorProfile: 1,
    "color-profile": "colorProfile",
    colorRendering: 1,
    "color-rendering": "colorRendering",
    contentScriptType: 1,
    contentStyleType: 1,
    cursor: 0,
    cx: 0,
    cy: 0,
    d: 0,
    datatype: 0,
    decelerate: 0,
    descent: 0,
    diffuseConstant: 1,
    direction: 0,
    display: 0,
    divisor: 0,
    dominantBaseline: 1,
    "dominant-baseline": "dominantBaseline",
    dur: 0,
    dx: 0,
    dy: 0,
    edgeMode: 1,
    elevation: 0,
    enableBackground: 1,
    "enable-background": "enableBackground",
    end: 0,
    exponent: 0,
    externalResourcesRequired: 1,
    fill: 0,
    fillOpacity: 1,
    "fill-opacity": "fillOpacity",
    fillRule: 1,
    "fill-rule": "fillRule",
    filter: 0,
    filterRes: 1,
    filterUnits: 1,
    floodOpacity: 1,
    "flood-opacity": "floodOpacity",
    floodColor: 1,
    "flood-color": "floodColor",
    focusable: 0,
    fontFamily: 1,
    "font-family": "fontFamily",
    fontSize: 1,
    "font-size": "fontSize",
    fontSizeAdjust: 1,
    "font-size-adjust": "fontSizeAdjust",
    fontStretch: 1,
    "font-stretch": "fontStretch",
    fontStyle: 1,
    "font-style": "fontStyle",
    fontVariant: 1,
    "font-variant": "fontVariant",
    fontWeight: 1,
    "font-weight": "fontWeight",
    format: 0,
    from: 0,
    fx: 0,
    fy: 0,
    g1: 0,
    g2: 0,
    glyphName: 1,
    "glyph-name": "glyphName",
    glyphOrientationHorizontal: 1,
    "glyph-orientation-horizontal": "glyphOrientationHorizontal",
    glyphOrientationVertical: 1,
    "glyph-orientation-vertical": "glyphOrientationVertical",
    glyphRef: 1,
    gradientTransform: 1,
    gradientUnits: 1,
    hanging: 0,
    horizAdvX: 1,
    "horiz-adv-x": "horizAdvX",
    horizOriginX: 1,
    "horiz-origin-x": "horizOriginX",
    ideographic: 0,
    imageRendering: 1,
    "image-rendering": "imageRendering",
    in2: 0,
    in: 0,
    inlist: 0,
    intercept: 0,
    k1: 0,
    k2: 0,
    k3: 0,
    k4: 0,
    k: 0,
    kernelMatrix: 1,
    kernelUnitLength: 1,
    kerning: 0,
    keyPoints: 1,
    keySplines: 1,
    keyTimes: 1,
    lengthAdjust: 1,
    letterSpacing: 1,
    "letter-spacing": "letterSpacing",
    lightingColor: 1,
    "lighting-color": "lightingColor",
    limitingConeAngle: 1,
    local: 0,
    markerEnd: 1,
    "marker-end": "markerEnd",
    markerHeight: 1,
    markerMid: 1,
    "marker-mid": "markerMid",
    markerStart: 1,
    "marker-start": "markerStart",
    markerUnits: 1,
    markerWidth: 1,
    mask: 0,
    maskContentUnits: 1,
    maskUnits: 1,
    mathematical: 0,
    mode: 0,
    numOctaves: 1,
    offset: 0,
    opacity: 0,
    operator: 0,
    order: 0,
    orient: 0,
    orientation: 0,
    origin: 0,
    overflow: 0,
    overlinePosition: 1,
    "overline-position": "overlinePosition",
    overlineThickness: 1,
    "overline-thickness": "overlineThickness",
    paintOrder: 1,
    "paint-order": "paintOrder",
    panose1: 0,
    "panose-1": "panose1",
    pathLength: 1,
    patternContentUnits: 1,
    patternTransform: 1,
    patternUnits: 1,
    pointerEvents: 1,
    "pointer-events": "pointerEvents",
    points: 0,
    pointsAtX: 1,
    pointsAtY: 1,
    pointsAtZ: 1,
    prefix: 0,
    preserveAlpha: 1,
    preserveAspectRatio: 1,
    primitiveUnits: 1,
    property: 0,
    r: 0,
    radius: 0,
    refX: 1,
    refY: 1,
    renderingIntent: 1,
    "rendering-intent": "renderingIntent",
    repeatCount: 1,
    repeatDur: 1,
    requiredExtensions: 1,
    requiredFeatures: 1,
    resource: 0,
    restart: 0,
    result: 0,
    results: 0,
    rotate: 0,
    rx: 0,
    ry: 0,
    scale: 0,
    security: 0,
    seed: 0,
    shapeRendering: 1,
    "shape-rendering": "shapeRendering",
    slope: 0,
    spacing: 0,
    specularConstant: 1,
    specularExponent: 1,
    speed: 0,
    spreadMethod: 1,
    startOffset: 1,
    stdDeviation: 1,
    stemh: 0,
    stemv: 0,
    stitchTiles: 1,
    stopColor: 1,
    "stop-color": "stopColor",
    stopOpacity: 1,
    "stop-opacity": "stopOpacity",
    strikethroughPosition: 1,
    "strikethrough-position": "strikethroughPosition",
    strikethroughThickness: 1,
    "strikethrough-thickness": "strikethroughThickness",
    string: 0,
    stroke: 0,
    strokeDasharray: 1,
    "stroke-dasharray": "strokeDasharray",
    strokeDashoffset: 1,
    "stroke-dashoffset": "strokeDashoffset",
    strokeLinecap: 1,
    "stroke-linecap": "strokeLinecap",
    strokeLinejoin: 1,
    "stroke-linejoin": "strokeLinejoin",
    strokeMiterlimit: 1,
    "stroke-miterlimit": "strokeMiterlimit",
    strokeWidth: 1,
    "stroke-width": "strokeWidth",
    strokeOpacity: 1,
    "stroke-opacity": "strokeOpacity",
    suppressContentEditableWarning: 1,
    suppressHydrationWarning: 1,
    surfaceScale: 1,
    systemLanguage: 1,
    tableValues: 1,
    targetX: 1,
    targetY: 1,
    textAnchor: 1,
    "text-anchor": "textAnchor",
    textDecoration: 1,
    "text-decoration": "textDecoration",
    textLength: 1,
    textRendering: 1,
    "text-rendering": "textRendering",
    to: 0,
    transform: 0,
    typeof: 0,
    u1: 0,
    u2: 0,
    underlinePosition: 1,
    "underline-position": "underlinePosition",
    underlineThickness: 1,
    "underline-thickness": "underlineThickness",
    unicode: 0,
    unicodeBidi: 1,
    "unicode-bidi": "unicodeBidi",
    unicodeRange: 1,
    "unicode-range": "unicodeRange",
    unitsPerEm: 1,
    "units-per-em": "unitsPerEm",
    unselectable: 0,
    vAlphabetic: 1,
    "v-alphabetic": "vAlphabetic",
    values: 0,
    vectorEffect: 1,
    "vector-effect": "vectorEffect",
    version: 0,
    vertAdvY: 1,
    "vert-adv-y": "vertAdvY",
    vertOriginX: 1,
    "vert-origin-x": "vertOriginX",
    vertOriginY: 1,
    "vert-origin-y": "vertOriginY",
    vHanging: 1,
    "v-hanging": "vHanging",
    vIdeographic: 1,
    "v-ideographic": "vIdeographic",
    viewBox: 1,
    viewTarget: 1,
    visibility: 0,
    vMathematical: 1,
    "v-mathematical": "vMathematical",
    vocab: 0,
    widths: 0,
    wordSpacing: 1,
    "word-spacing": "wordSpacing",
    writingMode: 1,
    "writing-mode": "writingMode",
    x1: 0,
    x2: 0,
    x: 0,
    xChannelSelector: 1,
    xHeight: 1,
    "x-height": "xHeight",
    xlinkActuate: 1,
    "xlink:actuate": "xlinkActuate",
    xlinkArcrole: 1,
    "xlink:arcrole": "xlinkArcrole",
    xlinkHref: 1,
    "xlink:href": "xlinkHref",
    xlinkRole: 1,
    "xlink:role": "xlinkRole",
    xlinkShow: 1,
    "xlink:show": "xlinkShow",
    xlinkTitle: 1,
    "xlink:title": "xlinkTitle",
    xlinkType: 1,
    "xlink:type": "xlinkType",
    xmlBase: 1,
    "xml:base": "xmlBase",
    xmlLang: 1,
    "xml:lang": "xmlLang",
    xmlns: 0,
    "xml:space": "xmlSpace",
    xmlnsXlink: 1,
    "xmlns:xlink": "xmlnsXlink",
    xmlSpace: 1,
    y1: 0,
    y2: 0,
    y: 0,
    yChannelSelector: 1,
    z: 0,
    zoomAndPan: 1
  }, Vt;
}
var Ko;
function yd() {
  if (Ko) return Fe;
  Ko = 1;
  const e = 0, r = 1, t = 2, n = 3, i = 4, o = 5, s = 6;
  function l(h) {
    return u.hasOwnProperty(h) ? u[h] : null;
  }
  function c(h, f, C, T, R, k, B) {
    this.acceptsBooleans = f === t || f === n || f === i, this.attributeName = T, this.attributeNamespace = R, this.mustUseProperty = C, this.propertyName = h, this.type = f, this.sanitizeURL = k, this.removeEmptyString = B;
  }
  const u = {};
  [
    "children",
    "dangerouslySetInnerHTML",
    // TODO: This prevents the assignment of defaultValue to regular
    // elements (not just inputs). Now that ReactDOMInput assigns to the
    // defaultValue property -- do we need this?
    "defaultValue",
    "defaultChecked",
    "innerHTML",
    "suppressContentEditableWarning",
    "suppressHydrationWarning",
    "style"
  ].forEach((h) => {
    u[h] = new c(
      h,
      e,
      !1,
      // mustUseProperty
      h,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
  ].forEach(([h, f]) => {
    u[h] = new c(
      h,
      r,
      !1,
      // mustUseProperty
      f,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach((h) => {
    u[h] = new c(
      h,
      t,
      !1,
      // mustUseProperty
      h.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
  ].forEach((h) => {
    u[h] = new c(
      h,
      t,
      !1,
      // mustUseProperty
      h,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    "allowFullScreen",
    "async",
    // Note: there is a special case that prevents it from being written to the DOM
    // on the client side because the browsers are inconsistent. Instead we call focus().
    "autoFocus",
    "autoPlay",
    "controls",
    "default",
    "defer",
    "disabled",
    "disablePictureInPicture",
    "disableRemotePlayback",
    "formNoValidate",
    "hidden",
    "loop",
    "noModule",
    "noValidate",
    "open",
    "playsInline",
    "readOnly",
    "required",
    "reversed",
    "scoped",
    "seamless",
    // Microdata
    "itemScope"
  ].forEach((h) => {
    u[h] = new c(
      h,
      n,
      !1,
      // mustUseProperty
      h.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    "checked",
    // Note: `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`. We have special logic for handling this.
    "multiple",
    "muted",
    "selected"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach((h) => {
    u[h] = new c(
      h,
      n,
      !0,
      // mustUseProperty
      h,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    "capture",
    "download"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach((h) => {
    u[h] = new c(
      h,
      i,
      !1,
      // mustUseProperty
      h,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    "cols",
    "rows",
    "size",
    "span"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach((h) => {
    u[h] = new c(
      h,
      s,
      !1,
      // mustUseProperty
      h,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), ["rowSpan", "start"].forEach((h) => {
    u[h] = new c(
      h,
      o,
      !1,
      // mustUseProperty
      h.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  });
  const d = /[\-\:]([a-z])/g, g = (h) => h[1].toUpperCase();
  [
    "accent-height",
    "alignment-baseline",
    "arabic-form",
    "baseline-shift",
    "cap-height",
    "clip-path",
    "clip-rule",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "dominant-baseline",
    "enable-background",
    "fill-opacity",
    "fill-rule",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "glyph-name",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "horiz-adv-x",
    "horiz-origin-x",
    "image-rendering",
    "letter-spacing",
    "lighting-color",
    "marker-end",
    "marker-mid",
    "marker-start",
    "overline-position",
    "overline-thickness",
    "paint-order",
    "panose-1",
    "pointer-events",
    "rendering-intent",
    "shape-rendering",
    "stop-color",
    "stop-opacity",
    "strikethrough-position",
    "strikethrough-thickness",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "underline-position",
    "underline-thickness",
    "unicode-bidi",
    "unicode-range",
    "units-per-em",
    "v-alphabetic",
    "v-hanging",
    "v-ideographic",
    "v-mathematical",
    "vector-effect",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "word-spacing",
    "writing-mode",
    "xmlns:xlink",
    "x-height"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach((h) => {
    const f = h.replace(d, g);
    u[f] = new c(
      f,
      r,
      !1,
      // mustUseProperty
      h,
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    "xlink:actuate",
    "xlink:arcrole",
    "xlink:role",
    "xlink:show",
    "xlink:title",
    "xlink:type"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach((h) => {
    const f = h.replace(d, g);
    u[f] = new c(
      f,
      r,
      !1,
      // mustUseProperty
      h,
      "http://www.w3.org/1999/xlink",
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    "xml:base",
    "xml:lang",
    "xml:space"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach((h) => {
    const f = h.replace(d, g);
    u[f] = new c(
      f,
      r,
      !1,
      // mustUseProperty
      h,
      "http://www.w3.org/XML/1998/namespace",
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), ["tabIndex", "crossOrigin"].forEach((h) => {
    u[h] = new c(
      h,
      r,
      !1,
      // mustUseProperty
      h.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  });
  const v = "xlinkHref";
  u[v] = new c(
    "xlinkHref",
    r,
    !1,
    // mustUseProperty
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    // sanitizeURL
    !1
    // removeEmptyString
  ), ["src", "href", "action", "formAction"].forEach((h) => {
    u[h] = new c(
      h,
      r,
      !1,
      // mustUseProperty
      h.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !0,
      // sanitizeURL
      !0
      // removeEmptyString
    );
  });
  const {
    CAMELCASE: x,
    SAME: _,
    possibleStandardNames: A
  } = Cd(), b = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD" + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", y = RegExp.prototype.test.bind(
    // eslint-disable-next-line no-misleading-character-class
    new RegExp("^(data|aria)-[" + b + "]*$")
  ), w = Object.keys(
    A
  ).reduce((h, f) => {
    const C = A[f];
    return C === _ ? h[f] = f : C === x ? h[f.toLowerCase()] = f : h[f] = C, h;
  }, {});
  return Fe.BOOLEAN = n, Fe.BOOLEANISH_STRING = t, Fe.NUMERIC = o, Fe.OVERLOADED_BOOLEAN = i, Fe.POSITIVE_NUMERIC = s, Fe.RESERVED = e, Fe.STRING = r, Fe.getPropertyInfo = l, Fe.isCustomAttribute = y, Fe.possibleStandardNames = w, Fe;
}
var Gt = {};
const Zs = /* @__PURE__ */ Zl(Vl);
var Et = {}, W1, Jo;
function _d() {
  if (Jo) return W1;
  Jo = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, t = /^\s*/, n = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, s = /^[;\s]*/, l = /^\s+|\s+$/g, c = `
`, u = "/", p = "*", d = "", g = "comment", v = "declaration";
  W1 = function(_, A) {
    if (typeof _ != "string")
      throw new TypeError("First argument must be a string");
    if (!_) return [];
    A = A || {};
    var E = 1, b = 1;
    function y(I) {
      var L = I.match(r);
      L && (E += L.length);
      var Q = I.lastIndexOf(c);
      b = ~Q ? I.length - Q : b + I.length;
    }
    function w() {
      var I = { line: E, column: b };
      return function(L) {
        return L.position = new h(I), T(), L;
      };
    }
    function h(I) {
      this.start = I, this.end = { line: E, column: b }, this.source = A.source;
    }
    h.prototype.content = _;
    function f(I) {
      var L = new Error(
        A.source + ":" + E + ":" + b + ": " + I
      );
      if (L.reason = I, L.filename = A.source, L.line = E, L.column = b, L.source = _, !A.silent) throw L;
    }
    function C(I) {
      var L = I.exec(_);
      if (L) {
        var Q = L[0];
        return y(Q), _ = _.slice(Q.length), L;
      }
    }
    function T() {
      C(t);
    }
    function R(I) {
      var L;
      for (I = I || []; L = k(); )
        L !== !1 && I.push(L);
      return I;
    }
    function k() {
      var I = w();
      if (!(u != _.charAt(0) || p != _.charAt(1))) {
        for (var L = 2; d != _.charAt(L) && (p != _.charAt(L) || u != _.charAt(L + 1)); )
          ++L;
        if (L += 2, d === _.charAt(L - 1))
          return f("End of comment missing");
        var Q = _.slice(2, L - 2);
        return b += 2, y(Q), _ = _.slice(L), b += 2, I({
          type: g,
          comment: Q
        });
      }
    }
    function B() {
      var I = w(), L = C(n);
      if (L) {
        if (k(), !C(i)) return f("property missing ':'");
        var Q = C(o), j = I({
          type: v,
          property: x(L[0].replace(e, d)),
          value: Q ? x(Q[0].replace(e, d)) : d
        });
        return C(s), j;
      }
    }
    function M() {
      var I = [];
      R(I);
      for (var L; L = B(); )
        L !== !1 && (I.push(L), R(I));
      return I;
    }
    return T(), M();
  };
  function x(_) {
    return _ ? _.replace(l, d) : d;
  }
  return W1;
}
var Qo;
function bd() {
  if (Qo) return Et;
  Qo = 1;
  var e = Et && Et.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(Et, "__esModule", { value: !0 }), Et.default = t;
  var r = e(_d());
  function t(n, i) {
    var o = null;
    if (!n || typeof n != "string")
      return o;
    var s = (0, r.default)(n), l = typeof i == "function";
    return s.forEach(function(c) {
      if (c.type === "declaration") {
        var u = c.property, p = c.value;
        l ? i(u, p, c) : p && (o = o || {}, o[u] = p);
      }
    }), o;
  }
  return Et;
}
var jt = {}, ea;
function wd() {
  if (ea) return jt;
  ea = 1, Object.defineProperty(jt, "__esModule", { value: !0 }), jt.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, r = /-([a-z])/g, t = /^[^-]+$/, n = /^-(webkit|moz|ms|o|khtml)-/, i = /^-(ms)-/, o = function(u) {
    return !u || t.test(u) || e.test(u);
  }, s = function(u, p) {
    return p.toUpperCase();
  }, l = function(u, p) {
    return "".concat(p, "-");
  }, c = function(u, p) {
    return p === void 0 && (p = {}), o(u) ? u : (u = u.toLowerCase(), p.reactCompat ? u = u.replace(i, l) : u = u.replace(n, l), u.replace(r, s));
  };
  return jt.camelCase = c, jt;
}
var qt, ta;
function xd() {
  if (ta) return qt;
  ta = 1;
  var e = qt && qt.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  }, r = e(bd()), t = wd();
  function n(i, o) {
    var s = {};
    return !i || typeof i != "string" || (0, r.default)(i, function(l, c) {
      l && c && (s[(0, t.camelCase)(l, o)] = c);
    }), s;
  }
  return n.default = n, qt = n, qt;
}
var ra;
function Xs() {
  return ra || (ra = 1, function(e) {
    var r = Gt && Gt.__importDefault || function(p) {
      return p && p.__esModule ? p : { default: p };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.returnFirstArg = e.canTextBeChildOfNode = e.ELEMENTS_WITH_NO_TEXT_CHILDREN = e.PRESERVE_CUSTOM_ATTRIBUTES = void 0, e.isCustomComponent = o, e.setStyleProp = l;
    var t = Zs, n = r(xd()), i = /* @__PURE__ */ new Set([
      "annotation-xml",
      "color-profile",
      "font-face",
      "font-face-src",
      "font-face-uri",
      "font-face-format",
      "font-face-name",
      "missing-glyph"
    ]);
    function o(p, d) {
      return p.includes("-") ? !i.has(p) : !!(d && typeof d.is == "string");
    }
    var s = {
      reactCompat: !0
    };
    function l(p, d) {
      if (typeof p == "string") {
        if (!p.trim()) {
          d.style = {};
          return;
        }
        try {
          d.style = (0, n.default)(p, s);
        } catch {
          d.style = {};
        }
      }
    }
    e.PRESERVE_CUSTOM_ATTRIBUTES = Number(t.version.split(".")[0]) >= 16, e.ELEMENTS_WITH_NO_TEXT_CHILDREN = /* @__PURE__ */ new Set([
      "tr",
      "tbody",
      "thead",
      "tfoot",
      "colgroup",
      "table",
      "head",
      "html",
      "frameset"
    ]);
    var c = function(p) {
      return !e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(p.name);
    };
    e.canTextBeChildOfNode = c;
    var u = function(p) {
      return p;
    };
    e.returnFirstArg = u;
  }(Gt)), Gt;
}
var na;
function Ys() {
  if (na) return yr;
  na = 1, Object.defineProperty(yr, "__esModule", { value: !0 }), yr.default = o;
  var e = yd(), r = Xs(), t = ["checked", "value"], n = ["input", "select", "textarea"], i = {
    reset: !0,
    submit: !0
  };
  function o(l, c) {
    l === void 0 && (l = {});
    var u = {}, p = !!(l.type && i[l.type]);
    for (var d in l) {
      var g = l[d];
      if ((0, e.isCustomAttribute)(d)) {
        u[d] = g;
        continue;
      }
      var v = d.toLowerCase(), x = s(v);
      if (x) {
        var _ = (0, e.getPropertyInfo)(x);
        switch (t.includes(x) && n.includes(c) && !p && (x = s("default" + v)), u[x] = g, _ && _.type) {
          case e.BOOLEAN:
            u[x] = !0;
            break;
          case e.OVERLOADED_BOOLEAN:
            g === "" && (u[x] = !0);
            break;
        }
        continue;
      }
      r.PRESERVE_CUSTOM_ATTRIBUTES && (u[d] = g);
    }
    return (0, r.setStyleProp)(l.style, u), u;
  }
  function s(l) {
    return e.possibleStandardNames[l];
  }
  return yr;
}
var St = {}, ia;
function Ad() {
  if (ia) return St;
  ia = 1;
  var e = St && St.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(St, "__esModule", { value: !0 }), St.default = o;
  var r = Zs, t = e(Ys()), n = Xs(), i = {
    cloneElement: r.cloneElement,
    createElement: r.createElement,
    isValidElement: r.isValidElement
  };
  function o(l, c) {
    c === void 0 && (c = {});
    for (var u = [], p = typeof c.replace == "function", d = c.transform || n.returnFirstArg, g = c.library || i, v = g.cloneElement, x = g.createElement, _ = g.isValidElement, A = l.length, E = 0; E < A; E++) {
      var b = l[E];
      if (p) {
        var y = c.replace(b, E);
        if (_(y)) {
          A > 1 && (y = v(y, {
            key: y.key || E
          })), u.push(d(y, b, E));
          continue;
        }
      }
      if (b.type === "text") {
        var w = !b.data.trim().length;
        if (w && b.parent && !(0, n.canTextBeChildOfNode)(b.parent) || c.trim && w)
          continue;
        u.push(d(b.data, b, E));
        continue;
      }
      var h = b, f = {};
      s(h) ? ((0, n.setStyleProp)(h.attribs.style, h.attribs), f = h.attribs) : h.attribs && (f = (0, t.default)(h.attribs, h.name));
      var C = void 0;
      switch (b.type) {
        case "script":
        case "style":
          b.children[0] && (f.dangerouslySetInnerHTML = {
            __html: b.children[0].data
          });
          break;
        case "tag":
          b.name === "textarea" && b.children[0] ? f.defaultValue = b.children[0].data : b.children && b.children.length && (C = o(b.children, c));
          break;
        // skip all other cases (e.g., comment)
        default:
          continue;
      }
      A > 1 && (f.key = E), u.push(d(x(b.name, f, C), b, E));
    }
    return u.length === 1 ? u[0] : u;
  }
  function s(l) {
    return n.PRESERVE_CUSTOM_ATTRIBUTES && l.type === "tag" && (0, n.isCustomComponent)(l.name, l.attribs);
  }
  return St;
}
var oa;
function Ed() {
  return oa || (oa = 1, function(e) {
    var r = Ut && Ut.__importDefault || function(c) {
      return c && c.__esModule ? c : { default: c };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.htmlToDOM = e.domToReact = e.attributesToProps = e.Text = e.ProcessingInstruction = e.Element = e.Comment = void 0, e.default = l;
    var t = r(vd());
    e.htmlToDOM = t.default;
    var n = r(Ys());
    e.attributesToProps = n.default;
    var i = r(Ad());
    e.domToReact = i.default;
    var o = /* @__PURE__ */ qs();
    Object.defineProperty(e, "Comment", { enumerable: !0, get: function() {
      return o.Comment;
    } }), Object.defineProperty(e, "Element", { enumerable: !0, get: function() {
      return o.Element;
    } }), Object.defineProperty(e, "ProcessingInstruction", { enumerable: !0, get: function() {
      return o.ProcessingInstruction;
    } }), Object.defineProperty(e, "Text", { enumerable: !0, get: function() {
      return o.Text;
    } });
    var s = { lowerCaseAttributeNames: !1 };
    function l(c, u) {
      if (typeof c != "string")
        throw new TypeError("First argument must be a string");
      return c ? (0, i.default)((0, t.default)(c, (u == null ? void 0 : u.htmlparser2) || s), u) : [];
    }
  }(Ut)), Ut;
}
var Ks = Ed();
const aa = /* @__PURE__ */ us(Ks), Sd = aa.default || aa;
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */
const {
  entries: Js,
  setPrototypeOf: sa,
  isFrozen: Td,
  getPrototypeOf: Nd,
  getOwnPropertyDescriptor: kd
} = Object;
let {
  freeze: Ne,
  seal: $e,
  create: Qs
} = Object, {
  apply: bn,
  construct: wn
} = typeof Reflect < "u" && Reflect;
Ne || (Ne = function(r) {
  return r;
});
$e || ($e = function(r) {
  return r;
});
bn || (bn = function(r, t, n) {
  return r.apply(t, n);
});
wn || (wn = function(r, t) {
  return new r(...t);
});
const _r = ke(Array.prototype.forEach), Ld = ke(Array.prototype.lastIndexOf), la = ke(Array.prototype.pop), Wt = ke(Array.prototype.push), Rd = ke(Array.prototype.splice), xr = ke(String.prototype.toLowerCase), Z1 = ke(String.prototype.toString), ca = ke(String.prototype.match), Zt = ke(String.prototype.replace), Md = ke(String.prototype.indexOf), Id = ke(String.prototype.trim), ze = ke(Object.prototype.hasOwnProperty), Se = ke(RegExp.prototype.test), Xt = Pd(TypeError);
function ke(e) {
  return function(r) {
    r instanceof RegExp && (r.lastIndex = 0);
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
      n[i - 1] = arguments[i];
    return bn(e, r, n);
  };
}
function Pd(e) {
  return function() {
    for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
      t[n] = arguments[n];
    return wn(e, t);
  };
}
function W(e, r) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : xr;
  sa && sa(e, null);
  let n = r.length;
  for (; n--; ) {
    let i = r[n];
    if (typeof i == "string") {
      const o = t(i);
      o !== i && (Td(r) || (r[n] = o), i = o);
    }
    e[i] = !0;
  }
  return e;
}
function Od(e) {
  for (let r = 0; r < e.length; r++)
    ze(e, r) || (e[r] = null);
  return e;
}
function ht(e) {
  const r = Qs(null);
  for (const [t, n] of Js(e))
    ze(e, t) && (Array.isArray(n) ? r[t] = Od(n) : n && typeof n == "object" && n.constructor === Object ? r[t] = ht(n) : r[t] = n);
  return r;
}
function Yt(e, r) {
  for (; e !== null; ) {
    const n = kd(e, r);
    if (n) {
      if (n.get)
        return ke(n.get);
      if (typeof n.value == "function")
        return ke(n.value);
    }
    e = Nd(e);
  }
  function t() {
    return null;
  }
  return t;
}
const ua = Ne(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), X1 = Ne(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Y1 = Ne(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Dd = Ne(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), K1 = Ne(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Hd = Ne(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), da = Ne(["#text"]), pa = Ne(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), J1 = Ne(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ha = Ne(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), br = Ne(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Bd = $e(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Fd = $e(/<%[\w\W]*|[\w\W]*%>/gm), $d = $e(/\$\{[\w\W]*/gm), zd = $e(/^data-[\-\w.\u00B7-\uFFFF]+$/), Ud = $e(/^aria-[\-\w]+$/), el = $e(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Vd = $e(/^(?:\w+script|data):/i), Gd = $e(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), tl = $e(/^html$/i), jd = $e(/^[a-z][.\w]*(-[.\w]+)+$/i);
var fa = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Ud,
  ATTR_WHITESPACE: Gd,
  CUSTOM_ELEMENT: jd,
  DATA_ATTR: zd,
  DOCTYPE_NAME: tl,
  ERB_EXPR: Fd,
  IS_ALLOWED_URI: el,
  IS_SCRIPT_OR_DATA: Vd,
  MUSTACHE_EXPR: Bd,
  TMPLIT_EXPR: $d
});
const Kt = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, qd = function() {
  return typeof window > "u" ? null : window;
}, Wd = function(r, t) {
  if (typeof r != "object" || typeof r.createPolicy != "function")
    return null;
  let n = null;
  const i = "data-tt-policy-suffix";
  t && t.hasAttribute(i) && (n = t.getAttribute(i));
  const o = "dompurify" + (n ? "#" + n : "");
  try {
    return r.createPolicy(o, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
}, ga = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function rl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : qd();
  const r = (F) => rl(F);
  if (r.version = "3.2.5", r.removed = [], !e || !e.document || e.document.nodeType !== Kt.document || !e.Element)
    return r.isSupported = !1, r;
  let {
    document: t
  } = e;
  const n = t, i = n.currentScript, {
    DocumentFragment: o,
    HTMLTemplateElement: s,
    Node: l,
    Element: c,
    NodeFilter: u,
    NamedNodeMap: p = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: d,
    DOMParser: g,
    trustedTypes: v
  } = e, x = c.prototype, _ = Yt(x, "cloneNode"), A = Yt(x, "remove"), E = Yt(x, "nextSibling"), b = Yt(x, "childNodes"), y = Yt(x, "parentNode");
  if (typeof s == "function") {
    const F = t.createElement("template");
    F.content && F.content.ownerDocument && (t = F.content.ownerDocument);
  }
  let w, h = "";
  const {
    implementation: f,
    createNodeIterator: C,
    createDocumentFragment: T,
    getElementsByTagName: R
  } = t, {
    importNode: k
  } = n;
  let B = ga();
  r.isSupported = typeof Js == "function" && typeof y == "function" && f && f.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: M,
    ERB_EXPR: I,
    TMPLIT_EXPR: L,
    DATA_ATTR: Q,
    ARIA_ATTR: j,
    IS_SCRIPT_OR_DATA: Le,
    ATTR_WHITESPACE: K,
    CUSTOM_ELEMENT: ne
  } = fa;
  let {
    IS_ALLOWED_URI: Oe
  } = fa, q = null;
  const Ve = W({}, [...ua, ...X1, ...Y1, ...K1, ...da]);
  let ee = null;
  const Re = W({}, [...pa, ...J1, ...ha, ...br]);
  let Y = Object.seal(Qs(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), J = null, xe = null, lt = !0, _e = !0, te = !1, oe = !0, X = !1, ae = !0, pe = !1, De = !1, he = !1, fe = !1, be = !1, He = !1, Pe = !0, ge = !1;
  const Ge = "user-content-";
  let Be = !0, je = !1, Ct = {}, yt = null;
  const ei = W({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let ti = null;
  const ri = W({}, ["audio", "video", "img", "source", "image", "track"]);
  let Mr = null;
  const ni = W({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), dr = "http://www.w3.org/1998/Math/MathML", pr = "http://www.w3.org/2000/svg", Je = "http://www.w3.org/1999/xhtml";
  let _t = Je, Ir = !1, Pr = null;
  const dl = W({}, [dr, pr, Je], Z1);
  let hr = W({}, ["mi", "mo", "mn", "ms", "mtext"]), fr = W({}, ["annotation-xml"]);
  const pl = W({}, ["title", "style", "font", "a", "script"]);
  let Dt = null;
  const hl = ["application/xhtml+xml", "text/html"], fl = "text/html";
  let Ce = null, bt = null;
  const gl = t.createElement("form"), ii = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, Or = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(bt && bt === m)) {
      if ((!m || typeof m != "object") && (m = {}), m = ht(m), Dt = // eslint-disable-next-line unicorn/prefer-includes
      hl.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? fl : m.PARSER_MEDIA_TYPE, Ce = Dt === "application/xhtml+xml" ? Z1 : xr, q = ze(m, "ALLOWED_TAGS") ? W({}, m.ALLOWED_TAGS, Ce) : Ve, ee = ze(m, "ALLOWED_ATTR") ? W({}, m.ALLOWED_ATTR, Ce) : Re, Pr = ze(m, "ALLOWED_NAMESPACES") ? W({}, m.ALLOWED_NAMESPACES, Z1) : dl, Mr = ze(m, "ADD_URI_SAFE_ATTR") ? W(ht(ni), m.ADD_URI_SAFE_ATTR, Ce) : ni, ti = ze(m, "ADD_DATA_URI_TAGS") ? W(ht(ri), m.ADD_DATA_URI_TAGS, Ce) : ri, yt = ze(m, "FORBID_CONTENTS") ? W({}, m.FORBID_CONTENTS, Ce) : ei, J = ze(m, "FORBID_TAGS") ? W({}, m.FORBID_TAGS, Ce) : {}, xe = ze(m, "FORBID_ATTR") ? W({}, m.FORBID_ATTR, Ce) : {}, Ct = ze(m, "USE_PROFILES") ? m.USE_PROFILES : !1, lt = m.ALLOW_ARIA_ATTR !== !1, _e = m.ALLOW_DATA_ATTR !== !1, te = m.ALLOW_UNKNOWN_PROTOCOLS || !1, oe = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, X = m.SAFE_FOR_TEMPLATES || !1, ae = m.SAFE_FOR_XML !== !1, pe = m.WHOLE_DOCUMENT || !1, fe = m.RETURN_DOM || !1, be = m.RETURN_DOM_FRAGMENT || !1, He = m.RETURN_TRUSTED_TYPE || !1, he = m.FORCE_BODY || !1, Pe = m.SANITIZE_DOM !== !1, ge = m.SANITIZE_NAMED_PROPS || !1, Be = m.KEEP_CONTENT !== !1, je = m.IN_PLACE || !1, Oe = m.ALLOWED_URI_REGEXP || el, _t = m.NAMESPACE || Je, hr = m.MATHML_TEXT_INTEGRATION_POINTS || hr, fr = m.HTML_INTEGRATION_POINTS || fr, Y = m.CUSTOM_ELEMENT_HANDLING || {}, m.CUSTOM_ELEMENT_HANDLING && ii(m.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Y.tagNameCheck = m.CUSTOM_ELEMENT_HANDLING.tagNameCheck), m.CUSTOM_ELEMENT_HANDLING && ii(m.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Y.attributeNameCheck = m.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Y.allowCustomizedBuiltInElements = m.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), X && (_e = !1), be && (fe = !0), Ct && (q = W({}, da), ee = [], Ct.html === !0 && (W(q, ua), W(ee, pa)), Ct.svg === !0 && (W(q, X1), W(ee, J1), W(ee, br)), Ct.svgFilters === !0 && (W(q, Y1), W(ee, J1), W(ee, br)), Ct.mathMl === !0 && (W(q, K1), W(ee, ha), W(ee, br))), m.ADD_TAGS && (q === Ve && (q = ht(q)), W(q, m.ADD_TAGS, Ce)), m.ADD_ATTR && (ee === Re && (ee = ht(ee)), W(ee, m.ADD_ATTR, Ce)), m.ADD_URI_SAFE_ATTR && W(Mr, m.ADD_URI_SAFE_ATTR, Ce), m.FORBID_CONTENTS && (yt === ei && (yt = ht(yt)), W(yt, m.FORBID_CONTENTS, Ce)), Be && (q["#text"] = !0), pe && W(q, ["html", "head", "body"]), q.table && (W(q, ["tbody"]), delete J.tbody), m.TRUSTED_TYPES_POLICY) {
        if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Xt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Xt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        w = m.TRUSTED_TYPES_POLICY, h = w.createHTML("");
      } else
        w === void 0 && (w = Wd(v, i)), w !== null && typeof h == "string" && (h = w.createHTML(""));
      Ne && Ne(m), bt = m;
    }
  }, oi = W({}, [...X1, ...Y1, ...Dd]), ai = W({}, [...K1, ...Hd]), ml = function(m) {
    let S = y(m);
    (!S || !S.tagName) && (S = {
      namespaceURI: _t,
      tagName: "template"
    });
    const H = xr(m.tagName), ie = xr(S.tagName);
    return Pr[m.namespaceURI] ? m.namespaceURI === pr ? S.namespaceURI === Je ? H === "svg" : S.namespaceURI === dr ? H === "svg" && (ie === "annotation-xml" || hr[ie]) : !!oi[H] : m.namespaceURI === dr ? S.namespaceURI === Je ? H === "math" : S.namespaceURI === pr ? H === "math" && fr[ie] : !!ai[H] : m.namespaceURI === Je ? S.namespaceURI === pr && !fr[ie] || S.namespaceURI === dr && !hr[ie] ? !1 : !ai[H] && (pl[H] || !oi[H]) : !!(Dt === "application/xhtml+xml" && Pr[m.namespaceURI]) : !1;
  }, qe = function(m) {
    Wt(r.removed, {
      element: m
    });
    try {
      y(m).removeChild(m);
    } catch {
      A(m);
    }
  }, gr = function(m, S) {
    try {
      Wt(r.removed, {
        attribute: S.getAttributeNode(m),
        from: S
      });
    } catch {
      Wt(r.removed, {
        attribute: null,
        from: S
      });
    }
    if (S.removeAttribute(m), m === "is")
      if (fe || be)
        try {
          qe(S);
        } catch {
        }
      else
        try {
          S.setAttribute(m, "");
        } catch {
        }
  }, si = function(m) {
    let S = null, H = null;
    if (he)
      m = "<remove></remove>" + m;
    else {
      const we = ca(m, /^[\r\n\t ]+/);
      H = we && we[0];
    }
    Dt === "application/xhtml+xml" && _t === Je && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const ie = w ? w.createHTML(m) : m;
    if (_t === Je)
      try {
        S = new g().parseFromString(ie, Dt);
      } catch {
      }
    if (!S || !S.documentElement) {
      S = f.createDocument(_t, "template", null);
      try {
        S.documentElement.innerHTML = Ir ? h : ie;
      } catch {
      }
    }
    const Ae = S.body || S.documentElement;
    return m && H && Ae.insertBefore(t.createTextNode(H), Ae.childNodes[0] || null), _t === Je ? R.call(S, pe ? "html" : "body")[0] : pe ? S.documentElement : Ae;
  }, li = function(m) {
    return C.call(
      m.ownerDocument || m,
      m,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, Dr = function(m) {
    return m instanceof d && (typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || !(m.attributes instanceof p) || typeof m.removeAttribute != "function" || typeof m.setAttribute != "function" || typeof m.namespaceURI != "string" || typeof m.insertBefore != "function" || typeof m.hasChildNodes != "function");
  }, ci = function(m) {
    return typeof l == "function" && m instanceof l;
  };
  function Qe(F, m, S) {
    _r(F, (H) => {
      H.call(r, m, S, bt);
    });
  }
  const ui = function(m) {
    let S = null;
    if (Qe(B.beforeSanitizeElements, m, null), Dr(m))
      return qe(m), !0;
    const H = Ce(m.nodeName);
    if (Qe(B.uponSanitizeElement, m, {
      tagName: H,
      allowedTags: q
    }), m.hasChildNodes() && !ci(m.firstElementChild) && Se(/<[/\w!]/g, m.innerHTML) && Se(/<[/\w!]/g, m.textContent) || m.nodeType === Kt.progressingInstruction || ae && m.nodeType === Kt.comment && Se(/<[/\w]/g, m.data))
      return qe(m), !0;
    if (!q[H] || J[H]) {
      if (!J[H] && pi(H) && (Y.tagNameCheck instanceof RegExp && Se(Y.tagNameCheck, H) || Y.tagNameCheck instanceof Function && Y.tagNameCheck(H)))
        return !1;
      if (Be && !yt[H]) {
        const ie = y(m) || m.parentNode, Ae = b(m) || m.childNodes;
        if (Ae && ie) {
          const we = Ae.length;
          for (let Me = we - 1; Me >= 0; --Me) {
            const We = _(Ae[Me], !0);
            We.__removalCount = (m.__removalCount || 0) + 1, ie.insertBefore(We, E(m));
          }
        }
      }
      return qe(m), !0;
    }
    return m instanceof c && !ml(m) || (H === "noscript" || H === "noembed" || H === "noframes") && Se(/<\/no(script|embed|frames)/i, m.innerHTML) ? (qe(m), !0) : (X && m.nodeType === Kt.text && (S = m.textContent, _r([M, I, L], (ie) => {
      S = Zt(S, ie, " ");
    }), m.textContent !== S && (Wt(r.removed, {
      element: m.cloneNode()
    }), m.textContent = S)), Qe(B.afterSanitizeElements, m, null), !1);
  }, di = function(m, S, H) {
    if (Pe && (S === "id" || S === "name") && (H in t || H in gl))
      return !1;
    if (!(_e && !xe[S] && Se(Q, S))) {
      if (!(lt && Se(j, S))) {
        if (!ee[S] || xe[S]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(pi(m) && (Y.tagNameCheck instanceof RegExp && Se(Y.tagNameCheck, m) || Y.tagNameCheck instanceof Function && Y.tagNameCheck(m)) && (Y.attributeNameCheck instanceof RegExp && Se(Y.attributeNameCheck, S) || Y.attributeNameCheck instanceof Function && Y.attributeNameCheck(S)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            S === "is" && Y.allowCustomizedBuiltInElements && (Y.tagNameCheck instanceof RegExp && Se(Y.tagNameCheck, H) || Y.tagNameCheck instanceof Function && Y.tagNameCheck(H)))
          ) return !1;
        } else if (!Mr[S]) {
          if (!Se(Oe, Zt(H, K, ""))) {
            if (!((S === "src" || S === "xlink:href" || S === "href") && m !== "script" && Md(H, "data:") === 0 && ti[m])) {
              if (!(te && !Se(Le, Zt(H, K, "")))) {
                if (H)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, pi = function(m) {
    return m !== "annotation-xml" && ca(m, ne);
  }, hi = function(m) {
    Qe(B.beforeSanitizeAttributes, m, null);
    const {
      attributes: S
    } = m;
    if (!S || Dr(m))
      return;
    const H = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ee,
      forceKeepAttr: void 0
    };
    let ie = S.length;
    for (; ie--; ) {
      const Ae = S[ie], {
        name: we,
        namespaceURI: Me,
        value: We
      } = Ae, Ht = Ce(we);
      let Ee = we === "value" ? We : Id(We);
      if (H.attrName = Ht, H.attrValue = Ee, H.keepAttr = !0, H.forceKeepAttr = void 0, Qe(B.uponSanitizeAttribute, m, H), Ee = H.attrValue, ge && (Ht === "id" || Ht === "name") && (gr(we, m), Ee = Ge + Ee), ae && Se(/((--!?|])>)|<\/(style|title)/i, Ee)) {
        gr(we, m);
        continue;
      }
      if (H.forceKeepAttr || (gr(we, m), !H.keepAttr))
        continue;
      if (!oe && Se(/\/>/i, Ee)) {
        gr(we, m);
        continue;
      }
      X && _r([M, I, L], (gi) => {
        Ee = Zt(Ee, gi, " ");
      });
      const fi = Ce(m.nodeName);
      if (di(fi, Ht, Ee)) {
        if (w && typeof v == "object" && typeof v.getAttributeType == "function" && !Me)
          switch (v.getAttributeType(fi, Ht)) {
            case "TrustedHTML": {
              Ee = w.createHTML(Ee);
              break;
            }
            case "TrustedScriptURL": {
              Ee = w.createScriptURL(Ee);
              break;
            }
          }
        try {
          Me ? m.setAttributeNS(Me, we, Ee) : m.setAttribute(we, Ee), Dr(m) ? qe(m) : la(r.removed);
        } catch {
        }
      }
    }
    Qe(B.afterSanitizeAttributes, m, null);
  }, vl = function F(m) {
    let S = null;
    const H = li(m);
    for (Qe(B.beforeSanitizeShadowDOM, m, null); S = H.nextNode(); )
      Qe(B.uponSanitizeShadowNode, S, null), ui(S), hi(S), S.content instanceof o && F(S.content);
    Qe(B.afterSanitizeShadowDOM, m, null);
  };
  return r.sanitize = function(F) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S = null, H = null, ie = null, Ae = null;
    if (Ir = !F, Ir && (F = "<!-->"), typeof F != "string" && !ci(F))
      if (typeof F.toString == "function") {
        if (F = F.toString(), typeof F != "string")
          throw Xt("dirty is not a string, aborting");
      } else
        throw Xt("toString is not a function");
    if (!r.isSupported)
      return F;
    if (De || Or(m), r.removed = [], typeof F == "string" && (je = !1), je) {
      if (F.nodeName) {
        const We = Ce(F.nodeName);
        if (!q[We] || J[We])
          throw Xt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (F instanceof l)
      S = si("<!---->"), H = S.ownerDocument.importNode(F, !0), H.nodeType === Kt.element && H.nodeName === "BODY" || H.nodeName === "HTML" ? S = H : S.appendChild(H);
    else {
      if (!fe && !X && !pe && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return w && He ? w.createHTML(F) : F;
      if (S = si(F), !S)
        return fe ? null : He ? h : "";
    }
    S && he && qe(S.firstChild);
    const we = li(je ? F : S);
    for (; ie = we.nextNode(); )
      ui(ie), hi(ie), ie.content instanceof o && vl(ie.content);
    if (je)
      return F;
    if (fe) {
      if (be)
        for (Ae = T.call(S.ownerDocument); S.firstChild; )
          Ae.appendChild(S.firstChild);
      else
        Ae = S;
      return (ee.shadowroot || ee.shadowrootmode) && (Ae = k.call(n, Ae, !0)), Ae;
    }
    let Me = pe ? S.outerHTML : S.innerHTML;
    return pe && q["!doctype"] && S.ownerDocument && S.ownerDocument.doctype && S.ownerDocument.doctype.name && Se(tl, S.ownerDocument.doctype.name) && (Me = "<!DOCTYPE " + S.ownerDocument.doctype.name + `>
` + Me), X && _r([M, I, L], (We) => {
      Me = Zt(Me, We, " ");
    }), w && He ? w.createHTML(Me) : Me;
  }, r.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Or(F), De = !0;
  }, r.clearConfig = function() {
    bt = null, De = !1;
  }, r.isValidAttribute = function(F, m, S) {
    bt || Or({});
    const H = Ce(F), ie = Ce(m);
    return di(H, ie, S);
  }, r.addHook = function(F, m) {
    typeof m == "function" && Wt(B[F], m);
  }, r.removeHook = function(F, m) {
    if (m !== void 0) {
      const S = Ld(B[F], m);
      return S === -1 ? void 0 : Rd(B[F], S, 1)[0];
    }
    return la(B[F]);
  }, r.removeHooks = function(F) {
    B[F] = [];
  }, r.removeAllHooks = function() {
    B = ga();
  }, r;
}
var Zd = rl(), Q1 = { exports: {} }, ma;
function Xd() {
  return ma || (ma = 1, function(e) {
    function r(t, n) {
      if (n && n.documentElement)
        t = n, n = arguments[2];
      else if (!t || !t.documentElement)
        throw new Error(
          "First argument to Readability constructor should be a document object."
        );
      if (n = n || {}, this._doc = t, this._docJSDOMParser = this._doc.firstChild.__JSDOMParser__, this._articleTitle = null, this._articleByline = null, this._articleDir = null, this._articleSiteName = null, this._attempts = [], this._metadata = {}, this._debug = !!n.debug, this._maxElemsToParse = n.maxElemsToParse || this.DEFAULT_MAX_ELEMS_TO_PARSE, this._nbTopCandidates = n.nbTopCandidates || this.DEFAULT_N_TOP_CANDIDATES, this._charThreshold = n.charThreshold || this.DEFAULT_CHAR_THRESHOLD, this._classesToPreserve = this.CLASSES_TO_PRESERVE.concat(
        n.classesToPreserve || []
      ), this._keepClasses = !!n.keepClasses, this._serializer = n.serializer || function(i) {
        return i.innerHTML;
      }, this._disableJSONLD = !!n.disableJSONLD, this._allowedVideoRegex = n.allowedVideoRegex || this.REGEXPS.videos, this._linkDensityModifier = n.linkDensityModifier || 0, this._flags = this.FLAG_STRIP_UNLIKELYS | this.FLAG_WEIGHT_CLASSES | this.FLAG_CLEAN_CONDITIONALLY, this._debug) {
        let i = function(o) {
          if (o.nodeType == o.TEXT_NODE)
            return `${o.nodeName} ("${o.textContent}")`;
          let s = Array.from(o.attributes || [], function(l) {
            return `${l.name}="${l.value}"`;
          }).join(" ");
          return `<${o.localName} ${s}>`;
        };
        this.log = function() {
          if (typeof console < "u") {
            let s = Array.from(arguments, (l) => l && l.nodeType == this.ELEMENT_NODE ? i(l) : l);
            s.unshift("Reader: (Readability)"), console.log(...s);
          } else if (typeof dump < "u") {
            var o = Array.prototype.map.call(arguments, function(s) {
              return s && s.nodeName ? i(s) : s;
            }).join(" ");
            dump("Reader: (Readability) " + o + `
`);
          }
        };
      } else
        this.log = function() {
        };
    }
    r.prototype = {
      FLAG_STRIP_UNLIKELYS: 1,
      FLAG_WEIGHT_CLASSES: 2,
      FLAG_CLEAN_CONDITIONALLY: 4,
      // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
      ELEMENT_NODE: 1,
      TEXT_NODE: 3,
      // Max number of nodes supported by this parser. Default: 0 (no limit)
      DEFAULT_MAX_ELEMS_TO_PARSE: 0,
      // The number of top candidates to consider when analysing how
      // tight the competition is among candidates.
      DEFAULT_N_TOP_CANDIDATES: 5,
      // Element tags to score by default.
      DEFAULT_TAGS_TO_SCORE: "section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),
      // The default number of chars an article must have in order to return a result
      DEFAULT_CHAR_THRESHOLD: 500,
      // All of the regular expressions in use within readability.
      // Defined up here so we don't instantiate them repeatedly in loops.
      REGEXPS: {
        // NOTE: These two regular expressions are duplicated in
        // Readability-readerable.js. Please keep both copies in sync.
        unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
        okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i,
        positive: /article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,
        negative: /-ad-|hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|footer|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|widget/i,
        extraneous: /print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,
        byline: /byline|author|dateline|writtenby|p-author/i,
        replaceFonts: /<(\/?)font[^>]*>/gi,
        normalize: /\s{2,}/g,
        videos: /\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,
        shareElements: /(\b|_)(share|sharedaddy)(\b|_)/i,
        nextLink: /(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,
        prevLink: /(prev|earl|old|new|<|«)/i,
        tokenize: /\W+/g,
        whitespace: /^\s*$/,
        hasContent: /\S$/,
        hashUrl: /^#.+/,
        srcsetUrl: /(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,
        b64DataUrl: /^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,
        // Commas as used in Latin, Sindhi, Chinese and various other scripts.
        // see: https://en.wikipedia.org/wiki/Comma#Comma_variants
        commas: /\u002C|\u060C|\uFE50|\uFE10|\uFE11|\u2E41|\u2E34|\u2E32|\uFF0C/g,
        // See: https://schema.org/Article
        jsonLdArticleTypes: /^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/,
        // used to see if a node's content matches words commonly used for ad blocks or loading indicators
        adWords: /^(ad(vertising|vertisement)?|pub(licité)?|werb(ung)?|广告|Реклама|Anuncio)$/iu,
        loadingWords: /^((loading|正在加载|Загрузка|chargement|cargando)(…|\.\.\.)?)$/iu
      },
      UNLIKELY_ROLES: [
        "menu",
        "menubar",
        "complementary",
        "navigation",
        "alert",
        "alertdialog",
        "dialog"
      ],
      DIV_TO_P_ELEMS: /* @__PURE__ */ new Set([
        "BLOCKQUOTE",
        "DL",
        "DIV",
        "IMG",
        "OL",
        "P",
        "PRE",
        "TABLE",
        "UL"
      ]),
      ALTER_TO_DIV_EXCEPTIONS: ["DIV", "ARTICLE", "SECTION", "P", "OL", "UL"],
      PRESENTATIONAL_ATTRIBUTES: [
        "align",
        "background",
        "bgcolor",
        "border",
        "cellpadding",
        "cellspacing",
        "frame",
        "hspace",
        "rules",
        "style",
        "valign",
        "vspace"
      ],
      DEPRECATED_SIZE_ATTRIBUTE_ELEMS: ["TABLE", "TH", "TD", "HR", "PRE"],
      // The commented out elements qualify as phrasing content but tend to be
      // removed by readability when put into paragraphs, so we ignore them here.
      PHRASING_ELEMS: [
        // "CANVAS", "IFRAME", "SVG", "VIDEO",
        "ABBR",
        "AUDIO",
        "B",
        "BDO",
        "BR",
        "BUTTON",
        "CITE",
        "CODE",
        "DATA",
        "DATALIST",
        "DFN",
        "EM",
        "EMBED",
        "I",
        "IMG",
        "INPUT",
        "KBD",
        "LABEL",
        "MARK",
        "MATH",
        "METER",
        "NOSCRIPT",
        "OBJECT",
        "OUTPUT",
        "PROGRESS",
        "Q",
        "RUBY",
        "SAMP",
        "SCRIPT",
        "SELECT",
        "SMALL",
        "SPAN",
        "STRONG",
        "SUB",
        "SUP",
        "TEXTAREA",
        "TIME",
        "VAR",
        "WBR"
      ],
      // These are the classes that readability sets itself.
      CLASSES_TO_PRESERVE: ["page"],
      // These are the list of HTML entities that need to be escaped.
      HTML_ESCAPE_MAP: {
        lt: "<",
        gt: ">",
        amp: "&",
        quot: '"',
        apos: "'"
      },
      /**
       * Run any post-process modifications to article content as necessary.
       *
       * @param Element
       * @return void
       **/
      _postProcessContent(t) {
        this._fixRelativeUris(t), this._simplifyNestedElements(t), this._keepClasses || this._cleanClasses(t);
      },
      /**
       * Iterates over a NodeList, calls `filterFn` for each node and removes node
       * if function returned `true`.
       *
       * If function is not passed, removes all the nodes in node list.
       *
       * @param NodeList nodeList The nodes to operate on
       * @param Function filterFn the function to use as a filter
       * @return void
       */
      _removeNodes(t, n) {
        if (this._docJSDOMParser && t._isLiveNodeList)
          throw new Error("Do not pass live node lists to _removeNodes");
        for (var i = t.length - 1; i >= 0; i--) {
          var o = t[i], s = o.parentNode;
          s && (!n || n.call(this, o, i, t)) && s.removeChild(o);
        }
      },
      /**
       * Iterates over a NodeList, and calls _setNodeTag for each node.
       *
       * @param NodeList nodeList The nodes to operate on
       * @param String newTagName the new tag name to use
       * @return void
       */
      _replaceNodeTags(t, n) {
        if (this._docJSDOMParser && t._isLiveNodeList)
          throw new Error("Do not pass live node lists to _replaceNodeTags");
        for (const i of t)
          this._setNodeTag(i, n);
      },
      /**
       * Iterate over a NodeList, which doesn't natively fully implement the Array
       * interface.
       *
       * For convenience, the current object context is applied to the provided
       * iterate function.
       *
       * @param  NodeList nodeList The NodeList.
       * @param  Function fn       The iterate function.
       * @return void
       */
      _forEachNode(t, n) {
        Array.prototype.forEach.call(t, n, this);
      },
      /**
       * Iterate over a NodeList, and return the first node that passes
       * the supplied test function
       *
       * For convenience, the current object context is applied to the provided
       * test function.
       *
       * @param  NodeList nodeList The NodeList.
       * @param  Function fn       The test function.
       * @return void
       */
      _findNode(t, n) {
        return Array.prototype.find.call(t, n, this);
      },
      /**
       * Iterate over a NodeList, return true if any of the provided iterate
       * function calls returns true, false otherwise.
       *
       * For convenience, the current object context is applied to the
       * provided iterate function.
       *
       * @param  NodeList nodeList The NodeList.
       * @param  Function fn       The iterate function.
       * @return Boolean
       */
      _someNode(t, n) {
        return Array.prototype.some.call(t, n, this);
      },
      /**
       * Iterate over a NodeList, return true if all of the provided iterate
       * function calls return true, false otherwise.
       *
       * For convenience, the current object context is applied to the
       * provided iterate function.
       *
       * @param  NodeList nodeList The NodeList.
       * @param  Function fn       The iterate function.
       * @return Boolean
       */
      _everyNode(t, n) {
        return Array.prototype.every.call(t, n, this);
      },
      _getAllNodesWithTag(t, n) {
        return t.querySelectorAll ? t.querySelectorAll(n.join(",")) : [].concat.apply(
          [],
          n.map(function(i) {
            var o = t.getElementsByTagName(i);
            return Array.isArray(o) ? o : Array.from(o);
          })
        );
      },
      /**
       * Removes the class="" attribute from every element in the given
       * subtree, except those that match CLASSES_TO_PRESERVE and
       * the classesToPreserve array from the options object.
       *
       * @param Element
       * @return void
       */
      _cleanClasses(t) {
        var n = this._classesToPreserve, i = (t.getAttribute("class") || "").split(/\s+/).filter((o) => n.includes(o)).join(" ");
        for (i ? t.setAttribute("class", i) : t.removeAttribute("class"), t = t.firstElementChild; t; t = t.nextElementSibling)
          this._cleanClasses(t);
      },
      /**
       * Tests whether a string is a URL or not.
       *
       * @param {string} str The string to test
       * @return {boolean} true if str is a URL, false if not
       */
      _isUrl(t) {
        try {
          return new URL(t), !0;
        } catch {
          return !1;
        }
      },
      /**
       * Converts each <a> and <img> uri in the given element to an absolute URI,
       * ignoring #ref URIs.
       *
       * @param Element
       * @return void
       */
      _fixRelativeUris(t) {
        var n = this._doc.baseURI, i = this._doc.documentURI;
        function o(c) {
          if (n == i && c.charAt(0) == "#")
            return c;
          try {
            return new URL(c, n).href;
          } catch {
          }
          return c;
        }
        var s = this._getAllNodesWithTag(t, ["a"]);
        this._forEachNode(s, function(c) {
          var u = c.getAttribute("href");
          if (u)
            if (u.indexOf("javascript:") === 0)
              if (c.childNodes.length === 1 && c.childNodes[0].nodeType === this.TEXT_NODE) {
                var p = this._doc.createTextNode(c.textContent);
                c.parentNode.replaceChild(p, c);
              } else {
                for (var d = this._doc.createElement("span"); c.firstChild; )
                  d.appendChild(c.firstChild);
                c.parentNode.replaceChild(d, c);
              }
            else
              c.setAttribute("href", o(u));
        });
        var l = this._getAllNodesWithTag(t, [
          "img",
          "picture",
          "figure",
          "video",
          "audio",
          "source"
        ]);
        this._forEachNode(l, function(c) {
          var u = c.getAttribute("src"), p = c.getAttribute("poster"), d = c.getAttribute("srcset");
          if (u && c.setAttribute("src", o(u)), p && c.setAttribute("poster", o(p)), d) {
            var g = d.replace(
              this.REGEXPS.srcsetUrl,
              function(v, x, _, A) {
                return o(x) + (_ || "") + A;
              }
            );
            c.setAttribute("srcset", g);
          }
        });
      },
      _simplifyNestedElements(t) {
        for (var n = t; n; ) {
          if (n.parentNode && ["DIV", "SECTION"].includes(n.tagName) && !(n.id && n.id.startsWith("readability"))) {
            if (this._isElementWithoutContent(n)) {
              n = this._removeAndGetNext(n);
              continue;
            } else if (this._hasSingleTagInsideElement(n, "DIV") || this._hasSingleTagInsideElement(n, "SECTION")) {
              for (var i = n.children[0], o = 0; o < n.attributes.length; o++)
                i.setAttributeNode(n.attributes[o].cloneNode());
              n.parentNode.replaceChild(i, n), n = i;
              continue;
            }
          }
          n = this._getNextNode(n);
        }
      },
      /**
       * Get the article title as an H1.
       *
       * @return string
       **/
      _getArticleTitle() {
        var t = this._doc, n = "", i = "";
        try {
          n = i = t.title.trim(), typeof n != "string" && (n = i = this._getInnerText(
            t.getElementsByTagName("title")[0]
          ));
        } catch {
        }
        var o = !1;
        function s(g) {
          return g.split(/\s+/).length;
        }
        if (/ [\|\-\\\/>»] /.test(n)) {
          o = / [\\\/>»] /.test(n);
          let g = Array.from(i.matchAll(/ [\|\-\\\/>»] /gi));
          n = i.substring(0, g.pop().index), s(n) < 3 && (n = i.replace(/^[^\|\-\\\/>»]*[\|\-\\\/>»]/gi, ""));
        } else if (n.includes(": ")) {
          var l = this._getAllNodesWithTag(t, ["h1", "h2"]), c = n.trim(), u = this._someNode(l, function(g) {
            return g.textContent.trim() === c;
          });
          u || (n = i.substring(i.lastIndexOf(":") + 1), s(n) < 3 ? n = i.substring(i.indexOf(":") + 1) : s(i.substr(0, i.indexOf(":"))) > 5 && (n = i));
        } else if (n.length > 150 || n.length < 15) {
          var p = t.getElementsByTagName("h1");
          p.length === 1 && (n = this._getInnerText(p[0]));
        }
        n = n.trim().replace(this.REGEXPS.normalize, " ");
        var d = s(n);
        return d <= 4 && (!o || d != s(i.replace(/[\|\-\\\/>»]+/g, "")) - 1) && (n = i), n;
      },
      /**
       * Prepare the HTML document for readability to scrape it.
       * This includes things like stripping javascript, CSS, and handling terrible markup.
       *
       * @return void
       **/
      _prepDocument() {
        var t = this._doc;
        this._removeNodes(this._getAllNodesWithTag(t, ["style"])), t.body && this._replaceBrs(t.body), this._replaceNodeTags(this._getAllNodesWithTag(t, ["font"]), "SPAN");
      },
      /**
       * Finds the next node, starting from the given node, and ignoring
       * whitespace in between. If the given node is an element, the same node is
       * returned.
       */
      _nextNode(t) {
        for (var n = t; n && n.nodeType != this.ELEMENT_NODE && this.REGEXPS.whitespace.test(n.textContent); )
          n = n.nextSibling;
        return n;
      },
      /**
       * Replaces 2 or more successive <br> elements with a single <p>.
       * Whitespace between <br> elements are ignored. For example:
       *   <div>foo<br>bar<br> <br><br>abc</div>
       * will become:
       *   <div>foo<br>bar<p>abc</p></div>
       */
      _replaceBrs(t) {
        this._forEachNode(this._getAllNodesWithTag(t, ["br"]), function(n) {
          for (var i = n.nextSibling, o = !1; (i = this._nextNode(i)) && i.tagName == "BR"; ) {
            o = !0;
            var s = i.nextSibling;
            i.remove(), i = s;
          }
          if (o) {
            var l = this._doc.createElement("p");
            for (n.parentNode.replaceChild(l, n), i = l.nextSibling; i; ) {
              if (i.tagName == "BR") {
                var c = this._nextNode(i.nextSibling);
                if (c && c.tagName == "BR")
                  break;
              }
              if (!this._isPhrasingContent(i))
                break;
              var u = i.nextSibling;
              l.appendChild(i), i = u;
            }
            for (; l.lastChild && this._isWhitespace(l.lastChild); )
              l.lastChild.remove();
            l.parentNode.tagName === "P" && this._setNodeTag(l.parentNode, "DIV");
          }
        });
      },
      _setNodeTag(t, n) {
        if (this.log("_setNodeTag", t, n), this._docJSDOMParser)
          return t.localName = n.toLowerCase(), t.tagName = n.toUpperCase(), t;
        for (var i = t.ownerDocument.createElement(n); t.firstChild; )
          i.appendChild(t.firstChild);
        t.parentNode.replaceChild(i, t), t.readability && (i.readability = t.readability);
        for (var o = 0; o < t.attributes.length; o++)
          i.setAttributeNode(t.attributes[o].cloneNode());
        return i;
      },
      /**
       * Prepare the article node for display. Clean out any inline styles,
       * iframes, forms, strip extraneous <p> tags, etc.
       *
       * @param Element
       * @return void
       **/
      _prepArticle(t) {
        this._cleanStyles(t), this._markDataTables(t), this._fixLazyImages(t), this._cleanConditionally(t, "form"), this._cleanConditionally(t, "fieldset"), this._clean(t, "object"), this._clean(t, "embed"), this._clean(t, "footer"), this._clean(t, "link"), this._clean(t, "aside");
        var n = this.DEFAULT_CHAR_THRESHOLD;
        this._forEachNode(t.children, function(i) {
          this._cleanMatchedNodes(i, function(o, s) {
            return this.REGEXPS.shareElements.test(s) && o.textContent.length < n;
          });
        }), this._clean(t, "iframe"), this._clean(t, "input"), this._clean(t, "textarea"), this._clean(t, "select"), this._clean(t, "button"), this._cleanHeaders(t), this._cleanConditionally(t, "table"), this._cleanConditionally(t, "ul"), this._cleanConditionally(t, "div"), this._replaceNodeTags(
          this._getAllNodesWithTag(t, ["h1"]),
          "h2"
        ), this._removeNodes(
          this._getAllNodesWithTag(t, ["p"]),
          function(i) {
            var o = this._getAllNodesWithTag(i, [
              "img",
              "embed",
              "object",
              "iframe"
            ]).length;
            return o === 0 && !this._getInnerText(i, !1);
          }
        ), this._forEachNode(
          this._getAllNodesWithTag(t, ["br"]),
          function(i) {
            var o = this._nextNode(i.nextSibling);
            o && o.tagName == "P" && i.remove();
          }
        ), this._forEachNode(
          this._getAllNodesWithTag(t, ["table"]),
          function(i) {
            var o = this._hasSingleTagInsideElement(i, "TBODY") ? i.firstElementChild : i;
            if (this._hasSingleTagInsideElement(o, "TR")) {
              var s = o.firstElementChild;
              if (this._hasSingleTagInsideElement(s, "TD")) {
                var l = s.firstElementChild;
                l = this._setNodeTag(
                  l,
                  this._everyNode(l.childNodes, this._isPhrasingContent) ? "P" : "DIV"
                ), i.parentNode.replaceChild(l, i);
              }
            }
          }
        );
      },
      /**
       * Initialize a node with the readability object. Also checks the
       * className/id for special names to add to its score.
       *
       * @param Element
       * @return void
       **/
      _initializeNode(t) {
        switch (t.readability = { contentScore: 0 }, t.tagName) {
          case "DIV":
            t.readability.contentScore += 5;
            break;
          case "PRE":
          case "TD":
          case "BLOCKQUOTE":
            t.readability.contentScore += 3;
            break;
          case "ADDRESS":
          case "OL":
          case "UL":
          case "DL":
          case "DD":
          case "DT":
          case "LI":
          case "FORM":
            t.readability.contentScore -= 3;
            break;
          case "H1":
          case "H2":
          case "H3":
          case "H4":
          case "H5":
          case "H6":
          case "TH":
            t.readability.contentScore -= 5;
            break;
        }
        t.readability.contentScore += this._getClassWeight(t);
      },
      _removeAndGetNext(t) {
        var n = this._getNextNode(t, !0);
        return t.remove(), n;
      },
      /**
       * Traverse the DOM from node to node, starting at the node passed in.
       * Pass true for the second parameter to indicate this node itself
       * (and its kids) are going away, and we want the next node over.
       *
       * Calling this in a loop will traverse the DOM depth-first.
       *
       * @param {Element} node
       * @param {boolean} ignoreSelfAndKids
       * @return {Element}
       */
      _getNextNode(t, n) {
        if (!n && t.firstElementChild)
          return t.firstElementChild;
        if (t.nextElementSibling)
          return t.nextElementSibling;
        do
          t = t.parentNode;
        while (t && !t.nextElementSibling);
        return t && t.nextElementSibling;
      },
      // compares second text to first one
      // 1 = same text, 0 = completely different text
      // works the way that it splits both texts into words and then finds words that are unique in second text
      // the result is given by the lower length of unique parts
      _textSimilarity(t, n) {
        var i = t.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean), o = n.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);
        if (!i.length || !o.length)
          return 0;
        var s = o.filter((c) => !i.includes(c)), l = s.join(" ").length / o.join(" ").length;
        return 1 - l;
      },
      /**
       * Checks whether an element node contains a valid byline
       *
       * @param node {Element}
       * @param matchString {string}
       * @return boolean
       */
      _isValidByline(t, n) {
        var i = t.getAttribute("rel"), o = t.getAttribute("itemprop"), s = t.textContent.trim().length;
        return (i === "author" || o && o.includes("author") || this.REGEXPS.byline.test(n)) && !!s && s < 100;
      },
      _getNodeAncestors(t, n) {
        n = n || 0;
        for (var i = 0, o = []; t.parentNode && (o.push(t.parentNode), !(n && ++i === n)); )
          t = t.parentNode;
        return o;
      },
      /***
       * grabArticle - Using a variety of metrics (content score, classname, element types), find the content that is
       *         most likely to be the stuff a user wants to read. Then return it wrapped up in a div.
       *
       * @param page a document to run upon. Needs to be a full document, complete with body.
       * @return Element
       **/
      /* eslint-disable-next-line complexity */
      _grabArticle(t) {
        this.log("**** grabArticle ****");
        var n = this._doc, i = t !== null;
        if (t = t || this._doc.body, !t)
          return this.log("No body found in document. Abort."), null;
        for (var o = t.innerHTML; ; ) {
          this.log("Starting grabArticle loop");
          var s = this._flagIsActive(
            this.FLAG_STRIP_UNLIKELYS
          ), l = [], c = this._doc.documentElement;
          let he = !0;
          for (; c; ) {
            c.tagName === "HTML" && (this._articleLang = c.getAttribute("lang"));
            var u = c.className + " " + c.id;
            if (!this._isProbablyVisible(c)) {
              this.log("Removing hidden node - " + u), c = this._removeAndGetNext(c);
              continue;
            }
            if (c.getAttribute("aria-modal") == "true" && c.getAttribute("role") == "dialog") {
              c = this._removeAndGetNext(c);
              continue;
            }
            if (!this._articleByline && !this._metadata.byline && this._isValidByline(c, u)) {
              for (var p = this._getNextNode(c, !0), d = this._getNextNode(c), g = null; d && d != p; ) {
                var v = d.getAttribute("itemprop");
                if (v && v.includes("name")) {
                  g = d;
                  break;
                } else
                  d = this._getNextNode(d);
              }
              this._articleByline = (g ?? c).textContent.trim(), c = this._removeAndGetNext(c);
              continue;
            }
            if (he && this._headerDuplicatesTitle(c)) {
              this.log(
                "Removing header: ",
                c.textContent.trim(),
                this._articleTitle.trim()
              ), he = !1, c = this._removeAndGetNext(c);
              continue;
            }
            if (s) {
              if (this.REGEXPS.unlikelyCandidates.test(u) && !this.REGEXPS.okMaybeItsACandidate.test(u) && !this._hasAncestorTag(c, "table") && !this._hasAncestorTag(c, "code") && c.tagName !== "BODY" && c.tagName !== "A") {
                this.log("Removing unlikely candidate - " + u), c = this._removeAndGetNext(c);
                continue;
              }
              if (this.UNLIKELY_ROLES.includes(c.getAttribute("role"))) {
                this.log(
                  "Removing content with role " + c.getAttribute("role") + " - " + u
                ), c = this._removeAndGetNext(c);
                continue;
              }
            }
            if ((c.tagName === "DIV" || c.tagName === "SECTION" || c.tagName === "HEADER" || c.tagName === "H1" || c.tagName === "H2" || c.tagName === "H3" || c.tagName === "H4" || c.tagName === "H5" || c.tagName === "H6") && this._isElementWithoutContent(c)) {
              c = this._removeAndGetNext(c);
              continue;
            }
            if (this.DEFAULT_TAGS_TO_SCORE.includes(c.tagName) && l.push(c), c.tagName === "DIV") {
              for (var x = null, _ = c.firstChild; _; ) {
                var A = _.nextSibling;
                if (this._isPhrasingContent(_))
                  x !== null ? x.appendChild(_) : this._isWhitespace(_) || (x = n.createElement("p"), c.replaceChild(x, _), x.appendChild(_));
                else if (x !== null) {
                  for (; x.lastChild && this._isWhitespace(x.lastChild); )
                    x.lastChild.remove();
                  x = null;
                }
                _ = A;
              }
              if (this._hasSingleTagInsideElement(c, "P") && this._getLinkDensity(c) < 0.25) {
                var E = c.children[0];
                c.parentNode.replaceChild(E, c), c = E, l.push(c);
              } else this._hasChildBlockElement(c) || (c = this._setNodeTag(c, "P"), l.push(c));
            }
            c = this._getNextNode(c);
          }
          var b = [];
          this._forEachNode(l, function(fe) {
            if (!(!fe.parentNode || typeof fe.parentNode.tagName > "u")) {
              var be = this._getInnerText(fe);
              if (!(be.length < 25)) {
                var He = this._getNodeAncestors(fe, 5);
                if (He.length !== 0) {
                  var Pe = 0;
                  Pe += 1, Pe += be.split(this.REGEXPS.commas).length, Pe += Math.min(Math.floor(be.length / 100), 3), this._forEachNode(He, function(ge, Ge) {
                    if (!(!ge.tagName || !ge.parentNode || typeof ge.parentNode.tagName > "u")) {
                      if (typeof ge.readability > "u" && (this._initializeNode(ge), b.push(ge)), Ge === 0)
                        var Be = 1;
                      else Ge === 1 ? Be = 2 : Be = Ge * 3;
                      ge.readability.contentScore += Pe / Be;
                    }
                  });
                }
              }
            }
          });
          for (var y = [], w = 0, h = b.length; w < h; w += 1) {
            var f = b[w], C = f.readability.contentScore * (1 - this._getLinkDensity(f));
            f.readability.contentScore = C, this.log("Candidate:", f, "with score " + C);
            for (var T = 0; T < this._nbTopCandidates; T++) {
              var R = y[T];
              if (!R || C > R.readability.contentScore) {
                y.splice(T, 0, f), y.length > this._nbTopCandidates && y.pop();
                break;
              }
            }
          }
          var k = y[0] || null, B = !1, M;
          if (k === null || k.tagName === "BODY") {
            for (k = n.createElement("DIV"), B = !0; t.firstChild; )
              this.log("Moving child out:", t.firstChild), k.appendChild(t.firstChild);
            t.appendChild(k), this._initializeNode(k);
          } else if (k) {
            for (var I = [], L = 1; L < y.length; L++)
              y[L].readability.contentScore / k.readability.contentScore >= 0.75 && I.push(
                this._getNodeAncestors(y[L])
              );
            var Q = 3;
            if (I.length >= Q)
              for (M = k.parentNode; M.tagName !== "BODY"; ) {
                for (var j = 0, Le = 0; Le < I.length && j < Q; Le++)
                  j += Number(
                    I[Le].includes(
                      M
                    )
                  );
                if (j >= Q) {
                  k = M;
                  break;
                }
                M = M.parentNode;
              }
            k.readability || this._initializeNode(k), M = k.parentNode;
            for (var K = k.readability.contentScore, ne = K / 3; M.tagName !== "BODY"; ) {
              if (!M.readability) {
                M = M.parentNode;
                continue;
              }
              var Oe = M.readability.contentScore;
              if (Oe < ne)
                break;
              if (Oe > K) {
                k = M;
                break;
              }
              K = M.readability.contentScore, M = M.parentNode;
            }
            for (M = k.parentNode; M.tagName != "BODY" && M.children.length == 1; )
              k = M, M = k.parentNode;
            k.readability || this._initializeNode(k);
          }
          var q = n.createElement("DIV");
          i && (q.id = "readability-content");
          var Ve = Math.max(
            10,
            k.readability.contentScore * 0.2
          );
          M = k.parentNode;
          for (var ee = M.children, Re = 0, Y = ee.length; Re < Y; Re++) {
            var J = ee[Re], xe = !1;
            if (this.log(
              "Looking at sibling node:",
              J,
              J.readability ? "with score " + J.readability.contentScore : ""
            ), this.log(
              "Sibling has score",
              J.readability ? J.readability.contentScore : "Unknown"
            ), J === k)
              xe = !0;
            else {
              var lt = 0;
              if (J.className === k.className && k.className !== "" && (lt += k.readability.contentScore * 0.2), J.readability && J.readability.contentScore + lt >= Ve)
                xe = !0;
              else if (J.nodeName === "P") {
                var _e = this._getLinkDensity(J), te = this._getInnerText(J), oe = te.length;
                (oe > 80 && _e < 0.25 || oe < 80 && oe > 0 && _e === 0 && te.search(/\.( |$)/) !== -1) && (xe = !0);
              }
            }
            xe && (this.log("Appending node:", J), this.ALTER_TO_DIV_EXCEPTIONS.includes(J.nodeName) || (this.log("Altering sibling:", J, "to div."), J = this._setNodeTag(J, "DIV")), q.appendChild(J), ee = M.children, Re -= 1, Y -= 1);
          }
          if (this._debug && this.log("Article content pre-prep: " + q.innerHTML), this._prepArticle(q), this._debug && this.log("Article content post-prep: " + q.innerHTML), B)
            k.id = "readability-page-1", k.className = "page";
          else {
            var X = n.createElement("DIV");
            for (X.id = "readability-page-1", X.className = "page"; q.firstChild; )
              X.appendChild(q.firstChild);
            q.appendChild(X);
          }
          this._debug && this.log("Article content after paging: " + q.innerHTML);
          var ae = !0, pe = this._getInnerText(q, !0).length;
          if (pe < this._charThreshold)
            if (ae = !1, t.innerHTML = o, this._attempts.push({
              articleContent: q,
              textLength: pe
            }), this._flagIsActive(this.FLAG_STRIP_UNLIKELYS))
              this._removeFlag(this.FLAG_STRIP_UNLIKELYS);
            else if (this._flagIsActive(this.FLAG_WEIGHT_CLASSES))
              this._removeFlag(this.FLAG_WEIGHT_CLASSES);
            else if (this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))
              this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY);
            else {
              if (this._attempts.sort(function(fe, be) {
                return be.textLength - fe.textLength;
              }), !this._attempts[0].textLength)
                return null;
              q = this._attempts[0].articleContent, ae = !0;
            }
          if (ae) {
            var De = [M, k].concat(
              this._getNodeAncestors(M)
            );
            return this._someNode(De, function(fe) {
              if (!fe.tagName)
                return !1;
              var be = fe.getAttribute("dir");
              return be ? (this._articleDir = be, !0) : !1;
            }), q;
          }
        }
      },
      /**
       * Converts some of the common HTML entities in string to their corresponding characters.
       *
       * @param str {string} - a string to unescape.
       * @return string without HTML entity.
       */
      _unescapeHtmlEntities(t) {
        if (!t)
          return t;
        var n = this.HTML_ESCAPE_MAP;
        return t.replace(/&(quot|amp|apos|lt|gt);/g, function(i, o) {
          return n[o];
        }).replace(/&#(?:x([0-9a-f]+)|([0-9]+));/gi, function(i, o, s) {
          var l = parseInt(o || s, o ? 16 : 10);
          return (l == 0 || l > 1114111 || l >= 55296 && l <= 57343) && (l = 65533), String.fromCodePoint(l);
        });
      },
      /**
       * Try to extract metadata from JSON-LD object.
       * For now, only Schema.org objects of type Article or its subtypes are supported.
       * @return Object with any metadata that could be extracted (possibly none)
       */
      _getJSONLD(t) {
        var n = this._getAllNodesWithTag(t, ["script"]), i;
        return this._forEachNode(n, function(o) {
          if (!i && o.getAttribute("type") === "application/ld+json")
            try {
              var s = o.textContent.replace(
                /^\s*<!\[CDATA\[|\]\]>\s*$/g,
                ""
              ), l = JSON.parse(s);
              if (Array.isArray(l) && (l = l.find((v) => v["@type"] && v["@type"].match(this.REGEXPS.jsonLdArticleTypes)), !l))
                return;
              var c = /^https?\:\/\/schema\.org\/?$/, u = typeof l["@context"] == "string" && l["@context"].match(c) || typeof l["@context"] == "object" && typeof l["@context"]["@vocab"] == "string" && l["@context"]["@vocab"].match(c);
              if (!u || (!l["@type"] && Array.isArray(l["@graph"]) && (l = l["@graph"].find((v) => (v["@type"] || "").match(this.REGEXPS.jsonLdArticleTypes))), !l || !l["@type"] || !l["@type"].match(this.REGEXPS.jsonLdArticleTypes)))
                return;
              if (i = {}, typeof l.name == "string" && typeof l.headline == "string" && l.name !== l.headline) {
                var p = this._getArticleTitle(), d = this._textSimilarity(l.name, p) > 0.75, g = this._textSimilarity(l.headline, p) > 0.75;
                g && !d ? i.title = l.headline : i.title = l.name;
              } else typeof l.name == "string" ? i.title = l.name.trim() : typeof l.headline == "string" && (i.title = l.headline.trim());
              l.author && (typeof l.author.name == "string" ? i.byline = l.author.name.trim() : Array.isArray(l.author) && l.author[0] && typeof l.author[0].name == "string" && (i.byline = l.author.filter(function(v) {
                return v && typeof v.name == "string";
              }).map(function(v) {
                return v.name.trim();
              }).join(", "))), typeof l.description == "string" && (i.excerpt = l.description.trim()), l.publisher && typeof l.publisher.name == "string" && (i.siteName = l.publisher.name.trim()), typeof l.datePublished == "string" && (i.datePublished = l.datePublished.trim());
            } catch (v) {
              this.log(v.message);
            }
        }), i || {};
      },
      /**
       * Attempts to get excerpt and byline metadata for the article.
       *
       * @param {Object} jsonld — object containing any metadata that
       * could be extracted from JSON-LD object.
       *
       * @return Object with optional "excerpt" and "byline" properties
       */
      _getArticleMetadata(t) {
        var n = {}, i = {}, o = this._doc.getElementsByTagName("meta"), s = /\s*(article|dc|dcterm|og|twitter)\s*:\s*(author|creator|description|published_time|title|site_name)\s*/gi, l = /^\s*(?:(dc|dcterm|og|twitter|parsely|weibo:(article|webpage))\s*[-\.:]\s*)?(author|creator|pub-date|description|title|site_name)\s*$/i;
        this._forEachNode(o, function(u) {
          var p = u.getAttribute("name"), d = u.getAttribute("property"), g = u.getAttribute("content");
          if (g) {
            var v = null, x = null;
            d && (v = d.match(s), v && (x = v[0].toLowerCase().replace(/\s/g, ""), i[x] = g.trim())), !v && p && l.test(p) && (x = p, g && (x = x.toLowerCase().replace(/\s/g, "").replace(/\./g, ":"), i[x] = g.trim()));
          }
        }), n.title = t.title || i["dc:title"] || i["dcterm:title"] || i["og:title"] || i["weibo:article:title"] || i["weibo:webpage:title"] || i.title || i["twitter:title"] || i["parsely-title"], n.title || (n.title = this._getArticleTitle());
        const c = typeof i["article:author"] == "string" && !this._isUrl(i["article:author"]) ? i["article:author"] : void 0;
        return n.byline = t.byline || i["dc:creator"] || i["dcterm:creator"] || i.author || i["parsely-author"] || c, n.excerpt = t.excerpt || i["dc:description"] || i["dcterm:description"] || i["og:description"] || i["weibo:article:description"] || i["weibo:webpage:description"] || i.description || i["twitter:description"], n.siteName = t.siteName || i["og:site_name"], n.publishedTime = t.datePublished || i["article:published_time"] || i["parsely-pub-date"] || null, n.title = this._unescapeHtmlEntities(n.title), n.byline = this._unescapeHtmlEntities(n.byline), n.excerpt = this._unescapeHtmlEntities(n.excerpt), n.siteName = this._unescapeHtmlEntities(n.siteName), n.publishedTime = this._unescapeHtmlEntities(n.publishedTime), n;
      },
      /**
       * Check if node is image, or if node contains exactly only one image
       * whether as a direct child or as its descendants.
       *
       * @param Element
       **/
      _isSingleImage(t) {
        for (; t; ) {
          if (t.tagName === "IMG")
            return !0;
          if (t.children.length !== 1 || t.textContent.trim() !== "")
            return !1;
          t = t.children[0];
        }
        return !1;
      },
      /**
       * Find all <noscript> that are located after <img> nodes, and which contain only one
       * <img> element. Replace the first image with the image from inside the <noscript> tag,
       * and remove the <noscript> tag. This improves the quality of the images we use on
       * some sites (e.g. Medium).
       *
       * @param Element
       **/
      _unwrapNoscriptImages(t) {
        var n = Array.from(t.getElementsByTagName("img"));
        this._forEachNode(n, function(o) {
          for (var s = 0; s < o.attributes.length; s++) {
            var l = o.attributes[s];
            switch (l.name) {
              case "src":
              case "srcset":
              case "data-src":
              case "data-srcset":
                return;
            }
            if (/\.(jpg|jpeg|png|webp)/i.test(l.value))
              return;
          }
          o.remove();
        });
        var i = Array.from(t.getElementsByTagName("noscript"));
        this._forEachNode(i, function(o) {
          if (this._isSingleImage(o)) {
            var s = t.createElement("div");
            s.innerHTML = o.innerHTML;
            var l = o.previousElementSibling;
            if (l && this._isSingleImage(l)) {
              var c = l;
              c.tagName !== "IMG" && (c = l.getElementsByTagName("img")[0]);
              for (var u = s.getElementsByTagName("img")[0], p = 0; p < c.attributes.length; p++) {
                var d = c.attributes[p];
                if (d.value !== "" && (d.name === "src" || d.name === "srcset" || /\.(jpg|jpeg|png|webp)/i.test(d.value))) {
                  if (u.getAttribute(d.name) === d.value)
                    continue;
                  var g = d.name;
                  u.hasAttribute(g) && (g = "data-old-" + g), u.setAttribute(g, d.value);
                }
              }
              o.parentNode.replaceChild(s.firstElementChild, l);
            }
          }
        });
      },
      /**
       * Removes script tags from the document.
       *
       * @param Element
       **/
      _removeScripts(t) {
        this._removeNodes(this._getAllNodesWithTag(t, ["script", "noscript"]));
      },
      /**
       * Check if this node has only whitespace and a single element with given tag
       * Returns false if the DIV node contains non-empty text nodes
       * or if it contains no element with given tag or more than 1 element.
       *
       * @param Element
       * @param string tag of child element
       **/
      _hasSingleTagInsideElement(t, n) {
        return t.children.length != 1 || t.children[0].tagName !== n ? !1 : !this._someNode(t.childNodes, function(i) {
          return i.nodeType === this.TEXT_NODE && this.REGEXPS.hasContent.test(i.textContent);
        });
      },
      _isElementWithoutContent(t) {
        return t.nodeType === this.ELEMENT_NODE && !t.textContent.trim().length && (!t.children.length || t.children.length == t.getElementsByTagName("br").length + t.getElementsByTagName("hr").length);
      },
      /**
       * Determine whether element has any children block level elements.
       *
       * @param Element
       */
      _hasChildBlockElement(t) {
        return this._someNode(t.childNodes, function(n) {
          return this.DIV_TO_P_ELEMS.has(n.tagName) || this._hasChildBlockElement(n);
        });
      },
      /***
       * Determine if a node qualifies as phrasing content.
       * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content
       **/
      _isPhrasingContent(t) {
        return t.nodeType === this.TEXT_NODE || this.PHRASING_ELEMS.includes(t.tagName) || (t.tagName === "A" || t.tagName === "DEL" || t.tagName === "INS") && this._everyNode(t.childNodes, this._isPhrasingContent);
      },
      _isWhitespace(t) {
        return t.nodeType === this.TEXT_NODE && t.textContent.trim().length === 0 || t.nodeType === this.ELEMENT_NODE && t.tagName === "BR";
      },
      /**
       * Get the inner text of a node - cross browser compatibly.
       * This also strips out any excess whitespace to be found.
       *
       * @param Element
       * @param Boolean normalizeSpaces (default: true)
       * @return string
       **/
      _getInnerText(t, n) {
        n = typeof n > "u" ? !0 : n;
        var i = t.textContent.trim();
        return n ? i.replace(this.REGEXPS.normalize, " ") : i;
      },
      /**
       * Get the number of times a string s appears in the node e.
       *
       * @param Element
       * @param string - what to split on. Default is ","
       * @return number (integer)
       **/
      _getCharCount(t, n) {
        return n = n || ",", this._getInnerText(t).split(n).length - 1;
      },
      /**
       * Remove the style attribute on every e and under.
       * TODO: Test if getElementsByTagName(*) is faster.
       *
       * @param Element
       * @return void
       **/
      _cleanStyles(t) {
        if (!(!t || t.tagName.toLowerCase() === "svg")) {
          for (var n = 0; n < this.PRESENTATIONAL_ATTRIBUTES.length; n++)
            t.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[n]);
          this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.includes(t.tagName) && (t.removeAttribute("width"), t.removeAttribute("height"));
          for (var i = t.firstElementChild; i !== null; )
            this._cleanStyles(i), i = i.nextElementSibling;
        }
      },
      /**
       * Get the density of links as a percentage of the content
       * This is the amount of text that is inside a link divided by the total text in the node.
       *
       * @param Element
       * @return number (float)
       **/
      _getLinkDensity(t) {
        var n = this._getInnerText(t).length;
        if (n === 0)
          return 0;
        var i = 0;
        return this._forEachNode(t.getElementsByTagName("a"), function(o) {
          var s = o.getAttribute("href"), l = s && this.REGEXPS.hashUrl.test(s) ? 0.3 : 1;
          i += this._getInnerText(o).length * l;
        }), i / n;
      },
      /**
       * Get an elements class/id weight. Uses regular expressions to tell if this
       * element looks good or bad.
       *
       * @param Element
       * @return number (Integer)
       **/
      _getClassWeight(t) {
        if (!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))
          return 0;
        var n = 0;
        return typeof t.className == "string" && t.className !== "" && (this.REGEXPS.negative.test(t.className) && (n -= 25), this.REGEXPS.positive.test(t.className) && (n += 25)), typeof t.id == "string" && t.id !== "" && (this.REGEXPS.negative.test(t.id) && (n -= 25), this.REGEXPS.positive.test(t.id) && (n += 25)), n;
      },
      /**
       * Clean a node of all elements of type "tag".
       * (Unless it's a youtube/vimeo video. People love movies.)
       *
       * @param Element
       * @param string tag to clean
       * @return void
       **/
      _clean(t, n) {
        var i = ["object", "embed", "iframe"].includes(n);
        this._removeNodes(this._getAllNodesWithTag(t, [n]), function(o) {
          if (i) {
            for (var s = 0; s < o.attributes.length; s++)
              if (this._allowedVideoRegex.test(o.attributes[s].value))
                return !1;
            if (o.tagName === "object" && this._allowedVideoRegex.test(o.innerHTML))
              return !1;
          }
          return !0;
        });
      },
      /**
       * Check if a given node has one of its ancestor tag name matching the
       * provided one.
       * @param  HTMLElement node
       * @param  String      tagName
       * @param  Number      maxDepth
       * @param  Function    filterFn a filter to invoke to determine whether this node 'counts'
       * @return Boolean
       */
      _hasAncestorTag(t, n, i, o) {
        i = i || 3, n = n.toUpperCase();
        for (var s = 0; t.parentNode; ) {
          if (i > 0 && s > i)
            return !1;
          if (t.parentNode.tagName === n && (!o || o(t.parentNode)))
            return !0;
          t = t.parentNode, s++;
        }
        return !1;
      },
      /**
       * Return an object indicating how many rows and columns this table has.
       */
      _getRowAndColumnCount(t) {
        for (var n = 0, i = 0, o = t.getElementsByTagName("tr"), s = 0; s < o.length; s++) {
          var l = o[s].getAttribute("rowspan") || 0;
          l && (l = parseInt(l, 10)), n += l || 1;
          for (var c = 0, u = o[s].getElementsByTagName("td"), p = 0; p < u.length; p++) {
            var d = u[p].getAttribute("colspan") || 0;
            d && (d = parseInt(d, 10)), c += d || 1;
          }
          i = Math.max(i, c);
        }
        return { rows: n, columns: i };
      },
      /**
       * Look for 'data' (as opposed to 'layout') tables, for which we use
       * similar checks as
       * https://searchfox.org/mozilla-central/rev/f82d5c549f046cb64ce5602bfd894b7ae807c8f8/accessible/generic/TableAccessible.cpp#19
       */
      _markDataTables(t) {
        for (var n = t.getElementsByTagName("table"), i = 0; i < n.length; i++) {
          var o = n[i], s = o.getAttribute("role");
          if (s == "presentation") {
            o._readabilityDataTable = !1;
            continue;
          }
          var l = o.getAttribute("datatable");
          if (l == "0") {
            o._readabilityDataTable = !1;
            continue;
          }
          var c = o.getAttribute("summary");
          if (c) {
            o._readabilityDataTable = !0;
            continue;
          }
          var u = o.getElementsByTagName("caption")[0];
          if (u && u.childNodes.length) {
            o._readabilityDataTable = !0;
            continue;
          }
          var p = ["col", "colgroup", "tfoot", "thead", "th"], d = function(v) {
            return !!o.getElementsByTagName(v)[0];
          };
          if (p.some(d)) {
            this.log("Data table because found data-y descendant"), o._readabilityDataTable = !0;
            continue;
          }
          if (o.getElementsByTagName("table")[0]) {
            o._readabilityDataTable = !1;
            continue;
          }
          var g = this._getRowAndColumnCount(o);
          if (g.columns == 1 || g.rows == 1) {
            o._readabilityDataTable = !1;
            continue;
          }
          if (g.rows >= 10 || g.columns > 4) {
            o._readabilityDataTable = !0;
            continue;
          }
          o._readabilityDataTable = g.rows * g.columns > 10;
        }
      },
      /* convert images and figures that have properties like data-src into images that can be loaded without JS */
      _fixLazyImages(t) {
        this._forEachNode(
          this._getAllNodesWithTag(t, ["img", "picture", "figure"]),
          function(n) {
            if (n.src && this.REGEXPS.b64DataUrl.test(n.src)) {
              var i = this.REGEXPS.b64DataUrl.exec(n.src);
              if (i[1] === "image/svg+xml")
                return;
              for (var o = !1, s = 0; s < n.attributes.length; s++) {
                var l = n.attributes[s];
                if (l.name !== "src" && /\.(jpg|jpeg|png|webp)/i.test(l.value)) {
                  o = !0;
                  break;
                }
              }
              if (o) {
                var c = i[0].length, u = n.src.length - c;
                u < 133 && n.removeAttribute("src");
              }
            }
            if (!((n.src || n.srcset && n.srcset != "null") && !n.className.toLowerCase().includes("lazy"))) {
              for (var p = 0; p < n.attributes.length; p++)
                if (l = n.attributes[p], !(l.name === "src" || l.name === "srcset" || l.name === "alt")) {
                  var d = null;
                  if (/\.(jpg|jpeg|png|webp)\s+\d/.test(l.value) ? d = "srcset" : /^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(l.value) && (d = "src"), d) {
                    if (n.tagName === "IMG" || n.tagName === "PICTURE")
                      n.setAttribute(d, l.value);
                    else if (n.tagName === "FIGURE" && !this._getAllNodesWithTag(n, ["img", "picture"]).length) {
                      var g = this._doc.createElement("img");
                      g.setAttribute(d, l.value), n.appendChild(g);
                    }
                  }
                }
            }
          }
        );
      },
      _getTextDensity(t, n) {
        var i = this._getInnerText(t, !0).length;
        if (i === 0)
          return 0;
        var o = 0, s = this._getAllNodesWithTag(t, n);
        return this._forEachNode(
          s,
          (l) => o += this._getInnerText(l, !0).length
        ), o / i;
      },
      /**
       * Clean an element of all tags of type "tag" if they look fishy.
       * "Fishy" is an algorithm based on content length, classnames, link density, number of images & embeds, etc.
       *
       * @return void
       **/
      _cleanConditionally(t, n) {
        this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY) && this._removeNodes(this._getAllNodesWithTag(t, [n]), function(i) {
          var o = function(M) {
            return M._readabilityDataTable;
          }, s = n === "ul" || n === "ol";
          if (!s) {
            var l = 0, c = this._getAllNodesWithTag(i, ["ul", "ol"]);
            this._forEachNode(
              c,
              (M) => l += this._getInnerText(M).length
            ), s = l / this._getInnerText(i).length > 0.9;
          }
          if (n === "table" && o(i) || this._hasAncestorTag(i, "table", -1, o) || this._hasAncestorTag(i, "code") || [...i.getElementsByTagName("table")].some(
            (M) => M._readabilityDataTable
          ))
            return !1;
          var u = this._getClassWeight(i);
          this.log("Cleaning Conditionally", i);
          var p = 0;
          if (u + p < 0)
            return !0;
          if (this._getCharCount(i, ",") < 10) {
            for (var d = i.getElementsByTagName("p").length, g = i.getElementsByTagName("img").length, v = i.getElementsByTagName("li").length - 100, x = i.getElementsByTagName("input").length, _ = this._getTextDensity(i, [
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6"
            ]), A = 0, E = this._getAllNodesWithTag(i, [
              "object",
              "embed",
              "iframe"
            ]), b = 0; b < E.length; b++) {
              for (var y = 0; y < E[b].attributes.length; y++)
                if (this._allowedVideoRegex.test(E[b].attributes[y].value))
                  return !1;
              if (E[b].tagName === "object" && this._allowedVideoRegex.test(E[b].innerHTML))
                return !1;
              A++;
            }
            var w = this._getInnerText(i);
            if (this.REGEXPS.adWords.test(w) || this.REGEXPS.loadingWords.test(w))
              return !0;
            var h = w.length, f = this._getLinkDensity(i), C = ["SPAN", "LI", "TD"].concat(
              Array.from(this.DIV_TO_P_ELEMS)
            ), T = this._getTextDensity(i, C), R = this._hasAncestorTag(i, "figure"), k = (() => {
              const I = [];
              return !R && g > 1 && d / g < 0.5 && I.push(`Bad p to img ratio (img=${g}, p=${d})`), !s && v > d && I.push(`Too many li's outside of a list. (li=${v} > p=${d})`), x > Math.floor(d / 3) && I.push(`Too many inputs per p. (input=${x}, p=${d})`), !s && !R && _ < 0.9 && h < 25 && (g === 0 || g > 2) && f > 0 && I.push(
                `Suspiciously short. (headingDensity=${_}, img=${g}, linkDensity=${f})`
              ), !s && u < 25 && f > 0.2 + this._linkDensityModifier && I.push(
                `Low weight and a little linky. (linkDensity=${f})`
              ), u >= 25 && f > 0.5 + this._linkDensityModifier && I.push(
                `High weight and mostly links. (linkDensity=${f})`
              ), (A === 1 && h < 75 || A > 1) && I.push(
                `Suspicious embed. (embedCount=${A}, contentLength=${h})`
              ), g === 0 && T === 0 && I.push(
                `No useful content. (img=${g}, textDensity=${T})`
              ), I.length ? (this.log("Checks failed", I), !0) : !1;
            })();
            if (s && k) {
              for (var B = 0; B < i.children.length; B++)
                if (i.children[B].children.length > 1)
                  return k;
              let I = i.getElementsByTagName("li").length;
              if (g == I)
                return !1;
            }
            return k;
          }
          return !1;
        });
      },
      /**
       * Clean out elements that match the specified conditions
       *
       * @param Element
       * @param Function determines whether a node should be removed
       * @return void
       **/
      _cleanMatchedNodes(t, n) {
        for (var i = this._getNextNode(t, !0), o = this._getNextNode(t); o && o != i; )
          n.call(this, o, o.className + " " + o.id) ? o = this._removeAndGetNext(o) : o = this._getNextNode(o);
      },
      /**
       * Clean out spurious headers from an Element.
       *
       * @param Element
       * @return void
       **/
      _cleanHeaders(t) {
        let n = this._getAllNodesWithTag(t, ["h1", "h2"]);
        this._removeNodes(n, function(i) {
          let o = this._getClassWeight(i) < 0;
          return o && this.log("Removing header with low class weight:", i), o;
        });
      },
      /**
       * Check if this node is an H1 or H2 element whose content is mostly
       * the same as the article title.
       *
       * @param Element  the node to check.
       * @return boolean indicating whether this is a title-like header.
       */
      _headerDuplicatesTitle(t) {
        if (t.tagName != "H1" && t.tagName != "H2")
          return !1;
        var n = this._getInnerText(t, !1);
        return this.log("Evaluating similarity of header:", n, this._articleTitle), this._textSimilarity(this._articleTitle, n) > 0.75;
      },
      _flagIsActive(t) {
        return (this._flags & t) > 0;
      },
      _removeFlag(t) {
        this._flags = this._flags & ~t;
      },
      _isProbablyVisible(t) {
        return (!t.style || t.style.display != "none") && (!t.style || t.style.visibility != "hidden") && !t.hasAttribute("hidden") && //check for "fallback-image" so that wikimedia math images are displayed
        (!t.hasAttribute("aria-hidden") || t.getAttribute("aria-hidden") != "true" || t.className && t.className.includes && t.className.includes("fallback-image"));
      },
      /**
       * Runs readability.
       *
       * Workflow:
       *  1. Prep the document by removing script tags, css, etc.
       *  2. Build readability's DOM tree.
       *  3. Grab the article content from the current dom tree.
       *  4. Replace the current DOM tree with the new one.
       *  5. Read peacefully.
       *
       * @return void
       **/
      parse() {
        if (this._maxElemsToParse > 0) {
          var t = this._doc.getElementsByTagName("*").length;
          if (t > this._maxElemsToParse)
            throw new Error(
              "Aborting parsing document; " + t + " elements found"
            );
        }
        this._unwrapNoscriptImages(this._doc);
        var n = this._disableJSONLD ? {} : this._getJSONLD(this._doc);
        this._removeScripts(this._doc), this._prepDocument();
        var i = this._getArticleMetadata(n);
        this._metadata = i, this._articleTitle = i.title;
        var o = this._grabArticle();
        if (!o)
          return null;
        if (this.log("Grabbed: " + o.innerHTML), this._postProcessContent(o), !i.excerpt) {
          var s = o.getElementsByTagName("p");
          s.length && (i.excerpt = s[0].textContent.trim());
        }
        var l = o.textContent;
        return {
          title: this._articleTitle,
          byline: i.byline || this._articleByline,
          dir: this._articleDir,
          lang: this._articleLang,
          content: this._serializer(o),
          textContent: l,
          length: l.length,
          excerpt: i.excerpt,
          siteName: i.siteName || this._articleSiteName,
          publishedTime: i.publishedTime
        };
      }
    }, e.exports = r;
  }(Q1)), Q1.exports;
}
var en = { exports: {} }, va;
function Yd() {
  return va || (va = 1, function(e) {
    var r = {
      // NOTE: These two regular expressions are duplicated in
      // Readability.js. Please keep both copies in sync.
      unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
      okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i
    };
    function t(i) {
      return (!i.style || i.style.display != "none") && !i.hasAttribute("hidden") && //check for "fallback-image" so that wikimedia math images are displayed
      (!i.hasAttribute("aria-hidden") || i.getAttribute("aria-hidden") != "true" || i.className && i.className.includes && i.className.includes("fallback-image"));
    }
    function n(i, o = {}) {
      typeof o == "function" && (o = { visibilityChecker: o });
      var s = {
        minScore: 20,
        minContentLength: 140,
        visibilityChecker: t
      };
      o = Object.assign(s, o);
      var l = i.querySelectorAll("p, pre, article"), c = i.querySelectorAll("div > br");
      if (c.length) {
        var u = new Set(l);
        [].forEach.call(c, function(d) {
          u.add(d.parentNode);
        }), l = Array.from(u);
      }
      var p = 0;
      return [].some.call(l, function(d) {
        if (!o.visibilityChecker(d))
          return !1;
        var g = d.className + " " + d.id;
        if (r.unlikelyCandidates.test(g) && !r.okMaybeItsACandidate.test(g) || d.matches("li p"))
          return !1;
        var v = d.textContent.trim().length;
        return v < o.minContentLength ? !1 : (p += Math.sqrt(v - o.minContentLength), p > o.minScore);
      });
    }
    e.exports = n;
  }(en)), en.exports;
}
var tn, Ca;
function Kd() {
  if (Ca) return tn;
  Ca = 1;
  var e = Xd(), r = Yd();
  return tn = {
    Readability: e,
    isProbablyReaderable: r
  }, tn;
}
var nl = Kd();
const Jd = "body[data-vwp-font=open-dyslexic] *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus){font-family:OpenDyslexic_Font,sans-serif!important}body[data-vwp-font=comic-neue] *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus){font-family:ComicNeue_Font,sans-serif!important}", rn = ["open-dyslexic", "comic-neue"], Qd = "vwp-dyslexic-font-style", il = () => {
  const [e, r] = $([]), { dyslexicFont: t } = N(), { path: n } = Lr(), [i, o] = $(-1), [s, l] = $();
  P(() => {
    t && Ke(Jd, Qd);
  }, [t]), P(() => {
    n && (o(rn.findIndex((p) => p === t)), l(t), u(t));
  }, [n, t]);
  const c = () => {
    const p = i + 1 < rn.length ? i + 1 : -1, d = rn[p] || void 0;
    o(p), l(d), N.setState({ dyslexicFont: d });
  }, u = async (p) => {
    switch (p) {
      case "open-dyslexic":
        e.includes("open-dyslexic") || await $u(n), r((d) => [...d, "open-dyslexic"]);
        break;
      case "comic-neue":
        e.includes("comic-neue") || await zu(n), r((d) => [...d, "comic-neue"]);
    }
    if (!p) return document.body.removeAttribute("data-vwp-font");
    document.body.dataset.vwpFont = p;
  };
  return { toggleFont: c, index: i, option: s };
}, e0 = (e, r = 150) => {
  const t = e.trim().split(/\s+/).length;
  return Math.ceil(t / r);
}, t0 = () => {
  const [e, r] = $(), { theme: t } = kr(), { highlightTitles: n, highlightLinks: i, readerMode: o } = N(), { option: s } = Us(), { option: l } = Gs(), { option: c } = il(), { option: u } = Vs();
  if (P(() => {
    const g = document.cloneNode(!0), x = new nl.Readability(g).parse();
    r({ ...x, readingTime: e0((x == null ? void 0 : x.textContent) || "") });
  }, []), !(e != null && e.content)) return null;
  const p = e != null && e.content ? Zd.sanitize(e.content) : "", d = Sd(p, {
    replace: (g) => {
      if (g.type === "tag" && g.name === "a") {
        const v = g;
        return /* @__PURE__ */ a("a", { ...v.attribs, target: "_blank", rel: "noopener noreferrer", children: Ks.domToReact(v.children) });
      }
    }
  });
  return /* @__PURE__ */ a(ve, { children: [
    /* @__PURE__ */ a("style", { children: fd }),
    /* @__PURE__ */ a(
      "div",
      {
        id: "vwp-reader-mode-view",
        "data-active": o,
        "data-theme": t,
        "data-highlight-titles": n,
        "data-highlight-links": i,
        style: {
          fontSize: 18 * ((s == null ? void 0 : s.value) || 1),
          lineHeight: 1.5 * ((l == null ? void 0 : l.value) || 1),
          letterSpacing: (u == null ? void 0 : u.value) || 0,
          fontFamily: c ? c === "open-dyslexic" ? "OpenDyslexic_Font" : "ComicNeue_Font" : "inherit"
        },
        children: /* @__PURE__ */ a("div", { className: "vwp-reader-mode-container", children: [
          /* @__PURE__ */ a("header", { children: [
            /* @__PURE__ */ a("h1", { style: { fontSize: 36 * ((s == null ? void 0 : s.value) || 1) }, children: e.title }),
            /* @__PURE__ */ a("p", { style: { fontSize: 16 * ((s == null ? void 0 : s.value) || 1) }, children: [
              "Tempo de leitura: ",
              e.readingTime,
              " minuto(s)"
            ] })
          ] }),
          /* @__PURE__ */ a("div", { class: "vwp-reader-mode-content", children: d })
        ] })
      }
    )
  ] });
}, r0 = "vwp-reader-mode", n0 = "vwp-reader-mode-overlay", i0 = () => {
  const { readerMode: e } = N();
  P(() => {
    N.getState().readerMode && r(!0);
  }, []), P(() => {
    const t = Xn(n0);
    Ye(/* @__PURE__ */ a(t0, {}), t);
  }, []);
  const r = (t) => {
    const n = t !== void 0 ? t : !e;
    N.setState({ readerMode: n }), document.body.classList.toggle(r0, n);
  };
  return { toggle: r, isActive: !!e };
}, ya = () => {
  const { t: e } = z(), { toggle: r, isActive: t } = i0();
  if (nl.isProbablyReaderable(document))
    return /* @__PURE__ */ a(le, { showActiveIndicator: !0, "aria-label": e("al.reader_mode"), isActive: t, onClick: () => r(), children: [
      /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(Qu, { iconTitle: e("al.reader_mode") }) }),
      /* @__PURE__ */ a(ce, { children: e("reader_mode") }),
      /* @__PURE__ */ a(ue, { children: e(t ? "actived" : "deactivated") })
    ] });
}, o0 = "body *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus) .vwp-text-reader{cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXkSURBVHgBzVlNSBxXHP+/t+qukBBPie0hbKF6S5uESgyNdkMCpcmhLQULPW3SWynRY4MGlaDNLbH0Wj8uPQhp7KHpJSWb1sOCpWvw5hY6eEn0UkVBV9338n6zzu7szHu7s+6syQ+G2Z2P9/7fX8MujO8MMGL9pCAltTGiNtKBkWWfJSucSVokyZJMrjMhn+d5fn1h8NgiHTFY99juU0VMgkKCEsaiAHMkU2Asfac1RQ0E6x7P/ackGaeGgqUkiTlB+8/C1hK7MJb732g2jYHFJJuTe/mJ9GirRXVCmVBO0msDS5Gg6fSdlhk6JF4zA0VYJNjIYRh5UxhwYOVp7/Na/ITTm4V4hJozSqhTiWEZyC+PhIG3TjD7qAHJnZbdTPfwdrzag6Gb0LnTjM6rA+eOU4yORcvvb+WIllcl/ZVVx7KkFxvm7dUdlSTZQCXfCC0PXDvD1VEgvBb8syLp9yVJj5dEpcdG04PREd2NuhkAwUPXI9R+guoCGBn/TZg1IlhSp4m6fODrS5x+/Kp+4gGY3fSNCPV9YCCJy+musa2zvsul4qw2DF7ndPNSuDHgWIyo/6p5XRWhHnmjE7eryhoB4mHzjQI0a2Aivh3dG3Zf4Iyxdapx8UYSX20fJuVA993thPOfCyksCgjE8rDNBsiu6qNQ/xWuzx88UtQCZyQ3KCDgsI3AmIo+OGb/LmcCPnHrik5gMuFogXOKBKo7oM4woo0OTu74aV7Yic6N3k59bmEs8inOvGW32aIA6OsKlqA2VWIHIR/f36cP7+1TciqvNY/sWikLw96Rsbd2iGYX/M/2dvj3FkwmbQZSo8qJnX7XAJQEHSeDMfDtz3madEkS9u01DxCanMzbzOE5mEpfV8FUHi/5Exm07y1J0ITBjOy3mKSKZhS0PICk/13V3/OahyNxRzs9B1KGVrxmBAYhRC8kZ+/bDKgmPEUVoFOhDigHTACxjsmAoJ7Owpoo7IC3XdFmc0cGpeFAA2p6QBUQlvOCCd3vIGjXhFM1ATlrMxDbj1U0oaC1fG8Hr7iGY4ogHuU0cP504Z3ltZLUj8f8+3Wc8q+p3miz37YdGQ12nUDIM2XpW1fLr8MHwBRKcMDxBV0PYQIcuan4Tyo/YJSgOoE6CZIGQS9Vinz3JNGXXbwsEMAHHn5T2hq+kTnwH2M1aoCLAfGMWDhlQk8nIldpLZ0JuqWMCAVm3Rrx4oWhXigygBGgGnKt64ZckFA1P0AE+jMraH6ZtE0JNIBIgujjXcsJvV4zc8Pg9FaT+5/KBw+UGY14n8qsKOmc0S5gEz3xpCDBSoCJ4Jj4g+gTJWVkX4eRe19EbKYr5ZvsmiZES1nOgMmMCi/7F0eWvf2wYi+rBXrglxuiWBwiTLdX0XBGk2MY8cUyaguTZH80MjXcurQfFCBIK1UN3E7uBhKwX9wiP+q9BPvTLbBZ50QmaDLLGDI82xPPfQzYWtAUd4gUXtQ4rDr0+7q9EfYx3W7SviGF0gKfcl9ynNDtaHBESDGoKThACL32XrD+wgmxfhr5NE5GEei+3GDDmZtNgTNlvYDto+z2VqcKlhp0vYMf5sCr8QVIAiHzKAD/Qm+hIR7dzIjz08gAfEFNLB54ryMiTc43nokfnkhTbrHcE7qKtUM01zxqcuhGMQHJo4Mzzkp3xWX336phoPv77bgUPKMrMVAWGEcfhwBs/rtf8sauTtXPI+mhaJlpB9r54t3cZ5LTI909OHa9wy5IfXZB2g291uZtsOn0YMsN31UKiO6x7aQ3tLrhMAKtHI8Gn2BUJ5wKMX8odll3qybdgwlJ/H61z7JO5Wk3J7FS6Qwis6vovgrNf2YlSP7QS754l2oEfEIlkaeN/zhOWpv3ombDTd9utWK5lnOQDDUOFmM8UY14oK7wYWsjz6bUnC9BIcD+JqZ6kiCEOwgl/tmMCDUxZqr0OIxpKSeVjOZad6MzhQFDcIQTwF24OL73kRQioQjCzCau0lHc4/QWOik0Iyo0L8Zyzb/WSrQbrwDCzLLGTU5efAAAAABJRU5ErkJggg==),pointer!important;text-decoration:underline!important}", a0 = {
  event: null,
  isActive: !1,
  onClick: void 0,
  type: "button",
  element: null,
  listener: null,
  render: void 0
}, gt = vt()(() => ({
  ...a0
})), s0 = Array.from([document.body, ...document.body.children]), nn = Du(), on = Rt(".vp-guide-container"), l0 = (e) => {
  var r;
  return it(e, ["IMG"]) ? e.alt : Qn(e) ? e.value : it(e, ["SELECT"]) ? (r = Rt(`[value="${e.value}"]`, e)) == null ? void 0 : r.innerText : e.innerText.trim() || "";
}, ol = (e) => {
  let r = e;
  for (; r && !s0.includes(r); ) {
    if (c0(r) || r.onclick && !p0(r)) return r;
    r = r.parentNode;
  }
  return null;
}, _a = (e) => nn != null && nn.contains(e) || on != null && on.contains(e) || e.matches(".vw-links") ? !1 : h0(e) || ol(e) || Qn(e) || u0(e) || d0(e), it = (e, r) => r.includes(e.tagName), c0 = (e) => it(e, ["A", "BUTTON"]), Qn = (e) => it(e, "INPUT") && e.type === "submit", u0 = (e) => it(e, "IMG") && e.alt && e.alt.trim(), d0 = (e) => it(e, "SELECT"), p0 = (e) => it(e, ["SVG", "PATH"]), h0 = (e) => {
  const r = (t) => {
    var n;
    return t.nodeType === Node.TEXT_NODE && ((n = t == null ? void 0 : t.textContent) == null ? void 0 : n.trim());
  };
  return Array.from(e.childNodes).some((t) => r(t));
}, f0 = (e) => {
  if (!e.parentElement) return;
  const r = Rt("input", e.parentElement);
  r && ["radio", "checkbox"].includes(r.type) && (r.checked = !r.checked);
}, g0 = (e, r) => {
  var d;
  let t = null, n = 0;
  if (document.caretPositionFromPoint) {
    const g = document.caretPositionFromPoint(e, r);
    if (!g || !g.offsetNode) return null;
    t = g.offsetNode, n = g.offset;
  } else if (document.caretRangeFromPoint) {
    const g = document.caretRangeFromPoint(e, r);
    if (!g || !g.startContainer) return null;
    t = g.startContainer, n = g.startOffset;
  }
  if (!t || t.nodeType !== Node.TEXT_NODE) return null;
  const i = t.textContent ?? "";
  if (!i.trim()) return null;
  const o = i.slice(0, n), s = i.slice(n), l = o.match(/[\wÀ-ú’-]+$/), c = s.match(/^[\wÀ-ú’-]+/), u = `${(l == null ? void 0 : l[0]) ?? ""}${(c == null ? void 0 : c[0]) ?? ""}`;
  if (!u) return null;
  const p = n - (((d = l == null ? void 0 : l[0]) == null ? void 0 : d.length) ?? 0);
  return { word: u, node: t, offset: p };
}, m0 = (e) => {
  document.querySelectorAll(`span.${e}`).forEach((r) => {
    const t = r.parentNode;
    if (!t) return;
    const n = document.createTextNode(r.textContent || "");
    t.replaceChild(n, r), t.normalize();
  });
}, al = ({
  callback: e,
  isWordByWord: r,
  markWordClss: t,
  hoverClss: n,
  isOnlyClick: i
}) => {
  if (r && !(t != null && t.trim()))
    throw new Error("markWordClss is required when isWordByWord is true");
  const o = (u) => {
    if (!n) return;
    const p = u.target;
    _a(p) && p.classList.add(n);
  }, s = (u) => {
    const p = u.target, d = window.getSelection(), g = d == null ? void 0 : d.toString().trim(), v = t && p.classList.contains(t);
    if (t && !v && m0(t), gt.setState({ isActive: !1 }), !_a(p)) return;
    if (g && !r) return e == null ? void 0 : e(g);
    if (u.preventDefault(), u.stopPropagation(), r && t) {
      const { word: _, node: A, offset: E } = g0(u.clientX, u.clientY) || {};
      if (_ && A && typeof E == "number") {
        const b = document.createRange();
        if (b.setStart(A, E), b.setEnd(A, E + _.length), !v) {
          const y = document.createElement("span");
          y.className = t, y.textContent = _, b.deleteContents(), b.insertNode(y);
        }
        e == null || e(_);
      }
    } else {
      const _ = l0(p);
      _ != null && _.trim() && (e == null || e(_));
    }
    const x = p.tagName === "A" ? p : ol(p);
    x && c(x, u), it(p, "LABEL") ? f0(p) : (it(p, "BUTTON") || Qn(p)) && c(p, u);
  }, l = (u) => {
    if (!n) return;
    u.target.classList.remove(n);
  }, c = (u, p) => {
    gt.setState({
      isActive: !0,
      event: p,
      type: u.tagName.toLowerCase() === "a" ? "link" : "button",
      onClick: () => {
        u.dispatchEvent(new MouseEvent("click", { bubbles: !0 })), gt.setState({ isActive: !1 });
      }
    });
  };
  return document.body.removeEventListener("mouseover", o), document.body.removeEventListener("mouseout", l), document.body.removeEventListener("click", s, !0), i || (document.body.addEventListener("mouseover", o), document.body.addEventListener("mouseout", l)), document.body.addEventListener("click", s, !0), () => {
    document.body.removeEventListener("mouseover", o), document.body.removeEventListener("mouseout", l), document.body.removeEventListener("click", s, !0);
  };
}, v0 = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-ES"
};
let et = null;
const xn = (e, r) => {
  if (!("speechSynthesis" in window))
    return console.error(As("speech_is_not_supported", { locale: (r == null ? void 0 : r.locale) || "pt" })), null;
  const t = () => {
    const n = v0[(r == null ? void 0 : r.locale) || "pt"] || "pt-BR", i = speechSynthesis.getVoices();
    et = new SpeechSynthesisUtterance(e);
    let o = i.find((s) => s.lang === n);
    o || (console.warn(`Voz para ${n} não encontrada. Usando fallback en-US.`), o = i.find((s) => s.lang === "en-US")), et.lang = n, et.rate = (r == null ? void 0 : r.velocity) || 1, et.pitch = 1, et.volume = 1, et.voice = o || null, speechSynthesis.cancel(), speechSynthesis.speak(et), et.onend = () => speechSynthesis.cancel();
  };
  return speechSynthesis.getVoices().length === 0 ? window.speechSynthesis.onvoiceschanged = () => t() : t(), et;
}, sl = () => {
  "speechSynthesis" in window && speechSynthesis.cancel();
}, C0 = "vwp-text-reader-style", y0 = () => {
  const { textReader: e } = N();
  return P(() => {
    e != null && e.isActive && Ke(o0, C0);
  }, [e]), P(() => {
    const t = e != null && e.isActive ? al({
      hoverClss: "vwp-text-reader",
      callback: (n) => xn(n, { velocity: e == null ? void 0 : e.velocity })
    }) : void 0;
    return () => {
      t == null || t();
    };
  }, [e]), { toggle: (t) => {
    const n = t !== void 0 ? t : !(e != null && e.isActive);
    n ? xn(As("text_reader_is_actived")) : sl(), N.setState({ textReader: { isActive: n }, largeCursor: void 0, dictionary: void 0 });
  }, isActive: !!(e != null && e.isActive) };
}, _0 = () => {
  const { t: e } = z(), { toggle: r, isActive: t } = y0(), n = "speechSynthesis" in window;
  return /* @__PURE__ */ a(
    le,
    {
      disabled: !n,
      showActiveIndicator: !0,
      "aria-label": e("al.text_reader"),
      isActive: t,
      onClick: () => r(),
      children: [
        /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(Hs, { iconTitle: e("al.text_reader") }) }),
        /* @__PURE__ */ a(ce, { children: e("text_reader") }),
        /* @__PURE__ */ a(ue, { children: e(n ? t ? "actived" : "deactivated" : "no_support") })
      ]
    }
  );
}, b0 = "body *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus) .vwp-dictionary{cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAY4SURBVHgBzVlNTFRXFD73jTKQaLQbf7qwNBF3WGlqxNSfIZI0wqK0pDRxRXHVpi0s26KBiYWyU9omrsrPpkmpiXShTZM2Dtom00AK6g5M+sJCxY0YTWCAudfzvcfAzHv3vXmPmUG+ZPLm/d17vnvP/c6554ljvYsdgkQ7MZSi3YJoN+kgyLSOSthHUiYpMpVQ80Kqu2kjPT/euWOKNhmitmfpFhsToyKBB2NKghypBIglL1YkqIQQtb2p/3kkK6mkEAlFclTSylixZ0kc60k99XSb0sAUSoyq5XR/Ml5hUoFgF0opemUQCZI0lLxYNkwbxCsmsAaTpOjeCJGtQiADM03LH4RZJwZtLVRGaPskD+pgrEsFWpdbjUAGrYtlS5O1XQuV+R4sugvtjAo6e1hQ1R78iPZzaNwRte+9SBE9mlf06BnRnRlFk7P479093+EgKTr81kbR4kDNAUHnTxjWMQxuTysamZAWGR/Ek53Rbt2Nggns3yWoszG84U6AyPd/Se8ZkaJVNxMFEWg5alijnnGRQvFikeinv6U1IzqwQtU4FcpYT87CAYa3nyme8cCOcqL2eoPaTui1hRXqulOdDCurDAkY79VJMeDTfuVCdLkr+4IhhJinEIDblNL4DECi5R13P0KpjtpLC7HMuSGVNCkgsGDPn9i80IG+0KcLRmRtFgxB6hkFxJf1xfX5fMCa+KZRN2AqlpmFbQZFsAHJ15Ylk6eq3KPxH+v37RlJU7N2kEKwAkkEsIMcyBqr1yXW79kjB4hOV7nl+G0+xzVnnBAi8j4fEgKrmsP2U8qDvuYInXQQ+PzndL4AtEYeCPJsAxPudIw6iH/BfWUDUfrfzuhrVsv5YgH88NqnEdf1d/tWKAyQZrQctUe0aq+dYmAWpueUlVqMjNv6/89X21zvvnd5xXo2B1LWWVSFIt/0NUyUhZHahce49lmEPmICmIeb96QVtHDcCf0/4y8OmBknlCHesqhKbMBJNHm9fOpQcAJDbRF6vqiodTDtuocRb76apsca2dCNejYwYxrErLdQPYAeeWHfLgoEzNRDzmXE6n+dz3/M2g5jsl0IhPMBguAED/oRi0D5SvkUL2TPl71cwglM8837cAlbsXQEDrLhY6xEv0zYuQ+kEs/ur/bv43WNDdz6bsuxEnFEY95geyCo9sPVMh2BjO49qMmv44oezNnnj7nnkYn8MwCiTqCasu54SiX4Sow2CBgMV9jHBPbx+XPeJ51kQr/fzzXuh3MROrRXFC0gZhGQYyT0SpAJOH5oYBeAqmQMPlsNNzL4PHcxP2DJHODnZubWA1nNG4L6Poz4tg938yWAEiAXueZ1RS5sMrBF9MO3N3LVBUQmZ91KBHeBKDQcNkIt4of6jY6Zo10cD66wG3U7n5phf63aQ77QSaPumi4gBoGuLXb7XAJebjTzBOwL2zIC+XIhP+A9JwQZUy6rdNVqKMAfHe5AEzaVCApdUGu+uuKaBf4c0OR+UqbjZBix7EtYQNB0Z0qB+IB7KKNAy535jb0O1ksnfrkQnkUM0cUcbPh1LiSW5V2tX+iSO3T647lc/80kV34KhY7hOiDacNhfPr3a02a9LPvJC+V1+gREyTjvdQazL6EB5ywE0XJLcaqDrR9dexh9bRqujCEcPFvWrQUYM9y2bdN2ZQiGrQPa5M/kQteb+OOdw2ItOICGEKw2CwN39L6PUnzmrycBBDauWFxxXsemY2ATSPgUuMzsCp3vLiKa2h5f+zrpaLyUJHzbX5J12ae+BKwsVcg67D91nfRzLdO1zSsA8Pn+P32MV9Tt/K4WSB6OX0o1KYOu6+5hYXfUuzf8YQGp7bmh363ZEEPJzrJPXFcpIGp7Flqd0poNyCuqdqdCEoHhGHHfisWq5utuheoNJBQZl/0+y2JGrBrSIVTV7HNEYAAughFGcjj9hFPveyqAC+pHfkMELBLf8WcfZdwq/cdxsn3+QjTu90joQmfy6wqzPFVWg5Gh0sEUwojlMx4oaOVZs5EWg1zni1ERYH0T4z1JEMMzKDzJp1UikivGglOPjbgWL1IlaLRiKTpsFxiCoygEsnG8d/m0kjLGBh1h/6xkRa90LHoTOylsRliap8pT238La3Q2XgKRMujGoESLwAAAAABJRU5ErkJggg==),pointer!important}body *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus) .vwp-mark-word{background:#2670e8!important;border-radius:4px!important;color:#fff!important;padding:0 2px!important;position:relative!important;display:inline-block!important;transition:all .3s ease!important}", w0 = "vwp-dictionary-style", ll = () => {
  const { dictionary: e } = N(), r = jn("(max-width: 980px)");
  return P(() => {
    e && Ke(b0, w0);
  }, [e]), P(() => {
    const n = e != null && e.isActive ? al({
      hoverClss: "vwp-dictionary",
      markWordClss: "vwp-mark-word",
      isWordByWord: !0,
      callback: (i) => N.setState({ dictionary: { ...e, word: i } })
    }) : void 0;
    return () => {
      n == null || n();
    };
  }, [e]), { toggle: (n) => {
    const i = n !== void 0 ? n : !(e != null && e.isActive);
    N.setState({
      dictionary: { isActive: i },
      pageStructure: void 0,
      textReader: void 0,
      largeCursor: void 0
    }), r && N.setState({ isOpenWidget: !i });
  }, isActive: !!(e != null && e.isActive) };
}, x0 = () => {
  const { t: e, locale: r } = z(), { toggle: t, isActive: n } = ll(), i = r !== "pt";
  return /* @__PURE__ */ a(
    le,
    {
      disabled: i,
      className: "min-h-full",
      showActiveIndicator: !0,
      "aria-label": e("al.dictionary"),
      isActive: n,
      onClick: () => t(),
      children: [
        /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(Fs, { iconTitle: e("al.dictionary") }) }),
        /* @__PURE__ */ a(ce, { children: e("dictionary") }),
        /* @__PURE__ */ a(ue, { children: e(i ? "only_pt" : n ? "actived" : "deactivated") })
      ]
    }
  );
}, A0 = () => {
  const { t: e } = z(), { toggleFont: r, option: t, index: n } = il();
  return /* @__PURE__ */ a(le, { "aria-label": e("al.dyslexic_font"), isActive: !!t, onClick: r, children: [
    /* @__PURE__ */ a(st, { size: 2, actived: n }),
    /* @__PURE__ */ a(de, { children: t === "comic-neue" ? /* @__PURE__ */ a(m3, { iconTitle: e("al.dyslexic_font") }) : /* @__PURE__ */ a(zs, { iconTitle: e("al.dyslexic_font") }) }),
    /* @__PURE__ */ a(ce, { children: e("dyslexic_font") }),
    /* @__PURE__ */ a(ue, { children: e(t ? "actived" : "deactivated") })
  ] });
}, E0 = () => {
  const { disableSound: e } = N();
  P(() => {
    N.getState().disableSound && r(!0);
  }, []);
  const r = (t) => {
    const n = t !== void 0 ? t : !e;
    N.setState({ disableSound: n }), Ot("audio, video").forEach((i) => {
      i.muted = !n;
    });
  };
  return { toggle: r, isActive: !!e };
}, S0 = () => {
  const { t: e } = z(), { isActive: r, toggle: t } = E0();
  return /* @__PURE__ */ a(le, { showActiveIndicator: !0, "aria-label": e("al.disable_sound"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(c3, { iconTitle: e("al.disable_sound") }) }),
    /* @__PURE__ */ a(ce, { children: e("disable_sounds") }),
    /* @__PURE__ */ a(ue, { children: e(r ? "actived" : "deactivated") })
  ] });
}, an = [15, 30, 50, 75], T0 = () => {
  const { brightness: e } = N(), [r, t] = $(-1), [n, i] = $();
  return P(() => {
    t(an.findIndex((s) => s === e)), i(e);
  }, [e]), { toggle: () => {
    const s = r + 1 < an.length ? r + 1 : -1, l = an[s] || void 0;
    t(s), i(l), N.setState({ brightness: l });
  }, index: r, option: n };
}, N0 = () => {
  const { t: e } = z(), { toggle: r, option: t, index: n } = T0();
  return /* @__PURE__ */ a(le, { "aria-label": e("al.reduce_brightness"), isActive: !!t, onClick: r, children: [
    /* @__PURE__ */ a(st, { size: 4, actived: n }),
    /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(v3, {}) }),
    /* @__PURE__ */ a(ce, { children: e("reduce_brightness") }),
    /* @__PURE__ */ a(ue, { children: t ? `${t}%` : e("deactivated") })
  ] });
}, sn = ["blue", "yellow"], k0 = () => {
  const { nightFilter: e } = N(), [r, t] = $(-1), [n, i] = $();
  return P(() => {
    t(sn.findIndex((s) => s === e)), i(e);
  }, [e]), { toggle: () => {
    const s = r + 1 < sn.length ? r + 1 : -1, l = sn[s] || void 0;
    t(s), i(l), N.setState({ nightFilter: l });
  }, index: r, option: n };
}, L0 = () => {
  const { t: e } = z(), { toggle: r, option: t, index: n } = k0();
  return /* @__PURE__ */ a(le, { "aria-label": e("al.night_filter"), isActive: !!t, onClick: () => r(), children: [
    /* @__PURE__ */ a(st, { size: 2, actived: n }),
    /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(C3, { iconTitle: e("al.night_filter") }) }),
    /* @__PURE__ */ a(ce, { children: e("night_filter") }),
    /* @__PURE__ */ a(ue, { children: e(t ? "actived" : "deactivated") })
  ] });
}, R0 = () => {
  const { disableAutoplay: e } = N();
  P(() => {
    N.getState().disableAutoplay && r(!0);
  }, []);
  const r = (t) => {
    const n = t !== void 0 ? t : !e;
    N.setState({ disableAutoplay: n }), Ot("audio, video").forEach((i) => {
      i.autoplay = !n;
    });
  };
  return { toggle: r, isActive: !!e };
}, M0 = () => {
  const { t: e } = z(), { isActive: r, toggle: t } = R0();
  return /* @__PURE__ */ a(
    le,
    {
      showActiveIndicator: !0,
      "aria-label": e("al.disable_autoplay"),
      isActive: r,
      onClick: () => t(),
      children: [
        /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(b3, { iconTitle: e("al.disable_autoplay") }) }),
        /* @__PURE__ */ a(ce, { children: e("disable_autoplay") }),
        /* @__PURE__ */ a(ue, { children: e(r ? "actived" : "deactivated") })
      ]
    }
  );
}, ba = /* @__PURE__ */ new Map([
  ["low", "saturate(0.5)"],
  ["high", "saturate(2)"],
  ["grayscale", "grayscale(1)"]
]), I0 = () => {
  const { saturation: e } = N();
  if (e)
    return /* @__PURE__ */ a(
      "div",
      {
        style: {
          position: "fixed",
          inset: 0,
          zIndex: 2147483647,
          pointerEvents: "none",
          backgroundColor: "rgba(255,255,255,0.001)",
          backdropFilter: ba.get(e),
          WebkitBackdropFilter: ba.get(e)
        }
      }
    );
}, ln = ["low", "high", "grayscale"], P0 = "vwp-saturation-overlay", O0 = () => {
  const { saturation: e } = N(), [r, t] = $(-1), [n, i] = $();
  return P(() => {
    const s = Xn(P0);
    Ye(/* @__PURE__ */ a(I0, {}), s);
  }, []), P(() => {
    t(ln.findIndex((s) => s === e)), i(e);
  }, [e]), { toggle: () => {
    const s = r + 1 < ln.length ? r + 1 : -1, l = ln[s] || void 0;
    t(s), i(l), N.setState({ saturation: l });
  }, index: r, option: n };
}, D0 = () => {
  const { t: e } = z(), { toggle: r, option: t, index: n } = O0();
  return /* @__PURE__ */ a(le, { "aria-label": e("al.adjust_saturation"), isActive: !!t, onClick: () => r(), children: [
    /* @__PURE__ */ a(st, { size: 3, actived: n }),
    /* @__PURE__ */ a(de, { children: [
      !t && /* @__PURE__ */ a(w3, { iconTitle: e("al.adjust_saturation") }),
      t === "low" && /* @__PURE__ */ a(E3, { iconTitle: e("al.adjust_saturation") }),
      t === "high" && /* @__PURE__ */ a(A3, { iconTitle: e("al.adjust_saturation") }),
      t === "grayscale" && /* @__PURE__ */ a(x3, { iconTitle: e("al.adjust_saturation") })
    ] }),
    /* @__PURE__ */ a(ce, { children: e("saturation") }),
    /* @__PURE__ */ a(ue, { children: e(t ? `saturation.${t}` : "deactivated") })
  ] });
}, H0 = () => {
  const { pageColor: e } = N();
  if (!(!e || !er.includes(e)))
    return /* @__PURE__ */ a(
      "div",
      {
        style: {
          position: "fixed",
          inset: 0,
          zIndex: 2147483647,
          pointerEvents: "none",
          mixBlendMode: "hue",
          WebkitMixBlendMode: "hue",
          backgroundColor: e
        }
      }
    );
}, er = ["red", "green", "darkblue", "orange", "aliceblue", "blueviolet"], B0 = "vwp-page-colors-overlay", F0 = () => {
  const { pageColor: e } = N(), [r, t] = $(-1), [n, i] = $();
  return P(() => {
    const s = Xn(B0);
    Ye(/* @__PURE__ */ a(H0, {}), s);
  }, []), P(() => {
    t(er.findIndex((s) => s === e)), i(e);
  }, [e]), { toggle: () => {
    const s = r + 1 < er.length ? r + 1 : -1, l = er[s] || void 0;
    t(s), i(l), N.setState({ pageColor: l, colorBlindFilter: void 0 });
  }, index: r, option: n };
}, $0 = () => {
  const { t: e } = z(), { toggle: r, option: t, index: n } = F0();
  return /* @__PURE__ */ a(le, { "aria-label": e("al.page_colors"), isActive: !!t, onClick: () => r(), children: [
    /* @__PURE__ */ a(st, { size: er.length, actived: n }),
    /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(p3, { iconTitle: e("al.page_colors") }) }),
    /* @__PURE__ */ a(ce, { children: e("page_colors") }),
    /* @__PURE__ */ a(ue, { children: e(t ? "actived" : "deactivated") })
  ] });
}, z0 = ({ className: e, ...r }) => /* @__PURE__ */ a("div", { className: G("h-4", e), ...r }), U0 = "body.vwp-keyboard-navigation *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-wrapper,#vwp-app-wrapper *,#vwp-app-root,#vwp-app-root *,vlibras-widget-plus):focus{outline:2px solid transparent;animation:pulse 1s linear infinite alternate;background-color:#000!important;color:#fff!important;fill:#fff!important}@keyframes pulse{0%{transform:scale(1);box-shadow:0 0 #ff0}50%{transform:scale(1.03);outline-color:#ff0;box-shadow:0 0 20px 5px #ff0}}", cn = "vwp-keyboard-navigation", V0 = "vwp-keyboard-navigation-style", G0 = `
  a,
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex]:not([tabindex="-1"]),
  [contenteditable]
`, j0 = () => {
  const { keyboardNavigation: e } = N();
  return P(() => {
    e && Ke(U0, V0);
  }, [e]), P(() => (document.body.classList.toggle(cn, !!e), () => document.body.classList.remove(cn)), [e]), P(() => {
    if (!e) return;
    const t = Array.from(Ot(G0)).filter((i) => i.offsetParent !== null), n = (i) => {
      if (t.length === 0) return;
      const o = t.findIndex((l) => l === document.activeElement);
      let s = o;
      switch (i.key) {
        case "ArrowDown":
        case "ArrowRight":
          s = (o + 1) % t.length;
          break;
        case "ArrowUp":
        case "ArrowLeft":
          s = (o - 1 + t.length) % t.length;
          break;
        default:
          return;
      }
      i.preventDefault(), t[s].focus();
    };
    return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
  }, [e]), { toggle: (t) => {
    const n = t !== void 0 ? t : !e;
    document.body.classList.toggle(cn, n), N.setState({ keyboardNavigation: n });
  }, isActive: !!e };
}, q0 = () => {
  const { t: e } = z(), { toggle: r, isActive: t } = j0();
  return /* @__PURE__ */ a(
    le,
    {
      showActiveIndicator: !0,
      "aria-label": e("al.keyboard_navigation"),
      isActive: t,
      onClick: () => r(),
      children: [
        /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(L3, { iconTitle: e("al.keyboard_navigation") }) }),
        /* @__PURE__ */ a(ce, { children: e("keyboard_navigation") }),
        /* @__PURE__ */ a(ue, { children: e(t ? "actived" : "deactivated") })
      ]
    }
  );
}, cl = () => {
  const { pageStructure: e } = N(), r = jn("(max-width: 980px)");
  P(() => {
    N.getState().pageStructure && t(!0);
  }, []);
  const t = (n) => {
    const i = n !== void 0 ? n : !e;
    N.setState({
      pageStructure: i,
      dictionary: void 0,
      textReader: void 0,
      largeCursor: void 0
    }), r && N.setState({ isOpenWidget: !i });
  };
  return { toggle: t, isActive: !!e };
}, W0 = () => {
  const { t: e } = z(), { isActive: r, toggle: t } = cl();
  return /* @__PURE__ */ a(le, { showActiveIndicator: !0, "aria-label": e("al.page_structure"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(T3, { iconTitle: e("al.page_structure") }) }),
    /* @__PURE__ */ a(ce, { children: e("page_structure") }),
    /* @__PURE__ */ a(ue, { children: e(r ? "actived" : "deactivated") })
  ] });
}, Z0 = () => {
  const { content: e } = X0();
  return e;
}, X0 = vt((e) => ({
  isOpen: !1,
  setContent: (r) => e({ content: r }),
  setIsOpen: (r) => e((t) => ({ isOpen: typeof r == "function" ? r(t.isOpen) : r }))
})), Y0 = () => /* @__PURE__ */ a("div", { children: "Settings" }), K0 = {
  about: !1,
  settings: !1
}, J0 = vt()(() => ({
  ...K0
})), Q0 = () => {
  const { settings: e } = J0();
  return /* @__PURE__ */ a(ve, { children: e && /* @__PURE__ */ a(Y0, {}) });
}, tr = Ie(({ children: e, content: r, arrow: t, offset: n = 0, align: i = "center", placement: o = "top", className: s, ...l }, c) => {
  const [u, p] = $(!1), d = `vwp-tooltip-${Math.random().toString(36).slice(2, 9)}`;
  return r ? /* @__PURE__ */ a(
    "div",
    {
      className: "relative inline-block",
      onMouseEnter: () => p(!0),
      onMouseLeave: () => p(!1),
      onFocus: () => p(!0),
      onBlur: () => p(!1),
      children: [
        /* @__PURE__ */ a("span", { "aria-describedby": d, children: e }),
        u && /* @__PURE__ */ a(
          "div",
          {
            ref: c,
            id: d,
            role: "tooltip",
            style: { boxShadow: "2px 2px 15px -5px rgba(0, 0, 0, .2)", ...(() => {
              switch (o) {
                case "top":
                  return { top: `calc((-100% + 8px) - ${n}px)` };
                case "bottom":
                  return { bottom: `calc((-100% + 8px) - ${n}px)` };
                case "left":
                  return { left: `calc((-100% + 8px) - ${n}px)` };
                case "right":
                  return { right: `calc((-100% + 8px) - ${n}px)` };
                default:
                  return { top: `calc((-100% + 8px) - ${n}px)` };
              }
            })() },
            className: G(
              "absolute border-1 px-3 py-1.5 z-[2147483647] : text-sm text-popover-foreground bg-popover rounded-md shadow-lg transition-opacity duration-200",
              o === "bottom" && "left-1/2 -translate-x-1/2 translate-y-1/2",
              o === "right" && "top-1/2 translate-x-1/2 -translate-y-1/2",
              o === "top" && "left-1/2 -translate-1/2",
              o === "left" && "top-1/2 -translate-y-1/2",
              i === "start" && "!left-0 right-auto translate-x-0",
              i === "end" && "!right-0 translate-x-0 left-auto",
              s
            ),
            ...l,
            children: /* @__PURE__ */ a("div", { className: "relative", children: [
              r,
              t && /* @__PURE__ */ a(
                "div",
                {
                  className: G(
                    "absolute grid place-content-center overflow-hidden max-h-2 left-1/2 -ml-2",
                    t.position.includes("top") && "-top-[13.444px]",
                    t.position.includes("bottom") && "-bottom-[13.444px]",
                    t.position.includes("left") && "left-2",
                    t.position.includes("right") && "right-0 left-auto"
                  ),
                  children: /* @__PURE__ */ a(
                    "span",
                    {
                      className: G(
                        "bg-popover border-1 -z-50 w-4 h-4 rotate-45",
                        t.position.includes("top") ? "mt-3.5" : "mb-3.5",
                        t.className
                      )
                    }
                  )
                }
              )
            ] })
          }
        )
      ]
    }
  ) : e;
}), e8 = () => {
  const { t: e } = z();
  return /* @__PURE__ */ a(
    tr,
    {
      offset: 4,
      arrow: { position: "bottom", className: "bg-primary border-none" },
      className: "whitespace-nowrap bg-primary text-primary-foreground border-none",
      content: /* @__PURE__ */ a("span", { children: [
        e("libras_accessibility"),
        " ",
        /* @__PURE__ */ a("span", { className: "text-primary-foreground/80", children: [
          "(",
          e("upcoming"),
          ")"
        ] })
      ] }),
      children: /* @__PURE__ */ a(
        me,
        {
          disabled: !0,
          variant: "primary",
          className: G(
            "justify-start p-0 rounded-full transition-all overflow-hidden min-w-10 max-w-10 h-10 bg-primary"
          ),
          children: /* @__PURE__ */ a($s, { className: "min-w-6 min-h-6 size-6 ml-2 group-hover:ml-0 transition-all fill-primary-foreground" })
        }
      )
    }
  );
}, t8 = () => {
  const { locale: e } = z(), { theme: r } = kr(), { t } = z();
  return /* @__PURE__ */ a(
    "div",
    {
      style: { boxShadow: `0 0 10px 0 rgba(0, 0, 0, ${r === "dark" ? 0.7 : 0.2})` },
      className: "absolute bottom-4 left-1/2 -translate-x-1/2 p-2 border-1 bg-background flex items-center rounded-full gap-2",
      children: [
        e === "pt" && /* @__PURE__ */ a(e8, {}),
        /* @__PURE__ */ a("div", { className: "flex h-10 ml-auto rounded-full border-1 bg-background dark:bg-popover", children: [
          /* @__PURE__ */ a(
            tr,
            {
              arrow: { position: "bottom", className: "bg-background border-1" },
              offset: 8,
              className: "whitespace-nowrap bg-background",
              content: /* @__PURE__ */ a("span", { children: [
                t("about_the_project"),
                " ",
                /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: [
                  "(",
                  t("upcoming"),
                  ")"
                ] })
              ] }),
              children: /* @__PURE__ */ a(me, { disabled: !0, variant: "ghost", className: "size-10 p-0 group whitespace-nowrap rounded-full rounded-r-none", children: /* @__PURE__ */ a(_3, { className: "size-6 fill-muted-foreground group-hover:fill-foreground" }) })
            }
          ),
          /* @__PURE__ */ a("span", { className: "h-full w-[1px] bg-border" }),
          /* @__PURE__ */ a(
            tr,
            {
              arrow: { position: "bottom", className: "bg-background border-1" },
              offset: 8,
              className: "whitespace-nowrap bg-background",
              content: /* @__PURE__ */ a("span", { children: [
                t("bug_report"),
                " ",
                /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: [
                  "(",
                  t("upcoming"),
                  ")"
                ] })
              ] }),
              children: /* @__PURE__ */ a(me, { disabled: !0, variant: "ghost", className: "size-10 group p-0 rounded-none", children: /* @__PURE__ */ a(y3, { className: "size-6 fill-muted-foreground group-hover:fill-foreground" }) })
            }
          ),
          /* @__PURE__ */ a("span", { className: "h-full w-[1px] bg-border" }),
          /* @__PURE__ */ a(
            tr,
            {
              arrow: { position: "bottom", className: "bg-background border-1" },
              offset: 8,
              className: "whitespace-nowrap bg-background",
              content: /* @__PURE__ */ a("span", { children: [
                t("version_updates"),
                " ",
                /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: [
                  "(",
                  t("upcoming"),
                  ")"
                ] })
              ] }),
              children: /* @__PURE__ */ a(me, { disabled: !0, variant: "ghost", className: "size-10 group p-0 rounded-full rounded-l-none", children: /* @__PURE__ */ a(S3, { className: "size-6 fill-muted-foreground group-hover:fill-foreground" }) })
            }
          )
        ] })
      ]
    }
  );
}, r8 = () => {
  const { t: e } = z(), { isOpenWidget: r, isLoaded: t, isExpanded: n } = N(), i = jn("(min-width: 768px)");
  return /* @__PURE__ */ a(
    "div",
    {
      className: G(
        "spacing flex flex-col gap-0 transition-[bottom,width] duration-500 overflow-hidden rounded-2xl pt-0 border-1 tracking-normal",
        "leading-normal fixed z-[2147483647] -bottom-[100dvh] right-2 bg-background",
        "xs:w-md max-xs:left-2 h-[75dvh] xs:h-[90dvh] data-[active='true']:bottom-2",
        n && "md:w-2xl"
      ),
      style: { boxShadow: "0 0 30px -5px rgba(0, 0, 0, 0.2)" },
      "data-active": r && t,
      children: [
        /* @__PURE__ */ a(R3, {}),
        /* @__PURE__ */ a(M3, { children: [
          /* @__PURE__ */ a(O3, {}),
          /* @__PURE__ */ a(xt, { children: [
            /* @__PURE__ */ a(pt, { children: e("sections.text_and_typography") }),
            /* @__PURE__ */ a(H3, {}),
            /* @__PURE__ */ a(U3, {}),
            /* @__PURE__ */ a(id, {}),
            /* @__PURE__ */ a(A0, {}),
            /* @__PURE__ */ a(Q3, {})
          ] }),
          /* @__PURE__ */ a(xt, { children: [
            /* @__PURE__ */ a(pt, { children: e("sections.focus_and_visibility") }),
            /* @__PURE__ */ a(Z3, {}),
            /* @__PURE__ */ a(z3, {}),
            /* @__PURE__ */ a(nd, {})
          ] }),
          /* @__PURE__ */ a(xt, { children: [
            /* @__PURE__ */ a(pt, { children: e("sections.reading_and_comprehension") }),
            /* @__PURE__ */ a(_0, {}),
            /* @__PURE__ */ a(G3, {}),
            (!n || !i) && /* @__PURE__ */ a("div", { className: "grid grid-cols-1 gap-y-4", children: [
              /* @__PURE__ */ a(zo, {}),
              /* @__PURE__ */ a(ya, {})
            ] }),
            n && i && /* @__PURE__ */ a(ve, { children: [
              /* @__PURE__ */ a(zo, {}),
              /* @__PURE__ */ a(ya, {})
            ] }),
            /* @__PURE__ */ a(x0, {})
          ] }),
          /* @__PURE__ */ a(xt, { children: [
            /* @__PURE__ */ a(pt, { children: e("sections.colors_filters_and_contrast") }),
            /* @__PURE__ */ a($0, {}),
            /* @__PURE__ */ a(D0, {}),
            /* @__PURE__ */ a(L0, {}),
            /* @__PURE__ */ a(N0, {})
          ] }),
          /* @__PURE__ */ a(xt, { children: [
            /* @__PURE__ */ a(pt, { children: e("sections.navigation") }),
            /* @__PURE__ */ a(W0, {}),
            /* @__PURE__ */ a(q0, {})
          ] }),
          /* @__PURE__ */ a(xt, { children: [
            /* @__PURE__ */ a(pt, { children: e("sections.distraction_reduction") }),
            /* @__PURE__ */ a(ld, {}),
            /* @__PURE__ */ a(pd, {}),
            /* @__PURE__ */ a(S0, {}),
            /* @__PURE__ */ a(M0, {})
          ] }),
          /* @__PURE__ */ a(z0, { className: "h-14" })
        ] }),
        /* @__PURE__ */ a(t8, {}),
        /* @__PURE__ */ a(Z0, {}),
        /* @__PURE__ */ a(Q0, {})
      ]
    }
  );
}, n8 = ({ children: e, root: r }) => {
  const { theme: t } = kr();
  return P(() => {
    const n = r || document.documentElement;
    (n instanceof ShadowRoot ? n.host : n).classList.toggle("dark", t === "dark");
  }, [t, r]), e;
}, i8 = () => {
  const e = Te(null), r = Te(null), t = Te(null), n = Gn(), { t: i } = z(), { height: o } = Ss(), { y: s } = Es(), [l, c] = $(!1);
  P(() => {
    u(s || o / 2);
  }, [s, o]), P(() => {
    n && u(o / 2);
  }, [n, o]);
  function u(p) {
    if (!r.current || !t.current || n && !l) return;
    const d = n ? 28 : 38, g = 10, v = d + g, x = d + g * 2;
    r.current.style.height = `${(p > o - v ? o - v : p) - (p < 4 ? 0 : d)}px`, t.current.style.height = `${o - (p < v ? v : p) - d}px`;
    let _ = p - d / 2;
    _ < x / 2 ? _ = x / 2 : _ > o - x - g / 2 && (_ = o - x - g / 2), e.current && (e.current.style.top = `${_ - d * 0.35}px`);
  }
  return /* @__PURE__ */ a("div", { className: "z-[2147483647] relative", children: [
    n && /* @__PURE__ */ a(
      me,
      {
        ref: e,
        onTouchMove: (p) => {
          p.preventDefault(), l || c(!0), u(p.touches[0].clientY);
        },
        className: G(
          "w-8 h-12 top-[calc(15dvh-24px)] rounded-l-none rounded-r-[8px] items-center fixed left-0 bg-primary"
        ),
        "aria-label": i("al.move_reading_mask"),
        children: /* @__PURE__ */ a(Gu, { size: 24, className: "fill-white", iconTitle: i("al.move_reading_mask") })
      }
    ),
    /* @__PURE__ */ a(
      "div",
      {
        ref: r,
        className: G(
          "top-0 pointer-events-none w-full fixed bg-black/40 left-0 border-b-8 border-primary",
          n && !l && "!h-[calc(15dvh-32px)]"
        )
      }
    ),
    /* @__PURE__ */ a(
      "div",
      {
        ref: t,
        className: G(
          "bottom-0 pointer-events-none left-0 fixed border-t-8  w-full border-primary bg-black/20",
          n && !l && "!h-[calc(85dvh-32px)]"
        )
      }
    )
  ] });
}, wa = Ie(
  ({ children: e, className: r, ...t }, n) => /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      className: G(
        "relative -z-50 grid place-items-center [&>*]:w-0 [&>*]:absolute [&>*]:h-0 [&>*]:border-l-12 [&>*]:border-r-12 [&>*]:border-b-12 [&>*]:border-transparent",
        r
      ),
      ...t,
      children: [
        /* @__PURE__ */ a("span", { className: "!border-b-white -top-3.5" }),
        /* @__PURE__ */ a("span", { className: "!border-b-primary -top-2.5" })
      ]
    }
  )
), o8 = () => {
  const e = Te(null), r = Te(null), t = Te(null), n = Gn(), { t: i } = z(), { width: o, height: s } = Ss(), { x: l, y: c } = Es();
  P(() => {
    l && c && u(l, c);
  }, [c, l]), P(() => {
    n && u(o / 2, 24);
  }, [n, o]);
  function u(p, d) {
    if (!r.current) return;
    const g = r.current.offsetWidth;
    if (n || (r.current.style.left = `${p - g / 2}px`, r.current.style.top = `${d < 30 ? 16 : d - 16}px`), e.current && t.current && n) {
      const v = p < 24 ? 4 : p > o - 40 ? o - 54 : p - 24;
      r.current.style.top = `${d < 24 ? 14 : d > s - 32 ? s - 42 : d - 10}px`, e.current.style.top = `${d < 24 ? 20 : d > s - 32 ? s - 37 : d - 5}px`, e.current.style.left = `${v}px`, t.current.style.left = `${v + 12}px`, t.current.style.top = `${d < 24 ? 6 : d > s - 36 ? s - 49 : d - 17.1}px`;
    }
  }
  return /* @__PURE__ */ a("div", { className: "z-[2147483647] relative", children: [
    n && /* @__PURE__ */ a(
      me,
      {
        ref: e,
        onTouchMove: (p) => {
          p.preventDefault(), u(p.touches[0].clientX, p.touches[0].clientY);
        },
        className: G(
          "w-12 h-8 z-10 left-1/2 fixed bg-primary border-2 border-white border-t-primary top-0 rounded-b-md rounded-t-none"
        ),
        "aria-label": i("al.move_reading_mask"),
        children: /* @__PURE__ */ a(o3, { size: 22, className: "fill-white", iconTitle: i("al.move_reading_mask") })
      }
    ),
    /* @__PURE__ */ a(
      "div",
      {
        ref: r,
        className: G(
          "w-xl fixed top-4 left-[calc(50dvw-36rem/2)] h-2 grid place-items-center border-2 border-white bg-primary rounded-full",
          n && "translate-none !left-0 !right-0 !w-auto rounded-none"
        ),
        children: !n && /* @__PURE__ */ a(wa, {})
      }
    ),
    /* @__PURE__ */ a(wa, { ref: t, className: G("mt-2.5 !z-0 ml-3", n ? "fixed" : "hidden") })
  ] });
}, a8 = ({
  x: e,
  y: r,
  tooltip: t
}) => {
  const n = (t == null ? void 0 : t.getBoundingClientRect()) || { width: 0 };
  let i = e, o = r - 36, s = "bottom";
  return i < 34 && (i = 34, s = "left"), i + n.width > window.innerWidth && (i = window.innerWidth - n.width + 12, s = "right"), o < 46 ? (o = 54, s = s === "right" ? "top-right" : "top-left") : s = s === "right" ? "bottom-right" : "bottom-left", { x: i, y: o, arrow: s };
}, s8 = () => {
  const e = Te(null), { t: r } = z(), { type: t, event: n, onClick: i, isActive: o, render: s } = gt(), [l, c] = $({ x: 0, y: 0, arrow: "bottom" });
  return P(() => {
    const u = (p) => {
      e.current && !e.current.contains(p.target) && gt.setState({ isActive: !1 });
    };
    return o ? document.addEventListener("click", u) : document.removeEventListener("click", u), () => {
      document.removeEventListener("click", u);
    };
  }, [o]), P(() => {
    if (n) {
      const { pageX: u, pageY: p } = n;
      c(a8({ x: u, y: p, tooltip: e.current }));
      const d = e.current;
      d && (d.classList.remove("animate-scale"), d.offsetWidth, d.classList.add("animate-scale"));
    }
  }, [n]), /* @__PURE__ */ a(
    me,
    {
      ref: e,
      onClick: i,
      style: {
        left: l.x,
        top: l.y,
        boxShadow: "2px 2px 10px 4px rgba(0, 0, 0, .2)"
      },
      className: G(
        "group text-primary-foreground rounded-md absolute z-[2147483647] -translate-x-6 -translate-y-full px-3 h-9 animate-scale"
      ),
      children: [
        s || /* @__PURE__ */ a(ve, { children: [
          t === "button" ? /* @__PURE__ */ a(a3, { size: 20, iconTitle: r("interact") }) : /* @__PURE__ */ a(Bs, { size: 20, iconTitle: r("access_link") }),
          /* @__PURE__ */ a("span", { className: "relative bottom-0.5 font-medium text-base", children: r(t === "button" ? "interact" : "access_link") })
        ] }),
        /* @__PURE__ */ a("span", { className: "absolute inset-0 bg-primary group-hover:brightness-85 rounded-md -z-[1]" }),
        /* @__PURE__ */ a(
          "span",
          {
            className: G(
              "size-4 rotate-45 absolute brightness-85 -translate-x-1/2 -z-[2] bg-primary",
              ["bottom", "bottom-left", "bottom-right"].includes(l.arrow) ? "-bottom-5" : "top-3",
              ["bottom-left", "top-left", "bottom", "top"].includes(l.arrow) ? "left-5" : "right-2"
            )
          }
        )
      ]
    }
  );
}, l8 = ["masculino", "feminino", "neutro"], An = async (e) => {
  var c, u, p, d, g, v;
  const r = e.trim().replace(".", "");
  if (!r) return null;
  const i = await (await fetch(((x) => `https://pt.wiktionary.org/w/api.php?action=parse&redirects=1&format=json&origin=*&utf8=1&page=${encodeURIComponent(
    x.toLowerCase().replace(".", "")
  )}&prop=text&formatversion=2`)(r))).json(), o = (c = i == null ? void 0 : i.parse) == null ? void 0 : c.text;
  if (!o) return null;
  const s = c8(o, r);
  if ((((u = s.plural) == null ? void 0 : u.toLowerCase()) !== r.toLowerCase() || ((p = s.definitions) == null ? void 0 : p.some((x) => x.toLowerCase().includes("plural de")))) && !(s.definitions && s.definitions.length > 3)) {
    if (s.plural) return await An(s.plural);
    let x;
    const _ = (g = (d = s.definitions) == null ? void 0 : d.find((A) => A.toLowerCase().includes("plural de"))) == null ? void 0 : g.match(/plural de (.+)/i);
    if (x = (v = _ == null ? void 0 : _[1]) == null ? void 0 : v.trim(), x)
      return await An(x);
  }
  return { ...s, title: r };
};
function c8(e, r) {
  var x, _, A, E, b, y, w;
  const n = new DOMParser().parseFromString(e, "text/html"), i = (A = (_ = (x = n.querySelector("tbody")) == null ? void 0 : x.innerHTML.match(new RegExp(`title="(?<gender>${l8.join("|")})"`))) == null ? void 0 : _.groups) == null ? void 0 : A.gender, o = Array.from(n.querySelectorAll("ol > li")).map((h) => {
    var C;
    const f = h == null ? void 0 : h.querySelectorAll("span.mw-cite-backlink");
    return f == null || f.forEach((T) => T.remove()), (C = h == null ? void 0 : h.textContent) == null ? void 0 : C.trim();
  }).filter((h) => h !== r).filter((h, f, C) => C.indexOf(h) === f).filter(Boolean), s = (b = (E = n.querySelector("h2")) == null ? void 0 : E.textContent) == null ? void 0 : b.trim(), l = Array.from(n.querySelectorAll("b")).find(
    (h) => h.innerHTML.includes("<u>") || h.innerHTML.includes(".")
  ), c = (y = l == null ? void 0 : l.textContent) == null ? void 0 : y.trim(), u = u8(n), p = {}, d = n.querySelector("table.traduções");
  d && d.querySelectorAll("tr").forEach((f) => {
    var R;
    const C = f.querySelector("td"), T = f.querySelectorAll("td ~ td a");
    if (C && T.length > 0) {
      const k = (R = C.textContent) == null ? void 0 : R.trim().toLowerCase(), B = Array.from(T).map((M) => {
        var I;
        return (I = M.textContent) == null ? void 0 : I.trim();
      }).filter(Boolean);
      k && (p[k] = B);
    }
  });
  const g = ((w = n.querySelector("img")) == null ? void 0 : w.getAttribute("src")) || void 0, v = Object.keys(p).length > 0 ? p : void 0;
  return {
    wordClass: s,
    pronunciation: c,
    definitions: o,
    etymology: u,
    gender: i,
    imgUrl: g,
    translations: v
  };
}
function u8(e) {
  var n, i, o;
  let r;
  const t = Array.from(e.querySelectorAll("h2, h3")).find(
    (s) => {
      var l;
      return (l = s.textContent) == null ? void 0 : l.toLowerCase().includes("etimologia");
    }
  );
  if (t) {
    const s = (n = t.parentElement) == null ? void 0 : n.nextElementSibling;
    r = (o = (i = s == null ? void 0 : s.firstChild) == null ? void 0 : i.textContent) == null ? void 0 : o.trim();
  }
  return r;
}
const d8 = Ie(({ className: e, size: r = 24, ...t }, n) => /* @__PURE__ */ a(ve, { children: /* @__PURE__ */ a(
  "span",
  {
    className: G("flex text-primary items-center justify-center aspect-square", e),
    ref: n,
    ...t,
    children: [
      /* @__PURE__ */ a(
        "svg",
        {
          "aria-hidden": "true",
          xmlns: "http://www.w3.org/2000/svg",
          width: r,
          height: r,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "animate-spin",
          children: /* @__PURE__ */ a("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
        }
      ),
      /* @__PURE__ */ a("span", { className: "sr-only", children: "Loading..." })
    ]
  }
) })), p8 = () => {
  const { t: e } = z();
  return /* @__PURE__ */ a("div", { className: "flex flex-col items-center py-8 justify-center gap-2", children: [
    /* @__PURE__ */ a(d8, { size: 32, className: "relative top-0.5" }),
    /* @__PURE__ */ a("span", { className: "animate-pulse text-sm", children: e("status.searching") })
  ] });
}, h8 = {
  data: null,
  isSearchOpen: !1,
  isFetching: !1
}, nr = vt()(() => ({
  ...h8
})), f8 = () => {
  var t, n;
  const { data: e } = nr();
  if (!e) return null;
  const r = (((t = e.definitions) == null ? void 0 : t.length) || 0) > 1;
  return /* @__PURE__ */ a("div", { className: "text-base space-y-4", children: [
    /* @__PURE__ */ a("p", { children: [
      /* @__PURE__ */ a("strong", { className: "italic", children: (n = e.pronunciation) == null ? void 0 : n.split(".").join("-").replace(":", "") }),
      e.gender && `, ${e.gender}`
    ] }),
    /* @__PURE__ */ a(un, { label: r ? "Definições" : "Definição", value: e.definitions }),
    /* @__PURE__ */ a(un, { label: "Classe gramatical", value: e.wordClass }),
    /* @__PURE__ */ a(un, { label: "Etimologia", value: e.etymology })
  ] });
};
function un({ label: e, value: r }) {
  return r != null && r.length ? Array.isArray(r) ? /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ a("p", { className: "text-muted-foreground text-base font-semibold", children: e }),
    /* @__PURE__ */ a("ol", { className: G(r.length > 1 && "list-decimal ps-2 list-inside space-y-1"), children: r.slice(0, 5).map((t, n) => /* @__PURE__ */ a("li", { children: t }, n)) })
  ] }) : /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ a("p", { className: "text-muted-foreground text-base font-semibold", children: e }),
    /* @__PURE__ */ a("span", { children: r.split(`
`).map((t, n) => /* @__PURE__ */ a("span", { children: [
      t,
      /* @__PURE__ */ a("br", {})
    ] }, n)) })
  ] }) : null;
}
const ul = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: r }),
      /* @__PURE__ */ a("path", { d: "M9.95229 17.9046C7.75215 17.9046 5.87674 17.1292 4.32604 15.5785C2.77535 14.0278 2 12.1524 2 9.95229C2 7.75215 2.77535 5.87674 4.32604 4.32604C5.87674 2.77535 7.75215 2 9.95229 2C12.1524 2 14.0278 2.77535 15.5785 4.32604C17.1292 5.87674 17.9046 7.75215 17.9046 9.95229C17.9046 10.721 17.7919 11.4831 17.5666 12.2386C17.3413 12.994 17.0033 13.6899 16.5527 14.326L21.5626 19.336C21.8542 19.6276 22 19.9987 22 20.4493C22 20.8999 21.8542 21.271 21.5626 21.5626C21.271 21.8542 20.8999 22 20.4493 22C19.9987 22 19.6276 21.8542 19.336 21.5626L14.326 16.5527C13.6899 17.0033 12.994 17.3413 12.2386 17.5666C11.4831 17.7919 10.721 17.9046 9.95229 17.9046ZM9.95229 14.7237C11.2777 14.7237 12.4042 14.2598 13.332 13.332C14.2598 12.4042 14.7237 11.2777 14.7237 9.95229C14.7237 8.62691 14.2598 7.50033 13.332 6.57256C12.4042 5.6448 11.2777 5.18091 9.95229 5.18091C8.62691 5.18091 7.50033 5.6448 6.57256 6.57256C5.6448 7.50033 5.18091 8.62691 5.18091 9.95229C5.18091 11.2777 5.6448 12.4042 6.57256 13.332C7.50033 14.2598 8.62691 14.7237 9.95229 14.7237Z" }),
      " "
    ]
  }
), g8 = () => {
  const [e, r] = $(""), { dictionary: t } = N(), { t: n } = z(), i = () => {
    nr.setState({ isSearchOpen: !1 });
  }, o = () => {
    N.setState({ dictionary: { ...t, isActive: !0, word: e.trim() } });
  };
  return /* @__PURE__ */ a("div", { className: "flex items-center w-full gap-4", children: [
    /* @__PURE__ */ a(
      "input",
      {
        autofocus: !0,
        onKeyDown: (l) => {
          l.key === "Enter" && e.trim().length >= 3 && o();
        },
        className: "w-full h-10 border-1 placeholder:text-sm rounded-full px-4 focus:outline-solid outline-primary outline-1 focus:border-primary",
        placeholder: n("al.dictionary.search"),
        type: "text",
        value: e,
        onInput: (l) => r(l.currentTarget.value)
      }
    ),
    /* @__PURE__ */ a(
      me,
      {
        disabled: e.trim().length < 3,
        onClick: o,
        title: n("al.dictionary.search"),
        "aria-label": n("al.dictionary.search"),
        className: "h-10 aspect-square bg-primary group ml-auto rounded-full",
        children: /* @__PURE__ */ a(ul, { className: "fill-primary-foreground", iconTitle: n("al.dictionary.search"), size: 20 })
      }
    ),
    /* @__PURE__ */ a(
      me,
      {
        onClick: i,
        title: n("al.close"),
        "aria-label": n("al.close"),
        className: "h-10 hover:bg-destructive/10 hover:[&>svg]:fill-destructive aspect-square hover:border-destructive/20 border-1 group ml-auto rounded-full",
        children: /* @__PURE__ */ a(Rr, { className: "fill-muted-foreground group-hover:fill-foreground", iconTitle: n("al.close"), size: 20 })
      }
    )
  ] });
}, m8 = () => {
  const { t: e } = z(), { dictionary: r } = N(), { data: t, isFetching: n, isSearchOpen: i } = nr(), o = "speechSynthesis" in window, [s, l] = $(!1);
  P(() => {
    sl();
  }, [t]), P(() => {
    const d = Rt("[vw-access-button]");
    l(!!d);
  }, []);
  const c = () => {
    nr.setState({ isSearchOpen: !0 });
  }, u = (d) => {
    gt.setState({
      isActive: !0,
      event: d,
      onClick: () => {
        const g = Rt("[vw-access-button]");
        g ? g.click() : alert("VLibras Widget não encontrado!");
      },
      render: /* @__PURE__ */ a(ve, { children: "Abrir VLibras Widget" })
    });
  }, p = sr(() => {
    var v, x, _;
    const g = `${(((v = t == null ? void 0 : t.definitions) == null ? void 0 : v.length) || 0) > 1 ? "Definições" : "Definição"} de ${t == null ? void 0 : t.title}: ${(_ = (x = t == null ? void 0 : t.definitions) == null ? void 0 : x.slice(0, 5)) == null ? void 0 : _.join(". ")}`;
    xn(t ? g : e(r != null && r.word ? "dictionary.no_result" : "dictionary.select_word"));
  }, [t, e, r == null ? void 0 : r.word]);
  return /* @__PURE__ */ a("div", { className: G(n && "pointer-events-none opacity-50", "flex items-center gap-4 p-4 border-t-1"), children: [
    !i && /* @__PURE__ */ a(ve, { children: [
      /* @__PURE__ */ a(
        me,
        {
          disabled: !s,
          "aria-label": e("al.definition_to_libras"),
          onClick: u,
          className: "bg-primary text-primary-foreground px-4 h-10 rounded-md hover:brightness-90 hidden",
          children: [
            /* @__PURE__ */ a($s, { "aria-hidden": !0, size: 20 }),
            e("definition_to_libras")
          ]
        }
      ),
      /* @__PURE__ */ a(
        tr,
        {
          offset: 8,
          align: "start",
          className: "w-72",
          placement: "top",
          content: o ? void 0 : e("speech_is_not_supported"),
          children: /* @__PURE__ */ a(
            me,
            {
              disabled: !o,
              "aria-label": e("al.read_definition"),
              onClick: p,
              className: G(
                t ? "px-4" : "aspect-square",
                "bg-primary text-primary-foreground h-10 rounded-full hover:brightness-90"
              ),
              children: [
                /* @__PURE__ */ a(Hs, { size: 18 }),
                t && e("read_definition")
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ a(
        me,
        {
          onClick: c,
          title: e("al.dictionary.search"),
          "aria-label": e("al.dictionary.search"),
          className: "h-10 px-4 border-1 group hover:bg-muted ml-auto rounded-full",
          children: [
            /* @__PURE__ */ a(
              ul,
              {
                className: "fill-muted-foreground group-hover:fill-foreground",
                iconTitle: e("al.dictionary.search"),
                size: 18
              }
            ),
            "Pesquisar"
          ]
        }
      )
    ] }),
    i && /* @__PURE__ */ a(g8, {})
  ] });
}, v8 = () => {
  var p;
  const [e, r] = $("bottom"), { toggle: t } = ll(), { dictionary: n } = N(), { t: i } = z(), { data: o, isLoading: s, error: l } = q7(
    sr(() => An((n == null ? void 0 : n.word) || ""), [n == null ? void 0 : n.word])
  );
  P(() => {
    nr.setState({ data: o, isFetching: s });
  }, [o, s]);
  const c = () => {
    r(e === "top" ? "bottom" : "top");
  }, u = !!o && (n == null ? void 0 : n.word) !== (o == null ? void 0 : o.title);
  return l && console.error(l), /* @__PURE__ */ a(
    "div",
    {
      style: { boxShadow: "2px 2px 15px -5px rgba(0, 0, 0, .2)" },
      className: G(
        "fixed z-[2147483647] left-2 transition-all animate-move-up bg-background border-1 rounded-xl sm:w-lg max-sm:right-2",
        e === "top" ? "top-2" : "bottom-2"
      ),
      children: [
        /* @__PURE__ */ a("div", { className: "flex justify-between gap-2 w-full border-b-1 p-4", children: [
          ((p = n == null ? void 0 : n.word) == null ? void 0 : p.trim()) && /* @__PURE__ */ a("p", { className: "text-xl font-semibold leading-none line-clamp-2 pt-2 break-all", children: [
            /* @__PURE__ */ a(Fs, { size: 24, className: "inline mr-2 relative -top-1", "aria-hidden": !0 }),
            Ou(n.word),
            " ",
            u && /* @__PURE__ */ a("span", { className: "text-muted-foreground font-medium text-sm", children: [
              "(",
              o == null ? void 0 : o.title,
              ")"
            ] })
          ] }),
          !(n != null && n.word) && /* @__PURE__ */ a("p", { className: "pt-1", children: i("dictionary.select_word") }),
          /* @__PURE__ */ a(
            me,
            {
              title: i(e === "top" ? "move_bottom" : "move_top"),
              "aria-label": i(e === "top" ? "move_bottom" : "move_top"),
              onClick: c,
              className: "size-9 [&>svg]:not-hover:!fill-muted-foreground ml-auto hover:bg-muted rounded-md aspect-square",
              children: e === "top" ? /* @__PURE__ */ a(l3, { pointerEvents: "none", size: 22 }) : /* @__PURE__ */ a(s3, { pointerEvents: "none", size: 22 })
            }
          ),
          /* @__PURE__ */ a(
            me,
            {
              className: "rounded-md bg-destructive fill-destructive-foreground hover:brightness-90 size-9 aspect-square",
              title: i("dictionary.close"),
              onClick: () => t(!1),
              children: /* @__PURE__ */ a(Rr, { "aria-hidden": !0, size: 22, iconTitle: i("dictionary.close") })
            }
          )
        ] }),
        (n == null ? void 0 : n.word) && /* @__PURE__ */ a("div", { className: "p-4 max-h-[32dvh] overflow-y-auto overflow-hidden", children: [
          s && /* @__PURE__ */ a(p8, {}),
          o && !s && /* @__PURE__ */ a(f8, {}),
          !o && !s && /* @__PURE__ */ a("p", { className: "text-center py-8", children: [
            i("dictionary.no_result"),
            "..."
          ] })
        ] }),
        /* @__PURE__ */ a(m8, {})
      ]
    }
  );
}, C8 = () => {
  const { brightness: e } = N();
  return e ? /* @__PURE__ */ a(
    "div",
    {
      "aria-hidden": "true",
      tabindex: -1,
      style: {
        position: "fixed",
        pointerEvents: "none",
        zIndex: 2147483640,
        inset: 0,
        width: "100%",
        height: "100%",
        backgroundColor: `rgba(0, 0, 0, ${e / 100})`
      }
    }
  ) : null;
}, y8 = () => {
  const { nightFilter: e } = N();
  return e ? /* @__PURE__ */ a(
    "div",
    {
      "aria-hidden": "true",
      tabindex: -1,
      style: {
        mixBlendMode: "multiply",
        position: "fixed",
        pointerEvents: "none",
        zIndex: 2147483647,
        inset: 0,
        width: "100%",
        height: "100%",
        backgroundColor: e === "yellow" ? "rgba(255, 224, 0, 0.25)" : "rgb(0 90 255 / 0.25)"
      }
    }
  ) : null;
}, _8 = () => {
  const { t: e } = z(), [r, t] = $([]);
  return P(() => {
    Ot("h1, h2, h3, h4, h5, h6").forEach((n, i) => {
      let o = n.id;
      const s = n.textContent;
      o || (o = `vwp_t${i}`, n.id = o), o && s && t((l) => [...l, { id: o, title: s, tag: n.tagName }]);
    });
  }, []), /* @__PURE__ */ a("ul", { className: "flex flex-col w-full p-4 pt-0 animate-move-left", children: [
    r.length === 0 && /* @__PURE__ */ a("p", { className: "text-muted-foreground text-sm", children: e("structure.no_results") }),
    r.length > 0 && r.map((n, i, o) => {
      const s = o[i - 1], l = Number((s == null ? void 0 : s.tag[1]) || 0), c = Number(n.tag[1]);
      return /* @__PURE__ */ a("li", { style: { paddingLeft: l >= c ? 0 : l * 10 }, children: /* @__PURE__ */ a(
        "a",
        {
          href: `#${n.id}`,
          className: G(
            "hover:bg-primary/10 hover:dark:bg-primary/5 relative hover:*:text-primary py-2 group px-3 rounded-md w-full flex gap-2"
          ),
          children: [
            /* @__PURE__ */ a("span", { className: "text-sm mr-1 font-bold text-muted-foreground pt-[2px]", children: n.tag }),
            /* @__PURE__ */ a("p", { className: "group-hover:underline line-clamp-2 break-all", children: n.title })
          ]
        }
      ) }, n.id);
    })
  ] });
}, b8 = () => {
  const { t: e } = z(), [r, t] = $([]);
  return P(() => {
    const n = Ot("main, section, nav, form, footer, header"), i = [];
    n.forEach((o, s) => {
      let l = o.id;
      l || (l = `vwp_s${s}`, o.id = l);
      let c = 0, u = o.parentElement;
      for (; u; )
        ["MAIN", "SECTION", "NAV", "FORM", "FOOTER", "HEADER"].includes(u.tagName) && c++, u = u.parentElement;
      i.push({ id: l, tag: o.tagName, depth: c });
    }), t(i);
  }, []), /* @__PURE__ */ a("ul", { className: "flex flex-col w-full p-4 pt-0 animate-move-left", children: [
    !r.length && /* @__PURE__ */ a("p", { className: "text-muted-foreground text-sm", children: e("structure.no_results") }),
    r.map((n) => /* @__PURE__ */ a("li", { style: { paddingLeft: `${n.depth * 16}px` }, children: /* @__PURE__ */ a(
      "a",
      {
        href: `#${n.id}`,
        className: G(
          "hover:bg-primary/10 hover:dark:bg-primary/5 py-2 px-3 rounded-md w-full flex gap-2 text-sm group"
        ),
        children: [
          /* @__PURE__ */ a(k3, { className: "size-4 min-w-4 min-h-4 fill-muted-foreground mt-0.5 group-hover:fill-primary" }),
          /* @__PURE__ */ a("p", { className: "group-hover:underline group-hover:text-primary text-foreground", children: n.tag })
        ]
      }
    ) }, n.id))
  ] });
}, w8 = () => {
  const { t: e } = z(), [r, t] = $([]);
  return P(() => {
    Ot("a").forEach((n) => {
      const i = n.textContent, o = n.href;
      i != null && i.trim() && t((s) => [...s, { title: i, href: o }]);
    });
  }, []), /* @__PURE__ */ a("ul", { className: "flex flex-col w-full p-4 pt-0 animate-move-left", children: [
    r.length === 0 && /* @__PURE__ */ a("p", { className: "text-muted-foreground text-sm", children: e("structure.no_results") }),
    r.length > 0 && r.map((n, i) => /* @__PURE__ */ a(
      "a",
      {
        href: n.href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: G(
          "hover:bg-primary/10 hover:dark:bg-primary/5 relative hover:*:text-primary py-2 group px-3 rounded-md w-full flex gap-2"
        ),
        children: [
          /* @__PURE__ */ a(Bs, { className: "size-4 min-w-4 min-h-4 fill-muted-foreground mt-1.5 group-hover:fill-primary" }),
          /* @__PURE__ */ a("p", { className: "group-hover:underline line-clamp-2 break-all", children: n.title }),
          /* @__PURE__ */ a(N3, { className: "min-w-4 w-4 size-4 ml-auto mt-1 invisible group-hover:visible" })
        ]
      },
      `vwp_l${i}`
    ))
  ] });
}, x8 = ["titles", "sections", "links"], A8 = () => {
  const { t: e } = z(), { toggle: r } = cl(), [t, n] = $("titles");
  return /* @__PURE__ */ a(
    "div",
    {
      style: { boxShadow: "2px 2px 15px -5px rgba(0, 0, 0, .2)" },
      className: G(
        "fixed z-[2147483647] left-2 transition-all animate-move-up bg-background border-1 rounded-xl sm:w-lg max-sm:right-2 bottom-2"
      ),
      children: [
        /* @__PURE__ */ a("div", { className: "flex justify-between w-full p-4 border-b-1 gap-2 items-center", children: [
          /* @__PURE__ */ a("p", { className: "font-bold text-lg", children: e("page_structure") }),
          /* @__PURE__ */ a(
            me,
            {
              className: "rounded-md bg-destructive fill-destructive-foreground hover:brightness-90 size-9 aspect-square",
              title: e("dictionary.close"),
              onClick: () => r(!1),
              children: /* @__PURE__ */ a(Rr, { "aria-hidden": !0, size: 22, iconTitle: e("dictionary.close") })
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ a("div", { className: "flex items-center w-fit m-4 p-1.5 rounded-full border-1 group", children: x8.map((i) => /* @__PURE__ */ a(
            me,
            {
              className: G(
                "rounded-full text-sm font-medium text-foreground px-4 hover:bg-accent border-1 border-transparent h-7 w-full",
                i === t && "!bg-primary pointer-events-none !text-primary-foreground"
              ),
              onClick: () => n(i),
              children: e(`structure.${i}`)
            },
            i
          )) }),
          /* @__PURE__ */ a("div", { className: "h-[60dvh] overflow-y-auto w-full", children: [
            t === "titles" && /* @__PURE__ */ a(_8, {}),
            t === "sections" && /* @__PURE__ */ a(b8, {}),
            t === "links" && /* @__PURE__ */ a(w8, {})
          ] })
        ] })
      ]
    }
  );
}, E8 = () => {
  const { readingMask: e, readingGuide: r, dictionary: t, pageStructure: n, brightness: i, nightFilter: o } = N(), { isActive: s } = gt();
  return /* @__PURE__ */ a(ve, { children: [
    e && /* @__PURE__ */ a(i8, {}),
    r && /* @__PURE__ */ a(o8, {}),
    s && /* @__PURE__ */ a(s8, {}),
    (t == null ? void 0 : t.isActive) && /* @__PURE__ */ a(v8, {}),
    i && /* @__PURE__ */ a(C8, {}),
    o && /* @__PURE__ */ a(y8, {}),
    n && /* @__PURE__ */ a(A8, {})
  ] });
}, S8 = `/*! tailwindcss v4.0.15 | MIT License | https://tailwindcss.com */@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs--line-height:calc(1/.75);--text-sm--line-height:calc(1.25/.875);--text-base--line-height: 1.5 ;--text-lg--line-height:calc(1.75/1.125);--text-xl--line-height:calc(1.75/1.25);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-normal:0em;--leading-tight:1.25;--leading-snug:1.375;--leading-normal:1.5;--radius-2xl:1rem;--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--tw-translate-y:0;--tw-translate-x:0}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:color-mix(in oklab,currentColor 50%,transparent)}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*{--tw-border-style:solid;border-style:solid;border-color:var(--border);outline-offset:-1px;outline-color:color-mix(in oklab,var(--ring)50%,transparent)}:focus{outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--primary);--tw-outline-style:solid;outline-style:solid}:host{border-color:var(--border);fill:var(--foreground);color:var(--foreground)}}@layer components;@layer utilities{.\\!pointer-events-none{pointer-events:none!important}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.\\!absolute{position:absolute!important}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:calc(var(--spacing)*0)}.-top-1{top:calc(var(--spacing)*-1)}.-top-2\\.5{top:calc(var(--spacing)*-2.5)}.-top-3\\.5{top:calc(var(--spacing)*-3.5)}.-top-\\[1px\\]{top:-1px}.-top-\\[3px\\]{top:-3px}.-top-\\[13\\.444px\\]{top:-13.444px}.top-0{top:calc(var(--spacing)*0)}.top-0\\.5{top:calc(var(--spacing)*.5)}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing)*2)}.top-3{top:calc(var(--spacing)*3)}.top-4{top:calc(var(--spacing)*4)}.top-\\[calc\\(15dvh-24px\\)\\]{top:calc(15dvh - 24px)}.\\!right-0{right:calc(var(--spacing)*0)!important}.right-0{right:calc(var(--spacing)*0)}.right-2{right:calc(var(--spacing)*2)}.right-auto{right:auto}.-bottom-5{bottom:calc(var(--spacing)*-5)}.-bottom-\\[13\\.444px\\]{bottom:-13.444px}.-bottom-\\[100dvh\\]{bottom:-100dvh}.bottom-0{bottom:calc(var(--spacing)*0)}.bottom-0\\.5{bottom:calc(var(--spacing)*.5)}.bottom-2{bottom:calc(var(--spacing)*2)}.bottom-4{bottom:calc(var(--spacing)*4)}.\\!left-0{left:calc(var(--spacing)*0)!important}.left-0{left:calc(var(--spacing)*0)}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing)*2)}.left-5{left:calc(var(--spacing)*5)}.left-\\[calc\\(50dvw-36rem\\/2\\)\\]{left:calc(50dvw - 18rem)}.left-auto{left:auto}.\\!z-0{z-index:0!important}.-z-50{z-index:-50}.-z-\\[1\\]{z-index:-1}.-z-\\[2\\]{z-index:-2}.z-10{z-index:10}.z-\\[99999999\\]{z-index:99999999}.z-\\[999999999\\]{z-index:999999999}.z-\\[2147483647\\]{z-index:2147483647}.col-\\[1\\/-1\\]{grid-column:1/-1}.col-auto{grid-column:auto}.m-4{margin:calc(var(--spacing)*4)}.mt-0\\.5{margin-top:calc(var(--spacing)*.5)}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\.5{margin-top:calc(var(--spacing)*1.5)}.mt-2\\.5{margin-top:calc(var(--spacing)*2.5)}.mt-3\\.5{margin-top:calc(var(--spacing)*3.5)}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-1\\.5{margin-right:calc(var(--spacing)*1.5)}.mr-2{margin-right:calc(var(--spacing)*2)}.mb-3\\.5{margin-bottom:calc(var(--spacing)*3.5)}.-ml-2{margin-left:calc(var(--spacing)*-2)}.ml-1{margin-left:calc(var(--spacing)*1)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-auto{margin-left:auto}.line-clamp-1{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.aspect-square{aspect-ratio:1}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.size-7{width:calc(var(--spacing)*7);height:calc(var(--spacing)*7)}.size-9{width:calc(var(--spacing)*9);height:calc(var(--spacing)*9)}.size-10{width:calc(var(--spacing)*10);height:calc(var(--spacing)*10)}.\\!h-\\[calc\\(15dvh-32px\\)\\]{height:calc(15dvh - 32px)!important}.\\!h-\\[calc\\(85dvh-32px\\)\\]{height:calc(85dvh - 32px)!important}.h-2{height:calc(var(--spacing)*2)}.h-2\\.5{height:calc(var(--spacing)*2.5)}.h-4{height:calc(var(--spacing)*4)}.h-4\\.5{height:calc(var(--spacing)*4.5)}.h-7{height:calc(var(--spacing)*7)}.h-8{height:calc(var(--spacing)*8)}.h-9{height:calc(var(--spacing)*9)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.h-14{height:calc(var(--spacing)*14)}.h-\\[60dvh\\]{height:60dvh}.h-\\[75dvh\\]{height:75dvh}.h-full{height:100%}.\\!max-h-0{max-height:calc(var(--spacing)*0)!important}.max-h-2{max-height:calc(var(--spacing)*2)}.max-h-28{max-height:calc(var(--spacing)*28)}.max-h-\\[32dvh\\]{max-height:32dvh}.max-h-\\[400px\\]{max-height:400px}.min-h-4{min-height:calc(var(--spacing)*4)}.min-h-6{min-height:calc(var(--spacing)*6)}.min-h-full{min-height:100%}.\\!w-auto{width:auto!important}.w-2\\.5{width:calc(var(--spacing)*2.5)}.w-4{width:calc(var(--spacing)*4)}.w-8{width:calc(var(--spacing)*8)}.w-12{width:calc(var(--spacing)*12)}.w-72{width:calc(var(--spacing)*72)}.w-\\[1px\\]{width:1px}.w-fit{width:fit-content}.w-full{width:100%}.w-xl{width:576px}.max-w-10{max-width:calc(var(--spacing)*10)}.min-w-4{min-width:calc(var(--spacing)*4)}.min-w-6{min-width:calc(var(--spacing)*6)}.min-w-9{min-width:calc(var(--spacing)*9)}.min-w-10{min-width:calc(var(--spacing)*10)}.-translate-1\\/2{--tw-translate-x: -50% ;--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-6{--tw-translate-x:calc(var(--spacing)*-6);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-1\\/2{--tw-translate-x: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-full{--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-1\\/2{--tw-translate-y: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-none{translate:none}.rotate-0{rotate:none}.rotate-45{rotate:45deg}.rotate-180{rotate:180deg}.animate-move-left{animation:.2s ease-in-out move-left}.animate-move-up{animation:.2s ease-in-out move-up}.animate-pulse{animation:var(--animate-pulse)}.animate-scale{animation:.2s ease-in-out scale}.animate-spin{animation:var(--animate-spin)}.\\!cursor-not-allowed{cursor:not-allowed!important}.cursor-pointer{cursor:pointer}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.auto-rows-min{grid-auto-rows:min-content}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-\\[repeat\\(auto-fill\\,minmax\\(120px\\,1fr\\)\\)\\]{grid-template-columns:repeat(auto-fill,minmax(120px,1fr))}.grid-cols-\\[repeat\\(auto-fill\\,minmax\\(132px\\,1fr\\)\\)\\]{grid-template-columns:repeat(auto-fill,minmax(132px,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.place-content-center{place-content:center}.place-items-center{place-items:center}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-start{justify-content:flex-start}.gap-0{gap:calc(var(--spacing)*0)}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.gap-x-2{column-gap:calc(var(--spacing)*2)}.gap-y-4{row-gap:calc(var(--spacing)*4)}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-none{border-radius:0}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:calc(var(--radius) + 4px)}.rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.rounded-l-none{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-\\[8px\\]{border-top-right-radius:8px;border-bottom-right-radius:8px}.rounded-r-none{border-top-right-radius:0;border-bottom-right-radius:0}.rounded-b-md{border-bottom-right-radius:calc(var(--radius) - 2px);border-bottom-left-radius:calc(var(--radius) - 2px)}.border,.border-1{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t-1{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t-8{border-top-style:var(--tw-border-style);border-top-width:8px}.border-b-1{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-8{border-bottom-style:var(--tw-border-style);border-bottom-width:8px}.border-none{--tw-border-style:none;border-style:none}.\\!border-border{border-color:var(--border)!important}.border-border{border-color:var(--border)}.border-foreground\\/20{border-color:color-mix(in oklab,var(--foreground)20%,transparent)}.border-primary{border-color:var(--primary)}.border-primary\\/50{border-color:color-mix(in oklab,var(--primary)50%,transparent)}.border-transparent{border-color:#0000}.border-white{border-color:var(--color-white)}.border-t-primary{border-top-color:var(--primary)}.\\!border-b-primary{border-bottom-color:var(--primary)!important}.\\!border-b-white{border-bottom-color:var(--color-white)!important}.\\!bg-muted\\/30{background-color:color-mix(in oklab,var(--muted)30%,transparent)!important}.\\!bg-primary{background-color:var(--primary)!important}.\\!bg-primary\\/5{background-color:color-mix(in oklab,var(--primary)5%,transparent)!important}.bg-accent{background-color:var(--accent)}.bg-background{background-color:var(--background)}.bg-black\\/10{background-color:color-mix(in oklab,var(--color-black)10%,transparent)}.bg-black\\/20{background-color:color-mix(in oklab,var(--color-black)20%,transparent)}.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black)40%,transparent)}.bg-border{background-color:var(--border)}.bg-destructive{background-color:var(--destructive)}.bg-foreground\\/15{background-color:color-mix(in oklab,var(--foreground)15%,transparent)}.bg-muted{background-color:var(--muted)}.bg-popover{background-color:var(--popover)}.bg-primary{background-color:var(--primary)}.bg-primary\\/30{background-color:color-mix(in oklab,var(--primary)30%,transparent)}.bg-white{background-color:var(--color-white)}.fill-destructive-foreground{fill:var(--destructive-foreground)}.fill-foreground\\/80{fill:color-mix(in oklab,var(--foreground)80%,transparent)}.fill-muted-foreground{fill:var(--muted-foreground)}.fill-primary{fill:var(--primary)}.fill-primary-foreground{fill:var(--primary-foreground)}.fill-white{fill:var(--color-white)}.p-0{padding:calc(var(--spacing)*0)}.p-1\\.5{padding:calc(var(--spacing)*1.5)}.p-2{padding:calc(var(--spacing)*2)}.p-2\\.5{padding:calc(var(--spacing)*2.5)}.p-4{padding:calc(var(--spacing)*4)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-8{padding-block:calc(var(--spacing)*8)}.ps-2{padding-inline-start:calc(var(--spacing)*2)}.pt-0{padding-top:calc(var(--spacing)*0)}.pt-1{padding-top:calc(var(--spacing)*1)}.pt-2{padding-top:calc(var(--spacing)*2)}.pt-\\[2px\\]{padding-top:2px}.pr-2{padding-right:calc(var(--spacing)*2)}.pb-4{padding-bottom:calc(var(--spacing)*4)}.pl-4{padding-left:calc(var(--spacing)*4)}.text-center{text-align:center}.text-base{font-size:calc(var(--font-size)*1);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:calc(var(--font-size)*1.125);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:calc(var(--font-size)*1.25);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:calc(var(--font-size)*.75);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[13\\.5px\\]{font-size:13.5px}.text-\\[13px\\]{font-size:13px}.leading-none{--tw-leading:1;line-height:1}.leading-normal{--tw-leading:var(--leading-normal);line-height:var(--leading-normal)}.leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-normal{--tw-tracking:var(--tracking-normal);letter-spacing:var(--tracking-normal)}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.\\!text-muted-foreground{color:var(--muted-foreground)!important}.\\!text-primary-foreground{color:var(--primary-foreground)!important}.text-destructive-foreground{color:var(--destructive-foreground)}.text-foreground{color:var(--foreground)}.text-foreground\\/80{color:color-mix(in oklab,var(--foreground)80%,transparent)}.text-muted-foreground{color:var(--muted-foreground)}.text-popover-foreground{color:var(--popover-foreground)}.text-primary{color:var(--primary)}.text-primary-foreground{color:var(--primary-foreground)}.text-primary-foreground\\/80{color:color-mix(in oklab,var(--primary-foreground)80%,transparent)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.italic{font-style:italic}.opacity-50{opacity:.5}.opacity-80{opacity:.8}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline,.outline-1{outline-style:var(--tw-outline-style);outline-width:1px}.outline-destructive-foreground{outline-color:var(--destructive-foreground)}.outline-primary{outline-color:var(--primary)}.outline-primary-foreground{outline-color:var(--primary-foreground)}.brightness-85{--tw-brightness:brightness(85%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[bottom\\,width\\]{transition-property:bottom,width;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-500{--tw-duration:.5s;transition-duration:.5s}:is(.\\*\\:\\!pointer-events-none>*){pointer-events:none!important}:is(.\\*\\:pointer-events-none>*){pointer-events:none}@media (hover:hover){.group-hover\\:visible:is(:where(.group):hover *){visibility:visible}.group-hover\\:ml-0:is(:where(.group):hover *){margin-left:calc(var(--spacing)*0)}.group-hover\\:fill-foreground:is(:where(.group):hover *){fill:var(--foreground)}.group-hover\\:fill-primary:is(:where(.group):hover *){fill:var(--primary)}.group-hover\\:text-primary:is(:where(.group):hover *){color:var(--primary)}.group-hover\\:underline:is(:where(.group):hover *){text-decoration-line:underline}.group-hover\\:brightness-85:is(:where(.group):hover *){--tw-brightness:brightness(85%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}}.placeholder\\:text-sm::placeholder{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}@media (hover:hover){.hover\\:border-destructive\\/20:hover{border-color:color-mix(in oklab,var(--destructive)20%,transparent)}.hover\\:border-primary:hover{border-color:var(--primary)}.hover\\:bg-accent:hover{background-color:var(--accent)}.hover\\:bg-destructive\\/10:hover{background-color:color-mix(in oklab,var(--destructive)10%,transparent)}.hover\\:bg-foreground\\/5:hover{background-color:color-mix(in oklab,var(--foreground)5%,transparent)}.hover\\:bg-foreground\\/10:hover{background-color:color-mix(in oklab,var(--foreground)10%,transparent)}.hover\\:bg-muted:hover{background-color:var(--muted)}.hover\\:bg-primary\\/10:hover{background-color:color-mix(in oklab,var(--primary)10%,transparent)}.hover\\:fill-foreground:hover{fill:var(--foreground)}.hover\\:text-foreground:hover{color:var(--foreground)}.hover\\:brightness-90:hover{--tw-brightness:brightness(90%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.hover\\:brightness-110:hover{--tw-brightness:brightness(110%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}:is(.hover\\:\\*\\:text-primary:hover>*){color:var(--primary)}}.focus\\:border-primary:focus{border-color:var(--primary)}.focus\\:outline-solid:focus{--tw-outline-style:solid;outline-style:solid}.data-\\[active\\=\\'true\\'\\]\\:bottom-2[data-active=true]{bottom:calc(var(--spacing)*2)}.data-\\[active\\=true\\]\\:\\!border-primary[data-active=true]{border-color:var(--primary)!important}.data-\\[active\\=true\\]\\:\\!bg-primary\\/10[data-active=true]{background-color:color-mix(in oklab,var(--primary)10%,transparent)!important}@media (width<40rem){.max-sm\\:right-2{right:calc(var(--spacing)*2)}.max-sm\\:text-sm{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}}@media (width<30rem){.max-xs\\:left-2{left:calc(var(--spacing)*2)}}@media (width<20rem){.max-xxs\\:hidden{display:none}}@media (width>=30rem){.xs\\:mb-1{margin-bottom:calc(var(--spacing)*1)}.xs\\:h-\\[90dvh\\]{height:90dvh}.xs\\:w-md{width:448px}.xs\\:grid-cols-\\[repeat\\(auto-fill\\,minmax\\(180px\\,1fr\\)\\)\\]{grid-template-columns:repeat(auto-fill,minmax(180px,1fr))}.xs\\:gap-x-1{column-gap:calc(var(--spacing)*1)}.xs\\:text-lg{font-size:calc(var(--font-size)*1.125);line-height:var(--tw-leading,var(--text-lg--line-height))}.xs\\:text-sm{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}.xs\\:text-\\[13\\.5px\\]{font-size:13.5px}.xs\\:text-\\[15px\\]{font-size:15px}}@media (width>=40rem){.sm\\:size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.sm\\:size-10{width:calc(var(--spacing)*10);height:calc(var(--spacing)*10)}.sm\\:h-\\[22px\\]{height:22px}.sm\\:w-lg{width:512px}.sm\\:text-sm{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}}@media (width>=48rem){.md\\:w-2xl{width:672px}}.dark\\:bg-background:is(:host(.dark) *){background-color:var(--background)}.dark\\:bg-black\\/30:is(:host(.dark) *){background-color:color-mix(in oklab,var(--color-black)30%,transparent)}.dark\\:bg-muted:is(:host(.dark) *){background-color:var(--muted)}.dark\\:bg-popover:is(:host(.dark) *){background-color:var(--popover)}.dark\\:\\!shadow-none:is(:host(.dark) *){--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}@media (hover:hover){.hover\\:dark\\:bg-primary\\/5:hover:is(:host(.dark) *){background-color:color-mix(in oklab,var(--primary)5%,transparent)}}.\\[\\&_svg\\]\\:size-8 svg{width:calc(var(--spacing)*8);height:calc(var(--spacing)*8)}.\\[\\&\\>\\*\\]\\:\\!pointer-events-none>*{pointer-events:none!important}.\\[\\&\\>\\*\\]\\:absolute>*{position:absolute}.\\[\\&\\>\\*\\]\\:h-0>*{height:calc(var(--spacing)*0)}.\\[\\&\\>\\*\\]\\:w-0>*{width:calc(var(--spacing)*0)}.\\[\\&\\>\\*\\]\\:border-r-12>*{border-right-style:var(--tw-border-style);border-right-width:12px}.\\[\\&\\>\\*\\]\\:border-b-12>*{border-bottom-style:var(--tw-border-style);border-bottom-width:12px}.\\[\\&\\>\\*\\]\\:border-l-12>*{border-left-style:var(--tw-border-style);border-left-width:12px}.\\[\\&\\>\\*\\]\\:border-transparent>*{border-color:#0000}.\\[\\&\\>\\*\\]\\:fill-primary>*{fill:var(--primary)}.\\[\\&\\>\\*\\]\\:text-primary>*{color:var(--primary)}.\\[\\&\\>svg\\]\\:pointer-events-none>svg{pointer-events:none}.\\[\\&\\>svg\\]\\:size-7>svg{width:calc(var(--spacing)*7);height:calc(var(--spacing)*7)}.\\[\\&\\>svg\\]\\:rounded-full>svg{border-radius:3.40282e38px}.\\[\\&\\>svg\\]\\:bg-accent>svg{background-color:var(--accent)}.\\[\\&\\>svg\\]\\:fill-foreground>svg{fill:var(--foreground)}.\\[\\&\\>svg\\]\\:fill-foreground\\/80>svg{fill:color-mix(in oklab,var(--foreground)80%,transparent)}.\\[\\&\\>svg\\]\\:p-1>svg{padding:calc(var(--spacing)*1)}.\\[\\&\\>svg\\]\\:not-hover\\:\\!fill-muted-foreground>svg:not(:hover){fill:var(--muted-foreground)!important}@media not (hover:hover){.\\[\\&\\>svg\\]\\:not-hover\\:\\!fill-muted-foreground>svg{fill:var(--muted-foreground)!important}}@media (hover:hover){.hover\\:\\[\\&\\>svg\\]\\:fill-destructive:hover>svg{fill:var(--destructive)}.hover\\:\\[\\&\\>svg\\]\\:fill-foreground:hover>svg{fill:var(--foreground)}}.data-\\[active\\=true\\]\\:\\[\\&\\>svg\\]\\:bg-primary[data-active=true]>svg{background-color:var(--primary)}.data-\\[active\\=true\\]\\:\\[\\&\\>svg\\]\\:fill-primary-foreground[data-active=true]>svg{fill:var(--primary-foreground)}@media (width>=30rem){.xs\\:\\[\\&\\>svg\\]\\:size-8>svg{width:calc(var(--spacing)*8);height:calc(var(--spacing)*8)}.xs\\:\\[\\&\\>svg\\]\\:p-1\\.5>svg{padding:calc(var(--spacing)*1.5)}}}:host{--background:oklch(1 0 0);--foreground:oklch(25% 0 0);--popover:oklch(1 0 0);--popover-foreground:oklch(.145 0 0);--primary:oklch(56.99% .1959 259.98);--primary-foreground:oklch(1 0 0);--secondary:oklch(.97 0 0);--secondary-foreground:oklch(.205 0 0);--muted:oklch(.97 0 0);--muted-foreground:oklch(.556 0 0);--accent:oklch(.97 0 0);--accent-foreground:oklch(.205 0 0);--destructive:oklch(.577 .245 27.325);--destructive-foreground:oklch(.985 0 0);--border:oklch(.922 0 0);--input:oklch(.922 0 0);--ring:oklch(.708 0 0);--radius:10px;--spacing:4px;--font-sans:"VLibrasWidget_Font",sans-serif;--font-size:16px}:host(.dark){--background:oklch(.16 0 0);--foreground:oklch(.985 0 0);--popover:oklch(.2 0 0);--popover-foreground:oklch(.985 0 0);--secondary:oklch(.269 0 0);--secondary-foreground:oklch(.985 0 0);--muted:oklch(.2 0 0);--muted-foreground:oklch(.708 0 0);--accent:oklch(.269 0 0);--accent-foreground:oklch(.985 0 0);--destructive:oklch(.637 .237 25.331);--destructive-foreground:oklch(.985 0 0);--border:oklch(.269 0 0);--input:oklch(.269 0 0);--ring:oklch(.439 0 0)}:host{font-family:var(--font-sans)!important}:host ::-webkit-scrollbar{height:calc(var(--spacing)*2.5);width:calc(var(--spacing)*2.5)}:host ::-webkit-scrollbar-track{background-color:#0000}:host ::-webkit-scrollbar-thumb{border-style:var(--tw-border-style);--tw-border-style:solid;background-color:var(--border);background-clip:padding-box;border:1px solid #0000;border-radius:3.40282e38px}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}@keyframes scale{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes move-left{0%{opacity:0;transform:translate(-100%)}to{opacity:1;transform:translate(0)}}@keyframes move-up{0%{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}`, T8 = ({ children: e, root: r }) => /* @__PURE__ */ a(n8, { root: r, children: [
  /* @__PURE__ */ a("style", { children: S8 }),
  /* @__PURE__ */ a(E8, {}),
  e
] }), N8 = () => {
  const { isActive: e } = N(), { t: r } = z();
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        display: e ? "grid" : "none",
        placeContent: "center",
        borderRadius: 40,
        width: 16,
        height: 16,
        zIndex: 1e8,
        position: "absolute",
        bottom: -4,
        right: 28,
        background: "#fff"
      },
      children: /* @__PURE__ */ a(
        Jn,
        {
          style: {
            fill: "#2c9e2c",
            width: "100%",
            height: "100%"
          },
          iconTitle: r("actived")
        }
      )
    }
  );
}, k8 = () => (P(() => {
  var n;
  const e = (n = document.getElementById("vwp-app-wrapper")) == null ? void 0 : n.shadowRoot, r = e == null ? void 0 : e.getElementById("vwp-access-wrapper"), t = document.createElement("div");
  Ye(/* @__PURE__ */ a(N8, {}), t), r == null || r.appendChild(t);
}, []), null), L8 = () => /* @__PURE__ */ a(ve, { children: /* @__PURE__ */ a(k8, {}) }), { root: R8, shadowRoot: En, isRootActive: xa } = Bu();
function M8() {
  const { setIsOpenWidget: e, isLoaded: r, setIsLoaded: t } = N(), { path: n } = Lr();
  return P(() => {
    if ((async () => (await Fu(n, En), t(!0)))(), !r) return;
    e(xa());
    const i = new MutationObserver(() => e(xa()));
    return i.observe(R8, {
      attributes: !0,
      attributeFilter: ["data-active"]
    }), () => i.disconnect();
  }, [n, e, r, t]), /* @__PURE__ */ a(T8, { root: En, children: [
    /* @__PURE__ */ a(r8, {}),
    /* @__PURE__ */ a(L8, {})
  ] });
}
Ye(/* @__PURE__ */ a(M8, {}), En);
