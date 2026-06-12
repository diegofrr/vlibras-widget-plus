var O, Pn, Le, So, Ft, In, Nn, Jr, _r, Sr, Tn, jt = {}, On = [], Xa = /(mi|mn|mo|ms$|mte|msp)/, vt = Array.isArray, qt = On.slice, _e = Object.assign;
function Kr(e) {
  e && e.parentNode && e.remove();
}
function Ee(e, t, r) {
  var o, n, a, s = {};
  for (a in t) a == "key" ? o = t[a] : a == "ref" && typeof e != "function" ? n = t[a] : s[a] = t[a];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? qt.call(arguments, 2) : r), ht(e, s, o, n, null);
}
function ht(e, t, r, o, n) {
  var a = { type: e, props: t, key: r, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: n ?? ++Pn, __i: -1, __u: 0 };
  return n == null && O.vnode != null && O.vnode(a), a;
}
function qa() {
  return { current: null };
}
function F(e) {
  return e.children;
}
function Se(e, t) {
  this.props = e, this.context = t, this.__g = 0;
}
function Ye(e, t) {
  if (t == null) return e.__ ? Ye(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? Ye(e) : null;
}
function Un(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = t.__e;
  }), Un(e);
}
function Cr(e) {
  (8 & e.__g || !(e.__g |= 8) || !Le.push(e) || Ft++) && So == O.debounceRendering || ((So = O.debounceRendering) || queueMicrotask)(Ya);
}
function Ya() {
  for (var e, t, r, o, n, a, s, l, c = 1; Le.length; ) Le.length > c && Le.sort(In), e = Le.shift(), c = Le.length, 8 & e.__g && (r = void 0, o = void 0, n = (o = (t = e).__v).__e, a = [], s = [], (l = t.__P) && ((r = _e({}, o)).__v = o.__v + 1, O.vnode && O.vnode(r), Xr(l, r, o, t.__n, l.namespaceURI, 32 & o.__u ? [n] : null, a, n ?? Ye(o), !!(32 & o.__u), s, l.ownerDocument), r.__v = o.__v, r.__.__k[r.__i] = r, zn(a, r, s), o.__ = o.__e = null, r.__e != n && Un(r)));
  Ft = 0;
}
function Bn(e, t, r, o, n, a, s, l, c, u, p, h) {
  var d, b, m, g, f, A, w, y = o && o.__k || On, v = t.length;
  for (c = Za(r, t, y, c, v), d = 0; d < v; d++) (m = r.__k[d]) != null && (b = m.__i != -1 && y[m.__i] || jt, m.__i = d, A = Xr(e, m, b, n, a, s, l, c, u, p, h), g = m.__e, m.ref && b.ref != m.ref && (b.ref && qr(b.ref, null, m), p.push(m.ref, m.__c || g, m)), f == null && g != null && (f = g), (w = 4 & m.__u) || b.__k === m.__k ? c = Qn(m, c, e, w) : typeof m.type == "function" && A !== void 0 ? c = A : g && (c = g.nextSibling), m.__u &= -7);
  return r.__e = f, c;
}
function Za(e, t, r, o, n) {
  var a, s, l, c, u, p = r.length, h = p, d = 0;
  for (e.__k = new Array(n), a = 0; a < n; a++) (s = t[a]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = e.__k[a] = ht(null, s, null, null, null) : vt(s) ? s = e.__k[a] = ht(F, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = e.__k[a] = ht(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : e.__k[a] = s, c = a + d, s.__ = e, s.__b = e.__b + 1, l = null, (u = s.__i = $a(s, r, c, h)) != -1 && (h--, (l = r[u]) && (l.__u |= 2)), l == null || l.__v == null ? (u == -1 && (n > p ? d-- : n < p && d++), typeof s.type != "function" && (s.__u |= 4)) : u != c && (u == c - 1 ? d-- : u == c + 1 ? d++ : (u > c ? d-- : d++, s.__u |= 4))) : e.__k[a] = null;
  if (h) for (a = 0; a < p; a++) (l = r[a]) != null && (2 & l.__u) == 0 && (l.__e == o && (o = Ye(l)), Ln(l, l));
  return o;
}
function Qn(e, t, r, o) {
  var n, a;
  if (typeof e.type == "function") {
    for (n = e.__k, a = 0; n && a < n.length; a++) n[a] && (n[a].__ = e, t = Qn(n[a], t, r, o));
    return t;
  }
  e.__e != t && (o && (t && e.type && !t.parentNode && (t = Ye(e)), r.insertBefore(e.__e, t || null)), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Ne(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (vt(e) ? e.some(function(r) {
    Ne(r, t);
  }) : t.push(e)), t;
}
function $a(e, t, r, o) {
  var n, a, s, l = e.key, c = e.type, u = t[r], p = u != null && (2 & u.__u) == 0;
  if (u === null && l == null || p && l == u.key && c == u.type) return r;
  if (o > (p ? 1 : 0)) {
    for (n = r - 1, a = r + 1; n >= 0 || a < t.length; ) if ((u = t[s = n >= 0 ? n-- : a++]) != null && (2 & u.__u) == 0 && l == u.key && c == u.type) return s;
  }
  return -1;
}
function Co(e, t, r) {
  t[0] == "-" ? e.setProperty(t, r ?? "") : e[t] = r ?? "";
}
function Pt(e, t, r, o, n) {
  var a;
  e: if (t == "style") if (typeof r == "string") e.style.cssText = r;
  else {
    if (typeof o == "string" && (e.style.cssText = o = ""), o) for (t in o) r && t in r || Co(e.style, t, "");
    if (r) for (t in r) o && r[t] == o[t] || Co(e.style, t, r[t]);
  }
  else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(Nn, "$1")), t = t.slice(2).toLowerCase(), e.__l || (e.__l = {}), e.__l[t + a] = r, r ? o ? r.l = o.l : (r.l = Jr, e.addEventListener(t, a ? Sr : _r, a)) : e.removeEventListener(t, a ? Sr : _r, a);
  else {
    if (n == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && r == 1 ? "" : r));
  }
}
function Eo(e) {
  return function(t) {
    if (this.__l) {
      var r = this.__l[t.type + e];
      if (t.u == null) t.u = Jr++;
      else if (t.u < r.l) return;
      return r(O.event ? O.event(t) : t);
    }
  };
}
function Xr(e, t, r, o, n, a, s, l, c, u, p) {
  var h, d, b, m, g, f, A, w, y, v, S, N, U, x, L, te, oe, K, de, re = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && (c = 32 & r.__u) && r.__c.__z && (l = (a = r.__c.__z)[0], r.__c.__z = null), (h = O.__b) && h(t);
  e: if (typeof re == "function") try {
    if (f = t.props, A = "prototype" in re && re.prototype.render, w = (h = re.contextType) && o[h.__c], y = h ? w ? w.props.value : h.__ : o, r.__c ? 2 & (d = t.__c = r.__c).__g && (d.__g |= 1) : (A ? t.__c = d = new re(f, y) : (t.__c = d = new Se(f, y), d.constructor = re, d.render = ti), w && w.sub(d), d.state || (d.state = {}), d.__n = o, d.__g |= 8, d.__h = [], d._sb = []), A && d.__s == null && (d.__s = d.state), A && re.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = _e({}, d.__s)), _e(d.__s, re.getDerivedStateFromProps(f, d.__s))), b = d.props, m = d.state, d.__v = t, r.__c) {
      if (A && re.getDerivedStateFromProps == null && f !== b && d.componentWillReceiveProps != null && d.componentWillReceiveProps(f, y), t.__v == r.__v || !(4 & d.__g) && d.shouldComponentUpdate != null && d.shouldComponentUpdate(f, d.__s, y) === !1) {
        t.__v != r.__v && (d.props = f, d.state = d.__s, d.__g &= -9), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(ne) {
          ne && (ne.__ = t);
        }), (v = d.__h).push.apply(v, d._sb), d._sb = [], d.__h.length && s.push(d);
        break e;
      }
      d.componentWillUpdate != null && d.componentWillUpdate(f, d.__s, y), A && d.componentDidUpdate != null && d.__h.push(function() {
        d.componentDidUpdate(b, m, g);
      });
    } else A && re.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), A && d.componentDidMount != null && d.__h.push(d.componentDidMount);
    if (d.context = y, d.props = f, d.__P = e, d.__g &= -5, S = O.__r, N = 0, A) d.state = d.__s, d.__g &= -9, S && S(t), h = d.render(d.props, d.state, d.context), (U = d.__h).push.apply(U, d._sb), d._sb = [];
    else do
      d.__g &= -9, S && S(t), h = d.render(d.props, d.state, d.context), d.state = d.__s;
    while (8 & d.__g && ++N < 25);
    d.state = d.__s, d.getChildContext != null && (o = _e({}, o, d.getChildContext())), A && r.__c && d.getSnapshotBeforeUpdate != null && (g = d.getSnapshotBeforeUpdate(b, m)), x = h != null && h.type === F && h.key == null ? Dn(h.props.children) : h, l = Bn(e, vt(x) ? x : [x], t, r, o, n, a, s, l, c, u, p), t.__u &= -161, d.__h.length && s.push(d), 2 & d.__g && (d.__g &= -4);
  } catch (ne) {
    if (t.__v = null, c || a != null) if (ne.then) {
      for (L = 0, t.__u |= c ? 160 : 128, t.__c.__z = [], oe = 0; oe < a.length; oe++) (K = a[oe]) == null || te || (K.nodeType == 8 ? (K.data == "$s" ? (L && t.__c.__z.push(K), L++) : K.data == "/$s" && (--L && t.__c.__z.push(K), te = L == 0, l = a[oe]), a[oe] = null) : L && (t.__c.__z.push(K), a[oe] = null));
      if (!te) {
        for (; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
        a[a.indexOf(l)] = null, t.__c.__z = [l];
      }
      t.__e = l;
    } else {
      for (de = a.length; de--; ) Kr(a[de]);
      Er(t);
    }
    else t.__e = r.__e, t.__k = r.__k, ne.then || Er(t);
    O.__e(ne, t, r);
  }
  else l = t.__e = ei(r.__e, t, r, o, n, a, s, c, u, p);
  return (h = O.diffed) && h(t), 128 & t.__u ? void 0 : l;
}
function Er(e) {
  e && e.__c && (e.__c.__g |= 4), e && e.__k && e.__k.forEach(Er);
}
function zn(e, t, r) {
  for (var o = 0; o < r.length; o++) qr(r[o], r[++o], r[++o]);
  O.__c && O.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(a) {
        a.call(n);
      });
    } catch (a) {
      O.__e(a, n.__v);
    }
  });
}
function Dn(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : vt(e) ? e.map(Dn) : _e({}, e);
}
function ei(e, t, r, o, n, a, s, l, c, u) {
  var p, h, d, b, m, g, f, A, w = r.props || jt, y = t.props, v = t.type;
  if (v == "svg" ? n = "http://www.w3.org/2000/svg" : v == "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), a != null) {
    for (p = 0; p < a.length; p++) if ((m = a[p]) && "setAttribute" in m == !!v && (v ? m.localName == v : m.nodeType == 3)) {
      e = m, a[p] = null;
      break;
    }
  }
  if (e == null) {
    if (v == null) return u.createTextNode(y);
    e = u.createElementNS(n, v, y.is && y), l && (O.__m && O.__m(t, a), l = !1), a = null;
  }
  if (v == null) w === y || l && e.data == y || (e.data = y);
  else {
    if (a = a && qt.call(e.childNodes), !l && a != null) for (w = {}, p = 0; p < e.attributes.length; p++) w[(m = e.attributes[p]).name] = m.value;
    for (p in w) m = w[p], p == "dangerouslySetInnerHTML" ? d = m : p == "children" || p in y || p == "value" && "defaultValue" in y || p == "checked" && "defaultChecked" in y || Pt(e, p, null, m, n);
    for (p in A = 1 & r.__u, y) m = y[p], p == "children" ? b = m : p == "dangerouslySetInnerHTML" ? h = m : p == "value" ? g = m : p == "checked" ? f = m : l && typeof m != "function" || w[p] === m && !A || Pt(e, p, m, w[p], n);
    if (h) l || d && (h.__html == d.__html || h.__html == e.innerHTML) || (e.innerHTML = h.__html), t.__k = [];
    else if (d && (e.innerHTML = ""), (v == "foreignObject" || n == "http://www.w3.org/1998/Math/MathML" && Xa.test(v)) && (n = "http://www.w3.org/1999/xhtml"), Bn(v == "template" ? e.content : e, vt(b) ? b : [b], t, r, o, n, a, s, a ? a[0] : r.__k && Ye(r, 0), l, c, u), a != null) for (p = a.length; p--; ) Kr(a[p]);
    l || (p = "value", v == "progress" && g == null ? e.removeAttribute("value") : g == null || g === e[p] && (v !== "progress" || g) || Pt(e, p, g, w[p], n), p = "checked", f != null && f != e[p] && Pt(e, p, f, w[p], n));
  }
  return e;
}
function qr(e, t, r) {
  try {
    typeof e == "function" ? (typeof e.__u == "function" && e.__u(), typeof e.__u == "function" && t == null || (e.__u = e(t))) : e.current = t;
  } catch (o) {
    O.__e(o, r);
  }
}
function Ln(e, t, r) {
  var o, n;
  if (O.unmount && O.unmount(e), !(o = e.ref) || o.current && o.current != e.__e || qr(o, null, t), (o = e.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (a) {
      O.__e(a, t);
    }
    o.__P = null;
  }
  if (o = e.__k) for (n = 0; n < o.length; n++) o[n] && Ln(o[n], t, r || typeof e.type != "function");
  r || Kr(e.__e), e.__e && e.__e.__l && (e.__e.__l = null), e.__e = e.__c = e.__ = null;
}
function ti(e, t, r) {
  return this.constructor(e, r);
}
function Ze(e, t) {
  var r, o, n, a;
  t == document && (t = document.documentElement), O.__ && O.__(e, t), o = (r = e && 32 & e.__u) ? null : t.__k, t.__k = Ee(F, null, [e]), n = [], a = [], Xr(t, t.__k, o || jt, jt, t.namespaceURI, o ? null : t.firstChild ? qt.call(t.childNodes) : null, n, o ? o.__e : t.firstChild, r, a, t.ownerDocument), zn(n, t.__k, a);
}
function ri(e, t) {
  e.__u |= 32, Ze(e, t);
}
function oi(e, t, r) {
  var o, n, a, s = _e({}, e.props);
  for (a in t) a == "key" ? o = t[a] : a == "ref" && typeof e.type != "function" ? n = t[a] : s[a] = t[a];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? qt.call(arguments, 2) : r), ht(e.type, s, o || e.key, n || e.ref, null);
}
function We(e) {
  function t(r) {
    var o, n;
    return this.getChildContext || (o = /* @__PURE__ */ new Set(), (n = {})[t.__c] = this, this.getChildContext = function() {
      return n;
    }, this.componentWillUnmount = function() {
      o = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value != a.value && o.forEach(function(s) {
        s.__g |= 4, Cr(s);
      });
    }, this.sub = function(a) {
      o.add(a);
      var s = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        o && o.delete(a), s && s.call(a);
      };
    }), r.children;
  }
  return t.__c = "__cC" + Tn++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(r, o) {
    return r.children(o);
  }).contextType = t, t;
}
O = { __e: function(e, t, r, o) {
  for (var n, a, s; t = t.__; ) if ((n = t.__c) && !(1 & n.__g)) {
    n.__g |= 4;
    try {
      if ((a = n.constructor) && a.getDerivedStateFromError != null && (n.setState(a.getDerivedStateFromError(e)), s = 8 & n.__g), n.componentDidCatch != null && (n.componentDidCatch(e, o || {}), s = 8 & n.__g), s) return void (n.__g |= 2);
    } catch (l) {
      e = l;
    }
  }
  throw Ft = 0, e;
} }, Pn = 0, Se.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = _e({}, this.state), typeof e == "function" && (e = e(_e({}, r), this.props)), e && (_e(r, e), this.__v && (t && this._sb.push(t), Cr(this)));
}, Se.prototype.forceUpdate = function(e) {
  this.__v && (this.__g |= 4, e && this.__h.push(e), Cr(this));
}, Se.prototype.render = F, Le = [], Ft = 0, In = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Nn = /(PointerCapture)$|Capture$/i, Jr = 0, _r = Eo(!1), Sr = Eo(!0), Tn = 0;
var ni = 0;
function i(e, t, r, o, n, a) {
  t || (t = {});
  var s, l, c = t;
  if ("ref" in c && typeof e != "function") for (l in c = {}, t) l == "ref" ? s = t[l] : c[l] = t[l];
  var u = { type: e, props: c, key: r, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --ni, __i: -1, __u: 0, __source: n, __self: a };
  return O.vnode && O.vnode(u), u;
}
var Oe, M, cr, Ro, Rr = Object.is, $e = 0, Mn = [], j = O, Po = j.__b, Io = j.__r, No = j.diffed, To = j.__c, Oo = j.unmount, Uo = j.__;
function et(e, t) {
  j.__h && j.__h(M, e, $e || t), $e = 0;
  var r = M.__H || (M.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function Q(e) {
  return $e = 1, Yr(Wn, e);
}
function Yr(e, t, r) {
  var o = et(Oe++, 2);
  if (o.t = e, !o.__c && (o.__ = [r ? r(t) : Wn(void 0, t), function(l) {
    var c = o.__N ? o.__N[0] : o.__[0], u = o.t(c, l);
    Rr(c, u) || (o.__N = [u, o.__[1]], o.__c.setState({}));
  }], o.__c = M, !M.__f)) {
    var n = function(l, c, u) {
      if (!o.__c.__H) return !0;
      var p = o.__c.__H.__, h = o.__c.props !== l || p.every(function(d) {
        return !d.__N;
      });
      return p.some(function(d) {
        if (d.__N) {
          var b = d.__[0];
          d.__ = d.__N, d.__N = void 0, Rr(b, d.__[0]) || (h = !0);
        }
      }), a && a.call(this, l, c, u) || h;
    };
    M.__f = !0;
    var a = M.shouldComponentUpdate, s = M.componentWillUpdate;
    M.componentWillUpdate = function(l, c, u) {
      if (4 & this.__g) {
        var p = a;
        a = void 0, n(l, c, u), a = p;
      }
      s && s.call(this, l, c, u);
    }, M.shouldComponentUpdate = n;
  }
  return o.__;
}
function C(e, t) {
  var r = et(Oe++, 3);
  !j.__s && Zr(r.__H, t) && (r.__ = e, r.u = t, M.__H.__h.push(r));
}
function tt(e, t) {
  var r = et(Oe++, 4);
  !j.__s && Zr(r.__H, t) && (r.__ = e, r.u = t, M.__h.push(r));
}
function X(e) {
  return $e = 5, W(function() {
    return { current: e };
  }, []);
}
function Fn(e, t, r) {
  $e = 6, tt(function() {
    if (typeof e == "function") {
      var o = e(t());
      return function() {
        e(null), o && typeof o == "function" && o();
      };
    }
    if (e) return e.current = t(), function() {
      return e.current = null;
    };
  }, r == null ? r : r.concat(e));
}
function W(e, t) {
  var r = et(Oe++, 7);
  return Zr(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__;
}
function Ce(e, t) {
  return $e = 8, W(function() {
    return e;
  }, t);
}
function ve(e) {
  var t = M.context[e.__c], r = et(Oe++, 9);
  return r.c = e, t ? (r.__ == null && (r.__ = !0, t.sub(M)), t.props.value) : e.__;
}
function jn(e, t) {
  j.useDebugValue && j.useDebugValue(t ? t(e) : e);
}
function Vn() {
  var e = et(Oe++, 11);
  if (!e.__) {
    for (var t = M.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var r = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + r[0] + "-" + r[1]++;
  }
  return e.__;
}
function ai() {
  for (var e; e = Mn.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.some(Bt), e.__H.__h.some(Pr), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], j.__e(t, e.__v);
  }
}
j.__b = function(e) {
  M = null, Po && Po(e);
}, j.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Uo && Uo(e, t);
}, j.__r = function(e) {
  Io && Io(e), Oe = 0;
  var t = (M = e.__c).__H;
  t && (cr === M ? (t.__h = [], M.__h = [], t.__.some(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (t.__h.some(Bt), t.__h.some(Pr), t.__h = [], Oe = 0)), cr = M;
}, j.diffed = function(e) {
  No && No(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Mn.push(t) !== 1 && Ro === j.requestAnimationFrame || ((Ro = j.requestAnimationFrame) || ii)(ai)), t.__H.__.some(function(r) {
    r.u && (r.__H = r.u), r.u = void 0;
  })), cr = M = null;
}, j.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.some(Bt), r.__h = r.__h.filter(function(o) {
        return !o.__ || Pr(o);
      });
    } catch (o) {
      t.some(function(n) {
        n.__h && (n.__h = []);
      }), t = [], j.__e(o, r.__v);
    }
  }), To && To(e, t);
}, j.unmount = function(e) {
  Oo && Oo(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.some(function(o) {
    try {
      Bt(o);
    } catch (n) {
      t = n;
    }
  }), r.__H = void 0, t && j.__e(t, r.__v));
};
var Bo = typeof requestAnimationFrame == "function";
function ii(e) {
  var t, r = function() {
    clearTimeout(o), Bo && cancelAnimationFrame(t), setTimeout(e);
  }, o = setTimeout(r, 35);
  Bo && (t = requestAnimationFrame(r));
}
function Bt(e) {
  var t = M, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), M = t;
}
function Pr(e) {
  var t = M;
  e.__c = e.__(), M = t;
}
function Zr(e, t) {
  return !e || e.length !== t.length || t.some(function(r, o) {
    return !Rr(r, e[o]);
  });
}
function Wn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const Qo = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), o = (u, p) => {
    const h = typeof u == "function" ? u(t) : u;
    if (!Object.is(h, t)) {
      const d = t;
      t = p ?? (typeof h != "object" || h === null) ? h : Object.assign({}, t, h), r.forEach((b) => b(t, d));
    }
  }, n = () => t, l = { setState: o, getState: n, getInitialState: () => c, subscribe: (u) => (r.add(u), () => r.delete(u)) }, c = t = e(o, n, l);
  return l;
}, Gn = ((e) => e ? Qo(e) : Qo);
function Hn(e, t) {
  var r = t(), o = Q({ t: { __: r, u: t } }), n = o[0].t, a = o[1];
  return tt(function() {
    n.__ = r, n.u = t, dr(n) && a({ t: n });
  }, [e, r, t]), C(function() {
    return dr(n) && a({ t: n }), e(function() {
      dr(n) && a({ t: n });
    });
  }, [e]), r;
}
function dr(e) {
  try {
    return !Object.is(e.__, e.u());
  } catch {
    return !0;
  }
}
function $r(e) {
  e();
}
function Jn(e) {
  return e;
}
function Kn() {
  return [!1, $r];
}
var Xn = tt, eo = Object.assign;
function Ir(e, t) {
  for (var r in e) if (r !== "__source" && !(r in t)) return !0;
  for (var o in t) if (o !== "__source" && e[o] !== t[o]) return !0;
  return !1;
}
var si = /^(-|f[lo].*[^se]$|g.{5,}[^ps]$|z|o[pr]|(W.{5})?[lL]i.*(t|mp)$|an|(bo|s).{4}Im|sca|m.{6}[ds]|ta|c.*[st]$|wido|ini)/;
function Nr(e, t) {
  this.props = e, this.context = t;
}
function li(e, t) {
  function r(n) {
    var a = this.props.ref, s = a == n.ref;
    return !s && a && (a.call ? a(null) : a.current = null), t ? !t(this.props, n) || !s : Ir(this.props, n);
  }
  function o(n) {
    return this.shouldComponentUpdate = r, Ee(e, n);
  }
  return o.displayName = "Memo(" + (e.displayName || e.name) + ")", o.prototype.isReactComponent = !0, o.type = e, o;
}
(Nr.prototype = new Se()).isPureReactComponent = !0, Nr.prototype.shouldComponentUpdate = function(e, t) {
  return Ir(this.props, e) || Ir(this.state, t);
};
var ci = /* @__PURE__ */ Symbol.for("react.forward_ref");
function di(e) {
  function t(r) {
    var o = eo({}, r);
    return delete o.ref, e(o, r.ref || null);
  }
  return t.$$typeof = ci, t.render = e, t.prototype.isReactComponent = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var zo = function(e, t, r) {
  return e == null ? null : Ne(Ne(e).map(t.bind(r)));
}, ui = { map: zo, forEach: zo, count: function(e) {
  return e ? Ne(e).length : 0;
}, only: function(e) {
  var t = Ne(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: Ne }, pi = O.__e;
O.__e = function(e, t, r, o) {
  if (e.then) {
    for (var n, a = t; a = a.__; ) if ((n = a.__c) && n.__c) return t.__e == null && (t.__e = r.__e, t.__k = r.__k), n.__c(e, t);
  }
  pi(e, t, r, o);
};
var Do = O.unmount;
function qn(e, t, r) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(o) {
    typeof o.__c == "function" && o.__c();
  }), e.__c.__H = null), (e = eo({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t), e.__c.__g |= 4, e.__c = null), e.__k = e.__k && e.__k.map(function(o) {
    return qn(o, t, r);
  })), e;
}
function Yn(e, t, r) {
  return e && r && (typeof e.type == "string" && (e.__u |= 1), e.__v = null, e.__k = e.__k && e.__k.map(function(o) {
    return Yn(o, t, r);
  }), e.__c && e.__c.__P === t && (e.__e && r.appendChild(e.__e), e.__c.__g |= 4, e.__c.__P = r)), e;
}
function Qt() {
  this.__u = 0, this.o = null, this.__b = null;
}
function hi(e) {
  var t, r, o, n = null;
  function a(s) {
    if (t || (t = e()).then(function(l) {
      l && (n = l.default || l), o = !0;
    }, function(l) {
      r = l, o = !0;
    }), r) throw r;
    if (!o) throw t;
    return n ? Ee(n, s) : null;
  }
  return a.displayName = "Lazy", a;
}
function mi(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function gi(e) {
  var t = this, r = e.i;
  if (t.componentWillUnmount = function() {
    Ze(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== r && t.componentWillUnmount(), !t.l) {
    for (var o = t.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    t.i = r, t.l = { nodeType: 1, parentNode: r, childNodes: [], __k: { __m: o.__m }, ownerDocument: r.ownerDocument, namespaceURI: r.namespaceURI, insertBefore: function(n, a) {
      this.childNodes.push(n), t.i.insertBefore(n, a);
    } };
  }
  Ze(Ee(mi, { context: t.context }, e.__v), t.l);
}
function to(e, t) {
  var r = Ee(gi, { __v: e, i: t });
  return r.containerInfo = t, r;
}
O.unmount = function(e) {
  var t = e.__c;
  t && (t.__z = !0), t && t.__R && t.__R(), Do && Do(e);
}, (Qt.prototype = new Se()).__c = function(e, t) {
  var r = t.__c, o = this;
  o.o == null && (o.o = []), o.o.push(r);
  var n = !1, a = function() {
    n || o.__z || (n = !0, r.__R = null, l());
  };
  r.__R = a;
  var s = r.__P;
  r.__P = null;
  var l = function() {
    if (!--o.__u) {
      if (o.state.__a) {
        var c = o.state.__a;
        o.__v.__k[0] = Yn(c, c.__c.__P, c.__c.__O);
      }
      var u;
      for (o.setState({ __a: o.__b = null }); u = o.o.pop(); ) u.__P = s, u.forceUpdate();
    }
  };
  o.__u++ || 32 & t.__u || o.setState({ __a: o.__b = o.__v.__k[0] }), e.then(a, a);
}, Qt.prototype.componentWillUnmount = function() {
  this.o = [];
}, Qt.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), o = this.__v.__k[0].__c;
      this.__v.__k[0] = qn(this.__b, r, o.__O = o.__P);
    }
    this.__b = null;
  }
  return [Ee(F, null, t.__a ? null : e.children), t.__a && Ee(F, null, e.fallback)];
};
var Zn = /* @__PURE__ */ Symbol.for("react.element"), fi = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, bi = /[A-Z0-9]/g, vi = typeof document < "u", Ai = function(e) {
  return /fil|che|rad/.test(e);
};
function wi(e, t, r) {
  return t.__k == null && (t.textContent = ""), Ze(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
function yi(e, t, r) {
  return ri(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
Se.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(Se.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Lo = O.event;
function xi() {
}
function ki() {
  return this.cancelBubble;
}
function _i() {
  return this.defaultPrevented;
}
O.event = function(e) {
  return Lo && (e = Lo(e)), e.persist = xi, e.isPropagationStopped = ki, e.isDefaultPrevented = _i, e.nativeEvent = e;
};
var ro, Si = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Mo = O.vnode;
O.vnode = function(e) {
  if (typeof e.type == "string") (function(o) {
    var n = o.props, a = o.type, s = {}, l = a.indexOf("-") === -1;
    for (var c in n) {
      var u = n[c];
      if (!(c === "value" && "defaultValue" in n && u == null || vi && c === "children" && a === "noscript" || c === "class" || c === "className")) {
        if (c === "style" && typeof u == "object") for (var p in u) typeof u[p] != "number" || si.test(p) || (u[p] += "px");
        else if (c === "defaultValue" && "value" in n && n.value == null) c = "value";
        else if (c === "download" && u === !0) u = "";
        else if (c === "translate" && u === "no") u = !1;
        else if (c[0] === "o" && c[1] === "n") {
          var h = c.toLowerCase();
          h === "ondoubleclick" ? c = "ondblclick" : h !== "onchange" || a !== "input" && a !== "textarea" || Ai(n.type) ? h === "onfocus" ? c = "onfocusin" : h === "onblur" && (c = "onfocusout") : h = c = "oninput", h === "oninput" && s[c = h] && (c = "oninputCapture");
        } else l && fi.test(c) ? c = c.replace(bi, "-$&").toLowerCase() : u === null && (u = void 0);
        s[c] = u;
      }
    }
    a == "select" && s.multiple && Array.isArray(s.value) && (s.value = Ne(n.children).forEach(function(d) {
      d.props.selected = s.value.indexOf(d.props.value) != -1;
    })), a == "select" && s.defaultValue != null && (s.value = Ne(n.children).forEach(function(d) {
      d.props.selected = s.multiple ? s.defaultValue.indexOf(d.props.value) != -1 : s.defaultValue == d.props.value;
    })), n.class && !n.className ? (s.class = n.class, Object.defineProperty(s, "className", Si)) : n.className && (s.class = s.className = n.className), o.props = s;
  })(e);
  else if (typeof e.type == "function" && ("ref" in e.props && "prototype" in e.type && e.type.prototype.render && (e.ref = e.props.ref, delete e.props.ref), e.type.defaultProps)) {
    var t = eo({}, e.props);
    for (var r in e.type.defaultProps) t[r] === void 0 && (t[r] = e.type.defaultProps[r]);
    e.props = t;
  }
  e.$$typeof = Zn, Mo && Mo(e);
};
var Fo = O.__r;
O.__r = function(e) {
  Fo && Fo(e), ro = e.__c;
};
var jo = O.diffed;
O.diffed = function(e) {
  jo && jo(e);
  var t = e.props, r = e.__e;
  r != null && e.type === "textarea" && "value" in t && t.value !== r.value && (r.value = t.value == null ? "" : t.value), ro = null;
};
var Ci = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return ro.__n[e.__c].props.value;
}, useCallback: Ce, useContext: ve, useDebugValue: jn, useDeferredValue: Jn, useEffect: C, useId: Vn, useImperativeHandle: Fn, useInsertionEffect: Xn, useLayoutEffect: tt, useMemo: W, useReducer: Yr, useRef: X, useState: Q, useSyncExternalStore: Hn, useTransition: Kn } } };
function Ei(e) {
  return Ee.bind(null, e);
}
function Yt(e) {
  return !!e && e.$$typeof === Zn;
}
function Ri(e) {
  return Yt(e) && e.type === F;
}
function Pi(e) {
  return !!e && typeof e.displayName == "string" && e.displayName.startsWith("Memo(");
}
function Ii(e) {
  return Yt(e) ? oi.apply(null, arguments) : e;
}
function Ni(e) {
  return !!e.__k && (Ze(null, e), !0);
}
function Ti(e) {
  return e && (e.__v && e.__v.__e || e.nodeType === 1 && e) || null;
}
var Oi = function(e, t) {
  return e(t);
};
function Ui(e, t) {
  return e(t);
}
var Bi = F, Qi = Yt, ut = { useState: Q, useId: Vn, useReducer: Yr, useEffect: C, useLayoutEffect: tt, useInsertionEffect: Xn, useTransition: Kn, useDeferredValue: Jn, useSyncExternalStore: Hn, startTransition: $r, useRef: X, useImperativeHandle: Fn, useMemo: W, useCallback: Ce, useContext: ve, useDebugValue: jn, version: "18.3.1", Children: ui, render: wi, hydrate: yi, unmountComponentAtNode: Ni, createPortal: to, createElement: Ee, createContext: We, createFactory: Ei, cloneElement: Ii, createRef: qa, Fragment: F, isValidElement: Yt, isElement: Qi, isFragment: Ri, isMemo: Pi, findDOMNode: Ti, Component: Se, PureComponent: Nr, memo: li, forwardRef: di, flushSync: Oi, unstable_batchedUpdates: Ui, StrictMode: Bi, Suspense: Qt, lazy: hi, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ci };
const zi = (e) => e;
function $n(e, t = zi) {
  const r = ut.useSyncExternalStore(
    e.subscribe,
    ut.useCallback(() => t(e.getState()), [e, t]),
    ut.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return ut.useDebugValue(r), r;
}
const Vo = (e) => {
  const t = Gn(e), r = (o) => $n(t, o);
  return Object.assign(r, t), r;
}, pe = ((e) => e ? Vo(e) : Vo), zt = pe()(() => ({ path: "", version: "" })), ea = () => (C(() => {
  const e = zt.getState();
  e.path && e.version || zt.setState({
    path: window?.VLibrasWidget?.path ?? "./",
    version: "7.0.0-alpha.0"
  });
}, []), zt());
function oo(e, t) {
  const r = X(null);
  return (o) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => e(o), t);
  };
}
const Di = (e) => {
  const [t, r] = Q(!1);
  return C(() => {
    function o(a) {
      r(a.matches);
    }
    const n = matchMedia(e);
    return n.addEventListener("change", o), r(n.matches), () => n.removeEventListener("change", o);
  }, [e]), t;
}, Tr = pe()(() => ({ isExpanded: !1 })), $ = () => {
  const e = Tr((t) => t.isExpanded);
  return Di("(max-width: 640px)") && !e;
}, Li = {
  get: Tr.getState,
  set: Tr.setState
}, Wo = (e) => Symbol.iterator in e, Go = (e) => (
  // HACK: avoid checking entries type
  "entries" in e
), Ho = (e, t) => {
  const r = e instanceof Map ? e : new Map(e.entries()), o = t instanceof Map ? t : new Map(t.entries());
  if (r.size !== o.size)
    return !1;
  for (const [n, a] of r)
    if (!o.has(n) || !Object.is(a, o.get(n)))
      return !1;
  return !0;
}, Mi = (e, t) => {
  const r = e[Symbol.iterator](), o = t[Symbol.iterator]();
  let n = r.next(), a = o.next();
  for (; !n.done && !a.done; ) {
    if (!Object.is(n.value, a.value))
      return !1;
    n = r.next(), a = o.next();
  }
  return !!n.done && !!a.done;
};
function Fi(e, t) {
  return Object.is(e, t) ? !0 : typeof e != "object" || e === null || typeof t != "object" || t === null || Object.getPrototypeOf(e) !== Object.getPrototypeOf(t) ? !1 : Wo(e) && Wo(t) ? Go(e) && Go(t) ? Ho(e, t) : Mi(e, t) : Ho(
    { entries: () => Object.entries(e) },
    { entries: () => Object.entries(t) }
  );
}
function ji(e) {
  const t = ut.useRef(void 0);
  return (r) => {
    const o = e(r);
    return Fi(t.current, o) ? t.current : t.current = o;
  };
}
function ur(e, ...t) {
  const r = { ...e };
  for (const o of t) delete r[o];
  return r;
}
function Zt(e, ...t) {
  const r = {};
  for (const o of t) r[o] = e[o];
  return r;
}
const Vi = (e) => e.replace(new RegExp("(?<!:)\\/+", "g"), "/"), ta = () => Math.random().toString(36).slice(2, 8), Ae = (...e) => {
  const t = W(() => (r) => Zt(r, ...e), [JSON.stringify(e)]);
  return ji(t);
}, pr = "@vlibras-theme", Wi = (e) => ["light", "dark"].includes(e), no = pe((e) => ({
  theme: (() => {
    const t = localStorage.getItem(pr) || "";
    return Wi(t) ? t : "light";
  })(),
  toggleTheme: () => e((t) => {
    const r = t.theme === "dark" ? "light" : "dark";
    return localStorage.setItem(pr, r), { theme: r, isDark: r === "dark" };
  }),
  setTheme: (t) => {
    localStorage.setItem(pr, t), e({ theme: t });
  }
})), lt = "vlibras-app-root", hr = {}, Vt = {}, Gi = () => {
  if (!hr[lt]) {
    let o = document.getElementById(lt);
    o || (o = document.createElement("div"), o.id = lt, o.style.zIndex = "2147483647", document.body.appendChild(o)), hr[lt] = o;
  }
  const e = hr[lt], t = e.shadowRoot || e.attachShadow({ mode: "open" });
  return { root: e, shadowRoot: t, isRootActive: () => e.getAttribute("data-active") === "true" };
}, ra = (e, t, r) => {
  const o = Vt[t];
  if (o) return o;
  const n = document.createElement("style");
  n.id = t, n.innerHTML = e, Vt[t] = n, document.head.appendChild(n);
}, Hi = (e) => {
  const t = Vt[e];
  t && (document.head.removeChild(t), delete Vt[e]);
}, Ji = async (e, t) => {
  const r = [
    new FontFace("VLibrasWidget_Font", `url(${e}/assets/fonts/rawline/rawline-500.ttf) format('truetype')`, {
      weight: "500"
    }),
    new FontFace("VLibrasWidget_Font", `url(${e}/assets/fonts/rawline/rawline-500i.ttf) format('truetype')`, {
      weight: "500",
      style: "italic"
    }),
    new FontFace("VLibrasWidget_Font", `url(${e}/assets/fonts/rawline/rawline-600.ttf) format('truetype')`, {
      weight: "600"
    }),
    new FontFace("VLibrasWidget_Font", `url(${e}/assets/fonts/rawline/rawline-600i.ttf) format('truetype')`, {
      weight: "600",
      style: "italic"
    }),
    new FontFace("VLibrasWidget_Font", `url(${e}/assets/fonts/rawline/rawline-700.ttf) format('truetype')`, {
      weight: "700"
    }),
    new FontFace("VLibrasWidget_Font", `url(${e}/assets/fonts/rawline/rawline-700i.ttf) format('truetype')`, {
      weight: "700",
      style: "italic"
    })
  ];
  try {
    await Ki(r, (o) => {
      t.adoptedStyleSheets = [...t.adoptedStyleSheets, ...o];
    });
  } catch (o) {
    console.error("Error loading default font:", o);
  }
}, Ki = async (e, t) => {
  await Promise.all(e.map((r) => r.load())), e.forEach((r) => document.fonts.add(r)), t && t(document.adoptedStyleSheets);
};
function oa(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = oa(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function na() {
  for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = oa(e)) && (o && (o += " "), o += t);
  return o;
}
const Xi = (e, t) => {
  const r = new Array(e.length + t.length);
  for (let o = 0; o < e.length; o++)
    r[o] = e[o];
  for (let o = 0; o < t.length; o++)
    r[e.length + o] = t[o];
  return r;
}, qi = (e, t) => ({
  classGroupId: e,
  validator: t
}), aa = (e = /* @__PURE__ */ new Map(), t = null, r) => ({
  nextPart: e,
  validators: t,
  classGroupId: r
}), Wt = "-", Jo = [], Yi = "arbitrary..", Zi = (e) => {
  const t = es(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (s) => {
      if (s.startsWith("[") && s.endsWith("]"))
        return $i(s);
      const l = s.split(Wt), c = l[0] === "" && l.length > 1 ? 1 : 0;
      return ia(l, c, t);
    },
    getConflictingClassGroupIds: (s, l) => {
      if (l) {
        const c = o[s], u = r[s];
        return c ? u ? Xi(u, c) : c : u || Jo;
      }
      return r[s] || Jo;
    }
  };
}, ia = (e, t, r) => {
  if (e.length - t === 0)
    return r.classGroupId;
  const n = e[t], a = r.nextPart.get(n);
  if (a) {
    const u = ia(e, t + 1, a);
    if (u) return u;
  }
  const s = r.validators;
  if (s === null)
    return;
  const l = t === 0 ? e.join(Wt) : e.slice(t).join(Wt), c = s.length;
  for (let u = 0; u < c; u++) {
    const p = s[u];
    if (p.validator(l))
      return p.classGroupId;
  }
}, $i = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), r = t.indexOf(":"), o = t.slice(0, r);
  return o ? Yi + o : void 0;
})(), es = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e;
  return ts(r, t);
}, ts = (e, t) => {
  const r = aa();
  for (const o in e) {
    const n = e[o];
    ao(n, r, o, t);
  }
  return r;
}, ao = (e, t, r, o) => {
  const n = e.length;
  for (let a = 0; a < n; a++) {
    const s = e[a];
    rs(s, t, r, o);
  }
}, rs = (e, t, r, o) => {
  if (typeof e == "string") {
    os(e, t, r);
    return;
  }
  if (typeof e == "function") {
    ns(e, t, r, o);
    return;
  }
  as(e, t, r, o);
}, os = (e, t, r) => {
  const o = e === "" ? t : sa(t, e);
  o.classGroupId = r;
}, ns = (e, t, r, o) => {
  if (is(e)) {
    ao(e(o), t, r, o);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(qi(r, e));
}, as = (e, t, r, o) => {
  const n = Object.entries(e), a = n.length;
  for (let s = 0; s < a; s++) {
    const [l, c] = n[s];
    ao(c, sa(t, l), r, o);
  }
}, sa = (e, t) => {
  let r = e;
  const o = t.split(Wt), n = o.length;
  for (let a = 0; a < n; a++) {
    const s = o[a];
    let l = r.nextPart.get(s);
    l || (l = aa(), r.nextPart.set(s, l)), r = l;
  }
  return r;
}, is = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, ss = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  const n = (a, s) => {
    r[a] = s, t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(a) {
      let s = r[a];
      if (s !== void 0)
        return s;
      if ((s = o[a]) !== void 0)
        return n(a, s), s;
    },
    set(a, s) {
      a in r ? r[a] = s : n(a, s);
    }
  };
}, Or = "!", Ko = ":", ls = [], Xo = (e, t, r, o, n) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: r,
  maybePostfixModifierPosition: o,
  isExternal: n
}), cs = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let o = (n) => {
    const a = [];
    let s = 0, l = 0, c = 0, u;
    const p = n.length;
    for (let g = 0; g < p; g++) {
      const f = n[g];
      if (s === 0 && l === 0) {
        if (f === Ko) {
          a.push(n.slice(c, g)), c = g + 1;
          continue;
        }
        if (f === "/") {
          u = g;
          continue;
        }
      }
      f === "[" ? s++ : f === "]" ? s-- : f === "(" ? l++ : f === ")" && l--;
    }
    const h = a.length === 0 ? n : n.slice(c);
    let d = h, b = !1;
    h.endsWith(Or) ? (d = h.slice(0, -1), b = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      h.startsWith(Or) && (d = h.slice(1), b = !0)
    );
    const m = u && u > c ? u - c : void 0;
    return Xo(a, b, d, m);
  };
  if (t) {
    const n = t + Ko, a = o;
    o = (s) => s.startsWith(n) ? a(s.slice(n.length)) : Xo(ls, !1, s, void 0, !0);
  }
  if (r) {
    const n = o;
    o = (a) => r({
      className: a,
      parseClassName: n
    });
  }
  return o;
}, ds = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((r, o) => {
    t.set(r, 1e6 + o);
  }), (r) => {
    const o = [];
    let n = [];
    for (let a = 0; a < r.length; a++) {
      const s = r[a], l = s[0] === "[", c = t.has(s);
      l || c ? (n.length > 0 && (n.sort(), o.push(...n), n = []), o.push(s)) : n.push(s);
    }
    return n.length > 0 && (n.sort(), o.push(...n)), o;
  };
}, us = (e) => ({
  cache: ss(e.cacheSize),
  parseClassName: cs(e),
  sortModifiers: ds(e),
  ...Zi(e)
}), ps = /\s+/, hs = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: n,
    sortModifiers: a
  } = t, s = [], l = e.trim().split(ps);
  let c = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const p = l[u], {
      isExternal: h,
      modifiers: d,
      hasImportantModifier: b,
      baseClassName: m,
      maybePostfixModifierPosition: g
    } = r(p);
    if (h) {
      c = p + (c.length > 0 ? " " + c : c);
      continue;
    }
    let f = !!g, A = o(f ? m.substring(0, g) : m);
    if (!A) {
      if (!f) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (A = o(m), !A) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      f = !1;
    }
    const w = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), y = b ? w + Or : w, v = y + A;
    if (s.indexOf(v) > -1)
      continue;
    s.push(v);
    const S = n(A, f);
    for (let N = 0; N < S.length; ++N) {
      const U = S[N];
      s.push(y + U);
    }
    c = p + (c.length > 0 ? " " + c : c);
  }
  return c;
}, ms = (...e) => {
  let t = 0, r, o, n = "";
  for (; t < e.length; )
    (r = e[t++]) && (o = la(r)) && (n && (n += " "), n += o);
  return n;
}, la = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = la(e[o])) && (r && (r += " "), r += t);
  return r;
}, gs = (e, ...t) => {
  let r, o, n, a;
  const s = (c) => {
    const u = t.reduce((p, h) => h(p), e());
    return r = us(u), o = r.cache.get, n = r.cache.set, a = l, l(c);
  }, l = (c) => {
    const u = o(c);
    if (u)
      return u;
    const p = hs(c, r);
    return n(c, p), p;
  };
  return a = s, (...c) => a(ms(...c));
}, fs = [], Y = (e) => {
  const t = (r) => r[e] || fs;
  return t.isThemeGetter = !0, t;
}, ca = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, da = /^\((?:(\w[\w-]*):)?(.+)\)$/i, bs = /^\d+\/\d+$/, vs = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, As = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ws = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ys = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, xs = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, He = (e) => bs.test(e), T = (e) => !!e && !Number.isNaN(Number(e)), Pe = (e) => !!e && Number.isInteger(Number(e)), mr = (e) => e.endsWith("%") && T(e.slice(0, -1)), ke = (e) => vs.test(e), ks = () => !0, _s = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  As.test(e) && !ws.test(e)
), ua = () => !1, Ss = (e) => ys.test(e), Cs = (e) => xs.test(e), Es = (e) => !k(e) && !_(e), Rs = (e) => rt(e, ma, ua), k = (e) => ca.test(e), ze = (e) => rt(e, ga, _s), gr = (e) => rt(e, Os, T), qo = (e) => rt(e, pa, ua), Ps = (e) => rt(e, ha, Cs), It = (e) => rt(e, fa, Ss), _ = (e) => da.test(e), ct = (e) => ot(e, ga), Is = (e) => ot(e, Us), Yo = (e) => ot(e, pa), Ns = (e) => ot(e, ma), Ts = (e) => ot(e, ha), Nt = (e) => ot(e, fa, !0), rt = (e, t, r) => {
  const o = ca.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, ot = (e, t, r = !1) => {
  const o = da.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, pa = (e) => e === "position" || e === "percentage", ha = (e) => e === "image" || e === "url", ma = (e) => e === "length" || e === "size" || e === "bg-size", ga = (e) => e === "length", Os = (e) => e === "number", Us = (e) => e === "family-name", fa = (e) => e === "shadow", Bs = () => {
  const e = Y("color"), t = Y("font"), r = Y("text"), o = Y("font-weight"), n = Y("tracking"), a = Y("leading"), s = Y("breakpoint"), l = Y("container"), c = Y("spacing"), u = Y("radius"), p = Y("shadow"), h = Y("inset-shadow"), d = Y("text-shadow"), b = Y("drop-shadow"), m = Y("blur"), g = Y("perspective"), f = Y("aspect"), A = Y("ease"), w = Y("animate"), y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], v = () => [
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
  ], S = () => [...v(), _, k], N = () => ["auto", "hidden", "clip", "visible", "scroll"], U = () => ["auto", "contain", "none"], x = () => [_, k, c], L = () => [He, "full", "auto", ...x()], te = () => [Pe, "none", "subgrid", _, k], oe = () => ["auto", {
    span: ["full", Pe, _, k]
  }, Pe, _, k], K = () => [Pe, "auto", _, k], de = () => ["auto", "min", "max", "fr", _, k], re = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ne = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], ge = () => ["auto", ...x()], xe = () => [He, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...x()], R = () => [e, _, k], St = () => [...v(), Yo, qo, {
    position: [_, k]
  }], it = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Ge = () => ["auto", "cover", "contain", Ns, Rs, {
    size: [_, k]
  }], st = () => [mr, ct, ze], ee = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    _,
    k
  ], B = () => ["", T, ct, ze], H = () => ["solid", "dashed", "dotted", "double"], he = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], D = () => [T, mr, Yo, qo], _o = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    m,
    _,
    k
  ], Ct = () => ["none", T, _, k], Et = () => ["none", T, _, k], lr = () => [T, _, k], Rt = () => [He, "full", ...x()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ke],
      breakpoint: [ke],
      color: [ks],
      container: [ke],
      "drop-shadow": [ke],
      ease: ["in", "out", "in-out"],
      font: [Es],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ke],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ke],
      shadow: [ke],
      spacing: ["px", T],
      text: [ke],
      "text-shadow": [ke],
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
        aspect: ["auto", "square", He, k, _, f]
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
        columns: [T, k, _, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": y()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": y()
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
        object: S()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: N()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": N()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": N()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: U()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": U()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": U()
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
        inset: L()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": L()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": L()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: L()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: L()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: L()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: L()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: L()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: L()
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
        z: [Pe, "auto", _, k]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [He, "full", "auto", l, ...x()]
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
        flex: [T, He, "auto", "initial", "none", k]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", T, _, k]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", T, _, k]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Pe, "first", "last", "none", _, k]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": te()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: oe()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": K()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": K()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": te()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: oe()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": K()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": K()
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
        "auto-cols": de()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": de()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: x()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": x()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": x()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...re(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ne(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ne()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...re()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ne(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ne(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": re()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ne(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ne()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: x()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: x()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: x()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: x()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: x()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: x()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: x()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: x()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: x()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: ge()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: ge()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: ge()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: ge()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: ge()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: ge()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: ge()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: ge()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: ge()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": x()
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
        "space-y": x()
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
        size: xe()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...xe()]
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
          ...xe()
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
          ...xe()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...xe()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...xe()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...xe()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, ct, ze]
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
        font: [o, _, gr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", mr, k]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Is, k, t]
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
        tracking: [n, _, k]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [T, "none", _, gr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...x()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", _, k]
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
        list: ["disc", "decimal", "none", _, k]
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
        placeholder: R()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: R()
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
        decoration: [...H(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [T, "from-font", "auto", _, ze]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: R()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [T, "auto", _, k]
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
        indent: x()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", _, k]
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
        content: ["none", _, k]
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
        bg: St()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: it()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Ge()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Pe, _, k],
          radial: ["", _, k],
          conic: [Pe, _, k]
        }, Ts, Ps]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: R()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: st()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: st()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: st()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: R()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: R()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: R()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: ee()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": ee()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": ee()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": ee()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": ee()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": ee()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": ee()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": ee()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": ee()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": ee()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": ee()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": ee()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": ee()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": ee()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": ee()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: B()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": B()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": B()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": B()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": B()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": B()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": B()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": B()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": B()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": B()
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
        "divide-y": B()
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
        border: [...H(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...H(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: R()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": R()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": R()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": R()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": R()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": R()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": R()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": R()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": R()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: R()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...H(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [T, _, k]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", T, ct, ze]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: R()
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
          Nt,
          It
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: R()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", h, Nt, It]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": R()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: B()
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
        ring: R()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [T, ze]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": R()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": B()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": R()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", d, Nt, It]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": R()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [T, _, k]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...he(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": he()
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
        "mask-linear": [T]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": D()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": D()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": R()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": R()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": D()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": D()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": R()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": R()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": D()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": D()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": R()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": R()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": D()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": D()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": R()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": R()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": D()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": D()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": R()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": R()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": D()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": D()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": R()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": R()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": D()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": D()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": R()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": R()
      }],
      "mask-image-radial": [{
        "mask-radial": [_, k]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": D()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": D()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": R()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": R()
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
        "mask-radial-at": v()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [T]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": D()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": D()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": R()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": R()
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
        mask: St()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: it()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Ge()
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
        mask: ["none", _, k]
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
          _,
          k
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: _o()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [T, _, k]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [T, _, k]
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
          b,
          Nt,
          It
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": R()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", T, _, k]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [T, _, k]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", T, _, k]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [T, _, k]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", T, _, k]
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
          _,
          k
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": _o()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [T, _, k]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [T, _, k]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", T, _, k]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [T, _, k]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", T, _, k]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [T, _, k]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [T, _, k]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", T, _, k]
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
        "border-spacing": x()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": x()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": x()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", _, k]
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
        duration: [T, "initial", _, k]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", A, _, k]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [T, _, k]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", w, _, k]
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
        perspective: [g, _, k]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": S()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Ct()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Ct()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Ct()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Ct()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Et()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Et()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Et()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Et()
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
        skew: lr()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": lr()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": lr()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [_, k, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: S()
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
        translate: Rt()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Rt()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Rt()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Rt()
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
        accent: R()
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
        caret: R()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", _, k]
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
        "scroll-m": x()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": x()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": x()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": x()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": x()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": x()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": x()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": x()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": x()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": x()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": x()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": x()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": x()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": x()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": x()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": x()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": x()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": x()
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
        "will-change": ["auto", "scroll", "contents", "transform", _, k]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...R()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [T, ct, ze, gr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...R()]
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
}, Qs = /* @__PURE__ */ gs(Bs);
function E(...e) {
  return Qs(na(e));
}
const zs = () => /* @__PURE__ */ i("div", { className: "absolute bottom-15 left-1/2 grid -translate-x-1/2 animate-move-up place-content-center rounded-full border bg-background p-0.5 pr-2", children: /* @__PURE__ */ i("span", { className: "flex items-center gap-1 font-semibold text-xs", children: [
  /* @__PURE__ */ i("span", { className: "loading loading-spinner loading-xs" }),
  "Traduzindo..."
] }) });
function $t(e, t) {
  let r;
  try {
    r = e();
  } catch {
    return;
  }
  return {
    getItem: (n) => {
      var a;
      const s = (c) => c === null ? null : JSON.parse(c, void 0), l = (a = r.getItem(n)) != null ? a : null;
      return l instanceof Promise ? l.then(s) : s(l);
    },
    setItem: (n, a) => r.setItem(n, JSON.stringify(a, void 0)),
    removeItem: (n) => r.removeItem(n)
  };
}
const Ur = (e) => (t) => {
  try {
    const r = e(t);
    return r instanceof Promise ? r : {
      then(o) {
        return Ur(o)(r);
      },
      catch(o) {
        return this;
      }
    };
  } catch (r) {
    return {
      then(o) {
        return this;
      },
      catch(o) {
        return Ur(o)(r);
      }
    };
  }
}, Ds = (e, t) => (r, o, n) => {
  let a = {
    storage: $t(() => window.localStorage),
    partialize: (f) => f,
    version: 0,
    merge: (f, A) => ({
      ...A,
      ...f
    }),
    ...t
  }, s = !1, l = 0;
  const c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  let p = a.storage;
  if (!p)
    return e(
      (...f) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), r(...f);
      },
      o,
      n
    );
  const h = () => {
    const f = a.partialize({ ...o() });
    return p.setItem(a.name, {
      state: f,
      version: a.version
    });
  }, d = n.setState;
  n.setState = (f, A) => (d(f, A), h());
  const b = e(
    (...f) => (r(...f), h()),
    o,
    n
  );
  n.getInitialState = () => b;
  let m;
  const g = () => {
    var f, A;
    if (!p) return;
    const w = ++l;
    s = !1, c.forEach((v) => {
      var S;
      return v((S = o()) != null ? S : b);
    });
    const y = ((A = a.onRehydrateStorage) == null ? void 0 : A.call(a, (f = o()) != null ? f : b)) || void 0;
    return Ur(p.getItem.bind(p))(a.name).then((v) => {
      if (v)
        if (typeof v.version == "number" && v.version !== a.version) {
          if (a.migrate) {
            const S = a.migrate(
              v.state,
              v.version
            );
            return S instanceof Promise ? S.then((N) => [!0, N]) : [!0, S];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, v.state];
      return [!1, void 0];
    }).then((v) => {
      var S;
      if (w !== l)
        return;
      const [N, U] = v;
      if (m = a.merge(
        U,
        (S = o()) != null ? S : b
      ), r(m, !0), N)
        return h();
    }).then(() => {
      w === l && (y?.(m, void 0), m = o(), s = !0, u.forEach((v) => v(m)));
    }).catch((v) => {
      w === l && y?.(void 0, v);
    });
  };
  return n.persist = {
    setOptions: (f) => {
      a = {
        ...a,
        ...f
      }, f.storage && (p = f.storage);
    },
    clearStorage: () => {
      p?.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => g(),
    hasHydrated: () => s,
    onHydrate: (f) => (c.add(f), () => {
      c.delete(f);
    }),
    onFinishHydration: (f) => (u.add(f), () => {
      u.delete(f);
    })
  }, a.skipHydration || g(), m || b;
}, er = Ds, se = {
  PLAYER: "PlayerManager",
  EMOTION: "EmotionBridge",
  CUSTOMIZATION: "CustomizationBridge"
}, J = {
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
}, dt = {
  ON_LOAD_PLAYER: "on_load_player",
  ON_PLAYING_STATE_CHANGE: "on_playing_state_change",
  COUNTER_GLOSS: "counter_gloss",
  UPDATE_PROGRESS: "update_progress",
  FINISH_WELCOME: "finish_welcome"
}, Br = {
  default: {
    name: "Padrão",
    action: J.APPLY_DEFAULT_EMOTION,
    icon: "emotions/default",
    intensity: 2
  },
  happy: {
    name: "Feliz",
    action: J.APPLY_HAPPY_EMOTION,
    icon: "emotions/happy",
    intensity: 2
  },
  sad: {
    name: "Triste",
    action: J.APPLY_SAD_EMOTION,
    icon: "emotions/sad",
    intensity: 2
  },
  doubt: {
    name: "Dúvida",
    action: J.APPLY_DOUBT_EMOTION,
    icon: "emotions/doubt",
    intensity: 2
  },
  angry: {
    name: "Raiva",
    action: J.APPLY_ANGRY_EMOTION,
    icon: "emotions/angry",
    intensity: 2
  },
  disgust: {
    name: "Nojo",
    action: J.APPLY_DISGUST_EMOTION,
    icon: "emotions/disgust",
    intensity: 2
  },
  fear: {
    name: "Medo",
    action: J.APPLY_FEAR_EMOTION,
    icon: "emotions/fear",
    intensity: 2
  },
  surprise: {
    name: "Surpresa",
    action: J.APPLY_SURPRISE_EMOTION,
    icon: "emotions/surprise",
    intensity: 2
  }
}, Ls = "data:image/webp;base64,UklGRowEAABXRUJQVlA4WAoAAAAQAAAAYgAAHAAAQUxQSEUAAAABf6AmkiTlKDz/ys4Ff4w2IiLwqSAj2f11fG0orbadSr/7nR1VTTaDZBRr6EawyJeFiP5PQOvolUpEH+qHMxf6NueiPw8AVlA4ICAEAADwFACdASpjAB0APpE2mEiloqIhK3zLiLASCWgAnTlBVF5afnvxAwc7Yt+r0Af9jdic8N/ef1V6//qKPQA8tf2h/8ZggH851GBnZFKO30ou+O/kvQDjM7/vwrz1+fdnheo+A76Lh2EGC4qM4+5YgsrQ/JrrviDEu4MGK72ZP5Ykbi9zy2NsoTfjvgUJG0+J/c6QRQ7RStZIEyTIUq7Utu/rdvjsPsY9lWHx/zuSO9RfAAD8ZMnHu8+8p0PaYWBM5qEfpidBxUbM/kcBTzu9/nkDkE3f1uXCM31SXicKWuyq/yPLa+n9siDbv3lNfz7AQ9etNEKWIjjFKB+eRHQfk9L6Y6JprDOs//drypVgTy+LL30dWe/71f/+HpHKW6/mf/xIU/qdVjTlyIAjPc/Ll/tkRJkXjRwNyE7jR6/OO3Pttar1WM7qNGYExxO7gfN9gREnQc2gSzpJxlQtfEtC5QJPNtA9OqwfanmFiXz5WG6Ue8ddkvl1on5louk9jmgqm5qR7yPbgGQCcxF7pDnyvvlPzjjySx5XB1e6S2a/GT6+hA7XxbUwVCDS9xx64o/BqGXaIvaZIBEsb75fBqc+mp0jlFaD8ktz9sQWk3ei547egWZ8IW5tnCntZX/GpBU4AQfYXc/mPRnu24g1RHG44diSG+dNiXQwZ3rMm2DDoAb3YDL8CVr63pCqoF/RjV0bgPAg7KvyTVzvmo4WRmf+SsUVbU/z/OVQPAGMgFZB3sNiTKiP9PVP0E2oBqsKUHR8Jn5Zjn05dTzE53Q4RhfvakzLjR8jDMKIxtE+sZ4O3PsvpR8Bo5Z2IyiPOmcqn80CA+7fdv+Hd0B7UPWQqmvSaRogHsFx4XFiXC+r5SEKltOPnYQhZR0eKPW8XIgBzLVtRa08n7lXfjeQcHiMMaP8/8VfGfFnvd5/m7mgtCp3KdztSNp4vbgt23+ieOLeeNovw/Gn9HYYLB9x4SfsQXj+Az0VjPKuN31sMMhd0g6SLNf2O7PY/3N/7jBNJbk78umxdSLa51wLuk+88jmFdZfjeqlDzEgIFG0doHSI9tv4/Ff+j0yizXuWiLl3QDkyg6BiQBwdsv0n0Q+mQ9JKpoCFqYMPvs+H1US7v5jzqDqVWXOYC+FvAICJ1d78R4m5gzbRKAfHB89hEsV/kKsx/fUMRohRQ11HJlflMxdB1DEX/ynt2hBHX5rQ989Ol/7e4Z3Bz26XnJFQfLXH5xLAsQUBD/VKjEfFvFLYCUNd8nYh9zMZXbmDk/CUuPMNXbH8Jgu+UgbXM5OnuIdR/KqJ0YmQssV0mS0+oXZotGCojbFhUyeZ78XJjfEx7KOVElTTW55eVMzk6e+PCBRhX0QtZPTImE/KG+HzgdsXXAQLDb5KDKVRBGeLTiCksnIOJqoVWFnwAAA=", Ms = "data:image/webp;base64,UklGRlQBAABXRUJQVlA4IEgBAADQCACdASooABoAPn0yk0ekoyGhOrmYAJAPiWwAtSFBOz/lfygdMTvH3Vw3FgA3AG6Af5XqAN4z/ZsjVhLP5OrIHmKxkAHD1v22t4aUQTcAAP738WQ4mfTH2Bvfl5ovYkE7oCY+9iENkF7l0/SdBvGKvYZfoDGUF8qfuZA39j7pxwl/p87mI0f4NJDIswPYBSVr24bA+fRL8kSAPSoDAXpRrOHA0n3c5srZwu271nzTm6JNaDSaAKO7Kg0HHUshU8g0rjv97ys6swdkwnS3915dSJa7M5VjyyYeRx69WG+yL8XHuIQK/pX/3KobPYU7/KFRu03GD+KpoFKrytuUABf1pGAo04ZBgmaAleKZgCwIPqG5VuPew2tDU7tHcN3Q34gTvRpEdli0TVXl8tFjL5/HWO+t0z4atwt//sqm5C9f/zs6nemcAAAA", Fs = "data:image/webp;base64,UklGRjIBAABXRUJQVlA4WAoAAAAQAAAAJwAAGQAAQUxQSBUAAAABF9D/iAiQSdtERmXP+d6I/gdiOA4AVlA4IPYAAABQBgCdASooABoAPok6lkelI6IhNVgIAKARCWYApdvoeq0QDZ/85VFvX8qdv98zbMbMWf/cn3VtEgEUQAD+4uR+TT3eHyCqWsTrBreWz5CTJPD9YMxB/xTNgQolAP/2ln8jk+ftL+pZ85/zzX8nfw6DX/4Cb8L5rmhnpEyG3psf3Kyupn8/ViUbhI9Aj6Mt7sZvuX//okTCsDJ+CLM+fBcvk0QwRynUmBElxreecNtLP4ucf+2CRzaidsN5D/n9QVafXgFHtUxNmcvb1i2Ygi/e3Yz4ShVkH8+amEDfoPqYF4eu9RHKs9rGcEiV0+EaCN55cFTYAAA=", js = "data:image/webp;base64,UklGRvIAAABXRUJQVlA4IOYAAAAQBgCdASooABoAPpFEm0qlo6IhpWmYsBIJagC7LpzS7O2rb6otcgmJPwG5psKRRwNvQJOAFnc/qwAA/vXTJ/Nwy1aruxOHJ2IkKf73XxK7+P9W16bjDFOH7il6cvyqn6tgKSRnR3CWaCKeHMqZaJ/VFdskk0z/uDWVUWNLGljY59eFH/kW/ERfZHdZ5+d/9LD/w19wP/q++d7Nvv7xgf/YoAIlZIbWKtNXyxmmo7jc/0fNm1/3a7uocp7lkbIgmn9a3//HP6iAWY6vx4Usj4qQ6o3/SMxsQtI/pGYZQdNgqHsTGWgAAA==", Vs = "data:image/webp;base64,UklGRvwAAABXRUJQVlA4IPAAAAAwBgCdASooABoAPpFCnEolo6KhqrgIALASCWwAeQP0A/FUiGNIA/QAKgaK3PJjYeKcX3p43zMzJrdkAP7PXHDQHKv/P/ERyCwvRILMwTag1Z32+Sj+lKaVlDp6cnhQnO6VBikG+MSEIdiopSPC6D0X8rrK5l///dafjLz4Pig3GYi/XcAuFZrAml+pwLx3nZmo+tCKd79hDTrSA7B04+B47U/OnsmxujR4lMB4KAvvJt74kXEwTJf7DJMc/uX4HI+55/M6xGzFOV/+DKf5N/7geKX3Znec06Z2nZLf5R9vFfEV30Xy9D7+lwv0LF+AAAA=", Ws = "data:image/webp;base64,UklGRhIBAABXRUJQVlA4IAYBAAAwBgCdASooABoAPpFGnkslo6KhpWgAsBIJbADBC9b6B+KrN/7ui9nIAzRLcn0x7ADRGM65dkl+pebAAP73gZh7nmVRYD8eZV8f+j1+p/3eHyqCvVj5Rj2g+bn8IrTSpq+V4bGy78INzZ4eUVE9VhStpmmLHe5B1oOEUVh34q2Rwyk6ILpy/yOf7F+4v/VuLdtNv/8uTHGPSG07Pe9P/f6YSDxy4/v/jI7tdHL4P9h9yb+hsanaP5/zouNlVNbj092lT6IleCGwwGB2rU0TgCGayd1+2ofw1tC7Sn01n2g0ws6oP1AUyk/6FnjWgfSwZqZ7/mZer5jX8zL1fbJ/7s4EqMGkA4AA", Gs = "data:image/webp;base64,UklGRrgBAABXRUJQVlA4IKwBAABQCgCdASooABoAPpFAm0olo6KhpWswsBIJbACdMoRwN4B+InsCVn+qvQB+rv7AcIB+wHWAegB5T3sQ/st6OpMq7uAmaKWStLBCgoLb+72zd/kengX1aHXXrBVAAP7YlIsEfxRWKqalGH7Z5RpKPBLnSBXUogzECsGf1uOMs7aJ+n0R4eoFw/jDcP+XjOWIzoOzoCatJIvNrP/Y82M1fzEX//qcXkZcIohjWNWHyhzh9zXR8IYRKfDmAuFEoKchXrhW0MT6hwBSXPP+Nny/64N3htY0zt9Dur9TyhGg80XBx+SsRhyF7IVqd2zlVEYVYJ1C6CQrfziC+Xwq4qlTEwy9ISdQnP/CIN8maAl+Nvu9ISn7q8e32Z6H92DLUVtspBk2a9t9U/kftmfKx6Np/1hhYK5Va8Nb7Dap2eb+KbNgI/XqIommVGOSk9J4X5AfST6y11jI8znn7qXNf2d3d8jMQmLQSm3E0gf0V6M5P+JhHpN6OPTUHlx3UPML6JYMSAO0uW9iGHD9yz6RypO1c+GZHQKtknfir/E1RfgNYNImrDH9uh1URjVcW8iAAA==", Hs = "data:image/webp;base64,UklGRp4BAABXRUJQVlA4IJIBAABwCgCdASooABoAPpFAm0olo6IhpWswsBIJbACdMoRzt4j+G/sCVn+ly4BuAP1P3wD9jOsA9ADyoPYj/aj0aU8B7U3uhM0UsltKbvge1Fpt9ObUPzCEtOpzVgYNwAD+2JSLBH8O+osbWwFowaCEE9SfrvCMgKktOd9dpTIYiDid0Hav/MGzIJKe+V0C2tgIJ47/epi+c1ff/1OLw2fq8uZo+ybXwXGHX+UyBMyvabzilAqo1xz1pQlXVnvHXVfG1HizDQDFk7+lgYO7cVY/hZ381babA15nUJNniuLkDymCXRjkfOfAmhivG1IAKGu9x+MCuPYPgQF3a57jaWNWKVkN+zT41eII/DFFDLbT34jjiO9waWBI44LYtnYuuKZ3Fj+N2H+s+cPH+bnq/4P/fIgZnnPX0XKG6RW5JOBmWdDS7jDA/lKNPphSzRDDvmXga/2dGyJzmpRpnEnw2laB4AWS2z2HDUFNSFjzhxPD42LA/gwD8uH8lpQz/SPbxPZLjCOZd3hwYTP2pw/8+ofAhvwXwAA=", Js = "data:image/webp;base64,UklGRtgAAABXRUJQVlA4IMwAAABwBgCdASooABoAPpE6mEeloyKhNVQIALASCWYAyiEhugLsA58D2UyIyKLrj3X7RD86FKasmpRCPr84/5AA/v33ZNkCOHDlE/FzCwTqctGriFLkm+isLD9vivqtAaa5p6DmcXiXn+8z6vG0lkbt4PapWFJCVaX6yn5fOz3FutDpZ09uDY6rB7Kn6z12j+euX+NnHUQxLQ7x9hZAkFyTw/AM2aQ12dOJhNKaeMdthWqPmx955S0qstpNp5eyjWpWjw6zeKMDsM1AMtZIAAA=", Ks = "data:image/webp;base64,UklGRuIAAABXRUJQVlA4INYAAADQBQCdASooABoAPpFAm0olo6IhqrgIALASCWwAyi/ybAPxAdADn/wGZ87DA4Lj6yqM9xV3M/VgAP0cEac/je+Sh1FODLj8RDfy3lcqrfrC6JI3N2FaPNNFz/+N4HVdxySzS//WV33WTwhhFr3BzgpqMnam28y+i7Bgecxi1RhjoINiYwbeocGqaTpAijblonAArO7dN+egUtbF/getMN1xHy3Yr5Ux/BrRKHr9jfhb/TEqiiGPEU65qGYMR8rffykT+6e6P9Uidmv8xBiLj5k8AoVtAAAA", Xs = "data:image/webp;base64,UklGRn4BAABXRUJQVlA4WAoAAAAQAAAAJwAAGQAAQUxQSDAAAAABF9D/iAgoiiSpWWlIiCeNP++zmQ8MRPR/AlDfSR7YLXBZRXYnFV+TE6nsRCo5UQxWUDggKAEAAHAHAJ0BKigAGgA+kUaeSyWjoqKlaACwEglsAMjHontdLV8C38l/QDDAP0A9/+7rv1JILMF48RHcqCOf/UmxwiQ0RLMAAP6t6ZI35QyqlUPi907H+ZaD/VnS/71f/TEqtxukOB75y3JDnLNNH2yjNrE3EL0F9PODwWVnj7v/iZbh05wP67vlxqOB/9hiU69oH8SD5ZrCLoGlEYPl1xAVIB3ix4FnrqK6/iV5/7r+lw4n735bv936OgnBpuFf/6Gbh2EzP+X9pP9Df+KwZ/Pu6BSJDnmkYVcO5saoFCscZ0ASKoFVqdEX4vqcLKmPiVGI1qMRMlpIW9bPU6HaKacwCAfL+P1d9nL6P80l39n/1Am8Yz/w5T/hyMPSsy0cgJERxOyCLgPw6YAA", qs = "data:image/webp;base64,UklGRiYBAABXRUJQVlA4IBoBAACQBgCdASooABoAPpFGnkslo6KipWgAsBIJbAC41oA4wHPzXdKxTOlSZwMCkneCHbWwy9j/c5ZuKj9s/i4AAP75yOaRsRx3xk4V7GfzjHTm0hqVumJ1m9HuYooVz9z3w0faILsD+Zpvy/4vDzAFAurrhB0xUS3bSrrF8jnFyBvcHNw7xiwgniuk/CzOBYO3B8IQ8a7ord/XOKiQA/D6X/8S380JReUDXuA3oYKxHTamTWkxfFvDwg3/OSBF963PRp8ijj7wCx/0/jIc9zrcSe9+oFsFaWGTtDgx0WTsoP0aJURJV/7kf+mNwTTYMFd/5kvKXnb73AfcUdIK5NebVeDW5p0nr/8I1eo3z/+Eav/9xn/y9XBwo0LwAAA=", Ys = "data:image/webp;base64,UklGRiABAABXRUJQVlA4WAoAAAAQAAAAJwAAGQAAQUxQSBUAAAABD3D//4iIQDZpYz7v/9A9ov8Rdg4AVlA4IOQAAACwBgCdASooABoAPok4l0elI6IhNVgIAKARCWQAy30ALsA3lX9ZiNq3QBy0SeInqm9xedJr4q6SvfKYfN9QjAD+/i6i5H/i9CWQHcNMhFSYWc3MMEKpadN3RpXj/j/1JF3KQ9Uovmnex9f8iaZxl/A8GSzxWHYnTOlFtTF2X96ORtkAhe/7JB1W3Odi/FAX9zdk11ZCopY/gAuf5z8+//ukVxF3Ql1wbTH9TIDHqPGKp87/yQGTONpTNeHXvAn5+8JfuSIuLYW7HTAPQIPrUjb7R/i+BWyw3QNvjyl9/n/pXYWAAAA=", Zs = "data:image/webp;base64,UklGRiQBAABXRUJQVlA4IBgBAAAQBwCdASooABoAPoU2lUelIyIhNVv4AKAQiWwAuzPagJ7ANwBVANsBdme8okREL3XH0Auzy46MRveLb9iO6TEcAAD+yt2+ul9a0shCB//zRcPKmTQyIauzKnrlThwS2GJABUE2iS3j74jP8nSNt9YK5//mwIuLmgLqgzyKEBmuzrz+/srwmkN2Tw+Sv3gn57O+pKiYtsr+HLbuyLyKx5PnGuDTQRQgCpSj1Gfznxyqn3WPcDI5JoksBbvoKhKxqjGA8i4n/jqFIuiGmq6S8mRvrBXFBAJ9i/ZnF4j89qtjHfiy6LdoP98/UTnfop3y6tEKEwNX34z/bmeHT3negtHUYn3/qw7/E7GT4gP69lVpdSk7Uw6AAAAA", $s = "data:image/webp;base64,UklGRqYBAABXRUJQVlA4IJoBAADQCACdASooABoAPpFAm0olo6IhpWswsBIJbADDY9b4A4wG4Y3h3eTEaCEA5OjOL9CbqATRL93FvitXUCsIf0SXpN/VlRvhbBEqIsP8b5wAAP77a+3N2M/ct0BF8mCR8oRucSzJBoODL43vMQYDUVDSrYZSTeWarXxZKb7fvibjG2LkYPe49asj13bj//4hxt5LebzIUP36kyXJf97obLg9S3IBj0hz6GUzdPyzNUqvUcaeIRdtN6CVMP7BqgW9tVxucnY+fyNRRj/Fs2KrcWZrikQyKdmMcWenO5zfk3W+KfWriKvRxFQFw5vUDn+3FX29+Lr0VtD2Ya2RyPetxn16Lmwtj9yQuek+LtLFn4f7yf8HnP0/O+++eUzZwkbWZ/lVdqEPERBfMIqimThbzIU42XTdOHOD8XDP1d04A6fvBSTMoubRIXpkOsxboJB6AtsaCfdbKJGi+86B9b/yrQI4mMc2vA7jtKNV8pqPASifz9SOkP4ljq/xruEiHmVHtzEJPeTVSWIm1Jf/D/Y9vTCcYSvLlN8b2c0AAA==", el = "data:image/webp;base64,UklGRnQBAABXRUJQVlA4IGgBAACQCQCdASooABoAPok0lkelIqIhNVv4AKARCWwAnTL//7+n8dHuDuAeIBuAP1r3qDJQP2m9CsmUP1436o3YTfU4jP0lf8RB7beujkwtSzEPjkQYloJAAP78E+0uPeu5MivX1K8sQ50cH4pVMCsIT3CykYUgPSd37JqEbxwHl5jWA9mUSMU/vlyupcmaVREb2o/Z0oYgckdk3sdLDUE8v9tLExYYhtN1r7J693B/3sy40FJW4P6OfxbYP/X4H16pw/qOYl4oDTOaVwWrAIPVYH5BcyUxtGWM0d4f1FOnk6Y06+gn6dBpWdvBXV2MVsa1Hx7LGq4vj6ecg5lfq9BfEH3hFUhaDJWLn04rTSWfbWV+qYfpik0Nz1RZYFlfujaAcQ/LuYQi77CsefBGlMDRvrdx3RVqhQeStV/fPx/YMyO83gsR6n0BfPI49RhMiYW7ILYHX08X7+p5FdThpq8Mr/DtnFn8krG8AAA=", tl = "data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAAAwBACdASooABoAPoU2lUelIyIhNVv4AKAQiUAY3oQndABhNHAiDYJCkAAA/v1TVl2KxUl0/6mMmbv/H/9GBfX8h+Ef9GBfX4RPC5AiMdhctoV1u8xrXO2EgMZDMRzMa+xTx/JlMVXQ6cMoarPfgucPf6ng/xyomwmhBHKqzQAAAA==", rl = "data:image/webp;base64,UklGRnwBAABXRUJQVlA4IHABAADQBwCdASooABoAPpE6l0eloyIhMBqqqLASCWwAsR+cxfkALsz55H2Gf249MAmbw/Px79+FUkfl7HmN+p41n9t2t5bWU8vf8AD++Qu3oxejM5ijyYyz/fOkipzSL2O0sZ078fwuN3AEBt/24v816EbP3vjGXFPgOysfOsTT/8D7mvxO8a5YrQ3uC83olWfh13bwfkzTHQZjLsreC1XmtQEr/kFLkpzNaFrtBSjGfdbb3TW/qSxAJbFpjH2Z+23cNnNcU1fL/uY/qtQhBMBBVsK89m/0wB7YFRUWezULOTf84eo/wnUupJvda9xzE3nBI5//UB+Jj8JSYX/9fOoALxhB8VCbKfDEOmxu/Nf5N+U5fy8yWcU7OQk5hN6cRPxPtgdLhNk1rGz7GPP/H37MtZcFXNVrN8x4UTiNGDycN9XOyOMR0LVwd23WJ2K2/PPTTVg01Bh/txxCvSVIzR0mRNm1B4DpWr97+fIK+wGDrzwAAA==", ol = "data:image/webp;base64,UklGRhwBAABXRUJQVlA4IBABAAAwCACdASooABoAPpFGnkslo6KhpWgAsBIJbACDJUKeu/hL+QFXRXIP0AxQHnx3Zn/IOzjbwH8AYbQJ0hjIwX/j5XeVHj0dwYbegAD++Rf3QTbwzL5Soh7rbOstedEBYczF/OpwIZIJYTzVDoiFaNo1YA38/o95VT/+e+io+jn8qCVSPXSIiB7RpZWgnyWQCzmNvHCtgFBr//8dsp0Ovp9pGYzH/z6RV9ABKH9ceI2X1Jn648Rvp2BbVdP3JMNLP8OidtaxsAHd16jCxNkqBuoEZ0K3pp80vgd9gmqeRGGvteZcMs0bb2GxNm4g6ladlRo0GBobDmkOBf7I/lCJ3fMuXOkupMXA/4Gd39g6ZwAAAA==", nl = "data:image/webp;base64,UklGRoQBAABXRUJQVlA4IHgBAAAQCACdASooABoAPpE6mEeloyKhKrgN+LASCWwAwQvWpcmET/XG6BpApkHjNfAIV/xMpAkK2HeKUSPES8v+mD85PCUmynTg25eAAP7+lDMZLWCDl/G8gOBu6d2pum7pyYIQ/clj8Ta0H+b9eAdC92wGyBS9hxoKhV0wy2uq/TtSUMfcaWec5HTe/HH/uJQFa1KorHVwB4k+YlTDct2S+M3OKFLZw0poB8u2sSUqy/Y3ivqUr8Oxb/vqg4RuZzo0uzb25iz8DA99QQhhdiQA4rZf24orz2I7bgfNxqAw+5HT211lSKWFxyFTO9z6bW1L9vrFSma/w4zA8WZM/RvYnVWSCTCrvz5tCkdYp2/TDqXlq8yHFg28pgOw1/+Di067MGvFZ0pe0c3smdSwBjoL7RDpf0Wdi89b9Et3ytK9tOIStZA4SDxmQfkZRlvdtY8HlFGWBxRsP69tFh67VOeR1u3rLlYOfR0DY08HanZiuurGUYmRFcgAAAAA", al = "data:image/webp;base64,UklGRiYBAABXRUJQVlA4IBoBAABQBgCdASooABoAPo04mkelIyKhMBqqqKARiWwAvgmN/gGmFrQGqdERIUo/etTyzbI86h3q942qLFo/AAD+/i7XiNLxGhL9pDmZ+/7zPHH9V8+B71AeXCDhcwFXyppAJ0LJin6hwEqe2R+ZktkMGhjQ+pU3nEGkDuVdy959TUD08VqfxTJOgv4Qx1fv7iN6JtXueXTrYCVvd9TGh/PCoMP0OwO+xhv09AdV//RgAgv+Fza0pdYJfkdNmradbYHt6tLg++P7/LxTqMrRlxR6ien1gc85l9x/CMEjVGXtkLWzcC8OsaNzhbClIHrHYzqLZqEpfoxiaDCQFvqmu+gILqmdx2PE40P9xKOP0X05Xj//HZMgHng1XH9sAAA=", il = "data:image/webp;base64,UklGRm4BAABXRUJQVlA4WAoAAAAQAAAAJwAAGQAAQUxQSBgAAAABF9D/iAiYadsmYza85rrdEf3PHsDUorNWUDggMAEAADAIAJ0BKigAGgA+jTaXR6UioiE1VAwAoBGJbAC1Gz3D567Jr/7lhSW9AdQBvIP2zEfuUXXJpt05xR/wZNJsXjdXARUwWn9TWo1AAP7YlJ53DvRdSiGXkhrdmS5X+n9/aH3lz79jqmmrjDs3/0JuMnu/RLe4V3w3vw39eT6zan//U4+hF3/pidbmHj8hYr16O5/4ZQF/AcsfSiAgd8mKvtl84U4dKKrmS5DzQFVtAP6jahd4MI2NS1O0LrWtO7SmxZvLuCZYVyBsnPCguDbM/+7dY6Dj8qOksEqZfg4+1X5rWfjI6ToCbP26zz/l1hApSdPDZbFPb7OWthNYUaBt+gfTRY1RkvQVN2cq74Gn0IW0bU8KXulYKNuy8dNv1cTc3807JjjsaLYmRi6l/i/gAAA=", sl = "data:image/webp;base64,UklGRogBAABXRUJQVlA4IHwBAABQCQCdASooABoAPpFAl0glpCIhKrgN+LASCWwAnTL/9o+4cIZyd4geoDwQNsz/XT3zOjVyUPyaSZYOTrO4RSUSijIssVdhrSotw/5b38vUPmKYAAD+68n70V8aq51jlGNETLSmNkQP+s1fyWCMVvf/1lf8yLKvyotU/jKQfzjiLvXf9f/xNf7xKkDnqxjZDUfcsKx0YhPjOfJ4bHX/cklH+shpWG2fgtMl5WkwVOOSAuHHXQVHWm1hPaMfxSVW9nDz1as0AiJ5+1zg4a/sHPqWq6WMVzkeySinsT7mwmKw5rb5NGxvxCSg93RIVxPT/u8Coi8N2GicjNyaD4z5I/7fhrRZh3RtO25sXQQSBA54UxEomB+fJ1xcr4OZojIKIxBcj5B/z5x+cYgOA+l+YTMnqt3Z/Tn9T/TLyneu4EGsa9tNUGqbBBW6mc+fYNpFEPoPFOWuF8+kCCpkiLXP74i3/uPzf6SxcM5MVAVk1SP/aUX5vcR16wZoBdAAAA==", ll = "data:image/webp;base64,UklGRlAIAABXRUJQVlA4WAoAAAAQAAAATwAALwAAQUxQSKkFAAABoHZt2zG33tP1zsROardBbdu2bdu27XYbtW3btpXUbdxkOhleH57nfd/J7B0RE4B0NJaYcsNG06kRUQr+F7PMfOugaHsyJOD/IPKwg+ppv2aQBFfuPXx497IB/4mcx6nZ/qs/ENrvfKKDtMcda+ntfj5/UKdlOEoetFD1x8osbtc8RY9zcsXH1OrYldnNPLdS7/kKV6ndudzLvaKi9ZjaL6Pe5ObuVd+s52ytz7p4ItCtOtr1TJ5O/cnV3aqLQ4e53REXcKxbNbXqSKh71wX2SfCPLFO2WCajW5SL1xFf95G++AlFh52MSUz6dve3Ot5uEHJJR0Kde7qi27e4Yac8aW229MNIh7bUJkf0fG3VL5YanYfypl/2y9o4fJYO68hOCdS+N2O6oVa0toMN4rWdrPiEOh1TlHRDi3eaTmb7R5Ot5yLqfltQS2De8PB8GRVdStWTFpUff4ej4H0tT6q+0MfRWka+excdvTVQFxDWdc+L+MTYh3829AVQN0bD5i5WF+wwaviFJK+GuADwzlWqbPGsRohKw9tOldmT6cJbYVAMBgMA5V/hbIBL9OaZ/dQipPad5YpXRWb+u279muyAcZuw18MNYMjVesziBUNq+850xfMqMSTjCgGeR4QdijtoHOR0wbmSn0jGCseF7e5VNdkFv0R81rHNvULO67O2D/9C8ntBwOuksNW90Muiwf72wMp5i6aGFP2u4ndO2AL3Dt6lYr8+pHSFhp26dajeJYnk1wJAwCVhnQafoJBgPyW9EHFOkjy/xOBzsWa7w2ZKcZL8EAGEXBcWCEpohQErDt+6d+fMmi45ACgFa9WsWT2XWkSNGjVrRiFD1RrVqzQ4Yidje9U4Z6fm6HxA7tfCOKHjrUQH5bYHvb2BOWk/TeZNXrLQU2aTKbU/eqeaUs3rss2I+Tm0/hvqfJ4DiPokjADgsYWaTcOApmaS7wvIGplIvonCSJLcbTAWaVLiAUnaX+7esuXYF+FaMJD/i9AfgN9Fml8d+G36+CVX7CRf5EO2hyQdfSTGdSS5RsE4YbsCePxCkvGz8hoBzxHCOT+g4DehB4CgLb80yeUNANkvk7Q0hbKWJHd5CoXfk0yoAkwVtilAhe8kE7sbIfYUzvgAhWLVDCFGyIMvkHT0AZqbScZECRNIcr8vsELYCGAuSa7wgLS3cMJLm7qSebaZpK0tkP0RSUcvAKFXSFo7A4bNwh9A8BWS7wtDPlQ45gkUjhO6qXnnab7ojpUkzXUArCbJHZ5AExPJm5kAjz3CTKB4LMk9niqzhaOeQLF4ko6OksCK4/a/SaPcXBNAizSS7yLgsY4kxwPwPCqMBNpYSU6F6kphjwdQLomkrS2A4J6nE53U+LMagOyPSdq7odB7kjEFheNCf2A4SXZXMWwX1hmAKskkzY2BrFutFC0fz/7ynWRqVQDKbyS5WRlNkr8ZAPicFnoCY0k6u6hkvCusAVDfRDKxAgzLSNJ6Z0mLSN+SQlxpAGhtIfm63CWSiTUBIOCi0AMYTZL9VKolCXMAdHeSjC2G3K9I/hifCQAqJ5OMjhRyPiVp2Z9C8pCfkO0JSWcXoJ/wl1Hi8TvF8QD6keS3wiiVQHKbN8Q6ZpIvcwnK7yTpIGnpDDE8hqStHVAhgeSX2oLSJVEyGkB/4UsUqiST/B3S+haSD8IEtLFQfjuLpMBXkim1gOCzJPm8Wza/POO/UjoKwADhcziKxZJ8XS/QLzCLbwMryXshklzPVSZBWiiWZGxxAL0tJJn29MprG+Uj1D6FI+QCScZdPXP1TtmmNpJ3giWGf2UxhWSlEkh+KwQgYLMgfxIrDAMwUAUtvlKeUKy1neTNIAnaWSS/GmS1Ukh+jgSAnNtsMsvBus+EIWrPcwDGTq9kTzP3dZI85y/L+1pIqgV5w58kP4ULyDjjm/BufFjmxyQd3QEAVlA4IIACAABQDgCdASpQADAAPpFCm0olo7+hpFgMS/ASCWwAeEn2b8VeSB3d7zbQib/sc5QO0h4kvSv8wHnEaYf6AHlt+yUv59w6DL3ddH8R5lfiWZ9dQAFAOp9MNlg5y/5CfWu733yGwFUAlfCCSBqYsTkdFXIpgPZ74YmPVdgWIAAA/vz5N/oIl/zTt+6uxX9j2RX/+8Fyo8f8FQNH7YGZtZdnQ30vbzV9l/YmVpA9o/uAfGs63ZB6mXfGXe7+b5L+gSxpZhot7lX/gRV/aPsb+0N+BDYjnK9th3oc5BZdCeocKV35BgOz9Htd4yJcT0jir8z7w/fVzmMkzVub0cXmE19z/kypImRLce1xDkCHEq1uEJDPDVn7ifqm7+d//uXk/dFhqEZMPfpUDK0kmSyUVUYUlVsVKFXOmeOCR+jBjJI5/+fNrdbnDIzUWDrIDz/xljjBH/uFcHPaZmA/NQ5blLbMp+lo5pn9f98B9f+WS7cT8sLGwDBNkbyK6kkzd70OpLlIGYCrxBqOPnpF6asUsefhrvo+tdKRR4Dz12V6I1yZ5gTurZRUN7X9cnlWn7h1SSXn8UX0Shwn2/Ygx36YRv3Uxh4UMSKpztLGpxwHvo5aS9hfkmgNB5rqGSZiutbM1rPa3utVvWyHfmOxd7RPk9EPDev5XjgnooIK20MitjU90+b250KCktfafEqdG/k0GGkqVKFCNTc+8iXB7kT+ArJdmjqrHhE4SnQMxHbVQJg9v5yzBoGskAXbNATfaIT3W7gfaVWLvdY9RL77zhmWYMY3rk49dJHe5AkBizp3Sdgpg2tLBHOuZwrxraIC65Pekd/jS56uucpEVHWBh0BY+rhEAAAA", cl = "data:image/webp;base64,UklGRo4GAABXRUJQVlA4WAoAAAAQAAAAfgAAIQAAQUxQSFgFAAABsMb//yE50qcR20lnYtsYq2N2spXVaW3Htp3BxbZt2xmGw9se3tTOdIzp34Oq6lx0ehQRE8DbtBTv9m5T3kY+5YBWXlCuORAANKkCFZsAVl/vwlAhNDQ01Bu87J26tIeSdrt/UaBGbU2VwDJGDezBNr26vkV1WgeWeg3uLAXbw6+h227gxXew4s+gbIDCl3dtu2Gl1dLdmUsnwbcxCxeOgLaZC9feLgvDxwND765P+tBg/uml0WusYFl1bVNCR2Dd6XUJVV+DnCYszvUg3duDDjFQHMD3LMC389C2PQ/Lv9DzjiuOzWkz+AbL/s/hqx1m/O5YKPKsEMV5DYbtanh7mdFz++82o5LRF0fX9Shm4cKO0PZymcoXeuiNHQ2s/cgD/rIKdvQG4hvDzjszOrwOtS/FDIj0gOFn1xlg8Z+V18iT9W3alIO2D67kLkBv+BxgT29Pfo6ETX8F0z+qAy1GZDteg1pBJ0wembY9Majbw2w639eTeWjbnuf9i2a92unNCE0q7oEtLgS636zAz8eg2CcFWDjmdQA8onicQeODGdl7i3iSm5BwSofdX+rROTb1bFMMshNi/wbwVWLq9kpQcW1G2tXqr+7Vmgvx6s38S83oF+b/fBWlu5cmtAuUVhSHF1Dd4XA4oIKjLgUc2vJA3Z61dFr1a2jQ0WGmsx2qKnWoqVSDzkoxbEp7wKL00/gFQdfuGluPpjr1+rcx6TVxOBx2RMQ9E4hPhRYi8rgTfCIiYsIuAykj2hBMkSLuacBYERmmt1MKkXQbHPI1n8j7ECU/slRWASEiLYA9+T24nQD89kxkc0H46IXISr2pInIHOdfxoNiNVgS/OKAZ2Lw5Opbmn8uc5sX4k6wK2CndIT2ny+jqRoXNL5Xk9Vhnfs7jcRpR62ra5R/3D5ff4Lj7ve99jN5r3gDZj5+MMzoxWVZrHuaG6UGIDAFWSxUaSRickOd7GxiJiAcDIOqpO+qJxpS66Xi0Tn5UagKMkBAKPjsKkeI+52fkyv1JM0B+MRJ5XlOzemCXl5kvrQiWiVDllytywmjc6D9uQ5CMZYQEQ5RznyzWtJctB6WuZqRIAnwjH2Jzb4UynxxxZxjNGtgOSQzLuV/DaOpo+VyzZ/bsYi/R7FlymPNhXSzxx8LkjFEhkm5DkezcCDWruCYkq4Vmqpw8J4M11vWacllqRLw7FHZem3s/x2jV7ImoasaRjsClOGiqjikSf7MoH7tcLlc5glw/AAGunwGCL7jOeEPpyJT8Wz56610Fib4K+F59cMkHOB0P5dW/w8V4U8HU/bBBtRS7cA1ocjj3ej8wT7773DlAb6zL5Urm/6ZrK4pPMU0hpY8HVXt5m6Gcoz60Vvq3tmoqKwGavkrPGjodlJqATSlBfaUSBHfXBCkVX7cvRCQjAOgtUt9g8HORk0XwlxEQLiIxtYCx8kcBIE9EFpqA2xIB9JYdpt/EDteygEJ5Muz1G+TISzTBsowXg/TauU/5jplW0Kj3t+6twA2n2DVRHbZJP2gqTqdZI8M86S7OS69ff1aIF9bsZZfP6Q2VzmgNahOVBbXkt4fhmrM0lzkwJv8H8dbkv9jnwZLc4e7qb8BhdwlCZO3JfJvOZ/IJpYp5UiDtLgyUKYlOk043GQPXM0fKdM30bDGyZN2aLT+8dtt3yVYIk6MX5VudUs68sBupFYwWnZeRcPbB4XjpCHm/L8h80pDacu+welfzrf25UaDEHn50/DX7i6reW1AKU8xlimVs0aH+gdxbn4C3ayDMUNWYoVYq/HMprdXRkKJmngiEb9SuTFUb0k39jN/UQDiVAJPUZqzKLg1WUDggEAEAAPAHAJ0BKn8AIgA+kTqaSCWjIqEtWzpIsBIJaScBvsWhkBwg1gW76nMVo25iGEWEafn32DY7w0E5h6fLfmhgtnuEddrqXVOUAAD+9cA//+dVtVfxP8q//+JuTcy6725oc9SsCmgRe99j4wrQtJTJ4TBfEbcvUCKXT3+hdn6PKoPH1syZaLYHlbjZfxMe0e6UbD3gcv4FiNoJF+ikpWyj0wdQjYwFgrqBSnUTy2AXx/kU//+fp60HKeYZTEqbKKZIPS1HDn9lfahUALdeW5ubWO6wqpPi14v9H4TEW4qZI4I6paT6B+Z7hWzoXvr+DheOp+8HR031AAQeH3YMOrNAS7mqZqOBB85EGwu4FRZ0LIAA", dl = "data:image/webp;base64,UklGRhAIAABXRUJQVlA4WAoAAAAQAAAAigAAIwAAQUxQSMoGAAAB8Ib9//qm/f/dEhwqg9pIoVg3PEWKO7U372IBMncf7jrBnbq8cd6Cu7vW5nWBUW9xsi7FanlceL1emSDH8b4WERPAM9+ZF8dhK551fV2Ars3AxQgMBDo2BfeOQO1+feqDm5+fn18faOYfENQTnPz9BzQEWrRWNB3UWKut/xCDWh/Hp+XaZjA8/AKGHQWqJ8C298C8C+r/eORASm26bj56e/MyGJ+xfv0C8L29fvvVJjB/CTD31x35b2pExG1O/V9twPBk6lNzvyMby+y42deOXungANA3AWB8BErfJNj2qVqfTAcMpZ4aX1Lr5KfAgoXJT828I22vbrHDv8Sg5ZT2w7fedmWsX98bfH9s/HJysNrCb4Dtb9vBu/8FXabL8V5PS+sf0l+LtYP5CTs0qDVg3e/t7dnVvbsL+D74qSwKtfmhwLGR9kyNBb/cOYc3Pi2tBl/S2aU78ETDO1ivSzLZE4HSN4nXv9ertb7ZGb98BzsMmUNh5xrzm3cdnhbALhwyNTqcvnX3eAN7fs/NvaLC0c/UCMwoTOiExt3cjA/A5Z4j7Pro6fhr9fX46/X837pBXWfnZ1ntRg1d/z6N83Kz+z7Dav1cmPK2fe3GGBUmk8nkBfQyeUNtk9KdJqPGv4eyzfDWWv80mUyvqI0xB3up9DZ7aQwYAQ3MXrib2wL67sNcgcCxOnqbHcDX3Eah8xndCqg/4sPpKA3BnQD9VhHZBHoRkQ8gUsT2OY6iDIL/yC+KCJvYQjTuiMhctccitihFnoRpxD2EZpLtNFRmg0ucSLkZoqUz127UgjTZCjidFamZCSyU3+oAMypF9tblY9nab9ckRZzR2JhaT4oDlrigN34gEUYH6lhKpSW8LtsH7JdRGllGo5vGT72PynDoJqWFOvvkgJ9ig8wIyCn3oL/MbiUh4C2l92rDalnaZ89wIKVU/KFHzcUB0TKDHeLR/LPPvNBLVdl9IE0qDngBA2UBECTjZTpsES+8Zb1GdVmZi8ZFfGUVLK2eIr721cgxRdFV+ELM6PIvTpSeMFsmih8k39ehbCUzHkbDAhlK3crzREmXgbckGL1kz5wOeM1Nk/12xMr08jhYJz3pL6s0SmbObGDHSJkHmTcWyjL7dqaJIvVOPRZKAKyqvJKrg0TLHImCs0+aYABmyoq8Uh1fypsYbPvpW1MQU6CSHxIymPrFpzbJES39zbtn82s8aF9RFFXyuK3G7ZCQERqFkXcfedNWrp0ty7JvY8u7is8kacOTjLrQRWQZGGryzt4r0TFSUqPKtkPig7NZ0huXO5aYLJsfjEv/7ZglEJ3VarVOwmNriaT6AH2tM6GH5SvGWt6FgUnWhP6o51qt1qVqNy23L/SHyRY/1lnaqJy6CQZLOIH3J4NuYvb9Pc0AfrQY4QPLaL61dIW3MiuPdMP93ma6Wb6BjmfLksfw3G5R4MkL4/ok5xeH56+H54uDLm/+3yzIZDK1g6FmZ9zNfTW8xvTRg5vJZDI1wNFsHtMCHM290Y3zh6H/UBiG99MrWg33Vuk8tqNGL7O5F9Da7BXsY3aH4WazyRUYMUBl+EBFq9HdVDoMb6bSe3QbikXkW0iQ+YTLATX/CpGz4C8i4kVbEakYjr40Bx8Jh7QbwPRKkfiGsM4mEgnMFpElajtEZD18KuOYJUOhVEQK68DDOBVrIhBqE9mnp/YukerZQIyI7ZPi60aju+K2oVxru3z+UbBindFYh7ayc0DFZQiXNnOlj1qXmoR+C9bWwyR7BuwWM+SWD5v3qtaQS+JmV3brA+L+B0bJwd5hs/RMk4hBF209qV1R6L+0SXFNWZkBEqqqU59ofSOSrPK47CC0lfjFtr3QW8ZfKtSpzZBglOvFmxayBY5L9ZlOWguvP27EJ3ZU5Fb9lz8QJR1Rnq6qxyD5BjLlyb7mxbdmznSAhN/3yEYtx9ePVj9uhL8cnTlOIVLzKuhyr1SuQu19+QwnR1gh/egpIeA+KUl+0BLLBzBOJhIqnaD05pwjlb5/4BsJxLUu7BJPXpPJ4DU/XfYW3wsJMSl63e+k9a+siNtVDvjL5ZAQT9pK2GyZBCwT6aLhUGKN+qXUk1cel0QVVXRE98vlCFuyVmMA1we3Yx7m1oHSOyvPyXvwsCQkxKzWvPxWxK8Z9Rloy4m+f8+DBiUnN8vBLKvVuhpOFUJ9y3/VZmVW3B0Pg61Wq9UHb8uKeqnXHaGT5SeAxKtAmxOVGZ8D/RKsSYOgUWRBzfUhahstLykISi+P8wGyLJabOx3hptVqDYeSs0D3y9bUUcCo5LJzRmi6rURSOvPUvrRxCi+MozOGP3sAVlA4ICABAACwBwCdASqLACQAPpFAnEqlo6KhqFJKALASCWlthqgebACXA7MGwLeWTtgwbcRleKgBMp1O3WmUShazdMpshAk4+MzUDmTAAP73ya//6pEF+xBTn1ga4OGyiZCjeVj6GTpI0K6CSPvU8b2JG1bhEFKDlYwT9HAFEzzE1VlZieT8x+f6J/b5Ldi6rpYD6OrYx2S2vn3dGsAm/LNz33LZJ6FW2aeNtAk/SbulANlRqGbUWIfNFD/N4XrBgS+iAWpxvhPiD7fLSaUBKJMgIm0Y27R0YkxxyFj/d822JDz6h2sZx5PwX27Xr5vAj126UGLRkYWotGiQjQSqRiK5uv+aWhgv2coyIK8L7G2Mh/ujFAXp8oAhh8GKgjTQlkqqMnYgAAA=", ul = "data:image/webp;base64,UklGRugDAABXRUJQVlA4WAoAAAAQAAAAOQAAGgAAQUxQSIECAAABkAPZtmlb89n4tm3bth3Zts1n27bxbdu2bfPMYO9z7vmMI2ICUEBqC3WT6oWhY+mKFY0AWBUQHSC1oPzF4VVFhYY3+DPI1LCXZDEATpR+uxHTTgvJ160Bi/skOU+XkgCcZWKQseDh5Be26wf5wAKtKZ401aM0AFdyn5NbcNprkiMESwBo8Y3siHoSXuylQxkA7uRyALDaRm4SzAUcIIfDaKeE3FFfFw8V9CVPatlFDgYc9jy/k/qV5M/IUr+iDXlGyzGyN4ATZOOyMQrJj072+vUhjwhWAEynK2RTWVOgxUGSfDzeRCeTDHKzcODoiRtvSR4xkjUDgD7XSfLyEIO2Lly4xucqydGC6pZikDUXYDbhKUnubCArJVOPNhJOn7hPPq4P6QmypQSwXfWZpJJSXiihRbkX3x0QbFD8GTlCQysVoHyCQvLT+l3HjlSSORUoUMAYomAF9CefFVZrrQFospfyO0Uly6EuWADYQoartdEE9Lsi4UpdTAHU/M4ftVTaGgAzP0kc4GaYEQD4kjkqrQ1BPckswMWgnxALvSGbyFoahDUKud0ccNJmPGbCSAmaj5hQH8DACROKGYZ647sYA2g8YUJdDf/blgv/xPkTJkyYMLIASX7Y9CXz/cEnzz+dv/PgbsrHu0rux9Qf+55y39OTt6+dvcH7T9/y+tZvuT8+3Lr4av+5lGsK+UoSnJjVP3/lppDEKYPS77h87n8q5fbA+/5uXLTT3dnznP+NudsvMCjNK3nT7d4dAi8onmHf1U65ng8567rdOTDH7cjBZXvXHJ+Vs26n81ZGZPulJcZnblp51fP7Huczq268ionZ6alk5vwgXznc1PfEzd/wFABWUDggQAEAANAJAJ0BKjoAGwA+jTiZR6UjIqEsFV5goBGJbAC/Z5h53EgPAr20D1wNMA57n9gPgZ/aP9gPZNzQAKY/v7DAvaEbPVZroXuTmam713xtEgU0BXrn9+DfBAD++VpUP+UrETGtFjvbFn/9YD+P/y/ewXq4APbtvjacEO6myntEbLfkf8xphwNIH468zXOyHjyQj2ZNtFbaKY1Lq3NU+QeQaJ5sMCzTvsmox0El6KXh1cJLdJTafg8v6G9D/967M/cgPUep89JutH/ys67pNiHY6jVLprlWnW9At4f5XFi3QWE1bq57p/wLz1NEos5n/F7/F/Krp5nL+L+VXT3/jKn/EhdcEAjpooOtsjO/KxiHCrsj0QmPADKjgnoEF2ieIM6Ey/8LnG0/oUEAWdY35i2Db2CC25lH1RfMuaOT9X6gAAAA", V = {
  MT: $s,
  AC: Ms,
  AL: Fs,
  AM: js,
  AP: Vs,
  BA: Ws,
  BR: Gs,
  CE: Hs,
  DF: Js,
  ES: Ks,
  GO: Xs,
  MA: qs,
  MG: Ys,
  MS: Zs,
  PA: el,
  PB: tl,
  PE: rl,
  PI: ol,
  PR: nl,
  RJ: al,
  RN: il,
  RS: sl
}, io = [
  { name: "BR - Padrão Nacional", flag: V.BR, abbreviation: "BR" },
  { name: "Acre", flag: V.AC, abbreviation: "AC" },
  { name: "Alagoas", flag: V.AL, abbreviation: "AL" },
  { name: "Amapá", flag: V.AP, abbreviation: "AP" },
  { name: "Amazonas", flag: V.AM, abbreviation: "AM" },
  { name: "Bahia", flag: V.BA, abbreviation: "BA" },
  { name: "Ceará", flag: V.CE, abbreviation: "CE" },
  { name: "Distrito Federal", flag: V.DF, abbreviation: "DF" },
  { name: "Espirito Santo", flag: V.ES, abbreviation: "ES" },
  { name: "Goiás", flag: V.GO, abbreviation: "GO" },
  { name: "Maranhão", flag: V.MA, abbreviation: "MA" },
  { name: "Mato Grosso", flag: V.MT, abbreviation: "MT" },
  { name: "Mato Grosso do Sul", flag: V.MS, abbreviation: "MS" },
  { name: "Minas Gerais", flag: V.MG, abbreviation: "MG" },
  { name: "Pará", flag: V.PA, abbreviation: "PA" },
  { name: "Paraíba", flag: V.PB, abbreviation: "PB" },
  { name: "Paraná", flag: V.PR, abbreviation: "PR" },
  { name: "Pernambuco", flag: V.PE, abbreviation: "PE" },
  { name: "Piaui", flag: V.PI, abbreviation: "PI" },
  { name: "Rio de Janeiro", flag: V.RJ, abbreviation: "RJ" },
  { name: "Rio Grande do Norte", flag: V.RN, abbreviation: "RN" },
  { name: "Rio Grande do Sul", flag: V.RS, abbreviation: "RS" }
], Zo = {
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
  region: io[0],
  emotion: Br.default
}, q = pe()(
  er(
    (e) => ({
      ...Zo,
      send: () => {
      },
      reset: () => e((t) => ({ ...Zo, avatar: t.avatar }))
    }),
    {
      name: "@vlibras/player",
      version: 1,
      storage: $t(() => localStorage),
      partialize: (e) => Zt(e, "speed", "showSubtitles", "avatar", "config")
    }
  )
), I = {
  get: q.getState,
  set: q.setState,
  subscribe: q.subscribe
}, pl = "data:image/webp;base64,UklGRn4AAABXRUJQVlA4THIAAAAvP8APEA+wTyvxWv9dj2Ewim27yacvkRApSANpSEFClvQ0buj7iP4rchs1CrQndniF/EH67MgAdHVkxLeCPTlijpG6FkkbJFVIWiNp9XRSY4ypRHRAXYcmIVCkfvbD/tgv++c84vN5tvDIPrgf7usPRyE=", hl = "data:image/webp;base64,UklGRnoAAABXRUJQVlA4TG0AAAAvP8APEA+wUDPxWv9Vj2GwiWS7zXcuPwRBETQLmqAYgkrn+JNTH9F/RW7bNsx1t7+AP0RoGGQc45mWJW7MmlFzQfUNlZDqHBWfXTxu27YhQLo4O57CD+b7a/ds/F5+v/Ye6emhwav/gcJ//SAAAA==", ml = "data:image/webp;base64,UklGRgIBAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSJAAAAABHyAgIWN5ZohERJADTrZty5YTd2fyCER4vxLfTJRfsjD9IdACRGB31+/77wlNENH/CfD/179w+IV80c0ocJwx4DxTwF2WgKfLXaA5K0Db7wDD6ghUMRyBbtGMwnHRjMHFrqc5uNuvn5fgLckeNEkKtEk6kLqug+oIwxGOC5ox3jKiSqHNmON0vsHBAIMN/xxWUDggTAAAAPADAJ0BKiQAJAA+kUieS6WkIqGjiACwEgllAMdegAAV7WXdDIR/1AAA/uvImf/xDnEFtR4Lv8bzea1gDuZSjmggNgtZPFc30lJwgAA=", gl = "data:image/webp;base64,UklGRgQBAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSJgAAAABH6CQbQQ4lTHN6J6ICG4Aq7a1N9Gh9+Kgv0cBHQUs3sFJkMPCBJGABCT0/ofLzHyZpiCi/xPAf58DuS8uRt8z4gR+xEYRO8WskxKWe2as8FCxdKkZfalnBN+YjX2jX6FjYLs41XHESxVL8qDtJkg1CN0lMVUGQimxUAycFN/6wE5rbjUgkMdLFUAFJA9wcaQaMIflKs0/B1ZQOCBGAAAAkAMAnQEqJAAkAD6RSJ9LpaQioaOIALASCWcAy9KAABzUfJnCSAD+7ylH/4hzt3629vP/G+IL2yMK/CWkJE/jjUt6PMQAAA==", fl = "data:image/webp;base64,UklGRgYBAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSJcAAAABHyAkQXPgPKvViAhyuKm17U0eeicJYIIJCU0NGxKaAiQwY6IaiIRIyEh/BjoKIvo/Afx9leWTeMqt9JCItYfUhcGzw0exB0tAZ+vCXAfuQwdmNgzMdehszQwsAYkZDAZrEsEgNUiFa+nmNOnDaqQuqkCslgBSNXg4qr2Hmzp98PG92ZMsbJ/kYPYkCwMnmbMA4wx0H/4aAFZQOCBIAAAA8AMAnQEqJAAkAD6RSJ9LpaQioaOIALASCWcAzxqAABXtZd4OEA6/wAD+68iZ//iHOhzoc1uf9amRj6BQdA2M6C8Y14AxdiAA", bl = "data:image/webp;base64,UklGRgABAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSIYAAAABH6CQbQQ4lckN4p6ICG7gqLZtNzn0DiPGkYCEJB5ABxJY6xsLEiIhEugdLuXSHET0fwL485ihSZSq9JIrqPFSKKjzxVFBU2AuBakChenAwgx+U5gObEwEVzODm8lARnAz2UcXE8PGRHAwI7iY+DcbE0FuOpBcFZQBLBQ0eMmVqvLChDF/BlZQOCBUAAAAsAMAnQEqJAAkAD6RSJ5LpaQioaOIALASCWUAy6QHogFeVe1fSiAA/uvImf/wQX9Dn9hg1uf6FfJn3XlltZiyCNmbCQURny3wiVuj459o2f8gAAAA", vl = "data:image/webp;base64,UklGRhwBAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSKwAAAABHyAQQXO12Q4jHBFBDli1bbtqFr0TCVfCc0ARgQ4k3CchgmgS0vN7JaSHvj7oDiL6PwHcenRi5fjIvVo9WMZXs4N99cE5kEeSFiHdsdQWfJTYaoBtgQ/NYAoPGqF30J9An3xt2EIk6d2SgYUHvfspDHSg4UiNh/7vwR25FtBwwDl7AwvnsDMjGWHpnKV9+FH2Bkha0BbkOtQisPfdOcBSzQ4WaumAlWOOj7g1VlA4IEoAAACQAwCdASokACQAPpFIn0ulpCKho4gAsBIJZQDBvoAAHNR6psMAAP7vKUf/iHO3fwK2Kf61MjH0SVUP9sOno6q6mfYDek2ux2cYAA==", Al = "data:image/webp;base64,UklGRjABAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSLcAAAABH6CobSM21QGvz5sREa48YGfbtjZ5vqTuxaE2QkboP0LmYAOOyAgdAbcl/oyCDVDB5X8PcCaI6P8E8Neyz27V+8QFyT7c6VW9D8Fb8AZT9bhVD+QNF2SX6gF3qk+9AS60pz1Ygdt2aiBwBuSKAbJSrngSwXSUK75rw1OSKXpK4C5hh6cR3I2AuzZkJWAS8XGVj2kxV5wW4Wk0VfsugdB+0njqQe13jacy92H3j+C8dnSxtbfNPwcAVlA4IFIAAADwAwCdASokACQAPpFIn0ulpCKho4gAsBIJZQC/KoAAFe1l3QyCqPgAAP7ryJn/8Q50OdDmtz/G83mtYH61kVO+sLoRNAax5ZUCozbsAjwAAAAA", wl = "data:image/webp;base64,UklGRhIBAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSKcAAAABH0AmYBkcumngExGR9YBbbduz5DLnrDWtHQvkIVxDRsANdA+HgBEcgdqKnOExhw0i+j8B/vsGMEsDPCXZhWmSIqyTtPCQJNmk88URwy8KTPOa51RZVcWyyfpsu3TebZGzYmnZDTmq3i47Uctjs7zuZ6OWL//GN+RolvtOWJ+h22JVwLDJtIpllWGQAp3seckR7TTrq2xinaQF0yRFaCfZArM0AHf+GwBWUDggRAAAAJADAJ0BKiQAJAA+kUifS6WkIqGjiACwEglnAM5mgAAc1Hs/UVAA/u8pR//G8eBXkuyv/8b4gvaso/1bu8FwirOAAAAA", yl = "data:image/webp;base64,UklGRgQBAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSJYAAAABH6AQAAI01tkEFUAREVkPx7Vtq8nB3Znp3EvwBmiDJrQZkiaQCihB5+4WT4AKIvpvNm0bGbK3Z/D3aoJN7yONdRbSVgoAvKShVAXoSjPpDUxyL6l6c8C88pa6Nw/sJK0InHRycNOpmE401m61kjbzU2vYnFFA0kfNwGYyjEStPF+1GX+ez23qmxtN/zDRcQCCKIod/hxWUDggSAAAAPADAJ0BKiQAJAA+kUifS6WkIqGjiACwEglnAM2ygAAV7WXdDIKuOAAA/uvImf/43jwK8l2V//jfEF7YjsZr3NoubDP3QAAAAA==", xl = "data:image/webp;base64,UklGRuwAAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSHcAAAABHyCmIXObSgK5RUSQw1Uk2a4y5Jzh+0p4Ep4kJPCkXQlPCjnDTefcqucgov8TQONbxR6Uo/YslW/GQrm2FfW551UkLm2BFTpQCwM4Cousq2DgKRRNGLhqR2GRVQsTsEIHKqENCABf51yZXJ1zJqncx7UTtuxoGABWUDggTgAAAJADAJ0BKiQAJAA+kUifS6WkIqGjiACwEglnAL46gAAc1IZzB7AA/u8pR/8Q527+BXBd/WpkY+iae0sIjFXjI+kfhryQprfWin8qAAAAAA==", kl = "data:image/webp;base64,UklGRi4BAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSMEAAAABH6CgbRs21cOqWHYjIlx5wK2tvW3zJOecW2MB2xgBKD2AUHOTVDvnRdybI3AEj5AzqK+A4gYR/Z8Apj874PHS2wHxo3IDiuhN4l3OwNK4wwHNiXEDXm7YT9zPNsedH7yL7NYLbccXOcXzQsQXG81TM7OJ10xbAHh1tDGo1sP9/RwUL5JkwX0kBo4+pKzXgYMoZSHAblTagUEMyMIe8JF0gFqSLDQriYEX25fpzcGP7SsLwIdtJXXhZeNjkO8QQmC6AFZQOCBGAAAAkAMAnQEqJAAkAD6RSJ9LpaQioaOIALASCWcAyQKAABzUez/awAD+7ylH/43jwK8l2V//WpkY+r4hd5B0VpspAdAnVHQAAA==", _l = "data:image/webp;base64,UklGRtoAAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSGkAAAABHyCmIWNTTBKfiAhyOKhtW4kOWuNHoMKPgL0cRKDC5KAEpcbtG06BiP5PADuXkk39TD9ljJnq5BUFWnFd8TShgv/ECGY60ueI2VIko2wFbYziakykjSl4To2DmZrchxn4TfRwGcKcgwMAVlA4IEoAAACQAwCdASokACQAPpFIn0ulpCKho4gAsBIJZwDDYoAAHNR7Pz8AAP7vKUf/iHO3fwK4Lv7ovtRV806YxWBWqPJFGl3Ivsvpl7AAAA==", Sl = "data:image/webp;base64,UklGRv4AAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSIgAAAABHyAgIWMZ5opERLDBUW3bbnLpvcM4EiIhQRlRRpAQCTQJvZ7B/TQHEf2fAP179mZPFEiBQAE07ABE9gQSewG54ZJSEJSkjEQPyhbrEop0oGKxLpQt0cNSmENJEi5JLyC3J7CwCxDbARjYGujYCqhYCpRML3IFHyShA1GooBHKKIW01Nvpu58DVlA4IFAAAADwAwCdASokACQAPpFIn0ulpCKho4gAsBIJZwDCNoAAFe1l3QyC0ZEAAP7ryJn/8Q527+BXBd/dF9qKuvbVACJ+SIEXffnevp5LXurOAAAAAA==", Cl = "data:image/webp;base64,UklGRiABAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSLMAAAABH6CgbRs21cesJHYiIvIdQKpta3lzw8yJjkhgAfhFBCvgaIgdhk4765SZmb87+F7JQUT/JwD/q1RC2CZpMW5J2ozHqjpyCcBMurmhsEvSaqTPWYOY7kFMj3tKKQC7NH3Aq5AEPklqpoCvRWhyu5Q6t6Me8PUxpb6YAprmFCDfdtokwN7tMPRlTF+3kppIU/6B5SfTcNieT2tLugfzy5KeRvL5SF5b0pSBH3wKKaCgTAf+FQBWUDggRgAAAPADAJ0BKiQAJAA+kUifS6WkIqGjiACwEglnAMz+gAAV7WXo71wyAgAA/uvImf/43jwK8l2V//xbSOhSjfn98ES159YAAAA=", El = "data:image/webp;base64,UklGRuwAAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSG4AAAABH6CQbQQ4dJ/dASwiYhw4rm1bTV4Mh5usxfy1gpUVrwxpgBJ+CTplRR+jFBDR/wmgJY8ppZgu9NyXukWh1hrFREPvJ7kSCg2PwrdcKPb4dW1XaWjuuk/XedbdPLzAErTAEv74ChFdrtkjPWe05FZQOCBYAAAA8AMAnQEqJAAkAD6RSJ9LpaQioaOIALASCWUAxjKAABXtZd0MpePTAAD+68iZ//BBbUe5WOZ9f6FGzDrwXnBumu16I/80wvcKZsTVMm4tIdXOrbpvrAAAAA==", Rl = "data:image/webp;base64,UklGRgIBAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSIMAAAABHyCmIWMTTBKviAg2OKpt200OvZcR0zghMUE1Q0RgpoMEJEQCvcMd/J+qIKL/E0AGu2HXsF/O5ivkGjKXxfvLdlXIP8RXyCHsOB38LF24WoCn7SVJQKCQv7EDX+YMAosL14fhwPdkNGCzN/LQ9yTtAJef5IDnEEh5C4se4HUILYdlGwBWUDggWAAAAPADAJ0BKiQAJAA+kUaeS6WjoqGjiACwEgllAMEMHQBnVYj4vJmQlgAA/uvImf/wQXxBfEFip38V8RsqjHCGKi/xjl0DVNhA3SDS6AK/zLgNy/NQsUAAAAA=", Pl = "data:image/webp;base64,UklGRvwAAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSI8AAAABH6CQbQQ4lKGdxhsRgXW4rbVtTR7cXbuMkBFskmyCDRY6WoeWEZzqP3mLH58gov8TwL9HQM8yKZbxkzQ3fXaMX5B85iv17CTn2U3us5Maz2ilXjy14tSzpQrPTmpA1oSp28IFz6wrt5mLL/NonA4OSKqc1AAjpefWSTF+UoC5XEjS4KsCAjBpGFkRMLT+GgBWUDggRgAAANADAJ0BKiQAJAA+kUifS6WkIqGjiACwEglnAHYAACvay7pCUoeKAAD+68iZ//+N462+tvbz//WpkY+gdy8Pe9VA3OAAAAA=", Il = "data:image/webp;base64,UklGRjYBAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSLsAAAABHyAkQXPgPKvNiAhywK1t23Fy5PGUMCnZlCCfY+tQBa4EZfRAE56ciHhKwDP+BPIdRPR/Atj1zYrE0ZK52lyI1XBB9R6Y+e6tVYimSHEIHwFn/ASQnwJRG4qFjymUIRDfg23G5C7MrOXSMfjw9MdKx+aHp3MrnXsiDykrnSlvtigqTHmwRgnSuasslBWgcw/FZYPz1ynEnvJhG34MiQ0gsk3uIcyWVIHyfljeA8RquPCg1hZIHLH8hl0DAFZQOCBUAAAA8AMAnQEqJAAkAD6RRp5LpaOioaOIALASCWUAxBaAABXtZd4HcT/awAD+68iZ//EOdDnQ5rc/1qZGPoU2lrHUZhqaCvQ8R3HLzy0B74IrunKqgAAA", Nl = "data:image/webp;base64,UklGRuQAAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSHkAAAABHyAQQWPNtsEKR0SwwUFs26pyvuPQ4EX4ESAExLFknxeBCC8C7vDsHqRBRP8nAP+eEmO70tsuhZW1No02dmaraFvjOIyOXRgVXTPoOnqm0GOyEq4JGQFaAGAUOQ7Ju5K2NpOea8gvRd4JsaANm7O/zpklE4aG5eznAFZQOCBEAAAAkAMAnQEqJAAkAD6RSJ9LpaQioaOIALASCWcAziqAABzUeqUEAAD+7ylH/8Q5279be3n/rUyMfRNCFDJzdvuogHUAAAA=", Tl = "data:image/webp;base64,UklGRgABAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSJUAAAABHyCmIXObZko4RUSwwVVtW41z03txgAQkMM6InpgACSMhTUDv5X68S1YkRPR/AvDn/ajw9oVPKLx/cIXdqFCeN9SKSd3JnviQM8EHnUh7BrOIe3IJIIczySaA2T2+Bd5xR4gAfU8NdWZUNdkQuLBlqia+TZM9Pg2z8iDs3VVJsJeDqdnI3pwjVk7MsB+ZfROrnqnwfwBWUDggRAAAAJADAJ0BKiQAJAA+kUifS6WkIqGjiACwEglnAMtagAAc1IIAUQAA/u9RL/+Ic6HOhzMZ/xvN5rWgTdV4brl6ipecTAAA", Ol = "data:image/webp;base64,UklGRoAAAABXRUJQVlA4THMAAAAvP8APEA+wUDNx2v+tj2G4iW0rkk7vIQ4GKdiaDKQhBQmEs1CNg44j+p+e+w0vBiTGQkmMjZoYFy3xCfRIj3wCLTEuaubeKJO5YC5lwr3VDONqCT6hR+jxE6ClcUHN9wZlzgXMCdwZGAn4RKAHoF1AWTwAAA==", Ul = "data:image/webp;base64,UklGRnQAAABXRUJQVlA4TGgAAAAvP8APEA8wUTMxtFsfh2AU23aTl4SyRAJSkEakIQUJWdL7pQuI6L8it20b5dRpO/mFflkBNObIACYwH/GzDlTlkbqAaA7RDKIpRN3nopfpRbjgFX5E/8zDfFd5/UmAHxm/nFcDgn5YAg==", Bl = "data:image/webp;base64,UklGRoAAAABXRUJQVlA4THMAAAAvP8APEA8wUTNx2v+tj2G4iW0rkk7vIQ4GKdiaDKQhBQmEs1CNg44j+p8eQFmAdgE9AJ8IjATcGZgTlDkXqPneoKVxQY+fAJ/QI4yrJbi3mmEuZaJM5kLN3BstMS565BP4BHpkXLTE2KiJsVASAxJveHluAA==", Ql = "data:image/webp;base64,UklGRpwAAABXRUJQVlA4TJAAAAAvP8APEA+wUCuxs2QDFIX/7zXGh8NVtW1tAyfzjigIRjJsdbdOagUpSOCyG5L8b5eCiP5PgPrzBlbwgJeWYrZoTlLnYrXY+ZgtHiFq4RqVEI8wggUDFWSgP8qgAgMWRrAf/PgSxw8ecIEAHhycPnLgIcAFHvCCeBZO0QguVsPCx6xbuKhrSYmno6RGaKGGvwU=", zl = "data:image/webp;base64,UklGRpoAAABXRUJQVlA4TI4AAAAvP8APEA8wUSMxtGTSNm3n3/Cu+HA4qm3baQ59iASkII0v7TuIBSRkSL+D+yBFQUT/J4B/zlUkBbPU2SINdkmTSRKQrIDZOnhbD4sNTw4b4bLpicIHKSruclT9zxx1n+Wo+l2Kis+IeHDZ9OSwERYb4LD+poPLqpsC5EQjJOvtJVWQVR0jRjgPUe6ixL8D", Dl = "data:image/webp;base64,UklGRroAAABXRUJQVlA4TK0AAAAvP8APEA+wUCtx2v8buMcw4Mi2tkh5XfaFkxrwbwRnXy1RFxEpu2FkI3/VWDoh8tMXaUHziP5PgP7RkXSQ9Eg8x0ngDqA5FAHiOYA1sQcKefs0UtkSD9gTh8o8K1bULeuWinVUmueWWJ/uO8YdR8TU5otT1m3N2j6puVFp/kIhbsnbHCEOLY8ravMPvK4/AeuobIn1bdy1rKGFXnMn0GM8j/XoNI8leVNrGbX9kwA=", Ll = "data:image/webp;base64,UklGRr4AAABXRUJQVlA4TLIAAAAvH8AHEB8gEEhS3B9mDQEJEQ/8H0sgmyx/nfyuJgABxuokjP4hfFFn3Q0Kt7W1t8knciw9gktK9xqB9MhBI1BSOszgUeh92EET/eIcRojo/wTon2UvUR5jz9ygMACSgplKazOU9iaTjiZKJFWmeh0NfOl7pq9lwHly7064QH4r1kwDn0P7YOpJul9dql/C6g09Qa8E6die8kOU9hwjmbQGGErBTCUZSbpBYcpj7BmVPf0T", Ml = "data:image/webp;base64,UklGRsIAAABXRUJQVlA4TLUAAAAvH8AHEB8gEEhhGy4QIFjw/0ogQPCfI5CYhtj07yGFYL64AFP7AKfWtrfN6969GcIPQbsguD2/e7e39kMIAY3iEQgJAI+Ckq3nUwqEiP5PgP719ePDPAENSTEQSQqA+102Wee4aTBxb3wwWkJOABcgjYsTtwSetYymwP1jUTEJNKan1CfQmXbcNIGSuZNpekp9x3c1BTqSpi8f3iwj+YLJHjF9oCgpAJL0AJmRJ8o5U8xRW/8LAA==", Fl = "data:image/webp;base64,UklGRqoAAABXRUJQVlA4TJ0AAAAvH8AHEB8wUAKBFB7CAoEkf579VggAARrrqOKIonjBUH04qq09aj7mZfY1EQlEGmK6r4QgAQe1MLfMb/GHc5AQ0f8J0JkhS4Q9ZmYEbwAkDaaRHsZJq2ml3USJpEIq6/BrO5L3uI9/UPT4tR0pBpLNUZ8qjjru8CcPuD0+yIS/XkaknSwQpZXbTCs9AJw0mEaSkaQRvAl7zIxCpjMBAA==", jl = "data:image/webp;base64,UklGRrwAAABXRUJQVlA4TLAAAAAvH8AHEB8gEEhhGy6QTXaF/F0TCBD85wikJgABxkqliv4dnHEFbpcLt7W1t8lHziWjuNcCZB45te6IvZZgFHovod67oOARIvqvNm0DJslcz1AV2rrvtHWeTpD9ASDpBtCT5gAtaQ0wlrYATuL8OX+Q5ZHnE+oFvfvoRsMwmrfu1Ay/zfdC7YbHXgjjo2bAbaFWwKCEhsWVgy114U7ZlnBfuDfcH/lDAgj/Cv8L/6xAAQ==", Vl = "data:image/webp;base64,UklGRsQAAABXRUJQVlA4TLcAAAAvH8AHEB8gEEhhGy4QIGjw30ogkOTPs99CAiKZ5Yj/H9S4CFtcwG1t7W1z+VE5VhyFqjmC0oNynIDQBP8oqtWr5xI/vIOXSN9vwCNE9H8CSB7z1EcbCMZ0BmETjRkcpZIuSFLT5+ruOXP3gLUz2LgnKEqbuQWN10Vd06h/LK9GpfG6qPtW6b2JZ2VXJft/Vamskr6+pKyRQMqD9PqUDCVh4yKsXQFz14ar6wPOgKNUAoRNNEcw/hMA", Wl = "data:image/webp;base64,UklGRrwAAABXRUJQVlA4TK8AAAAvH8AHEB8gECA49D9jQ0BCxAP/xxIIEPzv+KMmAAHG6v/rpI83quhnOg6OItuWmsu0ZPklIIH9LxSM95NJBBKICCTExs83ETvje68KCRH9V9i2baN07+oMHIlU6JPCrtKJbASSBLAKNdALFTALDgjCDlAFkqbY2JzcjblndWt7Zl4X2UoVtcVrMs9HjBdmG++p6Jgnxuc7soAGCNJ5AbMscfb/1ofxY3y11p/1eSAAAA==", Gl = "data:image/webp;base64,UklGRsAAAABXRUJQVlA4TLMAAAAvH8AHEB8gEEhS3B9mDQEJIQ/8H0sgQPC/44+aAAQYq38AiTTyRhV+0HdwFEm228zXd44nQRAE34XAeZ0ThHwXAR8/BAMwg8/tSVWCENH/CaDO6EviJnizkzIjScDdDGFumrA2KWxMAIVN2Iio5mkyly80vHXvSnL9n9+pXK7z5/yRu6t0WJWXuapC8fAbK4nyEOWRg1yw6cItwDqDXQpzJYWacJekIWAAdlJm4iZ4Q/TUCQA=", Hl = "data:image/webp;base64,UklGRrwAAABXRUJQVlA4TLAAAAAvH8AHEB8gEEhhGy4QIGjw30ogkOTPs99qAhBgrErq6B/BGVfCbbxwU2vbm7yh1zESGBmz/xJoD71JYGSMCaSwx8QnASX/93EiIaL/atu2YeQkU88ZaqO64zsdzNkVqgyApGdmLK0yfWmXKaVDxiQMDqhmvitfdBrG1+pJN/lQJL4Hu1M8cRpHkqdIPqFo+Eh7ujWL9/JIR/QPtkI6/OBi8d54/59/SADxX/F/8Z8tJA==", Jl = "data:image/webp;base64,UklGRqYAAABXRUJQVlA4TJoAAAAvH8AHEB8wUAKBFB7CAoEkf579VhOAABuzMikiiHjBuHK4qm0rbi6h8ygFCSAtzkBCJERC57mcj0fXqoSI/k+A/plcI9XszAOCAZA0mLl0MHvpY6JUTZZoKrVcT/jEB11hfwkHfCF84gM/0Jz/KpAr+ALrEXwPvkCXoOvBqSVVfCFLH9YjUTqQK3tpAJhLMpL0gGBSzc4oOf0T", Kl = "data:image/webp;base64,UklGRpAAAABXRUJQVlA4TIQAAAAvP8APEA8wUSuxsxegj0M4qm2rrWClDZGAFKSBk1h5UpDAMJ12b35RENH/CVD//WTdhZwHsnxHsYdcZPvoIg/JKBAhkaS8gy0ncPk4ACfIKrgZlBYUByQa/ToMSBYUDUoWba6T4ULLA6LJFqzZgJwXMhBNFPLEEfuRI55kpr8jJGSv/hs=", Xl = "data:image/webp;base64,UklGRq4AAABXRUJQVlA4TKEAAAAvP8APEA8wUSuxs2TSNm3n3+7u+HC4iW07bq7GSX4pCIYiSmFgQROUD+GX2V/xlZ1ARP8ngF8ey0yaDGlJIdV0k1qSJKCnAiMt4FJxg9CGVzip4SvctOIt1ckjbckmSpoMiS6ZS+XZkCxeWb7nM3NV8CfxypgtXzq9ULpkoQ/AGxs8Xmtwe3JK65MKkQw8LTBSgZ4AHhYt3SxqCosldTvyjwA=", ql = "data:image/webp;base64,UklGRtIBAABXRUJQVlA4TMYBAAAvP8AFEHegppEUaDGAfzM4oUMBtK8NRZGkOPPmm2whFG8IgAuK2kiBdj2ggPeNf0loADYBADSpwd4nBQhBRgJxUmBPNYNhIz/g+/9HYH8+Z47jw7onWIHX2NjKVKUh2jCcABjI1bZtbZsvzHgEeAC0ZWLSAYT2fOEyhhlMVydmlPwmYzmwl/7VvUxzSO9JSOV2j+j/BOCXxhnB7/3PbCRDV3eDmO5pWrW3Nh1gczPGSCAZgtXh9LbfJfmABtki0jKiN3FX++KMuORcoaxIVYxkmsYS7yt9g4Cux+k1eVIp9Yc0my5NvrRczZZF7cOQXomT4W9kvkj96gnnEKfJkuewpF7VHtEXcabtabJIyqNwuY0AjYiDgMiEOmPqxBkBTlgiLYBLxy+KuyJj+mJCbZ9DlsgNzzY+/MCQXtE38DnxO+E8jmiy5DksqQ/out5EnGnAZZGcA47IXdLkyyLyZXFaVddNjLz/kcz3fCKZpmkW7zMMq54wwTRJk+eZPiXv00xni0iLjVHVIyb4kORcoQd3d+8FeIC7dRVtUeDt7m7AvP2y89YN21bHJfh+YgS//m74+q1TPvwd9O78LmP/hul3Lvej+IsB", Yl = "data:image/webp;base64,UklGRqAAAABXRUJQVlA4TJMAAAAvP8APEA8wUSsxtGTSNm3n3/Cu+HA4im0rcm7mJRKQ0tIaaTgJElj2/BafD5UoiOj/BEC60Sw4ZW7UQ5+GFM0lTeaQ5N2AS9IDkiR9IJvoTFDM3FONepa+rxP/LvyiDpWhbCKkvgnwLudwFkkRqJICULo+QHaSg6SHubxw3IxCpvHBJicPFYWh2KgdkzMPLJJ3+wUA", Zl = "data:image/webp;base64,UklGRt4AAABXRUJQVlA4TNEAAAAvP8APEA+wUCuxswQCFIX/Xz2IDwfc2trbNo9KKDECNIJLd5Q38SBKG3AlZ6/BsIBzxMFX4AccJojo/wTwrzfW+YP18NBYj6W5NTmjvy7ce+O+M45dF6xghdBm+JO94dbbYzYj9nM4hY+HOWzh49HB9mL+kMXe988OPvpw8e7goT8cM3qh7ELzlB3lYkbyVgwfjigpfMxJktoH61Dq50SjAZL0A0k9F8o3hbNCUwGUkkRNlIxUdaiKklryVBEKHuglOeBB0rzQAL10ALiQ5tm/BQA=", $l = "data:image/webp;base64,UklGRsAAAABXRUJQVlA4TLQAAAAvP8APEA8wUSsxtGQDFIX/zzXHhwNSbe1xm0/H09IQDEXQJGg/FEHQsoOO3+JTRgQR/Z8AfXMsM8okYLEOpw3IBiCpWpLCFqnZIXU7pR+7pGH5mduKnd3gaGBLgCqkCqmCBCkgllk7YHlLf/C/wNIAwdGg1FmOBw2OgOsHlqfymJV75kudpQrlnl0/kDTTE7eVZwZ5kA3sxy6p2yk1O6SwRaqWJJkkDcjW4bSAxXQXTWOZfSk=", ec = "data:image/webp;base64,UklGRqQAAABXRUJQVlA4TJgAAAAvP8APEA+wUCsxs2TSNm3nX/C++HA4qm2rdW76EAlIQRpIQ0qKgd5ZnAHllxiI6P8ESApG1bOvJVwlQxGAhaQI7KR4Aox0BrDSu5EKJ+U+38Pf5D7bkwa9G+fCSbGhM+Al7QG6IuAbTlIArCRlcEUCW5wb+0YEM84edkXgtqqpem75Ie/REq1FJbMaALuGKUKPHeSK2OPHAA==", tc = "data:image/webp;base64,UklGRgIEAABXRUJQVlA4TPUDAAAv/8A/EB8gEEhhGy4QIFjw/0pAQsj/NQ4SkBDZ5Yz/IxQX6SYs6MjaNgVWPn6KuoUtIUvA2ZCcJRDw8WMVdZsl4DwrmyDv2NycDRiSd+gG5lm7++d73+9qHNH/CRCPXS7O19JbX1Ftv/51+9df37yRVjBtUZ/8ISQ0TM81MWGqiT7RxFaenom2mFKm7DyrpoaEQXmit0WTm6TAMqZpeGrUnGTRi81TUTOS+YqGJ1RLjkMvt2zzNb15ZFOtKA413B/pVAuKyUKrB4tqw7Cp6RlEpCeZbPTbIDKotgSbWv8Q7lW1IZjNHic4FFzgZm/3iq4QLz14DssARyUii8JzQF+KyIgT4JCJrArfERpki7gW0KnIpPgKsJ6yKWEOmHeZCXYBjvW9EjYIrUeGADiUshHgQnEGxMpwBkFODDcCHQhuBBtxbwv2UPgu4BV3g5phjaAVHlAd7G1B97A72AyLATXAdkGPsAIWYaW7zF0O0/892X9eidpefJW74oX3IaxByXfuKnfPoreXB28yuetRBW5xd7gTVEUQQSXBAMoIencLKCfoQIFA/I3uZneru87d5k5Gd5O7FZJTHJCMQvwNiJJjQlQcC6LhOBAth0RATTIATpIeoIFjQeQcG6LkkAgoSAZATTIBTpIFoDnHgSg4BLGTjADNOWZEw9EjNFAskIbigGhgEExDMUJ2ihmigaHHZAwLpmTo3G2YnEEiJFAMiFMoZ0TN0SMKjgVRcnSIwLEBTiEFtCyjXcUy2wWWyWwX1tWsolnMAs1h1QjtZpXziNEuxKNNxTTYZEyTu94mZ1psAlPn7nC32Qi1v/giOt29zaWGp3hTrs0kc1dRHSYlVWeSuQtUi8Up1KvFztVbtFyTRcE1W1Rcg0XGNVrkXNEicKmlUG8WJ9dhsXN1FjXXYtFyrRYNV+9usii4BouKa3QXLUou9baZZFSdt3hrkhMtasvUGwWi2d1oJMTq7TA6ibq05v6JnWhNy+T7x2qiKS2I3MUHLdGcdIqIbF+pakE0JtUPRO5uNSeKSe1j3JsmNx6OtMpDl1Z6+Cwtd7BpenCwXBCHfdruYUirPcS0xsGm6YWD7kLlYLlQOOgvtA7mC7uD4YI6iFcCn17N6A533aWSbnHXu5suVXSzu/FSQRfd6eWG7bjWsnXXarbl2snWX3uHbbpWsQ3XWrbx2s6mhoFrs8i4OouKa7FouHqLmmuyOLkGC+WKJoFKTTOmw6Zk6mwqptWmYJpsGqbBpmWKNjWTejuMdqLF6CTqjZRodjdaBR61zmk2s4ymc7ealTS9WUUzmxU0g7to1rBsat6yHHY1S+dutdtZeruTZbJTlsHdCAgkEZCDAAA=", rc = "data:image/webp;base64,UklGRrAAAABXRUJQVlA4TKQAAAAvP8APEA8wUSsxtGQDFIX/zzXHh8NRbdtNdbNoQyQgJdKItCcFCQxbFmdw86uCiP5PgP45uhZrI6CzHWarkA1AUrEkhXXSZpO02ywdtkjV8juPrZarwXLAG6WVXgXk2vLuJ90B3QbpgOmt7sVkAfmA7nellQpMW6sLSIJUQG88dMFqYNXyO4ct0m6ztNkkhXVSsSTJJKlCth1mC+hMz6pmdK0/BQ==", oc = "data:image/webp;base64,UklGRr4AAABXRUJQVlA4TLEAAAAvP8APEA+wUCtx2n8CAYrC/51mxMbDUSPbcfSyHw0hUAIthmYohuDj7E+a/54jBUFE/xm5bRuJOc0+TvIK3Fgf8gBQSXIDWkjyWjn8hROgFHACwA/5kC8MZQ+PqaTQprIBKPUK6lTV9teS+p2KFJkcQiGnUPfHFtpWk5iKGrJ4DHkXwN2GLNqQO3k8n+f1/P1+gPR+dfvn/fT+XurMw+fj87L5+Tx9vj5vn7/vg+/HfQUA", nc = "data:image/webp;base64,UklGRvIAAABXRUJQVlA4TOUAAAAvP8APEA+wUCsxsy9wj0PArm1bdbJf3PMrwHspRDughZSBx5M/QgevFBz+oAO3X4fIHXcj56ANRPR/AvAP68rZ1jeKZ2dCXTn7wrmwda7dS5dSWxncSpnDR8E9ngqzJ1LJEjkAC5ZoALgzjTN+ojeiA5wRllFgq9Ek54Gt6oj0A2hWLekDzaohN0NoNmDohwBiRD8AMKjQ0PvUMPQgZQHYqpU8fiEKwAyVQzIIbIx2heL95aMQvLv/VIuMRqdBoJlaWDgKAnBKKwLc0rqQVaLuUAi6AwFZJSo1taAWheAEBUBzlD8JAA==", ac = "data:image/webp;base64,UklGRoAAAABXRUJQVlA4THQAAAAvP8APEA+wUCuxsy+wj0O4rm2ria75kxIshdLAziiFEvhUJ9wJ7y5jARH9nwDcorOit1LYkrmlqGDNm55+y3vcQuUAREaSROL0V4kmbxlEs1slICrR7DaIZrfKCjibF6NwyKzUWzxFIQckVtlCJBvAAyXgxA==", ic = "data:image/webp;base64,UklGRowAAABXRUJQVlA4TH8AAAAvP8APEA+wUCsxtATZNtvu73qE+HC4jWw3bj5HB0KUgFJUmlAaSmEJCCVfP/jjVHFE/ycAz7XozQVoxkUHLgngJ6d4CwGAyEM+I0OuUS69lMlcypIcUuQyl2lT7F9ZyVKWJASAuPSSIdfIQz4DFAI/evOUuOSSAFocKHpzwXMFAA==", sc = "data:image/webp;base64,UklGRlwAAABXRUJQVlA4TE8AAAAvP8APEA8wUCsxtATZNtvuT3uB+HAwjiSpzWRCKIRG2t57kP4R/SeatmndXHcG/1GnlJKA2FCQOtdMZnxD8jnHnnv9k78+59i1378xf1YAAA==", lc = "data:image/webp;base64,UklGRlgAAABXRUJQVlA4TEwAAAAvP8APEA8wUSsxtGQDFIX/7zXGh4NRbLtO7m+wjIRIwRrSIiVO6L0uI/ovICgywQtuUFfTJWg7sU7AOvW5xjsF/31shXony78rvy8P", cc = "data:image/webp;base64,UklGRnwAAABXRUJQVlA4TG8AAAAvP8APEA+wUDNx2v8L7McwXMW2GzfSePtUGJhCGQiaiHfvu90QRPR/Aux/T3CGa1O3gIQbNViwoeDmsGBDwc2hQUDCjRoEJBTcHNpH66P2kasylRDQwFRCQANTBRsWuCpTGxY0MJUQ6trU2fQBfwsA", dc = "data:image/webp;base64,UklGRsIAAABXRUJQVlA4TLUAAAAvP8APEA8wUStx2n8CAYrC/7EWxMYDcmvbcZsrSPZfugED7CQszSyNpbCEzKPAu/jO3EBE/yeAv9xXWpoyVui63q5wq+U2YNeapnobNNW7oBvDh2AIvgS3FXaD1wKvKWAY7Ct0g7lAS4AGQkuXa61+Y20F0KUn4AdO/678VPusfodLOoPpBmaqMBdoFfYVeoXXgJEKvBa4rbCfYAgGdGO4QlNdgKkC7FrTrZbUdU1MudrXa38UAA==", uc = "data:image/webp;base64,UklGRsQAAABXRUJQVlA4TLgAAAAvP8APEA8wUStx2n8CAYrC/7MOxMbDbWxbcXP/SDIhJdCGMxrzVhql/BIUemF4wZe8VRDR/wngb29Gm4A2IQGemjSB57tUwEuXKniVJHBFC8k1BVDCVaFnXAXuBVcGr7gKtFDhdsV1BYIABYOx0629A9wnNj9bv5d+Nn3r/pltdeO4cwoDRtDOFYbB7Qp9glahJ/AK9wL3AmuFnsEFStCUV01wkyQDhiSALtWwSjk0aQqMK5s32/pT", pc = "data:image/webp;base64,UklGRqoAAABXRUJQVlA4TJ4AAAAvP8APEA+wUCtx2n8yaZu28693b2w8XEW23TY3/VMQBEXQFDMzg1AwhPSeHDdVBBH9V+S2bcPcuuv2FapZ3W7uaee+rpa/z3NsoDHS8wAXOwIYfSdO+k98hJhVjj/ui5e+mCNOerLrsNKRVYuROhZ7dlI7WcVJMenmcKHw/OF9wvvN71uSRzq3MM8w30jeOi6gMbnvU/t9nzbyPyqWAA==", hc = "data:image/webp;base64,UklGRnYAAABXRUJQVlA4TGkAAAAvP8APEA+wUDOxs2TSNm3n3/Cu+HAwaiPJUV+c50JYKANtqQ2UCwAOQpz6LYCI/k+A+hsmxSRFlTaTNoebBjAo4NDgHsCggEODe4cTLri7c8EJe9a2zKGAwZA1ZQ4FDAZQ5llUMCkm9RcA", mc = "data:image/webp;base64,UklGRq4AAABXRUJQVlA4TKEAAAAvP8APEA+wUCsxsy+Ij0M4qm2ndi5lkCESkIKlOgBpkRIJGb5+M+CmXwMR/Z8A/L0lXpKayBERAWu+Fe22VR1KbK5NLJCUJ6t3JgdrzrqxoWwuFkjKk9U7k4M1Z93YUDbX1jwAFxOLAiM1kaRtEdE1yEjmYoGkPFm9iwngchBrzrqxoWIN8LnEYocoKSdWsYgApIFqZ2swzOSZ3JMjOSffBAA=", gc = "data:image/webp;base64,UklGRlwAAABXRUJQVlA4TFAAAAAvP8APEA+wUCsxtC+gj0MwaiPJUV/s51BeaAtlIAyDS5vDvSP6PwEY9xWECy0+tMU0xB8gJoBRqQS0xhVsiYBSawhgYtQrSB/aYi60IIRxAw==", fc = "data:image/webp;base64,UklGRrYAAABXRUJQVlA4TKoAAAAvP8APEA+wUJ/4n1kCAYrC/6suRKcDcm3tjZNnG/iXKkGNzNFPSXQwf2l/KWS2XpK/hTSBUEBE/yeA//hVPvjW3IWkLiUdgFvntTsb5wN8vp24PYEEt0ZohtuyyiEKaQ5U0uoescCSL7SFaaFt8oW64AttYdrUSHMk70KqpM25pnQhnUhTFCBM1E46LDUAvZwG3w+jm7SpI60NoixUH6kOWPouo9fT6Jo/CQ==", bc = "data:image/webp;base64,UklGRqgAAABXRUJQVlA4TJwAAAAvP8APEA+wUJ/431kCAYrC/6suRKfDUSRZldQTP45IeEYmeOuM52As4WAtIGGPnOgDvP0LiOj/BOAXb05bZz3OKC+Y6CymSQneOalreuGxeDJpcCwOPRu5AsyFjLCJwKjmgFSUIACSc76UHHXEUSc550vJUUc+os9YRAkZKE4dCNQwrKjrEPBYYBcVbYHxTnK4SAJg6MwA+tqo+MM=", vc = "data:image/webp;base64,UklGRrAAAABXRUJQVlA4TKQAAAAvP8APEA+wUCuxs2QDFIX/v7XHh8NxZNtSchn/khBIw52GZADgkBlm8s1gnn9xF+9dKI0gov8TgB+m4LF1dtw6kVSZOTWpMK/i5WUxmASvw+CthsaJe2dzmtNNOKhgknidjuJQmPVpnxmcMvwLuRTMRBDNlIVpgVHwKp7CtsAoknjNOokoBrGbBTWKJF6TGgAnEUkGAAPJAsCOZAYA5Bb2xeD8KQ==", Ac = "data:image/webp;base64,UklGRrwAAABXRUJQVlA4TLAAAAAvP8APEA+wUCsxsy94j0PArW27sXKwylAD37SBJ6QNyiAblUXoGnksGhDZ9yfQGEwDEf2fAP7/QXOjPgBF7YDXE3hujqACcQTR8Hv1aNJJ38tQ6rscmKUwNzl8IFhchB3BIQ8sQwnyrC/dTijpsgcIdr/wegTxYU/9ktcEq08pqt9CU4WdPq4EwrSbkg99adV3VHu6p9KT69GhZ5d6li5t1HGvozqgqA8A6rJZaWr+KA==", wc = "data:image/webp;base64,UklGRmgAAABXRUJQVlA4TFsAAAAvP8APEA+wUJ/4P+0/2QBF4f97jZH5YBvbVpTnHloCpVgalEYplmC4ewPA3Tyi/xOgJ+82BhEH2TEPhaQRwEhr0N0xBkYP7gGaL/BB8UcuyL5EgSTtYIMB2uDpAA==", yc = "data:image/webp;base64,UklGRgABAABXRUJQVlA4TPMAAAAvP8APEA8wUStx2n8CAYrC/7EWxMYDbrNtkZwX7fFnpgHLtOGbljbcaA5NYWbkRsicknmPX/wB+Kwgov8TwL9PZg7MTWYbJoPOCNWEFEHNkwM8nwIlwLEETh4OOaICOY3UDeTVqA7SYhgwic0jgNT32Pj60bnTz9A8n8w398WkORTbNCWba/JqtGkeO9PyhcQOfujdaO9WXef+tOkcS69k6Zyy7+gaOnXpmcQvhmYyX5tkQZv8Fk8OKCGWDXDyQxFARXNTN7r6xp3mABhliTCNZImQRpIfIEdSUCiBKajj5MHMoQLVNuimEaoDNY85OJnn3wMA", xc = "data:image/webp;base64,UklGRrYAAABXRUJQVlA4TKkAAAAvP8APEA+wUCuxs2QDFIX/37XGh8NRbdtNRWcYCUiJtJcZtiIlOMgQfnl3LV6hKIjoPwO3bRux+/ad7xXNmyX3GpO+HKCGCgTxA6IAgFMSrbqHOrCIWd1MnbiLRd0RiB4W5IEqjqS117LW37HF33qivOw994VyqD3PhVKorccu9CHehe6/z/33v/xO19/x+jvb72/zsPnYvGx+Jk+br83bz79hcv6PF0sDAA==", kc = "data:image/webp;base64,UklGRu4AAABXRUJQVlA4TOIAAAAvP8APEA+wUCtx2v8byMcwIMe23bZ5mL/4y18CS0FpoHMZbgVyXKqFP+MG4KyAwVt8OFYQ0f8JwH+sMms2Y5lUUkIjLXQyB5IEsLIMJqAydwrgXHZUoAUDdtfW9gvQt9ZeM9Bvrd1mYGzUzwowqroUoLi6DiCHjjW7uPa0Li5Vd6l+ZaHJN0hS/Sek+Ex/Raq51qBNqvrMXP0bO6lL6LLO0prDSGtxa8oEurUrAtxYeyQwHpfdUwHGdunHAnTmzhzIsAsL0IIBHhSoQYA1JAABADqZQyMtVFICRsG02azK7I8B", _c = "data:image/webp;base64,UklGRqwAAABXRUJQVlA4TJ8AAAAvP8APEA/wqP+RmNllD0s4im0rjm7PSyR8KUgL0iIFCSx7zvB4rCIgov9q27ZhnKkX+wuOaw0gwfMEJeB5gVl4QBUStIDWpaBm+D5gnuB/gbLAcgKWkwIqV1IjagZ4phYALbRUh2upDtdSKEu3FJaFDv+pA9/cgWc43BmU+CC/3//x//xf/9/5GPDjfDl/zqfz63wb/67HQB/Xa6DfYQ0A", Sc = "data:image/webp;base64,UklGRnYAAABXRUJQVlA4TGkAAAAvP8APEA8wUStx2v8n1McwWEW21eZlEIAEpCCNwRlWcMAnqbR70wVE9H8C5H9zKaUYCQWqhHRGZkOWHci9r5QyFxyJJ9NBNpJIIMK2SwUFkshGDuQLjmQejgLd+zZkWUYmIR2QkjwY+V8A", Cc = /* @__PURE__ */ Object.assign({
  "/src/widget/icons/arrow-left.webp": pl,
  "/src/widget/icons/arrow-right.webp": hl,
  "/src/widget/icons/categories/all.webp": ml,
  "/src/widget/icons/categories/alphabet.webp": gl,
  "/src/widget/icons/categories/animals.webp": fl,
  "/src/widget/icons/categories/body.webp": bl,
  "/src/widget/icons/categories/countries.webp": vl,
  "/src/widget/icons/categories/family.webp": Al,
  "/src/widget/icons/categories/feelings.webp": wl,
  "/src/widget/icons/categories/foods.webp": yl,
  "/src/widget/icons/categories/fruits.webp": xl,
  "/src/widget/icons/categories/health.webp": kl,
  "/src/widget/icons/categories/jobs.webp": _l,
  "/src/widget/icons/categories/locations.webp": Sl,
  "/src/widget/icons/categories/machines.webp": Cl,
  "/src/widget/icons/categories/measures.webp": El,
  "/src/widget/icons/categories/nature.webp": Rl,
  "/src/widget/icons/categories/numbers.webp": Pl,
  "/src/widget/icons/categories/sports.webp": Il,
  "/src/widget/icons/categories/undefined.webp": Nl,
  "/src/widget/icons/categories/verbs.webp": Tl,
  "/src/widget/icons/chevron-down.webp": Ol,
  "/src/widget/icons/chevron-left.webp": Ul,
  "/src/widget/icons/chevron-up.webp": Bl,
  "/src/widget/icons/collapse.webp": Ql,
  "/src/widget/icons/comment.webp": zl,
  "/src/widget/icons/dictionary.webp": Dl,
  "/src/widget/icons/emotions/angry.webp": Ll,
  "/src/widget/icons/emotions/automatic.webp": Ml,
  "/src/widget/icons/emotions/default.webp": Fl,
  "/src/widget/icons/emotions/disgust.webp": jl,
  "/src/widget/icons/emotions/doubt.webp": Vl,
  "/src/widget/icons/emotions/fear.webp": Wl,
  "/src/widget/icons/emotions/happy.webp": Gl,
  "/src/widget/icons/emotions/sad.webp": Hl,
  "/src/widget/icons/emotions/surprise.webp": Jl,
  "/src/widget/icons/expand.webp": Kl,
  "/src/widget/icons/facebook.webp": Xl,
  "/src/widget/icons/govbr.webp": ql,
  "/src/widget/icons/guga.webp": Yl,
  "/src/widget/icons/hands.webp": Zl,
  "/src/widget/icons/help.webp": $l,
  "/src/widget/icons/hosana.webp": ec,
  "/src/widget/icons/icaro.webp": tc,
  "/src/widget/icons/info.webp": rc,
  "/src/widget/icons/instagram.webp": oc,
  "/src/widget/icons/libras.webp": nc,
  "/src/widget/icons/like.webp": ac,
  "/src/widget/icons/link.webp": ic,
  "/src/widget/icons/menu.webp": sc,
  "/src/widget/icons/pause.webp": lc,
  "/src/widget/icons/play.webp": cc,
  "/src/widget/icons/repeat.webp": dc,
  "/src/widget/icons/rotate-left.webp": uc,
  "/src/widget/icons/settings.webp": pc,
  "/src/widget/icons/skip.webp": hc,
  "/src/widget/icons/subtitle-off.webp": mc,
  "/src/widget/icons/subtitle.webp": gc,
  "/src/widget/icons/thumbs-down.webp": fc,
  "/src/widget/icons/thumbs-up.webp": bc,
  "/src/widget/icons/touch.webp": vc,
  "/src/widget/icons/translator.webp": Ac,
  "/src/widget/icons/trash.webp": wc,
  "/src/widget/icons/twitter.webp": yc,
  "/src/widget/icons/waiting.webp": xc,
  "/src/widget/icons/worldwide.webp": kc,
  "/src/widget/icons/x.webp": _c,
  "/src/widget/icons/youtube.webp": Sc
}), P = ({ className: e, name: t, colored: r = !1, style: o, ...n }) => {
  const a = Cc[`/src/widget/icons/${t}.webp`];
  return /* @__PURE__ */ i(
    "i",
    {
      ...n,
      className: E(
        "inline-block shrink-0 bg-center bg-contain bg-no-repeat",
        !r && "mask-(--icon) mask-center mask-contain mask-no-repeat bg-current",
        e
      ),
      style: {
        [r ? "backgroundImage" : "--icon"]: `url(${a})`,
        ...o
      }
    }
  );
}, Ec = () => {
  const { progress: e, isLoaded: t } = q(Ae("progress", "isLoaded")), [r, o] = Q(!1);
  return C(() => {
    e === 100 && setTimeout(() => o(!0), 1e3);
  }, [e]), t ? null : /* @__PURE__ */ i(
    "div",
    {
      className: E(
        "absolute inset-0 z-9999999 flex flex-col items-center justify-between border bg-background p-4",
        "rounded-xl"
      ),
      children: [
        /* @__PURE__ */ i("div", { className: "grid place-content-center rounded-full border px-2 py-1", children: /* @__PURE__ */ i(P, { name: "govbr", colored: !0, className: "h-4 w-12" }) }),
        /* @__PURE__ */ i("div", { className: "-mt-4 flex flex-col items-center", children: [
          /* @__PURE__ */ i("div", { className: "mb-2 overflow-hidden rounded-full border-6 border-primary/30", children: /* @__PURE__ */ i("div", { className: "relative flex mobile:size-18 size-20 justify-center overflow-hidden rounded-full bg-primary", children: /* @__PURE__ */ i(P, { name: "icaro", className: "absolute bottom-0 size-14 size-15dmobile: text-primary-foreground" }) }) }),
          /* @__PURE__ */ i("p", { className: "mobile:mb-1 font-bold mobile:text-sm text-base", children: "VLibras Widget" }),
          /* @__PURE__ */ i("span", { className: "font-light text-muted-foreground text-xs", children: [
            "v",
            "7.0.0-alpha.0"
          ] })
        ] }),
        r && /* @__PURE__ */ i("span", { className: "absolute bottom-8 animate-move-up font-semibold text-muted-foreground text-xs", children: "Iniciando..." }),
        /* @__PURE__ */ i("div", { className: "bottom-4 h-2 w-44 rounded-full bg-foreground/10", children: /* @__PURE__ */ i("span", { className: "block h-full rounded-full bg-primary transition-[width]", style: { width: `${e}%` } }) })
      ]
    }
  );
}, Qr = (e, t) => e instanceof Function ? e(t) : e, $o = {
  position: "right",
  text: void 0,
  isOpen: !1,
  isExpanded: !1,
  isLoaded: !1,
  isActive: !1,
  isTranslating: !1,
  isPausedByUser: void 0,
  opacity: 1
}, G = pe()(
  er(
    (e) => ({
      ...$o,
      setLoaded: (t) => e({ isLoaded: t }),
      setExpanded: (t) => e((r) => ({ isExpanded: Qr(t, r.isExpanded) })),
      setOpen: (t) => e((r) => ({ isOpen: Qr(t, r.isOpen) })),
      reset: () => e($o)
    }),
    {
      name: "@vlibras-widget",
      partialize: (e) => Zt(e, "position", "isActive", "isOpen", "opacity"),
      version: 1
    }
  )
), le = {
  get: G.getState,
  set: G.setState,
  subscribe: G.subscribe
}, ba = We(null), tr = () => {
  const e = ve(ba);
  if (!e) throw new Error("useDraggable deve ser usado dentro de <Draggable />");
  return e;
};
function Rc({ children: e }) {
  const t = X(null), r = X({ x: 0, y: 0 }), o = G((b) => b.isExpanded), [n, a] = Q({ x: 0, y: 0 }), [s, l] = Q(!1), [c, u] = Q(!1), p = () => {
    a({ x: 0, y: 0 }), l(!1);
  };
  C(() => {
    if (!t.current || !s || !o) return;
    const m = setTimeout(() => {
      if (!t.current) return;
      const g = t.current.getBoundingClientRect(), f = window.innerWidth - g.width, A = window.innerHeight - g.height;
      a((w) => {
        const y = Math.max(0, Math.min(w.x, f)), v = Math.max(0, Math.min(w.y, A));
        return y === w.x && v === w.y ? w : { x: y, y: v };
      });
    }, 200);
    return () => clearTimeout(m);
  }, [o]), C(() => {
    const b = () => {
      !t.current || !s || a((m) => {
        if (!t.current) return m;
        const g = t.current.getBoundingClientRect(), f = window.innerWidth - g.width, A = window.innerHeight - g.height, w = Math.max(0, Math.min(m.x, f)), y = Math.max(0, Math.min(m.y, A));
        return w !== m.x || y !== m.y ? { x: w, y } : m;
      });
    };
    return window.addEventListener("resize", b), () => window.removeEventListener("resize", b);
  }, [s]), C(() => {
    const b = (g) => {
      if (!c || !t.current) return;
      g.cancelable && g.preventDefault();
      const f = g.clientX - r.current.x, A = g.clientY - r.current.y, w = t.current.getBoundingClientRect(), y = Math.max(0, Math.min(f, window.innerWidth - w.width)), v = Math.max(0, Math.min(A, window.innerHeight - w.height));
      a({ x: y, y: v }), s || l(!0);
    }, m = () => {
      u(!1), document.body.style.userSelect = "", document.body.style.touchAction = "";
    };
    return window.addEventListener("pointermove", b), window.addEventListener("pointerup", m), window.addEventListener("pointercancel", m), () => {
      window.removeEventListener("pointermove", b), window.removeEventListener("pointerup", m), window.removeEventListener("pointercancel", m);
    };
  }, [s, c]), C(() => {
    if (t.current) {
      const b = t.current.getBoundingClientRect();
      a({ x: b.left, y: b.top });
    }
  }, []);
  const d = {
    ref: t,
    hasMoved: s,
    pos: n,
    isDragging: c,
    reset: p,
    onPointerDown: (b) => {
      if (!t.current) return;
      b.cancelable && b.preventDefault(), b.currentTarget.setPointerCapture(b.pointerId), u(!0);
      const m = t.current.getBoundingClientRect();
      r.current = { x: b.clientX - m.left, y: b.clientY - m.top }, s || (a({ x: m.left, y: m.top }), l(!0)), document.body.style.userSelect = "none", document.body.style.touchAction = "none";
    }
  };
  return /* @__PURE__ */ i(ba.Provider, { value: d, children: e(d) });
}
const en = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, tn = na, At = (e, t) => (r) => {
  var o;
  if (t?.variants == null) return tn(e, r?.class, r?.className);
  const { variants: n, defaultVariants: a } = t, s = Object.keys(n).map((u) => {
    const p = r?.[u], h = a?.[u];
    if (p === null) return null;
    const d = en(p) || en(h);
    return n[u][d];
  }), l = r && Object.entries(r).reduce((u, p) => {
    let [h, d] = p;
    return d === void 0 || (u[h] = d), u;
  }, {}), c = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((u, p) => {
    let { class: h, className: d, ...b } = p;
    return Object.entries(b).every((m) => {
      let [g, f] = m;
      return Array.isArray(f) ? f.includes({
        ...a,
        ...l
      }[g]) : {
        ...a,
        ...l
      }[g] === f;
    }) ? [
      ...u,
      h,
      d
    ] : u;
  }, []);
  return tn(e, s, c, r?.class, r?.className);
}, so = At(
  "flex cursor-pointer items-center justify-center [&>svg]:shrink-0 [&>i:not([class*='size-'])]:size-5.25 gap-x-2 rounded-lg text-foreground",
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
        sm: "h-8 gap-1.5 px-3 py-1.25 text-sm [&>i:not([class*='size-'])]:size-5",
        xs: "h-7 gap-1 px-2.5 py-1 text-xs [&>i:not([class*='size-'])]:size-4",
        icon: "h-9 w-9 min-w-9 [&>i:not([class*='size-'])]:size-5.25",
        "icon-xl": "h-12 w-12 min-w-12 [&>i:not([class*='size-'])]:size-6.5",
        "icon-lg": "h-10 w-10 min-w-10 [&>i:not([class*='size-'])]:size-6",
        "icon-sm": "h-8 w-8 min-w-8 text-sm [&>i:not([class*='size-'])]:size-4.5",
        "icon-xs": "h-7 w-7 min-w-7 [&>i:not([class*='size-'])]:size-4"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), z = ({ children: e, disabled: t, className: r, variant: o, size: n, ref: a, ...s }) => /* @__PURE__ */ i(
  "button",
  {
    inert: t,
    tabIndex: t ? -1 : 0,
    disabled: t,
    ref: a,
    className: E(so({ variant: o, size: n }), t && "opacity-50", r),
    type: s.type || "button",
    ...s,
    children: e
  }
), fe = pe()((e) => ({
  screen: "main",
  open: (t) => e({ screen: t }),
  closeAll: () => e({ screen: "main" })
})), zr = {
  get: fe.getState,
  set: fe.setState,
  subscribe: fe.subscribe
}, va = ({ children: e, className: t, ...r }) => /* @__PURE__ */ i(
  "div",
  {
    autofocus: !0,
    className: E("absolute inset-0 z-999999 flex animate-move-right flex-col rounded-xl bg-background", t),
    ...r,
    children: e
  }
), Aa = ({ children: e, className: t, ...r }) => {
  const { onPointerDown: o } = tr();
  return /* @__PURE__ */ i("div", { className: "relative", children: [
    /* @__PURE__ */ i("div", { className: E("flex h-min items-center gap-3 border-b p-2 *:z-10", t), ...r, children: [
      r.close && /* @__PURE__ */ i(Pc, {}),
      e
    ] }),
    /* @__PURE__ */ i(
      "div",
      {
        className: E(
          "absolute inset-0 z-0 touch-none",
          "not-expanded:hover:cursor-move sm:hover:cursor-move"
        ),
        onPointerDown: o
      }
    )
  ] });
}, Pc = ({ className: e, ...t }) => {
  const r = fe((n) => n.closeAll), o = $();
  return /* @__PURE__ */ i(
    z,
    {
      "aria-labe": "Fechar",
      onClick: r,
      variant: "outline",
      size: o ? "icon-sm" : "icon",
      className: e,
      ...t,
      children: /* @__PURE__ */ i(P, { name: "arrow-left", "aria-hidden": "true" })
    }
  );
}, wa = ({ children: e, className: t, ...r }) => /* @__PURE__ */ i("h3", { className: E("pointer-events-none font-semibold mobile:text-sm text-base", t), ...r, children: e }), ya = ({ children: e, className: t, ...r }) => /* @__PURE__ */ i("div", { className: E("flex h-full flex-col gap-4 overflow-y-auto p-4", t), ...r, children: e }), rn = ({ label: e, description: t, children: r, className: o }) => /* @__PURE__ */ i("div", { className: `flex flex-col gap-2 ${o}`, children: [
  /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ i("p", { className: "font-bold text-base", children: e }),
    t && /* @__PURE__ */ i("p", { className: "text-muted-foreground text-xs", children: t })
  ] }),
  /* @__PURE__ */ i("div", { children: r })
] }), Ic = [
  { href: "https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras", iconName: "worldwide" },
  { href: "https://www.facebook.com/vlibras", iconName: "facebook" },
  { href: "https://www.instagram.com/vlibrasoficial", iconName: "instagram" },
  { href: "https://x.com/VLibrasoficial", iconName: "twitter" },
  { href: "https://www.youtube.com/@vlibras-lavid3180", iconName: "youtube" }
], Nc = () => /* @__PURE__ */ i(va, { children: [
  /* @__PURE__ */ i(Aa, { close: !0, children: /* @__PURE__ */ i(wa, { children: "Sobre" }) }),
  /* @__PURE__ */ i(ya, { className: "flex flex-col text-sm", children: [
    /* @__PURE__ */ i(rn, { label: "Sobre o VLibras", children: /* @__PURE__ */ i("p", { className: "", children: [
      "A ",
      /* @__PURE__ */ i("strong", { children: "Suíte VLibras" }),
      " é um conjunto de ferramentas gratuitas de código aberto que traduz conteúdo digital (texto, áudio e vídeo) em Português para Libras."
    ] }) }),
    /* @__PURE__ */ i(rn, { label: "Realizadores", children: /* @__PURE__ */ i("div", { className: "flex w-full flex-col justify-between gap-2 rounded-xl bg-white p-2", children: [
      /* @__PURE__ */ i("div", { className: "flex w-full items-center justify-between gap-2", children: [
        /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 justify-start", children: /* @__PURE__ */ i("img", { src: cl, alt: "logo do Ministério dos Direitos Humanos e da Cidadania" }) }),
        /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 justify-start", children: /* @__PURE__ */ i("img", { src: dl, alt: "logo do Ministério da Gestão e da Inovação em Serviços Públicos" }) })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-center justify-start", children: /* @__PURE__ */ i("img", { src: ll, alt: "logo do lavid", className: "max-w-15" }) }),
        /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-center justify-start", children: /* @__PURE__ */ i("img", { src: ul, alt: "logo da RNP" }) }),
        /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-center justify-start", children: /* @__PURE__ */ i("img", { src: Ls, alt: "logo da Câmara dos Deputados" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ i("div", { className: "relative mobile:-m-2 mt-auto! flex min-h-32 flex-col overflow-hidden rounded-xl border p-4 font-semibold text-primary-foreground dark:bg-muted", children: [
      /* @__PURE__ */ i("p", { className: "text-center", children: "Nos acompanhe nas redes sociais" }),
      /* @__PURE__ */ i(
        "div",
        {
          className: E(
            "z-999 mt-auto flex w-full items-center justify-between gap-2",
            "[&_button]:w-full [&_button]:rounded-full [&_button]:bg-primary-foreground [&_button]:text-primary"
          ),
          children: Ic.map(({ href: e, iconName: t }) => /* @__PURE__ */ i(
            "a",
            {
              href: e,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "grid place-content-center rounded-full bg-white p-2",
              children: /* @__PURE__ */ i(P, { name: t, className: "size-4 bg-primary" })
            },
            e
          ))
        }
      ),
      /* @__PURE__ */ i(P, { name: "icaro", className: "absolute top-4 left-0 z-1 size-32 opacity-15 dark:text-white dark:opacity-10" }),
      /* @__PURE__ */ i("div", { className: "absolute inset-0 -z-10 bg-primary" })
    ] })
  ] })
] });
function lo(e) {
  const t = We(null), r = ({ children: a, data: s }) => {
    const l = X(null);
    return l.current || (l.current = Gn(() => ({ data: s }))), C(() => {
      l?.current?.setState({ data: s });
    }, [s]), /* @__PURE__ */ i(t.Provider, { value: l.current, children: a });
  }, o = (a) => {
    const s = ve(t);
    if (!s) throw new Error("useContext must be used within its Provider");
    return $n(s, a);
  };
  return { Context: t, Provider: r, useCtx: () => o((a) => a.data) };
}
var nt = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, Tc = class extends nt {
  #e;
  #t;
  #r;
  constructor() {
    super(), this.#r = (e) => {
      if (typeof window < "u" && window.addEventListener) {
        const t = () => e();
        return window.addEventListener("visibilitychange", t, !1), () => {
          window.removeEventListener("visibilitychange", t);
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
  setEventListener(e) {
    this.#r = e, this.#t?.(), this.#t = e((t) => {
      typeof t == "boolean" ? this.setFocused(t) : this.onFocus();
    });
  }
  setFocused(e) {
    this.#e !== e && (this.#e = e, this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((t) => {
      t(e);
    });
  }
  isFocused() {
    return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden";
  }
}, co = new Tc(), Tt = {}, Oc = {
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
  setTimeout: (e, t) => setTimeout(e, t),
  clearTimeout: (e) => clearTimeout(e),
  setInterval: (e, t) => setInterval(e, t),
  clearInterval: (e) => clearInterval(e)
}, Uc = class {
  // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
  // type at app boot; and if we leave that type, then any new timer provider
  // would need to support the default provider's concrete timer ID, which is
  // infeasible across environments.
  //
  // We settle for type safety for the TimeoutProvider type, and accept that
  // this class is unsafe internally to allow for extension.
  #e = Oc;
  #t = !1;
  setTimeoutProvider(e) {
    Tt.NODE_ENV !== "production" && this.#t && e !== this.#e && console.error(
      "[timeoutManager]: Switching provider after calls to previous provider might result in unexpected behavior.",
      { previous: this.#e, provider: e }
    ), this.#e = e, Tt.NODE_ENV !== "production" && (this.#t = !1);
  }
  setTimeout(e, t) {
    return Tt.NODE_ENV !== "production" && (this.#t = !0), this.#e.setTimeout(e, t);
  }
  clearTimeout(e) {
    this.#e.clearTimeout(e);
  }
  setInterval(e, t) {
    return Tt.NODE_ENV !== "production" && (this.#t = !0), this.#e.setInterval(e, t);
  }
  clearInterval(e) {
    this.#e.clearInterval(e);
  }
}, Me = new Uc();
function Bc(e) {
  setTimeout(e, 0);
}
var xa = {}, Qc = typeof window > "u" || "Deno" in globalThis;
function ae() {
}
function zc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Dr(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function ka(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Te(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function me(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function on(e, t) {
  const {
    type: r = "all",
    exact: o,
    fetchStatus: n,
    predicate: a,
    queryKey: s,
    stale: l
  } = e;
  if (s) {
    if (o) {
      if (t.queryHash !== uo(s, t.options))
        return !1;
    } else if (!mt(t.queryKey, s))
      return !1;
  }
  if (r !== "all") {
    const c = t.isActive();
    if (r === "active" && !c || r === "inactive" && c)
      return !1;
  }
  return !(typeof l == "boolean" && t.isStale() !== l || n && n !== t.state.fetchStatus || a && !a(t));
}
function nn(e, t) {
  const { exact: r, status: o, predicate: n, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey)
      return !1;
    if (r) {
      if (Fe(t.options.mutationKey) !== Fe(a))
        return !1;
    } else if (!mt(t.options.mutationKey, a))
      return !1;
  }
  return !(o && t.state.status !== o || n && !n(t));
}
function uo(e, t) {
  return (t?.queryKeyHashFn || Fe)(e);
}
function Fe(e) {
  return JSON.stringify(
    e,
    (t, r) => Mr(r) ? Object.keys(r).sort().reduce((o, n) => (o[n] = r[n], o), {}) : r
  );
}
function mt(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every((r) => mt(e[r], t[r])) : !1;
}
var Dc = Object.prototype.hasOwnProperty;
function Lr(e, t, r = 0) {
  if (e === t)
    return e;
  if (r > 500) return t;
  const o = an(e) && an(t);
  if (!o && !(Mr(e) && Mr(t))) return t;
  const a = (o ? e : Object.keys(e)).length, s = o ? t : Object.keys(t), l = s.length, c = o ? new Array(l) : {};
  let u = 0;
  for (let p = 0; p < l; p++) {
    const h = o ? p : s[p], d = e[h], b = t[h];
    if (d === b) {
      c[h] = d, (o ? p < a : Dc.call(e, h)) && u++;
      continue;
    }
    if (d === null || b === null || typeof d != "object" || typeof b != "object") {
      c[h] = b;
      continue;
    }
    const m = Lr(d, b, r + 1);
    c[h] = m, m === d && u++;
  }
  return a === l && u === a ? e : c;
}
function Gt(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function an(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Mr(e) {
  if (!sn(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(!sn(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function sn(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Lc(e) {
  return new Promise((t) => {
    Me.setTimeout(t, e);
  });
}
function Fr(e, t, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(e, t);
  if (r.structuralSharing !== !1) {
    if (xa.NODE_ENV !== "production")
      try {
        return Lr(e, t);
      } catch (o) {
        throw console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${o}`
        ), o;
      }
    return Lr(e, t);
  }
  return t;
}
function Mc(e, t, r = 0) {
  const o = [...e, t];
  return r && o.length > r ? o.slice(1) : o;
}
function Fc(e, t, r = 0) {
  const o = [t, ...e];
  return r && o.length > r ? o.slice(0, -1) : o;
}
var Ht = /* @__PURE__ */ Symbol();
function _a(e, t) {
  return xa.NODE_ENV !== "production" && e.queryFn === Ht && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && t?.initialPromise ? () => t.initialPromise : !e.queryFn || e.queryFn === Ht ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
function Sa(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function jc(e, t, r) {
  let o = !1, n;
  return Object.defineProperty(e, "signal", {
    enumerable: !0,
    get: () => (n ??= t(), o || (o = !0, n.aborted ? r() : n.addEventListener("abort", r, { once: !0 })), n)
  }), e;
}
var gt = /* @__PURE__ */ (() => {
  let e = () => Qc;
  return {
    /**
     * Returns whether the current runtime should be treated as a server environment.
     */
    isServer() {
      return e();
    },
    /**
     * Overrides the server check globally.
     */
    setIsServer(t) {
      e = t;
    }
  };
})();
function jr() {
  let e, t;
  const r = new Promise((n, a) => {
    e = n, t = a;
  });
  r.status = "pending", r.catch(() => {
  });
  function o(n) {
    Object.assign(r, n), delete r.resolve, delete r.reject;
  }
  return r.resolve = (n) => {
    o({
      status: "fulfilled",
      value: n
    }), e(n);
  }, r.reject = (n) => {
    o({
      status: "rejected",
      reason: n
    }), t(n);
  }, r;
}
var Vc = Bc;
function Wc() {
  let e = [], t = 0, r = (l) => {
    l();
  }, o = (l) => {
    l();
  }, n = Vc;
  const a = (l) => {
    t ? e.push(l) : n(() => {
      r(l);
    });
  }, s = () => {
    const l = e;
    e = [], l.length && n(() => {
      o(() => {
        l.forEach((c) => {
          r(c);
        });
      });
    });
  };
  return {
    batch: (l) => {
      let c;
      t++;
      try {
        c = l();
      } finally {
        t--, t || s();
      }
      return c;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (l) => (...c) => {
      a(() => {
        l(...c);
      });
    },
    schedule: a,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (l) => {
      r = l;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (l) => {
      o = l;
    },
    setScheduler: (l) => {
      n = l;
    }
  };
}
var Z = Wc(), Gc = class extends nt {
  #e = !0;
  #t;
  #r;
  constructor() {
    super(), this.#r = (e) => {
      if (typeof window < "u" && window.addEventListener) {
        const t = () => e(!0), r = () => e(!1);
        return window.addEventListener("online", t, !1), window.addEventListener("offline", r, !1), () => {
          window.removeEventListener("online", t), window.removeEventListener("offline", r);
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
  setEventListener(e) {
    this.#r = e, this.#t?.(), this.#t = e(this.setOnline.bind(this));
  }
  setOnline(e) {
    this.#e !== e && (this.#e = e, this.listeners.forEach((r) => {
      r(e);
    }));
  }
  isOnline() {
    return this.#e;
  }
}, Jt = new Gc();
function Hc(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Ca(e) {
  return (e ?? "online") === "online" ? Jt.isOnline() : !0;
}
var Vr = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent;
  }
};
function Ea(e) {
  let t = !1, r = 0, o;
  const n = jr(), a = () => n.status !== "pending", s = (g) => {
    if (!a()) {
      const f = new Vr(g);
      d(f), e.onCancel?.(f);
    }
  }, l = () => {
    t = !0;
  }, c = () => {
    t = !1;
  }, u = () => co.isFocused() && (e.networkMode === "always" || Jt.isOnline()) && e.canRun(), p = () => Ca(e.networkMode) && e.canRun(), h = (g) => {
    a() || (o?.(), n.resolve(g));
  }, d = (g) => {
    a() || (o?.(), n.reject(g));
  }, b = () => new Promise((g) => {
    o = (f) => {
      (a() || u()) && g(f);
    }, e.onPause?.();
  }).then(() => {
    o = void 0, a() || e.onContinue?.();
  }), m = () => {
    if (a())
      return;
    let g;
    const f = r === 0 ? e.initialPromise : void 0;
    try {
      g = f ?? e.fn();
    } catch (A) {
      g = Promise.reject(A);
    }
    Promise.resolve(g).then(h).catch((A) => {
      if (a())
        return;
      const w = e.retry ?? (gt.isServer() ? 0 : 3), y = e.retryDelay ?? Hc, v = typeof y == "function" ? y(r, A) : y, S = w === !0 || typeof w == "number" && r < w || typeof w == "function" && w(r, A);
      if (t || !S) {
        d(A);
        return;
      }
      r++, e.onFail?.(r, A), Lc(v).then(() => u() ? void 0 : b()).then(() => {
        t ? d(A) : m();
      });
    });
  };
  return {
    promise: n,
    status: () => n.status,
    cancel: s,
    continue: () => (o?.(), n),
    cancelRetry: l,
    continueRetry: c,
    canStart: p,
    start: () => (p() ? m() : b().then(m), n)
  };
}
var Ra = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Dr(this.gcTime) && (this.#e = Me.setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (gt.isServer() ? 1 / 0 : 300 * 1e3)
    );
  }
  clearGcTimeout() {
    this.#e && (Me.clearTimeout(this.#e), this.#e = void 0);
  }
}, ln = {}, Jc = class extends Ra {
  #e;
  #t;
  #r;
  #n;
  #o;
  #a;
  #i;
  constructor(e) {
    super(), this.#i = !1, this.#a = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#n = e.client, this.#r = this.#n.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#e = dn(this.options), this.state = e.state ?? this.#e, this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    return this.#o?.promise;
  }
  setOptions(e) {
    if (this.options = { ...this.#a, ...e }, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
      const t = dn(this.options);
      t.data !== void 0 && (this.setState(
        cn(t.data, t.dataUpdatedAt)
      ), this.#e = t);
    }
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && this.#r.remove(this);
  }
  setData(e, t) {
    const r = Fr(this.state.data, e, this.options);
    return this.#l({
      data: r,
      type: "success",
      dataUpdatedAt: t?.updatedAt,
      manual: t?.manual
    }), r;
  }
  setState(e, t) {
    this.#l({ type: "setState", state: e, setStateOptions: t });
  }
  cancel(e) {
    const t = this.#o?.promise;
    return this.#o?.cancel(e), t ? t.then(ae).catch(ae) : Promise.resolve();
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
      (e) => me(e.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Ht || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return this.getObserversCount() > 0 ? this.observers.some(
      (e) => Te(e.options.staleTime, this) === "static"
    ) : !1;
  }
  isStale() {
    return this.getObserversCount() > 0 ? this.observers.some(
      (e) => e.getCurrentResult().isStale
    ) : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(e = 0) {
    return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !ka(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    this.observers.find((t) => t.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: !1 }), this.#o?.continue();
  }
  onOnline() {
    this.observers.find((t) => t.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }), this.#o?.continue();
  }
  addObserver(e) {
    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#r.notify({ type: "observerAdded", query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) && (this.observers = this.observers.filter((t) => t !== e), this.observers.length || (this.#o && (this.#i || this.#s() ? this.#o.cancel({ revert: !0 }) : this.#o.cancelRetry()), this.scheduleGc()), this.#r.notify({ type: "observerRemoved", query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  #s() {
    return this.state.fetchStatus === "paused" && this.state.status === "pending";
  }
  invalidate() {
    this.state.isInvalidated || this.#l({ type: "invalidate" });
  }
  async fetch(e, t) {
    if (this.state.fetchStatus !== "idle" && // If the promise in the retryer is already rejected, we have to definitely
    // re-start the fetch; there is a chance that the query is still in a
    // pending state when that happens
    this.#o?.status() !== "rejected") {
      if (this.state.data !== void 0 && t?.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.#o)
        return this.#o.continueRetry(), this.#o.promise;
    }
    if (e && this.setOptions(e), !this.options.queryFn) {
      const l = this.observers.find((c) => c.options.queryFn);
      l && this.setOptions(l.options);
    }
    ln.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const r = new AbortController(), o = (l) => {
      Object.defineProperty(l, "signal", {
        enumerable: !0,
        get: () => (this.#i = !0, r.signal)
      });
    }, n = () => {
      const l = _a(this.options, t), u = (() => {
        const p = {
          client: this.#n,
          queryKey: this.queryKey,
          meta: this.meta
        };
        return o(p), p;
      })();
      return this.#i = !1, this.options.persister ? this.options.persister(
        l,
        u,
        this
      ) : l(u);
    }, s = (() => {
      const l = {
        fetchOptions: t,
        options: this.options,
        queryKey: this.queryKey,
        client: this.#n,
        state: this.state,
        fetchFn: n
      };
      return o(l), l;
    })();
    this.options.behavior?.onFetch(s, this), this.#t = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== s.fetchOptions?.meta) && this.#l({ type: "fetch", meta: s.fetchOptions?.meta }), this.#o = Ea({
      initialPromise: t?.initialPromise,
      fn: s.fetchFn,
      onCancel: (l) => {
        l instanceof Vr && l.revert && this.setState({
          ...this.#t,
          fetchStatus: "idle"
        }), r.abort();
      },
      onFail: (l, c) => {
        this.#l({ type: "failed", failureCount: l, error: c });
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
      const l = await this.#o.start();
      if (l === void 0)
        throw ln.NODE_ENV !== "production" && console.error(
          `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
        ), new Error(`${this.queryHash} data is undefined`);
      return this.setData(l), this.#r.config.onSuccess?.(l, this), this.#r.config.onSettled?.(
        l,
        this.state.error,
        this
      ), l;
    } catch (l) {
      if (l instanceof Vr) {
        if (l.silent)
          return this.#o.promise;
        if (l.revert) {
          if (this.state.data === void 0)
            throw l;
          return this.state.data;
        }
      }
      throw this.#l({
        type: "error",
        error: l
      }), this.#r.config.onError?.(
        l,
        this
      ), this.#r.config.onSettled?.(
        this.state.data,
        l,
        this
      ), l;
    } finally {
      this.scheduleGc();
    }
  }
  #l(e) {
    const t = (r) => {
      switch (e.type) {
        case "failed":
          return {
            ...r,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error
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
            ...Pa(r.data, this.options),
            fetchMeta: e.meta ?? null
          };
        case "success":
          const o = {
            ...r,
            ...cn(e.data, e.dataUpdatedAt),
            dataUpdateCount: r.dataUpdateCount + 1,
            ...!e.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
          return this.#t = e.manual ? o : void 0, o;
        case "error":
          const n = e.error;
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
            ...e.state
          };
      }
    };
    this.state = t(this.state), Z.batch(() => {
      this.observers.forEach((r) => {
        r.onQueryUpdate();
      }), this.#r.notify({ query: this, type: "updated", action: e });
    });
  }
};
function Pa(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Ca(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function cn(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success"
  };
}
function dn(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, r = t !== void 0, o = r ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? o ?? Date.now() : 0,
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
var Kc = class extends nt {
  constructor(e, t) {
    super(), this.options = t, this.#e = e, this.#s = null, this.#i = jr(), this.bindMethods(), this.setOptions(t);
  }
  #e;
  #t = void 0;
  #r = void 0;
  #n = void 0;
  #o;
  #a;
  #i;
  #s;
  #l;
  #h;
  // This property keeps track of the last query with defined data.
  // It will be used to pass the previous data and query to the placeholder function between renders.
  #m;
  #d;
  #u;
  #c;
  #g = /* @__PURE__ */ new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (this.#t.addObserver(this), un(this.#t, this.options) ? this.#p() : this.updateResult(), this.#A());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Wr(
      this.#t,
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Wr(
      this.#t,
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), this.#w(), this.#y(), this.#t.removeObserver(this);
  }
  setOptions(e) {
    const t = this.options, r = this.#t;
    if (this.options = this.#e.defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof me(this.options.enabled, this.#t) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    this.#x(), this.#t.setOptions(this.options), t._defaulted && !Gt(this.options, t) && this.#e.getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: this.#t,
      observer: this
    });
    const o = this.hasListeners();
    o && pn(
      this.#t,
      r,
      this.options,
      t
    ) && this.#p(), this.updateResult(), o && (this.#t !== r || me(this.options.enabled, this.#t) !== me(t.enabled, this.#t) || Te(this.options.staleTime, this.#t) !== Te(t.staleTime, this.#t)) && this.#f();
    const n = this.#b();
    o && (this.#t !== r || me(this.options.enabled, this.#t) !== me(t.enabled, this.#t) || n !== this.#c) && this.#v(n);
  }
  getOptimisticResult(e) {
    const t = this.#e.getQueryCache().build(this.#e, e), r = this.createResult(t, e);
    return qc(this, r) && (this.#n = r, this.#a = this.options, this.#o = this.#t.state), r;
  }
  getCurrentResult() {
    return this.#n;
  }
  trackResult(e, t) {
    return new Proxy(e, {
      get: (r, o) => (this.trackProp(o), t?.(o), o === "promise" && (this.trackProp("data"), !this.options.experimental_prefetchInRender && this.#i.status === "pending" && this.#i.reject(
        new Error(
          "experimental_prefetchInRender feature flag is not enabled"
        )
      )), Reflect.get(r, o))
    });
  }
  trackProp(e) {
    this.#g.add(e);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const t = this.#e.defaultQueryOptions(e), r = this.#e.getQueryCache().build(this.#e, t);
    return r.fetch().then(() => this.createResult(r, t));
  }
  fetch(e) {
    return this.#p({
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), this.#n));
  }
  #p(e) {
    this.#x();
    let t = this.#t.fetch(
      this.options,
      e
    );
    return e?.throwOnError || (t = t.catch(ae)), t;
  }
  #f() {
    this.#w();
    const e = Te(
      this.options.staleTime,
      this.#t
    );
    if (gt.isServer() || this.#n.isStale || !Dr(e))
      return;
    const r = ka(this.#n.dataUpdatedAt, e) + 1;
    this.#d = Me.setTimeout(() => {
      this.#n.isStale || this.updateResult();
    }, r);
  }
  #b() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#t) : this.options.refetchInterval) ?? !1;
  }
  #v(e) {
    this.#y(), this.#c = e, !(gt.isServer() || me(this.options.enabled, this.#t) === !1 || !Dr(this.#c) || this.#c === 0) && (this.#u = Me.setInterval(() => {
      (this.options.refetchIntervalInBackground || co.isFocused()) && this.#p();
    }, this.#c));
  }
  #A() {
    this.#f(), this.#v(this.#b());
  }
  #w() {
    this.#d && (Me.clearTimeout(this.#d), this.#d = void 0);
  }
  #y() {
    this.#u && (Me.clearInterval(this.#u), this.#u = void 0);
  }
  createResult(e, t) {
    const r = this.#t, o = this.options, n = this.#n, a = this.#o, s = this.#a, c = e !== r ? e.state : this.#r, { state: u } = e;
    let p = { ...u }, h = !1, d;
    if (t._optimisticResults) {
      const x = this.hasListeners(), L = !x && un(e, t), te = x && pn(e, r, t, o);
      (L || te) && (p = {
        ...p,
        ...Pa(u.data, e.options)
      }), t._optimisticResults === "isRestoring" && (p.fetchStatus = "idle");
    }
    let { error: b, errorUpdatedAt: m, status: g } = p;
    d = p.data;
    let f = !1;
    if (t.placeholderData !== void 0 && d === void 0 && g === "pending") {
      let x;
      n?.isPlaceholderData && t.placeholderData === s?.placeholderData ? (x = n.data, f = !0) : x = typeof t.placeholderData == "function" ? t.placeholderData(
        this.#m?.state.data,
        this.#m
      ) : t.placeholderData, x !== void 0 && (g = "success", d = Fr(
        n?.data,
        x,
        t
      ), h = !0);
    }
    if (t.select && d !== void 0 && !f)
      if (n && d === a?.data && t.select === this.#l)
        d = this.#h;
      else
        try {
          this.#l = t.select, d = t.select(d), d = Fr(n?.data, d, t), this.#h = d, this.#s = null;
        } catch (x) {
          this.#s = x;
        }
    this.#s && (b = this.#s, d = this.#h, m = Date.now(), g = "error");
    const A = p.fetchStatus === "fetching", w = g === "pending", y = g === "error", v = w && A, S = d !== void 0, U = {
      status: g,
      fetchStatus: p.fetchStatus,
      isPending: w,
      isSuccess: g === "success",
      isError: y,
      isInitialLoading: v,
      isLoading: v,
      data: d,
      dataUpdatedAt: p.dataUpdatedAt,
      error: b,
      errorUpdatedAt: m,
      failureCount: p.fetchFailureCount,
      failureReason: p.fetchFailureReason,
      errorUpdateCount: p.errorUpdateCount,
      isFetched: e.isFetched(),
      isFetchedAfterMount: p.dataUpdateCount > c.dataUpdateCount || p.errorUpdateCount > c.errorUpdateCount,
      isFetching: A,
      isRefetching: A && !w,
      isLoadingError: y && !S,
      isPaused: p.fetchStatus === "paused",
      isPlaceholderData: h,
      isRefetchError: y && S,
      isStale: po(e, t),
      refetch: this.refetch,
      promise: this.#i,
      isEnabled: me(t.enabled, e) !== !1
    };
    if (this.options.experimental_prefetchInRender) {
      const x = U.data !== void 0, L = U.status === "error" && !x, te = (de) => {
        L ? de.reject(U.error) : x && de.resolve(U.data);
      }, oe = () => {
        const de = this.#i = U.promise = jr();
        te(de);
      }, K = this.#i;
      switch (K.status) {
        case "pending":
          e.queryHash === r.queryHash && te(K);
          break;
        case "fulfilled":
          (L || U.data !== K.value) && oe();
          break;
        case "rejected":
          (!L || U.error !== K.reason) && oe();
          break;
      }
    }
    return U;
  }
  updateResult() {
    const e = this.#n, t = this.createResult(this.#t, this.options);
    if (this.#o = this.#t.state, this.#a = this.options, this.#o.data !== void 0 && (this.#m = this.#t), Gt(t, e))
      return;
    this.#n = t;
    const r = () => {
      if (!e)
        return !0;
      const { notifyOnChangeProps: o } = this.options, n = typeof o == "function" ? o() : o;
      if (n === "all" || !n && !this.#g.size)
        return !0;
      const a = new Set(
        n ?? this.#g
      );
      return this.options.throwOnError && a.add("error"), Object.keys(this.#n).some((s) => {
        const l = s;
        return this.#n[l] !== e[l] && a.has(l);
      });
    };
    this.#k({ listeners: r() });
  }
  #x() {
    const e = this.#e.getQueryCache().build(this.#e, this.options);
    if (e === this.#t)
      return;
    const t = this.#t;
    this.#t = e, this.#r = e.state, this.hasListeners() && (t?.removeObserver(this), e.addObserver(this));
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && this.#A();
  }
  #k(e) {
    Z.batch(() => {
      e.listeners && this.listeners.forEach((t) => {
        t(this.#n);
      }), this.#e.getQueryCache().notify({
        query: this.#t,
        type: "observerResultsUpdated"
      });
    });
  }
};
function Xc(e, t) {
  return me(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function un(e, t) {
  return Xc(e, t) || e.state.data !== void 0 && Wr(e, t, t.refetchOnMount);
}
function Wr(e, t, r) {
  if (me(t.enabled, e) !== !1 && Te(t.staleTime, e) !== "static") {
    const o = typeof r == "function" ? r(e) : r;
    return o === "always" || o !== !1 && po(e, t);
  }
  return !1;
}
function pn(e, t, r, o) {
  return (e !== t || me(o.enabled, e) === !1) && (!r.suspense || e.state.status !== "error") && po(e, r);
}
function po(e, t) {
  return me(t.enabled, e) !== !1 && e.isStaleByTime(Te(t.staleTime, e));
}
function qc(e, t) {
  return !Gt(e.getCurrentResult(), t);
}
function hn(e) {
  return {
    onFetch: (t, r) => {
      const o = t.options, n = t.fetchOptions?.meta?.fetchMore?.direction, a = t.state.data?.pages || [], s = t.state.data?.pageParams || [];
      let l = { pages: [], pageParams: [] }, c = 0;
      const u = async () => {
        let p = !1;
        const h = (m) => {
          jc(
            m,
            () => t.signal,
            () => p = !0
          );
        }, d = _a(t.options, t.fetchOptions), b = async (m, g, f) => {
          if (p)
            return Promise.reject();
          if (g == null && m.pages.length)
            return Promise.resolve(m);
          const w = (() => {
            const N = {
              client: t.client,
              queryKey: t.queryKey,
              pageParam: g,
              direction: f ? "backward" : "forward",
              meta: t.options.meta
            };
            return h(N), N;
          })(), y = await d(w), { maxPages: v } = t.options, S = f ? Fc : Mc;
          return {
            pages: S(m.pages, y, v),
            pageParams: S(m.pageParams, g, v)
          };
        };
        if (n && a.length) {
          const m = n === "backward", g = m ? Yc : mn, f = {
            pages: a,
            pageParams: s
          }, A = g(o, f);
          l = await b(f, A, m);
        } else {
          const m = e ?? a.length;
          do {
            const g = c === 0 ? s[0] ?? o.initialPageParam : mn(o, l);
            if (c > 0 && g == null)
              break;
            l = await b(l, g), c++;
          } while (c < m);
        }
        return l;
      };
      t.options.persister ? t.fetchFn = () => t.options.persister?.(
        u,
        {
          client: t.client,
          queryKey: t.queryKey,
          meta: t.options.meta,
          signal: t.signal
        },
        r
      ) : t.fetchFn = u;
    }
  };
}
function mn(e, { pages: t, pageParams: r }) {
  const o = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[o],
    t,
    r[o],
    r
  ) : void 0;
}
function Yc(e, { pages: t, pageParams: r }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, r[0], r) : void 0;
}
var Zc = class extends Ra {
  #e;
  #t;
  #r;
  #n;
  constructor(e) {
    super(), this.#e = e.client, this.mutationId = e.mutationId, this.#r = e.mutationCache, this.#t = [], this.state = e.state || Ia(), this.setOptions(e.options), this.scheduleGc();
  }
  setOptions(e) {
    this.options = e, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#t.includes(e) || (this.#t.push(e), this.clearGcTimeout(), this.#r.notify({
      type: "observerAdded",
      mutation: this,
      observer: e
    }));
  }
  removeObserver(e) {
    this.#t = this.#t.filter((t) => t !== e), this.scheduleGc(), this.#r.notify({
      type: "observerRemoved",
      mutation: this,
      observer: e
    });
  }
  optionalRemove() {
    this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#r.remove(this));
  }
  continue() {
    return this.#n?.continue() ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(e) {
    const t = () => {
      this.#o({ type: "continue" });
    }, r = {
      client: this.#e,
      meta: this.options.meta,
      mutationKey: this.options.mutationKey
    };
    this.#n = Ea({
      fn: () => this.options.mutationFn ? this.options.mutationFn(e, r) : Promise.reject(new Error("No mutationFn found")),
      onFail: (a, s) => {
        this.#o({ type: "failed", failureCount: a, error: s });
      },
      onPause: () => {
        this.#o({ type: "pause" });
      },
      onContinue: t,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#r.canRun(this)
    });
    const o = this.state.status === "pending", n = !this.#n.canStart();
    try {
      if (o)
        t();
      else {
        this.#o({ type: "pending", variables: e, isPaused: n }), this.#r.config.onMutate && await this.#r.config.onMutate(
          e,
          this,
          r
        );
        const s = await this.options.onMutate?.(
          e,
          r
        );
        s !== this.state.context && this.#o({
          type: "pending",
          context: s,
          variables: e,
          isPaused: n
        });
      }
      const a = await this.#n.start();
      return await this.#r.config.onSuccess?.(
        a,
        e,
        this.state.context,
        this,
        r
      ), await this.options.onSuccess?.(
        a,
        e,
        this.state.context,
        r
      ), await this.#r.config.onSettled?.(
        a,
        null,
        this.state.variables,
        this.state.context,
        this,
        r
      ), await this.options.onSettled?.(
        a,
        null,
        e,
        this.state.context,
        r
      ), this.#o({ type: "success", data: a }), a;
    } catch (a) {
      try {
        await this.#r.config.onError?.(
          a,
          e,
          this.state.context,
          this,
          r
        );
      } catch (s) {
        Promise.reject(s);
      }
      try {
        await this.options.onError?.(
          a,
          e,
          this.state.context,
          r
        );
      } catch (s) {
        Promise.reject(s);
      }
      try {
        await this.#r.config.onSettled?.(
          void 0,
          a,
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
          a,
          e,
          this.state.context,
          r
        );
      } catch (s) {
        Promise.reject(s);
      }
      throw this.#o({ type: "error", error: a }), a;
    } finally {
      this.#r.runNext(this);
    }
  }
  #o(e) {
    const t = (r) => {
      switch (e.type) {
        case "failed":
          return {
            ...r,
            failureCount: e.failureCount,
            failureReason: e.error
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
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: "pending",
            variables: e.variables,
            submittedAt: Date.now()
          };
        case "success":
          return {
            ...r,
            data: e.data,
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
            error: e.error,
            failureCount: r.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: "error"
          };
      }
    };
    this.state = t(this.state), Z.batch(() => {
      this.#t.forEach((r) => {
        r.onMutationUpdate(e);
      }), this.#r.notify({
        mutation: this,
        type: "updated",
        action: e
      });
    });
  }
};
function Ia() {
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
var $c = class extends nt {
  constructor(e = {}) {
    super(), this.config = e, this.#e = /* @__PURE__ */ new Set(), this.#t = /* @__PURE__ */ new Map(), this.#r = 0;
  }
  #e;
  #t;
  #r;
  build(e, t, r) {
    const o = new Zc({
      client: e,
      mutationCache: this,
      mutationId: ++this.#r,
      options: e.defaultMutationOptions(t),
      state: r
    });
    return this.add(o), o;
  }
  add(e) {
    this.#e.add(e);
    const t = Ot(e);
    if (typeof t == "string") {
      const r = this.#t.get(t);
      r ? r.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      const t = Ot(e);
      if (typeof t == "string") {
        const r = this.#t.get(t);
        if (r)
          if (r.length > 1) {
            const o = r.indexOf(e);
            o !== -1 && r.splice(o, 1);
          } else r[0] === e && this.#t.delete(t);
      }
    }
    this.notify({ type: "removed", mutation: e });
  }
  canRun(e) {
    const t = Ot(e);
    if (typeof t == "string") {
      const o = this.#t.get(t)?.find(
        (n) => n.state.status === "pending"
      );
      return !o || o === e;
    } else
      return !0;
  }
  runNext(e) {
    const t = Ot(e);
    return typeof t == "string" ? this.#t.get(t)?.find((o) => o !== e && o.state.isPaused)?.continue() ?? Promise.resolve() : Promise.resolve();
  }
  clear() {
    Z.batch(() => {
      this.#e.forEach((e) => {
        this.notify({ type: "removed", mutation: e });
      }), this.#e.clear(), this.#t.clear();
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(e) {
    const t = { exact: !0, ...e };
    return this.getAll().find(
      (r) => nn(t, r)
    );
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => nn(e, t));
  }
  notify(e) {
    Z.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    const e = this.getAll().filter((t) => t.state.isPaused);
    return Z.batch(
      () => Promise.all(
        e.map((t) => t.continue().catch(ae))
      )
    );
  }
};
function Ot(e) {
  return e.options.scope?.id;
}
var ed = class extends nt {
  #e;
  #t = void 0;
  #r;
  #n;
  constructor(t, r) {
    super(), this.#e = t, this.setOptions(r), this.bindMethods(), this.#o();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    const r = this.options;
    this.options = this.#e.defaultMutationOptions(t), Gt(this.options, r) || this.#e.getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: this.#r,
      observer: this
    }), r?.mutationKey && this.options.mutationKey && Fe(r.mutationKey) !== Fe(this.options.mutationKey) ? this.reset() : this.#r?.state.status === "pending" && this.#r.setOptions(this.options);
  }
  onUnsubscribe() {
    this.hasListeners() || this.#r?.removeObserver(this);
  }
  onMutationUpdate(t) {
    this.#o(), this.#a(t);
  }
  getCurrentResult() {
    return this.#t;
  }
  reset() {
    this.#r?.removeObserver(this), this.#r = void 0, this.#o(), this.#a();
  }
  mutate(t, r) {
    return this.#n = r, this.#r?.removeObserver(this), this.#r = this.#e.getMutationCache().build(this.#e, this.options), this.#r.addObserver(this), this.#r.execute(t);
  }
  #o() {
    const t = this.#r?.state ?? Ia();
    this.#t = {
      ...t,
      isPending: t.status === "pending",
      isSuccess: t.status === "success",
      isError: t.status === "error",
      isIdle: t.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    };
  }
  #a(t) {
    Z.batch(() => {
      if (this.#n && this.hasListeners()) {
        const r = this.#t.variables, o = this.#t.context, n = {
          client: this.#e,
          meta: this.options.meta,
          mutationKey: this.options.mutationKey
        };
        if (t?.type === "success") {
          try {
            this.#n.onSuccess?.(
              t.data,
              r,
              o,
              n
            );
          } catch (a) {
            Promise.reject(a);
          }
          try {
            this.#n.onSettled?.(
              t.data,
              null,
              r,
              o,
              n
            );
          } catch (a) {
            Promise.reject(a);
          }
        } else if (t?.type === "error") {
          try {
            this.#n.onError?.(
              t.error,
              r,
              o,
              n
            );
          } catch (a) {
            Promise.reject(a);
          }
          try {
            this.#n.onSettled?.(
              void 0,
              t.error,
              r,
              o,
              n
            );
          } catch (a) {
            Promise.reject(a);
          }
        }
      }
      this.listeners.forEach((r) => {
        r(this.#t);
      });
    });
  }
}, td = class extends nt {
  constructor(e = {}) {
    super(), this.config = e, this.#e = /* @__PURE__ */ new Map();
  }
  #e;
  build(e, t, r) {
    const o = t.queryKey, n = t.queryHash ?? uo(o, t);
    let a = this.get(n);
    return a || (a = new Jc({
      client: e,
      queryKey: o,
      queryHash: n,
      options: e.defaultQueryOptions(t),
      state: r,
      defaultOptions: e.getQueryDefaults(o)
    }), this.add(a)), a;
  }
  add(e) {
    this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
      type: "added",
      query: e
    }));
  }
  remove(e) {
    const t = this.#e.get(e.queryHash);
    t && (e.destroy(), t === e && this.#e.delete(e.queryHash), this.notify({ type: "removed", query: e }));
  }
  clear() {
    Z.batch(() => {
      this.getAll().forEach((e) => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return this.#e.get(e);
  }
  getAll() {
    return [...this.#e.values()];
  }
  find(e) {
    const t = { exact: !0, ...e };
    return this.getAll().find(
      (r) => on(t, r)
    );
  }
  findAll(e = {}) {
    const t = this.getAll();
    return Object.keys(e).length > 0 ? t.filter((r) => on(e, r)) : t;
  }
  notify(e) {
    Z.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  onFocus() {
    Z.batch(() => {
      this.getAll().forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    Z.batch(() => {
      this.getAll().forEach((e) => {
        e.onOnline();
      });
    });
  }
}, rd = class {
  #e;
  #t;
  #r;
  #n;
  #o;
  #a;
  #i;
  #s;
  constructor(e = {}) {
    this.#e = e.queryCache || new td(), this.#t = e.mutationCache || new $c(), this.#r = e.defaultOptions || {}, this.#n = /* @__PURE__ */ new Map(), this.#o = /* @__PURE__ */ new Map(), this.#a = 0;
  }
  mount() {
    this.#a++, this.#a === 1 && (this.#i = co.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), this.#e.onFocus());
    }), this.#s = Jt.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), this.#e.onOnline());
    }));
  }
  unmount() {
    this.#a--, this.#a === 0 && (this.#i?.(), this.#i = void 0, this.#s?.(), this.#s = void 0);
  }
  isFetching(e) {
    return this.#e.findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return this.#t.findAll({ ...e, status: "pending" }).length;
  }
  /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */
  getQueryData(e) {
    const t = this.defaultQueryOptions({ queryKey: e });
    return this.#e.get(t.queryHash)?.state.data;
  }
  ensureQueryData(e) {
    const t = this.defaultQueryOptions(e), r = this.#e.build(this, t), o = r.state.data;
    return o === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && r.isStaleByTime(Te(t.staleTime, r)) && this.prefetchQuery(t), Promise.resolve(o));
  }
  getQueriesData(e) {
    return this.#e.findAll(e).map(({ queryKey: t, state: r }) => {
      const o = r.data;
      return [t, o];
    });
  }
  setQueryData(e, t, r) {
    const o = this.defaultQueryOptions({ queryKey: e }), a = this.#e.get(
      o.queryHash
    )?.state.data, s = zc(t, a);
    if (s !== void 0)
      return this.#e.build(this, o).setData(s, { ...r, manual: !0 });
  }
  setQueriesData(e, t, r) {
    return Z.batch(
      () => this.#e.findAll(e).map(({ queryKey: o }) => [
        o,
        this.setQueryData(o, t, r)
      ])
    );
  }
  getQueryState(e) {
    const t = this.defaultQueryOptions({ queryKey: e });
    return this.#e.get(
      t.queryHash
    )?.state;
  }
  removeQueries(e) {
    const t = this.#e;
    Z.batch(() => {
      t.findAll(e).forEach((r) => {
        t.remove(r);
      });
    });
  }
  resetQueries(e, t) {
    const r = this.#e;
    return Z.batch(() => (r.findAll(e).forEach((o) => {
      o.reset();
    }), this.refetchQueries(
      {
        type: "active",
        ...e
      },
      t
    )));
  }
  cancelQueries(e, t = {}) {
    const r = { revert: !0, ...t }, o = Z.batch(
      () => this.#e.findAll(e).map((n) => n.cancel(r))
    );
    return Promise.all(o).then(ae).catch(ae);
  }
  invalidateQueries(e, t = {}) {
    return Z.batch(() => (this.#e.findAll(e).forEach((r) => {
      r.invalidate();
    }), e?.refetchType === "none" ? Promise.resolve() : this.refetchQueries(
      {
        ...e,
        type: e?.refetchType ?? e?.type ?? "active"
      },
      t
    )));
  }
  refetchQueries(e, t = {}) {
    const r = {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }, o = Z.batch(
      () => this.#e.findAll(e).filter((n) => !n.isDisabled() && !n.isStatic()).map((n) => {
        let a = n.fetch(void 0, r);
        return r.throwOnError || (a = a.catch(ae)), n.state.fetchStatus === "paused" ? Promise.resolve() : a;
      })
    );
    return Promise.all(o).then(ae);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const r = this.#e.build(this, t);
    return r.isStaleByTime(
      Te(t.staleTime, r)
    ) ? r.fetch(t) : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(ae).catch(ae);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = hn(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(ae).catch(ae);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = hn(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return Jt.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
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
  setDefaultOptions(e) {
    this.#r = e;
  }
  setQueryDefaults(e, t) {
    this.#n.set(Fe(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...this.#n.values()], r = {};
    return t.forEach((o) => {
      mt(e, o.queryKey) && Object.assign(r, o.defaultOptions);
    }), r;
  }
  setMutationDefaults(e, t) {
    this.#o.set(Fe(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...this.#o.values()], r = {};
    return t.forEach((o) => {
      mt(e, o.mutationKey) && Object.assign(r, o.defaultOptions);
    }), r;
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...this.#r.queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = uo(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === Ht && (t.enabled = !1), t;
  }
  defaultMutationOptions(e) {
    return e?._defaulted ? e : {
      ...this.#r.mutations,
      ...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    this.#e.clear(), this.#t.clear();
  }
}, Na = We(!1), od = () => ve(Na);
Na.Provider;
var Ta = We(
  void 0
), Oa = (e) => {
  const t = ve(Ta);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, nd = ({
  client: e,
  children: t
}) => (C(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ i(Ta.Provider, { value: e, children: t }));
function ad() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e
  };
}
var id = We(ad()), sd = () => ve(id), ld = (e, t) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1));
}, cd = (e) => {
  C(() => {
    e.clearReset();
  }, [e]);
}, dd = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: r,
  query: o,
  suspense: n
}) => e.isError && !t.isReset() && !e.isFetching && o && (n && e.data === void 0 || Sa(r, [e.error, o])), ud = (e) => {
  if (e.suspense) {
    const r = (n) => n === "static" ? n : Math.max(n ?? 1e3, 1e3), o = e.staleTime;
    e.staleTime = typeof o == "function" ? (...n) => r(o(...n)) : r(o), typeof e.gcTime == "number" && (e.gcTime = Math.max(
      e.gcTime,
      1e3
    ));
  }
}, pd = (e, t) => e.isLoading && e.isFetching && !t, hd = (e, t) => e?.suspense && t.isPending, gn = (e, t, r) => t.fetchOptimistic(e).catch(() => {
  r.clearReset();
});
function Ua(e, t) {
  const r = t(), [{ _instance: o }, n] = Q({
    _instance: { _value: r, _getSnapshot: t }
  });
  return tt(() => {
    o._value = r, o._getSnapshot = t, fr(o) && n({ _instance: o });
  }, [e, r, t]), C(() => (fr(o) && n({ _instance: o }), e(() => {
    fr(o) && n({ _instance: o });
  })), [e]), r;
}
function fr(e) {
  const t = e._getSnapshot, r = e._value;
  try {
    const o = t();
    return !Object.is(r, o);
  } catch {
    return !0;
  }
}
var fn = {};
function md(e, t, r) {
  if (fn.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const o = od(), n = sd(), a = Oa(), s = a.defaultQueryOptions(e);
  a.getDefaultOptions().queries?._experimental_beforeQuery?.(
    s
  ), fn.NODE_ENV !== "production" && (s.queryFn || console.error(
    `[${s.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`
  )), s._optimisticResults = o ? "isRestoring" : "optimistic", ud(s), ld(s, n), cd(n);
  const l = !a.getQueryCache().get(s.queryHash), [c] = Q(
    () => new t(
      a,
      s
    )
  ), u = c.getOptimisticResult(s), p = !o && e.subscribed !== !1;
  if (Ua(
    Ce(
      (h) => {
        const d = p ? c.subscribe(Z.batchCalls(h)) : ae;
        return c.updateResult(), d;
      },
      [c, p]
    ),
    () => c.getCurrentResult()
  ), C(() => {
    c.setOptions(s);
  }, [s, c]), hd(s, u))
    throw gn(s, c, n);
  if (dd({
    result: u,
    errorResetBoundary: n,
    throwOnError: s.throwOnError,
    query: a.getQueryCache().get(s.queryHash),
    suspense: s.suspense
  }))
    throw u.error;
  return a.getDefaultOptions().queries?._experimental_afterQuery?.(
    s,
    u
  ), s.experimental_prefetchInRender && !gt.isServer() && pd(u, o) && (l ? (
    // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
    gn(s, c, n)
  ) : (
    // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
    a.getQueryCache().get(s.queryHash)?.promise
  ))?.catch(ae).finally(() => {
    c.updateResult();
  }), s.notifyOnChangeProps ? u : c.trackResult(u);
}
function Kt(e, t) {
  return md(e, Kc);
}
function gd(e, t) {
  const r = Oa(), [o] = Q(
    () => new ed(
      r,
      e
    )
  );
  C(() => {
    o.setOptions(e);
  }, [o, e]);
  const n = Ua(
    Ce(
      (s) => o.subscribe(Z.batchCalls(s)),
      [o]
    ),
    () => o.getCurrentResult()
  ), a = Ce(
    (s, l) => {
      o.mutate(s, l).catch(ae);
    },
    [o]
  );
  if (n.error && Sa(o.options.throwOnError, [n.error]))
    throw n.error;
  return { ...n, mutate: a, mutateAsync: n.mutate };
}
class Ba {
  root;
  constructor(t) {
    try {
      typeof t == "string" ? this.root = JSON.parse(t).root : this.root = t.root;
    } catch (r) {
      this.root = { children: {}, end: !1 }, console.error("Falha ao processar a Prefix Tree:", r);
    }
  }
  /**
   * Encontra todas as palavras que começam com o prefixo fornecido.
   * @param prefix O termo de busca (ex: "CAS")
   * @param onMatch Callback chamado para cada palavra encontrada (ex: "CASA", "CASADO")
   */
  loadSigns(t, r) {
    const o = t.toUpperCase();
    let n = this.root;
    for (const s of o)
      if (n = n.children?.[s], !n) return;
    const a = (s, l) => {
      s.end && r(l);
      for (const c in s.children)
        a(s.children[c], l + c);
    };
    a(n, o);
  }
  searchSigns(t = "") {
    const r = [];
    return this.loadSigns(t, (o) => r.push(o)), r;
  }
}
const fd = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_PUBLIC_POSTHOG_DEBUG: "true", VITE_PUBLIC_POSTHOG_ENABLED: "false", VITE_PUBLIC_POSTHOG_HOST: "https://us.i.posthog.com", VITE_PUBLIC_POSTHOG_PROJECT_TOKEN: "phc_rkupE6DkPSJl7SntaagI0wq0FCKtg3lVP0UkC95NGYe" }, bd = 1e4, bn = {
  development: {
    TRANSLATE_URL: "https://traducao2-dth.vlibras.gov.br/translate",
    DICTIONARY_URL: "https://dicionario2-dth.vlibras.gov.br/2018.3.1/WEBGL/",
    DICTIONARY_STATIC_URL: "https://dicionario2-dth.vlibras.gov.br/static/BUNDLES/2018.3.1/WEBGL/",
    DICTIONARY_CATEGORIES_URL: "https://repositorio-dth.vlibras.lavid.ufpb.br/api",
    SIGNS_URL: "https://dicionario2-dth.vlibras.gov.br/signs?version=2018.3.1",
    REVIEW_URL: "https://traducao2-dth.vlibras.gov.br/review",
    BUNDLES_URL: "https://dicionario2-dth.vlibras.gov.br/bundles"
  },
  homolog: {
    TRANSLATE_URL: "https://traducao2-dth.vlibras.gov.br/translate",
    DICTIONARY_URL: "https://dicionario2-dth.vlibras.gov.br/2018.3.1/WEBGL/",
    DICTIONARY_STATIC_URL: "https://dicionario2-dth.vlibras.gov.br/static/BUNDLES/2018.3.1/WEBGL/",
    DICTIONARY_CATEGORIES_URL: "https://repositorio-dth.vlibras.lavid.ufpb.br/api",
    SIGNS_URL: "https://dicionario2-dth.vlibras.gov.br/signs?version=2018.3.1",
    REVIEW_URL: "https://traducao2-dth.vlibras.gov.br/review",
    BUNDLES_URL: "https://dicionario2-dth.vlibras.gov.br/bundles"
  },
  production: {
    TRANSLATE_URL: "https://traducao2.vlibras.gov.br/translate",
    DICTIONARY_URL: "https://dicionario2.vlibras.gov.br/2018.3.1/WEBGL/",
    DICTIONARY_STATIC_URL: "https://dicionario2.vlibras.gov.br/static/BUNDLES/2018.3.1/WEBGL/",
    DICTIONARY_CATEGORIES_URL: "https://repositorio-dth.vlibras.lavid.ufpb.br/api",
    SIGNS_URL: "https://dicionario2.vlibras.gov.br/static/TREES/2018.3.1.json",
    REVIEW_URL: "https://traducao2.vlibras.gov.br/review",
    BUNDLES_URL: "https://dicionario2.vlibras.gov.br/bundles"
  }
}, Qa = "production", vd = bn[Qa] || bn.development, be = {
  ...fd,
  ...vd,
  REQUEST_TIMEOUT: bd,
  MODE: Qa
}, ue = {
  TRANSLATION_ERROR: "Erro ao traduzir o texto.",
  TRANSLATION_EMPTY_ERROR: "Nenhum dado recebido da servidor.",
  TRANSLATION_TIMEOUT_ERROR: "A tradução demorou muito e foi cancelada.",
  SEND_REVIEW_ERROR: "Não foi possível enviar seu feedback.",
  SEND_REVIEW_TIMEOUT_ERROR: "O envio do feedback demorou muito e foi cancelado.",
  SIGNS_ERROR: "Erro ao buscar os sinais.",
  SIGNS_EMPTY_ERROR: "Nenhum dado recebido do servidor.",
  SIGNS_TIMEOUT_ERROR: "A busca dos sinais demorou muito e foi cancelada."
}, ho = () => {
  const e = new AbortController(), t = setTimeout(() => e.abort(), be.REQUEST_TIMEOUT);
  return { controller: e, timeoutId: t };
}, Ad = async (e) => {
  const { controller: t, timeoutId: r } = ho();
  try {
    const o = await fetch(be.TRANSLATE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: e }),
      signal: t.signal
    });
    if (!o.ok) throw new Error(`Erro na API: ${o.status}`);
    return { data: await o.text(), success: !0 };
  } catch (o) {
    return console.error("Falha na tradução: ", o), o.name === "AbortError" ? {
      success: !1,
      error: ue.TRANSLATION_TIMEOUT_ERROR,
      code: "TRANSLATION_TIMEOUT_ERROR"
    } : {
      success: !1,
      error: ue.TRANSLATION_ERROR,
      code: "TRANSLATION_ERROR"
    };
  } finally {
    clearTimeout(r);
  }
}, wd = async () => {
  const { controller: e, timeoutId: t } = ho();
  try {
    const r = await fetch(be.SIGNS_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      signal: e.signal
    });
    if (!r.ok) throw new Error(`Erro na API: ${r.status}`);
    return { data: await r.json(), success: !0 };
  } catch (r) {
    return console.error("Falha na tradução: ", r), r.name === "AbortError" ? {
      success: !1,
      error: ue.SIGNS_TIMEOUT_ERROR,
      code: "SIGNS_TIMEOUT_ERROR"
    } : {
      success: !1,
      error: ue.SIGNS_ERROR,
      code: "SIGNS_ERROR"
    };
  } finally {
    clearTimeout(t);
  }
}, za = async (e) => {
  const { controller: t, timeoutId: r } = ho();
  try {
    const o = await fetch(be.REVIEW_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
      signal: t.signal
    });
    if (!o.ok) throw new Error(`Erro na API: ${o.status}`);
    return { success: !0 };
  } catch (o) {
    return console.error("Falha no envio do feedback: ", o), o.name === "AbortError" ? {
      success: !1,
      error: ue.SEND_REVIEW_TIMEOUT_ERROR,
      code: "SEND_REVIEW_TIMEOUT_ERROR"
    } : {
      success: !1,
      error: ue.SEND_REVIEW_ERROR,
      code: "SEND_REVIEW_ERROR"
    };
  } finally {
    clearTimeout(r);
  }
}, Da = (e) => Kt({
  ...e,
  queryKey: ["dictionary_signs"],
  queryFn: async () => {
    const t = await wd();
    if (t.error) throw new Error(t.error);
    if (!t.data) throw new Error(ue.SIGNS_EMPTY_ERROR);
    return t.data;
  }
}), yd = (e) => gd({
  ...e,
  mutationFn: async (t) => {
    const r = await Ad(t);
    if (r.error) throw new Error(r.error);
    if (!r.data) throw new Error(ue.TRANSLATION_EMPTY_ERROR);
    return r.data;
  }
}), La = () => {
  const e = new AbortController(), t = setTimeout(() => e.abort(), be.REQUEST_TIMEOUT);
  return { controller: e, timeoutId: t };
}, xd = async () => {
  const { controller: e, timeoutId: t } = La();
  try {
    const r = await fetch(`${be.DICTIONARY_CATEGORIES_URL}/tags`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      signal: e.signal
    });
    if (!r.ok) throw new Error(`Erro na API: ${r.status}`);
    return { data: await r.json(), success: !0 };
  } catch (r) {
    return console.error("Falha na busca pelas categorias: ", r), r.name === "AbortError" ? {
      success: !1,
      error: ue.SIGNS_TIMEOUT_ERROR,
      code: "SIGNS_TIMEOUT_ERROR"
    } : {
      success: !1,
      error: ue.SIGNS_ERROR,
      code: "SIGNS_ERROR"
    };
  } finally {
    clearTimeout(t);
  }
}, kd = async (e) => {
  const { controller: t, timeoutId: r } = La();
  try {
    return { data: await (await fetch(`${be.DICTIONARY_CATEGORIES_URL}/tagsigns?tag=${e}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      signal: t.signal
    })).json(), success: !0 };
  } catch (o) {
    return console.error("Falha na busca pelos sinais da categoria: ", o), o.name === "AbortError" ? {
      success: !1,
      error: ue.SIGNS_TIMEOUT_ERROR,
      code: "SIGNS_TIMEOUT_ERROR"
    } : {
      success: !1,
      error: ue.SIGNS_ERROR,
      code: "SIGNS_ERROR"
    };
  } finally {
    clearTimeout(r);
  }
}, Ma = {
  1: "categories/measures",
  2: "categories/numbers",
  3: "categories/verbs",
  4: "categories/alphabet",
  5: "categories/foods",
  6: "categories/machines",
  7: "categories/feelings",
  8: "categories/health",
  9: "categories/body",
  10: "categories/animals",
  11: "categories/locations",
  12: "categories/jobs",
  13: "categories/countries",
  14: "categories/sports",
  15: "categories/family",
  16: "categories/nature"
}, _d = ["#", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")], Sd = {
  "1S_": "EU",
  "2S_": "VOCÊ",
  "3S_": "ELE(A)",
  "1P_": "NÓS",
  "2P_": "VOCÊS",
  "3P_": "ELES(AS)"
}, Cd = {
  _1S: "MIM",
  _2S: "VOCÊ",
  _3S: "ELE(A)",
  _1P: "NÓS",
  _2P: "VOCÊS",
  _3P: "ELES(AS)"
}, vn = [
  "EU PARA MIM",
  "EU PARA VOCÊ",
  "EU PARA ELE(A)",
  "EU PARA NÓS",
  "EU PARA VOCÊS",
  "EU PARA ELES(AS)",
  "VOCÊ PARA MIM",
  "VOCÊ PARA VOCÊ",
  "VOCÊ PARA ELE(A)",
  "VOCÊ PARA NÓS",
  "VOCÊ PARA VOCÊS",
  "VOCÊ PARA ELES(AS)",
  "ELE(A) PARA MIM",
  "ELE(A) PARA VOCÊ",
  "ELE(A) PARA ELE(A)",
  "ELE(A) PARA NÓS",
  "ELE(A) PARA VOCÊS",
  "ELE(A) PARA ELES(AS)",
  "NÓS PARA MIM",
  "NÓS PARA VOCÊ",
  "NÓS PARA ELE(A)",
  "NÓS PARA NÓS",
  "NÓS PARA VOCÊS",
  "NÓS PARA ELES(AS)",
  "VOCÊS PARA MIM",
  "VOCÊS PARA VOCÊ",
  "VOCÊS PARA ELE(A)",
  "VOCÊS PARA NÓS",
  "VOCÊS PARA VOCÊS",
  "VOCÊS PARA ELES(AS)",
  "ELES(AS) PARA MIM",
  "ELES(AS) PARA VOCÊ",
  "ELES(AS) PARA ELE(A)",
  "ELES(AS) PARA NÓS",
  "ELES(AS) PARA VOCÊS",
  "ELES(AS) PARA ELES(AS)"
], An = new RegExp(
  "^(1S_|2S_|3S_|1P_|2P_|3P_)?([A-ZÇÕÂÊÍÓÚ]+(?:_(?![123][SP])[A-ZÇÕÂÊÍÓÚ]+)*)(_1S|_2S|_3S|_1P|_2P|_3P)?$"
);
function Ed(e) {
  const t = /* @__PURE__ */ new Map();
  for (const r of e) {
    const o = r.includes("&") ? r.split("&", 1)[0] : r;
    t.has(o) || t.set(o, { base: o, variants: [], hasBase: !1 });
    const n = t.get(o);
    n && (r.includes("&") ? n.variants.push(r) : n.hasBase = !0);
  }
  return Array.from(t.values());
}
function Rd(e) {
  const t = {};
  for (const r of e) {
    const o = r.includes("&") ? r.split("&", 1)[0] : r.match(An)?.[2] ?? r;
    if (t[o] ??= { conjugation: [], desambiguation: [] }, r.includes("&"))
      t[o].desambiguation.push(r);
    else {
      const n = r.match(An);
      if (n) {
        const a = n[1] ?? "", s = n[2], l = n[3] ?? "", c = Sd[a] ?? "", u = Cd[l] ?? "";
        c && u ? t[s].conjugation.push({
          original: r,
          transformed: `${c} PARA ${u}`,
          prefix: c,
          suffix: u
        }) : t[s].conjugation.unshift({
          original: r,
          transformed: r,
          prefix: c,
          suffix: u
        });
      }
    }
  }
  for (const r in t)
    t[r].conjugation.sort(
      (o, n) => vn.indexOf(o.transformed) - vn.indexOf(n.transformed)
    );
  return Object.fromEntries(Object.entries(t).sort(([r], [o]) => r.localeCompare(o)));
}
const Ke = pe()(
  er((e) => ({ isMaxRetries: !1, retriesCount: 0 }), {
    name: "@vlibras/dictionary",
    version: 1,
    storage: $t(() => sessionStorage),
    partialize: (e) => Zt(e, "isMaxRetries"),
    onRehydrateStorage: () => (e) => {
      e && (e.retriesCount = 0, e.isMaxRetries = !1);
    }
  })
);
Ke.getState, Ke.setState, Ke.subscribe;
const Xe = pe()(
  er(() => ({ signs: [""] }), {
    name: "@vlibras/dictionary-history",
    version: 1,
    storage: $t(() => localStorage),
    partialize: (e) => e
  })
), wn = {
  get: Xe.getState,
  set: Xe.setState,
  subscribe: Xe.subscribe
}, Ie = 50, Pd = () => {
  const e = X(null), t = X(null), r = X(null), o = Ke(), [n, a] = Q("categories"), { data: s, isLoading: l, refetch: c } = Da(), { signs: u } = Xe(), [p, h] = Q(null), { data: d = [], isLoading: b } = Kt({
    queryKey: ["categories"],
    queryFn: xd,
    select: ({ data: B }) => B
  }), { data: m = [], isLoading: g } = Kt({
    queryKey: ["categorySigns", p?.name],
    queryFn: () => kd(p?.name ?? ""),
    enabled: !!p,
    select: ({ data: B }) => B.signs.filter((H) => H !== "1S_FARTAR1S" && H !== "2S_ESCOLHER__1S")
  }), f = async () => {
    await c();
    const B = o.retriesCount + 1;
    Ke.setState({ retriesCount: B }), B >= 5 && Ke.setState({ isMaxRetries: !0 });
  }, A = W(() => s ? new Ba(s).searchSigns("") : [], [s]), [{ filteredSigns: w, visibleCount: y, search: v }, S] = Q({
    filteredSigns: [],
    search: "",
    visibleCount: Ie
  }), N = W(() => {
    if (!p) return [];
    const B = v.toLowerCase().trim(), H = new Set(A);
    return m.filter(
      (he) => H.has(he) && (B === "" || he.toLowerCase().includes(B))
    );
  }, [p, A, v, m]), U = Ce(
    (B) => {
      const H = B.toUpperCase().trim(), he = (n === "all" ? A : u).filter((D) => D.toUpperCase().includes(H));
      S((D) => ({
        ...D,
        search: B,
        filteredSigns: he,
        visibleCount: Ie
      })), r.current && r.current.scrollTo({ top: 0, behavior: "smooth" });
    },
    [n, u, A]
  ), x = p?.name === "VERBOS", L = W(
    () => x ? Rd(N) : {},
    [N, x]
  ), te = W(() => Object.entries(L), [L]), [oe, K] = Q(Ie);
  C(() => {
    Ge(Ie), K(20);
  }, [p]);
  const de = te.slice(0, oe), re = Ce(
    (B) => {
      const H = B.currentTarget;
      H.scrollTop + H.clientHeight >= H.scrollHeight - 50 && K((D) => Math.min(D + 20, te.length));
    },
    [te.length]
  ), ne = oo(U, 500), ge = () => {
    t.current && (U(""), t.current.value = "", t.current.focus());
  }, xe = () => {
    Xe.setState({ signs: [] }), n === "recents" && (a("all"), S((B) => ({ ...B, filteredSigns: [] })));
  };
  C(() => {
    h(null), U(v);
  }, [n]), C(() => {
    A.length > 0 && S((B) => ({ ...B, filteredSigns: A }));
  }, [A]), C(() => {
    const B = new IntersectionObserver(
      (H) => {
        H[0].isIntersecting && w.length > y && S((he) => ({ ...he, visibleCount: he.visibleCount + Ie }));
      },
      { threshold: 0.1 }
    );
    return e.current && B.observe(e.current), () => B.disconnect();
  }, [w.length, y]);
  const R = w.slice(0, y), St = { all: A.length, recents: u.length }, [it, Ge] = Q(Ie), st = W(() => N.slice(0, it), [N, it]), ee = Ce(
    (B) => {
      const H = B.currentTarget;
      H.scrollTop + H.clientHeight >= H.scrollHeight - 50 && Ge((D) => D >= N.length ? D : D + Ie);
    },
    [N.length]
  );
  return C(() => {
    Ge(Ie);
  }, [p]), {
    search: v,
    isLoading: l,
    filteredSigns: w,
    visibleSigns: R,
    visibleCount: y,
    loaderRef: e,
    listRef: r,
    searchRef: t,
    handleSearchChange: ne,
    handleClearSearch: ge,
    handleHistoryClear: xe,
    data: s,
    retry: f,
    filter: n,
    setFilter: a,
    count: St,
    selectedCategory: p,
    setSelectedCategory: h,
    filteredCategoryWords: N,
    onCategoryScroll: ee,
    visibleCategoryWords: st,
    isVerbCategory: x,
    visibleVerbGroups: de,
    verbGroupEntries: te,
    onVerbScroll: re,
    categories: d,
    isLoadingCategories: b,
    isLoadingCategorySigns: g,
    ...o
  };
}, { Provider: Id, useCtx: Be } = lo(), Nd = ({ children: e }) => {
  const t = Pd();
  return /* @__PURE__ */ i(Id, { data: t, children: e });
}, br = pe(() => ({
  isInitialized: !1
})), Ue = {
  get: br.getState,
  set: br.setState,
  subscribe: br.subscribe
}, vr = ["icaro", "guga", "hosana"], Fa = () => {
  I.set({ isPlayingWelcome: !1, isWelcomeFinished: !0 });
}, ie = (e, t, r) => {
  I.get().send(e, t, r);
}, ft = (e) => {
  if (!e.baseUrl && !e.personalizationUrl) return;
  e.baseUrl && ie(se.PLAYER, J.SET_BASE_URL, e.baseUrl), e.personalizationUrl && ie(se.CUSTOMIZATION, J.SET_PERSONALIZATION, e.personalizationUrl);
  const { config: t } = I.get();
  I.set({ config: { ...t, ...e } });
}, ce = (e) => {
  if (!e) return ie(se.PLAYER, J.SET_PAUSE_STATE, 0);
  ie(se.PLAYER, J.PLAY, e), I.set({ gloss: e }), Ue.get().onPlay?.(e), I.get().isWelcomeFinished || Fa();
}, ja = () => {
  ie(se.PLAYER, J.PLAY_WELCOME), ie(se.PLAYER, J.SET_SUBTITLES_STATE, 0), I.set({ isPlayingWelcome: !0 });
}, rr = (e) => {
  const { region: t } = I.get(), r = `${be.DICTIONARY_STATIC_URL}${t.abbreviation}/`, o = be.DICTIONARY_URL;
  ft({ baseUrl: r }), e ? ie(se.PLAYER, J.PLAY, e) : ie(se.PLAYER, J.SET_PAUSE_STATE, 0), ft({ baseUrl: o }), I.get().isWelcomeFinished || Fa();
}, mo = () => {
  const { gloss: e } = I.get();
  e && ce(e), Ue.get().onRepeat?.();
}, or = () => {
  ie(se.PLAYER, J.STOP), Ue.get().onStop?.();
}, nr = () => {
  ie(se.PLAYER, J.SET_PAUSE_STATE, 1), Ue.get().onPause?.();
}, go = (e) => {
  ie(se.PLAYER, J.SET_SPEED, e), I.set({ speed: e });
}, ar = (e) => {
  const t = I.get().avatar, r = (vr.indexOf(e || t) + (e ? 0 : 1)) % vr.length, o = vr[r];
  ie(se.PLAYER, J.SET_AVATAR, o), I.set({ avatar: o });
}, fo = (e) => {
  const { showSubtitles: t } = I.get(), r = e ?? !t;
  ie(se.PLAYER, J.SET_SUBTITLES_STATE, Number(r)), I.set({ showSubtitles: r });
}, Td = (e) => {
  const t = `${be.DICTIONARY_URL}${e.abbreviation}/`;
  ft({ baseUrl: t }), I.set({ region: e });
}, Va = (e) => {
  I.set({ emotion: e }), ie(se.EMOTION, e.action);
}, Od = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pause: nr,
  play: ce,
  playStatic: rr,
  playWelcome: ja,
  repeat: mo,
  send: ie,
  setConfig: ft,
  setEmotion: Va,
  setRegion: Td,
  setSpeed: go,
  stop: or,
  toggleAvatar: ar,
  toggleSubtitles: fo
}, Symbol.toStringTag, { value: "Module" })), at = () => yd({
  onMutate: (e) => {
    le.set({ text: e, isTranslating: !0 });
  },
  onSettled: () => {
    I.set({ gloss: void 0 }), le.set({ isTranslating: !1 });
  }
}), yn = (async () => null)(), Re = {
  _getContext: () => ({
    host: location.hostname,
    origin: `${location.origin}${location.pathname}`
  }),
  trackLoad: async () => {
    await yn;
  },
  trackEvent: async (e, t) => {
    await yn;
  }
}, Wa = {
  content: void 0,
  action: void 0,
  auto: !1
}, bt = pe()(() => ({
  ...Wa
})), Gr = () => bt.setState(Wa), bo = (e) => {
  setTimeout(() => bt.setState(e), 300);
}, xn = {
  get: bt.getState,
  set: bt.setState
}, vo = () => (e) => {
  ce(e);
  const t = wn.get().signs, r = [e, ...t.filter((o) => o !== e)];
  wn.set({ signs: r }), zr.set({ screen: "main" }), bo({
    action: () => zr.set({ screen: "dictionary" }),
    content: /* @__PURE__ */ i(F, { children: [
      /* @__PURE__ */ i(P, { name: "dictionary" }),
      "Reabrir Dicionário"
    ] })
  }), Re.trackEvent("dictionary_gloss", { sign: e });
}, Ud = ["masculino", "feminino", "neutro"];
function Bd(e) {
  let t;
  const r = Array.from(e.querySelectorAll("h2, h3")).find(
    (o) => o.textContent?.toLowerCase().includes("etimologia")
  );
  return r && (t = r.parentElement?.nextElementSibling?.firstChild?.textContent?.trim()), t;
}
async function kn(e) {
  const t = e.toLowerCase().replace(/_/g, " "), r = `https://pt.wiktionary.org/w/api.php?action=parse&redirects=1&
				 format=json&origin=*&page=${encodeURIComponent(t)}&prop=text&formatversion=2`;
  try {
    const o = await fetch(r);
    return o.ok && (await o.json())?.parse?.text || null;
  } catch (o) {
    return console.error(o), null;
  }
}
async function Qd(e) {
  const t = e.toLowerCase().replace(/_/g, " "), r = `https://pt.wiktionary.org/w/rest.php/v1/search/title?
					   q=${encodeURIComponent(t)}&limit=1`;
  try {
    const o = await fetch(r);
    return o.ok && (await o.json()).pages?.[0]?.key || null;
  } catch (o) {
    return console.error(o), null;
  }
}
async function zd(e) {
  let t = await kn(e), r = t ? Sn(t, e) : null;
  if (!r?.definitions?.length) {
    const o = await Qd(e);
    o && o !== e && (t = await kn(o), r = t ? Sn(t, e) : null);
  }
  return r;
}
const Ga = (e) => {
  if (!e) return "";
  let t = e;
  if (t = t.replace(/<style[\s\S]*?<\/style>/gi, ""), t = t.replace(/<script[\s\S]*?<\/script>/gi, ""), t = t.replace(/<noscript[\s\S]*?<\/noscript>/gi, ""), t = t.replace(/<[^>]+>/g, ""), typeof document < "u") {
    const r = document.createElement("div");
    r.innerHTML = t, t = r.textContent || r.innerText || t;
  }
  return t = t.replace(/\[[^\]]*\]/g, ""), t = t.replace(/\s+/g, " ").trim(), t;
}, _n = (e) => {
  const t = e.cloneNode(!0);
  return t.querySelectorAll("ul, ol").forEach((r) => r.remove()), t.querySelectorAll("style, script, link, meta, noscript").forEach((r) => r.remove()), t.querySelectorAll("span.mw-cite-backlink, sup.reference, sup.cite_ref").forEach((r) => r.remove()), Ga(t.textContent || "");
}, Sn = (e, t) => {
  const o = new DOMParser().parseFromString(e, "text/html"), n = o.querySelector("tbody")?.innerHTML.match(new RegExp(`title='(?<gender>${Ud.join("|")})'`))?.groups?.gender, a = Array.from(o.querySelectorAll("ol > li")).map((m) => {
    let g = _n(m);
    const f = m.querySelectorAll(":scope > ul > li, :scope > ol > li");
    if (f.length) {
      const A = Array.from(f).map((w) => _n(w)).filter(Boolean);
      A.length && (g = `${g} §${A.join("§")}`);
    }
    return g;
  }).filter((m) => m && m !== t).filter((m, g, f) => f.indexOf(m) === g).filter(Boolean), s = o.querySelector("h2")?.textContent?.trim(), c = Array.from(o.querySelectorAll("b")).find(
    (m) => m.innerHTML.includes("<u>") || m.innerHTML.includes(".")
  )?.textContent?.trim(), u = Bd(o), p = {}, h = o.querySelector("table.traduções");
  h && h.querySelectorAll("tr").forEach((g) => {
    const f = g.querySelector("td"), A = g.querySelectorAll("td ~ td a");
    if (f && A.length > 0) {
      const w = f.textContent?.trim().toLowerCase(), y = Array.from(A).map((v) => v.textContent?.trim()).filter(Boolean);
      w && (p[w] = y);
    }
  });
  const d = o.querySelector("img")?.getAttribute("src") || void 0, b = Object.keys(p).length > 0 ? p : void 0;
  return {
    wordClass: s,
    pronunciation: c,
    definitions: a,
    etymology: u,
    gender: n,
    imgUrl: d,
    translations: b
  };
}, Ao = () => {
  const [e, t] = Q(null), { data: r, isFetching: o } = Kt({
    queryKey: ["wordMeaning", e],
    queryFn: () => zd(e ?? ""),
    enabled: !!e
  }), n = (l) => {
    t((c) => c === l ? null : l);
  }, a = e && r !== void 0 ? { [e]: r } : {};
  return {
    expandedWord: e,
    wordMeanings: a,
    loadingMeaning: o ? e : null,
    toggleWordMeaning: n
  };
};
function Dd(e) {
  const t = {};
  for (const r of e) {
    let n = r.trim().charAt(0).toUpperCase();
    /[0-9]/.test(n) && (n = "#"), t[n] || (t[n] = []), t[n].push(r);
  }
  for (const r in t)
    t[r].sort((o, n) => o.localeCompare(n));
  return _d.map((r) => ({
    letter: r,
    items: t[r] || []
  })).filter((r) => r.items.length > 0);
}
const wo = ({ className: e, size: t = 24, ...r }) => /* @__PURE__ */ i("span", { className: E("flex aspect-square items-center justify-center text-primary", e), ...r, children: [
  /* @__PURE__ */ i(
    "svg",
    {
      "aria-hidden": "true",
      xmlns: "http://www.w3.org/2000/svg",
      width: t,
      height: t,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "animate-spin",
      children: /* @__PURE__ */ i("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
    }
  ),
  /* @__PURE__ */ i("span", { className: "sr-only", children: "Loading..." })
] }), yo = ({ meaning: e, isLoading: t, onPlayDefinition: r }) => {
  const o = $();
  return t ? /* @__PURE__ */ i("div", { className: "flex animate-pulse items-center gap-1.5 px-6 py-2 text-muted-foreground text-xs", children: [
    /* @__PURE__ */ i(wo, { className: "size-3" }),
    "Buscando significado..."
  ] }) : e?.definitions?.length ? /* @__PURE__ */ i("div", { className: "w-full border-primary/20 border-l-2 bg-muted pr-3 pb-5 pl-4 text-black dark:text-white", children: [
    /* @__PURE__ */ i("p", { className: "mb-1 font-semibold text-muted-foreground text-xs uppercase tracking-wide", children: "Significado" }),
    /* @__PURE__ */ i("ol", { className: "flex flex-col gap-5", children: e.definitions.slice(0, 3).map((n, a) => {
      const s = Ga(n.split("§")[0]);
      return /* @__PURE__ */ i("li", { className: "break-word flex min-w-0 flex-1 items-center justify-between pl-4", children: [
        /* @__PURE__ */ i(
          "span",
          {
            className: E("min-w-0 max-w-50 flex-1 mobile:text-xs text-sm", o ? "max-w-40" : "max-w-50"),
            children: `${a + 1}. ${s}`
          }
        ),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => r(s),
            className: "shrink-0 cursor-pointer text-primary hover:opacity-70",
            "aria-label": "Traduzir definição",
            children: /* @__PURE__ */ i(P, { name: "libras", className: E(o ? "size-5" : "size-6") })
          }
        )
      ] }, a);
    }) })
  ] }) : /* @__PURE__ */ i("div", { className: "px-6 py-2 text-muted-foreground text-xs", children: "Significado não encontrado." });
}, De = 50, Ld = () => {
  const e = Be(), t = vo(), { mutateAsync: r } = at(), { expandedWord: o, wordMeanings: n, loadingMeaning: a, toggleWordMeaning: s } = Ao(), [l, c] = Q(null), u = X(/* @__PURE__ */ new Map()), [p, h] = Q(De), d = X(null);
  C(() => {
    h(De);
  }, [l]), C(() => {
    if (!l) return;
    u.current.get(l)?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [l]);
  const b = async (v) => {
    try {
      const S = await r(v);
      ce(S), fe.setState({ screen: "main" });
    } catch (S) {
      console.error("Erro ao reproduzir definição: ", S);
    }
  }, m = W(() => Dd(e.filteredSigns), [e.filteredSigns]), [g, f] = Q(De), A = X(null);
  if (C(() => {
    if (e.search || !l) return;
    const v = d.current;
    if (!v) return;
    const S = m.find(({ letter: U }) => U === l);
    if (!S) return;
    const N = new IntersectionObserver(
      ([U]) => {
        U.isIntersecting && h((x) => Math.min(x + De, S.items.length));
      },
      { root: e.listRef?.current, threshold: 0.1 }
    );
    return N.observe(v), () => N.disconnect();
  }, [e.search, l, m, e.listRef]), C(() => {
    if (!e.search) return;
    const v = A.current;
    if (!v) return;
    const S = new IntersectionObserver(
      ([N]) => {
        N.isIntersecting && f((U) => Math.min(U + De, e.filteredSigns.length));
      },
      { threshold: 0.1 }
    );
    return S.observe(v), () => S.disconnect();
  }, [e.search, e.filteredSigns.length]), C(() => {
    f(De);
  }, [e.search]), e.filter === "recents")
    return /* @__PURE__ */ i("div", { ref: e.listRef, className: "h-full overflow-auto", children: /* @__PURE__ */ i("ul", { className: "flex flex-col text-sm", children: e.visibleSigns.map((v) => {
      const S = (v || "").replace(/_/g, " ");
      return /* @__PURE__ */ i("li", { children: [
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => t(v),
            className: "block w-full bg-background px-4 py-1.5 text-left mobile:text-xs text-sm hover:cursor-pointer hover:bg-muted",
            children: S
          }
        ),
        /* @__PURE__ */ i("div", { className: "mx-4 border-border/30 border-t" })
      ] }, v);
    }) }) });
  const w = (v) => {
    const S = o === v, N = a === v, U = (v || "").replace(/_/g, " ");
    return /* @__PURE__ */ i("li", { className: "hover:bg-muted", children: [
      /* @__PURE__ */ i("div", { className: E("flex min-w-0 items-center", S ? "bg-muted" : ""), children: [
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => t(v),
            className: "w-full cursor-pointer whitespace-normal break-all px-6 py-1.25 text-left mobile:text-xs text-sm focus:bg-primary focus:text-primary-foreground",
            children: U
          }
        ),
        /* @__PURE__ */ i(
          z,
          {
            size: "icon-sm",
            variant: "ghost",
            className: "text-muted-foreground",
            onClick: () => s(v),
            "aria-label": S ? "Fechar significado" : "Ver significado",
            children: /* @__PURE__ */ i(P, { name: S ? "chevron-up" : "chevron-down", className: "size-4", "aria-hidden": "true" })
          }
        )
      ] }),
      S && /* @__PURE__ */ i(
        yo,
        {
          wordName: v,
          meaning: n[v],
          isLoading: N,
          onPlayDefinition: b
        }
      ),
      /* @__PURE__ */ i("div", { className: "mx-4 border-border/30 border-t" })
    ] }, v);
  }, y = Ce(
    (v) => {
      const S = v.currentTarget;
      S.scrollTop + S.clientHeight >= S.scrollHeight - 100 && f((U) => Math.min(U + De, e.filteredSigns.length));
    },
    [e.filteredSigns.length]
  );
  return e.search ? /* @__PURE__ */ i("div", { ref: e.listRef, className: "h-full overflow-auto", onScroll: y, children: /* @__PURE__ */ i("ul", { className: "flex flex-col text-sm", children: [
    e.filteredSigns.slice(0, g).map((v) => w(v)),
    g < e.filteredSigns.length && /* @__PURE__ */ i("li", { ref: A, className: "py-2 text-center text-muted-foreground text-xs", children: "Carregando..." })
  ] }) }) : /* @__PURE__ */ i("div", { ref: e.listRef, className: "h-full overflow-auto", children: [
    l && /* @__PURE__ */ i("div", { className: "sticky top-0 z-9 flex h-9 w-full items-center justify-between bg-background px-4 py-2 text-left font-semibold hover:cursor-pointer" }),
    /* @__PURE__ */ i("ul", { className: "flex flex-col text-sm", children: m.map(({ letter: v, items: S }) => {
      const N = l === v;
      return /* @__PURE__ */ i(
        "li",
        {
          ref: (U) => {
            U ? u.current.set(v, U) : u.current.delete(v);
          },
          children: [
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: () => c(N ? null : v),
                className: E(
                  "sticky top-0 z-10 flex w-full items-center justify-between bg-background px-4 py-2 text-left font-semibold hover:cursor-pointer",
                  N ? "bg-primary/20" : "hover:bg-muted"
                ),
                children: [
                  v === "#" ? "0–9" : v,
                  /* @__PURE__ */ i(P, { name: N ? "chevron-up" : "chevron-down", className: "size-4", "aria-hidden": "true" })
                ]
              }
            ),
            N && /* @__PURE__ */ i("ul", { className: "flex flex-col", children: [
              S.slice(0, p).map((U) => w(U)),
              p < S.length && /* @__PURE__ */ i("li", { ref: d, className: "py-2 text-center text-muted-foreground text-xs", children: "Carregando..." })
            ] })
          ]
        },
        v
      );
    }) })
  ] });
}, Md = () => {
  const { search: e, setSelectedCategory: t, categories: r, listRef: o } = Be(), n = W(() => r.filter((a) => a.name.toLowerCase().includes(e.toLocaleLowerCase())).sort((a, s) => a.name.localeCompare(s.name)), [r, e]);
  return n.length ? /* @__PURE__ */ i("div", { ref: o, className: "h-full overflow-auto", children: /* @__PURE__ */ i("ul", { className: "flex flex-col", children: n.map((a) => {
    const s = Ma[a.id] || "categories/undefined";
    return /* @__PURE__ */ i("li", { children: [
      /* @__PURE__ */ i(
        "button",
        {
          type: "button",
          onClick: () => t(a),
          className: E(
            "flex w-full items-center justify-between px-4 mobile:py-2 py-0 mobile:text-xs text-sm hover:cursor-pointer hover:bg-muted"
          ),
          children: /* @__PURE__ */ i("div", { className: "flex items-center gap-2 py-2", children: [
            /* @__PURE__ */ i(P, { name: s, className: "mobile:size-5 size-6 shrink-0 dark:bg-foreground" }),
            /* @__PURE__ */ i("span", { children: a.name.replace(/_/g, " ") })
          ] })
        }
      ),
      /* @__PURE__ */ i("div", { className: "mx-4 border-border/30 border-t" })
    ] }, a.id);
  }) }) }) : null;
}, Fd = () => {
  const { selectedCategory: e, setSelectedCategory: t } = Be();
  if (!e) return null;
  const r = Ma[e.id] || "categories/undefined";
  return e && /* @__PURE__ */ i("div", { className: "flex w-full animate-move-up items-center gap-1 bg-primary/20 mobile:px-3 px-4 mobile:py-2 py-3", children: /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      "aria-label": "Voltar para a lista de categorias",
      onClick: () => t(null),
      className: "group flex h-full w-full items-center justify-start gap-2 text-xs hover:cursor-pointer",
      children: [
        /* @__PURE__ */ i(
          P,
          {
            "aria-hidden": "true",
            name: "chevron-left",
            className: "size-4 bg-muted-foreground group-hover:bg-foreground"
          }
        ),
        /* @__PURE__ */ i(P, { "aria-hidden": "true", name: r, className: "mobile:size-5 size-6 shrink-0" }),
        /* @__PURE__ */ i("span", { className: "font-semibold mobile:text-xs text-sm", children: e.name.replace(/_/g, " ") })
      ]
    }
  ) });
}, jd = () => {
  const { mutateAsync: e } = at(), t = vo(), r = Be(), { expandedWord: o, wordMeanings: n, loadingMeaning: a, toggleWordMeaning: s } = Ao(), l = async (c) => {
    try {
      const u = await e(c);
      ce(u), fe.setState({ screen: "main" });
    } catch (u) {
      console.error("Erro ao reproduzir definição: ", u);
    }
  };
  return /* @__PURE__ */ i("div", { ref: r.listRef, onScroll: r.onVerbScroll, className: "h-full overflow-auto", children: /* @__PURE__ */ i("ul", { className: "flex w-full flex-col text-sm", children: r.visibleVerbGroups.map(([c, u]) => {
    const p = o === c, h = a === c, d = u.conjugation.slice(c === u.conjugation[0]?.original ? 1 : 0);
    return /* @__PURE__ */ i("li", { children: [
      /* @__PURE__ */ i("div", { className: E("flex min-w-0 items-center hover:bg-muted", p && "bg-muted"), children: [
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => t(c),
            className: "flex-1 cursor-pointer whitespace-normal break-all px-4 py-1.25 text-left mobile:text-xs text-sm focus:bg-primary focus:text-primary-foreground",
            children: c
          }
        ),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => s(c),
            className: "px-2 py-1.25 hover:cursor-pointer hover:text-foreground",
            "aria-label": p ? "Fechar" : "Expandir",
            children: /* @__PURE__ */ i(P, { name: p ? "chevron-up" : "chevron-down", "aria-hidden": "true", className: "size-4" })
          }
        )
      ] }),
      p && /* @__PURE__ */ i("div", { className: "bg-muted pb-1", children: [
        /* @__PURE__ */ i(
          yo,
          {
            wordName: c,
            meaning: n[c],
            isLoading: h,
            onPlayDefinition: l
          }
        ),
        d.length > 0 && /* @__PURE__ */ i("div", { className: "mt-1", children: [
          /* @__PURE__ */ i("p", { className: "px-4 py-1 font-semibold text-muted-foreground text-xs uppercase tracking-wide", children: "Concordância verbal" }),
          /* @__PURE__ */ i("ul", { className: "ml-4 border-border/40 border-l", children: d.map((b) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: () => t(b.original),
              className: "flex w-full items-center gap-2 px-4 py-1.25 mobile:text-xs text-sm hover:cursor-pointer focus:bg-primary focus:text-primary-foreground",
              children: [
                /* @__PURE__ */ i("span", { className: "w-20 shrink-0 text-right text-muted-foreground", children: b.prefix }),
                /* @__PURE__ */ i(P, { name: "arrow-right", className: "size-4" }),
                /* @__PURE__ */ i("span", { children: b.suffix })
              ]
            }
          ) }, b.original)) })
        ] }),
        u.desambiguation.length > 0 && /* @__PURE__ */ i("div", { className: "mt-1", children: [
          /* @__PURE__ */ i("p", { className: "px-4 py-1 font-semibold text-muted-foreground text-xs uppercase tracking-wide", children: "Contexto" }),
          /* @__PURE__ */ i("ul", { className: "ml-4 border-border/40 border-l", children: u.desambiguation.map((b) => {
            const [m, g] = b.split("&", 2);
            return /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: () => t(b),
                className: "flex w-full items-center gap-2 px-4 py-1.25 mobile:text-xs text-sm hover:bg-muted focus:bg-primary focus:text-primary-foreground",
                children: [
                  m,
                  " (",
                  g,
                  ")"
                ]
              }
            ) }, b);
          }) })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "mx-4 border-border/30 border-t" })
    ] }, c);
  }) }) });
}, Vd = () => {
  const { mutateAsync: e } = at(), t = vo(), r = Be(), { expandedWord: o, wordMeanings: n, loadingMeaning: a, toggleWordMeaning: s } = Ao(), l = async (u) => {
    try {
      const p = await e(u);
      ce(p), fe.setState({ screen: "main" });
    } catch (p) {
      console.error("Erro ao reproduzir definição: ", p);
    }
  };
  if (r.isVerbCategory) return /* @__PURE__ */ i(jd, {});
  const c = W(() => Ed(r.visibleCategoryWords), [r.visibleCategoryWords]);
  return /* @__PURE__ */ i("div", { ref: r.listRef, onScroll: r.onCategoryScroll, className: "h-full overflow-auto", children: /* @__PURE__ */ i("ul", { className: "flex h-full w-full flex-col text-sm", children: c.map((u) => {
    const p = o === u.base, h = a === u.base, d = (u.base || "").replace(/_/g, " ");
    return /* @__PURE__ */ i("li", { className: "hover:bg-muted", children: [
      /* @__PURE__ */ i("div", { className: E("flex min-w-0 items-center", p ? "bg-muted" : ""), children: [
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => t(u.base),
            className: "w-full cursor-pointer whitespace-normal break-all px-4 py-1.25 text-left mobile:text-xs text-sm focus:bg-primary focus:text-primary-foreground",
            children: d
          }
        ),
        /* @__PURE__ */ i(
          z,
          {
            size: "icon-sm",
            variant: "ghost",
            className: "text-muted-foreground",
            onClick: () => s(u.base),
            "aria-label": p ? "Fechar significado" : "Ver significado",
            children: /* @__PURE__ */ i(P, { name: p ? "chevron-up" : "chevron-down", "aria-hidden": "true", className: "size-4" })
          }
        )
      ] }),
      p && /* @__PURE__ */ i(F, { children: [
        /* @__PURE__ */ i(
          yo,
          {
            wordName: u.base,
            meaning: n[u.base],
            isLoading: h,
            onPlayDefinition: l
          }
        ),
        u.variants.length > 0 && /* @__PURE__ */ i("div", { className: "mt-1", children: [
          /* @__PURE__ */ i("p", { className: "px-4 py-1 font-semibold text-muted-foreground text-xs uppercase tracking-wide", children: "Contexto" }),
          /* @__PURE__ */ i("ul", { className: "ml-4 border-border/40 border-l", children: u.variants.map((b) => {
            const [, m] = b.split("&", 2), g = (u.base || "").replace(/_/g, " "), f = (m || "").replace(/_/g, " ");
            return /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: () => {
                  t(b);
                },
                className: "flex w-full px-4 py-1 text-left mobile:text-xs text-sm hover:bg-muted focus:bg-primary focus:text-primary-foreground",
                children: [
                  g,
                  " (",
                  f,
                  ")"
                ]
              }
            ) }, b);
          }) })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "mx-4 border-border/30 border-t" })
    ] }, u.base);
  }) }) });
}, Wd = "data:image/webp;base64,UklGRoIFAABXRUJQVlA4WAoAAAAQAAAAOwAAOwAAQUxQSMoBAAABkITtnyE5/+Hato2TvRvbttc+JnfjaNtOTrZ9su1kvdtP16mqq37hMSImgP4xTTZHZ2dHmwnOHl5atmjz4RNnzpw4vHlRWWm4HcaeXnfwSRsTbntysC7NjuDUd/t7JvX9tr5Oqiy5u5uZ9ObduRYlXvPeM6Xv53opiN2vMcXavhhpaRcZ4MU0SQmXGeTlBCkBxxno8QAJ9uUMdrnd2KhmnOaRhoKuMuArQUaadCS90UDwXQZ9J1hsuoalTRNyPMTADzmKpL5De5ciMkNH06eLrGLwKwXcLuBdcONFvcB7HsnL/oH3I5s3qAuvayBvko6nT+TNYb/gbF7lr1DBK/sVynhTfoUpvKHdeN1DefnNeM15vNjXeK9jeZ7X8K558syb8TaZeVSNV02CmV/QvmSIuJ5CO+UqQg1o9SQc9xTrSayYaQHWfJMYJTxEehBPRmu6cbqqyLD7HpxdbsYo8TbKzQSSWfQE43Ehye3zBOFRL5Kdf13d1TySH72hTU3bukhS6TThuiZPuzrOiRQHVl1ul9N+qTKAAL0HrbzfbKT53opBXgRq9i8oX37g4v1Hjx49un9h//KyAn8zQZusrn7BwcHBfq5WE/03BFZQOCCSAwAAVBIAnQEqPAA8AAAAJgALUbgDc3vXmqVZ+0bl+Zvsu5gPe96kfuA9wD9L+l35gP2g/Z33hfQt6AH88/znWOegB5a/7M/Bv+4HpYPAMq+bcUXZYbo/UVw0TiC5i/2ACXQYIj+rWMuz+tL82e/ZuEYpv/tCzISz9kISMd5WT2ZSg7Bp7UhrTOwiTlFyg4JIVvg4cevfw/uAs2A9kAAA/v86Qf8QFd+4SMJe9tMhrGbEzYWoXeMgHrHm8Wx+ZOYgsfBMPly38bS4/3mzg/KZrqctzdFjpsgdZvsCXNFuZ8YwMh9lfh7uF6TwaL5l8tOU+B9W2YHPKFu9K/dgJquyT3lW8u/EaN9FeMBPS9ui28g/Jq7EySqLCrqTjr9CD3NqHYMJ7xMJO8RvHP/0i+UqRL9ubMJHf9FKqN+YWiPNosChq229ORiCZwOX320/W/zHhj7Ic5vKXZz/X/8hsPY0PCoBE8RnD+R2t//qWF42Svu//ha+na1b9vC5uRZIcf4Fue9KK4ZPHjmahpAuGxVhhU1v/b/IDZ1hTDzC8dbTg+FwzsWA6n7M05e2cnrbbJtnMafj+J5H7K+4+5KPvNBCU4+T1wuNaoghIYgPYQDBPWF8wL3GB9HdPgyd2fEKleda9WHTnuCQ6OP/cv7aGYQyLQnNwibxgxBbSLRChhf+ZeCR/28iCDsaRMC+Iws2Ia3wG26LEsuT5VoVAeiJa7pwfdbvCCsV9YGDjgbj9OocdOOQF4wThrDOZRvxi1spvlA7NnmefkE1X2sxwzz3qoKHgwiiNZMrFtepReX/meSaqyUrjqER/vlcQkhrHNw00A61WmVLfbchXHfnLOmLhtGINyyWZh2hyxTV4zvwcOdZbmRp1r99VbEiD+fJQwk/t5VQ/nxFl4QudxVbNoNmEabaHlvQ6QcZZelNwWX0d2CxAmo/ja/yEm3WzPU8+vwCCm8SY/NbFnMRzIdZ2XIgNl0uURZoAvGFM2AvIs8ViuAdF3bCjvDZmwtTFWpqeDM1yH8VeBrwDsJrksjK8VzCDQZujJxnaXIIeGAIVya9pVp/nJauUfDyoUXccqcHv3EwzjQ9rjmHr/rPPhC2cjAtdFIq8G5rYERmylqAXAwSX/6Tn1QKuaFDWFEsLHZpAlYMx1l0HDnh6T5XCaDRo2WCPc7ksJUv9jkoSPyHTyVeIPWRL558+rWIM706PtSxoai2luOVlh9gAAA=", Gd = ({ onRetry: e, isMaxRetries: t }) => {
  const r = $();
  return /* @__PURE__ */ i("div", { className: "flex h-full flex-col items-center justify-center gap-2 px-4", children: [
    /* @__PURE__ */ i("img", { src: Wd, alt: "Emoji de rosto triste", className: "size-7 sm:size-8" }),
    /* @__PURE__ */ i("p", { className: "mb-3 px-4 text-center font-semibold mobile:text-sm text-base", children: "Não foi possível carregar o dicionário de sinais." }),
    !t && /* @__PURE__ */ i(z, { onClick: e, size: r ? "xs" : "sm", className: "rounded-full", variant: "outline-gov", children: "Tentar novamente" }),
    t && /* @__PURE__ */ i("span", { className: "mobile:text-xs text-muted-foreground text-sm", children: "Tente novamente mais tarde." })
  ] });
}, Hd = [
  { label: "Categorias", value: "categories" },
  { label: "A-Z", value: "all" },
  { label: "Recentes", value: "recents" }
], Jd = () => {
  const { setFilter: e, filter: t, handleHistoryClear: r } = Be(), { signs: o } = Xe(), n = $(), a = !o.length;
  return /* @__PURE__ */ i("div", { className: "flex items-center gap-2 px-4 [&_button]:rounded-full", children: [
    Hd.map((s) => {
      const l = t === s.value;
      return a && s.value === "recents" ? null : /* @__PURE__ */ i(
        z,
        {
          inert: l,
          variant: l ? "default" : "outline",
          onClick: () => e(s.value),
          className: E("animate-move-down", n ? "p-1" : "p-2"),
          size: n ? "xs" : "sm",
          children: s.label
        },
        s.value
      );
    }),
    t === "recents" && /* @__PURE__ */ i(
      z,
      {
        onClick: r,
        className: "text-muted-foreground not-focus:outline-0 outline-destructive hover:text-destructive focus:[&_svg]:text-destructive",
        size: n ? "icon-xs" : "icon-sm",
        variant: "ghost",
        "aria-label": "Limpar histórico",
        children: /* @__PURE__ */ i(P, { name: "trash" })
      }
    )
  ] });
}, Ar = () => /* @__PURE__ */ i("div", { className: "grid h-full place-content-center", children: /* @__PURE__ */ i(wo, {}) }), Kd = () => {
  const { search: e, searchRef: t, handleSearchChange: r, handleClearSearch: o } = Be();
  return /* @__PURE__ */ i("div", { className: "relative flex items-center p-4 pb-0", children: [
    /* @__PURE__ */ i(
      "input",
      {
        ref: t,
        type: "text",
        placeholder: "Pesquisar (ex: AJUDAR)...",
        onInput: (n) => r(n.currentTarget.value),
        className: "h-9 w-full rounded-md border p-2 pr-8 outline-primary placeholder:text-muted-foreground placeholder:text-sm focus:outline-2 focus:outline-solid"
      }
    ),
    e && /* @__PURE__ */ i(
      z,
      {
        onClick: o,
        "aria-label": "Limpar busca",
        variant: "ghost",
        size: "icon-xs",
        className: "absolute right-5 rounded-sm bg-transparent! text-muted-foreground outline-destructive hover:text-destructive focus:text-destructive",
        children: /* @__PURE__ */ i(P, { name: "x" })
      }
    )
  ] });
}, Xd = () => {
  const e = Be();
  if (e.isLoading) return /* @__PURE__ */ i(Ar, {});
  if (!e.data) return /* @__PURE__ */ i(Gd, { onRetry: e.retry, isMaxRetries: e.isMaxRetries });
  const t = e.filter === "categories" ? e.selectedCategory ? !e.filteredCategoryWords.length && !!e.search : !1 : !e.filteredSigns.length && !!e.search;
  return /* @__PURE__ */ i("div", { className: "flex h-full flex-col gap-2 overflow-hidden text-primary dark:text-white", children: [
    /* @__PURE__ */ i(Kd, {}),
    /* @__PURE__ */ i(Jd, {}),
    e.filter === "categories" && !e.selectedCategory && (e.isLoadingCategories ? /* @__PURE__ */ i(Ar, {}) : /* @__PURE__ */ i(Md, {})),
    e.filter === "categories" && e.selectedCategory && /* @__PURE__ */ i(Fd, {}),
    e.filter === "categories" && e.selectedCategory && !t && (e.isLoadingCategorySigns ? /* @__PURE__ */ i(Ar, {}) : /* @__PURE__ */ i(Vd, {})),
    e.filter !== "categories" && !t && /* @__PURE__ */ i(Ld, {}),
    t && /* @__PURE__ */ i("p", { className: "break-all px-4 font-semibold mobile:text-xs text-muted-foreground text-sm", children: [
      "Sem resultados para ",
      /* @__PURE__ */ i("q", { className: "text-foreground", children: e.search })
    ] })
  ] });
}, qd = () => /* @__PURE__ */ i(Nd, { children: /* @__PURE__ */ i(va, { children: [
  /* @__PURE__ */ i(Aa, { close: !0, children: /* @__PURE__ */ i(wa, { children: "Dicionário" }) }),
  /* @__PURE__ */ i(ya, { className: "overflow-hidden p-0", children: /* @__PURE__ */ i(Xd, {}) })
] }) }), Yd = () => {
  const e = fe((t) => t.screen);
  return /* @__PURE__ */ i(F, { children: [
    e === "dictionary" && /* @__PURE__ */ i(qd, {}),
    e === "about" && /* @__PURE__ */ i(Nc, {})
  ] });
};
let Je = [], Dt = [];
const wr = () => Dt.forEach((e) => e([...Je])), Xt = (e, t) => {
  const r = ta(), o = t?.duration || 3e3;
  Je.push({ id: r, message: e, duration: o, ...t }), wr(), setTimeout(() => {
    const n = Je.findIndex((a) => a.id === r);
    n > -1 && (Je[n].isExiting = !0, wr()), setTimeout(() => {
      Je = Je.filter((a) => a.id !== r), wr();
    }, 500);
  }, o);
}, Zd = (e) => (Dt.push(e), () => {
  Dt = Dt.filter((t) => t !== e);
}), qe = pe()(() => ({})), je = {
  get: qe.getState,
  set: qe.setState,
  subscribe: qe.subscribe
}, $d = At(
  "absolute mobile:text-center w-auto! z-99999999 inset-x-2 overflow-hidden mx-auto flex items-center justify-center transition-all duration-500",
  {
    variants: {
      position: {
        top: "top-14 mobile:top-13 animate-move-down",
        bottom: "bottom-15 mobile:bottom-13 animate-move-up"
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
  }
), eu = ({
  message: e,
  isExiting: t,
  position: r = "bottom",
  align: o = "center",
  variant: n = "default",
  className: a
}) => /* @__PURE__ */ i(
  "div",
  {
    "data-theme": n === "light" || n === "dark" ? n : void 0,
    className: E(
      $d({ position: r, align: o }),
      t && (r === "top" ? "-top-100!" : "-bottom-100!"),
      a
    ),
    children: /* @__PURE__ */ i(
      "div",
      {
        "data-slot": "toast-content",
        className: E(
          "pointer-events-auto rounded-lg border bg-background px-2.5 py-1.5 mobile:text-xs text-sm transition-all duration-500 ease-in-out",
          n === "success" && "border-none bg-success text-success-foreground",
          n === "destructive" && "border-none bg-destructive text-destructive-foreground",
          n === "primary" && "border-none bg-primary text-primary-foreground"
        ),
        children: /* @__PURE__ */ i("div", { className: "break-anywhere text-center", children: e })
      }
    )
  }
), tu = () => {
  const [e, t] = Q([]), r = qe((o) => o.appRoot);
  return C(() => Zd(t), []), r ? to(
    /* @__PURE__ */ i("div", { className: "pointer-events-none absolute inset-0 z-40", children: e.map((o) => /* @__PURE__ */ i(eu, { ...o }, o.id)) }),
    r
  ) : null;
}, ru = () => {
  const e = G((t) => t.isTranslating);
  return /* @__PURE__ */ i(F, { children: [
    /* @__PURE__ */ i(Yd, {}),
    /* @__PURE__ */ i(Ec, {}),
    /* @__PURE__ */ i(tu, {}),
    e && /* @__PURE__ */ i(zs, {})
  ] });
}, ou = `@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:"";--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-orange-50:oklch(98% .016 73.684);--color-orange-500:oklch(70.5% .213 47.604);--color-orange-600:oklch(64.6% .222 41.116);--color-green-50:oklch(98.2% .018 155.826);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-blue-50:oklch(97% .014 254.604);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs--line-height:calc(1/.75);--text-sm--line-height:calc(1.25/.875);--text-base--line-height: 1.5 ;--font-weight-light:300;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--leading-normal:1.5;--radius-xs:.125rem;--drop-shadow-lg:0 4px 4px #00000026;--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--blur-sm:8px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-primary:var(--primary);--tw-translate-y:0;--tw-translate-x:0}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*{box-sizing:border-box;--tw-border-style:solid;border-style:solid;border-color:var(--border);outline-offset:-1px;outline-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){*{outline-color:color-mix(in oklab,var(--ring)50%,transparent)}}:focus-visible{outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--primary);--tw-outline-style:solid;outline-style:solid}:host{border-color:var(--border);fill:var(--foreground);color:var(--foreground)}:where(:host),:host:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}@media(prefers-color-scheme:dark){:host:not([data-theme]){color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}}:host:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:host:has(input.theme-controller[value=dark]:checked),[data-theme=dark]{color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E");scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:root:not(span){overflow:var(--page-overflow)}:root{background:var(--page-scroll-bg,var(--root-bg));--page-scroll-bg-on:linear-gradient(var(--root-bg,#0000),var(--root-bg,#0000))var(--root-bg,#0000)}@supports (color:color-mix(in lab,red,red)){:root{--page-scroll-bg-on:linear-gradient(var(--root-bg,#0000),var(--root-bg,#0000))color-mix(in srgb,var(--root-bg,#0000),oklch(0% 0 0) calc(var(--page-has-backdrop,0)*40%))}}:root{--page-scroll-transition-on:background-color .3s ease-out;transition:var(--page-scroll-transition);scrollbar-gutter:var(--page-scroll-gutter,unset);scrollbar-gutter:if(style(--page-has-scroll: 1): var(--page-scroll-gutter,unset); else: unset)}@keyframes set-page-has-scroll{0%,to{--page-has-scroll:1}}:root,[data-theme]{background:var(--page-scroll-bg,var(--root-bg));color:var(--color-base-content)}:where(:root,[data-theme]){--root-bg:var(--color-base-100)}}@layer components;@layer utilities{@layer daisyui.l1.l2.l3{.modal{pointer-events:none;visibility:hidden;width:100%;max-width:none;height:100%;max-height:none;color:inherit;transition:visibility .3s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;overscroll-behavior:contain;z-index:999;scrollbar-gutter:auto;background-color:#0000;place-items:center;margin:0;padding:0;display:grid;position:fixed;inset:0;overflow:clip}.modal::backdrop{display:none}.tooltip{--tt-bg:var(--color-neutral);--tt-off: calc(100% + .5rem) ;--tt-tail: calc(100% + 1px + .25rem) ;display:inline-block;position:relative}.tooltip>.tooltip-content,.tooltip[data-tip]:before{border-radius:var(--radius-field);text-align:center;white-space:normal;max-width:20rem;color:var(--color-neutral-content);opacity:0;background-color:var(--tt-bg);pointer-events:none;z-index:2;--tw-content:attr(data-tip);content:var(--tw-content);width:max-content;padding-block:.25rem;padding-inline:.5rem;font-size:.875rem;line-height:1.25;position:absolute}.tooltip:after{opacity:0;background-color:var(--tt-bg);content:"";pointer-events:none;--mask-tooltip:url("data:image/svg+xml,%3Csvg width='10' height='4' viewBox='0 0 8 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.500009 1C3.5 1 3.00001 4 5.00001 4C7 4 6.5 1 9.5 1C10 1 10 0.499897 10 0H0C-1.99338e-08 0.5 0 1 0.500009 1Z' fill='black'/%3E%3C/svg%3E%0A");width:.625rem;height:.25rem;-webkit-mask-position:-1px 0;mask-position:-1px 0;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-image:var(--mask-tooltip);mask-image:var(--mask-tooltip);display:block;position:absolute}@media(prefers-reduced-motion:no-preference){.tooltip>.tooltip-content,.tooltip[data-tip]:before,.tooltip:after{transition:opacity .2s cubic-bezier(.4,0,.2,1) 75ms,transform .2s cubic-bezier(.4,0,.2,1) 75ms}}:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible))>.tooltip-content,:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible))[data-tip]:before,:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible)):after{opacity:1;--tt-pos:0rem}@media(prefers-reduced-motion:no-preference){:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible))>.tooltip-content,:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible))[data-tip]:before,:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible)):after{transition:opacity .2s cubic-bezier(.4,0,.2,1),transform .2s cubic-bezier(.4,0,.2,1)}}.tab{cursor:pointer;appearance:none;text-align:center;webkit-user-select:none;-webkit-user-select:none;user-select:none;flex-wrap:wrap;justify-content:center;align-items:center;display:inline-flex;position:relative}@media(hover:hover){.tab:hover{color:var(--color-base-content)}}.tab{--tab-p:.75rem;--tab-bg:var(--color-base-100);--tab-border-color:var(--color-base-300);--tab-radius-ss:0;--tab-radius-se:0;--tab-radius-es:0;--tab-radius-ee:0;--tab-order:0;--tab-radius-min:calc(.75rem - var(--border));--tab-radius-limit:min(var(--radius-field),var(--tab-radius-min));--tab-radius-grad:#0000 calc(69% - var(--border)),var(--tab-border-color)calc(69% - var(--border) + .25px),var(--tab-border-color)69%,var(--tab-bg) calc(69% + .25px) ;order:var(--tab-order);height:var(--tab-height);padding-inline:var(--tab-p);border-color:#0000;font-size:.875rem}.tab:is(input[type=radio]){min-width:fit-content}.tab:is(input[type=radio]):after{--tw-content:attr(aria-label);content:var(--tw-content)}.tab:is(label){position:relative}.tab:is(label) input{cursor:pointer;appearance:none;opacity:0;position:absolute;inset:0}:is(.tab:checked,.tab:is(label:has(:checked)),.tab:is(.tab-active,[aria-selected=true],[aria-current=true],[aria-current=page]))+.tab-content{display:block}.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true],[aria-current=true],[aria-current=page]){color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true],[aria-current=true],[aria-current=page]){color:color-mix(in oklab,var(--color-base-content)50%,transparent)}}.tab:not(input):empty{cursor:default;flex-grow:1}.tab:focus{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.tab:focus{outline-offset:2px;outline:2px solid #0000}}.tab:focus-visible,.tab:is(label:has(:checked:focus-visible)){outline-offset:-5px;outline:2px solid}.tab[disabled]{pointer-events:none;opacity:.4}.menu{--menu-active-fg:var(--color-neutral-content);--menu-active-bg:var(--color-neutral);flex-flow:column wrap;width:fit-content;padding:.5rem;font-size:.875rem;display:flex}.menu :where(li ul){white-space:nowrap;margin-inline-start:1rem;padding-inline-start:.5rem;position:relative}.menu :where(li ul):before{background-color:var(--color-base-content);opacity:.1;width:var(--border);content:"";inset-inline-start:0;position:absolute;top:.75rem;bottom:.75rem}.menu :where(li>.menu-dropdown:not(.menu-dropdown-show)){display:none}.menu :where(li:not(.menu-title)>:not(ul,details,.menu-title,.btn)),.menu :where(li:not(.menu-title)>details>summary:not(.menu-title)){border-radius:var(--radius-field);text-align:start;text-wrap:balance;-webkit-user-select:none;user-select:none;grid-auto-columns:minmax(auto,max-content) auto max-content;grid-auto-flow:column;align-content:flex-start;align-items:center;gap:.5rem;padding-block:.375rem;padding-inline:.75rem;transition-property:color,background-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:grid}.menu :where(li>details>summary){--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.menu :where(li>details>summary){outline-offset:2px;outline:2px solid #0000}}.menu :where(li>details>summary)::-webkit-details-marker{display:none}:is(.menu :where(li>details>summary),.menu :where(li>.menu-dropdown-toggle)):after{content:"";transform-origin:50%;pointer-events:none;justify-self:flex-end;width:.375rem;height:.375rem;transition-property:rotate,translate;transition-duration:.2s;display:block;translate:0 -1px;rotate:-135deg;box-shadow:inset 2px 2px}.menu details{interpolate-size:allow-keywords;overflow:hidden}.menu details::details-content{block-size:0}@media(prefers-reduced-motion:no-preference){.menu details::details-content{transition-behavior:allow-discrete;transition-property:block-size,content-visibility;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1)}}.menu details[open]::details-content{block-size:auto}.menu :where(li>details[open]>summary):after,.menu :where(li>.menu-dropdown-toggle.menu-dropdown-show):after{translate:0 1px;rotate:45deg}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{color:var(--color-base-content);--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){box-shadow:inset 0 1px #00000003,inset 0 -1px #ffffff03}.menu :where(li:empty){background-color:var(--color-base-content);opacity:.1;height:1px;margin:.5rem 1rem}.menu :where(li){flex-flow:column wrap;flex-shrink:0;align-items:stretch;display:flex;position:relative}.menu :where(li) .badge{justify-self:flex-end}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{outline-offset:2px;outline:2px solid #0000}}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{color:var(--menu-active-fg);background-color:var(--menu-active-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):not(:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):active){box-shadow:0 2px calc(var(--depth)*3px) -2px var(--menu-active-bg)}.menu :where(li).menu-disabled{pointer-events:none;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li).menu-disabled{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.menu .dropdown:focus-within .menu-dropdown-toggle:after{translate:0 1px;rotate:45deg}.menu .dropdown-content{margin-top:.5rem;padding:.5rem}.menu .dropdown-content:before{display:none}.dropdown{position-area:var(--anchor-v,bottom)var(--anchor-h,span-right);display:inline-block;position:relative}.dropdown>:not(:has(~[class*=dropdown-content])):focus{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.dropdown>:not(:has(~[class*=dropdown-content])):focus{outline-offset:2px;outline:2px solid #0000}}.dropdown .dropdown-content{position:absolute}.dropdown.dropdown-close .dropdown-content,.dropdown:not(details,.dropdown-open,.dropdown-hover:hover,:focus-within) .dropdown-content,.dropdown.dropdown-hover:not(:hover) [tabindex]:first-child:focus:not(:focus-visible)~.dropdown-content{transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover],.dropdown .dropdown-content{z-index:999}@media(prefers-reduced-motion:no-preference){.dropdown[popover],.dropdown .dropdown-content{transition-behavior:allow-discrete;transition-property:opacity,scale,display;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);animation:.2s dropdown}}@starting-style{.dropdown[popover],.dropdown .dropdown-content{opacity:0;scale:95%}}:is(.dropdown:not(.dropdown-close).dropdown-open,.dropdown:not(.dropdown-close):not(.dropdown-hover):focus,.dropdown:not(.dropdown-close):focus-within)>[tabindex]:first-child{pointer-events:none}:is(.dropdown:not(.dropdown-close).dropdown-open,.dropdown:not(.dropdown-close):not(.dropdown-hover):focus,.dropdown:not(.dropdown-close):focus-within) .dropdown-content,.dropdown:not(.dropdown-close).dropdown-hover:hover .dropdown-content{opacity:1;scale:100%}.dropdown:is(details) summary::-webkit-details-marker{display:none}.dropdown:where([popover]){background:0 0}.dropdown[popover]{color:inherit;position:fixed}@supports not (position-area:bottom){.dropdown[popover]{margin:auto}.dropdown[popover].dropdown-close{transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover].dropdown-open:not(:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover]::backdrop{background-color:oklab(0% none none/.3)}}:is(.dropdown[popover].dropdown-close,.dropdown[popover]:not(.dropdown-open,:popover-open)){transform-origin:top;opacity:0;display:none;scale:95%}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}@media(hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible,.btn:has(:focus-visible){isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio])[aria-label]:after{--tw-content:attr(aria-label);content:var(--tw-content)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.loading{pointer-events:none;aspect-ratio:1;vertical-align:middle;width:calc(var(--size-selector,.25rem)*6);background-color:currentColor;display:inline-block;-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:100%;mask-size:100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.collapse{border-radius:var(--radius-box,1rem);isolation:isolate;grid-template-rows:max-content 0fr;grid-template-columns:minmax(0,1fr);width:100%;display:grid;position:relative;overflow:hidden}@media(prefers-reduced-motion:no-preference){.collapse{transition:grid-template-rows .2s}}.collapse>input:is([type=checkbox],[type=radio]){appearance:none;opacity:0;z-index:1;grid-row-start:1;grid-column-start:1;width:100%;min-height:1lh;padding:1rem;padding-inline-end:3rem;transition:background-color .2s ease-out}.collapse:is([open],[tabindex]:focus:not(.collapse-close),[tabindex]:focus-within:not(.collapse-close)),.collapse:not(.collapse-close):has(>input:is([type=checkbox],[type=radio]):checked){grid-template-rows:max-content 1fr}.collapse:is([open],[tabindex]:focus:not(.collapse-close),[tabindex]:focus-within:not(.collapse-close))>.collapse-content,.collapse:not(.collapse-close)>:where(input:is([type=checkbox],[type=radio]):checked~.collapse-content){content-visibility:visible;min-height:fit-content}@supports not (content-visibility:visible){.collapse:is([open],[tabindex]:focus:not(.collapse-close),[tabindex]:focus-within:not(.collapse-close))>.collapse-content,.collapse:not(.collapse-close)>:where(input:is([type=checkbox],[type=radio]):checked~.collapse-content){visibility:visible}}.collapse:focus-visible,.collapse:has(>input:is([type=checkbox],[type=radio]):focus-visible),.collapse:has(summary:focus-visible){outline-color:var(--color-base-content);outline-offset:2px;outline-width:2px;outline-style:solid}.collapse:not(.collapse-close)>input[type=checkbox],.collapse:not(.collapse-close)>input[type=radio]:not(:checked),.collapse:not(.collapse-close)>.collapse-title{cursor:pointer}:is(.collapse[tabindex]:focus:not(.collapse-close,.collapse[open]),.collapse[tabindex]:focus-within:not(.collapse-close,.collapse[open]))>.collapse-title{cursor:unset}.collapse:is([open],[tabindex]:focus:not(.collapse-close),[tabindex]:focus-within:not(.collapse-close))>:where(.collapse-content),.collapse:not(.collapse-close)>:where(input:is([type=checkbox],[type=radio]):checked~.collapse-content){padding-bottom:1rem}.collapse:is(details){width:100%}@media(prefers-reduced-motion:no-preference){.collapse:is(details)::details-content{transition:content-visibility .2s allow-discrete,visibility .2s allow-discrete,min-height .2s ease-out allow-discrete,padding .1s ease-out 20ms,background-color .2s ease-out,height .2s;interpolate-size:allow-keywords;height:0}.collapse:is(details):where([open])::details-content{height:auto}}.collapse:is(details) summary{display:block;position:relative}.collapse:is(details) summary::-webkit-details-marker{display:none}.collapse:is(details)>.collapse-content{content-visibility:visible}.collapse:is(details) summary{outline:none}.toast{translate:var(--toast-x,0)var(--toast-y,0);inset-inline:auto 1rem;background-color:#0000;flex-direction:column;gap:.5rem;width:max-content;max-width:calc(100vw - 2rem);display:flex;position:fixed;top:auto;bottom:1rem}@media(prefers-reduced-motion:no-preference){.toast>*{animation:.25s ease-out toast}}.toggle{border:var(--border)solid currentColor;color:var(--input-color);cursor:pointer;appearance:none;vertical-align:middle;webkit-user-select:none;-webkit-user-select:none;user-select:none;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--toggle-p),var(--radius-selector-max)) + min(var(--border),var(--radius-selector-max)));padding:var(--toggle-p);flex-shrink:0;grid-template-columns:0fr 1fr 1fr;place-content:center;display:inline-grid;position:relative;box-shadow:inset 0 1px}@supports (color:color-mix(in lab,red,red)){.toggle{box-shadow:0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000) inset}}.toggle{--input-color:var(--color-base-content);transition:color .3s,grid-template-columns .2s}@supports (color:color-mix(in lab,red,red)){.toggle{--input-color:color-mix(in oklab,var(--color-base-content)50%,#0000)}}.toggle{--toggle-p:calc(var(--size)*.125);--size:calc(var(--size-selector,.25rem)*6);width:calc((var(--size)*2) - (var(--border) + var(--toggle-p))*2);height:var(--size)}.toggle>*{z-index:1;cursor:pointer;appearance:none;background-color:#0000;border:none;grid-column:2/span 1;grid-row-start:1;height:100%;padding:.125rem;transition:opacity .2s,rotate .4s}.toggle>:focus{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.toggle>:focus{outline-offset:2px;outline:2px solid #0000}}.toggle>:nth-child(2){color:var(--color-base-100);rotate:none}.toggle>:nth-child(3){color:var(--color-base-100);opacity:0;rotate:-15deg}.toggle:has(:checked)>:nth-child(2){opacity:0;rotate:15deg}.toggle:has(:checked)>:nth-child(3){opacity:1;rotate:none}.toggle:before{aspect-ratio:1;border-radius:var(--radius-selector);--tw-content:"";content:var(--tw-content);width:100%;height:100%;box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor;background-color:currentColor;grid-row-start:1;grid-column-start:2;transition:background-color .1s,translate .2s,inset-inline-start .2s;position:relative;inset-inline-start:0;translate:0}@supports (color:color-mix(in lab,red,red)){.toggle:before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000)}}.toggle:before{background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}@media(forced-colors:active){.toggle:before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{.toggle:before{outline-offset:-1rem;outline:.25rem solid}}.toggle:focus-visible,.toggle:has(:focus-visible){outline-offset:2px;outline:2px solid}.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked){background-color:var(--color-base-100);--input-color:var(--color-base-content);grid-template-columns:1fr 1fr 0fr}:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{background-color:currentColor}@starting-style{:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{opacity:0}}.toggle:indeterminate{grid-template-columns:.5fr 1fr .5fr}.toggle:disabled{cursor:not-allowed;opacity:.3}.toggle:disabled:before{border:var(--border)solid currentColor;background-color:#0000}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);font-size:max(var(--font-size,.875rem),.875rem);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=url]),.input :where(input[type=email]){direction:ltr}.input :where(input[type=date]){display:inline-flex}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate}@media(pointer:coarse){@supports (-webkit-touch-callout:none){.input:focus,.input:focus-within{--font-size:1rem}}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input{cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input{color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input)::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input)::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input{box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.input:has(>input[type=date]) :where(input[type=date]){webkit-appearance:none;appearance:none;display:inline-flex}.input:has(>input[type=date]) input[type=date]::-webkit-calendar-picker-indicator{cursor:pointer;width:1em;height:1em;position:absolute;inset-inline-end:.75em}.range{appearance:none;webkit-appearance:none;--range-thumb:var(--color-base-100);--range-thumb-size:calc(var(--size-selector,.25rem)*6);--range-progress:currentColor;--range-fill:1;--range-p:.25rem;--range-bg:currentColor}@supports (color:color-mix(in lab,red,red)){.range{--range-bg:color-mix(in oklab,currentColor 10%,#0000)}}.range{cursor:pointer;vertical-align:middle;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));width:clamp(3rem,20rem,100%);height:var(--range-thumb-size);background-color:#0000;border:none;overflow:hidden}[dir=rtl] .range{--range-dir:-1}.range:focus{outline:none}.range:focus-visible{outline-offset:2px;outline:2px solid}.range::-webkit-slider-runnable-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}@media(forced-colors:active){.range::-webkit-slider-runnable-track{border:1px solid}.range::-moz-range-track{border:1px solid}}.range::-webkit-slider-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));background-color:var(--range-thumb);height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;appearance:none;webkit-appearance:none;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100cqw) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100cqw*var(--range-fill));position:relative;top:50%;transform:translateY(-50%)}@supports (color:color-mix(in lab,red,red)){.range::-webkit-slider-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100cqw) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100cqw*var(--range-fill))}}.range::-moz-range-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}.range::-moz-range-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100cqw) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100cqw*var(--range-fill));background-color:currentColor;position:relative;top:50%}@supports (color:color-mix(in lab,red,red)){.range::-moz-range-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100cqw) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100cqw*var(--range-fill))}}.range:disabled{cursor:not-allowed;opacity:.3}.select{border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;white-space:nowrap;text-overflow:ellipsis;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-image:linear-gradient(45deg,#0000 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,#0000 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.375rem;padding-inline:.75rem 1.75rem;font-size:.875rem;display:inline-flex;position:relative;overflow:hidden}@supports (color:color-mix(in lab,red,red)){.select{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.select{border-color:var(--input-color);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.select{--size:calc(var(--size-field,.25rem)*10)}[dir=rtl] .select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}[dir=rtl] .select::picker(select){translate:.5rem}[dir=rtl] .select select::picker(select){translate:.5rem}.select[multiple]{background-image:none;height:auto;padding-block:.75rem;padding-inline-end:.75rem;overflow:auto}.select select{appearance:none;width:calc(100% + 2.75rem);height:calc(100% - calc(var(--border)*2));background:inherit;border-radius:inherit;border-style:none;align-items:center;margin-inline:-.75rem -1.75rem;padding-inline:.75rem 1.75rem}.select select:focus,.select select:focus-within{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.select select:focus,.select select:focus-within{outline-offset:2px;outline:2px solid #0000}}.select select:not(:last-child){background-image:none;margin-inline-end:-1.375rem}.select:focus,.select:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.select:focus,.select:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.select:focus,.select:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate}.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select{cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select{color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select)::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select)::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.select:has(>select[disabled])>select[disabled]{cursor:not-allowed}@supports (appearance:base-select){.select,.select select{appearance:base-select}:is(.select,.select select)::picker(select){appearance:base-select}}:is(.select,.select select)::picker(select){color:inherit;border:var(--border)solid var(--color-base-200);border-radius:var(--radius-box);background-color:inherit;max-height:min(24rem,70dvh);box-shadow:0 2px calc(var(--depth)*3px) -2px #0003;box-shadow:0 20px 25px -5px rgb(0 0 0/calc(var(--depth)*.1)),0 8px 10px -6px rgb(0 0 0/calc(var(--depth)*.1));margin-block:.5rem;margin-inline:.5rem;padding:.5rem;translate:-.5rem}:is(.select,.select select)::picker-icon{display:none}:is(.select,.select select) optgroup{padding-top:.5em}:is(.select,.select select) optgroup option:first-child{margin-top:.5em}:is(.select,.select select) option{border-radius:var(--radius-field);white-space:normal;padding-block:.375rem;padding-inline:.75rem;transition-property:color,background-color;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1)}:is(.select,.select select) option:not(:disabled):hover,:is(.select,.select select) option:not(:disabled):focus-visible{cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select,.select select) option:not(:disabled):hover,:is(.select,.select select) option:not(:disabled):focus-visible{background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}:is(.select,.select select) option:not(:disabled):hover,:is(.select,.select select) option:not(:disabled):focus-visible{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){:is(.select,.select select) option:not(:disabled):hover,:is(.select,.select select) option:not(:disabled):focus-visible{outline-offset:2px;outline:2px solid #0000}}:is(.select,.select select) option:not(:disabled):active{background-color:var(--color-neutral);color:var(--color-neutral-content);box-shadow:0 2px calc(var(--depth)*3px) -2px var(--color-neutral)}.avatar{vertical-align:middle;display:inline-flex;position:relative}.avatar>div{aspect-ratio:1;display:block;overflow:hidden}.avatar img{object-fit:cover;width:100%;height:100%}.checkbox{border:var(--border)solid var(--input-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.checkbox{border:var(--border)solid var(--input-color,color-mix(in oklab,var(--color-base-content)20%,#0000))}}.checkbox{cursor:pointer;appearance:none;border-radius:var(--radius-selector);vertical-align:middle;color:var(--color-base-content);box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 0 #0000 inset,0 0 #0000;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);flex-shrink:0;padding:.25rem;transition:background-color .2s,box-shadow .2s;display:inline-block;position:relative}.checkbox:before{--tw-content:"";content:var(--tw-content);opacity:0;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,70% 80%,70% 100%);width:100%;height:100%;box-shadow:0 3px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-color:currentColor;font-size:1rem;line-height:.75;transition:clip-path .3s .1s,opacity .1s .1s,rotate .3s .1s,translate .3s .1s;display:block;rotate:45deg}.checkbox:focus-visible{outline:2px solid var(--input-color,currentColor);outline-offset:2px}.checkbox:checked,.checkbox[aria-checked=true]{background-color:var(--input-color,#0000);box-shadow:0 0 #0000 inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1))}:is(.checkbox:checked,.checkbox[aria-checked=true]):before{clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 0%,70% 0%,70% 100%);opacity:1}@media(forced-colors:active){:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}@media print{:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}.checkbox:indeterminate{background-color:var(--input-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.checkbox:indeterminate{background-color:var(--input-color,color-mix(in oklab,var(--color-base-content)20%,#0000))}}.checkbox:indeterminate:before{opacity:1;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,80% 80%,80% 100%);translate:0 -35%;rotate:none}.radio{cursor:pointer;appearance:none;vertical-align:middle;border:var(--border)solid var(--input-color,currentColor);border-radius:3.40282e38px;flex-shrink:0;padding:.25rem;display:inline-block;position:relative}@supports (color:color-mix(in lab,red,red)){.radio{border:var(--border)solid var(--input-color,color-mix(in srgb,currentColor 20%,#0000))}}.radio{box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);color:var(--input-color,currentColor)}.radio:before{--tw-content:"";content:var(--tw-content);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);border-radius:3.40282e38px;width:100%;height:100%;display:block}.radio:focus-visible{outline:2px solid}.radio:checked,.radio[aria-checked=true]{background-color:var(--color-base-100);border-color:currentColor}@media(prefers-reduced-motion:no-preference){.radio:checked,.radio[aria-checked=true]{animation:.2s ease-out radio}}:is(.radio:checked,.radio[aria-checked=true]):before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1));background-color:currentColor}@media(forced-colors:active){:is(.radio:checked,.radio[aria-checked=true]):before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{:is(.radio:checked,.radio[aria-checked=true]):before{outline-offset:-1rem;outline:.25rem solid}}.rating{vertical-align:middle;display:inline-flex;position:relative}.rating input{appearance:none;border:none}.rating :where(*){background-color:var(--color-base-content);opacity:.2;border-radius:0;width:1.5rem;height:1.5rem}@media(prefers-reduced-motion:no-preference){.rating :where(*){animation:.25s ease-out rating}}.rating :where(*):is(input){cursor:pointer}.rating .rating-hidden{background-color:#0000;width:.5rem}.rating input[type=radio]:checked{background-image:none}.rating :checked,.rating [aria-checked=true],.rating [aria-current=true],.rating :has(~:checked,~[aria-checked=true],~[aria-current=true]){opacity:1}.rating :focus-visible{scale:1.1}@media(prefers-reduced-motion:no-preference){.rating :focus-visible{transition:scale .2s ease-out}}.rating :active:focus{animation:none;scale:1.1}.progress{appearance:none;border-radius:var(--radius-box);background-color:currentColor;width:100%;height:.5rem;position:relative;overflow:hidden}@supports (color:color-mix(in lab,red,red)){.progress{background-color:color-mix(in oklab,currentcolor 20%,transparent)}}.progress{color:var(--color-base-content)}.progress:indeterminate{background-image:repeating-linear-gradient(90deg,currentColor -1% 10%,#0000 10% 90%);background-position-x:15%;background-size:200%}@media(prefers-reduced-motion:no-preference){.progress:indeterminate{animation:5s ease-in-out infinite progress}}@supports ((-moz-appearance:none)){.progress:indeterminate::-moz-progress-bar{background-color:#0000}@media(prefers-reduced-motion:no-preference){.progress:indeterminate::-moz-progress-bar{background-image:repeating-linear-gradient(90deg,currentColor -1% 10%,#0000 10% 90%);background-position-x:15%;background-size:200%;animation:5s ease-in-out infinite progress}}.progress::-moz-progress-bar{border-radius:var(--radius-box);background-color:currentColor}}@supports ((-webkit-appearance:none)){.progress::-webkit-progress-bar{border-radius:var(--radius-box);background-color:#0000}.progress::-webkit-progress-value{border-radius:var(--radius-box);background-color:currentColor}}.stack{grid-template-rows:3px 4px 1fr 4px 3px;grid-template-columns:3px 4px 1fr 4px 3px;display:inline-grid}.stack>*{width:100%;height:100%}.stack>:nth-child(n+2){opacity:.7;width:100%}.stack>:nth-child(2){z-index:2;opacity:.9}.stack>:first-child{z-index:3;width:100%}.filter{flex-wrap:wrap;display:flex}.filter input[type=radio]{width:auto}.filter input{opacity:1;transition:margin .1s,opacity .3s,padding .3s,border-width .1s;overflow:hidden;scale:1}.filter input:not(:last-child){margin-inline-end:.25rem}.filter input.filter-reset{aspect-ratio:1}.filter input.filter-reset:after{--tw-content:"×";content:var(--tw-content)}.filter:not(:has(input:checked:not(.filter-reset))) .filter-reset,.filter:not(:has(input:checked:not(.filter-reset))) input[type=reset],.filter:has(input:checked:not(.filter-reset)) input:not(:checked,.filter-reset,input[type=reset]){opacity:0;border-width:0;width:0;margin-inline:0;padding-inline:0;scale:0}.label{white-space:nowrap;color:currentColor;align-items:center;gap:.375rem;display:inline-flex}@supports (color:color-mix(in lab,red,red)){.label{color:color-mix(in oklab,currentcolor 60%,transparent)}}.label:has(input){cursor:pointer}.label:is(.input>*,.select>*){white-space:nowrap;height:calc(100% - .5rem);font-size:inherit;align-items:center;padding-inline:.75rem;display:flex}.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid currentColor;margin-inline:-.75rem .75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid currentColor;margin-inline:.75rem -.75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.status{aspect-ratio:1;border-radius:var(--radius-selector);background-color:var(--color-base-content);width:.5rem;height:.5rem;display:inline-block}@supports (color:color-mix(in lab,red,red)){.status{background-color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.status{vertical-align:middle;color:#0000004d;background-position:50%;background-repeat:no-repeat}@supports (color:color-mix(in lab,red,red)){.status{color:color-mix(in oklab,var(--color-black)30%,transparent)}}.status{background-image:radial-gradient(circle at 35% 30%,oklch(1 0 0/calc(var(--depth)*.5)),#0000);box-shadow:0 2px 3px -1px}@supports (color:color-mix(in lab,red,red)){.status{box-shadow:0 2px 3px -1px color-mix(in oklab,currentColor calc(var(--depth)*100%),#0000)}}.tabs{--tabs-height:auto;--tabs-direction:row;--tab-height:calc(var(--size-field,.25rem)*10);height:var(--tabs-height);flex-wrap:wrap;flex-direction:var(--tabs-direction);display:flex}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}}@layer daisyui.l1.l2{.modal.modal-open,.modal[open],.modal:target,.modal-toggle:checked+.modal{pointer-events:auto;visibility:visible;opacity:1;transition:visibility 0s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;background-color:#0006}:is(.modal.modal-open,.modal[open],.modal:target,.modal-toggle:checked+.modal) .modal-box{opacity:1;translate:0;scale:1}:root:has(:is(.modal.modal-open,.modal[open],.modal:target,.modal-toggle:checked+.modal)){--page-has-backdrop:1;--page-overflow:hidden;--page-scroll-bg:var(--page-scroll-bg-on);--page-scroll-gutter:stable;--page-scroll-transition:var(--page-scroll-transition-on);animation:forwards set-page-has-scroll;animation-timeline:scroll()}@starting-style{.modal.modal-open,.modal[open],.modal:target,.modal-toggle:checked+.modal{opacity:0}}.tooltip>.tooltip-content,.tooltip[data-tip]:before{transform:translate(-50%)translateY(var(--tt-pos,.25rem));inset:auto auto var(--tt-off)50%}.tooltip:after{transform:translate(-50%)translateY(var(--tt-pos,.25rem));inset:auto auto var(--tt-tail)50%}.btn:disabled:not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:disabled:not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:disabled:not(.btn-link,.btn-ghost){box-shadow:none}.btn:disabled{pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:disabled{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}.btn[disabled]:not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn[disabled]:not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn[disabled]:not(.btn-link,.btn-ghost){box-shadow:none}.btn[disabled]{pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn[disabled]{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media(prefers-reduced-motion:no-preference){.collapse[open].collapse-arrow>.collapse-title:after,.collapse.collapse-open.collapse-arrow>.collapse-title:after{transform:translateY(-50%)rotate(225deg)}}.collapse.collapse-open.collapse-plus>.collapse-title:after{--tw-content:"−";content:var(--tw-content)}:is(.collapse[tabindex].collapse-arrow:focus:not(.collapse-close),.collapse.collapse-arrow[tabindex]:focus-within:not(.collapse-close))>.collapse-title:after,.collapse.collapse-arrow:not(.collapse-close)>input:is([type=checkbox],[type=radio]):checked~.collapse-title:after{transform:translateY(-50%)rotate(225deg)}.collapse[open].collapse-plus>.collapse-title:after,.collapse[tabindex].collapse-plus:focus:not(.collapse-close)>.collapse-title:after,.collapse.collapse-plus:not(.collapse-close)>input:is([type=checkbox],[type=radio]):checked~.collapse-title:after{--tw-content:"−";content:var(--tw-content)}.checkbox:disabled,.radio:disabled{cursor:not-allowed;opacity:.2}.rating.rating-xs :where(:not(.rating-hidden)){width:1rem;height:1rem}.rating.rating-sm :where(:not(.rating-hidden)){width:1.25rem;height:1.25rem}.rating.rating-md :where(:not(.rating-hidden)){width:1.5rem;height:1.5rem}.rating.rating-lg :where(:not(.rating-hidden)){width:1.75rem;height:1.75rem}.rating.rating-xl :where(:not(.rating-hidden)){width:2rem;height:2rem}.dropdown-center{--anchor-h:center}.dropdown-center :where(.dropdown-content){inset-inline-end:50%;translate:50%}[dir=rtl] :is(.dropdown-center :where(.dropdown-content)){translate:-50%}.dropdown-center.dropdown-left{--anchor-h:left;--anchor-v:center}.dropdown-center.dropdown-left .dropdown-content{top:auto;bottom:50%;translate:0 50%}.dropdown-center.dropdown-right{--anchor-h:right;--anchor-v:center}.dropdown-center.dropdown-right .dropdown-content{top:auto;bottom:50%;translate:0 50%}.dropdown-end{--anchor-h:span-left}.dropdown-end :where(.dropdown-content){inset-inline-end:0;translate:0}[dir=rtl] :is(.dropdown-end :where(.dropdown-content)){translate:0}.dropdown-end.dropdown-left{--anchor-h:left;--anchor-v:span-top}.dropdown-end.dropdown-left .dropdown-content{top:auto;bottom:0}.dropdown-end.dropdown-right{--anchor-h:right;--anchor-v:span-top}.dropdown-end.dropdown-right .dropdown-content{top:auto;bottom:0}.dropdown-bottom{--anchor-v:bottom}.dropdown-bottom .dropdown-content{transform-origin:top;top:100%;bottom:auto}.dropdown-top{--anchor-v:top}.dropdown-top .dropdown-content{transform-origin:bottom;top:auto;bottom:100%}:is(.stack,.stack.stack-bottom)>*{grid-area:3/3/6/4}:is(.stack,.stack.stack-bottom)>:nth-child(2){grid-area:2/2/5/5}:is(.stack,.stack.stack-bottom)>:first-child{grid-area:1/1/4/6}.stack.stack-top>*{grid-area:1/3/4/4}.stack.stack-top>:nth-child(2){grid-area:2/2/5/5}.stack.stack-top>:first-child{grid-area:3/1/6/6}.stack.stack-start>*{grid-area:3/1/4/4}.stack.stack-start>:nth-child(2){grid-area:2/2/5/5}.stack.stack-start>:first-child{grid-area:1/3/6/6}.stack.stack-end>*{grid-area:3/3/4/6}.stack.stack-end>:nth-child(2){grid-area:2/2/5/5}.stack.stack-end>:first-child{grid-area:1/1/6/4}.loading-xs{width:calc(var(--size-selector,.25rem)*4)}.loading-spinner{-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")}.range-xs{--range-thumb-size:calc(var(--size-selector,.25rem)*4)}.toggle-sm[type=checkbox],.toggle-sm:has([type=checkbox]){--size:calc(var(--size-selector,.25rem)*5)}}.prose :where(a.btn:not(.btn-link)):not(:where([class~=not-prose],[class~=not-prose] *)){text-decoration-line:none}.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse:not(td,tr,colgroup){visibility:revert-layer}.collapse{visibility:collapse}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.inset-x-0{inset-inline:calc(var(--spacing)*0)}.inset-x-2{inset-inline:calc(var(--spacing)*2)}.inset-x-3{inset-inline:calc(var(--spacing)*3)}.inset-x-4{inset-inline:calc(var(--spacing)*4)}.-inset-y-1{inset-block:calc(var(--spacing)*-1)}.inset-y-0{inset-block:calc(var(--spacing)*0)}.-top-1\\.5{top:calc(var(--spacing)*-1.5)}.-top-1\\.75{top:calc(var(--spacing)*-1.75)}.-top-2{top:calc(var(--spacing)*-2)}.-top-3\\.5{top:calc(var(--spacing)*-3.5)}.-top-4{top:calc(var(--spacing)*-4)}.-top-100\\!{top:calc(var(--spacing)*-100)!important}.top-0{top:calc(var(--spacing)*0)}.top-0\\!{top:calc(var(--spacing)*0)!important}.top-0\\.5{top:calc(var(--spacing)*.5)}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2{top:50%}.top-4{top:calc(var(--spacing)*4)}.top-14{top:calc(var(--spacing)*14)}.top-auto{top:auto}.top-auto\\!{top:auto!important}.-right-1{right:calc(var(--spacing)*-1)}.-right-3{right:calc(var(--spacing)*-3)}.-right-6{right:calc(var(--spacing)*-6)}.-right-200{right:calc(var(--spacing)*-200)}.right-0\\!{right:calc(var(--spacing)*0)!important}.right-0\\.5{right:calc(var(--spacing)*.5)}.right-1{right:calc(var(--spacing)*1)}.right-2{right:calc(var(--spacing)*2)}.right-5{right:calc(var(--spacing)*5)}.right-auto{right:auto}.right-auto\\!{right:auto!important}.-bottom-1{bottom:calc(var(--spacing)*-1)}.-bottom-1\\.5{bottom:calc(var(--spacing)*-1.5)}.-bottom-2{bottom:calc(var(--spacing)*-2)}.-bottom-3\\.5{bottom:calc(var(--spacing)*-3.5)}.-bottom-4{bottom:calc(var(--spacing)*-4)}.-bottom-20\\!{bottom:calc(var(--spacing)*-20)!important}.-bottom-100\\!{bottom:calc(var(--spacing)*-100)!important}.bottom-0{bottom:calc(var(--spacing)*0)}.bottom-0\\!{bottom:calc(var(--spacing)*0)!important}.bottom-0\\.5{bottom:calc(var(--spacing)*.5)}.bottom-4{bottom:calc(var(--spacing)*4)}.bottom-6\\.5\\!{bottom:calc(var(--spacing)*6.5)!important}.bottom-8{bottom:calc(var(--spacing)*8)}.bottom-15{bottom:calc(var(--spacing)*15)}.bottom-16{bottom:calc(var(--spacing)*16)}.bottom-auto{bottom:auto}.bottom-auto\\!{bottom:auto!important}.-left-1{left:calc(var(--spacing)*-1)}.-left-3{left:calc(var(--spacing)*-3)}.-left-4{left:calc(var(--spacing)*-4)}.-left-200{left:calc(var(--spacing)*-200)}.left-0{left:calc(var(--spacing)*0)}.left-0\\!{left:calc(var(--spacing)*0)!important}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing)*2)}.left-5{left:calc(var(--spacing)*5)}.left-auto{left:auto}.left-auto\\!{left:auto!important}.-z-1{z-index:-1}.-z-2{z-index:-2}.-z-10{z-index:-10}.-z-50{z-index:-50}.z-0{z-index:0}.z-1{z-index:1}.z-9{z-index:9}.z-10{z-index:10}.z-40{z-index:40}.z-50{z-index:50}.z-999{z-index:999}.z-99999{z-index:99999}.z-999999{z-index:999999}.z-9999999{z-index:9999999}.z-99999999{z-index:99999999}.z-2147483647{z-index:2147483647}.order-first{order:-9999}.col-span-1\\!{grid-column:span 1/span 1!important}.container{width:100%}@media(min-width:20rem){.container{max-width:20rem}}@media(min-width:30rem){.container{max-width:30rem}}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.mx-4{margin-inline:calc(var(--spacing)*4)}.mx-auto{margin-inline:auto}.my-4{margin-block:calc(var(--spacing)*4)}.-mt-0\\.5{margin-top:calc(var(--spacing)*-.5)}.-mt-4{margin-top:calc(var(--spacing)*-4)}.-mt-13{margin-top:calc(var(--spacing)*-13)}.mt-0\\.75{margin-top:calc(var(--spacing)*.75)}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-3\\.5{margin-top:calc(var(--spacing)*3.5)}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-auto{margin-top:auto}.mt-auto\\!{margin-top:auto!important}.-mr-1{margin-right:calc(var(--spacing)*-1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-12\\!{margin-right:calc(var(--spacing)*12)!important}.mr-auto{margin-right:auto}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\.5{margin-bottom:calc(var(--spacing)*3.5)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.-ml-2{margin-left:calc(var(--spacing)*-2)}.ml-1{margin-left:calc(var(--spacing)*1)}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-auto{margin-left:auto}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.aspect-square{aspect-ratio:1}.size-2{width:calc(var(--spacing)*2);height:calc(var(--spacing)*2)}.size-3{width:calc(var(--spacing)*3);height:calc(var(--spacing)*3)}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-4\\.5{width:calc(var(--spacing)*4.5);height:calc(var(--spacing)*4.5)}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.size-5\\.5{width:calc(var(--spacing)*5.5);height:calc(var(--spacing)*5.5)}.size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.size-7{width:calc(var(--spacing)*7);height:calc(var(--spacing)*7)}.size-14{width:calc(var(--spacing)*14);height:calc(var(--spacing)*14)}.size-20{width:calc(var(--spacing)*20);height:calc(var(--spacing)*20)}.size-32{width:calc(var(--spacing)*32);height:calc(var(--spacing)*32)}.h-\\(--player-height\\){height:var(--player-height)}.h-1\\.5{height:calc(var(--spacing)*1.5)}.h-2{height:calc(var(--spacing)*2)}.h-4{height:calc(var(--spacing)*4)}.h-6{height:calc(var(--spacing)*6)}.h-7{height:calc(var(--spacing)*7)}.h-8{height:calc(var(--spacing)*8)}.h-9{height:calc(var(--spacing)*9)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.h-32{height:calc(var(--spacing)*32)}.h-40{height:calc(var(--spacing)*40)}.h-auto{height:auto}.h-fit{height:fit-content}.h-full{height:100%}.h-min{height:min-content}.h-screen{height:100vh}.max-h-2{max-height:calc(var(--spacing)*2)}.max-h-30{max-height:calc(var(--spacing)*30)}.max-h-\\[70\\%\\]{max-height:70%}.max-h-\\[calc\\(100dvh-52px\\)\\]{max-height:calc(100dvh - 52px)}.max-h-full{max-height:100%}.min-h-32{min-height:calc(var(--spacing)*32)}.min-h-px{min-height:1px}.w-\\(--widget-width\\){width:var(--widget-width)}.w-4{width:calc(var(--spacing)*4)}.w-7{width:calc(var(--spacing)*7)}.w-8{width:calc(var(--spacing)*8)}.w-9{width:calc(var(--spacing)*9)}.w-10{width:calc(var(--spacing)*10)}.w-12{width:calc(var(--spacing)*12)}.w-16{width:calc(var(--spacing)*16)}.w-20{width:calc(var(--spacing)*20)}.w-30{width:calc(var(--spacing)*30)}.w-40{width:calc(var(--spacing)*40)}.w-44{width:calc(var(--spacing)*44)}.w-\\[calc\\(var\\(--widget-width\\)-1rem\\)\\]{width:calc(var(--widget-width) - 1rem)}.w-auto{width:auto}.w-auto\\!{width:auto!important}.w-dvw{width:100dvw}.w-full{width:100%}.w-px{width:1px}.w-screen{width:100vw}.max-w-15{max-width:calc(var(--spacing)*15)}.max-w-40{max-width:calc(var(--spacing)*40)}.max-w-45{max-width:calc(var(--spacing)*45)}.max-w-50{max-width:calc(var(--spacing)*50)}.max-w-dvw{max-width:100dvw}.max-w-xs{max-width:320px}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-7{min-width:calc(var(--spacing)*7)}.min-w-8{min-width:calc(var(--spacing)*8)}.min-w-9{min-width:calc(var(--spacing)*9)}.min-w-10{min-width:calc(var(--spacing)*10)}.min-w-12{min-width:calc(var(--spacing)*12)}.min-w-px{min-width:1px}.min-w-xs{min-width:320px}.flex-1{flex:1}.shrink-0{flex-shrink:0}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-6{--tw-translate-x:calc(var(--spacing)*-6);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-full{--tw-translate-x:-100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-1\\/2{--tw-translate-x: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-full{--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-full{--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-none\\!{translate:none!important}.-rotate-90{rotate:-90deg}.rotate-45{rotate:45deg}.rotate-90{rotate:90deg}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-move-down{animation:.2s ease-in-out move-down}.animate-move-left{animation:.2s ease-in-out move-left}.animate-move-right{animation:.2s ease-in-out move-right}.animate-move-up{animation:.2s ease-in-out move-up}.animate-pulse{animation:var(--animate-pulse)}.animate-scale{animation:.2s ease-in-out scale}.animate-spin{animation:var(--animate-spin)}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize{resize:both}.resize-none{resize:none}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-wrap-reverse{flex-wrap:wrap-reverse}.place-content-center{place-content:center}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\\.5{gap:calc(var(--spacing)*1.5)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-5{gap:calc(var(--spacing)*5)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.gap-x-2{column-gap:calc(var(--spacing)*2)}.gap-y-1{row-gap:calc(var(--spacing)*1)}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-none\\!{border-radius:0!important}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:calc(var(--radius) + 4px)}.rounded-xs{border-radius:var(--radius-xs)}.rounded-r-full{border-top-right-radius:3.40282e38px;border-bottom-right-radius:3.40282e38px}.border{border-style:var(--tw-border-style);border-width:1px}.border-6{border-style:var(--tw-border-style);border-width:6px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-none{--tw-border-style:none;border-style:none}.border-blue-500{border-color:var(--color-blue-500)}.border-border,.border-border\\/30{border-color:var(--border)}@supports (color:color-mix(in lab,red,red)){.border-border\\/30{border-color:color-mix(in oklab,var(--border)30%,transparent)}}.border-border\\/40{border-color:var(--border)}@supports (color:color-mix(in lab,red,red)){.border-border\\/40{border-color:color-mix(in oklab,var(--border)40%,transparent)}}.border-destructive{border-color:var(--destructive)}.border-foreground\\/10{border-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.border-foreground\\/10{border-color:color-mix(in oklab,var(--foreground)10%,transparent)}}.border-foreground\\/20{border-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.border-foreground\\/20{border-color:color-mix(in oklab,var(--foreground)20%,transparent)}}.border-green-700{border-color:var(--color-green-700)}.border-orange-500{border-color:var(--color-orange-500)}.border-primary,.border-primary\\/20{border-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.border-primary\\/20{border-color:color-mix(in oklab,var(--primary)20%,transparent)}}.border-primary\\/30{border-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.border-primary\\/30{border-color:color-mix(in oklab,var(--primary)30%,transparent)}}.bg-\\[\\#f8f8f8\\]{background-color:#f8f8f8}.bg-accent{background-color:var(--accent)}.bg-background{background-color:var(--background)}.bg-background\\!{background-color:var(--background)!important}.bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab,red,red)){.bg-black\\/20{background-color:color-mix(in oklab,var(--color-black)20%,transparent)}}.bg-blue-500{background-color:var(--color-blue-500)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-border{background-color:var(--border)}.bg-current{background-color:currentColor}.bg-destructive{background-color:var(--destructive)}.bg-foreground,.bg-foreground\\/10{background-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.bg-foreground\\/10{background-color:color-mix(in oklab,var(--foreground)10%,transparent)}}.bg-green-600{background-color:var(--color-green-600)}.bg-green-700{background-color:var(--color-green-700)}.bg-muted{background-color:var(--muted)}.bg-muted-foreground{background-color:var(--muted-foreground)}.bg-orange-500{background-color:var(--color-orange-500)}.bg-orange-600{background-color:var(--color-orange-600)}.bg-popover{background-color:var(--popover)}.bg-primary{background-color:var(--primary)}.bg-primary\\!{background-color:var(--primary)!important}.bg-primary-foreground,.bg-primary-foreground\\/30{background-color:var(--primary-foreground)}@supports (color:color-mix(in lab,red,red)){.bg-primary-foreground\\/30{background-color:color-mix(in oklab,var(--primary-foreground)30%,transparent)}}.bg-primary\\/10{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/10{background-color:color-mix(in oklab,var(--primary)10%,transparent)}}.bg-primary\\/15{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/15{background-color:color-mix(in oklab,var(--primary)15%,transparent)}}.bg-primary\\/20{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/20{background-color:color-mix(in oklab,var(--primary)20%,transparent)}}.bg-secondary{background-color:var(--secondary)}.bg-success{background-color:var(--success)}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.mask-\\(--icon\\){-webkit-mask-image:var(--icon);mask-image:var(--icon)}.bg-contain{background-size:contain}.bg-center{background-position:50%}.bg-no-repeat{background-repeat:no-repeat}.mask-contain{-webkit-mask-size:contain;mask-size:contain}.mask-center{-webkit-mask-position:50%;mask-position:50%}.mask-no-repeat{-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.p-0{padding:calc(var(--spacing)*0)}.p-0\\.5{padding:calc(var(--spacing)*.5)}.p-0\\.75\\!{padding:calc(var(--spacing)*.75)!important}.p-1{padding:calc(var(--spacing)*1)}.p-1\\.5{padding:calc(var(--spacing)*1.5)}.p-2{padding:calc(var(--spacing)*2)}.p-2\\.5{padding:calc(var(--spacing)*2.5)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-1\\.5{padding-inline:calc(var(--spacing)*1.5)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\.5{padding-inline:calc(var(--spacing)*2.5)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-3\\.5{padding-inline:calc(var(--spacing)*3.5)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.px-7{padding-inline:calc(var(--spacing)*7)}.py-0{padding-block:calc(var(--spacing)*0)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-1\\.25{padding-block:calc(var(--spacing)*1.25)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-10{padding-block:calc(var(--spacing)*10)}.pt-2{padding-top:calc(var(--spacing)*2)}.pr-2{padding-right:calc(var(--spacing)*2)}.pr-3{padding-right:calc(var(--spacing)*3)}.pr-4{padding-right:calc(var(--spacing)*4)}.pr-8{padding-right:calc(var(--spacing)*8)}.pb-0{padding-bottom:calc(var(--spacing)*0)}.pb-1{padding-bottom:calc(var(--spacing)*1)}.pb-5{padding-bottom:calc(var(--spacing)*5)}.pl-4{padding-left:calc(var(--spacing)*4)}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.text-base{font-size:calc(var(--font-size)*1);line-height:var(--tw-leading,var(--text-base--line-height))}.text-sm{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:calc(var(--font-size)*.75);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-normal{--tw-leading:var(--leading-normal);line-height:var(--leading-normal)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-light{--tw-font-weight:var(--font-weight-light);font-weight:var(--font-weight-light)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.break-anywhere{overflow-wrap:anywhere}.break-all{word-break:break-all}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.text-background{color:var(--background)}.text-black{color:var(--color-black)}.text-blue-50{color:var(--color-blue-50)}.text-destructive{color:var(--destructive)}.text-destructive-foreground{color:var(--destructive-foreground)}.text-foreground{color:var(--foreground)}.text-green-50{color:var(--color-green-50)}.text-muted-foreground{color:var(--muted-foreground)}.text-orange-50{color:var(--color-orange-50)}.text-popover-foreground{color:var(--popover-foreground)}.text-primary{color:var(--primary)}.text-primary-foreground{color:var(--primary-foreground)}.text-primary-foreground\\!{color:var(--primary-foreground)!important}.text-secondary{color:var(--secondary)}.text-secondary-foreground{color:var(--secondary-foreground)}.text-success-foreground{color:var(--success-foreground)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.italic{font-style:italic}.underline{text-decoration-line:underline}.opacity-0{opacity:0}.opacity-15{opacity:.15}.opacity-50{opacity:.5}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline,.outline-1{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-border{outline-color:var(--border)}.outline-destructive{outline-color:var(--destructive)}.outline-destructive-foreground{outline-color:var(--destructive-foreground)}.outline-primary{outline-color:var(--primary)}.outline-primary-foreground{outline-color:var(--primary-foreground)}.brightness-85{--tw-brightness:brightness(85%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow-lg{--tw-drop-shadow-size:drop-shadow(0 4px 4px var(--tw-drop-shadow-color,#00000026));--tw-drop-shadow:drop-shadow(var(--drop-shadow-lg));filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[bottom\\]{transition-property:bottom;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[colors\\]{transition-property:colors;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[margin\\]{transition-property:margin;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[width\\]{transition-property:width;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-none\\!{transition-property:none!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-solid{--tw-outline-style:solid;outline-style:solid}.\\[--player-height\\:calc\\(100dvh-52px\\)\\]{--player-height: calc(100dvh - 52px) }.\\[--range-bg\\:var\\(--muted\\)\\]{--range-bg:var(--muted)}.\\[--range-thumb\\:var\\(--primary-foreground\\)\\]{--range-thumb:var(--primary-foreground)}.\\[wasm\\:\\"\\+r\\[3\\]\\+\\"\\]{wasm:"+r[3]+"}:is(.\\*\\:z-10>*){z-index:10}:is(.\\*\\:text-background>*){color:var(--background)}:is(.\\*\\:text-blue-50>*){color:var(--color-blue-50)}:is(.\\*\\:text-destructive-foreground>*){color:var(--destructive-foreground)}:is(.\\*\\:text-green-50>*){color:var(--color-green-50)}:is(.\\*\\:text-orange-50>*){color:var(--color-orange-50)}:is(.\\*\\:text-primary-foreground>*){color:var(--primary-foreground)}:is(.\\*\\*\\:text-foreground *){color:var(--foreground)}.not-focus\\:outline-0:not(:focus){outline-style:var(--tw-outline-style);outline-width:0}@media(hover:hover){.group-hover\\:bg-foreground:is(:where(.group):hover *){background-color:var(--foreground)}.group-hover\\:brightness-85:is(:where(.group):hover *){--tw-brightness:brightness(85%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}}.group-data-\\[state\\=close\\]\\:-mb-100:is(:where(.group)[data-state=close] *){margin-bottom:calc(var(--spacing)*-100)}.placeholder\\:text-sm::placeholder{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}.placeholder\\:text-muted-foreground::placeholder{color:var(--muted-foreground)}.placeholder\\:normal-case::placeholder{text-transform:none}.before\\:size-4:before{content:var(--tw-content);width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.before\\:rounded-full:before{content:var(--tw-content);border-radius:3.40282e38px}.not-checked\\:before\\:bg-background:not(:checked):before{content:var(--tw-content);background-color:var(--background)}.checked\\:bg-primary:checked{background-color:var(--primary)}.checked\\:text-primary-foreground:checked{color:var(--primary-foreground)}.focus-within\\:pointer-events-auto:focus-within{pointer-events:auto}.focus-within\\:visible:focus-within{visibility:visible}@media(hover:hover){.hover\\:cursor-pointer:hover{cursor:pointer}.hover\\:bg-accent:hover{background-color:var(--accent)}.hover\\:bg-destructive\\/5:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-destructive\\/5:hover{background-color:color-mix(in oklab,var(--destructive)5%,transparent)}}.hover\\:bg-foreground\\/5:hover{background-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-foreground\\/5:hover{background-color:color-mix(in oklab,var(--foreground)5%,transparent)}}.hover\\:bg-muted:hover{background-color:var(--muted)}.hover\\:bg-muted\\!:hover{background-color:var(--muted)!important}.hover\\:bg-primary-foreground\\/5:hover{background-color:var(--primary-foreground)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-primary-foreground\\/5:hover{background-color:color-mix(in oklab,var(--primary-foreground)5%,transparent)}}.hover\\:bg-primary\\/5:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-primary\\/5:hover{background-color:color-mix(in oklab,var(--primary)5%,transparent)}}.hover\\:bg-primary\\/10:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-primary\\/10:hover{background-color:color-mix(in oklab,var(--primary)10%,transparent)}}.hover\\:bg-primary\\/15:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-primary\\/15:hover{background-color:color-mix(in oklab,var(--primary)15%,transparent)}}.hover\\:bg-primary\\/20:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-primary\\/20:hover{background-color:color-mix(in oklab,var(--primary)20%,transparent)}}.hover\\:text-destructive:hover{color:var(--destructive)}.hover\\:text-foreground:hover{color:var(--foreground)}.hover\\:text-primary:hover{color:var(--primary)}.hover\\:opacity-70:hover{opacity:.7}.hover\\:brightness-110:hover{--tw-brightness:brightness(110%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.hover\\:brightness-115:hover{--tw-brightness:brightness(115%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.hover\\:brightness-125:hover{--tw-brightness:brightness(125%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.not-expanded\\:hover\\:cursor-move:not(:is(:host([data-expanded=true]) *)):hover{cursor:move}}.focus\\:bg-primary:focus{background-color:var(--primary)}.focus\\:text-destructive:focus{color:var(--destructive)}.focus\\:text-primary-foreground:focus{color:var(--primary-foreground)}.focus\\:outline-2:focus{outline-style:var(--tw-outline-style);outline-width:2px}.focus\\:outline-solid:focus{--tw-outline-style:solid;outline-style:solid}.active\\:bg-primary\\/20:active{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.active\\:bg-primary\\/20:active{background-color:color-mix(in oklab,var(--primary)20%,transparent)}}.has-\\[\\>\\[role\\=button\\]\\[aria-disabled\\=true\\]\\]\\:pointer-events-none:has(>[role=button][aria-disabled=true]),.has-\\[\\>button\\:disabled\\]\\:pointer-events-none:has(>button:disabled){pointer-events:none}.data-\\[active\\=true\\]\\:bg-primary-foreground\\![data-active=true]{background-color:var(--primary-foreground)!important}.data-\\[highlight\\=true\\]\\:animate-highlight-primary[data-highlight=true]{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y);outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.data-\\[highlight\\=true\\]\\:animate-highlight-primary[data-highlight=true]{outline-color:color-mix(in oklab,var(--primary)50%,transparent)}}.data-\\[highlight\\=true\\]\\:animate-highlight-primary[data-highlight=true]{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));--tw-outline-style:solid;outline-style:solid;animation:.5s ease-out infinite alternate-reverse highlight-shadow-primary}:is(.\\*\\*\\:data-\\[highlight\\=true\\]\\:animate-highlight-primary *)[data-highlight=true]{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y);outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){:is(.\\*\\*\\:data-\\[highlight\\=true\\]\\:animate-highlight-primary *)[data-highlight=true]{outline-color:color-mix(in oklab,var(--primary)50%,transparent)}}:is(.\\*\\*\\:data-\\[highlight\\=true\\]\\:animate-highlight-primary *)[data-highlight=true]{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));--tw-outline-style:solid;outline-style:solid;animation:.5s ease-out infinite alternate-reverse highlight-shadow-primary}:is(.\\*\\*\\:data-\\[highlight\\=true\\]\\:animate-highlight-primary-foreground *)[data-highlight=true]{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y);outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--primary-foreground);transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));--tw-outline-style:solid;outline-style:solid;animation:.5s ease-out infinite alternate-reverse highlight-shadow-primary-foreground}:is(.\\*\\*\\:data-\\[slot\\=dialog-close\\]\\:hidden *)[data-slot=dialog-close],:is(.focus-within\\:\\*\\*\\:data-\\[slot\\=tooltip-content\\]\\:hidden:focus-within *)[data-slot=tooltip-content]{display:none}@media not all and (min-width:64rem){.max-lg\\:hidden{display:none}}@media not all and (min-width:40rem){.max-sm\\:inset-x-0\\!{inset-inline:calc(var(--spacing)*0)!important}}@media(min-width:40rem){.sm\\:size-8{width:calc(var(--spacing)*8);height:calc(var(--spacing)*8)}.sm\\:h-auto{height:auto}.sm\\:w-xl{width:576px}.sm\\:rounded-xl{border-radius:calc(var(--radius) + 4px)}.sm\\:rounded-t-xl{border-top-left-radius:calc(var(--radius) + 4px);border-top-right-radius:calc(var(--radius) + 4px)}.sm\\:\\[--player-height\\:800px\\]{--player-height:800px}@media(hover:hover){.sm\\:hover\\:cursor-move:hover{cursor:move}}}.dark\\:bg-\\[\\#0a0a0a\\]:is(:host(.dark) *){background-color:#0a0a0a}.dark\\:bg-foreground:is(:host(.dark) *){background-color:var(--foreground)}.dark\\:bg-muted:is(:host(.dark) *){background-color:var(--muted)}.dark\\:text-white:is(:host(.dark) *){color:var(--color-white)}.dark\\:opacity-10:is(:host(.dark) *){opacity:.1}.expanded\\:inset-x-4\\!:is(:host([data-expanded=true]) *){inset-inline:calc(var(--spacing)*4)!important}.expanded\\:bottom-16\\!:is(:host([data-expanded=true]) *){bottom:calc(var(--spacing)*16)!important}.expanded\\:w-full:is(:host([data-expanded=true]) *){width:100%}.expanded\\:text-base\\!:is(:host([data-expanded=true]) *){font-size:calc(var(--font-size)*1)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.expanded\\:text-sm:is(:host([data-expanded=true]) *){font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}@media not all and (min-width:40rem){.expanded\\:max-sm\\:rounded-none\\!:is(:host([data-expanded=true]) *){border-radius:0!important}}@media(max-width:640px){.mobile\\:inset-0:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){inset:calc(var(--spacing)*0)}.mobile\\:inset-x-2:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){inset-inline:calc(var(--spacing)*2)}.mobile\\:top-13:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){top:calc(var(--spacing)*13)}.mobile\\:-bottom-px:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){bottom:-1px}.mobile\\:bottom-13:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){bottom:calc(var(--spacing)*13)}.mobile\\:-m-2:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){margin:calc(var(--spacing)*-2)}.mobile\\:mb-1:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){margin-bottom:calc(var(--spacing)*1)}.mobile\\:size-4:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.mobile\\:size-4\\.5:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){width:calc(var(--spacing)*4.5);height:calc(var(--spacing)*4.5)}.mobile\\:size-5:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.mobile\\:size-18:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){width:calc(var(--spacing)*18);height:calc(var(--spacing)*18)}.mobile\\:h-6:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){height:calc(var(--spacing)*6)}.mobile\\:h-32:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){height:calc(var(--spacing)*32)}.mobile\\:translate-none\\!:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){translate:none!important}.mobile\\:transform-none\\!:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){transform:none!important}.mobile\\:rounded-none\\!:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){border-radius:0!important}.mobile\\:border-none\\!:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){--tw-border-style:none!important;border-style:none!important}.mobile\\:px-3:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){padding-inline:calc(var(--spacing)*3)}.mobile\\:py-2:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){padding-block:calc(var(--spacing)*2)}.mobile\\:text-center:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){text-align:center}.mobile\\:text-sm:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}.mobile\\:text-xs:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){font-size:calc(var(--font-size)*.75);line-height:var(--tw-leading,var(--text-xs--line-height))}}.\\[\\&_button\\]\\:z-1 button{z-index:1}.\\[\\&_button\\]\\:w-full button{width:100%}.\\[\\&_button\\]\\:rounded-full button{border-radius:3.40282e38px}.\\[\\&_button\\]\\:border-border button{border-color:var(--border)}.\\[\\&_button\\]\\:bg-background button{background-color:var(--background)}.\\[\\&_button\\]\\:bg-primary-foreground button{background-color:var(--primary-foreground)}.\\[\\&_button\\]\\:text-primary button{color:var(--primary)}.\\[\\&_button\\]\\:shadow-md button{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.\\[\\&_button\\]\\:not-hover\\:bg-transparent button:not(:hover){background-color:#0000}@media not all and (hover:hover){.\\[\\&_button\\]\\:not-hover\\:bg-transparent button{background-color:#0000}}@media(hover:hover){.\\[\\&_button\\]\\:hover\\:bg-muted button:hover{background-color:var(--muted)}}.\\[\\&_span\\]\\:rounded-full span{border-radius:3.40282e38px}.\\[\\&_span\\]\\:bg-primary-foreground\\/30 span{background-color:var(--primary-foreground)}@supports (color:color-mix(in lab,red,red)){.\\[\\&_span\\]\\:bg-primary-foreground\\/30 span{background-color:color-mix(in oklab,var(--primary-foreground)30%,transparent)}}.focus\\:\\[\\&_svg\\]\\:text-destructive:focus svg{color:var(--destructive)}:is(.\\*\\*\\:\\[\\[role\\=button\\]\\]\\:not-hover\\:bg-transparent *)[role=button]:not(:hover){background-color:#0000}@media not all and (hover:hover){:is(.\\*\\*\\:\\[\\[role\\=button\\]\\]\\:not-hover\\:bg-transparent *)[role=button]{background-color:#0000}}.\\[\\&\\>button\\]\\:h-10>button{height:calc(var(--spacing)*10)}.\\[\\&\\>button\\]\\:w-full>button{width:100%}.\\[\\&\\>button\\]\\:flex-col>button{flex-direction:column}.\\[\\&\\>button\\]\\:rounded-full>button{border-radius:3.40282e38px}.\\[\\&\\>button\\]\\:text-muted-foreground>button{color:var(--muted-foreground)}@media(max-width:640px){.mobile\\:\\[\\&\\>button\\]\\:text-sm:is(:host(:not([data-expanded=true]):not([data-extension=true])) *)>button{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}}.\\[\\&\\>div\\]\\:col-span-2>div{grid-column:span 2/span 2}.\\[\\&\\>div\\]\\:grid>div{display:grid}.\\[\\&\\>div\\]\\:grid-cols-subgrid>div{grid-template-columns:subgrid}.\\[\\&\\>div\\]\\:justify-items-center>div{justify-items:center}.\\[\\&\\>div\\]\\:rounded>div{border-radius:.25rem}.\\[\\&\\>i\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4>i:not([class*=size-]){width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.\\[\\&\\>i\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4\\.5>i:not([class*=size-]){width:calc(var(--spacing)*4.5);height:calc(var(--spacing)*4.5)}.\\[\\&\\>i\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-5>i:not([class*=size-]){width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.\\[\\&\\>i\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-5\\.25>i:not([class*=size-]){width:calc(var(--spacing)*5.25);height:calc(var(--spacing)*5.25)}.\\[\\&\\>i\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-6>i:not([class*=size-]){width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.\\[\\&\\>i\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-6\\.5>i:not([class*=size-]){width:calc(var(--spacing)*6.5);height:calc(var(--spacing)*6.5)}.\\[\\&\\>svg\\]\\:shrink-0>svg{flex-shrink:0}}:host,[data-theme=light]{--background:oklch(100% 0 0);--foreground:oklch(25% 0 0);--primary:oklch(46.02% .169 260.07);--primary-foreground:oklch(100% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--secondary:oklch(33.15% .1141 259.88);--secondary-foreground:oklch(84.71% .0543 259.88);--muted:oklch(95% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(90% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(63.7% .237 25.331);--destructive-foreground:oklch(98.5% 0 0);--success:oklch(54.834% .15401 147.965);--success-foreground:oklch(100% .00011 271.152);--border:oklch(91% 0 0);--input:oklch(91% 0 0);--ring:oklch(70.8% 0 0);--radius:10px;--spacing:4px;--font-sans:"VLibrasWidget_Font",sans-serif;--font-size:16px}:host(.dark),[data-theme=dark]{--background:oklch(15% 0 0);--foreground:oklch(98.5% 0 0);--primary:oklch(55.5% .169 260.07);--primary-foreground:oklch(100% 0 0);--popover:oklch(20% 0 0);--popover-foreground:oklch(98.5% 0 0);--secondary:oklch(33.15% .1141 259.88);--secondary-foreground:oklch(84.71% .0543 259.88);--muted:oklch(18% 0 0);--muted-foreground:oklch(70.8% 0 0);--accent:oklch(26.9% 0 0);--accent-foreground:oklch(98.5% 0 0);--destructive:oklch(63.7% .237 25.331);--destructive-foreground:oklch(98.5% 0 0);--border:oklch(26.9% 0 0);--input:oklch(26.9% 0 0);--ring:oklch(43.9% 0 0)}:host{--widget-width:260px;--player-height:328px}@media(min-width:640px){:host{--widget-width:320px;--player-height:400px}}@keyframes scale{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes move-left{0%{opacity:0;transform:translate(-20%)}to{opacity:1;transform:translate(0)}}@keyframes move-right{0%{opacity:0;transform:translate(20%)}to{opacity:1;transform:translate(0)}}@keyframes move-up{0%{opacity:0;transform:translateY(20%)}to{opacity:1;transform:translateY(0)}}@keyframes move-down{0%{opacity:0;transform:translateY(-20%)}to{opacity:1;transform:translateY(0)}}@keyframes highlight-shadow-primary{0%{box-shadow:0 0 #0000}to{box-shadow:0 0 10px 5px var(--primary)}}@keyframes highlight-shadow-primary-foreground{0%{box-shadow:0 0 #0000}to{box-shadow:0 0 15px var(--primary-foreground)}}:host{color:var(--foreground);font-family:var(--font-sans)!important;scrollbar-color:var(--foreground)transparent!important}@supports (color:color-mix(in lab,red,red)){:host{scrollbar-color:color-mix(in oklch,var(--foreground)50%,transparent)transparent!important}}:host [data-highlight=true]{z-index:99999!important;border-radius:3.40282e38px!important}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes dropdown{0%{opacity:0}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@keyframes rotator{89.9999%,to{--first-item-position:0 0%}90%,99.9999%{--first-item-position:0 calc(var(--items)*100%)}to{translate:0 -100%}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes menu{0%{opacity:0}}@keyframes progress{50%{background-position-x:-115%}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-content{syntax:"*";inherits:false;initial-value:""}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}`, Ve = (e, t) => (t || document).querySelector(e), ir = (e, t) => Array.from((t || document).querySelectorAll(e));
function nu(e, t) {
  if (e.querySelector("style[data-widget-styles]")) {
    t && requestAnimationFrame(() => t());
    return;
  }
  const r = ou.replace(/:root/g, ":host"), o = [], n = r.replace(/@property\s+[^{]+\{[^}]*\}/g, (s) => (o.push(s), ""));
  if (o.length > 0 && !document.head.querySelector("style[data-widget-properties]")) {
    const s = document.createElement("style");
    s.setAttribute("data-widget-properties", "true"), s.textContent = o.join(`
`), document.head.appendChild(s);
  }
  const a = document.createElement("style");
  a.setAttribute("data-widget-styles", "true"), a.textContent = n, t && requestAnimationFrame(() => t()), e.firstChild ? e.insertBefore(a, e.firstChild) : e.appendChild(a);
}
const au = () => {
  const { onClose: e } = Ha(), { status: t, gloss: r } = q(Ae("gloss", "status")), o = W(() => r && t === "idle", [r, t]);
  return /* @__PURE__ */ i("div", { className: "absolute top-1 right-1 flex flex-col rounded-lg", children: [
    /* @__PURE__ */ i(z, { tabindex: 1, onClick: e, size: "icon-xs", "aria-label": "Fechar guia", children: /* @__PURE__ */ i(P, { name: "x", "aria-hidden": "true" }) }),
    o && /* @__PURE__ */ i(z, { tabindex: 1, "aria-label": "Repetir texto", onClick: mo, size: "icon-xs", className: "animate-move-right", children: /* @__PURE__ */ i(P, { name: "repeat", "aria-hidden": "true" }) })
  ] });
}, Hr = [
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
    guideClx: "top-auto! bottom-6.5!",
    guideClxExpanded: "mr-12!"
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
], iu = () => {
  const e = X(null), t = X(null), { index: r, setIndex: o, onClose: n } = Ha(), a = W(() => r === 0, [r]), s = W(() => r === Hr.length - 1, [r]);
  return C(() => e.current?.focus(), [a]), C(() => t.current?.focus(), [s]), /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2", children: [
    /* @__PURE__ */ i(
      z,
      {
        tabindex: 2,
        ref: t,
        disabled: a,
        variant: "ghost",
        size: "sm",
        className: "text-primary-foreground outline-primary-foreground hover:bg-primary-foreground/5",
        onClick: () => o(r - 1),
        children: [
          /* @__PURE__ */ i(P, { name: "arrow-left", "aria-hidden": "true" }),
          "Voltar"
        ]
      }
    ),
    /* @__PURE__ */ i("div", { className: "flex h-4 w-40 items-center justify-center gap-1 [&_span]:rounded-full [&_span]:bg-primary-foreground/30", children: Hr.map((l, c) => /* @__PURE__ */ i(
      "span",
      {
        "data-active": c === r,
        className: "size-2 rounded-full data-[active=true]:bg-primary-foreground!"
      },
      c
    )) }),
    /* @__PURE__ */ i(
      z,
      {
        tabindex: 2,
        ref: e,
        variant: "ghost",
        size: "sm",
        className: "text-primary-foreground outline-primary-foreground hover:bg-primary-foreground/5",
        onClick: s ? n : () => o((l) => l + 1),
        children: [
          s ? "Concluir" : "Avançar",
          !s && /* @__PURE__ */ i(P, { name: "arrow-right", "aria-hidden": "true" })
        ]
      }
    )
  ] });
}, ye = pe((e) => ({
  open: !1,
  onOpenChange: (t) => e((r) => ({ open: Qr(t, r.open) })),
  reset: () => e({ open: !1, element: void 0 })
})), Cn = {
  get: ye.getState,
  set: ye.setState
}, su = At("absolute flex flex-col gap-4 z-50 rounded-xl bg-primary p-4 transition-position", {
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
}), { Provider: lu, useCtx: Ha } = lo(), cu = () => {
  const { pos: e } = tr(), { innerWidth: t, innerHeight: r } = window, [o, n] = Q(0), a = ye(), s = G((g) => g.isExpanded), l = G((g) => g.isTranslating), c = qe((g) => g.appRoot), u = $(), p = W(() => e.x < (t - (c?.clientWidth || 0)) / 2, [e.x, t]), h = W(() => e.y < (r - (c?.clientHeight || 0)) / 2, [e.y, r]), d = W(() => Hr[o], [o]), b = () => {
    le.set({ text: void 0 }), I.set({ gloss: void 0 }), Cn.get().reset(), m(), or();
  };
  if (C(() => {
    l && b();
  }, [l]), C(() => {
    if (!c) return;
    m(), ce(d.gloss), d.action?.();
    const g = Ve(d.selector, c);
    g && (Cn.set({ element: d }), g.dataset.highlight = "true");
  }, [d]), !c) return null;
  const m = () => {
    if (!c) return;
    ir("[data-highlight=true]", c)?.forEach((f) => f.dataset.highlight = "false");
  };
  return /* @__PURE__ */ i(lu, { data: { index: o, setIndex: n, onClose: b, ...a }, children: /* @__PURE__ */ i(
    "div",
    {
      className: E(
        su({ isMobile: u, isLeft: p, isTop: h, isExpanded: s }),
        !s && !u && d.guideClx,
        s && d.guideClxExpanded
      ),
      children: [
        /* @__PURE__ */ i("div", { className: "pr-4", children: /* @__PURE__ */ i("span", { className: "break-anywhere expanded:text-base! mobile:text-sm text-base text-primary-foreground", children: d.text }) }),
        /* @__PURE__ */ i(au, {}),
        /* @__PURE__ */ i(iu, {}),
        !s && /* @__PURE__ */ i(
          "span",
          {
            className: E(
              "absolute -z-10 my-4 size-4 rotate-45 rounded-xs bg-primary max-lg:hidden",
              d.guideClx,
              p ? "-left-1" : "-right-1"
            )
          }
        )
      ]
    }
  ) });
}, du = () => {
  const e = ye((t) => t.open);
  return /* @__PURE__ */ i(F, { children: e && /* @__PURE__ */ i(cu, {}) });
}, uu = At("fixed", {
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
        "w-dvw max-w-dvw sm:h-auto sm:w-xl sm:[--player-height:800px] max-sm:inset-x-0!",
        "mobile:translate-none! mobile:transform-none! [--player-height:calc(100dvh-52px)] mobile:inset-0 mobile:rounded-none! mobile:border-none!"
      ]
    }
  ],
  defaultVariants: {
    isDragging: !1,
    isOpen: !0,
    hasMoved: !1,
    isExpanded: !1
  }
}), pu = (e) => {
  const [t, r, o, n, a] = e.map((s) => s === "True");
  return { isPlaying: t, isPaused: r, isPlayingIntervalAnimation: o, isLoading: n, isRepeatable: a };
}, hu = ({ path: e }) => (C(() => {
  if (!e) return;
  const t = (r) => {
    if (r.data?.type === "unity_event") {
      if (r.data.event === dt.FINISH_WELCOME) {
        const o = r.data.data === "True";
        if (I.get().isWelcomeFinished) return;
        I.set({
          isPlayingWelcome: !o,
          isWelcomeFinished: o,
          ...o ? { countGloss: { count: 0, max: 0 } } : {}
        }), o && Ue.get().onWelcomeFinish?.();
      }
      if (r.data.event === dt.ON_LOAD_PLAYER && (I.set({ isLoaded: !0 }), Ue.get().onLoaded?.()), r.data.event === dt.UPDATE_PROGRESS) {
        const o = Number(r.data.data);
        Number.isNaN(o) || I.set({ progress: Number((o * 100).toFixed(0)) });
      }
      if (r.data.event === dt.ON_PLAYING_STATE_CHANGE) {
        const { isPlaying: o, isPaused: n, isLoading: a } = pu(r.data.data);
        n ? I.set({ status: "paused" }) : o && !n ? I.set({ status: "playing" }) : !o && !a && I.set({ status: "idle" });
      }
      if (r.data.event === dt.COUNTER_GLOSS) {
        const [o, n] = r.data.data;
        I.set({ countGloss: { count: o, max: n } });
      }
    }
  };
  return window.addEventListener("message", t), () => window.removeEventListener("message", t);
}, [e]), null), mu = (e) => {
  const { path: t } = ea(), { isLoaded: r } = q(), o = X(null), n = Vi(`${t}/unity/index.html`), a = (s, l, c) => {
    o.current?.contentWindow?.postMessage({ type: "unity", object: s, method: l, params: c }, "*");
  };
  if (C(() => {
    o.current && I.set({ send: a });
  }, []), C(() => {
    !e.options || Ue.get().isInitialized || Ue.set({ ...e.options, isInitialized: !0 });
  }, [e.options]), !!t)
    return /* @__PURE__ */ i(F, { children: [
      /* @__PURE__ */ i(
        "iframe",
        {
          tabindex: -1,
          ref: o,
          title: "vlibras-player",
          sandbox: "allow-scripts allow-same-origin allow-pointer-lock",
          src: n,
          style: { border: "none", overflow: "hidden", opacity: r ? 1 : 0 },
          ...e
        }
      ),
      /* @__PURE__ */ i(hu, { path: t })
    ] });
}, Ja = ({ variant: e, asChild: t, size: r, className: o, disabled: n, ...a }) => t ? /* @__PURE__ */ i("div", { inert: n, role: "button", tabIndex: 0, className: o, ...a, children: a.children }) : /* @__PURE__ */ i(
  "div",
  {
    "aria-disabled": n,
    inert: n,
    role: "button",
    tabIndex: 0,
    className: E(so({ variant: e, size: r }), o, n && "opacity-50"),
    ...a
  }
), En = At("border bg-popover", {
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
}), Qe = ({
  children: e,
  disabled: t,
  content: r,
  arrow: o,
  offset: n = -4,
  align: a = "center",
  placement: s = "top",
  variant: l = "default",
  className: c,
  open: u,
  onOpenChange: p,
  ...h
}) => {
  const [d, b] = Q(!1), m = "vlibras-tooltip", g = u ?? d;
  if (!r) return e;
  const f = () => {
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
  }, A = (w) => {
    u === void 0 && b(w), p?.(w);
  };
  return /* @__PURE__ */ i(
    "div",
    {
      role: "tooltip",
      className: "relative inline-block has-[>[role=button][aria-disabled=true]]:pointer-events-none has-[>button:disabled]:pointer-events-none",
      onMouseEnter: () => A(!0),
      onMouseLeave: () => A(!1),
      onFocus: () => A(!0),
      onBlur: () => A(!1),
      children: [
        e,
        g && !t && /* @__PURE__ */ i(
          "div",
          {
            "data-slot": "tooltip-content",
            id: m,
            style: f(),
            className: E(
              En({ variant: l }),
              "absolute z-99999 rounded-lg px-3 py-1.5 expanded:text-sm text-popover-foreground text-xs shadow-lg transition-opacity duration-200",
              s === "bottom" && "-bottom-4 left-1/2 -translate-x-1/2 translate-y-full animate-move-down",
              s === "top" && "-top-4 left-1/2 -translate-x-1/2 -translate-y-full animate-move-up",
              s === "right" && "top-1/2 translate-x-1/2 -translate-y-1/2",
              s === "left" && "top-1/2 -translate-y-1/2",
              a === "start" && "right-auto! left-0! translate-x-0",
              a === "end" && "right-0! left-auto! translate-x-0",
              c
            ),
            ...h,
            children: /* @__PURE__ */ i("div", { className: "relative font-semibold", children: [
              r,
              o && /* @__PURE__ */ i(
                "div",
                {
                  "data-slot": "arrow-container",
                  className: E(
                    "absolute left-1/2 -ml-2 flex max-h-2 items-center justify-center overflow-hidden",
                    o.position.includes("top") && "-top-3.5",
                    o.position.includes("bottom") && "-bottom-3.5",
                    o.position.includes("left") && "left-2",
                    o.position.includes("right") && "-right-1 left-auto",
                    o.position === "right" && "top-1/2 -right-6 left-auto -translate-y-1/2 -rotate-90",
                    o.position === "left" && "top-1/2 right-auto -left-4 -translate-y-1/2 rotate-90",
                    o.containerClassName
                  ),
                  children: /* @__PURE__ */ i(
                    "span",
                    {
                      "data-slot": "arrow",
                      className: E(
                        "-z-50 h-4 w-4 rotate-45",
                        En({ variant: l }),
                        o.position.includes("top") ? "mt-3.5" : "mb-3.5",
                        o.className
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
}, gu = () => {
  const e = $(), t = q((n) => n.emotion), r = (n) => {
    Va(n), Re.trackEvent("change_emotion", { emotion: n.name });
  }, o = t === Br.default;
  return /* @__PURE__ */ i("div", { className: "dropdown dropdown-center dropdown-top focus-within:**:data-[slot=tooltip-content]:hidden", children: [
    /* @__PURE__ */ i(Qe, { offset: 8, content: "Emoções", placement: "top", arrow: { position: "bottom" }, children: /* @__PURE__ */ i(
      Ja,
      {
        "aria-label": "Alterar emoção",
        className: "group relative",
        variant: "ghost-gov",
        size: e ? "icon-sm" : "icon",
        children: [
          /* @__PURE__ */ i(P, { name: t.icon, "aria-hidden": "true" }),
          !o && /* @__PURE__ */ i("span", { className: "absolute top-0.5 right-0.5 size-2 rounded-full bg-destructive" })
        ]
      }
    ) }),
    /* @__PURE__ */ i(
      "div",
      {
        tabIndex: -1,
        className: "dropdown-content mb-4 w-[calc(var(--widget-width)-1rem)] rounded-xl border bg-background p-1 shadow-lg",
        children: /* @__PURE__ */ i("div", { className: "relative flex items-center justify-center", children: [
          /* @__PURE__ */ i("span", { className: "absolute -inset-y-1 w-px bg-border" }),
          /* @__PURE__ */ i("ul", { className: E("relative grid w-full grid-cols-2 gap-x-2 gap-y-1 font-semibold text-primary text-sm"), children: Object.values(Br).map((n) => {
            const a = n === t;
            return /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                inert: a,
                onClick: () => r(n),
                className: E(
                  "w-full cursor-pointer whitespace-nowrap rounded-md px-2 py-1.5 text-center text-sm hover:bg-primary/10",
                  a && "bg-primary! text-primary-foreground! outline-1 outline-primary outline-solid"
                ),
                children: /* @__PURE__ */ i("div", { className: "flex items-center justify-start gap-2", children: [
                  /* @__PURE__ */ i(P, { name: n.icon, className: "size-4.5" }),
                  /* @__PURE__ */ i("span", { className: "mobile:text-xs text-sm", children: n.name })
                ] })
              }
            ) }, n.action);
          }) })
        ] })
      }
    )
  ] });
}, fu = {
  idle: { label: "Repetir", icon: "repeat" },
  paused: { label: "Reproduzir", icon: "play" },
  playing: { label: "Pausar", icon: "pause" },
  stopped: { label: "Em espera", icon: "waiting" }
}, bu = () => {
  const e = $(), { gloss: t, status: r } = q(Ae("gloss", "status")), o = () => {
    const { status: a } = I.get();
    a === "idle" ? mo() : a === "paused" ? ce() : a === "playing" && (nr(), le.set({ isPausedByUser: !0 }));
  }, n = fu[r];
  return /* @__PURE__ */ i(
    Qe,
    {
      offset: 8,
      content: n.label,
      disabled: !t,
      placement: "top",
      align: "start",
      arrow: { position: "bottom-left" },
      children: /* @__PURE__ */ i(
        z,
        {
          "aria-label": n.label,
          "data-slot": "main-action",
          disabled: !t,
          onClick: o,
          variant: "ghost-gov",
          size: e ? "icon-sm" : "icon",
          children: /* @__PURE__ */ i(P, { name: n.icon })
        }
      )
    }
  );
}, vu = () => {
  const { max: e, count: t } = q((o) => o.countGloss), r = W(() => e === 0 ? 0 : t / Math.max(e, t) * 100, [e, t]);
  return /* @__PURE__ */ i("div", { className: "absolute -top-1.75 left-0 h-1.5 w-full", children: /* @__PURE__ */ i(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": r,
      className: E("h-full bg-primary transition-[width]", r < 100 && "rounded-r-full"),
      style: { width: `${r}%` }
    }
  ) });
}, wt = We(null), Au = ({ children: e }) => {
  const t = ta(), r = ve(wt), o = q((s) => s.status === "playing"), [n, a] = Q(!0);
  return C(() => {
    o && !n && r?.onOpenChange(!1);
  }, [o]), C(() => {
    const { appRoot: s, appContent: l } = je.get();
    if (!r || !l || !s) return;
    if (r.open) {
      a(!1), !r.nested && r.overlay && (l.inert = !0);
      const u = ir(`[data-slot='dialog-wrapper']:not([id='dialog-${t}'])`, s);
      return u?.forEach((p) => p.inert = !0), () => {
        !r.nested && r.overlay && (l.inert = !1), u?.forEach((p) => p.inert = !1);
      };
    }
    const c = setTimeout(() => a(!0), 150);
    return () => clearTimeout(c);
  }, [r?.open, r?.overlay, r?.nested]), !r || n ? null : r.overlay ? /* @__PURE__ */ i(
    "div",
    {
      id: `dialog-${t}`,
      "data-slot": "dialog-wrapper",
      "data-state": r.open ? "open" : "close",
      className: E("group absolute inset-0 z-99999 flex items-end bg-black/20", r.nested && "bg-transparent!"),
      onClick: () => r.onOpenChange(!1),
      children: e
    }
  ) : /* @__PURE__ */ i("div", { className: "absolute inset-0 top-auto", children: e });
}, yt = ({
  nested: e = !1,
  overlay: t = !0,
  open: r,
  onOpenChange: o,
  children: n
}) => {
  const [a, s] = Q(!1), l = r ?? a, c = o ?? s;
  return C(() => {
    if (e) return;
    const { isPausedByUser: u } = le.get(), { gloss: p, isWelcomeFinished: h, status: d } = I.get();
    if (l && d === "playing") return nr();
    !l && !u && (p || !h) && setTimeout(ce, 300);
  }, [l, e]), /* @__PURE__ */ i(wt.Provider, { value: { open: l, onOpenChange: c, nested: e, overlay: t }, children: n });
}, wu = ({ children: e, ...t }) => {
  const r = ve(wt);
  if (!r) throw new Error("DialogTrigger deve estar dentro de <Dialog />");
  return /* @__PURE__ */ i("button", { type: "button", onClick: () => r.onOpenChange(!0), ...t, children: e });
}, xt = ({ className: e, children: t, ...r }) => {
  const o = ve(wt), n = $();
  return /* @__PURE__ */ i(
    "div",
    {
      "data-slot": "dialog-header",
      className: E("flex items-start gap-2 border-b p-2.5 mobile:py-2 pl-4", e),
      ...r,
      children: [
        t,
        /* @__PURE__ */ i(
          z,
          {
            "data-slot": "dialog-close",
            onClick: () => o?.onOpenChange(!1),
            size: n ? "icon-xs" : "icon-sm",
            variant: "ghost",
            children: /* @__PURE__ */ i(P, { name: "x" })
          }
        )
      ]
    }
  );
}, kt = ({ children: e, icon: t, className: r, ...o }) => /* @__PURE__ */ i(
  "h3",
  {
    "data-slot": "dialog-title",
    className: E(
      "break-anywhere relative mt-0.75 mr-auto flex items-start gap-1.5 font-semibold mobile:text-sm text-base leading-normal",
      r
    ),
    ...o,
    children: [
      t && /* @__PURE__ */ i(
        P,
        {
          name: t,
          "aria-hidden": "true",
          className: "relative -bottom-1 mobile:-bottom-px mobile:size-4.5 size-5 shrink-0"
        }
      ),
      e
    ]
  }
), _t = ({
  children: e,
  className: t,
  showCloseButton: r = !0,
  ...o
}) => {
  const n = ve(wt), a = qe((s) => s.appRoot);
  return !n || !a ? null : to(
    /* @__PURE__ */ i(Au, { children: /* @__PURE__ */ i(
      "div",
      {
        "data-slot": "dialog-content",
        className: E(
          "dialog-content relative flex max-h-full w-full animate-move-up flex-col rounded-lg border bg-background",
          "transition-[margin] duration-500 ease-in-out group-data-[state=close]:-mb-100",
          !r && "**:data-[slot=dialog-close]:hidden",
          t
        ),
        style: { boxShadow: "0 -5px 10px -5px rgba(0, 0, 0, 0.15)" },
        onClick: (s) => s.stopPropagation(),
        ...o,
        children: typeof e == "function" ? e(n) : e
      }
    ) }),
    a
  );
}, { Provider: yu, useCtx: xo } = lo(), sr = ({ className: e, gloss: t, onFinish: r, onClick: o, ...n }) => /* @__PURE__ */ i(
  "button",
  {
    onClick: (s) => {
      r && bo({ action: r, auto: !0 }), rr(t), o?.(s);
    },
    type: "button",
    "aria-label": "Traduzir texto",
    className: E("relative -bottom-1 inline cursor-pointer rounded-sm p-0.5 hover:text-primary", e),
    ...n,
    children: /* @__PURE__ */ i(P, { name: "hands", "aria-hidden": "true", className: "size-4" })
  }
), xu = () => {
  const e = X(null), t = G((n) => n.opacity), { onOpen: r } = xo(), o = (n) => {
    le.set({ opacity: n / 100 }), e.current && clearTimeout(e.current), e.current = setTimeout(() => Re.trackEvent("opacity_change", { opacity: n }), 2e3);
  };
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ i("div", { className: "flex w-full items-center justify-between mobile:text-sm text-base", children: [
      /* @__PURE__ */ i("p", { className: "mobile:text-sm text-base", children: [
        "Opacidade",
        /* @__PURE__ */ i(sr, { gloss: "OPACIDADE", onFinish: r })
      ] }),
      /* @__PURE__ */ i("span", { className: "font-semibold", children: [
        Math.round(Number(t) * 100),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ i(
      "input",
      {
        type: "range",
        min: 0,
        max: 100,
        step: 5,
        value: Number(t) * 100,
        onChange: (n) => o(Number(n.currentTarget.value)),
        className: "range range-xs w-full text-primary [--range-bg:var(--muted)] [--range-thumb:var(--primary-foreground)]",
        onPointerDown: (n) => n.stopPropagation()
      }
    )
  ] });
}, ku = ({ isSelected: e, region: t, onSelect: r }) => /* @__PURE__ */ i(
  "button",
  {
    inert: e,
    type: "button",
    onClick: r,
    className: E(
      "flex w-full cursor-pointer items-center justify-between whitespace-nowrap rounded-lg p-1.5 pr-3 transition-[colors] hover:bg-muted",
      e && "order-first"
    ),
    children: [
      /* @__PURE__ */ i("div", { className: "flex items-center justify-start gap-2 font-semibold mobile:text-xs text-secondary text-sm dark:text-white", children: [
        /* @__PURE__ */ i("img", { src: t.flag, alt: t.name, className: "h-7 mobile:h-6 w-auto rounded-sm border" }),
        /* @__PURE__ */ i("span", { children: t.name })
      ] }),
      /* @__PURE__ */ i(
        "input",
        {
          inert: !0,
          type: "radio",
          name: `region-${t.abbreviation}`,
          className: "radio mobile:size-4 size-5 border border-primary bg-transparent! p-0.75! text-primary",
          checked: e
        }
      )
    ]
  },
  t.abbreviation
), _u = () => {
  const e = q((o) => o.region), { onOpen: t } = xo(), r = (o) => {
    I.set({ region: o }), Re.trackEvent("region_change", { region: o });
  };
  return /* @__PURE__ */ i("div", { className: "flex w-full items-center justify-between", children: [
    /* @__PURE__ */ i("p", { className: "mobile:text-sm text-base", children: [
      "Regionalismo",
      /* @__PURE__ */ i(sr, { gloss: "REGIÃO", onFinish: t })
    ] }),
    /* @__PURE__ */ i(yt, { nested: !0, children: [
      /* @__PURE__ */ i(wu, { className: E(so({ variant: "ghost" }), "h-auto border p-1"), children: [
        /* @__PURE__ */ i("span", { className: "ml-1 font-semibold mobile:text-xs text-sm", children: e.abbreviation }),
        /* @__PURE__ */ i("img", { className: "h-6 mobile:h-6 rounded-sm border", src: e.flag, alt: e.name })
      ] }),
      /* @__PURE__ */ i(_t, { className: "max-h-[70%]", children: ({ onOpenChange: o }) => /* @__PURE__ */ i(F, { children: [
        /* @__PURE__ */ i(xt, { children: /* @__PURE__ */ i(kt, { children: "Regionalismo" }) }),
        /* @__PURE__ */ i("div", { className: "flex flex-col overflow-y-auto p-1", children: io.map((n) => /* @__PURE__ */ i(
          ku,
          {
            onSelect: () => {
              r(n), o(!1);
            },
            isSelected: n === e,
            region: n
          }
        )) })
      ] }) })
    ] })
  ] });
}, Su = () => {
  const { theme: e, toggleTheme: t } = no(), { onOpen: r } = xo();
  return /* @__PURE__ */ i("div", { className: "flex w-full items-start justify-between", children: [
    /* @__PURE__ */ i("p", { className: "mobile:text-sm text-base", children: [
      "Tema escuro",
      /* @__PURE__ */ i(sr, { gloss: "TEMA ESCURO", onFinish: r })
    ] }),
    /* @__PURE__ */ i(
      "input",
      {
        type: "checkbox",
        onChange: t,
        checked: e === "dark",
        className: "toggle toggle-sm rounded-full bg-accent text-primary before:size-4 before:rounded-full not-checked:before:bg-background checked:bg-primary checked:text-primary-foreground"
      }
    )
  ] });
}, Cu = ({ open: e, onOpenChange: t }) => {
  const r = $(), o = q((u) => u.region), n = G((u) => u.opacity), { theme: a, setTheme: s } = no(), l = () => {
    const u = io[0];
    s("light"), I.set({ region: u }), le.set({ opacity: 1 });
  }, c = W(() => o.abbreviation === "BR" && n === 1 && a === "light", [o, n, a]);
  return /* @__PURE__ */ i(
    yu,
    {
      data: {
        onOpen: () => t(!0),
        onClose: () => t(!1)
      },
      children: /* @__PURE__ */ i(yt, { open: e, onOpenChange: t, children: /* @__PURE__ */ i(_t, { children: [
        /* @__PURE__ */ i(xt, { className: "relative", children: [
          /* @__PURE__ */ i(kt, { icon: "settings", children: "Configurações" }),
          !c && /* @__PURE__ */ i(F, { children: [
            /* @__PURE__ */ i(
              Qe,
              {
                className: "-mr-1",
                align: "end",
                placement: "bottom",
                content: "Redefinir",
                arrow: { position: "top-right" },
                children: /* @__PURE__ */ i(
                  z,
                  {
                    onClick: l,
                    variant: "ghost",
                    size: r ? "icon-xs" : "icon-sm",
                    className: "animate-move-up mobile:text-xs text-sm",
                    children: /* @__PURE__ */ i(P, { name: "rotate-left" })
                  }
                )
              }
            ),
            /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i("span", { className: "absolute inset-y-0 w-px bg-border" }) })
          ] })
        ] }),
        /* @__PURE__ */ i("div", { className: "space-y-4 p-4", children: [
          /* @__PURE__ */ i(Su, {}),
          /* @__PURE__ */ i(_u, {}),
          /* @__PURE__ */ i(xu, {})
        ] })
      ] }) })
    }
  );
}, Eu = () => {
  const e = $(), [t, r] = Q(!1);
  return /* @__PURE__ */ i(F, { children: [
    /* @__PURE__ */ i(
      Qe,
      {
        className: "whitespace-nowrap",
        offset: 8,
        align: "end",
        content: "Configurações",
        placement: "top",
        arrow: { position: "bottom-right" },
        children: /* @__PURE__ */ i(z, { onClick: () => r(!0), variant: "ghost-gov", size: e ? "icon-sm" : "icon", children: /* @__PURE__ */ i(P, { name: "settings" }) })
      }
    ),
    /* @__PURE__ */ i(Cu, { open: t, onOpenChange: r })
  ] });
}, Ru = [2.5, 2, 1.5, 1, 0.5], Pu = () => {
  const e = $(), t = q((n) => n.speed), r = (n, a) => {
    (n.key === "Enter" || n.key === " ") && (n.preventDefault(), o(a));
  }, o = (n) => {
    go(n), Re.trackEvent("change_speed", { speed: n });
  };
  return /* @__PURE__ */ i("div", { className: "dropdown dropdown-center dropdown-top focus-within:**:data-[slot=tooltip-content]:hidden", children: [
    /* @__PURE__ */ i(Qe, { offset: 8, content: "Velocidade", placement: "top", arrow: { position: "bottom" }, children: /* @__PURE__ */ i(Ja, { "aria-label": "Alterar velocidade", variant: "ghost-gov", size: e ? "icon-sm" : "icon", children: /* @__PURE__ */ i("span", { inert: !0, className: "-mt-0.5 font-bold mobile:text-xs text-sm", children: [
      t,
      "x"
    ] }) }) }),
    /* @__PURE__ */ i("div", { tabIndex: -1, className: "dropdown-content mb-4 rounded-xl border bg-background drop-shadow-lg", children: /* @__PURE__ */ i(
      "ul",
      {
        className: E(
          "space-y-1 p-1 font-semibold text-primary text-sm",
          "focus-within:pointer-events-auto focus-within:visible"
        ),
        children: Ru.map((n) => {
          const a = n === t;
          return /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              inert: a,
              onClick: () => o(n),
              onKeyDown: (s) => r(s, n),
              className: E(
                "w-full cursor-pointer whitespace-nowrap rounded-md px-2 py-1 text-center mobile:text-xs text-sm hover:bg-primary/10",
                a && "bg-primary! text-primary-foreground! outline-1 outline-primary outline-solid"
              ),
              children: [
                n,
                "x"
              ]
            }
          ) }, n);
        })
      }
    ) })
  ] });
}, Iu = () => {
  const e = $(), { showSubtitles: t, isPlayingWelcome: r } = q(Ae("showSubtitles", "isPlayingWelcome"));
  return /* @__PURE__ */ i(
    Qe,
    {
      className: "whitespace-nowrap",
      offset: 8,
      align: "end",
      content: t ? "Desativar legendas" : "Ativar legendas",
      placement: "top",
      arrow: { position: "bottom-right" },
      children: /* @__PURE__ */ i(
        z,
        {
          disabled: r,
          onClick: () => {
            fo(), Re.trackEvent("subtitles_toggled", { status: t ? "disabled" : "enabled" });
          },
          variant: "ghost-gov",
          size: e ? "icon-sm" : "icon",
          children: /* @__PURE__ */ i(P, { name: t ? "subtitle" : "subtitle-off" })
        }
      )
    }
  );
}, Nu = () => {
  const e = G((o) => o.isOpen), t = ye((o) => o.open), { onPointerDown: r } = tr();
  return /* @__PURE__ */ i(
    "div",
    {
      className: E(
        !e && "-bottom-20!",
        "relative z-50 animate-move-up border-t bg-background px-2 py-1.5 transition-[bottom] ease-in-out",
        "[&_button]:z-1 [&_button]:not-hover:bg-transparent **:[[role=button]]:not-hover:bg-transparent",
        "-mt-13 **:data-[highlight=true]:animate-highlight-primary"
      ),
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            onPointerDown: r,
            className: E(
              "absolute inset-0 z-0 touch-none",
              "not-expanded:hover:cursor-move sm:hover:cursor-move"
            )
          }
        ),
        /* @__PURE__ */ i(vu, {}),
        /* @__PURE__ */ i(
          "div",
          {
            inert: t,
            className: E(
              "grid w-full grid-cols-5 items-center gap-1",
              "[&>div]:col-span-2 [&>div]:grid [&>div]:grid-cols-subgrid [&>div]:justify-items-center [&>div]:rounded"
            ),
            children: [
              /* @__PURE__ */ i("div", { id: "main-action-speed-options", children: [
                /* @__PURE__ */ i(bu, {}),
                /* @__PURE__ */ i(Pu, {})
              ] }),
              /* @__PURE__ */ i("div", { id: "emotions-subtitles-options", children: [
                /* @__PURE__ */ i(gu, {}),
                /* @__PURE__ */ i(Iu, {})
              ] }),
              /* @__PURE__ */ i("div", { id: "settings-option", className: "col-span-1!", children: /* @__PURE__ */ i(Eu, {}) })
            ]
          }
        )
      ]
    }
  );
}, Tu = ({ className: e, ...t }) => /* @__PURE__ */ i("div", { className: E("h-4", e), ...t }), Ou = "@media screen and (max-width:640px){body[data-vlibras-expanded=true]{overflow:hidden!important}}", Uu = () => {
  const e = $(), { isOpen: t, isExpanded: r } = G(Ae("isOpen", "isExpanded"));
  C(() => {
    const { root: s } = je.get();
    !s || t || (delete s.dataset.expanded, delete document.body.dataset.vlibrasExpanded);
  }, [t]);
  const o = () => {
    ra(Ou, "@expanded-mode.style");
    const { root: s } = je.get(), { isExpanded: l } = le.get(), c = !l;
    if (s) {
      if (le.set({ isExpanded: c }), !c) {
        delete s.dataset.expanded, delete document.body.dataset.vlibrasExpanded;
        return;
      }
      s.dataset.expanded = "true", document.body.dataset.vlibrasExpanded = "true", Re.trackEvent("expanded");
    }
  }, n = r ? "Diminuir" : "Expandir";
  return /* @__PURE__ */ i(
    Qe,
    {
      className: "whitespace-nowrap",
      offset: 2,
      content: n,
      placement: "bottom",
      align: "end",
      arrow: { position: "top-right" },
      children: /* @__PURE__ */ i(
        z,
        {
          onClick: o,
          className: "z-1",
          "aria-label": n,
          size: e ? "icon-sm" : "icon",
          variant: "default",
          children: /* @__PURE__ */ i(P, { name: r ? "collapse" : "expand", "aria-hidden": "true" })
        }
      )
    }
  );
}, Bu = ({ open: e, onOpenChange: t }) => {
  const r = X(null), o = G((d) => d.isTranslating), [n, a] = Q(""), { mutateAsync: s, isPending: l } = at(), c = oo(a, 300), u = async () => {
    const d = r.current?.value || "";
    if (d)
      try {
        const b = await s(d);
        if (!b.length) throw new Error("Empty gloss");
        ce(b), t(!1), bo({
          action: () => t(!0),
          content: /* @__PURE__ */ i(F, { children: [
            /* @__PURE__ */ i(P, { name: "translator" }),
            "Reabrir Tradutor"
          ] })
        });
      } catch {
      }
  }, p = () => {
    r.current && (r.current.value = "", r.current?.focus(), a(""));
  }, h = (d) => {
    d.key === "Enter" && (d.preventDefault(), n.length >= 3 && u());
  };
  return /* @__PURE__ */ i(yt, { open: e, onOpenChange: t, children: /* @__PURE__ */ i(_t, { children: [
    /* @__PURE__ */ i(xt, { children: /* @__PURE__ */ i(kt, { icon: "translator", children: "Tradutor" }) }),
    /* @__PURE__ */ i("div", { className: "space-y-2 overflow-y-auto p-4 pt-2", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ i("div", { className: "flex h-8 items-center justify-between", children: [
          /* @__PURE__ */ i("label", { htmlFor: "translator-text", className: "text-sm", children: [
            "Insira seu texto",
            /* @__PURE__ */ i(sr, { gloss: "INSERIR TEXTO", onFinish: () => t(!0) })
          ] }),
          n.length > 0 && /* @__PURE__ */ i(
            z,
            {
              "aria-label": "Limpar texto",
              onClick: p,
              size: "icon-xs",
              variant: "ghost",
              className: "animate-move-up text-destructive",
              children: /* @__PURE__ */ i(P, { name: "trash" })
            }
          )
        ] }),
        /* @__PURE__ */ i(
          "textarea",
          {
            defaultValue: n,
            ref: r,
            onKeyPress: h,
            onChange: (d) => c(d.currentTarget.value),
            name: "text",
            id: "translator-text",
            className: "h-32 w-full resize-none rounded-xl border bg-muted p-2"
          }
        )
      ] }),
      /* @__PURE__ */ i(
        z,
        {
          onClick: u,
          disabled: n.length < 3 || o || l,
          className: "h-10 w-full rounded-full text-sm",
          children: [
            l && /* @__PURE__ */ i(wo, { className: "size-4 text-primary-foreground" }),
            l ? "Traduzindo..." : "Traduzir"
          ]
        }
      )
    ] })
  ] }) });
}, Ut = ({ label: e, onClick: t, icon: r }) => {
  const o = $();
  return /* @__PURE__ */ i(
    "li",
    {
      className: E(
        "flex w-auto animate-move-left items-center gap-2",
        "[&_button]:rounded-full [&_button]:border-border [&_button]:bg-background [&_button]:shadow-md [&_button]:hover:bg-muted"
      ),
      children: [
        /* @__PURE__ */ i(
          z,
          {
            onClick: t,
            role: "button",
            "aria-label": e,
            size: o ? "icon-sm" : "icon",
            variant: "outline-gov",
            children: r && /* @__PURE__ */ i(P, { name: r, className: "mobile:size-5 size-5.5" })
          }
        ),
        /* @__PURE__ */ i(z, { tabindex: -1, onClick: t, variant: "outline", className: "w-30", size: "xs", children: e })
      ]
    }
  );
}, Qu = () => {
  const e = $(), t = fe((a) => a.open), r = ye((a) => a.onOpenChange), [o, n] = Q(!1);
  return /* @__PURE__ */ i(F, { children: [
    /* @__PURE__ */ i("div", { className: "dropdown dropdown-bottom z-1", children: [
      /* @__PURE__ */ i(
        z,
        {
          id: "header-menu-button",
          role: "button",
          tabindex: 0,
          "aria-label": "Menu de opções",
          size: e ? "icon-sm" : "icon",
          variant: "default",
          children: /* @__PURE__ */ i(P, { name: "menu" })
        }
      ),
      /* @__PURE__ */ i("ul", { className: "dropdown-content mt-4 space-y-2", children: [
        /* @__PURE__ */ i(Ut, { onClick: () => t("dictionary"), label: "Dicionário", icon: "dictionary" }),
        /* @__PURE__ */ i(Ut, { onClick: () => n(!0), label: "Tradutor", icon: "translator" }),
        /* @__PURE__ */ i(Ut, { onClick: () => r(!0), label: "Guia Rápido", icon: "help" }),
        /* @__PURE__ */ i(Ut, { onClick: () => t("about"), label: "Sobre o VLibras", icon: "info" })
      ] })
    ] }),
    /* @__PURE__ */ i(Bu, { open: o, onOpenChange: n })
  ] });
}, zu = () => {
  const { onPointerDown: e } = tr(), t = $(), r = G((a) => a.setOpen), o = ye((a) => a.open), n = () => {
    r(!1), nr();
  };
  return /* @__PURE__ */ i("div", { className: E("relative bottom-auto z-50 bg-primary px-2 py-1.5", "sm:rounded-t-xl"), children: [
    /* @__PURE__ */ i(
      "div",
      {
        onPointerDown: e,
        className: E(
          "absolute inset-0 z-0 touch-none",
          "not-expanded:hover:cursor-move sm:hover:cursor-move"
        )
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        inert: o,
        className: "flex w-full items-center justify-between gap-1 **:data-[highlight=true]:animate-highlight-primary-foreground",
        children: [
          /* @__PURE__ */ i(Qu, {}),
          /* @__PURE__ */ i("div", { className: "mr-2 ml-1", children: /* @__PURE__ */ i("span", { className: "absolute inset-y-0 w-px bg-primary-foreground/30" }) }),
          /* @__PURE__ */ i("div", { className: "mr-2 flex items-center gap-1.5 font-semibold text-primary-foreground text-sm", children: [
            /* @__PURE__ */ i("div", { className: "flex size-5.5 items-end justify-center rounded-full bg-primary-foreground text-primary", children: /* @__PURE__ */ i(P, { name: "icaro", className: "size-4.5" }) }),
            "VLibras"
          ] }),
          /* @__PURE__ */ i(F, { children: [
            /* @__PURE__ */ i(Tu, { className: "w-full" }),
            /* @__PURE__ */ i("div", { id: "header-actions", className: "flex items-center gap-1 [&_button]:not-hover:bg-transparent", children: [
              /* @__PURE__ */ i(Uu, {}),
              /* @__PURE__ */ i(
                z,
                {
                  onClick: n,
                  "aria-label": "Fechar",
                  size: t ? "icon-sm" : "icon",
                  variant: "default",
                  className: "z-1",
                  children: /* @__PURE__ */ i(P, { name: "x" })
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
};
function Du(e, t) {
  const r = e.slice(0, t).lastIndexOf(" "), o = e.indexOf(" ", t);
  return e.slice(r + 1, o === -1 ? e.length : o);
}
function Lu(e, t, r) {
  const o = e.slice(0, t), n = e.slice(t);
  return `${o.replace(/\S+$/, `${r} `)}${n.trimStart()}`;
}
function Mu(e, t) {
  const r = window.getComputedStyle(e), o = document.createElement("div");
  o.style.position = "absolute", o.style.visibility = "hidden", o.style.whiteSpace = "pre-wrap", o.style.wordWrap = "break-word", o.style.width = `${e.clientWidth}px`, o.style.font = r.font, o.style.padding = r.padding, o.style.lineHeight = r.lineHeight, o.style.letterSpacing = r.letterSpacing;
  const n = e.value.slice(0, t);
  o.textContent = n;
  const a = document.createElement("span");
  a.textContent = "|", o.appendChild(a), document.body.appendChild(o);
  const s = 160, l = e.parentElement?.clientWidth ?? e.clientWidth;
  let c = a.offsetLeft + 15;
  c + s > l && (c = a.offsetLeft - s), c = Math.max(0, c);
  const u = {
    top: a.offsetTop + Number.parseInt(r.lineHeight || "20", 10),
    left: c
  };
  return document.body.removeChild(o), u;
}
const Fu = ({ suggestions: e, coords: t, onSelect: r }) => e.length === 0 ? null : /* @__PURE__ */ i(
  "div",
  {
    className: "absolute z-50 flex max-h-30 max-w-45 flex-col gap-1 overflow-x-auto overflow-y-auto rounded-md border bg-background p-1 shadow-md",
    style: {
      top: `${t.top}px`,
      left: `${t.left}px`
    },
    children: e.map((o) => /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        onClick: () => r(o),
        className: "rounded px-2 py-1 text-left text-sm hover:cursor-pointer hover:bg-muted",
        children: o
      },
      o
    ))
  }
), ju = ({ open: e, onOpenChange: t }) => {
  const r = X(null), o = $(), { data: n } = Da(), [a, s] = Q(!1), [l, c] = Q([]), [u, p] = Q({ top: 0, left: 0 }), [h, d] = Q("");
  C(() => d(I.get().gloss || ""), []);
  const b = W(() => n ? new Ba(n) : null, [n]), m = oo(() => {
    if (!r.current) return;
    const A = r.current, w = A.selectionStart ?? 0, y = A.value;
    d(y);
    const v = Du(y, w);
    if (v.length < 2) {
      c([]);
      return;
    }
    c(b ? b.searchSigns(v) : []), p(Mu(A, w));
  }, 300);
  return /* @__PURE__ */ i(yt, { open: e, onOpenChange: t, children: /* @__PURE__ */ i(_t, { children: [
    /* @__PURE__ */ i(xt, { children: /* @__PURE__ */ i(kt, { children: "Feedback" }) }),
    /* @__PURE__ */ i("div", { className: "flex h-full flex-col gap-2 px-4 py-4", children: [
      /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ i("label", { for: "translator-input", className: "font-semibold mobile:text-sm text-muted-foreground", children: "Informe a glosa correta" }) }),
      /* @__PURE__ */ i("div", { className: "relative", children: [
        /* @__PURE__ */ i(
          "textarea",
          {
            ref: r,
            id: "translator-input",
            value: h,
            placeholder: "Digite aqui...",
            className: "h-40 mobile:h-32 w-full resize-none rounded-xl border bg-muted p-3 mobile:text-sm uppercase placeholder:normal-case",
            rows: o ? 4 : 6,
            onChange: m
          }
        ),
        /* @__PURE__ */ i(Fu, { onSelect: (A) => {
          if (!r.current) return;
          const w = r.current.selectionStart ?? 0;
          d(Lu(h, w, A)), c([]), r.current.focus();
        }, suggestions: l, coords: u })
      ] }),
      /* @__PURE__ */ i("div", { className: "space-y-2 [&>button]:h-10 [&>button]:w-full [&>button]:rounded-full mobile:[&>button]:text-sm", children: [
        /* @__PURE__ */ i(z, { variant: "default", onClick: async () => {
          const { text: A } = le.get(), { gloss: w } = I.get();
          if (!(!A || !w || !h)) {
            s(!0);
            try {
              const y = await za({
                text: A,
                translation: w,
                review: h.toUpperCase(),
                rating: "bad"
              });
              y.success ? (t(!1), Xt("Agradecemos sua contribuição!", { variant: "primary", className: "font-semibold" }), rr("AGRADECER"), I.set({ gloss: void 0 })) : (console.error(y.error), y.error && Xt(y.error, { variant: "destructive" }));
            } finally {
              s(!1);
            }
          }
        }, disabled: a, children: a ? "Enviando..." : "Enviar sugestão" }),
        /* @__PURE__ */ i(z, { variant: "outline", onClick: () => ce(h), children: "Reproduzir" })
      ] })
    ] })
  ] }) });
}, Vu = ({ open: e, onOpenChange: t }) => {
  const [r, o] = Q(!1);
  return /* @__PURE__ */ i(F, { children: [
    /* @__PURE__ */ i(yt, { open: e, onOpenChange: t, children: /* @__PURE__ */ i(_t, { children: [
      /* @__PURE__ */ i(xt, { children: /* @__PURE__ */ i(kt, { icon: "comment", children: "Feedback" }) }),
      /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center gap-2 p-6", children: [
        /* @__PURE__ */ i("p", { className: "font-semibold", children: "Gostou da tradução?" }),
        /* @__PURE__ */ i("div", { className: "flex items-center justify-center gap-4 [&>button]:flex-col [&>button]:text-muted-foreground", children: [
          /* @__PURE__ */ i(
            z,
            {
              variant: "ghost",
              size: "icon-xl",
              className: "px-7 py-10 font-semibold hover:bg-primary/5 hover:text-primary",
              onClick: async () => {
                const { gloss: s } = I.get(), { text: l } = le.get();
                if (!s || !l) return;
                const c = await za({ text: l, translation: s, review: s, rating: "good" });
                c.success ? (t(!1), Xt("Agradecemos sua contribuição!", { variant: "primary", className: "font-semibold" }), rr("AGRADECER"), I.set({ gloss: void 0 })) : (t(!1), c.error && Xt(ue.SEND_REVIEW_ERROR, { variant: "destructive" }), console.error(c.error));
              },
              children: [
                /* @__PURE__ */ i(P, { name: "thumbs-up" }),
                /* @__PURE__ */ i("span", { children: "Sim" })
              ]
            }
          ),
          /* @__PURE__ */ i(
            z,
            {
              variant: "ghost",
              size: "icon-xl",
              className: "px-7 py-10 font-semibold hover:bg-destructive/5 hover:text-destructive",
              onClick: () => {
                t(!1), o(!0);
              },
              children: [
                /* @__PURE__ */ i(P, { name: "thumbs-down" }),
                /* @__PURE__ */ i("span", { children: "Não" })
              ]
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ i(ju, { open: r, onOpenChange: o })
  ] });
}, Wu = () => {
  const [e, t] = Q(!1), r = $(), o = G((a) => a.isExpanded);
  return ye((a) => a.open) ? null : /* @__PURE__ */ i(F, { children: [
    /* @__PURE__ */ i(
      z,
      {
        onClick: () => t(!0),
        className: "animate-move-up rounded-full bg-background! font-semibold text-primary hover:bg-muted!",
        variant: "outline",
        size: o ? "default" : r ? "xs" : "sm",
        children: [
          /* @__PURE__ */ i(P, { name: "like" }),
          "Avaliar"
        ]
      }
    ),
    /* @__PURE__ */ i(Vu, { open: e, onOpenChange: t })
  ] });
}, yr = [
  { name: "icaro", path: "/icaro.png", icon: "icaro" },
  { name: "hosana", path: "/hosana.png", icon: "hosana" },
  { name: "guga", path: "/guga.png", icon: "guga" }
], Gu = (e) => {
  const { path: t } = zt.getState();
  return `${t}/assets/images/avatars/${e}`;
}, Hu = () => {
  const e = q((n) => n.avatar), t = ye((n) => n.open), r = yr.find(({ name: n }) => n === e) || yr[0], o = (n) => {
    document.activeElement?.blur(), setTimeout(() => ar(n), 150), Re.trackEvent("avatar_selected", { avatar: n });
  };
  return /* @__PURE__ */ i(
    "div",
    {
      inert: t,
      className: E(
        "dropdown dropdown-top dropdown-end z-1 h-9 animate-move-up focus-within:**:data-[slot=tooltip-content]:hidden [&_button]:shadow-md"
      ),
      children: [
        /* @__PURE__ */ i(
          Qe,
          {
            className: "whitespace-nowrap",
            content: "Alterar avatar",
            placement: "top",
            align: "end",
            arrow: { position: "bottom-right" },
            children: /* @__PURE__ */ i(
              z,
              {
                id: "toggle-avatar-button",
                variant: "outline",
                size: "icon",
                className: "rounded-full bg-background hover:bg-muted! data-[highlight=true]:animate-highlight-primary",
                children: /* @__PURE__ */ i(P, { name: r.icon, "aria-hidden": "true", className: "size-5.5 text-primary" })
              }
            )
          }
        ),
        /* @__PURE__ */ i("ul", { className: "dropdown-content mb-2 space-y-2", children: yr.filter(({ name: n }) => n !== e).map((n) => /* @__PURE__ */ i("li", { className: "flex animate-move-up items-center justify-end gap-2", children: [
          /* @__PURE__ */ i(
            z,
            {
              tabindex: -1,
              onClick: () => o(n.name),
              variant: "outline",
              className: "w-16 rounded-full bg-background capitalize hover:bg-muted!",
              size: "xs",
              children: n.name
            }
          ),
          /* @__PURE__ */ i(
            z,
            {
              onClick: () => o(n.name),
              variant: "outline",
              className: "rounded-full bg-background hover:bg-muted!",
              size: "icon",
              children: /* @__PURE__ */ i("img", { src: Gu(n.path), alt: n.name })
            }
          )
        ] }, n.name)) })
      ]
    }
  );
}, Ju = () => {
  const e = $(), t = ye((y) => y.open), { status: r, gloss: o, isPlayingWelcome: n } = q(Ae("status", "gloss", "isPlayingWelcome")), { isExpanded: a, isTranslating: s, text: l } = G(Ae("isExpanded", "text", "isTranslating")), { action: c, content: u } = bt(Ae("action", "content")), p = r === "playing", h = r === "paused", d = r === "idle";
  C(() => {
    if (!d) return;
    const { auto: y, action: v } = xn.get();
    y && v && (v(), Gr());
  }, [d]);
  const b = () => {
    xn.get().action?.(), Gr();
  }, m = () => {
    le.set({ text: void 0 }), or();
  }, g = c && u && r === "idle", f = !!(r === "idle" && o && l), A = n ? !0 : (p || h) && !!o && !t, w = r === "idle" || t;
  return s ? null : /* @__PURE__ */ i("div", { className: "absolute expanded:inset-x-4! inset-x-3 mobile:inset-x-2 bottom-15 expanded:bottom-16! mobile:bottom-13 flex animate-move-up items-end justify-end gap-1.5", children: [
    /* @__PURE__ */ i("div", { className: "mr-auto flex flex-wrap-reverse items-center gap-1.5", children: [
      g && /* @__PURE__ */ i(
        z,
        {
          onClick: b,
          variant: "outline",
          className: "animate-move-up rounded-full bg-background! font-semibold text-primary hover:bg-muted!",
          size: a ? "default" : e ? "xs" : "sm",
          children: u
        }
      ),
      f && /* @__PURE__ */ i(Wu, {})
    ] }),
    /* @__PURE__ */ i("div", { className: "ml-auto flex items-center gap-2", children: [
      A && /* @__PURE__ */ i(
        z,
        {
          onClick: m,
          className: "animate-move-up rounded-full bg-background! font-semibold text-primary hover:bg-muted!",
          variant: "outline",
          size: a ? "default" : e ? "xs" : "sm",
          children: [
            /* @__PURE__ */ i(P, { name: "skip" }),
            "Pular"
          ]
        }
      ),
      w && /* @__PURE__ */ i(Hu, {})
    ] })
  ] });
}, Ku = {
  onLoaded: () => {
    const { avatar: e, speed: t } = I.get();
    ft({ baseUrl: be.DICTIONARY_URL }), ar(e), go(t), ja();
  },
  onPlay: () => {
    const { screen: e, open: t } = zr.get();
    e !== "main" && t("main"), le.set({ isPausedByUser: !1 });
  },
  onWelcomeFinish: () => {
    const { showSubtitles: e } = I.get();
    fo(e);
  }
}, Xu = ({ className: e, ...t }) => {
  const r = fe((n) => n.screen), o = q((n) => n.isLoaded);
  return /* @__PURE__ */ i(
    "div",
    {
      ...t,
      id: "vlibras-app-content",
      inert: r !== "main",
      ref: (n) => {
        n && je.set({ appContent: n });
      },
      className: E("flex flex-col", (!o || r !== "main") && "opacity-0", e),
      children: [
        /* @__PURE__ */ i(zu, {}),
        /* @__PURE__ */ i(
          mu,
          {
            className: E("mb-2 h-(--player-height) w-full", "max-h-[calc(100dvh-52px)]"),
            options: Ku
          }
        ),
        /* @__PURE__ */ i(Ju, {}),
        /* @__PURE__ */ i(Nu, {})
      ]
    }
  );
}, qu = () => {
  const e = G((t) => Number(t.opacity || 0) * 100);
  return /* @__PURE__ */ i(
    "div",
    {
      style: { opacity: `${e}%` },
      className: "absolute inset-0 -z-50 bg-[#f8f8f8] sm:rounded-xl dark:bg-[#0a0a0a]"
    }
  );
}, Yu = () => {
  const e = fe((n) => n.screen), { isOpen: t, position: r, isExpanded: o } = G(Ae("isOpen", "position", "isExpanded"));
  return /* @__PURE__ */ i(Rc, { children: ({ ref: n, hasMoved: a, pos: s, isDragging: l, reset: c }) => (C(() => {
    !t && c();
  }, [t]), /* @__PURE__ */ i(
    "div",
    {
      id: "vlibras-app",
      inert: !t,
      style: { transform: a && t ? `translate3d(${s.x}px, ${s.y}px, 0)` : void 0 },
      className: E(
        uu({
          isDragging: l,
          isOpen: t,
          position: r,
          isExpanded: o,
          hasMoved: a
        }),
        !1
      ),
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            ref: (u) => {
              u && je.set({ appRoot: u }), typeof n == "function" ? n(u) : n && "current" in n && (n.current = u);
            },
            className: E(
              "relative z-2147483647 h-fit expanded:w-full w-(--widget-width) overflow-hidden rounded-xl shadow-lg expanded:max-sm:rounded-none!",
              e !== "main" && "outline-2 outline-border outline-solid",
              !1
            ),
            children: [
              /* @__PURE__ */ i(Xu, {}),
              /* @__PURE__ */ i(ru, {}),
              /* @__PURE__ */ i(qu, {})
            ]
          }
        ),
        /* @__PURE__ */ i(du, {})
      ]
    }
  )) });
}, Zu = new rd({
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
}), $u = {
  event: null,
  isActive: !1,
  onClick: void 0,
  type: "button",
  element: null,
  listener: null,
  render: void 0
}, Lt = pe()(() => ({
  ...$u
})), Mt = {
  get: Lt.getState,
  set: Lt.setState,
  subscribe: Lt.subscribe
}, ep = ({
  event: e,
  tooltip: t
}) => {
  const r = t?.getBoundingClientRect() || { width: 0, height: 0 };
  let o = e.pageX, n = e.pageY - 36, a = "bottom";
  return o < 34 && (o = 34, a = "left"), o + r.width > window.innerWidth && (o = window.innerWidth - r.width + 12, a = "right"), e.clientY < 46 ? (n = e.pageY + r.height * 2, a = a === "right" ? "top-right" : "top-left") : a = a === "right" ? "bottom-right" : "bottom-left", { x: o, y: n, arrow: a };
}, tp = () => {
  const e = X(null), { type: t, event: r, onClick: o, isActive: n, render: a } = Lt(), [s, l] = Q({ x: 0, y: 0, arrow: "bottom" });
  return C(() => {
    const c = (u) => {
      e.current && !e.current.contains(u.target) && Mt.set({ isActive: !1 });
    };
    return n ? document.addEventListener("click", c) : document.removeEventListener("click", c), () => {
      document.removeEventListener("click", c);
    };
  }, [n]), C(() => {
    if (r && e.current) {
      l(ep({ event: r, tooltip: e.current }));
      const c = e.current;
      c && (c.classList.remove("animate-scale"), c.offsetWidth, c.classList.add("animate-scale"));
    }
  }, [r]), /* @__PURE__ */ i(
    z,
    {
      ref: e,
      onClick: o,
      style: { left: s.x, top: s.y },
      className: E(
        "group absolute z-2147483647 h-9 -translate-x-6 -translate-y-full animate-scale rounded-lg px-3 text-primary-foreground shadow-lg",
        !n && "hidden"
      ),
      children: [
        a || /* @__PURE__ */ i(F, { children: [
          /* @__PURE__ */ i(P, { name: t === "button" ? "touch" : "link", className: "size-5" }),
          /* @__PURE__ */ i("span", { className: "relative bottom-0.5 whitespace-nowrap font-medium text-sm", children: t === "button" ? "Interagir" : "Acessar link" })
        ] }),
        /* @__PURE__ */ i("span", { className: "absolute inset-0 -z-1 rounded-lg bg-primary group-hover:brightness-85" }),
        /* @__PURE__ */ i(
          "span",
          {
            className: E(
              "absolute -z-2 size-4 -translate-x-1/2 rotate-45 bg-primary brightness-85",
              ["bottom", "bottom-left", "bottom-right"].includes(s.arrow) ? "-bottom-1.5" : "-top-1.5",
              ["bottom-left", "top-left", "bottom", "top"].includes(s.arrow) ? "left-5" : "right-2"
            )
          }
        )
      ]
    }
  );
}, rp = ({ children: e, root: t }) => {
  const { theme: r } = no();
  return C(() => {
    const o = t || document.documentElement;
    (o instanceof ShadowRoot ? o.host : o).classList.toggle("dark", r === "dark");
  }, [r, t]), e;
}, op = () => {
  const e = X(null), t = G((r) => r.isOpen);
  return C(() => {
    const r = Ve("#vlibras-access-wrapper")?.shadowRoot, o = r ? Ve("#vlibras-access", r) : null;
    o && (e.current = o);
  }, []), C(() => {
    e.current && (e.current.style.display = t ? "none" : "flex");
  }, [t]), null;
}, np = () => {
  const e = G((t) => t.isExpanded);
  C(() => Li.set({ isExpanded: e }), [e]);
}, ap = () => {
  const e = q((r) => r.status), t = G((r) => r.isTranslating);
  C(() => {
    const { root: r } = je.get();
    r && (r.dataset.status = e);
  }, [e]), C(() => {
    const r = document.documentElement;
    t ? r.dataset.vlibrasStatus = "translating" : delete r.dataset.vlibrasStatus;
  }, [t]);
}, ip = "html body *:not(.vlibras-ignore,.sr-only,.sr-only *,#vlibras-app-root *,#vlibras-app-wrapper *) .vlibras--hover{text-decoration:underline!important;cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABuhJREFUeAHNWUtsVFUY/s+dtjNNSiCaFDCRzIJhJUqJDSUpdYjdQBeikJK4KuCGRKVLsCA0WFhK1ciKtiTGRGIFF+iGhgJdTAKRonHTknhDDK+NJZK003LP8XznzpnO45w793am0i+Z3Jm5j/M/vv91Ltt2Zq6XETtCEkLQGka0hkxg5KqjYP6RhEuCXMHEDOPinud4M7f7mibpfwZrG5i/LoVJU40gjTHJoRyJcSiWOdE4TssI1nYm+5e0ZJKWFWxcEL/C6cWNWnuJbRvI/mOlzfLAZYJdEQveYKa/0aUqISmUFfTSwMaJ00jmRMNFWiJesgJ5uMTZqaUoslIU0HA9Wng/Spw4tLKQjFH9XWnU4fRJESouV5oCGj1zDfN3207OJitdWHMKrYoz2vUmo1QzPkTrZWlsivvnnmeJHs0IevSM6Na0oLsP8N2+vDwjiyTrDYqNmtWBlg2MDrU76hgFN6cEXbrDlTIB6M/0xU+ZTlStwPrVjPq6ogteCijy1Ri3e4SzHpMnqlKgu9VRVtcUqRbP54guTHDlERNkhmopzVDOYnMWDRD8yLu1Ex5oShAd6XToYLs5t8gMdbk0Ozmqq4wICG9bZPqJoL3nX6iA1fjtQbQ8EfD85Gx84WThHw5jbIYiALQpffj000UBYcXHz3xOA1NSoU++9yoFaRmgRPfb5UowIXrbTs+m9W+HC+5SSCBgDxksc2x0kbdIo4BWCsoAUCwqsBbWLIMTy3vBYSSeUUh82mnm/K7NTAUfaKMF1dlEW34psYJnfdZlopJIay84DsVC9R1Ikx2pYmv8m6uB+6WrkUEu3fa9AKvdf+Jfoz1htGQIbJXrmlI0Y7H3cHQa5uvdEM+h/a3lltj3rUe//MGVpbDID3d4Pni1BxDU1cIU0JyJHhyd8X4ZxHretQDW25EqtwICeuAqV1bGIjqPa7rAI4W0WirghVIKYggDjZRqTFAgjWxVFkGGnufoqCeV9K+D0Jo2g2PFga2BtHr0J48+ltnpi6teUcq1Yffmci8Ih71Vhy8cAzixPbabOzbZ+Ys2omfYF6YU8NyWDURdcnHEy6XbIu+VQtx/6tHZD5zAOEmtNZ5LKwWwe4B8ZMO61RT4YNBnaIIXCT5yMKbcDmsri49yq6URJzACKru+v9TrG5vL75NG36IUSLxITMr+m2yolEGQhQotu0N6TBewsED8DE0IlZKhOJJA4bqvGWSQRF2jVFaBjAHbgko5HEG6o4BmN6e4ionRw3X09Yex/CfIk/o5eYWy9nMaTCugIMQ4VYFNzYsKoPruO+/RuTE/zaKYbQ3RbkNBUBL3p5rD1Y26/DfBbxAzN2gqFVbwwkZDkN3K9UOH2pnqjR5XqPkdKaesWOZlmDPfk5cYW4AY4UwXBY19GqZcDYDHCPLBseB4wHW7N9ut/tAsg1tkclkPzpmumn5CFYHc311SrZH/v5HcR3GrZP1KE53xfiHcuuI/zDTyC5N9AQgIL33UHlML6QYOlp96yvMpFsUIMWFCkPWBm9Pl9zFyJouk9XeSy7ORbVENUAfFCr3QQcn3Hw/H1KdFFrHBa/69/tzsX6/TI446WCu1G6Z5AgXY0CV5/aV/IYCCBhI0eihGXW84tCqxaElUZ3gEwsP6F3KeAK0A0EZbPihJ2BIAW+D3yhRQXjA0dxcmgr0A/m9cuyiI5r0WHl7Eb3wX5BsjtRap01cgqB8yDvky7WN325w3BS/zAjwQZSyEImf3xvJNGBTSE92jnDVBn0rFDdY3riucERyMCmT6GkdMsRC2cwRAK53T0QvB+t2tvsA6p6Norcpx30QhNICW9OvqPSL73qghFiBEJSqZgIIG6+shHVkNQQuhtVdM/dbQLUvxk1vx+muMLPj7+oD7eufn2INpK/z/z4dCJdQoO3HJV5mqsq80+b/vy4BHsOs23fQsGOq7jNFYbuZ4/ID+UUcBiGfr++fi83tKd+60F2x7Q6VQPC/gendr8H14/pDN0/N8Z+HPwCf54ybfaWoxsAgmrrAxEQaK89cChBd0qvS9WigebD+d3SMcumw6B+v2dsaMM3MUINAHrnoBLQcbyfQ1HCj7l0KibWC2Rzps2HYePO5utXeTNkBwWDwwRSPnH0/sNJ2KtBqUEOR8GfRadl1uuO/Y5KihBr/1UA+KwMJoDtEj/fq7CEFBs+WXpIBS4qx87SOc68v/cpx8zh+P9wddEvkdWeZYo5vINrTAMrR8cBlz0pWEB6qKPOUNjw3Lfb401QDqnZicScIIrlFd6shBKcLljjET6SVRSwapYHSlcT5+0d9gCI+aKFCI7WcW3hGcp6VAWyQ/kzKjJ0uC3sUkhWFEpubJRLb+56hCF+I/Ig4jzjnhUQQAAAAASUVORK5CYII=),pointer!important}html body *:not(.vlibras-ignore,.sr-only,.sr-only *,#vlibras-app-root *,#vlibras-app-wrapper *) .vlibras--hover[src],html body *:not(.vlibras-ignore,.sr-only,.sr-only *,#vlibras-app-root *,#vlibras-app-wrapper *) .vlibras--hover img{text-decoration:none!important;cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA0CAYAAADMk7uRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAB2BJREFUeAHNWktMVFcY/s8dYDCRygq0C4OJw6paMaXSBCxNbRNF01YNJF2BdGNf0nSjIlFi0VVTaRtdoTRpmmiKJWnowpQUgUQSjWBdFUwcWdTHphhMGAbuOT3fuZxhHuc+ZhjUL5ncO3PPved/fv9/zh2240ysjRE7QhJCUCkjKiUTGEXVUTDnSCJKgqKCiRnGxR3bsmdutq+doOcMVtMV/0sKU095gjTGBIdyJIag2FjHmiFaRbCaM/P3pSUraFXBhgTxfk6L1/PtJbaja/4/17BZHUSZYP1iwe4e61wTpRVChtC8oBcGNkScesc6in6iHPGCFUggSpydykWRl0UBjahNCx9lkycWvVyoCFHhuDTqpfqTIlBevmwKaDTHiuLjNSfnKvwG5j2ESsKMdm9lFCnDh2iDLI1rw861Z/NED2cEPXxKNDIlaHwa5+7TyyuySLI2r9zIWx2o2siotdZSx2wwPCnoyi2ulPFA51h7+JTpwooV2LCOUXtD9oKnA4p8P8jdPcJZs8kTK1KgsdpSVtchslI8ixH1jHLlERMkQ1WlM5S13JxlBwh+5N38CQ+sLSY6ssuiQ7VmbpEM9Vs6O1mqq8wSEN5tkqnHgg5cWFQJq3F7Ojue8Hh+xVx44WTyDxZjbIayAMIm/eFTT5YFhBUfPXViGpiUCn3xi+2XpBmAEo1vZCrBhGirOT1Xr79bXPAoBQQSttVgmWN9y3ELGgW0UlAGgGLZAnNhzgxYoYQXLEbiKQXEl7vMMb97C1PJh7DRgmo20ZbPJVfwrOMNplAS9doLlkWhQH0HaHJnJNUas0s1sEm6Ggxy5abjBVjt3mNnjPaE0ZIBsF3Oa6JoxkIf4GgVxQujAZ5DTdWZljh43qY/7nJlKUxy+RZPJK/2AJJ6pTAlNGeiGUdrqFMmsV7vugDWq4tkWgEJ3TXAlZUxieZxHS7wSHJY5Qp4IT0EsQhDGCnVmCDPMHKrskgy9DxH+2yppDMOQuuw6R5MTWwN0OrRqzZ9LtnpmwE7hXLdsGdLpheExV4vwAnHApzYh24376x0j1+0Ec2XHGHSAc9t20jUICdHvly5KRJeSca9Jzad3W955kmk3HitXimA3QPwkRvWryPPByN8Lo7yFMF7D4WU22FtZfE+7mpp5AmMgMqu70/3+uayzPuk0bcpBYoXiydk/01u8GMQsFCyZeukx3QBCwrkz8VRoSgZioMEkud91SCDDNRSpbJKZCywXeDH4UjSuqQwG57kKif6DhfQDx+HEh8vT+rnJBSad7+mwbQCCkIM0QpQWbasAKrvwQs2nRt0aBbFbHuAdhsKIiRxf6QsWN0oSJwJfp2YuUFTVOjjhc2GJBtZ6odaa5nqjR751PydESujWCZkiJnvSUiMLUAs4UyDvJZ9GiauBhDHSPLuQe98wLg9W9yt/q9ZhmiKyWU9OGcaNfWYfAHub0yr1uD/H2Xso7j5Wd9vRWe8X4hoQeoP5jByCpP7BBAQXvqkNqQm0g0cLD/5hCcoFsUIOWGCl/WB4anM+xhZEynSOjvJmWzkNqkGQgfFCr3QIRnvvx4OqU+VLGLdfzr3OutmZ7ymRxx1svq1G6b1BAqwoUuyO9N/QgJ5LUjQ6KEYNbxmUUnxsiVRneERCA/r9yx5AmEFIGy05b1Iwo0A2AK/k6GA8oKhuesZ9fYC4n9z+bIgOu618PAivuNckGOMSDmo01HAqx8yLvIl7WN328ybgmd4AR7IZlkIRc4eCCWaMCikV3QPl6yJ8PErbrC+cV5h9eJgVGCsfU2vKReCdo4AwkpzOnohWL+x2hFYczqKVslS7JtCCA2gC/1G9R6R+96oIRcghF8omYCCBuvrRTpYDUkLobVXTP3WxRGX4ie34vWpJ3e9dSb+nZC7AOm/Y0I0XWoxI5M3qFeCAn3VhleY2wZXVG4zbtJfPBXAJlIsHB837dzBevkWPBDifFPyqynfjqnm7FyF4Na46T1aw1a5O/deKGPFtRKgIPYM2zRgqj2CTo2dCKeEtu/7gbFjkqo4tZiutdblV3gAuQCjZIL1pgsPFFAA3OgI99d0zUklrEvpk6Xj/W/jkj2I2qQQTdWOIDKX1NirnxWq75/+vGCkxhvHi9QxuRgqgPNPhI1GDPyGxqFW3uLWsQK3H3AlPDD8j3vNeLtSFjcZfiVL1IlzfMyA5YvfcXtWIA9oQAmZE/LVqHXfdH3gbydusQmAVRl43BRiTW86ntn/YEGN6dhb4DFnUQt5IOt3ZMgJt2vj05wqy2UBq3QE9PJCvpC3l3wIH7QIszEuBXc8cXs6+6KXLbIKIS8gZIDIemcDGPE9shRGwDN5PP37YmJ8x778TJ13BU7sdaj1XHiRLmOX7pFzfTaWuq7o2Ed5QU4krv8gcu3rwrzXAQCvYvefX1Dnsm3wnCCnHMB/gnDsvmaryfKJ2ZisxCNOByrXDf1+43MLIctuQXshy33pwN3VSVT1kjsuvvIbl5MHQKXM4lVyEl8LZQtVKGXlZXFeFeT/RP8DlfZa3rLKpU0AAAAASUVORK5CYII=),pointer!important}html body *:not(.vlibras-ignore,.sr-only,.sr-only *,#vlibras-app-root *,#vlibras-app-wrapper *) .vlibras--active{text-decoration:underline!important}", sp = Array.from([document.body, ...document.body.children]), lp = Ve("#vlibras-app-root"), cp = (e) => we(e, ["IMG"]) ? e.alt : ko(e) ? e.value : e.dataset.vlibrasGloss ? e.dataset.vlibrasGloss : e.dataset.vlibrasText ? e.dataset.vlibrasText : we(e, ["SELECT"]) ? Ve(`[value="${e.value}"]`, e)?.innerText : e.innerText.trim() || "", Ka = (e) => {
  let t = e;
  for (; t && !sp.includes(t); ) {
    if (dp(t) || t.onclick && !hp(t)) return t;
    t = t.parentNode;
  }
  return null;
}, xr = (e) => lp?.contains(e) || e.matches(".vlibras-links") ? !1 : mp(e) || Ka(e) || ko(e) || up(e) || pp(e), we = (e, t) => t.includes(e.tagName), dp = (e) => we(e, ["A", "BUTTON"]), ko = (e) => we(e, "INPUT") && e.type === "submit", up = (e) => we(e, "IMG") && e.alt && e.alt.trim(), pp = (e) => we(e, "SELECT"), hp = (e) => we(e, ["SVG", "PATH"]), mp = (e) => {
  const t = (r) => r.nodeType === Node.TEXT_NODE && r?.textContent?.trim();
  return Array.from(e.childNodes).some((r) => t(r));
}, gp = (e) => {
  if (!e.parentElement) return;
  const t = Ve("input", e.parentElement);
  t && ["radio", "checkbox"].includes(t.type) && (t.checked = !t.checked);
}, fp = (e, t) => {
  let r = null, o = 0;
  if (document.caretPositionFromPoint) {
    const h = document.caretPositionFromPoint(e, t);
    if (!h || !h.offsetNode) return null;
    r = h.offsetNode, o = h.offset;
  } else if (document.caretRangeFromPoint) {
    const h = document.caretRangeFromPoint(e, t);
    if (!h || !h.startContainer) return null;
    r = h.startContainer, o = h.startOffset;
  }
  if (!r || r.nodeType !== Node.TEXT_NODE) return null;
  const n = r.textContent ?? "";
  if (!n.trim()) return null;
  const a = n.slice(0, o), s = n.slice(o), l = a.match(/[\wÀ-ú’-]+$/), c = s.match(/^[\wÀ-ú’-]+/), u = `${l?.[0] ?? ""}${c?.[0] ?? ""}`;
  if (!u) return null;
  const p = o - (l?.[0]?.length ?? 0);
  return { word: u, node: r, offset: p };
}, bp = (e) => {
  ir(`span.${e}`)?.forEach((t) => {
    const r = t.parentNode;
    if (!r) return;
    const o = document.createTextNode(t.textContent || "");
    r.replaceChild(o, t), r.normalize();
  });
}, vp = (e) => {
  ir(`.${e}`)?.forEach((t) => t.classList.remove(e));
}, Ap = ({ callback: e, isWordByWord: t, hoverClss: r, activeClass: o }) => {
  const n = (p) => {
    const h = p.target;
    (!(xr(h) && t) || !we(h, "IMG")) && h.classList.add(r);
  }, a = (p) => {
    !t || !r || $r(() => {
      const h = p.target;
      if (!xr(h)) return;
      bp(r);
      const { word: d, node: b, offset: m } = fp(p.clientX, p.clientY) || {};
      if (d && b && typeof m == "number") {
        const g = document.createRange();
        g.setStart(b, m), g.setEnd(b, m + d.length);
        const f = document.createElement("span");
        f.className = r, f.textContent = d, g.deleteContents(), g.insertNode(f);
      }
    });
  }, s = (p) => {
    const h = p.target, b = window.getSelection()?.toString().trim();
    if (Mt.set({ isActive: !1 }), vp(o), b || h.classList.add(o), !xr(h)) return;
    if (b && !t) return e?.({ text: b, element: h });
    if (p.preventDefault(), p.stopPropagation(), t && r) {
      const g = Ve(`.${r}`), f = g?.textContent?.trim();
      f && g && e?.({ text: f, element: g });
    } else {
      const g = !!h.dataset.vlibrasGloss?.trim(), f = cp(h)?.trim();
      f && e?.({ text: f, element: h, isGloss: g });
    }
    const m = h.tagName === "A" ? h : Ka(h);
    m && c(m, p), we(h, "LABEL") ? gp(h) : (we(h, "BUTTON") || ko(h)) && c(h, p);
  }, l = (p) => {
    p.target.classList.remove(r);
  }, c = (p, h) => {
    Mt.set({
      isActive: !0,
      event: h,
      type: p.tagName.toLowerCase() === "a" ? "link" : "button",
      onClick: () => {
        p.dispatchEvent(new MouseEvent("click", { bubbles: !0 })), Mt.set({ isActive: !1 });
      }
    });
  }, u = () => {
    document.body.removeEventListener("mousemove", a), document.body.removeEventListener("mouseover", n), document.body.removeEventListener("mouseout", l), document.body.removeEventListener("click", s, !0);
  };
  return t ? document.body.addEventListener("mousemove", a) : (document.body.addEventListener("mouseover", n), document.body.addEventListener("mouseout", l)), document.body.addEventListener("click", s, !0), u;
}, wp = () => {
  const e = q((o) => o.isLoaded), t = G((o) => o.isOpen), { mutateAsync: r } = at();
  C(() => {
    e && (t ? ra(ip, "@text-capture.style") : Hi("@text-capture.style"));
  }, [t, e]), C(() => {
    if (!e) return;
    const o = Ap({
      hoverClss: "vlibras--hover",
      activeClass: "vlibras--active",
      callback: async ({ text: n, isGloss: a }) => {
        if (or(), a) return ce(n);
        const s = await r(n);
        Gr(), ce(s);
      }
    });
    return t || o?.(), () => o?.();
  }, [e, t]);
}, yp = () => {
  const e = q((n) => n.isLoaded), { mutateAsync: t } = at(), r = async (n) => {
    const a = await t(n);
    ce(a);
  }, o = async (n) => await t(n);
  C(() => {
    if (typeof window > "u" || !e) return;
    window.plugin = window.plugin || {};
    const n = {
      ...ur(I.get(), "send"),
      ...ur(le.get(), "reset", "setLoaded"),
      ...ur(Od, "setConfig")
    };
    window.vlibras = {
      ...n,
      translate: o,
      translateAndPlay: r
    }, window.plugin.translate = r, window.plugin.player = {
      ...n,
      changeAvatar: ar
    };
  }, [e]);
}, xp = () => (wp(), ap(), op(), yp(), np(), null), kp = ({ children: e, root: t }) => {
  const [r, o] = Q(!1);
  return C(() => {
    t && nu(t, () => o(!0));
  }, [t]), r ? /* @__PURE__ */ i(rp, { root: t, children: /* @__PURE__ */ i(nd, { client: Zu, children: [
    /* @__PURE__ */ i(tp, {}),
    /* @__PURE__ */ i(xp, {}),
    e
  ] }) }) : null;
}, { root: kr, shadowRoot: pt, isRootActive: Rn } = Gi();
function _p() {
  const { setOpen: e, isLoaded: t, setLoaded: r } = G(Ae("setOpen", "isLoaded", "setLoaded")), { path: o } = ea();
  return C(() => je.set({ root: kr, shadowRoot: pt }), [kr, pt]), C(() => {
    Re.trackLoad();
  }, []), C(() => {
    if (!o || ((async () => (await Ji(o, pt), r(!0)))(), !t)) return;
    e(Rn());
    const n = new MutationObserver(() => e(Rn()));
    return n.observe(kr, {
      attributes: !0,
      attributeFilter: ["data-active"]
    }), () => n.disconnect();
  }, [o, e, t, r]), t ? /* @__PURE__ */ i(kp, { root: pt, children: /* @__PURE__ */ i(Yu, {}) }) : null;
}
Ze(/* @__PURE__ */ i(_p, {}), pt);
