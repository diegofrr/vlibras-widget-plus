var T, Nn, Ve, Ro, qt, On, Un, eo, Or, Ur, Bn, Yt = {}, Qn = [], $a = /(mi|mn|mo|ms$|mte|msp)/, Et = Array.isArray, ir = Qn.slice, Ie = Object.assign;
function to(e) {
  e && e.parentNode && e.remove();
}
function Ne(e, t, r) {
  var o, n, i, s = {};
  for (i in t) i == "key" ? o = t[i] : i == "ref" && typeof e != "function" ? n = t[i] : s[i] = t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? ir.call(arguments, 2) : r), At(e, s, o, n, null);
}
function At(e, t, r, o, n) {
  var i = { type: e, props: t, key: r, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: n ?? ++Nn, __i: -1, __u: 0 };
  return n == null && T.vnode != null && T.vnode(i), i;
}
function ei() {
  return { current: null };
}
function Q(e) {
  return e.children;
}
function Te(e, t) {
  this.props = e, this.context = t, this.__g = 0;
}
function at(e, t) {
  if (t == null) return e.__ ? at(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? at(e) : null;
}
function Ln(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = t.__e;
  }), Ln(e);
}
function Br(e) {
  (8 & e.__g || !(e.__g |= 8) || !Ve.push(e) || qt++) && Ro == T.debounceRendering || ((Ro = T.debounceRendering) || queueMicrotask)(ti);
}
function ti() {
  for (var e, t, r, o, n, i, s, l, c = 1; Ve.length; ) Ve.length > c && Ve.sort(On), e = Ve.shift(), c = Ve.length, 8 & e.__g && (r = void 0, o = void 0, n = (o = (t = e).__v).__e, i = [], s = [], (l = t.__P) && ((r = Ie({}, o)).__v = o.__v + 1, T.vnode && T.vnode(r), ro(l, r, o, t.__n, l.namespaceURI, 32 & o.__u ? [n] : null, i, n ?? at(o), !!(32 & o.__u), s, l.ownerDocument), r.__v = o.__v, r.__.__k[r.__i] = r, Mn(i, r, s), o.__ = o.__e = null, r.__e != n && Ln(r)));
  qt = 0;
}
function Dn(e, t, r, o, n, i, s, l, c, u, p, m) {
  var d, g, h, f, b, y, A, v = o && o.__k || Qn, w = t.length;
  for (c = ri(r, t, v, c, w), d = 0; d < w; d++) (h = r.__k[d]) != null && (g = h.__i != -1 && v[h.__i] || Yt, h.__i = d, y = ro(e, h, g, n, i, s, l, c, u, p, m), f = h.__e, h.ref && g.ref != h.ref && (g.ref && oo(g.ref, null, h), p.push(h.ref, h.__c || f, h)), b == null && f != null && (b = f), (A = 4 & h.__u) || g.__k === h.__k ? c = zn(h, c, e, A) : typeof h.type == "function" && y !== void 0 ? c = y : f && (c = f.nextSibling), h.__u &= -7);
  return r.__e = b, c;
}
function ri(e, t, r, o, n) {
  var i, s, l, c, u, p = r.length, m = p, d = 0;
  for (e.__k = new Array(n), i = 0; i < n; i++) (s = t[i]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = e.__k[i] = At(null, s, null, null, null) : Et(s) ? s = e.__k[i] = At(Q, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = e.__k[i] = At(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : e.__k[i] = s, c = i + d, s.__ = e, s.__b = e.__b + 1, l = null, (u = s.__i = oi(s, r, c, m)) != -1 && (m--, (l = r[u]) && (l.__u |= 2)), l == null || l.__v == null ? (u == -1 && (n > p ? d-- : n < p && d++), typeof s.type != "function" && (s.__u |= 4)) : u != c && (u == c - 1 ? d-- : u == c + 1 ? d++ : (u > c ? d-- : d++, s.__u |= 4))) : e.__k[i] = null;
  if (m) for (i = 0; i < p; i++) (l = r[i]) != null && (2 & l.__u) == 0 && (l.__e == o && (o = at(l)), Vn(l, l));
  return o;
}
function zn(e, t, r, o) {
  var n, i;
  if (typeof e.type == "function") {
    for (n = e.__k, i = 0; n && i < n.length; i++) n[i] && (n[i].__ = e, t = zn(n[i], t, r, o));
    return t;
  }
  e.__e != t && (o && (t && e.type && !t.parentNode && (t = at(e)), r.insertBefore(e.__e, t || null)), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Be(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Et(e) ? e.some(function(r) {
    Be(r, t);
  }) : t.push(e)), t;
}
function oi(e, t, r, o) {
  var n, i, s, l = e.key, c = e.type, u = t[r], p = u != null && (2 & u.__u) == 0;
  if (u === null && l == null || p && l == u.key && c == u.type) return r;
  if (o > (p ? 1 : 0)) {
    for (n = r - 1, i = r + 1; n >= 0 || i < t.length; ) if ((u = t[s = n >= 0 ? n-- : i++]) != null && (2 & u.__u) == 0 && l == u.key && c == u.type) return s;
  }
  return -1;
}
function Po(e, t, r) {
  t[0] == "-" ? e.setProperty(t, r ?? "") : e[t] = r ?? "";
}
function Lt(e, t, r, o, n) {
  var i;
  e: if (t == "style") if (typeof r == "string") e.style.cssText = r;
  else {
    if (typeof o == "string" && (e.style.cssText = o = ""), o) for (t in o) r && t in r || Po(e.style, t, "");
    if (r) for (t in r) o && r[t] == o[t] || Po(e.style, t, r[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(Un, "$1")), t = t.slice(2).toLowerCase(), e.__l || (e.__l = {}), e.__l[t + i] = r, r ? o ? r.l = o.l : (r.l = eo, e.addEventListener(t, i ? Ur : Or, i)) : e.removeEventListener(t, i ? Ur : Or, i);
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
function Io(e) {
  return function(t) {
    if (this.__l) {
      var r = this.__l[t.type + e];
      if (t.u == null) t.u = eo++;
      else if (t.u < r.l) return;
      return r(T.event ? T.event(t) : t);
    }
  };
}
function ro(e, t, r, o, n, i, s, l, c, u, p) {
  var m, d, g, h, f, b, y, A, v, w, N, D, V, x, L, ie, ae, J, he, oe = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && (c = 32 & r.__u) && r.__c.__z && (l = (i = r.__c.__z)[0], r.__c.__z = null), (m = T.__b) && m(t);
  e: if (typeof oe == "function") try {
    if (b = t.props, y = "prototype" in oe && oe.prototype.render, A = (m = oe.contextType) && o[m.__c], v = m ? A ? A.props.value : m.__ : o, r.__c ? 2 & (d = t.__c = r.__c).__g && (d.__g |= 1) : (y ? t.__c = d = new oe(b, v) : (t.__c = d = new Te(b, v), d.constructor = oe, d.render = ai), A && A.sub(d), d.state || (d.state = {}), d.__n = o, d.__g |= 8, d.__h = [], d._sb = []), y && d.__s == null && (d.__s = d.state), y && oe.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = Ie({}, d.__s)), Ie(d.__s, oe.getDerivedStateFromProps(b, d.__s))), g = d.props, h = d.state, d.__v = t, r.__c) {
      if (y && oe.getDerivedStateFromProps == null && b !== g && d.componentWillReceiveProps != null && d.componentWillReceiveProps(b, v), t.__v == r.__v || !(4 & d.__g) && d.shouldComponentUpdate != null && d.shouldComponentUpdate(b, d.__s, v) === !1) {
        t.__v != r.__v && (d.props = b, d.state = d.__s, d.__g &= -9), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(se) {
          se && (se.__ = t);
        }), (w = d.__h).push.apply(w, d._sb), d._sb = [], d.__h.length && s.push(d);
        break e;
      }
      d.componentWillUpdate != null && d.componentWillUpdate(b, d.__s, v), y && d.componentDidUpdate != null && d.__h.push(function() {
        d.componentDidUpdate(g, h, f);
      });
    } else y && oe.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), y && d.componentDidMount != null && d.__h.push(d.componentDidMount);
    if (d.context = v, d.props = b, d.__P = e, d.__g &= -5, N = T.__r, D = 0, y) d.state = d.__s, d.__g &= -9, N && N(t), m = d.render(d.props, d.state, d.context), (V = d.__h).push.apply(V, d._sb), d._sb = [];
    else do
      d.__g &= -9, N && N(t), m = d.render(d.props, d.state, d.context), d.state = d.__s;
    while (8 & d.__g && ++D < 25);
    d.state = d.__s, d.getChildContext != null && (o = Ie({}, o, d.getChildContext())), y && r.__c && d.getSnapshotBeforeUpdate != null && (f = d.getSnapshotBeforeUpdate(g, h)), x = m != null && m.type === Q && m.key == null ? Fn(m.props.children) : m, l = Dn(e, Et(x) ? x : [x], t, r, o, n, i, s, l, c, u, p), t.__u &= -161, d.__h.length && s.push(d), 2 & d.__g && (d.__g &= -4);
  } catch (se) {
    if (t.__v = null, c || i != null) if (se.then) {
      for (L = 0, t.__u |= c ? 160 : 128, t.__c.__z = [], ae = 0; ae < i.length; ae++) (J = i[ae]) == null || ie || (J.nodeType == 8 ? (J.data == "$s" ? (L && t.__c.__z.push(J), L++) : J.data == "/$s" && (--L && t.__c.__z.push(J), ie = L == 0, l = i[ae]), i[ae] = null) : L && (t.__c.__z.push(J), i[ae] = null));
      if (!ie) {
        for (; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
        i[i.indexOf(l)] = null, t.__c.__z = [l];
      }
      t.__e = l;
    } else {
      for (he = i.length; he--; ) to(i[he]);
      Qr(t);
    }
    else t.__e = r.__e, t.__k = r.__k, se.then || Qr(t);
    T.__e(se, t, r);
  }
  else l = t.__e = ni(r.__e, t, r, o, n, i, s, c, u, p);
  return (m = T.diffed) && m(t), 128 & t.__u ? void 0 : l;
}
function Qr(e) {
  e && e.__c && (e.__c.__g |= 4), e && e.__k && e.__k.forEach(Qr);
}
function Mn(e, t, r) {
  for (var o = 0; o < r.length; o++) oo(r[o], r[++o], r[++o]);
  T.__c && T.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(i) {
        i.call(n);
      });
    } catch (i) {
      T.__e(i, n.__v);
    }
  });
}
function Fn(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : Et(e) ? e.map(Fn) : Ie({}, e);
}
function ni(e, t, r, o, n, i, s, l, c, u) {
  var p, m, d, g, h, f, b, y, A = r.props || Yt, v = t.props, w = t.type;
  if (w == "svg" ? n = "http://www.w3.org/2000/svg" : w == "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), i != null) {
    for (p = 0; p < i.length; p++) if ((h = i[p]) && "setAttribute" in h == !!w && (w ? h.localName == w : h.nodeType == 3)) {
      e = h, i[p] = null;
      break;
    }
  }
  if (e == null) {
    if (w == null) return u.createTextNode(v);
    e = u.createElementNS(n, w, v.is && v), l && (T.__m && T.__m(t, i), l = !1), i = null;
  }
  if (w == null) A === v || l && e.data == v || (e.data = v);
  else {
    if (i = i && ir.call(e.childNodes), !l && i != null) for (A = {}, p = 0; p < e.attributes.length; p++) A[(h = e.attributes[p]).name] = h.value;
    for (p in A) h = A[p], p == "dangerouslySetInnerHTML" ? d = h : p == "children" || p in v || p == "value" && "defaultValue" in v || p == "checked" && "defaultChecked" in v || Lt(e, p, null, h, n);
    for (p in y = 1 & r.__u, v) h = v[p], p == "children" ? g = h : p == "dangerouslySetInnerHTML" ? m = h : p == "value" ? f = h : p == "checked" ? b = h : l && typeof h != "function" || A[p] === h && !y || Lt(e, p, h, A[p], n);
    if (m) l || d && (m.__html == d.__html || m.__html == e.innerHTML) || (e.innerHTML = m.__html), t.__k = [];
    else if (d && (e.innerHTML = ""), (w == "foreignObject" || n == "http://www.w3.org/1998/Math/MathML" && $a.test(w)) && (n = "http://www.w3.org/1999/xhtml"), Dn(w == "template" ? e.content : e, Et(g) ? g : [g], t, r, o, n, i, s, i ? i[0] : r.__k && at(r, 0), l, c, u), i != null) for (p = i.length; p--; ) to(i[p]);
    l || (p = "value", w == "progress" && f == null ? e.removeAttribute("value") : f == null || f === e[p] && (w !== "progress" || f) || Lt(e, p, f, A[p], n), p = "checked", b != null && b != e[p] && Lt(e, p, b, A[p], n));
  }
  return e;
}
function oo(e, t, r) {
  try {
    typeof e == "function" ? (typeof e.__u == "function" && e.__u(), typeof e.__u == "function" && t == null || (e.__u = e(t))) : e.current = t;
  } catch (o) {
    T.__e(o, r);
  }
}
function Vn(e, t, r) {
  var o, n;
  if (T.unmount && T.unmount(e), !(o = e.ref) || o.current && o.current != e.__e || oo(o, null, t), (o = e.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (i) {
      T.__e(i, t);
    }
    o.__P = null;
  }
  if (o = e.__k) for (n = 0; n < o.length; n++) o[n] && Vn(o[n], t, r || typeof e.type != "function");
  r || to(e.__e), e.__e && e.__e.__l && (e.__e.__l = null), e.__e = e.__c = e.__ = null;
}
function ai(e, t, r) {
  return this.constructor(e, r);
}
function it(e, t) {
  var r, o, n, i;
  t == document && (t = document.documentElement), T.__ && T.__(e, t), o = (r = e && 32 & e.__u) ? null : t.__k, t.__k = Ne(Q, null, [e]), n = [], i = [], ro(t, t.__k, o || Yt, Yt, t.namespaceURI, o ? null : t.firstChild ? ir.call(t.childNodes) : null, n, o ? o.__e : t.firstChild, r, i, t.ownerDocument), Mn(n, t.__k, i);
}
function ii(e, t) {
  e.__u |= 32, it(e, t);
}
function si(e, t, r) {
  var o, n, i, s = Ie({}, e.props);
  for (i in t) i == "key" ? o = t[i] : i == "ref" && typeof e.type != "function" ? n = t[i] : s[i] = t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? ir.call(arguments, 2) : r), At(e.type, s, o || e.key, n || e.ref, null);
}
function Je(e) {
  function t(r) {
    var o, n;
    return this.getChildContext || (o = /* @__PURE__ */ new Set(), (n = {})[t.__c] = this, this.getChildContext = function() {
      return n;
    }, this.componentWillUnmount = function() {
      o = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value != i.value && o.forEach(function(s) {
        s.__g |= 4, Br(s);
      });
    }, this.sub = function(i) {
      o.add(i);
      var s = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        o && o.delete(i), s && s.call(i);
      };
    }), r.children;
  }
  return t.__c = "__cC" + Bn++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(r, o) {
    return r.children(o);
  }).contextType = t, t;
}
T = { __e: function(e, t, r, o) {
  for (var n, i, s; t = t.__; ) if ((n = t.__c) && !(1 & n.__g)) {
    n.__g |= 4;
    try {
      if ((i = n.constructor) && i.getDerivedStateFromError != null && (n.setState(i.getDerivedStateFromError(e)), s = 8 & n.__g), n.componentDidCatch != null && (n.componentDidCatch(e, o || {}), s = 8 & n.__g), s) return void (n.__g |= 2);
    } catch (l) {
      e = l;
    }
  }
  throw qt = 0, e;
} }, Nn = 0, Te.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = Ie({}, this.state), typeof e == "function" && (e = e(Ie({}, r), this.props)), e && (Ie(r, e), this.__v && (t && this._sb.push(t), Br(this)));
}, Te.prototype.forceUpdate = function(e) {
  this.__v && (this.__g |= 4, e && this.__h.push(e), Br(this));
}, Te.prototype.render = Q, Ve = [], qt = 0, On = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Un = /(PointerCapture)$|Capture$/i, eo = 0, Or = Io(!1), Ur = Io(!0), Bn = 0;
var li = 0;
function a(e, t, r, o, n, i) {
  t || (t = {});
  var s, l, c = t;
  if ("ref" in c && typeof e != "function") for (l in c = {}, t) l == "ref" ? s = t[l] : c[l] = t[l];
  var u = { type: e, props: c, key: r, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --li, __i: -1, __u: 0, __source: n, __self: i };
  return T.vnode && T.vnode(u), u;
}
var Le, F, Ar, To, Lr = Object.is, st = 0, jn = [], W = T, No = W.__b, Oo = W.__r, Uo = W.diffed, Bo = W.__c, Qo = W.unmount, Lo = W.__;
function lt(e, t) {
  W.__h && W.__h(F, e, st || t), st = 0;
  var r = F.__H || (F.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function O(e) {
  return st = 1, no(Jn, e);
}
function no(e, t, r) {
  var o = lt(Le++, 2);
  if (o.t = e, !o.__c && (o.__ = [r ? r(t) : Jn(void 0, t), function(l) {
    var c = o.__N ? o.__N[0] : o.__[0], u = o.t(c, l);
    Lr(c, u) || (o.__N = [u, o.__[1]], o.__c.setState({}));
  }], o.__c = F, !F.__f)) {
    var n = function(l, c, u) {
      if (!o.__c.__H) return !0;
      var p = o.__c.__H.__, m = o.__c.props !== l || p.every(function(d) {
        return !d.__N;
      });
      return p.some(function(d) {
        if (d.__N) {
          var g = d.__[0];
          d.__ = d.__N, d.__N = void 0, Lr(g, d.__[0]) || (m = !0);
        }
      }), i && i.call(this, l, c, u) || m;
    };
    F.__f = !0;
    var i = F.shouldComponentUpdate, s = F.componentWillUpdate;
    F.componentWillUpdate = function(l, c, u) {
      if (4 & this.__g) {
        var p = i;
        i = void 0, n(l, c, u), i = p;
      }
      s && s.call(this, l, c, u);
    }, F.shouldComponentUpdate = n;
  }
  return o.__;
}
function S(e, t) {
  var r = lt(Le++, 3);
  !W.__s && ao(r.__H, t) && (r.__ = e, r.u = t, F.__H.__h.push(r));
}
function Ke(e, t) {
  var r = lt(Le++, 4);
  !W.__s && ao(r.__H, t) && (r.__ = e, r.u = t, F.__h.push(r));
}
function te(e) {
  return st = 5, M(function() {
    return { current: e };
  }, []);
}
function Wn(e, t, r) {
  st = 6, Ke(function() {
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
function M(e, t) {
  var r = lt(Le++, 7);
  return ao(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__;
}
function _e(e, t) {
  return st = 8, M(function() {
    return e;
  }, t);
}
function xe(e) {
  var t = F.context[e.__c], r = lt(Le++, 9);
  return r.c = e, t ? (r.__ == null && (r.__ = !0, t.sub(F)), t.props.value) : e.__;
}
function Gn(e, t) {
  W.useDebugValue && W.useDebugValue(t ? t(e) : e);
}
function Hn() {
  var e = lt(Le++, 11);
  if (!e.__) {
    for (var t = F.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var r = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + r[0] + "-" + r[1]++;
  }
  return e.__;
}
function ci() {
  for (var e; e = jn.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.some(Wt), e.__H.__h.some(Dr), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], W.__e(t, e.__v);
  }
}
W.__b = function(e) {
  F = null, No && No(e);
}, W.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Lo && Lo(e, t);
}, W.__r = function(e) {
  Oo && Oo(e), Le = 0;
  var t = (F = e.__c).__H;
  t && (Ar === F ? (t.__h = [], F.__h = [], t.__.some(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (t.__h.some(Wt), t.__h.some(Dr), t.__h = [], Le = 0)), Ar = F;
}, W.diffed = function(e) {
  Uo && Uo(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (jn.push(t) !== 1 && To === W.requestAnimationFrame || ((To = W.requestAnimationFrame) || di)(ci)), t.__H.__.some(function(r) {
    r.u && (r.__H = r.u), r.u = void 0;
  })), Ar = F = null;
}, W.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.some(Wt), r.__h = r.__h.filter(function(o) {
        return !o.__ || Dr(o);
      });
    } catch (o) {
      t.some(function(n) {
        n.__h && (n.__h = []);
      }), t = [], W.__e(o, r.__v);
    }
  }), Bo && Bo(e, t);
}, W.unmount = function(e) {
  Qo && Qo(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.some(function(o) {
    try {
      Wt(o);
    } catch (n) {
      t = n;
    }
  }), r.__H = void 0, t && W.__e(t, r.__v));
};
var Do = typeof requestAnimationFrame == "function";
function di(e) {
  var t, r = function() {
    clearTimeout(o), Do && cancelAnimationFrame(t), setTimeout(e);
  }, o = setTimeout(r, 35);
  Do && (t = requestAnimationFrame(r));
}
function Wt(e) {
  var t = F, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), F = t;
}
function Dr(e) {
  var t = F;
  e.__c = e.__(), F = t;
}
function ao(e, t) {
  return !e || e.length !== t.length || t.some(function(r, o) {
    return !Lr(r, e[o]);
  });
}
function Jn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const zo = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), o = (u, p) => {
    const m = typeof u == "function" ? u(t) : u;
    if (!Object.is(m, t)) {
      const d = t;
      t = p ?? (typeof m != "object" || m === null) ? m : Object.assign({}, t, m), r.forEach((g) => g(t, d));
    }
  }, n = () => t, l = { setState: o, getState: n, getInitialState: () => c, subscribe: (u) => (r.add(u), () => r.delete(u)) }, c = t = e(o, n, l);
  return l;
}, Kn = ((e) => e ? zo(e) : zo);
function Xn(e, t) {
  var r = t(), o = O({ t: { __: r, u: t } }), n = o[0].t, i = o[1];
  return Ke(function() {
    n.__ = r, n.u = t, wr(n) && i({ t: n });
  }, [e, r, t]), S(function() {
    return wr(n) && i({ t: n }), e(function() {
      wr(n) && i({ t: n });
    });
  }, [e]), r;
}
function wr(e) {
  try {
    return !Object.is(e.__, e.u());
  } catch {
    return !0;
  }
}
function io(e) {
  e();
}
function qn(e) {
  return e;
}
function Yn() {
  return [!1, io];
}
var Zn = Ke, so = Object.assign;
function zr(e, t) {
  for (var r in e) if (r !== "__source" && !(r in t)) return !0;
  for (var o in t) if (o !== "__source" && e[o] !== t[o]) return !0;
  return !1;
}
var ui = /^(-|f[lo].*[^se]$|g.{5,}[^ps]$|z|o[pr]|(W.{5})?[lL]i.*(t|mp)$|an|(bo|s).{4}Im|sca|m.{6}[ds]|ta|c.*[st]$|wido|ini)/;
function Mr(e, t) {
  this.props = e, this.context = t;
}
function pi(e, t) {
  function r(n) {
    var i = this.props.ref, s = i == n.ref;
    return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, n) || !s : zr(this.props, n);
  }
  function o(n) {
    return this.shouldComponentUpdate = r, Ne(e, n);
  }
  return o.displayName = "Memo(" + (e.displayName || e.name) + ")", o.prototype.isReactComponent = !0, o.type = e, o;
}
(Mr.prototype = new Te()).isPureReactComponent = !0, Mr.prototype.shouldComponentUpdate = function(e, t) {
  return zr(this.props, e) || zr(this.state, t);
};
var hi = /* @__PURE__ */ Symbol.for("react.forward_ref");
function mi(e) {
  function t(r) {
    var o = so({}, r);
    return delete o.ref, e(o, r.ref || null);
  }
  return t.$$typeof = hi, t.render = e, t.prototype.isReactComponent = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Mo = function(e, t, r) {
  return e == null ? null : Be(Be(e).map(t.bind(r)));
}, gi = { map: Mo, forEach: Mo, count: function(e) {
  return e ? Be(e).length : 0;
}, only: function(e) {
  var t = Be(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: Be }, fi = T.__e;
T.__e = function(e, t, r, o) {
  if (e.then) {
    for (var n, i = t; i = i.__; ) if ((n = i.__c) && n.__c) return t.__e == null && (t.__e = r.__e, t.__k = r.__k), n.__c(e, t);
  }
  fi(e, t, r, o);
};
var Fo = T.unmount;
function $n(e, t, r) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(o) {
    typeof o.__c == "function" && o.__c();
  }), e.__c.__H = null), (e = so({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t), e.__c.__g |= 4, e.__c = null), e.__k = e.__k && e.__k.map(function(o) {
    return $n(o, t, r);
  })), e;
}
function ea(e, t, r) {
  return e && r && (typeof e.type == "string" && (e.__u |= 1), e.__v = null, e.__k = e.__k && e.__k.map(function(o) {
    return ea(o, t, r);
  }), e.__c && e.__c.__P === t && (e.__e && r.appendChild(e.__e), e.__c.__g |= 4, e.__c.__P = r)), e;
}
function Gt() {
  this.__u = 0, this.o = null, this.__b = null;
}
function bi(e) {
  var t, r, o, n = null;
  function i(s) {
    if (t || (t = e()).then(function(l) {
      l && (n = l.default || l), o = !0;
    }, function(l) {
      r = l, o = !0;
    }), r) throw r;
    if (!o) throw t;
    return n ? Ne(n, s) : null;
  }
  return i.displayName = "Lazy", i;
}
function vi(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Ai(e) {
  var t = this, r = e.i;
  if (t.componentWillUnmount = function() {
    it(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== r && t.componentWillUnmount(), !t.l) {
    for (var o = t.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    t.i = r, t.l = { nodeType: 1, parentNode: r, childNodes: [], __k: { __m: o.__m }, ownerDocument: r.ownerDocument, namespaceURI: r.namespaceURI, insertBefore: function(n, i) {
      this.childNodes.push(n), t.i.insertBefore(n, i);
    } };
  }
  it(Ne(vi, { context: t.context }, e.__v), t.l);
}
function lo(e, t) {
  var r = Ne(Ai, { __v: e, i: t });
  return r.containerInfo = t, r;
}
T.unmount = function(e) {
  var t = e.__c;
  t && (t.__z = !0), t && t.__R && t.__R(), Fo && Fo(e);
}, (Gt.prototype = new Te()).__c = function(e, t) {
  var r = t.__c, o = this;
  o.o == null && (o.o = []), o.o.push(r);
  var n = !1, i = function() {
    n || o.__z || (n = !0, r.__R = null, l());
  };
  r.__R = i;
  var s = r.__P;
  r.__P = null;
  var l = function() {
    if (!--o.__u) {
      if (o.state.__a) {
        var c = o.state.__a;
        o.__v.__k[0] = ea(c, c.__c.__P, c.__c.__O);
      }
      var u;
      for (o.setState({ __a: o.__b = null }); u = o.o.pop(); ) u.__P = s, u.forceUpdate();
    }
  };
  o.__u++ || 32 & t.__u || o.setState({ __a: o.__b = o.__v.__k[0] }), e.then(i, i);
}, Gt.prototype.componentWillUnmount = function() {
  this.o = [];
}, Gt.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), o = this.__v.__k[0].__c;
      this.__v.__k[0] = $n(this.__b, r, o.__O = o.__P);
    }
    this.__b = null;
  }
  return [Ne(Q, null, t.__a ? null : e.children), t.__a && Ne(Q, null, e.fallback)];
};
var ta = /* @__PURE__ */ Symbol.for("react.element"), wi = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, yi = /[A-Z0-9]/g, xi = typeof document < "u", ki = function(e) {
  return /fil|che|rad/.test(e);
};
function _i(e, t, r) {
  return t.__k == null && (t.textContent = ""), it(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
function Si(e, t, r) {
  return ii(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
Te.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(Te.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Vo = T.event;
function Ci() {
}
function Ei() {
  return this.cancelBubble;
}
function Ri() {
  return this.defaultPrevented;
}
T.event = function(e) {
  return Vo && (e = Vo(e)), e.persist = Ci, e.isPropagationStopped = Ei, e.isDefaultPrevented = Ri, e.nativeEvent = e;
};
var co, Pi = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, jo = T.vnode;
T.vnode = function(e) {
  if (typeof e.type == "string") (function(o) {
    var n = o.props, i = o.type, s = {}, l = i.indexOf("-") === -1;
    for (var c in n) {
      var u = n[c];
      if (!(c === "value" && "defaultValue" in n && u == null || xi && c === "children" && i === "noscript" || c === "class" || c === "className")) {
        if (c === "style" && typeof u == "object") for (var p in u) typeof u[p] != "number" || ui.test(p) || (u[p] += "px");
        else if (c === "defaultValue" && "value" in n && n.value == null) c = "value";
        else if (c === "download" && u === !0) u = "";
        else if (c === "translate" && u === "no") u = !1;
        else if (c[0] === "o" && c[1] === "n") {
          var m = c.toLowerCase();
          m === "ondoubleclick" ? c = "ondblclick" : m !== "onchange" || i !== "input" && i !== "textarea" || ki(n.type) ? m === "onfocus" ? c = "onfocusin" : m === "onblur" && (c = "onfocusout") : m = c = "oninput", m === "oninput" && s[c = m] && (c = "oninputCapture");
        } else l && wi.test(c) ? c = c.replace(yi, "-$&").toLowerCase() : u === null && (u = void 0);
        s[c] = u;
      }
    }
    i == "select" && s.multiple && Array.isArray(s.value) && (s.value = Be(n.children).forEach(function(d) {
      d.props.selected = s.value.indexOf(d.props.value) != -1;
    })), i == "select" && s.defaultValue != null && (s.value = Be(n.children).forEach(function(d) {
      d.props.selected = s.multiple ? s.defaultValue.indexOf(d.props.value) != -1 : s.defaultValue == d.props.value;
    })), n.class && !n.className ? (s.class = n.class, Object.defineProperty(s, "className", Pi)) : n.className && (s.class = s.className = n.className), o.props = s;
  })(e);
  else if (typeof e.type == "function" && ("ref" in e.props && "prototype" in e.type && e.type.prototype.render && (e.ref = e.props.ref, delete e.props.ref), e.type.defaultProps)) {
    var t = so({}, e.props);
    for (var r in e.type.defaultProps) t[r] === void 0 && (t[r] = e.type.defaultProps[r]);
    e.props = t;
  }
  e.$$typeof = ta, jo && jo(e);
};
var Wo = T.__r;
T.__r = function(e) {
  Wo && Wo(e), co = e.__c;
};
var Go = T.diffed;
T.diffed = function(e) {
  Go && Go(e);
  var t = e.props, r = e.__e;
  r != null && e.type === "textarea" && "value" in t && t.value !== r.value && (r.value = t.value == null ? "" : t.value), co = null;
};
var Ii = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return co.__n[e.__c].props.value;
}, useCallback: _e, useContext: xe, useDebugValue: Gn, useDeferredValue: qn, useEffect: S, useId: Hn, useImperativeHandle: Wn, useInsertionEffect: Zn, useLayoutEffect: Ke, useMemo: M, useReducer: no, useRef: te, useState: O, useSyncExternalStore: Xn, useTransition: Yn } } };
function Ti(e) {
  return Ne.bind(null, e);
}
function sr(e) {
  return !!e && e.$$typeof === ta;
}
function Ni(e) {
  return sr(e) && e.type === Q;
}
function Oi(e) {
  return !!e && typeof e.displayName == "string" && e.displayName.startsWith("Memo(");
}
function Ui(e) {
  return sr(e) ? si.apply(null, arguments) : e;
}
function Bi(e) {
  return !!e.__k && (it(null, e), !0);
}
function Qi(e) {
  return e && (e.__v && e.__v.__e || e.nodeType === 1 && e) || null;
}
var Li = function(e, t) {
  return e(t);
};
function Di(e, t) {
  return e(t);
}
var zi = Q, Mi = sr, bt = { useState: O, useId: Hn, useReducer: no, useEffect: S, useLayoutEffect: Ke, useInsertionEffect: Zn, useTransition: Yn, useDeferredValue: qn, useSyncExternalStore: Xn, startTransition: io, useRef: te, useImperativeHandle: Wn, useMemo: M, useCallback: _e, useContext: xe, useDebugValue: Gn, version: "18.3.1", Children: gi, render: _i, hydrate: Si, unmountComponentAtNode: Bi, createPortal: lo, createElement: Ne, createContext: Je, createFactory: Ti, cloneElement: Ui, createRef: ei, Fragment: Q, isValidElement: sr, isElement: Mi, isFragment: Ni, isMemo: Oi, findDOMNode: Qi, Component: Te, PureComponent: Mr, memo: pi, forwardRef: mi, flushSync: Li, unstable_batchedUpdates: Di, StrictMode: zi, Suspense: Gt, lazy: bi, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ii };
const Fi = (e) => e;
function ra(e, t = Fi) {
  const r = bt.useSyncExternalStore(
    e.subscribe,
    bt.useCallback(() => t(e.getState()), [e, t]),
    bt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return bt.useDebugValue(r), r;
}
const Ho = (e) => {
  const t = Kn(e), r = (o) => ra(t, o);
  return Object.assign(r, t), r;
}, fe = ((e) => e ? Ho(e) : Ho), Ht = fe()(() => ({ path: "", version: "" })), oa = () => (S(() => {
  const e = Ht.getState();
  e.path && e.version || Ht.setState({
    path: window?.VLibrasWidget?.path ?? "./",
    version: "7.0.0-alpha.0"
  });
}, []), Ht());
function uo(e, t) {
  const r = te(null);
  return (o) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => e(o), t);
  };
}
const Vi = (e) => {
  const [t, r] = O(!1);
  return S(() => {
    function o(i) {
      r(i.matches);
    }
    const n = matchMedia(e);
    return n.addEventListener("change", o), r(n.matches), () => n.removeEventListener("change", o);
  }, [e]), t;
}, Fr = fe()(() => ({ isExpanded: !1 })), ee = () => {
  const e = Fr((t) => t.isExpanded);
  return Vi("(max-width: 640px)") && !e;
}, ji = {
  get: Fr.getState,
  set: Fr.setState
}, Jo = (e) => Symbol.iterator in e, Ko = (e) => (
  // HACK: avoid checking entries type
  "entries" in e
), Xo = (e, t) => {
  const r = e instanceof Map ? e : new Map(e.entries()), o = t instanceof Map ? t : new Map(t.entries());
  if (r.size !== o.size)
    return !1;
  for (const [n, i] of r)
    if (!o.has(n) || !Object.is(i, o.get(n)))
      return !1;
  return !0;
}, Wi = (e, t) => {
  const r = e[Symbol.iterator](), o = t[Symbol.iterator]();
  let n = r.next(), i = o.next();
  for (; !n.done && !i.done; ) {
    if (!Object.is(n.value, i.value))
      return !1;
    n = r.next(), i = o.next();
  }
  return !!n.done && !!i.done;
};
function Gi(e, t) {
  return Object.is(e, t) ? !0 : typeof e != "object" || e === null || typeof t != "object" || t === null || Object.getPrototypeOf(e) !== Object.getPrototypeOf(t) ? !1 : Jo(e) && Jo(t) ? Ko(e) && Ko(t) ? Xo(e, t) : Wi(e, t) : Xo(
    { entries: () => Object.entries(e) },
    { entries: () => Object.entries(t) }
  );
}
function Hi(e) {
  const t = bt.useRef(void 0);
  return (r) => {
    const o = e(r);
    return Gi(t.current, o) ? t.current : t.current = o;
  };
}
function yr(e, ...t) {
  const r = { ...e };
  for (const o of t) delete r[o];
  return r;
}
function lr(e, ...t) {
  const r = {};
  for (const o of t) r[o] = e[o];
  return r;
}
const Ji = (e) => e.replace(new RegExp("(?<!:)\\/+", "g"), "/"), na = () => Math.random().toString(36).slice(2, 8), X = (...e) => {
  const t = M(() => (r) => lr(r, ...e), [JSON.stringify(e)]);
  return Hi(t);
}, xr = "@vlibras-theme", Ki = (e) => ["light", "dark"].includes(e), wt = fe((e) => ({
  theme: (() => {
    const t = localStorage.getItem(xr) || "";
    return Ki(t) ? t : "light";
  })(),
  toggleTheme: () => e((t) => {
    const r = t.theme === "dark" ? "light" : "dark";
    return localStorage.setItem(xr, r), { theme: r, isDark: r === "dark" };
  }),
  setTheme: (t) => {
    localStorage.setItem(xr, t), e({ theme: t });
  }
})), mt = "vlibras-app-root", kr = {}, Zt = {}, Xi = () => {
  if (!kr[mt]) {
    let o = document.getElementById(mt);
    o || (o = document.createElement("div"), o.id = mt, o.style.zIndex = "2147483647", document.body.appendChild(o)), kr[mt] = o;
  }
  const e = kr[mt], t = e.shadowRoot || e.attachShadow({ mode: "open" });
  return { root: e, shadowRoot: t, isRootActive: () => e.getAttribute("data-active") === "true" };
}, aa = (e, t, r) => {
  const o = Zt[t];
  if (o) return o;
  const n = document.createElement("style");
  n.id = t, n.innerHTML = e, Zt[t] = n, document.head.appendChild(n);
}, qi = (e) => {
  const t = Zt[e];
  t && (document.head.removeChild(t), delete Zt[e]);
}, Yi = async (e, t) => {
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
    await Zi(r, (o) => {
      t.adoptedStyleSheets = [...t.adoptedStyleSheets, ...o];
    });
  } catch (o) {
    console.error("Error loading default font:", o);
  }
}, Zi = async (e, t) => {
  await Promise.all(e.map((r) => r.load())), e.forEach((r) => document.fonts.add(r)), t && t(document.adoptedStyleSheets);
};
function ia(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = ia(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function sa() {
  for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = ia(e)) && (o && (o += " "), o += t);
  return o;
}
const $i = (e, t) => {
  const r = new Array(e.length + t.length);
  for (let o = 0; o < e.length; o++)
    r[o] = e[o];
  for (let o = 0; o < t.length; o++)
    r[e.length + o] = t[o];
  return r;
}, es = (e, t) => ({
  classGroupId: e,
  validator: t
}), la = (e = /* @__PURE__ */ new Map(), t = null, r) => ({
  nextPart: e,
  validators: t,
  classGroupId: r
}), $t = "-", qo = [], ts = "arbitrary..", rs = (e) => {
  const t = ns(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (s) => {
      if (s.startsWith("[") && s.endsWith("]"))
        return os(s);
      const l = s.split($t), c = l[0] === "" && l.length > 1 ? 1 : 0;
      return ca(l, c, t);
    },
    getConflictingClassGroupIds: (s, l) => {
      if (l) {
        const c = o[s], u = r[s];
        return c ? u ? $i(u, c) : c : u || qo;
      }
      return r[s] || qo;
    }
  };
}, ca = (e, t, r) => {
  if (e.length - t === 0)
    return r.classGroupId;
  const n = e[t], i = r.nextPart.get(n);
  if (i) {
    const u = ca(e, t + 1, i);
    if (u) return u;
  }
  const s = r.validators;
  if (s === null)
    return;
  const l = t === 0 ? e.join($t) : e.slice(t).join($t), c = s.length;
  for (let u = 0; u < c; u++) {
    const p = s[u];
    if (p.validator(l))
      return p.classGroupId;
  }
}, os = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), r = t.indexOf(":"), o = t.slice(0, r);
  return o ? ts + o : void 0;
})(), ns = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e;
  return as(r, t);
}, as = (e, t) => {
  const r = la();
  for (const o in e) {
    const n = e[o];
    po(n, r, o, t);
  }
  return r;
}, po = (e, t, r, o) => {
  const n = e.length;
  for (let i = 0; i < n; i++) {
    const s = e[i];
    is(s, t, r, o);
  }
}, is = (e, t, r, o) => {
  if (typeof e == "string") {
    ss(e, t, r);
    return;
  }
  if (typeof e == "function") {
    ls(e, t, r, o);
    return;
  }
  cs(e, t, r, o);
}, ss = (e, t, r) => {
  const o = e === "" ? t : da(t, e);
  o.classGroupId = r;
}, ls = (e, t, r, o) => {
  if (ds(e)) {
    po(e(o), t, r, o);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(es(r, e));
}, cs = (e, t, r, o) => {
  const n = Object.entries(e), i = n.length;
  for (let s = 0; s < i; s++) {
    const [l, c] = n[s];
    po(c, da(t, l), r, o);
  }
}, da = (e, t) => {
  let r = e;
  const o = t.split($t), n = o.length;
  for (let i = 0; i < n; i++) {
    const s = o[i];
    let l = r.nextPart.get(s);
    l || (l = la(), r.nextPart.set(s, l)), r = l;
  }
  return r;
}, ds = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, us = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  const n = (i, s) => {
    r[i] = s, t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(i) {
      let s = r[i];
      if (s !== void 0)
        return s;
      if ((s = o[i]) !== void 0)
        return n(i, s), s;
    },
    set(i, s) {
      i in r ? r[i] = s : n(i, s);
    }
  };
}, Vr = "!", Yo = ":", ps = [], Zo = (e, t, r, o, n) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: r,
  maybePostfixModifierPosition: o,
  isExternal: n
}), hs = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let o = (n) => {
    const i = [];
    let s = 0, l = 0, c = 0, u;
    const p = n.length;
    for (let f = 0; f < p; f++) {
      const b = n[f];
      if (s === 0 && l === 0) {
        if (b === Yo) {
          i.push(n.slice(c, f)), c = f + 1;
          continue;
        }
        if (b === "/") {
          u = f;
          continue;
        }
      }
      b === "[" ? s++ : b === "]" ? s-- : b === "(" ? l++ : b === ")" && l--;
    }
    const m = i.length === 0 ? n : n.slice(c);
    let d = m, g = !1;
    m.endsWith(Vr) ? (d = m.slice(0, -1), g = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      m.startsWith(Vr) && (d = m.slice(1), g = !0)
    );
    const h = u && u > c ? u - c : void 0;
    return Zo(i, g, d, h);
  };
  if (t) {
    const n = t + Yo, i = o;
    o = (s) => s.startsWith(n) ? i(s.slice(n.length)) : Zo(ps, !1, s, void 0, !0);
  }
  if (r) {
    const n = o;
    o = (i) => r({
      className: i,
      parseClassName: n
    });
  }
  return o;
}, ms = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((r, o) => {
    t.set(r, 1e6 + o);
  }), (r) => {
    const o = [];
    let n = [];
    for (let i = 0; i < r.length; i++) {
      const s = r[i], l = s[0] === "[", c = t.has(s);
      l || c ? (n.length > 0 && (n.sort(), o.push(...n), n = []), o.push(s)) : n.push(s);
    }
    return n.length > 0 && (n.sort(), o.push(...n)), o;
  };
}, gs = (e) => ({
  cache: us(e.cacheSize),
  parseClassName: hs(e),
  sortModifiers: ms(e),
  ...rs(e)
}), fs = /\s+/, bs = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: n,
    sortModifiers: i
  } = t, s = [], l = e.trim().split(fs);
  let c = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const p = l[u], {
      isExternal: m,
      modifiers: d,
      hasImportantModifier: g,
      baseClassName: h,
      maybePostfixModifierPosition: f
    } = r(p);
    if (m) {
      c = p + (c.length > 0 ? " " + c : c);
      continue;
    }
    let b = !!f, y = o(b ? h.substring(0, f) : h);
    if (!y) {
      if (!b) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (y = o(h), !y) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      b = !1;
    }
    const A = d.length === 0 ? "" : d.length === 1 ? d[0] : i(d).join(":"), v = g ? A + Vr : A, w = v + y;
    if (s.indexOf(w) > -1)
      continue;
    s.push(w);
    const N = n(y, b);
    for (let D = 0; D < N.length; ++D) {
      const V = N[D];
      s.push(v + V);
    }
    c = p + (c.length > 0 ? " " + c : c);
  }
  return c;
}, vs = (...e) => {
  let t = 0, r, o, n = "";
  for (; t < e.length; )
    (r = e[t++]) && (o = ua(r)) && (n && (n += " "), n += o);
  return n;
}, ua = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = ua(e[o])) && (r && (r += " "), r += t);
  return r;
}, As = (e, ...t) => {
  let r, o, n, i;
  const s = (c) => {
    const u = t.reduce((p, m) => m(p), e());
    return r = gs(u), o = r.cache.get, n = r.cache.set, i = l, l(c);
  }, l = (c) => {
    const u = o(c);
    if (u)
      return u;
    const p = bs(c, r);
    return n(c, p), p;
  };
  return i = s, (...c) => i(vs(...c));
}, ws = [], Z = (e) => {
  const t = (r) => r[e] || ws;
  return t.isThemeGetter = !0, t;
}, pa = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ha = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ys = /^\d+\/\d+$/, xs = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ks = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, _s = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Ss = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Cs = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, et = (e) => ys.test(e), I = (e) => !!e && !Number.isNaN(Number(e)), Ue = (e) => !!e && Number.isInteger(Number(e)), _r = (e) => e.endsWith("%") && I(e.slice(0, -1)), Pe = (e) => xs.test(e), Es = () => !0, Rs = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ks.test(e) && !_s.test(e)
), ma = () => !1, Ps = (e) => Ss.test(e), Is = (e) => Cs.test(e), Ts = (e) => !k(e) && !_(e), Ns = (e) => ct(e, ba, ma), k = (e) => pa.test(e), Fe = (e) => ct(e, va, Rs), Sr = (e) => ct(e, Ls, I), $o = (e) => ct(e, ga, ma), Os = (e) => ct(e, fa, Is), Dt = (e) => ct(e, Aa, Ps), _ = (e) => ha.test(e), gt = (e) => dt(e, va), Us = (e) => dt(e, Ds), en = (e) => dt(e, ga), Bs = (e) => dt(e, ba), Qs = (e) => dt(e, fa), zt = (e) => dt(e, Aa, !0), ct = (e, t, r) => {
  const o = pa.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, dt = (e, t, r = !1) => {
  const o = ha.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, ga = (e) => e === "position" || e === "percentage", fa = (e) => e === "image" || e === "url", ba = (e) => e === "length" || e === "size" || e === "bg-size", va = (e) => e === "length", Ls = (e) => e === "number", Ds = (e) => e === "family-name", Aa = (e) => e === "shadow", zs = () => {
  const e = Z("color"), t = Z("font"), r = Z("text"), o = Z("font-weight"), n = Z("tracking"), i = Z("leading"), s = Z("breakpoint"), l = Z("container"), c = Z("spacing"), u = Z("radius"), p = Z("shadow"), m = Z("inset-shadow"), d = Z("text-shadow"), g = Z("drop-shadow"), h = Z("blur"), f = Z("perspective"), b = Z("aspect"), y = Z("ease"), A = Z("animate"), v = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], w = () => [
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
  ], N = () => [...w(), _, k], D = () => ["auto", "hidden", "clip", "visible", "scroll"], V = () => ["auto", "contain", "none"], x = () => [_, k, c], L = () => [et, "full", "auto", ...x()], ie = () => [Ue, "none", "subgrid", _, k], ae = () => ["auto", {
    span: ["full", Ue, _, k]
  }, Ue, _, k], J = () => [Ue, "auto", _, k], he = () => ["auto", "min", "max", "fr", _, k], oe = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], se = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], Ae = () => ["auto", ...x()], Re = () => [et, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...x()], E = () => [e, _, k], Ut = () => [...w(), en, $o, {
    position: [_, k]
  }], Bt = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Qt = () => ["auto", "cover", "contain", Bs, Ns, {
    size: [_, k]
  }], qe = () => [_r, gt, Fe], Y = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    _,
    k
  ], le = () => ["", I, gt, Fe], Ye = () => ["solid", "dashed", "dotted", "double"], Ze = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], j = () => [I, _r, en, $o], pt = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    h,
    _,
    k
  ], Me = () => ["none", I, _, k], $e = () => ["none", I, _, k], ht = () => [I, _, k], B = () => [et, "full", ...x()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Pe],
      breakpoint: [Pe],
      color: [Es],
      container: [Pe],
      "drop-shadow": [Pe],
      ease: ["in", "out", "in-out"],
      font: [Ts],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Pe],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Pe],
      shadow: [Pe],
      spacing: ["px", I],
      text: [Pe],
      "text-shadow": [Pe],
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
        aspect: ["auto", "square", et, k, _, b]
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
        columns: [I, k, _, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": v()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": v()
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
        object: N()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: V()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": V()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": V()
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
        z: [Ue, "auto", _, k]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [et, "full", "auto", l, ...x()]
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
        flex: [I, et, "auto", "initial", "none", k]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", I, _, k]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", I, _, k]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ue, "first", "last", "none", _, k]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": ie()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ae()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": J()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": J()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": ie()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ae()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": J()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": J()
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
        "auto-cols": he()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": he()
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
        justify: [...oe(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...se(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...se()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...oe()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...se(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...se(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": oe()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...se(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...se()]
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
        m: Ae()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: Ae()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: Ae()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: Ae()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: Ae()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: Ae()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: Ae()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: Ae()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: Ae()
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
        size: Re()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...Re()]
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
          ...Re()
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
          ...Re()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Re()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Re()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Re()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, gt, Fe]
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
        font: [o, _, Sr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", _r, k]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Us, k, t]
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
        "line-clamp": [I, "none", _, Sr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
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
        placeholder: E()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: E()
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
        decoration: [...Ye(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [I, "from-font", "auto", _, Fe]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: E()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [I, "auto", _, k]
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
        bg: Ut()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Bt()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Qt()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ue, _, k],
          radial: ["", _, k],
          conic: [Ue, _, k]
        }, Qs, Os]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: E()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: qe()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: qe()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: qe()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: E()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: E()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: E()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: Y()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Y()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Y()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Y()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Y()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Y()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Y()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Y()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Y()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Y()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Y()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Y()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Y()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Y()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Y()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: le()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": le()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": le()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": le()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": le()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": le()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": le()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": le()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": le()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": le()
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
        "divide-y": le()
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
        border: [...Ye(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Ye(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: E()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": E()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": E()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": E()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": E()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": E()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": E()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": E()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": E()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: E()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Ye(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [I, _, k]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", I, gt, Fe]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: E()
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
          zt,
          Dt
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: E()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", m, zt, Dt]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": E()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: le()
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
        ring: E()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [I, Fe]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": E()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": le()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": E()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", d, zt, Dt]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": E()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [I, _, k]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Ze(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Ze()
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
        "mask-linear": [I]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": j()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": j()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": E()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": E()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": j()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": j()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": E()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": E()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": j()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": j()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": E()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": E()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": j()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": j()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": E()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": E()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": j()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": j()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": E()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": E()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": j()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": j()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": E()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": E()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": j()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": j()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": E()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": E()
      }],
      "mask-image-radial": [{
        "mask-radial": [_, k]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": j()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": j()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": E()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": E()
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
        "mask-radial-at": w()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [I]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": j()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": j()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": E()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": E()
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
        mask: Ut()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Bt()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Qt()
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
        blur: pt()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [I, _, k]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [I, _, k]
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
          zt,
          Dt
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": E()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", I, _, k]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [I, _, k]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", I, _, k]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [I, _, k]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", I, _, k]
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
        "backdrop-blur": pt()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [I, _, k]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [I, _, k]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", I, _, k]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [I, _, k]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", I, _, k]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [I, _, k]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [I, _, k]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", I, _, k]
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
        duration: [I, "initial", _, k]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, _, k]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [I, _, k]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", A, _, k]
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
        perspective: [f, _, k]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": N()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Me()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Me()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Me()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Me()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: $e()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": $e()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": $e()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": $e()
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
        skew: ht()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ht()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ht()
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
        origin: N()
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
        translate: B()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": B()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": B()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": B()
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
        accent: E()
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
        caret: E()
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
        fill: ["none", ...E()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [I, gt, Fe, Sr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...E()]
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
}, Ms = /* @__PURE__ */ As(zs);
function C(...e) {
  return Ms(sa(e));
}
const Fs = () => /* @__PURE__ */ a("div", { className: "absolute bottom-15 left-1/2 grid -translate-x-1/2 animate-move-up place-content-center rounded-full border bg-background p-0.5 pr-2", children: /* @__PURE__ */ a("span", { className: "flex items-center gap-1 font-semibold text-xs", children: [
  /* @__PURE__ */ a("span", { className: "loading loading-spinner loading-xs" }),
  "Traduzindo..."
] }) });
function cr(e, t) {
  let r;
  try {
    r = e();
  } catch {
    return;
  }
  return {
    getItem: (n) => {
      var i;
      const s = (c) => c === null ? null : JSON.parse(c, void 0), l = (i = r.getItem(n)) != null ? i : null;
      return l instanceof Promise ? l.then(s) : s(l);
    },
    setItem: (n, i) => r.setItem(n, JSON.stringify(i, void 0)),
    removeItem: (n) => r.removeItem(n)
  };
}
const jr = (e) => (t) => {
  try {
    const r = e(t);
    return r instanceof Promise ? r : {
      then(o) {
        return jr(o)(r);
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
        return jr(o)(r);
      }
    };
  }
}, Vs = (e, t) => (r, o, n) => {
  let i = {
    storage: cr(() => window.localStorage),
    partialize: (b) => b,
    version: 0,
    merge: (b, y) => ({
      ...y,
      ...b
    }),
    ...t
  }, s = !1, l = 0;
  const c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  let p = i.storage;
  if (!p)
    return e(
      (...b) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), r(...b);
      },
      o,
      n
    );
  const m = () => {
    const b = i.partialize({ ...o() });
    return p.setItem(i.name, {
      state: b,
      version: i.version
    });
  }, d = n.setState;
  n.setState = (b, y) => (d(b, y), m());
  const g = e(
    (...b) => (r(...b), m()),
    o,
    n
  );
  n.getInitialState = () => g;
  let h;
  const f = () => {
    var b, y;
    if (!p) return;
    const A = ++l;
    s = !1, c.forEach((w) => {
      var N;
      return w((N = o()) != null ? N : g);
    });
    const v = ((y = i.onRehydrateStorage) == null ? void 0 : y.call(i, (b = o()) != null ? b : g)) || void 0;
    return jr(p.getItem.bind(p))(i.name).then((w) => {
      if (w)
        if (typeof w.version == "number" && w.version !== i.version) {
          if (i.migrate) {
            const N = i.migrate(
              w.state,
              w.version
            );
            return N instanceof Promise ? N.then((D) => [!0, D]) : [!0, N];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, w.state];
      return [!1, void 0];
    }).then((w) => {
      var N;
      if (A !== l)
        return;
      const [D, V] = w;
      if (h = i.merge(
        V,
        (N = o()) != null ? N : g
      ), r(h, !0), D)
        return m();
    }).then(() => {
      A === l && (v?.(h, void 0), h = o(), s = !0, u.forEach((w) => w(h)));
    }).catch((w) => {
      A === l && v?.(void 0, w);
    });
  };
  return n.persist = {
    setOptions: (b) => {
      i = {
        ...i,
        ...b
      }, b.storage && (p = b.storage);
    },
    clearStorage: () => {
      p?.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => f(),
    hasHydrated: () => s,
    onHydrate: (b) => (c.add(b), () => {
      c.delete(b);
    }),
    onFinishHydration: (b) => (u.add(b), () => {
      u.delete(b);
    })
  }, i.skipHydration || f(), h || g;
}, dr = Vs, ne = {
  PLAYER: "PlayerManager",
  EMOTION: "EmotionBridge",
  CUSTOMIZATION: "CustomizationBridge"
}, G = {
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
  // APPLY_DOUBT_EMOTION: "ApplyDoubtEmotion",
  APPLY_ANGRY_EMOTION: "ApplyAngryEmotion",
  APPLY_DISGUST_EMOTION: "ApplyDisgustEmotion",
  APPLY_FEAR_EMOTION: "ApplyFearEmotion",
  APPLY_SURPRISE_EMOTION: "ApplySurpriseEmotion",
  SET_SUBTITLE_COLOR: "SetSubtitleColor",
  SET_SUBTITLE_OUTLINE_COLOR: "SetSubtitleOutlineColor",
  SET_SUBTITLE_SHADOW_COLOR: "SetSubtitleShadowColor"
}, ft = {
  ON_LOAD_PLAYER: "on_load_player",
  ON_PLAYING_STATE_CHANGE: "on_playing_state_change",
  COUNTER_GLOSS: "counter_gloss",
  UPDATE_PROGRESS: "update_progress",
  FINISH_WELCOME: "finish_welcome"
}, Wr = {
  default: {
    name: "Padrão",
    action: G.APPLY_DEFAULT_EMOTION,
    icon: "emotions/default",
    intensity: 2
  },
  happy: {
    name: "Feliz",
    action: G.APPLY_HAPPY_EMOTION,
    icon: "emotions/happy",
    intensity: 2
  },
  sad: {
    name: "Triste",
    action: G.APPLY_SAD_EMOTION,
    icon: "emotions/sad",
    intensity: 2
  },
  angry: {
    name: "Raiva",
    action: G.APPLY_ANGRY_EMOTION,
    icon: "emotions/angry",
    intensity: 2
  },
  disgust: {
    name: "Nojo",
    action: G.APPLY_DISGUST_EMOTION,
    icon: "emotions/disgust",
    intensity: 2
  },
  fear: {
    name: "Medo",
    action: G.APPLY_FEAR_EMOTION,
    icon: "emotions/fear",
    intensity: 2
  },
  surprise: {
    name: "Surpresa",
    action: G.APPLY_SURPRISE_EMOTION,
    icon: "emotions/surprise",
    intensity: 2
  }
}, js = "data:image/webp;base64,UklGRowEAABXRUJQVlA4WAoAAAAQAAAAYgAAHAAAQUxQSEUAAAABf6AmkiTlKDz/ys4Ff4w2IiLwqSAj2f11fG0orbadSr/7nR1VTTaDZBRr6EawyJeFiP5PQOvolUpEH+qHMxf6NueiPw8AVlA4ICAEAADwFACdASpjAB0APpE2mEiloqIhK3zLiLASCWgAnTlBVF5afnvxAwc7Yt+r0Af9jdic8N/ef1V6//qKPQA8tf2h/8ZggH851GBnZFKO30ou+O/kvQDjM7/vwrz1+fdnheo+A76Lh2EGC4qM4+5YgsrQ/JrrviDEu4MGK72ZP5Ykbi9zy2NsoTfjvgUJG0+J/c6QRQ7RStZIEyTIUq7Utu/rdvjsPsY9lWHx/zuSO9RfAAD8ZMnHu8+8p0PaYWBM5qEfpidBxUbM/kcBTzu9/nkDkE3f1uXCM31SXicKWuyq/yPLa+n9siDbv3lNfz7AQ9etNEKWIjjFKB+eRHQfk9L6Y6JprDOs//drypVgTy+LL30dWe/71f/+HpHKW6/mf/xIU/qdVjTlyIAjPc/Ll/tkRJkXjRwNyE7jR6/OO3Pttar1WM7qNGYExxO7gfN9gREnQc2gSzpJxlQtfEtC5QJPNtA9OqwfanmFiXz5WG6Ue8ddkvl1on5louk9jmgqm5qR7yPbgGQCcxF7pDnyvvlPzjjySx5XB1e6S2a/GT6+hA7XxbUwVCDS9xx64o/BqGXaIvaZIBEsb75fBqc+mp0jlFaD8ktz9sQWk3ei547egWZ8IW5tnCntZX/GpBU4AQfYXc/mPRnu24g1RHG44diSG+dNiXQwZ3rMm2DDoAb3YDL8CVr63pCqoF/RjV0bgPAg7KvyTVzvmo4WRmf+SsUVbU/z/OVQPAGMgFZB3sNiTKiP9PVP0E2oBqsKUHR8Jn5Zjn05dTzE53Q4RhfvakzLjR8jDMKIxtE+sZ4O3PsvpR8Bo5Z2IyiPOmcqn80CA+7fdv+Hd0B7UPWQqmvSaRogHsFx4XFiXC+r5SEKltOPnYQhZR0eKPW8XIgBzLVtRa08n7lXfjeQcHiMMaP8/8VfGfFnvd5/m7mgtCp3KdztSNp4vbgt23+ieOLeeNovw/Gn9HYYLB9x4SfsQXj+Az0VjPKuN31sMMhd0g6SLNf2O7PY/3N/7jBNJbk78umxdSLa51wLuk+88jmFdZfjeqlDzEgIFG0doHSI9tv4/Ff+j0yizXuWiLl3QDkyg6BiQBwdsv0n0Q+mQ9JKpoCFqYMPvs+H1US7v5jzqDqVWXOYC+FvAICJ1d78R4m5gzbRKAfHB89hEsV/kKsx/fUMRohRQ11HJlflMxdB1DEX/ynt2hBHX5rQ989Ol/7e4Z3Bz26XnJFQfLXH5xLAsQUBD/VKjEfFvFLYCUNd8nYh9zMZXbmDk/CUuPMNXbH8Jgu+UgbXM5OnuIdR/KqJ0YmQssV0mS0+oXZotGCojbFhUyeZ78XJjfEx7KOVElTTW55eVMzk6e+PCBRhX0QtZPTImE/KG+HzgdsXXAQLDb5KDKVRBGeLTiCksnIOJqoVWFnwAAA=", Ws = "data:image/webp;base64,UklGRlQBAABXRUJQVlA4IEgBAADQCACdASooABoAPn0yk0ekoyGhOrmYAJAPiWwAtSFBOz/lfygdMTvH3Vw3FgA3AG6Af5XqAN4z/ZsjVhLP5OrIHmKxkAHD1v22t4aUQTcAAP738WQ4mfTH2Bvfl5ovYkE7oCY+9iENkF7l0/SdBvGKvYZfoDGUF8qfuZA39j7pxwl/p87mI0f4NJDIswPYBSVr24bA+fRL8kSAPSoDAXpRrOHA0n3c5srZwu271nzTm6JNaDSaAKO7Kg0HHUshU8g0rjv97ys6swdkwnS3915dSJa7M5VjyyYeRx69WG+yL8XHuIQK/pX/3KobPYU7/KFRu03GD+KpoFKrytuUABf1pGAo04ZBgmaAleKZgCwIPqG5VuPew2tDU7tHcN3Q34gTvRpEdli0TVXl8tFjL5/HWO+t0z4atwt//sqm5C9f/zs6nemcAAAA", Gs = "data:image/webp;base64,UklGRjIBAABXRUJQVlA4WAoAAAAQAAAAJwAAGQAAQUxQSBUAAAABF9D/iAiQSdtERmXP+d6I/gdiOA4AVlA4IPYAAABQBgCdASooABoAPok6lkelI6IhNVgIAKARCWYApdvoeq0QDZ/85VFvX8qdv98zbMbMWf/cn3VtEgEUQAD+4uR+TT3eHyCqWsTrBreWz5CTJPD9YMxB/xTNgQolAP/2ln8jk+ftL+pZ85/zzX8nfw6DX/4Cb8L5rmhnpEyG3psf3Kyupn8/ViUbhI9Aj6Mt7sZvuX//okTCsDJ+CLM+fBcvk0QwRynUmBElxreecNtLP4ucf+2CRzaidsN5D/n9QVafXgFHtUxNmcvb1i2Ygi/e3Yz4ShVkH8+amEDfoPqYF4eu9RHKs9rGcEiV0+EaCN55cFTYAAA=", Hs = "data:image/webp;base64,UklGRvIAAABXRUJQVlA4IOYAAAAQBgCdASooABoAPpFEm0qlo6IhpWmYsBIJagC7LpzS7O2rb6otcgmJPwG5psKRRwNvQJOAFnc/qwAA/vXTJ/Nwy1aruxOHJ2IkKf73XxK7+P9W16bjDFOH7il6cvyqn6tgKSRnR3CWaCKeHMqZaJ/VFdskk0z/uDWVUWNLGljY59eFH/kW/ERfZHdZ5+d/9LD/w19wP/q++d7Nvv7xgf/YoAIlZIbWKtNXyxmmo7jc/0fNm1/3a7uocp7lkbIgmn9a3//HP6iAWY6vx4Usj4qQ6o3/SMxsQtI/pGYZQdNgqHsTGWgAAA==", Js = "data:image/webp;base64,UklGRvwAAABXRUJQVlA4IPAAAAAwBgCdASooABoAPpFCnEolo6KhqrgIALASCWwAeQP0A/FUiGNIA/QAKgaK3PJjYeKcX3p43zMzJrdkAP7PXHDQHKv/P/ERyCwvRILMwTag1Z32+Sj+lKaVlDp6cnhQnO6VBikG+MSEIdiopSPC6D0X8rrK5l///dafjLz4Pig3GYi/XcAuFZrAml+pwLx3nZmo+tCKd79hDTrSA7B04+B47U/OnsmxujR4lMB4KAvvJt74kXEwTJf7DJMc/uX4HI+55/M6xGzFOV/+DKf5N/7geKX3Znec06Z2nZLf5R9vFfEV30Xy9D7+lwv0LF+AAAA=", Ks = "data:image/webp;base64,UklGRhIBAABXRUJQVlA4IAYBAAAwBgCdASooABoAPpFGnkslo6KhpWgAsBIJbADBC9b6B+KrN/7ui9nIAzRLcn0x7ADRGM65dkl+pebAAP73gZh7nmVRYD8eZV8f+j1+p/3eHyqCvVj5Rj2g+bn8IrTSpq+V4bGy78INzZ4eUVE9VhStpmmLHe5B1oOEUVh34q2Rwyk6ILpy/yOf7F+4v/VuLdtNv/8uTHGPSG07Pe9P/f6YSDxy4/v/jI7tdHL4P9h9yb+hsanaP5/zouNlVNbj092lT6IleCGwwGB2rU0TgCGayd1+2ofw1tC7Sn01n2g0ws6oP1AUyk/6FnjWgfSwZqZ7/mZer5jX8zL1fbJ/7s4EqMGkA4AA", Xs = "data:image/webp;base64,UklGRrgBAABXRUJQVlA4IKwBAABQCgCdASooABoAPpFAm0olo6KhpWswsBIJbACdMoRwN4B+InsCVn+qvQB+rv7AcIB+wHWAegB5T3sQ/st6OpMq7uAmaKWStLBCgoLb+72zd/kengX1aHXXrBVAAP7YlIsEfxRWKqalGH7Z5RpKPBLnSBXUogzECsGf1uOMs7aJ+n0R4eoFw/jDcP+XjOWIzoOzoCatJIvNrP/Y82M1fzEX//qcXkZcIohjWNWHyhzh9zXR8IYRKfDmAuFEoKchXrhW0MT6hwBSXPP+Nny/64N3htY0zt9Dur9TyhGg80XBx+SsRhyF7IVqd2zlVEYVYJ1C6CQrfziC+Xwq4qlTEwy9ISdQnP/CIN8maAl+Nvu9ISn7q8e32Z6H92DLUVtspBk2a9t9U/kftmfKx6Np/1hhYK5Va8Nb7Dap2eb+KbNgI/XqIommVGOSk9J4X5AfST6y11jI8znn7qXNf2d3d8jMQmLQSm3E0gf0V6M5P+JhHpN6OPTUHlx3UPML6JYMSAO0uW9iGHD9yz6RypO1c+GZHQKtknfir/E1RfgNYNImrDH9uh1URjVcW8iAAA==", qs = "data:image/webp;base64,UklGRp4BAABXRUJQVlA4IJIBAABwCgCdASooABoAPpFAm0olo6IhpWswsBIJbACdMoRzt4j+G/sCVn+ly4BuAP1P3wD9jOsA9ADyoPYj/aj0aU8B7U3uhM0UsltKbvge1Fpt9ObUPzCEtOpzVgYNwAD+2JSLBH8O+osbWwFowaCEE9SfrvCMgKktOd9dpTIYiDid0Hav/MGzIJKe+V0C2tgIJ47/epi+c1ff/1OLw2fq8uZo+ybXwXGHX+UyBMyvabzilAqo1xz1pQlXVnvHXVfG1HizDQDFk7+lgYO7cVY/hZ381babA15nUJNniuLkDymCXRjkfOfAmhivG1IAKGu9x+MCuPYPgQF3a57jaWNWKVkN+zT41eII/DFFDLbT34jjiO9waWBI44LYtnYuuKZ3Fj+N2H+s+cPH+bnq/4P/fIgZnnPX0XKG6RW5JOBmWdDS7jDA/lKNPphSzRDDvmXga/2dGyJzmpRpnEnw2laB4AWS2z2HDUFNSFjzhxPD42LA/gwD8uH8lpQz/SPbxPZLjCOZd3hwYTP2pw/8+ofAhvwXwAA=", Ys = "data:image/webp;base64,UklGRtgAAABXRUJQVlA4IMwAAABwBgCdASooABoAPpE6mEeloyKhNVQIALASCWYAyiEhugLsA58D2UyIyKLrj3X7RD86FKasmpRCPr84/5AA/v33ZNkCOHDlE/FzCwTqctGriFLkm+isLD9vivqtAaa5p6DmcXiXn+8z6vG0lkbt4PapWFJCVaX6yn5fOz3FutDpZ09uDY6rB7Kn6z12j+euX+NnHUQxLQ7x9hZAkFyTw/AM2aQ12dOJhNKaeMdthWqPmx955S0qstpNp5eyjWpWjw6zeKMDsM1AMtZIAAA=", Zs = "data:image/webp;base64,UklGRuIAAABXRUJQVlA4INYAAADQBQCdASooABoAPpFAm0olo6IhqrgIALASCWwAyi/ybAPxAdADn/wGZ87DA4Lj6yqM9xV3M/VgAP0cEac/je+Sh1FODLj8RDfy3lcqrfrC6JI3N2FaPNNFz/+N4HVdxySzS//WV33WTwhhFr3BzgpqMnam28y+i7Bgecxi1RhjoINiYwbeocGqaTpAijblonAArO7dN+egUtbF/getMN1xHy3Yr5Ux/BrRKHr9jfhb/TEqiiGPEU65qGYMR8rffykT+6e6P9Uidmv8xBiLj5k8AoVtAAAA", $s = "data:image/webp;base64,UklGRn4BAABXRUJQVlA4WAoAAAAQAAAAJwAAGQAAQUxQSDAAAAABF9D/iAgoiiSpWWlIiCeNP++zmQ8MRPR/AlDfSR7YLXBZRXYnFV+TE6nsRCo5UQxWUDggKAEAAHAHAJ0BKigAGgA+kUaeSyWjoqKlaACwEglsAMjHontdLV8C38l/QDDAP0A9/+7rv1JILMF48RHcqCOf/UmxwiQ0RLMAAP6t6ZI35QyqlUPi907H+ZaD/VnS/71f/TEqtxukOB75y3JDnLNNH2yjNrE3EL0F9PODwWVnj7v/iZbh05wP67vlxqOB/9hiU69oH8SD5ZrCLoGlEYPl1xAVIB3ix4FnrqK6/iV5/7r+lw4n735bv936OgnBpuFf/6Gbh2EzP+X9pP9Df+KwZ/Pu6BSJDnmkYVcO5saoFCscZ0ASKoFVqdEX4vqcLKmPiVGI1qMRMlpIW9bPU6HaKacwCAfL+P1d9nL6P80l39n/1Am8Yz/w5T/hyMPSsy0cgJERxOyCLgPw6YAA", el = "data:image/webp;base64,UklGRiYBAABXRUJQVlA4IBoBAACQBgCdASooABoAPpFGnkslo6KipWgAsBIJbAC41oA4wHPzXdKxTOlSZwMCkneCHbWwy9j/c5ZuKj9s/i4AAP75yOaRsRx3xk4V7GfzjHTm0hqVumJ1m9HuYooVz9z3w0faILsD+Zpvy/4vDzAFAurrhB0xUS3bSrrF8jnFyBvcHNw7xiwgniuk/CzOBYO3B8IQ8a7ord/XOKiQA/D6X/8S380JReUDXuA3oYKxHTamTWkxfFvDwg3/OSBF963PRp8ijj7wCx/0/jIc9zrcSe9+oFsFaWGTtDgx0WTsoP0aJURJV/7kf+mNwTTYMFd/5kvKXnb73AfcUdIK5NebVeDW5p0nr/8I1eo3z/+Eav/9xn/y9XBwo0LwAAA=", tl = "data:image/webp;base64,UklGRiABAABXRUJQVlA4WAoAAAAQAAAAJwAAGQAAQUxQSBUAAAABD3D//4iIQDZpYz7v/9A9ov8Rdg4AVlA4IOQAAACwBgCdASooABoAPok4l0elI6IhNVgIAKARCWQAy30ALsA3lX9ZiNq3QBy0SeInqm9xedJr4q6SvfKYfN9QjAD+/i6i5H/i9CWQHcNMhFSYWc3MMEKpadN3RpXj/j/1JF3KQ9Uovmnex9f8iaZxl/A8GSzxWHYnTOlFtTF2X96ORtkAhe/7JB1W3Odi/FAX9zdk11ZCopY/gAuf5z8+//ukVxF3Ql1wbTH9TIDHqPGKp87/yQGTONpTNeHXvAn5+8JfuSIuLYW7HTAPQIPrUjb7R/i+BWyw3QNvjyl9/n/pXYWAAAA=", rl = "data:image/webp;base64,UklGRiQBAABXRUJQVlA4IBgBAAAQBwCdASooABoAPoU2lUelIyIhNVv4AKAQiWwAuzPagJ7ANwBVANsBdme8okREL3XH0Auzy46MRveLb9iO6TEcAAD+yt2+ul9a0shCB//zRcPKmTQyIauzKnrlThwS2GJABUE2iS3j74jP8nSNt9YK5//mwIuLmgLqgzyKEBmuzrz+/srwmkN2Tw+Sv3gn57O+pKiYtsr+HLbuyLyKx5PnGuDTQRQgCpSj1Gfznxyqn3WPcDI5JoksBbvoKhKxqjGA8i4n/jqFIuiGmq6S8mRvrBXFBAJ9i/ZnF4j89qtjHfiy6LdoP98/UTnfop3y6tEKEwNX34z/bmeHT3negtHUYn3/qw7/E7GT4gP69lVpdSk7Uw6AAAAA", ol = "data:image/webp;base64,UklGRqYBAABXRUJQVlA4IJoBAADQCACdASooABoAPpFAm0olo6IhpWswsBIJbADDY9b4A4wG4Y3h3eTEaCEA5OjOL9CbqATRL93FvitXUCsIf0SXpN/VlRvhbBEqIsP8b5wAAP77a+3N2M/ct0BF8mCR8oRucSzJBoODL43vMQYDUVDSrYZSTeWarXxZKb7fvibjG2LkYPe49asj13bj//4hxt5LebzIUP36kyXJf97obLg9S3IBj0hz6GUzdPyzNUqvUcaeIRdtN6CVMP7BqgW9tVxucnY+fyNRRj/Fs2KrcWZrikQyKdmMcWenO5zfk3W+KfWriKvRxFQFw5vUDn+3FX29+Lr0VtD2Ya2RyPetxn16Lmwtj9yQuek+LtLFn4f7yf8HnP0/O+++eUzZwkbWZ/lVdqEPERBfMIqimThbzIU42XTdOHOD8XDP1d04A6fvBSTMoubRIXpkOsxboJB6AtsaCfdbKJGi+86B9b/yrQI4mMc2vA7jtKNV8pqPASifz9SOkP4ljq/xruEiHmVHtzEJPeTVSWIm1Jf/D/Y9vTCcYSvLlN8b2c0AAA==", nl = "data:image/webp;base64,UklGRnQBAABXRUJQVlA4IGgBAACQCQCdASooABoAPok0lkelIqIhNVv4AKARCWwAnTL//7+n8dHuDuAeIBuAP1r3qDJQP2m9CsmUP1436o3YTfU4jP0lf8RB7beujkwtSzEPjkQYloJAAP78E+0uPeu5MivX1K8sQ50cH4pVMCsIT3CykYUgPSd37JqEbxwHl5jWA9mUSMU/vlyupcmaVREb2o/Z0oYgckdk3sdLDUE8v9tLExYYhtN1r7J693B/3sy40FJW4P6OfxbYP/X4H16pw/qOYl4oDTOaVwWrAIPVYH5BcyUxtGWM0d4f1FOnk6Y06+gn6dBpWdvBXV2MVsa1Hx7LGq4vj6ecg5lfq9BfEH3hFUhaDJWLn04rTSWfbWV+qYfpik0Nz1RZYFlfujaAcQ/LuYQi77CsefBGlMDRvrdx3RVqhQeStV/fPx/YMyO83gsR6n0BfPI49RhMiYW7ILYHX08X7+p5FdThpq8Mr/DtnFn8krG8AAA=", al = "data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAAAwBACdASooABoAPoU2lUelIyIhNVv4AKAQiUAY3oQndABhNHAiDYJCkAAA/v1TVl2KxUl0/6mMmbv/H/9GBfX8h+Ef9GBfX4RPC5AiMdhctoV1u8xrXO2EgMZDMRzMa+xTx/JlMVXQ6cMoarPfgucPf6ng/xyomwmhBHKqzQAAAA==", il = "data:image/webp;base64,UklGRnwBAABXRUJQVlA4IHABAADQBwCdASooABoAPpE6l0eloyIhMBqqqLASCWwAsR+cxfkALsz55H2Gf249MAmbw/Px79+FUkfl7HmN+p41n9t2t5bWU8vf8AD++Qu3oxejM5ijyYyz/fOkipzSL2O0sZ078fwuN3AEBt/24v816EbP3vjGXFPgOysfOsTT/8D7mvxO8a5YrQ3uC83olWfh13bwfkzTHQZjLsreC1XmtQEr/kFLkpzNaFrtBSjGfdbb3TW/qSxAJbFpjH2Z+23cNnNcU1fL/uY/qtQhBMBBVsK89m/0wB7YFRUWezULOTf84eo/wnUupJvda9xzE3nBI5//UB+Jj8JSYX/9fOoALxhB8VCbKfDEOmxu/Nf5N+U5fy8yWcU7OQk5hN6cRPxPtgdLhNk1rGz7GPP/H37MtZcFXNVrN8x4UTiNGDycN9XOyOMR0LVwd23WJ2K2/PPTTVg01Bh/txxCvSVIzR0mRNm1B4DpWr97+fIK+wGDrzwAAA==", sl = "data:image/webp;base64,UklGRhwBAABXRUJQVlA4IBABAAAwCACdASooABoAPpFGnkslo6KhpWgAsBIJbACDJUKeu/hL+QFXRXIP0AxQHnx3Zn/IOzjbwH8AYbQJ0hjIwX/j5XeVHj0dwYbegAD++Rf3QTbwzL5Soh7rbOstedEBYczF/OpwIZIJYTzVDoiFaNo1YA38/o95VT/+e+io+jn8qCVSPXSIiB7RpZWgnyWQCzmNvHCtgFBr//8dsp0Ovp9pGYzH/z6RV9ABKH9ceI2X1Jn648Rvp2BbVdP3JMNLP8OidtaxsAHd16jCxNkqBuoEZ0K3pp80vgd9gmqeRGGvteZcMs0bb2GxNm4g6ladlRo0GBobDmkOBf7I/lCJ3fMuXOkupMXA/4Gd39g6ZwAAAA==", ll = "data:image/webp;base64,UklGRoQBAABXRUJQVlA4IHgBAAAQCACdASooABoAPpE6mEeloyKhKrgN+LASCWwAwQvWpcmET/XG6BpApkHjNfAIV/xMpAkK2HeKUSPES8v+mD85PCUmynTg25eAAP7+lDMZLWCDl/G8gOBu6d2pum7pyYIQ/clj8Ta0H+b9eAdC92wGyBS9hxoKhV0wy2uq/TtSUMfcaWec5HTe/HH/uJQFa1KorHVwB4k+YlTDct2S+M3OKFLZw0poB8u2sSUqy/Y3ivqUr8Oxb/vqg4RuZzo0uzb25iz8DA99QQhhdiQA4rZf24orz2I7bgfNxqAw+5HT211lSKWFxyFTO9z6bW1L9vrFSma/w4zA8WZM/RvYnVWSCTCrvz5tCkdYp2/TDqXlq8yHFg28pgOw1/+Di067MGvFZ0pe0c3smdSwBjoL7RDpf0Wdi89b9Et3ytK9tOIStZA4SDxmQfkZRlvdtY8HlFGWBxRsP69tFh67VOeR1u3rLlYOfR0DY08HanZiuurGUYmRFcgAAAAA", cl = "data:image/webp;base64,UklGRiYBAABXRUJQVlA4IBoBAABQBgCdASooABoAPo04mkelIyKhMBqqqKARiWwAvgmN/gGmFrQGqdERIUo/etTyzbI86h3q942qLFo/AAD+/i7XiNLxGhL9pDmZ+/7zPHH9V8+B71AeXCDhcwFXyppAJ0LJin6hwEqe2R+ZktkMGhjQ+pU3nEGkDuVdy959TUD08VqfxTJOgv4Qx1fv7iN6JtXueXTrYCVvd9TGh/PCoMP0OwO+xhv09AdV//RgAgv+Fza0pdYJfkdNmradbYHt6tLg++P7/LxTqMrRlxR6ien1gc85l9x/CMEjVGXtkLWzcC8OsaNzhbClIHrHYzqLZqEpfoxiaDCQFvqmu+gILqmdx2PE40P9xKOP0X05Xj//HZMgHng1XH9sAAA=", dl = "data:image/webp;base64,UklGRm4BAABXRUJQVlA4WAoAAAAQAAAAJwAAGQAAQUxQSBgAAAABF9D/iAiYadsmYza85rrdEf3PHsDUorNWUDggMAEAADAIAJ0BKigAGgA+jTaXR6UioiE1VAwAoBGJbAC1Gz3D567Jr/7lhSW9AdQBvIP2zEfuUXXJpt05xR/wZNJsXjdXARUwWn9TWo1AAP7YlJ53DvRdSiGXkhrdmS5X+n9/aH3lz79jqmmrjDs3/0JuMnu/RLe4V3w3vw39eT6zan//U4+hF3/pidbmHj8hYr16O5/4ZQF/AcsfSiAgd8mKvtl84U4dKKrmS5DzQFVtAP6jahd4MI2NS1O0LrWtO7SmxZvLuCZYVyBsnPCguDbM/+7dY6Dj8qOksEqZfg4+1X5rWfjI6ToCbP26zz/l1hApSdPDZbFPb7OWthNYUaBt+gfTRY1RkvQVN2cq74Gn0IW0bU8KXulYKNuy8dNv1cTc3807JjjsaLYmRi6l/i/gAAA=", ul = "data:image/webp;base64,UklGRogBAABXRUJQVlA4IHwBAABQCQCdASooABoAPpFAl0glpCIhKrgN+LASCWwAnTL/9o+4cIZyd4geoDwQNsz/XT3zOjVyUPyaSZYOTrO4RSUSijIssVdhrSotw/5b38vUPmKYAAD+68n70V8aq51jlGNETLSmNkQP+s1fyWCMVvf/1lf8yLKvyotU/jKQfzjiLvXf9f/xNf7xKkDnqxjZDUfcsKx0YhPjOfJ4bHX/cklH+shpWG2fgtMl5WkwVOOSAuHHXQVHWm1hPaMfxSVW9nDz1as0AiJ5+1zg4a/sHPqWq6WMVzkeySinsT7mwmKw5rb5NGxvxCSg93RIVxPT/u8Coi8N2GicjNyaD4z5I/7fhrRZh3RtO25sXQQSBA54UxEomB+fJ1xcr4OZojIKIxBcj5B/z5x+cYgOA+l+YTMnqt3Z/Tn9T/TLyneu4EGsa9tNUGqbBBW6mc+fYNpFEPoPFOWuF8+kCCpkiLXP74i3/uPzf6SxcM5MVAVk1SP/aUX5vcR16wZoBdAAAA==", pl = "data:image/webp;base64,UklGRlAIAABXRUJQVlA4WAoAAAAQAAAATwAALwAAQUxQSKkFAAABoHZt2zG33tP1zsROardBbdu2bdu27XYbtW3btpXUbdxkOhleH57nfd/J7B0RE4B0NJaYcsNG06kRUQr+F7PMfOugaHsyJOD/IPKwg+ppv2aQBFfuPXx497IB/4mcx6nZ/qs/ENrvfKKDtMcda+ntfj5/UKdlOEoetFD1x8osbtc8RY9zcsXH1OrYldnNPLdS7/kKV6ndudzLvaKi9ZjaL6Pe5ObuVd+s52ytz7p4ItCtOtr1TJ5O/cnV3aqLQ4e53REXcKxbNbXqSKh71wX2SfCPLFO2WCajW5SL1xFf95G++AlFh52MSUz6dve3Ot5uEHJJR0Kde7qi27e4Yac8aW229MNIh7bUJkf0fG3VL5YanYfypl/2y9o4fJYO68hOCdS+N2O6oVa0toMN4rWdrPiEOh1TlHRDi3eaTmb7R5Ot5yLqfltQS2De8PB8GRVdStWTFpUff4ej4H0tT6q+0MfRWka+excdvTVQFxDWdc+L+MTYh3829AVQN0bD5i5WF+wwaviFJK+GuADwzlWqbPGsRohKw9tOldmT6cJbYVAMBgMA5V/hbIBL9OaZ/dQipPad5YpXRWb+u279muyAcZuw18MNYMjVesziBUNq+850xfMqMSTjCgGeR4QdijtoHOR0wbmSn0jGCseF7e5VNdkFv0R81rHNvULO67O2D/9C8ntBwOuksNW90Muiwf72wMp5i6aGFP2u4ndO2AL3Dt6lYr8+pHSFhp26dajeJYnk1wJAwCVhnQafoJBgPyW9EHFOkjy/xOBzsWa7w2ZKcZL8EAGEXBcWCEpohQErDt+6d+fMmi45ACgFa9WsWT2XWkSNGjVrRiFD1RrVqzQ4Yidje9U4Z6fm6HxA7tfCOKHjrUQH5bYHvb2BOWk/TeZNXrLQU2aTKbU/eqeaUs3rss2I+Tm0/hvqfJ4DiPokjADgsYWaTcOApmaS7wvIGplIvonCSJLcbTAWaVLiAUnaX+7esuXYF+FaMJD/i9AfgN9Fml8d+G36+CVX7CRf5EO2hyQdfSTGdSS5RsE4YbsCePxCkvGz8hoBzxHCOT+g4DehB4CgLb80yeUNANkvk7Q0hbKWJHd5CoXfk0yoAkwVtilAhe8kE7sbIfYUzvgAhWLVDCFGyIMvkHT0AZqbScZECRNIcr8vsELYCGAuSa7wgLS3cMJLm7qSebaZpK0tkP0RSUcvAKFXSFo7A4bNwh9A8BWS7wtDPlQ45gkUjhO6qXnnab7ojpUkzXUArCbJHZ5AExPJm5kAjz3CTKB4LMk9niqzhaOeQLF4ko6OksCK4/a/SaPcXBNAizSS7yLgsY4kxwPwPCqMBNpYSU6F6kphjwdQLomkrS2A4J6nE53U+LMagOyPSdq7odB7kjEFheNCf2A4SXZXMWwX1hmAKskkzY2BrFutFC0fz/7ynWRqVQDKbyS5WRlNkr8ZAPicFnoCY0k6u6hkvCusAVDfRDKxAgzLSNJ6Z0mLSN+SQlxpAGhtIfm63CWSiTUBIOCi0AMYTZL9VKolCXMAdHeSjC2G3K9I/hifCQAqJ5OMjhRyPiVp2Z9C8pCfkO0JSWcXoJ/wl1Hi8TvF8QD6keS3wiiVQHKbN8Q6ZpIvcwnK7yTpIGnpDDE8hqStHVAhgeSX2oLSJVEyGkB/4UsUqiST/B3S+haSD8IEtLFQfjuLpMBXkim1gOCzJPm8Wza/POO/UjoKwADhcziKxZJ8XS/QLzCLbwMryXshklzPVSZBWiiWZGxxAL0tJJn29MprG+Uj1D6FI+QCScZdPXP1TtmmNpJ3giWGf2UxhWSlEkh+KwQgYLMgfxIrDAMwUAUtvlKeUKy1neTNIAnaWSS/GmS1Ukh+jgSAnNtsMsvBus+EIWrPcwDGTq9kTzP3dZI85y/L+1pIqgV5w58kP4ULyDjjm/BufFjmxyQd3QEAVlA4IIACAABQDgCdASpQADAAPpFCm0olo7+hpFgMS/ASCWwAeEn2b8VeSB3d7zbQib/sc5QO0h4kvSv8wHnEaYf6AHlt+yUv59w6DL3ddH8R5lfiWZ9dQAFAOp9MNlg5y/5CfWu733yGwFUAlfCCSBqYsTkdFXIpgPZ74YmPVdgWIAAA/vz5N/oIl/zTt+6uxX9j2RX/+8Fyo8f8FQNH7YGZtZdnQ30vbzV9l/YmVpA9o/uAfGs63ZB6mXfGXe7+b5L+gSxpZhot7lX/gRV/aPsb+0N+BDYjnK9th3oc5BZdCeocKV35BgOz9Htd4yJcT0jir8z7w/fVzmMkzVub0cXmE19z/kypImRLce1xDkCHEq1uEJDPDVn7ifqm7+d//uXk/dFhqEZMPfpUDK0kmSyUVUYUlVsVKFXOmeOCR+jBjJI5/+fNrdbnDIzUWDrIDz/xljjBH/uFcHPaZmA/NQ5blLbMp+lo5pn9f98B9f+WS7cT8sLGwDBNkbyK6kkzd70OpLlIGYCrxBqOPnpF6asUsefhrvo+tdKRR4Dz12V6I1yZ5gTurZRUN7X9cnlWn7h1SSXn8UX0Shwn2/Ygx36YRv3Uxh4UMSKpztLGpxwHvo5aS9hfkmgNB5rqGSZiutbM1rPa3utVvWyHfmOxd7RPk9EPDev5XjgnooIK20MitjU90+b250KCktfafEqdG/k0GGkqVKFCNTc+8iXB7kT+ArJdmjqrHhE4SnQMxHbVQJg9v5yzBoGskAXbNATfaIT3W7gfaVWLvdY9RL77zhmWYMY3rk49dJHe5AkBizp3Sdgpg2tLBHOuZwrxraIC65Pekd/jS56uucpEVHWBh0BY+rhEAAAA", hl = "data:image/webp;base64,UklGRo4GAABXRUJQVlA4WAoAAAAQAAAAfgAAIQAAQUxQSFgFAAABsMb//yE50qcR20lnYtsYq2N2spXVaW3Htp3BxbZt2xmGw9se3tTOdIzp34Oq6lx0ehQRE8DbtBTv9m5T3kY+5YBWXlCuORAANKkCFZsAVl/vwlAhNDQ01Bu87J26tIeSdrt/UaBGbU2VwDJGDezBNr26vkV1WgeWeg3uLAXbw6+h227gxXew4s+gbIDCl3dtu2Gl1dLdmUsnwbcxCxeOgLaZC9feLgvDxwND765P+tBg/uml0WusYFl1bVNCR2Dd6XUJVV+DnCYszvUg3duDDjFQHMD3LMC389C2PQ/Lv9DzjiuOzWkz+AbL/s/hqx1m/O5YKPKsEMV5DYbtanh7mdFz++82o5LRF0fX9Shm4cKO0PZymcoXeuiNHQ2s/cgD/rIKdvQG4hvDzjszOrwOtS/FDIj0gOFn1xlg8Z+V18iT9W3alIO2D67kLkBv+BxgT29Pfo6ETX8F0z+qAy1GZDteg1pBJ0wembY9Majbw2w639eTeWjbnuf9i2a92unNCE0q7oEtLgS636zAz8eg2CcFWDjmdQA8onicQeODGdl7i3iSm5BwSofdX+rROTb1bFMMshNi/wbwVWLq9kpQcW1G2tXqr+7Vmgvx6s38S83oF+b/fBWlu5cmtAuUVhSHF1Dd4XA4oIKjLgUc2vJA3Z61dFr1a2jQ0WGmsx2qKnWoqVSDzkoxbEp7wKL00/gFQdfuGluPpjr1+rcx6TVxOBx2RMQ9E4hPhRYi8rgTfCIiYsIuAykj2hBMkSLuacBYERmmt1MKkXQbHPI1n8j7ECU/slRWASEiLYA9+T24nQD89kxkc0H46IXISr2pInIHOdfxoNiNVgS/OKAZ2Lw5Opbmn8uc5sX4k6wK2CndIT2ny+jqRoXNL5Xk9Vhnfs7jcRpR62ra5R/3D5ff4Lj7ve99jN5r3gDZj5+MMzoxWVZrHuaG6UGIDAFWSxUaSRickOd7GxiJiAcDIOqpO+qJxpS66Xi0Tn5UagKMkBAKPjsKkeI+52fkyv1JM0B+MRJ5XlOzemCXl5kvrQiWiVDllytywmjc6D9uQ5CMZYQEQ5RznyzWtJctB6WuZqRIAnwjH2Jzb4UynxxxZxjNGtgOSQzLuV/DaOpo+VyzZ/bsYi/R7FlymPNhXSzxx8LkjFEhkm5DkezcCDWruCYkq4Vmqpw8J4M11vWacllqRLw7FHZem3s/x2jV7ImoasaRjsClOGiqjikSf7MoH7tcLlc5glw/AAGunwGCL7jOeEPpyJT8Wz56610Fib4K+F59cMkHOB0P5dW/w8V4U8HU/bBBtRS7cA1ocjj3ej8wT7773DlAb6zL5Urm/6ZrK4pPMU0hpY8HVXt5m6Gcoz60Vvq3tmoqKwGavkrPGjodlJqATSlBfaUSBHfXBCkVX7cvRCQjAOgtUt9g8HORk0XwlxEQLiIxtYCx8kcBIE9EFpqA2xIB9JYdpt/EDteygEJ5Muz1G+TISzTBsowXg/TauU/5jplW0Kj3t+6twA2n2DVRHbZJP2gqTqdZI8M86S7OS69ff1aIF9bsZZfP6Q2VzmgNahOVBbXkt4fhmrM0lzkwJv8H8dbkv9jnwZLc4e7qb8BhdwlCZO3JfJvOZ/IJpYp5UiDtLgyUKYlOk043GQPXM0fKdM30bDGyZN2aLT+8dtt3yVYIk6MX5VudUs68sBupFYwWnZeRcPbB4XjpCHm/L8h80pDacu+welfzrf25UaDEHn50/DX7i6reW1AKU8xlimVs0aH+gdxbn4C3ayDMUNWYoVYq/HMprdXRkKJmngiEb9SuTFUb0k39jN/UQDiVAJPUZqzKLg1WUDggEAEAAPAHAJ0BKn8AIgA+kTqaSCWjIqEtWzpIsBIJaScBvsWhkBwg1gW76nMVo25iGEWEafn32DY7w0E5h6fLfmhgtnuEddrqXVOUAAD+9cA//+dVtVfxP8q//+JuTcy6725oc9SsCmgRe99j4wrQtJTJ4TBfEbcvUCKXT3+hdn6PKoPH1syZaLYHlbjZfxMe0e6UbD3gcv4FiNoJF+ikpWyj0wdQjYwFgrqBSnUTy2AXx/kU//+fp60HKeYZTEqbKKZIPS1HDn9lfahUALdeW5ubWO6wqpPi14v9H4TEW4qZI4I6paT6B+Z7hWzoXvr+DheOp+8HR031AAQeH3YMOrNAS7mqZqOBB85EGwu4FRZ0LIAA", ml = "data:image/webp;base64,UklGRhAIAABXRUJQVlA4WAoAAAAQAAAAigAAIwAAQUxQSMoGAAAB8Ib9//qm/f/dEhwqg9pIoVg3PEWKO7U372IBMncf7jrBnbq8cd6Cu7vW5nWBUW9xsi7FanlceL1emSDH8b4WERPAM9+ZF8dhK551fV2Ars3AxQgMBDo2BfeOQO1+feqDm5+fn18faOYfENQTnPz9BzQEWrRWNB3UWKut/xCDWh/Hp+XaZjA8/AKGHQWqJ8C298C8C+r/eORASm26bj56e/MyGJ+xfv0C8L29fvvVJjB/CTD31x35b2pExG1O/V9twPBk6lNzvyMby+y42deOXungANA3AWB8BErfJNj2qVqfTAcMpZ4aX1Lr5KfAgoXJT828I22vbrHDv8Sg5ZT2w7fedmWsX98bfH9s/HJysNrCb4Dtb9vBu/8FXabL8V5PS+sf0l+LtYP5CTs0qDVg3e/t7dnVvbsL+D74qSwKtfmhwLGR9kyNBb/cOYc3Pi2tBl/S2aU78ETDO1ivSzLZE4HSN4nXv9ertb7ZGb98BzsMmUNh5xrzm3cdnhbALhwyNTqcvnX3eAN7fs/NvaLC0c/UCMwoTOiExt3cjA/A5Z4j7Pro6fhr9fX46/X837pBXWfnZ1ntRg1d/z6N83Kz+z7Dav1cmPK2fe3GGBUmk8nkBfQyeUNtk9KdJqPGv4eyzfDWWv80mUyvqI0xB3up9DZ7aQwYAQ3MXrib2wL67sNcgcCxOnqbHcDX3Eah8xndCqg/4sPpKA3BnQD9VhHZBHoRkQ8gUsT2OY6iDIL/yC+KCJvYQjTuiMhctccitihFnoRpxD2EZpLtNFRmg0ucSLkZoqUz127UgjTZCjidFamZCSyU3+oAMypF9tblY9nab9ckRZzR2JhaT4oDlrigN34gEUYH6lhKpSW8LtsH7JdRGllGo5vGT72PynDoJqWFOvvkgJ9ig8wIyCn3oL/MbiUh4C2l92rDalnaZ89wIKVU/KFHzcUB0TKDHeLR/LPPvNBLVdl9IE0qDngBA2UBECTjZTpsES+8Zb1GdVmZi8ZFfGUVLK2eIr721cgxRdFV+ELM6PIvTpSeMFsmih8k39ehbCUzHkbDAhlK3crzREmXgbckGL1kz5wOeM1Nk/12xMr08jhYJz3pL6s0SmbObGDHSJkHmTcWyjL7dqaJIvVOPRZKAKyqvJKrg0TLHImCs0+aYABmyoq8Uh1fypsYbPvpW1MQU6CSHxIymPrFpzbJES39zbtn82s8aF9RFFXyuK3G7ZCQERqFkXcfedNWrp0ty7JvY8u7is8kacOTjLrQRWQZGGryzt4r0TFSUqPKtkPig7NZ0huXO5aYLJsfjEv/7ZglEJ3VarVOwmNriaT6AH2tM6GH5SvGWt6FgUnWhP6o51qt1qVqNy23L/SHyRY/1lnaqJy6CQZLOIH3J4NuYvb9Pc0AfrQY4QPLaL61dIW3MiuPdMP93ma6Wb6BjmfLksfw3G5R4MkL4/ok5xeH56+H54uDLm/+3yzIZDK1g6FmZ9zNfTW8xvTRg5vJZDI1wNFsHtMCHM290Y3zh6H/UBiG99MrWg33Vuk8tqNGL7O5F9Da7BXsY3aH4WazyRUYMUBl+EBFq9HdVDoMb6bSe3QbikXkW0iQ+YTLATX/CpGz4C8i4kVbEakYjr40Bx8Jh7QbwPRKkfiGsM4mEgnMFpElajtEZD18KuOYJUOhVEQK68DDOBVrIhBqE9mnp/YukerZQIyI7ZPi60aju+K2oVxru3z+UbBindFYh7ayc0DFZQiXNnOlj1qXmoR+C9bWwyR7BuwWM+SWD5v3qtaQS+JmV3brA+L+B0bJwd5hs/RMk4hBF209qV1R6L+0SXFNWZkBEqqqU59ofSOSrPK47CC0lfjFtr3QW8ZfKtSpzZBglOvFmxayBY5L9ZlOWguvP27EJ3ZU5Fb9lz8QJR1Rnq6qxyD5BjLlyb7mxbdmznSAhN/3yEYtx9ePVj9uhL8cnTlOIVLzKuhyr1SuQu19+QwnR1gh/egpIeA+KUl+0BLLBzBOJhIqnaD05pwjlb5/4BsJxLUu7BJPXpPJ4DU/XfYW3wsJMSl63e+k9a+siNtVDvjL5ZAQT9pK2GyZBCwT6aLhUGKN+qXUk1cel0QVVXRE98vlCFuyVmMA1we3Yx7m1oHSOyvPyXvwsCQkxKzWvPxWxK8Z9Rloy4m+f8+DBiUnN8vBLKvVuhpOFUJ9y3/VZmVW3B0Pg61Wq9UHb8uKeqnXHaGT5SeAxKtAmxOVGZ8D/RKsSYOgUWRBzfUhahstLykISi+P8wGyLJabOx3hptVqDYeSs0D3y9bUUcCo5LJzRmi6rURSOvPUvrRxCi+MozOGP3sAVlA4ICABAACwBwCdASqLACQAPpFAnEqlo6KhqFJKALASCWlthqgebACXA7MGwLeWTtgwbcRleKgBMp1O3WmUShazdMpshAk4+MzUDmTAAP73ya//6pEF+xBTn1ga4OGyiZCjeVj6GTpI0K6CSPvU8b2JG1bhEFKDlYwT9HAFEzzE1VlZieT8x+f6J/b5Ldi6rpYD6OrYx2S2vn3dGsAm/LNz33LZJ6FW2aeNtAk/SbulANlRqGbUWIfNFD/N4XrBgS+iAWpxvhPiD7fLSaUBKJMgIm0Y27R0YkxxyFj/d822JDz6h2sZx5PwX27Xr5vAj126UGLRkYWotGiQjQSqRiK5uv+aWhgv2coyIK8L7G2Mh/ujFAXp8oAhh8GKgjTQlkqqMnYgAAA=", gl = "data:image/webp;base64,UklGRugDAABXRUJQVlA4WAoAAAAQAAAAOQAAGgAAQUxQSIECAAABkAPZtmlb89n4tm3bth3Zts1n27bxbdu2bfPMYO9z7vmMI2ICUEBqC3WT6oWhY+mKFY0AWBUQHSC1oPzF4VVFhYY3+DPI1LCXZDEATpR+uxHTTgvJ160Bi/skOU+XkgCcZWKQseDh5Be26wf5wAKtKZ401aM0AFdyn5NbcNprkiMESwBo8Y3siHoSXuylQxkA7uRyALDaRm4SzAUcIIfDaKeE3FFfFw8V9CVPatlFDgYc9jy/k/qV5M/IUr+iDXlGyzGyN4ATZOOyMQrJj072+vUhjwhWAEynK2RTWVOgxUGSfDzeRCeTDHKzcODoiRtvSR4xkjUDgD7XSfLyEIO2Lly4xucqydGC6pZikDUXYDbhKUnubCArJVOPNhJOn7hPPq4P6QmypQSwXfWZpJJSXiihRbkX3x0QbFD8GTlCQysVoHyCQvLT+l3HjlSSORUoUMAYomAF9CefFVZrrQFospfyO0Uly6EuWADYQoartdEE9Lsi4UpdTAHU/M4ftVTaGgAzP0kc4GaYEQD4kjkqrQ1BPckswMWgnxALvSGbyFoahDUKud0ccNJmPGbCSAmaj5hQH8DACROKGYZ647sYA2g8YUJdDf/blgv/xPkTJkyYMLIASX7Y9CXz/cEnzz+dv/PgbsrHu0rux9Qf+55y39OTt6+dvcH7T9/y+tZvuT8+3Lr4av+5lGsK+UoSnJjVP3/lppDEKYPS77h87n8q5fbA+/5uXLTT3dnznP+NudsvMCjNK3nT7d4dAi8onmHf1U65ng8567rdOTDH7cjBZXvXHJ+Vs26n81ZGZPulJcZnblp51fP7Huczq268ionZ6alk5vwgXznc1PfEzd/wFABWUDggQAEAANAJAJ0BKjoAGwA+jTiZR6UjIqEsFV5goBGJbAC/Z5h53EgPAr20D1wNMA57n9gPgZ/aP9gPZNzQAKY/v7DAvaEbPVZroXuTmam713xtEgU0BXrn9+DfBAD++VpUP+UrETGtFjvbFn/9YD+P/y/ewXq4APbtvjacEO6myntEbLfkf8xphwNIH468zXOyHjyQj2ZNtFbaKY1Lq3NU+QeQaJ5sMCzTvsmox0El6KXh1cJLdJTafg8v6G9D/967M/cgPUep89JutH/ys67pNiHY6jVLprlWnW9At4f5XFi3QWE1bq57p/wLz1NEos5n/F7/F/Krp5nL+L+VXT3/jKn/EhdcEAjpooOtsjO/KxiHCrsj0QmPADKjgnoEF2ieIM6Ey/8LnG0/oUEAWdY35i2Db2CC25lH1RfMuaOT9X6gAAAA", K = {
  MT: ol,
  AC: Ws,
  AL: Gs,
  AM: Hs,
  AP: Js,
  BA: Ks,
  BR: Xs,
  CE: qs,
  DF: Ys,
  ES: Zs,
  GO: $s,
  MA: el,
  MG: tl,
  MS: rl,
  PA: nl,
  PB: al,
  PE: il,
  PI: sl,
  PR: ll,
  RJ: cl,
  RN: dl,
  RS: ul
}, ho = [
  { name: "BR - Padrão Nacional", flag: K.BR, abbreviation: "BR" },
  { name: "Acre", flag: K.AC, abbreviation: "AC" },
  { name: "Alagoas", flag: K.AL, abbreviation: "AL" },
  { name: "Amapá", flag: K.AP, abbreviation: "AP" },
  { name: "Amazonas", flag: K.AM, abbreviation: "AM" },
  { name: "Bahia", flag: K.BA, abbreviation: "BA" },
  { name: "Ceará", flag: K.CE, abbreviation: "CE" },
  { name: "Distrito Federal", flag: K.DF, abbreviation: "DF" },
  { name: "Espirito Santo", flag: K.ES, abbreviation: "ES" },
  { name: "Goiás", flag: K.GO, abbreviation: "GO" },
  { name: "Maranhão", flag: K.MA, abbreviation: "MA" },
  { name: "Mato Grosso", flag: K.MT, abbreviation: "MT" },
  { name: "Mato Grosso do Sul", flag: K.MS, abbreviation: "MS" },
  { name: "Minas Gerais", flag: K.MG, abbreviation: "MG" },
  { name: "Pará", flag: K.PA, abbreviation: "PA" },
  { name: "Paraíba", flag: K.PB, abbreviation: "PB" },
  { name: "Paraná", flag: K.PR, abbreviation: "PR" },
  { name: "Pernambuco", flag: K.PE, abbreviation: "PE" },
  { name: "Piaui", flag: K.PI, abbreviation: "PI" },
  { name: "Rio de Janeiro", flag: K.RJ, abbreviation: "RJ" },
  { name: "Rio Grande do Norte", flag: K.RN, abbreviation: "RN" },
  { name: "Rio Grande do Sul", flag: K.RS, abbreviation: "RS" }
], tn = {
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
  region: ho[0],
  emotion: Wr.default
}, q = fe()(
  dr(
    (e) => ({
      ...tn,
      send: () => {
      },
      reset: () => e((t) => ({ ...tn, avatar: t.avatar }))
    }),
    {
      name: "@vlibras/player",
      version: 1,
      storage: cr(() => localStorage),
      partialize: (e) => lr(e, "speed", "showSubtitles", "avatar", "config")
    }
  )
), P = {
  get: q.getState,
  set: q.setState,
  subscribe: q.subscribe
}, fl = "data:image/webp;base64,UklGRn4AAABXRUJQVlA4THIAAAAvP8APEA+wTyvxWv9dj2Ewim27yacvkRApSANpSEFClvQ0buj7iP4rchs1CrQndniF/EH67MgAdHVkxLeCPTlijpG6FkkbJFVIWiNp9XRSY4ypRHRAXYcmIVCkfvbD/tgv++c84vN5tvDIPrgf7usPRyE=", bl = "data:image/webp;base64,UklGRnoAAABXRUJQVlA4TG0AAAAvP8APEA+wUDPxWv9Vj2GwiWS7zXcuPwRBETQLmqAYgkrn+JNTH9F/RW7bNsx1t7+AP0RoGGQc45mWJW7MmlFzQfUNlZDqHBWfXTxu27YhQLo4O57CD+b7a/ds/F5+v/Ye6emhwav/gcJ//SAAAA==", vl = "data:image/webp;base64,UklGRtAAAABXRUJQVlA4TMQAAAAvP8APEA8QEfMfAnJs222bi1FwNkpAKSiNKI2loAQsFTC4C4AOHUT0fwKAyLIbFhqnXfPU1OmmBmCoJ0A1QpkS7KZihuqJsQjcNmgbVOGWYZ8SFAM9AtPLdFqNE+M0vaz6CyOsnG6/i8i/hb95YRydgP6rcaK/HETAE7cIxcAtwW6gZahCE5pQDXQDuy/oieJW9QWcI4wpQZ8y3KYNqm5dKJpuBhi+NE/QpPrCvBsXxbTAvBrbqru6HbSDerAflG1FPvgE", Al = "data:image/webp;base64,UklGRqIAAABXRUJQVlA4TJYAAAAvP8APEA8QEfMfwnFt205yzEMaAG3Dka8tM8wsSzqwBUr4Q8NfXMP75gIi+j8B/OExzB8MYqJNdTylek71xMipn8icJnWYOCG1M+eoVOnEJ/QK0VmzdqZMHf8djTInyJzje3LLw8PMrNYEyr1xzEAy4shre9BqgjoQlVUCjhrVJRDUazSBRp0gg1ocH6rSwwjOmKAJ/xc=", wl = "data:image/webp;base64,UklGRgQBAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSJgAAAABH6CQbQQ4lTHN6J6ICG4Aq7a1N9Gh9+Kgv0cBHQUs3sFJkMPCBJGABCT0/ofLzHyZpiCi/xPAf58DuS8uRt8z4gR+xEYRO8WskxKWe2as8FCxdKkZfalnBN+YjX2jX6FjYLs41XHESxVL8qDtJkg1CN0lMVUGQimxUAycFN/6wE5rbjUgkMdLFUAFJA9wcaQaMIflKs0/B1ZQOCBGAAAAkAMAnQEqJAAkAD6RSJ9LpaQioaOIALASCWcAy9KAABzUfJnCSAD+7ylH/4hzt3629vP/G+IL2yMK/CWkJE/jjUt6PMQAAA==", yl = "data:image/webp;base64,UklGRgYBAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSJcAAAABHyAkQXPgPKvViAhyuKm17U0eeicJYIIJCU0NGxKaAiQwY6IaiIRIyEh/BjoKIvo/Afx9leWTeMqt9JCItYfUhcGzw0exB0tAZ+vCXAfuQwdmNgzMdehszQwsAYkZDAZrEsEgNUiFa+nmNOnDaqQuqkCslgBSNXg4qr2Hmzp98PG92ZMsbJ/kYPYkCwMnmbMA4wx0H/4aAFZQOCBIAAAA8AMAnQEqJAAkAD6RSJ9LpaQioaOIALASCWcAzxqAABXtZd4OEA6/wAD+68iZ//iHOhzoc1uf9amRj6BQdA2M6C8Y14AxdiAA", xl = "data:image/webp;base64,UklGRqwAAABXRUJQVlA4TJ8AAAAvP8APEA8QEfMfwlEkSY7TF3LPg7BQBtrJEFshEAUx8F4TW481cgQi+j8B+sc4KqWhEGGU7aHPHCxLMEiaA3RSxJyRtCXcmUn7rG+5Z0FyzDHJT7AxKa1hNUgpwmiQyGhawwrNucGObk7xC7E0ajAvhXvWzT+luTlgmgNIEmCVUOmz9Ja3hOxe2bdYtq3EyryiVPHKvhIJBaW+FEelHwcA", kl = "data:image/webp;base64,UklGRqIAAABXRUJQVlA4TJYAAAAvP8APEA8QEfMfwm1t7W3ymfSXbIBH0Vp0qPNaGsXZrUuCDh9Bn4gDRPRfkdu2jXIancov8IvwRUpYptT2X+yf7IBY1OYdEJe1hSfb2uYnrrbogCNrYwnU7CoaEDhNXAIgSQCIpHsyk2XyLdISbWQq7nqAooku0YMy79f/ZP6Hmk1F0/+LD/WT8aX+1Oe/zenV/D1+EQA=", _l = "data:image/webp;base64,UklGRgABAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSIYAAAABH6CQbQQ4lckN4p6ICG7gqLZtNzn0DiPGkYCEJB5ABxJY6xsLEiIhEugdLuXSHET0fwL485ihSZSq9JIrqPFSKKjzxVFBU2AuBakChenAwgx+U5gObEwEVzODm8lARnAz2UcXE8PGRHAwI7iY+DcbE0FuOpBcFZQBLBQ0eMmVqvLChDF/BlZQOCBUAAAAsAMAnQEqJAAkAD6RSJ5LpaQioaOIALASCWUAy6QHogFeVe1fSiAA/uvImf/wQX9Dn9hg1uf6FfJn3XlltZiyCNmbCQURny3wiVuj459o2f8gAAAA", Sl = "data:image/webp;base64,UklGRqgAAABXRUJQVlA4TJsAAAAvP8APEA8QEfMfAm5t7W2bp4gSrTLWkOSAtdxBo3ETYwSUzF/xw9kDRPR/AkCSgGwcFOOhNQFGE2E26TOqfio9P88/U/2O2SQYTfxMawJk46ExK2B8HyJA60uouFxbPGpQeYOLucLJ7GBnfrzxUFaQA7QO2gRz+MwoUPwLbYI5fCYHaB00HsqKh+SytGgkX6RVlkIruSLFUfL/FwA=", Cl = "data:image/webp;base64,UklGRhwBAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSKwAAAABHyAQQXO12Q4jHBFBDli1bbtqFr0TCVfCc0ARgQ4k3CchgmgS0vN7JaSHvj7oDiL6PwHcenRi5fjIvVo9WMZXs4N99cE5kEeSFiHdsdQWfJTYaoBtgQ/NYAoPGqF30J9An3xt2EIk6d2SgYUHvfspDHSg4UiNh/7vwR25FtBwwDl7AwvnsDMjGWHpnKV9+FH2Bkha0BbkOtQisPfdOcBSzQ4WaumAlWOOj7g1VlA4IEoAAACQAwCdASokACQAPpFIn0ulpCKho4gAsBIJZQDBvoAAHNR6psMAAP7vKUf/iHO3fwK2Kf61MjH0SVUP9sOno6q6mfYDek2ux2cYAA==", El = "data:image/webp;base64,UklGRsoAAABXRUJQVlA4TL0AAAAvP8APEA8QEfMfAm5t7W2bh6OAEiqduYjDYgmjYRSMwFIBh68AKKcFIvo/AfzLOQyqDppGIKsTUNQvoKoCcxfgeN3mGlirGjrWjjKc34BmKAmKTnkDRxVgUTeAasyb3KUaBlMLZcTofeWZPNiOEtBFYFE3bDiqlA1V35gDLG5ogWGjdDfvlA3w9ECeoCTIBloCVCPQ1ADM+gVQdOo4yvoBSgAeIEdggvwFNQGmbAQWdQMc1QBUfaPXOMiJfwkA", Rl = "data:image/webp;base64,UklGRnQAAABXRUJQVlA4TGcAAAAvP8APEA8QEfMfwk0kSY5Ur82DcFAW2h7UhTDm6zLmTz+AiP5PADt8qycYVHtoqUCM3Ge9dwT3VCFSgZbqlEiq26gQIy2VkQqRhPsP9X/0Izd4H6AlVjuMqHZwT2VKjLSRYYS32rF9AA==", Pl = "data:image/webp;base64,UklGRjABAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSLcAAAABH6CobSM21QGvz5sREa48YGfbtjZ5vqTuxaE2QkboP0LmYAOOyAgdAbcl/oyCDVDB5X8PcCaI6P8E8Neyz27V+8QFyT7c6VW9D8Fb8AZT9bhVD+QNF2SX6gF3qk+9AS60pz1Ygdt2aiBwBuSKAbJSrngSwXSUK75rw1OSKXpK4C5hh6cR3I2AuzZkJWAS8XGVj2kxV5wW4Wk0VfsugdB+0njqQe13jacy92H3j+C8dnSxtbfNPwcAVlA4IFIAAADwAwCdASokACQAPpFIn0ulpCKho4gAsBIJZQC/KoAAFe1l3QyCqPgAAP7ryJn/8Q50OdDmtz/G83mtYH61kVO+sLoRNAax5ZUCozbsAjwAAAAA", Il = "data:image/webp;base64,UklGRu4AAABXRUJQVlA4TOEAAAAvP8APEA8QEfMfAm6z7XGbl/DBkq07LhJAiwXg78praRR2Ke9EtI7/a2jFI0T0PzgDAGcuBpC4WNiz/DBwGQPUwksN0HTQRwTXTVuCVTcpQdNVylCLdZZ3E5AekZIFzkjRAuA6jIfdVaHGvmWgKXjpeFyH/iP1NQKrwnjYdR0sAFK0ACYlgFHKYKFKw0OB8fCxJ6ixdS03SQEv678u6UDL/j7oQI3+VhQZD5r2LWgqHrGrvuUJTMsTa4ZRd23d9swAVZvu3aplgA+5lrLX5FrUfws+imsqYMU1ZeBVmgKA6wAA", Tl = "data:image/webp;base64,UklGRhIBAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSKcAAAABH0AmYBkcumngExGR9YBbbduz5DLnrDWtHQvkIVxDRsANdA+HgBEcgdqKnOExhw0i+j8B/vsGMEsDPCXZhWmSIqyTtPCQJNmk88URwy8KTPOa51RZVcWyyfpsu3TebZGzYmnZDTmq3i47Uctjs7zuZ6OWL//GN+RolvtOWJ+h22JVwLDJtIpllWGQAp3seckR7TTrq2xinaQF0yRFaCfZArM0AHf+GwBWUDggRAAAAJADAJ0BKiQAJAA+kUifS6WkIqGjiACwEglnAM5mgAAc1Hs/UVAA/u8pR//G8eBXkuyv/8b4gvaso/1bu8FwirOAAAAA", Nl = "data:image/webp;base64,UklGRgQBAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSJYAAAABH6AQAAI01tkEFUAREVkPx7Vtq8nB3Znp3EvwBmiDJrQZkiaQCihB5+4WT4AKIvpvNm0bGbK3Z/D3aoJN7yONdRbSVgoAvKShVAXoSjPpDUxyL6l6c8C88pa6Nw/sJK0InHRycNOpmE401m61kjbzU2vYnFFA0kfNwGYyjEStPF+1GX+ez23qmxtN/zDRcQCCKIod/hxWUDggSAAAAPADAJ0BKiQAJAA+kUifS6WkIqGjiACwEglnAM2ygAAV7WXdDIKuOAAA/uvImf/43jwK8l2V//jfEF7YjsZr3NoubDP3QAAAAA==", Ol = "data:image/webp;base64,UklGRuwAAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSHcAAAABHyCmIXObSgK5RUSQw1Uk2a4y5Jzh+0p4Ep4kJPCkXQlPCjnDTefcqucgov8TQONbxR6Uo/YslW/GQrm2FfW551UkLm2BFTpQCwM4Cousq2DgKRRNGLhqR2GRVQsTsEIHKqENCABf51yZXJ1zJqncx7UTtuxoGABWUDggTgAAAJADAJ0BKiQAJAA+kUifS6WkIqGjiACwEglnAL46gAAc1IZzB7AA/u8pR/8Q527+BXBd/WpkY+iae0sIjFXjI+kfhryQprfWin8qAAAAAA==", Ul = "data:image/webp;base64,UklGRi4BAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSMEAAAABH6CgbRs21cOqWHYjIlx5wK2tvW3zJOecW2MB2xgBKD2AUHOTVDvnRdybI3AEj5AzqK+A4gYR/Z8Apj874PHS2wHxo3IDiuhN4l3OwNK4wwHNiXEDXm7YT9zPNsedH7yL7NYLbccXOcXzQsQXG81TM7OJ10xbAHh1tDGo1sP9/RwUL5JkwX0kBo4+pKzXgYMoZSHAblTagUEMyMIe8JF0gFqSLDQriYEX25fpzcGP7SsLwIdtJXXhZeNjkO8QQmC6AFZQOCBGAAAAkAMAnQEqJAAkAD6RSJ9LpaQioaOIALASCWcAyQKAABzUez/awAD+7ylH/43jwK8l2V//WpkY+r4hd5B0VpspAdAnVHQAAA==", Bl = "data:image/webp;base64,UklGRtoAAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSGkAAAABHyCmIWNTTBKfiAhyOKhtW4kOWuNHoMKPgL0cRKDC5KAEpcbtG06BiP5PADuXkk39TD9ljJnq5BUFWnFd8TShgv/ECGY60ueI2VIko2wFbYziakykjSl4To2DmZrchxn4TfRwGcKcgwMAVlA4IEoAAACQAwCdASokACQAPpFIn0ulpCKho4gAsBIJZwDDYoAAHNR7Pz8AAP7vKUf/iHO3fwK4Lv7ovtRV806YxWBWqPJFGl3Ivsvpl7AAAA==", Ql = "data:image/webp;base64,UklGRv4AAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSIgAAAABHyAgIWMZ5opERLDBUW3bbnLpvcM4EiIhQRlRRpAQCTQJvZ7B/TQHEf2fAP179mZPFEiBQAE07ABE9gQSewG54ZJSEJSkjEQPyhbrEop0oGKxLpQt0cNSmENJEi5JLyC3J7CwCxDbARjYGujYCqhYCpRML3IFHyShA1GooBHKKIW01Nvpu58DVlA4IFAAAADwAwCdASokACQAPpFIn0ulpCKho4gAsBIJZwDCNoAAFe1l3QyC0ZEAAP7ryJn/8Q527+BXBd/dF9qKuvbVACJ+SIEXffnevp5LXurOAAAAAA==", Ll = "data:image/webp;base64,UklGRiABAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSLMAAAABH6CgbRs21cesJHYiIvIdQKpta3lzw8yJjkhgAfhFBCvgaIgdhk4765SZmb87+F7JQUT/JwD/q1RC2CZpMW5J2ozHqjpyCcBMurmhsEvSaqTPWYOY7kFMj3tKKQC7NH3Aq5AEPklqpoCvRWhyu5Q6t6Me8PUxpb6YAprmFCDfdtokwN7tMPRlTF+3kppIU/6B5SfTcNieT2tLugfzy5KeRvL5SF5b0pSBH3wKKaCgTAf+FQBWUDggRgAAAPADAJ0BKiQAJAA+kUifS6WkIqGjiACwEglnAMz+gAAV7WXo71wyAgAA/uvImf/43jwK8l2V//xbSOhSjfn98ES159YAAAA=", Dl = "data:image/webp;base64,UklGRuwAAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSG4AAAABH6CQbQQ4dJ/dASwiYhw4rm1bTV4Mh5usxfy1gpUVrwxpgBJ+CTplRR+jFBDR/wmgJY8ppZgu9NyXukWh1hrFREPvJ7kSCg2PwrdcKPb4dW1XaWjuuk/XedbdPLzAErTAEv74ChFdrtkjPWe05FZQOCBYAAAA8AMAnQEqJAAkAD6RSJ9LpaQioaOIALASCWUAxjKAABXtZd0MpePTAAD+68iZ//BBbUe5WOZ9f6FGzDrwXnBumu16I/80wvcKZsTVMm4tIdXOrbpvrAAAAA==", zl = "data:image/webp;base64,UklGRgIBAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSIMAAAABHyCmIWMTTBKviAg2OKpt200OvZcR0zghMUE1Q0RgpoMEJEQCvcMd/J+qIKL/E0AGu2HXsF/O5ivkGjKXxfvLdlXIP8RXyCHsOB38LF24WoCn7SVJQKCQv7EDX+YMAosL14fhwPdkNGCzN/LQ9yTtAJef5IDnEEh5C4se4HUILYdlGwBWUDggWAAAAPADAJ0BKiQAJAA+kUaeS6WjoqGjiACwEgllAMEMHQBnVYj4vJmQlgAA/uvImf/wQXxBfEFip38V8RsqjHCGKi/xjl0DVNhA3SDS6AK/zLgNy/NQsUAAAAA=", Ml = "data:image/webp;base64,UklGRvwAAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSI8AAAABH6CQbQQ4lKGdxhsRgXW4rbVtTR7cXbuMkBFskmyCDRY6WoeWEZzqP3mLH58gov8TwL9HQM8yKZbxkzQ3fXaMX5B85iv17CTn2U3us5Maz2ilXjy14tSzpQrPTmpA1oSp28IFz6wrt5mLL/NonA4OSKqc1AAjpefWSTF+UoC5XEjS4KsCAjBpGFkRMLT+GgBWUDggRgAAANADAJ0BKiQAJAA+kUifS6WkIqGjiACwEglnAHYAACvay7pCUoeKAAD+68iZ//+N462+tvbz//WpkY+gdy8Pe9VA3OAAAAA=", Fl = "data:image/webp;base64,UklGRqwAAABXRUJQVlA4TJ8AAAAvP8APEA8QEfMfwm1tu23zFVliBIyC0STZi6VFOAJKBRyhIEynBSL6PwH4x7mJlKKV63IyyQlQMlECVjZZucbExKRm5ZVXLpQKpZyUCqC4dcCtw1dzilYuNJlkAiydUxbgTO55AvzqfveKOWpqnu5Pb25R942r+927OWpqknv2BhFw0jnpBBiZqADGJutfrAUDSiZKAGCC8NXK0a2LfhwA", Vl = "data:image/webp;base64,UklGRpQAAABXRUJQVlA4TIcAAAAvP8APEA8QEfMfwlFs223znLqLGFhM8ill2fMFzVAEQcuUP2r+rggi+j8BAPwRajDax2pCUyIvJTTlY7VgNNf0fAO4IxB6BpCGxBEQPcmRgfOHxD6BVkjoCpyEI12AVlKi6xyLd0ndroKjRjKFo9ZfABoW7FJKaTvG9Zo1oIdVxJR4HZISjQEA", jl = "data:image/webp;base64,UklGRpgAAABXRUJQVlA4TIwAAAAvP8APEA8QEfMfwlFsW3H0My+RgBRaSjtJpEVKJLDsgeIueGQ0ENH/CbBHviufTqVJZaeo+auyO5ImFRt1ODUqT4vAxc7MFvxnMrMVn1TIxQbsi0BXaczsA7OpUCTwKrki8+nEHBv1MhHsiD+SarP6oCKN2JjEghNGUHkuVqDYgOZQV2l2rYCVEMTdAQ==", Wl = "data:image/webp;base64,UklGRjYBAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSLsAAAABHyAkQXPgPKvNiAhywK1t23Fy5PGUMCnZlCCfY+tQBa4EZfRAE56ciHhKwDP+BPIdRPR/Atj1zYrE0ZK52lyI1XBB9R6Y+e6tVYimSHEIHwFn/ASQnwJRG4qFjymUIRDfg23G5C7MrOXSMfjw9MdKx+aHp3MrnXsiDykrnSlvtigqTHmwRgnSuasslBWgcw/FZYPz1ynEnvJhG34MiQ0gsk3uIcyWVIHyfljeA8RquPCg1hZIHLH8hl0DAFZQOCBUAAAA8AMAnQEqJAAkAD6RRp5LpaOioaOIALASCWUAxBaAABXtZd4HcT/awAD+68iZ//EOdDnQ5rc/1qZGPoU2lrHUZhqaCvQ8R3HLzy0B74IrunKqgAAA", Gl = "data:image/webp;base64,UklGRnoAAABXRUJQVlA4TG4AAAAvP8APEA8QEfMfwnEkSY4yJ4DnmjCOIBw7ZdqasufBPhET0YgRKAMi+j8B9HczgFPFrgDgM1J9EQefYx0RDYtB2t4YDFkMfMuwaHuKDIsm+JmVzwCSZIUlcw0VZeWsgMl6/Y4CsCcpZ+1UsaO/Cw==", Hl = "data:image/webp;base64,UklGRuQAAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSHkAAAABHyAQQWPNtsEKR0SwwUFs26pyvuPQ4EX4ESAExLFknxeBCC8C7vDsHqRBRP8nAP+eEmO70tsuhZW1No02dmaraFvjOIyOXRgVXTPoOnqm0GOyEq4JGQFaAGAUOQ7Ju5K2NpOea8gvRd4JsaANm7O/zpklE4aG5eznAFZQOCBEAAAAkAMAnQEqJAAkAD6RSJ9LpaQioaOIALASCWcAziqAABzUeqUEAAD+7ylH/8Q5279be3n/rUyMfRNCFDJzdvuogHUAAAA=", Jl = "data:image/webp;base64,UklGRgABAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSJUAAAABHyCmIXObZko4RUSwwVVtW41z03txgAQkMM6InpgACSMhTUDv5X68S1YkRPR/AvDn/ajw9oVPKLx/cIXdqFCeN9SKSd3JnviQM8EHnUh7BrOIe3IJIIczySaA2T2+Bd5xR4gAfU8NdWZUNdkQuLBlqia+TZM9Pg2z8iDs3VVJsJeDqdnI3pwjVk7MsB+ZfROrnqnwfwBWUDggRAAAAJADAJ0BKiQAJAA+kUifS6WkIqGjiACwEglnAMtagAAc1IIAUQAA/u9RL/+Ic6HOhzMZ/xvN5rWgTdV4brl6ipecTAAA", Kl = "data:image/webp;base64,UklGRoAAAABXRUJQVlA4THMAAAAvP8APEA+wUDNx2v+tj2G4iW0rkk7vIQ4GKdiaDKQhBQmEs1CNg44j+p+e+w0vBiTGQkmMjZoYFy3xCfRIj3wCLTEuaubeKJO5YC5lwr3VDONqCT6hR+jxE6ClcUHN9wZlzgXMCdwZGAn4RKAHoF1AWTwAAA==", Xl = "data:image/webp;base64,UklGRnQAAABXRUJQVlA4TGgAAAAvP8APEA8wUTMxtFsfh2AU23aTl4SyRAJSkEakIQUJWdL7pQuI6L8it20b5dRpO/mFflkBNObIACYwH/GzDlTlkbqAaA7RDKIpRN3nopfpRbjgFX5E/8zDfFd5/UmAHxm/nFcDgn5YAg==", ql = "data:image/webp;base64,UklGRoAAAABXRUJQVlA4THMAAAAvP8APEA8wUTNx2v+tj2G4iW0rkk7vIQ4GKdiaDKQhBQmEs1CNg44j+p8eQFmAdgE9AJ8IjATcGZgTlDkXqPneoKVxQY+fAJ/QI4yrJbi3mmEuZaJM5kLN3BstMS565BP4BHpkXLTE2KiJsVASAxJveHluAA==", Yl = "data:image/webp;base64,UklGRpwAAABXRUJQVlA4TJAAAAAvP8APEA+wUCuxs2QDFIX/7zXGh8NVtW1tAyfzjigIRjJsdbdOagUpSOCyG5L8b5eCiP5PgPrzBlbwgJeWYrZoTlLnYrXY+ZgtHiFq4RqVEI8wggUDFWSgP8qgAgMWRrAf/PgSxw8ecIEAHhycPnLgIcAFHvCCeBZO0QguVsPCx6xbuKhrSYmno6RGaKGGvwU=", Zl = "data:image/webp;base64,UklGRpoAAABXRUJQVlA4TI4AAAAvP8APEA8wUSMxtGTSNm3n3/Cu+HA4qm3baQ59iASkII0v7TuIBSRkSL+D+yBFQUT/J4B/zlUkBbPU2SINdkmTSRKQrIDZOnhbD4sNTw4b4bLpicIHKSruclT9zxx1n+Wo+l2Kis+IeHDZ9OSwERYb4LD+poPLqpsC5EQjJOvtJVWQVR0jRjgPUe6ixL8D", $l = "data:image/webp;base64,UklGRroAAABXRUJQVlA4TK0AAAAvP8APEA+wUCtx2v8buMcw4Mi2tkh5XfaFkxrwbwRnXy1RFxEpu2FkI3/VWDoh8tMXaUHziP5PgP7RkXSQ9Eg8x0ngDqA5FAHiOYA1sQcKefs0UtkSD9gTh8o8K1bULeuWinVUmueWWJ/uO8YdR8TU5otT1m3N2j6puVFp/kIhbsnbHCEOLY8ravMPvK4/AeuobIn1bdy1rKGFXnMn0GM8j/XoNI8leVNrGbX9kwA=", ec = "data:image/webp;base64,UklGRr4AAABXRUJQVlA4TLIAAAAvH8AHEB8gEEhS3B9mDQEJEQ/8H0sgmyx/nfyuJgABxuokjP4hfFFn3Q0Kt7W1t8knciw9gktK9xqB9MhBI1BSOszgUeh92EET/eIcRojo/wTon2UvUR5jz9ygMACSgplKazOU9iaTjiZKJFWmeh0NfOl7pq9lwHly7064QH4r1kwDn0P7YOpJul9dql/C6g09Qa8E6die8kOU9hwjmbQGGErBTCUZSbpBYcpj7BmVPf0T", tc = "data:image/webp;base64,UklGRsIAAABXRUJQVlA4TLUAAAAvH8AHEB8gEEhhGy4QIFjw/0ogQPCfI5CYhtj07yGFYL64AFP7AKfWtrfN6969GcIPQbsguD2/e7e39kMIAY3iEQgJAI+Ckq3nUwqEiP5PgP719ePDPAENSTEQSQqA+102Wee4aTBxb3wwWkJOABcgjYsTtwSetYymwP1jUTEJNKan1CfQmXbcNIGSuZNpekp9x3c1BTqSpi8f3iwj+YLJHjF9oCgpAJL0AJmRJ8o5U8xRW/8LAA==", rc = "data:image/webp;base64,UklGRqoAAABXRUJQVlA4TJ0AAAAvH8AHEB8wUAKBFB7CAoEkf579VggAARrrqOKIonjBUH04qq09aj7mZfY1EQlEGmK6r4QgAQe1MLfMb/GHc5AQ0f8J0JkhS4Q9ZmYEbwAkDaaRHsZJq2ml3USJpEIq6/BrO5L3uI9/UPT4tR0pBpLNUZ8qjjru8CcPuD0+yIS/XkaknSwQpZXbTCs9AJw0mEaSkaQRvAl7zIxCpjMBAA==", oc = "data:image/webp;base64,UklGRrwAAABXRUJQVlA4TLAAAAAvH8AHEB8gEEhhGy6QTXaF/F0TCBD85wikJgABxkqliv4dnHEFbpcLt7W1t8lHziWjuNcCZB45te6IvZZgFHovod67oOARIvqvNm0DJslcz1AV2rrvtHWeTpD9ASDpBtCT5gAtaQ0wlrYATuL8OX+Q5ZHnE+oFvfvoRsMwmrfu1Ay/zfdC7YbHXgjjo2bAbaFWwKCEhsWVgy114U7ZlnBfuDfcH/lDAgj/Cv8L/6xAAQ==", nc = "data:image/webp;base64,UklGRrwAAABXRUJQVlA4TK8AAAAvH8AHEB8gECA49D9jQ0BCxAP/xxIIEPzv+KMmAAHG6v/rpI83quhnOg6OItuWmsu0ZPklIIH9LxSM95NJBBKICCTExs83ETvje68KCRH9V9i2baN07+oMHIlU6JPCrtKJbASSBLAKNdALFTALDgjCDlAFkqbY2JzcjblndWt7Zl4X2UoVtcVrMs9HjBdmG++p6Jgnxuc7soAGCNJ5AbMscfb/1ofxY3y11p/1eSAAAA==", ac = "data:image/webp;base64,UklGRsAAAABXRUJQVlA4TLMAAAAvH8AHEB8gEEhS3B9mDQEJIQ/8H0sgQPC/44+aAAQYq38AiTTyRhV+0HdwFEm228zXd44nQRAE34XAeZ0ThHwXAR8/BAMwg8/tSVWCENH/CaDO6EviJnizkzIjScDdDGFumrA2KWxMAIVN2Iio5mkyly80vHXvSnL9n9+pXK7z5/yRu6t0WJWXuapC8fAbK4nyEOWRg1yw6cItwDqDXQpzJYWacJekIWAAdlJm4iZ4Q/TUCQA=", ic = "data:image/webp;base64,UklGRrwAAABXRUJQVlA4TLAAAAAvH8AHEB8gEEhhGy4QIGjw30ogkOTPs99qAhBgrErq6B/BGVfCbbxwU2vbm7yh1zESGBmz/xJoD71JYGSMCaSwx8QnASX/93EiIaL/atu2YeQkU88ZaqO64zsdzNkVqgyApGdmLK0yfWmXKaVDxiQMDqhmvitfdBrG1+pJN/lQJL4Hu1M8cRpHkqdIPqFo+Eh7ujWL9/JIR/QPtkI6/OBi8d54/59/SADxX/F/8Z8tJA==", sc = "data:image/webp;base64,UklGRqYAAABXRUJQVlA4TJoAAAAvH8AHEB8wUAKBFB7CAoEkf579VhOAABuzMikiiHjBuHK4qm0rbi6h8ygFCSAtzkBCJERC57mcj0fXqoSI/k+A/plcI9XszAOCAZA0mLl0MHvpY6JUTZZoKrVcT/jEB11hfwkHfCF84gM/0Jz/KpAr+ALrEXwPvkCXoOvBqSVVfCFLH9YjUTqQK3tpAJhLMpL0gGBSzc4oOf0T", lc = "data:image/webp;base64,UklGRpAAAABXRUJQVlA4TIQAAAAvP8APEA8wUSuxsxegj0M4qm2rrWClDZGAFKSBk1h5UpDAMJ12b35RENH/CVD//WTdhZwHsnxHsYdcZPvoIg/JKBAhkaS8gy0ncPk4ACfIKrgZlBYUByQa/ToMSBYUDUoWba6T4ULLA6LJFqzZgJwXMhBNFPLEEfuRI55kpr8jJGSv/hs=", cc = "data:image/webp;base64,UklGRq4AAABXRUJQVlA4TKEAAAAvP8APEA8wUSuxs2TSNm3n3+7u+HC4iW07bq7GSX4pCIYiSmFgQROUD+GX2V/xlZ1ARP8ngF8ey0yaDGlJIdV0k1qSJKCnAiMt4FJxg9CGVzip4SvctOIt1ckjbckmSpoMiS6ZS+XZkCxeWb7nM3NV8CfxypgtXzq9ULpkoQ/AGxs8Xmtwe3JK65MKkQw8LTBSgZ4AHhYt3SxqCosldTvyjwA=", dc = "data:image/webp;base64,UklGRtIBAABXRUJQVlA4TMYBAAAvP8AFEHegppEUaDGAfzM4oUMBtK8NRZGkOPPmm2whFG8IgAuK2kiBdj2ggPeNf0loADYBADSpwd4nBQhBRgJxUmBPNYNhIz/g+/9HYH8+Z47jw7onWIHX2NjKVKUh2jCcABjI1bZtbZsvzHgEeAC0ZWLSAYT2fOEyhhlMVydmlPwmYzmwl/7VvUxzSO9JSOV2j+j/BOCXxhnB7/3PbCRDV3eDmO5pWrW3Nh1gczPGSCAZgtXh9LbfJfmABtki0jKiN3FX++KMuORcoaxIVYxkmsYS7yt9g4Cux+k1eVIp9Yc0my5NvrRczZZF7cOQXomT4W9kvkj96gnnEKfJkuewpF7VHtEXcabtabJIyqNwuY0AjYiDgMiEOmPqxBkBTlgiLYBLxy+KuyJj+mJCbZ9DlsgNzzY+/MCQXtE38DnxO+E8jmiy5DksqQ/out5EnGnAZZGcA47IXdLkyyLyZXFaVddNjLz/kcz3fCKZpmkW7zMMq54wwTRJk+eZPiXv00xni0iLjVHVIyb4kORcoQd3d+8FeIC7dRVtUeDt7m7AvP2y89YN21bHJfh+YgS//m74+q1TPvwd9O78LmP/hul3Lvej+IsB", uc = "data:image/webp;base64,UklGRqAAAABXRUJQVlA4TJMAAAAvP8APEA8wUSsxtGTSNm3n3/Cu+HA4im0rcm7mJRKQ0tIaaTgJElj2/BafD5UoiOj/BEC60Sw4ZW7UQ5+GFM0lTeaQ5N2AS9IDkiR9IJvoTFDM3FONepa+rxP/LvyiDpWhbCKkvgnwLudwFkkRqJICULo+QHaSg6SHubxw3IxCpvHBJicPFYWh2KgdkzMPLJJ3+wUA", pc = "data:image/webp;base64,UklGRsgAAABXRUJQVlA4TLsAAAAvP8APEA8QEfMfAlJt7XGbp6rDUmXgQCiCmkphzLUYBEKpeGcaGQiouww6+hb/r44EIvo/Afzr4pXeZ/jOPjqb/Y23eMuSTF6vOx+DMwyjId3dO9er9w1we8FrCfAI9WByqIcIh/mmHM0mbc4RymacDZspy8wKTlZsBt14NdXIQdJQA9UcvLFXAgdJUwlA01QAqiP7QHZWzJ3s8AWgdWqnOVXS9GMjtnWqBqcpAbOkG2AjKXbwRpOlaP48AA==", hc = "data:image/webp;base64,UklGRsAAAABXRUJQVlA4TLQAAAAvP8APEA8wUSsxtGQDFIX/zzXHhwNSbe1xm0/H09IQDEXQJGg/FEHQsoOO3+JTRgQR/Z8AfXMsM8okYLEOpw3IBiCpWpLCFqnZIXU7pR+7pGH5mduKnd3gaGBLgCqkCqmCBCkgllk7YHlLf/C/wNIAwdGg1FmOBw2OgOsHlqfymJV75kudpQrlnl0/kDTTE7eVZwZ5kA3sxy6p2yk1O6SwRaqWJJkkDcjW4bSAxXQXTWOZfSk=", mc = "data:image/webp;base64,UklGRqQAAABXRUJQVlA4TJgAAAAvP8APEA+wUCsxs2TSNm3nX/C++HA4qm2rdW76EAlIQRpIQ0qKgd5ZnAHllxiI6P8ESApG1bOvJVwlQxGAhaQI7KR4Aox0BrDSu5EKJ+U+38Pf5D7bkwa9G+fCSbGhM+Al7QG6IuAbTlIArCRlcEUCW5wb+0YEM84edkXgtqqpem75Ie/REq1FJbMaALuGKUKPHeSK2OPHAA==", gc = "data:image/webp;base64,UklGRgIEAABXRUJQVlA4TPUDAAAv/8A/EB8gEEhhGy4QIFjw/0pAQsj/NQ4SkBDZ5Yz/IxQX6SYs6MjaNgVWPn6KuoUtIUvA2ZCcJRDw8WMVdZsl4DwrmyDv2NycDRiSd+gG5lm7++d73+9qHNH/CRCPXS7O19JbX1Ftv/51+9df37yRVjBtUZ/8ISQ0TM81MWGqiT7RxFaenom2mFKm7DyrpoaEQXmit0WTm6TAMqZpeGrUnGTRi81TUTOS+YqGJ1RLjkMvt2zzNb15ZFOtKA413B/pVAuKyUKrB4tqw7Cp6RlEpCeZbPTbIDKotgSbWv8Q7lW1IZjNHic4FFzgZm/3iq4QLz14DssARyUii8JzQF+KyIgT4JCJrArfERpki7gW0KnIpPgKsJ6yKWEOmHeZCXYBjvW9EjYIrUeGADiUshHgQnEGxMpwBkFODDcCHQhuBBtxbwv2UPgu4BV3g5phjaAVHlAd7G1B97A72AyLATXAdkGPsAIWYaW7zF0O0/892X9eidpefJW74oX3IaxByXfuKnfPoreXB28yuetRBW5xd7gTVEUQQSXBAMoIencLKCfoQIFA/I3uZneru87d5k5Gd5O7FZJTHJCMQvwNiJJjQlQcC6LhOBAth0RATTIATpIeoIFjQeQcG6LkkAgoSAZATTIBTpIFoDnHgSg4BLGTjADNOWZEw9EjNFAskIbigGhgEExDMUJ2ihmigaHHZAwLpmTo3G2YnEEiJFAMiFMoZ0TN0SMKjgVRcnSIwLEBTiEFtCyjXcUy2wWWyWwX1tWsolnMAs1h1QjtZpXziNEuxKNNxTTYZEyTu94mZ1psAlPn7nC32Qi1v/giOt29zaWGp3hTrs0kc1dRHSYlVWeSuQtUi8Up1KvFztVbtFyTRcE1W1Rcg0XGNVrkXNEicKmlUG8WJ9dhsXN1FjXXYtFyrRYNV+9usii4BouKa3QXLUou9baZZFSdt3hrkhMtasvUGwWi2d1oJMTq7TA6ibq05v6JnWhNy+T7x2qiKS2I3MUHLdGcdIqIbF+pakE0JtUPRO5uNSeKSe1j3JsmNx6OtMpDl1Z6+Cwtd7BpenCwXBCHfdruYUirPcS0xsGm6YWD7kLlYLlQOOgvtA7mC7uD4YI6iFcCn17N6A533aWSbnHXu5suVXSzu/FSQRfd6eWG7bjWsnXXarbl2snWX3uHbbpWsQ3XWrbx2s6mhoFrs8i4OouKa7FouHqLmmuyOLkGC+WKJoFKTTOmw6Zk6mwqptWmYJpsGqbBpmWKNjWTejuMdqLF6CTqjZRodjdaBR61zmk2s4ymc7ealTS9WUUzmxU0g7to1rBsat6yHHY1S+dutdtZeruTZbJTlsHdCAgkEZCDAAA=", fc = "data:image/webp;base64,UklGRrAAAABXRUJQVlA4TKQAAAAvP8APEA8wUSsxtGQDFIX/zzXHh8NRbdtNdbNoQyQgJdKItCcFCQxbFmdw86uCiP5PgP45uhZrI6CzHWarkA1AUrEkhXXSZpO02ywdtkjV8juPrZarwXLAG6WVXgXk2vLuJ90B3QbpgOmt7sVkAfmA7nellQpMW6sLSIJUQG88dMFqYNXyO4ct0m6ztNkkhXVSsSTJJKlCth1mC+hMz6pmdK0/BQ==", bc = "data:image/webp;base64,UklGRr4AAABXRUJQVlA4TLEAAAAvP8APEA+wUCtx2n8CAYrC/51mxMbDUSPbcfSyHw0hUAIthmYohuDj7E+a/54jBUFE/xm5bRuJOc0+TvIK3Fgf8gBQSXIDWkjyWjn8hROgFHACwA/5kC8MZQ+PqaTQprIBKPUK6lTV9teS+p2KFJkcQiGnUPfHFtpWk5iKGrJ4DHkXwN2GLNqQO3k8n+f1/P1+gPR+dfvn/fT+XurMw+fj87L5+Tx9vj5vn7/vg+/HfQUA", vc = "data:image/webp;base64,UklGRvIAAABXRUJQVlA4TOUAAAAvP8APEA+wUCsxsy9wj0PArm1bdbJf3PMrwHspRDughZSBx5M/QgevFBz+oAO3X4fIHXcj56ANRPR/AvAP68rZ1jeKZ2dCXTn7wrmwda7dS5dSWxncSpnDR8E9ngqzJ1LJEjkAC5ZoALgzjTN+ojeiA5wRllFgq9Ek54Gt6oj0A2hWLekDzaohN0NoNmDohwBiRD8AMKjQ0PvUMPQgZQHYqpU8fiEKwAyVQzIIbIx2heL95aMQvLv/VIuMRqdBoJlaWDgKAnBKKwLc0rqQVaLuUAi6AwFZJSo1taAWheAEBUBzlD8JAA==", Ac = "data:image/webp;base64,UklGRoAAAABXRUJQVlA4THQAAAAvP8APEA+wUCuxsy+wj0O4rm2ria75kxIshdLAziiFEvhUJ9wJ7y5jARH9nwDcorOit1LYkrmlqGDNm55+y3vcQuUAREaSROL0V4kmbxlEs1slICrR7DaIZrfKCjibF6NwyKzUWzxFIQckVtlCJBvAAyXgxA==", wc = "data:image/webp;base64,UklGRowAAABXRUJQVlA4TH8AAAAvP8APEA+wUCsxtATZNtvu73qE+HC4jWw3bj5HB0KUgFJUmlAaSmEJCCVfP/jjVHFE/ycAz7XozQVoxkUHLgngJ6d4CwGAyEM+I0OuUS69lMlcypIcUuQyl2lT7F9ZyVKWJASAuPSSIdfIQz4DFAI/evOUuOSSAFocKHpzwXMFAA==", yc = "data:image/webp;base64,UklGRlwAAABXRUJQVlA4TE8AAAAvP8APEA8wUCsxtATZNtvuT3uB+HAwjiSpzWRCKIRG2t57kP4R/SeatmndXHcG/1GnlJKA2FCQOtdMZnxD8jnHnnv9k78+59i1378xf1YAAA==", xc = "data:image/webp;base64,UklGRlgAAABXRUJQVlA4TEwAAAAvP8APEA8wUSsxtGQDFIX/7zXGh4NRbLtO7m+wjIRIwRrSIiVO6L0uI/ovICgywQtuUFfTJWg7sU7AOvW5xjsF/31shXony78rvy8P", kc = "data:image/webp;base64,UklGRnwAAABXRUJQVlA4TG8AAAAvP8APEA+wUDNx2v8L7McwXMW2GzfSePtUGJhCGQiaiHfvu90QRPR/Aux/T3CGa1O3gIQbNViwoeDmsGBDwc2hQUDCjRoEJBTcHNpH66P2kasylRDQwFRCQANTBRsWuCpTGxY0MJUQ6trU2fQBfwsA", _c = "data:image/webp;base64,UklGRsIAAABXRUJQVlA4TLUAAAAvP8APEA8wUStx2n8CAYrC/7EWxMYDcmvbcZsrSPZfugED7CQszSyNpbCEzKPAu/jO3EBE/yeAv9xXWpoyVui63q5wq+U2YNeapnobNNW7oBvDh2AIvgS3FXaD1wKvKWAY7Ct0g7lAS4AGQkuXa61+Y20F0KUn4AdO/678VPusfodLOoPpBmaqMBdoFfYVeoXXgJEKvBa4rbCfYAgGdGO4QlNdgKkC7FrTrZbUdU1MudrXa38UAA==", Sc = "data:image/webp;base64,UklGRsQAAABXRUJQVlA4TLgAAAAvP8APEA8wUStx2n8CAYrC/7MOxMbDbWxbcXP/SDIhJdCGMxrzVhql/BIUemF4wZe8VRDR/wngb29Gm4A2IQGemjSB57tUwEuXKniVJHBFC8k1BVDCVaFnXAXuBVcGr7gKtFDhdsV1BYIABYOx0629A9wnNj9bv5d+Nn3r/pltdeO4cwoDRtDOFYbB7Qp9glahJ/AK9wL3AmuFnsEFStCUV01wkyQDhiSALtWwSjk0aQqMK5s32/pT", Cc = "data:image/webp;base64,UklGRqoAAABXRUJQVlA4TJ4AAAAvP8APEA+wUCtx2n8yaZu28693b2w8XEW23TY3/VMQBEXQFDMzg1AwhPSeHDdVBBH9V+S2bcPcuuv2FapZ3W7uaee+rpa/z3NsoDHS8wAXOwIYfSdO+k98hJhVjj/ui5e+mCNOerLrsNKRVYuROhZ7dlI7WcVJMenmcKHw/OF9wvvN71uSRzq3MM8w30jeOi6gMbnvU/t9nzbyPyqWAA==", Ec = "data:image/webp;base64,UklGRnYAAABXRUJQVlA4TGkAAAAvP8APEA+wUDOxs2TSNm3n3/Cu+HAwaiPJUV+c50JYKANtqQ2UCwAOQpz6LYCI/k+A+hsmxSRFlTaTNoebBjAo4NDgHsCggEODe4cTLri7c8EJe9a2zKGAwZA1ZQ4FDAZQ5llUMCkm9RcA", Rc = "data:image/webp;base64,UklGRq4AAABXRUJQVlA4TKEAAAAvP8APEA+wUCsxsy+Ij0M4qm2ndi5lkCESkIKlOgBpkRIJGb5+M+CmXwMR/Z8A/L0lXpKayBERAWu+Fe22VR1KbK5NLJCUJ6t3JgdrzrqxoWwuFkjKk9U7k4M1Z93YUDbX1jwAFxOLAiM1kaRtEdE1yEjmYoGkPFm9iwngchBrzrqxoWIN8LnEYocoKSdWsYgApIFqZ2swzOSZ3JMjOSffBAA=", Pc = "data:image/webp;base64,UklGRlwAAABXRUJQVlA4TFAAAAAvP8APEA+wUCsxtC+gj0MwaiPJUV/s51BeaAtlIAyDS5vDvSP6PwEY9xWECy0+tMU0xB8gJoBRqQS0xhVsiYBSawhgYtQrSB/aYi60IIRxAw==", Ic = "data:image/webp;base64,UklGRrYAAABXRUJQVlA4TKoAAAAvP8APEA+wUJ/4n1kCAYrC/6suRKcDcm3tjZNnG/iXKkGNzNFPSXQwf2l/KWS2XpK/hTSBUEBE/yeA//hVPvjW3IWkLiUdgFvntTsb5wN8vp24PYEEt0ZohtuyyiEKaQ5U0uoescCSL7SFaaFt8oW64AttYdrUSHMk70KqpM25pnQhnUhTFCBM1E46LDUAvZwG3w+jm7SpI60NoixUH6kOWPouo9fT6Jo/CQ==", Tc = "data:image/webp;base64,UklGRqgAAABXRUJQVlA4TJwAAAAvP8APEA+wUJ/431kCAYrC/6suRKfDUSRZldQTP45IeEYmeOuM52As4WAtIGGPnOgDvP0LiOj/BOAXb05bZz3OKC+Y6CymSQneOalreuGxeDJpcCwOPRu5AsyFjLCJwKjmgFSUIACSc76UHHXEUSc550vJUUc+os9YRAkZKE4dCNQwrKjrEPBYYBcVbYHxTnK4SAJg6MwA+tqo+MM=", Nc = "data:image/webp;base64,UklGRrAAAABXRUJQVlA4TKQAAAAvP8APEA+wUCuxs2QDFIX/v7XHh8NxZNtSchn/khBIw52GZADgkBlm8s1gnn9xF+9dKI0gov8TgB+m4LF1dtw6kVSZOTWpMK/i5WUxmASvw+CthsaJe2dzmtNNOKhgknidjuJQmPVpnxmcMvwLuRTMRBDNlIVpgVHwKp7CtsAoknjNOokoBrGbBTWKJF6TGgAnEUkGAAPJAsCOZAYA5Bb2xeD8KQ==", Oc = "data:image/webp;base64,UklGRrwAAABXRUJQVlA4TLAAAAAvP8APEA+wUCsxsy94j0PArW27sXKwylAD37SBJ6QNyiAblUXoGnksGhDZ9yfQGEwDEf2fAP7/QXOjPgBF7YDXE3hujqACcQTR8Hv1aNJJ38tQ6rscmKUwNzl8IFhchB3BIQ8sQwnyrC/dTijpsgcIdr/wegTxYU/9ktcEq08pqt9CU4WdPq4EwrSbkg99adV3VHu6p9KT69GhZ5d6li5t1HGvozqgqA8A6rJZaWr+KA==", Uc = "data:image/webp;base64,UklGRmgAAABXRUJQVlA4TFsAAAAvP8APEA+wUJ/4P+0/2QBF4f97jZH5YBvbVpTnHloCpVgalEYplmC4ewPA3Tyi/xOgJ+82BhEH2TEPhaQRwEhr0N0xBkYP7gGaL/BB8UcuyL5EgSTtYIMB2uDpAA==", Bc = "data:image/webp;base64,UklGRgABAABXRUJQVlA4TPMAAAAvP8APEA8wUStx2n8CAYrC/7EWxMYDbrNtkZwX7fFnpgHLtOGbljbcaA5NYWbkRsicknmPX/wB+Kwgov8TwL9PZg7MTWYbJoPOCNWEFEHNkwM8nwIlwLEETh4OOaICOY3UDeTVqA7SYhgwic0jgNT32Pj60bnTz9A8n8w398WkORTbNCWba/JqtGkeO9PyhcQOfujdaO9WXef+tOkcS69k6Zyy7+gaOnXpmcQvhmYyX5tkQZv8Fk8OKCGWDXDyQxFARXNTN7r6xp3mABhliTCNZImQRpIfIEdSUCiBKajj5MHMoQLVNuimEaoDNY85OJnn3wMA", Qc = "data:image/webp;base64,UklGRrYAAABXRUJQVlA4TKkAAAAvP8APEA+wUCuxs2QDFIX/37XGh8NRbdtNRWcYCUiJtJcZtiIlOMgQfnl3LV6hKIjoPwO3bRux+/ad7xXNmyX3GpO+HKCGCgTxA6IAgFMSrbqHOrCIWd1MnbiLRd0RiB4W5IEqjqS117LW37HF33qivOw994VyqD3PhVKorccu9CHehe6/z/33v/xO19/x+jvb72/zsPnYvGx+Jk+br83bz79hcv6PF0sDAA==", Lc = "data:image/webp;base64,UklGRu4AAABXRUJQVlA4TOIAAAAvP8APEA+wUCtx2v8byMcwIMe23bZ5mL/4y18CS0FpoHMZbgVyXKqFP+MG4KyAwVt8OFYQ0f8JwH+sMms2Y5lUUkIjLXQyB5IEsLIMJqAydwrgXHZUoAUDdtfW9gvQt9ZeM9Bvrd1mYGzUzwowqroUoLi6DiCHjjW7uPa0Li5Vd6l+ZaHJN0hS/Sek+Ex/Raq51qBNqvrMXP0bO6lL6LLO0prDSGtxa8oEurUrAtxYeyQwHpfdUwHGdunHAnTmzhzIsAsL0IIBHhSoQYA1JAABADqZQyMtVFICRsG02azK7I8B", Dc = "data:image/webp;base64,UklGRqwAAABXRUJQVlA4TJ8AAAAvP8APEA/wqP+RmNllD0s4im0rjm7PSyR8KUgL0iIFCSx7zvB4rCIgov9q27ZhnKkX+wuOaw0gwfMEJeB5gVl4QBUStIDWpaBm+D5gnuB/gbLAcgKWkwIqV1IjagZ4phYALbRUh2upDtdSKEu3FJaFDv+pA9/cgWc43BmU+CC/3//x//xf/9/5GPDjfDl/zqfz63wb/67HQB/Xa6DfYQ0A", zc = "data:image/webp;base64,UklGRnYAAABXRUJQVlA4TGkAAAAvP8APEA8wUStx2v8n1McwWEW21eZlEIAEpCCNwRlWcMAnqbR70wVE9H8C5H9zKaUYCQWqhHRGZkOWHci9r5QyFxyJJ9NBNpJIIMK2SwUFkshGDuQLjmQejgLd+zZkWUYmIR2QkjwY+V8A", Mc = /* @__PURE__ */ Object.assign({
  "/src/widget/icons/arrow-left.webp": fl,
  "/src/widget/icons/arrow-right.webp": bl,
  "/src/widget/icons/categories/adjective.webp": vl,
  "/src/widget/icons/categories/all.webp": Al,
  "/src/widget/icons/categories/alphabet.webp": wl,
  "/src/widget/icons/categories/animals.webp": yl,
  "/src/widget/icons/categories/art.webp": xl,
  "/src/widget/icons/categories/asterisk.webp": kl,
  "/src/widget/icons/categories/body.webp": _l,
  "/src/widget/icons/categories/communication.webp": Sl,
  "/src/widget/icons/categories/countries.webp": Cl,
  "/src/widget/icons/categories/economy.webp": El,
  "/src/widget/icons/categories/education.webp": Rl,
  "/src/widget/icons/categories/family.webp": Pl,
  "/src/widget/icons/categories/fashion.webp": Il,
  "/src/widget/icons/categories/feelings.webp": Tl,
  "/src/widget/icons/categories/foods.webp": Nl,
  "/src/widget/icons/categories/fruits.webp": Ol,
  "/src/widget/icons/categories/health.webp": Ul,
  "/src/widget/icons/categories/jobs.webp": Bl,
  "/src/widget/icons/categories/locations.webp": Ql,
  "/src/widget/icons/categories/machines.webp": Ll,
  "/src/widget/icons/categories/measures.webp": Dl,
  "/src/widget/icons/categories/nature.webp": zl,
  "/src/widget/icons/categories/numbers.webp": Ml,
  "/src/widget/icons/categories/people.webp": Fl,
  "/src/widget/icons/categories/politics.webp": Vl,
  "/src/widget/icons/categories/religion.webp": jl,
  "/src/widget/icons/categories/sports.webp": Wl,
  "/src/widget/icons/categories/technology.webp": Gl,
  "/src/widget/icons/categories/undefined.webp": Hl,
  "/src/widget/icons/categories/verbs.webp": Jl,
  "/src/widget/icons/chevron-down.webp": Kl,
  "/src/widget/icons/chevron-left.webp": Xl,
  "/src/widget/icons/chevron-up.webp": ql,
  "/src/widget/icons/collapse.webp": Yl,
  "/src/widget/icons/comment.webp": Zl,
  "/src/widget/icons/dictionary.webp": $l,
  "/src/widget/icons/emotions/angry.webp": ec,
  "/src/widget/icons/emotions/automatic.webp": tc,
  "/src/widget/icons/emotions/default.webp": rc,
  "/src/widget/icons/emotions/disgust.webp": oc,
  "/src/widget/icons/emotions/fear.webp": nc,
  "/src/widget/icons/emotions/happy.webp": ac,
  "/src/widget/icons/emotions/sad.webp": ic,
  "/src/widget/icons/emotions/surprise.webp": sc,
  "/src/widget/icons/expand.webp": lc,
  "/src/widget/icons/facebook.webp": cc,
  "/src/widget/icons/govbr.webp": dc,
  "/src/widget/icons/guga.webp": uc,
  "/src/widget/icons/hands.webp": pc,
  "/src/widget/icons/help.webp": hc,
  "/src/widget/icons/hosana.webp": mc,
  "/src/widget/icons/icaro.webp": gc,
  "/src/widget/icons/info.webp": fc,
  "/src/widget/icons/instagram.webp": bc,
  "/src/widget/icons/libras.webp": vc,
  "/src/widget/icons/like.webp": Ac,
  "/src/widget/icons/link.webp": wc,
  "/src/widget/icons/menu.webp": yc,
  "/src/widget/icons/pause.webp": xc,
  "/src/widget/icons/play.webp": kc,
  "/src/widget/icons/repeat.webp": _c,
  "/src/widget/icons/rotate-left.webp": Sc,
  "/src/widget/icons/settings.webp": Cc,
  "/src/widget/icons/skip.webp": Ec,
  "/src/widget/icons/subtitle-off.webp": Rc,
  "/src/widget/icons/subtitle.webp": Pc,
  "/src/widget/icons/thumbs-down.webp": Ic,
  "/src/widget/icons/thumbs-up.webp": Tc,
  "/src/widget/icons/touch.webp": Nc,
  "/src/widget/icons/translator.webp": Oc,
  "/src/widget/icons/trash.webp": Uc,
  "/src/widget/icons/twitter.webp": Bc,
  "/src/widget/icons/waiting.webp": Qc,
  "/src/widget/icons/worldwide.webp": Lc,
  "/src/widget/icons/x.webp": Dc,
  "/src/widget/icons/youtube.webp": zc
}), R = ({ className: e, name: t, colored: r = !1, style: o, ...n }) => {
  const i = Mc[`/src/widget/icons/${t}.webp`];
  return /* @__PURE__ */ a(
    "i",
    {
      ...n,
      className: C(
        "inline-block shrink-0 bg-center bg-contain bg-no-repeat",
        !r && "mask-(--icon) mask-center mask-contain mask-no-repeat bg-current",
        e
      ),
      style: {
        [r ? "backgroundImage" : "--icon"]: `url(${i})`,
        ...o
      }
    }
  );
}, Fc = () => {
  const { progress: e, isLoaded: t } = q(X("progress", "isLoaded")), [r, o] = O(!1);
  return S(() => {
    e === 100 && setTimeout(() => o(!0), 1e3);
  }, [e]), t ? null : /* @__PURE__ */ a(
    "div",
    {
      className: C(
        "absolute inset-0 z-9999999 flex flex-col items-center justify-between border bg-background p-4",
        "widget-radius"
      ),
      children: [
        /* @__PURE__ */ a("div", { className: "grid place-content-center rounded-full border px-2 py-1", children: /* @__PURE__ */ a(R, { name: "govbr", colored: !0, className: "h-4 w-12" }) }),
        /* @__PURE__ */ a("div", { className: "-mt-4 flex flex-col items-center", children: [
          /* @__PURE__ */ a("div", { className: "mb-2 overflow-hidden rounded-full border-6 border-primary/30", children: /* @__PURE__ */ a("div", { className: "relative flex mobile:size-18 size-20 justify-center overflow-hidden rounded-full bg-primary", children: /* @__PURE__ */ a(R, { name: "icaro", className: "absolute bottom-0 size-14 size-15dmobile: text-primary-foreground" }) }) }),
          /* @__PURE__ */ a("p", { className: "mobile:mb-1 font-bold mobile:text-sm text-base", children: "VLibras Widget" }),
          /* @__PURE__ */ a("span", { className: "font-light text-muted-foreground text-xs", children: [
            "v",
            "7.0.0-alpha.0"
          ] })
        ] }),
        r && /* @__PURE__ */ a("span", { className: "absolute bottom-8 animate-move-up font-semibold text-muted-foreground text-xs", children: "Iniciando..." }),
        /* @__PURE__ */ a("div", { className: "bottom-4 h-2 w-44 rounded-full bg-foreground/10", children: /* @__PURE__ */ a("span", { className: "block h-full rounded-full bg-primary transition-[width]", style: { width: `${e}%` } }) })
      ]
    }
  );
}, Vc = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_PUBLIC_POSTHOG_DEBUG: "true", VITE_PUBLIC_POSTHOG_ENABLED: "false", VITE_PUBLIC_POSTHOG_HOST: "https://us.i.posthog.com", VITE_PUBLIC_POSTHOG_PROJECT_TOKEN: "phc_rkupE6DkPSJl7SntaagI0wq0FCKtg3lVP0UkC95NGYe" }, jc = 1e4, rn = {
  development: {
    TRANSLATE_URL: "https://traducao2.vlibras.gov.br/translate",
    DICTIONARY_URL: "https://dicionario2-dth.vlibras.gov.br/2018.3.1/WEBGL/",
    DICTIONARY_STATIC_URL: "https://dicionario2-dth.vlibras.gov.br/static/BUNDLES/2018.3.1/WEBGL/",
    DICTIONARY_CATEGORIES_URL: "https://repositorio-dth.vlibras.gov.br/api",
    SIGNS_URL: "https://dicionario2-dth.vlibras.gov.br/signs?version=2018.3.1",
    REVIEW_URL: "https://traducao2-dth.vlibras.gov.br/review",
    BUNDLES_URL: "https://dicionario2-dth.vlibras.gov.br/bundles"
  },
  homolog: {
    TRANSLATE_URL: "https://traducao2-dth.vlibras.gov.br/translate",
    DICTIONARY_URL: "https://dicionario2-dth.vlibras.gov.br/2018.3.1/WEBGL/",
    DICTIONARY_STATIC_URL: "https://dicionario2-dth.vlibras.gov.br/static/BUNDLES/2018.3.1/WEBGL/",
    DICTIONARY_CATEGORIES_URL: "https://repositorio-dth.vlibras.gov.br/api",
    SIGNS_URL: "https://dicionario2-dth.vlibras.gov.br/signs?version=2018.3.1",
    REVIEW_URL: "https://traducao2-dth.vlibras.gov.br/review",
    BUNDLES_URL: "https://dicionario2-dth.vlibras.gov.br/bundles"
  },
  production: {
    TRANSLATE_URL: "https://traducao2.vlibras.gov.br/translate",
    DICTIONARY_URL: "https://dicionario2.vlibras.gov.br/2018.3.1/WEBGL/",
    DICTIONARY_STATIC_URL: "https://dicionario2.vlibras.gov.br/static/BUNDLES/2018.3.1/WEBGL/",
    DICTIONARY_CATEGORIES_URL: "https://repositorio.vlibras.gov.br/api",
    SIGNS_URL: "https://dicionario2.vlibras.gov.br/static/TREES/2018.3.1.json",
    REVIEW_URL: "https://traducao2.vlibras.gov.br/review",
    BUNDLES_URL: "https://dicionario2.vlibras.gov.br/bundles"
  }
}, wa = "production", Wc = rn[wa] || rn.development, ye = {
  ...Vc,
  ...Wc,
  REQUEST_TIMEOUT: jc,
  MODE: wa
}, Cr = fe(() => ({
  isInitialized: !1
})), Oe = {
  get: Cr.getState,
  set: Cr.setState,
  subscribe: Cr.subscribe
}, Er = ["icaro", "guga", "hosana"], ya = () => {
  P.set({ isPlayingWelcome: !1, isWelcomeFinished: !0 });
}, re = (e, t, r) => {
  P.get().send(e, t, r);
}, yt = (e) => {
  if (!e.baseUrl && !e.personalizationUrl) return;
  e.baseUrl && re(ne.PLAYER, G.SET_BASE_URL, e.baseUrl), e.personalizationUrl && re(ne.CUSTOMIZATION, G.SET_PERSONALIZATION, e.personalizationUrl);
  const { config: t } = P.get();
  P.set({ config: { ...t, ...e } });
}, pe = (e) => {
  if (!e) return re(ne.PLAYER, G.SET_PAUSE_STATE, 0);
  re(ne.PLAYER, G.PLAY, e), P.set({ gloss: e }), Oe.get().onPlay?.(e), P.get().isWelcomeFinished || ya();
}, xa = () => {
  const { showSubtitles: e } = P.get();
  re(ne.PLAYER, G.PLAY_WELCOME), re(ne.PLAYER, G.SET_SUBTITLES_STATE, Number(e)), P.set({ isPlayingWelcome: !0 });
}, xt = (e) => {
  const { region: t } = P.get(), r = `${ye.DICTIONARY_STATIC_URL}${t.abbreviation}/`, o = ye.DICTIONARY_URL;
  yt({ baseUrl: r }), e ? (re(ne.PLAYER, G.PLAY, e), Oe.get().onPlayStatic?.(e)) : re(ne.PLAYER, G.SET_PAUSE_STATE, 0), yt({ baseUrl: o }), P.get().isWelcomeFinished || ya();
}, mo = () => {
  const { gloss: e } = P.get();
  e && pe(e), Oe.get().onRepeat?.();
}, ur = () => {
  re(ne.PLAYER, G.STOP), Oe.get().onStop?.();
}, pr = () => {
  re(ne.PLAYER, G.SET_PAUSE_STATE, 1), Oe.get().onPause?.();
}, go = (e) => {
  re(ne.PLAYER, G.SET_SPEED, e), P.set({ speed: e });
}, hr = (e) => {
  const t = P.get().avatar, r = (Er.indexOf(e || t) + (e ? 0 : 1)) % Er.length, o = Er[r];
  re(ne.PLAYER, G.SET_AVATAR, o), P.set({ avatar: o });
}, fo = (e) => {
  const { showSubtitles: t } = P.get(), r = e ?? !t;
  re(ne.PLAYER, G.SET_SUBTITLES_STATE, Number(r)), P.set({ showSubtitles: r });
}, Gc = (e) => {
  const t = `${ye.DICTIONARY_URL}${e.abbreviation}/`;
  yt({ baseUrl: t }), P.set({ region: e });
}, ka = (e) => {
  P.set({ emotion: e }), re(ne.EMOTION, e.action);
}, _a = ({ color: e, outline: t, shadow: r }) => {
  re(ne.CUSTOMIZATION, G.SET_SUBTITLE_COLOR, e), re(ne.CUSTOMIZATION, G.SET_SUBTITLE_OUTLINE_COLOR, t || e), re(ne.CUSTOMIZATION, G.SET_SUBTITLE_SHADOW_COLOR, r || e);
}, Hc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pause: pr,
  play: pe,
  playStatic: xt,
  playWelcome: xa,
  repeat: mo,
  send: re,
  setConfig: yt,
  setEmotion: ka,
  setRegion: Gc,
  setSpeed: go,
  setSubtitleColor: _a,
  stop: ur,
  toggleAvatar: hr,
  toggleSubtitles: fo
}, Symbol.toStringTag, { value: "Module" })), Sa = {
  content: void 0,
  action: void 0,
  auto: !1
}, kt = fe()(() => ({
  ...Sa
})), er = () => kt.setState(Sa), bo = (e) => {
  setTimeout(() => kt.setState(e), 300);
}, on = {
  get: kt.getState,
  set: kt.setState
}, We = ({ className: e, gloss: t, onFinish: r, onClick: o, ...n }) => /* @__PURE__ */ a(
  "button",
  {
    onClick: (s) => {
      er(), xt(t), o?.(s), r && bo({ action: r, auto: !0 });
    },
    type: "button",
    "aria-label": "Traduzir texto",
    className: C(
      "pointer-events-auto relative -bottom-1 inline cursor-pointer rounded-sm p-0.5 hover:text-primary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ a(R, { name: "hands", "aria-hidden": "true", className: "size-4" })
  }
), ve = fe()((e) => ({
  screen: "main",
  open: (t) => e({ screen: t }),
  closeAll: () => e({ screen: "main" })
})), _t = {
  get: ve.getState,
  set: ve.setState,
  subscribe: ve.subscribe
}, Gr = (e, t) => e instanceof Function ? e(t) : e, nn = {
  position: "right",
  text: void 0,
  isOpen: !1,
  isExpanded: !1,
  isLoaded: !1,
  isActive: !1,
  isTranslating: !1,
  isPausedByUser: void 0,
  opacity: 1
}, H = fe()(
  dr(
    (e) => ({
      ...nn,
      setLoaded: (t) => e({ isLoaded: t }),
      setExpanded: (t) => e((r) => ({ isExpanded: Gr(t, r.isExpanded) })),
      setOpen: (t) => e((r) => ({ isOpen: Gr(t, r.isOpen) })),
      reset: () => e(nn)
    }),
    {
      name: "@vlibras-widget",
      partialize: (e) => lr(e, "position", "isActive", "isOpen", "opacity"),
      version: 1
    }
  )
);
H.subscribe((e) => {
  const { instance: t } = P.get();
  t && (e.isOpen ? t.Module.resumeMainLoop() : t.Module.pauseMainLoop());
});
const de = {
  get: H.getState,
  set: H.setState,
  subscribe: H.subscribe
}, Ca = Je(null), mr = () => {
  const e = xe(Ca);
  if (!e) throw new Error("useDraggable deve ser usado dentro de <Draggable />");
  return e;
};
function Jc({ children: e }) {
  const t = te(null), r = te({ x: 0, y: 0 }), o = H((g) => g.isExpanded), [n, i] = O({ x: 0, y: 0 }), [s, l] = O(!1), [c, u] = O(!1), p = () => {
    i({ x: 0, y: 0 }), l(!1);
  };
  S(() => {
    if (!t.current || !s || !o) return;
    const h = setTimeout(() => {
      if (!t.current) return;
      const f = t.current.getBoundingClientRect(), b = window.innerWidth - f.width, y = window.innerHeight - f.height;
      i((A) => {
        const v = Math.max(0, Math.min(A.x, b)), w = Math.max(0, Math.min(A.y, y));
        return v === A.x && w === A.y ? A : { x: v, y: w };
      });
    }, 200);
    return () => clearTimeout(h);
  }, [o]), S(() => {
    const g = () => {
      !t.current || !s || i((h) => {
        if (!t.current) return h;
        const f = t.current.getBoundingClientRect(), b = window.innerWidth - f.width, y = window.innerHeight - f.height, A = Math.max(0, Math.min(h.x, b)), v = Math.max(0, Math.min(h.y, y));
        return A !== h.x || v !== h.y ? { x: A, y: v } : h;
      });
    };
    return window.addEventListener("resize", g), () => window.removeEventListener("resize", g);
  }, [s]), S(() => {
    const g = (f) => {
      if (!c || !t.current) return;
      f.cancelable && f.preventDefault();
      const b = f.clientX - r.current.x, y = f.clientY - r.current.y, A = t.current.getBoundingClientRect(), v = Math.max(0, Math.min(b, window.innerWidth - A.width)), w = Math.max(0, Math.min(y, window.innerHeight - A.height));
      i({ x: v, y: w }), s || l(!0);
    }, h = () => {
      u(!1), document.body.style.userSelect = "", document.body.style.touchAction = "";
    };
    return window.addEventListener("pointermove", g), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h), () => {
      window.removeEventListener("pointermove", g), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h);
    };
  }, [s, c]), S(() => {
    if (t.current) {
      const g = t.current.getBoundingClientRect();
      i({ x: g.left, y: g.top });
    }
  }, []);
  const d = {
    ref: t,
    hasMoved: s,
    pos: n,
    isDragging: c,
    reset: p,
    onPointerDown: (g) => {
      if (!t.current) return;
      g.cancelable && g.preventDefault(), g.currentTarget.setPointerCapture(g.pointerId), u(!0);
      const h = t.current.getBoundingClientRect();
      r.current = { x: g.clientX - h.left, y: g.clientY - h.top }, s || (i({ x: h.left, y: h.top }), l(!0)), document.body.style.userSelect = "none", document.body.style.touchAction = "none";
    }
  };
  return /* @__PURE__ */ a(Ca.Provider, { value: d, children: e(d) });
}
const an = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, sn = sa, Rt = (e, t) => (r) => {
  var o;
  if (t?.variants == null) return sn(e, r?.class, r?.className);
  const { variants: n, defaultVariants: i } = t, s = Object.keys(n).map((u) => {
    const p = r?.[u], m = i?.[u];
    if (p === null) return null;
    const d = an(p) || an(m);
    return n[u][d];
  }), l = r && Object.entries(r).reduce((u, p) => {
    let [m, d] = p;
    return d === void 0 || (u[m] = d), u;
  }, {}), c = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((u, p) => {
    let { class: m, className: d, ...g } = p;
    return Object.entries(g).every((h) => {
      let [f, b] = h;
      return Array.isArray(b) ? b.includes({
        ...i,
        ...l
      }[f]) : {
        ...i,
        ...l
      }[f] === b;
    }) ? [
      ...u,
      m,
      d
    ] : u;
  }, []);
  return sn(e, s, c, r?.class, r?.className);
}, vo = Rt(
  "flex cursor-pointer items-center justify-center [&>svg]:shrink-0 [&>i:not([class*='size-'])]:size-5.25 gap-x-2 rounded-md text-foreground",
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
), U = ({ children: e, disabled: t, className: r, variant: o, size: n, ref: i, ...s }) => /* @__PURE__ */ a(
  "button",
  {
    inert: t,
    tabIndex: t ? -1 : 0,
    disabled: t,
    ref: i,
    className: C(vo({ variant: o, size: n }), t && "opacity-50", r),
    type: s.type || "button",
    ...s,
    children: e
  }
), Ea = ({ children: e, className: t, ...r }) => /* @__PURE__ */ a(
  "div",
  {
    autofocus: !0,
    className: C(
      "widget-radius absolute inset-0 z-999999 flex animate-move-right flex-col bg-background",
      t
    ),
    ...r,
    children: e
  }
), Ra = ({ children: e, className: t, ...r }) => {
  const { onPointerDown: o } = mr();
  return /* @__PURE__ */ a("div", { className: "relative", children: [
    /* @__PURE__ */ a("div", { className: C("flex h-min items-center gap-3 border-b p-2 *:z-10", t), ...r, children: [
      r.close && /* @__PURE__ */ a(Kc, {}),
      e
    ] }),
    /* @__PURE__ */ a(
      "div",
      {
        className: C(
          "absolute inset-0 z-0 touch-none",
          "not-expanded:hover:cursor-move sm:hover:cursor-move"
        ),
        onPointerDown: o
      }
    )
  ] });
}, Kc = ({ className: e, ...t }) => {
  const r = ve((n) => n.closeAll), o = ee();
  return /* @__PURE__ */ a(
    U,
    {
      "aria-labe": "Fechar",
      onClick: r,
      variant: "outline",
      size: o ? "icon-sm" : "icon",
      className: e,
      ...t,
      children: /* @__PURE__ */ a(R, { name: "arrow-left", "aria-hidden": "true" })
    }
  );
}, Pa = ({ children: e, className: t, ...r }) => /* @__PURE__ */ a("h3", { className: C("pointer-events-none font-semibold mobile:text-sm text-base", t), ...r, children: e }), Ia = ({ children: e, className: t, ...r }) => /* @__PURE__ */ a("div", { className: C("flex h-full flex-col gap-4 overflow-y-auto p-4", t), ...r, children: e }), ln = ({ label: e, description: t, children: r }) => /* @__PURE__ */ a("div", { className: "flex flex-col gap-2 text-sm", children: [
  /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ a("p", { className: "font-bold", children: e }),
    t && /* @__PURE__ */ a("p", { className: "text-muted-foreground text-xs", children: t })
  ] }),
  /* @__PURE__ */ a("div", { className: "mobile:text-xs", children: r })
] }), Xc = [
  {
    href: "https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras",
    name: "Site VLibras",
    iconName: "worldwide"
  },
  { href: "https://www.facebook.com/vlibras", name: "Facebook", iconName: "facebook" },
  { href: "https://www.instagram.com/vlibrasoficial", name: "Instagram", iconName: "instagram" },
  { href: "https://x.com/VLibrasoficial", name: "Twitter", iconName: "twitter" },
  { href: "https://www.youtube.com/@vlibras-lavid3180", name: "YouTube", iconName: "youtube" }
], qc = () => {
  const e = () => {
    _t.get().open("about");
  };
  return /* @__PURE__ */ a(Ea, { children: [
    /* @__PURE__ */ a(Ra, { close: !0, children: /* @__PURE__ */ a(Pa, { children: "Sobre" }) }),
    /* @__PURE__ */ a(Ia, { className: "flex flex-col text-sm", children: [
      /* @__PURE__ */ a(ln, { label: "Sobre o VLibras", children: /* @__PURE__ */ a("p", { children: [
        "A ",
        /* @__PURE__ */ a("strong", { children: "Suíte VLibras" }),
        " é um conjunto de ferramentas gratuitas de código aberto que traduz conteúdo digital (texto, áudio e vídeo) em Português para Libras.",
        /* @__PURE__ */ a(
          We,
          {
            gloss: "SUÍTE VLIBRAS CONJUNTO&GRUPO FERRAMENTA GRATUITO CÓDIGO&COMPUTAÇÃO ABRIR&AFASTAR TRADUZIR CONTEÚDO&ASSUNTO DIGITAL&COMPUTADOR TEXTO ÁUDIO VÍDEO PORTUGUÊS LIBRAS [PONTO]",
            onFinish: e
          }
        )
      ] }) }),
      /* @__PURE__ */ a(
        ln,
        {
          label: /* @__PURE__ */ a(Q, { children: [
            "Realizadores",
            /* @__PURE__ */ a(We, { gloss: "REALIZAR", onFinish: e })
          ] }),
          children: /* @__PURE__ */ a("div", { className: "flex w-full flex-col justify-between gap-2 rounded-lg bg-white p-2", children: [
            /* @__PURE__ */ a("div", { className: "flex w-full items-center justify-between gap-2", children: [
              /* @__PURE__ */ a("div", { className: "flex min-w-0 flex-1 justify-start", children: /* @__PURE__ */ a("img", { src: hl, alt: "logo do Ministério dos Direitos Humanos e da Cidadania" }) }),
              /* @__PURE__ */ a("div", { className: "flex min-w-0 flex-1 justify-start", children: /* @__PURE__ */ a("img", { src: ml, alt: "logo do Ministério da Gestão e da Inovação em Serviços Públicos" }) })
            ] }),
            /* @__PURE__ */ a("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ a("div", { className: "flex min-w-0 flex-1 items-center justify-start", children: /* @__PURE__ */ a("img", { src: pl, alt: "logo do lavid", className: "max-w-15" }) }),
              /* @__PURE__ */ a("div", { className: "flex min-w-0 flex-1 items-center justify-start", children: /* @__PURE__ */ a("img", { src: gl, alt: "logo da RNP" }) }),
              /* @__PURE__ */ a("div", { className: "flex min-w-0 flex-1 items-center justify-start", children: /* @__PURE__ */ a("img", { src: js, alt: "logo da Câmara dos Deputados" }) })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ a("div", { className: "relative mobile:-m-2 mt-auto! flex min-h-32 flex-col overflow-hidden rounded-lg border p-4 font-semibold text-primary-foreground dark:bg-muted", children: [
        /* @__PURE__ */ a("p", { className: "mb-4 text-center mobile:text-sm text-base leading-none", children: [
          "Nos acompanhe nas redes sociais",
          /* @__PURE__ */ a(
            We,
            {
              gloss: "ACOMPANHAR REDE&GRUPO SOCIAL",
              onFinish: e,
              className: "text-primary-foreground! hover:opacity-80"
            }
          )
        ] }),
        /* @__PURE__ */ a(
          "div",
          {
            className: C(
              "z-999 mt-auto flex w-full items-center justify-between gap-2",
              "[&_button]:w-full [&_button]:rounded-full [&_button]:bg-primary-foreground [&_button]:text-primary"
            ),
            children: Xc.map((t) => /* @__PURE__ */ a(
              "a",
              {
                href: t.href,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "grid place-content-center rounded-full bg-white p-2",
                children: /* @__PURE__ */ a(R, { name: t.iconName, className: "size-4 bg-primary", "aria-label": t.name })
              },
              t.name
            ))
          }
        ),
        /* @__PURE__ */ a(R, { name: "icaro", className: "absolute top-4 left-0 z-1 size-32 opacity-15 dark:text-white dark:opacity-10" }),
        /* @__PURE__ */ a("div", { className: "absolute inset-0 -z-10 bg-primary" })
      ] })
    ] })
  ] });
};
function Ao() {
  const e = Je(null), t = ({ children: n, data: i }) => {
    const s = te(null);
    return s.current || (s.current = Kn(() => ({ data: i }))), Ke(() => s.current?.setState({ data: i }), [i]), /* @__PURE__ */ a(e.Provider, { value: s.current, children: n });
  };
  function r(n) {
    const i = xe(e);
    if (!i) throw new Error("useContext must be used within its Provider");
    return ra(i, n);
  }
  function o(n) {
    return r((i) => n ? n(i.data) : i.data);
  }
  return { Context: e, Provider: t, useCtx: o };
}
var ut = class {
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
}, Yc = class extends ut {
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
}, wo = new Yc(), Mt = {}, Zc = {
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
}, $c = class {
  // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
  // type at app boot; and if we leave that type, then any new timer provider
  // would need to support the default provider's concrete timer ID, which is
  // infeasible across environments.
  //
  // We settle for type safety for the TimeoutProvider type, and accept that
  // this class is unsafe internally to allow for extension.
  #e = Zc;
  #t = !1;
  setTimeoutProvider(e) {
    Mt.NODE_ENV !== "production" && this.#t && e !== this.#e && console.error(
      "[timeoutManager]: Switching provider after calls to previous provider might result in unexpected behavior.",
      { previous: this.#e, provider: e }
    ), this.#e = e, Mt.NODE_ENV !== "production" && (this.#t = !1);
  }
  setTimeout(e, t) {
    return Mt.NODE_ENV !== "production" && (this.#t = !0), this.#e.setTimeout(e, t);
  }
  clearTimeout(e) {
    this.#e.clearTimeout(e);
  }
  setInterval(e, t) {
    return Mt.NODE_ENV !== "production" && (this.#t = !0), this.#e.setInterval(e, t);
  }
  clearInterval(e) {
    this.#e.clearInterval(e);
  }
}, je = new $c();
function ed(e) {
  setTimeout(e, 0);
}
var Ta = {}, td = typeof window > "u" || "Deno" in globalThis;
function ce() {
}
function rd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Hr(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Na(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Qe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function be(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function cn(e, t) {
  const {
    type: r = "all",
    exact: o,
    fetchStatus: n,
    predicate: i,
    queryKey: s,
    stale: l
  } = e;
  if (s) {
    if (o) {
      if (t.queryHash !== yo(s, t.options))
        return !1;
    } else if (!St(t.queryKey, s))
      return !1;
  }
  if (r !== "all") {
    const c = t.isActive();
    if (r === "active" && !c || r === "inactive" && c)
      return !1;
  }
  return !(typeof l == "boolean" && t.isStale() !== l || n && n !== t.state.fetchStatus || i && !i(t));
}
function dn(e, t) {
  const { exact: r, status: o, predicate: n, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey)
      return !1;
    if (r) {
      if (Ge(t.options.mutationKey) !== Ge(i))
        return !1;
    } else if (!St(t.options.mutationKey, i))
      return !1;
  }
  return !(o && t.state.status !== o || n && !n(t));
}
function yo(e, t) {
  return (t?.queryKeyHashFn || Ge)(e);
}
function Ge(e) {
  return JSON.stringify(
    e,
    (t, r) => Kr(r) ? Object.keys(r).sort().reduce((o, n) => (o[n] = r[n], o), {}) : r
  );
}
function St(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every((r) => St(e[r], t[r])) : !1;
}
var od = Object.prototype.hasOwnProperty;
function Jr(e, t, r = 0) {
  if (e === t)
    return e;
  if (r > 500) return t;
  const o = un(e) && un(t);
  if (!o && !(Kr(e) && Kr(t))) return t;
  const i = (o ? e : Object.keys(e)).length, s = o ? t : Object.keys(t), l = s.length, c = o ? new Array(l) : {};
  let u = 0;
  for (let p = 0; p < l; p++) {
    const m = o ? p : s[p], d = e[m], g = t[m];
    if (d === g) {
      c[m] = d, (o ? p < i : od.call(e, m)) && u++;
      continue;
    }
    if (d === null || g === null || typeof d != "object" || typeof g != "object") {
      c[m] = g;
      continue;
    }
    const h = Jr(d, g, r + 1);
    c[m] = h, h === d && u++;
  }
  return i === l && u === i ? e : c;
}
function tr(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function un(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Kr(e) {
  if (!pn(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(!pn(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function pn(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function nd(e) {
  return new Promise((t) => {
    je.setTimeout(t, e);
  });
}
function Xr(e, t, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(e, t);
  if (r.structuralSharing !== !1) {
    if (Ta.NODE_ENV !== "production")
      try {
        return Jr(e, t);
      } catch (o) {
        throw console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${o}`
        ), o;
      }
    return Jr(e, t);
  }
  return t;
}
function ad(e, t, r = 0) {
  const o = [...e, t];
  return r && o.length > r ? o.slice(1) : o;
}
function id(e, t, r = 0) {
  const o = [t, ...e];
  return r && o.length > r ? o.slice(0, -1) : o;
}
var rr = /* @__PURE__ */ Symbol();
function Oa(e, t) {
  return Ta.NODE_ENV !== "production" && e.queryFn === rr && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && t?.initialPromise ? () => t.initialPromise : !e.queryFn || e.queryFn === rr ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
function Ua(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function sd(e, t, r) {
  let o = !1, n;
  return Object.defineProperty(e, "signal", {
    enumerable: !0,
    get: () => (n ??= t(), o || (o = !0, n.aborted ? r() : n.addEventListener("abort", r, { once: !0 })), n)
  }), e;
}
var Ct = /* @__PURE__ */ (() => {
  let e = () => td;
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
function qr() {
  let e, t;
  const r = new Promise((n, i) => {
    e = n, t = i;
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
var ld = ed;
function cd() {
  let e = [], t = 0, r = (l) => {
    l();
  }, o = (l) => {
    l();
  }, n = ld;
  const i = (l) => {
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
      i(() => {
        l(...c);
      });
    },
    schedule: i,
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
var $ = cd(), dd = class extends ut {
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
}, or = new dd();
function ud(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Ba(e) {
  return (e ?? "online") === "online" ? or.isOnline() : !0;
}
var Yr = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent;
  }
};
function Qa(e) {
  let t = !1, r = 0, o;
  const n = qr(), i = () => n.status !== "pending", s = (f) => {
    if (!i()) {
      const b = new Yr(f);
      d(b), e.onCancel?.(b);
    }
  }, l = () => {
    t = !0;
  }, c = () => {
    t = !1;
  }, u = () => wo.isFocused() && (e.networkMode === "always" || or.isOnline()) && e.canRun(), p = () => Ba(e.networkMode) && e.canRun(), m = (f) => {
    i() || (o?.(), n.resolve(f));
  }, d = (f) => {
    i() || (o?.(), n.reject(f));
  }, g = () => new Promise((f) => {
    o = (b) => {
      (i() || u()) && f(b);
    }, e.onPause?.();
  }).then(() => {
    o = void 0, i() || e.onContinue?.();
  }), h = () => {
    if (i())
      return;
    let f;
    const b = r === 0 ? e.initialPromise : void 0;
    try {
      f = b ?? e.fn();
    } catch (y) {
      f = Promise.reject(y);
    }
    Promise.resolve(f).then(m).catch((y) => {
      if (i())
        return;
      const A = e.retry ?? (Ct.isServer() ? 0 : 3), v = e.retryDelay ?? ud, w = typeof v == "function" ? v(r, y) : v, N = A === !0 || typeof A == "number" && r < A || typeof A == "function" && A(r, y);
      if (t || !N) {
        d(y);
        return;
      }
      r++, e.onFail?.(r, y), nd(w).then(() => u() ? void 0 : g()).then(() => {
        t ? d(y) : h();
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
    start: () => (p() ? h() : g().then(h), n)
  };
}
var La = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Hr(this.gcTime) && (this.#e = je.setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (Ct.isServer() ? 1 / 0 : 300 * 1e3)
    );
  }
  clearGcTimeout() {
    this.#e && (je.clearTimeout(this.#e), this.#e = void 0);
  }
}, hn = {}, pd = class extends La {
  #e;
  #t;
  #r;
  #n;
  #o;
  #a;
  #i;
  constructor(e) {
    super(), this.#i = !1, this.#a = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#n = e.client, this.#r = this.#n.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#e = gn(this.options), this.state = e.state ?? this.#e, this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    return this.#o?.promise;
  }
  setOptions(e) {
    if (this.options = { ...this.#a, ...e }, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
      const t = gn(this.options);
      t.data !== void 0 && (this.setState(
        mn(t.data, t.dataUpdatedAt)
      ), this.#e = t);
    }
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && this.#r.remove(this);
  }
  setData(e, t) {
    const r = Xr(this.state.data, e, this.options);
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
    return this.#o?.cancel(e), t ? t.then(ce).catch(ce) : Promise.resolve();
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
      (e) => be(e.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === rr || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return this.getObserversCount() > 0 ? this.observers.some(
      (e) => Qe(e.options.staleTime, this) === "static"
    ) : !1;
  }
  isStale() {
    return this.getObserversCount() > 0 ? this.observers.some(
      (e) => e.getCurrentResult().isStale
    ) : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(e = 0) {
    return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !Na(this.state.dataUpdatedAt, e);
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
    hn.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const r = new AbortController(), o = (l) => {
      Object.defineProperty(l, "signal", {
        enumerable: !0,
        get: () => (this.#i = !0, r.signal)
      });
    }, n = () => {
      const l = Oa(this.options, t), u = (() => {
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
    this.options.behavior?.onFetch(s, this), this.#t = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== s.fetchOptions?.meta) && this.#l({ type: "fetch", meta: s.fetchOptions?.meta }), this.#o = Qa({
      initialPromise: t?.initialPromise,
      fn: s.fetchFn,
      onCancel: (l) => {
        l instanceof Yr && l.revert && this.setState({
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
        throw hn.NODE_ENV !== "production" && console.error(
          `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
        ), new Error(`${this.queryHash} data is undefined`);
      return this.setData(l), this.#r.config.onSuccess?.(l, this), this.#r.config.onSettled?.(
        l,
        this.state.error,
        this
      ), l;
    } catch (l) {
      if (l instanceof Yr) {
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
            ...Da(r.data, this.options),
            fetchMeta: e.meta ?? null
          };
        case "success":
          const o = {
            ...r,
            ...mn(e.data, e.dataUpdatedAt),
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
    this.state = t(this.state), $.batch(() => {
      this.observers.forEach((r) => {
        r.onQueryUpdate();
      }), this.#r.notify({ query: this, type: "updated", action: e });
    });
  }
};
function Da(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Ba(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function mn(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success"
  };
}
function gn(e) {
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
var hd = class extends ut {
  constructor(e, t) {
    super(), this.options = t, this.#e = e, this.#s = null, this.#i = qr(), this.bindMethods(), this.setOptions(t);
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
    this.listeners.size === 1 && (this.#t.addObserver(this), fn(this.#t, this.options) ? this.#p() : this.updateResult(), this.#A());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Zr(
      this.#t,
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Zr(
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
    if (this.options = this.#e.defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof be(this.options.enabled, this.#t) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    this.#x(), this.#t.setOptions(this.options), t._defaulted && !tr(this.options, t) && this.#e.getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: this.#t,
      observer: this
    });
    const o = this.hasListeners();
    o && bn(
      this.#t,
      r,
      this.options,
      t
    ) && this.#p(), this.updateResult(), o && (this.#t !== r || be(this.options.enabled, this.#t) !== be(t.enabled, this.#t) || Qe(this.options.staleTime, this.#t) !== Qe(t.staleTime, this.#t)) && this.#f();
    const n = this.#b();
    o && (this.#t !== r || be(this.options.enabled, this.#t) !== be(t.enabled, this.#t) || n !== this.#c) && this.#v(n);
  }
  getOptimisticResult(e) {
    const t = this.#e.getQueryCache().build(this.#e, e), r = this.createResult(t, e);
    return gd(this, r) && (this.#n = r, this.#a = this.options, this.#o = this.#t.state), r;
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
    return e?.throwOnError || (t = t.catch(ce)), t;
  }
  #f() {
    this.#w();
    const e = Qe(
      this.options.staleTime,
      this.#t
    );
    if (Ct.isServer() || this.#n.isStale || !Hr(e))
      return;
    const r = Na(this.#n.dataUpdatedAt, e) + 1;
    this.#d = je.setTimeout(() => {
      this.#n.isStale || this.updateResult();
    }, r);
  }
  #b() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#t) : this.options.refetchInterval) ?? !1;
  }
  #v(e) {
    this.#y(), this.#c = e, !(Ct.isServer() || be(this.options.enabled, this.#t) === !1 || !Hr(this.#c) || this.#c === 0) && (this.#u = je.setInterval(() => {
      (this.options.refetchIntervalInBackground || wo.isFocused()) && this.#p();
    }, this.#c));
  }
  #A() {
    this.#f(), this.#v(this.#b());
  }
  #w() {
    this.#d && (je.clearTimeout(this.#d), this.#d = void 0);
  }
  #y() {
    this.#u && (je.clearInterval(this.#u), this.#u = void 0);
  }
  createResult(e, t) {
    const r = this.#t, o = this.options, n = this.#n, i = this.#o, s = this.#a, c = e !== r ? e.state : this.#r, { state: u } = e;
    let p = { ...u }, m = !1, d;
    if (t._optimisticResults) {
      const x = this.hasListeners(), L = !x && fn(e, t), ie = x && bn(e, r, t, o);
      (L || ie) && (p = {
        ...p,
        ...Da(u.data, e.options)
      }), t._optimisticResults === "isRestoring" && (p.fetchStatus = "idle");
    }
    let { error: g, errorUpdatedAt: h, status: f } = p;
    d = p.data;
    let b = !1;
    if (t.placeholderData !== void 0 && d === void 0 && f === "pending") {
      let x;
      n?.isPlaceholderData && t.placeholderData === s?.placeholderData ? (x = n.data, b = !0) : x = typeof t.placeholderData == "function" ? t.placeholderData(
        this.#m?.state.data,
        this.#m
      ) : t.placeholderData, x !== void 0 && (f = "success", d = Xr(
        n?.data,
        x,
        t
      ), m = !0);
    }
    if (t.select && d !== void 0 && !b)
      if (n && d === i?.data && t.select === this.#l)
        d = this.#h;
      else
        try {
          this.#l = t.select, d = t.select(d), d = Xr(n?.data, d, t), this.#h = d, this.#s = null;
        } catch (x) {
          this.#s = x;
        }
    this.#s && (g = this.#s, d = this.#h, h = Date.now(), f = "error");
    const y = p.fetchStatus === "fetching", A = f === "pending", v = f === "error", w = A && y, N = d !== void 0, V = {
      status: f,
      fetchStatus: p.fetchStatus,
      isPending: A,
      isSuccess: f === "success",
      isError: v,
      isInitialLoading: w,
      isLoading: w,
      data: d,
      dataUpdatedAt: p.dataUpdatedAt,
      error: g,
      errorUpdatedAt: h,
      failureCount: p.fetchFailureCount,
      failureReason: p.fetchFailureReason,
      errorUpdateCount: p.errorUpdateCount,
      isFetched: e.isFetched(),
      isFetchedAfterMount: p.dataUpdateCount > c.dataUpdateCount || p.errorUpdateCount > c.errorUpdateCount,
      isFetching: y,
      isRefetching: y && !A,
      isLoadingError: v && !N,
      isPaused: p.fetchStatus === "paused",
      isPlaceholderData: m,
      isRefetchError: v && N,
      isStale: xo(e, t),
      refetch: this.refetch,
      promise: this.#i,
      isEnabled: be(t.enabled, e) !== !1
    };
    if (this.options.experimental_prefetchInRender) {
      const x = V.data !== void 0, L = V.status === "error" && !x, ie = (he) => {
        L ? he.reject(V.error) : x && he.resolve(V.data);
      }, ae = () => {
        const he = this.#i = V.promise = qr();
        ie(he);
      }, J = this.#i;
      switch (J.status) {
        case "pending":
          e.queryHash === r.queryHash && ie(J);
          break;
        case "fulfilled":
          (L || V.data !== J.value) && ae();
          break;
        case "rejected":
          (!L || V.error !== J.reason) && ae();
          break;
      }
    }
    return V;
  }
  updateResult() {
    const e = this.#n, t = this.createResult(this.#t, this.options);
    if (this.#o = this.#t.state, this.#a = this.options, this.#o.data !== void 0 && (this.#m = this.#t), tr(t, e))
      return;
    this.#n = t;
    const r = () => {
      if (!e)
        return !0;
      const { notifyOnChangeProps: o } = this.options, n = typeof o == "function" ? o() : o;
      if (n === "all" || !n && !this.#g.size)
        return !0;
      const i = new Set(
        n ?? this.#g
      );
      return this.options.throwOnError && i.add("error"), Object.keys(this.#n).some((s) => {
        const l = s;
        return this.#n[l] !== e[l] && i.has(l);
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
    $.batch(() => {
      e.listeners && this.listeners.forEach((t) => {
        t(this.#n);
      }), this.#e.getQueryCache().notify({
        query: this.#t,
        type: "observerResultsUpdated"
      });
    });
  }
};
function md(e, t) {
  return be(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function fn(e, t) {
  return md(e, t) || e.state.data !== void 0 && Zr(e, t, t.refetchOnMount);
}
function Zr(e, t, r) {
  if (be(t.enabled, e) !== !1 && Qe(t.staleTime, e) !== "static") {
    const o = typeof r == "function" ? r(e) : r;
    return o === "always" || o !== !1 && xo(e, t);
  }
  return !1;
}
function bn(e, t, r, o) {
  return (e !== t || be(o.enabled, e) === !1) && (!r.suspense || e.state.status !== "error") && xo(e, r);
}
function xo(e, t) {
  return be(t.enabled, e) !== !1 && e.isStaleByTime(Qe(t.staleTime, e));
}
function gd(e, t) {
  return !tr(e.getCurrentResult(), t);
}
function vn(e) {
  return {
    onFetch: (t, r) => {
      const o = t.options, n = t.fetchOptions?.meta?.fetchMore?.direction, i = t.state.data?.pages || [], s = t.state.data?.pageParams || [];
      let l = { pages: [], pageParams: [] }, c = 0;
      const u = async () => {
        let p = !1;
        const m = (h) => {
          sd(
            h,
            () => t.signal,
            () => p = !0
          );
        }, d = Oa(t.options, t.fetchOptions), g = async (h, f, b) => {
          if (p)
            return Promise.reject();
          if (f == null && h.pages.length)
            return Promise.resolve(h);
          const A = (() => {
            const D = {
              client: t.client,
              queryKey: t.queryKey,
              pageParam: f,
              direction: b ? "backward" : "forward",
              meta: t.options.meta
            };
            return m(D), D;
          })(), v = await d(A), { maxPages: w } = t.options, N = b ? id : ad;
          return {
            pages: N(h.pages, v, w),
            pageParams: N(h.pageParams, f, w)
          };
        };
        if (n && i.length) {
          const h = n === "backward", f = h ? fd : An, b = {
            pages: i,
            pageParams: s
          }, y = f(o, b);
          l = await g(b, y, h);
        } else {
          const h = e ?? i.length;
          do {
            const f = c === 0 ? s[0] ?? o.initialPageParam : An(o, l);
            if (c > 0 && f == null)
              break;
            l = await g(l, f), c++;
          } while (c < h);
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
function An(e, { pages: t, pageParams: r }) {
  const o = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[o],
    t,
    r[o],
    r
  ) : void 0;
}
function fd(e, { pages: t, pageParams: r }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, r[0], r) : void 0;
}
var bd = class extends La {
  #e;
  #t;
  #r;
  #n;
  constructor(e) {
    super(), this.#e = e.client, this.mutationId = e.mutationId, this.#r = e.mutationCache, this.#t = [], this.state = e.state || za(), this.setOptions(e.options), this.scheduleGc();
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
    this.#n = Qa({
      fn: () => this.options.mutationFn ? this.options.mutationFn(e, r) : Promise.reject(new Error("No mutationFn found")),
      onFail: (i, s) => {
        this.#o({ type: "failed", failureCount: i, error: s });
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
      const i = await this.#n.start();
      return await this.#r.config.onSuccess?.(
        i,
        e,
        this.state.context,
        this,
        r
      ), await this.options.onSuccess?.(
        i,
        e,
        this.state.context,
        r
      ), await this.#r.config.onSettled?.(
        i,
        null,
        this.state.variables,
        this.state.context,
        this,
        r
      ), await this.options.onSettled?.(
        i,
        null,
        e,
        this.state.context,
        r
      ), this.#o({ type: "success", data: i }), i;
    } catch (i) {
      try {
        await this.#r.config.onError?.(
          i,
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
          i,
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
          i,
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
          i,
          e,
          this.state.context,
          r
        );
      } catch (s) {
        Promise.reject(s);
      }
      throw this.#o({ type: "error", error: i }), i;
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
    this.state = t(this.state), $.batch(() => {
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
function za() {
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
var vd = class extends ut {
  constructor(e = {}) {
    super(), this.config = e, this.#e = /* @__PURE__ */ new Set(), this.#t = /* @__PURE__ */ new Map(), this.#r = 0;
  }
  #e;
  #t;
  #r;
  build(e, t, r) {
    const o = new bd({
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
    const t = Ft(e);
    if (typeof t == "string") {
      const r = this.#t.get(t);
      r ? r.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      const t = Ft(e);
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
    const t = Ft(e);
    if (typeof t == "string") {
      const o = this.#t.get(t)?.find(
        (n) => n.state.status === "pending"
      );
      return !o || o === e;
    } else
      return !0;
  }
  runNext(e) {
    const t = Ft(e);
    return typeof t == "string" ? this.#t.get(t)?.find((o) => o !== e && o.state.isPaused)?.continue() ?? Promise.resolve() : Promise.resolve();
  }
  clear() {
    $.batch(() => {
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
      (r) => dn(t, r)
    );
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => dn(e, t));
  }
  notify(e) {
    $.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    const e = this.getAll().filter((t) => t.state.isPaused);
    return $.batch(
      () => Promise.all(
        e.map((t) => t.continue().catch(ce))
      )
    );
  }
};
function Ft(e) {
  return e.options.scope?.id;
}
var Ad = class extends ut {
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
    this.options = this.#e.defaultMutationOptions(t), tr(this.options, r) || this.#e.getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: this.#r,
      observer: this
    }), r?.mutationKey && this.options.mutationKey && Ge(r.mutationKey) !== Ge(this.options.mutationKey) ? this.reset() : this.#r?.state.status === "pending" && this.#r.setOptions(this.options);
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
    const t = this.#r?.state ?? za();
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
    $.batch(() => {
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
          } catch (i) {
            Promise.reject(i);
          }
          try {
            this.#n.onSettled?.(
              t.data,
              null,
              r,
              o,
              n
            );
          } catch (i) {
            Promise.reject(i);
          }
        } else if (t?.type === "error") {
          try {
            this.#n.onError?.(
              t.error,
              r,
              o,
              n
            );
          } catch (i) {
            Promise.reject(i);
          }
          try {
            this.#n.onSettled?.(
              void 0,
              t.error,
              r,
              o,
              n
            );
          } catch (i) {
            Promise.reject(i);
          }
        }
      }
      this.listeners.forEach((r) => {
        r(this.#t);
      });
    });
  }
}, wd = class extends ut {
  constructor(e = {}) {
    super(), this.config = e, this.#e = /* @__PURE__ */ new Map();
  }
  #e;
  build(e, t, r) {
    const o = t.queryKey, n = t.queryHash ?? yo(o, t);
    let i = this.get(n);
    return i || (i = new pd({
      client: e,
      queryKey: o,
      queryHash: n,
      options: e.defaultQueryOptions(t),
      state: r,
      defaultOptions: e.getQueryDefaults(o)
    }), this.add(i)), i;
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
    $.batch(() => {
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
      (r) => cn(t, r)
    );
  }
  findAll(e = {}) {
    const t = this.getAll();
    return Object.keys(e).length > 0 ? t.filter((r) => cn(e, r)) : t;
  }
  notify(e) {
    $.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  onFocus() {
    $.batch(() => {
      this.getAll().forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    $.batch(() => {
      this.getAll().forEach((e) => {
        e.onOnline();
      });
    });
  }
}, yd = class {
  #e;
  #t;
  #r;
  #n;
  #o;
  #a;
  #i;
  #s;
  constructor(e = {}) {
    this.#e = e.queryCache || new wd(), this.#t = e.mutationCache || new vd(), this.#r = e.defaultOptions || {}, this.#n = /* @__PURE__ */ new Map(), this.#o = /* @__PURE__ */ new Map(), this.#a = 0;
  }
  mount() {
    this.#a++, this.#a === 1 && (this.#i = wo.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), this.#e.onFocus());
    }), this.#s = or.subscribe(async (e) => {
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
    return o === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && r.isStaleByTime(Qe(t.staleTime, r)) && this.prefetchQuery(t), Promise.resolve(o));
  }
  getQueriesData(e) {
    return this.#e.findAll(e).map(({ queryKey: t, state: r }) => {
      const o = r.data;
      return [t, o];
    });
  }
  setQueryData(e, t, r) {
    const o = this.defaultQueryOptions({ queryKey: e }), i = this.#e.get(
      o.queryHash
    )?.state.data, s = rd(t, i);
    if (s !== void 0)
      return this.#e.build(this, o).setData(s, { ...r, manual: !0 });
  }
  setQueriesData(e, t, r) {
    return $.batch(
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
    $.batch(() => {
      t.findAll(e).forEach((r) => {
        t.remove(r);
      });
    });
  }
  resetQueries(e, t) {
    const r = this.#e;
    return $.batch(() => (r.findAll(e).forEach((o) => {
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
    const r = { revert: !0, ...t }, o = $.batch(
      () => this.#e.findAll(e).map((n) => n.cancel(r))
    );
    return Promise.all(o).then(ce).catch(ce);
  }
  invalidateQueries(e, t = {}) {
    return $.batch(() => (this.#e.findAll(e).forEach((r) => {
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
    }, o = $.batch(
      () => this.#e.findAll(e).filter((n) => !n.isDisabled() && !n.isStatic()).map((n) => {
        let i = n.fetch(void 0, r);
        return r.throwOnError || (i = i.catch(ce)), n.state.fetchStatus === "paused" ? Promise.resolve() : i;
      })
    );
    return Promise.all(o).then(ce);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const r = this.#e.build(this, t);
    return r.isStaleByTime(
      Qe(t.staleTime, r)
    ) ? r.fetch(t) : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(ce).catch(ce);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = vn(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(ce).catch(ce);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = vn(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return or.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
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
    this.#n.set(Ge(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...this.#n.values()], r = {};
    return t.forEach((o) => {
      St(e, o.queryKey) && Object.assign(r, o.defaultOptions);
    }), r;
  }
  setMutationDefaults(e, t) {
    this.#o.set(Ge(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...this.#o.values()], r = {};
    return t.forEach((o) => {
      St(e, o.mutationKey) && Object.assign(r, o.defaultOptions);
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
    return t.queryHash || (t.queryHash = yo(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === rr && (t.enabled = !1), t;
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
}, Ma = Je(!1), xd = () => xe(Ma);
Ma.Provider;
var Fa = Je(
  void 0
), Va = (e) => {
  const t = xe(Fa);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, kd = ({
  client: e,
  children: t
}) => (S(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ a(Fa.Provider, { value: e, children: t }));
function _d() {
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
var Sd = Je(_d()), Cd = () => xe(Sd), Ed = (e, t) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1));
}, Rd = (e) => {
  S(() => {
    e.clearReset();
  }, [e]);
}, Pd = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: r,
  query: o,
  suspense: n
}) => e.isError && !t.isReset() && !e.isFetching && o && (n && e.data === void 0 || Ua(r, [e.error, o])), Id = (e) => {
  if (e.suspense) {
    const r = (n) => n === "static" ? n : Math.max(n ?? 1e3, 1e3), o = e.staleTime;
    e.staleTime = typeof o == "function" ? (...n) => r(o(...n)) : r(o), typeof e.gcTime == "number" && (e.gcTime = Math.max(
      e.gcTime,
      1e3
    ));
  }
}, Td = (e, t) => e.isLoading && e.isFetching && !t, Nd = (e, t) => e?.suspense && t.isPending, wn = (e, t, r) => t.fetchOptimistic(e).catch(() => {
  r.clearReset();
});
function ja(e, t) {
  const r = t(), [{ _instance: o }, n] = O({
    _instance: { _value: r, _getSnapshot: t }
  });
  return Ke(() => {
    o._value = r, o._getSnapshot = t, Rr(o) && n({ _instance: o });
  }, [e, r, t]), S(() => (Rr(o) && n({ _instance: o }), e(() => {
    Rr(o) && n({ _instance: o });
  })), [e]), r;
}
function Rr(e) {
  const t = e._getSnapshot, r = e._value;
  try {
    const o = t();
    return !Object.is(r, o);
  } catch {
    return !0;
  }
}
var yn = {};
function Od(e, t, r) {
  if (yn.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const o = xd(), n = Cd(), i = Va(), s = i.defaultQueryOptions(e);
  i.getDefaultOptions().queries?._experimental_beforeQuery?.(
    s
  ), yn.NODE_ENV !== "production" && (s.queryFn || console.error(
    `[${s.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`
  )), s._optimisticResults = o ? "isRestoring" : "optimistic", Id(s), Ed(s, n), Rd(n);
  const l = !i.getQueryCache().get(s.queryHash), [c] = O(
    () => new t(
      i,
      s
    )
  ), u = c.getOptimisticResult(s), p = !o && e.subscribed !== !1;
  if (ja(
    _e(
      (m) => {
        const d = p ? c.subscribe($.batchCalls(m)) : ce;
        return c.updateResult(), d;
      },
      [c, p]
    ),
    () => c.getCurrentResult()
  ), S(() => {
    c.setOptions(s);
  }, [s, c]), Nd(s, u))
    throw wn(s, c, n);
  if (Pd({
    result: u,
    errorResetBoundary: n,
    throwOnError: s.throwOnError,
    query: i.getQueryCache().get(s.queryHash),
    suspense: s.suspense
  }))
    throw u.error;
  return i.getDefaultOptions().queries?._experimental_afterQuery?.(
    s,
    u
  ), s.experimental_prefetchInRender && !Ct.isServer() && Td(u, o) && (l ? (
    // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
    wn(s, c, n)
  ) : (
    // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
    i.getQueryCache().get(s.queryHash)?.promise
  ))?.catch(ce).finally(() => {
    c.updateResult();
  }), s.notifyOnChangeProps ? u : c.trackResult(u);
}
function nr(e, t) {
  return Od(e, hd);
}
function Ud(e, t) {
  const r = Va(), [o] = O(
    () => new Ad(
      r,
      e
    )
  );
  S(() => {
    o.setOptions(e);
  }, [o, e]);
  const n = ja(
    _e(
      (s) => o.subscribe($.batchCalls(s)),
      [o]
    ),
    () => o.getCurrentResult()
  ), i = _e(
    (s, l) => {
      o.mutate(s, l).catch(ce);
    },
    [o]
  );
  if (n.error && Ua(o.options.throwOnError, [n.error]))
    throw n.error;
  return { ...n, mutate: i, mutateAsync: n.mutate };
}
class Wa {
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
    const i = (s, l) => {
      s.end && r(l);
      for (const c in s.children)
        i(s.children[c], l + c);
    };
    i(n, o);
  }
  searchSigns(t = "") {
    const r = [];
    return this.loadSigns(t, (o) => r.push(o)), r;
  }
}
const ge = {
  TRANSLATION_ERROR: "Erro ao traduzir o texto.",
  TRANSLATION_EMPTY_ERROR: "Nenhum dado recebido do servidor.",
  TRANSLATION_TIMEOUT_ERROR: "A tradução demorou muito e foi cancelada.",
  SEND_REVIEW_ERROR: "Não foi possível enviar seu feedback.",
  SEND_REVIEW_TIMEOUT_ERROR: "O envio do feedback demorou muito e foi cancelado.",
  SIGNS_ERROR: "Erro ao buscar os sinais.",
  SIGNS_EMPTY_ERROR: "Nenhum dado recebido do servidor.",
  SIGNS_TIMEOUT_ERROR: "A busca dos sinais demorou muito e foi cancelada."
}, ko = () => {
  const e = new AbortController(), t = setTimeout(() => e.abort(), ye.REQUEST_TIMEOUT);
  return { controller: e, timeoutId: t };
}, Bd = async (e) => {
  const { controller: t, timeoutId: r } = ko();
  try {
    const o = await fetch(ye.TRANSLATE_URL, {
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
      error: ge.TRANSLATION_TIMEOUT_ERROR,
      code: "TRANSLATION_TIMEOUT_ERROR"
    } : {
      success: !1,
      error: ge.TRANSLATION_ERROR,
      code: "TRANSLATION_ERROR"
    };
  } finally {
    clearTimeout(r);
  }
}, Qd = async () => {
  const { controller: e, timeoutId: t } = ko();
  try {
    const r = await fetch(ye.SIGNS_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      signal: e.signal
    });
    if (!r.ok) throw new Error(`Erro na API: ${r.status}`);
    return { data: await r.json(), success: !0 };
  } catch (r) {
    return console.error("Falha na tradução: ", r), r.name === "AbortError" ? {
      success: !1,
      error: ge.SIGNS_TIMEOUT_ERROR,
      code: "SIGNS_TIMEOUT_ERROR"
    } : {
      success: !1,
      error: ge.SIGNS_ERROR,
      code: "SIGNS_ERROR"
    };
  } finally {
    clearTimeout(t);
  }
}, Ga = async (e) => {
  const { controller: t, timeoutId: r } = ko();
  try {
    const o = await fetch(ye.REVIEW_URL, {
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
      error: ge.SEND_REVIEW_TIMEOUT_ERROR,
      code: "SEND_REVIEW_TIMEOUT_ERROR"
    } : {
      success: !1,
      error: ge.SEND_REVIEW_ERROR,
      code: "SEND_REVIEW_ERROR"
    };
  } finally {
    clearTimeout(r);
  }
}, Ha = (e) => nr({
  ...e,
  queryKey: ["dictionary_signs"],
  queryFn: async () => {
    const t = await Qd();
    if (t.error) throw new Error(t.error);
    if (!t.data) throw new Error(ge.SIGNS_EMPTY_ERROR);
    return t.data;
  }
}), Ld = (e) => Ud({
  ...e,
  mutationFn: async (t) => {
    const r = await Bd(t);
    return r.error && console.error(r.error), r.data || console.error(ge.TRANSLATION_EMPTY_ERROR), r.data || t;
  }
}), Ja = () => {
  const e = new AbortController(), t = setTimeout(() => e.abort(), ye.REQUEST_TIMEOUT);
  return { controller: e, timeoutId: t };
}, Dd = async () => {
  const { controller: e, timeoutId: t } = Ja();
  try {
    const r = await fetch(`${ye.DICTIONARY_CATEGORIES_URL}/tags`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      signal: e.signal
    });
    if (!r.ok) throw new Error(`Erro na API: ${r.status}`);
    return { data: await r.json(), success: !0 };
  } catch (r) {
    return console.error("Falha na busca pelas categorias: ", r), r.name === "AbortError" ? {
      success: !1,
      error: ge.SIGNS_TIMEOUT_ERROR,
      code: "SIGNS_TIMEOUT_ERROR"
    } : {
      success: !1,
      error: ge.SIGNS_ERROR,
      code: "SIGNS_ERROR"
    };
  } finally {
    clearTimeout(t);
  }
}, zd = async (e) => {
  const { controller: t, timeoutId: r } = Ja();
  try {
    return { data: await (await fetch(`${ye.DICTIONARY_CATEGORIES_URL}/tagsigns?tag=${e}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      signal: t.signal
    })).json(), success: !0 };
  } catch (o) {
    return console.error("Falha na busca pelos sinais da categoria: ", o), o.name === "AbortError" ? {
      success: !1,
      error: ge.SIGNS_TIMEOUT_ERROR,
      code: "SIGNS_TIMEOUT_ERROR"
    } : {
      success: !1,
      error: ge.SIGNS_ERROR,
      code: "SIGNS_ERROR"
    };
  } finally {
    clearTimeout(r);
  }
}, Ka = {
  3: "categories/measures",
  2: "categories/numbers",
  4: "categories/verbs",
  5: "categories/alphabet",
  6: "categories/foods",
  17: "categories/machines",
  11: "categories/feelings",
  19: "categories/health",
  12: "categories/body",
  13: "categories/animals",
  18: "categories/locations",
  24: "categories/jobs",
  8: "categories/countries",
  27: "categories/sports",
  26: "categories/family",
  25: "categories/nature",
  21: "categories/art",
  15: "categories/economy",
  22: "categories/education",
  16: "categories/people",
  7: "categories/religion",
  23: "categories/fashion",
  10: "categories/politics",
  20: "categories/communication",
  9: "categories/technology",
  14: "categories/adjective"
}, Md = ["#", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")], Fd = {
  "1S_": "EU",
  "2S_": "VOCÊ",
  "3S_": "ELE(A)",
  "1P_": "NÓS",
  "2P_": "VOCÊS",
  "3P_": "ELES(AS)"
}, Vd = {
  _1S: "MIM",
  _2S: "VOCÊ",
  _3S: "ELE(A)",
  _1P: "NÓS",
  _2P: "VOCÊS",
  _3P: "ELES(AS)"
}, xn = [
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
], kn = new RegExp(
  "^(1S_|2S_|3S_|1P_|2P_|3P_)?([A-ZÇÕÂÊÍÓÚ]+(?:_(?![123][SP])[A-ZÇÕÂÊÍÓÚ]+)*)(_1S|_2S|_3S|_1P|_2P|_3P)?$"
);
function jd(e) {
  const t = {};
  for (const r of e) {
    let n = r.trim().charAt(0).toUpperCase();
    /[0-9]/.test(n) && (n = "#"), t[n] || (t[n] = []), t[n].push(r);
  }
  for (const r in t)
    t[r].sort((o, n) => o.localeCompare(n));
  return Md.map((r) => ({
    letter: r,
    items: t[r] || []
  })).filter((r) => r.items.length > 0);
}
function Wd(e) {
  const t = /* @__PURE__ */ new Map();
  for (const r of e) {
    const o = r.includes("&") ? r.split("&", 1)[0] : r;
    t.has(o) || t.set(o, { base: o, variants: [], hasBase: !1 });
    const n = t.get(o);
    n && (r.includes("&") ? n.variants.push(r) : n.hasBase = !0);
  }
  return Array.from(t.values());
}
function Gd(e) {
  const t = {};
  for (const r of e) {
    const o = r.includes("&") ? r.split("&", 1)[0] : r.match(kn)?.[2] ?? r;
    if (t[o] ??= { conjugation: [], desambiguation: [] }, r.includes("&"))
      t[o].desambiguation.push(r);
    else {
      const n = r.match(kn);
      if (n) {
        const i = n[1] ?? "", s = n[2], l = n[3] ?? "", c = Fd[i] ?? "", u = Vd[l] ?? "";
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
      (o, n) => xn.indexOf(o.transformed) - xn.indexOf(n.transformed)
    );
  return Object.fromEntries(Object.entries(t).sort(([r], [o]) => r.localeCompare(o)));
}
const rt = fe()(
  dr((e) => ({ isMaxRetries: !1, retriesCount: 0 }), {
    name: "@vlibras/dictionary",
    version: 1,
    storage: cr(() => sessionStorage),
    partialize: (e) => lr(e, "isMaxRetries"),
    onRehydrateStorage: () => (e) => {
      e && (e.retriesCount = 0, e.isMaxRetries = !1);
    }
  })
);
rt.getState, rt.setState, rt.subscribe;
const ot = fe()(
  dr(() => ({ signs: [""] }), {
    name: "@vlibras/dictionary-history",
    version: 1,
    storage: cr(() => localStorage),
    partialize: (e) => e
  })
), _n = {
  get: ot.getState,
  set: ot.setState,
  subscribe: ot.subscribe
}, we = 50, Hd = () => {
  const e = te(null), t = te(null), r = te(null), o = rt(), [n, i] = O("categories"), { data: s, isLoading: l, refetch: c } = Ha(), { signs: u } = ot(), [p, m] = O(null), [d, g] = O(null), { data: h = [], isLoading: f } = nr({
    queryKey: ["categories"],
    queryFn: Dd,
    select: ({ data: B }) => B.filter((z) => z.name !== "INDEFINIDO")
  }), { data: b = [], isLoading: y } = nr({
    queryKey: ["categorySigns", p?.name],
    queryFn: () => zd(p?.name ?? ""),
    enabled: !!p,
    select: ({ data: B }) => B.signs.filter((z) => z !== "1S_FARTAR1S" && z !== "2S_ESCOLHER__1S")
  }), A = async () => {
    await c();
    const B = o.retriesCount + 1;
    rt.setState({ retriesCount: B }), B >= 5 && rt.setState({ isMaxRetries: !0 });
  }, v = M(() => s ? new Wa(s).searchSigns("") : [], [s]), [{ filteredSigns: w, visibleCount: N, search: D }, V] = O({
    filteredSigns: [],
    search: "",
    visibleCount: we
  }), x = M(() => {
    if (!p) return [];
    const B = D.toLowerCase().trim(), z = new Set(b);
    return b.filter(
      (ue) => z.has(ue) && (B === "" || ue.toLowerCase().includes(B))
    );
  }, [p, v, D, b]), L = _e(
    (B) => {
      const z = B.toUpperCase().trim(), ue = (n === "all" ? v : u).filter((me) => me.toUpperCase().includes(z));
      V((me) => ({
        ...me,
        search: B,
        filteredSigns: ue,
        visibleCount: we
      })), r.current && r.current.scrollTo({ top: 0, behavior: "smooth" });
    },
    [n, u, v]
  ), ie = p?.name === "VERBOS", ae = M(
    () => ie ? Gd(x) : {},
    [x, ie]
  ), J = M(() => Object.entries(ae), [ae]), [he, oe] = O(we);
  S(() => {
    Y(we), oe(20);
  }, [p]);
  const se = J.slice(0, he), Ae = _e(
    (B) => {
      const z = B.currentTarget;
      z.scrollTop + z.clientHeight >= z.scrollHeight - 50 && oe((me) => Math.min(me + 20, J.length));
    },
    [J.length]
  ), Re = uo(L, 500), E = () => {
    t.current && (L(""), t.current.value = "", t.current.focus());
  }, Ut = () => {
    ot.setState({ signs: [] }), n === "recents" && (i("all"), V((B) => ({ ...B, filteredSigns: [] })));
  };
  S(() => {
    m(null), L(D);
  }, [n]), S(() => {
    v.length > 0 && V((B) => ({ ...B, filteredSigns: v }));
  }, [v]), S(() => {
    const B = new IntersectionObserver(
      (z) => {
        z[0].isIntersecting && w.length > N && V((ue) => ({ ...ue, visibleCount: ue.visibleCount + we }));
      },
      { threshold: 0.1 }
    );
    return e.current && B.observe(e.current), () => B.disconnect();
  }, [w.length, N]);
  const Bt = w.slice(0, N), Qt = { all: v.length, recents: u.length }, [qe, Y] = O(we), le = M(() => x.slice(0, qe), [x, qe]), Ye = _e(
    (B) => {
      const z = B.currentTarget;
      z.scrollTop + z.clientHeight >= z.scrollHeight - 50 && Y((me) => me >= x.length ? me : me + we);
    },
    [x.length]
  );
  S(() => {
    Y(we);
  }, [p]);
  const Ze = M(() => jd(v), [v]), j = M(() => {
    if (!d) return [];
    const B = D.toLowerCase().trim(), z = Ze.find((ue) => ue.letter === d)?.items ?? [];
    return B === "" ? z : z.filter((ue) => ue.toLowerCase().includes(B));
  }, [d, Ze, D]), [pt, Me] = O(we), $e = M(() => j.slice(0, pt), [j, pt]), ht = _e(
    (B) => {
      const z = B.currentTarget;
      z.scrollTop + z.clientHeight >= z.scrollHeight - 50 && Me((me) => me >= j.length ? me : me + we);
    },
    [j.length]
  );
  return S(() => {
    Me(we);
  }, [d]), {
    search: D,
    isLoading: l,
    filteredSigns: w,
    visibleSigns: Bt,
    visibleCount: N,
    loaderRef: e,
    listRef: r,
    searchRef: t,
    handleSearchChange: Re,
    handleClearSearch: E,
    handleHistoryClear: Ut,
    data: s,
    retry: A,
    filter: n,
    setFilter: i,
    count: Qt,
    selectedCategory: p,
    setSelectedCategory: m,
    filteredCategoryWords: x,
    onCategoryScroll: Ye,
    visibleCategoryWords: le,
    selectedLetter: d,
    setSelectedLetter: g,
    groupedSigns: Ze,
    filteredLetterWords: j,
    onLetterScroll: ht,
    visibleLetterWords: $e,
    isVerbCategory: ie,
    visibleVerbGroups: se,
    verbGroupEntries: J,
    onVerbScroll: Ae,
    categories: h,
    isLoadingCategories: f,
    isLoadingCategorySigns: y,
    ...o
  };
}, { Provider: Jd, useCtx: ke } = Ao(), Kd = ({ children: e }) => {
  const t = Hd();
  return /* @__PURE__ */ a(Jd, { data: t, children: e });
}, Xe = () => Ld({
  onMutate: (e) => {
    de.set({ text: e, isTranslating: !0 });
  },
  onSettled: () => {
    P.set({ gloss: void 0 }), de.set({ isTranslating: !1 });
  }
}), Sn = (async () => null)(), Ee = {
  _getContext: () => ({
    host: location.hostname,
    origin: `${location.origin}${location.pathname}`
  }),
  trackLoad: async () => {
    await Sn;
  },
  trackEvent: async (e, t) => {
    await Sn;
  }
}, gr = () => (e) => {
  pe(e);
  const t = _n.get().signs, r = [e, ...t.filter((o) => o !== e)];
  _n.set({ signs: r }), _t.set({ screen: "main" }), bo({
    action: () => _t.set({ screen: "dictionary" }),
    content: /* @__PURE__ */ a(Q, { children: [
      /* @__PURE__ */ a(R, { name: "dictionary" }),
      "Reabrir Dicionário"
    ] })
  }), Ee.trackEvent("dictionary_gloss", { sign: e });
}, Xd = ["masculino", "feminino", "neutro"];
function qd(e) {
  let t;
  const r = Array.from(e.querySelectorAll("h2, h3")).find(
    (o) => o.textContent?.toLowerCase().includes("etimologia")
  );
  return r && (t = r.parentElement?.nextElementSibling?.firstChild?.textContent?.trim()), t;
}
async function Cn(e) {
  const t = e.toLowerCase().replace(/_/g, " "), r = `https://pt.wiktionary.org/w/api.php?action=parse&redirects=1&
				 format=json&origin=*&page=${encodeURIComponent(t)}&prop=text&formatversion=2`;
  try {
    const o = await fetch(r);
    return o.ok && (await o.json())?.parse?.text || null;
  } catch (o) {
    return console.error(o), null;
  }
}
async function Yd(e) {
  const t = e.toLowerCase().replace(/_/g, " "), r = `https://pt.wiktionary.org/w/rest.php/v1/search/title?
					   q=${encodeURIComponent(t)}&limit=1`;
  try {
    const o = await fetch(r);
    return o.ok && (await o.json()).pages?.[0]?.key || null;
  } catch (o) {
    return console.error(o), null;
  }
}
async function Zd(e) {
  let t = await Cn(e), r = t ? Rn(t, e) : null;
  if (!r?.definitions?.length) {
    const o = await Yd(e);
    o && o !== e && (t = await Cn(o), r = t ? Rn(t, e) : null);
  }
  return r;
}
const Xa = (e) => {
  if (!e) return "";
  let t = e;
  if (t = t.replace(/<style[\s\S]*?<\/style>/gi, ""), t = t.replace(/<script[\s\S]*?<\/script>/gi, ""), t = t.replace(/<noscript[\s\S]*?<\/noscript>/gi, ""), t = t.replace(/<[^>]+>/g, ""), typeof document < "u") {
    const r = document.createElement("div");
    r.innerHTML = t, t = r.textContent || r.innerText || t;
  }
  return t = t.replace(/\[[^\]]*\]/g, ""), t = t.replace(/\s+/g, " ").trim(), t;
}, En = (e) => {
  const t = e.cloneNode(!0);
  return t.querySelectorAll("ul, ol").forEach((r) => r.remove()), t.querySelectorAll("style, script, link, meta, noscript").forEach((r) => r.remove()), t.querySelectorAll("span.mw-cite-backlink, sup.reference, sup.cite_ref").forEach((r) => r.remove()), Xa(t.textContent || "");
}, Rn = (e, t) => {
  const o = new DOMParser().parseFromString(e, "text/html"), n = o.querySelector("tbody")?.innerHTML.match(new RegExp(`title='(?<gender>${Xd.join("|")})'`))?.groups?.gender, i = Array.from(o.querySelectorAll("ol > li")).map((h) => {
    let f = En(h);
    const b = h.querySelectorAll(":scope > ul > li, :scope > ol > li");
    if (b.length) {
      const y = Array.from(b).map((A) => En(A)).filter(Boolean);
      y.length && (f = `${f} §${y.join("§")}`);
    }
    return f;
  }).filter((h) => h && h !== t).filter((h, f, b) => b.indexOf(h) === f).filter(Boolean), s = o.querySelector("h2")?.textContent?.trim(), c = Array.from(o.querySelectorAll("b")).find(
    (h) => h.innerHTML.includes("<u>") || h.innerHTML.includes(".")
  )?.textContent?.trim(), u = qd(o), p = {}, m = o.querySelector("table.traduções");
  m && m.querySelectorAll("tr").forEach((f) => {
    const b = f.querySelector("td"), y = f.querySelectorAll("td ~ td a");
    if (b && y.length > 0) {
      const A = b.textContent?.trim().toLowerCase(), v = Array.from(y).map((w) => w.textContent?.trim()).filter(Boolean);
      A && (p[A] = v);
    }
  });
  const d = o.querySelector("img")?.getAttribute("src") || void 0, g = Object.keys(p).length > 0 ? p : void 0;
  return {
    wordClass: s,
    pronunciation: c,
    definitions: i,
    etymology: u,
    gender: n,
    imgUrl: d,
    translations: g
  };
}, fr = () => {
  const [e, t] = O(null), { data: r, isFetching: o } = nr({
    queryKey: ["wordMeaning", e],
    queryFn: () => Zd(e ?? ""),
    enabled: !!e
  }), n = (l) => {
    t((c) => c === l ? null : l);
  }, i = e && r !== void 0 ? { [e]: r } : {};
  return {
    expandedWord: e,
    wordMeanings: i,
    loadingMeaning: o ? e : null,
    toggleWordMeaning: n
  };
}, _o = ({ className: e, size: t = 24, ...r }) => /* @__PURE__ */ a("span", { className: C("flex aspect-square items-center justify-center text-primary", e), ...r, children: [
  /* @__PURE__ */ a(
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
      children: /* @__PURE__ */ a("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
    }
  ),
  /* @__PURE__ */ a("span", { className: "sr-only", children: "Loading..." })
] }), br = ({ meaning: e, isLoading: t, onPlayDefinition: r }) => {
  const o = ee();
  return t ? /* @__PURE__ */ a("div", { className: "flex animate-pulse items-center gap-1.5 px-6 py-2 text-muted-foreground text-xs", children: [
    /* @__PURE__ */ a(_o, { className: "size-3" }),
    "Buscando significado..."
  ] }) : e?.definitions?.length ? /* @__PURE__ */ a("div", { className: "w-full border-primary/20 border-l-2 bg-muted pr-3 pb-5 pl-4 text-black dark:text-white", children: [
    /* @__PURE__ */ a("p", { className: "mb-1 font-semibold text-muted-foreground text-xs uppercase tracking-wide", children: "Significado" }),
    /* @__PURE__ */ a("ol", { className: "flex flex-col gap-5", children: e.definitions.slice(0, 3).map((n, i) => {
      const s = Xa(n.split("§")[0]);
      return /* @__PURE__ */ a("li", { className: "break-word flex min-w-0 flex-1 items-center justify-between pl-4", children: [
        /* @__PURE__ */ a(
          "span",
          {
            className: C("min-w-0 max-w-50 flex-1 mobile:text-xs text-sm", o ? "max-w-40" : "max-w-50"),
            children: `${i + 1}. ${s}`
          }
        ),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: () => r(s),
            className: "shrink-0 cursor-pointer text-primary hover:opacity-70",
            "aria-label": "Traduzir definição",
            children: /* @__PURE__ */ a(R, { name: "libras", className: C(o ? "size-5" : "size-6") })
          }
        )
      ] }, i);
    }) })
  ] }) : /* @__PURE__ */ a("div", { className: "px-6 py-2 text-muted-foreground text-xs", children: "Significado não encontrado." });
}, Vt = 50, $d = () => {
  const e = ke(
    X("filteredSigns", "search", "filter", "listRef", "visibleSigns", "setSelectedLetter", "groupedSigns")
  ), t = gr(), { mutateAsync: r } = Xe(), { expandedWord: o, wordMeanings: n, loadingMeaning: i, toggleWordMeaning: s } = fr(), l = async (g) => {
    try {
      const h = await r(g);
      pe(h), ve.setState({ screen: "main" });
    } catch (h) {
      console.error("Erro ao reproduzir definição: ", h);
    }
  }, [c, u] = O(Vt), p = te(null);
  if (S(() => {
    if (!e.search) return;
    const g = p.current;
    if (!g) return;
    const h = new IntersectionObserver(
      ([f]) => {
        f.isIntersecting && u((b) => Math.min(b + Vt, e.filteredSigns.length));
      },
      { threshold: 0.1 }
    );
    return h.observe(g), () => h.disconnect();
  }, [e.search, e.filteredSigns.length]), S(() => {
    u(Vt);
  }, [e.search]), e.filter === "recents")
    return /* @__PURE__ */ a("div", { ref: e.listRef, className: "h-full overflow-auto", children: /* @__PURE__ */ a("ul", { className: "flex flex-col text-sm", children: e.visibleSigns.map((g) => {
      const h = (g || "").replace(/_/g, " ");
      return /* @__PURE__ */ a("li", { children: [
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: () => t(g),
            className: "block w-full bg-background px-4 py-1.5 text-left mobile:text-xs text-sm hover:cursor-pointer hover:bg-muted",
            children: h
          }
        ),
        /* @__PURE__ */ a("div", { className: "mx-4 border-border/30 border-t" })
      ] }, g);
    }) }) });
  const m = (g) => {
    const h = o === g, f = i === g, b = (g || "").replace(/_/g, " ");
    return /* @__PURE__ */ a("li", { className: "hover:bg-muted", children: [
      /* @__PURE__ */ a("div", { className: C("flex min-w-0 items-center", h ? "bg-muted" : ""), children: [
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: () => t(g),
            className: "w-full cursor-pointer whitespace-normal break-all px-6 py-1.25 text-left mobile:text-xs text-sm focus:bg-primary focus:text-primary-foreground",
            children: b
          }
        ),
        /* @__PURE__ */ a(
          U,
          {
            size: "icon-sm",
            variant: "ghost",
            className: "text-muted-foreground",
            onClick: () => s(g),
            "aria-label": h ? "Fechar significado" : "Ver significado",
            children: /* @__PURE__ */ a(R, { name: h ? "chevron-up" : "chevron-down", className: "size-4", "aria-hidden": "true" })
          }
        )
      ] }),
      h && /* @__PURE__ */ a(
        br,
        {
          wordName: g,
          meaning: n[g],
          isLoading: f,
          onPlayDefinition: l
        }
      ),
      /* @__PURE__ */ a("div", { className: "mx-4 border-border/30 border-t" })
    ] }, g);
  }, d = _e(
    (g) => {
      const h = g.currentTarget;
      h.scrollTop + h.clientHeight >= h.scrollHeight - 100 && u((b) => Math.min(b + Vt, e.filteredSigns.length));
    },
    [e.filteredSigns.length]
  );
  return e.search ? /* @__PURE__ */ a("div", { ref: e.listRef, className: "h-full overflow-auto", onScroll: d, children: /* @__PURE__ */ a("ul", { className: "flex flex-col text-sm", children: [
    e.filteredSigns.slice(0, c).map((g) => m(g)),
    c < e.filteredSigns.length && /* @__PURE__ */ a("li", { ref: p, className: "py-2 text-center text-muted-foreground text-xs", children: "Carregando..." })
  ] }) }) : /* @__PURE__ */ a("div", { ref: e.listRef, className: "h-full overflow-auto", children: /* @__PURE__ */ a("ul", { className: "flex flex-col text-sm", children: e.groupedSigns.map(({ letter: g, items: h }) => /* @__PURE__ */ a("li", { children: [
    /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        onClick: () => e.setSelectedLetter(g),
        className: "flex w-full items-center justify-between px-4 py-2 text-left font-semibold mobile:text-xs text-sm hover:cursor-pointer hover:bg-muted",
        children: [
          /* @__PURE__ */ a("span", { children: g === "#" ? "0–9" : g }),
          /* @__PURE__ */ a("span", { className: "font-normal text-muted-foreground text-xs", children: h.length })
        ]
      }
    ),
    /* @__PURE__ */ a("div", { className: "mx-4 border-border/30 border-t" })
  ] }, g)) }) });
}, So = () => /* @__PURE__ */ a("div", { className: "grid h-full place-content-center", children: /* @__PURE__ */ a(_o, {}) }), eu = () => {
  const { search: e, setSelectedCategory: t, categories: r, listRef: o, setFilter: n, isLoadingCategories: i } = ke(
    X("categories", "isLoadingCategories", "search", "setSelectedCategory", "listRef", "setFilter")
  );
  if (i) return /* @__PURE__ */ a(So, {});
  const s = M(() => r.filter((l) => l.name.toLowerCase().includes(e.toLocaleLowerCase())).sort((l, c) => l.name.localeCompare(c.name)), [r, e]);
  return r.length ? s.length ? /* @__PURE__ */ a("div", { ref: o, className: "h-full overflow-auto", children: /* @__PURE__ */ a("ul", { className: "flex flex-col", children: [
    s.map((l) => {
      const c = Ka[l.id] || "categories/undefined";
      return /* @__PURE__ */ a("li", { children: [
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: () => t(l),
            className: C(
              "flex w-full items-center justify-between px-4 mobile:py-2 py-0 mobile:text-xs text-sm hover:cursor-pointer hover:bg-muted"
            ),
            children: /* @__PURE__ */ a("div", { className: "flex items-center gap-2 py-2", children: [
              /* @__PURE__ */ a(R, { name: c, className: "mobile:size-5 size-6 shrink-0 dark:bg-foreground" }),
              /* @__PURE__ */ a("span", { children: l.name.replace(/_/g, " ") })
            ] })
          }
        ),
        /* @__PURE__ */ a("div", { className: "mx-4 border-border/30 border-t" })
      ] }, l.id);
    }),
    /* @__PURE__ */ a("li", { children: [
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          onClick: () => n("all"),
          className: C(
            "flex w-full items-center justify-between px-4 mobile:py-2 py-0 mobile:text-xs text-sm hover:cursor-pointer hover:bg-muted"
          ),
          children: /* @__PURE__ */ a("div", { className: "flex items-center gap-2 py-2", children: [
            /* @__PURE__ */ a(R, { name: "categories/all", className: "mobile:size-5 size-6 shrink-0 dark:bg-foreground" }),
            /* @__PURE__ */ a("span", { children: "TODOS" })
          ] })
        }
      ),
      /* @__PURE__ */ a("div", { className: "mx-4 border-border/30 border-t" })
    ] }, "all-signs")
  ] }) }) : /* @__PURE__ */ a("div", { className: "flex h-10 items-center justify-center", children: "Nenhuma categoria encontrada" }) : /* @__PURE__ */ a("div", { className: "flex h-full w-full items-start justify-center p-6", children: "Sem conexão com a internet. Não é possível estabelecer conexão com o banco de sinais." });
}, tu = () => {
  const { selectedCategory: e, setSelectedCategory: t } = ke(
    X("selectedCategory", "setSelectedCategory")
  );
  if (!e) return null;
  const r = Ka[e.id] || "categories/undefined";
  return e && /* @__PURE__ */ a("div", { className: "flex w-full animate-move-up items-center gap-1 bg-primary/20 mobile:px-3 px-4 mobile:py-2 py-3", children: /* @__PURE__ */ a(
    "button",
    {
      type: "button",
      "aria-label": "Voltar para a lista de categorias",
      onClick: () => t(null),
      className: "group flex h-full w-full items-center justify-start gap-2 text-xs hover:cursor-pointer",
      children: [
        /* @__PURE__ */ a(
          R,
          {
            "aria-hidden": "true",
            name: "chevron-left",
            className: "size-4 bg-muted-foreground group-hover:bg-foreground"
          }
        ),
        /* @__PURE__ */ a(R, { "aria-hidden": "true", name: r, className: "mobile:size-5 size-6 shrink-0" }),
        /* @__PURE__ */ a("span", { className: "font-semibold mobile:text-xs text-sm", children: e.name.replace(/_/g, " ") })
      ]
    }
  ) });
}, ru = () => {
  const e = gr(), t = ke(X("visibleVerbGroups", "onVerbScroll", "listRef")), { mutateAsync: r } = Xe(), { expandedWord: o, wordMeanings: n, loadingMeaning: i, toggleWordMeaning: s } = fr(), l = async (c) => {
    try {
      const u = await r(c);
      pe(u), ve.setState({ screen: "main" });
    } catch (u) {
      console.error("Erro ao reproduzir definição: ", u);
    }
  };
  return /* @__PURE__ */ a("div", { ref: t.listRef, onScroll: t.onVerbScroll, className: "h-full overflow-auto", children: /* @__PURE__ */ a("ul", { className: "flex w-full flex-col text-sm", children: t.visibleVerbGroups.map(([c, u]) => {
    const p = o === c, m = i === c, d = u.conjugation.slice(c === u.conjugation[0]?.original ? 1 : 0);
    return /* @__PURE__ */ a("li", { children: [
      /* @__PURE__ */ a("div", { className: C("flex min-w-0 items-center hover:bg-muted", p && "bg-muted"), children: [
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: () => e(c),
            className: "flex-1 cursor-pointer whitespace-normal break-all px-4 py-1.25 text-left mobile:text-xs text-sm focus:bg-primary focus:text-primary-foreground",
            children: c
          }
        ),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: () => s(c),
            className: "px-2 py-1.25 hover:cursor-pointer hover:text-foreground",
            "aria-label": p ? "Fechar" : "Expandir",
            children: /* @__PURE__ */ a(R, { name: p ? "chevron-up" : "chevron-down", "aria-hidden": "true", className: "size-4" })
          }
        )
      ] }),
      p && /* @__PURE__ */ a("div", { className: "bg-muted pb-1", children: [
        /* @__PURE__ */ a(
          br,
          {
            wordName: c,
            meaning: n[c],
            isLoading: m,
            onPlayDefinition: l
          }
        ),
        d.length > 0 && /* @__PURE__ */ a("div", { className: "mt-1", children: [
          /* @__PURE__ */ a("p", { className: "px-4 py-1 font-semibold text-muted-foreground text-xs uppercase tracking-wide", children: "Concordância verbal" }),
          /* @__PURE__ */ a("ul", { className: "ml-4 border-border/40 border-l", children: d.map((g) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              onClick: () => e(g.original),
              className: "flex w-full items-center gap-2 px-4 py-1.25 mobile:text-xs text-sm hover:cursor-pointer focus:bg-primary focus:text-primary-foreground",
              children: [
                /* @__PURE__ */ a("span", { className: "w-20 shrink-0 text-right text-muted-foreground", children: g.prefix }),
                /* @__PURE__ */ a(R, { name: "arrow-right", className: "size-4" }),
                /* @__PURE__ */ a("span", { children: g.suffix })
              ]
            }
          ) }, g.original)) })
        ] }),
        u.desambiguation.length > 0 && /* @__PURE__ */ a("div", { className: "mt-1", children: [
          /* @__PURE__ */ a("p", { className: "px-4 py-1 font-semibold text-muted-foreground text-xs uppercase tracking-wide", children: "Contexto" }),
          /* @__PURE__ */ a("ul", { className: "ml-4 border-border/40 border-l", children: u.desambiguation.map((g) => {
            const [h, f] = g.split("&", 2);
            return /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                onClick: () => e(g),
                className: "flex w-full items-center gap-2 px-4 py-1.25 mobile:text-xs text-sm hover:bg-muted focus:bg-primary focus:text-primary-foreground",
                children: [
                  h,
                  " (",
                  f,
                  ")"
                ]
              }
            ) }, g);
          }) })
        ] })
      ] }),
      /* @__PURE__ */ a("div", { className: "mx-4 border-border/30 border-t" })
    ] }, c);
  }) }) });
}, ou = () => {
  const e = gr(), t = ke(X("visibleCategoryWords", "isVerbCategory", "listRef", "onCategoryScroll")), { mutateAsync: r } = Xe(), { expandedWord: o, wordMeanings: n, loadingMeaning: i, toggleWordMeaning: s } = fr(), l = async (u) => {
    try {
      const p = await r(u);
      pe(p), ve.setState({ screen: "main" });
    } catch (p) {
      console.error("Erro ao reproduzir definição: ", p);
    }
  };
  if (t.isVerbCategory) return /* @__PURE__ */ a(ru, {});
  const c = M(() => Wd(t.visibleCategoryWords), [t.visibleCategoryWords]);
  return /* @__PURE__ */ a("div", { ref: t.listRef, onScroll: t.onCategoryScroll, className: "h-full overflow-auto", children: /* @__PURE__ */ a("ul", { className: "flex h-full w-full flex-col text-sm", children: c.map((u) => {
    const p = o === u.base, m = i === u.base, d = (u.base || "").replace(/_/g, " ");
    return /* @__PURE__ */ a("li", { className: "hover:bg-muted", children: [
      /* @__PURE__ */ a("div", { className: C("flex min-w-0 items-center", p ? "bg-muted" : ""), children: [
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: () => e(u.base),
            className: "w-full cursor-pointer whitespace-normal break-all px-4 py-1.25 text-left mobile:text-xs text-sm focus:bg-primary focus:text-primary-foreground",
            children: d
          }
        ),
        /* @__PURE__ */ a(
          U,
          {
            size: "icon-sm",
            variant: "ghost",
            className: "text-muted-foreground",
            onClick: () => s(u.base),
            "aria-label": p ? "Fechar significado" : "Ver significado",
            children: /* @__PURE__ */ a(R, { name: p ? "chevron-up" : "chevron-down", "aria-hidden": "true", className: "size-4" })
          }
        )
      ] }),
      p && /* @__PURE__ */ a(Q, { children: [
        /* @__PURE__ */ a(
          br,
          {
            wordName: u.base,
            meaning: n[u.base],
            isLoading: m,
            onPlayDefinition: l
          }
        ),
        u.variants.length > 0 && /* @__PURE__ */ a("div", { className: "mt-1", children: [
          /* @__PURE__ */ a("p", { className: "px-4 py-1 font-semibold text-muted-foreground text-xs uppercase tracking-wide", children: "Contexto" }),
          /* @__PURE__ */ a("ul", { className: "ml-4 border-border/40 border-l", children: u.variants.map((g) => {
            const [, h] = g.split("&", 2), f = (u.base || "").replace(/_/g, " "), b = (h || "").replace(/_/g, " ");
            return /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                onClick: () => {
                  e(g);
                },
                className: "flex w-full px-4 py-1 text-left mobile:text-xs text-sm hover:bg-muted focus:bg-primary focus:text-primary-foreground",
                children: [
                  f,
                  " (",
                  b,
                  ")"
                ]
              }
            ) }, g);
          }) })
        ] })
      ] }),
      /* @__PURE__ */ a("div", { className: "mx-4 border-border/30 border-t" })
    ] }, u.base);
  }) }) });
}, nu = () => {
  const e = ke((t) => t.isLoadingCategorySigns);
  return /* @__PURE__ */ a(Q, { children: [
    /* @__PURE__ */ a(tu, {}),
    e ? /* @__PURE__ */ a(So, {}) : /* @__PURE__ */ a(ou, {})
  ] });
}, au = "data:image/webp;base64,UklGRoIFAABXRUJQVlA4WAoAAAAQAAAAOwAAOwAAQUxQSMoBAAABkITtnyE5/+Hato2TvRvbttc+JnfjaNtOTrZ9su1kvdtP16mqq37hMSImgP4xTTZHZ2dHmwnOHl5atmjz4RNnzpw4vHlRWWm4HcaeXnfwSRsTbntysC7NjuDUd/t7JvX9tr5Oqiy5u5uZ9ObduRYlXvPeM6Xv53opiN2vMcXavhhpaRcZ4MU0SQmXGeTlBCkBxxno8QAJ9uUMdrnd2KhmnOaRhoKuMuArQUaadCS90UDwXQZ9J1hsuoalTRNyPMTADzmKpL5De5ciMkNH06eLrGLwKwXcLuBdcONFvcB7HsnL/oH3I5s3qAuvayBvko6nT+TNYb/gbF7lr1DBK/sVynhTfoUpvKHdeN1DefnNeM15vNjXeK9jeZ7X8K558syb8TaZeVSNV02CmV/QvmSIuJ5CO+UqQg1o9SQc9xTrSayYaQHWfJMYJTxEehBPRmu6cbqqyLD7HpxdbsYo8TbKzQSSWfQE43Ehye3zBOFRL5Kdf13d1TySH72hTU3bukhS6TThuiZPuzrOiRQHVl1ul9N+qTKAAL0HrbzfbKT53opBXgRq9i8oX37g4v1Hjx49un9h//KyAn8zQZusrn7BwcHBfq5WE/03BFZQOCCSAwAAVBIAnQEqPAA8AAAAJgALUbgDc3vXmqVZ+0bl+Zvsu5gPe96kfuA9wD9L+l35gP2g/Z33hfQt6AH88/znWOegB5a/7M/Bv+4HpYPAMq+bcUXZYbo/UVw0TiC5i/2ACXQYIj+rWMuz+tL82e/ZuEYpv/tCzISz9kISMd5WT2ZSg7Bp7UhrTOwiTlFyg4JIVvg4cevfw/uAs2A9kAAA/v86Qf8QFd+4SMJe9tMhrGbEzYWoXeMgHrHm8Wx+ZOYgsfBMPly38bS4/3mzg/KZrqctzdFjpsgdZvsCXNFuZ8YwMh9lfh7uF6TwaL5l8tOU+B9W2YHPKFu9K/dgJquyT3lW8u/EaN9FeMBPS9ui28g/Jq7EySqLCrqTjr9CD3NqHYMJ7xMJO8RvHP/0i+UqRL9ubMJHf9FKqN+YWiPNosChq229ORiCZwOX320/W/zHhj7Ic5vKXZz/X/8hsPY0PCoBE8RnD+R2t//qWF42Svu//ha+na1b9vC5uRZIcf4Fue9KK4ZPHjmahpAuGxVhhU1v/b/IDZ1hTDzC8dbTg+FwzsWA6n7M05e2cnrbbJtnMafj+J5H7K+4+5KPvNBCU4+T1wuNaoghIYgPYQDBPWF8wL3GB9HdPgyd2fEKleda9WHTnuCQ6OP/cv7aGYQyLQnNwibxgxBbSLRChhf+ZeCR/28iCDsaRMC+Iws2Ia3wG26LEsuT5VoVAeiJa7pwfdbvCCsV9YGDjgbj9OocdOOQF4wThrDOZRvxi1spvlA7NnmefkE1X2sxwzz3qoKHgwiiNZMrFtepReX/meSaqyUrjqER/vlcQkhrHNw00A61WmVLfbchXHfnLOmLhtGINyyWZh2hyxTV4zvwcOdZbmRp1r99VbEiD+fJQwk/t5VQ/nxFl4QudxVbNoNmEabaHlvQ6QcZZelNwWX0d2CxAmo/ja/yEm3WzPU8+vwCCm8SY/NbFnMRzIdZ2XIgNl0uURZoAvGFM2AvIs8ViuAdF3bCjvDZmwtTFWpqeDM1yH8VeBrwDsJrksjK8VzCDQZujJxnaXIIeGAIVya9pVp/nJauUfDyoUXccqcHv3EwzjQ9rjmHr/rPPhC2cjAtdFIq8G5rYERmylqAXAwSX/6Tn1QKuaFDWFEsLHZpAlYMx1l0HDnh6T5XCaDRo2WCPc7ksJUv9jkoSPyHTyVeIPWRL558+rWIM706PtSxoai2luOVlh9gAAA=", iu = ({ onRetry: e, isMaxRetries: t }) => {
  const r = ee();
  return /* @__PURE__ */ a("div", { className: "flex h-full flex-col items-center justify-center gap-2 px-4", children: [
    /* @__PURE__ */ a("img", { src: au, alt: "Emoji de rosto triste", className: "size-7 sm:size-8" }),
    /* @__PURE__ */ a("p", { className: "mb-3 px-4 text-center font-semibold mobile:text-sm text-base", children: "Não foi possível carregar o dicionário de sinais." }),
    !t && /* @__PURE__ */ a(U, { onClick: e, size: r ? "xs" : "sm", className: "rounded-full", variant: "outline-gov", children: "Tentar novamente" }),
    t && /* @__PURE__ */ a("span", { className: "mobile:text-xs text-muted-foreground text-sm", children: "Tente novamente mais tarde." })
  ] });
}, su = [
  { label: "Categorias", value: "categories" },
  { label: "A-Z", value: "all" },
  { label: "Recentes", value: "recents" }
], lu = () => {
  const { signs: e } = ot(), { setFilter: t, filter: r, handleHistoryClear: o } = ke(
    X("setFilter", "filter", "handleHistoryClear")
  ), n = ee(), i = !e.length;
  return /* @__PURE__ */ a("div", { className: "flex items-center gap-2 px-4 [&_button]:rounded-full", children: [
    su.map((s) => {
      const l = r === s.value;
      return i && s.value === "recents" ? null : /* @__PURE__ */ a(
        U,
        {
          inert: l,
          variant: l ? "default" : "outline",
          onClick: () => t(s.value),
          className: C("animate-move-down", n ? "p-1" : "p-2"),
          size: n ? "xs" : "sm",
          children: s.label
        },
        s.value
      );
    }),
    r === "recents" && /* @__PURE__ */ a(
      U,
      {
        onClick: o,
        className: "text-muted-foreground not-focus:outline-0 outline-destructive hover:text-destructive focus:[&_svg]:text-destructive",
        size: n ? "icon-xs" : "icon-sm",
        variant: "ghost",
        "aria-label": "Limpar histórico",
        children: /* @__PURE__ */ a(R, { name: "trash" })
      }
    )
  ] });
}, cu = () => {
  const { selectedLetter: e, setSelectedLetter: t } = ke(X("selectedLetter", "setSelectedLetter"));
  return e ? /* @__PURE__ */ a("div", { className: "flex w-full animate-move-up items-center gap-1 bg-primary/20 mobile:px-3 px-4 mobile:py-2 py-3", children: /* @__PURE__ */ a(
    "button",
    {
      type: "button",
      "aria-label": "Voltar para a lista de letras",
      onClick: () => t(null),
      className: "group flex h-full w-full items-center justify-start gap-2 text-xs hover:cursor-pointer",
      children: [
        /* @__PURE__ */ a(R, { "aria-hidden": "true", name: "chevron-left", className: "size-4 bg-muted-foreground group-hover:bg-foreground" }),
        /* @__PURE__ */ a("span", { className: "font-semibold mobile:text-xs text-sm", children: e === "#" ? "0–9" : e })
      ]
    }
  ) }) : null;
}, du = () => {
  const e = ke(X("visibleLetterWords", "onLetterScroll", "listRef")), t = gr(), { mutateAsync: r } = Xe(), { expandedWord: o, wordMeanings: n, loadingMeaning: i, toggleWordMeaning: s } = fr(), l = async (c) => {
    try {
      const u = await r(c);
      pe(u), ve.setState({ screen: "main" });
    } catch (u) {
      console.error("Erro ao reproduzir definição: ", u);
    }
  };
  return /* @__PURE__ */ a("div", { ref: e.listRef, onScroll: e.onLetterScroll, className: "h-full overflow-auto", children: /* @__PURE__ */ a("ul", { className: "flex h-full w-full flex-col text-sm", children: e.visibleLetterWords.map((c) => {
    const u = o === c, p = i === c, m = (c || "").replace(/_/g, " ");
    return /* @__PURE__ */ a("li", { className: "hover:bg-muted", children: [
      /* @__PURE__ */ a("div", { className: C("flex min-w-0 items-center", u ? "bg-muted" : ""), children: [
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: () => t(c),
            className: "w-full cursor-pointer whitespace-normal break-all px-6 py-1.25 text-left mobile:text-xs text-sm focus:bg-primary focus:text-primary-foreground",
            children: m
          }
        ),
        /* @__PURE__ */ a(
          U,
          {
            size: "icon-sm",
            variant: "ghost",
            className: "text-muted-foreground",
            onClick: () => s(c),
            "aria-label": u ? "Fechar significado" : "Ver significado",
            children: /* @__PURE__ */ a(R, { name: u ? "chevron-up" : "chevron-down", className: "size-4", "aria-hidden": "true" })
          }
        )
      ] }),
      u && /* @__PURE__ */ a(
        br,
        {
          wordName: c,
          meaning: n[c],
          isLoading: p,
          onPlayDefinition: l
        }
      ),
      /* @__PURE__ */ a("div", { className: "mx-4 border-border/30 border-t" })
    ] }, c);
  }) }) });
}, uu = () => /* @__PURE__ */ a(Q, { children: [
  /* @__PURE__ */ a(cu, {}),
  /* @__PURE__ */ a(du, {})
] }), pu = () => {
  const { search: e, searchRef: t, handleSearchChange: r, handleClearSearch: o } = ke(
    X("search", "searchRef", "handleSearchChange", "handleClearSearch")
  );
  return /* @__PURE__ */ a("div", { className: "relative flex items-center p-4 pb-0", children: [
    /* @__PURE__ */ a(
      "input",
      {
        ref: t,
        type: "text",
        placeholder: "Pesquisar (ex: AJUDAR)...",
        onInput: (n) => r(n.currentTarget.value),
        className: "h-9 w-full rounded-md border p-2 pr-8 outline-primary placeholder:text-muted-foreground placeholder:text-sm focus:outline-2 focus:outline-solid"
      }
    ),
    e && /* @__PURE__ */ a(
      U,
      {
        onClick: o,
        "aria-label": "Limpar busca",
        variant: "ghost",
        size: "icon-xs",
        className: "absolute right-5 rounded-sm bg-transparent! text-muted-foreground outline-destructive hover:text-destructive focus:text-destructive",
        children: /* @__PURE__ */ a(R, { name: "x" })
      }
    )
  ] });
}, hu = () => {
  const e = ke(
    X(
      "isLoading",
      "data",
      "filter",
      "search",
      "selectedLetter",
      "selectedCategory",
      "retry",
      "isMaxRetries",
      "filteredLetterWords",
      "filteredCategoryWords",
      "filteredSigns"
    )
  );
  if (e.isLoading) return /* @__PURE__ */ a(So, {});
  if (!e.data && e.filter === "all") return /* @__PURE__ */ a(iu, { onRetry: e.retry, isMaxRetries: e.isMaxRetries });
  const t = e.filter === "all" && !!e.selectedLetter, r = M(() => t ? !e.filteredLetterWords.length && !!e.search : e.filter === "categories" ? e.selectedCategory ? !e.filteredCategoryWords.length && !!e.search : !1 : !e.filteredSigns.length && !!e.search, [e]);
  return /* @__PURE__ */ a("div", { className: "flex h-full flex-col gap-2 overflow-hidden text-primary dark:text-white", children: [
    /* @__PURE__ */ a(pu, {}),
    /* @__PURE__ */ a(lu, {}),
    e.filter === "categories" && !e.selectedCategory && /* @__PURE__ */ a(eu, {}),
    e.filter === "categories" && e.selectedCategory && /* @__PURE__ */ a(nu, {}),
    t && /* @__PURE__ */ a(uu, {}),
    e.filter !== "categories" && !t && !r && /* @__PURE__ */ a($d, {}),
    r && /* @__PURE__ */ a("p", { className: "break-all px-4 font-semibold mobile:text-xs text-muted-foreground text-sm", children: [
      "Sem resultados para ",
      /* @__PURE__ */ a("q", { className: "text-foreground", children: e.search })
    ] })
  ] });
}, mu = () => /* @__PURE__ */ a(Kd, { children: /* @__PURE__ */ a(Ea, { children: [
  /* @__PURE__ */ a(Ra, { close: !0, children: /* @__PURE__ */ a(Pa, { children: "Dicionário" }) }),
  /* @__PURE__ */ a(Ia, { className: "overflow-hidden p-0", children: /* @__PURE__ */ a(hu, {}) })
] }) }), gu = () => {
  const e = ve((t) => t.screen);
  return /* @__PURE__ */ a(Q, { children: [
    e === "dictionary" && /* @__PURE__ */ a(mu, {}),
    e === "about" && /* @__PURE__ */ a(qc, {})
  ] });
};
let tt = [], Jt = [];
const Pr = () => Jt.forEach((e) => e([...tt])), ar = (e, t) => {
  const r = na(), o = t?.duration || 3e3;
  tt.push({ id: r, message: e, duration: o, ...t }), Pr(), setTimeout(() => {
    const n = tt.findIndex((i) => i.id === r);
    n > -1 && (tt[n].isExiting = !0, Pr()), setTimeout(() => {
      tt = tt.filter((i) => i.id !== r), Pr();
    }, 500);
  }, o);
}, fu = (e) => (Jt.push(e), () => {
  Jt = Jt.filter((t) => t !== e);
}), nt = fe()(() => ({})), De = {
  get: nt.getState,
  set: nt.setState,
  subscribe: nt.subscribe
}, bu = Rt(
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
), vu = ({
  message: e,
  isExiting: t,
  position: r = "bottom",
  align: o = "center",
  variant: n = "default",
  className: i
}) => /* @__PURE__ */ a(
  "div",
  {
    "data-theme": n === "light" || n === "dark" ? n : void 0,
    className: C(
      bu({ position: r, align: o }),
      t && (r === "top" ? "-top-100!" : "-bottom-100!"),
      i
    ),
    children: /* @__PURE__ */ a(
      "div",
      {
        "data-slot": "toast-content",
        className: C(
          "pointer-events-auto rounded-lg border bg-background px-2.5 py-1.5 mobile:text-xs text-sm transition-all duration-500 ease-in-out",
          n === "success" && "border-none bg-success text-success-foreground",
          n === "destructive" && "border-none bg-destructive text-destructive-foreground",
          n === "primary" && "border-none bg-primary text-primary-foreground"
        ),
        children: /* @__PURE__ */ a("div", { className: "break-anywhere text-center", children: e })
      }
    )
  }
), Au = () => {
  const [e, t] = O([]), r = nt((o) => o.appRoot);
  return S(() => fu(t), []), r ? lo(
    /* @__PURE__ */ a("div", { className: "pointer-events-none absolute inset-0 z-40", children: e.map((o) => /* @__PURE__ */ a(vu, { ...o }, o.id)) }),
    r
  ) : null;
}, wu = () => {
  const e = H((t) => t.isTranslating);
  return /* @__PURE__ */ a(Q, { children: [
    /* @__PURE__ */ a(gu, {}),
    /* @__PURE__ */ a(Fc, {}),
    /* @__PURE__ */ a(Au, {}),
    e && /* @__PURE__ */ a(Fs, {})
  ] });
}, yu = `@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:"";--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-orange-50:oklch(98% .016 73.684);--color-orange-500:oklch(70.5% .213 47.604);--color-orange-600:oklch(64.6% .222 41.116);--color-green-50:oklch(98.2% .018 155.826);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-blue-50:oklch(97% .014 254.604);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs--line-height:calc(1/.75);--text-sm--line-height:calc(1.25/.875);--text-base--line-height: 1.5 ;--font-weight-light:300;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--leading-normal:1.5;--radius-xs:.125rem;--drop-shadow-lg:0 4px 4px #00000026;--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--blur-sm:8px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-primary:var(--primary);--tw-translate-y:0;--tw-translate-x:0}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*{box-sizing:border-box;--tw-border-style:solid;border-style:solid;border-color:var(--border);outline-offset:-1px;outline-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){*{outline-color:color-mix(in oklab,var(--ring)50%,transparent)}}:focus-visible{outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--primary);--tw-outline-style:solid;outline-style:solid}:host{border-color:var(--border);fill:var(--foreground);color:var(--foreground)}:where(:host),:host:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}@media(prefers-color-scheme:dark){:host:not([data-theme]){color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}}:host:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:host:has(input.theme-controller[value=dark]:checked),[data-theme=dark]{color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E");scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:root:not(span){overflow:var(--page-overflow)}:root{background:var(--page-scroll-bg,var(--root-bg));--page-scroll-bg-on:linear-gradient(var(--root-bg,#0000),var(--root-bg,#0000))var(--root-bg,#0000)}@supports (color:color-mix(in lab,red,red)){:root{--page-scroll-bg-on:linear-gradient(var(--root-bg,#0000),var(--root-bg,#0000))color-mix(in srgb,var(--root-bg,#0000),oklch(0% 0 0) calc(var(--page-has-backdrop,0)*40%))}}:root{--page-scroll-transition-on:background-color .3s ease-out;transition:var(--page-scroll-transition);scrollbar-gutter:var(--page-scroll-gutter,unset);scrollbar-gutter:if(style(--page-has-scroll: 1): var(--page-scroll-gutter,unset); else: unset)}@keyframes set-page-has-scroll{0%,to{--page-has-scroll:1}}:root,[data-theme]{background:var(--page-scroll-bg,var(--root-bg));color:var(--color-base-content)}:where(:root,[data-theme]){--root-bg:var(--color-base-100)}}@layer components;@layer utilities{@layer daisyui.l1.l2.l3{.modal{pointer-events:none;visibility:hidden;width:100%;max-width:none;height:100%;max-height:none;color:inherit;transition:visibility .3s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;overscroll-behavior:contain;z-index:999;scrollbar-gutter:auto;background-color:#0000;place-items:center;margin:0;padding:0;display:grid;position:fixed;inset:0;overflow:clip}.modal::backdrop{display:none}.tooltip{--tt-bg:var(--color-neutral);--tt-off: calc(100% + .5rem) ;--tt-tail: calc(100% + 1px + .25rem) ;display:inline-block;position:relative}.tooltip>.tooltip-content,.tooltip[data-tip]:before{border-radius:var(--radius-field);text-align:center;white-space:normal;max-width:20rem;color:var(--color-neutral-content);opacity:0;background-color:var(--tt-bg);pointer-events:none;z-index:2;--tw-content:attr(data-tip);content:var(--tw-content);width:max-content;padding-block:.25rem;padding-inline:.5rem;font-size:.875rem;line-height:1.25;position:absolute}.tooltip:after{opacity:0;background-color:var(--tt-bg);content:"";pointer-events:none;--mask-tooltip:url("data:image/svg+xml,%3Csvg width='10' height='4' viewBox='0 0 8 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.500009 1C3.5 1 3.00001 4 5.00001 4C7 4 6.5 1 9.5 1C10 1 10 0.499897 10 0H0C-1.99338e-08 0.5 0 1 0.500009 1Z' fill='black'/%3E%3C/svg%3E%0A");width:.625rem;height:.25rem;-webkit-mask-position:-1px 0;mask-position:-1px 0;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-image:var(--mask-tooltip);mask-image:var(--mask-tooltip);display:block;position:absolute}@media(prefers-reduced-motion:no-preference){.tooltip>.tooltip-content,.tooltip[data-tip]:before,.tooltip:after{transition:opacity .2s cubic-bezier(.4,0,.2,1) 75ms,transform .2s cubic-bezier(.4,0,.2,1) 75ms}}:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible))>.tooltip-content,:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible))[data-tip]:before,:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible)):after{opacity:1;--tt-pos:0rem}@media(prefers-reduced-motion:no-preference){:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible))>.tooltip-content,:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible))[data-tip]:before,:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible)):after{transition:opacity .2s cubic-bezier(.4,0,.2,1),transform .2s cubic-bezier(.4,0,.2,1)}}.tab{cursor:pointer;appearance:none;text-align:center;webkit-user-select:none;-webkit-user-select:none;user-select:none;flex-wrap:wrap;justify-content:center;align-items:center;display:inline-flex;position:relative}@media(hover:hover){.tab:hover{color:var(--color-base-content)}}.tab{--tab-p:.75rem;--tab-bg:var(--color-base-100);--tab-border-color:var(--color-base-300);--tab-radius-ss:0;--tab-radius-se:0;--tab-radius-es:0;--tab-radius-ee:0;--tab-order:0;--tab-radius-min:calc(.75rem - var(--border));--tab-radius-limit:min(var(--radius-field),var(--tab-radius-min));--tab-radius-grad:#0000 calc(69% - var(--border)),var(--tab-border-color)calc(69% - var(--border) + .25px),var(--tab-border-color)69%,var(--tab-bg) calc(69% + .25px) ;order:var(--tab-order);height:var(--tab-height);padding-inline:var(--tab-p);border-color:#0000;font-size:.875rem}.tab:is(input[type=radio]){min-width:fit-content}.tab:is(input[type=radio]):after{--tw-content:attr(aria-label);content:var(--tw-content)}.tab:is(label){position:relative}.tab:is(label) input{cursor:pointer;appearance:none;opacity:0;position:absolute;inset:0}:is(.tab:checked,.tab:is(label:has(:checked)),.tab:is(.tab-active,[aria-selected=true],[aria-current=true],[aria-current=page]))+.tab-content{display:block}.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true],[aria-current=true],[aria-current=page]){color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true],[aria-current=true],[aria-current=page]){color:color-mix(in oklab,var(--color-base-content)50%,transparent)}}.tab:not(input):empty{cursor:default;flex-grow:1}.tab:focus{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.tab:focus{outline-offset:2px;outline:2px solid #0000}}.tab:focus-visible,.tab:is(label:has(:checked:focus-visible)){outline-offset:-5px;outline:2px solid}.tab[disabled]{pointer-events:none;opacity:.4}.menu{--menu-active-fg:var(--color-neutral-content);--menu-active-bg:var(--color-neutral);flex-flow:column wrap;width:fit-content;padding:.5rem;font-size:.875rem;display:flex}.menu :where(li ul){white-space:nowrap;margin-inline-start:1rem;padding-inline-start:.5rem;position:relative}.menu :where(li ul):before{background-color:var(--color-base-content);opacity:.1;width:var(--border);content:"";inset-inline-start:0;position:absolute;top:.75rem;bottom:.75rem}.menu :where(li>.menu-dropdown:not(.menu-dropdown-show)){display:none}.menu :where(li:not(.menu-title)>:not(ul,details,.menu-title,.btn)),.menu :where(li:not(.menu-title)>details>summary:not(.menu-title)){border-radius:var(--radius-field);text-align:start;text-wrap:balance;-webkit-user-select:none;user-select:none;grid-auto-columns:minmax(auto,max-content) auto max-content;grid-auto-flow:column;align-content:flex-start;align-items:center;gap:.5rem;padding-block:.375rem;padding-inline:.75rem;transition-property:color,background-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:grid}.menu :where(li>details>summary){--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.menu :where(li>details>summary){outline-offset:2px;outline:2px solid #0000}}.menu :where(li>details>summary)::-webkit-details-marker{display:none}:is(.menu :where(li>details>summary),.menu :where(li>.menu-dropdown-toggle)):after{content:"";transform-origin:50%;pointer-events:none;justify-self:flex-end;width:.375rem;height:.375rem;transition-property:rotate,translate;transition-duration:.2s;display:block;translate:0 -1px;rotate:-135deg;box-shadow:inset 2px 2px}.menu details{interpolate-size:allow-keywords;overflow:hidden}.menu details::details-content{block-size:0}@media(prefers-reduced-motion:no-preference){.menu details::details-content{transition-behavior:allow-discrete;transition-property:block-size,content-visibility;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1)}}.menu details[open]::details-content{block-size:auto}.menu :where(li>details[open]>summary):after,.menu :where(li>.menu-dropdown-toggle.menu-dropdown-show):after{translate:0 1px;rotate:45deg}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{color:var(--color-base-content);--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){box-shadow:inset 0 1px #00000003,inset 0 -1px #ffffff03}.menu :where(li:empty){background-color:var(--color-base-content);opacity:.1;height:1px;margin:.5rem 1rem}.menu :where(li){flex-flow:column wrap;flex-shrink:0;align-items:stretch;display:flex;position:relative}.menu :where(li) .badge{justify-self:flex-end}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{outline-offset:2px;outline:2px solid #0000}}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{color:var(--menu-active-fg);background-color:var(--menu-active-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):not(:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):active){box-shadow:0 2px calc(var(--depth)*3px) -2px var(--menu-active-bg)}.menu :where(li).menu-disabled{pointer-events:none;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li).menu-disabled{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.menu .dropdown:focus-within .menu-dropdown-toggle:after{translate:0 1px;rotate:45deg}.menu .dropdown-content{margin-top:.5rem;padding:.5rem}.menu .dropdown-content:before{display:none}.dropdown{position-area:var(--anchor-v,bottom)var(--anchor-h,span-right);display:inline-block;position:relative}.dropdown>:not(:has(~[class*=dropdown-content])):focus{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.dropdown>:not(:has(~[class*=dropdown-content])):focus{outline-offset:2px;outline:2px solid #0000}}.dropdown .dropdown-content{position:absolute}.dropdown.dropdown-close .dropdown-content,.dropdown:not(details,.dropdown-open,.dropdown-hover:hover,:focus-within) .dropdown-content,.dropdown.dropdown-hover:not(:hover) [tabindex]:first-child:focus:not(:focus-visible)~.dropdown-content{transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover],.dropdown .dropdown-content{z-index:999}@media(prefers-reduced-motion:no-preference){.dropdown[popover],.dropdown .dropdown-content{transition-behavior:allow-discrete;transition-property:opacity,scale,display;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);animation:.2s dropdown}}@starting-style{.dropdown[popover],.dropdown .dropdown-content{opacity:0;scale:95%}}:is(.dropdown:not(.dropdown-close).dropdown-open,.dropdown:not(.dropdown-close):not(.dropdown-hover):focus,.dropdown:not(.dropdown-close):focus-within)>[tabindex]:first-child{pointer-events:none}:is(.dropdown:not(.dropdown-close).dropdown-open,.dropdown:not(.dropdown-close):not(.dropdown-hover):focus,.dropdown:not(.dropdown-close):focus-within) .dropdown-content,.dropdown:not(.dropdown-close).dropdown-hover:hover .dropdown-content{opacity:1;scale:100%}.dropdown:is(details) summary::-webkit-details-marker{display:none}.dropdown:where([popover]){background:0 0}.dropdown[popover]{color:inherit;position:fixed}@supports not (position-area:bottom){.dropdown[popover]{margin:auto}.dropdown[popover].dropdown-close{transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover].dropdown-open:not(:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover]::backdrop{background-color:oklab(0% none none/.3)}}:is(.dropdown[popover].dropdown-close,.dropdown[popover]:not(.dropdown-open,:popover-open)){transform-origin:top;opacity:0;display:none;scale:95%}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}@media(hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible,.btn:has(:focus-visible){isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio])[aria-label]:after{--tw-content:attr(aria-label);content:var(--tw-content)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.loading{pointer-events:none;aspect-ratio:1;vertical-align:middle;width:calc(var(--size-selector,.25rem)*6);background-color:currentColor;display:inline-block;-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:100%;mask-size:100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.collapse{border-radius:var(--radius-box,1rem);isolation:isolate;grid-template-rows:max-content 0fr;grid-template-columns:minmax(0,1fr);width:100%;display:grid;position:relative;overflow:hidden}@media(prefers-reduced-motion:no-preference){.collapse{transition:grid-template-rows .2s}}.collapse>input:is([type=checkbox],[type=radio]){appearance:none;opacity:0;z-index:1;grid-row-start:1;grid-column-start:1;width:100%;min-height:1lh;padding:1rem;padding-inline-end:3rem;transition:background-color .2s ease-out}.collapse:is([open],[tabindex]:focus:not(.collapse-close),[tabindex]:focus-within:not(.collapse-close)),.collapse:not(.collapse-close):has(>input:is([type=checkbox],[type=radio]):checked){grid-template-rows:max-content 1fr}.collapse:is([open],[tabindex]:focus:not(.collapse-close),[tabindex]:focus-within:not(.collapse-close))>.collapse-content,.collapse:not(.collapse-close)>:where(input:is([type=checkbox],[type=radio]):checked~.collapse-content){content-visibility:visible;min-height:fit-content}@supports not (content-visibility:visible){.collapse:is([open],[tabindex]:focus:not(.collapse-close),[tabindex]:focus-within:not(.collapse-close))>.collapse-content,.collapse:not(.collapse-close)>:where(input:is([type=checkbox],[type=radio]):checked~.collapse-content){visibility:visible}}.collapse:focus-visible,.collapse:has(>input:is([type=checkbox],[type=radio]):focus-visible),.collapse:has(summary:focus-visible){outline-color:var(--color-base-content);outline-offset:2px;outline-width:2px;outline-style:solid}.collapse:not(.collapse-close)>input[type=checkbox],.collapse:not(.collapse-close)>input[type=radio]:not(:checked),.collapse:not(.collapse-close)>.collapse-title{cursor:pointer}:is(.collapse[tabindex]:focus:not(.collapse-close,.collapse[open]),.collapse[tabindex]:focus-within:not(.collapse-close,.collapse[open]))>.collapse-title{cursor:unset}.collapse:is([open],[tabindex]:focus:not(.collapse-close),[tabindex]:focus-within:not(.collapse-close))>:where(.collapse-content),.collapse:not(.collapse-close)>:where(input:is([type=checkbox],[type=radio]):checked~.collapse-content){padding-bottom:1rem}.collapse:is(details){width:100%}@media(prefers-reduced-motion:no-preference){.collapse:is(details)::details-content{transition:content-visibility .2s allow-discrete,visibility .2s allow-discrete,min-height .2s ease-out allow-discrete,padding .1s ease-out 20ms,background-color .2s ease-out,height .2s;interpolate-size:allow-keywords;height:0}.collapse:is(details):where([open])::details-content{height:auto}}.collapse:is(details) summary{display:block;position:relative}.collapse:is(details) summary::-webkit-details-marker{display:none}.collapse:is(details)>.collapse-content{content-visibility:visible}.collapse:is(details) summary{outline:none}.toast{translate:var(--toast-x,0)var(--toast-y,0);inset-inline:auto 1rem;background-color:#0000;flex-direction:column;gap:.5rem;width:max-content;max-width:calc(100vw - 2rem);display:flex;position:fixed;top:auto;bottom:1rem}@media(prefers-reduced-motion:no-preference){.toast>*{animation:.25s ease-out toast}}.toggle{border:var(--border)solid currentColor;color:var(--input-color);cursor:pointer;appearance:none;vertical-align:middle;webkit-user-select:none;-webkit-user-select:none;user-select:none;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--toggle-p),var(--radius-selector-max)) + min(var(--border),var(--radius-selector-max)));padding:var(--toggle-p);flex-shrink:0;grid-template-columns:0fr 1fr 1fr;place-content:center;display:inline-grid;position:relative;box-shadow:inset 0 1px}@supports (color:color-mix(in lab,red,red)){.toggle{box-shadow:0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000) inset}}.toggle{--input-color:var(--color-base-content);transition:color .3s,grid-template-columns .2s}@supports (color:color-mix(in lab,red,red)){.toggle{--input-color:color-mix(in oklab,var(--color-base-content)50%,#0000)}}.toggle{--toggle-p:calc(var(--size)*.125);--size:calc(var(--size-selector,.25rem)*6);width:calc((var(--size)*2) - (var(--border) + var(--toggle-p))*2);height:var(--size)}.toggle>*{z-index:1;cursor:pointer;appearance:none;background-color:#0000;border:none;grid-column:2/span 1;grid-row-start:1;height:100%;padding:.125rem;transition:opacity .2s,rotate .4s}.toggle>:focus{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.toggle>:focus{outline-offset:2px;outline:2px solid #0000}}.toggle>:nth-child(2){color:var(--color-base-100);rotate:none}.toggle>:nth-child(3){color:var(--color-base-100);opacity:0;rotate:-15deg}.toggle:has(:checked)>:nth-child(2){opacity:0;rotate:15deg}.toggle:has(:checked)>:nth-child(3){opacity:1;rotate:none}.toggle:before{aspect-ratio:1;border-radius:var(--radius-selector);--tw-content:"";content:var(--tw-content);width:100%;height:100%;box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor;background-color:currentColor;grid-row-start:1;grid-column-start:2;transition:background-color .1s,translate .2s,inset-inline-start .2s;position:relative;inset-inline-start:0;translate:0}@supports (color:color-mix(in lab,red,red)){.toggle:before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000)}}.toggle:before{background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}@media(forced-colors:active){.toggle:before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{.toggle:before{outline-offset:-1rem;outline:.25rem solid}}.toggle:focus-visible,.toggle:has(:focus-visible){outline-offset:2px;outline:2px solid}.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked){background-color:var(--color-base-100);--input-color:var(--color-base-content);grid-template-columns:1fr 1fr 0fr}:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{background-color:currentColor}@starting-style{:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{opacity:0}}.toggle:indeterminate{grid-template-columns:.5fr 1fr .5fr}.toggle:disabled{cursor:not-allowed;opacity:.3}.toggle:disabled:before{border:var(--border)solid currentColor;background-color:#0000}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);font-size:max(var(--font-size,.875rem),.875rem);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=url]),.input :where(input[type=email]){direction:ltr}.input :where(input[type=date]){display:inline-flex}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate}@media(pointer:coarse){@supports (-webkit-touch-callout:none){.input:focus,.input:focus-within{--font-size:1rem}}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input{cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input{color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input)::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input)::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input{box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.input:has(>input[type=date]) :where(input[type=date]){webkit-appearance:none;appearance:none;display:inline-flex}.input:has(>input[type=date]) input[type=date]::-webkit-calendar-picker-indicator{cursor:pointer;width:1em;height:1em;position:absolute;inset-inline-end:.75em}.range{appearance:none;webkit-appearance:none;--range-thumb:var(--color-base-100);--range-thumb-size:calc(var(--size-selector,.25rem)*6);--range-progress:currentColor;--range-fill:1;--range-p:.25rem;--range-bg:currentColor}@supports (color:color-mix(in lab,red,red)){.range{--range-bg:color-mix(in oklab,currentColor 10%,#0000)}}.range{cursor:pointer;vertical-align:middle;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));width:clamp(3rem,20rem,100%);height:var(--range-thumb-size);background-color:#0000;border:none;overflow:hidden}[dir=rtl] .range{--range-dir:-1}.range:focus{outline:none}.range:focus-visible{outline-offset:2px;outline:2px solid}.range::-webkit-slider-runnable-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}@media(forced-colors:active){.range::-webkit-slider-runnable-track{border:1px solid}.range::-moz-range-track{border:1px solid}}.range::-webkit-slider-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));background-color:var(--range-thumb);height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;appearance:none;webkit-appearance:none;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100cqw) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100cqw*var(--range-fill));position:relative;top:50%;transform:translateY(-50%)}@supports (color:color-mix(in lab,red,red)){.range::-webkit-slider-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100cqw) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100cqw*var(--range-fill))}}.range::-moz-range-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}.range::-moz-range-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100cqw) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100cqw*var(--range-fill));background-color:currentColor;position:relative;top:50%}@supports (color:color-mix(in lab,red,red)){.range::-moz-range-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100cqw) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100cqw*var(--range-fill))}}.range:disabled{cursor:not-allowed;opacity:.3}.select{border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;white-space:nowrap;text-overflow:ellipsis;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-image:linear-gradient(45deg,#0000 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,#0000 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.375rem;padding-inline:.75rem 1.75rem;font-size:.875rem;display:inline-flex;position:relative;overflow:hidden}@supports (color:color-mix(in lab,red,red)){.select{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.select{border-color:var(--input-color);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.select{--size:calc(var(--size-field,.25rem)*10)}[dir=rtl] .select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}[dir=rtl] .select::picker(select){translate:.5rem}[dir=rtl] .select select::picker(select){translate:.5rem}.select[multiple]{background-image:none;height:auto;padding-block:.75rem;padding-inline-end:.75rem;overflow:auto}.select select{appearance:none;width:calc(100% + 2.75rem);height:calc(100% - calc(var(--border)*2));background:inherit;border-radius:inherit;border-style:none;align-items:center;margin-inline:-.75rem -1.75rem;padding-inline:.75rem 1.75rem}.select select:focus,.select select:focus-within{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.select select:focus,.select select:focus-within{outline-offset:2px;outline:2px solid #0000}}.select select:not(:last-child){background-image:none;margin-inline-end:-1.375rem}.select:focus,.select:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.select:focus,.select:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.select:focus,.select:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate}.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select{cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select{color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select)::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select)::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.select:has(>select[disabled])>select[disabled]{cursor:not-allowed}@supports (appearance:base-select){.select,.select select{appearance:base-select}:is(.select,.select select)::picker(select){appearance:base-select}}:is(.select,.select select)::picker(select){color:inherit;border:var(--border)solid var(--color-base-200);border-radius:var(--radius-box);background-color:inherit;max-height:min(24rem,70dvh);box-shadow:0 2px calc(var(--depth)*3px) -2px #0003;box-shadow:0 20px 25px -5px rgb(0 0 0/calc(var(--depth)*.1)),0 8px 10px -6px rgb(0 0 0/calc(var(--depth)*.1));margin-block:.5rem;margin-inline:.5rem;padding:.5rem;translate:-.5rem}:is(.select,.select select)::picker-icon{display:none}:is(.select,.select select) optgroup{padding-top:.5em}:is(.select,.select select) optgroup option:first-child{margin-top:.5em}:is(.select,.select select) option{border-radius:var(--radius-field);white-space:normal;padding-block:.375rem;padding-inline:.75rem;transition-property:color,background-color;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1)}:is(.select,.select select) option:not(:disabled):hover,:is(.select,.select select) option:not(:disabled):focus-visible{cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select,.select select) option:not(:disabled):hover,:is(.select,.select select) option:not(:disabled):focus-visible{background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}:is(.select,.select select) option:not(:disabled):hover,:is(.select,.select select) option:not(:disabled):focus-visible{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){:is(.select,.select select) option:not(:disabled):hover,:is(.select,.select select) option:not(:disabled):focus-visible{outline-offset:2px;outline:2px solid #0000}}:is(.select,.select select) option:not(:disabled):active{background-color:var(--color-neutral);color:var(--color-neutral-content);box-shadow:0 2px calc(var(--depth)*3px) -2px var(--color-neutral)}.avatar{vertical-align:middle;display:inline-flex;position:relative}.avatar>div{aspect-ratio:1;display:block;overflow:hidden}.avatar img{object-fit:cover;width:100%;height:100%}.checkbox{border:var(--border)solid var(--input-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.checkbox{border:var(--border)solid var(--input-color,color-mix(in oklab,var(--color-base-content)20%,#0000))}}.checkbox{cursor:pointer;appearance:none;border-radius:var(--radius-selector);vertical-align:middle;color:var(--color-base-content);box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 0 #0000 inset,0 0 #0000;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);flex-shrink:0;padding:.25rem;transition:background-color .2s,box-shadow .2s;display:inline-block;position:relative}.checkbox:before{--tw-content:"";content:var(--tw-content);opacity:0;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,70% 80%,70% 100%);width:100%;height:100%;box-shadow:0 3px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-color:currentColor;font-size:1rem;line-height:.75;transition:clip-path .3s .1s,opacity .1s .1s,rotate .3s .1s,translate .3s .1s;display:block;rotate:45deg}.checkbox:focus-visible{outline:2px solid var(--input-color,currentColor);outline-offset:2px}.checkbox:checked,.checkbox[aria-checked=true]{background-color:var(--input-color,#0000);box-shadow:0 0 #0000 inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1))}:is(.checkbox:checked,.checkbox[aria-checked=true]):before{clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 0%,70% 0%,70% 100%);opacity:1}@media(forced-colors:active){:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}@media print{:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}.checkbox:indeterminate{background-color:var(--input-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.checkbox:indeterminate{background-color:var(--input-color,color-mix(in oklab,var(--color-base-content)20%,#0000))}}.checkbox:indeterminate:before{opacity:1;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,80% 80%,80% 100%);translate:0 -35%;rotate:none}.radio{cursor:pointer;appearance:none;vertical-align:middle;border:var(--border)solid var(--input-color,currentColor);border-radius:3.40282e38px;flex-shrink:0;padding:.25rem;display:inline-block;position:relative}@supports (color:color-mix(in lab,red,red)){.radio{border:var(--border)solid var(--input-color,color-mix(in srgb,currentColor 20%,#0000))}}.radio{box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);color:var(--input-color,currentColor)}.radio:before{--tw-content:"";content:var(--tw-content);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);border-radius:3.40282e38px;width:100%;height:100%;display:block}.radio:focus-visible{outline:2px solid}.radio:checked,.radio[aria-checked=true]{background-color:var(--color-base-100);border-color:currentColor}@media(prefers-reduced-motion:no-preference){.radio:checked,.radio[aria-checked=true]{animation:.2s ease-out radio}}:is(.radio:checked,.radio[aria-checked=true]):before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1));background-color:currentColor}@media(forced-colors:active){:is(.radio:checked,.radio[aria-checked=true]):before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{:is(.radio:checked,.radio[aria-checked=true]):before{outline-offset:-1rem;outline:.25rem solid}}.rating{vertical-align:middle;display:inline-flex;position:relative}.rating input{appearance:none;border:none}.rating :where(*){background-color:var(--color-base-content);opacity:.2;border-radius:0;width:1.5rem;height:1.5rem}@media(prefers-reduced-motion:no-preference){.rating :where(*){animation:.25s ease-out rating}}.rating :where(*):is(input){cursor:pointer}.rating .rating-hidden{background-color:#0000;width:.5rem}.rating input[type=radio]:checked{background-image:none}.rating :checked,.rating [aria-checked=true],.rating [aria-current=true],.rating :has(~:checked,~[aria-checked=true],~[aria-current=true]){opacity:1}.rating :focus-visible{scale:1.1}@media(prefers-reduced-motion:no-preference){.rating :focus-visible{transition:scale .2s ease-out}}.rating :active:focus{animation:none;scale:1.1}.progress{appearance:none;border-radius:var(--radius-box);background-color:currentColor;width:100%;height:.5rem;position:relative;overflow:hidden}@supports (color:color-mix(in lab,red,red)){.progress{background-color:color-mix(in oklab,currentcolor 20%,transparent)}}.progress{color:var(--color-base-content)}.progress:indeterminate{background-image:repeating-linear-gradient(90deg,currentColor -1% 10%,#0000 10% 90%);background-position-x:15%;background-size:200%}@media(prefers-reduced-motion:no-preference){.progress:indeterminate{animation:5s ease-in-out infinite progress}}@supports ((-moz-appearance:none)){.progress:indeterminate::-moz-progress-bar{background-color:#0000}@media(prefers-reduced-motion:no-preference){.progress:indeterminate::-moz-progress-bar{background-image:repeating-linear-gradient(90deg,currentColor -1% 10%,#0000 10% 90%);background-position-x:15%;background-size:200%;animation:5s ease-in-out infinite progress}}.progress::-moz-progress-bar{border-radius:var(--radius-box);background-color:currentColor}}@supports ((-webkit-appearance:none)){.progress::-webkit-progress-bar{border-radius:var(--radius-box);background-color:#0000}.progress::-webkit-progress-value{border-radius:var(--radius-box);background-color:currentColor}}.stack{grid-template-rows:3px 4px 1fr 4px 3px;grid-template-columns:3px 4px 1fr 4px 3px;display:inline-grid}.stack>*{width:100%;height:100%}.stack>:nth-child(n+2){opacity:.7;width:100%}.stack>:nth-child(2){z-index:2;opacity:.9}.stack>:first-child{z-index:3;width:100%}.filter{flex-wrap:wrap;display:flex}.filter input[type=radio]{width:auto}.filter input{opacity:1;transition:margin .1s,opacity .3s,padding .3s,border-width .1s;overflow:hidden;scale:1}.filter input:not(:last-child){margin-inline-end:.25rem}.filter input.filter-reset{aspect-ratio:1}.filter input.filter-reset:after{--tw-content:"×";content:var(--tw-content)}.filter:not(:has(input:checked:not(.filter-reset))) .filter-reset,.filter:not(:has(input:checked:not(.filter-reset))) input[type=reset],.filter:has(input:checked:not(.filter-reset)) input:not(:checked,.filter-reset,input[type=reset]){opacity:0;border-width:0;width:0;margin-inline:0;padding-inline:0;scale:0}.label{white-space:nowrap;color:currentColor;align-items:center;gap:.375rem;display:inline-flex}@supports (color:color-mix(in lab,red,red)){.label{color:color-mix(in oklab,currentcolor 60%,transparent)}}.label:has(input){cursor:pointer}.label:is(.input>*,.select>*){white-space:nowrap;height:calc(100% - .5rem);font-size:inherit;align-items:center;padding-inline:.75rem;display:flex}.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid currentColor;margin-inline:-.75rem .75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid currentColor;margin-inline:.75rem -.75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.status{aspect-ratio:1;border-radius:var(--radius-selector);background-color:var(--color-base-content);width:.5rem;height:.5rem;display:inline-block}@supports (color:color-mix(in lab,red,red)){.status{background-color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.status{vertical-align:middle;color:#0000004d;background-position:50%;background-repeat:no-repeat}@supports (color:color-mix(in lab,red,red)){.status{color:color-mix(in oklab,var(--color-black)30%,transparent)}}.status{background-image:radial-gradient(circle at 35% 30%,oklch(1 0 0/calc(var(--depth)*.5)),#0000);box-shadow:0 2px 3px -1px}@supports (color:color-mix(in lab,red,red)){.status{box-shadow:0 2px 3px -1px color-mix(in oklab,currentColor calc(var(--depth)*100%),#0000)}}.tabs{--tabs-height:auto;--tabs-direction:row;--tab-height:calc(var(--size-field,.25rem)*10);height:var(--tabs-height);flex-wrap:wrap;flex-direction:var(--tabs-direction);display:flex}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}}@layer daisyui.l1.l2{.modal.modal-open,.modal[open],.modal:target,.modal-toggle:checked+.modal{pointer-events:auto;visibility:visible;opacity:1;transition:visibility 0s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;background-color:#0006}:is(.modal.modal-open,.modal[open],.modal:target,.modal-toggle:checked+.modal) .modal-box{opacity:1;translate:0;scale:1}:root:has(:is(.modal.modal-open,.modal[open],.modal:target,.modal-toggle:checked+.modal)){--page-has-backdrop:1;--page-overflow:hidden;--page-scroll-bg:var(--page-scroll-bg-on);--page-scroll-gutter:stable;--page-scroll-transition:var(--page-scroll-transition-on);animation:forwards set-page-has-scroll;animation-timeline:scroll()}@starting-style{.modal.modal-open,.modal[open],.modal:target,.modal-toggle:checked+.modal{opacity:0}}.tooltip>.tooltip-content,.tooltip[data-tip]:before{transform:translate(-50%)translateY(var(--tt-pos,.25rem));inset:auto auto var(--tt-off)50%}.tooltip:after{transform:translate(-50%)translateY(var(--tt-pos,.25rem));inset:auto auto var(--tt-tail)50%}.btn:disabled:not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:disabled:not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:disabled:not(.btn-link,.btn-ghost){box-shadow:none}.btn:disabled{pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:disabled{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}.btn[disabled]:not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn[disabled]:not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn[disabled]:not(.btn-link,.btn-ghost){box-shadow:none}.btn[disabled]{pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn[disabled]{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media(prefers-reduced-motion:no-preference){.collapse[open].collapse-arrow>.collapse-title:after,.collapse.collapse-open.collapse-arrow>.collapse-title:after{transform:translateY(-50%)rotate(225deg)}}.collapse.collapse-open.collapse-plus>.collapse-title:after{--tw-content:"−";content:var(--tw-content)}:is(.collapse[tabindex].collapse-arrow:focus:not(.collapse-close),.collapse.collapse-arrow[tabindex]:focus-within:not(.collapse-close))>.collapse-title:after,.collapse.collapse-arrow:not(.collapse-close)>input:is([type=checkbox],[type=radio]):checked~.collapse-title:after{transform:translateY(-50%)rotate(225deg)}.collapse[open].collapse-plus>.collapse-title:after,.collapse[tabindex].collapse-plus:focus:not(.collapse-close)>.collapse-title:after,.collapse.collapse-plus:not(.collapse-close)>input:is([type=checkbox],[type=radio]):checked~.collapse-title:after{--tw-content:"−";content:var(--tw-content)}.checkbox:disabled,.radio:disabled{cursor:not-allowed;opacity:.2}.rating.rating-xs :where(:not(.rating-hidden)){width:1rem;height:1rem}.rating.rating-sm :where(:not(.rating-hidden)){width:1.25rem;height:1.25rem}.rating.rating-md :where(:not(.rating-hidden)){width:1.5rem;height:1.5rem}.rating.rating-lg :where(:not(.rating-hidden)){width:1.75rem;height:1.75rem}.rating.rating-xl :where(:not(.rating-hidden)){width:2rem;height:2rem}.dropdown-center{--anchor-h:center}.dropdown-center :where(.dropdown-content){inset-inline-end:50%;translate:50%}[dir=rtl] :is(.dropdown-center :where(.dropdown-content)){translate:-50%}.dropdown-center.dropdown-left{--anchor-h:left;--anchor-v:center}.dropdown-center.dropdown-left .dropdown-content{top:auto;bottom:50%;translate:0 50%}.dropdown-center.dropdown-right{--anchor-h:right;--anchor-v:center}.dropdown-center.dropdown-right .dropdown-content{top:auto;bottom:50%;translate:0 50%}.dropdown-end{--anchor-h:span-left}.dropdown-end :where(.dropdown-content){inset-inline-end:0;translate:0}[dir=rtl] :is(.dropdown-end :where(.dropdown-content)){translate:0}.dropdown-end.dropdown-left{--anchor-h:left;--anchor-v:span-top}.dropdown-end.dropdown-left .dropdown-content{top:auto;bottom:0}.dropdown-end.dropdown-right{--anchor-h:right;--anchor-v:span-top}.dropdown-end.dropdown-right .dropdown-content{top:auto;bottom:0}.dropdown-bottom{--anchor-v:bottom}.dropdown-bottom .dropdown-content{transform-origin:top;top:100%;bottom:auto}.dropdown-top{--anchor-v:top}.dropdown-top .dropdown-content{transform-origin:bottom;top:auto;bottom:100%}:is(.stack,.stack.stack-bottom)>*{grid-area:3/3/6/4}:is(.stack,.stack.stack-bottom)>:nth-child(2){grid-area:2/2/5/5}:is(.stack,.stack.stack-bottom)>:first-child{grid-area:1/1/4/6}.stack.stack-top>*{grid-area:1/3/4/4}.stack.stack-top>:nth-child(2){grid-area:2/2/5/5}.stack.stack-top>:first-child{grid-area:3/1/6/6}.stack.stack-start>*{grid-area:3/1/4/4}.stack.stack-start>:nth-child(2){grid-area:2/2/5/5}.stack.stack-start>:first-child{grid-area:1/3/6/6}.stack.stack-end>*{grid-area:3/3/4/6}.stack.stack-end>:nth-child(2){grid-area:2/2/5/5}.stack.stack-end>:first-child{grid-area:1/1/6/4}.loading-xs{width:calc(var(--size-selector,.25rem)*4)}.loading-spinner{-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")}.range-xs{--range-thumb-size:calc(var(--size-selector,.25rem)*4)}.toggle-sm[type=checkbox],.toggle-sm:has([type=checkbox]){--size:calc(var(--size-selector,.25rem)*5)}}.prose :where(a.btn:not(.btn-link)):not(:where([class~=not-prose],[class~=not-prose] *)){text-decoration-line:none}.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse:not(td,tr,colgroup){visibility:revert-layer}.collapse{visibility:collapse}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.inset-x-0{inset-inline:calc(var(--spacing)*0)}.inset-x-2{inset-inline:calc(var(--spacing)*2)}.inset-x-3{inset-inline:calc(var(--spacing)*3)}.inset-x-4{inset-inline:calc(var(--spacing)*4)}.-inset-y-1{inset-block:calc(var(--spacing)*-1)}.inset-y-0{inset-block:calc(var(--spacing)*0)}.-top-1\\.5{top:calc(var(--spacing)*-1.5)}.-top-1\\.75{top:calc(var(--spacing)*-1.75)}.-top-2{top:calc(var(--spacing)*-2)}.-top-3\\.5{top:calc(var(--spacing)*-3.5)}.-top-4{top:calc(var(--spacing)*-4)}.-top-100\\!{top:calc(var(--spacing)*-100)!important}.top-0{top:calc(var(--spacing)*0)}.top-0\\!{top:calc(var(--spacing)*0)!important}.top-0\\.5{top:calc(var(--spacing)*.5)}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2{top:50%}.top-4{top:calc(var(--spacing)*4)}.top-14{top:calc(var(--spacing)*14)}.top-auto{top:auto}.top-auto\\!{top:auto!important}.-right-1{right:calc(var(--spacing)*-1)}.-right-3{right:calc(var(--spacing)*-3)}.-right-6{right:calc(var(--spacing)*-6)}.-right-200{right:calc(var(--spacing)*-200)}.right-0\\!{right:calc(var(--spacing)*0)!important}.right-0\\.5{right:calc(var(--spacing)*.5)}.right-1{right:calc(var(--spacing)*1)}.right-2{right:calc(var(--spacing)*2)}.right-5{right:calc(var(--spacing)*5)}.right-auto{right:auto}.right-auto\\!{right:auto!important}.-bottom-1{bottom:calc(var(--spacing)*-1)}.-bottom-1\\.5{bottom:calc(var(--spacing)*-1.5)}.-bottom-2{bottom:calc(var(--spacing)*-2)}.-bottom-3\\.5{bottom:calc(var(--spacing)*-3.5)}.-bottom-4{bottom:calc(var(--spacing)*-4)}.-bottom-20\\!{bottom:calc(var(--spacing)*-20)!important}.-bottom-100\\!{bottom:calc(var(--spacing)*-100)!important}.bottom-0{bottom:calc(var(--spacing)*0)}.bottom-0\\!{bottom:calc(var(--spacing)*0)!important}.bottom-0\\.5{bottom:calc(var(--spacing)*.5)}.bottom-4{bottom:calc(var(--spacing)*4)}.bottom-6\\.5\\!{bottom:calc(var(--spacing)*6.5)!important}.bottom-8{bottom:calc(var(--spacing)*8)}.bottom-15{bottom:calc(var(--spacing)*15)}.bottom-16{bottom:calc(var(--spacing)*16)}.bottom-auto{bottom:auto}.bottom-auto\\!{bottom:auto!important}.-left-1{left:calc(var(--spacing)*-1)}.-left-3{left:calc(var(--spacing)*-3)}.-left-4{left:calc(var(--spacing)*-4)}.-left-200{left:calc(var(--spacing)*-200)}.left-0{left:calc(var(--spacing)*0)}.left-0\\!{left:calc(var(--spacing)*0)!important}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing)*2)}.left-5{left:calc(var(--spacing)*5)}.left-auto{left:auto}.left-auto\\!{left:auto!important}.-z-1{z-index:-1}.-z-2{z-index:-2}.-z-10{z-index:-10}.-z-50{z-index:-50}.z-0{z-index:0}.z-1{z-index:1}.z-40{z-index:40}.z-50{z-index:50}.z-999{z-index:999}.z-99999{z-index:99999}.z-999999{z-index:999999}.z-9999999{z-index:9999999}.z-99999999{z-index:99999999}.z-2147483647{z-index:2147483647}.order-first{order:-9999}.col-span-1\\!{grid-column:span 1/span 1!important}.container{width:100%}@media(min-width:20rem){.container{max-width:20rem}}@media(min-width:30rem){.container{max-width:30rem}}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.mx-4{margin-inline:calc(var(--spacing)*4)}.mx-auto{margin-inline:auto}.my-4{margin-block:calc(var(--spacing)*4)}.-mt-0\\.5{margin-top:calc(var(--spacing)*-.5)}.-mt-4{margin-top:calc(var(--spacing)*-4)}.-mt-13{margin-top:calc(var(--spacing)*-13)}.mt-0\\.75{margin-top:calc(var(--spacing)*.75)}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-3\\.5{margin-top:calc(var(--spacing)*3.5)}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-auto{margin-top:auto}.mt-auto\\!{margin-top:auto!important}.-mr-1{margin-right:calc(var(--spacing)*-1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-12\\!{margin-right:calc(var(--spacing)*12)!important}.mr-auto{margin-right:auto}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\.5{margin-bottom:calc(var(--spacing)*3.5)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.-ml-2{margin-left:calc(var(--spacing)*-2)}.ml-1{margin-left:calc(var(--spacing)*1)}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-auto{margin-left:auto}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.aspect-square{aspect-ratio:1}.size-2{width:calc(var(--spacing)*2);height:calc(var(--spacing)*2)}.size-3{width:calc(var(--spacing)*3);height:calc(var(--spacing)*3)}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-4\\.5{width:calc(var(--spacing)*4.5);height:calc(var(--spacing)*4.5)}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.size-5\\.5{width:calc(var(--spacing)*5.5);height:calc(var(--spacing)*5.5)}.size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.size-7{width:calc(var(--spacing)*7);height:calc(var(--spacing)*7)}.size-14{width:calc(var(--spacing)*14);height:calc(var(--spacing)*14)}.size-20{width:calc(var(--spacing)*20);height:calc(var(--spacing)*20)}.size-32{width:calc(var(--spacing)*32);height:calc(var(--spacing)*32)}.h-\\(--player-height\\){height:var(--player-height)}.h-1\\.5{height:calc(var(--spacing)*1.5)}.h-2{height:calc(var(--spacing)*2)}.h-4{height:calc(var(--spacing)*4)}.h-6{height:calc(var(--spacing)*6)}.h-7{height:calc(var(--spacing)*7)}.h-8{height:calc(var(--spacing)*8)}.h-9{height:calc(var(--spacing)*9)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.h-32{height:calc(var(--spacing)*32)}.h-40{height:calc(var(--spacing)*40)}.h-auto{height:auto}.h-fit{height:fit-content}.h-full{height:100%}.h-min{height:min-content}.h-screen{height:100vh}.max-h-2{max-height:calc(var(--spacing)*2)}.max-h-30{max-height:calc(var(--spacing)*30)}.max-h-\\[70\\%\\]{max-height:70%}.max-h-\\[calc\\(100dvh-52px\\)\\]{max-height:calc(100dvh - 52px)}.max-h-full{max-height:100%}.min-h-32{min-height:calc(var(--spacing)*32)}.min-h-px{min-height:1px}.w-\\(--widget-width\\){width:var(--widget-width)}.w-4{width:calc(var(--spacing)*4)}.w-7{width:calc(var(--spacing)*7)}.w-8{width:calc(var(--spacing)*8)}.w-9{width:calc(var(--spacing)*9)}.w-10{width:calc(var(--spacing)*10)}.w-12{width:calc(var(--spacing)*12)}.w-16{width:calc(var(--spacing)*16)}.w-20{width:calc(var(--spacing)*20)}.w-30{width:calc(var(--spacing)*30)}.w-40{width:calc(var(--spacing)*40)}.w-44{width:calc(var(--spacing)*44)}.w-\\[calc\\(var\\(--widget-width\\)-1rem\\)\\]{width:calc(var(--widget-width) - 1rem)}.w-auto{width:auto}.w-auto\\!{width:auto!important}.w-dvw{width:100dvw}.w-full{width:100%}.w-px{width:1px}.w-screen{width:100vw}.max-w-15{max-width:calc(var(--spacing)*15)}.max-w-40{max-width:calc(var(--spacing)*40)}.max-w-45{max-width:calc(var(--spacing)*45)}.max-w-50{max-width:calc(var(--spacing)*50)}.max-w-dvw{max-width:100dvw}.max-w-xs{max-width:320px}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-7{min-width:calc(var(--spacing)*7)}.min-w-8{min-width:calc(var(--spacing)*8)}.min-w-9{min-width:calc(var(--spacing)*9)}.min-w-10{min-width:calc(var(--spacing)*10)}.min-w-12{min-width:calc(var(--spacing)*12)}.min-w-px{min-width:1px}.min-w-xs{min-width:320px}.flex-1{flex:1}.shrink-0{flex-shrink:0}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-6{--tw-translate-x:calc(var(--spacing)*-6);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-full{--tw-translate-x:-100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-1\\/2{--tw-translate-x: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-full{--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-full{--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-none\\!{translate:none!important}.-rotate-90{rotate:-90deg}.rotate-45{rotate:45deg}.rotate-90{rotate:90deg}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-move-down{animation:.2s ease-in-out move-down}.animate-move-left{animation:.2s ease-in-out move-left}.animate-move-right{animation:.2s ease-in-out move-right}.animate-move-up{animation:.2s ease-in-out move-up}.animate-pulse{animation:var(--animate-pulse)}.animate-scale{animation:.2s ease-in-out scale}.animate-spin{animation:var(--animate-spin)}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize{resize:both}.resize-none{resize:none}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-wrap-reverse{flex-wrap:wrap-reverse}.place-content-center{place-content:center}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\\.5{gap:calc(var(--spacing)*1.5)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-5{gap:calc(var(--spacing)*5)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.gap-x-2{column-gap:calc(var(--spacing)*2)}.gap-y-1{row-gap:calc(var(--spacing)*1)}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-none\\!{border-radius:0!important}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xs{border-radius:var(--radius-xs)}.widget-radius{border-radius:calc(var(--radius) + 4px)}.rounded-r-full{border-top-right-radius:3.40282e38px;border-bottom-right-radius:3.40282e38px}.border{border-style:var(--tw-border-style);border-width:1px}.border-6{border-style:var(--tw-border-style);border-width:6px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-none{--tw-border-style:none;border-style:none}.border-blue-500{border-color:var(--color-blue-500)}.border-border,.border-border\\/30{border-color:var(--border)}@supports (color:color-mix(in lab,red,red)){.border-border\\/30{border-color:color-mix(in oklab,var(--border)30%,transparent)}}.border-border\\/40{border-color:var(--border)}@supports (color:color-mix(in lab,red,red)){.border-border\\/40{border-color:color-mix(in oklab,var(--border)40%,transparent)}}.border-destructive{border-color:var(--destructive)}.border-foreground\\/10{border-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.border-foreground\\/10{border-color:color-mix(in oklab,var(--foreground)10%,transparent)}}.border-foreground\\/20{border-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.border-foreground\\/20{border-color:color-mix(in oklab,var(--foreground)20%,transparent)}}.border-green-700{border-color:var(--color-green-700)}.border-orange-500{border-color:var(--color-orange-500)}.border-primary,.border-primary\\/20{border-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.border-primary\\/20{border-color:color-mix(in oklab,var(--primary)20%,transparent)}}.border-primary\\/30{border-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.border-primary\\/30{border-color:color-mix(in oklab,var(--primary)30%,transparent)}}.bg-\\[\\#f8f8f8\\]{background-color:#f8f8f8}.bg-accent{background-color:var(--accent)}.bg-background{background-color:var(--background)}.bg-background\\!{background-color:var(--background)!important}.bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab,red,red)){.bg-black\\/20{background-color:color-mix(in oklab,var(--color-black)20%,transparent)}}.bg-blue-500{background-color:var(--color-blue-500)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-border{background-color:var(--border)}.bg-current{background-color:currentColor}.bg-destructive{background-color:var(--destructive)}.bg-foreground,.bg-foreground\\/10{background-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.bg-foreground\\/10{background-color:color-mix(in oklab,var(--foreground)10%,transparent)}}.bg-green-600{background-color:var(--color-green-600)}.bg-green-700{background-color:var(--color-green-700)}.bg-muted{background-color:var(--muted)}.bg-muted-foreground{background-color:var(--muted-foreground)}.bg-orange-500{background-color:var(--color-orange-500)}.bg-orange-600{background-color:var(--color-orange-600)}.bg-popover{background-color:var(--popover)}.bg-primary{background-color:var(--primary)}.bg-primary\\!{background-color:var(--primary)!important}.bg-primary-foreground,.bg-primary-foreground\\/30{background-color:var(--primary-foreground)}@supports (color:color-mix(in lab,red,red)){.bg-primary-foreground\\/30{background-color:color-mix(in oklab,var(--primary-foreground)30%,transparent)}}.bg-primary\\/10{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/10{background-color:color-mix(in oklab,var(--primary)10%,transparent)}}.bg-primary\\/15{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/15{background-color:color-mix(in oklab,var(--primary)15%,transparent)}}.bg-primary\\/20{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/20{background-color:color-mix(in oklab,var(--primary)20%,transparent)}}.bg-secondary{background-color:var(--secondary)}.bg-success{background-color:var(--success)}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.mask-\\(--icon\\){-webkit-mask-image:var(--icon);mask-image:var(--icon)}.bg-contain{background-size:contain}.bg-center{background-position:50%}.bg-no-repeat{background-repeat:no-repeat}.mask-contain{-webkit-mask-size:contain;mask-size:contain}.mask-center{-webkit-mask-position:50%;mask-position:50%}.mask-no-repeat{-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.p-0{padding:calc(var(--spacing)*0)}.p-0\\.5{padding:calc(var(--spacing)*.5)}.p-0\\.75\\!{padding:calc(var(--spacing)*.75)!important}.p-1{padding:calc(var(--spacing)*1)}.p-1\\.5{padding:calc(var(--spacing)*1.5)}.p-2{padding:calc(var(--spacing)*2)}.p-2\\.5{padding:calc(var(--spacing)*2.5)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-1\\.5{padding-inline:calc(var(--spacing)*1.5)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\.5{padding-inline:calc(var(--spacing)*2.5)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-3\\.5{padding-inline:calc(var(--spacing)*3.5)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.px-7{padding-inline:calc(var(--spacing)*7)}.py-0{padding-block:calc(var(--spacing)*0)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-1\\.25{padding-block:calc(var(--spacing)*1.25)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-10{padding-block:calc(var(--spacing)*10)}.pt-2{padding-top:calc(var(--spacing)*2)}.pr-2{padding-right:calc(var(--spacing)*2)}.pr-3{padding-right:calc(var(--spacing)*3)}.pr-4{padding-right:calc(var(--spacing)*4)}.pr-8{padding-right:calc(var(--spacing)*8)}.pb-0{padding-bottom:calc(var(--spacing)*0)}.pb-1{padding-bottom:calc(var(--spacing)*1)}.pb-5{padding-bottom:calc(var(--spacing)*5)}.pl-4{padding-left:calc(var(--spacing)*4)}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.text-base{font-size:calc(var(--font-size)*1);line-height:var(--tw-leading,var(--text-base--line-height))}.text-sm{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:calc(var(--font-size)*.75);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-none{--tw-leading:1;line-height:1}.leading-normal{--tw-leading:var(--leading-normal);line-height:var(--leading-normal)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-light{--tw-font-weight:var(--font-weight-light);font-weight:var(--font-weight-light)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.break-anywhere{overflow-wrap:anywhere}.break-all{word-break:break-all}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.text-background{color:var(--background)}.text-black{color:var(--color-black)}.text-blue-50{color:var(--color-blue-50)}.text-destructive{color:var(--destructive)}.text-destructive-foreground{color:var(--destructive-foreground)}.text-foreground{color:var(--foreground)}.text-green-50{color:var(--color-green-50)}.text-muted-foreground{color:var(--muted-foreground)}.text-orange-50{color:var(--color-orange-50)}.text-popover-foreground{color:var(--popover-foreground)}.text-primary{color:var(--primary)}.text-primary-foreground{color:var(--primary-foreground)}.text-primary-foreground\\!{color:var(--primary-foreground)!important}.text-secondary{color:var(--secondary)}.text-secondary-foreground{color:var(--secondary-foreground)}.text-success-foreground{color:var(--success-foreground)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.italic{font-style:italic}.underline{text-decoration-line:underline}.opacity-0{opacity:0}.opacity-15{opacity:.15}.opacity-50{opacity:.5}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline,.outline-1{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-border{outline-color:var(--border)}.outline-destructive{outline-color:var(--destructive)}.outline-destructive-foreground{outline-color:var(--destructive-foreground)}.outline-primary{outline-color:var(--primary)}.outline-primary-foreground{outline-color:var(--primary-foreground)}.brightness-85{--tw-brightness:brightness(85%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow-lg{--tw-drop-shadow-size:drop-shadow(0 4px 4px var(--tw-drop-shadow-color,#00000026));--tw-drop-shadow:drop-shadow(var(--drop-shadow-lg));filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[bottom\\]{transition-property:bottom;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[colors\\]{transition-property:colors;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[margin\\]{transition-property:margin;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[width\\]{transition-property:width;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-none\\!{transition-property:none!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-solid{--tw-outline-style:solid;outline-style:solid}.\\[--player-height\\:calc\\(100dvh-52px\\)\\]{--player-height: calc(100dvh - 52px) }.\\[--range-bg\\:var\\(--muted\\)\\]{--range-bg:var(--muted)}.\\[--range-thumb\\:var\\(--primary-foreground\\)\\]{--range-thumb:var(--primary-foreground)}.\\[wasm\\:\\"\\+r\\[3\\]\\+\\"\\]{wasm:"+r[3]+"}:is(.\\*\\:z-10>*){z-index:10}:is(.\\*\\:text-background>*){color:var(--background)}:is(.\\*\\:text-blue-50>*){color:var(--color-blue-50)}:is(.\\*\\:text-destructive-foreground>*){color:var(--destructive-foreground)}:is(.\\*\\:text-green-50>*){color:var(--color-green-50)}:is(.\\*\\:text-orange-50>*){color:var(--color-orange-50)}:is(.\\*\\:text-primary-foreground>*){color:var(--primary-foreground)}:is(.\\*\\*\\:text-foreground *){color:var(--foreground)}.not-focus\\:outline-0:not(:focus){outline-style:var(--tw-outline-style);outline-width:0}@media(hover:hover){.group-hover\\:bg-foreground:is(:where(.group):hover *){background-color:var(--foreground)}.group-hover\\:brightness-85:is(:where(.group):hover *){--tw-brightness:brightness(85%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}}.group-data-\\[state\\=close\\]\\:-mb-100:is(:where(.group)[data-state=close] *){margin-bottom:calc(var(--spacing)*-100)}.placeholder\\:text-sm::placeholder{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}.placeholder\\:text-muted-foreground::placeholder{color:var(--muted-foreground)}.placeholder\\:normal-case::placeholder{text-transform:none}.before\\:size-4:before{content:var(--tw-content);width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.before\\:rounded-full:before{content:var(--tw-content);border-radius:3.40282e38px}.not-checked\\:before\\:bg-background:not(:checked):before{content:var(--tw-content);background-color:var(--background)}.checked\\:bg-primary:checked{background-color:var(--primary)}.checked\\:text-primary-foreground:checked{color:var(--primary-foreground)}.focus-within\\:pointer-events-auto:focus-within{pointer-events:auto}.focus-within\\:visible:focus-within{visibility:visible}@media(hover:hover){.hover\\:cursor-pointer:hover{cursor:pointer}.hover\\:bg-accent:hover{background-color:var(--accent)}.hover\\:bg-destructive\\/5:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-destructive\\/5:hover{background-color:color-mix(in oklab,var(--destructive)5%,transparent)}}.hover\\:bg-foreground\\/5:hover{background-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-foreground\\/5:hover{background-color:color-mix(in oklab,var(--foreground)5%,transparent)}}.hover\\:bg-muted:hover{background-color:var(--muted)}.hover\\:bg-muted\\!:hover{background-color:var(--muted)!important}.hover\\:bg-primary-foreground\\/5:hover{background-color:var(--primary-foreground)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-primary-foreground\\/5:hover{background-color:color-mix(in oklab,var(--primary-foreground)5%,transparent)}}.hover\\:bg-primary\\/5:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-primary\\/5:hover{background-color:color-mix(in oklab,var(--primary)5%,transparent)}}.hover\\:bg-primary\\/10:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-primary\\/10:hover{background-color:color-mix(in oklab,var(--primary)10%,transparent)}}.hover\\:bg-primary\\/15:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-primary\\/15:hover{background-color:color-mix(in oklab,var(--primary)15%,transparent)}}.hover\\:bg-primary\\/20:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-primary\\/20:hover{background-color:color-mix(in oklab,var(--primary)20%,transparent)}}.hover\\:text-destructive:hover{color:var(--destructive)}.hover\\:text-foreground:hover{color:var(--foreground)}.hover\\:text-primary:hover{color:var(--primary)}.hover\\:opacity-70:hover{opacity:.7}.hover\\:opacity-80:hover{opacity:.8}.hover\\:brightness-110:hover{--tw-brightness:brightness(110%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.hover\\:brightness-115:hover{--tw-brightness:brightness(115%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.hover\\:brightness-125:hover{--tw-brightness:brightness(125%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.not-expanded\\:hover\\:cursor-move:not(:is(:host([data-expanded=true]) *)):hover{cursor:move}}.focus\\:bg-primary:focus{background-color:var(--primary)}.focus\\:text-destructive:focus{color:var(--destructive)}.focus\\:text-primary-foreground:focus{color:var(--primary-foreground)}.focus\\:outline-2:focus{outline-style:var(--tw-outline-style);outline-width:2px}.focus\\:outline-solid:focus{--tw-outline-style:solid;outline-style:solid}.active\\:bg-primary\\/20:active{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.active\\:bg-primary\\/20:active{background-color:color-mix(in oklab,var(--primary)20%,transparent)}}.has-\\[\\>\\[role\\=button\\]\\[aria-disabled\\=true\\]\\]\\:pointer-events-none:has(>[role=button][aria-disabled=true]),.has-\\[\\>button\\:disabled\\]\\:pointer-events-none:has(>button:disabled){pointer-events:none}.data-\\[active\\=true\\]\\:bg-primary-foreground\\![data-active=true]{background-color:var(--primary-foreground)!important}.data-\\[highlight\\=true\\]\\:animate-highlight-primary[data-highlight=true]{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y);outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.data-\\[highlight\\=true\\]\\:animate-highlight-primary[data-highlight=true]{outline-color:color-mix(in oklab,var(--primary)50%,transparent)}}.data-\\[highlight\\=true\\]\\:animate-highlight-primary[data-highlight=true]{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));--tw-outline-style:solid;outline-style:solid;animation:.5s ease-out infinite alternate-reverse highlight-shadow-primary}:is(.\\*\\*\\:data-\\[highlight\\=true\\]\\:animate-highlight-primary *)[data-highlight=true]{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y);outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){:is(.\\*\\*\\:data-\\[highlight\\=true\\]\\:animate-highlight-primary *)[data-highlight=true]{outline-color:color-mix(in oklab,var(--primary)50%,transparent)}}:is(.\\*\\*\\:data-\\[highlight\\=true\\]\\:animate-highlight-primary *)[data-highlight=true]{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));--tw-outline-style:solid;outline-style:solid;animation:.5s ease-out infinite alternate-reverse highlight-shadow-primary}:is(.\\*\\*\\:data-\\[highlight\\=true\\]\\:animate-highlight-primary-foreground *)[data-highlight=true]{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y);outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--primary-foreground);transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));--tw-outline-style:solid;outline-style:solid;animation:.5s ease-out infinite alternate-reverse highlight-shadow-primary-foreground}:is(.\\*\\*\\:data-\\[slot\\=dialog-close\\]\\:hidden *)[data-slot=dialog-close],:is(.focus-within\\:\\*\\*\\:data-\\[slot\\=tooltip-content\\]\\:hidden:focus-within *)[data-slot=tooltip-content]{display:none}@media not all and (min-width:64rem){.max-lg\\:hidden{display:none}}@media not all and (min-width:40rem){.max-sm\\:inset-x-0\\!{inset-inline:calc(var(--spacing)*0)!important}}@media(min-width:40rem){.sm\\:size-8{width:calc(var(--spacing)*8);height:calc(var(--spacing)*8)}.sm\\:h-auto{height:auto}.sm\\:w-xl{width:576px}.sm\\:widget-radius{border-radius:calc(var(--radius) + 4px)}.sm\\:rounded-t-xl{border-top-left-radius:calc(var(--radius) + 4px);border-top-right-radius:calc(var(--radius) + 4px)}.sm\\:\\[--player-height\\:800px\\]{--player-height:800px}@media(hover:hover){.sm\\:hover\\:cursor-move:hover{cursor:move}}}.dark\\:bg-\\[\\#111111\\]:is(:host(.dark) *){background-color:#111}.dark\\:bg-foreground:is(:host(.dark) *){background-color:var(--foreground)}.dark\\:bg-muted:is(:host(.dark) *){background-color:var(--muted)}.dark\\:text-white:is(:host(.dark) *){color:var(--color-white)}.dark\\:opacity-10:is(:host(.dark) *){opacity:.1}.expanded\\:inset-x-4\\!:is(:host([data-expanded=true]) *){inset-inline:calc(var(--spacing)*4)!important}.expanded\\:bottom-16\\!:is(:host([data-expanded=true]) *){bottom:calc(var(--spacing)*16)!important}.expanded\\:w-full:is(:host([data-expanded=true]) *){width:100%}.expanded\\:text-base\\!:is(:host([data-expanded=true]) *){font-size:calc(var(--font-size)*1)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.expanded\\:text-sm:is(:host([data-expanded=true]) *){font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}@media not all and (min-width:40rem){.expanded\\:max-sm\\:rounded-none\\!:is(:host([data-expanded=true]) *){border-radius:0!important}}@media(max-width:640px){.mobile\\:inset-0:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){inset:calc(var(--spacing)*0)}.mobile\\:inset-x-2:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){inset-inline:calc(var(--spacing)*2)}.mobile\\:top-13:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){top:calc(var(--spacing)*13)}.mobile\\:-bottom-px:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){bottom:-1px}.mobile\\:bottom-13:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){bottom:calc(var(--spacing)*13)}.mobile\\:-m-2:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){margin:calc(var(--spacing)*-2)}.mobile\\:mb-1:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){margin-bottom:calc(var(--spacing)*1)}.mobile\\:size-4:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.mobile\\:size-4\\.5:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){width:calc(var(--spacing)*4.5);height:calc(var(--spacing)*4.5)}.mobile\\:size-5:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.mobile\\:size-18:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){width:calc(var(--spacing)*18);height:calc(var(--spacing)*18)}.mobile\\:h-6:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){height:calc(var(--spacing)*6)}.mobile\\:h-32:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){height:calc(var(--spacing)*32)}.mobile\\:translate-none\\!:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){translate:none!important}.mobile\\:transform-none\\!:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){transform:none!important}.mobile\\:rounded-none\\!:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){border-radius:0!important}.mobile\\:border-none\\!:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){--tw-border-style:none!important;border-style:none!important}.mobile\\:px-3:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){padding-inline:calc(var(--spacing)*3)}.mobile\\:py-2:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){padding-block:calc(var(--spacing)*2)}.mobile\\:text-center:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){text-align:center}.mobile\\:text-sm:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}.mobile\\:text-xs:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){font-size:calc(var(--font-size)*.75);line-height:var(--tw-leading,var(--text-xs--line-height))}}.\\[\\&_button\\]\\:z-1 button{z-index:1}.\\[\\&_button\\]\\:w-full button{width:100%}.\\[\\&_button\\]\\:rounded-full button{border-radius:3.40282e38px}.\\[\\&_button\\]\\:border-border button{border-color:var(--border)}.\\[\\&_button\\]\\:bg-background button{background-color:var(--background)}.\\[\\&_button\\]\\:bg-primary-foreground button{background-color:var(--primary-foreground)}.\\[\\&_button\\]\\:text-primary button{color:var(--primary)}.\\[\\&_button\\]\\:shadow-md button{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.\\[\\&_button\\]\\:not-hover\\:bg-transparent button:not(:hover){background-color:#0000}@media not all and (hover:hover){.\\[\\&_button\\]\\:not-hover\\:bg-transparent button{background-color:#0000}}@media(hover:hover){.\\[\\&_button\\]\\:hover\\:bg-muted button:hover{background-color:var(--muted)}}.\\[\\&_span\\]\\:rounded-full span{border-radius:3.40282e38px}.\\[\\&_span\\]\\:bg-primary-foreground\\/30 span{background-color:var(--primary-foreground)}@supports (color:color-mix(in lab,red,red)){.\\[\\&_span\\]\\:bg-primary-foreground\\/30 span{background-color:color-mix(in oklab,var(--primary-foreground)30%,transparent)}}.focus\\:\\[\\&_svg\\]\\:text-destructive:focus svg{color:var(--destructive)}:is(.\\*\\*\\:\\[\\[role\\=button\\]\\]\\:not-hover\\:bg-transparent *)[role=button]:not(:hover){background-color:#0000}@media not all and (hover:hover){:is(.\\*\\*\\:\\[\\[role\\=button\\]\\]\\:not-hover\\:bg-transparent *)[role=button]{background-color:#0000}}.\\[\\&\\>button\\]\\:h-10>button{height:calc(var(--spacing)*10)}.\\[\\&\\>button\\]\\:w-full>button{width:100%}.\\[\\&\\>button\\]\\:flex-col>button{flex-direction:column}.\\[\\&\\>button\\]\\:rounded-full>button{border-radius:3.40282e38px}.\\[\\&\\>button\\]\\:text-muted-foreground>button{color:var(--muted-foreground)}@media(max-width:640px){.mobile\\:\\[\\&\\>button\\]\\:text-sm:is(:host(:not([data-expanded=true]):not([data-extension=true])) *)>button{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}}.\\[\\&\\>div\\]\\:col-span-2>div{grid-column:span 2/span 2}.\\[\\&\\>div\\]\\:grid>div{display:grid}.\\[\\&\\>div\\]\\:grid-cols-subgrid>div{grid-template-columns:subgrid}.\\[\\&\\>div\\]\\:justify-items-center>div{justify-items:center}.\\[\\&\\>div\\]\\:rounded>div{border-radius:.25rem}.\\[\\&\\>i\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4>i:not([class*=size-]){width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.\\[\\&\\>i\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4\\.5>i:not([class*=size-]){width:calc(var(--spacing)*4.5);height:calc(var(--spacing)*4.5)}.\\[\\&\\>i\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-5>i:not([class*=size-]){width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.\\[\\&\\>i\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-5\\.25>i:not([class*=size-]){width:calc(var(--spacing)*5.25);height:calc(var(--spacing)*5.25)}.\\[\\&\\>i\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-6>i:not([class*=size-]){width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.\\[\\&\\>i\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-6\\.5>i:not([class*=size-]){width:calc(var(--spacing)*6.5);height:calc(var(--spacing)*6.5)}.\\[\\&\\>svg\\]\\:shrink-0>svg{flex-shrink:0}}:host,[data-theme=light]{--background:oklch(100% 0 0);--foreground:oklch(25% 0 0);--primary:oklch(46.02% .169 260.07);--primary-foreground:oklch(100% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--secondary:oklch(33.15% .1141 259.88);--secondary-foreground:oklch(84.71% .0543 259.88);--muted:oklch(95% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(90% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(63.7% .237 25.331);--destructive-foreground:oklch(98.5% 0 0);--success:oklch(54.834% .15401 147.965);--success-foreground:oklch(100% .00011 271.152);--border:oklch(91% 0 0);--input:oklch(91% 0 0);--ring:oklch(70.8% 0 0);--radius:10px;--spacing:4px;--font-sans:"VLibrasWidget_Font",sans-serif;--font-size:16px}:host(.dark),[data-theme=dark]{--background:oklch(15% 0 0);--foreground:oklch(98.5% 0 0);--primary:oklch(55.5% .169 260.07);--primary-foreground:oklch(100% 0 0);--popover:oklch(20% 0 0);--popover-foreground:oklch(98.5% 0 0);--secondary:oklch(33.15% .1141 259.88);--secondary-foreground:oklch(84.71% .0543 259.88);--muted:oklch(18% 0 0);--muted-foreground:oklch(70.8% 0 0);--accent:oklch(26.9% 0 0);--accent-foreground:oklch(98.5% 0 0);--destructive:oklch(63.7% .237 25.331);--destructive-foreground:oklch(98.5% 0 0);--border:oklch(26.9% 0 0);--input:oklch(26.9% 0 0);--ring:oklch(43.9% 0 0)}:host{--widget-width:260px;--player-height:328px}@media(min-width:640px){:host{--widget-width:300px;--player-height:380px}}@keyframes scale{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes move-left{0%{opacity:0;transform:translate(-20%)}to{opacity:1;transform:translate(0)}}@keyframes move-right{0%{opacity:0;transform:translate(20%)}to{opacity:1;transform:translate(0)}}@keyframes move-up{0%{opacity:0;transform:translateY(20%)}to{opacity:1;transform:translateY(0)}}@keyframes move-down{0%{opacity:0;transform:translateY(-20%)}to{opacity:1;transform:translateY(0)}}@keyframes highlight-shadow-primary{0%{box-shadow:0 0 #0000}to{box-shadow:0 0 10px 5px var(--primary)}}@keyframes highlight-shadow-primary-foreground{0%{box-shadow:0 0 #0000}to{box-shadow:0 0 15px var(--primary-foreground)}}:host{color:var(--foreground);font-family:var(--font-sans)!important;scrollbar-color:var(--foreground)transparent!important}@supports (color:color-mix(in lab,red,red)){:host{scrollbar-color:color-mix(in oklch,var(--foreground)50%,transparent)transparent!important}}:host [data-highlight=true]{z-index:99999!important;border-radius:3.40282e38px!important}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes dropdown{0%{opacity:0}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@keyframes rotator{89.9999%,to{--first-item-position:0 0%}90%,99.9999%{--first-item-position:0 calc(var(--items)*100%)}to{translate:0 -100%}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes menu{0%{opacity:0}}@keyframes progress{50%{background-position-x:-115%}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-content{syntax:"*";inherits:false;initial-value:""}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}`, He = (e, t) => (t || document).querySelector(e), vr = (e, t) => Array.from((t || document).querySelectorAll(e));
function xu(e, t) {
  if (e.querySelector("style[data-widget-styles]")) {
    t && requestAnimationFrame(() => t());
    return;
  }
  const r = yu.replace(/:root/g, ":host"), o = [], n = r.replace(/@property\s+[^{]+\{[^}]*\}/g, (s) => (o.push(s), ""));
  if (o.length > 0 && !document.head.querySelector("style[data-widget-properties]")) {
    const s = document.createElement("style");
    s.setAttribute("data-widget-properties", "true"), s.textContent = o.join(`
`), document.head.appendChild(s);
  }
  const i = document.createElement("style");
  i.setAttribute("data-widget-styles", "true"), i.textContent = n, t && requestAnimationFrame(() => t()), e.firstChild ? e.insertBefore(i, e.firstChild) : e.appendChild(i);
}
const ku = () => {
  const e = qa((n) => n.onClose), { status: t, gloss: r } = q(X("gloss", "status")), o = M(() => r && t === "idle", [r, t]);
  return /* @__PURE__ */ a("div", { className: "widget-radius absolute top-1 right-1 flex flex-col", children: [
    /* @__PURE__ */ a(U, { tabindex: 1, onClick: e, size: "icon-xs", "aria-label": "Fechar guia", children: /* @__PURE__ */ a(R, { name: "x", "aria-hidden": "true" }) }),
    o && /* @__PURE__ */ a(U, { tabindex: 1, "aria-label": "Repetir texto", onClick: mo, size: "icon-xs", className: "animate-move-right", children: /* @__PURE__ */ a(R, { name: "repeat", "aria-hidden": "true" }) })
  ] });
}, $r = [
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
], _u = () => {
  const e = te(null), t = te(null), { index: r, setIndex: o, onClose: n } = qa(X("index", "setIndex", "onClose")), i = M(() => r === 0, [r]), s = M(() => r === $r.length - 1, [r]);
  return S(() => e.current?.focus(), [i]), S(() => t.current?.focus(), [s]), /* @__PURE__ */ a("div", { className: "flex items-center justify-between gap-2", children: [
    /* @__PURE__ */ a(
      U,
      {
        tabindex: 2,
        ref: t,
        disabled: i,
        variant: "ghost",
        size: "sm",
        className: "text-primary-foreground outline-primary-foreground hover:bg-primary-foreground/5",
        onClick: () => o(r - 1),
        children: [
          /* @__PURE__ */ a(R, { name: "arrow-left", "aria-hidden": "true" }),
          "Voltar"
        ]
      }
    ),
    /* @__PURE__ */ a("div", { className: "flex h-4 w-40 items-center justify-center gap-1 [&_span]:rounded-full [&_span]:bg-primary-foreground/30", children: $r.map((l, c) => /* @__PURE__ */ a(
      "span",
      {
        "data-active": c === r,
        className: "size-2 rounded-full data-[active=true]:bg-primary-foreground!"
      },
      c
    )) }),
    /* @__PURE__ */ a(
      U,
      {
        tabindex: 2,
        ref: e,
        variant: "ghost",
        size: "sm",
        className: "text-primary-foreground outline-primary-foreground hover:bg-primary-foreground/5",
        onClick: s ? n : () => o((l) => l + 1),
        children: [
          s ? "Concluir" : "Avançar",
          !s && /* @__PURE__ */ a(R, { name: "arrow-right", "aria-hidden": "true" })
        ]
      }
    )
  ] });
}, Ce = fe((e) => ({
  open: !1,
  onOpenChange: (t) => e((r) => ({ open: Gr(t, r.open) })),
  reset: () => e({ open: !1, element: void 0 })
})), Pn = {
  get: Ce.getState,
  set: Ce.setState
}, Su = Rt("absolute flex flex-col gap-4 z-50 widget-radius bg-primary p-4 transition-position", {
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
}), { Provider: Cu, useCtx: qa } = Ao(), Eu = () => {
  const { pos: e } = mr(), { innerWidth: t, innerHeight: r } = window, [o, n] = O(0), i = Ce(), s = H((f) => f.isExpanded), l = H((f) => f.isTranslating), c = nt((f) => f.appRoot), u = ee(), p = M(() => e.x < (t - (c?.clientWidth || 0)) / 2, [e.x, t]), m = M(() => e.y < (r - (c?.clientHeight || 0)) / 2, [e.y, r]), d = M(() => $r[o], [o]), g = () => {
    de.set({ text: void 0 }), P.set({ gloss: void 0 }), Pn.get().reset(), h(), ur();
  };
  if (S(() => {
    l && g();
  }, [l]), S(() => {
    if (!c) return;
    h(), pe(d.gloss), d.action?.();
    const f = He(d.selector, c);
    f && (Pn.set({ element: d }), f.dataset.highlight = "true");
  }, [d]), !c) return null;
  const h = () => {
    if (!c) return;
    vr("[data-highlight=true]", c)?.forEach((b) => b.dataset.highlight = "false");
  };
  return /* @__PURE__ */ a(Cu, { data: { index: o, setIndex: n, onClose: g, ...i }, children: /* @__PURE__ */ a(
    "div",
    {
      className: C(
        Su({ isMobile: u, isLeft: p, isTop: m, isExpanded: s }),
        !s && !u && d.guideClx,
        s && d.guideClxExpanded
      ),
      children: [
        /* @__PURE__ */ a("div", { className: "pr-4", children: /* @__PURE__ */ a("span", { className: "break-anywhere expanded:text-base! mobile:text-sm text-base text-primary-foreground", children: d.text }) }),
        /* @__PURE__ */ a(ku, {}),
        /* @__PURE__ */ a(_u, {}),
        !s && /* @__PURE__ */ a(
          "span",
          {
            className: C(
              "absolute -z-10 my-4 size-4 rotate-45 rounded-xs bg-primary max-lg:hidden",
              d.guideClx,
              p ? "-left-1" : "-right-1"
            )
          }
        )
      ]
    }
  ) });
}, Ru = () => {
  const e = Ce((t) => t.open);
  return /* @__PURE__ */ a(Q, { children: e && /* @__PURE__ */ a(Eu, {}) });
}, Pu = Rt("fixed z-2147483647", {
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
}), Iu = (e) => {
  const [t, r, o, n, i] = e.map((s) => s === "True");
  return { isPlaying: t, isPaused: r, isPlayingIntervalAnimation: o, isLoading: n, isRepeatable: i };
}, Tu = ({ path: e }) => (S(() => {
  if (!e) return;
  const t = (r) => {
    if (r.data?.type === "unity_event") {
      if (r.data.event === ft.FINISH_WELCOME) {
        const o = r.data.data === "True";
        if (P.get().isWelcomeFinished) return;
        P.set({
          isPlayingWelcome: !o,
          isWelcomeFinished: o,
          ...o ? { countGloss: { count: 0, max: 0 } } : {}
        }), o && Oe.get().onWelcomeFinish?.();
      }
      if (r.data.event === ft.ON_LOAD_PLAYER && (P.set({ isLoaded: !0 }), Oe.get().onLoaded?.()), r.data.event === ft.UPDATE_PROGRESS) {
        const o = Number(r.data.data);
        Number.isNaN(o) || P.set({ progress: Number((o * 100).toFixed(0)) });
      }
      if (r.data.event === ft.ON_PLAYING_STATE_CHANGE) {
        const { isPlaying: o, isPaused: n, isLoading: i } = Iu(r.data.data);
        n ? P.set({ status: "paused" }) : o && !n ? P.set({ status: "playing" }) : !o && !i && P.set({ status: "idle" });
      }
      if (r.data.event === ft.COUNTER_GLOSS) {
        const [o, n] = r.data.data;
        P.set({ countGloss: { count: o, max: n } });
      }
    }
  };
  return window.addEventListener("message", t), () => window.removeEventListener("message", t);
}, [e]), null), Nu = (e) => {
  const { path: t } = oa(), { isLoaded: r } = q(), o = te(null), n = Ji(`${t}/unity/index.html`), i = (s, l, c) => {
    if (!o.current) return;
    const { contentWindow: u } = o.current, { instance: p } = P.get();
    u?.postMessage({ type: "unity", object: s, method: l, params: c }, "*"), p || P.set({ instance: u?.getUnityInstance?.() });
  };
  if (S(() => {
    o.current && P.set({ send: i });
  }, []), S(() => {
    !e.options || Oe.get().isInitialized || Oe.set({ ...e.options, isInitialized: !0 });
  }, [e.options]), !!t)
    return /* @__PURE__ */ a(Q, { children: [
      /* @__PURE__ */ a(
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
      /* @__PURE__ */ a(Tu, { path: t })
    ] });
}, Ya = ({ variant: e, asChild: t, size: r, className: o, disabled: n, ...i }) => t ? /* @__PURE__ */ a("div", { inert: n, role: "button", tabIndex: 0, className: o, ...i, children: i.children }) : /* @__PURE__ */ a(
  "div",
  {
    "aria-disabled": n,
    inert: n,
    role: "button",
    tabIndex: 0,
    className: C(vo({ variant: e, size: r }), o, n && "opacity-50"),
    ...i
  }
), In = Rt("border bg-popover", {
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
}), ze = ({
  children: e,
  disabled: t,
  content: r,
  arrow: o,
  offset: n = -4,
  align: i = "center",
  placement: s = "top",
  variant: l = "default",
  className: c,
  open: u,
  onOpenChange: p,
  ...m
}) => {
  const [d, g] = O(!1), h = "vlibras-tooltip", f = u ?? d;
  if (!r) return e;
  const b = () => {
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
  }, y = (A) => {
    u === void 0 && g(A), p?.(A);
  };
  return /* @__PURE__ */ a(
    "div",
    {
      role: "tooltip",
      className: "relative inline-block has-[>[role=button][aria-disabled=true]]:pointer-events-none has-[>button:disabled]:pointer-events-none",
      onMouseEnter: () => y(!0),
      onMouseLeave: () => y(!1),
      onFocus: () => y(!0),
      onBlur: () => y(!1),
      children: [
        e,
        f && !t && /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "tooltip-content",
            id: h,
            style: b(),
            className: C(
              In({ variant: l }),
              "absolute z-99999 rounded-lg px-3 py-1.5 expanded:text-sm text-popover-foreground text-xs shadow-lg transition-opacity duration-200",
              s === "bottom" && "-bottom-4 left-1/2 -translate-x-1/2 translate-y-full animate-move-down",
              s === "top" && "-top-4 left-1/2 -translate-x-1/2 -translate-y-full animate-move-up",
              s === "right" && "top-1/2 translate-x-1/2 -translate-y-1/2",
              s === "left" && "top-1/2 -translate-y-1/2",
              i === "start" && "right-auto! left-0! translate-x-0",
              i === "end" && "right-0! left-auto! translate-x-0",
              c
            ),
            ...m,
            children: /* @__PURE__ */ a("div", { className: "relative font-semibold", children: [
              r,
              o && /* @__PURE__ */ a(
                "div",
                {
                  "data-slot": "arrow-container",
                  className: C(
                    "absolute left-1/2 -ml-2 flex max-h-2 items-center justify-center overflow-hidden",
                    o.position.includes("top") && "-top-3.5",
                    o.position.includes("bottom") && "-bottom-3.5",
                    o.position.includes("left") && "left-2",
                    o.position.includes("right") && "-right-1 left-auto",
                    o.position === "right" && "top-1/2 -right-6 left-auto -translate-y-1/2 -rotate-90",
                    o.position === "left" && "top-1/2 right-auto -left-4 -translate-y-1/2 rotate-90",
                    o.containerClassName
                  ),
                  children: /* @__PURE__ */ a(
                    "span",
                    {
                      "data-slot": "arrow",
                      className: C(
                        "-z-50 h-4 w-4 rotate-45",
                        In({ variant: l }),
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
}, Ou = () => {
  const e = ee(), t = q((n) => n.emotion), r = (n) => {
    ka(n), Ee.trackEvent("change_emotion", { emotion: n.name });
  }, o = t === Wr.default;
  return /* @__PURE__ */ a("div", { className: "dropdown dropdown-center dropdown-top focus-within:**:data-[slot=tooltip-content]:hidden", children: [
    /* @__PURE__ */ a(ze, { offset: 8, content: "Emoções", placement: "top", arrow: { position: "bottom" }, children: /* @__PURE__ */ a(
      Ya,
      {
        "aria-label": "Alterar emoção",
        className: "group relative",
        variant: "ghost-gov",
        size: e ? "icon-sm" : "icon",
        children: [
          /* @__PURE__ */ a(R, { name: t.icon, "aria-hidden": "true" }),
          !o && /* @__PURE__ */ a("span", { className: "absolute top-0.5 right-0.5 size-2 rounded-full bg-destructive" })
        ]
      }
    ) }),
    /* @__PURE__ */ a(
      "div",
      {
        tabIndex: -1,
        className: "dropdown-content widget-radius mb-4 w-[calc(var(--widget-width)-1rem)] border bg-background p-1 shadow-lg",
        children: /* @__PURE__ */ a("div", { className: "relative flex items-center justify-center", children: [
          /* @__PURE__ */ a("span", { className: "absolute -inset-y-1 w-px bg-border" }),
          /* @__PURE__ */ a("ul", { className: C("relative grid w-full grid-cols-2 gap-x-2 gap-y-1 font-semibold text-primary text-sm"), children: Object.values(Wr).map((n) => {
            const i = n === t;
            return /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                inert: i,
                onClick: () => r(n),
                className: C(
                  "w-full cursor-pointer whitespace-nowrap rounded-md px-2 py-1.5 text-center text-sm hover:bg-primary/10",
                  i && "bg-primary! text-primary-foreground! outline-1 outline-primary outline-solid"
                ),
                children: /* @__PURE__ */ a("div", { className: "flex items-center justify-start gap-2", children: [
                  /* @__PURE__ */ a(R, { name: n.icon, className: "size-4.5" }),
                  /* @__PURE__ */ a("span", { className: "mobile:text-xs text-sm", children: n.name })
                ] })
              }
            ) }, n.action);
          }) })
        ] })
      }
    )
  ] });
}, Uu = {
  idle: { label: "Repetir", icon: "repeat" },
  paused: { label: "Reproduzir", icon: "play" },
  playing: { label: "Pausar", icon: "pause" },
  stopped: { label: "Em espera", icon: "waiting" }
}, Bu = () => {
  const e = ee(), { gloss: t, status: r, isPlayingWelcome: o } = q(X("gloss", "status", "isPlayingWelcome")), n = () => {
    const { status: s } = P.get();
    s === "idle" ? mo() : s === "paused" ? pe() : s === "playing" && (pr(), de.set({ isPausedByUser: !0 }));
  }, i = Uu[r];
  return /* @__PURE__ */ a(
    ze,
    {
      offset: 8,
      content: i.label,
      disabled: !t,
      placement: "top",
      align: "start",
      arrow: { position: "bottom-left" },
      children: /* @__PURE__ */ a(
        U,
        {
          "aria-label": i.label,
          "data-slot": "main-action",
          disabled: !t && !o,
          onClick: n,
          variant: "ghost-gov",
          size: e ? "icon-sm" : "icon",
          children: /* @__PURE__ */ a(R, { name: i.icon })
        }
      )
    }
  );
}, Qu = () => {
  const { max: e, count: t } = q((o) => o.countGloss), r = M(() => e === 0 ? 0 : t / Math.max(e, t) * 100, [e, t]);
  return /* @__PURE__ */ a("div", { className: "absolute -top-1.75 left-0 h-1.5 w-full", children: /* @__PURE__ */ a(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": r,
      className: C("h-full bg-primary transition-[width]", r < 100 && "rounded-r-full"),
      style: { width: `${r}%` }
    }
  ) });
}, Pt = Je(null), Lu = ({ children: e }) => {
  const t = na(), r = xe(Pt), o = q((s) => s.status === "playing"), [n, i] = O(!0);
  return S(() => {
    o && !n && r?.onOpenChange(!1);
  }, [o]), S(() => {
    const { appRoot: s, appContent: l } = De.get();
    if (!r || !l || !s) return;
    if (r.open) {
      i(!1), !r.nested && r.overlay && (l.inert = !0);
      const u = vr(`[data-slot='dialog-wrapper']:not([id='dialog-${t}'])`, s);
      return u?.forEach((p) => p.inert = !0), () => {
        !r.nested && r.overlay && (l.inert = !1), u?.forEach((p) => p.inert = !1);
      };
    }
    const c = setTimeout(() => i(!0), 150);
    return () => clearTimeout(c);
  }, [r?.open, r?.overlay, r?.nested]), !r || n ? null : r.overlay ? /* @__PURE__ */ a(
    "div",
    {
      id: `dialog-${t}`,
      "data-slot": "dialog-wrapper",
      "data-state": r.open ? "open" : "close",
      className: C("group absolute inset-0 z-99999 flex items-end bg-black/20", r.nested && "bg-transparent!"),
      onClick: () => r.onOpenChange(!1),
      children: e
    }
  ) : /* @__PURE__ */ a("div", { className: "absolute inset-0 top-auto", children: e });
}, It = ({
  nested: e = !1,
  overlay: t = !0,
  open: r,
  onOpenChange: o,
  children: n
}) => {
  const [i, s] = O(!1), l = r ?? i, c = o ?? s;
  return S(() => {
    if (e) return;
    const { isPausedByUser: u } = de.get(), { gloss: p, isWelcomeFinished: m, status: d } = P.get();
    if (l && d === "playing") return pr();
    !l && !u && (p || !m) && setTimeout(pe, 300);
  }, [l, e]), /* @__PURE__ */ a(Pt.Provider, { value: { open: l, onOpenChange: c, nested: e, overlay: t }, children: n });
}, Du = ({ children: e, ...t }) => {
  const r = xe(Pt);
  if (!r) throw new Error("DialogTrigger deve estar dentro de <Dialog />");
  return /* @__PURE__ */ a("button", { type: "button", onClick: () => r.onOpenChange(!0), ...t, children: e });
}, Tt = ({ className: e, children: t, ...r }) => {
  const o = xe(Pt), n = ee();
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-header",
      className: C("flex items-start gap-2 border-b p-2.5 mobile:py-2 pl-4", e),
      ...r,
      children: [
        t,
        /* @__PURE__ */ a(
          U,
          {
            "data-slot": "dialog-close",
            onClick: () => o?.onOpenChange(!1),
            size: n ? "icon-xs" : "icon-sm",
            variant: "ghost",
            children: /* @__PURE__ */ a(R, { name: "x" })
          }
        )
      ]
    }
  );
}, Nt = ({ children: e, icon: t, className: r, ...o }) => /* @__PURE__ */ a(
  "h3",
  {
    "data-slot": "dialog-title",
    className: C(
      "break-anywhere relative mt-0.75 mr-auto flex items-start gap-1.5 font-semibold mobile:text-sm text-base leading-normal",
      r
    ),
    ...o,
    children: [
      t && /* @__PURE__ */ a(
        R,
        {
          name: t,
          "aria-hidden": "true",
          className: "relative -bottom-1 mobile:-bottom-px mobile:size-4.5 size-5 shrink-0"
        }
      ),
      /* @__PURE__ */ a("div", { children: e })
    ]
  }
), Ot = ({
  children: e,
  className: t,
  showCloseButton: r = !0,
  ...o
}) => {
  const n = xe(Pt), i = nt((s) => s.appRoot);
  return !n || !i ? null : lo(
    /* @__PURE__ */ a(Lu, { children: /* @__PURE__ */ a(
      "div",
      {
        "data-slot": "dialog-content",
        className: C(
          "dialog-content widget-radius relative flex max-h-full w-full animate-move-up flex-col border bg-background",
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
    i
  );
}, { Provider: zu, useCtx: Co } = Ao(), Mu = () => {
  const e = te(null), t = H((n) => n.opacity), r = Co((n) => n.onOpen), o = (n) => {
    de.set({ opacity: n / 100 }), e.current && clearTimeout(e.current), e.current = setTimeout(() => Ee.trackEvent("opacity_change", { opacity: n }), 2e3);
  };
  return /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ a("div", { className: "flex w-full items-center justify-between mobile:text-sm text-base", children: [
      /* @__PURE__ */ a("p", { className: "mobile:text-sm text-base", children: [
        "Opacidade",
        /* @__PURE__ */ a(We, { gloss: "OPACIDADE", onFinish: r })
      ] }),
      /* @__PURE__ */ a("span", { className: "font-semibold", children: [
        Math.round(Number(t) * 100),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ a(
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
}, Fu = ({ isSelected: e, region: t, onSelect: r }) => /* @__PURE__ */ a(
  "button",
  {
    inert: e,
    type: "button",
    onClick: r,
    className: C(
      "flex w-full cursor-pointer items-center justify-between whitespace-nowrap rounded-lg p-1.5 pr-3 transition-[colors] hover:bg-muted",
      e && "order-first"
    ),
    children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-start gap-2 font-semibold mobile:text-xs text-secondary text-sm dark:text-white", children: [
        /* @__PURE__ */ a("img", { src: t.flag, alt: t.name, className: "h-7 mobile:h-6 w-auto rounded-sm border" }),
        /* @__PURE__ */ a("span", { children: t.name })
      ] }),
      /* @__PURE__ */ a(
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
), Vu = () => {
  const e = q((o) => o.region), t = Co((o) => o.onOpen), r = (o) => {
    P.set({ region: o }), Ee.trackEvent("change_region", { region: `${o.name} (${o.abbreviation})` });
  };
  return /* @__PURE__ */ a("div", { className: "flex w-full items-center justify-between", children: [
    /* @__PURE__ */ a("p", { className: "mobile:text-sm text-base", children: [
      "Regionalismo",
      /* @__PURE__ */ a(We, { gloss: "REGIÃO", onFinish: t })
    ] }),
    /* @__PURE__ */ a(It, { nested: !0, children: [
      /* @__PURE__ */ a(Du, { className: C(vo({ variant: "ghost" }), "h-auto border p-1"), children: [
        /* @__PURE__ */ a("span", { className: "ml-1 font-semibold mobile:text-xs text-sm", children: e.abbreviation }),
        /* @__PURE__ */ a("img", { className: "h-6 mobile:h-6 rounded-sm border", src: e.flag, alt: e.name })
      ] }),
      /* @__PURE__ */ a(Ot, { className: "max-h-[70%]", children: ({ onOpenChange: o }) => /* @__PURE__ */ a(Q, { children: [
        /* @__PURE__ */ a(Tt, { children: /* @__PURE__ */ a(Nt, { children: "Regionalismo" }) }),
        /* @__PURE__ */ a("div", { className: "flex flex-col overflow-y-auto p-1", children: ho.map((n) => /* @__PURE__ */ a(
          Fu,
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
}, ju = () => {
  const e = wt((o) => o.theme), t = Co((o) => o.onOpen);
  return /* @__PURE__ */ a("div", { className: "flex w-full items-start justify-between", children: [
    /* @__PURE__ */ a("p", { className: "mobile:text-sm text-base", children: [
      "Tema escuro",
      /* @__PURE__ */ a(We, { gloss: "TEMA ESCURO", onFinish: t })
    ] }),
    /* @__PURE__ */ a(
      "input",
      {
        type: "checkbox",
        onChange: () => {
          const { theme: o, toggleTheme: n } = wt.getState(), i = o === "dark" ? "Claro" : "Escuro";
          n(), Ee.trackEvent("theme", { theme: i });
        },
        checked: e === "dark",
        className: "toggle toggle-sm rounded-full bg-accent text-primary before:size-4 before:rounded-full not-checked:before:bg-background checked:bg-primary checked:text-primary-foreground"
      }
    )
  ] });
}, Wu = ({ open: e, onOpenChange: t }) => {
  const r = ee(), o = q((u) => u.region), n = H((u) => u.opacity), { theme: i, setTheme: s } = wt(), l = () => {
    const u = ho[0];
    s("light"), P.set({ region: u }), de.set({ opacity: 1 });
  }, c = M(() => o.abbreviation === "BR" && n === 1 && i === "light", [o, n, i]);
  return /* @__PURE__ */ a(
    zu,
    {
      data: {
        onOpen: () => t(!0),
        onClose: () => t(!1)
      },
      children: /* @__PURE__ */ a(It, { open: e, onOpenChange: t, children: /* @__PURE__ */ a(Ot, { children: [
        /* @__PURE__ */ a(Tt, { className: "relative", children: [
          /* @__PURE__ */ a(Nt, { icon: "settings", children: "Configurações" }),
          !c && /* @__PURE__ */ a(Q, { children: [
            /* @__PURE__ */ a(
              ze,
              {
                className: "-mr-1",
                align: "end",
                placement: "bottom",
                content: "Redefinir",
                arrow: { position: "top-right" },
                children: /* @__PURE__ */ a(
                  U,
                  {
                    onClick: l,
                    variant: "ghost",
                    size: r ? "icon-xs" : "icon-sm",
                    className: "animate-move-up mobile:text-xs text-sm",
                    children: /* @__PURE__ */ a(R, { name: "rotate-left" })
                  }
                )
              }
            ),
            /* @__PURE__ */ a("div", { children: /* @__PURE__ */ a("span", { className: "absolute inset-y-0 w-px bg-border" }) })
          ] })
        ] }),
        /* @__PURE__ */ a("div", { className: "space-y-4 p-4", children: [
          /* @__PURE__ */ a(ju, {}),
          /* @__PURE__ */ a(Vu, {}),
          /* @__PURE__ */ a(Mu, {})
        ] })
      ] }) })
    }
  );
}, Gu = () => {
  const e = ee(), [t, r] = O(!1);
  return /* @__PURE__ */ a(Q, { children: [
    /* @__PURE__ */ a(
      ze,
      {
        className: "whitespace-nowrap",
        offset: 8,
        align: "end",
        content: "Configurações",
        placement: "top",
        arrow: { position: "bottom-right" },
        children: /* @__PURE__ */ a(U, { onClick: () => r(!0), variant: "ghost-gov", size: e ? "icon-sm" : "icon", children: /* @__PURE__ */ a(R, { name: "settings" }) })
      }
    ),
    /* @__PURE__ */ a(Wu, { open: t, onOpenChange: r })
  ] });
}, Hu = [2.5, 2, 1.5, 1, 0.5], Ju = () => {
  const e = ee(), t = q((n) => n.speed), r = (n, i) => {
    (n.key === "Enter" || n.key === " ") && (n.preventDefault(), o(i));
  }, o = (n) => {
    go(n), Ee.trackEvent("change_speed", { speed: n });
  };
  return /* @__PURE__ */ a("div", { className: "dropdown dropdown-center dropdown-top focus-within:**:data-[slot=tooltip-content]:hidden", children: [
    /* @__PURE__ */ a(ze, { offset: 8, content: "Velocidade", placement: "top", arrow: { position: "bottom" }, children: /* @__PURE__ */ a(Ya, { "aria-label": "Alterar velocidade", variant: "ghost-gov", size: e ? "icon-sm" : "icon", children: /* @__PURE__ */ a("span", { inert: !0, className: "-mt-0.5 font-bold mobile:text-xs text-sm", children: [
      t,
      "x"
    ] }) }) }),
    /* @__PURE__ */ a("div", { tabIndex: -1, className: "dropdown-content widget-radius mb-4 border bg-background drop-shadow-lg", children: /* @__PURE__ */ a(
      "ul",
      {
        className: C(
          "space-y-1 p-1 font-semibold text-primary text-sm",
          "focus-within:pointer-events-auto focus-within:visible"
        ),
        children: Hu.map((n) => {
          const i = n === t;
          return /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              inert: i,
              onClick: () => o(n),
              onKeyDown: (s) => r(s, n),
              className: C(
                "w-full cursor-pointer whitespace-nowrap rounded-md px-2 py-1 text-center mobile:text-xs text-sm hover:bg-primary/10",
                i && "bg-primary! text-primary-foreground! outline-1 outline-primary outline-solid"
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
}, Ku = () => {
  const e = ee(), { showSubtitles: t } = q(X("showSubtitles", "isPlayingWelcome"));
  return /* @__PURE__ */ a(
    ze,
    {
      className: "whitespace-nowrap",
      offset: 8,
      align: "end",
      content: t ? "Desativar legendas" : "Ativar legendas",
      placement: "top",
      arrow: { position: "bottom-right" },
      children: /* @__PURE__ */ a(U, { onClick: () => {
        fo(), Ee.trackEvent("subtitles_toggled", { status: t ? "disabled" : "enabled" });
      }, variant: "ghost-gov", size: e ? "icon-sm" : "icon", children: /* @__PURE__ */ a(R, { name: t ? "subtitle" : "subtitle-off" }) })
    }
  );
}, Xu = () => {
  const e = H((o) => o.isOpen), t = Ce((o) => o.open), { onPointerDown: r } = mr();
  return /* @__PURE__ */ a(
    "div",
    {
      className: C(
        !e && "-bottom-20!",
        "relative z-50 animate-move-up border-t bg-background px-2 py-1.5 transition-[bottom] ease-in-out",
        "[&_button]:z-1 [&_button]:not-hover:bg-transparent **:[[role=button]]:not-hover:bg-transparent",
        "-mt-13 **:data-[highlight=true]:animate-highlight-primary"
      ),
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            onPointerDown: r,
            className: C(
              "absolute inset-0 z-0 touch-none",
              "not-expanded:hover:cursor-move sm:hover:cursor-move"
            )
          }
        ),
        /* @__PURE__ */ a(Qu, {}),
        /* @__PURE__ */ a(
          "div",
          {
            inert: t,
            className: C(
              "grid w-full grid-cols-5 items-center gap-1",
              "[&>div]:col-span-2 [&>div]:grid [&>div]:grid-cols-subgrid [&>div]:justify-items-center [&>div]:rounded"
            ),
            children: [
              /* @__PURE__ */ a("div", { id: "main-action-speed-options", children: [
                /* @__PURE__ */ a(Bu, {}),
                /* @__PURE__ */ a(Ju, {})
              ] }),
              /* @__PURE__ */ a("div", { id: "emotions-subtitles-options", children: [
                /* @__PURE__ */ a(Ou, {}),
                /* @__PURE__ */ a(Ku, {})
              ] }),
              /* @__PURE__ */ a("div", { id: "settings-option", className: "col-span-1!", children: /* @__PURE__ */ a(Gu, {}) })
            ]
          }
        )
      ]
    }
  );
}, qu = ({ className: e, ...t }) => /* @__PURE__ */ a("div", { className: C("h-4", e), ...t }), Yu = "@media screen and (max-width:640px){body[data-vlibras-expanded=true]{overflow:hidden!important}}", Zu = () => {
  const e = ee(), { isOpen: t, isExpanded: r } = H(X("isOpen", "isExpanded"));
  S(() => {
    const { root: s } = De.get();
    !s || t || (delete s.dataset.expanded, delete document.body.dataset.vlibrasExpanded);
  }, [t]);
  const o = () => {
    aa(Yu, "@expanded-mode.style");
    const { root: s } = De.get(), { isExpanded: l } = de.get();
    s && (de.set({ isExpanded: !l }), Ee.trackEvent("expanded"));
  }, n = r ? "Diminuir" : "Expandir";
  return /* @__PURE__ */ a(
    ze,
    {
      className: "whitespace-nowrap",
      offset: 2,
      content: n,
      placement: "bottom",
      align: "end",
      arrow: { position: "top-right" },
      children: /* @__PURE__ */ a(
        U,
        {
          onClick: o,
          className: "z-1",
          "aria-label": n,
          size: e ? "icon-sm" : "icon",
          variant: "default",
          children: /* @__PURE__ */ a(R, { name: r ? "collapse" : "expand", "aria-hidden": "true" })
        }
      )
    }
  );
}, $u = ({ open: e, onOpenChange: t }) => {
  const r = te(null), o = H((d) => d.isTranslating), [n, i] = O(""), { mutateAsync: s, isPending: l } = Xe(), c = uo(i, 300), u = async () => {
    const d = r.current?.value || "";
    if (d)
      try {
        const g = await s(d);
        if (!g.length) throw new Error("Empty gloss");
        pe(g), t(!1), bo({
          action: () => t(!0),
          content: /* @__PURE__ */ a(Q, { children: [
            /* @__PURE__ */ a(R, { name: "translator" }),
            "Reabrir Tradutor"
          ] })
        });
      } catch {
      }
  }, p = () => {
    r.current && (r.current.value = "", r.current?.focus(), i(""));
  }, m = (d) => {
    d.key === "Enter" && (d.preventDefault(), n.length >= 3 && u());
  };
  return /* @__PURE__ */ a(It, { open: e, onOpenChange: t, children: /* @__PURE__ */ a(Ot, { children: [
    /* @__PURE__ */ a(Tt, { children: /* @__PURE__ */ a(Nt, { icon: "translator", children: "Tradutor" }) }),
    /* @__PURE__ */ a("div", { className: "space-y-2 overflow-y-auto p-4 pt-2", children: [
      /* @__PURE__ */ a("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ a("div", { className: "flex h-8 items-center justify-between", children: [
          /* @__PURE__ */ a("label", { htmlFor: "translator-text", className: "text-sm", children: [
            "Insira seu texto",
            /* @__PURE__ */ a(We, { gloss: "INSERIR TEXTO", onFinish: () => t(!0) })
          ] }),
          n.length > 0 && /* @__PURE__ */ a(
            U,
            {
              "aria-label": "Limpar texto",
              onClick: p,
              size: "icon-xs",
              variant: "ghost",
              className: "animate-move-up text-destructive",
              children: /* @__PURE__ */ a(R, { name: "trash" })
            }
          )
        ] }),
        /* @__PURE__ */ a(
          "textarea",
          {
            defaultValue: n,
            ref: r,
            onKeyPress: m,
            onChange: (d) => c(d.currentTarget.value),
            name: "text",
            id: "translator-text",
            className: "h-32 w-full resize-none rounded-lg border bg-muted p-2"
          }
        )
      ] }),
      /* @__PURE__ */ a(
        U,
        {
          onClick: u,
          disabled: n.length < 3 || o || l,
          className: "h-10 w-full rounded-full text-sm",
          children: [
            l && /* @__PURE__ */ a(_o, { className: "size-4 text-primary-foreground" }),
            l ? "Traduzindo..." : "Traduzir"
          ]
        }
      )
    ] })
  ] }) });
}, jt = ({ label: e, onClick: t, icon: r }) => {
  const o = ee();
  return /* @__PURE__ */ a(
    "li",
    {
      className: C(
        "flex w-auto animate-move-left items-center gap-2",
        "[&_button]:rounded-full [&_button]:border-border [&_button]:bg-background [&_button]:shadow-md [&_button]:hover:bg-muted"
      ),
      children: [
        /* @__PURE__ */ a(
          U,
          {
            onClick: t,
            role: "button",
            "aria-label": e,
            size: o ? "icon-sm" : "icon",
            variant: "outline-gov",
            children: r && /* @__PURE__ */ a(R, { name: r, className: "mobile:size-5 size-5.5" })
          }
        ),
        /* @__PURE__ */ a(U, { tabindex: -1, onClick: t, variant: "outline", className: "w-30", size: "xs", children: e })
      ]
    }
  );
}, ep = () => {
  const e = ee(), t = ve((i) => i.open), r = Ce((i) => i.onOpenChange), [o, n] = O(!1);
  return /* @__PURE__ */ a(Q, { children: [
    /* @__PURE__ */ a("div", { className: "dropdown dropdown-bottom z-1", children: [
      /* @__PURE__ */ a(
        U,
        {
          id: "header-menu-button",
          role: "button",
          tabindex: 0,
          "aria-label": "Menu de opções",
          size: e ? "icon-sm" : "icon",
          variant: "default",
          children: /* @__PURE__ */ a(R, { name: "menu" })
        }
      ),
      /* @__PURE__ */ a("ul", { className: "dropdown-content mt-4 space-y-2", children: [
        /* @__PURE__ */ a(jt, { onClick: () => t("dictionary"), label: "Dicionário", icon: "dictionary" }),
        /* @__PURE__ */ a(jt, { onClick: () => n(!0), label: "Tradutor", icon: "translator" }),
        /* @__PURE__ */ a(jt, { onClick: () => r(!0), label: "Guia Rápido", icon: "help" }),
        /* @__PURE__ */ a(jt, { onClick: () => t("about"), label: "Sobre o VLibras", icon: "info" })
      ] })
    ] }),
    /* @__PURE__ */ a($u, { open: o, onOpenChange: n })
  ] });
}, tp = () => {
  const { onPointerDown: e } = mr(), t = ee(), r = H((i) => i.setOpen), o = Ce((i) => i.open), n = () => {
    r(!1), pr();
  };
  return /* @__PURE__ */ a("div", { className: C("relative bottom-auto z-50 bg-primary px-2 py-1.5", "sm:rounded-t-xl"), children: [
    /* @__PURE__ */ a(
      "div",
      {
        onPointerDown: e,
        className: C(
          "absolute inset-0 z-0 touch-none",
          "not-expanded:hover:cursor-move sm:hover:cursor-move"
        )
      }
    ),
    /* @__PURE__ */ a(
      "div",
      {
        inert: o,
        className: "flex w-full items-center justify-between gap-1 **:data-[highlight=true]:animate-highlight-primary-foreground",
        children: [
          /* @__PURE__ */ a(ep, {}),
          /* @__PURE__ */ a("div", { className: "mr-2 ml-1", children: /* @__PURE__ */ a("span", { className: "absolute inset-y-0 w-px bg-primary-foreground/30" }) }),
          /* @__PURE__ */ a("div", { className: "mr-2 flex items-center gap-1.5 font-semibold text-primary-foreground text-sm", children: [
            /* @__PURE__ */ a("div", { className: "flex size-5.5 items-end justify-center rounded-full bg-primary-foreground text-primary", children: /* @__PURE__ */ a(R, { name: "icaro", className: "size-4.5" }) }),
            "VLibras"
          ] }),
          /* @__PURE__ */ a(Q, { children: [
            /* @__PURE__ */ a(qu, { className: "w-full" }),
            /* @__PURE__ */ a("div", { id: "header-actions", className: "flex items-center gap-1 [&_button]:not-hover:bg-transparent", children: [
              /* @__PURE__ */ a(Zu, {}),
              /* @__PURE__ */ a(
                U,
                {
                  onClick: n,
                  "aria-label": "Fechar",
                  size: t ? "icon-sm" : "icon",
                  variant: "default",
                  className: "z-1",
                  children: /* @__PURE__ */ a(R, { name: "x" })
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
};
function rp(e, t) {
  const r = e.slice(0, t).lastIndexOf(" "), o = e.indexOf(" ", t);
  return e.slice(r + 1, o === -1 ? e.length : o);
}
function op(e, t, r) {
  const o = e.slice(0, t), n = e.slice(t);
  return `${o.replace(/\S+$/, `${r} `)}${n.trimStart()}`;
}
function np(e, t) {
  const r = window.getComputedStyle(e), o = document.createElement("div");
  o.style.position = "absolute", o.style.visibility = "hidden", o.style.whiteSpace = "pre-wrap", o.style.wordWrap = "break-word", o.style.width = `${e.clientWidth}px`, o.style.font = r.font, o.style.padding = r.padding, o.style.lineHeight = r.lineHeight, o.style.letterSpacing = r.letterSpacing;
  const n = e.value.slice(0, t);
  o.textContent = n;
  const i = document.createElement("span");
  i.textContent = "|", o.appendChild(i), document.body.appendChild(o);
  const s = 160, l = e.parentElement?.clientWidth ?? e.clientWidth;
  let c = i.offsetLeft + 15;
  c + s > l && (c = i.offsetLeft - s), c = Math.max(0, c);
  const u = {
    top: i.offsetTop + Number.parseInt(r.lineHeight || "20", 10),
    left: c
  };
  return document.body.removeChild(o), u;
}
const ap = ({ suggestions: e, coords: t, onSelect: r }) => e.length === 0 ? null : /* @__PURE__ */ a(
  "div",
  {
    className: "absolute z-50 flex max-h-30 max-w-45 flex-col gap-1 overflow-x-auto overflow-y-auto rounded-md border bg-background p-1 shadow-md",
    style: {
      top: `${t.top}px`,
      left: `${t.left}px`
    },
    children: e.map((o) => /* @__PURE__ */ a(
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
), ip = ({ open: e, onOpenChange: t }) => {
  const r = te(null), o = ee(), { data: n } = Ha(), [i, s] = O(!1), [l, c] = O([]), [u, p] = O({ top: 0, left: 0 }), [m, d] = O(""), g = !m.trim();
  S(() => d(P.get().gloss || ""), []);
  const h = M(() => n ? new Wa(n) : null, [n]), f = uo(() => {
    if (!r.current) return;
    const A = r.current, v = A.selectionStart ?? 0, w = A.value;
    d(w);
    const N = rp(w, v);
    if (N.length < 2) {
      c([]);
      return;
    }
    c(h ? h.searchSigns(N) : []), p(np(A, v));
  }, 300);
  return /* @__PURE__ */ a(It, { open: e, onOpenChange: t, children: /* @__PURE__ */ a(Ot, { children: [
    /* @__PURE__ */ a(Tt, { children: /* @__PURE__ */ a(Nt, { children: "Feedback" }) }),
    /* @__PURE__ */ a("div", { className: "flex h-full flex-col gap-2 px-4 py-4", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ a("label", { for: "translator-input", className: "font-semibold mobile:text-sm text-muted-foreground", children: "Informe a glosa correta" }) }),
      /* @__PURE__ */ a("div", { className: "relative", children: [
        /* @__PURE__ */ a(
          "textarea",
          {
            ref: r,
            id: "translator-input",
            value: m,
            placeholder: "Digite aqui...",
            className: "h-40 mobile:h-32 w-full resize-none rounded-lg border bg-muted p-3 mobile:text-sm uppercase placeholder:normal-case",
            rows: o ? 4 : 6,
            onChange: f
          }
        ),
        /* @__PURE__ */ a(ap, { onSelect: (A) => {
          if (!r.current) return;
          const v = r.current.selectionStart ?? 0;
          d(op(m, v, A)), c([]), r.current.focus();
        }, suggestions: l, coords: u })
      ] }),
      /* @__PURE__ */ a("div", { className: "space-y-2 [&>button]:h-10 [&>button]:w-full [&>button]:rounded-full mobile:[&>button]:text-sm", children: [
        /* @__PURE__ */ a(U, { variant: "default", onClick: async () => {
          const { text: A } = de.get(), { gloss: v } = P.get();
          if (!(!A || !v || !m)) {
            s(!0);
            try {
              const w = await Ga({
                text: A,
                translation: v,
                review: m.toUpperCase(),
                rating: "bad"
              });
              w.success ? (t(!1), ar("Agradecemos sua contribuição!", { variant: "primary", className: "font-semibold" }), xt("AGRADECER")) : (console.error(w.error), w.error && ar(w.error, { variant: "destructive" }));
            } finally {
              s(!1);
            }
          }
        }, disabled: i || g, children: i ? "Enviando..." : "Enviar sugestão" }),
        /* @__PURE__ */ a(U, { variant: "outline", onClick: () => xt(m), children: "Reproduzir" })
      ] })
    ] })
  ] }) });
}, sp = ({ open: e, onOpenChange: t }) => {
  const [r, o] = O(!1);
  return /* @__PURE__ */ a(Q, { children: [
    /* @__PURE__ */ a(It, { open: e, onOpenChange: t, children: /* @__PURE__ */ a(Ot, { children: [
      /* @__PURE__ */ a(Tt, { children: /* @__PURE__ */ a(Nt, { icon: "comment", children: "Feedback" }) }),
      /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center gap-2 p-6", children: [
        /* @__PURE__ */ a("p", { className: "font-semibold", children: "Gostou da tradução?" }),
        /* @__PURE__ */ a("div", { className: "flex items-center justify-center gap-4 [&>button]:flex-col [&>button]:text-muted-foreground", children: [
          /* @__PURE__ */ a(
            U,
            {
              variant: "ghost",
              size: "icon-xl",
              className: "px-7 py-10 font-semibold hover:bg-primary/5 hover:text-primary",
              onClick: async () => {
                const { gloss: s } = P.get(), { text: l } = de.get();
                if (!s || !l) return;
                const c = await Ga({ text: l, translation: s, review: s, rating: "good" });
                c.success ? (t(!1), ar("Agradecemos sua contribuição!", { variant: "primary", className: "font-semibold" }), xt("AGRADECER")) : (t(!1), c.error && ar(ge.SEND_REVIEW_ERROR, { variant: "destructive" }), console.error(c.error));
              },
              children: [
                /* @__PURE__ */ a(R, { name: "thumbs-up" }),
                /* @__PURE__ */ a("span", { children: "Sim" })
              ]
            }
          ),
          /* @__PURE__ */ a(
            U,
            {
              variant: "ghost",
              size: "icon-xl",
              className: "px-7 py-10 font-semibold hover:bg-destructive/5 hover:text-destructive",
              onClick: () => {
                t(!1), o(!0);
              },
              children: [
                /* @__PURE__ */ a(R, { name: "thumbs-down" }),
                /* @__PURE__ */ a("span", { children: "Não" })
              ]
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ a(ip, { open: r, onOpenChange: o })
  ] });
}, lp = () => {
  const [e, t] = O(!1), r = ee(), o = H((i) => i.isExpanded);
  return Ce((i) => i.open) ? null : /* @__PURE__ */ a(Q, { children: [
    /* @__PURE__ */ a(
      U,
      {
        onClick: () => t(!0),
        className: "animate-move-up rounded-full bg-background! font-semibold text-primary hover:bg-muted!",
        variant: "outline",
        size: o ? "default" : r ? "xs" : "sm",
        children: [
          /* @__PURE__ */ a(R, { name: "like" }),
          "Avaliar"
        ]
      }
    ),
    /* @__PURE__ */ a(sp, { open: e, onOpenChange: t })
  ] });
}, Ir = [
  { name: "icaro", path: "/icaro.png", icon: "icaro" },
  { name: "hosana", path: "/hosana.png", icon: "hosana" },
  { name: "guga", path: "/guga.png", icon: "guga" }
], cp = (e) => {
  const { path: t } = Ht.getState();
  return `${t}/assets/images/avatars/${e}`;
}, dp = () => {
  const e = q((n) => n.avatar), t = Ce((n) => n.open), r = Ir.find(({ name: n }) => n === e) || Ir[0], o = (n) => {
    document.activeElement?.blur(), setTimeout(() => hr(n), 150), Ee.trackEvent("avatar_selected", { avatar: n });
  };
  return /* @__PURE__ */ a(
    "div",
    {
      inert: t,
      className: C(
        "dropdown dropdown-top dropdown-end z-1 h-9 animate-move-up focus-within:**:data-[slot=tooltip-content]:hidden [&_button]:shadow-md"
      ),
      children: [
        /* @__PURE__ */ a(
          ze,
          {
            className: "whitespace-nowrap",
            content: "Alterar avatar",
            placement: "top",
            align: "end",
            arrow: { position: "bottom-right" },
            children: /* @__PURE__ */ a(
              U,
              {
                id: "toggle-avatar-button",
                variant: "outline",
                size: "icon",
                className: "rounded-full bg-background hover:bg-muted! data-[highlight=true]:animate-highlight-primary",
                children: /* @__PURE__ */ a(R, { name: r.icon, "aria-hidden": "true", className: "size-5.5 text-primary" })
              }
            )
          }
        ),
        /* @__PURE__ */ a("ul", { className: "dropdown-content mb-2 space-y-2", children: Ir.filter(({ name: n }) => n !== e).map((n) => /* @__PURE__ */ a("li", { className: "flex animate-move-up items-center justify-end gap-2", children: [
          /* @__PURE__ */ a(
            U,
            {
              tabindex: -1,
              onClick: () => o(n.name),
              variant: "outline",
              className: "w-16 rounded-full bg-background capitalize hover:bg-muted!",
              size: "xs",
              children: n.name
            }
          ),
          /* @__PURE__ */ a(
            U,
            {
              onClick: () => o(n.name),
              variant: "outline",
              className: "rounded-full bg-background hover:bg-muted!",
              size: "icon",
              children: /* @__PURE__ */ a("img", { src: cp(n.path), alt: n.name })
            }
          )
        ] }, n.name)) })
      ]
    }
  );
}, up = () => {
  const e = ee(), t = Ce((v) => v.open), { status: r, gloss: o, isPlayingWelcome: n } = q(X("status", "gloss", "isPlayingWelcome")), { isExpanded: i, isTranslating: s, text: l } = H(X("isExpanded", "text", "isTranslating")), { action: c, content: u } = kt(X("action", "content")), p = r === "playing", m = r === "paused", d = r === "idle";
  S(() => {
    if (!d) return;
    const { auto: v, action: w } = on.get();
    v && w && (w(), er());
  }, [d]);
  const g = () => {
    on.get().action?.(), er();
  }, h = () => {
    de.set({ text: void 0 }), ur();
  }, f = c && u && r === "idle", b = !!(r === "idle" && o && l), y = n ? !0 : (p || m) && !t, A = r === "idle" || t;
  return s ? null : /* @__PURE__ */ a("div", { className: "absolute expanded:inset-x-4! inset-x-3 mobile:inset-x-2 bottom-15 expanded:bottom-16! mobile:bottom-13 flex animate-move-up items-end justify-end gap-1.5", children: [
    /* @__PURE__ */ a("div", { className: "mr-auto flex flex-wrap-reverse items-center gap-1.5", children: [
      f && /* @__PURE__ */ a(
        U,
        {
          onClick: g,
          variant: "outline",
          className: "animate-move-up rounded-full bg-background! font-semibold text-primary hover:bg-muted!",
          size: i ? "default" : e ? "xs" : "sm",
          children: u
        }
      ),
      b && /* @__PURE__ */ a(lp, {})
    ] }),
    /* @__PURE__ */ a("div", { className: "ml-auto flex items-center gap-2", children: [
      y && /* @__PURE__ */ a(
        U,
        {
          onClick: h,
          className: "animate-move-up rounded-full bg-background! font-semibold text-primary hover:bg-muted!",
          variant: "outline",
          size: i ? "default" : e ? "xs" : "sm",
          children: [
            /* @__PURE__ */ a(R, { name: "skip" }),
            "Pular"
          ]
        }
      ),
      A && /* @__PURE__ */ a(dp, {})
    ] })
  ] });
}, pp = {
  onLoaded: () => {
    const e = window.VLibrasWidget?.configUrl, t = window.VLibrasWidget?.avatar, { avatar: r, speed: o } = P.get();
    yt({ baseUrl: ye.DICTIONARY_URL, personalizationUrl: e }), hr(t || r), go(o), setTimeout(xa, 1e3);
  },
  onPlay: () => {
    const { screen: e, open: t } = _t.get();
    e !== "main" && t("main"), de.set({ isPausedByUser: !1 });
  },
  onPlayStatic: () => {
    const { screen: e, open: t } = _t.get();
    e !== "main" && t("main"), de.set({ isPausedByUser: !1 });
  },
  onWelcomeFinish: () => {
    const { showSubtitles: e } = P.get();
    fo(e);
  }
}, hp = ({ className: e, ...t }) => {
  const r = ve((n) => n.screen), o = q((n) => n.isLoaded);
  return /* @__PURE__ */ a(
    "div",
    {
      ...t,
      id: "vlibras-app-content",
      inert: r !== "main",
      ref: (n) => {
        n && De.set({ appContent: n });
      },
      className: C("flex flex-col", (!o || r !== "main") && "opacity-0", e),
      children: [
        /* @__PURE__ */ a(tp, {}),
        /* @__PURE__ */ a(
          Nu,
          {
            className: C("mb-2 h-(--player-height) w-full", "max-h-[calc(100dvh-52px)]"),
            options: pp
          }
        ),
        /* @__PURE__ */ a(up, {}),
        /* @__PURE__ */ a(Xu, {})
      ]
    }
  );
}, mp = () => {
  const e = H((t) => Number(t.opacity || 0) * 100);
  return /* @__PURE__ */ a(
    "div",
    {
      style: { opacity: `${e}%` },
      className: "sm:widget-radius absolute inset-0 -z-50 bg-[#f8f8f8] dark:bg-[#111111]"
    }
  );
}, gp = () => {
  const e = ve((n) => n.screen), { isOpen: t, position: r, isExpanded: o } = H(X("isOpen", "position", "isExpanded"));
  return /* @__PURE__ */ a(Jc, { children: ({ ref: n, hasMoved: i, pos: s, isDragging: l, reset: c }) => (S(() => {
    !t && c();
  }, [t]), /* @__PURE__ */ a(
    "div",
    {
      id: "vlibras-app",
      inert: !t,
      style: { transform: i && t ? `translate3d(${s.x}px, ${s.y}px, 0)` : void 0 },
      className: C(
        Pu({
          isDragging: l,
          isOpen: t,
          position: r,
          isExpanded: o,
          hasMoved: i
        }),
        !1
      ),
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            ref: (u) => {
              u && De.set({ appRoot: u }), typeof n == "function" ? n(u) : n && "current" in n && (n.current = u);
            },
            className: C(
              "widget-radius relative z-2147483647 h-fit expanded:w-full w-(--widget-width) overflow-hidden shadow-lg expanded:max-sm:rounded-none!",
              e !== "main" && "outline-2 outline-border outline-solid",
              !1
            ),
            children: [
              /* @__PURE__ */ a(hp, {}),
              /* @__PURE__ */ a(wu, {}),
              /* @__PURE__ */ a(mp, {})
            ]
          }
        ),
        /* @__PURE__ */ a(Ru, {})
      ]
    }
  )) });
}, fp = new yd({
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
}), bp = {
  event: null,
  isActive: !1,
  onClick: void 0,
  type: "button",
  element: null,
  listener: null,
  render: void 0
}, Kt = fe()(() => ({
  ...bp
})), Xt = {
  get: Kt.getState,
  set: Kt.setState,
  subscribe: Kt.subscribe
}, vp = ({
  event: e,
  tooltip: t
}) => {
  const r = t?.getBoundingClientRect() || { width: 0, height: 0 };
  let o = e.pageX, n = e.pageY - 36, i = "bottom";
  return o < 34 && (o = 34, i = "left"), o + r.width > window.innerWidth && (o = window.innerWidth - r.width + 12, i = "right"), e.clientY < 46 ? (n = e.pageY + r.height * 2, i = i === "right" ? "top-right" : "top-left") : i = i === "right" ? "bottom-right" : "bottom-left", { x: o, y: n, arrow: i };
}, Ap = () => {
  const e = te(null), { type: t, event: r, onClick: o, isActive: n, render: i } = Kt(), [s, l] = O({ x: 0, y: 0, arrow: "bottom" });
  return S(() => {
    const c = (u) => {
      e.current && !e.current.contains(u.target) && Xt.set({ isActive: !1 });
    };
    return n ? document.addEventListener("click", c) : document.removeEventListener("click", c), () => {
      document.removeEventListener("click", c);
    };
  }, [n]), S(() => {
    if (r && e.current) {
      l(vp({ event: r, tooltip: e.current }));
      const c = e.current;
      c && (c.classList.remove("animate-scale"), c.offsetWidth, c.classList.add("animate-scale"));
    }
  }, [r]), /* @__PURE__ */ a(
    U,
    {
      ref: e,
      onClick: o,
      style: { left: s.x, top: s.y },
      className: C(
        "group absolute z-2147483647 h-9 -translate-x-6 -translate-y-full animate-scale rounded-lg px-3 text-primary-foreground shadow-lg",
        !n && "hidden"
      ),
      children: [
        i || /* @__PURE__ */ a(Q, { children: [
          /* @__PURE__ */ a(R, { name: t === "button" ? "touch" : "link", className: "size-5" }),
          /* @__PURE__ */ a("span", { className: "relative bottom-0.5 whitespace-nowrap font-medium text-sm", children: t === "button" ? "Interagir" : "Acessar link" })
        ] }),
        /* @__PURE__ */ a("span", { className: "absolute inset-0 -z-1 rounded-lg bg-primary group-hover:brightness-85" }),
        /* @__PURE__ */ a(
          "span",
          {
            className: C(
              "absolute -z-2 size-4 -translate-x-1/2 rotate-45 bg-primary brightness-85",
              ["bottom", "bottom-left", "bottom-right"].includes(s.arrow) ? "-bottom-1.5" : "-top-1.5",
              ["bottom-left", "top-left", "bottom", "top"].includes(s.arrow) ? "left-5" : "right-2"
            )
          }
        )
      ]
    }
  );
}, wp = ({ children: e, root: t }) => {
  const { theme: r } = wt();
  return S(() => {
    const o = t || document.documentElement;
    (o instanceof ShadowRoot ? o.host : o).classList.toggle("dark", r === "dark");
  }, [r, t]), e;
}, yp = () => {
  const e = te(null), t = H((r) => r.isOpen);
  return S(() => {
    const r = He("#vlibras-access-wrapper")?.shadowRoot, o = r ? He("#vlibras-access", r) : null;
    o && (e.current = o);
  }, []), S(() => {
    e.current && (e.current.style.display = t ? "none" : "flex");
  }, [t]), null;
}, xp = () => {
  const e = H((t) => t.isExpanded);
  S(() => ji.set({ isExpanded: e }), [e]);
}, kp = () => {
  const e = q((n) => n.status), { isTranslating: t, isExpanded: r, isOpen: o } = H(X("isTranslating", "isExpanded", "isOpen"));
  S(() => {
    const { root: n } = De.get();
    n && (n.dataset.status = e);
  }, [e]), S(() => {
    const { root: n } = De.get();
    !n || !o || (r ? (n.dataset.expanded = "true", document.body.dataset.vlibrasExpanded = "true") : (delete n.dataset.expanded, delete document.body.dataset.vlibrasExpanded));
  }, [r, o]), S(() => {
    const n = document.documentElement;
    t ? n.dataset.vlibrasStatus = "translating" : delete n.dataset.vlibrasStatus;
  }, [t]);
}, _p = {
  light: { color: "black", outline: "black", shadow: "black" },
  dark: { color: "white", outline: "white", shadow: "white" }
}, Sp = () => {
  const e = wt((r) => r.theme), t = q((r) => r.isLoaded);
  return S(() => {
    if (!t) return;
    const r = _p[e];
    _a(r);
  }, [e, t]), null;
}, Cp = "html body *:not(.vlibras-ignore,.sr-only,.sr-only *,#vlibras-app-root *,#vlibras-app-wrapper *) .vlibras--hover{text-decoration:underline!important;cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABuhJREFUeAHNWUtsVFUY/s+dtjNNSiCaFDCRzIJhJUqJDSUpdYjdQBeikJK4KuCGRKVLsCA0WFhK1ciKtiTGRGIFF+iGhgJdTAKRonHTknhDDK+NJZK003LP8XznzpnO45w793am0i+Z3Jm5j/M/vv91Ltt2Zq6XETtCEkLQGka0hkxg5KqjYP6RhEuCXMHEDOPinud4M7f7mibpfwZrG5i/LoVJU40gjTHJoRyJcSiWOdE4TssI1nYm+5e0ZJKWFWxcEL/C6cWNWnuJbRvI/mOlzfLAZYJdEQveYKa/0aUqISmUFfTSwMaJ00jmRMNFWiJesgJ5uMTZqaUoslIU0HA9Wng/Spw4tLKQjFH9XWnU4fRJESouV5oCGj1zDfN3207OJitdWHMKrYoz2vUmo1QzPkTrZWlsivvnnmeJHs0IevSM6Na0oLsP8N2+vDwjiyTrDYqNmtWBlg2MDrU76hgFN6cEXbrDlTIB6M/0xU+ZTlStwPrVjPq6ogteCijy1Ri3e4SzHpMnqlKgu9VRVtcUqRbP54guTHDlERNkhmopzVDOYnMWDRD8yLu1Ex5oShAd6XToYLs5t8gMdbk0Ozmqq4wICG9bZPqJoL3nX6iA1fjtQbQ8EfD85Gx84WThHw5jbIYiALQpffj000UBYcXHz3xOA1NSoU++9yoFaRmgRPfb5UowIXrbTs+m9W+HC+5SSCBgDxksc2x0kbdIo4BWCsoAUCwqsBbWLIMTy3vBYSSeUUh82mnm/K7NTAUfaKMF1dlEW34psYJnfdZlopJIay84DsVC9R1Ikx2pYmv8m6uB+6WrkUEu3fa9AKvdf+Jfoz1htGQIbJXrmlI0Y7H3cHQa5uvdEM+h/a3lltj3rUe//MGVpbDID3d4Pni1BxDU1cIU0JyJHhyd8X4ZxHretQDW25EqtwICeuAqV1bGIjqPa7rAI4W0WirghVIKYggDjZRqTFAgjWxVFkGGnufoqCeV9K+D0Jo2g2PFga2BtHr0J48+ltnpi6teUcq1Yffmci8Ih71Vhy8cAzixPbabOzbZ+Ys2omfYF6YU8NyWDURdcnHEy6XbIu+VQtx/6tHZD5zAOEmtNZ5LKwWwe4B8ZMO61RT4YNBnaIIXCT5yMKbcDmsri49yq6URJzACKru+v9TrG5vL75NG36IUSLxITMr+m2yolEGQhQotu0N6TBewsED8DE0IlZKhOJJA4bqvGWSQRF2jVFaBjAHbgko5HEG6o4BmN6e4ionRw3X09Yex/CfIk/o5eYWy9nMaTCugIMQ4VYFNzYsKoPruO+/RuTE/zaKYbQ3RbkNBUBL3p5rD1Y26/DfBbxAzN2gqFVbwwkZDkN3K9UOH2pnqjR5XqPkdKaesWOZlmDPfk5cYW4AY4UwXBY19GqZcDYDHCPLBseB4wHW7N9ut/tAsg1tkclkPzpmumn5CFYHc311SrZH/v5HcR3GrZP1KE53xfiHcuuI/zDTyC5N9AQgIL33UHlML6QYOlp96yvMpFsUIMWFCkPWBm9Pl9zFyJouk9XeSy7ORbVENUAfFCr3QQcn3Hw/H1KdFFrHBa/69/tzsX6/TI446WCu1G6Z5AgXY0CV5/aV/IYCCBhI0eihGXW84tCqxaElUZ3gEwsP6F3KeAK0A0EZbPihJ2BIAW+D3yhRQXjA0dxcmgr0A/m9cuyiI5r0WHl7Eb3wX5BsjtRap01cgqB8yDvky7WN325w3BS/zAjwQZSyEImf3xvJNGBTSE92jnDVBn0rFDdY3riucERyMCmT6GkdMsRC2cwRAK53T0QvB+t2tvsA6p6Norcpx30QhNICW9OvqPSL73qghFiBEJSqZgIIG6+shHVkNQQuhtVdM/dbQLUvxk1vx+muMLPj7+oD7eufn2INpK/z/z4dCJdQoO3HJV5mqsq80+b/vy4BHsOs23fQsGOq7jNFYbuZ4/ID+UUcBiGfr++fi83tKd+60F2x7Q6VQPC/gendr8H14/pDN0/N8Z+HPwCf54ybfaWoxsAgmrrAxEQaK89cChBd0qvS9WigebD+d3SMcumw6B+v2dsaMM3MUINAHrnoBLQcbyfQ1HCj7l0KibWC2Rzps2HYePO5utXeTNkBwWDwwRSPnH0/sNJ2KtBqUEOR8GfRadl1uuO/Y5KihBr/1UA+KwMJoDtEj/fq7CEFBs+WXpIBS4qx87SOc68v/cpx8zh+P9wddEvkdWeZYo5vINrTAMrR8cBlz0pWEB6qKPOUNjw3Lfb401QDqnZicScIIrlFd6shBKcLljjET6SVRSwapYHSlcT5+0d9gCI+aKFCI7WcW3hGcp6VAWyQ/kzKjJ0uC3sUkhWFEpubJRLb+56hCF+I/Ig4jzjnhUQQAAAAASUVORK5CYII=),pointer!important}html body *:not(.vlibras-ignore,.sr-only,.sr-only *,#vlibras-app-root *,#vlibras-app-wrapper *) .vlibras--hover[src],html body *:not(.vlibras-ignore,.sr-only,.sr-only *,#vlibras-app-root *,#vlibras-app-wrapper *) .vlibras--hover img{text-decoration:none!important;cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA0CAYAAADMk7uRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAB2BJREFUeAHNWktMVFcY/s8dYDCRygq0C4OJw6paMaXSBCxNbRNF01YNJF2BdGNf0nSjIlFi0VVTaRtdoTRpmmiKJWnowpQUgUQSjWBdFUwcWdTHphhMGAbuOT3fuZxhHuc+ZhjUL5ncO3PPved/fv9/zh2240ysjRE7QhJCUCkjKiUTGEXVUTDnSCJKgqKCiRnGxR3bsmdutq+doOcMVtMV/0sKU095gjTGBIdyJIag2FjHmiFaRbCaM/P3pSUraFXBhgTxfk6L1/PtJbaja/4/17BZHUSZYP1iwe4e61wTpRVChtC8oBcGNkScesc6in6iHPGCFUggSpydykWRl0UBjahNCx9lkycWvVyoCFHhuDTqpfqTIlBevmwKaDTHiuLjNSfnKvwG5j2ESsKMdm9lFCnDh2iDLI1rw861Z/NED2cEPXxKNDIlaHwa5+7TyyuySLI2r9zIWx2o2siotdZSx2wwPCnoyi2ulPFA51h7+JTpwooV2LCOUXtD9oKnA4p8P8jdPcJZs8kTK1KgsdpSVtchslI8ixH1jHLlERMkQ1WlM5S13JxlBwh+5N38CQ+sLSY6ssuiQ7VmbpEM9Vs6O1mqq8wSEN5tkqnHgg5cWFQJq3F7Ojue8Hh+xVx44WTyDxZjbIayAMIm/eFTT5YFhBUfPXViGpiUCn3xi+2XpBmAEo1vZCrBhGirOT1Xr79bXPAoBQQSttVgmWN9y3ELGgW0UlAGgGLZAnNhzgxYoYQXLEbiKQXEl7vMMb97C1PJh7DRgmo20ZbPJVfwrOMNplAS9doLlkWhQH0HaHJnJNUas0s1sEm6Ggxy5abjBVjt3mNnjPaE0ZIBsF3Oa6JoxkIf4GgVxQujAZ5DTdWZljh43qY/7nJlKUxy+RZPJK/2AJJ6pTAlNGeiGUdrqFMmsV7vugDWq4tkWgEJ3TXAlZUxieZxHS7wSHJY5Qp4IT0EsQhDGCnVmCDPMHKrskgy9DxH+2yppDMOQuuw6R5MTWwN0OrRqzZ9LtnpmwE7hXLdsGdLpheExV4vwAnHApzYh24376x0j1+0Ec2XHGHSAc9t20jUICdHvly5KRJeSca9Jzad3W955kmk3HitXimA3QPwkRvWryPPByN8Lo7yFMF7D4WU22FtZfE+7mpp5AmMgMqu70/3+uayzPuk0bcpBYoXiydk/01u8GMQsFCyZeukx3QBCwrkz8VRoSgZioMEkud91SCDDNRSpbJKZCywXeDH4UjSuqQwG57kKif6DhfQDx+HEh8vT+rnJBSad7+mwbQCCkIM0QpQWbasAKrvwQs2nRt0aBbFbHuAdhsKIiRxf6QsWN0oSJwJfp2YuUFTVOjjhc2GJBtZ6odaa5nqjR751PydESujWCZkiJnvSUiMLUAs4UyDvJZ9GiauBhDHSPLuQe98wLg9W9yt/q9ZhmiKyWU9OGcaNfWYfAHub0yr1uD/H2Xso7j5Wd9vRWe8X4hoQeoP5jByCpP7BBAQXvqkNqQm0g0cLD/5hCcoFsUIOWGCl/WB4anM+xhZEynSOjvJmWzkNqkGQgfFCr3QIRnvvx4OqU+VLGLdfzr3OutmZ7ymRxx1svq1G6b1BAqwoUuyO9N/QgJ5LUjQ6KEYNbxmUUnxsiVRneERCA/r9yx5AmEFIGy05b1Iwo0A2AK/k6GA8oKhuesZ9fYC4n9z+bIgOu618PAivuNckGOMSDmo01HAqx8yLvIl7WN328ybgmd4AR7IZlkIRc4eCCWaMCikV3QPl6yJ8PErbrC+cV5h9eJgVGCsfU2vKReCdo4AwkpzOnohWL+x2hFYczqKVslS7JtCCA2gC/1G9R6R+96oIRcghF8omYCCBuvrRTpYDUkLobVXTP3WxRGX4ie34vWpJ3e9dSb+nZC7AOm/Y0I0XWoxI5M3qFeCAn3VhleY2wZXVG4zbtJfPBXAJlIsHB837dzBevkWPBDifFPyqynfjqnm7FyF4Na46T1aw1a5O/deKGPFtRKgIPYM2zRgqj2CTo2dCKeEtu/7gbFjkqo4tZiutdblV3gAuQCjZIL1pgsPFFAA3OgI99d0zUklrEvpk6Xj/W/jkj2I2qQQTdWOIDKX1NirnxWq75/+vGCkxhvHi9QxuRgqgPNPhI1GDPyGxqFW3uLWsQK3H3AlPDD8j3vNeLtSFjcZfiVL1IlzfMyA5YvfcXtWIA9oQAmZE/LVqHXfdH3gbydusQmAVRl43BRiTW86ntn/YEGN6dhb4DFnUQt5IOt3ZMgJt2vj05wqy2UBq3QE9PJCvpC3l3wIH7QIszEuBXc8cXs6+6KXLbIKIS8gZIDIemcDGPE9shRGwDN5PP37YmJ8x778TJ13BU7sdaj1XHiRLmOX7pFzfTaWuq7o2Ed5QU4krv8gcu3rwrzXAQCvYvefX1Dnsm3wnCCnHMB/gnDsvmaryfKJ2ZisxCNOByrXDf1+43MLIctuQXshy33pwN3VSVT1kjsuvvIbl5MHQKXM4lVyEl8LZQtVKGXlZXFeFeT/RP8DlfZa3rLKpU0AAAAASUVORK5CYII=),pointer!important}html body *:not(.vlibras-ignore,.sr-only,.sr-only *,#vlibras-app-root *,#vlibras-app-wrapper *) .vlibras--active{text-decoration:underline!important}", Ep = Array.from([document.body, ...document.body.children]), Rp = He("#vlibras-app-root"), Pp = (e) => Se(e, ["IMG"]) ? e.alt : Eo(e) ? e.value : e.dataset.vlibrasGloss ? e.dataset.vlibrasGloss : e.dataset.vlibrasText ? e.dataset.vlibrasText : Se(e, ["SELECT"]) ? He(`[value="${e.value}"]`, e)?.innerText : e.innerText.trim() || "", Za = (e) => {
  let t = e;
  for (; t && !Ep.includes(t); ) {
    if (Ip(t) || t.onclick && !Op(t)) return t;
    t = t.parentNode;
  }
  return null;
}, Tr = (e) => Rp?.contains(e) || e.matches(".vlibras-links") ? !1 : Up(e) || Za(e) || Eo(e) || Tp(e) || Np(e), Se = (e, t) => t.includes(e.tagName), Ip = (e) => Se(e, ["A", "BUTTON"]), Eo = (e) => Se(e, "INPUT") && e.type === "submit", Tp = (e) => Se(e, "IMG") && e.alt && e.alt.trim(), Np = (e) => Se(e, "SELECT"), Op = (e) => Se(e, ["SVG", "PATH"]), Up = (e) => {
  const t = (r) => r.nodeType === Node.TEXT_NODE && r?.textContent?.trim();
  return Array.from(e.childNodes).some((r) => t(r));
}, Bp = (e) => {
  if (!e.parentElement) return;
  const t = He("input", e.parentElement);
  t && ["radio", "checkbox"].includes(t.type) && (t.checked = !t.checked);
}, Qp = (e, t) => {
  let r = null, o = 0;
  if (document.caretPositionFromPoint) {
    const m = document.caretPositionFromPoint(e, t);
    if (!m || !m.offsetNode) return null;
    r = m.offsetNode, o = m.offset;
  } else if (document.caretRangeFromPoint) {
    const m = document.caretRangeFromPoint(e, t);
    if (!m || !m.startContainer) return null;
    r = m.startContainer, o = m.startOffset;
  }
  if (!r || r.nodeType !== Node.TEXT_NODE) return null;
  const n = r.textContent ?? "";
  if (!n.trim()) return null;
  const i = n.slice(0, o), s = n.slice(o), l = i.match(/[\wÀ-ú’-]+$/), c = s.match(/^[\wÀ-ú’-]+/), u = `${l?.[0] ?? ""}${c?.[0] ?? ""}`;
  if (!u) return null;
  const p = o - (l?.[0]?.length ?? 0);
  return { word: u, node: r, offset: p };
}, Lp = (e) => {
  vr(`span.${e}`)?.forEach((t) => {
    const r = t.parentNode;
    if (!r) return;
    const o = document.createTextNode(t.textContent || "");
    r.replaceChild(o, t), r.normalize();
  });
}, Dp = (e) => {
  vr(`.${e}`)?.forEach((t) => t.classList.remove(e));
}, zp = ({ callback: e, isWordByWord: t, hoverClss: r, activeClass: o }) => {
  const n = (p) => {
    const m = p.target;
    (!(Tr(m) && t) || !Se(m, "IMG")) && m.classList.add(r);
  }, i = (p) => {
    !t || !r || io(() => {
      const m = p.target;
      if (!Tr(m)) return;
      Lp(r);
      const { word: d, node: g, offset: h } = Qp(p.clientX, p.clientY) || {};
      if (d && g && typeof h == "number") {
        const f = document.createRange();
        f.setStart(g, h), f.setEnd(g, h + d.length);
        const b = document.createElement("span");
        b.className = r, b.textContent = d, f.deleteContents(), f.insertNode(b);
      }
    });
  }, s = (p) => {
    const m = p.target, g = window.getSelection()?.toString().trim();
    if (Xt.set({ isActive: !1 }), Dp(o), g || m.classList.add(o), !Tr(m)) return;
    if (g && !t) return e?.({ text: g, element: m });
    if (p.preventDefault(), p.stopPropagation(), t && r) {
      const f = He(`.${r}`), b = f?.textContent?.trim();
      b && f && e?.({ text: b, element: f });
    } else {
      const f = !!m.dataset.vlibrasGloss?.trim(), b = Pp(m)?.trim();
      b && e?.({ text: b, element: m, isGloss: f });
    }
    const h = m.tagName === "A" ? m : Za(m);
    h && c(h, p), Se(m, "LABEL") ? Bp(m) : (Se(m, "BUTTON") || Eo(m)) && c(m, p);
  }, l = (p) => {
    p.target.classList.remove(r);
  }, c = (p, m) => {
    Xt.set({
      isActive: !0,
      event: m,
      type: p.tagName.toLowerCase() === "a" ? "link" : "button",
      onClick: () => {
        p.dispatchEvent(new MouseEvent("click", { bubbles: !0 })), Xt.set({ isActive: !1 });
      }
    });
  }, u = () => {
    document.body.removeEventListener("mousemove", i), document.body.removeEventListener("mouseover", n), document.body.removeEventListener("mouseout", l), document.body.removeEventListener("click", s, !0);
  };
  return t ? document.body.addEventListener("mousemove", i) : (document.body.addEventListener("mouseover", n), document.body.addEventListener("mouseout", l)), document.body.addEventListener("click", s, !0), u;
}, Mp = () => {
  const e = q((o) => o.isLoaded), t = H((o) => o.isOpen), { mutateAsync: r } = Xe();
  S(() => {
    e && (t ? aa(Cp, "@text-capture.style") : qi("@text-capture.style"));
  }, [t, e]), S(() => {
    if (!e) return;
    const o = zp({
      hoverClss: "vlibras--hover",
      activeClass: "vlibras--active",
      callback: async ({ text: n, isGloss: i }) => {
        if (ur(), i) return pe(n);
        const s = await r(n);
        er(), pe(s);
      }
    });
    return t || o?.(), () => o?.();
  }, [e, t]);
}, Fp = () => {
  const e = q((n) => n.isLoaded), { mutateAsync: t } = Xe(), r = async (n) => {
    const i = await t(n);
    pe(i);
  }, o = async (n) => await t(n);
  S(() => {
    if (typeof window > "u" || !e) return;
    window.plugin = window.plugin || {};
    const n = {
      ...yr(P.get(), "send"),
      ...yr(de.get(), "reset", "setLoaded"),
      ...yr(Hc, "setConfig")
    };
    window.vlibras = {
      ...n,
      translate: o,
      translateAndPlay: r
    }, window.plugin.translate = r, window.plugin.player = {
      ...n,
      changeAvatar: hr
    };
  }, [e]);
}, Vp = () => (Mp(), yp(), Fp(), xp(), Sp(), kp(), null), jp = ({ children: e, root: t }) => {
  const [r, o] = O(!1);
  return S(() => {
    t && xu(t, () => o(!0));
  }, [t]), r ? /* @__PURE__ */ a(wp, { root: t, children: /* @__PURE__ */ a(kd, { client: fp, children: [
    /* @__PURE__ */ a(Ap, {}),
    /* @__PURE__ */ a(Vp, {}),
    e
  ] }) }) : null;
}, { root: Nr, shadowRoot: vt, isRootActive: Tn } = Xi();
function Wp() {
  const { setOpen: e, isLoaded: t, setLoaded: r } = H(X("setOpen", "isLoaded", "setLoaded")), { path: o } = oa();
  return S(() => De.set({ root: Nr, shadowRoot: vt }), [Nr, vt]), S(() => {
    Ee.trackLoad();
  }, []), S(() => {
    if (!o || ((async () => (await Yi(o, vt), r(!0)))(), !t)) return;
    e(Tn());
    const n = new MutationObserver(() => e(Tn()));
    return n.observe(Nr, {
      attributes: !0,
      attributeFilter: ["data-active"]
    }), () => n.disconnect();
  }, [o, e, t, r]), t ? /* @__PURE__ */ a(jp, { root: vt, children: /* @__PURE__ */ a(gp, {}) }) : null;
}
it(/* @__PURE__ */ a(Wp, {}), vt);
