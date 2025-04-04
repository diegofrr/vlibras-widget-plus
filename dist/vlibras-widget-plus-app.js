var Ve, L, Oo, be, en, No, Ho, zo, zr, Lr, Mr, Bo, Ue = {}, Fo = [], Vi = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ze = Array.isArray;
function se(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function Br(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function de(e, t, r) {
  var n, o, i, a = {};
  for (i in t) i == "key" ? n = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ve.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return Ge(e, a, n, o, null);
}
function Ge(e, t, r, n, o) {
  var i = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Oo, __i: -1, __u: 0 };
  return o == null && L.vnode != null && L.vnode(i), i;
}
function Zi() {
  return { current: null };
}
function Y(e) {
  return e.children;
}
function le(e, t) {
  this.props = e, this.context = t;
}
function Ie(e, t) {
  if (t == null) return e.__ ? Ie(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? Ie(e) : null;
}
function jo(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) {
      e.__e = e.__c.base = r.__e;
      break;
    }
    return jo(e);
  }
}
function Pr(e) {
  (!e.__d && (e.__d = !0) && be.push(e) && !st.__r++ || en !== L.debounceRendering) && ((en = L.debounceRendering) || No)(st);
}
function st() {
  for (var e, t, r, n, o, i, a, u = 1; be.length; ) be.length > u && be.sort(Ho), e = be.shift(), u = be.length, e.__d && (r = void 0, o = (n = (t = e).__v).__e, i = [], a = [], t.__P && ((r = se({}, n)).__v = n.__v + 1, L.vnode && L.vnode(r), Fr(t.__P, r, n, t.__n, t.__P.namespaceURI, 32 & n.__u ? [o] : null, i, o ?? Ie(n), !!(32 & n.__u), a), r.__v = n.__v, r.__.__k[r.__i] = r, Go(i, r, a), r.__e != o && jo(r)));
  st.__r = 0;
}
function Do(e, t, r, n, o, i, a, u, l, c, p) {
  var d, f, g, k, _, S, x = n && n.__k || Fo, y = t.length;
  for (l = Wi(r, t, x, l, y), d = 0; d < y; d++) (g = r.__k[d]) != null && (f = g.__i === -1 ? Ue : x[g.__i] || Ue, g.__i = d, S = Fr(e, g, f, o, i, a, u, l, c, p), k = g.__e, g.ref && f.ref != g.ref && (f.ref && jr(f.ref, null, g), p.push(g.ref, g.__c || k, g)), _ == null && k != null && (_ = k), 4 & g.__u || f.__k === g.__k ? l = qo(g, l, e) : typeof g.type == "function" && S !== void 0 ? l = S : k && (l = k.nextSibling), g.__u &= -7);
  return r.__e = _, l;
}
function Wi(e, t, r, n, o) {
  var i, a, u, l, c, p = r.length, d = p, f = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (a = t[i]) != null && typeof a != "boolean" && typeof a != "function" ? (l = i + f, (a = e.__k[i] = typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? Ge(null, a, null, null, null) : Ze(a) ? Ge(Y, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? Ge(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a).__ = e, a.__b = e.__b + 1, u = null, (c = a.__i = Xi(a, r, l, d)) !== -1 && (d--, (u = r[c]) && (u.__u |= 2)), u == null || u.__v === null ? (c == -1 && (o > p ? f-- : o < p && f++), typeof a.type != "function" && (a.__u |= 4)) : c != l && (c == l - 1 ? f-- : c == l + 1 ? f++ : (c > l ? f-- : f++, a.__u |= 4))) : e.__k[i] = null;
  if (d) for (i = 0; i < p; i++) (u = r[i]) != null && (2 & u.__u) == 0 && (u.__e == n && (n = Ie(u)), Vo(u, u));
  return n;
}
function qo(e, t, r) {
  var n, o;
  if (typeof e.type == "function") {
    for (n = e.__k, o = 0; n && o < n.length; o++) n[o] && (n[o].__ = e, t = qo(n[o], t, r));
    return t;
  }
  e.__e != t && (t && e.type && !r.contains(t) && (t = Ie(e)), r.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function ue(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Ze(e) ? e.some(function(r) {
    ue(r, t);
  }) : t.push(e)), t;
}
function Xi(e, t, r, n) {
  var o, i, a = e.key, u = e.type, l = t[r];
  if (l === null && e.key == null || l && a == l.key && u === l.type && (2 & l.__u) == 0) return r;
  if (n > (l != null && (2 & l.__u) == 0 ? 1 : 0)) for (o = r - 1, i = r + 1; o >= 0 || i < t.length; ) {
    if (o >= 0) {
      if ((l = t[o]) && (2 & l.__u) == 0 && a == l.key && u === l.type) return o;
      o--;
    }
    if (i < t.length) {
      if ((l = t[i]) && (2 & l.__u) == 0 && a == l.key && u === l.type) return i;
      i++;
    }
  }
  return -1;
}
function tn(e, t, r) {
  t[0] == "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || Vi.test(t) ? r : r + "px";
}
function nt(e, t, r, n, o) {
  var i;
  e: if (t == "style") if (typeof r == "string") e.style.cssText = r;
  else {
    if (typeof n == "string" && (e.style.cssText = n = ""), n) for (t in n) r && t in r || tn(e.style, t, "");
    if (r) for (t in r) n && r[t] === n[t] || tn(e.style, t, r[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(zo, "$1")), t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = r, r ? n ? r.t = n.t : (r.t = zr, e.addEventListener(t, i ? Mr : Lr, i)) : e.removeEventListener(t, i ? Mr : Lr, i);
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
function rn(e) {
  return function(t) {
    if (this.l) {
      var r = this.l[t.type + e];
      if (t.u == null) t.u = zr++;
      else if (t.u < r.t) return;
      return r(L.event ? L.event(t) : t);
    }
  };
}
function Fr(e, t, r, n, o, i, a, u, l, c) {
  var p, d, f, g, k, _, S, x, y, h, m, w, v, A, I, $, K, j = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && (l = !!(32 & r.__u), i = [u = t.__e = r.__e]), (p = L.__b) && p(t);
  e: if (typeof j == "function") try {
    if (x = t.props, y = "prototype" in j && j.prototype.render, h = (p = j.contextType) && n[p.__c], m = p ? h ? h.props.value : p.__ : n, r.__c ? S = (d = t.__c = r.__c).__ = d.__E : (y ? t.__c = d = new j(x, m) : (t.__c = d = new le(x, m), d.constructor = j, d.render = Ji), h && h.sub(d), d.props = x, d.state || (d.state = {}), d.context = m, d.__n = n, f = d.__d = !0, d.__h = [], d._sb = []), y && d.__s == null && (d.__s = d.state), y && j.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = se({}, d.__s)), se(d.__s, j.getDerivedStateFromProps(x, d.__s))), g = d.props, k = d.state, d.__v = t, f) y && j.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), y && d.componentDidMount != null && d.__h.push(d.componentDidMount);
    else {
      if (y && j.getDerivedStateFromProps == null && x !== g && d.componentWillReceiveProps != null && d.componentWillReceiveProps(x, m), !d.__e && (d.shouldComponentUpdate != null && d.shouldComponentUpdate(x, d.__s, m) === !1 || t.__v == r.__v)) {
        for (t.__v != r.__v && (d.props = x, d.state = d.__s, d.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(H) {
          H && (H.__ = t);
        }), w = 0; w < d._sb.length; w++) d.__h.push(d._sb[w]);
        d._sb = [], d.__h.length && a.push(d);
        break e;
      }
      d.componentWillUpdate != null && d.componentWillUpdate(x, d.__s, m), y && d.componentDidUpdate != null && d.__h.push(function() {
        d.componentDidUpdate(g, k, _);
      });
    }
    if (d.context = m, d.props = x, d.__P = e, d.__e = !1, v = L.__r, A = 0, y) {
      for (d.state = d.__s, d.__d = !1, v && v(t), p = d.render(d.props, d.state, d.context), I = 0; I < d._sb.length; I++) d.__h.push(d._sb[I]);
      d._sb = [];
    } else do
      d.__d = !1, v && v(t), p = d.render(d.props, d.state, d.context), d.state = d.__s;
    while (d.__d && ++A < 25);
    d.state = d.__s, d.getChildContext != null && (n = se(se({}, n), d.getChildContext())), y && !f && d.getSnapshotBeforeUpdate != null && (_ = d.getSnapshotBeforeUpdate(g, k)), $ = p, p != null && p.type === Y && p.key == null && ($ = Uo(p.props.children)), u = Do(e, Ze($) ? $ : [$], t, r, n, o, i, a, u, l, c), d.base = t.__e, t.__u &= -161, d.__h.length && a.push(d), S && (d.__E = d.__ = null);
  } catch (H) {
    if (t.__v = null, l || i != null) if (H.then) {
      for (t.__u |= l ? 160 : 128; u && u.nodeType == 8 && u.nextSibling; ) u = u.nextSibling;
      i[i.indexOf(u)] = null, t.__e = u;
    } else for (K = i.length; K--; ) Br(i[K]);
    else t.__e = r.__e, t.__k = r.__k;
    L.__e(H, t, r);
  }
  else i == null && t.__v == r.__v ? (t.__k = r.__k, t.__e = r.__e) : u = t.__e = Ki(r.__e, t, r, n, o, i, a, l, c);
  return (p = L.diffed) && p(t), 128 & t.__u ? void 0 : u;
}
function Go(e, t, r) {
  for (var n = 0; n < r.length; n++) jr(r[n], r[++n], r[++n]);
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
function Uo(e) {
  return typeof e != "object" || e == null ? e : Ze(e) ? e.map(Uo) : se({}, e);
}
function Ki(e, t, r, n, o, i, a, u, l) {
  var c, p, d, f, g, k, _, S = r.props, x = t.props, y = t.type;
  if (y == "svg" ? o = "http://www.w3.org/2000/svg" : y == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (c = 0; c < i.length; c++) if ((g = i[c]) && "setAttribute" in g == !!y && (y ? g.localName == y : g.nodeType == 3)) {
      e = g, i[c] = null;
      break;
    }
  }
  if (e == null) {
    if (y == null) return document.createTextNode(x);
    e = document.createElementNS(o, y, x.is && x), u && (L.__m && L.__m(t, i), u = !1), i = null;
  }
  if (y === null) S === x || u && e.data === x || (e.data = x);
  else {
    if (i = i && Ve.call(e.childNodes), S = r.props || Ue, !u && i != null) for (S = {}, c = 0; c < e.attributes.length; c++) S[(g = e.attributes[c]).name] = g.value;
    for (c in S) if (g = S[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") d = g;
      else if (!(c in x)) {
        if (c == "value" && "defaultValue" in x || c == "checked" && "defaultChecked" in x) continue;
        nt(e, c, null, g, o);
      }
    }
    for (c in x) g = x[c], c == "children" ? f = g : c == "dangerouslySetInnerHTML" ? p = g : c == "value" ? k = g : c == "checked" ? _ = g : u && typeof g != "function" || S[c] === g || nt(e, c, g, S[c], o);
    if (p) u || d && (p.__html === d.__html || p.__html === e.innerHTML) || (e.innerHTML = p.__html), t.__k = [];
    else if (d && (e.innerHTML = ""), Do(t.type === "template" ? e.content : e, Ze(f) ? f : [f], t, r, n, y == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, a, i ? i[0] : r.__k && Ie(r, 0), u, l), i != null) for (c = i.length; c--; ) Br(i[c]);
    u || (c = "value", y == "progress" && k == null ? e.removeAttribute("value") : k !== void 0 && (k !== e[c] || y == "progress" && !k || y == "option" && k !== S[c]) && nt(e, c, k, S[c], o), c = "checked", _ !== void 0 && _ !== e[c] && nt(e, c, _, S[c], o));
  }
  return e;
}
function jr(e, t, r) {
  try {
    if (typeof e == "function") {
      var n = typeof e.__u == "function";
      n && e.__u(), n && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (o) {
    L.__e(o, r);
  }
}
function Vo(e, t, r) {
  var n, o;
  if (L.unmount && L.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || jr(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (i) {
      L.__e(i, t);
    }
    n.base = n.__P = null;
  }
  if (n = e.__k) for (o = 0; o < n.length; o++) n[o] && Vo(n[o], t, r || typeof e.type != "function");
  r || Br(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Ji(e, t, r) {
  return this.constructor(e, r);
}
function Ce(e, t, r) {
  var n, o, i, a;
  t == document && (t = document.documentElement), L.__ && L.__(e, t), o = (n = typeof r == "function") ? null : r && r.__k || t.__k, i = [], a = [], Fr(t, e = (!n && r || t).__k = de(Y, null, [e]), o || Ue, Ue, t.namespaceURI, !n && r ? [r] : o ? null : t.firstChild ? Ve.call(t.childNodes) : null, i, !n && r ? r : o ? o.__e : t.firstChild, n, a), Go(i, e, a);
}
function Zo(e, t) {
  Ce(e, t, Zo);
}
function Yi(e, t, r) {
  var n, o, i, a, u = se({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) i == "key" ? n = t[i] : i == "ref" ? o = t[i] : u[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i];
  return arguments.length > 2 && (u.children = arguments.length > 3 ? Ve.call(arguments, 2) : r), Ge(e.type, u, n || e.key, o || e.ref, null);
}
function Qi(e) {
  function t(r) {
    var n, o;
    return this.getChildContext || (n = /* @__PURE__ */ new Set(), (o = {})[t.__c] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value !== i.value && n.forEach(function(a) {
        a.__e = !0, Pr(a);
      });
    }, this.sub = function(i) {
      n.add(i);
      var a = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        n && n.delete(i), a && a.call(i);
      };
    }), r.children;
  }
  return t.__c = "__cC" + Bo++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(r, n) {
    return r.children(n);
  }).contextType = t, t;
}
Ve = Fo.slice, L = { __e: function(e, t, r, n) {
  for (var o, i, a; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), a = o.__d), a) return o.__E = o;
  } catch (u) {
    e = u;
  }
  throw e;
} }, Oo = 0, le.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = se({}, this.state), typeof e == "function" && (e = e(se({}, r), this.props)), e && se(r, e), e != null && this.__v && (t && this._sb.push(t), Pr(this));
}, le.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Pr(this));
}, le.prototype.render = Y, be = [], No = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ho = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, st.__r = 0, zo = /(PointerCapture)$|Capture$/i, zr = 0, Lr = rn(!1), Mr = rn(!0), Bo = 0;
var e1 = 0;
function s(e, t, r, n, o, i) {
  t || (t = {});
  var a, u, l = t;
  if ("ref" in l) for (u in l = {}, t) u == "ref" ? a = t[u] : l[u] = t[u];
  var c = { type: e, props: l, key: r, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --e1, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (u in a) l[u] === void 0 && (l[u] = a[u]);
  return L.vnode && L.vnode(c), c;
}
var me, T, vt, nn, $e = 0, Wo = [], N = L, on = N.__b, an = N.__r, sn = N.diffed, ln = N.__c, cn = N.unmount, un = N.__;
function Te(e, t) {
  N.__h && N.__h(T, e, $e || t), $e = 0;
  var r = T.__H || (T.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function Z(e) {
  return $e = 1, Dr(ei, e);
}
function Dr(e, t, r) {
  var n = Te(me++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : ei(void 0, t), function(u) {
    var l = n.__N ? n.__N[0] : n.__[0], c = n.t(l, u);
    l !== c && (n.__N = [c, n.__[1]], n.__c.setState({}));
  }], n.__c = T, !T.__f)) {
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
          var g = f.__[0];
          f.__ = f.__N, f.__N = void 0, g !== f.__[0] && (d = !0);
        }
      }), i && i.call(this, u, l, c) || d;
    };
    T.__f = !0;
    var i = T.shouldComponentUpdate, a = T.componentWillUpdate;
    T.componentWillUpdate = function(u, l, c) {
      if (this.__e) {
        var p = i;
        i = void 0, o(u, l, c), i = p;
      }
      a && a.call(this, u, l, c);
    }, T.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function P(e, t) {
  var r = Te(me++, 3);
  !N.__s && qr(r.__H, t) && (r.__ = e, r.u = t, T.__H.__h.push(r));
}
function We(e, t) {
  var r = Te(me++, 4);
  !N.__s && qr(r.__H, t) && (r.__ = e, r.u = t, T.__h.push(r));
}
function J(e) {
  return $e = 5, lt(function() {
    return { current: e };
  }, []);
}
function Xo(e, t, r) {
  $e = 6, We(function() {
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
function lt(e, t) {
  var r = Te(me++, 7);
  return qr(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__;
}
function Ko(e, t) {
  return $e = 8, lt(function() {
    return e;
  }, t);
}
function Jo(e) {
  var t = T.context[e.__c], r = Te(me++, 9);
  return r.c = e, t ? (r.__ == null && (r.__ = !0, t.sub(T)), t.props.value) : e.__;
}
function Yo(e, t) {
  N.useDebugValue && N.useDebugValue(t ? t(e) : e);
}
function Qo() {
  var e = Te(me++, 11);
  if (!e.__) {
    for (var t = T.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var r = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + r[0] + "-" + r[1]++;
  }
  return e.__;
}
function t1() {
  for (var e; e = Wo.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(it), e.__H.__h.forEach(Er), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], N.__e(t, e.__v);
  }
}
N.__b = function(e) {
  T = null, on && on(e);
}, N.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), un && un(e, t);
}, N.__r = function(e) {
  an && an(e), me = 0;
  var t = (T = e.__c).__H;
  t && (vt === T ? (t.__h = [], T.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (t.__h.forEach(it), t.__h.forEach(Er), t.__h = [], me = 0)), vt = T;
}, N.diffed = function(e) {
  sn && sn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Wo.push(t) !== 1 && nn === N.requestAnimationFrame || ((nn = N.requestAnimationFrame) || r1)(t1)), t.__H.__.forEach(function(r) {
    r.u && (r.__H = r.u), r.u = void 0;
  })), vt = T = null;
}, N.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(it), r.__h = r.__h.filter(function(n) {
        return !n.__ || Er(n);
      });
    } catch (n) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], N.__e(n, r.__v);
    }
  }), ln && ln(e, t);
}, N.unmount = function(e) {
  cn && cn(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      it(n);
    } catch (o) {
      t = o;
    }
  }), r.__H = void 0, t && N.__e(t, r.__v));
};
var dn = typeof requestAnimationFrame == "function";
function r1(e) {
  var t, r = function() {
    clearTimeout(n), dn && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  dn && (t = requestAnimationFrame(r));
}
function it(e) {
  var t = T, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), T = t;
}
function Er(e) {
  var t = T;
  e.__c = e.__(), T = t;
}
function qr(e, t) {
  return !e || e.length !== t.length || t.some(function(r, n) {
    return r !== e[n];
  });
}
function ei(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const pn = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (c, p) => {
    const d = typeof c == "function" ? c(t) : c;
    if (!Object.is(d, t)) {
      const f = t;
      t = p ?? (typeof d != "object" || d === null) ? d : Object.assign({}, t, d), r.forEach((g) => g(t, f));
    }
  }, o = () => t, u = { setState: n, getState: o, getInitialState: () => l, subscribe: (c) => (r.add(c), () => r.delete(c)) }, l = t = e(n, o, u);
  return u;
}, n1 = (e) => e ? pn(e) : pn;
function ti(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function Rr(e, t) {
  for (var r in e) if (r !== "__source" && !(r in t)) return !0;
  for (var n in t) if (n !== "__source" && e[n] !== t[n]) return !0;
  return !1;
}
function ri(e, t) {
  var r = t(), n = Z({ t: { __: r, u: t } }), o = n[0].t, i = n[1];
  return We(function() {
    o.__ = r, o.u = t, mt(o) && i({ t: o });
  }, [e, r, t]), P(function() {
    return mt(o) && i({ t: o }), e(function() {
      mt(o) && i({ t: o });
    });
  }, [e]), r;
}
function mt(e) {
  var t, r, n = e.u, o = e.__;
  try {
    var i = n();
    return !((t = o) === (r = i) && (t !== 0 || 1 / t == 1 / r) || t != t && r != r);
  } catch {
    return !0;
  }
}
function ni(e) {
  e();
}
function oi(e) {
  return e;
}
function ii() {
  return [!1, ni];
}
var ai = We;
function Ir(e, t) {
  this.props = e, this.context = t;
}
function o1(e, t) {
  function r(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Rr(this.props, o);
  }
  function n(o) {
    return this.shouldComponentUpdate = r, de(e, o);
  }
  return n.displayName = "Memo(" + (e.displayName || e.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n;
}
(Ir.prototype = new le()).isPureReactComponent = !0, Ir.prototype.shouldComponentUpdate = function(e, t) {
  return Rr(this.props, e) || Rr(this.state, t);
};
var fn = L.__b;
L.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), fn && fn(e);
};
var i1 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function fe(e) {
  function t(r) {
    var n = ti({}, r);
    return delete n.ref, e(n, r.ref || null);
  }
  return t.$$typeof = i1, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var hn = function(e, t) {
  return e == null ? null : ue(ue(e).map(t));
}, a1 = { map: hn, forEach: hn, count: function(e) {
  return e ? ue(e).length : 0;
}, only: function(e) {
  var t = ue(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: ue }, s1 = L.__e;
L.__e = function(e, t, r, n) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = r.__e, t.__k = r.__k), o.__c(e, t);
  }
  s1(e, t, r, n);
};
var gn = L.unmount;
function si(e, t, r) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), e.__c.__H = null), (e = ti({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
    return si(n, t, r);
  })), e;
}
function li(e, t, r) {
  return e && r && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
    return li(n, t, r);
  }), e.__c && e.__c.__P === t && (e.__e && r.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = r)), e;
}
function at() {
  this.__u = 0, this.o = null, this.__b = null;
}
function ci(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function l1(e) {
  var t, r, n;
  function o(i) {
    if (t || (t = e()).then(function(a) {
      r = a.default || a;
    }, function(a) {
      n = a;
    }), n) throw n;
    if (!r) throw t;
    return de(r, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function qe() {
  this.i = null, this.l = null;
}
L.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), gn && gn(e);
}, (at.prototype = new le()).__c = function(e, t) {
  var r = t.__c, n = this;
  n.o == null && (n.o = []), n.o.push(r);
  var o = ci(n.__v), i = !1, a = function() {
    i || (i = !0, r.__R = null, o ? o(u) : u());
  };
  r.__R = a;
  var u = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var l = n.state.__a;
        n.__v.__k[0] = li(l, l.__c.__P, l.__c.__O);
      }
      var c;
      for (n.setState({ __a: n.__b = null }); c = n.o.pop(); ) c.forceUpdate();
    }
  };
  n.__u++ || 32 & t.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(a, a);
}, at.prototype.componentWillUnmount = function() {
  this.o = [];
}, at.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = si(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var o = t.__a && de(Y, null, e.fallback);
  return o && (o.__u &= -33), [de(Y, null, t.__a ? null : e.children), o];
};
var vn = function(e, t, r) {
  if (++r[1] === r[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (r = e.i; r; ) {
    for (; r.length > 3; ) r.pop()();
    if (r[1] < r[0]) break;
    e.i = r = r[2];
  }
};
function c1(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function u1(e) {
  var t = this, r = e.h;
  t.componentWillUnmount = function() {
    Ce(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== r && t.componentWillUnmount(), t.v || (t.h = r, t.v = { nodeType: 1, parentNode: r, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(n) {
    this.childNodes.push(n), t.h.appendChild(n);
  }, insertBefore: function(n, o) {
    this.childNodes.push(n), t.h.insertBefore(n, o);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.h.removeChild(n);
  } }), Ce(de(c1, { context: t.context }, e.__v), t.v);
}
function d1(e, t) {
  var r = de(u1, { __v: e, h: t });
  return r.containerInfo = t, r;
}
(qe.prototype = new le()).__a = function(e) {
  var t = this, r = ci(t.__v), n = t.l.get(e);
  return n[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (n.push(o), vn(t, e, n)) : o();
    };
    r ? r(i) : i();
  };
}, qe.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = ue(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var r = t.length; r--; ) this.l.set(t[r], this.i = [1, 0, this.i]);
  return e.children;
}, qe.prototype.componentDidUpdate = qe.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, r) {
    vn(e, r, t);
  });
};
var ui = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, p1 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, f1 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, h1 = /[A-Z0-9]/g, g1 = typeof document < "u", v1 = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function m1(e, t, r) {
  return t.__k == null && (t.textContent = ""), Ce(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
function y1(e, t, r) {
  return Zo(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
le.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(le.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var mn = L.event;
function _1() {
}
function b1() {
  return this.cancelBubble;
}
function C1() {
  return this.defaultPrevented;
}
L.event = function(e) {
  return mn && (e = mn(e)), e.persist = _1, e.isPropagationStopped = b1, e.isDefaultPrevented = C1, e.nativeEvent = e;
};
var Gr, w1 = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, yn = L.vnode;
L.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var r = t.props, n = t.type, o = {}, i = n.indexOf("-") === -1;
    for (var a in r) {
      var u = r[a];
      if (!(a === "value" && "defaultValue" in r && u == null || g1 && a === "children" && n === "noscript" || a === "class" || a === "className")) {
        var l = a.toLowerCase();
        a === "defaultValue" && "value" in r && r.value == null ? a = "value" : a === "download" && u === !0 ? u = "" : l === "translate" && u === "no" ? u = !1 : l[0] === "o" && l[1] === "n" ? l === "ondoubleclick" ? a = "ondblclick" : l !== "onchange" || n !== "input" && n !== "textarea" || v1(r.type) ? l === "onfocus" ? a = "onfocusin" : l === "onblur" ? a = "onfocusout" : f1.test(a) && (a = l) : l = a = "oninput" : i && p1.test(a) ? a = a.replace(h1, "-$&").toLowerCase() : u === null && (u = void 0), l === "oninput" && o[a = l] && (a = "oninputCapture"), o[a] = u;
      }
    }
    n == "select" && o.multiple && Array.isArray(o.value) && (o.value = ue(r.children).forEach(function(c) {
      c.props.selected = o.value.indexOf(c.props.value) != -1;
    })), n == "select" && o.defaultValue != null && (o.value = ue(r.children).forEach(function(c) {
      c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value;
    })), r.class && !r.className ? (o.class = r.class, Object.defineProperty(o, "className", w1)) : (r.className && !r.class || r.class && r.className) && (o.class = o.className = r.className), t.props = o;
  }(e), e.$$typeof = ui, yn && yn(e);
};
var _n = L.__r;
L.__r = function(e) {
  _n && _n(e), Gr = e.__c;
};
var bn = L.diffed;
L.diffed = function(e) {
  bn && bn(e);
  var t = e.props, r = e.__e;
  r != null && e.type === "textarea" && "value" in t && t.value !== r.value && (r.value = t.value == null ? "" : t.value), Gr = null;
};
var x1 = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return Gr.__n[e.__c].props.value;
}, useCallback: Ko, useContext: Jo, useDebugValue: Yo, useDeferredValue: oi, useEffect: P, useId: Qo, useImperativeHandle: Xo, useInsertionEffect: ai, useLayoutEffect: We, useMemo: lt, useReducer: Dr, useRef: J, useState: Z, useSyncExternalStore: ri, useTransition: ii } } };
function A1(e) {
  return de.bind(null, e);
}
function ct(e) {
  return !!e && e.$$typeof === ui;
}
function k1(e) {
  return ct(e) && e.type === Y;
}
function S1(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function L1(e) {
  return ct(e) ? Yi.apply(null, arguments) : e;
}
function M1(e) {
  return !!e.__k && (Ce(null, e), !0);
}
function P1(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var E1 = function(e, t) {
  return e(t);
}, R1 = function(e, t) {
  return e(t);
}, I1 = Y, $1 = ct, Cn = { useState: Z, useId: Qo, useReducer: Dr, useEffect: P, useLayoutEffect: We, useInsertionEffect: ai, useTransition: ii, useDeferredValue: oi, useSyncExternalStore: ri, startTransition: ni, useRef: J, useImperativeHandle: Xo, useMemo: lt, useCallback: Ko, useContext: Jo, useDebugValue: Yo, version: "18.3.1", Children: a1, render: m1, hydrate: y1, unmountComponentAtNode: M1, createPortal: d1, createElement: de, createContext: Qi, createFactory: A1, cloneElement: L1, createRef: Zi, Fragment: Y, isValidElement: ct, isElement: $1, isFragment: k1, isMemo: S1, findDOMNode: P1, Component: le, PureComponent: Ir, memo: o1, forwardRef: fe, flushSync: R1, unstable_batchedUpdates: E1, StrictMode: I1, Suspense: at, SuspenseList: qe, lazy: l1, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: x1 };
const T1 = (e) => e;
function O1(e, t = T1) {
  const r = Cn.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return Cn.useDebugValue(r), r;
}
const wn = (e) => {
  const t = n1(e), r = (n) => O1(t, n);
  return Object.assign(r, t), r;
}, ut = (e) => e ? wn(e) : wn;
function N1(e, t) {
  let r;
  try {
    r = e();
  } catch {
    return;
  }
  return {
    getItem: (o) => {
      var i;
      const a = (l) => l === null ? null : JSON.parse(l, void 0), u = (i = r.getItem(o)) != null ? i : null;
      return u instanceof Promise ? u.then(a) : a(u);
    },
    setItem: (o, i) => r.setItem(
      o,
      JSON.stringify(i, void 0)
    ),
    removeItem: (o) => r.removeItem(o)
  };
}
const $r = (e) => (t) => {
  try {
    const r = e(t);
    return r instanceof Promise ? r : {
      then(n) {
        return $r(n)(r);
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
        return $r(n)(r);
      }
    };
  }
}, H1 = (e, t) => (r, n, o) => {
  let i = {
    storage: N1(() => localStorage),
    partialize: (_) => _,
    version: 0,
    merge: (_, S) => ({
      ...S,
      ..._
    }),
    ...t
  }, a = !1;
  const u = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  let c = i.storage;
  if (!c)
    return e(
      (..._) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), r(..._);
      },
      n,
      o
    );
  const p = () => {
    const _ = i.partialize({ ...n() });
    return c.setItem(i.name, {
      state: _,
      version: i.version
    });
  }, d = o.setState;
  o.setState = (_, S) => {
    d(_, S), p();
  };
  const f = e(
    (..._) => {
      r(..._), p();
    },
    n,
    o
  );
  o.getInitialState = () => f;
  let g;
  const k = () => {
    var _, S;
    if (!c) return;
    a = !1, u.forEach((y) => {
      var h;
      return y((h = n()) != null ? h : f);
    });
    const x = ((S = i.onRehydrateStorage) == null ? void 0 : S.call(i, (_ = n()) != null ? _ : f)) || void 0;
    return $r(c.getItem.bind(c))(i.name).then((y) => {
      if (y)
        if (typeof y.version == "number" && y.version !== i.version) {
          if (i.migrate) {
            const h = i.migrate(
              y.state,
              y.version
            );
            return h instanceof Promise ? h.then((m) => [!0, m]) : [!0, h];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, y.state];
      return [!1, void 0];
    }).then((y) => {
      var h;
      const [m, w] = y;
      if (g = i.merge(
        w,
        (h = n()) != null ? h : f
      ), r(g, !0), m)
        return p();
    }).then(() => {
      x == null || x(g, void 0), g = n(), a = !0, l.forEach((y) => y(g));
    }).catch((y) => {
      x == null || x(void 0, y);
    });
  };
  return o.persist = {
    setOptions: (_) => {
      i = {
        ...i,
        ..._
      }, _.storage && (c = _.storage);
    },
    clearStorage: () => {
      c == null || c.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => k(),
    hasHydrated: () => a,
    onHydrate: (_) => (u.add(_), () => {
      u.delete(_);
    }),
    onFinishHydration: (_) => (l.add(_), () => {
      l.delete(_);
    })
  }, i.skipHydration || k(), g || f;
}, di = H1;
function z1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yt, xn;
function pi() {
  if (xn) return yt;
  xn = 1;
  var e = Object.prototype.toString;
  return yt = function(r) {
    var n = e.call(r), o = n === "[object Arguments]";
    return o || (o = n !== "[object Array]" && r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && e.call(r.callee) === "[object Function]"), o;
  }, yt;
}
var _t, An;
function B1() {
  if (An) return _t;
  An = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, n = pi(), o = Object.prototype.propertyIsEnumerable, i = !o.call({ toString: null }, "toString"), a = o.call(function() {
    }, "prototype"), u = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], l = function(f) {
      var g = f.constructor;
      return g && g.prototype === f;
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
    e = function(g) {
      var k = g !== null && typeof g == "object", _ = r.call(g) === "[object Function]", S = n(g), x = k && r.call(g) === "[object String]", y = [];
      if (!k && !_ && !S)
        throw new TypeError("Object.keys called on a non-object");
      var h = a && _;
      if (x && g.length > 0 && !t.call(g, 0))
        for (var m = 0; m < g.length; ++m)
          y.push(String(m));
      if (S && g.length > 0)
        for (var w = 0; w < g.length; ++w)
          y.push(String(w));
      else
        for (var v in g)
          !(h && v === "prototype") && t.call(g, v) && y.push(String(v));
      if (i)
        for (var A = d(g), I = 0; I < u.length; ++I)
          !(A && u[I] === "constructor") && t.call(g, u[I]) && y.push(u[I]);
      return y;
    };
  }
  return _t = e, _t;
}
var bt, kn;
function F1() {
  if (kn) return bt;
  kn = 1;
  var e = Array.prototype.slice, t = pi(), r = Object.keys, n = r ? function(a) {
    return r(a);
  } : B1(), o = Object.keys;
  return n.shim = function() {
    if (Object.keys) {
      var a = function() {
        var u = Object.keys(arguments);
        return u && u.length === arguments.length;
      }(1, 2);
      a || (Object.keys = function(l) {
        return t(l) ? o(e.call(l)) : o(l);
      });
    } else
      Object.keys = n;
    return Object.keys || n;
  }, bt = n, bt;
}
var Ct, Sn;
function dt() {
  if (Sn) return Ct;
  Sn = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Ct = e, Ct;
}
var wt, Ln;
function fi() {
  return Ln || (Ln = 1, wt = SyntaxError), wt;
}
var xt, Mn;
function Xe() {
  return Mn || (Mn = 1, xt = TypeError), xt;
}
var At, Pn;
function j1() {
  return Pn || (Pn = 1, At = Object.getOwnPropertyDescriptor), At;
}
var kt, En;
function pt() {
  if (En) return kt;
  En = 1;
  var e = /* @__PURE__ */ j1();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return kt = e, kt;
}
var St, Rn;
function hi() {
  if (Rn) return St;
  Rn = 1;
  var e = /* @__PURE__ */ dt(), t = /* @__PURE__ */ fi(), r = /* @__PURE__ */ Xe(), n = /* @__PURE__ */ pt();
  return St = function(i, a, u) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new r("`obj` must be an object or a function`");
    if (typeof a != "string" && typeof a != "symbol")
      throw new r("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
      throw new r("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
      throw new r("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
      throw new r("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
      throw new r("`loose`, if provided, must be a boolean");
    var l = arguments.length > 3 ? arguments[3] : null, c = arguments.length > 4 ? arguments[4] : null, p = arguments.length > 5 ? arguments[5] : null, d = arguments.length > 6 ? arguments[6] : !1, f = !!n && n(i, a);
    if (e)
      e(i, a, {
        configurable: p === null && f ? f.configurable : !p,
        enumerable: l === null && f ? f.enumerable : !l,
        value: u,
        writable: c === null && f ? f.writable : !c
      });
    else if (d || !l && !c && !p)
      i[a] = u;
    else
      throw new t("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, St;
}
var Lt, In;
function gi() {
  if (In) return Lt;
  In = 1;
  var e = /* @__PURE__ */ dt(), t = function() {
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
  }, Lt = t, Lt;
}
var Mt, $n;
function vi() {
  if ($n) return Mt;
  $n = 1;
  var e = F1(), t = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", r = Object.prototype.toString, n = Array.prototype.concat, o = /* @__PURE__ */ hi(), i = function(c) {
    return typeof c == "function" && r.call(c) === "[object Function]";
  }, a = /* @__PURE__ */ gi()(), u = function(c, p, d, f) {
    if (p in c) {
      if (f === !0) {
        if (c[p] === d)
          return;
      } else if (!i(f) || !f())
        return;
    }
    a ? o(c, p, d, !0) : o(c, p, d);
  }, l = function(c, p) {
    var d = arguments.length > 2 ? arguments[2] : {}, f = e(p);
    t && (f = n.call(f, Object.getOwnPropertySymbols(p)));
    for (var g = 0; g < f.length; g += 1)
      u(c, f[g], p[f[g]], d[f[g]]);
  };
  return l.supportsDescriptors = !!a, Mt = l, Mt;
}
var Pt = { exports: {} }, Et, Tn;
function mi() {
  return Tn || (Tn = 1, Et = Object), Et;
}
var Rt, On;
function D1() {
  return On || (On = 1, Rt = Error), Rt;
}
var It, Nn;
function q1() {
  return Nn || (Nn = 1, It = EvalError), It;
}
var $t, Hn;
function G1() {
  return Hn || (Hn = 1, $t = RangeError), $t;
}
var Tt, zn;
function U1() {
  return zn || (zn = 1, Tt = ReferenceError), Tt;
}
var Ot, Bn;
function V1() {
  return Bn || (Bn = 1, Ot = URIError), Ot;
}
var Nt, Fn;
function Z1() {
  return Fn || (Fn = 1, Nt = Math.abs), Nt;
}
var Ht, jn;
function W1() {
  return jn || (jn = 1, Ht = Math.floor), Ht;
}
var zt, Dn;
function X1() {
  return Dn || (Dn = 1, zt = Math.max), zt;
}
var Bt, qn;
function K1() {
  return qn || (qn = 1, Bt = Math.min), Bt;
}
var Ft, Gn;
function J1() {
  return Gn || (Gn = 1, Ft = Math.pow), Ft;
}
var jt, Un;
function Y1() {
  return Un || (Un = 1, jt = Math.round), jt;
}
var Dt, Vn;
function Q1() {
  return Vn || (Vn = 1, Dt = Number.isNaN || function(t) {
    return t !== t;
  }), Dt;
}
var qt, Zn;
function ea() {
  if (Zn) return qt;
  Zn = 1;
  var e = /* @__PURE__ */ Q1();
  return qt = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, qt;
}
var Gt, Wn;
function ta() {
  return Wn || (Wn = 1, Gt = function() {
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
    var a = Object.getOwnPropertySymbols(t);
    if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
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
var Ut, Xn;
function ra() {
  if (Xn) return Ut;
  Xn = 1;
  var e = typeof Symbol < "u" && Symbol, t = ta();
  return Ut = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Ut;
}
var Vt, Kn;
function yi() {
  return Kn || (Kn = 1, Vt = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Vt;
}
var Zt, Jn;
function _i() {
  if (Jn) return Zt;
  Jn = 1;
  var e = /* @__PURE__ */ mi();
  return Zt = e.getPrototypeOf || null, Zt;
}
var Wt, Yn;
function na() {
  if (Yn) return Wt;
  Yn = 1;
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
  }, a = function(u, l) {
    for (var c = "", p = 0; p < u.length; p += 1)
      c += u[p], p + 1 < u.length && (c += l);
    return c;
  };
  return Wt = function(l) {
    var c = this;
    if (typeof c != "function" || t.apply(c) !== n)
      throw new TypeError(e + c);
    for (var p = i(arguments, 1), d, f = function() {
      if (this instanceof d) {
        var x = c.apply(
          this,
          o(p, arguments)
        );
        return Object(x) === x ? x : this;
      }
      return c.apply(
        l,
        o(p, arguments)
      );
    }, g = r(0, c.length - p.length), k = [], _ = 0; _ < g; _++)
      k[_] = "$" + _;
    if (d = Function("binder", "return function (" + a(k, ",") + "){ return binder.apply(this,arguments); }")(f), c.prototype) {
      var S = function() {
      };
      S.prototype = c.prototype, d.prototype = new S(), S.prototype = null;
    }
    return d;
  }, Wt;
}
var Xt, Qn;
function Ke() {
  if (Qn) return Xt;
  Qn = 1;
  var e = na();
  return Xt = Function.prototype.bind || e, Xt;
}
var Kt, eo;
function Ur() {
  return eo || (eo = 1, Kt = Function.prototype.call), Kt;
}
var Jt, to;
function Vr() {
  return to || (to = 1, Jt = Function.prototype.apply), Jt;
}
var Yt, ro;
function oa() {
  return ro || (ro = 1, Yt = typeof Reflect < "u" && Reflect && Reflect.apply), Yt;
}
var Qt, no;
function bi() {
  if (no) return Qt;
  no = 1;
  var e = Ke(), t = Vr(), r = Ur(), n = oa();
  return Qt = n || e.call(r, t), Qt;
}
var er, oo;
function Zr() {
  if (oo) return er;
  oo = 1;
  var e = Ke(), t = /* @__PURE__ */ Xe(), r = Ur(), n = bi();
  return er = function(i) {
    if (i.length < 1 || typeof i[0] != "function")
      throw new t("a function is required");
    return n(e, r, i);
  }, er;
}
var tr, io;
function ia() {
  if (io) return tr;
  io = 1;
  var e = Zr(), t = /* @__PURE__ */ pt(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (a) {
    if (!a || typeof a != "object" || !("code" in a) || a.code !== "ERR_PROTO_ACCESS")
      throw a;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, i = o.getPrototypeOf;
  return tr = n && typeof n.get == "function" ? e([n.get]) : typeof i == "function" ? (
    /** @type {import('./get')} */
    function(u) {
      return i(u == null ? u : o(u));
    }
  ) : !1, tr;
}
var rr, ao;
function aa() {
  if (ao) return rr;
  ao = 1;
  var e = yi(), t = _i(), r = /* @__PURE__ */ ia();
  return rr = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : r ? function(o) {
    return r(o);
  } : null, rr;
}
var nr, so;
function Ci() {
  if (so) return nr;
  so = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = Ke();
  return nr = r.call(e, t), nr;
}
var or, lo;
function wi() {
  if (lo) return or;
  lo = 1;
  var e, t = /* @__PURE__ */ mi(), r = /* @__PURE__ */ D1(), n = /* @__PURE__ */ q1(), o = /* @__PURE__ */ G1(), i = /* @__PURE__ */ U1(), a = /* @__PURE__ */ fi(), u = /* @__PURE__ */ Xe(), l = /* @__PURE__ */ V1(), c = /* @__PURE__ */ Z1(), p = /* @__PURE__ */ W1(), d = /* @__PURE__ */ X1(), f = /* @__PURE__ */ K1(), g = /* @__PURE__ */ J1(), k = /* @__PURE__ */ Y1(), _ = /* @__PURE__ */ ea(), S = Function, x = function(ie) {
    try {
      return S('"use strict"; return (' + ie + ").constructor;")();
    } catch {
    }
  }, y = /* @__PURE__ */ pt(), h = /* @__PURE__ */ dt(), m = function() {
    throw new u();
  }, w = y ? function() {
    try {
      return arguments.callee, m;
    } catch {
      try {
        return y(arguments, "callee").get;
      } catch {
        return m;
      }
    }
  }() : m, v = ra()(), A = aa(), I = _i(), $ = yi(), K = Vr(), j = Ur(), H = {}, ne = typeof Uint8Array > "u" || !A ? e : A(Uint8Array), D = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": v && A ? A([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": H,
    "%AsyncGenerator%": H,
    "%AsyncGeneratorFunction%": H,
    "%AsyncIteratorPrototype%": H,
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
    "%GeneratorFunction%": H,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": v && A ? A(A([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !v || !A ? e : A((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": y,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": o,
    "%ReferenceError%": i,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !v || !A ? e : A((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": v && A ? A(""[Symbol.iterator]()) : e,
    "%Symbol%": v ? Symbol : e,
    "%SyntaxError%": a,
    "%ThrowTypeError%": w,
    "%TypedArray%": ne,
    "%TypeError%": u,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": l,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": j,
    "%Function.prototype.apply%": K,
    "%Object.defineProperty%": h,
    "%Object.getPrototypeOf%": I,
    "%Math.abs%": c,
    "%Math.floor%": p,
    "%Math.max%": d,
    "%Math.min%": f,
    "%Math.pow%": g,
    "%Math.round%": k,
    "%Math.sign%": _,
    "%Reflect.getPrototypeOf%": $
  };
  if (A)
    try {
      null.error;
    } catch (ie) {
      var oe = A(A(ie));
      D["%Error.prototype%"] = oe;
    }
  var R = function ie(B) {
    var V;
    if (B === "%AsyncFunction%")
      V = x("async function () {}");
    else if (B === "%GeneratorFunction%")
      V = x("function* () {}");
    else if (B === "%AsyncGeneratorFunction%")
      V = x("async function* () {}");
    else if (B === "%AsyncGenerator%") {
      var q = ie("%AsyncGeneratorFunction%");
      q && (V = q.prototype);
    } else if (B === "%AsyncIteratorPrototype%") {
      var W = ie("%AsyncGenerator%");
      W && A && (V = A(W.prototype));
    }
    return D[B] = V, V;
  }, he = {
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
  }, O = Ke(), z = /* @__PURE__ */ Ci(), xe = O.call(j, Array.prototype.concat), Je = O.call(K, Array.prototype.splice), He = O.call(j, String.prototype.replace), ye = O.call(j, String.prototype.slice), Ae = O.call(j, RegExp.prototype.exec), ke = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ze = /\\(\\)?/g, Se = function(B) {
    var V = ye(B, 0, 1), q = ye(B, -1);
    if (V === "%" && q !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (q === "%" && V !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var W = [];
    return He(B, ke, function(ae, Le, X, Ye) {
      W[W.length] = X ? He(Ye, ze, "$1") : Le || ae;
    }), W;
  }, Ui = function(B, V) {
    var q = B, W;
    if (z(he, q) && (W = he[q], q = "%" + W[0] + "%"), z(D, q)) {
      var ae = D[q];
      if (ae === H && (ae = R(q)), typeof ae > "u" && !V)
        throw new u("intrinsic " + B + " exists, but is not available. Please file an issue!");
      return {
        alias: W,
        name: q,
        value: ae
      };
    }
    throw new a("intrinsic " + B + " does not exist!");
  };
  return or = function(B, V) {
    if (typeof B != "string" || B.length === 0)
      throw new u("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof V != "boolean")
      throw new u('"allowMissing" argument must be a boolean');
    if (Ae(/^%?[^%]*%?$/, B) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var q = Se(B), W = q.length > 0 ? q[0] : "", ae = Ui("%" + W + "%", V), Le = ae.name, X = ae.value, Ye = !1, gt = ae.alias;
    gt && (W = gt[0], Je(q, xe([0, 1], gt)));
    for (var Qe = 1, Be = !0; Qe < q.length; Qe += 1) {
      var ce = q[Qe], et = ye(ce, 0, 1), tt = ye(ce, -1);
      if ((et === '"' || et === "'" || et === "`" || tt === '"' || tt === "'" || tt === "`") && et !== tt)
        throw new a("property names with quotes must have matching quotes");
      if ((ce === "constructor" || !Be) && (Ye = !0), W += "." + ce, Le = "%" + W + "%", z(D, Le))
        X = D[Le];
      else if (X != null) {
        if (!(ce in X)) {
          if (!V)
            throw new u("base intrinsic for " + B + " exists, but the property is not available.");
          return;
        }
        if (y && Qe + 1 >= q.length) {
          var rt = y(X, ce);
          Be = !!rt, Be && "get" in rt && !("originalValue" in rt.get) ? X = rt.get : X = X[ce];
        } else
          Be = z(X, ce), X = X[ce];
        Be && !Ye && (D[Le] = X);
      }
    }
    return X;
  }, or;
}
var ir, co;
function sa() {
  if (co) return ir;
  co = 1;
  var e = /* @__PURE__ */ wi(), t = /* @__PURE__ */ hi(), r = /* @__PURE__ */ gi()(), n = /* @__PURE__ */ pt(), o = /* @__PURE__ */ Xe(), i = e("%Math.floor%");
  return ir = function(u, l) {
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
  }, ir;
}
var ar, uo;
function la() {
  if (uo) return ar;
  uo = 1;
  var e = Ke(), t = Vr(), r = bi();
  return ar = function() {
    return r(e, t, arguments);
  }, ar;
}
var po;
function ca() {
  return po || (po = 1, function(e) {
    var t = /* @__PURE__ */ sa(), r = /* @__PURE__ */ dt(), n = Zr(), o = la();
    e.exports = function(a) {
      var u = n(arguments), l = a.length - (arguments.length - 1);
      return t(
        u,
        1 + (l > 0 ? l : 0),
        !0
      );
    }, r ? r(e.exports, "apply", { value: o }) : e.exports.apply = o;
  }(Pt)), Pt.exports;
}
var sr, fo;
function ua() {
  if (fo) return sr;
  fo = 1;
  var e = /* @__PURE__ */ Xe();
  return sr = function(r) {
    if (r == null)
      throw new e(arguments.length > 0 && arguments[1] || "Cannot call method on " + r);
    return r;
  }, sr;
}
var lr, ho;
function da() {
  if (ho) return lr;
  ho = 1;
  var e = /* @__PURE__ */ wi(), t = Zr(), r = t([e("%String.prototype.indexOf%")]);
  return lr = function(o, i) {
    var a = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!i)
    );
    return typeof a == "function" && r(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [a]
    ) : a;
  }, lr;
}
var cr, go;
function xi() {
  if (go) return cr;
  go = 1;
  var e = /* @__PURE__ */ ua(), t = /* @__PURE__ */ da(), r = t("Object.prototype.propertyIsEnumerable"), n = t("Array.prototype.push");
  return cr = function(i) {
    var a = e(i), u = [];
    for (var l in a)
      r(a, l) && n(u, [l, a[l]]);
    return u;
  }, cr;
}
var ur, vo;
function Ai() {
  if (vo) return ur;
  vo = 1;
  var e = xi();
  return ur = function() {
    return typeof Object.entries == "function" ? Object.entries : e;
  }, ur;
}
var dr, mo;
function pa() {
  if (mo) return dr;
  mo = 1;
  var e = Ai(), t = vi();
  return dr = function() {
    var n = e();
    return t(Object, { entries: n }, {
      entries: function() {
        return Object.entries !== n;
      }
    }), n;
  }, dr;
}
var pr, yo;
function fa() {
  if (yo) return pr;
  yo = 1;
  var e = vi(), t = ca(), r = xi(), n = Ai(), o = pa(), i = t(n(), Object);
  return e(i, {
    getPolyfill: n,
    implementation: r,
    shim: o
  }), pr = i, pr;
}
var fr, _o;
function ha() {
  if (_o) return fr;
  _o = 1;
  var e = {}, t = e.NODE_ENV !== "production", r = function() {
  };
  if (t) {
    var n = function(i, a) {
      var u = arguments.length;
      a = new Array(u > 1 ? u - 1 : 0);
      for (var l = 1; l < u; l++)
        a[l - 1] = arguments[l];
      var c = 0, p = "Warning: " + i.replace(/%s/g, function() {
        return a[c++];
      });
      typeof console < "u" && console.error(p);
      try {
        throw new Error(p);
      } catch {
      }
    };
    r = function(o, i, a) {
      var u = arguments.length;
      a = new Array(u > 2 ? u - 2 : 0);
      for (var l = 2; l < u; l++)
        a[l - 2] = arguments[l];
      if (i === void 0)
        throw new Error(
          "`warning(condition, format, ...args)` requires a warning message argument"
        );
      o || n.apply(null, [i].concat(a));
    };
  }
  return fr = r, fr;
}
var hr, bo;
function ga() {
  if (bo) return hr;
  bo = 1;
  var e = fa(), t = ha(), r = /* @__PURE__ */ Ci(), n = function(m) {
    t(!1, m);
  }, o = String.prototype.replace, i = String.prototype.split, a = "||||", u = function(h) {
    var m = h % 100, w = m % 10;
    return m !== 11 && w === 1 ? 0 : 2 <= w && w <= 4 && !(m >= 12 && m <= 14) ? 1 : 2;
  }, l = {
    // Mapping from pluralization group plural logic.
    pluralTypes: {
      arabic: function(h) {
        if (h < 3)
          return h;
        var m = h % 100;
        return m >= 3 && m <= 10 ? 3 : m >= 11 ? 4 : 5;
      },
      bosnian_serbian: u,
      chinese: function() {
        return 0;
      },
      croatian: u,
      french: function(h) {
        return h >= 2 ? 1 : 0;
      },
      german: function(h) {
        return h !== 1 ? 1 : 0;
      },
      russian: u,
      lithuanian: function(h) {
        return h % 10 === 1 && h % 100 !== 11 ? 0 : h % 10 >= 2 && h % 10 <= 9 && (h % 100 < 11 || h % 100 > 19) ? 1 : 2;
      },
      czech: function(h) {
        return h === 1 ? 0 : h >= 2 && h <= 4 ? 1 : 2;
      },
      polish: function(h) {
        if (h === 1)
          return 0;
        var m = h % 10;
        return 2 <= m && m <= 4 && (h % 100 < 10 || h % 100 >= 20) ? 1 : 2;
      },
      icelandic: function(h) {
        return h % 10 !== 1 || h % 100 === 11 ? 1 : 0;
      },
      slovenian: function(h) {
        var m = h % 100;
        return m === 1 ? 0 : m === 2 ? 1 : m === 3 || m === 4 ? 2 : 3;
      },
      romanian: function(h) {
        if (h === 1)
          return 0;
        var m = h % 100;
        return h === 0 || m >= 2 && m <= 19 ? 1 : 2;
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
  function c(h) {
    for (var m = {}, w = e(h), v = 0; v < w.length; v += 1)
      for (var A = w[v][0], I = w[v][1], $ = 0; $ < I.length; $ += 1)
        m[I[$]] = A;
    return m;
  }
  function p(h, m) {
    var w = c(h.pluralTypeToLanguages);
    return w[m] || w[i.call(m, /-/, 1)[0]] || w.en;
  }
  function d(h, m, w) {
    return h.pluralTypes[m](w);
  }
  function f() {
    var h = {};
    return function(m, w) {
      var v = h[w];
      return v && !m.pluralTypes[v] && (v = null, h[w] = v), v || (v = p(m, w), v && (h[w] = v)), v;
    };
  }
  function g(h) {
    return h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function k(h) {
    var m = h && h.prefix || "%{", w = h && h.suffix || "}";
    if (m === a || w === a)
      throw new RangeError('"' + a + '" token is reserved for pluralization');
    return new RegExp(g(m) + "(.*?)" + g(w), "g");
  }
  var _ = f(), S = /%\{(.*?)\}/g;
  function x(h, m, w, v, A, I) {
    if (typeof h != "string")
      throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
    if (m == null)
      return h;
    var $ = h, K = v || S, j = I || o, H = typeof m == "number" ? { smart_count: m } : m;
    if (H.smart_count != null && h) {
      var ne = A || l, D = i.call(h, a), oe = w || "en", R = _(ne, oe), he = d(
        ne,
        R,
        H.smart_count
      );
      $ = o.call(D[he] || D[0], /^[^\S]*|[^\S]*$/g, "");
    }
    return $ = j.call($, K, function(O, z) {
      return !r(H, z) || H[z] == null ? O : H[z];
    }), $;
  }
  function y(h) {
    var m = h || {};
    this.phrases = {}, this.extend(m.phrases || {}), this.currentLocale = m.locale || "en";
    var w = m.allowMissing ? x : null;
    this.onMissingKey = typeof m.onMissingKey == "function" ? m.onMissingKey : w, this.warn = m.warn || n, this.replaceImplementation = m.replace || o, this.tokenRegex = k(m.interpolation), this.pluralRules = m.pluralRules || l;
  }
  return y.prototype.locale = function(h) {
    return h && (this.currentLocale = h), this.currentLocale;
  }, y.prototype.extend = function(h, m) {
    for (var w = e(h || {}), v = 0; v < w.length; v += 1) {
      var A = w[v][0], I = w[v][1], $ = m ? m + "." + A : A;
      typeof I == "object" ? this.extend(I, $) : this.phrases[$] = I;
    }
  }, y.prototype.unset = function(h, m) {
    if (typeof h == "string")
      delete this.phrases[h];
    else
      for (var w = e(h || {}), v = 0; v < w.length; v += 1) {
        var A = w[v][0], I = w[v][1], $ = m ? m + "." + A : A;
        typeof I == "object" ? this.unset(I, $) : delete this.phrases[$];
      }
  }, y.prototype.clear = function() {
    this.phrases = {};
  }, y.prototype.replace = function(h) {
    this.clear(), this.extend(h);
  }, y.prototype.t = function(h, m) {
    var w, v, A = m ?? {};
    if (typeof this.phrases[h] == "string")
      w = this.phrases[h];
    else if (typeof A._ == "string")
      w = A._;
    else if (this.onMissingKey) {
      var I = this.onMissingKey;
      v = I(
        h,
        A,
        this.currentLocale,
        this.tokenRegex,
        this.pluralRules,
        this.replaceImplementation
      );
    } else
      this.warn('Missing translation for key: "' + h + '"'), v = h;
    return typeof w == "string" && (v = x(
      w,
      A,
      this.currentLocale,
      this.tokenRegex,
      this.pluralRules,
      this.replaceImplementation
    )), v;
  }, y.prototype.has = function(h) {
    return r(this.phrases, h);
  }, y.transformPhrase = function(m, w, v) {
    return x(m, w, v);
  }, hr = y, hr;
}
var va = ga();
const Co = /* @__PURE__ */ z1(va), ma = "Leitor de Texto ativado", ya = "Leitor de Texto", _a = "Aumentar Fonte", ba = "Espaço entre letras", Ca = "Espaço entre linhas", wa = "Destacar links", xa = "Destacar títulos", Aa = "Modo Leitor", ka = "Pausar animações", Sa = "Ocultar imagens", La = "Guia de leitura", Ma = "Máscara de leitura", Pa = "Cursor grande", Ea = "Cor do texto", Ra = "Médio", Ia = "Grande", $a = "Muito grande", Ta = "Desativado", Oa = "Em breve", Na = "Ativado", Ha = "Tela inteira", za = "Normal", Ba = "Claro", Fa = "Escuro", ja = "Configurações", Da = "Resetar", qa = "Alterar idioma", Ga = "Sem suporte", Ua = "O sintetizador de voz não é suportado pelo seu navegador", Va = "Interagir", Za = "Accesar link", Wa = { blind: "Cego", low_vision: "Baixa visão" }, Xa = { text_reader: "Ouvir o texto", font_increase: "Aumentar o tamanho da fonte", letter_spacing: "Modificar espaço entre as letras", line_spacing: "Modificar espaço entre linhas", highlight_links: "Destacar links", highlight_titles: "Destacar títulos", reset: "Resetar definições", close: "Fechar widget", change_language: "Alterar o idioma da ferramenta", reader_mode: "Ativar modo leitor", toggle_theme: "Alterar o tema", pause_animations: "Pausar animações", hide_images: "Esconder todas as imagens", reading_guide: "Ativar o Guia de leitura", reading_mask: "Ativar a Máscara de leitura", move_reading_mask: "Mover a Máscara de leitura", move_reading_guide: "Mover o Guia de leitura", large_cursor: "Ativar o cursor grande", text_color: "Alterar a cor do texto", open_accessibility_profiles: "Abrir ou fechar perfis de acessibilidade", blind: "Definições para pessoas cegas", low_vision: "Definições para pessoas com baixa visão" }, Ka = { reset: "Resetar definições", close: "Fechar widget", toggle_theme: "Alterar o tema" }, Ja = { text_and_typography: "Texto e Tipografia", reading_and_comprehension: "Leitura e Compreensão", focus_and_visibility: "Foco e Acessibilidade Visual", colors_and_contrast: "Cores e Contraste", distraction_reduction: "Redução de Distrações", accessibility_profiles: "Perfis de Acessibilidade" }, Ya = {
  text_reader_is_actived: ma,
  text_reader: ya,
  font_increase: _a,
  letter_spacing: ba,
  line_spacing: Ca,
  highlight_links: wa,
  highlight_titles: xa,
  reader_mode: Aa,
  pause_animations: ka,
  hide_images: Sa,
  reading_guide: La,
  reading_mask: Ma,
  large_cursor: Pa,
  text_color: Ea,
  medium: Ra,
  large: Ia,
  very_large: $a,
  deactivated: Ta,
  upcomming: Oa,
  actived: Na,
  full: Ha,
  normal: za,
  light: Ba,
  dark: Fa,
  settings: ja,
  reset: Da,
  change_language: qa,
  no_support: Ga,
  speech_is_not_supported: Ua,
  interact: Va,
  access_link: Za,
  profiles: Wa,
  al: Xa,
  titles: Ka,
  sections: Ja
}, Qa = "Text Reader is actived", es = "Text Reader", ts = "Increase Font", rs = "Letter Spacing", ns = "Line Spacing", os = "Highlight Links", is = "Highlight Titles", as = "Reader Mode", ss = "Pause Animations", ls = "Hide images", cs = "Reading Guide", us = "Reading Mask", ds = "Large Cursor", ps = "Text Color", fs = "Medium", hs = "Large", gs = "Very Large", vs = "Deactivated", ms = "Upcoming", ys = "Actived", _s = "Full", bs = "Normal", Cs = "Light", ws = "Dark", xs = "Settings", As = "Reset", ks = "Change language", Ss = "No support", Ls = "Speech Synthesis is not supported in this browser", Ms = "Interact", Ps = "Access link", Es = { blind: "Blind", low_vision: "Low Vision" }, Rs = { text_reader: "Read text", font_increase: "Increase font", letter_spacing: "Modify letter spacing", line_spacing: "Modify line spacing", highlight_links: "Highlight links", highlight_titles: "Highlight titles", reset: "Reset definitions", close: "Close widget", change_language: "Change application language", reader_mode: "Activate reader mode", toggle_theme: "Toggle theme", pause_animations: "Pause animations", hide_images: "Hide all images", reading_guide: "Activate reading guide", reading_mask: "Activate reading mask", move_reading_mask: "Move reading mask", move_reading_guide: "Move reading guide", large_cursor: "Activate large cursor", text_color: "Change text color", open_accessibility_profiles: "Open or close accessibility profiles", blind: "Definitions for blind people", low_vision: "Definitions for low vision people" }, Is = { reset: "Reset definitions", close: "Close widget", toggle_theme: "Toggle theme" }, $s = { text_and_typography: "Text and Typography", reading_and_comprehension: "Reading and Comprehension", focus_and_visibility: "Focus and Visibility", colors_and_contrast: "Colors and Contrast", distraction_reduction: "Distraction Reduction", accessibility_profiles: "Accessibility Profiles" }, Ts = {
  text_reader_is_actived: Qa,
  text_reader: es,
  font_increase: ts,
  letter_spacing: rs,
  line_spacing: ns,
  highlight_links: os,
  highlight_titles: is,
  reader_mode: as,
  pause_animations: ss,
  hide_images: ls,
  reading_guide: cs,
  reading_mask: us,
  large_cursor: ds,
  text_color: ps,
  medium: fs,
  large: hs,
  very_large: gs,
  deactivated: vs,
  upcoming: ms,
  actived: ys,
  full: _s,
  normal: bs,
  light: Cs,
  dark: ws,
  settings: xs,
  reset: As,
  change_language: ks,
  no_support: Ss,
  speech_is_not_supported: Ls,
  interact: Ms,
  access_link: Ps,
  profiles: Es,
  al: Rs,
  titles: Is,
  sections: $s
}, Os = "Leitor de texto ativado", Ns = "Leer texto", Hs = "Aumentar fuente", zs = "Espaciado entre letras", Bs = "Espaciado entre líneas", Fs = "Resaltar enlaces", js = "Resaltar títulos", Ds = "Modo lector", qs = "Pausar animaciones", Gs = "Ocultar imágenes", Us = "Guía de lectura", Vs = "Máscara de lectura", Zs = "Cursor grande", Ws = "Color del texto", Xs = "Mediano", Ks = "Grande", Js = "Muy grande", Ys = "Desactivado", Qs = "Proximamente", el = "Activado", tl = "Pantalla completa", rl = "Normal", nl = "Claro", ol = "Oscuro", il = "Configuraciones", al = "Restablecer", sl = "Cambiar idioma", ll = "Sin soporte", cl = "El sintetizador de voz no es compatible con su navegador", ul = "Interactuar", dl = "Acceder enlace", pl = { blind: "Ciego", low_vision: "Baja visión" }, fl = { text_reader: "Leer el texto", font_increase: "Aumentar el tamaño de la fuente", letter_spacing: "Modificar el espaciado entre letras", line_spacing: "Modificar el espaciado entre líneas", highlight_links: "Resaltar enlaces", highlight_titles: "Resaltar títulos", reset: "Restablecer configuraciones", close: "Cerrar widget", change_language: "Cambiar el idioma de la herramienta", reader_mode: "Activar modo lector", toggle_theme: "Cambiar el tema", pause_animations: "Pausar animaciones", hide_images: "Ocultar todas las imágenes", reading_guide: "Activar la guía de lectura", reading_mask: "Activar la máscara de lectura", move_reading_mask: "Mover la máscara de lectura", move_reading_guide: "Mover la guía de lectura", large_cursor: "Activar el cursor grande", text_color: "Cambiar el color del texto", open_accessibility_profiles: "Abrir o cerrar perfiles de accesibilidad", blind: "Configuraciones para personas ciegas", low_vision: "Configuraciones para personas con baja visión" }, hl = { reset: "Restablecer configuraciones", close: "Cerrar widget", toggle_theme: "Cambiar el tema" }, gl = { text_and_typography: "Texto y tipografía", reading_and_comprehension: "Lectura y comprensión", focus_and_visibility: "Enfoque y accesibilidad visual", colors_and_contrast: "Colores y contraste", distraction_reduction: "Reducción de distracciones", accessibility_profiles: "Perfiles de accesibilidad" }, vl = {
  text_reader_is_actived: Os,
  text_reader: Ns,
  font_increase: Hs,
  letter_spacing: zs,
  line_spacing: Bs,
  highlight_links: Fs,
  highlight_titles: js,
  reader_mode: Ds,
  pause_animations: qs,
  hide_images: Gs,
  reading_guide: Us,
  reading_mask: Vs,
  large_cursor: Zs,
  text_color: Ws,
  medium: Xs,
  large: Ks,
  very_large: Js,
  deactivated: Ys,
  upcoming: Qs,
  actived: el,
  full: tl,
  normal: rl,
  light: nl,
  dark: ol,
  settings: il,
  reset: al,
  change_language: sl,
  no_support: ll,
  speech_is_not_supported: cl,
  interact: ul,
  access_link: dl,
  profiles: pl,
  al: fl,
  titles: hl,
  sections: gl
}, wo = { pt: Ya, en: Ts, es: vl }, F = ut()(
  di(
    (e, t) => ({
      locale: "pt",
      polyglot: new Co({ locale: "pt", phrases: wo.pt }),
      setLocale: (r) => e(() => ({ locale: r, polyglot: new Co({ locale: r, phrases: wo[r] }) })),
      t: (r, n) => t().polyglot.t(r, n)
    }),
    {
      name: "@vlibras-widget-plus.locale",
      partialize: (e) => ({ locale: e.locale }),
      version: 1
    }
  )
), ki = (e, t) => F.getState().t(e, t), Wr = () => {
  const [e, t] = Z(!1);
  return P(() => {
    const r = () => {
      t(window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(hover: none)").matches);
    };
    return r(), window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), e;
}, gr = "@vwp-theme", ml = (e) => ["light", "dark"].includes(e), Si = ut((e) => ({
  theme: (() => {
    const t = localStorage.getItem(gr) || "";
    return ml(t) ? t : "light";
  })(),
  toggleTheme: () => e((t) => {
    const r = t.theme === "dark" ? "light" : "dark";
    return localStorage.setItem(gr, r), { theme: r };
  }),
  setTheme: (t) => {
    localStorage.setItem(gr, t), e({ theme: t });
  }
})), Li = () => {
  const [e, t] = Z(""), [r, n] = Z("");
  return P(() => {
    var o;
    e || t("0.2.0-alpha.0"), r || n(((o = window == null ? void 0 : window.VLibrasWidgetPlus) == null ? void 0 : o.path) ?? "./");
  }, [e, r]), { version: e, path: r };
}, Mi = () => {
  const [e, t] = Z({ x: 0, y: 0 });
  return P(() => {
    const r = (n) => {
      t({ x: n.clientX, y: n.clientY });
    };
    return window.addEventListener("mousemove", r), () => window.removeEventListener("mousemove", r);
  }, []), e;
}, Pi = () => {
  const [e, t] = Z({
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
};
function Ei(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Ei(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function yl() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Ei(e)) && (n && (n += " "), n += t);
  return n;
}
const Xr = "-", _l = (e) => {
  const t = Cl(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const u = a.split(Xr);
      return u[0] === "" && u.length !== 1 && u.shift(), Ri(u, t) || bl(a);
    },
    getConflictingClassGroupIds: (a, u) => {
      const l = r[a] || [];
      return u && n[a] ? [...l, ...n[a]] : l;
    }
  };
}, Ri = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Ri(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(Xr);
  return (a = t.validators.find(({
    validator: u
  }) => u(i))) == null ? void 0 : a.classGroupId;
}, xo = /^\[(.+)\]$/, bl = (e) => {
  if (xo.test(e)) {
    const t = xo.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Cl = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    Tr(r[o], n, o, t);
  return n;
}, Tr = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : Ao(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (wl(o)) {
        Tr(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      Tr(a, Ao(t, i), r, n);
    });
  });
}, Ao = (e, t) => {
  let r = e;
  return t.split(Xr).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, wl = (e) => e.isThemeGetter, xl = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (i, a) => {
    r.set(i, a), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let a = r.get(i);
      if (a !== void 0)
        return a;
      if ((a = n.get(i)) !== void 0)
        return o(i, a), a;
    },
    set(i, a) {
      r.has(i) ? r.set(i, a) : o(i, a);
    }
  };
}, Or = "!", Nr = ":", Al = Nr.length, kl = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const i = [];
    let a = 0, u = 0, l = 0, c;
    for (let k = 0; k < o.length; k++) {
      let _ = o[k];
      if (a === 0 && u === 0) {
        if (_ === Nr) {
          i.push(o.slice(l, k)), l = k + Al;
          continue;
        }
        if (_ === "/") {
          c = k;
          continue;
        }
      }
      _ === "[" ? a++ : _ === "]" ? a-- : _ === "(" ? u++ : _ === ")" && u--;
    }
    const p = i.length === 0 ? o : o.substring(l), d = Sl(p), f = d !== p, g = c && c > l ? c - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: f,
      baseClassName: d,
      maybePostfixModifierPosition: g
    };
  };
  if (t) {
    const o = t + Nr, i = n;
    n = (a) => a.startsWith(o) ? i(a.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
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
}, Sl = (e) => e.endsWith(Or) ? e.substring(0, e.length - 1) : e.startsWith(Or) ? e.substring(1) : e, Ll = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const o = [];
    let i = [];
    return n.forEach((a) => {
      a[0] === "[" || t[a] ? (o.push(...i.sort(), a), i = []) : i.push(a);
    }), o.push(...i.sort()), o;
  };
}, Ml = (e) => ({
  cache: xl(e.cacheSize),
  parseClassName: kl(e),
  sortModifiers: Ll(e),
  ..._l(e)
}), Pl = /\s+/, El = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = t, a = [], u = e.trim().split(Pl);
  let l = "";
  for (let c = u.length - 1; c >= 0; c -= 1) {
    const p = u[c], {
      isExternal: d,
      modifiers: f,
      hasImportantModifier: g,
      baseClassName: k,
      maybePostfixModifierPosition: _
    } = r(p);
    if (d) {
      l = p + (l.length > 0 ? " " + l : l);
      continue;
    }
    let S = !!_, x = n(S ? k.substring(0, _) : k);
    if (!x) {
      if (!S) {
        l = p + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (x = n(k), !x) {
        l = p + (l.length > 0 ? " " + l : l);
        continue;
      }
      S = !1;
    }
    const y = i(f).join(":"), h = g ? y + Or : y, m = h + x;
    if (a.includes(m))
      continue;
    a.push(m);
    const w = o(x, S);
    for (let v = 0; v < w.length; ++v) {
      const A = w[v];
      a.push(h + A);
    }
    l = p + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Rl() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Ii(t)) && (n && (n += " "), n += r);
  return n;
}
const Ii = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Ii(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Il(e, ...t) {
  let r, n, o, i = a;
  function a(l) {
    const c = t.reduce((p, d) => d(p), e());
    return r = Ml(c), n = r.cache.get, o = r.cache.set, i = u, u(l);
  }
  function u(l) {
    const c = n(l);
    if (c)
      return c;
    const p = El(l, r);
    return o(l, p), p;
  }
  return function() {
    return i(Rl.apply(null, arguments));
  };
}
const G = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, $i = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ti = /^\((?:(\w[\w-]*):)?(.+)\)$/i, $l = /^\d+\/\d+$/, Tl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ol = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Nl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Hl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, zl = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Me = (e) => $l.test(e), M = (e) => !!e && !Number.isNaN(Number(e)), ge = (e) => !!e && Number.isInteger(Number(e)), ko = (e) => e.endsWith("%") && M(e.slice(0, -1)), ve = (e) => Tl.test(e), Bl = () => !0, Fl = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ol.test(e) && !Nl.test(e)
), Kr = () => !1, jl = (e) => Hl.test(e), Dl = (e) => zl.test(e), ql = (e) => !b(e) && !C(e), Gl = (e) => Oe(e, Hi, Kr), b = (e) => $i.test(e), _e = (e) => Oe(e, zi, Fl), vr = (e) => Oe(e, tc, M), Ul = (e) => Oe(e, Oi, Kr), Vl = (e) => Oe(e, Ni, Dl), Zl = (e) => Oe(e, Kr, jl), C = (e) => Ti.test(e), Fe = (e) => Ne(e, zi), Wl = (e) => Ne(e, rc), Xl = (e) => Ne(e, Oi), Kl = (e) => Ne(e, Hi), Jl = (e) => Ne(e, Ni), Yl = (e) => Ne(e, nc, !0), Oe = (e, t, r) => {
  const n = $i.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Ne = (e, t, r = !1) => {
  const n = Ti.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Oi = (e) => e === "position", Ql = /* @__PURE__ */ new Set(["image", "url"]), Ni = (e) => Ql.has(e), ec = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Hi = (e) => ec.has(e), zi = (e) => e === "length", tc = (e) => e === "number", rc = (e) => e === "family-name", nc = (e) => e === "shadow", oc = () => {
  const e = G("color"), t = G("font"), r = G("text"), n = G("font-weight"), o = G("tracking"), i = G("leading"), a = G("breakpoint"), u = G("container"), l = G("spacing"), c = G("radius"), p = G("shadow"), d = G("inset-shadow"), f = G("drop-shadow"), g = G("blur"), k = G("perspective"), _ = G("aspect"), S = G("ease"), x = G("animate"), y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], h = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], m = () => ["auto", "hidden", "clip", "visible", "scroll"], w = () => ["auto", "contain", "none"], v = () => [C, b, l], A = () => [Me, "full", "auto", ...v()], I = () => [ge, "none", "subgrid", C, b], $ = () => ["auto", {
    span: ["full", ge, C, b]
  }, ge, C, b], K = () => [ge, "auto", C, b], j = () => ["auto", "min", "max", "fr", C, b], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], ne = () => ["start", "end", "center", "stretch"], D = () => ["auto", ...v()], oe = () => [Me, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...v()], R = () => [e, C, b], he = () => [ko, Fe, _e], O = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    C,
    b
  ], z = () => ["", M, Fe, _e], xe = () => ["solid", "dashed", "dotted", "double"], Je = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], He = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    g,
    C,
    b
  ], ye = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", C, b], Ae = () => ["none", M, C, b], ke = () => ["none", M, C, b], ze = () => [M, C, b], Se = () => [Me, "full", ...v()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ve],
      breakpoint: [ve],
      color: [Bl],
      container: [ve],
      "drop-shadow": [ve],
      ease: ["in", "out", "in-out"],
      font: [ql],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ve],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ve],
      shadow: [ve],
      spacing: ["px", M],
      text: [ve],
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
        aspect: ["auto", "square", Me, b, C, _]
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
        columns: [M, b, C, u]
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
        object: [...h(), b, C]
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
        overscroll: w()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": w()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": w()
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
        inset: A()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": A()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": A()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: A()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: A()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: A()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: A()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: A()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: A()
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
        z: [ge, "auto", C, b]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Me, "full", "auto", u, ...v()]
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
        flex: [M, Me, "auto", "initial", "none", b]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", M, C, b]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", M, C, b]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ge, "first", "last", "none", C, b]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": I()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: $()
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
        "grid-rows": I()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: $()
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
        justify: [...H(), "normal"]
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
        content: ["normal", ...H()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ne(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ne(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": H()
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
        m: D()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: D()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: D()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: D()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: D()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: D()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: D()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: D()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: D()
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
            screen: [a]
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
        text: ["base", r, Fe, _e]
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
        font: [n, C, vr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ko, b]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Wl, b, t]
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
        tracking: [o, C, b]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [M, "none", C, vr]
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
        "list-image": ["none", C, b]
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
        list: ["disc", "decimal", "none", C, b]
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
        decoration: [...xe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [M, "from-font", "auto", C, _e]
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
        "underline-offset": [M, "auto", C, b]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", C, b]
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
        content: ["none", C, b]
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
        bg: [...h(), Xl, Ul]
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
        bg: ["auto", "cover", "contain", Kl, Gl]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ge, C, b],
          radial: ["", C, b],
          conic: [ge, C, b]
        }, Jl, Vl]
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
        from: he()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: he()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: he()
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
        rounded: O()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": O()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": O()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": O()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": O()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": O()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": O()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": O()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": O()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": O()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": O()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": O()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": O()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": O()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": O()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: z()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": z()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": z()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": z()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": z()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": z()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": z()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": z()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": z()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": z()
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
        "divide-y": z()
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
        border: [...xe(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...xe(), "hidden", "none"]
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
        outline: [...xe(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [M, C, b]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", M, Fe, _e]
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
          Yl,
          Zl
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
        "inset-shadow": ["none", C, b, d]
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
        ring: z()
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
        "ring-offset": [M, _e]
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
        "inset-ring": z()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": R()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [M, C, b]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Je(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Je()
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
          C,
          b
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
        brightness: [M, C, b]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [M, C, b]
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
          C,
          b
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", M, C, b]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [M, C, b]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", M, C, b]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [M, C, b]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", M, C, b]
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
          C,
          b
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
        "backdrop-brightness": [M, C, b]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [M, C, b]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", M, C, b]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [M, C, b]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", M, C, b]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [M, C, b]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [M, C, b]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", M, C, b]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", C, b]
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
        duration: [M, "initial", C, b]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", S, C, b]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [M, C, b]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, C, b]
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
        perspective: [k, C, b]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": ye()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Ae()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Ae()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Ae()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Ae()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ke()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ke()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ke()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ke()
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
        skew: ze()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ze()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ze()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [C, b, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ye()
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
        translate: Se()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Se()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Se()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Se()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", C, b]
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
        "will-change": ["auto", "scroll", "contents", "transform", C, b]
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
        stroke: [M, Fe, _e, vr]
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
}, ic = /* @__PURE__ */ Il(oc);
function U(...e) {
  return ic(yl(e));
}
const we = (e) => {
  const t = document.createElement("style");
  return t.innerHTML = e, t;
};
function Bi(e, t) {
  const r = { ...e };
  for (const n of t) delete r[n];
  return r;
}
const ft = (e, t) => (t || document).querySelector(e), ac = () => {
  var e;
  return (e = ft("[vp]")) == null ? void 0 : e.closest("[vw]");
}, Fi = {
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
  textColor: { isActive: !1, color: "#000" },
  isActive: !1
}, E = ut()(
  di(
    (e) => ({
      isOpenWidget: !1,
      isLoaded: !1,
      isActive: !1,
      setIsOpenWidget: (t) => e({ isOpenWidget: t }),
      setIsLoaded: (t) => e({ isLoaded: t }),
      reset: () => e(Fi)
    }),
    {
      name: "@vlibras-widget-plus",
      partialize: (e) => Bi(e, ["textReader"]),
      version: 1
    }
  )
);
E.subscribe((e, t) => {
  const n = Object.keys(Bi(Fi, ["isActive"])).some((o) => {
    const i = e[o];
    return o === "textColor" || o === "textReader" ? i == null ? void 0 : i.isActive : !!i;
  });
  n !== t.isActive && E.setState({ isActive: n });
});
const Ee = "vwp-app-root", mr = {}, ji = () => {
  if (!mr[Ee]) {
    let n = document.getElementById(Ee);
    n || (n = document.createElement("div"), n.id = Ee, document.body.appendChild(n)), mr[Ee] = n;
  }
  const e = mr[Ee], t = e.shadowRoot || e.attachShadow({ mode: "open" });
  return { root: e, shadowRoot: t, isRootActive: () => e.getAttribute("data-active") === "true" };
}, Jr = (e, t) => {
  const n = ["html", "input", "head", "script", "style", "iframe"], o = e.tagName.toLowerCase(), i = n.includes(o), a = e.classList.contains("vwp-ignore"), u = e.closest("[vw]");
  return e.id !== Ee && !i && !a && !u;
}, sc = async (e, t) => {
  if (!e) return;
  const r = [
    new FontFace("VLibrasWidget_Font", `url(${e}/assets/fonts/rawline-500.ttf) format('truetype')`, {
      weight: "500"
    })
  ];
  await Promise.all(r.map((n) => n.load())), r.forEach((n) => document.fonts.add(n)), t == null || t();
}, yr = fe(({ children: e, disabled: t, variant: r = "default", className: n, ...o }, i) => /* @__PURE__ */ s(
  "button",
  {
    ref: i,
    className: U(
      "cursor-pointer text-foreground flex justify-center items-center gap-x-2",
      "size-9 hover:bg-muted rounded-full",
      "[&>svg]:pointer-events-none [&>svg]:fill-foreground/80 hover:[&>svg]:fill-foreground",
      t && "pointer-events-none opacity-50",
      r === "destructive" && "hover:bg-destructive/10 hover:[&>svg]:fill-destructive-foreground",
      n
    ),
    type: o.type || "button",
    ...o,
    children: e
  }
)), lc = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: [
      /* @__PURE__ */ s("title", { children: t }),
      /* @__PURE__ */ s("path", { d: "M4.675 15.425L3.65 18.275C3.56667 18.5083 3.43333 18.6875 3.25 18.8125C3.06667 18.9375 2.85833 19 2.625 19C2.24167 19 1.9375 18.8375 1.7125 18.5125C1.4875 18.1875 1.44167 17.8417 1.575 17.475L5.975 5.75C6.05833 5.51667 6.2 5.33333 6.4 5.2C6.6 5.06667 6.81667 5 7.05 5H7.95C8.2 5 8.42083 5.06667 8.6125 5.2C8.80417 5.33333 8.94167 5.51667 9.025 5.75L13.45 17.5C13.5833 17.8667 13.5375 18.2083 13.3125 18.525C13.0875 18.8417 12.7833 19 12.4 19C12.1667 19 11.95 18.9333 11.75 18.8C11.55 18.6667 11.4083 18.4833 11.325 18.25L10.325 15.425H4.675ZM5.4 13.4H9.6L7.55 7.6H7.45L5.4 13.4ZM18 13H16C15.7167 13 15.4792 12.9042 15.2875 12.7125C15.0958 12.5208 15 12.2833 15 12C15 11.7167 15.0958 11.4792 15.2875 11.2875C15.4792 11.0958 15.7167 11 16 11H18V9C18 8.71667 18.0958 8.47917 18.2875 8.2875C18.4792 8.09583 18.7167 8 19 8C19.2833 8 19.5208 8.09583 19.7125 8.2875C19.9042 8.47917 20 8.71667 20 9V11H22C22.2833 11 22.5208 11.0958 22.7125 11.2875C22.9042 11.4792 23 11.7167 23 12C23 12.2833 22.9042 12.5208 22.7125 12.7125C22.5208 12.9042 22.2833 13 22 13H20V15C20 15.2833 19.9042 15.5208 19.7125 15.7125C19.5208 15.9042 19.2833 16 19 16C18.7167 16 18.4792 15.9042 18.2875 15.7125C18.0958 15.5208 18 15.2833 18 15V13Z" })
    ]
  }
), cc = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: [
      /* @__PURE__ */ s("title", { children: t }),
      /* @__PURE__ */ s(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M2.5875 19.4125C2.97917 19.8042 3.45 20 4 20H20C20.55 20 21.0208 19.8042 21.4125 19.4125C21.8042 19.0208 22 18.55 22 18V6C22 5.45 21.8042 4.97917 21.4125 4.5875C21.0208 4.19583 20.55 4 20 4H4C3.45 4 2.97917 4.19583 2.5875 4.5875C2.19583 4.97917 2 5.45 2 6V18C2 18.55 2.19583 19.0208 2.5875 19.4125ZM5.17 14.83C5.95 15.61 6.89333 16 8 16H10.4C10.6267 16 10.8167 15.9233 10.97 15.77C11.1233 15.6167 11.2 15.4267 11.2 15.2C11.2 14.9733 11.1233 14.7833 10.97 14.63C10.8167 14.4767 10.6267 14.4 10.4 14.4H8C7.33333 14.4 6.76667 14.1667 6.3 13.7C5.83333 13.2333 5.6 12.6667 5.6 12C5.6 11.3333 5.83333 10.7667 6.3 10.3C6.76667 9.83333 7.33333 9.6 8 9.6H10.4C10.6267 9.6 10.8167 9.52333 10.97 9.37C11.1233 9.21667 11.2 9.02667 11.2 8.8C11.2 8.57333 11.1233 8.38333 10.97 8.23C10.8167 8.07667 10.6267 8 10.4 8H8C6.89333 8 5.95 8.39 5.17 9.17C4.39 9.95 4 10.8933 4 12C4 13.1067 4.39 14.05 5.17 14.83ZM9.03 12.57C9.18333 12.7233 9.37333 12.8 9.6 12.8H14.4C14.6267 12.8 14.8167 12.7233 14.97 12.57C15.1233 12.4167 15.2 12.2267 15.2 12C15.2 11.7733 15.1233 11.5833 14.97 11.43C14.8167 11.2767 14.6267 11.2 14.4 11.2H9.6C9.37333 11.2 9.18333 11.2767 9.03 11.43C8.87667 11.5833 8.8 11.7733 8.8 12C8.8 12.2267 8.87667 12.4167 9.03 12.57ZM13.03 15.77C13.1833 15.9233 13.3733 16 13.6 16H16C17.1067 16 18.05 15.61 18.83 14.83C19.61 14.05 20 13.1067 20 12C20 10.8933 19.61 9.95 18.83 9.17C18.05 8.39 17.1067 8 16 8H13.6C13.3733 8 13.1833 8.07667 13.03 8.23C12.8767 8.38333 12.8 8.57333 12.8 8.8C12.8 9.02667 12.8767 9.21667 13.03 9.37C13.1833 9.52333 13.3733 9.6 13.6 9.6H16C16.6667 9.6 17.2333 9.83333 17.7 10.3C18.1667 10.7667 18.4 11.3333 18.4 12C18.4 12.6667 18.1667 13.2333 17.7 13.7C17.2333 14.1667 16.6667 14.4 16 14.4H13.6C13.3733 14.4 13.1833 14.4767 13.03 14.63C12.8767 14.7833 12.8 14.9733 12.8 15.2C12.8 15.4267 12.8767 15.6167 13.03 15.77Z"
        }
      )
    ]
  }
), uc = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: [
      /* @__PURE__ */ s("title", { children: t }),
      /* @__PURE__ */ s("path", { d: "M11 18.15V15C11 14.7167 11.0958 14.4792 11.2875 14.2875C11.4792 14.0959 11.7167 14 12 14C12.2833 14 12.5208 14.0959 12.7125 14.2875C12.9042 14.4792 13 14.7167 13 15V18.125L14.075 17.025C14.275 16.825 14.5167 16.725 14.8 16.725C15.0833 16.725 15.325 16.825 15.525 17.025C15.725 17.225 15.825 17.4667 15.825 17.75C15.825 18.0334 15.725 18.2751 15.525 18.475L12.7 21.3C12.6 21.4 12.4917 21.4709 12.375 21.5125C12.2583 21.5542 12.1333 21.575 12 21.575C11.8667 21.575 11.7417 21.5542 11.625 21.5125C11.5083 21.4709 11.4 21.4 11.3 21.3L8.44999 18.45C8.24999 18.25 8.15415 18.0125 8.16249 17.7375C8.17082 17.4625 8.27499 17.225 8.47499 17.025C8.67499 16.825 8.91249 16.725 9.18749 16.725C9.46249 16.725 9.69999 16.825 9.89999 17.025L11 18.15ZM11 5.85005L9.87499 6.97505C9.67499 7.17505 9.44165 7.27505 9.17499 7.27505C8.90832 7.27505 8.67499 7.17505 8.47499 6.97505C8.27499 6.77505 8.17499 6.53755 8.17499 6.26255C8.17499 5.98755 8.27499 5.75005 8.47499 5.55005L11.3 2.70005C11.4 2.60005 11.5083 2.52922 11.625 2.48755C11.7417 2.44588 11.8667 2.42505 12 2.42505C12.1333 2.42505 12.2583 2.44588 12.375 2.48755C12.4917 2.52922 12.6 2.60005 12.7 2.70005L15.55 5.55005C15.75 5.75005 15.85 5.98338 15.85 6.25005C15.85 6.51672 15.75 6.75005 15.55 6.95005C15.35 7.15005 15.1125 7.25005 14.8375 7.25005C14.5625 7.25005 14.325 7.15005 14.125 6.95005L13 5.85005V9.00005C13 9.28338 12.9042 9.52088 12.7125 9.71255C12.5208 9.90422 12.2833 10 12 10C11.7167 10 11.4792 9.90422 11.2875 9.71255C11.0958 9.52088 11 9.28338 11 9.00005V5.85005Z" })
    ]
  }
), dc = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: [
      /* @__PURE__ */ s("title", { children: t }),
      /* @__PURE__ */ s("path", { d: "M6.7 21.3C6.5 21.5 6.26667 21.6 6 21.6C5.73334 21.6 5.5 21.5 5.3 21.3L2.7 18.7C2.5 18.5 2.4 18.2667 2.4 18C2.4 17.7333 2.5 17.5 2.7 17.3L5.3 14.7C5.5 14.5 5.73334 14.4 6 14.4C6.26667 14.4 6.5 14.5 6.7 14.7C6.9 14.9 7 15.1375 7 15.4125C7 15.6875 6.9 15.925 6.7 16.125L5.825 17H18.175L17.3 16.125C17.1167 15.925 17.0208 15.6875 17.0125 15.4125C17.0042 15.1375 17.1 14.9 17.3 14.7C17.5 14.5 17.7333 14.4 18 14.4C18.2667 14.4 18.5 14.5 18.7 14.7L21.3 17.3C21.5 17.5 21.6 17.7333 21.6 18C21.6 18.2667 21.5 18.5 21.3 18.7L18.7 21.3C18.5 21.5 18.2667 21.6 18 21.6C17.7333 21.6 17.5 21.5 17.3 21.3C17.1 21.1 17 20.8625 17 20.5875C17 20.3125 17.1 20.075 17.3 19.875L18.175 19H5.825L6.7 19.875C6.88334 20.075 6.97917 20.3125 6.9875 20.5875C6.99583 20.8625 6.9 21.1 6.7 21.3ZM7.35 11.8L10.775 2.6C10.8417 2.41667 10.9542 2.27083 11.1125 2.1625C11.2708 2.05417 11.45 2 11.65 2H12.35C12.55 2 12.7292 2.05417 12.8875 2.1625C13.0458 2.27083 13.1583 2.41667 13.225 2.6L16.65 11.825C16.75 12.1083 16.7167 12.375 16.55 12.625C16.3833 12.875 16.15 13 15.85 13C15.6667 13 15.4958 12.9458 15.3375 12.8375C15.1792 12.7292 15.0667 12.5833 15 12.4L14.25 10.2H9.8L9 12.425C8.93333 12.6083 8.825 12.75 8.675 12.85C8.525 12.95 8.35834 13 8.175 13C7.85834 13 7.6125 12.8708 7.4375 12.6125C7.2625 12.3542 7.23334 12.0833 7.35 11.8ZM10.35 8.6H13.65L12.05 4.05H11.95L10.35 8.6Z" }),
      " "
    ]
  }
), pc = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: [
      /* @__PURE__ */ s("title", { children: t }),
      /* @__PURE__ */ s("path", { d: "M5 16C4.45 16 3.97917 15.8042 3.5875 15.4125C3.19583 15.0208 3 14.55 3 14V10C3 9.45 3.19583 8.97917 3.5875 8.5875C3.97917 8.19583 4.45 8 5 8H19C19.55 8 20.0208 8.19583 20.4125 8.5875C20.8042 8.97917 21 9.45 21 10V14C21 14.55 20.8042 15.0208 20.4125 15.4125C20.0208 15.8042 19.55 16 19 16H5ZM19 10H5V14H19V10Z" }),
      /* @__PURE__ */ s("path", { d: "M5 5.5C5 4.67157 5.67157 4 6.5 4H17.5C18.3284 4 19 4.67157 19 5.5C19 6.32843 18.3284 7 17.5 7H6.5C5.67157 7 5 6.32843 5 5.5Z" }),
      /* @__PURE__ */ s("path", { d: "M5 18.5C5 17.6716 5.67157 17 6.5 17H17.5C18.3284 17 19 17.6716 19 18.5C19 19.3284 18.3284 20 17.5 20H6.5C5.67157 20 5 19.3284 5 18.5Z" }),
      " "
    ]
  }
), fc = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: [
      /* @__PURE__ */ s("title", { children: t }),
      /* @__PURE__ */ s("g", { clipPath: "url(#clip0_1_148)", children: /* @__PURE__ */ s("path", { d: "M19.2535 0.622806C19.3084 0.240758 19.3471 0.0804978 19.3932 0.0451324C19.4789 -0.0206635 19.5056 -0.0169822 19.5926 0.0724691C19.6724 0.154597 19.9771 1.09947 20.0779 1.57791C20.1352 1.84951 20.135 1.88989 20.0759 2.13771C19.9652 2.6008 19.6335 2.99013 19.1006 3.28241C18.9851 3.34574 18.6504 3.45983 18.3568 3.53592C17.6512 3.71874 17.2297 3.86298 16.6183 4.13083C16.3401 4.25267 16.1052 4.35943 16.0961 4.36813C16.087 4.37678 16.0979 4.40271 16.1203 4.42574C16.1492 4.45543 16.1959 4.44896 16.2814 4.4035C16.4124 4.33378 16.5502 4.35454 16.5502 4.44395C16.5502 4.47481 16.5344 4.50007 16.515 4.50007C16.4958 4.50007 16.4276 4.54543 16.3636 4.60085C16.1919 4.74959 16.153 4.94505 16.23 5.27227C16.4027 6.00515 16.4017 6.31432 16.2248 6.90867C16.1409 7.19097 16.1305 7.78395 16.204 8.10319C16.2764 8.41752 16.5183 8.91056 16.7329 9.18098C16.9939 9.50977 17.2719 9.71782 17.7142 9.91544C18.3958 10.2199 18.5918 10.4187 18.4804 10.6927C18.4052 10.878 18.0014 11.3848 17.7604 11.5963C17.5332 11.7959 17.2539 11.9842 16.8998 12.1767C16.7628 12.2512 16.6378 12.3507 16.609 12.4082C16.5812 12.4638 16.5461 12.6806 16.5308 12.8901C16.5156 13.0995 16.4839 13.2872 16.4601 13.3072C16.4364 13.3272 16.3449 13.3634 16.2569 13.3875C16.0586 13.4422 16.0299 13.485 16.139 13.5635C16.3328 13.7033 16.3293 13.7678 16.1085 14.1161C15.7627 14.6622 15.5852 15.232 15.4256 16.3081C15.3178 17.0344 15.2468 17.1655 14.9046 17.2695C14.7149 17.3271 12.514 16.953 12.108 16.7942C12.0481 16.7707 11.9722 16.7795 11.8698 16.8217C11.7411 16.8747 11.6952 16.9297 11.5518 17.2029C11.4596 17.3785 11.302 17.7121 11.2015 17.9442L11.0188 18.3664L11.1826 18.6055C11.3396 18.8345 11.3486 18.8634 11.3972 19.2935C11.4369 19.6445 11.4696 19.7806 11.5474 19.9171C11.6255 20.0542 11.6373 20.1038 11.6025 20.147C11.5645 20.1941 11.5446 20.1929 11.4653 20.1394C11.3005 20.0283 11.3201 20.1208 11.4978 20.2926C11.7142 20.5018 11.9786 20.9245 12.1167 21.2819C12.1749 21.4328 12.3047 21.8998 12.405 22.3198C12.5051 22.7387 12.6975 23.4938 12.8331 24H3.00041C2.98473 24.0403 3.01575 23.9574 3.00041 24C3.16755 23.5707 3.4904 22.8509 3.8808 22.252C4.46487 21.3561 5.02401 20.2783 5.51163 19.1083C5.90984 18.153 6.38331 17.7143 6.38331 17.7143C6.26008 17.6461 6.61797 17.7551 6.61797 17.6382C6.61797 17.5579 6.95175 16.9075 7.18483 16.5336C7.41605 16.1626 7.56918 16.0665 7.81704 16.1369C8.03326 16.1984 8.13338 16.1546 8.21257 15.9642C8.44094 15.4149 8.80668 14.3393 8.92336 13.8742C9.09575 13.1867 9.09445 13.1799 8.59894 12.1515C7.87567 10.6507 7.07851 9.43031 6.08246 8.29901C5.30939 7.4209 4.92823 6.89207 4.53928 6.1577C4.44428 5.97837 4.352 5.83166 4.33416 5.83166C4.27867 5.83166 4.2574 5.96502 4.29268 6.09167C4.33792 6.25393 4.28061 6.35286 4.20245 6.24751C4.09167 6.09833 4.0688 5.80017 4.11919 5.16328C4.16417 4.59497 4.17478 4.54327 4.27559 4.39958C4.33507 4.31487 4.49186 4.16043 4.62398 4.05642C4.86278 3.86847 4.95514 3.74635 5.20995 3.28159C5.42598 2.88755 6.07318 2.27883 6.17007 2.37854C6.18754 2.39651 6.12596 2.59367 6.03326 2.81675C5.94055 3.03979 5.87255 3.24333 5.88218 3.2691C5.89398 3.30074 6.03748 3.25265 6.3254 3.12058C6.55955 3.01315 7.18784 2.73145 7.72155 2.49458C8.76213 2.0328 9.98105 1.42003 10.7474 0.973443C11.3249 0.636944 11.4547 0.576866 11.8752 0.451541C12.4345 0.284896 12.9336 0.260615 14.431 0.327233C15.1596 0.359661 15.7719 0.396397 15.7914 0.40889C15.8718 0.46 15.8169 0.533433 15.6409 0.609921C15.454 0.691226 15.3534 0.806369 15.4018 0.88411C15.4356 0.938705 16.9252 1.61359 17.2819 1.73598C17.4341 1.78822 17.6956 1.86067 17.8631 1.89705C18.5205 2.03985 18.8096 1.96939 18.9947 1.6215C19.1339 1.35987 19.164 1.24355 19.2535 0.622806Z" }) })
    ]
  }
), hc = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: [
      /* @__PURE__ */ s("title", { children: t }),
      /* @__PURE__ */ s("path", { d: "M8.65 20.5L2.5 14.35C2.33333 14.1833 2.20833 14 2.125 13.8C2.04167 13.6 2 13.3916 2 13.175C2 12.9583 2.04167 12.75 2.125 12.55C2.20833 12.35 2.33333 12.1666 2.5 12L8.25 6.27498L6.375 4.39998C6.15833 4.18331 6.04583 3.92498 6.0375 3.62498C6.02917 3.32498 6.13333 3.05831 6.35 2.82498C6.56667 2.59164 6.83333 2.47498 7.15 2.47498C7.46667 2.47498 7.74167 2.59164 7.975 2.82498L17.15 12C17.3167 12.1666 17.4375 12.35 17.5125 12.55C17.5875 12.75 17.625 12.9583 17.625 13.175C17.625 13.3916 17.5875 13.6 17.5125 13.8C17.4375 14 17.3167 14.1833 17.15 14.35L11 20.5C10.8333 20.6666 10.65 20.7916 10.45 20.875C10.25 20.9583 10.0417 21 9.825 21C9.60833 21 9.4 20.9583 9.2 20.875C9 20.7916 8.81667 20.6666 8.65 20.5ZM9.825 7.84998L4.475 13.2H15.175L9.825 7.84998ZM19.8 21C19.2 21 18.6917 20.7875 18.275 20.3625C17.8583 19.9375 17.65 19.4166 17.65 18.8C17.65 18.35 17.7625 17.925 17.9875 17.525C18.2125 17.125 18.4667 16.7333 18.75 16.35L19.225 15.75C19.375 15.5666 19.5708 15.4708 19.8125 15.4625C20.0542 15.4541 20.25 15.5416 20.4 15.725L20.9 16.35C21.1667 16.7333 21.4167 17.125 21.65 17.525C21.8833 17.925 22 18.35 22 18.8C22 19.4166 21.7833 19.9375 21.35 20.3625C20.9167 20.7875 20.4 21 19.8 21Z" })
    ]
  }
), gc = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: [
      /* @__PURE__ */ s("title", { children: t }),
      /* @__PURE__ */ s("path", { d: "M21 5V15.725C21 15.9583 20.9417 16.15 20.825 16.3C20.7083 16.45 20.5583 16.5667 20.375 16.65C20.1917 16.7333 20.0083 16.7625 19.825 16.7375C19.6417 16.7125 19.4667 16.6167 19.3 16.45L7.55001 4.7C7.38335 4.53333 7.28751 4.35833 7.26251 4.175C7.23751 3.99167 7.26668 3.80833 7.35001 3.625C7.43335 3.44167 7.55001 3.29167 7.70001 3.175C7.85001 3.05833 8.04168 3 8.27501 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5ZM5.00001 21C4.45001 21 3.97918 20.8042 3.58751 20.4125C3.19585 20.0208 3.00001 19.55 3.00001 19V5.8L2.10001 4.9C1.91668 4.71667 1.82501 4.48333 1.82501 4.2C1.82501 3.91667 1.91668 3.68333 2.10001 3.5C2.28335 3.31667 2.51668 3.225 2.80001 3.225C3.08335 3.225 3.31668 3.31667 3.50001 3.5L20.5 20.5C20.6833 20.6833 20.775 20.9167 20.775 21.2C20.775 21.4833 20.6833 21.7167 20.5 21.9C20.3167 22.0833 20.0833 22.175 19.8 22.175C19.5167 22.175 19.2833 22.0833 19.1 21.9L18.2 21H5.00001ZM14.175 17L12.075 14.9L11.25 16L9.40001 13.525C9.30001 13.3917 9.16668 13.325 9.00001 13.325C8.83335 13.325 8.70001 13.3917 8.60001 13.525L6.60001 16.2C6.46668 16.3667 6.45001 16.5417 6.55001 16.725C6.65001 16.9083 6.80001 17 7.00001 17H14.175Z" }),
      " "
    ]
  }
), vc = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: [
      /* @__PURE__ */ s("title", { children: t }),
      /* @__PURE__ */ s("path", { d: "M11.6875 22L9.7375 17.1667L6 20.5V2L19 14.5833L13.9625 15.25L15.9125 20.1667L11.6875 22ZM10.3875 14.5833L12.5813 19.9167L13.9625 19.25L11.6875 14L15.5063 13.5L7.4625 5.66667V17.1667L10.3875 14.5833Z" })
    ]
  }
), mc = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: [
      /* @__PURE__ */ s("title", { children: t }),
      /* @__PURE__ */ s("path", { d: "M9.47259 13.2703L8.37438 16.3514C8.28509 16.6036 8.14223 16.7973 7.94581 16.9324C7.74938 17.0676 7.52616 17.1351 7.27616 17.1351C6.86545 17.1351 6.53956 16.9595 6.29848 16.6081C6.05741 16.2568 6.00831 15.8829 6.15116 15.4865L10.8654 2.81081C10.9547 2.55856 11.1065 2.36036 11.3208 2.21622C11.5351 2.07207 11.7672 2 12.0172 2H12.9815C13.2494 2 13.486 2.07207 13.6913 2.21622C13.8967 2.36036 14.044 2.55856 14.1333 2.81081L18.8744 15.5135C19.0172 15.9099 18.9681 16.2793 18.7271 16.6216C18.486 16.964 18.1601 17.1351 17.7494 17.1351C17.4994 17.1351 17.2672 17.0631 17.0529 16.9189C16.8387 16.7748 16.6869 16.5766 16.5976 16.3243L15.5262 13.2703H9.47259ZM10.2494 11.0811H14.7494L12.5529 4.81081H12.4458L10.2494 11.0811Z" }),
      /* @__PURE__ */ s("path", { d: "M5.30804 21.6892C5.51339 21.8964 5.76786 22 6.07143 22H18.9286C19.2321 22 19.4866 21.8964 19.692 21.6892C19.8973 21.482 20 21.2252 20 20.9189C20 20.6126 19.8973 20.3559 19.692 20.1486C19.4866 19.9414 19.2321 19.8378 18.9286 19.8378H6.07143C5.76786 19.8378 5.51339 19.9414 5.30804 20.1486C5.10268 20.3559 5 20.6126 5 20.9189C5 21.2252 5.10268 21.482 5.30804 21.6892Z" }),
      " "
    ]
  }
), yc = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: [
      /* @__PURE__ */ s("title", { children: t }),
      /* @__PURE__ */ s("path", { d: "M10 15C10.2833 15 10.5208 14.9042 10.7125 14.7125C10.9042 14.5208 11 14.2833 11 14V10C11 9.71667 10.9042 9.47917 10.7125 9.2875C10.5208 9.09583 10.2833 9 10 9C9.71667 9 9.47917 9.09583 9.2875 9.2875C9.09583 9.47917 9 9.71667 9 10V14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15ZM14 15C14.2833 15 14.5208 14.9042 14.7125 14.7125C14.9042 14.5208 15 14.2833 15 14V10C15 9.71667 14.9042 9.47917 14.7125 9.2875C14.5208 9.09583 14.2833 9 14 9C13.7167 9 13.4792 9.09583 13.2875 9.2875C13.0958 9.47917 13 9.71667 13 10V14C13 14.2833 13.0958 14.5208 13.2875 14.7125C13.4792 14.9042 13.7167 15 14 15ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 11.4667 2.04167 10.9333 2.125 10.4C2.20833 9.86667 2.33333 9.34167 2.5 8.825C2.58333 8.55833 2.75417 8.37917 3.0125 8.2875C3.27083 8.19583 3.51667 8.21667 3.75 8.35C4 8.48333 4.17917 8.67917 4.2875 8.9375C4.39583 9.19583 4.40833 9.46667 4.325 9.75C4.225 10.1167 4.14583 10.4875 4.0875 10.8625C4.02917 11.2375 4 11.6167 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C11.6 4 11.2042 4.02917 10.8125 4.0875C10.4208 4.14583 10.0333 4.23333 9.65 4.35C9.36667 4.43333 9.1 4.425 8.85 4.325C8.6 4.225 8.41667 4.05 8.3 3.8C8.18333 3.55 8.17917 3.29583 8.2875 3.0375C8.39583 2.77917 8.58333 2.60833 8.85 2.525C9.35 2.34167 9.86667 2.20833 10.4 2.125C10.9333 2.04167 11.4667 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM5.5 7C5.08333 7 4.72917 6.85417 4.4375 6.5625C4.14583 6.27083 4 5.91667 4 5.5C4 5.08333 4.14583 4.72917 4.4375 4.4375C4.72917 4.14583 5.08333 4 5.5 4C5.91667 4 6.27083 4.14583 6.5625 4.4375C6.85417 4.72917 7 5.08333 7 5.5C7 5.91667 6.85417 6.27083 6.5625 6.5625C6.27083 6.85417 5.91667 7 5.5 7ZM6 12C6 10.3333 6.58333 8.91667 7.75 7.75C8.91667 6.58333 10.3333 6 12 6C13.6667 6 15.0833 6.58333 16.25 7.75C17.4167 8.91667 18 10.3333 18 12C18 13.6667 17.4167 15.0833 16.25 16.25C15.0833 17.4167 13.6667 18 12 18C10.3333 18 8.91667 17.4167 7.75 16.25C6.58333 15.0833 6 13.6667 6 12Z" }),
      " "
    ]
  }
), _c = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: [
      /* @__PURE__ */ s("title", { children: t }),
      /* @__PURE__ */ s("path", { d: "M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM13 18H20V6H13V18ZM18.25 15C18.4667 15 18.6458 14.9292 18.7875 14.7875C18.9292 14.6458 19 14.4667 19 14.25C19 14.0333 18.9292 13.8542 18.7875 13.7125C18.6458 13.5708 18.4667 13.5 18.25 13.5H14.75C14.5333 13.5 14.3542 13.5708 14.2125 13.7125C14.0708 13.8542 14 14.0333 14 14.25C14 14.4667 14.0708 14.6458 14.2125 14.7875C14.3542 14.9292 14.5333 15 14.75 15H18.25ZM18.25 12.5C18.4667 12.5 18.6458 12.4292 18.7875 12.2875C18.9292 12.1458 19 11.9667 19 11.75C19 11.5333 18.9292 11.3542 18.7875 11.2125C18.6458 11.0708 18.4667 11 18.25 11H14.75C14.5333 11 14.3542 11.0708 14.2125 11.2125C14.0708 11.3542 14 11.5333 14 11.75C14 11.9667 14.0708 12.1458 14.2125 12.2875C14.3542 12.4292 14.5333 12.5 14.75 12.5H18.25ZM18.25 10C18.4667 10 18.6458 9.92917 18.7875 9.7875C18.9292 9.64583 19 9.46667 19 9.25C19 9.03333 18.9292 8.85417 18.7875 8.7125C18.6458 8.57083 18.4667 8.5 18.25 8.5H14.75C14.5333 8.5 14.3542 8.57083 14.2125 8.7125C14.0708 8.85417 14 9.03333 14 9.25C14 9.46667 14.0708 9.64583 14.2125 9.7875C14.3542 9.92917 14.5333 10 14.75 10H18.25Z" }),
      " "
    ]
  }
), bc = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: [
      /* @__PURE__ */ s("title", { children: t }),
      /* @__PURE__ */ s("path", { d: "M8.20101 12.3166L11.1558 9.36181C11.397 9.1206 11.6784 9 12 9C12.3216 9 12.603 9.1206 12.8442 9.36181L15.799 12.3166C16 12.5176 16.0503 12.7387 15.9497 12.9799C15.8492 13.2211 15.6583 13.3417 15.3769 13.3417L8.62312 13.3417C8.34171 13.3417 8.15075 13.2211 8.05025 12.9799C7.94975 12.7387 8 12.5176 8.20101 12.3166Z" }),
      /* @__PURE__ */ s("path", { d: "M2 13.5C2 12.6716 2.67157 12 3.5 12H20.5C21.3284 12 22 12.6716 22 13.5C22 14.3284 21.3284 15 20.5 15H3.5C2.67157 15 2 14.3284 2 13.5Z" }),
      " "
    ]
  }
), Cc = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: [
      /* @__PURE__ */ s("title", { children: t }),
      /* @__PURE__ */ s("path", { d: "M4.99999 7.84999L4.09999 8.72499C3.91665 8.90832 3.68749 8.99999 3.41249 8.99999C3.13749 8.99999 2.89999 8.89999 2.69999 8.69999C2.51665 8.51665 2.42499 8.28332 2.42499 7.99999C2.42499 7.71665 2.51665 7.48332 2.69999 7.29999L5.29999 4.69999C5.39999 4.59999 5.50832 4.52915 5.62499 4.48749C5.74165 4.44582 5.86665 4.42499 5.99999 4.42499C6.13332 4.42499 6.25832 4.44582 6.37499 4.48749C6.49165 4.52915 6.59999 4.59999 6.69999 4.69999L9.29999 7.29999C9.48332 7.48332 9.57915 7.71249 9.58749 7.98749C9.59582 8.26249 9.49999 8.49999 9.29999 8.69999C9.11665 8.88332 8.88749 8.97915 8.61249 8.98749C8.33749 8.99582 8.09999 8.90832 7.89999 8.72499L6.99999 7.84999V16.15L7.89999 15.275C8.08332 15.0917 8.31249 15 8.58749 15C8.86249 15 9.09999 15.1 9.29999 15.3C9.48332 15.4833 9.57499 15.7167 9.57499 16C9.57499 16.2833 9.48332 16.5167 9.29999 16.7L6.69999 19.3C6.59999 19.4 6.49165 19.4708 6.37499 19.5125C6.25832 19.5542 6.13332 19.575 5.99999 19.575C5.86665 19.575 5.74165 19.5542 5.62499 19.5125C5.50832 19.4708 5.39999 19.4 5.29999 19.3L2.69999 16.7C2.51665 16.5167 2.42082 16.2875 2.41249 16.0125C2.40415 15.7375 2.49999 15.5 2.69999 15.3C2.88332 15.1167 3.11249 15.0208 3.38749 15.0125C3.66249 15.0042 3.89999 15.0917 4.09999 15.275L4.99999 16.15V7.84999ZM13 19C12.7167 19 12.4792 18.9042 12.2875 18.7125C12.0958 18.5208 12 18.2833 12 18C12 17.7167 12.0958 17.4792 12.2875 17.2875C12.4792 17.0958 12.7167 17 13 17H21C21.2833 17 21.5208 17.0958 21.7125 17.2875C21.9042 17.4792 22 17.7167 22 18C22 18.2833 21.9042 18.5208 21.7125 18.7125C21.5208 18.9042 21.2833 19 21 19H13ZM13 13C12.7167 13 12.4792 12.9042 12.2875 12.7125C12.0958 12.5208 12 12.2833 12 12C12 11.7167 12.0958 11.4792 12.2875 11.2875C12.4792 11.0958 12.7167 11 13 11H21C21.2833 11 21.5208 11.0958 21.7125 11.2875C21.9042 11.4792 22 11.7167 22 12C22 12.2833 21.9042 12.5208 21.7125 12.7125C21.5208 12.9042 21.2833 13 21 13H13ZM13 6.99999C12.7167 6.99999 12.4792 6.90415 12.2875 6.71249C12.0958 6.52082 12 6.28332 12 5.99999C12 5.71665 12.0958 5.47915 12.2875 5.28749C12.4792 5.09582 12.7167 4.99999 13 4.99999H21C21.2833 4.99999 21.5208 5.09582 21.7125 5.28749C21.9042 5.47915 22 5.71665 22 5.99999C22 6.28332 21.9042 6.52082 21.7125 6.71249C21.5208 6.90415 21.2833 6.99999 21 6.99999H13Z" })
    ]
  }
), Di = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s("svg", { width: e, height: e, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...r, children: [
  /* @__PURE__ */ s("title", { children: t }),
  /* @__PURE__ */ s("path", { d: "M10.6 13.8L8.45 11.65C8.26667 11.4667 8.03333 11.375 7.75 11.375C7.46667 11.375 7.23333 11.4667 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.1 16.1 10.3333 16.2 10.6 16.2C10.8667 16.2 11.1 16.1 11.3 15.9L16.95 10.25C17.1333 10.0667 17.225 9.83333 17.225 9.55C17.225 9.26667 17.1333 9.03333 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z" }),
  " "
] }), wc = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s("svg", { width: e, height: e, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...r, children: [
  /* @__PURE__ */ s("title", { children: t }),
  /* @__PURE__ */ s("path", { d: "M18.3 5.70998C18.2075 5.61727 18.0976 5.54372 17.9766 5.49354C17.8557 5.44336 17.726 5.41753 17.595 5.41753C17.464 5.41753 17.3343 5.44336 17.2134 5.49354C17.0924 5.54372 16.9825 5.61727 16.89 5.70998L12 10.59L7.11 5.69998C7.01749 5.60727 6.9076 5.53372 6.78663 5.48354C6.66565 5.43336 6.53597 5.40753 6.405 5.40753C6.27403 5.40753 6.14435 5.43336 6.02338 5.48354C5.9024 5.53372 5.79251 5.60727 5.7 5.69998C5.31 6.08998 5.31 6.71998 5.7 7.10998L10.59 12L5.7 16.89C5.31 17.28 5.31 17.91 5.7 18.3C6.09 18.69 6.72 18.69 7.11 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10998C18.68 6.72998 18.68 6.08998 18.3 5.70998Z" }),
  " "
] }), xc = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: [
      /* @__PURE__ */ s("title", { children: t }),
      /* @__PURE__ */ s("path", { d: "M12 21C9.9 21 8.04167 20.3625 6.425 19.0875C4.80833 17.8125 3.75833 16.1833 3.275 14.2C3.20833 13.95 3.25833 13.7208 3.425 13.5125C3.59167 13.3042 3.81667 13.1833 4.1 13.15C4.36667 13.1167 4.60833 13.1667 4.825 13.3C5.04167 13.4333 5.19167 13.6333 5.275 13.9C5.675 15.4 6.5 16.625 7.75 17.575C9 18.525 10.4167 19 12 19C13.95 19 15.6042 18.3208 16.9625 16.9625C18.3208 15.6042 19 13.95 19 12C19 10.05 18.3208 8.39583 16.9625 7.0375C15.6042 5.67917 13.95 5 12 5C10.85 5 9.775 5.26667 8.775 5.8C7.775 6.33333 6.93333 7.06667 6.25 8H8C8.28333 8 8.52083 8.09583 8.7125 8.2875C8.90417 8.47917 9 8.71667 9 9C9 9.28333 8.90417 9.52083 8.7125 9.7125C8.52083 9.90417 8.28333 10 8 10H4C3.71667 10 3.47917 9.90417 3.2875 9.7125C3.09583 9.52083 3 9.28333 3 9V5C3 4.71667 3.09583 4.47917 3.2875 4.2875C3.47917 4.09583 3.71667 4 4 4C4.28333 4 4.52083 4.09583 4.7125 4.2875C4.90417 4.47917 5 4.71667 5 5V6.35C5.85 5.28333 6.8875 4.45833 8.1125 3.875C9.3375 3.29167 10.6333 3 12 3C13.25 3 14.4208 3.2375 15.5125 3.7125C16.6042 4.1875 17.5542 4.82917 18.3625 5.6375C19.1708 6.44583 19.8125 7.39583 20.2875 8.4875C20.7625 9.57917 21 10.75 21 12C21 13.25 20.7625 14.4208 20.2875 15.5125C19.8125 16.6042 19.1708 17.5542 18.3625 18.3625C17.5542 19.1708 16.6042 19.8125 15.5125 20.2875C14.4208 20.7625 13.25 21 12 21Z" }),
      " "
    ]
  }
), Ac = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: [
      /* @__PURE__ */ s("title", { children: t }),
      /* @__PURE__ */ s("path", { d: "M12 5C11.7167 5 11.4792 4.90417 11.2875 4.7125C11.0958 4.52083 11 4.28333 11 4V2C11 1.71667 11.0958 1.47917 11.2875 1.2875C11.4792 1.09583 11.7167 1 12 1C12.2833 1 12.5208 1.09583 12.7125 1.2875C12.9042 1.47917 13 1.71667 13 2V4C13 4.28333 12.9042 4.52083 12.7125 4.7125C12.5208 4.90417 12.2833 5 12 5ZM16.95 7.05C16.7667 6.86667 16.675 6.6375 16.675 6.3625C16.675 6.0875 16.7667 5.85 16.95 5.65L18.35 4.225C18.55 4.025 18.7875 3.925 19.0625 3.925C19.3375 3.925 19.575 4.025 19.775 4.225C19.9583 4.40833 20.05 4.64167 20.05 4.925C20.05 5.20833 19.9583 5.44167 19.775 5.625L18.35 7.05C18.1667 7.23333 17.9333 7.325 17.65 7.325C17.3667 7.325 17.1333 7.23333 16.95 7.05ZM20 13C19.7167 13 19.4792 12.9042 19.2875 12.7125C19.0958 12.5208 19 12.2833 19 12C19 11.7167 19.0958 11.4792 19.2875 11.2875C19.4792 11.0958 19.7167 11 20 11H22C22.2833 11 22.5208 11.0958 22.7125 11.2875C22.9042 11.4792 23 11.7167 23 12C23 12.2833 22.9042 12.5208 22.7125 12.7125C22.5208 12.9042 22.2833 13 22 13H20ZM12 23C11.7167 23 11.4792 22.9042 11.2875 22.7125C11.0958 22.5208 11 22.2833 11 22V20C11 19.7167 11.0958 19.4792 11.2875 19.2875C11.4792 19.0958 11.7167 19 12 19C12.2833 19 12.5208 19.0958 12.7125 19.2875C12.9042 19.4792 13 19.7167 13 20V22C13 22.2833 12.9042 22.5208 12.7125 22.7125C12.5208 22.9042 12.2833 23 12 23ZM5.65 7.05L4.225 5.65C4.025 5.45 3.925 5.20833 3.925 4.925C3.925 4.64167 4.025 4.40833 4.225 4.225C4.40833 4.04167 4.64167 3.95 4.925 3.95C5.20833 3.95 5.44167 4.04167 5.625 4.225L7.05 5.65C7.23333 5.83333 7.325 6.06667 7.325 6.35C7.325 6.63333 7.23333 6.86667 7.05 7.05C6.85 7.23333 6.61667 7.325 6.35 7.325C6.08333 7.325 5.85 7.23333 5.65 7.05ZM18.35 19.775L16.95 18.35C16.7667 18.15 16.675 17.9125 16.675 17.6375C16.675 17.3625 16.7667 17.1333 16.95 16.95C17.1333 16.7667 17.3625 16.675 17.6375 16.675C17.9125 16.675 18.15 16.7667 18.35 16.95L19.775 18.35C19.975 18.5333 20.0708 18.7667 20.0625 19.05C20.0542 19.3333 19.9583 19.575 19.775 19.775C19.575 19.975 19.3333 20.075 19.05 20.075C18.7667 20.075 18.5333 19.975 18.35 19.775ZM2 13C1.71667 13 1.47917 12.9042 1.2875 12.7125C1.09583 12.5208 1 12.2833 1 12C1 11.7167 1.09583 11.4792 1.2875 11.2875C1.47917 11.0958 1.71667 11 2 11H4C4.28333 11 4.52083 11.0958 4.7125 11.2875C4.90417 11.4792 5 11.7167 5 12C5 12.2833 4.90417 12.5208 4.7125 12.7125C4.52083 12.9042 4.28333 13 4 13H2ZM4.225 19.775C4.04167 19.5917 3.95 19.3583 3.95 19.075C3.95 18.7917 4.04167 18.5583 4.225 18.375L5.65 16.95C5.83333 16.7667 6.0625 16.675 6.3375 16.675C6.6125 16.675 6.85 16.7667 7.05 16.95C7.25 17.15 7.35 17.3875 7.35 17.6625C7.35 17.9375 7.25 18.175 7.05 18.375L5.65 19.775C5.45 19.975 5.20833 20.075 4.925 20.075C4.64167 20.075 4.40833 19.975 4.225 19.775ZM12 18C10.3333 18 8.91667 17.4167 7.75 16.25C6.58333 15.0833 6 13.6667 6 12C6 10.3333 6.58333 8.91667 7.75 7.75C8.91667 6.58333 10.3333 6 12 6C13.6667 6 15.0833 6.58333 16.25 7.75C17.4167 8.91667 18 10.3333 18 12C18 13.6667 17.4167 15.0833 16.25 16.25C15.0833 17.4167 13.6667 18 12 18ZM12 16C13.1 16 14.0417 15.6083 14.825 14.825C15.6083 14.0417 16 13.1 16 12C16 10.9 15.6083 9.95833 14.825 9.175C14.0417 8.39167 13.1 8 12 8C10.9 8 9.95833 8.39167 9.175 9.175C8.39167 9.95833 8 10.9 8 12C8 13.1 8.39167 14.0417 9.175 14.825C9.95833 15.6083 10.9 16 12 16Z" }),
      " "
    ]
  }
), kc = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: [
      /* @__PURE__ */ s("title", { children: t }),
      /* @__PURE__ */ s("path", { d: "M12 21C9.48333 21 7.35417 20.1292 5.6125 18.3875C3.87083 16.6458 3 14.5167 3 12C3 9.70002 3.75 7.70418 5.25 6.01252C6.75 4.32085 8.66667 3.33335 11 3.05002C11.2167 3.01668 11.4083 3.04585 11.575 3.13752C11.7417 3.22918 11.875 3.35002 11.975 3.50002C12.075 3.65002 12.1292 3.82502 12.1375 4.02502C12.1458 4.22502 12.0833 4.41668 11.95 4.60002C11.6667 5.03335 11.4542 5.49168 11.3125 5.97502C11.1708 6.45835 11.1 6.96668 11.1 7.50002C11.1 9.00002 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.0167 12.9 17.5292 12.825 18.0375 12.675C18.5458 12.525 19 12.3167 19.4 12.05C19.5833 11.9333 19.7708 11.8792 19.9625 11.8875C20.1542 11.8958 20.325 11.9417 20.475 12.025C20.6417 12.1083 20.7708 12.2333 20.8625 12.4C20.9542 12.5667 20.9833 12.7667 20.95 13C20.7167 15.3 19.7375 17.2083 18.0125 18.725C16.2875 20.2417 14.2833 21 12 21ZM12 19C13.4667 19 14.7833 18.5958 15.95 17.7875C17.1167 16.9792 17.9667 15.925 18.5 14.625C18.1667 14.7083 17.8333 14.775 17.5 14.825C17.1667 14.875 16.8333 14.9 16.5 14.9C14.45 14.9 12.7042 14.1792 11.2625 12.7375C9.82083 11.2958 9.1 9.55002 9.1 7.50002C9.1 7.16668 9.125 6.83335 9.175 6.50002C9.225 6.16668 9.29167 5.83335 9.375 5.50002C8.075 6.03335 7.02083 6.88335 6.2125 8.05002C5.40417 9.21668 5 10.5333 5 12C5 13.9333 5.68333 15.5833 7.05 16.95C8.41667 18.3167 10.0667 19 12 19Z" }),
      " "
    ]
  }
), Sc = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: [
      /* @__PURE__ */ s("title", { children: t }),
      /* @__PURE__ */ s("path", { d: "M11 18.15V15C11 14.7167 11.0958 14.4792 11.2875 14.2875C11.4792 14.0959 11.7167 14 12 14C12.2833 14 12.5208 14.0959 12.7125 14.2875C12.9042 14.4792 13 14.7167 13 15V18.125L14.075 17.025C14.275 16.825 14.5167 16.725 14.8 16.725C15.0833 16.725 15.325 16.825 15.525 17.025C15.725 17.225 15.825 17.4667 15.825 17.75C15.825 18.0334 15.725 18.275 15.525 18.475L12.7 21.3C12.6 21.4 12.4917 21.4709 12.375 21.5125C12.2583 21.5542 12.1333 21.575 12 21.575C11.8667 21.575 11.7417 21.5542 11.625 21.5125C11.5083 21.4709 11.4 21.4 11.3 21.3L8.44999 18.45C8.24999 18.25 8.15415 18.0125 8.16249 17.7375C8.17082 17.4625 8.27499 17.225 8.47499 17.025C8.67499 16.825 8.91249 16.725 9.18749 16.725C9.46249 16.725 9.69999 16.825 9.89999 17.025L11 18.15ZM5.87499 13L6.97499 14.075C7.17499 14.275 7.27499 14.5167 7.27499 14.8C7.27499 15.0834 7.17499 15.325 6.97499 15.525C6.77499 15.725 6.53332 15.825 6.24999 15.825C5.96665 15.825 5.72499 15.725 5.52499 15.525L2.69999 12.7C2.59999 12.6 2.52915 12.4917 2.48749 12.375C2.44582 12.2584 2.42499 12.1334 2.42499 12C2.42499 11.8667 2.44582 11.7417 2.48749 11.625C2.52915 11.5084 2.59999 11.4 2.69999 11.3L5.52499 8.47505C5.72499 8.27505 5.96249 8.17505 6.23749 8.17505C6.51249 8.17505 6.74999 8.27505 6.94999 8.47505C7.14999 8.67505 7.24999 8.91255 7.24999 9.18755C7.24999 9.46255 7.14999 9.70005 6.94999 9.90005L5.84999 11H8.99999C9.28332 11 9.52082 11.0959 9.71249 11.2875C9.90415 11.4792 9.99999 11.7167 9.99999 12C9.99999 12.2834 9.90415 12.5209 9.71249 12.7125C9.52082 12.9042 9.28332 13 8.99999 13H5.87499ZM18.15 13H15C14.7167 13 14.4792 12.9042 14.2875 12.7125C14.0958 12.5209 14 12.2834 14 12C14 11.7167 14.0958 11.4792 14.2875 11.2875C14.4792 11.0959 14.7167 11 15 11H18.125L17.025 9.92505C16.825 9.72505 16.725 9.48338 16.725 9.20005C16.725 8.91672 16.825 8.67505 17.025 8.47505C17.225 8.27505 17.4667 8.17505 17.75 8.17505C18.0333 8.17505 18.275 8.27505 18.475 8.47505L21.3 11.3C21.4 11.4 21.4708 11.5084 21.5125 11.625C21.5542 11.7417 21.575 11.8667 21.575 12C21.575 12.1334 21.5542 12.2584 21.5125 12.375C21.4708 12.4917 21.4 12.6 21.3 12.7L18.45 15.55C18.25 15.75 18.0167 15.8459 17.75 15.8375C17.4833 15.8292 17.25 15.725 17.05 15.525C16.85 15.325 16.75 15.0875 16.75 14.8125C16.75 14.5375 16.85 14.3 17.05 14.1L18.15 13ZM11 5.85005L9.87499 6.97505C9.67499 7.17505 9.44165 7.27505 9.17499 7.27505C8.90832 7.27505 8.67499 7.17505 8.47499 6.97505C8.27499 6.77505 8.17499 6.53755 8.17499 6.26255C8.17499 5.98755 8.27499 5.75005 8.47499 5.55005L11.3 2.70005C11.4 2.60005 11.5083 2.52922 11.625 2.48755C11.7417 2.44588 11.8667 2.42505 12 2.42505C12.1333 2.42505 12.2583 2.44588 12.375 2.48755C12.4917 2.52922 12.6 2.60005 12.7 2.70005L15.55 5.55005C15.75 5.75005 15.85 5.98338 15.85 6.25005C15.85 6.51672 15.75 6.75005 15.55 6.95005C15.35 7.15005 15.1125 7.25005 14.8375 7.25005C14.5625 7.25005 14.325 7.15005 14.125 6.95005L13 5.85005V9.00005C13 9.28338 12.9042 9.52088 12.7125 9.71255C12.5208 9.90422 12.2833 10 12 10C11.7167 10 11.4792 9.90422 11.2875 9.71255C11.0958 9.52088 11 9.28338 11 9.00005V5.85005Z" }),
      " "
    ]
  }
), Lc = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: [
      /* @__PURE__ */ s("title", { children: t }),
      /* @__PURE__ */ s("path", { d: "M23 9.00002C23 10.15 22.7958 11.2458 22.3875 12.2875C21.9792 13.3292 21.425 14.275 20.725 15.125C20.525 15.3583 20.275 15.4833 19.975 15.5C19.675 15.5167 19.4083 15.4083 19.175 15.175C18.9583 14.9583 18.8583 14.7 18.875 14.4C18.8917 14.1 18.9917 13.825 19.175 13.575C19.675 12.9417 20.0625 12.2333 20.3375 11.45C20.6125 10.6667 20.75 9.85002 20.75 9.00002C20.75 8.15002 20.6125 7.34168 20.3375 6.57502C20.0625 5.80835 19.675 5.10835 19.175 4.47502C18.975 4.22502 18.8708 3.95002 18.8625 3.65002C18.8542 3.35002 18.9583 3.08335 19.175 2.85002C19.3917 2.61668 19.6542 2.50418 19.9625 2.51252C20.2708 2.52085 20.525 2.64168 20.725 2.87502C21.425 3.72502 21.9792 4.67085 22.3875 5.71252C22.7958 6.75418 23 7.85002 23 9.00002ZM18.45 9.00002C18.45 9.53335 18.3667 10.0458 18.2 10.5375C18.0333 11.0292 17.8 11.4833 17.5 11.9C17.3167 12.15 17.0708 12.2792 16.7625 12.2875C16.4542 12.2958 16.1833 12.1833 15.95 11.95C15.7333 11.7333 15.6208 11.4708 15.6125 11.1625C15.6042 10.8542 15.675 10.5583 15.825 10.275C15.925 10.0917 16.0042 9.89168 16.0625 9.67502C16.1208 9.45835 16.15 9.23335 16.15 9.00002C16.15 8.76668 16.1208 8.54168 16.0625 8.32502C16.0042 8.10835 15.925 7.90002 15.825 7.70002C15.675 7.41668 15.6042 7.12502 15.6125 6.82502C15.6208 6.52502 15.7333 6.26668 15.95 6.05002C16.1833 5.81668 16.4542 5.70418 16.7625 5.71252C17.0708 5.72085 17.3167 5.85002 17.5 6.10002C17.8 6.51668 18.0333 6.97085 18.2 7.46252C18.3667 7.95418 18.45 8.46668 18.45 9.00002ZM9 13C7.9 13 6.95833 12.6083 6.175 11.825C5.39167 11.0417 5 10.1 5 9.00002C5 7.90002 5.39167 6.95835 6.175 6.17502C6.95833 5.39168 7.9 5.00002 9 5.00002C10.1 5.00002 11.0417 5.39168 11.825 6.17502C12.6083 6.95835 13 7.90002 13 9.00002C13 10.1 12.6083 11.0417 11.825 11.825C11.0417 12.6083 10.1 13 9 13ZM1 19V18.2C1 17.65 1.14167 17.1333 1.425 16.65C1.70833 16.1667 2.1 15.8 2.6 15.55C3.45 15.1167 4.40833 14.75 5.475 14.45C6.54167 14.15 7.71667 14 9 14C10.2833 14 11.4583 14.15 12.525 14.45C13.5917 14.75 14.55 15.1167 15.4 15.55C15.9 15.8 16.2917 16.1667 16.575 16.65C16.8583 17.1333 17 17.65 17 18.2V19C17 19.55 16.8042 20.0208 16.4125 20.4125C16.0208 20.8042 15.55 21 15 21H3C2.45 21 1.97917 20.8042 1.5875 20.4125C1.19583 20.0208 1 19.55 1 19Z" }),
      " "
    ]
  }
), Mc = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: [
      /* @__PURE__ */ s("title", { children: t }),
      /* @__PURE__ */ s("path", { d: "M7 17C5.61667 17 4.4375 16.5125 3.4625 15.5375C2.4875 14.5625 2 13.3833 2 12C2 10.6167 2.4875 9.4375 3.4625 8.4625C4.4375 7.4875 5.61667 7 7 7H10C10.2833 7 10.5208 7.09583 10.7125 7.2875C10.9042 7.47917 11 7.71667 11 8C11 8.28333 10.9042 8.52083 10.7125 8.7125C10.5208 8.90417 10.2833 9 10 9H7C6.16667 9 5.45833 9.29167 4.875 9.875C4.29167 10.4583 4 11.1667 4 12C4 12.8333 4.29167 13.5417 4.875 14.125C5.45833 14.7083 6.16667 15 7 15H10C10.2833 15 10.5208 15.0958 10.7125 15.2875C10.9042 15.4792 11 15.7167 11 16C11 16.2833 10.9042 16.5208 10.7125 16.7125C10.5208 16.9042 10.2833 17 10 17H7ZM9 13C8.71667 13 8.47917 12.9042 8.2875 12.7125C8.09583 12.5208 8 12.2833 8 12C8 11.7167 8.09583 11.4792 8.2875 11.2875C8.47917 11.0958 8.71667 11 9 11H15C15.2833 11 15.5208 11.0958 15.7125 11.2875C15.9042 11.4792 16 11.7167 16 12C16 12.2833 15.9042 12.5208 15.7125 12.7125C15.5208 12.9042 15.2833 13 15 13H9ZM14 17C13.7167 17 13.4792 16.9042 13.2875 16.7125C13.0958 16.5208 13 16.2833 13 16C13 15.7167 13.0958 15.4792 13.2875 15.2875C13.4792 15.0958 13.7167 15 14 15H17C17.8333 15 18.5417 14.7083 19.125 14.125C19.7083 13.5417 20 12.8333 20 12C20 11.1667 19.7083 10.4583 19.125 9.875C18.5417 9.29167 17.8333 9 17 9H14C13.7167 9 13.4792 8.90417 13.2875 8.7125C13.0958 8.52083 13 8.28333 13 8C13 7.71667 13.0958 7.47917 13.2875 7.2875C13.4792 7.09583 13.7167 7 14 7H17C18.3833 7 19.5625 7.4875 20.5375 8.4625C21.5125 9.4375 22 10.6167 22 12C22 13.3833 21.5125 14.5625 20.5375 15.5375C19.5625 16.5125 18.3833 17 17 17H14Z" }),
      " "
    ]
  }
), Pc = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    children: [
      /* @__PURE__ */ s("title", { children: t }),
      /* @__PURE__ */ s("path", { d: "M10.475 22C10.0083 22 9.57082 21.9 9.16249 21.7C8.75416 21.5 8.40832 21.2167 8.12499 20.85L3.09999 14.475C2.96666 14.325 2.90832 14.1458 2.92499 13.9375C2.94166 13.7292 3.01666 13.5583 3.14999 13.425C3.48332 13.075 3.88332 12.8667 4.34999 12.8C4.81666 12.7333 5.24999 12.825 5.64999 13.075L7.49999 14.2V6C7.49999 5.71667 7.59582 5.47917 7.78749 5.2875C7.97916 5.09583 8.21666 5 8.49999 5C8.78332 5 9.02499 5.09583 9.22499 5.2875C9.42499 5.47917 9.52499 5.71667 9.52499 6V11H17C17.8333 11 18.5417 11.2917 19.125 11.875C19.7083 12.4583 20 13.1667 20 14V18C20 19.1 19.6083 20.0417 18.825 20.825C18.0417 21.6083 17.1 22 16 22H10.475ZM11.975 9C11.6917 9 11.4542 8.90417 11.2625 8.7125C11.0708 8.52083 10.975 8.28333 10.975 8C10.975 7.96667 11.0167 7.8 11.1 7.5C11.2333 7.26667 11.3333 7.02917 11.4 6.7875C11.4667 6.54583 11.5 6.28333 11.5 6C11.5 5.16667 11.2083 4.45833 10.625 3.875C10.0417 3.29167 9.33332 3 8.49999 3C7.66666 3 6.95832 3.29167 6.37499 3.875C5.79166 4.45833 5.49999 5.16667 5.49999 6C5.49999 6.28333 5.53332 6.54583 5.59999 6.7875C5.66666 7.02917 5.76666 7.26667 5.89999 7.5C5.94999 7.58333 5.98332 7.66667 5.99999 7.75C6.01666 7.83333 6.02499 7.91667 6.02499 8C6.02499 8.28333 5.93332 8.52083 5.74999 8.7125C5.56666 8.90417 5.33332 9 5.04999 9C4.86666 9 4.69582 8.95 4.53749 8.85C4.37916 8.75 4.25832 8.625 4.17499 8.475C3.95832 8.10833 3.79166 7.71667 3.67499 7.3C3.55832 6.88333 3.49999 6.45 3.49999 6C3.49999 4.61667 3.98749 3.4375 4.96249 2.4625C5.93749 1.4875 7.11666 1 8.49999 1C9.88332 1 11.0625 1.4875 12.0375 2.4625C13.0125 3.4375 13.5 4.61667 13.5 6C13.5 6.45 13.4417 6.88333 13.325 7.3C13.2083 7.71667 13.0417 8.10833 12.825 8.475C12.7417 8.625 12.625 8.75 12.475 8.85C12.325 8.95 12.1583 9 11.975 9Z" }),
      " "
    ]
  }
), So = ({ size: e = 24, title: t, ...r }) => /* @__PURE__ */ s("svg", { width: e * 1, height: e * 0.4, viewBox: "0 0 32 13", xmlns: "http://www.w3.org/2000/svg", ...r, children: [
  /* @__PURE__ */ s("title", { children: t }),
  /* @__PURE__ */ s("path", { d: "M16 3L28 13H4L16 3Z", fill: "#2670E8" }),
  /* @__PURE__ */ s(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M31.1243 13L16.0001 0.396484L0.875854 13H31.1243ZM28 13L16 3L4 13H28Z",
      fill: "white"
    }
  )
] }), Ec = () => {
  const { toggleTheme: e, theme: t } = Si(), { setIsOpenWidget: r, reset: n, isActive: o } = E(), { t: i } = F(), { version: a } = Li();
  return /* @__PURE__ */ s("div", { className: "flex gap-2 items-center justify-between w-full border-b-1 border-border p-4 max-sm:p-2.5", children: [
    /* @__PURE__ */ s(
      "a",
      {
        tabIndex: -1,
        href: "https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras",
        target: "_blank",
        rel: "noreferrer noopener",
        className: U(
          "bg-primary transition-all size-8 sm:size-9 relative overflow-hidden",
          "rounded-sm grid place-items-center hover:brightness-110"
        ),
        children: /* @__PURE__ */ s(
          fc,
          {
            "aria-hidden": !0,
            size: 22,
            className: "text-white absolute size-6 sm:size-7 bottom-0",
            iconTitle: "VLibras Widget+ Logo"
          }
        )
      }
    ),
    /* @__PURE__ */ s("div", { className: "flex flex-col ml-1 leading-tight max-sm:hidden relative -top-0.5", children: [
      /* @__PURE__ */ s("p", { className: "text-lg font-bold text-foreground", children: "VLibras Widget+" }),
      /* @__PURE__ */ s("span", { className: "text-xs font-medium text-muted-foreground", children: [
        "v",
        a
      ] })
    ] }),
    /* @__PURE__ */ s("div", { className: "ml-auto flex items-center gap-x-1", children: [
      o && /* @__PURE__ */ s(yr, { title: i("titles.reset"), onClick: n, children: /* @__PURE__ */ s(xc, { "aria-hidden": !0, size: 22, iconTitle: i("titles.reset") }) }),
      /* @__PURE__ */ s(yr, { title: i("titles.toggle_theme"), onClick: e, children: [
        t === "light" && /* @__PURE__ */ s(Ac, { "aria-hidden": !0, size: 22, iconTitle: i("titles.reset") }),
        t === "dark" && /* @__PURE__ */ s(kc, { "aria-hidden": !0, size: 22, iconTitle: i("titles.reset") })
      ] }),
      /* @__PURE__ */ s(yr, { variant: "destructive", title: i("titles.close"), onClick: () => r(!1), children: /* @__PURE__ */ s(wc, { "aria-hidden": !0, size: 22, iconTitle: i("titles.close") }) })
    ] })
  ] });
}, Rc = ({ children: e }) => /* @__PURE__ */ s("div", { className: U("overflow-y-auto rounded-sm p-4 gap-4 max-sm:grid-cols-1 grid grid-cols-2 auto-rows-min"), children: e }), Pe = [
  { key: "medium", value: 1.25 },
  { key: "large", value: 1.5 },
  { key: "very_large", value: 2 }
];
function Ic() {
  const { fontSize: e } = E(), { current: t } = J(/* @__PURE__ */ new Map()), [r, n] = Z(-1), [o, i] = Z(() => Pe[r] || void 0);
  P(() => {
    t.size || a();
    const c = Pe.find(({ key: p }) => p === e);
    n(Pe.findIndex(({ key: p }) => p === e)), i(c), l(e);
  }, [e]);
  const a = () => {
    document.querySelectorAll("p, span, h1, h2, h3, h4, h5, h6").forEach((c) => {
      if (!Jr(c)) return;
      const p = window.getComputedStyle(c);
      t.set(c, {
        fontSize: Number.parseFloat(p.fontSize),
        inlineFontSize: c.style.fontSize || ""
      });
    });
  }, u = () => {
    const c = r + 1 < Pe.length ? r + 1 : -1, p = Pe[c] || void 0;
    n(c), i(p), E.setState({ fontSize: p == null ? void 0 : p.key });
  }, l = (c) => {
    const p = Pe.find(({ key: d }) => d === c);
    t.forEach(({ inlineFontSize: d, fontSize: f }, g) => {
      g.style.fontSize = p ? `${f * p.value}px` : d || "";
    });
  };
  return { increaseFontSize: u, index: r, option: o };
}
const ht = fe(
  ({ children: e, disabled: t, className: r, ...n }, o) => /* @__PURE__ */ s(
    "button",
    {
      ref: o,
      className: U(
        "cursor-pointer text-foreground flex justify-center items-center gap-x-2",
        t && "pointer-events-none opacity-50",
        r
      ),
      type: n.type || "button",
      ...n,
      children: e
    }
  )
), Q = fe(({ children: e, className: t, disabled: r, isActive: n, showActiveIndicator: o, ...i }, a) => /* @__PURE__ */ s(
  ht,
  {
    ref: a,
    className: U(
      "cursor-pointer overflow-hidden bg-muted text-foreground/80 border-1 border-border",
      "flex flex-col items-center justify-center rounded-md h-32 p-4 font-bold relative",
      "hover:text-foreground hover:border-primary",
      n && "!bg-primary/10 border-primary [&>*]:text-primary",
      r && "!cursor-not-allowed pointer-events-none *:pointer-events-none !text-muted-foreground opacity-80 !border-border !bg-muted/30",
      t
    ),
    ...i,
    children: [
      e,
      !r && o && n && /* @__PURE__ */ s($c, {})
    ]
  }
)), $c = () => {
  const { t: e } = F();
  return /* @__PURE__ */ s("div", { "aria-hidden": !0, className: "absolute top-2 right-2 fill-primary", children: /* @__PURE__ */ s(Di, { iconTitle: e("actived"), size: 16 }) });
}, Yr = ({ size: e, actived: t }) => t < 0 ? null : /* @__PURE__ */ s("div", { className: "absolute top-2 right-2 flex items-center gap-1", children: Array.from({ length: e }).map((r, n) => /* @__PURE__ */ s(
  "div",
  {
    className: U(
      "w-2.5 h-2.5 rounded-full border-1 border-primary/50",
      t === n ? "bg-primary" : "bg-transparent"
    )
  },
  n
)) }), ee = fe(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ s("span", { ref: n, className: U("text-[15px] leading-tight font-semibold", t), ...r, children: e })
), te = fe(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ s("span", { ref: n, className: U("text-[13.5px] text-muted-foreground font-medium", t), ...r, children: e })
), re = fe(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ s("span", { ref: n, className: U(t), ...r, children: e })
), Tc = () => {
  const { t: e } = F(), { increaseFontSize: t, option: r, index: n } = Ic();
  return /* @__PURE__ */ s(Q, { "aria-label": e("al.font_increase"), isActive: !!r, onClick: t, children: [
    /* @__PURE__ */ s(Yr, { size: 3, actived: n }),
    /* @__PURE__ */ s(re, { children: /* @__PURE__ */ s(lc, { iconTitle: e("al.font_increase"), size: 36 }) }),
    /* @__PURE__ */ s(ee, { children: e("font_increase") }),
    /* @__PURE__ */ s(te, { children: e((r == null ? void 0 : r.key) || "deactivated") })
  ] });
}, ot = fe(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ s(
    "p",
    {
      ref: n,
      className: U("text-foreground/80 tex-base font-bold  leading-normal col-[1/-1]", t),
      ...r,
      children: e
    }
  )
);
fe(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ s("div", { ref: n, className: U("w-full col-[1/-1] h-[1px] bg-border", t), ...r, children: e })
);
const Oc = "body.vwp-highlight-links a:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus){outline:2px solid yellow!important;font-weight:700!important;background:#000!important;transition:transform .3s ease!important;color:#fff!important}body.vwp-highlight-links a:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) *{color:#fff!important}body.vwp-highlight-links a:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) button{background:#000!important}body.vwp-highlight-links a:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus):hover{transform:scale(1.05)!important}", _r = "vwp-highlight-links", Nc = () => {
  const { highlightLinks: e } = E();
  return P(() => {
    const r = we(Oc);
    return document.head.appendChild(r), () => document.head.removeChild(r);
  }, []), P(() => (document.body.classList.toggle(_r, !!e), () => document.body.classList.remove(_r)), [e]), { toggle: (r) => {
    const n = r !== void 0 ? r : !e;
    document.body.classList.toggle(_r, n), E.setState({ highlightLinks: n });
  }, isActive: !!e };
}, Hc = () => {
  const { t: e } = F(), { toggle: t, isActive: r } = Nc();
  return /* @__PURE__ */ s(Q, { showActiveIndicator: !0, "aria-label": e("al.highlight_links"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ s(re, { children: /* @__PURE__ */ s(cc, { iconTitle: e("al.highlight_links"), size: 36 }) }),
    /* @__PURE__ */ s(ee, { children: e("highlight_links") }),
    /* @__PURE__ */ s(te, { children: e(r ? "actived" : "deactivated") })
  ] });
}, je = [
  { key: "medium", value: 1.5 },
  { key: "large", value: 3 },
  { key: "very_large", value: 6 }
];
function zc() {
  const { letterSpacing: e } = E(), { current: t } = J(/* @__PURE__ */ new Map()), [r, n] = Z(-1), [o, i] = Z();
  P(() => {
    t.size || a();
    const c = je.find(({ key: p }) => p === e);
    n(je.findIndex(({ key: p }) => p === e)), i(c), l(e);
  }, [e]);
  const a = () => {
    document.querySelectorAll("p, span, h1, h2, h3, h4, h5, h6").forEach((c) => {
      if (!Jr(c)) return;
      const p = window.getComputedStyle(c);
      t.set(c, {
        letterSpacing: Number.parseFloat(p.letterSpacing) || 1,
        inlineLetterSpacing: c.style.letterSpacing || ""
      });
    });
  }, u = () => {
    const c = r + 1 < je.length ? r + 1 : -1, p = je[c] || void 0;
    n(c), i(p), E.setState({ letterSpacing: p == null ? void 0 : p.key });
  }, l = (c) => {
    const p = je.find(({ key: d }) => d === c);
    t.forEach(({ inlineLetterSpacing: d, letterSpacing: f }, g) => {
      g.style.letterSpacing = p ? `${f * p.value}px` : d ?? "";
    });
  };
  return { increaseLetterSpacing: u, index: r, option: o };
}
const Bc = () => {
  const { t: e } = F(), { increaseLetterSpacing: t, option: r, index: n } = zc();
  return /* @__PURE__ */ s(Q, { "aria-label": e("al.letter_spacing"), isActive: !!r, onClick: t, children: [
    /* @__PURE__ */ s(Yr, { size: 3, actived: n }),
    /* @__PURE__ */ s(re, { children: /* @__PURE__ */ s(dc, { iconTitle: e("al.letter_spacing"), size: 36 }) }),
    /* @__PURE__ */ s(ee, { children: e("letter_spacing") }),
    /* @__PURE__ */ s(te, { children: e((r == null ? void 0 : r.key) || "deactivated") })
  ] });
}, Fc = () => {
  const { readingMask: e } = E();
  return { toggle: (r) => {
    const n = r !== void 0 ? r : !e;
    E.setState({ readingMask: n, readingGuide: !1 });
  }, isActive: !!e };
}, jc = () => {
  const { t: e } = F(), { toggle: t, isActive: r } = Fc();
  return /* @__PURE__ */ s(Q, { showActiveIndicator: !0, "aria-label": e("al.reading_mask"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ s(re, { children: /* @__PURE__ */ s(pc, { iconTitle: e("al.reading_mask"), size: 36 }) }),
    /* @__PURE__ */ s(ee, { children: e("reading_mask") }),
    /* @__PURE__ */ s(te, { children: e(r ? "actived" : "deactivated") })
  ] });
}, Dc = "body.vwp-highlight-titles *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) h1,body.vwp-highlight-titles *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) h2,body.vwp-highlight-titles *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) h3,body.vwp-highlight-titles *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) h4,body.vwp-highlight-titles *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) h5,body.vwp-highlight-titles *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) h6{text-decoration:underline!important;color:#1351b4!important;font-weight:700!important}", br = "vwp-highlight-titles", qc = () => {
  const { highlightTitles: e } = E();
  return P(() => {
    const r = we(Dc);
    return document.head.appendChild(r), () => document.head.removeChild(r);
  }, []), P(() => (document.body.classList.toggle(br, !!e), () => document.body.classList.remove(br)), [e]), { toggle: (r) => {
    const n = r !== void 0 ? r : !e;
    document.body.classList.toggle(br, n), E.setState({ highlightTitles: n });
  }, isActive: !!e };
}, Gc = () => {
  const { t: e } = F(), { toggle: t, isActive: r } = qc();
  return /* @__PURE__ */ s(
    Q,
    {
      showActiveIndicator: !0,
      "aria-label": e("al.highlight_titles"),
      isActive: r,
      onClick: () => t(),
      children: [
        /* @__PURE__ */ s(re, { children: /* @__PURE__ */ s(mc, { iconTitle: e("al.highlight_titles"), size: 36 }) }),
        /* @__PURE__ */ s(ee, { children: e("highlight_titles") }),
        /* @__PURE__ */ s(te, { children: e(r ? "actived" : "deactivated") })
      ]
    }
  );
}, Uc = "body.vwp-text-color *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) *{color:var(--vwp-text-color)!important}", Lo = "vwp-text-color", Vc = "--vwp-text-color", Cr = "#000", Zc = () => {
  const { textColor: e } = E();
  P(() => {
    const n = we(Uc);
    return document.head.appendChild(n), () => document.head.removeChild(n);
  }, []), P(() => (document.body.classList.toggle(Lo, e == null ? void 0 : e.isActive), document.body.style.setProperty(Vc, (e == null ? void 0 : e.color) || Cr), () => document.body.classList.remove(Lo)), [e]);
  const t = (n) => {
    (n !== void 0 ? n : !(e != null && e.isActive)) ? r((e == null ? void 0 : e.color) || Cr) : E.setState({
      textColor: {
        isActive: !1,
        color: (e == null ? void 0 : e.color) || Cr
      }
    });
  }, r = (n) => {
    E.setState({ textColor: { color: n, isActive: !0 } });
  };
  return { toggle: t, apply: r, textColor: e, isActive: e == null ? void 0 : e.isActive };
}, Wc = () => {
  const e = J(null), { t } = F(), { apply: r, toggle: n, textColor: o, isActive: i } = Zc(), a = () => {
    var l;
    return (l = e.current) == null ? void 0 : l.click();
  }, u = (l) => {
    const c = l.target.value;
    r(c);
  };
  return /* @__PURE__ */ s(Q, { "aria-label": t("al.text_color"), isActive: i, onClick: () => n(), children: [
    /* @__PURE__ */ s(re, { children: /* @__PURE__ */ s(hc, { iconTitle: t("al.text_color"), size: 36 }) }),
    /* @__PURE__ */ s(ee, { children: t("text_color") }),
    /* @__PURE__ */ s(te, { children: t(i ? "actived" : "deactivated") }),
    /* @__PURE__ */ s(
      "div",
      {
        tabindex: 0,
        onClick: a,
        onKeyDown: () => {
        },
        style: { backgroundColor: (o == null ? void 0 : o.color) || "#000" },
        className: "absolute top-2 right-2 h-4 w-9 rounded-full border-1"
      }
    ),
    /* @__PURE__ */ s(
      "input",
      {
        ref: e,
        onChange: u,
        type: "color",
        className: "pointer-events-none absolute top-2 right-2 w-12 h-4 sr-only"
      }
    )
  ] });
}, Xc = "body.vwp-large-cursor *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus){cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAA0CAYAAAAACoF6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJtSURBVHgBzZmN0aIwEIbfuwoogQ6kA7CCswPmKuDrADqwBK4DSsAOtAPsAK0glwXDxJiEAAF8ZnZGIMLjZvOjAkCBL4Lhi4TYK0p8AUyKikeAHWFKXPcUYppoeITYAfZNQoPA+XzeXWh4OFGW5a5CbzJEXdcsCAJZqOURYQM+ZIjr9aoTSrAyWhmiaRoWhqHabSlWxChjEfrBSlhlLEIFVmBUZkshJxmibVsWRdGqQs4yQuh0OqlCZ3hikowgTVNVqIQHZskQRVF4X/Fny1iEQsxkkYxBqJkrtFjGp5AXGcLHiu9NhqiqSl1gSch5xfcqQxhWfCch7zLE3BV/FRmL0M8uMhahYheZqUKryxAuK/5vbMD9fu+CL67go0y+lENa8X+hN+zgHwBzeDwe3cNut9vwWhw/n8/u3Aj/ePztHLCwm7IsU9M/NRrKkJfMXC4XHI9HWxNKzZ3HTXotjp+vc72DS2aoAGlmNZEkifxJax5/0M+6k/Y3ozJiaNIDTSjf01vMxCpD2ZDnCMqQKXPKepRgBkYZ2hIoD2B5nhuzQ9fw3lV+ZJQbD0FyJiiLSvvJ++EPGc1QbdDXQXdMexYTSiHnmMhbPcRxrIqIHX8uztkKmX5OwYJCHt6sWcxKqV0gX6OHmlhSyKZZUZfiSlynrjSxpJB1IqmhbQKpkG3DXLnf9D0w+j6OR9rXoj1NdL4LWR4xoUP7TLyH9icmNDOy0zAXIyaEGwGkYS4XMnUPSRwOB13XZy43LzF9csohDXMSooJWZ2u8F/Fqv5ZGwOgepX1JH7ABQyHjMwvUJZv+GZJoJGLsCI1A6govWfgPEfBNVkVYxn8AAAAASUVORK5CYII=),pointer!important}", wr = "vwp-large-cursor", Kc = () => {
  const { largeCursor: e } = E();
  return P(() => {
    const r = we(Xc);
    return document.head.appendChild(r), () => document.head.removeChild(r);
  }, []), P(() => (document.body.classList.toggle(wr, !!e), () => document.body.classList.remove(wr)), [e]), { toggle: (r) => {
    const n = r !== void 0 ? r : !e;
    document.body.classList.toggle(wr, n), E.setState({ largeCursor: n, textReader: void 0 });
  }, isActive: !!e };
}, Jc = () => {
  const { t: e } = F(), { toggle: t, isActive: r } = Kc();
  return Wr() ? null : /* @__PURE__ */ s(Q, { showActiveIndicator: !0, "aria-label": e("al.large_cursor"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ s(re, { children: /* @__PURE__ */ s(vc, { iconTitle: e("al.large_cursor"), size: 36 }) }),
    /* @__PURE__ */ s(ee, { children: e("large_cursor") }),
    /* @__PURE__ */ s(te, { children: e(r ? "actived" : "deactivated") })
  ] });
}, De = [
  { key: "medium", value: 1.1 },
  { key: "large", value: 1.2 },
  { key: "very_large", value: 1.3 }
];
function Yc() {
  const { lineSpacing: e } = E(), { current: t } = J(/* @__PURE__ */ new Map()), [r, n] = Z(-1), [o, i] = Z();
  P(() => {
    t.size || a();
    const c = De.find(({ key: p }) => p === e);
    n(De.findIndex(({ key: p }) => p === e)), i(c), l(e);
  }, [e]);
  const a = () => {
    document.querySelectorAll("p, span, h1, h2, h3, h4, h5, h6").forEach((c) => {
      if (!Jr(c)) return;
      const p = window.getComputedStyle(c), d = Number.parseFloat(p.fontSize), f = p.lineHeight === "normal" ? d * 1.2 : Number.parseFloat(p.lineHeight);
      t.set(c, {
        lineHeight: f,
        inlineLineHeight: c.style.lineHeight || ""
      });
    });
  }, u = () => {
    const c = r + 1 < De.length ? r + 1 : -1, p = De[c] || void 0;
    n(c), i(p), E.setState({ lineSpacing: p == null ? void 0 : p.key });
  }, l = (c) => {
    const p = De.find(({ key: d }) => d === c);
    t.forEach(({ lineHeight: d, inlineLineHeight: f }, g) => {
      let k = d;
      const _ = window.getComputedStyle(g), S = Number.parseFloat(_.fontSize);
      _.lineHeight.endsWith("px") && (k = Number.parseFloat(_.lineHeight) / S), g.style.lineHeight = p ? `${k * p.value}` : f || "";
    });
  };
  return { increaseLineSpacing: u, index: r, option: o };
}
const Qc = () => {
  const { t: e } = F(), { increaseLineSpacing: t, option: r, index: n } = Yc();
  return /* @__PURE__ */ s(Q, { "aria-label": e("al.line_spacing"), isActive: !!r, onClick: t, children: [
    /* @__PURE__ */ s(Yr, { size: 3, actived: n }),
    /* @__PURE__ */ s(re, { children: /* @__PURE__ */ s(Cc, { iconTitle: e("al.line_spacing"), size: 36 }) }),
    /* @__PURE__ */ s(ee, { children: e("line_spacing") }),
    /* @__PURE__ */ s(te, { children: e((r == null ? void 0 : r.key) || "deactivated") })
  ] });
}, e2 = "body.vwp-hide-images *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) img,body.vwp-hide-images *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) figure{display:none!important}", xr = "vwp-hide-images", t2 = () => {
  const { hideImages: e } = E();
  return P(() => {
    const r = we(e2);
    return document.head.appendChild(r), () => document.head.removeChild(r);
  }, []), P(() => (document.body.classList.toggle(xr, !!e), () => document.body.classList.remove(xr)), [e]), { toggle: (r) => {
    const n = r !== void 0 ? r : !e;
    document.body.classList.toggle(xr, n), E.setState({ hideImages: n });
  }, isActive: !!e };
}, r2 = () => {
  const { t: e } = F(), { toggle: t, isActive: r } = t2();
  return /* @__PURE__ */ s(Q, { showActiveIndicator: !0, "aria-label": e("al.hide_images"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ s(re, { children: /* @__PURE__ */ s(gc, { iconTitle: e("al.hide_images"), size: 36 }) }),
    /* @__PURE__ */ s(ee, { children: e("hide_images") }),
    /* @__PURE__ */ s(te, { children: e(r ? "actived" : "deactivated") })
  ] });
}, n2 = "body.vwp-pause-animations *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) *{animation-play-state:paused!important}", Ar = "vwp-pause-animations", o2 = () => {
  const { pauseAnimations: e } = E();
  return P(() => {
    const r = we(n2);
    return document.head.appendChild(r), () => document.head.removeChild(r);
  }, []), P(() => (document.body.classList.toggle(Ar, !!e), () => document.body.classList.remove(Ar)), [e]), { toggle: (r) => {
    const n = r !== void 0 ? r : !e;
    document.body.classList.toggle(Ar, n), E.setState({ pauseAnimations: n });
  }, isActive: !!e };
}, i2 = () => {
  const { t: e } = F(), { toggle: t, isActive: r } = o2();
  return /* @__PURE__ */ s(
    Q,
    {
      showActiveIndicator: !0,
      "aria-label": e("al.pause_animations"),
      isActive: r,
      onClick: () => t(),
      children: [
        /* @__PURE__ */ s(re, { children: /* @__PURE__ */ s(yc, { iconTitle: e("al.pause_animations"), size: 36 }) }),
        /* @__PURE__ */ s(ee, { children: e("pause_animations") }),
        /* @__PURE__ */ s(te, { children: e(r ? "actived" : "deactivated") })
      ]
    }
  );
}, a2 = () => {
  const { readingGuide: e } = E();
  return { toggle: (r) => {
    const n = r !== void 0 ? r : !e;
    E.setState({ readingGuide: n, readingMask: !1 });
  }, isActive: !!e };
}, s2 = () => {
  const { t: e } = F(), { toggle: t, isActive: r } = a2();
  return /* @__PURE__ */ s(Q, { showActiveIndicator: !0, "aria-label": e("al.reading_guide"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ s(re, { children: /* @__PURE__ */ s(bc, { iconTitle: e("al.reading_guide"), size: 36 }) }),
    /* @__PURE__ */ s(ee, { children: e("reading_guide") }),
    /* @__PURE__ */ s(te, { children: e(r ? "actived" : "deactivated") })
  ] });
}, l2 = () => {
  const { t: e } = F();
  return /* @__PURE__ */ s(Q, { disabled: !0, showActiveIndicator: !0, "aria-label": e("al.reader_mode"), isActive: !1, onClick: void 0, children: [
    /* @__PURE__ */ s(re, { children: /* @__PURE__ */ s(_c, { iconTitle: e("al.reader_mode"), size: 36 }) }),
    /* @__PURE__ */ s(ee, { children: e("reader_mode") }),
    /* @__PURE__ */ s(te, { className: "italic", children: [
      e("upcomming"),
      "..."
    ] })
  ] });
}, c2 = "body *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) .vwp-text-reader{cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXkSURBVHgBzVlNSBxXHP+/t+qukBBPie0hbKF6S5uESgyNdkMCpcmhLQULPW3SWynRY4MGlaDNLbH0Wj8uPQhp7KHpJSWb1sOCpWvw5hY6eEn0UkVBV9338n6zzu7szHu7s+6syQ+G2Z2P9/7fX8MujO8MMGL9pCAltTGiNtKBkWWfJSucSVokyZJMrjMhn+d5fn1h8NgiHTFY99juU0VMgkKCEsaiAHMkU2Asfac1RQ0E6x7P/ackGaeGgqUkiTlB+8/C1hK7MJb732g2jYHFJJuTe/mJ9GirRXVCmVBO0msDS5Gg6fSdlhk6JF4zA0VYJNjIYRh5UxhwYOVp7/Na/ITTm4V4hJozSqhTiWEZyC+PhIG3TjD7qAHJnZbdTPfwdrzag6Gb0LnTjM6rA+eOU4yORcvvb+WIllcl/ZVVx7KkFxvm7dUdlSTZQCXfCC0PXDvD1VEgvBb8syLp9yVJj5dEpcdG04PREd2NuhkAwUPXI9R+guoCGBn/TZg1IlhSp4m6fODrS5x+/Kp+4gGY3fSNCPV9YCCJy+musa2zvsul4qw2DF7ndPNSuDHgWIyo/6p5XRWhHnmjE7eryhoB4mHzjQI0a2Aivh3dG3Zf4Iyxdapx8UYSX20fJuVA993thPOfCyksCgjE8rDNBsiu6qNQ/xWuzx88UtQCZyQ3KCDgsI3AmIo+OGb/LmcCPnHrik5gMuFogXOKBKo7oM4woo0OTu74aV7Yic6N3k59bmEs8inOvGW32aIA6OsKlqA2VWIHIR/f36cP7+1TciqvNY/sWikLw96Rsbd2iGYX/M/2dvj3FkwmbQZSo8qJnX7XAJQEHSeDMfDtz3madEkS9u01DxCanMzbzOE5mEpfV8FUHi/5Exm07y1J0ITBjOy3mKSKZhS0PICk/13V3/OahyNxRzs9B1KGVrxmBAYhRC8kZ+/bDKgmPEUVoFOhDigHTACxjsmAoJ7Owpoo7IC3XdFmc0cGpeFAA2p6QBUQlvOCCd3vIGjXhFM1ATlrMxDbj1U0oaC1fG8Hr7iGY4ogHuU0cP504Z3ltZLUj8f8+3Wc8q+p3miz37YdGQ12nUDIM2XpW1fLr8MHwBRKcMDxBV0PYQIcuan4Tyo/YJSgOoE6CZIGQS9Vinz3JNGXXbwsEMAHHn5T2hq+kTnwH2M1aoCLAfGMWDhlQk8nIldpLZ0JuqWMCAVm3Rrx4oWhXigygBGgGnKt64ZckFA1P0AE+jMraH6ZtE0JNIBIgujjXcsJvV4zc8Pg9FaT+5/KBw+UGY14n8qsKOmc0S5gEz3xpCDBSoCJ4Jj4g+gTJWVkX4eRe19EbKYr5ZvsmiZES1nOgMmMCi/7F0eWvf2wYi+rBXrglxuiWBwiTLdX0XBGk2MY8cUyaguTZH80MjXcurQfFCBIK1UN3E7uBhKwX9wiP+q9BPvTLbBZ50QmaDLLGDI82xPPfQzYWtAUd4gUXtQ4rDr0+7q9EfYx3W7SviGF0gKfcl9ynNDtaHBESDGoKThACL32XrD+wgmxfhr5NE5GEei+3GDDmZtNgTNlvYDto+z2VqcKlhp0vYMf5sCr8QVIAiHzKAD/Qm+hIR7dzIjz08gAfEFNLB54ryMiTc43nokfnkhTbrHcE7qKtUM01zxqcuhGMQHJo4Mzzkp3xWX336phoPv77bgUPKMrMVAWGEcfhwBs/rtf8sauTtXPI+mhaJlpB9r54t3cZ5LTI909OHa9wy5IfXZB2g291uZtsOn0YMsN31UKiO6x7aQ3tLrhMAKtHI8Gn2BUJ5wKMX8odll3qybdgwlJ/H61z7JO5Wk3J7FS6Qwis6vovgrNf2YlSP7QS754l2oEfEIlkaeN/zhOWpv3ombDTd9utWK5lnOQDDUOFmM8UY14oK7wYWsjz6bUnC9BIcD+JqZ6kiCEOwgl/tmMCDUxZqr0OIxpKSeVjOZad6MzhQFDcIQTwF24OL73kRQioQjCzCau0lHc4/QWOik0Iyo0L8Zyzb/WSrQbrwDCzLLGTU5efAAAAABJRU5ErkJggg==),pointer!important;text-decoration:underline!important}", u2 = {
  event: null,
  isActive: !1,
  onClick: void 0,
  type: "button",
  element: null,
  listener: null
}, Re = ut()(() => ({
  ...u2
})), d2 = Array.from([document.body, ...document.body.children]), kr = ac(), Sr = ft(".vp-guide-container"), p2 = (e) => {
  var t;
  return pe(e, ["IMG"]) ? e.alt : Qr(e) ? e.value : pe(e, ["SELECT"]) ? (t = ft(`[value="${e.value}"]`, e)) == null ? void 0 : t.innerText : e.innerText.trim() || "";
}, qi = (e) => {
  let t = e;
  for (; t && !d2.includes(t); ) {
    if (f2(t) || t.onclick && !v2(t)) return t;
    t = t.parentNode;
  }
  return null;
}, Mo = (e) => kr != null && kr.contains(e) || Sr != null && Sr.contains(e) || e.matches(".vw-links") ? !1 : m2(e) || qi(e) || Qr(e) || h2(e) || g2(e), pe = (e, t) => t.includes(e.tagName), f2 = (e) => pe(e, ["A", "BUTTON"]), Qr = (e) => pe(e, "INPUT") && e.type === "submit", h2 = (e) => pe(e, "IMG") && e.alt && e.alt.trim(), g2 = (e) => pe(e, "SELECT"), v2 = (e) => pe(e, ["SVG", "PATH"]), m2 = (e) => {
  const t = (r) => {
    var n;
    return r.nodeType === Node.TEXT_NODE && ((n = r == null ? void 0 : r.textContent) == null ? void 0 : n.trim());
  };
  return Array.from(e.childNodes).some((r) => t(r));
}, y2 = (e) => {
  if (!e.parentElement) return;
  const t = ft("input", e.parentElement);
  t && ["radio", "checkbox"].includes(t.type) && (t.checked = !t.checked);
}, Po = "vwp-text-reader", _2 = ({ callback: e }) => {
  const t = (i) => {
    const a = i.target;
    Mo(a) && a.classList.add(Po);
  }, r = (i) => {
    Re.setState({ isActive: !1 });
    const a = window.getSelection(), u = a == null ? void 0 : a.toString().trim(), l = i.target;
    if (!Mo(l)) return;
    if (u) return e == null ? void 0 : e(u);
    i.preventDefault(), i.stopPropagation();
    const c = p2(l);
    c != null && c.trim() && (e == null || e(c));
    const p = l.tagName === "A" ? l : qi(l);
    p && o(p, i), pe(l, "LABEL") ? y2(l) : (pe(l, "BUTTON") || Qr(l)) && o(l, i);
  }, n = (i) => {
    i.target.classList.remove(Po);
  }, o = (i, a) => {
    Re.setState({
      listener: r,
      isActive: !0,
      event: a,
      type: i.tagName.toLowerCase() === "a" ? "link" : "button",
      onClick: () => {
        i.click(), Re.setState({ isActive: !1 });
      }
    });
  };
  return document.body.addEventListener("mouseover", t), document.body.addEventListener("mouseout", n), document.body.addEventListener("click", r, !0), () => {
    document.body.removeEventListener("mouseover", t), document.body.removeEventListener("mouseout", n), document.body.removeEventListener("click", r, !0);
  };
}, b2 = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-ES"
}, Eo = (e, t) => {
  if ("speechSynthesis" in window) {
    const r = new SpeechSynthesisUtterance(e);
    r.lang = b2[(t == null ? void 0 : t.locale) || "pt"] || "pt-BR", r.rate = (t == null ? void 0 : t.velocity) || 1, r.pitch = 1, r.volume = 1, r.voice = speechSynthesis.getVoices().find((n) => n.lang === r.lang) || null, speechSynthesis.cancel(), speechSynthesis.speak(r);
  } else
    console.error(ki("speech_is_not_supported", { locale: (t == null ? void 0 : t.locale) || "pt" }));
}, C2 = () => {
  "speechSynthesis" in window && speechSynthesis.cancel();
}, w2 = () => {
  const { locale: e } = F(), { textReader: t } = E();
  return P(() => {
    const n = we(c2);
    return document.head.appendChild(n), () => document.head.removeChild(n);
  }, []), P(() => {
    const n = t != null && t.isActive ? _2({
      callback: (o) => Eo(o, { locale: e, velocity: t == null ? void 0 : t.velocity })
    }) : void 0;
    return () => {
      n == null || n();
    };
  }, [e, t]), { toggle: (n) => {
    const o = n !== void 0 ? n : !(t != null && t.isActive);
    o ? Eo(ki("text_reader_is_actived"), { locale: e }) : C2(), E.setState({ textReader: { isActive: o }, largeCursor: void 0 });
  }, isActive: !!(t != null && t.isActive) };
}, x2 = () => {
  const { t: e } = F(), { toggle: t, isActive: r } = w2(), n = "speechSynthesis" in window;
  return /* @__PURE__ */ s(
    Q,
    {
      disabled: !n,
      showActiveIndicator: !0,
      "aria-label": e("al.text_reader"),
      isActive: r,
      onClick: () => t(),
      children: [
        /* @__PURE__ */ s(re, { children: /* @__PURE__ */ s(Lc, { iconTitle: e("al.text_reader"), size: 36 }) }),
        /* @__PURE__ */ s(ee, { children: e("text_reader") }),
        /* @__PURE__ */ s(te, { children: e(n ? r ? "actived" : "deactivated" : "no_support") })
      ]
    }
  );
}, A2 = () => {
  if (window.gtag) {
    Gi("accessibility_activated", {
      user_action: "activate_accessibility"
    });
    return;
  }
  const e = document.querySelector(
    'script[src*="googletagmanager.com/gtag/js"]'
  );
  if (e) {
    e.addEventListener("load", () => {
      Ro();
    });
    return;
  }
  const t = document.createElement("script");
  t.src = "https://www.googletagmanager.com/gtag/js?id=G-33MNM4MG8B", t.async = !0, t.onload = () => {
    Ro();
  }, document.head.appendChild(t);
};
function Ro() {
  window.dataLayer = window.dataLayer || [];
  function e(...t) {
    window.dataLayer.push(...t);
  }
  window.gtag = e, e("js", /* @__PURE__ */ new Date()), e("config", "G-33MNM4MG8B"), Gi("accessibility_activated", {
    user_action: "activate_accessibility"
  });
}
function Gi(e, t = {}) {
  if (!window.gtag) return;
  const r = {
    site_domain: window.location.hostname,
    page_url: window.location.href,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  };
  console.log("[GTAG EVENT]", e, { ...r, ...t }), window.gtag("event", e, {
    ...r,
    ...t
  });
}
const k2 = () => {
  const { t: e } = F(), { isOpenWidget: t, isLoaded: r } = E();
  return P(() => {
    A2();
  }, []), /* @__PURE__ */ s(
    "div",
    {
      className: U(
        "spacing flex flex-col gap-0 transition-[bottom] duration-500 overflow-hidden rounded-xl pt-0 border-1 tracking-normal",
        "leading-normal fixed z-[2147483647] -bottom-[80dvh] right-2 bg-background",
        "sm:w-[420px] w-[240px] h-[80dvh] data-[active='true']:bottom-2"
      ),
      style: { boxShadow: "0 0 30px -5px rgba(0, 0, 0, 0.2)" },
      "data-active": t && r,
      children: [
        /* @__PURE__ */ s(Ec, {}),
        /* @__PURE__ */ s(Rc, { children: [
          /* @__PURE__ */ s(ot, { children: e("sections.text_and_typography") }),
          /* @__PURE__ */ s(Tc, {}),
          /* @__PURE__ */ s(Bc, {}),
          /* @__PURE__ */ s(Qc, {}),
          /* @__PURE__ */ s(Wc, {}),
          /* @__PURE__ */ s(ot, { children: e("sections.focus_and_visibility") }),
          /* @__PURE__ */ s(Gc, {}),
          /* @__PURE__ */ s(Hc, {}),
          /* @__PURE__ */ s(Jc, {}),
          /* @__PURE__ */ s(ot, { children: e("sections.reading_and_comprehension") }),
          /* @__PURE__ */ s(x2, {}),
          /* @__PURE__ */ s(jc, {}),
          /* @__PURE__ */ s(s2, {}),
          /* @__PURE__ */ s(l2, {}),
          /* @__PURE__ */ s(ot, { children: e("sections.distraction_reduction") }),
          /* @__PURE__ */ s(i2, {}),
          /* @__PURE__ */ s(r2, {})
        ] })
      ]
    }
  );
}, S2 = ({ children: e, root: t }) => {
  const { theme: r } = Si();
  return P(() => {
    const n = t || document.documentElement;
    (n instanceof ShadowRoot ? n.host : n).classList.toggle("dark", r === "dark");
  }, [r, t]), e;
}, L2 = () => {
  const e = J(null), t = J(null), r = J(null), n = Wr(), { t: o } = F(), { height: i } = Pi(), { y: a } = Mi();
  P(() => {
    u(a || i / 2);
  }, [a, i]), P(() => {
    n && u(i / 2);
  }, [n, i]);
  function u(l) {
    if (!t.current || !r.current) return;
    t.current.style.height = `${(l > i - 54 ? i - 54 : l) - (l < 4 ? 0 : 48)}px`, r.current.style.height = `${i - (l < 58 ? 56 : l) - 48}px`;
    let c = l - 24;
    c < 32 ? c = 32 : c > i - 78 && (c = i - 78), e.current && (e.current.style.top = `${c}px`);
  }
  return /* @__PURE__ */ s("div", { className: "z-[9999999] relative", children: [
    n && /* @__PURE__ */ s(
      ht,
      {
        ref: e,
        onTouchMove: (l) => {
          l.preventDefault(), u(l.touches[0].clientY);
        },
        className: U("w-8 h-12 top-[calc(45dvh+20px)] rounded-r-[8px] items-center fixed left-0 bg-primary"),
        "aria-label": o("al.move_reading_mask"),
        children: /* @__PURE__ */ s(uc, { size: 24, className: "fill-white", iconTitle: o("al.move_reading_mask") })
      }
    ),
    /* @__PURE__ */ s(
      "div",
      {
        ref: t,
        className: "top-0 h-[45dvh] pointer-events-none w-full fixed bg-black/40 left-0 border-b-8 border-primary"
      }
    ),
    /* @__PURE__ */ s(
      "div",
      {
        ref: r,
        className: "bottom-0 pointer-events-none h-[45dvh] left-0 fixed border-t-8  w-full border-primary bg-black/20"
      }
    )
  ] });
}, M2 = () => {
  const e = J(null), t = J(null), r = J(null), n = Wr(), { t: o } = F(), { width: i, height: a } = Pi(), { x: u, y: l } = Mi();
  P(() => {
    u && l && c(u, l);
  }, [l, u]), P(() => {
    n && c(i / 2, 24);
  }, [n, i]);
  function c(p, d) {
    if (!t.current) return;
    const f = t.current.offsetWidth;
    if (n || (t.current.style.left = `${p - f / 2}px`, t.current.style.top = `${d < 30 ? 16 : d - 16}px`), e.current && r.current && n) {
      const g = p < 24 ? 4 : p > i - 40 ? i - 54 : p - 24;
      t.current.style.top = `${d < 24 ? 14 : d > a - 32 ? a - 42 : d - 10}px`, e.current.style.top = `${d < 24 ? 20 : d > a - 32 ? a - 37 : d - 5}px`, e.current.style.left = `${g}px`, r.current.style.left = `${g + 12}px`, r.current.style.top = `${d < 24 ? 6 : d > a - 36 ? a - 49 : d - 17.1}px`;
    }
  }
  return /* @__PURE__ */ s("div", { className: "z-[9999999] relative", children: [
    n && /* @__PURE__ */ s(
      ht,
      {
        ref: e,
        onTouchMove: (p) => {
          p.preventDefault(), c(p.touches[0].clientX, p.touches[0].clientY);
        },
        className: U(
          "w-12 h-8 z-[9999999] left-1/2 fixed bg-primary border-2 border-white border-t-primary top-0 rounded-b-md -translate-x-1/2"
        ),
        "aria-label": o("al.move_reading_mask"),
        children: /* @__PURE__ */ s(Sc, { size: 22, className: "fill-white", iconTitle: o("al.move_reading_mask") })
      }
    ),
    /* @__PURE__ */ s(
      "div",
      {
        ref: t,
        className: U(
          "w-xl fixed top-4 left-[calc(50dvw-36rem/2)] h-2 grid place-items-center border-2 border-white bg-primary rounded-full",
          n && "translate-none !left-0 !right-0 !w-auto rounded-none"
        ),
        children: !n && /* @__PURE__ */ s(So, { iconTitle: "", className: "bottom-[3.7px] absolute" })
      }
    ),
    /* @__PURE__ */ s("span", { ref: r, className: U("absolute bottom-[3.7px]", n ? "fixed" : "hidden"), children: /* @__PURE__ */ s(So, { iconTitle: "" }) })
  ] });
}, P2 = () => {
  const e = J(null), { t } = F(), { type: r, event: n, onClick: o, isActive: i, listener: a } = Re(), [u, l] = Z({ x: 0, y: 0 });
  return P(() => {
    const c = (p) => {
      e.current && !e.current.contains(p.target) && Re.setState({ isActive: !1 });
    };
    return i ? document.addEventListener("click", c) : document.removeEventListener("click", c), () => {
      document.removeEventListener("click", c);
    };
  }, [i]), P(() => {
    if (n) {
      const { pageX: c, pageY: p } = n;
      l({ x: c, y: p });
      const d = e.current;
      d && (d.classList.remove("animate-scale"), d.offsetWidth, d.classList.add("animate-scale"));
    }
  }, [n]), /* @__PURE__ */ s(
    ht,
    {
      ref: e,
      onClick: () => {
        if (!a) return o == null ? void 0 : o();
        document.body.removeEventListener("click", a, !0), setTimeout(() => {
          o == null || o(), document.body.addEventListener("click", a, !0);
        }, 0);
      },
      style: {
        left: `${u.x}px`,
        top: `${u.y - 32}px`,
        boxShadow: "2px 2px 10px 4px rgba(0, 0, 0, .2)"
      },
      className: U(
        "group text-primary-foreground rounded-md absolute z-[2147483647] -translate-x-6 -translate-y-full px-3 h-9 animate-scale"
      ),
      children: [
        r === "button" ? /* @__PURE__ */ s(Pc, { size: 20, iconTitle: t("interact") }) : /* @__PURE__ */ s(Mc, { size: 20, iconTitle: t("access_link") }),
        /* @__PURE__ */ s("span", { className: "relative bottom-0.5 font-medium text-base", children: t(r === "button" ? "interact" : "access_link") }),
        /* @__PURE__ */ s("span", { className: "absolute inset-0 bg-primary group-hover:brightness-85 rounded-md -z-[1]" }),
        /* @__PURE__ */ s("span", { className: "size-4 rotate-45 absolute brightness-85 -translate-x-1/2 -z-[2] -bottom-5 left-6 bg-primary" })
      ]
    }
  );
}, E2 = () => {
  const { readingMask: e, readingGuide: t } = E(), { isActive: r } = Re();
  return /* @__PURE__ */ s(Y, { children: [
    e && /* @__PURE__ */ s(L2, {}),
    t && /* @__PURE__ */ s(M2, {}),
    r && /* @__PURE__ */ s(P2, {})
  ] });
}, R2 = `/*! tailwindcss v4.0.15 | MIT License | https://tailwindcss.com */@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xl:36rem;--text-xs--line-height:calc(1/.75);--text-base--line-height: 1.5 ;--text-lg--line-height:calc(1.75/1.125);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-normal:0em;--leading-tight:1.25;--leading-normal:1.5;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:color-mix(in oklab,currentColor 50%,transparent)}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*{--tw-border-style:solid;border-style:solid;border-color:var(--border);outline-color:color-mix(in oklab,var(--ring)50%,transparent)}:host{border-color:var(--border);color:var(--foreground)}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:calc(var(--spacing)*0)}.-top-0\\.5{top:calc(var(--spacing)*-.5)}.top-0{top:calc(var(--spacing)*0)}.top-2{top:calc(var(--spacing)*2)}.top-4{top:calc(var(--spacing)*4)}.top-\\[calc\\(45dvh\\+20px\\)\\]{top:calc(45dvh + 20px)}.\\!right-0{right:calc(var(--spacing)*0)!important}.right-2{right:calc(var(--spacing)*2)}.-bottom-5{bottom:calc(var(--spacing)*-5)}.-bottom-\\[80dvh\\]{bottom:-80dvh}.bottom-0{bottom:calc(var(--spacing)*0)}.bottom-0\\.5{bottom:calc(var(--spacing)*.5)}.bottom-\\[3\\.7px\\]{bottom:3.7px}.\\!left-0{left:calc(var(--spacing)*0)!important}.left-0{left:calc(var(--spacing)*0)}.left-1\\/2{left:50%}.left-6{left:calc(var(--spacing)*6)}.left-\\[calc\\(50dvw-36rem\\/2\\)\\]{left:calc(50dvw - 18rem)}.-z-\\[1\\]{z-index:-1}.-z-\\[2\\]{z-index:-2}.z-\\[9999999\\]{z-index:9999999}.z-\\[2147483647\\]{z-index:2147483647}.col-\\[1\\/-1\\]{grid-column:1/-1}.ml-1{margin-left:calc(var(--spacing)*1)}.ml-auto{margin-left:auto}.flex{display:flex}.grid{display:grid}.hidden{display:none}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.size-8{width:calc(var(--spacing)*8);height:calc(var(--spacing)*8)}.size-9{width:calc(var(--spacing)*9);height:calc(var(--spacing)*9)}.h-2{height:calc(var(--spacing)*2)}.h-2\\.5{height:calc(var(--spacing)*2.5)}.h-4{height:calc(var(--spacing)*4)}.h-8{height:calc(var(--spacing)*8)}.h-9{height:calc(var(--spacing)*9)}.h-12{height:calc(var(--spacing)*12)}.h-32{height:calc(var(--spacing)*32)}.h-\\[1px\\]{height:1px}.h-\\[45dvh\\]{height:45dvh}.h-\\[80dvh\\]{height:80dvh}.\\!w-auto{width:auto!important}.w-2\\.5{width:calc(var(--spacing)*2.5)}.w-8{width:calc(var(--spacing)*8)}.w-9{width:calc(var(--spacing)*9)}.w-12{width:calc(var(--spacing)*12)}.w-\\[240px\\]{width:240px}.w-full{width:100%}.w-xl{width:var(--container-xl)}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-6{--tw-translate-x:calc(var(--spacing)*-6);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-full{--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-none{translate:none}.rotate-45{rotate:45deg}.animate-scale{animation:.2s ease-in-out scale}.\\!cursor-not-allowed{cursor:not-allowed!important}.cursor-pointer{cursor:pointer}.resize{resize:both}.auto-rows-min{grid-auto-rows:min-content}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.place-items-center{place-items:center}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-0{gap:calc(var(--spacing)*0)}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-4{gap:calc(var(--spacing)*4)}.gap-x-1{column-gap:calc(var(--spacing)*1)}.gap-x-2{column-gap:calc(var(--spacing)*2)}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded-full{border-radius:3.40282e38px}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-none{border-radius:0}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:calc(var(--radius) + 4px)}.rounded-r-\\[8px\\]{border-top-right-radius:8px;border-bottom-right-radius:8px}.rounded-b-md{border-bottom-right-radius:calc(var(--radius) - 2px);border-bottom-left-radius:calc(var(--radius) - 2px)}.border,.border-1{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t-8{border-top-style:var(--tw-border-style);border-top-width:8px}.border-b-1{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-8{border-bottom-style:var(--tw-border-style);border-bottom-width:8px}.\\!border-border{border-color:var(--border)!important}.border-border{border-color:var(--border)}.border-primary{border-color:var(--primary)}.border-primary\\/50{border-color:color-mix(in oklab,var(--primary)50%,transparent)}.border-white{border-color:var(--color-white)}.border-t-primary{border-top-color:var(--primary)}.\\!bg-muted\\/30{background-color:color-mix(in oklab,var(--muted)30%,transparent)!important}.\\!bg-primary\\/10{background-color:color-mix(in oklab,var(--primary)10%,transparent)!important}.bg-background{background-color:var(--background)}.bg-black\\/20{background-color:color-mix(in oklab,var(--color-black)20%,transparent)}.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black)40%,transparent)}.bg-border{background-color:var(--border)}.bg-muted{background-color:var(--muted)}.bg-primary{background-color:var(--primary)}.bg-transparent{background-color:#0000}.fill-primary{fill:var(--primary)}.fill-white{fill:var(--color-white)}.p-4{padding:calc(var(--spacing)*4)}.px-3{padding-inline:calc(var(--spacing)*3)}.pt-0{padding-top:calc(var(--spacing)*0)}.text-base{font-size:calc(var(--font-size)*1);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:calc(var(--font-size)*1.125);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-xs{font-size:calc(var(--font-size)*.75);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[13\\.5px\\]{font-size:13.5px}.text-\\[15px\\]{font-size:15px}.leading-normal{--tw-leading:var(--leading-normal);line-height:var(--leading-normal)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-normal{--tw-tracking:var(--tracking-normal);letter-spacing:var(--tracking-normal)}.\\!text-muted-foreground{color:var(--muted-foreground)!important}.text-foreground{color:var(--foreground)}.text-foreground\\/80{color:color-mix(in oklab,var(--foreground)80%,transparent)}.text-muted-foreground{color:var(--muted-foreground)}.text-primary-foreground{color:var(--primary-foreground)}.text-white{color:var(--color-white)}.italic{font-style:italic}.opacity-50{opacity:.5}.opacity-80{opacity:.8}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.brightness-85{--tw-brightness:brightness(85%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[bottom\\]{transition-property:bottom;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-500{--tw-duration:.5s;transition-duration:.5s}:is(.\\*\\:pointer-events-none>*){pointer-events:none}@media (hover:hover){.group-hover\\:brightness-85:is(:where(.group):hover *){--tw-brightness:brightness(85%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.hover\\:border-primary:hover{border-color:var(--primary)}.hover\\:bg-destructive\\/10:hover{background-color:color-mix(in oklab,var(--destructive)10%,transparent)}.hover\\:bg-muted:hover{background-color:var(--muted)}.hover\\:text-foreground:hover{color:var(--foreground)}.hover\\:brightness-110:hover{--tw-brightness:brightness(110%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}}.data-\\[active\\=\\'true\\'\\]\\:bottom-2[data-active=true]{bottom:calc(var(--spacing)*2)}@media (width<40rem){.max-sm\\:hidden{display:none}.max-sm\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.max-sm\\:p-2\\.5{padding:calc(var(--spacing)*2.5)}}@media (width>=40rem){.sm\\:size-7{width:calc(var(--spacing)*7);height:calc(var(--spacing)*7)}.sm\\:size-9{width:calc(var(--spacing)*9);height:calc(var(--spacing)*9)}.sm\\:w-\\[420px\\]{width:420px}}.\\[\\&\\>\\*\\]\\:text-primary>*{color:var(--primary)}.\\[\\&\\>svg\\]\\:pointer-events-none>svg{pointer-events:none}.\\[\\&\\>svg\\]\\:fill-foreground\\/80>svg{fill:color-mix(in oklab,var(--foreground)80%,transparent)}@media (hover:hover){.hover\\:\\[\\&\\>svg\\]\\:fill-destructive-foreground:hover>svg{fill:var(--destructive-foreground)}.hover\\:\\[\\&\\>svg\\]\\:fill-foreground:hover>svg{fill:var(--foreground)}}}:host{--background:oklch(1 0 0);--foreground:oklch(25% 0 0);--card:oklch(1 0 0);--card-foreground:oklch(.145 0 0);--popover:oklch(1 0 0);--popover-foreground:oklch(.145 0 0);--primary:oklch(56.99% .1959 259.98);--primary-foreground:oklch(1 0 0);--secondary:oklch(.97 0 0);--secondary-foreground:oklch(.205 0 0);--muted:oklch(.97 0 0);--muted-foreground:oklch(.556 0 0);--accent:oklch(.97 0 0);--accent-foreground:oklch(.205 0 0);--destructive:oklch(.577 .245 27.325);--destructive-foreground:oklch(.577 .245 27.325);--border:oklch(.922 0 0);--input:oklch(.922 0 0);--ring:oklch(.708 0 0);--radius:10px;--spacing:4px;--font-sans:"VLibrasWidget_Font",sans-serif;--font-size:16px}:host(.dark){--background:oklch(.16 0 0);--foreground:oklch(.985 0 0);--card:oklch(.145 0 0);--card-foreground:oklch(.985 0 0);--popover:oklch(.145 0 0);--popover-foreground:oklch(.985 0 0);--primary:oklch(56.99% .1959 259.98);--primary-foreground:oklch(1 0 0);--secondary:oklch(.269 0 0);--secondary-foreground:oklch(.985 0 0);--muted:oklch(.2 0 0);--muted-foreground:oklch(.708 0 0);--accent:oklch(.269 0 0);--accent-foreground:oklch(.985 0 0);--destructive:oklch(.396 .141 25.723);--destructive-foreground:oklch(.637 .237 25.331);--border:oklch(.269 0 0);--input:oklch(.269 0 0);--ring:oklch(.439 0 0)}:host{font-family:var(--font-sans)!important}:host ::-webkit-scrollbar{height:calc(var(--spacing)*2.5);width:calc(var(--spacing)*2.5)}:host ::-webkit-scrollbar-track{background-color:#0000}:host ::-webkit-scrollbar-thumb{border-style:var(--tw-border-style);--tw-border-style:solid;background-color:var(--border);background-clip:padding-box;border:1px solid #0000;border-radius:3.40282e38px}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@keyframes scale{0%{transform:scale(0)}to{transform:scale(1)}}`, I2 = ({ children: e, root: t }) => /* @__PURE__ */ s(S2, { root: t, children: [
  /* @__PURE__ */ s("style", { children: R2 }),
  /* @__PURE__ */ s(E2, {}),
  e
] }), { shadowRoot: Io } = ji(), $o = {}, $2 = ({ children: e, css: t, ...r }) => {
  if (!t) return /* @__PURE__ */ s(Y, { children: e });
  const n = Array.isArray(t) ? t.join(`
`) : t, o = n.slice(0, 15), [i, a] = Z(!o);
  return P(() => {
    if (!o || $o[o]) return;
    $o[o] = !0;
    const u = new CSSStyleSheet();
    u.replaceSync(n), Io.adoptedStyleSheets = [...Io.adoptedStyleSheets, u], a(!0);
  }, [o, n]), /* @__PURE__ */ s(Y, { ...r, children: [
    (i || !1) && /* @__PURE__ */ s("style", { children: n }),
    e
  ] });
}, T2 = "._badge_n7m0i_1{display:none;place-content:center;border-radius:40px;width:16px;height:16px;z-index:100000000;position:absolute;bottom:-4px;right:28px;background:#fff}._badge_n7m0i_1[data-active=true]{display:grid}._badge_n7m0i_1 svg{width:100%;height:100%;fill:#2c9e2c}", O2 = "_badge_n7m0i_1", N2 = {
  badge: O2
}, H2 = () => {
  const { isActive: e } = E(), { t } = F();
  return /* @__PURE__ */ s($2, { css: T2, children: /* @__PURE__ */ s("div", { className: N2.badge, "data-active": e, children: /* @__PURE__ */ s(Di, { iconTitle: t("actived") }) }) });
}, z2 = () => (P(() => {
  var n;
  const e = (n = document.getElementById("vwp-app-wrapper")) == null ? void 0 : n.shadowRoot, t = e == null ? void 0 : e.getElementById("vwp-access-wrapper"), r = document.createElement("div");
  Ce(/* @__PURE__ */ s(H2, {}), r), t == null || t.appendChild(r);
}, []), null), B2 = () => /* @__PURE__ */ s(Y, { children: /* @__PURE__ */ s(z2, {}) }), { root: F2, shadowRoot: Hr, isRootActive: To } = ji();
function j2() {
  const { setIsOpenWidget: e, isLoaded: t, setIsLoaded: r } = E(), { path: n } = Li();
  return P(() => {
    if ((async () => await sc(n, () => {
      Hr.adoptedStyleSheets = [...document.adoptedStyleSheets], r(!0);
    }))(), !t) return;
    e(To());
    const o = new MutationObserver(() => e(To()));
    return o.observe(F2, {
      attributes: !0,
      attributeFilter: ["data-active"]
    }), () => o.disconnect();
  }, [n, e, t, r]), /* @__PURE__ */ s(I2, { root: Hr, children: [
    /* @__PURE__ */ s(k2, {}),
    /* @__PURE__ */ s(B2, {})
  ] });
}
Ce(/* @__PURE__ */ s(j2, {}), Hr);
