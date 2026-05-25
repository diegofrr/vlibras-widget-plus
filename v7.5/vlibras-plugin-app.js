var Z, Ya, zt, U2, Mi, Qa, Ka, e2, ro, io, Xa, Ii = {}, Ja = [], yl = /(mi|mn|mo|ms$|mte|msp)/, oi = Array.isArray, tn = Ja.slice, bt = Object.assign;
function t2(t) {
  t && t.parentNode && t.remove();
}
function wt(t, e, r) {
  var i, n, o, s = {};
  for (o in e) o == "key" ? i = e[o] : o == "ref" && typeof t != "function" ? n = e[o] : s[o] = e[o];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? tn.call(arguments, 2) : r), Wr(t, s, i, n, null);
}
function Wr(t, e, r, i, n) {
  var o = { type: t, props: e, key: r, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: n ?? ++Ya, __i: -1, __u: 0 };
  return n == null && Z.vnode != null && Z.vnode(o), o;
}
function xl() {
  return { current: null };
}
function ge(t) {
  return t.children;
}
function Ct(t, e) {
  this.props = t, this.context = e, this.__g = 0;
}
function ar(t, e) {
  if (e == null) return t.__ ? ar(t.__, t.__i + 1) : null;
  for (var r; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) return r.__e;
  return typeof t.type == "function" ? ar(t) : null;
}
function $a(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = e.__e;
  }), $a(t);
}
function no(t) {
  (8 & t.__g || !(t.__g |= 8) || !zt.push(t) || Mi++) && U2 == Z.debounceRendering || ((U2 = Z.debounceRendering) || queueMicrotask)(kl);
}
function kl() {
  for (var t, e, r, i, n, o, s, a, l = 1; zt.length; ) zt.length > l && zt.sort(Qa), t = zt.shift(), l = zt.length, 8 & t.__g && (r = void 0, i = void 0, n = (i = (e = t).__v).__e, o = [], s = [], (a = e.__P) && ((r = bt({}, i)).__v = i.__v + 1, Z.vnode && Z.vnode(r), r2(a, r, i, e.__n, a.namespaceURI, 32 & i.__u ? [n] : null, o, n ?? ar(i), !!(32 & i.__u), s, a.ownerDocument), r.__v = i.__v, r.__.__k[r.__i] = r, r0(o, r, s), i.__ = i.__e = null, r.__e != n && $a(r)));
  Mi = 0;
}
function e0(t, e, r, i, n, o, s, a, l, u, d, p) {
  var h, f, v, g, m, w, y, x = i && i.__k || Ja, _ = e.length;
  for (l = Al(r, e, x, l, _), h = 0; h < _; h++) (v = r.__k[h]) != null && (f = v.__i != -1 && x[v.__i] || Ii, v.__i = h, w = r2(t, v, f, n, o, s, a, l, u, d, p), g = v.__e, v.ref && f.ref != v.ref && (f.ref && i2(f.ref, null, v), d.push(v.ref, v.__c || g, v)), m == null && g != null && (m = g), (y = 4 & v.__u) || f.__k === v.__k ? l = t0(v, l, t, y) : typeof v.type == "function" && w !== void 0 ? l = w : g && (l = g.nextSibling), v.__u &= -7);
  return r.__e = m, l;
}
function Al(t, e, r, i, n) {
  var o, s, a, l, u, d = r.length, p = d, h = 0;
  for (t.__k = new Array(n), o = 0; o < n; o++) (s = e[o]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = t.__k[o] = Wr(null, s, null, null, null) : oi(s) ? s = t.__k[o] = Wr(ge, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = t.__k[o] = Wr(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : t.__k[o] = s, l = o + h, s.__ = t, s.__b = t.__b + 1, a = null, (u = s.__i = El(s, r, l, p)) != -1 && (p--, (a = r[u]) && (a.__u |= 2)), a == null || a.__v == null ? (u == -1 && (n > d ? h-- : n < d && h++), typeof s.type != "function" && (s.__u |= 4)) : u != l && (u == l - 1 ? h-- : u == l + 1 ? h++ : (u > l ? h-- : h++, s.__u |= 4))) : t.__k[o] = null;
  if (p) for (o = 0; o < d; o++) (a = r[o]) != null && (2 & a.__u) == 0 && (a.__e == i && (i = ar(a)), n0(a, a));
  return i;
}
function t0(t, e, r, i) {
  var n, o;
  if (typeof t.type == "function") {
    for (n = t.__k, o = 0; n && o < n.length; o++) n[o] && (n[o].__ = t, e = t0(n[o], e, r, i));
    return e;
  }
  t.__e != e && (i && (e && t.type && !e.parentNode && (e = ar(t)), r.insertBefore(t.__e, e || null)), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function Mt(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (oi(t) ? t.some(function(r) {
    Mt(r, e);
  }) : e.push(t)), e;
}
function El(t, e, r, i) {
  var n, o, s, a = t.key, l = t.type, u = e[r], d = u != null && (2 & u.__u) == 0;
  if (u === null && a == null || d && a == u.key && l == u.type) return r;
  if (i > (d ? 1 : 0)) {
    for (n = r - 1, o = r + 1; n >= 0 || o < e.length; ) if ((u = e[s = n >= 0 ? n-- : o++]) != null && (2 & u.__u) == 0 && a == u.key && l == u.type) return s;
  }
  return -1;
}
function j2(t, e, r) {
  e[0] == "-" ? t.setProperty(e, r ?? "") : t[e] = r ?? "";
}
function li(t, e, r, i, n) {
  var o;
  e: if (e == "style") if (typeof r == "string") t.style.cssText = r;
  else {
    if (typeof i == "string" && (t.style.cssText = i = ""), i) for (e in i) r && e in r || j2(t.style, e, "");
    if (r) for (e in r) i && r[e] == i[e] || j2(t.style, e, r[e]);
  }
  else if (e[0] == "o" && e[1] == "n") o = e != (e = e.replace(Ka, "$1")), e = e.slice(2).toLowerCase(), t.__l || (t.__l = {}), t.__l[e + o] = r, r ? i ? r.l = i.l : (r.l = e2, t.addEventListener(e, o ? io : ro, o)) : t.removeEventListener(e, o ? io : ro, o);
  else {
    if (n == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && r == 1 ? "" : r));
  }
}
function Z2(t) {
  return function(e) {
    if (this.__l) {
      var r = this.__l[e.type + t];
      if (e.u == null) e.u = e2++;
      else if (e.u < r.l) return;
      return r(Z.event ? Z.event(e) : e);
    }
  };
}
function r2(t, e, r, i, n, o, s, a, l, u, d) {
  var p, h, f, v, g, m, w, y, x, _, k, A, E, b, S, D, V, H, U, z = e.type;
  if (e.constructor !== void 0) return null;
  128 & r.__u && (l = 32 & r.__u) && r.__c.__z && (a = (o = r.__c.__z)[0], r.__c.__z = null), (p = Z.__b) && p(e);
  e: if (typeof z == "function") try {
    if (m = e.props, w = "prototype" in z && z.prototype.render, y = (p = z.contextType) && i[p.__c], x = p ? y ? y.props.value : p.__ : i, r.__c ? 2 & (h = e.__c = r.__c).__g && (h.__g |= 1) : (w ? e.__c = h = new z(m, x) : (e.__c = h = new Ct(m, x), h.constructor = z, h.render = Rl), y && y.sub(h), h.state || (h.state = {}), h.__n = i, h.__g |= 8, h.__h = [], h._sb = []), w && h.__s == null && (h.__s = h.state), w && z.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = bt({}, h.__s)), bt(h.__s, z.getDerivedStateFromProps(m, h.__s))), f = h.props, v = h.state, h.__v = e, r.__c) {
      if (w && z.getDerivedStateFromProps == null && m !== f && h.componentWillReceiveProps != null && h.componentWillReceiveProps(m, x), e.__v == r.__v || !(4 & h.__g) && h.shouldComponentUpdate != null && h.shouldComponentUpdate(m, h.__s, x) === !1) {
        e.__v != r.__v && (h.props = m, h.state = h.__s, h.__g &= -9), e.__e = r.__e, e.__k = r.__k, e.__k.some(function(G) {
          G && (G.__ = e);
        }), (_ = h.__h).push.apply(_, h._sb), h._sb = [], h.__h.length && s.push(h);
        break e;
      }
      h.componentWillUpdate != null && h.componentWillUpdate(m, h.__s, x), w && h.componentDidUpdate != null && h.__h.push(function() {
        h.componentDidUpdate(f, v, g);
      });
    } else w && z.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), w && h.componentDidMount != null && h.__h.push(h.componentDidMount);
    if (h.context = x, h.props = m, h.__P = t, h.__g &= -5, k = Z.__r, A = 0, w) h.state = h.__s, h.__g &= -9, k && k(e), p = h.render(h.props, h.state, h.context), (E = h.__h).push.apply(E, h._sb), h._sb = [];
    else do
      h.__g &= -9, k && k(e), p = h.render(h.props, h.state, h.context), h.state = h.__s;
    while (8 & h.__g && ++A < 25);
    h.state = h.__s, h.getChildContext != null && (i = bt({}, i, h.getChildContext())), w && r.__c && h.getSnapshotBeforeUpdate != null && (g = h.getSnapshotBeforeUpdate(f, v)), b = p != null && p.type === ge && p.key == null ? i0(p.props.children) : p, a = e0(t, oi(b) ? b : [b], e, r, i, n, o, s, a, l, u, d), e.__u &= -161, h.__h.length && s.push(h), 2 & h.__g && (h.__g &= -4);
  } catch (G) {
    if (e.__v = null, l || o != null) if (G.then) {
      for (S = 0, e.__u |= l ? 160 : 128, e.__c.__z = [], V = 0; V < o.length; V++) (H = o[V]) == null || D || (H.nodeType == 8 ? (H.data == "$s" ? (S && e.__c.__z.push(H), S++) : H.data == "/$s" && (--S && e.__c.__z.push(H), D = S == 0, a = o[V]), o[V] = null) : S && (e.__c.__z.push(H), o[V] = null));
      if (!D) {
        for (; a && a.nodeType == 8 && a.nextSibling; ) a = a.nextSibling;
        o[o.indexOf(a)] = null, e.__c.__z = [a];
      }
      e.__e = a;
    } else {
      for (U = o.length; U--; ) t2(o[U]);
      oo(e);
    }
    else e.__e = r.__e, e.__k = r.__k, G.then || oo(e);
    Z.__e(G, e, r);
  }
  else a = e.__e = Sl(r.__e, e, r, i, n, o, s, l, u, d);
  return (p = Z.diffed) && p(e), 128 & e.__u ? void 0 : a;
}
function oo(t) {
  t && t.__c && (t.__c.__g |= 4), t && t.__k && t.__k.forEach(oo);
}
function r0(t, e, r) {
  for (var i = 0; i < r.length; i++) i2(r[i], r[++i], r[++i]);
  Z.__c && Z.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      Z.__e(o, n.__v);
    }
  });
}
function i0(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : oi(t) ? t.map(i0) : bt({}, t);
}
function Sl(t, e, r, i, n, o, s, a, l, u) {
  var d, p, h, f, v, g, m, w, y = r.props || Ii, x = e.props, _ = e.type;
  if (_ == "svg" ? n = "http://www.w3.org/2000/svg" : _ == "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), o != null) {
    for (d = 0; d < o.length; d++) if ((v = o[d]) && "setAttribute" in v == !!_ && (_ ? v.localName == _ : v.nodeType == 3)) {
      t = v, o[d] = null;
      break;
    }
  }
  if (t == null) {
    if (_ == null) return u.createTextNode(x);
    t = u.createElementNS(n, _, x.is && x), a && (Z.__m && Z.__m(e, o), a = !1), o = null;
  }
  if (_ == null) y === x || a && t.data == x || (t.data = x);
  else {
    if (o = o && tn.call(t.childNodes), !a && o != null) for (y = {}, d = 0; d < t.attributes.length; d++) y[(v = t.attributes[d]).name] = v.value;
    for (d in y) v = y[d], d == "dangerouslySetInnerHTML" ? h = v : d == "children" || d in x || d == "value" && "defaultValue" in x || d == "checked" && "defaultChecked" in x || li(t, d, null, v, n);
    for (d in w = 1 & r.__u, x) v = x[d], d == "children" ? f = v : d == "dangerouslySetInnerHTML" ? p = v : d == "value" ? g = v : d == "checked" ? m = v : a && typeof v != "function" || y[d] === v && !w || li(t, d, v, y[d], n);
    if (p) a || h && (p.__html == h.__html || p.__html == t.innerHTML) || (t.innerHTML = p.__html), e.__k = [];
    else if (h && (t.innerHTML = ""), (_ == "foreignObject" || n == "http://www.w3.org/1998/Math/MathML" && yl.test(_)) && (n = "http://www.w3.org/1999/xhtml"), e0(_ == "template" ? t.content : t, oi(f) ? f : [f], e, r, i, n, o, s, o ? o[0] : r.__k && ar(r, 0), a, l, u), o != null) for (d = o.length; d--; ) t2(o[d]);
    a || (d = "value", _ == "progress" && g == null ? t.removeAttribute("value") : g == null || g === t[d] && (_ !== "progress" || g) || li(t, d, g, y[d], n), d = "checked", m != null && m != t[d] && li(t, d, m, y[d], n));
  }
  return t;
}
function i2(t, e, r) {
  try {
    typeof t == "function" ? (typeof t.__u == "function" && t.__u(), typeof t.__u == "function" && e == null || (t.__u = t(e))) : t.current = e;
  } catch (i) {
    Z.__e(i, r);
  }
}
function n0(t, e, r) {
  var i, n;
  if (Z.unmount && Z.unmount(t), !(i = t.ref) || i.current && i.current != t.__e || i2(i, null, e), (i = t.__c) != null) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (o) {
      Z.__e(o, e);
    }
    i.__P = null;
  }
  if (i = t.__k) for (n = 0; n < i.length; n++) i[n] && n0(i[n], e, r || typeof t.type != "function");
  r || t2(t.__e), t.__e && t.__e.__l && (t.__e.__l = null), t.__e = t.__c = t.__ = null;
}
function Rl(t, e, r) {
  return this.constructor(t, r);
}
function lr(t, e) {
  var r, i, n, o;
  e == document && (e = document.documentElement), Z.__ && Z.__(t, e), i = (r = t && 32 & t.__u) ? null : e.__k, e.__k = wt(ge, null, [t]), n = [], o = [], r2(e, e.__k, i || Ii, Ii, e.namespaceURI, i ? null : e.firstChild ? tn.call(e.childNodes) : null, n, i ? i.__e : e.firstChild, r, o, e.ownerDocument), r0(n, e.__k, o);
}
function Pl(t, e) {
  t.__u |= 32, lr(t, e);
}
function Ml(t, e, r) {
  var i, n, o, s = bt({}, t.props);
  for (o in e) o == "key" ? i = e[o] : o == "ref" && typeof t.type != "function" ? n = e[o] : s[o] = e[o];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? tn.call(arguments, 2) : r), Wr(t.type, s, i || t.key, n || t.ref, null);
}
function Wt(t) {
  function e(r) {
    var i, n;
    return this.getChildContext || (i = /* @__PURE__ */ new Set(), (n = {})[e.__c] = this, this.getChildContext = function() {
      return n;
    }, this.componentWillUnmount = function() {
      i = null;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value != o.value && i.forEach(function(s) {
        s.__g |= 4, no(s);
      });
    }, this.sub = function(o) {
      i.add(o);
      var s = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        i && i.delete(o), s && s.call(o);
      };
    }), r.children;
  }
  return e.__c = "__cC" + Xa++, e.__ = t, e.Provider = e.__l = (e.Consumer = function(r, i) {
    return r.children(i);
  }).contextType = e, e;
}
Z = { __e: function(t, e, r, i) {
  for (var n, o, s; e = e.__; ) if ((n = e.__c) && !(1 & n.__g)) {
    n.__g |= 4;
    try {
      if ((o = n.constructor) && o.getDerivedStateFromError != null && (n.setState(o.getDerivedStateFromError(t)), s = 8 & n.__g), n.componentDidCatch != null && (n.componentDidCatch(t, i || {}), s = 8 & n.__g), s) return void (n.__g |= 2);
    } catch (a) {
      t = a;
    }
  }
  throw Mi = 0, t;
} }, Ya = 0, Ct.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = bt({}, this.state), typeof t == "function" && (t = t(bt({}, r), this.props)), t && (bt(r, t), this.__v && (e && this._sb.push(e), no(this)));
}, Ct.prototype.forceUpdate = function(t) {
  this.__v && (this.__g |= 4, t && this.__h.push(t), no(this));
}, Ct.prototype.render = ge, zt = [], Mi = 0, Qa = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, Ka = /(PointerCapture)$|Capture$/i, e2 = 0, ro = Z2(!1), io = Z2(!0), Xa = 0;
var Il = 0;
function c(t, e, r, i, n, o) {
  e || (e = {});
  var s, a, l = e;
  if ("ref" in l && typeof t != "function") for (a in l = {}, e) a == "ref" ? s = e[a] : l[a] = e[a];
  var u = { type: t, props: l, key: r, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Il, __i: -1, __u: 0, __source: n, __self: o };
  return Z.vnode && Z.vnode(u), u;
}
var Nt, te, wn, B2, so = Object.is, cr = 0, o0 = [], se = Z, q2 = se.__b, W2 = se.__r, G2 = se.diffed, Y2 = se.__c, Q2 = se.unmount, K2 = se.__;
function mr(t, e) {
  se.__h && se.__h(te, t, cr || e), cr = 0;
  var r = te.__H || (te.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({}), r.__[t];
}
function le(t) {
  return cr = 1, n2(c0, t);
}
function n2(t, e, r) {
  var i = mr(Nt++, 2);
  if (i.t = t, !i.__c && (i.__ = [r ? r(e) : c0(void 0, e), function(a) {
    var l = i.__N ? i.__N[0] : i.__[0], u = i.t(l, a);
    so(l, u) || (i.__N = [u, i.__[1]], i.__c.setState({}));
  }], i.__c = te, !te.__f)) {
    var n = function(a, l, u) {
      if (!i.__c.__H) return !0;
      var d = i.__c.__H.__, p = i.__c.props !== a || d.every(function(h) {
        return !h.__N;
      });
      return d.some(function(h) {
        if (h.__N) {
          var f = h.__[0];
          h.__ = h.__N, h.__N = void 0, so(f, h.__[0]) || (p = !0);
        }
      }), o && o.call(this, a, l, u) || p;
    };
    te.__f = !0;
    var o = te.shouldComponentUpdate, s = te.componentWillUpdate;
    te.componentWillUpdate = function(a, l, u) {
      if (4 & this.__g) {
        var d = o;
        o = void 0, n(a, l, u), o = d;
      }
      s && s.call(this, a, l, u);
    }, te.shouldComponentUpdate = n;
  }
  return i.__;
}
function F(t, e) {
  var r = mr(Nt++, 3);
  !se.__s && o2(r.__H, e) && (r.__ = t, r.u = e, te.__H.__h.push(r));
}
function br(t, e) {
  var r = mr(Nt++, 4);
  !se.__s && o2(r.__H, e) && (r.__ = t, r.u = e, te.__h.push(r));
}
function Ae(t) {
  return cr = 5, Ve(function() {
    return { current: t };
  }, []);
}
function s0(t, e, r) {
  cr = 6, br(function() {
    if (typeof t == "function") {
      var i = t(e());
      return function() {
        t(null), i && typeof i == "function" && i();
      };
    }
    if (t) return t.current = e(), function() {
      return t.current = null;
    };
  }, r == null ? r : r.concat(t));
}
function Ve(t, e) {
  var r = mr(Nt++, 7);
  return o2(r.__H, e) && (r.__ = t(), r.__H = e, r.__h = t), r.__;
}
function dr(t, e) {
  return cr = 8, Ve(function() {
    return t;
  }, e);
}
function $e(t) {
  var e = te.context[t.__c], r = mr(Nt++, 9);
  return r.c = t, e ? (r.__ == null && (r.__ = !0, e.sub(te)), e.props.value) : t.__;
}
function a0(t, e) {
  se.useDebugValue && se.useDebugValue(e ? e(t) : t);
}
function l0() {
  var t = mr(Nt++, 11);
  if (!t.__) {
    for (var e = te.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var r = e.__m || (e.__m = [0, 0]);
    t.__ = "P" + r[0] + "-" + r[1]++;
  }
  return t.__;
}
function Ll() {
  for (var t; t = o0.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.some(yi), t.__H.__h.some(ao), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], se.__e(e, t.__v);
  }
}
se.__b = function(t) {
  te = null, q2 && q2(t);
}, se.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), K2 && K2(t, e);
}, se.__r = function(t) {
  W2 && W2(t), Nt = 0;
  var e = (te = t.__c).__H;
  e && (wn === te ? (e.__h = [], te.__h = [], e.__.some(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (e.__h.some(yi), e.__h.some(ao), e.__h = [], Nt = 0)), wn = te;
}, se.diffed = function(t) {
  G2 && G2(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (o0.push(e) !== 1 && B2 === se.requestAnimationFrame || ((B2 = se.requestAnimationFrame) || Nl)(Ll)), e.__H.__.some(function(r) {
    r.u && (r.__H = r.u), r.u = void 0;
  })), wn = te = null;
}, se.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.some(yi), r.__h = r.__h.filter(function(i) {
        return !i.__ || ao(i);
      });
    } catch (i) {
      e.some(function(n) {
        n.__h && (n.__h = []);
      }), e = [], se.__e(i, r.__v);
    }
  }), Y2 && Y2(t, e);
}, se.unmount = function(t) {
  Q2 && Q2(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.some(function(i) {
    try {
      yi(i);
    } catch (n) {
      e = n;
    }
  }), r.__H = void 0, e && se.__e(e, r.__v));
};
var X2 = typeof requestAnimationFrame == "function";
function Nl(t) {
  var e, r = function() {
    clearTimeout(i), X2 && cancelAnimationFrame(e), setTimeout(t);
  }, i = setTimeout(r, 35);
  X2 && (e = requestAnimationFrame(r));
}
function yi(t) {
  var e = te, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), te = e;
}
function ao(t) {
  var e = te;
  t.__c = t.__(), te = e;
}
function o2(t, e) {
  return !t || t.length !== e.length || e.some(function(r, i) {
    return !so(r, t[i]);
  });
}
function c0(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const J2 = (t) => {
  let e;
  const r = /* @__PURE__ */ new Set(), i = (u, d) => {
    const p = typeof u == "function" ? u(e) : u;
    if (!Object.is(p, e)) {
      const h = e;
      e = d ?? (typeof p != "object" || p === null) ? p : Object.assign({}, e, p), r.forEach((f) => f(e, h));
    }
  }, n = () => e, a = { setState: i, getState: n, getInitialState: () => l, subscribe: (u) => (r.add(u), () => r.delete(u)) }, l = e = t(i, n, a);
  return a;
}, d0 = ((t) => t ? J2(t) : J2);
function u0(t, e) {
  var r = e(), i = le({ t: { __: r, u: e } }), n = i[0].t, o = i[1];
  return br(function() {
    n.__ = r, n.u = e, _n(n) && o({ t: n });
  }, [t, r, e]), F(function() {
    return _n(n) && o({ t: n }), t(function() {
      _n(n) && o({ t: n });
    });
  }, [t]), r;
}
function _n(t) {
  try {
    return !Object.is(t.__, t.u());
  } catch {
    return !0;
  }
}
function s2(t) {
  t();
}
function h0(t) {
  return t;
}
function p0() {
  return [!1, s2];
}
var g0 = br, a2 = Object.assign;
function lo(t, e) {
  for (var r in t) if (r !== "__source" && !(r in e)) return !0;
  for (var i in e) if (i !== "__source" && t[i] !== e[i]) return !0;
  return !1;
}
var Ol = /^(-|f[lo].*[^se]$|g.{5,}[^ps]$|z|o[pr]|(W.{5})?[lL]i.*(t|mp)$|an|(bo|s).{4}Im|sca|m.{6}[ds]|ta|c.*[st]$|wido|ini)/;
function co(t, e) {
  this.props = t, this.context = e;
}
function Hl(t, e) {
  function r(n) {
    var o = this.props.ref, s = o == n.ref;
    return !s && o && (o.call ? o(null) : o.current = null), e ? !e(this.props, n) || !s : lo(this.props, n);
  }
  function i(n) {
    return this.shouldComponentUpdate = r, wt(t, n);
  }
  return i.displayName = "Memo(" + (t.displayName || t.name) + ")", i.prototype.isReactComponent = !0, i.type = t, i;
}
(co.prototype = new Ct()).isPureReactComponent = !0, co.prototype.shouldComponentUpdate = function(t, e) {
  return lo(this.props, t) || lo(this.state, e);
};
var Tl = /* @__PURE__ */ Symbol.for("react.forward_ref");
function Fl(t) {
  function e(r) {
    var i = a2({}, r);
    return delete i.ref, t(i, r.ref || null);
  }
  return e.$$typeof = Tl, e.render = t, e.prototype.isReactComponent = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
var $2 = function(t, e, r) {
  return t == null ? null : Mt(Mt(t).map(e.bind(r)));
}, Vl = { map: $2, forEach: $2, count: function(t) {
  return t ? Mt(t).length : 0;
}, only: function(t) {
  var e = Mt(t);
  if (e.length !== 1) throw "Children.only";
  return e[0];
}, toArray: Mt }, zl = Z.__e;
Z.__e = function(t, e, r, i) {
  if (t.then) {
    for (var n, o = e; o = o.__; ) if ((n = o.__c) && n.__c) return e.__e == null && (e.__e = r.__e, e.__k = r.__k), n.__c(t, e);
  }
  zl(t, e, r, i);
};
var es = Z.unmount;
function f0(t, e, r) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(i) {
    typeof i.__c == "function" && i.__c();
  }), t.__c.__H = null), (t = a2({}, t)).__c != null && (t.__c.__P === r && (t.__c.__P = e), t.__c.__g |= 4, t.__c = null), t.__k = t.__k && t.__k.map(function(i) {
    return f0(i, e, r);
  })), t;
}
function v0(t, e, r) {
  return t && r && (typeof t.type == "string" && (t.__u |= 1), t.__v = null, t.__k = t.__k && t.__k.map(function(i) {
    return v0(i, e, r);
  }), t.__c && t.__c.__P === e && (t.__e && r.appendChild(t.__e), t.__c.__g |= 4, t.__c.__P = r)), t;
}
function xi() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Dl(t) {
  var e, r, i, n = null;
  function o(s) {
    if (e || (e = t()).then(function(a) {
      a && (n = a.default || a), i = !0;
    }, function(a) {
      r = a, i = !0;
    }), r) throw r;
    if (!i) throw e;
    return n ? wt(n, s) : null;
  }
  return o.displayName = "Lazy", o;
}
function Ul(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function jl(t) {
  var e = this, r = t.i;
  if (e.componentWillUnmount = function() {
    lr(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== r && e.componentWillUnmount(), !e.l) {
    for (var i = e.__v; i !== null && !i.__m && i.__ !== null; ) i = i.__;
    e.i = r, e.l = { nodeType: 1, parentNode: r, childNodes: [], __k: { __m: i.__m }, ownerDocument: r.ownerDocument, namespaceURI: r.namespaceURI, insertBefore: function(n, o) {
      this.childNodes.push(n), e.i.insertBefore(n, o);
    } };
  }
  lr(wt(Ul, { context: e.context }, t.__v), e.l);
}
function l2(t, e) {
  var r = wt(jl, { __v: t, i: e });
  return r.containerInfo = e, r;
}
Z.unmount = function(t) {
  var e = t.__c;
  e && (e.__z = !0), e && e.__R && e.__R(), es && es(t);
}, (xi.prototype = new Ct()).__c = function(t, e) {
  var r = e.__c, i = this;
  i.o == null && (i.o = []), i.o.push(r);
  var n = !1, o = function() {
    n || i.__z || (n = !0, r.__R = null, a());
  };
  r.__R = o;
  var s = r.__P;
  r.__P = null;
  var a = function() {
    if (!--i.__u) {
      if (i.state.__a) {
        var l = i.state.__a;
        i.__v.__k[0] = v0(l, l.__c.__P, l.__c.__O);
      }
      var u;
      for (i.setState({ __a: i.__b = null }); u = i.o.pop(); ) u.__P = s, u.forceUpdate();
    }
  };
  i.__u++ || 32 & e.__u || i.setState({ __a: i.__b = i.__v.__k[0] }), t.then(o, o);
}, xi.prototype.componentWillUnmount = function() {
  this.o = [];
}, xi.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), i = this.__v.__k[0].__c;
      this.__v.__k[0] = f0(this.__b, r, i.__O = i.__P);
    }
    this.__b = null;
  }
  return [wt(ge, null, e.__a ? null : t.children), e.__a && wt(ge, null, t.fallback)];
};
var m0 = /* @__PURE__ */ Symbol.for("react.element"), Zl = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Bl = /[A-Z0-9]/g, ql = typeof document < "u", Wl = function(t) {
  return /fil|che|rad/.test(t);
};
function Gl(t, e, r) {
  return e.__k == null && (e.textContent = ""), lr(t, e), typeof r == "function" && r(), t ? t.__c : null;
}
function Yl(t, e, r) {
  return Pl(t, e), typeof r == "function" && r(), t ? t.__c : null;
}
Ct.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(Ct.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var ts = Z.event;
function Ql() {
}
function Kl() {
  return this.cancelBubble;
}
function Xl() {
  return this.defaultPrevented;
}
Z.event = function(t) {
  return ts && (t = ts(t)), t.persist = Ql, t.isPropagationStopped = Kl, t.isDefaultPrevented = Xl, t.nativeEvent = t;
};
var c2, Jl = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, rs = Z.vnode;
Z.vnode = function(t) {
  if (typeof t.type == "string") (function(i) {
    var n = i.props, o = i.type, s = {}, a = o.indexOf("-") === -1;
    for (var l in n) {
      var u = n[l];
      if (!(l === "value" && "defaultValue" in n && u == null || ql && l === "children" && o === "noscript" || l === "class" || l === "className")) {
        if (l === "style" && typeof u == "object") for (var d in u) typeof u[d] != "number" || Ol.test(d) || (u[d] += "px");
        else if (l === "defaultValue" && "value" in n && n.value == null) l = "value";
        else if (l === "download" && u === !0) u = "";
        else if (l === "translate" && u === "no") u = !1;
        else if (l[0] === "o" && l[1] === "n") {
          var p = l.toLowerCase();
          p === "ondoubleclick" ? l = "ondblclick" : p !== "onchange" || o !== "input" && o !== "textarea" || Wl(n.type) ? p === "onfocus" ? l = "onfocusin" : p === "onblur" && (l = "onfocusout") : p = l = "oninput", p === "oninput" && s[l = p] && (l = "oninputCapture");
        } else a && Zl.test(l) ? l = l.replace(Bl, "-$&").toLowerCase() : u === null && (u = void 0);
        s[l] = u;
      }
    }
    o == "select" && s.multiple && Array.isArray(s.value) && (s.value = Mt(n.children).forEach(function(h) {
      h.props.selected = s.value.indexOf(h.props.value) != -1;
    })), o == "select" && s.defaultValue != null && (s.value = Mt(n.children).forEach(function(h) {
      h.props.selected = s.multiple ? s.defaultValue.indexOf(h.props.value) != -1 : s.defaultValue == h.props.value;
    })), n.class && !n.className ? (s.class = n.class, Object.defineProperty(s, "className", Jl)) : n.className && (s.class = s.className = n.className), i.props = s;
  })(t);
  else if (typeof t.type == "function" && ("ref" in t.props && "prototype" in t.type && t.type.prototype.render && (t.ref = t.props.ref, delete t.props.ref), t.type.defaultProps)) {
    var e = a2({}, t.props);
    for (var r in t.type.defaultProps) e[r] === void 0 && (e[r] = t.type.defaultProps[r]);
    t.props = e;
  }
  t.$$typeof = m0, rs && rs(t);
};
var is = Z.__r;
Z.__r = function(t) {
  is && is(t), c2 = t.__c;
};
var ns = Z.diffed;
Z.diffed = function(t) {
  ns && ns(t);
  var e = t.props, r = t.__e;
  r != null && t.type === "textarea" && "value" in e && e.value !== r.value && (r.value = e.value == null ? "" : e.value), c2 = null;
};
var $l = { ReactCurrentDispatcher: { current: { readContext: function(t) {
  return c2.__n[t.__c].props.value;
}, useCallback: dr, useContext: $e, useDebugValue: a0, useDeferredValue: h0, useEffect: F, useId: l0, useImperativeHandle: s0, useInsertionEffect: g0, useLayoutEffect: br, useMemo: Ve, useReducer: n2, useRef: Ae, useState: le, useSyncExternalStore: u0, useTransition: p0 } } };
function ec(t) {
  return wt.bind(null, t);
}
function rn(t) {
  return !!t && t.$$typeof === m0;
}
function tc(t) {
  return rn(t) && t.type === ge;
}
function rc(t) {
  return !!t && typeof t.displayName == "string" && t.displayName.startsWith("Memo(");
}
function ic(t) {
  return rn(t) ? Ml.apply(null, arguments) : t;
}
function nc(t) {
  return !!t.__k && (lr(null, t), !0);
}
function oc(t) {
  return t && (t.__v && t.__v.__e || t.nodeType === 1 && t) || null;
}
var sc = function(t, e) {
  return t(e);
};
function ac(t, e) {
  return t(e);
}
var lc = ge, cc = rn, Fr = { useState: le, useId: l0, useReducer: n2, useEffect: F, useLayoutEffect: br, useInsertionEffect: g0, useTransition: p0, useDeferredValue: h0, useSyncExternalStore: u0, startTransition: s2, useRef: Ae, useImperativeHandle: s0, useMemo: Ve, useCallback: dr, useContext: $e, useDebugValue: a0, version: "18.3.1", Children: Vl, render: Gl, hydrate: Yl, unmountComponentAtNode: nc, createPortal: l2, createElement: wt, createContext: Wt, createFactory: ec, cloneElement: ic, createRef: xl, Fragment: ge, isValidElement: rn, isElement: cc, isFragment: tc, isMemo: rc, findDOMNode: oc, Component: Ct, PureComponent: co, memo: Hl, forwardRef: Fl, flushSync: sc, unstable_batchedUpdates: ac, StrictMode: lc, Suspense: xi, lazy: Dl, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: $l };
const dc = (t) => t;
function b0(t, e = dc) {
  const r = Fr.useSyncExternalStore(
    t.subscribe,
    Fr.useCallback(() => e(t.getState()), [t, e]),
    Fr.useCallback(() => e(t.getInitialState()), [t, e])
  );
  return Fr.useDebugValue(r), r;
}
const os = (t) => {
  const e = d0(t), r = (i) => b0(e, i);
  return Object.assign(r, e), r;
}, et = ((t) => t ? os(t) : os), ki = et()(() => ({ path: "", version: "" })), d2 = () => (F(() => {
  const t = ki.getState();
  t.path && t.version || ki.setState({
    path: window?.VLibrasWidget?.path ?? "./",
    version: "7.0.0-alpha.0"
  });
}, []), ki());
function C0(t, e) {
  const r = Ae(null);
  return (i) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => t(i), e);
  };
}
const uc = (t) => {
  const [e, r] = le(!1);
  return F(() => {
    function i(o) {
      r(o.matches);
    }
    const n = matchMedia(t);
    return n.addEventListener("change", i), r(n.matches), () => n.removeEventListener("change", i);
  }, [t]), e;
};
function nn(t, e) {
  let r;
  try {
    r = t();
  } catch {
    return;
  }
  return {
    getItem: (n) => {
      var o;
      const s = (l) => l === null ? null : JSON.parse(l, void 0), a = (o = r.getItem(n)) != null ? o : null;
      return a instanceof Promise ? a.then(s) : s(a);
    },
    setItem: (n, o) => r.setItem(n, JSON.stringify(o, void 0)),
    removeItem: (n) => r.removeItem(n)
  };
}
const uo = (t) => (e) => {
  try {
    const r = t(e);
    return r instanceof Promise ? r : {
      then(i) {
        return uo(i)(r);
      },
      catch(i) {
        return this;
      }
    };
  } catch (r) {
    return {
      then(i) {
        return this;
      },
      catch(i) {
        return uo(i)(r);
      }
    };
  }
}, hc = (t, e) => (r, i, n) => {
  let o = {
    storage: nn(() => window.localStorage),
    partialize: (m) => m,
    version: 0,
    merge: (m, w) => ({
      ...w,
      ...m
    }),
    ...e
  }, s = !1, a = 0;
  const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  let d = o.storage;
  if (!d)
    return t(
      (...m) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
        ), r(...m);
      },
      i,
      n
    );
  const p = () => {
    const m = o.partialize({ ...i() });
    return d.setItem(o.name, {
      state: m,
      version: o.version
    });
  }, h = n.setState;
  n.setState = (m, w) => (h(m, w), p());
  const f = t(
    (...m) => (r(...m), p()),
    i,
    n
  );
  n.getInitialState = () => f;
  let v;
  const g = () => {
    var m, w;
    if (!d) return;
    const y = ++a;
    s = !1, l.forEach((_) => {
      var k;
      return _((k = i()) != null ? k : f);
    });
    const x = ((w = o.onRehydrateStorage) == null ? void 0 : w.call(o, (m = i()) != null ? m : f)) || void 0;
    return uo(d.getItem.bind(d))(o.name).then((_) => {
      if (_)
        if (typeof _.version == "number" && _.version !== o.version) {
          if (o.migrate) {
            const k = o.migrate(
              _.state,
              _.version
            );
            return k instanceof Promise ? k.then((A) => [!0, A]) : [!0, k];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, _.state];
      return [!1, void 0];
    }).then((_) => {
      var k;
      if (y !== a)
        return;
      const [A, E] = _;
      if (v = o.merge(
        E,
        (k = i()) != null ? k : f
      ), r(v, !0), A)
        return p();
    }).then(() => {
      y === a && (x?.(v, void 0), v = i(), s = !0, u.forEach((_) => _(v)));
    }).catch((_) => {
      y === a && x?.(void 0, _);
    });
  };
  return n.persist = {
    setOptions: (m) => {
      o = {
        ...o,
        ...m
      }, m.storage && (d = m.storage);
    },
    clearStorage: () => {
      d?.removeItem(o.name);
    },
    getOptions: () => o,
    rehydrate: () => g(),
    hasHydrated: () => s,
    onHydrate: (m) => (l.add(m), () => {
      l.delete(m);
    }),
    onFinishHydration: (m) => (u.add(m), () => {
      u.delete(m);
    })
  }, o.skipHydration || g(), v || f;
}, on = hc;
function yn(t, ...e) {
  const r = { ...t };
  for (const i of e) delete r[i];
  return r;
}
function sn(t, ...e) {
  const r = {};
  for (const i of e) r[i] = t[i];
  return r;
}
const pc = (t) => t.replace(new RegExp("(?<!:)\\/+", "g"), "/"), gc = () => Math.random().toString(36).slice(2, 8), ho = (t, e) => t instanceof Function ? t(e) : t, ss = {
  position: "right",
  text: void 0,
  isOpen: !1,
  isExpanded: !1,
  isLoaded: !1,
  isActive: !1,
  isTranslating: !1,
  isPausedByUser: void 0,
  opacity: 1
}, ce = et()(
  on(
    (t) => ({
      ...ss,
      setLoaded: (e) => t({ isLoaded: e }),
      setExpanded: (e) => t((r) => ({ isExpanded: ho(e, r.isExpanded) })),
      setOpen: (e) => t((r) => ({ isOpen: ho(e, r.isOpen) })),
      reset: () => t(ss)
    }),
    {
      name: "@vlibras-widget",
      partialize: (t) => sn(t, "position", "isActive", "isOpen", "opacity"),
      version: 1
    }
  )
), ze = {
  get: ce.getState,
  set: ce.setState,
  subscribe: ce.subscribe
}, Ee = () => {
  const t = ce((e) => e.isExpanded);
  return uc("(max-width: 640px)") && !t;
}, as = (t) => Symbol.iterator in t, ls = (t) => (
  // HACK: avoid checking entries type
  "entries" in t
), cs = (t, e) => {
  const r = t instanceof Map ? t : new Map(t.entries()), i = e instanceof Map ? e : new Map(e.entries());
  if (r.size !== i.size)
    return !1;
  for (const [n, o] of r)
    if (!i.has(n) || !Object.is(o, i.get(n)))
      return !1;
  return !0;
}, fc = (t, e) => {
  const r = t[Symbol.iterator](), i = e[Symbol.iterator]();
  let n = r.next(), o = i.next();
  for (; !n.done && !o.done; ) {
    if (!Object.is(n.value, o.value))
      return !1;
    n = r.next(), o = i.next();
  }
  return !!n.done && !!o.done;
};
function vc(t, e) {
  return Object.is(t, e) ? !0 : typeof t != "object" || t === null || typeof e != "object" || e === null || Object.getPrototypeOf(t) !== Object.getPrototypeOf(e) ? !1 : as(t) && as(e) ? ls(t) && ls(e) ? cs(t, e) : fc(t, e) : cs(
    { entries: () => Object.entries(t) },
    { entries: () => Object.entries(e) }
  );
}
function mc(t) {
  const e = Fr.useRef(void 0);
  return (r) => {
    const i = t(r);
    return vc(e.current, i) ? e.current : e.current = i;
  };
}
const Je = (...t) => {
  const e = Ve(() => (r) => sn(r, ...t), [JSON.stringify(t)]);
  return mc(e);
}, xn = "@vlibras-theme", bc = (t) => ["light", "dark"].includes(t), u2 = et((t) => ({
  theme: (() => {
    const e = localStorage.getItem(xn) || "";
    return bc(e) ? e : "light";
  })(),
  toggleTheme: () => t((e) => {
    const r = e.theme === "dark" ? "light" : "dark";
    return localStorage.setItem(xn, r), { theme: r, isDark: r === "dark" };
  }),
  setTheme: (e) => {
    localStorage.setItem(xn, e), t({ theme: e });
  }
})), kr = "vlibras-app-root", kn = {}, Li = {}, Cc = () => {
  if (!kn[kr]) {
    let i = document.getElementById(kr);
    i || (i = document.createElement("div"), i.id = kr, document.body.appendChild(i)), kn[kr] = i;
  }
  const t = kn[kr], e = t.shadowRoot || t.attachShadow({ mode: "open" });
  return { root: t, shadowRoot: e, isRootActive: () => t.getAttribute("data-active") === "true" };
}, w0 = (t, e, r) => {
  const i = Li[e];
  if (i) return i;
  const n = document.createElement("style");
  n.id = e, n.innerHTML = t, Li[e] = n, document.head.appendChild(n);
}, wc = (t) => {
  const e = Li[t];
  e && (document.head.removeChild(e), delete Li[t]);
}, _c = async (t, e) => {
  const r = [
    new FontFace("VLibrasWidget_Font", `url(${t}/assets/fonts/rawline/rawline-500.ttf) format('truetype')`, {
      weight: "500"
    }),
    new FontFace("VLibrasWidget_Font", `url(${t}/assets/fonts/rawline/rawline-500i.ttf) format('truetype')`, {
      weight: "500",
      style: "italic"
    }),
    new FontFace("VLibrasWidget_Font", `url(${t}/assets/fonts/rawline/rawline-600.ttf) format('truetype')`, {
      weight: "600"
    }),
    new FontFace("VLibrasWidget_Font", `url(${t}/assets/fonts/rawline/rawline-600i.ttf) format('truetype')`, {
      weight: "600",
      style: "italic"
    }),
    new FontFace("VLibrasWidget_Font", `url(${t}/assets/fonts/rawline/rawline-700.ttf) format('truetype')`, {
      weight: "700"
    }),
    new FontFace("VLibrasWidget_Font", `url(${t}/assets/fonts/rawline/rawline-700i.ttf) format('truetype')`, {
      weight: "700",
      style: "italic"
    })
  ];
  try {
    await yc(r, (i) => {
      e.adoptedStyleSheets = [...e.adoptedStyleSheets, ...i];
    });
  } catch (i) {
    console.error("Error loading default font:", i);
  }
}, yc = async (t, e) => {
  await Promise.all(t.map((r) => r.load())), t.forEach((r) => document.fonts.add(r)), e && e(document.adoptedStyleSheets);
};
function _0(t) {
  var e, r, i = "";
  if (typeof t == "string" || typeof t == "number") i += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var n = t.length;
    for (e = 0; e < n; e++) t[e] && (r = _0(t[e])) && (i && (i += " "), i += r);
  } else for (r in t) t[r] && (i && (i += " "), i += r);
  return i;
}
function y0() {
  for (var t, e, r = 0, i = "", n = arguments.length; r < n; r++) (t = arguments[r]) && (e = _0(t)) && (i && (i += " "), i += e);
  return i;
}
const xc = (t, e) => {
  const r = new Array(t.length + e.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t[i];
  for (let i = 0; i < e.length; i++)
    r[t.length + i] = e[i];
  return r;
}, kc = (t, e) => ({
  classGroupId: t,
  validator: e
}), x0 = (t = /* @__PURE__ */ new Map(), e = null, r) => ({
  nextPart: t,
  validators: e,
  classGroupId: r
}), Ni = "-", ds = [], Ac = "arbitrary..", Ec = (t) => {
  const e = Rc(t), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: i
  } = t;
  return {
    getClassGroupId: (s) => {
      if (s.startsWith("[") && s.endsWith("]"))
        return Sc(s);
      const a = s.split(Ni), l = a[0] === "" && a.length > 1 ? 1 : 0;
      return k0(a, l, e);
    },
    getConflictingClassGroupIds: (s, a) => {
      if (a) {
        const l = i[s], u = r[s];
        return l ? u ? xc(u, l) : l : u || ds;
      }
      return r[s] || ds;
    }
  };
}, k0 = (t, e, r) => {
  if (t.length - e === 0)
    return r.classGroupId;
  const n = t[e], o = r.nextPart.get(n);
  if (o) {
    const u = k0(t, e + 1, o);
    if (u) return u;
  }
  const s = r.validators;
  if (s === null)
    return;
  const a = e === 0 ? t.join(Ni) : t.slice(e).join(Ni), l = s.length;
  for (let u = 0; u < l; u++) {
    const d = s[u];
    if (d.validator(a))
      return d.classGroupId;
  }
}, Sc = (t) => t.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const e = t.slice(1, -1), r = e.indexOf(":"), i = e.slice(0, r);
  return i ? Ac + i : void 0;
})(), Rc = (t) => {
  const {
    theme: e,
    classGroups: r
  } = t;
  return Pc(r, e);
}, Pc = (t, e) => {
  const r = x0();
  for (const i in t) {
    const n = t[i];
    h2(n, r, i, e);
  }
  return r;
}, h2 = (t, e, r, i) => {
  const n = t.length;
  for (let o = 0; o < n; o++) {
    const s = t[o];
    Mc(s, e, r, i);
  }
}, Mc = (t, e, r, i) => {
  if (typeof t == "string") {
    Ic(t, e, r);
    return;
  }
  if (typeof t == "function") {
    Lc(t, e, r, i);
    return;
  }
  Nc(t, e, r, i);
}, Ic = (t, e, r) => {
  const i = t === "" ? e : A0(e, t);
  i.classGroupId = r;
}, Lc = (t, e, r, i) => {
  if (Oc(t)) {
    h2(t(i), e, r, i);
    return;
  }
  e.validators === null && (e.validators = []), e.validators.push(kc(r, t));
}, Nc = (t, e, r, i) => {
  const n = Object.entries(t), o = n.length;
  for (let s = 0; s < o; s++) {
    const [a, l] = n[s];
    h2(l, A0(e, a), r, i);
  }
}, A0 = (t, e) => {
  let r = t;
  const i = e.split(Ni), n = i.length;
  for (let o = 0; o < n; o++) {
    const s = i[o];
    let a = r.nextPart.get(s);
    a || (a = x0(), r.nextPart.set(s, a)), r = a;
  }
  return r;
}, Oc = (t) => "isThemeGetter" in t && t.isThemeGetter === !0, Hc = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, r = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  const n = (o, s) => {
    r[o] = s, e++, e > t && (e = 0, i = r, r = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(o) {
      let s = r[o];
      if (s !== void 0)
        return s;
      if ((s = i[o]) !== void 0)
        return n(o, s), s;
    },
    set(o, s) {
      o in r ? r[o] = s : n(o, s);
    }
  };
}, po = "!", us = ":", Tc = [], hs = (t, e, r, i, n) => ({
  modifiers: t,
  hasImportantModifier: e,
  baseClassName: r,
  maybePostfixModifierPosition: i,
  isExternal: n
}), Fc = (t) => {
  const {
    prefix: e,
    experimentalParseClassName: r
  } = t;
  let i = (n) => {
    const o = [];
    let s = 0, a = 0, l = 0, u;
    const d = n.length;
    for (let g = 0; g < d; g++) {
      const m = n[g];
      if (s === 0 && a === 0) {
        if (m === us) {
          o.push(n.slice(l, g)), l = g + 1;
          continue;
        }
        if (m === "/") {
          u = g;
          continue;
        }
      }
      m === "[" ? s++ : m === "]" ? s-- : m === "(" ? a++ : m === ")" && a--;
    }
    const p = o.length === 0 ? n : n.slice(l);
    let h = p, f = !1;
    p.endsWith(po) ? (h = p.slice(0, -1), f = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      p.startsWith(po) && (h = p.slice(1), f = !0)
    );
    const v = u && u > l ? u - l : void 0;
    return hs(o, f, h, v);
  };
  if (e) {
    const n = e + us, o = i;
    i = (s) => s.startsWith(n) ? o(s.slice(n.length)) : hs(Tc, !1, s, void 0, !0);
  }
  if (r) {
    const n = i;
    i = (o) => r({
      className: o,
      parseClassName: n
    });
  }
  return i;
}, Vc = (t) => {
  const e = /* @__PURE__ */ new Map();
  return t.orderSensitiveModifiers.forEach((r, i) => {
    e.set(r, 1e6 + i);
  }), (r) => {
    const i = [];
    let n = [];
    for (let o = 0; o < r.length; o++) {
      const s = r[o], a = s[0] === "[", l = e.has(s);
      a || l ? (n.length > 0 && (n.sort(), i.push(...n), n = []), i.push(s)) : n.push(s);
    }
    return n.length > 0 && (n.sort(), i.push(...n)), i;
  };
}, zc = (t) => ({
  cache: Hc(t.cacheSize),
  parseClassName: Fc(t),
  sortModifiers: Vc(t),
  ...Ec(t)
}), Dc = /\s+/, Uc = (t, e) => {
  const {
    parseClassName: r,
    getClassGroupId: i,
    getConflictingClassGroupIds: n,
    sortModifiers: o
  } = e, s = [], a = t.trim().split(Dc);
  let l = "";
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const d = a[u], {
      isExternal: p,
      modifiers: h,
      hasImportantModifier: f,
      baseClassName: v,
      maybePostfixModifierPosition: g
    } = r(d);
    if (p) {
      l = d + (l.length > 0 ? " " + l : l);
      continue;
    }
    let m = !!g, w = i(m ? v.substring(0, g) : v);
    if (!w) {
      if (!m) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (w = i(v), !w) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      m = !1;
    }
    const y = h.length === 0 ? "" : h.length === 1 ? h[0] : o(h).join(":"), x = f ? y + po : y, _ = x + w;
    if (s.indexOf(_) > -1)
      continue;
    s.push(_);
    const k = n(w, m);
    for (let A = 0; A < k.length; ++A) {
      const E = k[A];
      s.push(x + E);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
}, jc = (...t) => {
  let e = 0, r, i, n = "";
  for (; e < t.length; )
    (r = t[e++]) && (i = E0(r)) && (n && (n += " "), n += i);
  return n;
}, E0 = (t) => {
  if (typeof t == "string")
    return t;
  let e, r = "";
  for (let i = 0; i < t.length; i++)
    t[i] && (e = E0(t[i])) && (r && (r += " "), r += e);
  return r;
}, Zc = (t, ...e) => {
  let r, i, n, o;
  const s = (l) => {
    const u = e.reduce((d, p) => p(d), t());
    return r = zc(u), i = r.cache.get, n = r.cache.set, o = a, a(l);
  }, a = (l) => {
    const u = i(l);
    if (u)
      return u;
    const d = Uc(l, r);
    return n(l, d), d;
  };
  return o = s, (...l) => o(jc(...l));
}, Bc = [], me = (t) => {
  const e = (r) => r[t] || Bc;
  return e.isThemeGetter = !0, e;
}, S0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, R0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i, qc = /^\d+\/\d+$/, Wc = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Gc = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Yc = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Qc = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Kc = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Gt = (t) => qc.test(t), j = (t) => !!t && !Number.isNaN(Number(t)), kt = (t) => !!t && Number.isInteger(Number(t)), An = (t) => t.endsWith("%") && j(t.slice(0, -1)), dt = (t) => Wc.test(t), Xc = () => !0, Jc = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Gc.test(t) && !Yc.test(t)
), P0 = () => !1, $c = (t) => Qc.test(t), e3 = (t) => Kc.test(t), t3 = (t) => !N(t) && !O(t), r3 = (t) => Cr(t, L0, P0), N = (t) => S0.test(t), Ot = (t) => Cr(t, N0, Jc), En = (t) => Cr(t, a3, j), ps = (t) => Cr(t, M0, P0), i3 = (t) => Cr(t, I0, e3), ci = (t) => Cr(t, O0, $c), O = (t) => R0.test(t), Ar = (t) => wr(t, N0), n3 = (t) => wr(t, l3), gs = (t) => wr(t, M0), o3 = (t) => wr(t, L0), s3 = (t) => wr(t, I0), di = (t) => wr(t, O0, !0), Cr = (t, e, r) => {
  const i = S0.exec(t);
  return i ? i[1] ? e(i[1]) : r(i[2]) : !1;
}, wr = (t, e, r = !1) => {
  const i = R0.exec(t);
  return i ? i[1] ? e(i[1]) : r : !1;
}, M0 = (t) => t === "position" || t === "percentage", I0 = (t) => t === "image" || t === "url", L0 = (t) => t === "length" || t === "size" || t === "bg-size", N0 = (t) => t === "length", a3 = (t) => t === "number", l3 = (t) => t === "family-name", O0 = (t) => t === "shadow", c3 = () => {
  const t = me("color"), e = me("font"), r = me("text"), i = me("font-weight"), n = me("tracking"), o = me("leading"), s = me("breakpoint"), a = me("container"), l = me("spacing"), u = me("radius"), d = me("shadow"), p = me("inset-shadow"), h = me("text-shadow"), f = me("drop-shadow"), v = me("blur"), g = me("perspective"), m = me("aspect"), w = me("ease"), y = me("animate"), x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _ = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], k = () => [..._(), O, N], A = () => ["auto", "hidden", "clip", "visible", "scroll"], E = () => ["auto", "contain", "none"], b = () => [O, N, l], S = () => [Gt, "full", "auto", ...b()], D = () => [kt, "none", "subgrid", O, N], V = () => ["auto", {
    span: ["full", kt, O, N]
  }, kt, O, N], H = () => [kt, "auto", O, N], U = () => ["auto", "min", "max", "fr", O, N], z = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], G = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], J = () => ["auto", ...b()], ue = () => [Gt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...b()], L = () => [t, O, N], _e = () => [..._(), gs, ps, {
    position: [O, N]
  }], Me = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Ie = () => ["auto", "cover", "contain", o3, r3, {
    size: [O, N]
  }], De = () => [An, Ar, Ot], K = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    O,
    N
  ], ee = () => ["", j, Ar, Ot], Se = () => ["solid", "dashed", "dotted", "double"], lt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], oe = () => [j, An, gs, ps], He = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    O,
    N
  ], Be = () => ["none", j, O, N], ct = () => ["none", j, O, N], xr = () => [j, O, N], Ue = () => [Gt, "full", ...b()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [dt],
      breakpoint: [dt],
      color: [Xc],
      container: [dt],
      "drop-shadow": [dt],
      ease: ["in", "out", "in-out"],
      font: [t3],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [dt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [dt],
      shadow: [dt],
      spacing: ["px", j],
      text: [dt],
      "text-shadow": [dt],
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
        aspect: ["auto", "square", Gt, N, O, m]
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
        columns: [j, N, O, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": x()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": x()
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
        object: k()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: A()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": A()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": A()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: E()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": E()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": E()
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
        inset: S()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": S()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": S()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: S()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: S()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: S()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: S()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: S()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: S()
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
        z: [kt, "auto", O, N]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Gt, "full", "auto", a, ...b()]
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
        flex: [j, Gt, "auto", "initial", "none", N]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", j, O, N]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", j, O, N]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [kt, "first", "last", "none", O, N]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": D()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: V()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": H()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": H()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": D()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: V()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": H()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": H()
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
        "auto-cols": U()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": U()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: b()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": b()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": b()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...z(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...G(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...G()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...z()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...G(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...G(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": z()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...G(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...G()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: b()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: b()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: b()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: b()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: b()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: b()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: b()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: b()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: b()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: J()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: J()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: J()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: J()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: J()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: J()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: J()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: J()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: J()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": b()
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
        "space-y": b()
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
        size: ue()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...ue()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          a,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...ue()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          a,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [s]
          },
          ...ue()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...ue()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...ue()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...ue()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Ar, Ot]
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
        font: [i, O, En]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", An, N]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [n3, N, e]
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
        tracking: [n, O, N]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [j, "none", O, En]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...b()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", O, N]
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
        list: ["disc", "decimal", "none", O, N]
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
        placeholder: L()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: L()
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
        decoration: [...Se(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [j, "from-font", "auto", O, Ot]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: L()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [j, "auto", O, N]
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
        indent: b()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", O, N]
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
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
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
        content: ["none", O, N]
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
        bg: _e()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Me()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Ie()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, kt, O, N],
          radial: ["", O, N],
          conic: [kt, O, N]
        }, s3, i3]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: L()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: De()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: De()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: De()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: L()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: L()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: L()
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
        border: ee()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": ee()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": ee()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": ee()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": ee()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": ee()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": ee()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": ee()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": ee()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": ee()
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
        "divide-y": ee()
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
        border: [...Se(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Se(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: L()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": L()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": L()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": L()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": L()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": L()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": L()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": L()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": L()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: L()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Se(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [j, O, N]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", j, Ar, Ot]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: L()
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
          d,
          di,
          ci
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: L()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", p, di, ci]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": L()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: ee()
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
        ring: L()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [j, Ot]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": L()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": ee()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": L()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, di, ci]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": L()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [j, O, N]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...lt(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": lt()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [j]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": oe()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": oe()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": L()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": L()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": oe()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": oe()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": L()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": L()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": oe()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": oe()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": L()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": L()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": oe()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": oe()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": L()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": L()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": oe()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": oe()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": L()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": L()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": oe()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": oe()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": L()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": L()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": oe()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": oe()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": L()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": L()
      }],
      "mask-image-radial": [{
        "mask-radial": [O, N]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": oe()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": oe()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": L()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": L()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": _()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [j]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": oe()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": oe()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": L()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": L()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: _e()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Me()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Ie()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", O, N]
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
          O,
          N
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: He()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [j, O, N]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [j, O, N]
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
          f,
          di,
          ci
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": L()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", j, O, N]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [j, O, N]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", j, O, N]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [j, O, N]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", j, O, N]
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
          O,
          N
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": He()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [j, O, N]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [j, O, N]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", j, O, N]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [j, O, N]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", j, O, N]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [j, O, N]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [j, O, N]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", j, O, N]
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
        "border-spacing": b()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": b()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": b()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", O, N]
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
        duration: [j, "initial", O, N]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, O, N]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [j, O, N]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, O, N]
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
        perspective: [g, O, N]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": k()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Be()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Be()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Be()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Be()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ct()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ct()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ct()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ct()
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
        skew: xr()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": xr()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": xr()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [O, N, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: k()
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
        translate: Ue()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Ue()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Ue()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Ue()
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
        accent: L()
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
        caret: L()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", O, N]
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
        "scroll-m": b()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": b()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": b()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": b()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": b()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": b()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": b()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": b()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": b()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": b()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": b()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": b()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": b()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": b()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": b()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": b()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": b()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": b()
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
        "will-change": ["auto", "scroll", "contents", "transform", O, N]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...L()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [j, Ar, Ot, En]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...L()]
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
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
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
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, d3 = /* @__PURE__ */ Zc(c3);
function B(...t) {
  return d3(y0(t));
}
const u3 = () => /* @__PURE__ */ c("div", { className: "absolute bottom-15 left-1/2 grid -translate-x-1/2 animate-move-up place-content-center rounded-full border bg-background p-0.5 pr-2", children: /* @__PURE__ */ c("span", { className: "flex items-center gap-1 font-semibold text-xs", children: [
  /* @__PURE__ */ c("span", { className: "loading loading-spinner loading-xs" }),
  "Traduzindo..."
] }) }), qe = {
  PLAYER: "PlayerManager",
  EMOTION: "EmotionBridge",
  CUSTOMIZATION: "CustomizationBridge"
}, be = {
  PLAY_WELCOME: "playWellcome",
  PLAY: "playNow",
  STOP: "stopAll",
  SET_SPEED: "setSlider",
  SET_AVATAR: "Change",
  SET_PAUSE_STATE: "setPauseState",
  SET_BASE_URL: "setBaseUrl",
  SET_PERSONALIZATION: "setURL",
  SET_SUBTITLES_STATE: "setSubtitlesState",
  APPLY_DEFAULT_EMOTION: "ApplyDefaultEmotion",
  APPLY_HAPPY_EMOTION: "ApplyHappyEmotion",
  APPLY_SAD_EMOTION: "ApplySadEmotion",
  APPLY_DOUBT_EMOTION: "ApplyDoubtEmotion",
  APPLY_ANGRY_EMOTION: "ApplyAngryEmotion",
  APPLY_DISGUST_EMOTION: "ApplyDisgustEmotion",
  APPLY_FEAR_EMOTION: "ApplyFearEmotion",
  APPLY_SURPRISE_EMOTION: "ApplySurpriseEmotion"
}, Er = {
  ON_LOAD_PLAYER: "on_load_player",
  ON_PLAYING_STATE_CHANGE: "on_playing_state_change",
  COUNTER_GLOSS: "counter_gloss",
  UPDATE_PROGRESS: "update_progress",
  FINISH_WELCOME: "finish_welcome"
}, h3 = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M2 12C2 9.34783 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34783 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34783 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C9.34783 22 6.8043 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12ZM15.2305 17.4648C15.4883 17.2344 15.5078 16.8398 15.2773 16.582C14.6484 15.8828 13.5508 15.125 12 15.125C10.4492 15.125 9.35156 15.8828 8.72266 16.582C8.49219 16.8398 8.51172 17.2344 8.76953 17.4648C9.02734 17.6953 9.42187 17.6758 9.65234 17.418C10.1094 16.9102 10.8867 16.375 12 16.375C13.1133 16.375 13.8906 16.9102 14.3477 17.418C14.5781 17.6758 14.9727 17.6953 15.2305 17.4648ZM8.89062 12.625C9.58203 12.625 10.1406 12.0664 10.1406 11.375C10.1406 11.3164 10.1367 11.2578 10.1289 11.2031L10.5547 11.3437C10.8828 11.4531 11.2344 11.2773 11.3437 10.9492C11.4531 10.6211 11.2773 10.2695 10.9492 10.1602L7.19922 8.91016C6.87109 8.80078 6.51953 8.97656 6.41016 9.30469C6.30078 9.63281 6.47656 9.98437 6.80469 10.0937L8.00391 10.4922C7.77734 10.7187 7.64062 11.0312 7.64062 11.375C7.64062 12.0664 8.19922 12.625 8.89062 12.625ZM16.3906 11.375C16.3906 11.0273 16.25 10.7109 16.0195 10.4844L17.1992 10.0898C17.5273 9.98047 17.7031 9.625 17.5938 9.30078C17.4844 8.97656 17.1289 8.79688 16.8047 8.90625L13.0547 10.1563C12.7266 10.2656 12.5508 10.6211 12.6602 10.9453C12.7695 11.2695 13.125 11.4492 13.4492 11.3398L13.9062 11.1875C13.8984 11.2461 13.8945 11.3086 13.8945 11.3711C13.8945 12.0625 14.4531 12.6211 15.1445 12.6211C15.8359 12.6211 16.3945 12.0625 16.3945 11.3711L16.3906 11.375Z" })
    ]
  }
), p3 = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2C9.34784 2 6.8043 3.05357 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.8043 20.9464 9.34784 22 12 22ZM8.41016 14.7148C9.10938 15.5234 10.3047 16.375 12 16.375C13.6953 16.375 14.8906 15.5234 15.5898 14.7148C15.8164 14.4531 16.2109 14.4258 16.4727 14.6523C16.7344 14.8789 16.7617 15.2734 16.5352 15.5352C15.6641 16.5352 14.1523 17.625 12 17.625C9.84766 17.625 8.33594 16.5352 7.46484 15.5352C7.23828 15.2734 7.26562 14.8789 7.52734 14.6523C7.78906 14.4258 8.18359 14.4531 8.41016 14.7148ZM7.64062 10.125C7.64062 9.79348 7.77232 9.47554 8.00674 9.24112C8.24116 9.0067 8.5591 8.875 8.89062 8.875C9.22215 8.875 9.54009 9.0067 9.77451 9.24112C10.0089 9.47554 10.1406 9.79348 10.1406 10.125C10.1406 10.4565 10.0089 10.7745 9.77451 11.0089C9.54009 11.2433 9.22215 11.375 8.89062 11.375C8.5591 11.375 8.24116 11.2433 8.00674 11.0089C7.77232 10.7745 7.64062 10.4565 7.64062 10.125ZM15.1406 8.875C15.4721 8.875 15.7901 9.0067 16.0245 9.24112C16.2589 9.47554 16.3906 9.79348 16.3906 10.125C16.3906 10.4565 16.2589 10.7745 16.0245 11.0089C15.7901 11.2433 15.4721 11.375 15.1406 11.375C14.8091 11.375 14.4912 11.2433 14.2567 11.0089C14.0223 10.7745 13.8906 10.4565 13.8906 10.125C13.8906 9.79348 14.0223 9.47554 14.2567 9.24112C14.4912 9.0067 14.8091 8.875 15.1406 8.875Z" })
    ]
  }
), g3 = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 2C14.6522 2 17.1959 3.05335 19.0713 4.92871C20.9467 6.80407 22 9.34784 22 12C22 14.6522 20.9467 17.1959 19.0713 19.0713C17.1959 20.9467 14.6522 22 12 22C9.34784 22 6.80407 20.9467 4.92871 19.0713C3.05335 17.1959 2 14.6522 2 12C2 9.34784 3.05335 6.80407 4.92871 4.92871C6.80407 3.05335 9.34784 2 12 2ZM12 14C10.4493 14 9.35157 14.7578 8.72266 15.457C8.49219 15.7148 8.51172 16.1094 8.76953 16.3398C9.02735 16.5702 9.4219 16.5508 9.65234 16.293C10.1094 15.7852 10.8868 15.25 12 15.25C13.1132 15.25 13.8906 15.7852 14.3477 16.293C14.5781 16.5507 14.9727 16.5703 15.2305 16.3398C15.4882 16.1094 15.5077 15.7148 15.2773 15.457C14.6485 14.7578 13.5507 14 12 14ZM10.8477 7.9541C10.7227 7.91113 10.582 7.9541 10.5 8.06348L10.4922 8.07129C10.4882 8.0791 10.4765 8.09091 10.4648 8.10645C10.4414 8.1377 10.4023 8.18463 10.3555 8.23926C10.2578 8.34862 10.121 8.49711 9.95703 8.6416C9.6133 8.94625 9.22263 9.18848 8.875 9.18848C8.52737 9.18848 8.1367 8.94625 7.79297 8.6416C7.62895 8.49711 7.49218 8.34862 7.39453 8.23926C7.34771 8.18463 7.3086 8.1377 7.28516 8.10645C7.27348 8.09088 7.2656 8.0791 7.25781 8.07129L7.25 8.06348C7.17188 7.9541 7.03125 7.91113 6.90234 7.9541C6.77347 7.99709 6.6875 8.11818 6.6875 8.25098C6.68754 8.95014 6.94925 9.64164 7.33594 10.1572C7.71875 10.665 8.26957 11.0635 8.875 11.0635C9.48043 11.0635 10.0313 10.665 10.4141 10.1572C10.8008 9.64164 11.0625 8.95014 11.0625 8.25098C11.0625 8.11428 10.9726 7.99708 10.8477 7.9541ZM17.0977 7.9541C16.9727 7.91113 16.832 7.9541 16.75 8.06348L16.7422 8.07129C16.7382 8.0791 16.7265 8.09091 16.7148 8.10645C16.6914 8.1377 16.6523 8.18463 16.6055 8.23926C16.5078 8.34862 16.371 8.49711 16.207 8.6416C15.8633 8.94625 15.4726 9.18848 15.125 9.18848C14.7774 9.18848 14.3867 8.94625 14.043 8.6416C13.879 8.49711 13.7422 8.34862 13.6445 8.23926C13.5977 8.18463 13.5586 8.1377 13.5352 8.10645C13.5235 8.09088 13.5156 8.0791 13.5078 8.07129L13.5 8.06348C13.4219 7.9541 13.2812 7.91113 13.1523 7.9541C13.0235 7.99709 12.9375 8.11818 12.9375 8.25098C12.9375 8.95014 13.1992 9.64164 13.5859 10.1572C13.9687 10.665 14.5196 11.0635 15.125 11.0635C15.7304 11.0635 16.2813 10.665 16.6641 10.1572C17.0508 9.64164 17.3125 8.95014 17.3125 8.25098C17.3125 8.11428 17.2226 7.99708 17.0977 7.9541Z"
        }
      )
    ]
  }
), f3 = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M21.0597 8.72812C20.8767 8.90938 20.6527 9 20.3877 9C20.1226 9 19.8986 8.90938 19.7156 8.72812C19.5326 8.54688 19.4412 8.325 19.4412 8.0625C19.4412 7.8 19.5326 7.57812 19.7156 7.39688C19.8986 7.21563 20.1226 7.125 20.3877 7.125C20.6527 7.125 20.8767 7.21563 21.0597 7.39688C21.2427 7.57812 21.3342 7.8 21.3342 8.0625C21.3342 8.325 21.2427 8.54688 21.0597 8.72812Z" }),
      /* @__PURE__ */ c("path", { d: "M21.249 1.575C21.0029 1.375 20.7158 1.275 20.3877 1.275C20.1731 1.275 19.9743 1.32188 19.7914 1.41563C19.6084 1.50938 19.4475 1.64375 19.3086 1.81875C19.2077 1.95625 19.072 2.05625 18.9016 2.11875C18.7313 2.18125 18.5641 2.18125 18.4 2.11875C18.2359 2.05625 18.1192 1.94688 18.0498 1.79063C17.9804 1.63438 17.9835 1.48125 18.0593 1.33125C18.2738 0.90625 18.5861 0.578125 18.9963 0.346875C19.4064 0.115625 19.8702 0 20.3877 0C21.1449 0 21.7695 0.2125 22.2617 0.6375C22.7539 1.0625 23 1.6125 23 2.2875C23 2.6625 22.9274 2.98438 22.7823 3.25313C22.6372 3.52188 22.3438 3.875 21.9021 4.3125C21.6623 4.55 21.4793 4.75 21.3531 4.9125C21.2269 5.075 21.1512 5.2625 21.1259 5.475C21.1007 5.6625 21.0155 5.81875 20.8704 5.94375C20.7252 6.06875 20.5643 6.13125 20.3877 6.13125C20.1984 6.13125 20.0343 6.06563 19.8955 5.93438C19.7567 5.80313 19.6936 5.65 19.7062 5.475C19.7314 5.1125 19.8292 4.80312 19.9996 4.54688C20.17 4.29063 20.4192 4.01875 20.7473 3.73125C20.9619 3.54375 21.1606 3.3375 21.3436 3.1125C21.5266 2.8875 21.6181 2.63125 21.6181 2.34375C21.6181 2.03125 21.4951 1.775 21.249 1.575Z" }),
      /* @__PURE__ */ c(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 2C13.3833 2 14.6837 2.26211 15.9004 2.78711C16.8384 3.1919 17.6809 3.71018 18.4307 4.33789C18.3039 4.6708 18.2346 5.01829 18.21 5.36719C18.1787 5.80043 18.2831 6.19629 18.4775 6.5332C18.1239 6.96906 17.9414 7.49855 17.9414 8.0625C17.9414 8.71668 18.1867 9.32498 18.6602 9.79395C19.133 10.2622 19.7402 10.5 20.3877 10.5C20.905 10.5 21.3946 10.3457 21.8125 10.0459C21.9361 10.6778 22 11.3289 22 12C22 13.3833 21.7379 14.6837 21.2129 15.9004C20.6879 17.117 19.9751 18.1752 19.0752 19.0752C18.1752 19.9751 17.117 20.6879 15.9004 21.2129C14.6837 21.7379 13.3833 22 12 22C10.6167 22 9.31628 21.7379 8.09961 21.2129C6.88302 20.6879 5.82476 19.9751 4.9248 19.0752C4.02485 18.1752 3.3121 17.117 2.78711 15.9004C2.26211 14.6837 2 13.3833 2 12C2 10.6167 2.26211 9.31628 2.78711 8.09961C3.3121 6.88302 4.02485 5.82476 4.9248 4.9248C5.82476 4.02485 6.88302 3.3121 8.09961 2.78711C9.31628 2.26211 10.6167 2 12 2ZM9.75 14C9.53333 14 9.35456 14.0712 9.21289 14.2129C9.07122 14.3546 9 14.5333 9 14.75C9 14.9667 9.07122 15.1454 9.21289 15.2871C9.35456 15.4288 9.53333 15.5 9.75 15.5H14.25C14.4667 15.5 14.6454 15.4288 14.7871 15.2871C14.9288 15.1454 15 14.9667 15 14.75C15 14.5333 14.9288 14.3546 14.7871 14.2129C14.6454 14.0712 14.4667 14 14.25 14H9.75ZM8.5 8C8.08333 8 7.72917 8.14583 7.4375 8.4375C7.14583 8.72917 7 9.08333 7 9.5C7 9.91667 7.14583 10.2708 7.4375 10.5625C7.72917 10.8542 8.08333 11 8.5 11C8.91667 11 9.27083 10.8542 9.5625 10.5625C9.85417 10.2708 10 9.91667 10 9.5C10 9.08333 9.85417 8.72917 9.5625 8.4375C9.27083 8.14583 8.91667 8 8.5 8ZM15.5 8C15.0833 8 14.7292 8.14583 14.4375 8.4375C14.1458 8.72917 14 9.08333 14 9.5C14 9.91667 14.1458 10.2708 14.4375 10.5625C14.7292 10.8542 15.0833 11 15.5 11C15.9167 11 16.2708 10.8542 16.5625 10.5625C16.8542 10.2708 17 9.91667 17 9.5C17 9.08333 16.8542 8.72917 16.5625 8.4375C16.2708 8.14583 15.9167 8 15.5 8Z"
        }
      )
    ]
  }
), v3 = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34783 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2C9.34783 2 6.8043 3.05357 4.92893 4.92893C3.05357 6.8043 2 9.34783 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.8043 20.9464 9.34783 22 12 22ZM15.75 17.625H15.4375V16.0625H17.5977C17.4492 16.9492 16.6758 17.625 15.75 17.625ZM17.5977 15.4375H15.4375V13.875H15.75C16.6797 13.875 17.4492 14.5508 17.5977 15.4375ZM14.8125 15.4375H12.3125V13.875H14.8125V15.4375ZM14.8125 17.625H12.3125V16.0625H14.8125V17.625ZM11.6875 13.875V15.4375H9.1875V13.875H11.6875ZM11.6875 16.0625V17.625H9.1875V16.0625H11.6875ZM8.5625 15.4375H6.40234C6.55078 14.5508 7.32422 13.875 8.25 13.875H8.5625V15.4375ZM8.5625 17.625H8.25C7.32031 17.625 6.55078 16.9492 6.40234 16.0625H8.5625V17.625ZM7.64062 10.125C7.64062 9.79348 7.77232 9.47554 8.00674 9.24112C8.24116 9.0067 8.5591 8.875 8.89062 8.875C9.22214 8.875 9.54009 9.0067 9.77451 9.24112C10.0089 9.47554 10.1406 9.79348 10.1406 10.125C10.1406 10.4565 10.0089 10.7745 9.77451 11.0089C9.54009 11.2433 9.22214 11.375 8.89062 11.375C8.5591 11.375 8.24116 11.2433 8.00674 11.0089C7.77232 10.7745 7.64062 10.4565 7.64062 10.125ZM15.1406 8.875C15.4721 8.875 15.7901 9.0067 16.0245 9.24112C16.2589 9.47554 16.3906 9.79348 16.3906 10.125C16.3906 10.4565 16.2589 10.7745 16.0245 11.0089C15.7901 11.2433 15.4721 11.375 15.1406 11.375C14.8091 11.375 14.4912 11.2433 14.2567 11.0089C14.0223 10.7745 13.8906 10.4565 13.8906 10.125C13.8906 9.79348 14.0223 9.47554 14.2567 9.24112C14.4912 9.0067 14.8091 8.875 15.1406 8.875Z" })
    ]
  }
), m3 = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2C9.34784 2 6.8043 3.05357 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.8043 20.9464 9.34784 22 12 22ZM17.1602 14.2188C17.6406 14.0703 18.1094 14.4883 17.9141 14.9492C16.9375 17.2578 14.6641 18.875 12.0117 18.875C9.35938 18.875 7.08203 17.2578 6.10938 14.9492C5.91406 14.4883 6.38281 14.0703 6.86328 14.2188C8.41406 14.6953 10.1641 14.9609 12.0117 14.9609C13.8594 14.9609 15.6094 14.6953 17.1602 14.2188ZM10.5 10.9375L10.4922 10.9297C10.4844 10.9219 10.4766 10.9102 10.4648 10.8945C10.4414 10.8633 10.4023 10.8164 10.3555 10.7617C10.2578 10.6523 10.1211 10.5039 9.95703 10.3594C9.61328 10.0547 9.22266 9.8125 8.875 9.8125C8.52734 9.8125 8.13672 10.0547 7.79297 10.3594C7.62891 10.5039 7.49219 10.6523 7.39453 10.7617C7.34766 10.8164 7.30859 10.8633 7.28516 10.8945C7.27344 10.9102 7.26172 10.9219 7.25781 10.9297L7.25 10.9375C7.16797 11.0469 7.02734 11.0898 6.90234 11.0469C6.77734 11.0039 6.6875 10.8867 6.6875 10.75C6.6875 10.0508 6.94922 9.35938 7.33594 8.84375C7.71875 8.33594 8.26953 7.9375 8.875 7.9375C9.48047 7.9375 10.0312 8.33594 10.4141 8.84375C10.8008 9.35938 11.0625 10.0508 11.0625 10.75C11.0625 10.8828 10.9766 11.0039 10.8477 11.0469C10.7188 11.0898 10.5781 11.0469 10.5 10.9375ZM16.75 10.9375L16.7422 10.9297C16.7344 10.9219 16.7266 10.9102 16.7148 10.8945C16.6914 10.8633 16.6523 10.8164 16.6055 10.7617C16.5078 10.6523 16.3711 10.5039 16.207 10.3594C15.8633 10.0547 15.4727 9.8125 15.125 9.8125C14.7773 9.8125 14.3867 10.0547 14.043 10.3594C13.8789 10.5039 13.7422 10.6523 13.6445 10.7617C13.5977 10.8164 13.5586 10.8633 13.5352 10.8945C13.5234 10.9102 13.5117 10.9219 13.5078 10.9297L13.5 10.9375C13.418 11.0469 13.2773 11.0898 13.1523 11.0469C13.0273 11.0039 12.9375 10.8867 12.9375 10.75C12.9375 10.0508 13.1992 9.35938 13.5859 8.84375C13.9688 8.33594 14.5195 7.9375 15.125 7.9375C15.7305 7.9375 16.2812 8.33594 16.6641 8.84375C17.0508 9.35938 17.3125 10.0508 17.3125 10.75C17.3125 10.8828 17.2266 11.0039 17.0977 11.0469C16.9688 11.0898 16.8281 11.0469 16.75 10.9375Z" })
    ]
  }
), b3 = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M12 13.5C11.1 13.5 10.2542 13.6958 9.4625 14.0875C8.67083 14.4792 8.03333 15.05 7.55 15.8C7.36667 16.0667 7.34167 16.3333 7.475 16.6C7.60833 16.8667 7.825 17 8.125 17C8.25833 17 8.37917 16.9708 8.4875 16.9125C8.59583 16.8542 8.69167 16.7667 8.775 16.65C9.15833 16.1333 9.63333 15.7292 10.2 15.4375C10.7667 15.1458 11.3667 15 12 15C12.6333 15 13.2333 15.1458 13.8 15.4375C14.3667 15.7292 14.8417 16.1333 15.225 16.65C15.2917 16.7667 15.3792 16.8542 15.4875 16.9125C15.5958 16.9708 15.7167 17 15.85 17C16.15 17 16.3667 16.8625 16.5 16.5875C16.6333 16.3125 16.6083 16.0333 16.425 15.75C15.9417 15.0167 15.3042 14.4583 14.5125 14.075C13.7208 13.6917 12.8833 13.5 12 13.5ZM15.5 11C15.9167 11 16.2708 10.8542 16.5625 10.5625C16.8542 10.2708 17 9.91667 17 9.5C17 9.08333 16.8542 8.72917 16.5625 8.4375C16.2708 8.14583 15.9167 8 15.5 8C15.0833 8 14.7292 8.14583 14.4375 8.4375C14.1458 8.72917 14 9.08333 14 9.5C14 9.91667 14.1458 10.2708 14.4375 10.5625C14.7292 10.8542 15.0833 11 15.5 11ZM8.5 11C8.91667 11 9.27083 10.8542 9.5625 10.5625C9.85417 10.2708 10 9.91667 10 9.5C10 9.08333 9.85417 8.72917 9.5625 8.4375C9.27083 8.14583 8.91667 8 8.5 8C8.08333 8 7.72917 8.14583 7.4375 8.4375C7.14583 8.72917 7 9.08333 7 9.5C7 9.91667 7.14583 10.2708 7.4375 10.5625C7.72917 10.8542 8.08333 11 8.5 11ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z" })
    ]
  }
), C3 = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34783 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2C9.34783 2 6.8043 3.05357 4.92893 4.92893C3.05357 6.8043 2 9.34783 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.8043 20.9464 9.34783 22 12 22ZM8.89062 8.875C9.22214 8.875 9.54009 9.0067 9.77451 9.24112C10.0089 9.47554 10.1406 9.79348 10.1406 10.125C10.1406 10.4565 10.0089 10.7745 9.77451 11.0089C9.54009 11.2433 9.22214 11.375 8.89062 11.375C8.5591 11.375 8.24116 11.2433 8.00674 11.0089C7.77232 10.7745 7.64062 10.4565 7.64062 10.125C7.64062 9.79348 7.77232 9.47554 8.00674 9.24112C8.24116 9.0067 8.5591 8.875 8.89062 8.875ZM13.8906 10.125C13.8906 9.79348 14.0223 9.47554 14.2567 9.24112C14.4912 9.0067 14.8091 8.875 15.1406 8.875C15.4721 8.875 15.7901 9.0067 16.0245 9.24112C16.2589 9.47554 16.3906 9.79348 16.3906 10.125C16.3906 10.4565 16.2589 10.7745 16.0245 11.0089C15.7901 11.2433 15.4721 11.375 15.1406 11.375C14.8091 11.375 14.4912 11.2433 14.2567 11.0089C14.0223 10.7745 13.8906 10.4565 13.8906 10.125ZM12 13.25C12.663 13.25 13.2989 13.5134 13.7678 13.9822C14.2366 14.4511 14.5 15.087 14.5 15.75C14.5 16.413 14.2366 17.0489 13.7678 17.5178C13.2989 17.9866 12.663 18.25 12 18.25C11.337 18.25 10.7011 17.9866 10.2322 17.5178C9.76339 17.0489 9.5 16.413 9.5 15.75C9.5 15.087 9.76339 14.4511 10.2322 13.9822C10.7011 13.5134 11.337 13.25 12 13.25Z" })
    ]
  }
), go = {
  default: {
    name: "Padrão",
    action: be.APPLY_DEFAULT_EMOTION,
    icon: p3,
    intensity: 2
  },
  happy: {
    name: "Feliz",
    action: be.APPLY_HAPPY_EMOTION,
    icon: m3,
    intensity: 2
  },
  sad: {
    name: "Triste",
    action: be.APPLY_SAD_EMOTION,
    icon: b3,
    intensity: 2
  },
  doubt: {
    name: "Dúvida",
    action: be.APPLY_DOUBT_EMOTION,
    icon: f3,
    intensity: 2
  },
  angry: {
    name: "Raiva",
    action: be.APPLY_ANGRY_EMOTION,
    icon: h3,
    intensity: 2
  },
  disgust: {
    name: "Nojo",
    action: be.APPLY_DISGUST_EMOTION,
    icon: g3,
    intensity: 2
  },
  fear: {
    name: "Medo",
    action: be.APPLY_FEAR_EMOTION,
    icon: v3,
    intensity: 2
  },
  surprise: {
    name: "Surpresa",
    action: be.APPLY_SURPRISE_EMOTION,
    icon: C3,
    intensity: 2
  }
  // automatic: {
  // 	name: "Automático",
  // 	action: "ApplyDoubtEmotion",
  // 	icon: EmojiAutomatic,
  // 	intensity: 2,
  // },
}, w3 = "data:image/svg+xml,%3csvg%20width='99'%20height='29'%20viewBox='0%200%2099%2029'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20x='0.932617'%20y='0.910156'%20width='98'%20height='27.8391'%20fill='url(%23pattern0)'/%3e%3cdefs%3e%3cpattern%20id='pattern0'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_563_3198'%20transform='scale(0.00164204%200.00578035)'/%3e%3c/pattern%3e%3cimage%20id='image0_563_3198'%20width='609'%20height='173'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmEAAACtCAYAAAD4QKitAAAgAElEQVR4nO3dX0xjWX4n8O8k407WhriixczaUrdBISAES0/WJZjKqBmbeumR7N5JXhiQIs3yAPNQaHuLiqZeqovqklY1UlGahH4IPLAd7YoqtNJm0liafinwVGvTDSqv0ghCoJmAu7X2BrOacoOddHs7tQ+uS4O55/javv9sfz9SqdX88+Fyfe/v/s7v/M43nj9//jMA3wYRERERmeXdb6IQgH3P6pEQERERNZDYb1g9AiIiIqJGxCCMiIiIyAIMwoiIiIgswCCMiIiIyALfFH3izZUk/vbwn8wcC9Gp2A9/78LH9jM7WPh4xoLREBERVSbkj2DIH1H9nDAI+9vDf8IvP8saNiiicmW/PMHWUdzqYRAREWnW6wkIP8fpSCIiIiILMAgjIiIisgCDMCIiIiILMAgjIiIisgCDMCIiIiILMAgjIiIisgCDMCIiIiILMAgjIiIisgCDMCIiIiILMAgjIiIisoBw2yItgi83IfiKq+pBHGS+xLubv6765xARERHViuqCsFdcuP2H36p6EL/8LMsgjIiIiBoKpyOJiIiILMAgjIiIiMgCVU1HElF9uHllBv3e4LmPrSaimI3ftmhERET1j5kwogY33D1xIQADgJA/jOHuCQtGRETUGBiEETWwIX8Ew93jws8Pd49jyB8xcURERI2DQRhRg2p3d2Gs78a5j+XyJxe+bqzvBtrdXWYNi4ioYTAII2pALkczbl6ZgdPRdPqxXP4Et56M460Pxs8FY05HE25emYHL0WzFUImI6haDMKIGdHdwHh6n9/T/lQBsP7ODzXQct56cD8Q8Ti/uDs5bMVQiorrFIIyowUwG7qDN3Xn6/2cDMMV+ZudCINbm7sRk4I6pYyUiqmcMwogaSLhjFCF/+PT/1QIwhVogFvKHEe4YNWWsRET1jkEYUYPo9QQw1jd1+v+yAEyhFoiN9U2h1xMwdKxERI2AzVqJGkS4YxRbR/HT/1/4eEYagCmUQGzs1a8DuHDHKDbTccl3ERFRKQzCiBrEvQ+nSn+RgBKIERGRfjgdSURERGQBZsKITNTrCaCn5TJanT60urxod3ed69Wl2DqKI5s/xv6zXWwdPTVl6q/d3QXXS+fHsv9sF9n8sS4/X1ZHZqepTbXjAOh3LIw+zqLxa6HnOCrhcjSj/VLnuY9lvzzRNG1utGqOq8Iuv4sa5drUfqkTLkczelouvl8PMoXzYzMdx0FmB2vJmOHjcjmaMeALFq6bLu+FcaVzKRzmkthMx7GejNn2+IowCCMy2JA/gn5fUHV/RhHlQlP4nkJh/FoyhtVP3zMkYHE5mnF3cP5CQBjde4iFjfu6vMbbr4n7jL31wbgtArFWp0/1OAD6jFF0nJe257G0PVfVz1aMvTqlegPVKpc/weaLwH81sWxqUDbWd+Pc6l2gcJOdeD8s+A7zVHtcix1kdk+Dh6103JLgodcTQOiVNzDgC6qe88WU1jZnj8N6KobVxLLuAZnL0YxwxygiHaPSsXmcXnicheBsuHscB5ldRPcWsZJY1nU8RmEQRmQArRcQrZyOJoT8YYT8YWwdxbG0Padr0CK6CA/4groFYTLD3RPYTFtfczbcPaHL30tEdJyH/BHdgrBqOR1N6PcWHhp+2D2B5b1FRPcWDQ/GlIxHMY/TiwFf0JSsi5na3J1oc3eePpwZ/aB1Vq8ngOHuCV2CSuVcSedSWNqe0yX4GfJHMNZ3o6L3Ypu7E9cC0wj5I5h9Oo3DXLLq8RiJNWFEOhvyRzD3ehTD3eOG3NB7WgJ4+7V5XbcSEvX+Um6ARutpCVje9qLV6buQhdGb7Dhb/furcTqaMNw9jgdXHxq+f6gsG9PvDRn62nagPGi9/do8Hlx9iCF/RPfXUDK9b782r2tWDyicw9cC07g7OI9Wp6/inzPWdwPXAtNVXzt7WgKmnLfVYhBGpBNlqqmcC8jWUfzCv3Qupel7+71BzL0erWbIAAq1Lmc76F98HXNugMPdE6a8jlWvX+o4h155w9DXr4aybZWRNzRZE+CQP9xQe5cq2Rw9j/mAL4gHVx9qDr7Urk1n+wWKKMFPJUHkcPcEwh0j0q9J51LnxiTjdDTZfrs1TkcS6aDd3SWsJTpr6yiOtWSsZA2Iy9GMXk8A/d6QNEOgR+q/VAf8kD+MhY37hk9HKdkwK2rDrMyCKQZ8Qcwa+KtvHcWFx1aZCjy7n2gx5YY28X5Y93OhVIAKFI6PHet8ZMdVTa8ngFanT3qsFT0tAdwdnMfCxv2qfvchfwTXAtPSr0nnUljeWyx5bWp3d6HHE0CkY1T4OzgdTbgWmEabu0tzOUNhilRckrCeimHp7+ZVxzbgCyLcMaoaYJpRTlENBmFEVdJygVtNRLG0Pae5PiGbP8ZaMoa1ZAyz8cJrhPyRcxcZpQajGqI6nGJm3QCtqg2bvCz/+1XL5WguGeQ5HU0Y8kcMO86b6bj0fFnYuP9iV4UbwoDI6WjCWN8NzMZv6zo2LVthhTtGbRmElTquxZa2C/9tdfoKhfFF7+tiSkDT03K5ouM+1ndDml0qt5ZrP7OD/cwOonuLGPAFMdZ3QxiMhTtG4HI0axq3LBP9TnxaOj7lWll8/pb6PjvgdCRRFUoFYAeZXUw9HsVs/HZVBaIriWXcejKOtz4YP52unI3frjojoXVVVMiA+hQ1PS2BqupJKlFYmm9sPVbx8RNN6/SbUH8ns5mO49aTwgozEb2nBrUEqEBhis7sc8NIh7nk6fv6x+9HsJ6SLzwI+cOYDNwp6zWG/BFpALaaiOL645GKA5W1ZAzXH49gNSEuiwj5wyWn+tvdXcL3YHTvoebxbabjuP54BEvb81jYmLF9AAYwCCOqWLu7C2N9N4SfX01ES+7NWC7lIvPTj6Z0mbYrvjiup2KqNWlmBkdm14aZ8XqRokzPWjKmGoj1e4OWBxrZ/PGF/UKL6blYQy3Aj+49VP3aet08/jCXxL0Pp/DTj6akxz3kD2uuter1BKQPiKuJqC4Pctn8MWbjt7GwMSP8muHucek5I3v4qCTbv7Q9h+jeYtnfZwUGYUQVcDmacfPKjDCLpNcFTo0yVVmtXk/gwjTCejImDO7MyoaF/GHTApHiLJiWwuNKXqP4OG8dPRX+Da3OhgGFc2xZchPrabms22sVB6gHmV2sCjIYZqzUtZKSWZJlIq8FpksW67sczdKsmXJ90lN0b1EYPAPAZOCOMIMqer8rzWHrGYMwogpMXp4W1kGsp2K6X+CMoLYabzMdx3pqVfXrjVgyL7rZmJUNK34dI3pRqR3ntWQMW0dPVb++OCixyrrkWLS6SheVa6EWoK696HquFhCb1TLFSkpWTPZAMPaqfB/Y4e4J4fXpILNr2PVpYeO+cMWiUk+oRnQ+1XsABjAIIypbYdWi+o0gnUth9qmxRd56UKvDOdvBW40RvazWkurTn2Zkw4ZUCqL1bpgqOs6ybKbH6bVFbyPZNLpefxu1AFUJ/oSZwgboGXaYS+LeR9eFn+9pCQgfilqdPmkdmNHXp9mn08IAMuQPq15DRMFWI7QlYRBGVCZZHZgZrRz0oDa1qBSxZvPHwiJhI3pZiW62RmfDin/+1lFc9+7aajVMZ4+zKGtg99onLe0VSlELUNO51GnwJ8oUDviCDXFzLmwbJS54F50jsvfNaiJq+PZIh7mkdCpbbdz7z9Qz4vW2GEMNgzCiMvR6AsLl+0oPsFqgNuV1dvpJlA0z4gYoKqA1skHnkD9yIZAwYtsgtWzF2eMsOl/sPuVWqkmmFmoPAmsajo3T0WT746MX2TnZ5u68kDEttdLUrK2xZEXxaotP0pKHn1JTr7WOQRhRGWQZilpZjaNWh6NMRSpE9UBG3AAPc0lh5s2ojFBxtuAgs6t7k1i15qflHGcjavDsRO1B4GxBvjQjW+fHRnGYS5Zo/xCR/v9Z66mYafsoZvPH0nEXLz6RPbz2e4O2zwxXg0EYkUatTp+0FqxWsmBqU4rF/XQOc0lh0bwRN0DRarhIx6ju2bCwSqdvIwJo2ZSvQnacrV4lKav/O8xq21pLRC1APTsVqRAFqVb0k7OKaKEMcPFvJHtAki20MIJs3MUPGKWCtrG+qbp9KGEQRqSR7KZYKwGYaHsetQu0qNGhETdAUYG+09Gk61Owy9GMHxZlwdK5lO5NHUUBu9pxFmXgrO4ZJmtDIarX0qrUVKRClp1slGyY7NrS5u4895Aiazps9jWqnHEDhalS2YrQa4FpaT1urWIQRqSRLDNQ7U3JLGo3ruIpMoXsydmIG6CoXkXPbFi4Y/RCbzcj6mTKOc6iLCBgbTZMlnmoZupWFKCqHQdZprBeMyNqZH3D2i8ValRl1yer+m3JageVcSsOc0k8KvFeDHeM4OaVmbpamMEgjEijXklmwIpNpyuhduMSZYHMvgGKusg7HU26BH0uR/OFOiQjsmBAecd5P7OjmgUErOsZpjZlq6i2tkjtb6k2FakQHTcjWqbYlWj1IPB1u5A2SVsTs2rBisnGrZZpje4tSqclgUKG+MHVh7Zo46IHBmFEGrgczcLu+Ln8SU20pVCrwwHkGS8zb4CyLu16BCNmZcHUVl4C8oyXnXqGtbu7LkzZnlVt/ZxagCpraSDNyBrQMsWOZEGU50UQJssOyYIhI8mui6LxzsZvlwzEPE4vZq4u1kXBPoMwIg2KU+dnGd13Ry9qGYhSWQ2zb4CiQMXj9FaVfVPLguXyJ4ZkwUTHWXZDkgVoZtY+DfiCuDs4L3zgiO49rCrrW8mDgCwj2yg9w7Sw40IFWZmG7Jo6G7+Nd+Klm8qO9U3V/PQkgzCiBlBOofhZpW6AepMtya+meetw98SFwEKWfalUq9OnWhxd6jjLpiSNrn1yOZpPg6+ffEe8H+pBZrfqzKFa5kJLk1xRsNxIPcNKkW0lVSs1q2etJJbx1gfyjeSB2p+eZBBG1ADUsim5/ImmFVOyG6ARAYLoRl9pNkxtG5dc/sSQthRqQYbWjJvRgcaQP4K7g/Pn/v23yC/xXyMx/OQ7M9KVdQeZXdx6Ml7VtLsoQJVlAbV8TaOskmxEm+k4Jt4Pl2wO7HF6cXdwviYXazAII2oAajVVa0n5FJlClsUxYvXeYS6p63Y+ahm05b1FQ+r41G4CWlsDGB1oeJxe9LQEzv0TZb3O0iMAA8QBqpbjI2vc2kg9wypVy9N12fwxbj0Zx8LGjPTrnI4mXAtM11wgxiCMqM4N+SOqN1utmSBpQ1GDelmJsmFt7s6yFgSo9UUzKgtm9HG24kYa3XuI649HdAlYRQGq1p9tdsuUWiOr1ZOtnDSSnudsdG8RU49Hpe06ANRcIMYgjKhKdn/KLLclgBrpXnAGZMM203FhNqyc2jAzs2Ci3mDlHGfZtKXZgUY6l8LCxn1dfpYoQF399D3NP0OWMaulm24l5D3A7LswSBb8VbLAYz+zg+uPRxDdeyj9umuB6ZqpFWQQRqSBbIm3aENvOxDV4ZRblC67ARrVy0o0PdfTEtCUDTMzC9bu7lI9zuWuvpRNSVYbaKRzKWwdxS/8E2UWql2RepboQaCcG7FsaxsrWnnYhfJAIdsEW7YS0UhGPaAubNwvuXpyMnCnJqapv2n1AIhqQTZ/jFz+RFhD0+7usmWrClENVavTV/Zqw3QupdpeQLkB6v37rySWMdw9ofqaoVfeKHkDNzMLZsZxbnN3VnWcVxLLwmneudejqq851nejrClDNaIHgcNcsuxj43pJXMMW7hjFbPx22eOrBbJFE8r7QLbC1KpgRBb8VbticyWxjP1nu8KWKk5HEyYvT+PWk/GqXsdoDMKINNrP7Agvhj2egC2DMFEmo3i1YLWMugEubc/hWuDiE2/IH8bS9pzwxmNmFkxp8aBG7+Mc8kewv6H/eTYbv423X5u/8HGnownD3RNVTUuKAi1lcYBeBnxBzNbGxhVlkWX4zmYx5TVhhb0azW4qLfv76tFAdj+zg1tPxjFzVf193dMSwJA/Ykg/QL0IpyNfb2/G9He/Jf0XfLn0yhqieiG7yNmxJkVUh2MEo+ovVhLLwv5ZsizK5OWLgZtRWbABX9C042zUeSarwQt3jFScSZEFqHozqmWK1XokU+/F1yRZKwezt3iSvV46l9Ltvbif2ZGunLR7V31hEPb99mbc/sNvSf9972WXmWMlspRsdVabu9N29QdmXnyMvAGK6tdC/rBqzUmv52KGJZ1LGbJFEWD+cTYqqJEdH7WgVgszA1TA2g3PjSJ7XxXXEMoeFPu9Id3GpIXs9bS2bdEqurcoDEDteG0+i4X5RBrJupoD1XV011u7u8v0BQNG3QBXE8vCrtlqAZDa38GoAMyK42zUKsnNdFzai6uS4M/sLIRRLVOsIju/1FY4yxZ2mL3Fk+x80dKgt1yy97idg3PWhBGVoVAsrl7oWapOyUyim99PP5qqehpArXYI+PoGqPfvr2zsrXbcIx2jiJ6ZZhRlwYyqCbHqOBtV37Pw8Yzq9lbA10X6WokCiNVEtKzWFGrCHaPCcfb7gobU/llBFsSqndNKrzm1465kUc2ojxJtYg+U3x5Hq810XLh4ys5thIRB2H9cSeKXn2Wl3zz93cK0JFGjWJUEYQAw9uoU7n04ZeKILhLV4RxkdnWZBlhPxUy/AUb3FhHpGL1wgXU6mhDyR05f08wsmMvRfKH4HyjU5Rh9nM/+znpS9u5U+708Ti+Guyc0H09RAKHHg4rL0Sw8NkpgXut6PQHVvwMgX2QS3VtUXcwCFN4fZgRhslkBo96PgHjxVK8ngKVtw162KpyOJCrDYS4pbRTY7w1aXhwsqsPR68Ykq40z6ndXsmFqlD5lZmfBRNOCek21WHGcAflNMtIxqmm6T/YgoEemdC0ZE05R10PPMJejGZOBO8LPyxaZyBazKIG0kWRZMK3bVDUSBmFEZVranhPeAIDCtI2VNwFRBkKvi9+KpEZL6WVlhOjeourrKk1FzcyCAeImtXodZ9nPMfI4H+aSWNpWnwpVWlaUEhKszNUzIJYdH7uviCtl8vK0MJA5yOyWPK9lLUUiHaOGnTutTh/G+m4IP7+wcd/0NhkAcJgV1/JaTRiE/dmQD8//tE/6j1OR1Iiy+WNpTyynowl3B+ctCcR6PQHVepD1VHUNN4vJboBGFY5n88fC1x3ru2FqFqzXE1C9Sa4morodZ1mHeMDYbYxEAW/hdcMl2x2IAlQ9C7Jlmd1a2bKmmJIBE0215vInmH1aeqXqWjImXC2oNDHVu07K5WjGzSszwtWwW0dxQ6dCXY5mYV8yO9TpijATRlSBtWRMeoNUAjGzbwahV95Q/bjeq5HWU6vCz1kxVaZ24TcyCyY6zrLjUgnZzzPy3JJN/wKQZjtEAareDwKy1cq12DOs3d2Fu4PzwjowoJBJ0lrUfu/DKWnG+u7gvG6BmBKAiVZylgoeW52+qv9esveDbGrfagzCiCq0sHFfuO8eULgR/OQ7Mxjru6Hbxa7V6cPdwXnVKSFRobgRdRiymhwje1kpheOlHGR2DXvqtstx9ji9hgZi0b1FYZDT5u4U3jSFAaoBN0LZ8bZzW4KzWp0+TAbuYObqorTdyTvx6bLO6Wz+GPc+ui78vBKIVZuxV65Jsu74s/Hb0mzUzSszuBaYxt3B+YpajLgczcIHA6NWY+pFGIT9Yv8Yd/7mH6X/Sq2eJKpn2fwxbj0ZlwZiQKHj+IOrDzHkj1QcjLW7uzAZuIO/eH0ZPS0BDHePX7h4iqanjCqEtWJKEtCW4apmm51SRPVGRgV90kDDwAac2fyx9FirPVzIAlQjjo8sw2vnnmHt7i6EO0Zxd3Aef/H6sjT7BZQfgCk203HpRtdKIDbcPVHRtWm4ewIPrj4sGTzKzuHh7onT7+9pCeDB1YdljUcJAkXToEZeC/QgbFHx/v6xhhYVYNd8amhKIHbzyoz0SdDj9OJaYBpjfYVsyXpqFZvpuHR6prDa7zIGfEHVi9zk5Wlcf/z13oSiOhyjlutH9xaFNw8je1nJ2igAhdqTUpt7V0OUATKiASVQmJIU/a4hf9jQYmfZJupq+0qa/SCgTEmKitjN6BlWqI8rvVhBqaMrZ7/MdC6Fex9OVZXJUYI3UduKwt9xHJGOUawklk+vTSK9ngD6vSFN26KVCh57PYELLX+Kx7OaWFb9/Qv7w0ZUW9co1lMx26/GZLNWoiopgdhw94S0hxig9LUKn95Uc/mTCxeYdneXpq1e2tydCL/oiSSqwzEyFV/qBmhULyugkA0TBSZG1oIN+IKmH+e1ZEx6nI1uwCnaRB0oZHmje4unU03Cgvwqm7PKyBoom9EzTO+NyBVL2/PnGhFXYyWxjP1nu9KMkdPRhHDHyOmm8+lc6twUYqvTJzwHi+XyJ7j30fWSD0NtkqnQ4vGcXWigZSwHmV1NixisxpowIp0sbc9h6vFoyenJs5yOptOLuPJP61570b2Hp9kXUR2O0Y0ZZU+ZRhZGi2rDjM6CiTI9siJ2PVjZjmElsSzdGPr6wH8GIC7IT+dShv5NZBnIWuwZtpqI4sfvR7C0Paf7QoaJ98PCramKeZzec9clrQHYeiqGiffDmv7m0b1F/PQj8QKCs8oZy9ZRHLeejFvSDqNcDMKIdLSf2cH1xyN4Jz5dVjCmVS5/cnqRVqahCml59ayQUVNkWn6+kb2sAPVpViOzYJd++18LWwcYvfqq1HE2uvZJdlw7f/ffYsAXNLw/nYiyVY+IkfWJetk6imNhYwZ/shwsWcRejWz+GPc+nMJbH4xLA+tKbB3F8dYH47j3YXlbdq0lC0GblgU3peTyJ1janq+ZAAzgdCSRIVYSy1hJLKPd3YWQPyKcxtJqPRXDerJQ31B8cRHdZPTqTi6jZUpyf8O46dCto/jpVJDRWbA/+NYfqn586yhu+XEOd4waWoC8mY6fO9bA16tBt46e4v9k/7cwQDVjC6GVxDLG+tS3CxvyR2xVnH2Q2UU2f4zNdBwHmZ2StaFG2EzHsZkeP10gINploxTlHFj99L2q3ntK78Wl7bnT8ZRzvVTGYZe9e8vxjefPn8cAfK/4E8FHvzJt78hffpZF8NGvqv45VD+e/2nfhY9tpgtPWrWq1el7MWXjOy3SLa5tUC7Qh9lCPcbW0dOSF7d2dxdcL128gCo/w2itTh9aXeoXzOyXX9e8qTX4rHaMZ197/9muLjczUSPSf/mXf8Fv/MbFyQOzjrPo7wycP85GnQ/t7i7cvDJzbmGJwuVoRvsl9RVyRgbGWl5frzHIjn8pZp0j1Wh3d6HHE0C7uwutLi9cjuZzC4IquTbpMZ5eT6Dw9z1TK6uMZf/ZLraOntq++H64e1y008QdBmFkS/UYhBERUeORBWGsCSMiIiKyAIMwIiIiIgswCCMiIiKyAIMwIiIiIgswCCMiIiKyAIMwIiIiIgswCCMiIiKyAIMwIiIiIgswCCMiIiKyAIMwIiIiIgswCCMiIiKywDetHgARERFZ5+zm5Gc3g7ej4s3azdgg3kgMwojK1Or0IeSPVPUzDjI7yOaPAVh3Een1BNDTcln3n7u0PWfKWNK5JA5zSUNuGkP+CDxO34WPbx09NeTvJXq91cQyDnPJsr7HbNUeE7X3UzqXxEpiudqhSQk2VNZMOf8AYP/Z7un72c5cjubT91r7pU70tASkX791FMf+s11sHT3FWjJm0ijPczmaEfJHMOALCseby59g88V5uJpYrom/hYJBGFGZWl1eDHeP6/oz07kU9jM72EzHsZWOm/Ik2tNyWfffA6gsCNNjLFtHcawlY1hPxoSBi1Yhf0T1gr+0bUzQLHq9raOnwt9F9D1mq/aYDHdPIOQPn/tYLn+CtWTM0JupEee+HYIWNb2eAEKvvHHhOJfS0xJAT0sA4Y6R07/J0vZc1e8vLVyOZoz13dA0ZqejCf3eIPq9QYz1TWE1ETVtnNWquyAs+HKT1UMgKpvH6YXH6UW/NwigEJStJJalmRA6T7lh1NpFuJG5HM0Y8AUvfNzpaMKAL2h4NkxvakHL6qfvWZrtHu6e0CVYdzqaEPKHEfKHDX9/DfiCmAzcgdNR2f085A9jwBfEwsZ9259DdReEtbkd+C/ff9nqYRBVxeMsZNuGu8exmohiYeN+TaXYrVZLF+FGNuALCm+0/TUYhJ11NmjZOopjaXvOtGDM5WjGcPcEwh0jhvx85fda2p6vKPMtM+SP4Fpguuqf43Q04VpgGj0tlzEbv63DyIxRd0HYu5u/BgAGYlQ3lIDi0fYconuLVg+nZigXYQA1fTOvZ+GOUeHn+r1BtDp9dZHN7GkJ4O3X5rGeimH26bShD1Tt7i5MXp5Gm7uz5NceZHaxmY5fGE+r04f2S50lf8Zw9zh6PQHc+3BKl99pwBcsGYCtp2LYf7Z7+v/tlzrR23JZGMwP+IJY2rbveVR3QRjAQIys89YH2utM2txdaHX60OsJlLzYOR1NGOubQq8nYPhF/CCzi4WN+4b9/HLIxtLm7kKvJ3A6hStyLVA4Xnaq0dHDwsczpyvayjHWd0P1fFtNRLH66Xtl/7zDbKrs7wEKwUKp877fFzT9wWNhYwYHGmsyW50+eF68h9vdXSWnz/q9Qcy9HsWtJ+OG1H22u7twd3BeOo50LoWl7TlNNXetTh/6fUFEOkbhcXpVv6anJYC7g/O49+FUVYGOy9GMycAd4eejew+xtD2nOmZlWnu4e+LcOHP5E9x6Mm7bAAyo0yAMKARiz774Cu9+/2W4f+s3rR4ONYhyphvOfq3oIlKs3xvE3cF53Hoyblggls0f22bZt2wsm+k4onuLmqZeJgN3sJkO19WUbqU3cdExOMwlTf27y7JgikjHqOlB2MGLBTLaFL5uabvwfwO+IPq9IWkxudPRdPoe1jMQKxWA5fInZU/PH+aSiO4tIrq3iHDHKH7YPaH689vcnbg7OI/rj0cqfo+FO0aFY38nPi0ddzZ/jJXEMvM9j10AABE/SURBVFYSyxjunkDkxc+699F1W7fbAOq8WevPP/kcwUf/gMwXX1k9FCIp5SIy8X4YP/1oCumcOLugXPBcjmYTR2hf2fwxFjbu4524eBrD6WjSdNMncxTaDpwPVNTOeY/Ti3Z3l1nDqtpaMobZ+G38+P0I1lPizKsSiOn1u7U6fdIA7CCzi4n3w1VNy0f3FnHryTgOMruqn/c4vVVdl4YEbX+2juJljXtpew63nozjpx9N2eZhUqaugzAA+NvDf0Lb3N/j48N/tnooRJqsJWO4/nhEehFvc3dirO+GiaOyv5XEMpa254WfF13kyXxqffaWBRmvWgyeD3NJ3PtwCu/Ep5HLn6h+jRKI6fEwdfPKjDQA0ytzvp/ZkQZilV6XCtO66jMAlWRC9zM7NVN+UPdBGAA8++IrBB/9Cn/5olaMyO6y+WPc+7DQakFEKdinry1tzwmziB6nF602aG5KhWnGs7aOCk021dTyOb6SWMatJ+PSQOzmlZmqXmO4e0JYW6dnAKZQrk2i36mS61KrS1yCUQvZrGo0RBAGFAKxH/3iM/ynFfsW6BEVm43flmbExvpucFqyiOwJ+Ox2J2SNXk/gQtZDKRJXy7A4HU01ncXcz+xIWyT0tAQqDjRbnb4LAe1ZRi3iOcwlpb+TnteleqrjVNMwQZjiZ/Ej/MFffoLE519aPRQiTWafTkuzO7U4XWOkraOnws+11VB9Ub0KvfLGhY+tvwicRQF0fw1nw4DC7xXdeyj8fKWlBcOCQnkAWNqeN7QofS0ZEz4g6nld6vVYvyuEkRouCAMKdWLffvcT/PXe51YPhaikbP5Y2hCxlrMERqj3J+daplaQf5DZPW0hsC4Kwl70DKtlS9tzwik8j9NbdrBR2HNTfRVmLn9iyqrShY/FU6myDF0x2ZSjWtBeTxoyCAMK05M/+KsDTk9STVhJLEuzYbVcN0ONQy07cjb7tZ/ZEZ7ntZ4Ny+aPhYsPgPKDDbXFDYoVkzaxPswlhdmwcqeRRcX+IX+4rrNhDRuEKZTpSa6eJLuTXcB7Wi6bOBKiyqjdlIuzX6IpyXIyK3YlWnwAlL8AQRbgmNlbTfY7lRM4y2o5b37nQU21KilHwwdhwIvpyb/cxZ/Fj6weCpGQaKoGqO0VZHqTFQSnbdw5u94N+IIXCvLTudSFuiVRTV+t9QxTc5hLCjM+TkeT5oyPrKVDOpcytUO8LHgqtZvFWdG9xZLtPGr976+GQdgZb64kEXr0DyzaJ1s6zCWlNSVcJVkgywqe3XOOzKW1N9haMiY8z+thEYosaNG6cEQWrFnRH2vrSFzTpTWwzOaP8UhS+6oEYvVWA8sgrEjssxN8+91PmBUjW5KtdmL7hQJRVlAt60LmaHX6VLMiouyuKJCoh4yvbF9KrZkeWbCmdd9LPckK68tZkRzdW5T2RnQ6mnAtMF1XjaoZhKl49sVXeHMlyVoxsh3ZxY6ZMPUeVIpqtmyh6qhlwc6uiiy2nlpV/bjT0VTzgZisYF7WtPQs2QOXFZtVywK/cle1LmzcF07ZKsIdI3hw9WHNr5gF6ngDbz0otWJvBlow/d1vcSNwsrU2d5cuUxE9LQH8jz+urEv11lEct56MVz2GSrgczZgM3FH9nFlL9kmd2hSSLChWpiTVemCF/JGa2ZJGjR5T4rIHLis6zMsCy3Iz9Nn8Ma4/HsFk4I50I/Q2dyceXH2I2fjtmj4fmAnT4GfxI7TN/T23PSKyKZejGXcH54VZsEfbc+wfZpEhf0T17yJbVQdIGrd6gzWd9dXjPBRtU2SV7JfqNXzVmI3flu4FCxQyoz/5zkxNT08yCNNI2fYo9Ogf8MvPslYPh4he6PUE8ODqQ+GNaTURZRbMQmpTkeupWMlgRDQlKfqZZB2jai2Xtufw1gfivTcVyvRkLQbnDMLKFPvsBMFHv8J/+MVnXEVJZJFeTwDhjlE8uPoQb78mzoAdZHaxsHHf5NGRotXpQ0/LxdVxpbJgQCETJmrcWm8r5GqdkcHPZjqOiffD0hWYwNfTk7XWxoI1YRV6d/PXeHfz16wXI9vQa7otnUtVXMRuVB+uu4PzqjdzmfVUzLANjEkbtZYSufyJ5hqetWQM4Y6RCx9vc3ei3d1Vk6tday1I0MLoldnZ/DFuPRlHuGMUP5Tsl+lxenF3cB63nozXzLnBIKxKP4sfFYKxyy14M9DCYIwMJVsNpNfS9MNcUrpXpd3l8id4tD3HKUgbKLcgv9hqYlk1CAMKU5L7G7Vxoz3L9ZJ6AFGOraO48KHE5Wiu2weP6N4ittJxTF6eFpYfKP3Erj8esWSlaLk4HamDZ198hen/+Y9om/t73Pmbf0Tmi6+sHhLVKa1L2BvVaiKK649HGIDZwJA/opqxKOdvI9tLslanJI1e2WhFv0DZw6HeqzX3Mzu4/nikZD+xm1dmaqJGjEGYjpRg7NKfb7FmjAxh5sWuFuTyJ1hPxbCwMYM/WQ5iNn67Jp5+G4Fa8fzWUbzsv48oc1arPcNkzUu1ZrBkbS6s6J3lkbymUVm52fhtvBOfFn6+zd2J4e4JQ15bT5yONIhSM/aD3/8dvBnw4Hsvu6weEtU4l6NZWoBezxY+nrkwjXOYNXePPNKu3d2lOl1WTQ86NbXYM0y2jc+WxgcpWelBIcgztzGx7HcysoO/EqBfC6gHY+GOEaynVm39gMogzGA//+Rz/PyTz9HmfglvBlrwo97fZd0YVUT21G/ni4weaqXIlgrM2uNR6RlWSzVQosL8XP5E83kuy4Rp3atRT7JFM0Zfm1YSy/A4fRjuVm8SHe4YtfX1kdORJjnIfIk3V5K49Odb+KOfH+Cv9z63ekhUY2QbU28dPTVxJI2rHrZJMZrL0WzqNGEt9Qwb8AWFK/s2y3gPy2rl2tydpp6nsr91qbYSelnanhPOBvR7g7Z+3zIIs8DPP/kcP/irA/zui9oxBmRUiuzGVs6Sf9LmMKt+gzNqYYToJmHnJ3gRWaBhhFoq0O/3hoSfE21mLiI7N/pNDIJlv5OZ1yVZP0ArsoNacTrSQs+++Oq0dgwAfvD7v4Pgy00IvtyEV1t/2+LRkZ2EO0aFNzZuTK0/Ua2ZUU/Uolq/WqQ2FVlN7zmFaPujWukZ1ur0CfdCzOVPyj4+0b1F4c+LdIyaskK4VNZTS1NevWym40jnUoJzxPw6Oa2EQdi1f9eCO9/9N9JvbnM7dBnEt1t/G7Ef/p4uP6sePPviK3x8+M8MxAhA4UIXkdTYsB2D/kRNZz1Or+41SKKndLOmcvTU7u5S7d+0vLdY9XmazR9jrG9K9XO10DNMtlJvuYJjs5/ZwUFmV/V4e5xeDPiChmeiZA+Hq4mo6bV6m+m4amBqRdsOrYRB2O9fegmvtv4rUwbh/q3f5OpBIoGxvhvSCx1XCOpPVvg84Avqmn0UTefIxmBXooL8cqfaRD9DFIQN+IK23p6q1xOQZsEqDVCje4vClYFjfTcMDcJKPRyufvqeYa8tUovXQtaEEdnYkD8ivXjb+cZTy/YzO8JNg/WutxHVNNXaYgvR1FQlvcHUHOaSwuJrJfNjRy5HM25+54Hw8wsb9yvOGK0klqXHxMg+WZOXp4UPh+upmCX1jLXQnLUYgzAimxryR4RPuUChWWEtLc2vNaIsgp6rrURd5dO5VM0ttggJfhc964JkGUhZgbhVWp0+3B2clwYr1WZVZQ9iw93jhuxVOeSPoN8rXii08PGM7q+phWhq385ZZQZhRDY01ndDGoBF9x7W3E261simU8ZeVZ8WK4fL0Yyxvhuqn6vFxRaiqSk9z1PZtGbIH7ZVJqTXE8CDqw+FexweZHYx+1T8HtdqMx1HdO+h8PN3B+d1DcRKPRw+2p6rKPNZ7RhbnT7JsbZvvSCDMCIb6fUEMPd6VLhpMVCoA+M0pPE203FhcXy/N1hVQ1KXo1mYIammRsgqvZ6A6qo0vYuzD3NJrKfEgZgdpiRbnT5MBu7g7dfEGbBc/gSzT6d1OzYLG/eF05LKhtZ6tGkoFYCtJqIVnbvt7i7MXF3E3cH5irPMogcju7fwYRBGZLFWpw/hjlHMvR7F26/NS9sVrCaimI3fNnF0jW1pe074ubG+qYpqbpQATPTUXovTzKFX3lD9+HpqVffXkmXDzOrUX8zlaMaQP4KbV2bwF68vC+s4gUIG7NaTcd1batx6Mi4NxN5+bR5jfTcqyha2On24eWVGGoAdZHYruja5HM24eaUwfdnTUsgelvu+Guu7IZweXd5btPX7iX3CiHSk5WlT6Xzf6wmg1enT3CPqnfi0KdNULkezLk/N2S+1b8NiV8pUjygzOdw9jl5PANG9xZJP2y5HM8Ido4iUWNZv56d2NS5Hs2rQYVQGYi0ZwzXB6al0i69mIYBsg+2zX+NyNKPV6UP7pU5hQF1sPRXTNQN2VjZ/jFtPxqUBfrhjBEP+CFYSy1hNLJd8f/Z6Agi98oY0qAS+DiwrMXl5+tw10OlownD3OIb8ESzvLWI9GRP+PXs9AQx3Twi3TUrnUrbPKjMII9LR26/N6/4zt47iWPh4xrSAps3dqcvvsXUUr/jCbCcLG/eFgQZQeHrvaQkglz/B5tFT7D/bRTZ/jIPMzunNutcTkO6vB9RullO0bZBRDwzZ/DHWUzFh5iPcMVrVdL2oDUY1lJXMRj9EKYHYzSszwvPN6WhCuGME4Y6R0/0qlXMWKGS9Wl3ekueroprzttXpQ69gOzaP04uxvimM9U3hILOLw1zytMC+/VKhQa/sATaXP8G9D6dsnQUDGIQR2VY6l8LCxv2ay4zUI+UmI8sIOB1N6PcGhcGBTK0GYIC4IN/IbunrSXEQZqeeYbn8yWmjWrOCASUQG+6eEG5qrXA6mk4fIsqVy59gNn67quvTYS55GjTKAqo2dyHbqPW9lcufGDLlawQGYUQ2okzhrH76Xk3uG1jPZuO3sZ5axWTgjm57I+pxI7PS4CvfV715HmR2Db0BriSWhU2MzeoWL3OQ2T2dorYqE7O0PYfVxDKGuydKTieWS1kcpMfvtp/ZwfXHIxjunpAuSNJq6yiO2afTNdO4VRiE7fzfFew/+39mjoXo1A86/73VQzBFOpfCYS75YiXeUwZeNreWjGEzHUbIH0GkY7TiPR+VvRTNzJAY4Y87f6T6cTNqF9eSMWFw0e8NmRqEbR3Fsf9sFweZHUsDr2KHuSRm47extD2HcMeosC+dFso5u5pY1j3AyeaPsbBxH9G9xYrHeZDZxdL2XM090Hzj+fPnMQDfK/7E7Q9+jL87+l8WDIkI+O9/tH7hY5vpON76wPoaI5ejueq9yOxQtK7UfhilnN9RNBY7HCeZdncXejwB9HoCcDmapQXCSrC9noxZ+ju1u7vgeuniDe4wmyr75iprjml0ICI7f7WcN3osPqnFh6ZCfeJltF/qlPbW2jqKI5s/LjwgpuOmn7PKOHs9AbS7uy4EZUo9mx3eU6UMd4+LVnzeYRBGtmTnIIyIiEgrWRDGPmFEREREFmAQRkRERGQBBmFEREREFmAQRkRERGQBBmFEREREFmAQRkRERGQBBmFEREREFmAQRkRERGQBBmFEREREFmAQRkRERGQBBmFEREREFmAQRkRERGQBBmFEREREFmAQRkRERGQBBmFEREREFmAQRkRERGQBBmFEREREFmAQRkRERGQBBmFEREREFmAQRkRERGQBBmFEREREFmAQRkRERGQBBmFEREREFmAQRkRERGQBBmFEREREFmAQRkRERGQBBmFEREREFvim6BMhfxg9LQEzx0Ik1eryYrh73OphEBERadbTcln4uW88f/48BuB75g2HiIiIqOHd4XQkERERkQUYhBERERFZgEEYERERkQUYhBERERFZ4BvPnz//EYA2qwdCRERE1EBi/x/E/7FS+nhrKgAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e", _3 = "data:image/webp;base64,UklGRlQBAABXRUJQVlA4IEgBAADQCACdASooABoAPn0yk0ekoyGhOrmYAJAPiWwAtSFBOz/lfygdMTvH3Vw3FgA3AG6Af5XqAN4z/ZsjVhLP5OrIHmKxkAHD1v22t4aUQTcAAP738WQ4mfTH2Bvfl5ovYkE7oCY+9iENkF7l0/SdBvGKvYZfoDGUF8qfuZA39j7pxwl/p87mI0f4NJDIswPYBSVr24bA+fRL8kSAPSoDAXpRrOHA0n3c5srZwu271nzTm6JNaDSaAKO7Kg0HHUshU8g0rjv97ys6swdkwnS3915dSJa7M5VjyyYeRx69WG+yL8XHuIQK/pX/3KobPYU7/KFRu03GD+KpoFKrytuUABf1pGAo04ZBgmaAleKZgCwIPqG5VuPew2tDU7tHcN3Q34gTvRpEdli0TVXl8tFjL5/HWO+t0z4atwt//sqm5C9f/zs6nemcAAAA", y3 = "data:image/webp;base64,UklGRjIBAABXRUJQVlA4WAoAAAAQAAAAJwAAGQAAQUxQSBUAAAABF9D/iAiQSdtERmXP+d6I/gdiOA4AVlA4IPYAAABQBgCdASooABoAPok6lkelI6IhNVgIAKARCWYApdvoeq0QDZ/85VFvX8qdv98zbMbMWf/cn3VtEgEUQAD+4uR+TT3eHyCqWsTrBreWz5CTJPD9YMxB/xTNgQolAP/2ln8jk+ftL+pZ85/zzX8nfw6DX/4Cb8L5rmhnpEyG3psf3Kyupn8/ViUbhI9Aj6Mt7sZvuX//okTCsDJ+CLM+fBcvk0QwRynUmBElxreecNtLP4ucf+2CRzaidsN5D/n9QVafXgFHtUxNmcvb1i2Ygi/e3Yz4ShVkH8+amEDfoPqYF4eu9RHKs9rGcEiV0+EaCN55cFTYAAA=", x3 = "data:image/webp;base64,UklGRvIAAABXRUJQVlA4IOYAAAAQBgCdASooABoAPpFEm0qlo6IhpWmYsBIJagC7LpzS7O2rb6otcgmJPwG5psKRRwNvQJOAFnc/qwAA/vXTJ/Nwy1aruxOHJ2IkKf73XxK7+P9W16bjDFOH7il6cvyqn6tgKSRnR3CWaCKeHMqZaJ/VFdskk0z/uDWVUWNLGljY59eFH/kW/ERfZHdZ5+d/9LD/w19wP/q++d7Nvv7xgf/YoAIlZIbWKtNXyxmmo7jc/0fNm1/3a7uocp7lkbIgmn9a3//HP6iAWY6vx4Usj4qQ6o3/SMxsQtI/pGYZQdNgqHsTGWgAAA==", k3 = "data:image/webp;base64,UklGRvwAAABXRUJQVlA4IPAAAAAwBgCdASooABoAPpFCnEolo6KhqrgIALASCWwAeQP0A/FUiGNIA/QAKgaK3PJjYeKcX3p43zMzJrdkAP7PXHDQHKv/P/ERyCwvRILMwTag1Z32+Sj+lKaVlDp6cnhQnO6VBikG+MSEIdiopSPC6D0X8rrK5l///dafjLz4Pig3GYi/XcAuFZrAml+pwLx3nZmo+tCKd79hDTrSA7B04+B47U/OnsmxujR4lMB4KAvvJt74kXEwTJf7DJMc/uX4HI+55/M6xGzFOV/+DKf5N/7geKX3Znec06Z2nZLf5R9vFfEV30Xy9D7+lwv0LF+AAAA=", A3 = "data:image/webp;base64,UklGRhIBAABXRUJQVlA4IAYBAAAwBgCdASooABoAPpFGnkslo6KhpWgAsBIJbADBC9b6B+KrN/7ui9nIAzRLcn0x7ADRGM65dkl+pebAAP73gZh7nmVRYD8eZV8f+j1+p/3eHyqCvVj5Rj2g+bn8IrTSpq+V4bGy78INzZ4eUVE9VhStpmmLHe5B1oOEUVh34q2Rwyk6ILpy/yOf7F+4v/VuLdtNv/8uTHGPSG07Pe9P/f6YSDxy4/v/jI7tdHL4P9h9yb+hsanaP5/zouNlVNbj092lT6IleCGwwGB2rU0TgCGayd1+2ofw1tC7Sn01n2g0ws6oP1AUyk/6FnjWgfSwZqZ7/mZer5jX8zL1fbJ/7s4EqMGkA4AA", E3 = "data:image/webp;base64,UklGRrgBAABXRUJQVlA4IKwBAABQCgCdASooABoAPpFAm0olo6KhpWswsBIJbACdMoRwN4B+InsCVn+qvQB+rv7AcIB+wHWAegB5T3sQ/st6OpMq7uAmaKWStLBCgoLb+72zd/kengX1aHXXrBVAAP7YlIsEfxRWKqalGH7Z5RpKPBLnSBXUogzECsGf1uOMs7aJ+n0R4eoFw/jDcP+XjOWIzoOzoCatJIvNrP/Y82M1fzEX//qcXkZcIohjWNWHyhzh9zXR8IYRKfDmAuFEoKchXrhW0MT6hwBSXPP+Nny/64N3htY0zt9Dur9TyhGg80XBx+SsRhyF7IVqd2zlVEYVYJ1C6CQrfziC+Xwq4qlTEwy9ISdQnP/CIN8maAl+Nvu9ISn7q8e32Z6H92DLUVtspBk2a9t9U/kftmfKx6Np/1hhYK5Va8Nb7Dap2eb+KbNgI/XqIommVGOSk9J4X5AfST6y11jI8znn7qXNf2d3d8jMQmLQSm3E0gf0V6M5P+JhHpN6OPTUHlx3UPML6JYMSAO0uW9iGHD9yz6RypO1c+GZHQKtknfir/E1RfgNYNImrDH9uh1URjVcW8iAAA==", S3 = "data:image/webp;base64,UklGRp4BAABXRUJQVlA4IJIBAABwCgCdASooABoAPpFAm0olo6IhpWswsBIJbACdMoRzt4j+G/sCVn+ly4BuAP1P3wD9jOsA9ADyoPYj/aj0aU8B7U3uhM0UsltKbvge1Fpt9ObUPzCEtOpzVgYNwAD+2JSLBH8O+osbWwFowaCEE9SfrvCMgKktOd9dpTIYiDid0Hav/MGzIJKe+V0C2tgIJ47/epi+c1ff/1OLw2fq8uZo+ybXwXGHX+UyBMyvabzilAqo1xz1pQlXVnvHXVfG1HizDQDFk7+lgYO7cVY/hZ381babA15nUJNniuLkDymCXRjkfOfAmhivG1IAKGu9x+MCuPYPgQF3a57jaWNWKVkN+zT41eII/DFFDLbT34jjiO9waWBI44LYtnYuuKZ3Fj+N2H+s+cPH+bnq/4P/fIgZnnPX0XKG6RW5JOBmWdDS7jDA/lKNPphSzRDDvmXga/2dGyJzmpRpnEnw2laB4AWS2z2HDUFNSFjzhxPD42LA/gwD8uH8lpQz/SPbxPZLjCOZd3hwYTP2pw/8+ofAhvwXwAA=", R3 = "data:image/webp;base64,UklGRtgAAABXRUJQVlA4IMwAAABwBgCdASooABoAPpE6mEeloyKhNVQIALASCWYAyiEhugLsA58D2UyIyKLrj3X7RD86FKasmpRCPr84/5AA/v33ZNkCOHDlE/FzCwTqctGriFLkm+isLD9vivqtAaa5p6DmcXiXn+8z6vG0lkbt4PapWFJCVaX6yn5fOz3FutDpZ09uDY6rB7Kn6z12j+euX+NnHUQxLQ7x9hZAkFyTw/AM2aQ12dOJhNKaeMdthWqPmx955S0qstpNp5eyjWpWjw6zeKMDsM1AMtZIAAA=", P3 = "data:image/webp;base64,UklGRuIAAABXRUJQVlA4INYAAADQBQCdASooABoAPpFAm0olo6IhqrgIALASCWwAyi/ybAPxAdADn/wGZ87DA4Lj6yqM9xV3M/VgAP0cEac/je+Sh1FODLj8RDfy3lcqrfrC6JI3N2FaPNNFz/+N4HVdxySzS//WV33WTwhhFr3BzgpqMnam28y+i7Bgecxi1RhjoINiYwbeocGqaTpAijblonAArO7dN+egUtbF/getMN1xHy3Yr5Ux/BrRKHr9jfhb/TEqiiGPEU65qGYMR8rffykT+6e6P9Uidmv8xBiLj5k8AoVtAAAA", M3 = "data:image/webp;base64,UklGRn4BAABXRUJQVlA4WAoAAAAQAAAAJwAAGQAAQUxQSDAAAAABF9D/iAgoiiSpWWlIiCeNP++zmQ8MRPR/AlDfSR7YLXBZRXYnFV+TE6nsRCo5UQxWUDggKAEAAHAHAJ0BKigAGgA+kUaeSyWjoqKlaACwEglsAMjHontdLV8C38l/QDDAP0A9/+7rv1JILMF48RHcqCOf/UmxwiQ0RLMAAP6t6ZI35QyqlUPi907H+ZaD/VnS/71f/TEqtxukOB75y3JDnLNNH2yjNrE3EL0F9PODwWVnj7v/iZbh05wP67vlxqOB/9hiU69oH8SD5ZrCLoGlEYPl1xAVIB3ix4FnrqK6/iV5/7r+lw4n735bv936OgnBpuFf/6Gbh2EzP+X9pP9Df+KwZ/Pu6BSJDnmkYVcO5saoFCscZ0ASKoFVqdEX4vqcLKmPiVGI1qMRMlpIW9bPU6HaKacwCAfL+P1d9nL6P80l39n/1Am8Yz/w5T/hyMPSsy0cgJERxOyCLgPw6YAA", I3 = "data:image/webp;base64,UklGRiYBAABXRUJQVlA4IBoBAACQBgCdASooABoAPpFGnkslo6KipWgAsBIJbAC41oA4wHPzXdKxTOlSZwMCkneCHbWwy9j/c5ZuKj9s/i4AAP75yOaRsRx3xk4V7GfzjHTm0hqVumJ1m9HuYooVz9z3w0faILsD+Zpvy/4vDzAFAurrhB0xUS3bSrrF8jnFyBvcHNw7xiwgniuk/CzOBYO3B8IQ8a7ord/XOKiQA/D6X/8S380JReUDXuA3oYKxHTamTWkxfFvDwg3/OSBF963PRp8ijj7wCx/0/jIc9zrcSe9+oFsFaWGTtDgx0WTsoP0aJURJV/7kf+mNwTTYMFd/5kvKXnb73AfcUdIK5NebVeDW5p0nr/8I1eo3z/+Eav/9xn/y9XBwo0LwAAA=", L3 = "data:image/webp;base64,UklGRiABAABXRUJQVlA4WAoAAAAQAAAAJwAAGQAAQUxQSBUAAAABD3D//4iIQDZpYz7v/9A9ov8Rdg4AVlA4IOQAAACwBgCdASooABoAPok4l0elI6IhNVgIAKARCWQAy30ALsA3lX9ZiNq3QBy0SeInqm9xedJr4q6SvfKYfN9QjAD+/i6i5H/i9CWQHcNMhFSYWc3MMEKpadN3RpXj/j/1JF3KQ9Uovmnex9f8iaZxl/A8GSzxWHYnTOlFtTF2X96ORtkAhe/7JB1W3Odi/FAX9zdk11ZCopY/gAuf5z8+//ukVxF3Ql1wbTH9TIDHqPGKp87/yQGTONpTNeHXvAn5+8JfuSIuLYW7HTAPQIPrUjb7R/i+BWyw3QNvjyl9/n/pXYWAAAA=", N3 = "data:image/webp;base64,UklGRiQBAABXRUJQVlA4IBgBAAAQBwCdASooABoAPoU2lUelIyIhNVv4AKAQiWwAuzPagJ7ANwBVANsBdme8okREL3XH0Auzy46MRveLb9iO6TEcAAD+yt2+ul9a0shCB//zRcPKmTQyIauzKnrlThwS2GJABUE2iS3j74jP8nSNt9YK5//mwIuLmgLqgzyKEBmuzrz+/srwmkN2Tw+Sv3gn57O+pKiYtsr+HLbuyLyKx5PnGuDTQRQgCpSj1Gfznxyqn3WPcDI5JoksBbvoKhKxqjGA8i4n/jqFIuiGmq6S8mRvrBXFBAJ9i/ZnF4j89qtjHfiy6LdoP98/UTnfop3y6tEKEwNX34z/bmeHT3negtHUYn3/qw7/E7GT4gP69lVpdSk7Uw6AAAAA", O3 = "data:image/webp;base64,UklGRqYBAABXRUJQVlA4IJoBAADQCACdASooABoAPpFAm0olo6IhpWswsBIJbADDY9b4A4wG4Y3h3eTEaCEA5OjOL9CbqATRL93FvitXUCsIf0SXpN/VlRvhbBEqIsP8b5wAAP77a+3N2M/ct0BF8mCR8oRucSzJBoODL43vMQYDUVDSrYZSTeWarXxZKb7fvibjG2LkYPe49asj13bj//4hxt5LebzIUP36kyXJf97obLg9S3IBj0hz6GUzdPyzNUqvUcaeIRdtN6CVMP7BqgW9tVxucnY+fyNRRj/Fs2KrcWZrikQyKdmMcWenO5zfk3W+KfWriKvRxFQFw5vUDn+3FX29+Lr0VtD2Ya2RyPetxn16Lmwtj9yQuek+LtLFn4f7yf8HnP0/O+++eUzZwkbWZ/lVdqEPERBfMIqimThbzIU42XTdOHOD8XDP1d04A6fvBSTMoubRIXpkOsxboJB6AtsaCfdbKJGi+86B9b/yrQI4mMc2vA7jtKNV8pqPASifz9SOkP4ljq/xruEiHmVHtzEJPeTVSWIm1Jf/D/Y9vTCcYSvLlN8b2c0AAA==", H3 = "data:image/webp;base64,UklGRnQBAABXRUJQVlA4IGgBAACQCQCdASooABoAPok0lkelIqIhNVv4AKARCWwAnTL//7+n8dHuDuAeIBuAP1r3qDJQP2m9CsmUP1436o3YTfU4jP0lf8RB7beujkwtSzEPjkQYloJAAP78E+0uPeu5MivX1K8sQ50cH4pVMCsIT3CykYUgPSd37JqEbxwHl5jWA9mUSMU/vlyupcmaVREb2o/Z0oYgckdk3sdLDUE8v9tLExYYhtN1r7J693B/3sy40FJW4P6OfxbYP/X4H16pw/qOYl4oDTOaVwWrAIPVYH5BcyUxtGWM0d4f1FOnk6Y06+gn6dBpWdvBXV2MVsa1Hx7LGq4vj6ecg5lfq9BfEH3hFUhaDJWLn04rTSWfbWV+qYfpik0Nz1RZYFlfujaAcQ/LuYQi77CsefBGlMDRvrdx3RVqhQeStV/fPx/YMyO83gsR6n0BfPI49RhMiYW7ILYHX08X7+p5FdThpq8Mr/DtnFn8krG8AAA=", T3 = "data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAAAwBACdASooABoAPoU2lUelIyIhNVv4AKAQiUAY3oQndABhNHAiDYJCkAAA/v1TVl2KxUl0/6mMmbv/H/9GBfX8h+Ef9GBfX4RPC5AiMdhctoV1u8xrXO2EgMZDMRzMa+xTx/JlMVXQ6cMoarPfgucPf6ng/xyomwmhBHKqzQAAAA==", F3 = "data:image/webp;base64,UklGRnwBAABXRUJQVlA4IHABAADQBwCdASooABoAPpE6l0eloyIhMBqqqLASCWwAsR+cxfkALsz55H2Gf249MAmbw/Px79+FUkfl7HmN+p41n9t2t5bWU8vf8AD++Qu3oxejM5ijyYyz/fOkipzSL2O0sZ078fwuN3AEBt/24v816EbP3vjGXFPgOysfOsTT/8D7mvxO8a5YrQ3uC83olWfh13bwfkzTHQZjLsreC1XmtQEr/kFLkpzNaFrtBSjGfdbb3TW/qSxAJbFpjH2Z+23cNnNcU1fL/uY/qtQhBMBBVsK89m/0wB7YFRUWezULOTf84eo/wnUupJvda9xzE3nBI5//UB+Jj8JSYX/9fOoALxhB8VCbKfDEOmxu/Nf5N+U5fy8yWcU7OQk5hN6cRPxPtgdLhNk1rGz7GPP/H37MtZcFXNVrN8x4UTiNGDycN9XOyOMR0LVwd23WJ2K2/PPTTVg01Bh/txxCvSVIzR0mRNm1B4DpWr97+fIK+wGDrzwAAA==", V3 = "data:image/webp;base64,UklGRhwBAABXRUJQVlA4IBABAAAwCACdASooABoAPpFGnkslo6KhpWgAsBIJbACDJUKeu/hL+QFXRXIP0AxQHnx3Zn/IOzjbwH8AYbQJ0hjIwX/j5XeVHj0dwYbegAD++Rf3QTbwzL5Soh7rbOstedEBYczF/OpwIZIJYTzVDoiFaNo1YA38/o95VT/+e+io+jn8qCVSPXSIiB7RpZWgnyWQCzmNvHCtgFBr//8dsp0Ovp9pGYzH/z6RV9ABKH9ceI2X1Jn648Rvp2BbVdP3JMNLP8OidtaxsAHd16jCxNkqBuoEZ0K3pp80vgd9gmqeRGGvteZcMs0bb2GxNm4g6ladlRo0GBobDmkOBf7I/lCJ3fMuXOkupMXA/4Gd39g6ZwAAAA==", z3 = "data:image/webp;base64,UklGRoQBAABXRUJQVlA4IHgBAAAQCACdASooABoAPpE6mEeloyKhKrgN+LASCWwAwQvWpcmET/XG6BpApkHjNfAIV/xMpAkK2HeKUSPES8v+mD85PCUmynTg25eAAP7+lDMZLWCDl/G8gOBu6d2pum7pyYIQ/clj8Ta0H+b9eAdC92wGyBS9hxoKhV0wy2uq/TtSUMfcaWec5HTe/HH/uJQFa1KorHVwB4k+YlTDct2S+M3OKFLZw0poB8u2sSUqy/Y3ivqUr8Oxb/vqg4RuZzo0uzb25iz8DA99QQhhdiQA4rZf24orz2I7bgfNxqAw+5HT211lSKWFxyFTO9z6bW1L9vrFSma/w4zA8WZM/RvYnVWSCTCrvz5tCkdYp2/TDqXlq8yHFg28pgOw1/+Di067MGvFZ0pe0c3smdSwBjoL7RDpf0Wdi89b9Et3ytK9tOIStZA4SDxmQfkZRlvdtY8HlFGWBxRsP69tFh67VOeR1u3rLlYOfR0DY08HanZiuurGUYmRFcgAAAAA", D3 = "data:image/webp;base64,UklGRiYBAABXRUJQVlA4IBoBAABQBgCdASooABoAPo04mkelIyKhMBqqqKARiWwAvgmN/gGmFrQGqdERIUo/etTyzbI86h3q942qLFo/AAD+/i7XiNLxGhL9pDmZ+/7zPHH9V8+B71AeXCDhcwFXyppAJ0LJin6hwEqe2R+ZktkMGhjQ+pU3nEGkDuVdy959TUD08VqfxTJOgv4Qx1fv7iN6JtXueXTrYCVvd9TGh/PCoMP0OwO+xhv09AdV//RgAgv+Fza0pdYJfkdNmradbYHt6tLg++P7/LxTqMrRlxR6ien1gc85l9x/CMEjVGXtkLWzcC8OsaNzhbClIHrHYzqLZqEpfoxiaDCQFvqmu+gILqmdx2PE40P9xKOP0X05Xj//HZMgHng1XH9sAAA=", U3 = "data:image/webp;base64,UklGRm4BAABXRUJQVlA4WAoAAAAQAAAAJwAAGQAAQUxQSBgAAAABF9D/iAiYadsmYza85rrdEf3PHsDUorNWUDggMAEAADAIAJ0BKigAGgA+jTaXR6UioiE1VAwAoBGJbAC1Gz3D567Jr/7lhSW9AdQBvIP2zEfuUXXJpt05xR/wZNJsXjdXARUwWn9TWo1AAP7YlJ53DvRdSiGXkhrdmS5X+n9/aH3lz79jqmmrjDs3/0JuMnu/RLe4V3w3vw39eT6zan//U4+hF3/pidbmHj8hYr16O5/4ZQF/AcsfSiAgd8mKvtl84U4dKKrmS5DzQFVtAP6jahd4MI2NS1O0LrWtO7SmxZvLuCZYVyBsnPCguDbM/+7dY6Dj8qOksEqZfg4+1X5rWfjI6ToCbP26zz/l1hApSdPDZbFPb7OWthNYUaBt+gfTRY1RkvQVN2cq74Gn0IW0bU8KXulYKNuy8dNv1cTc3807JjjsaLYmRi6l/i/gAAA=", j3 = "data:image/webp;base64,UklGRogBAABXRUJQVlA4IHwBAABQCQCdASooABoAPpFAl0glpCIhKrgN+LASCWwAnTL/9o+4cIZyd4geoDwQNsz/XT3zOjVyUPyaSZYOTrO4RSUSijIssVdhrSotw/5b38vUPmKYAAD+68n70V8aq51jlGNETLSmNkQP+s1fyWCMVvf/1lf8yLKvyotU/jKQfzjiLvXf9f/xNf7xKkDnqxjZDUfcsKx0YhPjOfJ4bHX/cklH+shpWG2fgtMl5WkwVOOSAuHHXQVHWm1hPaMfxSVW9nDz1as0AiJ5+1zg4a/sHPqWq6WMVzkeySinsT7mwmKw5rb5NGxvxCSg93RIVxPT/u8Coi8N2GicjNyaD4z5I/7fhrRZh3RtO25sXQQSBA54UxEomB+fJ1xcr4OZojIKIxBcj5B/z5x+cYgOA+l+YTMnqt3Z/Tn9T/TLyneu4EGsa9tNUGqbBBW6mc+fYNpFEPoPFOWuF8+kCCpkiLXP74i3/uPzf6SxcM5MVAVk1SP/aUX5vcR16wZoBdAAAA==", Z3 = "data:image/svg+xml,%3csvg%20width='50'%20height='40'%20viewBox='0%200%2050%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%20clip-path='url(%23clip0_1_3)'%3e%3crect%20width='50'%20height='40'%20fill='white'/%3e%3crect%20x='-1'%20width='52'%20height='34'%20fill='url(%23pattern0)'/%3e%3c/g%3e%3cdefs%3e%3cpattern%20id='pattern0'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_1_3'%20transform='scale(0.0192308%200.0294118)'/%3e%3c/pattern%3e%3cclipPath%20id='clip0_1_3'%3e%3crect%20width='50'%20height='40'%20fill='white'/%3e%3c/clipPath%3e%3cimage%20id='image0_1_3'%20width='52'%20height='34'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAiCAYAAAAQ9/ptAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAmtSURBVHgB1VlLbFTXGf7PeMYPbMOYhvIyYXirVcCDWqlJ1MDQkKpdBFiw6gJIQWpTCZLWrVpF4hFYpFVbmUe76AKMUbKoCvJj00gF2SCUphXUYyOVNLHjsZwUvz1gGw8zc+/p//33npvr8Yzr1M6iv318zz3P//tf57/Hir4AymQyMa11tKioqIZfk1zv4La2srKyBP0/UTabPWRZVg8/db7CffVTU1MR+gJJ0QIRM1vHmnidRgaIrjeTiv+VaGSQaFE50Zr1Wj+3W9HzuzE0wdraBW1Bk4FAYCe0ye1hLkkuzfPR5oIAYjAnmalT6kYTUcs7RFOPiYqCRLYm0hYp7tRKKdqyVetXjysGmQAwLjHMT+txLhNUrCq5VDiMKXWKTfZN+pw0b0AwoVAo1KPi75P6/RmtQyGi6nWKgiFnwPADUslR0hqbMbAt25T+6S8FxP3UVep68i5N2A88dlaEorSh+Du0seS7ABVnDe7iZ3Ku/ARpnsRgTkrlj38gzT/01MrPwICWfpnssRGRnAaL/+rU47ffVq1bW2nU+kiGAKzA4UEP0u3Un4nTpN1PNWWvRFn7jdy1i+ZIAZo/7VPt77MmBoQnSqem91pscvJDwjZAtYYvCpigCtGasjX01cVfoVVlK91ejNMUn7pM/0z9CVNiHFD20RxpXhpyI1ZY93ULw6KFkQFFtkVUXkn0hMElR4RR0Q7r4qOvZ9XoKlu0sqlyI60sXSlr4VkSKKXE44TBTh1T9WJ67FevMSgJGrZtJ4qLi+OFeFoIDZFENmHbtayxYaJPEqSG+rXKpE2zuFHX1zLetGUly6Yts7S4yhnlrKbTepJ97M94iXGp59LIPtXO4HoQiPKxMi8NlZaWJnlhoqfXE70HDwA7yrEaH0DxLWknGl2l3VGkP57sUZsrNslYPqmob6rPcSQnhMh6d4Yn1O1xpbseit3qDZVavVRNkfWL9Smce+YIWBBAiD4MKKGr10dsR7LKC2dsgZ/5jfMXz1RIi3EijvdOfEKDUyNUWlRCE9lJytgZgc3RXj1Or6C/d/1cDT7azrNsE41VJx9tTR8T7V5N9MNnVKQ8FGpl0/dAzdvk2KYbaMs20pu3cl2kry0bR48cQ8qytdQ1I9bsOotGi3icQqzgfkWPsykaffKI0tmstNs2p07ZCt16r44Gx2po65cUvbC6iJ5dEaDyAC/Ei+usTX/ptenNv9lgAcdGveFn3oCCweBZlmpCff8nZC9dThaDgLZ4Xy5azlbbYpCsEQDeMLCJ35XDvAVgTgyx+F27bf/o+pGanFxGm5cG6JllRVRdqWhdOEAvRoIOIBTepHPAorfvW2AjhqxjQQDB7FhLr6inllPwF78i2v6ckyAw95C2lr1ZY6WLSH3vB2rbN39LIapA6iCgBIRjghrKTKUrKPHgRWG6qnj6XuXFStpFUllLQDV+kDXdEtoXLJdz87J65jRif9BJ1v1O0nw2wZMDT6+jwAvfJoW8junTJ3FqGax1gjkczgkaLByth5Pb1O17bwlji0oCevfmMlVewsdbVtO9f6fpw8GM65NuzOHfKy+XqBUVgTinStuVy8xZZmZJLpPMXDObVBPNkXAu8aLIwZBwRnK627gNuVmMtXpyPNtPjQO1xE8nMroJX9/Atyj+4WvO/oxVcWd5cYDSrOlM1gkOUDiJCOToo1+/VErblhfhM+WcRDkGs3dsbCwSDodloWQySaizKXXQ5yA30hwy4FgYEd4kyU6b8OVjbel0OlkZXFF3YPU79GmqQw2lu5nhCVUZXE4D+hsUvy/OLvJnjHpiyiIHm6tKIveY1vJSEZKmMONY64XtlpYWOnz4sNR37NhBN27cEGz0P5ILLpGvj0/6swy4CdqsLovWrC6tiZq+NcVsgPY4QqPfHQSYr02lRvrovTe2y8sWEiuDAnolKDDScL6NGfEMQJC8KTQPAmAGdgh2z5pUzNA6ZujHFez4z1cXKXZ+7QQAVgqHaZW1lBPdbG0inaG1a9d6daOhaYCqqqpMNczm8To+wljF0Vy/4JMajzbuC+eu4VISDJsXPoTb842DQI1JwoxefbaMuocy1P/IEsdXTrYhFkhuPqKdk9yxNddVuD2RN1NYsmSJGbAP/gWf6ujokIJ6b2+vSCUSidDOnTtjRkJoTyQSZDapqamR6Mc+1GbuGcwaIMzH3Js3b3pC5fVoeWWAfvPyYvWzxiT1j1uUnXpEQ/fepdRon+JCpUvXoE3l8utZFL73T5w4gY9KKai7dwDtw8PDXnuhUldXJ+PZ77w21rK0IYK6e9TjnUF4Y7q7u/Xdu3dnzMG+5h5i/9G3dGjRkln3ZyGYvWKBQv7jaigCiSJIHD9+nK5e5S/Mri66c+eOvBs6ffo0GekabUELkDw07PrboStXrogWQXv37pWxRlt+SRtt1dbW0rXfvSEaAhk+UDDfEDTtETYrpKHZCqTrl5Jpz7cOSw6ZsY7FYl4ftJmrVSNplEuXLnnt0Co06d/f33/w4EFpY3+PBthpw8b+DfmjRi4ZyZsQn0u8uFe/deuWPHGQYn3XV0TS0OZsBG0aYsGIP+JgZn6rcscaftlXx4JuhJqVwAw2AEOGqQKU5MXDYNaMNQGkoaGB8oCGvXn7+6LrtH327NkjWQszfArviK5+U/WTl5z6B5gwCIIdb9y4UfwEm6DvwIEDdP36dW+MkRBv2mAYMNTc3CxPI3GMxXwW5GW8+y3D+FCutbj8yGc3zApPE039xGv2BoyGHj58OAMQmDh//ry3MEAMDQ3RxYsXpzmi7xzApm1g2BAyEIAyTMJ8XMaQ1/1X6zB8Ia3Bk01OokFnZ+c00IYCsy3qt+Nr164VtHtfdEL60QyAZiy0euHCBan72r2b0Xym49OK9EMgLCy5ZsaFJt4LmX6AGZCZ+VToZzR343yM4GBjO7+Mut/szOZoc6XZYFKnQr5w9OhRr75//34x/aampsiZM2foyJEjVJBMSM098HJDKko0GpVy7NixvOHWfDVyvTXfgeyu24Mx8AXMQcjNDb/QBOZjr3wHKXj1z2MXwLwxrIvUx0s5cjWDNvgLIhR8wEjTRCnjKwipfnLNLoYD0PgONONqR+6rje/69zV1fAFzxKvnAzwCsz937pznS9iTBTrN5ODPJhdUjAxXrftoJuGD7CbOEJoj8fhdyNuQfbCUx/KNQVYN/8EVFDl3bTOIHT+SSqUUr1VXgLcZhHsNnrdOQfX5ziJ8mOGG0r2Mj7r/8pB29pUEnrlz+DMgbiRlzM/dLIzxZk20mQ/AfMxBKKbufgXvM2sU2tus/R8u0ZdODarFFAAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e", B3 = "data:image/svg+xml,%3csvg%20width='127'%20height='34'%20viewBox='0%200%20127%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2021.9438V15.6826H2.40717C2.91244%2015.6826%203.36746%2015.7644%203.77224%2015.928C4.1799%2016.0888%204.51148%2016.3127%204.76698%2016.5998C5.02535%2016.884%205.222%2017.2142%205.35693%2017.5902C5.49473%2017.9634%205.56363%2018.3682%205.56363%2018.8046C5.56363%2019.752%205.27511%2020.5127%204.69808%2021.0869C4.12392%2021.6582%203.36028%2021.9438%202.40717%2021.9438H0ZM2.40717%2017.1811H1.71818V20.4453H2.40717C2.84641%2020.4453%203.1909%2020.2931%203.44066%2019.9888C3.6933%2019.6845%203.81961%2019.2898%203.81961%2018.8046C3.81961%2018.3137%203.6933%2017.9204%203.44066%2017.6247C3.18803%2017.329%202.84354%2017.1811%202.40717%2017.1811Z'%20fill='%23363636'/%3e%3cpath%20d='M8.16492%2021.9438V15.6826H9.8831V21.9438H8.16492Z'%20fill='%23363636'/%3e%3cpath%20d='M12.816%2021.9438V15.6826H15.6925C15.9882%2015.6826%2016.2696%2015.7457%2016.5365%2015.8721C16.8035%2015.9984%2017.0275%2016.1634%2017.2083%2016.3673C17.3892%2016.5711%2017.5327%2016.8036%2017.6389%2017.0649C17.7452%2017.3232%2017.7983%2017.5859%2017.7983%2017.8529C17.7983%2018.2146%2017.7179%2018.5534%2017.5571%2018.8692C17.3992%2019.185%2017.1796%2019.4419%2016.8983%2019.64L18.2203%2021.9438H16.3342L15.2318%2020.0232H14.5342V21.9438H12.816ZM14.5342%2018.5204H15.6193C15.7313%2018.5204%2015.8318%2018.4601%2015.9208%2018.3395C16.0098%2018.2161%2016.0543%2018.0539%2016.0543%2017.8529C16.0543%2017.652%2016.004%2017.4898%2015.9035%2017.3663C15.8031%2017.2429%2015.694%2017.1811%2015.5763%2017.1811H14.5342V18.5204Z'%20fill='%23363636'/%3e%3cpath%20d='M25.0804%2020.4453V21.9438H20.6192V15.6826H25.0029V17.1811H22.3374V18.0639H24.6153V19.4548H22.3374V20.4453H25.0804Z'%20fill='%23363636'/%3e%3cpath%20d='M27.7334%2021.9438V15.6826H29.4516V21.9438H27.7334Z'%20fill='%23363636'/%3e%3cpath%20d='M37.2591%2017.1811H35.4634V21.9438H33.7409V17.1811H31.9323V15.6826H37.2591V17.1811Z'%20fill='%23363636'/%3e%3cpath%20d='M39.292%2018.8046C39.292%2018.3941%2039.3723%2017.9979%2039.5331%2017.6161C39.6939%2017.2314%2039.9135%2016.8941%2040.192%2016.6041C40.4704%2016.3142%2040.8092%2016.0831%2041.2082%2015.9108C41.6101%2015.7357%2042.0379%2015.6481%2042.4915%2015.6481C42.9508%2015.6481%2043.3814%2015.74%2043.7833%2015.9237C44.1852%2016.1046%2044.5197%2016.3457%2044.7867%2016.6472C45.0565%2016.9457%2045.2675%2017.2859%2045.4197%2017.6677C45.5747%2018.0496%2045.6522%2018.44%2045.6522%2018.839C45.6522%2019.2467%2045.5718%2019.6414%2045.4111%2020.0232C45.2532%2020.4051%2045.035%2020.7424%2044.7565%2021.0352C44.4809%2021.3252%2044.1422%2021.5577%2043.7403%2021.7328C43.3384%2021.9079%2042.9106%2021.9955%2042.457%2021.9955C41.9977%2021.9955%2041.5671%2021.9051%2041.1652%2021.7242C40.7661%2021.5433%2040.4317%2021.3036%2040.1618%2021.0051C39.892%2020.7065%2039.6795%2020.3663%2039.5245%2019.9845C39.3695%2019.5998%2039.292%2019.2065%2039.292%2018.8046ZM42.4742%2020.4711C42.7125%2020.4711%2042.925%2020.4237%2043.1116%2020.329C43.301%2020.2314%2043.4518%2020.1022%2043.5637%2019.9414C43.6757%2019.7807%2043.7604%2019.6041%2043.8178%2019.4118C43.8752%2019.2194%2043.9039%2019.017%2043.9039%2018.8046C43.9039%2018.5118%2043.8522%2018.2448%2043.7489%2018.0036C43.6484%2017.7625%2043.4862%2017.5644%2043.2623%2017.4094C43.0412%2017.2515%2042.7757%2017.1725%2042.4656%2017.1725C42.2274%2017.1725%2042.0149%2017.2199%2041.8283%2017.3146C41.6417%2017.4094%2041.4924%2017.5357%2041.3805%2017.6936C41.2685%2017.8515%2041.1838%2018.0266%2041.1264%2018.2189C41.069%2018.4113%2041.0403%2018.6122%2041.0403%2018.8218C41.0403%2019.0371%2041.069%2019.2424%2041.1264%2019.4376C41.1867%2019.6299%2041.2742%2019.8051%2041.3891%2019.963C41.5039%2020.118%2041.6546%2020.2414%2041.8412%2020.3333C42.0278%2020.4252%2042.2388%2020.4711%2042.4742%2020.4711Z'%20fill='%23363636'/%3e%3cpath%20d='M51.9741%2017.728C51.9483%2017.7137%2051.9138%2017.6936%2051.8707%2017.6677C51.8277%2017.6419%2051.7401%2017.596%2051.6081%2017.5299C51.476%2017.4639%2051.3468%2017.4065%2051.2205%2017.3577C51.0942%2017.306%2050.9463%2017.2601%2050.777%2017.2199C50.6105%2017.1768%2050.4569%2017.1553%2050.3162%2017.1553C49.9803%2017.1553%2049.8124%2017.2587%2049.8124%2017.4654C49.8124%2017.5113%2049.8196%2017.5529%2049.8339%2017.5902C49.8511%2017.6276%2049.8798%2017.662%2049.92%2017.6936C49.9602%2017.7252%2049.999%2017.7524%2050.0363%2017.7754C50.0765%2017.7984%2050.1368%2017.8242%2050.2172%2017.8529C50.2975%2017.8816%2050.3664%2017.9046%2050.4239%2017.9218C50.4813%2017.939%2050.5688%2017.9663%2050.6865%2018.0036C50.8042%2018.0381%2050.9004%2018.0668%2050.9751%2018.0898C51.2277%2018.1673%2051.4416%2018.2433%2051.6167%2018.318C51.7947%2018.3926%2051.9669%2018.4845%2052.1334%2018.5936C52.2999%2018.6998%2052.4334%2018.8175%2052.5339%2018.9467C52.6344%2019.0759%2052.7133%2019.2323%2052.7707%2019.4161C52.831%2019.5969%2052.8612%2019.8022%2052.8612%2020.0319C52.8612%2020.3218%2052.8152%2020.583%2052.7234%2020.8156C52.6315%2021.0481%2052.5095%2021.239%2052.3573%2021.3883C52.2081%2021.5347%2052.0286%2021.6567%2051.8191%2021.7543C51.6095%2021.8519%2051.3942%2021.9208%2051.1731%2021.961C50.955%2022.0012%2050.7239%2022.0213%2050.4798%2022.0213C50.0291%2022.0213%2049.5569%2021.9553%2049.0631%2021.8232C48.5693%2021.6883%2048.1344%2021.5103%2047.7583%2021.2893L48.499%2019.7821C48.5277%2019.8022%2048.5664%2019.828%2048.6152%2019.8596C48.6669%2019.8883%2048.7703%2019.9429%2048.9253%2020.0232C49.0832%2020.1008%2049.2382%2020.1697%2049.3904%2020.2299C49.5425%2020.2902%2049.7219%2020.3462%2049.9286%2020.3979C50.1382%2020.4467%2050.332%2020.4711%2050.51%2020.4711C50.843%2020.4711%2051.0095%2020.3792%2051.0095%2020.1955C51.0095%2020.1266%2050.988%2020.0663%2050.9449%2020.0146C50.9018%2019.9601%2050.8301%2019.9113%2050.7296%2019.8682C50.6291%2019.8223%2050.5315%2019.785%2050.4368%2019.7563C50.3449%2019.7247%2050.2129%2019.6845%2050.0406%2019.6357C49.8712%2019.584%2049.7306%2019.5395%2049.6186%2019.5022C49.0559%2019.3127%2048.6497%2019.0859%2048.3999%2018.8218C48.153%2018.5548%2048.0296%2018.196%2048.0296%2017.7453C48.0296%2017.4094%2048.0928%2017.1051%2048.2191%2016.8323C48.3483%2016.5596%2048.5205%2016.3371%2048.7358%2016.1649C48.954%2015.9926%2049.2023%2015.8606%2049.4808%2015.7687C49.7593%2015.6768%2050.055%2015.6309%2050.3679%2015.6309C51.0368%2015.6309%2051.8191%2015.8563%2052.7148%2016.307L51.9741%2017.728Z'%20fill='%23363636'/%3e%3cpath%20d='M64.8461%2015.6826V21.9438H63.1279V19.4936H61.0264V21.9438H59.3083V15.6826H61.0264V17.9907H63.1279V15.6826H64.8461Z'%20fill='%23363636'/%3e%3cpath%20d='M70.5091%2021.9955C70.1186%2021.9955%2069.7641%2021.9409%2069.4454%2021.8319C69.1296%2021.7228%2068.8627%2021.5735%2068.6445%2021.384C68.4292%2021.1945%2068.2483%2020.9677%2068.1019%2020.7036C67.9555%2020.4395%2067.8493%2020.1582%2067.7832%2019.8596C67.7172%2019.5582%2067.6842%2019.2381%2067.6842%2018.8993V15.6826H69.4067V18.8993C69.4067%2019.1146%2069.4268%2019.3142%2069.467%2019.4979C69.51%2019.6816%2069.5732%2019.8481%2069.6564%2019.9974C69.7426%2020.1438%2069.8574%2020.2601%2070.0009%2020.3462C70.1473%2020.4295%2070.3167%2020.4711%2070.5091%2020.4711C70.7043%2020.4711%2070.8751%2020.428%2071.0215%2020.3419C71.1679%2020.2558%2071.2828%2020.1381%2071.366%2019.9888C71.4521%2019.8366%2071.5153%2019.6701%2071.5555%2019.4893C71.5985%2019.3055%2071.6201%2019.1089%2071.6201%2018.8993V15.6826H73.3383V18.8993C73.3383%2019.3443%2073.2808%2019.752%2073.166%2020.1223C73.0512%2020.4926%2072.8804%2020.8185%2072.6536%2021.0998C72.4296%2021.3811%2072.1339%2021.6008%2071.7665%2021.7586C71.4019%2021.9165%2070.9828%2021.9955%2070.5091%2021.9955Z'%20fill='%23363636'/%3e%3cpath%20d='M80.9175%2021.9438V18.6453L79.8668%2020.9663H78.9496L77.8989%2018.6453V21.9438H76.1807V15.6826H78.0582L79.4061%2018.628L80.7668%2015.6826H82.6357V21.9438H80.9175Z'%20fill='%23363636'/%3e%3cpath%20d='M87.0069%2015.6826H88.9274L90.9212%2021.9438H89.1772L88.7982%2020.7165H87.1274L86.7571%2021.9438H85.0045L87.0069%2015.6826ZM88.5227%2019.5711L87.9671%2017.3663L87.3858%2019.5711H88.5227Z'%20fill='%23363636'/%3e%3cpath%20d='M95.0125%2018.8649V21.9438H93.2943V15.6826H94.6335L97.1483%2018.8649V15.6826H98.8665V21.9438H97.5014L95.0125%2018.8649Z'%20fill='%23363636'/%3e%3cpath%20d='M101.451%2018.8046C101.451%2018.3941%20101.531%2017.9979%20101.692%2017.6161C101.852%2017.2314%20102.072%2016.8941%20102.351%2016.6041C102.629%2016.3142%20102.968%2016.0831%20103.367%2015.9108C103.769%2015.7357%20104.197%2015.6481%20104.65%2015.6481C105.109%2015.6481%20105.54%2015.74%20105.942%2015.9237C106.344%2016.1046%20106.678%2016.3457%20106.945%2016.6472C107.215%2016.9457%20107.426%2017.2859%20107.578%2017.6677C107.733%2018.0496%20107.811%2018.44%20107.811%2018.839C107.811%2019.2467%20107.73%2019.6414%20107.57%2020.0232C107.412%2020.4051%20107.194%2020.7424%20106.915%2021.0352C106.64%2021.3252%20106.301%2021.5577%20105.899%2021.7328C105.497%2021.9079%20105.069%2021.9955%20104.616%2021.9955C104.156%2021.9955%20103.726%2021.9051%20103.324%2021.7242C102.925%2021.5433%20102.59%2021.3036%20102.32%2021.0051C102.051%2020.7065%20101.838%2020.3663%20101.683%2019.9845C101.528%2019.5998%20101.451%2019.2065%20101.451%2018.8046ZM104.633%2020.4711C104.871%2020.4711%20105.084%2020.4237%20105.27%2020.329C105.46%2020.2314%20105.61%2020.1022%20105.722%2019.9414C105.834%2019.7807%20105.919%2019.6041%20105.976%2019.4118C106.034%2019.2194%20106.063%2019.017%20106.063%2018.8046C106.063%2018.5118%20106.011%2018.2448%20105.908%2018.0036C105.807%2017.7625%20105.645%2017.5644%20105.421%2017.4094C105.2%2017.2515%20104.934%2017.1725%20104.624%2017.1725C104.386%2017.1725%20104.174%2017.2199%20103.987%2017.3146C103.8%2017.4094%20103.651%2017.5357%20103.539%2017.6936C103.427%2017.8515%20103.342%2018.0266%20103.285%2018.2189C103.228%2018.4113%20103.199%2018.6122%20103.199%2018.8218C103.199%2019.0371%20103.228%2019.2424%20103.285%2019.4376C103.345%2019.6299%20103.433%2019.8051%20103.548%2019.963C103.663%2020.118%20103.813%2020.2414%20104%2020.3333C104.186%2020.4252%20104.397%2020.4711%20104.633%2020.4711Z'%20fill='%23363636'/%3e%3cpath%20d='M114.133%2017.728C114.107%2017.7137%20114.072%2017.6936%20114.029%2017.6677C113.986%2017.6419%20113.899%2017.596%20113.767%2017.5299C113.635%2017.4639%20113.505%2017.4065%20113.379%2017.3577C113.253%2017.306%20113.105%2017.2601%20112.936%2017.2199C112.769%2017.1768%20112.616%2017.1553%20112.475%2017.1553C112.139%2017.1553%20111.971%2017.2587%20111.971%2017.4654C111.971%2017.5113%20111.978%2017.5529%20111.993%2017.5902C112.01%2017.6276%20112.038%2017.662%20112.079%2017.6936C112.119%2017.7252%20112.158%2017.7524%20112.195%2017.7754C112.235%2017.7984%20112.295%2017.8242%20112.376%2017.8529C112.456%2017.8816%20112.525%2017.9046%20112.582%2017.9218C112.64%2017.939%20112.727%2017.9663%20112.845%2018.0036C112.963%2018.0381%20113.059%2018.0668%20113.134%2018.0898C113.386%2018.1673%20113.6%2018.2433%20113.775%2018.318C113.953%2018.3926%20114.126%2018.4845%20114.292%2018.5936C114.459%2018.6998%20114.592%2018.8175%20114.693%2018.9467C114.793%2019.0759%20114.872%2019.2323%20114.929%2019.4161C114.99%2019.5969%20115.02%2019.8022%20115.02%2020.0319C115.02%2020.3218%20114.974%2020.583%20114.882%2020.8156C114.79%2021.0481%20114.668%2021.239%20114.516%2021.3883C114.367%2021.5347%20114.187%2021.6567%20113.978%2021.7543C113.768%2021.8519%20113.553%2021.9208%20113.332%2021.961C113.114%2022.0012%20112.882%2022.0213%20112.638%2022.0213C112.188%2022.0213%20111.716%2021.9553%20111.222%2021.8232C110.728%2021.6883%20110.293%2021.5103%20109.917%2021.2893L110.658%2019.7821C110.686%2019.8022%20110.725%2019.828%20110.774%2019.8596C110.826%2019.8883%20110.929%2019.9429%20111.084%2020.0232C111.242%2020.1008%20111.397%2020.1697%20111.549%2020.2299C111.701%2020.2902%20111.881%2020.3462%20112.087%2020.3979C112.297%2020.4467%20112.491%2020.4711%20112.669%2020.4711C113.002%2020.4711%20113.168%2020.3792%20113.168%2020.1955C113.168%2020.1266%20113.147%2020.0663%20113.104%2020.0146C113.06%2019.9601%20112.989%2019.9113%20112.888%2019.8682C112.788%2019.8223%20112.69%2019.785%20112.595%2019.7563C112.504%2019.7247%20112.371%2019.6845%20112.199%2019.6357C112.03%2019.584%20111.889%2019.5395%20111.777%2019.5022C111.215%2019.3127%20110.808%2019.0859%20110.559%2018.8218C110.312%2018.5548%20110.188%2018.196%20110.188%2017.7453C110.188%2017.4094%20110.251%2017.1051%20110.378%2016.8323C110.507%2016.5596%20110.679%2016.3371%20110.894%2016.1649C111.113%2015.9926%20111.361%2015.8606%20111.639%2015.7687C111.918%2015.6768%20112.214%2015.6309%20112.527%2015.6309C113.195%2015.6309%20113.978%2015.8563%20114.873%2016.307L114.133%2017.728Z'%20fill='%23363636'/%3e%3cpath%20d='M125.928%2020.4453V21.9438H121.467V15.6826H125.851V17.1811H123.185V18.0639H125.463V19.4548H123.185V20.4453H125.928Z'%20fill='%23363636'/%3e%3cpath%20d='M44.6058%2033.9438V27.6826H47.013C47.5183%2027.6826%2047.9733%2027.7644%2048.3781%2027.928C48.7857%2028.0888%2049.1173%2028.3127%2049.3728%2028.5998C49.6312%2028.884%2049.8278%2029.2142%2049.9628%2029.5902C50.1006%2029.9634%2050.1695%2030.3682%2050.1695%2030.8046C50.1695%2031.752%2049.8809%2032.5127%2049.3039%2033.0869C48.7297%2033.6582%2047.9661%2033.9438%2047.013%2033.9438H44.6058ZM47.013%2029.1811H46.324V32.4453H47.013C47.4522%2032.4453%2047.7967%2032.2931%2048.0465%2031.9888C48.2991%2031.6845%2048.4254%2031.2898%2048.4254%2030.8046C48.4254%2030.3137%2048.2991%2029.9204%2048.0465%2029.6247C47.7939%2029.329%2047.4494%2029.1811%2047.013%2029.1811Z'%20fill='%23363636'/%3e%3cpath%20d='M53.9593%2027.6826H55.8798L57.8736%2033.9438H56.1296L55.7506%2032.7165H54.0798L53.7095%2033.9438H51.9569L53.9593%2027.6826ZM55.475%2031.5711L54.9195%2029.3663L54.3382%2031.5711H55.475Z'%20fill='%23363636'/%3e%3cpath%20d='M66.6676%2027.6481C67.2561%2027.6481%2067.7757%2027.7716%2068.2264%2028.0185C68.6772%2028.2654%2069.013%2028.5969%2069.2341%2029.0132L67.9207%2029.9476C67.8633%2029.8012%2067.7858%2029.6764%2067.6882%2029.573C67.5906%2029.4668%2067.4815%2029.3864%2067.3609%2029.3319C67.2403%2029.2744%2067.1197%2029.2343%2066.9992%2029.2113C66.8815%2029.1854%2066.7595%2029.1725%2066.6331%2029.1725C66.3977%2029.1725%2066.1867%2029.2213%2066.0001%2029.3189C65.8135%2029.4137%2065.6642%2029.5414%2065.5523%2029.7022C65.4432%2029.8601%2065.3599%2030.0338%2065.3025%2030.2232C65.2451%2030.4127%2065.2164%2030.6094%2065.2164%2030.8132C65.2164%2031.2697%2065.347%2031.6601%2065.6083%2031.9845C65.8695%2032.3089%2066.2169%2032.4711%2066.6504%2032.4711C66.8197%2032.4711%2066.9819%2032.4481%2067.137%2032.4022C67.292%2032.3534%2067.4398%2032.2701%2067.5805%2032.1524C67.724%2032.0319%2067.8288%2031.8826%2067.8949%2031.7046L69.2987%2032.54C69.181%2032.8357%2068.9743%2033.0969%2068.6786%2033.3237C68.3858%2033.5505%2068.0599%2033.7199%2067.7011%2033.8319C67.3422%2033.9409%2066.9805%2033.9955%2066.6159%2033.9955C66.1681%2033.9955%2065.7446%2033.9022%2065.3456%2033.7156C64.9494%2033.529%2064.615%2033.285%2064.3422%2032.9835C64.0724%2032.6792%2063.8585%2032.3333%2063.7006%2031.9457C63.5456%2031.5553%2063.4681%2031.1606%2063.4681%2030.7615C63.4681%2030.3768%2063.5413%2030.0008%2063.6877%2029.6333C63.837%2029.263%2064.0437%2028.9299%2064.3078%2028.6343C64.5748%2028.3386%2064.9135%2028.1003%2065.3241%2027.9194C65.7346%2027.7386%2066.1824%2027.6481%2066.6676%2027.6481Z'%20fill='%23363636'/%3e%3cpath%20d='M71.7622%2033.9438V27.6826H73.4804V33.9438H71.7622Z'%20fill='%23363636'/%3e%3cpath%20d='M76.4132%2033.9438V27.6826H78.8204C79.3257%2027.6826%2079.7807%2027.7644%2080.1855%2027.928C80.5931%2028.0888%2080.9247%2028.3127%2081.1802%2028.5998C81.4386%2028.884%2081.6352%2029.2142%2081.7702%2029.5902C81.908%2029.9634%2081.9769%2030.3682%2081.9769%2030.8046C81.9769%2031.752%2081.6884%2032.5127%2081.1113%2033.0869C80.5372%2033.6582%2079.7735%2033.9438%2078.8204%2033.9438H76.4132ZM78.8204%2029.1811H78.1314V32.4453H78.8204C79.2596%2032.4453%2079.6041%2032.2931%2079.8539%2031.9888C80.1065%2031.6845%2080.2328%2031.2898%2080.2328%2030.8046C80.2328%2030.3137%2080.1065%2029.9204%2079.8539%2029.6247C79.6013%2029.329%2079.2568%2029.1811%2078.8204%2029.1811Z'%20fill='%23363636'/%3e%3cpath%20d='M85.7667%2027.6826H87.6873L89.681%2033.9438H87.937L87.5581%2032.7165H85.8873L85.5169%2033.9438H83.7643L85.7667%2027.6826ZM87.2825%2031.5711L86.727%2029.3663L86.1456%2031.5711H87.2825Z'%20fill='%23363636'/%3e%3cpath%20d='M92.0541%2033.9438V27.6826H94.4613C94.9665%2027.6826%2095.4215%2027.7644%2095.8263%2027.928C96.234%2028.0888%2096.5656%2028.3127%2096.8211%2028.5998C97.0794%2028.884%2097.2761%2029.2142%2097.411%2029.5902C97.5488%2029.9634%2097.6177%2030.3682%2097.6177%2030.8046C97.6177%2031.752%2097.3292%2032.5127%2096.7522%2033.0869C96.178%2033.6582%2095.4144%2033.9438%2094.4613%2033.9438H92.0541ZM94.4613%2029.1811H93.7723V32.4453H94.4613C94.9005%2032.4453%2095.245%2032.2931%2095.4948%2031.9888C95.7474%2031.6845%2095.8737%2031.2898%2095.8737%2030.8046C95.8737%2030.3137%2095.7474%2029.9204%2095.4948%2029.6247C95.2421%2029.329%2094.8976%2029.1811%2094.4613%2029.1811Z'%20fill='%23363636'/%3e%3cpath%20d='M101.408%2027.6826H103.328L105.322%2033.9438H103.578L103.199%2032.7165H101.528L101.158%2033.9438H99.4051L101.408%2027.6826ZM102.923%2031.5711L102.368%2029.3663L101.786%2031.5711H102.923Z'%20fill='%23363636'/%3e%3cpath%20d='M109.413%2030.8649V33.9438H107.695V27.6826H109.034L111.549%2030.8649V27.6826H113.267V33.9438H111.902L109.413%2030.8649Z'%20fill='%23363636'/%3e%3cpath%20d='M116.196%2033.9438V27.6826H117.914V33.9438H116.196Z'%20fill='%23363636'/%3e%3cpath%20d='M122.294%2027.6826H124.214L126.208%2033.9438H124.464L124.085%2032.7165H122.414L122.044%2033.9438H120.291L122.294%2027.6826ZM123.809%2031.5711L123.254%2029.3663L122.673%2031.5711H123.809Z'%20fill='%23363636'/%3e%3cpath%20d='M36.4053%209.00002V4.53878L34.5622%207.92347H33.9809L32.1292%204.53878V9.00002H31.1431V2.73879H32.2024L34.2737%206.56701L36.345%202.73879H37.4043V9.00002H36.4053Z'%20fill='%23363636'/%3e%3cpath%20d='M40.7129%209.00002V2.73879H41.699V9.00002H40.7129Z'%20fill='%23363636'/%3e%3cpath%20d='M45.998%204.57323V9.00002H45.0119V2.73879H45.8214L49.3698%207.26462V2.7474H50.3645V9.00002H49.4989L45.998%204.57323Z'%20fill='%23363636'/%3e%3cpath%20d='M53.6687%209.00002V2.73879H54.6549V9.00002H53.6687Z'%20fill='%23363636'/%3e%3cpath%20d='M61.6711%204.21151C61.5361%204.06223%2061.3065%203.91869%2060.9821%203.78089C60.6577%203.64309%2060.3232%203.57419%2059.9787%203.57419C59.5711%203.57419%2059.2653%203.65027%2059.0615%203.80242C58.8605%203.9517%2058.7601%204.16414%2058.7601%204.43974C58.7601%204.52586%2058.7715%204.60338%2058.7945%204.67227C58.8175%204.74117%2058.8462%204.8029%2058.8806%204.85744C58.9179%204.90912%2058.9725%204.95936%2059.0443%205.00816C59.116%205.05696%2059.1864%205.09859%2059.2553%205.13304C59.327%205.16749%2059.4232%205.20481%2059.5438%205.245C59.6672%205.28232%2059.7821%205.31534%2059.8883%205.34404C59.9945%205.36988%2060.1337%205.40433%2060.306%205.44739C60.5816%205.51342%2060.817%205.57945%2061.0122%205.64548C61.2074%205.70864%2061.3955%205.79045%2061.5763%205.89093C61.7572%205.98854%2061.9022%206.09907%2062.0112%206.22251C62.1203%206.34309%2062.2065%206.49093%2062.2696%206.66605C62.3356%206.84117%2062.3687%207.04069%2062.3687%207.26462C62.3687%207.51438%2062.3285%207.73973%2062.2481%207.94069C62.1706%208.14165%2062.0629%208.31102%2061.9251%208.44882C61.7873%208.58662%2061.6208%208.70289%2061.4256%208.79763C61.2304%208.88949%2061.0208%208.95696%2060.7969%209.00002C60.573%209.04021%2060.3318%209.06031%2060.0734%209.06031C59.5969%209.06031%2059.1361%208.98854%2058.6912%208.845C58.2462%208.69858%2057.8457%208.48902%2057.4897%208.21629L57.9419%207.36796C58.1227%207.55457%2058.417%207.73543%2058.8246%207.91055C59.2352%208.0828%2059.6572%208.16892%2060.0907%208.16892C60.4811%208.16892%2060.7811%208.10002%2060.9907%207.96222C61.2031%207.82442%2061.3093%207.62634%2061.3093%207.36796C61.3093%207.26462%2061.2935%207.17131%2061.262%207.08806C61.2304%207.00481%2061.1758%206.93017%2061.0983%206.86414C61.0208%206.79524%2060.9404%206.73639%2060.8572%206.68758C60.7768%206.63878%2060.6605%206.58854%2060.5084%206.53687C60.3591%206.48519%2060.2213%206.44213%2060.095%206.40768C59.9715%206.37323%2059.8036%206.32873%2059.5912%206.27419C59.261%206.18806%2058.9883%206.1005%2058.773%206.01151C58.5577%205.92251%2058.3668%205.81342%2058.2002%205.68424C58.0366%205.55505%2057.9175%205.4029%2057.8428%205.22778C57.7682%205.04979%2057.7309%204.84022%2057.7309%204.59907C57.7309%204.29763%2057.7883%204.02634%2057.9031%203.7852C58.0208%203.54118%2058.1816%203.34022%2058.3854%203.18233C58.5892%203.02443%2058.829%202.90386%2059.1045%202.8206C59.3801%202.73735%2059.6801%202.69572%2060.0045%202.69572C60.7739%202.69572%2061.4787%202.93113%2062.1189%203.40194L61.6711%204.21151Z'%20fill='%23363636'/%3e%3cpath%20d='M69.8499%203.61295H67.77V9.00002H66.771V3.61295H64.6825V2.73879H69.8499V3.61295Z'%20fill='%23363636'/%3e%3cpath%20d='M75.1264%202.09285L74.4891%201.89907L74.9929%200.930176H75.9188L75.1264%202.09285ZM76.879%208.12586V9.00002H72.5858V2.73879H76.8015V3.61295H73.5719V5.39141H76.3666V6.2139H73.5719V8.12586H76.879Z'%20fill='%23363636'/%3e%3cpath%20d='M79.7957%209.00002V2.73879H82.5216C82.7943%202.73879%2083.0527%202.79764%2083.2967%202.91534C83.5436%203.03304%2083.7503%203.18807%2083.9168%203.38041C84.0833%203.57276%2084.2153%203.79094%2084.313%204.03496C84.4106%204.27897%2084.4594%204.52586%2084.4594%204.77562C84.4594%205.2005%2084.3474%205.58519%2084.1235%205.92969C83.8996%206.27132%2083.6039%206.50098%2083.2364%206.61868L84.7091%209.00002H83.5981L82.2374%206.82107H80.7819V9.00002H79.7957ZM80.7819%205.94691H82.513C82.7857%205.94691%2083.011%205.83352%2083.189%205.60672C83.367%205.37706%2083.456%205.10003%2083.456%204.77562C83.456%204.45696%2083.3555%204.18424%2083.1546%203.95744C82.9536%203.72778%2082.7211%203.61295%2082.457%203.61295H80.7819V5.94691Z'%20fill='%23363636'/%3e%3cpath%20d='M87.5225%209.00002V2.73879H88.5086V9.00002H87.5225Z'%20fill='%23363636'/%3e%3cpath%20d='M91.4253%205.8694C91.4253%205.45601%2091.5013%205.05696%2091.6535%204.67227C91.8085%204.28472%2092.0181%203.94596%2092.2822%203.65601C92.5463%203.36606%2092.8664%203.13352%2093.2425%202.9584C93.6186%202.78328%2094.0176%202.69572%2094.4396%202.69572C94.8731%202.69572%2095.2793%202.78759%2095.6583%202.97132C96.0372%203.15505%2096.353%203.39764%2096.6056%203.69907C96.8611%203.99763%2097.0621%204.33783%2097.2085%204.71964C97.3549%205.09859%2097.4281%205.48471%2097.4281%205.87801C97.4281%206.29141%2097.3506%206.69045%2097.1956%207.07514C97.0434%207.45983%2096.8367%207.79715%2096.5755%208.0871C96.3142%208.37705%2095.9956%208.60959%2095.6195%208.78471C95.2434%208.95696%2094.8444%209.04308%2094.4224%209.04308C94.0722%209.04308%2093.7391%208.98566%2093.4233%208.87083C93.1076%208.75313%2092.8291%208.59236%2092.5879%208.38854C92.3497%208.18471%2092.1415%207.9493%2091.9635%207.68232C91.7884%207.41533%2091.6549%207.12682%2091.5631%206.81677C91.4712%206.50385%2091.4253%206.18806%2091.4253%205.8694ZM94.431%208.15169C94.7353%208.15169%2095.0152%208.08567%2095.2707%207.95361C95.5262%207.82155%2095.7358%207.64787%2095.8994%207.43256C96.063%207.21438%2096.1894%206.97036%2096.2784%206.7005C96.3702%206.43064%2096.4162%206.15361%2096.4162%205.8694C96.4162%205.57371%2096.3674%205.2895%2096.2697%205.01677C96.175%204.74117%2096.043%204.49859%2095.8736%204.28902C95.7071%204.07658%2095.4975%203.90864%2095.2449%203.7852C94.9951%203.65888%2094.7238%203.59572%2094.431%203.59572C94.1267%203.59572%2093.8453%203.66175%2093.587%203.79381C93.3315%203.92299%2093.1205%204.09524%2092.954%204.31055C92.7875%204.52586%2092.6583%204.76845%2092.5664%205.0383C92.4745%205.30816%2092.4286%205.58519%2092.4286%205.8694C92.4286%206.26557%2092.5076%206.63591%2092.6655%206.9804C92.8262%207.3249%2093.0616%207.60624%2093.3717%207.82442C93.6817%208.0426%2094.0348%208.15169%2094.431%208.15169Z'%20fill='%23363636'/%3e%3cpath%20d='M104.424%209.00002V2.73879H106.646C107.137%202.73879%20107.578%202.8206%20107.968%202.98424C108.361%203.145%20108.683%203.36893%20108.933%203.65601C109.183%203.94022%20109.372%204.27036%20109.501%204.64644C109.633%205.01964%20109.699%205.42443%20109.699%205.86079C109.699%206.80816%20109.421%207.56892%20108.864%208.14308C108.31%208.71437%20107.571%209.00002%20106.646%209.00002H104.424ZM106.646%203.61295H105.41V8.12586H106.646C107.077%208.12586%20107.447%208.02681%20107.757%207.82873C108.07%207.62777%20108.304%207.35792%20108.459%207.01916C108.614%206.68041%20108.692%206.29428%20108.692%205.86079C108.692%205.19189%20108.509%204.65074%20108.145%204.23735C107.783%203.82108%20107.283%203.61295%20106.646%203.61295Z'%20fill='%23363636'/%3e%3cpath%20d='M112.237%205.8694C112.237%205.45601%20112.313%205.05696%20112.465%204.67227C112.62%204.28472%20112.83%203.94596%20113.094%203.65601C113.358%203.36606%20113.678%203.13352%20114.054%202.9584C114.43%202.78328%20114.829%202.69572%20115.251%202.69572C115.685%202.69572%20116.091%202.78759%20116.47%202.97132C116.849%203.15505%20117.165%203.39764%20117.417%203.69907C117.673%203.99763%20117.874%204.33783%20118.02%204.71964C118.167%205.09859%20118.24%205.48471%20118.24%205.87801C118.24%206.29141%20118.162%206.69045%20118.007%207.07514C117.855%207.45983%20117.648%207.79715%20117.387%208.0871C117.126%208.37705%20116.807%208.60959%20116.431%208.78471C116.055%208.95696%20115.656%209.04308%20115.234%209.04308C114.884%209.04308%20114.551%208.98566%20114.235%208.87083C113.919%208.75313%20113.641%208.59236%20113.4%208.38854C113.161%208.18471%20112.953%207.9493%20112.775%207.68232C112.6%207.41533%20112.467%207.12682%20112.375%206.81677C112.283%206.50385%20112.237%206.18806%20112.237%205.8694ZM115.243%208.15169C115.547%208.15169%20115.827%208.08567%20116.082%207.95361C116.338%207.82155%20116.548%207.64787%20116.711%207.43256C116.875%207.21438%20117.001%206.97036%20117.09%206.7005C117.182%206.43064%20117.228%206.15361%20117.228%205.8694C117.228%205.57371%20117.179%205.2895%20117.082%205.01677C116.987%204.74117%20116.855%204.49859%20116.685%204.28902C116.519%204.07658%20116.309%203.90864%20116.057%203.7852C115.807%203.65888%20115.536%203.59572%20115.243%203.59572C114.938%203.59572%20114.657%203.66175%20114.399%203.79381C114.143%203.92299%20113.932%204.09524%20113.766%204.31055C113.599%204.52586%20113.47%204.76845%20113.378%205.0383C113.286%205.30816%20113.24%205.58519%20113.24%205.8694C113.24%206.26557%20113.319%206.63591%20113.477%206.9804C113.638%207.3249%20113.873%207.60624%20114.183%207.82442C114.493%208.0426%20114.847%208.15169%20115.243%208.15169Z'%20fill='%23363636'/%3e%3cpath%20d='M124.856%204.21151C124.721%204.06223%20124.491%203.91869%20124.167%203.78089C123.842%203.64309%20123.508%203.57419%20123.163%203.57419C122.756%203.57419%20122.45%203.65027%20122.246%203.80242C122.045%203.9517%20121.945%204.16414%20121.945%204.43974C121.945%204.52586%20121.956%204.60338%20121.979%204.67227C122.002%204.74117%20122.031%204.8029%20122.065%204.85744C122.102%204.90912%20122.157%204.95936%20122.229%205.00816C122.301%205.05696%20122.371%205.09859%20122.44%205.13304C122.512%205.16749%20122.608%205.20481%20122.728%205.245C122.852%205.28232%20122.967%205.31534%20123.073%205.34404C123.179%205.36988%20123.318%205.40433%20123.491%205.44739C123.766%205.51342%20124.002%205.57945%20124.197%205.64548C124.392%205.70864%20124.58%205.79045%20124.761%205.89093C124.942%205.98854%20125.087%206.09907%20125.196%206.22251C125.305%206.34309%20125.391%206.49093%20125.454%206.66605C125.52%206.84117%20125.553%207.04069%20125.553%207.26462C125.553%207.51438%20125.513%207.73973%20125.433%207.94069C125.355%208.14165%20125.247%208.31102%20125.11%208.44882C124.972%208.58662%20124.805%208.70289%20124.61%208.79763C124.415%208.88949%20124.205%208.95696%20123.981%209.00002C123.758%209.04021%20123.516%209.06031%20123.258%209.06031C122.781%209.06031%20122.321%208.98854%20121.876%208.845C121.431%208.69858%20121.03%208.48902%20120.674%208.21629L121.126%207.36796C121.307%207.55457%20121.602%207.73543%20122.009%207.91055C122.42%208.0828%20122.842%208.16892%20123.275%208.16892C123.666%208.16892%20123.966%208.10002%20124.175%207.96222C124.388%207.82442%20124.494%207.62634%20124.494%207.36796C124.494%207.26462%20124.478%207.17131%20124.447%207.08806C124.415%207.00481%20124.36%206.93017%20124.283%206.86414C124.205%206.79524%20124.125%206.73639%20124.042%206.68758C123.961%206.63878%20123.845%206.58854%20123.693%206.53687C123.544%206.48519%20123.406%206.44213%20123.28%206.40768C123.156%206.37323%20122.988%206.32873%20122.776%206.27419C122.446%206.18806%20122.173%206.1005%20121.958%206.01151C121.742%205.92251%20121.551%205.81342%20121.385%205.68424C121.221%205.55505%20121.102%205.4029%20121.027%205.22778C120.953%205.04979%20120.915%204.84022%20120.915%204.59907C120.915%204.29763%20120.973%204.02634%20121.088%203.7852C121.205%203.54118%20121.366%203.34022%20121.57%203.18233C121.774%203.02443%20122.013%202.90386%20122.289%202.8206C122.565%202.73735%20122.865%202.69572%20123.189%202.69572C123.958%202.69572%20124.663%202.93113%20125.303%203.40194L124.856%204.21151Z'%20fill='%23363636'/%3e%3c/svg%3e", q3 = "data:image/svg+xml,%3csvg%20width='139'%20height='36'%20viewBox='0%200%20139%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.71711%2018.6108H7.29222V21.9438H5.87117V21.4227C5.42907%2021.7988%204.91519%2021.9868%204.32955%2021.9868C3.91902%2021.9868%203.53003%2021.9136%203.16257%2021.7672C2.79797%2021.6179%202.47501%2021.4098%202.19367%2021.1428C1.9152%2020.873%201.69415%2020.5328%201.53051%2020.1223C1.36687%2019.7117%201.28506%2019.2581%201.28506%2018.7615C1.28506%2018.328%201.36831%2017.9189%201.53482%2017.5342C1.70132%2017.1495%201.92668%2016.8194%202.21089%2016.5438C2.4951%2016.2653%202.83529%2016.0457%203.23146%2015.8849C3.63051%2015.7213%204.05252%2015.6395%204.49749%2015.6395C5.06304%2015.6395%205.57404%2015.7615%206.0305%2016.0055C6.48696%2016.2495%206.82715%2016.5825%207.05108%2017.0046L5.77644%2017.9821C5.65586%2017.7352%205.4707%2017.5371%205.22094%2017.3878C4.97117%2017.2385%204.7085%2017.1639%204.4329%2017.1639C4.02524%2017.1639%203.68936%2017.3189%203.42524%2017.629C3.164%2017.939%203.03338%2018.3366%203.03338%2018.8218C3.03338%2019.3127%203.16544%2019.7089%203.42955%2020.0103C3.69654%2020.3117%204.04534%2020.4624%204.47596%2020.4624C4.96687%2020.4624%205.40897%2020.2572%205.80227%2019.8467H4.71711V18.6108Z'%20fill='%23363636'/%3e%3cpath%20d='M14.4538%2020.4452V21.9438H9.99257V15.6825H14.3763V17.1811H11.7107V18.0639H13.9887V19.4548H11.7107V20.4452H14.4538Z'%20fill='%23363636'/%3e%3cpath%20d='M20.9005%2017.728C20.8747%2017.7136%2020.8403%2017.6936%2020.7972%2017.6677C20.7541%2017.6419%2020.6666%2017.5959%2020.5345%2017.5299C20.4025%2017.4639%2020.2733%2017.4065%2020.147%2017.3577C20.0206%2017.306%2019.8728%2017.2601%2019.7034%2017.2199C19.5369%2017.1768%2019.3833%2017.1553%2019.2427%2017.1553C18.9068%2017.1553%2018.7388%2017.2586%2018.7388%2017.4653C18.7388%2017.5113%2018.746%2017.5529%2018.7604%2017.5902C18.7776%2017.6275%2018.8063%2017.662%2018.8465%2017.6936C18.8867%2017.7251%2018.9254%2017.7524%2018.9628%2017.7754C19.0029%2017.7983%2019.0632%2017.8242%2019.1436%2017.8529C19.224%2017.8816%2019.2929%2017.9046%2019.3503%2017.9218C19.4077%2017.939%2019.4953%2017.9663%2019.613%2018.0036C19.7307%2018.038%2019.8269%2018.0668%2019.9015%2018.0897C20.1541%2018.1672%2020.368%2018.2433%2020.5431%2018.318C20.7211%2018.3926%2020.8934%2018.4845%2021.0599%2018.5935C21.2264%2018.6998%2021.3599%2018.8175%2021.4604%2018.9467C21.5608%2019.0758%2021.6398%2019.2323%2021.6972%2019.416C21.7575%2019.5969%2021.7876%2019.8022%2021.7876%2020.0318C21.7876%2020.3218%2021.7417%2020.583%2021.6498%2020.8156C21.558%2021.0481%2021.436%2021.239%2021.2838%2021.3883C21.1345%2021.5347%2020.9551%2021.6567%2020.7455%2021.7543C20.536%2021.8519%2020.3206%2021.9208%2020.0996%2021.961C19.8814%2022.0012%2019.6503%2022.0213%2019.4063%2022.0213C18.9556%2022.0213%2018.4833%2021.9553%2017.9895%2021.8232C17.4958%2021.6883%2017.0608%2021.5103%2016.6848%2021.2892L17.4254%2019.7821C17.4541%2019.8022%2017.4929%2019.828%2017.5417%2019.8596C17.5934%2019.8883%2017.6967%2019.9428%2017.8517%2020.0232C18.0096%2020.1007%2018.1647%2020.1696%2018.3168%2020.2299C18.469%2020.2902%2018.6484%2020.3462%2018.8551%2020.3979C19.0647%2020.4467%2019.2584%2020.4711%2019.4364%2020.4711C19.7694%2020.4711%2019.936%2020.3792%2019.936%2020.1955C19.936%2020.1266%2019.9144%2020.0663%2019.8714%2020.0146C19.8283%2019.9601%2019.7565%2019.9113%2019.6561%2019.8682C19.5556%2019.8223%2019.458%2019.7849%2019.3632%2019.7562C19.2714%2019.7246%2019.1393%2019.6845%2018.9671%2019.6357C18.7977%2019.584%2018.657%2019.5395%2018.545%2019.5022C17.9824%2019.3127%2017.5761%2019.0859%2017.3264%2018.8218C17.0795%2018.5548%2016.9561%2018.1959%2016.9561%2017.7452C16.9561%2017.4093%2017.0192%2017.105%2017.1455%2016.8323C17.2747%2016.5596%2017.447%2016.3371%2017.6623%2016.1648C17.8805%2015.9926%2018.1288%2015.8605%2018.4072%2015.7687C18.6857%2015.6768%2018.9814%2015.6309%2019.2943%2015.6309C19.9632%2015.6309%2020.7455%2015.8562%2021.6412%2016.3069L20.9005%2017.728Z'%20fill='%23363636'/%3e%3cpath%20d='M29.2765%2017.1811H27.4808V21.9438H25.7583V17.1811H23.9497V15.6825H29.2765V17.1811Z'%20fill='%23363636'/%3e%3cpath%20d='M33.0146%2014.8514C32.94%2014.8514%2032.8754%2014.8658%2032.8208%2014.8945C32.7663%2014.9232%2032.7261%2014.9562%2032.7003%2014.9936C32.6744%2015.0309%2032.6543%2015.0739%2032.64%2015.1227C32.6256%2015.1687%2032.617%2015.2031%2032.6141%2015.2261C32.6113%2015.2462%2032.6098%2015.2634%2032.6098%2015.2778H31.7184C31.7184%2015.2089%2031.7314%2015.1213%2031.7572%2015.0151C31.7859%2014.906%2031.8318%2014.7854%2031.895%2014.6534C31.961%2014.5213%2032.0385%2014.3993%2032.1275%2014.2873C32.2194%2014.1725%2032.3371%2014.0763%2032.4806%2013.9988C32.6242%2013.9213%2032.7792%2013.8826%2032.9457%2013.8826C33.0749%2013.8826%2033.1983%2013.907%2033.316%2013.9558C33.4338%2014.0017%2033.5299%2014.0534%2033.6046%2014.1108C33.6792%2014.1653%2033.7639%2014.217%2033.8586%2014.2658C33.9534%2014.3117%2034.0452%2014.3347%2034.1342%2014.3347C34.206%2014.3347%2034.2706%2014.3204%2034.328%2014.2916C34.3854%2014.2601%2034.4285%2014.2242%2034.4572%2014.184C34.4859%2014.1438%2034.5089%2014.1007%2034.5261%2014.0548C34.5462%2014.006%2034.5591%2013.9687%2034.5648%2013.9428C34.5706%2013.9141%2034.5735%2013.894%2034.5735%2013.8826H35.4562C35.4562%2013.9314%2035.4419%2014.006%2035.4132%2014.1065C35.3845%2014.207%2035.3371%2014.3261%2035.2711%2014.4639C35.205%2014.5988%2035.1261%2014.7266%2035.0342%2014.8471C34.9424%2014.9648%2034.8218%2015.0668%2034.6725%2015.1529C34.5232%2015.2361%2034.3639%2015.2778%2034.1945%2015.2778C34.0739%2015.2778%2033.9548%2015.2562%2033.8371%2015.2132C33.7223%2015.1672%2033.6261%2015.1184%2033.5486%2015.0668C33.4739%2015.0122%2033.3878%2014.9634%2033.2902%2014.9203C33.1926%2014.8744%2033.1007%2014.8514%2033.0146%2014.8514ZM32.6271%2015.6825H34.5476L36.5414%2021.9438H34.7974L34.4184%2020.7165H32.7476L32.3773%2021.9438H30.6247L32.6271%2015.6825ZM34.1428%2019.5711L33.5873%2017.3663L33.006%2019.5711H34.1428Z'%20fill='%23363636'/%3e%3cpath%20d='M38.3116%2018.8046C38.3116%2018.394%2038.392%2017.9979%2038.5527%2017.616C38.7135%2017.2314%2038.9331%2016.894%2039.2116%2016.6041C39.4901%2016.3141%2039.8288%2016.083%2040.2279%2015.9108C40.6298%2015.7357%2041.0575%2015.6481%2041.5111%2015.6481C41.9704%2015.6481%2042.4011%2015.74%2042.803%2015.9237C43.2049%2016.1046%2043.5393%2016.3457%2043.8063%2016.6471C44.0762%2016.9457%2044.2872%2017.2859%2044.4393%2017.6677C44.5944%2018.0495%2044.6719%2018.44%2044.6719%2018.839C44.6719%2019.2467%2044.5915%2019.6414%2044.4307%2020.0232C44.2728%2020.405%2044.0547%2020.7423%2043.7762%2021.0352C43.5006%2021.3251%2043.1618%2021.5577%2042.7599%2021.7328C42.358%2021.9079%2041.9303%2021.9955%2041.4767%2021.9955C41.0173%2021.9955%2040.5867%2021.905%2040.1848%2021.7242C39.7858%2021.5433%2039.4513%2021.3036%2039.1815%2021.005C38.9116%2020.7065%2038.6992%2020.3663%2038.5441%2019.9845C38.3891%2019.5998%2038.3116%2019.2065%2038.3116%2018.8046ZM41.4939%2020.4711C41.7322%2020.4711%2041.9446%2020.4237%2042.1312%2020.329C42.3207%2020.2313%2042.4714%2020.1022%2042.5834%2019.9414C42.6953%2019.7806%2042.78%2019.6041%2042.8374%2019.4117C42.8948%2019.2194%2042.9236%2019.017%2042.9236%2018.8046C42.9236%2018.5117%2042.8719%2018.2447%2042.7685%2018.0036C42.6681%2017.7624%2042.5059%2017.5644%2042.2819%2017.4093C42.0609%2017.2514%2041.7953%2017.1725%2041.4853%2017.1725C41.247%2017.1725%2041.0346%2017.2199%2040.848%2017.3146C40.6614%2017.4093%2040.5121%2017.5357%2040.4001%2017.6936C40.2882%2017.8514%2040.2035%2018.0266%2040.146%2018.2189C40.0886%2018.4113%2040.0599%2018.6122%2040.0599%2018.8218C40.0599%2019.0371%2040.0886%2019.2424%2040.146%2019.4376C40.2063%2019.6299%2040.2939%2019.805%2040.4087%2019.9629C40.5236%2020.1179%2040.6743%2020.2414%2040.8609%2020.3333C41.0475%2020.4251%2041.2585%2020.4711%2041.4939%2020.4711Z'%20fill='%23363636'/%3e%3cpath%20d='M55.5458%2020.4452V21.9438H51.0845V15.6825H55.4682V17.1811H52.8027V18.0639H55.0807V19.4548H52.8027V20.4452H55.5458Z'%20fill='%23363636'/%3e%3cpath%20d='M62.0316%2021.9438V15.6825H64.4388C64.944%2015.6825%2065.3991%2015.7644%2065.8038%2015.928C66.2115%2016.0888%2066.5431%2016.3127%2066.7986%2016.5998C67.0569%2016.884%2067.2536%2017.2141%2067.3885%2017.5902C67.5263%2017.9634%2067.5952%2018.3682%2067.5952%2018.8046C67.5952%2019.7519%2067.3067%2020.5127%2066.7297%2021.0868C66.1555%2021.6581%2065.3919%2021.9438%2064.4388%2021.9438H62.0316ZM64.4388%2017.1811H63.7498V20.4452H64.4388C64.878%2020.4452%2065.2225%2020.2931%2065.4723%2019.9888C65.7249%2019.6845%2065.8512%2019.2897%2065.8512%2018.8046C65.8512%2018.3136%2065.7249%2017.9203%2065.4723%2017.6247C65.2196%2017.329%2064.8751%2017.1811%2064.4388%2017.1811Z'%20fill='%23363636'/%3e%3cpath%20d='M71.385%2015.6825H73.3056L75.2994%2021.9438H73.5554L73.1764%2020.7165H71.5056L71.1353%2021.9438H69.3826L71.385%2015.6825ZM72.9008%2019.5711L72.3453%2017.3663L71.764%2019.5711H72.9008Z'%20fill='%23363636'/%3e%3cpath%20d='M81.2383%2021.9438V15.6825H82.9565V21.9438H81.2383Z'%20fill='%23363636'/%3e%3cpath%20d='M87.6076%2018.8648V21.9438H85.8894V15.6825H87.2286L89.7435%2018.8648V15.6825H91.4616V21.9438H90.0966L87.6076%2018.8648Z'%20fill='%23363636'/%3e%3cpath%20d='M94.0457%2018.8046C94.0457%2018.394%2094.1261%2017.9979%2094.2869%2017.616C94.4476%2017.2314%2094.6672%2016.894%2094.9457%2016.6041C95.2242%2016.3141%2095.5629%2016.083%2095.962%2015.9108C96.3639%2015.7357%2096.7916%2015.6481%2097.2452%2015.6481C97.7046%2015.6481%2098.1352%2015.74%2098.5371%2015.9237C98.939%2016.1046%2099.2735%2016.3457%2099.5404%2016.6471C99.8103%2016.9457%20100.021%2017.2859%20100.173%2017.6677C100.328%2018.0495%20100.406%2018.44%20100.406%2018.839C100.406%2019.2467%20100.326%2019.6414%20100.165%2020.0232C100.007%2020.405%2099.7888%2020.7423%2099.5103%2021.0352C99.2347%2021.3251%2098.8959%2021.5577%2098.494%2021.7328C98.0921%2021.9079%2097.6644%2021.9955%2097.2108%2021.9955C96.7514%2021.9955%2096.3208%2021.905%2095.9189%2021.7242C95.5199%2021.5433%2095.1854%2021.3036%2094.9156%2021.005C94.6457%2020.7065%2094.4333%2020.3663%2094.2782%2019.9845C94.1232%2019.5998%2094.0457%2019.2065%2094.0457%2018.8046ZM97.228%2020.4711C97.4663%2020.4711%2097.6787%2020.4237%2097.8653%2020.329C98.0548%2020.2313%2098.2055%2020.1022%2098.3175%2019.9414C98.4294%2019.7806%2098.5141%2019.6041%2098.5715%2019.4117C98.629%2019.2194%2098.6577%2019.017%2098.6577%2018.8046C98.6577%2018.5117%2098.606%2018.2447%2098.5026%2018.0036C98.4022%2017.7624%2098.24%2017.5644%2098.016%2017.4093C97.795%2017.2514%2097.5294%2017.1725%2097.2194%2017.1725C96.9811%2017.1725%2096.7687%2017.2199%2096.5821%2017.3146C96.3955%2017.4093%2096.2462%2017.5357%2096.1342%2017.6936C96.0223%2017.8514%2095.9376%2018.0266%2095.8802%2018.2189C95.8227%2018.4113%2095.794%2018.6122%2095.794%2018.8218C95.794%2019.0371%2095.8227%2019.2424%2095.8802%2019.4376C95.9404%2019.6299%2096.028%2019.805%2096.1428%2019.9629C96.2577%2020.1179%2096.4084%2020.2414%2096.595%2020.3333C96.7816%2020.4251%2096.9926%2020.4711%2097.228%2020.4711Z'%20fill='%23363636'/%3e%3cpath%20d='M103.946%2015.6825L105.169%2019.9586L106.379%2015.6825H108.188L106.026%2021.9438H104.316L102.129%2015.6825H103.946Z'%20fill='%23363636'/%3e%3cpath%20d='M111.443%2015.6825H113.364L115.358%2021.9438H113.614L113.235%2020.7165H111.564L111.194%2021.9438H109.441L111.443%2015.6825ZM112.959%2019.5711L112.404%2017.3663L111.822%2019.5711H112.959Z'%20fill='%23363636'/%3e%3cpath%20d='M122.959%2020.54C122.806%2020.9132%20122.528%2021.2246%20122.123%2021.4744C121.718%2021.7242%20121.271%2021.8864%20120.78%2021.961C121.067%2022.2481%20121.21%2022.5567%20121.21%2022.8868C121.21%2023.1682%20121.118%2023.405%20120.935%2023.5974C120.754%2023.7897%20120.49%2023.8859%20120.142%2023.8859C119.792%2023.8859%20119.429%2023.7854%20119.053%2023.5844L119.44%2022.7275C119.57%2022.8395%20119.71%2022.8955%20119.862%2022.8955C119.972%2022.8955%20120.061%2022.8639%20120.129%2022.8007C120.198%2022.7404%20120.233%2022.6572%20120.233%2022.551C120.233%2022.3701%20120.121%2022.1763%20119.897%2021.9696C119.495%2021.9208%20119.119%2021.7959%20118.769%2021.595C118.421%2021.3912%20118.129%2021.1428%20117.89%2020.85C117.655%2020.5543%20117.468%2020.2256%20117.33%2019.8639C117.196%2019.4993%20117.128%2019.1318%20117.128%2018.7615C117.128%2018.3768%20117.201%2018.0007%20117.348%2017.6333C117.497%2017.2629%20117.704%2016.9299%20117.968%2016.6342C118.235%2016.3385%20118.573%2016.1003%20118.984%2015.9194C119.395%2015.7385%20119.842%2015.6481%20120.328%2015.6481C120.916%2015.6481%20121.436%2015.7715%20121.886%2016.0184C122.337%2016.2653%20122.673%2016.5969%20122.894%2017.0132L121.581%2017.9476C121.523%2017.8012%20121.446%2017.6763%20121.348%2017.573C121.251%2017.4668%20121.141%2017.3864%20121.021%2017.3318C120.9%2017.2744%20120.78%2017.2342%20120.659%2017.2113C120.541%2017.1854%20120.419%2017.1725%20120.293%2017.1725C120.058%2017.1725%20119.847%2017.2213%20119.66%2017.3189C119.473%2017.4136%20119.324%2017.5414%20119.212%2017.7022C119.103%2017.8601%20119.02%2018.0337%20118.962%2018.2232C118.905%2018.4127%20118.876%2018.6093%20118.876%2018.8132C118.876%2019.2696%20119.007%2019.6601%20119.268%2019.9845C119.529%2020.3089%20119.877%2020.4711%20120.31%2020.4711C120.48%2020.4711%20120.642%2020.4481%20120.797%2020.4022C120.952%2020.3534%20121.1%2020.2701%20121.24%2020.1524C121.384%2020.0318%20121.489%2019.8825%20121.555%2019.7046L122.959%2020.54Z'%20fill='%23363636'/%3e%3cpath%20d='M127.153%2014.8514C127.079%2014.8514%20127.014%2014.8658%20126.959%2014.8945C126.905%2014.9232%20126.865%2014.9562%20126.839%2014.9936C126.813%2015.0309%20126.793%2015.0739%20126.779%2015.1227C126.764%2015.1687%20126.756%2015.2031%20126.753%2015.2261C126.75%2015.2462%20126.748%2015.2634%20126.748%2015.2778H125.857C125.857%2015.2089%20125.87%2015.1213%20125.896%2015.0151C125.925%2014.906%20125.97%2014.7854%20126.034%2014.6534C126.1%2014.5213%20126.177%2014.3993%20126.266%2014.2873C126.358%2014.1725%20126.476%2014.0763%20126.619%2013.9988C126.763%2013.9213%20126.918%2013.8826%20127.084%2013.8826C127.214%2013.8826%20127.337%2013.907%20127.455%2013.9558C127.572%2014.0017%20127.669%2014.0534%20127.743%2014.1108C127.818%2014.1653%20127.903%2014.217%20127.997%2014.2658C128.092%2014.3117%20128.184%2014.3347%20128.273%2014.3347C128.345%2014.3347%20128.409%2014.3204%20128.467%2014.2916C128.524%2014.2601%20128.567%2014.2242%20128.596%2014.184C128.625%2014.1438%20128.648%2014.1007%20128.665%2014.0548C128.685%2014.006%20128.698%2013.9687%20128.703%2013.9428C128.709%2013.9141%20128.712%2013.894%20128.712%2013.8826H129.595C129.595%2013.9314%20129.581%2014.006%20129.552%2014.1065C129.523%2014.207%20129.476%2014.3261%20129.41%2014.4639C129.344%2014.5988%20129.265%2014.7266%20129.173%2014.8471C129.081%2014.9648%20128.96%2015.0668%20128.811%2015.1529C128.662%2015.2361%20128.503%2015.2778%20128.333%2015.2778C128.213%2015.2778%20128.093%2015.2562%20127.976%2015.2132C127.861%2015.1672%20127.765%2015.1184%20127.687%2015.0668C127.613%2015.0122%20127.526%2014.9634%20127.429%2014.9203C127.331%2014.8744%20127.239%2014.8514%20127.153%2014.8514ZM126.766%2015.6825H128.686L130.68%2021.9438H128.936L128.557%2020.7165H126.886L126.516%2021.9438H124.763L126.766%2015.6825ZM128.281%2019.5711L127.726%2017.3663L127.145%2019.5711H128.281Z'%20fill='%23363636'/%3e%3cpath%20d='M132.45%2018.8046C132.45%2018.394%20132.531%2017.9979%20132.691%2017.616C132.852%2017.2314%20133.072%2016.894%20133.35%2016.6041C133.629%2016.3141%20133.967%2016.083%20134.367%2015.9108C134.768%2015.7357%20135.196%2015.6481%20135.65%2015.6481C136.109%2015.6481%20136.54%2015.74%20136.942%2015.9237C137.344%2016.1046%20137.678%2016.3457%20137.945%2016.6471C138.215%2016.9457%20138.426%2017.2859%20138.578%2017.6677C138.733%2018.0495%20138.811%2018.44%20138.811%2018.839C138.811%2019.2467%20138.73%2019.6414%20138.569%2020.0232C138.411%2020.405%20138.193%2020.7423%20137.915%2021.0352C137.639%2021.3251%20137.3%2021.5577%20136.899%2021.7328C136.497%2021.9079%20136.069%2021.9955%20135.615%2021.9955C135.156%2021.9955%20134.725%2021.905%20134.323%2021.7242C133.924%2021.5433%20133.59%2021.3036%20133.32%2021.005C133.05%2020.7065%20132.838%2020.3663%20132.683%2019.9845C132.528%2019.5998%20132.45%2019.2065%20132.45%2018.8046ZM135.633%2020.4711C135.871%2020.4711%20136.083%2020.4237%20136.27%2020.329C136.459%2020.2313%20136.61%2020.1022%20136.722%2019.9414C136.834%2019.7806%20136.919%2019.6041%20136.976%2019.4117C137.033%2019.2194%20137.062%2019.017%20137.062%2018.8046C137.062%2018.5117%20137.011%2018.2447%20136.907%2018.0036C136.807%2017.7624%20136.644%2017.5644%20136.421%2017.4093C136.2%2017.2514%20135.934%2017.1725%20135.624%2017.1725C135.386%2017.1725%20135.173%2017.2199%20134.987%2017.3146C134.8%2017.4093%20134.651%2017.5357%20134.539%2017.6936C134.427%2017.8514%20134.342%2018.0266%20134.285%2018.2189C134.227%2018.4113%20134.199%2018.6122%20134.199%2018.8218C134.199%2019.0371%20134.227%2019.2424%20134.285%2019.4376C134.345%2019.6299%20134.433%2019.805%20134.547%2019.9629C134.662%2020.1179%20134.813%2020.2414%20135%2020.3333C135.186%2020.4251%20135.397%2020.4711%20135.633%2020.4711Z'%20fill='%23363636'/%3e%3cpath%20d='M4.57501%2032.4452V33.9438H0.11377V27.6825H4.49749V29.1811H1.83195V30.0639H4.10994V31.4548H1.83195V32.4452H4.57501Z'%20fill='%23363636'/%3e%3cpath%20d='M11.9648%2033.9438V30.6452L10.9141%2032.9663H9.99687L8.94616%2030.6452V33.9438H7.22798V27.6825H9.10549L10.4533%2030.628L11.8141%2027.6825H13.683V33.9438H11.9648Z'%20fill='%23363636'/%3e%3cpath%20d='M24.2339%2029.728C24.2081%2029.7136%2024.1736%2029.6936%2024.1306%2029.6677C24.0875%2029.6419%2023.9999%2029.5959%2023.8679%2029.5299C23.7358%2029.4639%2023.6066%2029.4065%2023.4803%2029.3577C23.354%2029.306%2023.2062%2029.2601%2023.0368%2029.2199C22.8703%2029.1768%2022.7167%2029.1553%2022.576%2029.1553C22.2401%2029.1553%2022.0722%2029.2586%2022.0722%2029.4653C22.0722%2029.5113%2022.0794%2029.5529%2022.0937%2029.5902C22.1109%2029.6275%2022.1396%2029.662%2022.1798%2029.6936C22.22%2029.7251%2022.2588%2029.7524%2022.2961%2029.7754C22.3363%2029.7983%2022.3966%2029.8242%2022.477%2029.8529C22.5573%2029.8816%2022.6263%2029.9046%2022.6837%2029.9218C22.7411%2029.939%2022.8286%2029.9663%2022.9463%2030.0036C23.064%2030.038%2023.1602%2030.0668%2023.2349%2030.0897C23.4875%2030.1672%2023.7014%2030.2433%2023.8765%2030.318C24.0545%2030.3926%2024.2267%2030.4845%2024.3932%2030.5935C24.5597%2030.6998%2024.6932%2030.8175%2024.7937%2030.9467C24.8942%2031.0758%2024.9731%2031.2323%2025.0306%2031.416C25.0908%2031.5969%2025.121%2031.8022%2025.121%2032.0318C25.121%2032.3218%2025.075%2032.583%2024.9832%2032.8156C24.8913%2033.0481%2024.7693%2033.239%2024.6172%2033.3883C24.4679%2033.5347%2024.2884%2033.6567%2024.0789%2033.7543C23.8693%2033.8519%2023.654%2033.9208%2023.4329%2033.961C23.2148%2034.0012%2022.9837%2034.0213%2022.7396%2034.0213C22.2889%2034.0213%2021.8167%2033.9553%2021.3229%2033.8232C20.8291%2033.6883%2020.3942%2033.5103%2020.0181%2033.2892L20.7588%2031.7821C20.7875%2031.8022%2020.8263%2031.828%2020.8751%2031.8596C20.9267%2031.8883%2021.0301%2031.9428%2021.1851%2032.0232C21.343%2032.1007%2021.498%2032.1696%2021.6502%2032.2299C21.8023%2032.2902%2021.9818%2032.3462%2022.1884%2032.3979C22.398%2032.4467%2022.5918%2032.4711%2022.7698%2032.4711C23.1028%2032.4711%2023.2693%2032.3792%2023.2693%2032.1955C23.2693%2032.1266%2023.2478%2032.0663%2023.2047%2032.0146C23.1617%2031.9601%2023.0899%2031.9113%2022.9894%2031.8682C22.8889%2031.8223%2022.7913%2031.7849%2022.6966%2031.7562C22.6047%2031.7246%2022.4727%2031.6845%2022.3004%2031.6357C22.131%2031.584%2021.9904%2031.5395%2021.8784%2031.5022C21.3157%2031.3127%2020.9095%2031.0859%2020.6597%2030.8218C20.4129%2030.5548%2020.2894%2030.1959%2020.2894%2029.7452C20.2894%2029.4093%2020.3526%2029.105%2020.4789%2028.8323C20.6081%2028.5596%2020.7803%2028.3371%2020.9956%2028.1648C21.2138%2027.9926%2021.4621%2027.8605%2021.7406%2027.7687C22.0191%2027.6768%2022.3148%2027.6309%2022.6277%2027.6309C23.2966%2027.6309%2024.0789%2027.8562%2024.9746%2028.3069L24.2339%2029.728Z'%20fill='%23363636'/%3e%3cpath%20d='M32.1964%2032.4452V33.9438H27.7352V27.6825H32.1189V29.1811H29.4534V30.0639H31.7314V31.4548H29.4534V32.4452H32.1964Z'%20fill='%23363636'/%3e%3cpath%20d='M34.8494%2033.9438V27.6825H37.726C38.0216%2027.6825%2038.303%2027.7457%2038.57%2027.872C38.837%2027.9983%2039.0609%2028.1634%2039.2417%2028.3672C39.4226%2028.5711%2039.5661%2028.8036%2039.6724%2029.0648C39.7786%2029.3232%2039.8317%2029.5859%2039.8317%2029.8529C39.8317%2030.2146%2039.7513%2030.5534%2039.5905%2030.8691C39.4327%2031.1849%2039.213%2031.4419%2038.9317%2031.64L40.2537%2033.9438H38.3676L37.2652%2032.0232H36.5676V33.9438H34.8494ZM36.5676%2030.5203H37.6528C37.7647%2030.5203%2037.8652%2030.4601%2037.9542%2030.3395C38.0432%2030.216%2038.0877%2030.0538%2038.0877%2029.8529C38.0877%2029.6519%2038.0374%2029.4897%2037.937%2029.3663C37.8365%2029.2428%2037.7274%2029.1811%2037.6097%2029.1811H36.5676V30.5203Z'%20fill='%23363636'/%3e%3cpath%20d='M43.6129%2027.6825L44.8359%2031.9586L46.0459%2027.6825H47.8545L45.6928%2033.9438H43.9832L41.7957%2027.6825H43.6129Z'%20fill='%23363636'/%3e%3cpath%20d='M50.1802%2033.9438V27.6825H51.8984V33.9438H50.1802Z'%20fill='%23363636'/%3e%3cpath%20d='M60.3174%2032.54C60.1652%2032.9132%2059.8868%2033.2246%2059.482%2033.4744C59.0772%2033.7242%2058.6293%2033.8864%2058.1384%2033.961C58.4255%2034.2481%2058.5691%2034.5567%2058.5691%2034.8868C58.5691%2035.1682%2058.4772%2035.405%2058.2935%2035.5974C58.1126%2035.7897%2057.8485%2035.8859%2057.5011%2035.8859C57.1509%2035.8859%2056.7877%2035.7854%2056.4116%2035.5844L56.7992%2034.7275C56.9284%2034.8395%2057.0691%2034.8955%2057.2212%2034.8955C57.3303%2034.8955%2057.4193%2034.8639%2057.4882%2034.8007C57.5571%2034.7404%2057.5916%2034.6572%2057.5916%2034.551C57.5916%2034.3701%2057.4796%2034.1763%2057.2557%2033.9696C56.8538%2033.9208%2056.4777%2033.7959%2056.1274%2033.595C55.7801%2033.3912%2055.4872%2033.1428%2055.249%2032.85C55.0136%2032.5543%2054.827%2032.2256%2054.6892%2031.8639C54.5542%2031.4993%2054.4868%2031.1318%2054.4868%2030.7615C54.4868%2030.3768%2054.56%2030.0007%2054.7064%2029.6333C54.8557%2029.2629%2055.0624%2028.9299%2055.3265%2028.6342C55.5935%2028.3385%2055.9322%2028.1003%2056.3428%2027.9194C56.7533%2027.7385%2057.2011%2027.6481%2057.6863%2027.6481C58.2748%2027.6481%2058.7944%2027.7715%2059.2451%2028.0184C59.6959%2028.2653%2060.0317%2028.5969%2060.2528%2029.0132L58.9394%2029.9476C58.882%2029.8012%2058.8045%2029.6763%2058.7069%2029.573C58.6093%2029.4668%2058.5002%2029.3864%2058.3796%2029.3318C58.259%2029.2744%2058.1384%2029.2342%2058.0179%2029.2113C57.9002%2029.1854%2057.7782%2029.1725%2057.6518%2029.1725C57.4164%2029.1725%2057.2054%2029.2213%2057.0188%2029.3189C56.8322%2029.4136%2056.6829%2029.5414%2056.571%2029.7022C56.4619%2029.8601%2056.3786%2030.0337%2056.3212%2030.2232C56.2638%2030.4127%2056.2351%2030.6093%2056.2351%2030.8132C56.2351%2031.2696%2056.3657%2031.6601%2056.627%2031.9845C56.8882%2032.3089%2057.2356%2032.4711%2057.6691%2032.4711C57.8384%2032.4711%2058.0006%2032.4481%2058.1557%2032.4022C58.3107%2032.3534%2058.4585%2032.2701%2058.5992%2032.1524C58.7427%2032.0318%2058.8475%2031.8825%2058.9136%2031.7046L60.3174%2032.54Z'%20fill='%23363636'/%3e%3cpath%20d='M62.333%2030.8046C62.333%2030.394%2062.4134%2029.9979%2062.5742%2029.616C62.735%2029.2314%2062.9546%2028.894%2063.233%2028.6041C63.5115%2028.3141%2063.8503%2028.083%2064.2493%2027.9108C64.6512%2027.7357%2065.079%2027.6481%2065.5326%2027.6481C65.9919%2027.6481%2066.4225%2027.74%2066.8244%2027.9237C67.2263%2028.1046%2067.5608%2028.3457%2067.8278%2028.6471C68.0976%2028.9457%2068.3086%2029.2859%2068.4608%2029.6677C68.6158%2030.0495%2068.6933%2030.44%2068.6933%2030.839C68.6933%2031.2467%2068.6129%2031.6414%2068.4522%2032.0232C68.2943%2032.405%2068.0761%2032.7423%2067.7976%2033.0352C67.522%2033.3251%2067.1833%2033.5577%2066.7814%2033.7328C66.3794%2033.9079%2065.9517%2033.9955%2065.4981%2033.9955C65.0388%2033.9955%2064.6082%2033.905%2064.2062%2033.7242C63.8072%2033.5433%2063.4727%2033.3036%2063.2029%2033.005C62.933%2032.7065%2062.7206%2032.3663%2062.5656%2031.9845C62.4106%2031.5998%2062.333%2031.2065%2062.333%2030.8046ZM65.5153%2032.4711C65.7536%2032.4711%2065.966%2032.4237%2066.1526%2032.329C66.3421%2032.2313%2066.4928%2032.1022%2066.6048%2031.9414C66.7168%2031.7806%2066.8015%2031.6041%2066.8589%2031.4117C66.9163%2031.2194%2066.945%2031.017%2066.945%2030.8046C66.945%2030.5117%2066.8933%2030.2447%2066.79%2030.0036C66.6895%2029.7624%2066.5273%2029.5644%2066.3034%2029.4093C66.0823%2029.2514%2065.8168%2029.1725%2065.5067%2029.1725C65.2684%2029.1725%2065.056%2029.2199%2064.8694%2029.3146C64.6828%2029.4093%2064.5335%2029.5357%2064.4216%2029.6936C64.3096%2029.8514%2064.2249%2030.0266%2064.1675%2030.2189C64.1101%2030.4113%2064.0814%2030.6122%2064.0814%2030.8218C64.0814%2031.0371%2064.1101%2031.2424%2064.1675%2031.4376C64.2278%2031.6299%2064.3153%2031.805%2064.4302%2031.9629C64.545%2032.1179%2064.6957%2032.2414%2064.8823%2032.3333C65.0689%2032.4251%2065.2799%2032.4711%2065.5153%2032.4711Z'%20fill='%23363636'/%3e%3cpath%20d='M75.0152%2029.728C74.9893%2029.7136%2074.9549%2029.6936%2074.9118%2029.6677C74.8688%2029.6419%2074.7812%2029.5959%2074.6491%2029.5299C74.5171%2029.4639%2074.3879%2029.4065%2074.2616%2029.3577C74.1353%2029.306%2073.9874%2029.2601%2073.8181%2029.2199C73.6515%2029.1768%2073.498%2029.1553%2073.3573%2029.1553C73.0214%2029.1553%2072.8535%2029.2586%2072.8535%2029.4653C72.8535%2029.5113%2072.8606%2029.5529%2072.875%2029.5902C72.8922%2029.6275%2072.9209%2029.662%2072.9611%2029.6936C73.0013%2029.7251%2073.0401%2029.7524%2073.0774%2029.7754C73.1176%2029.7983%2073.1779%2029.8242%2073.2582%2029.8529C73.3386%2029.8816%2073.4075%2029.9046%2073.4649%2029.9218C73.5224%2029.939%2073.6099%2029.9663%2073.7276%2030.0036C73.8453%2030.038%2073.9415%2030.0668%2074.0161%2030.0897C74.2688%2030.1672%2074.4826%2030.2433%2074.6578%2030.318C74.8358%2030.3926%2075.008%2030.4845%2075.1745%2030.5935C75.341%2030.6998%2075.4745%2030.8175%2075.575%2030.9467C75.6755%2031.0758%2075.7544%2031.2323%2075.8118%2031.416C75.8721%2031.5969%2075.9023%2031.8022%2075.9023%2032.0318C75.9023%2032.3218%2075.8563%2032.583%2075.7645%2032.8156C75.6726%2033.0481%2075.5506%2033.239%2075.3984%2033.3883C75.2491%2033.5347%2075.0697%2033.6567%2074.8602%2033.7543C74.6506%2033.8519%2074.4353%2033.9208%2074.2142%2033.961C73.996%2034.0012%2073.7649%2034.0213%2073.5209%2034.0213C73.0702%2034.0213%2072.598%2033.9553%2072.1042%2033.8232C71.6104%2033.6883%2071.1755%2033.5103%2070.7994%2033.2892L71.5401%2031.7821C71.5688%2031.8022%2071.6075%2031.828%2071.6563%2031.8596C71.708%2031.8883%2071.8114%2031.9428%2071.9664%2032.0232C72.1243%2032.1007%2072.2793%2032.1696%2072.4314%2032.2299C72.5836%2032.2902%2072.763%2032.3462%2072.9697%2032.3979C73.1793%2032.4467%2073.3731%2032.4711%2073.5511%2032.4711C73.8841%2032.4711%2074.0506%2032.3792%2074.0506%2032.1955C74.0506%2032.1266%2074.0291%2032.0663%2073.986%2032.0146C73.9429%2031.9601%2073.8712%2031.9113%2073.7707%2031.8682C73.6702%2031.8223%2073.5726%2031.7849%2073.4779%2031.7562C73.386%2031.7246%2073.2539%2031.6845%2073.0817%2031.6357C72.9123%2031.584%2072.7716%2031.5395%2072.6597%2031.5022C72.097%2031.3127%2071.6908%2031.0859%2071.441%2030.8218C71.1941%2030.5548%2071.0707%2030.1959%2071.0707%2029.7452C71.0707%2029.4093%2071.1338%2029.105%2071.2602%2028.8323C71.3893%2028.5596%2071.5616%2028.3371%2071.7769%2028.1648C71.9951%2027.9926%2072.2434%2027.8605%2072.5219%2027.7687C72.8003%2027.6768%2073.096%2027.6309%2073.409%2027.6309C74.0779%2027.6309%2074.8602%2027.8562%2075.7558%2028.3069L75.0152%2029.728Z'%20fill='%23363636'/%3e%3cpath%20d='M82.3493%2033.9438V27.6825H85.0493C85.345%2027.6825%2085.6264%2027.7457%2085.8934%2027.872C86.1603%2027.9983%2086.3843%2028.1634%2086.5651%2028.3672C86.746%2028.5711%2086.8895%2028.8036%2086.9958%2029.0648C87.102%2029.3232%2087.1551%2029.5859%2087.1551%2029.8529C87.1551%2030.1313%2087.1048%2030.4012%2087.0044%2030.6624C86.9039%2030.9237%2086.7647%2031.1548%2086.5867%2031.3557C86.4115%2031.5567%2086.1934%2031.7189%2085.9321%2031.8424C85.6709%2031.9629%2085.391%2032.0232%2085.0924%2032.0232H84.0675V33.9438H82.3493ZM84.0675%2030.5203H84.9761C85.0967%2030.5203%2085.1986%2030.4672%2085.2819%2030.361C85.368%2030.2548%2085.4111%2030.0854%2085.4111%2029.8529C85.4111%2029.6175%2085.3623%2029.4467%2085.2647%2029.3404C85.1699%2029.2342%2085.0594%2029.1811%2084.9331%2029.1811H84.0675V30.5203Z'%20fill='%23363636'/%3e%3cpath%20d='M92.9602%2027.4156L91.9009%2027.1357L92.3401%2025.8826H93.8301L92.9602%2027.4156ZM92.4305%2033.9955C92.0401%2033.9955%2091.6856%2033.9409%2091.3669%2033.8318C91.0511%2033.7227%2090.7841%2033.5734%2090.5659%2033.384C90.3506%2033.1945%2090.1698%2032.9677%2090.0234%2032.7036C89.8769%2032.4395%2089.7707%2032.1581%2089.7047%2031.8596C89.6387%2031.5581%2089.6057%2031.238%2089.6057%2030.8993V27.6825H91.3281V30.8993C91.3281%2031.1146%2091.3482%2031.3141%2091.3884%2031.4979C91.4315%2031.6816%2091.4947%2031.8481%2091.5779%2031.9974C91.664%2032.1438%2091.7789%2032.2601%2091.9224%2032.3462C92.0688%2032.4294%2092.2382%2032.4711%2092.4305%2032.4711C92.6257%2032.4711%2092.7966%2032.428%2092.943%2032.3419C93.0894%2032.2557%2093.2042%2032.138%2093.2875%2031.9888C93.3736%2031.8366%2093.4368%2031.6701%2093.4769%2031.4892C93.52%2031.3055%2093.5415%2031.1089%2093.5415%2030.8993V27.6825H95.2597V30.8993C95.2597%2031.3443%2095.2023%2031.7519%2095.0875%2032.1223C94.9726%2032.4926%2094.8018%2032.8184%2094.575%2033.0998C94.3511%2033.3811%2094.0554%2033.6007%2093.688%2033.7586C93.3234%2033.9165%2092.9042%2033.9955%2092.4305%2033.9955Z'%20fill='%23363636'/%3e%3cpath%20d='M101.181%2033.9438H98.1022V27.6825H101.737C102.018%2027.6825%20102.269%2027.7629%20102.49%2027.9237C102.714%2028.0816%20102.882%2028.2811%20102.994%2028.5223C103.106%2028.7634%20103.162%2029.0189%20103.162%2029.2888C103.162%2029.5959%20103.084%2029.883%20102.929%2030.15C102.774%2030.4141%20102.553%2030.6093%20102.266%2030.7357C102.637%2030.8447%20102.922%2031.0328%20103.123%2031.2998C103.327%2031.5668%20103.429%2031.9127%20103.429%2032.3376C103.429%2032.6103%20103.37%2032.8514%20103.252%2033.061C103.138%2033.2706%20102.975%2033.4385%20102.766%2033.5648C102.559%2033.6912%20102.322%2033.7859%20102.055%2033.849C101.788%2033.9122%20101.497%2033.9438%20101.181%2033.9438ZM99.8203%2029.1467V30.1069H100.996C101.131%2030.1069%20101.241%2030.0711%20101.328%2029.9993C101.417%2029.9247%20101.461%2029.7983%20101.461%2029.6203C101.461%2029.4596%20101.422%2029.3404%20101.345%2029.2629C101.267%2029.1854%20101.168%2029.1467%20101.048%2029.1467H99.8203ZM101.241%2031.4462H99.8203V32.4969H101.181C101.328%2032.4969%20101.447%2032.4524%20101.539%2032.3634C101.633%2032.2715%20101.681%2032.1452%20101.681%2031.9845C101.681%2031.8294%20101.639%2031.7017%20101.556%2031.6012C101.472%2031.4979%20101.368%2031.4462%20101.241%2031.4462Z'%20fill='%23363636'/%3e%3cpath%20d='M106.043%2033.9438V27.6825H107.761V32.4452H110.603V33.9438H106.043Z'%20fill='%23363636'/%3e%3cpath%20d='M113.054%2033.9438V27.6825H114.772V33.9438H113.054Z'%20fill='%23363636'/%3e%3cpath%20d='M120.56%2027.6481C121.149%2027.6481%20121.668%2027.7715%20122.119%2028.0184C122.57%2028.2653%20122.906%2028.5969%20123.127%2029.0132L121.813%2029.9476C121.756%2029.8012%20121.678%2029.6763%20121.581%2029.573C121.483%2029.4668%20121.374%2029.3864%20121.253%2029.3318C121.133%2029.2744%20121.012%2029.2342%20120.892%2029.2113C120.774%2029.1854%20120.652%2029.1725%20120.526%2029.1725C120.29%2029.1725%20120.079%2029.2213%20119.893%2029.3189C119.706%2029.4136%20119.557%2029.5414%20119.445%2029.7022C119.336%2029.8601%20119.252%2030.0337%20119.195%2030.2232C119.138%2030.4127%20119.109%2030.6093%20119.109%2030.8132C119.109%2031.2696%20119.24%2031.6601%20119.501%2031.9845C119.762%2032.3089%20120.109%2032.4711%20120.543%2032.4711C120.712%2032.4711%20120.874%2032.4481%20121.029%2032.4022C121.184%2032.3534%20121.332%2032.2701%20121.473%2032.1524C121.617%2032.0318%20121.721%2031.8825%20121.787%2031.7046L123.191%2032.54C123.073%2032.8357%20122.867%2033.0969%20122.571%2033.3237C122.278%2033.5505%20121.952%2033.7199%20121.594%2033.8318C121.235%2033.9409%20120.873%2033.9955%20120.508%2033.9955C120.061%2033.9955%20119.637%2033.9022%20119.238%2033.7156C118.842%2033.529%20118.507%2033.2849%20118.235%2032.9835C117.965%2032.6792%20117.751%2032.3333%20117.593%2031.9457C117.438%2031.5553%20117.361%2031.1605%20117.361%2030.7615C117.361%2030.3768%20117.434%2030.0007%20117.58%2029.6333C117.729%2029.2629%20117.936%2028.9299%20118.2%2028.6342C118.467%2028.3385%20118.806%2028.1003%20119.217%2027.9194C119.627%2027.7385%20120.075%2027.6481%20120.56%2027.6481Z'%20fill='%23363636'/%3e%3cpath%20d='M125.207%2030.8046C125.207%2030.394%20125.287%2029.9979%20125.448%2029.616C125.609%2029.2314%20125.828%2028.894%20126.107%2028.6041C126.385%2028.3141%20126.724%2028.083%20127.123%2027.9108C127.525%2027.7357%20127.953%2027.6481%20128.406%2027.6481C128.866%2027.6481%20129.296%2027.74%20129.698%2027.9237C130.1%2028.1046%20130.435%2028.3457%20130.702%2028.6471C130.971%2028.9457%20131.182%2029.2859%20131.335%2029.6677C131.49%2030.0495%20131.567%2030.44%20131.567%2030.839C131.567%2031.2467%20131.487%2031.6414%20131.326%2032.0232C131.168%2032.405%20130.95%2032.7423%20130.671%2033.0352C130.396%2033.3251%20130.057%2033.5577%20129.655%2033.7328C129.253%2033.9079%20128.826%2033.9955%20128.372%2033.9955C127.913%2033.9955%20127.482%2033.905%20127.08%2033.7242C126.681%2033.5433%20126.347%2033.3036%20126.077%2033.005C125.807%2032.7065%20125.594%2032.3663%20125.439%2031.9845C125.284%2031.5998%20125.207%2031.2065%20125.207%2030.8046ZM128.389%2032.4711C128.627%2032.4711%20128.84%2032.4237%20129.026%2032.329C129.216%2032.2313%20129.367%2032.1022%20129.479%2031.9414C129.591%2031.7806%20129.675%2031.6041%20129.733%2031.4117C129.79%2031.2194%20129.819%2031.017%20129.819%2030.8046C129.819%2030.5117%20129.767%2030.2447%20129.664%2030.0036C129.563%2029.7624%20129.401%2029.5644%20129.177%2029.4093C128.956%2029.2514%20128.691%2029.1725%20128.381%2029.1725C128.142%2029.1725%20127.93%2029.2199%20127.743%2029.3146C127.557%2029.4093%20127.407%2029.5357%20127.295%2029.6936C127.183%2029.8514%20127.099%2030.0266%20127.041%2030.2189C126.984%2030.4113%20126.955%2030.6122%20126.955%2030.8218C126.955%2031.0371%20126.984%2031.2424%20127.041%2031.4376C127.102%2031.6299%20127.189%2031.805%20127.304%2031.9629C127.419%2032.1179%20127.57%2032.2414%20127.756%2032.3333C127.943%2032.4251%20128.154%2032.4711%20128.389%2032.4711Z'%20fill='%23363636'/%3e%3cpath%20d='M137.889%2029.728C137.863%2029.7136%20137.829%2029.6936%20137.786%2029.6677C137.743%2029.6419%20137.655%2029.5959%20137.523%2029.5299C137.391%2029.4639%20137.262%2029.4065%20137.135%2029.3577C137.009%2029.306%20136.861%2029.2601%20136.692%2029.2199C136.525%2029.1768%20136.372%2029.1553%20136.231%2029.1553C135.895%2029.1553%20135.727%2029.2586%20135.727%2029.4653C135.727%2029.5113%20135.734%2029.5529%20135.749%2029.5902C135.766%2029.6275%20135.795%2029.662%20135.835%2029.6936C135.875%2029.7251%20135.914%2029.7524%20135.951%2029.7754C135.991%2029.7983%20136.052%2029.8242%20136.132%2029.8529C136.212%2029.8816%20136.281%2029.9046%20136.339%2029.9218C136.396%2029.939%20136.484%2029.9663%20136.601%2030.0036C136.719%2030.038%20136.815%2030.0668%20136.89%2030.0897C137.143%2030.1672%20137.356%2030.2433%20137.532%2030.318C137.71%2030.3926%20137.882%2030.4845%20138.048%2030.5935C138.215%2030.6998%20138.348%2030.8175%20138.449%2030.9467C138.549%2031.0758%20138.628%2031.2323%20138.686%2031.416C138.746%2031.5969%20138.776%2031.8022%20138.776%2032.0318C138.776%2032.3218%20138.73%2032.583%20138.638%2032.8156C138.546%2033.0481%20138.424%2033.239%20138.272%2033.3883C138.123%2033.5347%20137.944%2033.6567%20137.734%2033.7543C137.524%2033.8519%20137.309%2033.9208%20137.088%2033.961C136.87%2034.0012%20136.639%2034.0213%20136.395%2034.0213C135.944%2034.0213%20135.472%2033.9553%20134.978%2033.8232C134.484%2033.6883%20134.049%2033.5103%20133.673%2033.2892L134.414%2031.7821C134.443%2031.8022%20134.481%2031.828%20134.53%2031.8596C134.582%2031.8883%20134.685%2031.9428%20134.84%2032.0232C134.998%2032.1007%20135.153%2032.1696%20135.305%2032.2299C135.457%2032.2902%20135.637%2032.3462%20135.844%2032.3979C136.053%2032.4467%20136.247%2032.4711%20136.425%2032.4711C136.758%2032.4711%20136.924%2032.3792%20136.924%2032.1955C136.924%2032.1266%20136.903%2032.0663%20136.86%2032.0146C136.817%2031.9601%20136.745%2031.9113%20136.644%2031.8682C136.544%2031.8223%20136.446%2031.7849%20136.352%2031.7562C136.26%2031.7246%20136.128%2031.6845%20135.956%2031.6357C135.786%2031.584%20135.645%2031.5395%20135.533%2031.5022C134.971%2031.3127%20134.565%2031.0859%20134.315%2030.8218C134.068%2030.5548%20133.945%2030.1959%20133.945%2029.7452C133.945%2029.4093%20134.008%2029.105%20134.134%2028.8323C134.263%2028.5596%20134.435%2028.3371%20134.651%2028.1648C134.869%2027.9926%20135.117%2027.8605%20135.396%2027.7687C135.674%2027.6768%20135.97%2027.6309%20136.283%2027.6309C136.952%2027.6309%20137.734%2027.8562%20138.63%2028.3069L137.889%2029.728Z'%20fill='%23363636'/%3e%3cpath%20d='M57.4063%208.99999V4.53875L55.5632%207.92344H54.9819L53.1302%204.53875V8.99999H52.1441V2.73875H53.2034L55.2747%206.56698L57.346%202.73875H58.4053V8.99999H57.4063Z'%20fill='%23363636'/%3e%3cpath%20d='M61.7139%208.99999V2.73875H62.7V8.99999H61.7139Z'%20fill='%23363636'/%3e%3cpath%20d='M66.999%204.5732V8.99999H66.0128V2.73875H66.8224L70.3707%207.26458V2.74737H71.3655V8.99999H70.4999L66.999%204.5732Z'%20fill='%23363636'/%3e%3cpath%20d='M74.6697%208.99999V2.73875H75.6558V8.99999H74.6697Z'%20fill='%23363636'/%3e%3cpath%20d='M82.672%204.21148C82.5371%204.0622%2082.3074%203.91866%2081.983%203.78086C81.6586%203.64306%2081.3242%203.57416%2080.9797%203.57416C80.572%203.57416%2080.2663%203.65024%2080.0625%203.80239C79.8615%203.95167%2079.761%204.16411%2079.761%204.43971C79.761%204.52583%2079.7725%204.60334%2079.7955%204.67224C79.8184%204.74114%2079.8471%204.80287%2079.8816%204.85741C79.9189%204.90909%2079.9735%204.95933%2080.0452%205.00813C80.117%205.05693%2080.1873%205.09856%2080.2562%205.13301C80.328%205.16746%2080.4242%205.20478%2080.5448%205.24497C80.6682%205.28229%2080.783%205.31531%2080.8893%205.34401C80.9955%205.36985%2081.1347%205.4043%2081.307%205.44736C81.5826%205.51339%2081.818%205.57942%2082.0132%205.64545C82.2084%205.70861%2082.3964%205.79042%2082.5773%205.8909C82.7581%205.98851%2082.9031%206.09904%2083.0122%206.22248C83.1213%206.34306%2083.2074%206.4909%2083.2706%206.66602C83.3366%206.84114%2083.3696%207.04066%2083.3696%207.26458C83.3696%207.51434%2083.3294%207.7397%2083.2491%207.94066C83.1715%208.14162%2083.0639%208.31099%2082.9261%208.44879C82.7883%208.58659%2082.6218%208.70286%2082.4266%208.7976C82.2314%208.88946%2082.0218%208.95693%2081.7979%208.99999C81.5739%209.04018%2081.3328%209.06028%2081.0744%209.06028C80.5979%209.06028%2080.1371%208.98851%2079.6921%208.84496C79.2471%208.69855%2078.8467%208.48898%2078.4907%208.21626L78.9428%207.36793C79.1237%207.55454%2079.418%207.7354%2079.8256%207.91052C80.2361%208.08277%2080.6582%208.16889%2081.0916%208.16889C81.4821%208.16889%2081.7821%208.09999%2081.9916%207.96219C82.2041%207.82439%2082.3103%207.62631%2082.3103%207.36793C82.3103%207.26458%2082.2945%207.17128%2082.2629%207.08803C82.2314%207.00478%2082.1768%206.93014%2082.0993%206.86411C82.0218%206.79521%2081.9414%206.73636%2081.8581%206.68755C81.7778%206.63875%2081.6615%206.58851%2081.5093%206.53683C81.3601%206.48516%2081.2223%206.4421%2081.0959%206.40765C80.9725%206.3732%2080.8046%206.3287%2080.5921%206.27416C80.262%206.18803%2079.9893%206.10047%2079.7739%206.01148C79.5586%205.92248%2079.3677%205.81339%2079.2012%205.6842C79.0376%205.55502%2078.9184%205.40287%2078.8438%205.22775C78.7692%205.04976%2078.7318%204.84019%2078.7318%204.59904C78.7318%204.2976%2078.7893%204.02631%2078.9041%203.78516C79.0218%203.54115%2079.1826%203.34019%2079.3864%203.18229C79.5902%203.0244%2079.8299%202.90383%2080.1055%202.82057C80.3811%202.73732%2080.6811%202.69569%2081.0055%202.69569C81.7749%202.69569%2082.4797%202.9311%2083.1199%203.40191L82.672%204.21148Z'%20fill='%23363636'/%3e%3cpath%20d='M90.8509%203.61292H88.771V8.99999H87.772V3.61292H85.6834V2.73875H90.8509V3.61292Z'%20fill='%23363636'/%3e%3cpath%20d='M96.1274%202.09282L95.4901%201.89904L95.9939%200.930145H96.9197L96.1274%202.09282ZM97.88%208.12583V8.99999H93.5867V2.73875H97.8025V3.61292H94.5728V5.39138H97.3676V6.21387H94.5728V8.12583H97.88Z'%20fill='%23363636'/%3e%3cpath%20d='M100.797%208.99999V2.73875H103.523C103.795%202.73875%20104.054%202.79761%20104.298%202.91531C104.545%203.03301%20104.751%203.18804%20104.918%203.38038C105.084%203.57272%20105.216%203.79091%20105.314%204.03492C105.412%204.27894%20105.46%204.52583%20105.46%204.77559C105.46%205.20047%20105.348%205.58516%20105.124%205.92966C104.901%206.27128%20104.605%206.50095%20104.237%206.61865L105.71%208.99999H104.599L103.238%206.82104H101.783V8.99999H100.797ZM101.783%205.94688H103.514C103.787%205.94688%20104.012%205.83349%20104.19%205.60669C104.368%205.37703%20104.457%205.09999%20104.457%204.77559C104.457%204.45693%20104.357%204.18421%20104.156%203.95741C103.955%203.72775%20103.722%203.61292%20103.458%203.61292H101.783V5.94688Z'%20fill='%23363636'/%3e%3cpath%20d='M108.523%208.99999V2.73875H109.51V8.99999H108.523Z'%20fill='%23363636'/%3e%3cpath%20d='M112.426%205.86937C112.426%205.45597%20112.502%205.05693%20112.654%204.67224C112.809%204.28469%20113.019%203.94593%20113.283%203.65598C113.547%203.36603%20113.867%203.13349%20114.243%202.95837C114.62%202.78325%20115.019%202.69569%20115.441%202.69569C115.874%202.69569%20116.28%202.78756%20116.659%202.97129C117.038%203.15502%20117.354%203.39761%20117.607%203.69904C117.862%203.9976%20118.063%204.3378%20118.209%204.71961C118.356%205.09856%20118.429%205.48468%20118.429%205.87798C118.429%206.29138%20118.352%206.69042%20118.197%207.07511C118.044%207.4598%20117.838%207.79712%20117.576%208.08707C117.315%208.37702%20116.997%208.60956%20116.62%208.78468C116.244%208.95693%20115.845%209.04305%20115.423%209.04305C115.073%209.04305%20114.74%208.98563%20114.424%208.8708C114.109%208.7531%20113.83%208.59233%20113.589%208.38851C113.351%208.18468%20113.142%207.94927%20112.965%207.68229C112.789%207.4153%20112.656%207.12679%20112.564%206.81674C112.472%206.50382%20112.426%206.18803%20112.426%205.86937ZM115.432%208.15166C115.736%208.15166%20116.016%208.08564%20116.272%207.95358C116.527%207.82152%20116.737%207.64784%20116.9%207.43253C117.064%207.21435%20117.19%206.97033%20117.279%206.70047C117.371%206.43061%20117.417%206.15358%20117.417%205.86937C117.417%205.57368%20117.368%205.28947%20117.271%205.01674C117.176%204.74114%20117.044%204.49856%20116.875%204.28899C116.708%204.07655%20116.498%203.90861%20116.246%203.78516C115.996%203.65885%20115.725%203.59569%20115.432%203.59569C115.128%203.59569%20114.846%203.66172%20114.588%203.79378C114.332%203.92296%20114.121%204.09521%20113.955%204.31052C113.788%204.52583%20113.659%204.76842%20113.567%205.03827C113.476%205.30813%20113.43%205.58516%20113.43%205.86937C113.43%206.26554%20113.509%206.63588%20113.666%206.98037C113.827%207.32487%20114.063%207.60621%20114.373%207.82439C114.683%208.04257%20115.036%208.15166%20115.432%208.15166Z'%20fill='%23363636'/%3e%3cpath%20d='M125.425%208.99999V2.73875H127.647C128.138%202.73875%20128.579%202.82057%20128.969%202.98421C129.362%203.14497%20129.684%203.3689%20129.934%203.65598C130.184%203.94019%20130.373%204.27033%20130.502%204.64641C130.634%205.01961%20130.7%205.4244%20130.7%205.86076C130.7%206.80813%20130.422%207.56889%20129.865%208.14305C129.311%208.71434%20128.572%208.99999%20127.647%208.99999H125.425ZM127.647%203.61292H126.411V8.12583H127.647C128.078%208.12583%20128.448%208.02678%20128.758%207.8287C129.071%207.62774%20129.305%207.35789%20129.46%207.01913C129.615%206.68037%20129.693%206.29425%20129.693%205.86076C129.693%205.19186%20129.51%204.65071%20129.146%204.23732C128.784%203.82105%20128.284%203.61292%20127.647%203.61292Z'%20fill='%23363636'/%3e%3cpath%20d='M135.21%202.73875H136.145L138.578%208.99999H137.536L136.877%207.29903H134.461L133.806%208.99999H132.756L135.21%202.73875ZM136.683%206.56698L135.675%203.82392L134.638%206.56698H136.683Z'%20fill='%23363636'/%3e%3c/svg%3e", W3 = "data:image/svg+xml,%3csvg%20width='58'%20height='27'%20viewBox='0%200%2058%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M38.6971%200.852353C38.6527%200.86075%2038.4938%200.879077%2038.3439%200.893125L38.0714%200.918678V12.7822L38.23%2012.7013C38.9879%2012.3146%2040.1563%2012.3041%2040.893%2012.6775L41.0859%2012.7752L41.1135%209.79453C41.1287%208.15518%2041.1287%205.48764%2041.1135%203.86673L41.0859%200.919566L40.9411%200.895789C40.7713%200.867895%2038.8156%200.83007%2038.6971%200.852353ZM0.972985%2018.3419L1.26566%2018.3659C1.98667%2018.4252%202.6588%2018.4352%203.28976%2018.3959C3.66478%2018.3725%203.9763%2018.3484%203.98208%2018.3423C3.98781%2018.3362%204.00593%2016.8552%204.02228%2015.0512L4.05199%2011.7713H5.25465C6.29082%2011.7713%206.46602%2011.78%206.52031%2011.8343C6.64%2011.954%207.32824%2012.9238%207.73612%2013.5475C8.4919%2014.7032%209.11849%2015.7994%209.90515%2017.3421C10.1712%2017.8639%2010.4021%2018.3054%2010.4182%2018.3232C10.4804%2018.3918%2011.9947%2018.439%2012.7918%2018.3972C13.2235%2018.3746%2013.5882%2018.3445%2013.6022%2018.3304C13.6163%2018.3164%2013.3333%2017.7204%2012.9734%2017.006C11.9561%2014.987%2011.0532%2013.4482%2010.1318%2012.1631C9.87387%2011.8033%209.66944%2011.4971%209.67756%2011.4827C9.68563%2011.4683%209.78772%2011.4339%209.90434%2011.4064C10.2616%2011.3219%2010.8997%2011.0879%2011.2433%2010.9152C11.7261%2010.6726%2012.0186%2010.4628%2012.3568%2010.1165C12.8061%209.65659%2013.1034%209.1098%2013.2682%208.44094C13.3556%208.08566%2013.397%206.76501%2013.3603%205.5002C13.3297%204.44868%2013.2701%204.1479%2012.9671%203.51601C12.4121%202.35882%2011.3347%201.61644%209.65422%201.23351C8.44539%200.958037%207.64639%200.913592%203.88959%200.912865L0.972985%200.91226V18.3419ZM45.4418%205.27203C45.4256%207.66991%2045.4256%2011.5927%2045.4418%2013.9894L45.4712%2018.3471L45.6971%2018.3794C45.9939%2018.4218%2047.7735%2018.4207%2048.1736%2018.378L48.4864%2018.3445V12.1034L50.4342%2012.0823C52.5099%2012.0598%2052.8979%2012.0316%2053.9092%2011.8298C56.1207%2011.3885%2057.3657%2010.3337%2057.7422%208.58223C57.8174%208.23236%2057.8247%208.05543%2057.8257%206.56382C57.8269%204.80186%2057.8072%204.57976%2057.5953%203.9572C57.051%202.35817%2055.6448%201.42514%2053.2499%201.07414C52.3692%200.945039%2051.423%200.913874%2048.3614%200.913027L45.4712%200.91226L45.4418%205.27203ZM8.16161%203.65028C9.40798%203.87424%2010.0096%204.35111%2010.2458%205.30231C10.335%205.66147%2010.3467%207.1555%2010.263%207.49229C10.0344%208.41228%209.40446%208.91079%208.19891%209.12587C7.7335%209.20891%205.60456%209.2846%204.74342%209.24871L4.05151%209.21989L4.02192%207.81483C4.00565%207.04206%204.00577%205.76109%204.0222%204.96826L4.05212%203.52671L5.87321%203.54653C7.48532%203.56405%207.74795%203.57596%208.16161%203.65028ZM52.5676%203.64895C53.6129%203.84053%2054.2074%204.20478%2054.5256%204.84845C54.7446%205.29157%2054.7955%205.68004%2054.7744%206.74547C54.7583%207.55966%2054.7483%207.65925%2054.6549%207.94199C54.3754%208.78827%2053.7356%209.23906%2052.5054%209.45637C52.2199%209.50679%2051.7394%209.52519%2050.3131%209.54033L48.4864%209.55971V3.52619L50.3131%203.54835C51.8831%203.5674%2052.1999%203.58153%2052.5676%203.64895ZM17.201%2018.3841L17.413%2018.4137C17.9971%2018.495%2019.5756%2018.4949%2020.0575%2018.4135L20.2179%2018.3864L20.2479%2015.4261C20.2749%2012.75%2020.2422%206.40234%2020.201%206.40234C20.1918%206.40234%2020.1343%206.42818%2020.0733%206.45975C19.8682%206.5658%2019.4404%206.68621%2019.075%206.74083C18.7728%206.78596%2018.6562%206.78604%2018.3758%206.74144C17.9543%206.67439%2017.6434%206.58477%2017.3945%206.45866L17.201%206.3606V18.3841Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.1093%200.868502C17.9539%200.902493%2017.636%201.02279%2017.403%201.13578C17.0293%201.31691%2016.9361%201.38481%2016.6141%201.70994C16.3093%202.01775%2016.2179%202.14196%2016.061%202.46127C15.7962%203.00019%2015.7324%203.27005%2015.7317%203.85305C15.731%204.39592%2015.7918%204.68783%2015.9993%205.13846C16.304%205.80038%2016.8493%206.34018%2017.537%206.66078C17.9421%206.84963%2018.2596%206.91514%2018.7754%206.9164C19.3053%206.91769%2019.573%206.85944%2020.0596%206.63701L20.3762%206.49229L36.5576%2015.4479L36.5864%2015.6654C36.6656%2016.2631%2036.7964%2016.6354%2037.0833%2017.0792C37.8981%2018.3394%2039.5469%2018.8066%2040.9174%2018.1655C41.5733%2017.8586%2042.0565%2017.3813%2042.3703%2016.7305C42.5883%2016.2784%2042.6734%2015.9011%2042.6734%2015.3868C42.6734%2014.2115%2042.0095%2013.1656%2040.9268%2012.635C40.4543%2012.4034%2040.1557%2012.3355%2039.6256%2012.3389C39.1044%2012.3423%2038.6827%2012.4393%2038.296%2012.6446L38.0438%2012.7785L29.9537%208.30147C25.5041%205.83909%2021.8502%203.8036%2021.8339%203.77817C21.8176%203.75273%2021.8037%203.65928%2021.8031%203.57047C21.7998%203.14128%2021.5242%202.4402%2021.1805%201.98658C20.819%201.50967%2020.2502%201.11721%2019.6433%200.926027C19.2687%200.80799%2018.515%200.779733%2018.1093%200.868502ZM8.93563%2022.5537L0.932617%2022.5639V26.8428H57.9326V22.5771L45.9365%2022.5503C34.8001%2022.5253%2030.6857%2022.5257%208.93563%2022.5537ZM24.5876%2023.0846C24.7453%2023.1401%2024.8329%2023.1511%2024.9039%2023.1241C24.9803%2023.095%2025.0141%2023.1026%2025.0564%2023.1583C25.1311%2023.2568%2025.1288%2023.2638%2024.996%2023.3422C24.8498%2023.4286%2024.7557%2023.4293%2024.5464%2023.3456C24.4206%2023.2952%2024.3593%2023.2898%2024.2871%2023.3227C24.2103%2023.3577%2024.1797%2023.3517%2024.1241%2023.2903C24.0414%2023.1989%2024.0724%2023.1389%2024.24%2023.0659C24.3096%2023.0357%2024.3679%2023.0094%2024.3679%2023.0094C24.3679%2023.0094%2024.4676%2023.0424%2024.5876%2023.0846ZM6.62575%2023.6577C7.08741%2023.7567%207.25328%2024.0807%207.22159%2024.8213C7.20032%2025.3191%207.11756%2025.5296%206.88718%2025.6719C6.7123%2025.78%206.34653%2025.8198%206.11166%2025.7563C5.70205%2025.6455%205.5545%2025.3608%205.55535%2024.6831C5.55579%2024.301%205.56895%2024.2123%205.64961%2024.0476C5.82356%2023.6923%206.16019%2023.5579%206.62575%2023.6577ZM11.1662%2023.7304C11.3613%2023.8167%2011.4603%2023.9419%2011.511%2024.1664C11.5505%2024.3418%2011.5165%2024.3788%2011.3153%2024.3797C11.2012%2024.3802%2011.1736%2024.3602%2011.1236%2024.2405C11.0567%2024.0804%2010.9612%2024.017%2010.787%2024.017C10.6026%2024.017%2010.4682%2024.0953%2010.4212%2024.2304C10.3585%2024.4103%2010.3682%2025.0438%2010.4361%2025.2064C10.5352%2025.4435%2010.9409%2025.4886%2011.1044%2025.2807C11.2001%2025.159%2011.1725%2025.0752%2011.0313%2025.0588C10.9348%2025.0477%2010.9238%2025.0298%2010.9238%2024.8849V24.7234L11.5048%2024.6998L11.5321%2024.8451C11.5734%2025.0656%2011.5297%2025.383%2011.4418%2025.5008C11.2656%2025.7368%2010.8286%2025.8505%2010.4764%2025.7519C10.0912%2025.6441%209.92739%2025.3135%209.92739%2024.644C9.92739%2024.3568%209.94633%2024.2245%2010.007%2024.0873C10.1932%2023.6664%2010.6817%2023.516%2011.1662%2023.7304ZM22.8111%2023.6572C23.0724%2023.7132%2023.2713%2023.8942%2023.3361%2024.1348C23.3924%2024.3436%2023.3554%2024.3871%2023.1354%2024.3707C23.0235%2024.3623%2022.9826%2024.3352%2022.937%2024.239C22.8567%2024.07%2022.777%2024.0196%2022.5902%2024.0196C22.2861%2024.0196%2022.2067%2024.1637%2022.2068%2024.716C22.2069%2025.1849%2022.2771%2025.3511%2022.4968%2025.4021C22.7236%2025.4548%2022.8589%2025.3727%2022.9333%2025.1374L22.9939%2024.9459L23.1856%2024.9457C23.3601%2024.9455%2023.3774%2024.954%2023.3774%2025.0404C23.3774%2025.3402%2023.1708%2025.6381%2022.8903%2025.7427C22.7129%2025.809%2022.694%2025.8261%2022.7489%2025.8716C22.7837%2025.9005%2022.8122%2025.9754%2022.8122%2026.0381C22.8122%2026.1838%2022.6817%2026.2776%2022.4789%2026.2776C22.3375%2026.2776%2022.3285%2026.271%2022.3682%2026.1969C22.3934%2026.1497%2022.4527%2026.1162%2022.5109%2026.1162C22.6351%2026.1162%2022.6503%2025.9745%2022.5295%2025.9429C22.4801%2025.9301%2022.4572%2025.8994%2022.4706%2025.8644C22.4859%2025.8245%2022.4433%2025.7922%2022.3313%2025.7587C21.9401%2025.6415%2021.7827%2025.3499%2021.7831%2024.7436C21.7833%2024.5327%2021.809%2024.2714%2021.8404%2024.163C21.9137%2023.9091%2022.1087%2023.7116%2022.3366%2023.6606C22.5735%2023.6076%2022.5797%2023.6076%2022.8111%2023.6572ZM27.2073%2023.7432C27.3522%2023.8122%2027.4026%2023.8676%2027.4889%2024.0533C27.5809%2024.2511%2027.5941%2024.3324%2027.5948%2024.7033C27.596%2025.3479%2027.4447%2025.6441%2027.0597%2025.7511C26.7515%2025.8367%2026.3411%2025.7729%2026.163%2025.6117C25.8783%2025.354%2025.8099%2024.3977%2026.0462%2023.9773C26.2386%2023.6349%2026.759%2023.53%2027.2073%2023.7432ZM30.1965%2023.7246C30.3618%2023.8058%2030.5314%2024.0364%2030.5142%2024.1567C30.5049%2024.2216%2030.4678%2024.2416%2030.3387%2024.2511C30.1981%2024.2614%2030.1672%2024.2485%2030.1195%2024.1595C29.9844%2023.9071%2029.4326%2023.9872%2029.4326%2024.2592C29.4326%2024.404%2029.5322%2024.4647%2029.8373%2024.5061C30.3464%2024.5751%2030.5547%2024.7317%2030.5902%2025.0721C30.6158%2025.3181%2030.4767%2025.5785%2030.2602%2025.6899C30.0351%2025.8058%2029.5957%2025.8051%2029.3721%2025.6886C29.2057%2025.602%2029.0447%2025.4058%2029.0027%2025.2387C28.9724%2025.1178%2028.9871%2025.1049%2029.1861%2025.0782C29.3343%2025.0583%2029.3537%2025.0661%2029.3895%2025.1602C29.4496%2025.3184%2029.6135%2025.4053%2029.8449%2025.4018C30.076%2025.3983%2030.1693%2025.3297%2030.1693%2025.1635C30.1693%2025.0034%2030.0423%2024.9204%2029.7478%2024.8881C29.4071%2024.8506%2029.1746%2024.7356%2029.0932%2024.5642C28.9658%2024.2956%2029.0456%2023.9332%2029.2637%2023.7903C29.542%2023.608%2029.9067%2023.5823%2030.1965%2023.7246ZM32.3571%2023.7486C32.5884%2023.8745%2032.7056%2024.125%2032.732%2024.5497C32.7684%2025.1353%2032.6377%2025.5146%2032.339%2025.6901C32.1392%2025.8075%2031.6131%2025.8083%2031.4107%2025.6916C31.1823%2025.56%2031.0776%2025.299%2031.0557%2024.8061C31.0247%2024.1085%2031.1796%2023.7854%2031.6006%2023.6696C31.8436%2023.6027%2032.1478%2023.6345%2032.3571%2023.7486ZM34.306%2023.6743C34.5498%2023.7467%2034.7439%2023.9444%2034.7848%2024.1618C34.8157%2024.3271%2034.7702%2024.3787%2034.5925%2024.3797C34.4765%2024.3804%2034.3575%2024.2884%2034.3575%2024.1981C34.3575%2024.1081%2034.1897%2024.017%2034.0238%2024.017C33.715%2024.017%2033.5875%2024.323%2033.644%2024.9285C33.6726%2025.2346%2033.7288%2025.3352%2033.9031%2025.3928C34.1638%2025.4788%2034.3592%2025.3443%2034.4061%2025.0464C34.4164%2024.981%2034.4551%2024.9633%2034.6102%2024.9533L34.8016%2024.941L34.8007%2025.0744C34.7995%2025.2539%2034.6748%2025.5179%2034.5417%2025.6225C34.2811%2025.8275%2033.8326%2025.8436%2033.5521%2025.658C33.3233%2025.5066%2033.2536%2025.3223%2033.2347%2024.8192C33.2083%2024.1144%2033.3516%2023.8003%2033.7571%2023.6738C33.989%2023.6014%2034.061%2023.6015%2034.306%2023.6743ZM44.9157%2023.7126C45.0815%2023.7816%2045.2447%2023.9839%2045.3015%2024.1904C45.3635%2024.4162%2045.3622%2024.9578%2045.2989%2025.2215C45.2099%2025.5925%2044.9335%2025.7928%2044.5102%2025.7928C44.117%2025.7928%2043.8102%2025.594%2043.7283%2025.2862C43.6089%2024.8374%2043.6381%2024.2865%2043.7976%2023.979C43.9628%2023.6607%2044.4896%2023.5351%2044.9157%2023.7126ZM50.6922%2023.7372C50.9753%2023.8743%2051.1401%2024.3107%2050.9287%2024.3637C50.7901%2024.3985%2050.626%2024.3514%2050.626%2024.2768C50.626%2024.2429%2050.5814%2024.1706%2050.5269%2024.1161C50.3921%2023.9814%2050.136%2023.9785%2050.0044%2024.1101C49.8528%2024.2617%2049.8203%2024.9006%2049.9471%2025.2364C50.0025%2025.3829%2050.2097%2025.4536%2050.3998%2025.3909C50.5323%2025.3472%2050.5763%2025.2836%2050.6468%2025.0342C50.6701%2024.9518%2050.6943%2024.9427%2050.8615%2024.9535L51.0498%2024.9657L51.0369%2025.1069C51.0163%2025.3325%2050.8776%2025.5789%2050.7139%2025.6807C50.5936%2025.7555%2050.5079%2025.773%2050.2626%2025.773C49.8972%2025.773%2049.7259%2025.6855%2049.5748%2025.4218C49.4833%2025.2618%2049.4755%2025.2071%2049.4755%2024.7234C49.4755%2024.2641%2049.4862%2024.1785%2049.562%2024.0372C49.6756%2023.8252%2049.7745%2023.74%2049.9869%2023.6712C50.2009%2023.6019%2050.4633%2023.6264%2050.6922%2023.7372ZM9.03146%2023.7368C9.43191%2023.9307%209.48702%2024.5511%209.12871%2024.8315L8.99921%2024.9329L9.22268%2025.3317C9.46106%2025.757%209.46098%2025.7914%209.22151%2025.7926C9.01103%2025.7936%208.97571%2025.7608%208.76184%2025.3652C8.56428%2024.9998%208.5516%2024.9858%208.41819%2024.9858H8.27964V25.365C8.27964%2025.777%208.2704%2025.7932%208.03554%2025.7932C7.841%2025.7932%207.8259%2025.7123%207.84463%2024.7692C7.85396%2024.3%207.87608%2023.8837%207.89376%2023.8442C7.95407%2023.7094%208.12204%2023.657%208.499%2023.6553C8.78303%2023.6541%208.89619%2023.6714%209.03146%2023.7368ZM13.0757%2023.7049C13.0991%2023.7331%2013.2735%2024.2%2013.4633%2024.7425C13.8297%2025.7901%2013.8299%2025.792%2013.5881%2025.792C13.4268%2025.792%2013.3866%2025.7599%2013.3299%2025.5857C13.2845%2025.4466%2013.2707%2025.4376%2013.0717%2025.4157C12.9561%2025.403%2012.7903%2025.4056%2012.7033%2025.4215C12.5745%2025.445%2012.5379%2025.4728%2012.5061%2025.5713C12.4464%2025.7566%2012.4007%2025.7932%2012.2295%2025.7932C12.1404%2025.7932%2012.0634%2025.7712%2012.0525%2025.7427C12.0306%2025.685%2012.6541%2023.8823%2012.7437%2023.7445C12.8097%2023.643%2013.005%2023.6197%2013.0757%2023.7049ZM15.5661%2024.9657L15.5915%2024.4005C15.6054%2024.0897%2015.619%2023.7945%2015.6217%2023.7445C15.6261%2023.6631%2015.6476%2023.6537%2015.8285%2023.6537H16.0303V24.6337C16.0303%2025.6919%2016.0115%2025.7932%2015.815%2025.7932C15.6584%2025.7932%2015.5648%2025.6885%2015.1774%2025.0805L14.7991%2024.4866L14.7683%2025.0894C14.7514%2025.421%2014.7292%2025.715%2014.7191%2025.7427C14.709%2025.7705%2014.6471%2025.7932%2014.5817%2025.7932C14.3231%2025.7932%2014.3349%2025.8457%2014.3349%2024.6968V23.6495L14.7552%2023.6739L15.5661%2024.9657ZM17.1203%2025.7513L17.0235%2025.7756C16.9702%2025.789%2016.8839%2025.7939%2016.8317%2025.7865C16.7464%2025.7744%2016.7342%2025.7466%2016.7112%2025.5106C16.6755%2025.1433%2016.6714%2024.4604%2016.7025%2024.0232L16.7287%2023.6537H17.1203V25.7513ZM19.1387%2023.8184C19.1387%2023.9621%2019.0796%2024.0696%2018.6745%2024.6629C18.4191%2025.0368%2018.2102%2025.3532%2018.2102%2025.3661C18.2102%2025.379%2018.4191%2025.3895%2018.6745%2025.3895H19.1387V25.7479L18.9539%2025.7756C18.8523%2025.7909%2018.5711%2025.7951%2018.3291%2025.7852C17.9766%2025.7707%2017.873%2025.7524%2017.8075%2025.6931C17.6935%2025.59%2017.7034%2025.3936%2017.8321%2025.2034C17.8905%2025.117%2018.0903%2024.8256%2018.2761%2024.5558C18.4619%2024.286%2018.6139%2024.0544%2018.6139%2024.0411C18.6139%2024.0279%2018.4232%2024.017%2018.1901%2024.017H17.7662V23.6537H19.1387V23.8184ZM20.6232%2023.7041C20.6458%2023.7319%2020.8199%2024.199%2021.0101%2024.7422C21.2637%2025.4666%2021.3428%2025.7381%2021.3069%2025.7609C21.2245%2025.8133%2021.0048%2025.7966%2020.9413%2025.7331C20.9082%2025.7%2020.8696%2025.6202%2020.8554%2025.5558C20.832%2025.449%2020.8112%2025.4366%2020.62%2025.4156C20.5046%2025.4029%2020.3391%2025.4056%2020.2521%2025.4215C20.1233%2025.445%2020.0868%2025.4728%2020.055%2025.5713C20.0335%2025.6379%2019.998%2025.715%2019.9761%2025.7427C19.9273%2025.8044%2019.6382%2025.8099%2019.6011%2025.7499C19.5684%2025.697%2020.2163%2023.8234%2020.3015%2023.7243C20.3719%2023.6425%2020.5632%2023.6305%2020.6232%2023.7041ZM24.7648%2023.7445C24.7962%2023.7945%2024.9705%2024.2603%2025.1522%2024.7798C25.5061%2025.7914%2025.5061%2025.792%2025.2545%2025.792C25.0934%2025.792%2025.053%2025.7599%2024.9966%2025.5866C24.9534%2025.4541%2024.9322%2025.4382%2024.7687%2025.4158C24.6696%2025.4022%2024.5073%2025.4022%2024.4081%2025.4158C24.2446%2025.4382%2024.2235%2025.4541%2024.1803%2025.5866C24.1238%2025.7599%2024.0835%2025.792%2023.9223%2025.792C23.6698%2025.792%2023.6696%2025.7937%2024.0405%2024.7393C24.231%2024.1977%2024.4175%2023.7319%2024.455%2023.7041C24.5609%2023.6257%2024.7016%2023.644%2024.7648%2023.7445ZM35.825%2023.8656C35.859%2024.1484%2035.8539%2025.4081%2035.818%2025.6115C35.7875%2025.7845%2035.7069%2025.8266%2035.5039%2025.7756L35.4071%2025.7513V23.6537H35.7995L35.825%2023.8656ZM37.4195%2023.6895C37.5035%2023.7427%2038.1889%2025.7265%2038.1357%2025.7623C38.0744%2025.8036%2037.8612%2025.7994%2037.792%2025.7556C37.7604%2025.7356%2037.715%2025.659%2037.6911%2025.5853C37.6541%2025.4715%2037.6232%2025.447%2037.4861%2025.4232C37.3973%2025.4077%2037.2302%2025.4053%2037.1147%2025.4178C36.9237%2025.4385%2036.9025%2025.451%2036.8793%2025.5567C36.8653%2025.6206%2036.8267%2025.7%2036.7936%2025.7331C36.7309%2025.7958%2036.5101%2025.8136%2036.4313%2025.7623C36.3776%2025.7274%2037.0247%2023.8428%2037.1304%2023.726C37.2001%2023.649%2037.3298%2023.6326%2037.4195%2023.6895ZM39.1614%2024.4732C39.1614%2025.0567%2039.1753%2025.3066%2039.2098%2025.3411C39.2409%2025.3722%2039.4%2025.3895%2039.6539%2025.3895H40.0495V25.5694C40.0495%2025.7442%2040.0454%2025.7499%2039.9026%2025.7767C39.705%2025.8138%2039.1418%2025.7675%2039.0113%2025.7035C38.9535%2025.6751%2038.8684%2025.6008%2038.8221%2025.5382C38.7454%2025.4347%2038.7366%2025.3582%2038.7232%2024.6801C38.7151%2024.2706%2038.7203%2023.8722%2038.7349%2023.7947C38.7609%2023.6561%2038.7648%2023.6537%2038.9613%2023.6537H39.1614V24.4732ZM42.8501%2023.7712C43.097%2023.9246%2043.1715%2024.1389%2043.1741%2024.7033C43.1767%2025.2423%2043.1299%2025.4155%2042.9358%2025.586C42.6019%2025.8791%2041.7481%2025.8219%2041.6275%2025.4984C41.5723%2025.3502%2041.5352%2024.4814%2041.5657%2024.0512L41.5944%2023.6462L42.144%2023.66C42.6412%2023.6725%2042.7085%2023.6832%2042.8501%2023.7712ZM47.8906%2024.8444L48.487%2023.6537H48.8901V25.7513L48.7892%2025.7766C48.7337%2025.7905%2048.6433%2025.7907%2048.5884%2025.7769L48.4886%2025.7518L48.4663%2024.562L48.2575%2024.9944C48.0883%2025.345%2048.0291%2025.4317%2047.9442%2025.453C47.7935%2025.4908%2047.7303%2025.4211%2047.5206%2024.9858L47.3359%2024.6023L47.3158%2025.1473C47.3047%2025.447%2047.2809%2025.715%2047.2629%2025.7427C47.2286%2025.7957%2047.0442%2025.8104%2046.9356%2025.7687C46.8796%2025.7472%2046.8717%2025.6149%2046.8717%2024.6989V23.6537H47.2969L47.8906%2024.8444ZM53.0481%2024.017H52.4829L52.4789%2024.673C52.4767%2025.0338%2052.4631%2025.4289%2052.4486%2025.551C52.4258%2025.7442%2052.41%2025.7748%2052.3274%2025.7865C52.2752%2025.7939%2052.1889%2025.789%2052.1356%2025.7756L52.0388%2025.7513V24.017H51.4737V23.6537H53.0481V24.017ZM54.0169%2025.7513L53.916%2025.7766C53.8605%2025.7905%2053.7696%2025.7905%2053.7141%2025.7766L53.6132%2025.7513V23.6537H54.0169V25.7513ZM6.11328%2024.1134C6.00638%2024.2054%206.00049%2024.2293%205.98555%2024.6329C5.96654%2025.1459%206.0256%2025.3184%206.24472%2025.3907C6.4221%2025.4493%206.64158%2025.3819%206.73422%2025.2405C6.80648%2025.1302%206.83385%2024.4993%206.77544%2024.2906C6.69826%2024.0149%206.33946%2023.9188%206.11328%2024.1134ZM8.32808%2024.0654C8.30067%2024.0929%208.27964%2024.2242%208.27964%2024.3682V24.6225H8.53578C8.74271%2024.6225%208.80629%2024.6066%208.8668%2024.5398C8.97527%2024.4199%208.9657%2024.1875%208.84839%2024.0925C8.74097%2024.0055%208.40547%2023.9881%208.32808%2024.0654ZM26.4882%2024.0876C26.2679%2024.2662%2026.2667%2025.1307%2026.4865%2025.3297C26.6152%2025.4461%2026.9086%2025.429%2027.0403%2025.2974C27.1337%2025.204%2027.148%2025.1522%2027.1639%2024.849C27.1864%2024.4204%2027.1529%2024.2364%2027.0299%2024.1134C26.9096%2023.9932%2026.6217%2023.9795%2026.4882%2024.0876ZM31.6494%2024.0688C31.5152%2024.1717%2031.4765%2024.3154%2031.4784%2024.7033C31.4807%2025.1733%2031.5239%2025.2928%2031.7213%2025.3752C31.9036%2025.4514%2032.15%2025.3955%2032.2215%2025.2618C32.2953%2025.1241%2032.3309%2024.7421%2032.2962%2024.4613C32.2703%2024.2515%2032.2426%2024.1809%2032.1579%2024.1081C32.0392%2024.006%2031.7593%2023.9843%2031.6494%2024.0688ZM41.9871%2024.6353C41.9871%2025.3569%2042.0003%2025.3895%2042.2909%2025.3895C42.6859%2025.3895%2042.7713%2025.244%2042.7482%2024.6109C42.7298%2024.1057%2042.682%2024.0472%2042.2699%2024.0239L41.9871%2024.0079V24.6353ZM44.2284%2024.1134C44.1054%2024.2364%2044.0719%2024.4204%2044.0944%2024.849C44.1103%2025.1522%2044.1246%2025.204%2044.218%2025.2974C44.3497%2025.429%2044.6431%2025.4461%2044.7718%2025.3297C44.9954%2025.1273%2044.9859%2024.2356%2044.7585%2024.0763C44.6215%2023.9804%2044.3419%2024%2044.2284%2024.1134ZM20.3605%2024.5742C20.2113%2025.0511%2020.2125%2025.0162%2020.343%2025.0449C20.498%2025.079%2020.6727%2025.0326%2020.6727%2024.9575C20.6727%2024.8694%2020.5083%2024.3429%2020.4742%2024.3218C20.4581%2024.3119%2020.407%2024.4254%2020.3605%2024.5742ZM37.1626%2024.6408C37.1036%2024.8342%2037.0675%2025.0046%2037.0823%2025.0194C37.1189%2025.056%2037.4517%2025.0538%2037.4888%2025.0168C37.52%2024.9855%2037.3586%2024.3854%2037.3025%2024.3246C37.2846%2024.3051%2037.2216%2024.4474%2037.1626%2024.6408ZM12.7852%2024.6716C12.7294%2024.854%2012.6934%2025.0129%2012.7053%2025.0248C12.7334%2025.0529%2013.1106%2025.0529%2013.1387%2025.0248C13.1703%2024.9932%2012.9636%2024.3399%2012.922%2024.3399C12.9026%2024.3399%2012.8411%2024.4892%2012.7852%2024.6716ZM24.573%2024.3803C24.5596%2024.4136%2024.5046%2024.5715%2024.4507%2024.731L24.3527%2025.0212L24.4706%2025.0471C24.5354%2025.0613%2024.6436%2025.0609%2024.7111%2025.046C24.8474%2025.0161%2024.849%2025.0506%2024.69%2024.5889C24.6332%2024.4238%2024.588%2024.3432%2024.573%2024.3803Z'%20fill='%23001EFF'/%3e%3c/svg%3e", he = {
  MT: O3,
  AC: _3,
  AL: y3,
  AM: x3,
  AP: k3,
  BA: A3,
  BR: E3,
  CE: S3,
  DF: R3,
  ES: P3,
  GO: M3,
  MA: I3,
  MG: L3,
  MS: N3,
  PA: H3,
  PB: T3,
  PE: F3,
  PI: V3,
  PR: z3,
  RJ: D3,
  RN: U3,
  RS: j3
}, p2 = [
  { name: "BR - Padrão Nacional", flag: he.BR, abbreviation: "BR" },
  { name: "Acre", flag: he.AC, abbreviation: "AC" },
  { name: "Alagoas", flag: he.AL, abbreviation: "AL" },
  { name: "Amapá", flag: he.AP, abbreviation: "AP" },
  { name: "Amazonas", flag: he.AM, abbreviation: "AM" },
  { name: "Bahia", flag: he.BA, abbreviation: "BA" },
  { name: "Ceará", flag: he.CE, abbreviation: "CE" },
  { name: "Distrito Federal", flag: he.DF, abbreviation: "DF" },
  { name: "Espirito Santo", flag: he.ES, abbreviation: "ES" },
  { name: "Goiás", flag: he.GO, abbreviation: "GO" },
  { name: "Maranhão", flag: he.MA, abbreviation: "MA" },
  { name: "Mato Grosso", flag: he.MT, abbreviation: "MT" },
  { name: "Mato Grosso do Sul", flag: he.MS, abbreviation: "MS" },
  { name: "Minas Gerais", flag: he.MG, abbreviation: "MG" },
  { name: "Pará", flag: he.PA, abbreviation: "PA" },
  { name: "Paraíba", flag: he.PB, abbreviation: "PB" },
  { name: "Paraná", flag: he.PR, abbreviation: "PR" },
  { name: "Pernambuco", flag: he.PE, abbreviation: "PE" },
  { name: "Piaui", flag: he.PI, abbreviation: "PI" },
  { name: "Rio de Janeiro", flag: he.RJ, abbreviation: "RJ" },
  { name: "Rio Grande do Norte", flag: he.RN, abbreviation: "RN" },
  { name: "Rio Grande do Sul", flag: he.RS, abbreviation: "RS" }
], fs = {
  countGloss: { count: 0, max: 0 },
  config: { baseUrl: "", personalizationUrl: "" },
  avatar: "icaro",
  status: "idle",
  speed: 1,
  progress: 0,
  gloss: void 0,
  instance: void 0,
  showSubtitles: !1,
  isPlayingWelcome: !0,
  isWelcomeFinished: !1,
  isLoaded: !1,
  region: p2[0],
  emotion: go.default
}, ne = et()(
  on(
    (t) => ({
      ...fs,
      send: () => {
      },
      reset: () => t((e) => ({ ...fs, avatar: e.avatar }))
    }),
    {
      name: "@vlibras/player",
      version: 1,
      storage: nn(() => localStorage),
      partialize: (t) => sn(t, "speed", "showSubtitles", "avatar", "config")
    }
  )
), X = {
  get: ne.getState,
  set: ne.setState,
  subscribe: ne.subscribe
}, H0 = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M7.825 13L12.725 17.9C12.925 18.1 13.0208 18.3334 13.0125 18.6C13.0042 18.8667 12.9 19.1 12.7 19.3C12.5 19.4834 12.2667 19.5792 12 19.5875C11.7333 19.5959 11.5 19.5 11.3 19.3L4.7 12.7C4.6 12.6 4.52917 12.4917 4.4875 12.375C4.44584 12.2584 4.425 12.1334 4.425 12C4.425 11.8667 4.44584 11.7417 4.4875 11.625C4.52917 11.5084 4.6 11.4 4.7 11.3L11.3 4.70005C11.4833 4.51672 11.7125 4.42505 11.9875 4.42505C12.2625 4.42505 12.5 4.51672 12.7 4.70005C12.9 4.90005 13 5.13755 13 5.41255C13 5.68755 12.9 5.92505 12.7 6.12505L7.825 11H19C19.2833 11 19.5208 11.0959 19.7125 11.2875C19.9042 11.4792 20 11.7167 20 12C20 12.2834 19.9042 12.5209 19.7125 12.7125C19.5208 12.9042 19.2833 13 19 13H7.825Z" })
    ]
  }
), G3 = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M5.4175 12.9901L16.5875 12.9901L11.7075 17.8701C11.3175 18.2601 11.3175 18.9001 11.7075 19.2901C11.8 19.3828 11.9099 19.4563 12.0309 19.5065C12.1518 19.5567 12.2815 19.5825 12.4125 19.5825C12.5435 19.5825 12.6732 19.5567 12.7941 19.5065C12.9151 19.4563 13.025 19.3828 13.1175 19.2901L19.7075 12.7001C20.0975 12.3101 20.0975 11.6801 19.7075 11.2901L13.1175 4.70006C12.7275 4.31006 12.0975 4.31006 11.7075 4.70006C11.3175 5.09006 11.3175 5.72006 11.7075 6.11006L16.5875 10.9901L5.4175 10.9901C4.8675 10.9901 4.4175 11.4401 4.4175 11.9901C4.4175 12.5401 4.8675 12.9901 5.4175 12.9901Z" })
    ]
  }
), Y3 = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M19.1498 2.27534C19.5171 1.90822 20.111 1.90822 20.4743 2.27534L21.7246 3.52509C22.0918 3.89221 22.0918 4.48584 21.7246 4.84905L18.3255 8.24683L19.8492 9.76997C20.1188 10.0394 20.1969 10.4417 20.0524 10.7932C19.9078 11.1447 19.5679 11.3751 19.1889 11.3751H13.5628C13.0432 11.3751 12.6251 10.9572 12.6251 10.4378V4.8139C12.6251 4.43507 12.8517 4.09139 13.2034 3.94689C13.555 3.80238 13.9574 3.88049 14.227 4.14997L15.7507 5.67311L19.1498 2.27534ZM4.8111 12.6249H10.4372C10.9568 12.6249 11.3749 13.0428 11.3749 13.5622V19.1861C11.3749 19.5649 11.1483 19.9086 10.7966 20.0531C10.445 20.1976 10.0426 20.1195 9.773 19.85L8.24927 18.3269L4.85017 21.7247C4.48291 22.0918 3.88904 22.0918 3.52569 21.7247L2.27544 20.4749C1.90819 20.1078 1.90819 19.5142 2.27544 19.1509L5.67455 15.7532L4.15081 14.23C3.88123 13.9606 3.80309 13.5583 3.94765 13.2068C4.09221 12.8553 4.43212 12.6249 4.8111 12.6249Z" })
    ]
  }
), Q3 = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M22 11.3742C22 16.5496 17.5234 20.7485 12 20.7485C10.5508 20.7485 9.17578 20.4594 7.93359 19.94L3.30859 21.9242C2.94141 22.0804 2.51953 21.9906 2.25 21.6976C1.98047 21.4047 1.92188 20.975 2.10938 20.6235L4.01562 17.0222C2.75 15.4481 2 13.4952 2 11.3742C2 6.19888 6.47656 2 12 2C17.5234 2 22 6.19888 22 11.3742Z" })
    ]
  }
), K3 = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M15.4375 2H21.0625C21.582 2 22 2.41797 22 2.9375V8.5625C22 8.94141 21.7734 9.28516 21.4219 9.42969C21.0703 9.57422 20.668 9.49609 20.3984 9.22656L18.875 7.70312L15.4766 11.1016C15.1094 11.4687 14.5156 11.4687 14.1523 11.1016L12.9023 9.85156C12.5352 9.48438 12.5352 8.89063 12.9023 8.52734L16.3008 5.12891L14.7773 3.60547C14.5078 3.33594 14.4297 2.93359 14.5742 2.58203C14.7187 2.23047 15.0586 2 15.4375 2ZM8.5625 22H2.9375C2.41797 22 2 21.582 2 21.0625V15.4375C2 15.0586 2.22656 14.7148 2.57813 14.5703C2.92969 14.4258 3.33203 14.5078 3.60156 14.7734L5.125 16.2969L8.52344 12.8984C8.89062 12.5313 9.48437 12.5313 9.84766 12.8984L11.0977 14.1484C11.4648 14.5156 11.4648 15.1094 11.0977 15.4727L7.69922 18.8711L9.22266 20.3945C9.49219 20.6641 9.57031 21.0664 9.42578 21.418C9.28125 21.7695 8.94141 22 8.5625 22Z" })
    ]
  }
), X3 = ({ size: t = 200, iconTitle: e, ...r }) => {
  const i = t, n = t * 72 / 200;
  return /* @__PURE__ */ c(
    "svg",
    {
      width: i,
      height: n,
      viewBox: "0 0 200 72",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      ...r,
      children: [
        e && /* @__PURE__ */ c("title", { children: e }),
        !e && /* @__PURE__ */ c("title", { children: "Logo Governo Brasileiro" }),
        /* @__PURE__ */ c("g", { clipPath: "url(#clip0_18_2)", children: [
          /* @__PURE__ */ c(
            "path",
            {
              d: "M21.5858 45.1901C26.3414 45.1901 30.1313 41.1735 30.1313 35.2274C30.4989 30.5596 27.0202 26.4782 22.3575 26.1061C22.103 26.0858 21.8444 26.0778 21.5858 26.0818C16.6161 26.0818 14.0141 30.4706 14.0141 35.7492C14.0101 41.7721 17.5737 45.1901 21.5858 45.1901ZM43.0484 50.9137C43.0484 66.8225 35.3313 71.9515 19.7313 71.9515C14.705 71.9636 9.70702 71.1384 4.95147 69.5002L5.61813 58.9389C9.63025 61.111 14.1313 62.2112 18.6929 62.1384C26.4181 62.1384 30.5757 58.498 30.5757 50.9137V48.8265H30.4262C27.5171 53.1222 22.608 55.622 17.4282 55.444C6.80601 55.444 0.199951 47.4189 0.199951 35.9595C0.199951 24.4315 5.61813 15.8117 17.6505 15.8117C23.1373 15.8562 28.1676 18.8737 30.7939 23.6953H30.9474V16.7137H43.0484V50.9137Z",
              fill: "#2864AE"
            }
          ),
          /* @__PURE__ */ c(
            "path",
            {
              d: "M96.9434 55.3996H111.816L125.8 16.9038H112.81L104.923 44.3285H104.778L96.9515 16.9038H82.9313L96.9434 55.3996Z",
              fill: "#48AD45"
            }
          ),
          /* @__PURE__ */ c(
            "path",
            {
              d: "M74.2444 36.1618C74.2444 30.4018 71.7353 25.3052 65.6101 25.3052C59.4848 25.3052 56.9797 30.4018 56.9797 36.1618C56.9797 41.849 59.4888 46.9456 65.6101 46.9456C71.7313 46.9456 74.2444 41.849 74.2444 36.1618ZM43.2585 36.1618C43.2585 23.3838 52.9191 16.0058 65.6101 16.0058C78.301 16.0058 87.9616 23.3919 87.9616 36.1618C87.9616 48.867 78.301 56.249 65.6101 56.249C52.9191 56.249 43.2585 48.867 43.2585 36.1618Z",
              fill: "#FABD14"
            }
          ),
          /* @__PURE__ */ c(
            "path",
            {
              d: "M127.303 49.9591C127.303 53.4458 124.479 56.2692 120.996 56.2692C117.513 56.2692 114.693 53.4418 114.693 49.9551C114.693 46.4724 117.513 43.649 120.996 43.6449C124.475 43.6409 127.299 46.4643 127.303 49.947C127.303 49.951 127.303 49.9551 127.303 49.9591Z",
              fill: "#2864AE"
            }
          ),
          /* @__PURE__ */ c(
            "path",
            {
              d: "M149.905 26.2274C145.036 26.2274 141.788 30.507 141.788 36.271C141.788 41.8854 145.481 46.1002 149.905 46.1002C154.923 46.1002 157.949 41.8854 157.949 35.7533C157.949 30.6607 155.073 26.2274 149.905 26.2274ZM128.507 0H141.869V21.871H142.018C145.214 17.8908 150.139 15.7146 155.23 16.0382C165.857 16.0382 171.679 26.1546 171.679 35.4661C171.679 46.8405 165.558 56.3016 154.115 56.3016C148.58 56.516 143.42 53.4863 140.907 48.5434H140.758V55.4198H128.499V0.00404494H128.507V0Z",
              fill: "#2864AE"
            }
          ),
          /* @__PURE__ */ c(
            "path",
            {
              d: "M199.125 27.5582C197.654 27.1901 196.139 27.0404 194.624 27.1173C188.426 27.1173 184.964 31.6234 184.964 39.1591V55.4157H171.675V16.9038H183.788V23.9986H183.937C185.614 19.1649 190.192 15.9533 195.299 16.022C196.81 16.0463 198.313 16.196 199.8 16.4629L199.125 27.5582Z",
              fill: "#FABD14"
            }
          )
        ] }),
        /* @__PURE__ */ c("defs", { children: /* @__PURE__ */ c("clipPath", { id: "clip0_18_2", children: /* @__PURE__ */ c("rect", { width: "200", height: "72", fill: "white" }) }) })
      ]
    }
  );
}, J3 = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M22 8.13034L21.9961 10.991C21.9961 12.7562 21.3086 14.4229 20.125 15.6562C20.1133 12.6222 18.5586 9.80888 16.0078 8.19732L15.9336 8.15004C16.0313 8.00425 16.043 7.81118 15.9492 7.64963L13.5273 3.4178C13.2695 2.96468 13.4219 2.38546 13.8711 2.1254C14.3203 1.86535 14.8906 2.02296 15.1484 2.47609L17.8047 7.1177L19.4961 10.0729L19.5 8.13034C19.5 7.43291 20.0625 6.86946 20.75 6.86946C21.4375 6.86946 22 7.43685 22 8.13034ZM13.6562 6.71973C13.1055 6.37299 12.4922 6.21932 11.8906 6.24296L10.4648 3.74879C10.207 3.29566 10.3594 2.71644 10.8086 2.45638C11.2578 2.19633 11.832 2.35 12.0898 2.80313L14.7109 7.38169L13.6562 6.71579V6.71973ZM10.2773 5.31306L10.918 6.43209C10.3281 6.64881 9.80078 7.04677 9.42188 7.60235L8.65234 6.25478C8.39453 5.80165 8.54688 5.22244 8.99609 4.96238C9.44531 4.70232 10.0195 4.85599 10.2773 5.30912V5.31306ZM8.46484 7.823L8.95312 8.67803C8.875 9.01689 8.85547 9.36758 8.88672 9.70644H8.71875H7.375L6.83984 8.76866C6.58203 8.31553 6.73437 7.73631 7.18359 7.47626C7.63281 7.2162 8.20703 7.36987 8.46484 7.823ZM10.9414 8.72137C11.3086 8.13034 12.0781 7.95303 12.6641 8.31947L15.0156 9.801C17.0273 11.0737 18.25 13.2999 18.25 15.6956V16.0108C18.25 19.3167 15.5898 22 12.3125 22H5.4375C4.91797 22 4.5 21.5784 4.5 21.0543C4.5 20.5303 4.91797 20.1087 5.4375 20.1087H9.03125C9.28906 20.1087 9.5 19.8959 9.5 19.6359C9.5 19.3758 9.28906 19.163 9.03125 19.163H4.1875C3.66797 19.163 3.25 18.7414 3.25 18.2174C3.25 17.6933 3.66797 17.2717 4.1875 17.2717H9.03125C9.28906 17.2717 9.5 17.0589 9.5 16.7989C9.5 16.5388 9.28906 16.326 9.03125 16.326H2.9375C2.41797 16.326 2 15.9044 2 15.3804C2 14.8563 2.41797 14.4347 2.9375 14.4347H9.03125C9.28906 14.4347 9.5 14.222 9.5 13.9619C9.5 13.7018 9.28906 13.4891 9.03125 13.4891H4.1875C3.66797 13.4891 3.25 13.0675 3.25 12.5434C3.25 12.0194 3.66797 11.5978 4.1875 11.5978H9.5H13.1406L11.3359 10.459C10.75 10.0886 10.5742 9.31241 10.9375 8.72137H10.9414Z" })
    ]
  }
), $3 = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M12 22C17.5234 22 22 17.5234 22 12C22 6.47656 17.5234 2 12 2C6.47656 2 2 6.47656 2 12C2 17.5234 6.47656 22 12 22ZM12 8.875C11.3086 8.875 10.75 9.43359 10.75 10.125C10.75 10.6445 10.332 11.0625 9.8125 11.0625C9.29297 11.0625 8.875 10.6445 8.875 10.125C8.875 8.39844 10.2734 7 12 7C13.7266 7 15.125 8.39844 15.125 10.125C15.125 11.9688 13.7188 12.75 12.9375 13.0352V13.1836C12.9375 13.7031 12.5195 14.1211 12 14.1211C11.4805 14.1211 11.0625 13.7031 11.0625 13.1836V12.8672C11.0625 12.0664 11.6406 11.4922 12.2383 11.2969C12.4883 11.2148 12.7539 11.082 12.9492 10.8945C13.1172 10.7305 13.25 10.5039 13.25 10.1289C13.25 9.4375 12.6914 8.87891 12 8.87891V8.875ZM10.75 16.375C10.75 15.6836 11.3086 15.125 12 15.125C12.6914 15.125 13.25 15.6836 13.25 16.375C13.25 17.0664 12.6914 17.625 12 17.625C11.3086 17.625 10.75 17.0664 10.75 16.375Z" })
    ]
  }
), g2 = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("g", { clipPath: "url(#clip0_1_148)", children: /* @__PURE__ */ c("path", { d: "M19.2535 0.622806C19.3084 0.240758 19.3471 0.0804978 19.3932 0.0451324C19.4789 -0.0206635 19.5056 -0.0169822 19.5926 0.0724691C19.6724 0.154597 19.9771 1.09947 20.0779 1.57791C20.1352 1.84951 20.135 1.88989 20.0759 2.13771C19.9652 2.6008 19.6335 2.99013 19.1006 3.28241C18.9851 3.34574 18.6504 3.45983 18.3568 3.53592C17.6512 3.71874 17.2297 3.86298 16.6183 4.13083C16.3401 4.25267 16.1052 4.35943 16.0961 4.36813C16.087 4.37678 16.0979 4.40271 16.1203 4.42574C16.1492 4.45543 16.1959 4.44896 16.2814 4.4035C16.4124 4.33378 16.5502 4.35454 16.5502 4.44395C16.5502 4.47481 16.5344 4.50007 16.515 4.50007C16.4958 4.50007 16.4276 4.54543 16.3636 4.60085C16.1919 4.74959 16.153 4.94505 16.23 5.27227C16.4027 6.00515 16.4017 6.31432 16.2248 6.90867C16.1409 7.19097 16.1305 7.78395 16.204 8.10319C16.2764 8.41752 16.5183 8.91056 16.7329 9.18098C16.9939 9.50977 17.2719 9.71782 17.7142 9.91544C18.3958 10.2199 18.5918 10.4187 18.4804 10.6927C18.4052 10.878 18.0014 11.3848 17.7604 11.5963C17.5332 11.7959 17.2539 11.9842 16.8998 12.1767C16.7628 12.2512 16.6378 12.3507 16.609 12.4082C16.5812 12.4638 16.5461 12.6806 16.5308 12.8901C16.5156 13.0995 16.4839 13.2872 16.4601 13.3072C16.4364 13.3272 16.3449 13.3634 16.2569 13.3875C16.0586 13.4422 16.0299 13.485 16.139 13.5635C16.3328 13.7033 16.3293 13.7678 16.1085 14.1161C15.7627 14.6622 15.5852 15.232 15.4256 16.3081C15.3178 17.0344 15.2468 17.1655 14.9046 17.2695C14.7149 17.3271 12.514 16.953 12.108 16.7942C12.0481 16.7707 11.9722 16.7795 11.8698 16.8217C11.7411 16.8747 11.6952 16.9297 11.5518 17.2029C11.4596 17.3785 11.302 17.7121 11.2015 17.9442L11.0188 18.3664L11.1826 18.6055C11.3396 18.8345 11.3486 18.8634 11.3972 19.2935C11.4369 19.6445 11.4696 19.7806 11.5474 19.9171C11.6255 20.0542 11.6373 20.1038 11.6025 20.147C11.5645 20.1941 11.5446 20.1929 11.4653 20.1394C11.3005 20.0283 11.3201 20.1208 11.4978 20.2926C11.7142 20.5018 11.9786 20.9245 12.1167 21.2819C12.1749 21.4328 12.3047 21.8998 12.405 22.3198C12.5051 22.7387 12.6975 23.4938 12.8331 24H3.00041C2.98473 24.0403 3.01575 23.9574 3.00041 24C3.16755 23.5707 3.4904 22.8509 3.8808 22.252C4.46487 21.3561 5.02401 20.2783 5.51163 19.1083C5.90984 18.153 6.38331 17.7143 6.38331 17.7143C6.26008 17.6461 6.61797 17.7551 6.61797 17.6382C6.61797 17.5579 6.95175 16.9075 7.18483 16.5336C7.41605 16.1626 7.56918 16.0665 7.81704 16.1369C8.03326 16.1984 8.13338 16.1546 8.21257 15.9642C8.44094 15.4149 8.80668 14.3393 8.92336 13.8742C9.09575 13.1867 9.09445 13.1799 8.59894 12.1515C7.87567 10.6507 7.07851 9.43031 6.08246 8.29901C5.30939 7.4209 4.92823 6.89207 4.53928 6.1577C4.44428 5.97837 4.352 5.83166 4.33416 5.83166C4.27867 5.83166 4.2574 5.96502 4.29268 6.09167C4.33792 6.25393 4.28061 6.35286 4.20245 6.24751C4.09167 6.09833 4.0688 5.80017 4.11919 5.16328C4.16417 4.59497 4.17478 4.54327 4.27559 4.39958C4.33507 4.31487 4.49186 4.16043 4.62398 4.05642C4.86278 3.86847 4.95514 3.74635 5.20995 3.28159C5.42598 2.88755 6.07318 2.27883 6.17007 2.37854C6.18754 2.39651 6.12596 2.59367 6.03326 2.81675C5.94055 3.03979 5.87255 3.24333 5.88218 3.2691C5.89398 3.30074 6.03748 3.25265 6.3254 3.12058C6.55955 3.01315 7.18784 2.73145 7.72155 2.49458C8.76213 2.0328 9.98105 1.42003 10.7474 0.973443C11.3249 0.636944 11.4547 0.576866 11.8752 0.451541C12.4345 0.284896 12.9336 0.260615 14.431 0.327233C15.1596 0.359661 15.7719 0.396397 15.7914 0.40889C15.8718 0.46 15.8169 0.533433 15.6409 0.609921C15.454 0.691226 15.3534 0.806369 15.4018 0.88411C15.4356 0.938705 16.9252 1.61359 17.2819 1.73598C17.4341 1.78822 17.6956 1.86067 17.8631 1.89705C18.5205 2.03985 18.8096 1.96939 18.9947 1.6215C19.1339 1.35987 19.164 1.24355 19.2535 0.622806Z" }) })
    ]
  }
), ed = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M12 22C17.5234 22 22 17.5234 22 12C22 6.47656 17.5234 2 12 2C6.47656 2 2 6.47656 2 12C2 17.5234 6.47656 22 12 22ZM10.75 8.25C10.75 7.55859 11.3086 7 12 7C12.6914 7 13.25 7.55859 13.25 8.25C13.25 8.94141 12.6914 9.5 12 9.5C11.3086 9.5 10.75 8.94141 10.75 8.25ZM10.4375 10.75H12.3125C12.832 10.75 13.25 11.168 13.25 11.6875V15.125H13.5625C14.082 15.125 14.5 15.543 14.5 16.0625C14.5 16.582 14.082 17 13.5625 17H10.4375C9.91797 17 9.5 16.582 9.5 16.0625C9.5 15.543 9.91797 15.125 10.4375 15.125H11.375V12.625H10.4375C9.91797 12.625 9.5 12.207 9.5 11.6875C9.5 11.168 9.91797 10.75 10.4375 10.75Z" })
    ]
  }
), td = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M5.22581 8.89655C5.93952 8.89655 6.51613 9.48211 6.51613 10.2069V20.6897C6.51613 21.4144 5.93952 22 5.22581 22H3.29032C2.57661 22 2 21.4144 2 20.6897V10.2069C2 9.48211 2.57661 8.89655 3.29032 8.89655H5.22581ZM12.9113 3C14.0121 3 14.9032 3.90496 14.9032 5.02284V5.19483C14.9032 5.47328 14.8508 5.75172 14.75 6.0097L13.6129 8.89655H20.0645C21.1331 8.89655 22 9.77694 22 10.8621C22 11.6687 21.5202 12.3608 20.8347 12.6638C21.5202 12.9668 22 13.6588 22 14.4655C22 15.4237 21.3226 16.2222 20.4274 16.3942C20.6048 16.6931 20.7097 17.0412 20.7097 17.4138C20.7097 18.3228 20.1048 19.0845 19.2823 19.3097C19.371 19.5349 19.4194 19.7806 19.4194 20.0345C19.4194 21.1196 18.5524 22 17.4839 22H13.9395C12.4758 22 11.0524 21.4922 9.91129 20.5627L9.41935 20.1655C8.80645 19.67 8.45161 18.9166 8.45161 18.1181V10.4772C8.45161 9.86703 8.59274 9.26509 8.85887 8.72047L11.125 4.11789C11.4637 3.43405 12.1532 3 12.9113 3Z" })
    ]
  }
), rd = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M7 17C5.61667 17 4.4375 16.5125 3.4625 15.5375C2.4875 14.5625 2 13.3833 2 12C2 10.6167 2.4875 9.4375 3.4625 8.4625C4.4375 7.4875 5.61667 7 7 7H10C10.2833 7 10.5208 7.09583 10.7125 7.2875C10.9042 7.47917 11 7.71667 11 8C11 8.28333 10.9042 8.52083 10.7125 8.7125C10.5208 8.90417 10.2833 9 10 9H7C6.16667 9 5.45833 9.29167 4.875 9.875C4.29167 10.4583 4 11.1667 4 12C4 12.8333 4.29167 13.5417 4.875 14.125C5.45833 14.7083 6.16667 15 7 15H10C10.2833 15 10.5208 15.0958 10.7125 15.2875C10.9042 15.4792 11 15.7167 11 16C11 16.2833 10.9042 16.5208 10.7125 16.7125C10.5208 16.9042 10.2833 17 10 17H7ZM9 13C8.71667 13 8.47917 12.9042 8.2875 12.7125C8.09583 12.5208 8 12.2833 8 12C8 11.7167 8.09583 11.4792 8.2875 11.2875C8.47917 11.0958 8.71667 11 9 11H15C15.2833 11 15.5208 11.0958 15.7125 11.2875C15.9042 11.4792 16 11.7167 16 12C16 12.2833 15.9042 12.5208 15.7125 12.7125C15.5208 12.9042 15.2833 13 15 13H9ZM14 17C13.7167 17 13.4792 16.9042 13.2875 16.7125C13.0958 16.5208 13 16.2833 13 16C13 15.7167 13.0958 15.4792 13.2875 15.2875C13.4792 15.0958 13.7167 15 14 15H17C17.8333 15 18.5417 14.7083 19.125 14.125C19.7083 13.5417 20 12.8333 20 12C20 11.1667 19.7083 10.4583 19.125 9.875C18.5417 9.29167 17.8333 9 17 9H14C13.7167 9 13.4792 8.90417 13.2875 8.7125C13.0958 8.52083 13 8.28333 13 8C13 7.71667 13.0958 7.47917 13.2875 7.2875C13.4792 7.09583 13.7167 7 14 7H17C18.3833 7 19.5625 7.4875 20.5375 8.4625C21.5125 9.4375 22 10.6167 22 12C22 13.3833 21.5125 14.5625 20.5375 15.5375C19.5625 16.5125 18.3833 17 17 17H14Z" })
    ]
  }
), id = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M3 6.25C3 5.55859 3.57455 5 4.28571 5H19.7143C20.4254 5 21 5.55859 21 6.25C21 6.94141 20.4254 7.5 19.7143 7.5H4.28571C3.57455 7.5 3 6.94141 3 6.25ZM3 12.5C3 11.8086 3.57455 11.25 4.28571 11.25H19.7143C20.4254 11.25 21 11.8086 21 12.5C21 13.1914 20.4254 13.75 19.7143 13.75H4.28571C3.57455 13.75 3 13.1914 3 12.5ZM21 18.75C21 19.4414 20.4254 20 19.7143 20H4.28571C3.57455 20 3 19.4414 3 18.75C3 18.0586 3.57455 17.5 4.28571 17.5H19.7143C20.4254 17.5 21 18.0586 21 18.75Z" }),
      " "
    ]
  }
), nd = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M6.875 3C5.83984 3 5 3.86384 5 4.92857V19.0714C5 20.1362 5.83984 21 6.875 21H9.375C10.4102 21 11.25 20.1362 11.25 19.0714V4.92857C11.25 3.86384 10.4102 3 9.375 3H6.875ZM15.625 3C14.5898 3 13.75 3.86384 13.75 4.92857V19.0714C13.75 20.1362 14.5898 21 15.625 21H18.125C19.1602 21 20 20.1362 20 19.0714V4.92857C20 3.86384 19.1602 3 18.125 3H15.625Z" }),
      " "
    ]
  }
), od = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M5.70385 2.21234C5.1375 1.90878 4.4524 1.92217 3.89519 2.24359C3.33798 2.56501 3 3.14982 3 3.77926V20.2073C3 20.8368 3.34255 21.4216 3.89519 21.743C4.44784 22.0644 5.1375 22.0778 5.70385 21.7743L21.05 13.5602C21.6346 13.2477 22 12.6451 22 11.9933C22 11.3415 21.6346 10.7389 21.05 10.4264L5.70385 2.21234Z" })
    ]
  }
), T0 = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M19.0959 4.9179L19.5373 5.33586V3.24993C19.5373 2.55852 20.0959 1.99993 20.7874 1.99993C21.4788 1.99993 22.0375 2.55852 22.0375 3.24993V8.24993C22.0375 8.94133 21.4788 9.49993 20.7874 9.49993H15.787C15.0956 9.49993 14.5369 8.94133 14.5369 8.24993C14.5369 7.55852 15.0956 6.99993 15.787 6.99993H17.6582L17.3614 6.71868C17.3535 6.71086 17.3457 6.70305 17.3379 6.69524C14.408 3.76555 9.66157 3.76555 6.73167 6.69524C3.80176 9.62493 3.80176 14.371 6.73167 17.3007C9.66157 20.2304 14.408 20.2304 17.3379 17.3007C17.6582 16.9804 17.9434 16.6405 18.1934 16.2812C18.588 15.7148 19.3693 15.5781 19.9358 15.9726C20.5022 16.3671 20.6389 17.1484 20.2444 17.7148C19.9123 18.1913 19.5334 18.6445 19.1076 19.0702C15.201 22.9765 8.86854 22.9765 4.96591 19.0702C1.06328 15.164 1.05938 8.83586 4.96591 4.92961C8.86854 1.02727 15.1893 1.02336 19.0959 4.9179Z" })
    ]
  }
), sd = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M2.9375 9.4795H8.5625C8.94141 9.4795 9.28516 9.25295 9.42969 8.9014C9.57422 8.54985 9.49609 8.14753 9.22656 7.878L7.40234 6.05386C10.3438 3.76489 14.6016 3.97191 17.3047 6.67493C20.2344 9.6045 20.2344 14.3504 17.3047 17.28C14.375 20.2095 9.62891 20.2095 6.69922 17.28C6.30078 16.8815 5.95703 16.448 5.66797 15.991C5.29687 15.4089 4.52344 15.2371 3.94141 15.6082C3.35937 15.9792 3.1875 16.7526 3.55859 17.3346C3.94141 17.944 4.39844 18.5221 4.92969 19.0494C8.83594 22.9555 15.1641 22.9555 19.0703 19.0494C22.9766 15.1433 22.9766 8.81547 19.0703 4.90938C15.3906 1.22593 9.55078 1.01501 5.62109 4.27659L3.60156 2.25324C3.33203 1.98762 2.92969 1.90559 2.57813 2.05012C2.22656 2.19464 2 2.53838 2 2.91727V8.54204C2 9.06155 2.41797 9.4795 2.9375 9.4795Z" })
    ]
  }
), F0 = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M9.83746 2.9375C9.94342 2.39338 10.4061 2 10.943 2H13.0551C13.5919 2 14.0546 2.39338 14.1605 2.9375L14.6727 5.51103C15.1707 5.73162 15.6369 6.01471 16.0607 6.34926L18.4554 5.52206C18.964 5.34559 19.522 5.56618 19.7905 6.05147L20.8465 7.95588C21.1149 8.44118 21.0196 9.05147 20.6169 9.42279L18.7344 11.1654C18.7662 11.4375 18.7803 11.7169 18.7803 12C18.7803 12.2831 18.7627 12.5625 18.7344 12.8346L20.6205 14.5809C21.0231 14.9522 21.1149 15.5662 20.85 16.0478L19.794 17.9522C19.5256 18.4338 18.9675 18.6581 18.4589 18.4816L16.0643 17.6544C15.6369 17.989 15.1707 18.2684 14.6762 18.4926L14.1676 21.0625C14.0581 21.6103 13.5954 22 13.0621 22H10.95C10.4132 22 9.95049 21.6066 9.84453 21.0625L9.33593 18.4926C8.83793 18.2721 8.37524 17.989 7.94788 17.6544L5.54263 18.4816C5.03403 18.6581 4.47599 18.4375 4.20756 17.9522L3.15151 16.0478C2.88309 15.5625 2.97845 14.9522 3.38109 14.5809L5.26714 12.8346C5.23535 12.5625 5.22123 12.2831 5.22123 12C5.22123 11.7169 5.23889 11.4375 5.26714 11.1654L3.38109 9.41912C2.97845 9.04779 2.88662 8.43382 3.15151 7.95221L4.20756 6.04779C4.47599 5.5625 5.03403 5.34191 5.54263 5.51838L7.93728 6.34559C8.36465 6.01103 8.83086 5.73162 9.32533 5.50735L9.83746 2.9375ZM11.999 14.9412C13.5601 14.9338 14.821 13.614 14.814 11.989C14.8069 10.364 13.5389 9.05147 11.9778 9.05882C10.4167 9.06618 9.1558 10.386 9.16286 12.011C9.16993 13.636 10.4379 14.9485 11.999 14.9412Z" })
    ]
  }
), ad = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M5.58749 3.77999C6.07124 3.51749 6.66374 3.54374 7.12499 3.84749L16.8 10.2037V4.79999C16.8 4.13624 17.3362 3.59999 18 3.59999C18.6637 3.59999 19.2 4.13624 19.2 4.79999V19.2C19.2 19.8637 18.6637 20.4 18 20.4C17.3362 20.4 16.8 19.8637 16.8 19.2V13.7962L7.12499 20.1562C6.66374 20.46 6.07499 20.4862 5.58749 20.2237C5.09999 19.9612 4.79999 19.4512 4.79999 18.9V5.09999C4.79999 4.54874 5.10374 4.04249 5.58749 3.77999Z" })
    ]
  }
), ld = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M20 4H6.83002L14.83 12H19C19.55 12 20 12.45 20 13C20 13.55 19.55 14 19 14H16.83L21.76 18.93C21.91 18.65 22 18.34 22 18V6C22 4.9 21.1 4 20 4ZM20 20L14 14L12.29 12.29L12 12L3.16002 3.16C3.06751 3.06729 2.95762 2.99375 2.83664 2.94357C2.71567 2.89338 2.58599 2.86755 2.45502 2.86755C2.32405 2.86755 2.19437 2.89338 2.0734 2.94357C1.95242 2.99375 1.84253 3.06729 1.75002 3.16C1.36002 3.55 1.36002 4.18 1.75002 4.57L2.24002 5.06C2.09002 5.35 2.00002 5.66 2.00002 6V18C2.00002 19.1 2.90002 20 4.00002 20H17.17L19.42 22.25C19.81 22.64 20.44 22.64 20.83 22.25C21.22 21.86 21.22 21.23 20.83 20.84L20 20ZM8.00002 13C8.00002 13.55 7.55002 14 7.00002 14H5.00002C4.45002 14 4.00002 13.55 4.00002 13C4.00002 12.45 4.45002 12 5.00002 12H7.00002C7.55002 12 8.00002 12.45 8.00002 13ZM14 17C14 17.55 13.55 18 13 18H5.00002C4.45002 18 4.00002 17.55 4.00002 17C4.00002 16.45 4.45002 16 5.00002 16H13C13.08 16 13.14 16.03 13.21 16.04L13.95 16.78C13.97 16.86 14 16.92 14 17Z" })
    ]
  }
), cd = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M10.475 22C10.0083 22 9.57082 21.9 9.16249 21.7C8.75416 21.5 8.40832 21.2167 8.12499 20.85L3.09999 14.475C2.96666 14.325 2.90832 14.1458 2.92499 13.9375C2.94166 13.7292 3.01666 13.5583 3.14999 13.425C3.48332 13.075 3.88332 12.8667 4.34999 12.8C4.81666 12.7333 5.24999 12.825 5.64999 13.075L7.49999 14.2V6C7.49999 5.71667 7.59582 5.47917 7.78749 5.2875C7.97916 5.09583 8.21666 5 8.49999 5C8.78332 5 9.02499 5.09583 9.22499 5.2875C9.42499 5.47917 9.52499 5.71667 9.52499 6V11H17C17.8333 11 18.5417 11.2917 19.125 11.875C19.7083 12.4583 20 13.1667 20 14V18C20 19.1 19.6083 20.0417 18.825 20.825C18.0417 21.6083 17.1 22 16 22H10.475ZM11.975 9C11.6917 9 11.4542 8.90417 11.2625 8.7125C11.0708 8.52083 10.975 8.28333 10.975 8C10.975 7.96667 11.0167 7.8 11.1 7.5C11.2333 7.26667 11.3333 7.02917 11.4 6.7875C11.4667 6.54583 11.5 6.28333 11.5 6C11.5 5.16667 11.2083 4.45833 10.625 3.875C10.0417 3.29167 9.33332 3 8.49999 3C7.66666 3 6.95832 3.29167 6.37499 3.875C5.79166 4.45833 5.49999 5.16667 5.49999 6C5.49999 6.28333 5.53332 6.54583 5.59999 6.7875C5.66666 7.02917 5.76666 7.26667 5.89999 7.5C5.94999 7.58333 5.98332 7.66667 5.99999 7.75C6.01666 7.83333 6.02499 7.91667 6.02499 8C6.02499 8.28333 5.93332 8.52083 5.74999 8.7125C5.56666 8.90417 5.33332 9 5.04999 9C4.86666 9 4.69582 8.95 4.53749 8.85C4.37916 8.75 4.25832 8.625 4.17499 8.475C3.95832 8.10833 3.79166 7.71667 3.67499 7.3C3.55832 6.88333 3.49999 6.45 3.49999 6C3.49999 4.61667 3.98749 3.4375 4.96249 2.4625C5.93749 1.4875 7.11666 1 8.49999 1C9.88332 1 11.0625 1.4875 12.0375 2.4625C13.0125 3.4375 13.5 4.61667 13.5 6C13.5 6.45 13.4417 6.88333 13.325 7.3C13.2083 7.71667 13.0417 8.10833 12.825 8.475C12.7417 8.625 12.625 8.75 12.475 8.85C12.325 8.95 12.1583 9 11.975 9Z" })
    ]
  }
), fo = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("g", { "clip-path": "url(#clip0_54_13)", children: [
        /* @__PURE__ */ c("path", { d: "M7.39719 10.9729L6.88063 12.5H5.5625L7.77362 6.5625H9.29838L11.5 12.5H10.1142L9.59762 10.9729H7.39719ZM9.33756 10.0989L8.53125 7.69775H8.47306L7.66675 10.0989H9.33756Z" }),
        /* @__PURE__ */ c("path", { d: "M2 5.375C2 4.74511 2.25022 4.14102 2.69562 3.69562C3.14102 3.25022 3.74511 3 4.375 3H12.6875C13.3174 3 13.9215 3.25022 14.3669 3.69562C14.8123 4.14102 15.0625 4.74511 15.0625 5.375V8.9375H18.625C19.2549 8.9375 19.859 9.18772 20.3044 9.63312C20.7498 10.0785 21 10.6826 21 11.3125V19.625C21 20.2549 20.7498 20.859 20.3044 21.3044C19.859 21.7498 19.2549 22 18.625 22H10.3125C9.68261 22 9.07852 21.7498 8.63312 21.3044C8.18772 20.859 7.9375 20.2549 7.9375 19.625V16.0625H4.375C3.74511 16.0625 3.14102 15.8123 2.69562 15.3669C2.25022 14.9215 2 14.3174 2 13.6875V5.375ZM4.375 4.1875C4.06006 4.1875 3.75801 4.31261 3.53531 4.53531C3.31261 4.75801 3.1875 5.06006 3.1875 5.375V13.6875C3.1875 14.0024 3.31261 14.3045 3.53531 14.5272C3.75801 14.7499 4.06006 14.875 4.375 14.875H12.6875C13.0024 14.875 13.3045 14.7499 13.5272 14.5272C13.7499 14.3045 13.875 14.0024 13.875 13.6875V5.375C13.875 5.06006 13.7499 4.75801 13.5272 4.53531C13.3045 4.31261 13.0024 4.1875 12.6875 4.1875H4.375ZM12.8514 16.0566C13.0806 16.414 13.3287 16.7489 13.5995 17.0612C12.7112 17.744 11.6128 18.2499 10.3125 18.5954C10.5239 18.8531 10.8481 19.3495 10.9716 19.625C12.3075 19.1987 13.4416 18.6227 14.3987 17.8509C15.3214 18.6406 16.4638 19.2343 17.8781 19.5989C18.036 19.2972 18.3697 18.7997 18.625 18.542C17.2891 18.2416 16.1823 17.7179 15.2763 17.0173C16.0849 16.1302 16.7274 15.0567 17.2012 13.7433H18.625V12.5H15.0625V13.7433H15.9709C15.5933 14.7456 15.0922 15.5792 14.4604 16.2727C14.2859 16.0868 14.1214 15.8918 13.9676 15.6884C13.6325 15.9033 13.2485 16.0299 12.8514 16.0566Z" })
      ] }),
      /* @__PURE__ */ c("defs", { children: /* @__PURE__ */ c("clipPath", { id: "clip0_54_13", children: /* @__PURE__ */ c("rect", { width: "19", height: "19", transform: "translate(2 3)" }) }) })
    ]
  }
), V0 = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M8.72626 2.62125L8.40001 3.6H4.80001C4.13626 3.6 3.60001 4.13625 3.60001 4.8C3.60001 5.46375 4.13626 6 4.80001 6H19.2C19.8638 6 20.4 5.46375 20.4 4.8C20.4 4.13625 19.8638 3.6 19.2 3.6H15.6L15.2738 2.62125C15.1088 2.13 14.6513 1.8 14.1338 1.8H9.86626C9.34876 1.8 8.89126 2.13 8.72626 2.62125ZM19.2 7.8H4.80001L5.59126 19.9162C5.65126 20.865 6.43876 21.6 7.38751 21.6H16.6125C17.5613 21.6 18.3488 20.865 18.4088 19.9162L19.2 7.8Z" })
    ]
  }
), dd = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5" })
    ]
  }
), an = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M6.27724 4.39464C5.75661 3.87401 4.9111 3.87401 4.39047 4.39464C3.86984 4.91527 3.86984 5.76077 4.39047 6.2814L10.1132 12L4.39464 17.7228C3.87401 18.2434 3.87401 19.0889 4.39464 19.6095C4.91527 20.1302 5.76077 20.1302 6.2814 19.6095L12 13.8868L17.7228 19.6054C18.2434 20.126 19.0889 20.126 19.6095 19.6054C20.1302 19.0847 20.1302 18.2392 19.6095 17.7186L13.8868 12L19.6054 6.27724C20.126 5.75661 20.126 4.9111 19.6054 4.39047C19.0847 3.86984 18.2392 3.86984 17.7186 4.39047L12 10.1132L6.27724 4.39464Z" })
    ]
  }
), ud = () => {
  const { progress: t, isLoaded: e } = ne(Je("progress", "isLoaded")), [r, i] = le(!1);
  return F(() => {
    t === 100 && setTimeout(() => i(!0), 1e3);
  }, [t]), e ? null : /* @__PURE__ */ c("div", { className: "absolute inset-0 z-9999999 flex flex-col items-center justify-between rounded-xl border bg-background p-4", children: [
    /* @__PURE__ */ c("div", { className: "rounded-full border px-2 py-1", children: /* @__PURE__ */ c(X3, { className: "h-4 w-auto" }) }),
    /* @__PURE__ */ c("div", { className: "-mt-4 flex flex-col items-center", children: [
      /* @__PURE__ */ c("div", { className: "mb-2 overflow-hidden rounded-full border-6 border-primary/30", children: /* @__PURE__ */ c("div", { className: "relative flex not-mobile:size-20 size-18 justify-center overflow-hidden rounded-full bg-primary", children: /* @__PURE__ */ c(g2, { className: "absolute bottom-0 not-mobile:size-15 size-14 text-primary-foreground" }) }) }),
      /* @__PURE__ */ c("p", { className: "mobile:mb-1 font-bold mobile:text-sm text-base", children: "VLibras Widget" }),
      /* @__PURE__ */ c("span", { className: "font-light text-muted-foreground text-xs", children: [
        "v",
        "7.0.0-alpha.0"
      ] })
    ] }),
    r && /* @__PURE__ */ c("span", { className: "absolute bottom-8 animate-move-up font-semibold text-muted-foreground text-xs", children: "Iniciando..." }),
    /* @__PURE__ */ c("div", { className: "bottom-4 h-2 w-44 rounded-full bg-foreground/10", children: /* @__PURE__ */ c("span", { className: "block h-full rounded-full bg-primary transition-[width]", style: { width: `${t}%` } }) })
  ] });
}, vs = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, ms = y0, si = (t, e) => (r) => {
  var i;
  if (e?.variants == null) return ms(t, r?.class, r?.className);
  const { variants: n, defaultVariants: o } = e, s = Object.keys(n).map((u) => {
    const d = r?.[u], p = o?.[u];
    if (d === null) return null;
    const h = vs(d) || vs(p);
    return n[u][h];
  }), a = r && Object.entries(r).reduce((u, d) => {
    let [p, h] = d;
    return h === void 0 || (u[p] = h), u;
  }, {}), l = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((u, d) => {
    let { class: p, className: h, ...f } = d;
    return Object.entries(f).every((v) => {
      let [g, m] = v;
      return Array.isArray(m) ? m.includes({
        ...o,
        ...a
      }[g]) : {
        ...o,
        ...a
      }[g] === m;
    }) ? [
      ...u,
      p,
      h
    ] : u;
  }, []);
  return ms(t, s, l, r?.class, r?.className);
}, f2 = si(
  "flex cursor-pointer items-center justify-center [&_svg:not([class*='size-'])]:size-5.25 gap-x-2 rounded-lg text-foreground",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground outline-primary-foreground hover:brightness-115",
        outline: "border border-foreground/20 hover:bg-foreground/5",
        ghost: "bg-transparent hover:bg-muted",
        muted: "bg-muted text-foreground hover:bg-accent",
        secondary: "bg-secondary text-secondary-foreground hover:brightness-110",
        destructive: "bg-destructive text-destructive-foreground outline-destructive-foreground hover:brightness-125",
        "outline-gov": "border border-primary hover:bg-primary/15 text-primary active:bg-primary/20",
        "muted-gov": "bg-primary/15 text-primary hover:bg-primary/20",
        "ghost-gov": "bg-primary/10 text-primary hover:bg-primary/15 active:bg-primary/20"
      },
      size: {
        default: "h-9 px-3.5 py-2",
        sm: "h-8 gap-1.5 px-3 py-1.25 text-sm [&_svg:not([class*='size-'])]:size-5",
        xs: "h-7 gap-1 px-2.5 py-1 text-xs [&_svg:not([class*='size-'])]:size-4",
        icon: "h-9 w-9 min-w-9 [&_svg:not([class*='size-'])]:size-5.25",
        "icon-xl": "h-12 w-12 min-w-12 [&_svg:not([class*='size-'])]:size-6.5",
        "icon-lg": "h-10 w-10 min-w-10 [&_svg:not([class*='size-'])]:size-6",
        "icon-sm": "h-8 w-8 min-w-8 text-sm [&_svg:not([class*='size-'])]:size-4.5",
        "icon-xs": "h-7 w-7 min-w-7 [&_svg:not([class*='size-'])]:size-4"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Y = ({ children: t, disabled: e, className: r, variant: i, size: n, ref: o, ...s }) => /* @__PURE__ */ c(
  "button",
  {
    inert: e,
    tabIndex: e ? -1 : 0,
    disabled: e,
    ref: o,
    className: B(f2({ variant: i, size: n }), e && "opacity-50", r),
    type: s.type || "button",
    ...s,
    children: t
  }
), hd = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.991-3.657 9.128-8.438 9.879V14.89h2.648l.504-3.288H13.56V9.515c0-.899.44-1.776 1.853-1.776h1.433V4.942s-1.3-.222-2.543-.222c-2.596 0-4.293 1.573-4.293 4.422v2.46H7.398V14.89H10.01v7.01C5.168 21.201 2 17.02 2 12Z"
        }
      )
    ]
  }
), pd = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM20 17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17Z" }),
      /* @__PURE__ */ c("path", { d: "M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z" }),
      /* @__PURE__ */ c("path", { d: "M17.5 6.5C17.7761 6.5 18 6.27614 18 6C18 5.72386 17.7761 5.5 17.5 5.5C17.2239 5.5 17 5.72386 17 6C17 6.27614 17.2239 6.5 17.5 6.5Z" })
    ]
  }
), gd = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.25 2.25h6.948l4.243 5.61 4.803-5.61Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" })
    ]
  }
), fd = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4.07 11a8.014 8.014 0 0 1 4.686-5.572C8.163 6.757 7.9 8.34 7.8 10H4.07Zm0 2H7.8c.1 1.66.363 3.243.956 4.572A8.014 8.014 0 0 1 4.07 13Zm5.734-3c.09-1.558.35-2.97.78-4.02C11.052 4.672 11.58 4.25 12 4.25s.948.422 1.416 1.73c.43 1.05.69 2.462.78 4.02H9.804Zm0 2c.09 1.558.35 2.97.78 4.02.468 1.308.996 1.73 1.416 1.73s.948-.422 1.416-1.73c.43-1.05.69-2.462.78-4.02H9.804Zm6.396-2c-.1-1.66-.363-3.243-.956-4.572A8.014 8.014 0 0 1 19.93 11H16.2Zm0 2h3.73a8.014 8.014 0 0 1-4.686 5.572C15.837 17.243 16.1 15.66 16.2 13Z"
        }
      ),
      /* @__PURE__ */ c("line", { x1: "2", y1: "12", x2: "22", y2: "12", stroke: "currentColor", strokeWidth: "1.25", fill: "none" }),
      /* @__PURE__ */ c("ellipse", { cx: "12", cy: "12", rx: "3.8", ry: "10", fill: "none", stroke: "currentColor", strokeWidth: "1.25" })
    ]
  }
), vd = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M23.5 6.2a2.9 2.9 0 00-2.05-2.05C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.45.55A2.9 2.9 0 00.5 6.2 30.7 30.7 0 000 12a30.7 30.7 0 00.5 5.8 2.9 2.9 0 002.05 2.05C4.4 20.4 12 20.4 12 20.4s7.6 0 9.45-.55a2.9 2.9 0 002.05-2.05A30.7 30.7 0 0024 12a30.7 30.7 0 00-.5-5.8zM9.6 15.5v-7l6.2 3.5-6.2 3.5z" })
    ]
  }
), z0 = Wt(null), ln = () => {
  const t = $e(z0);
  if (!t) throw new Error("useDraggable deve ser usado dentro de <Draggable />");
  return t;
};
function md({ children: t }) {
  const e = Ae(null), r = Ae({ x: 0, y: 0 }), i = ce((f) => f.isExpanded), [n, o] = le({ x: 0, y: 0 }), [s, a] = le(!1), [l, u] = le(!1), d = () => {
    o({ x: 0, y: 0 }), a(!1);
  };
  F(() => {
    if (!e.current || !s || !i) return;
    const v = setTimeout(() => {
      if (!e.current) return;
      const g = e.current.getBoundingClientRect(), m = window.innerWidth - g.width, w = window.innerHeight - g.height;
      o((y) => {
        const x = Math.max(0, Math.min(y.x, m)), _ = Math.max(0, Math.min(y.y, w));
        return x === y.x && _ === y.y ? y : { x, y: _ };
      });
    }, 200);
    return () => clearTimeout(v);
  }, [i]), F(() => {
    const f = () => {
      !e.current || !s || o((v) => {
        if (!e.current) return v;
        const g = e.current.getBoundingClientRect(), m = window.innerWidth - g.width, w = window.innerHeight - g.height, y = Math.max(0, Math.min(v.x, m)), x = Math.max(0, Math.min(v.y, w));
        return y !== v.x || x !== v.y ? { x: y, y: x } : v;
      });
    };
    return window.addEventListener("resize", f), () => window.removeEventListener("resize", f);
  }, [s]), F(() => {
    const f = (g) => {
      if (!l || !e.current) return;
      g.cancelable && g.preventDefault();
      const m = g.clientX - r.current.x, w = g.clientY - r.current.y, y = e.current.getBoundingClientRect(), x = Math.max(0, Math.min(m, window.innerWidth - y.width)), _ = Math.max(0, Math.min(w, window.innerHeight - y.height));
      o({ x, y: _ }), s || a(!0);
    }, v = () => {
      u(!1), document.body.style.userSelect = "", document.body.style.touchAction = "";
    };
    return window.addEventListener("pointermove", f), window.addEventListener("pointerup", v), window.addEventListener("pointercancel", v), () => {
      window.removeEventListener("pointermove", f), window.removeEventListener("pointerup", v), window.removeEventListener("pointercancel", v);
    };
  }, [s, l]), F(() => {
    if (e.current) {
      const f = e.current.getBoundingClientRect();
      o({ x: f.left, y: f.top });
    }
  }, []);
  const h = {
    ref: e,
    hasMoved: s,
    pos: n,
    isDragging: l,
    reset: d,
    onPointerDown: (f) => {
      if (!e.current) return;
      f.cancelable && f.preventDefault(), f.currentTarget.setPointerCapture(f.pointerId), u(!0);
      const v = e.current.getBoundingClientRect();
      r.current = { x: f.clientX - v.left, y: f.clientY - v.top }, s || (o({ x: v.left, y: v.top }), a(!0)), document.body.style.userSelect = "none", document.body.style.touchAction = "none";
    }
  };
  return /* @__PURE__ */ c(z0.Provider, { value: h, children: t(h) });
}
const nt = et()((t) => ({
  screen: "main",
  open: (e) => t({ screen: e }),
  closeAll: () => t({ screen: "main" })
})), D0 = {
  get: nt.getState,
  set: nt.setState,
  subscribe: nt.subscribe
}, U0 = ({ children: t, className: e, ...r }) => /* @__PURE__ */ c(
  "div",
  {
    autofocus: !0,
    className: B("absolute inset-0 z-999999 flex animate-move-right flex-col rounded-xl bg-background", e),
    ...r,
    children: t
  }
), j0 = ({ children: t, className: e, ...r }) => {
  const { onPointerDown: i } = ln();
  return /* @__PURE__ */ c("div", { className: "relative", children: [
    /* @__PURE__ */ c("div", { className: B("flex h-min items-center gap-3 border-b p-2 *:z-10", e), ...r, children: [
      r.close && /* @__PURE__ */ c(bd, {}),
      t
    ] }),
    /* @__PURE__ */ c(
      "div",
      {
        className: "absolute inset-0 z-0 touch-none not-expanded:hover:cursor-move sm:hover:cursor-move",
        onPointerDown: i
      }
    )
  ] });
}, bd = ({ className: t, ...e }) => {
  const r = nt((n) => n.closeAll), i = Ee();
  return /* @__PURE__ */ c(Y, { onClick: r, variant: "outline", size: i ? "icon-sm" : "icon", className: t, ...e, children: /* @__PURE__ */ c(H0, {}) });
}, Z0 = ({ children: t, className: e, ...r }) => /* @__PURE__ */ c("h3", { className: B("font-semibold text-sm sm:text-base", e), ...r, children: t }), B0 = ({ children: t, className: e, ...r }) => /* @__PURE__ */ c("div", { className: B("flex h-full flex-col gap-4 overflow-y-auto p-4", e), ...r, children: t }), bs = ({ label: t, description: e, children: r, className: i }) => /* @__PURE__ */ c("div", { className: `flex flex-col gap-2 ${i}`, children: [
  /* @__PURE__ */ c("div", { children: [
    /* @__PURE__ */ c("p", { className: "font-bold text-base", children: t }),
    e && /* @__PURE__ */ c("p", { className: "text-muted-foreground text-xs", children: e })
  ] }),
  /* @__PURE__ */ c("div", { children: r })
] }), Cd = () => /* @__PURE__ */ c(U0, { children: [
  /* @__PURE__ */ c(j0, { close: !0, children: /* @__PURE__ */ c(Z0, { children: "Sobre" }) }),
  /* @__PURE__ */ c(B0, { className: "flex flex-col text-sm", children: [
    /* @__PURE__ */ c(bs, { label: "Sobre o VLibras", children: /* @__PURE__ */ c("p", { className: "", children: [
      "A ",
      /* @__PURE__ */ c("strong", { children: "Suíte VLibras" }),
      " é um conjunto de ferramentas gratuitas de código aberto que traduz conteúdo digital (texto, áudio e vídeo) em Português para Libras."
    ] }) }),
    /* @__PURE__ */ c(bs, { label: "Realizadores", children: /* @__PURE__ */ c("div", { className: "flex w-full flex-col justify-between gap-1", children: [
      /* @__PURE__ */ c("div", { className: "flex w-full justify-between gap-2", children: [
        /* @__PURE__ */ c("img", { src: B3, alt: "", className: "h-auto min-w-15 max-w-27" }),
        /* @__PURE__ */ c("img", { src: q3, alt: "", className: "h-auto min-w-15 max-w-27" })
      ] }),
      /* @__PURE__ */ c("div", { className: "flex justify-between gap-1", children: [
        /* @__PURE__ */ c("img", { src: Z3, alt: "", className: "h-auto min-w-15 max-w-27" }),
        /* @__PURE__ */ c("img", { src: W3, alt: "", className: "h-auto min-w-15 max-w-27" }),
        /* @__PURE__ */ c("img", { src: w3, alt: "", className: "h-auto min-w-15 max-w-27" })
      ] })
    ] }) }),
    /* @__PURE__ */ c("div", { className: "relative mobile:-m-2 mt-auto! flex min-h-32 flex-col overflow-hidden rounded-xl border p-4 font-semibold text-primary-foreground", children: [
      /* @__PURE__ */ c("p", { className: "text-center", children: "Nos acompanhe nas redes sociais" }),
      /* @__PURE__ */ c(
        "div",
        {
          className: B(
            "z-999 mt-auto flex w-full items-center gap-2",
            "[&_button]:w-full [&_button]:rounded-full [&_button]:bg-primary-foreground [&_button]:text-primary"
          ),
          children: [
            /* @__PURE__ */ c(
              Y,
              {
                size: "icon-sm",
                onClick: () => window.open("https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras", "_blank"),
                children: /* @__PURE__ */ c(fd, {})
              }
            ),
            /* @__PURE__ */ c(Y, { size: "icon-sm", onClick: () => window.open("https://www.facebook.com/vlibras", "_blank"), children: /* @__PURE__ */ c(hd, {}) }),
            /* @__PURE__ */ c(Y, { size: "icon-sm", onClick: () => window.open("https://www.instagram.com/vlibrasoficial", "_blank"), children: /* @__PURE__ */ c(pd, {}) }),
            /* @__PURE__ */ c(Y, { size: "icon-sm", onClick: () => window.open("https://x.com/VLibrasoficial", "_blank"), children: /* @__PURE__ */ c(gd, {}) }),
            /* @__PURE__ */ c(Y, { size: "icon-sm", onClick: () => window.open("https://www.youtube.com/@vlibras-lavid3180", "_blank"), children: /* @__PURE__ */ c(vd, {}) })
          ]
        }
      ),
      /* @__PURE__ */ c(g2, { className: "absolute top-4 left-0 -z-1 size-32 text-primary-foreground opacity-15" }),
      /* @__PURE__ */ c("div", { className: "absolute inset-0 -z-10 bg-primary" })
    ] })
  ] })
] });
function q0(t) {
  const e = Wt(null), r = ({ children: o, data: s }) => {
    const a = Ae(null);
    return a.current || (a.current = d0(() => ({ data: s }))), F(() => {
      a?.current?.setState({ data: s });
    }, [s]), /* @__PURE__ */ c(e.Provider, { value: a.current, children: o });
  }, i = (o) => {
    const s = $e(e);
    if (!s) throw new Error("useContext must be used within its Provider");
    return b0(s, o);
  };
  return { Context: e, Provider: r, useCtx: () => i((o) => o.data) };
}
class wd {
  root;
  constructor(e) {
    try {
      typeof e == "string" ? this.root = JSON.parse(e).root : this.root = e.root;
    } catch (r) {
      this.root = { children: {}, end: !1 }, console.error("Falha ao processar a Prefix Tree:", r);
    }
  }
  /**
   * Encontra todas as palavras que começam com o prefixo fornecido.
   * @param prefix O termo de busca (ex: "CAS")
   * @param onMatch Callback chamado para cada palavra encontrada (ex: "CASA", "CASADO")
   */
  loadSigns(e, r) {
    const i = e.toUpperCase();
    let n = this.root;
    for (const s of i)
      if (n = n.children?.[s], !n) return;
    const o = (s, a) => {
      s.end && r(a);
      for (const l in s.children)
        o(s.children[l], a + l);
    };
    o(n, i);
  }
  searchSigns(e = "") {
    const r = [];
    return this.loadSigns(e, (i) => r.push(i)), r;
  }
}
var _r = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(t) {
    return this.listeners.add(t), this.onSubscribe(), () => {
      this.listeners.delete(t), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, _d = class extends _r {
  #e;
  #t;
  #r;
  constructor() {
    super(), this.#r = (t) => {
      if (typeof window < "u" && window.addEventListener) {
        const e = () => t();
        return window.addEventListener("visibilitychange", e, !1), () => {
          window.removeEventListener("visibilitychange", e);
        };
      }
    };
  }
  onSubscribe() {
    this.#t || this.setEventListener(this.#r);
  }
  onUnsubscribe() {
    this.hasListeners() || (this.#t?.(), this.#t = void 0);
  }
  setEventListener(t) {
    this.#r = t, this.#t?.(), this.#t = t((e) => {
      typeof e == "boolean" ? this.setFocused(e) : this.onFocus();
    });
  }
  setFocused(t) {
    this.#e !== t && (this.#e = t, this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((e) => {
      e(t);
    });
  }
  isFocused() {
    return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden";
  }
}, v2 = new _d(), ui = {}, yd = {
  // We need the wrapper function syntax below instead of direct references to
  // global setTimeout etc.
  //
  // BAD: `setTimeout: setTimeout`
  // GOOD: `setTimeout: (cb, delay) => setTimeout(cb, delay)`
  //
  // If we use direct references here, then anything that wants to spy on or
  // replace the global setTimeout (like tests) won't work since we'll already
  // have a hard reference to the original implementation at the time when this
  // file was imported.
  setTimeout: (t, e) => setTimeout(t, e),
  clearTimeout: (t) => clearTimeout(t),
  setInterval: (t, e) => setInterval(t, e),
  clearInterval: (t) => clearInterval(t)
}, xd = class {
  // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
  // type at app boot; and if we leave that type, then any new timer provider
  // would need to support the default provider's concrete timer ID, which is
  // infeasible across environments.
  //
  // We settle for type safety for the TimeoutProvider type, and accept that
  // this class is unsafe internally to allow for extension.
  #e = yd;
  #t = !1;
  setTimeoutProvider(t) {
    ui.NODE_ENV !== "production" && this.#t && t !== this.#e && console.error(
      "[timeoutManager]: Switching provider after calls to previous provider might result in unexpected behavior.",
      { previous: this.#e, provider: t }
    ), this.#e = t, ui.NODE_ENV !== "production" && (this.#t = !1);
  }
  setTimeout(t, e) {
    return ui.NODE_ENV !== "production" && (this.#t = !0), this.#e.setTimeout(t, e);
  }
  clearTimeout(t) {
    this.#e.clearTimeout(t);
  }
  setInterval(t, e) {
    return ui.NODE_ENV !== "production" && (this.#t = !0), this.#e.setInterval(t, e);
  }
  clearInterval(t) {
    this.#e.clearInterval(t);
  }
}, Dt = new xd();
function kd(t) {
  setTimeout(t, 0);
}
var W0 = {}, Ad = typeof window > "u" || "Deno" in globalThis;
function Oe() {
}
function Ed(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function vo(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function G0(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function It(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Ye(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Cs(t, e) {
  const {
    type: r = "all",
    exact: i,
    fetchStatus: n,
    predicate: o,
    queryKey: s,
    stale: a
  } = t;
  if (s) {
    if (i) {
      if (e.queryHash !== m2(s, e.options))
        return !1;
    } else if (!Jr(e.queryKey, s))
      return !1;
  }
  if (r !== "all") {
    const l = e.isActive();
    if (r === "active" && !l || r === "inactive" && l)
      return !1;
  }
  return !(typeof a == "boolean" && e.isStale() !== a || n && n !== e.state.fetchStatus || o && !o(e));
}
function ws(t, e) {
  const { exact: r, status: i, predicate: n, mutationKey: o } = t;
  if (o) {
    if (!e.options.mutationKey)
      return !1;
    if (r) {
      if (jt(e.options.mutationKey) !== jt(o))
        return !1;
    } else if (!Jr(e.options.mutationKey, o))
      return !1;
  }
  return !(i && e.state.status !== i || n && !n(e));
}
function m2(t, e) {
  return (e?.queryKeyHashFn || jt)(t);
}
function jt(t) {
  return JSON.stringify(
    t,
    (e, r) => bo(r) ? Object.keys(r).sort().reduce((i, n) => (i[n] = r[n], i), {}) : r
  );
}
function Jr(t, e) {
  return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every((r) => Jr(t[r], e[r])) : !1;
}
var Sd = Object.prototype.hasOwnProperty;
function mo(t, e, r = 0) {
  if (t === e)
    return t;
  if (r > 500) return e;
  const i = _s(t) && _s(e);
  if (!i && !(bo(t) && bo(e))) return e;
  const o = (i ? t : Object.keys(t)).length, s = i ? e : Object.keys(e), a = s.length, l = i ? new Array(a) : {};
  let u = 0;
  for (let d = 0; d < a; d++) {
    const p = i ? d : s[d], h = t[p], f = e[p];
    if (h === f) {
      l[p] = h, (i ? d < o : Sd.call(t, p)) && u++;
      continue;
    }
    if (h === null || f === null || typeof h != "object" || typeof f != "object") {
      l[p] = f;
      continue;
    }
    const v = mo(h, f, r + 1);
    l[p] = v, v === h && u++;
  }
  return o === a && u === o ? t : l;
}
function Oi(t, e) {
  if (!e || Object.keys(t).length !== Object.keys(e).length)
    return !1;
  for (const r in t)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function _s(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function bo(t) {
  if (!ys(t))
    return !1;
  const e = t.constructor;
  if (e === void 0)
    return !0;
  const r = e.prototype;
  return !(!ys(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function ys(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Rd(t) {
  return new Promise((e) => {
    Dt.setTimeout(e, t);
  });
}
function Co(t, e, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(t, e);
  if (r.structuralSharing !== !1) {
    if (W0.NODE_ENV !== "production")
      try {
        return mo(t, e);
      } catch (i) {
        throw console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${i}`
        ), i;
      }
    return mo(t, e);
  }
  return e;
}
function Pd(t, e, r = 0) {
  const i = [...t, e];
  return r && i.length > r ? i.slice(1) : i;
}
function Md(t, e, r = 0) {
  const i = [e, ...t];
  return r && i.length > r ? i.slice(0, -1) : i;
}
var Hi = /* @__PURE__ */ Symbol();
function Y0(t, e) {
  return W0.NODE_ENV !== "production" && t.queryFn === Hi && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${t.queryHash}'`
  ), !t.queryFn && e?.initialPromise ? () => e.initialPromise : !t.queryFn || t.queryFn === Hi ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn;
}
function Q0(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
function Id(t, e, r) {
  let i = !1, n;
  return Object.defineProperty(t, "signal", {
    enumerable: !0,
    get: () => (n ??= e(), i || (i = !0, n.aborted ? r() : n.addEventListener("abort", r, { once: !0 })), n)
  }), t;
}
var $r = /* @__PURE__ */ (() => {
  let t = () => Ad;
  return {
    /**
     * Returns whether the current runtime should be treated as a server environment.
     */
    isServer() {
      return t();
    },
    /**
     * Overrides the server check globally.
     */
    setIsServer(e) {
      t = e;
    }
  };
})();
function wo() {
  let t, e;
  const r = new Promise((n, o) => {
    t = n, e = o;
  });
  r.status = "pending", r.catch(() => {
  });
  function i(n) {
    Object.assign(r, n), delete r.resolve, delete r.reject;
  }
  return r.resolve = (n) => {
    i({
      status: "fulfilled",
      value: n
    }), t(n);
  }, r.reject = (n) => {
    i({
      status: "rejected",
      reason: n
    }), e(n);
  }, r;
}
var Ld = kd;
function Nd() {
  let t = [], e = 0, r = (a) => {
    a();
  }, i = (a) => {
    a();
  }, n = Ld;
  const o = (a) => {
    e ? t.push(a) : n(() => {
      r(a);
    });
  }, s = () => {
    const a = t;
    t = [], a.length && n(() => {
      i(() => {
        a.forEach((l) => {
          r(l);
        });
      });
    });
  };
  return {
    batch: (a) => {
      let l;
      e++;
      try {
        l = a();
      } finally {
        e--, e || s();
      }
      return l;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (a) => (...l) => {
      o(() => {
        a(...l);
      });
    },
    schedule: o,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (a) => {
      r = a;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (a) => {
      i = a;
    },
    setScheduler: (a) => {
      n = a;
    }
  };
}
var we = Nd(), Od = class extends _r {
  #e = !0;
  #t;
  #r;
  constructor() {
    super(), this.#r = (t) => {
      if (typeof window < "u" && window.addEventListener) {
        const e = () => t(!0), r = () => t(!1);
        return window.addEventListener("online", e, !1), window.addEventListener("offline", r, !1), () => {
          window.removeEventListener("online", e), window.removeEventListener("offline", r);
        };
      }
    };
  }
  onSubscribe() {
    this.#t || this.setEventListener(this.#r);
  }
  onUnsubscribe() {
    this.hasListeners() || (this.#t?.(), this.#t = void 0);
  }
  setEventListener(t) {
    this.#r = t, this.#t?.(), this.#t = t(this.setOnline.bind(this));
  }
  setOnline(t) {
    this.#e !== t && (this.#e = t, this.listeners.forEach((r) => {
      r(t);
    }));
  }
  isOnline() {
    return this.#e;
  }
}, Ti = new Od();
function Hd(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function K0(t) {
  return (t ?? "online") === "online" ? Ti.isOnline() : !0;
}
var _o = class extends Error {
  constructor(t) {
    super("CancelledError"), this.revert = t?.revert, this.silent = t?.silent;
  }
};
function X0(t) {
  let e = !1, r = 0, i;
  const n = wo(), o = () => n.status !== "pending", s = (g) => {
    if (!o()) {
      const m = new _o(g);
      h(m), t.onCancel?.(m);
    }
  }, a = () => {
    e = !0;
  }, l = () => {
    e = !1;
  }, u = () => v2.isFocused() && (t.networkMode === "always" || Ti.isOnline()) && t.canRun(), d = () => K0(t.networkMode) && t.canRun(), p = (g) => {
    o() || (i?.(), n.resolve(g));
  }, h = (g) => {
    o() || (i?.(), n.reject(g));
  }, f = () => new Promise((g) => {
    i = (m) => {
      (o() || u()) && g(m);
    }, t.onPause?.();
  }).then(() => {
    i = void 0, o() || t.onContinue?.();
  }), v = () => {
    if (o())
      return;
    let g;
    const m = r === 0 ? t.initialPromise : void 0;
    try {
      g = m ?? t.fn();
    } catch (w) {
      g = Promise.reject(w);
    }
    Promise.resolve(g).then(p).catch((w) => {
      if (o())
        return;
      const y = t.retry ?? ($r.isServer() ? 0 : 3), x = t.retryDelay ?? Hd, _ = typeof x == "function" ? x(r, w) : x, k = y === !0 || typeof y == "number" && r < y || typeof y == "function" && y(r, w);
      if (e || !k) {
        h(w);
        return;
      }
      r++, t.onFail?.(r, w), Rd(_).then(() => u() ? void 0 : f()).then(() => {
        e ? h(w) : v();
      });
    });
  };
  return {
    promise: n,
    status: () => n.status,
    cancel: s,
    continue: () => (i?.(), n),
    cancelRetry: a,
    continueRetry: l,
    canStart: d,
    start: () => (d() ? v() : f().then(v), n)
  };
}
var J0 = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), vo(this.gcTime) && (this.#e = Dt.setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(t) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      t ?? ($r.isServer() ? 1 / 0 : 300 * 1e3)
    );
  }
  clearGcTimeout() {
    this.#e && (Dt.clearTimeout(this.#e), this.#e = void 0);
  }
}, xs = {}, Td = class extends J0 {
  #e;
  #t;
  #r;
  #n;
  #i;
  #o;
  #s;
  constructor(t) {
    super(), this.#s = !1, this.#o = t.defaultOptions, this.setOptions(t.options), this.observers = [], this.#n = t.client, this.#r = this.#n.getQueryCache(), this.queryKey = t.queryKey, this.queryHash = t.queryHash, this.#e = As(this.options), this.state = t.state ?? this.#e, this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    return this.#i?.promise;
  }
  setOptions(t) {
    if (this.options = { ...this.#o, ...t }, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
      const e = As(this.options);
      e.data !== void 0 && (this.setState(
        ks(e.data, e.dataUpdatedAt)
      ), this.#e = e);
    }
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && this.#r.remove(this);
  }
  setData(t, e) {
    const r = Co(this.state.data, t, this.options);
    return this.#l({
      data: r,
      type: "success",
      dataUpdatedAt: e?.updatedAt,
      manual: e?.manual
    }), r;
  }
  setState(t, e) {
    this.#l({ type: "setState", state: t, setStateOptions: e });
  }
  cancel(t) {
    const e = this.#i?.promise;
    return this.#i?.cancel(t), e ? e.then(Oe).catch(Oe) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  get resetState() {
    return this.#e;
  }
  reset() {
    this.destroy(), this.setState(this.resetState);
  }
  isActive() {
    return this.observers.some(
      (t) => Ye(t.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Hi || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return this.getObserversCount() > 0 ? this.observers.some(
      (t) => It(t.options.staleTime, this) === "static"
    ) : !1;
  }
  isStale() {
    return this.getObserversCount() > 0 ? this.observers.some(
      (t) => t.getCurrentResult().isStale
    ) : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(t = 0) {
    return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !G0(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    this.observers.find((e) => e.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: !1 }), this.#i?.continue();
  }
  onOnline() {
    this.observers.find((e) => e.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }), this.#i?.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.#r.notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((e) => e !== t), this.observers.length || (this.#i && (this.#s || this.#a() ? this.#i.cancel({ revert: !0 }) : this.#i.cancelRetry()), this.scheduleGc()), this.#r.notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  #a() {
    return this.state.fetchStatus === "paused" && this.state.status === "pending";
  }
  invalidate() {
    this.state.isInvalidated || this.#l({ type: "invalidate" });
  }
  async fetch(t, e) {
    if (this.state.fetchStatus !== "idle" && // If the promise in the retryer is already rejected, we have to definitely
    // re-start the fetch; there is a chance that the query is still in a
    // pending state when that happens
    this.#i?.status() !== "rejected") {
      if (this.state.data !== void 0 && e?.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.#i)
        return this.#i.continueRetry(), this.#i.promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const a = this.observers.find((l) => l.options.queryFn);
      a && this.setOptions(a.options);
    }
    xs.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const r = new AbortController(), i = (a) => {
      Object.defineProperty(a, "signal", {
        enumerable: !0,
        get: () => (this.#s = !0, r.signal)
      });
    }, n = () => {
      const a = Y0(this.options, e), u = (() => {
        const d = {
          client: this.#n,
          queryKey: this.queryKey,
          meta: this.meta
        };
        return i(d), d;
      })();
      return this.#s = !1, this.options.persister ? this.options.persister(
        a,
        u,
        this
      ) : a(u);
    }, s = (() => {
      const a = {
        fetchOptions: e,
        options: this.options,
        queryKey: this.queryKey,
        client: this.#n,
        state: this.state,
        fetchFn: n
      };
      return i(a), a;
    })();
    this.options.behavior?.onFetch(s, this), this.#t = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== s.fetchOptions?.meta) && this.#l({ type: "fetch", meta: s.fetchOptions?.meta }), this.#i = X0({
      initialPromise: e?.initialPromise,
      fn: s.fetchFn,
      onCancel: (a) => {
        a instanceof _o && a.revert && this.setState({
          ...this.#t,
          fetchStatus: "idle"
        }), r.abort();
      },
      onFail: (a, l) => {
        this.#l({ type: "failed", failureCount: a, error: l });
      },
      onPause: () => {
        this.#l({ type: "pause" });
      },
      onContinue: () => {
        this.#l({ type: "continue" });
      },
      retry: s.options.retry,
      retryDelay: s.options.retryDelay,
      networkMode: s.options.networkMode,
      canRun: () => !0
    });
    try {
      const a = await this.#i.start();
      if (a === void 0)
        throw xs.NODE_ENV !== "production" && console.error(
          `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
        ), new Error(`${this.queryHash} data is undefined`);
      return this.setData(a), this.#r.config.onSuccess?.(a, this), this.#r.config.onSettled?.(
        a,
        this.state.error,
        this
      ), a;
    } catch (a) {
      if (a instanceof _o) {
        if (a.silent)
          return this.#i.promise;
        if (a.revert) {
          if (this.state.data === void 0)
            throw a;
          return this.state.data;
        }
      }
      throw this.#l({
        type: "error",
        error: a
      }), this.#r.config.onError?.(
        a,
        this
      ), this.#r.config.onSettled?.(
        this.state.data,
        a,
        this
      ), a;
    } finally {
      this.scheduleGc();
    }
  }
  #l(t) {
    const e = (r) => {
      switch (t.type) {
        case "failed":
          return {
            ...r,
            fetchFailureCount: t.failureCount,
            fetchFailureReason: t.error
          };
        case "pause":
          return {
            ...r,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...r,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...r,
            ...$0(r.data, this.options),
            fetchMeta: t.meta ?? null
          };
        case "success":
          const i = {
            ...r,
            ...ks(t.data, t.dataUpdatedAt),
            dataUpdateCount: r.dataUpdateCount + 1,
            ...!t.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
          return this.#t = t.manual ? i : void 0, i;
        case "error":
          const n = t.error;
          return {
            ...r,
            error: n,
            errorUpdateCount: r.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: r.fetchFailureCount + 1,
            fetchFailureReason: n,
            fetchStatus: "idle",
            status: "error",
            // flag existing data as invalidated if we get a background error
            // note that "no data" always means stale so we can set unconditionally here
            isInvalidated: !0
          };
        case "invalidate":
          return {
            ...r,
            isInvalidated: !0
          };
        case "setState":
          return {
            ...r,
            ...t.state
          };
      }
    };
    this.state = e(this.state), we.batch(() => {
      this.observers.forEach((r) => {
        r.onQueryUpdate();
      }), this.#r.notify({ query: this, type: "updated", action: t });
    });
  }
};
function $0(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: K0(e.networkMode) ? "fetching" : "paused",
    ...t === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function ks(t, e) {
  return {
    data: t,
    dataUpdatedAt: e ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success"
  };
}
function As(t) {
  const e = typeof t.initialData == "function" ? t.initialData() : t.initialData, r = e !== void 0, i = r ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
  return {
    data: e,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? i ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var Fd = class extends _r {
  constructor(t, e) {
    super(), this.options = e, this.#e = t, this.#a = null, this.#s = wo(), this.bindMethods(), this.setOptions(e);
  }
  #e;
  #t = void 0;
  #r = void 0;
  #n = void 0;
  #i;
  #o;
  #s;
  #a;
  #l;
  #p;
  // This property keeps track of the last query with defined data.
  // It will be used to pass the previous data and query to the placeholder function between renders.
  #g;
  #d;
  #u;
  #c;
  #f = /* @__PURE__ */ new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (this.#t.addObserver(this), Es(this.#t, this.options) ? this.#h() : this.updateResult(), this.#C());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return yo(
      this.#t,
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return yo(
      this.#t,
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), this.#w(), this.#_(), this.#t.removeObserver(this);
  }
  setOptions(t) {
    const e = this.options, r = this.#t;
    if (this.options = this.#e.defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Ye(this.options.enabled, this.#t) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    this.#y(), this.#t.setOptions(this.options), e._defaulted && !Oi(this.options, e) && this.#e.getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: this.#t,
      observer: this
    });
    const i = this.hasListeners();
    i && Ss(
      this.#t,
      r,
      this.options,
      e
    ) && this.#h(), this.updateResult(), i && (this.#t !== r || Ye(this.options.enabled, this.#t) !== Ye(e.enabled, this.#t) || It(this.options.staleTime, this.#t) !== It(e.staleTime, this.#t)) && this.#v();
    const n = this.#m();
    i && (this.#t !== r || Ye(this.options.enabled, this.#t) !== Ye(e.enabled, this.#t) || n !== this.#c) && this.#b(n);
  }
  getOptimisticResult(t) {
    const e = this.#e.getQueryCache().build(this.#e, t), r = this.createResult(e, t);
    return zd(this, r) && (this.#n = r, this.#o = this.options, this.#i = this.#t.state), r;
  }
  getCurrentResult() {
    return this.#n;
  }
  trackResult(t, e) {
    return new Proxy(t, {
      get: (r, i) => (this.trackProp(i), e?.(i), i === "promise" && (this.trackProp("data"), !this.options.experimental_prefetchInRender && this.#s.status === "pending" && this.#s.reject(
        new Error(
          "experimental_prefetchInRender feature flag is not enabled"
        )
      )), Reflect.get(r, i))
    });
  }
  trackProp(t) {
    this.#f.add(t);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const e = this.#e.defaultQueryOptions(t), r = this.#e.getQueryCache().build(this.#e, e);
    return r.fetch().then(() => this.createResult(r, e));
  }
  fetch(t) {
    return this.#h({
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), this.#n));
  }
  #h(t) {
    this.#y();
    let e = this.#t.fetch(
      this.options,
      t
    );
    return t?.throwOnError || (e = e.catch(Oe)), e;
  }
  #v() {
    this.#w();
    const t = It(
      this.options.staleTime,
      this.#t
    );
    if ($r.isServer() || this.#n.isStale || !vo(t))
      return;
    const r = G0(this.#n.dataUpdatedAt, t) + 1;
    this.#d = Dt.setTimeout(() => {
      this.#n.isStale || this.updateResult();
    }, r);
  }
  #m() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#t) : this.options.refetchInterval) ?? !1;
  }
  #b(t) {
    this.#_(), this.#c = t, !($r.isServer() || Ye(this.options.enabled, this.#t) === !1 || !vo(this.#c) || this.#c === 0) && (this.#u = Dt.setInterval(() => {
      (this.options.refetchIntervalInBackground || v2.isFocused()) && this.#h();
    }, this.#c));
  }
  #C() {
    this.#v(), this.#b(this.#m());
  }
  #w() {
    this.#d && (Dt.clearTimeout(this.#d), this.#d = void 0);
  }
  #_() {
    this.#u && (Dt.clearInterval(this.#u), this.#u = void 0);
  }
  createResult(t, e) {
    const r = this.#t, i = this.options, n = this.#n, o = this.#i, s = this.#o, l = t !== r ? t.state : this.#r, { state: u } = t;
    let d = { ...u }, p = !1, h;
    if (e._optimisticResults) {
      const b = this.hasListeners(), S = !b && Es(t, e), D = b && Ss(t, r, e, i);
      (S || D) && (d = {
        ...d,
        ...$0(u.data, t.options)
      }), e._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
    }
    let { error: f, errorUpdatedAt: v, status: g } = d;
    h = d.data;
    let m = !1;
    if (e.placeholderData !== void 0 && h === void 0 && g === "pending") {
      let b;
      n?.isPlaceholderData && e.placeholderData === s?.placeholderData ? (b = n.data, m = !0) : b = typeof e.placeholderData == "function" ? e.placeholderData(
        this.#g?.state.data,
        this.#g
      ) : e.placeholderData, b !== void 0 && (g = "success", h = Co(
        n?.data,
        b,
        e
      ), p = !0);
    }
    if (e.select && h !== void 0 && !m)
      if (n && h === o?.data && e.select === this.#l)
        h = this.#p;
      else
        try {
          this.#l = e.select, h = e.select(h), h = Co(n?.data, h, e), this.#p = h, this.#a = null;
        } catch (b) {
          this.#a = b;
        }
    this.#a && (f = this.#a, h = this.#p, v = Date.now(), g = "error");
    const w = d.fetchStatus === "fetching", y = g === "pending", x = g === "error", _ = y && w, k = h !== void 0, E = {
      status: g,
      fetchStatus: d.fetchStatus,
      isPending: y,
      isSuccess: g === "success",
      isError: x,
      isInitialLoading: _,
      isLoading: _,
      data: h,
      dataUpdatedAt: d.dataUpdatedAt,
      error: f,
      errorUpdatedAt: v,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: t.isFetched(),
      isFetchedAfterMount: d.dataUpdateCount > l.dataUpdateCount || d.errorUpdateCount > l.errorUpdateCount,
      isFetching: w,
      isRefetching: w && !y,
      isLoadingError: x && !k,
      isPaused: d.fetchStatus === "paused",
      isPlaceholderData: p,
      isRefetchError: x && k,
      isStale: b2(t, e),
      refetch: this.refetch,
      promise: this.#s,
      isEnabled: Ye(e.enabled, t) !== !1
    };
    if (this.options.experimental_prefetchInRender) {
      const b = E.data !== void 0, S = E.status === "error" && !b, D = (U) => {
        S ? U.reject(E.error) : b && U.resolve(E.data);
      }, V = () => {
        const U = this.#s = E.promise = wo();
        D(U);
      }, H = this.#s;
      switch (H.status) {
        case "pending":
          t.queryHash === r.queryHash && D(H);
          break;
        case "fulfilled":
          (S || E.data !== H.value) && V();
          break;
        case "rejected":
          (!S || E.error !== H.reason) && V();
          break;
      }
    }
    return E;
  }
  updateResult() {
    const t = this.#n, e = this.createResult(this.#t, this.options);
    if (this.#i = this.#t.state, this.#o = this.options, this.#i.data !== void 0 && (this.#g = this.#t), Oi(e, t))
      return;
    this.#n = e;
    const r = () => {
      if (!t)
        return !0;
      const { notifyOnChangeProps: i } = this.options, n = typeof i == "function" ? i() : i;
      if (n === "all" || !n && !this.#f.size)
        return !0;
      const o = new Set(
        n ?? this.#f
      );
      return this.options.throwOnError && o.add("error"), Object.keys(this.#n).some((s) => {
        const a = s;
        return this.#n[a] !== t[a] && o.has(a);
      });
    };
    this.#x({ listeners: r() });
  }
  #y() {
    const t = this.#e.getQueryCache().build(this.#e, this.options);
    if (t === this.#t)
      return;
    const e = this.#t;
    this.#t = t, this.#r = t.state, this.hasListeners() && (e?.removeObserver(this), t.addObserver(this));
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && this.#C();
  }
  #x(t) {
    we.batch(() => {
      t.listeners && this.listeners.forEach((e) => {
        e(this.#n);
      }), this.#e.getQueryCache().notify({
        query: this.#t,
        type: "observerResultsUpdated"
      });
    });
  }
};
function Vd(t, e) {
  return Ye(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1);
}
function Es(t, e) {
  return Vd(t, e) || t.state.data !== void 0 && yo(t, e, e.refetchOnMount);
}
function yo(t, e, r) {
  if (Ye(e.enabled, t) !== !1 && It(e.staleTime, t) !== "static") {
    const i = typeof r == "function" ? r(t) : r;
    return i === "always" || i !== !1 && b2(t, e);
  }
  return !1;
}
function Ss(t, e, r, i) {
  return (t !== e || Ye(i.enabled, t) === !1) && (!r.suspense || t.state.status !== "error") && b2(t, r);
}
function b2(t, e) {
  return Ye(e.enabled, t) !== !1 && t.isStaleByTime(It(e.staleTime, t));
}
function zd(t, e) {
  return !Oi(t.getCurrentResult(), e);
}
function Rs(t) {
  return {
    onFetch: (e, r) => {
      const i = e.options, n = e.fetchOptions?.meta?.fetchMore?.direction, o = e.state.data?.pages || [], s = e.state.data?.pageParams || [];
      let a = { pages: [], pageParams: [] }, l = 0;
      const u = async () => {
        let d = !1;
        const p = (v) => {
          Id(
            v,
            () => e.signal,
            () => d = !0
          );
        }, h = Y0(e.options, e.fetchOptions), f = async (v, g, m) => {
          if (d)
            return Promise.reject();
          if (g == null && v.pages.length)
            return Promise.resolve(v);
          const y = (() => {
            const A = {
              client: e.client,
              queryKey: e.queryKey,
              pageParam: g,
              direction: m ? "backward" : "forward",
              meta: e.options.meta
            };
            return p(A), A;
          })(), x = await h(y), { maxPages: _ } = e.options, k = m ? Md : Pd;
          return {
            pages: k(v.pages, x, _),
            pageParams: k(v.pageParams, g, _)
          };
        };
        if (n && o.length) {
          const v = n === "backward", g = v ? Dd : Ps, m = {
            pages: o,
            pageParams: s
          }, w = g(i, m);
          a = await f(m, w, v);
        } else {
          const v = t ?? o.length;
          do {
            const g = l === 0 ? s[0] ?? i.initialPageParam : Ps(i, a);
            if (l > 0 && g == null)
              break;
            a = await f(a, g), l++;
          } while (l < v);
        }
        return a;
      };
      e.options.persister ? e.fetchFn = () => e.options.persister?.(
        u,
        {
          client: e.client,
          queryKey: e.queryKey,
          meta: e.options.meta,
          signal: e.signal
        },
        r
      ) : e.fetchFn = u;
    }
  };
}
function Ps(t, { pages: e, pageParams: r }) {
  const i = e.length - 1;
  return e.length > 0 ? t.getNextPageParam(
    e[i],
    e,
    r[i],
    r
  ) : void 0;
}
function Dd(t, { pages: e, pageParams: r }) {
  return e.length > 0 ? t.getPreviousPageParam?.(e[0], e, r[0], r) : void 0;
}
var Ud = class extends J0 {
  #e;
  #t;
  #r;
  #n;
  constructor(t) {
    super(), this.#e = t.client, this.mutationId = t.mutationId, this.#r = t.mutationCache, this.#t = [], this.state = t.state || e1(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    this.#t.includes(t) || (this.#t.push(t), this.clearGcTimeout(), this.#r.notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    this.#t = this.#t.filter((e) => e !== t), this.scheduleGc(), this.#r.notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#r.remove(this));
  }
  continue() {
    return this.#n?.continue() ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    const e = () => {
      this.#i({ type: "continue" });
    }, r = {
      client: this.#e,
      meta: this.options.meta,
      mutationKey: this.options.mutationKey
    };
    this.#n = X0({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t, r) : Promise.reject(new Error("No mutationFn found")),
      onFail: (o, s) => {
        this.#i({ type: "failed", failureCount: o, error: s });
      },
      onPause: () => {
        this.#i({ type: "pause" });
      },
      onContinue: e,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#r.canRun(this)
    });
    const i = this.state.status === "pending", n = !this.#n.canStart();
    try {
      if (i)
        e();
      else {
        this.#i({ type: "pending", variables: t, isPaused: n }), this.#r.config.onMutate && await this.#r.config.onMutate(
          t,
          this,
          r
        );
        const s = await this.options.onMutate?.(
          t,
          r
        );
        s !== this.state.context && this.#i({
          type: "pending",
          context: s,
          variables: t,
          isPaused: n
        });
      }
      const o = await this.#n.start();
      return await this.#r.config.onSuccess?.(
        o,
        t,
        this.state.context,
        this,
        r
      ), await this.options.onSuccess?.(
        o,
        t,
        this.state.context,
        r
      ), await this.#r.config.onSettled?.(
        o,
        null,
        this.state.variables,
        this.state.context,
        this,
        r
      ), await this.options.onSettled?.(
        o,
        null,
        t,
        this.state.context,
        r
      ), this.#i({ type: "success", data: o }), o;
    } catch (o) {
      try {
        await this.#r.config.onError?.(
          o,
          t,
          this.state.context,
          this,
          r
        );
      } catch (s) {
        Promise.reject(s);
      }
      try {
        await this.options.onError?.(
          o,
          t,
          this.state.context,
          r
        );
      } catch (s) {
        Promise.reject(s);
      }
      try {
        await this.#r.config.onSettled?.(
          void 0,
          o,
          this.state.variables,
          this.state.context,
          this,
          r
        );
      } catch (s) {
        Promise.reject(s);
      }
      try {
        await this.options.onSettled?.(
          void 0,
          o,
          t,
          this.state.context,
          r
        );
      } catch (s) {
        Promise.reject(s);
      }
      throw this.#i({ type: "error", error: o }), o;
    } finally {
      this.#r.runNext(this);
    }
  }
  #i(t) {
    const e = (r) => {
      switch (t.type) {
        case "failed":
          return {
            ...r,
            failureCount: t.failureCount,
            failureReason: t.error
          };
        case "pause":
          return {
            ...r,
            isPaused: !0
          };
        case "continue":
          return {
            ...r,
            isPaused: !1
          };
        case "pending":
          return {
            ...r,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: t.isPaused,
            status: "pending",
            variables: t.variables,
            submittedAt: Date.now()
          };
        case "success":
          return {
            ...r,
            data: t.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1
          };
        case "error":
          return {
            ...r,
            data: void 0,
            error: t.error,
            failureCount: r.failureCount + 1,
            failureReason: t.error,
            isPaused: !1,
            status: "error"
          };
      }
    };
    this.state = e(this.state), we.batch(() => {
      this.#t.forEach((r) => {
        r.onMutationUpdate(t);
      }), this.#r.notify({
        mutation: this,
        type: "updated",
        action: t
      });
    });
  }
};
function e1() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var jd = class extends _r {
  constructor(t = {}) {
    super(), this.config = t, this.#e = /* @__PURE__ */ new Set(), this.#t = /* @__PURE__ */ new Map(), this.#r = 0;
  }
  #e;
  #t;
  #r;
  build(t, e, r) {
    const i = new Ud({
      client: t,
      mutationCache: this,
      mutationId: ++this.#r,
      options: t.defaultMutationOptions(e),
      state: r
    });
    return this.add(i), i;
  }
  add(t) {
    this.#e.add(t);
    const e = hi(t);
    if (typeof e == "string") {
      const r = this.#t.get(e);
      r ? r.push(t) : this.#t.set(e, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (this.#e.delete(t)) {
      const e = hi(t);
      if (typeof e == "string") {
        const r = this.#t.get(e);
        if (r)
          if (r.length > 1) {
            const i = r.indexOf(t);
            i !== -1 && r.splice(i, 1);
          } else r[0] === t && this.#t.delete(e);
      }
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    const e = hi(t);
    if (typeof e == "string") {
      const i = this.#t.get(e)?.find(
        (n) => n.state.status === "pending"
      );
      return !i || i === t;
    } else
      return !0;
  }
  runNext(t) {
    const e = hi(t);
    return typeof e == "string" ? this.#t.get(e)?.find((i) => i !== t && i.state.isPaused)?.continue() ?? Promise.resolve() : Promise.resolve();
  }
  clear() {
    we.batch(() => {
      this.#e.forEach((t) => {
        this.notify({ type: "removed", mutation: t });
      }), this.#e.clear(), this.#t.clear();
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(t) {
    const e = { exact: !0, ...t };
    return this.getAll().find(
      (r) => ws(e, r)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((e) => ws(t, e));
  }
  notify(t) {
    we.batch(() => {
      this.listeners.forEach((e) => {
        e(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((e) => e.state.isPaused);
    return we.batch(
      () => Promise.all(
        t.map((e) => e.continue().catch(Oe))
      )
    );
  }
};
function hi(t) {
  return t.options.scope?.id;
}
var Zd = class extends _r {
  #e;
  #t = void 0;
  #r;
  #n;
  constructor(e, r) {
    super(), this.#e = e, this.setOptions(r), this.bindMethods(), this.#i();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(e) {
    const r = this.options;
    this.options = this.#e.defaultMutationOptions(e), Oi(this.options, r) || this.#e.getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: this.#r,
      observer: this
    }), r?.mutationKey && this.options.mutationKey && jt(r.mutationKey) !== jt(this.options.mutationKey) ? this.reset() : this.#r?.state.status === "pending" && this.#r.setOptions(this.options);
  }
  onUnsubscribe() {
    this.hasListeners() || this.#r?.removeObserver(this);
  }
  onMutationUpdate(e) {
    this.#i(), this.#o(e);
  }
  getCurrentResult() {
    return this.#t;
  }
  reset() {
    this.#r?.removeObserver(this), this.#r = void 0, this.#i(), this.#o();
  }
  mutate(e, r) {
    return this.#n = r, this.#r?.removeObserver(this), this.#r = this.#e.getMutationCache().build(this.#e, this.options), this.#r.addObserver(this), this.#r.execute(e);
  }
  #i() {
    const e = this.#r?.state ?? e1();
    this.#t = {
      ...e,
      isPending: e.status === "pending",
      isSuccess: e.status === "success",
      isError: e.status === "error",
      isIdle: e.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    };
  }
  #o(e) {
    we.batch(() => {
      if (this.#n && this.hasListeners()) {
        const r = this.#t.variables, i = this.#t.context, n = {
          client: this.#e,
          meta: this.options.meta,
          mutationKey: this.options.mutationKey
        };
        if (e?.type === "success") {
          try {
            this.#n.onSuccess?.(
              e.data,
              r,
              i,
              n
            );
          } catch (o) {
            Promise.reject(o);
          }
          try {
            this.#n.onSettled?.(
              e.data,
              null,
              r,
              i,
              n
            );
          } catch (o) {
            Promise.reject(o);
          }
        } else if (e?.type === "error") {
          try {
            this.#n.onError?.(
              e.error,
              r,
              i,
              n
            );
          } catch (o) {
            Promise.reject(o);
          }
          try {
            this.#n.onSettled?.(
              void 0,
              e.error,
              r,
              i,
              n
            );
          } catch (o) {
            Promise.reject(o);
          }
        }
      }
      this.listeners.forEach((r) => {
        r(this.#t);
      });
    });
  }
}, Bd = class extends _r {
  constructor(t = {}) {
    super(), this.config = t, this.#e = /* @__PURE__ */ new Map();
  }
  #e;
  build(t, e, r) {
    const i = e.queryKey, n = e.queryHash ?? m2(i, e);
    let o = this.get(n);
    return o || (o = new Td({
      client: t,
      queryKey: i,
      queryHash: n,
      options: t.defaultQueryOptions(e),
      state: r,
      defaultOptions: t.getQueryDefaults(i)
    }), this.add(o)), o;
  }
  add(t) {
    this.#e.has(t.queryHash) || (this.#e.set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const e = this.#e.get(t.queryHash);
    e && (t.destroy(), e === t && this.#e.delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    we.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return this.#e.get(t);
  }
  getAll() {
    return [...this.#e.values()];
  }
  find(t) {
    const e = { exact: !0, ...t };
    return this.getAll().find(
      (r) => Cs(e, r)
    );
  }
  findAll(t = {}) {
    const e = this.getAll();
    return Object.keys(t).length > 0 ? e.filter((r) => Cs(t, r)) : e;
  }
  notify(t) {
    we.batch(() => {
      this.listeners.forEach((e) => {
        e(t);
      });
    });
  }
  onFocus() {
    we.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    we.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, qd = class {
  #e;
  #t;
  #r;
  #n;
  #i;
  #o;
  #s;
  #a;
  constructor(t = {}) {
    this.#e = t.queryCache || new Bd(), this.#t = t.mutationCache || new jd(), this.#r = t.defaultOptions || {}, this.#n = /* @__PURE__ */ new Map(), this.#i = /* @__PURE__ */ new Map(), this.#o = 0;
  }
  mount() {
    this.#o++, this.#o === 1 && (this.#s = v2.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), this.#e.onFocus());
    }), this.#a = Ti.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), this.#e.onOnline());
    }));
  }
  unmount() {
    this.#o--, this.#o === 0 && (this.#s?.(), this.#s = void 0, this.#a?.(), this.#a = void 0);
  }
  isFetching(t) {
    return this.#e.findAll({ ...t, fetchStatus: "fetching" }).length;
  }
  isMutating(t) {
    return this.#t.findAll({ ...t, status: "pending" }).length;
  }
  /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */
  getQueryData(t) {
    const e = this.defaultQueryOptions({ queryKey: t });
    return this.#e.get(e.queryHash)?.state.data;
  }
  ensureQueryData(t) {
    const e = this.defaultQueryOptions(t), r = this.#e.build(this, e), i = r.state.data;
    return i === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && r.isStaleByTime(It(e.staleTime, r)) && this.prefetchQuery(e), Promise.resolve(i));
  }
  getQueriesData(t) {
    return this.#e.findAll(t).map(({ queryKey: e, state: r }) => {
      const i = r.data;
      return [e, i];
    });
  }
  setQueryData(t, e, r) {
    const i = this.defaultQueryOptions({ queryKey: t }), o = this.#e.get(
      i.queryHash
    )?.state.data, s = Ed(e, o);
    if (s !== void 0)
      return this.#e.build(this, i).setData(s, { ...r, manual: !0 });
  }
  setQueriesData(t, e, r) {
    return we.batch(
      () => this.#e.findAll(t).map(({ queryKey: i }) => [
        i,
        this.setQueryData(i, e, r)
      ])
    );
  }
  getQueryState(t) {
    const e = this.defaultQueryOptions({ queryKey: t });
    return this.#e.get(
      e.queryHash
    )?.state;
  }
  removeQueries(t) {
    const e = this.#e;
    we.batch(() => {
      e.findAll(t).forEach((r) => {
        e.remove(r);
      });
    });
  }
  resetQueries(t, e) {
    const r = this.#e;
    return we.batch(() => (r.findAll(t).forEach((i) => {
      i.reset();
    }), this.refetchQueries(
      {
        type: "active",
        ...t
      },
      e
    )));
  }
  cancelQueries(t, e = {}) {
    const r = { revert: !0, ...e }, i = we.batch(
      () => this.#e.findAll(t).map((n) => n.cancel(r))
    );
    return Promise.all(i).then(Oe).catch(Oe);
  }
  invalidateQueries(t, e = {}) {
    return we.batch(() => (this.#e.findAll(t).forEach((r) => {
      r.invalidate();
    }), t?.refetchType === "none" ? Promise.resolve() : this.refetchQueries(
      {
        ...t,
        type: t?.refetchType ?? t?.type ?? "active"
      },
      e
    )));
  }
  refetchQueries(t, e = {}) {
    const r = {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }, i = we.batch(
      () => this.#e.findAll(t).filter((n) => !n.isDisabled() && !n.isStatic()).map((n) => {
        let o = n.fetch(void 0, r);
        return r.throwOnError || (o = o.catch(Oe)), n.state.fetchStatus === "paused" ? Promise.resolve() : o;
      })
    );
    return Promise.all(i).then(Oe);
  }
  fetchQuery(t) {
    const e = this.defaultQueryOptions(t);
    e.retry === void 0 && (e.retry = !1);
    const r = this.#e.build(this, e);
    return r.isStaleByTime(
      It(e.staleTime, r)
    ) ? r.fetch(e) : Promise.resolve(r.state.data);
  }
  prefetchQuery(t) {
    return this.fetchQuery(t).then(Oe).catch(Oe);
  }
  fetchInfiniteQuery(t) {
    return t.behavior = Rs(t.pages), this.fetchQuery(t);
  }
  prefetchInfiniteQuery(t) {
    return this.fetchInfiniteQuery(t).then(Oe).catch(Oe);
  }
  ensureInfiniteQueryData(t) {
    return t.behavior = Rs(t.pages), this.ensureQueryData(t);
  }
  resumePausedMutations() {
    return Ti.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return this.#e;
  }
  getMutationCache() {
    return this.#t;
  }
  getDefaultOptions() {
    return this.#r;
  }
  setDefaultOptions(t) {
    this.#r = t;
  }
  setQueryDefaults(t, e) {
    this.#n.set(jt(t), {
      queryKey: t,
      defaultOptions: e
    });
  }
  getQueryDefaults(t) {
    const e = [...this.#n.values()], r = {};
    return e.forEach((i) => {
      Jr(t, i.queryKey) && Object.assign(r, i.defaultOptions);
    }), r;
  }
  setMutationDefaults(t, e) {
    this.#i.set(jt(t), {
      mutationKey: t,
      defaultOptions: e
    });
  }
  getMutationDefaults(t) {
    const e = [...this.#i.values()], r = {};
    return e.forEach((i) => {
      Jr(t, i.mutationKey) && Object.assign(r, i.defaultOptions);
    }), r;
  }
  defaultQueryOptions(t) {
    if (t._defaulted)
      return t;
    const e = {
      ...this.#r.queries,
      ...this.getQueryDefaults(t.queryKey),
      ...t,
      _defaulted: !0
    };
    return e.queryHash || (e.queryHash = m2(
      e.queryKey,
      e
    )), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.queryFn === Hi && (e.enabled = !1), e;
  }
  defaultMutationOptions(t) {
    return t?._defaulted ? t : {
      ...this.#r.mutations,
      ...t?.mutationKey && this.getMutationDefaults(t.mutationKey),
      ...t,
      _defaulted: !0
    };
  }
  clear() {
    this.#e.clear(), this.#t.clear();
  }
}, t1 = Wt(!1), Wd = () => $e(t1);
t1.Provider;
var r1 = Wt(
  void 0
), i1 = (t) => {
  const e = $e(r1);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, Gd = ({
  client: t,
  children: e
}) => (F(() => (t.mount(), () => {
  t.unmount();
}), [t]), /* @__PURE__ */ c(r1.Provider, { value: t, children: e }));
function Yd() {
  let t = !1;
  return {
    clearReset: () => {
      t = !1;
    },
    reset: () => {
      t = !0;
    },
    isReset: () => t
  };
}
var Qd = Wt(Yd()), Kd = () => $e(Qd), Xd = (t, e) => {
  (t.suspense || t.throwOnError || t.experimental_prefetchInRender) && (e.isReset() || (t.retryOnMount = !1));
}, Jd = (t) => {
  F(() => {
    t.clearReset();
  }, [t]);
}, $d = ({
  result: t,
  errorResetBoundary: e,
  throwOnError: r,
  query: i,
  suspense: n
}) => t.isError && !e.isReset() && !t.isFetching && i && (n && t.data === void 0 || Q0(r, [t.error, i])), eu = (t) => {
  if (t.suspense) {
    const r = (n) => n === "static" ? n : Math.max(n ?? 1e3, 1e3), i = t.staleTime;
    t.staleTime = typeof i == "function" ? (...n) => r(i(...n)) : r(i), typeof t.gcTime == "number" && (t.gcTime = Math.max(
      t.gcTime,
      1e3
    ));
  }
}, tu = (t, e) => t.isLoading && t.isFetching && !e, ru = (t, e) => t?.suspense && e.isPending, Ms = (t, e, r) => e.fetchOptimistic(t).catch(() => {
  r.clearReset();
});
function n1(t, e) {
  const r = e(), [{ _instance: i }, n] = le({
    _instance: { _value: r, _getSnapshot: e }
  });
  return br(() => {
    i._value = r, i._getSnapshot = e, Sn(i) && n({ _instance: i });
  }, [t, r, e]), F(() => (Sn(i) && n({ _instance: i }), t(() => {
    Sn(i) && n({ _instance: i });
  })), [t]), r;
}
function Sn(t) {
  const e = t._getSnapshot, r = t._value;
  try {
    const i = e();
    return !Object.is(r, i);
  } catch {
    return !0;
  }
}
var Is = {};
function iu(t, e, r) {
  if (Is.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const i = Wd(), n = Kd(), o = i1(), s = o.defaultQueryOptions(t);
  o.getDefaultOptions().queries?._experimental_beforeQuery?.(
    s
  ), Is.NODE_ENV !== "production" && (s.queryFn || console.error(
    `[${s.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`
  )), s._optimisticResults = i ? "isRestoring" : "optimistic", eu(s), Xd(s, n), Jd(n);
  const a = !o.getQueryCache().get(s.queryHash), [l] = le(
    () => new e(
      o,
      s
    )
  ), u = l.getOptimisticResult(s), d = !i && t.subscribed !== !1;
  if (n1(
    dr(
      (p) => {
        const h = d ? l.subscribe(we.batchCalls(p)) : Oe;
        return l.updateResult(), h;
      },
      [l, d]
    ),
    () => l.getCurrentResult()
  ), F(() => {
    l.setOptions(s);
  }, [s, l]), ru(s, u))
    throw Ms(s, l, n);
  if ($d({
    result: u,
    errorResetBoundary: n,
    throwOnError: s.throwOnError,
    query: o.getQueryCache().get(s.queryHash),
    suspense: s.suspense
  }))
    throw u.error;
  return o.getDefaultOptions().queries?._experimental_afterQuery?.(
    s,
    u
  ), s.experimental_prefetchInRender && !$r.isServer() && tu(u, i) && (a ? (
    // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
    Ms(s, l, n)
  ) : (
    // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
    o.getQueryCache().get(s.queryHash)?.promise
  ))?.catch(Oe).finally(() => {
    l.updateResult();
  }), s.notifyOnChangeProps ? u : l.trackResult(u);
}
function nu(t, e) {
  return iu(t, Fd);
}
function ou(t, e) {
  const r = i1(), [i] = le(
    () => new Zd(
      r,
      t
    )
  );
  F(() => {
    i.setOptions(t);
  }, [i, t]);
  const n = n1(
    dr(
      (s) => i.subscribe(we.batchCalls(s)),
      [i]
    ),
    () => i.getCurrentResult()
  ), o = dr(
    (s, a) => {
      i.mutate(s, a).catch(Oe);
    },
    [i]
  );
  if (n.error && Q0(i.options.throwOnError, [n.error]))
    throw n.error;
  return { ...n, mutate: o, mutateAsync: n.mutate };
}
const su = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_PUBLIC_POSTHOG_DEBUG: "true", VITE_PUBLIC_POSTHOG_ENABLED: "false", VITE_PUBLIC_POSTHOG_HOST: "https://us.i.posthog.com", VITE_PUBLIC_POSTHOG_PROJECT_TOKEN: "phc_rkupE6DkPSJl7SntaagI0wq0FCKtg3lVP0UkC95NGYe" }, au = 1e4, Ls = {
  development: {
    TRANSLATE_URL: "https://traducao2-dth.vlibras.gov.br/translate",
    DICTIONARY_URL: "https://dicionario2-dth.vlibras.gov.br/2018.3.1/WEBGL/",
    DICTIONARY_STATIC_URL: "https://dicionario2-dth.vlibras.gov.br/static/BUNDLES/2018.3.1/WEBGL",
    SIGNS_URL: "https://dicionario2-dth.vlibras.gov.br/signs?version=2018.3.1",
    REVIEW_URL: "https://traducao2-dth.vlibras.gov.br/dl/review",
    BUNDLES_URL: "https://dicionario2-dth.vlibras.gov.br/bundles"
  },
  homolog: {
    TRANSLATE_URL: "https://traducao2-dth.vlibras.gov.br/translate",
    DICTIONARY_URL: "https://dicionario2-dth.vlibras.gov.br/2018.3.1/WEBGL/",
    DICTIONARY_STATIC_URL: "https://dicionario2-dth.vlibras.gov.br/static/BUNDLES/2018.3.1/WEBGL",
    SIGNS_URL: "https://dicionario2-dth.vlibras.gov.br/signs?version=2018.3.1",
    REVIEW_URL: "https://traducao2-dth.vlibras.gov.br/dl/review",
    BUNDLES_URL: "https://dicionario2-dth.vlibras.gov.br/bundles"
  },
  production: {
    TRANSLATE_URL: "https://traducao2.vlibras.gov.br/translate",
    DICTIONARY_URL: "https://dicionario2.vlibras.gov.br/2018.3.1/WEBGL/",
    DICTIONARY_STATIC_URL: "https://dicionario2.vlibras.gov.br/static/BUNDLES/2018.3.1/WEBGL",
    SIGNS_URL: "https://dicionario2.vlibras.gov.br/static/TREES/2018.3.1.json",
    REVIEW_URL: "https://traducao2.vlibras.gov.br/review",
    BUNDLES_URL: "https://dicionario2.vlibras.gov.br/bundles"
  }
}, o1 = "production", lu = Ls[o1] || Ls.development, yr = {
  ...su,
  ...lu,
  REQUEST_TIMEOUT: au,
  MODE: o1
}, ur = {
  TRANSLATION_ERROR: "Erro ao traduzir o texto.",
  TRANSLATION_EMPTY_ERROR: "Nenhum dado recebido da servidor.",
  TRANSLATION_TIMEOUT_ERROR: "A tradução demorou muito e foi cancelada.",
  SEND_REVIEW_ERROR: "Não foi possível enviar seu feedback.",
  SEND_REVIEW_TIMEOUT_ERROR: "O envio do feedback demorou muito e foi cancelado.",
  SIGNS_ERROR: "Erro ao buscar os sinais.",
  SIGNS_EMPTY_ERROR: "Nenhum dado recebido do servidor.",
  SIGNS_TIMEOUT_ERROR: "A busca dos sinais demorou muito e foi cancelada.",
  UNKNOWN_ERROR: "Erro desconhecido."
}, s1 = () => {
  const t = new AbortController(), e = setTimeout(() => t.abort(), yr.REQUEST_TIMEOUT);
  return { controller: t, timeoutId: e };
}, cu = async (t) => {
  const { controller: e, timeoutId: r } = s1();
  try {
    const i = await fetch(yr.TRANSLATE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: t }),
      signal: e.signal
    });
    if (!i.ok) throw new Error(`Erro na API: ${i.status}`);
    return { data: await i.text(), success: !0 };
  } catch (i) {
    return console.error("Falha na tradução: ", i), i.name === "AbortError" ? {
      success: !1,
      error: ur.TRANSLATION_TIMEOUT_ERROR,
      code: "TRANSLATION_TIMEOUT_ERROR"
    } : {
      success: !1,
      error: ur.TRANSLATION_ERROR,
      code: "TRANSLATION_ERROR"
    };
  } finally {
    clearTimeout(r);
  }
}, du = async () => {
  const { controller: t, timeoutId: e } = s1();
  try {
    const r = await fetch(yr.SIGNS_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      signal: t.signal
    });
    if (!r.ok) throw new Error(`Erro na API: ${r.status}`);
    return { data: await r.json(), success: !0 };
  } catch (r) {
    return console.error("Falha na tradução: ", r), r.name === "AbortError" ? {
      success: !1,
      error: ur.SIGNS_TIMEOUT_ERROR,
      code: "SIGNS_TIMEOUT_ERROR"
    } : {
      success: !1,
      error: ur.SIGNS_ERROR,
      code: "SIGNS_ERROR"
    };
  } finally {
    clearTimeout(e);
  }
}, uu = () => nu({
  queryKey: ["dictionary_signs"],
  queryFn: async () => {
    const t = await du();
    if (t.error) throw new Error(t.error);
    if (!t.data) throw new Error(ur.SIGNS_EMPTY_ERROR);
    return t.data;
  }
}), C2 = () => ou({
  mutationFn: async (t) => {
    try {
      ze.set({ text: t, isTranslating: !0 });
      const e = await cu(t);
      if (e.error) throw new Error(e.error);
      if (!e.data) throw new Error(ur.TRANSLATION_EMPTY_ERROR);
      return e.data;
    } finally {
      X.set({ gloss: void 0 }), ze.set({ isTranslating: !1 });
    }
  }
}), Ai = et()(
  on((t) => ({ isMaxRetries: !1, retriesCount: 0 }), {
    name: "@vlibras/dictionary",
    version: 1,
    storage: nn(() => sessionStorage),
    partialize: (t) => sn(t, "isMaxRetries"),
    onRehydrateStorage: () => (t) => {
      t && (t.retriesCount = 0, t.isMaxRetries = !1);
    }
  })
), Ns = {
  get: Ai.getState,
  set: Ai.setState,
  subscribe: Ai.subscribe
}, ir = et()(
  on(() => ({ signs: [""] }), {
    name: "@vlibras/dictionary-history",
    version: 1,
    storage: nn(() => localStorage),
    partialize: (t) => t
  })
), a1 = {
  get: ir.getState,
  set: ir.setState,
  subscribe: ir.subscribe
}, Rn = 50, hu = () => {
  const t = Ae(null), e = Ae(null), r = Ae(null), i = Ai(), [n, o] = le("all"), { data: s, isLoading: a, refetch: l } = uu(), { signs: u } = ir(), d = async () => {
    await l();
    const A = i.retriesCount + 1;
    Ns.set({ retriesCount: A }), A >= 5 && Ns.set({ isMaxRetries: !0 });
  }, p = Ve(() => s ? new wd(s).searchSigns("") : [], [s]), [{ filteredSigns: h, visibleCount: f, search: v }, g] = le({
    filteredSigns: [],
    search: "",
    visibleCount: Rn
  }), m = dr(
    (A) => {
      const E = A.toUpperCase().trim(), b = (n === "all" ? p : u).filter((S) => S.toUpperCase().includes(E));
      g((S) => ({
        ...S,
        search: A,
        filteredSigns: b,
        visibleCount: Rn
      })), r.current && r.current.scrollTo({ top: 0, behavior: "smooth" });
    },
    [n, u, p]
  ), w = C0(m, 500), y = () => {
    e.current && (m(""), e.current.value = "", e.current.focus());
  }, x = () => {
    a1.set({ signs: [] }), n === "recents" && (o("all"), g((A) => ({ ...A, filteredSigns: [] })));
  };
  F(() => m(v), [n]), F(() => {
    p.length > 0 && g((A) => ({ ...A, filteredSigns: p }));
  }, [p]), F(() => {
    const A = new IntersectionObserver(
      (E) => {
        E[0].isIntersecting && h.length > f && g((b) => ({ ...b, visibleCount: b.visibleCount + Rn }));
      },
      { threshold: 0.1 }
    );
    return t.current && A.observe(t.current), () => A.disconnect();
  }, [h.length, f]);
  const _ = h.slice(0, f), k = { all: p.length, recents: u.length };
  return {
    search: v,
    isLoading: a,
    filteredSigns: h,
    visibleSigns: _,
    visibleCount: f,
    loaderRef: t,
    listRef: r,
    searchRef: e,
    handleSearchChange: w,
    handleClearSearch: y,
    handleHistoryClear: x,
    data: s,
    retry: d,
    filter: n,
    setFilter: o,
    count: k,
    ...i
  };
}, { Provider: pu, useCtx: w2 } = q0(), gu = ({ children: t }) => {
  const e = hu();
  return /* @__PURE__ */ c(pu, { data: e, children: t });
};
var C = typeof window < "u" ? window : void 0, ke = typeof globalThis < "u" ? globalThis : C;
typeof self > "u" && (ke.self = ke), typeof File > "u" && (ke.File = function() {
});
var je = ke?.navigator, P = ke?.document, ye = ke?.location, xo = ke?.fetch, ko = ke != null && ke.XMLHttpRequest && "withCredentials" in new ke.XMLHttpRequest() ? ke.XMLHttpRequest : void 0, Os = ke?.AbortController, Te = je?.userAgent, T = C ?? {}, Hs = "1.363.6", Ge = { DEBUG: !1, LIB_VERSION: Hs, LIB_NAME: "web", JS_SDK_VERSION: Hs };
function Ts(t, e, r, i, n, o, s) {
  try {
    var a = t[o](s), l = a.value;
  } catch (u) {
    return void r(u);
  }
  a.done ? e(l) : Promise.resolve(l).then(i, n);
}
function pt(t) {
  return function() {
    var e = this, r = arguments;
    return new Promise((function(i, n) {
      var o = t.apply(e, r);
      function s(l) {
        Ts(o, i, n, s, a, "next", l);
      }
      function a(l) {
        Ts(o, i, n, s, a, "throw", l);
      }
      s(void 0);
    }));
  };
}
function R() {
  return R = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; arguments.length > e; e++) {
      var r = arguments[e];
      for (var i in r) ({}).hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, R.apply(null, arguments);
}
function l1(t, e) {
  if (t == null) return {};
  var r = {};
  for (var i in t) if ({}.hasOwnProperty.call(t, i)) {
    if (e.indexOf(i) !== -1) continue;
    r[i] = t[i];
  }
  return r;
}
var fu = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"], vu = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "http://yandex.com/bots", "hubspot", "ia_archiver", "leikibot", "linkedinbot", "meta-externalagent", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "sebot-wa", "sitebulb", "slackbot", "slurp", "trendictionbot", "turnitin", "twitterbot", "vercel-screenshot", "vercelbot", "yahoo! slurp", "yandexbot", "zoombot", "bot.htm", "bot.php", "(bot;", "bot/", "crawler", "ahrefsbot", "ahrefssiteaudit", "semrushbot", "siteauditbot", "splitsignalbot", "gptbot", "oai-searchbot", "chatgpt-user", "perplexitybot", "better uptime bot", "sentryuptimebot", "uptimerobot", "headlesschrome", "cypress", "google-hoteladsverifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleother", "google-cloudvertexbot", "googleweblight", "mediapartners-google", "storebot-google", "google-inspectiontool", "bytespider"], Fs = function(t, e) {
  if (e === void 0 && (e = []), !t) return !1;
  var r = t.toLowerCase();
  return vu.concat(e).some(((i) => {
    var n = i.toLowerCase();
    return r.indexOf(n) !== -1;
  }));
};
function q(t, e) {
  return t.indexOf(e) !== -1;
}
var cn = function(t) {
  return t.trim();
}, Ao = function(t) {
  return t.replace(/^\$/, "");
}, c1 = Object.prototype, d1 = c1.hasOwnProperty, dn = c1.toString, Q = Array.isArray || function(t) {
  return dn.call(t) === "[object Array]";
}, gt = (t) => typeof t == "function", Ce = (t) => t === Object(t) && !Q(t), tr = (t) => {
  if (Ce(t)) {
    for (var e in t) if (d1.call(t, e)) return !1;
    return !0;
  }
  return !1;
}, I = (t) => t === void 0, ve = (t) => dn.call(t) == "[object String]", Eo = (t) => ve(t) && t.trim().length === 0, _t = (t) => t === null, W = (t) => I(t) || _t(t), st = (t) => dn.call(t) == "[object Number]" && t == t, Jt = (t) => st(t) && t > 0, vt = (t) => dn.call(t) === "[object Boolean]", mu = (t) => t instanceof FormData, bu = (t) => q(fu, t);
function u1(t) {
  return t === null || typeof t != "object";
}
function Fi(t, e) {
  return {}.toString.call(t) === "[object " + e + "]";
}
function _2(t) {
  return !I(Event) && (function(e, r) {
    try {
      return e instanceof r;
    } catch {
      return !1;
    }
  })(t, Event);
}
var Cu = [!0, "true", 1, "1", "yes"], Pn = (t) => q(Cu, t), wu = [!1, "false", 0, "0", "no"];
function it(t, e, r, i, n) {
  return e > r && (i.warn("min cannot be greater than max."), e = r), st(t) ? t > r ? (i.warn(" cannot be  greater than max: " + r + ". Using max value instead."), r) : e > t ? (i.warn(" cannot be less than min: " + e + ". Using min value instead."), e) : t : (i.warn(" must be a number. using max or fallback. max: " + r + ", fallback: " + n), it(n || r, e, r, i));
}
class _u {
  constructor(e) {
    this.t = {}, this.i = e.i, this.o = it(e.bucketSize, 0, 100, e.h), this.m = it(e.refillRate, 0, this.o, e.h), this.S = it(e.refillInterval, 0, 864e5, e.h);
  }
  T(e, r) {
    var i = Math.floor((r - e.lastAccess) / this.S);
    i > 0 && (e.tokens = Math.min(e.tokens + i * this.m, this.o), e.lastAccess = e.lastAccess + i * this.S);
  }
  consumeRateLimit(e) {
    var r, i = Date.now(), n = String(e), o = this.t[n];
    return o ? this.T(o, i) : this.t[n] = o = { tokens: this.o, lastAccess: i }, o.tokens === 0 || (o.tokens--, o.tokens === 0 && ((r = this.i) == null || r.call(this, e)), o.tokens === 0);
  }
  stop() {
    this.t = {};
  }
}
var pi, Vs, Mn, Ze = "Mobile", Vi = "iOS", mt = "Android", hr = "Tablet", h1 = mt + " " + hr, p1 = "iPad", g1 = "Apple", f1 = g1 + " Watch", Gr = "Safari", pr = "BlackBerry", v1 = "Samsung", m1 = v1 + "Browser", b1 = v1 + " Internet", Ut = "Chrome", yu = Ut + " OS", C1 = Ut + " " + Vi, y2 = "Internet Explorer", w1 = y2 + " " + Ze, x2 = "Opera", xu = x2 + " Mini", k2 = "Edge", _1 = "Microsoft " + k2, nr = "Firefox", y1 = nr + " " + Vi, ei = "Nintendo", ti = "PlayStation", or = "Xbox", x1 = mt + " " + Ze, k1 = Ze + " " + Gr, Vr = "Windows", So = Vr + " Phone", zs = "Nokia", Ro = "Ouya", A1 = "Generic", ku = A1 + " " + Ze.toLowerCase(), E1 = A1 + " " + hr.toLowerCase(), Po = "Konqueror", Ne = "(\\d+(\\.\\d+)?)", In = new RegExp("Version/" + Ne), Au = new RegExp(or, "i"), Eu = new RegExp(ti + " \\w+", "i"), Su = new RegExp(ei + " \\w+", "i"), A2 = new RegExp(pr + "|PlayBook|BB10", "i"), Ru = { "NT3.51": "NT 3.11", "NT4.0": "NT 4.0", "5.0": "2000", 5.1: "XP", 5.2: "XP", "6.0": "Vista", 6.1: "7", 6.2: "8", 6.3: "8.1", 6.4: "10", "10.0": "10" }, S1 = function(t, e) {
  return e = e || "", q(t, " OPR/") && q(t, "Mini") ? xu : q(t, " OPR/") ? x2 : A2.test(t) ? pr : q(t, "IE" + Ze) || q(t, "WPDesktop") ? w1 : q(t, m1) ? b1 : q(t, k2) || q(t, "Edg/") ? _1 : q(t, "FBIOS") ? "Facebook " + Ze : q(t, "UCWEB") || q(t, "UCBrowser") ? "UC Browser" : q(t, "CriOS") ? C1 : q(t, "CrMo") || q(t, Ut) ? Ut : q(t, mt) && q(t, Gr) ? x1 : q(t, "FxiOS") ? y1 : q(t.toLowerCase(), Po.toLowerCase()) ? Po : ((r, i) => i && q(i, g1) || (function(n) {
    return q(n, Gr) && !q(n, Ut) && !q(n, mt);
  })(r))(t, e) ? q(t, Ze) ? k1 : Gr : q(t, nr) ? nr : q(t, "MSIE") || q(t, "Trident/") ? y2 : q(t, "Gecko") ? nr : "";
}, Pu = { [w1]: [new RegExp("rv:" + Ne)], [_1]: [new RegExp(k2 + "?\\/" + Ne)], [Ut]: [new RegExp("(" + Ut + "|CrMo)\\/" + Ne)], [C1]: [new RegExp("CriOS\\/" + Ne)], "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/" + Ne)], [Gr]: [In], [k1]: [In], [x2]: [new RegExp("(Opera|OPR)\\/" + Ne)], [nr]: [new RegExp(nr + "\\/" + Ne)], [y1]: [new RegExp("FxiOS\\/" + Ne)], [Po]: [new RegExp("Konqueror[:/]?" + Ne, "i")], [pr]: [new RegExp(pr + " " + Ne), In], [x1]: [new RegExp("android\\s" + Ne, "i")], [b1]: [new RegExp(m1 + "\\/" + Ne)], [y2]: [new RegExp("(rv:|MSIE )" + Ne)], Mozilla: [new RegExp("rv:" + Ne)] }, Mu = function(t, e) {
  var r = S1(t, e), i = Pu[r];
  if (I(i)) return null;
  for (var n = 0; i.length > n; n++) {
    var o = t.match(i[n]);
    if (o) return parseFloat(o[o.length - 2]);
  }
  return null;
}, Ds = [[new RegExp(or + "; " + or + " (.*?)[);]", "i"), (t) => [or, t && t[1] || ""]], [new RegExp(ei, "i"), [ei, ""]], [new RegExp(ti, "i"), [ti, ""]], [A2, [pr, ""]], [new RegExp(Vr, "i"), (t, e) => {
  if (/Phone/.test(e) || /WPDesktop/.test(e)) return [So, ""];
  if (new RegExp(Ze).test(e) && !/IEMobile\b/.test(e)) return [Vr + " " + Ze, ""];
  var r = /Windows NT ([0-9.]+)/i.exec(e);
  if (r && r[1]) {
    var i = Ru[r[1]] || "";
    return /arm/i.test(e) && (i = "RT"), [Vr, i];
  }
  return [Vr, ""];
}], [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, (t) => t && t[3] ? [Vi, [t[3], t[4], t[5] || "0"].join(".")] : [Vi, ""]], [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, (t) => {
  var e = "";
  return t && t.length >= 3 && (e = I(t[2]) ? t[3] : t[2]), ["watchOS", e];
}], [new RegExp("(" + mt + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + mt + ")", "i"), (t) => t && t[2] ? [mt, [t[2], t[3], t[4] || "0"].join(".")] : [mt, ""]], [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, (t) => {
  var e = ["Mac OS X", ""];
  return t && t[1] && (e[1] = [t[1], t[2], t[3] || "0"].join(".")), e;
}], [/Mac/i, ["Mac OS X", ""]], [/CrOS/, [yu, ""]], [/Linux|debian/i, ["Linux", ""]]], Us = function(t) {
  return Su.test(t) ? ei : Eu.test(t) ? ti : Au.test(t) ? or : new RegExp(Ro, "i").test(t) ? Ro : new RegExp("(" + So + "|WPDesktop)", "i").test(t) ? So : /iPad/.test(t) ? p1 : /iPod/.test(t) ? "iPod Touch" : /iPhone/.test(t) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(t) ? f1 : A2.test(t) ? pr : /(kobo)\s(ereader|touch)/i.test(t) ? "Kobo" : new RegExp(zs, "i").test(t) ? zs : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(t) || /(kf[a-z]+)( bui|\)).+silk\//i.test(t) ? "Kindle Fire" : /(Android|ZTE)/i.test(t) ? new RegExp(Ze).test(t) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(t) || /pixel[\daxl ]{1,6}/i.test(t) && !/pixel c/i.test(t) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(t) || /lmy47v/i.test(t) && !/QTAQZ3/i.test(t) ? mt : h1 : new RegExp("(pda|" + Ze + ")", "i").test(t) ? ku : new RegExp(hr, "i").test(t) && !new RegExp(hr + " pc", "i").test(t) ? E1 : "";
}, Iu = (t) => t instanceof Error;
function Lu(t) {
  var e = globalThis._posthogChunkIds;
  if (e) {
    var r = Object.keys(e);
    return Mn && r.length === Vs || (Vs = r.length, Mn = r.reduce(((i, n) => {
      pi || (pi = {});
      var o = pi[n];
      if (o) i[o[0]] = o[1];
      else for (var s = t(n), a = s.length - 1; a >= 0; a--) {
        var l = s[a], u = l?.filename, d = e[n];
        if (u && d) {
          i[u] = d, pi[n] = [u, d];
          break;
        }
      }
      return i;
    }), {})), Mn;
  }
}
class Nu {
  constructor(e, r, i) {
    i === void 0 && (i = []), this.coercers = e, this.stackParser = r, this.modifiers = i;
  }
  buildFromUnknown(e, r) {
    r === void 0 && (r = {});
    var i = r && r.mechanism || { handled: !0, type: "generic" }, n = this.buildCoercingContext(i, r, 0).apply(e), o = this.buildParsingContext(r), s = this.parseStacktrace(n, o);
    return { $exception_list: this.convertToExceptionList(s, i), $exception_level: "error" };
  }
  modifyFrames(e) {
    var r = this;
    return pt((function* () {
      for (var i of e) i.stacktrace && i.stacktrace.frames && Q(i.stacktrace.frames) && (i.stacktrace.frames = yield r.applyModifiers(i.stacktrace.frames));
      return e;
    }))();
  }
  coerceFallback(e) {
    var r;
    return { type: "Error", value: "Unknown error", stack: (r = e.syntheticException) == null ? void 0 : r.stack, synthetic: !0 };
  }
  parseStacktrace(e, r) {
    var i, n;
    return e.cause != null && (i = this.parseStacktrace(e.cause, r)), e.stack != "" && e.stack != null && (n = this.applyChunkIds(this.stackParser(e.stack, e.synthetic ? r.skipFirstLines : 0), r.chunkIdMap)), R({}, e, { cause: i, stack: n });
  }
  applyChunkIds(e, r) {
    return e.map(((i) => (i.filename && r && (i.chunk_id = r[i.filename]), i)));
  }
  applyCoercers(e, r) {
    for (var i of this.coercers) if (i.match(e)) return i.coerce(e, r);
    return this.coerceFallback(r);
  }
  applyModifiers(e) {
    var r = this;
    return pt((function* () {
      var i = e;
      for (var n of r.modifiers) i = yield n(i);
      return i;
    }))();
  }
  convertToExceptionList(e, r) {
    var i, n, o, s = { type: e.type, value: e.value, mechanism: { type: (i = r.type) !== null && i !== void 0 ? i : "generic", handled: (n = r.handled) === null || n === void 0 || n, synthetic: (o = e.synthetic) !== null && o !== void 0 && o } };
    e.stack && (s.stacktrace = { type: "raw", frames: e.stack });
    var a = [s];
    return e.cause != null && a.push(...this.convertToExceptionList(e.cause, R({}, r, { handled: !0 }))), a;
  }
  buildParsingContext(e) {
    var r;
    return { chunkIdMap: Lu(this.stackParser), skipFirstLines: (r = e.skipFirstLines) !== null && r !== void 0 ? r : 1 };
  }
  buildCoercingContext(e, r, i) {
    i === void 0 && (i = 0);
    var n = (o, s) => {
      if (4 >= s) {
        var a = this.buildCoercingContext(e, r, s);
        return this.applyCoercers(o, a);
      }
    };
    return R({}, r, { syntheticException: i == 0 ? r.syntheticException : void 0, mechanism: e, apply: (o) => n(o, i), next: (o) => n(o, i + 1) });
  }
}
var gr = "?";
function Mo(t, e, r, i, n) {
  var o = { platform: t, filename: e, function: r === "<anonymous>" ? gr : r, in_app: !0 };
  return I(i) || (o.lineno = i), I(n) || (o.colno = n), o;
}
var R1 = (t, e) => {
  var r = t.indexOf("safari-extension") !== -1, i = t.indexOf("safari-web-extension") !== -1;
  return r || i ? [t.indexOf("@") !== -1 ? t.split("@")[0] : gr, r ? "safari-extension:" + e : "safari-web-extension:" + e] : [t, e];
}, Ou = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, Hu = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, Tu = /\((\S*)(?::(\d+))(?::(\d+))\)/, Fu = (t, e) => {
  var r = Ou.exec(t);
  if (r) {
    var [, i, n, o] = r;
    return Mo(e, i, gr, +n, +o);
  }
  var s = Hu.exec(t);
  if (s) {
    if (s[2] && s[2].indexOf("eval") === 0) {
      var a = Tu.exec(s[2]);
      a && (s[2] = a[1], s[3] = a[2], s[4] = a[3]);
    }
    var [l, u] = R1(s[1] || gr, s[2]);
    return Mo(e, u, l, s[3] ? +s[3] : void 0, s[4] ? +s[4] : void 0);
  }
}, Vu = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, zu = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, Du = (t, e) => {
  var r = Vu.exec(t);
  if (r) {
    if (r[3] && r[3].indexOf(" > eval") > -1) {
      var i = zu.exec(r[3]);
      i && (r[1] = r[1] || "eval", r[3] = i[1], r[4] = i[2], r[5] = "");
    }
    var n = r[3], o = r[1] || gr;
    return [o, n] = R1(o, n), Mo(e, n, o, r[4] ? +r[4] : void 0, r[5] ? +r[5] : void 0);
  }
}, js = /\(error: (.*)\)/;
class Uu {
  match(e) {
    return this.isDOMException(e) || this.isDOMError(e);
  }
  coerce(e, r) {
    var i = ve(e.stack);
    return { type: this.getType(e), value: this.getValue(e), stack: i ? e.stack : void 0, cause: e.cause ? r.next(e.cause) : void 0, synthetic: !1 };
  }
  getType(e) {
    return this.isDOMError(e) ? "DOMError" : "DOMException";
  }
  getValue(e) {
    var r = e.name || (this.isDOMError(e) ? "DOMError" : "DOMException");
    return e.message ? r + ": " + e.message : r;
  }
  isDOMException(e) {
    return Fi(e, "DOMException");
  }
  isDOMError(e) {
    return Fi(e, "DOMError");
  }
}
class ju {
  match(e) {
    return ((r) => r instanceof Error)(e);
  }
  coerce(e, r) {
    return { type: this.getType(e), value: this.getMessage(e, r), stack: this.getStack(e), cause: e.cause ? r.next(e.cause) : void 0, synthetic: !1 };
  }
  getType(e) {
    return e.name || e.constructor.name;
  }
  getMessage(e, r) {
    var i = e.message;
    return String(i.error && typeof i.error.message == "string" ? i.error.message : i);
  }
  getStack(e) {
    return e.stacktrace || e.stack || void 0;
  }
}
class Zu {
  constructor() {
  }
  match(e) {
    return Fi(e, "ErrorEvent") && e.error != null;
  }
  coerce(e, r) {
    var i;
    return r.apply(e.error) || { type: "ErrorEvent", value: e.message, stack: (i = r.syntheticException) == null ? void 0 : i.stack, synthetic: !0 };
  }
}
var Bu = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
class qu {
  match(e) {
    return typeof e == "string";
  }
  coerce(e, r) {
    var i, [n, o] = this.getInfos(e);
    return { type: n ?? "Error", value: o ?? e, stack: (i = r.syntheticException) == null ? void 0 : i.stack, synthetic: !0 };
  }
  getInfos(e) {
    var r = "Error", i = e, n = e.match(Bu);
    return n && (r = n[1], i = n[2]), [r, i];
  }
}
var Wu = ["fatal", "error", "warning", "log", "info", "debug"];
function P1(t, e) {
  e === void 0 && (e = 40);
  var r = Object.keys(t);
  if (r.sort(), !r.length) return "[object has no keys]";
  for (var i = r.length; i > 0; i--) {
    var n = r.slice(0, i).join(", ");
    if (e >= n.length) return i === r.length ? n : n.length > e ? n.slice(0, e) + "..." : n;
  }
  return "";
}
class Gu {
  match(e) {
    return typeof e == "object" && e !== null;
  }
  coerce(e, r) {
    var i, n = this.getErrorPropertyFromObject(e);
    return n ? r.apply(n) : { type: this.getType(e), value: this.getValue(e), stack: (i = r.syntheticException) == null ? void 0 : i.stack, level: this.isSeverityLevel(e.level) ? e.level : "error", synthetic: !0 };
  }
  getType(e) {
    return _2(e) ? e.constructor.name : "Error";
  }
  getValue(e) {
    if ("name" in e && typeof e.name == "string") {
      var r = "'" + e.name + "' captured as exception";
      return "message" in e && typeof e.message == "string" && (r += " with message: '" + e.message + "'"), r;
    }
    if ("message" in e && typeof e.message == "string") return e.message;
    var i = this.getObjectClassName(e);
    return (i && i !== "Object" ? "'" + i + "'" : "Object") + " captured as exception with keys: " + P1(e);
  }
  isSeverityLevel(e) {
    return ve(e) && !Eo(e) && Wu.indexOf(e) >= 0;
  }
  getErrorPropertyFromObject(e) {
    for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
      var i = e[r];
      if (Iu(i)) return i;
    }
  }
  getObjectClassName(e) {
    try {
      var r = Object.getPrototypeOf(e);
      return r ? r.constructor.name : void 0;
    } catch {
      return;
    }
  }
}
class Yu {
  match(e) {
    return _2(e);
  }
  coerce(e, r) {
    var i, n = e.constructor.name;
    return { type: n, value: n + " captured as exception with keys: " + P1(e), stack: (i = r.syntheticException) == null ? void 0 : i.stack, synthetic: !0 };
  }
}
class Qu {
  match(e) {
    return u1(e);
  }
  coerce(e, r) {
    var i;
    return { type: "Error", value: "Primitive value captured as exception: " + String(e), stack: (i = r.syntheticException) == null ? void 0 : i.stack, synthetic: !0 };
  }
}
class Ku {
  match(e) {
    return Fi(e, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(e);
  }
  isCustomEventWrappingRejection(e) {
    if (!_2(e)) return !1;
    try {
      var r = e.detail;
      return r != null && typeof r == "object" && "reason" in r;
    } catch {
      return !1;
    }
  }
  coerce(e, r) {
    var i, n = this.getUnhandledRejectionReason(e);
    return u1(n) ? { type: "UnhandledRejection", value: "Non-Error promise rejection captured with value: " + String(n), stack: (i = r.syntheticException) == null ? void 0 : i.stack, synthetic: !0 } : r.apply(n);
  }
  getUnhandledRejectionReason(e) {
    try {
      if ("reason" in e) return e.reason;
      if ("detail" in e && e.detail != null && typeof e.detail == "object" && "reason" in e.detail) return e.detail.reason;
    } catch {
    }
    return e;
  }
}
var M1 = function(t, e) {
  var { debugEnabled: r } = e === void 0 ? {} : e, i = { $(n) {
    if (C && (Ge.DEBUG || T.POSTHOG_DEBUG || r) && !I(C.console) && C.console) {
      for (var o = ("__rrweb_original__" in C.console[n]) ? C.console[n].__rrweb_original__ : C.console[n], s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), l = 1; s > l; l++) a[l - 1] = arguments[l];
      o(t, ...a);
    }
  }, info() {
    for (var n = arguments.length, o = new Array(n), s = 0; n > s; s++) o[s] = arguments[s];
    i.$("log", ...o);
  }, warn() {
    for (var n = arguments.length, o = new Array(n), s = 0; n > s; s++) o[s] = arguments[s];
    i.$("warn", ...o);
  }, error() {
    for (var n = arguments.length, o = new Array(n), s = 0; n > s; s++) o[s] = arguments[s];
    i.$("error", ...o);
  }, critical() {
    for (var n = arguments.length, o = new Array(n), s = 0; n > s; s++) o[s] = arguments[s];
    console.error(t, ...o);
  }, uninitializedWarning(n) {
    i.error("You must initialize PostHog before calling " + n);
  }, createLogger: (n, o) => M1(t + " " + n, o) };
  return i;
}, M = M1("[PostHog.js]"), de = M.createLogger, Xu = de("[ExternalScriptsLoader]"), Zs = (t, e, r) => {
  if (t.config.disable_external_dependency_loading) return Xu.warn(e + " was requested but loading of external scripts is disabled."), r("Loading of external scripts is disabled");
  var i = P?.querySelectorAll("script");
  if (i) {
    for (var n, o = function() {
      if (i[s].src === e) {
        var l = i[s];
        return l.__posthog_loading_callback_fired ? { v: r() } : (l.addEventListener("load", ((u) => {
          l.__posthog_loading_callback_fired = !0, r(void 0, u);
        })), l.onerror = (u) => r(u), { v: void 0 });
      }
    }, s = 0; i.length > s; s++) if (n = o()) return n.v;
  }
  var a = () => {
    if (!P) return r("document not found");
    var l = P.createElement("script");
    if (l.type = "text/javascript", l.crossOrigin = "anonymous", l.src = e, l.onload = (p) => {
      l.__posthog_loading_callback_fired = !0, r(void 0, p);
    }, l.onerror = (p) => r(p), t.config.prepare_external_dependency_script && (l = t.config.prepare_external_dependency_script(l)), !l) return r("prepare_external_dependency_script returned null");
    if (t.config.external_scripts_inject_target === "head") P.head.appendChild(l);
    else {
      var u, d = P.querySelectorAll("body > script");
      d.length > 0 ? (u = d[0].parentNode) == null || u.insertBefore(l, d[0]) : P.body.appendChild(l);
    }
  };
  P != null && P.body ? a() : P?.addEventListener("DOMContentLoaded", a);
};
T.__PosthogExtensions__ = T.__PosthogExtensions__ || {}, T.__PosthogExtensions__.loadExternalDependency = (t, e, r) => {
  var i = "/static/" + e + ".js?v=" + t.version;
  if (e === "remote-config" && (i = "/array/" + t.config.token + "/config.js"), e === "toolbar") {
    var n = 3e5;
    i = i + "&t=" + Math.floor(Date.now() / n) * n;
  }
  var o = t.requestRouter.endpointFor("assets", i);
  Zs(t, o, r);
}, T.__PosthogExtensions__.loadSiteApp = (t, e, r) => {
  var i = t.requestRouter.endpointFor("api", e);
  Zs(t, i, r);
};
var I1 = "$people_distinct_id", zi = "$device_id", zr = "__alias", Dr = "__timers", Bs = "$autocapture_disabled_server_side", Io = "$heatmaps_enabled_server_side", qs = "$exception_capture_enabled_server_side", Lo = "$error_tracking_suppression_rules", Ws = "$error_tracking_capture_extension_exceptions", Gs = "$web_vitals_enabled_server_side", L1 = "$dead_clicks_enabled_server_side", Ys = "$product_tours_enabled_server_side", Qs = "$web_vitals_allowed_metrics", gi = "$session_recording_remote_config", Di = "$sesid", N1 = "$session_is_sampled", rr = "$enabled_feature_flags", Ur = "$early_access_features", No = "$feature_flag_details", jr = "$stored_person_properties", Vt = "$stored_group_properties", Oo = "$surveys", Yr = "$flag_call_reported", Ho = "$flag_call_reported_session_id", To = "$feature_flag_errors", Ui = "$feature_flag_evaluated_at", Ke = "$user_state", Fo = "$client_session_props", Vo = "$capture_rate_limit", zo = "$initial_campaign_params", Do = "$initial_referrer_info", ji = "$initial_person_info", Zi = "$epp", O1 = "__POSTHOG_TOOLBAR__", Sr = "$posthog_cookieless", Ju = [I1, zr, "__cmpns", Dr, "$session_recording_enabled_server_side", Io, Di, rr, Lo, Ke, Ur, No, Vt, jr, Oo, Yr, Ho, To, Ui, Fo, Vo, zo, Do, Zi, ji], E2 = "PostHog loadExternalDependency extension not found.", ht = "on_reject", Xe = "always", Yt = "anonymous", Qt = "identified", Uo = "identified_only", Bi = "visibilitychange", qi = "beforeunload", $t = "$pageview", Ln = "$pageleave", Nn = "$identify", Ks = "$groupidentify";
function fi(t, e) {
  Q(t) && t.forEach(e);
}
function re(t, e) {
  if (!W(t)) if (Q(t)) t.forEach(e);
  else if (mu(t)) t.forEach(((i, n) => e(i, n)));
  else for (var r in t) d1.call(t, r) && e(t[r], r);
}
var pe = function(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; e > i; i++) r[i - 1] = arguments[i];
  for (var n of r) for (var o in n) n[o] !== void 0 && (t[o] = n[o]);
  return t;
};
function Ei(t) {
  for (var e = Object.keys(t), r = e.length, i = new Array(r); r--; ) i[r] = [e[r], t[e[r]]];
  return i;
}
var Xs = function(t) {
  try {
    return t();
  } catch {
    return;
  }
}, $u = function(t) {
  return function() {
    try {
      for (var e = arguments.length, r = new Array(e), i = 0; e > i; i++) r[i] = arguments[i];
      return t.apply(this, r);
    } catch (n) {
      M.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), M.critical(n);
    }
  };
}, S2 = function(t) {
  var e = {};
  return re(t, (function(r, i) {
    (ve(r) && r.length > 0 || st(r)) && (e[i] = r);
  })), e;
}, e5 = ["herokuapp.com", "vercel.app", "netlify.app"];
function t5(t) {
  var e = t?.hostname;
  if (!ve(e)) return !1;
  var r = e.split(".").slice(-2).join(".");
  for (var i of e5) if (r === i) return !1;
  return !0;
}
function fe(t, e, r, i) {
  var { capture: n = !1, passive: o = !0 } = i ?? {};
  t?.addEventListener(e, r, { capture: n, passive: o });
}
function H1(t) {
  return t.name === "ph_toolbar_internal";
}
Math.trunc || (Math.trunc = function(t) {
  return 0 > t ? Math.ceil(t) : Math.floor(t);
}), Number.isInteger || (Number.isInteger = function(t) {
  return st(t) && isFinite(t) && Math.floor(t) === t;
});
class Wi {
  constructor(e) {
    if (this.bytes = e, e.length !== 16) throw new TypeError("not 128-bit length");
  }
  static fromFieldsV7(e, r, i, n) {
    if (!Number.isInteger(e) || !Number.isInteger(r) || !Number.isInteger(i) || !Number.isInteger(n) || 0 > e || 0 > r || 0 > i || 0 > n || e > 281474976710655 || r > 4095 || i > 1073741823 || n > 4294967295) throw new RangeError("invalid field value");
    var o = new Uint8Array(16);
    return o[0] = e / Math.pow(2, 40), o[1] = e / Math.pow(2, 32), o[2] = e / Math.pow(2, 24), o[3] = e / Math.pow(2, 16), o[4] = e / Math.pow(2, 8), o[5] = e, o[6] = 112 | r >>> 8, o[7] = r, o[8] = 128 | i >>> 24, o[9] = i >>> 16, o[10] = i >>> 8, o[11] = i, o[12] = n >>> 24, o[13] = n >>> 16, o[14] = n >>> 8, o[15] = n, new Wi(o);
  }
  toString() {
    for (var e = "", r = 0; this.bytes.length > r; r++) e = e + (this.bytes[r] >>> 4).toString(16) + (15 & this.bytes[r]).toString(16), r !== 3 && r !== 5 && r !== 7 && r !== 9 || (e += "-");
    if (e.length !== 36) throw new Error("Invalid UUIDv7 was generated");
    return e;
  }
  clone() {
    return new Wi(this.bytes.slice(0));
  }
  equals(e) {
    return this.compareTo(e) === 0;
  }
  compareTo(e) {
    for (var r = 0; 16 > r; r++) {
      var i = this.bytes[r] - e.bytes[r];
      if (i !== 0) return Math.sign(i);
    }
    return 0;
  }
}
class r5 {
  constructor() {
    this.k = 0, this.R = 0, this.P = new i5();
  }
  generate() {
    var e = this.generateOrAbort();
    if (I(e)) {
      this.k = 0;
      var r = this.generateOrAbort();
      if (I(r)) throw new Error("Could not generate UUID after timestamp reset");
      return r;
    }
    return e;
  }
  generateOrAbort() {
    var e = Date.now();
    if (e > this.k) this.k = e, this.O();
    else {
      if (this.k >= e + 1e4) return;
      this.R++, this.R > 4398046511103 && (this.k++, this.O());
    }
    return Wi.fromFieldsV7(this.k, Math.trunc(this.R / Math.pow(2, 30)), this.R & Math.pow(2, 30) - 1, this.P.nextUint32());
  }
  O() {
    this.R = 1024 * this.P.nextUint32() + (1023 & this.P.nextUint32());
  }
}
var Js, T1 = (t) => {
  if (typeof UUIDV7_DENY_WEAK_RNG < "u" && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
  for (var e = 0; t.length > e; e++) t[e] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
  return t;
};
C && !I(C.crypto) && crypto.getRandomValues && (T1 = (t) => crypto.getRandomValues(t));
class i5 {
  constructor() {
    this.I = new Uint32Array(8), this.C = 1 / 0;
  }
  nextUint32() {
    return this.I.length > this.C || (T1(this.I), this.C = 0), this.I[this.C++];
  }
}
var Pt = () => n5().toString(), n5 = () => (Js || (Js = new r5())).generate(), Rr = "", o5 = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i, tt = { F: () => !!P, A(t) {
  M.error("cookieStore error: " + t);
}, M(t) {
  if (P) {
    try {
      for (var e = t + "=", r = P.cookie.split(";").filter(((o) => o.length)), i = 0; r.length > i; i++) {
        for (var n = r[i]; n.charAt(0) == " "; ) n = n.substring(1, n.length);
        if (n.indexOf(e) === 0) return decodeURIComponent(n.substring(e.length, n.length));
      }
    } catch {
    }
    return null;
  }
}, D(t) {
  var e;
  try {
    e = JSON.parse(tt.M(t)) || {};
  } catch {
  }
  return e;
}, L(t, e, r, i, n) {
  if (P) try {
    var o = "", s = "", a = (function(d, p) {
      if (p) {
        var h = (function(v, g) {
          if (g === void 0 && (g = P), Rr) return Rr;
          if (!g || ["localhost", "127.0.0.1"].includes(v)) return "";
          for (var m = v.split("."), w = Math.min(m.length, 8), y = "dmn_chk_" + Pt(); !Rr && w--; ) {
            var x = m.slice(w).join("."), _ = y + "=1;domain=." + x + ";path=/";
            g.cookie = _ + ";max-age=3", g.cookie.includes(y) && (g.cookie = _ + ";max-age=0", Rr = x);
          }
          return Rr;
        })(d);
        if (!h) {
          var f = ((v) => {
            var g = v.match(o5);
            return g ? g[0] : "";
          })(d);
          f !== h && M.info("Warning: cookie subdomain discovery mismatch", f, h), h = f;
        }
        return h ? "; domain=." + h : "";
      }
      return "";
    })(P.location.hostname, i);
    if (r) {
      var l = /* @__PURE__ */ new Date();
      l.setTime(l.getTime() + 864e5 * r), o = "; expires=" + l.toUTCString();
    }
    n && (s = "; secure");
    var u = t + "=" + encodeURIComponent(JSON.stringify(e)) + o + "; SameSite=Lax; path=/" + a + s;
    return u.length > 3686.4 && M.warn("cookieStore warning: large cookie, len=" + u.length), P.cookie = u, u;
  } catch {
    return;
  }
}, U(t, e) {
  if (P != null && P.cookie) try {
    tt.L(t, "", -1, e);
  } catch {
    return;
  }
} }, On = null, ae = { F() {
  if (!_t(On)) return On;
  var t = !0;
  if (I(C)) t = !1;
  else try {
    var e = "__mplssupport__";
    ae.L(e, "xyz"), ae.M(e) !== '"xyz"' && (t = !1), ae.U(e);
  } catch {
    t = !1;
  }
  return t || M.error("localStorage unsupported; falling back to cookie store"), On = t, t;
}, A(t) {
  M.error("localStorage error: " + t);
}, M(t) {
  try {
    return C?.localStorage.getItem(t);
  } catch (e) {
    ae.A(e);
  }
  return null;
}, D(t) {
  try {
    return JSON.parse(ae.M(t)) || {};
  } catch {
  }
  return null;
}, L(t, e) {
  try {
    C?.localStorage.setItem(t, JSON.stringify(e));
  } catch (r) {
    ae.A(r);
  }
}, U(t) {
  try {
    C?.localStorage.removeItem(t);
  } catch (e) {
    ae.A(e);
  }
} }, s5 = [zi, "distinct_id", Di, N1, Zi, ji, Ke], vi = {}, a5 = { F: () => !0, A(t) {
  M.error("memoryStorage error: " + t);
}, M: (t) => vi[t] || null, D: (t) => vi[t] || null, L(t, e) {
  vi[t] = e;
}, U(t) {
  delete vi[t];
} }, Ht = null, xe = { F() {
  if (!_t(Ht)) return Ht;
  if (Ht = !0, I(C)) Ht = !1;
  else try {
    var t = "__support__";
    xe.L(t, "xyz"), xe.M(t) !== '"xyz"' && (Ht = !1), xe.U(t);
  } catch {
    Ht = !1;
  }
  return Ht;
}, A(t) {
  M.error("sessionStorage error: ", t);
}, M(t) {
  try {
    return C?.sessionStorage.getItem(t);
  } catch (e) {
    xe.A(e);
  }
  return null;
}, D(t) {
  try {
    return JSON.parse(xe.M(t)) || null;
  } catch {
  }
  return null;
}, L(t, e) {
  try {
    C?.sessionStorage.setItem(t, JSON.stringify(e));
  } catch (r) {
    xe.A(r);
  }
}, U(t) {
  try {
    C?.sessionStorage.removeItem(t);
  } catch (e) {
    xe.A(e);
  }
} };
class l5 {
  constructor(e) {
    this._instance = e;
  }
  get N() {
    return this._instance.config;
  }
  get consent() {
    return this.j() ? 0 : this.B;
  }
  isOptedOut() {
    return this.N.cookieless_mode === Xe || this.consent === 0 || this.consent === -1 && (this.N.opt_out_capturing_by_default || this.N.cookieless_mode === ht);
  }
  isOptedIn() {
    return !this.isOptedOut();
  }
  isExplicitlyOptedOut() {
    return this.consent === 0;
  }
  optInOut(e) {
    this.H.L(this.q, e ? 1 : 0, this.N.cookie_expiration, this.N.cross_subdomain_cookie, this.N.secure_cookie);
  }
  reset() {
    this.H.U(this.q, this.N.cross_subdomain_cookie);
  }
  get q() {
    var { token: e, opt_out_capturing_cookie_prefix: r, consent_persistence_name: i } = this._instance.config;
    return i || (r ? r + e : "__ph_opt_in_out_" + e);
  }
  get B() {
    var e = this.H.M(this.q);
    return Pn(e) ? 1 : q(wu, e) ? 0 : -1;
  }
  get H() {
    if (!this.W) {
      var e = this.N.opt_out_capturing_persistence_type;
      this.W = e === "localStorage" ? ae : tt;
      var r = e === "localStorage" ? tt : ae;
      r.M(this.q) && (this.W.M(this.q) || this.optInOut(Pn(r.M(this.q))), r.U(this.q, this.N.cross_subdomain_cookie));
    }
    return this.W;
  }
  j() {
    return !!this.N.respect_dnt && [je?.doNotTrack, je?.msDoNotTrack, T.doNotTrack].some(((e) => Pn(e)));
  }
}
var mi = de("[Dead Clicks]"), c5 = () => !0, d5 = (t) => {
  var e, r = !((e = t.instance.persistence) == null || !e.get_property(L1)), i = t.instance.config.capture_dead_clicks;
  return vt(i) ? i : !!Ce(i) || r;
};
class $s {
  get lazyLoadedDeadClicksAutocapture() {
    return this.V;
  }
  constructor(e, r, i) {
    this.instance = e, this.isEnabled = r, this.onCapture = i, this.startIfEnabledOrStop();
  }
  onRemoteConfig(e) {
    "captureDeadClicks" in e && (this.instance.persistence && this.instance.persistence.register({ [L1]: e.captureDeadClicks }), this.startIfEnabledOrStop());
  }
  startIfEnabledOrStop() {
    this.isEnabled(this) ? this.Y((() => {
      this.G();
    })) : this.stop();
  }
  Y(e) {
    var r, i;
    (r = T.__PosthogExtensions__) != null && r.initDeadClicksAutocapture && e(), (i = T.__PosthogExtensions__) == null || i.loadExternalDependency == null || i.loadExternalDependency(this.instance, "dead-clicks-autocapture", ((n) => {
      n ? mi.error("failed to load script", n) : e();
    }));
  }
  G() {
    var e;
    if (P) {
      if (!this.V && (e = T.__PosthogExtensions__) != null && e.initDeadClicksAutocapture) {
        var r = Ce(this.instance.config.capture_dead_clicks) ? this.instance.config.capture_dead_clicks : {};
        r.__onCapture = this.onCapture, this.V = T.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, r), this.V.start(P), mi.info("starting...");
      }
    } else mi.error("`document` not found. Cannot start.");
  }
  stop() {
    this.V && (this.V.stop(), this.V = void 0, mi.info("stopping..."));
  }
}
var Hn = de("[SegmentIntegration]"), F1 = "posthog-js";
function V1(t, e) {
  var { organization: r, projectId: i, prefix: n, severityAllowList: o = ["error"], sendExceptionsToPostHog: s = !0 } = e === void 0 ? {} : e;
  return (a) => {
    var l, u, d, p, h;
    if (o !== "*" && !o.includes(a.level) || !t.__loaded) return a;
    a.tags || (a.tags = {});
    var f = t.requestRouter.endpointFor("ui", "/project/" + t.config.token + "/person/" + t.get_distinct_id());
    a.tags["PostHog Person URL"] = f, t.sessionRecordingStarted() && (a.tags["PostHog Recording URL"] = t.get_session_replay_url({ withTimestamp: !0 }));
    var v, g = ((l = a.exception) == null ? void 0 : l.values) || [], m = g.map(((y) => R({}, y, { stacktrace: y.stacktrace ? R({}, y.stacktrace, { type: "raw", frames: (y.stacktrace.frames || []).map(((x) => R({}, x, { platform: "web:javascript" }))) }) : void 0 }))), w = { $exception_message: ((u = g[0]) == null ? void 0 : u.value) || a.message, $exception_type: (d = g[0]) == null ? void 0 : d.type, $exception_level: a.level, $exception_list: m, $sentry_event_id: a.event_id, $sentry_exception: a.exception, $sentry_exception_message: ((p = g[0]) == null ? void 0 : p.value) || a.message, $sentry_exception_type: (h = g[0]) == null ? void 0 : h.type, $sentry_tags: a.tags };
    return r && i && (w.$sentry_url = (n || "https://sentry.io/organizations/") + r + "/issues/?project=" + i + "&query=" + a.event_id), s && ((v = t.exceptions) == null || v.sendExceptionEvent(w)), a;
  };
}
class u5 {
  constructor(e, r, i, n, o, s) {
    this.name = F1, this.setupOnce = function(a) {
      a(V1(e, { organization: r, projectId: i, prefix: n, severityAllowList: o, sendExceptionsToPostHog: s == null || s }));
    };
  }
}
class ea {
  constructor(e) {
    this.J = (r, i, n) => {
      n && (n.noSessionId || n.activityTimeout || n.sessionPastMaximumLength) && (M.info("[PageViewManager] Session rotated, clearing pageview state", { sessionId: r, changeReason: n }), this.K = void 0, this._instance.scrollManager.resetContext());
    }, this._instance = e, this.X();
  }
  X() {
    var e;
    this.Z = (e = this._instance.sessionManager) == null ? void 0 : e.onSessionId(this.J);
  }
  destroy() {
    var e;
    (e = this.Z) == null || e.call(this), this.Z = void 0;
  }
  doPageView(e, r) {
    var i, n = this.tt(e, r);
    return this.K = { pathname: (i = C?.location.pathname) !== null && i !== void 0 ? i : "", pageViewId: r, timestamp: e }, this._instance.scrollManager.resetContext(), n;
  }
  doPageLeave(e) {
    var r;
    return this.tt(e, (r = this.K) == null ? void 0 : r.pageViewId);
  }
  doEvent() {
    var e;
    return { $pageview_id: (e = this.K) == null ? void 0 : e.pageViewId };
  }
  tt(e, r) {
    var i = this.K;
    if (!i) return { $pageview_id: r };
    var n = { $pageview_id: r, $prev_pageview_id: i.pageViewId }, o = this._instance.scrollManager.getContext();
    if (o && !this._instance.config.disable_scroll_properties) {
      var { maxScrollHeight: s, lastScrollY: a, maxScrollY: l, maxContentHeight: u, lastContentY: d, maxContentY: p } = o;
      if (!(I(s) || I(a) || I(l) || I(u) || I(d) || I(p))) {
        s = Math.ceil(s), a = Math.ceil(a), l = Math.ceil(l), u = Math.ceil(u), d = Math.ceil(d), p = Math.ceil(p);
        var h = s > 1 ? it(a / s, 0, 1, M) : 1, f = s > 1 ? it(l / s, 0, 1, M) : 1, v = u > 1 ? it(d / u, 0, 1, M) : 1, g = u > 1 ? it(p / u, 0, 1, M) : 1;
        n = pe(n, { $prev_pageview_last_scroll: a, $prev_pageview_last_scroll_percentage: h, $prev_pageview_max_scroll: l, $prev_pageview_max_scroll_percentage: f, $prev_pageview_last_content: d, $prev_pageview_last_content_percentage: v, $prev_pageview_max_content: p, $prev_pageview_max_content_percentage: g });
      }
    }
    return i.pathname && (n.$prev_pageview_pathname = i.pathname), i.timestamp && (n.$prev_pageview_duration = (e.getTime() - i.timestamp.getTime()) / 1e3), n;
  }
}
var Gi = (t) => {
  var e = P?.createElement("a");
  return I(e) ? null : (e.href = t, e);
}, Yi = function(t, e) {
  for (var r, i = ((t.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&"), n = 0; i.length > n; n++) {
    var o = i[n].split("=");
    if (o[0] === e) {
      r = o;
      break;
    }
  }
  if (!Q(r) || 2 > r.length) return "";
  var s = r[1];
  try {
    s = decodeURIComponent(s);
  } catch {
    M.error("Skipping decoding for malformed query param: " + s);
  }
  return s.replace(/\+/g, " ");
}, ri = function(t, e, r) {
  if (!t || !e || !e.length) return t;
  for (var i = t.split("#"), n = i[1], o = (i[0] || "").split("?"), s = o[1], a = o[0], l = (s || "").split("&"), u = [], d = 0; l.length > d; d++) {
    var p = l[d].split("=");
    Q(p) && (e.includes(p[0]) ? u.push(p[0] + "=" + r) : u.push(l[d]));
  }
  var h = a;
  return s != null && (h += "?" + u.join("&")), n != null && (h += "#" + n), h;
}, Qi = function(t, e) {
  var r = t.match(new RegExp(e + "=([^&]*)"));
  return r ? r[1] : null;
}, bi = "https?://(.*)", fr = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "irclid", "_kx"], h5 = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", ...fr], ii = "<masked>", p5 = ["li_fat_id"];
function z1(t, e, r) {
  if (!P) return {};
  var i, n = e ? [...fr, ...r || []] : [], o = D1(ri(P.URL, n, ii), t), s = (i = {}, re(p5, (function(a) {
    var l = tt.M(a);
    i[a] = l || null;
  })), i);
  return pe(s, o);
}
function D1(t, e) {
  var r = h5.concat(e || []), i = {};
  return re(r, (function(n) {
    var o = Yi(t, n);
    i[n] = o || null;
  })), i;
}
function U1(t) {
  var e = (function(o) {
    return o ? o.search(bi + "google.([^/?]*)") === 0 ? "google" : o.search(bi + "bing.com") === 0 ? "bing" : o.search(bi + "yahoo.com") === 0 ? "yahoo" : o.search(bi + "duckduckgo.com") === 0 ? "duckduckgo" : null : null;
  })(t), r = e != "yahoo" ? "q" : "p", i = {};
  if (!_t(e)) {
    i.$search_engine = e;
    var n = P ? Yi(P.referrer, r) : "";
    n.length && (i.ph_keyword = n);
  }
  return i;
}
function ta() {
  return navigator.language || navigator.userLanguage;
}
var Ki = "$direct";
function j1() {
  return P?.referrer || Ki;
}
function Z1(t, e) {
  var r = t ? [...fr, ...e || []] : [], i = ye?.href.substring(0, 1e3);
  return { r: j1().substring(0, 1e3), u: i ? ri(i, r, ii) : void 0 };
}
function B1(t) {
  var e, { r, u: i } = t, n = { $referrer: r, $referring_domain: r == null ? void 0 : r == Ki ? Ki : (e = Gi(r)) == null ? void 0 : e.host };
  if (i) {
    n.$current_url = i;
    var o = Gi(i);
    n.$host = o?.host, n.$pathname = o?.pathname;
    var s = D1(i);
    pe(n, s);
  }
  if (r) {
    var a = U1(r);
    pe(n, a);
  }
  return n;
}
function q1() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return;
  }
}
function g5() {
  try {
    return (/* @__PURE__ */ new Date()).getTimezoneOffset();
  } catch {
    return;
  }
}
var f5 = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"];
class Tn {
  constructor(e, r) {
    this.N = e, this.props = {}, this.it = !1, this.et = ((i) => {
      var n = "";
      return i.token && (n = i.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), i.persistence_name ? "ph_" + i.persistence_name : "ph_" + n + "_posthog";
    })(e), this.H = this.rt(e), this.load(), e.debug && M.info("Persistence loaded", e.persistence, R({}, this.props)), this.update_config(e, e, r), this.save();
  }
  isDisabled() {
    return !!this.st;
  }
  rt(e) {
    f5.indexOf(e.persistence.toLowerCase()) === -1 && (M.critical("Unknown persistence type " + e.persistence + "; falling back to localStorage+cookie"), e.persistence = "localStorage+cookie");
    var r = (function(n) {
      n === void 0 && (n = []);
      var o = [...s5, ...n];
      return R({}, ae, { D(s) {
        try {
          var a = {};
          try {
            a = tt.D(s) || {};
          } catch {
          }
          var l = pe(a, JSON.parse(ae.M(s) || "{}"));
          return ae.L(s, l), l;
        } catch {
        }
        return null;
      }, L(s, a, l, u, d, p) {
        try {
          ae.L(s, a, void 0, void 0, p);
          var h = {};
          o.forEach(((f) => {
            a[f] && (h[f] = a[f]);
          })), Object.keys(h).length && tt.L(s, h, l, u, d, p);
        } catch (f) {
          ae.A(f);
        }
      }, U(s, a) {
        try {
          C?.localStorage.removeItem(s), tt.U(s, a);
        } catch (l) {
          ae.A(l);
        }
      } });
    })(e.cookie_persisted_properties || []), i = e.persistence.toLowerCase();
    return i === "localstorage" && ae.F() ? ae : i === "localstorage+cookie" && r.F() ? r : i === "sessionstorage" && xe.F() ? xe : i === "memory" ? a5 : i === "cookie" ? tt : r.F() ? r : tt;
  }
  nt(e) {
    var r = e ?? this.N.feature_flag_cache_ttl_ms;
    if (!r || 0 >= r) return !1;
    var i = this.props[Ui];
    return !i || typeof i != "number" || Date.now() - i > r;
  }
  properties() {
    var e = {};
    return re(this.props, ((r, i) => {
      if (i === rr && Ce(r)) {
        if (!this.nt()) for (var n = Object.keys(r), o = 0; n.length > o; o++) e["$feature/" + n[o]] = r[n[o]];
      } else Ju.indexOf(i) === -1 && (e[i] = r);
    })), e;
  }
  load() {
    if (!this.st) {
      var e = this.H.D(this.et);
      e && (this.props = pe({}, e));
    }
  }
  save() {
    this.st || this.H.L(this.et, this.props, this.ot, this.ut, this.ht, this.N.debug);
  }
  remove() {
    this.H.U(this.et, !1), this.H.U(this.et, !0);
  }
  clear() {
    this.remove(), this.props = {};
  }
  register_once(e, r, i) {
    if (Ce(e)) {
      I(r) && (r = "None"), this.ot = I(i) ? this.dt : i;
      var n = !1;
      if (re(e, ((o, s) => {
        this.props.hasOwnProperty(s) && this.props[s] !== r || (this.props[s] = o, n = !0);
      })), n) return this.save(), !0;
    }
    return !1;
  }
  register(e, r) {
    if (Ce(e)) {
      this.ot = I(r) ? this.dt : r;
      var i = !1;
      if (re(e, ((n, o) => {
        e.hasOwnProperty(o) && this.props[o] !== n && (this.props[o] = n, i = !0);
      })), i) return this.save(), !0;
    }
    return !1;
  }
  unregister(e) {
    e in this.props && (delete this.props[e], this.save());
  }
  update_campaign_params() {
    if (!this.it) {
      var e = z1(this.N.custom_campaign_params, this.N.mask_personal_data_properties, this.N.custom_personal_data_properties);
      tr(S2(e)) || this.register(e), this.it = !0;
    }
  }
  update_search_keyword() {
    var e;
    this.register((e = P?.referrer) ? U1(e) : {});
  }
  update_referrer_info() {
    var e;
    this.register_once({ $referrer: j1(), $referring_domain: P != null && P.referrer && ((e = Gi(P.referrer)) == null ? void 0 : e.host) || Ki }, void 0);
  }
  set_initial_person_info() {
    this.props[zo] || this.props[Do] || this.register_once({ [ji]: Z1(this.N.mask_personal_data_properties, this.N.custom_personal_data_properties) }, void 0);
  }
  get_initial_props() {
    var e = {};
    re([Do, zo], ((s) => {
      var a = this.props[s];
      a && re(a, (function(l, u) {
        e["$initial_" + Ao(u)] = l;
      }));
    }));
    var r, i, n = this.props[ji];
    if (n) {
      var o = (r = B1(n), i = {}, re(r, (function(s, a) {
        i["$initial_" + Ao(a)] = s;
      })), i);
      pe(e, o);
    }
    return e;
  }
  safe_merge(e) {
    return re(this.props, (function(r, i) {
      i in e || (e[i] = r);
    })), e;
  }
  update_config(e, r, i) {
    if (this.dt = this.ot = e.cookie_expiration, this.set_disabled(e.disable_persistence || !!i), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie), e.persistence !== r.persistence || !((s, a) => {
      if (s.length !== a.length) return !1;
      var l = [...s].sort(), u = [...a].sort();
      return l.every(((d, p) => d === u[p]));
    })(e.cookie_persisted_properties || [], r.cookie_persisted_properties || [])) {
      var n = this.rt(e), o = this.props;
      this.clear(), this.H = n, this.props = o, this.save();
    }
  }
  set_disabled(e) {
    this.st = e, this.st ? this.remove() : this.save();
  }
  set_cross_subdomain(e) {
    e !== this.ut && (this.ut = e, this.remove(), this.save());
  }
  set_secure(e) {
    e !== this.ht && (this.ht = e, this.remove(), this.save());
  }
  set_event_timer(e, r) {
    var i = this.props[Dr] || {};
    i[e] = r, this.props[Dr] = i, this.save();
  }
  remove_event_timer(e) {
    var r = (this.props[Dr] || {})[e];
    return I(r) || (delete this.props[Dr][e], this.save()), r;
  }
  get_property(e) {
    return this.props[e];
  }
  set_property(e, r) {
    this.props[e] = r, this.save();
  }
}
var Pr = { Activation: "events", Cancellation: "cancelEvents" }, Fn = { Popover: "popover", API: "api", Widget: "widget" }, Zr = { SHOWN: "survey shown", DISMISSED: "survey dismissed", SENT: "survey sent" }, Vn = { SURVEY_ID: "$survey_id", SURVEY_ITERATION: "$survey_iteration", SURVEY_LAST_SEEN_DATE: "$survey_last_seen_date" }, jo = { Popover: "popover", Inline: "inline" }, v5 = { SHOWN: "product tour shown" }, ra = { TOUR_LAST_SEEN_DATE: "$product_tour_last_seen_date", TOUR_TYPE: "$product_tour_type" }, ia = de("[RateLimiter]");
class m5 {
  constructor(e) {
    this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = (r) => {
      var i = r.text;
      if (i && i.length) try {
        (JSON.parse(i).quota_limited || []).forEach(((n) => {
          ia.info((n || "events") + " is quota limited."), this.serverLimits[n] = (/* @__PURE__ */ new Date()).getTime() + 6e4;
        }));
      } catch (n) {
        return void ia.warn('could not rate limit - continuing. Error: "' + n?.message + '"', { text: i });
      }
    }, this.instance = e, this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited;
  }
  get captureEventsPerSecond() {
    var e;
    return ((e = this.instance.config.rate_limiting) == null ? void 0 : e.events_per_second) || 10;
  }
  get captureEventsBurstLimit() {
    var e;
    return Math.max(((e = this.instance.config.rate_limiting) == null ? void 0 : e.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond);
  }
  clientRateLimitContext(e) {
    var r, i, n;
    e === void 0 && (e = !1);
    var { captureEventsBurstLimit: o, captureEventsPerSecond: s } = this, a = (/* @__PURE__ */ new Date()).getTime(), l = (r = (i = this.instance.persistence) == null ? void 0 : i.get_property(Vo)) !== null && r !== void 0 ? r : { tokens: o, last: a };
    l.tokens += (a - l.last) / 1e3 * s, l.last = a, l.tokens > o && (l.tokens = o);
    var u = 1 > l.tokens;
    return u || e || (l.tokens = Math.max(0, l.tokens - 1)), !u || this.lastEventRateLimited || e || this.instance.capture("$$client_ingestion_warning", { $$client_ingestion_warning_message: "posthog-js client rate limited. Config is set to " + s + " events per second and " + o + " events burst limit." }, { skip_client_rate_limiting: !0 }), this.lastEventRateLimited = u, (n = this.instance.persistence) == null || n.set_property(Vo, l), { isRateLimited: u, remainingTokens: l.tokens };
  }
  isServerRateLimited(e) {
    var r = this.serverLimits[e || "events"] || !1;
    return r !== !1 && (/* @__PURE__ */ new Date()).getTime() < r;
  }
}
var Mr = de("[RemoteConfig]");
class W1 {
  constructor(e) {
    this._instance = e;
  }
  get remoteConfig() {
    var e;
    return (e = T._POSTHOG_REMOTE_CONFIG) == null || (e = e[this._instance.config.token]) == null ? void 0 : e.config;
  }
  vt(e) {
    var r, i;
    (r = T.__PosthogExtensions__) != null && r.loadExternalDependency ? (i = T.__PosthogExtensions__) == null || i.loadExternalDependency == null || i.loadExternalDependency(this._instance, "remote-config", (() => e(this.remoteConfig))) : e();
  }
  ct(e) {
    this._instance._send_request({ method: "GET", url: this._instance.requestRouter.endpointFor("assets", "/array/" + this._instance.config.token + "/config"), callback(r) {
      e(r.json);
    } });
  }
  load() {
    try {
      if (this.remoteConfig) return Mr.info("Using preloaded remote config", this.remoteConfig), this.ft(this.remoteConfig), void this._t();
      if (this._instance.bt()) return void Mr.warn("Remote config is disabled. Falling back to local config.");
      this.vt(((e) => {
        if (!e) return Mr.info("No config found after loading remote JS config. Falling back to JSON."), void this.ct(((r) => {
          this.ft(r), this._t();
        }));
        this.ft(e), this._t();
      }));
    } catch (e) {
      Mr.error("Error loading remote config", e);
    }
  }
  stop() {
    this.yt && (clearInterval(this.yt), this.yt = void 0);
  }
  refresh() {
    this._instance.bt() || P?.visibilityState === "hidden" || this._instance.reloadFeatureFlags();
  }
  _t() {
    var e;
    if (!this.yt) {
      var r = (e = this._instance.config.remote_config_refresh_interval_ms) !== null && e !== void 0 ? e : 3e5;
      r !== 0 && (this.yt = setInterval((() => {
        this.refresh();
      }), r));
    }
  }
  ft(e) {
    var r;
    e || Mr.error("Failed to fetch remote config from PostHog."), this._instance.ft(e ?? {}), e?.hasFeatureFlags !== !1 && (this._instance.config.advanced_disable_feature_flags_on_first_load || (r = this._instance.featureFlags) == null || r.ensureFlagsLoaded());
  }
}
var ft = { GZipJS: "gzip-js", Base64: "base64" }, Qe = Uint8Array, Fe = Uint16Array, vr = Uint32Array, R2 = new Qe([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), P2 = new Qe([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), na = new Qe([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), G1 = function(t, e) {
  for (var r = new Fe(31), i = 0; 31 > i; ++i) r[i] = e += 1 << t[i - 1];
  var n = new vr(r[30]);
  for (i = 1; 30 > i; ++i) for (var o = r[i]; r[i + 1] > o; ++o) n[o] = o - r[i] << 5 | i;
  return [r, n];
}, Y1 = G1(R2, 2), Zo = Y1[1];
Y1[0][28] = 258, Zo[258] = 28;
for (var oa = G1(P2, 0)[1], Q1 = new Fe(32768), ie = 0; 32768 > ie; ++ie) {
  var Kt = (43690 & ie) >>> 1 | (21845 & ie) << 1;
  Q1[ie] = ((65280 & (Kt = (61680 & (Kt = (52428 & Kt) >>> 2 | (13107 & Kt) << 2)) >>> 4 | (3855 & Kt) << 4)) >>> 8 | (255 & Kt) << 8) >>> 1;
}
var Qr = function(t, e, r) {
  for (var i = t.length, n = 0, o = new Fe(e); i > n; ++n) ++o[t[n] - 1];
  var s, a = new Fe(e);
  for (n = 0; e > n; ++n) a[n] = a[n - 1] + o[n - 1] << 1;
  for (s = new Fe(i), n = 0; i > n; ++n) s[n] = Q1[a[t[n] - 1]++] >>> 15 - t[n];
  return s;
}, Zt = new Qe(288);
for (ie = 0; 144 > ie; ++ie) Zt[ie] = 8;
for (ie = 144; 256 > ie; ++ie) Zt[ie] = 9;
for (ie = 256; 280 > ie; ++ie) Zt[ie] = 7;
for (ie = 280; 288 > ie; ++ie) Zt[ie] = 8;
var Xi = new Qe(32);
for (ie = 0; 32 > ie; ++ie) Xi[ie] = 5;
var b5 = Qr(Zt, 9), C5 = Qr(Xi, 5), K1 = function(t) {
  return (t / 8 >> 0) + (7 & t && 1);
}, X1 = function(t, e, r) {
  (r == null || r > t.length) && (r = t.length);
  var i = new (t instanceof Fe ? Fe : t instanceof vr ? vr : Qe)(r - e);
  return i.set(t.subarray(e, r)), i;
}, ut = function(t, e, r) {
  var i = e / 8 >> 0;
  t[i] |= r <<= 7 & e, t[i + 1] |= r >>> 8;
}, Ir = function(t, e, r) {
  var i = e / 8 >> 0;
  t[i] |= r <<= 7 & e, t[i + 1] |= r >>> 8, t[i + 2] |= r >>> 16;
}, zn = function(t, e) {
  for (var r = [], i = 0; t.length > i; ++i) t[i] && r.push({ s: i, f: t[i] });
  var n = r.length, o = r.slice();
  if (!n) return [new Qe(0), 0];
  if (n == 1) {
    var s = new Qe(r[0].s + 1);
    return s[r[0].s] = 1, [s, 1];
  }
  r.sort((function(k, A) {
    return k.f - A.f;
  })), r.push({ s: -1, f: 25001 });
  var a = r[0], l = r[1], u = 0, d = 1, p = 2;
  for (r[0] = { s: -1, f: a.f + l.f, l: a, r: l }; d != n - 1; ) a = r[r[p].f > r[u].f ? u++ : p++], l = r[u != d && r[p].f > r[u].f ? u++ : p++], r[d++] = { s: -1, f: a.f + l.f, l: a, r: l };
  var h = o[0].s;
  for (i = 1; n > i; ++i) o[i].s > h && (h = o[i].s);
  var f = new Fe(h + 1), v = Bo(r[d - 1], f, 0);
  if (v > e) {
    i = 0;
    var g = 0, m = v - e, w = 1 << m;
    for (o.sort((function(k, A) {
      return f[A.s] - f[k.s] || k.f - A.f;
    })); n > i; ++i) {
      var y = o[i].s;
      if (e >= f[y]) break;
      g += w - (1 << v - f[y]), f[y] = e;
    }
    for (g >>>= m; g > 0; ) {
      var x = o[i].s;
      e > f[x] ? g -= 1 << e - f[x]++ - 1 : ++i;
    }
    for (; i >= 0 && g; --i) {
      var _ = o[i].s;
      f[_] == e && (--f[_], ++g);
    }
    v = e;
  }
  return [new Qe(f), v];
}, Bo = function(t, e, r) {
  return t.s == -1 ? Math.max(Bo(t.l, e, r + 1), Bo(t.r, e, r + 1)) : e[t.s] = r;
}, sa = function(t) {
  for (var e = t.length; e && !t[--e]; ) ;
  for (var r = new Fe(++e), i = 0, n = t[0], o = 1, s = function(l) {
    r[i++] = l;
  }, a = 1; e >= a; ++a) if (t[a] == n && a != e) ++o;
  else {
    if (!n && o > 2) {
      for (; o > 138; o -= 138) s(32754);
      o > 2 && (s(o > 10 ? o - 11 << 5 | 28690 : o - 3 << 5 | 12305), o = 0);
    } else if (o > 3) {
      for (s(n), --o; o > 6; o -= 6) s(8304);
      o > 2 && (s(o - 3 << 5 | 8208), o = 0);
    }
    for (; o--; ) s(n);
    o = 1, n = t[a];
  }
  return [r.subarray(0, i), e];
}, Lr = function(t, e) {
  for (var r = 0, i = 0; e.length > i; ++i) r += t[i] * e[i];
  return r;
}, qo = function(t, e, r) {
  var i = r.length, n = K1(e + 2);
  t[n] = 255 & i, t[n + 1] = i >>> 8, t[n + 2] = 255 ^ t[n], t[n + 3] = 255 ^ t[n + 1];
  for (var o = 0; i > o; ++o) t[n + o + 4] = r[o];
  return 8 * (n + 4 + i);
}, aa = function(t, e, r, i, n, o, s, a, l, u, d) {
  ut(e, d++, r), ++n[256];
  for (var p = zn(n, 15), h = p[0], f = p[1], v = zn(o, 15), g = v[0], m = v[1], w = sa(h), y = w[0], x = w[1], _ = sa(g), k = _[0], A = _[1], E = new Fe(19), b = 0; y.length > b; ++b) E[31 & y[b]]++;
  for (b = 0; k.length > b; ++b) E[31 & k[b]]++;
  for (var S = zn(E, 7), D = S[0], V = S[1], H = 19; H > 4 && !D[na[H - 1]]; --H) ;
  var U, z, G, J, ue = u + 5 << 3, L = Lr(n, Zt) + Lr(o, Xi) + s, _e = Lr(n, h) + Lr(o, g) + s + 14 + 3 * H + Lr(E, D) + (2 * E[16] + 3 * E[17] + 7 * E[18]);
  if (L >= ue && _e >= ue) return qo(e, d, t.subarray(l, l + u));
  if (ut(e, d, 1 + (L > _e)), d += 2, L > _e) {
    U = Qr(h, f), z = h, G = Qr(g, m), J = g;
    var Me = Qr(D, V);
    for (ut(e, d, x - 257), ut(e, d + 5, A - 1), ut(e, d + 10, H - 4), d += 14, b = 0; H > b; ++b) ut(e, d + 3 * b, D[na[b]]);
    d += 3 * H;
    for (var Ie = [y, k], De = 0; 2 > De; ++De) {
      var K = Ie[De];
      for (b = 0; K.length > b; ++b) ut(e, d, Me[ee = 31 & K[b]]), d += D[ee], ee > 15 && (ut(e, d, K[b] >>> 5 & 127), d += K[b] >>> 12);
    }
  } else U = b5, z = Zt, G = C5, J = Xi;
  for (b = 0; a > b; ++b) if (i[b] > 255) {
    var ee;
    Ir(e, d, U[257 + (ee = i[b] >>> 18 & 31)]), d += z[ee + 257], ee > 7 && (ut(e, d, i[b] >>> 23 & 31), d += R2[ee]);
    var Se = 31 & i[b];
    Ir(e, d, G[Se]), d += J[Se], Se > 3 && (Ir(e, d, i[b] >>> 5 & 8191), d += P2[Se]);
  } else Ir(e, d, U[i[b]]), d += z[i[b]];
  return Ir(e, d, U[256]), d + z[256];
}, w5 = new vr([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), _5 = (function() {
  for (var t = new vr(256), e = 0; 256 > e; ++e) {
    for (var r = e, i = 9; --i; ) r = (1 & r && 3988292384) ^ r >>> 1;
    t[e] = r;
  }
  return t;
})(), Dn = function(t, e, r) {
  for (; r; ++e) t[e] = r, r >>>= 8;
};
function y5(t, e) {
  e === void 0 && (e = {});
  var r = /* @__PURE__ */ (function() {
    var p = 4294967295;
    return { p(h) {
      for (var f = p, v = 0; h.length > v; ++v) f = _5[255 & f ^ h[v]] ^ f >>> 8;
      p = f;
    }, d() {
      return 4294967295 ^ p;
    } };
  })(), i = t.length;
  r.p(t);
  var n, o, s, a, l, u = (a = 10 + ((n = e).filename && n.filename.length + 1 || 0), l = 8, (function(p, h, f, v, g, m) {
    var w = p.length, y = new Qe(v + w + 5 * (1 + Math.floor(w / 7e3)) + g), x = y.subarray(v, y.length - g), _ = 0;
    if (!h || 8 > w) for (var k = 0; w >= k; k += 65535) {
      var A = k + 65535;
      w > A ? _ = qo(x, _, p.subarray(k, A)) : (x[k] = !0, _ = qo(x, _, p.subarray(k, w)));
    }
    else {
      for (var E = w5[h - 1], b = E >>> 13, S = 8191 & E, D = (1 << f) - 1, V = new Fe(32768), H = new Fe(D + 1), U = Math.ceil(f / 3), z = 2 * U, G = function(Cn) {
        return (p[Cn] ^ p[Cn + 1] << U ^ p[Cn + 2] << z) & D;
      }, J = new vr(25e3), ue = new Fe(288), L = new Fe(32), _e = 0, Me = 0, Ie = (k = 0, 0), De = 0, K = 0; w > k; ++k) {
        var ee = G(k), Se = 32767 & k, lt = H[ee];
        if (V[Se] = lt, H[ee] = Se, k >= De) {
          var oe = w - k;
          if ((_e > 7e3 || Ie > 24576) && oe > 423) {
            _ = aa(p, x, 0, J, ue, L, Me, Ie, K, k - K, _), Ie = _e = Me = 0, K = k;
            for (var He = 0; 286 > He; ++He) ue[He] = 0;
            for (He = 0; 30 > He; ++He) L[He] = 0;
          }
          var Be = 2, ct = 0, xr = S, Ue = Se - lt & 32767;
          if (oe > 2 && ee == G(k - Ue)) for (var bl = Math.min(b, oe) - 1, Cl = Math.min(32767, k), wl = Math.min(258, oe); Cl >= Ue && --xr && Se != lt; ) {
            if (p[k + Be] == p[k + Be - Ue]) {
              for (var xt = 0; wl > xt && p[k + xt] == p[k + xt - Ue]; ++xt) ;
              if (xt > Be) {
                if (Be = xt, ct = Ue, xt > bl) break;
                var _l = Math.min(Ue, xt - 2), F2 = 0;
                for (He = 0; _l > He; ++He) {
                  var bn = k - Ue + He + 32768 & 32767, V2 = bn - V[bn] + 32768 & 32767;
                  V2 > F2 && (F2 = V2, lt = bn);
                }
              }
            }
            Ue += (Se = lt) - (lt = V[Se]) + 32768 & 32767;
          }
          if (ct) {
            J[Ie++] = 268435456 | Zo[Be] << 18 | oa[ct];
            var z2 = 31 & Zo[Be], D2 = 31 & oa[ct];
            Me += R2[z2] + P2[D2], ++ue[257 + z2], ++L[D2], De = k + Be, ++_e;
          } else J[Ie++] = p[k], ++ue[p[k]];
        }
      }
      _ = aa(p, x, !0, J, ue, L, Me, Ie, K, k - K, _);
    }
    return X1(y, 0, v + K1(_) + g);
  })(o = t, (s = e).level == null ? 6 : s.level, s.mem == null ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(o.length)))) : 12 + s.mem, a, l)), d = u.length;
  return (function(p, h) {
    var f = h.filename;
    if (p[0] = 31, p[1] = 139, p[2] = 8, p[8] = 2 > h.level ? 4 : h.level == 9 ? 2 : 0, p[9] = 3, h.mtime != 0 && Dn(p, 4, Math.floor(new Date(h.mtime || Date.now()) / 1e3)), f) {
      p[3] = 8;
      for (var v = 0; f.length >= v; ++v) p[v + 10] = f.charCodeAt(v);
    }
  })(u, e), Dn(u, d - 8, r.d()), Dn(u, d - 4, i), u;
}
var x5 = !!ko || !!xo, Ji = function(t, e, r) {
  var i;
  r === void 0 && (r = !0);
  var [n, o] = t.split("?"), s = R({}, e), a = (i = o?.split("&").map(((u) => {
    var d, [p, h] = u.split("="), f = r && (d = s[p]) !== null && d !== void 0 ? d : h;
    return delete s[p], p + "=" + f;
  }))) !== null && i !== void 0 ? i : [], l = (function(u, d) {
    var p, h;
    d === void 0 && (d = "&");
    var f = [];
    return re(u, (function(v, g) {
      I(v) || I(g) || g === "undefined" || (p = encodeURIComponent(((m) => m instanceof File)(v) ? v.name : v.toString()), h = encodeURIComponent(g), f[f.length] = h + "=" + p);
    })), f.join(d);
  })(s);
  return l && a.push(l), n + "?" + a.join("&");
}, Br = (t, e) => JSON.stringify(t, ((r, i) => typeof i == "bigint" ? i.toString() : i), e), Un = (t) => {
  var { data: e, compression: r } = t;
  if (e) {
    if (r === ft.GZipJS) {
      var i = y5((function(a, l) {
        var u = a.length;
        if (typeof TextEncoder < "u") return new TextEncoder().encode(a);
        for (var d = new Qe(a.length + (a.length >>> 1)), p = 0, h = function(m) {
          d[p++] = m;
        }, f = 0; u > f; ++f) {
          if (p + 5 > d.length) {
            var v = new Qe(p + 8 + (u - f << 1));
            v.set(d), d = v;
          }
          var g = a.charCodeAt(f);
          128 > g ? h(g) : 2048 > g ? (h(192 | g >>> 6), h(128 | 63 & g)) : g > 55295 && 57344 > g ? (h(240 | (g = 65536 + (1047552 & g) | 1023 & a.charCodeAt(++f)) >>> 18), h(128 | g >>> 12 & 63), h(128 | g >>> 6 & 63), h(128 | 63 & g)) : (h(224 | g >>> 12), h(128 | g >>> 6 & 63), h(128 | 63 & g));
        }
        return X1(d, 0, p);
      })(Br(e)), { mtime: 0 });
      return { contentType: "text/plain", body: i.buffer.slice(i.byteOffset, i.byteOffset + i.byteLength), estimatedSize: i.byteLength };
    }
    if (r === ft.Base64) {
      var n = (function(a) {
        return a && btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g, ((l, u) => String.fromCharCode(parseInt(u, 16)))));
      })(Br(e)), o = ((a) => "data=" + encodeURIComponent(typeof a == "string" ? a : Br(a)))(n);
      return { contentType: "application/x-www-form-urlencoded", body: o, estimatedSize: new Blob([o]).size };
    }
    var s = Br(e);
    return { contentType: "application/json", body: s, estimatedSize: new Blob([s]).size };
  }
}, Si = [];
xo && Si.push({ transport: "fetch", method(t) {
  var e, r, { contentType: i, body: n, estimatedSize: o } = (e = Un(t)) !== null && e !== void 0 ? e : {}, s = new Headers();
  re(t.headers, (function(d, p) {
    s.append(p, d);
  })), i && s.append("Content-Type", i);
  var a = t.url, l = null;
  if (Os) {
    var u = new Os();
    l = { signal: u.signal, timeout: setTimeout((() => u.abort()), t.timeout) };
  }
  xo(a, R({ method: t?.method || "GET", headers: s, keepalive: t.method === "POST" && 52428.8 > (o || 0), body: n, signal: (r = l) == null ? void 0 : r.signal }, t.fetchOptions)).then(((d) => d.text().then(((p) => {
    var h = { statusCode: d.status, text: p };
    if (d.status === 200) try {
      h.json = JSON.parse(p);
    } catch (f) {
      M.error(f);
    }
    t.callback == null || t.callback(h);
  })))).catch(((d) => {
    M.error(d), t.callback == null || t.callback({ statusCode: 0, error: d });
  })).finally((() => l ? clearTimeout(l.timeout) : null));
} }), ko && Si.push({ transport: "XHR", method(t) {
  var e, r = new ko();
  r.open(t.method || "GET", t.url, !0);
  var { contentType: i, body: n } = (e = Un(t)) !== null && e !== void 0 ? e : {};
  re(t.headers, (function(o, s) {
    r.setRequestHeader(s, o);
  })), i && r.setRequestHeader("Content-Type", i), t.timeout && (r.timeout = t.timeout), t.disableXHRCredentials || (r.withCredentials = !0), r.onreadystatechange = () => {
    if (r.readyState === 4) {
      var o = { statusCode: r.status, text: r.responseText };
      if (r.status === 200) try {
        o.json = JSON.parse(r.responseText);
      } catch {
      }
      t.callback == null || t.callback(o);
    }
  }, r.send(n);
} }), je != null && je.sendBeacon && Si.push({ transport: "sendBeacon", method(t) {
  var e = Ji(t.url, { beacon: "1" });
  try {
    var r, { contentType: i, body: n } = (r = Un(t)) !== null && r !== void 0 ? r : {}, o = typeof n == "string" ? new Blob([n], { type: i }) : n;
    je.sendBeacon(e, o);
  } catch {
  }
} });
var Wo = 3e3;
class k5 {
  constructor(e, r) {
    this.wt = !0, this.Et = [], this.St = it(r?.flush_interval_ms || Wo, 250, 5e3, M.createLogger("flush interval"), Wo), this.xt = e;
  }
  enqueue(e) {
    this.Et.push(e), this.Tt || this.$t();
  }
  unload() {
    this.kt();
    var e = this.Et.length > 0 ? this.Rt() : {}, r = Object.values(e);
    [...r.filter(((i) => i.url.indexOf("/e") === 0)), ...r.filter(((i) => i.url.indexOf("/e") !== 0))].map(((i) => {
      this.xt(R({}, i, { transport: "sendBeacon" }));
    }));
  }
  enable() {
    this.wt = !1, this.$t();
  }
  $t() {
    var e = this;
    this.wt || (this.Tt = setTimeout((() => {
      if (this.kt(), this.Et.length > 0) {
        var r = this.Rt(), i = function() {
          var o = r[n], s = (/* @__PURE__ */ new Date()).getTime();
          o.data && Q(o.data) && re(o.data, ((a) => {
            a.offset = Math.abs(a.timestamp - s), delete a.timestamp;
          })), e.xt(o);
        };
        for (var n in r) i();
      }
    }), this.St));
  }
  kt() {
    clearTimeout(this.Tt), this.Tt = void 0;
  }
  Rt() {
    var e = {};
    return re(this.Et, ((r) => {
      var i, n = r, o = (n ? n.batchKey : null) || n.url;
      I(e[o]) && (e[o] = R({}, n, { data: [] })), (i = e[o].data) == null || i.push(n.data);
    })), this.Et = [], e;
  }
}
var A5 = ["retriesPerformedSoFar"];
class E5 {
  constructor(e) {
    this.Pt = !1, this.Ot = 3e3, this.Et = [], this._instance = e, this.Et = [], this.It = !0, !I(C) && "onLine" in C.navigator && (this.It = C.navigator.onLine, this.Ct = () => {
      this.It = !0, this.Ft();
    }, this.At = () => {
      this.It = !1;
    }, fe(C, "online", this.Ct), fe(C, "offline", this.At));
  }
  get length() {
    return this.Et.length;
  }
  retriableRequest(e) {
    var { retriesPerformedSoFar: r } = e, i = l1(e, A5);
    Jt(r) && (i.url = Ji(i.url, { retry_count: r })), this._instance._send_request(R({}, i, { callback: (n) => {
      n.statusCode === 200 || n.statusCode >= 400 && 500 > n.statusCode || (r ?? 0) >= 10 ? i.callback == null || i.callback(n) : this.Mt(R({ retriesPerformedSoFar: r }, i));
    } }));
  }
  Mt(e) {
    var r = e.retriesPerformedSoFar || 0;
    e.retriesPerformedSoFar = r + 1;
    var i = (function(s) {
      var a = 3e3 * Math.pow(2, s), l = a / 2, u = Math.min(18e5, a), d = Math.random() - 0.5;
      return Math.ceil(u + d * (u - l));
    })(r), n = Date.now() + i;
    this.Et.push({ retryAt: n, requestOptions: e });
    var o = "Enqueued failed request for retry in " + i;
    navigator.onLine || (o += " (Browser is offline)"), M.warn(o), this.Pt || (this.Pt = !0, this.Dt());
  }
  Dt() {
    if (this.Lt && clearTimeout(this.Lt), this.Et.length === 0) return this.Pt = !1, void (this.Lt = void 0);
    this.Lt = setTimeout((() => {
      this.It && this.Et.length > 0 && this.Ft(), this.Dt();
    }), this.Ot);
  }
  Ft() {
    var e = Date.now(), r = [], i = this.Et.filter(((o) => e > o.retryAt || (r.push(o), !1)));
    if (this.Et = r, i.length > 0) for (var { requestOptions: n } of i) this.retriableRequest(n);
  }
  unload() {
    for (var { requestOptions: e } of (this.Lt && (clearTimeout(this.Lt), this.Lt = void 0), this.Pt = !1, I(C) || (this.Ct && (C.removeEventListener("online", this.Ct), this.Ct = void 0), this.At && (C.removeEventListener("offline", this.At), this.At = void 0)), this.Et)) try {
      this._instance._send_request(R({}, e, { transport: "sendBeacon" }));
    } catch (r) {
      M.error(r);
    }
    this.Et = [];
  }
}
class S5 {
  constructor(e) {
    this.Ut = () => {
      var r, i, n, o;
      this.Nt || (this.Nt = {});
      var s = this.scrollElement(), a = this.scrollY(), l = s ? Math.max(0, s.scrollHeight - s.clientHeight) : 0, u = a + (s?.clientHeight || 0), d = s?.scrollHeight || 0;
      this.Nt.lastScrollY = Math.ceil(a), this.Nt.maxScrollY = Math.max(a, (r = this.Nt.maxScrollY) !== null && r !== void 0 ? r : 0), this.Nt.maxScrollHeight = Math.max(l, (i = this.Nt.maxScrollHeight) !== null && i !== void 0 ? i : 0), this.Nt.lastContentY = u, this.Nt.maxContentY = Math.max(u, (n = this.Nt.maxContentY) !== null && n !== void 0 ? n : 0), this.Nt.maxContentHeight = Math.max(d, (o = this.Nt.maxContentHeight) !== null && o !== void 0 ? o : 0);
    }, this._instance = e;
  }
  get jt() {
    return this._instance.config.scroll_root_selector;
  }
  getContext() {
    return this.Nt;
  }
  resetContext() {
    var e = this.Nt;
    return setTimeout(this.Ut, 0), e;
  }
  startMeasuringScrollPosition() {
    fe(C, "scroll", this.Ut, { capture: !0 }), fe(C, "scrollend", this.Ut, { capture: !0 }), fe(C, "resize", this.Ut);
  }
  scrollElement() {
    if (!this.jt) return C?.document.documentElement;
    var e = Q(this.jt) ? this.jt : [this.jt];
    for (var r of e) {
      var i = C?.document.querySelector(r);
      if (i) return i;
    }
  }
  scrollY() {
    if (this.jt) {
      var e = this.scrollElement();
      return e && e.scrollTop || 0;
    }
    return C && (C.scrollY || C.pageYOffset || C.document.documentElement.scrollTop) || 0;
  }
  scrollX() {
    if (this.jt) {
      var e = this.scrollElement();
      return e && e.scrollLeft || 0;
    }
    return C && (C.scrollX || C.pageXOffset || C.document.documentElement.scrollLeft) || 0;
  }
}
var R5 = (t) => Z1(t?.config.mask_personal_data_properties, t?.config.custom_personal_data_properties);
class la {
  constructor(e, r, i, n) {
    this.zt = (o) => {
      var s = this.Bt();
      if (!s || s.sessionId !== o) {
        var a = { sessionId: o, props: this.Ht(this._instance) };
        this.qt.register({ [Fo]: a });
      }
    }, this._instance = e, this.Wt = r, this.qt = i, this.Ht = n || R5, this.Wt.onSessionId(this.zt);
  }
  Bt() {
    return this.qt.props[Fo];
  }
  getSetOnceProps() {
    var e, r = (e = this.Bt()) == null ? void 0 : e.props;
    return r ? "r" in r ? B1(r) : { $referring_domain: r.referringDomain, $pathname: r.initialPathName, utm_source: r.utm_source, utm_campaign: r.utm_campaign, utm_medium: r.utm_medium, utm_content: r.utm_content, utm_term: r.utm_term } : {};
  }
  getSessionProps() {
    var e = {};
    return re(S2(this.getSetOnceProps()), ((r, i) => {
      i === "$current_url" && (i = "url"), e["$session_entry_" + Ao(i)] = r;
    })), e;
  }
}
class M2 {
  constructor() {
    this.Vt = {};
  }
  on(e, r) {
    return this.Vt[e] || (this.Vt[e] = []), this.Vt[e].push(r), () => {
      this.Vt[e] = this.Vt[e].filter(((i) => i !== r));
    };
  }
  emit(e, r) {
    for (var i of this.Vt[e] || []) i(r);
    for (var n of this.Vt["*"] || []) n(e, r);
  }
}
var jn = de("[SessionId]");
class ca {
  on(e, r) {
    return this.Yt.on(e, r);
  }
  constructor(e, r, i) {
    var n;
    if (this.Gt = [], this.Jt = void 0, this.Yt = new M2(), this.Kt = (u, d) => !(!Jt(u) || !Jt(d)) && Math.abs(u - d) > this.sessionTimeoutMs, !e.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
    if (e.config.cookieless_mode === Xe) throw new Error('SessionIdManager cannot be used with cookieless_mode="always"');
    this.N = e.config, this.qt = e.persistence, this.Xt = void 0, this.Qt = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this.Zt = r || Pt, this.ti = i || Pt;
    var o = this.N.persistence_name || this.N.token;
    if (this._sessionTimeoutMs = 1e3 * it(this.N.session_idle_timeout_seconds || 1800, 60, 36e3, jn.createLogger("session_idle_timeout_seconds"), 1800), e.register({ $configured_session_timeout_ms: this._sessionTimeoutMs }), this.ii(), this.ei = "ph_" + o + "_window_id", this.ri = "ph_" + o + "_primary_window_exists", this.si()) {
      var s = xe.D(this.ei), a = xe.D(this.ri);
      s && !a ? this.Xt = s : xe.U(this.ei), xe.L(this.ri, !0);
    }
    if ((n = this.N.bootstrap) != null && n.sessionID) try {
      var l = ((u) => {
        var d = this.N.bootstrap.sessionID.replace(/-/g, "");
        if (d.length !== 32) throw new Error("Not a valid UUID");
        if (d[12] !== "7") throw new Error("Not a UUIDv7");
        return parseInt(d.substring(0, 12), 16);
      })();
      this.ni(this.N.bootstrap.sessionID, (/* @__PURE__ */ new Date()).getTime(), l);
    } catch (u) {
      jn.error("Invalid sessionID in bootstrap", u);
    }
    this.oi();
  }
  get sessionTimeoutMs() {
    return this._sessionTimeoutMs;
  }
  onSessionId(e) {
    return I(this.Gt) && (this.Gt = []), this.Gt.push(e), this.Qt && e(this.Qt, this.Xt), () => {
      this.Gt = this.Gt.filter(((r) => r !== e));
    };
  }
  si() {
    return this.N.persistence !== "memory" && !this.qt.st && xe.F();
  }
  ai(e) {
    e !== this.Xt && (this.Xt = e, this.si() && xe.L(this.ei, e));
  }
  li() {
    return this.Xt ? this.Xt : this.si() ? xe.D(this.ei) : null;
  }
  ni(e, r, i) {
    e === this.Qt && r === this._sessionActivityTimestamp && i === this._sessionStartTimestamp || (this._sessionStartTimestamp = i, this._sessionActivityTimestamp = r, this.Qt = e, this.qt.register({ [Di]: [r, e, i] }));
  }
  ui() {
    var e = this.qt.props[Di];
    return Q(e) && e.length === 2 && e.push(e[0]), e || [0, null, 0];
  }
  resetSessionId() {
    this.ni(null, null, null);
  }
  destroy() {
    clearTimeout(this.hi), this.hi = void 0, this.Jt && C && (C.removeEventListener(qi, this.Jt, { capture: !1 }), this.Jt = void 0), this.Gt = [];
  }
  oi() {
    this.Jt = () => {
      this.si() && xe.U(this.ri);
    }, fe(C, qi, this.Jt, { capture: !1 });
  }
  checkAndGetSessionAndWindowId(e, r) {
    if (e === void 0 && (e = !1), r === void 0 && (r = null), this.N.cookieless_mode === Xe) throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"');
    var i = r || (/* @__PURE__ */ new Date()).getTime(), [n, o, s] = this.ui(), a = this.li(), l = Jt(s) && Math.abs(i - s) > 864e5, u = !1, d = !o, p = !d && !e && this.Kt(i, n);
    d || p || l ? (o = this.Zt(), a = this.ti(), jn.info("new session ID generated", { sessionId: o, windowId: a, changeReason: { noSessionId: d, activityTimeout: p, sessionPastMaximumLength: l } }), s = i, u = !0) : a || (a = this.ti(), u = !0);
    var h = Jt(n) && e && !l ? n : i, f = Jt(s) ? s : (/* @__PURE__ */ new Date()).getTime();
    return this.ai(a), this.ni(o, h, f), e || this.ii(), u && this.Gt.forEach(((v) => v(o, a, u ? { noSessionId: d, activityTimeout: p, sessionPastMaximumLength: l } : void 0))), { sessionId: o, windowId: a, sessionStartTimestamp: f, changeReason: u ? { noSessionId: d, activityTimeout: p, sessionPastMaximumLength: l } : void 0, lastActivityTimestamp: n };
  }
  ii() {
    clearTimeout(this.hi), this.hi = setTimeout((() => {
      var [e] = this.ui();
      if (this.Kt((/* @__PURE__ */ new Date()).getTime(), e)) {
        var r = this.Qt;
        this.resetSessionId(), this.Yt.emit("forcedIdleReset", { idleSessionId: r });
      }
    }), 1.1 * this.sessionTimeoutMs);
  }
}
var J1 = function(t, e) {
  if (!t) return !1;
  var r = t.userAgent;
  if (r && Fs(r, e)) return !0;
  try {
    var i = t?.userAgentData;
    if (i != null && i.brands && i.brands.some(((n) => Fs(n?.brand, e)))) return !0;
  } catch {
  }
  return !!t.webdriver;
}, $i = function(t, e) {
  if (!(function(r) {
    try {
      new RegExp(r);
    } catch {
      return !1;
    }
    return !0;
  })(e)) return !1;
  try {
    return new RegExp(e).test(t);
  } catch {
    return !1;
  }
};
function da(t, e, r) {
  return Br({ distinct_id: t, userPropertiesToSet: e, userPropertiesToSetOnce: r });
}
var $1 = { exact: (t, e) => e.some(((r) => t.some(((i) => r === i)))), is_not: (t, e) => e.every(((r) => t.every(((i) => r !== i)))), regex: (t, e) => e.some(((r) => t.some(((i) => $i(r, i))))), not_regex: (t, e) => e.every(((r) => t.every(((i) => !$i(r, i))))), icontains: (t, e) => e.map(Ci).some(((r) => t.map(Ci).some(((i) => r.includes(i))))), not_icontains: (t, e) => e.map(Ci).every(((r) => t.map(Ci).every(((i) => !r.includes(i))))), gt: (t, e) => e.some(((r) => {
  var i = parseFloat(r);
  return !isNaN(i) && t.some(((n) => i > parseFloat(n)));
})), lt: (t, e) => e.some(((r) => {
  var i = parseFloat(r);
  return !isNaN(i) && t.some(((n) => i < parseFloat(n)));
})) }, Ci = (t) => t.toLowerCase();
function el(t, e) {
  return !t || Object.entries(t).every(((r) => {
    var [i, n] = r, o = e?.[i];
    if (I(o) || _t(o)) return !1;
    var s = [String(o)], a = $1[n.operator];
    return !!a && a(n.values, s);
  }));
}
var Go = "custom", ua = "i.posthog.com";
class P5 {
  constructor(e) {
    this.di = {}, this.instance = e;
  }
  get apiHost() {
    var e = this.instance.config.api_host.trim().replace(/\/$/, "");
    return e === "https://app.posthog.com" ? "https://us.i.posthog.com" : e;
  }
  get flagsApiHost() {
    var e = this.instance.config.flags_api_host;
    return e ? e.trim().replace(/\/$/, "") : this.apiHost;
  }
  get uiHost() {
    var e, r = (e = this.instance.config.ui_host) == null ? void 0 : e.replace(/\/$/, "");
    return r || (r = this.apiHost.replace("." + ua, ".posthog.com")), r === "https://app.posthog.com" ? "https://us.posthog.com" : r;
  }
  get region() {
    return this.di[this.apiHost] || (this.di[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : Go), this.di[this.apiHost];
  }
  endpointFor(e, r) {
    if (r === void 0 && (r = ""), r && (r = r[0] === "/" ? r : "/" + r), e === "ui") return this.uiHost + r;
    if (e === "flags") return this.flagsApiHost + r;
    if (this.region === Go) return this.apiHost + r;
    var i = ua + r;
    switch (e) {
      case "assets":
        return "https://" + this.region + "-assets." + i;
      case "api":
        return "https://" + this.region + "." + i;
    }
  }
}
var $ = de("[Surveys]"), Yo = "seenSurvey_", M5 = (t, e) => {
  var r = "$survey_" + e + "/" + t.id;
  return t.current_iteration && t.current_iteration > 0 && (r = "$survey_" + e + "/" + t.id + "/" + t.current_iteration), r;
}, ha = (t) => ((e, r) => {
  var i = "" + Yo + r.id;
  return r.current_iteration && r.current_iteration > 0 && (i = "" + Yo + r.id + "_" + r.current_iteration), i;
})(0, t), I5 = [Fn.Popover, Fn.Widget, Fn.API], L5 = { ignoreConditions: !1, ignoreDelay: !1, displayType: jo.Popover }, N5 = de("[PostHog ExternalIntegrations]"), O5 = { intercom: "intercom-integration", crispChat: "crisp-chat-integration" };
class H5 {
  constructor(e) {
    this._instance = e;
  }
  Y(e, r) {
    var i;
    (i = T.__PosthogExtensions__) == null || i.loadExternalDependency == null || i.loadExternalDependency(this._instance, e, ((n) => {
      if (n) return N5.error("failed to load script", n);
      r();
    }));
  }
  startIfEnabledOrStop() {
    var e = this, r = function(s) {
      var a, l, u;
      !n || (a = T.__PosthogExtensions__) != null && (a = a.integrations) != null && a[s] || e.Y(O5[s], (() => {
        var d;
        (d = T.__PosthogExtensions__) == null || (d = d.integrations) == null || (d = d[s]) == null || d.start(e._instance);
      })), !n && (l = T.__PosthogExtensions__) != null && (l = l.integrations) != null && l[s] && ((u = T.__PosthogExtensions__) == null || (u = u.integrations) == null || (u = u[s]) == null || u.stop());
    };
    for (var [i, n] of Object.entries((o = this._instance.config.integrations) !== null && o !== void 0 ? o : {})) {
      var o;
      r(i);
    }
  }
}
var Kr = {}, Zn = 0, Qo = () => {
}, pa = 'Consent opt in/out is not valid with cookieless_mode="always" and will be ignored', Nr = "Surveys module not available", ga = "sanitize_properties is deprecated. Use before_send instead", tl = "Invalid value for property_denylist config: ", er = "posthog", rl = !x5 && Te?.indexOf("MSIE") === -1 && Te?.indexOf("Mozilla") === -1, fa = (t) => {
  var e;
  return R({ api_host: "https://us.i.posthog.com", flags_api_host: null, ui_host: null, token: "", autocapture: !0, cross_subdomain_cookie: t5(P?.location), persistence: "localStorage+cookie", persistence_name: "", cookie_persisted_properties: [], loaded: Qo, save_campaign_params: !0, custom_campaign_params: [], custom_blocked_useragents: [], save_referrer: !0, capture_pageleave: "if_capture_pageview", defaults: t ?? "unset", __preview_deferred_init_extensions: !1, debug: ye && ve(ye?.search) && ye.search.indexOf("__posthog_debug=true") !== -1 || !1, cookie_expiration: 365, upgrade: !1, disable_session_recording: !1, disable_persistence: !1, disable_web_experiments: !0, disable_surveys: !1, disable_surveys_automatic_display: !1, disable_conversations: !1, disable_product_tours: !1, disable_external_dependency_loading: !1, enable_recording_console_log: void 0, secure_cookie: (C == null || (e = C.location) == null ? void 0 : e.protocol) === "https:", ip: !1, opt_out_capturing_by_default: !1, opt_out_persistence_by_default: !1, opt_out_useragent_filter: !1, opt_out_capturing_persistence_type: "localStorage", consent_persistence_name: null, opt_out_capturing_cookie_prefix: null, opt_in_site_apps: !1, property_denylist: [], respect_dnt: !1, sanitize_properties: null, request_headers: {}, request_batching: !0, properties_string_max_length: 65535, mask_all_element_attributes: !1, mask_all_text: !1, mask_personal_data_properties: !1, custom_personal_data_properties: [], advanced_disable_flags: !1, advanced_disable_decide: !1, advanced_disable_feature_flags: !1, advanced_disable_feature_flags_on_first_load: !1, advanced_only_evaluate_survey_feature_flags: !1, advanced_feature_flags_dedup_per_session: !1, advanced_enable_surveys: !1, advanced_disable_toolbar_metrics: !1, feature_flag_request_timeout_ms: 3e3, surveys_request_timeout_ms: 1e4, on_request_error(r) {
    M.error("Bad HTTP status: " + r.statusCode + " " + r.text);
  }, get_device_id: (r) => r, capture_performance: void 0, name: "posthog", bootstrap: {}, disable_compression: !1, session_idle_timeout_seconds: 1800, person_profiles: Uo, before_send: void 0, request_queue_config: { flush_interval_ms: Wo }, error_tracking: {}, _onCapture: Qo, __preview_eager_load_replay: !1 }, ((r) => ({ rageclick: !r || "2025-11-30" > r || { content_ignorelist: !0 }, capture_pageview: !r || "2025-05-24" > r || "history_change", session_recording: r && r >= "2025-11-30" ? { strictMinimumDuration: !0 } : {}, external_scripts_inject_target: r && r >= "2026-01-30" ? "head" : "body", internal_or_test_user_hostname: r && r >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0 }))(t));
}, T5 = [["process_person", "person_profiles"], ["xhr_headers", "request_headers"], ["cookie_name", "persistence_name"], ["disable_cookie", "disable_persistence"], ["store_google", "save_campaign_params"], ["verbose", "debug"]], va = (t) => {
  var e = {};
  for (var [r, i] of T5) I(t[r]) || (e[i] = t[r]);
  var n = pe({}, e, t);
  return Q(t.property_blacklist) && (I(t.property_denylist) ? n.property_denylist = t.property_blacklist : Q(t.property_denylist) ? n.property_denylist = [...t.property_blacklist, ...t.property_denylist] : M.error(tl + t.property_denylist)), n;
};
class F5 {
  constructor() {
    this.__forceAllowLocalhost = !1;
  }
  get vi() {
    return this.__forceAllowLocalhost;
  }
  set vi(e) {
    M.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e;
  }
}
class rt {
  ci(e, r) {
    if (e) {
      var i = this.fi.indexOf(e);
      i !== -1 && this.fi.splice(i, 1);
    }
    return this.fi.push(r), r.initialize == null || r.initialize(), r;
  }
  get decideEndpointWasHit() {
    var e, r;
    return (e = (r = this.featureFlags) == null ? void 0 : r.hasLoadedFlags) !== null && e !== void 0 && e;
  }
  get flagsEndpointWasHit() {
    var e, r;
    return (e = (r = this.featureFlags) == null ? void 0 : r.hasLoadedFlags) !== null && e !== void 0 && e;
  }
  constructor() {
    var e;
    this.webPerformance = new F5(), this.pi = !1, this.version = Ge.LIB_VERSION, this.gi = new M2(), this.fi = [], this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = fa(), this.SentryIntegration = u5, this.sentryIntegration = (i) => (function(n, o) {
      var s = V1(n, o);
      return { name: F1, processEvent: (a) => s(a) };
    })(this, i), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this.mi = !1, this.bi = null, this.yi = null, this.wi = null, this.scrollManager = new S5(this), this.pageViewManager = new ea(this), this.rateLimiter = new m5(this), this.requestRouter = new P5(this), this.consent = new l5(this), this.externalIntegrations = new H5(this);
    var r = (e = rt.__defaultExtensionClasses) !== null && e !== void 0 ? e : {};
    this.featureFlags = r.featureFlags && new r.featureFlags(this), this.toolbar = r.toolbar && new r.toolbar(this), this.surveys = r.surveys && new r.surveys(this), this.conversations = r.conversations && new r.conversations(this), this.logs = r.logs && new r.logs(this), this.experiments = r.experiments && new r.experiments(this), this.exceptions = r.exceptions && new r.exceptions(this), this.people = { set: (i, n, o) => {
      var s = ve(i) ? { [i]: n } : i;
      this.setPersonProperties(s), o?.({});
    }, set_once: (i, n, o) => {
      var s = ve(i) ? { [i]: n } : i;
      this.setPersonProperties(void 0, s), o?.({});
    } }, this.on("eventCaptured", ((i) => M.info('send "' + i?.event + '"', i)));
  }
  init(e, r, i) {
    if (i && i !== er) {
      var n, o = (n = Kr[i]) !== null && n !== void 0 ? n : new rt();
      return o._init(e, r, i), Kr[i] = o, Kr[er][i] = o, o;
    }
    return this._init(e, r, i);
  }
  _init(e, r, i) {
    var n;
    if (r === void 0 && (r = {}), I(e) || Eo(e)) return M.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
    if (this.__loaded) return console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"), this;
    this.__loaded = !0, this.config = {}, r.debug = this.Ei(r.debug), this.Si = r, this.xi = [], r.person_profiles ? this.yi = r.person_profiles : r.process_person && (this.yi = r.process_person), this.set_config(pe({}, fa(r.defaults), va(r), { name: i, token: e })), this.config.on_xhr_error && M.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = r.disable_compression ? void 0 : ft.GZipJS;
    var o = this.Ti();
    this.persistence = new Tn(this.config, o), this.sessionPersistence = this.config.persistence === "sessionStorage" || this.config.persistence === "memory" ? this.persistence : new Tn(R({}, this.config, { persistence: "sessionStorage" }), o);
    var s = R({}, this.persistence.props), a = R({}, this.sessionPersistence.props);
    this.register({ $initialization_time: (/* @__PURE__ */ new Date()).toISOString() }), this.$i = new k5(((g) => this.ki(g)), this.config.request_queue_config), this.Ri = new E5(this), this.__request_queue = [];
    var l = this.config.cookieless_mode === Xe || this.config.cookieless_mode === ht && this.consent.isExplicitlyOptedOut();
    if (l || (this.sessionManager = new ca(this), this.sessionPropsManager = new la(this, this.sessionManager, this.persistence)), this.config.__preview_deferred_init_extensions ? (M.info("Deferring extension initialization to improve startup performance"), setTimeout((() => {
      this.Pi(l);
    }), 0)) : (M.info("Initializing extensions synchronously"), this.Pi(l)), Ge.DEBUG = Ge.DEBUG || this.config.debug, Ge.DEBUG && M.info("Starting in debug mode", { this: this, config: r, thisC: R({}, this.config), p: s, s: a }), ((n = r.bootstrap) == null ? void 0 : n.distinctID) !== void 0) {
      var u = r.bootstrap.distinctID, d = this.get_distinct_id(), p = this.persistence.get_property(Ke);
      if (r.bootstrap.isIdentifiedID && d != null && d !== u && p === Yt) this.identify(u);
      else if (r.bootstrap.isIdentifiedID && d != null && d !== u && p === Qt) M.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
      else {
        var h = this.config.get_device_id(Pt()), f = r.bootstrap.isIdentifiedID ? h : u;
        this.persistence.set_property(Ke, r.bootstrap.isIdentifiedID ? Qt : Yt), this.register({ distinct_id: u, $device_id: f });
      }
    }
    if (l) this.register_once({ distinct_id: Sr, $device_id: null }, "");
    else if (!this.get_distinct_id()) {
      var v = this.config.get_device_id(Pt());
      this.register_once({ distinct_id: v, $device_id: v }, ""), this.persistence.set_property(Ke, Yt);
    }
    return fe(C, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), { passive: !1 }), r.segment ? (function(g, m) {
      var w = g.config.segment;
      if (!w) return m();
      (function(y, x) {
        var _ = y.config.segment;
        if (!_) return x();
        var k = (E) => {
          var b = () => E.anonymousId() || Pt();
          y.config.get_device_id = b, E.id() && (y.register({ distinct_id: E.id(), $device_id: b() }), y.persistence.set_property(Ke, Qt)), x();
        }, A = _.user();
        "then" in A && gt(A.then) ? A.then(k) : k(A);
      })(g, (() => {
        w.register(((y) => {
          Promise && Promise.resolve || Hn.warn("This browser does not have Promise support, and can not use the segment integration");
          var x = (_, k) => {
            if (!k) return _;
            _.event.userId || _.event.anonymousId === y.get_distinct_id() || (Hn.info("No userId set, resetting PostHog"), y.reset()), _.event.userId && _.event.userId !== y.get_distinct_id() && (Hn.info("UserId set, identifying with PostHog"), y.identify(_.event.userId));
            var A = y.calculateEventProperties(k, _.event.properties);
            return _.event.properties = Object.assign({}, A, _.event.properties), _;
          };
          return { name: "PostHog JS", type: "enrichment", version: "1.0.0", isLoaded: () => !0, load: () => Promise.resolve(), track: (_) => x(_, _.event.event), page: (_) => x(_, $t), identify: (_) => x(_, Nn), screen: (_) => x(_, "$screen") };
        })(g)).then((() => {
          m();
        }));
      }));
    })(this, (() => this.Oi())) : this.Oi(), gt(this.config._onCapture) && this.config._onCapture !== Qo && (M.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", ((g) => this.config._onCapture(g.event, g)))), this.config.ip && M.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'), this;
  }
  Pi(e) {
    var r, i, n, o, s, a, l, u = performance.now(), d = R({}, rt.__defaultExtensionClasses, this.config.__extensionClasses), p = [];
    d.featureFlags && this.fi.push(this.featureFlags = (r = this.featureFlags) !== null && r !== void 0 ? r : new d.featureFlags(this)), d.exceptions && this.fi.push(this.exceptions = (i = this.exceptions) !== null && i !== void 0 ? i : new d.exceptions(this)), d.historyAutocapture && this.fi.push(this.historyAutocapture = new d.historyAutocapture(this)), d.tracingHeaders && this.fi.push(new d.tracingHeaders(this)), d.siteApps && this.fi.push(this.siteApps = new d.siteApps(this)), d.sessionRecording && !e && this.fi.push(this.sessionRecording = new d.sessionRecording(this)), this.config.disable_scroll_properties || p.push((() => {
      this.scrollManager.startMeasuringScrollPosition();
    })), d.autocapture && this.fi.push(this.autocapture = new d.autocapture(this)), d.surveys && this.fi.push(this.surveys = (n = this.surveys) !== null && n !== void 0 ? n : new d.surveys(this)), d.logs && this.fi.push(this.logs = (o = this.logs) !== null && o !== void 0 ? o : new d.logs(this)), d.conversations && this.fi.push(this.conversations = (s = this.conversations) !== null && s !== void 0 ? s : new d.conversations(this)), d.productTours && this.fi.push(this.productTours = new d.productTours(this)), d.heatmaps && this.fi.push(this.heatmaps = new d.heatmaps(this)), d.webVitalsAutocapture && this.fi.push(this.webVitalsAutocapture = new d.webVitalsAutocapture(this)), d.exceptionObserver && this.fi.push(this.exceptionObserver = new d.exceptionObserver(this)), d.deadClicksAutocapture && this.fi.push(this.deadClicksAutocapture = new d.deadClicksAutocapture(this, d5)), d.toolbar && this.fi.push(this.toolbar = (a = this.toolbar) !== null && a !== void 0 ? a : new d.toolbar(this)), d.experiments && this.fi.push(this.experiments = (l = this.experiments) !== null && l !== void 0 ? l : new d.experiments(this)), this.fi.forEach(((h) => {
      h.initialize && p.push((() => {
        h.initialize == null || h.initialize();
      }));
    })), p.push((() => {
      if (this.Ii) {
        var h = this.Ii;
        this.Ii = void 0, this.ft(h);
      }
    })), this.Ci(p, u);
  }
  Ci(e, r) {
    for (; e.length > 0; ) {
      if (this.config.__preview_deferred_init_extensions && performance.now() - r >= 30 && e.length > 0) return void setTimeout((() => {
        this.Ci(e, r);
      }), 0);
      var i = e.shift();
      if (i) try {
        i();
      } catch (o) {
        M.error("Error initializing extension:", o);
      }
    }
    var n = Math.round(performance.now() - r);
    this.register_for_session({ $sdk_debug_extensions_init_method: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous", $sdk_debug_extensions_init_time_ms: n }), this.config.__preview_deferred_init_extensions && M.info("PostHog extensions initialized (" + n + "ms)");
  }
  ft(e) {
    var r;
    if (!P || !P.body) return M.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((() => {
      this.ft(e);
    }), 500);
    this.config.__preview_deferred_init_extensions && (this.Ii = e), this.compression = void 0, e.supportedCompression && !this.config.disable_compression && (this.compression = q(e.supportedCompression, ft.GZipJS) ? ft.GZipJS : q(e.supportedCompression, ft.Base64) ? ft.Base64 : void 0), (r = e.analytics) != null && r.endpoint && (this.analyticsDefaultEndpoint = e.analytics.endpoint), this.set_config({ person_profiles: this.yi ? this.yi : Uo }), this.fi.forEach(((i) => i.onRemoteConfig == null ? void 0 : i.onRemoteConfig(e)));
  }
  Oi() {
    try {
      this.config.loaded(this);
    } catch (i) {
      M.critical("`loaded` function failed", i);
    }
    if (this.Fi(), this.config.internal_or_test_user_hostname && ye != null && ye.hostname) {
      var e = ye.hostname, r = this.config.internal_or_test_user_hostname;
      (typeof r == "string" ? e === r : r.test(e)) && this.setInternalOrTestUser();
    }
    this.config.capture_pageview && setTimeout((() => {
      (this.consent.isOptedIn() || this.config.cookieless_mode === Xe) && this.Ai();
    }), 1), this.Mi = new W1(this), this.Mi.load();
  }
  Fi() {
    var e;
    this.is_capturing() && this.config.request_batching && ((e = this.$i) == null || e.enable());
  }
  _dom_loaded() {
    this.is_capturing() && fi(this.__request_queue, ((e) => this.ki(e))), this.__request_queue = [], this.Fi();
  }
  _handle_unload() {
    var e, r, i;
    (e = this.surveys) == null || e.handlePageUnload(), this.config.request_batching ? (this.Di() && this.capture(Ln), (r = this.$i) == null || r.unload(), (i = this.Ri) == null || i.unload()) : this.Di() && this.capture(Ln, null, { transport: "sendBeacon" });
  }
  _send_request(e) {
    this.__loaded && (rl ? this.__request_queue.push(e) : this.rateLimiter.isServerRateLimited(e.batchKey) || (e.transport = e.transport || this.config.api_transport, e.url = Ji(e.url, { ip: this.config.ip ? 1 : 0 }), e.headers = R({}, this.config.request_headers, e.headers), e.compression = e.compression === "best-available" ? this.compression : e.compression, e.disableXHRCredentials = this.config.__preview_disable_xhr_credentials, this.config.__preview_disable_beacon && (e.disableTransport = ["sendBeacon"]), e.fetchOptions = e.fetchOptions || this.config.fetch_options, ((r) => {
      var i, n, o, s = R({}, r);
      s.timeout = s.timeout || 6e4, s.url = Ji(s.url, { _: (/* @__PURE__ */ new Date()).getTime().toString(), ver: Ge.JS_SDK_VERSION, compression: s.compression });
      var a = (i = s.transport) !== null && i !== void 0 ? i : "fetch", l = Si.filter(((d) => !s.disableTransport || !d.transport || !s.disableTransport.includes(d.transport))), u = (n = (o = (function(d, p) {
        for (var h = 0; d.length > h; h++) if (d[h].transport === a) return d[h];
      })(l)) == null ? void 0 : o.method) !== null && n !== void 0 ? n : l[0].method;
      if (!u) throw new Error("No available transport method");
      u(s);
    })(R({}, e, { callback: (r) => {
      var i, n;
      this.rateLimiter.checkForLimiting(r), 400 > r.statusCode || (i = (n = this.config).on_request_error) == null || i.call(n, r), e.callback == null || e.callback(r);
    } }))));
  }
  ki(e) {
    this.Ri ? this.Ri.retriableRequest(e) : this._send_request(e);
  }
  _execute_array(e) {
    Zn++;
    try {
      var r, i = [], n = [], o = [];
      fi(e, ((a) => {
        a && (Q(r = a[0]) ? o.push(a) : gt(a) ? a.call(this) : Q(a) && r === "alias" ? i.push(a) : Q(a) && r.indexOf("capture") !== -1 && gt(this[r]) ? o.push(a) : n.push(a));
      }));
      var s = function(a, l) {
        fi(a, (function(u) {
          if (Q(u[0])) {
            var d = l;
            re(u, (function(p) {
              d = d[p[0]].apply(d, p.slice(1));
            }));
          } else l[u[0]].apply(l, u.slice(1));
        }));
      };
      s(i, this), s(n, this), s(o, this);
    } finally {
      Zn--;
    }
  }
  push(e) {
    if (Zn > 0 && Q(e) && ve(e[0])) {
      var r = rt.prototype[e[0]];
      gt(r) && r.apply(this, e.slice(1));
    } else this._execute_array([e]);
  }
  capture(e, r, i) {
    var n, o, s, a, l, u;
    if (this.__loaded && this.persistence && this.sessionPersistence && this.$i) {
      if (this.is_capturing()) if (!I(e) && ve(e)) {
        var d = !this.config.opt_out_useragent_filter && this._is_bot();
        if (!d || this.config.__preview_capture_bot_pageviews) {
          var p = i != null && i.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
          if (p == null || !p.isRateLimited) {
            r != null && r.$current_url && !ve(r?.$current_url) && (M.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), r == null || delete r.$current_url), e !== "$exception" || i != null && i.Li || M.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
            var h = /* @__PURE__ */ new Date(), f = i?.timestamp || h, v = Pt(), g = { uuid: v, event: e, properties: this.calculateEventProperties(e, r || {}, f, v) };
            e === $t && this.config.__preview_capture_bot_pageviews && d && (g.event = "$bot_pageview", g.properties.$browser_type = "bot"), p && (g.properties.$lib_rate_limit_remaining_tokens = p.remainingTokens), i?.$set && (g.$set = i?.$set);
            var m, w = this.Ui(i?.$set_once, e !== Ks, e === Nn);
            if (w && (g.$set_once = w), (o = g, s = i != null && i._noTruncate ? null : this.config.properties_string_max_length, a = o, l = (b) => ve(b) && !_t(s) ? b.slice(0, s) : b, u = /* @__PURE__ */ new Set(), g = (function b(S, D) {
              return S !== Object(S) ? l ? l(S) : S : u.has(S) ? void 0 : (u.add(S), Q(S) ? (V = [], fi(S, ((H) => {
                V.push(b(H));
              }))) : (V = {}, re(S, ((H, U) => {
                u.has(H) || (V[U] = b(H));
              }))), V);
              var V;
            })(a)).timestamp = f, I(i?.timestamp) || (g.properties.$event_time_override_provided = !0, g.properties.$event_time_override_system_time = h), e === Zr.DISMISSED || e === Zr.SENT) {
              var y = r?.[Vn.SURVEY_ID], x = r?.[Vn.SURVEY_ITERATION];
              m = { id: y, current_iteration: x }, localStorage.getItem(ha(m)) || localStorage.setItem(ha(m), "true"), g.$set = R({}, g.$set, { [M5({ id: y, current_iteration: x }, e === Zr.SENT ? "responded" : "dismissed")]: !0 });
            } else e === Zr.SHOWN && (g.$set = R({}, g.$set, { [Vn.SURVEY_LAST_SEEN_DATE]: (/* @__PURE__ */ new Date()).toISOString() }));
            if (e === v5.SHOWN) {
              var _ = r?.[ra.TOUR_TYPE];
              _ && (g.$set = R({}, g.$set, { [ra.TOUR_LAST_SEEN_DATE + "/" + _]: (/* @__PURE__ */ new Date()).toISOString() }));
            }
            var k = R({}, g.properties.$set, g.$set);
            if (tr(k) || this.setPersonPropertiesForFlags(k), !W(this.config.before_send)) {
              var A = this.Ni(g);
              if (!A) return;
              g = A;
            }
            this.gi.emit("eventCaptured", g);
            var E = { method: "POST", url: (n = i?._url) !== null && n !== void 0 ? n : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint), data: g, compression: "best-available", batchKey: i?._batchKey };
            return !this.config.request_batching || i && (i == null || !i._batchKey) || i != null && i.send_instantly ? this.ki(E) : this.$i.enqueue(E), g;
          }
          M.critical("This capture call is ignored due to client rate limiting.");
        }
      } else M.error("No event name provided to posthog.capture");
    } else M.uninitializedWarning("posthog.capture");
  }
  _addCaptureHook(e) {
    return this.on("eventCaptured", ((r) => e(r.event, r)));
  }
  calculateEventProperties(e, r, i, n, o) {
    if (i = i || /* @__PURE__ */ new Date(), !this.persistence || !this.sessionPersistence) return r;
    var s = o ? void 0 : this.persistence.remove_event_timer(e), a = R({}, r);
    if (a.token = this.config.token, a.$config_defaults = this.config.defaults, (this.config.cookieless_mode == Xe || this.config.cookieless_mode == ht && this.consent.isExplicitlyOptedOut()) && (a.$cookieless_mode = !0), e === "$snapshot") {
      var l = R({}, this.persistence.properties(), this.sessionPersistence.properties());
      return a.distinct_id = l.distinct_id, (!ve(a.distinct_id) && !st(a.distinct_id) || Eo(a.distinct_id)) && M.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), a;
    }
    var u, d = (function(w, y) {
      var x, _, k, A;
      if (!Te) return {};
      var E, b, S, D, V, H, U, z, G = w ? [...fr, ...y || []] : [], [J, ue] = (function(L) {
        for (var _e = 0; Ds.length > _e; _e++) {
          var [Me, Ie] = Ds[_e], De = Me.exec(L), K = De && (gt(Ie) ? Ie(De, L) : Ie);
          if (K) return K;
        }
        return ["", ""];
      })(Te);
      return pe(S2({ $os: J, $os_version: ue, $browser: S1(Te, navigator.vendor), $device: Us(Te), $device_type: (b = Te, S = { userAgentDataPlatform: (x = navigator) == null || (x = x.userAgentData) == null ? void 0 : x.platform, maxTouchPoints: (_ = navigator) == null ? void 0 : _.maxTouchPoints, screenWidth: C == null || (k = C.screen) == null ? void 0 : k.width, screenHeight: C == null || (A = C.screen) == null ? void 0 : A.height, devicePixelRatio: C?.devicePixelRatio }, z = Us(b), z === p1 || z === h1 || z === "Kobo" || z === "Kindle Fire" || z === E1 ? hr : z === ei || z === or || z === ti || z === Ro ? "Console" : z === f1 ? "Wearable" : z ? Ze : S?.userAgentDataPlatform === "Android" && ((D = S?.maxTouchPoints) !== null && D !== void 0 ? D : 0) > 0 ? 600 > Math.min((V = S?.screenWidth) !== null && V !== void 0 ? V : 0, (H = S?.screenHeight) !== null && H !== void 0 ? H : 0) / ((U = S?.devicePixelRatio) !== null && U !== void 0 ? U : 1) ? Ze : hr : "Desktop"), $timezone: q1(), $timezone_offset: g5() }), { $current_url: ri(ye?.href, G, ii), $host: ye?.host, $pathname: ye?.pathname, $raw_user_agent: Te.length > 1e3 ? Te.substring(0, 997) + "..." : Te, $browser_version: Mu(Te, navigator.vendor), $browser_language: ta(), $browser_language_prefix: (E = ta(), typeof E == "string" ? E.split("-")[0] : void 0), $screen_height: C?.screen.height, $screen_width: C?.screen.width, $viewport_height: C?.innerHeight, $viewport_width: C?.innerWidth, $lib: Ge.LIB_NAME, $lib_version: Ge.LIB_VERSION, $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10), $time: Date.now() / 1e3 });
    })(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties);
    if (this.sessionManager) {
      var { sessionId: p, windowId: h } = this.sessionManager.checkAndGetSessionAndWindowId(o, i.getTime());
      a.$session_id = p, a.$window_id = h;
    }
    this.sessionPropsManager && pe(a, this.sessionPropsManager.getSessionProps());
    try {
      var f;
      this.sessionRecording && pe(a, this.sessionRecording.sdkDebugProperties), a.$sdk_debug_retry_queue_size = (f = this.Ri) == null ? void 0 : f.length;
    } catch (w) {
      a.$sdk_debug_error_capturing_properties = String(w);
    }
    if (this.requestRouter.region === Go && (a.$lib_custom_api_host = this.config.api_host), u = e !== $t || o ? e !== Ln || o ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(i) : this.pageViewManager.doPageView(i, n), a = pe(a, u), e === $t && P && (a.title = P.title), !I(s)) {
      var v = i.getTime() - s;
      a.$duration = parseFloat((v / 1e3).toFixed(3));
    }
    Te && this.config.opt_out_useragent_filter && (a.$browser_type = this._is_bot() ? "bot" : "browser"), (a = pe({}, d, this.persistence.properties(), this.sessionPersistence.properties(), a)).$is_identified = this._isIdentified(), Q(this.config.property_denylist) ? re(this.config.property_denylist, (function(w) {
      delete a[w];
    })) : M.error(tl + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
    var g = this.config.sanitize_properties;
    g && (M.error(ga), a = g(a, e));
    var m = this.ji();
    return a.$process_person_profile = m, m && !o && this.zi("_calculate_event_properties"), a;
  }
  Ui(e, r, i) {
    var n;
    if (r === void 0 && (r = !0), i === void 0 && (i = !1), !this.persistence || !this.ji() || this.pi && !i) return e;
    var o = this.persistence.get_initial_props(), s = (n = this.sessionPropsManager) == null ? void 0 : n.getSetOnceProps(), a = pe({}, o, s || {}, e || {}), l = this.config.sanitize_properties;
    return l && (M.error(ga), a = l(a, "$set_once")), r && (this.pi = !0), tr(a) ? void 0 : a;
  }
  register(e, r) {
    var i;
    (i = this.persistence) == null || i.register(e, r);
  }
  register_once(e, r, i) {
    var n;
    (n = this.persistence) == null || n.register_once(e, r, i);
  }
  register_for_session(e) {
    var r;
    (r = this.sessionPersistence) == null || r.register(e);
  }
  unregister(e) {
    var r;
    (r = this.persistence) == null || r.unregister(e);
  }
  unregister_for_session(e) {
    var r;
    (r = this.sessionPersistence) == null || r.unregister(e);
  }
  Bi(e, r) {
    this.register({ [e]: r });
  }
  getFeatureFlag(e, r) {
    var i;
    return (i = this.featureFlags) == null ? void 0 : i.getFeatureFlag(e, r);
  }
  getFeatureFlagPayload(e) {
    var r;
    return (r = this.featureFlags) == null ? void 0 : r.getFeatureFlagPayload(e);
  }
  getFeatureFlagResult(e, r) {
    var i;
    return (i = this.featureFlags) == null ? void 0 : i.getFeatureFlagResult(e, r);
  }
  isFeatureEnabled(e, r) {
    var i;
    return (i = this.featureFlags) == null ? void 0 : i.isFeatureEnabled(e, r);
  }
  reloadFeatureFlags() {
    var e;
    (e = this.featureFlags) == null || e.reloadFeatureFlags();
  }
  updateFlags(e, r, i) {
    var n;
    (n = this.featureFlags) == null || n.updateFlags(e, r, i);
  }
  updateEarlyAccessFeatureEnrollment(e, r, i) {
    var n;
    (n = this.featureFlags) == null || n.updateEarlyAccessFeatureEnrollment(e, r, i);
  }
  getEarlyAccessFeatures(e, r, i) {
    var n;
    return r === void 0 && (r = !1), (n = this.featureFlags) == null ? void 0 : n.getEarlyAccessFeatures(e, r, i);
  }
  on(e, r) {
    return this.gi.on(e, r);
  }
  onFeatureFlags(e) {
    return this.featureFlags ? this.featureFlags.onFeatureFlags(e) : (e([], {}, { errorsLoading: !0 }), () => {
    });
  }
  onSurveysLoaded(e) {
    return this.surveys ? this.surveys.onSurveysLoaded(e) : (e([], { isLoaded: !1, error: Nr }), () => {
    });
  }
  onSessionId(e) {
    var r, i;
    return (r = (i = this.sessionManager) == null ? void 0 : i.onSessionId(e)) !== null && r !== void 0 ? r : () => {
    };
  }
  getSurveys(e, r) {
    r === void 0 && (r = !1), this.surveys ? this.surveys.getSurveys(e, r) : e([], { isLoaded: !1, error: Nr });
  }
  getActiveMatchingSurveys(e, r) {
    r === void 0 && (r = !1), this.surveys ? this.surveys.getActiveMatchingSurveys(e, r) : e([], { isLoaded: !1, error: Nr });
  }
  renderSurvey(e, r) {
    var i;
    (i = this.surveys) == null || i.renderSurvey(e, r);
  }
  displaySurvey(e, r) {
    var i;
    r === void 0 && (r = L5), (i = this.surveys) == null || i.displaySurvey(e, r);
  }
  cancelPendingSurvey(e) {
    var r;
    (r = this.surveys) == null || r.cancelPendingSurvey(e);
  }
  canRenderSurvey(e) {
    var r, i;
    return (r = (i = this.surveys) == null ? void 0 : i.canRenderSurvey(e)) !== null && r !== void 0 ? r : { visible: !1, disabledReason: Nr };
  }
  canRenderSurveyAsync(e, r) {
    var i, n;
    return r === void 0 && (r = !1), (i = (n = this.surveys) == null ? void 0 : n.canRenderSurveyAsync(e, r)) !== null && i !== void 0 ? i : Promise.resolve({ visible: !1, disabledReason: Nr });
  }
  identify(e, r, i) {
    if (!this.__loaded || !this.persistence) return M.uninitializedWarning("posthog.identify");
    if (st(e) && (e = e.toString(), M.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), e) if (["distinct_id", "distinctid"].includes(e.toLowerCase())) M.critical('The string "' + e + '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.');
    else if (e !== Sr) {
      if (this.zi("posthog.identify")) {
        var n = this.get_distinct_id();
        this.register({ $user_id: e }), this.get_property(zi) || this.register_once({ $had_persisted_distinct_id: !0, $device_id: n }, ""), e !== n && e !== this.get_property(zr) && (this.unregister(zr), this.register({ distinct_id: e }));
        var o, s = (this.persistence.get_property(Ke) || Yt) === Yt;
        e !== n && s ? (this.persistence.set_property(Ke, Qt), this.setPersonPropertiesForFlags(R({}, i || {}, r || {}), !1), this.capture(Nn, { distinct_id: e, $anon_distinct_id: n }, { $set: r || {}, $set_once: i || {} }), this.wi = da(e, r, i), (o = this.featureFlags) == null || o.setAnonymousDistinctId(n)) : (r || i) && this.setPersonProperties(r, i), e !== n && (this.reloadFeatureFlags(), this.unregister(Yr));
      }
    } else M.critical('The string "' + Sr + '" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.');
    else M.error("Unique user id has not been set in posthog.identify");
  }
  setPersonProperties(e, r) {
    if ((e || r) && this.zi("posthog.setPersonProperties")) {
      var i = da(this.get_distinct_id(), e, r);
      this.wi !== i ? (this.setPersonPropertiesForFlags(R({}, r || {}, e || {})), this.capture("$set", { $set: e || {}, $set_once: r || {} }), this.wi = i) : M.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.");
    }
  }
  group(e, r, i) {
    if (e && r) {
      var n = this.getGroups();
      n[e] !== r && this.resetGroupPropertiesForFlags(e), this.register({ $groups: R({}, n, { [e]: r }) }), i && (this.capture(Ks, { $group_type: e, $group_key: r, $group_set: i }), this.setGroupPropertiesForFlags({ [e]: i })), n[e] === r || i || this.reloadFeatureFlags();
    } else M.error("posthog.group requires a group type and group key");
  }
  resetGroups() {
    this.register({ $groups: {} }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
  }
  setPersonPropertiesForFlags(e, r) {
    var i;
    r === void 0 && (r = !0), (i = this.featureFlags) == null || i.setPersonPropertiesForFlags(e, r);
  }
  resetPersonPropertiesForFlags() {
    var e;
    (e = this.featureFlags) == null || e.resetPersonPropertiesForFlags();
  }
  setGroupPropertiesForFlags(e, r) {
    var i;
    r === void 0 && (r = !0), this.zi("posthog.setGroupPropertiesForFlags") && ((i = this.featureFlags) == null || i.setGroupPropertiesForFlags(e, r));
  }
  resetGroupPropertiesForFlags(e) {
    var r;
    (r = this.featureFlags) == null || r.resetGroupPropertiesForFlags(e);
  }
  reset(e) {
    var r, i, n, o, s, a, l;
    if (M.info("reset"), !this.__loaded) return M.uninitializedWarning("posthog.reset");
    var u = this.get_property(zi);
    if (this.consent.reset(), (r = this.persistence) == null || r.clear(), (i = this.sessionPersistence) == null || i.clear(), (n = this.surveys) == null || n.reset(), (o = this.Mi) == null || o.stop(), (s = this.featureFlags) == null || s.reset(), (a = this.persistence) == null || a.set_property(Ke, Yt), (l = this.sessionManager) == null || l.resetSessionId(), this.wi = null, this.config.cookieless_mode === Xe) this.register_once({ distinct_id: Sr, $device_id: null }, "");
    else {
      var d = this.config.get_device_id(Pt());
      this.register_once({ distinct_id: d, $device_id: e ? d : u }, "");
    }
    this.register({ $last_posthog_reset: (/* @__PURE__ */ new Date()).toISOString() }, 1), this.reloadFeatureFlags();
  }
  get_distinct_id() {
    return this.get_property("distinct_id");
  }
  getGroups() {
    return this.get_property("$groups") || {};
  }
  get_session_id() {
    var e, r;
    return (e = (r = this.sessionManager) == null ? void 0 : r.checkAndGetSessionAndWindowId(!0).sessionId) !== null && e !== void 0 ? e : "";
  }
  get_session_replay_url(e) {
    if (!this.sessionManager) return "";
    var { sessionId: r, sessionStartTimestamp: i } = this.sessionManager.checkAndGetSessionAndWindowId(!0), n = this.requestRouter.endpointFor("ui", "/project/" + this.config.token + "/replay/" + r);
    if (e != null && e.withTimestamp && i) {
      var o, s = (o = e.timestampLookBack) !== null && o !== void 0 ? o : 10;
      if (!i) return n;
      n += "?t=" + Math.max(Math.floor(((/* @__PURE__ */ new Date()).getTime() - i) / 1e3) - s, 0);
    }
    return n;
  }
  alias(e, r) {
    return e === this.get_property(I1) ? (M.critical("Attempting to create alias for existing People user - aborting."), -2) : this.zi("posthog.alias") ? (I(r) && (r = this.get_distinct_id()), e !== r ? (this.Bi(zr, e), this.capture("$create_alias", { alias: e, distinct_id: r })) : (M.warn("alias matches current distinct_id - skipping api call."), this.identify(e), -1)) : void 0;
  }
  set_config(e) {
    var r = R({}, this.config);
    if (Ce(e)) {
      var i, n, o, s, a, l, u, d, p;
      pe(this.config, va(e));
      var h = this.Ti();
      (i = this.persistence) == null || i.update_config(this.config, r, h), this.sessionPersistence = this.config.persistence === "sessionStorage" || this.config.persistence === "memory" ? this.persistence : new Tn(R({}, this.config, { persistence: "sessionStorage" }), h);
      var f = this.Ei(this.config.debug);
      vt(f) && (this.config.debug = f), vt(this.config.debug) && (this.config.debug ? (Ge.DEBUG = !0, ae.F() && ae.L("ph_debug", !0), M.info("set_config", { config: e, oldConfig: r, newConfig: R({}, this.config) })) : (Ge.DEBUG = !1, ae.F() && ae.U("ph_debug"))), (n = this.exceptionObserver) == null || n.onConfigChange(), (o = this.sessionRecording) == null || o.startIfEnabledOrStop(), (s = this.autocapture) == null || s.startIfEnabled(), (a = this.heatmaps) == null || a.startIfEnabled(), (l = this.exceptionObserver) == null || l.startIfEnabledOrStop(), (u = this.deadClicksAutocapture) == null || u.startIfEnabledOrStop(), (d = this.surveys) == null || d.loadIfEnabled(), this.Hi(), (p = this.externalIntegrations) == null || p.startIfEnabledOrStop();
    }
  }
  _overrideSDKInfo(e, r) {
    Ge.LIB_NAME = e, Ge.LIB_VERSION = r;
  }
  startSessionRecording(e) {
    var r, i, n, o, s, a = e === !0, l = { sampling: a || !(e == null || !e.sampling), linked_flag: a || !(e == null || !e.linked_flag), url_trigger: a || !(e == null || !e.url_trigger), event_trigger: a || !(e == null || !e.event_trigger) };
    Object.values(l).some(Boolean) && ((r = this.sessionManager) == null || r.checkAndGetSessionAndWindowId(), l.sampling && ((i = this.sessionRecording) == null || i.overrideSampling()), l.linked_flag && ((n = this.sessionRecording) == null || n.overrideLinkedFlag()), l.url_trigger && ((o = this.sessionRecording) == null || o.overrideTrigger("url")), l.event_trigger && ((s = this.sessionRecording) == null || s.overrideTrigger("event"))), this.set_config({ disable_session_recording: !1 });
  }
  stopSessionRecording() {
    this.set_config({ disable_session_recording: !0 });
  }
  sessionRecordingStarted() {
    var e;
    return !((e = this.sessionRecording) == null || !e.started);
  }
  captureException(e, r) {
    if (this.exceptions) {
      var i = new Error("PostHog syntheticException"), n = this.exceptions.buildProperties(e, { handled: !0, syntheticException: i });
      return this.exceptions.sendExceptionEvent(R({}, n, r));
    }
  }
  startExceptionAutocapture(e) {
    this.set_config({ capture_exceptions: e == null || e });
  }
  stopExceptionAutocapture() {
    this.set_config({ capture_exceptions: !1 });
  }
  loadToolbar(e) {
    var r, i;
    return (r = (i = this.toolbar) == null ? void 0 : i.loadToolbar(e)) !== null && r !== void 0 && r;
  }
  get_property(e) {
    var r;
    return (r = this.persistence) == null ? void 0 : r.props[e];
  }
  getSessionProperty(e) {
    var r;
    return (r = this.sessionPersistence) == null ? void 0 : r.props[e];
  }
  toString() {
    var e, r = (e = this.config.name) !== null && e !== void 0 ? e : er;
    return r !== er && (r = er + "." + r), r;
  }
  _isIdentified() {
    var e, r;
    return ((e = this.persistence) == null ? void 0 : e.get_property(Ke)) === Qt || ((r = this.sessionPersistence) == null ? void 0 : r.get_property(Ke)) === Qt;
  }
  ji() {
    var e, r;
    return !(this.config.person_profiles === "never" || this.config.person_profiles === Uo && !this._isIdentified() && tr(this.getGroups()) && ((e = this.persistence) == null || (e = e.props) == null || !e[zr]) && ((r = this.persistence) == null || (r = r.props) == null || !r[Zi]));
  }
  Di() {
    return this.config.capture_pageleave === !0 || this.config.capture_pageleave === "if_capture_pageview" && (this.config.capture_pageview === !0 || this.config.capture_pageview === "history_change");
  }
  createPersonProfile() {
    this.ji() || this.zi("posthog.createPersonProfile") && this.setPersonProperties({}, {});
  }
  setInternalOrTestUser() {
    this.zi("posthog.setInternalOrTestUser") && this.setPersonProperties({ $internal_or_test_user: !0 });
  }
  zi(e) {
    return this.config.person_profiles === "never" ? (M.error(e + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this.Bi(Zi, !0), !0);
  }
  Ti() {
    if (this.config.cookieless_mode === "always") return !0;
    var e = this.consent.isOptedOut();
    return this.config.disable_persistence || e && !(!this.config.opt_out_persistence_by_default && this.config.cookieless_mode !== ht);
  }
  Hi() {
    var e, r, i, n, o = this.Ti();
    return ((e = this.persistence) == null ? void 0 : e.st) !== o && ((i = this.persistence) == null || i.set_disabled(o)), ((r = this.sessionPersistence) == null ? void 0 : r.st) !== o && ((n = this.sessionPersistence) == null || n.set_disabled(o)), o;
  }
  opt_in_capturing(e) {
    var r;
    if (this.config.cookieless_mode !== Xe) {
      if (this.config.cookieless_mode === ht && this.consent.isExplicitlyOptedOut()) {
        var i, n, o, s, a;
        this.reset(!0), (i = this.sessionManager) == null || i.destroy(), (n = this.pageViewManager) == null || n.destroy(), this.sessionManager = new ca(this), this.pageViewManager = new ea(this), this.persistence && (this.sessionPropsManager = new la(this, this.sessionManager, this.persistence));
        var l = (o = (s = this.config.__extensionClasses) == null ? void 0 : s.sessionRecording) !== null && o !== void 0 ? o : (a = rt.__defaultExtensionClasses) == null ? void 0 : a.sessionRecording;
        l && (this.sessionRecording = this.ci(this.sessionRecording, new l(this)));
      }
      var u, d;
      this.consent.optInOut(!0), this.Hi(), this.Fi(), (r = this.sessionRecording) == null || r.startIfEnabledOrStop(), this.config.cookieless_mode == ht && ((u = this.surveys) == null || u.loadIfEnabled()), (I(e?.captureEventName) || e != null && e.captureEventName) && this.capture((d = e?.captureEventName) !== null && d !== void 0 ? d : "$opt_in", e?.captureProperties, { send_instantly: !0 }), this.config.capture_pageview && this.Ai();
    } else M.warn(pa);
  }
  opt_out_capturing() {
    var e, r, i;
    this.config.cookieless_mode !== Xe ? (this.config.cookieless_mode === ht && this.consent.isOptedIn() && this.reset(!0), this.consent.optInOut(!1), this.Hi(), this.config.cookieless_mode === ht && (this.register({ distinct_id: Sr, $device_id: null }), (e = this.sessionManager) == null || e.destroy(), (r = this.pageViewManager) == null || r.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, (i = this.sessionRecording) == null || i.stopRecording(), this.sessionRecording = void 0, this.Ai())) : M.warn(pa);
  }
  has_opted_in_capturing() {
    return this.consent.isOptedIn();
  }
  has_opted_out_capturing() {
    return this.consent.isOptedOut();
  }
  get_explicit_consent_status() {
    var e = this.consent.consent;
    return e === 1 ? "granted" : e === 0 ? "denied" : "pending";
  }
  is_capturing() {
    return this.config.cookieless_mode === Xe || (this.config.cookieless_mode === ht ? this.consent.isExplicitlyOptedOut() || this.consent.isOptedIn() : !this.has_opted_out_capturing());
  }
  clear_opt_in_out_capturing() {
    this.consent.reset(), this.Hi();
  }
  _is_bot() {
    return je ? J1(je, this.config.custom_blocked_useragents) : void 0;
  }
  Ai() {
    P && (P.visibilityState === "visible" ? this.mi || (this.mi = !0, this.capture($t, { title: P.title }, { send_instantly: !0 }), this.bi && (P.removeEventListener(Bi, this.bi), this.bi = null)) : this.bi || (this.bi = this.Ai.bind(this), fe(P, Bi, this.bi)));
  }
  debug(e) {
    e === !1 ? (C?.console.log("You've disabled debug mode."), this.set_config({ debug: !1 })) : (C?.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({ debug: !0 }));
  }
  bt() {
    var e, r, i, n, o, s, a = this.Si || {};
    return "advanced_disable_flags" in a ? !!a.advanced_disable_flags : this.config.advanced_disable_flags !== !1 ? !!this.config.advanced_disable_flags : this.config.advanced_disable_decide === !0 ? (M.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : (i = "advanced_disable_decide", n = M, o = (r = "advanced_disable_flags") in (e = a) && !W(e[r]), s = i in e && !W(e[i]), o ? e[r] : !!s && (n && n.warn("Config field '" + i + "' is deprecated. Please use '" + r + "' instead. The old field will be removed in a future major version."), e[i]));
  }
  Ni(e) {
    if (W(this.config.before_send)) return e;
    var r = Q(this.config.before_send) ? this.config.before_send : [this.config.before_send], i = e;
    for (var n of r) {
      if (i = n(i), W(i)) {
        var o = "Event '" + e.event + "' was rejected in beforeSend function";
        return bu(e.event) ? M.warn(o + ". This can cause unexpected behavior.") : M.info(o), null;
      }
      i.properties && !tr(i.properties) || M.warn("Event '" + e.event + "' has no properties after beforeSend function, this is likely an error.");
    }
    return i;
  }
  getPageViewId() {
    var e;
    return (e = this.pageViewManager.K) == null ? void 0 : e.pageViewId;
  }
  captureTraceFeedback(e, r) {
    this.capture("$ai_feedback", { $ai_trace_id: String(e), $ai_feedback_text: r });
  }
  captureTraceMetric(e, r, i) {
    this.capture("$ai_metric", { $ai_trace_id: String(e), $ai_metric_name: r, $ai_metric_value: String(i) });
  }
  Ei(e) {
    var r = vt(e) && !e, i = ae.F() && ae.M("ph_debug") === "true";
    return !r && (!!i || e);
  }
}
function ma(t) {
  return t instanceof Element && (t.id === O1 || !(t.closest == null || !t.closest(".toolbar-global-fade-container")));
}
function un(t) {
  return !!t && t.nodeType === 1;
}
function Lt(t, e) {
  return !!t && !!t.tagName && t.tagName.toLowerCase() === e.toLowerCase();
}
function il(t) {
  return !!t && t.nodeType === 3;
}
function nl(t) {
  return !!t && t.nodeType === 11;
}
function I2(t) {
  return t ? cn(t).split(/\s+/) : [];
}
function ba(t) {
  var e = C?.location.href;
  return !!(e && t && t.some(((r) => e.match(r))));
}
function en(t) {
  var e = "";
  switch (typeof t.className) {
    case "string":
      e = t.className;
      break;
    case "object":
      e = (t.className && "baseVal" in t.className ? t.className.baseVal : null) || t.getAttribute("class") || "";
      break;
    default:
      e = "";
  }
  return I2(e);
}
function ol(t) {
  return W(t) ? null : cn(t).split(/(\s+)/).filter(((e) => Xr(e))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
}
function ni(t) {
  var e = "";
  return Xo(t) && !al(t) && t.childNodes && t.childNodes.length && re(t.childNodes, (function(r) {
    var i;
    il(r) && r.textContent && (e += (i = ol(r.textContent)) !== null && i !== void 0 ? i : "");
  })), cn(e);
}
function Ca(t) {
  return I(t.target) ? t.srcElement || null : (e = t.target) != null && e.shadowRoot ? t.composedPath()[0] || null : t.target || null;
  var e;
}
rt.__defaultExtensionClasses = {}, (function(t, e) {
  for (var r = 0; e.length > r; r++) t.prototype[e[r]] = $u(t.prototype[e[r]]);
})(rt, ["identify"]);
var L2 = ["a", "button", "form", "input", "select", "textarea", "label"];
function wa(t, e) {
  if (I(e)) return !0;
  var r, i = function(o) {
    if (e.some(((s) => o.matches(s)))) return { v: !0 };
  };
  for (var n of t) if (r = i(n)) return r.v;
  return !1;
}
function sl(t) {
  var e = t.parentNode;
  return !(!e || !un(e)) && e;
}
var V5 = ["next", "previous", "prev", ">", "<"], _a = [".ph-no-rageclick", ".ph-no-capture"], Ko = (t) => !t || Lt(t, "html") || !un(t), ya = (t, e) => {
  if (!C || Ko(t)) return { parentIsUsefulElement: !1, targetElementList: [] };
  for (var r = !1, i = [t], n = t; n.parentNode && !Lt(n, "body"); ) if (nl(n.parentNode)) i.push(n.parentNode.host), n = n.parentNode.host;
  else {
    var o = sl(n);
    if (!o) break;
    if (e || L2.indexOf(o.tagName.toLowerCase()) > -1) r = !0;
    else {
      var s = C.getComputedStyle(o);
      s && s.getPropertyValue("cursor") === "pointer" && (r = !0);
    }
    i.push(o), n = o;
  }
  return { parentIsUsefulElement: r, targetElementList: i };
};
function Xo(t) {
  for (var e = t; e.parentNode && !Lt(e, "body"); e = e.parentNode) {
    var r = en(e);
    if (q(r, "ph-sensitive") || q(r, "ph-no-capture")) return !1;
  }
  if (q(en(t), "ph-include")) return !0;
  var i = t.type || "";
  if (ve(i)) switch (i.toLowerCase()) {
    case "hidden":
    case "password":
      return !1;
  }
  var n = t.name || t.id || "";
  return !ve(n) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(n.replace(/[^a-zA-Z0-9]/g, ""));
}
function al(t) {
  return !!(Lt(t, "input") && !["button", "checkbox", "submit", "reset"].includes(t.type) || Lt(t, "select") || Lt(t, "textarea") || t.getAttribute("contenteditable") === "true");
}
var ll = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})", z5 = new RegExp("^(?:" + ll + ")$"), D5 = new RegExp(ll), cl = "\\d{3}-?\\d{2}-?\\d{4}", U5 = new RegExp("^(" + cl + ")$"), j5 = new RegExp("(" + cl + ")");
function Xr(t, e) {
  return e === void 0 && (e = !0), !(W(t) || ve(t) && (t = cn(t), (e ? z5 : D5).test((t || "").replace(/[- ]/g, "")) || (e ? U5 : j5).test(t)));
}
function xa(t) {
  var e = ni(t);
  return Xr(e = (e + " " + dl(t)).trim()) ? e : "";
}
function dl(t) {
  var e = "";
  return t && t.childNodes && t.childNodes.length && re(t.childNodes, (function(r) {
    var i;
    if (r && ((i = r.tagName) == null ? void 0 : i.toLowerCase()) === "span") try {
      var n = ni(r);
      e = (e + " " + n).trim(), r.childNodes && r.childNodes.length && (e = (e + " " + dl(r)).trim());
    } catch (o) {
      M.error("[AutoCapture]", o);
    }
  })), e;
}
function ka(t) {
  return t.replace(/"|\\"/g, '\\"');
}
function Z5(t) {
  var e = t.attr__class;
  return e ? Q(e) ? e : I2(e) : void 0;
}
class Aa {
  constructor(e) {
    this.disabled = e === !1;
    var r = Ce(e) ? e : {};
    this.thresholdPx = r.threshold_px || 30, this.timeoutMs = r.timeout_ms || 1e3, this.clickCount = r.click_count || 3, this.clicks = [];
  }
  isRageClick(e, r, i) {
    if (this.disabled) return !1;
    var n = this.clicks[this.clicks.length - 1];
    if (n && Math.abs(e - n.x) + Math.abs(r - n.y) < this.thresholdPx && this.timeoutMs > i - n.timestamp) {
      if (this.clicks.push({ x: e, y: r, timestamp: i }), this.clicks.length === this.clickCount) return !0;
    } else this.clicks = [{ x: e, y: r, timestamp: i }];
    return !1;
  }
}
var Bn = "$copy_autocapture", Ea = de("[AutoCapture]");
function qn(t, e) {
  return e.length > t ? e.slice(0, t) + "..." : e;
}
function B5(t) {
  if (t.previousElementSibling) return t.previousElementSibling;
  var e = t;
  do
    e = e.previousSibling;
  while (e && !un(e));
  return e;
}
function q5(t, e) {
  for (var r, i, { e: n, maskAllElementAttributes: o, maskAllText: s, elementAttributeIgnoreList: a, elementsChainAsString: l } = e, u = [t], d = t; d.parentNode && !Lt(d, "body"); ) nl(d.parentNode) ? (u.push(d.parentNode.host), d = d.parentNode.host) : (u.push(d.parentNode), d = d.parentNode);
  var p, h, f = [], v = {}, g = !1, m = !1;
  if (re(u, ((k) => {
    var A = Xo(k);
    k.tagName.toLowerCase() === "a" && (g = k.getAttribute("href"), g = A && g && Xr(g) && g), q(en(k), "ph-no-capture") && (m = !0), f.push((function(b, S, D, V) {
      var H = b.tagName.toLowerCase(), U = { tag_name: H };
      L2.indexOf(H) > -1 && !D && (U.$el_text = H.toLowerCase() === "a" || H.toLowerCase() === "button" ? qn(1024, xa(b)) : qn(1024, ni(b)));
      var z = en(b);
      z.length > 0 && (U.classes = z.filter((function(L) {
        return L !== "";
      }))), re(b.attributes, (function(L) {
        var _e;
        if ((!al(b) || ["name", "id", "class", "aria-label"].indexOf(L.name) !== -1) && (V == null || !V.includes(L.name)) && !S && Xr(L.value) && (!ve(_e = L.name) || _e.substring(0, 10) !== "_ngcontent" && _e.substring(0, 7) !== "_nghost")) {
          var Me = L.value;
          L.name === "class" && (Me = I2(Me).join(" ")), U["attr__" + L.name] = qn(1024, Me);
        }
      }));
      for (var G = 1, J = 1, ue = b; ue = B5(ue); ) G++, ue.tagName === b.tagName && J++;
      return U.nth_child = G, U.nth_of_type = J, U;
    })(k, o, s, a));
    var E = (function(b) {
      if (!Xo(b)) return {};
      var S = {};
      return re(b.attributes, (function(D) {
        if (D.name && D.name.indexOf("data-ph-capture-attribute") === 0) {
          var V = D.name.replace("data-ph-capture-attribute-", ""), H = D.value;
          V && H && Xr(H) && (S[V] = H);
        }
      })), S;
    })(k);
    pe(v, E);
  })), m) return { props: {}, explicitNoCapture: m };
  if (s || (f[0].$el_text = t.tagName.toLowerCase() === "a" || t.tagName.toLowerCase() === "button" ? xa(t) : ni(t)), g) {
    var w, y;
    f[0].attr__href = g;
    var x = (w = Gi(g)) == null ? void 0 : w.host, _ = C == null || (y = C.location) == null ? void 0 : y.host;
    x && _ && x !== _ && (p = g);
  }
  return { props: pe({ $event_type: n.type, $ce_version: 1 }, l ? {} : { $elements: f }, { $elements_chain: (h = f, (function(k) {
    return k.map(((A) => {
      var E, b, S = "";
      if (A.tag_name && (S += A.tag_name), A.attr_class) for (var D of (A.attr_class.sort(), A.attr_class)) S += "." + D.replace(/"/g, "");
      var V = R({}, A.text ? { text: A.text } : {}, { "nth-child": (E = A.nth_child) !== null && E !== void 0 ? E : 0, "nth-of-type": (b = A.nth_of_type) !== null && b !== void 0 ? b : 0 }, A.href ? { href: A.href } : {}, A.attr_id ? { attr_id: A.attr_id } : {}, A.attributes), H = {};
      return Ei(V).sort(((U, z) => {
        var [G] = U, [J] = z;
        return G.localeCompare(J);
      })).forEach(((U) => {
        var [z, G] = U;
        return H[ka(z.toString())] = ka(G.toString());
      })), (S += ":") + Ei(H).map(((U) => {
        var [z, G] = U;
        return z + '="' + G + '"';
      })).join("");
    })).join(";");
  })((function(k) {
    return k.map(((A) => {
      var E, b, S = { text: (E = A.$el_text) == null ? void 0 : E.slice(0, 400), tag_name: A.tag_name, href: (b = A.attr__href) == null ? void 0 : b.slice(0, 2048), attr_class: Z5(A), attr_id: A.attr__id, nth_child: A.nth_child, nth_of_type: A.nth_of_type, attributes: {} };
      return Ei(A).filter(((D) => {
        var [V] = D;
        return V.indexOf("attr__") === 0;
      })).forEach(((D) => {
        var [V, H] = D;
        return S.attributes[V] = H;
      })), S;
    }));
  })(h))) }, (r = f[0]) != null && r.$el_text ? { $el_text: (i = f[0]) == null ? void 0 : i.$el_text } : {}, p && n.type === "click" ? { $external_click_url: p } : {}, v) };
}
var Or = de("[ExceptionAutocapture]");
function Sa(t, e, r) {
  try {
    if (!(e in t)) return () => {
    };
    var i = t[e], n = r(i);
    return gt(n) && (n.prototype = n.prototype || {}, Object.defineProperties(n, { __posthog_wrapped__: { enumerable: !1, value: !0 } })), t[e] = n, () => {
      t[e] = i;
    };
  } catch {
    return () => {
    };
  }
}
var W5 = de("[TracingHeaders]"), At = de("[Web Vitals]"), Ra = 9e5, Pa = "disabled", Ma = "lazy_loading", Hr = "awaiting_config", wi = "missing_config";
de("[SessionRecording]");
var Jo = "[SessionRecording]", Et = de(Jo), G5 = de("[Heatmaps]");
function Ia(t) {
  return Ce(t) && "clientX" in t && "clientY" in t && st(t.clientX) && st(t.clientY);
}
var La = de("[Product Tours]"), Wn = "ph_product_tours", Y5 = ["$set_once", "$set"], St = de("[SiteApps]"), Na = "Error while initializing PostHog app with config id ";
function Xt(t, e, r) {
  if (W(t)) return !1;
  switch (r) {
    case "exact":
      return t === e;
    case "contains":
      var i = e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
      return new RegExp(i, "i").test(t);
    case "regex":
      try {
        return new RegExp(e).test(t);
      } catch {
        return !1;
      }
    default:
      return !1;
  }
}
class Q5 {
  constructor(e) {
    this.qi = new M2(), this.Wi = (r, i) => this.Vi(r, i) && this.Yi(r, i) && this.Gi(r, i) && this.Ji(r, i), this.Vi = (r, i) => i == null || !i.event || r?.event === i?.event, this._instance = e, this.Ki = /* @__PURE__ */ new Set(), this.Xi = /* @__PURE__ */ new Set();
  }
  init() {
    var e, r;
    I((e = this._instance) == null ? void 0 : e._addCaptureHook) || (r = this._instance) == null || r._addCaptureHook(((i, n) => {
      this.on(i, n);
    }));
  }
  register(e) {
    var r, i;
    if (!I((r = this._instance) == null ? void 0 : r._addCaptureHook) && (e.forEach(((s) => {
      var a, l;
      (a = this.Xi) == null || a.add(s), (l = s.steps) == null || l.forEach(((u) => {
        var d;
        (d = this.Ki) == null || d.add(u?.event || "");
      }));
    })), (i = this._instance) != null && i.autocapture)) {
      var n, o = /* @__PURE__ */ new Set();
      e.forEach(((s) => {
        var a;
        (a = s.steps) == null || a.forEach(((l) => {
          l != null && l.selector && o.add(l?.selector);
        }));
      })), (n = this._instance) == null || n.autocapture.setElementSelectors(o);
    }
  }
  on(e, r) {
    var i;
    r != null && e.length != 0 && (this.Ki.has(e) || this.Ki.has(r?.event)) && this.Xi && ((i = this.Xi) == null ? void 0 : i.size) > 0 && this.Xi.forEach(((n) => {
      this.Qi(r, n) && this.qi.emit("actionCaptured", n.name);
    }));
  }
  Zi(e) {
    this.onAction("actionCaptured", ((r) => e(r)));
  }
  Qi(e, r) {
    if (r?.steps == null) return !1;
    for (var i of r.steps) if (this.Wi(e, i)) return !0;
    return !1;
  }
  onAction(e, r) {
    return this.qi.on(e, r);
  }
  Yi(e, r) {
    if (r != null && r.url) {
      var i, n = e == null || (i = e.properties) == null ? void 0 : i.$current_url;
      if (!n || typeof n != "string" || !Xt(n, r.url, r.url_matching || "contains")) return !1;
    }
    return !0;
  }
  Gi(e, r) {
    return !!this.te(e, r) && !!this.ie(e, r) && !!this.ee(e, r);
  }
  te(e, r) {
    var i;
    if (r == null || !r.href) return !0;
    var n = this.re(e);
    if (n.length > 0) return n.some(((a) => Xt(a.href, r.href, r.href_matching || "exact")));
    var o, s = (e == null || (i = e.properties) == null ? void 0 : i.$elements_chain) || "";
    return !!s && Xt((o = s.match(/(?::|")href="(.*?)"/)) ? o[1] : "", r.href, r.href_matching || "exact");
  }
  ie(e, r) {
    var i;
    if (r == null || !r.text) return !0;
    var n = this.re(e);
    if (n.length > 0) return n.some(((u) => Xt(u.text, r.text, r.text_matching || "exact") || Xt(u.$el_text, r.text, r.text_matching || "exact")));
    var o, s, a, l = (e == null || (i = e.properties) == null ? void 0 : i.$elements_chain) || "";
    return !!l && (o = (function(u) {
      for (var d, p = [], h = /(?::|")text="(.*?)"/g; !W(d = h.exec(u)); ) p.includes(d[1]) || p.push(d[1]);
      return p;
    })(l), s = r.text, a = r.text_matching || "exact", o.some(((u) => Xt(u, s, a))));
  }
  ee(e, r) {
    var i, n;
    if (r == null || !r.selector) return !0;
    var o = e == null || (i = e.properties) == null ? void 0 : i.$element_selectors;
    if (o != null && o.includes(r.selector)) return !0;
    var s = (e == null || (n = e.properties) == null ? void 0 : n.$elements_chain) || "";
    if (r.selector_regex && s) try {
      return new RegExp(r.selector_regex).test(s);
    } catch {
      return !1;
    }
    return !1;
  }
  re(e) {
    var r;
    return (e == null || (r = e.properties) == null ? void 0 : r.$elements) == null ? [] : e?.properties.$elements;
  }
  Ji(e, r) {
    return r == null || !r.properties || r.properties.length === 0 || el(r.properties.reduce(((i, n) => {
      var o = Q(n.value) ? n.value.map(String) : n.value != null ? [String(n.value)] : [];
      return i[n.key] = { values: o, operator: n.operator || "exact" }, i;
    }), {}), e?.properties);
  }
}
class K5 {
  constructor(e) {
    this._instance = e, this.se = /* @__PURE__ */ new Map(), this.ne = /* @__PURE__ */ new Map(), this.oe = /* @__PURE__ */ new Map();
  }
  ae(e, r) {
    return !!e && el(e.propertyFilters, r?.properties);
  }
  le(e, r) {
    var i = /* @__PURE__ */ new Map();
    return e.forEach(((n) => {
      var o;
      (o = n.conditions) == null || (o = o[r]) == null || (o = o.values) == null || o.forEach(((s) => {
        if (s != null && s.name) {
          var a = i.get(s.name) || [];
          a.push(n.id), i.set(s.name, a);
        }
      }));
    })), i;
  }
  ue(e, r, i) {
    var n = (i === Pr.Activation ? this.se : this.ne).get(e), o = [];
    return this.he(((s) => {
      o = s.filter(((a) => n?.includes(a.id)));
    })), o.filter(((s) => {
      var a, l = (a = s.conditions) == null || (a = a[i]) == null || (a = a.values) == null ? void 0 : a.find(((u) => u.name === e));
      return this.ae(l, r);
    }));
  }
  register(e) {
    var r;
    I((r = this._instance) == null ? void 0 : r._addCaptureHook) || (this.de(e), this.ve(e));
  }
  ve(e) {
    var r = e.filter(((i) => {
      var n, o;
      return ((n = i.conditions) == null ? void 0 : n.actions) && ((o = i.conditions) == null || (o = o.actions) == null || (o = o.values) == null ? void 0 : o.length) > 0;
    }));
    r.length !== 0 && (this.ce == null && (this.ce = new Q5(this._instance), this.ce.init(), this.ce.Zi(((i) => {
      this.onAction(i);
    }))), r.forEach(((i) => {
      var n, o, s, a, l;
      i.conditions && (n = i.conditions) != null && n.actions && (o = i.conditions) != null && (o = o.actions) != null && o.values && ((s = i.conditions) == null || (s = s.actions) == null || (s = s.values) == null ? void 0 : s.length) > 0 && ((a = this.ce) == null || a.register(i.conditions.actions.values), (l = i.conditions) == null || (l = l.actions) == null || (l = l.values) == null || l.forEach(((u) => {
        if (u && u.name) {
          var d = this.oe.get(u.name);
          d && d.push(i.id), this.oe.set(u.name, d || [i.id]);
        }
      })));
    })));
  }
  de(e) {
    var r, i = e.filter(((o) => {
      var s, a;
      return ((s = o.conditions) == null ? void 0 : s.events) && ((a = o.conditions) == null || (a = a.events) == null || (a = a.values) == null ? void 0 : a.length) > 0;
    })), n = e.filter(((o) => {
      var s, a;
      return ((s = o.conditions) == null ? void 0 : s.cancelEvents) && ((a = o.conditions) == null || (a = a.cancelEvents) == null || (a = a.values) == null ? void 0 : a.length) > 0;
    }));
    i.length === 0 && n.length === 0 || ((r = this._instance) == null || r._addCaptureHook(((o, s) => {
      this.onEvent(o, s);
    })), this.se = this.le(e, Pr.Activation), this.ne = this.le(e, Pr.Cancellation));
  }
  onEvent(e, r) {
    var i, n = this.fe(), o = this.pe(), s = this._e(), a = ((i = this._instance) == null || (i = i.persistence) == null ? void 0 : i.props[o]) || [];
    if (s === e && r && a.length > 0) {
      var l, u;
      n.info("event matched, removing item from activated items", { event: e, eventPayload: r, existingActivatedItems: a });
      var d = (r == null || (l = r.properties) == null ? void 0 : l.$survey_id) || (r == null || (u = r.properties) == null ? void 0 : u.$product_tour_id);
      if (d) {
        var p = a.indexOf(d);
        0 > p || (a.splice(p, 1), this.ge(a));
      }
    } else {
      if (this.ne.has(e)) {
        var h = this.ue(e, r, Pr.Cancellation);
        h.length > 0 && (n.info("cancel event matched, cancelling items", { event: e, itemsToCancel: h.map(((v) => v.id)) }), h.forEach(((v) => {
          var g = a.indexOf(v.id);
          0 > g || a.splice(g, 1), this.me(v.id);
        })), this.ge(a));
      }
      if (this.se.has(e)) {
        n.info("event name matched", { event: e, eventPayload: r, items: this.se.get(e) });
        var f = this.ue(e, r, Pr.Activation);
        this.ge(a.concat(f.map(((v) => v.id)) || []));
      }
    }
  }
  onAction(e) {
    var r, i = this.pe(), n = ((r = this._instance) == null || (r = r.persistence) == null ? void 0 : r.props[i]) || [];
    this.oe.has(e) && this.ge(n.concat(this.oe.get(e) || []));
  }
  ge(e) {
    var r, i = this.fe(), n = this.pe(), o = [...new Set(e)].filter(((s) => !this.be(s)));
    i.info("updating activated items", { activatedItems: o }), (r = this._instance) == null || (r = r.persistence) == null || r.register({ [n]: o });
  }
  getActivatedIds() {
    var e, r = this.pe();
    return ((e = this._instance) == null || (e = e.persistence) == null ? void 0 : e.props[r]) || [];
  }
  getEventToItemsMap() {
    return this.se;
  }
  ye() {
    return this.ce;
  }
}
class X5 extends K5 {
  constructor(e) {
    super(e);
  }
  pe() {
    return "$surveys_activated";
  }
  _e() {
    return Zr.SHOWN;
  }
  he(e) {
    var r;
    (r = this._instance) == null || r.getSurveys(e);
  }
  me(e) {
    var r;
    (r = this._instance) == null || r.cancelPendingSurvey(e);
  }
  fe() {
    return $;
  }
  be() {
    return !1;
  }
  getSurveys() {
    return this.getActivatedIds();
  }
  getEventToSurveys() {
    return this.getEventToItemsMap();
  }
}
var Gn = "SDK is not enabled or survey functionality is not yet loaded", Oa = "Disabled. Not loading surveys.", J5 = C != null && C.location ? Qi(C.location.hash, "__posthog") || Qi(location.hash, "state") : null, Ha = "_postHogToolbarParams", Ta = de("[Toolbar]"), Le = de("[FeatureFlags]"), Tt = de("[FeatureFlags]", { debugEnabled: !0 }), Yn = `" failed. Feature flags didn't load in time.`, Qn = "$active_feature_flags", Rt = "$override_feature_flags", Fa = "$feature_flag_payloads", Tr = "$override_feature_flag_payloads", Va = "$feature_flag_request_id", za = (t) => {
  for (var e = {}, r = 0; t.length > r; r++) e[t[r]] = !0;
  return e;
}, Da = (t) => {
  var e = {};
  for (var [r, i] of Ei(t || {})) i && (e[r] = i);
  return e;
}, Kn = de("[Error tracking]"), Ua = "Refusing to render web experiment since the viewer is a likely bot", $5 = { icontains: (t, e) => !!C && e.href.toLowerCase().indexOf(t.toLowerCase()) > -1, not_icontains: (t, e) => !!C && e.href.toLowerCase().indexOf(t.toLowerCase()) === -1, regex: (t, e) => !!C && $i(e.href, t), not_regex: (t, e) => !!C && !$i(e.href, t), exact: (t, e) => e.href === t, is_not: (t, e) => e.href !== t };
class Re {
  get N() {
    return this._instance.config;
  }
  constructor(e) {
    var r = this;
    this.getWebExperimentsAndEvaluateDisplayLogic = function(i) {
      i === void 0 && (i = !1), r.getWebExperiments(((n) => {
        Re.we("retrieved web experiments from the server"), r.Ee = /* @__PURE__ */ new Map(), n.forEach(((o) => {
          if (o.feature_flag_key) {
            var s;
            r.Ee && (Re.we("setting flag key ", o.feature_flag_key, " to web experiment ", o), (s = r.Ee) == null || s.set(o.feature_flag_key, o));
            var a = r._instance.getFeatureFlag(o.feature_flag_key);
            ve(a) && o.variants[a] && r.Se(o.name, a, o.variants[a].transforms);
          } else if (o.variants) for (var l in o.variants) {
            var u = o.variants[l];
            Re.xe(u) && r.Se(o.name, l, u.transforms);
          }
        }));
      }), i);
    }, this._instance = e, this._instance.onFeatureFlags(((i) => {
      this.onFeatureFlags(i);
    }));
  }
  initialize() {
  }
  onFeatureFlags(e) {
    if (this._is_bot()) Re.we(Ua);
    else if (!this.N.disable_web_experiments) {
      if (W(this.Ee)) return this.Ee = /* @__PURE__ */ new Map(), this.loadIfEnabled(), void this.previewWebExperiment();
      Re.we("applying feature flags", e), e.forEach(((r) => {
        var i;
        if (this.Ee && (i = this.Ee) != null && i.has(r)) {
          var n, o = this._instance.getFeatureFlag(r), s = (n = this.Ee) == null ? void 0 : n.get(r);
          o && s != null && s.variants[o] && this.Se(s.name, o, s.variants[o].transforms);
        }
      }));
    }
  }
  previewWebExperiment() {
    var e = Re.getWindowLocation();
    if (e != null && e.search) {
      var r = Yi(e?.search, "__experiment_id"), i = Yi(e?.search, "__experiment_variant");
      r && i && (Re.we("previewing web experiments " + r + " && " + i), this.getWebExperiments(((n) => {
        this.Te(parseInt(r), i, n);
      }), !1, !0));
    }
  }
  loadIfEnabled() {
    this.N.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic();
  }
  getWebExperiments(e, r, i) {
    if (this.N.disable_web_experiments && !i) return e([]);
    var n = this._instance.get_property("$web_experiments");
    if (n && !r) return e(n);
    this._instance._send_request({ url: this._instance.requestRouter.endpointFor("api", "/api/web_experiments/?token=" + this.N.token), method: "GET", callback: (o) => e(o.statusCode === 200 && o.json && o.json.experiments || []) });
  }
  Te(e, r, i) {
    var n = i.filter(((o) => o.id === e));
    n && n.length > 0 && (Re.we("Previewing web experiment [" + n[0].name + "] with variant [" + r + "]"), this.Se(n[0].name, r, n[0].variants[r].transforms));
  }
  static xe(e) {
    return !W(e.conditions) && Re.$e(e) && Re.ke(e);
  }
  static $e(e) {
    var r;
    if (W(e.conditions) || W((r = e.conditions) == null ? void 0 : r.url)) return !0;
    var i, n, o, s = Re.getWindowLocation();
    return !!s && ((i = e.conditions) == null || !i.url || $5[(n = (o = e.conditions) == null ? void 0 : o.urlMatchType) !== null && n !== void 0 ? n : "icontains"](e.conditions.url, s));
  }
  static getWindowLocation() {
    return C?.location;
  }
  static ke(e) {
    var r;
    if (W(e.conditions) || W((r = e.conditions) == null ? void 0 : r.utm)) return !0;
    var i = z1();
    if (i.utm_source) {
      var n, o, s, a, l, u, d, p, h = (n = e.conditions) == null || (n = n.utm) == null || !n.utm_campaign || ((o = e.conditions) == null || (o = o.utm) == null ? void 0 : o.utm_campaign) == i.utm_campaign, f = (s = e.conditions) == null || (s = s.utm) == null || !s.utm_source || ((a = e.conditions) == null || (a = a.utm) == null ? void 0 : a.utm_source) == i.utm_source, v = (l = e.conditions) == null || (l = l.utm) == null || !l.utm_medium || ((u = e.conditions) == null || (u = u.utm) == null ? void 0 : u.utm_medium) == i.utm_medium, g = (d = e.conditions) == null || (d = d.utm) == null || !d.utm_term || ((p = e.conditions) == null || (p = p.utm) == null ? void 0 : p.utm_term) == i.utm_term;
      return h && v && g && f;
    }
    return !1;
  }
  static we(e) {
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; r > n; n++) i[n - 1] = arguments[n];
    M.info("[WebExperiments] " + e, i);
  }
  Se(e, r, i) {
    this._is_bot() ? Re.we(Ua) : r !== "control" ? i.forEach(((n) => {
      if (n.selector) {
        var o;
        Re.we("applying transform of variant " + r + " for experiment " + e + " ", n);
        var s = (o = document) == null ? void 0 : o.querySelectorAll(n.selector);
        s?.forEach(((a) => {
          var l = a;
          n.html && (l.innerHTML = n.html), n.css && l.setAttribute("style", n.css);
        }));
      }
    })) : Re.we("Control variants leave the page unmodified.");
  }
  _is_bot() {
    return je && this._instance ? J1(je, this.N.custom_blocked_useragents) : void 0;
  }
}
var We = de("[Conversations]"), Ft = "Conversations not available yet.", hn = { featureFlags: class {
  constructor(t) {
    this.Re = !1, this.Pe = !1, this.Oe = !1, this.Ie = !1, this.Ce = !1, this.Fe = !1, this.Ae = !1, this.Me = !1, this._instance = t, this.featureFlagEventHandlers = [];
  }
  get N() {
    return this._instance.config;
  }
  get qt() {
    return this._instance.persistence;
  }
  De(t) {
    return this._instance.get_property(t);
  }
  Le() {
    var t, e;
    return (t = (e = this.qt) == null ? void 0 : e.nt(this.N.feature_flag_cache_ttl_ms)) !== null && t !== void 0 && t;
  }
  Ue() {
    return !!this.Le() && (this.Me || this.Oe || (this.Me = !0, Le.warn("Feature flag cache is stale, triggering refresh..."), this.reloadFeatureFlags()), !0);
  }
  Ne() {
    var t, e = (t = this.N.evaluation_contexts) !== null && t !== void 0 ? t : this.N.evaluation_environments;
    return !this.N.evaluation_environments || this.N.evaluation_contexts || this.Ae || (Le.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this.Ae = !0), e != null && e.length ? e.filter(((r) => {
      var i = r && typeof r == "string" && r.trim().length > 0;
      return i || Le.error("Invalid evaluation context found:", r, "Expected non-empty string"), i;
    })) : [];
  }
  je() {
    return this.Ne().length > 0;
  }
  initialize() {
    var t, e, { config: r } = this._instance, i = (t = (e = r.bootstrap) == null ? void 0 : e.featureFlags) !== null && t !== void 0 ? t : {};
    if (Object.keys(i).length) {
      var n, o, s = (n = (o = r.bootstrap) == null ? void 0 : o.featureFlagPayloads) !== null && n !== void 0 ? n : {}, a = Object.keys(i).filter(((u) => !!i[u])).reduce(((u, d) => (u[d] = i[d] || !1, u)), {}), l = Object.keys(s).filter(((u) => a[u])).reduce(((u, d) => (s[d] && (u[d] = s[d]), u)), {});
      this.receivedFeatureFlags({ featureFlags: a, featureFlagPayloads: l });
    }
  }
  updateFlags(t, e, r) {
    var i = r != null && r.merge ? this.getFlagVariants() : {}, n = r != null && r.merge ? this.getFlagPayloads() : {}, o = R({}, i, t), s = R({}, n, e), a = {};
    for (var [l, u] of Object.entries(o)) {
      var d = typeof u == "string";
      a[l] = { key: l, enabled: !!d || !!u, variant: d ? u : void 0, reason: void 0, metadata: I(s?.[l]) ? void 0 : { id: 0, version: void 0, description: void 0, payload: s[l] } };
    }
    this.receivedFeatureFlags({ flags: a });
  }
  get hasLoadedFlags() {
    return this.Pe;
  }
  getFlags() {
    return Object.keys(this.getFlagVariants());
  }
  getFlagsWithDetails() {
    var t = this.De(No), e = this.De(Rt), r = this.De(Tr);
    if (!r && !e) return t || {};
    var i = pe({}, t || {}), n = [.../* @__PURE__ */ new Set([...Object.keys(r || {}), ...Object.keys(e || {})])];
    for (var o of n) {
      var s, a, l = i[o], u = e?.[o], d = I(u) ? (s = l?.enabled) !== null && s !== void 0 && s : !!u, p = I(u) ? l.variant : typeof u == "string" ? u : void 0, h = r?.[o], f = R({}, l, { enabled: d, variant: d ? p ?? l?.variant : void 0 });
      d !== l?.enabled && (f.original_enabled = l?.enabled), p !== l?.variant && (f.original_variant = l?.variant), h && (f.metadata = R({}, l?.metadata, { payload: h, original_payload: l == null || (a = l.metadata) == null ? void 0 : a.payload })), i[o] = f;
    }
    return this.Re || (Le.warn(" Overriding feature flag details!", { flagDetails: t, overriddenPayloads: r, finalDetails: i }), this.Re = !0), i;
  }
  getFlagVariants() {
    var t = this.De(rr), e = this.De(Rt);
    if (!e) return t || {};
    for (var r = pe({}, t), i = Object.keys(e), n = 0; i.length > n; n++) r[i[n]] = e[i[n]];
    return this.Re || (Le.warn(" Overriding feature flags!", { enabledFlags: t, overriddenFlags: e, finalFlags: r }), this.Re = !0), r;
  }
  getFlagPayloads() {
    var t = this.De(Fa), e = this.De(Tr);
    if (!e) return t || {};
    for (var r = pe({}, t || {}), i = Object.keys(e), n = 0; i.length > n; n++) r[i[n]] = e[i[n]];
    return this.Re || (Le.warn(" Overriding feature flag payloads!", { flagPayloads: t, overriddenPayloads: e, finalPayloads: r }), this.Re = !0), r;
  }
  reloadFeatureFlags() {
    this.Ie || this.N.advanced_disable_feature_flags || this.ze || (this._instance.gi.emit("featureFlagsReloading", !0), this.ze = setTimeout((() => {
      this.Be();
    }), 5));
  }
  He() {
    clearTimeout(this.ze), this.ze = void 0;
  }
  ensureFlagsLoaded() {
    this.Pe || this.Oe || this.ze || this.reloadFeatureFlags();
  }
  setAnonymousDistinctId(t) {
    this.$anon_distinct_id = t;
  }
  setReloadingPaused(t) {
    this.Ie = t;
  }
  Be(t) {
    var e;
    if (this.He(), !this._instance.bt()) if (this.Oe) this.Ce = !0;
    else {
      var r = this.N.token, i = this.De(zi), n = { token: r, distinct_id: this._instance.get_distinct_id(), groups: this._instance.getGroups(), $anon_distinct_id: this.$anon_distinct_id, person_properties: R({}, ((e = this.qt) == null ? void 0 : e.get_initial_props()) || {}, this.De(jr) || {}), group_properties: this.De(Vt), timezone: q1() };
      _t(i) || I(i) || (n.$device_id = i), (t != null && t.disableFlags || this.N.advanced_disable_feature_flags) && (n.disable_flags = !0), this.je() && (n.evaluation_contexts = this.Ne());
      var o = this._instance.requestRouter.endpointFor("flags", "/flags/?v=2" + (this.N.advanced_only_evaluate_survey_feature_flags ? "&only_evaluate_survey_feature_flags=true" : ""));
      this.Oe = !0, this._instance._send_request({ method: "POST", url: o, data: n, compression: this.N.disable_compression ? void 0 : ft.Base64, timeout: this.N.feature_flag_request_timeout_ms, callback: (s) => {
        var a, l, u, d = !0;
        if (s.statusCode === 200 && (this.Ce || (this.$anon_distinct_id = void 0), d = !1), this.Oe = !1, !n.disable_flags || this.Ce) {
          this.Fe = !d;
          var p = [];
          s.error ? s.error instanceof Error ? p.push(s.error.name === "AbortError" ? "timeout" : "connection_error") : p.push("unknown_error") : s.statusCode !== 200 && p.push("api_error_" + s.statusCode), (a = s.json) != null && a.errorsWhileComputingFlags && p.push("errors_while_computing_flags");
          var h, f = !((l = s.json) == null || (l = l.quotaLimited) == null || !l.includes("feature_flags"));
          f && p.push("quota_limited"), (u = this.qt) == null || u.register({ [To]: p }), f ? Le.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : (n.disable_flags || this.receivedFeatureFlags((h = s.json) !== null && h !== void 0 ? h : {}, d), this.Ce && (this.Ce = !1, this.Be()));
        }
      } });
    }
  }
  getFeatureFlag(t, e) {
    var r;
    if (e === void 0 && (e = {}), !e.fresh || this.Fe) if (this.Pe || this.getFlags() && this.getFlags().length > 0) {
      if (!this.Ue()) {
        var i = this.getFeatureFlagResult(t, e);
        return (r = i?.variant) !== null && r !== void 0 ? r : i?.enabled;
      }
    } else Le.warn('getFeatureFlag for key "' + t + Yn);
  }
  getFeatureFlagDetails(t) {
    return this.getFlagsWithDetails()[t];
  }
  getFeatureFlagPayload(t) {
    var e = this.getFeatureFlagResult(t, { send_event: !1 });
    return e?.payload;
  }
  getFeatureFlagResult(t, e) {
    if (e === void 0 && (e = {}), !e.fresh || this.Fe) if (this.Pe || this.getFlags() && this.getFlags().length > 0) {
      if (!this.Ue()) {
        var r = this.getFlagVariants(), i = t in r, n = r[t], o = this.getFlagPayloads()[t], s = String(n), a = this.De(Va) || void 0, l = this.De(Ui) || void 0, u = this.De(Yr) || {};
        if (this.N.advanced_feature_flags_dedup_per_session) {
          var d, p = this._instance.get_session_id(), h = this.De(Ho);
          p && p !== h && (u = {}, (d = this.qt) == null || d.register({ [Yr]: u, [Ho]: p }));
        }
        if ((e.send_event || !("send_event" in e)) && (!(t in u) || !u[t].includes(s))) {
          var f, v, g, m, w, y, x, _, k, A;
          Q(u[t]) ? u[t].push(s) : u[t] = [s], (f = this.qt) == null || f.register({ [Yr]: u });
          var E = this.getFeatureFlagDetails(t), b = [...(v = this.De(To)) !== null && v !== void 0 ? v : []];
          I(n) && b.push("flag_missing");
          var S = { $feature_flag: t, $feature_flag_response: n, $feature_flag_payload: o || null, $feature_flag_request_id: a, $feature_flag_evaluated_at: l, $feature_flag_bootstrapped_response: ((g = this.N.bootstrap) == null || (g = g.featureFlags) == null ? void 0 : g[t]) || null, $feature_flag_bootstrapped_payload: ((m = this.N.bootstrap) == null || (m = m.featureFlagPayloads) == null ? void 0 : m[t]) || null, $used_bootstrap_value: !this.Fe };
          I(E == null || (w = E.metadata) == null ? void 0 : w.version) || (S.$feature_flag_version = E.metadata.version);
          var D, V = (y = E == null || (x = E.reason) == null ? void 0 : x.description) !== null && y !== void 0 ? y : E == null || (_ = E.reason) == null ? void 0 : _.code;
          V && (S.$feature_flag_reason = V), E != null && (k = E.metadata) != null && k.id && (S.$feature_flag_id = E.metadata.id), I(E?.original_variant) && I(E?.original_enabled) || (S.$feature_flag_original_response = I(E.original_variant) ? E.original_enabled : E.original_variant), E != null && (A = E.metadata) != null && A.original_payload && (S.$feature_flag_original_payload = E == null || (D = E.metadata) == null ? void 0 : D.original_payload), b.length && (S.$feature_flag_error = b.join(",")), this._instance.capture("$feature_flag_called", S);
        }
        if (i) {
          var H = o;
          if (!I(o)) try {
            H = JSON.parse(o);
          } catch {
          }
          return { key: t, enabled: !!n, variant: typeof n == "string" ? n : void 0, payload: H };
        }
      }
    } else Le.warn('getFeatureFlagResult for key "' + t + Yn);
  }
  getRemoteConfigPayload(t, e) {
    var r = this.N.token, i = { distinct_id: this._instance.get_distinct_id(), token: r };
    this.je() && (i.evaluation_contexts = this.Ne()), this._instance._send_request({ method: "POST", url: this._instance.requestRouter.endpointFor("flags", "/flags/?v=2"), data: i, compression: this.N.disable_compression ? void 0 : ft.Base64, timeout: this.N.feature_flag_request_timeout_ms, callback(n) {
      var o, s = (o = n.json) == null ? void 0 : o.featureFlagPayloads;
      e(s?.[t] || void 0);
    } });
  }
  isFeatureEnabled(t, e) {
    if (e === void 0 && (e = {}), !e.fresh || this.Fe) {
      if (this.Pe || this.getFlags() && this.getFlags().length > 0) {
        var r = this.getFeatureFlag(t, e);
        return I(r) ? void 0 : !!r;
      }
      Le.warn('isFeatureEnabled for key "' + t + Yn);
    }
  }
  addFeatureFlagsHandler(t) {
    this.featureFlagEventHandlers.push(t);
  }
  removeFeatureFlagsHandler(t) {
    this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(((e) => e !== t));
  }
  receivedFeatureFlags(t, e) {
    if (this.qt) {
      this.Pe = !0;
      var r = this.getFlagVariants(), i = this.getFlagPayloads(), n = this.getFlagsWithDetails();
      (function(o, s, a, l, u) {
        a === void 0 && (a = {}), l === void 0 && (l = {}), u === void 0 && (u = {});
        var d = ((A) => {
          var E = A.flags;
          return E ? (A.featureFlags = Object.fromEntries(Object.keys(E).map(((b) => {
            var S;
            return [b, (S = E[b].variant) !== null && S !== void 0 ? S : E[b].enabled];
          }))), A.featureFlagPayloads = Object.fromEntries(Object.keys(E).filter(((b) => E[b].enabled)).filter(((b) => {
            var S;
            return (S = E[b].metadata) == null ? void 0 : S.payload;
          })).map(((b) => {
            var S;
            return [b, (S = E[b].metadata) == null ? void 0 : S.payload];
          })))) : Le.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), A;
        })(o), p = d.flags, h = d.featureFlags, f = d.featureFlagPayloads;
        if (h) {
          var v = o.requestId, g = o.evaluatedAt;
          if (Q(h)) {
            Le.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
            var m = {};
            if (h) for (var w = 0; h.length > w; w++) m[h[w]] = !0;
            s && s.register({ [Qn]: h, [rr]: m });
          } else {
            var y = h, x = f, _ = p;
            if (o.errorsWhileComputingFlags) if (p) {
              var k = new Set(Object.keys(p).filter(((A) => {
                var E;
                return !((E = p[A]) != null && E.failed);
              })));
              y = R({}, a, Object.fromEntries(Object.entries(y).filter(((A) => {
                var [E] = A;
                return k.has(E);
              })))), x = R({}, l, Object.fromEntries(Object.entries(x || {}).filter(((A) => {
                var [E] = A;
                return k.has(E);
              })))), _ = R({}, u, Object.fromEntries(Object.entries(_ || {}).filter(((A) => {
                var [E] = A;
                return k.has(E);
              }))));
            } else y = R({}, a, y), x = R({}, l, x), _ = R({}, u, _);
            s && s.register(R({ [Qn]: Object.keys(Da(y)), [rr]: y || {}, [Fa]: x || {}, [No]: _ || {} }, v ? { [Va]: v } : {}, g ? { [Ui]: g } : {}));
          }
        }
      })(t, this.qt, r, i, n), e || (this.Me = !1), this.qe(e);
    }
  }
  override(t, e) {
    e === void 0 && (e = !1), Le.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({ flags: t, suppressWarning: e });
  }
  overrideFeatureFlags(t) {
    if (!this._instance.__loaded || !this.qt) return Le.uninitializedWarning("posthog.featureFlags.overrideFeatureFlags");
    if (t === !1) return this.qt.unregister(Rt), this.qt.unregister(Tr), this.qe(), Tt.info("All overrides cleared");
    if (Q(t)) {
      var e = za(t);
      return this.qt.register({ [Rt]: e }), this.qe(), Tt.info("Flag overrides set", { flags: t });
    }
    if (t && typeof t == "object" && ("flags" in t || "payloads" in t)) {
      var r, i = t;
      if (this.Re = !!((r = i.suppressWarning) !== null && r !== void 0 && r), "flags" in i) {
        if (i.flags === !1) this.qt.unregister(Rt), Tt.info("Flag overrides cleared");
        else if (i.flags) {
          if (Q(i.flags)) {
            var n = za(i.flags);
            this.qt.register({ [Rt]: n });
          } else this.qt.register({ [Rt]: i.flags });
          Tt.info("Flag overrides set", { flags: i.flags });
        }
      }
      return "payloads" in i && (i.payloads === !1 ? (this.qt.unregister(Tr), Tt.info("Payload overrides cleared")) : i.payloads && (this.qt.register({ [Tr]: i.payloads }), Tt.info("Payload overrides set", { payloads: i.payloads }))), void this.qe();
    }
    if (t && typeof t == "object") return this.qt.register({ [Rt]: t }), this.qe(), Tt.info("Flag overrides set", { flags: t });
    Le.warn("Invalid overrideOptions provided to overrideFeatureFlags", { overrideOptions: t });
  }
  onFeatureFlags(t) {
    if (this.addFeatureFlagsHandler(t), this.Pe) {
      var { flags: e, flagVariants: r } = this.We();
      t(e, r);
    }
    return () => this.removeFeatureFlagsHandler(t);
  }
  updateEarlyAccessFeatureEnrollment(t, e, r) {
    var i, n = (this.De(Ur) || []).find(((l) => l.flagKey === t)), o = { ["$feature_enrollment/" + t]: e }, s = { $feature_flag: t, $feature_enrollment: e, $set: o };
    n && (s.$early_access_feature_name = n.name), r && (s.$feature_enrollment_stage = r), this._instance.capture("$feature_enrollment_update", s), this.setPersonPropertiesForFlags(o, !1);
    var a = R({}, this.getFlagVariants(), { [t]: e });
    (i = this.qt) == null || i.register({ [Qn]: Object.keys(Da(a)), [rr]: a }), this.qe();
  }
  getEarlyAccessFeatures(t, e, r) {
    e === void 0 && (e = !1);
    var i = this.De(Ur), n = r ? "&" + r.map(((o) => "stage=" + o)).join("&") : "";
    if (i && !e) return t(i);
    this._instance._send_request({ url: this._instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=" + this.N.token + n), method: "GET", callback: (o) => {
      var s, a;
      if (o.json) {
        var l = o.json.earlyAccessFeatures;
        return (s = this.qt) == null || s.unregister(Ur), (a = this.qt) == null || a.register({ [Ur]: l }), t(l);
      }
    } });
  }
  We() {
    var t = this.getFlags(), e = this.getFlagVariants();
    return { flags: t.filter(((r) => e[r])), flagVariants: Object.keys(e).filter(((r) => e[r])).reduce(((r, i) => (r[i] = e[i], r)), {}) };
  }
  qe(t) {
    var { flags: e, flagVariants: r } = this.We();
    this.featureFlagEventHandlers.forEach(((i) => i(e, r, { errorsLoading: t })));
  }
  setPersonPropertiesForFlags(t, e) {
    e === void 0 && (e = !0);
    var r = this.De(jr) || {};
    this._instance.register({ [jr]: R({}, r, t) }), e && this._instance.reloadFeatureFlags();
  }
  resetPersonPropertiesForFlags() {
    this._instance.unregister(jr);
  }
  setGroupPropertiesForFlags(t, e) {
    e === void 0 && (e = !0);
    var r = this.De(Vt) || {};
    Object.keys(r).length !== 0 && Object.keys(r).forEach(((i) => {
      r[i] = R({}, r[i], t[i]), delete t[i];
    })), this._instance.register({ [Vt]: R({}, r, t) }), e && this._instance.reloadFeatureFlags();
  }
  resetGroupPropertiesForFlags(t) {
    if (t) {
      var e = this.De(Vt) || {};
      this._instance.register({ [Vt]: R({}, e, { [t]: {} }) });
    } else this._instance.unregister(Vt);
  }
  reset() {
    this.Pe = !1, this.Oe = !1, this.Ie = !1, this.Ce = !1, this.Fe = !1, this.$anon_distinct_id = void 0, this.He(), this.Re = !1;
  }
} }, e4 = { sessionRecording: class {
  get N() {
    return this._instance.config;
  }
  get qt() {
    return this._instance.persistence;
  }
  get started() {
    var t;
    return !((t = this.Ve) == null || !t.isStarted);
  }
  get status() {
    var t, e;
    return this.Ye === Hr || this.Ye === wi ? this.Ye : (t = (e = this.Ve) == null ? void 0 : e.status) !== null && t !== void 0 ? t : this.Ye;
  }
  constructor(t) {
    if (this._forceAllowLocalhostNetworkCapture = !1, this.Ye = Pa, this.Ge = void 0, this._instance = t, !this._instance.sessionManager) throw Et.error("started without valid sessionManager"), new Error(Jo + " started without valid sessionManager. This is a bug.");
    if (this.N.cookieless_mode === Xe) throw new Error(Jo + ' cannot be used with cookieless_mode="always"');
  }
  initialize() {
    this.startIfEnabledOrStop();
  }
  get Je() {
    var t, e = !((t = this._instance.get_property(gi)) == null || !t.enabled), r = !this.N.disable_session_recording, i = this.N.disable_session_recording || this._instance.consent.isOptedOut();
    return C && e && r && !i;
  }
  startIfEnabledOrStop(t) {
    var e;
    if (!this.Je || (e = this.Ve) == null || !e.isStarted) {
      var r = !I(Object.assign) && !I(Array.from);
      this.Je && r ? (this.Ke(t), Et.info("starting")) : (this.Ye = Pa, this.stopRecording());
    }
  }
  Ke(t) {
    var e, r, i;
    this.Je && (this.Ye !== Hr && this.Ye !== wi && (this.Ye = Ma), T != null && (e = T.__PosthogExtensions__) != null && (e = e.rrweb) != null && e.record && (r = T.__PosthogExtensions__) != null && r.initSessionRecording ? this.Xe(t) : (i = T.__PosthogExtensions__) == null || i.loadExternalDependency == null || i.loadExternalDependency(this._instance, this.Qe, ((n) => {
      if (n) return Et.error("could not load recorder", n);
      this.Xe(t);
    })));
  }
  stopRecording() {
    var t, e;
    (t = this.Ge) == null || t.call(this), this.Ge = void 0, (e = this.Ve) == null || e.stop();
  }
  Ze() {
    var t, e;
    (t = this.Ge) == null || t.call(this), this.Ge = void 0, (e = this.Ve) == null || e.discard();
  }
  tr() {
    var t;
    (t = this.qt) == null || t.unregister(N1);
  }
  ir(t, e) {
    if (W(t)) return null;
    var r, i = st(t) ? t : parseFloat(t);
    return typeof (r = i) != "number" || !Number.isFinite(r) || 0 > r || r > 1 ? (Et.warn(e + " must be between 0 and 1. Ignoring invalid value:", t), null) : i;
  }
  er(t) {
    if (this.qt) {
      var e, r, i = this.qt, n = () => {
        var o, s = t.sessionRecording === !1 ? void 0 : t.sessionRecording, a = this.ir((o = this.N.session_recording) == null ? void 0 : o.sampleRate, "session_recording.sampleRate"), l = this.ir(s?.sampleRate, "remote config sampleRate"), u = a ?? l;
        W(u) && this.tr();
        var d = s?.minimumDurationMilliseconds;
        i.register({ [gi]: R({ cache_timestamp: Date.now(), enabled: !!s }, s, { networkPayloadCapture: R({ capturePerformance: t.capturePerformance }, s?.networkPayloadCapture), canvasRecording: { enabled: s?.recordCanvas, fps: s?.canvasFps, quality: s?.canvasQuality }, sampleRate: u, minimumDurationMilliseconds: I(d) ? null : d, endpoint: s?.endpoint, triggerMatchType: s?.triggerMatchType, masking: s?.masking, urlTriggers: s?.urlTriggers }) });
      };
      n(), (e = this.Ge) == null || e.call(this), this.Ge = (r = this._instance.sessionManager) == null ? void 0 : r.onSessionId(n);
    }
  }
  onRemoteConfig(t) {
    return "sessionRecording" in t ? t.sessionRecording === !1 ? (this.er(t), void this.Ze()) : (this.er(t), void this.startIfEnabledOrStop()) : (this.Ye === Hr && (this.Ye = wi, Et.warn("config refresh failed, recording will not start until page reload")), void this.startIfEnabledOrStop());
  }
  log(t, e) {
    var r;
    e === void 0 && (e = "log"), (r = this.Ve) != null && r.log ? this.Ve.log(t, e) : Et.warn("log called before recorder was ready");
  }
  get Qe() {
    var t, e, r = (t = this._instance) == null || (t = t.persistence) == null ? void 0 : t.get_property(gi);
    return (r == null || (e = r.scriptConfig) == null ? void 0 : e.script) || "lazy-recorder";
  }
  rr() {
    var t, e = this._instance.get_property(gi);
    if (!e) return !1;
    var r = (t = (typeof e == "object" ? e : JSON.parse(e)).cache_timestamp) !== null && t !== void 0 ? t : Date.now();
    return 36e5 >= Date.now() - r;
  }
  Xe(t) {
    var e, r;
    if ((e = T.__PosthogExtensions__) == null || !e.initSessionRecording) return Et.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({ $sdk_debug_recording_script_not_loaded: !0 });
    if (this.Ve || (this.Ve = (r = T.__PosthogExtensions__) == null ? void 0 : r.initSessionRecording(this._instance), this.Ve._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this.rr())
      return this.Ye === wi || this.Ye === Hr ? void 0 : (this.Ye = Hr, Et.info("persisted remote config is stale, requesting fresh config before starting"), void new W1(this._instance).load());
    this.Ye = Ma, this.Ve.start(t);
  }
  onRRwebEmit(t) {
    var e;
    (e = this.Ve) == null || e.onRRwebEmit == null || e.onRRwebEmit(t);
  }
  overrideLinkedFlag() {
    var t, e;
    this.Ve || (e = this.qt) == null || e.register({ $replay_override_linked_flag: !0 }), (t = this.Ve) == null || t.overrideLinkedFlag();
  }
  overrideSampling() {
    var t, e;
    this.Ve || (e = this.qt) == null || e.register({ $replay_override_sampling: !0 }), (t = this.Ve) == null || t.overrideSampling();
  }
  overrideTrigger(t) {
    var e, r;
    this.Ve || (r = this.qt) == null || r.register({ [t === "url" ? "$replay_override_url_trigger" : "$replay_override_event_trigger"]: !0 }), (e = this.Ve) == null || e.overrideTrigger(t);
  }
  get sdkDebugProperties() {
    var t;
    return ((t = this.Ve) == null ? void 0 : t.sdkDebugProperties) || { $recording_status: this.status };
  }
  tryAddCustomEvent(t, e) {
    var r;
    return !((r = this.Ve) == null || !r.tryAddCustomEvent(t, e));
  }
} }, t4 = { autocapture: class {
  constructor(t) {
    this.sr = !1, this.nr = null, this.ar = !1, this.instance = t, this.rageclicks = new Aa(t.config.rageclick), this.lr = null;
  }
  initialize() {
    this.startIfEnabled();
  }
  get N() {
    var t, e, r = Ce(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
    return r.url_allowlist = (t = r.url_allowlist) == null ? void 0 : t.map(((i) => new RegExp(i))), r.url_ignorelist = (e = r.url_ignorelist) == null ? void 0 : e.map(((i) => new RegExp(i))), r;
  }
  ur() {
    if (this.isBrowserSupported()) {
      if (C && P) {
        var t = (r) => {
          r = r || C?.event;
          try {
            this.hr(r);
          } catch (i) {
            Ea.error("Failed to capture event", i);
          }
        };
        if (fe(P, "submit", t, { capture: !0 }), fe(P, "change", t, { capture: !0 }), fe(P, "click", t, { capture: !0 }), this.N.capture_copied_text) {
          var e = (r) => {
            this.hr(r = r || C?.event, Bn);
          };
          fe(P, "copy", e, { capture: !0 }), fe(P, "cut", e, { capture: !0 });
        }
      }
    } else Ea.info("Disabling Automatic Event Collection because this browser is not supported");
  }
  startIfEnabled() {
    this.isEnabled && !this.sr && (this.ur(), this.sr = !0);
  }
  onRemoteConfig(t) {
    t.elementsChainAsString && (this.ar = t.elementsChainAsString), this.instance.persistence && this.instance.persistence.register({ [Bs]: !!t.autocapture_opt_out }), this.nr = !!t.autocapture_opt_out, this.startIfEnabled();
  }
  setElementSelectors(t) {
    this.lr = t;
  }
  getElementSelectors(t) {
    var e, r = [];
    return (e = this.lr) == null || e.forEach(((i) => {
      var n = P?.querySelectorAll(i);
      n?.forEach(((o) => {
        t === o && r.push(i);
      }));
    })), r;
  }
  get isEnabled() {
    var t, e, r = (t = this.instance.persistence) == null ? void 0 : t.props[Bs];
    if (_t(this.nr) && !vt(r) && !this.instance.bt()) return !1;
    var i = (e = this.nr) !== null && e !== void 0 ? e : !!r;
    return !!this.instance.config.autocapture && !i;
  }
  hr(t, e) {
    if (e === void 0 && (e = "$autocapture"), this.isEnabled) {
      var r, i = Ca(t);
      il(i) && (i = i.parentNode || null), e === "$autocapture" && t.type === "click" && t instanceof MouseEvent && this.instance.config.rageclick && (r = this.rageclicks) != null && r.isRageClick(t.clientX, t.clientY, t.timeStamp || (/* @__PURE__ */ new Date()).getTime()) && (function(p, h) {
        if (!C || Ko(p)) return !1;
        var f, v, g;
        if (vt(h) ? (f = !!h && _a, v = void 0) : (f = (g = h?.css_selector_ignorelist) !== null && g !== void 0 ? g : _a, v = h?.content_ignorelist), f === !1) return !1;
        var { targetElementList: m } = ya(p, !1);
        return !(function(w, y) {
          if (w === !1 || I(w)) return !1;
          var x;
          if (w === !0) x = V5;
          else {
            if (!Q(w)) return !1;
            if (w.length > 10) return M.error("[PostHog] content_ignorelist array cannot exceed 10 items. Use css_selector_ignorelist for more complex matching."), !1;
            x = w.map(((_) => _.toLowerCase()));
          }
          return y.some(((_) => {
            var { safeText: k, ariaLabel: A } = _;
            return x.some(((E) => k.includes(E) || A.includes(E)));
          }));
        })(v, m.map(((w) => {
          var y;
          return { safeText: ni(w).toLowerCase(), ariaLabel: ((y = w.getAttribute("aria-label")) == null ? void 0 : y.toLowerCase().trim()) || "" };
        }))) && !wa(m, f);
      })(i, this.instance.config.rageclick) && this.hr(t, "$rageclick");
      var n = e === Bn;
      if (i && (function(p, h, f, v, g) {
        var m, w, y, x;
        if (f === void 0 && (f = void 0), !C || Ko(p) || (m = f) != null && m.url_allowlist && !ba(f.url_allowlist) || (w = f) != null && w.url_ignorelist && ba(f.url_ignorelist)) return !1;
        if ((y = f) != null && y.dom_event_allowlist) {
          var _ = f.dom_event_allowlist;
          if (_ && !_.some(((S) => h.type === S))) return !1;
        }
        var { parentIsUsefulElement: k, targetElementList: A } = ya(p, v);
        if (!(function(S, D) {
          var V = D?.element_allowlist;
          if (I(V)) return !0;
          var H, U = function(G) {
            if (V.some(((J) => G.tagName.toLowerCase() === J))) return { v: !0 };
          };
          for (var z of S) if (H = U(z)) return H.v;
          return !1;
        })(A, f) || !wa(A, (x = f) == null ? void 0 : x.css_selector_allowlist)) return !1;
        var E = C.getComputedStyle(p);
        if (E && E.getPropertyValue("cursor") === "pointer" && h.type === "click") return !0;
        var b = p.tagName.toLowerCase();
        switch (b) {
          case "html":
            return !1;
          case "form":
            return (g || ["submit"]).indexOf(h.type) >= 0;
          case "input":
          case "select":
          case "textarea":
            return (g || ["change", "click"]).indexOf(h.type) >= 0;
          default:
            return k ? (g || ["click"]).indexOf(h.type) >= 0 : (g || ["click"]).indexOf(h.type) >= 0 && (L2.indexOf(b) > -1 || p.getAttribute("contenteditable") === "true");
        }
      })(i, t, this.N, n, n ? ["copy", "cut"] : void 0)) {
        var { props: o, explicitNoCapture: s } = q5(i, { e: t, maskAllElementAttributes: this.instance.config.mask_all_element_attributes, maskAllText: this.instance.config.mask_all_text, elementAttributeIgnoreList: this.N.element_attribute_ignorelist, elementsChainAsString: this.ar });
        if (s) return !1;
        var a = this.getElementSelectors(i);
        if (a && a.length > 0 && (o.$element_selectors = a), e === Bn) {
          var l, u = ol(C == null || (l = C.getSelection()) == null ? void 0 : l.toString()), d = t.type || "clipboard";
          if (!u) return !1;
          o.$selected_content = u, o.$copy_type = d;
        }
        return this.instance.capture(e, o), !0;
      }
    }
  }
  isBrowserSupported() {
    return gt(P?.querySelectorAll);
  }
}, historyAutocapture: class {
  constructor(t) {
    var e;
    this._instance = t, this.dr = (C == null || (e = C.location) == null ? void 0 : e.pathname) || "";
  }
  initialize() {
    this.startIfEnabled();
  }
  get isEnabled() {
    return this._instance.config.capture_pageview === "history_change";
  }
  startIfEnabled() {
    this.isEnabled && (M.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges());
  }
  stop() {
    this.vr && this.vr(), this.vr = void 0, M.info("History API monitoring stopped");
  }
  monitorHistoryChanges() {
    var t, e;
    if (C && C.history) {
      var r = this;
      (t = C.history.pushState) != null && t.__posthog_wrapped__ || Sa(C.history, "pushState", ((i) => function(n, o, s) {
        i.call(this, n, o, s), r.cr("pushState");
      })), (e = C.history.replaceState) != null && e.__posthog_wrapped__ || Sa(C.history, "replaceState", ((i) => function(n, o, s) {
        i.call(this, n, o, s), r.cr("replaceState");
      })), this.pr();
    }
  }
  cr(t) {
    try {
      var e, r = C == null || (e = C.location) == null ? void 0 : e.pathname;
      if (!r) return;
      r !== this.dr && this.isEnabled && this._instance.capture($t, { navigation_type: t }), this.dr = r;
    } catch (i) {
      M.error("Error capturing " + t + " pageview", i);
    }
  }
  pr() {
    if (!this.vr) {
      var t = () => {
        this.cr("popstate");
      };
      fe(C, "popstate", t), this.vr = () => {
        C && C.removeEventListener("popstate", t);
      };
    }
  }
}, heatmaps: class {
  get N() {
    return this.instance.config;
  }
  constructor(t) {
    var e;
    this._r = !1, this.sr = !1, this.gr = null, this.instance = t, this._r = !((e = this.instance.persistence) == null || !e.props[Io]), this.rageclicks = new Aa(t.config.rageclick);
  }
  initialize() {
    this.startIfEnabled();
  }
  get flushIntervalMilliseconds() {
    var t = 5e3;
    return Ce(this.N.capture_heatmaps) && this.N.capture_heatmaps.flush_interval_milliseconds && (t = this.N.capture_heatmaps.flush_interval_milliseconds), t;
  }
  get isEnabled() {
    return W(this.N.capture_heatmaps) ? W(this.N.enable_heatmaps) ? this._r : this.N.enable_heatmaps : this.N.capture_heatmaps !== !1;
  }
  startIfEnabled() {
    if (this.isEnabled) {
      if (this.sr) return;
      G5.info("starting..."), this.mr(), this.br();
    } else {
      var t;
      clearInterval((t = this.gr) !== null && t !== void 0 ? t : void 0), this.yr(), this.getAndClearBuffer();
    }
  }
  onRemoteConfig(t) {
    if ("heatmaps" in t) {
      var e = !!t.heatmaps;
      this.instance.persistence && this.instance.persistence.register({ [Io]: e }), this._r = e, this.startIfEnabled();
    }
  }
  getAndClearBuffer() {
    var t = this.I;
    return this.I = void 0, t;
  }
  wr(t) {
    this.Er(t.originalEvent, "deadclick");
  }
  br() {
    this.gr && clearInterval(this.gr), this.gr = P?.visibilityState === "visible" ? setInterval(this.Ft.bind(this), this.flushIntervalMilliseconds) : null;
  }
  mr() {
    C && P && (this.Sr = this.Ft.bind(this), fe(C, qi, this.Sr), this.Tr = (t) => this.Er(t || C?.event), fe(P, "click", this.Tr, { capture: !0 }), this.$r = (t) => this.kr(t || C?.event), fe(P, "mousemove", this.$r, { capture: !0 }), this.Rr = new $s(this.instance, c5, this.wr.bind(this)), this.Rr.startIfEnabledOrStop(), this.Pr = this.br.bind(this), fe(P, Bi, this.Pr), this.sr = !0);
  }
  yr() {
    var t;
    C && P && (this.Sr && C.removeEventListener(qi, this.Sr), this.Tr && P.removeEventListener("click", this.Tr, { capture: !0 }), this.$r && P.removeEventListener("mousemove", this.$r, { capture: !0 }), this.Pr && P.removeEventListener(Bi, this.Pr), clearTimeout(this.Or), (t = this.Rr) == null || t.stop(), this.sr = !1);
  }
  Ir(t, e) {
    var r = this.instance.scrollManager.scrollY(), i = this.instance.scrollManager.scrollX(), n = this.instance.scrollManager.scrollElement(), o = (function(s, a, l) {
      for (var u = s; u && un(u) && !Lt(u, "body"); ) {
        if (u === l) return !1;
        if (q(a, C?.getComputedStyle(u).position)) return !0;
        u = sl(u);
      }
      return !1;
    })(Ca(t), ["fixed", "sticky"], n);
    return { x: t.clientX + (o ? 0 : i), y: t.clientY + (o ? 0 : r), target_fixed: o, type: e };
  }
  Er(t, e) {
    var r;
    if (e === void 0 && (e = "click"), !ma(t.target) && Ia(t)) {
      var i = this.Ir(t, e);
      (r = this.rageclicks) != null && r.isRageClick(t.clientX, t.clientY, (/* @__PURE__ */ new Date()).getTime()) && this.Cr(R({}, i, { type: "rageclick" })), this.Cr(i);
    }
  }
  kr(t) {
    !ma(t.target) && Ia(t) && (clearTimeout(this.Or), this.Or = setTimeout((() => {
      this.Cr(this.Ir(t, "mousemove"));
    }), 500));
  }
  Cr(t) {
    if (C) {
      var e = C.location.href, r = this.N.custom_personal_data_properties, i = this.N.mask_personal_data_properties ? [...fr, ...r || []] : [], n = ri(e, i, ii);
      this.I = this.I || {}, this.I[n] || (this.I[n] = []), this.I[n].push(t);
    }
  }
  Ft() {
    this.I && !tr(this.I) && this.instance.capture("$$heatmap", { $heatmap_data: this.getAndClearBuffer() });
  }
}, deadClicksAutocapture: $s, webVitalsAutocapture: class {
  constructor(t) {
    var e;
    this._r = !1, this.sr = !1, this.I = { url: void 0, metrics: [], firstMetricTimestamp: void 0 }, this.Fr = () => {
      clearTimeout(this.Ar), this.I.metrics.length !== 0 && (this._instance.capture("$web_vitals", this.I.metrics.reduce(((r, i) => R({}, r, { ["$web_vitals_" + i.name + "_event"]: R({}, i), ["$web_vitals_" + i.name + "_value"]: i.value })), {})), this.I = { url: void 0, metrics: [], firstMetricTimestamp: void 0 });
    }, this.Mr = (r) => {
      var i, n = (i = this._instance.sessionManager) == null ? void 0 : i.checkAndGetSessionAndWindowId(!0);
      if (I(n)) At.error("Could not read session ID. Dropping metrics!");
      else {
        this.I = this.I || { url: void 0, metrics: [], firstMetricTimestamp: void 0 };
        var o = this.Dr();
        I(o) || (W(r?.name) || W(r?.value) ? At.error("Invalid metric received", r) : !this.Lr || this.Lr > r.value ? (this.I.url !== o && (this.Fr(), this.Ar = setTimeout(this.Fr, this.flushToCaptureTimeoutMs)), I(this.I.url) && (this.I.url = o), this.I.firstMetricTimestamp = I(this.I.firstMetricTimestamp) ? Date.now() : this.I.firstMetricTimestamp, r.attribution && r.attribution.interactionTargetElement && (r.attribution.interactionTargetElement = void 0), this.I.metrics.push(R({}, r, { $current_url: o, $session_id: n.sessionId, $window_id: n.windowId, timestamp: Date.now() })), this.I.metrics.length === this.allowedMetrics.length && this.Fr()) : At.error("Ignoring metric with value >= " + this.Lr, r));
      }
    }, this.Ur = () => {
      if (!this.sr) {
        var r, i, n, o, s = T.__PosthogExtensions__;
        I(s) || I(s.postHogWebVitalsCallbacks) || ({ onLCP: r, onCLS: i, onFCP: n, onINP: o } = s.postHogWebVitalsCallbacks), r && i && n && o ? (this.allowedMetrics.indexOf("LCP") > -1 && r(this.Mr.bind(this)), this.allowedMetrics.indexOf("CLS") > -1 && i(this.Mr.bind(this)), this.allowedMetrics.indexOf("FCP") > -1 && n(this.Mr.bind(this)), this.allowedMetrics.indexOf("INP") > -1 && o(this.Mr.bind(this)), this.sr = !0) : At.error("web vitals callbacks not loaded - not starting");
      }
    }, this._instance = t, this._r = !((e = this._instance.persistence) == null || !e.props[Gs]), this.startIfEnabled();
  }
  get Nr() {
    return this._instance.config.capture_performance;
  }
  get allowedMetrics() {
    var t, e, r = Ce(this.Nr) ? (t = this.Nr) == null ? void 0 : t.web_vitals_allowed_metrics : void 0;
    return W(r) ? ((e = this._instance.persistence) == null ? void 0 : e.props[Qs]) || ["CLS", "FCP", "INP", "LCP"] : r;
  }
  get flushToCaptureTimeoutMs() {
    return (Ce(this.Nr) ? this.Nr.web_vitals_delayed_flush_ms : void 0) || 5e3;
  }
  get useAttribution() {
    var t = Ce(this.Nr) ? this.Nr.web_vitals_attribution : void 0;
    return t != null && t;
  }
  get Lr() {
    var t = Ce(this.Nr) && st(this.Nr.__web_vitals_max_value) ? this.Nr.__web_vitals_max_value : Ra;
    return t > 0 && 6e4 >= t ? Ra : t;
  }
  get isEnabled() {
    var t = ye?.protocol;
    if (t !== "http:" && t !== "https:") return At.info("Web Vitals are disabled on non-http/https protocols"), !1;
    var e = Ce(this.Nr) ? this.Nr.web_vitals : vt(this.Nr) ? this.Nr : void 0;
    return vt(e) ? e : this._r;
  }
  startIfEnabled() {
    this.isEnabled && !this.sr && (At.info("enabled, starting..."), this.Y(this.Ur));
  }
  onRemoteConfig(t) {
    if ("capturePerformance" in t) {
      var e = Ce(t.capturePerformance) && !!t.capturePerformance.web_vitals, r = Ce(t.capturePerformance) ? t.capturePerformance.web_vitals_allowed_metrics : void 0;
      this._instance.persistence && (this._instance.persistence.register({ [Gs]: e }), this._instance.persistence.register({ [Qs]: r })), this._r = e, this.startIfEnabled();
    }
  }
  Y(t) {
    var e, r;
    (e = T.__PosthogExtensions__) != null && e.postHogWebVitalsCallbacks ? t() : (r = T.__PosthogExtensions__) == null || r.loadExternalDependency == null || r.loadExternalDependency(this._instance, this.useAttribution ? "web-vitals-with-attribution" : "web-vitals", ((i) => {
      i ? At.error("failed to load script", i) : t();
    }));
  }
  Dr() {
    var t = C ? C.location.href : void 0;
    if (t) {
      var e = this._instance.config.custom_personal_data_properties, r = this._instance.config.mask_personal_data_properties ? [...fr, ...e || []] : [];
      return ri(t, r, ii);
    }
    At.error("Could not determine current URL");
  }
} }, r4 = { exceptionObserver: class {
  constructor(t) {
    var e, r, i;
    this.Ur = () => {
      var n;
      if (C && this.isEnabled && (n = T.__PosthogExtensions__) != null && n.errorWrappingFunctions) {
        var o = T.__PosthogExtensions__.errorWrappingFunctions.wrapOnError, s = T.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection, a = T.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
        try {
          !this.jr && this.N.capture_unhandled_errors && (this.jr = o(this.captureException.bind(this))), !this.zr && this.N.capture_unhandled_rejections && (this.zr = s(this.captureException.bind(this))), !this.Br && this.N.capture_console_errors && (this.Br = a(this.captureException.bind(this)));
        } catch (l) {
          Or.error("failed to start", l), this.Hr();
        }
      }
    }, this._instance = t, this.qr = !((e = this._instance.persistence) == null || !e.props[qs]), this.Wr = new _u({ refillRate: (r = this._instance.config.error_tracking.__exceptionRateLimiterRefillRate) !== null && r !== void 0 ? r : 1, bucketSize: (i = this._instance.config.error_tracking.__exceptionRateLimiterBucketSize) !== null && i !== void 0 ? i : 10, refillInterval: 1e4, h: Or }), this.N = this.Vr(), this.startIfEnabledOrStop();
  }
  Vr() {
    var t = this._instance.config.capture_exceptions, e = { capture_unhandled_errors: !1, capture_unhandled_rejections: !1, capture_console_errors: !1 };
    return Ce(t) ? e = R({}, e, t) : (I(t) ? this.qr : t) && (e = R({}, e, { capture_unhandled_errors: !0, capture_unhandled_rejections: !0 })), e;
  }
  get isEnabled() {
    return this.N.capture_console_errors || this.N.capture_unhandled_errors || this.N.capture_unhandled_rejections;
  }
  startIfEnabledOrStop() {
    this.isEnabled ? (Or.info("enabled"), this.Hr(), this.Y(this.Ur)) : this.Hr();
  }
  Y(t) {
    var e, r;
    (e = T.__PosthogExtensions__) != null && e.errorWrappingFunctions && t(), (r = T.__PosthogExtensions__) == null || r.loadExternalDependency == null || r.loadExternalDependency(this._instance, "exception-autocapture", ((i) => {
      if (i) return Or.error("failed to load script", i);
      t();
    }));
  }
  Hr() {
    var t, e, r;
    (t = this.jr) == null || t.call(this), this.jr = void 0, (e = this.zr) == null || e.call(this), this.zr = void 0, (r = this.Br) == null || r.call(this), this.Br = void 0;
  }
  onRemoteConfig(t) {
    "autocaptureExceptions" in t && (this.qr = !!t.autocaptureExceptions || !1, this._instance.persistence && this._instance.persistence.register({ [qs]: this.qr }), this.N = this.Vr(), this.startIfEnabledOrStop());
  }
  onConfigChange() {
    this.N = this.Vr();
  }
  captureException(t) {
    var e, r, i, n = (e = t == null || (r = t.$exception_list) == null || (r = r[0]) == null ? void 0 : r.type) !== null && e !== void 0 ? e : "Exception";
    this.Wr.consumeRateLimit(n) ? Or.info("Skipping exception capture because of client rate limiting.", { exception: n }) : (i = this._instance.exceptions) == null || i.sendExceptionEvent(t);
  }
}, exceptions: class {
  constructor(t) {
    var e, r;
    this.Yr = [], this.Gr = new Nu([new Uu(), new Ku(), new Zu(), new ju(), new Yu(), new Gu(), new qu(), new Qu()], (function(i) {
      for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), s = 1; n > s; s++) o[s - 1] = arguments[s];
      return function(a, l) {
        l === void 0 && (l = 0);
        for (var u = [], d = a.split(`
`), p = l; d.length > p; p++) {
          var h = d[p];
          if (1024 >= h.length) {
            var f = js.test(h) ? h.replace(js, "$1") : h;
            if (!f.match(/\S*Error: /)) {
              for (var v of o) {
                var g = v(f, i);
                if (g) {
                  u.push(g);
                  break;
                }
              }
              if (u.length >= 50) break;
            }
          }
        }
        return (function(m) {
          if (!m.length) return [];
          var w = Array.from(m);
          return w.reverse(), w.slice(0, 50).map(((y) => {
            return R({}, y, { filename: y.filename || (x = w, x[x.length - 1] || {}).filename, function: y.function || gr });
            var x;
          }));
        })(u);
      };
    })("web:javascript", Fu, Du)), this._instance = t, this.Yr = (e = (r = this._instance.persistence) == null ? void 0 : r.get_property(Lo)) !== null && e !== void 0 ? e : [];
  }
  onRemoteConfig(t) {
    var e, r, i;
    if ("errorTracking" in t) {
      var n = (e = (r = t.errorTracking) == null ? void 0 : r.suppressionRules) !== null && e !== void 0 ? e : [], o = (i = t.errorTracking) == null ? void 0 : i.captureExtensionExceptions;
      this.Yr = n, this._instance.persistence && this._instance.persistence.register({ [Lo]: this.Yr, [Ws]: o });
    }
  }
  get Jr() {
    var t, e = !!this._instance.get_property(Ws), r = this._instance.config.error_tracking.captureExtensionExceptions;
    return (t = r ?? e) !== null && t !== void 0 && t;
  }
  buildProperties(t, e) {
    return this.Gr.buildFromUnknown(t, { syntheticException: e?.syntheticException, mechanism: { handled: e?.handled } });
  }
  sendExceptionEvent(t) {
    var e = t.$exception_list;
    if (this.Kr(e)) {
      if (this.Xr(e)) return void Kn.info("Skipping exception capture because a suppression rule matched");
      if (!this.Jr && this.Qr(e)) return void Kn.info("Skipping exception capture because it was thrown by an extension");
      if (!this._instance.config.error_tracking.__capturePostHogExceptions && this.Zr(e)) return void Kn.info("Skipping exception capture because it was thrown by the PostHog SDK");
    }
    return this._instance.capture("$exception", t, { _noTruncate: !0, _batchKey: "exceptionEvent", Li: !0 });
  }
  Xr(t) {
    if (t.length === 0) return !1;
    var e = t.reduce(((r, i) => {
      var { type: n, value: o } = i;
      return ve(n) && n.length > 0 && r.$exception_types.push(n), ve(o) && o.length > 0 && r.$exception_values.push(o), r;
    }), { $exception_types: [], $exception_values: [] });
    return this.Yr.some(((r) => {
      var i = r.values.map(((n) => {
        var o, s = $1[n.operator], a = Q(n.value) ? n.value : [n.value], l = (o = e[n.key]) !== null && o !== void 0 ? o : [];
        return a.length > 0 && s(a, l);
      }));
      return r.type === "OR" ? i.some(Boolean) : i.every(Boolean);
    }));
  }
  Qr(t) {
    return t.flatMap(((e) => {
      var r, i;
      return (r = (i = e.stacktrace) == null ? void 0 : i.frames) !== null && r !== void 0 ? r : [];
    })).some(((e) => e.filename && e.filename.startsWith("chrome-extension://")));
  }
  Zr(t) {
    if (t.length > 0) {
      var e, r, i, n, o = (e = (r = t[0].stacktrace) == null ? void 0 : r.frames) !== null && e !== void 0 ? e : [], s = o[o.length - 1];
      return (i = s == null || (n = s.filename) == null ? void 0 : n.includes("posthog.com/static")) !== null && i !== void 0 && i;
    }
    return !1;
  }
  Kr(t) {
    return !W(t) && Q(t);
  }
} }, i4 = R({ productTours: class {
  get qt() {
    return this._instance.persistence;
  }
  constructor(t) {
    this.ts = null, this.es = null, this._instance = t;
  }
  initialize() {
    this.loadIfEnabled();
  }
  onRemoteConfig(t) {
    "productTours" in t && (this.qt && this.qt.register({ [Ys]: !!t.productTours }), this.loadIfEnabled());
  }
  loadIfEnabled() {
    var t, e;
    this.ts || (t = this._instance).config.disable_product_tours || (e = t.persistence) == null || !e.get_property(Ys) || this.Y((() => this.rs()));
  }
  Y(t) {
    var e, r;
    (e = T.__PosthogExtensions__) != null && e.generateProductTours ? t() : (r = T.__PosthogExtensions__) == null || r.loadExternalDependency == null || r.loadExternalDependency(this._instance, "product-tours", ((i) => {
      i ? La.error("Could not load product tours script", i) : t();
    }));
  }
  rs() {
    var t;
    !this.ts && (t = T.__PosthogExtensions__) != null && t.generateProductTours && (this.ts = T.__PosthogExtensions__.generateProductTours(this._instance, !0));
  }
  getProductTours(t, e) {
    if (e === void 0 && (e = !1), !Q(this.es) || e) {
      var r = this.qt;
      if (r) {
        var i = r.props[Wn];
        if (Q(i) && !e) return this.es = i, void t(i, { isLoaded: !0 });
      }
      this._instance._send_request({ url: this._instance.requestRouter.endpointFor("api", "/api/product_tours/?token=" + this._instance.config.token), method: "GET", callback: (n) => {
        var o = n.statusCode;
        if (o !== 200 || !n.json) {
          var s = "Product Tours API could not be loaded, status: " + o;
          return La.error(s), void t([], { isLoaded: !1, error: s });
        }
        var a = Q(n.json.product_tours) ? n.json.product_tours : [];
        this.es = a, r && r.register({ [Wn]: a }), t(a, { isLoaded: !0 });
      } });
    } else t(this.es, { isLoaded: !0 });
  }
  getActiveProductTours(t) {
    W(this.ts) ? t([], { isLoaded: !1, error: "Product tours not loaded" }) : this.ts.getActiveProductTours(t);
  }
  showProductTour(t) {
    var e;
    (e = this.ts) == null || e.showTourById(t);
  }
  previewTour(t) {
    this.ts ? this.ts.previewTour(t) : this.Y((() => {
      var e;
      this.rs(), (e = this.ts) == null || e.previewTour(t);
    }));
  }
  dismissProductTour() {
    var t;
    (t = this.ts) == null || t.dismissTour("user_clicked_skip");
  }
  nextStep() {
    var t;
    (t = this.ts) == null || t.nextStep();
  }
  previousStep() {
    var t;
    (t = this.ts) == null || t.previousStep();
  }
  clearCache() {
    var t;
    this.es = null, (t = this.qt) == null || t.unregister(Wn);
  }
  resetTour(t) {
    var e;
    (e = this.ts) == null || e.resetTour(t);
  }
  resetAllTours() {
    var t;
    (t = this.ts) == null || t.resetAllTours();
  }
  cancelPendingTour(t) {
    var e;
    (e = this.ts) == null || e.cancelPendingTour(t);
  }
} }, hn), n4 = { siteApps: class {
  constructor(t) {
    this._instance = t, this.ss = [], this.apps = {};
  }
  get isEnabled() {
    return !!this._instance.config.opt_in_site_apps;
  }
  ns(t, e) {
    if (e) {
      var r = this.globalsForEvent(e);
      this.ss.push(r), this.ss.length > 1e3 && (this.ss = this.ss.slice(10));
    }
  }
  get siteAppLoaders() {
    var t;
    return (t = T._POSTHOG_REMOTE_CONFIG) == null || (t = t[this._instance.config.token]) == null ? void 0 : t.siteApps;
  }
  initialize() {
    if (this.isEnabled) {
      var t = this._instance._addCaptureHook(this.ns.bind(this));
      this.os = () => {
        t(), this.ss = [], this.os = void 0;
      };
    }
  }
  globalsForEvent(t) {
    var e, r, i, n, o, s, a;
    if (!t) throw new Error("Event payload is required");
    var l = {}, u = this._instance.get_property("$groups") || [], d = this._instance.get_property("$stored_group_properties") || {};
    for (var [p, h] of Object.entries(d)) l[p] = { id: u[p], type: p, properties: h };
    var { $set_once: f, $set: v } = t;
    return { event: R({}, l1(t, Y5), { properties: R({}, t.properties, v ? { $set: R({}, (e = (r = t.properties) == null ? void 0 : r.$set) !== null && e !== void 0 ? e : {}, v) } : {}, f ? { $set_once: R({}, (i = (n = t.properties) == null ? void 0 : n.$set_once) !== null && i !== void 0 ? i : {}, f) } : {}), elements_chain: (o = (s = t.properties) == null ? void 0 : s.$elements_chain) !== null && o !== void 0 ? o : "", distinct_id: (a = t.properties) == null ? void 0 : a.distinct_id }), person: { properties: this._instance.get_property("$stored_person_properties") }, groups: l };
  }
  setupSiteApp(t) {
    var e = this.apps[t.id], r = () => {
      var s;
      !e.errored && this.ss.length && (St.info("Processing " + this.ss.length + " events for site app with id " + t.id), this.ss.forEach(((a) => e.processEvent == null ? void 0 : e.processEvent(a))), e.processedBuffer = !0), Object.values(this.apps).every(((a) => a.processedBuffer || a.errored)) && ((s = this.os) == null || s.call(this));
    }, i = !1, n = (s) => {
      e.errored = !s, e.loaded = !0, St.info("Site app with id " + t.id + " " + (s ? "loaded" : "errored")), i && r();
    };
    try {
      var { processEvent: o } = t.init({ posthog: this._instance, callback(s) {
        n(s);
      } });
      o && (e.processEvent = o), i = !0;
    } catch (s) {
      St.error(Na + t.id, s), n(!1);
    }
    if (i && e.loaded) try {
      r();
    } catch (s) {
      St.error("Error while processing buffered events PostHog app with config id " + t.id, s), e.errored = !0;
    }
  }
  ls() {
    var t = this.siteAppLoaders || [];
    for (var e of t) this.apps[e.id] = { id: e.id, loaded: !1, errored: !1, processedBuffer: !1 };
    for (var r of t) this.setupSiteApp(r);
  }
  us(t) {
    if (Object.keys(this.apps).length !== 0) {
      var e = this.globalsForEvent(t);
      for (var r of Object.values(this.apps)) try {
        r.processEvent == null || r.processEvent(e);
      } catch (i) {
        St.error("Error while processing event " + t.event + " for site app " + r.id, i);
      }
    }
  }
  onRemoteConfig(t) {
    var e, r, i, n = this;
    if ((e = this.siteAppLoaders) != null && e.length) return this.isEnabled ? (this.ls(), void this._instance.on("eventCaptured", ((l) => this.us(l)))) : void St.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
    if ((r = this.os) == null || r.call(this), (i = t.siteApps) != null && i.length) if (this.isEnabled) {
      var o = function(l) {
        var u;
        T["__$$ph_site_app_" + l] = n._instance, (u = T.__PosthogExtensions__) == null || u.loadSiteApp == null || u.loadSiteApp(n._instance, a, ((d) => {
          if (d) return St.error(Na + l, d);
        }));
      };
      for (var { id: s, url: a } of t.siteApps) o(s);
    } else St.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
  }
} }, o4 = { tracingHeaders: class {
  constructor(t) {
    this.hs = void 0, this.ds = void 0, this.Ur = () => {
      var e, r;
      I(this.hs) && ((e = T.__PosthogExtensions__) == null || (e = e.tracingHeadersPatchFns) == null || e._patchXHR(this._instance.config.__add_tracing_headers || [], this._instance.get_distinct_id(), this._instance.sessionManager)), I(this.ds) && ((r = T.__PosthogExtensions__) == null || (r = r.tracingHeadersPatchFns) == null || r._patchFetch(this._instance.config.__add_tracing_headers || [], this._instance.get_distinct_id(), this._instance.sessionManager));
    }, this._instance = t;
  }
  initialize() {
    this.startIfEnabledOrStop();
  }
  Y(t) {
    var e, r;
    (e = T.__PosthogExtensions__) != null && e.tracingHeadersPatchFns && t(), (r = T.__PosthogExtensions__) == null || r.loadExternalDependency == null || r.loadExternalDependency(this._instance, "tracing-headers", ((i) => {
      if (i) return W5.error("failed to load script", i);
      t();
    }));
  }
  startIfEnabledOrStop() {
    var t, e;
    this._instance.config.__add_tracing_headers ? this.Y(this.Ur) : ((t = this.hs) == null || t.call(this), (e = this.ds) == null || e.call(this), this.hs = void 0, this.ds = void 0);
  }
} }, s4 = R({ surveys: class {
  get N() {
    return this._instance.config;
  }
  constructor(t) {
    this.vs = void 0, this._surveyManager = null, this.cs = !1, this.fs = [], this.ps = null, this._instance = t, this._surveyEventReceiver = null;
  }
  initialize() {
    this.loadIfEnabled();
  }
  onRemoteConfig(t) {
    if (!this.N.disable_surveys) {
      var e = t.surveys;
      if (W(e)) return $.warn("Flags not loaded yet. Not loading surveys.");
      var r = Q(e);
      this.vs = r ? e.length > 0 : e, $.info("flags response received, isSurveysEnabled: " + this.vs), this.loadIfEnabled();
    }
  }
  reset() {
    localStorage.removeItem("lastSeenSurveyDate");
    for (var t = [], e = 0; e < localStorage.length; e++) {
      var r = localStorage.key(e);
      (r != null && r.startsWith(Yo) || r != null && r.startsWith("inProgressSurvey_")) && t.push(r);
    }
    t.forEach(((i) => localStorage.removeItem(i)));
  }
  loadIfEnabled() {
    if (!this._surveyManager) if (this.cs) $.info("Already initializing surveys, skipping...");
    else if (this.N.disable_surveys) $.info(Oa);
    else if (this.N.cookieless_mode && this._instance.consent.isOptedOut()) $.info("Not loading surveys in cookieless mode without consent.");
    else {
      var t = T?.__PosthogExtensions__;
      if (t) {
        if (!I(this.vs) || this.N.advanced_enable_surveys) {
          var e = this.vs || this.N.advanced_enable_surveys;
          this.cs = !0;
          try {
            var r = t.generateSurveys;
            if (r) return void this._s(r, e);
            var i = t.loadExternalDependency;
            if (!i) return void this.gs(E2);
            i(this._instance, "surveys", ((n) => {
              n || !t.generateSurveys ? this.gs("Could not load surveys script", n) : this._s(t.generateSurveys, e);
            }));
          } catch (n) {
            throw this.gs("Error initializing surveys", n), n;
          } finally {
            this.cs = !1;
          }
        }
      } else $.error("PostHog Extensions not found.");
    }
  }
  _s(t, e) {
    this._surveyManager = t(this._instance, e), this._surveyEventReceiver = new X5(this._instance), $.info("Surveys loaded successfully"), this.bs({ isLoaded: !0 });
  }
  gs(t, e) {
    $.error(t, e), this.bs({ isLoaded: !1, error: t });
  }
  onSurveysLoaded(t) {
    return this.fs.push(t), this._surveyManager && this.bs({ isLoaded: !0 }), () => {
      this.fs = this.fs.filter(((e) => e !== t));
    };
  }
  getSurveys(t, e) {
    if (e === void 0 && (e = !1), this.N.disable_surveys) return $.info(Oa), t([]);
    var r, i = this._instance.get_property(Oo);
    if (i && !e) return t(i, { isLoaded: !0 });
    typeof Promise < "u" && this.ps ? this.ps.then(((n) => {
      var { surveys: o, context: s } = n;
      return t(o, s);
    })) : (typeof Promise < "u" && (this.ps = new Promise(((n) => {
      r = n;
    }))), this._instance._send_request({ url: this._instance.requestRouter.endpointFor("api", "/api/surveys/?token=" + this.N.token), method: "GET", timeout: this.N.surveys_request_timeout_ms, callback: (n) => {
      var o;
      this.ps = null;
      var s = n.statusCode;
      if (s !== 200 || !n.json) {
        var a = "Surveys API could not be loaded, status: " + s;
        $.error(a);
        var l = { isLoaded: !1, error: a };
        return t([], l), void (r == null || r({ surveys: [], context: l }));
      }
      var u, d = n.json.surveys || [], p = d.filter(((f) => (function(v) {
        return !(!v.start_date || v.end_date);
      })(f) && ((function(v) {
        var g;
        return !((g = v.conditions) == null || (g = g.events) == null || (g = g.values) == null || !g.length);
      })(f) || (function(v) {
        var g;
        return !((g = v.conditions) == null || (g = g.actions) == null || (g = g.values) == null || !g.length);
      })(f))));
      p.length > 0 && ((u = this._surveyEventReceiver) == null || u.register(p)), (o = this._instance.persistence) == null || o.register({ [Oo]: d });
      var h = { isLoaded: !0 };
      t(d, h), r?.({ surveys: d, context: h });
    } }));
  }
  bs(t) {
    for (var e of this.fs) try {
      if (!t.isLoaded) return e([], t);
      this.getSurveys(e);
    } catch (r) {
      $.error("Error in survey callback", r);
    }
  }
  getActiveMatchingSurveys(t, e) {
    if (e === void 0 && (e = !1), !W(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(t, e);
    $.warn("init was not called");
  }
  ys(t) {
    var e = null;
    return this.getSurveys(((r) => {
      var i;
      e = (i = r.find(((n) => n.id === t))) !== null && i !== void 0 ? i : null;
    })), e;
  }
  ws(t) {
    if (W(this._surveyManager)) return { eligible: !1, reason: Gn };
    var e = typeof t == "string" ? this.ys(t) : t;
    return e ? this._surveyManager.checkSurveyEligibility(e) : { eligible: !1, reason: "Survey not found" };
  }
  canRenderSurvey(t) {
    if (W(this._surveyManager)) return $.warn("init was not called"), { visible: !1, disabledReason: Gn };
    var e = this.ws(t);
    return { visible: e.eligible, disabledReason: e.reason };
  }
  canRenderSurveyAsync(t, e) {
    return W(this._surveyManager) ? ($.warn("init was not called"), Promise.resolve({ visible: !1, disabledReason: Gn })) : new Promise(((r) => {
      this.getSurveys(((i) => {
        var n, o = (n = i.find(((a) => a.id === t))) !== null && n !== void 0 ? n : null;
        if (o) {
          var s = this.ws(o);
          r({ visible: s.eligible, disabledReason: s.reason });
        } else r({ visible: !1, disabledReason: "Survey not found" });
      }), e);
    }));
  }
  renderSurvey(t, e, r) {
    var i;
    if (W(this._surveyManager)) $.warn("init was not called");
    else {
      var n = typeof t == "string" ? this.ys(t) : t;
      if (n != null && n.id) if (I5.includes(n.type)) {
        var o = P?.querySelector(e);
        if (o) return (i = n.appearance) != null && i.surveyPopupDelaySeconds ? ($.info("Rendering survey " + n.id + " with delay of " + n.appearance.surveyPopupDelaySeconds + " seconds"), void setTimeout((() => {
          var s, a;
          $.info("Rendering survey " + n.id + " with delay of " + ((s = n.appearance) == null ? void 0 : s.surveyPopupDelaySeconds) + " seconds"), (a = this._surveyManager) == null || a.renderSurvey(n, o, r), $.info("Survey " + n.id + " rendered");
        }), 1e3 * n.appearance.surveyPopupDelaySeconds)) : void this._surveyManager.renderSurvey(n, o, r);
        $.warn("Survey element not found");
      } else $.warn("Surveys of type " + n.type + " cannot be rendered in the app");
      else $.warn("Survey not found");
    }
  }
  displaySurvey(t, e) {
    var r;
    if (W(this._surveyManager)) $.warn("init was not called");
    else {
      var i = this.ys(t);
      if (i) {
        var n = i;
        if ((r = i.appearance) != null && r.surveyPopupDelaySeconds && e.ignoreDelay && (n = R({}, i, { appearance: R({}, i.appearance, { surveyPopupDelaySeconds: 0 }) })), e.displayType !== jo.Popover && e.initialResponses && $.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), e.ignoreConditions === !1) {
          var o = this.canRenderSurvey(i);
          if (!o.visible) return void $.warn("Survey is not eligible to be displayed: ", o.disabledReason);
        }
        e.displayType !== jo.Inline ? this._surveyManager.handlePopoverSurvey(n, e) : this.renderSurvey(n, e.selector, e.properties);
      } else $.warn("Survey not found");
    }
  }
  cancelPendingSurvey(t) {
    W(this._surveyManager) ? $.warn("init was not called") : this._surveyManager.cancelSurvey(t);
  }
  handlePageUnload() {
    var t;
    (t = this._surveyManager) == null || t.handlePageUnload();
  }
} }, hn), a4 = { toolbar: class {
  constructor(t) {
    this.instance = t;
  }
  Es(t) {
    T.ph_toolbar_state = t;
  }
  Ss() {
    var t;
    return (t = T.ph_toolbar_state) !== null && t !== void 0 ? t : 0;
  }
  initialize() {
    return this.maybeLoadToolbar();
  }
  maybeLoadToolbar(t, e, r) {
    if (t === void 0 && (t = void 0), e === void 0 && (e = void 0), r === void 0 && (r = void 0), H1(this.instance.config) || !C || !P) return !1;
    t = t ?? C.location, r = r ?? C.history;
    try {
      if (!e) {
        try {
          C.localStorage.setItem("test", "test"), C.localStorage.removeItem("test");
        } catch {
          return !1;
        }
        e = C?.localStorage;
      }
      var i, n = J5 || Qi(t.hash, "__posthog") || Qi(t.hash, "state"), o = n ? Xs((() => JSON.parse(atob(decodeURIComponent(n))))) || Xs((() => JSON.parse(decodeURIComponent(n)))) : null;
      return o && o.action === "ph_authorize" ? ((i = o).source = "url", i && Object.keys(i).length > 0 && (o.desiredHash ? t.hash = o.desiredHash : r ? r.replaceState(r.state, "", t.pathname + t.search) : t.hash = "")) : ((i = JSON.parse(e.getItem(Ha) || "{}")).source = "localstorage", delete i.userIntent), !(!i.token || this.instance.config.token !== i.token || (this.loadToolbar(i), 0));
    } catch {
      return !1;
    }
  }
  xs(t) {
    var e = T.ph_load_toolbar || T.ph_load_editor;
    !W(e) && gt(e) ? e(t, this.instance) : Ta.warn("No toolbar load function found");
  }
  loadToolbar(t) {
    var e = !(P == null || !P.getElementById(O1));
    if (!C || e) return !1;
    var r = this.instance.requestRouter.region === "custom" && this.instance.config.advanced_disable_toolbar_metrics, i = R({ token: this.instance.config.token }, t, { apiURL: this.instance.requestRouter.endpointFor("ui") }, r ? { instrument: !1 } : {});
    if (C.localStorage.setItem(Ha, JSON.stringify(R({}, i, { source: void 0 }))), this.Ss() === 2) this.xs(i);
    else if (this.Ss() === 0) {
      var n;
      this.Es(1), (n = T.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this.instance, "toolbar", ((o) => {
        if (o) return Ta.error("[Toolbar] Failed to load", o), void this.Es(0);
        this.Es(2), this.xs(i);
      })), fe(C, "turbolinks:load", (() => {
        this.Es(0), this.loadToolbar(i);
      }));
    }
    return !0;
  }
  Ts(t) {
    return this.loadToolbar(t);
  }
  maybeLoadEditor(t, e, r) {
    return t === void 0 && (t = void 0), e === void 0 && (e = void 0), r === void 0 && (r = void 0), this.maybeLoadToolbar(t, e, r);
  }
} }, l4 = R({ experiments: Re }, hn), c4 = { conversations: class {
  constructor(t) {
    this.$s = void 0, this._conversationsManager = null, this.ks = !1, this.Rs = null, this._instance = t;
  }
  initialize() {
    this.loadIfEnabled();
  }
  onRemoteConfig(t) {
    if (!this._instance.config.disable_conversations) {
      var e = t.conversations;
      W(e) || (vt(e) ? this.$s = e : (this.$s = e.enabled, this.Rs = e), this.loadIfEnabled());
    }
  }
  reset() {
    var t;
    (t = this._conversationsManager) == null || t.reset(), this._conversationsManager = null, this.$s = void 0, this.Rs = null;
  }
  loadIfEnabled() {
    if (!(this._conversationsManager || this.ks || this._instance.config.disable_conversations || H1(this._instance.config) || this._instance.config.cookieless_mode && this._instance.consent.isOptedOut())) {
      var t = T?.__PosthogExtensions__;
      if (t && !I(this.$s) && this.$s) if (this.Rs && this.Rs.token) {
        this.ks = !0;
        try {
          var e = t.initConversations;
          if (e) return this.Ps(e), void (this.ks = !1);
          var r = t.loadExternalDependency;
          if (!r) return void this.Os(E2);
          r(this._instance, "conversations", ((i) => {
            i || !t.initConversations ? this.Os("Could not load conversations script", i) : this.Ps(t.initConversations), this.ks = !1;
          }));
        } catch (i) {
          this.Os("Error initializing conversations", i), this.ks = !1;
        }
      } else We.error("Conversations enabled but missing token in remote config.");
    }
  }
  Ps(t) {
    if (this.Rs) try {
      this._conversationsManager = t(this.Rs, this._instance), We.info("Conversations loaded successfully");
    } catch (e) {
      this.Os("Error completing conversations initialization", e);
    }
    else We.error("Cannot complete initialization: remote config is null");
  }
  Os(t, e) {
    We.error(t, e), this._conversationsManager = null, this.ks = !1;
  }
  show() {
    this._conversationsManager ? this._conversationsManager.show() : We.warn("Conversations not loaded yet.");
  }
  hide() {
    this._conversationsManager && this._conversationsManager.hide();
  }
  isAvailable() {
    return this.$s === !0 && !_t(this._conversationsManager);
  }
  isVisible() {
    var t, e;
    return (t = (e = this._conversationsManager) == null ? void 0 : e.isVisible()) !== null && t !== void 0 && t;
  }
  sendMessage(t, e, r) {
    var i = this;
    return pt((function* () {
      return i._conversationsManager ? i._conversationsManager.sendMessage(t, e, r) : (We.warn(Ft), null);
    }))();
  }
  getMessages(t, e) {
    var r = this;
    return pt((function* () {
      return r._conversationsManager ? r._conversationsManager.getMessages(t, e) : (We.warn(Ft), null);
    }))();
  }
  markAsRead(t) {
    var e = this;
    return pt((function* () {
      return e._conversationsManager ? e._conversationsManager.markAsRead(t) : (We.warn(Ft), null);
    }))();
  }
  getTickets(t) {
    var e = this;
    return pt((function* () {
      return e._conversationsManager ? e._conversationsManager.getTickets(t) : (We.warn(Ft), null);
    }))();
  }
  requestRestoreLink(t) {
    var e = this;
    return pt((function* () {
      return e._conversationsManager ? e._conversationsManager.requestRestoreLink(t) : (We.warn(Ft), null);
    }))();
  }
  restoreFromToken(t) {
    var e = this;
    return pt((function* () {
      return e._conversationsManager ? e._conversationsManager.restoreFromToken(t) : (We.warn(Ft), null);
    }))();
  }
  restoreFromUrlToken() {
    var t = this;
    return pt((function* () {
      return t._conversationsManager ? t._conversationsManager.restoreFromUrlToken() : (We.warn(Ft), null);
    }))();
  }
  getCurrentTicketId() {
    var t, e;
    return (t = (e = this._conversationsManager) == null ? void 0 : e.getCurrentTicketId()) !== null && t !== void 0 ? t : null;
  }
  getWidgetSessionId() {
    var t, e;
    return (t = (e = this._conversationsManager) == null ? void 0 : e.getWidgetSessionId()) !== null && t !== void 0 ? t : null;
  }
} }, d4 = { logs: class {
  constructor(t) {
    var e;
    this.Is = !1, this.Cs = !1, this._instance = t, this._instance && (e = this._instance.config.logs) != null && e.captureConsoleLogs && (this.Is = !0);
  }
  initialize() {
    this.loadIfEnabled();
  }
  onRemoteConfig(t) {
    var e, r = (e = t.logs) == null ? void 0 : e.captureConsoleLogs;
    !W(r) && r && (this.Is = !0, this.loadIfEnabled());
  }
  reset() {
  }
  loadIfEnabled() {
    if (this.Is && !this.Cs) {
      var t = de("[logs]"), e = T?.__PosthogExtensions__;
      if (e) {
        var r = e.loadExternalDependency;
        r ? r(this._instance, "logs", ((i) => {
          var n;
          i || (n = e.logs) == null || !n.initializeLogs ? t.error("Could not load logs script", i) : (e.logs.initializeLogs(this._instance), this.Cs = !0);
        })) : t.error(E2);
      } else t.error("PostHog Extensions not found.");
    }
  }
} }, u4 = R({}, hn, e4, t4, r4, i4, n4, s4, o4, a4, l4, c4, d4);
rt.__defaultExtensionClasses = R({}, u4);
var ja;
ja = Kr[er] = new rt(), (function() {
  function t() {
    t.done || (t.done = !0, rl = !1, re(Kr, (function(e) {
      e._dom_loaded();
    })));
  }
  P != null && P.addEventListener ? P.readyState === "complete" ? t() : fe(P, "DOMContentLoaded", t, { capture: !1 }) : C && M.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized");
})();
const N2 = {
  _getContext: () => ({
    host: location.hostname,
    origin: `${location.origin}${location.pathname}`
  }),
  trackLoad: () => {
  },
  trackEvent: (t, e) => {
  }
}, Xn = ["icaro", "guga", "hosana"], Pe = () => {
  const t = ne((h) => h.send), e = (h) => {
    if (!h.baseUrl && !h.personalizationUrl) return;
    h.baseUrl && t(qe.PLAYER, be.SET_BASE_URL, h.baseUrl), h.personalizationUrl && t(qe.CUSTOMIZATION, be.SET_PERSONALIZATION, h.personalizationUrl);
    const { config: f } = X.get();
    X.set({ config: { ...f, ...h } });
  }, r = () => {
    t(qe.PLAYER, be.PLAY_WELCOME), t(qe.PLAYER, be.SET_SUBTITLES_STATE, 0), X.set({ isPlayingWelcome: !0 });
  }, i = (h) => {
    h ? (t(qe.PLAYER, be.PLAY, h), X.set({ gloss: h })) : t(qe.PLAYER, be.SET_PAUSE_STATE, 0);
  };
  return {
    setConfig: e,
    play: i,
    stop: () => {
      t(qe.PLAYER, be.STOP);
    },
    pause: () => {
      t(qe.PLAYER, be.SET_PAUSE_STATE, 1);
    },
    setSpeed: (h) => {
      t(qe.PLAYER, be.SET_SPEED, h), X.set({ speed: h });
    },
    repeat: () => {
      const { gloss: h } = X.get();
      h && i(h);
    },
    toggleAvatar: (h) => {
      const f = X.get().avatar, v = (Xn.indexOf(h || f) + (h ? 0 : 1)) % Xn.length, g = Xn[v];
      t(qe.PLAYER, be.SET_AVATAR, g), X.set({ avatar: g });
    },
    playWelcome: r,
    toggleSubtitles: (h) => {
      const { showSubtitles: f } = X.get(), v = h ?? !f;
      t(qe.PLAYER, be.SET_SUBTITLES_STATE, Number(v)), X.set({ showSubtitles: v });
    },
    setRegion: (h) => {
      const f = `${yr.DICTIONARY_URL}${h.abbreviation}/`;
      e({ baseUrl: f }), X.set({ region: h });
    },
    setEmotion: (h) => {
      X.set({ emotion: h }), t(qe.EMOTION, h.action);
    }
  };
}, ul = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M6.5682 11.8471L7.4318 9.4528H7.4773L8.3409 11.8471H6.5682ZM12.788 17.098C13.5152 16.7449 14.2336 16.4802 14.9432 16.3037C15.6527 16.1271 16.3989 16.0388 17.1818 16.0388C17.7474 16.0388 18.3219 16.0835 18.9052 16.173C19.4886 16.2625 20.0151 16.3869 20.4848 16.546V7.1928C19.9748 6.9542 19.4382 6.7776 18.875 6.6632C18.3118 6.5489 17.7474 6.4918 17.1818 6.4918C16.3989 6.4918 15.6363 6.6037 14.8939 6.8274C14.1514 7.0512 13.4495 7.3719 12.788 7.7896V17.098ZM6.2727 12.675H8.6364L9.0682 13.8609C9.0985 13.9504 9.1515 14.0213 9.2273 14.0735C9.303 14.1257 9.3939 14.1518 9.5 14.1518C9.6667 14.1518 9.7992 14.0847 9.8977 13.9504C9.9962 13.8161 10.0152 13.6744 9.9545 13.5253L8.0909 8.692C8.0606 8.6025 8.0038 8.528 7.9205 8.4683C7.8371 8.4086 7.7424 8.3788 7.6364 8.3788H7.2727C7.1667 8.3788 7.072 8.4086 6.9886 8.4683C6.9053 8.528 6.8485 8.6025 6.8182 8.692L4.95455 13.5253C4.89394 13.6744 4.91288 13.8161 5.01136 13.9504C5.10985 14.0847 5.24242 14.1518 5.40909 14.1518C5.51515 14.1518 5.60985 14.1257 5.69318 14.0735C5.77651 14.0213 5.83333 13.9429 5.86364 13.8385L6.2727 12.675ZM12.0302 19C11.8787 19 11.7386 18.9838 11.6098 18.9514C11.481 18.9191 11.3636 18.8681 11.2575 18.7986C10.5858 18.3958 9.8737 18.0863 9.1211 17.87C8.3687 17.6537 7.6011 17.5456 6.8182 17.5456C6.2323 17.5456 5.6603 17.6176 5.10227 17.7617C4.54424 17.906 3.995 18.0924 3.45455 18.3211C3.11621 18.4852 2.78917 18.4678 2.47341 18.269C2.1578 18.0701 2 17.7842 2 17.4113V6.9093C2 6.7056 2.04924 6.5166 2.14773 6.3426C2.24621 6.1685 2.39394 6.0342 2.59091 5.93979C3.25258 5.62653 3.93818 5.39158 4.64773 5.23495C5.35727 5.07832 6.0808 5 6.8182 5C7.7474 5 8.6527 5.1218 9.5341 5.3654C10.4155 5.60915 11.2475 5.97962 12.0302 6.4768C12.803 5.97962 13.6249 5.60915 14.4961 5.3654C15.3673 5.1218 16.2626 5 17.1818 5C17.9192 5 18.6402 5.07832 19.3448 5.23495C20.0493 5.39158 20.7323 5.62653 21.3939 5.93979C21.5908 6.0342 21.7411 6.1685 21.8448 6.3426C21.9483 6.5166 22 6.7056 22 6.9093V17.4113C22 17.8041 21.8371 18.1024 21.5114 18.3063C21.1856 18.5101 20.8586 18.515 20.5302 18.3211C19.9999 18.0824 19.4558 17.8935 18.8977 17.7543C18.3397 17.6151 17.7677 17.5456 17.1818 17.5456C16.4091 17.5456 15.6515 17.6537 14.9091 17.87C14.1667 18.0863 13.4646 18.3958 12.803 18.7986C12.6969 18.8681 12.5795 18.9191 12.4507 18.9514C12.3219 18.9838 12.1817 19 12.0302 19ZM13.8182 9.2888C13.8182 9.1844 13.8548 9.0812 13.928 8.9791C14.0013 8.8772 14.0834 8.8089 14.1743 8.7742C14.6237 8.615 15.0808 8.4931 15.5455 8.4085C16.0102 8.3241 16.495 8.2819 17 8.2819C17.3232 8.2819 17.6401 8.3005 17.9507 8.3378C18.2613 8.3751 18.5656 8.4285 18.8636 8.498C18.9697 8.5279 19.0644 8.5901 19.1477 8.6847C19.2311 8.7791 19.2727 8.886 19.2727 9.0053C19.2727 9.1992 19.207 9.3459 19.0757 9.4454C18.9445 9.5448 18.7804 9.5696 18.5834 9.52C18.341 9.4554 18.0872 9.4069 17.822 9.3745C17.5569 9.3421 17.2829 9.326 17 9.326C16.5758 9.326 16.1642 9.3658 15.7652 9.4454C15.3661 9.525 14.9772 9.6393 14.5984 9.7885C14.3661 9.873 14.178 9.8681 14.0341 9.7735C13.8902 9.679 13.8182 9.5175 13.8182 9.2888ZM13.8182 14.2115C13.8182 14.1071 13.8548 14.0014 13.928 13.8945C14.0013 13.7875 14.0834 13.7167 14.1743 13.6819C14.6237 13.5227 15.0808 13.4034 15.5455 13.3239C16.0102 13.2444 16.495 13.2046 17 13.2046C17.3232 13.2046 17.6401 13.2233 17.9507 13.2606C18.2613 13.2978 18.5656 13.3512 18.8636 13.4208C18.9697 13.4506 19.0644 13.5128 19.1477 13.6074C19.2311 13.7018 19.2727 13.8087 19.2727 13.928C19.2727 14.122 19.207 14.2687 19.0757 14.3682C18.9445 14.4675 18.7804 14.4924 18.5834 14.4427C18.341 14.3781 18.0872 14.3296 17.822 14.2972C17.5569 14.2649 17.2829 14.2487 17 14.2487C16.5758 14.2487 16.1642 14.2848 15.7652 14.357C15.3661 14.429 14.9772 14.5396 14.5984 14.6888C14.3661 14.7734 14.178 14.7721 14.0341 14.685C13.8902 14.598 13.8182 14.4402 13.8182 14.2115ZM13.8182 11.7502C13.8182 11.6458 13.8548 11.5425 13.928 11.4405C14.0013 11.3386 14.0834 11.2703 14.1743 11.2355C14.6237 11.0764 15.0808 10.9545 15.5455 10.8699C16.0102 10.7855 16.495 10.7433 17 10.7433C17.3232 10.7433 17.6401 10.7619 17.9507 10.7992C18.2613 10.8365 18.5656 10.8899 18.8636 10.9594C18.9697 10.9892 19.0644 11.0514 19.1477 11.146C19.2311 11.2404 19.2727 11.3473 19.2727 11.4667C19.2727 11.6606 19.207 11.8073 19.0757 11.9068C18.9445 12.0062 18.7804 12.031 18.5834 11.9813C18.341 11.9167 18.0872 11.8682 17.822 11.8359C17.5569 11.8035 17.2829 11.7873 17 11.7873C16.5758 11.7873 16.1642 11.8271 15.7652 11.9068C15.3661 11.9863 14.9772 12.1007 14.5984 12.2498C14.3661 12.3344 14.178 12.3294 14.0341 12.2348C13.8902 12.1404 13.8182 11.9789 13.8182 11.7502Z" })
    ]
  }
), hl = {
  content: void 0,
  action: void 0
}, O2 = et()(() => ({
  ...hl
})), pl = () => O2.setState(hl), gl = O2.setState, h4 = "data:image/webp;base64,UklGRoIFAABXRUJQVlA4WAoAAAAQAAAAOwAAOwAAQUxQSMoBAAABkITtnyE5/+Hato2TvRvbttc+JnfjaNtOTrZ9su1kvdtP16mqq37hMSImgP4xTTZHZ2dHmwnOHl5atmjz4RNnzpw4vHlRWWm4HcaeXnfwSRsTbntysC7NjuDUd/t7JvX9tr5Oqiy5u5uZ9ObduRYlXvPeM6Xv53opiN2vMcXavhhpaRcZ4MU0SQmXGeTlBCkBxxno8QAJ9uUMdrnd2KhmnOaRhoKuMuArQUaadCS90UDwXQZ9J1hsuoalTRNyPMTADzmKpL5De5ciMkNH06eLrGLwKwXcLuBdcONFvcB7HsnL/oH3I5s3qAuvayBvko6nT+TNYb/gbF7lr1DBK/sVynhTfoUpvKHdeN1DefnNeM15vNjXeK9jeZ7X8K558syb8TaZeVSNV02CmV/QvmSIuJ5CO+UqQg1o9SQc9xTrSayYaQHWfJMYJTxEehBPRmu6cbqqyLD7HpxdbsYo8TbKzQSSWfQE43Ehye3zBOFRL5Kdf13d1TySH72hTU3bukhS6TThuiZPuzrOiRQHVl1ul9N+qTKAAL0HrbzfbKT53opBXgRq9i8oX37g4v1Hjx49un9h//KyAn8zQZusrn7BwcHBfq5WE/03BFZQOCCSAwAAVBIAnQEqPAA8AAAAJgALUbgDc3vXmqVZ+0bl+Zvsu5gPe96kfuA9wD9L+l35gP2g/Z33hfQt6AH88/znWOegB5a/7M/Bv+4HpYPAMq+bcUXZYbo/UVw0TiC5i/2ACXQYIj+rWMuz+tL82e/ZuEYpv/tCzISz9kISMd5WT2ZSg7Bp7UhrTOwiTlFyg4JIVvg4cevfw/uAs2A9kAAA/v86Qf8QFd+4SMJe9tMhrGbEzYWoXeMgHrHm8Wx+ZOYgsfBMPly38bS4/3mzg/KZrqctzdFjpsgdZvsCXNFuZ8YwMh9lfh7uF6TwaL5l8tOU+B9W2YHPKFu9K/dgJquyT3lW8u/EaN9FeMBPS9ui28g/Jq7EySqLCrqTjr9CD3NqHYMJ7xMJO8RvHP/0i+UqRL9ubMJHf9FKqN+YWiPNosChq229ORiCZwOX320/W/zHhj7Ic5vKXZz/X/8hsPY0PCoBE8RnD+R2t//qWF42Svu//ha+na1b9vC5uRZIcf4Fue9KK4ZPHjmahpAuGxVhhU1v/b/IDZ1hTDzC8dbTg+FwzsWA6n7M05e2cnrbbJtnMafj+J5H7K+4+5KPvNBCU4+T1wuNaoghIYgPYQDBPWF8wL3GB9HdPgyd2fEKleda9WHTnuCQ6OP/cv7aGYQyLQnNwibxgxBbSLRChhf+ZeCR/28iCDsaRMC+Iws2Ia3wG26LEsuT5VoVAeiJa7pwfdbvCCsV9YGDjgbj9OocdOOQF4wThrDOZRvxi1spvlA7NnmefkE1X2sxwzz3qoKHgwiiNZMrFtepReX/meSaqyUrjqER/vlcQkhrHNw00A61WmVLfbchXHfnLOmLhtGINyyWZh2hyxTV4zvwcOdZbmRp1r99VbEiD+fJQwk/t5VQ/nxFl4QudxVbNoNmEabaHlvQ6QcZZelNwWX0d2CxAmo/ja/yEm3WzPU8+vwCCm8SY/NbFnMRzIdZ2XIgNl0uURZoAvGFM2AvIs8ViuAdF3bCjvDZmwtTFWpqeDM1yH8VeBrwDsJrksjK8VzCDQZujJxnaXIIeGAIVya9pVp/nJauUfDyoUXccqcHv3EwzjQ9rjmHr/rPPhC2cjAtdFIq8G5rYERmylqAXAwSX/6Tn1QKuaFDWFEsLHZpAlYMx1l0HDnh6T5XCaDRo2WCPc7ksJUv9jkoSPyHTyVeIPWRL558+rWIM706PtSxoai2luOVlh9gAAA=", p4 = ({ onRetry: t, isMaxRetries: e }) => {
  const r = Ee();
  return /* @__PURE__ */ c("div", { className: "flex h-full flex-col items-center justify-center gap-2 px-4", children: [
    /* @__PURE__ */ c("img", { src: h4, alt: "Emoji de rosto triste", className: "size-7 sm:size-8" }),
    /* @__PURE__ */ c("p", { className: "mb-3 px-4 text-center font-semibold text-sm sm:text-base", children: "Não foi possível carregar o dicionário de sinais." }),
    !e && /* @__PURE__ */ c(Y, { onClick: t, size: r ? "xs" : "sm", className: "rounded-full", variant: "outline-gov", children: "Tentar novamente" }),
    e && /* @__PURE__ */ c("span", { className: "text-muted-foreground text-xs sm:text-sm", children: "Tente novamente mais tarde." })
  ] });
}, g4 = [
  { label: "Todos", value: "all" },
  { label: "Recentes", value: "recents" }
], f4 = () => {
  const { setFilter: t, filter: e, filteredSigns: r, handleHistoryClear: i } = w2(), { signs: n } = ir(), o = Ee(), s = !n.length;
  return /* @__PURE__ */ c("div", { className: "flex items-center gap-2 px-4 [&_button]:rounded-full", children: [
    g4.map((a) => {
      const l = e === a.value;
      return s && a.value === "recents" ? null : /* @__PURE__ */ c(
        Y,
        {
          inert: l,
          variant: l ? "default" : "outline",
          onClick: () => t(a.value),
          className: "animate-move-down",
          size: o ? "xs" : "sm",
          children: [
            a.label,
            l && !!r.length && /* @__PURE__ */ c("span", { className: "text-xs leading-0", children: [
              "(",
              r.length,
              ")"
            ] })
          ]
        },
        a.value
      );
    }),
    e === "recents" && /* @__PURE__ */ c(
      Y,
      {
        onClick: i,
        className: "ml-auto text-muted-foreground not-focus:outline-0 outline-destructive hover:text-destructive focus:[&_svg]:text-destructive",
        size: o ? "icon-xs" : "icon-sm",
        variant: "ghost",
        "aria-label": "Limpar histórico",
        children: /* @__PURE__ */ c(V0, {})
      }
    )
  ] });
}, fl = ({ className: t, size: e = 24, ...r }) => /* @__PURE__ */ c("span", { className: B("flex aspect-square items-center justify-center text-primary", t), ...r, children: [
  /* @__PURE__ */ c(
    "svg",
    {
      "aria-hidden": "true",
      xmlns: "http://www.w3.org/2000/svg",
      width: e,
      height: e,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "animate-spin",
      children: /* @__PURE__ */ c("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
    }
  ),
  /* @__PURE__ */ c("span", { className: "sr-only", children: "Loading..." })
] }), v4 = () => /* @__PURE__ */ c("div", { className: "grid h-full place-content-center", children: /* @__PURE__ */ c(fl, {}) }), m4 = () => {
  const { search: t, searchRef: e, handleSearchChange: r, handleClearSearch: i } = w2();
  return /* @__PURE__ */ c("div", { className: "relative flex items-center p-4 pb-0", children: [
    /* @__PURE__ */ c(
      "input",
      {
        ref: e,
        type: "text",
        placeholder: "Pesquisar (ex: AJUDAR)...",
        onInput: (n) => r(n.currentTarget.value),
        className: "h-9 w-full rounded-md border p-2 pr-8 outline-primary placeholder:text-sm focus:outline-2 focus:outline-solid"
      }
    ),
    t && /* @__PURE__ */ c(
      Y,
      {
        onClick: i,
        "aria-label": "Limpar busca",
        variant: "ghost",
        size: "icon-xs",
        className: "absolute right-5 rounded-sm bg-transparent! text-muted-foreground outline-destructive hover:text-destructive focus:text-destructive",
        children: /* @__PURE__ */ c(an, {})
      }
    )
  ] });
}, b4 = () => {
  const { play: t } = Pe(), e = w2(), r = ir((s) => s.signs), i = nt((s) => s.open), n = (s) => {
    t(s);
    const a = [s, ...r.filter((l) => l !== s)];
    a1.set({ signs: a }), ze.set({ text: void 0 }), D0.set({ screen: "main" }), gl({
      action: () => i("dictionary"),
      content: /* @__PURE__ */ c(ge, { children: [
        /* @__PURE__ */ c(ul, {}),
        "Reabrir Dicionário"
      ] })
    });
  };
  if (e.isLoading) return /* @__PURE__ */ c(v4, {});
  if (!e.data) return /* @__PURE__ */ c(p4, { onRetry: e.retry, isMaxRetries: e.isMaxRetries });
  const o = !e.filteredSigns.length && !!e.search;
  return /* @__PURE__ */ c("div", { className: "flex h-full flex-col gap-2 overflow-hidden", children: [
    /* @__PURE__ */ c(m4, {}),
    /* @__PURE__ */ c(f4, {}),
    o && /* @__PURE__ */ c("p", { className: "break-all px-4 font-semibold text-muted-foreground text-xs sm:text-sm", children: [
      "Sem resultados para ",
      /* @__PURE__ */ c("q", { className: "text-foreground", children: e.search })
    ] }),
    /* @__PURE__ */ c("div", { ref: e.listRef, className: B("h-full overflow-auto", !e.filteredSigns.length && "hidden"), children: /* @__PURE__ */ c("ul", { className: "flex h-full w-max min-w-full flex-col text-sm", children: [
      e.visibleSigns.map((s) => /* @__PURE__ */ c("li", { children: /* @__PURE__ */ c(
        "button",
        {
          type: "button",
          onClick: () => n(s),
          className: "w-full cursor-pointer whitespace-nowrap px-4 py-1.25 text-left text-xs hover:bg-muted focus:bg-primary focus:text-primary-foreground sm:text-sm",
          children: s
        }
      ) }, s)),
      /* @__PURE__ */ c("div", { ref: e.loaderRef, className: B("py-2", e.filteredSigns.length <= e.visibleCount && "hidden") })
    ] }) })
  ] });
}, C4 = () => /* @__PURE__ */ c(gu, { children: /* @__PURE__ */ c(U0, { children: [
  /* @__PURE__ */ c(j0, { close: !0, children: /* @__PURE__ */ c(Z0, { children: "Dicionário" }) }),
  /* @__PURE__ */ c(B0, { className: "overflow-hidden p-0", children: /* @__PURE__ */ c(b4, {}) })
] }) }), w4 = () => {
  const t = nt((e) => e.screen);
  return /* @__PURE__ */ c(ge, { children: [
    t === "dictionary" && /* @__PURE__ */ c(C4, {}),
    t === "about" && /* @__PURE__ */ c(Cd, {})
  ] });
};
let Jn = [];
const _4 = (t) => (Jn.push(t), () => {
  Jn = Jn.filter((e) => e !== t);
}), sr = et()(() => ({})), Bt = {
  get: sr.getState,
  set: sr.setState,
  subscribe: sr.subscribe
}, y4 = si("absolute inset-x-2 flex items-center justify-center transition-all duration-500", {
  variants: {
    position: {
      top: "top-14 animate-move-down",
      bottom: "bottom-14 animate-move-up"
    },
    align: {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center"
    }
  },
  defaultVariants: {
    position: "bottom",
    align: "center"
  }
}), x4 = ({
  message: t,
  isExiting: e,
  position: r = "bottom",
  align: i = "center",
  variant: n = "default",
  className: o
}) => /* @__PURE__ */ c(
  "div",
  {
    className: B(
      y4({ position: r, align: i }),
      e && (r === "top" ? "-top-100!" : "-bottom-100!"),
      o
    ),
    children: /* @__PURE__ */ c(
      "div",
      {
        "data-slot": "toast-content",
        className: B(
          "pointer-events-auto w-fit rounded-lg border bg-background px-2.5 py-1.5 text-sm transition-all duration-500 ease-in-out",
          n === "success" && "border-none bg-success text-success-foreground",
          n === "destructive" && "border-none bg-destructive text-destructive-foreground"
        ),
        children: /* @__PURE__ */ c("div", { children: t })
      }
    )
  }
), k4 = () => {
  const [t, e] = le([]), r = sr((i) => i.appRoot);
  return F(() => _4(e), []), r ? l2(
    /* @__PURE__ */ c("div", { className: "pointer-events-none absolute inset-0 z-40", children: t.map((i) => /* @__PURE__ */ c(x4, { ...i }, i.id)) }),
    r
  ) : null;
}, A4 = () => {
  const t = ce((e) => e.isTranslating);
  return /* @__PURE__ */ c(ge, { children: [
    /* @__PURE__ */ c(w4, {}),
    /* @__PURE__ */ c(ud, {}),
    /* @__PURE__ */ c(k4, {}),
    t && /* @__PURE__ */ c(u3, {})
  ] });
}, qt = (t, e) => (e || document).querySelector(t), pn = (t, e) => Array.from((e || document).querySelectorAll(t));
function E4(t, e) {
  const r = e.join(`
`).replace(/:root/g, ":host"), i = [], n = r.replace(/@property\s+[^{]+\{[^}]*\}/g, (s) => (i.push(s), ""));
  if (i.length > 0) {
    const s = document.createElement("style");
    s.textContent = i.join(`
`), document.head.appendChild(s);
  }
  const o = document.createElement("style");
  o.textContent = n, t.firstChild ? t.insertBefore(o, t.firstChild) : t.appendChild(o);
}
const S4 = () => {
  const { onClose: t } = vl(), { status: e, gloss: r } = ne(Je("gloss", "status")), { repeat: i } = Pe(), n = Ve(() => r && e === "idle", [r, e]);
  return /* @__PURE__ */ c("div", { className: "absolute top-1 right-1 flex flex-col rounded-lg", children: [
    /* @__PURE__ */ c(Y, { tabindex: 1, onClick: t, size: "icon-xs", children: /* @__PURE__ */ c(an, { "aria-label": "Fechar guia" }) }),
    n && /* @__PURE__ */ c(Y, { tabindex: 1, onClick: i, size: "icon-xs", className: "animate-move-right", children: /* @__PURE__ */ c(T0, { "aria-label": "Repetir texto" }) })
  ] });
}, $o = [
  {
    selector: "#header-menu-button",
    text: "Clique no Menu para acessar o Tradutor, o Dicionário ou saber mais sobre o VLibras.",
    gloss: "CLIQUE MENU ACESSAR TRADUTOR DICIONÁRIO SABER MAIS&QUANTIDADE SOBRE&ASSUNTO VLIBRAS",
    guideClx: "top-0! bottom-auto!"
  },
  {
    selector: "#header-actions",
    text: "Aqui você pode aumentar o tamanho da janela e fechar a aplicação.",
    gloss: "AQUI VOCÊ PODER&POSSIBILIDADE AUMENTAR&TAMANHO JANELA FECHAR&INFORMÁTICA APLICAÇÃO",
    guideClx: "top-0! bottom-auto!"
  },
  {
    selector: "#toggle-avatar-button",
    text: "Aqui você pode alterar o avatar. Você pode escolher entre Ícaro, Hosana e Guga.",
    gloss: "AQUI VOCÊ PODER&POSSIBILIDADE TROCAR AVATAR [PONTO] VOCÊ PODER&POSSIBILIDADE ESCOLHER ENTRE [WLCM]ICARO_SINAL [WLCM]HOZANA_SINAL [WLCM]GUGA_SINAL ",
    guideClx: "top-auto! bottom-6.5!"
  },
  {
    selector: "#main-action-speed-options",
    text: "Aqui você pode pausar, retomar, reiniciar ou alterar a velocidade da animação.",
    gloss: "AQUI VOCÊ PODER&POSSIBILIDADE RETOMAR RETOMAR REINICIAR OU ALTERAR VELOCIDADE ANIMAR",
    guideClx: "top-auto! bottom-0!"
  },
  {
    selector: "#emotions-subtitles-options",
    text: "Estas opções permitem alterar a emoção do avatar e ativar ou desativar as legendas.",
    gloss: "OPÇÃO PERMITIR&LIBERAR ALTERAR EMOÇÃO AVATAR ATIVAR OU DESATIVAR LEGENDA",
    guideClx: "top-auto! bottom-0!"
  },
  {
    selector: "#settings-option",
    text: "Opção para acessar as configurações do VLibras. Aqui você pode alterar o tema, regionalismo e transparência do fundo do avatar.",
    gloss: "OPÇÃO ACESSAR CONFIGURAÇÃO [PONTO] AQUI VOCÊ PODER&POSSIBILIDADE ALTERAR TEMA&ASSUNTO ALTERAR REGIONAL ALTERAR TRANSPARÊNCIA&NITIDEZ ALTERAR FUNDO&ATRÁS AVATAR",
    guideClx: "top-auto! bottom-0!"
  }
], R4 = () => {
  const t = Ae(null), e = Ae(null), { index: r, setIndex: i, onClose: n } = vl(), o = Ve(() => r === 0, [r]), s = Ve(() => r === $o.length - 1, [r]);
  return F(() => t.current?.focus(), [o]), F(() => e.current?.focus(), [s]), /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2", children: [
    /* @__PURE__ */ c(
      Y,
      {
        tabindex: 2,
        ref: e,
        disabled: o,
        variant: "ghost",
        size: "sm",
        className: "text-primary-foreground outline-primary-foreground hover:bg-primary-foreground/5",
        onClick: () => i(r - 1),
        children: [
          /* @__PURE__ */ c(H0, {}),
          "Voltar"
        ]
      }
    ),
    /* @__PURE__ */ c("div", { className: "flex h-4 w-40 items-center justify-center gap-1 [&_span]:rounded-full [&_span]:bg-primary-foreground/30", children: $o.map((a, l) => /* @__PURE__ */ c(
      "span",
      {
        "data-active": l === r,
        className: "size-2 rounded-full data-[active=true]:bg-primary-foreground!"
      },
      l
    )) }),
    /* @__PURE__ */ c(
      Y,
      {
        tabindex: 2,
        ref: t,
        variant: "ghost",
        size: "sm",
        className: "text-primary-foreground outline-primary-foreground hover:bg-primary-foreground/5",
        onClick: s ? n : () => i((a) => a + 1),
        children: [
          s ? "Concluir" : "Avançar",
          !s && /* @__PURE__ */ c(G3, {})
        ]
      }
    )
  ] });
}, at = et((t) => ({
  open: !1,
  onOpenChange: (e) => t((r) => ({ open: ho(e, r.open) })),
  reset: () => t({ open: !1, element: void 0 })
})), Za = {
  get: at.getState,
  set: at.setState
}, P4 = si("absolute flex flex-col gap-4 z-50 rounded-xl bg-primary p-4 transition-position", {
  variants: {
    isMobile: { true: "", false: "" },
    isLeft: { true: "", false: "" },
    isTop: { true: "", false: "" },
    isExpanded: { true: "", false: "" }
  },
  compoundVariants: [
    {
      isExpanded: !1,
      class: "w-screen max-w-xs"
    },
    {
      isMobile: !1,
      isExpanded: !1,
      isLeft: !0,
      class: "top-0 -right-3 translate-x-full"
    },
    {
      isMobile: !1,
      isExpanded: !1,
      isLeft: !1,
      class: "top-0 -left-3 -translate-x-full"
    },
    {
      isMobile: !0,
      isExpanded: !1,
      isTop: !0,
      class: "inset-x-0 -bottom-2 left-1/2 min-w-xs -translate-x-1/2 translate-y-full"
    },
    {
      isMobile: !0,
      isExpanded: !1,
      isTop: !1,
      class: "inset-x-0 -top-2 left-1/2 min-w-xs -translate-x-1/2 -translate-y-full"
    },
    {
      isExpanded: !0,
      class: "z-2147483647 inset-x-4 bottom-16"
    }
  ],
  defaultVariants: {
    isMobile: !1,
    isExpanded: !1,
    isLeft: !1,
    isTop: !1
  }
}), { Provider: M4, useCtx: vl } = q0(), I4 = () => {
  const { pos: t } = ln(), { innerWidth: e, innerHeight: r } = window, { play: i, stop: n } = Pe(), [o, s] = le(0), a = at(), l = ce((w) => w.isExpanded), u = ce((w) => w.isTranslating), d = sr((w) => w.appRoot), p = Ee(), h = Ve(() => t.x < (e - (d?.clientWidth || 0)) / 2, [t.x, e]), f = Ve(() => t.y < (r - (d?.clientHeight || 0)) / 2, [t.y, r]), v = Ve(() => $o[o], [o]), g = () => {
    ze.set({ text: void 0 }), X.set({ gloss: void 0 }), Za.get().reset(), m(), n();
  };
  if (F(() => {
    u && g();
  }, [u]), F(() => {
    if (!d) return;
    m(), i(v.gloss), v.action?.();
    const w = qt(v.selector, d);
    w && (Za.set({ element: v }), w.dataset.highlight = "true");
  }, [v]), !d) return null;
  const m = () => {
    if (!d) return;
    pn("[data-highlight=true]", d)?.forEach((y) => y.dataset.highlight = "false");
  };
  return /* @__PURE__ */ c(M4, { data: { index: o, setIndex: s, onClose: g, ...a }, children: /* @__PURE__ */ c(
    "div",
    {
      className: B(
        P4({ isMobile: p, isLeft: h, isTop: f, isExpanded: l }),
        !l && !p && v.guideClx
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "pr-4", children: /* @__PURE__ */ c("span", { className: "break-anywhere expanded:text-base! text-primary-foreground text-sm sm:text-base", children: v.text }) }),
        /* @__PURE__ */ c(S4, {}),
        /* @__PURE__ */ c(R4, {}),
        !l && /* @__PURE__ */ c(
          "span",
          {
            className: B(
              "absolute -z-10 my-4 size-4 rotate-45 rounded-xs bg-primary max-lg:hidden",
              v.guideClx,
              h ? "-left-1" : "-right-1"
            )
          }
        )
      ]
    }
  ) });
}, L4 = () => {
  const t = at((e) => e.open);
  return /* @__PURE__ */ c(ge, { children: t && /* @__PURE__ */ c(I4, {}) });
}, N4 = si("fixed", {
  variants: {
    isDragging: { true: "", false: "transition-all" },
    isOpen: { true: "", false: "opacity-0" },
    hasMoved: { true: "top-0 left-0", false: "" },
    isExpanded: { true: "", false: "" },
    position: { left: "", right: "" }
  },
  compoundVariants: [
    {
      hasMoved: !1,
      position: "left",
      class: "top-1/2 left-2 -translate-y-1/2 animate-move-left"
    },
    {
      hasMoved: !1,
      position: "right",
      class: "top-1/2 right-2 -translate-y-1/2 animate-move-right"
    },
    {
      isOpen: !1,
      position: "left",
      class: "top-1/2 left-2 -translate-y-1/2 animate-move-left -left-200"
    },
    {
      isOpen: !1,
      position: "right",
      class: "top-1/2 right-2 -translate-y-1/2 animate-move-right -right-200"
    },
    {
      isExpanded: !0,
      isOpen: !0,
      class: [
        "w-dvw max-w-dvw sm:h-auto sm:w-xl sm:[--player-height:800px]",
        "max-sm:translate-none! max-sm:transform-none! [--player-height:calc(100dvh-52px)] max-sm:inset-0 max-sm:rounded-none! max-sm:border-none!"
      ]
    }
  ],
  defaultVariants: {
    isDragging: !1,
    isOpen: !0,
    hasMoved: !1,
    isExpanded: !1
  }
}), O4 = (t) => {
  const [e, r, i, n, o] = t.map((s) => s === "True");
  return { isPlaying: e, isPaused: r, isPlayingIntervalAnimation: i, isLoading: n, isRepeatable: o };
}, H4 = (t, e) => {
  if (yr.DEV) return !0;
  try {
    const r = new URL(t).host, i = new URL(e).host;
    return r === i;
  } catch {
    return !1;
  }
}, T4 = ({ path: t }) => (F(() => {
  if (!t) return;
  const e = (r) => {
    if (!H4(t, r.origin))
      throw new Error(`Invalid host config: ${t} (path), ${r.origin} (origin) `);
    if (r.data?.type === "unity_event") {
      if (r.data.event === Er.FINISH_WELCOME) {
        const i = r.data.data === "True";
        X.set({
          isPlayingWelcome: !i,
          isWelcomeFinished: i,
          ...i ? { countGloss: { count: 0, max: 0 } } : {}
        });
      }
      if (r.data.event === Er.ON_LOAD_PLAYER && X.set({ isLoaded: !0 }), r.data.event === Er.UPDATE_PROGRESS) {
        const i = Number(r.data.data);
        Number.isNaN(i) || X.set({ progress: Number((i * 100).toFixed(0)) });
      }
      if (r.data.event === Er.ON_PLAYING_STATE_CHANGE) {
        const { isPlaying: i, isPaused: n, isLoading: o } = O4(r.data.data);
        n ? X.set({ status: "paused" }) : i && !n ? X.set({ status: "playing" }) : !i && !o && X.set({ status: "idle" });
      }
      if (r.data.event === Er.COUNTER_GLOSS) {
        const [i, n] = r.data.data;
        X.set({ countGloss: { count: i, max: n } });
      }
    }
  };
  return window.addEventListener("message", e), () => window.removeEventListener("message", e);
}, [t]), null), F4 = (t) => {
  const { path: e } = d2(), { isLoaded: r } = ne(), i = Ae(null), n = pc(`${e}/unity/index.html`), o = (s, a, l) => {
    i.current?.contentWindow?.postMessage({ type: "unity", object: s, method: a, params: l }, "*");
  };
  if (F(() => {
    i.current && X.set({ send: o });
  }, []), !!e)
    return /* @__PURE__ */ c(ge, { children: [
      /* @__PURE__ */ c(
        "iframe",
        {
          tabindex: -1,
          ref: i,
          title: "vlibras-player",
          sandbox: "allow-scripts allow-same-origin allow-pointer-lock",
          src: n,
          style: { border: "none", overflow: "hidden", opacity: r ? 1 : 0 },
          ...t
        }
      ),
      /* @__PURE__ */ c(T4, { path: e })
    ] });
}, H2 = ({ variant: t, asChild: e, size: r, className: i, disabled: n, ...o }) => e ? /* @__PURE__ */ c("div", { inert: n, role: "button", tabIndex: 0, className: i, ...o, children: o.children }) : /* @__PURE__ */ c(
  "div",
  {
    "aria-disabled": n,
    inert: n,
    role: "button",
    tabIndex: 0,
    className: B(f2({ variant: t, size: r }), i, n && "opacity-50"),
    ...o
  }
), Ba = si("border bg-popover", {
  variants: {
    variant: {
      default: "bg-background backdrop-blur-sm **:text-foreground",
      primary: "border-primary bg-primary *:text-primary-foreground",
      destructive: "border-destructive bg-destructive *:text-destructive-foreground",
      info: "border-blue-500 bg-blue-500 *:text-blue-50",
      warning: "border-orange-500 bg-orange-500 *:text-orange-50",
      success: "border-green-700 bg-green-700 *:text-green-50",
      reverse: "border-foreground/10 bg-foreground *:text-background"
    }
  }
}), yt = ({
  children: t,
  disabled: e,
  content: r,
  arrow: i,
  offset: n = -4,
  align: o = "center",
  placement: s = "top",
  variant: a = "default",
  className: l,
  open: u,
  onOpenChange: d,
  ...p
}) => {
  const [h, f] = le(!1), v = "vlibras-tooltip", g = u ?? h;
  if (!r) return t;
  const m = () => {
    switch (s) {
      case "top":
        return { marginTop: n * -1 };
      case "bottom":
        return { marginBottom: n * -1 };
      case "left":
        return { marginRight: n };
      case "right":
        return { marginLeft: n };
      default:
        return { top: `calc((-100% + 8px) - ${n}px)` };
    }
  }, w = (y) => {
    u === void 0 && f(y), d?.(y);
  };
  return /* @__PURE__ */ c(
    "div",
    {
      role: "tooltip",
      className: "relative inline-block has-[>[role=button][aria-disabled=true]]:pointer-events-none has-[>button:disabled]:pointer-events-none",
      onMouseEnter: () => w(!0),
      onMouseLeave: () => w(!1),
      onFocus: () => w(!0),
      onBlur: () => w(!1),
      children: [
        t,
        g && !e && /* @__PURE__ */ c(
          "div",
          {
            "data-slot": "tooltip-content",
            id: v,
            style: m(),
            className: B(
              Ba({ variant: a }),
              "absolute z-99999 rounded-lg px-3 py-1.5 not-expanded:text-xs text-popover-foreground text-sm text-sm shadow-lg transition-opacity duration-200",
              s === "bottom" && "-bottom-4 left-1/2 -translate-x-1/2 translate-y-full animate-move-down",
              s === "top" && "-top-4 left-1/2 -translate-x-1/2 -translate-y-full animate-move-up",
              s === "right" && "top-1/2 translate-x-1/2 -translate-y-1/2",
              s === "left" && "top-1/2 -translate-y-1/2",
              o === "start" && "right-auto! left-0! translate-x-0",
              o === "end" && "right-0! left-auto! translate-x-0",
              l
            ),
            ...p,
            children: /* @__PURE__ */ c("div", { className: "relative font-semibold", children: [
              r,
              i && /* @__PURE__ */ c(
                "div",
                {
                  "data-slot": "arrow-container",
                  className: B(
                    "absolute left-1/2 -ml-2 flex max-h-2 items-center justify-center overflow-hidden",
                    i.position.includes("top") && "-top-3.5",
                    i.position.includes("bottom") && "-bottom-3.5",
                    i.position.includes("left") && "left-2",
                    i.position.includes("right") && "-right-1 left-auto",
                    i.position === "right" && "top-1/2 -right-6 left-auto -translate-y-1/2 -rotate-90",
                    i.position === "left" && "top-1/2 right-auto -left-4 -translate-y-1/2 rotate-90",
                    i.containerClassName
                  ),
                  children: /* @__PURE__ */ c(
                    "span",
                    {
                      "data-slot": "arrow",
                      className: B(
                        "-z-50 h-4 w-4 rotate-45",
                        Ba({ variant: a }),
                        i.position.includes("top") ? "mt-3.5" : "mb-3.5",
                        i.className
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
  );
}, V4 = () => {
  const t = Ee(), e = ne((o) => o.emotion), { setEmotion: r } = Pe(), i = (o) => {
    r(o), N2.trackEvent("change_emotion", { emotion: o.name });
  }, n = e === go.default;
  return /* @__PURE__ */ c("div", { className: "dropdown dropdown-center dropdown-top focus-within:**:data-[slot=tooltip-content]:hidden", children: [
    /* @__PURE__ */ c(yt, { offset: 8, content: "Emoções", placement: "top", arrow: { position: "bottom" }, children: /* @__PURE__ */ c(
      H2,
      {
        id: "emotions-option-button",
        className: "group relative",
        variant: "ghost-gov",
        size: t ? "icon-sm" : "icon",
        children: [
          /* @__PURE__ */ c(e.icon, {}),
          !n && /* @__PURE__ */ c("span", { className: "absolute top-0.5 right-0.5 size-2 rounded-full bg-destructive" })
        ]
      }
    ) }),
    /* @__PURE__ */ c(
      "div",
      {
        tabIndex: -1,
        className: "dropdown-content mb-4 w-[calc(var(--widget-width)-1rem)] rounded-lg border bg-background p-1 shadow-lg",
        children: /* @__PURE__ */ c("div", { className: "relative flex items-center justify-center", children: [
          /* @__PURE__ */ c("span", { className: "absolute -inset-y-1 w-px bg-border" }),
          /* @__PURE__ */ c("ul", { className: B("relative grid w-full grid-cols-2 gap-x-2 gap-y-1 font-semibold text-primary text-sm"), children: Object.values(go).map((o) => {
            const s = o === e;
            return /* @__PURE__ */ c("li", { children: /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                inert: s,
                onClick: () => i(o),
                className: B(
                  "w-full cursor-pointer whitespace-nowrap rounded-sm px-2 py-1.5 text-center text-xs hover:bg-primary/10 sm:text-sm",
                  s && "bg-primary! text-primary-foreground! outline-1 outline-primary outline-solid"
                ),
                children: /* @__PURE__ */ c("div", { className: "flex items-center justify-start gap-2", children: [
                  /* @__PURE__ */ c(o.icon, { className: "size-4.5 sm:size-5" }),
                  /* @__PURE__ */ c("span", { children: o.name })
                ] })
              }
            ) }, o.action);
          }) })
        ] })
      }
    )
  ] });
}, z4 = {
  idle: { label: "Repetir", icon: T0 },
  paused: { label: "Reproduzir", icon: od },
  playing: { label: "Pausar", icon: nd },
  stopped: { label: "Em espera", icon: dd }
}, D4 = () => {
  const t = Ee(), { play: e, repeat: r, pause: i } = Pe(), { gloss: n, status: o } = ne(Je("gloss", "status")), s = () => {
    const { status: l } = X.get();
    l === "idle" ? r() : l === "paused" ? e() : l === "playing" && (i(), ze.set({ isPausedByUser: !0 }));
  }, a = z4[o];
  return /* @__PURE__ */ c(
    yt,
    {
      offset: 8,
      content: a.label,
      disabled: !n,
      placement: "top",
      align: "start",
      arrow: { position: "bottom-left" },
      children: /* @__PURE__ */ c(
        Y,
        {
          "data-slot": "main-action",
          disabled: !n,
          onClick: s,
          variant: "ghost-gov",
          size: t ? "icon-sm" : "icon",
          children: /* @__PURE__ */ c(a.icon, {})
        }
      )
    }
  );
}, U4 = () => {
  const { max: t, count: e } = ne((i) => i.countGloss), r = Ve(() => t === 0 ? 0 : e / Math.max(t, e) * 100, [t, e]);
  return /* @__PURE__ */ c("div", { className: "absolute -top-1.75 left-0 h-1.5 w-full", children: /* @__PURE__ */ c(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": r,
      className: B("h-full bg-primary transition-[width]", r < 100 && "rounded-r-full"),
      style: { width: `${r}%` }
    }
  ) });
}, ai = Wt(null), j4 = ({ children: t }) => {
  const e = gc(), r = $e(ai), i = ne((s) => s.status === "playing"), [n, o] = le(!0);
  return F(() => {
    i && !n && r?.onOpenChange(!1);
  }, [i]), F(() => {
    const { appRoot: s, appContent: a } = Bt.get();
    if (!r || !a || !s) return;
    if (r.open) {
      o(!1), !r.nested && r.overlay && (a.inert = !0);
      const u = pn(`[data-slot='dialog-wrapper']:not([id='dialog-${e}'])`, s);
      return u?.forEach((d) => d.inert = !0), () => {
        !r.nested && r.overlay && (a.inert = !1), u?.forEach((d) => d.inert = !1);
      };
    }
    const l = setTimeout(() => o(!0), 150);
    return () => clearTimeout(l);
  }, [r?.open, r?.overlay, r?.nested]), !r || n ? null : r.overlay ? /* @__PURE__ */ c(
    "div",
    {
      id: `dialog-${e}`,
      "data-slot": "dialog-wrapper",
      "data-state": r.open ? "open" : "close",
      className: B("group absolute inset-0 z-99999 flex items-end bg-black/20", r.nested && "bg-transparent!"),
      onClick: () => r.onOpenChange(!1),
      children: t
    }
  ) : /* @__PURE__ */ c("div", { className: "absolute inset-0 top-auto", children: t });
}, gn = ({
  nested: t = !1,
  overlay: e = !0,
  open: r,
  onOpenChange: i,
  children: n
}) => {
  const [o, s] = le(!1), { pause: a, play: l } = Pe(), u = r ?? o, d = i ?? s;
  return F(() => {
    if (t) return;
    const { isPausedByUser: p } = ze.get(), { gloss: h, isWelcomeFinished: f, status: v } = X.get();
    if (u && v === "playing") return a();
    !u && !p && (h || !f) && setTimeout(l, 300);
  }, [u, t]), /* @__PURE__ */ c(ai.Provider, { value: { open: u, onOpenChange: d, nested: t, overlay: e }, children: n });
}, Z4 = ({ children: t, ...e }) => {
  const r = $e(ai);
  if (!r) throw new Error("DialogTrigger deve estar dentro de <Dialog />");
  return /* @__PURE__ */ c("button", { type: "button", onClick: () => r.onOpenChange(!0), ...e, children: t });
}, fn = ({ className: t, children: e, ...r }) => {
  const i = $e(ai), n = Ee();
  return /* @__PURE__ */ c(
    "div",
    {
      "data-slot": "dialog-header",
      className: B("flex items-start gap-2 border-b p-2.5 mobile:py-2 pl-4", t),
      ...r,
      children: [
        e,
        /* @__PURE__ */ c(
          Y,
          {
            "data-slot": "dialog-close",
            onClick: () => i?.onOpenChange(!1),
            size: n ? "icon-xs" : "icon-sm",
            variant: "ghost",
            children: /* @__PURE__ */ c(an, {})
          }
        )
      ]
    }
  );
}, vn = ({ children: t, icon: e, className: r, ...i }) => /* @__PURE__ */ c(
  "h3",
  {
    "data-slot": "dialog-title",
    className: B(
      "break-anywhere relative mt-0.75 mr-auto flex items-start gap-1.5 font-semibold mobile:text-sm text-base leading-normal",
      r
    ),
    ...i,
    children: [
      e && /* @__PURE__ */ c(e, { "aria-hidden": "true", className: "relative -bottom-1 mobile:size-4.5 size-5 shrink-0" }),
      t
    ]
  }
), mn = ({
  children: t,
  className: e,
  showCloseButton: r = !0,
  ...i
}) => {
  const n = $e(ai), o = sr((s) => s.appRoot);
  return !n || !o ? null : l2(
    /* @__PURE__ */ c(j4, { children: /* @__PURE__ */ c(
      "div",
      {
        "data-slot": "dialog-content",
        className: B(
          "dialog-content relative flex max-h-full w-full animate-move-up flex-col rounded-lg border bg-background",
          "transition-[margin] duration-500 ease-in-out group-data-[state=close]:-mb-100",
          !r && "**:data-[slot=dialog-close]:hidden",
          e
        ),
        style: { boxShadow: "0 -5px 10px -5px rgba(0, 0, 0, 0.15)" },
        onClick: (s) => s.stopPropagation(),
        ...i,
        children: typeof t == "function" ? t(n) : t
      }
    ) }),
    o
  );
}, B4 = () => {
  const t = Ae(null), e = ce((i) => i.opacity), r = (i) => {
    ze.set({ opacity: i / 100 }), t.current && clearTimeout(t.current), t.current = setTimeout(() => N2.trackEvent("opacity_change", { opacity: i }), 2e3);
  };
  return /* @__PURE__ */ c("div", { children: [
    /* @__PURE__ */ c("div", { className: "flex w-full items-center justify-between mobile:text-sm text-base", children: [
      /* @__PURE__ */ c("p", { className: "mobile:text-sm text-base", children: "Opacidade" }),
      /* @__PURE__ */ c("span", { className: "font-semibold", children: [
        Math.round(Number(e) * 100),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ c(
      "input",
      {
        type: "range",
        min: 0,
        max: 100,
        step: 5,
        value: Number(e) * 100,
        onChange: (i) => r(Number(i.currentTarget.value)),
        className: "range range-xs w-full text-primary [--range-bg:var(--muted)] [--range-thumb:var(--primary-foreground)]",
        onPointerDown: (i) => i.stopPropagation()
      }
    )
  ] });
}, q4 = ({ isSelected: t, region: e, onSelect: r }) => /* @__PURE__ */ c(
  "button",
  {
    inert: t,
    type: "button",
    onClick: r,
    className: B(
      "flex w-full cursor-pointer items-center justify-between whitespace-nowrap rounded-lg p-1.5 pr-3 transition-[colors] hover:bg-muted",
      t && "order-first"
    ),
    children: [
      /* @__PURE__ */ c("div", { className: "flex items-center justify-start gap-2 font-semibold mobile:text-xs text-secondary text-sm dark:text-white", children: [
        /* @__PURE__ */ c("img", { src: e.flag, alt: e.name, className: "h-7 mobile:h-6 w-auto rounded-sm border" }),
        /* @__PURE__ */ c("span", { children: e.name })
      ] }),
      /* @__PURE__ */ c(
        "input",
        {
          inert: !0,
          type: "radio",
          name: `region-${e.abbreviation}`,
          className: "radio mobile:size-4 size-5 border border-primary bg-transparent! p-0.75! text-primary",
          checked: t
        }
      )
    ]
  },
  e.abbreviation
), W4 = () => {
  const t = ne((r) => r.region), e = (r) => {
    X.set({ region: r });
  };
  return /* @__PURE__ */ c("div", { className: "flex w-full items-center justify-between", children: [
    /* @__PURE__ */ c("p", { className: "mobile:text-sm text-base", children: "Regionalismo" }),
    /* @__PURE__ */ c(gn, { nested: !0, children: [
      /* @__PURE__ */ c(Z4, { className: B(f2({ variant: "ghost" }), "h-auto border p-1"), children: [
        /* @__PURE__ */ c("span", { className: "ml-1 font-semibold mobile:text-xs text-sm", children: t.abbreviation }),
        /* @__PURE__ */ c("img", { className: "h-6 mobile:h-6 rounded-sm border", src: t.flag, alt: t.name })
      ] }),
      /* @__PURE__ */ c(mn, { className: "max-h-[70%]", children: ({ onOpenChange: r }) => /* @__PURE__ */ c(ge, { children: [
        /* @__PURE__ */ c(fn, { children: /* @__PURE__ */ c(vn, { children: "Regionalismo" }) }),
        /* @__PURE__ */ c("div", { className: "flex flex-col overflow-y-auto p-1", children: p2.map((i) => /* @__PURE__ */ c(
          q4,
          {
            onSelect: () => {
              e(i), r(!1);
            },
            isSelected: i === t,
            region: i
          }
        )) })
      ] }) })
    ] })
  ] });
}, G4 = ({ videoKey: t, placement: e = "top", videoClassName: r, children: i }) => {
  const { path: n } = d2(), o = `${n}/assets/videos/${t}.mp4`;
  return /* @__PURE__ */ c(
    yt,
    {
      inert: !0,
      content: /* @__PURE__ */ c("div", { className: "grid h-38 w-26 place-content-center", children: /* @__PURE__ */ c("video", { className: B("mx-auto h-38 object-cover", r), src: o, muted: !0, autoPlay: !0, loop: !0, inert: !0 }) }),
      align: "start",
      placement: e,
      className: "overflow-hidden p-0!",
      children: /* @__PURE__ */ c(H2, { asChild: !0, className: "hover:underline hover:decoration-wavy", children: i })
    }
  );
}, Y4 = () => {
  const { theme: t, toggleTheme: e } = u2();
  return /* @__PURE__ */ c("div", { className: "flex w-full items-start justify-between", children: [
    /* @__PURE__ */ c(G4, { videoKey: "active-dark-theme", videoClassName: "h-44 mt-6", children: /* @__PURE__ */ c("p", { className: "mobile:text-sm text-base", children: [
      "Tema escuro",
      /* @__PURE__ */ c(J3, { "aria-hidden": "true", className: "-mt-1.5 ml-1 inline size-4" })
    ] }) }),
    /* @__PURE__ */ c(
      "input",
      {
        type: "checkbox",
        onChange: e,
        checked: t === "dark",
        className: "toggle toggle-sm rounded-full bg-accent text-primary before:size-4 before:rounded-full not-checked:before:bg-background checked:bg-primary checked:text-primary-foreground"
      }
    )
  ] });
}, Q4 = ({ open: t, onOpenChange: e }) => {
  const r = Ee(), i = ne((u) => u.region), n = ce((u) => u.opacity), { theme: o, setTheme: s } = u2(), a = () => {
    const u = p2[0];
    s("light"), X.set({ region: u }), ze.set({ opacity: 1 });
  }, l = Ve(() => i.abbreviation === "BR" && n === 1 && o === "light", [i, n, o]);
  return /* @__PURE__ */ c(gn, { open: t, onOpenChange: e, children: /* @__PURE__ */ c(mn, { children: [
    /* @__PURE__ */ c(fn, { className: "relative", children: [
      /* @__PURE__ */ c(vn, { icon: F0, children: "Configurações" }),
      !l && /* @__PURE__ */ c(ge, { children: [
        /* @__PURE__ */ c(
          yt,
          {
            className: "-mr-1",
            align: "end",
            placement: "bottom",
            content: "Redefinir",
            arrow: { position: "top-right" },
            children: /* @__PURE__ */ c(
              Y,
              {
                onClick: a,
                variant: "ghost",
                size: r ? "icon-xs" : "icon-sm",
                className: "animate-move-up mobile:text-xs text-sm",
                children: /* @__PURE__ */ c(sd, {})
              }
            )
          }
        ),
        /* @__PURE__ */ c("div", { children: /* @__PURE__ */ c("span", { className: "absolute inset-y-0 w-px bg-border" }) })
      ] })
    ] }),
    /* @__PURE__ */ c("div", { className: "space-y-4 p-4", children: [
      /* @__PURE__ */ c(Y4, {}),
      /* @__PURE__ */ c(W4, {}),
      /* @__PURE__ */ c(B4, {})
    ] })
  ] }) });
}, K4 = () => {
  const t = Ee(), [e, r] = le(!1);
  return /* @__PURE__ */ c(ge, { children: [
    /* @__PURE__ */ c(
      yt,
      {
        className: "whitespace-nowrap",
        offset: 8,
        align: "end",
        content: "Configurações",
        placement: "top",
        arrow: { position: "bottom-right" },
        children: /* @__PURE__ */ c(Y, { onClick: () => r(!0), variant: "ghost-gov", size: t ? "icon-sm" : "icon", children: /* @__PURE__ */ c(F0, {}) })
      }
    ),
    /* @__PURE__ */ c(Q4, { open: e, onOpenChange: r })
  ] });
}, X4 = [2.5, 2, 1.5, 1], J4 = () => {
  const t = Ee(), e = ne((o) => o.speed), { setSpeed: r } = Pe(), i = (o, s) => {
    (o.key === "Enter" || o.key === " ") && (o.preventDefault(), n(s));
  }, n = (o) => {
    r(o);
  };
  return /* @__PURE__ */ c("div", { className: "dropdown dropdown-center dropdown-top focus-within:**:data-[slot=tooltip-content]:hidden", children: [
    /* @__PURE__ */ c(yt, { offset: 8, content: "Velocidade", placement: "top", arrow: { position: "bottom" }, children: /* @__PURE__ */ c(H2, { variant: "ghost-gov", size: t ? "icon-sm" : "icon", children: /* @__PURE__ */ c("span", { inert: !0, className: "-mt-0.5 font-bold text-sm", children: [
      e,
      "x"
    ] }) }) }),
    /* @__PURE__ */ c("div", { tabIndex: -1, className: "dropdown-content mb-4 rounded-lg border bg-background drop-shadow-lg", children: /* @__PURE__ */ c(
      "ul",
      {
        className: B(
          "space-y-1 p-1 font-semibold text-primary text-sm",
          "focus-within:pointer-events-auto focus-within:visible"
        ),
        children: X4.map((o) => {
          const s = o === e;
          return /* @__PURE__ */ c("li", { children: /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              inert: s,
              onClick: () => n(o),
              onKeyDown: (a) => i(a, o),
              className: B(
                "w-full cursor-pointer whitespace-nowrap rounded-sm px-2 py-1 text-center text-xs hover:bg-primary/10 sm:text-sm",
                s && "bg-primary! text-primary-foreground! outline-1 outline-primary outline-solid"
              ),
              children: [
                o,
                "x"
              ]
            }
          ) }, o);
        })
      }
    ) })
  ] });
}, $4 = ({ size: t = 24, iconTitle: e, ...r }) => /* @__PURE__ */ c(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": e ? "false" : "true",
    children: [
      /* @__PURE__ */ c("title", { children: e }),
      /* @__PURE__ */ c("path", { d: "M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM5 12H7C7.55 12 8 12.45 8 13C8 13.55 7.55 14 7 14H5C4.45 14 4 13.55 4 13C4 12.45 4.45 12 5 12ZM13 18H5C4.45 18 4 17.55 4 17C4 16.45 4.45 16 5 16H13C13.55 16 14 16.45 14 17C14 17.55 13.55 18 13 18ZM19 18H17C16.45 18 16 17.55 16 17C16 16.45 16.45 16 17 16H19C19.55 16 20 16.45 20 17C20 17.55 19.55 18 19 18ZM19 14H11C10.45 14 10 13.55 10 13C10 12.45 10.45 12 11 12H19C19.55 12 20 12.45 20 13C20 13.55 19.55 14 19 14Z" })
    ]
  }
), e9 = () => {
  const t = Ee(), { toggleSubtitles: e } = Pe(), { showSubtitles: r, isPlayingWelcome: i } = ne(Je("showSubtitles", "isPlayingWelcome"));
  return /* @__PURE__ */ c(
    yt,
    {
      className: "whitespace-nowrap",
      offset: 8,
      align: "end",
      content: r ? "Desativar legendas" : "Ativar legendas",
      placement: "top",
      arrow: { position: "bottom-right" },
      children: /* @__PURE__ */ c(
        Y,
        {
          disabled: i,
          onClick: () => {
            e();
          },
          variant: "ghost-gov",
          size: t ? "icon-sm" : "icon",
          children: r ? /* @__PURE__ */ c($4, {}) : /* @__PURE__ */ c(ld, {})
        }
      )
    }
  );
}, t9 = () => {
  const t = ce((i) => i.isOpen), e = at((i) => i.open), { onPointerDown: r } = ln();
  return /* @__PURE__ */ c(
    "div",
    {
      className: B(
        !t && "-bottom-20!",
        "relative z-50 animate-move-up border-t bg-background px-2 py-1.5 transition-[bottom] ease-in-out",
        "[&_button]:z-1 [&_button]:not-hover:bg-transparent **:[[role=button]]:not-hover:bg-transparent",
        "-mt-13 **:data-[highlight=true]:animate-highlight-primary"
      ),
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            onPointerDown: r,
            className: "absolute inset-0 z-0 touch-none not-expanded:hover:cursor-move sm:hover:cursor-move"
          }
        ),
        /* @__PURE__ */ c("div", { inert: e, className: "grid w-full grid-cols-5 items-center gap-1", children: [
          /* @__PURE__ */ c(U4, {}),
          /* @__PURE__ */ c("div", { id: "main-action-speed-options", className: "col-span-2 grid grid-cols-subgrid justify-items-center rounded", children: [
            /* @__PURE__ */ c(D4, {}),
            /* @__PURE__ */ c(J4, {})
          ] }),
          /* @__PURE__ */ c("div", { id: "emotions-subtitles-options", className: "col-span-2 grid grid-cols-subgrid justify-items-center rounded", children: [
            /* @__PURE__ */ c(V4, {}),
            /* @__PURE__ */ c(e9, {})
          ] }),
          /* @__PURE__ */ c("div", { id: "settings-option", className: "col-span-1 grid grid-cols-subgrid justify-items-center rounded", children: /* @__PURE__ */ c(K4, {}) })
        ] })
      ]
    }
  );
}, r9 = ({ className: t, ...e }) => /* @__PURE__ */ c("div", { className: B("h-4", t), ...e }), i9 = "@media screen and (max-width:640px){body[data-vlibras-expanded=true]{overflow:hidden!important}}", n9 = () => {
  const t = Ee(), { isOpen: e, isExpanded: r } = ce(Je("isOpen", "isExpanded"));
  F(() => {
    const { root: s } = Bt.get();
    !s || e || (delete s.dataset.expanded, delete document.body.dataset.vlibrasExpanded);
  }, [e]);
  const i = () => {
    w0(i9, "@expanded-mode.style");
    const { root: s } = Bt.get(), { isExpanded: a } = ze.get(), l = !a;
    if (s) {
      if (ze.set({ isExpanded: l }), !l) {
        delete s.dataset.expanded, delete document.body.dataset.vlibrasExpanded;
        return;
      }
      s.dataset.expanded = "true", document.body.dataset.vlibrasExpanded = "true";
    }
  }, n = r ? "Diminuir" : "Expandir";
  return /* @__PURE__ */ c(
    yt,
    {
      className: "whitespace-nowrap",
      offset: 2,
      content: n,
      placement: "bottom",
      align: "end",
      arrow: { position: "top-right" },
      children: /* @__PURE__ */ c(
        Y,
        {
          onClick: i,
          className: "z-1",
          "aria-label": n,
          size: t ? "icon-sm" : "icon",
          variant: "default",
          children: /* @__PURE__ */ c(r ? Y3 : K3, {})
        }
      )
    }
  );
}, o9 = ({ open: t, onOpenChange: e }) => {
  const r = Ae(null), i = ce((f) => f.isTranslating), { play: n } = Pe(), [o, s] = le(""), { mutateAsync: a, isPending: l } = C2(), u = C0(s, 300), d = async () => {
    const f = r.current?.value || "";
    if (f)
      try {
        const v = await a(f);
        if (!v.length) throw new Error("Empty gloss");
        n(v), e(!1), gl({
          action: () => e(!0),
          content: /* @__PURE__ */ c(ge, { children: [
            /* @__PURE__ */ c(fo, {}),
            "Reabrir Tradutor"
          ] })
        });
      } catch {
      }
  }, p = () => {
    r.current && (r.current.value = "", r.current?.focus(), s(""));
  }, h = (f) => {
    f.key === "Enter" && (f.preventDefault(), o.length >= 3 && d());
  };
  return /* @__PURE__ */ c(gn, { open: t, onOpenChange: e, children: /* @__PURE__ */ c(mn, { children: [
    /* @__PURE__ */ c(fn, { children: /* @__PURE__ */ c(vn, { icon: fo, children: "Tradutor" }) }),
    /* @__PURE__ */ c("div", { className: "space-y-2 overflow-y-auto p-4 pt-2", children: [
      /* @__PURE__ */ c("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ c("div", { className: "flex h-8 items-center justify-between", children: [
          /* @__PURE__ */ c("label", { htmlFor: "translator-text", className: "text-sm", children: "Insira seu texto" }),
          o.length > 0 && /* @__PURE__ */ c(
            Y,
            {
              "aria-label": "Limpar texto",
              onClick: p,
              size: "icon-xs",
              variant: "ghost",
              className: "animate-move-up text-destructive",
              children: /* @__PURE__ */ c(V0, {})
            }
          )
        ] }),
        /* @__PURE__ */ c(
          "textarea",
          {
            defaultValue: o,
            ref: r,
            onKeyPress: h,
            onChange: (f) => u(f.currentTarget.value),
            name: "text",
            id: "translator-text",
            className: "h-32 w-full resize-none rounded-lg border bg-muted p-2"
          }
        )
      ] }),
      /* @__PURE__ */ c(
        Y,
        {
          onClick: d,
          disabled: o.length < 3 || i || l,
          className: "w-full text-sm",
          children: [
            l && /* @__PURE__ */ c(fl, { className: "size-4 text-primary-foreground" }),
            l ? "Traduzindo..." : "Traduzir"
          ]
        }
      )
    ] })
  ] }) });
}, _i = ({ label: t, onClick: e, icon: r }) => {
  const i = Ee(), n = r;
  return /* @__PURE__ */ c(
    "li",
    {
      className: B(
        "flex w-auto animate-move-left items-center gap-2",
        "[&_button]:rounded-full [&_button]:border-border [&_button]:bg-background [&_button]:shadow-md [&_button]:hover:bg-muted"
      ),
      children: [
        /* @__PURE__ */ c(
          Y,
          {
            onClick: e,
            role: "button",
            "aria-label": t,
            size: i ? "icon-sm" : "icon",
            variant: "outline-gov",
            children: /* @__PURE__ */ c(n, { className: "mobile:size-5 size-5.5" })
          }
        ),
        /* @__PURE__ */ c(Y, { tabindex: -1, onClick: e, variant: "outline", className: "w-30", size: "xs", children: t })
      ]
    }
  );
}, s9 = () => {
  const t = Ee(), e = nt((o) => o.open), r = at((o) => o.onOpenChange), [i, n] = le(!1);
  return /* @__PURE__ */ c(ge, { children: [
    /* @__PURE__ */ c("div", { className: "dropdown dropdown-bottom z-1", children: [
      /* @__PURE__ */ c(
        Y,
        {
          id: "header-menu-button",
          role: "button",
          tabindex: 0,
          "aria-label": "Menu de opções",
          size: t ? "icon-sm" : "icon",
          variant: "default",
          children: /* @__PURE__ */ c(id, {})
        }
      ),
      /* @__PURE__ */ c("ul", { className: "dropdown-content mt-4 space-y-2", children: [
        /* @__PURE__ */ c(_i, { onClick: () => e("dictionary"), label: "Dicionário", icon: ul }),
        /* @__PURE__ */ c(_i, { onClick: () => n(!0), label: "Tradutor", icon: fo }),
        /* @__PURE__ */ c(_i, { onClick: () => r(!0), label: "Guia Rápido", icon: $3 }),
        /* @__PURE__ */ c(_i, { onClick: () => e("about"), label: "Sobre o VLibras", icon: ed })
      ] })
    ] }),
    /* @__PURE__ */ c(o9, { open: i, onOpenChange: n })
  ] });
}, a9 = () => {
  const { onPointerDown: t } = ln(), { pause: e } = Pe(), r = Ee(), i = ce((s) => s.setOpen), n = at((s) => s.open), o = () => {
    i(!1), e();
  };
  return /* @__PURE__ */ c("div", { className: B("relative bottom-auto z-50 bg-primary px-2 py-1.5 sm:rounded-t-xl"), children: [
    /* @__PURE__ */ c(
      "div",
      {
        onPointerDown: t,
        className: "absolute inset-0 z-0 touch-none not-expanded:hover:cursor-move sm:hover:cursor-move"
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        inert: n,
        className: "flex w-full items-center justify-center gap-1 **:data-[highlight=true]:animate-highlight-primary-foreground",
        children: [
          /* @__PURE__ */ c(s9, {}),
          /* @__PURE__ */ c("div", { className: "mr-2 ml-1", children: /* @__PURE__ */ c("span", { className: "absolute inset-y-0 w-px bg-primary-foreground/30" }) }),
          /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5 font-semibold text-primary-foreground text-sm", children: [
            /* @__PURE__ */ c("div", { className: "flex size-5.5 items-end justify-center rounded-full bg-primary-foreground", children: /* @__PURE__ */ c(g2, { className: "size-4.5 text-primary" }) }),
            "VLibras"
          ] }),
          /* @__PURE__ */ c(r9, { className: "w-full" }),
          /* @__PURE__ */ c("div", { id: "header-actions", className: "flex items-center gap-1 [&_button]:not-hover:bg-transparent", children: [
            /* @__PURE__ */ c(n9, {}),
            /* @__PURE__ */ c(
              Y,
              {
                onClick: o,
                "aria-label": "Fechar",
                size: r ? "icon-sm" : "icon",
                variant: "default",
                className: "z-1",
                children: /* @__PURE__ */ c(an, {})
              }
            )
          ] })
        ]
      }
    )
  ] });
}, l9 = ({ open: t, onOpenChange: e }) => {
  const r = ne((n) => n.gloss), i = ce((n) => n.text);
  return /* @__PURE__ */ c(gn, { open: t, onOpenChange: e, children: /* @__PURE__ */ c(mn, { children: [
    /* @__PURE__ */ c(fn, { children: /* @__PURE__ */ c(vn, { icon: Q3, children: "Feedback" }) }),
    /* @__PURE__ */ c("div", { className: "overflow-y-auto p-4 pt-2 text-sm", children: [
      /* @__PURE__ */ c("p", { className: "mb-1 text-muted-foreground", children: i }),
      /* @__PURE__ */ c("span", { className: "font-semibold", children: r })
    ] })
  ] }) });
}, c9 = () => {
  const [t, e] = le(!1), r = Ee(), i = ce((o) => o.isExpanded);
  return at((o) => o.open) ? null : /* @__PURE__ */ c(ge, { children: [
    /* @__PURE__ */ c(
      Y,
      {
        onClick: () => e(!0),
        className: "animate-move-up rounded-full bg-background! font-semibold text-primary hover:bg-muted!",
        variant: "outline",
        size: i ? "default" : r ? "xs" : "sm",
        children: [
          /* @__PURE__ */ c(td, {}),
          "Avaliar"
        ]
      }
    ),
    /* @__PURE__ */ c(l9, { open: t, onOpenChange: e })
  ] });
}, $n = [
  { name: "icaro", path: "/icaro.png" },
  { name: "hosana", path: "/hosana.png" },
  { name: "guga", path: "/guga.png" }
], qa = (t) => {
  const { path: e } = ki.getState();
  return `${e}/assets/images/avatars/${t}`;
}, d9 = () => {
  const t = Ae(null), { toggleAvatar: e } = Pe(), r = ne((a) => a.avatar), i = at((a) => a.open), n = $n.find(({ name: a }) => a === r), o = qa(n?.path || $n[0].path), s = (a) => {
    t.current?.blur(), setTimeout(() => e(a), 150);
  };
  return /* @__PURE__ */ c(
    "div",
    {
      ref: t,
      inert: i,
      autofocus: !0,
      className: B(
        "dropdown dropdown-top dropdown-end z-1 h-9 animate-move-up focus-within:**:data-[slot=tooltip-content]:hidden"
      ),
      children: [
        /* @__PURE__ */ c(
          yt,
          {
            className: "whitespace-nowrap",
            content: "Alterar avatar",
            placement: "top",
            align: "end",
            arrow: { position: "bottom-right" },
            children: /* @__PURE__ */ c(
              Y,
              {
                id: "toggle-avatar-button",
                variant: "outline",
                size: "icon",
                className: "rounded-full bg-background hover:bg-muted! data-[highlight=true]:animate-highlight-primary",
                children: /* @__PURE__ */ c("img", { src: o, alt: r })
              }
            )
          }
        ),
        /* @__PURE__ */ c("ul", { className: "dropdown-content mb-2 space-y-2", children: $n.filter(({ name: a }) => a !== r).map((a) => /* @__PURE__ */ c("li", { className: "flex animate-move-up items-center justify-end gap-2", children: [
          /* @__PURE__ */ c(
            Y,
            {
              tabindex: -1,
              onClick: () => s(a.name),
              variant: "outline",
              className: "rounded-full bg-background capitalize hover:bg-muted!",
              size: "xs",
              children: a.name
            }
          ),
          /* @__PURE__ */ c(
            Y,
            {
              onClick: () => s(a.name),
              variant: "outline",
              className: "rounded-full bg-background hover:bg-muted!",
              size: "icon",
              children: /* @__PURE__ */ c("img", { src: qa(a.path), alt: a.name })
            }
          )
        ] }, a.name)) })
      ]
    }
  );
}, u9 = () => {
  const t = Ee(), { stop: e } = Pe(), { status: r, gloss: i } = ne(Je("status", "gloss")), { isExpanded: n, isTranslating: o, text: s } = ce(Je("isExpanded", "text", "isTranslating")), a = r === "playing", l = at((g) => g.open), { action: u, content: d } = O2(Je("action", "content"));
  return /* @__PURE__ */ c("div", { className: "absolute inset-x-3 bottom-15 flex animate-move-up items-end justify-end gap-1.5", children: [
    /* @__PURE__ */ c("div", { className: "mr-auto flex flex-wrap-reverse items-center gap-1.5", children: [
      u && d && r === "idle" && /* @__PURE__ */ c(
        Y,
        {
          onClick: () => {
            u?.(), pl();
          },
          variant: "outline",
          className: "animate-move-up rounded-full bg-background! font-semibold text-primary hover:bg-muted!",
          size: n ? "default" : t ? "xs" : "sm",
          children: d
        }
      ),
      !!(r === "idle" && !o && i && s) && /* @__PURE__ */ c(c9, {})
    ] }),
    /* @__PURE__ */ c("div", { className: "ml-auto flex items-center gap-2", children: [
      a && !l && /* @__PURE__ */ c(
        Y,
        {
          onClick: () => {
            ze.set({ text: void 0 }), e();
          },
          className: "animate-move-up rounded-full bg-background! font-semibold text-primary hover:bg-muted!",
          variant: "outline",
          size: n ? "default" : t ? "xs" : "sm",
          children: [
            /* @__PURE__ */ c(ad, {}),
            "Pular"
          ]
        }
      ),
      (!a || l) && /* @__PURE__ */ c(d9, {})
    ] })
  ] });
}, h9 = ({ className: t, ...e }) => {
  const r = nt((n) => n.screen), i = ne((n) => n.isLoaded);
  return /* @__PURE__ */ c(
    "div",
    {
      ...e,
      id: "vlibras-app-content",
      inert: r !== "main",
      ref: (n) => {
        n && Bt.set({ appContent: n });
      },
      className: B("flex flex-col", (!i || r !== "main") && "opacity-0", t),
      children: [
        /* @__PURE__ */ c(a9, {}),
        /* @__PURE__ */ c(F4, { className: "mb-2 h-(--player-height) max-h-[calc(100dvh-52px)] w-full" }),
        /* @__PURE__ */ c(u9, {}),
        /* @__PURE__ */ c(t9, {})
      ]
    }
  );
}, p9 = () => {
  const t = ce((e) => Number(e.opacity || 0) * 100);
  return /* @__PURE__ */ c(
    "div",
    {
      style: { opacity: `${t}%` },
      className: "absolute inset-0 -z-50 bg-[#f8f8f8] sm:rounded-xl dark:bg-[#0a0a0a]"
    }
  );
}, g9 = () => {
  const t = nt((n) => n.screen), { isOpen: e, position: r, isExpanded: i } = ce(Je("isOpen", "position", "isExpanded"));
  return /* @__PURE__ */ c(md, { children: ({ ref: n, hasMoved: o, pos: s, isDragging: a, reset: l }) => (F(() => {
    !e && l();
  }, [e]), /* @__PURE__ */ c(
    "div",
    {
      id: "vlibras-app",
      inert: !e,
      style: { transform: o && e ? `translate3d(${s.x}px, ${s.y}px, 0)` : void 0 },
      className: B(
        N4({
          isDragging: a,
          isOpen: e,
          position: r,
          isExpanded: i,
          hasMoved: o
        })
      ),
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            ref: (u) => {
              u && Bt.set({ appRoot: u }), typeof n == "function" ? n(u) : n && "current" in n && (n.current = u);
            },
            className: B(
              "relative z-2147483647 h-fit expanded:w-full w-(--widget-width) overflow-hidden rounded-xl shadow-lg expanded:max-sm:rounded-none!",
              t !== "main" && "outline-2 outline-border outline-solid"
            ),
            children: [
              /* @__PURE__ */ c(h9, {}),
              /* @__PURE__ */ c(A4, {}),
              /* @__PURE__ */ c(p9, {})
            ]
          }
        ),
        /* @__PURE__ */ c(L4, {})
      ]
    }
  )) });
}, f9 = new qd({
  defaultOptions: {
    queries: {
      retry: !1,
      refetchOnWindowFocus: !1,
      retryOnMount: !1,
      refetchOnMount: !1,
      refetchOnReconnect: !1,
      staleTime: 1e3 * 60 * 5
    }
  }
}), Wa = `@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:"";--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-orange-50:oklch(98% .016 73.684);--color-orange-500:oklch(70.5% .213 47.604);--color-orange-600:oklch(64.6% .222 41.116);--color-green-50:oklch(98.2% .018 155.826);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-blue-50:oklch(97% .014 254.604);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs--line-height:calc(1/.75);--text-sm--line-height:calc(1.25/.875);--text-base--line-height: 1.5 ;--font-weight-light:300;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--leading-normal:1.5;--radius-xs:.125rem;--drop-shadow-lg:0 4px 4px #00000026;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--blur-sm:8px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-primary:var(--primary);--tw-translate-y:0;--tw-translate-x:0}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*{box-sizing:border-box;--tw-border-style:solid;border-style:solid;border-color:var(--border);outline-offset:-1px;outline-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){*{outline-color:color-mix(in oklab,var(--ring)50%,transparent)}}:focus-visible{outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--primary);--tw-outline-style:solid;outline-style:solid}:host{border-color:var(--border);fill:var(--foreground);color:var(--foreground)}:where(:host),:host:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}@media(prefers-color-scheme:dark){:host:not([data-theme]){color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}}:host:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:host:has(input.theme-controller[value=dark]:checked),[data-theme=dark]{color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E");scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:root:not(span){overflow:var(--page-overflow)}:root{background:var(--page-scroll-bg,var(--root-bg));--page-scroll-bg-on:linear-gradient(var(--root-bg,#0000),var(--root-bg,#0000))var(--root-bg,#0000)}@supports (color:color-mix(in lab,red,red)){:root{--page-scroll-bg-on:linear-gradient(var(--root-bg,#0000),var(--root-bg,#0000))color-mix(in srgb,var(--root-bg,#0000),oklch(0% 0 0) calc(var(--page-has-backdrop,0)*40%))}}:root{--page-scroll-transition-on:background-color .3s ease-out;transition:var(--page-scroll-transition);scrollbar-gutter:var(--page-scroll-gutter,unset);scrollbar-gutter:if(style(--page-has-scroll: 1): var(--page-scroll-gutter,unset); else: unset)}@keyframes set-page-has-scroll{0%,to{--page-has-scroll:1}}:root,[data-theme]{background:var(--page-scroll-bg,var(--root-bg));color:var(--color-base-content)}:where(:root,[data-theme]){--root-bg:var(--color-base-100)}}@layer components;@layer utilities{@layer daisyui.l1.l2.l3{.modal{pointer-events:none;visibility:hidden;width:100%;max-width:none;height:100%;max-height:none;color:inherit;transition:visibility .3s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;overscroll-behavior:contain;z-index:999;scrollbar-gutter:auto;background-color:#0000;place-items:center;margin:0;padding:0;display:grid;position:fixed;inset:0;overflow:clip}.modal::backdrop{display:none}.tooltip{--tt-bg:var(--color-neutral);--tt-off: calc(100% + .5rem) ;--tt-tail: calc(100% + 1px + .25rem) ;display:inline-block;position:relative}.tooltip>.tooltip-content,.tooltip[data-tip]:before{border-radius:var(--radius-field);text-align:center;white-space:normal;max-width:20rem;color:var(--color-neutral-content);opacity:0;background-color:var(--tt-bg);pointer-events:none;z-index:2;--tw-content:attr(data-tip);content:var(--tw-content);width:max-content;padding-block:.25rem;padding-inline:.5rem;font-size:.875rem;line-height:1.25;position:absolute}.tooltip:after{opacity:0;background-color:var(--tt-bg);content:"";pointer-events:none;--mask-tooltip:url("data:image/svg+xml,%3Csvg width='10' height='4' viewBox='0 0 8 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.500009 1C3.5 1 3.00001 4 5.00001 4C7 4 6.5 1 9.5 1C10 1 10 0.499897 10 0H0C-1.99338e-08 0.5 0 1 0.500009 1Z' fill='black'/%3E%3C/svg%3E%0A");width:.625rem;height:.25rem;-webkit-mask-position:-1px 0;mask-position:-1px 0;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-image:var(--mask-tooltip);mask-image:var(--mask-tooltip);display:block;position:absolute}@media(prefers-reduced-motion:no-preference){.tooltip>.tooltip-content,.tooltip[data-tip]:before,.tooltip:after{transition:opacity .2s cubic-bezier(.4,0,.2,1) 75ms,transform .2s cubic-bezier(.4,0,.2,1) 75ms}}:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible))>.tooltip-content,:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible))[data-tip]:before,:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible)):after{opacity:1;--tt-pos:0rem}@media(prefers-reduced-motion:no-preference){:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible))>.tooltip-content,:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible))[data-tip]:before,:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible)):after{transition:opacity .2s cubic-bezier(.4,0,.2,1),transform .2s cubic-bezier(.4,0,.2,1)}}.tab{cursor:pointer;appearance:none;text-align:center;webkit-user-select:none;-webkit-user-select:none;user-select:none;flex-wrap:wrap;justify-content:center;align-items:center;display:inline-flex;position:relative}@media(hover:hover){.tab:hover{color:var(--color-base-content)}}.tab{--tab-p:.75rem;--tab-bg:var(--color-base-100);--tab-border-color:var(--color-base-300);--tab-radius-ss:0;--tab-radius-se:0;--tab-radius-es:0;--tab-radius-ee:0;--tab-order:0;--tab-radius-min:calc(.75rem - var(--border));--tab-radius-limit:min(var(--radius-field),var(--tab-radius-min));--tab-radius-grad:#0000 calc(69% - var(--border)),var(--tab-border-color)calc(69% - var(--border) + .25px),var(--tab-border-color)69%,var(--tab-bg) calc(69% + .25px) ;order:var(--tab-order);height:var(--tab-height);padding-inline:var(--tab-p);border-color:#0000;font-size:.875rem}.tab:is(input[type=radio]){min-width:fit-content}.tab:is(input[type=radio]):after{--tw-content:attr(aria-label);content:var(--tw-content)}.tab:is(label){position:relative}.tab:is(label) input{cursor:pointer;appearance:none;opacity:0;position:absolute;inset:0}:is(.tab:checked,.tab:is(label:has(:checked)),.tab:is(.tab-active,[aria-selected=true],[aria-current=true],[aria-current=page]))+.tab-content{display:block}.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true],[aria-current=true],[aria-current=page]){color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true],[aria-current=true],[aria-current=page]){color:color-mix(in oklab,var(--color-base-content)50%,transparent)}}.tab:not(input):empty{cursor:default;flex-grow:1}.tab:focus{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.tab:focus{outline-offset:2px;outline:2px solid #0000}}.tab:focus-visible,.tab:is(label:has(:checked:focus-visible)){outline-offset:-5px;outline:2px solid}.tab[disabled]{pointer-events:none;opacity:.4}.menu{--menu-active-fg:var(--color-neutral-content);--menu-active-bg:var(--color-neutral);flex-flow:column wrap;width:fit-content;padding:.5rem;font-size:.875rem;display:flex}.menu :where(li ul){white-space:nowrap;margin-inline-start:1rem;padding-inline-start:.5rem;position:relative}.menu :where(li ul):before{background-color:var(--color-base-content);opacity:.1;width:var(--border);content:"";inset-inline-start:0;position:absolute;top:.75rem;bottom:.75rem}.menu :where(li>.menu-dropdown:not(.menu-dropdown-show)){display:none}.menu :where(li:not(.menu-title)>:not(ul,details,.menu-title,.btn)),.menu :where(li:not(.menu-title)>details>summary:not(.menu-title)){border-radius:var(--radius-field);text-align:start;text-wrap:balance;-webkit-user-select:none;user-select:none;grid-auto-columns:minmax(auto,max-content) auto max-content;grid-auto-flow:column;align-content:flex-start;align-items:center;gap:.5rem;padding-block:.375rem;padding-inline:.75rem;transition-property:color,background-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:grid}.menu :where(li>details>summary){--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.menu :where(li>details>summary){outline-offset:2px;outline:2px solid #0000}}.menu :where(li>details>summary)::-webkit-details-marker{display:none}:is(.menu :where(li>details>summary),.menu :where(li>.menu-dropdown-toggle)):after{content:"";transform-origin:50%;pointer-events:none;justify-self:flex-end;width:.375rem;height:.375rem;transition-property:rotate,translate;transition-duration:.2s;display:block;translate:0 -1px;rotate:-135deg;box-shadow:inset 2px 2px}.menu details{interpolate-size:allow-keywords;overflow:hidden}.menu details::details-content{block-size:0}@media(prefers-reduced-motion:no-preference){.menu details::details-content{transition-behavior:allow-discrete;transition-property:block-size,content-visibility;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1)}}.menu details[open]::details-content{block-size:auto}.menu :where(li>details[open]>summary):after,.menu :where(li>.menu-dropdown-toggle.menu-dropdown-show):after{translate:0 1px;rotate:45deg}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{color:var(--color-base-content);--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){box-shadow:inset 0 1px #00000003,inset 0 -1px #ffffff03}.menu :where(li:empty){background-color:var(--color-base-content);opacity:.1;height:1px;margin:.5rem 1rem}.menu :where(li){flex-flow:column wrap;flex-shrink:0;align-items:stretch;display:flex;position:relative}.menu :where(li) .badge{justify-self:flex-end}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{outline-offset:2px;outline:2px solid #0000}}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{color:var(--menu-active-fg);background-color:var(--menu-active-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):not(:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):active){box-shadow:0 2px calc(var(--depth)*3px) -2px var(--menu-active-bg)}.menu :where(li).menu-disabled{pointer-events:none;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li).menu-disabled{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.menu .dropdown:focus-within .menu-dropdown-toggle:after{translate:0 1px;rotate:45deg}.menu .dropdown-content{margin-top:.5rem;padding:.5rem}.menu .dropdown-content:before{display:none}.dropdown{position-area:var(--anchor-v,bottom)var(--anchor-h,span-right);display:inline-block;position:relative}.dropdown>:not(:has(~[class*=dropdown-content])):focus{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.dropdown>:not(:has(~[class*=dropdown-content])):focus{outline-offset:2px;outline:2px solid #0000}}.dropdown .dropdown-content{position:absolute}.dropdown.dropdown-close .dropdown-content,.dropdown:not(details,.dropdown-open,.dropdown-hover:hover,:focus-within) .dropdown-content,.dropdown.dropdown-hover:not(:hover) [tabindex]:first-child:focus:not(:focus-visible)~.dropdown-content{transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover],.dropdown .dropdown-content{z-index:999}@media(prefers-reduced-motion:no-preference){.dropdown[popover],.dropdown .dropdown-content{transition-behavior:allow-discrete;transition-property:opacity,scale,display;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);animation:.2s dropdown}}@starting-style{.dropdown[popover],.dropdown .dropdown-content{opacity:0;scale:95%}}:is(.dropdown:not(.dropdown-close).dropdown-open,.dropdown:not(.dropdown-close):not(.dropdown-hover):focus,.dropdown:not(.dropdown-close):focus-within)>[tabindex]:first-child{pointer-events:none}:is(.dropdown:not(.dropdown-close).dropdown-open,.dropdown:not(.dropdown-close):not(.dropdown-hover):focus,.dropdown:not(.dropdown-close):focus-within) .dropdown-content,.dropdown:not(.dropdown-close).dropdown-hover:hover .dropdown-content{opacity:1;scale:100%}.dropdown:is(details) summary::-webkit-details-marker{display:none}.dropdown:where([popover]){background:0 0}.dropdown[popover]{color:inherit;position:fixed}@supports not (position-area:bottom){.dropdown[popover]{margin:auto}.dropdown[popover].dropdown-close{transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover].dropdown-open:not(:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover]::backdrop{background-color:oklab(0% none none/.3)}}:is(.dropdown[popover].dropdown-close,.dropdown[popover]:not(.dropdown-open,:popover-open)){transform-origin:top;opacity:0;display:none;scale:95%}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}@media(hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible,.btn:has(:focus-visible){isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio])[aria-label]:after{--tw-content:attr(aria-label);content:var(--tw-content)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.loading{pointer-events:none;aspect-ratio:1;vertical-align:middle;width:calc(var(--size-selector,.25rem)*6);background-color:currentColor;display:inline-block;-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:100%;mask-size:100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.collapse{border-radius:var(--radius-box,1rem);isolation:isolate;grid-template-rows:max-content 0fr;grid-template-columns:minmax(0,1fr);width:100%;display:grid;position:relative;overflow:hidden}@media(prefers-reduced-motion:no-preference){.collapse{transition:grid-template-rows .2s}}.collapse>input:is([type=checkbox],[type=radio]){appearance:none;opacity:0;z-index:1;grid-row-start:1;grid-column-start:1;width:100%;min-height:1lh;padding:1rem;padding-inline-end:3rem;transition:background-color .2s ease-out}.collapse:is([open],[tabindex]:focus:not(.collapse-close),[tabindex]:focus-within:not(.collapse-close)),.collapse:not(.collapse-close):has(>input:is([type=checkbox],[type=radio]):checked){grid-template-rows:max-content 1fr}.collapse:is([open],[tabindex]:focus:not(.collapse-close),[tabindex]:focus-within:not(.collapse-close))>.collapse-content,.collapse:not(.collapse-close)>:where(input:is([type=checkbox],[type=radio]):checked~.collapse-content){content-visibility:visible;min-height:fit-content}@supports not (content-visibility:visible){.collapse:is([open],[tabindex]:focus:not(.collapse-close),[tabindex]:focus-within:not(.collapse-close))>.collapse-content,.collapse:not(.collapse-close)>:where(input:is([type=checkbox],[type=radio]):checked~.collapse-content){visibility:visible}}.collapse:focus-visible,.collapse:has(>input:is([type=checkbox],[type=radio]):focus-visible),.collapse:has(summary:focus-visible){outline-color:var(--color-base-content);outline-offset:2px;outline-width:2px;outline-style:solid}.collapse:not(.collapse-close)>input[type=checkbox],.collapse:not(.collapse-close)>input[type=radio]:not(:checked),.collapse:not(.collapse-close)>.collapse-title{cursor:pointer}:is(.collapse[tabindex]:focus:not(.collapse-close,.collapse[open]),.collapse[tabindex]:focus-within:not(.collapse-close,.collapse[open]))>.collapse-title{cursor:unset}.collapse:is([open],[tabindex]:focus:not(.collapse-close),[tabindex]:focus-within:not(.collapse-close))>:where(.collapse-content),.collapse:not(.collapse-close)>:where(input:is([type=checkbox],[type=radio]):checked~.collapse-content){padding-bottom:1rem}.collapse:is(details){width:100%}@media(prefers-reduced-motion:no-preference){.collapse:is(details)::details-content{transition:content-visibility .2s allow-discrete,visibility .2s allow-discrete,min-height .2s ease-out allow-discrete,padding .1s ease-out 20ms,background-color .2s ease-out,height .2s;interpolate-size:allow-keywords;height:0}.collapse:is(details):where([open])::details-content{height:auto}}.collapse:is(details) summary{display:block;position:relative}.collapse:is(details) summary::-webkit-details-marker{display:none}.collapse:is(details)>.collapse-content{content-visibility:visible}.collapse:is(details) summary{outline:none}.list{flex-direction:column;font-size:.875rem;display:flex}.list .list-row{--list-grid-cols:minmax(0,auto)1fr;border-radius:var(--radius-box);word-break:break-word;grid-auto-flow:column;grid-template-columns:var(--list-grid-cols);gap:1rem;padding:1rem;display:grid;position:relative}:is(.list>:not(:last-child).list-row,.list>:not(:last-child) .list-row):after{content:"";border-bottom:var(--border)solid;inset-inline:var(--radius-box);border-color:var(--color-base-content);position:absolute;bottom:0}@supports (color:color-mix(in lab,red,red)){:is(.list>:not(:last-child).list-row,.list>:not(:last-child) .list-row):after{border-color:color-mix(in oklab,var(--color-base-content)5%,transparent)}}.toast{translate:var(--toast-x,0)var(--toast-y,0);inset-inline:auto 1rem;background-color:#0000;flex-direction:column;gap:.5rem;width:max-content;max-width:calc(100vw - 2rem);display:flex;position:fixed;top:auto;bottom:1rem}@media(prefers-reduced-motion:no-preference){.toast>*{animation:.25s ease-out toast}}.toggle{border:var(--border)solid currentColor;color:var(--input-color);cursor:pointer;appearance:none;vertical-align:middle;webkit-user-select:none;-webkit-user-select:none;user-select:none;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--toggle-p),var(--radius-selector-max)) + min(var(--border),var(--radius-selector-max)));padding:var(--toggle-p);flex-shrink:0;grid-template-columns:0fr 1fr 1fr;place-content:center;display:inline-grid;position:relative;box-shadow:inset 0 1px}@supports (color:color-mix(in lab,red,red)){.toggle{box-shadow:0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000) inset}}.toggle{--input-color:var(--color-base-content);transition:color .3s,grid-template-columns .2s}@supports (color:color-mix(in lab,red,red)){.toggle{--input-color:color-mix(in oklab,var(--color-base-content)50%,#0000)}}.toggle{--toggle-p:calc(var(--size)*.125);--size:calc(var(--size-selector,.25rem)*6);width:calc((var(--size)*2) - (var(--border) + var(--toggle-p))*2);height:var(--size)}.toggle>*{z-index:1;cursor:pointer;appearance:none;background-color:#0000;border:none;grid-column:2/span 1;grid-row-start:1;height:100%;padding:.125rem;transition:opacity .2s,rotate .4s}.toggle>:focus{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.toggle>:focus{outline-offset:2px;outline:2px solid #0000}}.toggle>:nth-child(2){color:var(--color-base-100);rotate:none}.toggle>:nth-child(3){color:var(--color-base-100);opacity:0;rotate:-15deg}.toggle:has(:checked)>:nth-child(2){opacity:0;rotate:15deg}.toggle:has(:checked)>:nth-child(3){opacity:1;rotate:none}.toggle:before{aspect-ratio:1;border-radius:var(--radius-selector);--tw-content:"";content:var(--tw-content);width:100%;height:100%;box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor;background-color:currentColor;grid-row-start:1;grid-column-start:2;transition:background-color .1s,translate .2s,inset-inline-start .2s;position:relative;inset-inline-start:0;translate:0}@supports (color:color-mix(in lab,red,red)){.toggle:before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000)}}.toggle:before{background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}@media(forced-colors:active){.toggle:before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{.toggle:before{outline-offset:-1rem;outline:.25rem solid}}.toggle:focus-visible,.toggle:has(:focus-visible){outline-offset:2px;outline:2px solid}.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked){background-color:var(--color-base-100);--input-color:var(--color-base-content);grid-template-columns:1fr 1fr 0fr}:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{background-color:currentColor}@starting-style{:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{opacity:0}}.toggle:indeterminate{grid-template-columns:.5fr 1fr .5fr}.toggle:disabled{cursor:not-allowed;opacity:.3}.toggle:disabled:before{border:var(--border)solid currentColor;background-color:#0000}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);font-size:max(var(--font-size,.875rem),.875rem);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=url]),.input :where(input[type=email]){direction:ltr}.input :where(input[type=date]){display:inline-flex}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate}@media(pointer:coarse){@supports (-webkit-touch-callout:none){.input:focus,.input:focus-within{--font-size:1rem}}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input{cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input{color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input)::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input)::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input{box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.input:has(>input[type=date]) :where(input[type=date]){webkit-appearance:none;appearance:none;display:inline-flex}.input:has(>input[type=date]) input[type=date]::-webkit-calendar-picker-indicator{cursor:pointer;width:1em;height:1em;position:absolute;inset-inline-end:.75em}.table{border-collapse:separate;--tw-border-spacing-x: 0rem ;--tw-border-spacing-y: 0rem ;width:100%;border-spacing:var(--tw-border-spacing-x)var(--tw-border-spacing-y);border-radius:var(--radius-box);text-align:left;font-size:.875rem;position:relative}.table:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media(hover:hover){:is(.table tr.row-hover,.table tr.row-hover:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table :where(thead,tfoot){white-space:nowrap;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead,tfoot){color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.table :where(thead,tfoot){font-size:.875rem;font-weight:600}.table :where(tfoot tr:first-child :is(td,th)){border-top:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(tfoot tr:first-child :is(td,th)){border-top:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.table :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table :where(thead tr :is(td,th),tbody tr:not(:last-child) :is(td,th)){border-bottom:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead tr :is(td,th),tbody tr:not(:last-child) :is(td,th)){border-bottom:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.range{appearance:none;webkit-appearance:none;--range-thumb:var(--color-base-100);--range-thumb-size:calc(var(--size-selector,.25rem)*6);--range-progress:currentColor;--range-fill:1;--range-p:.25rem;--range-bg:currentColor}@supports (color:color-mix(in lab,red,red)){.range{--range-bg:color-mix(in oklab,currentColor 10%,#0000)}}.range{cursor:pointer;vertical-align:middle;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));width:clamp(3rem,20rem,100%);height:var(--range-thumb-size);background-color:#0000;border:none;overflow:hidden}[dir=rtl] .range{--range-dir:-1}.range:focus{outline:none}.range:focus-visible{outline-offset:2px;outline:2px solid}.range::-webkit-slider-runnable-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}@media(forced-colors:active){.range::-webkit-slider-runnable-track{border:1px solid}.range::-moz-range-track{border:1px solid}}.range::-webkit-slider-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));background-color:var(--range-thumb);height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;appearance:none;webkit-appearance:none;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100cqw) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100cqw*var(--range-fill));position:relative;top:50%;transform:translateY(-50%)}@supports (color:color-mix(in lab,red,red)){.range::-webkit-slider-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100cqw) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100cqw*var(--range-fill))}}.range::-moz-range-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}.range::-moz-range-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100cqw) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100cqw*var(--range-fill));background-color:currentColor;position:relative;top:50%}@supports (color:color-mix(in lab,red,red)){.range::-moz-range-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100cqw) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100cqw*var(--range-fill))}}.range:disabled{cursor:not-allowed;opacity:.3}.select{border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;white-space:nowrap;text-overflow:ellipsis;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-image:linear-gradient(45deg,#0000 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,#0000 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.375rem;padding-inline:.75rem 1.75rem;font-size:.875rem;display:inline-flex;position:relative;overflow:hidden}@supports (color:color-mix(in lab,red,red)){.select{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.select{border-color:var(--input-color);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.select{--size:calc(var(--size-field,.25rem)*10)}[dir=rtl] .select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}[dir=rtl] .select::picker(select){translate:.5rem}[dir=rtl] .select select::picker(select){translate:.5rem}.select[multiple]{background-image:none;height:auto;padding-block:.75rem;padding-inline-end:.75rem;overflow:auto}.select select{appearance:none;width:calc(100% + 2.75rem);height:calc(100% - calc(var(--border)*2));background:inherit;border-radius:inherit;border-style:none;align-items:center;margin-inline:-.75rem -1.75rem;padding-inline:.75rem 1.75rem}.select select:focus,.select select:focus-within{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.select select:focus,.select select:focus-within{outline-offset:2px;outline:2px solid #0000}}.select select:not(:last-child){background-image:none;margin-inline-end:-1.375rem}.select:focus,.select:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.select:focus,.select:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.select:focus,.select:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate}.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select{cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select{color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select)::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select)::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.select:has(>select[disabled])>select[disabled]{cursor:not-allowed}@supports (appearance:base-select){.select,.select select{appearance:base-select}:is(.select,.select select)::picker(select){appearance:base-select}}:is(.select,.select select)::picker(select){color:inherit;border:var(--border)solid var(--color-base-200);border-radius:var(--radius-box);background-color:inherit;max-height:min(24rem,70dvh);box-shadow:0 2px calc(var(--depth)*3px) -2px #0003;box-shadow:0 20px 25px -5px rgb(0 0 0/calc(var(--depth)*.1)),0 8px 10px -6px rgb(0 0 0/calc(var(--depth)*.1));margin-block:.5rem;margin-inline:.5rem;padding:.5rem;translate:-.5rem}:is(.select,.select select)::picker-icon{display:none}:is(.select,.select select) optgroup{padding-top:.5em}:is(.select,.select select) optgroup option:first-child{margin-top:.5em}:is(.select,.select select) option{border-radius:var(--radius-field);white-space:normal;padding-block:.375rem;padding-inline:.75rem;transition-property:color,background-color;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1)}:is(.select,.select select) option:not(:disabled):hover,:is(.select,.select select) option:not(:disabled):focus-visible{cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select,.select select) option:not(:disabled):hover,:is(.select,.select select) option:not(:disabled):focus-visible{background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}:is(.select,.select select) option:not(:disabled):hover,:is(.select,.select select) option:not(:disabled):focus-visible{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){:is(.select,.select select) option:not(:disabled):hover,:is(.select,.select select) option:not(:disabled):focus-visible{outline-offset:2px;outline:2px solid #0000}}:is(.select,.select select) option:not(:disabled):active{background-color:var(--color-neutral);color:var(--color-neutral-content);box-shadow:0 2px calc(var(--depth)*3px) -2px var(--color-neutral)}.avatar{vertical-align:middle;display:inline-flex;position:relative}.avatar>div{aspect-ratio:1;display:block;overflow:hidden}.avatar img{object-fit:cover;width:100%;height:100%}.checkbox{border:var(--border)solid var(--input-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.checkbox{border:var(--border)solid var(--input-color,color-mix(in oklab,var(--color-base-content)20%,#0000))}}.checkbox{cursor:pointer;appearance:none;border-radius:var(--radius-selector);vertical-align:middle;color:var(--color-base-content);box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 0 #0000 inset,0 0 #0000;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);flex-shrink:0;padding:.25rem;transition:background-color .2s,box-shadow .2s;display:inline-block;position:relative}.checkbox:before{--tw-content:"";content:var(--tw-content);opacity:0;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,70% 80%,70% 100%);width:100%;height:100%;box-shadow:0 3px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-color:currentColor;font-size:1rem;line-height:.75;transition:clip-path .3s .1s,opacity .1s .1s,rotate .3s .1s,translate .3s .1s;display:block;rotate:45deg}.checkbox:focus-visible{outline:2px solid var(--input-color,currentColor);outline-offset:2px}.checkbox:checked,.checkbox[aria-checked=true]{background-color:var(--input-color,#0000);box-shadow:0 0 #0000 inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1))}:is(.checkbox:checked,.checkbox[aria-checked=true]):before{clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 0%,70% 0%,70% 100%);opacity:1}@media(forced-colors:active){:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}@media print{:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}.checkbox:indeterminate{background-color:var(--input-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.checkbox:indeterminate{background-color:var(--input-color,color-mix(in oklab,var(--color-base-content)20%,#0000))}}.checkbox:indeterminate:before{opacity:1;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,80% 80%,80% 100%);translate:0 -35%;rotate:none}.radio{cursor:pointer;appearance:none;vertical-align:middle;border:var(--border)solid var(--input-color,currentColor);border-radius:3.40282e38px;flex-shrink:0;padding:.25rem;display:inline-block;position:relative}@supports (color:color-mix(in lab,red,red)){.radio{border:var(--border)solid var(--input-color,color-mix(in srgb,currentColor 20%,#0000))}}.radio{box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);color:var(--input-color,currentColor)}.radio:before{--tw-content:"";content:var(--tw-content);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);border-radius:3.40282e38px;width:100%;height:100%;display:block}.radio:focus-visible{outline:2px solid}.radio:checked,.radio[aria-checked=true]{background-color:var(--color-base-100);border-color:currentColor}@media(prefers-reduced-motion:no-preference){.radio:checked,.radio[aria-checked=true]{animation:.2s ease-out radio}}:is(.radio:checked,.radio[aria-checked=true]):before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1));background-color:currentColor}@media(forced-colors:active){:is(.radio:checked,.radio[aria-checked=true]):before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{:is(.radio:checked,.radio[aria-checked=true]):before{outline-offset:-1rem;outline:.25rem solid}}.rating{vertical-align:middle;display:inline-flex;position:relative}.rating input{appearance:none;border:none}.rating :where(*){background-color:var(--color-base-content);opacity:.2;border-radius:0;width:1.5rem;height:1.5rem}@media(prefers-reduced-motion:no-preference){.rating :where(*){animation:.25s ease-out rating}}.rating :where(*):is(input){cursor:pointer}.rating .rating-hidden{background-color:#0000;width:.5rem}.rating input[type=radio]:checked{background-image:none}.rating :checked,.rating [aria-checked=true],.rating [aria-current=true],.rating :has(~:checked,~[aria-checked=true],~[aria-current=true]){opacity:1}.rating :focus-visible{scale:1.1}@media(prefers-reduced-motion:no-preference){.rating :focus-visible{transition:scale .2s ease-out}}.rating :active:focus{animation:none;scale:1.1}.stats{border-radius:var(--radius-box);grid-auto-flow:column;display:inline-grid;position:relative;overflow-x:auto}.progress{appearance:none;border-radius:var(--radius-box);background-color:currentColor;width:100%;height:.5rem;position:relative;overflow:hidden}@supports (color:color-mix(in lab,red,red)){.progress{background-color:color-mix(in oklab,currentcolor 20%,transparent)}}.progress{color:var(--color-base-content)}.progress:indeterminate{background-image:repeating-linear-gradient(90deg,currentColor -1% 10%,#0000 10% 90%);background-position-x:15%;background-size:200%}@media(prefers-reduced-motion:no-preference){.progress:indeterminate{animation:5s ease-in-out infinite progress}}@supports ((-moz-appearance:none)){.progress:indeterminate::-moz-progress-bar{background-color:#0000}@media(prefers-reduced-motion:no-preference){.progress:indeterminate::-moz-progress-bar{background-image:repeating-linear-gradient(90deg,currentColor -1% 10%,#0000 10% 90%);background-position-x:15%;background-size:200%;animation:5s ease-in-out infinite progress}}.progress::-moz-progress-bar{border-radius:var(--radius-box);background-color:currentColor}}@supports ((-webkit-appearance:none)){.progress::-webkit-progress-bar{border-radius:var(--radius-box);background-color:#0000}.progress::-webkit-progress-value{border-radius:var(--radius-box);background-color:currentColor}}.textarea{border:var(--border)solid #0000;appearance:none;border-radius:var(--radius-field);background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);min-height:5rem;font-size:max(var(--font-size,.875rem),.875rem);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;flex-shrink:1;padding-block:.5rem;padding-inline:.75rem}@supports (color:color-mix(in lab,red,red)){.textarea{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.textarea{--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.textarea{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.textarea textarea{appearance:none;background-color:#0000;border:none}.textarea textarea:focus,.textarea textarea:focus-within{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.textarea textarea:focus,.textarea textarea:focus-within{outline-offset:2px;outline:2px solid #0000}}.textarea:focus,.textarea:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.textarea:focus,.textarea:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.textarea:focus,.textarea:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate}@media(pointer:coarse){@supports (-webkit-touch-callout:none){.textarea:focus,.textarea:focus-within{--font-size:1rem}}}.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){box-shadow:none}.textarea:has(>textarea[disabled])>textarea[disabled]{cursor:not-allowed}.stack{grid-template-rows:3px 4px 1fr 4px 3px;grid-template-columns:3px 4px 1fr 4px 3px;display:inline-grid}.stack>*{width:100%;height:100%}.stack>:nth-child(n+2){opacity:.7;width:100%}.stack>:nth-child(2){z-index:2;opacity:.9}.stack>:first-child{z-index:3;width:100%}.filter{flex-wrap:wrap;display:flex}.filter input[type=radio]{width:auto}.filter input{opacity:1;transition:margin .1s,opacity .3s,padding .3s,border-width .1s;overflow:hidden;scale:1}.filter input:not(:last-child){margin-inline-end:.25rem}.filter input.filter-reset{aspect-ratio:1}.filter input.filter-reset:after{--tw-content:"×";content:var(--tw-content)}.filter:not(:has(input:checked:not(.filter-reset))) .filter-reset,.filter:not(:has(input:checked:not(.filter-reset))) input[type=reset],.filter:has(input:checked:not(.filter-reset)) input:not(:checked,.filter-reset,input[type=reset]){opacity:0;border-width:0;width:0;margin-inline:0;padding-inline:0;scale:0}.label{white-space:nowrap;color:currentColor;align-items:center;gap:.375rem;display:inline-flex}@supports (color:color-mix(in lab,red,red)){.label{color:color-mix(in oklab,currentcolor 60%,transparent)}}.label:has(input){cursor:pointer}.label:is(.input>*,.select>*){white-space:nowrap;height:calc(100% - .5rem);font-size:inherit;align-items:center;padding-inline:.75rem;display:flex}.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid currentColor;margin-inline:-.75rem .75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid currentColor;margin-inline:.75rem -.75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.status{aspect-ratio:1;border-radius:var(--radius-selector);background-color:var(--color-base-content);width:.5rem;height:.5rem;display:inline-block}@supports (color:color-mix(in lab,red,red)){.status{background-color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.status{vertical-align:middle;color:#0000004d;background-position:50%;background-repeat:no-repeat}@supports (color:color-mix(in lab,red,red)){.status{color:color-mix(in oklab,var(--color-black)30%,transparent)}}.status{background-image:radial-gradient(circle at 35% 30%,oklch(1 0 0/calc(var(--depth)*.5)),#0000);box-shadow:0 2px 3px -1px}@supports (color:color-mix(in lab,red,red)){.status{box-shadow:0 2px 3px -1px color-mix(in oklab,currentColor calc(var(--depth)*100%),#0000)}}.stat{grid-template-columns:repeat(1,1fr);column-gap:1rem;width:100%;padding-block:1rem;padding-inline:1.5rem;display:inline-grid}.stat:not(:last-child){border-inline-end:var(--border)dashed currentColor}@supports (color:color-mix(in lab,red,red)){.stat:not(:last-child){border-inline-end:var(--border)dashed color-mix(in oklab,currentColor 10%,#0000)}}.stat:not(:last-child){border-block-end:none}.alert{--alert-border-color:var(--color-base-200);border-radius:var(--radius-box);color:var(--color-base-content);background-color:var(--alert-color,var(--color-base-200));text-align:start;background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px #000,0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08));border-style:solid;grid-template-columns:auto;grid-auto-flow:column;justify-content:start;place-items:center start;gap:1rem;padding-block:.75rem;padding-inline:1rem;font-size:.875rem;line-height:1.25rem;display:grid}@supports (color:color-mix(in lab,red,red)){.alert{box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px color-mix(in oklab,color-mix(in oklab,#000 20%,var(--alert-color,var(--color-base-200)))calc(var(--depth)*20%),#0000),0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08))}}.alert:has(:nth-child(2)){grid-template-columns:auto minmax(auto,1fr)}.mask{vertical-align:middle;display:inline-block;-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.skeleton{border-radius:var(--radius-box);background-color:var(--color-base-300)}@media(prefers-reduced-motion:reduce){.skeleton{transition-duration:15s}}.skeleton{will-change:background-position;background-image:linear-gradient(105deg,#0000 0% 40%,var(--color-base-100)50%,#0000 60% 100%);background-position-x:-50%;background-size:200%}@media(prefers-reduced-motion:no-preference){.skeleton{animation:1.8s ease-in-out infinite skeleton}}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}}@layer daisyui.l1.l2{.modal.modal-open,.modal[open],.modal:target,.modal-toggle:checked+.modal{pointer-events:auto;visibility:visible;opacity:1;transition:visibility 0s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;background-color:#0006}:is(.modal.modal-open,.modal[open],.modal:target,.modal-toggle:checked+.modal) .modal-box{opacity:1;translate:0;scale:1}:root:has(:is(.modal.modal-open,.modal[open],.modal:target,.modal-toggle:checked+.modal)){--page-has-backdrop:1;--page-overflow:hidden;--page-scroll-bg:var(--page-scroll-bg-on);--page-scroll-gutter:stable;--page-scroll-transition:var(--page-scroll-transition-on);animation:forwards set-page-has-scroll;animation-timeline:scroll()}@starting-style{.modal.modal-open,.modal[open],.modal:target,.modal-toggle:checked+.modal{opacity:0}}.tooltip>.tooltip-content,.tooltip[data-tip]:before{transform:translate(-50%)translateY(var(--tt-pos,.25rem));inset:auto auto var(--tt-off)50%}.tooltip:after{transform:translate(-50%)translateY(var(--tt-pos,.25rem));inset:auto auto var(--tt-tail)50%}.btn:disabled:not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:disabled:not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:disabled:not(.btn-link,.btn-ghost){box-shadow:none}.btn:disabled{pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:disabled{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}.btn[disabled]:not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn[disabled]:not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn[disabled]:not(.btn-link,.btn-ghost){box-shadow:none}.btn[disabled]{pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn[disabled]{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media(prefers-reduced-motion:no-preference){.collapse[open].collapse-arrow>.collapse-title:after,.collapse.collapse-open.collapse-arrow>.collapse-title:after{transform:translateY(-50%)rotate(225deg)}}.collapse.collapse-open.collapse-plus>.collapse-title:after{--tw-content:"−";content:var(--tw-content)}:is(.collapse[tabindex].collapse-arrow:focus:not(.collapse-close),.collapse.collapse-arrow[tabindex]:focus-within:not(.collapse-close))>.collapse-title:after,.collapse.collapse-arrow:not(.collapse-close)>input:is([type=checkbox],[type=radio]):checked~.collapse-title:after{transform:translateY(-50%)rotate(225deg)}.collapse[open].collapse-plus>.collapse-title:after,.collapse[tabindex].collapse-plus:focus:not(.collapse-close)>.collapse-title:after,.collapse.collapse-plus:not(.collapse-close)>input:is([type=checkbox],[type=radio]):checked~.collapse-title:after{--tw-content:"−";content:var(--tw-content)}.list .list-row:has(.list-col-grow:first-child){--list-grid-cols:1fr}.list .list-row:has(.list-col-grow:nth-child(2)){--list-grid-cols:minmax(0,auto)1fr}.list .list-row:has(.list-col-grow:nth-child(3)){--list-grid-cols:minmax(0,auto)minmax(0,auto)1fr}.list .list-row:has(.list-col-grow:nth-child(4)){--list-grid-cols:minmax(0,auto)minmax(0,auto)minmax(0,auto)1fr}.list .list-row:has(.list-col-grow:nth-child(5)){--list-grid-cols:minmax(0,auto)minmax(0,auto)minmax(0,auto)minmax(0,auto)1fr}.list .list-row:has(.list-col-grow:nth-child(6)){--list-grid-cols:minmax(0,auto)minmax(0,auto)minmax(0,auto)minmax(0,auto)minmax(0,auto)1fr}.list .list-row>*{grid-row-start:1}.checkbox:disabled,.radio:disabled{cursor:not-allowed;opacity:.2}.rating.rating-xs :where(:not(.rating-hidden)){width:1rem;height:1rem}.rating.rating-sm :where(:not(.rating-hidden)){width:1.25rem;height:1.25rem}.rating.rating-md :where(:not(.rating-hidden)){width:1.5rem;height:1.5rem}.rating.rating-lg :where(:not(.rating-hidden)){width:1.75rem;height:1.75rem}.rating.rating-xl :where(:not(.rating-hidden)){width:2rem;height:2rem}.dropdown-center{--anchor-h:center}.dropdown-center :where(.dropdown-content){inset-inline-end:50%;translate:50%}[dir=rtl] :is(.dropdown-center :where(.dropdown-content)){translate:-50%}.dropdown-center.dropdown-left{--anchor-h:left;--anchor-v:center}.dropdown-center.dropdown-left .dropdown-content{top:auto;bottom:50%;translate:0 50%}.dropdown-center.dropdown-right{--anchor-h:right;--anchor-v:center}.dropdown-center.dropdown-right .dropdown-content{top:auto;bottom:50%;translate:0 50%}.dropdown-end{--anchor-h:span-left}.dropdown-end :where(.dropdown-content){inset-inline-end:0;translate:0}[dir=rtl] :is(.dropdown-end :where(.dropdown-content)){translate:0}.dropdown-end.dropdown-left{--anchor-h:left;--anchor-v:span-top}.dropdown-end.dropdown-left .dropdown-content{top:auto;bottom:0}.dropdown-end.dropdown-right{--anchor-h:right;--anchor-v:span-top}.dropdown-end.dropdown-right .dropdown-content{top:auto;bottom:0}.dropdown-bottom{--anchor-v:bottom}.dropdown-bottom .dropdown-content{transform-origin:top;top:100%;bottom:auto}.dropdown-top{--anchor-v:top}.dropdown-top .dropdown-content{transform-origin:bottom;top:auto;bottom:100%}:is(.stack,.stack.stack-bottom)>*{grid-area:3/3/6/4}:is(.stack,.stack.stack-bottom)>:nth-child(2){grid-area:2/2/5/5}:is(.stack,.stack.stack-bottom)>:first-child{grid-area:1/1/4/6}.stack.stack-top>*{grid-area:1/3/4/4}.stack.stack-top>:nth-child(2){grid-area:2/2/5/5}.stack.stack-top>:first-child{grid-area:3/1/6/6}.stack.stack-start>*{grid-area:3/1/4/4}.stack.stack-start>:nth-child(2){grid-area:2/2/5/5}.stack.stack-start>:first-child{grid-area:1/3/6/6}.stack.stack-end>*{grid-area:3/3/4/6}.stack.stack-end>:nth-child(2){grid-area:2/2/5/5}.stack.stack-end>:first-child{grid-area:1/1/6/4}.loading-xs{width:calc(var(--size-selector,.25rem)*4)}.loading-spinner{-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")}.range-xs{--range-thumb-size:calc(var(--size-selector,.25rem)*4)}.toggle-sm[type=checkbox],.toggle-sm:has([type=checkbox]){--size:calc(var(--size-selector,.25rem)*5)}}.prose :where(a.btn:not(.btn-link)):not(:where([class~=not-prose],[class~=not-prose] *)){text-decoration-line:none}.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse:not(td,tr,colgroup){visibility:revert-layer}.collapse{visibility:collapse}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-x-0{inset-inline:calc(var(--spacing)*0)}.inset-x-2{inset-inline:calc(var(--spacing)*2)}.inset-x-3{inset-inline:calc(var(--spacing)*3)}.inset-x-4{inset-inline:calc(var(--spacing)*4)}.-inset-y-1{inset-block:calc(var(--spacing)*-1)}.inset-y-0{inset-block:calc(var(--spacing)*0)}.-top-1\\.5{top:calc(var(--spacing)*-1.5)}.-top-1\\.75{top:calc(var(--spacing)*-1.75)}.-top-2{top:calc(var(--spacing)*-2)}.-top-3\\.5{top:calc(var(--spacing)*-3.5)}.-top-4{top:calc(var(--spacing)*-4)}.-top-100\\!{top:calc(var(--spacing)*-100)!important}.top-0{top:calc(var(--spacing)*0)}.top-0\\!{top:calc(var(--spacing)*0)!important}.top-0\\.5{top:calc(var(--spacing)*.5)}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2{top:50%}.top-4{top:calc(var(--spacing)*4)}.top-14{top:calc(var(--spacing)*14)}.top-auto{top:auto}.top-auto\\!{top:auto!important}.-right-1{right:calc(var(--spacing)*-1)}.-right-3{right:calc(var(--spacing)*-3)}.-right-6{right:calc(var(--spacing)*-6)}.-right-200{right:calc(var(--spacing)*-200)}.right-0\\!{right:calc(var(--spacing)*0)!important}.right-0\\.5{right:calc(var(--spacing)*.5)}.right-1{right:calc(var(--spacing)*1)}.right-2{right:calc(var(--spacing)*2)}.right-5{right:calc(var(--spacing)*5)}.right-auto{right:auto}.right-auto\\!{right:auto!important}.-bottom-1{bottom:calc(var(--spacing)*-1)}.-bottom-1\\.5{bottom:calc(var(--spacing)*-1.5)}.-bottom-2{bottom:calc(var(--spacing)*-2)}.-bottom-3\\.5{bottom:calc(var(--spacing)*-3.5)}.-bottom-4{bottom:calc(var(--spacing)*-4)}.-bottom-20\\!{bottom:calc(var(--spacing)*-20)!important}.-bottom-100\\!{bottom:calc(var(--spacing)*-100)!important}.bottom-0{bottom:calc(var(--spacing)*0)}.bottom-0\\!{bottom:calc(var(--spacing)*0)!important}.bottom-0\\.5{bottom:calc(var(--spacing)*.5)}.bottom-4{bottom:calc(var(--spacing)*4)}.bottom-6\\.5\\!{bottom:calc(var(--spacing)*6.5)!important}.bottom-8{bottom:calc(var(--spacing)*8)}.bottom-14{bottom:calc(var(--spacing)*14)}.bottom-15{bottom:calc(var(--spacing)*15)}.bottom-16{bottom:calc(var(--spacing)*16)}.bottom-auto{bottom:auto}.bottom-auto\\!{bottom:auto!important}.-left-1{left:calc(var(--spacing)*-1)}.-left-3{left:calc(var(--spacing)*-3)}.-left-4{left:calc(var(--spacing)*-4)}.-left-200{left:calc(var(--spacing)*-200)}.left-0{left:calc(var(--spacing)*0)}.left-0\\!{left:calc(var(--spacing)*0)!important}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing)*2)}.left-5{left:calc(var(--spacing)*5)}.left-auto{left:auto}.left-auto\\!{left:auto!important}.-z-1{z-index:-1}.-z-2{z-index:-2}.-z-10{z-index:-10}.-z-50{z-index:-50}.z-0{z-index:0}.z-1{z-index:1}.z-40{z-index:40}.z-50{z-index:50}.z-999{z-index:999}.z-99999{z-index:99999}.z-999999{z-index:999999}.z-9999999{z-index:9999999}.z-2147483647{z-index:2147483647}.order-first{order:-9999}.col-span-1{grid-column:span 1/span 1}.col-span-2{grid-column:span 2/span 2}.container{width:100%}@media(min-width:20rem){.container{max-width:20rem}}@media(min-width:30rem){.container{max-width:30rem}}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.mx-auto{margin-inline:auto}.my-4{margin-block:calc(var(--spacing)*4)}.-mt-0\\.5{margin-top:calc(var(--spacing)*-.5)}.-mt-1\\.5{margin-top:calc(var(--spacing)*-1.5)}.-mt-4{margin-top:calc(var(--spacing)*-4)}.-mt-13{margin-top:calc(var(--spacing)*-13)}.mt-0\\.75{margin-top:calc(var(--spacing)*.75)}.mt-3\\.5{margin-top:calc(var(--spacing)*3.5)}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-auto{margin-top:auto}.mt-auto\\!{margin-top:auto!important}.-mr-1{margin-right:calc(var(--spacing)*-1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-auto{margin-right:auto}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\.5{margin-bottom:calc(var(--spacing)*3.5)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.-ml-2{margin-left:calc(var(--spacing)*-2)}.ml-1{margin-left:calc(var(--spacing)*1)}.ml-auto{margin-left:auto}.alert{border-width:var(--border);border-color:var(--alert-border-color,var(--color-base-200))}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.table{display:table}.aspect-square{aspect-ratio:1}.size-2{width:calc(var(--spacing)*2);height:calc(var(--spacing)*2)}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-4\\.5{width:calc(var(--spacing)*4.5);height:calc(var(--spacing)*4.5)}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.size-5\\.5{width:calc(var(--spacing)*5.5);height:calc(var(--spacing)*5.5)}.size-7{width:calc(var(--spacing)*7);height:calc(var(--spacing)*7)}.size-14{width:calc(var(--spacing)*14);height:calc(var(--spacing)*14)}.size-18{width:calc(var(--spacing)*18);height:calc(var(--spacing)*18)}.size-32{width:calc(var(--spacing)*32);height:calc(var(--spacing)*32)}.h-\\(--player-height\\){height:var(--player-height)}.h-1\\.5{height:calc(var(--spacing)*1.5)}.h-2{height:calc(var(--spacing)*2)}.h-4{height:calc(var(--spacing)*4)}.h-6{height:calc(var(--spacing)*6)}.h-7{height:calc(var(--spacing)*7)}.h-8{height:calc(var(--spacing)*8)}.h-9{height:calc(var(--spacing)*9)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.h-32{height:calc(var(--spacing)*32)}.h-38{height:calc(var(--spacing)*38)}.h-44{height:calc(var(--spacing)*44)}.h-auto{height:auto}.h-fit{height:fit-content}.h-full{height:100%}.h-min{height:min-content}.max-h-2{max-height:calc(var(--spacing)*2)}.max-h-\\[70\\%\\]{max-height:70%}.max-h-\\[calc\\(100dvh-52px\\)\\]{max-height:calc(100dvh - 52px)}.max-h-full{max-height:100%}.min-h-32{min-height:calc(var(--spacing)*32)}.min-h-px{min-height:1px}.w-\\(--widget-width\\){width:var(--widget-width)}.w-4{width:calc(var(--spacing)*4)}.w-7{width:calc(var(--spacing)*7)}.w-8{width:calc(var(--spacing)*8)}.w-9{width:calc(var(--spacing)*9)}.w-10{width:calc(var(--spacing)*10)}.w-12{width:calc(var(--spacing)*12)}.w-26{width:calc(var(--spacing)*26)}.w-30{width:calc(var(--spacing)*30)}.w-40{width:calc(var(--spacing)*40)}.w-44{width:calc(var(--spacing)*44)}.w-\\[calc\\(var\\(--widget-width\\)-1rem\\)\\]{width:calc(var(--widget-width) - 1rem)}.w-auto{width:auto}.w-dvw{width:100dvw}.w-fit{width:fit-content}.w-full{width:100%}.w-max{width:max-content}.w-px{width:1px}.w-screen{width:100vw}.max-w-27{max-width:calc(var(--spacing)*27)}.max-w-dvw{max-width:100dvw}.max-w-xs{max-width:320px}.min-w-7{min-width:calc(var(--spacing)*7)}.min-w-8{min-width:calc(var(--spacing)*8)}.min-w-9{min-width:calc(var(--spacing)*9)}.min-w-10{min-width:calc(var(--spacing)*10)}.min-w-12{min-width:calc(var(--spacing)*12)}.min-w-15{min-width:calc(var(--spacing)*15)}.min-w-full{min-width:100%}.min-w-px{min-width:1px}.min-w-xs{min-width:320px}.flex-shrink,.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.flex-grow,.grow{flex-grow:1}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-6{--tw-translate-x:calc(var(--spacing)*-6);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-full{--tw-translate-x:-100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-1\\/2{--tw-translate-x: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-full{--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-full{--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.-rotate-90{rotate:-90deg}.rotate-45{rotate:45deg}.rotate-90{rotate:90deg}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-move-down{animation:.2s ease-in-out move-down}.animate-move-left{animation:.2s ease-in-out move-left}.animate-move-right{animation:.2s ease-in-out move-right}.animate-move-up{animation:.2s ease-in-out move-up}.animate-pulse{animation:var(--animate-pulse)}.animate-scale{animation:.2s ease-in-out scale}.animate-spin{animation:var(--animate-spin)}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize{resize:both}.resize-none{resize:none}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.grid-cols-subgrid{grid-template-columns:subgrid}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-wrap-reverse{flex-wrap:wrap-reverse}.place-content-center{place-content:center}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.justify-items-center{justify-items:center}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\\.5{gap:calc(var(--spacing)*1.5)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.gap-x-2{column-gap:calc(var(--spacing)*2)}.gap-y-1{row-gap:calc(var(--spacing)*1)}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:calc(var(--radius) + 4px)}.rounded-xs{border-radius:var(--radius-xs)}.rounded-r-full{border-top-right-radius:3.40282e38px;border-bottom-right-radius:3.40282e38px}.border{border-style:var(--tw-border-style);border-width:1px}.border-6{border-style:var(--tw-border-style);border-width:6px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-none{--tw-border-style:none;border-style:none}.border-blue-500{border-color:var(--color-blue-500)}.border-border{border-color:var(--border)}.border-destructive{border-color:var(--destructive)}.border-foreground\\/10{border-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.border-foreground\\/10{border-color:color-mix(in oklab,var(--foreground)10%,transparent)}}.border-foreground\\/20{border-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.border-foreground\\/20{border-color:color-mix(in oklab,var(--foreground)20%,transparent)}}.border-green-700{border-color:var(--color-green-700)}.border-orange-500{border-color:var(--color-orange-500)}.border-primary,.border-primary\\/30{border-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.border-primary\\/30{border-color:color-mix(in oklab,var(--primary)30%,transparent)}}.bg-\\[\\#f8f8f8\\]{background-color:#f8f8f8}.bg-accent{background-color:var(--accent)}.bg-background{background-color:var(--background)}.bg-background\\!{background-color:var(--background)!important}.bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab,red,red)){.bg-black\\/20{background-color:color-mix(in oklab,var(--color-black)20%,transparent)}}.bg-blue-500{background-color:var(--color-blue-500)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-border{background-color:var(--border)}.bg-destructive{background-color:var(--destructive)}.bg-foreground,.bg-foreground\\/10{background-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.bg-foreground\\/10{background-color:color-mix(in oklab,var(--foreground)10%,transparent)}}.bg-green-600{background-color:var(--color-green-600)}.bg-green-700{background-color:var(--color-green-700)}.bg-muted{background-color:var(--muted)}.bg-orange-500{background-color:var(--color-orange-500)}.bg-orange-600{background-color:var(--color-orange-600)}.bg-popover{background-color:var(--popover)}.bg-primary{background-color:var(--primary)}.bg-primary\\!{background-color:var(--primary)!important}.bg-primary-foreground,.bg-primary-foreground\\/30{background-color:var(--primary-foreground)}@supports (color:color-mix(in lab,red,red)){.bg-primary-foreground\\/30{background-color:color-mix(in oklab,var(--primary-foreground)30%,transparent)}}.bg-primary\\/10{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/10{background-color:color-mix(in oklab,var(--primary)10%,transparent)}}.bg-primary\\/15{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/15{background-color:color-mix(in oklab,var(--primary)15%,transparent)}}.bg-secondary{background-color:var(--secondary)}.bg-success{background-color:var(--success)}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.object-cover{object-fit:cover}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-0\\.5{padding:calc(var(--spacing)*.5)}.p-0\\.75\\!{padding:calc(var(--spacing)*.75)!important}.p-1{padding:calc(var(--spacing)*1)}.p-1\\.5{padding:calc(var(--spacing)*1.5)}.p-2{padding:calc(var(--spacing)*2)}.p-2\\.5{padding:calc(var(--spacing)*2.5)}.p-4{padding:calc(var(--spacing)*4)}.p-9{padding:calc(var(--spacing)*9)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-1\\.5{padding-inline:calc(var(--spacing)*1.5)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\.5{padding-inline:calc(var(--spacing)*2.5)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-3\\.5{padding-inline:calc(var(--spacing)*3.5)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-1\\.25{padding-block:calc(var(--spacing)*1.25)}.py-2{padding-block:calc(var(--spacing)*2)}.pt-2{padding-top:calc(var(--spacing)*2)}.pr-2{padding-right:calc(var(--spacing)*2)}.pr-3{padding-right:calc(var(--spacing)*3)}.pr-4{padding-right:calc(var(--spacing)*4)}.pr-8{padding-right:calc(var(--spacing)*8)}.pb-0{padding-bottom:calc(var(--spacing)*0)}.pl-4{padding-left:calc(var(--spacing)*4)}.text-center{text-align:center}.text-left{text-align:left}.text-base{font-size:calc(var(--font-size)*1);line-height:var(--tw-leading,var(--text-base--line-height))}.text-sm{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:calc(var(--font-size)*.75);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-0{--tw-leading:calc(var(--spacing)*0);line-height:calc(var(--spacing)*0)}.leading-normal{--tw-leading:var(--leading-normal);line-height:var(--leading-normal)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-light{--tw-font-weight:var(--font-weight-light);font-weight:var(--font-weight-light)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.break-anywhere{overflow-wrap:anywhere}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.text-background{color:var(--background)}.text-blue-50{color:var(--color-blue-50)}.text-destructive{color:var(--destructive)}.text-destructive-foreground{color:var(--destructive-foreground)}.text-foreground{color:var(--foreground)}.text-green-50{color:var(--color-green-50)}.text-muted-foreground{color:var(--muted-foreground)}.text-orange-50{color:var(--color-orange-50)}.text-popover-foreground{color:var(--popover-foreground)}.text-primary{color:var(--primary)}.text-primary-foreground{color:var(--primary-foreground)}.text-primary-foreground\\!{color:var(--primary-foreground)!important}.text-secondary{color:var(--secondary)}.text-secondary-foreground{color:var(--secondary-foreground)}.text-success-foreground{color:var(--success-foreground)}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.underline{text-decoration-line:underline}.opacity-0{opacity:0}.opacity-15{opacity:.15}.opacity-50{opacity:.5}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline,.outline-1{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-border{outline-color:var(--border)}.outline-destructive{outline-color:var(--destructive)}.outline-destructive-foreground{outline-color:var(--destructive-foreground)}.outline-primary{outline-color:var(--primary)}.outline-primary-foreground{outline-color:var(--primary-foreground)}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.brightness-85{--tw-brightness:brightness(85%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow-lg{--tw-drop-shadow-size:drop-shadow(0 4px 4px var(--tw-drop-shadow-color,#00000026));--tw-drop-shadow:drop-shadow(var(--drop-shadow-lg));filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[bottom\\]{transition-property:bottom;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[colors\\]{transition-property:colors;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[margin\\]{transition-property:margin;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[width\\]{transition-property:width;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.outline-solid{--tw-outline-style:solid;outline-style:solid}.\\[--player-height\\:calc\\(100dvh-52px\\)\\]{--player-height: calc(100dvh - 52px) }.\\[--range-bg\\:var\\(--muted\\)\\]{--range-bg:var(--muted)}.\\[--range-thumb\\:var\\(--primary-foreground\\)\\]{--range-thumb:var(--primary-foreground)}:is(.\\*\\:z-10>*){z-index:10}:is(.\\*\\:text-background>*){color:var(--background)}:is(.\\*\\:text-blue-50>*){color:var(--color-blue-50)}:is(.\\*\\:text-destructive-foreground>*){color:var(--destructive-foreground)}:is(.\\*\\:text-green-50>*){color:var(--color-green-50)}:is(.\\*\\:text-orange-50>*){color:var(--color-orange-50)}:is(.\\*\\:text-primary-foreground>*){color:var(--primary-foreground)}:is(.\\*\\*\\:text-foreground *){color:var(--foreground)}.not-focus\\:outline-0:not(:focus){outline-style:var(--tw-outline-style);outline-width:0}.not-expanded\\:text-xs:not(:is(:host([data-expanded=true]) *)){font-size:calc(var(--font-size)*.75);line-height:var(--tw-leading,var(--text-xs--line-height))}.not-mobile\\:size-15:not(:is(:host(:not([data-expanded=true])) *)){width:calc(var(--spacing)*15);height:calc(var(--spacing)*15)}@media not all and (max-width:640px){.not-mobile\\:size-15{width:calc(var(--spacing)*15);height:calc(var(--spacing)*15)}}.not-mobile\\:size-20:not(:is(:host(:not([data-expanded=true])) *)){width:calc(var(--spacing)*20);height:calc(var(--spacing)*20)}@media not all and (max-width:640px){.not-mobile\\:size-20{width:calc(var(--spacing)*20);height:calc(var(--spacing)*20)}}@media(hover:hover){.group-hover\\:brightness-85:is(:where(.group):hover *){--tw-brightness:brightness(85%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}}.group-data-\\[state\\=close\\]\\:-mb-100:is(:where(.group)[data-state=close] *){margin-bottom:calc(var(--spacing)*-100)}.placeholder\\:text-sm::placeholder{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}.before\\:size-4:before{content:var(--tw-content);width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.before\\:rounded-full:before{content:var(--tw-content);border-radius:3.40282e38px}.not-checked\\:before\\:bg-background:not(:checked):before{content:var(--tw-content);background-color:var(--background)}.checked\\:bg-primary:checked{background-color:var(--primary)}.checked\\:text-primary-foreground:checked{color:var(--primary-foreground)}.focus-within\\:pointer-events-auto:focus-within{pointer-events:auto}.focus-within\\:visible:focus-within{visibility:visible}@media(hover:hover){.hover\\:bg-accent:hover{background-color:var(--accent)}.hover\\:bg-foreground\\/5:hover{background-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-foreground\\/5:hover{background-color:color-mix(in oklab,var(--foreground)5%,transparent)}}.hover\\:bg-muted:hover{background-color:var(--muted)}.hover\\:bg-muted\\!:hover{background-color:var(--muted)!important}.hover\\:bg-primary-foreground\\/5:hover{background-color:var(--primary-foreground)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-primary-foreground\\/5:hover{background-color:color-mix(in oklab,var(--primary-foreground)5%,transparent)}}.hover\\:bg-primary\\/10:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-primary\\/10:hover{background-color:color-mix(in oklab,var(--primary)10%,transparent)}}.hover\\:bg-primary\\/15:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-primary\\/15:hover{background-color:color-mix(in oklab,var(--primary)15%,transparent)}}.hover\\:bg-primary\\/20:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-primary\\/20:hover{background-color:color-mix(in oklab,var(--primary)20%,transparent)}}.hover\\:text-destructive:hover{color:var(--destructive)}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:decoration-wavy:hover{text-decoration-style:wavy}.hover\\:brightness-110:hover{--tw-brightness:brightness(110%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.hover\\:brightness-115:hover{--tw-brightness:brightness(115%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.hover\\:brightness-125:hover{--tw-brightness:brightness(125%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.not-expanded\\:hover\\:cursor-move:not(:is(:host([data-expanded=true]) *)):hover{cursor:move}}.focus\\:bg-primary:focus{background-color:var(--primary)}.focus\\:text-destructive:focus{color:var(--destructive)}.focus\\:text-primary-foreground:focus{color:var(--primary-foreground)}.focus\\:outline-2:focus{outline-style:var(--tw-outline-style);outline-width:2px}.focus\\:outline-solid:focus{--tw-outline-style:solid;outline-style:solid}.active\\:bg-primary\\/20:active{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.active\\:bg-primary\\/20:active{background-color:color-mix(in oklab,var(--primary)20%,transparent)}}.has-\\[\\>\\[role\\=button\\]\\[aria-disabled\\=true\\]\\]\\:pointer-events-none:has(>[role=button][aria-disabled=true]),.has-\\[\\>button\\:disabled\\]\\:pointer-events-none:has(>button:disabled){pointer-events:none}.data-\\[active\\=true\\]\\:bg-primary-foreground\\![data-active=true]{background-color:var(--primary-foreground)!important}.data-\\[highlight\\=true\\]\\:animate-highlight-primary[data-highlight=true]{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y);outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.data-\\[highlight\\=true\\]\\:animate-highlight-primary[data-highlight=true]{outline-color:color-mix(in oklab,var(--primary)50%,transparent)}}.data-\\[highlight\\=true\\]\\:animate-highlight-primary[data-highlight=true]{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));--tw-outline-style:solid;outline-style:solid;animation:.5s ease-out infinite alternate-reverse highlight-shadow-primary}:is(.\\*\\*\\:data-\\[highlight\\=true\\]\\:animate-highlight-primary *)[data-highlight=true]{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y);outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){:is(.\\*\\*\\:data-\\[highlight\\=true\\]\\:animate-highlight-primary *)[data-highlight=true]{outline-color:color-mix(in oklab,var(--primary)50%,transparent)}}:is(.\\*\\*\\:data-\\[highlight\\=true\\]\\:animate-highlight-primary *)[data-highlight=true]{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));--tw-outline-style:solid;outline-style:solid;animation:.5s ease-out infinite alternate-reverse highlight-shadow-primary}:is(.\\*\\*\\:data-\\[highlight\\=true\\]\\:animate-highlight-primary-foreground *)[data-highlight=true]{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y);outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--primary-foreground);transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));--tw-outline-style:solid;outline-style:solid;animation:.5s ease-out infinite alternate-reverse highlight-shadow-primary-foreground}:is(.\\*\\*\\:data-\\[slot\\=dialog-close\\]\\:hidden *)[data-slot=dialog-close],:is(.focus-within\\:\\*\\*\\:data-\\[slot\\=tooltip-content\\]\\:hidden:focus-within *)[data-slot=tooltip-content]{display:none}@media not all and (min-width:64rem){.max-lg\\:hidden{display:none}}@media not all and (min-width:40rem){.max-sm\\:inset-0{inset:calc(var(--spacing)*0)}.max-sm\\:translate-none\\!{translate:none!important}.max-sm\\:transform-none\\!{transform:none!important}.max-sm\\:rounded-none\\!{border-radius:0!important}.max-sm\\:border-none\\!{--tw-border-style:none!important;border-style:none!important}}@media(min-width:40rem){.sm\\:size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.sm\\:size-8{width:calc(var(--spacing)*8);height:calc(var(--spacing)*8)}.sm\\:h-auto{height:auto}.sm\\:w-xl{width:576px}.sm\\:rounded-xl{border-radius:calc(var(--radius) + 4px)}.sm\\:rounded-t-xl{border-top-left-radius:calc(var(--radius) + 4px);border-top-right-radius:calc(var(--radius) + 4px)}.sm\\:text-base{font-size:calc(var(--font-size)*1);line-height:var(--tw-leading,var(--text-base--line-height))}.sm\\:text-sm{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}.sm\\:\\[--player-height\\:800px\\]{--player-height:800px}@media(hover:hover){.sm\\:hover\\:cursor-move:hover{cursor:move}}}.dark\\:bg-\\[\\#0a0a0a\\]:is(:host(.dark) *){background-color:#0a0a0a}.dark\\:text-white:is(:host(.dark) *){color:var(--color-white)}.expanded\\:w-full:is(:host([data-expanded=true]) *){width:100%}.expanded\\:text-base\\!:is(:host([data-expanded=true]) *){font-size:calc(var(--font-size)*1)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}@media not all and (min-width:40rem){.expanded\\:max-sm\\:rounded-none\\!:is(:host([data-expanded=true]) *){border-radius:0!important}}@media(max-width:640px){.mobile\\:-m-2:is(:host(:not([data-expanded=true])) *){margin:calc(var(--spacing)*-2)}.mobile\\:mb-1:is(:host(:not([data-expanded=true])) *){margin-bottom:calc(var(--spacing)*1)}.mobile\\:size-4:is(:host(:not([data-expanded=true])) *){width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.mobile\\:size-4\\.5:is(:host(:not([data-expanded=true])) *){width:calc(var(--spacing)*4.5);height:calc(var(--spacing)*4.5)}.mobile\\:size-5:is(:host(:not([data-expanded=true])) *){width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.mobile\\:h-6:is(:host(:not([data-expanded=true])) *){height:calc(var(--spacing)*6)}.mobile\\:py-2:is(:host(:not([data-expanded=true])) *){padding-block:calc(var(--spacing)*2)}.mobile\\:text-sm:is(:host(:not([data-expanded=true])) *){font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}.mobile\\:text-xs:is(:host(:not([data-expanded=true])) *){font-size:calc(var(--font-size)*.75);line-height:var(--tw-leading,var(--text-xs--line-height))}}.\\[\\&_button\\]\\:z-1 button{z-index:1}.\\[\\&_button\\]\\:w-full button{width:100%}.\\[\\&_button\\]\\:rounded-full button{border-radius:3.40282e38px}.\\[\\&_button\\]\\:border-border button{border-color:var(--border)}.\\[\\&_button\\]\\:bg-background button{background-color:var(--background)}.\\[\\&_button\\]\\:bg-primary-foreground button{background-color:var(--primary-foreground)}.\\[\\&_button\\]\\:text-primary button{color:var(--primary)}.\\[\\&_button\\]\\:shadow-md button{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.\\[\\&_button\\]\\:not-hover\\:bg-transparent button:not(:hover){background-color:#0000}@media not all and (hover:hover){.\\[\\&_button\\]\\:not-hover\\:bg-transparent button{background-color:#0000}}@media(hover:hover){.\\[\\&_button\\]\\:hover\\:bg-muted button:hover{background-color:var(--muted)}}.\\[\\&_span\\]\\:rounded-full span{border-radius:3.40282e38px}.\\[\\&_span\\]\\:bg-primary-foreground\\/30 span{background-color:var(--primary-foreground)}@supports (color:color-mix(in lab,red,red)){.\\[\\&_span\\]\\:bg-primary-foreground\\/30 span{background-color:color-mix(in oklab,var(--primary-foreground)30%,transparent)}}.focus\\:\\[\\&_svg\\]\\:text-destructive:focus svg{color:var(--destructive)}.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4 svg:not([class*=size-]){width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4\\.5 svg:not([class*=size-]){width:calc(var(--spacing)*4.5);height:calc(var(--spacing)*4.5)}.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-5 svg:not([class*=size-]){width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-5\\.25 svg:not([class*=size-]){width:calc(var(--spacing)*5.25);height:calc(var(--spacing)*5.25)}.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-6 svg:not([class*=size-]){width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-6\\.5 svg:not([class*=size-]){width:calc(var(--spacing)*6.5);height:calc(var(--spacing)*6.5)}:is(.\\*\\*\\:\\[\\[role\\=button\\]\\]\\:not-hover\\:bg-transparent *)[role=button]:not(:hover){background-color:#0000}@media not all and (hover:hover){:is(.\\*\\*\\:\\[\\[role\\=button\\]\\]\\:not-hover\\:bg-transparent *)[role=button]{background-color:#0000}}}:host{--background:oklch(100% 0 0);--foreground:oklch(25% 0 0);--primary:oklch(46.02% .169 260.07);--primary-foreground:oklch(100% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--secondary:oklch(33.15% .1141 259.88);--secondary-foreground:oklch(84.71% .0543 259.88);--muted:oklch(95% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(90% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(63.7% .237 25.331);--destructive-foreground:oklch(98.5% 0 0);--success:oklch(54.834% .15401 147.965);--success-foreground:oklch(100% .00011 271.152);--border:oklch(91% 0 0);--input:oklch(91% 0 0);--ring:oklch(70.8% 0 0);--radius:10px;--spacing:4px;--font-sans:"VLibrasWidget_Font",sans-serif;--font-size:16px}:host(.dark){--background:oklch(15% 0 0);--foreground:oklch(98.5% 0 0);--primary:oklch(55.5% .169 260.07);--primary-foreground:oklch(100% 0 0);--popover:oklch(20% 0 0);--popover-foreground:oklch(98.5% 0 0);--secondary:oklch(33.15% .1141 259.88);--secondary-foreground:oklch(84.71% .0543 259.88);--muted:oklch(18% 0 0);--muted-foreground:oklch(70.8% 0 0);--accent:oklch(26.9% 0 0);--accent-foreground:oklch(98.5% 0 0);--destructive:oklch(63.7% .237 25.331);--destructive-foreground:oklch(98.5% 0 0);--border:oklch(26.9% 0 0);--input:oklch(26.9% 0 0);--ring:oklch(43.9% 0 0)}:host{--widget-width:260px;--player-height:328px}@media(min-width:640px){:host{--widget-width:320px;--player-height:400px}}@keyframes scale{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes move-left{0%{opacity:0;transform:translate(-20%)}to{opacity:1;transform:translate(0)}}@keyframes move-right{0%{opacity:0;transform:translate(20%)}to{opacity:1;transform:translate(0)}}@keyframes move-up{0%{opacity:0;transform:translateY(20%)}to{opacity:1;transform:translateY(0)}}@keyframes move-down{0%{opacity:0;transform:translateY(-20%)}to{opacity:1;transform:translateY(0)}}@keyframes highlight-shadow-primary{0%{box-shadow:0 0 #0000}to{box-shadow:0 0 10px 5px var(--primary)}}@keyframes highlight-shadow-primary-foreground{0%{box-shadow:0 0 #0000}to{box-shadow:0 0 15px var(--primary-foreground)}}:host{font-family:var(--font-sans)!important;scrollbar-color:var(--foreground)transparent!important}@supports (color:color-mix(in lab,red,red)){:host{scrollbar-color:color-mix(in oklch,var(--foreground)50%,transparent)transparent!important}}:host [data-highlight=true]{z-index:99999!important;border-radius:3.40282e38px!important}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes dropdown{0%{opacity:0}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@keyframes rotator{89.9999%,to{--first-item-position:0 0%}90%,99.9999%{--first-item-position:0 calc(var(--items)*100%)}to{translate:0 -100%}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes menu{0%{opacity:0}}@keyframes progress{50%{background-position-x:-115%}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-content{syntax:"*";inherits:false;initial-value:""}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}`, v9 = {
  event: null,
  isActive: !1,
  onClick: void 0,
  type: "button",
  element: null,
  listener: null,
  render: void 0
}, Ri = et()(() => ({
  ...v9
})), Pi = {
  get: Ri.getState,
  set: Ri.setState,
  subscribe: Ri.subscribe
}, m9 = ({
  event: t,
  tooltip: e
}) => {
  const r = e?.getBoundingClientRect() || { width: 0, height: 0 };
  let i = t.pageX, n = t.pageY - 36, o = "bottom";
  return i < 34 && (i = 34, o = "left"), i + r.width > window.innerWidth && (i = window.innerWidth - r.width + 12, o = "right"), t.clientY < 46 ? (n = t.pageY + r.height * 2, o = o === "right" ? "top-right" : "top-left") : o = o === "right" ? "bottom-right" : "bottom-left", { x: i, y: n, arrow: o };
}, b9 = () => {
  const t = Ae(null), { type: e, event: r, onClick: i, isActive: n, render: o } = Ri(), [s, a] = le({ x: 0, y: 0, arrow: "bottom" });
  return F(() => {
    const l = (u) => {
      t.current && !t.current.contains(u.target) && Pi.set({ isActive: !1 });
    };
    return n ? document.addEventListener("click", l) : document.removeEventListener("click", l), () => {
      document.removeEventListener("click", l);
    };
  }, [n]), F(() => {
    if (r && t.current) {
      a(m9({ event: r, tooltip: t.current }));
      const l = t.current;
      l && (l.classList.remove("animate-scale"), l.offsetWidth, l.classList.add("animate-scale"));
    }
  }, [r]), /* @__PURE__ */ c(
    Y,
    {
      ref: t,
      onClick: i,
      style: { left: s.x, top: s.y },
      className: B(
        "group absolute z-2147483647 h-9 -translate-x-6 -translate-y-full animate-scale rounded-lg px-3 text-primary-foreground shadow-lg",
        !n && "hidden"
      ),
      children: [
        o || /* @__PURE__ */ c(ge, { children: [
          e === "button" && /* @__PURE__ */ c(cd, { size: 20, iconTitle: "Interagir" }),
          e === "link" && /* @__PURE__ */ c(rd, { size: 20, iconTitle: "Acessar link" }),
          /* @__PURE__ */ c("span", { className: "relative bottom-0.5 whitespace-nowrap font-medium text-sm", children: e === "button" ? "Interagir" : "Acessar link" })
        ] }),
        /* @__PURE__ */ c("span", { className: "absolute inset-0 -z-1 rounded-lg bg-primary group-hover:brightness-85" }),
        /* @__PURE__ */ c(
          "span",
          {
            className: B(
              "absolute -z-2 size-4 -translate-x-1/2 rotate-45 bg-primary brightness-85",
              ["bottom", "bottom-left", "bottom-right"].includes(s.arrow) ? "-bottom-1.5" : "-top-1.5",
              ["bottom-left", "top-left", "bottom", "top"].includes(s.arrow) ? "left-5" : "right-2"
            )
          }
        )
      ]
    }
  );
}, C9 = ({ children: t, root: e }) => {
  const { theme: r } = u2();
  return F(() => {
    const i = e || document.documentElement;
    (i instanceof ShadowRoot ? i.host : i).classList.toggle("dark", r === "dark");
  }, [r, e]), t;
}, w9 = () => {
  const t = Ae(null), e = ce((r) => r.isOpen);
  return F(() => {
    const r = qt("#vlibras-access-wrapper")?.shadowRoot, i = r ? qt("#vlibras-access", r) : null;
    i && (t.current = i);
  }, []), F(() => {
    t.current && (t.current.style.display = e ? "none" : "flex");
  }, [e]), null;
}, _9 = () => {
  const { playWelcome: t, setSpeed: e, setConfig: r, toggleSubtitles: i, toggleAvatar: n } = Pe(), { isLoaded: o, speed: s, showSubtitles: a, isWelcomeFinished: l, avatar: u } = ne(
    Je("isLoaded", "speed", "showSubtitles", "isWelcomeFinished", "avatar")
  );
  F(() => {
    o && (r({ baseUrl: yr.DICTIONARY_URL }), n(u), e(s), t());
  }, [o]), F(() => {
    l && i(a);
  }, [l]);
}, y9 = () => {
  const t = ne((r) => r.status), e = ce((r) => r.isTranslating);
  F(() => {
    const { root: r } = Bt.get();
    r && (r.dataset.status = t);
  }, [t]), F(() => {
    const r = document.documentElement;
    e ? r.dataset.vlibrasStatus = "translating" : delete r.dataset.vlibrasStatus;
  }, [e]);
}, x9 = () => {
  const { pause: t } = Pe(), e = nt((i) => i.screen), r = ne((i) => i.status);
  F(() => {
    const { status: i } = X.get();
    e !== "main" && i === "playing" && t();
  }, [e, t]), F(() => {
    if (!(r === "playing")) return;
    const { isPausedByUser: n } = ze.get(), { open: o, screen: s } = D0.get();
    n && ze.set({ isPausedByUser: !1 }), s !== "main" && o("main");
  }, [r]);
}, k9 = "html body *:not(.vlibras-ignore,.sr-only,.sr-only *,#vlibras-app-root *,#vlibras-app-wrapper *) .vlibras--hover{text-decoration:underline!important;cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABuhJREFUeAHNWUtsVFUY/s+dtjNNSiCaFDCRzIJhJUqJDSUpdYjdQBeikJK4KuCGRKVLsCA0WFhK1ciKtiTGRGIFF+iGhgJdTAKRonHTknhDDK+NJZK003LP8XznzpnO45w793am0i+Z3Jm5j/M/vv91Ltt2Zq6XETtCEkLQGka0hkxg5KqjYP6RhEuCXMHEDOPinud4M7f7mibpfwZrG5i/LoVJU40gjTHJoRyJcSiWOdE4TssI1nYm+5e0ZJKWFWxcEL/C6cWNWnuJbRvI/mOlzfLAZYJdEQveYKa/0aUqISmUFfTSwMaJ00jmRMNFWiJesgJ5uMTZqaUoslIU0HA9Wng/Spw4tLKQjFH9XWnU4fRJESouV5oCGj1zDfN3207OJitdWHMKrYoz2vUmo1QzPkTrZWlsivvnnmeJHs0IevSM6Na0oLsP8N2+vDwjiyTrDYqNmtWBlg2MDrU76hgFN6cEXbrDlTIB6M/0xU+ZTlStwPrVjPq6ogteCijy1Ri3e4SzHpMnqlKgu9VRVtcUqRbP54guTHDlERNkhmopzVDOYnMWDRD8yLu1Ex5oShAd6XToYLs5t8gMdbk0Ozmqq4wICG9bZPqJoL3nX6iA1fjtQbQ8EfD85Gx84WThHw5jbIYiALQpffj000UBYcXHz3xOA1NSoU++9yoFaRmgRPfb5UowIXrbTs+m9W+HC+5SSCBgDxksc2x0kbdIo4BWCsoAUCwqsBbWLIMTy3vBYSSeUUh82mnm/K7NTAUfaKMF1dlEW34psYJnfdZlopJIay84DsVC9R1Ikx2pYmv8m6uB+6WrkUEu3fa9AKvdf+Jfoz1htGQIbJXrmlI0Y7H3cHQa5uvdEM+h/a3lltj3rUe//MGVpbDID3d4Pni1BxDU1cIU0JyJHhyd8X4ZxHretQDW25EqtwICeuAqV1bGIjqPa7rAI4W0WirghVIKYggDjZRqTFAgjWxVFkGGnufoqCeV9K+D0Jo2g2PFga2BtHr0J48+ltnpi6teUcq1Yffmci8Ih71Vhy8cAzixPbabOzbZ+Ys2omfYF6YU8NyWDURdcnHEy6XbIu+VQtx/6tHZD5zAOEmtNZ5LKwWwe4B8ZMO61RT4YNBnaIIXCT5yMKbcDmsri49yq6URJzACKru+v9TrG5vL75NG36IUSLxITMr+m2yolEGQhQotu0N6TBewsED8DE0IlZKhOJJA4bqvGWSQRF2jVFaBjAHbgko5HEG6o4BmN6e4ionRw3X09Yex/CfIk/o5eYWy9nMaTCugIMQ4VYFNzYsKoPruO+/RuTE/zaKYbQ3RbkNBUBL3p5rD1Y26/DfBbxAzN2gqFVbwwkZDkN3K9UOH2pnqjR5XqPkdKaesWOZlmDPfk5cYW4AY4UwXBY19GqZcDYDHCPLBseB4wHW7N9ut/tAsg1tkclkPzpmumn5CFYHc311SrZH/v5HcR3GrZP1KE53xfiHcuuI/zDTyC5N9AQgIL33UHlML6QYOlp96yvMpFsUIMWFCkPWBm9Pl9zFyJouk9XeSy7ORbVENUAfFCr3QQcn3Hw/H1KdFFrHBa/69/tzsX6/TI446WCu1G6Z5AgXY0CV5/aV/IYCCBhI0eihGXW84tCqxaElUZ3gEwsP6F3KeAK0A0EZbPihJ2BIAW+D3yhRQXjA0dxcmgr0A/m9cuyiI5r0WHl7Eb3wX5BsjtRap01cgqB8yDvky7WN325w3BS/zAjwQZSyEImf3xvJNGBTSE92jnDVBn0rFDdY3riucERyMCmT6GkdMsRC2cwRAK53T0QvB+t2tvsA6p6Norcpx30QhNICW9OvqPSL73qghFiBEJSqZgIIG6+shHVkNQQuhtVdM/dbQLUvxk1vx+muMLPj7+oD7eufn2INpK/z/z4dCJdQoO3HJV5mqsq80+b/vy4BHsOs23fQsGOq7jNFYbuZ4/ID+UUcBiGfr++fi83tKd+60F2x7Q6VQPC/gendr8H14/pDN0/N8Z+HPwCf54ybfaWoxsAgmrrAxEQaK89cChBd0qvS9WigebD+d3SMcumw6B+v2dsaMM3MUINAHrnoBLQcbyfQ1HCj7l0KibWC2Rzps2HYePO5utXeTNkBwWDwwRSPnH0/sNJ2KtBqUEOR8GfRadl1uuO/Y5KihBr/1UA+KwMJoDtEj/fq7CEFBs+WXpIBS4qx87SOc68v/cpx8zh+P9wddEvkdWeZYo5vINrTAMrR8cBlz0pWEB6qKPOUNjw3Lfb401QDqnZicScIIrlFd6shBKcLljjET6SVRSwapYHSlcT5+0d9gCI+aKFCI7WcW3hGcp6VAWyQ/kzKjJ0uC3sUkhWFEpubJRLb+56hCF+I/Ig4jzjnhUQQAAAAASUVORK5CYII=),pointer!important}html body *:not(.vlibras-ignore,.sr-only,.sr-only *,#vlibras-app-root *,#vlibras-app-wrapper *) .vlibras--hover[src],html body *:not(.vlibras-ignore,.sr-only,.sr-only *,#vlibras-app-root *,#vlibras-app-wrapper *) .vlibras--hover img{text-decoration:none!important;cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA0CAYAAADMk7uRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAB2BJREFUeAHNWktMVFcY/s8dYDCRygq0C4OJw6paMaXSBCxNbRNF01YNJF2BdGNf0nSjIlFi0VVTaRtdoTRpmmiKJWnowpQUgUQSjWBdFUwcWdTHphhMGAbuOT3fuZxhHuc+ZhjUL5ncO3PPved/fv9/zh2240ysjRE7QhJCUCkjKiUTGEXVUTDnSCJKgqKCiRnGxR3bsmdutq+doOcMVtMV/0sKU095gjTGBIdyJIag2FjHmiFaRbCaM/P3pSUraFXBhgTxfk6L1/PtJbaja/4/17BZHUSZYP1iwe4e61wTpRVChtC8oBcGNkScesc6in6iHPGCFUggSpydykWRl0UBjahNCx9lkycWvVyoCFHhuDTqpfqTIlBevmwKaDTHiuLjNSfnKvwG5j2ESsKMdm9lFCnDh2iDLI1rw861Z/NED2cEPXxKNDIlaHwa5+7TyyuySLI2r9zIWx2o2siotdZSx2wwPCnoyi2ulPFA51h7+JTpwooV2LCOUXtD9oKnA4p8P8jdPcJZs8kTK1KgsdpSVtchslI8ixH1jHLlERMkQ1WlM5S13JxlBwh+5N38CQ+sLSY6ssuiQ7VmbpEM9Vs6O1mqq8wSEN5tkqnHgg5cWFQJq3F7Ojue8Hh+xVx44WTyDxZjbIayAMIm/eFTT5YFhBUfPXViGpiUCn3xi+2XpBmAEo1vZCrBhGirOT1Xr79bXPAoBQQSttVgmWN9y3ELGgW0UlAGgGLZAnNhzgxYoYQXLEbiKQXEl7vMMb97C1PJh7DRgmo20ZbPJVfwrOMNplAS9doLlkWhQH0HaHJnJNUas0s1sEm6Ggxy5abjBVjt3mNnjPaE0ZIBsF3Oa6JoxkIf4GgVxQujAZ5DTdWZljh43qY/7nJlKUxy+RZPJK/2AJJ6pTAlNGeiGUdrqFMmsV7vugDWq4tkWgEJ3TXAlZUxieZxHS7wSHJY5Qp4IT0EsQhDGCnVmCDPMHKrskgy9DxH+2yppDMOQuuw6R5MTWwN0OrRqzZ9LtnpmwE7hXLdsGdLpheExV4vwAnHApzYh24376x0j1+0Ec2XHGHSAc9t20jUICdHvly5KRJeSca9Jzad3W955kmk3HitXimA3QPwkRvWryPPByN8Lo7yFMF7D4WU22FtZfE+7mpp5AmMgMqu70/3+uayzPuk0bcpBYoXiydk/01u8GMQsFCyZeukx3QBCwrkz8VRoSgZioMEkud91SCDDNRSpbJKZCywXeDH4UjSuqQwG57kKif6DhfQDx+HEh8vT+rnJBSad7+mwbQCCkIM0QpQWbasAKrvwQs2nRt0aBbFbHuAdhsKIiRxf6QsWN0oSJwJfp2YuUFTVOjjhc2GJBtZ6odaa5nqjR751PydESujWCZkiJnvSUiMLUAs4UyDvJZ9GiauBhDHSPLuQe98wLg9W9yt/q9ZhmiKyWU9OGcaNfWYfAHub0yr1uD/H2Xso7j5Wd9vRWe8X4hoQeoP5jByCpP7BBAQXvqkNqQm0g0cLD/5hCcoFsUIOWGCl/WB4anM+xhZEynSOjvJmWzkNqkGQgfFCr3QIRnvvx4OqU+VLGLdfzr3OutmZ7ymRxx1svq1G6b1BAqwoUuyO9N/QgJ5LUjQ6KEYNbxmUUnxsiVRneERCA/r9yx5AmEFIGy05b1Iwo0A2AK/k6GA8oKhuesZ9fYC4n9z+bIgOu618PAivuNckGOMSDmo01HAqx8yLvIl7WN328ybgmd4AR7IZlkIRc4eCCWaMCikV3QPl6yJ8PErbrC+cV5h9eJgVGCsfU2vKReCdo4AwkpzOnohWL+x2hFYczqKVslS7JtCCA2gC/1G9R6R+96oIRcghF8omYCCBuvrRTpYDUkLobVXTP3WxRGX4ie34vWpJ3e9dSb+nZC7AOm/Y0I0XWoxI5M3qFeCAn3VhleY2wZXVG4zbtJfPBXAJlIsHB837dzBevkWPBDifFPyqynfjqnm7FyF4Na46T1aw1a5O/deKGPFtRKgIPYM2zRgqj2CTo2dCKeEtu/7gbFjkqo4tZiutdblV3gAuQCjZIL1pgsPFFAA3OgI99d0zUklrEvpk6Xj/W/jkj2I2qQQTdWOIDKX1NirnxWq75/+vGCkxhvHi9QxuRgqgPNPhI1GDPyGxqFW3uLWsQK3H3AlPDD8j3vNeLtSFjcZfiVL1IlzfMyA5YvfcXtWIA9oQAmZE/LVqHXfdH3gbydusQmAVRl43BRiTW86ntn/YEGN6dhb4DFnUQt5IOt3ZMgJt2vj05wqy2UBq3QE9PJCvpC3l3wIH7QIszEuBXc8cXs6+6KXLbIKIS8gZIDIemcDGPE9shRGwDN5PP37YmJ8x778TJ13BU7sdaj1XHiRLmOX7pFzfTaWuq7o2Ed5QU4krv8gcu3rwrzXAQCvYvefX1Dnsm3wnCCnHMB/gnDsvmaryfKJ2ZisxCNOByrXDf1+43MLIctuQXshy33pwN3VSVT1kjsuvvIbl5MHQKXM4lVyEl8LZQtVKGXlZXFeFeT/RP8DlfZa3rLKpU0AAAAASUVORK5CYII=),pointer!important}html body *:not(.vlibras-ignore,.sr-only,.sr-only *,#vlibras-app-root *,#vlibras-app-wrapper *) .vlibras--active{text-decoration:underline!important}", A9 = Array.from([document.body, ...document.body.children]), E9 = qt("#vlibras-app-root"), S9 = (t) => ot(t, ["IMG"]) ? t.alt : T2(t) ? t.value : t.dataset.vlibrasGloss ? t.dataset.vlibrasGloss : t.dataset.vlibrasText ? t.dataset.vlibrasText : ot(t, ["SELECT"]) ? qt(`[value="${t.value}"]`, t)?.innerText : t.innerText.trim() || "", ml = (t) => {
  let e = t;
  for (; e && !A9.includes(e); ) {
    if (R9(e) || e.onclick && !I9(e)) return e;
    e = e.parentNode;
  }
  return null;
}, eo = (t) => E9?.contains(t) || t.matches(".vlibras-links") ? !1 : L9(t) || ml(t) || T2(t) || P9(t) || M9(t), ot = (t, e) => e.includes(t.tagName), R9 = (t) => ot(t, ["A", "BUTTON"]), T2 = (t) => ot(t, "INPUT") && t.type === "submit", P9 = (t) => ot(t, "IMG") && t.alt && t.alt.trim(), M9 = (t) => ot(t, "SELECT"), I9 = (t) => ot(t, ["SVG", "PATH"]), L9 = (t) => {
  const e = (r) => r.nodeType === Node.TEXT_NODE && r?.textContent?.trim();
  return Array.from(t.childNodes).some((r) => e(r));
}, N9 = (t) => {
  if (!t.parentElement) return;
  const e = qt("input", t.parentElement);
  e && ["radio", "checkbox"].includes(e.type) && (e.checked = !e.checked);
}, O9 = (t, e) => {
  let r = null, i = 0;
  if (document.caretPositionFromPoint) {
    const p = document.caretPositionFromPoint(t, e);
    if (!p || !p.offsetNode) return null;
    r = p.offsetNode, i = p.offset;
  } else if (document.caretRangeFromPoint) {
    const p = document.caretRangeFromPoint(t, e);
    if (!p || !p.startContainer) return null;
    r = p.startContainer, i = p.startOffset;
  }
  if (!r || r.nodeType !== Node.TEXT_NODE) return null;
  const n = r.textContent ?? "";
  if (!n.trim()) return null;
  const o = n.slice(0, i), s = n.slice(i), a = o.match(/[\wÀ-ú’-]+$/), l = s.match(/^[\wÀ-ú’-]+/), u = `${a?.[0] ?? ""}${l?.[0] ?? ""}`;
  if (!u) return null;
  const d = i - (a?.[0]?.length ?? 0);
  return { word: u, node: r, offset: d };
}, H9 = (t) => {
  pn(`span.${t}`)?.forEach((e) => {
    const r = e.parentNode;
    if (!r) return;
    const i = document.createTextNode(e.textContent || "");
    r.replaceChild(i, e), r.normalize();
  });
}, T9 = (t) => {
  pn(`.${t}`)?.forEach((e) => e.classList.remove(t));
}, F9 = ({ callback: t, isWordByWord: e, hoverClss: r, activeClass: i }) => {
  const n = (d) => {
    const p = d.target;
    (!(eo(p) && e) || !ot(p, "IMG")) && p.classList.add(r);
  }, o = (d) => {
    !e || !r || s2(() => {
      const p = d.target;
      if (!eo(p)) return;
      H9(r);
      const { word: h, node: f, offset: v } = O9(d.clientX, d.clientY) || {};
      if (h && f && typeof v == "number") {
        const g = document.createRange();
        g.setStart(f, v), g.setEnd(f, v + h.length);
        const m = document.createElement("span");
        m.className = r, m.textContent = h, g.deleteContents(), g.insertNode(m);
      }
    });
  }, s = (d) => {
    const p = d.target, f = window.getSelection()?.toString().trim();
    if (Pi.set({ isActive: !1 }), T9(i), f || p.classList.add(i), !eo(p)) return;
    if (f && !e) return t?.({ text: f, element: p });
    if (d.preventDefault(), d.stopPropagation(), e && r) {
      const g = qt(`.${r}`), m = g?.textContent?.trim();
      m && g && t?.({ text: m, element: g });
    } else {
      const g = !!p.dataset.vlibrasGloss?.trim(), m = S9(p)?.trim();
      m && t?.({ text: m, element: p, isGloss: g });
    }
    const v = p.tagName === "A" ? p : ml(p);
    v && l(v, d), ot(p, "LABEL") ? N9(p) : (ot(p, "BUTTON") || T2(p)) && l(p, d);
  }, a = (d) => {
    d.target.classList.remove(r);
  }, l = (d, p) => {
    Pi.set({
      isActive: !0,
      event: p,
      type: d.tagName.toLowerCase() === "a" ? "link" : "button",
      onClick: () => {
        d.dispatchEvent(new MouseEvent("click", { bubbles: !0 })), Pi.set({ isActive: !1 });
      }
    });
  }, u = () => {
    document.body.removeEventListener("mousemove", o), document.body.removeEventListener("mouseover", n), document.body.removeEventListener("mouseout", a), document.body.removeEventListener("click", s, !0);
  };
  return e ? document.body.addEventListener("mousemove", o) : (document.body.addEventListener("mouseover", n), document.body.addEventListener("mouseout", a)), document.body.addEventListener("click", s, !0), u;
}, V9 = () => {
  const t = ne((o) => o.isLoaded), e = ce((o) => o.isOpen), { mutateAsync: r } = C2(), { play: i, stop: n } = Pe();
  F(() => {
    t && (e ? w0(k9, "@text-capture.style") : wc("@text-capture.style"));
  }, [e, t]), F(() => {
    if (!t) return;
    const o = F9({
      hoverClss: "vlibras--hover",
      activeClass: "vlibras--active",
      callback: async ({ text: s, isGloss: a }) => {
        if (n(), a) return i(s);
        const l = await r(s);
        pl(), i(l);
      }
    });
    return e || o?.(), () => o?.();
  }, [t, e]);
}, z9 = () => {
  const t = ne((o) => o.isLoaded), e = Pe(), { mutateAsync: r } = C2(), i = async (o) => {
    const s = await r(o);
    e.play(s);
  }, n = async (o) => await r(o);
  F(() => {
    if (typeof window > "u" || !t) return;
    window.plugin = window.plugin || {};
    const o = {
      ...yn(X.get(), "send"),
      ...yn(ze.get(), "reset", "setLoaded"),
      ...yn(e, "setConfig")
    };
    window.vlibras = {
      ...o,
      translate: n,
      translateAndPlay: i
    }, window.plugin.translate = i, window.plugin.player = {
      ...o,
      changeAvatar: e.toggleAvatar
    };
  }, [t]);
}, D9 = () => (V9(), _9(), x9(), y9(), w9(), z9(), null), U9 = ({ children: t, root: e }) => (F(() => {
  e && E4(e, [Wa]);
}, [e]), /* @__PURE__ */ c(C9, { root: e, children: [
  /* @__PURE__ */ c("style", { children: Wa }),
  /* @__PURE__ */ c(Gd, { client: f9, children: [
    /* @__PURE__ */ c(b9, {}),
    /* @__PURE__ */ c(D9, {}),
    t
  ] })
] })), { root: to, shadowRoot: qr, isRootActive: Ga } = Cc();
function j9() {
  const { setOpen: t, isLoaded: e, setLoaded: r } = ce(Je("setOpen", "isLoaded", "setLoaded")), { path: i } = d2();
  return F(() => Bt.set({ root: to, shadowRoot: qr }), [to, qr]), F(() => N2.trackLoad(), []), F(() => {
    if (!i || ((async () => (await _c(i, qr), r(!0)))(), !e)) return;
    t(Ga());
    const n = new MutationObserver(() => t(Ga()));
    return n.observe(to, {
      attributes: !0,
      attributeFilter: ["data-active"]
    }), () => n.disconnect();
  }, [i, t, e, r]), e ? /* @__PURE__ */ c(U9, { root: qr, children: /* @__PURE__ */ c(g9, {}) }) : null;
}
lr(/* @__PURE__ */ c(j9, {}), qr);
