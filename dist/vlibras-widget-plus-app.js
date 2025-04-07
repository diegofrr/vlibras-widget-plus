var Ke, L, Bo, xe, ln, Do, qo, Fo, Ur, Rr, Ir, jo, We = {}, Uo = [], ei = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ye = Array.isArray;
function se(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function Vr(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function he(e, t, r) {
  var n, o, i, s = {};
  for (i in t) i == "key" ? n = t[i] : i == "ref" ? o = t[i] : s[i] = t[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Ke.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) s[i] === void 0 && (s[i] = e.defaultProps[i]);
  return Ge(e, s, n, o, null);
}
function Ge(e, t, r, n, o) {
  var i = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Bo, __i: -1, __u: 0 };
  return o == null && L.vnode != null && L.vnode(i), i;
}
function ti() {
  return { current: null };
}
function G(e) {
  return e.children;
}
function le(e, t) {
  this.props = e, this.context = t;
}
function Oe(e, t) {
  if (t == null) return e.__ ? Oe(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? Oe(e) : null;
}
function Vo(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) {
      e.__e = e.__c.base = r.__e;
      break;
    }
    return Vo(e);
  }
}
function Nr(e) {
  (!e.__d && (e.__d = !0) && xe.push(e) && !pt.__r++ || ln !== L.debounceRendering) && ((ln = L.debounceRendering) || Do)(pt);
}
function pt() {
  for (var e, t, r, n, o, i, s, u = 1; xe.length; ) xe.length > u && xe.sort(qo), e = xe.shift(), u = xe.length, e.__d && (r = void 0, o = (n = (t = e).__v).__e, i = [], s = [], t.__P && ((r = se({}, n)).__v = n.__v + 1, L.vnode && L.vnode(r), Zr(t.__P, r, n, t.__n, t.__P.namespaceURI, 32 & n.__u ? [o] : null, i, o ?? Oe(n), !!(32 & n.__u), s), r.__v = n.__v, r.__.__k[r.__i] = r, Wo(i, r, s), r.__e != o && Vo(r)));
  pt.__r = 0;
}
function Zo(e, t, r, n, o, i, s, u, l, c, p) {
  var d, f, h, x, y, S, A = n && n.__k || Uo, _ = t.length;
  for (l = ri(r, t, A, l, _), d = 0; d < _; d++) (h = r.__k[d]) != null && (f = h.__i === -1 ? We : A[h.__i] || We, h.__i = d, S = Zr(e, h, f, o, i, s, u, l, c, p), x = h.__e, h.ref && f.ref != h.ref && (f.ref && Gr(f.ref, null, h), p.push(h.ref, h.__c || x, h)), y == null && x != null && (y = x), 4 & h.__u || f.__k === h.__k ? l = Go(h, l, e) : typeof h.type == "function" && S !== void 0 ? l = S : x && (l = x.nextSibling), h.__u &= -7);
  return r.__e = y, l;
}
function ri(e, t, r, n, o) {
  var i, s, u, l, c, p = r.length, d = p, f = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (s = t[i]) != null && typeof s != "boolean" && typeof s != "function" ? (l = i + f, (s = e.__k[i] = typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? Ge(null, s, null, null, null) : Ye(s) ? Ge(G, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? Ge(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s).__ = e, s.__b = e.__b + 1, u = null, (c = s.__i = ni(s, r, l, d)) !== -1 && (d--, (u = r[c]) && (u.__u |= 2)), u == null || u.__v === null ? (c == -1 && (o > p ? f-- : o < p && f++), typeof s.type != "function" && (s.__u |= 4)) : c != l && (c == l - 1 ? f-- : c == l + 1 ? f++ : (c > l ? f-- : f++, s.__u |= 4))) : e.__k[i] = null;
  if (d) for (i = 0; i < p; i++) (u = r[i]) != null && (2 & u.__u) == 0 && (u.__e == n && (n = Oe(u)), Ko(u, u));
  return n;
}
function Go(e, t, r) {
  var n, o;
  if (typeof e.type == "function") {
    for (n = e.__k, o = 0; n && o < n.length; o++) n[o] && (n[o].__ = e, t = Go(n[o], t, r));
    return t;
  }
  e.__e != t && (t && e.type && !r.contains(t) && (t = Oe(e)), r.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function fe(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Ye(e) ? e.some(function(r) {
    fe(r, t);
  }) : t.push(e)), t;
}
function ni(e, t, r, n) {
  var o, i, s = e.key, u = e.type, l = t[r];
  if (l === null && e.key == null || l && s == l.key && u === l.type && (2 & l.__u) == 0) return r;
  if (n > (l != null && (2 & l.__u) == 0 ? 1 : 0)) for (o = r - 1, i = r + 1; o >= 0 || i < t.length; ) {
    if (o >= 0) {
      if ((l = t[o]) && (2 & l.__u) == 0 && s == l.key && u === l.type) return o;
      o--;
    }
    if (i < t.length) {
      if ((l = t[i]) && (2 & l.__u) == 0 && s == l.key && u === l.type) return i;
      i++;
    }
  }
  return -1;
}
function cn(e, t, r) {
  t[0] == "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || ei.test(t) ? r : r + "px";
}
function lt(e, t, r, n, o) {
  var i;
  e: if (t == "style") if (typeof r == "string") e.style.cssText = r;
  else {
    if (typeof n == "string" && (e.style.cssText = n = ""), n) for (t in n) r && t in r || cn(e.style, t, "");
    if (r) for (t in r) n && r[t] === n[t] || cn(e.style, t, r[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(Fo, "$1")), t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = r, r ? n ? r.t = n.t : (r.t = Ur, e.addEventListener(t, i ? Ir : Rr, i)) : e.removeEventListener(t, i ? Ir : Rr, i);
  else {
    if (o == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && r == 1 ? "" : r));
  }
}
function un(e) {
  return function(t) {
    if (this.l) {
      var r = this.l[t.type + e];
      if (t.u == null) t.u = Ur++;
      else if (t.u < r.t) return;
      return r(L.event ? L.event(t) : t);
    }
  };
}
function Zr(e, t, r, n, o, i, s, u, l, c) {
  var p, d, f, h, x, y, S, A, _, g, m, C, v, k, R, N, W, T = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && (l = !!(32 & r.__u), i = [u = t.__e = r.__e]), (p = L.__b) && p(t);
  e: if (typeof T == "function") try {
    if (A = t.props, _ = "prototype" in T && T.prototype.render, g = (p = T.contextType) && n[p.__c], m = p ? g ? g.props.value : p.__ : n, r.__c ? S = (d = t.__c = r.__c).__ = d.__E : (_ ? t.__c = d = new T(A, m) : (t.__c = d = new le(A, m), d.constructor = T, d.render = ii), g && g.sub(d), d.props = A, d.state || (d.state = {}), d.context = m, d.__n = n, f = d.__d = !0, d.__h = [], d._sb = []), _ && d.__s == null && (d.__s = d.state), _ && T.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = se({}, d.__s)), se(d.__s, T.getDerivedStateFromProps(A, d.__s))), h = d.props, x = d.state, d.__v = t, f) _ && T.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), _ && d.componentDidMount != null && d.__h.push(d.componentDidMount);
    else {
      if (_ && T.getDerivedStateFromProps == null && A !== h && d.componentWillReceiveProps != null && d.componentWillReceiveProps(A, m), !d.__e && (d.shouldComponentUpdate != null && d.shouldComponentUpdate(A, d.__s, m) === !1 || t.__v == r.__v)) {
        for (t.__v != r.__v && (d.props = A, d.state = d.__s, d.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(z) {
          z && (z.__ = t);
        }), C = 0; C < d._sb.length; C++) d.__h.push(d._sb[C]);
        d._sb = [], d.__h.length && s.push(d);
        break e;
      }
      d.componentWillUpdate != null && d.componentWillUpdate(A, d.__s, m), _ && d.componentDidUpdate != null && d.__h.push(function() {
        d.componentDidUpdate(h, x, y);
      });
    }
    if (d.context = m, d.props = A, d.__P = e, d.__e = !1, v = L.__r, k = 0, _) {
      for (d.state = d.__s, d.__d = !1, v && v(t), p = d.render(d.props, d.state, d.context), R = 0; R < d._sb.length; R++) d.__h.push(d._sb[R]);
      d._sb = [];
    } else do
      d.__d = !1, v && v(t), p = d.render(d.props, d.state, d.context), d.state = d.__s;
    while (d.__d && ++k < 25);
    d.state = d.__s, d.getChildContext != null && (n = se(se({}, n), d.getChildContext())), _ && !f && d.getSnapshotBeforeUpdate != null && (y = d.getSnapshotBeforeUpdate(h, x)), N = p, p != null && p.type === G && p.key == null && (N = Xo(p.props.children)), u = Zo(e, Ye(N) ? N : [N], t, r, n, o, i, s, u, l, c), d.base = t.__e, t.__u &= -161, d.__h.length && s.push(d), S && (d.__E = d.__ = null);
  } catch (z) {
    if (t.__v = null, l || i != null) if (z.then) {
      for (t.__u |= l ? 160 : 128; u && u.nodeType == 8 && u.nextSibling; ) u = u.nextSibling;
      i[i.indexOf(u)] = null, t.__e = u;
    } else for (W = i.length; W--; ) Vr(i[W]);
    else t.__e = r.__e, t.__k = r.__k;
    L.__e(z, t, r);
  }
  else i == null && t.__v == r.__v ? (t.__k = r.__k, t.__e = r.__e) : u = t.__e = oi(r.__e, t, r, n, o, i, s, l, c);
  return (p = L.diffed) && p(t), 128 & t.__u ? void 0 : u;
}
function Wo(e, t, r) {
  for (var n = 0; n < r.length; n++) Gr(r[n], r[++n], r[++n]);
  L.__c && L.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      L.__e(i, o.__v);
    }
  });
}
function Xo(e) {
  return typeof e != "object" || e == null ? e : Ye(e) ? e.map(Xo) : se({}, e);
}
function oi(e, t, r, n, o, i, s, u, l) {
  var c, p, d, f, h, x, y, S = r.props, A = t.props, _ = t.type;
  if (_ == "svg" ? o = "http://www.w3.org/2000/svg" : _ == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (c = 0; c < i.length; c++) if ((h = i[c]) && "setAttribute" in h == !!_ && (_ ? h.localName == _ : h.nodeType == 3)) {
      e = h, i[c] = null;
      break;
    }
  }
  if (e == null) {
    if (_ == null) return document.createTextNode(A);
    e = document.createElementNS(o, _, A.is && A), u && (L.__m && L.__m(t, i), u = !1), i = null;
  }
  if (_ === null) S === A || u && e.data === A || (e.data = A);
  else {
    if (i = i && Ke.call(e.childNodes), S = r.props || We, !u && i != null) for (S = {}, c = 0; c < e.attributes.length; c++) S[(h = e.attributes[c]).name] = h.value;
    for (c in S) if (h = S[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") d = h;
      else if (!(c in A)) {
        if (c == "value" && "defaultValue" in A || c == "checked" && "defaultChecked" in A) continue;
        lt(e, c, null, h, o);
      }
    }
    for (c in A) h = A[c], c == "children" ? f = h : c == "dangerouslySetInnerHTML" ? p = h : c == "value" ? x = h : c == "checked" ? y = h : u && typeof h != "function" || S[c] === h || lt(e, c, h, S[c], o);
    if (p) u || d && (p.__html === d.__html || p.__html === e.innerHTML) || (e.innerHTML = p.__html), t.__k = [];
    else if (d && (e.innerHTML = ""), Zo(t.type === "template" ? e.content : e, Ye(f) ? f : [f], t, r, n, _ == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, s, i ? i[0] : r.__k && Oe(r, 0), u, l), i != null) for (c = i.length; c--; ) Vr(i[c]);
    u || (c = "value", _ == "progress" && x == null ? e.removeAttribute("value") : x !== void 0 && (x !== e[c] || _ == "progress" && !x || _ == "option" && x !== S[c]) && lt(e, c, x, S[c], o), c = "checked", y !== void 0 && y !== e[c] && lt(e, c, y, S[c], o));
  }
  return e;
}
function Gr(e, t, r) {
  try {
    if (typeof e == "function") {
      var n = typeof e.__u == "function";
      n && e.__u(), n && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (o) {
    L.__e(o, r);
  }
}
function Ko(e, t, r) {
  var n, o;
  if (L.unmount && L.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || Gr(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (i) {
      L.__e(i, t);
    }
    n.base = n.__P = null;
  }
  if (n = e.__k) for (o = 0; o < n.length; o++) n[o] && Ko(n[o], t, r || typeof e.type != "function");
  r || Vr(e.__e), e.__c = e.__ = e.__e = void 0;
}
function ii(e, t, r) {
  return this.constructor(e, r);
}
function ke(e, t, r) {
  var n, o, i, s;
  t == document && (t = document.documentElement), L.__ && L.__(e, t), o = (n = typeof r == "function") ? null : r && r.__k || t.__k, i = [], s = [], Zr(t, e = (!n && r || t).__k = he(G, null, [e]), o || We, We, t.namespaceURI, !n && r ? [r] : o ? null : t.firstChild ? Ke.call(t.childNodes) : null, i, !n && r ? r : o ? o.__e : t.firstChild, n, s), Wo(i, e, s);
}
function Yo(e, t) {
  ke(e, t, Yo);
}
function ai(e, t, r) {
  var n, o, i, s, u = se({}, e.props);
  for (i in e.type && e.type.defaultProps && (s = e.type.defaultProps), t) i == "key" ? n = t[i] : i == "ref" ? o = t[i] : u[i] = t[i] === void 0 && s !== void 0 ? s[i] : t[i];
  return arguments.length > 2 && (u.children = arguments.length > 3 ? Ke.call(arguments, 2) : r), Ge(e.type, u, n || e.key, o || e.ref, null);
}
function si(e) {
  function t(r) {
    var n, o;
    return this.getChildContext || (n = /* @__PURE__ */ new Set(), (o = {})[t.__c] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value !== i.value && n.forEach(function(s) {
        s.__e = !0, Nr(s);
      });
    }, this.sub = function(i) {
      n.add(i);
      var s = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        n && n.delete(i), s && s.call(i);
      };
    }), r.children;
  }
  return t.__c = "__cC" + jo++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(r, n) {
    return r.children(n);
  }).contextType = t, t;
}
Ke = Uo.slice, L = { __e: function(e, t, r, n) {
  for (var o, i, s; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), s = o.__d), s) return o.__E = o;
  } catch (u) {
    e = u;
  }
  throw e;
} }, Bo = 0, le.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = se({}, this.state), typeof e == "function" && (e = e(se({}, r), this.props)), e && se(r, e), e != null && this.__v && (t && this._sb.push(t), Nr(this));
}, le.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Nr(this));
}, le.prototype.render = G, xe = [], Do = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, qo = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, pt.__r = 0, Fo = /(PointerCapture)$|Capture$/i, Ur = 0, Rr = un(!1), Ir = un(!0), jo = 0;
var li = 0;
function a(e, t, r, n, o, i) {
  t || (t = {});
  var s, u, l = t;
  if ("ref" in l) for (u in l = {}, t) u == "ref" ? s = t[u] : l[u] = t[u];
  var c = { type: e, props: l, key: r, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --li, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (s = e.defaultProps)) for (u in s) l[u] === void 0 && (l[u] = s[u]);
  return L.vnode && L.vnode(c), c;
}
var Ce, $, Ct, dn, $e = 0, Qo = [], B = L, pn = B.__b, fn = B.__r, hn = B.diffed, gn = B.__c, vn = B.unmount, mn = B.__;
function Te(e, t) {
  B.__h && B.__h($, e, $e || t), $e = 0;
  var r = $.__H || ($.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function F(e) {
  return $e = 1, Wr(n1, e);
}
function Wr(e, t, r) {
  var n = Te(Ce++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : n1(void 0, t), function(u) {
    var l = n.__N ? n.__N[0] : n.__[0], c = n.t(l, u);
    l !== c && (n.__N = [c, n.__[1]], n.__c.setState({}));
  }], n.__c = $, !$.__f)) {
    var o = function(u, l, c) {
      if (!n.__c.__H) return !0;
      var p = n.__c.__H.__.filter(function(f) {
        return !!f.__c;
      });
      if (p.every(function(f) {
        return !f.__N;
      })) return !i || i.call(this, u, l, c);
      var d = n.__c.props !== u;
      return p.forEach(function(f) {
        if (f.__N) {
          var h = f.__[0];
          f.__ = f.__N, f.__N = void 0, h !== f.__[0] && (d = !0);
        }
      }), i && i.call(this, u, l, c) || d;
    };
    $.__f = !0;
    var i = $.shouldComponentUpdate, s = $.componentWillUpdate;
    $.componentWillUpdate = function(u, l, c) {
      if (this.__e) {
        var p = i;
        i = void 0, o(u, l, c), i = p;
      }
      s && s.call(this, u, l, c);
    }, $.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function M(e, t) {
  var r = Te(Ce++, 3);
  !B.__s && Xr(r.__H, t) && (r.__ = e, r.u = t, $.__H.__h.push(r));
}
function Qe(e, t) {
  var r = Te(Ce++, 4);
  !B.__s && Xr(r.__H, t) && (r.__ = e, r.u = t, $.__h.push(r));
}
function ne(e) {
  return $e = 5, ft(function() {
    return { current: e };
  }, []);
}
function Jo(e, t, r) {
  $e = 6, Qe(function() {
    if (typeof e == "function") {
      var n = e(t());
      return function() {
        e(null), n && typeof n == "function" && n();
      };
    }
    if (e) return e.current = t(), function() {
      return e.current = null;
    };
  }, r == null ? r : r.concat(e));
}
function ft(e, t) {
  var r = Te(Ce++, 7);
  return Xr(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__;
}
function ht(e, t) {
  return $e = 8, ft(function() {
    return e;
  }, t);
}
function e1(e) {
  var t = $.context[e.__c], r = Te(Ce++, 9);
  return r.c = e, t ? (r.__ == null && (r.__ = !0, t.sub($)), t.props.value) : e.__;
}
function t1(e, t) {
  B.useDebugValue && B.useDebugValue(t ? t(e) : e);
}
function r1() {
  var e = Te(Ce++, 11);
  if (!e.__) {
    for (var t = $.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var r = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + r[0] + "-" + r[1]++;
  }
  return e.__;
}
function ci() {
  for (var e; e = Qo.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(ut), e.__H.__h.forEach(Or), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], B.__e(t, e.__v);
  }
}
B.__b = function(e) {
  $ = null, pn && pn(e);
}, B.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), mn && mn(e, t);
}, B.__r = function(e) {
  fn && fn(e), Ce = 0;
  var t = ($ = e.__c).__H;
  t && (Ct === $ ? (t.__h = [], $.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (t.__h.forEach(ut), t.__h.forEach(Or), t.__h = [], Ce = 0)), Ct = $;
}, B.diffed = function(e) {
  hn && hn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Qo.push(t) !== 1 && dn === B.requestAnimationFrame || ((dn = B.requestAnimationFrame) || ui)(ci)), t.__H.__.forEach(function(r) {
    r.u && (r.__H = r.u), r.u = void 0;
  })), Ct = $ = null;
}, B.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(ut), r.__h = r.__h.filter(function(n) {
        return !n.__ || Or(n);
      });
    } catch (n) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], B.__e(n, r.__v);
    }
  }), gn && gn(e, t);
}, B.unmount = function(e) {
  vn && vn(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      ut(n);
    } catch (o) {
      t = o;
    }
  }), r.__H = void 0, t && B.__e(t, r.__v));
};
var yn = typeof requestAnimationFrame == "function";
function ui(e) {
  var t, r = function() {
    clearTimeout(n), yn && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  yn && (t = requestAnimationFrame(r));
}
function ut(e) {
  var t = $, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), $ = t;
}
function Or(e) {
  var t = $;
  e.__c = e.__(), $ = t;
}
function Xr(e, t) {
  return !e || e.length !== t.length || t.some(function(r, n) {
    return r !== e[n];
  });
}
function n1(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const Cn = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (c, p) => {
    const d = typeof c == "function" ? c(t) : c;
    if (!Object.is(d, t)) {
      const f = t;
      t = p ?? (typeof d != "object" || d === null) ? d : Object.assign({}, t, d), r.forEach((h) => h(t, f));
    }
  }, o = () => t, u = { setState: n, getState: o, getInitialState: () => l, subscribe: (c) => (r.add(c), () => r.delete(c)) }, l = t = e(n, o, u);
  return u;
}, di = (e) => e ? Cn(e) : Cn;
function o1(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function $r(e, t) {
  for (var r in e) if (r !== "__source" && !(r in t)) return !0;
  for (var n in t) if (n !== "__source" && e[n] !== t[n]) return !0;
  return !1;
}
function i1(e, t) {
  var r = t(), n = F({ t: { __: r, u: t } }), o = n[0].t, i = n[1];
  return Qe(function() {
    o.__ = r, o.u = t, _t(o) && i({ t: o });
  }, [e, r, t]), M(function() {
    return _t(o) && i({ t: o }), e(function() {
      _t(o) && i({ t: o });
    });
  }, [e]), r;
}
function _t(e) {
  var t, r, n = e.u, o = e.__;
  try {
    var i = n();
    return !((t = o) === (r = i) && (t !== 0 || 1 / t == 1 / r) || t != t && r != r);
  } catch {
    return !0;
  }
}
function a1(e) {
  e();
}
function s1(e) {
  return e;
}
function l1() {
  return [!1, a1];
}
var c1 = Qe;
function zr(e, t) {
  this.props = e, this.context = t;
}
function pi(e, t) {
  function r(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !s : $r(this.props, o);
  }
  function n(o) {
    return this.shouldComponentUpdate = r, he(e, o);
  }
  return n.displayName = "Memo(" + (e.displayName || e.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n;
}
(zr.prototype = new le()).isPureReactComponent = !0, zr.prototype.shouldComponentUpdate = function(e, t) {
  return $r(this.props, e) || $r(this.state, t);
};
var _n = L.__b;
L.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), _n && _n(e);
};
var fi = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function ue(e) {
  function t(r) {
    var n = o1({}, r);
    return delete n.ref, e(n, r.ref || null);
  }
  return t.$$typeof = fi, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var bn = function(e, t) {
  return e == null ? null : fe(fe(e).map(t));
}, hi = { map: bn, forEach: bn, count: function(e) {
  return e ? fe(e).length : 0;
}, only: function(e) {
  var t = fe(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: fe }, gi = L.__e;
L.__e = function(e, t, r, n) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = r.__e, t.__k = r.__k), o.__c(e, t);
  }
  gi(e, t, r, n);
};
var wn = L.unmount;
function u1(e, t, r) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), e.__c.__H = null), (e = o1({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
    return u1(n, t, r);
  })), e;
}
function d1(e, t, r) {
  return e && r && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
    return d1(n, t, r);
  }), e.__c && e.__c.__P === t && (e.__e && r.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = r)), e;
}
function dt() {
  this.__u = 0, this.o = null, this.__b = null;
}
function p1(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function vi(e) {
  var t, r, n;
  function o(i) {
    if (t || (t = e()).then(function(s) {
      r = s.default || s;
    }, function(s) {
      n = s;
    }), n) throw n;
    if (!r) throw t;
    return he(r, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Ze() {
  this.i = null, this.l = null;
}
L.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), wn && wn(e);
}, (dt.prototype = new le()).__c = function(e, t) {
  var r = t.__c, n = this;
  n.o == null && (n.o = []), n.o.push(r);
  var o = p1(n.__v), i = !1, s = function() {
    i || (i = !0, r.__R = null, o ? o(u) : u());
  };
  r.__R = s;
  var u = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var l = n.state.__a;
        n.__v.__k[0] = d1(l, l.__c.__P, l.__c.__O);
      }
      var c;
      for (n.setState({ __a: n.__b = null }); c = n.o.pop(); ) c.forceUpdate();
    }
  };
  n.__u++ || 32 & t.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(s, s);
}, dt.prototype.componentWillUnmount = function() {
  this.o = [];
}, dt.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = u1(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var o = t.__a && he(G, null, e.fallback);
  return o && (o.__u &= -33), [he(G, null, t.__a ? null : e.children), o];
};
var xn = function(e, t, r) {
  if (++r[1] === r[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (r = e.i; r; ) {
    for (; r.length > 3; ) r.pop()();
    if (r[1] < r[0]) break;
    e.i = r = r[2];
  }
};
function mi(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function yi(e) {
  var t = this, r = e.h;
  t.componentWillUnmount = function() {
    ke(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== r && t.componentWillUnmount(), t.v || (t.h = r, t.v = { nodeType: 1, parentNode: r, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(n) {
    this.childNodes.push(n), t.h.appendChild(n);
  }, insertBefore: function(n, o) {
    this.childNodes.push(n), t.h.insertBefore(n, o);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.h.removeChild(n);
  } }), ke(he(mi, { context: t.context }, e.__v), t.v);
}
function Ci(e, t) {
  var r = he(yi, { __v: e, h: t });
  return r.containerInfo = t, r;
}
(Ze.prototype = new le()).__a = function(e) {
  var t = this, r = p1(t.__v), n = t.l.get(e);
  return n[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (n.push(o), xn(t, e, n)) : o();
    };
    r ? r(i) : i();
  };
}, Ze.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = fe(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var r = t.length; r--; ) this.l.set(t[r], this.i = [1, 0, this.i]);
  return e.children;
}, Ze.prototype.componentDidUpdate = Ze.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, r) {
    xn(e, r, t);
  });
};
var f1 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, _i = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, bi = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, wi = /[A-Z0-9]/g, xi = typeof document < "u", Ai = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function ki(e, t, r) {
  return t.__k == null && (t.textContent = ""), ke(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
function Si(e, t, r) {
  return Yo(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
le.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(le.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var An = L.event;
function Li() {
}
function Mi() {
  return this.cancelBubble;
}
function Pi() {
  return this.defaultPrevented;
}
L.event = function(e) {
  return An && (e = An(e)), e.persist = Li, e.isPropagationStopped = Mi, e.isDefaultPrevented = Pi, e.nativeEvent = e;
};
var Kr, Ei = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, kn = L.vnode;
L.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var r = t.props, n = t.type, o = {}, i = n.indexOf("-") === -1;
    for (var s in r) {
      var u = r[s];
      if (!(s === "value" && "defaultValue" in r && u == null || xi && s === "children" && n === "noscript" || s === "class" || s === "className")) {
        var l = s.toLowerCase();
        s === "defaultValue" && "value" in r && r.value == null ? s = "value" : s === "download" && u === !0 ? u = "" : l === "translate" && u === "no" ? u = !1 : l[0] === "o" && l[1] === "n" ? l === "ondoubleclick" ? s = "ondblclick" : l !== "onchange" || n !== "input" && n !== "textarea" || Ai(r.type) ? l === "onfocus" ? s = "onfocusin" : l === "onblur" ? s = "onfocusout" : bi.test(s) && (s = l) : l = s = "oninput" : i && _i.test(s) ? s = s.replace(wi, "-$&").toLowerCase() : u === null && (u = void 0), l === "oninput" && o[s = l] && (s = "oninputCapture"), o[s] = u;
      }
    }
    n == "select" && o.multiple && Array.isArray(o.value) && (o.value = fe(r.children).forEach(function(c) {
      c.props.selected = o.value.indexOf(c.props.value) != -1;
    })), n == "select" && o.defaultValue != null && (o.value = fe(r.children).forEach(function(c) {
      c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value;
    })), r.class && !r.className ? (o.class = r.class, Object.defineProperty(o, "className", Ei)) : (r.className && !r.class || r.class && r.className) && (o.class = o.className = r.className), t.props = o;
  }(e), e.$$typeof = f1, kn && kn(e);
};
var Sn = L.__r;
L.__r = function(e) {
  Sn && Sn(e), Kr = e.__c;
};
var Ln = L.diffed;
L.diffed = function(e) {
  Ln && Ln(e);
  var t = e.props, r = e.__e;
  r != null && e.type === "textarea" && "value" in t && t.value !== r.value && (r.value = t.value == null ? "" : t.value), Kr = null;
};
var Ri = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return Kr.__n[e.__c].props.value;
}, useCallback: ht, useContext: e1, useDebugValue: t1, useDeferredValue: s1, useEffect: M, useId: r1, useImperativeHandle: Jo, useInsertionEffect: c1, useLayoutEffect: Qe, useMemo: ft, useReducer: Wr, useRef: ne, useState: F, useSyncExternalStore: i1, useTransition: l1 } } };
function Ii(e) {
  return he.bind(null, e);
}
function gt(e) {
  return !!e && e.$$typeof === f1;
}
function Ni(e) {
  return gt(e) && e.type === G;
}
function Oi(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function $i(e) {
  return gt(e) ? ai.apply(null, arguments) : e;
}
function zi(e) {
  return !!e.__k && (ke(null, e), !0);
}
function Ti(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var Hi = function(e, t) {
  return e(t);
}, Bi = function(e, t) {
  return e(t);
}, Di = G, qi = gt, Mn = { useState: F, useId: r1, useReducer: Wr, useEffect: M, useLayoutEffect: Qe, useInsertionEffect: c1, useTransition: l1, useDeferredValue: s1, useSyncExternalStore: i1, startTransition: a1, useRef: ne, useImperativeHandle: Jo, useMemo: ft, useCallback: ht, useContext: e1, useDebugValue: t1, version: "18.3.1", Children: hi, render: ki, hydrate: Si, unmountComponentAtNode: zi, createPortal: Ci, createElement: he, createContext: si, createFactory: Ii, cloneElement: $i, createRef: ti, Fragment: G, isValidElement: gt, isElement: qi, isFragment: Ni, isMemo: Oi, findDOMNode: Ti, Component: le, PureComponent: zr, memo: pi, forwardRef: ue, flushSync: Bi, unstable_batchedUpdates: Hi, StrictMode: Di, Suspense: dt, SuspenseList: Ze, lazy: vi, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ri };
const Fi = (e) => e;
function ji(e, t = Fi) {
  const r = Mn.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return Mn.useDebugValue(r), r;
}
const Pn = (e) => {
  const t = di(e), r = (n) => ji(t, n);
  return Object.assign(r, t), r;
}, Je = (e) => e ? Pn(e) : Pn;
function Ui(e, t) {
  let r;
  try {
    r = e();
  } catch {
    return;
  }
  return {
    getItem: (o) => {
      var i;
      const s = (l) => l === null ? null : JSON.parse(l, void 0), u = (i = r.getItem(o)) != null ? i : null;
      return u instanceof Promise ? u.then(s) : s(u);
    },
    setItem: (o, i) => r.setItem(
      o,
      JSON.stringify(i, void 0)
    ),
    removeItem: (o) => r.removeItem(o)
  };
}
const Tr = (e) => (t) => {
  try {
    const r = e(t);
    return r instanceof Promise ? r : {
      then(n) {
        return Tr(n)(r);
      },
      catch(n) {
        return this;
      }
    };
  } catch (r) {
    return {
      then(n) {
        return this;
      },
      catch(n) {
        return Tr(n)(r);
      }
    };
  }
}, Vi = (e, t) => (r, n, o) => {
  let i = {
    storage: Ui(() => localStorage),
    partialize: (y) => y,
    version: 0,
    merge: (y, S) => ({
      ...S,
      ...y
    }),
    ...t
  }, s = !1;
  const u = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  let c = i.storage;
  if (!c)
    return e(
      (...y) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), r(...y);
      },
      n,
      o
    );
  const p = () => {
    const y = i.partialize({ ...n() });
    return c.setItem(i.name, {
      state: y,
      version: i.version
    });
  }, d = o.setState;
  o.setState = (y, S) => {
    d(y, S), p();
  };
  const f = e(
    (...y) => {
      r(...y), p();
    },
    n,
    o
  );
  o.getInitialState = () => f;
  let h;
  const x = () => {
    var y, S;
    if (!c) return;
    s = !1, u.forEach((_) => {
      var g;
      return _((g = n()) != null ? g : f);
    });
    const A = ((S = i.onRehydrateStorage) == null ? void 0 : S.call(i, (y = n()) != null ? y : f)) || void 0;
    return Tr(c.getItem.bind(c))(i.name).then((_) => {
      if (_)
        if (typeof _.version == "number" && _.version !== i.version) {
          if (i.migrate) {
            const g = i.migrate(
              _.state,
              _.version
            );
            return g instanceof Promise ? g.then((m) => [!0, m]) : [!0, g];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, _.state];
      return [!1, void 0];
    }).then((_) => {
      var g;
      const [m, C] = _;
      if (h = i.merge(
        C,
        (g = n()) != null ? g : f
      ), r(h, !0), m)
        return p();
    }).then(() => {
      A == null || A(h, void 0), h = n(), s = !0, l.forEach((_) => _(h));
    }).catch((_) => {
      A == null || A(void 0, _);
    });
  };
  return o.persist = {
    setOptions: (y) => {
      i = {
        ...i,
        ...y
      }, y.storage && (c = y.storage);
    },
    clearStorage: () => {
      c == null || c.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => x(),
    hasHydrated: () => s,
    onHydrate: (y) => (u.add(y), () => {
      u.delete(y);
    }),
    onFinishHydration: (y) => (l.add(y), () => {
      l.delete(y);
    })
  }, i.skipHydration || x(), h || f;
}, h1 = Vi;
function Zi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bt, En;
function g1() {
  if (En) return bt;
  En = 1;
  var e = Object.prototype.toString;
  return bt = function(r) {
    var n = e.call(r), o = n === "[object Arguments]";
    return o || (o = n !== "[object Array]" && r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && e.call(r.callee) === "[object Function]"), o;
  }, bt;
}
var wt, Rn;
function Gi() {
  if (Rn) return wt;
  Rn = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, n = g1(), o = Object.prototype.propertyIsEnumerable, i = !o.call({ toString: null }, "toString"), s = o.call(function() {
    }, "prototype"), u = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], l = function(f) {
      var h = f.constructor;
      return h && h.prototype === f;
    }, c = {
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
      for (var f in window)
        try {
          if (!c["$" + f] && t.call(window, f) && window[f] !== null && typeof window[f] == "object")
            try {
              l(window[f]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), d = function(f) {
      if (typeof window > "u" || !p)
        return l(f);
      try {
        return l(f);
      } catch {
        return !1;
      }
    };
    e = function(h) {
      var x = h !== null && typeof h == "object", y = r.call(h) === "[object Function]", S = n(h), A = x && r.call(h) === "[object String]", _ = [];
      if (!x && !y && !S)
        throw new TypeError("Object.keys called on a non-object");
      var g = s && y;
      if (A && h.length > 0 && !t.call(h, 0))
        for (var m = 0; m < h.length; ++m)
          _.push(String(m));
      if (S && h.length > 0)
        for (var C = 0; C < h.length; ++C)
          _.push(String(C));
      else
        for (var v in h)
          !(g && v === "prototype") && t.call(h, v) && _.push(String(v));
      if (i)
        for (var k = d(h), R = 0; R < u.length; ++R)
          !(k && u[R] === "constructor") && t.call(h, u[R]) && _.push(u[R]);
      return _;
    };
  }
  return wt = e, wt;
}
var xt, In;
function Wi() {
  if (In) return xt;
  In = 1;
  var e = Array.prototype.slice, t = g1(), r = Object.keys, n = r ? function(s) {
    return r(s);
  } : Gi(), o = Object.keys;
  return n.shim = function() {
    if (Object.keys) {
      var s = function() {
        var u = Object.keys(arguments);
        return u && u.length === arguments.length;
      }(1, 2);
      s || (Object.keys = function(l) {
        return t(l) ? o(e.call(l)) : o(l);
      });
    } else
      Object.keys = n;
    return Object.keys || n;
  }, xt = n, xt;
}
var At, Nn;
function vt() {
  if (Nn) return At;
  Nn = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return At = e, At;
}
var kt, On;
function v1() {
  return On || (On = 1, kt = SyntaxError), kt;
}
var St, $n;
function et() {
  return $n || ($n = 1, St = TypeError), St;
}
var Lt, zn;
function Xi() {
  return zn || (zn = 1, Lt = Object.getOwnPropertyDescriptor), Lt;
}
var Mt, Tn;
function mt() {
  if (Tn) return Mt;
  Tn = 1;
  var e = /* @__PURE__ */ Xi();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Mt = e, Mt;
}
var Pt, Hn;
function m1() {
  if (Hn) return Pt;
  Hn = 1;
  var e = /* @__PURE__ */ vt(), t = /* @__PURE__ */ v1(), r = /* @__PURE__ */ et(), n = /* @__PURE__ */ mt();
  return Pt = function(i, s, u) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new r("`obj` must be an object or a function`");
    if (typeof s != "string" && typeof s != "symbol")
      throw new r("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
      throw new r("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
      throw new r("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
      throw new r("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
      throw new r("`loose`, if provided, must be a boolean");
    var l = arguments.length > 3 ? arguments[3] : null, c = arguments.length > 4 ? arguments[4] : null, p = arguments.length > 5 ? arguments[5] : null, d = arguments.length > 6 ? arguments[6] : !1, f = !!n && n(i, s);
    if (e)
      e(i, s, {
        configurable: p === null && f ? f.configurable : !p,
        enumerable: l === null && f ? f.enumerable : !l,
        value: u,
        writable: c === null && f ? f.writable : !c
      });
    else if (d || !l && !c && !p)
      i[s] = u;
    else
      throw new t("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, Pt;
}
var Et, Bn;
function y1() {
  if (Bn) return Et;
  Bn = 1;
  var e = /* @__PURE__ */ vt(), t = function() {
    return !!e;
  };
  return t.hasArrayLengthDefineBug = function() {
    if (!e)
      return null;
    try {
      return e([], "length", { value: 1 }).length !== 1;
    } catch {
      return !0;
    }
  }, Et = t, Et;
}
var Rt, Dn;
function C1() {
  if (Dn) return Rt;
  Dn = 1;
  var e = Wi(), t = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", r = Object.prototype.toString, n = Array.prototype.concat, o = /* @__PURE__ */ m1(), i = function(c) {
    return typeof c == "function" && r.call(c) === "[object Function]";
  }, s = /* @__PURE__ */ y1()(), u = function(c, p, d, f) {
    if (p in c) {
      if (f === !0) {
        if (c[p] === d)
          return;
      } else if (!i(f) || !f())
        return;
    }
    s ? o(c, p, d, !0) : o(c, p, d);
  }, l = function(c, p) {
    var d = arguments.length > 2 ? arguments[2] : {}, f = e(p);
    t && (f = n.call(f, Object.getOwnPropertySymbols(p)));
    for (var h = 0; h < f.length; h += 1)
      u(c, f[h], p[f[h]], d[f[h]]);
  };
  return l.supportsDescriptors = !!s, Rt = l, Rt;
}
var It = { exports: {} }, Nt, qn;
function _1() {
  return qn || (qn = 1, Nt = Object), Nt;
}
var Ot, Fn;
function Ki() {
  return Fn || (Fn = 1, Ot = Error), Ot;
}
var $t, jn;
function Yi() {
  return jn || (jn = 1, $t = EvalError), $t;
}
var zt, Un;
function Qi() {
  return Un || (Un = 1, zt = RangeError), zt;
}
var Tt, Vn;
function Ji() {
  return Vn || (Vn = 1, Tt = ReferenceError), Tt;
}
var Ht, Zn;
function ea() {
  return Zn || (Zn = 1, Ht = URIError), Ht;
}
var Bt, Gn;
function ta() {
  return Gn || (Gn = 1, Bt = Math.abs), Bt;
}
var Dt, Wn;
function ra() {
  return Wn || (Wn = 1, Dt = Math.floor), Dt;
}
var qt, Xn;
function na() {
  return Xn || (Xn = 1, qt = Math.max), qt;
}
var Ft, Kn;
function oa() {
  return Kn || (Kn = 1, Ft = Math.min), Ft;
}
var jt, Yn;
function ia() {
  return Yn || (Yn = 1, jt = Math.pow), jt;
}
var Ut, Qn;
function aa() {
  return Qn || (Qn = 1, Ut = Math.round), Ut;
}
var Vt, Jn;
function sa() {
  return Jn || (Jn = 1, Vt = Number.isNaN || function(t) {
    return t !== t;
  }), Vt;
}
var Zt, eo;
function la() {
  if (eo) return Zt;
  eo = 1;
  var e = /* @__PURE__ */ sa();
  return Zt = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, Zt;
}
var Gt, to;
function ca() {
  return to || (to = 1, Gt = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var o = 42;
    t[r] = o;
    for (var i in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var s = Object.getOwnPropertySymbols(t);
    if (s.length !== 1 || s[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var u = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (u.value !== o || u.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Gt;
}
var Wt, ro;
function ua() {
  if (ro) return Wt;
  ro = 1;
  var e = typeof Symbol < "u" && Symbol, t = ca();
  return Wt = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Wt;
}
var Xt, no;
function b1() {
  return no || (no = 1, Xt = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Xt;
}
var Kt, oo;
function w1() {
  if (oo) return Kt;
  oo = 1;
  var e = /* @__PURE__ */ _1();
  return Kt = e.getPrototypeOf || null, Kt;
}
var Yt, io;
function da() {
  if (io) return Yt;
  io = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", o = function(l, c) {
    for (var p = [], d = 0; d < l.length; d += 1)
      p[d] = l[d];
    for (var f = 0; f < c.length; f += 1)
      p[f + l.length] = c[f];
    return p;
  }, i = function(l, c) {
    for (var p = [], d = c, f = 0; d < l.length; d += 1, f += 1)
      p[f] = l[d];
    return p;
  }, s = function(u, l) {
    for (var c = "", p = 0; p < u.length; p += 1)
      c += u[p], p + 1 < u.length && (c += l);
    return c;
  };
  return Yt = function(l) {
    var c = this;
    if (typeof c != "function" || t.apply(c) !== n)
      throw new TypeError(e + c);
    for (var p = i(arguments, 1), d, f = function() {
      if (this instanceof d) {
        var A = c.apply(
          this,
          o(p, arguments)
        );
        return Object(A) === A ? A : this;
      }
      return c.apply(
        l,
        o(p, arguments)
      );
    }, h = r(0, c.length - p.length), x = [], y = 0; y < h; y++)
      x[y] = "$" + y;
    if (d = Function("binder", "return function (" + s(x, ",") + "){ return binder.apply(this,arguments); }")(f), c.prototype) {
      var S = function() {
      };
      S.prototype = c.prototype, d.prototype = new S(), S.prototype = null;
    }
    return d;
  }, Yt;
}
var Qt, ao;
function tt() {
  if (ao) return Qt;
  ao = 1;
  var e = da();
  return Qt = Function.prototype.bind || e, Qt;
}
var Jt, so;
function Yr() {
  return so || (so = 1, Jt = Function.prototype.call), Jt;
}
var er, lo;
function Qr() {
  return lo || (lo = 1, er = Function.prototype.apply), er;
}
var tr, co;
function pa() {
  return co || (co = 1, tr = typeof Reflect < "u" && Reflect && Reflect.apply), tr;
}
var rr, uo;
function x1() {
  if (uo) return rr;
  uo = 1;
  var e = tt(), t = Qr(), r = Yr(), n = pa();
  return rr = n || e.call(r, t), rr;
}
var nr, po;
function Jr() {
  if (po) return nr;
  po = 1;
  var e = tt(), t = /* @__PURE__ */ et(), r = Yr(), n = x1();
  return nr = function(i) {
    if (i.length < 1 || typeof i[0] != "function")
      throw new t("a function is required");
    return n(e, r, i);
  }, nr;
}
var or, fo;
function fa() {
  if (fo) return or;
  fo = 1;
  var e = Jr(), t = /* @__PURE__ */ mt(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (s) {
    if (!s || typeof s != "object" || !("code" in s) || s.code !== "ERR_PROTO_ACCESS")
      throw s;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, i = o.getPrototypeOf;
  return or = n && typeof n.get == "function" ? e([n.get]) : typeof i == "function" ? (
    /** @type {import('./get')} */
    function(u) {
      return i(u == null ? u : o(u));
    }
  ) : !1, or;
}
var ir, ho;
function ha() {
  if (ho) return ir;
  ho = 1;
  var e = b1(), t = w1(), r = /* @__PURE__ */ fa();
  return ir = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : r ? function(o) {
    return r(o);
  } : null, ir;
}
var ar, go;
function A1() {
  if (go) return ar;
  go = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = tt();
  return ar = r.call(e, t), ar;
}
var sr, vo;
function k1() {
  if (vo) return sr;
  vo = 1;
  var e, t = /* @__PURE__ */ _1(), r = /* @__PURE__ */ Ki(), n = /* @__PURE__ */ Yi(), o = /* @__PURE__ */ Qi(), i = /* @__PURE__ */ Ji(), s = /* @__PURE__ */ v1(), u = /* @__PURE__ */ et(), l = /* @__PURE__ */ ea(), c = /* @__PURE__ */ ta(), p = /* @__PURE__ */ ra(), d = /* @__PURE__ */ na(), f = /* @__PURE__ */ oa(), h = /* @__PURE__ */ ia(), x = /* @__PURE__ */ aa(), y = /* @__PURE__ */ la(), S = Function, A = function(ie) {
    try {
      return S('"use strict"; return (' + ie + ").constructor;")();
    } catch {
    }
  }, _ = /* @__PURE__ */ mt(), g = /* @__PURE__ */ vt(), m = function() {
    throw new u();
  }, C = _ ? function() {
    try {
      return arguments.callee, m;
    } catch {
      try {
        return _(arguments, "callee").get;
      } catch {
        return m;
      }
    }
  }() : m, v = ua()(), k = ha(), R = w1(), N = b1(), W = Qr(), T = Yr(), z = {}, Y = typeof Uint8Array > "u" || !k ? e : k(Uint8Array), U = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": v && k ? k([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": z,
    "%AsyncGenerator%": z,
    "%AsyncGeneratorFunction%": z,
    "%AsyncIteratorPrototype%": z,
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
    "%Error%": r,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": S,
    "%GeneratorFunction%": z,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": v && k ? k(k([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !v || !k ? e : k((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": _,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": o,
    "%ReferenceError%": i,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !v || !k ? e : k((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": v && k ? k(""[Symbol.iterator]()) : e,
    "%Symbol%": v ? Symbol : e,
    "%SyntaxError%": s,
    "%ThrowTypeError%": C,
    "%TypedArray%": Y,
    "%TypeError%": u,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": l,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": T,
    "%Function.prototype.apply%": W,
    "%Object.defineProperty%": g,
    "%Object.getPrototypeOf%": R,
    "%Math.abs%": c,
    "%Math.floor%": p,
    "%Math.max%": d,
    "%Math.min%": f,
    "%Math.pow%": h,
    "%Math.round%": x,
    "%Math.sign%": y,
    "%Reflect.getPrototypeOf%": N
  };
  if (k)
    try {
      null.error;
    } catch (ie) {
      var oe = k(k(ie));
      U["%Error.prototype%"] = oe;
    }
  var I = function ie(q) {
    var X;
    if (q === "%AsyncFunction%")
      X = A("async function () {}");
    else if (q === "%GeneratorFunction%")
      X = A("function* () {}");
    else if (q === "%AsyncGeneratorFunction%")
      X = A("async function* () {}");
    else if (q === "%AsyncGenerator%") {
      var V = ie("%AsyncGeneratorFunction%");
      V && (X = V.prototype);
    } else if (q === "%AsyncIteratorPrototype%") {
      var K = ie("%AsyncGenerator%");
      K && k && (X = k(K.prototype));
    }
    return U[q] = X, X;
  }, ve = {
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
  }, H = tt(), D = /* @__PURE__ */ A1(), Se = H.call(T, Array.prototype.concat), rt = H.call(W, Array.prototype.splice), De = H.call(T, String.prototype.replace), be = H.call(T, String.prototype.slice), Le = H.call(T, RegExp.prototype.exec), Me = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, qe = /\\(\\)?/g, Pe = function(q) {
    var X = be(q, 0, 1), V = be(q, -1);
    if (X === "%" && V !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (V === "%" && X !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var K = [];
    return De(q, Me, function(ae, Ee, Q, nt) {
      K[K.length] = Q ? De(nt, qe, "$1") : Ee || ae;
    }), K;
  }, J1 = function(q, X) {
    var V = q, K;
    if (D(ve, V) && (K = ve[V], V = "%" + K[0] + "%"), D(U, V)) {
      var ae = U[V];
      if (ae === z && (ae = I(V)), typeof ae > "u" && !X)
        throw new u("intrinsic " + q + " exists, but is not available. Please file an issue!");
      return {
        alias: K,
        name: V,
        value: ae
      };
    }
    throw new s("intrinsic " + q + " does not exist!");
  };
  return sr = function(q, X) {
    if (typeof q != "string" || q.length === 0)
      throw new u("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof X != "boolean")
      throw new u('"allowMissing" argument must be a boolean');
    if (Le(/^%?[^%]*%?$/, q) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var V = Pe(q), K = V.length > 0 ? V[0] : "", ae = J1("%" + K + "%", X), Ee = ae.name, Q = ae.value, nt = !1, yt = ae.alias;
    yt && (K = yt[0], rt(V, Se([0, 1], yt)));
    for (var ot = 1, Fe = !0; ot < V.length; ot += 1) {
      var de = V[ot], it = be(de, 0, 1), at = be(de, -1);
      if ((it === '"' || it === "'" || it === "`" || at === '"' || at === "'" || at === "`") && it !== at)
        throw new s("property names with quotes must have matching quotes");
      if ((de === "constructor" || !Fe) && (nt = !0), K += "." + de, Ee = "%" + K + "%", D(U, Ee))
        Q = U[Ee];
      else if (Q != null) {
        if (!(de in Q)) {
          if (!X)
            throw new u("base intrinsic for " + q + " exists, but the property is not available.");
          return;
        }
        if (_ && ot + 1 >= V.length) {
          var st = _(Q, de);
          Fe = !!st, Fe && "get" in st && !("originalValue" in st.get) ? Q = st.get : Q = Q[de];
        } else
          Fe = D(Q, de), Q = Q[de];
        Fe && !nt && (U[Ee] = Q);
      }
    }
    return Q;
  }, sr;
}
var lr, mo;
function ga() {
  if (mo) return lr;
  mo = 1;
  var e = /* @__PURE__ */ k1(), t = /* @__PURE__ */ m1(), r = /* @__PURE__ */ y1()(), n = /* @__PURE__ */ mt(), o = /* @__PURE__ */ et(), i = e("%Math.floor%");
  return lr = function(u, l) {
    if (typeof u != "function")
      throw new o("`fn` is not a function");
    if (typeof l != "number" || l < 0 || l > 4294967295 || i(l) !== l)
      throw new o("`length` must be a positive 32-bit integer");
    var c = arguments.length > 2 && !!arguments[2], p = !0, d = !0;
    if ("length" in u && n) {
      var f = n(u, "length");
      f && !f.configurable && (p = !1), f && !f.writable && (d = !1);
    }
    return (p || d || !c) && (r ? t(
      /** @type {Parameters<define>[0]} */
      u,
      "length",
      l,
      !0,
      !0
    ) : t(
      /** @type {Parameters<define>[0]} */
      u,
      "length",
      l
    )), u;
  }, lr;
}
var cr, yo;
function va() {
  if (yo) return cr;
  yo = 1;
  var e = tt(), t = Qr(), r = x1();
  return cr = function() {
    return r(e, t, arguments);
  }, cr;
}
var Co;
function ma() {
  return Co || (Co = 1, function(e) {
    var t = /* @__PURE__ */ ga(), r = /* @__PURE__ */ vt(), n = Jr(), o = va();
    e.exports = function(s) {
      var u = n(arguments), l = s.length - (arguments.length - 1);
      return t(
        u,
        1 + (l > 0 ? l : 0),
        !0
      );
    }, r ? r(e.exports, "apply", { value: o }) : e.exports.apply = o;
  }(It)), It.exports;
}
var ur, _o;
function ya() {
  if (_o) return ur;
  _o = 1;
  var e = /* @__PURE__ */ et();
  return ur = function(r) {
    if (r == null)
      throw new e(arguments.length > 0 && arguments[1] || "Cannot call method on " + r);
    return r;
  }, ur;
}
var dr, bo;
function Ca() {
  if (bo) return dr;
  bo = 1;
  var e = /* @__PURE__ */ k1(), t = Jr(), r = t([e("%String.prototype.indexOf%")]);
  return dr = function(o, i) {
    var s = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!i)
    );
    return typeof s == "function" && r(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [s]
    ) : s;
  }, dr;
}
var pr, wo;
function S1() {
  if (wo) return pr;
  wo = 1;
  var e = /* @__PURE__ */ ya(), t = /* @__PURE__ */ Ca(), r = t("Object.prototype.propertyIsEnumerable"), n = t("Array.prototype.push");
  return pr = function(i) {
    var s = e(i), u = [];
    for (var l in s)
      r(s, l) && n(u, [l, s[l]]);
    return u;
  }, pr;
}
var fr, xo;
function L1() {
  if (xo) return fr;
  xo = 1;
  var e = S1();
  return fr = function() {
    return typeof Object.entries == "function" ? Object.entries : e;
  }, fr;
}
var hr, Ao;
function _a() {
  if (Ao) return hr;
  Ao = 1;
  var e = L1(), t = C1();
  return hr = function() {
    var n = e();
    return t(Object, { entries: n }, {
      entries: function() {
        return Object.entries !== n;
      }
    }), n;
  }, hr;
}
var gr, ko;
function ba() {
  if (ko) return gr;
  ko = 1;
  var e = C1(), t = ma(), r = S1(), n = L1(), o = _a(), i = t(n(), Object);
  return e(i, {
    getPolyfill: n,
    implementation: r,
    shim: o
  }), gr = i, gr;
}
var vr, So;
function wa() {
  if (So) return vr;
  So = 1;
  var e = {}, t = e.NODE_ENV !== "production", r = function() {
  };
  if (t) {
    var n = function(i, s) {
      var u = arguments.length;
      s = new Array(u > 1 ? u - 1 : 0);
      for (var l = 1; l < u; l++)
        s[l - 1] = arguments[l];
      var c = 0, p = "Warning: " + i.replace(/%s/g, function() {
        return s[c++];
      });
      typeof console < "u" && console.error(p);
      try {
        throw new Error(p);
      } catch {
      }
    };
    r = function(o, i, s) {
      var u = arguments.length;
      s = new Array(u > 2 ? u - 2 : 0);
      for (var l = 2; l < u; l++)
        s[l - 2] = arguments[l];
      if (i === void 0)
        throw new Error(
          "`warning(condition, format, ...args)` requires a warning message argument"
        );
      o || n.apply(null, [i].concat(s));
    };
  }
  return vr = r, vr;
}
var mr, Lo;
function xa() {
  if (Lo) return mr;
  Lo = 1;
  var e = ba(), t = wa(), r = /* @__PURE__ */ A1(), n = function(m) {
    t(!1, m);
  }, o = String.prototype.replace, i = String.prototype.split, s = "||||", u = function(g) {
    var m = g % 100, C = m % 10;
    return m !== 11 && C === 1 ? 0 : 2 <= C && C <= 4 && !(m >= 12 && m <= 14) ? 1 : 2;
  }, l = {
    // Mapping from pluralization group plural logic.
    pluralTypes: {
      arabic: function(g) {
        if (g < 3)
          return g;
        var m = g % 100;
        return m >= 3 && m <= 10 ? 3 : m >= 11 ? 4 : 5;
      },
      bosnian_serbian: u,
      chinese: function() {
        return 0;
      },
      croatian: u,
      french: function(g) {
        return g >= 2 ? 1 : 0;
      },
      german: function(g) {
        return g !== 1 ? 1 : 0;
      },
      russian: u,
      lithuanian: function(g) {
        return g % 10 === 1 && g % 100 !== 11 ? 0 : g % 10 >= 2 && g % 10 <= 9 && (g % 100 < 11 || g % 100 > 19) ? 1 : 2;
      },
      czech: function(g) {
        return g === 1 ? 0 : g >= 2 && g <= 4 ? 1 : 2;
      },
      polish: function(g) {
        if (g === 1)
          return 0;
        var m = g % 10;
        return 2 <= m && m <= 4 && (g % 100 < 10 || g % 100 >= 20) ? 1 : 2;
      },
      icelandic: function(g) {
        return g % 10 !== 1 || g % 100 === 11 ? 1 : 0;
      },
      slovenian: function(g) {
        var m = g % 100;
        return m === 1 ? 0 : m === 2 ? 1 : m === 3 || m === 4 ? 2 : 3;
      },
      romanian: function(g) {
        if (g === 1)
          return 0;
        var m = g % 100;
        return g === 0 || m >= 2 && m <= 19 ? 1 : 2;
      },
      ukrainian: u
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
  function c(g) {
    for (var m = {}, C = e(g), v = 0; v < C.length; v += 1)
      for (var k = C[v][0], R = C[v][1], N = 0; N < R.length; N += 1)
        m[R[N]] = k;
    return m;
  }
  function p(g, m) {
    var C = c(g.pluralTypeToLanguages);
    return C[m] || C[i.call(m, /-/, 1)[0]] || C.en;
  }
  function d(g, m, C) {
    return g.pluralTypes[m](C);
  }
  function f() {
    var g = {};
    return function(m, C) {
      var v = g[C];
      return v && !m.pluralTypes[v] && (v = null, g[C] = v), v || (v = p(m, C), v && (g[C] = v)), v;
    };
  }
  function h(g) {
    return g.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function x(g) {
    var m = g && g.prefix || "%{", C = g && g.suffix || "}";
    if (m === s || C === s)
      throw new RangeError('"' + s + '" token is reserved for pluralization');
    return new RegExp(h(m) + "(.*?)" + h(C), "g");
  }
  var y = f(), S = /%\{(.*?)\}/g;
  function A(g, m, C, v, k, R) {
    if (typeof g != "string")
      throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
    if (m == null)
      return g;
    var N = g, W = v || S, T = R || o, z = typeof m == "number" ? { smart_count: m } : m;
    if (z.smart_count != null && g) {
      var Y = k || l, U = i.call(g, s), oe = C || "en", I = y(Y, oe), ve = d(
        Y,
        I,
        z.smart_count
      );
      N = o.call(U[ve] || U[0], /^[^\S]*|[^\S]*$/g, "");
    }
    return N = T.call(N, W, function(H, D) {
      return !r(z, D) || z[D] == null ? H : z[D];
    }), N;
  }
  function _(g) {
    var m = g || {};
    this.phrases = {}, this.extend(m.phrases || {}), this.currentLocale = m.locale || "en";
    var C = m.allowMissing ? A : null;
    this.onMissingKey = typeof m.onMissingKey == "function" ? m.onMissingKey : C, this.warn = m.warn || n, this.replaceImplementation = m.replace || o, this.tokenRegex = x(m.interpolation), this.pluralRules = m.pluralRules || l;
  }
  return _.prototype.locale = function(g) {
    return g && (this.currentLocale = g), this.currentLocale;
  }, _.prototype.extend = function(g, m) {
    for (var C = e(g || {}), v = 0; v < C.length; v += 1) {
      var k = C[v][0], R = C[v][1], N = m ? m + "." + k : k;
      typeof R == "object" ? this.extend(R, N) : this.phrases[N] = R;
    }
  }, _.prototype.unset = function(g, m) {
    if (typeof g == "string")
      delete this.phrases[g];
    else
      for (var C = e(g || {}), v = 0; v < C.length; v += 1) {
        var k = C[v][0], R = C[v][1], N = m ? m + "." + k : k;
        typeof R == "object" ? this.unset(R, N) : delete this.phrases[N];
      }
  }, _.prototype.clear = function() {
    this.phrases = {};
  }, _.prototype.replace = function(g) {
    this.clear(), this.extend(g);
  }, _.prototype.t = function(g, m) {
    var C, v, k = m ?? {};
    if (typeof this.phrases[g] == "string")
      C = this.phrases[g];
    else if (typeof k._ == "string")
      C = k._;
    else if (this.onMissingKey) {
      var R = this.onMissingKey;
      v = R(
        g,
        k,
        this.currentLocale,
        this.tokenRegex,
        this.pluralRules,
        this.replaceImplementation
      );
    } else
      this.warn('Missing translation for key: "' + g + '"'), v = g;
    return typeof C == "string" && (v = A(
      C,
      k,
      this.currentLocale,
      this.tokenRegex,
      this.pluralRules,
      this.replaceImplementation
    )), v;
  }, _.prototype.has = function(g) {
    return r(this.phrases, g);
  }, _.transformPhrase = function(m, C, v) {
    return A(m, C, v);
  }, mr = _, mr;
}
var Aa = xa();
const Mo = /* @__PURE__ */ Zi(Aa), ka = "Leitor de Texto ativado", Sa = "Leitor de Texto", La = "Aumentar Fonte", Ma = "Espaço entre letras", Pa = "Espaço entre linhas", Ea = "Destacar links", Ra = "Destacar títulos", Ia = "Modo Leitor", Na = "Pausar animações", Oa = "Ocultar imagens", $a = "Guia de leitura", za = "Máscara de leitura", Ta = "Cursor grande", Ha = "Cor do texto", Ba = "Dicionário", Da = "Personalizada", qa = "Médio", Fa = "Grande", ja = "Muito grande", Ua = "Desativado", Va = "Em breve", Za = "Ativado", Ga = "Tela inteira", Wa = "Normal", Xa = "Claro", Ka = "Escuro", Ya = "Configurações", Qa = "Resetar", Ja = "Alterar idioma", es = "Sem suporte", ts = "O sintetizador de voz não é suportado pelo seu navegador", rs = "Interagir", ns = "Accesar link", os = { blind: "Cego", low_vision: "Baixa visão" }, is = { "dictionary.search": "Pesquisar no dicionário", definition_to_libras: "Ler definição em Libras", read_definition: "Ler definição", dictionary: "Dicionário simplificado", text_reader: "Ouvir o texto", font_increase: "Aumentar o tamanho da fonte", letter_spacing: "Modificar espaço entre as letras", line_spacing: "Modificar espaço entre linhas", highlight_links: "Destacar links", highlight_titles: "Destacar títulos", reset: "Resetar definições", close: "Fechar", change_language: "Alterar o idioma da ferramenta", reader_mode: "Ativar modo leitor", toggle_theme: "Alterar o tema", pause_animations: "Pausar animações", hide_images: "Esconder todas as imagens", reading_guide: "Ativar o Guia de leitura", reading_mask: "Ativar a Máscara de leitura", move_reading_mask: "Mover a Máscara de leitura", move_reading_guide: "Mover o Guia de leitura", large_cursor: "Ativar o cursor grande", text_color: "Alterar a cor do texto", open_accessibility_profiles: "Abrir ou fechar perfis de acessibilidade", blind: "Definições para pessoas cegas", low_vision: "Definições para pessoas com baixa visão" }, as = { reset: "Resetar definições", close: "Fechar", toggle_theme: "Alterar o tema" }, ss = { text_and_typography: "Texto e Tipografia", reading_and_comprehension: "Leitura e Compreensão", focus_and_visibility: "Foco e Acessibilidade Visual", colors_and_contrast: "Cores e Contraste", distraction_reduction: "Redução de Distrações", accessibility_profiles: "Perfis de Acessibilidade" }, ls = "Definição em Libras", cs = "Ler definição", us = {
  text_reader_is_actived: ka,
  text_reader: Sa,
  font_increase: La,
  letter_spacing: Ma,
  line_spacing: Pa,
  highlight_links: Ea,
  highlight_titles: Ra,
  reader_mode: Ia,
  pause_animations: Na,
  hide_images: Oa,
  reading_guide: $a,
  reading_mask: za,
  large_cursor: Ta,
  text_color: Ha,
  dictionary: Ba,
  custom: Da,
  default: "Padrão",
  medium: qa,
  large: Fa,
  very_large: ja,
  deactivated: Ua,
  upcomming: Va,
  actived: Za,
  full: Ga,
  normal: Wa,
  light: Xa,
  dark: Ka,
  settings: Ya,
  reset: Qa,
  change_language: Ja,
  no_support: es,
  speech_is_not_supported: ts,
  interact: rs,
  access_link: ns,
  profiles: os,
  al: is,
  titles: as,
  sections: ss,
  definition_to_libras: ls,
  read_definition: cs,
  "dictionary.select_word": "Selecione uma palavra para ver o significado ou faça uma pesquisa customizada.",
  "dictionary.no_result": "Nenhum resultado encontrado",
  "dictionary.close": "Fechar dicionário",
  "status.loading": "Carregando...",
  "status.searching": "Pesquisando..."
}, ds = "Text Reader is actived", ps = "Text Reader", fs = "Increase Font", hs = "Letter Spacing", gs = "Line Spacing", vs = "Highlight Links", ms = "Highlight Titles", ys = "Reader Mode", Cs = "Pause Animations", _s = "Hide images", bs = "Reading Guide", ws = "Reading Mask", xs = "Large Cursor", As = "Text Color", ks = "Dictionary", Ss = "Custom", Ls = "Medium", Ms = "Large", Ps = "Very Large", Es = "Deactivated", Rs = "Upcoming", Is = "Actived", Ns = "Full", Os = "Normal", $s = "Light", zs = "Dark", Ts = "Settings", Hs = "Reset", Bs = "Change language", Ds = "No support", qs = "Speech Synthesis is not supported in this browser", Fs = "Interact", js = "Access link", Us = { blind: "Blind", low_vision: "Low Vision" }, Vs = { "dictionary.search": "Search", dictionary: "Simplified Dictionary", text_reader: "Read text", font_increase: "Increase font", letter_spacing: "Modify letter spacing", line_spacing: "Modify line spacing", highlight_links: "Highlight links", highlight_titles: "Highlight titles", reset: "Reset definitions", close: "Close", change_language: "Change application language", reader_mode: "Activate reader mode", toggle_theme: "Toggle theme", pause_animations: "Pause animations", hide_images: "Hide all images", reading_guide: "Activate reading guide", reading_mask: "Activate reading mask", move_reading_mask: "Move reading mask", move_reading_guide: "Move reading guide", large_cursor: "Activate large cursor", text_color: "Change text color", open_accessibility_profiles: "Open or close accessibility profiles", blind: "Definitions for blind people", low_vision: "Definitions for low vision people" }, Zs = { reset: "Reset definitions", close: "Close", toggle_theme: "Toggle theme" }, Gs = { text_and_typography: "Text and Typography", reading_and_comprehension: "Reading and Comprehension", focus_and_visibility: "Focus and Visibility", colors_and_contrast: "Colors and Contrast", distraction_reduction: "Distraction Reduction", accessibility_profiles: "Accessibility Profiles" }, Ws = {
  text_reader_is_actived: ds,
  text_reader: ps,
  font_increase: fs,
  letter_spacing: hs,
  line_spacing: gs,
  highlight_links: vs,
  highlight_titles: ms,
  reader_mode: ys,
  pause_animations: Cs,
  hide_images: _s,
  reading_guide: bs,
  reading_mask: ws,
  large_cursor: xs,
  text_color: As,
  dictionary: ks,
  custom: Ss,
  default: "Default",
  medium: Ls,
  large: Ms,
  very_large: Ps,
  deactivated: Es,
  upcoming: Rs,
  actived: Is,
  full: Ns,
  normal: Os,
  light: $s,
  dark: zs,
  settings: Ts,
  reset: Hs,
  change_language: Bs,
  no_support: Ds,
  speech_is_not_supported: qs,
  interact: Fs,
  access_link: js,
  profiles: Us,
  al: Vs,
  titles: Zs,
  sections: Gs,
  "dictionary.select_word": "Select a word to see its meaning or perform a custom search.",
  "dictionary.no_result": "No result",
  "dictionary.close": "Close dictionary",
  "status.loading": "Loading...",
  "status.searching": "Searching..."
}, Xs = "Leitor de texto ativado", Ks = "Leer texto", Ys = "Aumentar fuente", Qs = "Espaciado entre letras", Js = "Espaciado entre líneas", el = "Resaltar enlaces", tl = "Resaltar títulos", rl = "Modo lector", nl = "Pausar animaciones", ol = "Ocultar imágenes", il = "Guía de lectura", al = "Máscara de lectura", sl = "Cursor grande", ll = "Color del texto", cl = "Diccionario", ul = "Personalizada", dl = "Mediano", pl = "Grande", fl = "Muy grande", hl = "Desactivado", gl = "Proximamente", vl = "Activado", ml = "Pantalla completa", yl = "Normal", Cl = "Claro", _l = "Oscuro", bl = "Configuraciones", wl = "Restablecer", xl = "Cambiar idioma", Al = "Sin soporte", kl = "El sintetizador de voz no es compatible con su navegador", Sl = "Interactuar", Ll = "Acceder enlace", Ml = { blind: "Ciego", low_vision: "Baja visión" }, Pl = { "dictionary.search": "Buscar en diccionario", dictionary: "Diccionario simplificado", text_reader: "Leer el texto", font_increase: "Aumentar el tamaño de la fuente", letter_spacing: "Modificar el espaciado entre letras", line_spacing: "Modificar el espaciado entre líneas", highlight_links: "Resaltar enlaces", highlight_titles: "Resaltar títulos", reset: "Restablecer configuraciones", close: "Cerrar", change_language: "Cambiar el idioma de la herramienta", reader_mode: "Activar modo lector", toggle_theme: "Cambiar el tema", pause_animations: "Pausar animaciones", hide_images: "Ocultar todas las imágenes", reading_guide: "Activar la guía de lectura", reading_mask: "Activar la máscara de lectura", move_reading_mask: "Mover la máscara de lectura", move_reading_guide: "Mover la guía de lectura", large_cursor: "Activar el cursor grande", text_color: "Cambiar el color del texto", open_accessibility_profiles: "Abrir o cerrar perfiles de accesibilidad", blind: "Configuraciones para personas ciegas", low_vision: "Configuraciones para personas con baja visión" }, El = { reset: "Restablecer configuraciones", close: "Cerrar", toggle_theme: "Cambiar el tema" }, Rl = { text_and_typography: "Texto y tipografía", reading_and_comprehension: "Lectura y comprensión", focus_and_visibility: "Enfoque y accesibilidad visual", colors_and_contrast: "Colores y contraste", distraction_reduction: "Reducción de distracciones", accessibility_profiles: "Perfiles de accesibilidad" }, Il = {
  text_reader_is_actived: Xs,
  text_reader: Ks,
  font_increase: Ys,
  letter_spacing: Qs,
  line_spacing: Js,
  highlight_links: el,
  highlight_titles: tl,
  reader_mode: rl,
  pause_animations: nl,
  hide_images: ol,
  reading_guide: il,
  reading_mask: al,
  large_cursor: sl,
  text_color: ll,
  dictionary: cl,
  custom: ul,
  default: "Predeterminada",
  medium: dl,
  large: pl,
  very_large: fl,
  deactivated: hl,
  upcoming: gl,
  actived: vl,
  full: ml,
  normal: yl,
  light: Cl,
  dark: _l,
  settings: bl,
  reset: wl,
  change_language: xl,
  no_support: Al,
  speech_is_not_supported: kl,
  interact: Sl,
  access_link: Ll,
  profiles: Ml,
  al: Pl,
  titles: El,
  sections: Rl,
  "dictionary.select_word": "Selecciona una palabra para ver su significado o haz una búsqueda personalizada",
  "dictionary.no_result": "Sin resultado",
  "dictionary.close": "Cerrar diccionario",
  "status.loading": "Cargando...",
  "status.searching": "Pesquisando..."
}, Po = { pt: us, en: Ws, es: Il }, O = Je()(
  h1(
    (e, t) => ({
      locale: "pt",
      polyglot: new Mo({ locale: "pt", phrases: Po.pt }),
      setLocale: (r) => e(() => ({ locale: r, polyglot: new Mo({ locale: r, phrases: Po[r] }) })),
      t: (r, n) => t().polyglot.t(r, n)
    }),
    {
      name: "@vlibras-widget-plus.locale",
      partialize: (e) => ({ locale: e.locale }),
      version: 1
    }
  )
), M1 = (e, t) => O.getState().t(e, t), en = () => {
  const [e, t] = F(!1);
  return M(() => {
    const r = () => {
      t(window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(hover: none)").matches);
    };
    return r(), window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), e;
}, yr = "@vwp-theme", Nl = (e) => ["light", "dark"].includes(e), P1 = Je((e) => ({
  theme: (() => {
    const t = localStorage.getItem(yr) || "";
    return Nl(t) ? t : "light";
  })(),
  toggleTheme: () => e((t) => {
    const r = t.theme === "dark" ? "light" : "dark";
    return localStorage.setItem(yr, r), { theme: r };
  }),
  setTheme: (t) => {
    localStorage.setItem(yr, t), e({ theme: t });
  }
})), E1 = () => {
  const [e, t] = F(""), [r, n] = F("");
  return M(() => {
    var o;
    e || t("0.2.0-alpha.4"), r || n(((o = window == null ? void 0 : window.VLibrasWidgetPlus) == null ? void 0 : o.path) ?? "./");
  }, [e, r]), { version: e, path: r };
}, R1 = () => {
  const [e, t] = F({ x: 0, y: 0 });
  return M(() => {
    const r = (n) => {
      t({ x: n.clientX, y: n.clientY });
    };
    return window.addEventListener("mousemove", r), () => window.removeEventListener("mousemove", r);
  }, []), e;
}, I1 = () => {
  const [e, t] = F({
    width: window.innerWidth,
    height: window.innerHeight
  });
  return M(() => {
    function r() {
      t({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), e;
}, Ol = (e, t = []) => {
  const [r, n] = F(null), [o, i] = F(null), [s, u] = F(!0);
  return M(() => {
    let l = !0;
    return u(!0), i(null), n(null), e().then((c) => {
      l && (n(c), u(!1));
    }).catch((c) => {
      l && (i(c), u(!1));
    }), () => {
      l = !1;
    };
  }, [e, ...t]), { data: r, error: o, isLoading: s };
};
function N1(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = N1(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function $l() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = N1(e)) && (n && (n += " "), n += t);
  return n;
}
const tn = "-", zl = (e) => {
  const t = Hl(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const u = s.split(tn);
      return u[0] === "" && u.length !== 1 && u.shift(), O1(u, t) || Tl(s);
    },
    getConflictingClassGroupIds: (s, u) => {
      const l = r[s] || [];
      return u && n[s] ? [...l, ...n[s]] : l;
    }
  };
}, O1 = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? O1(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(tn);
  return (s = t.validators.find(({
    validator: u
  }) => u(i))) == null ? void 0 : s.classGroupId;
}, Eo = /^\[(.+)\]$/, Tl = (e) => {
  if (Eo.test(e)) {
    const t = Eo.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Hl = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    Hr(r[o], n, o, t);
  return n;
}, Hr = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : Ro(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Bl(o)) {
        Hr(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([i, s]) => {
      Hr(s, Ro(t, i), r, n);
    });
  });
}, Ro = (e, t) => {
  let r = e;
  return t.split(tn).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, Bl = (e) => e.isThemeGetter, Dl = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (i, s) => {
    r.set(i, s), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let s = r.get(i);
      if (s !== void 0)
        return s;
      if ((s = n.get(i)) !== void 0)
        return o(i, s), s;
    },
    set(i, s) {
      r.has(i) ? r.set(i, s) : o(i, s);
    }
  };
}, Br = "!", Dr = ":", ql = Dr.length, Fl = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const i = [];
    let s = 0, u = 0, l = 0, c;
    for (let x = 0; x < o.length; x++) {
      let y = o[x];
      if (s === 0 && u === 0) {
        if (y === Dr) {
          i.push(o.slice(l, x)), l = x + ql;
          continue;
        }
        if (y === "/") {
          c = x;
          continue;
        }
      }
      y === "[" ? s++ : y === "]" ? s-- : y === "(" ? u++ : y === ")" && u--;
    }
    const p = i.length === 0 ? o : o.substring(l), d = jl(p), f = d !== p, h = c && c > l ? c - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: f,
      baseClassName: d,
      maybePostfixModifierPosition: h
    };
  };
  if (t) {
    const o = t + Dr, i = n;
    n = (s) => s.startsWith(o) ? i(s.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const o = n;
    n = (i) => r({
      className: i,
      parseClassName: o
    });
  }
  return n;
}, jl = (e) => e.endsWith(Br) ? e.substring(0, e.length - 1) : e.startsWith(Br) ? e.substring(1) : e, Ul = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const o = [];
    let i = [];
    return n.forEach((s) => {
      s[0] === "[" || t[s] ? (o.push(...i.sort(), s), i = []) : i.push(s);
    }), o.push(...i.sort()), o;
  };
}, Vl = (e) => ({
  cache: Dl(e.cacheSize),
  parseClassName: Fl(e),
  sortModifiers: Ul(e),
  ...zl(e)
}), Zl = /\s+/, Gl = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = t, s = [], u = e.trim().split(Zl);
  let l = "";
  for (let c = u.length - 1; c >= 0; c -= 1) {
    const p = u[c], {
      isExternal: d,
      modifiers: f,
      hasImportantModifier: h,
      baseClassName: x,
      maybePostfixModifierPosition: y
    } = r(p);
    if (d) {
      l = p + (l.length > 0 ? " " + l : l);
      continue;
    }
    let S = !!y, A = n(S ? x.substring(0, y) : x);
    if (!A) {
      if (!S) {
        l = p + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (A = n(x), !A) {
        l = p + (l.length > 0 ? " " + l : l);
        continue;
      }
      S = !1;
    }
    const _ = i(f).join(":"), g = h ? _ + Br : _, m = g + A;
    if (s.includes(m))
      continue;
    s.push(m);
    const C = o(A, S);
    for (let v = 0; v < C.length; ++v) {
      const k = C[v];
      s.push(g + k);
    }
    l = p + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Wl() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = $1(t)) && (n && (n += " "), n += r);
  return n;
}
const $1 = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = $1(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Xl(e, ...t) {
  let r, n, o, i = s;
  function s(l) {
    const c = t.reduce((p, d) => d(p), e());
    return r = Vl(c), n = r.cache.get, o = r.cache.set, i = u, u(l);
  }
  function u(l) {
    const c = n(l);
    if (c)
      return c;
    const p = Gl(l, r);
    return o(l, p), p;
  }
  return function() {
    return i(Wl.apply(null, arguments));
  };
}
const Z = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, z1 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, T1 = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Kl = /^\d+\/\d+$/, Yl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ql = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Jl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, e2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, t2 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Re = (e) => Kl.test(e), E = (e) => !!e && !Number.isNaN(Number(e)), me = (e) => !!e && Number.isInteger(Number(e)), Io = (e) => e.endsWith("%") && E(e.slice(0, -1)), ye = (e) => Yl.test(e), r2 = () => !0, n2 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ql.test(e) && !Jl.test(e)
), rn = () => !1, o2 = (e) => e2.test(e), i2 = (e) => t2.test(e), a2 = (e) => !b(e) && !w(e), s2 = (e) => He(e, D1, rn), b = (e) => z1.test(e), we = (e) => He(e, q1, n2), Cr = (e) => He(e, y2, E), l2 = (e) => He(e, H1, rn), c2 = (e) => He(e, B1, i2), u2 = (e) => He(e, rn, o2), w = (e) => T1.test(e), je = (e) => Be(e, q1), d2 = (e) => Be(e, C2), p2 = (e) => Be(e, H1), f2 = (e) => Be(e, D1), h2 = (e) => Be(e, B1), g2 = (e) => Be(e, _2, !0), He = (e, t, r) => {
  const n = z1.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Be = (e, t, r = !1) => {
  const n = T1.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, H1 = (e) => e === "position", v2 = /* @__PURE__ */ new Set(["image", "url"]), B1 = (e) => v2.has(e), m2 = /* @__PURE__ */ new Set(["length", "size", "percentage"]), D1 = (e) => m2.has(e), q1 = (e) => e === "length", y2 = (e) => e === "number", C2 = (e) => e === "family-name", _2 = (e) => e === "shadow", b2 = () => {
  const e = Z("color"), t = Z("font"), r = Z("text"), n = Z("font-weight"), o = Z("tracking"), i = Z("leading"), s = Z("breakpoint"), u = Z("container"), l = Z("spacing"), c = Z("radius"), p = Z("shadow"), d = Z("inset-shadow"), f = Z("drop-shadow"), h = Z("blur"), x = Z("perspective"), y = Z("aspect"), S = Z("ease"), A = Z("animate"), _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], g = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], m = () => ["auto", "hidden", "clip", "visible", "scroll"], C = () => ["auto", "contain", "none"], v = () => [w, b, l], k = () => [Re, "full", "auto", ...v()], R = () => [me, "none", "subgrid", w, b], N = () => ["auto", {
    span: ["full", me, w, b]
  }, me, w, b], W = () => [me, "auto", w, b], T = () => ["auto", "min", "max", "fr", w, b], z = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], Y = () => ["start", "end", "center", "stretch"], U = () => ["auto", ...v()], oe = () => [Re, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...v()], I = () => [e, w, b], ve = () => [Io, je, we], H = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    w,
    b
  ], D = () => ["", E, je, we], Se = () => ["solid", "dashed", "dotted", "double"], rt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], De = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    h,
    w,
    b
  ], be = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", w, b], Le = () => ["none", E, w, b], Me = () => ["none", E, w, b], qe = () => [E, w, b], Pe = () => [Re, "full", ...v()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ye],
      breakpoint: [ye],
      color: [r2],
      container: [ye],
      "drop-shadow": [ye],
      ease: ["in", "out", "in-out"],
      font: [a2],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ye],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ye],
      shadow: [ye],
      spacing: ["px", E],
      text: [ye],
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
        aspect: ["auto", "square", Re, b, w, y]
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
        columns: [E, b, w, u]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": _()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": _()
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
        object: [...g(), b, w]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: m()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": m()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": m()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: C()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": C()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": C()
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
        inset: k()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": k()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": k()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: k()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: k()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: k()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: k()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: k()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: k()
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
        z: [me, "auto", w, b]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Re, "full", "auto", u, ...v()]
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
        flex: [E, Re, "auto", "initial", "none", b]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", E, w, b]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", E, w, b]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [me, "first", "last", "none", w, b]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": R()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: N()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": R()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: N()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
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
        "auto-cols": T()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": T()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: v()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": v()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": v()
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
        "justify-items": [...Y(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Y()]
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
        items: [...Y(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Y(), "baseline"]
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
        "place-items": [...Y(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Y()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: v()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: v()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: v()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: v()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: v()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: v()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: v()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: v()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: v()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: U()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: U()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: U()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: U()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: U()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: U()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: U()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: U()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: U()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": v()
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
        "space-y": v()
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
        size: oe()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [u, "screen", ...oe()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          u,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...oe()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          u,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [s]
          },
          ...oe()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...oe()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...oe()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...oe()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, je, we]
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
        font: [n, w, Cr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Io, b]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [d2, b, t]
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
        tracking: [o, w, b]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [E, "none", w, Cr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...v()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", w, b]
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
        list: ["disc", "decimal", "none", w, b]
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
        placeholder: I()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: I()
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
        decoration: [E, "from-font", "auto", w, we]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: I()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [E, "auto", w, b]
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
        indent: v()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", w, b]
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
        content: ["none", w, b]
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
        bg: [...g(), p2, l2]
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
        bg: ["auto", "cover", "contain", f2, s2]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, me, w, b],
          radial: ["", w, b],
          conic: [me, w, b]
        }, h2, c2]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: I()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ve()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ve()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ve()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: I()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: I()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: I()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: H()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": H()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": H()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": H()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": H()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": H()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": H()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": H()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": H()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": H()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": H()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": H()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": H()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": H()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": H()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: D()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": D()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": D()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": D()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": D()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": D()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": D()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": D()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": D()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": D()
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
        "divide-y": D()
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
        border: I()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": I()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": I()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": I()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": I()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": I()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": I()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": I()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": I()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: I()
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
        "outline-offset": [E, w, b]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", E, je, we]
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
          g2,
          u2
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: I()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", w, b, d]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": I()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: D()
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
        ring: I()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [E, we]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": I()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": D()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": I()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [E, w, b]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...rt(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": rt()
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
          w,
          b
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: De()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [E, w, b]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [E, w, b]
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
          w,
          b
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", E, w, b]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [E, w, b]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", E, w, b]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [E, w, b]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", E, w, b]
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
          w,
          b
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": De()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [E, w, b]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [E, w, b]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", E, w, b]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [E, w, b]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", E, w, b]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [E, w, b]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [E, w, b]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", E, w, b]
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
        "border-spacing": v()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": v()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": v()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", w, b]
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
        duration: [E, "initial", w, b]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", S, w, b]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [E, w, b]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", A, w, b]
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
        perspective: [x, w, b]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": be()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Le()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Le()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Le()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Le()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Me()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Me()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Me()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Me()
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
        skew: qe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": qe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": qe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [w, b, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: be()
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
        translate: Pe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Pe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Pe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Pe()
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
        accent: I()
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
        caret: I()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", w, b]
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
        "scroll-m": v()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": v()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": v()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": v()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": v()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": v()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": v()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": v()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": v()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": v()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": v()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": v()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": v()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": v()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": v()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": v()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": v()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": v()
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
        "will-change": ["auto", "scroll", "contents", "transform", w, b]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...I()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [E, je, we, Cr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...I()]
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
}, w2 = /* @__PURE__ */ Xl(b2);
function j(...e) {
  return w2($l(e));
}
const _e = (e) => {
  const t = document.createElement("style");
  return t.innerHTML = e, t;
};
function F1(e, t) {
  const r = { ...e };
  for (const n of t) delete r[n];
  return r;
}
const x2 = (e) => e.split(" ").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(" "), ze = (e, t) => (t || document).querySelector(e), A2 = () => {
  var e;
  return (e = ze("[vp]")) == null ? void 0 : e.closest("[vw]");
}, j1 = {
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
  isActive: !1
}, P = Je()(
  h1(
    (e) => ({
      isOpenWidget: !1,
      isLoaded: !1,
      isActive: !1,
      setIsOpenWidget: (t) => e({ isOpenWidget: t }),
      setIsLoaded: (t) => e({ isLoaded: t }),
      reset: () => e(j1)
    }),
    {
      name: "@vlibras-widget-plus",
      partialize: (e) => F1(e, ["textReader", "dictionary"]),
      version: 1
    }
  )
);
P.subscribe((e, t) => {
  const n = Object.keys(F1(j1, ["isActive"])).some((o) => {
    const i = e[o];
    return ["textReader", "textColor", "dictionary"].includes(o) ? i == null ? void 0 : i.isActive : !!i;
  });
  n !== t.isActive && P.setState({ isActive: n }), window.VLibrasWidgetPlus && (window.VLibrasWidgetPlus.isOpen = e.isOpenWidget);
});
const Ne = "vwp-app-root", _r = {}, U1 = () => {
  if (!_r[Ne]) {
    let n = document.getElementById(Ne);
    n || (n = document.createElement("div"), n.id = Ne, document.body.appendChild(n)), _r[Ne] = n;
  }
  const e = _r[Ne], t = e.shadowRoot || e.attachShadow({ mode: "open" });
  return { root: e, shadowRoot: t, isRootActive: () => e.getAttribute("data-active") === "true" };
}, nn = (e, t) => {
  const n = ["html", "input", "head", "script", "style", "iframe", "meta", "canvas", "noscript"], o = e.tagName.toLowerCase(), i = n.includes(o), s = e.classList.contains("vwp-ignore"), u = e.closest("[vw]");
  return e.id !== Ne && !i && !s && !u;
}, k2 = async (e, t) => {
  if (!e) return;
  const r = [
    new FontFace("VLibrasWidget_Font", `url(${e}/assets/fonts/rawline-500.ttf) format('truetype')`, {
      weight: "500"
    })
  ];
  await Promise.all(r.map((n) => n.load())), r.forEach((n) => document.fonts.add(n)), t == null || t();
}, br = ue(({ children: e, disabled: t, variant: r = "default", className: n, ...o }, i) => /* @__PURE__ */ a(
  "button",
  {
    ref: i,
    className: j(
      "cursor-pointer text-foreground flex justify-center items-center gap-x-2",
      "size-9 hover:bg-muted rounded-full",
      "[&>svg]:pointer-events-none [&>svg]:fill-foreground/80 hover:[&>svg]:fill-foreground",
      t && "!pointer-events-none *:!pointer-events-none opacity-50",
      r === "destructive" && "hover:bg-destructive/10 hover:[&>svg]:fill-destructive",
      n
    ),
    type: o.type || "button",
    ...o,
    children: e
  }
)), S2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M4.675 15.425L3.65 18.275C3.56667 18.5083 3.43333 18.6875 3.25 18.8125C3.06667 18.9375 2.85833 19 2.625 19C2.24167 19 1.9375 18.8375 1.7125 18.5125C1.4875 18.1875 1.44167 17.8417 1.575 17.475L5.975 5.75C6.05833 5.51667 6.2 5.33333 6.4 5.2C6.6 5.06667 6.81667 5 7.05 5H7.95C8.2 5 8.42083 5.06667 8.6125 5.2C8.80417 5.33333 8.94167 5.51667 9.025 5.75L13.45 17.5C13.5833 17.8667 13.5375 18.2083 13.3125 18.525C13.0875 18.8417 12.7833 19 12.4 19C12.1667 19 11.95 18.9333 11.75 18.8C11.55 18.6667 11.4083 18.4833 11.325 18.25L10.325 15.425H4.675ZM5.4 13.4H9.6L7.55 7.6H7.45L5.4 13.4ZM18 13H16C15.7167 13 15.4792 12.9042 15.2875 12.7125C15.0958 12.5208 15 12.2833 15 12C15 11.7167 15.0958 11.4792 15.2875 11.2875C15.4792 11.0958 15.7167 11 16 11H18V9C18 8.71667 18.0958 8.47917 18.2875 8.2875C18.4792 8.09583 18.7167 8 19 8C19.2833 8 19.5208 8.09583 19.7125 8.2875C19.9042 8.47917 20 8.71667 20 9V11H22C22.2833 11 22.5208 11.0958 22.7125 11.2875C22.9042 11.4792 23 11.7167 23 12C23 12.2833 22.9042 12.5208 22.7125 12.7125C22.5208 12.9042 22.2833 13 22 13H20V15C20 15.2833 19.9042 15.5208 19.7125 15.7125C19.5208 15.9042 19.2833 16 19 16C18.7167 16 18.4792 15.9042 18.2875 15.7125C18.0958 15.5208 18 15.2833 18 15V13Z" })
    ]
  }
), L2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
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
), M2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M11 18.15V15C11 14.7167 11.0958 14.4792 11.2875 14.2875C11.4792 14.0959 11.7167 14 12 14C12.2833 14 12.5208 14.0959 12.7125 14.2875C12.9042 14.4792 13 14.7167 13 15V18.125L14.075 17.025C14.275 16.825 14.5167 16.725 14.8 16.725C15.0833 16.725 15.325 16.825 15.525 17.025C15.725 17.225 15.825 17.4667 15.825 17.75C15.825 18.0334 15.725 18.2751 15.525 18.475L12.7 21.3C12.6 21.4 12.4917 21.4709 12.375 21.5125C12.2583 21.5542 12.1333 21.575 12 21.575C11.8667 21.575 11.7417 21.5542 11.625 21.5125C11.5083 21.4709 11.4 21.4 11.3 21.3L8.44999 18.45C8.24999 18.25 8.15415 18.0125 8.16249 17.7375C8.17082 17.4625 8.27499 17.225 8.47499 17.025C8.67499 16.825 8.91249 16.725 9.18749 16.725C9.46249 16.725 9.69999 16.825 9.89999 17.025L11 18.15ZM11 5.85005L9.87499 6.97505C9.67499 7.17505 9.44165 7.27505 9.17499 7.27505C8.90832 7.27505 8.67499 7.17505 8.47499 6.97505C8.27499 6.77505 8.17499 6.53755 8.17499 6.26255C8.17499 5.98755 8.27499 5.75005 8.47499 5.55005L11.3 2.70005C11.4 2.60005 11.5083 2.52922 11.625 2.48755C11.7417 2.44588 11.8667 2.42505 12 2.42505C12.1333 2.42505 12.2583 2.44588 12.375 2.48755C12.4917 2.52922 12.6 2.60005 12.7 2.70005L15.55 5.55005C15.75 5.75005 15.85 5.98338 15.85 6.25005C15.85 6.51672 15.75 6.75005 15.55 6.95005C15.35 7.15005 15.1125 7.25005 14.8375 7.25005C14.5625 7.25005 14.325 7.15005 14.125 6.95005L13 5.85005V9.00005C13 9.28338 12.9042 9.52088 12.7125 9.71255C12.5208 9.90422 12.2833 10 12 10C11.7167 10 11.4792 9.90422 11.2875 9.71255C11.0958 9.52088 11 9.28338 11 9.00005V5.85005Z" })
    ]
  }
), P2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M6.7 21.3C6.5 21.5 6.26667 21.6 6 21.6C5.73334 21.6 5.5 21.5 5.3 21.3L2.7 18.7C2.5 18.5 2.4 18.2667 2.4 18C2.4 17.7333 2.5 17.5 2.7 17.3L5.3 14.7C5.5 14.5 5.73334 14.4 6 14.4C6.26667 14.4 6.5 14.5 6.7 14.7C6.9 14.9 7 15.1375 7 15.4125C7 15.6875 6.9 15.925 6.7 16.125L5.825 17H18.175L17.3 16.125C17.1167 15.925 17.0208 15.6875 17.0125 15.4125C17.0042 15.1375 17.1 14.9 17.3 14.7C17.5 14.5 17.7333 14.4 18 14.4C18.2667 14.4 18.5 14.5 18.7 14.7L21.3 17.3C21.5 17.5 21.6 17.7333 21.6 18C21.6 18.2667 21.5 18.5 21.3 18.7L18.7 21.3C18.5 21.5 18.2667 21.6 18 21.6C17.7333 21.6 17.5 21.5 17.3 21.3C17.1 21.1 17 20.8625 17 20.5875C17 20.3125 17.1 20.075 17.3 19.875L18.175 19H5.825L6.7 19.875C6.88334 20.075 6.97917 20.3125 6.9875 20.5875C6.99583 20.8625 6.9 21.1 6.7 21.3ZM7.35 11.8L10.775 2.6C10.8417 2.41667 10.9542 2.27083 11.1125 2.1625C11.2708 2.05417 11.45 2 11.65 2H12.35C12.55 2 12.7292 2.05417 12.8875 2.1625C13.0458 2.27083 13.1583 2.41667 13.225 2.6L16.65 11.825C16.75 12.1083 16.7167 12.375 16.55 12.625C16.3833 12.875 16.15 13 15.85 13C15.6667 13 15.4958 12.9458 15.3375 12.8375C15.1792 12.7292 15.0667 12.5833 15 12.4L14.25 10.2H9.8L9 12.425C8.93333 12.6083 8.825 12.75 8.675 12.85C8.525 12.95 8.35834 13 8.175 13C7.85834 13 7.6125 12.8708 7.4375 12.6125C7.2625 12.3542 7.23334 12.0833 7.35 11.8ZM10.35 8.6H13.65L12.05 4.05H11.95L10.35 8.6Z" }),
      " "
    ]
  }
), E2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M5 16C4.45 16 3.97917 15.8042 3.5875 15.4125C3.19583 15.0208 3 14.55 3 14V10C3 9.45 3.19583 8.97917 3.5875 8.5875C3.97917 8.19583 4.45 8 5 8H19C19.55 8 20.0208 8.19583 20.4125 8.5875C20.8042 8.97917 21 9.45 21 10V14C21 14.55 20.8042 15.0208 20.4125 15.4125C20.0208 15.8042 19.55 16 19 16H5ZM19 10H5V14H19V10Z" }),
      /* @__PURE__ */ a("path", { d: "M5 5.5C5 4.67157 5.67157 4 6.5 4H17.5C18.3284 4 19 4.67157 19 5.5C19 6.32843 18.3284 7 17.5 7H6.5C5.67157 7 5 6.32843 5 5.5Z" }),
      /* @__PURE__ */ a("path", { d: "M5 18.5C5 17.6716 5.67157 17 6.5 17H17.5C18.3284 17 19 17.6716 19 18.5C19 19.3284 18.3284 20 17.5 20H6.5C5.67157 20 5 19.3284 5 18.5Z" }),
      " "
    ]
  }
), R2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("g", { clipPath: "url(#clip0_1_148)", children: /* @__PURE__ */ a("path", { d: "M19.2535 0.622806C19.3084 0.240758 19.3471 0.0804978 19.3932 0.0451324C19.4789 -0.0206635 19.5056 -0.0169822 19.5926 0.0724691C19.6724 0.154597 19.9771 1.09947 20.0779 1.57791C20.1352 1.84951 20.135 1.88989 20.0759 2.13771C19.9652 2.6008 19.6335 2.99013 19.1006 3.28241C18.9851 3.34574 18.6504 3.45983 18.3568 3.53592C17.6512 3.71874 17.2297 3.86298 16.6183 4.13083C16.3401 4.25267 16.1052 4.35943 16.0961 4.36813C16.087 4.37678 16.0979 4.40271 16.1203 4.42574C16.1492 4.45543 16.1959 4.44896 16.2814 4.4035C16.4124 4.33378 16.5502 4.35454 16.5502 4.44395C16.5502 4.47481 16.5344 4.50007 16.515 4.50007C16.4958 4.50007 16.4276 4.54543 16.3636 4.60085C16.1919 4.74959 16.153 4.94505 16.23 5.27227C16.4027 6.00515 16.4017 6.31432 16.2248 6.90867C16.1409 7.19097 16.1305 7.78395 16.204 8.10319C16.2764 8.41752 16.5183 8.91056 16.7329 9.18098C16.9939 9.50977 17.2719 9.71782 17.7142 9.91544C18.3958 10.2199 18.5918 10.4187 18.4804 10.6927C18.4052 10.878 18.0014 11.3848 17.7604 11.5963C17.5332 11.7959 17.2539 11.9842 16.8998 12.1767C16.7628 12.2512 16.6378 12.3507 16.609 12.4082C16.5812 12.4638 16.5461 12.6806 16.5308 12.8901C16.5156 13.0995 16.4839 13.2872 16.4601 13.3072C16.4364 13.3272 16.3449 13.3634 16.2569 13.3875C16.0586 13.4422 16.0299 13.485 16.139 13.5635C16.3328 13.7033 16.3293 13.7678 16.1085 14.1161C15.7627 14.6622 15.5852 15.232 15.4256 16.3081C15.3178 17.0344 15.2468 17.1655 14.9046 17.2695C14.7149 17.3271 12.514 16.953 12.108 16.7942C12.0481 16.7707 11.9722 16.7795 11.8698 16.8217C11.7411 16.8747 11.6952 16.9297 11.5518 17.2029C11.4596 17.3785 11.302 17.7121 11.2015 17.9442L11.0188 18.3664L11.1826 18.6055C11.3396 18.8345 11.3486 18.8634 11.3972 19.2935C11.4369 19.6445 11.4696 19.7806 11.5474 19.9171C11.6255 20.0542 11.6373 20.1038 11.6025 20.147C11.5645 20.1941 11.5446 20.1929 11.4653 20.1394C11.3005 20.0283 11.3201 20.1208 11.4978 20.2926C11.7142 20.5018 11.9786 20.9245 12.1167 21.2819C12.1749 21.4328 12.3047 21.8998 12.405 22.3198C12.5051 22.7387 12.6975 23.4938 12.8331 24H3.00041C2.98473 24.0403 3.01575 23.9574 3.00041 24C3.16755 23.5707 3.4904 22.8509 3.8808 22.252C4.46487 21.3561 5.02401 20.2783 5.51163 19.1083C5.90984 18.153 6.38331 17.7143 6.38331 17.7143C6.26008 17.6461 6.61797 17.7551 6.61797 17.6382C6.61797 17.5579 6.95175 16.9075 7.18483 16.5336C7.41605 16.1626 7.56918 16.0665 7.81704 16.1369C8.03326 16.1984 8.13338 16.1546 8.21257 15.9642C8.44094 15.4149 8.80668 14.3393 8.92336 13.8742C9.09575 13.1867 9.09445 13.1799 8.59894 12.1515C7.87567 10.6507 7.07851 9.43031 6.08246 8.29901C5.30939 7.4209 4.92823 6.89207 4.53928 6.1577C4.44428 5.97837 4.352 5.83166 4.33416 5.83166C4.27867 5.83166 4.2574 5.96502 4.29268 6.09167C4.33792 6.25393 4.28061 6.35286 4.20245 6.24751C4.09167 6.09833 4.0688 5.80017 4.11919 5.16328C4.16417 4.59497 4.17478 4.54327 4.27559 4.39958C4.33507 4.31487 4.49186 4.16043 4.62398 4.05642C4.86278 3.86847 4.95514 3.74635 5.20995 3.28159C5.42598 2.88755 6.07318 2.27883 6.17007 2.37854C6.18754 2.39651 6.12596 2.59367 6.03326 2.81675C5.94055 3.03979 5.87255 3.24333 5.88218 3.2691C5.89398 3.30074 6.03748 3.25265 6.3254 3.12058C6.55955 3.01315 7.18784 2.73145 7.72155 2.49458C8.76213 2.0328 9.98105 1.42003 10.7474 0.973443C11.3249 0.636944 11.4547 0.576866 11.8752 0.451541C12.4345 0.284896 12.9336 0.260615 14.431 0.327233C15.1596 0.359661 15.7719 0.396397 15.7914 0.40889C15.8718 0.46 15.8169 0.533433 15.6409 0.609921C15.454 0.691226 15.3534 0.806369 15.4018 0.88411C15.4356 0.938705 16.9252 1.61359 17.2819 1.73598C17.4341 1.78822 17.6956 1.86067 17.8631 1.89705C18.5205 2.03985 18.8096 1.96939 18.9947 1.6215C19.1339 1.35987 19.164 1.24355 19.2535 0.622806Z" }) })
    ]
  }
), I2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M8.65 20.5L2.5 14.35C2.33333 14.1833 2.20833 14 2.125 13.8C2.04167 13.6 2 13.3916 2 13.175C2 12.9583 2.04167 12.75 2.125 12.55C2.20833 12.35 2.33333 12.1666 2.5 12L8.25 6.27498L6.375 4.39998C6.15833 4.18331 6.04583 3.92498 6.0375 3.62498C6.02917 3.32498 6.13333 3.05831 6.35 2.82498C6.56667 2.59164 6.83333 2.47498 7.15 2.47498C7.46667 2.47498 7.74167 2.59164 7.975 2.82498L17.15 12C17.3167 12.1666 17.4375 12.35 17.5125 12.55C17.5875 12.75 17.625 12.9583 17.625 13.175C17.625 13.3916 17.5875 13.6 17.5125 13.8C17.4375 14 17.3167 14.1833 17.15 14.35L11 20.5C10.8333 20.6666 10.65 20.7916 10.45 20.875C10.25 20.9583 10.0417 21 9.825 21C9.60833 21 9.4 20.9583 9.2 20.875C9 20.7916 8.81667 20.6666 8.65 20.5ZM9.825 7.84998L4.475 13.2H15.175L9.825 7.84998ZM19.8 21C19.2 21 18.6917 20.7875 18.275 20.3625C17.8583 19.9375 17.65 19.4166 17.65 18.8C17.65 18.35 17.7625 17.925 17.9875 17.525C18.2125 17.125 18.4667 16.7333 18.75 16.35L19.225 15.75C19.375 15.5666 19.5708 15.4708 19.8125 15.4625C20.0542 15.4541 20.25 15.5416 20.4 15.725L20.9 16.35C21.1667 16.7333 21.4167 17.125 21.65 17.525C21.8833 17.925 22 18.35 22 18.8C22 19.4166 21.7833 19.9375 21.35 20.3625C20.9167 20.7875 20.4 21 19.8 21Z" })
    ]
  }
), N2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M21 5V15.725C21 15.9583 20.9417 16.15 20.825 16.3C20.7083 16.45 20.5583 16.5667 20.375 16.65C20.1917 16.7333 20.0083 16.7625 19.825 16.7375C19.6417 16.7125 19.4667 16.6167 19.3 16.45L7.55001 4.7C7.38335 4.53333 7.28751 4.35833 7.26251 4.175C7.23751 3.99167 7.26668 3.80833 7.35001 3.625C7.43335 3.44167 7.55001 3.29167 7.70001 3.175C7.85001 3.05833 8.04168 3 8.27501 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5ZM5.00001 21C4.45001 21 3.97918 20.8042 3.58751 20.4125C3.19585 20.0208 3.00001 19.55 3.00001 19V5.8L2.10001 4.9C1.91668 4.71667 1.82501 4.48333 1.82501 4.2C1.82501 3.91667 1.91668 3.68333 2.10001 3.5C2.28335 3.31667 2.51668 3.225 2.80001 3.225C3.08335 3.225 3.31668 3.31667 3.50001 3.5L20.5 20.5C20.6833 20.6833 20.775 20.9167 20.775 21.2C20.775 21.4833 20.6833 21.7167 20.5 21.9C20.3167 22.0833 20.0833 22.175 19.8 22.175C19.5167 22.175 19.2833 22.0833 19.1 21.9L18.2 21H5.00001ZM14.175 17L12.075 14.9L11.25 16L9.40001 13.525C9.30001 13.3917 9.16668 13.325 9.00001 13.325C8.83335 13.325 8.70001 13.3917 8.60001 13.525L6.60001 16.2C6.46668 16.3667 6.45001 16.5417 6.55001 16.725C6.65001 16.9083 6.80001 17 7.00001 17H14.175Z" }),
      " "
    ]
  }
), O2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M11.6875 22L9.7375 17.1667L6 20.5V2L19 14.5833L13.9625 15.25L15.9125 20.1667L11.6875 22ZM10.3875 14.5833L12.5813 19.9167L13.9625 19.25L11.6875 14L15.5063 13.5L7.4625 5.66667V17.1667L10.3875 14.5833Z" })
    ]
  }
), $2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M9.47259 13.2703L8.37438 16.3514C8.28509 16.6036 8.14223 16.7973 7.94581 16.9324C7.74938 17.0676 7.52616 17.1351 7.27616 17.1351C6.86545 17.1351 6.53956 16.9595 6.29848 16.6081C6.05741 16.2568 6.00831 15.8829 6.15116 15.4865L10.8654 2.81081C10.9547 2.55856 11.1065 2.36036 11.3208 2.21622C11.5351 2.07207 11.7672 2 12.0172 2H12.9815C13.2494 2 13.486 2.07207 13.6913 2.21622C13.8967 2.36036 14.044 2.55856 14.1333 2.81081L18.8744 15.5135C19.0172 15.9099 18.9681 16.2793 18.7271 16.6216C18.486 16.964 18.1601 17.1351 17.7494 17.1351C17.4994 17.1351 17.2672 17.0631 17.0529 16.9189C16.8387 16.7748 16.6869 16.5766 16.5976 16.3243L15.5262 13.2703H9.47259ZM10.2494 11.0811H14.7494L12.5529 4.81081H12.4458L10.2494 11.0811Z" }),
      /* @__PURE__ */ a("path", { d: "M5.30804 21.6892C5.51339 21.8964 5.76786 22 6.07143 22H18.9286C19.2321 22 19.4866 21.8964 19.692 21.6892C19.8973 21.482 20 21.2252 20 20.9189C20 20.6126 19.8973 20.3559 19.692 20.1486C19.4866 19.9414 19.2321 19.8378 18.9286 19.8378H6.07143C5.76786 19.8378 5.51339 19.9414 5.30804 20.1486C5.10268 20.3559 5 20.6126 5 20.9189C5 21.2252 5.10268 21.482 5.30804 21.6892Z" }),
      " "
    ]
  }
), z2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M10 15C10.2833 15 10.5208 14.9042 10.7125 14.7125C10.9042 14.5208 11 14.2833 11 14V10C11 9.71667 10.9042 9.47917 10.7125 9.2875C10.5208 9.09583 10.2833 9 10 9C9.71667 9 9.47917 9.09583 9.2875 9.2875C9.09583 9.47917 9 9.71667 9 10V14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15ZM14 15C14.2833 15 14.5208 14.9042 14.7125 14.7125C14.9042 14.5208 15 14.2833 15 14V10C15 9.71667 14.9042 9.47917 14.7125 9.2875C14.5208 9.09583 14.2833 9 14 9C13.7167 9 13.4792 9.09583 13.2875 9.2875C13.0958 9.47917 13 9.71667 13 10V14C13 14.2833 13.0958 14.5208 13.2875 14.7125C13.4792 14.9042 13.7167 15 14 15ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 11.4667 2.04167 10.9333 2.125 10.4C2.20833 9.86667 2.33333 9.34167 2.5 8.825C2.58333 8.55833 2.75417 8.37917 3.0125 8.2875C3.27083 8.19583 3.51667 8.21667 3.75 8.35C4 8.48333 4.17917 8.67917 4.2875 8.9375C4.39583 9.19583 4.40833 9.46667 4.325 9.75C4.225 10.1167 4.14583 10.4875 4.0875 10.8625C4.02917 11.2375 4 11.6167 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C11.6 4 11.2042 4.02917 10.8125 4.0875C10.4208 4.14583 10.0333 4.23333 9.65 4.35C9.36667 4.43333 9.1 4.425 8.85 4.325C8.6 4.225 8.41667 4.05 8.3 3.8C8.18333 3.55 8.17917 3.29583 8.2875 3.0375C8.39583 2.77917 8.58333 2.60833 8.85 2.525C9.35 2.34167 9.86667 2.20833 10.4 2.125C10.9333 2.04167 11.4667 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM5.5 7C5.08333 7 4.72917 6.85417 4.4375 6.5625C4.14583 6.27083 4 5.91667 4 5.5C4 5.08333 4.14583 4.72917 4.4375 4.4375C4.72917 4.14583 5.08333 4 5.5 4C5.91667 4 6.27083 4.14583 6.5625 4.4375C6.85417 4.72917 7 5.08333 7 5.5C7 5.91667 6.85417 6.27083 6.5625 6.5625C6.27083 6.85417 5.91667 7 5.5 7ZM6 12C6 10.3333 6.58333 8.91667 7.75 7.75C8.91667 6.58333 10.3333 6 12 6C13.6667 6 15.0833 6.58333 16.25 7.75C17.4167 8.91667 18 10.3333 18 12C18 13.6667 17.4167 15.0833 16.25 16.25C15.0833 17.4167 13.6667 18 12 18C10.3333 18 8.91667 17.4167 7.75 16.25C6.58333 15.0833 6 13.6667 6 12Z" }),
      " "
    ]
  }
), T2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM13 18H20V6H13V18ZM18.25 15C18.4667 15 18.6458 14.9292 18.7875 14.7875C18.9292 14.6458 19 14.4667 19 14.25C19 14.0333 18.9292 13.8542 18.7875 13.7125C18.6458 13.5708 18.4667 13.5 18.25 13.5H14.75C14.5333 13.5 14.3542 13.5708 14.2125 13.7125C14.0708 13.8542 14 14.0333 14 14.25C14 14.4667 14.0708 14.6458 14.2125 14.7875C14.3542 14.9292 14.5333 15 14.75 15H18.25ZM18.25 12.5C18.4667 12.5 18.6458 12.4292 18.7875 12.2875C18.9292 12.1458 19 11.9667 19 11.75C19 11.5333 18.9292 11.3542 18.7875 11.2125C18.6458 11.0708 18.4667 11 18.25 11H14.75C14.5333 11 14.3542 11.0708 14.2125 11.2125C14.0708 11.3542 14 11.5333 14 11.75C14 11.9667 14.0708 12.1458 14.2125 12.2875C14.3542 12.4292 14.5333 12.5 14.75 12.5H18.25ZM18.25 10C18.4667 10 18.6458 9.92917 18.7875 9.7875C18.9292 9.64583 19 9.46667 19 9.25C19 9.03333 18.9292 8.85417 18.7875 8.7125C18.6458 8.57083 18.4667 8.5 18.25 8.5H14.75C14.5333 8.5 14.3542 8.57083 14.2125 8.7125C14.0708 8.85417 14 9.03333 14 9.25C14 9.46667 14.0708 9.64583 14.2125 9.7875C14.3542 9.92917 14.5333 10 14.75 10H18.25Z" }),
      " "
    ]
  }
), H2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M8.20101 12.3166L11.1558 9.36181C11.397 9.1206 11.6784 9 12 9C12.3216 9 12.603 9.1206 12.8442 9.36181L15.799 12.3166C16 12.5176 16.0503 12.7387 15.9497 12.9799C15.8492 13.2211 15.6583 13.3417 15.3769 13.3417L8.62312 13.3417C8.34171 13.3417 8.15075 13.2211 8.05025 12.9799C7.94975 12.7387 8 12.5176 8.20101 12.3166Z" }),
      /* @__PURE__ */ a("path", { d: "M2 13.5C2 12.6716 2.67157 12 3.5 12H20.5C21.3284 12 22 12.6716 22 13.5C22 14.3284 21.3284 15 20.5 15H3.5C2.67157 15 2 14.3284 2 13.5Z" }),
      " "
    ]
  }
), B2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M4.99999 7.84999L4.09999 8.72499C3.91665 8.90832 3.68749 8.99999 3.41249 8.99999C3.13749 8.99999 2.89999 8.89999 2.69999 8.69999C2.51665 8.51665 2.42499 8.28332 2.42499 7.99999C2.42499 7.71665 2.51665 7.48332 2.69999 7.29999L5.29999 4.69999C5.39999 4.59999 5.50832 4.52915 5.62499 4.48749C5.74165 4.44582 5.86665 4.42499 5.99999 4.42499C6.13332 4.42499 6.25832 4.44582 6.37499 4.48749C6.49165 4.52915 6.59999 4.59999 6.69999 4.69999L9.29999 7.29999C9.48332 7.48332 9.57915 7.71249 9.58749 7.98749C9.59582 8.26249 9.49999 8.49999 9.29999 8.69999C9.11665 8.88332 8.88749 8.97915 8.61249 8.98749C8.33749 8.99582 8.09999 8.90832 7.89999 8.72499L6.99999 7.84999V16.15L7.89999 15.275C8.08332 15.0917 8.31249 15 8.58749 15C8.86249 15 9.09999 15.1 9.29999 15.3C9.48332 15.4833 9.57499 15.7167 9.57499 16C9.57499 16.2833 9.48332 16.5167 9.29999 16.7L6.69999 19.3C6.59999 19.4 6.49165 19.4708 6.37499 19.5125C6.25832 19.5542 6.13332 19.575 5.99999 19.575C5.86665 19.575 5.74165 19.5542 5.62499 19.5125C5.50832 19.4708 5.39999 19.4 5.29999 19.3L2.69999 16.7C2.51665 16.5167 2.42082 16.2875 2.41249 16.0125C2.40415 15.7375 2.49999 15.5 2.69999 15.3C2.88332 15.1167 3.11249 15.0208 3.38749 15.0125C3.66249 15.0042 3.89999 15.0917 4.09999 15.275L4.99999 16.15V7.84999ZM13 19C12.7167 19 12.4792 18.9042 12.2875 18.7125C12.0958 18.5208 12 18.2833 12 18C12 17.7167 12.0958 17.4792 12.2875 17.2875C12.4792 17.0958 12.7167 17 13 17H21C21.2833 17 21.5208 17.0958 21.7125 17.2875C21.9042 17.4792 22 17.7167 22 18C22 18.2833 21.9042 18.5208 21.7125 18.7125C21.5208 18.9042 21.2833 19 21 19H13ZM13 13C12.7167 13 12.4792 12.9042 12.2875 12.7125C12.0958 12.5208 12 12.2833 12 12C12 11.7167 12.0958 11.4792 12.2875 11.2875C12.4792 11.0958 12.7167 11 13 11H21C21.2833 11 21.5208 11.0958 21.7125 11.2875C21.9042 11.4792 22 11.7167 22 12C22 12.2833 21.9042 12.5208 21.7125 12.7125C21.5208 12.9042 21.2833 13 21 13H13ZM13 6.99999C12.7167 6.99999 12.4792 6.90415 12.2875 6.71249C12.0958 6.52082 12 6.28332 12 5.99999C12 5.71665 12.0958 5.47915 12.2875 5.28749C12.4792 5.09582 12.7167 4.99999 13 4.99999H21C21.2833 4.99999 21.5208 5.09582 21.7125 5.28749C21.9042 5.47915 22 5.71665 22 5.99999C22 6.28332 21.9042 6.52082 21.7125 6.71249C21.5208 6.90415 21.2833 6.99999 21 6.99999H13Z" })
    ]
  }
), V1 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M10.6 13.8L8.45 11.65C8.26667 11.4667 8.03333 11.375 7.75 11.375C7.46667 11.375 7.23333 11.4667 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.1 16.1 10.3333 16.2 10.6 16.2C10.8667 16.2 11.1 16.1 11.3 15.9L16.95 10.25C17.1333 10.0667 17.225 9.83333 17.225 9.55C17.225 9.26667 17.1333 9.03333 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z" }),
      " "
    ]
  }
), on = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M18.3 5.70998C18.2075 5.61727 18.0976 5.54372 17.9766 5.49354C17.8557 5.44336 17.726 5.41753 17.595 5.41753C17.464 5.41753 17.3343 5.44336 17.2134 5.49354C17.0924 5.54372 16.9825 5.61727 16.89 5.70998L12 10.59L7.11 5.69998C7.01749 5.60727 6.9076 5.53372 6.78663 5.48354C6.66565 5.43336 6.53597 5.40753 6.405 5.40753C6.27403 5.40753 6.14435 5.43336 6.02338 5.48354C5.9024 5.53372 5.79251 5.60727 5.7 5.69998C5.31 6.08998 5.31 6.71998 5.7 7.10998L10.59 12L5.7 16.89C5.31 17.28 5.31 17.91 5.7 18.3C6.09 18.69 6.72 18.69 7.11 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10998C18.68 6.72998 18.68 6.08998 18.3 5.70998Z" }),
      " "
    ]
  }
), D2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M12 21C9.9 21 8.04167 20.3625 6.425 19.0875C4.80833 17.8125 3.75833 16.1833 3.275 14.2C3.20833 13.95 3.25833 13.7208 3.425 13.5125C3.59167 13.3042 3.81667 13.1833 4.1 13.15C4.36667 13.1167 4.60833 13.1667 4.825 13.3C5.04167 13.4333 5.19167 13.6333 5.275 13.9C5.675 15.4 6.5 16.625 7.75 17.575C9 18.525 10.4167 19 12 19C13.95 19 15.6042 18.3208 16.9625 16.9625C18.3208 15.6042 19 13.95 19 12C19 10.05 18.3208 8.39583 16.9625 7.0375C15.6042 5.67917 13.95 5 12 5C10.85 5 9.775 5.26667 8.775 5.8C7.775 6.33333 6.93333 7.06667 6.25 8H8C8.28333 8 8.52083 8.09583 8.7125 8.2875C8.90417 8.47917 9 8.71667 9 9C9 9.28333 8.90417 9.52083 8.7125 9.7125C8.52083 9.90417 8.28333 10 8 10H4C3.71667 10 3.47917 9.90417 3.2875 9.7125C3.09583 9.52083 3 9.28333 3 9V5C3 4.71667 3.09583 4.47917 3.2875 4.2875C3.47917 4.09583 3.71667 4 4 4C4.28333 4 4.52083 4.09583 4.7125 4.2875C4.90417 4.47917 5 4.71667 5 5V6.35C5.85 5.28333 6.8875 4.45833 8.1125 3.875C9.3375 3.29167 10.6333 3 12 3C13.25 3 14.4208 3.2375 15.5125 3.7125C16.6042 4.1875 17.5542 4.82917 18.3625 5.6375C19.1708 6.44583 19.8125 7.39583 20.2875 8.4875C20.7625 9.57917 21 10.75 21 12C21 13.25 20.7625 14.4208 20.2875 15.5125C19.8125 16.6042 19.1708 17.5542 18.3625 18.3625C17.5542 19.1708 16.6042 19.8125 15.5125 20.2875C14.4208 20.7625 13.25 21 12 21Z" }),
      " "
    ]
  }
), q2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M12 5C11.7167 5 11.4792 4.90417 11.2875 4.7125C11.0958 4.52083 11 4.28333 11 4V2C11 1.71667 11.0958 1.47917 11.2875 1.2875C11.4792 1.09583 11.7167 1 12 1C12.2833 1 12.5208 1.09583 12.7125 1.2875C12.9042 1.47917 13 1.71667 13 2V4C13 4.28333 12.9042 4.52083 12.7125 4.7125C12.5208 4.90417 12.2833 5 12 5ZM16.95 7.05C16.7667 6.86667 16.675 6.6375 16.675 6.3625C16.675 6.0875 16.7667 5.85 16.95 5.65L18.35 4.225C18.55 4.025 18.7875 3.925 19.0625 3.925C19.3375 3.925 19.575 4.025 19.775 4.225C19.9583 4.40833 20.05 4.64167 20.05 4.925C20.05 5.20833 19.9583 5.44167 19.775 5.625L18.35 7.05C18.1667 7.23333 17.9333 7.325 17.65 7.325C17.3667 7.325 17.1333 7.23333 16.95 7.05ZM20 13C19.7167 13 19.4792 12.9042 19.2875 12.7125C19.0958 12.5208 19 12.2833 19 12C19 11.7167 19.0958 11.4792 19.2875 11.2875C19.4792 11.0958 19.7167 11 20 11H22C22.2833 11 22.5208 11.0958 22.7125 11.2875C22.9042 11.4792 23 11.7167 23 12C23 12.2833 22.9042 12.5208 22.7125 12.7125C22.5208 12.9042 22.2833 13 22 13H20ZM12 23C11.7167 23 11.4792 22.9042 11.2875 22.7125C11.0958 22.5208 11 22.2833 11 22V20C11 19.7167 11.0958 19.4792 11.2875 19.2875C11.4792 19.0958 11.7167 19 12 19C12.2833 19 12.5208 19.0958 12.7125 19.2875C12.9042 19.4792 13 19.7167 13 20V22C13 22.2833 12.9042 22.5208 12.7125 22.7125C12.5208 22.9042 12.2833 23 12 23ZM5.65 7.05L4.225 5.65C4.025 5.45 3.925 5.20833 3.925 4.925C3.925 4.64167 4.025 4.40833 4.225 4.225C4.40833 4.04167 4.64167 3.95 4.925 3.95C5.20833 3.95 5.44167 4.04167 5.625 4.225L7.05 5.65C7.23333 5.83333 7.325 6.06667 7.325 6.35C7.325 6.63333 7.23333 6.86667 7.05 7.05C6.85 7.23333 6.61667 7.325 6.35 7.325C6.08333 7.325 5.85 7.23333 5.65 7.05ZM18.35 19.775L16.95 18.35C16.7667 18.15 16.675 17.9125 16.675 17.6375C16.675 17.3625 16.7667 17.1333 16.95 16.95C17.1333 16.7667 17.3625 16.675 17.6375 16.675C17.9125 16.675 18.15 16.7667 18.35 16.95L19.775 18.35C19.975 18.5333 20.0708 18.7667 20.0625 19.05C20.0542 19.3333 19.9583 19.575 19.775 19.775C19.575 19.975 19.3333 20.075 19.05 20.075C18.7667 20.075 18.5333 19.975 18.35 19.775ZM2 13C1.71667 13 1.47917 12.9042 1.2875 12.7125C1.09583 12.5208 1 12.2833 1 12C1 11.7167 1.09583 11.4792 1.2875 11.2875C1.47917 11.0958 1.71667 11 2 11H4C4.28333 11 4.52083 11.0958 4.7125 11.2875C4.90417 11.4792 5 11.7167 5 12C5 12.2833 4.90417 12.5208 4.7125 12.7125C4.52083 12.9042 4.28333 13 4 13H2ZM4.225 19.775C4.04167 19.5917 3.95 19.3583 3.95 19.075C3.95 18.7917 4.04167 18.5583 4.225 18.375L5.65 16.95C5.83333 16.7667 6.0625 16.675 6.3375 16.675C6.6125 16.675 6.85 16.7667 7.05 16.95C7.25 17.15 7.35 17.3875 7.35 17.6625C7.35 17.9375 7.25 18.175 7.05 18.375L5.65 19.775C5.45 19.975 5.20833 20.075 4.925 20.075C4.64167 20.075 4.40833 19.975 4.225 19.775ZM12 18C10.3333 18 8.91667 17.4167 7.75 16.25C6.58333 15.0833 6 13.6667 6 12C6 10.3333 6.58333 8.91667 7.75 7.75C8.91667 6.58333 10.3333 6 12 6C13.6667 6 15.0833 6.58333 16.25 7.75C17.4167 8.91667 18 10.3333 18 12C18 13.6667 17.4167 15.0833 16.25 16.25C15.0833 17.4167 13.6667 18 12 18ZM12 16C13.1 16 14.0417 15.6083 14.825 14.825C15.6083 14.0417 16 13.1 16 12C16 10.9 15.6083 9.95833 14.825 9.175C14.0417 8.39167 13.1 8 12 8C10.9 8 9.95833 8.39167 9.175 9.175C8.39167 9.95833 8 10.9 8 12C8 13.1 8.39167 14.0417 9.175 14.825C9.95833 15.6083 10.9 16 12 16Z" }),
      " "
    ]
  }
), F2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M12 21C9.48333 21 7.35417 20.1292 5.6125 18.3875C3.87083 16.6458 3 14.5167 3 12C3 9.70002 3.75 7.70418 5.25 6.01252C6.75 4.32085 8.66667 3.33335 11 3.05002C11.2167 3.01668 11.4083 3.04585 11.575 3.13752C11.7417 3.22918 11.875 3.35002 11.975 3.50002C12.075 3.65002 12.1292 3.82502 12.1375 4.02502C12.1458 4.22502 12.0833 4.41668 11.95 4.60002C11.6667 5.03335 11.4542 5.49168 11.3125 5.97502C11.1708 6.45835 11.1 6.96668 11.1 7.50002C11.1 9.00002 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.0167 12.9 17.5292 12.825 18.0375 12.675C18.5458 12.525 19 12.3167 19.4 12.05C19.5833 11.9333 19.7708 11.8792 19.9625 11.8875C20.1542 11.8958 20.325 11.9417 20.475 12.025C20.6417 12.1083 20.7708 12.2333 20.8625 12.4C20.9542 12.5667 20.9833 12.7667 20.95 13C20.7167 15.3 19.7375 17.2083 18.0125 18.725C16.2875 20.2417 14.2833 21 12 21ZM12 19C13.4667 19 14.7833 18.5958 15.95 17.7875C17.1167 16.9792 17.9667 15.925 18.5 14.625C18.1667 14.7083 17.8333 14.775 17.5 14.825C17.1667 14.875 16.8333 14.9 16.5 14.9C14.45 14.9 12.7042 14.1792 11.2625 12.7375C9.82083 11.2958 9.1 9.55002 9.1 7.50002C9.1 7.16668 9.125 6.83335 9.175 6.50002C9.225 6.16668 9.29167 5.83335 9.375 5.50002C8.075 6.03335 7.02083 6.88335 6.2125 8.05002C5.40417 9.21668 5 10.5333 5 12C5 13.9333 5.68333 15.5833 7.05 16.95C8.41667 18.3167 10.0667 19 12 19Z" }),
      " "
    ]
  }
), j2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M11 18.15V15C11 14.7167 11.0958 14.4792 11.2875 14.2875C11.4792 14.0959 11.7167 14 12 14C12.2833 14 12.5208 14.0959 12.7125 14.2875C12.9042 14.4792 13 14.7167 13 15V18.125L14.075 17.025C14.275 16.825 14.5167 16.725 14.8 16.725C15.0833 16.725 15.325 16.825 15.525 17.025C15.725 17.225 15.825 17.4667 15.825 17.75C15.825 18.0334 15.725 18.275 15.525 18.475L12.7 21.3C12.6 21.4 12.4917 21.4709 12.375 21.5125C12.2583 21.5542 12.1333 21.575 12 21.575C11.8667 21.575 11.7417 21.5542 11.625 21.5125C11.5083 21.4709 11.4 21.4 11.3 21.3L8.44999 18.45C8.24999 18.25 8.15415 18.0125 8.16249 17.7375C8.17082 17.4625 8.27499 17.225 8.47499 17.025C8.67499 16.825 8.91249 16.725 9.18749 16.725C9.46249 16.725 9.69999 16.825 9.89999 17.025L11 18.15ZM5.87499 13L6.97499 14.075C7.17499 14.275 7.27499 14.5167 7.27499 14.8C7.27499 15.0834 7.17499 15.325 6.97499 15.525C6.77499 15.725 6.53332 15.825 6.24999 15.825C5.96665 15.825 5.72499 15.725 5.52499 15.525L2.69999 12.7C2.59999 12.6 2.52915 12.4917 2.48749 12.375C2.44582 12.2584 2.42499 12.1334 2.42499 12C2.42499 11.8667 2.44582 11.7417 2.48749 11.625C2.52915 11.5084 2.59999 11.4 2.69999 11.3L5.52499 8.47505C5.72499 8.27505 5.96249 8.17505 6.23749 8.17505C6.51249 8.17505 6.74999 8.27505 6.94999 8.47505C7.14999 8.67505 7.24999 8.91255 7.24999 9.18755C7.24999 9.46255 7.14999 9.70005 6.94999 9.90005L5.84999 11H8.99999C9.28332 11 9.52082 11.0959 9.71249 11.2875C9.90415 11.4792 9.99999 11.7167 9.99999 12C9.99999 12.2834 9.90415 12.5209 9.71249 12.7125C9.52082 12.9042 9.28332 13 8.99999 13H5.87499ZM18.15 13H15C14.7167 13 14.4792 12.9042 14.2875 12.7125C14.0958 12.5209 14 12.2834 14 12C14 11.7167 14.0958 11.4792 14.2875 11.2875C14.4792 11.0959 14.7167 11 15 11H18.125L17.025 9.92505C16.825 9.72505 16.725 9.48338 16.725 9.20005C16.725 8.91672 16.825 8.67505 17.025 8.47505C17.225 8.27505 17.4667 8.17505 17.75 8.17505C18.0333 8.17505 18.275 8.27505 18.475 8.47505L21.3 11.3C21.4 11.4 21.4708 11.5084 21.5125 11.625C21.5542 11.7417 21.575 11.8667 21.575 12C21.575 12.1334 21.5542 12.2584 21.5125 12.375C21.4708 12.4917 21.4 12.6 21.3 12.7L18.45 15.55C18.25 15.75 18.0167 15.8459 17.75 15.8375C17.4833 15.8292 17.25 15.725 17.05 15.525C16.85 15.325 16.75 15.0875 16.75 14.8125C16.75 14.5375 16.85 14.3 17.05 14.1L18.15 13ZM11 5.85005L9.87499 6.97505C9.67499 7.17505 9.44165 7.27505 9.17499 7.27505C8.90832 7.27505 8.67499 7.17505 8.47499 6.97505C8.27499 6.77505 8.17499 6.53755 8.17499 6.26255C8.17499 5.98755 8.27499 5.75005 8.47499 5.55005L11.3 2.70005C11.4 2.60005 11.5083 2.52922 11.625 2.48755C11.7417 2.44588 11.8667 2.42505 12 2.42505C12.1333 2.42505 12.2583 2.44588 12.375 2.48755C12.4917 2.52922 12.6 2.60005 12.7 2.70005L15.55 5.55005C15.75 5.75005 15.85 5.98338 15.85 6.25005C15.85 6.51672 15.75 6.75005 15.55 6.95005C15.35 7.15005 15.1125 7.25005 14.8375 7.25005C14.5625 7.25005 14.325 7.15005 14.125 6.95005L13 5.85005V9.00005C13 9.28338 12.9042 9.52088 12.7125 9.71255C12.5208 9.90422 12.2833 10 12 10C11.7167 10 11.4792 9.90422 11.2875 9.71255C11.0958 9.52088 11 9.28338 11 9.00005V5.85005Z" }),
      " "
    ]
  }
), Z1 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M23 9.00002C23 10.15 22.7958 11.2458 22.3875 12.2875C21.9792 13.3292 21.425 14.275 20.725 15.125C20.525 15.3583 20.275 15.4833 19.975 15.5C19.675 15.5167 19.4083 15.4083 19.175 15.175C18.9583 14.9583 18.8583 14.7 18.875 14.4C18.8917 14.1 18.9917 13.825 19.175 13.575C19.675 12.9417 20.0625 12.2333 20.3375 11.45C20.6125 10.6667 20.75 9.85002 20.75 9.00002C20.75 8.15002 20.6125 7.34168 20.3375 6.57502C20.0625 5.80835 19.675 5.10835 19.175 4.47502C18.975 4.22502 18.8708 3.95002 18.8625 3.65002C18.8542 3.35002 18.9583 3.08335 19.175 2.85002C19.3917 2.61668 19.6542 2.50418 19.9625 2.51252C20.2708 2.52085 20.525 2.64168 20.725 2.87502C21.425 3.72502 21.9792 4.67085 22.3875 5.71252C22.7958 6.75418 23 7.85002 23 9.00002ZM18.45 9.00002C18.45 9.53335 18.3667 10.0458 18.2 10.5375C18.0333 11.0292 17.8 11.4833 17.5 11.9C17.3167 12.15 17.0708 12.2792 16.7625 12.2875C16.4542 12.2958 16.1833 12.1833 15.95 11.95C15.7333 11.7333 15.6208 11.4708 15.6125 11.1625C15.6042 10.8542 15.675 10.5583 15.825 10.275C15.925 10.0917 16.0042 9.89168 16.0625 9.67502C16.1208 9.45835 16.15 9.23335 16.15 9.00002C16.15 8.76668 16.1208 8.54168 16.0625 8.32502C16.0042 8.10835 15.925 7.90002 15.825 7.70002C15.675 7.41668 15.6042 7.12502 15.6125 6.82502C15.6208 6.52502 15.7333 6.26668 15.95 6.05002C16.1833 5.81668 16.4542 5.70418 16.7625 5.71252C17.0708 5.72085 17.3167 5.85002 17.5 6.10002C17.8 6.51668 18.0333 6.97085 18.2 7.46252C18.3667 7.95418 18.45 8.46668 18.45 9.00002ZM9 13C7.9 13 6.95833 12.6083 6.175 11.825C5.39167 11.0417 5 10.1 5 9.00002C5 7.90002 5.39167 6.95835 6.175 6.17502C6.95833 5.39168 7.9 5.00002 9 5.00002C10.1 5.00002 11.0417 5.39168 11.825 6.17502C12.6083 6.95835 13 7.90002 13 9.00002C13 10.1 12.6083 11.0417 11.825 11.825C11.0417 12.6083 10.1 13 9 13ZM1 19V18.2C1 17.65 1.14167 17.1333 1.425 16.65C1.70833 16.1667 2.1 15.8 2.6 15.55C3.45 15.1167 4.40833 14.75 5.475 14.45C6.54167 14.15 7.71667 14 9 14C10.2833 14 11.4583 14.15 12.525 14.45C13.5917 14.75 14.55 15.1167 15.4 15.55C15.9 15.8 16.2917 16.1667 16.575 16.65C16.8583 17.1333 17 17.65 17 18.2V19C17 19.55 16.8042 20.0208 16.4125 20.4125C16.0208 20.8042 15.55 21 15 21H3C2.45 21 1.97917 20.8042 1.5875 20.4125C1.19583 20.0208 1 19.55 1 19Z" }),
      " "
    ]
  }
), U2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M7 17C5.61667 17 4.4375 16.5125 3.4625 15.5375C2.4875 14.5625 2 13.3833 2 12C2 10.6167 2.4875 9.4375 3.4625 8.4625C4.4375 7.4875 5.61667 7 7 7H10C10.2833 7 10.5208 7.09583 10.7125 7.2875C10.9042 7.47917 11 7.71667 11 8C11 8.28333 10.9042 8.52083 10.7125 8.7125C10.5208 8.90417 10.2833 9 10 9H7C6.16667 9 5.45833 9.29167 4.875 9.875C4.29167 10.4583 4 11.1667 4 12C4 12.8333 4.29167 13.5417 4.875 14.125C5.45833 14.7083 6.16667 15 7 15H10C10.2833 15 10.5208 15.0958 10.7125 15.2875C10.9042 15.4792 11 15.7167 11 16C11 16.2833 10.9042 16.5208 10.7125 16.7125C10.5208 16.9042 10.2833 17 10 17H7ZM9 13C8.71667 13 8.47917 12.9042 8.2875 12.7125C8.09583 12.5208 8 12.2833 8 12C8 11.7167 8.09583 11.4792 8.2875 11.2875C8.47917 11.0958 8.71667 11 9 11H15C15.2833 11 15.5208 11.0958 15.7125 11.2875C15.9042 11.4792 16 11.7167 16 12C16 12.2833 15.9042 12.5208 15.7125 12.7125C15.5208 12.9042 15.2833 13 15 13H9ZM14 17C13.7167 17 13.4792 16.9042 13.2875 16.7125C13.0958 16.5208 13 16.2833 13 16C13 15.7167 13.0958 15.4792 13.2875 15.2875C13.4792 15.0958 13.7167 15 14 15H17C17.8333 15 18.5417 14.7083 19.125 14.125C19.7083 13.5417 20 12.8333 20 12C20 11.1667 19.7083 10.4583 19.125 9.875C18.5417 9.29167 17.8333 9 17 9H14C13.7167 9 13.4792 8.90417 13.2875 8.7125C13.0958 8.52083 13 8.28333 13 8C13 7.71667 13.0958 7.47917 13.2875 7.2875C13.4792 7.09583 13.7167 7 14 7H17C18.3833 7 19.5625 7.4875 20.5375 8.4625C21.5125 9.4375 22 10.6167 22 12C22 13.3833 21.5125 14.5625 20.5375 15.5375C19.5625 16.5125 18.3833 17 17 17H14Z" }),
      " "
    ]
  }
), V2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M10.475 22C10.0083 22 9.57082 21.9 9.16249 21.7C8.75416 21.5 8.40832 21.2167 8.12499 20.85L3.09999 14.475C2.96666 14.325 2.90832 14.1458 2.92499 13.9375C2.94166 13.7292 3.01666 13.5583 3.14999 13.425C3.48332 13.075 3.88332 12.8667 4.34999 12.8C4.81666 12.7333 5.24999 12.825 5.64999 13.075L7.49999 14.2V6C7.49999 5.71667 7.59582 5.47917 7.78749 5.2875C7.97916 5.09583 8.21666 5 8.49999 5C8.78332 5 9.02499 5.09583 9.22499 5.2875C9.42499 5.47917 9.52499 5.71667 9.52499 6V11H17C17.8333 11 18.5417 11.2917 19.125 11.875C19.7083 12.4583 20 13.1667 20 14V18C20 19.1 19.6083 20.0417 18.825 20.825C18.0417 21.6083 17.1 22 16 22H10.475ZM11.975 9C11.6917 9 11.4542 8.90417 11.2625 8.7125C11.0708 8.52083 10.975 8.28333 10.975 8C10.975 7.96667 11.0167 7.8 11.1 7.5C11.2333 7.26667 11.3333 7.02917 11.4 6.7875C11.4667 6.54583 11.5 6.28333 11.5 6C11.5 5.16667 11.2083 4.45833 10.625 3.875C10.0417 3.29167 9.33332 3 8.49999 3C7.66666 3 6.95832 3.29167 6.37499 3.875C5.79166 4.45833 5.49999 5.16667 5.49999 6C5.49999 6.28333 5.53332 6.54583 5.59999 6.7875C5.66666 7.02917 5.76666 7.26667 5.89999 7.5C5.94999 7.58333 5.98332 7.66667 5.99999 7.75C6.01666 7.83333 6.02499 7.91667 6.02499 8C6.02499 8.28333 5.93332 8.52083 5.74999 8.7125C5.56666 8.90417 5.33332 9 5.04999 9C4.86666 9 4.69582 8.95 4.53749 8.85C4.37916 8.75 4.25832 8.625 4.17499 8.475C3.95832 8.10833 3.79166 7.71667 3.67499 7.3C3.55832 6.88333 3.49999 6.45 3.49999 6C3.49999 4.61667 3.98749 3.4375 4.96249 2.4625C5.93749 1.4875 7.11666 1 8.49999 1C9.88332 1 11.0625 1.4875 12.0375 2.4625C13.0125 3.4375 13.5 4.61667 13.5 6C13.5 6.45 13.4417 6.88333 13.325 7.3C13.2083 7.71667 13.0417 8.10833 12.825 8.475C12.7417 8.625 12.625 8.75 12.475 8.85C12.325 8.95 12.1583 9 11.975 9Z" }),
      " "
    ]
  }
), G1 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M13 17.05C13.7333 16.7 14.4708 16.4375 15.2125 16.2625C15.9542 16.0875 16.7167 16 17.5 16C18.1 16 18.6875 16.05 19.2625 16.15C19.8375 16.25 20.4167 16.4 21 16.6V6.7C20.45 6.46667 19.8792 6.29167 19.2875 6.175C18.6958 6.05833 18.1 6 17.5 6C16.7167 6 15.9417 6.1 15.175 6.3C14.4083 6.5 13.6833 6.8 13 7.2V17.05ZM12 19.475C11.7667 19.475 11.5458 19.4458 11.3375 19.3875C11.1292 19.3292 10.9333 19.25 10.75 19.15C10.1 18.7667 9.41667 18.4792 8.7 18.2875C7.98333 18.0958 7.25 18 6.5 18C5.8 18 5.1125 18.0917 4.4375 18.275C3.7625 18.4583 3.11667 18.7167 2.5 19.05C2.15 19.2333 1.8125 19.225 1.4875 19.025C1.1625 18.825 1 18.5333 1 18.15V6.1C1 5.91667 1.04583 5.74167 1.1375 5.575C1.22917 5.40833 1.36667 5.28333 1.55 5.2C2.33333 4.81667 3.1375 4.52083 3.9625 4.3125C4.7875 4.10417 5.63333 4 6.5 4C7.46667 4 8.4125 4.125 9.3375 4.375C10.2625 4.625 11.15 5 12 5.5C12.85 5 13.7375 4.625 14.6625 4.375C15.5875 4.125 16.5333 4 17.5 4C18.3667 4 19.2125 4.10417 20.0375 4.3125C20.8625 4.52083 21.6667 4.81667 22.45 5.2C22.6333 5.28333 22.7708 5.40833 22.8625 5.575C22.9542 5.74167 23 5.91667 23 6.1V18.15C23 18.5333 22.8375 18.825 22.5125 19.025C22.1875 19.225 21.85 19.2333 21.5 19.05C20.8833 18.7167 20.2375 18.4583 19.5625 18.275C18.8875 18.0917 18.2 18 17.5 18C16.75 18 16.0167 18.0958 15.3 18.2875C14.5833 18.4792 13.9 18.7667 13.25 19.15C13.0667 19.25 12.8708 19.3292 12.6625 19.3875C12.4542 19.4458 12.2333 19.475 12 19.475ZM14 8.775C14 8.625 14.0542 8.47083 14.1625 8.3125C14.2708 8.15417 14.3917 8.05 14.525 8C15.0083 7.83333 15.4917 7.70833 15.975 7.625C16.4583 7.54167 16.9667 7.5 17.5 7.5C17.8333 7.5 18.1625 7.52083 18.4875 7.5625C18.8125 7.60417 19.1333 7.65833 19.45 7.725C19.6 7.75833 19.7292 7.84167 19.8375 7.975C19.9458 8.10833 20 8.25833 20 8.425C20 8.70833 19.9083 8.91667 19.725 9.05C19.5417 9.18333 19.3083 9.21667 19.025 9.15C18.7917 9.1 18.5458 9.0625 18.2875 9.0375C18.0292 9.0125 17.7667 9 17.5 9C17.0667 9 16.6417 9.04167 16.225 9.125C15.8083 9.20833 15.4083 9.31667 15.025 9.45C14.725 9.56667 14.4792 9.55833 14.2875 9.425C14.0958 9.29167 14 9.075 14 8.775ZM14 14.275C14 14.125 14.0542 13.9708 14.1625 13.8125C14.2708 13.6542 14.3917 13.55 14.525 13.5C15.0083 13.3333 15.4917 13.2083 15.975 13.125C16.4583 13.0417 16.9667 13 17.5 13C17.8333 13 18.1625 13.0208 18.4875 13.0625C18.8125 13.1042 19.1333 13.1583 19.45 13.225C19.6 13.2583 19.7292 13.3417 19.8375 13.475C19.9458 13.6083 20 13.7583 20 13.925C20 14.2083 19.9083 14.4167 19.725 14.55C19.5417 14.6833 19.3083 14.7167 19.025 14.65C18.7917 14.6 18.5458 14.5625 18.2875 14.5375C18.0292 14.5125 17.7667 14.5 17.5 14.5C17.0667 14.5 16.6417 14.5375 16.225 14.6125C15.8083 14.6875 15.4083 14.7917 15.025 14.925C14.725 15.0417 14.4792 15.0375 14.2875 14.9125C14.0958 14.7875 14 14.575 14 14.275ZM14 11.525C14 11.375 14.0542 11.2208 14.1625 11.0625C14.2708 10.9042 14.3917 10.8 14.525 10.75C15.0083 10.5833 15.4917 10.4583 15.975 10.375C16.4583 10.2917 16.9667 10.25 17.5 10.25C17.8333 10.25 18.1625 10.2708 18.4875 10.3125C18.8125 10.3542 19.1333 10.4083 19.45 10.475C19.6 10.5083 19.7292 10.5917 19.8375 10.725C19.9458 10.8583 20 11.0083 20 11.175C20 11.4583 19.9083 11.6667 19.725 11.8C19.5417 11.9333 19.3083 11.9667 19.025 11.9C18.7917 11.85 18.5458 11.8125 18.2875 11.7875C18.0292 11.7625 17.7667 11.75 17.5 11.75C17.0667 11.75 16.6417 11.7917 16.225 11.875C15.8083 11.9583 15.4083 12.0667 15.025 12.2C14.725 12.3167 14.4792 12.3083 14.2875 12.175C14.0958 12.0417 14 11.825 14 11.525Z" }),
      " "
    ]
  }
), No = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e * 1,
    height: e * 0.4,
    viewBox: "0 0 32 13",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M16 3L28 13H4L16 3Z", fill: "#2670E8" }),
      /* @__PURE__ */ a(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M31.1243 13L16.0001 0.396484L0.875854 13H31.1243ZM28 13L16 3L4 13H28Z",
          fill: "white"
        }
      )
    ]
  }
), Z2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M7.74687 1.00812C7.66942 1.02044 7.51497 1.11665 7.40368 1.22196C7.20272 1.41219 7.20164 1.41645 7.24371 1.87875C7.26705 2.1347 7.31392 2.69232 7.34776 3.11796C7.61178 6.43593 7.65513 7.42951 7.53904 7.5022C7.34378 7.62448 7.23611 7.43996 5.4151 3.86266C4.79087 2.63635 4.67189 2.50711 4.2859 2.63614C3.67367 2.84085 3.72185 3.15023 4.69994 5.29459C4.82544 5.56968 4.92804 5.80618 4.92804 5.82021C4.92804 5.83432 5.03816 6.08815 5.17297 6.38423C5.90324 7.98987 6.09352 8.6429 5.85782 8.73457C5.69079 8.79947 5.39329 8.63804 5.14872 8.34994C5.02431 8.20336 4.87122 8.02534 4.80861 7.95439C4.7459 7.88354 4.56811 7.66583 4.41348 7.47076C4.25885 7.27569 4.11761 7.10162 4.0996 7.08383C4.0816 7.06614 3.78704 6.71341 3.4451 6.29999C3.10309 5.88657 2.77897 5.53109 2.72474 5.51001C2.41291 5.38882 2 5.62798 2 5.92975C2 6.1932 2.62513 7.25305 3.92633 9.19547C4.74183 10.4127 4.93347 10.851 5.11805 11.9204C5.50893 14.1859 6.04086 15.5747 6.72906 16.1271C7.19756 16.5032 7.21077 16.506 8.31382 16.4582L9.32404 16.4145L10.0917 15.3766C10.5139 14.8057 10.8924 14.2951 10.9331 14.2418C11.2275 13.8553 11.9934 12.4858 11.9934 12.346C11.9934 12.326 11.5954 12.3281 11.1089 12.3505C10.51 12.3781 10.0939 12.3655 9.81996 12.3116C9.34503 12.2179 8.74686 11.9422 8.41869 11.6655C7.90078 11.2289 7.74859 10.454 8.07143 9.89599C8.31256 9.47909 8.64688 9.30024 9.34964 9.21197C9.91759 9.14074 10.5252 8.97299 11.4046 8.64492L11.8661 8.47277V7.71973C11.8661 6.94826 12.0114 4.25775 12.1217 2.98899C12.2083 1.99134 12.2097 2.00218 11.968 1.75726C11.8009 1.58811 11.6985 1.53801 11.5195 1.53801C11.0687 1.53801 11.0441 1.60107 10.5976 3.89255C10.3765 5.02711 10.1557 6.18752 10.1069 6.47123C10.0003 7.09053 9.9166 7.31878 9.77581 7.3735C9.59186 7.44509 9.41968 7.15323 9.33698 6.62999C9.29518 6.36535 9.18624 5.66997 9.09485 5.08477C8.92565 4.00081 8.58735 1.97013 8.51505 1.60372C8.47162 1.38388 8.1867 1.05499 8.00266 1.01237C7.93951 0.99773 7.82441 0.995796 7.74687 1.00812ZM16.2263 7.64538C15.9431 7.71349 15.12 8.01544 14.7447 8.18897C14.5251 8.29054 14.3287 8.37358 14.3083 8.37358C14.288 8.37358 13.7516 8.63383 13.1164 8.952C11.7752 9.62364 10.2221 10.1791 9.68469 10.1793C9.31526 10.1794 8.91769 10.3451 8.88702 10.5115C8.85291 10.6978 9.23971 11.0663 9.62615 11.2154C9.9688 11.3476 10.0583 11.3531 11.2858 11.3164C12.3829 11.2837 12.6156 11.2932 12.7917 11.3779C13.0946 11.5234 13.1779 11.7716 13.0775 12.2305C12.9753 12.6983 12.4059 13.8553 11.947 14.5277C11.6488 14.9647 9.87371 17.3579 8.84259 18.7132C8.47461 19.197 8.45814 19.4434 8.77256 19.762C9.17981 20.1745 9.12724 20.2112 11.3156 17.9827C13.3582 15.9029 13.5287 15.7665 13.6211 16.1396C13.6772 16.3662 13.6901 16.3331 12.782 18.2958C12.6283 18.6278 12.5026 18.9087 12.5026 18.9198C12.5026 18.9309 12.3989 19.167 12.2723 19.4445C11.2318 21.7231 11.1894 21.8762 11.4905 22.2639C11.5982 22.4027 11.6723 22.4313 11.9185 22.4297C12.0822 22.4286 12.2603 22.3923 12.3142 22.349C12.3682 22.3058 12.6808 21.7772 13.009 21.1742C13.584 20.1178 13.9216 19.5059 14.2076 19.0011C15.2641 17.1362 15.2589 17.1438 15.4502 17.1438C15.5724 17.1438 15.5758 17.1739 15.538 17.9338C15.5035 18.6276 15.4165 19.4544 15.1769 21.3677C15.0863 22.09 15.0979 22.6972 15.2049 22.8402C15.3309 23.0086 15.7683 23.0562 15.9687 22.9233C16.1743 22.7867 16.2702 22.4417 16.5086 20.9808C17.0134 17.8841 17.14 17.2951 17.34 17.1118C17.4632 16.9988 17.472 16.9989 17.6007 17.1169C17.6739 17.1841 17.7601 17.2887 17.7921 17.3494C17.8242 17.41 17.9206 18.1358 18.0065 18.9623C18.2479 21.2883 18.2687 21.4088 18.4576 21.5773C18.6664 21.7635 18.8796 21.7613 19.0981 21.571C19.2645 21.426 19.2741 21.3836 19.3292 20.5554C19.3608 20.08 19.3739 19.1397 19.3582 18.4657C19.3278 17.1534 19.3875 16.0546 19.5099 15.6715C19.5515 15.5414 19.7501 15.0432 19.9513 14.5643C20.1526 14.0855 20.4383 13.3165 20.5862 12.8554C21.0422 11.4342 21.0078 10.2932 20.4931 9.76903C20.3838 9.65775 20.0548 9.43637 19.7619 9.27714C19.3877 9.07383 19.0357 8.80332 18.5784 8.36772C18.056 7.87024 17.8702 7.73311 17.6375 7.67371C17.3547 7.60166 16.4811 7.58406 16.2263 7.64538ZM21.1923 9.53069C21.1675 9.60989 21.2138 9.82614 21.3071 10.0665C21.5134 10.5978 21.5604 11.0656 21.4707 11.6947C21.3551 12.5054 21.3599 12.5943 21.5214 12.6176C21.7393 12.649 21.8504 12.3982 21.9315 11.6911C22.0198 10.9209 21.9423 10.334 21.6807 9.79231C21.4926 9.40282 21.2697 9.28347 21.1923 9.53069ZM22.3483 9.75326C22.3295 9.80267 22.372 10.0276 22.4425 10.253C22.6088 10.7841 22.5769 11.6232 22.366 12.2625C22.234 12.6626 22.2301 12.7103 22.3218 12.8033C22.5391 13.0235 22.7617 12.7194 22.9131 11.9954C23.0736 11.2284 23.006 10.2756 22.7576 9.80542C22.6731 9.64546 22.4022 9.6109 22.3483 9.75326ZM4.7516 15.2847C4.6205 15.4175 4.66339 15.6069 4.9389 16.112C5.4065 16.9693 6.53615 17.9508 6.7999 17.7292C6.98675 17.5721 6.91282 17.4272 6.5205 17.1819C6.03028 16.8754 5.59868 16.3776 5.27512 15.7453C5.01716 15.2414 4.898 15.1365 4.7516 15.2847ZM3.84671 15.6918C3.74599 15.8148 3.82653 16.119 4.12023 16.7246C4.52341 17.556 5.39555 18.4088 5.71531 18.2844C5.8846 18.2187 5.84099 17.9585 5.64067 17.8386C5.10936 17.5206 4.59317 16.8063 4.323 16.0153C4.18248 15.6036 4.01319 15.4886 3.84671 15.6918Z" }),
      " "
    ]
  }
), G2 = () => {
  const { toggleTheme: e, theme: t } = P1(), { setIsOpenWidget: r, reset: n, isActive: o } = P(), { t: i } = O(), { version: s } = E1();
  return /* @__PURE__ */ a("div", { className: "flex gap-2 items-center justify-between w-full border-b-1 border-border p-4 max-sm:p-2.5", children: [
    /* @__PURE__ */ a(
      "a",
      {
        tabIndex: -1,
        href: "https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras",
        target: "_blank",
        rel: "noreferrer noopener",
        className: j(
          "bg-primary transition-all size-8 sm:size-9 relative overflow-hidden",
          "rounded-sm grid place-items-center hover:brightness-110"
        ),
        children: /* @__PURE__ */ a(
          R2,
          {
            "aria-hidden": !0,
            size: 22,
            className: "text-white absolute size-6 sm:size-7 bottom-0",
            iconTitle: "VLibras Widget+ Logo"
          }
        )
      }
    ),
    /* @__PURE__ */ a("div", { className: "flex flex-col ml-1 leading-tight max-sm:hidden relative -top-0.5", children: [
      /* @__PURE__ */ a("p", { className: "text-lg font-bold text-foreground", children: "VLibras Widget+" }),
      /* @__PURE__ */ a("span", { className: "text-xs font-medium text-muted-foreground", children: [
        "v",
        s
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "ml-auto flex items-center gap-x-1", children: [
      o && /* @__PURE__ */ a(br, { title: i("titles.reset"), onClick: n, children: /* @__PURE__ */ a(D2, { "aria-hidden": !0, size: 22, iconTitle: i("titles.reset") }) }),
      /* @__PURE__ */ a(br, { title: i("titles.toggle_theme"), onClick: e, children: [
        t === "light" && /* @__PURE__ */ a(q2, { "aria-hidden": !0, size: 22, iconTitle: i("titles.reset") }),
        t === "dark" && /* @__PURE__ */ a(F2, { "aria-hidden": !0, size: 22, iconTitle: i("titles.reset") })
      ] }),
      /* @__PURE__ */ a(br, { variant: "destructive", title: i("titles.close"), onClick: () => r(!1), children: /* @__PURE__ */ a(on, { "aria-hidden": !0, size: 22, iconTitle: i("titles.close") }) })
    ] })
  ] });
}, W2 = ({ children: e }) => /* @__PURE__ */ a("div", { className: j("overflow-y-auto rounded-sm p-4 gap-4 max-sm:grid-cols-1 grid grid-cols-2 auto-rows-min"), children: e }), Ie = [
  { key: "medium", value: 1.25 },
  { key: "large", value: 1.5 },
  { key: "very_large", value: 2 }
];
function X2() {
  const { fontSize: e } = P(), { current: t } = ne(/* @__PURE__ */ new Map()), [r, n] = F(-1), [o, i] = F(() => Ie[r] || void 0);
  M(() => {
    t.size || s();
    const c = Ie.find(({ key: p }) => p === e);
    n(Ie.findIndex(({ key: p }) => p === e)), i(c), l(e);
  }, [e]);
  const s = () => {
    document.querySelectorAll(
      "p, span, a, strong, h1, h2, h3, h4, h5, h6, b, em, i, code, mark, pre, blockquote, abbr, cite, q, time"
    ).forEach((c) => {
      if (!nn(c)) return;
      const p = window.getComputedStyle(c);
      t.set(c, {
        fontSize: Number.parseFloat(p.fontSize),
        inlineFontSize: c.style.fontSize || ""
      });
    });
  }, u = () => {
    const c = r + 1 < Ie.length ? r + 1 : -1, p = Ie[c] || void 0;
    n(c), i(p), P.setState({ fontSize: p == null ? void 0 : p.key });
  }, l = (c) => {
    const p = Ie.find(({ key: d }) => d === c);
    t.forEach(({ inlineFontSize: d, fontSize: f }, h) => {
      h.style.fontSize = p ? `${f * p.value}px` : d || "";
    });
  };
  return { increaseFontSize: u, index: r, option: o };
}
const ce = ue(
  ({ children: e, disabled: t, className: r, ...n }, o) => /* @__PURE__ */ a(
    "button",
    {
      ref: o,
      className: j(
        "cursor-pointer text-foreground rounded-md flex justify-center items-center gap-x-2",
        t && "pointer-events-none opacity-50",
        r
      ),
      type: n.type || "button",
      ...n,
      children: e
    }
  )
), J = ue(({ children: e, className: t, disabled: r, isActive: n, showActiveIndicator: o, ...i }, s) => /* @__PURE__ */ a(
  ce,
  {
    ref: s,
    className: j(
      "cursor-pointer overflow-hidden bg-muted fill-foreground/80 text-foreground/80 border-1 border-border",
      "flex flex-col items-center justify-center rounded-md h-32 p-4 font-bold relative",
      "hover:text-foreground hover:fill-foreground hover:border-primary",
      n && "!bg-primary/10 border-primary [&>*]:text-primary [&>*]:fill-primary",
      r && "!cursor-not-allowed pointer-events-none *:pointer-events-none !text-muted-foreground opacity-80 !border-border !bg-muted/30",
      t
    ),
    ...i,
    children: [
      e,
      !r && o && n && /* @__PURE__ */ a(K2, {})
    ]
  }
)), K2 = () => {
  const { t: e } = O();
  return /* @__PURE__ */ a("div", { "aria-hidden": !0, className: "absolute top-2 right-2 fill-primary", children: /* @__PURE__ */ a(V1, { iconTitle: e("actived"), size: 16 }) });
}, an = ({ size: e, actived: t }) => t < 0 ? null : /* @__PURE__ */ a("div", { className: "absolute top-2 right-2 flex items-center gap-1", children: Array.from({ length: e }).map((r, n) => /* @__PURE__ */ a(
  "div",
  {
    className: j(
      "w-2.5 h-2.5 rounded-full border-1 border-primary/50",
      t === n ? "bg-primary" : "bg-transparent"
    )
  },
  n
)) }), ee = ue(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ a("span", { ref: n, className: j("text-[15px] leading-tight font-semibold", t), ...r, children: e })
), te = ue(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ a("span", { ref: n, className: j("text-[13.5px] text-muted-foreground font-medium", t), ...r, children: e })
), re = ue(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ a("span", { ref: n, className: j(t), ...r, children: e })
), Y2 = () => {
  const { t: e } = O(), { increaseFontSize: t, option: r, index: n } = X2();
  return /* @__PURE__ */ a(J, { "aria-label": e("al.font_increase"), isActive: !!r, onClick: t, children: [
    /* @__PURE__ */ a(an, { size: 3, actived: n }),
    /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(S2, { iconTitle: e("al.font_increase"), size: 36 }) }),
    /* @__PURE__ */ a(ee, { children: e("font_increase") }),
    /* @__PURE__ */ a(te, { children: e((r == null ? void 0 : r.key) || "deactivated") })
  ] });
}, ct = ue(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ a(
    "p",
    {
      ref: n,
      className: j("text-foreground/80 tex-base font-bold  leading-normal col-[1/-1]", t),
      ...r,
      children: e
    }
  )
);
ue(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ a("div", { ref: n, className: j("w-full col-[1/-1] h-[1px] bg-border", t), ...r, children: e })
);
const Q2 = "body.vwp-highlight-links a:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus){outline:2px solid yellow!important;font-weight:700!important;background:#000!important;transition:transform .3s ease!important;color:#fff!important}body.vwp-highlight-links a:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) *{color:#fff!important}body.vwp-highlight-links a:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) button{background:#000!important}body.vwp-highlight-links a:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus):hover{transform:scale(1.05)!important}", wr = "vwp-highlight-links", J2 = () => {
  const { highlightLinks: e } = P();
  return M(() => {
    const r = _e(Q2);
    return document.head.appendChild(r), () => document.head.removeChild(r);
  }, []), M(() => (document.body.classList.toggle(wr, !!e), () => document.body.classList.remove(wr)), [e]), { toggle: (r) => {
    const n = r !== void 0 ? r : !e;
    document.body.classList.toggle(wr, n), P.setState({ highlightLinks: n });
  }, isActive: !!e };
}, ec = () => {
  const { t: e } = O(), { toggle: t, isActive: r } = J2();
  return /* @__PURE__ */ a(J, { showActiveIndicator: !0, "aria-label": e("al.highlight_links"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(L2, { iconTitle: e("al.highlight_links"), size: 36 }) }),
    /* @__PURE__ */ a(ee, { children: e("highlight_links") }),
    /* @__PURE__ */ a(te, { children: e(r ? "actived" : "deactivated") })
  ] });
}, Ue = [
  { key: "medium", value: 1.5 },
  { key: "large", value: 3 },
  { key: "very_large", value: 6 }
];
function tc() {
  const { letterSpacing: e } = P(), { current: t } = ne(/* @__PURE__ */ new Map()), [r, n] = F(-1), [o, i] = F();
  M(() => {
    t.size || s();
    const c = Ue.find(({ key: p }) => p === e);
    n(Ue.findIndex(({ key: p }) => p === e)), i(c), l(e);
  }, [e]);
  const s = () => {
    document.querySelectorAll(
      "p, span, a, strong, h1, h2, h3, h4, h5, h6, b, em, i, code, mark, pre, blockquote, abbr, cite, q, time"
    ).forEach((c) => {
      if (!nn(c)) return;
      const p = window.getComputedStyle(c);
      t.set(c, {
        letterSpacing: Number.parseFloat(p.letterSpacing) || 1,
        inlineLetterSpacing: c.style.letterSpacing || ""
      });
    });
  }, u = () => {
    const c = r + 1 < Ue.length ? r + 1 : -1, p = Ue[c] || void 0;
    n(c), i(p), P.setState({ letterSpacing: p == null ? void 0 : p.key });
  }, l = (c) => {
    const p = Ue.find(({ key: d }) => d === c);
    t.forEach(({ inlineLetterSpacing: d, letterSpacing: f }, h) => {
      h.style.letterSpacing = p ? `${f * p.value}px` : d ?? "";
    });
  };
  return { increaseLetterSpacing: u, index: r, option: o };
}
const rc = () => {
  const { t: e } = O(), { increaseLetterSpacing: t, option: r, index: n } = tc();
  return /* @__PURE__ */ a(J, { "aria-label": e("al.letter_spacing"), isActive: !!r, onClick: t, children: [
    /* @__PURE__ */ a(an, { size: 3, actived: n }),
    /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(P2, { iconTitle: e("al.letter_spacing"), size: 36 }) }),
    /* @__PURE__ */ a(ee, { children: e("letter_spacing") }),
    /* @__PURE__ */ a(te, { children: e((r == null ? void 0 : r.key) || "deactivated") })
  ] });
}, nc = () => {
  const { readingMask: e } = P();
  return { toggle: (r) => {
    const n = r !== void 0 ? r : !e;
    P.setState({ readingMask: n, readingGuide: !1 });
  }, isActive: !!e };
}, oc = () => {
  const { t: e } = O(), { toggle: t, isActive: r } = nc();
  return /* @__PURE__ */ a(J, { showActiveIndicator: !0, "aria-label": e("al.reading_mask"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(E2, { iconTitle: e("al.reading_mask"), size: 36 }) }),
    /* @__PURE__ */ a(ee, { children: e("reading_mask") }),
    /* @__PURE__ */ a(te, { children: e(r ? "actived" : "deactivated") })
  ] });
}, ic = "body.vwp-highlight-titles *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) h1,body.vwp-highlight-titles *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) h2,body.vwp-highlight-titles *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) h3,body.vwp-highlight-titles *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) h4,body.vwp-highlight-titles *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) h5,body.vwp-highlight-titles *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) h6{text-decoration:underline!important;color:#1351b4!important;font-weight:700!important}", xr = "vwp-highlight-titles", ac = () => {
  const { highlightTitles: e } = P();
  return M(() => {
    const r = _e(ic);
    return document.head.appendChild(r), () => document.head.removeChild(r);
  }, []), M(() => (document.body.classList.toggle(xr, !!e), () => document.body.classList.remove(xr)), [e]), { toggle: (r) => {
    const n = r !== void 0 ? r : !e;
    document.body.classList.toggle(xr, n), P.setState({ highlightTitles: n });
  }, isActive: !!e };
}, sc = () => {
  const { t: e } = O(), { toggle: t, isActive: r } = ac();
  return /* @__PURE__ */ a(
    J,
    {
      showActiveIndicator: !0,
      "aria-label": e("al.highlight_titles"),
      isActive: r,
      onClick: () => t(),
      children: [
        /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a($2, { iconTitle: e("al.highlight_titles"), size: 36 }) }),
        /* @__PURE__ */ a(ee, { children: e("highlight_titles") }),
        /* @__PURE__ */ a(te, { children: e(r ? "actived" : "deactivated") })
      ]
    }
  );
}, lc = "body.vwp-text-color *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) *{color:var(--vwp-text-color)!important}", Oo = "vwp-text-color", cc = "--vwp-text-color", Ar = "#000", uc = () => {
  const { textColor: e } = P();
  M(() => {
    const n = _e(lc);
    return document.head.appendChild(n), () => document.head.removeChild(n);
  }, []), M(() => (document.body.classList.toggle(Oo, !!(e != null && e.isActive)), document.body.style.setProperty(cc, (e == null ? void 0 : e.color) || Ar), () => document.body.classList.remove(Oo)), [e]);
  const t = (n) => {
    (n !== void 0 ? n : !(e != null && e.isActive)) ? r((e == null ? void 0 : e.color) || Ar) : P.setState({
      textColor: {
        isActive: !1,
        color: (e == null ? void 0 : e.color) || Ar
      }
    });
  }, r = (n) => {
    P.setState({ textColor: { color: n, isActive: !0 } });
  };
  return { toggle: t, apply: r, textColor: e, isActive: e == null ? void 0 : e.isActive };
}, dc = () => {
  const e = ne(null), { t } = O(), { apply: r, toggle: n, textColor: o, isActive: i } = uc(), s = () => {
    var l;
    return (l = e.current) == null ? void 0 : l.click();
  }, u = (l) => {
    const c = l.target.value;
    r(c);
  };
  return /* @__PURE__ */ a(J, { "aria-label": t("al.text_color"), isActive: i, onClick: () => n(), children: [
    /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(I2, { iconTitle: t("al.text_color"), size: 36 }) }),
    /* @__PURE__ */ a(ee, { children: t("text_color") }),
    /* @__PURE__ */ a(te, { children: t(i ? "custom" : "default") }),
    /* @__PURE__ */ a(
      "div",
      {
        tabindex: 0,
        onClick: s,
        onKeyDown: () => {
        },
        style: { backgroundColor: (o == null ? void 0 : o.color) || "#000" },
        className: "absolute top-2 right-2 size-6 rounded-full border-1"
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
}, pc = "body.vwp-large-cursor *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus){cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAA0CAYAAAAACoF6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJtSURBVHgBzZmN0aIwEIbfuwoogQ6kA7CCswPmKuDrADqwBK4DSsAOtAPsAK0glwXDxJiEAAF8ZnZGIMLjZvOjAkCBL4Lhi4TYK0p8AUyKikeAHWFKXPcUYppoeITYAfZNQoPA+XzeXWh4OFGW5a5CbzJEXdcsCAJZqOURYQM+ZIjr9aoTSrAyWhmiaRoWhqHabSlWxChjEfrBSlhlLEIFVmBUZkshJxmibVsWRdGqQs4yQuh0OqlCZ3hikowgTVNVqIQHZskQRVF4X/Fny1iEQsxkkYxBqJkrtFjGp5AXGcLHiu9NhqiqSl1gSch5xfcqQxhWfCch7zLE3BV/FRmL0M8uMhahYheZqUKryxAuK/5vbMD9fu+CL67go0y+lENa8X+hN+zgHwBzeDwe3cNut9vwWhw/n8/u3Aj/ePztHLCwm7IsU9M/NRrKkJfMXC4XHI9HWxNKzZ3HTXotjp+vc72DS2aoAGlmNZEkifxJax5/0M+6k/Y3ozJiaNIDTSjf01vMxCpD2ZDnCMqQKXPKepRgBkYZ2hIoD2B5nhuzQ9fw3lV+ZJQbD0FyJiiLSvvJ++EPGc1QbdDXQXdMexYTSiHnmMhbPcRxrIqIHX8uztkKmX5OwYJCHt6sWcxKqV0gX6OHmlhSyKZZUZfiSlynrjSxpJB1IqmhbQKpkG3DXLnf9D0w+j6OR9rXoj1NdL4LWR4xoUP7TLyH9icmNDOy0zAXIyaEGwGkYS4XMnUPSRwOB13XZy43LzF9csohDXMSooJWZ2u8F/Fqv5ZGwOgepX1JH7ABQyHjMwvUJZv+GZJoJGLsCI1A6govWfgPEfBNVkVYxn8AAAAASUVORK5CYII=),pointer!important}", kr = "vwp-large-cursor", fc = () => {
  const { largeCursor: e } = P();
  return M(() => {
    const r = _e(pc);
    return document.head.appendChild(r), () => document.head.removeChild(r);
  }, []), M(() => (document.body.classList.toggle(kr, !!e), () => document.body.classList.remove(kr)), [e]), { toggle: (r) => {
    const n = r !== void 0 ? r : !e;
    document.body.classList.toggle(kr, n), P.setState({ largeCursor: n, textReader: void 0 });
  }, isActive: !!e };
}, hc = () => {
  const { t: e } = O(), { toggle: t, isActive: r } = fc();
  return en() ? null : /* @__PURE__ */ a(J, { showActiveIndicator: !0, "aria-label": e("al.large_cursor"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(O2, { iconTitle: e("al.large_cursor"), size: 36 }) }),
    /* @__PURE__ */ a(ee, { children: e("large_cursor") }),
    /* @__PURE__ */ a(te, { children: e(r ? "actived" : "deactivated") })
  ] });
}, Ve = [
  { key: "medium", value: 1.1 },
  { key: "large", value: 1.2 },
  { key: "very_large", value: 1.3 }
];
function gc() {
  const { lineSpacing: e } = P(), { current: t } = ne(/* @__PURE__ */ new Map()), [r, n] = F(-1), [o, i] = F();
  M(() => {
    t.size || s();
    const c = Ve.find(({ key: p }) => p === e);
    n(Ve.findIndex(({ key: p }) => p === e)), i(c), l(e);
  }, [e]);
  const s = () => {
    document.querySelectorAll(
      "p, span, a, strong, h1, h2, h3, h4, h5, h6, b, em, i, code, mark, pre, blockquote, abbr, cite, q, time"
    ).forEach((c) => {
      if (!nn(c)) return;
      const p = window.getComputedStyle(c), d = Number.parseFloat(p.fontSize), f = p.lineHeight === "normal" ? d * 1.2 : Number.parseFloat(p.lineHeight);
      t.set(c, {
        lineHeight: f,
        inlineLineHeight: c.style.lineHeight || ""
      });
    });
  }, u = () => {
    const c = r + 1 < Ve.length ? r + 1 : -1, p = Ve[c] || void 0;
    n(c), i(p), P.setState({ lineSpacing: p == null ? void 0 : p.key });
  }, l = (c) => {
    const p = Ve.find(({ key: d }) => d === c);
    t.forEach(({ lineHeight: d, inlineLineHeight: f }, h) => {
      let x = d;
      const y = window.getComputedStyle(h), S = Number.parseFloat(y.fontSize);
      y.lineHeight.endsWith("px") && (x = Number.parseFloat(y.lineHeight) / S), h.style.lineHeight = p ? `${x * p.value}` : f || "";
    });
  };
  return { increaseLineSpacing: u, index: r, option: o };
}
const vc = () => {
  const { t: e } = O(), { increaseLineSpacing: t, option: r, index: n } = gc();
  return /* @__PURE__ */ a(J, { "aria-label": e("al.line_spacing"), isActive: !!r, onClick: t, children: [
    /* @__PURE__ */ a(an, { size: 3, actived: n }),
    /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(B2, { iconTitle: e("al.line_spacing"), size: 36 }) }),
    /* @__PURE__ */ a(ee, { children: e("line_spacing") }),
    /* @__PURE__ */ a(te, { children: e((r == null ? void 0 : r.key) || "deactivated") })
  ] });
}, mc = "body.vwp-hide-images *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) img,body.vwp-hide-images *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) figure{display:none!important}", Sr = "vwp-hide-images", yc = () => {
  const { hideImages: e } = P();
  return M(() => {
    const r = _e(mc);
    return document.head.appendChild(r), () => document.head.removeChild(r);
  }, []), M(() => (document.body.classList.toggle(Sr, !!e), () => document.body.classList.remove(Sr)), [e]), { toggle: (r) => {
    const n = r !== void 0 ? r : !e;
    document.body.classList.toggle(Sr, n), P.setState({ hideImages: n });
  }, isActive: !!e };
}, Cc = () => {
  const { t: e } = O(), { toggle: t, isActive: r } = yc();
  return /* @__PURE__ */ a(J, { showActiveIndicator: !0, "aria-label": e("al.hide_images"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(N2, { iconTitle: e("al.hide_images"), size: 36 }) }),
    /* @__PURE__ */ a(ee, { children: e("hide_images") }),
    /* @__PURE__ */ a(te, { children: e(r ? "actived" : "deactivated") })
  ] });
}, _c = "body.vwp-pause-animations *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) *{animation-play-state:paused!important}", Lr = "vwp-pause-animations", bc = () => {
  const { pauseAnimations: e } = P();
  return M(() => {
    const r = _e(_c);
    return document.head.appendChild(r), () => document.head.removeChild(r);
  }, []), M(() => (document.body.classList.toggle(Lr, !!e), () => document.body.classList.remove(Lr)), [e]), { toggle: (r) => {
    const n = r !== void 0 ? r : !e;
    document.body.classList.toggle(Lr, n), P.setState({ pauseAnimations: n });
  }, isActive: !!e };
}, wc = () => {
  const { t: e } = O(), { toggle: t, isActive: r } = bc();
  return /* @__PURE__ */ a(
    J,
    {
      showActiveIndicator: !0,
      "aria-label": e("al.pause_animations"),
      isActive: r,
      onClick: () => t(),
      children: [
        /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(z2, { iconTitle: e("al.pause_animations"), size: 36 }) }),
        /* @__PURE__ */ a(ee, { children: e("pause_animations") }),
        /* @__PURE__ */ a(te, { children: e(r ? "actived" : "deactivated") })
      ]
    }
  );
}, xc = () => {
  const { readingGuide: e } = P();
  return { toggle: (r) => {
    const n = r !== void 0 ? r : !e;
    P.setState({ readingGuide: n, readingMask: !1 });
  }, isActive: !!e };
}, Ac = () => {
  const { t: e } = O(), { toggle: t, isActive: r } = xc();
  return /* @__PURE__ */ a(J, { showActiveIndicator: !0, "aria-label": e("al.reading_guide"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(H2, { iconTitle: e("al.reading_guide"), size: 36 }) }),
    /* @__PURE__ */ a(ee, { children: e("reading_guide") }),
    /* @__PURE__ */ a(te, { children: e(r ? "actived" : "deactivated") })
  ] });
}, kc = () => {
  const { t: e } = O();
  return /* @__PURE__ */ a(J, { disabled: !0, showActiveIndicator: !0, "aria-label": e("al.reader_mode"), isActive: !1, onClick: void 0, children: [
    /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(T2, { iconTitle: e("al.reader_mode"), size: 36 }) }),
    /* @__PURE__ */ a(ee, { children: e("reader_mode") }),
    /* @__PURE__ */ a(te, { className: "italic", children: [
      e("upcomming"),
      "..."
    ] })
  ] });
}, Sc = "body *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) .vwp-text-reader{cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXkSURBVHgBzVlNSBxXHP+/t+qukBBPie0hbKF6S5uESgyNdkMCpcmhLQULPW3SWynRY4MGlaDNLbH0Wj8uPQhp7KHpJSWb1sOCpWvw5hY6eEn0UkVBV9338n6zzu7szHu7s+6syQ+G2Z2P9/7fX8MujO8MMGL9pCAltTGiNtKBkWWfJSucSVokyZJMrjMhn+d5fn1h8NgiHTFY99juU0VMgkKCEsaiAHMkU2Asfac1RQ0E6x7P/ackGaeGgqUkiTlB+8/C1hK7MJb732g2jYHFJJuTe/mJ9GirRXVCmVBO0msDS5Gg6fSdlhk6JF4zA0VYJNjIYRh5UxhwYOVp7/Na/ITTm4V4hJozSqhTiWEZyC+PhIG3TjD7qAHJnZbdTPfwdrzag6Gb0LnTjM6rA+eOU4yORcvvb+WIllcl/ZVVx7KkFxvm7dUdlSTZQCXfCC0PXDvD1VEgvBb8syLp9yVJj5dEpcdG04PREd2NuhkAwUPXI9R+guoCGBn/TZg1IlhSp4m6fODrS5x+/Kp+4gGY3fSNCPV9YCCJy+musa2zvsul4qw2DF7ndPNSuDHgWIyo/6p5XRWhHnmjE7eryhoB4mHzjQI0a2Aivh3dG3Zf4Iyxdapx8UYSX20fJuVA993thPOfCyksCgjE8rDNBsiu6qNQ/xWuzx88UtQCZyQ3KCDgsI3AmIo+OGb/LmcCPnHrik5gMuFogXOKBKo7oM4woo0OTu74aV7Yic6N3k59bmEs8inOvGW32aIA6OsKlqA2VWIHIR/f36cP7+1TciqvNY/sWikLw96Rsbd2iGYX/M/2dvj3FkwmbQZSo8qJnX7XAJQEHSeDMfDtz3madEkS9u01DxCanMzbzOE5mEpfV8FUHi/5Exm07y1J0ITBjOy3mKSKZhS0PICk/13V3/OahyNxRzs9B1KGVrxmBAYhRC8kZ+/bDKgmPEUVoFOhDigHTACxjsmAoJ7Owpoo7IC3XdFmc0cGpeFAA2p6QBUQlvOCCd3vIGjXhFM1ATlrMxDbj1U0oaC1fG8Hr7iGY4ogHuU0cP504Z3ltZLUj8f8+3Wc8q+p3miz37YdGQ12nUDIM2XpW1fLr8MHwBRKcMDxBV0PYQIcuan4Tyo/YJSgOoE6CZIGQS9Vinz3JNGXXbwsEMAHHn5T2hq+kTnwH2M1aoCLAfGMWDhlQk8nIldpLZ0JuqWMCAVm3Rrx4oWhXigygBGgGnKt64ZckFA1P0AE+jMraH6ZtE0JNIBIgujjXcsJvV4zc8Pg9FaT+5/KBw+UGY14n8qsKOmc0S5gEz3xpCDBSoCJ4Jj4g+gTJWVkX4eRe19EbKYr5ZvsmiZES1nOgMmMCi/7F0eWvf2wYi+rBXrglxuiWBwiTLdX0XBGk2MY8cUyaguTZH80MjXcurQfFCBIK1UN3E7uBhKwX9wiP+q9BPvTLbBZ50QmaDLLGDI82xPPfQzYWtAUd4gUXtQ4rDr0+7q9EfYx3W7SviGF0gKfcl9ynNDtaHBESDGoKThACL32XrD+wgmxfhr5NE5GEei+3GDDmZtNgTNlvYDto+z2VqcKlhp0vYMf5sCr8QVIAiHzKAD/Qm+hIR7dzIjz08gAfEFNLB54ryMiTc43nokfnkhTbrHcE7qKtUM01zxqcuhGMQHJo4Mzzkp3xWX336phoPv77bgUPKMrMVAWGEcfhwBs/rtf8sauTtXPI+mhaJlpB9r54t3cZ5LTI909OHa9wy5IfXZB2g291uZtsOn0YMsN31UKiO6x7aQ3tLrhMAKtHI8Gn2BUJ5wKMX8odll3qybdgwlJ/H61z7JO5Wk3J7FS6Qwis6vovgrNf2YlSP7QS754l2oEfEIlkaeN/zhOWpv3ombDTd9utWK5lnOQDDUOFmM8UY14oK7wYWsjz6bUnC9BIcD+JqZ6kiCEOwgl/tmMCDUxZqr0OIxpKSeVjOZad6MzhQFDcIQTwF24OL73kRQioQjCzCau0lHc4/QWOik0Iyo0L8Zyzb/WSrQbrwDCzLLGTU5efAAAAABJRU5ErkJggg==),pointer!important;text-decoration:underline!important}", Lc = {
  event: null,
  isActive: !1,
  onClick: void 0,
  type: "button",
  element: null,
  listener: null,
  render: void 0
}, Ae = Je()(() => ({
  ...Lc
})), Mc = Array.from([document.body, ...document.body.children]), Mr = A2(), Pr = ze(".vp-guide-container"), Pc = (e) => {
  var t;
  return ge(e, ["IMG"]) ? e.alt : sn(e) ? e.value : ge(e, ["SELECT"]) ? (t = ze(`[value="${e.value}"]`, e)) == null ? void 0 : t.innerText : e.innerText.trim() || "";
}, W1 = (e) => {
  let t = e;
  for (; t && !Mc.includes(t); ) {
    if (Ec(t) || t.onclick && !Nc(t)) return t;
    t = t.parentNode;
  }
  return null;
}, $o = (e) => Mr != null && Mr.contains(e) || Pr != null && Pr.contains(e) || e.matches(".vw-links") ? !1 : Oc(e) || W1(e) || sn(e) || Rc(e) || Ic(e), ge = (e, t) => t.includes(e.tagName), Ec = (e) => ge(e, ["A", "BUTTON"]), sn = (e) => ge(e, "INPUT") && e.type === "submit", Rc = (e) => ge(e, "IMG") && e.alt && e.alt.trim(), Ic = (e) => ge(e, "SELECT"), Nc = (e) => ge(e, ["SVG", "PATH"]), Oc = (e) => {
  const t = (r) => {
    var n;
    return r.nodeType === Node.TEXT_NODE && ((n = r == null ? void 0 : r.textContent) == null ? void 0 : n.trim());
  };
  return Array.from(e.childNodes).some((r) => t(r));
}, $c = (e) => {
  if (!e.parentElement) return;
  const t = ze("input", e.parentElement);
  t && ["radio", "checkbox"].includes(t.type) && (t.checked = !t.checked);
}, zc = (e, t) => {
  var f, h;
  const r = (f = document.caretPositionFromPoint) == null ? void 0 : f.call(document, e, t);
  if (!r) return null;
  const n = r.offsetNode, o = r.offset;
  if (!n || n.nodeType !== Node.TEXT_NODE) return null;
  const i = n.textContent ?? "";
  if (!i.trim()) return null;
  const s = i.slice(0, o), u = i.slice(o), l = s.match(/[\wÀ-ú’-]+$/), c = u.match(/^[\wÀ-ú’-]+/), p = `${(l == null ? void 0 : l[0]) ?? ""}${(c == null ? void 0 : c[0]) ?? ""}`;
  if (!p) return null;
  const d = o - (((h = l == null ? void 0 : l[0]) == null ? void 0 : h.length) ?? 0);
  return { word: p, node: n, offset: d };
}, Tc = (e) => {
  document.querySelectorAll(`span.${e}`).forEach((t) => {
    const r = t.parentNode;
    if (!r) return;
    const n = document.createTextNode(t.textContent || "");
    r.replaceChild(n, t), r.normalize();
  });
}, X1 = ({ callback: e, isWordByWord: t, markWordClss: r, hoverClss: n }) => {
  if (t && !(r != null && r.trim())) throw new Error("markWordClss is required when isWordByWord is true");
  const o = (l) => {
    if (!n) return;
    const c = l.target;
    $o(c) && c.classList.add(n);
  }, i = (l) => {
    r && Tc(r), Ae.setState({ isActive: !1 });
    const c = window.getSelection(), p = c == null ? void 0 : c.toString().trim(), d = l.target;
    if (!$o(d)) return;
    if (p && !t) return e(p);
    if (l.preventDefault(), l.stopPropagation(), t && r) {
      const { word: h, node: x, offset: y } = zc(l.clientX, l.clientY) || {};
      if (h && x && typeof y == "number") {
        const S = document.createRange();
        S.setStart(x, y), S.setEnd(x, y + h.length);
        const A = document.createElement("span");
        A.className = r, A.textContent = h, S.deleteContents(), S.insertNode(A), e(h);
      }
    } else {
      const h = Pc(d);
      h != null && h.trim() && e(h);
    }
    const f = d.tagName === "A" ? d : W1(d);
    f && u(f, l), ge(d, "LABEL") ? $c(d) : (ge(d, "BUTTON") || sn(d)) && u(d, l);
  }, s = (l) => {
    if (!n) return;
    l.target.classList.remove(n);
  }, u = (l, c) => {
    Ae.setState({
      isActive: !0,
      event: c,
      type: l.tagName.toLowerCase() === "a" ? "link" : "button",
      onClick: () => {
        l.dispatchEvent(new MouseEvent("click", { bubbles: !0 })), Ae.setState({ isActive: !1 });
      }
    });
  };
  return document.body.addEventListener("mouseover", o), document.body.addEventListener("mouseout", s), document.body.addEventListener("click", i, !0), () => {
    document.body.removeEventListener("mouseover", o), document.body.removeEventListener("mouseout", s), document.body.removeEventListener("click", i, !0);
  };
}, Hc = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-ES"
};
let pe = null;
const qr = (e, t) => {
  if (!("speechSynthesis" in window))
    return console.error(M1("speech_is_not_supported", { locale: (t == null ? void 0 : t.locale) || "pt" })), null;
  const r = () => {
    const n = Hc[(t == null ? void 0 : t.locale) || "pt"] || "pt-BR", o = speechSynthesis.getVoices();
    pe = new SpeechSynthesisUtterance(e);
    let i = o.find((s) => s.lang === n);
    i || (console.warn(`Voz para ${n} não encontrada. Usando fallback en-US.`), i = o.find((s) => s.lang === "en-US")), pe.lang = n, pe.rate = (t == null ? void 0 : t.velocity) || 1, pe.pitch = 1, pe.volume = 1, pe.voice = i || null, speechSynthesis.cancel(), speechSynthesis.speak(pe), pe.onend = () => speechSynthesis.cancel();
  };
  return speechSynthesis.getVoices().length === 0 ? window.speechSynthesis.onvoiceschanged = () => r() : r(), pe;
}, K1 = () => {
  "speechSynthesis" in window && speechSynthesis.cancel();
}, Bc = () => {
  const { textReader: e } = P();
  return M(() => {
    const r = _e(Sc);
    return document.head.appendChild(r), () => document.head.removeChild(r);
  }, []), M(() => {
    const r = e != null && e.isActive ? X1({
      hoverClss: "vwp-text-reader",
      callback: (n) => qr(n, { velocity: e == null ? void 0 : e.velocity })
    }) : void 0;
    return () => {
      r == null || r();
    };
  }, [e]), { toggle: (r) => {
    const n = r !== void 0 ? r : !(e != null && e.isActive);
    n ? qr(M1("text_reader_is_actived")) : K1(), P.setState({ textReader: { isActive: n }, largeCursor: void 0, dictionary: void 0 });
  }, isActive: !!(e != null && e.isActive) };
}, Dc = () => {
  const { t: e } = O(), { toggle: t, isActive: r } = Bc(), n = "speechSynthesis" in window;
  return /* @__PURE__ */ a(
    J,
    {
      disabled: !n,
      showActiveIndicator: !0,
      "aria-label": e("al.text_reader"),
      isActive: r,
      onClick: () => t(),
      children: [
        /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(Z1, { iconTitle: e("al.text_reader"), size: 36 }) }),
        /* @__PURE__ */ a(ee, { children: e("text_reader") }),
        /* @__PURE__ */ a(te, { children: e(n ? r ? "actived" : "deactivated" : "no_support") })
      ]
    }
  );
}, qc = "body *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) .vwp-dictionary{cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAY4SURBVHgBzVlNTFRXFD73jTKQaLQbf7qwNBF3WGlqxNSfIZI0wqK0pDRxRXHVpi0s26KBiYWyU9omrsrPpkmpiXShTZM2Dtom00AK6g5M+sJCxY0YTWCAudfzvcfAzHv3vXmPmUG+ZPLm/d17vnvP/c6554ljvYsdgkQ7MZSi3YJoN+kgyLSOSthHUiYpMpVQ80Kqu2kjPT/euWOKNhmitmfpFhsToyKBB2NKghypBIglL1YkqIQQtb2p/3kkK6mkEAlFclTSylixZ0kc60k99XSb0sAUSoyq5XR/Ml5hUoFgF0opemUQCZI0lLxYNkwbxCsmsAaTpOjeCJGtQiADM03LH4RZJwZtLVRGaPskD+pgrEsFWpdbjUAGrYtlS5O1XQuV+R4sugvtjAo6e1hQ1R78iPZzaNwRte+9SBE9mlf06BnRnRlFk7P479093+EgKTr81kbR4kDNAUHnTxjWMQxuTysamZAWGR/Ek53Rbt2Nggns3yWoszG84U6AyPd/Se8ZkaJVNxMFEWg5alijnnGRQvFikeinv6U1IzqwQtU4FcpYT87CAYa3nyme8cCOcqL2eoPaTui1hRXqulOdDCurDAkY79VJMeDTfuVCdLkr+4IhhJinEIDblNL4DECi5R13P0KpjtpLC7HMuSGVNCkgsGDPn9i80IG+0KcLRmRtFgxB6hkFxJf1xfX5fMCa+KZRN2AqlpmFbQZFsAHJ15Ylk6eq3KPxH+v37RlJU7N2kEKwAkkEsIMcyBqr1yXW79kjB4hOV7nl+G0+xzVnnBAi8j4fEgKrmsP2U8qDvuYInXQQ+PzndL4AtEYeCPJsAxPudIw6iH/BfWUDUfrfzuhrVsv5YgH88NqnEdf1d/tWKAyQZrQctUe0aq+dYmAWpueUlVqMjNv6/89X21zvvnd5xXo2B1LWWVSFIt/0NUyUhZHahce49lmEPmICmIeb96QVtHDcCf0/4y8OmBknlCHesqhKbMBJNHm9fOpQcAJDbRF6vqiodTDtuocRb76apsca2dCNejYwYxrErLdQPYAeeWHfLgoEzNRDzmXE6n+dz3/M2g5jsl0IhPMBguAED/oRi0D5SvkUL2TPl71cwglM8837cAlbsXQEDrLhY6xEv0zYuQ+kEs/ur/bv43WNDdz6bsuxEnFEY95geyCo9sPVMh2BjO49qMmv44oezNnnj7nnkYn8MwCiTqCasu54SiX4Sow2CBgMV9jHBPbx+XPeJ51kQr/fzzXuh3MROrRXFC0gZhGQYyT0SpAJOH5oYBeAqmQMPlsNNzL4PHcxP2DJHODnZubWA1nNG4L6Poz4tg938yWAEiAXueZ1RS5sMrBF9MO3N3LVBUQmZ91KBHeBKDQcNkIt4of6jY6Zo10cD66wG3U7n5phf63aQ77QSaPumi4gBoGuLXb7XAJebjTzBOwL2zIC+XIhP+A9JwQZUy6rdNVqKMAfHe5AEzaVCApdUGu+uuKaBf4c0OR+UqbjZBix7EtYQNB0Z0qB+IB7KKNAy535jb0O1ksnfrkQnkUM0cUcbPh1LiSW5V2tX+iSO3T647lc/80kV34KhY7hOiDacNhfPr3a02a9LPvJC+V1+gREyTjvdQazL6EB5ywE0XJLcaqDrR9dexh9bRqujCEcPFvWrQUYM9y2bdN2ZQiGrQPa5M/kQteb+OOdw2ItOICGEKw2CwN39L6PUnzmrycBBDauWFxxXsemY2ATSPgUuMzsCp3vLiKa2h5f+zrpaLyUJHzbX5J12ae+BKwsVcg67D91nfRzLdO1zSsA8Pn+P32MV9Tt/K4WSB6OX0o1KYOu6+5hYXfUuzf8YQGp7bmh363ZEEPJzrJPXFcpIGp7Flqd0poNyCuqdqdCEoHhGHHfisWq5utuheoNJBQZl/0+y2JGrBrSIVTV7HNEYAAughFGcjj9hFPveyqAC+pHfkMELBLf8WcfZdwq/cdxsn3+QjTu90joQmfy6wqzPFVWg5Gh0sEUwojlMx4oaOVZs5EWg1zni1ERYH0T4z1JEMMzKDzJp1UikivGglOPjbgWL1IlaLRiKTpsFxiCoygEsnG8d/m0kjLGBh1h/6xkRa90LHoTOylsRliap8pT238La3Q2XgKRMujGoESLwAAAAABJRU5ErkJggg==),pointer!important}body *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) .vwp-mark-word{background:#2670e8;border-radius:4px;color:#fff;padding:0 2px;position:relative;display:inline-block;transition:all .3s ease}", Y1 = () => {
  const { dictionary: e, isOpenWidget: t } = P();
  return M(() => {
    const n = _e(qc);
    return document.head.appendChild(n), () => document.head.removeChild(n);
  }, []), M(() => {
    t && P.setState({
      dictionary: void 0
    }), console.log("testing");
  }, [t]), M(() => {
    const n = e != null && e.isActive ? X1({
      hoverClss: "vwp-dictionary",
      markWordClss: "vwp-mark-word",
      isWordByWord: !0,
      callback: (o) => P.setState({ dictionary: { ...e, word: o } })
    }) : void 0;
    return () => {
      n == null || n();
    };
  }, [e]), { toggle: (n) => {
    const o = n !== void 0 ? n : !(e != null && e.isActive);
    P.setState({
      dictionary: { isActive: o },
      isOpenWidget: !o,
      textReader: void 0,
      largeCursor: void 0
    });
  }, isActive: !!(e != null && e.isActive) };
}, Fc = () => {
  const { t: e } = O(), { toggle: t, isActive: r } = Y1();
  return /* @__PURE__ */ a(J, { showActiveIndicator: !0, "aria-label": e("al.dictionary"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(G1, { iconTitle: e("al.dictionary"), size: 36 }) }),
    /* @__PURE__ */ a(ee, { children: e("dictionary") }),
    /* @__PURE__ */ a(te, { children: e(r ? "actived" : "deactivated") })
  ] });
}, jc = () => {
  const { t: e } = O(), { isOpenWidget: t, isLoaded: r } = P();
  return /* @__PURE__ */ a(
    "div",
    {
      className: j(
        "spacing flex flex-col gap-0 transition-[bottom] duration-500 overflow-hidden rounded-xl pt-0 border-1 tracking-normal",
        "leading-normal fixed z-[2147483647] -bottom-[80dvh] right-2 bg-background",
        "sm:w-[420px] w-[240px] h-[80dvh] data-[active='true']:bottom-2"
      ),
      style: { boxShadow: "0 0 30px -5px rgba(0, 0, 0, 0.2)" },
      "data-active": t && r,
      children: [
        /* @__PURE__ */ a(G2, {}),
        /* @__PURE__ */ a(W2, { children: [
          /* @__PURE__ */ a(ct, { children: e("sections.text_and_typography") }),
          /* @__PURE__ */ a(Y2, {}),
          /* @__PURE__ */ a(rc, {}),
          /* @__PURE__ */ a(vc, {}),
          /* @__PURE__ */ a(dc, {}),
          /* @__PURE__ */ a(ct, { children: e("sections.focus_and_visibility") }),
          /* @__PURE__ */ a(sc, {}),
          /* @__PURE__ */ a(ec, {}),
          /* @__PURE__ */ a(hc, {}),
          /* @__PURE__ */ a(ct, { children: e("sections.reading_and_comprehension") }),
          /* @__PURE__ */ a(Dc, {}),
          /* @__PURE__ */ a(oc, {}),
          /* @__PURE__ */ a(Ac, {}),
          /* @__PURE__ */ a(kc, {}),
          /* @__PURE__ */ a(Fc, {}),
          /* @__PURE__ */ a(ct, { children: e("sections.distraction_reduction") }),
          /* @__PURE__ */ a(wc, {}),
          /* @__PURE__ */ a(Cc, {})
        ] })
      ]
    }
  );
}, Uc = ({ children: e, root: t }) => {
  const { theme: r } = P1();
  return M(() => {
    const n = t || document.documentElement;
    (n instanceof ShadowRoot ? n.host : n).classList.toggle("dark", r === "dark");
  }, [r, t]), e;
}, Vc = () => {
  const e = ne(null), t = ne(null), r = ne(null), n = en(), { t: o } = O(), { height: i } = I1(), { y: s } = R1();
  M(() => {
    u(s || i / 2);
  }, [s, i]), M(() => {
    n && u(i / 2);
  }, [n, i]);
  function u(l) {
    if (!t.current || !r.current) return;
    t.current.style.height = `${(l > i - 54 ? i - 54 : l) - (l < 4 ? 0 : 48)}px`, r.current.style.height = `${i - (l < 58 ? 56 : l) - 48}px`;
    let c = l - 24;
    c < 32 ? c = 32 : c > i - 78 && (c = i - 78), e.current && (e.current.style.top = `${c}px`);
  }
  return /* @__PURE__ */ a("div", { className: "z-[9999999] relative", children: [
    n && /* @__PURE__ */ a(
      ce,
      {
        ref: e,
        onTouchMove: (l) => {
          l.preventDefault(), u(l.touches[0].clientY);
        },
        className: j("w-8 h-12 top-[calc(45dvh+20px)] rounded-r-[8px] items-center fixed left-0 bg-primary"),
        "aria-label": o("al.move_reading_mask"),
        children: /* @__PURE__ */ a(M2, { size: 24, className: "fill-white", iconTitle: o("al.move_reading_mask") })
      }
    ),
    /* @__PURE__ */ a(
      "div",
      {
        ref: t,
        className: "top-0 h-[45dvh] pointer-events-none w-full fixed bg-black/40 left-0 border-b-8 border-primary"
      }
    ),
    /* @__PURE__ */ a(
      "div",
      {
        ref: r,
        className: "bottom-0 pointer-events-none h-[45dvh] left-0 fixed border-t-8  w-full border-primary bg-black/20"
      }
    )
  ] });
}, Zc = () => {
  const e = ne(null), t = ne(null), r = ne(null), n = en(), { t: o } = O(), { width: i, height: s } = I1(), { x: u, y: l } = R1();
  M(() => {
    u && l && c(u, l);
  }, [l, u]), M(() => {
    n && c(i / 2, 24);
  }, [n, i]);
  function c(p, d) {
    if (!t.current) return;
    const f = t.current.offsetWidth;
    if (n || (t.current.style.left = `${p - f / 2}px`, t.current.style.top = `${d < 30 ? 16 : d - 16}px`), e.current && r.current && n) {
      const h = p < 24 ? 4 : p > i - 40 ? i - 54 : p - 24;
      t.current.style.top = `${d < 24 ? 14 : d > s - 32 ? s - 42 : d - 10}px`, e.current.style.top = `${d < 24 ? 20 : d > s - 32 ? s - 37 : d - 5}px`, e.current.style.left = `${h}px`, r.current.style.left = `${h + 12}px`, r.current.style.top = `${d < 24 ? 6 : d > s - 36 ? s - 49 : d - 17.1}px`;
    }
  }
  return /* @__PURE__ */ a("div", { className: "z-[9999999] relative", children: [
    n && /* @__PURE__ */ a(
      ce,
      {
        ref: e,
        onTouchMove: (p) => {
          p.preventDefault(), c(p.touches[0].clientX, p.touches[0].clientY);
        },
        className: j(
          "w-12 h-8 z-[9999999] left-1/2 fixed bg-primary border-2 border-white border-t-primary top-0 rounded-b-md -translate-x-1/2"
        ),
        "aria-label": o("al.move_reading_mask"),
        children: /* @__PURE__ */ a(j2, { size: 22, className: "fill-white", iconTitle: o("al.move_reading_mask") })
      }
    ),
    /* @__PURE__ */ a(
      "div",
      {
        ref: t,
        className: j(
          "w-xl fixed top-4 left-[calc(50dvw-36rem/2)] h-2 grid place-items-center border-2 border-white bg-primary rounded-full",
          n && "translate-none !left-0 !right-0 !w-auto rounded-none"
        ),
        children: !n && /* @__PURE__ */ a(No, { iconTitle: "", className: "bottom-[3.7px] absolute" })
      }
    ),
    /* @__PURE__ */ a("span", { ref: r, className: j("absolute bottom-[3.7px]", n ? "fixed" : "hidden"), children: /* @__PURE__ */ a(No, { iconTitle: "" }) })
  ] });
}, Gc = () => {
  const e = ne(null), { t } = O(), { type: r, event: n, onClick: o, isActive: i, render: s } = Ae(), [u, l] = F({ x: 0, y: 0 });
  return M(() => {
    const c = (p) => {
      e.current && !e.current.contains(p.target) && Ae.setState({ isActive: !1 });
    };
    return i ? document.addEventListener("click", c) : document.removeEventListener("click", c), () => {
      document.removeEventListener("click", c);
    };
  }, [i]), M(() => {
    if (n) {
      const { pageX: c, pageY: p } = n;
      l({ x: c, y: p });
      const d = e.current;
      d && (d.classList.remove("animate-scale"), d.offsetWidth, d.classList.add("animate-scale"));
    }
  }, [n]), /* @__PURE__ */ a(
    ce,
    {
      ref: e,
      onClick: o,
      style: {
        left: `${u.x}px`,
        top: `${u.y - 32}px`,
        boxShadow: "2px 2px 10px 4px rgba(0, 0, 0, .2)"
      },
      className: j(
        "group text-primary-foreground rounded-md absolute z-[2147483647] -translate-x-6 -translate-y-full px-3 h-9 animate-scale"
      ),
      children: [
        s || /* @__PURE__ */ a(G, { children: [
          r === "button" ? /* @__PURE__ */ a(V2, { size: 20, iconTitle: t("interact") }) : /* @__PURE__ */ a(U2, { size: 20, iconTitle: t("access_link") }),
          /* @__PURE__ */ a("span", { className: "relative bottom-0.5 font-medium text-base", children: t(r === "button" ? "interact" : "access_link") })
        ] }),
        /* @__PURE__ */ a("span", { className: "absolute inset-0 bg-primary group-hover:brightness-85 rounded-md -z-[1]" }),
        /* @__PURE__ */ a("span", { className: "size-4 rotate-45 absolute brightness-85 -translate-x-1/2 -z-[2] -bottom-5 left-6 bg-primary" })
      ]
    }
  );
}, Wc = ["masculino", "feminino", "neutro"], Fr = async (e) => {
  var l, c, p, d, f, h;
  const t = e.trim().replace(".", "");
  if (!t) return null;
  const o = await (await fetch(((x) => `https://pt.wiktionary.org/w/api.php?action=parse&redirects=1&format=json&origin=*&utf8=1&page=${encodeURIComponent(
    x.toLowerCase().replace(".", "")
  )}&prop=text&formatversion=2`)(t))).json(), i = (l = o == null ? void 0 : o.parse) == null ? void 0 : l.text;
  if (!i) return null;
  const s = Xc(i, t);
  if ((((c = s.plural) == null ? void 0 : c.toLowerCase()) !== t.toLowerCase() || ((p = s.definitions) == null ? void 0 : p.some((x) => x.toLowerCase().includes("plural de")))) && !(s.definitions && s.definitions.length > 3)) {
    if (s.plural) return await Fr(s.plural);
    let x;
    const y = (f = (d = s.definitions) == null ? void 0 : d.find((S) => S.toLowerCase().includes("plural de"))) == null ? void 0 : f.match(/plural de (.+)/i);
    if (x = (h = y == null ? void 0 : y[1]) == null ? void 0 : h.trim(), x)
      return await Fr(x);
  }
  return { ...s, title: t };
};
function Xc(e, t) {
  var x, y, S, A, _, g, m;
  const n = new DOMParser().parseFromString(e, "text/html"), o = (S = (y = (x = n.querySelector("tbody")) == null ? void 0 : x.innerHTML.match(new RegExp(`title="(?<gender>${Wc.join("|")})"`))) == null ? void 0 : y.groups) == null ? void 0 : S.gender, i = Array.from(n.querySelectorAll("ol > li")).map((C) => {
    var k;
    const v = C == null ? void 0 : C.querySelectorAll("span.mw-cite-backlink");
    return v == null || v.forEach((R) => R.remove()), (k = C == null ? void 0 : C.textContent) == null ? void 0 : k.trim();
  }).filter((C) => C !== t).filter((C, v, k) => k.indexOf(C) === v).filter(Boolean), s = (_ = (A = n.querySelector("h2")) == null ? void 0 : A.textContent) == null ? void 0 : _.trim(), u = Array.from(n.querySelectorAll("b")).find(
    (C) => C.innerHTML.includes("<u>") || C.innerHTML.includes(".")
  ), l = (g = u == null ? void 0 : u.textContent) == null ? void 0 : g.trim(), c = Kc(n), p = {}, d = n.querySelector("table.traduções");
  d && d.querySelectorAll("tr").forEach((v) => {
    var N;
    const k = v.querySelector("td"), R = v.querySelectorAll("td ~ td a");
    if (k && R.length > 0) {
      const W = (N = k.textContent) == null ? void 0 : N.trim().toLowerCase(), T = Array.from(R).map((z) => {
        var Y;
        return (Y = z.textContent) == null ? void 0 : Y.trim();
      }).filter(Boolean);
      W && (p[W] = T);
    }
  });
  const f = ((m = n.querySelector("img")) == null ? void 0 : m.getAttribute("src")) || void 0, h = Object.keys(p).length > 0 ? p : void 0;
  return {
    wordClass: s,
    pronunciation: l,
    definitions: i,
    etymology: c,
    gender: o,
    imgUrl: f,
    translations: h
  };
}
function Kc(e) {
  var n, o, i;
  let t;
  const r = Array.from(e.querySelectorAll("h2, h3")).find(
    (s) => {
      var u;
      return (u = s.textContent) == null ? void 0 : u.toLowerCase().includes("etimologia");
    }
  );
  if (r) {
    const s = (n = r.parentElement) == null ? void 0 : n.nextElementSibling;
    t = (i = (o = s == null ? void 0 : s.firstChild) == null ? void 0 : o.textContent) == null ? void 0 : i.trim();
  }
  return t;
}
const Yc = ue(({ className: e, size: t = 24, ...r }, n) => /* @__PURE__ */ a(G, { children: /* @__PURE__ */ a(
  "span",
  {
    className: j("flex text-primary items-center justify-center aspect-square", e),
    ref: n,
    ...r,
    children: [
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
    ]
  }
) })), Qc = () => {
  const { t: e } = O();
  return /* @__PURE__ */ a("div", { className: "flex flex-col items-center py-8 justify-center gap-2", children: [
    /* @__PURE__ */ a(Yc, { size: 32, className: "relative top-0.5" }),
    /* @__PURE__ */ a("span", { className: "animate-pulse text-sm", children: e("status.searching") })
  ] });
}, Jc = {
  data: null,
  isSearchOpen: !1,
  isFetching: !1
}, Xe = Je()(() => ({
  ...Jc
})), e5 = () => {
  var r, n;
  const { data: e } = Xe();
  if (!e) return null;
  const t = (((r = e.definitions) == null ? void 0 : r.length) || 0) > 1;
  return /* @__PURE__ */ a("div", { className: "text-base space-y-4", children: [
    /* @__PURE__ */ a("p", { children: [
      /* @__PURE__ */ a("strong", { className: "italic", children: (n = e.pronunciation) == null ? void 0 : n.split(".").join("-").replace(":", "") }),
      e.gender && `, ${e.gender}`
    ] }),
    /* @__PURE__ */ a(Er, { label: t ? "Definições" : "Definição", value: e.definitions }),
    /* @__PURE__ */ a(Er, { label: "Classe gramatical", value: e.wordClass }),
    /* @__PURE__ */ a(Er, { label: "Etimologia", value: e.etymology })
  ] });
};
function Er({ label: e, value: t }) {
  return t != null && t.length ? Array.isArray(t) ? /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ a("p", { className: "text-muted-foreground text-base font-semibold", children: e }),
    /* @__PURE__ */ a("ol", { className: j(t.length > 1 && "list-decimal ps-2 list-inside space-y-1"), children: t.slice(0, 5).map((r, n) => /* @__PURE__ */ a("li", { children: r }, n)) })
  ] }) : /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ a("p", { className: "text-muted-foreground text-base font-semibold", children: e }),
    /* @__PURE__ */ a("span", { children: t.split(`
`).map((r, n) => /* @__PURE__ */ a("span", { children: [
      r,
      /* @__PURE__ */ a("br", {})
    ] }, n)) })
  ] }) : null;
}
const Q1 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ a("title", { children: t }),
      /* @__PURE__ */ a("path", { d: "M9.95229 17.9046C7.75215 17.9046 5.87674 17.1292 4.32604 15.5785C2.77535 14.0278 2 12.1524 2 9.95229C2 7.75215 2.77535 5.87674 4.32604 4.32604C5.87674 2.77535 7.75215 2 9.95229 2C12.1524 2 14.0278 2.77535 15.5785 4.32604C17.1292 5.87674 17.9046 7.75215 17.9046 9.95229C17.9046 10.721 17.7919 11.4831 17.5666 12.2386C17.3413 12.994 17.0033 13.6899 16.5527 14.326L21.5626 19.336C21.8542 19.6276 22 19.9987 22 20.4493C22 20.8999 21.8542 21.271 21.5626 21.5626C21.271 21.8542 20.8999 22 20.4493 22C19.9987 22 19.6276 21.8542 19.336 21.5626L14.326 16.5527C13.6899 17.0033 12.994 17.3413 12.2386 17.5666C11.4831 17.7919 10.721 17.9046 9.95229 17.9046ZM9.95229 14.7237C11.2777 14.7237 12.4042 14.2598 13.332 13.332C14.2598 12.4042 14.7237 11.2777 14.7237 9.95229C14.7237 8.62691 14.2598 7.50033 13.332 6.57256C12.4042 5.6448 11.2777 5.18091 9.95229 5.18091C8.62691 5.18091 7.50033 5.6448 6.57256 6.57256C5.6448 7.50033 5.18091 8.62691 5.18091 9.95229C5.18091 11.2777 5.6448 12.4042 6.57256 13.332C7.50033 14.2598 8.62691 14.7237 9.95229 14.7237Z" }),
      " "
    ]
  }
), t5 = () => {
  const [e, t] = F(""), { dictionary: r } = P(), { t: n } = O(), o = () => {
    Xe.setState({ isSearchOpen: !1 });
  }, i = () => {
    P.setState({ dictionary: { ...r, isActive: !0, word: e.trim() } });
  };
  return /* @__PURE__ */ a("div", { className: "flex items-center w-full gap-4", children: [
    /* @__PURE__ */ a(
      "input",
      {
        autofocus: !0,
        onKeyDown: (u) => {
          u.key === "Enter" && e.trim().length >= 3 && i();
        },
        className: "w-full h-10 border-1 animate-move-left placeholder:text-sm rounded-full px-4 focus:outline-solid outline-primary outline-1 focus:border-primary",
        placeholder: n("al.dictionary.search"),
        type: "text",
        value: e,
        onInput: (u) => t(u.currentTarget.value)
      }
    ),
    /* @__PURE__ */ a(
      ce,
      {
        disabled: e.trim().length < 3,
        onClick: i,
        title: n("al.dictionary.search"),
        "aria-label": n("al.dictionary.search"),
        className: "h-10 aspect-square bg-primary group ml-auto rounded-full",
        children: /* @__PURE__ */ a(Q1, { className: "fill-primary-foreground", iconTitle: n("al.dictionary.search"), size: 20 })
      }
    ),
    /* @__PURE__ */ a(
      ce,
      {
        onClick: o,
        title: n("al.close"),
        "aria-label": n("al.close"),
        className: "h-10 hover:bg-destructive/10 hover:[&>svg]:fill-destructive aspect-square hover:border-destructive/20 border-1 group ml-auto rounded-full",
        children: /* @__PURE__ */ a(on, { className: "fill-muted-foreground group-hover:fill-foreground", iconTitle: n("al.close"), size: 20 })
      }
    )
  ] });
}, r5 = () => {
  const { t: e } = O(), { data: t, isFetching: r, isSearchOpen: n } = Xe(), [o, i] = F(!1);
  M(() => {
    K1();
  }, [t]), M(() => {
    const c = ze("[vw-access-button]");
    i(!!c);
  }, []);
  const s = () => {
    Xe.setState({ isSearchOpen: !0 });
  }, u = (c) => {
    Ae.setState({
      isActive: !0,
      event: c,
      onClick: () => {
        const p = ze("[vw-access-button]");
        p ? p.click() : alert("VLibras Widget não encontrado!");
      },
      render: /* @__PURE__ */ a(G, { children: "Abrir VLibras Widget" })
    });
  }, l = ht(() => {
    var d, f, h;
    const p = `${(((d = t == null ? void 0 : t.definitions) == null ? void 0 : d.length) || 0) > 1 ? "Definições" : "Definição"} de ${t == null ? void 0 : t.title}: ${(h = (f = t == null ? void 0 : t.definitions) == null ? void 0 : f.slice(0, 5)) == null ? void 0 : h.join(". ")}`;
    qr(t ? p : e("dictionary.no_result"));
  }, [t, e]);
  return /* @__PURE__ */ a(
    "div",
    {
      className: j(
        r && "pointer-events-none opacity-50",
        "overflow-hidden flex items-center gap-4 p-4 border-t-1"
      ),
      children: [
        !n && /* @__PURE__ */ a(G, { children: [
          /* @__PURE__ */ a(
            ce,
            {
              disabled: !o,
              "aria-label": e("al.definition_to_libras"),
              onClick: u,
              className: "bg-primary text-primary-foreground px-4 h-10 rounded-md hover:brightness-90 hidden",
              children: [
                /* @__PURE__ */ a(Z2, { "aria-hidden": !0, size: 20 }),
                e("definition_to_libras")
              ]
            }
          ),
          /* @__PURE__ */ a(
            ce,
            {
              "aria-label": e("al.read_definition"),
              onClick: l,
              className: j(
                t ? "px-4" : "aspect-square",
                "bg-primary text-primary-foreground h-10 rounded-full hover:brightness-90"
              ),
              children: [
                /* @__PURE__ */ a(Z1, { size: 18 }),
                t && e("read_definition")
              ]
            }
          ),
          /* @__PURE__ */ a(
            ce,
            {
              onClick: s,
              title: e("al.dictionary.search"),
              "aria-label": e("al.dictionary.search"),
              className: "h-10 px-4 border-1 group hover:bg-muted ml-auto rounded-full",
              children: [
                /* @__PURE__ */ a(
                  Q1,
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
        n && /* @__PURE__ */ a(t5, {})
      ]
    }
  );
}, n5 = () => {
  var u;
  const { toggle: e } = Y1(), { dictionary: t } = P(), { t: r } = O(), { data: n, isLoading: o, error: i } = Ol(
    ht(() => Fr((t == null ? void 0 : t.word) || ""), [t == null ? void 0 : t.word])
  );
  M(() => {
    Xe.setState({ data: n, isFetching: o });
  }, [n, o]);
  const s = !!n && (t == null ? void 0 : t.word) !== (n == null ? void 0 : n.title);
  return i && console.error(i), /* @__PURE__ */ a(
    "div",
    {
      style: { boxShadow: "2px 2px 15px -5px rgba(0, 0, 0, .2)" },
      className: "fixed z-[2147483647] bottom-2 sm:-translate-x-1/2 left-2 sm:left-1/2 transition-all animate-move-up bg-background border-1 rounded-lg sm:w-lg max-sm:right-2",
      children: [
        /* @__PURE__ */ a("div", { className: "flex justify-between gap-4 w-full border-b-1 p-4", children: [
          ((u = t == null ? void 0 : t.word) == null ? void 0 : u.trim()) && /* @__PURE__ */ a("p", { className: "text-xl font-semibold leading-none line-clamp-2 pt-2 break-all", children: [
            /* @__PURE__ */ a(G1, { size: 24, iconTitle: r("dictionary"), className: "inline mr-2 relative -top-1", "aria-hidden": !0 }),
            x2(t.word),
            " ",
            s && /* @__PURE__ */ a("span", { className: "text-muted-foreground font-medium text-sm", children: [
              "(",
              n == null ? void 0 : n.title,
              ")"
            ] })
          ] }),
          !(t != null && t.word) && /* @__PURE__ */ a("p", { className: "pt-1", children: r("dictionary.select_word") }),
          /* @__PURE__ */ a(
            ce,
            {
              className: "rounded-md bg-destructive fill-destructive-foreground hover:brightness-90 size-9 aspect-square",
              title: r("dictionary.close"),
              onClick: () => e(!1),
              children: /* @__PURE__ */ a(on, { "aria-hidden": !0, size: 22, iconTitle: r("dictionary.close") })
            }
          )
        ] }),
        (t == null ? void 0 : t.word) && /* @__PURE__ */ a("div", { className: "p-4 max-h-[calc(100dvh-162px)] overflow-y-auto overflow-hidden", children: [
          o && /* @__PURE__ */ a(Qc, {}),
          n && !o && /* @__PURE__ */ a(e5, {}),
          !n && !o && /* @__PURE__ */ a("p", { className: "text-center py-8", children: [
            r("dictionary.no_result"),
            "..."
          ] })
        ] }),
        /* @__PURE__ */ a(r5, {})
      ]
    }
  );
}, o5 = () => {
  const { readingMask: e, readingGuide: t, dictionary: r } = P(), { isActive: n } = Ae();
  return /* @__PURE__ */ a(G, { children: [
    e && /* @__PURE__ */ a(Vc, {}),
    t && /* @__PURE__ */ a(Zc, {}),
    n && /* @__PURE__ */ a(Gc, {}),
    (r == null ? void 0 : r.isActive) && /* @__PURE__ */ a(n5, {})
  ] });
}, i5 = `/*! tailwindcss v4.0.15 | MIT License | https://tailwindcss.com */@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs--line-height:calc(1/.75);--text-sm--line-height:calc(1.25/.875);--text-base--line-height: 1.5 ;--text-lg--line-height:calc(1.75/1.125);--text-xl--line-height:calc(1.75/1.25);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-normal:0em;--leading-tight:1.25;--leading-normal:1.5;--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--tw-translate-y:0;--tw-translate-x:0}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:color-mix(in oklab,currentColor 50%,transparent)}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*{--tw-border-style:solid;border-style:solid;border-color:var(--border);outline-color:color-mix(in oklab,var(--ring)50%,transparent)}:host{border-color:var(--border);fill:var(--foreground);color:var(--foreground)}}@layer components;@layer utilities{.\\!pointer-events-none{pointer-events:none!important}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:calc(var(--spacing)*0)}.-top-0\\.5{top:calc(var(--spacing)*-.5)}.-top-1{top:calc(var(--spacing)*-1)}.top-0{top:calc(var(--spacing)*0)}.top-0\\.5{top:calc(var(--spacing)*.5)}.top-2{top:calc(var(--spacing)*2)}.top-4{top:calc(var(--spacing)*4)}.top-\\[calc\\(45dvh\\+20px\\)\\]{top:calc(45dvh + 20px)}.\\!right-0{right:calc(var(--spacing)*0)!important}.right-2{right:calc(var(--spacing)*2)}.-bottom-5{bottom:calc(var(--spacing)*-5)}.-bottom-\\[80dvh\\]{bottom:-80dvh}.bottom-0{bottom:calc(var(--spacing)*0)}.bottom-0\\.5{bottom:calc(var(--spacing)*.5)}.bottom-2{bottom:calc(var(--spacing)*2)}.bottom-\\[3\\.7px\\]{bottom:3.7px}.\\!left-0{left:calc(var(--spacing)*0)!important}.left-0{left:calc(var(--spacing)*0)}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing)*2)}.left-6{left:calc(var(--spacing)*6)}.left-\\[calc\\(50dvw-36rem\\/2\\)\\]{left:calc(50dvw - 18rem)}.-z-\\[1\\]{z-index:-1}.-z-\\[2\\]{z-index:-2}.z-\\[9999999\\]{z-index:9999999}.z-\\[2147483647\\]{z-index:2147483647}.col-\\[1\\/-1\\]{grid-column:1/-1}.mr-2{margin-right:calc(var(--spacing)*2)}.ml-1{margin-left:calc(var(--spacing)*1)}.ml-auto{margin-left:auto}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.aspect-square{aspect-ratio:1}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.size-8{width:calc(var(--spacing)*8);height:calc(var(--spacing)*8)}.size-9{width:calc(var(--spacing)*9);height:calc(var(--spacing)*9)}.h-2{height:calc(var(--spacing)*2)}.h-2\\.5{height:calc(var(--spacing)*2.5)}.h-4{height:calc(var(--spacing)*4)}.h-8{height:calc(var(--spacing)*8)}.h-9{height:calc(var(--spacing)*9)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.h-32{height:calc(var(--spacing)*32)}.h-\\[1px\\]{height:1px}.h-\\[45dvh\\]{height:45dvh}.h-\\[80dvh\\]{height:80dvh}.max-h-\\[calc\\(100dvh-162px\\)\\]{max-height:calc(100dvh - 162px)}.\\!w-auto{width:auto!important}.w-2\\.5{width:calc(var(--spacing)*2.5)}.w-8{width:calc(var(--spacing)*8)}.w-12{width:calc(var(--spacing)*12)}.w-\\[240px\\]{width:240px}.w-full{width:100%}.w-xl{width:576px}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-6{--tw-translate-x:calc(var(--spacing)*-6);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-full{--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-none{translate:none}.rotate-45{rotate:45deg}.animate-move-left{animation:.2s ease-in-out move-left}.animate-move-up{animation:.2s ease-in-out move-up}.animate-pulse{animation:var(--animate-pulse)}.animate-scale{animation:.2s ease-in-out scale}.animate-spin{animation:var(--animate-spin)}.\\!cursor-not-allowed{cursor:not-allowed!important}.cursor-pointer{cursor:pointer}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.auto-rows-min{grid-auto-rows:min-content}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.place-items-center{place-items:center}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-0{gap:calc(var(--spacing)*0)}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.gap-x-1{column-gap:calc(var(--spacing)*1)}.gap-x-2{column-gap:calc(var(--spacing)*2)}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-none{border-radius:0}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:calc(var(--radius) + 4px)}.rounded-r-\\[8px\\]{border-top-right-radius:8px;border-bottom-right-radius:8px}.rounded-b-md{border-bottom-right-radius:calc(var(--radius) - 2px);border-bottom-left-radius:calc(var(--radius) - 2px)}.border,.border-1{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t-1{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t-8{border-top-style:var(--tw-border-style);border-top-width:8px}.border-b-1{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-8{border-bottom-style:var(--tw-border-style);border-bottom-width:8px}.\\!border-border{border-color:var(--border)!important}.border-border{border-color:var(--border)}.border-primary{border-color:var(--primary)}.border-primary\\/50{border-color:color-mix(in oklab,var(--primary)50%,transparent)}.border-white{border-color:var(--color-white)}.border-t-primary{border-top-color:var(--primary)}.\\!bg-muted\\/30{background-color:color-mix(in oklab,var(--muted)30%,transparent)!important}.\\!bg-primary\\/10{background-color:color-mix(in oklab,var(--primary)10%,transparent)!important}.bg-background{background-color:var(--background)}.bg-black\\/20{background-color:color-mix(in oklab,var(--color-black)20%,transparent)}.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black)40%,transparent)}.bg-border{background-color:var(--border)}.bg-destructive{background-color:var(--destructive)}.bg-muted{background-color:var(--muted)}.bg-primary{background-color:var(--primary)}.bg-transparent{background-color:#0000}.fill-destructive-foreground{fill:var(--destructive-foreground)}.fill-foreground\\/80{fill:color-mix(in oklab,var(--foreground)80%,transparent)}.fill-muted-foreground{fill:var(--muted-foreground)}.fill-primary{fill:var(--primary)}.fill-primary-foreground{fill:var(--primary-foreground)}.fill-white{fill:var(--color-white)}.p-4{padding:calc(var(--spacing)*4)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-8{padding-block:calc(var(--spacing)*8)}.ps-2{padding-inline-start:calc(var(--spacing)*2)}.pt-0{padding-top:calc(var(--spacing)*0)}.pt-1{padding-top:calc(var(--spacing)*1)}.pt-2{padding-top:calc(var(--spacing)*2)}.text-center{text-align:center}.text-base{font-size:calc(var(--font-size)*1);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:calc(var(--font-size)*1.125);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:calc(var(--font-size)*1.25);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:calc(var(--font-size)*.75);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[13\\.5px\\]{font-size:13.5px}.text-\\[15px\\]{font-size:15px}.leading-none{--tw-leading:1;line-height:1}.leading-normal{--tw-leading:var(--leading-normal);line-height:var(--leading-normal)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-normal{--tw-tracking:var(--tracking-normal);letter-spacing:var(--tracking-normal)}.break-all{word-break:break-all}.\\!text-muted-foreground{color:var(--muted-foreground)!important}.text-foreground{color:var(--foreground)}.text-foreground\\/80{color:color-mix(in oklab,var(--foreground)80%,transparent)}.text-muted-foreground{color:var(--muted-foreground)}.text-primary{color:var(--primary)}.text-primary-foreground{color:var(--primary-foreground)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.italic{font-style:italic}.opacity-50{opacity:.5}.opacity-80{opacity:.8}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline,.outline-1{outline-style:var(--tw-outline-style);outline-width:1px}.outline-primary{outline-color:var(--primary)}.brightness-85{--tw-brightness:brightness(85%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[bottom\\]{transition-property:bottom;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-500{--tw-duration:.5s;transition-duration:.5s}:is(.\\*\\:\\!pointer-events-none>*){pointer-events:none!important}:is(.\\*\\:pointer-events-none>*){pointer-events:none}@media (hover:hover){.group-hover\\:fill-foreground:is(:where(.group):hover *){fill:var(--foreground)}.group-hover\\:brightness-85:is(:where(.group):hover *){--tw-brightness:brightness(85%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}}.placeholder\\:text-sm::placeholder{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}@media (hover:hover){.hover\\:border-destructive\\/20:hover{border-color:color-mix(in oklab,var(--destructive)20%,transparent)}.hover\\:border-primary:hover{border-color:var(--primary)}.hover\\:bg-destructive\\/10:hover{background-color:color-mix(in oklab,var(--destructive)10%,transparent)}.hover\\:bg-muted:hover{background-color:var(--muted)}.hover\\:fill-foreground:hover{fill:var(--foreground)}.hover\\:text-foreground:hover{color:var(--foreground)}.hover\\:brightness-90:hover{--tw-brightness:brightness(90%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.hover\\:brightness-110:hover{--tw-brightness:brightness(110%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}}.focus\\:border-primary:focus{border-color:var(--primary)}.focus\\:outline-solid:focus{--tw-outline-style:solid;outline-style:solid}.data-\\[active\\=\\'true\\'\\]\\:bottom-2[data-active=true]{bottom:calc(var(--spacing)*2)}@media (width<40rem){.max-sm\\:right-2{right:calc(var(--spacing)*2)}.max-sm\\:hidden{display:none}.max-sm\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.max-sm\\:p-2\\.5{padding:calc(var(--spacing)*2.5)}}@media (width>=40rem){.sm\\:left-1\\/2{left:50%}.sm\\:size-7{width:calc(var(--spacing)*7);height:calc(var(--spacing)*7)}.sm\\:size-9{width:calc(var(--spacing)*9);height:calc(var(--spacing)*9)}.sm\\:w-\\[420px\\]{width:420px}.sm\\:w-lg{width:512px}.sm\\:-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}}.\\[\\&\\>\\*\\]\\:fill-primary>*{fill:var(--primary)}.\\[\\&\\>\\*\\]\\:text-primary>*{color:var(--primary)}.\\[\\&\\>svg\\]\\:pointer-events-none>svg{pointer-events:none}.\\[\\&\\>svg\\]\\:fill-foreground\\/80>svg{fill:color-mix(in oklab,var(--foreground)80%,transparent)}@media (hover:hover){.hover\\:\\[\\&\\>svg\\]\\:fill-destructive:hover>svg{fill:var(--destructive)}.hover\\:\\[\\&\\>svg\\]\\:fill-foreground:hover>svg{fill:var(--foreground)}}}:host{--background:oklch(1 0 0);--foreground:oklch(25% 0 0);--popover:oklch(1 0 0);--popover-foreground:oklch(.145 0 0);--primary:oklch(56.99% .1959 259.98);--primary-foreground:oklch(1 0 0);--secondary:oklch(.97 0 0);--secondary-foreground:oklch(.205 0 0);--muted:oklch(.97 0 0);--muted-foreground:oklch(.556 0 0);--accent:oklch(.97 0 0);--accent-foreground:oklch(.205 0 0);--destructive:oklch(.577 .245 27.325);--destructive-foreground:oklch(.985 0 0);--border:oklch(.922 0 0);--input:oklch(.922 0 0);--ring:oklch(.708 0 0);--radius:10px;--spacing:4px;--font-sans:"VLibrasWidget_Font",sans-serif;--font-size:16px}:host(.dark){--background:oklch(.16 0 0);--foreground:oklch(.985 0 0);--popover:oklch(.145 0 0);--popover-foreground:oklch(.985 0 0);--primary:oklch(56.99% .1959 259.98);--primary-foreground:oklch(1 0 0);--secondary:oklch(.269 0 0);--secondary-foreground:oklch(.985 0 0);--muted:oklch(.2 0 0);--muted-foreground:oklch(.708 0 0);--accent:oklch(.269 0 0);--accent-foreground:oklch(.985 0 0);--destructive:oklch(.637 .237 25.331);--destructive-foreground:oklch(.985 0 0);--border:oklch(.269 0 0);--input:oklch(.269 0 0);--ring:oklch(.439 0 0)}:host{font-family:var(--font-sans)!important}:host ::-webkit-scrollbar{height:calc(var(--spacing)*2.5);width:calc(var(--spacing)*2.5)}:host ::-webkit-scrollbar-track{background-color:#0000}:host ::-webkit-scrollbar-thumb{border-style:var(--tw-border-style);--tw-border-style:solid;background-color:var(--border);background-clip:padding-box;border:1px solid #0000;border-radius:3.40282e38px}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}@keyframes scale{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes move-left{0%{transform:translate(-100%)}to{transform:translate(0)}}@keyframes move-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}`, a5 = ({ children: e, root: t }) => /* @__PURE__ */ a(Uc, { root: t, children: [
  /* @__PURE__ */ a("style", { children: i5 }),
  /* @__PURE__ */ a(o5, {}),
  e
] }), { shadowRoot: zo } = U1(), To = {}, s5 = ({ children: e, css: t, ...r }) => {
  if (!t) return /* @__PURE__ */ a(G, { children: e });
  const n = Array.isArray(t) ? t.join(`
`) : t, o = n.slice(0, 15), [i, s] = F(!o);
  return M(() => {
    if (!o || To[o]) return;
    To[o] = !0;
    const u = new CSSStyleSheet();
    u.replaceSync(n), zo.adoptedStyleSheets = [...zo.adoptedStyleSheets, u], s(!0);
  }, [o, n]), /* @__PURE__ */ a(G, { ...r, children: [
    (i || !1) && /* @__PURE__ */ a("style", { children: n }),
    e
  ] });
}, l5 = "._badge_n7m0i_1{display:none;place-content:center;border-radius:40px;width:16px;height:16px;z-index:100000000;position:absolute;bottom:-4px;right:28px;background:#fff}._badge_n7m0i_1[data-active=true]{display:grid}._badge_n7m0i_1 svg{width:100%;height:100%;fill:#2c9e2c}", c5 = "_badge_n7m0i_1", u5 = {
  badge: c5
}, d5 = () => {
  const { isActive: e } = P(), { t } = O();
  return /* @__PURE__ */ a(s5, { css: l5, children: /* @__PURE__ */ a("div", { className: u5.badge, "data-active": e, children: /* @__PURE__ */ a(V1, { iconTitle: t("actived") }) }) });
}, p5 = () => (M(() => {
  var n;
  const e = (n = document.getElementById("vwp-app-wrapper")) == null ? void 0 : n.shadowRoot, t = e == null ? void 0 : e.getElementById("vwp-access-wrapper"), r = document.createElement("div");
  ke(/* @__PURE__ */ a(d5, {}), r), t == null || t.appendChild(r);
}, []), null), f5 = () => /* @__PURE__ */ a(G, { children: /* @__PURE__ */ a(p5, {}) }), { root: h5, shadowRoot: jr, isRootActive: Ho } = U1();
function g5() {
  const { setIsOpenWidget: e, isLoaded: t, setIsLoaded: r } = P(), { path: n } = E1();
  return M(() => {
    if ((async () => await k2(n, () => {
      jr.adoptedStyleSheets = [...document.adoptedStyleSheets], r(!0);
    }))(), !t) return;
    e(Ho());
    const o = new MutationObserver(() => e(Ho()));
    return o.observe(h5, {
      attributes: !0,
      attributeFilter: ["data-active"]
    }), () => o.disconnect();
  }, [n, e, t, r]), /* @__PURE__ */ a(a5, { root: jr, children: [
    /* @__PURE__ */ a(jc, {}),
    /* @__PURE__ */ a(f5, {})
  ] });
}
ke(/* @__PURE__ */ a(g5, {}), jr);
