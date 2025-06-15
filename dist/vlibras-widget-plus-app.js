var io, J, Rl, Gt, Ja, Ml, Il, Ol, la, Un, jn, Pl, Qr = {}, Dl = [], U2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, no = Array.isArray;
function ft(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function ca(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Qe(e, t, r) {
  var o, n, a, s = {};
  for (a in t) a == "key" ? o = t[a] : a == "ref" ? n = t[a] : s[a] = t[a];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? io.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null) for (a in e.defaultProps) s[a] === void 0 && (s[a] = e.defaultProps[a]);
  return Yr(e, s, o, n, null);
}
function Yr(e, t, r, o, n) {
  var a = { type: e, props: t, key: r, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: n ?? ++Rl, __i: -1, __u: 0 };
  return n == null && J.vnode != null && J.vnode(a), a;
}
function Hl() {
  return { current: null };
}
function Ce(e) {
  return e.children;
}
function at(e, t) {
  this.props = e, this.context = t;
}
function mr(e, t) {
  if (t == null) return e.__ ? mr(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? mr(e) : null;
}
function zl(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) {
      e.__e = e.__c.base = r.__e;
      break;
    }
    return zl(e);
  }
}
function Gn(e) {
  (!e.__d && (e.__d = !0) && Gt.push(e) && !Po.__r++ || Ja != J.debounceRendering) && ((Ja = J.debounceRendering) || Ml)(Po);
}
function Po() {
  for (var e, t, r, o, n, a, s, l = 1; Gt.length; ) Gt.length > l && Gt.sort(Il), e = Gt.shift(), l = Gt.length, e.__d && (r = void 0, n = (o = (t = e).__v).__e, a = [], s = [], t.__P && ((r = ft({}, o)).__v = o.__v + 1, J.vnode && J.vnode(r), da(t.__P, r, o, t.__n, t.__P.namespaceURI, 32 & o.__u ? [n] : null, a, n ?? mr(o), !!(32 & o.__u), s), r.__v = o.__v, r.__.__k[r.__i] = r, Vl(a, r, s), r.__e != n && zl(r)));
  Po.__r = 0;
}
function Bl(e, t, r, o, n, a, s, l, c, d, p) {
  var u, h, f, C, b, A, L = o && o.__k || Dl, _ = t.length;
  for (c = j2(r, t, L, c, _), u = 0; u < _; u++) (f = r.__k[u]) != null && (h = f.__i == -1 ? Qr : L[f.__i] || Qr, f.__i = u, A = da(e, f, h, n, a, s, l, c, d, p), C = f.__e, f.ref && h.ref != f.ref && (h.ref && ua(h.ref, null, f), p.push(f.ref, f.__c || C, f)), b == null && C != null && (b = C), 4 & f.__u || h.__k === f.__k ? c = Fl(f, c, e) : typeof f.type == "function" && A !== void 0 ? c = A : C && (c = C.nextSibling), f.__u &= -7);
  return r.__e = b, c;
}
function j2(e, t, r, o, n) {
  var a, s, l, c, d, p = r.length, u = p, h = 0;
  for (e.__k = new Array(n), a = 0; a < n; a++) (s = t[a]) != null && typeof s != "boolean" && typeof s != "function" ? (c = a + h, (s = e.__k[a] = typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? Yr(null, s, null, null, null) : no(s) ? Yr(Ce, { children: s }, null, null, null) : s.constructor == null && s.__b > 0 ? Yr(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s).__ = e, s.__b = e.__b + 1, l = null, (d = s.__i = G2(s, r, c, u)) != -1 && (u--, (l = r[d]) && (l.__u |= 2)), l == null || l.__v == null ? (d == -1 && (n > p ? h-- : n < p && h++), typeof s.type != "function" && (s.__u |= 4)) : d != c && (d == c - 1 ? h-- : d == c + 1 ? h++ : (d > c ? h-- : h++, s.__u |= 4))) : e.__k[a] = null;
  if (u) for (a = 0; a < p; a++) (l = r[a]) != null && (2 & l.__u) == 0 && (l.__e == o && (o = mr(l)), Ul(l, l));
  return o;
}
function Fl(e, t, r) {
  var o, n;
  if (typeof e.type == "function") {
    for (o = e.__k, n = 0; o && n < o.length; n++) o[n] && (o[n].__ = e, t = Fl(o[n], t, r));
    return t;
  }
  e.__e != t && (t && e.type && !r.contains(t) && (t = mr(e)), r.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function At(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (no(e) ? e.some(function(r) {
    At(r, t);
  }) : t.push(e)), t;
}
function G2(e, t, r, o) {
  var n, a, s = e.key, l = e.type, c = t[r];
  if (c === null && e.key == null || c && s == c.key && l == c.type && (2 & c.__u) == 0) return r;
  if (o > (c != null && (2 & c.__u) == 0 ? 1 : 0)) for (n = r - 1, a = r + 1; n >= 0 || a < t.length; ) {
    if (n >= 0) {
      if ((c = t[n]) && (2 & c.__u) == 0 && s == c.key && l == c.type) return n;
      n--;
    }
    if (a < t.length) {
      if ((c = t[a]) && (2 & c.__u) == 0 && s == c.key && l == c.type) return a;
      a++;
    }
  }
  return -1;
}
function Qa(e, t, r) {
  t[0] == "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || U2.test(t) ? r : r + "px";
}
function vo(e, t, r, o, n) {
  var a, s;
  e: if (t == "style") if (typeof r == "string") e.style.cssText = r;
  else {
    if (typeof o == "string" && (e.style.cssText = o = ""), o) for (t in o) r && t in r || Qa(e.style, t, "");
    if (r) for (t in r) o && r[t] == o[t] || Qa(e.style, t, r[t]);
  }
  else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(Ol, "$1")), s = t.toLowerCase(), t = s in e || t == "onFocusOut" || t == "onFocusIn" ? s.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = r, r ? o ? r.u = o.u : (r.u = la, e.addEventListener(t, a ? jn : Un, a)) : e.removeEventListener(t, a ? jn : Un, a);
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
function e1(e) {
  return function(t) {
    if (this.l) {
      var r = this.l[t.type + e];
      if (t.t == null) t.t = la++;
      else if (t.t < r.u) return;
      return r(J.event ? J.event(t) : t);
    }
  };
}
function da(e, t, r, o, n, a, s, l, c, d) {
  var p, u, h, f, C, b, A, L, _, w, x, g, m, y, k, O, D, Z = t.type;
  if (t.constructor != null) return null;
  128 & r.__u && (c = !!(32 & r.__u), a = [l = t.__e = r.__e]), (p = J.__b) && p(t);
  e: if (typeof Z == "function") try {
    if (L = t.props, _ = "prototype" in Z && Z.prototype.render, w = (p = Z.contextType) && o[p.__c], x = p ? w ? w.props.value : p.__ : o, r.__c ? A = (u = t.__c = r.__c).__ = u.__E : (_ ? t.__c = u = new Z(L, x) : (t.__c = u = new at(L, x), u.constructor = Z, u.render = q2), w && w.sub(u), u.props = L, u.state || (u.state = {}), u.context = x, u.__n = o, h = u.__d = !0, u.__h = [], u._sb = []), _ && u.__s == null && (u.__s = u.state), _ && Z.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = ft({}, u.__s)), ft(u.__s, Z.getDerivedStateFromProps(L, u.__s))), f = u.props, C = u.state, u.__v = t, h) _ && Z.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), _ && u.componentDidMount != null && u.__h.push(u.componentDidMount);
    else {
      if (_ && Z.getDerivedStateFromProps == null && L !== f && u.componentWillReceiveProps != null && u.componentWillReceiveProps(L, x), !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(L, u.__s, x) === !1 || t.__v == r.__v) {
        for (t.__v != r.__v && (u.props = L, u.state = u.__s, u.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(z) {
          z && (z.__ = t);
        }), g = 0; g < u._sb.length; g++) u.__h.push(u._sb[g]);
        u._sb = [], u.__h.length && s.push(u);
        break e;
      }
      u.componentWillUpdate != null && u.componentWillUpdate(L, u.__s, x), _ && u.componentDidUpdate != null && u.__h.push(function() {
        u.componentDidUpdate(f, C, b);
      });
    }
    if (u.context = x, u.props = L, u.__P = e, u.__e = !1, m = J.__r, y = 0, _) {
      for (u.state = u.__s, u.__d = !1, m && m(t), p = u.render(u.props, u.state, u.context), k = 0; k < u._sb.length; k++) u.__h.push(u._sb[k]);
      u._sb = [];
    } else do
      u.__d = !1, m && m(t), p = u.render(u.props, u.state, u.context), u.state = u.__s;
    while (u.__d && ++y < 25);
    u.state = u.__s, u.getChildContext != null && (o = ft(ft({}, o), u.getChildContext())), _ && !h && u.getSnapshotBeforeUpdate != null && (b = u.getSnapshotBeforeUpdate(f, C)), O = p, p != null && p.type === Ce && p.key == null && (O = $l(p.props.children)), l = Bl(e, no(O) ? O : [O], t, r, o, n, a, s, l, c, d), u.base = t.__e, t.__u &= -161, u.__h.length && s.push(u), A && (u.__E = u.__ = null);
  } catch (z) {
    if (t.__v = null, c || a != null) if (z.then) {
      for (t.__u |= c ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
      a[a.indexOf(l)] = null, t.__e = l;
    } else for (D = a.length; D--; ) ca(a[D]);
    else t.__e = r.__e, t.__k = r.__k;
    J.__e(z, t, r);
  }
  else a == null && t.__v == r.__v ? (t.__k = r.__k, t.__e = r.__e) : l = t.__e = Z2(r.__e, t, r, o, n, a, s, c, d);
  return (p = J.diffed) && p(t), 128 & t.__u ? void 0 : l;
}
function Vl(e, t, r) {
  for (var o = 0; o < r.length; o++) ua(r[o], r[++o], r[++o]);
  J.__c && J.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(a) {
        a.call(n);
      });
    } catch (a) {
      J.__e(a, n.__v);
    }
  });
}
function $l(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : no(e) ? e.map($l) : ft({}, e);
}
function Z2(e, t, r, o, n, a, s, l, c) {
  var d, p, u, h, f, C, b, A = r.props, L = t.props, _ = t.type;
  if (_ == "svg" ? n = "http://www.w3.org/2000/svg" : _ == "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), a != null) {
    for (d = 0; d < a.length; d++) if ((f = a[d]) && "setAttribute" in f == !!_ && (_ ? f.localName == _ : f.nodeType == 3)) {
      e = f, a[d] = null;
      break;
    }
  }
  if (e == null) {
    if (_ == null) return document.createTextNode(L);
    e = document.createElementNS(n, _, L.is && L), l && (J.__m && J.__m(t, a), l = !1), a = null;
  }
  if (_ == null) A === L || l && e.data == L || (e.data = L);
  else {
    if (a = a && io.call(e.childNodes), A = r.props || Qr, !l && a != null) for (A = {}, d = 0; d < e.attributes.length; d++) A[(f = e.attributes[d]).name] = f.value;
    for (d in A) if (f = A[d], d != "children") {
      if (d == "dangerouslySetInnerHTML") u = f;
      else if (!(d in L)) {
        if (d == "value" && "defaultValue" in L || d == "checked" && "defaultChecked" in L) continue;
        vo(e, d, null, f, n);
      }
    }
    for (d in L) f = L[d], d == "children" ? h = f : d == "dangerouslySetInnerHTML" ? p = f : d == "value" ? C = f : d == "checked" ? b = f : l && typeof f != "function" || A[d] === f || vo(e, d, f, A[d], n);
    if (p) l || u && (p.__html == u.__html || p.__html == e.innerHTML) || (e.innerHTML = p.__html), t.__k = [];
    else if (u && (e.innerHTML = ""), Bl(t.type == "template" ? e.content : e, no(h) ? h : [h], t, r, o, _ == "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, a, s, a ? a[0] : r.__k && mr(r, 0), l, c), a != null) for (d = a.length; d--; ) ca(a[d]);
    l || (d = "value", _ == "progress" && C == null ? e.removeAttribute("value") : C != null && (C !== e[d] || _ == "progress" && !C || _ == "option" && C != A[d]) && vo(e, d, C, A[d], n), d = "checked", b != null && b != e[d] && vo(e, d, b, A[d], n));
  }
  return e;
}
function ua(e, t, r) {
  try {
    if (typeof e == "function") {
      var o = typeof e.__u == "function";
      o && e.__u(), o && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (n) {
    J.__e(n, r);
  }
}
function Ul(e, t, r) {
  var o, n;
  if (J.unmount && J.unmount(e), (o = e.ref) && (o.current && o.current != e.__e || ua(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (a) {
      J.__e(a, t);
    }
    o.base = o.__P = null;
  }
  if (o = e.__k) for (n = 0; n < o.length; n++) o[n] && Ul(o[n], t, r || typeof e.type != "function");
  r || ca(e.__e), e.__c = e.__ = e.__e = void 0;
}
function q2(e, t, r) {
  return this.constructor(e, r);
}
function et(e, t, r) {
  var o, n, a, s;
  t == document && (t = document.documentElement), J.__ && J.__(e, t), n = (o = typeof r == "function") ? null : r && r.__k || t.__k, a = [], s = [], da(t, e = (!o && r || t).__k = Qe(Ce, null, [e]), n || Qr, Qr, t.namespaceURI, !o && r ? [r] : n ? null : t.firstChild ? io.call(t.childNodes) : null, a, !o && r ? r : n ? n.__e : t.firstChild, o, s), Vl(a, e, s);
}
function jl(e, t) {
  et(e, t, jl);
}
function W2(e, t, r) {
  var o, n, a, s, l = ft({}, e.props);
  for (a in e.type && e.type.defaultProps && (s = e.type.defaultProps), t) a == "key" ? o = t[a] : a == "ref" ? n = t[a] : l[a] = t[a] === void 0 && s != null ? s[a] : t[a];
  return arguments.length > 2 && (l.children = arguments.length > 3 ? io.call(arguments, 2) : r), Yr(e.type, l, o || e.key, n || e.ref, null);
}
function Gl(e) {
  function t(r) {
    var o, n;
    return this.getChildContext || (o = /* @__PURE__ */ new Set(), (n = {})[t.__c] = this, this.getChildContext = function() {
      return n;
    }, this.componentWillUnmount = function() {
      o = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value != a.value && o.forEach(function(s) {
        s.__e = !0, Gn(s);
      });
    }, this.sub = function(a) {
      o.add(a);
      var s = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        o && o.delete(a), s && s.call(a);
      };
    }), r.children;
  }
  return t.__c = "__cC" + Pl++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(r, o) {
    return r.children(o);
  }).contextType = t, t;
}
io = Dl.slice, J = { __e: function(e, t, r, o) {
  for (var n, a, s; t = t.__; ) if ((n = t.__c) && !n.__) try {
    if ((a = n.constructor) && a.getDerivedStateFromError != null && (n.setState(a.getDerivedStateFromError(e)), s = n.__d), n.componentDidCatch != null && (n.componentDidCatch(e, o || {}), s = n.__d), s) return n.__E = n;
  } catch (l) {
    e = l;
  }
  throw e;
} }, Rl = 0, at.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = ft({}, this.state), typeof e == "function" && (e = e(ft({}, r), this.props)), e && ft(r, e), e != null && this.__v && (t && this._sb.push(t), Gn(this));
}, at.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Gn(this));
}, at.prototype.render = Ce, Gt = [], Ml = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Il = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Po.__r = 0, Ol = /(PointerCapture)$|Capture$/i, la = 0, Un = e1(!1), jn = e1(!0), Pl = 0;
var X2 = 0;
function i(e, t, r, o, n, a) {
  t || (t = {});
  var s, l, c = t;
  if ("ref" in c) for (l in c = {}, t) l == "ref" ? s = t[l] : c[l] = t[l];
  var d = { type: e, props: c, key: r, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --X2, __i: -1, __u: 0, __source: n, __self: a };
  if (typeof e == "function" && (s = e.defaultProps)) for (l in s) c[l] === void 0 && (c[l] = s[l]);
  return J.vnode && J.vnode(d), d;
}
var Lt, ge, ti, t1, vr = 0, Zl = [], ye = J, r1 = ye.__b, o1 = ye.__r, i1 = ye.diffed, n1 = ye.__c, a1 = ye.unmount, s1 = ye.__;
function Yt(e, t) {
  ye.__h && ye.__h(ge, e, vr || t), vr = 0;
  var r = ge.__H || (ge.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function U(e) {
  return vr = 1, Bo(ql, e);
}
function Bo(e, t, r) {
  var o = Yt(Lt++, 2);
  if (o.t = e, !o.__c && (o.__ = [r ? r(t) : ql(void 0, t), function(l) {
    var c = o.__N ? o.__N[0] : o.__[0], d = o.t(c, l);
    c !== d && (o.__N = [d, o.__[1]], o.__c.setState({}));
  }], o.__c = ge, !ge.__f)) {
    var n = function(l, c, d) {
      if (!o.__c.__H) return !0;
      var p = o.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (p.every(function(h) {
        return !h.__N;
      })) return !a || a.call(this, l, c, d);
      var u = o.__c.props !== l;
      return p.forEach(function(h) {
        if (h.__N) {
          var f = h.__[0];
          h.__ = h.__N, h.__N = void 0, f !== h.__[0] && (u = !0);
        }
      }), a && a.call(this, l, c, d) || u;
    };
    ge.__f = !0;
    var a = ge.shouldComponentUpdate, s = ge.componentWillUpdate;
    ge.componentWillUpdate = function(l, c, d) {
      if (this.__e) {
        var p = a;
        a = void 0, n(l, c, d), a = p;
      }
      s && s.call(this, l, c, d);
    }, ge.shouldComponentUpdate = n;
  }
  return o.__N || o.__;
}
function P(e, t) {
  var r = Yt(Lt++, 3);
  !ye.__s && fa(r.__H, t) && (r.__ = e, r.u = t, ge.__H.__h.push(r));
}
function xr(e, t) {
  var r = Yt(Lt++, 4);
  !ye.__s && fa(r.__H, t) && (r.__ = e, r.u = t, ge.__h.push(r));
}
function xe(e) {
  return vr = 5, Nt(function() {
    return { current: e };
  }, []);
}
function ao(e, t, r) {
  vr = 6, xr(function() {
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
function Nt(e, t) {
  var r = Yt(Lt++, 7);
  return fa(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__;
}
function Et(e, t) {
  return vr = 8, Nt(function() {
    return e;
  }, t);
}
function pa(e) {
  var t = ge.context[e.__c], r = Yt(Lt++, 9);
  return r.c = e, t ? (r.__ == null && (r.__ = !0, t.sub(ge)), t.props.value) : e.__;
}
function ha(e, t) {
  ye.useDebugValue && ye.useDebugValue(t ? t(e) : e);
}
function Y2(e) {
  var t = Yt(Lt++, 10), r = U();
  return t.__ = e, ge.componentDidCatch || (ge.componentDidCatch = function(o, n) {
    t.__ && t.__(o, n), r[1](o);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function ga() {
  var e = Yt(Lt++, 11);
  if (!e.__) {
    for (var t = ge.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var r = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + r[0] + "-" + r[1]++;
  }
  return e.__;
}
function K2() {
  for (var e; e = Zl.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(Mo), e.__H.__h.forEach(Zn), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], ye.__e(t, e.__v);
  }
}
ye.__b = function(e) {
  ge = null, r1 && r1(e);
}, ye.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), s1 && s1(e, t);
}, ye.__r = function(e) {
  o1 && o1(e), Lt = 0;
  var t = (ge = e.__c).__H;
  t && (ti === ge ? (t.__h = [], ge.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (t.__h.forEach(Mo), t.__h.forEach(Zn), t.__h = [], Lt = 0)), ti = ge;
}, ye.diffed = function(e) {
  i1 && i1(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Zl.push(t) !== 1 && t1 === ye.requestAnimationFrame || ((t1 = ye.requestAnimationFrame) || J2)(K2)), t.__H.__.forEach(function(r) {
    r.u && (r.__H = r.u), r.u = void 0;
  })), ti = ge = null;
}, ye.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(Mo), r.__h = r.__h.filter(function(o) {
        return !o.__ || Zn(o);
      });
    } catch (o) {
      t.some(function(n) {
        n.__h && (n.__h = []);
      }), t = [], ye.__e(o, r.__v);
    }
  }), n1 && n1(e, t);
}, ye.unmount = function(e) {
  a1 && a1(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(o) {
    try {
      Mo(o);
    } catch (n) {
      t = n;
    }
  }), r.__H = void 0, t && ye.__e(t, r.__v));
};
var l1 = typeof requestAnimationFrame == "function";
function J2(e) {
  var t, r = function() {
    clearTimeout(o), l1 && cancelAnimationFrame(t), setTimeout(e);
  }, o = setTimeout(r, 35);
  l1 && (t = requestAnimationFrame(r));
}
function Mo(e) {
  var t = ge, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), ge = t;
}
function Zn(e) {
  var t = ge;
  e.__c = e.__(), ge = t;
}
function fa(e, t) {
  return !e || e.length !== t.length || t.some(function(r, o) {
    return r !== e[o];
  });
}
function ql(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Wl(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = Wl(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function Q2() {
  for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = Wl(e)) && (o && (o += " "), o += t);
  return o;
}
const ma = "-", e5 = (e) => {
  const t = r5(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (s) => {
      const l = s.split(ma);
      return l[0] === "" && l.length !== 1 && l.shift(), Xl(l, t) || t5(s);
    },
    getConflictingClassGroupIds: (s, l) => {
      const c = r[s] || [];
      return l && o[s] ? [...c, ...o[s]] : c;
    }
  };
}, Xl = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), n = o ? Xl(e.slice(1), o) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const a = e.join(ma);
  return (s = t.validators.find(({
    validator: l
  }) => l(a))) == null ? void 0 : s.classGroupId;
}, c1 = /^\[(.+)\]$/, t5 = (e) => {
  if (c1.test(e)) {
    const t = c1.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, r5 = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in r)
    qn(r[n], o, n, t);
  return o;
}, qn = (e, t, r, o) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const a = n === "" ? t : d1(t, n);
      a.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if (o5(n)) {
        qn(n(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(([a, s]) => {
      qn(s, d1(t, a), r, o);
    });
  });
}, d1 = (e, t) => {
  let r = e;
  return t.split(ma).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, o5 = (e) => e.isThemeGetter, i5 = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const n = (a, s) => {
    r.set(a, s), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = r.get(a);
      if (s !== void 0)
        return s;
      if ((s = o.get(a)) !== void 0)
        return n(a, s), s;
    },
    set(a, s) {
      r.has(a) ? r.set(a, s) : n(a, s);
    }
  };
}, Wn = "!", Xn = ":", n5 = Xn.length, a5 = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let o = (n) => {
    const a = [];
    let s = 0, l = 0, c = 0, d;
    for (let C = 0; C < n.length; C++) {
      let b = n[C];
      if (s === 0 && l === 0) {
        if (b === Xn) {
          a.push(n.slice(c, C)), c = C + n5;
          continue;
        }
        if (b === "/") {
          d = C;
          continue;
        }
      }
      b === "[" ? s++ : b === "]" ? s-- : b === "(" ? l++ : b === ")" && l--;
    }
    const p = a.length === 0 ? n : n.substring(c), u = s5(p), h = u !== p, f = d && d > c ? d - c : void 0;
    return {
      modifiers: a,
      hasImportantModifier: h,
      baseClassName: u,
      maybePostfixModifierPosition: f
    };
  };
  if (t) {
    const n = t + Xn, a = o;
    o = (s) => s.startsWith(n) ? a(s.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const n = o;
    o = (a) => r({
      className: a,
      parseClassName: n
    });
  }
  return o;
}, s5 = (e) => e.endsWith(Wn) ? e.substring(0, e.length - 1) : e.startsWith(Wn) ? e.substring(1) : e, l5 = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const n = [];
    let a = [];
    return o.forEach((s) => {
      s[0] === "[" || t[s] ? (n.push(...a.sort(), s), a = []) : a.push(s);
    }), n.push(...a.sort()), n;
  };
}, c5 = (e) => ({
  cache: i5(e.cacheSize),
  parseClassName: a5(e),
  sortModifiers: l5(e),
  ...e5(e)
}), d5 = /\s+/, u5 = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: n,
    sortModifiers: a
  } = t, s = [], l = e.trim().split(d5);
  let c = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const p = l[d], {
      isExternal: u,
      modifiers: h,
      hasImportantModifier: f,
      baseClassName: C,
      maybePostfixModifierPosition: b
    } = r(p);
    if (u) {
      c = p + (c.length > 0 ? " " + c : c);
      continue;
    }
    let A = !!b, L = o(A ? C.substring(0, b) : C);
    if (!L) {
      if (!A) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (L = o(C), !L) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      A = !1;
    }
    const _ = a(h).join(":"), w = f ? _ + Wn : _, x = w + L;
    if (s.includes(x))
      continue;
    s.push(x);
    const g = n(L, A);
    for (let m = 0; m < g.length; ++m) {
      const y = g[m];
      s.push(w + y);
    }
    c = p + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function p5() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Yl(t)) && (o && (o += " "), o += r);
  return o;
}
const Yl = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Yl(e[o])) && (r && (r += " "), r += t);
  return r;
};
function h5(e, ...t) {
  let r, o, n, a = s;
  function s(c) {
    const d = t.reduce((p, u) => u(p), e());
    return r = c5(d), o = r.cache.get, n = r.cache.set, a = l, l(c);
  }
  function l(c) {
    const d = o(c);
    if (d)
      return d;
    const p = u5(c, r);
    return n(c, p), p;
  }
  return function() {
    return a(p5.apply(null, arguments));
  };
}
const Re = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Kl = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Jl = /^\((?:(\w[\w-]*):)?(.+)\)$/i, g5 = /^\d+\/\d+$/, f5 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, m5 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, v5 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, b5 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, C5 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, or = (e) => g5.test(e), Q = (e) => !!e && !Number.isNaN(Number(e)), Rt = (e) => !!e && Number.isInteger(Number(e)), ri = (e) => e.endsWith("%") && Q(e.slice(0, -1)), wt = (e) => f5.test(e), w5 = () => !0, y5 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  m5.test(e) && !v5.test(e)
), Ql = () => !1, _5 = (e) => b5.test(e), x5 = (e) => C5.test(e), k5 = (e) => !V(e) && !$(e), A5 = (e) => kr(e, rc, Ql), V = (e) => Kl.test(e), Ft = (e) => kr(e, oc, y5), oi = (e) => kr(e, T5, Q), u1 = (e) => kr(e, ec, Ql), E5 = (e) => kr(e, tc, x5), bo = (e) => kr(e, ic, _5), $ = (e) => Jl.test(e), Tr = (e) => Ar(e, oc), S5 = (e) => Ar(e, R5), p1 = (e) => Ar(e, ec), L5 = (e) => Ar(e, rc), N5 = (e) => Ar(e, tc), Co = (e) => Ar(e, ic, !0), kr = (e, t, r) => {
  const o = Kl.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, Ar = (e, t, r = !1) => {
  const o = Jl.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, ec = (e) => e === "position" || e === "percentage", tc = (e) => e === "image" || e === "url", rc = (e) => e === "length" || e === "size" || e === "bg-size", oc = (e) => e === "length", T5 = (e) => e === "number", R5 = (e) => e === "family-name", ic = (e) => e === "shadow", M5 = () => {
  const e = Re("color"), t = Re("font"), r = Re("text"), o = Re("font-weight"), n = Re("tracking"), a = Re("leading"), s = Re("breakpoint"), l = Re("container"), c = Re("spacing"), d = Re("radius"), p = Re("shadow"), u = Re("inset-shadow"), h = Re("text-shadow"), f = Re("drop-shadow"), C = Re("blur"), b = Re("perspective"), A = Re("aspect"), L = Re("ease"), _ = Re("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], x = () => [
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
  ], g = () => [...x(), $, V], m = () => ["auto", "hidden", "clip", "visible", "scroll"], y = () => ["auto", "contain", "none"], k = () => [$, V, c], O = () => [or, "full", "auto", ...k()], D = () => [Rt, "none", "subgrid", $, V], Z = () => ["auto", {
    span: ["full", Rt, $, V]
  }, Rt, $, V], z = () => [Rt, "auto", $, V], j = () => ["auto", "min", "max", "fr", $, V], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ue = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], ke = () => ["auto", ...k()], Me = () => [or, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...k()], G = () => [e, $, V], He = () => [...x(), p1, u1, {
    position: [$, V]
  }], lt = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], ee = () => ["auto", "cover", "contain", L5, A5, {
    size: [$, V]
  }], ot = () => [ri, Tr, Ft], X = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    $,
    V
  ], we = () => ["", Q, Tr, Ft], ie = () => ["solid", "dashed", "dotted", "double"], ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ne = () => [Q, ri, p1, u1], ct = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    C,
    $,
    V
  ], _e = () => ["none", Q, $, V], oe = () => ["none", Q, $, V], he = () => [Q, $, V], te = () => [or, "full", ...k()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [wt],
      breakpoint: [wt],
      color: [w5],
      container: [wt],
      "drop-shadow": [wt],
      ease: ["in", "out", "in-out"],
      font: [k5],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [wt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [wt],
      shadow: [wt],
      spacing: ["px", Q],
      text: [wt],
      "text-shadow": [wt],
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
        aspect: ["auto", "square", or, V, $, A]
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
        columns: [Q, V, $, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": w()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": w()
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
        object: g()
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
        overscroll: y()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": y()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": y()
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
        inset: O()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": O()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": O()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: O()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: O()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: O()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: O()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: O()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: O()
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
        z: [Rt, "auto", $, V]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [or, "full", "auto", l, ...k()]
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
        flex: [Q, or, "auto", "initial", "none", V]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Q, $, V]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Q, $, V]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Rt, "first", "last", "none", $, V]
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
        col: Z()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
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
        row: Z()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
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
        "auto-cols": j()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": j()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: k()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": k()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": k()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...F(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ue(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ue()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...F()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ue(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ue(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": F()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ue(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ue()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: k()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: k()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: k()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: k()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: k()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: k()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: k()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: k()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: k()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: ke()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: ke()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: ke()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: ke()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: ke()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: ke()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: ke()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: ke()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: ke()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": k()
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
        "space-y": k()
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
        size: Me()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...Me()]
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
          ...Me()
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
          ...Me()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Me()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Me()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Me()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Tr, Ft]
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
        font: [o, $, oi]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ri, V]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [S5, V, t]
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
        tracking: [n, $, V]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Q, "none", $, oi]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...k()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", $, V]
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
        list: ["disc", "decimal", "none", $, V]
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
        placeholder: G()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: G()
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
        decoration: [...ie(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Q, "from-font", "auto", $, Ft]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: G()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Q, "auto", $, V]
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
        indent: k()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", $, V]
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
        content: ["none", $, V]
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
        bg: He()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: lt()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ee()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Rt, $, V],
          radial: ["", $, V],
          conic: [Rt, $, V]
        }, N5, E5]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: G()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ot()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ot()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ot()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: G()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: G()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: G()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: X()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": X()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": X()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": X()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": X()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": X()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": X()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": X()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": X()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": X()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": X()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": X()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": X()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": X()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": X()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: we()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": we()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": we()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": we()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": we()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": we()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": we()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": we()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": we()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": we()
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
        "divide-y": we()
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
        border: [...ie(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ie(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: G()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": G()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": G()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": G()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": G()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": G()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": G()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": G()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": G()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: G()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ie(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Q, $, V]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Q, Tr, Ft]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: G()
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
          Co,
          bo
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: G()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", u, Co, bo]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": G()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: we()
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
        ring: G()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Q, Ft]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": G()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": we()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": G()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, Co, bo]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": G()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Q, $, V]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ae(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ae()
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
        "mask-linear": [Q]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ne()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ne()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": G()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": G()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ne()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ne()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": G()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": G()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ne()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ne()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": G()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": G()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ne()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ne()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": G()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": G()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ne()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ne()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": G()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": G()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ne()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ne()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": G()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": G()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ne()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ne()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": G()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": G()
      }],
      "mask-image-radial": [{
        "mask-radial": [$, V]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ne()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ne()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": G()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": G()
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
        "mask-radial-at": x()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Q]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ne()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ne()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": G()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": G()
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
        mask: He()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: lt()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: ee()
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
        mask: ["none", $, V]
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
          $,
          V
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ct()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Q, $, V]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Q, $, V]
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
          Co,
          bo
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": G()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Q, $, V]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Q, $, V]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Q, $, V]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Q, $, V]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Q, $, V]
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
          $,
          V
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ct()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Q, $, V]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Q, $, V]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Q, $, V]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Q, $, V]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Q, $, V]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Q, $, V]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Q, $, V]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Q, $, V]
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
        "border-spacing": k()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": k()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": k()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", $, V]
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
        duration: [Q, "initial", $, V]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", L, $, V]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Q, $, V]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", _, $, V]
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
        perspective: [b, $, V]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": g()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: _e()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": _e()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": _e()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": _e()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: oe()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": oe()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": oe()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": oe()
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
        skew: he()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": he()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": he()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [$, V, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: g()
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
        translate: te()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": te()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": te()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": te()
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
        accent: G()
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
        caret: G()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", $, V]
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
        "scroll-m": k()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": k()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": k()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": k()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": k()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": k()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": k()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": k()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": k()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": k()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": k()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": k()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": k()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": k()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": k()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": k()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": k()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": k()
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
        "will-change": ["auto", "scroll", "contents", "transform", $, V]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...G()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Q, Tr, Ft, oi]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...G()]
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
}, I5 = /* @__PURE__ */ h5(M5);
function H(...e) {
  return I5(Q2(e));
}
function Yn(e, t) {
  const r = { ...e };
  for (const o of t) delete r[o];
  return r;
}
const nc = (e) => e.split(" ").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(" "), Be = (e, t) => (t || document).querySelector(e), st = (e, t) => Array.from((t || document).querySelectorAll(e)), O5 = (e, t) => {
  const r = e.length, o = t.length, n = Array(r + 1).fill(null).map(() => Array(o + 1).fill(0));
  for (let a = 0; a <= r; a++) n[a][0] = a;
  for (let a = 0; a <= o; a++) n[0][a] = a;
  for (let a = 1; a <= r; a++)
    for (let s = 1; s <= o; s++)
      e[a - 1] === t[s - 1] ? n[a][s] = n[a - 1][s - 1] : n[a][s] = Math.min(n[a - 1][s - 1] + 1, n[a - 1][s] + 1, n[a][s - 1] + 1);
  return n[r][o];
};
let ii = null;
const ac = () => {
  var e;
  return (e = Be("[vp]")) == null ? void 0 : e.closest("[vw]");
}, va = (e = !0) => {
  const t = ii || Be("[vw-access-button]"), r = !(t != null && t.classList.contains("active"));
  ii || (ii = t), e && !r && (t == null || t.click()), !e && r && window.dispatchEvent(new CustomEvent("vp-widget-close", { detail: { close: !0 } }));
}, sc = () => {
  const [e, t] = U(!1);
  return P(() => {
    t(!!ac());
  }, []), { inPage: e, open: va };
}, Fo = () => {
  const [e, t] = U({ x: 0, y: 0 });
  return P(() => {
    const r = (o) => {
      t({ x: o.clientX, y: o.clientY });
    };
    return window.addEventListener("mousemove", r), () => window.removeEventListener("mousemove", r);
  }, []), e;
}, h1 = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), o = (d, p) => {
    const u = typeof d == "function" ? d(t) : d;
    if (!Object.is(u, t)) {
      const h = t;
      t = p ?? (typeof u != "object" || u === null) ? u : Object.assign({}, t, u), r.forEach((f) => f(t, h));
    }
  }, n = () => t, l = { setState: o, getState: n, getInitialState: () => c, subscribe: (d) => (r.add(d), () => r.delete(d)) }, c = t = e(o, n, l);
  return l;
}, P5 = (e) => e ? h1(e) : h1;
function lc(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function Kn(e, t) {
  for (var r in e) if (r !== "__source" && !(r in t)) return !0;
  for (var o in t) if (o !== "__source" && e[o] !== t[o]) return !0;
  return !1;
}
function ba(e, t) {
  var r = t(), o = U({ t: { __: r, u: t } }), n = o[0].t, a = o[1];
  return xr(function() {
    n.__ = r, n.u = t, ni(n) && a({ t: n });
  }, [e, r, t]), P(function() {
    return ni(n) && a({ t: n }), e(function() {
      ni(n) && a({ t: n });
    });
  }, [e]), r;
}
function ni(e) {
  var t, r, o = e.u, n = e.__;
  try {
    var a = o();
    return !((t = n) === (r = a) && (t !== 0 || 1 / t == 1 / r) || t != t && r != r);
  } catch {
    return !0;
  }
}
function so(e) {
  e();
}
function Ca(e) {
  return e;
}
function wa() {
  return [!1, so];
}
var ya = xr;
function Do(e, t) {
  this.props = e, this.context = t;
}
function cc(e, t) {
  function r(n) {
    var a = this.props.ref, s = a == n.ref;
    return !s && a && (a.call ? a(null) : a.current = null), t ? !t(this.props, n) || !s : Kn(this.props, n);
  }
  function o(n) {
    return this.shouldComponentUpdate = r, Qe(e, n);
  }
  return o.displayName = "Memo(" + (e.displayName || e.name) + ")", o.prototype.isReactComponent = !0, o.__f = !0, o;
}
(Do.prototype = new at()).isPureReactComponent = !0, Do.prototype.shouldComponentUpdate = function(e, t) {
  return Kn(this.props, e) || Kn(this.state, t);
};
var g1 = J.__b;
J.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), g1 && g1(e);
};
var D5 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function me(e) {
  function t(r) {
    var o = lc({}, r);
    return delete o.ref, e(o, r.ref || null);
  }
  return t.$$typeof = D5, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var f1 = function(e, t) {
  return e == null ? null : At(At(e).map(t));
}, dc = { map: f1, forEach: f1, count: function(e) {
  return e ? At(e).length : 0;
}, only: function(e) {
  var t = At(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: At }, H5 = J.__e;
J.__e = function(e, t, r, o) {
  if (e.then) {
    for (var n, a = t; a = a.__; ) if ((n = a.__c) && n.__c) return t.__e == null && (t.__e = r.__e, t.__k = r.__k), n.__c(e, t);
  }
  H5(e, t, r, o);
};
var m1 = J.unmount;
function uc(e, t, r) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(o) {
    typeof o.__c == "function" && o.__c();
  }), e.__c.__H = null), (e = lc({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(o) {
    return uc(o, t, r);
  })), e;
}
function pc(e, t, r) {
  return e && r && (e.__v = null, e.__k = e.__k && e.__k.map(function(o) {
    return pc(o, t, r);
  }), e.__c && e.__c.__P === t && (e.__e && r.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = r)), e;
}
function Kr() {
  this.__u = 0, this.o = null, this.__b = null;
}
function hc(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function gc(e) {
  var t, r, o;
  function n(a) {
    if (t || (t = e()).then(function(s) {
      r = s.default || s;
    }, function(s) {
      o = s;
    }), o) throw o;
    if (!r) throw t;
    return Qe(r, a);
  }
  return n.displayName = "Lazy", n.__f = !0, n;
}
function pr() {
  this.i = null, this.l = null;
}
J.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), m1 && m1(e);
}, (Kr.prototype = new at()).__c = function(e, t) {
  var r = t.__c, o = this;
  o.o == null && (o.o = []), o.o.push(r);
  var n = hc(o.__v), a = !1, s = function() {
    a || (a = !0, r.__R = null, n ? n(l) : l());
  };
  r.__R = s;
  var l = function() {
    if (!--o.__u) {
      if (o.state.__a) {
        var c = o.state.__a;
        o.__v.__k[0] = pc(c, c.__c.__P, c.__c.__O);
      }
      var d;
      for (o.setState({ __a: o.__b = null }); d = o.o.pop(); ) d.forceUpdate();
    }
  };
  o.__u++ || 32 & t.__u || o.setState({ __a: o.__b = o.__v.__k[0] }), e.then(s, s);
}, Kr.prototype.componentWillUnmount = function() {
  this.o = [];
}, Kr.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), o = this.__v.__k[0].__c;
      this.__v.__k[0] = uc(this.__b, r, o.__O = o.__P);
    }
    this.__b = null;
  }
  var n = t.__a && Qe(Ce, null, e.fallback);
  return n && (n.__u &= -33), [Qe(Ce, null, t.__a ? null : e.children), n];
};
var v1 = function(e, t, r) {
  if (++r[1] === r[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (r = e.i; r; ) {
    for (; r.length > 3; ) r.pop()();
    if (r[1] < r[0]) break;
    e.i = r = r[2];
  }
};
function z5(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function B5(e) {
  var t = this, r = e.h;
  if (t.componentWillUnmount = function() {
    et(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== r && t.componentWillUnmount(), !t.v) {
    for (var o = t.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    t.h = r, t.v = { nodeType: 1, parentNode: r, childNodes: [], __k: { __m: o.__m }, contains: function() {
      return !0;
    }, insertBefore: function(n, a) {
      this.childNodes.push(n), t.h.insertBefore(n, a);
    }, removeChild: function(n) {
      this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.h.removeChild(n);
    } };
  }
  et(Qe(z5, { context: t.context }, e.__v), t.v);
}
function fc(e, t) {
  var r = Qe(B5, { __v: e, h: t });
  return r.containerInfo = t, r;
}
(pr.prototype = new at()).__a = function(e) {
  var t = this, r = hc(t.__v), o = t.l.get(e);
  return o[0]++, function(n) {
    var a = function() {
      t.props.revealOrder ? (o.push(n), v1(t, e, o)) : n();
    };
    r ? r(a) : a();
  };
}, pr.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = At(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var r = t.length; r--; ) this.l.set(t[r], this.i = [1, 0, this.i]);
  return e.children;
}, pr.prototype.componentDidUpdate = pr.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, r) {
    v1(e, r, t);
  });
};
var mc = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, F5 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, V5 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, $5 = /[A-Z0-9]/g, U5 = typeof document < "u", j5 = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function vc(e, t, r) {
  return t.__k == null && (t.textContent = ""), et(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
function bc(e, t, r) {
  return jl(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
at.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(at.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var b1 = J.event;
function G5() {
}
function Z5() {
  return this.cancelBubble;
}
function q5() {
  return this.defaultPrevented;
}
J.event = function(e) {
  return b1 && (e = b1(e)), e.persist = G5, e.isPropagationStopped = Z5, e.isDefaultPrevented = q5, e.nativeEvent = e;
};
var _a, W5 = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, C1 = J.vnode;
J.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var r = t.props, o = t.type, n = {}, a = o.indexOf("-") === -1;
    for (var s in r) {
      var l = r[s];
      if (!(s === "value" && "defaultValue" in r && l == null || U5 && s === "children" && o === "noscript" || s === "class" || s === "className")) {
        var c = s.toLowerCase();
        s === "defaultValue" && "value" in r && r.value == null ? s = "value" : s === "download" && l === !0 ? l = "" : c === "translate" && l === "no" ? l = !1 : c[0] === "o" && c[1] === "n" ? c === "ondoubleclick" ? s = "ondblclick" : c !== "onchange" || o !== "input" && o !== "textarea" || j5(r.type) ? c === "onfocus" ? s = "onfocusin" : c === "onblur" ? s = "onfocusout" : V5.test(s) && (s = c) : c = s = "oninput" : a && F5.test(s) ? s = s.replace($5, "-$&").toLowerCase() : l === null && (l = void 0), c === "oninput" && n[s = c] && (s = "oninputCapture"), n[s] = l;
      }
    }
    o == "select" && n.multiple && Array.isArray(n.value) && (n.value = At(r.children).forEach(function(d) {
      d.props.selected = n.value.indexOf(d.props.value) != -1;
    })), o == "select" && n.defaultValue != null && (n.value = At(r.children).forEach(function(d) {
      d.props.selected = n.multiple ? n.defaultValue.indexOf(d.props.value) != -1 : n.defaultValue == d.props.value;
    })), r.class && !r.className ? (n.class = r.class, Object.defineProperty(n, "className", W5)) : (r.className && !r.class || r.class && r.className) && (n.class = n.className = r.className), t.props = n;
  }(e), e.$$typeof = mc, C1 && C1(e);
};
var w1 = J.__r;
J.__r = function(e) {
  w1 && w1(e), _a = e.__c;
};
var y1 = J.diffed;
J.diffed = function(e) {
  y1 && y1(e);
  var t = e.props, r = e.__e;
  r != null && e.type === "textarea" && "value" in t && t.value !== r.value && (r.value = t.value == null ? "" : t.value), _a = null;
};
var Cc = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return _a.__n[e.__c].props.value;
}, useCallback: Et, useContext: pa, useDebugValue: ha, useDeferredValue: Ca, useEffect: P, useId: ga, useImperativeHandle: ao, useInsertionEffect: ya, useLayoutEffect: xr, useMemo: Nt, useReducer: Bo, useRef: xe, useState: U, useSyncExternalStore: ba, useTransition: wa } } }, X5 = "18.3.1";
function wc(e) {
  return Qe.bind(null, e);
}
function lo(e) {
  return !!e && e.$$typeof === mc;
}
function yc(e) {
  return lo(e) && e.type === Ce;
}
function _c(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function xc(e) {
  return lo(e) ? W2.apply(null, arguments) : e;
}
function kc(e) {
  return !!e.__k && (et(null, e), !0);
}
function Ac(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var Ec = function(e, t) {
  return e(t);
}, Sc = function(e, t) {
  return e(t);
}, Lc = Ce, Nc = lo, Jn = { useState: U, useId: ga, useReducer: Bo, useEffect: P, useLayoutEffect: xr, useInsertionEffect: ya, useTransition: wa, useDeferredValue: Ca, useSyncExternalStore: ba, startTransition: so, useRef: xe, useImperativeHandle: ao, useMemo: Nt, useCallback: Et, useContext: pa, useDebugValue: ha, version: "18.3.1", Children: dc, render: vc, hydrate: bc, unmountComponentAtNode: kc, createPortal: fc, createElement: Qe, createContext: Gl, createFactory: wc, cloneElement: xc, createRef: Hl, Fragment: Ce, isValidElement: lo, isElement: Nc, isFragment: yc, isMemo: _c, findDOMNode: Ac, Component: at, PureComponent: Do, memo: cc, forwardRef: me, flushSync: Sc, unstable_batchedUpdates: Ec, StrictMode: Lc, Suspense: Kr, SuspenseList: pr, lazy: gc, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Cc };
const Y5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: dc,
  Component: at,
  Fragment: Ce,
  PureComponent: Do,
  StrictMode: Lc,
  Suspense: Kr,
  SuspenseList: pr,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Cc,
  cloneElement: xc,
  createContext: Gl,
  createElement: Qe,
  createFactory: wc,
  createPortal: fc,
  createRef: Hl,
  default: Jn,
  findDOMNode: Ac,
  flushSync: Sc,
  forwardRef: me,
  hydrate: bc,
  isElement: Nc,
  isFragment: yc,
  isMemo: _c,
  isValidElement: lo,
  lazy: gc,
  memo: cc,
  render: vc,
  startTransition: so,
  unmountComponentAtNode: kc,
  unstable_batchedUpdates: Ec,
  useCallback: Et,
  useContext: pa,
  useDebugValue: ha,
  useDeferredValue: Ca,
  useEffect: P,
  useErrorBoundary: Y2,
  useId: ga,
  useImperativeHandle: ao,
  useInsertionEffect: ya,
  useLayoutEffect: xr,
  useMemo: Nt,
  useReducer: Bo,
  useRef: xe,
  useState: U,
  useSyncExternalStore: ba,
  useTransition: wa,
  version: X5
}, Symbol.toStringTag, { value: "Module" })), K5 = (e) => e;
function J5(e, t = K5) {
  const r = Jn.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return Jn.useDebugValue(r), r;
}
const _1 = (e) => {
  const t = P5(e), r = (o) => J5(t, o);
  return Object.assign(r, t), r;
}, Ht = (e) => e ? _1(e) : _1;
function Q5(e, t) {
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
const Qn = (e) => (t) => {
  try {
    const r = e(t);
    return r instanceof Promise ? r : {
      then(o) {
        return Qn(o)(r);
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
        return Qn(o)(r);
      }
    };
  }
}, ed = (e, t) => (r, o, n) => {
  let a = {
    storage: Q5(() => localStorage),
    partialize: (b) => b,
    version: 0,
    merge: (b, A) => ({
      ...A,
      ...b
    }),
    ...t
  }, s = !1;
  const l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let d = a.storage;
  if (!d)
    return e(
      (...b) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), r(...b);
      },
      o,
      n
    );
  const p = () => {
    const b = a.partialize({ ...o() });
    return d.setItem(a.name, {
      state: b,
      version: a.version
    });
  }, u = n.setState;
  n.setState = (b, A) => {
    u(b, A), p();
  };
  const h = e(
    (...b) => {
      r(...b), p();
    },
    o,
    n
  );
  n.getInitialState = () => h;
  let f;
  const C = () => {
    var b, A;
    if (!d) return;
    s = !1, l.forEach((_) => {
      var w;
      return _((w = o()) != null ? w : h);
    });
    const L = ((A = a.onRehydrateStorage) == null ? void 0 : A.call(a, (b = o()) != null ? b : h)) || void 0;
    return Qn(d.getItem.bind(d))(a.name).then((_) => {
      if (_)
        if (typeof _.version == "number" && _.version !== a.version) {
          if (a.migrate) {
            const w = a.migrate(
              _.state,
              _.version
            );
            return w instanceof Promise ? w.then((x) => [!0, x]) : [!0, w];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, _.state];
      return [!1, void 0];
    }).then((_) => {
      var w;
      const [x, g] = _;
      if (f = a.merge(
        g,
        (w = o()) != null ? w : h
      ), r(f, !0), x)
        return p();
    }).then(() => {
      L == null || L(f, void 0), f = o(), s = !0, c.forEach((_) => _(f));
    }).catch((_) => {
      L == null || L(void 0, _);
    });
  };
  return n.persist = {
    setOptions: (b) => {
      a = {
        ...a,
        ...b
      }, b.storage && (d = b.storage);
    },
    clearStorage: () => {
      d == null || d.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => C(),
    hasHydrated: () => s,
    onHydrate: (b) => (l.add(b), () => {
      l.delete(b);
    }),
    onFinishHydration: (b) => (c.add(b), () => {
      c.delete(b);
    })
  }, a.skipHydration || C(), f || h;
}, Tc = ed;
function Rc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function td(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function o() {
      return this instanceof o ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(o) {
    var n = Object.getOwnPropertyDescriptor(e, o);
    Object.defineProperty(r, o, n.get ? n : {
      enumerable: !0,
      get: function() {
        return e[o];
      }
    });
  }), r;
}
var ai, x1;
function Mc() {
  if (x1) return ai;
  x1 = 1;
  var e = Object.prototype.toString;
  return ai = function(r) {
    var o = e.call(r), n = o === "[object Arguments]";
    return n || (n = o !== "[object Array]" && r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && e.call(r.callee) === "[object Function]"), n;
  }, ai;
}
var si, k1;
function rd() {
  if (k1) return si;
  k1 = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, o = Mc(), n = Object.prototype.propertyIsEnumerable, a = !n.call({ toString: null }, "toString"), s = n.call(function() {
    }, "prototype"), l = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], c = function(h) {
      var f = h.constructor;
      return f && f.prototype === h;
    }, d = {
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
      for (var h in window)
        try {
          if (!d["$" + h] && t.call(window, h) && window[h] !== null && typeof window[h] == "object")
            try {
              c(window[h]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), u = function(h) {
      if (typeof window > "u" || !p)
        return c(h);
      try {
        return c(h);
      } catch {
        return !1;
      }
    };
    e = function(f) {
      var C = f !== null && typeof f == "object", b = r.call(f) === "[object Function]", A = o(f), L = C && r.call(f) === "[object String]", _ = [];
      if (!C && !b && !A)
        throw new TypeError("Object.keys called on a non-object");
      var w = s && b;
      if (L && f.length > 0 && !t.call(f, 0))
        for (var x = 0; x < f.length; ++x)
          _.push(String(x));
      if (A && f.length > 0)
        for (var g = 0; g < f.length; ++g)
          _.push(String(g));
      else
        for (var m in f)
          !(w && m === "prototype") && t.call(f, m) && _.push(String(m));
      if (a)
        for (var y = u(f), k = 0; k < l.length; ++k)
          !(y && l[k] === "constructor") && t.call(f, l[k]) && _.push(l[k]);
      return _;
    };
  }
  return si = e, si;
}
var li, A1;
function od() {
  if (A1) return li;
  A1 = 1;
  var e = Array.prototype.slice, t = Mc(), r = Object.keys, o = r ? function(s) {
    return r(s);
  } : rd(), n = Object.keys;
  return o.shim = function() {
    if (Object.keys) {
      var s = function() {
        var l = Object.keys(arguments);
        return l && l.length === arguments.length;
      }(1, 2);
      s || (Object.keys = function(c) {
        return t(c) ? n(e.call(c)) : n(c);
      });
    } else
      Object.keys = o;
    return Object.keys || o;
  }, li = o, li;
}
var ci, E1;
function Vo() {
  if (E1) return ci;
  E1 = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return ci = e, ci;
}
var di, S1;
function Ic() {
  return S1 || (S1 = 1, di = SyntaxError), di;
}
var ui, L1;
function co() {
  return L1 || (L1 = 1, ui = TypeError), ui;
}
var pi, N1;
function id() {
  return N1 || (N1 = 1, pi = Object.getOwnPropertyDescriptor), pi;
}
var hi, T1;
function $o() {
  if (T1) return hi;
  T1 = 1;
  var e = /* @__PURE__ */ id();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return hi = e, hi;
}
var gi, R1;
function Oc() {
  if (R1) return gi;
  R1 = 1;
  var e = /* @__PURE__ */ Vo(), t = /* @__PURE__ */ Ic(), r = /* @__PURE__ */ co(), o = /* @__PURE__ */ $o();
  return gi = function(a, s, l) {
    if (!a || typeof a != "object" && typeof a != "function")
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
    var c = arguments.length > 3 ? arguments[3] : null, d = arguments.length > 4 ? arguments[4] : null, p = arguments.length > 5 ? arguments[5] : null, u = arguments.length > 6 ? arguments[6] : !1, h = !!o && o(a, s);
    if (e)
      e(a, s, {
        configurable: p === null && h ? h.configurable : !p,
        enumerable: c === null && h ? h.enumerable : !c,
        value: l,
        writable: d === null && h ? h.writable : !d
      });
    else if (u || !c && !d && !p)
      a[s] = l;
    else
      throw new t("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, gi;
}
var fi, M1;
function Pc() {
  if (M1) return fi;
  M1 = 1;
  var e = /* @__PURE__ */ Vo(), t = function() {
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
  }, fi = t, fi;
}
var mi, I1;
function Dc() {
  if (I1) return mi;
  I1 = 1;
  var e = od(), t = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", r = Object.prototype.toString, o = Array.prototype.concat, n = /* @__PURE__ */ Oc(), a = function(d) {
    return typeof d == "function" && r.call(d) === "[object Function]";
  }, s = /* @__PURE__ */ Pc()(), l = function(d, p, u, h) {
    if (p in d) {
      if (h === !0) {
        if (d[p] === u)
          return;
      } else if (!a(h) || !h())
        return;
    }
    s ? n(d, p, u, !0) : n(d, p, u);
  }, c = function(d, p) {
    var u = arguments.length > 2 ? arguments[2] : {}, h = e(p);
    t && (h = o.call(h, Object.getOwnPropertySymbols(p)));
    for (var f = 0; f < h.length; f += 1)
      l(d, h[f], p[h[f]], u[h[f]]);
  };
  return c.supportsDescriptors = !!s, mi = c, mi;
}
var vi = { exports: {} }, bi, O1;
function Hc() {
  return O1 || (O1 = 1, bi = Object), bi;
}
var Ci, P1;
function nd() {
  return P1 || (P1 = 1, Ci = Error), Ci;
}
var wi, D1;
function ad() {
  return D1 || (D1 = 1, wi = EvalError), wi;
}
var yi, H1;
function sd() {
  return H1 || (H1 = 1, yi = RangeError), yi;
}
var _i, z1;
function ld() {
  return z1 || (z1 = 1, _i = ReferenceError), _i;
}
var xi, B1;
function cd() {
  return B1 || (B1 = 1, xi = URIError), xi;
}
var ki, F1;
function dd() {
  return F1 || (F1 = 1, ki = Math.abs), ki;
}
var Ai, V1;
function ud() {
  return V1 || (V1 = 1, Ai = Math.floor), Ai;
}
var Ei, $1;
function pd() {
  return $1 || ($1 = 1, Ei = Math.max), Ei;
}
var Si, U1;
function hd() {
  return U1 || (U1 = 1, Si = Math.min), Si;
}
var Li, j1;
function gd() {
  return j1 || (j1 = 1, Li = Math.pow), Li;
}
var Ni, G1;
function fd() {
  return G1 || (G1 = 1, Ni = Math.round), Ni;
}
var Ti, Z1;
function md() {
  return Z1 || (Z1 = 1, Ti = Number.isNaN || function(t) {
    return t !== t;
  }), Ti;
}
var Ri, q1;
function vd() {
  if (q1) return Ri;
  q1 = 1;
  var e = /* @__PURE__ */ md();
  return Ri = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, Ri;
}
var Mi, W1;
function bd() {
  return W1 || (W1 = 1, Mi = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = Symbol("test"), o = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(o) !== "[object Symbol]")
      return !1;
    var n = 42;
    t[r] = n;
    for (var a in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var s = Object.getOwnPropertySymbols(t);
    if (s.length !== 1 || s[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var l = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (l.value !== n || l.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Mi;
}
var Ii, X1;
function Cd() {
  if (X1) return Ii;
  X1 = 1;
  var e = typeof Symbol < "u" && Symbol, t = bd();
  return Ii = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Ii;
}
var Oi, Y1;
function zc() {
  return Y1 || (Y1 = 1, Oi = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Oi;
}
var Pi, K1;
function Bc() {
  if (K1) return Pi;
  K1 = 1;
  var e = /* @__PURE__ */ Hc();
  return Pi = e.getPrototypeOf || null, Pi;
}
var Di, J1;
function wd() {
  if (J1) return Di;
  J1 = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, o = "[object Function]", n = function(c, d) {
    for (var p = [], u = 0; u < c.length; u += 1)
      p[u] = c[u];
    for (var h = 0; h < d.length; h += 1)
      p[h + c.length] = d[h];
    return p;
  }, a = function(c, d) {
    for (var p = [], u = d, h = 0; u < c.length; u += 1, h += 1)
      p[h] = c[u];
    return p;
  }, s = function(l, c) {
    for (var d = "", p = 0; p < l.length; p += 1)
      d += l[p], p + 1 < l.length && (d += c);
    return d;
  };
  return Di = function(c) {
    var d = this;
    if (typeof d != "function" || t.apply(d) !== o)
      throw new TypeError(e + d);
    for (var p = a(arguments, 1), u, h = function() {
      if (this instanceof u) {
        var L = d.apply(
          this,
          n(p, arguments)
        );
        return Object(L) === L ? L : this;
      }
      return d.apply(
        c,
        n(p, arguments)
      );
    }, f = r(0, d.length - p.length), C = [], b = 0; b < f; b++)
      C[b] = "$" + b;
    if (u = Function("binder", "return function (" + s(C, ",") + "){ return binder.apply(this,arguments); }")(h), d.prototype) {
      var A = function() {
      };
      A.prototype = d.prototype, u.prototype = new A(), A.prototype = null;
    }
    return u;
  }, Di;
}
var Hi, Q1;
function uo() {
  if (Q1) return Hi;
  Q1 = 1;
  var e = wd();
  return Hi = Function.prototype.bind || e, Hi;
}
var zi, es;
function xa() {
  return es || (es = 1, zi = Function.prototype.call), zi;
}
var Bi, ts;
function ka() {
  return ts || (ts = 1, Bi = Function.prototype.apply), Bi;
}
var Fi, rs;
function yd() {
  return rs || (rs = 1, Fi = typeof Reflect < "u" && Reflect && Reflect.apply), Fi;
}
var Vi, os;
function Fc() {
  if (os) return Vi;
  os = 1;
  var e = uo(), t = ka(), r = xa(), o = yd();
  return Vi = o || e.call(r, t), Vi;
}
var $i, is;
function Aa() {
  if (is) return $i;
  is = 1;
  var e = uo(), t = /* @__PURE__ */ co(), r = xa(), o = Fc();
  return $i = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new t("a function is required");
    return o(e, r, a);
  }, $i;
}
var Ui, ns;
function _d() {
  if (ns) return Ui;
  ns = 1;
  var e = Aa(), t = /* @__PURE__ */ $o(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (s) {
    if (!s || typeof s != "object" || !("code" in s) || s.code !== "ERR_PROTO_ACCESS")
      throw s;
  }
  var o = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), n = Object, a = n.getPrototypeOf;
  return Ui = o && typeof o.get == "function" ? e([o.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(l) {
      return a(l == null ? l : n(l));
    }
  ) : !1, Ui;
}
var ji, as;
function xd() {
  if (as) return ji;
  as = 1;
  var e = zc(), t = Bc(), r = /* @__PURE__ */ _d();
  return ji = e ? function(n) {
    return e(n);
  } : t ? function(n) {
    if (!n || typeof n != "object" && typeof n != "function")
      throw new TypeError("getProto: not an object");
    return t(n);
  } : r ? function(n) {
    return r(n);
  } : null, ji;
}
var Gi, ss;
function Vc() {
  if (ss) return Gi;
  ss = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = uo();
  return Gi = r.call(e, t), Gi;
}
var Zi, ls;
function $c() {
  if (ls) return Zi;
  ls = 1;
  var e, t = /* @__PURE__ */ Hc(), r = /* @__PURE__ */ nd(), o = /* @__PURE__ */ ad(), n = /* @__PURE__ */ sd(), a = /* @__PURE__ */ ld(), s = /* @__PURE__ */ Ic(), l = /* @__PURE__ */ co(), c = /* @__PURE__ */ cd(), d = /* @__PURE__ */ dd(), p = /* @__PURE__ */ ud(), u = /* @__PURE__ */ pd(), h = /* @__PURE__ */ hd(), f = /* @__PURE__ */ gd(), C = /* @__PURE__ */ fd(), b = /* @__PURE__ */ vd(), A = Function, L = function(_e) {
    try {
      return A('"use strict"; return (' + _e + ").constructor;")();
    } catch {
    }
  }, _ = /* @__PURE__ */ $o(), w = /* @__PURE__ */ Vo(), x = function() {
    throw new l();
  }, g = _ ? function() {
    try {
      return arguments.callee, x;
    } catch {
      try {
        return _(arguments, "callee").get;
      } catch {
        return x;
      }
    }
  }() : x, m = Cd()(), y = xd(), k = Bc(), O = zc(), D = ka(), Z = xa(), z = {}, j = typeof Uint8Array > "u" || !y ? e : y(Uint8Array), F = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": m && y ? y([][Symbol.iterator]()) : e,
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
    "%EvalError%": o,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": A,
    "%GeneratorFunction%": z,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": m && y ? y(y([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !m || !y ? e : y((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": _,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": n,
    "%ReferenceError%": a,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !m || !y ? e : y((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": m && y ? y(""[Symbol.iterator]()) : e,
    "%Symbol%": m ? Symbol : e,
    "%SyntaxError%": s,
    "%ThrowTypeError%": g,
    "%TypedArray%": j,
    "%TypeError%": l,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": c,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": Z,
    "%Function.prototype.apply%": D,
    "%Object.defineProperty%": w,
    "%Object.getPrototypeOf%": k,
    "%Math.abs%": d,
    "%Math.floor%": p,
    "%Math.max%": u,
    "%Math.min%": h,
    "%Math.pow%": f,
    "%Math.round%": C,
    "%Math.sign%": b,
    "%Reflect.getPrototypeOf%": O
  };
  if (y)
    try {
      null.error;
    } catch (_e) {
      var ue = y(y(_e));
      F["%Error.prototype%"] = ue;
    }
  var ke = function _e(oe) {
    var he;
    if (oe === "%AsyncFunction%")
      he = L("async function () {}");
    else if (oe === "%GeneratorFunction%")
      he = L("function* () {}");
    else if (oe === "%AsyncGeneratorFunction%")
      he = L("async function* () {}");
    else if (oe === "%AsyncGenerator%") {
      var te = _e("%AsyncGeneratorFunction%");
      te && (he = te.prototype);
    } else if (oe === "%AsyncIteratorPrototype%") {
      var ve = _e("%AsyncGenerator%");
      ve && y && (he = y(ve.prototype));
    }
    return F[oe] = he, he;
  }, Me = {
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
  }, G = uo(), He = /* @__PURE__ */ Vc(), lt = G.call(Z, Array.prototype.concat), ee = G.call(D, Array.prototype.splice), ot = G.call(Z, String.prototype.replace), X = G.call(Z, String.prototype.slice), we = G.call(Z, RegExp.prototype.exec), ie = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ae = /\\(\\)?/g, ne = function(oe) {
    var he = X(oe, 0, 1), te = X(oe, -1);
    if (he === "%" && te !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (te === "%" && he !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var ve = [];
    return ot(oe, ie, function(Ae, We, Ee, Se) {
      ve[ve.length] = Ee ? ot(Se, ae, "$1") : We || Ae;
    }), ve;
  }, ct = function(oe, he) {
    var te = oe, ve;
    if (He(Me, te) && (ve = Me[te], te = "%" + ve[0] + "%"), He(F, te)) {
      var Ae = F[te];
      if (Ae === z && (Ae = ke(te)), typeof Ae > "u" && !he)
        throw new l("intrinsic " + oe + " exists, but is not available. Please file an issue!");
      return {
        alias: ve,
        name: te,
        value: Ae
      };
    }
    throw new s("intrinsic " + oe + " does not exist!");
  };
  return Zi = function(oe, he) {
    if (typeof oe != "string" || oe.length === 0)
      throw new l("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof he != "boolean")
      throw new l('"allowMissing" argument must be a boolean');
    if (we(/^%?[^%]*%?$/, oe) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var te = ne(oe), ve = te.length > 0 ? te[0] : "", Ae = ct("%" + ve + "%", he), We = Ae.name, Ee = Ae.value, Se = !1, Oe = Ae.alias;
    Oe && (ve = Oe[0], ee(te, lt([0, 1], Oe)));
    for (var Xe = 1, Ze = !0; Xe < te.length; Xe += 1) {
      var Le = te[Xe], dt = X(Le, 0, 1), Ye = X(Le, -1);
      if ((dt === '"' || dt === "'" || dt === "`" || Ye === '"' || Ye === "'" || Ye === "`") && dt !== Ye)
        throw new s("property names with quotes must have matching quotes");
      if ((Le === "constructor" || !Ze) && (Se = !0), ve += "." + Le, We = "%" + ve + "%", He(F, We))
        Ee = F[We];
      else if (Ee != null) {
        if (!(Le in Ee)) {
          if (!he)
            throw new l("base intrinsic for " + oe + " exists, but the property is not available.");
          return;
        }
        if (_ && Xe + 1 >= te.length) {
          var ut = _(Ee, Le);
          Ze = !!ut, Ze && "get" in ut && !("originalValue" in ut.get) ? Ee = ut.get : Ee = Ee[Le];
        } else
          Ze = He(Ee, Le), Ee = Ee[Le];
        Ze && !Se && (F[We] = Ee);
      }
    }
    return Ee;
  }, Zi;
}
var qi, cs;
function kd() {
  if (cs) return qi;
  cs = 1;
  var e = /* @__PURE__ */ $c(), t = /* @__PURE__ */ Oc(), r = /* @__PURE__ */ Pc()(), o = /* @__PURE__ */ $o(), n = /* @__PURE__ */ co(), a = e("%Math.floor%");
  return qi = function(l, c) {
    if (typeof l != "function")
      throw new n("`fn` is not a function");
    if (typeof c != "number" || c < 0 || c > 4294967295 || a(c) !== c)
      throw new n("`length` must be a positive 32-bit integer");
    var d = arguments.length > 2 && !!arguments[2], p = !0, u = !0;
    if ("length" in l && o) {
      var h = o(l, "length");
      h && !h.configurable && (p = !1), h && !h.writable && (u = !1);
    }
    return (p || u || !d) && (r ? t(
      /** @type {Parameters<define>[0]} */
      l,
      "length",
      c,
      !0,
      !0
    ) : t(
      /** @type {Parameters<define>[0]} */
      l,
      "length",
      c
    )), l;
  }, qi;
}
var Wi, ds;
function Ad() {
  if (ds) return Wi;
  ds = 1;
  var e = uo(), t = ka(), r = Fc();
  return Wi = function() {
    return r(e, t, arguments);
  }, Wi;
}
var us;
function Ed() {
  return us || (us = 1, function(e) {
    var t = /* @__PURE__ */ kd(), r = /* @__PURE__ */ Vo(), o = Aa(), n = Ad();
    e.exports = function(s) {
      var l = o(arguments), c = s.length - (arguments.length - 1);
      return t(
        l,
        1 + (c > 0 ? c : 0),
        !0
      );
    }, r ? r(e.exports, "apply", { value: n }) : e.exports.apply = n;
  }(vi)), vi.exports;
}
var Xi, ps;
function Sd() {
  if (ps) return Xi;
  ps = 1;
  var e = /* @__PURE__ */ co();
  return Xi = function(r) {
    if (r == null)
      throw new e(arguments.length > 0 && arguments[1] || "Cannot call method on " + r);
    return r;
  }, Xi;
}
var Yi, hs;
function Ld() {
  if (hs) return Yi;
  hs = 1;
  var e = /* @__PURE__ */ $c(), t = Aa(), r = t([e("%String.prototype.indexOf%")]);
  return Yi = function(n, a) {
    var s = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(n, !!a)
    );
    return typeof s == "function" && r(n, ".prototype.") > -1 ? t(
      /** @type {const} */
      [s]
    ) : s;
  }, Yi;
}
var Ki, gs;
function Uc() {
  if (gs) return Ki;
  gs = 1;
  var e = /* @__PURE__ */ Sd(), t = /* @__PURE__ */ Ld(), r = t("Object.prototype.propertyIsEnumerable"), o = t("Array.prototype.push");
  return Ki = function(a) {
    var s = e(a), l = [];
    for (var c in s)
      r(s, c) && o(l, [c, s[c]]);
    return l;
  }, Ki;
}
var Ji, fs;
function jc() {
  if (fs) return Ji;
  fs = 1;
  var e = Uc();
  return Ji = function() {
    return typeof Object.entries == "function" ? Object.entries : e;
  }, Ji;
}
var Qi, ms;
function Nd() {
  if (ms) return Qi;
  ms = 1;
  var e = jc(), t = Dc();
  return Qi = function() {
    var o = e();
    return t(Object, { entries: o }, {
      entries: function() {
        return Object.entries !== o;
      }
    }), o;
  }, Qi;
}
var en, vs;
function Td() {
  if (vs) return en;
  vs = 1;
  var e = Dc(), t = Ed(), r = Uc(), o = jc(), n = Nd(), a = t(o(), Object);
  return e(a, {
    getPolyfill: o,
    implementation: r,
    shim: n
  }), en = a, en;
}
var tn, bs;
function Rd() {
  if (bs) return tn;
  bs = 1;
  var e = {}, t = e.NODE_ENV !== "production", r = function() {
  };
  if (t) {
    var o = function(a, s) {
      var l = arguments.length;
      s = new Array(l > 1 ? l - 1 : 0);
      for (var c = 1; c < l; c++)
        s[c - 1] = arguments[c];
      var d = 0, p = "Warning: " + a.replace(/%s/g, function() {
        return s[d++];
      });
      typeof console < "u" && console.error(p);
      try {
        throw new Error(p);
      } catch {
      }
    };
    r = function(n, a, s) {
      var l = arguments.length;
      s = new Array(l > 2 ? l - 2 : 0);
      for (var c = 2; c < l; c++)
        s[c - 2] = arguments[c];
      if (a === void 0)
        throw new Error(
          "`warning(condition, format, ...args)` requires a warning message argument"
        );
      n || o.apply(null, [a].concat(s));
    };
  }
  return tn = r, tn;
}
var rn, Cs;
function Md() {
  if (Cs) return rn;
  Cs = 1;
  var e = Td(), t = Rd(), r = /* @__PURE__ */ Vc(), o = function(x) {
    t(!1, x);
  }, n = String.prototype.replace, a = String.prototype.split, s = "||||", l = function(w) {
    var x = w % 100, g = x % 10;
    return x !== 11 && g === 1 ? 0 : 2 <= g && g <= 4 && !(x >= 12 && x <= 14) ? 1 : 2;
  }, c = {
    // Mapping from pluralization group plural logic.
    pluralTypes: {
      arabic: function(w) {
        if (w < 3)
          return w;
        var x = w % 100;
        return x >= 3 && x <= 10 ? 3 : x >= 11 ? 4 : 5;
      },
      bosnian_serbian: l,
      chinese: function() {
        return 0;
      },
      croatian: l,
      french: function(w) {
        return w >= 2 ? 1 : 0;
      },
      german: function(w) {
        return w !== 1 ? 1 : 0;
      },
      russian: l,
      lithuanian: function(w) {
        return w % 10 === 1 && w % 100 !== 11 ? 0 : w % 10 >= 2 && w % 10 <= 9 && (w % 100 < 11 || w % 100 > 19) ? 1 : 2;
      },
      czech: function(w) {
        return w === 1 ? 0 : w >= 2 && w <= 4 ? 1 : 2;
      },
      polish: function(w) {
        if (w === 1)
          return 0;
        var x = w % 10;
        return 2 <= x && x <= 4 && (w % 100 < 10 || w % 100 >= 20) ? 1 : 2;
      },
      icelandic: function(w) {
        return w % 10 !== 1 || w % 100 === 11 ? 1 : 0;
      },
      slovenian: function(w) {
        var x = w % 100;
        return x === 1 ? 0 : x === 2 ? 1 : x === 3 || x === 4 ? 2 : 3;
      },
      romanian: function(w) {
        if (w === 1)
          return 0;
        var x = w % 100;
        return w === 0 || x >= 2 && x <= 19 ? 1 : 2;
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
  function d(w) {
    for (var x = {}, g = e(w), m = 0; m < g.length; m += 1)
      for (var y = g[m][0], k = g[m][1], O = 0; O < k.length; O += 1)
        x[k[O]] = y;
    return x;
  }
  function p(w, x) {
    var g = d(w.pluralTypeToLanguages);
    return g[x] || g[a.call(x, /-/, 1)[0]] || g.en;
  }
  function u(w, x, g) {
    return w.pluralTypes[x](g);
  }
  function h() {
    var w = {};
    return function(x, g) {
      var m = w[g];
      return m && !x.pluralTypes[m] && (m = null, w[g] = m), m || (m = p(x, g), m && (w[g] = m)), m;
    };
  }
  function f(w) {
    return w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function C(w) {
    var x = w && w.prefix || "%{", g = w && w.suffix || "}";
    if (x === s || g === s)
      throw new RangeError('"' + s + '" token is reserved for pluralization');
    return new RegExp(f(x) + "(.*?)" + f(g), "g");
  }
  var b = h(), A = /%\{(.*?)\}/g;
  function L(w, x, g, m, y, k) {
    if (typeof w != "string")
      throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
    if (x == null)
      return w;
    var O = w, D = m || A, Z = k || n, z = typeof x == "number" ? { smart_count: x } : x;
    if (z.smart_count != null && w) {
      var j = y || c, F = a.call(w, s), ue = g || "en", ke = b(j, ue), Me = u(
        j,
        ke,
        z.smart_count
      );
      O = n.call(F[Me] || F[0], /^[^\S]*|[^\S]*$/g, "");
    }
    return O = Z.call(O, D, function(G, He) {
      return !r(z, He) || z[He] == null ? G : z[He];
    }), O;
  }
  function _(w) {
    var x = w || {};
    this.phrases = {}, this.extend(x.phrases || {}), this.currentLocale = x.locale || "en";
    var g = x.allowMissing ? L : null;
    this.onMissingKey = typeof x.onMissingKey == "function" ? x.onMissingKey : g, this.warn = x.warn || o, this.replaceImplementation = x.replace || n, this.tokenRegex = C(x.interpolation), this.pluralRules = x.pluralRules || c;
  }
  return _.prototype.locale = function(w) {
    return w && (this.currentLocale = w), this.currentLocale;
  }, _.prototype.extend = function(w, x) {
    for (var g = e(w || {}), m = 0; m < g.length; m += 1) {
      var y = g[m][0], k = g[m][1], O = x ? x + "." + y : y;
      typeof k == "object" ? this.extend(k, O) : this.phrases[O] = k;
    }
  }, _.prototype.unset = function(w, x) {
    if (typeof w == "string")
      delete this.phrases[w];
    else
      for (var g = e(w || {}), m = 0; m < g.length; m += 1) {
        var y = g[m][0], k = g[m][1], O = x ? x + "." + y : y;
        typeof k == "object" ? this.unset(k, O) : delete this.phrases[O];
      }
  }, _.prototype.clear = function() {
    this.phrases = {};
  }, _.prototype.replace = function(w) {
    this.clear(), this.extend(w);
  }, _.prototype.t = function(w, x) {
    var g, m, y = x ?? {};
    if (typeof this.phrases[w] == "string")
      g = this.phrases[w];
    else if (typeof y._ == "string")
      g = y._;
    else if (this.onMissingKey) {
      var k = this.onMissingKey;
      m = k(
        w,
        y,
        this.currentLocale,
        this.tokenRegex,
        this.pluralRules,
        this.replaceImplementation
      );
    } else
      this.warn('Missing translation for key: "' + w + '"'), m = w;
    return typeof g == "string" && (m = L(
      g,
      y,
      this.currentLocale,
      this.tokenRegex,
      this.pluralRules,
      this.replaceImplementation
    )), m;
  }, _.prototype.has = function(w) {
    return r(this.phrases, w);
  }, _.transformPhrase = function(x, g, m) {
    return L(x, g, m);
  }, rn = _, rn;
}
var Id = Md();
const ws = /* @__PURE__ */ Rc(Id), Od = "Funcionalidades", Pd = "Beta", Dd = "Esta opção pode apresentar problemas", Hd = "Tema da página", zd = "Clique Fácil", Bd = "Navegação por teclas ativada", Fd = "Comandos por voz ativados", Vd = "Apenas Português", $d = "Selecionar cor", Ud = "Expandir", jd = "Colapsar", Gd = "Lupa de Conteúdo", Zd = "Filtro Noturno", qd = "Diminuir brilho", Wd = "Leitor de Texto ativado", Xd = "Filtro de daltonismo", Yd = "Desativar Sons", Kd = "Desativar Autoplay", Jd = "Fonte para Dislexia", Qd = "Leitor de Texto", e0 = "Descrever Imagem", t0 = "Contraste", r0 = "Aumentar Fonte", o0 = "Espaço entre letras", i0 = "Espaço entre linhas", n0 = "Destacar links", a0 = "Destacar títulos", s0 = "Modo Leitor", l0 = "Pausar animações", c0 = "Navegar por teclas", d0 = "Comandos por voz", u0 = "Cores da página", p0 = "Ocultar imagens", h0 = "Guia de leitura", g0 = "Máscara de leitura", f0 = "Cursor grande", m0 = "Cor do texto", v0 = "Saturação", b0 = "Estrutura da Página", C0 = "Dicionário Simplificado", w0 = "Personalizada", y0 = "Médio", _0 = "Grande", x0 = "Muito grande", k0 = "Desativado", A0 = "Em breve", E0 = "Ativado", S0 = "Tela inteira", L0 = "Normal", N0 = "Claro", T0 = "Escuro", R0 = "Invertido", M0 = "Configurações", I0 = "Resetar", O0 = "Redefinir", P0 = "Alterar idioma", D0 = "Sem suporte", H0 = "O sintetizador de voz não é suportado pelo seu navegador", z0 = "O reconhecimento de voz não é suportado pelo seu navegador", B0 = "Interagir", F0 = "Acessar link", V0 = "Mover para cima", $0 = "Mover para baixo", U0 = "Azul", j0 = "Amarelo", G0 = { content_zoom: "Ativar a lupa de conteúdo", describe_image: "Mostrar a descrição da imagem ao passar o mouse", page_theme: "Alterar tema da página", contrast: "Alterar o contraste das cores", easy_click: "Ativar clique fácil", keyboard_navigation: "Ativar navegação por teclas", voice_commands: "Ativar comandos por voz", page_structure: "Visualizar estrutura da página", page_colors: "Alterar as cores da páginas", disable_autoplay: "Impedir início automático de mídias", adjust_saturation: "Ajustar saturação", open_settings: "Abrir configurações", large_window: "Janela grande", small_window: "Janela pequena", night_filter: "Ativar filtro noturno", reduce_brightness: "Diminuir o brilho da tela", color_blind_filter: "Ativar filtro para daltonismo", disable_sound: "Desativar o som de vídeos e audios", dyslexic_font: "Ativar font para dyslexia", "dictionary.search": "Pesquisar no dicionário", definition_to_libras: "Ler definição em Libras", read_definition: "Ler definição", dictionary: "Ativar o dicionário", text_reader: "Ouvir o texto", font_increase: "Aumentar o tamanho da fonte", letter_spacing: "Modificar espaço entre as letras", line_spacing: "Modificar espaço entre linhas", highlight_links: "Destacar links", highlight_titles: "Destacar títulos", reset: "Resetar definições", close: "Fechar", change_language: "Alterar o idioma da ferramenta", reader_mode: "Ativar modo leitor", toggle_theme: "Alterar o tema", pause_animations: "Pausar animações", hide_images: "Esconder todas as imagens", reading_guide: "Ativar o Guia de leitura", reading_mask: "Ativar a Máscara de leitura", move_reading_mask: "Mover a Máscara de leitura", move_reading_guide: "Mover o Guia de leitura", large_cursor: "Ativar o cursor grande", text_color: "Alterar a cor do texto", open_navigation_profiles: "Abrir ou fechar os perfis de navegação", blind: "Definições para pessoas cegas", low_vision: "Definições para pessoas com baixa visão" }, Z0 = { reset: "Resetar definições", close: "Fechar", settings: "Configurações", toggle_theme: "Alterar o tema" }, q0 = { text_and_typography: "Texto e Tipografia", reading_and_comprehension: "Leitura e Compreensão", focus_and_visibility: "Foco e Acessibilidade Visual", colors_filters_and_contrast: "Cores, Filtros e Contraste", distraction_reduction: "Redução de Distrações", navigation_profiles: "Perfis de Navegação", navigation_and_motor_accessibility: "Navegação e Acessibilidade Motora", profiles: "Perfis" }, W0 = "Definição em Libras", X0 = "Ler definição", Y0 = "Acessibilidade em Libras", K0 = "Contato e Suporte", J0 = "Fale conosco ou relate algum problema", Q0 = "Sobre o projeto", e7 = "Saiba mais sobre o projeto e quem o desenvolve", t7 = "Novidades da versão", r7 = "Veja o que há de novo", o7 = {
  functionalities: Od,
  beta: Pd,
  new: "Novo",
  beta_alert: Dd,
  page_theme: Hd,
  easy_click: zd,
  keyboard_navigation_active: Bd,
  voice_commands_active: Fd,
  only_pt: Vd,
  color_picker: $d,
  expand: Ud,
  collapse: jd,
  content_zoom: Gd,
  night_filter: Zd,
  reduce_brightness: qd,
  text_reader_is_actived: Wd,
  color_blind_filter: Xd,
  disable_sounds: Yd,
  disable_autoplay: Kd,
  dyslexic_font: Jd,
  text_reader: Qd,
  describe_image: e0,
  contrast: t0,
  font_increase: r0,
  letter_spacing: o0,
  line_spacing: i0,
  highlight_links: n0,
  highlight_titles: a0,
  reader_mode: s0,
  pause_animations: l0,
  keyboard_navigation: c0,
  voice_commands: d0,
  page_colors: u0,
  hide_images: p0,
  reading_guide: h0,
  reading_mask: g0,
  large_cursor: f0,
  text_color: m0,
  saturation: v0,
  page_structure: b0,
  dictionary: C0,
  custom: w0,
  default: "Padrão",
  medium: y0,
  large: _0,
  very_large: x0,
  deactivated: k0,
  upcoming: A0,
  actived: E0,
  full: S0,
  normal: L0,
  light: N0,
  dark: T0,
  invert: R0,
  settings: M0,
  reset: I0,
  redefine: O0,
  change_language: P0,
  no_support: D0,
  speech_is_not_supported: H0,
  speech_recognition_is_not_supported: z0,
  interact: B0,
  access_link: F0,
  move_top: V0,
  move_bottom: $0,
  blue: U0,
  yellow: j0,
  al: G0,
  titles: Z0,
  sections: q0,
  definition_to_libras: W0,
  read_definition: X0,
  "dictionary.select_word": "Selecione uma palavra para ver o significado ou faça uma pesquisa customizada.",
  "dictionary.no_result": "Nenhum resultado encontrado",
  "dictionary.close": "Fechar dicionário",
  "status.loading": "Carregando...",
  "status.searching": "Pesquisando...",
  "saturation.low": "Baixa",
  "saturation.high": "Alta",
  "saturation.grayscale": "Escala de cinza",
  "contrast.low": "Baixo",
  "contrast.high": "Alto",
  "contrast.invert": "Invertido",
  libras_accessibility: Y0,
  contact_and_support: K0,
  contact_and_support_description: J0,
  about_the_project: Q0,
  about_the_project_description: e7,
  version_updates: t7,
  version_updates_description: r7,
  "structure.titles": "Títulos",
  "structure.sections": "Seções",
  "structure.links": "Links",
  "structure.no_results": "Sem resultados",
  "profiles.blind": "Cego",
  "profiles.low_vision": "Baixa visão",
  "profiles.cognitive": "Cognitivo",
  "profiles.dyslexic": "Dislexia",
  "profiles.color_blind": "Daltônico",
  "profiles.mobility": "Mobilidade",
  "profiles.fewer_distractions": "Menos distrações",
  "about.implementers": "Realizadores",
  "about.social_media": "Redes Sociais",
  "about.project_description": "O VLibras é um projeto de acessibilidade digital que visa garantir o acesso à informação para pessoas surdas por meio da tradução de conteúdos digitais para Libras. Como parte dessa iniciativa, o VLibras Widget+ expande esse propósito ao integrar outros recursos de acessibilidade, como ajustes visuais e melhorias de usabilidade para tornar a navegação web ainda mais inclusiva.",
  "about.project_description_to_libras": "Ver descrição em Libras",
  "about.project_description_to_speak": "Ler descrição",
  "support_dialog.contact_form_errors.title": "O título deve ter pelo menos 5 caracteres.",
  "support_dialog.contact_form_errors.message": "A mensagem deve ter pelo menos 10 caracteres.",
  "support_dialog.contact_form_success": "Mensagem enviada com sucesso!",
  "support_dialog.contact_form_submit": "Enviar mensagem",
  "support_dialog.contact_form_submiting": "Enviando...",
  "support_dialog.contact_form_fields.title": "Título",
  "support_dialog.contact_form_fields.message": "Mensagem",
  "support_dialog.tabs.contact": "Contato",
  "support_dialog.tabs.bug_report": "Relatar problema",
  "support_dialog.bug_report_form_errors.bug_description": "A descrição deve ter pelo menos 10 caracteres.",
  "support_dialog.bug_report_form_success": "Mensagem enviada! Agradecemos o seu feedback.",
  "support_dialog.bug_report_form_submit": "Enviar",
  "support_dialog.bug_report_form_submiting": "Enviando...",
  "support_dialog.bug_report_form_fields.bug_description": "Descrição do problema",
  "language.portuguese": "Português",
  "language.english": "Inglês",
  "language.spanish": "Espanhol",
  "settings.dark_mode": "Modo escuro",
  "settings.dark_mode_description": "Altera a paleta de cores da interface para tons escuros, proporcionando uma experiência visual mais confortável em ambientes com pouca luz.",
  "settings.change_language": "Alterar idioma",
  "settings.change_language_description": "Altere o idioma da aplicação. Disponível em português, inglês e espanhol.",
  "settings.position": "Posição do Widget+",
  "settings.position_description": "Defina a posição do Widget+ na tela. Você pode escolher entre esquerda ou direita.",
  "settings.position_left": "Esquerda",
  "settings.position_right": "Direita"
}, i7 = "Functionalities", n7 = "Beta", a7 = "This option may present issues", s7 = "Left", l7 = "Right", c7 = "Send", d7 = "Page Theme", u7 = "Easy Click", p7 = "Keyboard navigation activated", h7 = "Voice Commands Activated", g7 = "Only Portuguese", f7 = "Color Picker", m7 = "Expand", v7 = "Collapse", b7 = "Content Magnifier", C7 = "Night Filter", w7 = "Reduce Brightness", y7 = "Text Reader is actived", _7 = "Color Blind Filter", x7 = "Disable Sounds", k7 = "Disable Autoplay", A7 = "Dyslexic Font", E7 = "Text Reader", S7 = "Describe Image", L7 = "Contrast", N7 = "Increase Font", T7 = "Letter Spacing", R7 = "Line Spacing", M7 = "Highlight Links", I7 = "Highlight Titles", O7 = "Reader Mode", P7 = "Page Colors", D7 = "Pause Animations", H7 = "Keyboard Navigation", z7 = "Voice Commands", B7 = "Hide images", F7 = "Reading Guide", V7 = "Reading Mask", $7 = "Large Cursor", U7 = "Text Color", j7 = "Saturation", G7 = "Page Structure", Z7 = "Simplified Dictionary", q7 = "Custom", W7 = "Medium", X7 = "Large", Y7 = "Very Large", K7 = "Deactivated", J7 = "Upcoming", Q7 = "Actived", eu = "Full", tu = "Normal", ru = "Light", ou = "Dark", iu = "Inverted", nu = "Settings", au = "Reset", su = "Redefine", lu = "Change language", cu = "No support", du = "Speech Synthesis is not supported in this browser", uu = "Voice recognition is not supported by your browser", pu = "Interact", hu = "Access link", gu = "Move up", fu = "Move down", mu = "Blue", vu = "Yellow", bu = { content_zoom: "Activate the content magnifier", describe_image: "Shows image description on hover", page_theme: "Change page theme", contrast: "Change contrast of colors", easy_click: "Activate easy click", keyboard_navigation: "Activate keyboard navigation", voice_commands: "Activate voice commands", page_structure: "View page structure", page_colors: "Change page colors", disable_autoplay: "Prevent automatic media playback", adjust_saturation: "Adjust saturation", open_settings: "Open settings", large_window: "Large Window", small_window: "Small Window", night_filter: "Activate night filter", reduce_brightness: "Reduce brightness", color_blind_filter: "Activate color blind filter", disable_sound: "Disable the sound of the videos and audios", dyslexic_font: "Activate font for dyslexic", "dictionary.search": "Search in dictionary", dictionary: "Activate dictionary", text_reader: "Read text", font_increase: "Increase font", letter_spacing: "Modify letter spacing", line_spacing: "Modify line spacing", highlight_links: "Highlight links", highlight_titles: "Highlight titles", reset: "Reset definitions", close: "Close", change_language: "Change application language", reader_mode: "Activate reader mode", toggle_theme: "Toggle theme", pause_animations: "Pause animations", hide_images: "Hide all images", reading_guide: "Activate reading guide", reading_mask: "Activate reading mask", move_reading_mask: "Move reading mask", move_reading_guide: "Move reading guide", large_cursor: "Activate large cursor", text_color: "Change text color", open_navigation_profiles: "Open or close navigation profiles", blind: "Definitions for blind people", low_vision: "Definitions for low vision people" }, Cu = { reset: "Reset definitions", close: "Close", settings: "Settings", toggle_theme: "Toggle theme" }, wu = { text_and_typography: "Text and Typography", reading_and_comprehension: "Reading and Comprehension", focus_and_visibility: "Focus and Visibility", colors_filters_and_contrast: "Colors, Filters and Contrast", distraction_reduction: "Distraction Reduction", navigation_profiles: "Navigation Profiles", navigation_and_motor_accessibility: "Navigation and Motor Accessibility", profiles: "Profiles" }, yu = "Sign Accessibility", _u = "Contact & Support", xu = "Get in touch or report a problem", ku = "About the Project", Au = "Learn about the project and its creators", Eu = "What's New", Su = "See what's new", Lu = {
  functionalities: i7,
  beta: n7,
  new: "New",
  beta_alert: a7,
  left: s7,
  right: l7,
  send: c7,
  page_theme: d7,
  easy_click: u7,
  keyboard_navigation_active: p7,
  voice_commands_active: h7,
  only_pt: g7,
  color_picker: f7,
  expand: m7,
  collapse: v7,
  content_zoom: b7,
  night_filter: C7,
  reduce_brightness: w7,
  text_reader_is_actived: y7,
  color_blind_filter: _7,
  disable_sounds: x7,
  disable_autoplay: k7,
  dyslexic_font: A7,
  text_reader: E7,
  describe_image: S7,
  contrast: L7,
  font_increase: N7,
  letter_spacing: T7,
  line_spacing: R7,
  highlight_links: M7,
  highlight_titles: I7,
  reader_mode: O7,
  page_colors: P7,
  pause_animations: D7,
  keyboard_navigation: H7,
  voice_commands: z7,
  hide_images: B7,
  reading_guide: F7,
  reading_mask: V7,
  large_cursor: $7,
  text_color: U7,
  saturation: j7,
  page_structure: G7,
  dictionary: Z7,
  custom: q7,
  default: "Default",
  medium: W7,
  large: X7,
  very_large: Y7,
  deactivated: K7,
  upcoming: J7,
  actived: Q7,
  full: eu,
  normal: tu,
  light: ru,
  dark: ou,
  invert: iu,
  settings: nu,
  reset: au,
  redefine: su,
  change_language: lu,
  no_support: cu,
  speech_is_not_supported: du,
  speech_recognition_is_not_supported: uu,
  interact: pu,
  access_link: hu,
  move_top: gu,
  move_bottom: fu,
  blue: mu,
  yellow: vu,
  al: bu,
  titles: Cu,
  sections: wu,
  "dictionary.select_word": "Select a word to see its meaning or perform a custom search.",
  "dictionary.no_result": "No result",
  "dictionary.close": "Close dictionary",
  "status.loading": "Loading...",
  "status.searching": "Searching...",
  "saturation.low": "Low",
  "saturation.high": "High",
  "saturation.grayscale": "Grayscale",
  "contrast.low": "Low",
  "contrast.high": "High",
  "contrast.invert": "Inverted",
  libras_accessibility: yu,
  contact_and_support: _u,
  contact_and_support_description: xu,
  about_the_project: ku,
  about_the_project_description: Au,
  version_updates: Eu,
  version_updates_description: Su,
  "structure.titles": "Titles",
  "structure.sections": "Sections",
  "structure.links": "Links",
  "structure.no_results": "No results",
  "profiles.blind": "Blind",
  "profiles.low_vision": "Low Vision",
  "profiles.cognitive": "Cognitive",
  "profiles.dyslexic": "Dyslexic",
  "profiles.color_blind": "Color Blind",
  "profiles.mobility": "Mobility",
  "profiles.fewer_distractions": "Fewer Distractions",
  "about.implementers": "Implementers",
  "about.social_media": "Social Media",
  "about.project_description": "VLibras is a digital accessibility project aimed at ensuring access to information for deaf individuals by translating digital content into Brazilian Sign Language (Libras). As part of this initiative, VLibras Widget+ extends this mission by integrating additional accessibility features, such as visual adjustments and usability improvements, to make web navigation even more inclusive.",
  "about.project_description_to_speak": "Read description aloud",
  "support_dialog.contact_form_errors.title": "The title must be at least 5 characters long.",
  "support_dialog.contact_form_errors.message": "The message must be at least 10 characters long.",
  "support_dialog.contact_form_success": "Message sent successfully!",
  "support_dialog.contact_form_submit": "Send message",
  "support_dialog.contact_form_submiting": "Sending...",
  "support_dialog.contact_form_fields.title": "Title",
  "support_dialog.contact_form_fields.message": "Message",
  "support_dialog.tabs.contact": "Contact",
  "support_dialog.tabs.bug_report": "Report a problem",
  "support_dialog.bug_report_form_errors.bug_description": "The description must be at least 10 characters long.",
  "support_dialog.bug_report_form_success": "Message sent! We appreciate your feedback.",
  "support_dialog.bug_report_form_submit": "Submit",
  "support_dialog.bug_report_form_submiting": "Submitting...",
  "support_dialog.bug_report_form_fields.bug_description": "Problem description",
  "language.portuguese": "Portuguese",
  "language.english": "English",
  "language.spanish": "Spanish",
  "settings.dark_mode": "Dark Mode",
  "settings.dark_mode_description": "Changes the interface color palette to dark tones, providing a more comfortable visual experience in low-light environments.",
  "settings.change_language_description": "Change the application language. Available in Portuguese, English, and Spanish.",
  "settings.change_language": "Change language",
  "settings.position": "Widget+ Position",
  "settings.position_description": "Set the position of Widget+ on the screen. You can choose between left or right.",
  "settings.position_left": "Left",
  "settings.position_right": "Right"
}, Nu = "Funcionalidades", Tu = "Beta", Ru = "Esta opción puede presentar problemas", Mu = "Izquierda", Iu = "Derecha", Ou = "Tema de la página", Pu = "Clic Fácil", Du = "Navegación por teclado activada", Hu = "Comandos por voz activados", zu = "Solo Portugués", Bu = "Seleccionar color", Fu = "Expandir", Vu = "Colapsar", $u = "Lupa de Contenido", Uu = "Filtro Nocturno", ju = "Disminuir brillo", Gu = "Lector de texto activado", Zu = "Filtro de daltonismo", qu = "Desactivar sonidos", Wu = "Desactivar autoplay", Xu = "Fuente para dislexia", Yu = "Leer texto", Ku = "Describir imagen", Ju = "Contraste", Qu = "Aumentar fuente", e3 = "Espaciado entre letras", t3 = "Espaciado entre líneas", r3 = "Resaltar enlaces", o3 = "Resaltar títulos", i3 = "Modo lector", n3 = "Colores de la página", a3 = "Pausar animaciones", s3 = "Navegación por teclas", l3 = "Comandos por voz", c3 = "Ocultar imágenes", d3 = "Guía de lectura", u3 = "Máscara de lectura", p3 = "Cursor grande", h3 = "Color del texto", g3 = "Saturación", f3 = "Estructura de la página", m3 = "Diccionario Simplificado", v3 = "Personalizada", b3 = "Mediano", C3 = "Grande", w3 = "Muy grande", y3 = "Desactivado", _3 = "Proximamente", x3 = "Activado", k3 = "Pantalla completa", A3 = "Normal", E3 = "Claro", S3 = "Oscuro", L3 = "Invertido", N3 = "Configuraciones", T3 = "Restablecer", R3 = "Redefinir", M3 = "Cambiar idioma", I3 = "Sin soporte", O3 = "El sintetizador de voz no es compatible con su navegador", P3 = "El reconocimiento de voz no es compatible con su navegador", D3 = "Interactuar", H3 = "Acceder enlace", z3 = "Mover hacia arriba", B3 = "Mover hacia abajo", F3 = "Azul", V3 = "Amarillo", $3 = { content_zoom: "Activar la lupa de contenido", describe_image: "Mostrar la descripción de la imagen al pasar el ratón", page_theme: "Cambiar el tema de la página", contrast: "Ajustar el contraste de los colores", easy_click: "Activar clic fácil", keyboard_navigation: "Activar navegación por teclado", voice_commands: "Activar comandos por voz", page_structure: "Visualizar la estructura de la página", page_colors: "Cambiar los colores de la página", disable_autoplay: "Impedir reproducción automática de medios", adjust_saturation: "Ajustar la saturación", open_settings: "Abrir configuraciones", large_window: "Ventana grande", small_window: "Ventana pequeña", night_filter: "Activar filtro nocturno", reduce_brightness: "Disminuir el brillo de la pantalla", color_blind_filter: "Activar filtro para daltonismo", disable_sound: "Desactivar sonido de vídeos y audios", dyslexic_font: "Activar fuente para personas con dislexia", "dictionary.search": "Buscar en diccionario", dictionary: "Activar el diccionario", text_reader: "Leer el texto", font_increase: "Aumentar el tamaño de la fuente", letter_spacing: "Modificar el espaciado entre letras", line_spacing: "Modificar el espaciado entre líneas", highlight_links: "Resaltar enlaces", highlight_titles: "Resaltar títulos", reset: "Restablecer configuraciones", close: "Cerrar", change_language: "Cambiar el idioma de la herramienta", reader_mode: "Activar modo lector", toggle_theme: "Cambiar el tema", pause_animations: "Pausar animaciones", hide_images: "Ocultar todas las imágenes", reading_guide: "Activar la guía de lectura", reading_mask: "Activar la máscara de lectura", move_reading_mask: "Mover la máscara de lectura", move_reading_guide: "Mover la guía de lectura", large_cursor: "Activar el cursor grande", text_color: "Cambiar el color del texto", open_navigation_profiles: "Abrir o cerrar los perfiles de navegación", blind: "Configuraciones para personas ciegas", low_vision: "Configuraciones para personas con baja visión" }, U3 = { reset: "Restablecer configuraciones", close: "Cerrar", settings: "Configuraciones", toggle_theme: "Cambiar el tema" }, j3 = { text_and_typography: "Texto y tipografía", reading_and_comprehension: "Lectura y comprensión", focus_and_visibility: "Enfoque y accesibilidad visual", colors_filters_and_contrast: "Colores, filtros y contraste", distraction_reduction: "Reducción de distracciones", navigation_profiles: "Perfiles de navegación", navigation_and_motor_accessibility: "Navegación y Accesibilidad Motora", profiles: "Perfiles" }, G3 = "Accesibilidad en Señas", Z3 = "Contacto y Soporte", q3 = "Contáctanos o informa de un problema", W3 = "Sobre el Proyecto", X3 = "Conoce el proyecto y a sus creadores", Y3 = "Novedades de la versión", K3 = "Mira lo nuevo", J3 = {
  functionalities: Nu,
  beta: Tu,
  new: "Nuevo",
  beta_alert: Ru,
  left: Mu,
  right: Iu,
  page_theme: Ou,
  easy_click: Pu,
  keyboard_navigation_active: Du,
  voice_commands_active: Hu,
  only_pt: zu,
  color_picker: Bu,
  expand: Fu,
  collapse: Vu,
  content_zoom: $u,
  night_filter: Uu,
  reduce_brightness: ju,
  text_reader_is_actived: Gu,
  color_blind_filter: Zu,
  disable_sounds: qu,
  disable_autoplay: Wu,
  dyslexic_font: Xu,
  text_reader: Yu,
  describe_image: Ku,
  contrast: Ju,
  font_increase: Qu,
  letter_spacing: e3,
  line_spacing: t3,
  highlight_links: r3,
  highlight_titles: o3,
  reader_mode: i3,
  page_colors: n3,
  pause_animations: a3,
  keyboard_navigation: s3,
  voice_commands: l3,
  hide_images: c3,
  reading_guide: d3,
  reading_mask: u3,
  large_cursor: p3,
  text_color: h3,
  saturation: g3,
  page_structure: f3,
  dictionary: m3,
  custom: v3,
  default: "Predeterminada",
  medium: b3,
  large: C3,
  very_large: w3,
  deactivated: y3,
  upcoming: _3,
  actived: x3,
  full: k3,
  normal: A3,
  light: E3,
  dark: S3,
  invert: L3,
  settings: N3,
  reset: T3,
  redefine: R3,
  change_language: M3,
  no_support: I3,
  speech_is_not_supported: O3,
  speech_recognition_is_not_supported: P3,
  interact: D3,
  access_link: H3,
  move_top: z3,
  move_bottom: B3,
  blue: F3,
  yellow: V3,
  al: $3,
  titles: U3,
  sections: j3,
  "dictionary.select_word": "Selecciona una palabra para ver su significado o haz una búsqueda personalizada",
  "dictionary.no_result": "Sin resultado",
  "dictionary.close": "Cerrar diccionario",
  "status.loading": "Cargando...",
  "status.searching": "Buscando...",
  "saturation.low": "Baja",
  "saturation.high": "Alta",
  "saturation.grayscale": "Escala de grises",
  "contrast.low": "Bajo",
  "contrast.high": "Alto",
  "contrast.invert": "Invertido",
  libras_accessibility: G3,
  contact_and_support: Z3,
  contact_and_support_description: q3,
  about_the_project: W3,
  about_the_project_description: X3,
  version_updates: Y3,
  version_updates_description: K3,
  "structure.titles": "Títulos",
  "structure.sections": "Secciones",
  "structure.links": "Enlaces",
  "structure.no_results": "Sin resultados",
  "profiles.blind": "Ciego",
  "profiles.low_vision": "Baja visión",
  "profiles.cognitive": "Cognitivo",
  "profiles.dyslexic": "Disléxico",
  "profiles.color_blind": "Daltónico",
  "profiles.mobility": "Mobilidad",
  "profiles.fewer_distractions": "Menos distracciones",
  "about.implementers": "Implementadores",
  "about.social_media": "Redes Sociales",
  "about.project_description": "VLibras es un proyecto de accesibilidad digital que busca garantizar el acceso a la información para personas sordas mediante la traducción de contenidos digitales a la Lengua de Señas Brasileña (Libras). Como parte de esta iniciativa, VLibras Widget+ amplía este propósito al integrar otras funciones de accesibilidad, como ajustes visuales y mejoras de usabilidad, para hacer la navegación web aún más inclusiva.",
  "about.project_description_to_speak": "Leer descripción en voz alta",
  "support_dialog.contact_form_errors.title": "El título debe tener al menos 5 caracteres.",
  "support_dialog.contact_form_errors.message": "El mensaje debe tener al menos 10 caracteres.",
  "support_dialog.contact_form_success": "Mensaje enviado con éxito!",
  "support_dialog.contact_form_submit": "Enviar mensaje",
  "support_dialog.contact_form_submiting": "Enviando...",
  "support_dialog.contact_form_fields.title": "Título",
  "support_dialog.contact_form_fields.message": "Mensaje",
  "support_dialog.tabs.contact": "Contacto",
  "support_dialog.tabs.bug_report": "Reportar un problema",
  "support_dialog.bug_report_form_errors.bug_description": "La descripción debe tener al menos 10 caracteres.",
  "support_dialog.bug_report_form_success": "¡Mensaje enviado! Agradecemos tus comentarios.",
  "support_dialog.bug_report_form_submit": "Enviar",
  "support_dialog.bug_report_form_submiting": "Enviando...",
  "support_dialog.bug_report_form_fields.bug_description": "Descripción del problema",
  "language.portuguese": "Portugués",
  "language.english": "Inglés",
  "language.spanish": "Español",
  "settings.dark_mode": "Modo oscuro",
  "settings.dark_mode_description": "Cambia la paleta de colores de la aplicación a tonos oscuros, ofreciendo una experiencia visual más cómoda en entornos con poca luz.",
  "settings.change_language": "Cambiar idioma",
  "settings.change_language_description": "Cambia el idioma de la aplicación. Disponible en portugués, inglés y español.",
  "settings.position": "Posición del Widget+",
  "settings.position_description": "Configura la posición de Widget+ en la pantalla. Puedes elegir entre izquierda o derecha.",
  "settings.position_left": "Izquierda",
  "settings.position_right": "Derecha"
}, ys = { pt: o7, en: Lu, es: J3 }, B = Ht()(
  Tc(
    (e, t) => ({
      locale: "pt",
      polyglot: new ws({ locale: "pt", phrases: ys.pt }),
      setLocale: (r) => e(() => ({ locale: r, polyglot: new ws({ locale: r, phrases: ys[r] }) })),
      t: (r, o) => t().polyglot.t(r, o)
    }),
    {
      name: "@vlibras-widget-plus.locale",
      partialize: (e) => ({ locale: e.locale }),
      version: 1
    }
  )
), Ea = (e, t) => B.getState().t(e, t), Q3 = () => {
  const { locale: e, setLocale: t } = B.getState();
  t(e);
}, Uo = () => {
  const [e, t] = U(!1);
  return P(() => {
    const r = () => {
      t(window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(hover: none)").matches);
    };
    return r(), window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), e;
}, Gc = () => {
  const [e, t] = U({
    width: window.innerWidth,
    height: window.innerHeight
  });
  return P(() => {
    function r() {
      t({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), e;
}, jo = (e) => {
  const [t, r] = U(!1);
  return P(() => {
    function o(a) {
      r(a.matches);
    }
    const n = matchMedia(e);
    return n.addEventListener("change", o), r(n.matches), () => n.removeEventListener("change", o);
  }, [e]), t;
}, wo = "@vwp-theme", _s = (e) => ["light", "dark"].includes(e), Go = Ht((e) => ({
  t_theme: (() => {
    const t = localStorage.getItem(wo) || "";
    return Ea(_s(t) ? t : "light");
  })(),
  theme: (() => {
    const t = localStorage.getItem(wo) || "";
    return _s(t) ? t : "light";
  })(),
  toggleTheme: () => e((t) => {
    const r = t.theme === "dark" ? "light" : "dark";
    return localStorage.setItem(wo, r), { theme: r };
  }),
  setTheme: (t) => {
    localStorage.setItem(wo, t), e({ theme: t });
  }
})), zt = () => {
  const [e, t] = U(""), [r, o] = U("");
  return P(() => {
    var n;
    e || t("1.0.0"), r || o(((n = window == null ? void 0 : window.VLibrasWidgetPlus) == null ? void 0 : n.path) ?? "./");
  }, [e, r]), { version: e, path: r };
}, ep = (e, t = []) => {
  const [r, o] = U(null), [n, a] = U(null), [s, l] = U(!0);
  return P(() => {
    let c = !0;
    return l(!0), a(null), o(null), e().then((d) => {
      c && (o(d), l(!1));
    }).catch((d) => {
      c && (a(d), l(!1));
    }), () => {
      c = !1;
    };
  }, [e, ...t]), { data: r, error: n, isLoading: s };
}, Zc = {
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
  profiles: void 0,
  brightness: void 0,
  colorBlindFilter: void 0,
  nightFilter: void 0,
  disableAutoplay: void 0,
  saturation: void 0,
  readerMode: void 0,
  pageColor: void 0,
  pageStructure: void 0,
  keyboardNavigation: void 0,
  easyClick: void 0,
  pageTheme: void 0,
  pageContrast: void 0,
  describeImage: void 0,
  contentZoom: void 0,
  voiceCommands: void 0,
  isActive: !1
}, S = Ht()(
  Tc(
    (e) => ({
      position: "right",
      isOpenWidget: !1,
      isExpanded: !1,
      isLoaded: !1,
      isActive: !1,
      setIsExpanded: (t) => e((r) => ({
        isExpanded: typeof t == "function" ? t(r.isExpanded) : t
      })),
      setIsOpenWidget: (t) => e((r) => ({
        isOpenWidget: typeof t == "function" ? t(r.isExpanded) : t
      })),
      setIsLoaded: (t) => e({ isLoaded: t }),
      reset: () => e(Yn(Zc, ["voiceCommands"]))
    }),
    {
      name: "@vlibras-widget-plus",
      partialize: (e) => Yn(e, ["textReader", "dictionary", "readerMode", "pageStructure"]),
      version: 1
    }
  )
);
S.subscribe((e, t) => {
  const o = Object.keys(
    Yn(Zc, ["isActive", "position", "voiceCommands"])
  ).some((n) => {
    const a = e[n];
    return ["textReader", "textColor", "dictionary", "describeImage", "contentZoom"].includes(n) ? a == null ? void 0 : a.isActive : !!a;
  });
  o !== t.isActive && (e.isActive = o), window.VLibrasWidgetPlus && (window.VLibrasWidgetPlus.isOpen = e.isOpenWidget), e.isOpenWidget && va(!1);
});
const ur = "vwp-app-root", yo = "vwp-root-overlay", St = {}, xs = {}, tp = () => {
  if (!St[yo]) {
    const t = document.createElement("div");
    t.id = yo, document.body.appendChild(t), St[yo] = t;
  }
  const e = St[yo];
  return e.shadowRoot || e.attachShadow({ mode: "open" });
}, po = (e, t = !1) => {
  if (!St[e]) {
    const r = document.createElement("div");
    return r.id = e, t ? document.body.appendChild(r) : tp().appendChild(r), St[e] = r, r;
  }
  return St[e];
}, Sa = () => {
  if (!St[ur]) {
    let o = document.getElementById(ur);
    o || (o = document.createElement("div"), o.id = ur, document.body.appendChild(o)), St[ur] = o;
  }
  const e = St[ur], t = e.shadowRoot || e.attachShadow({ mode: "open" });
  return { root: e, shadowRoot: t, isRootActive: () => e.getAttribute("data-active") === "true" };
}, qe = (e, t, r) => {
  if (!xs[t]) {
    const o = document.createElement("style");
    o.id = t, o.innerHTML = e, xs[t] = o, document.head.appendChild(o);
  }
}, La = (e, t) => {
  const o = ["html", "input", "head", "script", "style", "iframe", "meta", "canvas", "noscript"], n = e.tagName.toLowerCase(), a = o.includes(n), s = e.classList.contains("vwp-ignore"), l = e.closest("[vw]");
  return e.id !== ur && !a && !s && !l;
}, rp = async (e, t) => {
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
    })
  ];
  await Na(r, (o) => {
    t.adoptedStyleSheets = [...t.adoptedStyleSheets, ...o];
  });
}, op = async (e) => {
  const t = [
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
  await Na(t, (r) => {
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, ...r];
  });
}, ip = async (e) => {
  const t = [
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
  await Na(t, (r) => {
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, ...r];
  });
}, Na = async (e, t) => {
  await Promise.all(e.map((r) => r.load())), e.forEach((r) => document.fonts.add(r)), t && t(document.adoptedStyleSheets);
}, np = {
  main: !0,
  settings: !1,
  open: () => {
  }
}, qt = Ht()((e) => ({
  ...np,
  open: (t) => e({ main: !1, settings: !1, [t]: !0 })
})), Dt = me(({ children: e, disabled: t, variant: r = "default", className: o, ...n }, a) => /* @__PURE__ */ i(
  "button",
  {
    disabled: t,
    ref: a,
    className: H(
      "group flex cursor-pointer items-center justify-center gap-x-2 text-foreground",
      "size-9 rounded-full hover:bg-muted",
      "[&>svg]:pointer-events-none [&>svg]:fill-foreground/80 hover:[&>svg]:fill-foreground",
      t && "!pointer-events-none *:!pointer-events-none opacity-50",
      r === "destructive" && "hover:bg-destructive/10 hover:[&>svg]:fill-destructive",
      o
    ),
    type: n.type || "button",
    ...n,
    children: e
  }
)), ap = me(
  ({ children: e, className: t, ...r }, o) => /* @__PURE__ */ i("div", { ref: o, className: H("flex h-full animate-move-right flex-col", t), ...r, children: e })
), sp = me(
  ({ children: e, className: t, ...r }, o) => /* @__PURE__ */ i("div", { ref: o, className: H("flex items-center gap-2 border-b-1 p-4", t), ...r, children: e })
), lp = me(
  ({ children: e, className: t, ...r }, o) => /* @__PURE__ */ i("h3", { ref: o, className: H("font-semibold text-lg", t), ...r, children: e })
), cp = me(
  ({ children: e, className: t, ...r }, o) => /* @__PURE__ */ i("div", { ref: o, className: H("h-full overflow-y-auto p-4", t), ...r, children: e })
), dp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M4.675 15.425L3.65 18.275C3.56667 18.5083 3.43333 18.6875 3.25 18.8125C3.06667 18.9375 2.85833 19 2.625 19C2.24167 19 1.9375 18.8375 1.7125 18.5125C1.4875 18.1875 1.44167 17.8417 1.575 17.475L5.975 5.75C6.05833 5.51667 6.2 5.33333 6.4 5.2C6.6 5.06667 6.81667 5 7.05 5H7.95C8.2 5 8.42083 5.06667 8.6125 5.2C8.80417 5.33333 8.94167 5.51667 9.025 5.75L13.45 17.5C13.5833 17.8667 13.5375 18.2083 13.3125 18.525C13.0875 18.8417 12.7833 19 12.4 19C12.1667 19 11.95 18.9333 11.75 18.8C11.55 18.6667 11.4083 18.4833 11.325 18.25L10.325 15.425H4.675ZM5.4 13.4H9.6L7.55 7.6H7.45L5.4 13.4ZM18 13H16C15.7167 13 15.4792 12.9042 15.2875 12.7125C15.0958 12.5208 15 12.2833 15 12C15 11.7167 15.0958 11.4792 15.2875 11.2875C15.4792 11.0958 15.7167 11 16 11H18V9C18 8.71667 18.0958 8.47917 18.2875 8.2875C18.4792 8.09583 18.7167 8 19 8C19.2833 8 19.5208 8.09583 19.7125 8.2875C19.9042 8.47917 20 8.71667 20 9V11H22C22.2833 11 22.5208 11.0958 22.7125 11.2875C22.9042 11.4792 23 11.7167 23 12C23 12.2833 22.9042 12.5208 22.7125 12.7125C22.5208 12.9042 22.2833 13 22 13H20V15C20 15.2833 19.9042 15.5208 19.7125 15.7125C19.5208 15.9042 19.2833 16 19 16C18.7167 16 18.4792 15.9042 18.2875 15.7125C18.0958 15.5208 18 15.2833 18 15V13Z" })
    ]
  }
), up = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M2.5875 19.4125C2.97917 19.8042 3.45 20 4 20H20C20.55 20 21.0208 19.8042 21.4125 19.4125C21.8042 19.0208 22 18.55 22 18V6C22 5.45 21.8042 4.97917 21.4125 4.5875C21.0208 4.19583 20.55 4 20 4H4C3.45 4 2.97917 4.19583 2.5875 4.5875C2.19583 4.97917 2 5.45 2 6V18C2 18.55 2.19583 19.0208 2.5875 19.4125ZM5.17 14.83C5.95 15.61 6.89333 16 8 16H10.4C10.6267 16 10.8167 15.9233 10.97 15.77C11.1233 15.6167 11.2 15.4267 11.2 15.2C11.2 14.9733 11.1233 14.7833 10.97 14.63C10.8167 14.4767 10.6267 14.4 10.4 14.4H8C7.33333 14.4 6.76667 14.1667 6.3 13.7C5.83333 13.2333 5.6 12.6667 5.6 12C5.6 11.3333 5.83333 10.7667 6.3 10.3C6.76667 9.83333 7.33333 9.6 8 9.6H10.4C10.6267 9.6 10.8167 9.52333 10.97 9.37C11.1233 9.21667 11.2 9.02667 11.2 8.8C11.2 8.57333 11.1233 8.38333 10.97 8.23C10.8167 8.07667 10.6267 8 10.4 8H8C6.89333 8 5.95 8.39 5.17 9.17C4.39 9.95 4 10.8933 4 12C4 13.1067 4.39 14.05 5.17 14.83ZM9.03 12.57C9.18333 12.7233 9.37333 12.8 9.6 12.8H14.4C14.6267 12.8 14.8167 12.7233 14.97 12.57C15.1233 12.4167 15.2 12.2267 15.2 12C15.2 11.7733 15.1233 11.5833 14.97 11.43C14.8167 11.2767 14.6267 11.2 14.4 11.2H9.6C9.37333 11.2 9.18333 11.2767 9.03 11.43C8.87667 11.5833 8.8 11.7733 8.8 12C8.8 12.2267 8.87667 12.4167 9.03 12.57ZM13.03 15.77C13.1833 15.9233 13.3733 16 13.6 16H16C17.1067 16 18.05 15.61 18.83 14.83C19.61 14.05 20 13.1067 20 12C20 10.8933 19.61 9.95 18.83 9.17C18.05 8.39 17.1067 8 16 8H13.6C13.3733 8 13.1833 8.07667 13.03 8.23C12.8767 8.38333 12.8 8.57333 12.8 8.8C12.8 9.02667 12.8767 9.21667 13.03 9.37C13.1833 9.52333 13.3733 9.6 13.6 9.6H16C16.6667 9.6 17.2333 9.83333 17.7 10.3C18.1667 10.7667 18.4 11.3333 18.4 12C18.4 12.6667 18.1667 13.2333 17.7 13.7C17.2333 14.1667 16.6667 14.4 16 14.4H13.6C13.3733 14.4 13.1833 14.4767 13.03 14.63C12.8767 14.7833 12.8 14.9733 12.8 15.2C12.8 15.4267 12.8767 15.6167 13.03 15.77Z"
        }
      )
    ]
  }
), pp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M11 18.15V15C11 14.7167 11.0958 14.4792 11.2875 14.2875C11.4792 14.0959 11.7167 14 12 14C12.2833 14 12.5208 14.0959 12.7125 14.2875C12.9042 14.4792 13 14.7167 13 15V18.125L14.075 17.025C14.275 16.825 14.5167 16.725 14.8 16.725C15.0833 16.725 15.325 16.825 15.525 17.025C15.725 17.225 15.825 17.4667 15.825 17.75C15.825 18.0334 15.725 18.2751 15.525 18.475L12.7 21.3C12.6 21.4 12.4917 21.4709 12.375 21.5125C12.2583 21.5542 12.1333 21.575 12 21.575C11.8667 21.575 11.7417 21.5542 11.625 21.5125C11.5083 21.4709 11.4 21.4 11.3 21.3L8.44999 18.45C8.24999 18.25 8.15415 18.0125 8.16249 17.7375C8.17082 17.4625 8.27499 17.225 8.47499 17.025C8.67499 16.825 8.91249 16.725 9.18749 16.725C9.46249 16.725 9.69999 16.825 9.89999 17.025L11 18.15ZM11 5.85005L9.87499 6.97505C9.67499 7.17505 9.44165 7.27505 9.17499 7.27505C8.90832 7.27505 8.67499 7.17505 8.47499 6.97505C8.27499 6.77505 8.17499 6.53755 8.17499 6.26255C8.17499 5.98755 8.27499 5.75005 8.47499 5.55005L11.3 2.70005C11.4 2.60005 11.5083 2.52922 11.625 2.48755C11.7417 2.44588 11.8667 2.42505 12 2.42505C12.1333 2.42505 12.2583 2.44588 12.375 2.48755C12.4917 2.52922 12.6 2.60005 12.7 2.70005L15.55 5.55005C15.75 5.75005 15.85 5.98338 15.85 6.25005C15.85 6.51672 15.75 6.75005 15.55 6.95005C15.35 7.15005 15.1125 7.25005 14.8375 7.25005C14.5625 7.25005 14.325 7.15005 14.125 6.95005L13 5.85005V9.00005C13 9.28338 12.9042 9.52088 12.7125 9.71255C12.5208 9.90422 12.2833 10 12 10C11.7167 10 11.4792 9.90422 11.2875 9.71255C11.0958 9.52088 11 9.28338 11 9.00005V5.85005Z" })
    ]
  }
), hp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M6.7 21.3C6.5 21.5 6.26667 21.6 6 21.6C5.73334 21.6 5.5 21.5 5.3 21.3L2.7 18.7C2.5 18.5 2.4 18.2667 2.4 18C2.4 17.7333 2.5 17.5 2.7 17.3L5.3 14.7C5.5 14.5 5.73334 14.4 6 14.4C6.26667 14.4 6.5 14.5 6.7 14.7C6.9 14.9 7 15.1375 7 15.4125C7 15.6875 6.9 15.925 6.7 16.125L5.825 17H18.175L17.3 16.125C17.1167 15.925 17.0208 15.6875 17.0125 15.4125C17.0042 15.1375 17.1 14.9 17.3 14.7C17.5 14.5 17.7333 14.4 18 14.4C18.2667 14.4 18.5 14.5 18.7 14.7L21.3 17.3C21.5 17.5 21.6 17.7333 21.6 18C21.6 18.2667 21.5 18.5 21.3 18.7L18.7 21.3C18.5 21.5 18.2667 21.6 18 21.6C17.7333 21.6 17.5 21.5 17.3 21.3C17.1 21.1 17 20.8625 17 20.5875C17 20.3125 17.1 20.075 17.3 19.875L18.175 19H5.825L6.7 19.875C6.88334 20.075 6.97917 20.3125 6.9875 20.5875C6.99583 20.8625 6.9 21.1 6.7 21.3ZM7.35 11.8L10.775 2.6C10.8417 2.41667 10.9542 2.27083 11.1125 2.1625C11.2708 2.05417 11.45 2 11.65 2H12.35C12.55 2 12.7292 2.05417 12.8875 2.1625C13.0458 2.27083 13.1583 2.41667 13.225 2.6L16.65 11.825C16.75 12.1083 16.7167 12.375 16.55 12.625C16.3833 12.875 16.15 13 15.85 13C15.6667 13 15.4958 12.9458 15.3375 12.8375C15.1792 12.7292 15.0667 12.5833 15 12.4L14.25 10.2H9.8L9 12.425C8.93333 12.6083 8.825 12.75 8.675 12.85C8.525 12.95 8.35834 13 8.175 13C7.85834 13 7.6125 12.8708 7.4375 12.6125C7.2625 12.3542 7.23334 12.0833 7.35 11.8ZM10.35 8.6H13.65L12.05 4.05H11.95L10.35 8.6Z" })
    ]
  }
), gp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M5 16C4.45 16 3.97917 15.8042 3.5875 15.4125C3.19583 15.0208 3 14.55 3 14V10C3 9.45 3.19583 8.97917 3.5875 8.5875C3.97917 8.19583 4.45 8 5 8H19C19.55 8 20.0208 8.19583 20.4125 8.5875C20.8042 8.97917 21 9.45 21 10V14C21 14.55 20.8042 15.0208 20.4125 15.4125C20.0208 15.8042 19.55 16 19 16H5ZM19 10H5V14H19V10Z" }),
      /* @__PURE__ */ i("path", { d: "M5 5.5C5 4.67157 5.67157 4 6.5 4H17.5C18.3284 4 19 4.67157 19 5.5C19 6.32843 18.3284 7 17.5 7H6.5C5.67157 7 5 6.32843 5 5.5Z" }),
      /* @__PURE__ */ i("path", { d: "M5 18.5C5 17.6716 5.67157 17 6.5 17H17.5C18.3284 17 19 17.6716 19 18.5C19 19.3284 18.3284 20 17.5 20H6.5C5.67157 20 5 19.3284 5 18.5Z" })
    ]
  }
), qc = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("g", { clipPath: "url(#clip0_1_148)", children: /* @__PURE__ */ i("path", { d: "M19.2535 0.622806C19.3084 0.240758 19.3471 0.0804978 19.3932 0.0451324C19.4789 -0.0206635 19.5056 -0.0169822 19.5926 0.0724691C19.6724 0.154597 19.9771 1.09947 20.0779 1.57791C20.1352 1.84951 20.135 1.88989 20.0759 2.13771C19.9652 2.6008 19.6335 2.99013 19.1006 3.28241C18.9851 3.34574 18.6504 3.45983 18.3568 3.53592C17.6512 3.71874 17.2297 3.86298 16.6183 4.13083C16.3401 4.25267 16.1052 4.35943 16.0961 4.36813C16.087 4.37678 16.0979 4.40271 16.1203 4.42574C16.1492 4.45543 16.1959 4.44896 16.2814 4.4035C16.4124 4.33378 16.5502 4.35454 16.5502 4.44395C16.5502 4.47481 16.5344 4.50007 16.515 4.50007C16.4958 4.50007 16.4276 4.54543 16.3636 4.60085C16.1919 4.74959 16.153 4.94505 16.23 5.27227C16.4027 6.00515 16.4017 6.31432 16.2248 6.90867C16.1409 7.19097 16.1305 7.78395 16.204 8.10319C16.2764 8.41752 16.5183 8.91056 16.7329 9.18098C16.9939 9.50977 17.2719 9.71782 17.7142 9.91544C18.3958 10.2199 18.5918 10.4187 18.4804 10.6927C18.4052 10.878 18.0014 11.3848 17.7604 11.5963C17.5332 11.7959 17.2539 11.9842 16.8998 12.1767C16.7628 12.2512 16.6378 12.3507 16.609 12.4082C16.5812 12.4638 16.5461 12.6806 16.5308 12.8901C16.5156 13.0995 16.4839 13.2872 16.4601 13.3072C16.4364 13.3272 16.3449 13.3634 16.2569 13.3875C16.0586 13.4422 16.0299 13.485 16.139 13.5635C16.3328 13.7033 16.3293 13.7678 16.1085 14.1161C15.7627 14.6622 15.5852 15.232 15.4256 16.3081C15.3178 17.0344 15.2468 17.1655 14.9046 17.2695C14.7149 17.3271 12.514 16.953 12.108 16.7942C12.0481 16.7707 11.9722 16.7795 11.8698 16.8217C11.7411 16.8747 11.6952 16.9297 11.5518 17.2029C11.4596 17.3785 11.302 17.7121 11.2015 17.9442L11.0188 18.3664L11.1826 18.6055C11.3396 18.8345 11.3486 18.8634 11.3972 19.2935C11.4369 19.6445 11.4696 19.7806 11.5474 19.9171C11.6255 20.0542 11.6373 20.1038 11.6025 20.147C11.5645 20.1941 11.5446 20.1929 11.4653 20.1394C11.3005 20.0283 11.3201 20.1208 11.4978 20.2926C11.7142 20.5018 11.9786 20.9245 12.1167 21.2819C12.1749 21.4328 12.3047 21.8998 12.405 22.3198C12.5051 22.7387 12.6975 23.4938 12.8331 24H3.00041C2.98473 24.0403 3.01575 23.9574 3.00041 24C3.16755 23.5707 3.4904 22.8509 3.8808 22.252C4.46487 21.3561 5.02401 20.2783 5.51163 19.1083C5.90984 18.153 6.38331 17.7143 6.38331 17.7143C6.26008 17.6461 6.61797 17.7551 6.61797 17.6382C6.61797 17.5579 6.95175 16.9075 7.18483 16.5336C7.41605 16.1626 7.56918 16.0665 7.81704 16.1369C8.03326 16.1984 8.13338 16.1546 8.21257 15.9642C8.44094 15.4149 8.80668 14.3393 8.92336 13.8742C9.09575 13.1867 9.09445 13.1799 8.59894 12.1515C7.87567 10.6507 7.07851 9.43031 6.08246 8.29901C5.30939 7.4209 4.92823 6.89207 4.53928 6.1577C4.44428 5.97837 4.352 5.83166 4.33416 5.83166C4.27867 5.83166 4.2574 5.96502 4.29268 6.09167C4.33792 6.25393 4.28061 6.35286 4.20245 6.24751C4.09167 6.09833 4.0688 5.80017 4.11919 5.16328C4.16417 4.59497 4.17478 4.54327 4.27559 4.39958C4.33507 4.31487 4.49186 4.16043 4.62398 4.05642C4.86278 3.86847 4.95514 3.74635 5.20995 3.28159C5.42598 2.88755 6.07318 2.27883 6.17007 2.37854C6.18754 2.39651 6.12596 2.59367 6.03326 2.81675C5.94055 3.03979 5.87255 3.24333 5.88218 3.2691C5.89398 3.30074 6.03748 3.25265 6.3254 3.12058C6.55955 3.01315 7.18784 2.73145 7.72155 2.49458C8.76213 2.0328 9.98105 1.42003 10.7474 0.973443C11.3249 0.636944 11.4547 0.576866 11.8752 0.451541C12.4345 0.284896 12.9336 0.260615 14.431 0.327233C15.1596 0.359661 15.7719 0.396397 15.7914 0.40889C15.8718 0.46 15.8169 0.533433 15.6409 0.609921C15.454 0.691226 15.3534 0.806369 15.4018 0.88411C15.4356 0.938705 16.9252 1.61359 17.2819 1.73598C17.4341 1.78822 17.6956 1.86067 17.8631 1.89705C18.5205 2.03985 18.8096 1.96939 18.9947 1.6215C19.1339 1.35987 19.164 1.24355 19.2535 0.622806Z" }) })
    ]
  }
), fp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M8.65 20.5L2.5 14.35C2.33333 14.1833 2.20833 14 2.125 13.8C2.04167 13.6 2 13.3916 2 13.175C2 12.9583 2.04167 12.75 2.125 12.55C2.20833 12.35 2.33333 12.1666 2.5 12L8.25 6.27498L6.375 4.39998C6.15833 4.18331 6.04583 3.92498 6.0375 3.62498C6.02917 3.32498 6.13333 3.05831 6.35 2.82498C6.56667 2.59164 6.83333 2.47498 7.15 2.47498C7.46667 2.47498 7.74167 2.59164 7.975 2.82498L17.15 12C17.3167 12.1666 17.4375 12.35 17.5125 12.55C17.5875 12.75 17.625 12.9583 17.625 13.175C17.625 13.3916 17.5875 13.6 17.5125 13.8C17.4375 14 17.3167 14.1833 17.15 14.35L11 20.5C10.8333 20.6666 10.65 20.7916 10.45 20.875C10.25 20.9583 10.0417 21 9.825 21C9.60833 21 9.4 20.9583 9.2 20.875C9 20.7916 8.81667 20.6666 8.65 20.5ZM9.825 7.84998L4.475 13.2H15.175L9.825 7.84998ZM19.8 21C19.2 21 18.6917 20.7875 18.275 20.3625C17.8583 19.9375 17.65 19.4166 17.65 18.8C17.65 18.35 17.7625 17.925 17.9875 17.525C18.2125 17.125 18.4667 16.7333 18.75 16.35L19.225 15.75C19.375 15.5666 19.5708 15.4708 19.8125 15.4625C20.0542 15.4541 20.25 15.5416 20.4 15.725L20.9 16.35C21.1667 16.7333 21.4167 17.125 21.65 17.525C21.8833 17.925 22 18.35 22 18.8C22 19.4166 21.7833 19.9375 21.35 20.3625C20.9167 20.7875 20.4 21 19.8 21Z" })
    ]
  }
), mp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M21 5V15.725C21 15.9583 20.9417 16.15 20.825 16.3C20.7083 16.45 20.5583 16.5667 20.375 16.65C20.1917 16.7333 20.0083 16.7625 19.825 16.7375C19.6417 16.7125 19.4667 16.6167 19.3 16.45L7.55001 4.7C7.38335 4.53333 7.28751 4.35833 7.26251 4.175C7.23751 3.99167 7.26668 3.80833 7.35001 3.625C7.43335 3.44167 7.55001 3.29167 7.70001 3.175C7.85001 3.05833 8.04168 3 8.27501 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5ZM5.00001 21C4.45001 21 3.97918 20.8042 3.58751 20.4125C3.19585 20.0208 3.00001 19.55 3.00001 19V5.8L2.10001 4.9C1.91668 4.71667 1.82501 4.48333 1.82501 4.2C1.82501 3.91667 1.91668 3.68333 2.10001 3.5C2.28335 3.31667 2.51668 3.225 2.80001 3.225C3.08335 3.225 3.31668 3.31667 3.50001 3.5L20.5 20.5C20.6833 20.6833 20.775 20.9167 20.775 21.2C20.775 21.4833 20.6833 21.7167 20.5 21.9C20.3167 22.0833 20.0833 22.175 19.8 22.175C19.5167 22.175 19.2833 22.0833 19.1 21.9L18.2 21H5.00001ZM14.175 17L12.075 14.9L11.25 16L9.40001 13.525C9.30001 13.3917 9.16668 13.325 9.00001 13.325C8.83335 13.325 8.70001 13.3917 8.60001 13.525L6.60001 16.2C6.46668 16.3667 6.45001 16.5417 6.55001 16.725C6.65001 16.9083 6.80001 17 7.00001 17H14.175Z" })
    ]
  }
), vp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M11.6875 22L9.7375 17.1667L6 20.5V2L19 14.5833L13.9625 15.25L15.9125 20.1667L11.6875 22ZM10.3875 14.5833L12.5813 19.9167L13.9625 19.25L11.6875 14L15.5063 13.5L7.4625 5.66667V17.1667L10.3875 14.5833Z" })
    ]
  }
), bp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M9.47259 13.2703L8.37438 16.3514C8.28509 16.6036 8.14223 16.7973 7.94581 16.9324C7.74938 17.0676 7.52616 17.1351 7.27616 17.1351C6.86545 17.1351 6.53956 16.9595 6.29848 16.6081C6.05741 16.2568 6.00831 15.8829 6.15116 15.4865L10.8654 2.81081C10.9547 2.55856 11.1065 2.36036 11.3208 2.21622C11.5351 2.07207 11.7672 2 12.0172 2H12.9815C13.2494 2 13.486 2.07207 13.6913 2.21622C13.8967 2.36036 14.044 2.55856 14.1333 2.81081L18.8744 15.5135C19.0172 15.9099 18.9681 16.2793 18.7271 16.6216C18.486 16.964 18.1601 17.1351 17.7494 17.1351C17.4994 17.1351 17.2672 17.0631 17.0529 16.9189C16.8387 16.7748 16.6869 16.5766 16.5976 16.3243L15.5262 13.2703H9.47259ZM10.2494 11.0811H14.7494L12.5529 4.81081H12.4458L10.2494 11.0811Z" }),
      /* @__PURE__ */ i("path", { d: "M5.30804 21.6892C5.51339 21.8964 5.76786 22 6.07143 22H18.9286C19.2321 22 19.4866 21.8964 19.692 21.6892C19.8973 21.482 20 21.2252 20 20.9189C20 20.6126 19.8973 20.3559 19.692 20.1486C19.4866 19.9414 19.2321 19.8378 18.9286 19.8378H6.07143C5.76786 19.8378 5.51339 19.9414 5.30804 20.1486C5.10268 20.3559 5 20.6126 5 20.9189C5 21.2252 5.10268 21.482 5.30804 21.6892Z" })
    ]
  }
), Cp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M10 15C10.2833 15 10.5208 14.9042 10.7125 14.7125C10.9042 14.5208 11 14.2833 11 14V10C11 9.71667 10.9042 9.47917 10.7125 9.2875C10.5208 9.09583 10.2833 9 10 9C9.71667 9 9.47917 9.09583 9.2875 9.2875C9.09583 9.47917 9 9.71667 9 10V14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15ZM14 15C14.2833 15 14.5208 14.9042 14.7125 14.7125C14.9042 14.5208 15 14.2833 15 14V10C15 9.71667 14.9042 9.47917 14.7125 9.2875C14.5208 9.09583 14.2833 9 14 9C13.7167 9 13.4792 9.09583 13.2875 9.2875C13.0958 9.47917 13 9.71667 13 10V14C13 14.2833 13.0958 14.5208 13.2875 14.7125C13.4792 14.9042 13.7167 15 14 15ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 11.4667 2.04167 10.9333 2.125 10.4C2.20833 9.86667 2.33333 9.34167 2.5 8.825C2.58333 8.55833 2.75417 8.37917 3.0125 8.2875C3.27083 8.19583 3.51667 8.21667 3.75 8.35C4 8.48333 4.17917 8.67917 4.2875 8.9375C4.39583 9.19583 4.40833 9.46667 4.325 9.75C4.225 10.1167 4.14583 10.4875 4.0875 10.8625C4.02917 11.2375 4 11.6167 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C11.6 4 11.2042 4.02917 10.8125 4.0875C10.4208 4.14583 10.0333 4.23333 9.65 4.35C9.36667 4.43333 9.1 4.425 8.85 4.325C8.6 4.225 8.41667 4.05 8.3 3.8C8.18333 3.55 8.17917 3.29583 8.2875 3.0375C8.39583 2.77917 8.58333 2.60833 8.85 2.525C9.35 2.34167 9.86667 2.20833 10.4 2.125C10.9333 2.04167 11.4667 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM5.5 7C5.08333 7 4.72917 6.85417 4.4375 6.5625C4.14583 6.27083 4 5.91667 4 5.5C4 5.08333 4.14583 4.72917 4.4375 4.4375C4.72917 4.14583 5.08333 4 5.5 4C5.91667 4 6.27083 4.14583 6.5625 4.4375C6.85417 4.72917 7 5.08333 7 5.5C7 5.91667 6.85417 6.27083 6.5625 6.5625C6.27083 6.85417 5.91667 7 5.5 7ZM6 12C6 10.3333 6.58333 8.91667 7.75 7.75C8.91667 6.58333 10.3333 6 12 6C13.6667 6 15.0833 6.58333 16.25 7.75C17.4167 8.91667 18 10.3333 18 12C18 13.6667 17.4167 15.0833 16.25 16.25C15.0833 17.4167 13.6667 18 12 18C10.3333 18 8.91667 17.4167 7.75 16.25C6.58333 15.0833 6 13.6667 6 12Z" })
    ]
  }
), wp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM13 18H20V6H13V18ZM18.25 15C18.4667 15 18.6458 14.9292 18.7875 14.7875C18.9292 14.6458 19 14.4667 19 14.25C19 14.0333 18.9292 13.8542 18.7875 13.7125C18.6458 13.5708 18.4667 13.5 18.25 13.5H14.75C14.5333 13.5 14.3542 13.5708 14.2125 13.7125C14.0708 13.8542 14 14.0333 14 14.25C14 14.4667 14.0708 14.6458 14.2125 14.7875C14.3542 14.9292 14.5333 15 14.75 15H18.25ZM18.25 12.5C18.4667 12.5 18.6458 12.4292 18.7875 12.2875C18.9292 12.1458 19 11.9667 19 11.75C19 11.5333 18.9292 11.3542 18.7875 11.2125C18.6458 11.0708 18.4667 11 18.25 11H14.75C14.5333 11 14.3542 11.0708 14.2125 11.2125C14.0708 11.3542 14 11.5333 14 11.75C14 11.9667 14.0708 12.1458 14.2125 12.2875C14.3542 12.4292 14.5333 12.5 14.75 12.5H18.25ZM18.25 10C18.4667 10 18.6458 9.92917 18.7875 9.7875C18.9292 9.64583 19 9.46667 19 9.25C19 9.03333 18.9292 8.85417 18.7875 8.7125C18.6458 8.57083 18.4667 8.5 18.25 8.5H14.75C14.5333 8.5 14.3542 8.57083 14.2125 8.7125C14.0708 8.85417 14 9.03333 14 9.25C14 9.46667 14.0708 9.64583 14.2125 9.7875C14.3542 9.92917 14.5333 10 14.75 10H18.25Z" })
    ]
  }
), yp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M8.20101 12.3166L11.1558 9.36181C11.397 9.1206 11.6784 9 12 9C12.3216 9 12.603 9.1206 12.8442 9.36181L15.799 12.3166C16 12.5176 16.0503 12.7387 15.9497 12.9799C15.8492 13.2211 15.6583 13.3417 15.3769 13.3417L8.62312 13.3417C8.34171 13.3417 8.15075 13.2211 8.05025 12.9799C7.94975 12.7387 8 12.5176 8.20101 12.3166Z" }),
      /* @__PURE__ */ i("path", { d: "M2 13.5C2 12.6716 2.67157 12 3.5 12H20.5C21.3284 12 22 12.6716 22 13.5C22 14.3284 21.3284 15 20.5 15H3.5C2.67157 15 2 14.3284 2 13.5Z" })
    ]
  }
), _p = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M4.99999 7.84999L4.09999 8.72499C3.91665 8.90832 3.68749 8.99999 3.41249 8.99999C3.13749 8.99999 2.89999 8.89999 2.69999 8.69999C2.51665 8.51665 2.42499 8.28332 2.42499 7.99999C2.42499 7.71665 2.51665 7.48332 2.69999 7.29999L5.29999 4.69999C5.39999 4.59999 5.50832 4.52915 5.62499 4.48749C5.74165 4.44582 5.86665 4.42499 5.99999 4.42499C6.13332 4.42499 6.25832 4.44582 6.37499 4.48749C6.49165 4.52915 6.59999 4.59999 6.69999 4.69999L9.29999 7.29999C9.48332 7.48332 9.57915 7.71249 9.58749 7.98749C9.59582 8.26249 9.49999 8.49999 9.29999 8.69999C9.11665 8.88332 8.88749 8.97915 8.61249 8.98749C8.33749 8.99582 8.09999 8.90832 7.89999 8.72499L6.99999 7.84999V16.15L7.89999 15.275C8.08332 15.0917 8.31249 15 8.58749 15C8.86249 15 9.09999 15.1 9.29999 15.3C9.48332 15.4833 9.57499 15.7167 9.57499 16C9.57499 16.2833 9.48332 16.5167 9.29999 16.7L6.69999 19.3C6.59999 19.4 6.49165 19.4708 6.37499 19.5125C6.25832 19.5542 6.13332 19.575 5.99999 19.575C5.86665 19.575 5.74165 19.5542 5.62499 19.5125C5.50832 19.4708 5.39999 19.4 5.29999 19.3L2.69999 16.7C2.51665 16.5167 2.42082 16.2875 2.41249 16.0125C2.40415 15.7375 2.49999 15.5 2.69999 15.3C2.88332 15.1167 3.11249 15.0208 3.38749 15.0125C3.66249 15.0042 3.89999 15.0917 4.09999 15.275L4.99999 16.15V7.84999ZM13 19C12.7167 19 12.4792 18.9042 12.2875 18.7125C12.0958 18.5208 12 18.2833 12 18C12 17.7167 12.0958 17.4792 12.2875 17.2875C12.4792 17.0958 12.7167 17 13 17H21C21.2833 17 21.5208 17.0958 21.7125 17.2875C21.9042 17.4792 22 17.7167 22 18C22 18.2833 21.9042 18.5208 21.7125 18.7125C21.5208 18.9042 21.2833 19 21 19H13ZM13 13C12.7167 13 12.4792 12.9042 12.2875 12.7125C12.0958 12.5208 12 12.2833 12 12C12 11.7167 12.0958 11.4792 12.2875 11.2875C12.4792 11.0958 12.7167 11 13 11H21C21.2833 11 21.5208 11.0958 21.7125 11.2875C21.9042 11.4792 22 11.7167 22 12C22 12.2833 21.9042 12.5208 21.7125 12.7125C21.5208 12.9042 21.2833 13 21 13H13ZM13 6.99999C12.7167 6.99999 12.4792 6.90415 12.2875 6.71249C12.0958 6.52082 12 6.28332 12 5.99999C12 5.71665 12.0958 5.47915 12.2875 5.28749C12.4792 5.09582 12.7167 4.99999 13 4.99999H21C21.2833 4.99999 21.5208 5.09582 21.7125 5.28749C21.9042 5.47915 22 5.71665 22 5.99999C22 6.28332 21.9042 6.52082 21.7125 6.71249C21.5208 6.90415 21.2833 6.99999 21 6.99999H13Z" })
    ]
  }
), Ta = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M10.6 13.8L8.45 11.65C8.26667 11.4667 8.03333 11.375 7.75 11.375C7.46667 11.375 7.23333 11.4667 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.1 16.1 10.3333 16.2 10.6 16.2C10.8667 16.2 11.1 16.1 11.3 15.9L16.95 10.25C17.1333 10.0667 17.225 9.83333 17.225 9.55C17.225 9.26667 17.1333 9.03333 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z" })
    ]
  }
), xp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M9.54999 15.15L18.025 6.675C18.225 6.475 18.4583 6.375 18.725 6.375C18.9917 6.375 19.225 6.475 19.425 6.675C19.625 6.875 19.725 7.1125 19.725 7.3875C19.725 7.6625 19.625 7.9 19.425 8.1L10.25 17.3C10.05 17.5 9.81666 17.6 9.54999 17.6C9.28333 17.6 9.04999 17.5 8.84999 17.3L4.54999 13C4.34999 12.8 4.25416 12.5625 4.26249 12.2875C4.27083 12.0125 4.37499 11.775 4.57499 11.575C4.77499 11.375 5.01249 11.275 5.28749 11.275C5.56249 11.275 5.79999 11.375 5.99999 11.575L9.54999 15.15Z" })
    ]
  }
), Kt = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M18.3 5.70998C18.2075 5.61727 18.0976 5.54372 17.9766 5.49354C17.8557 5.44336 17.726 5.41753 17.595 5.41753C17.464 5.41753 17.3343 5.44336 17.2134 5.49354C17.0924 5.54372 16.9825 5.61727 16.89 5.70998L12 10.59L7.11 5.69998C7.01749 5.60727 6.9076 5.53372 6.78663 5.48354C6.66565 5.43336 6.53597 5.40753 6.405 5.40753C6.27403 5.40753 6.14435 5.43336 6.02338 5.48354C5.9024 5.53372 5.79251 5.60727 5.7 5.69998C5.31 6.08998 5.31 6.71998 5.7 7.10998L10.59 12L5.7 16.89C5.31 17.28 5.31 17.91 5.7 18.3C6.09 18.69 6.72 18.69 7.11 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10998C18.68 6.72998 18.68 6.08998 18.3 5.70998Z" })
    ]
  }
), Wc = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M12 21C9.9 21 8.04167 20.3625 6.425 19.0875C4.80833 17.8125 3.75833 16.1833 3.275 14.2C3.20833 13.95 3.25833 13.7208 3.425 13.5125C3.59167 13.3042 3.81667 13.1833 4.1 13.15C4.36667 13.1167 4.60833 13.1667 4.825 13.3C5.04167 13.4333 5.19167 13.6333 5.275 13.9C5.675 15.4 6.5 16.625 7.75 17.575C9 18.525 10.4167 19 12 19C13.95 19 15.6042 18.3208 16.9625 16.9625C18.3208 15.6042 19 13.95 19 12C19 10.05 18.3208 8.39583 16.9625 7.0375C15.6042 5.67917 13.95 5 12 5C10.85 5 9.775 5.26667 8.775 5.8C7.775 6.33333 6.93333 7.06667 6.25 8H8C8.28333 8 8.52083 8.09583 8.7125 8.2875C8.90417 8.47917 9 8.71667 9 9C9 9.28333 8.90417 9.52083 8.7125 9.7125C8.52083 9.90417 8.28333 10 8 10H4C3.71667 10 3.47917 9.90417 3.2875 9.7125C3.09583 9.52083 3 9.28333 3 9V5C3 4.71667 3.09583 4.47917 3.2875 4.2875C3.47917 4.09583 3.71667 4 4 4C4.28333 4 4.52083 4.09583 4.7125 4.2875C4.90417 4.47917 5 4.71667 5 5V6.35C5.85 5.28333 6.8875 4.45833 8.1125 3.875C9.3375 3.29167 10.6333 3 12 3C13.25 3 14.4208 3.2375 15.5125 3.7125C16.6042 4.1875 17.5542 4.82917 18.3625 5.6375C19.1708 6.44583 19.8125 7.39583 20.2875 8.4875C20.7625 9.57917 21 10.75 21 12C21 13.25 20.7625 14.4208 20.2875 15.5125C19.8125 16.6042 19.1708 17.5542 18.3625 18.3625C17.5542 19.1708 16.6042 19.8125 15.5125 20.2875C14.4208 20.7625 13.25 21 12 21Z" })
    ]
  }
), kp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M11 18.15V15C11 14.7167 11.0958 14.4792 11.2875 14.2875C11.4792 14.0959 11.7167 14 12 14C12.2833 14 12.5208 14.0959 12.7125 14.2875C12.9042 14.4792 13 14.7167 13 15V18.125L14.075 17.025C14.275 16.825 14.5167 16.725 14.8 16.725C15.0833 16.725 15.325 16.825 15.525 17.025C15.725 17.225 15.825 17.4667 15.825 17.75C15.825 18.0334 15.725 18.275 15.525 18.475L12.7 21.3C12.6 21.4 12.4917 21.4709 12.375 21.5125C12.2583 21.5542 12.1333 21.575 12 21.575C11.8667 21.575 11.7417 21.5542 11.625 21.5125C11.5083 21.4709 11.4 21.4 11.3 21.3L8.44999 18.45C8.24999 18.25 8.15415 18.0125 8.16249 17.7375C8.17082 17.4625 8.27499 17.225 8.47499 17.025C8.67499 16.825 8.91249 16.725 9.18749 16.725C9.46249 16.725 9.69999 16.825 9.89999 17.025L11 18.15ZM5.87499 13L6.97499 14.075C7.17499 14.275 7.27499 14.5167 7.27499 14.8C7.27499 15.0834 7.17499 15.325 6.97499 15.525C6.77499 15.725 6.53332 15.825 6.24999 15.825C5.96665 15.825 5.72499 15.725 5.52499 15.525L2.69999 12.7C2.59999 12.6 2.52915 12.4917 2.48749 12.375C2.44582 12.2584 2.42499 12.1334 2.42499 12C2.42499 11.8667 2.44582 11.7417 2.48749 11.625C2.52915 11.5084 2.59999 11.4 2.69999 11.3L5.52499 8.47505C5.72499 8.27505 5.96249 8.17505 6.23749 8.17505C6.51249 8.17505 6.74999 8.27505 6.94999 8.47505C7.14999 8.67505 7.24999 8.91255 7.24999 9.18755C7.24999 9.46255 7.14999 9.70005 6.94999 9.90005L5.84999 11H8.99999C9.28332 11 9.52082 11.0959 9.71249 11.2875C9.90415 11.4792 9.99999 11.7167 9.99999 12C9.99999 12.2834 9.90415 12.5209 9.71249 12.7125C9.52082 12.9042 9.28332 13 8.99999 13H5.87499ZM18.15 13H15C14.7167 13 14.4792 12.9042 14.2875 12.7125C14.0958 12.5209 14 12.2834 14 12C14 11.7167 14.0958 11.4792 14.2875 11.2875C14.4792 11.0959 14.7167 11 15 11H18.125L17.025 9.92505C16.825 9.72505 16.725 9.48338 16.725 9.20005C16.725 8.91672 16.825 8.67505 17.025 8.47505C17.225 8.27505 17.4667 8.17505 17.75 8.17505C18.0333 8.17505 18.275 8.27505 18.475 8.47505L21.3 11.3C21.4 11.4 21.4708 11.5084 21.5125 11.625C21.5542 11.7417 21.575 11.8667 21.575 12C21.575 12.1334 21.5542 12.2584 21.5125 12.375C21.4708 12.4917 21.4 12.6 21.3 12.7L18.45 15.55C18.25 15.75 18.0167 15.8459 17.75 15.8375C17.4833 15.8292 17.25 15.725 17.05 15.525C16.85 15.325 16.75 15.0875 16.75 14.8125C16.75 14.5375 16.85 14.3 17.05 14.1L18.15 13ZM11 5.85005L9.87499 6.97505C9.67499 7.17505 9.44165 7.27505 9.17499 7.27505C8.90832 7.27505 8.67499 7.17505 8.47499 6.97505C8.27499 6.77505 8.17499 6.53755 8.17499 6.26255C8.17499 5.98755 8.27499 5.75005 8.47499 5.55005L11.3 2.70005C11.4 2.60005 11.5083 2.52922 11.625 2.48755C11.7417 2.44588 11.8667 2.42505 12 2.42505C12.1333 2.42505 12.2583 2.44588 12.375 2.48755C12.4917 2.52922 12.6 2.60005 12.7 2.70005L15.55 5.55005C15.75 5.75005 15.85 5.98338 15.85 6.25005C15.85 6.51672 15.75 6.75005 15.55 6.95005C15.35 7.15005 15.1125 7.25005 14.8375 7.25005C14.5625 7.25005 14.325 7.15005 14.125 6.95005L13 5.85005V9.00005C13 9.28338 12.9042 9.52088 12.7125 9.71255C12.5208 9.90422 12.2833 10 12 10C11.7167 10 11.4792 9.90422 11.2875 9.71255C11.0958 9.52088 11 9.28338 11 9.00005V5.85005Z" })
    ]
  }
), Ap = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M10.825 22C10.375 22 9.98751 21.85 9.66251 21.55C9.33751 21.25 9.14168 20.8833 9.07501 20.45L8.85001 18.8C8.63334 18.7167 8.42918 18.6167 8.23751 18.5C8.04584 18.3833 7.85834 18.2583 7.67501 18.125L6.12501 18.775C5.70834 18.9583 5.29168 18.975 4.87501 18.825C4.45834 18.675 4.13334 18.4083 3.90001 18.025L2.72501 15.975C2.49168 15.5917 2.42501 15.1833 2.52501 14.75C2.62501 14.3167 2.85001 13.9583 3.20001 13.675L4.52501 12.675C4.50834 12.5583 4.50001 12.4458 4.50001 12.3375V11.6625C4.50001 11.5542 4.50834 11.4417 4.52501 11.325L3.20001 10.325C2.85001 10.0417 2.62501 9.68333 2.52501 9.25C2.42501 8.81667 2.49168 8.40833 2.72501 8.025L3.90001 5.975C4.13334 5.59167 4.45834 5.325 4.87501 5.175C5.29168 5.025 5.70834 5.04167 6.12501 5.225L7.67501 5.875C7.85834 5.74167 8.05001 5.61667 8.25001 5.5C8.45001 5.38333 8.65001 5.28333 8.85001 5.2L9.07501 3.55C9.14168 3.11667 9.33751 2.75 9.66251 2.45C9.98751 2.15 10.375 2 10.825 2H13.175C13.625 2 14.0125 2.15 14.3375 2.45C14.6625 2.75 14.8583 3.11667 14.925 3.55L15.15 5.2C15.3667 5.28333 15.5708 5.38333 15.7625 5.5C15.9542 5.61667 16.1417 5.74167 16.325 5.875L17.875 5.225C18.2917 5.04167 18.7083 5.025 19.125 5.175C19.5417 5.325 19.8667 5.59167 20.1 5.975L21.275 8.025C21.5083 8.40833 21.575 8.81667 21.475 9.25C21.375 9.68333 21.15 10.0417 20.8 10.325L19.475 11.325C19.4917 11.4417 19.5 11.5542 19.5 11.6625V12.3375C19.5 12.4458 19.4833 12.5583 19.45 12.675L20.775 13.675C21.125 13.9583 21.35 14.3167 21.45 14.75C21.55 15.1833 21.4833 15.5917 21.25 15.975L20.05 18.025C19.8167 18.4083 19.4917 18.675 19.075 18.825C18.6583 18.975 18.2417 18.9583 17.825 18.775L16.325 18.125C16.1417 18.2583 15.95 18.3833 15.75 18.5C15.55 18.6167 15.35 18.7167 15.15 18.8L14.925 20.45C14.8583 20.8833 14.6625 21.25 14.3375 21.55C14.0125 21.85 13.625 22 13.175 22H10.825ZM11 20H12.975L13.325 17.35C13.8417 17.2167 14.3208 17.0208 14.7625 16.7625C15.2042 16.5042 15.6083 16.1917 15.975 15.825L18.45 16.85L19.425 15.15L17.275 13.525C17.3583 13.2917 17.4167 13.0458 17.45 12.7875C17.4833 12.5292 17.5 12.2667 17.5 12C17.5 11.7333 17.4833 11.4708 17.45 11.2125C17.4167 10.9542 17.3583 10.7083 17.275 10.475L19.425 8.85L18.45 7.15L15.975 8.2C15.6083 7.81667 15.2042 7.49583 14.7625 7.2375C14.3208 6.97917 13.8417 6.78333 13.325 6.65L13 4H11.025L10.675 6.65C10.1583 6.78333 9.67918 6.97917 9.23751 7.2375C8.79584 7.49583 8.39168 7.80833 8.02501 8.175L5.55001 7.15L4.57501 8.85L6.72501 10.45C6.64168 10.7 6.58334 10.95 6.55001 11.2C6.51668 11.45 6.50001 11.7167 6.50001 12C6.50001 12.2667 6.51668 12.525 6.55001 12.775C6.58334 13.025 6.64168 13.275 6.72501 13.525L4.57501 15.15L5.55001 16.85L8.02501 15.8C8.39168 16.1833 8.79584 16.5042 9.23751 16.7625C9.67918 17.0208 10.1583 17.2167 10.675 17.35L11 20ZM12.05 15.5C13.0167 15.5 13.8417 15.1583 14.525 14.475C15.2083 13.7917 15.55 12.9667 15.55 12C15.55 11.0333 15.2083 10.2083 14.525 9.525C13.8417 8.84167 13.0167 8.5 12.05 8.5C11.0667 8.5 10.2375 8.84167 9.56251 9.525C8.88751 10.2083 8.55001 11.0333 8.55001 12C8.55001 12.9667 8.88751 13.7917 9.56251 14.475C10.2375 15.1583 11.0667 15.5 12.05 15.5Z" })
    ]
  }
), Zo = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M23 9.00002C23 10.15 22.7958 11.2458 22.3875 12.2875C21.9792 13.3292 21.425 14.275 20.725 15.125C20.525 15.3583 20.275 15.4833 19.975 15.5C19.675 15.5167 19.4083 15.4083 19.175 15.175C18.9583 14.9583 18.8583 14.7 18.875 14.4C18.8917 14.1 18.9917 13.825 19.175 13.575C19.675 12.9417 20.0625 12.2333 20.3375 11.45C20.6125 10.6667 20.75 9.85002 20.75 9.00002C20.75 8.15002 20.6125 7.34168 20.3375 6.57502C20.0625 5.80835 19.675 5.10835 19.175 4.47502C18.975 4.22502 18.8708 3.95002 18.8625 3.65002C18.8542 3.35002 18.9583 3.08335 19.175 2.85002C19.3917 2.61668 19.6542 2.50418 19.9625 2.51252C20.2708 2.52085 20.525 2.64168 20.725 2.87502C21.425 3.72502 21.9792 4.67085 22.3875 5.71252C22.7958 6.75418 23 7.85002 23 9.00002ZM18.45 9.00002C18.45 9.53335 18.3667 10.0458 18.2 10.5375C18.0333 11.0292 17.8 11.4833 17.5 11.9C17.3167 12.15 17.0708 12.2792 16.7625 12.2875C16.4542 12.2958 16.1833 12.1833 15.95 11.95C15.7333 11.7333 15.6208 11.4708 15.6125 11.1625C15.6042 10.8542 15.675 10.5583 15.825 10.275C15.925 10.0917 16.0042 9.89168 16.0625 9.67502C16.1208 9.45835 16.15 9.23335 16.15 9.00002C16.15 8.76668 16.1208 8.54168 16.0625 8.32502C16.0042 8.10835 15.925 7.90002 15.825 7.70002C15.675 7.41668 15.6042 7.12502 15.6125 6.82502C15.6208 6.52502 15.7333 6.26668 15.95 6.05002C16.1833 5.81668 16.4542 5.70418 16.7625 5.71252C17.0708 5.72085 17.3167 5.85002 17.5 6.10002C17.8 6.51668 18.0333 6.97085 18.2 7.46252C18.3667 7.95418 18.45 8.46668 18.45 9.00002ZM9 13C7.9 13 6.95833 12.6083 6.175 11.825C5.39167 11.0417 5 10.1 5 9.00002C5 7.90002 5.39167 6.95835 6.175 6.17502C6.95833 5.39168 7.9 5.00002 9 5.00002C10.1 5.00002 11.0417 5.39168 11.825 6.17502C12.6083 6.95835 13 7.90002 13 9.00002C13 10.1 12.6083 11.0417 11.825 11.825C11.0417 12.6083 10.1 13 9 13ZM1 19V18.2C1 17.65 1.14167 17.1333 1.425 16.65C1.70833 16.1667 2.1 15.8 2.6 15.55C3.45 15.1167 4.40833 14.75 5.475 14.45C6.54167 14.15 7.71667 14 9 14C10.2833 14 11.4583 14.15 12.525 14.45C13.5917 14.75 14.55 15.1167 15.4 15.55C15.9 15.8 16.2917 16.1667 16.575 16.65C16.8583 17.1333 17 17.65 17 18.2V19C17 19.55 16.8042 20.0208 16.4125 20.4125C16.0208 20.8042 15.55 21 15 21H3C2.45 21 1.97917 20.8042 1.5875 20.4125C1.19583 20.0208 1 19.55 1 19Z" })
    ]
  }
), Xc = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M7 17C5.61667 17 4.4375 16.5125 3.4625 15.5375C2.4875 14.5625 2 13.3833 2 12C2 10.6167 2.4875 9.4375 3.4625 8.4625C4.4375 7.4875 5.61667 7 7 7H10C10.2833 7 10.5208 7.09583 10.7125 7.2875C10.9042 7.47917 11 7.71667 11 8C11 8.28333 10.9042 8.52083 10.7125 8.7125C10.5208 8.90417 10.2833 9 10 9H7C6.16667 9 5.45833 9.29167 4.875 9.875C4.29167 10.4583 4 11.1667 4 12C4 12.8333 4.29167 13.5417 4.875 14.125C5.45833 14.7083 6.16667 15 7 15H10C10.2833 15 10.5208 15.0958 10.7125 15.2875C10.9042 15.4792 11 15.7167 11 16C11 16.2833 10.9042 16.5208 10.7125 16.7125C10.5208 16.9042 10.2833 17 10 17H7ZM9 13C8.71667 13 8.47917 12.9042 8.2875 12.7125C8.09583 12.5208 8 12.2833 8 12C8 11.7167 8.09583 11.4792 8.2875 11.2875C8.47917 11.0958 8.71667 11 9 11H15C15.2833 11 15.5208 11.0958 15.7125 11.2875C15.9042 11.4792 16 11.7167 16 12C16 12.2833 15.9042 12.5208 15.7125 12.7125C15.5208 12.9042 15.2833 13 15 13H9ZM14 17C13.7167 17 13.4792 16.9042 13.2875 16.7125C13.0958 16.5208 13 16.2833 13 16C13 15.7167 13.0958 15.4792 13.2875 15.2875C13.4792 15.0958 13.7167 15 14 15H17C17.8333 15 18.5417 14.7083 19.125 14.125C19.7083 13.5417 20 12.8333 20 12C20 11.1667 19.7083 10.4583 19.125 9.875C18.5417 9.29167 17.8333 9 17 9H14C13.7167 9 13.4792 8.90417 13.2875 8.7125C13.0958 8.52083 13 8.28333 13 8C13 7.71667 13.0958 7.47917 13.2875 7.2875C13.4792 7.09583 13.7167 7 14 7H17C18.3833 7 19.5625 7.4875 20.5375 8.4625C21.5125 9.4375 22 10.6167 22 12C22 13.3833 21.5125 14.5625 20.5375 15.5375C19.5625 16.5125 18.3833 17 17 17H14Z" })
    ]
  }
), Ep = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M10.475 22C10.0083 22 9.57082 21.9 9.16249 21.7C8.75416 21.5 8.40832 21.2167 8.12499 20.85L3.09999 14.475C2.96666 14.325 2.90832 14.1458 2.92499 13.9375C2.94166 13.7292 3.01666 13.5583 3.14999 13.425C3.48332 13.075 3.88332 12.8667 4.34999 12.8C4.81666 12.7333 5.24999 12.825 5.64999 13.075L7.49999 14.2V6C7.49999 5.71667 7.59582 5.47917 7.78749 5.2875C7.97916 5.09583 8.21666 5 8.49999 5C8.78332 5 9.02499 5.09583 9.22499 5.2875C9.42499 5.47917 9.52499 5.71667 9.52499 6V11H17C17.8333 11 18.5417 11.2917 19.125 11.875C19.7083 12.4583 20 13.1667 20 14V18C20 19.1 19.6083 20.0417 18.825 20.825C18.0417 21.6083 17.1 22 16 22H10.475ZM11.975 9C11.6917 9 11.4542 8.90417 11.2625 8.7125C11.0708 8.52083 10.975 8.28333 10.975 8C10.975 7.96667 11.0167 7.8 11.1 7.5C11.2333 7.26667 11.3333 7.02917 11.4 6.7875C11.4667 6.54583 11.5 6.28333 11.5 6C11.5 5.16667 11.2083 4.45833 10.625 3.875C10.0417 3.29167 9.33332 3 8.49999 3C7.66666 3 6.95832 3.29167 6.37499 3.875C5.79166 4.45833 5.49999 5.16667 5.49999 6C5.49999 6.28333 5.53332 6.54583 5.59999 6.7875C5.66666 7.02917 5.76666 7.26667 5.89999 7.5C5.94999 7.58333 5.98332 7.66667 5.99999 7.75C6.01666 7.83333 6.02499 7.91667 6.02499 8C6.02499 8.28333 5.93332 8.52083 5.74999 8.7125C5.56666 8.90417 5.33332 9 5.04999 9C4.86666 9 4.69582 8.95 4.53749 8.85C4.37916 8.75 4.25832 8.625 4.17499 8.475C3.95832 8.10833 3.79166 7.71667 3.67499 7.3C3.55832 6.88333 3.49999 6.45 3.49999 6C3.49999 4.61667 3.98749 3.4375 4.96249 2.4625C5.93749 1.4875 7.11666 1 8.49999 1C9.88332 1 11.0625 1.4875 12.0375 2.4625C13.0125 3.4375 13.5 4.61667 13.5 6C13.5 6.45 13.4417 6.88333 13.325 7.3C13.2083 7.71667 13.0417 8.10833 12.825 8.475C12.7417 8.625 12.625 8.75 12.475 8.85C12.325 8.95 12.1583 9 11.975 9Z" })
    ]
  }
), Yc = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M13 17.05C13.7333 16.7 14.4708 16.4375 15.2125 16.2625C15.9542 16.0875 16.7167 16 17.5 16C18.1 16 18.6875 16.05 19.2625 16.15C19.8375 16.25 20.4167 16.4 21 16.6V6.7C20.45 6.46667 19.8792 6.29167 19.2875 6.175C18.6958 6.05833 18.1 6 17.5 6C16.7167 6 15.9417 6.1 15.175 6.3C14.4083 6.5 13.6833 6.8 13 7.2V17.05ZM12 19.475C11.7667 19.475 11.5458 19.4458 11.3375 19.3875C11.1292 19.3292 10.9333 19.25 10.75 19.15C10.1 18.7667 9.41667 18.4792 8.7 18.2875C7.98333 18.0958 7.25 18 6.5 18C5.8 18 5.1125 18.0917 4.4375 18.275C3.7625 18.4583 3.11667 18.7167 2.5 19.05C2.15 19.2333 1.8125 19.225 1.4875 19.025C1.1625 18.825 1 18.5333 1 18.15V6.1C1 5.91667 1.04583 5.74167 1.1375 5.575C1.22917 5.40833 1.36667 5.28333 1.55 5.2C2.33333 4.81667 3.1375 4.52083 3.9625 4.3125C4.7875 4.10417 5.63333 4 6.5 4C7.46667 4 8.4125 4.125 9.3375 4.375C10.2625 4.625 11.15 5 12 5.5C12.85 5 13.7375 4.625 14.6625 4.375C15.5875 4.125 16.5333 4 17.5 4C18.3667 4 19.2125 4.10417 20.0375 4.3125C20.8625 4.52083 21.6667 4.81667 22.45 5.2C22.6333 5.28333 22.7708 5.40833 22.8625 5.575C22.9542 5.74167 23 5.91667 23 6.1V18.15C23 18.5333 22.8375 18.825 22.5125 19.025C22.1875 19.225 21.85 19.2333 21.5 19.05C20.8833 18.7167 20.2375 18.4583 19.5625 18.275C18.8875 18.0917 18.2 18 17.5 18C16.75 18 16.0167 18.0958 15.3 18.2875C14.5833 18.4792 13.9 18.7667 13.25 19.15C13.0667 19.25 12.8708 19.3292 12.6625 19.3875C12.4542 19.4458 12.2333 19.475 12 19.475ZM14 8.775C14 8.625 14.0542 8.47083 14.1625 8.3125C14.2708 8.15417 14.3917 8.05 14.525 8C15.0083 7.83333 15.4917 7.70833 15.975 7.625C16.4583 7.54167 16.9667 7.5 17.5 7.5C17.8333 7.5 18.1625 7.52083 18.4875 7.5625C18.8125 7.60417 19.1333 7.65833 19.45 7.725C19.6 7.75833 19.7292 7.84167 19.8375 7.975C19.9458 8.10833 20 8.25833 20 8.425C20 8.70833 19.9083 8.91667 19.725 9.05C19.5417 9.18333 19.3083 9.21667 19.025 9.15C18.7917 9.1 18.5458 9.0625 18.2875 9.0375C18.0292 9.0125 17.7667 9 17.5 9C17.0667 9 16.6417 9.04167 16.225 9.125C15.8083 9.20833 15.4083 9.31667 15.025 9.45C14.725 9.56667 14.4792 9.55833 14.2875 9.425C14.0958 9.29167 14 9.075 14 8.775ZM14 14.275C14 14.125 14.0542 13.9708 14.1625 13.8125C14.2708 13.6542 14.3917 13.55 14.525 13.5C15.0083 13.3333 15.4917 13.2083 15.975 13.125C16.4583 13.0417 16.9667 13 17.5 13C17.8333 13 18.1625 13.0208 18.4875 13.0625C18.8125 13.1042 19.1333 13.1583 19.45 13.225C19.6 13.2583 19.7292 13.3417 19.8375 13.475C19.9458 13.6083 20 13.7583 20 13.925C20 14.2083 19.9083 14.4167 19.725 14.55C19.5417 14.6833 19.3083 14.7167 19.025 14.65C18.7917 14.6 18.5458 14.5625 18.2875 14.5375C18.0292 14.5125 17.7667 14.5 17.5 14.5C17.0667 14.5 16.6417 14.5375 16.225 14.6125C15.8083 14.6875 15.4083 14.7917 15.025 14.925C14.725 15.0417 14.4792 15.0375 14.2875 14.9125C14.0958 14.7875 14 14.575 14 14.275ZM14 11.525C14 11.375 14.0542 11.2208 14.1625 11.0625C14.2708 10.9042 14.3917 10.8 14.525 10.75C15.0083 10.5833 15.4917 10.4583 15.975 10.375C16.4583 10.2917 16.9667 10.25 17.5 10.25C17.8333 10.25 18.1625 10.2708 18.4875 10.3125C18.8125 10.3542 19.1333 10.4083 19.45 10.475C19.6 10.5083 19.7292 10.5917 19.8375 10.725C19.9458 10.8583 20 11.0083 20 11.175C20 11.4583 19.9083 11.6667 19.725 11.8C19.5417 11.9333 19.3083 11.9667 19.025 11.9C18.7917 11.85 18.5458 11.8125 18.2875 11.7875C18.0292 11.7625 17.7667 11.75 17.5 11.75C17.0667 11.75 16.6417 11.7917 16.225 11.875C15.8083 11.9583 15.4083 12.0667 15.025 12.2C14.725 12.3167 14.4792 12.3083 14.2875 12.175C14.0958 12.0417 14 11.825 14 11.525Z" })
    ]
  }
), Ra = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M7.74687 1.00812C7.66942 1.02044 7.51497 1.11665 7.40368 1.22196C7.20272 1.41219 7.20164 1.41645 7.24371 1.87875C7.26705 2.1347 7.31392 2.69232 7.34776 3.11796C7.61178 6.43593 7.65513 7.42951 7.53904 7.5022C7.34378 7.62448 7.23611 7.43996 5.4151 3.86266C4.79087 2.63635 4.67189 2.50711 4.2859 2.63614C3.67367 2.84085 3.72185 3.15023 4.69994 5.29459C4.82544 5.56968 4.92804 5.80618 4.92804 5.82021C4.92804 5.83432 5.03816 6.08815 5.17297 6.38423C5.90324 7.98987 6.09352 8.6429 5.85782 8.73457C5.69079 8.79947 5.39329 8.63804 5.14872 8.34994C5.02431 8.20336 4.87122 8.02534 4.80861 7.95439C4.7459 7.88354 4.56811 7.66583 4.41348 7.47076C4.25885 7.27569 4.11761 7.10162 4.0996 7.08383C4.0816 7.06614 3.78704 6.71341 3.4451 6.29999C3.10309 5.88657 2.77897 5.53109 2.72474 5.51001C2.41291 5.38882 2 5.62798 2 5.92975C2 6.1932 2.62513 7.25305 3.92633 9.19547C4.74183 10.4127 4.93347 10.851 5.11805 11.9204C5.50893 14.1859 6.04086 15.5747 6.72906 16.1271C7.19756 16.5032 7.21077 16.506 8.31382 16.4582L9.32404 16.4145L10.0917 15.3766C10.5139 14.8057 10.8924 14.2951 10.9331 14.2418C11.2275 13.8553 11.9934 12.4858 11.9934 12.346C11.9934 12.326 11.5954 12.3281 11.1089 12.3505C10.51 12.3781 10.0939 12.3655 9.81996 12.3116C9.34503 12.2179 8.74686 11.9422 8.41869 11.6655C7.90078 11.2289 7.74859 10.454 8.07143 9.89599C8.31256 9.47909 8.64688 9.30024 9.34964 9.21197C9.91759 9.14074 10.5252 8.97299 11.4046 8.64492L11.8661 8.47277V7.71973C11.8661 6.94826 12.0114 4.25775 12.1217 2.98899C12.2083 1.99134 12.2097 2.00218 11.968 1.75726C11.8009 1.58811 11.6985 1.53801 11.5195 1.53801C11.0687 1.53801 11.0441 1.60107 10.5976 3.89255C10.3765 5.02711 10.1557 6.18752 10.1069 6.47123C10.0003 7.09053 9.9166 7.31878 9.77581 7.3735C9.59186 7.44509 9.41968 7.15323 9.33698 6.62999C9.29518 6.36535 9.18624 5.66997 9.09485 5.08477C8.92565 4.00081 8.58735 1.97013 8.51505 1.60372C8.47162 1.38388 8.1867 1.05499 8.00266 1.01237C7.93951 0.99773 7.82441 0.995796 7.74687 1.00812ZM16.2263 7.64538C15.9431 7.71349 15.12 8.01544 14.7447 8.18897C14.5251 8.29054 14.3287 8.37358 14.3083 8.37358C14.288 8.37358 13.7516 8.63383 13.1164 8.952C11.7752 9.62364 10.2221 10.1791 9.68469 10.1793C9.31526 10.1794 8.91769 10.3451 8.88702 10.5115C8.85291 10.6978 9.23971 11.0663 9.62615 11.2154C9.9688 11.3476 10.0583 11.3531 11.2858 11.3164C12.3829 11.2837 12.6156 11.2932 12.7917 11.3779C13.0946 11.5234 13.1779 11.7716 13.0775 12.2305C12.9753 12.6983 12.4059 13.8553 11.947 14.5277C11.6488 14.9647 9.87371 17.3579 8.84259 18.7132C8.47461 19.197 8.45814 19.4434 8.77256 19.762C9.17981 20.1745 9.12724 20.2112 11.3156 17.9827C13.3582 15.9029 13.5287 15.7665 13.6211 16.1396C13.6772 16.3662 13.6901 16.3331 12.782 18.2958C12.6283 18.6278 12.5026 18.9087 12.5026 18.9198C12.5026 18.9309 12.3989 19.167 12.2723 19.4445C11.2318 21.7231 11.1894 21.8762 11.4905 22.2639C11.5982 22.4027 11.6723 22.4313 11.9185 22.4297C12.0822 22.4286 12.2603 22.3923 12.3142 22.349C12.3682 22.3058 12.6808 21.7772 13.009 21.1742C13.584 20.1178 13.9216 19.5059 14.2076 19.0011C15.2641 17.1362 15.2589 17.1438 15.4502 17.1438C15.5724 17.1438 15.5758 17.1739 15.538 17.9338C15.5035 18.6276 15.4165 19.4544 15.1769 21.3677C15.0863 22.09 15.0979 22.6972 15.2049 22.8402C15.3309 23.0086 15.7683 23.0562 15.9687 22.9233C16.1743 22.7867 16.2702 22.4417 16.5086 20.9808C17.0134 17.8841 17.14 17.2951 17.34 17.1118C17.4632 16.9988 17.472 16.9989 17.6007 17.1169C17.6739 17.1841 17.7601 17.2887 17.7921 17.3494C17.8242 17.41 17.9206 18.1358 18.0065 18.9623C18.2479 21.2883 18.2687 21.4088 18.4576 21.5773C18.6664 21.7635 18.8796 21.7613 19.0981 21.571C19.2645 21.426 19.2741 21.3836 19.3292 20.5554C19.3608 20.08 19.3739 19.1397 19.3582 18.4657C19.3278 17.1534 19.3875 16.0546 19.5099 15.6715C19.5515 15.5414 19.7501 15.0432 19.9513 14.5643C20.1526 14.0855 20.4383 13.3165 20.5862 12.8554C21.0422 11.4342 21.0078 10.2932 20.4931 9.76903C20.3838 9.65775 20.0548 9.43637 19.7619 9.27714C19.3877 9.07383 19.0357 8.80332 18.5784 8.36772C18.056 7.87024 17.8702 7.73311 17.6375 7.67371C17.3547 7.60166 16.4811 7.58406 16.2263 7.64538ZM21.1923 9.53069C21.1675 9.60989 21.2138 9.82614 21.3071 10.0665C21.5134 10.5978 21.5604 11.0656 21.4707 11.6947C21.3551 12.5054 21.3599 12.5943 21.5214 12.6176C21.7393 12.649 21.8504 12.3982 21.9315 11.6911C22.0198 10.9209 21.9423 10.334 21.6807 9.79231C21.4926 9.40282 21.2697 9.28347 21.1923 9.53069ZM22.3483 9.75326C22.3295 9.80267 22.372 10.0276 22.4425 10.253C22.6088 10.7841 22.5769 11.6232 22.366 12.2625C22.234 12.6626 22.2301 12.7103 22.3218 12.8033C22.5391 13.0235 22.7617 12.7194 22.9131 11.9954C23.0736 11.2284 23.006 10.2756 22.7576 9.80542C22.6731 9.64546 22.4022 9.6109 22.3483 9.75326ZM4.7516 15.2847C4.6205 15.4175 4.66339 15.6069 4.9389 16.112C5.4065 16.9693 6.53615 17.9508 6.7999 17.7292C6.98675 17.5721 6.91282 17.4272 6.5205 17.1819C6.03028 16.8754 5.59868 16.3776 5.27512 15.7453C5.01716 15.2414 4.898 15.1365 4.7516 15.2847ZM3.84671 15.6918C3.74599 15.8148 3.82653 16.119 4.12023 16.7246C4.52341 17.556 5.39555 18.4088 5.71531 18.2844C5.8846 18.2187 5.84099 17.9585 5.64067 17.8386C5.10936 17.5206 4.59317 16.8063 4.323 16.0153C4.18248 15.6036 4.01319 15.4886 3.84671 15.6918Z" })
    ]
  }
), Sp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M8.5 22C8.08333 22 7.72917 21.8542 7.4375 21.5625C7.14583 21.2708 7 20.9167 7 20.5V7.5C7 7.08333 7.14583 6.72917 7.4375 6.4375C7.72917 6.14583 8.08333 6 8.5 6C8.91667 6 9.27083 6.14583 9.5625 6.4375C9.85417 6.72917 10 7.08333 10 7.5V20.5C10 20.9167 9.85417 21.2708 9.5625 21.5625C9.27083 21.8542 8.91667 22 8.5 22ZM15.5 16C15.0833 16 14.7292 15.8542 14.4375 15.5625C14.1458 15.2708 14 14.9167 14 14.5V7.5C14 7.08333 14.1458 6.72917 14.4375 6.4375C14.7292 6.14583 15.0833 6 15.5 6C15.9167 6 16.2708 6.14583 16.5625 6.4375C16.8542 6.72917 17 7.08333 17 7.5V14.5C17 14.9167 16.8542 15.2708 16.5625 15.5625C16.2708 15.8542 15.9167 16 15.5 16ZM3 4C2.71667 4 2.47917 3.90417 2.2875 3.7125C2.09583 3.52083 2 3.28333 2 3C2 2.71667 2.09583 2.47917 2.2875 2.2875C2.47917 2.09583 2.71667 2 3 2H21C21.2833 2 21.5208 2.09583 21.7125 2.2875C21.9042 2.47917 22 2.71667 22 3C22 3.28333 21.9042 3.52083 21.7125 3.7125C21.5208 3.90417 21.2833 4 21 4H3Z" })
    ]
  }
), Lp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M3 22C2.71667 22 2.47917 21.9042 2.2875 21.7125C2.09583 21.5208 2 21.2833 2 21C2 20.7167 2.09583 20.4792 2.2875 20.2875C2.47917 20.0958 2.71667 20 3 20H21C21.2833 20 21.5208 20.0958 21.7125 20.2875C21.9042 20.4792 22 20.7167 22 21C22 21.2833 21.9042 21.5208 21.7125 21.7125C21.5208 21.9042 21.2833 22 21 22H3ZM8.5 18C8.08333 18 7.72917 17.8542 7.4375 17.5625C7.14583 17.2708 7 16.9167 7 16.5V3.5C7 3.08333 7.14583 2.72917 7.4375 2.4375C7.72917 2.14583 8.08333 2 8.5 2C8.91667 2 9.27083 2.14583 9.5625 2.4375C9.85417 2.72917 10 3.08333 10 3.5V16.5C10 16.9167 9.85417 17.2708 9.5625 17.5625C9.27083 17.8542 8.91667 18 8.5 18ZM15.5 18C15.0833 18 14.7292 17.8542 14.4375 17.5625C14.1458 17.2708 14 16.9167 14 16.5V9.5C14 9.08333 14.1458 8.72917 14.4375 8.4375C14.7292 8.14583 15.0833 8 15.5 8C15.9167 8 16.2708 8.14583 16.5625 8.4375C16.8542 8.72917 17 9.08333 17 9.5V16.5C17 16.9167 16.8542 17.2708 16.5625 17.5625C16.2708 17.8542 15.9167 18 15.5 18Z" })
    ]
  }
), Kc = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M7.85894 17.8215C7.69777 17.8215 7.5603 17.7803 7.44654 17.6979C7.34225 17.6064 7.29011 17.4783 7.29011 17.3135V17.1625C6.68336 17.7208 5.85856 18 4.8157 18C4.39856 18 4.0146 17.9405 3.66382 17.8215C3.32253 17.7117 3.02863 17.5515 2.78214 17.341C2.53565 17.1213 2.3413 16.8604 2.19909 16.5584C2.06636 16.2563 2 15.9176 2 15.5423C2 14.6545 2.3176 13.9954 2.95279 13.5652C3.58798 13.135 4.50759 12.9199 5.71161 12.9199H7.16212C7.20952 12.9199 7.24271 12.9382 7.26167 12.9748C7.28063 13.0114 7.29011 13.0206 7.29011 13.0023C7.29011 12.508 7.13368 12.1236 6.82082 11.849C6.50797 11.5652 5.99602 11.405 5.28499 11.3684C4.93421 11.3501 4.58817 11.3776 4.24687 11.4508C3.91506 11.524 3.59272 11.6247 3.27986 11.7529C3.09974 11.8261 2.93383 11.8307 2.78214 11.7666C2.63993 11.6934 2.56883 11.5561 2.56883 11.3547V11.0801C2.56883 10.8146 2.71104 10.6316 2.99545 10.5309C3.82973 10.2563 4.64031 10.119 5.42719 10.119C7.80679 10.119 8.99659 11.2632 8.99659 13.5515V17.3135C8.99659 17.46 8.94919 17.5835 8.85439 17.6842C8.75958 17.7757 8.62212 17.8215 8.44199 17.8215H7.85894ZM5.6405 14.1831C5.2044 14.1831 4.84888 14.2014 4.57395 14.238C4.3085 14.2746 4.09519 14.3295 3.93402 14.4027C3.78233 14.476 3.6733 14.5675 3.60694 14.6773C3.55006 14.7872 3.51688 14.9153 3.5074 15.0618C3.49792 15.1167 3.49318 15.167 3.49318 15.2128C3.50266 15.2494 3.51688 15.2952 3.53584 15.3501C3.61168 15.5515 3.76337 15.6796 3.9909 15.7346C4.21843 15.7895 4.55973 15.8169 5.01479 15.8169C5.29921 15.8169 5.54096 15.8032 5.74005 15.7757C5.93914 15.7391 6.10031 15.6705 6.22355 15.5698C6.3468 15.46 6.43686 15.3043 6.49375 15.103C6.55063 14.9016 6.57907 14.627 6.57907 14.2792C6.57907 14.2426 6.56959 14.2197 6.55063 14.2105C6.54115 14.1922 6.50797 14.1831 6.45109 14.1831H5.6405Z" }),
      /* @__PURE__ */ i("path", { d: "M19.7531 17.8078C19.592 17.8078 19.4498 17.7712 19.3265 17.6979C19.2127 17.6156 19.1322 17.492 19.0848 17.3272L18.7861 16.0778C18.7672 15.9954 18.7435 15.9451 18.715 15.9268C18.6866 15.8993 18.6297 15.8856 18.5444 15.8856H14.1075C14.0032 15.8856 13.9369 15.8993 13.9084 15.9268C13.88 15.9451 13.861 15.9771 13.8515 16.0229L13.6098 17.3272C13.5813 17.5011 13.5007 17.6247 13.368 17.6979C13.2448 17.7712 13.1026 17.8078 12.9414 17.8078H11.2349C11.0737 17.8078 10.9315 17.7712 10.8083 17.6979C10.6945 17.6156 10.6376 17.4966 10.6376 17.341C10.6376 17.2586 10.6566 17.1762 10.6945 17.0938L15.2309 6.4119C15.3447 6.1373 15.5675 6 15.8993 6H16.7526C17.0844 6 17.3072 6.1373 17.4209 6.4119L21.9431 17.0938C21.981 17.1762 22 17.2586 22 17.341C22 17.4966 21.9384 17.6156 21.8151 17.6979C21.7014 17.7712 21.5686 17.8078 21.417 17.8078H19.7531ZM16.3259 9.14416L14.7332 13.5789C14.7237 13.5881 14.719 13.6156 14.719 13.6613C14.719 13.7071 14.7711 13.73 14.8754 13.73H17.7764C17.8523 13.73 17.895 13.7208 17.9044 13.7025C17.9234 13.6842 17.9329 13.6705 17.9329 13.6613C17.9329 13.6064 17.9281 13.5744 17.9187 13.5652L16.3259 9.14416Z" })
    ]
  }
), Np = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M16.775 19.575C16.5917 19.6916 16.4083 19.8 16.225 19.9C16.0417 20 15.85 20.0916 15.65 20.175C15.4 20.2916 15.1458 20.2916 14.8875 20.175C14.6292 20.0583 14.45 19.8666 14.35 19.6C14.25 19.35 14.2625 19.1041 14.3875 18.8625C14.5125 18.6208 14.7 18.4416 14.95 18.325C15.0167 18.2916 15.0792 18.2583 15.1375 18.225C15.1958 18.1916 15.2583 18.1583 15.325 18.125L12 14.8V17.575C12 18.025 11.7958 18.3375 11.3875 18.5125C10.9792 18.6875 10.6167 18.6166 10.3 18.3L7 15H4C3.71666 15 3.47916 14.9041 3.2875 14.7125C3.09583 14.5208 3 14.2833 3 14V9.99998C3 9.71664 3.09583 9.47914 3.2875 9.28748C3.47916 9.09581 3.71666 8.99998 4 8.99998H6.2L2.1 4.89998C1.91666 4.71664 1.825 4.48331 1.825 4.19998C1.825 3.91664 1.91666 3.68331 2.1 3.49998C2.28333 3.31664 2.51666 3.22498 2.8 3.22498C3.08333 3.22498 3.31666 3.31664 3.5 3.49998L20.5 20.5C20.6833 20.6833 20.775 20.9166 20.775 21.2C20.775 21.4833 20.6833 21.7166 20.5 21.9C20.3167 22.0833 20.0833 22.175 19.8 22.175C19.5167 22.175 19.2833 22.0833 19.1 21.9L16.775 19.575ZM19 11.975C19 10.5916 18.6333 9.32914 17.9 8.18748C17.1667 7.04581 16.1833 6.19164 14.95 5.62498C14.7 5.50831 14.5167 5.32914 14.4 5.08748C14.2833 4.84581 14.2667 4.59998 14.35 4.34998C14.45 4.08331 14.6292 3.89164 14.8875 3.77498C15.1458 3.65831 15.4083 3.65831 15.675 3.77498C17.2917 4.49164 18.5833 5.58331 19.55 7.04998C20.5167 8.51664 21 10.1583 21 11.975C21 12.525 20.95 13.0708 20.85 13.6125C20.75 14.1541 20.6083 14.675 20.425 15.175C20.2917 15.5416 20.0875 15.7708 19.8125 15.8625C19.5375 15.9541 19.2833 15.9583 19.05 15.875C18.8167 15.7916 18.6292 15.6416 18.4875 15.425C18.3458 15.2083 18.3417 14.9583 18.475 14.675C18.6583 14.2416 18.7917 13.8041 18.875 13.3625C18.9583 12.9208 19 12.4583 19 11.975ZM14.775 8.42498C15.325 8.77498 15.75 9.29998 16.05 9.99998C16.35 10.7 16.5 11.3666 16.5 12V12.25C16.5 12.3333 16.4917 12.4166 16.475 12.5C16.4417 12.7166 16.325 12.8583 16.125 12.925C15.925 12.9916 15.7417 12.9416 15.575 12.775L14.3 11.5C14.2 11.4 14.125 11.2875 14.075 11.1625C14.025 11.0375 14 10.9083 14 10.775V8.84998C14 8.64998 14.0875 8.50414 14.2625 8.41248C14.4375 8.32081 14.6083 8.32498 14.775 8.42498ZM9.75 6.94998C9.65 6.84998 9.6 6.73331 9.6 6.59998C9.6 6.46664 9.65 6.34998 9.75 6.24998L10.3 5.69998C10.6167 5.38331 10.9792 5.31248 11.3875 5.48748C11.7958 5.66248 12 5.97498 12 6.42498V7.99998C12 8.23331 11.9 8.39164 11.7 8.47498C11.5 8.55831 11.3167 8.51664 11.15 8.34998L9.75 6.94998Z" })
    ]
  }
), Tp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M12 10.8L8.1 14.7C7.91667 14.8834 7.68334 14.975 7.4 14.975C7.11667 14.975 6.88334 14.8834 6.7 14.7C6.51667 14.5167 6.425 14.2834 6.425 14C6.425 13.7167 6.51667 13.4834 6.7 13.3L11.3 8.70002C11.5 8.50002 11.7333 8.40002 12 8.40002C12.2667 8.40002 12.5 8.50002 12.7 8.70002L17.3 13.3C17.4833 13.4834 17.575 13.7167 17.575 14C17.575 14.2834 17.4833 14.5167 17.3 14.7C17.1167 14.8834 16.8833 14.975 16.6 14.975C16.3167 14.975 16.0833 14.8834 15.9 14.7L12 10.8Z" })
    ]
  }
), Rp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M12 14.975C11.8667 14.975 11.7417 14.9542 11.625 14.9125C11.5083 14.8709 11.4 14.8 11.3 14.7L6.7 10.1C6.51667 9.91672 6.425 9.68338 6.425 9.40005C6.425 9.11672 6.51667 8.88338 6.7 8.70005C6.88334 8.51672 7.11667 8.42505 7.4 8.42505C7.68334 8.42505 7.91667 8.51672 8.1 8.70005L12 12.6L15.9 8.70005C16.0833 8.51672 16.3167 8.42505 16.6 8.42505C16.8833 8.42505 17.1167 8.51672 17.3 8.70005C17.4833 8.88338 17.575 9.11672 17.575 9.40005C17.575 9.68338 17.4833 9.91672 17.3 10.1L12.7 14.7C12.6 14.8 12.4917 14.8709 12.375 14.9125C12.2583 14.9542 12.1333 14.975 12 14.975Z" })
    ]
  }
), Mp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M12 4.00305C11.9087 4.00102 11.817 4 11.725 4C9.49167 4 7.45417 4.6 5.6125 5.8C3.77083 7 2.31667 8.58333 1.25 10.55C1.16667 10.7 1.10417 10.8542 1.0625 11.0125C1.02083 11.1708 1 11.3333 1 11.5C1 11.6667 1.02083 11.8292 1.0625 11.9875C1.10417 12.1458 1.16667 12.3 1.25 12.45C2.31667 14.4167 3.77083 16 5.6125 17.2C7.45417 18.4 9.49167 19 11.725 19C11.817 19 11.9087 18.999 12 18.9969V15.9928C11.9094 15.9976 11.8177 16 11.725 16C10.475 16 9.4125 15.5625 8.5375 14.6875C7.6625 13.8125 7.225 12.75 7.225 11.5C7.225 10.25 7.6625 9.1875 8.5375 8.3125C9.4125 7.4375 10.475 7 11.725 7C11.8177 7 11.9094 7.00241 12 7.00722V4.00305Z" }),
      /* @__PURE__ */ i("path", { d: "M12 8.81222C11.9101 8.80407 11.8184 8.8 11.725 8.8C10.975 8.8 10.3375 9.0625 9.8125 9.5875C9.2875 10.1125 9.025 10.75 9.025 11.5C9.025 12.25 9.2875 12.8875 9.8125 13.4125C10.3375 13.9375 10.975 14.2 11.725 14.2C11.8184 14.2 11.9101 14.1959 12 14.1878V8.81222Z" }),
      /* @__PURE__ */ i("path", { d: "M12 18.9939C14.1259 18.9465 16.0717 18.3475 17.8375 17.1969C19.6792 15.9969 21.1333 14.4136 22.2 12.4469C22.2833 12.2969 22.3458 12.1428 22.3875 11.9844C22.4292 11.8261 22.45 11.6636 22.45 11.4969C22.45 11.3303 22.4292 11.1678 22.3875 11.0094C22.3458 10.8511 22.2833 10.6969 22.2 10.5469C21.1333 8.58028 19.6792 6.99695 17.8375 5.79695C16.0717 4.64638 14.1259 4.0474 12 4V6.0005C13.777 6.04659 15.4145 6.54124 16.9125 7.48445C18.4875 8.47611 19.6917 9.81361 20.525 11.4969C19.6917 13.1803 18.4875 14.5178 16.9125 15.5094C15.4145 16.4527 13.777 16.9473 12 16.9934V18.9939Z" }),
      /* @__PURE__ */ i("path", { d: "M12 15.9897C13.1316 15.9297 14.1024 15.4946 14.9125 14.6844C15.7875 13.8094 16.225 12.7469 16.225 11.4969C16.225 10.2469 15.7875 9.18445 14.9125 8.30945C14.1024 7.49933 13.1316 7.06424 12 7.00416V8.80916C12.6321 8.86641 13.1779 9.12483 13.6375 9.58445C14.1625 10.1094 14.425 10.7469 14.425 11.4969C14.425 12.2469 14.1625 12.8844 13.6375 13.4094C13.1779 13.8691 12.6321 14.1275 12 14.1847V15.9897Z" })
    ]
  }
), Ip = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M12 22C10.6333 22 9.34167 21.7375 8.125 21.2125C6.90833 20.6875 5.84583 19.9708 4.9375 19.0625C4.02917 18.1542 3.3125 17.0917 2.7875 15.875C2.2625 14.6583 2 13.3667 2 12C2 10.6167 2.27083 9.31667 2.8125 8.1C3.35417 6.88333 4.0875 5.825 5.0125 4.925C5.9375 4.025 7.01667 3.3125 8.25 2.7875C9.48333 2.2625 10.8 2 12.2 2C13.5333 2 14.7917 2.22917 15.975 2.6875C17.1583 3.14583 18.1958 3.77917 19.0875 4.5875C19.9792 5.39583 20.6875 6.35417 21.2125 7.4625C21.7375 8.57083 22 9.76667 22 11.05C22 12.9667 21.4167 14.4375 20.25 15.4625C19.0833 16.4875 17.6667 17 16 17H14.15C14 17 13.8958 17.0417 13.8375 17.125C13.7792 17.2083 13.75 17.3 13.75 17.4C13.75 17.6 13.875 17.8875 14.125 18.2625C14.375 18.6375 14.5 19.0667 14.5 19.55C14.5 20.3833 14.2708 21 13.8125 21.4C13.3542 21.8 12.75 22 12 22ZM6.5 13C6.93333 13 7.29167 12.8583 7.575 12.575C7.85833 12.2917 8 11.9333 8 11.5C8 11.0667 7.85833 10.7083 7.575 10.425C7.29167 10.1417 6.93333 10 6.5 10C6.06667 10 5.70833 10.1417 5.425 10.425C5.14167 10.7083 5 11.0667 5 11.5C5 11.9333 5.14167 12.2917 5.425 12.575C5.70833 12.8583 6.06667 13 6.5 13ZM9.5 9C9.93333 9 10.2917 8.85833 10.575 8.575C10.8583 8.29167 11 7.93333 11 7.5C11 7.06667 10.8583 6.70833 10.575 6.425C10.2917 6.14167 9.93333 6 9.5 6C9.06667 6 8.70833 6.14167 8.425 6.425C8.14167 6.70833 8 7.06667 8 7.5C8 7.93333 8.14167 8.29167 8.425 8.575C8.70833 8.85833 9.06667 9 9.5 9ZM14.5 9C14.9333 9 15.2917 8.85833 15.575 8.575C15.8583 8.29167 16 7.93333 16 7.5C16 7.06667 15.8583 6.70833 15.575 6.425C15.2917 6.14167 14.9333 6 14.5 6C14.0667 6 13.7083 6.14167 13.425 6.425C13.1417 6.70833 13 7.06667 13 7.5C13 7.93333 13.1417 8.29167 13.425 8.575C13.7083 8.85833 14.0667 9 14.5 9ZM17.5 13C17.9333 13 18.2917 12.8583 18.575 12.575C18.8583 12.2917 19 11.9333 19 11.5C19 11.0667 18.8583 10.7083 18.575 10.425C18.2917 10.1417 17.9333 10 17.5 10C17.0667 10 16.7083 10.1417 16.425 10.425C16.1417 10.7083 16 11.0667 16 11.5C16 11.9333 16.1417 12.2917 16.425 12.575C16.7083 12.8583 17.0667 13 17.5 13Z" })
    ]
  }
), Op = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M10 22C8.61667 22 7.4375 21.5125 6.4625 20.5375C5.4875 19.5625 5 18.3833 5 17C5 16.15 5.19167 15.3667 5.575 14.65C5.95833 13.9333 6.46667 13.35 7.1 12.9C7.33333 12.7333 7.58333 12.675 7.85 12.725C8.11667 12.775 8.33333 12.9167 8.5 13.15C8.66667 13.3833 8.72917 13.6333 8.6875 13.9C8.64583 14.1667 8.50833 14.3833 8.275 14.55C7.89167 14.8333 7.58333 15.1875 7.35 15.6125C7.11667 16.0375 7 16.5 7 17C7 17.8333 7.29167 18.5417 7.875 19.125C8.45833 19.7083 9.16667 20 10 20C10.5 20 10.9625 19.8833 11.3875 19.65C11.8125 19.4167 12.1667 19.1083 12.45 18.725C12.6167 18.4917 12.8333 18.3542 13.1 18.3125C13.3667 18.2708 13.6167 18.3333 13.85 18.5C14.0833 18.6667 14.225 18.8833 14.275 19.15C14.325 19.4167 14.2667 19.6667 14.1 19.9C13.65 20.5333 13.0667 21.0417 12.35 21.425C11.6333 21.8083 10.85 22 10 22ZM18 22C17.7167 22 17.4792 21.9042 17.2875 21.7125C17.0958 21.5208 17 21.2833 17 21V17H12C11.45 17 10.9792 16.8042 10.5875 16.4125C10.1958 16.0208 10 15.55 10 15V9C10 8.45 10.1958 7.97917 10.5875 7.5875C10.9792 7.19583 11.45 7 12 7C12.4 7 12.7458 7.0875 13.0375 7.2625C13.3292 7.4375 13.6417 7.71667 13.975 8.1C14.725 9 15.4042 9.65833 16.0125 10.075C16.6208 10.4917 17.275 10.7667 17.975 10.9C18.2583 10.95 18.5 11.075 18.7 11.275C18.9 11.475 19 11.7167 19 12C19 12.2833 18.8958 12.5167 18.6875 12.7C18.4792 12.8833 18.2417 12.95 17.975 12.9C17.2417 12.7667 16.5292 12.5333 15.8375 12.2C15.1458 11.8667 14.5333 11.4833 14 11.05V14.5H17C17.55 14.5 18.0208 14.6958 18.4125 15.0875C18.8042 15.4792 19 15.95 19 16.5V21C19 21.2833 18.9042 21.5208 18.7125 21.7125C18.5208 21.9042 18.2833 22 18 22ZM12 6C11.45 6 10.9792 5.80417 10.5875 5.4125C10.1958 5.02083 10 4.55 10 4C10 3.45 10.1958 2.97917 10.5875 2.5875C10.9792 2.19583 11.45 2 12 2C12.55 2 13.0208 2.19583 13.4125 2.5875C13.8042 2.97917 14 3.45 14 4C14 4.55 13.8042 5.02083 13.4125 5.4125C13.0208 5.80417 12.55 6 12 6Z" })
    ]
  }
), Pp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20ZM12 18C10.3333 18 8.91667 17.4167 7.75 16.25C6.58333 15.0833 6 13.6667 6 12C6 10.3333 6.58333 8.91667 7.75 7.75C8.91667 6.58333 10.3333 6 12 6C13.6667 6 15.0833 6.58333 16.25 7.75C17.4167 8.91667 18 10.3333 18 12C18 13.6667 17.4167 15.0833 16.25 16.25C15.0833 17.4167 13.6667 18 12 18ZM12 16C13.1 16 14.0417 15.6083 14.825 14.825C15.6083 14.0417 16 13.1 16 12C16 10.9 15.6083 9.95833 14.825 9.175C14.0417 8.39167 13.1 8 12 8C10.9 8 9.95833 8.39167 9.175 9.175C8.39167 9.95833 8 10.9 8 12C8 13.1 8.39167 14.0417 9.175 14.825C9.95833 15.6083 10.9 16 12 16ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14Z" })
    ]
  }
), Dp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M12.275 15.525C13.4417 15.525 14.4333 15.15 15.25 14.4C16.0667 13.65 16.475 12.7417 16.475 11.675C16.475 10.725 16.1708 9.92083 15.5625 9.2625C14.9542 8.60417 14.2167 8.275 13.35 8.275C12.5667 8.275 11.9042 8.525 11.3625 9.025C10.8208 9.525 10.55 10.1417 10.55 10.875C10.55 11.1917 10.6042 11.5042 10.7125 11.8125C10.8208 12.1208 11.0083 12.3917 11.275 12.625C11.5417 12.8583 11.8083 12.9542 12.075 12.9125C12.3417 12.8708 12.5583 12.7583 12.725 12.575C12.8917 12.3917 12.9875 12.1708 13.0125 11.9125C13.0375 11.6542 12.9333 11.4167 12.7 11.2C12.6667 11.1667 12.6333 11.125 12.6 11.075C12.5667 11.025 12.55 10.9667 12.55 10.9C12.55 10.7167 12.625 10.5708 12.775 10.4625C12.925 10.3542 13.1167 10.3 13.35 10.3C13.6833 10.3 13.9583 10.4375 14.175 10.7125C14.3917 10.9875 14.5 11.3167 14.5 11.7C14.5 12.2167 14.2875 12.6542 13.8625 13.0125C13.4375 13.3708 12.9167 13.55 12.3 13.55C11.5167 13.55 10.8542 13.2333 10.3125 12.6C9.77083 11.9667 9.5 11.1917 9.5 10.275C9.5 9.95833 9.5375 9.65 9.6125 9.35C9.6875 9.05 9.8 8.76667 9.95 8.5C10.0833 8.25 10.15 7.9875 10.15 7.7125C10.15 7.4375 10.05 7.2 9.85 7C9.65 6.8 9.40833 6.70417 9.125 6.7125C8.84167 6.72083 8.625 6.84167 8.475 7.075C8.14167 7.54167 7.89167 8.04167 7.725 8.575C7.55833 9.10833 7.475 9.66667 7.475 10.25C7.475 11.7167 7.94167 12.9625 8.875 13.9875C9.80833 15.0125 10.9417 15.525 12.275 15.525ZM7 22C6.71667 22 6.47917 21.9042 6.2875 21.7125C6.09583 21.5208 6 21.2833 6 21V17.7C5.05 16.8333 4.3125 15.8208 3.7875 14.6625C3.2625 13.5042 3 12.2833 3 11C3 8.5 3.875 6.375 5.625 4.625C7.375 2.875 9.5 2 12 2C14.0833 2 15.9292 2.6125 17.5375 3.8375C19.1458 5.0625 20.1917 6.65833 20.675 8.625L21.975 13.75C22.0583 14.0667 22 14.3542 21.8 14.6125C21.6 14.8708 21.3333 15 21 15H19V18C19 18.55 18.8042 19.0208 18.4125 19.4125C18.0208 19.8042 17.55 20 17 20H15V21C15 21.2833 14.9042 21.5208 14.7125 21.7125C14.5208 21.9042 14.2833 22 14 22H7Z" })
    ]
  }
), Hp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M8.63849 19C8.34916 19 8.11045 18.9212 7.92238 18.7636C7.74878 18.606 7.66198 18.3983 7.66198 18.1404V17.8395C7.06884 18.4699 6.24423 18.7851 5.18815 18.7851C4.39247 18.7851 3.67637 18.5917 3.03982 18.2049C2.40328 17.8181 1.90418 17.2736 1.54251 16.5716C1.18084 15.8553 1 15.0458 1 14.1433C1 13.1404 1.217 12.1734 1.65101 11.2421C2.08501 10.2966 2.69262 9.53009 3.47383 8.94269C4.26951 8.3553 5.18092 8.0616 6.20806 8.0616C6.87354 8.0616 7.47391 8.15473 8.00919 8.34097C8.54446 8.51289 9.10143 8.72779 9.68011 8.98567V17.9255C9.68011 18.212 9.57884 18.4628 9.3763 18.6776C9.17377 18.8925 8.92783 19 8.63849 19ZM5.34005 16.7865C5.75959 16.7865 6.16466 16.7006 6.55527 16.5287C6.96034 16.3567 7.29308 16.149 7.55348 15.9054L7.61858 10.2966C7.19904 10.1246 6.74334 10.0387 6.25146 10.0387C5.62939 10.0387 5.07965 10.2321 4.60224 10.6189C4.12484 10.9914 3.75593 11.4928 3.49553 12.1232C3.23513 12.7393 3.10493 13.3983 3.10493 14.1003C3.10493 14.9742 3.30023 15.6404 3.69083 16.0989C4.08144 16.5573 4.63118 16.7865 5.34005 16.7865Z" }),
      /* @__PURE__ */ i("path", { d: "M21.915 18.8066C21.3942 18.8066 21.0542 18.563 20.8951 18.0759L19.3327 13.606L14.9058 14.5731L13.4953 18.0974C13.4085 18.298 13.2783 18.4628 13.1047 18.5917C12.9455 18.7206 12.743 18.7851 12.4971 18.7851C12.2077 18.7851 11.9546 18.6848 11.7376 18.4842C11.5206 18.2837 11.4121 18.0473 11.4121 17.7751C11.4121 17.5888 11.4627 17.3739 11.564 17.1304L12.432 14.9814C12.3452 14.9527 12.2801 14.9241 12.2367 14.8954C11.8605 14.7092 11.6725 14.394 11.6725 13.9499C11.6725 13.692 11.7448 13.4699 11.8895 13.2837C12.0486 13.0974 12.2511 12.9756 12.4971 12.9183L13.3 12.7464L16.5116 4.66619C16.5984 4.45129 16.7359 4.28653 16.9239 4.17192C17.112 4.05731 17.3145 4 17.5315 4C17.763 4 17.9655 4.05731 18.1391 4.17192C18.3127 4.28653 18.4429 4.46562 18.5297 4.70917L22.8481 17.1089C22.8626 17.1375 22.8915 17.2235 22.9349 17.3668C22.9783 17.4957 23 17.6318 23 17.7751C23 18.0473 22.8987 18.2908 22.6962 18.5057C22.4937 18.7063 22.2333 18.8066 21.915 18.8066ZM18.6165 11.6074L17.4447 8.14756L15.8172 12.2092L18.6165 11.6074Z" })
    ]
  }
), Jc = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M12 16C13.25 16 14.3125 15.5625 15.1875 14.6875C16.0625 13.8125 16.5 12.75 16.5 11.5C16.5 10.25 16.0625 9.1875 15.1875 8.3125C14.3125 7.4375 13.25 7 12 7C10.75 7 9.68749 7.4375 8.81249 8.3125C7.93749 9.1875 7.49999 10.25 7.49999 11.5C7.49999 12.75 7.93749 13.8125 8.81249 14.6875C9.68749 15.5625 10.75 16 12 16ZM12 14.2C11.25 14.2 10.6125 13.9375 10.0875 13.4125C9.56249 12.8875 9.29999 12.25 9.29999 11.5C9.29999 10.75 9.56249 10.1125 10.0875 9.5875C10.6125 9.0625 11.25 8.8 12 8.8C12.75 8.8 13.3875 9.0625 13.9125 9.5875C14.4375 10.1125 14.7 10.75 14.7 11.5C14.7 12.25 14.4375 12.8875 13.9125 13.4125C13.3875 13.9375 12.75 14.2 12 14.2ZM12 19C9.76666 19 7.72916 18.4 5.88749 17.2C4.04583 16 2.59166 14.4167 1.52499 12.45C1.44166 12.3 1.37916 12.1458 1.33749 11.9875C1.29583 11.8292 1.27499 11.6667 1.27499 11.5C1.27499 11.3333 1.29583 11.1708 1.33749 11.0125C1.37916 10.8542 1.44166 10.7 1.52499 10.55C2.59166 8.58333 4.04583 7 5.88749 5.8C7.72916 4.6 9.76666 4 12 4C14.2333 4 16.2708 4.6 18.1125 5.8C19.9542 7 21.4083 8.58333 22.475 10.55C22.5583 10.7 22.6208 10.8542 22.6625 11.0125C22.7042 11.1708 22.725 11.3333 22.725 11.5C22.725 11.6667 22.7042 11.8292 22.6625 11.9875C22.6208 12.1458 22.5583 12.3 22.475 12.45C21.4083 14.4167 19.9542 16 18.1125 17.2C16.2708 18.4 14.2333 19 12 19Z" })
    ]
  }
), zp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M8.65 20H6C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15.35L2.075 13.4C1.89167 13.2 1.75 12.9792 1.65 12.7375C1.55 12.4958 1.5 12.25 1.5 12C1.5 11.75 1.55 11.5042 1.65 11.2625C1.75 11.0208 1.89167 10.8 2.075 10.6L4 8.65V6C4 5.45 4.19583 4.97917 4.5875 4.5875C4.97917 4.19583 5.45 4 6 4H8.65L10.6 2.075C10.8 1.89167 11.0208 1.75 11.2625 1.65C11.5042 1.55 11.75 1.5 12 1.5C12.25 1.5 12.4958 1.55 12.7375 1.65C12.9792 1.75 13.2 1.89167 13.4 2.075L15.35 4H18C18.55 4 19.0208 4.19583 19.4125 4.5875C19.8042 4.97917 20 5.45 20 6V8.65L21.925 10.6C22.1083 10.8 22.25 11.0208 22.35 11.2625C22.45 11.5042 22.5 11.75 22.5 12C22.5 12.25 22.45 12.4958 22.35 12.7375C22.25 12.9792 22.1083 13.2 21.925 13.4L20 15.35V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H15.35L13.4 21.925C13.2 22.1083 12.9792 22.25 12.7375 22.35C12.4958 22.45 12.25 22.5 12 22.5C11.75 22.5 11.5042 22.45 11.2625 22.35C11.0208 22.25 10.8 22.1083 10.6 21.925L8.65 20ZM12 17C13.3833 17 14.5625 16.5125 15.5375 15.5375C16.5125 14.5625 17 13.3833 17 12C17 10.6167 16.5125 9.4375 15.5375 8.4625C14.5625 7.4875 13.3833 7 12 7V17Z" })
    ]
  }
), Bp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M12 8C10.9 8 9.95833 8.39167 9.175 9.175C8.39167 9.95833 8 10.9 8 12C8 12.75 8.1875 13.4417 8.5625 14.075C8.9375 14.7083 9.45833 15.2 10.125 15.55C10.3917 15.6833 10.5792 15.8792 10.6875 16.1375C10.7958 16.3958 10.7917 16.6583 10.675 16.925C10.5583 17.1583 10.3833 17.3333 10.15 17.45C9.91667 17.5667 9.68333 17.5667 9.45 17.45C8.4 16.95 7.5625 16.2083 6.9375 15.225C6.3125 14.2417 6 13.1667 6 12C6 10.3333 6.58333 8.91667 7.75 7.75C8.91667 6.58333 10.3333 6 12 6C13.1833 6 14.2708 6.3125 15.2625 6.9375C16.2542 7.5625 16.9917 8.41667 17.475 9.5C17.575 9.73333 17.5708 9.96667 17.4625 10.2C17.3542 10.4333 17.1833 10.6 16.95 10.7C16.6833 10.8167 16.4167 10.8167 16.15 10.7C15.8833 10.5833 15.6833 10.3917 15.55 10.125C15.2 9.45833 14.7083 8.9375 14.075 8.5625C13.4417 8.1875 12.75 8 12 8ZM12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.1 4.69167 15.9 6.075 17.4C7.45833 18.9 9.19167 19.75 11.275 19.95C11.5583 19.9833 11.8042 20.1083 12.0125 20.325C12.2208 20.5417 12.3167 20.7917 12.3 21.075C12.2833 21.3583 12.1792 21.5917 11.9875 21.775C11.7958 21.9583 11.5583 22.0417 11.275 22.025C9.975 21.9417 8.7625 21.6167 7.6375 21.05C6.5125 20.4833 5.52917 19.7458 4.6875 18.8375C3.84583 17.9292 3.1875 16.8875 2.7125 15.7125C2.2375 14.5375 2 13.3 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C14.6167 2 16.8958 2.89167 18.8375 4.675C20.7792 6.45833 21.8417 8.65833 22.025 11.275C22.0583 11.5417 21.9792 11.7708 21.7875 11.9625C21.5958 12.1542 21.3583 12.2583 21.075 12.275C20.7917 12.2917 20.5375 12.2 20.3125 12C20.0875 11.8 19.9583 11.5583 19.925 11.275C19.675 9.275 18.8042 7.5625 17.3125 6.1375C15.8208 4.7125 14.05 4 12 4ZM19.55 21.5L16.25 18.225L15.5 20.5C15.4167 20.7333 15.2583 20.8458 15.025 20.8375C14.7917 20.8292 14.6333 20.7083 14.55 20.475L12.275 12.9C12.2083 12.7167 12.25 12.55 12.4 12.4C12.55 12.25 12.7167 12.2083 12.9 12.275L20.475 14.55C20.7083 14.6333 20.8292 14.7917 20.8375 15.025C20.8458 15.2583 20.7333 15.4167 20.5 15.5L18.225 16.25L21.525 19.55C21.8083 19.8333 21.95 20.1583 21.95 20.525C21.95 20.8917 21.8083 21.2167 21.525 21.5C21.2417 21.7833 20.9125 21.925 20.5375 21.925C20.1625 21.925 19.8333 21.7833 19.55 21.5Z" })
    ]
  }
), Qc = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M12 21C9.48333 21 7.35417 20.1292 5.6125 18.3875C3.87083 16.6458 3 14.5167 3 12C3 9.70002 3.75 7.70418 5.25 6.01252C6.75 4.32085 8.66667 3.33335 11 3.05002C11.2167 3.01668 11.4083 3.04585 11.575 3.13752C11.7417 3.22918 11.875 3.35002 11.975 3.50002C12.075 3.65002 12.1292 3.82502 12.1375 4.02502C12.1458 4.22502 12.0833 4.41668 11.95 4.60002C11.6667 5.03335 11.4542 5.49168 11.3125 5.97502C11.1708 6.45835 11.1 6.96668 11.1 7.50002C11.1 9.00002 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.0167 12.9 17.5292 12.825 18.0375 12.675C18.5458 12.525 19 12.3167 19.4 12.05C19.5833 11.9333 19.7708 11.8792 19.9625 11.8875C20.1542 11.8958 20.325 11.9417 20.475 12.025C20.6417 12.1083 20.7708 12.2333 20.8625 12.4C20.9542 12.5667 20.9833 12.7667 20.95 13C20.7167 15.3 19.7375 17.2083 18.0125 18.725C16.2875 20.2417 14.2833 21 12 21Z" })
    ]
  }
), Fp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M7.17273 18.5455H9.95455C10.3091 18.5455 10.6023 18.6614 10.8341 18.8932C11.0659 19.125 11.1818 19.4182 11.1818 19.7727C11.1818 20.1273 11.0659 20.4205 10.8341 20.6523C10.6023 20.8841 10.3091 21 9.95455 21H4.63636C4.17273 21 3.78409 20.8432 3.47045 20.5295C3.15682 20.2159 3 19.8273 3 19.3636V14.0455C3 13.6909 3.11591 13.3977 3.34773 13.1659C3.57955 12.9341 3.87273 12.8182 4.22727 12.8182C4.58182 12.8182 4.875 12.9341 5.10682 13.1659C5.33864 13.3977 5.45455 13.6909 5.45455 14.0455V16.8273L9.46364 12.8182C9.70909 12.5727 9.99545 12.45 10.3227 12.45C10.65 12.45 10.9364 12.5727 11.1818 12.8182C11.4273 13.0636 11.55 13.35 11.55 13.6773C11.55 14.0045 11.4273 14.2909 11.1818 14.5364L7.17273 18.5455ZM18.5455 7.17273L14.5364 11.1818C14.2909 11.4273 14.0045 11.55 13.6773 11.55C13.35 11.55 13.0636 11.4273 12.8182 11.1818C12.5727 10.9364 12.45 10.65 12.45 10.3227C12.45 9.99545 12.5727 9.70909 12.8182 9.46364L16.8273 5.45455H14.0455C13.6909 5.45455 13.3977 5.33864 13.1659 5.10682C12.9341 4.875 12.8182 4.58182 12.8182 4.22727C12.8182 3.87273 12.9341 3.57955 13.1659 3.34773C13.3977 3.11591 13.6909 3 14.0455 3H19.3636C19.8273 3 20.2159 3.15682 20.5295 3.47045C20.8432 3.78409 21 4.17273 21 4.63636V9.95455C21 10.3091 20.8841 10.6023 20.6523 10.8341C20.4205 11.0659 20.1273 11.1818 19.7727 11.1818C19.4182 11.1818 19.125 11.0659 18.8932 10.8341C18.6614 10.6023 18.5455 10.3091 18.5455 9.95455V7.17273Z" })
    ]
  }
), Vp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M8.85495 16.8697L5.01758 20.6631C4.78022 20.8738 4.5033 20.9858 4.18681 20.999C3.87033 21.0121 3.59341 20.9002 3.35604 20.6631C3.11868 20.426 3 20.1494 3 19.8333C3 19.5172 3.11868 19.2406 3.35604 19.0035L7.15385 15.1705H4.5033C4.16044 15.1705 3.87692 15.0586 3.65275 14.8347C3.42857 14.6107 3.31648 14.3276 3.31648 13.9851C3.31648 13.6426 3.42857 13.3594 3.65275 13.1355C3.87692 12.9116 4.16044 12.7997 4.5033 12.7997H9.64615C10.0945 12.7997 10.4703 12.9511 10.7736 13.2541C11.0769 13.557 11.2286 13.9324 11.2286 14.3802V19.5172C11.2286 19.8596 11.1165 20.1428 10.8923 20.3667C10.6681 20.5906 10.3846 20.7026 10.0418 20.7026C9.6989 20.7026 9.41538 20.5906 9.19121 20.3667C8.96703 20.1428 8.85495 19.8596 8.85495 19.5172V16.8697ZM16.8462 8.84818H19.5363C19.8791 8.84818 20.1626 8.96014 20.3868 9.18406C20.611 9.40797 20.7231 9.69116 20.7231 10.0336C20.7231 10.3761 20.611 10.6593 20.3868 10.8832C20.1626 11.1071 19.8791 11.2191 19.5363 11.2191H14.3934C13.9451 11.2191 13.5692 11.0676 13.2659 10.7646C12.9626 10.4617 12.811 10.0863 12.811 9.63848V4.50156C12.811 4.1591 12.9231 3.87591 13.1473 3.65199C13.3714 3.42808 13.6549 3.31612 13.9978 3.31612C14.3407 3.31612 14.6242 3.42808 14.8484 3.65199C15.0725 3.87591 15.1846 4.1591 15.1846 4.50156V7.18856L18.9824 3.35563C19.2198 3.11854 19.4967 3 19.8132 3C20.1297 3 20.4066 3.11854 20.644 3.35563C20.8813 3.59272 21 3.87591 21 4.2052C21 4.53449 20.8813 4.81768 20.644 5.05477L16.8462 8.84818Z" })
    ]
  }
), $p = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M4 18C3.45 18 2.97917 17.8042 2.5875 17.4125C2.19583 17.0208 2 16.55 2 16V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H14.675L12.825 20.75C12.725 20.9 12.6042 21.0125 12.4625 21.0875C12.3208 21.1625 12.1667 21.2 12 21.2C11.8333 21.2 11.6792 21.1625 11.5375 21.0875C11.3958 21.0125 11.275 20.9 11.175 20.75L9.325 18H4ZM12 18.4L13.6 16H20V4H4V16H10.4L12 18.4Z" }),
      /* @__PURE__ */ i("path", { d: "M17 9H7C6.44772 9 6 8.55228 6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8C18 8.55228 17.5523 9 17 9Z" }),
      /* @__PURE__ */ i("path", { d: "M13 13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H13C13.5523 11 14 11.4477 14 12C14 12.5523 13.5523 13 13 13Z" })
    ]
  }
), e2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M12 17C12.2833 17 12.5208 16.9042 12.7125 16.7125C12.9042 16.5208 13 16.2833 13 16V12C13 11.7167 12.9042 11.4792 12.7125 11.2875C12.5208 11.0958 12.2833 11 12 11C11.7167 11 11.4792 11.0958 11.2875 11.2875C11.0958 11.4792 11 11.7167 11 12V16C11 16.2833 11.0958 16.5208 11.2875 16.7125C11.4792 16.9042 11.7167 17 12 17ZM12 9C12.2833 9 12.5208 8.90417 12.7125 8.7125C12.9042 8.52083 13 8.28333 13 8C13 7.71667 12.9042 7.47917 12.7125 7.2875C12.5208 7.09583 12.2833 7 12 7C11.7167 7 11.4792 7.09583 11.2875 7.2875C11.0958 7.47917 11 7.71667 11 8C11 8.28333 11.0958 8.52083 11.2875 8.7125C11.4792 8.90417 11.7167 9 12 9ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" })
    ]
  }
), Up = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M16.45 13.6L8.35 5.49998C8.51666 5.36664 8.70833 5.28748 8.925 5.26248C9.14166 5.23748 9.35 5.29164 9.55 5.42498L17.675 11.15C17.9917 11.35 18.1458 11.6333 18.1375 12C18.1292 12.3666 17.9667 12.65 17.65 12.85L16.45 13.6ZM19.05 21.9L13 15.8L9.55 18.025C9.21666 18.2416 8.875 18.2541 8.525 18.0625C8.175 17.8708 8 17.575 8 17.175V10.8L2.1 4.89998C1.91666 4.71664 1.825 4.48331 1.825 4.19998C1.825 3.91664 1.91666 3.68331 2.1 3.49998C2.28333 3.31664 2.51666 3.22498 2.8 3.22498C3.08333 3.22498 3.31666 3.31664 3.5 3.49998L20.475 20.475C20.675 20.675 20.775 20.9125 20.775 21.1875C20.775 21.4625 20.675 21.7 20.475 21.9C20.275 22.0833 20.0375 22.1791 19.7625 22.1875C19.4875 22.1958 19.25 22.1 19.05 21.9Z" })
    ]
  }
), jp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M12 21.4C9.78333 21.4 7.89583 20.6333 6.3375 19.1C4.77917 17.5667 4 15.7083 4 13.525C4 12.425 4.20833 11.4042 4.625 10.4625C5.04167 9.52083 5.61667 8.68333 6.35 7.95L10.95 3.425C11.1 3.29167 11.2667 3.1875 11.45 3.1125C11.6333 3.0375 11.8167 3 12 3C12.1833 3 12.3667 3.0375 12.55 3.1125C12.7333 3.1875 12.9 3.29167 13.05 3.425L17.65 7.95C18.3833 8.68333 18.9583 9.52083 19.375 10.4625C19.7917 11.4042 20 12.425 20 13.525C20 15.7083 19.2208 17.5667 17.6625 19.1C16.1042 20.6333 14.2167 21.4 12 21.4ZM12 19.4V5.2L7.75 9.4C7.16667 9.95 6.72917 10.575 6.4375 11.275C6.14583 11.975 6 12.725 6 13.525C6 15.1417 6.58333 16.525 7.75 17.675C8.91667 18.825 10.3333 19.4 12 19.4Z" })
    ]
  }
), Gp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M17.65 7.57498C18.45 8.37498 19.0417 9.23748 19.425 10.1625C19.8083 11.0875 20 12.0666 20 13.1C20 13.3833 19.9875 13.6583 19.9625 13.925C19.9375 14.1916 19.9 14.45 19.85 14.7C19.8 14.95 19.675 15.1458 19.475 15.2875C19.275 15.4291 19.0583 15.5 18.825 15.5C18.675 15.5 18.5292 15.475 18.3875 15.425C18.2458 15.375 18.1083 15.2833 17.975 15.15L12.575 9.74998C12.3917 9.56664 12.25 9.35414 12.15 9.11248C12.05 8.87081 12 8.61664 12 8.34998V4.79998L10.475 6.29998C10.2917 6.48331 10.0583 6.57081 9.77501 6.56248C9.49168 6.55414 9.25835 6.45831 9.07501 6.27498C8.87501 6.07498 8.77918 5.83748 8.78751 5.56248C8.79585 5.28748 8.90001 5.05831 9.10001 4.87498L10.95 3.04998C11.1 2.89998 11.2667 2.78748 11.45 2.71248C11.6333 2.63748 11.8167 2.59998 12 2.59998C12.1833 2.59998 12.3667 2.63748 12.55 2.71248C12.7333 2.78748 12.9 2.89998 13.05 3.04998L17.65 7.57498ZM12 21C9.78335 21 7.89585 20.2375 6.33751 18.7125C4.77918 17.1875 4.00001 15.3166 4.00001 13.1C4.00001 12.25 4.13335 11.4333 4.40001 10.65C4.66668 9.86664 5.06668 9.11664 5.60001 8.39998L2.10001 4.89998C1.91668 4.71664 1.82501 4.48331 1.82501 4.19998C1.82501 3.91664 1.91668 3.68331 2.10001 3.49998C2.28335 3.31664 2.51668 3.22498 2.80001 3.22498C3.08335 3.22498 3.31668 3.31664 3.50001 3.49998L20.5 20.5C20.6833 20.6833 20.775 20.9166 20.775 21.2C20.775 21.4833 20.6833 21.7166 20.5 21.9C20.3167 22.0833 20.0833 22.175 19.8 22.175C19.5167 22.175 19.2833 22.0833 19.1 21.9L16.7 19.5C16 20.0166 15.2375 20.3958 14.4125 20.6375C13.5875 20.8791 12.7833 21 12 21ZM12 19V14.825L7.00001 9.82498C6.65001 10.3583 6.39585 10.8958 6.23751 11.4375C6.07918 11.9791 6.00001 12.5333 6.00001 13.1C6.00001 14.7666 6.58335 16.1666 7.75001 17.3C8.91668 18.4333 10.3333 19 12 19Z" })
    ]
  }
), Zp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M12 21.4C9.78333 21.4 7.89583 20.6333 6.3375 19.1C4.77917 17.5667 4 15.7083 4 13.525C4 12.425 4.20833 11.4042 4.625 10.4625C5.04167 9.52083 5.61667 8.68333 6.35 7.95L10.95 3.425C11.1 3.29167 11.2667 3.1875 11.45 3.1125C11.6333 3.0375 11.8167 3 12 3C12.1833 3 12.3667 3.0375 12.55 3.1125C12.7333 3.1875 12.9 3.29167 13.05 3.425L17.65 7.95C18.3833 8.68333 18.9583 9.52083 19.375 10.4625C19.7917 11.4042 20 12.425 20 13.525C20 15.7083 19.2208 17.5667 17.6625 19.1C16.1042 20.6333 14.2167 21.4 12 21.4ZM12 19.4V5.2L7.75 9.4C7.16667 9.95 6.72917 10.575 6.4375 11.275C6.14583 11.975 6 12.725 6 13.525C6 15.1417 6.58333 16.525 7.75 17.675C8.91667 18.825 10.3333 19.4 12 19.4Z" }),
      /* @__PURE__ */ i("path", { d: "M18 5H19V6C19 6.28333 19.0958 6.52083 19.2875 6.7125C19.4792 6.90417 19.7167 7 20 7C20.2833 7 20.5208 6.90417 20.7125 6.7125C20.9042 6.52083 21 6.28333 21 6V5H22C22.2833 5 22.5208 4.90417 22.7125 4.7125C22.9042 4.52083 23 4.28333 23 4C23 3.71667 22.9042 3.47917 22.7125 3.2875C22.5208 3.09583 22.2833 3 22 3H21V2C21 1.71667 20.9042 1.47917 20.7125 1.2875C20.5208 1.09583 20.2833 1 20 1C19.7167 1 19.4792 1.09583 19.2875 1.2875C19.0958 1.47917 19 1.71667 19 2V3H18C17.7167 3 17.4792 3.09583 17.2875 3.2875C17.0958 3.47917 17 3.71667 17 4C17 4.28333 17.0958 4.52083 17.2875 4.7125C17.4792 4.90417 17.7167 5 18 5Z" })
    ]
  }
), qp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M12 21.4C9.78333 21.4 7.89583 20.6333 6.3375 19.1C4.77917 17.5667 4 15.7083 4 13.525C4 12.425 4.20833 11.4042 4.625 10.4625C5.04167 9.52083 5.61667 8.68333 6.35 7.95L10.95 3.425C11.1 3.29167 11.2667 3.1875 11.45 3.1125C11.6333 3.0375 11.8167 3 12 3C12.1833 3 12.3667 3.0375 12.55 3.1125C12.7333 3.1875 12.9 3.29167 13.05 3.425L17.65 7.95C18.3833 8.68333 18.9583 9.52083 19.375 10.4625C19.7917 11.4042 20 12.425 20 13.525C20 15.7083 19.2208 17.5667 17.6625 19.1C16.1042 20.6333 14.2167 21.4 12 21.4ZM12 19.4V5.2L7.75 9.4C7.16667 9.95 6.72917 10.575 6.4375 11.275C6.14583 11.975 6 12.725 6 13.525C6 15.1417 6.58333 16.525 7.75 17.675C8.91667 18.825 10.3333 19.4 12 19.4Z" }),
      /* @__PURE__ */ i("path", { d: "M18 2.40002C17.7167 2.40002 17.4792 2.49586 17.2875 2.68752C17.0958 2.87919 17 3.11669 17 3.40002C17 3.68336 17.0958 3.92086 17.2875 4.11252C17.4792 4.30419 17.7167 4.40002 18 4.40002H22C22.2833 4.40002 22.5208 4.30419 22.7125 4.11252C22.9042 3.92086 23 3.68336 23 3.40002C23 3.11669 22.9042 2.87919 22.7125 2.68752C22.5208 2.49586 22.2833 2.40002 22 2.40002H18Z" })
    ]
  }
), Wp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M12 13.725C11.8333 13.725 11.6708 13.7042 11.5125 13.6625C11.3542 13.6209 11.2 13.5584 11.05 13.475L2.6 8.87502C2.41667 8.77502 2.2875 8.65002 2.2125 8.50002C2.1375 8.35002 2.1 8.18336 2.1 8.00002C2.1 7.81669 2.1375 7.65002 2.2125 7.50002C2.2875 7.35002 2.41667 7.22502 2.6 7.12502L11.05 2.52502C11.2 2.44169 11.3542 2.37919 11.5125 2.33752C11.6708 2.29586 11.8333 2.27502 12 2.27502C12.1667 2.27502 12.3292 2.29586 12.4875 2.33752C12.6458 2.37919 12.8 2.44169 12.95 2.52502L21.4 7.12502C21.5833 7.22502 21.7125 7.35002 21.7875 7.50002C21.8625 7.65002 21.9 7.81669 21.9 8.00002C21.9 8.18336 21.8625 8.35002 21.7875 8.50002C21.7125 8.65002 21.5833 8.77502 21.4 8.87502L12.95 13.475C12.8 13.5584 12.6458 13.6209 12.4875 13.6625C12.3292 13.7042 12.1667 13.725 12 13.725ZM12 15.725L19.85 11.45C19.8833 11.4334 20.0417 11.3917 20.325 11.325C20.6083 11.325 20.8458 11.4209 21.0375 11.6125C21.2292 11.8042 21.325 12.0417 21.325 12.325C21.325 12.5084 21.2833 12.675 21.2 12.825C21.1167 12.975 20.9833 13.1 20.8 13.2L12.95 17.475C12.8 17.5584 12.6458 17.6209 12.4875 17.6625C12.3292 17.7042 12.1667 17.725 12 17.725C11.8333 17.725 11.6708 17.7042 11.5125 17.6625C11.3542 17.6209 11.2 17.5584 11.05 17.475L3.2 13.2C3.01667 13.1 2.88333 12.975 2.8 12.825C2.71667 12.675 2.675 12.5084 2.675 12.325C2.675 12.0417 2.77083 11.8042 2.9625 11.6125C3.15417 11.4209 3.39167 11.325 3.675 11.325C3.75833 11.325 3.8375 11.3375 3.9125 11.3625C3.9875 11.3875 4.06667 11.4167 4.15 11.45L12 15.725ZM12 19.725L19.85 15.45C19.8833 15.4334 20.0417 15.3917 20.325 15.325C20.6083 15.325 20.8458 15.4209 21.0375 15.6125C21.2292 15.8042 21.325 16.0417 21.325 16.325C21.325 16.5084 21.2833 16.675 21.2 16.825C21.1167 16.975 20.9833 17.1 20.8 17.2L12.95 21.475C12.8 21.5584 12.6458 21.6209 12.4875 21.6625C12.3292 21.7042 12.1667 21.725 12 21.725C11.8333 21.725 11.6708 21.7042 11.5125 21.6625C11.3542 21.6209 11.2 21.5584 11.05 21.475L3.2 17.2C3.01667 17.1 2.88333 16.975 2.8 16.825C2.71667 16.675 2.675 16.5084 2.675 16.325C2.675 16.0417 2.77083 15.8042 2.9625 15.6125C3.15417 15.4209 3.39167 15.325 3.675 15.325C3.75833 15.325 3.8375 15.3375 3.9125 15.3625C3.9875 15.3875 4.06667 15.4167 4.15 15.45L12 19.725Z" })
    ]
  }
), t2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M16 8.4L7.1 17.3C6.91667 17.4833 6.68334 17.575 6.4 17.575C6.11667 17.575 5.88334 17.4833 5.7 17.3C5.51667 17.1167 5.425 16.8833 5.425 16.6C5.425 16.3167 5.51667 16.0833 5.7 15.9L14.6 7H7C6.71667 7 6.47917 6.90417 6.2875 6.7125C6.09584 6.52083 6 6.28333 6 6C6 5.71667 6.09584 5.47917 6.2875 5.2875C6.47917 5.09583 6.71667 5 7 5H17C17.2833 5 17.5208 5.09583 17.7125 5.2875C17.9042 5.47917 18 5.71667 18 6V16C18 16.2833 17.9042 16.5208 17.7125 16.7125C17.5208 16.9042 17.2833 17 17 17C16.7167 17 16.4792 16.9042 16.2875 16.7125C16.0958 16.5208 16 16.2833 16 16V8.4Z" })
    ]
  }
), Xp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M4 19C3.45 19 2.97917 18.8042 2.5875 18.4125C2.19583 18.0208 2 17.55 2 17V7C2 6.45 2.19583 5.97917 2.5875 5.5875C2.97917 5.19583 3.45 5 4 5H20C20.55 5 21.0208 5.19583 21.4125 5.5875C21.8042 5.97917 22 6.45 22 7V17C22 17.55 21.8042 18.0208 21.4125 18.4125C21.0208 18.8042 20.55 19 20 19H4ZM9 16H15C15.2833 16 15.5208 15.9042 15.7125 15.7125C15.9042 15.5208 16 15.2833 16 15C16 14.7167 15.9042 14.4792 15.7125 14.2875C15.5208 14.0958 15.2833 14 15 14H9C8.71667 14 8.47917 14.0958 8.2875 14.2875C8.09583 14.4792 8 14.7167 8 15C8 15.2833 8.09583 15.5208 8.2875 15.7125C8.47917 15.9042 8.71667 16 9 16ZM6 10C6.28333 10 6.52083 9.90417 6.7125 9.7125C6.90417 9.52083 7 9.28333 7 9C7 8.71667 6.90417 8.47917 6.7125 8.2875C6.52083 8.09583 6.28333 8 6 8C5.71667 8 5.47917 8.09583 5.2875 8.2875C5.09583 8.47917 5 8.71667 5 9C5 9.28333 5.09583 9.52083 5.2875 9.7125C5.47917 9.90417 5.71667 10 6 10ZM9 10C9.28333 10 9.52083 9.90417 9.7125 9.7125C9.90417 9.52083 10 9.28333 10 9C10 8.71667 9.90417 8.47917 9.7125 8.2875C9.52083 8.09583 9.28333 8 9 8C8.71667 8 8.47917 8.09583 8.2875 8.2875C8.09583 8.47917 8 8.71667 8 9C8 9.28333 8.09583 9.52083 8.2875 9.7125C8.47917 9.90417 8.71667 10 9 10ZM12 10C12.2833 10 12.5208 9.90417 12.7125 9.7125C12.9042 9.52083 13 9.28333 13 9C13 8.71667 12.9042 8.47917 12.7125 8.2875C12.5208 8.09583 12.2833 8 12 8C11.7167 8 11.4792 8.09583 11.2875 8.2875C11.0958 8.47917 11 8.71667 11 9C11 9.28333 11.0958 9.52083 11.2875 9.7125C11.4792 9.90417 11.7167 10 12 10ZM15 10C15.2833 10 15.5208 9.90417 15.7125 9.7125C15.9042 9.52083 16 9.28333 16 9C16 8.71667 15.9042 8.47917 15.7125 8.2875C15.5208 8.09583 15.2833 8 15 8C14.7167 8 14.4792 8.09583 14.2875 8.2875C14.0958 8.47917 14 8.71667 14 9C14 9.28333 14.0958 9.52083 14.2875 9.7125C14.4792 9.90417 14.7167 10 15 10ZM18 10C18.2833 10 18.5208 9.90417 18.7125 9.7125C18.9042 9.52083 19 9.28333 19 9C19 8.71667 18.9042 8.47917 18.7125 8.2875C18.5208 8.09583 18.2833 8 18 8C17.7167 8 17.4792 8.09583 17.2875 8.2875C17.0958 8.47917 17 8.71667 17 9C17 9.28333 17.0958 9.52083 17.2875 9.7125C17.4792 9.90417 17.7167 10 18 10ZM6 13C6.28333 13 6.52083 12.9042 6.7125 12.7125C6.90417 12.5208 7 12.2833 7 12C7 11.7167 6.90417 11.4792 6.7125 11.2875C6.52083 11.0958 6.28333 11 6 11C5.71667 11 5.47917 11.0958 5.2875 11.2875C5.09583 11.4792 5 11.7167 5 12C5 12.2833 5.09583 12.5208 5.2875 12.7125C5.47917 12.9042 5.71667 13 6 13ZM9 13C9.28333 13 9.52083 12.9042 9.7125 12.7125C9.90417 12.5208 10 12.2833 10 12C10 11.7167 9.90417 11.4792 9.7125 11.2875C9.52083 11.0958 9.28333 11 9 11C8.71667 11 8.47917 11.0958 8.2875 11.2875C8.09583 11.4792 8 11.7167 8 12C8 12.2833 8.09583 12.5208 8.2875 12.7125C8.47917 12.9042 8.71667 13 9 13ZM12 13C12.2833 13 12.5208 12.9042 12.7125 12.7125C12.9042 12.5208 13 12.2833 13 12C13 11.7167 12.9042 11.4792 12.7125 11.2875C12.5208 11.0958 12.2833 11 12 11C11.7167 11 11.4792 11.0958 11.2875 11.2875C11.0958 11.4792 11 11.7167 11 12C11 12.2833 11.0958 12.5208 11.2875 12.7125C11.4792 12.9042 11.7167 13 12 13ZM15 13C15.2833 13 15.5208 12.9042 15.7125 12.7125C15.9042 12.5208 16 12.2833 16 12C16 11.7167 15.9042 11.4792 15.7125 11.2875C15.5208 11.0958 15.2833 11 15 11C14.7167 11 14.4792 11.0958 14.2875 11.2875C14.0958 11.4792 14 11.7167 14 12C14 12.2833 14.0958 12.5208 14.2875 12.7125C14.4792 12.9042 14.7167 13 15 13ZM18 13C18.2833 13 18.5208 12.9042 18.7125 12.7125C18.9042 12.5208 19 12.2833 19 12C19 11.7167 18.9042 11.4792 18.7125 11.2875C18.5208 11.0958 18.2833 11 18 11C17.7167 11 17.4792 11.0958 17.2875 11.2875C17.0958 11.4792 17 11.7167 17 12C17 12.2833 17.0958 12.5208 17.2875 12.7125C17.4792 12.9042 17.7167 13 18 13Z" })
    ]
  }
), Yp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M7.825 13L12.725 17.9C12.925 18.1 13.0208 18.3334 13.0125 18.6C13.0042 18.8667 12.9 19.1 12.7 19.3C12.5 19.4834 12.2667 19.5792 12 19.5875C11.7333 19.5959 11.5 19.5 11.3 19.3L4.7 12.7C4.6 12.6 4.52917 12.4917 4.4875 12.375C4.44584 12.2584 4.425 12.1334 4.425 12C4.425 11.8667 4.44584 11.7417 4.4875 11.625C4.52917 11.5084 4.6 11.4 4.7 11.3L11.3 4.70005C11.4833 4.51672 11.7125 4.42505 11.9875 4.42505C12.2625 4.42505 12.5 4.51672 12.7 4.70005C12.9 4.90005 13 5.13755 13 5.41255C13 5.68755 12.9 5.92505 12.7 6.12505L7.825 11H19C19.2833 11 19.5208 11.0959 19.7125 11.2875C19.9042 11.4792 20 11.7167 20 12C20 12.2834 19.9042 12.5209 19.7125 12.7125C19.5208 12.9042 19.2833 13 19 13H7.825Z" })
    ]
  }
), Kp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("g", { "clip-path": "url(#clip0_758_951)", children: /* @__PURE__ */ i("path", { d: "M12.025 19C11.0917 19 10.2 18.825 9.35 18.475C8.5 18.125 7.74167 17.6167 7.075 16.95C6.40833 16.2833 5.9 15.525 5.55 14.675C5.2 13.825 5.025 12.9333 5.025 12C5.025 11.15 5.16667 10.3375 5.45 9.5625C5.73333 8.7875 6.15 8.08333 6.7 7.45C6.91667 7.21667 7.18333 7.1375 7.5 7.2125C7.81667 7.2875 8.04167 7.49167 8.175 7.825C8.525 8.74167 8.9625 9.60833 9.4875 10.425C10.0125 11.2417 10.625 12 11.325 12.7C12.025 13.4 12.7833 14.0125 13.6 14.5375C14.4167 15.0625 15.2833 15.5 16.2 15.85C16.5333 15.9833 16.7375 16.2083 16.8125 16.525C16.8875 16.8417 16.8083 17.1083 16.575 17.325C15.9417 17.875 15.2375 18.2917 14.4625 18.575C13.6875 18.8583 12.875 19 12.025 19ZM17.6 14.2C17.3333 14.1167 17.1417 13.9458 17.025 13.6875C16.9083 13.4292 16.875 13.1583 16.925 12.875C17.075 12.075 17.025 11.2875 16.775 10.5125C16.525 9.7375 16.1083 9.05833 15.525 8.475C14.9417 7.89167 14.2708 7.47917 13.5125 7.2375C12.7542 6.99583 11.9833 6.94167 11.2 7.075C10.9167 7.125 10.65 7.09167 10.4 6.975C10.15 6.85833 9.975 6.66667 9.875 6.4C9.775 6.13333 9.7875 5.875 9.9125 5.625C10.0375 5.375 10.2333 5.21667 10.5 5.15C11.65 4.9 12.8 4.9375 13.95 5.2625C15.1 5.5875 16.1083 6.18333 16.975 7.05C17.825 7.9 18.4167 8.9 18.75 10.05C19.0833 11.2 19.125 12.35 18.875 13.5C18.8083 13.7833 18.65 13.9917 18.4 14.125C18.15 14.2583 17.8833 14.2833 17.6 14.2ZM12 3C11.7167 3 11.4792 2.90417 11.2875 2.7125C11.0958 2.52083 11 2.28333 11 2V1C11 0.716667 11.0958 0.479167 11.2875 0.2875C11.4792 0.0958333 11.7167 0 12 0C12.2833 0 12.5208 0.0958333 12.7125 0.2875C12.9042 0.479167 13 0.716667 13 1V2C13 2.28333 12.9042 2.52083 12.7125 2.7125C12.5208 2.90417 12.2833 3 12 3ZM12 24C11.7167 24 11.4792 23.9042 11.2875 23.7125C11.0958 23.5208 11 23.2833 11 23V22C11 21.7167 11.0958 21.4792 11.2875 21.2875C11.4792 21.0958 11.7167 21 12 21C12.2833 21 12.5208 21.0958 12.7125 21.2875C12.9042 21.4792 13 21.7167 13 22V23C13 23.2833 12.9042 23.5208 12.7125 23.7125C12.5208 23.9042 12.2833 24 12 24ZM18.375 5.65C18.175 5.45 18.075 5.2125 18.075 4.9375C18.075 4.6625 18.175 4.425 18.375 4.225L19.075 3.525C19.2583 3.34167 19.4875 3.25 19.7625 3.25C20.0375 3.25 20.275 3.34167 20.475 3.525C20.675 3.725 20.775 3.9625 20.775 4.2375C20.775 4.5125 20.675 4.75 20.475 4.95L19.775 5.65C19.575 5.85 19.3417 5.95 19.075 5.95C18.8083 5.95 18.575 5.85 18.375 5.65ZM3.525 20.475C3.325 20.275 3.225 20.0375 3.225 19.7625C3.225 19.4875 3.325 19.25 3.525 19.05L4.225 18.35C4.425 18.15 4.65833 18.05 4.925 18.05C5.19167 18.05 5.425 18.15 5.625 18.35C5.825 18.55 5.925 18.7875 5.925 19.0625C5.925 19.3375 5.825 19.575 5.625 19.775L4.925 20.475C4.74167 20.6583 4.5125 20.75 4.2375 20.75C3.9625 20.75 3.725 20.6583 3.525 20.475ZM22 13C21.7167 13 21.4792 12.9042 21.2875 12.7125C21.0958 12.5208 21 12.2833 21 12C21 11.7167 21.0958 11.4792 21.2875 11.2875C21.4792 11.0958 21.7167 11 22 11H23C23.2833 11 23.5208 11.0958 23.7125 11.2875C23.9042 11.4792 24 11.7167 24 12C24 12.2833 23.9042 12.5208 23.7125 12.7125C23.5208 12.9042 23.2833 13 23 13H22ZM1 13C0.716667 13 0.479167 12.9042 0.2875 12.7125C0.0958333 12.5208 0 12.2833 0 12C0 11.7167 0.0958333 11.4792 0.2875 11.2875C0.479167 11.0958 0.716667 11 1 11H2C2.28333 11 2.52083 11.0958 2.7125 11.2875C2.90417 11.4792 3 11.7167 3 12C3 12.2833 2.90417 12.5208 2.7125 12.7125C2.52083 12.9042 2.28333 13 2 13H1ZM20.475 20.475C20.275 20.675 20.0375 20.775 19.7625 20.775C19.4875 20.775 19.25 20.675 19.05 20.475L18.35 19.775C18.15 19.575 18.05 19.3417 18.05 19.075C18.05 18.8083 18.15 18.575 18.35 18.375C18.55 18.175 18.7875 18.075 19.0625 18.075C19.3375 18.075 19.575 18.175 19.775 18.375L20.475 19.075C20.6583 19.2583 20.75 19.4875 20.75 19.7625C20.75 20.0375 20.6583 20.275 20.475 20.475ZM5.65 5.625C5.45 5.825 5.2125 5.925 4.9375 5.925C4.6625 5.925 4.425 5.825 4.225 5.625L3.525 4.925C3.34167 4.74167 3.25 4.5125 3.25 4.2375C3.25 3.9625 3.34167 3.725 3.525 3.525C3.725 3.325 3.9625 3.225 4.2375 3.225C4.5125 3.225 4.75 3.325 4.95 3.525L5.65 4.225C5.85 4.425 5.95 4.65833 5.95 4.925C5.95 5.19167 5.85 5.425 5.65 5.625Z" }) }),
      /* @__PURE__ */ i("defs", { children: /* @__PURE__ */ i("clipPath", { id: "clip0_758_951", children: /* @__PURE__ */ i("rect", { width: "24", height: "24" }) }) })
    ]
  }
), Jp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M12 17C10.6167 17 9.4375 16.5125 8.4625 15.5375C7.4875 14.5625 7 13.3833 7 12C7 10.6167 7.4875 9.4375 8.4625 8.4625C9.4375 7.4875 10.6167 7 12 7C13.3833 7 14.5625 7.4875 15.5375 8.4625C16.5125 9.4375 17 10.6167 17 12C17 13.3833 16.5125 14.5625 15.5375 15.5375C14.5625 16.5125 13.3833 17 12 17ZM2 13C1.71667 13 1.47917 12.9042 1.2875 12.7125C1.09583 12.5208 1 12.2833 1 12C1 11.7167 1.09583 11.4792 1.2875 11.2875C1.47917 11.0958 1.71667 11 2 11H4C4.28333 11 4.52083 11.0958 4.7125 11.2875C4.90417 11.4792 5 11.7167 5 12C5 12.2833 4.90417 12.5208 4.7125 12.7125C4.52083 12.9042 4.28333 13 4 13H2ZM20 13C19.7167 13 19.4792 12.9042 19.2875 12.7125C19.0958 12.5208 19 12.2833 19 12C19 11.7167 19.0958 11.4792 19.2875 11.2875C19.4792 11.0958 19.7167 11 20 11H22C22.2833 11 22.5208 11.0958 22.7125 11.2875C22.9042 11.4792 23 11.7167 23 12C23 12.2833 22.9042 12.5208 22.7125 12.7125C22.5208 12.9042 22.2833 13 22 13H20ZM12 5C11.7167 5 11.4792 4.90417 11.2875 4.7125C11.0958 4.52083 11 4.28333 11 4V2C11 1.71667 11.0958 1.47917 11.2875 1.2875C11.4792 1.09583 11.7167 1 12 1C12.2833 1 12.5208 1.09583 12.7125 1.2875C12.9042 1.47917 13 1.71667 13 2V4C13 4.28333 12.9042 4.52083 12.7125 4.7125C12.5208 4.90417 12.2833 5 12 5ZM12 23C11.7167 23 11.4792 22.9042 11.2875 22.7125C11.0958 22.5208 11 22.2833 11 22V20C11 19.7167 11.0958 19.4792 11.2875 19.2875C11.4792 19.0958 11.7167 19 12 19C12.2833 19 12.5208 19.0958 12.7125 19.2875C12.9042 19.4792 13 19.7167 13 20V22C13 22.2833 12.9042 22.5208 12.7125 22.7125C12.5208 22.9042 12.2833 23 12 23ZM5.65 7.05L4.575 6C4.375 5.81667 4.27917 5.58333 4.2875 5.3C4.29583 5.01667 4.39167 4.775 4.575 4.575C4.775 4.375 5.01667 4.275 5.3 4.275C5.58333 4.275 5.81667 4.375 6 4.575L7.05 5.65C7.23333 5.85 7.325 6.08333 7.325 6.35C7.325 6.61667 7.23333 6.85 7.05 7.05C6.86667 7.25 6.6375 7.34583 6.3625 7.3375C6.0875 7.32917 5.85 7.23333 5.65 7.05ZM18 19.425L16.95 18.35C16.7667 18.15 16.675 17.9125 16.675 17.6375C16.675 17.3625 16.7667 17.1333 16.95 16.95C17.1333 16.75 17.3625 16.6542 17.6375 16.6625C17.9125 16.6708 18.15 16.7667 18.35 16.95L19.425 18C19.625 18.1833 19.7208 18.4167 19.7125 18.7C19.7042 18.9833 19.6083 19.225 19.425 19.425C19.225 19.625 18.9833 19.725 18.7 19.725C18.4167 19.725 18.1833 19.625 18 19.425ZM16.95 7.05C16.75 6.86667 16.6542 6.6375 16.6625 6.3625C16.6708 6.0875 16.7667 5.85 16.95 5.65L18 4.575C18.1833 4.375 18.4167 4.27917 18.7 4.2875C18.9833 4.29583 19.225 4.39167 19.425 4.575C19.625 4.775 19.725 5.01667 19.725 5.3C19.725 5.58333 19.625 5.81667 19.425 6L18.35 7.05C18.15 7.23333 17.9167 7.325 17.65 7.325C17.3833 7.325 17.15 7.23333 16.95 7.05ZM4.575 19.425C4.375 19.225 4.275 18.9833 4.275 18.7C4.275 18.4167 4.375 18.1833 4.575 18L5.65 16.95C5.85 16.7667 6.0875 16.675 6.3625 16.675C6.6375 16.675 6.86667 16.7667 7.05 16.95C7.25 17.1333 7.34583 17.3625 7.3375 17.6375C7.32917 17.9125 7.23333 18.15 7.05 18.35L6 19.425C5.81667 19.625 5.58333 19.7208 5.3 19.7125C5.01667 19.7042 4.775 19.6083 4.575 19.425Z" })
    ]
  }
), Qp = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M14.5 2.75C11.639 2.75 9.25 5.139 9.25 8V9.75H6.5C6.4337 9.75 6.37011 9.77634 6.32322 9.82322C6.27634 9.87011 6.25 9.9337 6.25 10V14C6.25 14.138 6.362 14.25 6.5 14.25H9.25V21C9.25 21.138 9.362 21.25 9.5 21.25H13.5C13.5663 21.25 13.6299 21.2237 13.6768 21.1768C13.7237 21.1299 13.75 21.0663 13.75 21V14.25H16.5C16.5557 14.2498 16.6098 14.2311 16.6537 14.1966C16.6975 14.1622 16.7286 14.1141 16.742 14.06L17.742 10.06C17.7511 10.0232 17.7517 9.98487 17.7438 9.94783C17.7359 9.91078 17.7197 9.87602 17.6964 9.84616C17.6731 9.8163 17.6433 9.79213 17.6093 9.77547C17.5752 9.75882 17.5379 9.7501 17.5 9.75H13.75V8C13.7526 7.80189 13.8324 7.61263 13.9725 7.47253C14.1126 7.33244 14.3019 7.25259 14.5 7.25H17.5C17.5663 7.25 17.6299 7.22366 17.6768 7.17678C17.7237 7.12989 17.75 7.0663 17.75 7V3C17.75 2.9337 17.7237 2.87011 17.6768 2.82322C17.6299 2.77634 17.5663 2.75 17.5 2.75H14.5Z" })
    ]
  }
), e8 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM11 19.95V18C10.45 18 9.97917 17.8042 9.5875 17.4125C9.19583 17.0208 9 16.55 9 16V15L4.2 10.2C4.15 10.5 4.10417 10.8 4.0625 11.1C4.02083 11.4 4 11.7 4 12C4 14.0167 4.6625 15.7833 5.9875 17.3C7.3125 18.8167 8.98333 19.7 11 19.95ZM17.9 17.4C18.5833 16.65 19.1042 15.8125 19.4625 14.8875C19.8208 13.9625 20 13 20 12C20 10.3667 19.5458 8.875 18.6375 7.525C17.7292 6.175 16.5167 5.2 15 4.6V5C15 5.55 14.8042 6.02083 14.4125 6.4125C14.0208 6.80417 13.55 7 13 7H11V9C11 9.28333 10.9042 9.52083 10.7125 9.7125C10.5208 9.90417 10.2833 10 10 10H8V12H14C14.2833 12 14.5208 12.0958 14.7125 12.2875C14.9042 12.4792 15 12.7167 15 13V16H16C16.4333 16 16.825 16.1292 17.175 16.3875C17.525 16.6458 17.7667 16.9833 17.9 17.4Z" })
    ]
  }
), t8 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M8.44433 3L8.56347 3.00684C8.83884 3.03982 9.09031 3.18643 9.25488 3.41406L13.4131 9.17188L19.293 3.29297C19.6835 2.90244 20.3165 2.90244 20.707 3.29297C21.0975 3.68349 21.0975 4.31651 20.707 4.70703L14.5996 10.8135L20.8105 19.4141C21.0303 19.7184 21.0614 20.1208 20.8906 20.4551C20.7197 20.7894 20.3755 21 20 21H15.5557C15.2347 21 14.9331 20.846 14.7451 20.5859L10.5859 14.8271L4.70703 20.707C4.3165 21.0976 3.68349 21.0976 3.29296 20.707C2.90244 20.3165 2.90244 19.6835 3.29296 19.293L9.39941 13.1855L3.18945 4.58594C2.96965 4.28158 2.93856 3.87922 3.10937 3.54492C3.28033 3.21058 3.62447 3 3.99999 3H8.44433ZM11.5205 12.7051H11.5195L16.0674 19H18.0439L12.4795 11.2949V11.2939L7.93261 5H5.95605L11.5205 12.7051Z" })
    ]
  }
), r8 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 4C12.855 4 13.732 4.022 14.582 4.058L15.586 4.106L16.547 4.163L17.447 4.224L18.269 4.288C19.1612 4.35589 20.0008 4.73643 20.64 5.3626C21.2791 5.98877 21.6768 6.8204 21.763 7.711L21.803 8.136L21.878 9.046C21.948 9.989 22 11.017 22 12C22 12.983 21.948 14.011 21.878 14.954L21.803 15.864L21.763 16.289C21.6768 17.1798 21.2789 18.0115 20.6396 18.6377C20.0002 19.2639 19.1604 19.6443 18.268 19.712L17.448 19.775L16.548 19.837L15.586 19.894L14.582 19.942C13.7218 19.9793 12.861 19.9986 12 20C11.139 19.9986 10.2782 19.9793 9.418 19.942L8.414 19.894L7.453 19.837L6.553 19.775L5.731 19.712C4.83881 19.6441 3.9992 19.2636 3.36004 18.6374C2.72089 18.0112 2.32319 17.1796 2.237 16.289L2.197 15.864L2.122 14.954C2.04583 13.9711 2.00514 12.9858 2 12C2 11.017 2.052 9.989 2.122 9.046L2.197 8.136L2.237 7.711C2.32316 6.82055 2.72071 5.98905 3.35966 5.36291C3.99861 4.73676 4.83799 4.35612 5.73 4.288L6.551 4.224L7.451 4.163L8.413 4.106L9.417 4.058C10.2775 4.02073 11.1387 4.00139 12 4ZM10 9.575V14.425C10 14.887 10.5 15.175 10.9 14.945L15.1 12.52C15.1914 12.4674 15.2673 12.3916 15.3201 12.3003C15.3729 12.209 15.4007 12.1055 15.4007 12C15.4007 11.8945 15.3729 11.791 15.3201 11.6997C15.2673 11.6084 15.1914 11.5326 15.1 11.48L10.9 9.056C10.8088 9.00332 10.7053 8.9756 10.5999 8.97562C10.4945 8.97563 10.3911 9.00339 10.2998 9.0561C10.2086 9.1088 10.1329 9.1846 10.0802 9.27587C10.0276 9.36713 9.99993 9.47065 10 9.576V9.575Z"
        }
      )
    ]
  }
), o8 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M11.95 1H12.05C13.877 1 15.316 1 16.47 1.105C17.648 1.211 18.626 1.433 19.5 1.938C20.564 2.55235 21.4476 3.43595 22.062 4.5C22.567 5.374 22.789 6.352 22.895 7.53C23 8.684 23 10.123 23 11.95V12.05C23 13.877 23 15.316 22.895 16.47C22.789 17.648 22.567 18.626 22.062 19.5C21.4476 20.564 20.564 21.4476 19.5 22.062C18.626 22.567 17.648 22.789 16.47 22.895C15.316 23 13.877 23 12.05 23H11.95C10.123 23 8.684 23 7.53 22.895C6.352 22.789 5.374 22.567 4.5 22.062C3.43595 21.4476 2.55235 20.564 1.938 19.5C1.433 18.626 1.211 17.648 1.105 16.47C1 15.316 1 13.877 1 12.05V11.95C1 10.123 1 8.684 1.105 7.53C1.211 6.352 1.433 5.374 1.938 4.5C2.55235 3.43595 3.43595 2.55235 4.5 1.938C5.374 1.433 6.352 1.211 7.53 1.105C8.684 1 10.123 1 11.95 1ZM7.71 3.096C6.671 3.191 6.019 3.37 5.5 3.67C4.73997 4.10882 4.10882 4.73997 3.67 5.5C3.37 6.019 3.19 6.671 3.096 7.71C3.001 8.764 3 10.112 3 12C3 13.888 3.001 15.236 3.096 16.29C3.191 17.329 3.37 17.981 3.67 18.5C4.10882 19.26 4.73997 19.8912 5.5 20.33C6.019 20.63 6.671 20.81 7.71 20.904C8.764 20.999 10.112 21 12 21C13.888 21 15.236 20.999 16.29 20.904C17.329 20.809 17.981 20.63 18.5 20.33C19.26 19.8912 19.8912 19.26 20.33 18.5C20.63 17.981 20.81 17.329 20.904 16.29C20.999 15.237 21 13.888 21 12C21 10.112 20.999 8.764 20.904 7.71C20.809 6.671 20.63 6.019 20.33 5.5C19.8912 4.73997 19.26 4.10882 18.5 3.67C17.981 3.37 17.329 3.19 16.29 3.096C15.237 3.001 13.888 3 12 3C10.112 3 8.764 3.001 7.71 3.096ZM16.75 6.252C16.75 5.7 17.2 5.25 17.752 5.25C18.304 5.25 18.754 5.7 18.754 6.252C18.754 6.804 18.304 7.254 17.752 7.254C17.2 7.254 16.75 6.804 16.75 6.252ZM12 8.5C11.5404 8.5 11.0852 8.59053 10.6606 8.76642C10.236 8.94231 9.85013 9.20012 9.52513 9.52513C9.20012 9.85013 8.94231 10.236 8.76642 10.6606C8.59053 11.0852 8.5 11.5404 8.5 12C8.5 12.4596 8.59053 12.9148 8.76642 13.3394C8.94231 13.764 9.20012 14.1499 9.52513 14.4749C9.85013 14.7999 10.236 15.0577 10.6606 15.2336C11.0852 15.4095 11.5404 15.5 12 15.5C12.9283 15.5 13.8185 15.1313 14.4749 14.4749C15.1313 13.8185 15.5 12.9283 15.5 12C15.5 11.0717 15.1313 10.1815 14.4749 9.52513C13.8185 8.86875 12.9283 8.5 12 8.5ZM6.5 12C6.5 10.5413 7.07946 9.14236 8.11091 8.11091C9.14236 7.07946 10.5413 6.5 12 6.5C13.4587 6.5 14.8576 7.07946 15.8891 8.11091C16.9205 9.14236 17.5 10.5413 17.5 12C17.5 13.4587 16.9205 14.8576 15.8891 15.8891C14.8576 16.9205 13.4587 17.5 12 17.5C10.5413 17.5 9.14236 16.9205 8.11091 15.8891C7.07946 14.8576 6.5 13.4587 6.5 12Z" })
    ]
  }
), i8 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M12 21C10.755 21 9.585 20.7638 8.49 20.2913C7.395 19.8188 6.4425 19.1775 5.6325 18.3675C4.8225 17.5575 4.18125 16.605 3.70875 15.51C3.23625 14.415 3 13.245 3 12C3 10.755 3.23625 9.585 3.70875 8.49C4.18125 7.395 4.8225 6.4425 5.6325 5.6325C6.4425 4.8225 7.395 4.18125 8.49 3.70875C9.585 3.23625 10.755 3 12 3C13.245 3 14.415 3.23625 15.51 3.70875C16.605 4.18125 17.5575 4.8225 18.3675 5.6325C19.1775 6.4425 19.8188 7.395 20.2913 8.49C20.7638 9.585 21 10.755 21 12C21 13.245 20.7638 14.415 20.2913 15.51C19.8188 16.605 19.1775 17.5575 18.3675 18.3675C17.5575 19.1775 16.605 19.8188 15.51 20.2913C14.415 20.7638 13.245 21 12 21ZM12.9 19.1325C14.685 18.9075 16.1813 18.1238 17.3888 16.7813C18.5963 15.4388 19.2 13.845 19.2 12C19.2 10.155 18.5963 8.56125 17.3888 7.21875C16.1813 5.87625 14.685 5.0925 12.9 4.8675L12.9 19.1325Z" })
    ]
  }
), n8 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M12 21C10.755 21 9.585 20.7638 8.49 20.2913C7.395 19.8188 6.4425 19.1775 5.6325 18.3675C4.8225 17.5575 4.18125 16.605 3.70875 15.51C3.23625 14.415 3 13.245 3 12C3 10.755 3.23625 9.585 3.70875 8.49C4.18125 7.395 4.8225 6.4425 5.6325 5.6325C6.4425 4.8225 7.395 4.18125 8.49 3.70875C9.585 3.23625 10.755 3 12 3C13.245 3 14.415 3.23625 15.51 3.70875C16.605 4.18125 17.5575 4.8225 18.3675 5.6325C19.1775 6.4425 19.8188 7.395 20.2913 8.49C20.7638 9.585 21 10.755 21 12C21 13.245 20.7638 14.415 20.2913 15.51C19.8188 16.605 19.1775 17.5575 18.3675 18.3675C17.5575 19.1775 16.605 19.8188 15.51 20.2913C14.415 20.7638 13.245 21 12 21ZM12.9 19.1325C14.685 18.9075 16.1813 18.1238 17.3888 16.7813C18.5963 15.4388 19.2 13.845 19.2 12C19.2 10.155 18.5963 8.56125 17.3888 7.21875C16.1813 5.87625 14.685 5.0925 12.9 4.8675V19.1325Z" }),
      /* @__PURE__ */ i("path", { d: "M19 4H20V5C20 5.28333 20.0958 5.52083 20.2875 5.7125C20.4792 5.90417 20.7167 6 21 6C21.2833 6 21.5208 5.90417 21.7125 5.7125C21.9042 5.52083 22 5.28333 22 5V4H23C23.2833 4 23.5208 3.90417 23.7125 3.7125C23.9042 3.52083 24 3.28333 24 3C24 2.71667 23.9042 2.47917 23.7125 2.2875C23.5208 2.09583 23.2833 2 23 2H22V1C22 0.716667 21.9042 0.479167 21.7125 0.2875C21.5208 0.0958335 21.2833 0 21 0C20.7167 0 20.4792 0.0958335 20.2875 0.2875C20.0958 0.479167 20 0.716667 20 1V2H19C18.7167 2 18.4792 2.09583 18.2875 2.2875C18.0958 2.47917 18 2.71667 18 3C18 3.28333 18.0958 3.52083 18.2875 3.7125C18.4792 3.90417 18.7167 4 19 4Z" })
    ]
  }
), a8 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M12 21C10.755 21 9.585 20.7638 8.49 20.2913C7.395 19.8188 6.4425 19.1775 5.6325 18.3675C4.8225 17.5575 4.18125 16.605 3.70875 15.51C3.23625 14.415 3 13.245 3 12C3 10.755 3.23625 9.585 3.70875 8.49C4.18125 7.395 4.8225 6.4425 5.6325 5.6325C6.4425 4.8225 7.395 4.18125 8.49 3.70875C9.585 3.23625 10.755 3 12 3C13.245 3 14.415 3.23625 15.51 3.70875C16.605 4.18125 17.5575 4.8225 18.3675 5.6325C19.1775 6.4425 19.8188 7.395 20.2913 8.49C20.7638 9.585 21 10.755 21 12C21 13.245 20.7638 14.415 20.2913 15.51C19.8188 16.605 19.1775 17.5575 18.3675 18.3675C17.5575 19.1775 16.605 19.8188 15.51 20.2913C14.415 20.7638 13.245 21 12 21ZM12.9 19.1325C14.685 18.9075 16.1813 18.1238 17.3888 16.7813C18.5963 15.4388 19.2 13.845 19.2 12C19.2 10.155 18.5963 8.56125 17.3888 7.21875C16.1813 5.87625 14.685 5.0925 12.9 4.8675V19.1325Z" }),
      /* @__PURE__ */ i("path", { d: "M19 4H20H23C23.2833 4 23.5208 3.90417 23.7125 3.7125C23.9042 3.52083 24 3.28333 24 3C24 2.71667 23.9042 2.47917 23.7125 2.2875C23.5208 2.09583 23.2833 2 23 2H20H19C18.7167 2 18.4792 2.09583 18.2875 2.2875C18.0958 2.47917 18 2.71667 18 3C18 3.28333 18.0958 3.52083 18.2875 3.7125C18.4792 3.90417 18.7167 4 19 4Z" })
    ]
  }
), s8 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M12 3C13.245 3 14.415 3.23625 15.51 3.70875C16.605 4.18125 17.5575 4.8225 18.3675 5.6325C19.1775 6.4425 19.8188 7.395 20.2913 8.49C20.7638 9.585 21 10.755 21 12C21 13.245 20.7638 14.415 20.2913 15.51C19.8188 16.605 19.1775 17.5575 18.3675 18.3675C17.5575 19.1775 16.605 19.8187 15.51 20.2912C14.415 20.7637 13.245 21 12 21C10.755 21 9.585 20.7637 8.49 20.2912C7.395 19.8187 6.4425 19.1775 5.6325 18.3675C4.8225 17.5575 4.18125 16.605 3.70875 15.51C3.23625 14.415 3 13.245 3 12C3 10.755 3.23625 9.585 3.70875 8.49C4.18125 7.395 4.8225 6.4425 5.6325 5.6325C6.4425 4.8225 7.395 4.18125 8.49 3.70875C9.585 3.23625 10.755 3 12 3ZM11.1 4.8675C9.315 5.0925 7.81875 5.87625 6.61125 7.21875C5.40375 8.56125 4.8 10.155 4.8 12C4.8 13.845 5.40375 15.4387 6.61125 16.7812C7.81875 18.1237 9.315 18.9075 11.1 19.1325L11.1 4.8675Z" })
    ]
  }
), l8 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11.291 4C11.1024 4.6338 11 5.30491 11 6C11 9.86599 14.134 13 18 13C18.6952 13 19.3661 12.8967 20 12.708V20C20 20.55 19.8038 21.0204 19.4121 21.4121C19.0204 21.8038 18.55 22 18 22H4C3.45 22 2.97956 21.8038 2.58789 21.4121C2.19622 21.0204 2 20.55 2 20V6C2 5.45 2.19622 4.97956 2.58789 4.58789C2.97956 4.19622 3.45 4 4 4H11.291ZM13.25 13.3252C13.0833 13.3252 12.9496 13.3921 12.8496 13.5254L10.25 17L8.40039 14.5254C8.30039 14.3921 8.16667 14.3252 8 14.3252C7.83333 14.3252 7.69961 14.3921 7.59961 14.5254L5.59961 17.2002C5.4666 17.3667 5.4501 17.5415 5.5498 17.7246C5.6498 17.9079 5.8 18 6 18H16C16.2 18 16.3502 17.9079 16.4502 17.7246C16.5499 17.5415 16.5334 17.3667 16.4004 17.2002L13.6504 13.5254C13.5504 13.3921 13.4167 13.3252 13.25 13.3252Z"
        }
      ),
      /* @__PURE__ */ i("path", { d: "M18 8.5C18.1417 8.5 18.2604 8.45208 18.3563 8.35625C18.4521 8.26042 18.5 8.14167 18.5 8V6C18.5 5.85833 18.4521 5.73958 18.3563 5.64375C18.2604 5.54792 18.1417 5.5 18 5.5C17.8583 5.5 17.7396 5.54792 17.6438 5.64375C17.5479 5.73958 17.5 5.85833 17.5 6V8C17.5 8.14167 17.5479 8.26042 17.6438 8.35625C17.7396 8.45208 17.8583 8.5 18 8.5ZM18 4.5C18.1417 4.5 18.2604 4.45208 18.3563 4.35625C18.4521 4.26042 18.5 4.14167 18.5 4C18.5 3.85833 18.4521 3.73958 18.3563 3.64375C18.2604 3.54792 18.1417 3.5 18 3.5C17.8583 3.5 17.7396 3.54792 17.6438 3.64375C17.5479 3.73958 17.5 3.85833 17.5 4C17.5 4.14167 17.5479 4.26042 17.6438 4.35625C17.7396 4.45208 17.8583 4.5 18 4.5ZM18 11C17.3083 11 16.6583 10.8687 16.05 10.6062C15.4417 10.3437 14.9125 9.9875 14.4625 9.5375C14.0125 9.0875 13.6563 8.55833 13.3938 7.95C13.1313 7.34167 13 6.69167 13 6C13 5.30833 13.1313 4.65833 13.3938 4.05C13.6563 3.44167 14.0125 2.9125 14.4625 2.4625C14.9125 2.0125 15.4417 1.65625 16.05 1.39375C16.6583 1.13125 17.3083 1 18 1C18.6917 1 19.3417 1.13125 19.95 1.39375C20.5583 1.65625 21.0875 2.0125 21.5375 2.4625C21.9875 2.9125 22.3438 3.44167 22.6063 4.05C22.8688 4.65833 23 5.30833 23 6C23 6.69167 22.8688 7.34167 22.6063 7.95C22.3438 8.55833 21.9875 9.0875 21.5375 9.5375C21.0875 9.9875 20.5583 10.3437 19.95 10.6062C19.3417 10.8687 18.6917 11 18 11Z" })
    ]
  }
), c8 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z" })
    ]
  }
), d8 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("g", { clipPath: "url(#clip0_874_1066)", children: [
        /* @__PURE__ */ i(
          "mask",
          {
            id: "mask0_874_1066",
            style: "mask-type:luminance",
            maskUnits: "userSpaceOnUse",
            x: "0",
            y: "0",
            width: "24",
            height: "24",
            children: /* @__PURE__ */ i(
              "path",
              {
                d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",
                fill: "white"
              }
            )
          }
        ),
        /* @__PURE__ */ i("g", { mask: "url(#mask0_874_1066)", children: [
          /* @__PURE__ */ i("path", { d: "M0 0H24V24H0V0Z", fill: "#14AE00" }),
          /* @__PURE__ */ i("path", { d: "M12 4.6969L21.9141 12L12 19.3031L2.08594 12L12 4.6969Z", fill: "#FFDA44" }),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M8.16562 10.3594C7.9324 10.8958 7.81729 11.4761 7.82812 12.061L15.4219 14.3953C15.7564 13.9175 15.9864 13.3744 16.0969 12.8016C14.1937 9.74066 10.4859 9.03753 8.17031 10.3641L8.16562 10.3594Z",
              fill: "#EEEEEE"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M11.9859 7.82814C11.3004 7.82987 10.6258 8.00053 10.0219 8.32502C9.19069 8.77348 8.53626 9.4907 8.16562 10.3594C9.58587 10.0578 11.0596 10.1243 12.4469 10.5526C13.8343 10.9808 15.0891 11.7566 16.0922 12.8063C16.2785 11.8573 16.1294 10.8731 15.6703 10.0219C15.3122 9.357 14.7804 8.80177 14.1315 8.41542C13.4827 8.02908 12.7411 7.8261 11.9859 7.82814ZM9.9375 11.7422C9.2222 11.7398 8.51078 11.8473 7.82812 12.061C7.83601 12.7302 8.00483 13.3878 8.32031 13.9781C8.57992 14.4609 8.93212 14.8878 9.35678 15.2344C9.78144 15.581 10.2702 15.8405 10.7952 15.998C11.3202 16.1556 11.8712 16.2082 12.4165 16.1528C12.9618 16.0974 13.4909 15.935 13.9734 15.675C14.5464 15.3665 15.0392 14.9283 15.4125 14.3953C14.7546 13.5739 13.9217 12.9095 12.9746 12.4505C12.0275 11.9915 10.9899 11.7496 9.9375 11.7422Z",
              fill: "#0052B4"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ i("defs", { children: /* @__PURE__ */ i("clipPath", { id: "clip0_874_1066", children: /* @__PURE__ */ i("rect", { width: "24", height: "24", fill: "white" }) }) })
    ]
  }
), u8 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("g", { clipPath: "url(#clip0_874_1029)", children: [
        /* @__PURE__ */ i(
          "mask",
          {
            id: "mask0_874_1029",
            style: "mask-type:luminance",
            maskUnits: "userSpaceOnUse",
            x: "0",
            y: "0",
            width: "24",
            height: "24",
            children: /* @__PURE__ */ i(
              "path",
              {
                d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",
                fill: "white"
              }
            )
          }
        ),
        /* @__PURE__ */ i("g", { mask: "url(#mask0_874_1029)", children: [
          /* @__PURE__ */ i("path", { d: "M0 6L12 4.5L24 6V18L12 19.5L0 18V6Z", fill: "#FFDA44" }),
          /* @__PURE__ */ i("path", { d: "M0 0H24V6H0V0ZM0 18H24V24H0V18Z", fill: "#D80027" }),
          /* @__PURE__ */ i("path", { d: "M6.75 14.25H6V10.5H6.75V14.25ZM12.75 14.25H13.5V10.5H12.75V14.25Z", fill: "#EEEEEE" }),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M9.75 15.375C10.9926 15.375 12 14.7034 12 13.875C12 13.0466 10.9926 12.375 9.75 12.375C8.50736 12.375 7.5 13.0466 7.5 13.875C7.5 14.7034 8.50736 15.375 9.75 15.375Z",
              fill: "#EEEEEE"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M6.75 9.375C6.75 9.16789 6.58211 9 6.375 9C6.16789 9 6 9.16789 6 9.375V9.75C6 9.95711 6.16789 10.125 6.375 10.125C6.58211 10.125 6.75 9.95711 6.75 9.75V9.375Z",
              fill: "#D80027"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M13.5 9.375C13.5 9.16789 13.3321 9 13.125 9C12.9179 9 12.75 9.16789 12.75 9.375V9.75C12.75 9.95711 12.9179 10.125 13.125 10.125C13.3321 10.125 13.5 9.95711 13.5 9.75V9.375Z",
              fill: "#D80027"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M9.75 12.75V13.875C9.75 14.1734 9.86853 14.4595 10.0795 14.6705C10.2905 14.8815 10.5766 15 10.875 15C11.1734 15 11.4595 14.8815 11.6705 14.6705C11.8815 14.4595 12 14.1734 12 13.875V12.75H10.875H9.75Z",
              fill: "#D80027"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M6.75 9.75H6C5.79289 9.75 5.625 9.91789 5.625 10.125C5.625 10.3321 5.79289 10.5 6 10.5H6.75C6.95711 10.5 7.125 10.3321 7.125 10.125C7.125 9.91789 6.95711 9.75 6.75 9.75Z",
              fill: "#FF9811"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M13.5 9.75H12.75C12.5429 9.75 12.375 9.91789 12.375 10.125C12.375 10.3321 12.5429 10.5 12.75 10.5H13.5C13.7071 10.5 13.875 10.3321 13.875 10.125C13.875 9.91789 13.7071 9.75 13.5 9.75Z",
              fill: "#FF9811"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M6.75 14.25H6C5.79289 14.25 5.625 14.4179 5.625 14.625C5.625 14.8321 5.79289 15 6 15H6.75C6.95711 15 7.125 14.8321 7.125 14.625C7.125 14.4179 6.95711 14.25 6.75 14.25Z",
              fill: "#FF9811"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M13.5 14.25H12.75C12.5429 14.25 12.375 14.4179 12.375 14.625C12.375 14.8321 12.5429 15 12.75 15H13.5C13.7071 15 13.875 14.8321 13.875 14.625C13.875 14.4179 13.7071 14.25 13.5 14.25Z",
              fill: "#FF9811"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M7.5 12.75V13.875C7.5 14.25 7.6875 14.5312 7.92188 14.7656L8.15625 14.4844L8.39062 14.9531C8.5446 14.9909 8.7054 14.9909 8.85938 14.9531L9.09375 14.4844L9.32812 14.7656C9.60938 14.5312 9.75 14.25 9.75 13.875V12.75H9.32812L9.09375 13.125L8.85938 12.75H8.39062L8.15625 13.125L7.92188 12.75H7.5Z",
              fill: "#FF9811"
            }
          ),
          /* @__PURE__ */ i("path", { d: "M5.71875 11.8125H13.7812ZM5.71875 12.9375H7.03125ZM12.4688 12.9375H13.7812Z", fill: "black" }),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M5.71875 11.625C5.66902 11.625 5.62133 11.6448 5.58617 11.6799C5.551 11.7151 5.53125 11.7628 5.53125 11.8125C5.53125 11.8622 5.551 11.9099 5.58617 11.9451C5.62133 11.9802 5.66902 12 5.71875 12H13.7812C13.831 12 13.8787 11.9802 13.9138 11.9451C13.949 11.9099 13.9688 11.8622 13.9688 11.8125C13.9688 11.7628 13.949 11.7151 13.9138 11.6799C13.8787 11.6448 13.831 11.625 13.7812 11.625H5.71875ZM5.71875 12.75C5.66902 12.75 5.62133 12.7698 5.58617 12.8049C5.551 12.8401 5.53125 12.8878 5.53125 12.9375C5.53125 12.9872 5.551 13.0349 5.58617 13.0701C5.62133 13.1052 5.66902 13.125 5.71875 13.125H7.03125C7.08098 13.125 7.12867 13.1052 7.16383 13.0701C7.199 13.0349 7.21875 12.9872 7.21875 12.9375C7.21875 12.8878 7.199 12.8401 7.16383 12.8049C7.12867 12.7698 7.08098 12.75 7.03125 12.75H5.71875ZM12.4688 12.75C12.419 12.75 12.3713 12.7698 12.3362 12.8049C12.301 12.8401 12.2812 12.8878 12.2812 12.9375C12.2812 12.9872 12.301 13.0349 12.3362 13.0701C12.3713 13.1052 12.419 13.125 12.4688 13.125H13.7812C13.831 13.125 13.8787 13.1052 13.9138 13.0701C13.949 13.0349 13.9688 12.9872 13.9688 12.9375C13.9688 12.8878 13.949 12.8401 13.9138 12.8049C13.8787 12.7698 13.831 12.75 13.7812 12.75H12.4688Z",
              fill: "#D80027"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M9.1875 7.875C8.85938 7.875 8.57812 8.10938 8.48438 8.39062L8.25 8.34375C7.82812 8.34375 7.5 8.67188 7.5 9.09375C7.5 9.51562 7.82812 9.84375 8.25 9.84375C8.57812 9.84375 8.85938 9.65625 8.95312 9.32812C9.08984 9.37744 9.23793 9.38597 9.3794 9.35269C9.52087 9.3194 9.64962 9.24573 9.75 9.14062C9.85038 9.24573 9.97913 9.3194 10.1206 9.35269C10.2621 9.38597 10.4102 9.37744 10.5469 9.32812C10.5924 9.4701 10.6791 9.5953 10.7961 9.68774C10.9131 9.78018 11.0549 9.83566 11.2036 9.8471C11.3522 9.85854 11.5009 9.82542 11.6306 9.75197C11.7604 9.67851 11.8653 9.56806 11.9319 9.43472C11.9986 9.30137 12.024 9.15118 12.005 9.00332C11.9859 8.85547 11.9232 8.71665 11.8248 8.6046C11.7265 8.49254 11.597 8.41234 11.4528 8.37423C11.3087 8.33612 11.1565 8.34183 11.0156 8.39062C10.9704 8.2691 10.8945 8.16137 10.7952 8.07795C10.6959 7.99453 10.5767 7.93827 10.4493 7.91466C10.3218 7.89104 10.1903 7.90089 10.0678 7.94323C9.94521 7.98558 9.83573 8.05897 9.75 8.15625C9.60938 7.96875 9.42188 7.875 9.1875 7.875ZM9.1875 8.25C9.42188 8.25 9.5625 8.4375 9.5625 8.625C9.5625 8.85938 9.42188 9 9.1875 9C9 9 8.8125 8.85938 8.8125 8.625C8.8125 8.4375 9 8.25 9.1875 8.25ZM10.3125 8.25C10.5469 8.25 10.6875 8.4375 10.6875 8.625C10.6875 8.85938 10.5469 9 10.3125 9C10.125 9 9.9375 8.85938 9.9375 8.625C9.9375 8.4375 10.125 8.25 10.3125 8.25ZM8.25 8.71875L8.4375 8.76562L8.625 9.14062C8.625 9.32812 8.4375 9.46875 8.25 9.46875C8.0625 9.46875 7.875 9.32812 7.875 9.09375C7.875 8.90625 8.0625 8.71875 8.25 8.71875ZM11.25 8.71875C11.4844 8.71875 11.625 8.90625 11.625 9.09375C11.625 9.32812 11.4844 9.46875 11.25 9.46875C11.0625 9.46875 10.875 9.32812 10.875 9.14062L11.0625 8.76562L11.25 8.71875Z",
              fill: "#EEEEEE"
            }
          ),
          /* @__PURE__ */ i("path", { d: "M9.375 7.5H10.125V9H9.375V7.5Z", fill: "#FF9811" }),
          /* @__PURE__ */ i("path", { d: "M9.75 10.5H12V12.75H9.75V10.5Z", fill: "#EEEEEE" }),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M11.625 9.75L11.25 10.125H8.25L7.875 9.75C7.875 9.14062 8.71875 8.625 9.75 8.625C10.7812 8.625 11.625 9.14062 11.625 9.75ZM7.5 10.5H9.75V12.75H7.5V10.5Z",
              fill: "#D80027"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M11.3438 11.3438C11.3438 11.0849 11.1339 10.875 10.875 10.875C10.6161 10.875 10.4062 11.0849 10.4062 11.3438V11.9062C10.4062 12.1651 10.6161 12.375 10.875 12.375C11.1339 12.375 11.3438 12.1651 11.3438 11.9062V11.3438Z",
              fill: "#D80027"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M7.875 10.875V11.25H8.25V12H7.875V12.375H9.375V12H9V11.25H9.375V10.875H7.875ZM8.25 10.125H11.25V10.5H8.25V10.125Z",
              fill: "#FF9811"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M8.71875 9.75C8.87408 9.75 9 9.62408 9 9.46875C9 9.31342 8.87408 9.1875 8.71875 9.1875C8.56342 9.1875 8.4375 9.31342 8.4375 9.46875C8.4375 9.62408 8.56342 9.75 8.71875 9.75Z",
              fill: "#FFDA44"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M9.75 9.75C9.90533 9.75 10.0312 9.62408 10.0312 9.46875C10.0312 9.31342 9.90533 9.1875 9.75 9.1875C9.59467 9.1875 9.46875 9.31342 9.46875 9.46875C9.46875 9.62408 9.59467 9.75 9.75 9.75Z",
              fill: "#FFDA44"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M10.7812 9.75C10.9366 9.75 11.0625 9.62408 11.0625 9.46875C11.0625 9.31342 10.9366 9.1875 10.7812 9.1875C10.6259 9.1875 10.5 9.31342 10.5 9.46875C10.5 9.62408 10.6259 9.75 10.7812 9.75Z",
              fill: "#FFDA44"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M7.92188 12.75V14.7656C8.0619 14.8628 8.22219 14.9269 8.39062 14.9531V12.75H7.92188ZM8.85938 12.75V14.9531C9.02781 14.9269 9.1881 14.8628 9.32812 14.7656V12.75H8.85938Z",
              fill: "#D80027"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M9.75 13.5C10.1642 13.5 10.5 13.1642 10.5 12.75C10.5 12.3358 10.1642 12 9.75 12C9.33579 12 9 12.3358 9 12.75C9 13.1642 9.33579 13.5 9.75 13.5Z",
              fill: "#338AF3"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M13.5 15H12.75C12.5429 15 12.375 15.1679 12.375 15.375C12.375 15.5821 12.5429 15.75 12.75 15.75H13.5C13.7071 15.75 13.875 15.5821 13.875 15.375C13.875 15.1679 13.7071 15 13.5 15Z",
              fill: "#338AF3"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M6.75 15H6C5.79289 15 5.625 15.1679 5.625 15.375C5.625 15.5821 5.79289 15.75 6 15.75H6.75C6.95711 15.75 7.125 15.5821 7.125 15.375C7.125 15.1679 6.95711 15 6.75 15Z",
              fill: "#338AF3"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ i("defs", { children: /* @__PURE__ */ i("clipPath", { id: "clip0_874_1029", children: /* @__PURE__ */ i("rect", { width: "24", height: "24", fill: "white" }) }) })
    ]
  }
), p8 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("g", { clipPath: "url(#clip0_874_1075)", children: [
        /* @__PURE__ */ i(
          "mask",
          {
            id: "mask0_874_1075",
            style: "mask-type:luminance",
            maskUnits: "userSpaceOnUse",
            x: "0",
            y: "0",
            width: "24",
            height: "24",
            children: /* @__PURE__ */ i(
              "path",
              {
                d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",
                fill: "white"
              }
            )
          }
        ),
        /* @__PURE__ */ i("g", { mask: "url(#mask0_874_1075)", children: [
          /* @__PURE__ */ i(
            "path",
            {
              d: "M12 0H24V3L22.5 4.5L24 6V9L22.5 10.5L24 12V15L22.5 16.5L24 18V21L12 22.5L0 21V18L1.5 16.5L0 15V12L12 0Z",
              fill: "#EEEEEE"
            }
          ),
          /* @__PURE__ */ i("path", { d: "M10.5 3H24V6H10.5V3ZM10.5 9H24V12H12L10.5 9ZM0 15H24V18H0V15ZM0 21H24V24H0V21Z", fill: "#D80027" }),
          /* @__PURE__ */ i("path", { d: "M0 0H12V12H0V0Z", fill: "#0052B4" }),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M8.76562 11.3906L11.4375 9.46875H8.15625L10.8281 11.3906L9.79688 8.25L8.76562 11.3906ZM4.96875 11.3906L7.64062 9.46875H4.35938L7.03125 11.3906L6 8.25L4.96875 11.3906ZM1.17188 11.3906L3.84375 9.46875H0.5625L3.23438 11.3906L2.20312 8.25L1.17188 11.3906ZM8.76562 7.59375L11.4375 5.67188H8.15625L10.8281 7.59375L9.79688 4.45312L8.76562 7.59375ZM4.96875 7.59375L7.64062 5.67188H4.35938L7.03125 7.59375L6 4.45312L4.96875 7.59375ZM1.17188 7.59375L3.84375 5.67188H0.5625L3.23438 7.59375L2.20312 4.45312L1.17188 7.59375ZM8.76562 3.75L11.4375 1.82812H8.15625L10.8281 3.75L9.79688 0.609375L8.76562 3.75ZM4.96875 3.75L7.64062 1.82812H4.35938L7.03125 3.75L6 0.609375L4.96875 3.75ZM1.17188 3.75L3.84375 1.82812H0.5625L3.23438 3.75L2.20312 0.609375L1.17188 3.75Z",
              fill: "#EEEEEE"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ i("defs", { children: /* @__PURE__ */ i("clipPath", { id: "clip0_874_1075", children: /* @__PURE__ */ i("rect", { width: "24", height: "24", fill: "white" }) }) })
    ]
  }
), h8 = () => {
  const { t: e } = B(), { theme: t, toggleTheme: r } = Go();
  return /* @__PURE__ */ i("div", { className: "flex w-full flex-col space-y-1", children: [
    /* @__PURE__ */ i("label", { className: "flex w-full items-end justify-between", children: [
      /* @__PURE__ */ i("p", { className: "flex items-center gap-2 font-semibold text-base", children: e("settings.dark_mode") }),
      /* @__PURE__ */ i("div", { class: "relative grid cursor-pointer place-items-center", children: [
        /* @__PURE__ */ i("input", { checked: t === "dark", onChange: r, type: "checkbox", className: "peer sr-only" }),
        /* @__PURE__ */ i("div", { className: "peer h-7 w-12 rounded-full bg-foreground/20 transition-colors duration-300 peer-checked:bg-primary" }),
        /* @__PURE__ */ i("div", { className: "absolute left-1 size-5 transform rounded-full bg-primary-foreground shadow-md transition-transform duration-300 peer-checked:translate-x-full" })
      ] })
    ] }),
    /* @__PURE__ */ i("span", { className: "text-muted-foreground text-sm ", children: e("settings.dark_mode_description") })
  ] });
}, fe = me(({ children: e, disabled: t, className: r, variant: o, ...n }, a) => /* @__PURE__ */ i(
  "button",
  {
    tabIndex: t ? -1 : 0,
    disabled: t,
    ref: a,
    className: H(
      "flex cursor-pointer items-center justify-center gap-x-2 rounded-md text-foreground",
      t && "*:!pointer-events-none pointer-events-none opacity-50",
      !!o && "h-9 px-4",
      o === "primary" && "bg-primary text-primary-foreground outline-primary-foreground hover:brightness-110",
      o === "outline" && "border-1 border-foreground/20 hover:bg-foreground/5",
      o === "ghost" && "hover:bg-foreground/10",
      o === "secondary" && "bg-accent text-foreground hover:brightness-110",
      o === "destructive" && "bg-destructive text-destructive-foreground outline-destructive-foreground hover:brightness-125",
      r
    ),
    type: n.type || "button",
    ...n,
    children: e
  }
)), ks = {
  pt: { key: "language.portuguese", icon: d8 },
  en: { key: "language.english", icon: p8 },
  es: { key: "language.spanish", icon: u8 }
}, g8 = () => {
  const { t: e, locale: t, setLocale: r } = B(), o = ks[t].icon;
  return /* @__PURE__ */ i("div", { className: "flex w-full flex-col space-y-1", children: [
    /* @__PURE__ */ i("div", { className: "flex w-full items-end justify-between", children: [
      /* @__PURE__ */ i("p", { className: "flex items-center gap-2 font-semibold text-base", children: e("settings.change_language") }),
      /* @__PURE__ */ i("div", { className: "dropdown dropdown-end", children: [
        /* @__PURE__ */ i(fe, { className: "h-8 gap-0 px-2 text-sm", variant: "outline", children: [
          /* @__PURE__ */ i(o, { size: 18, className: "fill-muted-foreground" }),
          /* @__PURE__ */ i("span", { className: "px-2 pb-0.5 font-semibold", children: t.toUpperCase() }),
          /* @__PURE__ */ i(Rp, { size: 18, className: "fill-muted-foreground" })
        ] }),
        /* @__PURE__ */ i("ul", { className: "dropdown-content menu mt-2 w-[160px] space-y-1 rounded-box rounded-md border-1 bg-background shadow-sm", children: Object.entries(ks).map(([n, a]) => {
          const s = t === n;
          return /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i(
            fe,
            {
              "aria-label": e(a.key),
              "aria-selected": s,
              onClick: () => r(n),
              onKeyDown: void 0,
              className: "relative flex h-8 cursor-pointer items-center justify-start gap-2 rounded-sm px-2 hover:bg-muted",
              children: [
                /* @__PURE__ */ i(a.icon, { size: 18, className: "fill-muted-foreground" }),
                /* @__PURE__ */ i("span", { className: "pb-0.5 font-medium text-sm", children: e(a.key) }),
                s && /* @__PURE__ */ i(xp, { className: "ml-auto", iconTitle: e("actived"), size: 16 })
              ]
            }
          ) }, n);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ i("span", { className: "text-muted-foreground text-sm ", children: e("settings.change_language_description") })
  ] });
}, f8 = () => {
  const { t: e } = B(), { position: t } = S();
  return /* @__PURE__ */ i("div", { className: "flex w-full flex-col space-y-1", children: [
    /* @__PURE__ */ i("p", { className: "flex items-center gap-2 font-semibold text-base", children: e("settings.position") }),
    /* @__PURE__ */ i("span", { className: "text-muted-foreground text-sm ", children: e("settings.position_description") }),
    /* @__PURE__ */ i("div", { className: "mt-2 flex items-center gap-x-8", children: [
      /* @__PURE__ */ i(
        "label",
        {
          className: H(
            "flex cursor-pointer items-center gap-2 hover:underline",
            t === "left" && "pointer-events-none"
          ),
          children: [
            /* @__PURE__ */ i(
              "input",
              {
                onChange: () => S.setState({ position: "left" }),
                checked: t === "left",
                type: "radio",
                name: "radio-4",
                className: "radio radio-sm !border-border radio-primary border-1"
              }
            ),
            /* @__PURE__ */ i("span", { className: "pb-0.5 text-sm", children: e("settings.position_left") })
          ]
        }
      ),
      /* @__PURE__ */ i(
        "label",
        {
          className: H(
            "flex cursor-pointer items-center gap-2 hover:underline",
            t === "right" && "pointer-events-none"
          ),
          children: [
            /* @__PURE__ */ i(
              "input",
              {
                onChange: () => S.setState({ position: "right" }),
                checked: t === "right",
                type: "radio",
                name: "radio-4",
                className: "radio radio-sm !border-border radio-primary border-1"
              }
            ),
            /* @__PURE__ */ i("span", { className: "pb-0.5 text-sm", children: e("settings.position_right") })
          ]
        }
      )
    ] })
  ] });
}, m8 = () => {
  const { open: e } = qt(), { t } = B();
  return /* @__PURE__ */ i(ap, { autofocus: !0, children: [
    /* @__PURE__ */ i(sp, { children: [
      /* @__PURE__ */ i(Dt, { title: t("titles.close"), "aria-label": t("titles.close"), onClick: () => e("main"), children: /* @__PURE__ */ i(Yp, { "aria-hidden": "true", size: 22 }) }),
      /* @__PURE__ */ i(lp, { children: t("settings") })
    ] }),
    /* @__PURE__ */ i("div", { className: "h-[calc(100%-120px)]", children: [
      /* @__PURE__ */ i(cp, { children: /* @__PURE__ */ i("div", { className: "relative flex flex-col gap-8 p-4 pb-0", children: [
        /* @__PURE__ */ i(h8, {}),
        /* @__PURE__ */ i(g8, {}),
        /* @__PURE__ */ i(f8, {})
      ] }) }),
      /* @__PURE__ */ i("div", { className: "absolute inset-0 top-auto grid place-items-center bg-background p-4", children: /* @__PURE__ */ i(
        "a",
        {
          target: "_blank",
          rel: "noreferrer noopener",
          href: "https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras",
          className: "flex items-center gap-2 hover:underline",
          children: [
            /* @__PURE__ */ i(
              "div",
              {
                tabIndex: -1,
                className: "relative grid size-4.5 place-items-center overflow-hidden rounded-[4px] bg-primary",
                children: /* @__PURE__ */ i(qc, { "aria-hidden": "true", className: "absolute bottom-0 size-3.5 text-white" })
              }
            ),
            /* @__PURE__ */ i("span", { className: "text-xs", children: "VLibras Widget+" })
          ]
        }
      ) })
    ] })
  ] });
}, v8 = () => {
  const { settings: e } = qt();
  return /* @__PURE__ */ i(Ce, { children: e && /* @__PURE__ */ i(m8, {}) });
}, b8 = () => {
  const { content: e } = Er();
  return e;
}, Er = Ht((e) => ({
  setDialog: (t) => e({ content: t })
})), C8 = ({ children: e }) => {
  const { isOpenWidget: t, isLoaded: r, isExpanded: o, position: n } = S();
  return /* @__PURE__ */ i(
    "div",
    {
      className: H(
        "spacing flex flex-col gap-0 overflow-hidden rounded-2xl border-1 pt-0 tracking-normal transition-[bottom,width] duration-500",
        "-bottom-[100dvh] fixed right-2 z-[2147483646] bg-background leading-normal",
        "h-[75dvh] xs:h-[90dvh] xs:w-md data-[active='true']:bottom-2 max-xs:right-2 max-xs:left-2",
        n === "left" ? "left-2" : "right-2",
        o && "md:w-2xl"
      ),
      style: { boxShadow: "0 0 30px -5px rgba(0, 0, 0, 0.2)" },
      "data-active": t && r,
      children: e
    }
  );
}, w8 = () => {
  const { setIsOpenWidget: e, isExpanded: t, setIsExpanded: r } = S(), { open: o } = qt(), { t: n } = B(), { version: a } = zt();
  return /* @__PURE__ */ i("div", { className: "flex w-full items-center justify-between gap-2 border-border border-b-1 p-4", children: [
    /* @__PURE__ */ i(
      "a",
      {
        "aria-label": n("libras_accessibility"),
        tabIndex: -1,
        href: "https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras",
        target: "_blank",
        rel: "noreferrer noopener",
        className: H(
          "relative size-9 min-w-9 overflow-hidden bg-primary",
          "grid place-items-center rounded-sm hover:brightness-110"
        ),
        children: /* @__PURE__ */ i(qc, { "aria-hidden": "true", size: 22, className: "absolute bottom-0 size-7 text-white" })
      }
    ),
    /* @__PURE__ */ i("div", { className: "-top-[1px] relative ml-1 flex flex-col leading-tight max-xxs:hidden", children: [
      /* @__PURE__ */ i("p", { className: "truncate font-bold text-foreground text-sm xs:text-lg", children: [
        "VLibras ",
        /* @__PURE__ */ i("span", { className: "max-xxs:hidden", children: "Widget+" })
      ] }),
      /* @__PURE__ */ i("span", { className: "truncate font-medium text-muted-foreground text-xs", children: [
        "Versão ",
        a
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "ml-auto flex items-center xs:gap-x-1", children: [
      /* @__PURE__ */ i(
        Dt,
        {
          className: "max-md:!hidden",
          "aria-label": n(t ? "collapse" : "expand"),
          onClick: () => r(!t),
          children: t ? /* @__PURE__ */ i(Vp, { "aria-hidden": !0, size: 22 }) : /* @__PURE__ */ i(Fp, { "aria-hidden": !0, size: 22 })
        }
      ),
      /* @__PURE__ */ i(Dt, { "aria-label": n("titles.settings"), onClick: () => o("settings"), children: /* @__PURE__ */ i(Ap, { "aria-hidden": "true", size: 22 }) }),
      /* @__PURE__ */ i(Dt, { "aria-label": n("titles.close"), variant: "destructive", onClick: () => e(!1), children: /* @__PURE__ */ i(Kt, { "aria-hidden": "true", size: 22 }) })
    ] })
  ] });
}, y8 = ({ className: e, ...t }) => /* @__PURE__ */ i("div", { className: H("h-4", e), ...t }), ir = me(
  ({ children: e, className: t, ...r }, o) => /* @__PURE__ */ i(
    "div",
    {
      ref: o,
      className: H(
        "grid auto-rows-min grid-cols-[repeat(auto-fill,minmax(148px,1fr))] xs:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-2",
        t
      ),
      ...r,
      children: e
    }
  )
), jt = me(
  ({ children: e, className: t, ...r }, o) => /* @__PURE__ */ i(
    "p",
    {
      ref: o,
      className: H("col-span-full font-bold text-foreground/80 text-sm xs:text-base leading-normal", t),
      ...r,
      children: e
    }
  )
), hr = [
  {
    icon: Pp,
    key: "profiles.blind",
    optionsKey: ["keyboard_navigation"],
    options: ["keyboardNavigation"],
    state: { keyboardNavigation: "speech" },
    undo: [
      "profiles.cognitive",
      "profiles.color_blind",
      "profiles.dyslexic",
      "profiles.low_vision",
      "profiles.mobility"
    ]
  },
  {
    icon: Kc,
    key: "profiles.dyslexic",
    optionsKey: ["dyslexic_font", "font_increase", "line_spacing"],
    options: ["dyslexicFont", "fontSize", "lineSpacing"],
    state: { dyslexicFont: "open-dyslexic", fontSize: "large", lineSpacing: "large" },
    undo: ["profiles.blind", "profiles.low_vision"]
  },
  {
    icon: Mp,
    key: "profiles.low_vision",
    optionsKey: ["font_increase", "letter_spacing", "line_spacing", "highlight_links", "highlight_titles"],
    options: ["fontSize", "letterSpacing", "lineSpacing", "contentZoom", "highlightLinks", "highlightTitles"],
    state: {
      fontSize: "large",
      letterSpacing: "large",
      lineSpacing: "large",
      highlightLinks: !0,
      highlightTitles: !0
    },
    undo: ["profiles.blind", "profiles.dyslexic"]
  },
  {
    icon: Jc,
    key: "profiles.color_blind",
    optionsKey: ["color_blind_filter", "saturation"],
    options: ["colorBlindFilter", "saturation"],
    state: { colorBlindFilter: "deuteranopia", saturation: "high" },
    undo: ["profiles.blind"]
  },
  {
    icon: Op,
    key: "profiles.mobility",
    optionsKey: ["large_cursor", "easy_click"],
    options: ["largeCursor", "easyClick"],
    state: { largeCursor: !0, easyClick: !0 },
    undo: ["profiles.blind"]
  },
  {
    icon: Dp,
    key: "profiles.cognitive",
    optionsKey: ["disable_autoplay", "pause_animations", "disable_sounds"],
    options: ["disableAutoplay", "pauseAnimations", "disableSound"],
    state: { disableAutoplay: !0, pauseAnimations: !0, disableSound: !0 },
    undo: ["profiles.blind"]
  }
], _8 = me(
  ({ children: e, className: t, disabled: r, ...o }, n) => /* @__PURE__ */ i(
    fe,
    {
      tabIndex: r ? -1 : 0,
      disabled: r,
      ref: n,
      variant: "outline",
      type: "button",
      className: H(
        "group relative h-auto w-full rounded-lg border-transparent text-left hover:bg-accent",
        "!p-1 justify-start text-xs xs:text-sm leading-none",
        "data-[active=true]:!border-primary data-[active=true]:bg-primary/10",
        t
      ),
      ...o,
      children: e
    }
  )
), Wt = me(
  ({ children: e, disabled: t, content: r, arrow: o, offset: n = 0, align: a = "center", placement: s = "top", className: l, ...c }, d) => {
    const [p, u] = U(!1), h = "vwp-tooltip";
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
    };
    return /* @__PURE__ */ i(
      "div",
      {
        className: "relative inline-block",
        onMouseEnter: () => u(!0),
        onMouseLeave: () => u(!1),
        onFocus: () => u(!0),
        onBlur: () => u(!1),
        children: [
          /* @__PURE__ */ i("span", { "aria-describedby": h, className: H(t && "pointer-events-none opacity-50"), children: e }),
          p && !t && /* @__PURE__ */ i(
            "div",
            {
              ref: d,
              id: h,
              role: "tooltip",
              style: { boxShadow: "2px 2px 15px -5px rgba(0, 0, 0, .2)", ...f() },
              className: H(
                "absolute z-[2147483647] rounded-md border-1 bg-popover px-3 py-1.5 text-popover-foreground text-sm shadow-lg transition-opacity duration-200",
                s === "bottom" && "-translate-x-1/2 -bottom-4 left-1/2 translate-y-full",
                s === "top" && "-translate-x-1/2 -translate-y-full -top-4 left-1/2",
                s === "right" && "-translate-y-1/2 top-1/2 translate-x-1/2",
                s === "left" && "-translate-y-1/2 top-1/2",
                a === "start" && "!left-0 !right-auto translate-x-0",
                a === "end" && "!right-0 !left-auto translate-x-0",
                l
              ),
              ...c,
              children: /* @__PURE__ */ i("div", { className: "relative", children: [
                r,
                o && /* @__PURE__ */ i(
                  "div",
                  {
                    className: H(
                      "-ml-2 absolute left-1/2 flex max-h-2 items-center justify-center overflow-hidden",
                      o.position.includes("top") && "-top-[13.444px]",
                      o.position.includes("bottom") && "-bottom-[13.444px]",
                      o.position.includes("left") && "left-2",
                      o.position.includes("right") && "right-0 left-auto",
                      o.position === "right" && "-translate-y-1/2 -right-6 -rotate-90 top-1/2 left-auto",
                      o.position === "left" && "-translate-y-1/2 -left-4 top-1/2 right-auto rotate-90"
                    ),
                    children: /* @__PURE__ */ i(
                      "span",
                      {
                        className: H(
                          "-z-50 h-4 w-4 rotate-45 border-1 bg-popover",
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
  }
), x8 = ({ profile: e, onSelectProfile: t, disabled: r, isActive: o }) => {
  const { t: n } = B(), { key: a, optionsKey: s, icon: l } = e, c = hr.indexOf(e) > hr.length - 3;
  return /* @__PURE__ */ i(
    _8,
    {
      disabled: r,
      "aria-label": `${n("sections.navigation_profiles")}: ${n(a)}`,
      onClick: () => t(a),
      "data-active": o,
      children: [
        /* @__PURE__ */ i("div", { className: "group-data-[active=true]:!bg-primary relative grid size-6 xs:size-7 min-w-6 xs:min-w-7 place-items-center rounded-md bg-foreground/10", children: /* @__PURE__ */ i(l, { className: "size-5 fill-foreground/80 group-data-[active=true]:fill-primary-foreground" }) }),
        /* @__PURE__ */ i("span", { className: "w-full", children: n(a) }),
        /* @__PURE__ */ i(
          Wt,
          {
            offset: -4,
            placement: c ? "top" : "bottom",
            arrow: { position: c ? "bottom-right" : "top-right", className: "bg-background ml-2" },
            align: "end",
            className: "-mr-2 bg-background",
            content: /* @__PURE__ */ i("div", { className: "w-fit space-y-2 p-1", children: [
              /* @__PURE__ */ i("p", { className: "font-semibold text-muted-foreground text-xs", children: n("functionalities") }),
              /* @__PURE__ */ i("div", { className: "flex w-fit flex-nowrap justify-center gap-2", children: s.slice(0, 2).map((d) => /* @__PURE__ */ i(
                "span",
                {
                  className: "whitespace-nowrap border-foreground border-r-1 pr-2 text-xs last:border-none",
                  children: n(d)
                },
                d
              )) }),
              s.length > 2 && /* @__PURE__ */ i("div", { className: "flex w-fit flex-nowrap justify-center gap-2", children: s.slice(2, 4).map((d) => /* @__PURE__ */ i(
                "span",
                {
                  className: "whitespace-nowrap border-foreground border-r-1 pr-2 text-xs last:border-none",
                  children: n(d)
                },
                d
              )) }),
              s.length > 4 && /* @__PURE__ */ i("div", { className: "flex w-fit flex-nowrap justify-center gap-2", children: s.slice(4).map((d) => /* @__PURE__ */ i(
                "span",
                {
                  className: "whitespace-nowrap border-foreground border-r-1 pr-2 text-xs last:border-none",
                  children: n(d)
                },
                d
              )) })
            ] }),
            children: /* @__PURE__ */ i(fe, { className: "ml-auto size-6 xs:size-7 min-w-6 xs:min-w-7 p-0", children: /* @__PURE__ */ i(e2, { className: H("size-4 text-muted-foreground", o && "text-primary/70") }) })
          }
        )
      ]
    },
    a
  );
}, k8 = () => {
  const { t: e } = B(), { profiles: t, reset: r, ...o } = S(), [n, a] = U([]), s = Et(
    (d, p) => {
      const u = hr.find((f) => f.key === d), h = n == null ? void 0 : n.some((f) => (f == null ? void 0 : f.key) === d);
      u && (p && !h && a((f) => [...f, u]), !p && h && a((f) => f.filter((C) => (C == null ? void 0 : C.key) !== d)));
    },
    [n]
  ), l = Et(
    (d) => {
      const p = hr.find((h) => h.key === d), u = t == null ? void 0 : t.filter((h) => h !== d);
      p && (p.options.forEach((h) => S.setState({ [h]: void 0 })), S.setState({ profiles: u != null && u.length ? u : void 0 }));
    },
    [t]
  ), c = Et(
    (d) => {
      var h;
      if (t != null && t.includes(d)) return l(d);
      t != null && t.length || r();
      const p = hr.find((f) => f.key === d), u = [.../* @__PURE__ */ new Set([...t || [], p.key])];
      (h = p == null ? void 0 : p.undo) == null || h.forEach((f) => l(f)), S.setState({ isActive: !0, profiles: u, ...p == null ? void 0 : p.state });
    },
    [t, r, l]
  );
  return /* @__PURE__ */ i("div", { className: "relative w-full", children: [
    /* @__PURE__ */ i(
      "div",
      {
        style: { boxShadow: "0 0 10px -5px rgba(0, 0, 0, .3)" },
        className: "-z-0 absolute top-0 h-16 w-full rounded-xl"
      }
    ),
    /* @__PURE__ */ i("div", { className: "group !p-0 collapse z-10 mb-4 rounded-xl", children: [
      /* @__PURE__ */ i("input", { type: "checkbox", className: "peer" }),
      /* @__PURE__ */ i(
        "div",
        {
          className: H(
            "collapse-title flex items-center rounded-xl border-1 p-4 py-2 font-semibold dark:bg-muted ",
            "peer-hover:border-primary peer-checked:[&_svg]:rotate-0"
          ),
          children: [
            /* @__PURE__ */ i("div", { className: "flex w-full flex-col items-start", children: [
              /* @__PURE__ */ i("span", { className: "h-4.5 xs:h-[22px] font-normal text-muted-foreground text-xs xs:text-sm", children: [
                !!(n != null && n.length) && /* @__PURE__ */ i(Ta, { className: "-top-[3px] relative mr-1.5 inline size-3.5 sx:size-4 fill-primary" }),
                n == null ? void 0 : n.map(({ key: d }, p) => {
                  const u = p === n.length - 1;
                  return `${e(d)}${u ? "" : ", "}`;
                }),
                n && n.length > 2 && /* @__PURE__ */ i("span", { className: "ml-1 font-semibold", children: [
                  "(+",
                  (n == null ? void 0 : n.length) - 2,
                  ")"
                ] }),
                !(t != null && t.length) && e("deactivated")
              ] }),
              /* @__PURE__ */ i(jt, { className: "col-auto line-clamp-1 break-all text-base max-xs:text-sm", children: e("sections.navigation_profiles") })
            ] }),
            /* @__PURE__ */ i(Tp, { className: H("absolute right-4 size-5 rotate-180 opacity-50 transition-all ") })
          ]
        }
      ),
      /* @__PURE__ */ i("div", { className: "collapse-content !p-0 -mb-3 mt-2", children: /* @__PURE__ */ i(
        "div",
        {
          className: H(
            "mb-3 flex flex-col gap-1 overflow-hidden rounded-xl border-1 p-2 transition-all dark:bg-muted"
          ),
          children: hr.map((d) => {
            const p = JSON.stringify(o), h = JSON.stringify(d.state).replace(/[{}]/g, "").split(",").every((C) => p.includes(C)), f = n == null ? void 0 : n.some((C) => {
              var b;
              return (b = C == null ? void 0 : C.undo) == null ? void 0 : b.includes(d.key);
            });
            return s(d.key, h), /* @__PURE__ */ i(
              x8,
              {
                disabled: f,
                profile: d,
                onSelectProfile: c,
                isActive: h
              },
              d.key
            );
          })
        }
      ) })
    ] })
  ] });
}, _o = [
  { key: "medium", value: 1.15 },
  { key: "large", value: 1.3 },
  { key: "very_large", value: 1.6 }
];
function r2() {
  const { fontSize: e } = S(), [t, r] = U(-1), [o, n] = U(), [a, s] = U(!1), l = xe(/* @__PURE__ */ new Map());
  P(() => {
    a || (document.querySelectorAll(
      "p, span, a, strong, h1, h2, h3, h4, h5, h6, b, em, i, code, mark, pre, blockquote, abbr, cite, q, time"
    ).forEach((p) => {
      if (!La(p)) return;
      const u = p, h = Number.parseFloat(window.getComputedStyle(u).fontSize);
      l.current.has(u) || l.current.set(u, h);
    }), s(!0));
  }, [a]), P(() => {
    if (!a) return;
    const p = _o.find(({ key: u }) => u === e);
    r(_o.findIndex(({ key: u }) => u === e)), n(p), c(p);
  }, [e, a]);
  const c = (p) => {
    l.current.forEach((u, h) => {
      h.style.fontSize = p ? `${u * p.value}px` : "";
    });
  };
  return { increaseFontSize: () => {
    const p = t + 1 < _o.length ? t + 1 : -1, u = _o[p] || void 0;
    S.setState({ fontSize: u == null ? void 0 : u.key });
  }, index: t, option: o };
}
const A8 = me(
  ({ children: e, className: t, variant: r, size: o = "md", disabled: n, ...a }, s) => /* @__PURE__ */ i(
    "span",
    {
      ref: s,
      className: H(
        "rounded-sm border-border text-foreground text-sm",
        t,
        n && "pointer-events-none opacity-50",
        o === "xs" && "px-1 text-xs",
        o === "sm" && "px-1.5 text-sm",
        o === "md" && "px-2 text-sm",
        r === "outline" && "border-1 bg-transparent",
        r === "solid" && "bg-foreground text-background",
        r === "primary" && "bg-primary text-primary-foreground",
        r === "secondary" && "bg-secondary text-secondary-foreground",
        r === "danger" && "bg-destructive text-destructive-foreground",
        r === "success" && "bg-green-600 text-green-50",
        r === "warning" && "bg-orange-600 text-orange-50",
        r === "info" && "bg-blue-600 text-blue-50"
      ),
      ...a,
      children: e
    }
  )
), se = me(({ children: e, className: t, disabled: r, isNew: o, isActive: n, showActiveIndicator: a, isBeta: s, ...l }) => {
  const { t: c } = B(), d = xe(null);
  if (s && o) throw new Error("OptionButton can't be both beta and new");
  const p = /* @__PURE__ */ i(
    fe,
    {
      ref: d,
      "data-disabled": r,
      "data-actived": n,
      style: { boxShadow: "0 0 10px -5px rgba(0, 0, 0, .3)" },
      className: H(
        "group w-full cursor-pointer items-center justify-start border-1 border-border",
        "!pb-12 relative flex rounded-xl bg-background p-3 xs:p-4 dark:bg-muted",
        "hover:border-primary hover:fill-foreground hover:text-foreground",
        n && !r && "!bg-primary/5 border-primary/50",
        r && "!cursor-not-allowed !text-muted-foreground !border-border !bg-muted/30 pointer-events-none opacity-80 *:pointer-events-none",
        t
      ),
      ...l,
      children: [
        e,
        !r && a && n && /* @__PURE__ */ i(E8, {})
      ]
    }
  );
  return s || o ? /* @__PURE__ */ i("div", { className: "relative", children: [
    /* @__PURE__ */ i("span", { className: "absolute top-1 left-2 z-[1] inline", children: /* @__PURE__ */ i(
      Wt,
      {
        arrow: { position: "bottom-left", className: "bg-background" },
        align: "start",
        className: "-ml-2 w-[150px] xs:w-[198px] bg-background",
        placement: "top",
        content: s && /* @__PURE__ */ i("span", { className: "-top-0.5 relative inline-flex text-xs xs:text-sm leading-normal", children: c("beta_alert") }),
        children: /* @__PURE__ */ i(A8, { variant: o ? "primary" : "warning", size: "xs", className: "rounded-sm", children: /* @__PURE__ */ i("span", { className: "-top-px relative", children: c(o ? "new" : "beta") }) })
      }
    ) }),
    p
  ] }) : p;
}), E8 = () => {
  const { t: e } = B();
  return /* @__PURE__ */ i("div", { "aria-hidden": "true", className: "absolute right-4 bottom-3.5 fill-primary", children: /* @__PURE__ */ i(Ta, { iconTitle: e("actived"), size: 16 }) });
}, rt = ({ size: e, actived: t }) => {
  if (t !== -1)
    return /* @__PURE__ */ i("div", { className: "group-data-[disabled='true']:!hidden absolute right-4 bottom-3 flex h-4 items-center gap-1", children: Array.from({ length: e }).map((r, o) => /* @__PURE__ */ i(
      "div",
      {
        className: H(
          "size-2 rounded-full bg-primary/30",
          t === -1 && "bg-foreground/15",
          t === o && "bg-primary"
        )
      },
      o
    )) });
}, le = me(
  ({ children: e, className: t, ...r }, o) => /* @__PURE__ */ i(
    "span",
    {
      ref: o,
      className: H(
        "-top-px relative inline-flex h-9 items-center text-left text-foreground/80 text-xs xs:text-sm",
        "font-semibold leading-snug group-data-[actived=true]:text-primary",
        t
      ),
      ...r,
      children: e
    }
  )
), ce = me(
  ({ children: e, className: t, ...r }, o) => /* @__PURE__ */ i(
    "span",
    {
      ref: o,
      className: H(
        "absolute bottom-4 left-4 font-medium text-muted-foreground text-xs xs:text-sm leading-none group-data-[actived=true]:text-primary",
        t
      ),
      ...r,
      children: e
    }
  )
), de = me(
  ({ children: e, className: t, ...r }, o) => /* @__PURE__ */ i(
    "span",
    {
      ref: o,
      className: H(
        "relative grid size-8 xs:size-9 min-w-8 xs:min-w-9 place-items-center rounded-md [&_svg]:size-4.5 xs:[&_svg]:size-5.5",
        "bg-primary/15 fill-primary text-primary dark:bg-foreground/10 dark:fill-foreground dark:text-foreground ",
        "group-data-[actived=true]:!bg-primary/10 group-data-[actived=true]:!fill-primary group-data-[actived=true]:!text-primary",
        t
      ),
      ...r,
      children: e
    }
  )
), S8 = () => {
  const { t: e } = B(), { increaseFontSize: t, option: r, index: o } = r2();
  return /* @__PURE__ */ i(se, { id: "vwp-fs", "aria-label": e("al.font_increase"), isActive: !!r, onClick: t, children: [
    /* @__PURE__ */ i(rt, { size: 3, actived: o }),
    /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(dp, { iconTitle: e("al.font_increase") }) }),
    /* @__PURE__ */ i(le, { children: e("font_increase") }),
    /* @__PURE__ */ i(ce, { children: e((r == null ? void 0 : r.key) || "deactivated") })
  ] });
}, L8 = "body.vwp-highlight-links a:not(.vwp-ignore,.vwp-ignore--text-color,.vwp-ignore--text-color *,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *){outline:2px solid yellow!important;font-weight:700!important;background:#000!important;transition:transform .3s ease!important;color:#fff!important}body.vwp-highlight-links a:not(.vwp-ignore,.vwp-ignore--text-color,.vwp-ignore--text-color *,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *) *:not(.vwp-ignore,.vwp-ignore--text-color,.vwp-ignore--text-color *,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *){color:#fff!important;background-color:#000!important}body.vwp-highlight-links a:not(.vwp-ignore,.vwp-ignore--text-color,.vwp-ignore--text-color *,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *) button{background:#000!important}body.vwp-highlight-links a:not(.vwp-ignore,.vwp-ignore--text-color,.vwp-ignore--text-color *,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *):hover{transform:scale(1.05)!important}", As = "vwp-highlight-links", N8 = "vwp-highlight-links-style", T8 = () => {
  const { highlightLinks: e } = S();
  return P(() => {
    e && qe(L8, N8), document.body.classList.toggle(As, !!e);
  }, [e]), { toggle: (r) => {
    const o = r !== void 0 ? r : !e;
    document.body.classList.toggle(As, o), S.setState({ highlightLinks: o });
  }, isActive: !!e };
}, R8 = () => {
  const { t: e } = B(), { toggle: t, isActive: r } = T8();
  return /* @__PURE__ */ i(se, { showActiveIndicator: !0, "aria-label": e("al.highlight_links"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(up, { iconTitle: e("al.highlight_links") }) }),
    /* @__PURE__ */ i(le, { children: e("highlight_links") }),
    /* @__PURE__ */ i(ce, { children: e(r ? "actived" : "deactivated") })
  ] });
}, xo = [
  { key: "medium", value: 1.5 },
  { key: "large", value: 3 },
  { key: "very_large", value: 6 }
];
function o2() {
  const { letterSpacing: e } = S(), [t, r] = U(-1), [o, n] = U(), [a, s] = U(!1), l = xe(/* @__PURE__ */ new Map());
  P(() => {
    a || (document.querySelectorAll(
      "p, span, a, strong, h1, h2, h3, h4, h5, h6, b, em, i, code, mark, pre, blockquote, abbr, cite, q, time"
    ).forEach((p) => {
      if (!La(p)) return;
      const u = p, f = window.getComputedStyle(u).letterSpacing;
      let C;
      f === "normal" ? C = 0 : (C = Number.parseFloat(f), Number.isNaN(C) && (C = 0)), l.current.set(u, C);
    }), s(!0));
  }, [a]), P(() => {
    if (!a) return;
    const p = xo.find(({ key: u }) => u === e);
    r(xo.findIndex(({ key: u }) => u === e)), n(p), c(p);
  }, [e, a]);
  const c = (p) => {
    l.current.forEach((u, h) => {
      h.style.letterSpacing = p ? `${u + p.value}px` : "";
    });
  };
  return { increaseLetterSpacing: () => {
    const p = t + 1 < xo.length ? t + 1 : -1, u = xo[p] || void 0;
    S.setState({ letterSpacing: u == null ? void 0 : u.key });
  }, index: t, option: o };
}
const M8 = () => {
  const { t: e } = B(), { increaseLetterSpacing: t, option: r, index: o } = o2();
  return /* @__PURE__ */ i(
    se,
    {
      id: "vwp-les",
      "aria-label": e("al.letter_spacing"),
      isActive: !!r,
      onClick: t,
      children: [
        /* @__PURE__ */ i(rt, { size: 3, actived: o }),
        /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(hp, { iconTitle: e("al.letter_spacing") }) }),
        /* @__PURE__ */ i(le, { children: e("letter_spacing") }),
        /* @__PURE__ */ i(ce, { children: e((r == null ? void 0 : r.key) || "deactivated") })
      ]
    }
  );
}, I8 = () => {
  const { readingMask: e } = S();
  return { toggle: (r) => {
    const o = r !== void 0 ? r : !e;
    S.setState({ readingMask: o, readingGuide: !1 });
  }, isActive: !!e };
}, O8 = () => {
  const { t: e } = B(), { toggle: t, isActive: r } = I8();
  return /* @__PURE__ */ i(se, { showActiveIndicator: !0, "aria-label": e("al.reading_mask"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(gp, { iconTitle: e("al.reading_mask") }) }),
    /* @__PURE__ */ i(le, { children: e("reading_mask") }),
    /* @__PURE__ */ i(ce, { children: e(r ? "actived" : "deactivated") })
  ] });
}, P8 = "body.vwp-highlight-titles :is(h1,h2,h3,h4,h5,h6):not(.vwp-ignore,.vwp-ignore--text-color,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *){text-decoration:underline!important;color:#1351b4!important;font-weight:700!important}", Es = "vwp-highlight-titles", D8 = "vwp-highlight-titles-style", H8 = () => {
  const { highlightTitles: e } = S();
  return P(() => {
    e && qe(P8, D8), document.body.classList.toggle(Es, !!e);
  }, [e]), { toggle: (r) => {
    const o = r !== void 0 ? r : !e;
    document.body.classList.toggle(Es, o), S.setState({ highlightTitles: o });
  }, isActive: !!e };
}, z8 = () => {
  const { t: e } = B(), { toggle: t, isActive: r } = H8();
  return /* @__PURE__ */ i(
    se,
    {
      showActiveIndicator: !0,
      "aria-label": e("al.highlight_titles"),
      isActive: r,
      onClick: () => t(),
      children: [
        /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(bp, { iconTitle: e("al.highlight_titles") }) }),
        /* @__PURE__ */ i(le, { children: e("highlight_titles") }),
        /* @__PURE__ */ i(ce, { children: e(r ? "actived" : "deactivated") })
      ]
    }
  );
}, B8 = "body.vwp-text-color *:not(.vwp-ignore,.vwp-ignore--text-color,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *){color:var(--vwp-text-color)!important}", F8 = "vwp-text-color", V8 = "--vwp-text-color", $8 = "vwp-text-color-style", i2 = () => {
  const { textColor: e } = S();
  P(() => {
    e != null && e.isActive && qe(B8, $8);
  }, [e]), P(() => {
    document.body.classList.toggle(F8, !!(e != null && e.isActive)), e != null && e.color && document.body.style.setProperty(V8, e.color);
  }, [e]);
  const t = (o) => {
    (o !== void 0 ? o : !(e != null && e.isActive)) ? r(e == null ? void 0 : e.color) : S.setState({
      textColor: {
        isActive: !1,
        color: e == null ? void 0 : e.color
      }
    });
  }, r = (o) => {
    o && S.setState({ textColor: { color: o, isActive: !0 } });
  };
  return { toggle: t, apply: r, textColor: e, isActive: e == null ? void 0 : e.isActive };
}, U8 = me((e, t) => {
  const r = xe(null), { t: o } = B(), { path: n } = zt(), { apply: a, textColor: s } = i2();
  ao(t, () => r.current);
  const l = () => {
    r.current instanceof HTMLElement && r.current.click();
  }, c = (d) => {
    so(() => {
      const p = d.target.value;
      a(p);
    });
  };
  return /* @__PURE__ */ i(Ce, { children: [
    /* @__PURE__ */ i(
      "div",
      {
        tabindex: 0,
        onClick: l,
        onKeyDown: () => {
        },
        style: { backgroundColor: (s == null ? void 0 : s.color) || "#000" },
        className: "absolute top-2 right-2 z-10 grid size-6 place-content-center rounded-full border-1",
        children: !(s != null && s.color) && /* @__PURE__ */ i("img", { src: `${n}/assets/images/color-picker.png`, alt: "" })
      }
    ),
    /* @__PURE__ */ i(
      "input",
      {
        ref: r,
        "aria-label": o("color_picker"),
        placeholder: "",
        onChange: c,
        type: "color",
        className: "sr-only pointer-events-none absolute top-2 right-2 size-6"
      }
    )
  ] });
}), j8 = () => {
  const e = xe(null), { t } = B(), { toggle: r, isActive: o } = i2(), n = () => {
    var a;
    o || (a = e.current) == null || a.click(), r();
  };
  return /* @__PURE__ */ i("div", { className: "relative", children: [
    /* @__PURE__ */ i(U8, { ref: e }),
    /* @__PURE__ */ i(se, { "aria-label": t("al.text_color"), isActive: o, onClick: n, children: [
      /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(fp, { iconTitle: t("al.text_color") }) }),
      /* @__PURE__ */ i(le, { children: t("text_color") }),
      /* @__PURE__ */ i(ce, { children: t(o ? "custom" : "default") })
    ] })
  ] });
}, G8 = ".vwp-large-cursor *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *){cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAA0CAYAAAAACoF6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJtSURBVHgBzZmN0aIwEIbfuwoogQ6kA7CCswPmKuDrADqwBK4DSsAOtAPsAK0glwXDxJiEAAF8ZnZGIMLjZvOjAkCBL4Lhi4TYK0p8AUyKikeAHWFKXPcUYppoeITYAfZNQoPA+XzeXWh4OFGW5a5CbzJEXdcsCAJZqOURYQM+ZIjr9aoTSrAyWhmiaRoWhqHabSlWxChjEfrBSlhlLEIFVmBUZkshJxmibVsWRdGqQs4yQuh0OqlCZ3hikowgTVNVqIQHZskQRVF4X/Fny1iEQsxkkYxBqJkrtFjGp5AXGcLHiu9NhqiqSl1gSch5xfcqQxhWfCch7zLE3BV/FRmL0M8uMhahYheZqUKryxAuK/5vbMD9fu+CL67go0y+lENa8X+hN+zgHwBzeDwe3cNut9vwWhw/n8/u3Aj/ePztHLCwm7IsU9M/NRrKkJfMXC4XHI9HWxNKzZ3HTXotjp+vc72DS2aoAGlmNZEkifxJax5/0M+6k/Y3ozJiaNIDTSjf01vMxCpD2ZDnCMqQKXPKepRgBkYZ2hIoD2B5nhuzQ9fw3lV+ZJQbD0FyJiiLSvvJ++EPGc1QbdDXQXdMexYTSiHnmMhbPcRxrIqIHX8uztkKmX5OwYJCHt6sWcxKqV0gX6OHmlhSyKZZUZfiSlynrjSxpJB1IqmhbQKpkG3DXLnf9D0w+j6OR9rXoj1NdL4LWR4xoUP7TLyH9icmNDOy0zAXIyaEGwGkYS4XMnUPSRwOB13XZy43LzF9csohDXMSooJWZ2u8F/Fqv5ZGwOgepX1JH7ABQyHjMwvUJZv+GZJoJGLsCI1A6govWfgPEfBNVkVYxn8AAAAASUVORK5CYII=),pointer!important}", Ss = "vwp-large-cursor", Z8 = "vwp-large-cursor-style", q8 = () => {
  const { largeCursor: e } = S();
  return P(() => {
    e && qe(G8, Z8), document.documentElement.classList.toggle(Ss, !!e);
  }, [e]), { toggle: (r) => {
    const o = r !== void 0 ? r : !e;
    document.documentElement.classList.toggle(Ss, o), S.setState({ largeCursor: o, textReader: void 0 });
  }, isActive: !!e };
}, W8 = () => {
  const { t: e } = B(), { toggle: t, isActive: r } = q8();
  return Uo() ? null : /* @__PURE__ */ i(se, { showActiveIndicator: !0, "aria-label": e("al.large_cursor"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(vp, { iconTitle: e("al.large_cursor") }) }),
    /* @__PURE__ */ i(le, { children: e("large_cursor") }),
    /* @__PURE__ */ i(ce, { children: e(r ? "actived" : "deactivated") })
  ] });
}, ko = [
  { key: "medium", value: 1.15 },
  { key: "large", value: 1.3 },
  { key: "very_large", value: 1.45 }
];
function n2() {
  const { lineSpacing: e } = S(), [t, r] = U(!1), [o, n] = U(-1), [a, s] = U(), l = xe(/* @__PURE__ */ new Map());
  P(() => {
    t || (document.querySelectorAll(
      "p, span, a, strong, h1, h2, h3, h4, h5, h6, b, em, i, code, mark, pre, blockquote, abbr, cite, q, time"
    ).forEach((p) => {
      if (!La(p)) return;
      const u = p, h = window.getComputedStyle(u), f = Number.parseFloat(h.fontSize);
      let C;
      h.lineHeight === "normal" ? C = 1.2 : h.lineHeight.endsWith("px") ? C = Number.parseFloat(h.lineHeight) / f : C = Number.parseFloat(h.lineHeight), Number.isNaN(C) || l.current.set(u, C);
    }), r(!0));
  }, [t]), P(() => {
    if (!t) return;
    const p = ko.find(({ key: u }) => u === e);
    n(ko.findIndex(({ key: u }) => u === e)), s(p), c(p);
  }, [e, t]);
  const c = (p) => {
    l.current.forEach((u, h) => {
      h.style.lineHeight = p ? `${u * p.value}` : "";
    });
  };
  return { increaseLineSpacing: () => {
    const p = o + 1 < ko.length ? o + 1 : -1, u = ko[p] || void 0;
    S.setState({ lineSpacing: u == null ? void 0 : u.key });
  }, index: o, option: a };
}
const X8 = () => {
  const { t: e } = B(), { increaseLineSpacing: t, option: r, index: o } = n2();
  return /* @__PURE__ */ i(
    se,
    {
      id: "vwp-lis",
      "aria-label": e("al.line_spacing"),
      isActive: !!r,
      onClick: t,
      children: [
        /* @__PURE__ */ i(rt, { size: 3, actived: o }),
        /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(_p, { iconTitle: e("al.line_spacing") }) }),
        /* @__PURE__ */ i(le, { children: e("line_spacing") }),
        /* @__PURE__ */ i(ce, { children: e((r == null ? void 0 : r.key) || "deactivated") })
      ]
    }
  );
}, Y8 = "body.vwp-hide-images *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *) img,body.vwp-hide-images *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *) figure{display:none!important}", on = "vwp-hide-images", K8 = "vwp-hide-images-style", J8 = () => {
  const { hideImages: e } = S();
  return P(() => {
    e && qe(Y8, K8);
  }, [e]), P(() => (document.body.classList.toggle(on, !!e), () => document.body.classList.remove(on)), [e]), { toggle: (r) => {
    const o = r !== void 0 ? r : !e;
    document.body.classList.toggle(on, o), S.setState({ hideImages: o });
  }, isActive: !!e };
}, Q8 = () => {
  const { t: e } = B(), { toggle: t, isActive: r } = J8();
  return /* @__PURE__ */ i(se, { showActiveIndicator: !0, "aria-label": e("al.hide_images"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(mp, { iconTitle: e("al.hide_images") }) }),
    /* @__PURE__ */ i(le, { children: e("hide_images") }),
    /* @__PURE__ */ i(ce, { children: e(r ? "actived" : "deactivated") })
  ] });
}, e9 = "body.vwp-pause-animations *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *) *{animation-play-state:paused!important}", Ls = "vwp-pause-animations", t9 = "vwp-pause-animations-style", r9 = () => {
  const { pauseAnimations: e } = S();
  return P(() => {
    e && qe(e9, t9), document.body.classList.toggle(Ls, !!e);
  }, [e]), { toggle: (r) => {
    const o = r !== void 0 ? r : !e;
    document.body.classList.toggle(Ls, o), S.setState({ pauseAnimations: o });
  }, isActive: !!e };
}, o9 = () => {
  const { t: e } = B(), { toggle: t, isActive: r } = r9();
  return /* @__PURE__ */ i(
    se,
    {
      showActiveIndicator: !0,
      "aria-label": e("al.pause_animations"),
      isActive: r,
      onClick: () => t(),
      children: [
        /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(Cp, { iconTitle: e("al.pause_animations") }) }),
        /* @__PURE__ */ i(le, { children: e("pause_animations") }),
        /* @__PURE__ */ i(ce, { children: e(r ? "actived" : "deactivated") })
      ]
    }
  );
}, i9 = () => {
  const { readingGuide: e } = S();
  return { toggle: (r) => {
    const o = r !== void 0 ? r : !e;
    S.setState({ readingGuide: o, readingMask: !1 });
  }, isActive: !!e };
}, Ns = () => {
  const { t: e } = B(), { toggle: t, isActive: r } = i9();
  return /* @__PURE__ */ i(se, { showActiveIndicator: !0, "aria-label": e("al.reading_guide"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(yp, { iconTitle: e("al.reading_guide") }) }),
    /* @__PURE__ */ i(le, { children: e("reading_guide") }),
    /* @__PURE__ */ i(ce, { children: e(r ? "actived" : "deactivated") })
  ] });
}, n9 = "#vwp-reader-mode-view::-webkit-scrollbar{height:10px;width:10px}#vwp-reader-mode-view::-webkit-scrollbar-track{background-color:transparent}#vwp-reader-mode-view::-webkit-scrollbar-thumb{border-radius:10000px;border:1px solid transparent;background-clip:padding-box;border-color:transparent;background-color:#333}#vwp-reader-mode-view[data-theme=light]::-webkit-scrollbar-thumb{background-color:#bbb}#vwp-reader-mode-view{display:none;flex-direction:column;z-index:2147483630;position:fixed;align-items:center;top:0;right:0;bottom:0;left:0;overflow-y:auto}#vwp-reader-mode-view[data-active=true]{display:flex}#vwp-reader-mode-view[data-theme=light]{color:#111;background-color:#fff}#vwp-reader-mode-view[data-theme=dark]{color:#eee;background-color:#0a0a0a}#vwp-reader-mode-view[highlight-titles=true] h1,#vwp-reader-mode-view[highlight-titles=true] h2,#vwp-reader-mode-view[highlight-titles=true] h3,#vwp-reader-mode-view[highlight-titles=true] h4,#vwp-reader-mode-view[highlight-titles=true] h5,#vwp-reader-mode-view[highlight-titles=true] h6{text-decoration:underline!important;color:#1351b4!important;font-weight:700!important}#vwp-reader-mode-view[highlight-links=true] a:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *){outline:2px solid yellow!important;font-weight:700!important;background:#000!important;transition:transform .3s ease!important;color:#fff!important}#vwp-reader-mode-view[highlight-links=true] a:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *) *{color:#fff!important}#vwp-reader-mode-view[highlight-links=true] a:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *) button{background:#000!important}#vwp-reader-mode-view[highlight-links=true] a:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *):hover{transform:scale(1.05)!important}#vwp-reader-mode-view *{color:inherit;background-color:inherit}#vwp-reader-mode-view img{display:none}#vwp-reader-mode-view header{display:flex;flex-direction:column}#vwp-reader-mode-view header p{opacity:70%}#vwp-reader-mode-view a{color:#2362c7}#vwp-reader-mode-view a:hover{filter:brightness(1.2)}#vwp-reader-mode-view .vwp-reader-mode-container{padding:48px;display:flex;flex-direction:column;gap:24px;max-width:1024px}@media (max-width: 640px){#vwp-reader-mode-view .vwp-reader-mode-container{padding:24px}}#vwp-reader-mode-view .vwp-reader-mode-container .vwp-reader-mode-content p{margin-bottom:16px}#vwp-reader-mode-view *{background-color:transparent;border:none;outline:transparent;padding:0;margin:0}body.vwp-reader-mode{overflow:hidden!important;height:100dvh!important}";
var Rr = {}, nr = {}, Ao = {}, Vt = {}, $t = {}, nn = {}, Ts;
function a2() {
  return Ts || (Ts = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Doctype = e.CDATA = e.Tag = e.Style = e.Script = e.Comment = e.Directive = e.Text = e.Root = e.isTag = e.ElementType = void 0;
    var t;
    (function(o) {
      o.Root = "root", o.Text = "text", o.Directive = "directive", o.Comment = "comment", o.Script = "script", o.Style = "style", o.Tag = "tag", o.CDATA = "cdata", o.Doctype = "doctype";
    })(t = e.ElementType || (e.ElementType = {}));
    function r(o) {
      return o.type === t.Tag || o.type === t.Script || o.type === t.Style;
    }
    e.isTag = r, e.Root = t.Root, e.Text = t.Text, e.Directive = t.Directive, e.Comment = t.Comment, e.Script = t.Script, e.Style = t.Style, e.Tag = t.Tag, e.CDATA = t.CDATA, e.Doctype = t.Doctype;
  }(nn)), nn;
}
var K = {}, Rs;
function Ms() {
  if (Rs) return K;
  Rs = 1;
  var e = K && K.__extends || /* @__PURE__ */ function() {
    var g = function(m, y) {
      return g = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(k, O) {
        k.__proto__ = O;
      } || function(k, O) {
        for (var D in O) Object.prototype.hasOwnProperty.call(O, D) && (k[D] = O[D]);
      }, g(m, y);
    };
    return function(m, y) {
      if (typeof y != "function" && y !== null)
        throw new TypeError("Class extends value " + String(y) + " is not a constructor or null");
      g(m, y);
      function k() {
        this.constructor = m;
      }
      m.prototype = y === null ? Object.create(y) : (k.prototype = y.prototype, new k());
    };
  }(), t = K && K.__assign || function() {
    return t = Object.assign || function(g) {
      for (var m, y = 1, k = arguments.length; y < k; y++) {
        m = arguments[y];
        for (var O in m) Object.prototype.hasOwnProperty.call(m, O) && (g[O] = m[O]);
      }
      return g;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(K, "__esModule", { value: !0 }), K.cloneNode = K.hasChildren = K.isDocument = K.isDirective = K.isComment = K.isText = K.isCDATA = K.isTag = K.Element = K.Document = K.CDATA = K.NodeWithChildren = K.ProcessingInstruction = K.Comment = K.Text = K.DataNode = K.Node = void 0;
  var r = /* @__PURE__ */ a2(), o = (
    /** @class */
    function() {
      function g() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
      }
      return Object.defineProperty(g.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.parent;
        },
        set: function(m) {
          this.parent = m;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(g.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.prev;
        },
        set: function(m) {
          this.prev = m;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(g.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.next;
        },
        set: function(m) {
          this.next = m;
        },
        enumerable: !1,
        configurable: !0
      }), g.prototype.cloneNode = function(m) {
        return m === void 0 && (m = !1), w(this, m);
      }, g;
    }()
  );
  K.Node = o;
  var n = (
    /** @class */
    function(g) {
      e(m, g);
      function m(y) {
        var k = g.call(this) || this;
        return k.data = y, k;
      }
      return Object.defineProperty(m.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.data;
        },
        set: function(y) {
          this.data = y;
        },
        enumerable: !1,
        configurable: !0
      }), m;
    }(o)
  );
  K.DataNode = n;
  var a = (
    /** @class */
    function(g) {
      e(m, g);
      function m() {
        var y = g !== null && g.apply(this, arguments) || this;
        return y.type = r.ElementType.Text, y;
      }
      return Object.defineProperty(m.prototype, "nodeType", {
        get: function() {
          return 3;
        },
        enumerable: !1,
        configurable: !0
      }), m;
    }(n)
  );
  K.Text = a;
  var s = (
    /** @class */
    function(g) {
      e(m, g);
      function m() {
        var y = g !== null && g.apply(this, arguments) || this;
        return y.type = r.ElementType.Comment, y;
      }
      return Object.defineProperty(m.prototype, "nodeType", {
        get: function() {
          return 8;
        },
        enumerable: !1,
        configurable: !0
      }), m;
    }(n)
  );
  K.Comment = s;
  var l = (
    /** @class */
    function(g) {
      e(m, g);
      function m(y, k) {
        var O = g.call(this, k) || this;
        return O.name = y, O.type = r.ElementType.Directive, O;
      }
      return Object.defineProperty(m.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: !1,
        configurable: !0
      }), m;
    }(n)
  );
  K.ProcessingInstruction = l;
  var c = (
    /** @class */
    function(g) {
      e(m, g);
      function m(y) {
        var k = g.call(this) || this;
        return k.children = y, k;
      }
      return Object.defineProperty(m.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function() {
          var y;
          return (y = this.children[0]) !== null && y !== void 0 ? y : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(m.prototype, "lastChild", {
        /** Last child of the node. */
        get: function() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(m.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.children;
        },
        set: function(y) {
          this.children = y;
        },
        enumerable: !1,
        configurable: !0
      }), m;
    }(o)
  );
  K.NodeWithChildren = c;
  var d = (
    /** @class */
    function(g) {
      e(m, g);
      function m() {
        var y = g !== null && g.apply(this, arguments) || this;
        return y.type = r.ElementType.CDATA, y;
      }
      return Object.defineProperty(m.prototype, "nodeType", {
        get: function() {
          return 4;
        },
        enumerable: !1,
        configurable: !0
      }), m;
    }(c)
  );
  K.CDATA = d;
  var p = (
    /** @class */
    function(g) {
      e(m, g);
      function m() {
        var y = g !== null && g.apply(this, arguments) || this;
        return y.type = r.ElementType.Root, y;
      }
      return Object.defineProperty(m.prototype, "nodeType", {
        get: function() {
          return 9;
        },
        enumerable: !1,
        configurable: !0
      }), m;
    }(c)
  );
  K.Document = p;
  var u = (
    /** @class */
    function(g) {
      e(m, g);
      function m(y, k, O, D) {
        O === void 0 && (O = []), D === void 0 && (D = y === "script" ? r.ElementType.Script : y === "style" ? r.ElementType.Style : r.ElementType.Tag);
        var Z = g.call(this, O) || this;
        return Z.name = y, Z.attribs = k, Z.type = D, Z;
      }
      return Object.defineProperty(m.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(m.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.name;
        },
        set: function(y) {
          this.name = y;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(m.prototype, "attributes", {
        get: function() {
          var y = this;
          return Object.keys(this.attribs).map(function(k) {
            var O, D;
            return {
              name: k,
              value: y.attribs[k],
              namespace: (O = y["x-attribsNamespace"]) === null || O === void 0 ? void 0 : O[k],
              prefix: (D = y["x-attribsPrefix"]) === null || D === void 0 ? void 0 : D[k]
            };
          });
        },
        enumerable: !1,
        configurable: !0
      }), m;
    }(c)
  );
  K.Element = u;
  function h(g) {
    return (0, r.isTag)(g);
  }
  K.isTag = h;
  function f(g) {
    return g.type === r.ElementType.CDATA;
  }
  K.isCDATA = f;
  function C(g) {
    return g.type === r.ElementType.Text;
  }
  K.isText = C;
  function b(g) {
    return g.type === r.ElementType.Comment;
  }
  K.isComment = b;
  function A(g) {
    return g.type === r.ElementType.Directive;
  }
  K.isDirective = A;
  function L(g) {
    return g.type === r.ElementType.Root;
  }
  K.isDocument = L;
  function _(g) {
    return Object.prototype.hasOwnProperty.call(g, "children");
  }
  K.hasChildren = _;
  function w(g, m) {
    m === void 0 && (m = !1);
    var y;
    if (C(g))
      y = new a(g.data);
    else if (b(g))
      y = new s(g.data);
    else if (h(g)) {
      var k = m ? x(g.children) : [], O = new u(g.name, t({}, g.attribs), k);
      k.forEach(function(j) {
        return j.parent = O;
      }), g.namespace != null && (O.namespace = g.namespace), g["x-attribsNamespace"] && (O["x-attribsNamespace"] = t({}, g["x-attribsNamespace"])), g["x-attribsPrefix"] && (O["x-attribsPrefix"] = t({}, g["x-attribsPrefix"])), y = O;
    } else if (f(g)) {
      var k = m ? x(g.children) : [], D = new d(k);
      k.forEach(function(F) {
        return F.parent = D;
      }), y = D;
    } else if (L(g)) {
      var k = m ? x(g.children) : [], Z = new p(k);
      k.forEach(function(F) {
        return F.parent = Z;
      }), g["x-mode"] && (Z["x-mode"] = g["x-mode"]), y = Z;
    } else if (A(g)) {
      var z = new l(g.name, g.data);
      g["x-name"] != null && (z["x-name"] = g["x-name"], z["x-publicId"] = g["x-publicId"], z["x-systemId"] = g["x-systemId"]), y = z;
    } else
      throw new Error("Not implemented yet: ".concat(g.type));
    return y.startIndex = g.startIndex, y.endIndex = g.endIndex, g.sourceCodeLocation != null && (y.sourceCodeLocation = g.sourceCodeLocation), y;
  }
  K.cloneNode = w;
  function x(g) {
    for (var m = g.map(function(k) {
      return w(k, !0);
    }), y = 1; y < m.length; y++)
      m[y].prev = m[y - 1], m[y - 1].next = m[y];
    return m;
  }
  return K;
}
var Is;
function s2() {
  return Is || (Is = 1, function(e) {
    var t = $t && $t.__createBinding || (Object.create ? function(l, c, d, p) {
      p === void 0 && (p = d);
      var u = Object.getOwnPropertyDescriptor(c, d);
      (!u || ("get" in u ? !c.__esModule : u.writable || u.configurable)) && (u = { enumerable: !0, get: function() {
        return c[d];
      } }), Object.defineProperty(l, p, u);
    } : function(l, c, d, p) {
      p === void 0 && (p = d), l[p] = c[d];
    }), r = $t && $t.__exportStar || function(l, c) {
      for (var d in l) d !== "default" && !Object.prototype.hasOwnProperty.call(c, d) && t(c, l, d);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DomHandler = void 0;
    var o = /* @__PURE__ */ a2(), n = /* @__PURE__ */ Ms();
    r(/* @__PURE__ */ Ms(), e);
    var a = {
      withStartIndices: !1,
      withEndIndices: !1,
      xmlMode: !1
    }, s = (
      /** @class */
      function() {
        function l(c, d, p) {
          this.dom = [], this.root = new n.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof d == "function" && (p = d, d = a), typeof c == "object" && (d = c, c = void 0), this.callback = c ?? null, this.options = d ?? a, this.elementCB = p ?? null;
        }
        return l.prototype.onparserinit = function(c) {
          this.parser = c;
        }, l.prototype.onreset = function() {
          this.dom = [], this.root = new n.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
        }, l.prototype.onend = function() {
          this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
        }, l.prototype.onerror = function(c) {
          this.handleCallback(c);
        }, l.prototype.onclosetag = function() {
          this.lastNode = null;
          var c = this.tagStack.pop();
          this.options.withEndIndices && (c.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(c);
        }, l.prototype.onopentag = function(c, d) {
          var p = this.options.xmlMode ? o.ElementType.Tag : void 0, u = new n.Element(c, d, void 0, p);
          this.addNode(u), this.tagStack.push(u);
        }, l.prototype.ontext = function(c) {
          var d = this.lastNode;
          if (d && d.type === o.ElementType.Text)
            d.data += c, this.options.withEndIndices && (d.endIndex = this.parser.endIndex);
          else {
            var p = new n.Text(c);
            this.addNode(p), this.lastNode = p;
          }
        }, l.prototype.oncomment = function(c) {
          if (this.lastNode && this.lastNode.type === o.ElementType.Comment) {
            this.lastNode.data += c;
            return;
          }
          var d = new n.Comment(c);
          this.addNode(d), this.lastNode = d;
        }, l.prototype.oncommentend = function() {
          this.lastNode = null;
        }, l.prototype.oncdatastart = function() {
          var c = new n.Text(""), d = new n.CDATA([c]);
          this.addNode(d), c.parent = d, this.lastNode = c;
        }, l.prototype.oncdataend = function() {
          this.lastNode = null;
        }, l.prototype.onprocessinginstruction = function(c, d) {
          var p = new n.ProcessingInstruction(c, d);
          this.addNode(p);
        }, l.prototype.handleCallback = function(c) {
          if (typeof this.callback == "function")
            this.callback(c, this.dom);
          else if (c)
            throw c;
        }, l.prototype.addNode = function(c) {
          var d = this.tagStack[this.tagStack.length - 1], p = d.children[d.children.length - 1];
          this.options.withStartIndices && (c.startIndex = this.parser.startIndex), this.options.withEndIndices && (c.endIndex = this.parser.endIndex), d.children.push(c), p && (c.prev = p, p.next = c), c.parent = d, this.lastNode = null;
        }, l;
      }()
    );
    e.DomHandler = s, e.default = s;
  }($t)), $t;
}
var an = {}, Os;
function a9() {
  return Os || (Os = 1, function(e) {
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
    ], e.CASE_SENSITIVE_TAG_NAMES_MAP = e.CASE_SENSITIVE_TAG_NAMES.reduce(function(t, r) {
      return t[r.toLowerCase()] = r, t;
    }, {}), e.CARRIAGE_RETURN = "\r", e.CARRIAGE_RETURN_REGEX = new RegExp(e.CARRIAGE_RETURN, "g"), e.CARRIAGE_RETURN_PLACEHOLDER = "__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_".concat(Date.now(), "__"), e.CARRIAGE_RETURN_PLACEHOLDER_REGEX = new RegExp(e.CARRIAGE_RETURN_PLACEHOLDER, "g");
  }(an)), an;
}
var Ps;
function l2() {
  if (Ps) return Vt;
  Ps = 1, Object.defineProperty(Vt, "__esModule", { value: !0 }), Vt.formatAttributes = o, Vt.escapeSpecialCharacters = a, Vt.revertEscapedCharacters = s, Vt.formatDOM = l;
  var e = /* @__PURE__ */ s2(), t = a9();
  function r(c) {
    return t.CASE_SENSITIVE_TAG_NAMES_MAP[c];
  }
  function o(c) {
    for (var d = {}, p = 0, u = c.length; p < u; p++) {
      var h = c[p];
      d[h.name] = h.value;
    }
    return d;
  }
  function n(c) {
    c = c.toLowerCase();
    var d = r(c);
    return d || c;
  }
  function a(c) {
    return c.replace(t.CARRIAGE_RETURN_REGEX, t.CARRIAGE_RETURN_PLACEHOLDER);
  }
  function s(c) {
    return c.replace(t.CARRIAGE_RETURN_PLACEHOLDER_REGEX, t.CARRIAGE_RETURN);
  }
  function l(c, d, p) {
    d === void 0 && (d = null);
    for (var u = [], h, f = 0, C = c.length; f < C; f++) {
      var b = c[f];
      switch (b.nodeType) {
        case 1: {
          var A = n(b.nodeName);
          h = new e.Element(A, o(b.attributes)), h.children = l(
            // template children are on content
            A === "template" ? b.content.childNodes : b.childNodes,
            h
          );
          break;
        }
        case 3:
          h = new e.Text(s(b.nodeValue));
          break;
        case 8:
          h = new e.Comment(b.nodeValue);
          break;
        default:
          continue;
      }
      var L = u[f - 1] || null;
      L && (L.next = h), h.parent = d, h.prev = L, h.next = null, u.push(h);
    }
    return p && (h = new e.ProcessingInstruction(p.substring(0, p.indexOf(" ")).toLowerCase(), p), h.next = u[0] || null, h.parent = d, u.unshift(h), u[1] && (u[1].prev = u[0])), u;
  }
  return Vt;
}
var Ds;
function s9() {
  if (Ds) return Ao;
  Ds = 1, Object.defineProperty(Ao, "__esModule", { value: !0 }), Ao.default = b;
  var e = l2(), t = "html", r = "head", o = "body", n = /<([a-zA-Z]+[0-9]?)/, a = /<head[^]*>/i, s = /<body[^]*>/i, l = function(A, L) {
    throw new Error("This browser does not support `document.implementation.createHTMLDocument`");
  }, c = function(A, L) {
    throw new Error("This browser does not support `DOMParser.prototype.parseFromString`");
  }, d = typeof window == "object" && window.DOMParser;
  if (typeof d == "function") {
    var p = new d(), u = "text/html";
    c = function(A, L) {
      return L && (A = "<".concat(L, ">").concat(A, "</").concat(L, ">")), p.parseFromString(A, u);
    }, l = c;
  }
  if (typeof document == "object" && document.implementation) {
    var h = document.implementation.createHTMLDocument();
    l = function(A, L) {
      if (L) {
        var _ = h.documentElement.querySelector(L);
        return _ && (_.innerHTML = A), h;
      }
      return h.documentElement.innerHTML = A, h;
    };
  }
  var f = typeof document == "object" && document.createElement("template"), C;
  f && f.content && (C = function(A) {
    return f.innerHTML = A, f.content.childNodes;
  });
  function b(A) {
    var L, _;
    A = (0, e.escapeSpecialCharacters)(A);
    var w = A.match(n), x = w && w[1] ? w[1].toLowerCase() : "";
    switch (x) {
      case t: {
        var g = c(A);
        if (!a.test(A)) {
          var m = g.querySelector(r);
          (L = m == null ? void 0 : m.parentNode) === null || L === void 0 || L.removeChild(m);
        }
        if (!s.test(A)) {
          var m = g.querySelector(o);
          (_ = m == null ? void 0 : m.parentNode) === null || _ === void 0 || _.removeChild(m);
        }
        return g.querySelectorAll(t);
      }
      case r:
      case o: {
        var y = l(A).querySelectorAll(x);
        return s.test(A) && a.test(A) ? y[0].parentNode.childNodes : y;
      }
      // low-level tag or text
      default: {
        if (C)
          return C(A);
        var m = l(A, o).querySelector(o);
        return m.childNodes;
      }
    }
  }
  return Ao;
}
var Hs;
function l9() {
  if (Hs) return nr;
  Hs = 1;
  var e = nr && nr.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(nr, "__esModule", { value: !0 }), nr.default = n;
  var t = e(s9()), r = l2(), o = /<(![a-zA-Z\s]+)>/;
  function n(a) {
    if (typeof a != "string")
      throw new TypeError("First argument must be a string");
    if (!a)
      return [];
    var s = a.match(o), l = s ? s[1] : void 0;
    return (0, r.formatDOM)((0, t.default)(a), null, l);
  }
  return nr;
}
var Eo = {}, Ke = {}, Mr = {}, zs;
function c9() {
  if (zs) return Mr;
  zs = 1;
  var e = 0;
  Mr.SAME = e;
  var t = 1;
  return Mr.CAMELCASE = t, Mr.possibleStandardNames = {
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
  }, Mr;
}
var Bs;
function d9() {
  if (Bs) return Ke;
  Bs = 1;
  const e = 0, t = 1, r = 2, o = 3, n = 4, a = 5, s = 6;
  function l(g) {
    return d.hasOwnProperty(g) ? d[g] : null;
  }
  function c(g, m, y, k, O, D, Z) {
    this.acceptsBooleans = m === r || m === o || m === n, this.attributeName = k, this.attributeNamespace = O, this.mustUseProperty = y, this.propertyName = g, this.type = m, this.sanitizeURL = D, this.removeEmptyString = Z;
  }
  const d = {};
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
  ].forEach((g) => {
    d[g] = new c(
      g,
      e,
      !1,
      // mustUseProperty
      g,
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
  ].forEach(([g, m]) => {
    d[g] = new c(
      g,
      t,
      !1,
      // mustUseProperty
      m,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach((g) => {
    d[g] = new c(
      g,
      r,
      !1,
      // mustUseProperty
      g.toLowerCase(),
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
  ].forEach((g) => {
    d[g] = new c(
      g,
      r,
      !1,
      // mustUseProperty
      g,
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
  ].forEach((g) => {
    d[g] = new c(
      g,
      o,
      !1,
      // mustUseProperty
      g.toLowerCase(),
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
  ].forEach((g) => {
    d[g] = new c(
      g,
      o,
      !0,
      // mustUseProperty
      g,
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
  ].forEach((g) => {
    d[g] = new c(
      g,
      n,
      !1,
      // mustUseProperty
      g,
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
  ].forEach((g) => {
    d[g] = new c(
      g,
      s,
      !1,
      // mustUseProperty
      g,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), ["rowSpan", "start"].forEach((g) => {
    d[g] = new c(
      g,
      a,
      !1,
      // mustUseProperty
      g.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  });
  const u = /[\-\:]([a-z])/g, h = (g) => g[1].toUpperCase();
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
  ].forEach((g) => {
    const m = g.replace(u, h);
    d[m] = new c(
      m,
      t,
      !1,
      // mustUseProperty
      g,
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
  ].forEach((g) => {
    const m = g.replace(u, h);
    d[m] = new c(
      m,
      t,
      !1,
      // mustUseProperty
      g,
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
  ].forEach((g) => {
    const m = g.replace(u, h);
    d[m] = new c(
      m,
      t,
      !1,
      // mustUseProperty
      g,
      "http://www.w3.org/XML/1998/namespace",
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), ["tabIndex", "crossOrigin"].forEach((g) => {
    d[g] = new c(
      g,
      t,
      !1,
      // mustUseProperty
      g.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  });
  const f = "xlinkHref";
  d[f] = new c(
    "xlinkHref",
    t,
    !1,
    // mustUseProperty
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    // sanitizeURL
    !1
    // removeEmptyString
  ), ["src", "href", "action", "formAction"].forEach((g) => {
    d[g] = new c(
      g,
      t,
      !1,
      // mustUseProperty
      g.toLowerCase(),
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
    CAMELCASE: C,
    SAME: b,
    possibleStandardNames: A
  } = c9(), _ = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD" + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", w = RegExp.prototype.test.bind(
    // eslint-disable-next-line no-misleading-character-class
    new RegExp("^(data|aria)-[" + _ + "]*$")
  ), x = Object.keys(
    A
  ).reduce((g, m) => {
    const y = A[m];
    return y === b ? g[m] = m : y === C ? g[m.toLowerCase()] = m : g[m] = y, g;
  }, {});
  return Ke.BOOLEAN = o, Ke.BOOLEANISH_STRING = r, Ke.NUMERIC = a, Ke.OVERLOADED_BOOLEAN = n, Ke.POSITIVE_NUMERIC = s, Ke.RESERVED = e, Ke.STRING = t, Ke.getPropertyInfo = l, Ke.isCustomAttribute = w, Ke.possibleStandardNames = x, Ke;
}
var Ir = {};
const c2 = /* @__PURE__ */ td(Y5);
var ar = {}, sn, Fs;
function u9() {
  if (Fs) return sn;
  Fs = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, r = /^\s*/, o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, n = /^:\s*/, a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, s = /^[;\s]*/, l = /^\s+|\s+$/g, c = `
`, d = "/", p = "*", u = "", h = "comment", f = "declaration";
  sn = function(b, A) {
    if (typeof b != "string")
      throw new TypeError("First argument must be a string");
    if (!b) return [];
    A = A || {};
    var L = 1, _ = 1;
    function w(j) {
      var F = j.match(t);
      F && (L += F.length);
      var ue = j.lastIndexOf(c);
      _ = ~ue ? j.length - ue : _ + j.length;
    }
    function x() {
      var j = { line: L, column: _ };
      return function(F) {
        return F.position = new g(j), k(), F;
      };
    }
    function g(j) {
      this.start = j, this.end = { line: L, column: _ }, this.source = A.source;
    }
    g.prototype.content = b;
    function m(j) {
      var F = new Error(
        A.source + ":" + L + ":" + _ + ": " + j
      );
      if (F.reason = j, F.filename = A.source, F.line = L, F.column = _, F.source = b, !A.silent) throw F;
    }
    function y(j) {
      var F = j.exec(b);
      if (F) {
        var ue = F[0];
        return w(ue), b = b.slice(ue.length), F;
      }
    }
    function k() {
      y(r);
    }
    function O(j) {
      var F;
      for (j = j || []; F = D(); )
        F !== !1 && j.push(F);
      return j;
    }
    function D() {
      var j = x();
      if (!(d != b.charAt(0) || p != b.charAt(1))) {
        for (var F = 2; u != b.charAt(F) && (p != b.charAt(F) || d != b.charAt(F + 1)); )
          ++F;
        if (F += 2, u === b.charAt(F - 1))
          return m("End of comment missing");
        var ue = b.slice(2, F - 2);
        return _ += 2, w(ue), b = b.slice(F), _ += 2, j({
          type: h,
          comment: ue
        });
      }
    }
    function Z() {
      var j = x(), F = y(o);
      if (F) {
        if (D(), !y(n)) return m("property missing ':'");
        var ue = y(a), ke = j({
          type: f,
          property: C(F[0].replace(e, u)),
          value: ue ? C(ue[0].replace(e, u)) : u
        });
        return y(s), ke;
      }
    }
    function z() {
      var j = [];
      O(j);
      for (var F; F = Z(); )
        F !== !1 && (j.push(F), O(j));
      return j;
    }
    return k(), z();
  };
  function C(b) {
    return b ? b.replace(l, u) : u;
  }
  return sn;
}
var Vs;
function p9() {
  if (Vs) return ar;
  Vs = 1;
  var e = ar && ar.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(ar, "__esModule", { value: !0 }), ar.default = r;
  var t = e(u9());
  function r(o, n) {
    var a = null;
    if (!o || typeof o != "string")
      return a;
    var s = (0, t.default)(o), l = typeof n == "function";
    return s.forEach(function(c) {
      if (c.type === "declaration") {
        var d = c.property, p = c.value;
        l ? n(d, p, c) : p && (a = a || {}, a[d] = p);
      }
    }), a;
  }
  return ar;
}
var Or = {}, $s;
function h9() {
  if ($s) return Or;
  $s = 1, Object.defineProperty(Or, "__esModule", { value: !0 }), Or.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, t = /-([a-z])/g, r = /^[^-]+$/, o = /^-(webkit|moz|ms|o|khtml)-/, n = /^-(ms)-/, a = function(d) {
    return !d || r.test(d) || e.test(d);
  }, s = function(d, p) {
    return p.toUpperCase();
  }, l = function(d, p) {
    return "".concat(p, "-");
  }, c = function(d, p) {
    return p === void 0 && (p = {}), a(d) ? d : (d = d.toLowerCase(), p.reactCompat ? d = d.replace(n, l) : d = d.replace(o, l), d.replace(t, s));
  };
  return Or.camelCase = c, Or;
}
var Pr, Us;
function g9() {
  if (Us) return Pr;
  Us = 1;
  var e = Pr && Pr.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  }, t = e(p9()), r = h9();
  function o(n, a) {
    var s = {};
    return !n || typeof n != "string" || (0, t.default)(n, function(l, c) {
      l && c && (s[(0, r.camelCase)(l, a)] = c);
    }), s;
  }
  return o.default = o, Pr = o, Pr;
}
var js;
function d2() {
  return js || (js = 1, function(e) {
    var t = Ir && Ir.__importDefault || function(p) {
      return p && p.__esModule ? p : { default: p };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.returnFirstArg = e.canTextBeChildOfNode = e.ELEMENTS_WITH_NO_TEXT_CHILDREN = e.PRESERVE_CUSTOM_ATTRIBUTES = void 0, e.isCustomComponent = a, e.setStyleProp = l;
    var r = c2, o = t(g9()), n = /* @__PURE__ */ new Set([
      "annotation-xml",
      "color-profile",
      "font-face",
      "font-face-src",
      "font-face-uri",
      "font-face-format",
      "font-face-name",
      "missing-glyph"
    ]);
    function a(p, u) {
      return p.includes("-") ? !n.has(p) : !!(u && typeof u.is == "string");
    }
    var s = {
      reactCompat: !0
    };
    function l(p, u) {
      if (typeof p == "string") {
        if (!p.trim()) {
          u.style = {};
          return;
        }
        try {
          u.style = (0, o.default)(p, s);
        } catch {
          u.style = {};
        }
      }
    }
    e.PRESERVE_CUSTOM_ATTRIBUTES = Number(r.version.split(".")[0]) >= 16, e.ELEMENTS_WITH_NO_TEXT_CHILDREN = /* @__PURE__ */ new Set([
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
    var d = function(p) {
      return p;
    };
    e.returnFirstArg = d;
  }(Ir)), Ir;
}
var Gs;
function u2() {
  if (Gs) return Eo;
  Gs = 1, Object.defineProperty(Eo, "__esModule", { value: !0 }), Eo.default = a;
  var e = d9(), t = d2(), r = ["checked", "value"], o = ["input", "select", "textarea"], n = {
    reset: !0,
    submit: !0
  };
  function a(l, c) {
    l === void 0 && (l = {});
    var d = {}, p = !!(l.type && n[l.type]);
    for (var u in l) {
      var h = l[u];
      if ((0, e.isCustomAttribute)(u)) {
        d[u] = h;
        continue;
      }
      var f = u.toLowerCase(), C = s(f);
      if (C) {
        var b = (0, e.getPropertyInfo)(C);
        switch (r.includes(C) && o.includes(c) && !p && (C = s("default" + f)), d[C] = h, b && b.type) {
          case e.BOOLEAN:
            d[C] = !0;
            break;
          case e.OVERLOADED_BOOLEAN:
            h === "" && (d[C] = !0);
            break;
        }
        continue;
      }
      t.PRESERVE_CUSTOM_ATTRIBUTES && (d[u] = h);
    }
    return (0, t.setStyleProp)(l.style, d), d;
  }
  function s(l) {
    return e.possibleStandardNames[l];
  }
  return Eo;
}
var sr = {}, Zs;
function f9() {
  if (Zs) return sr;
  Zs = 1;
  var e = sr && sr.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(sr, "__esModule", { value: !0 }), sr.default = a;
  var t = c2, r = e(u2()), o = d2(), n = {
    cloneElement: t.cloneElement,
    createElement: t.createElement,
    isValidElement: t.isValidElement
  };
  function a(l, c) {
    c === void 0 && (c = {});
    for (var d = [], p = typeof c.replace == "function", u = c.transform || o.returnFirstArg, h = c.library || n, f = h.cloneElement, C = h.createElement, b = h.isValidElement, A = l.length, L = 0; L < A; L++) {
      var _ = l[L];
      if (p) {
        var w = c.replace(_, L);
        if (b(w)) {
          A > 1 && (w = f(w, {
            key: w.key || L
          })), d.push(u(w, _, L));
          continue;
        }
      }
      if (_.type === "text") {
        var x = !_.data.trim().length;
        if (x && _.parent && !(0, o.canTextBeChildOfNode)(_.parent) || c.trim && x)
          continue;
        d.push(u(_.data, _, L));
        continue;
      }
      var g = _, m = {};
      s(g) ? ((0, o.setStyleProp)(g.attribs.style, g.attribs), m = g.attribs) : g.attribs && (m = (0, r.default)(g.attribs, g.name));
      var y = void 0;
      switch (_.type) {
        case "script":
        case "style":
          _.children[0] && (m.dangerouslySetInnerHTML = {
            __html: _.children[0].data
          });
          break;
        case "tag":
          _.name === "textarea" && _.children[0] ? m.defaultValue = _.children[0].data : _.children && _.children.length && (y = a(_.children, c));
          break;
        // skip all other cases (e.g., comment)
        default:
          continue;
      }
      A > 1 && (m.key = L), d.push(u(C(_.name, m, y), _, L));
    }
    return d.length === 1 ? d[0] : d;
  }
  function s(l) {
    return o.PRESERVE_CUSTOM_ATTRIBUTES && l.type === "tag" && (0, o.isCustomComponent)(l.name, l.attribs);
  }
  return sr;
}
var qs;
function m9() {
  return qs || (qs = 1, function(e) {
    var t = Rr && Rr.__importDefault || function(c) {
      return c && c.__esModule ? c : { default: c };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.htmlToDOM = e.domToReact = e.attributesToProps = e.Text = e.ProcessingInstruction = e.Element = e.Comment = void 0, e.default = l;
    var r = t(l9());
    e.htmlToDOM = r.default;
    var o = t(u2());
    e.attributesToProps = o.default;
    var n = t(f9());
    e.domToReact = n.default;
    var a = /* @__PURE__ */ s2();
    Object.defineProperty(e, "Comment", { enumerable: !0, get: function() {
      return a.Comment;
    } }), Object.defineProperty(e, "Element", { enumerable: !0, get: function() {
      return a.Element;
    } }), Object.defineProperty(e, "ProcessingInstruction", { enumerable: !0, get: function() {
      return a.ProcessingInstruction;
    } }), Object.defineProperty(e, "Text", { enumerable: !0, get: function() {
      return a.Text;
    } });
    var s = { lowerCaseAttributeNames: !1 };
    function l(c, d) {
      if (typeof c != "string")
        throw new TypeError("First argument must be a string");
      return c ? (0, n.default)((0, r.default)(c, (d == null ? void 0 : d.htmlparser2) || s), d) : [];
    }
  }(Rr)), Rr;
}
var p2 = m9();
const Ws = /* @__PURE__ */ Rc(p2), v9 = Ws.default || Ws;
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
  entries: h2,
  setPrototypeOf: Xs,
  isFrozen: b9,
  getPrototypeOf: C9,
  getOwnPropertyDescriptor: w9
} = Object;
let {
  freeze: Fe,
  seal: tt,
  create: g2
} = Object, {
  apply: ea,
  construct: ta
} = typeof Reflect < "u" && Reflect;
Fe || (Fe = function(t) {
  return t;
});
tt || (tt = function(t) {
  return t;
});
ea || (ea = function(t, r, o) {
  return t.apply(r, o);
});
ta || (ta = function(t, r) {
  return new t(...r);
});
const So = Ve(Array.prototype.forEach), y9 = Ve(Array.prototype.lastIndexOf), Ys = Ve(Array.prototype.pop), Dr = Ve(Array.prototype.push), _9 = Ve(Array.prototype.splice), Io = Ve(String.prototype.toLowerCase), ln = Ve(String.prototype.toString), Ks = Ve(String.prototype.match), Hr = Ve(String.prototype.replace), x9 = Ve(String.prototype.indexOf), k9 = Ve(String.prototype.trim), it = Ve(Object.prototype.hasOwnProperty), ze = Ve(RegExp.prototype.test), zr = A9(TypeError);
function Ve(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
      o[n - 1] = arguments[n];
    return ea(e, t, o);
  };
}
function A9(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
      r[o] = arguments[o];
    return ta(e, r);
  };
}
function re(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Io;
  Xs && Xs(e, null);
  let o = t.length;
  for (; o--; ) {
    let n = t[o];
    if (typeof n == "string") {
      const a = r(n);
      a !== n && (b9(t) || (t[o] = a), n = a);
    }
    e[n] = !0;
  }
  return e;
}
function E9(e) {
  for (let t = 0; t < e.length; t++)
    it(e, t) || (e[t] = null);
  return e;
}
function yt(e) {
  const t = g2(null);
  for (const [r, o] of h2(e))
    it(e, r) && (Array.isArray(o) ? t[r] = E9(o) : o && typeof o == "object" && o.constructor === Object ? t[r] = yt(o) : t[r] = o);
  return t;
}
function Br(e, t) {
  for (; e !== null; ) {
    const o = w9(e, t);
    if (o) {
      if (o.get)
        return Ve(o.get);
      if (typeof o.value == "function")
        return Ve(o.value);
    }
    e = C9(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Js = Fe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), cn = Fe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), dn = Fe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), S9 = Fe(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), un = Fe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), L9 = Fe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Qs = Fe(["#text"]), el = Fe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), pn = Fe(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), tl = Fe(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Lo = Fe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), N9 = tt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), T9 = tt(/<%[\w\W]*|[\w\W]*%>/gm), R9 = tt(/\$\{[\w\W]*/gm), M9 = tt(/^data-[\-\w.\u00B7-\uFFFF]+$/), I9 = tt(/^aria-[\-\w]+$/), f2 = tt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), O9 = tt(/^(?:\w+script|data):/i), P9 = tt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), m2 = tt(/^html$/i), D9 = tt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var rl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: I9,
  ATTR_WHITESPACE: P9,
  CUSTOM_ELEMENT: D9,
  DATA_ATTR: M9,
  DOCTYPE_NAME: m2,
  ERB_EXPR: T9,
  IS_ALLOWED_URI: f2,
  IS_SCRIPT_OR_DATA: O9,
  MUSTACHE_EXPR: N9,
  TMPLIT_EXPR: R9
});
const Fr = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, H9 = function() {
  return typeof window > "u" ? null : window;
}, z9 = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let o = null;
  const n = "data-tt-policy-suffix";
  r && r.hasAttribute(n) && (o = r.getAttribute(n));
  const a = "dompurify" + (o ? "#" + o : "");
  try {
    return t.createPolicy(a, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, ol = function() {
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
function v2() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : H9();
  const t = (W) => v2(W);
  if (t.version = "3.2.6", t.removed = [], !e || !e.document || e.document.nodeType !== Fr.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const o = r, n = o.currentScript, {
    DocumentFragment: a,
    HTMLTemplateElement: s,
    Node: l,
    Element: c,
    NodeFilter: d,
    NamedNodeMap: p = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: u,
    DOMParser: h,
    trustedTypes: f
  } = e, C = c.prototype, b = Br(C, "cloneNode"), A = Br(C, "remove"), L = Br(C, "nextSibling"), _ = Br(C, "childNodes"), w = Br(C, "parentNode");
  if (typeof s == "function") {
    const W = r.createElement("template");
    W.content && W.content.ownerDocument && (r = W.content.ownerDocument);
  }
  let x, g = "";
  const {
    implementation: m,
    createNodeIterator: y,
    createDocumentFragment: k,
    getElementsByTagName: O
  } = r, {
    importNode: D
  } = o;
  let Z = ol();
  t.isSupported = typeof h2 == "function" && typeof w == "function" && m && m.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: z,
    ERB_EXPR: j,
    TMPLIT_EXPR: F,
    DATA_ATTR: ue,
    ARIA_ATTR: ke,
    IS_SCRIPT_OR_DATA: Me,
    ATTR_WHITESPACE: G,
    CUSTOM_ELEMENT: He
  } = rl;
  let {
    IS_ALLOWED_URI: lt
  } = rl, ee = null;
  const ot = re({}, [...Js, ...cn, ...dn, ...un, ...Qs]);
  let X = null;
  const we = re({}, [...el, ...pn, ...tl, ...Lo]);
  let ie = Object.seal(g2(null, {
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
  })), ae = null, ne = null, ct = !0, _e = !0, oe = !1, he = !0, te = !1, ve = !0, Ae = !1, We = !1, Ee = !1, Se = !1, Oe = !1, Xe = !1, Ze = !0, Le = !1;
  const dt = "user-content-";
  let Ye = !0, ut = !1, Jt = {}, Qt = null;
  const Da = re({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Ha = null;
  const za = re({}, ["audio", "video", "img", "source", "image", "track"]);
  let Xo = null;
  const Ba = re({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ho = "http://www.w3.org/1998/Math/MathML", go = "http://www.w3.org/2000/svg", vt = "http://www.w3.org/1999/xhtml";
  let er = vt, Yo = !1, Ko = null;
  const D2 = re({}, [ho, go, vt], ln);
  let fo = re({}, ["mi", "mo", "mn", "ms", "mtext"]), mo = re({}, ["annotation-xml"]);
  const H2 = re({}, ["title", "style", "font", "a", "script"]);
  let Lr = null;
  const z2 = ["application/xhtml+xml", "text/html"], B2 = "text/html";
  let Ie = null, tr = null;
  const F2 = r.createElement("form"), Fa = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, Jo = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(tr && tr === v)) {
      if ((!v || typeof v != "object") && (v = {}), v = yt(v), Lr = // eslint-disable-next-line unicorn/prefer-includes
      z2.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? B2 : v.PARSER_MEDIA_TYPE, Ie = Lr === "application/xhtml+xml" ? ln : Io, ee = it(v, "ALLOWED_TAGS") ? re({}, v.ALLOWED_TAGS, Ie) : ot, X = it(v, "ALLOWED_ATTR") ? re({}, v.ALLOWED_ATTR, Ie) : we, Ko = it(v, "ALLOWED_NAMESPACES") ? re({}, v.ALLOWED_NAMESPACES, ln) : D2, Xo = it(v, "ADD_URI_SAFE_ATTR") ? re(yt(Ba), v.ADD_URI_SAFE_ATTR, Ie) : Ba, Ha = it(v, "ADD_DATA_URI_TAGS") ? re(yt(za), v.ADD_DATA_URI_TAGS, Ie) : za, Qt = it(v, "FORBID_CONTENTS") ? re({}, v.FORBID_CONTENTS, Ie) : Da, ae = it(v, "FORBID_TAGS") ? re({}, v.FORBID_TAGS, Ie) : yt({}), ne = it(v, "FORBID_ATTR") ? re({}, v.FORBID_ATTR, Ie) : yt({}), Jt = it(v, "USE_PROFILES") ? v.USE_PROFILES : !1, ct = v.ALLOW_ARIA_ATTR !== !1, _e = v.ALLOW_DATA_ATTR !== !1, oe = v.ALLOW_UNKNOWN_PROTOCOLS || !1, he = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, te = v.SAFE_FOR_TEMPLATES || !1, ve = v.SAFE_FOR_XML !== !1, Ae = v.WHOLE_DOCUMENT || !1, Se = v.RETURN_DOM || !1, Oe = v.RETURN_DOM_FRAGMENT || !1, Xe = v.RETURN_TRUSTED_TYPE || !1, Ee = v.FORCE_BODY || !1, Ze = v.SANITIZE_DOM !== !1, Le = v.SANITIZE_NAMED_PROPS || !1, Ye = v.KEEP_CONTENT !== !1, ut = v.IN_PLACE || !1, lt = v.ALLOWED_URI_REGEXP || f2, er = v.NAMESPACE || vt, fo = v.MATHML_TEXT_INTEGRATION_POINTS || fo, mo = v.HTML_INTEGRATION_POINTS || mo, ie = v.CUSTOM_ELEMENT_HANDLING || {}, v.CUSTOM_ELEMENT_HANDLING && Fa(v.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ie.tagNameCheck = v.CUSTOM_ELEMENT_HANDLING.tagNameCheck), v.CUSTOM_ELEMENT_HANDLING && Fa(v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ie.attributeNameCheck = v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ie.allowCustomizedBuiltInElements = v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), te && (_e = !1), Oe && (Se = !0), Jt && (ee = re({}, Qs), X = [], Jt.html === !0 && (re(ee, Js), re(X, el)), Jt.svg === !0 && (re(ee, cn), re(X, pn), re(X, Lo)), Jt.svgFilters === !0 && (re(ee, dn), re(X, pn), re(X, Lo)), Jt.mathMl === !0 && (re(ee, un), re(X, tl), re(X, Lo))), v.ADD_TAGS && (ee === ot && (ee = yt(ee)), re(ee, v.ADD_TAGS, Ie)), v.ADD_ATTR && (X === we && (X = yt(X)), re(X, v.ADD_ATTR, Ie)), v.ADD_URI_SAFE_ATTR && re(Xo, v.ADD_URI_SAFE_ATTR, Ie), v.FORBID_CONTENTS && (Qt === Da && (Qt = yt(Qt)), re(Qt, v.FORBID_CONTENTS, Ie)), Ye && (ee["#text"] = !0), Ae && re(ee, ["html", "head", "body"]), ee.table && (re(ee, ["tbody"]), delete ae.tbody), v.TRUSTED_TYPES_POLICY) {
        if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw zr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw zr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        x = v.TRUSTED_TYPES_POLICY, g = x.createHTML("");
      } else
        x === void 0 && (x = z9(f, n)), x !== null && typeof g == "string" && (g = x.createHTML(""));
      Fe && Fe(v), tr = v;
    }
  }, Va = re({}, [...cn, ...dn, ...S9]), $a = re({}, [...un, ...L9]), V2 = function(v) {
    let I = w(v);
    (!I || !I.tagName) && (I = {
      namespaceURI: er,
      tagName: "template"
    });
    const q = Io(v.tagName), be = Io(I.tagName);
    return Ko[v.namespaceURI] ? v.namespaceURI === go ? I.namespaceURI === vt ? q === "svg" : I.namespaceURI === ho ? q === "svg" && (be === "annotation-xml" || fo[be]) : !!Va[q] : v.namespaceURI === ho ? I.namespaceURI === vt ? q === "math" : I.namespaceURI === go ? q === "math" && mo[be] : !!$a[q] : v.namespaceURI === vt ? I.namespaceURI === go && !mo[be] || I.namespaceURI === ho && !fo[be] ? !1 : !$a[q] && (H2[q] || !Va[q]) : !!(Lr === "application/xhtml+xml" && Ko[v.namespaceURI]) : !1;
  }, pt = function(v) {
    Dr(t.removed, {
      element: v
    });
    try {
      w(v).removeChild(v);
    } catch {
      A(v);
    }
  }, rr = function(v, I) {
    try {
      Dr(t.removed, {
        attribute: I.getAttributeNode(v),
        from: I
      });
    } catch {
      Dr(t.removed, {
        attribute: null,
        from: I
      });
    }
    if (I.removeAttribute(v), v === "is")
      if (Se || Oe)
        try {
          pt(I);
        } catch {
        }
      else
        try {
          I.setAttribute(v, "");
        } catch {
        }
  }, Ua = function(v) {
    let I = null, q = null;
    if (Ee)
      v = "<remove></remove>" + v;
    else {
      const Te = Ks(v, /^[\r\n\t ]+/);
      q = Te && Te[0];
    }
    Lr === "application/xhtml+xml" && er === vt && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
    const be = x ? x.createHTML(v) : v;
    if (er === vt)
      try {
        I = new h().parseFromString(be, Lr);
      } catch {
      }
    if (!I || !I.documentElement) {
      I = m.createDocument(er, "template", null);
      try {
        I.documentElement.innerHTML = Yo ? g : be;
      } catch {
      }
    }
    const Pe = I.body || I.documentElement;
    return v && q && Pe.insertBefore(r.createTextNode(q), Pe.childNodes[0] || null), er === vt ? O.call(I, Ae ? "html" : "body")[0] : Ae ? I.documentElement : Pe;
  }, ja = function(v) {
    return y.call(
      v.ownerDocument || v,
      v,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, Qo = function(v) {
    return v instanceof u && (typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || !(v.attributes instanceof p) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function");
  }, Ga = function(v) {
    return typeof l == "function" && v instanceof l;
  };
  function bt(W, v, I) {
    So(W, (q) => {
      q.call(t, v, I, tr);
    });
  }
  const Za = function(v) {
    let I = null;
    if (bt(Z.beforeSanitizeElements, v, null), Qo(v))
      return pt(v), !0;
    const q = Ie(v.nodeName);
    if (bt(Z.uponSanitizeElement, v, {
      tagName: q,
      allowedTags: ee
    }), ve && v.hasChildNodes() && !Ga(v.firstElementChild) && ze(/<[/\w!]/g, v.innerHTML) && ze(/<[/\w!]/g, v.textContent) || v.nodeType === Fr.progressingInstruction || ve && v.nodeType === Fr.comment && ze(/<[/\w]/g, v.data))
      return pt(v), !0;
    if (!ee[q] || ae[q]) {
      if (!ae[q] && Wa(q) && (ie.tagNameCheck instanceof RegExp && ze(ie.tagNameCheck, q) || ie.tagNameCheck instanceof Function && ie.tagNameCheck(q)))
        return !1;
      if (Ye && !Qt[q]) {
        const be = w(v) || v.parentNode, Pe = _(v) || v.childNodes;
        if (Pe && be) {
          const Te = Pe.length;
          for (let $e = Te - 1; $e >= 0; --$e) {
            const Ct = b(Pe[$e], !0);
            Ct.__removalCount = (v.__removalCount || 0) + 1, be.insertBefore(Ct, L(v));
          }
        }
      }
      return pt(v), !0;
    }
    return v instanceof c && !V2(v) || (q === "noscript" || q === "noembed" || q === "noframes") && ze(/<\/no(script|embed|frames)/i, v.innerHTML) ? (pt(v), !0) : (te && v.nodeType === Fr.text && (I = v.textContent, So([z, j, F], (be) => {
      I = Hr(I, be, " ");
    }), v.textContent !== I && (Dr(t.removed, {
      element: v.cloneNode()
    }), v.textContent = I)), bt(Z.afterSanitizeElements, v, null), !1);
  }, qa = function(v, I, q) {
    if (Ze && (I === "id" || I === "name") && (q in r || q in F2))
      return !1;
    if (!(_e && !ne[I] && ze(ue, I))) {
      if (!(ct && ze(ke, I))) {
        if (!X[I] || ne[I]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Wa(v) && (ie.tagNameCheck instanceof RegExp && ze(ie.tagNameCheck, v) || ie.tagNameCheck instanceof Function && ie.tagNameCheck(v)) && (ie.attributeNameCheck instanceof RegExp && ze(ie.attributeNameCheck, I) || ie.attributeNameCheck instanceof Function && ie.attributeNameCheck(I)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            I === "is" && ie.allowCustomizedBuiltInElements && (ie.tagNameCheck instanceof RegExp && ze(ie.tagNameCheck, q) || ie.tagNameCheck instanceof Function && ie.tagNameCheck(q)))
          ) return !1;
        } else if (!Xo[I]) {
          if (!ze(lt, Hr(q, G, ""))) {
            if (!((I === "src" || I === "xlink:href" || I === "href") && v !== "script" && x9(q, "data:") === 0 && Ha[v])) {
              if (!(oe && !ze(Me, Hr(q, G, "")))) {
                if (q)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Wa = function(v) {
    return v !== "annotation-xml" && Ks(v, He);
  }, Xa = function(v) {
    bt(Z.beforeSanitizeAttributes, v, null);
    const {
      attributes: I
    } = v;
    if (!I || Qo(v))
      return;
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: X,
      forceKeepAttr: void 0
    };
    let be = I.length;
    for (; be--; ) {
      const Pe = I[be], {
        name: Te,
        namespaceURI: $e,
        value: Ct
      } = Pe, Nr = Ie(Te), ei = Ct;
      let De = Te === "value" ? ei : k9(ei);
      if (q.attrName = Nr, q.attrValue = De, q.keepAttr = !0, q.forceKeepAttr = void 0, bt(Z.uponSanitizeAttribute, v, q), De = q.attrValue, Le && (Nr === "id" || Nr === "name") && (rr(Te, v), De = dt + De), ve && ze(/((--!?|])>)|<\/(style|title)/i, De)) {
        rr(Te, v);
        continue;
      }
      if (q.forceKeepAttr)
        continue;
      if (!q.keepAttr) {
        rr(Te, v);
        continue;
      }
      if (!he && ze(/\/>/i, De)) {
        rr(Te, v);
        continue;
      }
      te && So([z, j, F], (Ka) => {
        De = Hr(De, Ka, " ");
      });
      const Ya = Ie(v.nodeName);
      if (!qa(Ya, Nr, De)) {
        rr(Te, v);
        continue;
      }
      if (x && typeof f == "object" && typeof f.getAttributeType == "function" && !$e)
        switch (f.getAttributeType(Ya, Nr)) {
          case "TrustedHTML": {
            De = x.createHTML(De);
            break;
          }
          case "TrustedScriptURL": {
            De = x.createScriptURL(De);
            break;
          }
        }
      if (De !== ei)
        try {
          $e ? v.setAttributeNS($e, Te, De) : v.setAttribute(Te, De), Qo(v) ? pt(v) : Ys(t.removed);
        } catch {
          rr(Te, v);
        }
    }
    bt(Z.afterSanitizeAttributes, v, null);
  }, $2 = function W(v) {
    let I = null;
    const q = ja(v);
    for (bt(Z.beforeSanitizeShadowDOM, v, null); I = q.nextNode(); )
      bt(Z.uponSanitizeShadowNode, I, null), Za(I), Xa(I), I.content instanceof a && W(I.content);
    bt(Z.afterSanitizeShadowDOM, v, null);
  };
  return t.sanitize = function(W) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I = null, q = null, be = null, Pe = null;
    if (Yo = !W, Yo && (W = "<!-->"), typeof W != "string" && !Ga(W))
      if (typeof W.toString == "function") {
        if (W = W.toString(), typeof W != "string")
          throw zr("dirty is not a string, aborting");
      } else
        throw zr("toString is not a function");
    if (!t.isSupported)
      return W;
    if (We || Jo(v), t.removed = [], typeof W == "string" && (ut = !1), ut) {
      if (W.nodeName) {
        const Ct = Ie(W.nodeName);
        if (!ee[Ct] || ae[Ct])
          throw zr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (W instanceof l)
      I = Ua("<!---->"), q = I.ownerDocument.importNode(W, !0), q.nodeType === Fr.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? I = q : I.appendChild(q);
    else {
      if (!Se && !te && !Ae && // eslint-disable-next-line unicorn/prefer-includes
      W.indexOf("<") === -1)
        return x && Xe ? x.createHTML(W) : W;
      if (I = Ua(W), !I)
        return Se ? null : Xe ? g : "";
    }
    I && Ee && pt(I.firstChild);
    const Te = ja(ut ? W : I);
    for (; be = Te.nextNode(); )
      Za(be), Xa(be), be.content instanceof a && $2(be.content);
    if (ut)
      return W;
    if (Se) {
      if (Oe)
        for (Pe = k.call(I.ownerDocument); I.firstChild; )
          Pe.appendChild(I.firstChild);
      else
        Pe = I;
      return (X.shadowroot || X.shadowrootmode) && (Pe = D.call(o, Pe, !0)), Pe;
    }
    let $e = Ae ? I.outerHTML : I.innerHTML;
    return Ae && ee["!doctype"] && I.ownerDocument && I.ownerDocument.doctype && I.ownerDocument.doctype.name && ze(m2, I.ownerDocument.doctype.name) && ($e = "<!DOCTYPE " + I.ownerDocument.doctype.name + `>
` + $e), te && So([z, j, F], (Ct) => {
      $e = Hr($e, Ct, " ");
    }), x && Xe ? x.createHTML($e) : $e;
  }, t.setConfig = function() {
    let W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Jo(W), We = !0;
  }, t.clearConfig = function() {
    tr = null, We = !1;
  }, t.isValidAttribute = function(W, v, I) {
    tr || Jo({});
    const q = Ie(W), be = Ie(v);
    return qa(q, be, I);
  }, t.addHook = function(W, v) {
    typeof v == "function" && Dr(Z[W], v);
  }, t.removeHook = function(W, v) {
    if (v !== void 0) {
      const I = y9(Z[W], v);
      return I === -1 ? void 0 : _9(Z[W], I, 1)[0];
    }
    return Ys(Z[W]);
  }, t.removeHooks = function(W) {
    Z[W] = [];
  }, t.removeAllHooks = function() {
    Z = ol();
  }, t;
}
var B9 = v2(), hn = { exports: {} }, il;
function F9() {
  return il || (il = 1, function(e) {
    function t(r, o) {
      if (o && o.documentElement)
        r = o, o = arguments[2];
      else if (!r || !r.documentElement)
        throw new Error(
          "First argument to Readability constructor should be a document object."
        );
      if (o = o || {}, this._doc = r, this._docJSDOMParser = this._doc.firstChild.__JSDOMParser__, this._articleTitle = null, this._articleByline = null, this._articleDir = null, this._articleSiteName = null, this._attempts = [], this._metadata = {}, this._debug = !!o.debug, this._maxElemsToParse = o.maxElemsToParse || this.DEFAULT_MAX_ELEMS_TO_PARSE, this._nbTopCandidates = o.nbTopCandidates || this.DEFAULT_N_TOP_CANDIDATES, this._charThreshold = o.charThreshold || this.DEFAULT_CHAR_THRESHOLD, this._classesToPreserve = this.CLASSES_TO_PRESERVE.concat(
        o.classesToPreserve || []
      ), this._keepClasses = !!o.keepClasses, this._serializer = o.serializer || function(n) {
        return n.innerHTML;
      }, this._disableJSONLD = !!o.disableJSONLD, this._allowedVideoRegex = o.allowedVideoRegex || this.REGEXPS.videos, this._linkDensityModifier = o.linkDensityModifier || 0, this._flags = this.FLAG_STRIP_UNLIKELYS | this.FLAG_WEIGHT_CLASSES | this.FLAG_CLEAN_CONDITIONALLY, this._debug) {
        let n = function(a) {
          if (a.nodeType == a.TEXT_NODE)
            return `${a.nodeName} ("${a.textContent}")`;
          let s = Array.from(a.attributes || [], function(l) {
            return `${l.name}="${l.value}"`;
          }).join(" ");
          return `<${a.localName} ${s}>`;
        };
        this.log = function() {
          if (typeof console < "u") {
            let s = Array.from(arguments, (l) => l && l.nodeType == this.ELEMENT_NODE ? n(l) : l);
            s.unshift("Reader: (Readability)"), console.log(...s);
          } else if (typeof dump < "u") {
            var a = Array.prototype.map.call(arguments, function(s) {
              return s && s.nodeName ? n(s) : s;
            }).join(" ");
            dump("Reader: (Readability) " + a + `
`);
          }
        };
      } else
        this.log = function() {
        };
    }
    t.prototype = {
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
      _postProcessContent(r) {
        this._fixRelativeUris(r), this._simplifyNestedElements(r), this._keepClasses || this._cleanClasses(r);
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
      _removeNodes(r, o) {
        if (this._docJSDOMParser && r._isLiveNodeList)
          throw new Error("Do not pass live node lists to _removeNodes");
        for (var n = r.length - 1; n >= 0; n--) {
          var a = r[n], s = a.parentNode;
          s && (!o || o.call(this, a, n, r)) && s.removeChild(a);
        }
      },
      /**
       * Iterates over a NodeList, and calls _setNodeTag for each node.
       *
       * @param NodeList nodeList The nodes to operate on
       * @param String newTagName the new tag name to use
       * @return void
       */
      _replaceNodeTags(r, o) {
        if (this._docJSDOMParser && r._isLiveNodeList)
          throw new Error("Do not pass live node lists to _replaceNodeTags");
        for (const n of r)
          this._setNodeTag(n, o);
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
      _forEachNode(r, o) {
        Array.prototype.forEach.call(r, o, this);
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
      _findNode(r, o) {
        return Array.prototype.find.call(r, o, this);
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
      _someNode(r, o) {
        return Array.prototype.some.call(r, o, this);
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
      _everyNode(r, o) {
        return Array.prototype.every.call(r, o, this);
      },
      _getAllNodesWithTag(r, o) {
        return r.querySelectorAll ? r.querySelectorAll(o.join(",")) : [].concat.apply(
          [],
          o.map(function(n) {
            var a = r.getElementsByTagName(n);
            return Array.isArray(a) ? a : Array.from(a);
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
      _cleanClasses(r) {
        var o = this._classesToPreserve, n = (r.getAttribute("class") || "").split(/\s+/).filter((a) => o.includes(a)).join(" ");
        for (n ? r.setAttribute("class", n) : r.removeAttribute("class"), r = r.firstElementChild; r; r = r.nextElementSibling)
          this._cleanClasses(r);
      },
      /**
       * Tests whether a string is a URL or not.
       *
       * @param {string} str The string to test
       * @return {boolean} true if str is a URL, false if not
       */
      _isUrl(r) {
        try {
          return new URL(r), !0;
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
      _fixRelativeUris(r) {
        var o = this._doc.baseURI, n = this._doc.documentURI;
        function a(c) {
          if (o == n && c.charAt(0) == "#")
            return c;
          try {
            return new URL(c, o).href;
          } catch {
          }
          return c;
        }
        var s = this._getAllNodesWithTag(r, ["a"]);
        this._forEachNode(s, function(c) {
          var d = c.getAttribute("href");
          if (d)
            if (d.indexOf("javascript:") === 0)
              if (c.childNodes.length === 1 && c.childNodes[0].nodeType === this.TEXT_NODE) {
                var p = this._doc.createTextNode(c.textContent);
                c.parentNode.replaceChild(p, c);
              } else {
                for (var u = this._doc.createElement("span"); c.firstChild; )
                  u.appendChild(c.firstChild);
                c.parentNode.replaceChild(u, c);
              }
            else
              c.setAttribute("href", a(d));
        });
        var l = this._getAllNodesWithTag(r, [
          "img",
          "picture",
          "figure",
          "video",
          "audio",
          "source"
        ]);
        this._forEachNode(l, function(c) {
          var d = c.getAttribute("src"), p = c.getAttribute("poster"), u = c.getAttribute("srcset");
          if (d && c.setAttribute("src", a(d)), p && c.setAttribute("poster", a(p)), u) {
            var h = u.replace(
              this.REGEXPS.srcsetUrl,
              function(f, C, b, A) {
                return a(C) + (b || "") + A;
              }
            );
            c.setAttribute("srcset", h);
          }
        });
      },
      _simplifyNestedElements(r) {
        for (var o = r; o; ) {
          if (o.parentNode && ["DIV", "SECTION"].includes(o.tagName) && !(o.id && o.id.startsWith("readability"))) {
            if (this._isElementWithoutContent(o)) {
              o = this._removeAndGetNext(o);
              continue;
            } else if (this._hasSingleTagInsideElement(o, "DIV") || this._hasSingleTagInsideElement(o, "SECTION")) {
              for (var n = o.children[0], a = 0; a < o.attributes.length; a++)
                n.setAttributeNode(o.attributes[a].cloneNode());
              o.parentNode.replaceChild(n, o), o = n;
              continue;
            }
          }
          o = this._getNextNode(o);
        }
      },
      /**
       * Get the article title as an H1.
       *
       * @return string
       **/
      _getArticleTitle() {
        var r = this._doc, o = "", n = "";
        try {
          o = n = r.title.trim(), typeof o != "string" && (o = n = this._getInnerText(
            r.getElementsByTagName("title")[0]
          ));
        } catch {
        }
        var a = !1;
        function s(h) {
          return h.split(/\s+/).length;
        }
        if (/ [\|\-\\\/>»] /.test(o)) {
          a = / [\\\/>»] /.test(o);
          let h = Array.from(n.matchAll(/ [\|\-\\\/>»] /gi));
          o = n.substring(0, h.pop().index), s(o) < 3 && (o = n.replace(/^[^\|\-\\\/>»]*[\|\-\\\/>»]/gi, ""));
        } else if (o.includes(": ")) {
          var l = this._getAllNodesWithTag(r, ["h1", "h2"]), c = o.trim(), d = this._someNode(l, function(h) {
            return h.textContent.trim() === c;
          });
          d || (o = n.substring(n.lastIndexOf(":") + 1), s(o) < 3 ? o = n.substring(n.indexOf(":") + 1) : s(n.substr(0, n.indexOf(":"))) > 5 && (o = n));
        } else if (o.length > 150 || o.length < 15) {
          var p = r.getElementsByTagName("h1");
          p.length === 1 && (o = this._getInnerText(p[0]));
        }
        o = o.trim().replace(this.REGEXPS.normalize, " ");
        var u = s(o);
        return u <= 4 && (!a || u != s(n.replace(/[\|\-\\\/>»]+/g, "")) - 1) && (o = n), o;
      },
      /**
       * Prepare the HTML document for readability to scrape it.
       * This includes things like stripping javascript, CSS, and handling terrible markup.
       *
       * @return void
       **/
      _prepDocument() {
        var r = this._doc;
        this._removeNodes(this._getAllNodesWithTag(r, ["style"])), r.body && this._replaceBrs(r.body), this._replaceNodeTags(this._getAllNodesWithTag(r, ["font"]), "SPAN");
      },
      /**
       * Finds the next node, starting from the given node, and ignoring
       * whitespace in between. If the given node is an element, the same node is
       * returned.
       */
      _nextNode(r) {
        for (var o = r; o && o.nodeType != this.ELEMENT_NODE && this.REGEXPS.whitespace.test(o.textContent); )
          o = o.nextSibling;
        return o;
      },
      /**
       * Replaces 2 or more successive <br> elements with a single <p>.
       * Whitespace between <br> elements are ignored. For example:
       *   <div>foo<br>bar<br> <br><br>abc</div>
       * will become:
       *   <div>foo<br>bar<p>abc</p></div>
       */
      _replaceBrs(r) {
        this._forEachNode(this._getAllNodesWithTag(r, ["br"]), function(o) {
          for (var n = o.nextSibling, a = !1; (n = this._nextNode(n)) && n.tagName == "BR"; ) {
            a = !0;
            var s = n.nextSibling;
            n.remove(), n = s;
          }
          if (a) {
            var l = this._doc.createElement("p");
            for (o.parentNode.replaceChild(l, o), n = l.nextSibling; n; ) {
              if (n.tagName == "BR") {
                var c = this._nextNode(n.nextSibling);
                if (c && c.tagName == "BR")
                  break;
              }
              if (!this._isPhrasingContent(n))
                break;
              var d = n.nextSibling;
              l.appendChild(n), n = d;
            }
            for (; l.lastChild && this._isWhitespace(l.lastChild); )
              l.lastChild.remove();
            l.parentNode.tagName === "P" && this._setNodeTag(l.parentNode, "DIV");
          }
        });
      },
      _setNodeTag(r, o) {
        if (this.log("_setNodeTag", r, o), this._docJSDOMParser)
          return r.localName = o.toLowerCase(), r.tagName = o.toUpperCase(), r;
        for (var n = r.ownerDocument.createElement(o); r.firstChild; )
          n.appendChild(r.firstChild);
        r.parentNode.replaceChild(n, r), r.readability && (n.readability = r.readability);
        for (var a = 0; a < r.attributes.length; a++)
          n.setAttributeNode(r.attributes[a].cloneNode());
        return n;
      },
      /**
       * Prepare the article node for display. Clean out any inline styles,
       * iframes, forms, strip extraneous <p> tags, etc.
       *
       * @param Element
       * @return void
       **/
      _prepArticle(r) {
        this._cleanStyles(r), this._markDataTables(r), this._fixLazyImages(r), this._cleanConditionally(r, "form"), this._cleanConditionally(r, "fieldset"), this._clean(r, "object"), this._clean(r, "embed"), this._clean(r, "footer"), this._clean(r, "link"), this._clean(r, "aside");
        var o = this.DEFAULT_CHAR_THRESHOLD;
        this._forEachNode(r.children, function(n) {
          this._cleanMatchedNodes(n, function(a, s) {
            return this.REGEXPS.shareElements.test(s) && a.textContent.length < o;
          });
        }), this._clean(r, "iframe"), this._clean(r, "input"), this._clean(r, "textarea"), this._clean(r, "select"), this._clean(r, "button"), this._cleanHeaders(r), this._cleanConditionally(r, "table"), this._cleanConditionally(r, "ul"), this._cleanConditionally(r, "div"), this._replaceNodeTags(
          this._getAllNodesWithTag(r, ["h1"]),
          "h2"
        ), this._removeNodes(
          this._getAllNodesWithTag(r, ["p"]),
          function(n) {
            var a = this._getAllNodesWithTag(n, [
              "img",
              "embed",
              "object",
              "iframe"
            ]).length;
            return a === 0 && !this._getInnerText(n, !1);
          }
        ), this._forEachNode(
          this._getAllNodesWithTag(r, ["br"]),
          function(n) {
            var a = this._nextNode(n.nextSibling);
            a && a.tagName == "P" && n.remove();
          }
        ), this._forEachNode(
          this._getAllNodesWithTag(r, ["table"]),
          function(n) {
            var a = this._hasSingleTagInsideElement(n, "TBODY") ? n.firstElementChild : n;
            if (this._hasSingleTagInsideElement(a, "TR")) {
              var s = a.firstElementChild;
              if (this._hasSingleTagInsideElement(s, "TD")) {
                var l = s.firstElementChild;
                l = this._setNodeTag(
                  l,
                  this._everyNode(l.childNodes, this._isPhrasingContent) ? "P" : "DIV"
                ), n.parentNode.replaceChild(l, n);
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
      _initializeNode(r) {
        switch (r.readability = { contentScore: 0 }, r.tagName) {
          case "DIV":
            r.readability.contentScore += 5;
            break;
          case "PRE":
          case "TD":
          case "BLOCKQUOTE":
            r.readability.contentScore += 3;
            break;
          case "ADDRESS":
          case "OL":
          case "UL":
          case "DL":
          case "DD":
          case "DT":
          case "LI":
          case "FORM":
            r.readability.contentScore -= 3;
            break;
          case "H1":
          case "H2":
          case "H3":
          case "H4":
          case "H5":
          case "H6":
          case "TH":
            r.readability.contentScore -= 5;
            break;
        }
        r.readability.contentScore += this._getClassWeight(r);
      },
      _removeAndGetNext(r) {
        var o = this._getNextNode(r, !0);
        return r.remove(), o;
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
      _getNextNode(r, o) {
        if (!o && r.firstElementChild)
          return r.firstElementChild;
        if (r.nextElementSibling)
          return r.nextElementSibling;
        do
          r = r.parentNode;
        while (r && !r.nextElementSibling);
        return r && r.nextElementSibling;
      },
      // compares second text to first one
      // 1 = same text, 0 = completely different text
      // works the way that it splits both texts into words and then finds words that are unique in second text
      // the result is given by the lower length of unique parts
      _textSimilarity(r, o) {
        var n = r.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean), a = o.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);
        if (!n.length || !a.length)
          return 0;
        var s = a.filter((c) => !n.includes(c)), l = s.join(" ").length / a.join(" ").length;
        return 1 - l;
      },
      /**
       * Checks whether an element node contains a valid byline
       *
       * @param node {Element}
       * @param matchString {string}
       * @return boolean
       */
      _isValidByline(r, o) {
        var n = r.getAttribute("rel"), a = r.getAttribute("itemprop"), s = r.textContent.trim().length;
        return (n === "author" || a && a.includes("author") || this.REGEXPS.byline.test(o)) && !!s && s < 100;
      },
      _getNodeAncestors(r, o) {
        o = o || 0;
        for (var n = 0, a = []; r.parentNode && (a.push(r.parentNode), !(o && ++n === o)); )
          r = r.parentNode;
        return a;
      },
      /***
       * grabArticle - Using a variety of metrics (content score, classname, element types), find the content that is
       *         most likely to be the stuff a user wants to read. Then return it wrapped up in a div.
       *
       * @param page a document to run upon. Needs to be a full document, complete with body.
       * @return Element
       **/
      /* eslint-disable-next-line complexity */
      _grabArticle(r) {
        this.log("**** grabArticle ****");
        var o = this._doc, n = r !== null;
        if (r = r || this._doc.body, !r)
          return this.log("No body found in document. Abort."), null;
        for (var a = r.innerHTML; ; ) {
          this.log("Starting grabArticle loop");
          var s = this._flagIsActive(
            this.FLAG_STRIP_UNLIKELYS
          ), l = [], c = this._doc.documentElement;
          let Ee = !0;
          for (; c; ) {
            c.tagName === "HTML" && (this._articleLang = c.getAttribute("lang"));
            var d = c.className + " " + c.id;
            if (!this._isProbablyVisible(c)) {
              this.log("Removing hidden node - " + d), c = this._removeAndGetNext(c);
              continue;
            }
            if (c.getAttribute("aria-modal") == "true" && c.getAttribute("role") == "dialog") {
              c = this._removeAndGetNext(c);
              continue;
            }
            if (!this._articleByline && !this._metadata.byline && this._isValidByline(c, d)) {
              for (var p = this._getNextNode(c, !0), u = this._getNextNode(c), h = null; u && u != p; ) {
                var f = u.getAttribute("itemprop");
                if (f && f.includes("name")) {
                  h = u;
                  break;
                } else
                  u = this._getNextNode(u);
              }
              this._articleByline = (h ?? c).textContent.trim(), c = this._removeAndGetNext(c);
              continue;
            }
            if (Ee && this._headerDuplicatesTitle(c)) {
              this.log(
                "Removing header: ",
                c.textContent.trim(),
                this._articleTitle.trim()
              ), Ee = !1, c = this._removeAndGetNext(c);
              continue;
            }
            if (s) {
              if (this.REGEXPS.unlikelyCandidates.test(d) && !this.REGEXPS.okMaybeItsACandidate.test(d) && !this._hasAncestorTag(c, "table") && !this._hasAncestorTag(c, "code") && c.tagName !== "BODY" && c.tagName !== "A") {
                this.log("Removing unlikely candidate - " + d), c = this._removeAndGetNext(c);
                continue;
              }
              if (this.UNLIKELY_ROLES.includes(c.getAttribute("role"))) {
                this.log(
                  "Removing content with role " + c.getAttribute("role") + " - " + d
                ), c = this._removeAndGetNext(c);
                continue;
              }
            }
            if ((c.tagName === "DIV" || c.tagName === "SECTION" || c.tagName === "HEADER" || c.tagName === "H1" || c.tagName === "H2" || c.tagName === "H3" || c.tagName === "H4" || c.tagName === "H5" || c.tagName === "H6") && this._isElementWithoutContent(c)) {
              c = this._removeAndGetNext(c);
              continue;
            }
            if (this.DEFAULT_TAGS_TO_SCORE.includes(c.tagName) && l.push(c), c.tagName === "DIV") {
              for (var C = null, b = c.firstChild; b; ) {
                var A = b.nextSibling;
                if (this._isPhrasingContent(b))
                  C !== null ? C.appendChild(b) : this._isWhitespace(b) || (C = o.createElement("p"), c.replaceChild(C, b), C.appendChild(b));
                else if (C !== null) {
                  for (; C.lastChild && this._isWhitespace(C.lastChild); )
                    C.lastChild.remove();
                  C = null;
                }
                b = A;
              }
              if (this._hasSingleTagInsideElement(c, "P") && this._getLinkDensity(c) < 0.25) {
                var L = c.children[0];
                c.parentNode.replaceChild(L, c), c = L, l.push(c);
              } else this._hasChildBlockElement(c) || (c = this._setNodeTag(c, "P"), l.push(c));
            }
            c = this._getNextNode(c);
          }
          var _ = [];
          this._forEachNode(l, function(Se) {
            if (!(!Se.parentNode || typeof Se.parentNode.tagName > "u")) {
              var Oe = this._getInnerText(Se);
              if (!(Oe.length < 25)) {
                var Xe = this._getNodeAncestors(Se, 5);
                if (Xe.length !== 0) {
                  var Ze = 0;
                  Ze += 1, Ze += Oe.split(this.REGEXPS.commas).length, Ze += Math.min(Math.floor(Oe.length / 100), 3), this._forEachNode(Xe, function(Le, dt) {
                    if (!(!Le.tagName || !Le.parentNode || typeof Le.parentNode.tagName > "u")) {
                      if (typeof Le.readability > "u" && (this._initializeNode(Le), _.push(Le)), dt === 0)
                        var Ye = 1;
                      else dt === 1 ? Ye = 2 : Ye = dt * 3;
                      Le.readability.contentScore += Ze / Ye;
                    }
                  });
                }
              }
            }
          });
          for (var w = [], x = 0, g = _.length; x < g; x += 1) {
            var m = _[x], y = m.readability.contentScore * (1 - this._getLinkDensity(m));
            m.readability.contentScore = y, this.log("Candidate:", m, "with score " + y);
            for (var k = 0; k < this._nbTopCandidates; k++) {
              var O = w[k];
              if (!O || y > O.readability.contentScore) {
                w.splice(k, 0, m), w.length > this._nbTopCandidates && w.pop();
                break;
              }
            }
          }
          var D = w[0] || null, Z = !1, z;
          if (D === null || D.tagName === "BODY") {
            for (D = o.createElement("DIV"), Z = !0; r.firstChild; )
              this.log("Moving child out:", r.firstChild), D.appendChild(r.firstChild);
            r.appendChild(D), this._initializeNode(D);
          } else if (D) {
            for (var j = [], F = 1; F < w.length; F++)
              w[F].readability.contentScore / D.readability.contentScore >= 0.75 && j.push(
                this._getNodeAncestors(w[F])
              );
            var ue = 3;
            if (j.length >= ue)
              for (z = D.parentNode; z.tagName !== "BODY"; ) {
                for (var ke = 0, Me = 0; Me < j.length && ke < ue; Me++)
                  ke += Number(
                    j[Me].includes(
                      z
                    )
                  );
                if (ke >= ue) {
                  D = z;
                  break;
                }
                z = z.parentNode;
              }
            D.readability || this._initializeNode(D), z = D.parentNode;
            for (var G = D.readability.contentScore, He = G / 3; z.tagName !== "BODY"; ) {
              if (!z.readability) {
                z = z.parentNode;
                continue;
              }
              var lt = z.readability.contentScore;
              if (lt < He)
                break;
              if (lt > G) {
                D = z;
                break;
              }
              G = z.readability.contentScore, z = z.parentNode;
            }
            for (z = D.parentNode; z.tagName != "BODY" && z.children.length == 1; )
              D = z, z = D.parentNode;
            D.readability || this._initializeNode(D);
          }
          var ee = o.createElement("DIV");
          n && (ee.id = "readability-content");
          var ot = Math.max(
            10,
            D.readability.contentScore * 0.2
          );
          z = D.parentNode;
          for (var X = z.children, we = 0, ie = X.length; we < ie; we++) {
            var ae = X[we], ne = !1;
            if (this.log(
              "Looking at sibling node:",
              ae,
              ae.readability ? "with score " + ae.readability.contentScore : ""
            ), this.log(
              "Sibling has score",
              ae.readability ? ae.readability.contentScore : "Unknown"
            ), ae === D)
              ne = !0;
            else {
              var ct = 0;
              if (ae.className === D.className && D.className !== "" && (ct += D.readability.contentScore * 0.2), ae.readability && ae.readability.contentScore + ct >= ot)
                ne = !0;
              else if (ae.nodeName === "P") {
                var _e = this._getLinkDensity(ae), oe = this._getInnerText(ae), he = oe.length;
                (he > 80 && _e < 0.25 || he < 80 && he > 0 && _e === 0 && oe.search(/\.( |$)/) !== -1) && (ne = !0);
              }
            }
            ne && (this.log("Appending node:", ae), this.ALTER_TO_DIV_EXCEPTIONS.includes(ae.nodeName) || (this.log("Altering sibling:", ae, "to div."), ae = this._setNodeTag(ae, "DIV")), ee.appendChild(ae), X = z.children, we -= 1, ie -= 1);
          }
          if (this._debug && this.log("Article content pre-prep: " + ee.innerHTML), this._prepArticle(ee), this._debug && this.log("Article content post-prep: " + ee.innerHTML), Z)
            D.id = "readability-page-1", D.className = "page";
          else {
            var te = o.createElement("DIV");
            for (te.id = "readability-page-1", te.className = "page"; ee.firstChild; )
              te.appendChild(ee.firstChild);
            ee.appendChild(te);
          }
          this._debug && this.log("Article content after paging: " + ee.innerHTML);
          var ve = !0, Ae = this._getInnerText(ee, !0).length;
          if (Ae < this._charThreshold)
            if (ve = !1, r.innerHTML = a, this._attempts.push({
              articleContent: ee,
              textLength: Ae
            }), this._flagIsActive(this.FLAG_STRIP_UNLIKELYS))
              this._removeFlag(this.FLAG_STRIP_UNLIKELYS);
            else if (this._flagIsActive(this.FLAG_WEIGHT_CLASSES))
              this._removeFlag(this.FLAG_WEIGHT_CLASSES);
            else if (this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))
              this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY);
            else {
              if (this._attempts.sort(function(Se, Oe) {
                return Oe.textLength - Se.textLength;
              }), !this._attempts[0].textLength)
                return null;
              ee = this._attempts[0].articleContent, ve = !0;
            }
          if (ve) {
            var We = [z, D].concat(
              this._getNodeAncestors(z)
            );
            return this._someNode(We, function(Se) {
              if (!Se.tagName)
                return !1;
              var Oe = Se.getAttribute("dir");
              return Oe ? (this._articleDir = Oe, !0) : !1;
            }), ee;
          }
        }
      },
      /**
       * Converts some of the common HTML entities in string to their corresponding characters.
       *
       * @param str {string} - a string to unescape.
       * @return string without HTML entity.
       */
      _unescapeHtmlEntities(r) {
        if (!r)
          return r;
        var o = this.HTML_ESCAPE_MAP;
        return r.replace(/&(quot|amp|apos|lt|gt);/g, function(n, a) {
          return o[a];
        }).replace(/&#(?:x([0-9a-f]+)|([0-9]+));/gi, function(n, a, s) {
          var l = parseInt(a || s, a ? 16 : 10);
          return (l == 0 || l > 1114111 || l >= 55296 && l <= 57343) && (l = 65533), String.fromCodePoint(l);
        });
      },
      /**
       * Try to extract metadata from JSON-LD object.
       * For now, only Schema.org objects of type Article or its subtypes are supported.
       * @return Object with any metadata that could be extracted (possibly none)
       */
      _getJSONLD(r) {
        var o = this._getAllNodesWithTag(r, ["script"]), n;
        return this._forEachNode(o, function(a) {
          if (!n && a.getAttribute("type") === "application/ld+json")
            try {
              var s = a.textContent.replace(
                /^\s*<!\[CDATA\[|\]\]>\s*$/g,
                ""
              ), l = JSON.parse(s);
              if (Array.isArray(l) && (l = l.find((f) => f["@type"] && f["@type"].match(this.REGEXPS.jsonLdArticleTypes)), !l))
                return;
              var c = /^https?\:\/\/schema\.org\/?$/, d = typeof l["@context"] == "string" && l["@context"].match(c) || typeof l["@context"] == "object" && typeof l["@context"]["@vocab"] == "string" && l["@context"]["@vocab"].match(c);
              if (!d || (!l["@type"] && Array.isArray(l["@graph"]) && (l = l["@graph"].find((f) => (f["@type"] || "").match(this.REGEXPS.jsonLdArticleTypes))), !l || !l["@type"] || !l["@type"].match(this.REGEXPS.jsonLdArticleTypes)))
                return;
              if (n = {}, typeof l.name == "string" && typeof l.headline == "string" && l.name !== l.headline) {
                var p = this._getArticleTitle(), u = this._textSimilarity(l.name, p) > 0.75, h = this._textSimilarity(l.headline, p) > 0.75;
                h && !u ? n.title = l.headline : n.title = l.name;
              } else typeof l.name == "string" ? n.title = l.name.trim() : typeof l.headline == "string" && (n.title = l.headline.trim());
              l.author && (typeof l.author.name == "string" ? n.byline = l.author.name.trim() : Array.isArray(l.author) && l.author[0] && typeof l.author[0].name == "string" && (n.byline = l.author.filter(function(f) {
                return f && typeof f.name == "string";
              }).map(function(f) {
                return f.name.trim();
              }).join(", "))), typeof l.description == "string" && (n.excerpt = l.description.trim()), l.publisher && typeof l.publisher.name == "string" && (n.siteName = l.publisher.name.trim()), typeof l.datePublished == "string" && (n.datePublished = l.datePublished.trim());
            } catch (f) {
              this.log(f.message);
            }
        }), n || {};
      },
      /**
       * Attempts to get excerpt and byline metadata for the article.
       *
       * @param {Object} jsonld — object containing any metadata that
       * could be extracted from JSON-LD object.
       *
       * @return Object with optional "excerpt" and "byline" properties
       */
      _getArticleMetadata(r) {
        var o = {}, n = {}, a = this._doc.getElementsByTagName("meta"), s = /\s*(article|dc|dcterm|og|twitter)\s*:\s*(author|creator|description|published_time|title|site_name)\s*/gi, l = /^\s*(?:(dc|dcterm|og|twitter|parsely|weibo:(article|webpage))\s*[-\.:]\s*)?(author|creator|pub-date|description|title|site_name)\s*$/i;
        this._forEachNode(a, function(d) {
          var p = d.getAttribute("name"), u = d.getAttribute("property"), h = d.getAttribute("content");
          if (h) {
            var f = null, C = null;
            u && (f = u.match(s), f && (C = f[0].toLowerCase().replace(/\s/g, ""), n[C] = h.trim())), !f && p && l.test(p) && (C = p, h && (C = C.toLowerCase().replace(/\s/g, "").replace(/\./g, ":"), n[C] = h.trim()));
          }
        }), o.title = r.title || n["dc:title"] || n["dcterm:title"] || n["og:title"] || n["weibo:article:title"] || n["weibo:webpage:title"] || n.title || n["twitter:title"] || n["parsely-title"], o.title || (o.title = this._getArticleTitle());
        const c = typeof n["article:author"] == "string" && !this._isUrl(n["article:author"]) ? n["article:author"] : void 0;
        return o.byline = r.byline || n["dc:creator"] || n["dcterm:creator"] || n.author || n["parsely-author"] || c, o.excerpt = r.excerpt || n["dc:description"] || n["dcterm:description"] || n["og:description"] || n["weibo:article:description"] || n["weibo:webpage:description"] || n.description || n["twitter:description"], o.siteName = r.siteName || n["og:site_name"], o.publishedTime = r.datePublished || n["article:published_time"] || n["parsely-pub-date"] || null, o.title = this._unescapeHtmlEntities(o.title), o.byline = this._unescapeHtmlEntities(o.byline), o.excerpt = this._unescapeHtmlEntities(o.excerpt), o.siteName = this._unescapeHtmlEntities(o.siteName), o.publishedTime = this._unescapeHtmlEntities(o.publishedTime), o;
      },
      /**
       * Check if node is image, or if node contains exactly only one image
       * whether as a direct child or as its descendants.
       *
       * @param Element
       **/
      _isSingleImage(r) {
        for (; r; ) {
          if (r.tagName === "IMG")
            return !0;
          if (r.children.length !== 1 || r.textContent.trim() !== "")
            return !1;
          r = r.children[0];
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
      _unwrapNoscriptImages(r) {
        var o = Array.from(r.getElementsByTagName("img"));
        this._forEachNode(o, function(a) {
          for (var s = 0; s < a.attributes.length; s++) {
            var l = a.attributes[s];
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
          a.remove();
        });
        var n = Array.from(r.getElementsByTagName("noscript"));
        this._forEachNode(n, function(a) {
          if (this._isSingleImage(a)) {
            var s = r.createElement("div");
            s.innerHTML = a.innerHTML;
            var l = a.previousElementSibling;
            if (l && this._isSingleImage(l)) {
              var c = l;
              c.tagName !== "IMG" && (c = l.getElementsByTagName("img")[0]);
              for (var d = s.getElementsByTagName("img")[0], p = 0; p < c.attributes.length; p++) {
                var u = c.attributes[p];
                if (u.value !== "" && (u.name === "src" || u.name === "srcset" || /\.(jpg|jpeg|png|webp)/i.test(u.value))) {
                  if (d.getAttribute(u.name) === u.value)
                    continue;
                  var h = u.name;
                  d.hasAttribute(h) && (h = "data-old-" + h), d.setAttribute(h, u.value);
                }
              }
              a.parentNode.replaceChild(s.firstElementChild, l);
            }
          }
        });
      },
      /**
       * Removes script tags from the document.
       *
       * @param Element
       **/
      _removeScripts(r) {
        this._removeNodes(this._getAllNodesWithTag(r, ["script", "noscript"]));
      },
      /**
       * Check if this node has only whitespace and a single element with given tag
       * Returns false if the DIV node contains non-empty text nodes
       * or if it contains no element with given tag or more than 1 element.
       *
       * @param Element
       * @param string tag of child element
       **/
      _hasSingleTagInsideElement(r, o) {
        return r.children.length != 1 || r.children[0].tagName !== o ? !1 : !this._someNode(r.childNodes, function(n) {
          return n.nodeType === this.TEXT_NODE && this.REGEXPS.hasContent.test(n.textContent);
        });
      },
      _isElementWithoutContent(r) {
        return r.nodeType === this.ELEMENT_NODE && !r.textContent.trim().length && (!r.children.length || r.children.length == r.getElementsByTagName("br").length + r.getElementsByTagName("hr").length);
      },
      /**
       * Determine whether element has any children block level elements.
       *
       * @param Element
       */
      _hasChildBlockElement(r) {
        return this._someNode(r.childNodes, function(o) {
          return this.DIV_TO_P_ELEMS.has(o.tagName) || this._hasChildBlockElement(o);
        });
      },
      /***
       * Determine if a node qualifies as phrasing content.
       * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content
       **/
      _isPhrasingContent(r) {
        return r.nodeType === this.TEXT_NODE || this.PHRASING_ELEMS.includes(r.tagName) || (r.tagName === "A" || r.tagName === "DEL" || r.tagName === "INS") && this._everyNode(r.childNodes, this._isPhrasingContent);
      },
      _isWhitespace(r) {
        return r.nodeType === this.TEXT_NODE && r.textContent.trim().length === 0 || r.nodeType === this.ELEMENT_NODE && r.tagName === "BR";
      },
      /**
       * Get the inner text of a node - cross browser compatibly.
       * This also strips out any excess whitespace to be found.
       *
       * @param Element
       * @param Boolean normalizeSpaces (default: true)
       * @return string
       **/
      _getInnerText(r, o) {
        o = typeof o > "u" ? !0 : o;
        var n = r.textContent.trim();
        return o ? n.replace(this.REGEXPS.normalize, " ") : n;
      },
      /**
       * Get the number of times a string s appears in the node e.
       *
       * @param Element
       * @param string - what to split on. Default is ","
       * @return number (integer)
       **/
      _getCharCount(r, o) {
        return o = o || ",", this._getInnerText(r).split(o).length - 1;
      },
      /**
       * Remove the style attribute on every e and under.
       * TODO: Test if getElementsByTagName(*) is faster.
       *
       * @param Element
       * @return void
       **/
      _cleanStyles(r) {
        if (!(!r || r.tagName.toLowerCase() === "svg")) {
          for (var o = 0; o < this.PRESENTATIONAL_ATTRIBUTES.length; o++)
            r.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[o]);
          this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.includes(r.tagName) && (r.removeAttribute("width"), r.removeAttribute("height"));
          for (var n = r.firstElementChild; n !== null; )
            this._cleanStyles(n), n = n.nextElementSibling;
        }
      },
      /**
       * Get the density of links as a percentage of the content
       * This is the amount of text that is inside a link divided by the total text in the node.
       *
       * @param Element
       * @return number (float)
       **/
      _getLinkDensity(r) {
        var o = this._getInnerText(r).length;
        if (o === 0)
          return 0;
        var n = 0;
        return this._forEachNode(r.getElementsByTagName("a"), function(a) {
          var s = a.getAttribute("href"), l = s && this.REGEXPS.hashUrl.test(s) ? 0.3 : 1;
          n += this._getInnerText(a).length * l;
        }), n / o;
      },
      /**
       * Get an elements class/id weight. Uses regular expressions to tell if this
       * element looks good or bad.
       *
       * @param Element
       * @return number (Integer)
       **/
      _getClassWeight(r) {
        if (!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))
          return 0;
        var o = 0;
        return typeof r.className == "string" && r.className !== "" && (this.REGEXPS.negative.test(r.className) && (o -= 25), this.REGEXPS.positive.test(r.className) && (o += 25)), typeof r.id == "string" && r.id !== "" && (this.REGEXPS.negative.test(r.id) && (o -= 25), this.REGEXPS.positive.test(r.id) && (o += 25)), o;
      },
      /**
       * Clean a node of all elements of type "tag".
       * (Unless it's a youtube/vimeo video. People love movies.)
       *
       * @param Element
       * @param string tag to clean
       * @return void
       **/
      _clean(r, o) {
        var n = ["object", "embed", "iframe"].includes(o);
        this._removeNodes(this._getAllNodesWithTag(r, [o]), function(a) {
          if (n) {
            for (var s = 0; s < a.attributes.length; s++)
              if (this._allowedVideoRegex.test(a.attributes[s].value))
                return !1;
            if (a.tagName === "object" && this._allowedVideoRegex.test(a.innerHTML))
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
      _hasAncestorTag(r, o, n, a) {
        n = n || 3, o = o.toUpperCase();
        for (var s = 0; r.parentNode; ) {
          if (n > 0 && s > n)
            return !1;
          if (r.parentNode.tagName === o && (!a || a(r.parentNode)))
            return !0;
          r = r.parentNode, s++;
        }
        return !1;
      },
      /**
       * Return an object indicating how many rows and columns this table has.
       */
      _getRowAndColumnCount(r) {
        for (var o = 0, n = 0, a = r.getElementsByTagName("tr"), s = 0; s < a.length; s++) {
          var l = a[s].getAttribute("rowspan") || 0;
          l && (l = parseInt(l, 10)), o += l || 1;
          for (var c = 0, d = a[s].getElementsByTagName("td"), p = 0; p < d.length; p++) {
            var u = d[p].getAttribute("colspan") || 0;
            u && (u = parseInt(u, 10)), c += u || 1;
          }
          n = Math.max(n, c);
        }
        return { rows: o, columns: n };
      },
      /**
       * Look for 'data' (as opposed to 'layout') tables, for which we use
       * similar checks as
       * https://searchfox.org/mozilla-central/rev/f82d5c549f046cb64ce5602bfd894b7ae807c8f8/accessible/generic/TableAccessible.cpp#19
       */
      _markDataTables(r) {
        for (var o = r.getElementsByTagName("table"), n = 0; n < o.length; n++) {
          var a = o[n], s = a.getAttribute("role");
          if (s == "presentation") {
            a._readabilityDataTable = !1;
            continue;
          }
          var l = a.getAttribute("datatable");
          if (l == "0") {
            a._readabilityDataTable = !1;
            continue;
          }
          var c = a.getAttribute("summary");
          if (c) {
            a._readabilityDataTable = !0;
            continue;
          }
          var d = a.getElementsByTagName("caption")[0];
          if (d && d.childNodes.length) {
            a._readabilityDataTable = !0;
            continue;
          }
          var p = ["col", "colgroup", "tfoot", "thead", "th"], u = function(f) {
            return !!a.getElementsByTagName(f)[0];
          };
          if (p.some(u)) {
            this.log("Data table because found data-y descendant"), a._readabilityDataTable = !0;
            continue;
          }
          if (a.getElementsByTagName("table")[0]) {
            a._readabilityDataTable = !1;
            continue;
          }
          var h = this._getRowAndColumnCount(a);
          if (h.columns == 1 || h.rows == 1) {
            a._readabilityDataTable = !1;
            continue;
          }
          if (h.rows >= 10 || h.columns > 4) {
            a._readabilityDataTable = !0;
            continue;
          }
          a._readabilityDataTable = h.rows * h.columns > 10;
        }
      },
      /* convert images and figures that have properties like data-src into images that can be loaded without JS */
      _fixLazyImages(r) {
        this._forEachNode(
          this._getAllNodesWithTag(r, ["img", "picture", "figure"]),
          function(o) {
            if (o.src && this.REGEXPS.b64DataUrl.test(o.src)) {
              var n = this.REGEXPS.b64DataUrl.exec(o.src);
              if (n[1] === "image/svg+xml")
                return;
              for (var a = !1, s = 0; s < o.attributes.length; s++) {
                var l = o.attributes[s];
                if (l.name !== "src" && /\.(jpg|jpeg|png|webp)/i.test(l.value)) {
                  a = !0;
                  break;
                }
              }
              if (a) {
                var c = n[0].length, d = o.src.length - c;
                d < 133 && o.removeAttribute("src");
              }
            }
            if (!((o.src || o.srcset && o.srcset != "null") && !o.className.toLowerCase().includes("lazy"))) {
              for (var p = 0; p < o.attributes.length; p++)
                if (l = o.attributes[p], !(l.name === "src" || l.name === "srcset" || l.name === "alt")) {
                  var u = null;
                  if (/\.(jpg|jpeg|png|webp)\s+\d/.test(l.value) ? u = "srcset" : /^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(l.value) && (u = "src"), u) {
                    if (o.tagName === "IMG" || o.tagName === "PICTURE")
                      o.setAttribute(u, l.value);
                    else if (o.tagName === "FIGURE" && !this._getAllNodesWithTag(o, ["img", "picture"]).length) {
                      var h = this._doc.createElement("img");
                      h.setAttribute(u, l.value), o.appendChild(h);
                    }
                  }
                }
            }
          }
        );
      },
      _getTextDensity(r, o) {
        var n = this._getInnerText(r, !0).length;
        if (n === 0)
          return 0;
        var a = 0, s = this._getAllNodesWithTag(r, o);
        return this._forEachNode(
          s,
          (l) => a += this._getInnerText(l, !0).length
        ), a / n;
      },
      /**
       * Clean an element of all tags of type "tag" if they look fishy.
       * "Fishy" is an algorithm based on content length, classnames, link density, number of images & embeds, etc.
       *
       * @return void
       **/
      _cleanConditionally(r, o) {
        this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY) && this._removeNodes(this._getAllNodesWithTag(r, [o]), function(n) {
          var a = function(z) {
            return z._readabilityDataTable;
          }, s = o === "ul" || o === "ol";
          if (!s) {
            var l = 0, c = this._getAllNodesWithTag(n, ["ul", "ol"]);
            this._forEachNode(
              c,
              (z) => l += this._getInnerText(z).length
            ), s = l / this._getInnerText(n).length > 0.9;
          }
          if (o === "table" && a(n) || this._hasAncestorTag(n, "table", -1, a) || this._hasAncestorTag(n, "code") || [...n.getElementsByTagName("table")].some(
            (z) => z._readabilityDataTable
          ))
            return !1;
          var d = this._getClassWeight(n);
          this.log("Cleaning Conditionally", n);
          var p = 0;
          if (d + p < 0)
            return !0;
          if (this._getCharCount(n, ",") < 10) {
            for (var u = n.getElementsByTagName("p").length, h = n.getElementsByTagName("img").length, f = n.getElementsByTagName("li").length - 100, C = n.getElementsByTagName("input").length, b = this._getTextDensity(n, [
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6"
            ]), A = 0, L = this._getAllNodesWithTag(n, [
              "object",
              "embed",
              "iframe"
            ]), _ = 0; _ < L.length; _++) {
              for (var w = 0; w < L[_].attributes.length; w++)
                if (this._allowedVideoRegex.test(L[_].attributes[w].value))
                  return !1;
              if (L[_].tagName === "object" && this._allowedVideoRegex.test(L[_].innerHTML))
                return !1;
              A++;
            }
            var x = this._getInnerText(n);
            if (this.REGEXPS.adWords.test(x) || this.REGEXPS.loadingWords.test(x))
              return !0;
            var g = x.length, m = this._getLinkDensity(n), y = ["SPAN", "LI", "TD"].concat(
              Array.from(this.DIV_TO_P_ELEMS)
            ), k = this._getTextDensity(n, y), O = this._hasAncestorTag(n, "figure"), D = (() => {
              const j = [];
              return !O && h > 1 && u / h < 0.5 && j.push(`Bad p to img ratio (img=${h}, p=${u})`), !s && f > u && j.push(`Too many li's outside of a list. (li=${f} > p=${u})`), C > Math.floor(u / 3) && j.push(`Too many inputs per p. (input=${C}, p=${u})`), !s && !O && b < 0.9 && g < 25 && (h === 0 || h > 2) && m > 0 && j.push(
                `Suspiciously short. (headingDensity=${b}, img=${h}, linkDensity=${m})`
              ), !s && d < 25 && m > 0.2 + this._linkDensityModifier && j.push(
                `Low weight and a little linky. (linkDensity=${m})`
              ), d >= 25 && m > 0.5 + this._linkDensityModifier && j.push(
                `High weight and mostly links. (linkDensity=${m})`
              ), (A === 1 && g < 75 || A > 1) && j.push(
                `Suspicious embed. (embedCount=${A}, contentLength=${g})`
              ), h === 0 && k === 0 && j.push(
                `No useful content. (img=${h}, textDensity=${k})`
              ), j.length ? (this.log("Checks failed", j), !0) : !1;
            })();
            if (s && D) {
              for (var Z = 0; Z < n.children.length; Z++)
                if (n.children[Z].children.length > 1)
                  return D;
              let j = n.getElementsByTagName("li").length;
              if (h == j)
                return !1;
            }
            return D;
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
      _cleanMatchedNodes(r, o) {
        for (var n = this._getNextNode(r, !0), a = this._getNextNode(r); a && a != n; )
          o.call(this, a, a.className + " " + a.id) ? a = this._removeAndGetNext(a) : a = this._getNextNode(a);
      },
      /**
       * Clean out spurious headers from an Element.
       *
       * @param Element
       * @return void
       **/
      _cleanHeaders(r) {
        let o = this._getAllNodesWithTag(r, ["h1", "h2"]);
        this._removeNodes(o, function(n) {
          let a = this._getClassWeight(n) < 0;
          return a && this.log("Removing header with low class weight:", n), a;
        });
      },
      /**
       * Check if this node is an H1 or H2 element whose content is mostly
       * the same as the article title.
       *
       * @param Element  the node to check.
       * @return boolean indicating whether this is a title-like header.
       */
      _headerDuplicatesTitle(r) {
        if (r.tagName != "H1" && r.tagName != "H2")
          return !1;
        var o = this._getInnerText(r, !1);
        return this.log("Evaluating similarity of header:", o, this._articleTitle), this._textSimilarity(this._articleTitle, o) > 0.75;
      },
      _flagIsActive(r) {
        return (this._flags & r) > 0;
      },
      _removeFlag(r) {
        this._flags = this._flags & ~r;
      },
      _isProbablyVisible(r) {
        return (!r.style || r.style.display != "none") && (!r.style || r.style.visibility != "hidden") && !r.hasAttribute("hidden") && //check for "fallback-image" so that wikimedia math images are displayed
        (!r.hasAttribute("aria-hidden") || r.getAttribute("aria-hidden") != "true" || r.className && r.className.includes && r.className.includes("fallback-image"));
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
          var r = this._doc.getElementsByTagName("*").length;
          if (r > this._maxElemsToParse)
            throw new Error(
              "Aborting parsing document; " + r + " elements found"
            );
        }
        this._unwrapNoscriptImages(this._doc);
        var o = this._disableJSONLD ? {} : this._getJSONLD(this._doc);
        this._removeScripts(this._doc), this._prepDocument();
        var n = this._getArticleMetadata(o);
        this._metadata = n, this._articleTitle = n.title;
        var a = this._grabArticle();
        if (!a)
          return null;
        if (this.log("Grabbed: " + a.innerHTML), this._postProcessContent(a), !n.excerpt) {
          var s = a.getElementsByTagName("p");
          s.length && (n.excerpt = s[0].textContent.trim());
        }
        var l = a.textContent;
        return {
          title: this._articleTitle,
          byline: n.byline || this._articleByline,
          dir: this._articleDir,
          lang: this._articleLang,
          content: this._serializer(a),
          textContent: l,
          length: l.length,
          excerpt: n.excerpt,
          siteName: n.siteName || this._articleSiteName,
          publishedTime: n.publishedTime
        };
      }
    }, e.exports = t;
  }(hn)), hn.exports;
}
var gn = { exports: {} }, nl;
function V9() {
  return nl || (nl = 1, function(e) {
    var t = {
      // NOTE: These two regular expressions are duplicated in
      // Readability.js. Please keep both copies in sync.
      unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
      okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i
    };
    function r(n) {
      return (!n.style || n.style.display != "none") && !n.hasAttribute("hidden") && //check for "fallback-image" so that wikimedia math images are displayed
      (!n.hasAttribute("aria-hidden") || n.getAttribute("aria-hidden") != "true" || n.className && n.className.includes && n.className.includes("fallback-image"));
    }
    function o(n, a = {}) {
      typeof a == "function" && (a = { visibilityChecker: a });
      var s = {
        minScore: 20,
        minContentLength: 140,
        visibilityChecker: r
      };
      a = Object.assign(s, a);
      var l = n.querySelectorAll("p, pre, article"), c = n.querySelectorAll("div > br");
      if (c.length) {
        var d = new Set(l);
        [].forEach.call(c, function(u) {
          d.add(u.parentNode);
        }), l = Array.from(d);
      }
      var p = 0;
      return [].some.call(l, function(u) {
        if (!a.visibilityChecker(u))
          return !1;
        var h = u.className + " " + u.id;
        if (t.unlikelyCandidates.test(h) && !t.okMaybeItsACandidate.test(h) || u.matches("li p"))
          return !1;
        var f = u.textContent.trim().length;
        return f < a.minContentLength ? !1 : (p += Math.sqrt(f - a.minContentLength), p > a.minScore);
      });
    }
    e.exports = o;
  }(gn)), gn.exports;
}
var fn, al;
function $9() {
  if (al) return fn;
  al = 1;
  var e = F9(), t = V9();
  return fn = {
    Readability: e,
    isProbablyReaderable: t
  }, fn;
}
var b2 = $9();
const U9 = "body[data-vwp-font=open-dyslexic] *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *){font-family:OpenDyslexic_Font,sans-serif!important}body[data-vwp-font=comic-neue] *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *){font-family:ComicNeue_Font,sans-serif!important}", mn = ["open-dyslexic", "comic-neue"], j9 = "vwp-dyslexic-font-style", C2 = () => {
  const [e, t] = U([]), { dyslexicFont: r } = S(), { path: o } = zt(), [n, a] = U(-1), [s, l] = U();
  P(() => {
    r && qe(U9, j9);
  }, [r]), P(() => {
    o && (a(mn.findIndex((p) => p === r)), l(r), d(r));
  }, [o, r]);
  const c = () => {
    const p = n + 1 < mn.length ? n + 1 : -1, u = mn[p] || void 0;
    S.setState({ dyslexicFont: u });
  }, d = async (p) => {
    switch (p) {
      case "open-dyslexic":
        e.includes("open-dyslexic") || await op(o), t((u) => [...u, "open-dyslexic"]);
        break;
      case "comic-neue":
        e.includes("comic-neue") || await ip(o), t((u) => [...u, "comic-neue"]);
    }
    if (!p) return document.body.removeAttribute("data-vwp-font");
    document.body.dataset.vwpFont = p;
  };
  return { toggleFont: c, index: n, option: s };
}, G9 = (e, t = 150) => {
  const r = e.trim().split(/\s+/).length;
  return Math.ceil(r / t);
}, Z9 = () => {
  const [e, t] = U(), { theme: r } = Go(), { highlightTitles: o, highlightLinks: n, readerMode: a } = S(), { option: s } = r2(), { option: l } = n2(), { option: c } = C2(), { option: d } = o2();
  if (P(() => {
    const h = document.cloneNode(!0), C = new b2.Readability(h).parse();
    t({ ...C, readingTime: G9((C == null ? void 0 : C.textContent) || "") });
  }, []), !(e != null && e.content)) return null;
  const p = e != null && e.content ? B9.sanitize(e.content) : "", u = v9(p, {
    replace: (h) => {
      if (h.type === "tag" && h.name === "a") {
        const f = h;
        return /* @__PURE__ */ i("a", { ...f.attribs, target: "_blank", rel: "noopener noreferrer", children: p2.domToReact(f.children) });
      }
    }
  });
  return /* @__PURE__ */ i(Ce, { children: [
    /* @__PURE__ */ i("style", { children: n9 }),
    /* @__PURE__ */ i(
      "div",
      {
        id: "vwp-reader-mode-view",
        "data-active": a,
        "data-theme": r,
        "data-highlight-titles": o,
        "data-highlight-links": n,
        style: {
          fontSize: 18 * ((s == null ? void 0 : s.value) || 1),
          lineHeight: 1.5 * ((l == null ? void 0 : l.value) || 1),
          letterSpacing: (d == null ? void 0 : d.value) || 0,
          fontFamily: c ? c === "open-dyslexic" ? "OpenDyslexic_Font" : "ComicNeue_Font" : "inherit"
        },
        children: /* @__PURE__ */ i("div", { className: "vwp-reader-mode-container", children: [
          /* @__PURE__ */ i("header", { children: [
            /* @__PURE__ */ i("h1", { style: { fontSize: 36 * ((s == null ? void 0 : s.value) || 1) }, children: e.title }),
            /* @__PURE__ */ i("p", { style: { fontSize: 16 * ((s == null ? void 0 : s.value) || 1) }, children: [
              "Tempo de leitura: ",
              e.readingTime,
              " minuto(s)"
            ] })
          ] }),
          /* @__PURE__ */ i("div", { class: "vwp-reader-mode-content", children: u })
        ] })
      }
    )
  ] });
}, q9 = "vwp-reader-mode", W9 = "vwp-reader-mode-overlay", X9 = () => {
  const { readerMode: e } = S();
  P(() => {
    S.getState().readerMode && t(!0);
  }, []), P(() => {
    const r = po(W9, !0);
    et(/* @__PURE__ */ i(Z9, {}), r);
  }, []);
  const t = (r) => {
    const o = r !== void 0 ? r : !e;
    S.setState({ readerMode: o }), document.body.classList.toggle(q9, o);
  };
  return { toggle: t, isActive: !!e };
}, sl = () => {
  const { t: e } = B(), { toggle: t, isActive: r } = X9();
  if (b2.isProbablyReaderable(document))
    return /* @__PURE__ */ i(se, { showActiveIndicator: !0, "aria-label": e("al.reader_mode"), isActive: r, onClick: () => t(), children: [
      /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(wp, { iconTitle: e("al.reader_mode") }) }),
      /* @__PURE__ */ i(le, { children: e("reader_mode") }),
      /* @__PURE__ */ i(ce, { children: e(r ? "actived" : "deactivated") })
    ] });
}, Y9 = "body *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *) .vwp-text-reader{cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXkSURBVHgBzVlNSBxXHP+/t+qukBBPie0hbKF6S5uESgyNdkMCpcmhLQULPW3SWynRY4MGlaDNLbH0Wj8uPQhp7KHpJSWb1sOCpWvw5hY6eEn0UkVBV9338n6zzu7szHu7s+6syQ+G2Z2P9/7fX8MujO8MMGL9pCAltTGiNtKBkWWfJSucSVokyZJMrjMhn+d5fn1h8NgiHTFY99juU0VMgkKCEsaiAHMkU2Asfac1RQ0E6x7P/ackGaeGgqUkiTlB+8/C1hK7MJb732g2jYHFJJuTe/mJ9GirRXVCmVBO0msDS5Gg6fSdlhk6JF4zA0VYJNjIYRh5UxhwYOVp7/Na/ITTm4V4hJozSqhTiWEZyC+PhIG3TjD7qAHJnZbdTPfwdrzag6Gb0LnTjM6rA+eOU4yORcvvb+WIllcl/ZVVx7KkFxvm7dUdlSTZQCXfCC0PXDvD1VEgvBb8syLp9yVJj5dEpcdG04PREd2NuhkAwUPXI9R+guoCGBn/TZg1IlhSp4m6fODrS5x+/Kp+4gGY3fSNCPV9YCCJy+musa2zvsul4qw2DF7ndPNSuDHgWIyo/6p5XRWhHnmjE7eryhoB4mHzjQI0a2Aivh3dG3Zf4Iyxdapx8UYSX20fJuVA993thPOfCyksCgjE8rDNBsiu6qNQ/xWuzx88UtQCZyQ3KCDgsI3AmIo+OGb/LmcCPnHrik5gMuFogXOKBKo7oM4woo0OTu74aV7Yic6N3k59bmEs8inOvGW32aIA6OsKlqA2VWIHIR/f36cP7+1TciqvNY/sWikLw96Rsbd2iGYX/M/2dvj3FkwmbQZSo8qJnX7XAJQEHSeDMfDtz3madEkS9u01DxCanMzbzOE5mEpfV8FUHi/5Exm07y1J0ITBjOy3mKSKZhS0PICk/13V3/OahyNxRzs9B1KGVrxmBAYhRC8kZ+/bDKgmPEUVoFOhDigHTACxjsmAoJ7Owpoo7IC3XdFmc0cGpeFAA2p6QBUQlvOCCd3vIGjXhFM1ATlrMxDbj1U0oaC1fG8Hr7iGY4ogHuU0cP504Z3ltZLUj8f8+3Wc8q+p3miz37YdGQ12nUDIM2XpW1fLr8MHwBRKcMDxBV0PYQIcuan4Tyo/YJSgOoE6CZIGQS9Vinz3JNGXXbwsEMAHHn5T2hq+kTnwH2M1aoCLAfGMWDhlQk8nIldpLZ0JuqWMCAVm3Rrx4oWhXigygBGgGnKt64ZckFA1P0AE+jMraH6ZtE0JNIBIgujjXcsJvV4zc8Pg9FaT+5/KBw+UGY14n8qsKOmc0S5gEz3xpCDBSoCJ4Jj4g+gTJWVkX4eRe19EbKYr5ZvsmiZES1nOgMmMCi/7F0eWvf2wYi+rBXrglxuiWBwiTLdX0XBGk2MY8cUyaguTZH80MjXcurQfFCBIK1UN3E7uBhKwX9wiP+q9BPvTLbBZ50QmaDLLGDI82xPPfQzYWtAUd4gUXtQ4rDr0+7q9EfYx3W7SviGF0gKfcl9ynNDtaHBESDGoKThACL32XrD+wgmxfhr5NE5GEei+3GDDmZtNgTNlvYDto+z2VqcKlhp0vYMf5sCr8QVIAiHzKAD/Qm+hIR7dzIjz08gAfEFNLB54ryMiTc43nokfnkhTbrHcE7qKtUM01zxqcuhGMQHJo4Mzzkp3xWX336phoPv77bgUPKMrMVAWGEcfhwBs/rtf8sauTtXPI+mhaJlpB9r54t3cZ5LTI909OHa9wy5IfXZB2g291uZtsOn0YMsN31UKiO6x7aQ3tLrhMAKtHI8Gn2BUJ5wKMX8odll3qybdgwlJ/H61z7JO5Wk3J7FS6Qwis6vovgrNf2YlSP7QS754l2oEfEIlkaeN/zhOWpv3ombDTd9utWK5lnOQDDUOFmM8UY14oK7wYWsjz6bUnC9BIcD+JqZ6kiCEOwgl/tmMCDUxZqr0OIxpKSeVjOZad6MzhQFDcIQTwF24OL73kRQioQjCzCau0lHc4/QWOik0Iyo0L8Zyzb/WSrQbrwDCzLLGTU5efAAAAABJRU5ErkJggg==),pointer!important;text-decoration:underline!important}", K9 = {
  event: null,
  isActive: !1,
  onClick: void 0,
  type: "button",
  element: null,
  listener: null,
  render: void 0
}, Xt = Ht()(() => ({
  ...K9
})), J9 = Array.from([document.body, ...document.body.children]), vn = ac(), bn = Be(".vp-guide-container"), Q9 = (e) => {
  var t;
  return mt(e, ["IMG"]) ? e.alt : Ma(e) ? e.value : mt(e, ["SELECT"]) ? (t = Be(`[value="${e.value}"]`, e)) == null ? void 0 : t.innerText : e.innerText.trim() || "";
}, w2 = (e) => {
  let t = e;
  for (; t && !J9.includes(t); ) {
    if (e6(t) || t.onclick && !o6(t)) return t;
    t = t.parentNode;
  }
  return null;
}, Cn = (e) => vn != null && vn.contains(e) || bn != null && bn.contains(e) || e.matches(".vw-links") ? !1 : i6(e) || w2(e) || Ma(e) || t6(e) || r6(e), mt = (e, t) => t.includes(e.tagName), e6 = (e) => mt(e, ["A", "BUTTON"]), Ma = (e) => mt(e, "INPUT") && e.type === "submit", t6 = (e) => mt(e, "IMG") && e.alt && e.alt.trim(), r6 = (e) => mt(e, "SELECT"), o6 = (e) => mt(e, ["SVG", "PATH"]), i6 = (e) => {
  const t = (r) => {
    var o;
    return r.nodeType === Node.TEXT_NODE && ((o = r == null ? void 0 : r.textContent) == null ? void 0 : o.trim());
  };
  return Array.from(e.childNodes).some((r) => t(r));
}, n6 = (e) => {
  if (!e.parentElement) return;
  const t = Be("input", e.parentElement);
  t && ["radio", "checkbox"].includes(t.type) && (t.checked = !t.checked);
}, a6 = (e, t) => {
  var u;
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
  const a = n.slice(0, o), s = n.slice(o), l = a.match(/[\wÀ-ú’-]+$/), c = s.match(/^[\wÀ-ú’-]+/), d = `${(l == null ? void 0 : l[0]) ?? ""}${(c == null ? void 0 : c[0]) ?? ""}`;
  if (!d) return null;
  const p = o - (((u = l == null ? void 0 : l[0]) == null ? void 0 : u.length) ?? 0);
  return { word: d, node: r, offset: p };
}, s6 = (e) => {
  document.querySelectorAll(`span.${e}`).forEach((t) => {
    const r = t.parentNode;
    if (!r) return;
    const o = document.createTextNode(t.textContent || "");
    r.replaceChild(o, t), r.normalize();
  });
}, y2 = ({ callback: e, isWordByWord: t, hoverClss: r }) => {
  const o = (d) => {
    if (!r) return;
    const p = d.target;
    (!(Cn(p) && t) || !mt(p, "IMG")) && p.classList.add(r);
  }, n = (d) => {
    !t || !r || so(() => {
      const p = d.target;
      if (!Cn(p)) return;
      s6(r);
      const { word: u, node: h, offset: f } = a6(d.clientX, d.clientY) || {};
      if (u && h && typeof f == "number") {
        const C = document.createRange();
        C.setStart(h, f), C.setEnd(h, f + u.length);
        const b = document.createElement("span");
        b.className = r, b.textContent = u, C.deleteContents(), C.insertNode(b);
      }
    });
  }, a = (d) => {
    var C;
    const p = d.target, u = window.getSelection(), h = u == null ? void 0 : u.toString().trim();
    if (Xt.setState({ isActive: !1 }), !Cn(p)) return;
    if (h && !t) return e == null ? void 0 : e(h);
    if (d.preventDefault(), d.stopPropagation(), t && r) {
      const b = Be(`.${r}`), A = (C = b == null ? void 0 : b.textContent) == null ? void 0 : C.trim();
      A && (e == null || e(A));
    } else {
      const b = Q9(p);
      b != null && b.trim() && (e == null || e(b));
    }
    const f = p.tagName === "A" ? p : w2(p);
    f && l(f, d), mt(p, "LABEL") ? n6(p) : (mt(p, "BUTTON") || Ma(p)) && l(p, d);
  }, s = (d) => {
    if (!r) return;
    d.target.classList.remove(r);
  }, l = (d, p) => {
    Xt.setState({
      isActive: !0,
      event: p,
      type: d.tagName.toLowerCase() === "a" ? "link" : "button",
      onClick: () => {
        d.dispatchEvent(new MouseEvent("click", { bubbles: !0 })), Xt.setState({ isActive: !1 });
      }
    });
  }, c = () => {
    document.body.removeEventListener("mousemove", n), document.body.removeEventListener("mouseover", o), document.body.removeEventListener("mouseout", s), document.body.removeEventListener("click", a, !0);
  };
  return t ? document.body.addEventListener("mousemove", n) : (document.body.addEventListener("mouseover", o), document.body.addEventListener("mouseout", s)), document.body.addEventListener("click", a, !0), c;
}, _2 = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-ES"
}, br = (e, t) => {
  if (!("speechSynthesis" in window))
    return console.error(Ea("speech_is_not_supported", { locale: (t == null ? void 0 : t.locale) || "pt" })), null;
  const r = new SpeechSynthesisUtterance(e), o = () => {
    const n = _2[(t == null ? void 0 : t.locale) || "pt"] || "pt-BR", a = speechSynthesis.getVoices();
    let s = a.find((l) => l.lang === n);
    s || (console.warn(`Voz para ${n} não encontrada. Usando fallback en-US.`), s = a.find((l) => l.lang === "en-US")), r.lang = n, r.rate = (t == null ? void 0 : t.velocity) || 1, r.pitch = 1, r.volume = 1, r.voice = s || null, speechSynthesis.cancel(), speechSynthesis.speak(r), r.onend = () => speechSynthesis.cancel();
  };
  return speechSynthesis.getVoices().length === 0 ? window.speechSynthesis.onvoiceschanged = () => o() : o(), r;
}, l6 = ({ onResult: e, onStart: t, onError: r, onEnd: o }, n) => {
  const a = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!a) return console.error("Speech Recognition API is not available");
  const s = new a();
  return s.lang = _2.pt || "pt-BR", s.continuous = !0, e && (s.onresult = (l) => {
    const c = l.results[l.resultIndex][0].transcript.replace(/\.$/, "");
    e(c);
  }), r && (s.onerror = (l) => {
    r(l.error);
  }), o && (s.onend = () => {
    o();
  }), t == null || t(), s;
}, eo = () => {
  "speechSynthesis" in window && speechSynthesis.cancel();
}, Cr = "speechSynthesis" in window, c6 = "SpeechRecognition" in window || "webkitSpeechRecognition" in window, d6 = "vwp-text-reader-style", u6 = () => {
  const { locale: e } = B(), { textReader: t } = S();
  return P(() => {
    t != null && t.isActive && qe(Y9, d6);
  }, [t]), P(() => {
    const o = t != null && t.isActive ? y2({
      hoverClss: "vwp-text-reader",
      callback: (n) => br(n, { locale: e, velocity: t == null ? void 0 : t.velocity })
    }) : void 0;
    return () => {
      o == null || o();
    };
  }, [t, e]), { toggle: (o) => {
    const n = o !== void 0 ? o : !(t != null && t.isActive);
    n ? br(Ea("text_reader_is_actived"), { locale: e }) : eo(), S.setState({ textReader: { isActive: n }, largeCursor: void 0, dictionary: void 0 });
  }, isActive: !!(t != null && t.isActive) };
}, p6 = () => {
  const { t: e } = B(), { toggle: t, isActive: r } = u6();
  return /* @__PURE__ */ i(
    se,
    {
      disabled: !Cr,
      showActiveIndicator: !0,
      "aria-label": e("al.text_reader"),
      isActive: r,
      onClick: () => t(),
      children: [
        /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(Zo, { iconTitle: e("al.text_reader") }) }),
        /* @__PURE__ */ i(le, { children: e("text_reader") }),
        /* @__PURE__ */ i(ce, { children: e(Cr ? r ? "actived" : "deactivated" : "no_support") })
      ]
    }
  );
}, h6 = "body *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *) .vwp-dictionary{text-decoration:underline!important;cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAY4SURBVHgBzVlNTFRXFD73jTKQaLQbf7qwNBF3WGlqxNSfIZI0wqK0pDRxRXHVpi0s26KBiYWyU9omrsrPpkmpiXShTZM2Dtom00AK6g5M+sJCxY0YTWCAudfzvcfAzHv3vXmPmUG+ZPLm/d17vnvP/c6554ljvYsdgkQ7MZSi3YJoN+kgyLSOSthHUiYpMpVQ80Kqu2kjPT/euWOKNhmitmfpFhsToyKBB2NKghypBIglL1YkqIQQtb2p/3kkK6mkEAlFclTSylixZ0kc60k99XSb0sAUSoyq5XR/Ml5hUoFgF0opemUQCZI0lLxYNkwbxCsmsAaTpOjeCJGtQiADM03LH4RZJwZtLVRGaPskD+pgrEsFWpdbjUAGrYtlS5O1XQuV+R4sugvtjAo6e1hQ1R78iPZzaNwRte+9SBE9mlf06BnRnRlFk7P479093+EgKTr81kbR4kDNAUHnTxjWMQxuTysamZAWGR/Ek53Rbt2Nggns3yWoszG84U6AyPd/Se8ZkaJVNxMFEWg5alijnnGRQvFikeinv6U1IzqwQtU4FcpYT87CAYa3nyme8cCOcqL2eoPaTui1hRXqulOdDCurDAkY79VJMeDTfuVCdLkr+4IhhJinEIDblNL4DECi5R13P0KpjtpLC7HMuSGVNCkgsGDPn9i80IG+0KcLRmRtFgxB6hkFxJf1xfX5fMCa+KZRN2AqlpmFbQZFsAHJ15Ylk6eq3KPxH+v37RlJU7N2kEKwAkkEsIMcyBqr1yXW79kjB4hOV7nl+G0+xzVnnBAi8j4fEgKrmsP2U8qDvuYInXQQ+PzndL4AtEYeCPJsAxPudIw6iH/BfWUDUfrfzuhrVsv5YgH88NqnEdf1d/tWKAyQZrQctUe0aq+dYmAWpueUlVqMjNv6/89X21zvvnd5xXo2B1LWWVSFIt/0NUyUhZHahce49lmEPmICmIeb96QVtHDcCf0/4y8OmBknlCHesqhKbMBJNHm9fOpQcAJDbRF6vqiodTDtuocRb76apsca2dCNejYwYxrErLdQPYAeeWHfLgoEzNRDzmXE6n+dz3/M2g5jsl0IhPMBguAED/oRi0D5SvkUL2TPl71cwglM8837cAlbsXQEDrLhY6xEv0zYuQ+kEs/ur/bv43WNDdz6bsuxEnFEY95geyCo9sPVMh2BjO49qMmv44oezNnnj7nnkYn8MwCiTqCasu54SiX4Sow2CBgMV9jHBPbx+XPeJ51kQr/fzzXuh3MROrRXFC0gZhGQYyT0SpAJOH5oYBeAqmQMPlsNNzL4PHcxP2DJHODnZubWA1nNG4L6Poz4tg938yWAEiAXueZ1RS5sMrBF9MO3N3LVBUQmZ91KBHeBKDQcNkIt4of6jY6Zo10cD66wG3U7n5phf63aQ77QSaPumi4gBoGuLXb7XAJebjTzBOwL2zIC+XIhP+A9JwQZUy6rdNVqKMAfHe5AEzaVCApdUGu+uuKaBf4c0OR+UqbjZBix7EtYQNB0Z0qB+IB7KKNAy535jb0O1ksnfrkQnkUM0cUcbPh1LiSW5V2tX+iSO3T647lc/80kV34KhY7hOiDacNhfPr3a02a9LPvJC+V1+gREyTjvdQazL6EB5ywE0XJLcaqDrR9dexh9bRqujCEcPFvWrQUYM9y2bdN2ZQiGrQPa5M/kQteb+OOdw2ItOICGEKw2CwN39L6PUnzmrycBBDauWFxxXsemY2ATSPgUuMzsCp3vLiKa2h5f+zrpaLyUJHzbX5J12ae+BKwsVcg67D91nfRzLdO1zSsA8Pn+P32MV9Tt/K4WSB6OX0o1KYOu6+5hYXfUuzf8YQGp7bmh363ZEEPJzrJPXFcpIGp7Flqd0poNyCuqdqdCEoHhGHHfisWq5utuheoNJBQZl/0+y2JGrBrSIVTV7HNEYAAughFGcjj9hFPveyqAC+pHfkMELBLf8WcfZdwq/cdxsn3+QjTu90joQmfy6wqzPFVWg5Gh0sEUwojlMx4oaOVZs5EWg1zni1ERYH0T4z1JEMMzKDzJp1UikivGglOPjbgWL1IlaLRiKTpsFxiCoygEsnG8d/m0kjLGBh1h/6xkRa90LHoTOylsRliap8pT238La3Q2XgKRMujGoESLwAAAAABJRU5ErkJggg==),pointer!important}", g6 = "vwp-dictionary-style", wn = "vwp-dictionary", x2 = () => {
  const { dictionary: e } = S(), t = jo("(max-width: 980px)");
  return P(() => {
    e && qe(h6, g6);
  }, [e]), P(() => {
    const o = e != null && e.isActive ? y2({
      hoverClss: wn,
      isWordByWord: !0,
      callback: (n) => S.setState({ dictionary: { ...e, word: n } })
    }) : st(`.${wn}`).forEach((n) => n.classList.remove(wn));
    return () => {
      o == null || o();
    };
  }, [e]), { toggle: (o) => {
    const n = o !== void 0 ? o : !(e != null && e.isActive);
    S.setState({
      dictionary: { isActive: n },
      pageStructure: void 0,
      textReader: void 0,
      largeCursor: void 0
    }), t && S.setState({ isOpenWidget: !n });
  }, isActive: !!(e != null && e.isActive) };
}, f6 = () => {
  const { t: e, locale: t } = B(), { toggle: r, isActive: o } = x2(), n = t !== "pt";
  return /* @__PURE__ */ i(
    se,
    {
      disabled: n,
      className: "min-h-full items-start",
      showActiveIndicator: !0,
      "aria-label": e("al.dictionary"),
      isActive: o,
      onClick: () => r(),
      children: [
        /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(Yc, { iconTitle: e("al.dictionary") }) }),
        /* @__PURE__ */ i(le, { children: e("dictionary") }),
        /* @__PURE__ */ i(ce, { children: e(n ? "only_pt" : o ? "actived" : "deactivated") })
      ]
    }
  );
}, m6 = () => {
  const { t: e } = B(), { toggleFont: t, option: r, index: o } = C2();
  return /* @__PURE__ */ i(se, { id: "vwp-dy", "aria-label": e("al.dyslexic_font"), isActive: !!r, onClick: t, children: [
    /* @__PURE__ */ i(rt, { size: 2, actived: o }),
    /* @__PURE__ */ i(de, { children: r === "comic-neue" ? /* @__PURE__ */ i(Hp, { iconTitle: e("al.dyslexic_font") }) : /* @__PURE__ */ i(Kc, { iconTitle: e("al.dyslexic_font") }) }),
    /* @__PURE__ */ i(le, { children: e("dyslexic_font") }),
    /* @__PURE__ */ i(ce, { children: e(r ? "actived" : "deactivated") })
  ] });
}, v6 = () => {
  const { disableSound: e } = S();
  P(() => {
    S.getState().disableSound && t(!0);
  }, []);
  const t = (r) => {
    const o = r !== void 0 ? r : !e;
    S.setState({ disableSound: o }), st("audio, video").forEach((n) => {
      n.muted = !o;
    });
  };
  return { toggle: t, isActive: !!e };
}, b6 = () => {
  const { t: e } = B(), { isActive: t, toggle: r } = v6();
  return /* @__PURE__ */ i(se, { showActiveIndicator: !0, "aria-label": e("al.disable_sound"), isActive: t, onClick: () => r(), children: [
    /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(Np, { iconTitle: e("al.disable_sound") }) }),
    /* @__PURE__ */ i(le, { children: e("disable_sounds") }),
    /* @__PURE__ */ i(ce, { children: e(t ? "actived" : "deactivated") })
  ] });
}, yn = [15, 30, 50, 75], C6 = () => {
  const { brightness: e } = S(), [t, r] = U(-1), [o, n] = U();
  return P(() => {
    r(yn.findIndex((s) => s === e)), n(e);
  }, [e]), { toggle: () => {
    const s = t + 1 < yn.length ? t + 1 : -1, l = yn[s] || void 0;
    S.setState({ brightness: l });
  }, index: t, option: o };
}, w6 = () => {
  const { t: e } = B(), { toggle: t, option: r, index: o } = C6();
  return /* @__PURE__ */ i(se, { "aria-label": e("al.reduce_brightness"), isActive: !!r, onClick: t, children: [
    /* @__PURE__ */ i(rt, { size: 4, actived: o }),
    /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(zp, {}) }),
    /* @__PURE__ */ i(le, { children: e("reduce_brightness") }),
    /* @__PURE__ */ i(ce, { children: r ? `${r}%` : e("deactivated") })
  ] });
}, _n = ["blue", "yellow"], y6 = () => {
  const { nightFilter: e } = S(), [t, r] = U(-1), [o, n] = U();
  return P(() => {
    r(_n.findIndex((s) => s === e)), n(e);
  }, [e]), { toggle: () => {
    const s = t + 1 < _n.length ? t + 1 : -1, l = _n[s] || void 0;
    S.setState({ nightFilter: l });
  }, index: t, option: o };
}, _6 = () => {
  const { t: e } = B(), { toggle: t, option: r, index: o } = y6();
  return /* @__PURE__ */ i(se, { id: "vwp-nf", "aria-label": e("al.night_filter"), isActive: !!r, onClick: () => t(), children: [
    /* @__PURE__ */ i(rt, { size: 2, actived: o }),
    /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(Qc, { iconTitle: e("al.night_filter") }) }),
    /* @__PURE__ */ i(le, { children: e("night_filter") }),
    /* @__PURE__ */ i(ce, { children: e(r ? "actived" : "deactivated") })
  ] });
}, x6 = () => {
  const { describeImage: e } = S();
  return P(() => {
    const r = Array.from(document.querySelectorAll("img")), o = (a) => {
      const s = a.currentTarget;
      S.setState({ describeImage: { isActive: !!(e != null && e.isActive), alt: s.alt } });
    }, n = () => {
      S.setState({ describeImage: { isActive: !!(e != null && e.isActive), alt: "" } });
    };
    return r.forEach((a) => {
      a.addEventListener("mouseenter", o), a.addEventListener("mouseleave", n);
    }), () => {
      r.forEach((a) => {
        a.removeEventListener("mouseenter", o), a.removeEventListener("mouseleave", n);
      });
    };
  }, [e]), { toggle: (r) => {
    const o = r !== void 0 ? r : !(e != null && e.isActive);
    S.setState({ describeImage: { isActive: o, alt: "" } });
  }, isActive: !!(e != null && e.isActive) };
}, k6 = () => {
  const { t: e } = B(), { toggle: t, isActive: r } = x6();
  return /* @__PURE__ */ i(se, { showActiveIndicator: !0, "aria-label": e("al.describe_image"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(l8, { iconTitle: e("al.describe_image") }) }),
    /* @__PURE__ */ i(le, { children: e("describe_image") }),
    /* @__PURE__ */ i(ce, { children: e(r ? "actived" : "deactivated") })
  ] });
}, A6 = "html[data-vwp-content-zoom=true] .vwp-content-zoom:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *){cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXwSURBVHgBzVlPTBxVGP/eLLBLUlNOYD3oNincqtLYFJIWl8hFOaiXNvGE9qqCN+u2gU0Fj5XGa4FePDTR0kPbS0m3tIdNagTlxpo48SDCRYhNYJfue77fGwZmZ9/Mvtk/Lb9kM//ezvv+/r7vvWFnpnbGGLFRkhCCOhhRB+nAyFZHwZwjCZsE2YKJTcbFbyWrtPk0fWSZXjBY32TxoRQmRQ2CNMYyh3IkslAsd6U9S00E65sq/CktmaSmgmUF8XlOzx812kvszGTh38CwaQ5sJti82C1N5zLtNtUJGUIFQS8NLEuc5nJX2m5SjXjJCuzDJs4malHksCjgwi7R7sdR8sSiw4VkjFqXpFFnU+PCKC8PmwIuRnbaikt949vJagMbHkKvxBm9/yaj7k78iI7J0ngk7jx7ViBa2xS0tkX0OC9o6S+cB08vn8giycbCcqNhdaD3dUYXz1rqGAWLq4Ju/cKVMiHI5NLxCd2DuhU4dpRReji64H5AkesLPNgjnI3oPFGXAudPW8rqbojUi2c7RDeecOURHSRD9foZyjpozqIBgo++1zjhgSMJotEhiz47q+cWyVC3/exkqa4yIiB80CSNQMj7k9vx3XHvjRbG2KYQ5kSEsAkS/j9JaPd/F7QoGSa/LhTrAN1djE50OoIhZ0yVQEj5w4kJMdZ3dfuO2+W2cMFt2QIbvRSTXwwQ/lfJIpN3S/TPVuUzKJNfJ7q/UoqUNxgHuq1IbCsGL2TVKSOxRYb4ckg/8a2nnL74US+8buzncqzrnTAgJ74Z1hlMpKQXUjizLIoZ9R2gyYHuSk8t5jlNL5S7WRWzk0yFGizup1h45OufSmSCU/K/OopmLPYhji1txVZblu2qL7pwWh860w/KhQ8KET/Po3Ahvs+/U50MYAh42AvOxIg8fGVlM2xzf70bAMT+OY31763wsrCB8EHUOtDD6IdPYmXPwPkmgBf878QiDGGk1GeCQsMoqMreWzlILih5oYo1Xz3qKOkCLFOlhdjHBycr3y0s9pa6Kxfh2bA/w3o6IJZdnOhyBKwuSPm71gwpBFSswZ4H5O5B2J+DBPMyCbpPE/jrQFg36gXqiB+S/t9WCiSeJ5ajTKqDCS2qcTtUE17TyCBV71AKqETGAjsAQUXHq5g3nMKwulE+rqfLzHOoCX4wVwEFEZ4HOniZCclokpDXfbRbbxvuUYA/ChoUFB7nfMn9rWwlwmIatJn3eADMYtrNBoXevgJojrCE0w0KEgr87C1EqAkjsyWa8QiKBg99EtqHGR/v+xkpDH/rZbBbvFeyHnwvA2vCPwqNWHcnaYGqi9BxBXYXJTeeUFXAYyhuJiSh7bOEsMurQ0AY5TeCwwLJBSFqiWUIBc+YUCl6Lj8YWctlCjg9diUboWUIg6tEejjYmmjwEPN+i5sqoSMIFOCK2VSbalkP/fejWBkx/8e6E/8QHIXw1BsH/YxOaIwJCic0gpd+1nSvRX5cK5FuoQ/hMUGjEEUJjKvwgKT93OXEoL77Ejzjv2XK86bQCQulJu+Whyusr51XWHM4aBXIpdvndLkA1jBtGUygU8IrLEJwekG78LHdPaLg/peXKrwAC5n28KbwKoF88a65Zx4LPX3KrXj3NDQr+6eK1+SOxZj/frO3VQAYakZvLFtuMx53L0KliBdaM7rVWsjLG4LQ9xf5oPcyVAFnuckHdS0GJsFivpE5oWL+QYjwgib839WMiL3/auEjYdFt3TPE8NhQTLtmjoKwfSUHbC6Xbvu04i4Zom9ye0Q6bDboOeoE1rsDERWB4LB4KEXvcb7uUaTZoIQg61rYZ1l4RO0h9WAb0bkGuwAIEVgYzeHqBlfbkNVDUG/5mhRQSnwnP/sI2Wo0/eM4OTF/OZ4JGxKZC3OX2u1Eoa0XlqHmwWbMSlUTHqgr85Q3SmxW7vOlqAFQ38TkmsREcBf1UccelCJc7hgzkaoptGSSCkbz7cX4TWeDwRwNUcCL/qnddwXnKSkQ9mySktGTvqS3sZLCYkRS83Ki0HonqtBe/A9PSeM+WQM+IQAAAABJRU5ErkJggg==),pointer!important}", ll = "vwp-content-zoom", E6 = "vwp-content-zoom-style", S6 = () => {
  const e = xe(null), { contentZoom: t } = S();
  return P(() => {
    t && qe(A6, E6);
  }, [t]), P(() => {
    const o = Array.from(
      document.querySelectorAll(
        `p, span, h1, h2, h3, h4, h5, h6, a, button, em, strong,
				i, li, b, code, mark, pre, address, blockquote, abbr, cite, q, time`
      )
    );
    if (!(t != null && t.isActive)) return document.documentElement.removeAttribute("data-vwp-content-zoom");
    document.documentElement.dataset.vwpContentZoom = "true";
    const n = (s) => {
      var d, p;
      const l = s.currentTarget, c = (d = l.textContent) == null ? void 0 : d.trim();
      t != null && t.isActive && (c && (l.classList.add(ll), e.current = l), S.setState({
        contentZoom: { isActive: !!(t != null && t.isActive), content: ((p = l.textContent) == null ? void 0 : p.trim()) || "" }
      }));
    }, a = () => {
      var s;
      (s = e.current) == null || s.classList.remove(ll), S.setState({ contentZoom: { isActive: !!(t != null && t.isActive), content: "" } });
    };
    return o.forEach((s) => {
      s.addEventListener("mouseover", n), s.addEventListener("mouseleave", a);
    }), () => {
      o.forEach((s) => {
        s.removeEventListener("mouseover", n), s.removeEventListener("mouseleave", a);
      });
    };
  }, [t]), { toggle: (o) => {
    const n = o !== void 0 ? o : !(t != null && t.isActive);
    S.setState({ contentZoom: { isActive: n, content: "" } });
  }, isActive: !!(t != null && t.isActive) };
}, L6 = () => {
  const { t: e } = B(), { toggle: t, isActive: r } = S6();
  return /* @__PURE__ */ i(se, { showActiveIndicator: !0, "aria-label": e("al.content_zoom"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(c8, { iconTitle: e("al.content_zoom") }) }),
    /* @__PURE__ */ i(le, { children: e("content_zoom") }),
    /* @__PURE__ */ i(ce, { children: e(r ? "actived" : "deactivated") })
  ] });
}, N6 = () => {
  const { disableAutoplay: e } = S();
  P(() => {
    S.getState().disableAutoplay && t(!0);
  }, []);
  const t = (r) => {
    const o = r !== void 0 ? r : !e;
    S.setState({ disableAutoplay: o }), st("audio, video").forEach((n) => {
      n.autoplay = !o;
    });
  };
  return { toggle: t, isActive: !!e };
}, T6 = () => {
  const { t: e } = B(), { isActive: t, toggle: r } = N6();
  return /* @__PURE__ */ i(
    se,
    {
      showActiveIndicator: !0,
      "aria-label": e("al.disable_autoplay"),
      isActive: t,
      onClick: () => r(),
      children: [
        /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(Up, { iconTitle: e("al.disable_autoplay") }) }),
        /* @__PURE__ */ i(le, { children: e("disable_autoplay") }),
        /* @__PURE__ */ i(ce, { children: e(t ? "actived" : "deactivated") })
      ]
    }
  );
}, cl = /* @__PURE__ */ new Map([
  ["low", "saturate(0.5)"],
  ["high", "saturate(2)"],
  ["grayscale", "grayscale(1)"]
]), R6 = () => {
  const { saturation: e } = S();
  if (e)
    return /* @__PURE__ */ i(
      "div",
      {
        style: {
          position: "fixed",
          inset: 0,
          zIndex: 2147483647,
          pointerEvents: "none",
          backgroundColor: "rgba(255,255,255,0.001)",
          backdropFilter: cl.get(e),
          WebkitBackdropFilter: cl.get(e)
        }
      }
    );
}, xn = ["low", "high", "grayscale"], M6 = "vwp-saturation-overlay", I6 = () => {
  const { saturation: e } = S(), [t, r] = U(-1), [o, n] = U();
  return P(() => {
    const s = po(M6);
    et(/* @__PURE__ */ i(R6, {}), s);
  }, []), P(() => {
    r(xn.findIndex((s) => s === e)), n(e);
  }, [e]), { toggle: () => {
    const s = t + 1 < xn.length ? t + 1 : -1, l = xn[s] || void 0;
    S.setState({ saturation: l });
  }, index: t, option: o };
}, O6 = () => {
  const { t: e } = B(), { toggle: t, option: r, index: o } = I6();
  return /* @__PURE__ */ i(
    se,
    {
      id: "vwp-sat",
      "aria-label": e("al.adjust_saturation"),
      isActive: !!r,
      onClick: () => t(),
      children: [
        /* @__PURE__ */ i(rt, { size: 3, actived: o }),
        /* @__PURE__ */ i(de, { children: [
          !r && /* @__PURE__ */ i(jp, { iconTitle: e("al.adjust_saturation") }),
          r === "low" && /* @__PURE__ */ i(qp, { iconTitle: e("al.adjust_saturation") }),
          r === "high" && /* @__PURE__ */ i(Zp, { iconTitle: e("al.adjust_saturation") }),
          r === "grayscale" && /* @__PURE__ */ i(Gp, { iconTitle: e("al.adjust_saturation") })
        ] }),
        /* @__PURE__ */ i(le, { children: e("saturation") }),
        /* @__PURE__ */ i(ce, { children: e(r ? `saturation.${r}` : "deactivated") })
      ]
    }
  );
}, dl = /* @__PURE__ */ new Map([
  ["low", "contrast(0.8)"],
  ["high", "contrast(1.2)"],
  ["invert", "invert(1)"]
]), P6 = () => {
  const { pageContrast: e } = S();
  return e ? /* @__PURE__ */ i(
    "div",
    {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 2147483647,
        pointerEvents: "none",
        backgroundColor: "rgba(255,255,255,0.001)",
        backdropFilter: dl.get(e),
        WebkitBackdropFilter: dl.get(e)
      }
    }
  ) : null;
}, Oo = ["low", "high", "invert"], D6 = "vwp-contrast-overlay", H6 = () => {
  const { pageContrast: e } = S(), [t, r] = U(-1), [o, n] = U();
  return P(() => {
    const s = po(D6);
    et(/* @__PURE__ */ i(P6, {}), s);
  }, []), P(() => {
    r(Oo.findIndex((s) => s === e)), n(e);
  }, [e]), { toggle: () => {
    const s = t + 1 < Oo.length ? t + 1 : -1, l = Oo[s] || void 0;
    S.setState({ pageContrast: l });
  }, index: t, option: o };
}, z6 = () => {
  const { t: e } = B(), { toggle: t, option: r, index: o } = H6();
  return /* @__PURE__ */ i(se, { "aria-label": e("al.contrast"), isActive: !!r, onClick: () => t(), children: [
    /* @__PURE__ */ i(rt, { size: Oo.length, actived: o }),
    /* @__PURE__ */ i(de, { children: [
      !r && /* @__PURE__ */ i(i8, { iconTitle: e("al.contrast") }),
      r === "low" && /* @__PURE__ */ i(a8, { iconTitle: e("al.contrast") }),
      r === "high" && /* @__PURE__ */ i(n8, { iconTitle: e("al.contrast") }),
      r === "invert" && /* @__PURE__ */ i(s8, { iconTitle: e("al.contrast") })
    ] }),
    /* @__PURE__ */ i(le, { children: e("contrast") }),
    /* @__PURE__ */ i(ce, { children: e(r ? `contrast.${r}` : "deactivated") })
  ] });
}, B6 = () => {
  const { colorBlindFilter: e } = S();
  if (e)
    return /* @__PURE__ */ i(
      "div",
      {
        style: {
          position: "fixed",
          inset: 0,
          zIndex: 2147483647,
          pointerEvents: "none",
          backdropFilter: `url(#vwp-${e})`,
          WebkitBackdropFilter: `url(#vwp-${e})`
        },
        children: /* @__PURE__ */ i("svg", { "data-vwp-color-blind": e, "aria-hidden": "true", children: [
          /* @__PURE__ */ i("filter", { id: "vwp-protanopia", colorInterpolationFilters: "linearRGB", children: /* @__PURE__ */ i(
            "feColorMatrix",
            {
              type: "matrix",
              in: "SourceGraphic",
              values: `\r
                0.10889,0.89111,-0.00000,0,0\r
                0.10889,0.89111,0.00000,0,0\r
                0.00447,-0.00447,1.00000,0,0\r
                0,0,0,1,0`
            }
          ) }),
          /* @__PURE__ */ i("filter", { id: "vwp-deuteranopia", colorInterpolationFilters: "linearRGB", children: /* @__PURE__ */ i(
            "feColorMatrix",
            {
              type: "matrix",
              in: "SourceGraphic",
              values: `\r
                0.29031,0.70969,-0.00000,0,0\r
                0.29031,0.70969,-0.00000,0,0\r
                -0.02197,0.02197,1.00000,0,0\r
                0,0,0,1,0`
            }
          ) }),
          /* @__PURE__ */ i("filter", { id: "vwp-tritanopia", colorInterpolationFilters: "linearRGB", children: [
            /* @__PURE__ */ i(
              "feColorMatrix",
              {
                type: "matrix",
                in: "SourceGraphic",
                result: "ProjectionOnPlane1",
                values: `\r
                1.01354, 0.14268, -0.15622, 0, 0\r
                -0.01181, 0.87561, 0.13619, 0, 0\r
                0.07707, 0.81208, 0.11085, 0, 0\r
                7.92482, -5.66475, -2.26007, 1, -0.2`
              }
            ),
            /* @__PURE__ */ i("feComponentTransfer", { in: "ProjectionOnPlane1", result: "ProjectionOnPlane1", children: /* @__PURE__ */ i("feFuncA", { type: "discrete", tableValues: "0 0 0 0 1" }) }),
            /* @__PURE__ */ i(
              "feColorMatrix",
              {
                type: "matrix",
                in: "SourceGraphic",
                result: "ProjectionOnPlane2",
                values: `\r
                0.93337, 0.19999, -0.13336, 0, 0\r
                0.05809, 0.82565, 0.11626, 0, 0\r
                -0.37923, 1.13825, 0.24098, 0, 0\r
                0,0,0,1,0`
              }
            ),
            /* @__PURE__ */ i("feBlend", { in: "ProjectionOnPlane1", in2: "ProjectionOnPlane2", mode: "normal" })
          ] })
        ] })
      }
    );
}, kn = ["deuteranopia", "protanopia", "tritanopia"], F6 = "vwp-color-blind-overlay", V6 = () => {
  const { colorBlindFilter: e } = S(), [t, r] = U(-1), [o, n] = U();
  return P(() => {
    const s = po(F6);
    et(/* @__PURE__ */ i(B6, {}), s);
  }, []), P(() => {
    r(kn.findIndex((s) => s === e)), n(e);
  }, [e]), { toggleFilter: () => {
    const s = t + 1 < kn.length ? t + 1 : -1, l = kn[s] || void 0;
    S.setState({ colorBlindFilter: l, pageColor: void 0 });
  }, index: t, option: o };
}, $6 = () => {
  const { t: e } = B(), { toggleFilter: t, option: r, index: o } = V6(), n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  return /* @__PURE__ */ i(
    se,
    {
      isBeta: !0,
      disabled: n,
      "aria-label": e("al.color_blind_filter"),
      isActive: !!r,
      onClick: t,
      children: [
        /* @__PURE__ */ i(rt, { size: 3, actived: o }),
        /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(Jc, { iconTitle: e("al.color_blind_filter") }) }),
        /* @__PURE__ */ i(le, { children: e("color_blind_filter") }),
        /* @__PURE__ */ i(ce, { children: n ? e("no_support") : r ? nc(r) : e("deactivated") })
      ]
    }
  );
}, U6 = () => {
  const { pageColor: e } = S();
  if (!(!e || !Jr.includes(e)))
    return /* @__PURE__ */ i(
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
}, Jr = ["red", "green", "darkblue", "orange", "aliceblue", "blueviolet"], j6 = "vwp-page-colors-overlay", G6 = () => {
  const { pageColor: e } = S(), [t, r] = U(-1), [o, n] = U();
  return P(() => {
    const s = po(j6);
    et(/* @__PURE__ */ i(U6, {}), s);
  }, []), P(() => {
    r(Jr.findIndex((s) => s === e)), n(e);
  }, [e]), { toggle: () => {
    const s = t + 1 < Jr.length ? t + 1 : -1, l = Jr[s] || void 0;
    S.setState({ pageColor: l, colorBlindFilter: void 0 });
  }, index: t, option: o };
}, Z6 = () => {
  const { t: e } = B(), { toggle: t, option: r, index: o } = G6();
  return /* @__PURE__ */ i(
    se,
    {
      className: "col-span-full sm:col-span-2",
      "aria-label": e("al.page_colors"),
      isActive: !!r,
      onClick: () => t(),
      children: [
        /* @__PURE__ */ i(rt, { size: Jr.length, actived: o }),
        /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(Ip, { iconTitle: e("al.page_colors") }) }),
        /* @__PURE__ */ i(le, { children: e("page_colors") }),
        /* @__PURE__ */ i(ce, { children: e(r ? "actived" : "deactivated") })
      ]
    }
  );
}, q6 = "body.vwp-keyboard-navigation *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-wrapper,#vwp-app-wrapper *,#vwp-app-root,#vwp-app-root *):focus{outline:2px solid transparent;animation:pulse 1s linear infinite alternate;background-color:#000!important;color:#fff!important;fill:#fff!important}@keyframes pulse{0%{transform:scale(1);box-shadow:0 0 #ff0}50%{transform:scale(1.03);outline-color:#ff0;box-shadow:0 0 20px 5px #ff0}}", An = ["no-speech", "speech"], W6 = "vwp-keyboard-navigation", X6 = "vwp-keyboard-navigation-style", ul = `
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
`, { shadowRoot: pl } = Sa(), Y6 = () => {
  const { keyboardNavigation: e, pageStructure: t, dictionary: r } = S(), [o, n] = U(-1), [a, s] = U();
  return P(() => {
    e && qe(q6, X6);
  }, [e]), P(() => {
    n(An.findIndex((c) => c === e)), s(e), document.body.classList.toggle(W6, !!e);
  }, [e]), P(() => {
    var h;
    if (!e) return;
    const c = Array.from(st(ul)).filter((f) => f.offsetParent !== null), d = Array.from(
      st(ul, pl).filter((f) => f.offsetParent !== null)
    ), p = [...c, ...d];
    (h = p[0]) == null || h.focus();
    const u = (f) => {
      if (p.length === 0) return;
      const C = p.findIndex(
        (L) => L === document.activeElement || L === pl.activeElement
      );
      let b = C;
      switch (f.key) {
        case "ArrowDown":
        case "ArrowRight":
          b = (C + 1) % p.length;
          break;
        case "ArrowUp":
        case "ArrowLeft":
          b = (C - 1 + p.length) % p.length;
          break;
        default:
          return;
      }
      f.preventDefault();
      const A = p[b];
      a === "speech" && br(A.getAttribute("aria-label") || A.title || A.textContent || ""), A.focus();
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [e, t, r, a]), { toggle: () => {
    const c = o + 1 < An.length ? o + 1 : -1, d = An[c] || void 0;
    S.setState({ keyboardNavigation: d });
  }, index: o, option: a };
}, K6 = () => {
  const { t: e } = B(), { toggle: t, option: r, index: o } = Y6(), n = Uo();
  return P(() => {
    r === "speech" && br(e("keyboard_navigation_active"));
  }, [r, e]), n ? null : /* @__PURE__ */ i(se, { "aria-label": e("al.keyboard_navigation"), isActive: !!r, onClick: () => t(), children: [
    r === "speech" && /* @__PURE__ */ i(Zo, { className: "absolute top-2 left-2 size-4 group-data-[actived=true]:text-primary" }),
    /* @__PURE__ */ i(rt, { size: 2, actived: o }),
    /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(Xp, { iconTitle: e("al.keyboard_navigation") }) }),
    /* @__PURE__ */ i(le, { children: e("keyboard_navigation") }),
    /* @__PURE__ */ i(ce, { children: e(r ? "actived" : "deactivated") })
  ] });
}, k2 = () => {
  const { pageStructure: e } = S(), t = jo("(max-width: 980px)");
  P(() => {
    S.getState().pageStructure && r(!0);
  }, []);
  const r = (o) => {
    const n = o !== void 0 ? o : !e;
    S.setState({
      pageStructure: n,
      dictionary: void 0,
      textReader: void 0,
      largeCursor: void 0
    }), t && S.setState({ isOpenWidget: !n });
  };
  return { toggle: r, isActive: !!e };
}, J6 = () => {
  const { t: e } = B(), { isActive: t, toggle: r } = k2();
  return /* @__PURE__ */ i(
    se,
    {
      id: "vwp-ps",
      showActiveIndicator: !0,
      "aria-label": e("al.page_structure"),
      isActive: t,
      onClick: () => r(),
      children: [
        /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(Wp, { iconTitle: e("al.page_structure") }) }),
        /* @__PURE__ */ i(le, { children: e("page_structure") }),
        /* @__PURE__ */ i(ce, { children: e(t ? "actived" : "deactivated") })
      ]
    }
  );
}, Q6 = "[data-vwp-theme=light] *:not(.vwp-ignore,a,button,img,script,video,iframe,.vwp-ignore--text-color,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *){color:#000!important;background-color:#fff!important}[data-vwp-theme=dark] *:not(.vwp-ignore,a,button,img,script,video,iframe,.vwp-ignore--text-color,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-root *){color:#fff!important;background-color:#000!important}", En = ["dark", "light"], e4 = "vwp-page-theme-style", t4 = () => {
  const { pageTheme: e } = S(), [t, r] = U(-1), [o, n] = U();
  P(() => {
    e && qe(Q6, e4);
  }, [e]), P(() => {
    r(En.findIndex((l) => l === e)), n(e), s(e);
  }, [e]);
  const a = () => {
    const l = t + 1 < En.length ? t + 1 : -1, c = En[l] || void 0;
    S.setState({ pageTheme: c });
  }, s = async (l) => {
    if (!l) return document.documentElement.removeAttribute("data-vwp-theme");
    document.documentElement.dataset.vwpTheme = l;
  };
  return { toggle: a, index: t, option: o };
}, r4 = () => {
  const { t: e } = B(), { toggle: t, option: r, index: o } = t4();
  return /* @__PURE__ */ i(se, { "aria-label": e("al.page_theme"), isActive: !!r, onClick: () => t(), children: [
    /* @__PURE__ */ i(rt, { size: 2, actived: o }),
    /* @__PURE__ */ i(de, { children: [
      !r && /* @__PURE__ */ i(Kp, { iconTitle: e("al.page_theme") }),
      r === "light" && /* @__PURE__ */ i(Jp, { iconTitle: e("al.page_theme") }),
      r === "dark" && /* @__PURE__ */ i(Qc, { iconTitle: e("al.page_theme") })
    ] }),
    /* @__PURE__ */ i(le, { children: e("page_theme") }),
    /* @__PURE__ */ i(ce, { children: e(r || "deactivated") })
  ] });
}, o4 = '.vwp-easy-click{position:relative;display:inline-block;z-index:0}.vwp-easy-click:after{content:"";position:absolute;top:-12px;bottom:-12px;left:-12px;right:-12px;z-index:1;background:transparent;pointer-events:auto;cursor:pointer}', i4 = "vwp-easy-click-style", Sn = "vwp-easy-click", n4 = () => {
  const { easyClick: e } = S();
  return P(() => {
    e ? (qe(o4, i4), st("button, a").filter((o) => !(o.classList.contains("vwp-ignore") || o.classList.contains("sr-only") || o.hasAttribute("vw") || o.closest("#\\31 1y-accessibility") !== null || o.closest("#vwp-app-root *") !== null || o.querySelector("img, figure, picture") !== null)).forEach((o) => {
      o.classList.add(Sn);
    })) : st(`.${Sn}`).forEach((o) => {
      o.classList.remove(Sn);
    });
  }, [e]), { toggle: (r) => {
    const o = r !== void 0 ? r : !e;
    S.setState({ easyClick: o });
  }, isActive: !!e };
}, a4 = () => {
  const { t: e } = B(), { toggle: t, isActive: r } = n4();
  return /* @__PURE__ */ i(se, { showActiveIndicator: !0, "aria-label": e("al.easy_click"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ i(de, { children: /* @__PURE__ */ i(Bp, { iconTitle: e("al.easy_click") }) }),
    /* @__PURE__ */ i(le, { children: e("easy_click") }),
    /* @__PURE__ */ i(ce, { children: e(r ? "actived" : "deactivated") })
  ] });
}, s4 = () => {
  const { t: e } = B(), { isExpanded: t } = S(), r = jo("(min-width: 768px)");
  return /* @__PURE__ */ i("div", { id: "vwp-content", className: H("space-y-4 overflow-y-auto rounded-sm bg-background p-4"), children: [
    /* @__PURE__ */ i(k8, {}),
    /* @__PURE__ */ i(ir, { children: [
      /* @__PURE__ */ i(jt, { children: e("sections.text_and_typography") }),
      /* @__PURE__ */ i(S8, {}),
      /* @__PURE__ */ i(M8, {}),
      /* @__PURE__ */ i(X8, {}),
      /* @__PURE__ */ i(m6, {}),
      /* @__PURE__ */ i(j8, {})
    ] }),
    /* @__PURE__ */ i(ir, { children: [
      /* @__PURE__ */ i(jt, { children: e("sections.focus_and_visibility") }),
      /* @__PURE__ */ i(z8, {}),
      /* @__PURE__ */ i(R8, {}),
      /* @__PURE__ */ i(L6, {}),
      /* @__PURE__ */ i(k6, {}),
      /* @__PURE__ */ i(W8, {})
    ] }),
    /* @__PURE__ */ i(ir, { children: [
      /* @__PURE__ */ i(jt, { children: e("sections.reading_and_comprehension") }),
      /* @__PURE__ */ i(p6, {}),
      /* @__PURE__ */ i(O8, {}),
      t && r ? /* @__PURE__ */ i(Ce, { children: [
        /* @__PURE__ */ i(Ns, {}),
        /* @__PURE__ */ i(sl, {})
      ] }) : /* @__PURE__ */ i("div", { className: "grid grid-cols-1 gap-y-2", children: [
        /* @__PURE__ */ i(Ns, {}),
        /* @__PURE__ */ i(sl, {})
      ] }),
      /* @__PURE__ */ i(f6, {})
    ] }),
    /* @__PURE__ */ i(ir, { children: [
      /* @__PURE__ */ i(jt, { children: e("sections.colors_filters_and_contrast") }),
      /* @__PURE__ */ i($6, {}),
      /* @__PURE__ */ i(O6, {}),
      /* @__PURE__ */ i(z6, {}),
      /* @__PURE__ */ i(r4, {}),
      /* @__PURE__ */ i(_6, {}),
      /* @__PURE__ */ i(w6, {}),
      /* @__PURE__ */ i(Z6, {})
    ] }),
    /* @__PURE__ */ i(ir, { children: [
      /* @__PURE__ */ i(jt, { children: e("sections.navigation_and_motor_accessibility") }),
      /* @__PURE__ */ i(J6, {}),
      /* @__PURE__ */ i(K6, {}),
      /* @__PURE__ */ i(a4, {})
    ] }),
    /* @__PURE__ */ i(ir, { children: [
      /* @__PURE__ */ i(jt, { children: e("sections.distraction_reduction") }),
      /* @__PURE__ */ i(Q8, {}),
      /* @__PURE__ */ i(o9, {}),
      /* @__PURE__ */ i(b6, {}),
      /* @__PURE__ */ i(T6, {})
    ] }),
    /* @__PURE__ */ i(y8, { className: "h-14" })
  ] });
}, l4 = ({ className: e } = {}) => {
  const { t } = B(), { inPage: r } = sc(), o = () => {
    r ? va() : window.open("https://www.vlibras.gov.br", "_blank");
  };
  return /* @__PURE__ */ i(
    Wt,
    {
      placement: "top",
      offset: 4,
      arrow: { position: "bottom", className: "bg-primary border-none" },
      className: "whitespace-nowrap border-none bg-primary",
      content: /* @__PURE__ */ i("div", { className: "flex items-center gap-1 text-primary-foreground", children: [
        /* @__PURE__ */ i("span", { className: "-top-px relative", children: [
          r && t("libras_accessibility"),
          !r && "www.vlibras.gov.br"
        ] }),
        !r && /* @__PURE__ */ i(t2, { className: "size-4" })
      ] }),
      children: /* @__PURE__ */ i(
        fe,
        {
          "aria-label": t("libras_accessibility"),
          onClick: o,
          variant: "primary",
          className: H("size-10 rounded-full bg-primary p-0", e),
          children: /* @__PURE__ */ i(Ra, { className: "fill-primary-foreground", size: 24 })
        }
      )
    }
  );
}, A2 = ({ children: e }) => (P(() => {
  const t = (r) => {
    r.key === "Escape" && Er.getState().setDialog(void 0);
  };
  return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
}, []), /* @__PURE__ */ i(Ce, { children: e })), E2 = me(({ children: e, className: t, showOverlay: r = !0, ...o }, n) => {
  const { isExpanded: a } = S(), s = xe(null), l = o;
  return ao(n, () => s.current, []), P(() => {
    requestAnimationFrame(() => {
      if (!s.current) return;
      const c = s.current.children[0];
      c.tabIndex = 0, c.focus({ preventScroll: !0 }), c.removeAttribute("tabindex");
    });
  }, []), /* @__PURE__ */ i(
    "dialog",
    {
      className: H(
        "modal modal-open !bg-transparent !inset-0 !p-0 !outline-none absolute",
        !r && "!pointer-events-none"
      ),
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            ...l,
            ref: s,
            className: H("absolute inset-0 top-auto", "xs:!w-md ", a && "md:!w-2xl"),
            children: /* @__PURE__ */ i("div", { className: H("!top-auto absolute inset-2 animate-move-up rounded-lg border-1 bg-popover", t), children: e })
          }
        ),
        /* @__PURE__ */ i(c4, {})
      ]
    }
  );
}), S2 = me(
  ({ children: e, className: t, ...r }, o) => /* @__PURE__ */ i("div", { ref: o, className: H("relative flex flex-col border-b-1 p-4 leading-snug", t), ...r, children: e })
), L2 = me(
  ({ children: e, className: t, ...r }, o) => /* @__PURE__ */ i("p", { ref: o, className: H("font-semibold text-base text-foreground", t), ...r, children: e })
);
me(
  ({ children: e, className: t, ...r }, o) => /* @__PURE__ */ i("span", { ref: o, className: H("font-normal text-muted-foreground text-sm sm:text-base", t), ...r, children: e })
);
const N2 = me(
  ({ children: e, className: t, ...r }, o) => /* @__PURE__ */ i(
    "div",
    {
      ref: o,
      className: H(
        "max-h-[calc(75dvh-94px)] xs:max-h-[calc(90dvh-94px)] w-full overflow-y-auto p-4 font-normal text-foreground leading-relaxed",
        t
      ),
      ...r,
      children: e
    }
  )
), c4 = () => /* @__PURE__ */ i(
  "div",
  {
    onKeyDown: void 0,
    onClick: () => Er.getState().setDialog(void 0),
    className: "modal-backdrop !bg-black/15 dark:!bg-black/50 absolute inset-0"
  }
), d4 = "https://docs.google.com/forms/d/e/1FAIpQLSfoTlbogeFYBkSjaRy-GWifx2oHWlaKw0TC1kwR9OzEL_VJRQ/formResponse", u4 = async ({
  title: e,
  message: t
}) => {
  const r = new URLSearchParams();
  r.append("entry.391810259", e || ""), r.append("entry.73769851", t);
  try {
    await fetch(d4, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: r.toString()
    });
  } catch {
  }
  return !0;
}, Ln = { min: 5, max: 50 }, Nn = { min: 10, max: 255 }, p4 = () => {
  var f, C;
  const { path: e } = zt(), { t } = B(), { isExpanded: r } = S(), [o, n] = U({ message: "" }), [a, s] = U(), [l, c] = U(), d = async (b) => {
    b.preventDefault(), b.stopPropagation(), !(l != null && l.isSubmitting) && (c({ isSubmitting: !0 }), await u4(o), c({ isSubmitting: !1, isSubmitted: !0 }));
  }, p = (b, A) => {
    n({ ...o, [A]: b }), a != null && a[A] || s({ ...a, [A]: !0 });
  }, u = Nt(() => {
    var b;
    return {
      title: !!(a != null && a.title) && !!((b = o.title) != null && b.trim().length && o.title && o.title.trim().length < 5),
      message: !!(a != null && a.message) && o.message.trim().length < 10
    };
  }, [o, a]), h = Nt(() => a ? !u.title && !u.message : !1, [u, a]);
  return l != null && l.isSubmitted ? /* @__PURE__ */ i("div", { className: "flex w-full flex-col items-center justify-center gap-4 py-8", children: [
    /* @__PURE__ */ i(
      "img",
      {
        className: "w-32 sm:w-40",
        alt: t("support_dialog.contact_form_success"),
        src: `${e}/assets/images/send_message_success.png`
      }
    ),
    /* @__PURE__ */ i("p", { className: "max-w-52 text-center font-medium text-sm sm:text-base", children: t("support_dialog.contact_form_success") })
  ] }) : /* @__PURE__ */ i("form", { onSubmit: d, className: "space-y-4", children: [
    /* @__PURE__ */ i("fieldset", { className: "fieldset", children: [
      /* @__PURE__ */ i("legend", { className: "fieldset-legend w-full gap-1 font-semibold text-sm", children: [
        t("support_dialog.contact_form_fields.title"),
        " ",
        /* @__PURE__ */ i("span", { className: "font-normal text-muted-foreground", children: "(opcional)" }),
        /* @__PURE__ */ i("span", { className: "ml-auto font-normal text-muted-foreground text-xs", children: [
          ((f = o == null ? void 0 : o.title) == null ? void 0 : f.length) || 0,
          "/",
          Ln.max
        ] })
      ] }),
      /* @__PURE__ */ i(
        "input",
        {
          autoComplete: "off",
          value: o.title,
          onInput: (b) => p(b.currentTarget.value, "title"),
          name: "title",
          maxLength: Ln.max,
          minLength: Ln.min,
          type: "text",
          className: H(
            "input w-full rounded-md border-1 border-border focus:border-primary",
            u.title && "!border-destructive !bg-destructive/5"
          ),
          placeholder: t("support_dialog.contact_form_fields.title")
        }
      ),
      u.title && /* @__PURE__ */ i("p", { className: "text-destructive text-xs", children: t("support_dialog.contact_form_errors.title") })
    ] }),
    /* @__PURE__ */ i("fieldset", { className: "fieldset", children: [
      /* @__PURE__ */ i("legend", { className: "fieldset-legend w-full gap-0 font-semibold text-sm", children: [
        t("support_dialog.contact_form_fields.message"),
        /* @__PURE__ */ i("span", { className: "text-destructive text-sm", children: "*" }),
        /* @__PURE__ */ i("span", { className: "ml-auto font-normal text-muted-foreground text-xs", children: [
          ((C = o == null ? void 0 : o.message) == null ? void 0 : C.length) || 0,
          "/",
          Nn.max
        ] })
      ] }),
      /* @__PURE__ */ i(
        "textarea",
        {
          autoComplete: "off",
          value: o.message,
          onInput: (b) => p(b.currentTarget.value, "message"),
          name: "message",
          maxLength: Nn.max,
          minLength: Nn.min,
          className: H(
            "textarea h-28 w-full resize-none rounded-md border-1 border-border focus:border-primary",
            u.message && "!border-destructive !bg-destructive/5"
          ),
          placeholder: t("support_dialog.contact_form_fields.message")
        }
      ),
      u.message && /* @__PURE__ */ i("p", { className: "text-destructive text-xs", children: t("support_dialog.contact_form_errors.message") })
    ] }),
    /* @__PURE__ */ i("div", { className: "flex w-full items-center gap-2", children: /* @__PURE__ */ i(
      fe,
      {
        className: H("ml-auto h-10 w-full rounded-full font-normal text-sm", r && "w-64"),
        disabled: !h || (l == null ? void 0 : l.isSubmitting),
        variant: "primary",
        type: "submit",
        children: [
          (l == null ? void 0 : l.isSubmitting) && /* @__PURE__ */ i("span", { className: "loading loading-spinner loading-xs" }),
          t(
            l != null && l.isSubmitting ? "support_dialog.contact_form_submiting" : "support_dialog.contact_form_submit"
          )
        ]
      }
    ) })
  ] });
};
var h4 = "2.0.3", ra = 500, hl = "user-agent", wr = "", gl = "?", Ho = "function", Pt = "undefined", yr = "object", oa = "string", Ue = "browser", _t = "cpu", gt = "device", nt = "engine", Je = "os", gr = "result", R = "name", E = "type", T = "vendor", M = "version", je = "architecture", to = "major", N = "model", Wr = "console", Y = "mobile", pe = "tablet", Ne = "smarttv", ht = "wearable", Tn = "xr", Xr = "embedded", Vr = "inapp", Ia = "brands", Zt = "formFactors", Oa = "fullVersionList", fr = "platform", Pa = "platformVersion", qo = "bitness", Bt = "sec-ch-ua", g4 = Bt + "-full-version-list", f4 = Bt + "-arch", m4 = Bt + "-" + qo, v4 = Bt + "-form-factors", b4 = Bt + "-" + Y, C4 = Bt + "-" + N, T2 = Bt + "-" + fr, w4 = T2 + "-version", R2 = [Ia, Oa, Y, N, fr, Pa, je, Zt, qo], No = "Amazon", lr = "Apple", fl = "ASUS", ml = "BlackBerry", Ut = "Google", vl = "Huawei", bl = "Lenovo", Cl = "Honor", To = "LG", Rn = "Microsoft", Mn = "Motorola", In = "Nvidia", wl = "OnePlus", On = "OPPO", $r = "Samsung", yl = "Sharp", Ur = "Sony", Pn = "Xiaomi", Dn = "Zebra", _l = "Chrome", xl = "Chromium", Mt = "Chromecast", y4 = "Edge", jr = "Firefox", Gr = "Opera", Hn = "Facebook", kl = "Sogou", cr = "Mobile ", Zr = " Browser", ia = "Windows", _4 = typeof window !== Pt, Ge = _4 && window.navigator ? window.navigator : void 0, It = Ge && Ge.userAgentData ? Ge.userAgentData : void 0, x4 = function(e, t) {
  var r = {}, o = t;
  if (!zo(t)) {
    o = {};
    for (var n in t)
      for (var a in t[n])
        o[a] = t[n][a].concat(o[a] ? o[a] : []);
  }
  for (var s in e)
    r[s] = o[s] && o[s].length % 2 === 0 ? o[s].concat(e[s]) : e[s];
  return r;
}, Wo = function(e) {
  for (var t = {}, r = 0; r < e.length; r++)
    t[e[r].toUpperCase()] = e[r];
  return t;
}, na = function(e, t) {
  if (typeof e === yr && e.length > 0) {
    for (var r in e)
      if (xt(e[r]) == xt(t)) return !0;
    return !1;
  }
  return Sr(e) ? xt(t).indexOf(xt(e)) !== -1 : !1;
}, zo = function(e, t) {
  for (var r in e)
    return /^(browser|cpu|device|engine|os)$/.test(r) || (t ? zo(e[r]) : !1);
}, Sr = function(e) {
  return typeof e === oa;
}, zn = function(e) {
  if (e) {
    for (var t = [], r = _r(/\\?\"/g, e).split(","), o = 0; o < r.length; o++)
      if (r[o].indexOf(";") > -1) {
        var n = ro(r[o]).split(";v=");
        t[o] = { brand: n[0], version: n[1] };
      } else
        t[o] = ro(r[o]);
    return t;
  }
}, xt = function(e) {
  return Sr(e) ? e.toLowerCase() : e;
}, Bn = function(e) {
  return Sr(e) ? _r(/[^\d\.]/g, e).split(".")[0] : void 0;
}, kt = function(e) {
  for (var t in e) {
    var r = e[t];
    typeof r == yr && r.length == 2 ? this[r[0]] = r[1] : this[r] = void 0;
  }
  return this;
}, _r = function(e, t) {
  return Sr(t) ? t.replace(e, wr) : t;
}, qr = function(e) {
  return _r(/\\?\"/g, e);
}, ro = function(e, t) {
  if (Sr(e))
    return e = _r(/^\s\s*/, e), typeof t === Pt ? e : e.substring(0, ra);
}, Fn = function(e, t) {
  if (!(!e || !t))
    for (var r = 0, o, n, a, s, l, c; r < t.length && !l; ) {
      var d = t[r], p = t[r + 1];
      for (o = n = 0; o < d.length && !l && d[o]; )
        if (l = d[o++].exec(e), l)
          for (a = 0; a < p.length; a++)
            c = l[++n], s = p[a], typeof s === yr && s.length > 0 ? s.length === 2 ? typeof s[1] == Ho ? this[s[0]] = s[1].call(this, c) : this[s[0]] = s[1] : s.length === 3 ? typeof s[1] === Ho && !(s[1].exec && s[1].test) ? this[s[0]] = c ? s[1].call(this, c, s[2]) : void 0 : this[s[0]] = c ? c.replace(s[1], s[2]) : void 0 : s.length === 4 && (this[s[0]] = c ? s[3].call(this, c.replace(s[1], s[2])) : void 0) : this[s] = c || void 0;
      r += 2;
    }
}, Ot = function(e, t) {
  for (var r in t)
    if (typeof t[r] === yr && t[r].length > 0) {
      for (var o = 0; o < t[r].length; o++)
        if (na(t[r][o], e))
          return r === gl ? void 0 : r;
    } else if (na(t[r], e))
      return r === gl ? void 0 : r;
  return t.hasOwnProperty("*") ? t["*"] : e;
}, Al = {
  ME: "4.90",
  "NT 3.11": "NT3.51",
  "NT 4.0": "NT4.0",
  2e3: "NT 5.0",
  XP: ["NT 5.1", "NT 5.2"],
  Vista: "NT 6.0",
  7: "NT 6.1",
  8: "NT 6.2",
  "8.1": "NT 6.3",
  10: ["NT 6.4", "NT 10.0"],
  RT: "ARM"
}, El = {
  embedded: "Automotive",
  mobile: "Mobile",
  tablet: ["Tablet", "EInk"],
  smarttv: "TV",
  wearable: "Watch",
  xr: ["VR", "XR"],
  "?": ["Desktop", "Unknown"],
  "*": void 0
}, Sl = {
  browser: [
    [
      // Most common regardless engine
      /\b(?:crmo|crios)\/([\w\.]+)/i
      // Chrome for Android/iOS
    ],
    [M, [R, cr + "Chrome"]],
    [
      /edg(?:e|ios|a)?\/([\w\.]+)/i
      // Microsoft Edge
    ],
    [M, [R, "Edge"]],
    [
      // Presto based
      /(opera mini)\/([-\w\.]+)/i,
      // Opera Mini
      /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
      // Opera Mobi/Tablet
      /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      // Opera
    ],
    [R, M],
    [
      /opios[\/ ]+([\w\.]+)/i
      // Opera mini on iphone >= 8.0
    ],
    [M, [R, Gr + " Mini"]],
    [
      /\bop(?:rg)?x\/([\w\.]+)/i
      // Opera GX
    ],
    [M, [R, Gr + " GX"]],
    [
      /\bopr\/([\w\.]+)/i
      // Opera Webkit
    ],
    [M, [R, Gr]],
    [
      // Mixed
      /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      // Baidu
    ],
    [M, [R, "Baidu"]],
    [
      /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      // Maxthon
    ],
    [M, [R, "Maxthon"]],
    [
      /(kindle)\/([\w\.]+)/i,
      // Kindle
      /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
      // Lunascape/Maxthon/Netfront/Jasmine/Blazer/Sleipnir
      // Trident based
      /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
      // Avant/IEMobile/SlimBrowser/SlimBoat/Slimjet
      /(?:ms|\()(ie) ([\w\.]+)/i,
      // Internet Explorer
      // Blink/Webkit/KHTML based                                         // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon/LG Browser/Otter/qutebrowser/Dooble
      /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser)\/([-\w\.]+)/i,
      // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ//Vivaldi/DuckDuckGo/Klar/Helio/Dragon
      /(heytap|ovi|115|surf)browser\/([\d\.]+)/i,
      // HeyTap/Ovi/115/Surf
      /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i
      // Ecosia/Weibo
    ],
    [R, M],
    [
      /quark(?:pc)?\/([-\w\.]+)/i
      // Quark
    ],
    [M, [R, "Quark"]],
    [
      /\bddg\/([\w\.]+)/i
      // DuckDuckGo
    ],
    [M, [R, "DuckDuckGo"]],
    [
      /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      // UCBrowser
    ],
    [M, [R, "UCBrowser"]],
    [
      /microm.+\bqbcore\/([\w\.]+)/i,
      // WeChat Desktop for Windows Built-in Browser
      /\bqbcore\/([\w\.]+).+microm/i,
      /micromessenger\/([\w\.]+)/i
      // WeChat
    ],
    [M, [R, "WeChat"]],
    [
      /konqueror\/([\w\.]+)/i
      // Konqueror
    ],
    [M, [R, "Konqueror"]],
    [
      /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      // IE11
    ],
    [M, [R, "IE"]],
    [
      /ya(?:search)?browser\/([\w\.]+)/i
      // Yandex
    ],
    [M, [R, "Yandex"]],
    [
      /slbrowser\/([\w\.]+)/i
      // Smart Lenovo Browser
    ],
    [M, [R, "Smart " + bl + Zr]],
    [
      /(avast|avg)\/([\w\.]+)/i
      // Avast/AVG Secure Browser
    ],
    [[R, /(.+)/, "$1 Secure" + Zr], M],
    [
      /\bfocus\/([\w\.]+)/i
      // Firefox Focus
    ],
    [M, [R, jr + " Focus"]],
    [
      /\bopt\/([\w\.]+)/i
      // Opera Touch
    ],
    [M, [R, Gr + " Touch"]],
    [
      /coc_coc\w+\/([\w\.]+)/i
      // Coc Coc Browser
    ],
    [M, [R, "Coc Coc"]],
    [
      /dolfin\/([\w\.]+)/i
      // Dolphin
    ],
    [M, [R, "Dolphin"]],
    [
      /coast\/([\w\.]+)/i
      // Opera Coast
    ],
    [M, [R, Gr + " Coast"]],
    [
      /miuibrowser\/([\w\.]+)/i
      // MIUI Browser
    ],
    [M, [R, "MIUI" + Zr]],
    [
      /fxios\/([\w\.-]+)/i
      // Firefox for iOS
    ],
    [M, [R, cr + jr]],
    [
      /\bqihoobrowser\/?([\w\.]*)/i
      // 360
    ],
    [M, [R, "360"]],
    [
      /\b(qq)\/([\w\.]+)/i
      // QQ
    ],
    [[R, /(.+)/, "$1Browser"], M],
    [
      /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
    ],
    [[R, /(.+)/, "$1" + Zr], M],
    [
      // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
      /samsungbrowser\/([\w\.]+)/i
      // Samsung Internet
    ],
    [M, [R, $r + " Internet"]],
    [
      /metasr[\/ ]?([\d\.]+)/i
      // Sogou Explorer
    ],
    [M, [R, kl + " Explorer"]],
    [
      /(sogou)mo\w+\/([\d\.]+)/i
      // Sogou Mobile
    ],
    [[R, kl + " Mobile"], M],
    [
      /(electron)\/([\w\.]+) safari/i,
      // Electron-based App
      /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
      // Tesla
      /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      // QQ/2345
    ],
    [R, M],
    [
      /(lbbrowser|rekonq)/i
      // LieBao Browser/Rekonq
    ],
    [R],
    [
      /ome\/([\w\.]+) \w* ?(iron) saf/i,
      // Iron
      /ome\/([\w\.]+).+qihu (360)[es]e/i
      // 360
    ],
    [M, R],
    [
      // WebView
      /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      // Facebook App for iOS & Android
    ],
    [[R, Hn], M, [E, Vr]],
    [
      /(Klarna)\/([\w\.]+)/i,
      // Klarna Shopping Browser for iOS & Android
      /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
      // Kakao App
      /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
      // Naver InApp
      /(daum)apps[\/ ]([\w\.]+)/i,
      // Daum App
      /safari (line)\/([\w\.]+)/i,
      // Line App for iOS
      /\b(line)\/([\w\.]+)\/iab/i,
      // Line App for Android
      /(alipay)client\/([\w\.]+)/i,
      // Alipay
      /(twitter)(?:and| f.+e\/([\w\.]+))/i,
      // Twitter
      /(instagram|snapchat)[\/ ]([-\w\.]+)/i
      // Instagram/Snapchat
    ],
    [R, M, [E, Vr]],
    [
      /\bgsa\/([\w\.]+) .*safari\//i
      // Google Search Appliance on iOS
    ],
    [M, [R, "GSA"], [E, Vr]],
    [
      /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
      // TikTok
    ],
    [M, [R, "TikTok"], [E, Vr]],
    [
      /\[(linkedin)app\]/i
      // LinkedIn App for iOS & Android
    ],
    [R, [E, Vr]],
    [
      /(chromium)[\/ ]([-\w\.]+)/i
      // Chromium
    ],
    [R, M],
    [
      /headlesschrome(?:\/([\w\.]+)| )/i
      // Chrome Headless
    ],
    [M, [R, _l + " Headless"]],
    [
      / wv\).+(chrome)\/([\w\.]+)/i
      // Chrome WebView
    ],
    [[R, _l + " WebView"], M],
    [
      /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      // Android Browser
    ],
    [M, [R, "Android" + Zr]],
    [
      /chrome\/([\w\.]+) mobile/i
      // Chrome Mobile
    ],
    [M, [R, cr + "Chrome"]],
    [
      /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      // Chrome/OmniWeb/Arora/Tizen/Nokia
    ],
    [R, M],
    [
      /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      // Safari Mobile
    ],
    [M, [R, cr + "Safari"]],
    [
      /iphone .*mobile(?:\/\w+ | ?)safari/i
    ],
    [[R, cr + "Safari"]],
    [
      /version\/([\w\.\,]+) .*(safari)/i
      // Safari
    ],
    [M, R],
    [
      /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      // Safari < 3.0
    ],
    [R, [M, "1"]],
    [
      /(webkit|khtml)\/([\w\.]+)/i
    ],
    [R, M],
    [
      // Gecko based
      /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      // Firefox Mobile
    ],
    [[R, cr + jr], M],
    [
      /(navigator|netscape\d?)\/([-\w\.]+)/i
      // Netscape
    ],
    [[R, "Netscape"], M],
    [
      /(wolvic|librewolf)\/([\w\.]+)/i
      // Wolvic/LibreWolf
    ],
    [R, M],
    [
      /mobile vr; rv:([\w\.]+)\).+firefox/i
      // Firefox Reality
    ],
    [M, [R, jr + " Reality"]],
    [
      /ekiohf.+(flow)\/([\w\.]+)/i,
      // Flow
      /(swiftfox)/i,
      // Swiftfox
      /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
      // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
      /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
      // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
      /(firefox)\/([\w\.]+)/i,
      // Other Firefox-based
      /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
      // Mozilla
      // Other
      /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
      // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Obigo/Mosaic/Go/ICE/UP.Browser/Ladybird
      /\b(links) \(([\w\.]+)/i
      // Links
    ],
    [R, [M, /_/g, "."]],
    [
      /(cobalt)\/([\w\.]+)/i
      // Cobalt
    ],
    [R, [M, /[^\d\.]+./, wr]]
  ],
  cpu: [
    [
      /\b((amd|x|x86[-_]?|wow|win)64)\b/i
      // AMD64 (x64)
    ],
    [[je, "amd64"]],
    [
      /(ia32(?=;))/i,
      // IA32 (quicktime)
      /\b((i[346]|x)86)(pc)?\b/i
      // IA32 (x86)
    ],
    [[je, "ia32"]],
    [
      /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      // ARM64
    ],
    [[je, "arm64"]],
    [
      /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      // ARMHF
    ],
    [[je, "armhf"]],
    [
      // PocketPC mistakenly identified as PowerPC
      /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
    ],
    [[je, "arm"]],
    [
      /((ppc|powerpc)(64)?)( mac|;|\))/i
      // PowerPC
    ],
    [[je, /ower/, wr, xt]],
    [
      / sun4\w[;\)]/i
      // SPARC
    ],
    [[je, "sparc"]],
    [
      /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i
      // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
    ],
    [[je, xt]]
  ],
  device: [
    [
      //////////////////////////
      // MOBILES & TABLETS
      /////////////////////////
      // Samsung
      /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
    ],
    [N, [T, $r], [E, pe]],
    [
      /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
      /samsung[- ]((?!sm-[lr])[-\w]+)/i,
      /sec-(sgh\w+)/i
    ],
    [N, [T, $r], [E, Y]],
    [
      // Apple
      /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
      // iPod/iPhone
    ],
    [N, [T, lr], [E, Y]],
    [
      /\((ipad);[-\w\),; ]+apple/i,
      // iPad
      /applecoremedia\/[\w\.]+ \((ipad)/i,
      /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
    ],
    [N, [T, lr], [E, pe]],
    [
      /(macintosh);/i
    ],
    [N, [T, lr]],
    [
      // Sharp
      /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
    ],
    [N, [T, yl], [E, Y]],
    [
      // Honor
      /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
    ],
    [N, [T, Cl], [E, pe]],
    [
      /honor([-\w ]+)[;\)]/i
    ],
    [N, [T, Cl], [E, Y]],
    [
      // Huawei
      /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
    ],
    [N, [T, vl], [E, pe]],
    [
      /(?:huawei)([-\w ]+)[;\)]/i,
      /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
    ],
    [N, [T, vl], [E, Y]],
    [
      // Xiaomi
      /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
      /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
      // Mi Pad tablets
    ],
    [[N, /_/g, " "], [T, Pn], [E, pe]],
    [
      /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
      // Xiaomi POCO
      /\b; (\w+) build\/hm\1/i,
      // Xiaomi Hongmi 'numeric' models
      /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
      // Xiaomi Hongmi
      /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
      // Xiaomi Redmi
      /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
      // Xiaomi Redmi 'numeric' models
      /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
      // Xiaomi Mi
      / ([\w ]+) miui\/v?\d/i
    ],
    [[N, /_/g, " "], [T, Pn], [E, Y]],
    [
      // OPPO
      /; (\w+) bui.+ oppo/i,
      /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
    ],
    [N, [T, On], [E, Y]],
    [
      /\b(opd2(\d{3}a?))(?: bui|\))/i
    ],
    [N, [T, Ot, { OnePlus: ["304", "403", "203"], "*": On }], [E, pe]],
    [
      // BLU Vivo Series
      /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
    ],
    [N, [T, "BLU"], [E, Y]],
    [
      // Vivo
      /; vivo (\w+)(?: bui|\))/i,
      /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
    ],
    [N, [T, "Vivo"], [E, Y]],
    [
      // Realme
      /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
    ],
    [N, [T, "Realme"], [E, Y]],
    [
      // Motorola
      /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
      /\bmot(?:orola)?[- ](\w*)/i,
      /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
    ],
    [N, [T, Mn], [E, Y]],
    [
      /\b(mz60\d|xoom[2 ]{0,2}) build\//i
    ],
    [N, [T, Mn], [E, pe]],
    [
      // LG
      /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
    ],
    [N, [T, To], [E, pe]],
    [
      /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
      /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch))(\w+)/i,
      /\blg-?([\d\w]+) bui/i
    ],
    [N, [T, To], [E, Y]],
    [
      // Lenovo
      /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
      /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
    ],
    [N, [T, bl], [E, pe]],
    [
      // Nokia
      /(nokia) (t[12][01])/i
    ],
    [T, N, [E, pe]],
    [
      /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
      /nokia[-_ ]?(([-\w\. ]*))/i
    ],
    [[N, /_/g, " "], [E, Y], [T, "Nokia"]],
    [
      // Google
      /(pixel (c|tablet))\b/i
      // Google Pixel C/Tablet
    ],
    [N, [T, Ut], [E, pe]],
    [
      /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
      // Google Pixel
    ],
    [N, [T, Ut], [E, Y]],
    [
      // Sony
      /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
    ],
    [N, [T, Ur], [E, Y]],
    [
      /sony tablet [ps]/i,
      /\b(?:sony)?sgp\w+(?: bui|\))/i
    ],
    [[N, "Xperia Tablet"], [T, Ur], [E, pe]],
    [
      // OnePlus
      / (kb2005|in20[12]5|be20[12][59])\b/i,
      /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
    ],
    [N, [T, wl], [E, Y]],
    [
      // Amazon
      /(alexa)webm/i,
      /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
      // Kindle Fire without Silk / Echo Show
      /(kf[a-z]+)( bui|\)).+silk\//i
      // Kindle Fire HD
    ],
    [N, [T, No], [E, pe]],
    [
      /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
      // Fire Phone
    ],
    [[N, /(.+)/g, "Fire Phone $1"], [T, No], [E, Y]],
    [
      // BlackBerry
      /(playbook);[-\w\),; ]+(rim)/i
      // BlackBerry PlayBook
    ],
    [N, T, [E, pe]],
    [
      /\b((?:bb[a-f]|st[hv])100-\d)/i,
      /\(bb10; (\w+)/i
      // BlackBerry 10
    ],
    [N, [T, ml], [E, Y]],
    [
      // Asus
      /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
    ],
    [N, [T, fl], [E, pe]],
    [
      / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
    ],
    [N, [T, fl], [E, Y]],
    [
      // HTC
      /(nexus 9)/i
      // HTC Nexus 9
    ],
    [N, [T, "HTC"], [E, pe]],
    [
      /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
      // HTC
      // ZTE
      /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
      /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
      // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
    ],
    [T, [N, /_/g, " "], [E, Y]],
    [
      // TCL
      /tcl (xess p17aa)/i,
      /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
    ],
    [N, [T, "TCL"], [E, pe]],
    [
      /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
    ],
    [N, [T, "TCL"], [E, Y]],
    [
      // itel
      /(itel) ((\w+))/i
    ],
    [[T, xt], N, [E, Ot, { tablet: ["p10001l", "w7001"], "*": "mobile" }]],
    [
      // Acer
      /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
    ],
    [N, [T, "Acer"], [E, pe]],
    [
      // Meizu
      /droid.+; (m[1-5] note) bui/i,
      /\bmz-([-\w]{2,})/i
    ],
    [N, [T, "Meizu"], [E, Y]],
    [
      // Ulefone
      /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
    ],
    [N, [T, "Ulefone"], [E, Y]],
    [
      // Energizer
      /; (energy ?\w+)(?: bui|\))/i,
      /; energizer ([\w ]+)(?: bui|\))/i
    ],
    [N, [T, "Energizer"], [E, Y]],
    [
      // Cat
      /; cat (b35);/i,
      /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
    ],
    [N, [T, "Cat"], [E, Y]],
    [
      // Smartfren
      /((?:new )?andromax[\w- ]+)(?: bui|\))/i
    ],
    [N, [T, "Smartfren"], [E, Y]],
    [
      // Nothing
      /droid.+; (a(?:015|06[35]|142p?))/i
    ],
    [N, [T, "Nothing"], [E, Y]],
    [
      // Archos
      /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
      /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
    ],
    [N, [T, "Archos"], [E, pe]],
    [
      /archos ([\w ]+)( b|\))/i,
      /; (ac[3-6]\d\w{2,8})( b|\))/i
    ],
    [N, [T, "Archos"], [E, Y]],
    [
      // MIXED
      /(imo) (tab \w+)/i,
      // IMO
      /(infinix) (x1101b?)/i
      // Infinix XPad
    ],
    [T, N, [E, pe]],
    [
      /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
      // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron/Infinix/Tecno/Micromax/Advan
      /; (blu|hmd|imo|tcl)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,
      // BLU/HMD/IMO/TCL
      /(hp) ([\w ]+\w)/i,
      // HP iPAQ
      /(microsoft); (lumia[\w ]+)/i,
      // Microsoft Lumia
      /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
      // Lenovo
      /(oppo) ?([\w ]+) bui/i
      // OPPO
    ],
    [T, N, [E, Y]],
    [
      /(kobo)\s(ereader|touch)/i,
      // Kobo
      /(hp).+(touchpad(?!.+tablet)|tablet)/i,
      // HP TouchPad
      /(kindle)\/([\w\.]+)/i
      // Kindle
    ],
    [T, N, [E, pe]],
    [
      /(surface duo)/i
      // Surface Duo
    ],
    [N, [T, Rn], [E, pe]],
    [
      /droid [\d\.]+; (fp\du?)(?: b|\))/i
      // Fairphone
    ],
    [N, [T, "Fairphone"], [E, Y]],
    [
      /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      // Nvidia Tablets
    ],
    [N, [T, In], [E, pe]],
    [
      /(sprint) (\w+)/i
      // Sprint Phones
    ],
    [T, N, [E, Y]],
    [
      /(kin\.[onetw]{3})/i
      // Microsoft Kin
    ],
    [[N, /\./g, " "], [T, Rn], [E, Y]],
    [
      /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      // Zebra
    ],
    [N, [T, Dn], [E, pe]],
    [
      /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
    ],
    [N, [T, Dn], [E, Y]],
    [
      ///////////////////
      // SMARTTVS
      ///////////////////
      /smart-tv.+(samsung)/i
      // Samsung
    ],
    [T, [E, Ne]],
    [
      /hbbtv.+maple;(\d+)/i
    ],
    [[N, /^/, "SmartTV"], [T, $r], [E, Ne]],
    [
      /tcast.+(lg)e?. ([-\w]+)/i
      // LG SmartTV
    ],
    [T, N, [E, Ne]],
    [
      /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
    ],
    [[T, To], [E, Ne]],
    [
      /(apple) ?tv/i
      // Apple TV
    ],
    [T, [N, lr + " TV"], [E, Ne]],
    [
      /crkey.*devicetype\/chromecast/i
      // Google Chromecast Third Generation
    ],
    [[N, Mt + " Third Generation"], [T, Ut], [E, Ne]],
    [
      /crkey.*devicetype\/([^/]*)/i
      // Google Chromecast with specific device type
    ],
    [[N, /^/, "Chromecast "], [T, Ut], [E, Ne]],
    [
      /fuchsia.*crkey/i
      // Google Chromecast Nest Hub
    ],
    [[N, Mt + " Nest Hub"], [T, Ut], [E, Ne]],
    [
      /crkey/i
      // Google Chromecast, Linux-based or unknown
    ],
    [[N, Mt], [T, Ut], [E, Ne]],
    [
      /(portaltv)/i
      // Facebook Portal TV
    ],
    [N, [T, Hn], [E, Ne]],
    [
      /droid.+aft(\w+)( bui|\))/i
      // Fire TV
    ],
    [N, [T, No], [E, Ne]],
    [
      /(shield \w+ tv)/i
      // Nvidia Shield TV
    ],
    [N, [T, In], [E, Ne]],
    [
      /\(dtv[\);].+(aquos)/i,
      /(aquos-tv[\w ]+)\)/i
      // Sharp
    ],
    [N, [T, yl], [E, Ne]],
    [
      /(bravia[\w ]+)( bui|\))/i
      // Sony
    ],
    [N, [T, Ur], [E, Ne]],
    [
      /(mi(tv|box)-?\w+) bui/i
      // Xiaomi
    ],
    [N, [T, Pn], [E, Ne]],
    [
      /Hbbtv.*(technisat) (.*);/i
      // TechniSAT
    ],
    [T, N, [E, Ne]],
    [
      /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
      // Roku
      /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
      // HbbTV devices
    ],
    [[T, ro], [N, ro], [E, Ne]],
    [
      // SmartTV from Unidentified Vendors
      /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i
    ],
    [N, [E, Ne]],
    [
      /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
    ],
    [[E, Ne]],
    [
      ///////////////////
      // CONSOLES
      ///////////////////
      /(ouya)/i,
      // Ouya
      /(nintendo) (\w+)/i
      // Nintendo
    ],
    [T, N, [E, Wr]],
    [
      /droid.+; (shield)( bui|\))/i
      // Nvidia Portable
    ],
    [N, [T, In], [E, Wr]],
    [
      /(playstation \w+)/i
      // Playstation
    ],
    [N, [T, Ur], [E, Wr]],
    [
      /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      // Microsoft Xbox
    ],
    [N, [T, Rn], [E, Wr]],
    [
      ///////////////////
      // WEARABLES
      ///////////////////
      /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      // Samsung Galaxy Watch
    ],
    [N, [T, $r], [E, ht]],
    [
      /((pebble))app/i,
      // Pebble
      /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      // Asus ZenWatch / LG Watch / Pixel Watch
    ],
    [T, N, [E, ht]],
    [
      /(ow(?:19|20)?we?[1-3]{1,3})/i
      // Oppo Watch
    ],
    [N, [T, On], [E, ht]],
    [
      /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      // Apple Watch
    ],
    [N, [T, lr], [E, ht]],
    [
      /(opwwe\d{3})/i
      // OnePlus Watch
    ],
    [N, [T, wl], [E, ht]],
    [
      /(moto 360)/i
      // Motorola 360
    ],
    [N, [T, Mn], [E, ht]],
    [
      /(smartwatch 3)/i
      // Sony SmartWatch
    ],
    [N, [T, Ur], [E, ht]],
    [
      /(g watch r)/i
      // LG G Watch R
    ],
    [N, [T, To], [E, ht]],
    [
      /droid.+; (wt63?0{2,3})\)/i
    ],
    [N, [T, Dn], [E, ht]],
    [
      ///////////////////
      // XR
      ///////////////////
      /droid.+; (glass) \d/i
      // Google Glass
    ],
    [N, [T, Ut], [E, Tn]],
    [
      /(pico) (4|neo3(?: link|pro)?)/i
      // Pico
    ],
    [T, N, [E, Tn]],
    [
      /(quest( \d| pro)?s?).+vr/i
      // Meta Quest
    ],
    [N, [T, Hn], [E, Tn]],
    [
      ///////////////////
      // EMBEDDED
      ///////////////////
      /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      // Tesla
    ],
    [T, [E, Xr]],
    [
      /(aeobc)\b/i
      // Echo Dot
    ],
    [N, [T, No], [E, Xr]],
    [
      /(homepod).+mac os/i
      // Apple HomePod
    ],
    [N, [T, lr], [E, Xr]],
    [
      /windows iot/i
    ],
    [[E, Xr]],
    [
      ////////////////////
      // MIXED (GENERIC)
      ///////////////////
      /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i
    ],
    [N, [E, Ot, { mobile: "Mobile", xr: "VR", "*": pe }]],
    [
      /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
      // Unidentifiable Tablet
    ],
    [[E, pe]],
    [
      /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
      // Unidentifiable Mobile
    ],
    [[E, Y]],
    [
      /droid .+?; ([\w\. -]+)( bui|\))/i
      // Generic Android Device
    ],
    [N, [T, "Generic"]]
  ],
  engine: [
    [
      /windows.+ edge\/([\w\.]+)/i
      // EdgeHTML
    ],
    [M, [R, y4 + "HTML"]],
    [
      /(arkweb)\/([\w\.]+)/i
      // ArkWeb
    ],
    [R, M],
    [
      /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      // Blink
    ],
    [M, [R, "Blink"]],
    [
      /(presto)\/([\w\.]+)/i,
      // Presto
      /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
      // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna/Servo
      /ekioh(flow)\/([\w\.]+)/i,
      // Flow
      /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
      // KHTML/Tasman/Links
      /(icab)[\/ ]([23]\.[\d\.]+)/i,
      // iCab
      /\b(libweb)/i
      // LibWeb
    ],
    [R, M],
    [
      /ladybird\//i
    ],
    [[R, "LibWeb"]],
    [
      /rv\:([\w\.]{1,9})\b.+(gecko)/i
      // Gecko
    ],
    [M, R]
  ],
  os: [
    [
      // Windows
      /microsoft (windows) (vista|xp)/i
      // Windows (iTunes)
    ],
    [R, M],
    [
      /(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i
      // Windows Phone
    ],
    [R, [M, Ot, Al]],
    [
      /windows nt 6\.2; (arm)/i,
      // Windows RT
      /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
      /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
    ],
    [[M, Ot, Al], [R, ia]],
    [
      // iOS/macOS
      /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
      // iOS
      /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
      /cfnetwork\/.+darwin/i
    ],
    [[M, /_/g, "."], [R, "iOS"]],
    [
      /(mac os x) ?([\w\. ]*)/i,
      /(macintosh|mac_powerpc\b)(?!.+haiku)/i
      // Mac OS
    ],
    [[R, "macOS"], [M, /_/g, "."]],
    [
      // Google Chromecast
      /android ([\d\.]+).*crkey/i
      // Google Chromecast, Android-based
    ],
    [M, [R, Mt + " Android"]],
    [
      /fuchsia.*crkey\/([\d\.]+)/i
      // Google Chromecast, Fuchsia-based
    ],
    [M, [R, Mt + " Fuchsia"]],
    [
      /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      // Google Chromecast, Linux-based Smart Speaker
    ],
    [M, [R, Mt + " SmartSpeaker"]],
    [
      /linux.*crkey\/([\d\.]+)/i
      // Google Chromecast, Legacy Linux-based
    ],
    [M, [R, Mt + " Linux"]],
    [
      /crkey\/([\d\.]+)/i
      // Google Chromecast, unknown
    ],
    [M, [R, Mt]],
    [
      // Mobile OSes
      /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
      // Android-x86/HarmonyOS
    ],
    [M, R],
    [
      /(ubuntu) ([\w\.]+) like android/i
      // Ubuntu Touch
    ],
    [[R, /(.+)/, "$1 Touch"], M],
    [
      // Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
      /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/\.; ]?([\d\.]*)/i
    ],
    [R, M],
    [
      /\(bb(10);/i
      // BlackBerry 10
    ],
    [M, [R, ml]],
    [
      /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      // Symbian
    ],
    [M, [R, "Symbian"]],
    [
      /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
      // Firefox OS
    ],
    [M, [R, jr + " OS"]],
    [
      /web0s;.+rt(tv)/i,
      /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
      // WebOS
    ],
    [M, [R, "webOS"]],
    [
      /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
      // watchOS
    ],
    [M, [R, "watchOS"]],
    [
      // Google ChromeOS
      /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
      // Chromium OS
    ],
    [[R, "Chrome OS"], M],
    [
      // Smart TVs
      /panasonic;(viera)/i,
      // Panasonic Viera
      /(netrange)mmh/i,
      // Netrange
      /(nettv)\/(\d+\.[\w\.]+)/i,
      // NetTV
      // Console
      /(nintendo|playstation) (\w+)/i,
      // Nintendo/Playstation
      /(xbox); +xbox ([^\);]+)/i,
      // Microsoft Xbox (360, One, X, S, Series X, Series S)
      /(pico) .+os([\w\.]+)/i,
      // Pico
      // Other
      /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
      // Joli/Palm
      /(mint)[\/\(\) ]?(\w*)/i,
      // Mint
      /(mageia|vectorlinux)[; ]/i,
      // Mageia/VectorLinux
      /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
      // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
      /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
      // Hurd/Linux
      /(gnu) ?([\w\.]*)/i,
      // GNU
      /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
      // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
      /(haiku) (\w+)/i
      // Haiku
    ],
    [R, M],
    [
      /(sunos) ?([\w\.\d]*)/i
      // Solaris
    ],
    [[R, "Solaris"], M],
    [
      /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
      // Solaris
      /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
      // AIX
      /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
      // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
      /(unix) ?([\w\.]*)/i
      // UNIX
    ],
    [R, M]
  ]
}, Ro = function() {
  var e = { init: {}, isIgnore: {}, isIgnoreRgx: {}, toString: {} };
  return kt.call(e.init, [
    [Ue, [R, M, to, E]],
    [_t, [je]],
    [gt, [E, N, T]],
    [nt, [R, M]],
    [Je, [R, M]]
  ]), kt.call(e.isIgnore, [
    [Ue, [M, to]],
    [nt, [M]],
    [Je, [M]]
  ]), kt.call(e.isIgnoreRgx, [
    [Ue, / ?browser$/i],
    [Je, / ?os$/i]
  ]), kt.call(e.toString, [
    [Ue, [R, M]],
    [_t, [je]],
    [gt, [T, N]],
    [nt, [R, M]],
    [Je, [R, M]]
  ]), e;
}(), k4 = function(e, t) {
  var r = Ro.init[t], o = Ro.isIgnore[t] || 0, n = Ro.isIgnoreRgx[t] || 0, a = Ro.toString[t] || 0;
  function s() {
    kt.call(this, r);
  }
  return s.prototype.getItem = function() {
    return e;
  }, s.prototype.withClientHints = function() {
    return It ? It.getHighEntropyValues(R2).then(function(l) {
      return e.setCH(new M2(l, !1)).parseCH().get();
    }) : e.parseCH().get();
  }, s.prototype.withFeatureCheck = function() {
    return e.detectFeature().get();
  }, t != gr && (s.prototype.is = function(l) {
    var c = !1;
    for (var d in this)
      if (this.hasOwnProperty(d) && !na(o, d) && xt(n ? _r(n, this[d]) : this[d]) == xt(n ? _r(n, l) : l)) {
        if (c = !0, l != Pt) break;
      } else if (l == Pt && c) {
        c = !c;
        break;
      }
    return c;
  }, s.prototype.toString = function() {
    var l = wr;
    for (var c in a)
      typeof this[a[c]] !== Pt && (l += (l ? " " : wr) + this[a[c]]);
    return l || Pt;
  }), It || (s.prototype.then = function(l) {
    var c = this, d = function() {
      for (var u in c)
        c.hasOwnProperty(u) && (this[u] = c[u]);
    };
    d.prototype = {
      is: s.prototype.is,
      toString: s.prototype.toString
    };
    var p = new d();
    return l(p), p;
  }), new s();
};
function M2(e, t) {
  if (e = e || {}, kt.call(this, R2), t)
    kt.call(this, [
      [Ia, zn(e[Bt])],
      [Oa, zn(e[g4])],
      [Y, /\?1/.test(e[b4])],
      [N, qr(e[C4])],
      [fr, qr(e[T2])],
      [Pa, qr(e[w4])],
      [je, qr(e[f4])],
      [Zt, zn(e[v4])],
      [qo, qr(e[m4])]
    ]);
  else
    for (var r in e)
      this.hasOwnProperty(r) && typeof e[r] !== Pt && (this[r] = e[r]);
}
function Ll(e, t, r, o) {
  return this.get = function(n) {
    return n ? this.data.hasOwnProperty(n) ? this.data[n] : void 0 : this.data;
  }, this.set = function(n, a) {
    return this.data[n] = a, this;
  }, this.setCH = function(n) {
    return this.uaCH = n, this;
  }, this.detectFeature = function() {
    if (Ge && Ge.userAgent == this.ua)
      switch (this.itemType) {
        case Ue:
          Ge.brave && typeof Ge.brave.isBrave == Ho && this.set(R, "Brave");
          break;
        case gt:
          !this.get(E) && It && It[Y] && this.set(E, Y), this.get(N) == "Macintosh" && Ge && typeof Ge.standalone !== Pt && Ge.maxTouchPoints && Ge.maxTouchPoints > 2 && this.set(N, "iPad").set(E, pe);
          break;
        case Je:
          !this.get(R) && It && It[fr] && this.set(R, It[fr]);
          break;
        case gr:
          var n = this.data, a = function(s) {
            return n[s].getItem().detectFeature().get();
          };
          this.set(Ue, a(Ue)).set(_t, a(_t)).set(gt, a(gt)).set(nt, a(nt)).set(Je, a(Je));
      }
    return this;
  }, this.parseUA = function() {
    return this.itemType != gr && Fn.call(this.data, this.ua, this.rgxMap), this.itemType == Ue && this.set(to, Bn(this.get(M))), this;
  }, this.parseCH = function() {
    var n = this.uaCH, a = this.rgxMap;
    switch (this.itemType) {
      case Ue:
      case nt:
        var s = n[Oa] || n[Ia], l;
        if (s)
          for (var c in s) {
            var d = s[c].brand || s[c], p = s[c].version;
            this.itemType == Ue && !/not.a.brand/i.test(d) && (!l || /chrom/i.test(l) && d != xl) && (d = Ot(d, {
              Chrome: "Google Chrome",
              Edge: "Microsoft Edge",
              "Chrome WebView": "Android WebView",
              "Chrome Headless": "HeadlessChrome",
              "Huawei Browser": "HuaweiBrowser",
              "MIUI Browser": "Miui Browser",
              "Opera Mobi": "OperaMobile",
              Yandex: "YaBrowser"
            }), this.set(R, d).set(M, p).set(to, Bn(p)), l = d), this.itemType == nt && d == xl && this.set(M, p);
          }
        break;
      case _t:
        var u = n[je];
        u && (u && n[qo] == "64" && (u += "64"), Fn.call(this.data, u + ";", a));
        break;
      case gt:
        if (n[Y] && this.set(E, Y), n[N] && (this.set(N, n[N]), !this.get(E) || !this.get(T))) {
          var h = {};
          Fn.call(h, "droid 9; " + n[N] + ")", a), !this.get(E) && h.type && this.set(E, h.type), !this.get(T) && h.vendor && this.set(T, h.vendor);
        }
        if (n[Zt]) {
          var f;
          if (typeof n[Zt] != "string")
            for (var C = 0; !f && C < n[Zt].length; )
              f = Ot(n[Zt][C++], El);
          else
            f = Ot(n[Zt], El);
          this.set(E, f);
        }
        break;
      case Je:
        var b = n[fr];
        if (b) {
          var A = n[Pa];
          b == ia && (A = parseInt(Bn(A), 10) >= 13 ? "11" : "10"), this.set(R, b).set(M, A);
        }
        this.get(R) == ia && n[N] == "Xbox" && this.set(R, "Xbox").set(M, void 0);
        break;
      case gr:
        var L = this.data, _ = function(w) {
          return L[w].getItem().setCH(n).parseCH().get();
        };
        this.set(Ue, _(Ue)).set(_t, _(_t)).set(gt, _(gt)).set(nt, _(nt)).set(Je, _(Je));
    }
    return this;
  }, kt.call(this, [
    ["itemType", e],
    ["ua", t],
    ["uaCH", o],
    ["rgxMap", r],
    ["data", k4(this, e)]
  ]), this;
}
function Tt(e, t, r) {
  if (typeof e === yr ? (zo(e, !0) ? (typeof t === yr && (r = t), t = e) : (r = e, t = void 0), e = void 0) : typeof e === oa && !zo(t, !0) && (r = t, t = void 0), r && typeof r.append === Ho) {
    var o = {};
    r.forEach(function(c, d) {
      o[d] = c;
    }), r = o;
  }
  if (!(this instanceof Tt))
    return new Tt(e, t, r).getResult();
  var n = typeof e === oa ? e : (
    // Passed user-agent string
    r && r[hl] ? r[hl] : (
      // User-Agent from passed headers
      Ge && Ge.userAgent ? Ge.userAgent : (
        // navigator.userAgent
        wr
      )
    )
  ), a = new M2(r, !0), s = t ? x4(Sl, t) : Sl, l = function(c) {
    return c == gr ? function() {
      return new Ll(c, n, s, a).set("ua", n).set(Ue, this.getBrowser()).set(_t, this.getCPU()).set(gt, this.getDevice()).set(nt, this.getEngine()).set(Je, this.getOS()).get();
    } : function() {
      return new Ll(c, n, s[c], a).parseUA().get();
    };
  };
  return kt.call(this, [
    ["getBrowser", l(Ue)],
    ["getCPU", l(_t)],
    ["getDevice", l(gt)],
    ["getEngine", l(nt)],
    ["getOS", l(Je)],
    ["getResult", l(gr)],
    ["getUA", function() {
      return n;
    }],
    ["setUA", function(c) {
      return Sr(c) && (n = c.length > ra ? ro(c, ra) : c), this;
    }]
  ]).setUA(n), this;
}
Tt.VERSION = h4;
Tt.BROWSER = Wo([R, M, to, E]);
Tt.CPU = Wo([je]);
Tt.DEVICE = Wo([N, T, E, Wr, Y, Ne, pe, ht, Xr]);
Tt.ENGINE = Tt.OS = Wo([R, M]);
const A4 = "https://docs.google.com/forms/d/e/1FAIpQLSdfy9dl4TvTXXoPMvJfnBaCPm_NcfD0IULTg0xMXOZpTldJdA/formResponse", E4 = async ({
  bugDescription: e
}) => {
  var o;
  const t = new URLSearchParams(), r = new Tt();
  t.append("entry.73769851", e), t.append("entry.1380591933", location.href), t.append("entry.577239589", ((o = r.getBrowser()) == null ? void 0 : o.name) || "N/A"), t.append("entry.162215074", r.getOS().name || "N/A");
  try {
    await fetch(A4, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: t.toString()
    });
  } catch {
  }
  return !0;
}, I2 = (e, t, r) => {
  if (!t || t.length === 0) return [Qe(Ce, {}, e)];
  const o = [...t].sort((c, d) => d.part.length - c.part.length), n = o.map((c) => S4(c.part)), a = new RegExp(`(${n.join("|")})`, "g"), s = e.split(a), l = {};
  return s.map((c, d) => {
    const p = o.find((u) => u.part === c);
    if (p) {
      const u = l[p.part] || 0, h = !(r != null && r.once) || u === 0;
      if (l[p.part] = u + 1, h)
        return p.render(c, d);
    }
    return Qe(Ce, { key: `text-${d}` }, c);
  });
}, S4 = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), L4 = () => {
  const { t: e } = B(), { path: t } = zt();
  return /* @__PURE__ */ i("div", { className: "flex w-full flex-col items-center justify-center gap-4 py-8", children: [
    /* @__PURE__ */ i(
      "img",
      {
        className: "w-32 sm:w-40",
        alt: e("support_dialog.bug_report_form_success"),
        src: `${t}/assets/images/send_message_success.png`
      }
    ),
    /* @__PURE__ */ i("p", { className: "max-w-72 text-center font-medium text-sm sm:text-base", children: I2(
      e("support_dialog.bug_report_form_success"),
      [
        {
          part: "!",
          render: (r) => /* @__PURE__ */ i(Ce, { children: [
            r,
            " ",
            /* @__PURE__ */ i("br", {})
          ] })
        }
      ],
      { once: !0 }
    ) })
  ] });
}, Vn = { min: 10, max: 255 }, N4 = () => {
  var h;
  const { t: e } = B(), { isExpanded: t } = S(), [r, o] = U({ bugDescription: "" }), [n, a] = U(), [s, l] = U(), c = async (f) => {
    f.preventDefault(), f.stopPropagation(), !(s != null && s.isSubmitting) && (l({ isSubmitting: !0 }), await E4(r), l({ isSubmitting: !1, isSubmitted: !0 }));
  }, d = (f, C) => {
    o({ ...r, [C]: f }), n != null && n[C] || a({ ...n, [C]: !0 });
  }, p = Nt(() => ({
    bugDescription: !!(n != null && n.bugDescription) && r.bugDescription.trim().length < 10
  }), [r, n]), u = Nt(() => n ? !p.bugDescription : !1, [p, n]);
  return s != null && s.isSubmitted ? /* @__PURE__ */ i(L4, {}) : /* @__PURE__ */ i("form", { onSubmit: c, className: "space-y-4", children: [
    /* @__PURE__ */ i("fieldset", { className: "fieldset", children: [
      /* @__PURE__ */ i("legend", { className: "fieldset-legend w-full gap-0 font-semibold text-sm", children: [
        e("support_dialog.bug_report_form_fields.bug_description"),
        /* @__PURE__ */ i("span", { className: "text-destructive text-sm", children: "*" }),
        /* @__PURE__ */ i("span", { className: "ml-auto font-normal text-muted-foreground text-xs", children: [
          ((h = r == null ? void 0 : r.bugDescription) == null ? void 0 : h.length) || 0,
          "/",
          Vn.max
        ] })
      ] }),
      /* @__PURE__ */ i(
        "textarea",
        {
          autoComplete: "off",
          value: r.bugDescription,
          onInput: (f) => d(f.currentTarget.value, "bugDescription"),
          name: "bugDescription",
          maxLength: Vn.max,
          minLength: Vn.min,
          className: H(
            "textarea h-36 w-full resize-none rounded-md border-1 border-border focus:border-primary",
            p.bugDescription && "!border-destructive !bg-destructive/5"
          ),
          placeholder: e("support_dialog.bug_report_form_fields.bug_description")
        }
      ),
      p.bugDescription && /* @__PURE__ */ i("p", { className: "text-destructive text-xs", children: e("support_dialog.bug_report_form_errors.bug_description") })
    ] }),
    /* @__PURE__ */ i("div", { className: "flex w-full items-center gap-2", children: /* @__PURE__ */ i(
      fe,
      {
        className: H("ml-auto h-10 w-full rounded-full font-normal text-sm", t && "w-64"),
        disabled: !u || (s == null ? void 0 : s.isSubmitting),
        variant: "primary",
        type: "submit",
        children: [
          (s == null ? void 0 : s.isSubmitting) && /* @__PURE__ */ i("span", { className: "loading loading-spinner loading-xs" }),
          e(
            s != null && s.isSubmitting ? "support_dialog.bug_report_form_submiting" : "support_dialog.bug_report_form_submit"
          )
        ]
      }
    ) })
  ] });
}, T4 = ["contact", "bug_report"], R4 = () => {
  const e = xe(null), { t } = B(), { setDialog: r } = Er(), [o, n] = U("contact");
  return P(() => {
    var a;
    return (a = e == null ? void 0 : e.current) == null ? void 0 : a.focus();
  }, []), /* @__PURE__ */ i(A2, { children: /* @__PURE__ */ i(E2, { className: "bg-background", children: [
    /* @__PURE__ */ i(S2, { className: "flex flex-row items-center justify-between", children: [
      /* @__PURE__ */ i(L2, { children: t("contact_and_support") }),
      /* @__PURE__ */ i(
        Dt,
        {
          className: "absolute right-2.5 rounded-full",
          title: t("titles.close"),
          "aria-label": t("titles.close"),
          variant: "destructive",
          onClick: () => r(void 0),
          children: /* @__PURE__ */ i(Kt, { size: 22 })
        }
      )
    ] }),
    /* @__PURE__ */ i(N2, { className: "space-y-4 overflow-x-hidden", children: [
      /* @__PURE__ */ i("div", { className: "group flex w-fit items-center rounded-full border-1 p-1", children: T4.map((a) => /* @__PURE__ */ i(
        fe,
        {
          "aria-label": t(`support_dialog.tabs.${a}`),
          ref: a === "contact" ? e : void 0,
          className: H(
            "h-7 w-full whitespace-nowrap rounded-full border-1 border-transparent px-4 font-medium text-foreground text-sm hover:underline",
            a === o && "!bg-primary !text-primary-foreground pointer-events-none"
          ),
          onClick: () => n(a),
          children: t(`support_dialog.tabs.${a}`)
        },
        a
      )) }),
      o === "contact" && /* @__PURE__ */ i(p4, {}),
      o === "bug_report" && /* @__PURE__ */ i(N4, {})
    ] })
  ] }) });
}, O2 = Ht()((e) => ({
  isOpenLibrasDescription: !1,
  setOpenLibrasDescription: (t) => e((r) => ({
    isOpenLibrasDescription: typeof t == "function" ? t(r.isOpenLibrasDescription) : t
  }))
})), M4 = () => {
  const { t: e, locale: t } = B(), { setOpenLibrasDescription: r, isOpenLibrasDescription: o } = O2(), [n, a] = U(!1), s = () => {
    if (n)
      return eo(), a(!1);
    const c = br(e("about.project_description"));
    c && (c.onstart = () => {
      a(!0), r(!1);
    }, c.onend = () => a(!1));
  }, l = () => {
    r((c) => !c), a(!1), eo();
  };
  return !Cr && t !== "pt" ? null : /* @__PURE__ */ i("div", { className: "flex items-center rounded-full border-1 p-1 dark:bg-muted", children: [
    t === "pt" && /* @__PURE__ */ i(
      Dt,
      {
        onClick: l,
        className: H("size-7 rounded-full", o && "!bg-primary"),
        title: e("about.project_description_to_libras"),
        "aria-label": e("about.project_description_to_libras"),
        children: /* @__PURE__ */ i(Ra, { className: H(o && "!fill-primary-foreground"), size: 20 })
      }
    ),
    Cr && /* @__PURE__ */ i(
      Dt,
      {
        onClick: s,
        className: H("size-7 rounded-full", n && "!bg-primary"),
        title: e("about.project_description_to_speak"),
        "aria-label": e("about.project_description_to_speak"),
        children: /* @__PURE__ */ i(Zo, { className: H(n && "!fill-primary-foreground animate-pulse"), size: 18 })
      }
    )
  ] });
}, I4 = () => {
  const e = xe(null), { path: t } = zt(), { t: r } = B(), { setOpenLibrasDescription: o, isOpenLibrasDescription: n } = O2(), a = () => {
    e.current && (e.current.currentTime = 0, e.current.play());
  };
  return /* @__PURE__ */ i("section", { className: "relative space-y-2", children: [
    !n && /* @__PURE__ */ i("p", { children: I2(
      r("about.project_description"),
      [
        { part: "VLibras", render: (s) => /* @__PURE__ */ i("strong", { className: "font-bold", children: s }) },
        { part: "VLibras Widget+", render: (s) => /* @__PURE__ */ i("strong", { className: "font-bold", children: s }) }
      ],
      { once: !0 }
    ) }),
    n && /* @__PURE__ */ i("div", { className: "relative grid w-full place-items-center rounded-lg border-1 bg-white", children: [
      /* @__PURE__ */ i("div", { className: "absolute top-2 right-2 flex items-center", children: [
        /* @__PURE__ */ i(
          fe,
          {
            onClick: a,
            className: "group size-8 rounded-full p-0 hover:bg-black/5",
            "aria-label": r("reset"),
            children: /* @__PURE__ */ i(Wc, { size: 18, className: "fill-black opacity-50 group-hover:opacity-100" })
          }
        ),
        /* @__PURE__ */ i(
          fe,
          {
            onClick: () => o(!1),
            "aria-label": `${r("al.close")} video`,
            className: "group size-8 rounded-full p-0 hover:bg-destructive/5",
            children: /* @__PURE__ */ i(Kt, { size: 18, className: "fill-black opacity-50 group-hover:fill-destructive group-hover:opacity-100" })
          }
        )
      ] }),
      /* @__PURE__ */ i("video", { ref: e, className: "h-64", autoplay: !0, src: `${t}/assets/videos/project_description.mp4` })
    ] })
  ] });
}, O4 = [
  {
    name: "Site",
    link: "https://www.gov.br/governodigital/pt-br/vlibras",
    color: "#2670e8",
    icon: e8
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/vlibrasoficial",
    color: "#e1306c",
    icon: o8
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/vlibras",
    color: "#1877f2",
    icon: Qp
  },
  {
    name: "Twitter / X",
    link: "https://x.com/VLibrasoficial",
    color: "#000",
    icon: t8
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/@vlibras-lavid3180",
    color: "#ff0000",
    icon: r8
  }
], P4 = () => {
  const { t: e } = B();
  return /* @__PURE__ */ i("section", { className: "space-y-2", children: [
    /* @__PURE__ */ i("h3", { className: "font-bold", children: e("about.social_media") }),
    /* @__PURE__ */ i("div", { className: "flex w-full flex-wrap items-center gap-2", children: O4.map((t) => {
      const r = t.icon, o = t.name.includes("Twitter");
      return /* @__PURE__ */ i(
        "a",
        {
          title: t.name,
          className: "flex items-center gap-2 rounded-full border-1 py-1 pr-3 pl-2 font-medium text-xs hover:bg-muted sm:text-sm",
          href: t.link,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [
            /* @__PURE__ */ i(
              r,
              {
                style: { fill: t.color },
                className: H(
                  "pointer-events-none size-3.5 fill-primary-foreground sm:size-4",
                  o && "dark:!fill-white"
                ),
                "aria-hidden": !0
              }
            ),
            t.name
          ]
        },
        t.name
      );
    }) })
  ] });
}, D4 = () => {
  const { t: e } = B(), { isExpanded: t } = S(), { path: r } = zt();
  return /* @__PURE__ */ i("section", { className: "space-y-2", children: [
    /* @__PURE__ */ i("h3", { className: "font-bold", children: e("about.implementers") }),
    /* @__PURE__ */ i(
      "div",
      {
        className: H(
          "relative flex items-center overflow-hidden rounded-md border bg-white p-8",
          t && "md:px-24 md:py-12"
        ),
        children: /* @__PURE__ */ i("img", { src: `${r}/assets/images/contributors.png`, alt: e("about.implementers") })
      }
    )
  ] });
}, H4 = () => {
  const { inPage: e } = sc(), { t, locale: r } = B(), { setDialog: o } = Er(), n = () => {
    o(void 0), eo();
  };
  return /* @__PURE__ */ i(A2, { children: /* @__PURE__ */ i(E2, { className: "bg-background", children: [
    /* @__PURE__ */ i(S2, { className: "flex flex-row items-center justify-between", children: [
      /* @__PURE__ */ i(L2, { children: t("about_the_project") }),
      /* @__PURE__ */ i("div", { className: "absolute right-2.5 flex items-center gap-2", children: [
        e && r === "pt" && /* @__PURE__ */ i(M4, {}),
        /* @__PURE__ */ i(
          Dt,
          {
            className: "rounded-full",
            title: t("titles.close"),
            "aria-label": t("titles.close"),
            variant: "destructive",
            onClick: n,
            children: /* @__PURE__ */ i(Kt, { size: 22 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i(N2, { children: /* @__PURE__ */ i("div", { className: "space-y-4", children: [
      /* @__PURE__ */ i(I4, {}),
      /* @__PURE__ */ i(P4, {}),
      /* @__PURE__ */ i(D4, {})
    ] }) })
  ] }) });
}, z4 = () => {
  const { t: e } = B(), { theme: t } = Go(), { setDialog: r } = Er(), { isActive: o, reset: n } = S();
  return /* @__PURE__ */ i(
    "div",
    {
      className: H("absolute inset-4 top-auto z-50 flex items-center justify-center gap-1 xs:gap-3 transition-all"),
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            style: { boxShadow: `0 0 8px 2px rgba(0, 0, 0, ${t === "dark" ? 0.5 : 0.1})` },
            className: H("flex items-center gap-2 rounded-full border-1 bg-background p-2 max-xs:scale-90"),
            children: [
              /* @__PURE__ */ i(l4, {}),
              /* @__PURE__ */ i("div", { className: "ml-auto flex rounded-full border-1 bg-background dark:bg-popover", children: [
                /* @__PURE__ */ i(
                  Wt,
                  {
                    placement: "top",
                    offset: 4,
                    arrow: { position: "bottom", className: "bg-background border-1" },
                    className: "whitespace-nowrap bg-background",
                    content: /* @__PURE__ */ i("div", { className: "-top-px relative", children: e("about_the_project") }),
                    children: /* @__PURE__ */ i(
                      fe,
                      {
                        "aria-label": e("about_the_project"),
                        onClick: () => r(/* @__PURE__ */ i(H4, {})),
                        variant: "ghost",
                        className: "group size-10 whitespace-nowrap rounded-full rounded-r-none p-0",
                        children: /* @__PURE__ */ i(e2, { className: "size-6" })
                      }
                    )
                  }
                ),
                /* @__PURE__ */ i("span", { className: "h-10 w-[1px] bg-border" }),
                /* @__PURE__ */ i(
                  Wt,
                  {
                    placement: "top",
                    arrow: { position: "bottom", className: "bg-background border-1" },
                    offset: 4,
                    className: "whitespace-nowrap bg-background",
                    content: /* @__PURE__ */ i("div", { className: "-top-px relative", children: [
                      e("contact_and_support"),
                      " ",
                      /* @__PURE__ */ i("span", { className: "text-muted-foreground", children: [
                        "(",
                        e("upcoming"),
                        ")"
                      ] })
                    ] }),
                    children: /* @__PURE__ */ i(
                      fe,
                      {
                        "aria-label": e("contact_and_support"),
                        disabled: !0,
                        onClick: () => r(/* @__PURE__ */ i(R4, {})),
                        variant: "ghost",
                        className: "group size-10 whitespace-nowrap rounded-r-full p-0",
                        children: /* @__PURE__ */ i($p, { className: "size-6" })
                      }
                    )
                  }
                )
              ] })
            ]
          }
        ),
        o && /* @__PURE__ */ i(
          Wt,
          {
            placement: "top",
            arrow: { position: "bottom", className: "bg-background border-1" },
            offset: 4,
            className: "whitespace-nowrap bg-background",
            content: /* @__PURE__ */ i("div", { className: "-top-px relative", children: e("al.reset") }),
            children: /* @__PURE__ */ i(
              fe,
              {
                "aria-label": e("titles.reset"),
                onClick: n,
                variant: "destructive",
                className: "size-9 xs:size-10 animate-move-up rounded-full p-0",
                children: /* @__PURE__ */ i(Wc, { className: "size-6" })
              }
            )
          }
        )
      ]
    }
  );
}, B4 = () => {
  st(
    "body *:not(.vwp-ignore, .sr-only, .sr-only *, [vw], [vw] *, #vwp-app-root *):where(a, span, p, h1, h2, h3, h4, h5, h6, strong, em, label)"
  ).forEach((t) => {
    const r = window.getComputedStyle(t).color;
    ["rgba(0, 0, 0, 0)", "rgb(0, 0, 0)"].includes(r) && t.classList.add("vwp-ignore--text-color");
  });
}, F4 = () => {
  const e = Be("[vw-plugin-wrapper]");
  if (!e) return;
  new MutationObserver((r) => {
    for (const o of r)
      o.type === "attributes" && o.attributeName === "class" && e.classList.contains("active") && S.setState({
        isOpenWidget: !1,
        largeCursor: void 0,
        textReader: void 0,
        dictionary: void 0
      });
  }).observe(e, { attributes: !0 });
}, V4 = () => {
  const { main: e } = qt();
  return P(() => {
    B4(), F4();
  }, []), /* @__PURE__ */ i(C8, { children: [
    /* @__PURE__ */ i("div", { className: H("flex h-full w-full flex-col", !e && "sr-only pointer-events-none"), children: [
      /* @__PURE__ */ i(w8, {}),
      /* @__PURE__ */ i(s4, {}),
      /* @__PURE__ */ i(z4, {})
    ] }),
    /* @__PURE__ */ i(v8, {}),
    /* @__PURE__ */ i(b8, {})
  ] });
}, $4 = ({ children: e, root: t }) => {
  const { theme: r } = Go();
  return P(() => {
    const o = t || document.documentElement;
    (o instanceof ShadowRoot ? o.host : o).classList.toggle("dark", r === "dark");
  }, [r, t]), e;
}, U4 = () => {
  const e = xe(null), t = xe(null), r = xe(null), o = Uo(), { t: n } = B(), { height: a } = Gc(), { y: s } = Fo(), [l, c] = U(!1);
  P(() => {
    d(s || a / 2);
  }, [s, a]), P(() => {
    o && d(a / 2);
  }, [o, a]);
  function d(p) {
    if (!t.current || !r.current || o && !l) return;
    const u = o ? 28 : 38, h = 10, f = u + h, C = u + h * 2;
    t.current.style.height = `${(p > a - f ? a - f : p) - (p < 4 ? 0 : u)}px`, r.current.style.height = `${a - (p < f ? f : p) - u}px`;
    let b = p - u / 2;
    b < C / 2 ? b = C / 2 : b > a - C - h / 2 && (b = a - C - h / 2), e.current && (e.current.style.top = `${b - u * 0.35}px`);
  }
  return /* @__PURE__ */ i("div", { className: "relative z-[2147483647]", children: [
    o && /* @__PURE__ */ i(
      fe,
      {
        ref: e,
        onTouchMove: (p) => {
          p.preventDefault(), l || c(!0), d(p.touches[0].clientY);
        },
        className: H(
          "fixed top-[calc(15dvh-24px)] left-0 h-12 w-8 items-center rounded-r-[8px] rounded-l-none bg-primary"
        ),
        "aria-label": n("al.move_reading_mask"),
        children: /* @__PURE__ */ i(pp, { size: 24, className: "fill-white", iconTitle: n("al.move_reading_mask") })
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        ref: t,
        className: H(
          "pointer-events-none fixed top-0 left-0 w-full border-primary border-b-8 bg-black/40",
          o && !l && "!h-[calc(15dvh-32px)]"
        )
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        ref: r,
        className: H(
          "pointer-events-none fixed bottom-0 left-0 w-full border-primary border-t-8 bg-black/20",
          o && !l && "!h-[calc(85dvh-32px)]"
        )
      }
    )
  ] });
}, Nl = me(
  ({ children: e, className: t, ...r }, o) => /* @__PURE__ */ i(
    "div",
    {
      ref: o,
      className: H(
        "-z-50 relative grid place-items-center [&>*]:absolute [&>*]:h-0 [&>*]:w-0 [&>*]:border-transparent [&>*]:border-r-12 [&>*]:border-b-12 [&>*]:border-l-12",
        t
      ),
      ...r,
      children: [
        /* @__PURE__ */ i("span", { className: "!border-b-white -top-3.5" }),
        /* @__PURE__ */ i("span", { className: "!border-b-primary -top-2.5" })
      ]
    }
  )
), j4 = () => {
  const e = xe(null), t = xe(null), r = xe(null), o = Uo(), { t: n } = B(), { width: a, height: s } = Gc(), { x: l, y: c } = Fo();
  P(() => {
    l && c && d(l, c);
  }, [c, l]), P(() => {
    o && d(a / 2, 24);
  }, [o, a]);
  function d(p, u) {
    if (!t.current) return;
    const h = t.current.offsetWidth;
    if (o || (t.current.style.left = `${p - h / 2}px`, t.current.style.top = `${u < 30 ? 16 : u - 16}px`), e.current && r.current && o) {
      const f = p < 24 ? 4 : p > a - 40 ? a - 54 : p - 24;
      t.current.style.top = `${u < 24 ? 14 : u > s - 32 ? s - 42 : u - 10}px`, e.current.style.top = `${u < 24 ? 20 : u > s - 32 ? s - 37 : u - 5}px`, e.current.style.left = `${f}px`, r.current.style.left = `${f + 12}px`, r.current.style.top = `${u < 24 ? 6 : u > s - 36 ? s - 49 : u - 17.1}px`;
    }
  }
  return /* @__PURE__ */ i("div", { className: "relative z-[2147483647]", children: [
    o && /* @__PURE__ */ i(
      fe,
      {
        ref: e,
        onTouchMove: (p) => {
          p.preventDefault(), d(p.touches[0].clientX, p.touches[0].clientY);
        },
        className: H(
          "fixed top-0 left-1/2 z-10 h-8 w-12 rounded-t-none rounded-b-md border-2 border-white border-t-primary bg-primary"
        ),
        "aria-label": n("al.move_reading_mask"),
        children: /* @__PURE__ */ i(kp, { size: 22, className: "fill-white", iconTitle: n("al.move_reading_mask") })
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        ref: t,
        className: H(
          "fixed top-4 left-[calc(50dvw-36rem/2)] grid h-2 w-xl place-items-center rounded-full border-2 border-white bg-primary",
          o && "translate-none !left-0 !right-0 !w-auto rounded-none"
        ),
        children: !o && /* @__PURE__ */ i(Nl, {})
      }
    ),
    /* @__PURE__ */ i(Nl, { ref: r, className: H("!z-0 mt-2.5 ml-3", o ? "fixed" : "hidden") })
  ] });
}, G4 = ({
  x: e,
  y: t,
  tooltip: r
}) => {
  const o = (r == null ? void 0 : r.getBoundingClientRect()) || { width: 0 };
  let n = e, a = t - 36, s = "bottom";
  return n < 34 && (n = 34, s = "left"), n + o.width > window.innerWidth && (n = window.innerWidth - o.width + 12, s = "right"), a < 46 ? (a = 54, s = s === "right" ? "top-right" : "top-left") : s = s === "right" ? "bottom-right" : "bottom-left", { x: n, y: a, arrow: s };
}, Z4 = () => {
  const e = xe(null), { t } = B(), { type: r, event: o, onClick: n, isActive: a, render: s } = Xt(), [l, c] = U({ x: 0, y: 0, arrow: "bottom" });
  return P(() => {
    const d = (p) => {
      e.current && !e.current.contains(p.target) && Xt.setState({ isActive: !1 });
    };
    return a ? document.addEventListener("click", d) : document.removeEventListener("click", d), () => {
      document.removeEventListener("click", d);
    };
  }, [a]), P(() => {
    if (o) {
      const { pageX: d, pageY: p } = o;
      c(G4({ x: d, y: p, tooltip: e.current }));
      const u = e.current;
      u && (u.classList.remove("animate-scale"), u.offsetWidth, u.classList.add("animate-scale"));
    }
  }, [o]), /* @__PURE__ */ i(
    fe,
    {
      ref: e,
      onClick: n,
      style: {
        left: l.x,
        top: l.y,
        boxShadow: "2px 2px 10px 4px rgba(0, 0, 0, .2)"
      },
      className: H(
        "group -translate-x-6 -translate-y-full absolute z-[2147483647] h-9 animate-scale rounded-md px-3 text-primary-foreground"
      ),
      children: [
        s || /* @__PURE__ */ i(Ce, { children: [
          r === "button" ? /* @__PURE__ */ i(Ep, { size: 20, iconTitle: t("interact") }) : /* @__PURE__ */ i(Xc, { size: 20, iconTitle: t("access_link") }),
          /* @__PURE__ */ i("span", { className: "relative bottom-0.5 font-medium text-base", children: t(r === "button" ? "interact" : "access_link") })
        ] }),
        /* @__PURE__ */ i("span", { className: "-z-[1] absolute inset-0 rounded-md bg-primary group-hover:brightness-85" }),
        /* @__PURE__ */ i(
          "span",
          {
            className: H(
              "-translate-x-1/2 -z-[2] absolute size-4 rotate-45 bg-primary brightness-85",
              ["bottom", "bottom-left", "bottom-right"].includes(l.arrow) ? "-bottom-5" : "top-3",
              ["bottom-left", "top-left", "bottom", "top"].includes(l.arrow) ? "left-5" : "right-2"
            )
          }
        )
      ]
    }
  );
}, q4 = ["masculino", "feminino", "neutro"], aa = async (e) => {
  var c, d, p, u, h, f;
  const t = e.trim().replace(".", "");
  if (!t) return null;
  const n = await (await fetch(((C) => `https://pt.wiktionary.org/w/api.php?action=parse&redirects=1&format=json&origin=*&utf8=1&page=${encodeURIComponent(
    C.toLowerCase().replace(".", "")
  )}&prop=text&formatversion=2`)(t))).json(), a = (c = n == null ? void 0 : n.parse) == null ? void 0 : c.text;
  if (!a) return null;
  const s = W4(a, t);
  if ((((d = s.plural) == null ? void 0 : d.toLowerCase()) !== t.toLowerCase() || ((p = s.definitions) == null ? void 0 : p.some((C) => C.toLowerCase().includes("plural de")))) && !(s.definitions && s.definitions.length > 3)) {
    if (s.plural) return await aa(s.plural);
    let C;
    const b = (h = (u = s.definitions) == null ? void 0 : u.find((A) => A.toLowerCase().includes("plural de"))) == null ? void 0 : h.match(/plural de (.+)/i);
    if (C = (f = b == null ? void 0 : b[1]) == null ? void 0 : f.trim(), C)
      return await aa(C);
  }
  return { ...s, title: t };
};
function W4(e, t) {
  var C, b, A, L, _, w, x;
  const o = new DOMParser().parseFromString(e, "text/html"), n = (A = (b = (C = o.querySelector("tbody")) == null ? void 0 : C.innerHTML.match(new RegExp(`title="(?<gender>${q4.join("|")})"`))) == null ? void 0 : b.groups) == null ? void 0 : A.gender, a = Array.from(o.querySelectorAll("ol > li")).map((g) => {
    var O;
    const m = g == null ? void 0 : g.querySelectorAll("span.mw-cite-backlink");
    m == null || m.forEach((D) => D.remove());
    let y = ((O = g == null ? void 0 : g.textContent) == null ? void 0 : O.trim()) || "";
    const k = (g == null ? void 0 : g.querySelectorAll("ul > li")) || (g == null ? void 0 : g.querySelectorAll("ol > li"));
    if (k != null && k.length) {
      const D = Array.from(k).map((Z) => {
        var z;
        return (z = Z.textContent) == null ? void 0 : z.trim();
      }).filter(Boolean);
      D.length && (y = `${y} §${D.join("§")}`);
    }
    return y;
  }).filter((g) => g !== t).filter((g, m, y) => y.indexOf(g) === m).filter(Boolean), s = (_ = (L = o.querySelector("h2")) == null ? void 0 : L.textContent) == null ? void 0 : _.trim(), l = Array.from(o.querySelectorAll("b")).find(
    (g) => g.innerHTML.includes("<u>") || g.innerHTML.includes(".")
  ), c = (w = l == null ? void 0 : l.textContent) == null ? void 0 : w.trim(), d = X4(o), p = {}, u = o.querySelector("table.traduções");
  u && u.querySelectorAll("tr").forEach((m) => {
    var O;
    const y = m.querySelector("td"), k = m.querySelectorAll("td ~ td a");
    if (y && k.length > 0) {
      const D = (O = y.textContent) == null ? void 0 : O.trim().toLowerCase(), Z = Array.from(k).map((z) => {
        var j;
        return (j = z.textContent) == null ? void 0 : j.trim();
      }).filter(Boolean);
      D && (p[D] = Z);
    }
  });
  const h = ((x = o.querySelector("img")) == null ? void 0 : x.getAttribute("src")) || void 0, f = Object.keys(p).length > 0 ? p : void 0;
  return {
    wordClass: s,
    pronunciation: c,
    definitions: a,
    etymology: d,
    gender: n,
    imgUrl: h,
    translations: f
  };
}
function X4(e) {
  var o, n, a;
  let t;
  const r = Array.from(e.querySelectorAll("h2, h3")).find(
    (s) => {
      var l;
      return (l = s.textContent) == null ? void 0 : l.toLowerCase().includes("etimologia");
    }
  );
  if (r) {
    const s = (o = r.parentElement) == null ? void 0 : o.nextElementSibling;
    t = (a = (n = s == null ? void 0 : s.firstChild) == null ? void 0 : n.textContent) == null ? void 0 : a.trim();
  }
  return t;
}
const Y4 = me(({ className: e, size: t = 24, ...r }, o) => /* @__PURE__ */ i(Ce, { children: /* @__PURE__ */ i(
  "span",
  {
    className: H("flex aspect-square items-center justify-center text-primary", e),
    ref: o,
    ...r,
    children: [
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
    ]
  }
) })), K4 = () => {
  const { t: e } = B();
  return /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center gap-2 py-8", children: [
    /* @__PURE__ */ i(Y4, { size: 32, className: "relative top-0.5" }),
    /* @__PURE__ */ i("span", { className: "animate-pulse text-sm", children: e("status.searching") })
  ] });
}, J4 = {
  data: null,
  isSearchOpen: !1,
  isFetching: !1
}, oo = Ht()(() => ({
  ...J4
})), Q4 = () => {
  var r, o;
  const { data: e } = oo();
  if (!e) return null;
  const t = (((r = e.definitions) == null ? void 0 : r.length) || 0) > 1;
  return /* @__PURE__ */ i("div", { className: "space-y-4 text-base", children: [
    /* @__PURE__ */ i("p", { children: [
      /* @__PURE__ */ i("strong", { className: "italic", children: (o = e.pronunciation) == null ? void 0 : o.split(".").join("-").replace(":", "") }),
      e.gender && `, ${e.gender}`
    ] }),
    /* @__PURE__ */ i($n, { label: t ? "Definições" : "Definição", value: e.definitions }),
    /* @__PURE__ */ i($n, { label: "Classe gramatical", value: e.wordClass }),
    /* @__PURE__ */ i($n, { label: "Etimologia", value: e.etymology })
  ] });
};
function $n({ label: e, value: t }) {
  return t != null && t.length ? Array.isArray(t) ? /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ i("p", { className: "font-semibold text-base text-muted-foreground", children: e }),
    /* @__PURE__ */ i("ol", { className: H(t.length > 1 && "list-inside list-decimal space-y-2 ps-2"), children: t.slice(0, 10).filter((r) => r.length < 200 && r.length > 5).map((r, o) => {
      const n = r.split("§");
      return /* @__PURE__ */ i("li", { children: [
        r.split("§")[0],
        n.length > 1 && /* @__PURE__ */ i("ul", { className: "my-1 ml-4", children: n.slice(1).map((a, s) => /* @__PURE__ */ i("li", { className: "text-muted-foreground text-sm italic", children: [
          '"',
          a,
          '"'
        ] }, s)) })
      ] }, o);
    }) })
  ] }) : /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ i("p", { className: "font-semibold text-base text-muted-foreground", children: e }),
    /* @__PURE__ */ i("span", { children: t.split(`
`).map((r, o) => /* @__PURE__ */ i("span", { children: [
      r,
      /* @__PURE__ */ i("br", {})
    ] }, o)) })
  ] }) : null;
}
const P2 = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ i("title", { children: t }),
      /* @__PURE__ */ i("path", { d: "M9.95229 17.9046C7.75215 17.9046 5.87674 17.1292 4.32604 15.5785C2.77535 14.0278 2 12.1524 2 9.95229C2 7.75215 2.77535 5.87674 4.32604 4.32604C5.87674 2.77535 7.75215 2 9.95229 2C12.1524 2 14.0278 2.77535 15.5785 4.32604C17.1292 5.87674 17.9046 7.75215 17.9046 9.95229C17.9046 10.721 17.7919 11.4831 17.5666 12.2386C17.3413 12.994 17.0033 13.6899 16.5527 14.326L21.5626 19.336C21.8542 19.6276 22 19.9987 22 20.4493C22 20.8999 21.8542 21.271 21.5626 21.5626C21.271 21.8542 20.8999 22 20.4493 22C19.9987 22 19.6276 21.8542 19.336 21.5626L14.326 16.5527C13.6899 17.0033 12.994 17.3413 12.2386 17.5666C11.4831 17.7919 10.721 17.9046 9.95229 17.9046ZM9.95229 14.7237C11.2777 14.7237 12.4042 14.2598 13.332 13.332C14.2598 12.4042 14.7237 11.2777 14.7237 9.95229C14.7237 8.62691 14.2598 7.50033 13.332 6.57256C12.4042 5.6448 11.2777 5.18091 9.95229 5.18091C8.62691 5.18091 7.50033 5.6448 6.57256 6.57256C5.6448 7.50033 5.18091 8.62691 5.18091 9.95229C5.18091 11.2777 5.6448 12.4042 6.57256 13.332C7.50033 14.2598 8.62691 14.7237 9.95229 14.7237Z" })
    ]
  }
), eh = () => {
  const [e, t] = U(""), { dictionary: r } = S(), { t: o } = B(), n = () => {
    oo.setState({ isSearchOpen: !1 });
  }, a = () => {
    S.setState({ dictionary: { ...r, isActive: !0, word: e.trim() } });
  };
  return /* @__PURE__ */ i("div", { className: "flex w-full items-center gap-4", children: [
    /* @__PURE__ */ i(
      "input",
      {
        autofocus: !0,
        onKeyDown: (l) => {
          l.key === "Enter" && e.trim().length >= 3 && a();
        },
        className: "h-10 w-full rounded-full border-1 px-4 outline-1 outline-primary placeholder:text-sm focus:border-primary focus:outline-solid",
        placeholder: o("al.dictionary.search"),
        type: "text",
        value: e,
        onInput: (l) => t(l.currentTarget.value)
      }
    ),
    /* @__PURE__ */ i(
      fe,
      {
        disabled: e.trim().length < 3,
        onClick: a,
        title: o("al.dictionary.search"),
        "aria-label": o("al.dictionary.search"),
        className: "group ml-auto aspect-square h-10 rounded-full bg-primary",
        children: /* @__PURE__ */ i(P2, { className: "fill-primary-foreground", iconTitle: o("al.dictionary.search"), size: 20 })
      }
    ),
    /* @__PURE__ */ i(
      fe,
      {
        onClick: n,
        title: o("al.close"),
        "aria-label": o("al.close"),
        className: "group ml-auto aspect-square h-10 rounded-full border-1 hover:border-destructive/20 hover:bg-destructive/10 hover:[&>svg]:fill-destructive",
        children: /* @__PURE__ */ i(Kt, { className: "fill-muted-foreground group-hover:fill-foreground", iconTitle: o("al.close"), size: 20 })
      }
    )
  ] });
}, th = () => {
  const { t: e } = B(), { dictionary: t } = S(), { data: r, isFetching: o, isSearchOpen: n } = oo(), [a, s] = U(!1);
  P(() => {
    eo();
  }, [r]), P(() => {
    const p = Be("[vw-access-button]");
    s(!!p);
  }, []);
  const l = () => {
    oo.setState({ isSearchOpen: !0 });
  }, c = (p) => {
    Xt.setState({
      isActive: !0,
      event: p,
      onClick: () => {
        const u = Be("[vw-access-button]");
        u ? u.click() : alert("VLibras Widget não encontrado!");
      },
      render: /* @__PURE__ */ i(Ce, { children: "Abrir VLibras Widget" })
    });
  }, d = Et(() => {
    var h, f, C;
    const u = `${(((h = r == null ? void 0 : r.definitions) == null ? void 0 : h.length) || 0) > 1 ? "Definições" : "Definição"} de ${r == null ? void 0 : r.title}: ${(C = (f = r == null ? void 0 : r.definitions) == null ? void 0 : f.slice(0, 5)) == null ? void 0 : C.join(". ")}`;
    br(r ? u : e(t != null && t.word ? "dictionary.no_result" : "dictionary.select_word"));
  }, [r, e, t == null ? void 0 : t.word]);
  return /* @__PURE__ */ i("div", { className: H(o && "pointer-events-none opacity-50", "flex items-center gap-4 border-t-1 p-4"), children: [
    !n && /* @__PURE__ */ i(Ce, { children: [
      /* @__PURE__ */ i(
        fe,
        {
          disabled: !a,
          "aria-label": e("al.definition_to_libras"),
          onClick: c,
          className: "hidden h-10 rounded-md bg-primary px-4 text-primary-foreground hover:brightness-90",
          children: [
            /* @__PURE__ */ i(Ra, { "aria-hidden": "true", size: 20 }),
            e("definition_to_libras")
          ]
        }
      ),
      /* @__PURE__ */ i(
        Wt,
        {
          arrow: { position: "bottom-left", className: "bg-popover border-1" },
          align: "start",
          className: "w-72",
          placement: "top",
          content: Cr ? void 0 : e("speech_is_not_supported"),
          children: /* @__PURE__ */ i(
            fe,
            {
              disabled: !Cr,
              "aria-label": e("al.read_definition"),
              onClick: d,
              className: H(
                r ? "px-4" : "aspect-square",
                "h-10 rounded-full bg-primary text-primary-foreground hover:brightness-90"
              ),
              children: [
                /* @__PURE__ */ i(Zo, { size: 18 }),
                r && e("read_definition")
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ i(
        fe,
        {
          variant: "ghost",
          onClick: l,
          title: e("al.dictionary.search"),
          "aria-label": e("al.dictionary.search"),
          className: "group ml-auto h-10 rounded-full px-4",
          children: [
            /* @__PURE__ */ i(
              P2,
              {
                className: "fill-muted-foreground group-hover:fill-foreground",
                iconTitle: e("al.dictionary.search"),
                size: 18
              }
            ),
            e("al.dictionary.search").split(" ")[0]
          ]
        }
      )
    ] }),
    n && /* @__PURE__ */ i(eh, {})
  ] });
}, rh = () => {
  var u;
  const [e, t] = U("bottom"), { toggle: r } = x2(), { dictionary: o, position: n } = S(), { t: a } = B(), { data: s, isLoading: l, error: c } = ep(
    Et(() => aa((o == null ? void 0 : o.word) || ""), [o == null ? void 0 : o.word])
  );
  P(() => {
    oo.setState({ data: s, isFetching: l });
  }, [s, l]);
  const d = () => {
    t(e === "top" ? "bottom" : "top");
  }, p = !!s && (o == null ? void 0 : o.word) !== (s == null ? void 0 : s.title);
  return c && console.error(c), /* @__PURE__ */ i(
    "div",
    {
      style: { boxShadow: "2px 2px 15px -5px rgba(0, 0, 0, .2)" },
      className: H(
        "fixed z-[2147483647] animate-move-up rounded-xl border-1 bg-background transition-all max-sm:right-2 max-sm:left-2 sm:w-lg",
        e === "top" ? "top-2" : "bottom-2",
        n === "left" ? "right-2" : "left-2"
      ),
      children: [
        /* @__PURE__ */ i("div", { className: "flex w-full justify-between gap-2 border-b-1 p-4", children: [
          ((u = o == null ? void 0 : o.word) == null ? void 0 : u.trim()) && /* @__PURE__ */ i("p", { className: "line-clamp-2 break-all pt-2 font-semibold text-xl leading-none", children: [
            /* @__PURE__ */ i(Yc, { size: 24, className: "-top-1 relative mr-2 inline", "aria-hidden": "true" }),
            nc(o.word),
            " ",
            p && /* @__PURE__ */ i("span", { className: "font-medium text-muted-foreground text-sm", children: [
              "(",
              s == null ? void 0 : s.title,
              ")"
            ] })
          ] }),
          !(o != null && o.word) && /* @__PURE__ */ i("p", { className: "pt-1", children: a("dictionary.select_word") }),
          /* @__PURE__ */ i(
            fe,
            {
              title: a(e === "top" ? "move_bottom" : "move_top"),
              "aria-label": a(e === "top" ? "move_bottom" : "move_top"),
              onClick: d,
              className: "[&>svg]:not-hover:!fill-muted-foreground ml-auto aspect-square size-9 rounded-md hover:bg-muted",
              children: e === "top" ? /* @__PURE__ */ i(Lp, { pointerEvents: "none", size: 22 }) : /* @__PURE__ */ i(Sp, { pointerEvents: "none", size: 22 })
            }
          ),
          /* @__PURE__ */ i(
            fe,
            {
              className: "aspect-square size-9 rounded-md bg-destructive fill-destructive-foreground hover:brightness-90",
              title: a("dictionary.close"),
              onClick: () => r(!1),
              children: /* @__PURE__ */ i(Kt, { "aria-hidden": "true", size: 22, iconTitle: a("dictionary.close") })
            }
          )
        ] }),
        (o == null ? void 0 : o.word) && /* @__PURE__ */ i("div", { className: "max-h-[32dvh] overflow-hidden overflow-y-auto p-4", children: [
          l && /* @__PURE__ */ i(K4, {}),
          s && !l && /* @__PURE__ */ i(Q4, {}),
          !s && !l && /* @__PURE__ */ i("p", { className: "py-8 text-center", children: [
            a("dictionary.no_result"),
            "..."
          ] })
        ] }),
        /* @__PURE__ */ i(th, {})
      ]
    }
  );
}, oh = () => {
  const { brightness: e } = S();
  return e ? /* @__PURE__ */ i(
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
}, ih = () => {
  const { nightFilter: e } = S();
  return e ? /* @__PURE__ */ i(
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
}, nh = () => {
  const { t: e } = B(), [t, r] = U([]);
  return P(() => {
    st("h1, h2, h3, h4, h5, h6").forEach((o, n) => {
      let a = o.id;
      const s = o.textContent;
      a || (a = `vwp_t${n}`, o.id = a), a && s && r((l) => [...l, { id: a, title: s, tag: o.tagName }]);
    });
  }, []), /* @__PURE__ */ i("ul", { className: "flex w-full animate-move-left flex-col p-4 pt-0", children: [
    t.length === 0 && /* @__PURE__ */ i("p", { className: "text-muted-foreground text-sm", children: e("structure.no_results") }),
    t.length > 0 && t.map((o, n, a) => {
      const s = a[n - 1], l = Number((s == null ? void 0 : s.tag[1]) || 0), c = Number(o.tag[1]);
      return /* @__PURE__ */ i("li", { style: { paddingLeft: l >= c ? 0 : l * 10 }, children: /* @__PURE__ */ i(
        "a",
        {
          href: `#${o.id}`,
          className: H(
            "group relative flex w-full gap-2 rounded-md px-3 py-2 hover:bg-primary/10 hover:*:text-primary hover:dark:bg-primary/5"
          ),
          children: [
            /* @__PURE__ */ i("span", { className: "mr-1 pt-0.5 font-bold text-muted-foreground text-sm", children: o.tag }),
            /* @__PURE__ */ i("p", { className: "line-clamp-2 break-words text-base group-hover:underline", children: o.title })
          ]
        }
      ) }, o.id);
    })
  ] });
}, ah = () => {
  const { t: e } = B(), [t, r] = U([]);
  return P(() => {
    const o = st("main, section, nav, form, footer, header"), n = [];
    o.forEach((a, s) => {
      var h, f;
      let l = a.id;
      l || (l = `vwp_s${s}`, a.id = l);
      let c = 0, d = a.parentElement;
      for (; d; )
        ["MAIN", "SECTION", "NAV", "FORM", "FOOTER", "HEADER"].includes(d.tagName) && c++, d = d.parentElement;
      const p = Array.from(a.querySelectorAll("h1, h2, h3, h4, h5, h6")).find((C) => {
        let b = C.parentElement;
        for (; b && b !== a; ) {
          if (["MAIN", "SECTION", "NAV", "FORM", "FOOTER", "HEADER"].includes(b.tagName)) return !1;
          b = b.parentElement;
        }
        return !0;
      }), u = (f = (h = p == null ? void 0 : p.textContent) == null ? void 0 : h.trim()) == null ? void 0 : f.replace(/\s+/g, " ");
      n.push({ id: l, tag: a.tagName.toLowerCase(), depth: c, title: u });
    }), r(n);
  }, []), /* @__PURE__ */ i("ul", { className: "flex w-full animate-move-left flex-col p-4 pt-0", children: [
    !t.length && /* @__PURE__ */ i("p", { className: "text-muted-foreground text-sm", children: e("structure.no_results") }),
    t.map((o) => /* @__PURE__ */ i("li", { style: { paddingLeft: `${o.depth * 16}px` }, children: /* @__PURE__ */ i(
      "a",
      {
        href: `#${o.id}`,
        className: H(
          "group flex w-full gap-2 rounded-md px-3 py-2 text-sm hover:bg-primary/10 hover:dark:bg-primary/5"
        ),
        children: [
          /* @__PURE__ */ i("span", { className: "pt-1 font-bold font-mono text-muted-foreground text-xs group-hover:text-primary", children: "</>" }),
          /* @__PURE__ */ i("p", { className: "line-clamp-2 font-semibold text-foreground group-hover:text-primary group-hover:underline", children: [
            o.tag,
            " ",
            o.title && /* @__PURE__ */ i("span", { className: "font-normal text-muted-foreground group-hover:text-primary", children: [
              "- ",
              o.title
            ] })
          ] })
        ]
      }
    ) }, o.id))
  ] });
}, sh = () => {
  const { t: e } = B(), [t, r] = U([]);
  return P(() => {
    st("a").forEach((o) => {
      const n = o.textContent, a = o.href;
      n != null && n.trim() && r((s) => [...s, { title: n, href: a }]);
    });
  }, []), /* @__PURE__ */ i("ul", { className: "flex w-full animate-move-left flex-col p-4 pt-0", children: [
    t.length === 0 && /* @__PURE__ */ i("p", { className: "text-muted-foreground text-sm", children: e("structure.no_results") }),
    t.length > 0 && t.map((o, n) => /* @__PURE__ */ i(
      "a",
      {
        href: o.href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: H(
          "group relative flex w-full gap-2 rounded-md px-3 py-2 hover:bg-primary/10 hover:*:text-primary hover:dark:bg-primary/5"
        ),
        children: [
          /* @__PURE__ */ i(Xc, { className: "relative mt-1 size-4 min-h-4 min-w-4 fill-muted-foreground group-hover:fill-primary" }),
          /* @__PURE__ */ i("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ i("p", { className: "-mt-0.5 line-clamp-2 break-words text-base group-hover:underline", children: o.title }),
            /* @__PURE__ */ i("span", { className: "line-clamp-1 break-all text-muted-foreground text-xs group-hover:text-primary", children: o.href })
          ] }),
          /* @__PURE__ */ i(t2, { className: "invisible mt-1 ml-auto size-4 w-4 min-w-4 group-hover:visible" })
        ]
      },
      `vwp_l${n}`
    ))
  ] });
}, lh = ["titles", "sections", "links"], ch = () => {
  const e = xe(null), { t } = B(), { toggle: r } = k2(), { position: o } = S(), [n, a] = U("titles"), s = jo("(max-height: 600px)");
  return P(() => {
    var l;
    return (l = e == null ? void 0 : e.current) == null ? void 0 : l.focus();
  }, []), /* @__PURE__ */ i(
    "div",
    {
      style: { boxShadow: "2px 2px 15px -5px rgba(0, 0, 0, .2)" },
      className: H(
        "fixed z-[2147483647] flex flex-col overflow-hidden transition-all max-sm:right-2 max-sm:left-2",
        "bottom-2 animate-move-up rounded-xl border-1 bg-background sm:w-md",
        o === "left" ? "right-2" : "left-2",
        s && "top-2"
      ),
      children: [
        /* @__PURE__ */ i("div", { className: "flex w-full items-center justify-between gap-2 border-b-1 p-4", children: [
          /* @__PURE__ */ i("p", { className: "font-bold text-lg", children: t("page_structure") }),
          /* @__PURE__ */ i(
            fe,
            {
              className: "aspect-square size-9 rounded-md bg-destructive fill-destructive-foreground hover:brightness-90",
              title: t("dictionary.close"),
              onClick: () => r(!1),
              children: /* @__PURE__ */ i(Kt, { "aria-hidden": "true", size: 22, iconTitle: t("dictionary.close") })
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "group m-4 flex w-fit items-center rounded-full border-1 p-1", children: lh.map((l) => /* @__PURE__ */ i(
          fe,
          {
            "aria-label": t(`structure.${l}`),
            ref: l === "titles" ? e : void 0,
            className: H(
              "h-7 w-full rounded-full border-1 border-transparent px-4 font-medium text-foreground text-sm hover:underline",
              l === n && "!bg-primary !text-primary-foreground pointer-events-none"
            ),
            onClick: () => a(l),
            children: t(`structure.${l}`)
          },
          l
        )) }),
        /* @__PURE__ */ i("div", { className: H("h-[60dvh] w-full overflow-y-auto ", s && "h-full"), children: [
          n === "titles" && /* @__PURE__ */ i(nh, {}),
          n === "sections" && /* @__PURE__ */ i(ah, {}),
          n === "links" && /* @__PURE__ */ i(sh, {})
        ] })
      ]
    }
  );
}, dh = () => {
  const { describeImage: e } = S(), { x: t, y: r } = Fo();
  return /* @__PURE__ */ i(
    "div",
    {
      style: { left: t + 16, top: r + 16 },
      className: H(
        "fixed z-[2147483647] max-w-md rounded-md border-2 border-white/20 bg-black/90 px-4 py-2 text-white text-xl",
        !(e != null && e.alt) && "hidden"
      ),
      children: e == null ? void 0 : e.alt
    }
  );
}, uh = () => {
  const { contentZoom: e } = S(), { x: t, y: r } = Fo();
  return /* @__PURE__ */ i(
    "div",
    {
      style: { left: t + 52, top: r },
      className: H(
        "fixed z-[2147483647] max-w-xl rounded-md border-2 border-white/20 bg-black/90 px-4 py-2 text-2xl text-white",
        !(e != null && e.content) && "hidden"
      ),
      children: e == null ? void 0 : e.content
    }
  );
}, ph = () => {
  const { readingMask: e, readingGuide: t, dictionary: r, describeImage: o, contentZoom: n, pageStructure: a, brightness: s, nightFilter: l } = S(), { isActive: c } = Xt();
  return /* @__PURE__ */ i(Ce, { children: [
    e && /* @__PURE__ */ i(U4, {}),
    t && /* @__PURE__ */ i(j4, {}),
    c && /* @__PURE__ */ i(Z4, {}),
    (r == null ? void 0 : r.isActive) && /* @__PURE__ */ i(rh, {}),
    s && /* @__PURE__ */ i(oh, {}),
    l && /* @__PURE__ */ i(ih, {}),
    a && /* @__PURE__ */ i(ch, {}),
    (o == null ? void 0 : o.isActive) && /* @__PURE__ */ i(dh, {}),
    (n == null ? void 0 : n.isActive) && /* @__PURE__ */ i(uh, {})
  ] });
}, { shadowRoot: dr } = Sa(), hh = () => {
  const e = xe(), t = S.getState, { setIsExpanded: r, voiceCommands: o } = S(), { open: n } = qt(), a = [
    {
      commands: ["expandir vw", "expandir widget", "aumentar vw", "aumentar widget"],
      run: () => r(!0)
    },
    {
      commands: ["diminuir vw", "diminuir widget"],
      run: () => r(!1)
    },
    {
      commands: ["resetar vw", "resetar widget"],
      run: () => S.getState().reset()
    },
    {
      commands: ["abrir configurações"],
      run: () => n("settings"),
      isDisabled: () => !qt.getState().main
    },
    {
      commands: ["fechar configurações", "tela inicial"],
      run: () => n("main"),
      isDisabled: () => !!qt.getState().main
    },
    {
      commands: ["ativar cursor grande"],
      run: () => S.setState({ largeCursor: !0 })
    },
    {
      commands: ["ativar modo leitor", "modo leitor"],
      run: () => S.setState({ readerMode: !0 }),
      isDisabled: () => !!t().readerMode
    },
    {
      commands: ["desativar modo leitor"],
      run: () => S.setState({ readerMode: void 0 }),
      isDisabled: () => !t().readerMode
    },
    {
      commands: ["destaque de títulos", "destacar títulos", "ativar destaque de títulos", "títulos destacados"],
      run: () => S.setState({ highlightTitles: !0 }),
      isDisabled: () => !!t().highlightTitles
    },
    {
      commands: ["destaque de títulos", "desativar destaque de títulos", "desativar destacar títulos"],
      run: () => S.setState({ highlightTitles: void 0 }),
      isDisabled: () => !t().highlightTitles
    },
    {
      commands: ["aumentar fonte", "aumentar texto"],
      run: () => {
        var l;
        return (l = Be("#vwp-fs", dr)) == null ? void 0 : l.click();
      }
    },
    {
      commands: ["aumentar espaçamento entre linhas", "aumentar espaço entre linhas", "aumentar espaço de linhas"],
      run: () => {
        var l;
        return (l = Be("#vwp-lis", dr)) == null ? void 0 : l.click();
      },
      distance: 0.1
    },
    {
      commands: ["aumentar espaçamento entre letras", "aumentar espaço entre letras", "aumentar espaço de letras"],
      run: () => {
        var l;
        return (l = Be("#vwp-les", dr)) == null ? void 0 : l.click();
      },
      distance: 0.1
    },
    {
      commands: ["fonte para dislexia", "fonte dislexia"],
      run: () => {
        var l;
        return (l = Be("#vwp-dy", dr)) == null ? void 0 : l.click();
      }
    },
    {
      commands: ["alterar saturação", "mudar saturação"],
      run: () => {
        var l;
        return (l = Be("#vwp-sat", dr)) == null ? void 0 : l.click();
      }
    },
    {
      commands: ["ativar estrutura da página", "estrutura da página"],
      run: () => S.setState({ pageStructure: !0 }),
      isDisabled: () => !!t().pageStructure
    },
    {
      commands: ["fechar estrutura da página", "desativar estrutura da página", "estrutura da página"],
      run: () => S.setState({ pageStructure: void 0 }),
      isDisabled: () => !t().pageStructure
    },
    {
      commands: ["resetar saturação"],
      run: () => S.setState({ saturation: void 0 })
    },
    {
      commands: ["desativar fonte para dislexia", "desativar fonte dislexia"],
      run: () => S.setState({ dyslexicFont: void 0 })
    },
    {
      commands: ["filtro noturno"],
      run: () => {
        var l;
        return (l = Be("#vwp-nf", dr)) == null ? void 0 : l.click();
      }
    },
    {
      commands: ["desativar filtro noturno"],
      run: () => S.setState({ nightFilter: void 0 }),
      isDisabled: () => !t().nightFilter
    }
  ];
  P(() => {
    var c, d;
    if (!c6) return;
    e.current || (e.current = l6({ onResult: s })), o ? (c = e.current) == null || c.start() : (d = e.current) == null || d.stop();
    const l = setInterval(() => {
      var p, u;
      try {
        if (o) return (p = e.current) == null ? void 0 : p.start();
        (u = e.current) == null || u.stop(), clearInterval(l);
      } catch {
      }
    }, 2e3);
    return () => {
      var p;
      clearInterval(l), (p = e.current) == null || p.stop();
    };
  }, [o]);
  const s = Et((l) => {
    const c = l.toLowerCase().replace(/[.!?]/g, "").trim();
    for (const d of a.filter((p) => {
      var u;
      return !((u = p.isDisabled) != null && u.call(p));
    }))
      d.commands.some((u) => {
        const h = Math.max(u.length, c.length), f = O5(u, c), C = Math.floor(h * (d.distance ?? 0.2));
        return f <= C;
      }) && d.run();
  }, []);
  return null;
}, gh = `/*! tailwindcss v4.1.8 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-orange-50:oklch(98% .016 73.684);--color-orange-600:oklch(64.6% .222 41.116);--color-green-50:oklch(98.2% .018 155.826);--color-green-600:oklch(62.7% .194 149.214);--color-blue-50:oklch(97% .014 254.604);--color-blue-600:oklch(54.6% .245 262.881);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs--line-height:calc(1/.75);--text-sm--line-height:calc(1.25/.875);--text-base--line-height: 1.5 ;--text-lg--line-height:calc(1.75/1.125);--text-xl--line-height:calc(1.75/1.25);--text-2xl--line-height:calc(2/1.5);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-normal:0em;--leading-tight:1.25;--leading-snug:1.375;--leading-normal:1.5;--leading-relaxed:1.625;--radius-2xl:1rem;--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-primary:var(--primary);--tw-translate-y:0;--tw-translate-x:0}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*{--tw-border-style:solid;border-style:solid;border-color:var(--border);outline-offset:-1px;outline-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){*{outline-color:color-mix(in oklab,var(--ring)50%,transparent)}}:focus{outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--primary);--tw-outline-style:solid;outline-style:solid}:host{border-color:var(--border);fill:var(--foreground);color:var(--foreground)}:where(:root),:root:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}@media (prefers-color-scheme:dark){:root{color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}}:root:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:root:has(input.theme-controller[value=dark]:checked),[data-theme=dark]{color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open],.modal-open,.modal-toggle:checked+.modal):not(.modal-start,.modal-end){scrollbar-gutter:stable}:root,[data-theme]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}}@layer components;@layer utilities{.modal{pointer-events:none;visibility:hidden;width:100%;max-width:none;height:100%;max-height:none;color:inherit;transition:translate .3s ease-out,visibility .3s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;overscroll-behavior:contain;z-index:999;background-color:#0000;place-items:center;margin:0;padding:0;display:grid;position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden}.modal::backdrop{display:none}.modal.modal-open,.modal[open],.modal:target{pointer-events:auto;visibility:visible;opacity:1;background-color:#0006}:is(.modal.modal-open,.modal[open],.modal:target) .modal-box{opacity:1;translate:0;scale:1}@starting-style{.modal.modal-open,.modal[open],.modal:target{visibility:hidden;opacity:0}}.tooltip{--tt-bg:var(--color-neutral);--tt-off: calc(100% + .5rem) ;--tt-tail: calc(100% + 1px + .25rem) ;display:inline-block;position:relative}.tooltip>:where(.tooltip-content),.tooltip:where([data-tip]):before{border-radius:var(--radius-field);text-align:center;white-space:normal;max-width:20rem;color:var(--color-neutral-content);opacity:0;background-color:var(--tt-bg);pointer-events:none;z-index:2;--tw-content:attr(data-tip);content:var(--tw-content);width:max-content;padding-block:.25rem;padding-inline:.5rem;font-size:.875rem;line-height:1.25;transition:opacity .2s cubic-bezier(.4,0,.2,1) 75ms,transform .2s cubic-bezier(.4,0,.2,1) 75ms;position:absolute}.tooltip:after{opacity:0;background-color:var(--tt-bg);content:"";pointer-events:none;--mask-tooltip:url("data:image/svg+xml,%3Csvg width='10' height='4' viewBox='0 0 8 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.500009 1C3.5 1 3.00001 4 5.00001 4C7 4 6.5 1 9.5 1C10 1 10 0.499897 10 0H0C-1.99338e-08 0.5 0 1 0.500009 1Z' fill='black'/%3E%3C/svg%3E%0A");width:.625rem;height:.25rem;-webkit-mask-position:-1px 0;mask-position:-1px 0;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-image:var(--mask-tooltip);mask-image:var(--mask-tooltip);transition:opacity .2s cubic-bezier(.4,0,.2,1) 75ms,transform .2s cubic-bezier(.4,0,.2,1) 75ms;display:block;position:absolute}:is(.tooltip.tooltip-open,.tooltip[data-tip]:not([data-tip=""]):hover,.tooltip:not(:has(.tooltip-content:empty)):has(.tooltip-content):hover,.tooltip:has(:focus-visible))>.tooltip-content,:is(.tooltip.tooltip-open,.tooltip[data-tip]:not([data-tip=""]):hover,.tooltip:not(:has(.tooltip-content:empty)):has(.tooltip-content):hover,.tooltip:has(:focus-visible))[data-tip]:before,:is(.tooltip.tooltip-open,.tooltip[data-tip]:not([data-tip=""]):hover,.tooltip:not(:has(.tooltip-content:empty)):has(.tooltip-content):hover,.tooltip:has(:focus-visible)):after{opacity:1;--tt-pos:0rem;transition:opacity .2s cubic-bezier(.4,0,.2,1),transform .2s cubic-bezier(.4,0,.2,1)}.tooltip>.tooltip-content,.tooltip[data-tip]:before{transform:translate(-50%)translateY(var(--tt-pos,.25rem));inset:auto auto var(--tt-off)50%}.tooltip:after{transform:translate(-50%)translateY(var(--tt-pos,.25rem));inset:auto auto var(--tt-tail)50%}.tab{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;text-align:center;webkit-user-select:none;-webkit-user-select:none;user-select:none;flex-wrap:wrap;justify-content:center;align-items:center;display:inline-flex;position:relative}@media (hover:hover){.tab:hover{color:var(--color-base-content)}}.tab{--tab-p:1rem;--tab-bg:var(--color-base-100);--tab-border-color:var(--color-base-300);--tab-radius-ss:0;--tab-radius-se:0;--tab-radius-es:0;--tab-radius-ee:0;--tab-order:0;--tab-radius-min:calc(.75rem - var(--border));order:var(--tab-order);height:var(--tab-height);border-color:#0000;padding-inline-start:var(--tab-p);padding-inline-end:var(--tab-p);font-size:.875rem}.tab:is(input[type=radio]){min-width:fit-content}.tab:is(input[type=radio]):after{content:attr(aria-label)}.tab:is(label){position:relative}.tab:is(label) input{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;opacity:0;position:absolute;top:0;right:0;bottom:0;left:0}:is(.tab:checked,.tab:is(label:has(:checked)),.tab:is(.tab-active,[aria-selected=true]))+.tab-content{height:calc(100% - var(--tab-height) + var(--border));display:block}.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:color-mix(in oklab,var(--color-base-content)50%,transparent)}}.tab:not(input):empty{cursor:default;flex-grow:1}.tab:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.tab:focus{outline-offset:2px;outline:2px solid #0000}}.tab:focus-visible,.tab:is(label:has(:checked:focus-visible)){outline-offset:-5px;outline:2px solid}.tab[disabled]{pointer-events:none;opacity:.4}.menu{--menu-active-fg:var(--color-neutral-content);--menu-active-bg:var(--color-neutral);flex-flow:column wrap;width:fit-content;padding:.5rem;font-size:.875rem;display:flex}.menu :where(li ul){white-space:nowrap;margin-inline-start:1rem;padding-inline-start:.5rem;position:relative}.menu :where(li ul):before{background-color:var(--color-base-content);opacity:.1;width:var(--border);content:"";inset-inline-start:0;position:absolute;top:.75rem;bottom:.75rem}.menu :where(li>.menu-dropdown:not(.menu-dropdown-show)){display:none}.menu :where(li:not(.menu-title)>:not(ul,details,.menu-title,.btn)),.menu :where(li:not(.menu-title)>details>summary:not(.menu-title)){border-radius:var(--radius-field);text-align:start;text-wrap:balance;-webkit-user-select:none;user-select:none;grid-auto-columns:minmax(auto,max-content) auto max-content;grid-auto-flow:column;align-content:flex-start;align-items:center;gap:.5rem;padding-block:.375rem;padding-inline:.75rem;transition-property:color,background-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:grid}.menu :where(li>details>summary){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li>details>summary){outline-offset:2px;outline:2px solid #0000}}.menu :where(li>details>summary)::-webkit-details-marker{display:none}:is(.menu :where(li>details>summary),.menu :where(li>.menu-dropdown-toggle)):after{content:"";transform-origin:50%;pointer-events:none;justify-self:flex-end;width:.375rem;height:.375rem;transition-property:rotate,translate;transition-duration:.2s;display:block;translate:0 -1px;rotate:-135deg;box-shadow:inset 2px 2px}.menu :where(li>details[open]>summary):after,.menu :where(li>.menu-dropdown-toggle.menu-dropdown-show):after{translate:0 1px;rotate:45deg}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{color:var(--color-base-content);--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){box-shadow:inset 0 1px #00000003,inset 0 -1px #ffffff03}.menu :where(li:empty){background-color:var(--color-base-content);opacity:.1;height:1px;margin:.5rem 1rem}.menu :where(li){flex-flow:column wrap;flex-shrink:0;align-items:stretch;display:flex;position:relative}.menu :where(li) .badge{justify-self:flex-end}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{outline-offset:2px;outline:2px solid #0000}}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{color:var(--menu-active-fg);background-color:var(--menu-active-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):not(:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):active){box-shadow:0 2px calc(var(--depth)*3px) -2px var(--menu-active-bg)}.menu :where(li).menu-disabled{pointer-events:none;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li).menu-disabled{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.menu .dropdown:focus-within .menu-dropdown-toggle:after{translate:0 1px;rotate:45deg}.menu .dropdown-content{margin-top:.5rem;padding:.5rem}.menu .dropdown-content:before{display:none}.dropdown{position-area:var(--anchor-v,bottom)var(--anchor-h,span-right);display:inline-block;position:relative}.dropdown>:not(summary):focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.dropdown>:not(summary):focus{outline-offset:2px;outline:2px solid #0000}}.dropdown .dropdown-content{position:absolute}.dropdown:not(details,.dropdown-open,.dropdown-hover:hover,:focus-within) .dropdown-content{transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover],.dropdown .dropdown-content{z-index:999;transition-behavior:allow-discrete;transition-property:opacity,scale,display;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);animation:.2s dropdown}@starting-style{.dropdown[popover],.dropdown .dropdown-content{opacity:0;scale:95%}}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within)>[tabindex]:first-child{pointer-events:none}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within) .dropdown-content{opacity:1}.dropdown.dropdown-hover:hover .dropdown-content{opacity:1;scale:100%}.dropdown:is(details) summary::-webkit-details-marker{display:none}:is(.dropdown.dropdown-open,.dropdown:focus,.dropdown:focus-within) .dropdown-content{scale:100%}.dropdown:where([popover]){background:0 0}.dropdown[popover]{color:inherit;position:fixed}@supports not (position-area:bottom){.dropdown[popover]{margin:auto}.dropdown[popover].dropdown-open:not(:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover]::backdrop{background-color:oklab(0% none none/.3)}}.dropdown[popover]:not(.dropdown-open,:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}.prose .btn{text-decoration-line:none}@media (hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible{isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){box-shadow:none}.btn:is(:disabled,[disabled],.btn-disabled){pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled){--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media (hover:hover){.btn:is(:disabled,[disabled],.btn-disabled):hover{pointer-events:none;background-color:var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{background-color:color-mix(in oklab,var(--color-neutral)20%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-border:#0000;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}}.btn:is(input[type=checkbox],input[type=radio]){-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn:is(input[type=checkbox],input[type=radio]):after{content:attr(aria-label)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.loading{pointer-events:none;aspect-ratio:1;vertical-align:middle;width:calc(var(--size-selector,.25rem)*6);background-color:currentColor;display:inline-block;-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:100%;mask-size:100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.\\!pointer-events-none{pointer-events:none!important}.pointer-events-none{pointer-events:none}.collapse:not(td,tr,colgroup){visibility:visible}.collapse{border-radius:var(--radius-box,1rem);isolation:isolate;grid-template-rows:max-content 0fr;width:100%;transition:grid-template-rows .2s;display:grid;position:relative;overflow:hidden}.collapse>input:is([type=checkbox],[type=radio]){-webkit-appearance:none;-moz-appearance:none;appearance:none;opacity:0;z-index:1;grid-row-start:1;grid-column-start:1;width:100%;min-height:1lh;padding:1rem;padding-inline-end:3rem;transition:background-color .2s ease-out}.collapse:is([open],:focus:not(.collapse-close)),.collapse:not(.collapse-close):has(>input:is([type=checkbox],[type=radio]):checked){grid-template-rows:max-content 1fr}.collapse:is([open],:focus:not(.collapse-close))>.collapse-content,.collapse:not(.collapse-close)>:where(input:is([type=checkbox],[type=radio]):checked~.collapse-content){visibility:visible;min-height:fit-content}.collapse:focus-visible,.collapse:has(>input:is([type=checkbox],[type=radio]):focus-visible){outline-color:var(--color-base-content);outline-offset:2px;outline-width:2px;outline-style:solid}.collapse:not(.collapse-close)>input[type=checkbox],.collapse:not(.collapse-close)>input[type=radio]:not(:checked),.collapse:not(.collapse-close)>.collapse-title{cursor:pointer}.collapse:focus:not(.collapse-close,.collapse[open])>.collapse-title{cursor:unset}.collapse:is([open],:focus:not(.collapse-close))>:where(.collapse-content),.collapse:not(.collapse-close)>:where(input:is([type=checkbox],[type=radio]):checked~.collapse-content){padding-bottom:1rem;transition:padding .2s ease-out,background-color .2s ease-out}.collapse[open].collapse-arrow>.collapse-title:after,.collapse.collapse-open.collapse-arrow>.collapse-title:after{transform:translateY(-50%)rotate(225deg)}.collapse.collapse-open.collapse-plus>.collapse-title:after{content:"−"}.collapse.collapse-arrow:focus:not(.collapse-close)>.collapse-title:after,.collapse.collapse-arrow:not(.collapse-close)>input:is([type=checkbox],[type=radio]):checked~.collapse-title:after{transform:translateY(-50%)rotate(225deg)}.collapse[open].collapse-plus>.collapse-title:after,.collapse.collapse-plus:focus:not(.collapse-close)>.collapse-title:after,.collapse.collapse-plus:not(.collapse-close)>input:is([type=checkbox],[type=radio]):checked~.collapse-title:after{content:"−"}.collapse:is(details){width:100%}.collapse:is(details) summary{display:block;position:relative}.collapse:is(details) summary::-webkit-details-marker{display:none}.collapse:is(details) summary{outline:none}.collapse-content{visibility:hidden;min-height:0;cursor:unset;grid-row-start:2;grid-column-start:1;padding-left:1rem;padding-right:1rem;transition:visibility .2s,padding .2s ease-out,background-color .2s ease-out}.collapse{visibility:collapse}.invisible{visibility:hidden}.toggle{border:var(--border)solid currentColor;color:var(--input-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;webkit-user-select:none;-webkit-user-select:none;user-select:none;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--toggle-p),var(--radius-selector-max)) + min(var(--border),var(--radius-selector-max)));padding:var(--toggle-p);flex-shrink:0;grid-template-columns:0fr 1fr 1fr;place-content:center;display:inline-grid;position:relative;box-shadow:inset 0 1px}@supports (color:color-mix(in lab,red,red)){.toggle{box-shadow:0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000) inset}}.toggle{--input-color:var(--color-base-content);transition:color .3s,grid-template-columns .2s}@supports (color:color-mix(in lab,red,red)){.toggle{--input-color:color-mix(in oklab,var(--color-base-content)50%,#0000)}}.toggle{--toggle-p:calc(var(--size)*.125);--size:calc(var(--size-selector,.25rem)*6);width:calc((var(--size)*2) - (var(--border) + var(--toggle-p))*2);height:var(--size)}.toggle>*{z-index:1;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#0000;border:none;grid-column:2/span 1;grid-row-start:1;height:100%;padding:.125rem;transition:opacity .2s,rotate .4s}.toggle>:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.toggle>:focus{outline-offset:2px;outline:2px solid #0000}}.toggle>:nth-child(2){color:var(--color-base-100);rotate:none}.toggle>:nth-child(3){color:var(--color-base-100);opacity:0;rotate:-15deg}.toggle:has(:checked)>:nth-child(2){opacity:0;rotate:15deg}.toggle:has(:checked)>:nth-child(3){opacity:1;rotate:none}.toggle:before{aspect-ratio:1;border-radius:var(--radius-selector);--tw-content:"";content:var(--tw-content);height:100%;box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor;background-color:currentColor;grid-row-start:1;grid-column-start:2;transition:background-color .1s,translate .2s,inset-inline-start .2s;position:relative;inset-inline-start:0;translate:0}@supports (color:color-mix(in lab,red,red)){.toggle:before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000)}}.toggle:before{background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}@media (forced-colors:active){.toggle:before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{.toggle:before{outline-offset:-1rem;outline:.25rem solid}}.toggle:focus-visible,.toggle:has(:focus-visible){outline-offset:2px;outline:2px solid}.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked){background-color:var(--color-base-100);--input-color:var(--color-base-content);grid-template-columns:1fr 1fr 0fr}:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{background-color:currentColor}@starting-style{:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{opacity:0}}.toggle:indeterminate{grid-template-columns:.5fr 1fr .5fr}.toggle:disabled{cursor:not-allowed;opacity:.3}.toggle:disabled:before{border:var(--border)solid currentColor;background-color:#0000}.input{cursor:text;border:var(--border)solid #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=url]),.input :where(input[type=email]){direction:ltr}.input :where(input[type=date]){display:inline-block}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.indicator{width:max-content;display:inline-flex;position:relative}.indicator :where(.indicator-item){z-index:1;white-space:nowrap;top:var(--indicator-t,0);bottom:var(--indicator-b,auto);left:var(--indicator-s,auto);right:var(--indicator-e,0);translate:var(--indicator-x,50%)var(--indicator-y,-50%);position:absolute}.range{-webkit-appearance:none;-moz-appearance:none;appearance:none;webkit-appearance:none;--range-thumb:var(--color-base-100);--range-thumb-size:calc(var(--size-selector,.25rem)*6);--range-progress:currentColor;--range-fill:1;--range-p:.25rem;--range-bg:currentColor}@supports (color:color-mix(in lab,red,red)){.range{--range-bg:color-mix(in oklab,currentColor 10%,#0000)}}.range{cursor:pointer;vertical-align:middle;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));width:clamp(3rem,20rem,100%);height:var(--range-thumb-size);background-color:#0000;border:none;overflow:hidden}[dir=rtl] .range{--range-dir:-1}.range:focus{outline:none}.range:focus-visible{outline-offset:2px;outline:2px solid}.range::-webkit-slider-runnable-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}@media (forced-colors:active){.range::-webkit-slider-runnable-track{border:1px solid}.range::-moz-range-track{border:1px solid}}.range::-webkit-slider-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;-webkit-appearance:none;-moz-appearance:none;appearance:none;webkit-appearance:none;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill));background-color:currentColor;position:relative;top:50%;transform:translateY(-50%)}@supports (color:color-mix(in lab,red,red)){.range::-webkit-slider-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill))}}.range::-moz-range-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}.range::-moz-range-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill));background-color:currentColor;position:relative;top:50%}@supports (color:color-mix(in lab,red,red)){.range::-moz-range-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill))}}.range:disabled{cursor:not-allowed;opacity:.3}.collapse-title{grid-row-start:1;grid-column-start:1;width:100%;min-height:1lh;padding:1rem;padding-inline-end:3rem;transition:background-color .2s ease-out;position:relative}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.checkbox{border:var(--border)solid var(--input-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.checkbox{border:var(--border)solid var(--input-color,color-mix(in oklab,var(--color-base-content)20%,#0000))}}.checkbox{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:var(--radius-selector);vertical-align:middle;color:var(--color-base-content);box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 0 #0000 inset,0 0 #0000;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);flex-shrink:0;padding:.25rem;transition:background-color .2s,box-shadow .2s;display:inline-block;position:relative}.checkbox:before{--tw-content:"";content:var(--tw-content);opacity:0;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,70% 80%,70% 100%);width:100%;height:100%;box-shadow:0 3px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-color:currentColor;font-size:1rem;line-height:.75;transition:clip-path .3s .1s,opacity .1s .1s,rotate .3s .1s,translate .3s .1s;display:block;rotate:45deg}.checkbox:focus-visible{outline:2px solid var(--input-color,currentColor);outline-offset:2px}.checkbox:checked,.checkbox[aria-checked=true]{background-color:var(--input-color,#0000);box-shadow:0 0 #0000 inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1))}:is(.checkbox:checked,.checkbox[aria-checked=true]):before{clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 0%,70% 0%,70% 100%);opacity:1}@media (forced-colors:active){:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}@media print{:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}.checkbox:indeterminate:before{opacity:1;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,80% 80%,80% 100%);translate:0 -35%;rotate:none}.checkbox:disabled{cursor:not-allowed;opacity:.2}.radio{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;border:var(--border)solid var(--input-color,currentColor);border-radius:3.40282e38px;flex-shrink:0;padding:.25rem;display:inline-block;position:relative}@supports (color:color-mix(in lab,red,red)){.radio{border:var(--border)solid var(--input-color,color-mix(in srgb,currentColor 20%,#0000))}}.radio{box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);color:var(--input-color,currentColor)}.radio:before{--tw-content:"";content:var(--tw-content);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);border-radius:3.40282e38px;width:100%;height:100%;display:block}.radio:focus-visible{outline:2px solid}.radio:checked,.radio[aria-checked=true]{background-color:var(--color-base-100);border-color:currentColor;animation:.2s ease-out radio}:is(.radio:checked,.radio[aria-checked=true]):before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1));background-color:currentColor}@media (forced-colors:active){:is(.radio:checked,.radio[aria-checked=true]):before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{:is(.radio:checked,.radio[aria-checked=true]):before{outline-offset:-1rem;outline:.25rem solid}}.radio:disabled{cursor:not-allowed;opacity:.2}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.\\!inset-0{inset:calc(var(--spacing)*0)!important}.inset-0{inset:calc(var(--spacing)*0)}.inset-2{inset:calc(var(--spacing)*2)}.inset-4{inset:calc(var(--spacing)*4)}.dropdown-end{--anchor-h:span-left}.dropdown-end :where(.dropdown-content){inset-inline-end:0;translate:0}.dropdown-end.dropdown-left{--anchor-h:left;--anchor-v:span-top}.dropdown-end.dropdown-left .dropdown-content{top:auto;bottom:0}.dropdown-end.dropdown-right{--anchor-h:right;--anchor-v:span-top}.dropdown-end.dropdown-right .dropdown-content{top:auto;bottom:0}.\\!top-auto{top:auto!important}.-top-0\\.5{top:calc(var(--spacing)*-.5)}.-top-1{top:calc(var(--spacing)*-1)}.-top-2\\.5{top:calc(var(--spacing)*-2.5)}.-top-3\\.5{top:calc(var(--spacing)*-3.5)}.-top-4{top:calc(var(--spacing)*-4)}.-top-\\[1px\\]{top:-1px}.-top-\\[3px\\]{top:-3px}.-top-\\[13\\.444px\\]{top:-13.444px}.-top-px{top:-1px}.top-0{top:calc(var(--spacing)*0)}.top-0\\.5{top:calc(var(--spacing)*.5)}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing)*2)}.top-3{top:calc(var(--spacing)*3)}.top-4{top:calc(var(--spacing)*4)}.top-\\[calc\\(15dvh-24px\\)\\]{top:calc(15dvh - 24px)}.top-auto{top:auto}.\\!right-0{right:calc(var(--spacing)*0)!important}.\\!right-auto{right:auto!important}.-right-6{right:calc(var(--spacing)*-6)}.right-0{right:calc(var(--spacing)*0)}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5{right:calc(var(--spacing)*2.5)}.right-4{right:calc(var(--spacing)*4)}.right-auto{right:auto}.-bottom-4{bottom:calc(var(--spacing)*-4)}.-bottom-5{bottom:calc(var(--spacing)*-5)}.-bottom-\\[13\\.444px\\]{bottom:-13.444px}.-bottom-\\[100dvh\\]{bottom:-100dvh}.bottom-0{bottom:calc(var(--spacing)*0)}.bottom-0\\.5{bottom:calc(var(--spacing)*.5)}.bottom-2{bottom:calc(var(--spacing)*2)}.bottom-3{bottom:calc(var(--spacing)*3)}.bottom-3\\.5{bottom:calc(var(--spacing)*3.5)}.bottom-4{bottom:calc(var(--spacing)*4)}.\\!left-0{left:calc(var(--spacing)*0)!important}.\\!left-auto{left:auto!important}.-left-4{left:calc(var(--spacing)*-4)}.left-0{left:calc(var(--spacing)*0)}.left-1{left:calc(var(--spacing)*1)}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing)*2)}.left-4{left:calc(var(--spacing)*4)}.left-5{left:calc(var(--spacing)*5)}.left-\\[calc\\(50dvw-36rem\\/2\\)\\]{left:calc(50dvw - 18rem)}.left-auto{left:auto}.textarea{border:var(--border)solid #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:var(--radius-field);background-color:var(--color-base-100);vertical-align:middle;touch-action:manipulation;border-color:var(--input-color);width:clamp(3rem,20rem,100%);min-height:5rem;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;flex-shrink:1;padding-block:.5rem;padding-inline:.75rem;font-size:.875rem}@supports (color:color-mix(in lab,red,red)){.textarea{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.textarea{--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.textarea{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.textarea textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#0000;border:none}.textarea textarea:focus,.textarea textarea:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.textarea textarea:focus,.textarea textarea:focus-within{outline-offset:2px;outline:2px solid #0000}}.textarea:focus,.textarea:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.textarea:focus,.textarea:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.textarea:focus,.textarea:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate}.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){box-shadow:none}.textarea:has(>textarea[disabled])>textarea[disabled]{cursor:not-allowed}.modal-backdrop{color:#0000;z-index:-1;grid-row-start:1;grid-column-start:1;place-self:stretch stretch;display:grid}.modal-backdrop button{cursor:pointer}.\\!z-0{z-index:0!important}.-z-0{z-index:-0}.-z-50{z-index:-50}.-z-\\[1\\]{z-index:-1}.-z-\\[2\\]{z-index:-2}.z-10{z-index:10}.z-50{z-index:50}.z-\\[1\\]{z-index:1}.z-\\[2147483646\\]{z-index:2147483646}.z-\\[2147483647\\]{z-index:2147483647}.col-auto{grid-column:auto}.col-span-full{grid-column:1/-1}.m-4{margin:calc(var(--spacing)*4)}.filter{flex-wrap:wrap;display:flex}.filter input[type=radio]{width:auto}.filter input{opacity:1;transition:margin .1s,opacity .3s,padding .3s,border-width .1s;overflow:hidden;scale:1}.filter input:not(:last-child){margin-inline-end:.25rem}.filter input.filter-reset{aspect-ratio:1}.filter input.filter-reset:after{content:"×"}.filter:not(:has(input:checked:not(.filter-reset))) .filter-reset,.filter:not(:has(input:checked:not(.filter-reset))) input[type=reset],.filter:has(input:checked:not(.filter-reset)) input:not(:checked,.filter-reset,input[type=reset]){opacity:0;border-width:0;width:0;margin-inline:0;padding-inline:0;scale:0}.my-1{margin-block:calc(var(--spacing)*1)}.label{white-space:nowrap;color:currentColor;align-items:center;gap:.375rem;display:inline-flex}@supports (color:color-mix(in lab,red,red)){.label{color:color-mix(in oklab,currentColor 60%,transparent)}}.label:has(input){cursor:pointer}.label:is(.input>*,.select>*){white-space:nowrap;height:calc(100% - .5rem);font-size:inherit;align-items:center;padding-inline:.75rem;display:flex}.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid currentColor;margin-inline:-.75rem .75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid currentColor;margin-inline:.75rem -.75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.-mt-0\\.5{margin-top:calc(var(--spacing)*-.5)}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\.5{margin-top:calc(var(--spacing)*2.5)}.mt-3\\.5{margin-top:calc(var(--spacing)*3.5)}.-mr-2{margin-right:calc(var(--spacing)*-2)}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-1\\.5{margin-right:calc(var(--spacing)*1.5)}.mr-2{margin-right:calc(var(--spacing)*2)}.fieldset-legend{color:var(--color-base-content);justify-content:space-between;align-items:center;gap:.5rem;margin-bottom:-.25rem;padding-block:.5rem;font-weight:600;display:flex}.-mb-3{margin-bottom:calc(var(--spacing)*-3)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\.5{margin-bottom:calc(var(--spacing)*3.5)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.-ml-2{margin-left:calc(var(--spacing)*-2)}.ml-1{margin-left:calc(var(--spacing)*1)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-auto{margin-left:auto}.badge{border-radius:var(--radius-selector);vertical-align:middle;color:var(--badge-fg);border:var(--border)solid var(--badge-color,var(--color-base-200));width:fit-content;padding-inline:calc(.25rem*3 - var(--border));background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);background-color:var(--badge-bg);--badge-bg:var(--badge-color,var(--color-base-100));--badge-fg:var(--color-base-content);--size:calc(var(--size-selector,.25rem)*6);height:var(--size);justify-content:center;align-items:center;gap:.5rem;font-size:.875rem;display:inline-flex}.tabs{--tabs-height:auto;--tabs-direction:row;--tab-height:calc(var(--size-field,.25rem)*10);height:var(--tabs-height);flex-wrap:wrap;flex-direction:var(--tabs-direction);display:flex}.footer{grid-auto-flow:row;place-items:start;gap:2.5rem 1rem;width:100%;font-size:.875rem;line-height:1.25rem;display:grid}.footer>*{place-items:start;gap:.5rem;display:grid}.footer.footer-center{text-align:center;grid-auto-flow:column dense;place-items:center}.footer.footer-center>*{place-items:center}.alert{border-radius:var(--radius-box);color:var(--color-base-content);background-color:var(--alert-color,var(--color-base-200));text-align:start;border:var(--border)solid var(--color-base-200);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px #000,0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08));grid-template-columns:auto;grid-auto-flow:column;justify-content:start;place-items:center start;gap:1rem;padding-block:.75rem;padding-inline:1rem;font-size:.875rem;line-height:1.25rem;display:grid}@supports (color:color-mix(in lab,red,red)){.alert{box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px color-mix(in oklab,color-mix(in oklab,#000 20%,var(--alert-color,var(--color-base-200)))calc(var(--depth)*20%),#0000),0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08))}}.alert:has(:nth-child(2)){grid-template-columns:auto minmax(auto,1fr)}.alert.alert-outline{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none}.alert.alert-dash{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none;border-style:dashed}.alert.alert-soft{color:var(--alert-color,var(--color-base-content));background:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{background:color-mix(in oklab,var(--alert-color,var(--color-base-content))8%,var(--color-base-100))}}.alert.alert-soft{border-color:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{border-color:color-mix(in oklab,var(--alert-color,var(--color-base-content))10%,var(--color-base-100))}}.alert.alert-soft{box-shadow:none;background-image:none}.fieldset{grid-template-columns:1fr;grid-auto-rows:max-content;gap:.375rem;padding-block:.25rem;font-size:.75rem;display:grid}.line-clamp-1{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.mask{vertical-align:middle;display:inline-block;-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.aspect-square{aspect-ratio:1}.size-2{width:calc(var(--spacing)*2);height:calc(var(--spacing)*2)}.size-3\\.5{width:calc(var(--spacing)*3.5);height:calc(var(--spacing)*3.5)}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-4\\.5{width:calc(var(--spacing)*4.5);height:calc(var(--spacing)*4.5)}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.size-7{width:calc(var(--spacing)*7);height:calc(var(--spacing)*7)}.size-8{width:calc(var(--spacing)*8);height:calc(var(--spacing)*8)}.size-9{width:calc(var(--spacing)*9);height:calc(var(--spacing)*9)}.size-10{width:calc(var(--spacing)*10);height:calc(var(--spacing)*10)}.\\!h-\\[calc\\(15dvh-32px\\)\\]{height:calc(15dvh - 32px)!important}.\\!h-\\[calc\\(85dvh-32px\\)\\]{height:calc(85dvh - 32px)!important}.h-2{height:calc(var(--spacing)*2)}.h-4{height:calc(var(--spacing)*4)}.h-4\\.5{height:calc(var(--spacing)*4.5)}.h-7{height:calc(var(--spacing)*7)}.h-8{height:calc(var(--spacing)*8)}.h-9{height:calc(var(--spacing)*9)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.h-14{height:calc(var(--spacing)*14)}.h-16{height:calc(var(--spacing)*16)}.h-28{height:calc(var(--spacing)*28)}.h-36{height:calc(var(--spacing)*36)}.h-64{height:calc(var(--spacing)*64)}.h-\\[60dvh\\]{height:60dvh}.h-\\[75dvh\\]{height:75dvh}.h-\\[calc\\(100\\%-120px\\)\\]{height:calc(100% - 120px)}.h-auto{height:auto}.h-full{height:100%}.max-h-2{max-height:calc(var(--spacing)*2)}.max-h-\\[32dvh\\]{max-height:32dvh}.max-h-\\[calc\\(75dvh-94px\\)\\]{max-height:calc(75dvh - 94px)}.min-h-4{min-height:calc(var(--spacing)*4)}.min-h-full{min-height:100%}.\\!w-auto{width:auto!important}.loading-xs{width:calc(var(--size-selector,.25rem)*4)}.w-4{width:calc(var(--spacing)*4)}.w-8{width:calc(var(--spacing)*8)}.w-12{width:calc(var(--spacing)*12)}.w-32{width:calc(var(--spacing)*32)}.w-64{width:calc(var(--spacing)*64)}.w-72{width:calc(var(--spacing)*72)}.w-\\[1px\\]{width:1px}.w-\\[150px\\]{width:150px}.w-\\[160px\\]{width:160px}.w-fit{width:fit-content}.w-full{width:100%}.w-xl{width:576px}.max-w-52{max-width:calc(var(--spacing)*52)}.max-w-72{max-width:calc(var(--spacing)*72)}.max-w-md{max-width:448px}.max-w-xl{max-width:576px}.min-w-4{min-width:calc(var(--spacing)*4)}.min-w-6{min-width:calc(var(--spacing)*6)}.min-w-8{min-width:calc(var(--spacing)*8)}.min-w-9{min-width:calc(var(--spacing)*9)}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-6{--tw-translate-x:calc(var(--spacing)*-6);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-1\\/2{--tw-translate-x: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-full{--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-full{--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-none{translate:none}.-rotate-90{rotate:-90deg}.rotate-45{rotate:45deg}.rotate-90{rotate:90deg}.rotate-180{rotate:180deg}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-move-left{animation:.2s ease-in-out move-left}.animate-move-right{animation:.2s ease-in-out move-right}.animate-move-up{animation:.2s ease-in-out move-up}.animate-pulse{animation:var(--animate-pulse)}.animate-scale{animation:.2s ease-in-out scale}.animate-spin{animation:var(--animate-spin)}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}.\\!cursor-not-allowed{cursor:not-allowed!important}.cursor-pointer{cursor:pointer}.resize{resize:both}.resize-none{resize:none}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.auto-rows-min{grid-auto-rows:min-content}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-\\[repeat\\(auto-fill\\,minmax\\(148px\\,1fr\\)\\)\\]{grid-template-columns:repeat(auto-fill,minmax(148px,1fr))}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-nowrap{flex-wrap:nowrap}.flex-wrap{flex-wrap:wrap}.place-content-center{place-content:center}.place-items-center{place-items:center}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-start{justify-content:flex-start}.gap-0{gap:calc(var(--spacing)*0)}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-4{gap:calc(var(--spacing)*4)}.gap-8{gap:calc(var(--spacing)*8)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.gap-x-2{column-gap:calc(var(--spacing)*2)}.gap-x-8{column-gap:calc(var(--spacing)*8)}.gap-y-2{row-gap:calc(var(--spacing)*2)}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-\\[4px\\]{border-radius:4px}.rounded-box{border-radius:var(--radius-box)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-none{border-radius:0}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:calc(var(--radius) + 4px)}.rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.rounded-l-none{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-\\[8px\\]{border-top-right-radius:8px;border-bottom-right-radius:8px}.rounded-r-full{border-top-right-radius:3.40282e38px;border-bottom-right-radius:3.40282e38px}.rounded-r-none{border-top-right-radius:0;border-bottom-right-radius:0}.rounded-b-md{border-bottom-right-radius:calc(var(--radius) - 2px);border-bottom-left-radius:calc(var(--radius) - 2px)}.border,.border-1{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t-1{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t-8{border-top-style:var(--tw-border-style);border-top-width:8px}.border-r-1{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b-1{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-8{border-bottom-style:var(--tw-border-style);border-bottom-width:8px}.border-none{--tw-border-style:none;border-style:none}.\\!border-border{border-color:var(--border)!important}.\\!border-destructive{border-color:var(--destructive)!important}.border-border{border-color:var(--border)}.border-foreground,.border-foreground\\/20{border-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.border-foreground\\/20{border-color:color-mix(in oklab,var(--foreground)20%,transparent)}}.border-primary,.border-primary\\/50{border-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.border-primary\\/50{border-color:color-mix(in oklab,var(--primary)50%,transparent)}}.border-transparent{border-color:#0000}.border-white{border-color:var(--color-white)}.border-white\\/20{border-color:#fff3}@supports (color:color-mix(in lab,red,red)){.border-white\\/20{border-color:color-mix(in oklab,var(--color-white)20%,transparent)}}.border-t-primary{border-top-color:var(--primary)}.\\!border-b-primary{border-bottom-color:var(--primary)!important}.\\!border-b-white{border-bottom-color:var(--color-white)!important}.\\!bg-black\\/15{background-color:#00000026!important}@supports (color:color-mix(in lab,red,red)){.\\!bg-black\\/15{background-color:color-mix(in oklab,var(--color-black)15%,transparent)!important}}.\\!bg-destructive\\/5{background-color:var(--destructive)!important}@supports (color:color-mix(in lab,red,red)){.\\!bg-destructive\\/5{background-color:color-mix(in oklab,var(--destructive)5%,transparent)!important}}.\\!bg-muted\\/30{background-color:var(--muted)!important}@supports (color:color-mix(in lab,red,red)){.\\!bg-muted\\/30{background-color:color-mix(in oklab,var(--muted)30%,transparent)!important}}.\\!bg-primary,.\\!bg-primary\\/5{background-color:var(--primary)!important}@supports (color:color-mix(in lab,red,red)){.\\!bg-primary\\/5{background-color:color-mix(in oklab,var(--primary)5%,transparent)!important}}.\\!bg-transparent{background-color:#0000!important}.bg-accent{background-color:var(--accent)}.bg-background{background-color:var(--background)}.bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab,red,red)){.bg-black\\/20{background-color:color-mix(in oklab,var(--color-black)20%,transparent)}}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black)40%,transparent)}}.bg-black\\/90{background-color:#000000e6}@supports (color:color-mix(in lab,red,red)){.bg-black\\/90{background-color:color-mix(in oklab,var(--color-black)90%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-border{background-color:var(--border)}.bg-destructive{background-color:var(--destructive)}.bg-foreground,.bg-foreground\\/10{background-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.bg-foreground\\/10{background-color:color-mix(in oklab,var(--foreground)10%,transparent)}}.bg-foreground\\/15{background-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.bg-foreground\\/15{background-color:color-mix(in oklab,var(--foreground)15%,transparent)}}.bg-foreground\\/20{background-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.bg-foreground\\/20{background-color:color-mix(in oklab,var(--foreground)20%,transparent)}}.bg-green-600{background-color:var(--color-green-600)}.bg-muted{background-color:var(--muted)}.bg-orange-600{background-color:var(--color-orange-600)}.bg-popover{background-color:var(--popover)}.bg-primary{background-color:var(--primary)}.bg-primary-foreground{background-color:var(--primary-foreground)}.bg-primary\\/15{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/15{background-color:color-mix(in oklab,var(--primary)15%,transparent)}}.bg-primary\\/30{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/30{background-color:color-mix(in oklab,var(--primary)30%,transparent)}}.bg-secondary{background-color:var(--secondary)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.loading-spinner{-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")}.\\!fill-primary-foreground{fill:var(--primary-foreground)!important}.fill-black{fill:var(--color-black)}.fill-destructive-foreground{fill:var(--destructive-foreground)}.fill-foreground\\/80{fill:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.fill-foreground\\/80{fill:color-mix(in oklab,var(--foreground)80%,transparent)}}.fill-muted-foreground{fill:var(--muted-foreground)}.fill-primary{fill:var(--primary)}.fill-primary-foreground{fill:var(--primary-foreground)}.fill-white{fill:var(--color-white)}.radio-sm{padding:.1875rem}.radio-sm[type=radio]{--size:calc(var(--size-selector,.25rem)*5)}.\\!p-0{padding:calc(var(--spacing)*0)!important}.\\!p-1{padding:calc(var(--spacing)*1)!important}.p-0{padding:calc(var(--spacing)*0)}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-8{padding:calc(var(--spacing)*8)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-1\\.5{padding-inline:calc(var(--spacing)*1.5)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-8{padding-block:calc(var(--spacing)*8)}.ps-2{padding-inline-start:calc(var(--spacing)*2)}.pt-0{padding-top:calc(var(--spacing)*0)}.pt-0\\.5{padding-top:calc(var(--spacing)*.5)}.pt-1{padding-top:calc(var(--spacing)*1)}.pt-2{padding-top:calc(var(--spacing)*2)}.pr-2{padding-right:calc(var(--spacing)*2)}.pr-3{padding-right:calc(var(--spacing)*3)}.\\!pb-12{padding-bottom:calc(var(--spacing)*12)!important}.pb-0{padding-bottom:calc(var(--spacing)*0)}.pb-0\\.5{padding-bottom:calc(var(--spacing)*.5)}.pl-2{padding-left:calc(var(--spacing)*2)}.text-center{text-align:center}.text-left{text-align:left}.font-mono{font-family:var(--font-mono)}.text-2xl{font-size:calc(var(--font-size)*1.5);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-base{font-size:calc(var(--font-size)*1);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:calc(var(--font-size)*1.125);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:calc(var(--font-size)*1.25);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:calc(var(--font-size)*.75);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-none{--tw-leading:1;line-height:1}.leading-normal{--tw-leading:var(--leading-normal);line-height:var(--leading-normal)}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-normal{--tw-tracking:var(--tracking-normal);letter-spacing:var(--tracking-normal)}.break-words{overflow-wrap:break-word}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.\\!text-muted-foreground{color:var(--muted-foreground)!important}.\\!text-primary-foreground{color:var(--primary-foreground)!important}.text-background{color:var(--background)}.text-blue-50{color:var(--color-blue-50)}.text-destructive{color:var(--destructive)}.text-destructive-foreground{color:var(--destructive-foreground)}.text-foreground,.text-foreground\\/80{color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.text-foreground\\/80{color:color-mix(in oklab,var(--foreground)80%,transparent)}}.text-green-50{color:var(--color-green-50)}.text-muted-foreground{color:var(--muted-foreground)}.text-orange-50{color:var(--color-orange-50)}.text-popover-foreground{color:var(--popover-foreground)}.text-primary{color:var(--primary)}.text-primary-foreground{color:var(--primary-foreground)}.text-primary\\/70{color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.text-primary\\/70{color:color-mix(in oklab,var(--primary)70%,transparent)}}.text-secondary-foreground{color:var(--secondary-foreground)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.italic{font-style:italic}.opacity-50{opacity:.5}.opacity-80{opacity:.8}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline,.outline-1{outline-style:var(--tw-outline-style);outline-width:1px}.outline-destructive-foreground{outline-color:var(--destructive-foreground)}.outline-primary{outline-color:var(--primary)}.outline-primary-foreground{outline-color:var(--primary-foreground)}.brightness-85{--tw-brightness:brightness(85%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[bottom\\,width\\]{transition-property:bottom,width;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.\\!outline-none{--tw-outline-style:none!important;outline-style:none!important}.radio-primary{--input-color:var(--color-primary)}:is(.\\*\\:\\!pointer-events-none>*){pointer-events:none!important}:is(.\\*\\:pointer-events-none>*){pointer-events:none}@media (hover:hover){.group-hover\\:visible:is(:where(.group):hover *){visibility:visible}.group-hover\\:fill-destructive:is(:where(.group):hover *){fill:var(--destructive)}.group-hover\\:fill-foreground:is(:where(.group):hover *){fill:var(--foreground)}.group-hover\\:fill-primary:is(:where(.group):hover *){fill:var(--primary)}.group-hover\\:text-primary:is(:where(.group):hover *){color:var(--primary)}.group-hover\\:underline:is(:where(.group):hover *){text-decoration-line:underline}.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\:brightness-85:is(:where(.group):hover *){--tw-brightness:brightness(85%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}}.group-data-\\[active\\=true\\]\\:\\!bg-primary:is(:where(.group)[data-active=true] *){background-color:var(--primary)!important}.group-data-\\[active\\=true\\]\\:fill-primary-foreground:is(:where(.group)[data-active=true] *){fill:var(--primary-foreground)}.group-data-\\[actived\\=true\\]\\:\\!bg-primary\\/10:is(:where(.group)[data-actived=true] *){background-color:var(--primary)!important}@supports (color:color-mix(in lab,red,red)){.group-data-\\[actived\\=true\\]\\:\\!bg-primary\\/10:is(:where(.group)[data-actived=true] *){background-color:color-mix(in oklab,var(--primary)10%,transparent)!important}}.group-data-\\[actived\\=true\\]\\:\\!fill-primary:is(:where(.group)[data-actived=true] *){fill:var(--primary)!important}.group-data-\\[actived\\=true\\]\\:\\!text-primary:is(:where(.group)[data-actived=true] *){color:var(--primary)!important}.group-data-\\[actived\\=true\\]\\:text-primary:is(:where(.group)[data-actived=true] *){color:var(--primary)}.group-data-\\[disabled\\=\\'true\\'\\]\\:\\!hidden:is(:where(.group)[data-disabled=true] *){display:none!important}.peer-checked\\:translate-x-full:is(:where(.peer):checked~*){--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.peer-checked\\:bg-primary:is(:where(.peer):checked~*){background-color:var(--primary)}@media (hover:hover){.peer-hover\\:border-primary:is(:where(.peer):hover~*){border-color:var(--primary)}}.placeholder\\:text-sm::placeholder{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}.last\\:border-none:last-child{--tw-border-style:none;border-style:none}@media (hover:hover){.hover\\:border-destructive\\/20:hover{border-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.hover\\:border-destructive\\/20:hover{border-color:color-mix(in oklab,var(--destructive)20%,transparent)}}.hover\\:border-primary:hover{border-color:var(--primary)}.hover\\:bg-accent:hover{background-color:var(--accent)}.hover\\:bg-black\\/5:hover{background-color:#0000000d}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-black\\/5:hover{background-color:color-mix(in oklab,var(--color-black)5%,transparent)}}.hover\\:bg-destructive\\/5:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-destructive\\/5:hover{background-color:color-mix(in oklab,var(--destructive)5%,transparent)}}.hover\\:bg-destructive\\/10:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-destructive\\/10:hover{background-color:color-mix(in oklab,var(--destructive)10%,transparent)}}.hover\\:bg-foreground\\/5:hover{background-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-foreground\\/5:hover{background-color:color-mix(in oklab,var(--foreground)5%,transparent)}}.hover\\:bg-foreground\\/10:hover{background-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-foreground\\/10:hover{background-color:color-mix(in oklab,var(--foreground)10%,transparent)}}.hover\\:bg-muted:hover{background-color:var(--muted)}.hover\\:bg-primary\\/10:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-primary\\/10:hover{background-color:color-mix(in oklab,var(--primary)10%,transparent)}}.hover\\:fill-foreground:hover{fill:var(--foreground)}.hover\\:text-foreground:hover{color:var(--foreground)}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:brightness-90:hover{--tw-brightness:brightness(90%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.hover\\:brightness-110:hover{--tw-brightness:brightness(110%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.hover\\:brightness-125:hover{--tw-brightness:brightness(125%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}:is(.hover\\:\\*\\:text-primary:hover>*){color:var(--primary)}}.focus\\:border-primary:focus{border-color:var(--primary)}.focus\\:outline-solid:focus{--tw-outline-style:solid;outline-style:solid}.data-\\[active\\=\\'true\\'\\]\\:bottom-2[data-active=true]{bottom:calc(var(--spacing)*2)}.data-\\[active\\=true\\]\\:\\!border-primary[data-active=true]{border-color:var(--primary)!important}.data-\\[active\\=true\\]\\:bg-primary\\/10[data-active=true]{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.data-\\[active\\=true\\]\\:bg-primary\\/10[data-active=true]{background-color:color-mix(in oklab,var(--primary)10%,transparent)}}@media not all and (min-width:48rem){.max-md\\:\\!hidden{display:none!important}}@media not all and (min-width:40rem){.max-sm\\:right-2{right:calc(var(--spacing)*2)}.max-sm\\:left-2{left:calc(var(--spacing)*2)}}@media not all and (min-width:30rem){.max-xs\\:right-2{right:calc(var(--spacing)*2)}.max-xs\\:left-2{left:calc(var(--spacing)*2)}.max-xs\\:scale-90{--tw-scale-x:90%;--tw-scale-y:90%;--tw-scale-z:90%;scale:var(--tw-scale-x)var(--tw-scale-y)}.max-xs\\:text-sm{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}}@media not all and (min-width:20rem){.max-xxs\\:hidden{display:none}}@media (min-width:30rem){.xs\\:size-7{width:calc(var(--spacing)*7);height:calc(var(--spacing)*7)}.xs\\:size-9{width:calc(var(--spacing)*9);height:calc(var(--spacing)*9)}.xs\\:size-10{width:calc(var(--spacing)*10);height:calc(var(--spacing)*10)}.xs\\:h-\\[22px\\]{height:22px}.xs\\:h-\\[90dvh\\]{height:90dvh}.xs\\:max-h-\\[calc\\(90dvh-94px\\)\\]{max-height:calc(90dvh - 94px)}.xs\\:\\!w-md{width:448px!important}.xs\\:w-\\[198px\\]{width:198px}.xs\\:w-md{width:448px}.xs\\:min-w-7{min-width:calc(var(--spacing)*7)}.xs\\:min-w-9{min-width:calc(var(--spacing)*9)}.xs\\:grid-cols-\\[repeat\\(auto-fill\\,minmax\\(180px\\,1fr\\)\\)\\]{grid-template-columns:repeat(auto-fill,minmax(180px,1fr))}.xs\\:gap-3{gap:calc(var(--spacing)*3)}.xs\\:gap-x-1{column-gap:calc(var(--spacing)*1)}.xs\\:p-4{padding:calc(var(--spacing)*4)}.xs\\:text-base{font-size:calc(var(--font-size)*1);line-height:var(--tw-leading,var(--text-base--line-height))}.xs\\:text-lg{font-size:calc(var(--font-size)*1.125);line-height:var(--tw-leading,var(--text-lg--line-height))}.xs\\:text-sm{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}}@media (min-width:40rem){.sm\\:col-span-2{grid-column:span 2/span 2}.sm\\:size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.sm\\:w-40{width:calc(var(--spacing)*40)}.sm\\:w-lg{width:512px}.sm\\:w-md{width:448px}.sm\\:text-base{font-size:calc(var(--font-size)*1);line-height:var(--tw-leading,var(--text-base--line-height))}.sm\\:text-sm{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}}@media (min-width:48rem){.md\\:\\!w-2xl{width:672px!important}.md\\:w-2xl{width:672px}.md\\:px-24{padding-inline:calc(var(--spacing)*24)}.md\\:py-12{padding-block:calc(var(--spacing)*12)}}.dark\\:\\!bg-black\\/50:is(:host(.dark) *){background-color:#00000080!important}@supports (color:color-mix(in lab,red,red)){.dark\\:\\!bg-black\\/50:is(:host(.dark) *){background-color:color-mix(in oklab,var(--color-black)50%,transparent)!important}}.dark\\:bg-foreground\\/10:is(:host(.dark) *){background-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-foreground\\/10:is(:host(.dark) *){background-color:color-mix(in oklab,var(--foreground)10%,transparent)}}.dark\\:bg-muted:is(:host(.dark) *){background-color:var(--muted)}.dark\\:bg-popover:is(:host(.dark) *){background-color:var(--popover)}.dark\\:\\!fill-white:is(:host(.dark) *){fill:var(--color-white)!important}.dark\\:fill-foreground:is(:host(.dark) *){fill:var(--foreground)}.dark\\:text-foreground:is(:host(.dark) *){color:var(--foreground)}@media (hover:hover){.hover\\:dark\\:bg-primary\\/5:hover:is(:host(.dark) *){background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.hover\\:dark\\:bg-primary\\/5:hover:is(:host(.dark) *){background-color:color-mix(in oklab,var(--primary)5%,transparent)}}}.\\[\\&_svg\\]\\:size-4\\.5 svg{width:calc(var(--spacing)*4.5);height:calc(var(--spacing)*4.5)}.peer-checked\\:\\[\\&_svg\\]\\:rotate-0:is(:where(.peer):checked~*) svg{rotate:none}@media (min-width:30rem){.xs\\:\\[\\&_svg\\]\\:size-5\\.5 svg{width:calc(var(--spacing)*5.5);height:calc(var(--spacing)*5.5)}}.\\[\\&\\>\\*\\]\\:absolute>*{position:absolute}.\\[\\&\\>\\*\\]\\:h-0>*{height:calc(var(--spacing)*0)}.\\[\\&\\>\\*\\]\\:w-0>*{width:calc(var(--spacing)*0)}.\\[\\&\\>\\*\\]\\:border-r-12>*{border-right-style:var(--tw-border-style);border-right-width:12px}.\\[\\&\\>\\*\\]\\:border-b-12>*{border-bottom-style:var(--tw-border-style);border-bottom-width:12px}.\\[\\&\\>\\*\\]\\:border-l-12>*{border-left-style:var(--tw-border-style);border-left-width:12px}.\\[\\&\\>\\*\\]\\:border-transparent>*{border-color:#0000}.\\[\\&\\>svg\\]\\:pointer-events-none>svg{pointer-events:none}.\\[\\&\\>svg\\]\\:fill-foreground\\/80>svg{fill:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.\\[\\&\\>svg\\]\\:fill-foreground\\/80>svg{fill:color-mix(in oklab,var(--foreground)80%,transparent)}}.\\[\\&\\>svg\\]\\:not-hover\\:\\!fill-muted-foreground>svg:not(:hover){fill:var(--muted-foreground)!important}@media not all and (hover:hover){.\\[\\&\\>svg\\]\\:not-hover\\:\\!fill-muted-foreground>svg{fill:var(--muted-foreground)!important}}@media (hover:hover){.hover\\:\\[\\&\\>svg\\]\\:fill-destructive:hover>svg{fill:var(--destructive)}.hover\\:\\[\\&\\>svg\\]\\:fill-foreground:hover>svg{fill:var(--foreground)}}}:host{--background:oklch(100% 0 0);--foreground:oklch(25% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--primary:oklch(56.99% .1959 259.98);--primary-foreground:oklch(100% 0 0);--secondary:oklch(97% 0 0);--secondary-foreground:oklch(20.5% 0 0);--muted:oklch(97% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(97% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(63.7% .237 25.331);--destructive-foreground:oklch(98.5% 0 0);--border:oklch(92.2% 0 0);--input:oklch(92.2% 0 0);--ring:oklch(70.8% 0 0);--radius:10px;--spacing:4px;--font-sans:"VLibrasWidget_Font",sans-serif;--font-size:16px}:host(.dark){--background:oklch(16% 0 0);--foreground:oklch(98.5% 0 0);--popover:oklch(20% 0 0);--popover-foreground:oklch(98.5% 0 0);--secondary:oklch(26.9% 0 0);--secondary-foreground:oklch(98.5% 0 0);--muted:oklch(20% 0 0);--muted-foreground:oklch(70.8% 0 0);--accent:oklch(26.9% 0 0);--accent-foreground:oklch(98.5% 0 0);--destructive:oklch(63.7% .237 25.331);--destructive-foreground:oklch(98.5% 0 0);--border:oklch(26.9% 0 0);--input:oklch(26.9% 0 0);--ring:oklch(43.9% 0 0)}@keyframes scale{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes move-left{0%{opacity:0;transform:translate(-100%)}to{opacity:1;transform:translate(0)}}@keyframes move-right{0%{opacity:0;transform:translate(100%)}to{opacity:1;transform:translate(0)}}@keyframes move-up{0%{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}@keyframes move-down{0%{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}:host{font-family:var(--font-sans)!important}:host ::-webkit-scrollbar{height:calc(var(--spacing)*2.5);width:calc(var(--spacing)*2.5)}:host ::-webkit-scrollbar-track{background-color:#0000}:host ::-webkit-scrollbar-thumb{border-style:var(--tw-border-style);--tw-border-style:solid;background-color:var(--border);background-clip:padding-box;border:1px solid #0000;border-radius:3.40282e38px}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes progress{50%{background-position-x:-115%}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@keyframes dropdown{0%{opacity:0}}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}`, fh = ({ children: e, root: t }) => (P(() => Q3(), []), /* @__PURE__ */ i($4, { root: t, children: [
  /* @__PURE__ */ i("style", { children: gh }),
  /* @__PURE__ */ i(ph, {}),
  /* @__PURE__ */ i(hh, {}),
  e
] })), mh = () => {
  const { isActive: e } = S(), { t } = B();
  return /* @__PURE__ */ i(
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
      children: /* @__PURE__ */ i(
        Ta,
        {
          style: {
            fill: "#2c9e2c",
            width: "100%",
            height: "100%"
          },
          iconTitle: t("actived")
        }
      )
    }
  );
}, vh = () => (P(() => {
  var o;
  const e = (o = document.getElementById("vwp-app-wrapper")) == null ? void 0 : o.shadowRoot, t = e == null ? void 0 : e.getElementById("vwp-access-wrapper"), r = document.createElement("div");
  et(/* @__PURE__ */ i(mh, {}), r), t == null || t.appendChild(r);
}, []), null), bh = () => /* @__PURE__ */ i(Ce, { children: /* @__PURE__ */ i(vh, {}) }), { root: Ch, shadowRoot: sa, isRootActive: Tl } = Sa();
function wh() {
  const { setIsOpenWidget: e, isLoaded: t, setIsLoaded: r } = S(), { path: o } = zt();
  return P(() => {
    if ((async () => (await rp(o, sa), r(!0)))(), !t) return;
    e(Tl());
    const n = new MutationObserver(() => e(Tl()));
    return n.observe(Ch, {
      attributes: !0,
      attributeFilter: ["data-active"]
    }), () => n.disconnect();
  }, [o, e, t, r]), /* @__PURE__ */ i(fh, { root: sa, children: [
    /* @__PURE__ */ i(V4, {}),
    /* @__PURE__ */ i(bh, {})
  ] });
}
et(/* @__PURE__ */ i(wh, {}), sa);
