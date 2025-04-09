var Qe, P, Dn, xe, pr, Zn, qn, Vn, U1, N1, $1, jn, Ke = {}, Un = [], ei = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Je = Array.isArray;
function ce(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function G1(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function he(e, t, r) {
  var n, i, a, s = {};
  for (a in t) a == "key" ? n = t[a] : a == "ref" ? i = t[a] : s[a] = t[a];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Qe.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null) for (a in e.defaultProps) s[a] === void 0 && (s[a] = e.defaultProps[a]);
  return Xe(e, s, n, i, null);
}
function Xe(e, t, r, n, i) {
  var a = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++Dn, __i: -1, __u: 0 };
  return i == null && P.vnode != null && P.vnode(a), a;
}
function ti() {
  return { current: null };
}
function re(e) {
  return e.children;
}
function de(e, t) {
  this.props = e, this.context = t;
}
function Ne(e, t) {
  if (t == null) return e.__ ? Ne(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? Ne(e) : null;
}
function Gn(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) {
      e.__e = e.__c.base = r.__e;
      break;
    }
    return Gn(e);
  }
}
function O1(e) {
  (!e.__d && (e.__d = !0) && xe.push(e) && !pt.__r++ || pr !== P.debounceRendering) && ((pr = P.debounceRendering) || Zn)(pt);
}
function pt() {
  for (var e, t, r, n, i, a, s, c = 1; xe.length; ) xe.length > c && xe.sort(qn), e = xe.shift(), c = xe.length, e.__d && (r = void 0, i = (n = (t = e).__v).__e, a = [], s = [], t.__P && ((r = ce({}, n)).__v = n.__v + 1, P.vnode && P.vnode(r), W1(t.__P, r, n, t.__n, t.__P.namespaceURI, 32 & n.__u ? [i] : null, a, i ?? Ne(n), !!(32 & n.__u), s), r.__v = n.__v, r.__.__k[r.__i] = r, Kn(a, r, s), r.__e != i && Gn(r)));
  pt.__r = 0;
}
function Wn(e, t, r, n, i, a, s, c, d, l, p) {
  var u, f, h, _, C, S, A = n && n.__k || Un, b = t.length;
  for (d = ri(r, t, A, d, b), u = 0; u < b; u++) (h = r.__k[u]) != null && (f = h.__i === -1 ? Ke : A[h.__i] || Ke, h.__i = u, S = W1(e, h, f, i, a, s, c, d, l, p), _ = h.__e, h.ref && f.ref != h.ref && (f.ref && X1(f.ref, null, h), p.push(h.ref, h.__c || _, h)), C == null && _ != null && (C = _), 4 & h.__u || f.__k === h.__k ? d = Xn(h, d, e) : typeof h.type == "function" && S !== void 0 ? d = S : _ && (d = _.nextSibling), h.__u &= -7);
  return r.__e = C, d;
}
function ri(e, t, r, n, i) {
  var a, s, c, d, l, p = r.length, u = p, f = 0;
  for (e.__k = new Array(i), a = 0; a < i; a++) (s = t[a]) != null && typeof s != "boolean" && typeof s != "function" ? (d = a + f, (s = e.__k[a] = typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? Xe(null, s, null, null, null) : Je(s) ? Xe(re, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? Xe(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s).__ = e, s.__b = e.__b + 1, c = null, (l = s.__i = ni(s, r, d, u)) !== -1 && (u--, (c = r[l]) && (c.__u |= 2)), c == null || c.__v === null ? (l == -1 && (i > p ? f-- : i < p && f++), typeof s.type != "function" && (s.__u |= 4)) : l != d && (l == d - 1 ? f-- : l == d + 1 ? f++ : (l > d ? f-- : f++, s.__u |= 4))) : e.__k[a] = null;
  if (u) for (a = 0; a < p; a++) (c = r[a]) != null && (2 & c.__u) == 0 && (c.__e == n && (n = Ne(c)), Qn(c, c));
  return n;
}
function Xn(e, t, r) {
  var n, i;
  if (typeof e.type == "function") {
    for (n = e.__k, i = 0; n && i < n.length; i++) n[i] && (n[i].__ = e, t = Xn(n[i], t, r));
    return t;
  }
  e.__e != t && (t && e.type && !r.contains(t) && (t = Ne(e)), r.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function fe(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Je(e) ? e.some(function(r) {
    fe(r, t);
  }) : t.push(e)), t;
}
function ni(e, t, r, n) {
  var i, a, s = e.key, c = e.type, d = t[r];
  if (d === null && e.key == null || d && s == d.key && c === d.type && (2 & d.__u) == 0) return r;
  if (n > (d != null && (2 & d.__u) == 0 ? 1 : 0)) for (i = r - 1, a = r + 1; i >= 0 || a < t.length; ) {
    if (i >= 0) {
      if ((d = t[i]) && (2 & d.__u) == 0 && s == d.key && c === d.type) return i;
      i--;
    }
    if (a < t.length) {
      if ((d = t[a]) && (2 & d.__u) == 0 && s == d.key && c === d.type) return a;
      a++;
    }
  }
  return -1;
}
function fr(e, t, r) {
  t[0] == "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || ei.test(t) ? r : r + "px";
}
function ct(e, t, r, n, i) {
  var a;
  e: if (t == "style") if (typeof r == "string") e.style.cssText = r;
  else {
    if (typeof n == "string" && (e.style.cssText = n = ""), n) for (t in n) r && t in r || fr(e.style, t, "");
    if (r) for (t in r) n && r[t] === n[t] || fr(e.style, t, r[t]);
  }
  else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(Vn, "$1")), t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = r, r ? n ? r.t = n.t : (r.t = U1, e.addEventListener(t, a ? $1 : N1, a)) : e.removeEventListener(t, a ? $1 : N1, a);
  else {
    if (i == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && r == 1 ? "" : r));
  }
}
function hr(e) {
  return function(t) {
    if (this.l) {
      var r = this.l[t.type + e];
      if (t.u == null) t.u = U1++;
      else if (t.u < r.t) return;
      return r(P.event ? P.event(t) : t);
    }
  };
}
function W1(e, t, r, n, i, a, s, c, d, l) {
  var p, u, f, h, _, C, S, A, b, g, m, y, v, k, I, O, W, H = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && (d = !!(32 & r.__u), a = [c = t.__e = r.__e]), (p = P.__b) && p(t);
  e: if (typeof H == "function") try {
    if (A = t.props, b = "prototype" in H && H.prototype.render, g = (p = H.contextType) && n[p.__c], m = p ? g ? g.props.value : p.__ : n, r.__c ? S = (u = t.__c = r.__c).__ = u.__E : (b ? t.__c = u = new H(A, m) : (t.__c = u = new de(A, m), u.constructor = H, u.render = ii), g && g.sub(u), u.props = A, u.state || (u.state = {}), u.context = m, u.__n = n, f = u.__d = !0, u.__h = [], u._sb = []), b && u.__s == null && (u.__s = u.state), b && H.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = ce({}, u.__s)), ce(u.__s, H.getDerivedStateFromProps(A, u.__s))), h = u.props, _ = u.state, u.__v = t, f) b && H.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), b && u.componentDidMount != null && u.__h.push(u.componentDidMount);
    else {
      if (b && H.getDerivedStateFromProps == null && A !== h && u.componentWillReceiveProps != null && u.componentWillReceiveProps(A, m), !u.__e && (u.shouldComponentUpdate != null && u.shouldComponentUpdate(A, u.__s, m) === !1 || t.__v == r.__v)) {
        for (t.__v != r.__v && (u.props = A, u.state = u.__s, u.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(F) {
          F && (F.__ = t);
        }), y = 0; y < u._sb.length; y++) u.__h.push(u._sb[y]);
        u._sb = [], u.__h.length && s.push(u);
        break e;
      }
      u.componentWillUpdate != null && u.componentWillUpdate(A, u.__s, m), b && u.componentDidUpdate != null && u.__h.push(function() {
        u.componentDidUpdate(h, _, C);
      });
    }
    if (u.context = m, u.props = A, u.__P = e, u.__e = !1, v = P.__r, k = 0, b) {
      for (u.state = u.__s, u.__d = !1, v && v(t), p = u.render(u.props, u.state, u.context), I = 0; I < u._sb.length; I++) u.__h.push(u._sb[I]);
      u._sb = [];
    } else do
      u.__d = !1, v && v(t), p = u.render(u.props, u.state, u.context), u.state = u.__s;
    while (u.__d && ++k < 25);
    u.state = u.__s, u.getChildContext != null && (n = ce(ce({}, n), u.getChildContext())), b && !f && u.getSnapshotBeforeUpdate != null && (C = u.getSnapshotBeforeUpdate(h, _)), O = p, p != null && p.type === re && p.key == null && (O = Yn(p.props.children)), c = Wn(e, Je(O) ? O : [O], t, r, n, i, a, s, c, d, l), u.base = t.__e, t.__u &= -161, u.__h.length && s.push(u), S && (u.__E = u.__ = null);
  } catch (F) {
    if (t.__v = null, d || a != null) if (F.then) {
      for (t.__u |= d ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
      a[a.indexOf(c)] = null, t.__e = c;
    } else for (W = a.length; W--; ) G1(a[W]);
    else t.__e = r.__e, t.__k = r.__k;
    P.__e(F, t, r);
  }
  else a == null && t.__v == r.__v ? (t.__k = r.__k, t.__e = r.__e) : c = t.__e = oi(r.__e, t, r, n, i, a, s, d, l);
  return (p = P.diffed) && p(t), 128 & t.__u ? void 0 : c;
}
function Kn(e, t, r) {
  for (var n = 0; n < r.length; n++) X1(r[n], r[++n], r[++n]);
  P.__c && P.__c(t, e), e.some(function(i) {
    try {
      e = i.__h, i.__h = [], e.some(function(a) {
        a.call(i);
      });
    } catch (a) {
      P.__e(a, i.__v);
    }
  });
}
function Yn(e) {
  return typeof e != "object" || e == null ? e : Je(e) ? e.map(Yn) : ce({}, e);
}
function oi(e, t, r, n, i, a, s, c, d) {
  var l, p, u, f, h, _, C, S = r.props, A = t.props, b = t.type;
  if (b == "svg" ? i = "http://www.w3.org/2000/svg" : b == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), a != null) {
    for (l = 0; l < a.length; l++) if ((h = a[l]) && "setAttribute" in h == !!b && (b ? h.localName == b : h.nodeType == 3)) {
      e = h, a[l] = null;
      break;
    }
  }
  if (e == null) {
    if (b == null) return document.createTextNode(A);
    e = document.createElementNS(i, b, A.is && A), c && (P.__m && P.__m(t, a), c = !1), a = null;
  }
  if (b === null) S === A || c && e.data === A || (e.data = A);
  else {
    if (a = a && Qe.call(e.childNodes), S = r.props || Ke, !c && a != null) for (S = {}, l = 0; l < e.attributes.length; l++) S[(h = e.attributes[l]).name] = h.value;
    for (l in S) if (h = S[l], l != "children") {
      if (l == "dangerouslySetInnerHTML") u = h;
      else if (!(l in A)) {
        if (l == "value" && "defaultValue" in A || l == "checked" && "defaultChecked" in A) continue;
        ct(e, l, null, h, i);
      }
    }
    for (l in A) h = A[l], l == "children" ? f = h : l == "dangerouslySetInnerHTML" ? p = h : l == "value" ? _ = h : l == "checked" ? C = h : c && typeof h != "function" || S[l] === h || ct(e, l, h, S[l], i);
    if (p) c || u && (p.__html === u.__html || p.__html === e.innerHTML) || (e.innerHTML = p.__html), t.__k = [];
    else if (u && (e.innerHTML = ""), Wn(t.type === "template" ? e.content : e, Je(f) ? f : [f], t, r, n, b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, a, s, a ? a[0] : r.__k && Ne(r, 0), c, d), a != null) for (l = a.length; l--; ) G1(a[l]);
    c || (l = "value", b == "progress" && _ == null ? e.removeAttribute("value") : _ !== void 0 && (_ !== e[l] || b == "progress" && !_ || b == "option" && _ !== S[l]) && ct(e, l, _, S[l], i), l = "checked", C !== void 0 && C !== e[l] && ct(e, l, C, S[l], i));
  }
  return e;
}
function X1(e, t, r) {
  try {
    if (typeof e == "function") {
      var n = typeof e.__u == "function";
      n && e.__u(), n && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (i) {
    P.__e(i, r);
  }
}
function Qn(e, t, r) {
  var n, i;
  if (P.unmount && P.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || X1(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (a) {
      P.__e(a, t);
    }
    n.base = n.__P = null;
  }
  if (n = e.__k) for (i = 0; i < n.length; i++) n[i] && Qn(n[i], t, r || typeof e.type != "function");
  r || G1(e.__e), e.__c = e.__ = e.__e = void 0;
}
function ii(e, t, r) {
  return this.constructor(e, r);
}
function ke(e, t, r) {
  var n, i, a, s;
  t == document && (t = document.documentElement), P.__ && P.__(e, t), i = (n = typeof r == "function") ? null : r && r.__k || t.__k, a = [], s = [], W1(t, e = (!n && r || t).__k = he(re, null, [e]), i || Ke, Ke, t.namespaceURI, !n && r ? [r] : i ? null : t.firstChild ? Qe.call(t.childNodes) : null, a, !n && r ? r : i ? i.__e : t.firstChild, n, s), Kn(a, e, s);
}
function Jn(e, t) {
  ke(e, t, Jn);
}
function ai(e, t, r) {
  var n, i, a, s, c = ce({}, e.props);
  for (a in e.type && e.type.defaultProps && (s = e.type.defaultProps), t) a == "key" ? n = t[a] : a == "ref" ? i = t[a] : c[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? Qe.call(arguments, 2) : r), Xe(e.type, c, n || e.key, i || e.ref, null);
}
function si(e) {
  function t(r) {
    var n, i;
    return this.getChildContext || (n = /* @__PURE__ */ new Set(), (i = {})[t.__c] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && n.forEach(function(s) {
        s.__e = !0, O1(s);
      });
    }, this.sub = function(a) {
      n.add(a);
      var s = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        n && n.delete(a), s && s.call(a);
      };
    }), r.children;
  }
  return t.__c = "__cC" + jn++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(r, n) {
    return r.children(n);
  }).contextType = t, t;
}
Qe = Un.slice, P = { __e: function(e, t, r, n) {
  for (var i, a, s; t = t.__; ) if ((i = t.__c) && !i.__) try {
    if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(e)), s = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, n || {}), s = i.__d), s) return i.__E = i;
  } catch (c) {
    e = c;
  }
  throw e;
} }, Dn = 0, de.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ce({}, this.state), typeof e == "function" && (e = e(ce({}, r), this.props)), e && ce(r, e), e != null && this.__v && (t && this._sb.push(t), O1(this));
}, de.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), O1(this));
}, de.prototype.render = re, xe = [], Zn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, qn = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, pt.__r = 0, Vn = /(PointerCapture)$|Capture$/i, U1 = 0, N1 = hr(!1), $1 = hr(!0), jn = 0;
var li = 0;
function o(e, t, r, n, i, a) {
  t || (t = {});
  var s, c, d = t;
  if ("ref" in d) for (c in d = {}, t) c == "ref" ? s = t[c] : d[c] = t[c];
  var l = { type: e, props: d, key: r, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --li, __i: -1, __u: 0, __source: i, __self: a };
  if (typeof e == "function" && (s = e.defaultProps)) for (c in s) d[c] === void 0 && (d[c] = s[c]);
  return P.vnode && P.vnode(l), l;
}
var be, B, _t, gr, $e = 0, eo = [], D = P, vr = D.__b, mr = D.__r, Cr = D.diffed, yr = D.__c, br = D.unmount, _r = D.__;
function ze(e, t) {
  D.__h && D.__h(B, e, $e || t), $e = 0;
  var r = B.__H || (B.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function z(e) {
  return $e = 1, K1(io, e);
}
function K1(e, t, r) {
  var n = ze(be++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : io(void 0, t), function(c) {
    var d = n.__N ? n.__N[0] : n.__[0], l = n.t(d, c);
    d !== l && (n.__N = [l, n.__[1]], n.__c.setState({}));
  }], n.__c = B, !B.__f)) {
    var i = function(c, d, l) {
      if (!n.__c.__H) return !0;
      var p = n.__c.__H.__.filter(function(f) {
        return !!f.__c;
      });
      if (p.every(function(f) {
        return !f.__N;
      })) return !a || a.call(this, c, d, l);
      var u = n.__c.props !== c;
      return p.forEach(function(f) {
        if (f.__N) {
          var h = f.__[0];
          f.__ = f.__N, f.__N = void 0, h !== f.__[0] && (u = !0);
        }
      }), a && a.call(this, c, d, l) || u;
    };
    B.__f = !0;
    var a = B.shouldComponentUpdate, s = B.componentWillUpdate;
    B.componentWillUpdate = function(c, d, l) {
      if (this.__e) {
        var p = a;
        a = void 0, i(c, d, l), a = p;
      }
      s && s.call(this, c, d, l);
    }, B.shouldComponentUpdate = i;
  }
  return n.__N || n.__;
}
function M(e, t) {
  var r = ze(be++, 3);
  !D.__s && Y1(r.__H, t) && (r.__ = e, r.u = t, B.__H.__h.push(r));
}
function et(e, t) {
  var r = ze(be++, 4);
  !D.__s && Y1(r.__H, t) && (r.__ = e, r.u = t, B.__h.push(r));
}
function ie(e) {
  return $e = 5, ft(function() {
    return { current: e };
  }, []);
}
function to(e, t, r) {
  $e = 6, et(function() {
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
  var r = ze(be++, 7);
  return Y1(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__;
}
function ht(e, t) {
  return $e = 8, ft(function() {
    return e;
  }, t);
}
function ro(e) {
  var t = B.context[e.__c], r = ze(be++, 9);
  return r.c = e, t ? (r.__ == null && (r.__ = !0, t.sub(B)), t.props.value) : e.__;
}
function no(e, t) {
  D.useDebugValue && D.useDebugValue(t ? t(e) : e);
}
function oo() {
  var e = ze(be++, 11);
  if (!e.__) {
    for (var t = B.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var r = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + r[0] + "-" + r[1]++;
  }
  return e.__;
}
function ci() {
  for (var e; e = eo.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(dt), e.__H.__h.forEach(z1), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], D.__e(t, e.__v);
  }
}
D.__b = function(e) {
  B = null, vr && vr(e);
}, D.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), _r && _r(e, t);
}, D.__r = function(e) {
  mr && mr(e), be = 0;
  var t = (B = e.__c).__H;
  t && (_t === B ? (t.__h = [], B.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (t.__h.forEach(dt), t.__h.forEach(z1), t.__h = [], be = 0)), _t = B;
}, D.diffed = function(e) {
  Cr && Cr(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (eo.push(t) !== 1 && gr === D.requestAnimationFrame || ((gr = D.requestAnimationFrame) || di)(ci)), t.__H.__.forEach(function(r) {
    r.u && (r.__H = r.u), r.u = void 0;
  })), _t = B = null;
}, D.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(dt), r.__h = r.__h.filter(function(n) {
        return !n.__ || z1(n);
      });
    } catch (n) {
      t.some(function(i) {
        i.__h && (i.__h = []);
      }), t = [], D.__e(n, r.__v);
    }
  }), yr && yr(e, t);
}, D.unmount = function(e) {
  br && br(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      dt(n);
    } catch (i) {
      t = i;
    }
  }), r.__H = void 0, t && D.__e(t, r.__v));
};
var wr = typeof requestAnimationFrame == "function";
function di(e) {
  var t, r = function() {
    clearTimeout(n), wr && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  wr && (t = requestAnimationFrame(r));
}
function dt(e) {
  var t = B, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), B = t;
}
function z1(e) {
  var t = B;
  e.__c = e.__(), B = t;
}
function Y1(e, t) {
  return !e || e.length !== t.length || t.some(function(r, n) {
    return r !== e[n];
  });
}
function io(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const xr = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (l, p) => {
    const u = typeof l == "function" ? l(t) : l;
    if (!Object.is(u, t)) {
      const f = t;
      t = p ?? (typeof u != "object" || u === null) ? u : Object.assign({}, t, u), r.forEach((h) => h(t, f));
    }
  }, i = () => t, c = { setState: n, getState: i, getInitialState: () => d, subscribe: (l) => (r.add(l), () => r.delete(l)) }, d = t = e(n, i, c);
  return c;
}, ui = (e) => e ? xr(e) : xr;
function ao(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function B1(e, t) {
  for (var r in e) if (r !== "__source" && !(r in t)) return !0;
  for (var n in t) if (n !== "__source" && e[n] !== t[n]) return !0;
  return !1;
}
function so(e, t) {
  var r = t(), n = z({ t: { __: r, u: t } }), i = n[0].t, a = n[1];
  return et(function() {
    i.__ = r, i.u = t, wt(i) && a({ t: i });
  }, [e, r, t]), M(function() {
    return wt(i) && a({ t: i }), e(function() {
      wt(i) && a({ t: i });
    });
  }, [e]), r;
}
function wt(e) {
  var t, r, n = e.u, i = e.__;
  try {
    var a = n();
    return !((t = i) === (r = a) && (t !== 0 || 1 / t == 1 / r) || t != t && r != r);
  } catch {
    return !0;
  }
}
function lo(e) {
  e();
}
function co(e) {
  return e;
}
function uo() {
  return [!1, lo];
}
var po = et;
function F1(e, t) {
  this.props = e, this.context = t;
}
function pi(e, t) {
  function r(i) {
    var a = this.props.ref, s = a == i.ref;
    return !s && a && (a.call ? a(null) : a.current = null), t ? !t(this.props, i) || !s : B1(this.props, i);
  }
  function n(i) {
    return this.shouldComponentUpdate = r, he(e, i);
  }
  return n.displayName = "Memo(" + (e.displayName || e.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n;
}
(F1.prototype = new de()).isPureReactComponent = !0, F1.prototype.shouldComponentUpdate = function(e, t) {
  return B1(this.props, e) || B1(this.state, t);
};
var Ar = P.__b;
P.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Ar && Ar(e);
};
var fi = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function G(e) {
  function t(r) {
    var n = ao({}, r);
    return delete n.ref, e(n, r.ref || null);
  }
  return t.$$typeof = fi, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var kr = function(e, t) {
  return e == null ? null : fe(fe(e).map(t));
}, hi = { map: kr, forEach: kr, count: function(e) {
  return e ? fe(e).length : 0;
}, only: function(e) {
  var t = fe(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: fe }, gi = P.__e;
P.__e = function(e, t, r, n) {
  if (e.then) {
    for (var i, a = t; a = a.__; ) if ((i = a.__c) && i.__c) return t.__e == null && (t.__e = r.__e, t.__k = r.__k), i.__c(e, t);
  }
  gi(e, t, r, n);
};
var Sr = P.unmount;
function fo(e, t, r) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), e.__c.__H = null), (e = ao({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
    return fo(n, t, r);
  })), e;
}
function ho(e, t, r) {
  return e && r && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
    return ho(n, t, r);
  }), e.__c && e.__c.__P === t && (e.__e && r.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = r)), e;
}
function ut() {
  this.__u = 0, this.o = null, this.__b = null;
}
function go(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function vi(e) {
  var t, r, n;
  function i(a) {
    if (t || (t = e()).then(function(s) {
      r = s.default || s;
    }, function(s) {
      n = s;
    }), n) throw n;
    if (!r) throw t;
    return he(r, a);
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function Ge() {
  this.i = null, this.l = null;
}
P.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Sr && Sr(e);
}, (ut.prototype = new de()).__c = function(e, t) {
  var r = t.__c, n = this;
  n.o == null && (n.o = []), n.o.push(r);
  var i = go(n.__v), a = !1, s = function() {
    a || (a = !0, r.__R = null, i ? i(c) : c());
  };
  r.__R = s;
  var c = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var d = n.state.__a;
        n.__v.__k[0] = ho(d, d.__c.__P, d.__c.__O);
      }
      var l;
      for (n.setState({ __a: n.__b = null }); l = n.o.pop(); ) l.forceUpdate();
    }
  };
  n.__u++ || 32 & t.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(s, s);
}, ut.prototype.componentWillUnmount = function() {
  this.o = [];
}, ut.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = fo(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var i = t.__a && he(re, null, e.fallback);
  return i && (i.__u &= -33), [he(re, null, t.__a ? null : e.children), i];
};
var Lr = function(e, t, r) {
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
function Ci(e) {
  var t = this, r = e.h;
  t.componentWillUnmount = function() {
    ke(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== r && t.componentWillUnmount(), t.v || (t.h = r, t.v = { nodeType: 1, parentNode: r, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(n) {
    this.childNodes.push(n), t.h.appendChild(n);
  }, insertBefore: function(n, i) {
    this.childNodes.push(n), t.h.insertBefore(n, i);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.h.removeChild(n);
  } }), ke(he(mi, { context: t.context }, e.__v), t.v);
}
function yi(e, t) {
  var r = he(Ci, { __v: e, h: t });
  return r.containerInfo = t, r;
}
(Ge.prototype = new de()).__a = function(e) {
  var t = this, r = go(t.__v), n = t.l.get(e);
  return n[0]++, function(i) {
    var a = function() {
      t.props.revealOrder ? (n.push(i), Lr(t, e, n)) : i();
    };
    r ? r(a) : a();
  };
}, Ge.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = fe(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var r = t.length; r--; ) this.l.set(t[r], this.i = [1, 0, this.i]);
  return e.children;
}, Ge.prototype.componentDidUpdate = Ge.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, r) {
    Lr(e, r, t);
  });
};
var vo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, bi = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, _i = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, wi = /[A-Z0-9]/g, xi = typeof document < "u", Ai = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function ki(e, t, r) {
  return t.__k == null && (t.textContent = ""), ke(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
function Si(e, t, r) {
  return Jn(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
de.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(de.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Mr = P.event;
function Li() {
}
function Mi() {
  return this.cancelBubble;
}
function Pi() {
  return this.defaultPrevented;
}
P.event = function(e) {
  return Mr && (e = Mr(e)), e.persist = Li, e.isPropagationStopped = Mi, e.isDefaultPrevented = Pi, e.nativeEvent = e;
};
var Q1, Ei = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Pr = P.vnode;
P.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var r = t.props, n = t.type, i = {}, a = n.indexOf("-") === -1;
    for (var s in r) {
      var c = r[s];
      if (!(s === "value" && "defaultValue" in r && c == null || xi && s === "children" && n === "noscript" || s === "class" || s === "className")) {
        var d = s.toLowerCase();
        s === "defaultValue" && "value" in r && r.value == null ? s = "value" : s === "download" && c === !0 ? c = "" : d === "translate" && c === "no" ? c = !1 : d[0] === "o" && d[1] === "n" ? d === "ondoubleclick" ? s = "ondblclick" : d !== "onchange" || n !== "input" && n !== "textarea" || Ai(r.type) ? d === "onfocus" ? s = "onfocusin" : d === "onblur" ? s = "onfocusout" : _i.test(s) && (s = d) : d = s = "oninput" : a && bi.test(s) ? s = s.replace(wi, "-$&").toLowerCase() : c === null && (c = void 0), d === "oninput" && i[s = d] && (s = "oninputCapture"), i[s] = c;
      }
    }
    n == "select" && i.multiple && Array.isArray(i.value) && (i.value = fe(r.children).forEach(function(l) {
      l.props.selected = i.value.indexOf(l.props.value) != -1;
    })), n == "select" && i.defaultValue != null && (i.value = fe(r.children).forEach(function(l) {
      l.props.selected = i.multiple ? i.defaultValue.indexOf(l.props.value) != -1 : i.defaultValue == l.props.value;
    })), r.class && !r.className ? (i.class = r.class, Object.defineProperty(i, "className", Ei)) : (r.className && !r.class || r.class && r.className) && (i.class = i.className = r.className), t.props = i;
  }(e), e.$$typeof = vo, Pr && Pr(e);
};
var Er = P.__r;
P.__r = function(e) {
  Er && Er(e), Q1 = e.__c;
};
var Ir = P.diffed;
P.diffed = function(e) {
  Ir && Ir(e);
  var t = e.props, r = e.__e;
  r != null && e.type === "textarea" && "value" in t && t.value !== r.value && (r.value = t.value == null ? "" : t.value), Q1 = null;
};
var Ii = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return Q1.__n[e.__c].props.value;
}, useCallback: ht, useContext: ro, useDebugValue: no, useDeferredValue: co, useEffect: M, useId: oo, useImperativeHandle: to, useInsertionEffect: po, useLayoutEffect: et, useMemo: ft, useReducer: K1, useRef: ie, useState: z, useSyncExternalStore: so, useTransition: uo } } };
function Ri(e) {
  return he.bind(null, e);
}
function gt(e) {
  return !!e && e.$$typeof === vo;
}
function Ni(e) {
  return gt(e) && e.type === re;
}
function $i(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function Oi(e) {
  return gt(e) ? ai.apply(null, arguments) : e;
}
function zi(e) {
  return !!e.__k && (ke(null, e), !0);
}
function Bi(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var Fi = function(e, t) {
  return e(t);
}, Hi = function(e, t) {
  return e(t);
}, Ti = re, Di = gt, Rr = { useState: z, useId: oo, useReducer: K1, useEffect: M, useLayoutEffect: et, useInsertionEffect: po, useTransition: uo, useDeferredValue: co, useSyncExternalStore: so, startTransition: lo, useRef: ie, useImperativeHandle: to, useMemo: ft, useCallback: ht, useContext: ro, useDebugValue: no, version: "18.3.1", Children: hi, render: ki, hydrate: Si, unmountComponentAtNode: zi, createPortal: yi, createElement: he, createContext: si, createFactory: Ri, cloneElement: Oi, createRef: ti, Fragment: re, isValidElement: gt, isElement: Di, isFragment: Ni, isMemo: $i, findDOMNode: Bi, Component: de, PureComponent: F1, memo: pi, forwardRef: G, flushSync: Hi, unstable_batchedUpdates: Fi, StrictMode: Ti, Suspense: ut, SuspenseList: Ge, lazy: vi, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ii };
const Zi = (e) => e;
function qi(e, t = Zi) {
  const r = Rr.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return Rr.useDebugValue(r), r;
}
const Nr = (e) => {
  const t = ui(e), r = (n) => qi(t, n);
  return Object.assign(r, t), r;
}, Be = (e) => e ? Nr(e) : Nr;
function Vi(e, t) {
  let r;
  try {
    r = e();
  } catch {
    return;
  }
  return {
    getItem: (i) => {
      var a;
      const s = (d) => d === null ? null : JSON.parse(d, void 0), c = (a = r.getItem(i)) != null ? a : null;
      return c instanceof Promise ? c.then(s) : s(c);
    },
    setItem: (i, a) => r.setItem(
      i,
      JSON.stringify(a, void 0)
    ),
    removeItem: (i) => r.removeItem(i)
  };
}
const H1 = (e) => (t) => {
  try {
    const r = e(t);
    return r instanceof Promise ? r : {
      then(n) {
        return H1(n)(r);
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
        return H1(n)(r);
      }
    };
  }
}, ji = (e, t) => (r, n, i) => {
  let a = {
    storage: Vi(() => localStorage),
    partialize: (C) => C,
    version: 0,
    merge: (C, S) => ({
      ...S,
      ...C
    }),
    ...t
  }, s = !1;
  const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  let l = a.storage;
  if (!l)
    return e(
      (...C) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), r(...C);
      },
      n,
      i
    );
  const p = () => {
    const C = a.partialize({ ...n() });
    return l.setItem(a.name, {
      state: C,
      version: a.version
    });
  }, u = i.setState;
  i.setState = (C, S) => {
    u(C, S), p();
  };
  const f = e(
    (...C) => {
      r(...C), p();
    },
    n,
    i
  );
  i.getInitialState = () => f;
  let h;
  const _ = () => {
    var C, S;
    if (!l) return;
    s = !1, c.forEach((b) => {
      var g;
      return b((g = n()) != null ? g : f);
    });
    const A = ((S = a.onRehydrateStorage) == null ? void 0 : S.call(a, (C = n()) != null ? C : f)) || void 0;
    return H1(l.getItem.bind(l))(a.name).then((b) => {
      if (b)
        if (typeof b.version == "number" && b.version !== a.version) {
          if (a.migrate) {
            const g = a.migrate(
              b.state,
              b.version
            );
            return g instanceof Promise ? g.then((m) => [!0, m]) : [!0, g];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, b.state];
      return [!1, void 0];
    }).then((b) => {
      var g;
      const [m, y] = b;
      if (h = a.merge(
        y,
        (g = n()) != null ? g : f
      ), r(h, !0), m)
        return p();
    }).then(() => {
      A == null || A(h, void 0), h = n(), s = !0, d.forEach((b) => b(h));
    }).catch((b) => {
      A == null || A(void 0, b);
    });
  };
  return i.persist = {
    setOptions: (C) => {
      a = {
        ...a,
        ...C
      }, C.storage && (l = C.storage);
    },
    clearStorage: () => {
      l == null || l.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => _(),
    hasHydrated: () => s,
    onHydrate: (C) => (c.add(C), () => {
      c.delete(C);
    }),
    onFinishHydration: (C) => (d.add(C), () => {
      d.delete(C);
    })
  }, a.skipHydration || _(), h || f;
}, mo = ji;
function Ui(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xt, $r;
function Co() {
  if ($r) return xt;
  $r = 1;
  var e = Object.prototype.toString;
  return xt = function(r) {
    var n = e.call(r), i = n === "[object Arguments]";
    return i || (i = n !== "[object Array]" && r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && e.call(r.callee) === "[object Function]"), i;
  }, xt;
}
var At, Or;
function Gi() {
  if (Or) return At;
  Or = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, n = Co(), i = Object.prototype.propertyIsEnumerable, a = !i.call({ toString: null }, "toString"), s = i.call(function() {
    }, "prototype"), c = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], d = function(f) {
      var h = f.constructor;
      return h && h.prototype === f;
    }, l = {
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
          if (!l["$" + f] && t.call(window, f) && window[f] !== null && typeof window[f] == "object")
            try {
              d(window[f]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), u = function(f) {
      if (typeof window > "u" || !p)
        return d(f);
      try {
        return d(f);
      } catch {
        return !1;
      }
    };
    e = function(h) {
      var _ = h !== null && typeof h == "object", C = r.call(h) === "[object Function]", S = n(h), A = _ && r.call(h) === "[object String]", b = [];
      if (!_ && !C && !S)
        throw new TypeError("Object.keys called on a non-object");
      var g = s && C;
      if (A && h.length > 0 && !t.call(h, 0))
        for (var m = 0; m < h.length; ++m)
          b.push(String(m));
      if (S && h.length > 0)
        for (var y = 0; y < h.length; ++y)
          b.push(String(y));
      else
        for (var v in h)
          !(g && v === "prototype") && t.call(h, v) && b.push(String(v));
      if (a)
        for (var k = u(h), I = 0; I < c.length; ++I)
          !(k && c[I] === "constructor") && t.call(h, c[I]) && b.push(c[I]);
      return b;
    };
  }
  return At = e, At;
}
var kt, zr;
function Wi() {
  if (zr) return kt;
  zr = 1;
  var e = Array.prototype.slice, t = Co(), r = Object.keys, n = r ? function(s) {
    return r(s);
  } : Gi(), i = Object.keys;
  return n.shim = function() {
    if (Object.keys) {
      var s = function() {
        var c = Object.keys(arguments);
        return c && c.length === arguments.length;
      }(1, 2);
      s || (Object.keys = function(d) {
        return t(d) ? i(e.call(d)) : i(d);
      });
    } else
      Object.keys = n;
    return Object.keys || n;
  }, kt = n, kt;
}
var St, Br;
function vt() {
  if (Br) return St;
  Br = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return St = e, St;
}
var Lt, Fr;
function yo() {
  return Fr || (Fr = 1, Lt = SyntaxError), Lt;
}
var Mt, Hr;
function tt() {
  return Hr || (Hr = 1, Mt = TypeError), Mt;
}
var Pt, Tr;
function Xi() {
  return Tr || (Tr = 1, Pt = Object.getOwnPropertyDescriptor), Pt;
}
var Et, Dr;
function mt() {
  if (Dr) return Et;
  Dr = 1;
  var e = /* @__PURE__ */ Xi();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Et = e, Et;
}
var It, Zr;
function bo() {
  if (Zr) return It;
  Zr = 1;
  var e = /* @__PURE__ */ vt(), t = /* @__PURE__ */ yo(), r = /* @__PURE__ */ tt(), n = /* @__PURE__ */ mt();
  return It = function(a, s, c) {
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
    var d = arguments.length > 3 ? arguments[3] : null, l = arguments.length > 4 ? arguments[4] : null, p = arguments.length > 5 ? arguments[5] : null, u = arguments.length > 6 ? arguments[6] : !1, f = !!n && n(a, s);
    if (e)
      e(a, s, {
        configurable: p === null && f ? f.configurable : !p,
        enumerable: d === null && f ? f.enumerable : !d,
        value: c,
        writable: l === null && f ? f.writable : !l
      });
    else if (u || !d && !l && !p)
      a[s] = c;
    else
      throw new t("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, It;
}
var Rt, qr;
function _o() {
  if (qr) return Rt;
  qr = 1;
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
  }, Rt = t, Rt;
}
var Nt, Vr;
function wo() {
  if (Vr) return Nt;
  Vr = 1;
  var e = Wi(), t = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", r = Object.prototype.toString, n = Array.prototype.concat, i = /* @__PURE__ */ bo(), a = function(l) {
    return typeof l == "function" && r.call(l) === "[object Function]";
  }, s = /* @__PURE__ */ _o()(), c = function(l, p, u, f) {
    if (p in l) {
      if (f === !0) {
        if (l[p] === u)
          return;
      } else if (!a(f) || !f())
        return;
    }
    s ? i(l, p, u, !0) : i(l, p, u);
  }, d = function(l, p) {
    var u = arguments.length > 2 ? arguments[2] : {}, f = e(p);
    t && (f = n.call(f, Object.getOwnPropertySymbols(p)));
    for (var h = 0; h < f.length; h += 1)
      c(l, f[h], p[f[h]], u[f[h]]);
  };
  return d.supportsDescriptors = !!s, Nt = d, Nt;
}
var $t = { exports: {} }, Ot, jr;
function xo() {
  return jr || (jr = 1, Ot = Object), Ot;
}
var zt, Ur;
function Ki() {
  return Ur || (Ur = 1, zt = Error), zt;
}
var Bt, Gr;
function Yi() {
  return Gr || (Gr = 1, Bt = EvalError), Bt;
}
var Ft, Wr;
function Qi() {
  return Wr || (Wr = 1, Ft = RangeError), Ft;
}
var Ht, Xr;
function Ji() {
  return Xr || (Xr = 1, Ht = ReferenceError), Ht;
}
var Tt, Kr;
function ea() {
  return Kr || (Kr = 1, Tt = URIError), Tt;
}
var Dt, Yr;
function ta() {
  return Yr || (Yr = 1, Dt = Math.abs), Dt;
}
var Zt, Qr;
function ra() {
  return Qr || (Qr = 1, Zt = Math.floor), Zt;
}
var qt, Jr;
function na() {
  return Jr || (Jr = 1, qt = Math.max), qt;
}
var Vt, en;
function oa() {
  return en || (en = 1, Vt = Math.min), Vt;
}
var jt, tn;
function ia() {
  return tn || (tn = 1, jt = Math.pow), jt;
}
var Ut, rn;
function aa() {
  return rn || (rn = 1, Ut = Math.round), Ut;
}
var Gt, nn;
function sa() {
  return nn || (nn = 1, Gt = Number.isNaN || function(t) {
    return t !== t;
  }), Gt;
}
var Wt, on;
function la() {
  if (on) return Wt;
  on = 1;
  var e = /* @__PURE__ */ sa();
  return Wt = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, Wt;
}
var Xt, an;
function ca() {
  return an || (an = 1, Xt = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var i = 42;
    t[r] = i;
    for (var a in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var s = Object.getOwnPropertySymbols(t);
    if (s.length !== 1 || s[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var c = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (c.value !== i || c.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Xt;
}
var Kt, sn;
function da() {
  if (sn) return Kt;
  sn = 1;
  var e = typeof Symbol < "u" && Symbol, t = ca();
  return Kt = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Kt;
}
var Yt, ln;
function Ao() {
  return ln || (ln = 1, Yt = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Yt;
}
var Qt, cn;
function ko() {
  if (cn) return Qt;
  cn = 1;
  var e = /* @__PURE__ */ xo();
  return Qt = e.getPrototypeOf || null, Qt;
}
var Jt, dn;
function ua() {
  if (dn) return Jt;
  dn = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", i = function(d, l) {
    for (var p = [], u = 0; u < d.length; u += 1)
      p[u] = d[u];
    for (var f = 0; f < l.length; f += 1)
      p[f + d.length] = l[f];
    return p;
  }, a = function(d, l) {
    for (var p = [], u = l, f = 0; u < d.length; u += 1, f += 1)
      p[f] = d[u];
    return p;
  }, s = function(c, d) {
    for (var l = "", p = 0; p < c.length; p += 1)
      l += c[p], p + 1 < c.length && (l += d);
    return l;
  };
  return Jt = function(d) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== n)
      throw new TypeError(e + l);
    for (var p = a(arguments, 1), u, f = function() {
      if (this instanceof u) {
        var A = l.apply(
          this,
          i(p, arguments)
        );
        return Object(A) === A ? A : this;
      }
      return l.apply(
        d,
        i(p, arguments)
      );
    }, h = r(0, l.length - p.length), _ = [], C = 0; C < h; C++)
      _[C] = "$" + C;
    if (u = Function("binder", "return function (" + s(_, ",") + "){ return binder.apply(this,arguments); }")(f), l.prototype) {
      var S = function() {
      };
      S.prototype = l.prototype, u.prototype = new S(), S.prototype = null;
    }
    return u;
  }, Jt;
}
var e1, un;
function rt() {
  if (un) return e1;
  un = 1;
  var e = ua();
  return e1 = Function.prototype.bind || e, e1;
}
var t1, pn;
function J1() {
  return pn || (pn = 1, t1 = Function.prototype.call), t1;
}
var r1, fn;
function er() {
  return fn || (fn = 1, r1 = Function.prototype.apply), r1;
}
var n1, hn;
function pa() {
  return hn || (hn = 1, n1 = typeof Reflect < "u" && Reflect && Reflect.apply), n1;
}
var o1, gn;
function So() {
  if (gn) return o1;
  gn = 1;
  var e = rt(), t = er(), r = J1(), n = pa();
  return o1 = n || e.call(r, t), o1;
}
var i1, vn;
function tr() {
  if (vn) return i1;
  vn = 1;
  var e = rt(), t = /* @__PURE__ */ tt(), r = J1(), n = So();
  return i1 = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new t("a function is required");
    return n(e, r, a);
  }, i1;
}
var a1, mn;
function fa() {
  if (mn) return a1;
  mn = 1;
  var e = tr(), t = /* @__PURE__ */ mt(), r;
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
  ), i = Object, a = i.getPrototypeOf;
  return a1 = n && typeof n.get == "function" ? e([n.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(c) {
      return a(c == null ? c : i(c));
    }
  ) : !1, a1;
}
var s1, Cn;
function ha() {
  if (Cn) return s1;
  Cn = 1;
  var e = Ao(), t = ko(), r = /* @__PURE__ */ fa();
  return s1 = e ? function(i) {
    return e(i);
  } : t ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return t(i);
  } : r ? function(i) {
    return r(i);
  } : null, s1;
}
var l1, yn;
function Lo() {
  if (yn) return l1;
  yn = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = rt();
  return l1 = r.call(e, t), l1;
}
var c1, bn;
function Mo() {
  if (bn) return c1;
  bn = 1;
  var e, t = /* @__PURE__ */ xo(), r = /* @__PURE__ */ Ki(), n = /* @__PURE__ */ Yi(), i = /* @__PURE__ */ Qi(), a = /* @__PURE__ */ Ji(), s = /* @__PURE__ */ yo(), c = /* @__PURE__ */ tt(), d = /* @__PURE__ */ ea(), l = /* @__PURE__ */ ta(), p = /* @__PURE__ */ ra(), u = /* @__PURE__ */ na(), f = /* @__PURE__ */ oa(), h = /* @__PURE__ */ ia(), _ = /* @__PURE__ */ aa(), C = /* @__PURE__ */ la(), S = Function, A = function(se) {
    try {
      return S('"use strict"; return (' + se + ").constructor;")();
    } catch {
    }
  }, b = /* @__PURE__ */ mt(), g = /* @__PURE__ */ vt(), m = function() {
    throw new c();
  }, y = b ? function() {
    try {
      return arguments.callee, m;
    } catch {
      try {
        return b(arguments, "callee").get;
      } catch {
        return m;
      }
    }
  }() : m, v = da()(), k = ha(), I = ko(), O = Ao(), W = er(), H = J1(), F = {}, ne = typeof Uint8Array > "u" || !k ? e : k(Uint8Array), V = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": v && k ? k([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": F,
    "%AsyncGenerator%": F,
    "%AsyncGeneratorFunction%": F,
    "%AsyncIteratorPrototype%": F,
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
    "%GeneratorFunction%": F,
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
    "%Object.getOwnPropertyDescriptor%": b,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": i,
    "%ReferenceError%": a,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !v || !k ? e : k((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": v && k ? k(""[Symbol.iterator]()) : e,
    "%Symbol%": v ? Symbol : e,
    "%SyntaxError%": s,
    "%ThrowTypeError%": y,
    "%TypedArray%": ne,
    "%TypeError%": c,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": d,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": H,
    "%Function.prototype.apply%": W,
    "%Object.defineProperty%": g,
    "%Object.getPrototypeOf%": I,
    "%Math.abs%": l,
    "%Math.floor%": p,
    "%Math.max%": u,
    "%Math.min%": f,
    "%Math.pow%": h,
    "%Math.round%": _,
    "%Math.sign%": C,
    "%Reflect.getPrototypeOf%": O
  };
  if (k)
    try {
      null.error;
    } catch (se) {
      var ae = k(k(se));
      V["%Error.prototype%"] = ae;
    }
  var N = function se(q) {
    var X;
    if (q === "%AsyncFunction%")
      X = A("async function () {}");
    else if (q === "%GeneratorFunction%")
      X = A("function* () {}");
    else if (q === "%AsyncGeneratorFunction%")
      X = A("async function* () {}");
    else if (q === "%AsyncGenerator%") {
      var j = se("%AsyncGeneratorFunction%");
      j && (X = j.prototype);
    } else if (q === "%AsyncIteratorPrototype%") {
      var ee = se("%AsyncGenerator%");
      ee && k && (X = k(ee.prototype));
    }
    return V[q] = X, X;
  }, me = {
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
  }, T = rt(), Z = /* @__PURE__ */ Lo(), Se = T.call(H, Array.prototype.concat), nt = T.call(W, Array.prototype.splice), Te = T.call(H, String.prototype.replace), _e = T.call(H, String.prototype.slice), Le = T.call(H, RegExp.prototype.exec), Me = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, De = /\\(\\)?/g, Pe = function(q) {
    var X = _e(q, 0, 1), j = _e(q, -1);
    if (X === "%" && j !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (j === "%" && X !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var ee = [];
    return Te(q, Me, function(le, Ee, oe, ot) {
      ee[ee.length] = oe ? Te(ot, De, "$1") : Ee || le;
    }), ee;
  }, Jo = function(q, X) {
    var j = q, ee;
    if (Z(me, j) && (ee = me[j], j = "%" + ee[0] + "%"), Z(V, j)) {
      var le = V[j];
      if (le === F && (le = N(j)), typeof le > "u" && !X)
        throw new c("intrinsic " + q + " exists, but is not available. Please file an issue!");
      return {
        alias: ee,
        name: j,
        value: le
      };
    }
    throw new s("intrinsic " + q + " does not exist!");
  };
  return c1 = function(q, X) {
    if (typeof q != "string" || q.length === 0)
      throw new c("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof X != "boolean")
      throw new c('"allowMissing" argument must be a boolean');
    if (Le(/^%?[^%]*%?$/, q) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var j = Pe(q), ee = j.length > 0 ? j[0] : "", le = Jo("%" + ee + "%", X), Ee = le.name, oe = le.value, ot = !1, bt = le.alias;
    bt && (ee = bt[0], nt(j, Se([0, 1], bt)));
    for (var it = 1, Ze = !0; it < j.length; it += 1) {
      var ue = j[it], at = _e(ue, 0, 1), st = _e(ue, -1);
      if ((at === '"' || at === "'" || at === "`" || st === '"' || st === "'" || st === "`") && at !== st)
        throw new s("property names with quotes must have matching quotes");
      if ((ue === "constructor" || !Ze) && (ot = !0), ee += "." + ue, Ee = "%" + ee + "%", Z(V, Ee))
        oe = V[Ee];
      else if (oe != null) {
        if (!(ue in oe)) {
          if (!X)
            throw new c("base intrinsic for " + q + " exists, but the property is not available.");
          return;
        }
        if (b && it + 1 >= j.length) {
          var lt = b(oe, ue);
          Ze = !!lt, Ze && "get" in lt && !("originalValue" in lt.get) ? oe = lt.get : oe = oe[ue];
        } else
          Ze = Z(oe, ue), oe = oe[ue];
        Ze && !ot && (V[Ee] = oe);
      }
    }
    return oe;
  }, c1;
}
var d1, _n;
function ga() {
  if (_n) return d1;
  _n = 1;
  var e = /* @__PURE__ */ Mo(), t = /* @__PURE__ */ bo(), r = /* @__PURE__ */ _o()(), n = /* @__PURE__ */ mt(), i = /* @__PURE__ */ tt(), a = e("%Math.floor%");
  return d1 = function(c, d) {
    if (typeof c != "function")
      throw new i("`fn` is not a function");
    if (typeof d != "number" || d < 0 || d > 4294967295 || a(d) !== d)
      throw new i("`length` must be a positive 32-bit integer");
    var l = arguments.length > 2 && !!arguments[2], p = !0, u = !0;
    if ("length" in c && n) {
      var f = n(c, "length");
      f && !f.configurable && (p = !1), f && !f.writable && (u = !1);
    }
    return (p || u || !l) && (r ? t(
      /** @type {Parameters<define>[0]} */
      c,
      "length",
      d,
      !0,
      !0
    ) : t(
      /** @type {Parameters<define>[0]} */
      c,
      "length",
      d
    )), c;
  }, d1;
}
var u1, wn;
function va() {
  if (wn) return u1;
  wn = 1;
  var e = rt(), t = er(), r = So();
  return u1 = function() {
    return r(e, t, arguments);
  }, u1;
}
var xn;
function ma() {
  return xn || (xn = 1, function(e) {
    var t = /* @__PURE__ */ ga(), r = /* @__PURE__ */ vt(), n = tr(), i = va();
    e.exports = function(s) {
      var c = n(arguments), d = s.length - (arguments.length - 1);
      return t(
        c,
        1 + (d > 0 ? d : 0),
        !0
      );
    }, r ? r(e.exports, "apply", { value: i }) : e.exports.apply = i;
  }($t)), $t.exports;
}
var p1, An;
function Ca() {
  if (An) return p1;
  An = 1;
  var e = /* @__PURE__ */ tt();
  return p1 = function(r) {
    if (r == null)
      throw new e(arguments.length > 0 && arguments[1] || "Cannot call method on " + r);
    return r;
  }, p1;
}
var f1, kn;
function ya() {
  if (kn) return f1;
  kn = 1;
  var e = /* @__PURE__ */ Mo(), t = tr(), r = t([e("%String.prototype.indexOf%")]);
  return f1 = function(i, a) {
    var s = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(i, !!a)
    );
    return typeof s == "function" && r(i, ".prototype.") > -1 ? t(
      /** @type {const} */
      [s]
    ) : s;
  }, f1;
}
var h1, Sn;
function Po() {
  if (Sn) return h1;
  Sn = 1;
  var e = /* @__PURE__ */ Ca(), t = /* @__PURE__ */ ya(), r = t("Object.prototype.propertyIsEnumerable"), n = t("Array.prototype.push");
  return h1 = function(a) {
    var s = e(a), c = [];
    for (var d in s)
      r(s, d) && n(c, [d, s[d]]);
    return c;
  }, h1;
}
var g1, Ln;
function Eo() {
  if (Ln) return g1;
  Ln = 1;
  var e = Po();
  return g1 = function() {
    return typeof Object.entries == "function" ? Object.entries : e;
  }, g1;
}
var v1, Mn;
function ba() {
  if (Mn) return v1;
  Mn = 1;
  var e = Eo(), t = wo();
  return v1 = function() {
    var n = e();
    return t(Object, { entries: n }, {
      entries: function() {
        return Object.entries !== n;
      }
    }), n;
  }, v1;
}
var m1, Pn;
function _a() {
  if (Pn) return m1;
  Pn = 1;
  var e = wo(), t = ma(), r = Po(), n = Eo(), i = ba(), a = t(n(), Object);
  return e(a, {
    getPolyfill: n,
    implementation: r,
    shim: i
  }), m1 = a, m1;
}
var C1, En;
function wa() {
  if (En) return C1;
  En = 1;
  var e = {}, t = e.NODE_ENV !== "production", r = function() {
  };
  if (t) {
    var n = function(a, s) {
      var c = arguments.length;
      s = new Array(c > 1 ? c - 1 : 0);
      for (var d = 1; d < c; d++)
        s[d - 1] = arguments[d];
      var l = 0, p = "Warning: " + a.replace(/%s/g, function() {
        return s[l++];
      });
      typeof console < "u" && console.error(p);
      try {
        throw new Error(p);
      } catch {
      }
    };
    r = function(i, a, s) {
      var c = arguments.length;
      s = new Array(c > 2 ? c - 2 : 0);
      for (var d = 2; d < c; d++)
        s[d - 2] = arguments[d];
      if (a === void 0)
        throw new Error(
          "`warning(condition, format, ...args)` requires a warning message argument"
        );
      i || n.apply(null, [a].concat(s));
    };
  }
  return C1 = r, C1;
}
var y1, In;
function xa() {
  if (In) return y1;
  In = 1;
  var e = _a(), t = wa(), r = /* @__PURE__ */ Lo(), n = function(m) {
    t(!1, m);
  }, i = String.prototype.replace, a = String.prototype.split, s = "||||", c = function(g) {
    var m = g % 100, y = m % 10;
    return m !== 11 && y === 1 ? 0 : 2 <= y && y <= 4 && !(m >= 12 && m <= 14) ? 1 : 2;
  }, d = {
    // Mapping from pluralization group plural logic.
    pluralTypes: {
      arabic: function(g) {
        if (g < 3)
          return g;
        var m = g % 100;
        return m >= 3 && m <= 10 ? 3 : m >= 11 ? 4 : 5;
      },
      bosnian_serbian: c,
      chinese: function() {
        return 0;
      },
      croatian: c,
      french: function(g) {
        return g >= 2 ? 1 : 0;
      },
      german: function(g) {
        return g !== 1 ? 1 : 0;
      },
      russian: c,
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
      ukrainian: c
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
  function l(g) {
    for (var m = {}, y = e(g), v = 0; v < y.length; v += 1)
      for (var k = y[v][0], I = y[v][1], O = 0; O < I.length; O += 1)
        m[I[O]] = k;
    return m;
  }
  function p(g, m) {
    var y = l(g.pluralTypeToLanguages);
    return y[m] || y[a.call(m, /-/, 1)[0]] || y.en;
  }
  function u(g, m, y) {
    return g.pluralTypes[m](y);
  }
  function f() {
    var g = {};
    return function(m, y) {
      var v = g[y];
      return v && !m.pluralTypes[v] && (v = null, g[y] = v), v || (v = p(m, y), v && (g[y] = v)), v;
    };
  }
  function h(g) {
    return g.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function _(g) {
    var m = g && g.prefix || "%{", y = g && g.suffix || "}";
    if (m === s || y === s)
      throw new RangeError('"' + s + '" token is reserved for pluralization');
    return new RegExp(h(m) + "(.*?)" + h(y), "g");
  }
  var C = f(), S = /%\{(.*?)\}/g;
  function A(g, m, y, v, k, I) {
    if (typeof g != "string")
      throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
    if (m == null)
      return g;
    var O = g, W = v || S, H = I || i, F = typeof m == "number" ? { smart_count: m } : m;
    if (F.smart_count != null && g) {
      var ne = k || d, V = a.call(g, s), ae = y || "en", N = C(ne, ae), me = u(
        ne,
        N,
        F.smart_count
      );
      O = i.call(V[me] || V[0], /^[^\S]*|[^\S]*$/g, "");
    }
    return O = H.call(O, W, function(T, Z) {
      return !r(F, Z) || F[Z] == null ? T : F[Z];
    }), O;
  }
  function b(g) {
    var m = g || {};
    this.phrases = {}, this.extend(m.phrases || {}), this.currentLocale = m.locale || "en";
    var y = m.allowMissing ? A : null;
    this.onMissingKey = typeof m.onMissingKey == "function" ? m.onMissingKey : y, this.warn = m.warn || n, this.replaceImplementation = m.replace || i, this.tokenRegex = _(m.interpolation), this.pluralRules = m.pluralRules || d;
  }
  return b.prototype.locale = function(g) {
    return g && (this.currentLocale = g), this.currentLocale;
  }, b.prototype.extend = function(g, m) {
    for (var y = e(g || {}), v = 0; v < y.length; v += 1) {
      var k = y[v][0], I = y[v][1], O = m ? m + "." + k : k;
      typeof I == "object" ? this.extend(I, O) : this.phrases[O] = I;
    }
  }, b.prototype.unset = function(g, m) {
    if (typeof g == "string")
      delete this.phrases[g];
    else
      for (var y = e(g || {}), v = 0; v < y.length; v += 1) {
        var k = y[v][0], I = y[v][1], O = m ? m + "." + k : k;
        typeof I == "object" ? this.unset(I, O) : delete this.phrases[O];
      }
  }, b.prototype.clear = function() {
    this.phrases = {};
  }, b.prototype.replace = function(g) {
    this.clear(), this.extend(g);
  }, b.prototype.t = function(g, m) {
    var y, v, k = m ?? {};
    if (typeof this.phrases[g] == "string")
      y = this.phrases[g];
    else if (typeof k._ == "string")
      y = k._;
    else if (this.onMissingKey) {
      var I = this.onMissingKey;
      v = I(
        g,
        k,
        this.currentLocale,
        this.tokenRegex,
        this.pluralRules,
        this.replaceImplementation
      );
    } else
      this.warn('Missing translation for key: "' + g + '"'), v = g;
    return typeof y == "string" && (v = A(
      y,
      k,
      this.currentLocale,
      this.tokenRegex,
      this.pluralRules,
      this.replaceImplementation
    )), v;
  }, b.prototype.has = function(g) {
    return r(this.phrases, g);
  }, b.transformPhrase = function(m, y, v) {
    return A(m, y, v);
  }, y1 = b, y1;
}
var Aa = xa();
const Rn = /* @__PURE__ */ Ui(Aa), ka = "Selecionar cor", Sa = "Expandir", La = "Colapsar", Ma = "Leitor de Texto ativado", Pa = "Desativar Som", Ea = "Fonte para Dislexia", Ia = "Leitor de Texto", Ra = "Aumentar Fonte", Na = "Espaço entre letras", $a = "Espaço entre linhas", Oa = "Destacar links", za = "Destacar títulos", Ba = "Modo Leitor", Fa = "Pausar animações", Ha = "Ocultar imagens", Ta = "Guia de leitura", Da = "Máscara de leitura", Za = "Cursor grande", qa = "Cor do texto", Va = "Dicionário", ja = "Personalizada", Ua = "Médio", Ga = "Grande", Wa = "Muito grande", Xa = "Desativado", Ka = "Em breve", Ya = "Ativado", Qa = "Tela inteira", Ja = "Normal", e2 = "Claro", t2 = "Escuro", r2 = "Configurações", n2 = "Resetar", o2 = "Alterar idioma", i2 = "Sem suporte", a2 = "O sintetizador de voz não é suportado pelo seu navegador", s2 = "Interagir", l2 = "Accesar link", c2 = "Mover para cima", d2 = "Mover para baixo", u2 = { blind: "Cego", low_vision: "Baixa visão", cognitive: "Cognitivo", dyslexic: "Dislexia", daltonic: "Daltônico", mobility: "Mobilidade" }, p2 = { disable_sound: "Desativar o som de vídeos e audios", dyslexic_font: "Ativar font para dyslexia", "dictionary.search": "Pesquisar no dicionário", definition_to_libras: "Ler definição em Libras", read_definition: "Ler definição", dictionary: "Dicionário simplificado", text_reader: "Ouvir o texto", font_increase: "Aumentar o tamanho da fonte", letter_spacing: "Modificar espaço entre as letras", line_spacing: "Modificar espaço entre linhas", highlight_links: "Destacar links", highlight_titles: "Destacar títulos", reset: "Resetar definições", close: "Fechar", change_language: "Alterar o idioma da ferramenta", reader_mode: "Ativar modo leitor", toggle_theme: "Alterar o tema", pause_animations: "Pausar animações", hide_images: "Esconder todas as imagens", reading_guide: "Ativar o Guia de leitura", reading_mask: "Ativar a Máscara de leitura", move_reading_mask: "Mover a Máscara de leitura", move_reading_guide: "Mover o Guia de leitura", large_cursor: "Ativar o cursor grande", text_color: "Alterar a cor do texto", open_accessibility_profiles: "Abrir ou fechar perfis de acessibilidade", blind: "Definições para pessoas cegas", low_vision: "Definições para pessoas com baixa visão" }, f2 = { reset: "Resetar definições", close: "Fechar", toggle_theme: "Alterar o tema" }, h2 = { text_and_typography: "Texto e Tipografia", reading_and_comprehension: "Leitura e Compreensão", focus_and_visibility: "Foco e Acessibilidade Visual", colors_and_contrast: "Cores e Contraste", distraction_reduction: "Redução de Distrações", accessibility_profiles: "Perfis de Acessibilidade", profiles: "Perfis" }, g2 = "Definição em Libras", v2 = "Ler definição", m2 = {
  color_picker: ka,
  expand: Sa,
  collapse: La,
  text_reader_is_actived: Ma,
  disable_sound: Pa,
  dyslexic_font: Ea,
  text_reader: Ia,
  font_increase: Ra,
  letter_spacing: Na,
  line_spacing: $a,
  highlight_links: Oa,
  highlight_titles: za,
  reader_mode: Ba,
  pause_animations: Fa,
  hide_images: Ha,
  reading_guide: Ta,
  reading_mask: Da,
  large_cursor: Za,
  text_color: qa,
  dictionary: Va,
  custom: ja,
  default: "Padrão",
  medium: Ua,
  large: Ga,
  very_large: Wa,
  deactivated: Xa,
  upcomming: Ka,
  actived: Ya,
  full: Qa,
  normal: Ja,
  light: e2,
  dark: t2,
  settings: r2,
  reset: n2,
  change_language: o2,
  no_support: i2,
  speech_is_not_supported: a2,
  interact: s2,
  access_link: l2,
  move_top: c2,
  move_bottom: d2,
  profiles: u2,
  al: p2,
  titles: f2,
  sections: h2,
  definition_to_libras: g2,
  read_definition: v2,
  "dictionary.select_word": "Selecione uma palavra para ver o significado ou faça uma pesquisa customizada.",
  "dictionary.no_result": "Nenhum resultado encontrado",
  "dictionary.close": "Fechar dicionário",
  "status.loading": "Carregando...",
  "status.searching": "Pesquisando..."
}, C2 = "Color Picker", y2 = "Expand", b2 = "Collapse", _2 = "Text Reader is actived", w2 = "Disable Sound", x2 = "Dyslexic Font", A2 = "Text Reader", k2 = "Increase Font", S2 = "Letter Spacing", L2 = "Line Spacing", M2 = "Highlight Links", P2 = "Highlight Titles", E2 = "Reader Mode", I2 = "Pause Animations", R2 = "Hide images", N2 = "Reading Guide", $2 = "Reading Mask", O2 = "Large Cursor", z2 = "Text Color", B2 = "Dictionary", F2 = "Custom", H2 = "Medium", T2 = "Large", D2 = "Very Large", Z2 = "Deactivated", q2 = "Upcoming", V2 = "Actived", j2 = "Full", U2 = "Normal", G2 = "Light", W2 = "Dark", X2 = "Settings", K2 = "Reset", Y2 = "Change language", Q2 = "No support", J2 = "Speech Synthesis is not supported in this browser", e5 = "Interact", t5 = "Access link", r5 = "Move up", n5 = "Move down", o5 = { blind: "Blind", low_vision: "Low Vision", cognitive: "Cognitive", dyslexic: "Dyslexic", daltonic: "Color Blind", mobility: "Mobility" }, i5 = { disable_sound: "Disable the sound of the videos and audios", dyslexic_font: "Activate font for dyslexic", "dictionary.search": "Search in dictionary", dictionary: "Simplified Dictionary", text_reader: "Read text", font_increase: "Increase font", letter_spacing: "Modify letter spacing", line_spacing: "Modify line spacing", highlight_links: "Highlight links", highlight_titles: "Highlight titles", reset: "Reset definitions", close: "Close", change_language: "Change application language", reader_mode: "Activate reader mode", toggle_theme: "Toggle theme", pause_animations: "Pause animations", hide_images: "Hide all images", reading_guide: "Activate reading guide", reading_mask: "Activate reading mask", move_reading_mask: "Move reading mask", move_reading_guide: "Move reading guide", large_cursor: "Activate large cursor", text_color: "Change text color", open_accessibility_profiles: "Open or close accessibility profiles", blind: "Definitions for blind people", low_vision: "Definitions for low vision people" }, a5 = { reset: "Reset definitions", close: "Close", toggle_theme: "Toggle theme" }, s5 = { text_and_typography: "Text and Typography", reading_and_comprehension: "Reading and Comprehension", focus_and_visibility: "Focus and Visibility", colors_and_contrast: "Colors and Contrast", distraction_reduction: "Distraction Reduction", accessibility_profiles: "Accessibility Profiles", profiles: "Profiles" }, l5 = {
  color_picker: C2,
  expand: y2,
  collapse: b2,
  text_reader_is_actived: _2,
  disable_sound: w2,
  dyslexic_font: x2,
  text_reader: A2,
  font_increase: k2,
  letter_spacing: S2,
  line_spacing: L2,
  highlight_links: M2,
  highlight_titles: P2,
  reader_mode: E2,
  pause_animations: I2,
  hide_images: R2,
  reading_guide: N2,
  reading_mask: $2,
  large_cursor: O2,
  text_color: z2,
  dictionary: B2,
  custom: F2,
  default: "Default",
  medium: H2,
  large: T2,
  very_large: D2,
  deactivated: Z2,
  upcoming: q2,
  actived: V2,
  full: j2,
  normal: U2,
  light: G2,
  dark: W2,
  settings: X2,
  reset: K2,
  change_language: Y2,
  no_support: Q2,
  speech_is_not_supported: J2,
  interact: e5,
  access_link: t5,
  move_top: r5,
  move_bottom: n5,
  profiles: o5,
  al: i5,
  titles: a5,
  sections: s5,
  "dictionary.select_word": "Select a word to see its meaning or perform a custom search.",
  "dictionary.no_result": "No result",
  "dictionary.close": "Close dictionary",
  "status.loading": "Loading...",
  "status.searching": "Searching..."
}, c5 = "Seleccionar color", d5 = "Expandir", u5 = "Colapsar", p5 = "Leitor de texto ativado", f5 = "Desactivar sonido", h5 = "Fonte para dyslexia", g5 = "Leer texto", v5 = "Aumentar fuente", m5 = "Espaciado entre letras", C5 = "Espaciado entre líneas", y5 = "Resaltar enlaces", b5 = "Resaltar títulos", _5 = "Modo lector", w5 = "Pausar animaciones", x5 = "Ocultar imágenes", A5 = "Guía de lectura", k5 = "Máscara de lectura", S5 = "Cursor grande", L5 = "Color del texto", M5 = "Diccionario", P5 = "Personalizada", E5 = "Mediano", I5 = "Grande", R5 = "Muy grande", N5 = "Desactivado", $5 = "Proximamente", O5 = "Activado", z5 = "Pantalla completa", B5 = "Normal", F5 = "Claro", H5 = "Oscuro", T5 = "Configuraciones", D5 = "Restablecer", Z5 = "Cambiar idioma", q5 = "Sin soporte", V5 = "El sintetizador de voz no es compatible con su navegador", j5 = "Interactuar", U5 = "Acceder enlace", G5 = "Mover hacia arriba", W5 = "Mover hacia abajo", X5 = { blind: "Ciego", low_vision: "Baja visión", cognitive: "Cognitivo", dyslexic: "Disléxico", daltonic: "Daltónico", mobility: "Movilidad" }, K5 = { disable_sound: "Desactivar sonido de vídeos y audios", dyslexic_font: "Activar fuente para dislexia", "dictionary.search": "Buscar en diccionario", dictionary: "Diccionario simplificado", text_reader: "Leer el texto", font_increase: "Aumentar el tamaño de la fuente", letter_spacing: "Modificar el espaciado entre letras", line_spacing: "Modificar el espaciado entre líneas", highlight_links: "Resaltar enlaces", highlight_titles: "Resaltar títulos", reset: "Restablecer configuraciones", close: "Cerrar", change_language: "Cambiar el idioma de la herramienta", reader_mode: "Activar modo lector", toggle_theme: "Cambiar el tema", pause_animations: "Pausar animaciones", hide_images: "Ocultar todas las imágenes", reading_guide: "Activar la guía de lectura", reading_mask: "Activar la máscara de lectura", move_reading_mask: "Mover la máscara de lectura", move_reading_guide: "Mover la guía de lectura", large_cursor: "Activar el cursor grande", text_color: "Cambiar el color del texto", open_accessibility_profiles: "Abrir o cerrar perfiles de accesibilidad", blind: "Configuraciones para personas ciegas", low_vision: "Configuraciones para personas con baja visión" }, Y5 = { reset: "Restablecer configuraciones", close: "Cerrar", toggle_theme: "Cambiar el tema" }, Q5 = { text_and_typography: "Texto y tipografía", reading_and_comprehension: "Lectura y comprensión", focus_and_visibility: "Enfoque y accesibilidad visual", colors_and_contrast: "Colores y contraste", distraction_reduction: "Reducción de distracciones", accessibility_profiles: "Perfiles de accesibilidad", profiles: "Perfiles" }, J5 = {
  color_picker: c5,
  expand: d5,
  collapse: u5,
  text_reader_is_actived: p5,
  disable_sound: f5,
  dyslexic_font: h5,
  text_reader: g5,
  font_increase: v5,
  letter_spacing: m5,
  line_spacing: C5,
  highlight_links: y5,
  highlight_titles: b5,
  reader_mode: _5,
  pause_animations: w5,
  hide_images: x5,
  reading_guide: A5,
  reading_mask: k5,
  large_cursor: S5,
  text_color: L5,
  dictionary: M5,
  custom: P5,
  default: "Predeterminada",
  medium: E5,
  large: I5,
  very_large: R5,
  deactivated: N5,
  upcoming: $5,
  actived: O5,
  full: z5,
  normal: B5,
  light: F5,
  dark: H5,
  settings: T5,
  reset: D5,
  change_language: Z5,
  no_support: q5,
  speech_is_not_supported: V5,
  interact: j5,
  access_link: U5,
  move_top: G5,
  move_bottom: W5,
  profiles: X5,
  al: K5,
  titles: Y5,
  sections: Q5,
  "dictionary.select_word": "Selecciona una palabra para ver su significado o haz una búsqueda personalizada",
  "dictionary.no_result": "Sin resultado",
  "dictionary.close": "Cerrar diccionario",
  "status.loading": "Cargando...",
  "status.searching": "Pesquisando..."
}, Nn = { pt: m2, en: l5, es: J5 }, $ = Be()(
  mo(
    (e, t) => ({
      locale: "pt",
      polyglot: new Rn({ locale: "pt", phrases: Nn.pt }),
      setLocale: (r) => e(() => ({ locale: r, polyglot: new Rn({ locale: r, phrases: Nn[r] }) })),
      t: (r, n) => t().polyglot.t(r, n)
    }),
    {
      name: "@vlibras-widget-plus.locale",
      partialize: (e) => ({ locale: e.locale }),
      version: 1
    }
  )
), Io = (e, t) => $.getState().t(e, t), rr = () => {
  const [e, t] = z(!1);
  return M(() => {
    const r = () => {
      t(window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(hover: none)").matches);
    };
    return r(), window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), e;
}, Ro = () => {
  const [e, t] = z({ x: 0, y: 0 });
  return M(() => {
    const r = (n) => {
      t({ x: n.clientX, y: n.clientY });
    };
    return window.addEventListener("mousemove", r), () => window.removeEventListener("mousemove", r);
  }, []), e;
}, No = () => {
  const [e, t] = z({
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
}, es = (e) => {
  const [t, r] = z(!1);
  return M(() => {
    function n(a) {
      r(a.matches);
    }
    const i = matchMedia(e);
    return i.addEventListener("change", n), r(i.matches), () => i.removeEventListener("change", n);
  }, [e]), t;
}, b1 = "@vwp-theme", ts = (e) => ["light", "dark"].includes(e), $o = Be((e) => ({
  theme: (() => {
    const t = localStorage.getItem(b1) || "";
    return ts(t) ? t : "light";
  })(),
  toggleTheme: () => e((t) => {
    const r = t.theme === "dark" ? "light" : "dark";
    return localStorage.setItem(b1, r), { theme: r };
  }),
  setTheme: (t) => {
    localStorage.setItem(b1, t), e({ theme: t });
  }
})), nr = () => {
  const [e, t] = z(""), [r, n] = z("");
  return M(() => {
    var i;
    e || t("0.2.0-alpha.6"), r || n(((i = window == null ? void 0 : window.VLibrasWidgetPlus) == null ? void 0 : i.path) ?? "./");
  }, [e, r]), { version: e, path: r };
}, rs = (e, t = []) => {
  const [r, n] = z(null), [i, a] = z(null), [s, c] = z(!0);
  return M(() => {
    let d = !0;
    return c(!0), a(null), n(null), e().then((l) => {
      d && (n(l), c(!1));
    }).catch((l) => {
      d && (a(l), c(!1));
    }), () => {
      d = !1;
    };
  }, [e, ...t]), { data: r, error: i, isLoading: s };
};
function Oo(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Oo(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ns() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Oo(e)) && (n && (n += " "), n += t);
  return n;
}
const or = "-", os = (e) => {
  const t = as(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const c = s.split(or);
      return c[0] === "" && c.length !== 1 && c.shift(), zo(c, t) || is(s);
    },
    getConflictingClassGroupIds: (s, c) => {
      const d = r[s] || [];
      return c && n[s] ? [...d, ...n[s]] : d;
    }
  };
}, zo = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), i = n ? zo(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const a = e.join(or);
  return (s = t.validators.find(({
    validator: c
  }) => c(a))) == null ? void 0 : s.classGroupId;
}, $n = /^\[(.+)\]$/, is = (e) => {
  if ($n.test(e)) {
    const t = $n.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, as = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const i in r)
    T1(r[i], n, i, t);
  return n;
}, T1 = (e, t, r, n) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const a = i === "" ? t : On(t, i);
      a.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (ss(i)) {
        T1(i(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([a, s]) => {
      T1(s, On(t, a), r, n);
    });
  });
}, On = (e, t) => {
  let r = e;
  return t.split(or).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, ss = (e) => e.isThemeGetter, ls = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const i = (a, s) => {
    r.set(a, s), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = r.get(a);
      if (s !== void 0)
        return s;
      if ((s = n.get(a)) !== void 0)
        return i(a, s), s;
    },
    set(a, s) {
      r.has(a) ? r.set(a, s) : i(a, s);
    }
  };
}, D1 = "!", Z1 = ":", cs = Z1.length, ds = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (i) => {
    const a = [];
    let s = 0, c = 0, d = 0, l;
    for (let _ = 0; _ < i.length; _++) {
      let C = i[_];
      if (s === 0 && c === 0) {
        if (C === Z1) {
          a.push(i.slice(d, _)), d = _ + cs;
          continue;
        }
        if (C === "/") {
          l = _;
          continue;
        }
      }
      C === "[" ? s++ : C === "]" ? s-- : C === "(" ? c++ : C === ")" && c--;
    }
    const p = a.length === 0 ? i : i.substring(d), u = us(p), f = u !== p, h = l && l > d ? l - d : void 0;
    return {
      modifiers: a,
      hasImportantModifier: f,
      baseClassName: u,
      maybePostfixModifierPosition: h
    };
  };
  if (t) {
    const i = t + Z1, a = n;
    n = (s) => s.startsWith(i) ? a(s.substring(i.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const i = n;
    n = (a) => r({
      className: a,
      parseClassName: i
    });
  }
  return n;
}, us = (e) => e.endsWith(D1) ? e.substring(0, e.length - 1) : e.startsWith(D1) ? e.substring(1) : e, ps = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const i = [];
    let a = [];
    return n.forEach((s) => {
      s[0] === "[" || t[s] ? (i.push(...a.sort(), s), a = []) : a.push(s);
    }), i.push(...a.sort()), i;
  };
}, fs = (e) => ({
  cache: ls(e.cacheSize),
  parseClassName: ds(e),
  sortModifiers: ps(e),
  ...os(e)
}), hs = /\s+/, gs = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i,
    sortModifiers: a
  } = t, s = [], c = e.trim().split(hs);
  let d = "";
  for (let l = c.length - 1; l >= 0; l -= 1) {
    const p = c[l], {
      isExternal: u,
      modifiers: f,
      hasImportantModifier: h,
      baseClassName: _,
      maybePostfixModifierPosition: C
    } = r(p);
    if (u) {
      d = p + (d.length > 0 ? " " + d : d);
      continue;
    }
    let S = !!C, A = n(S ? _.substring(0, C) : _);
    if (!A) {
      if (!S) {
        d = p + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (A = n(_), !A) {
        d = p + (d.length > 0 ? " " + d : d);
        continue;
      }
      S = !1;
    }
    const b = a(f).join(":"), g = h ? b + D1 : b, m = g + A;
    if (s.includes(m))
      continue;
    s.push(m);
    const y = i(A, S);
    for (let v = 0; v < y.length; ++v) {
      const k = y[v];
      s.push(g + k);
    }
    d = p + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function vs() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Bo(t)) && (n && (n += " "), n += r);
  return n;
}
const Bo = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Bo(e[n])) && (r && (r += " "), r += t);
  return r;
};
function ms(e, ...t) {
  let r, n, i, a = s;
  function s(d) {
    const l = t.reduce((p, u) => u(p), e());
    return r = fs(l), n = r.cache.get, i = r.cache.set, a = c, c(d);
  }
  function c(d) {
    const l = n(d);
    if (l)
      return l;
    const p = gs(d, r);
    return i(d, p), p;
  }
  return function() {
    return a(vs.apply(null, arguments));
  };
}
const U = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Fo = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ho = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Cs = /^\d+\/\d+$/, ys = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, bs = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, _s = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ws = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, xs = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ie = (e) => Cs.test(e), E = (e) => !!e && !Number.isNaN(Number(e)), Ce = (e) => !!e && Number.isInteger(Number(e)), zn = (e) => e.endsWith("%") && E(e.slice(0, -1)), ye = (e) => ys.test(e), As = () => !0, ks = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  bs.test(e) && !_s.test(e)
), ir = () => !1, Ss = (e) => ws.test(e), Ls = (e) => xs.test(e), Ms = (e) => !w(e) && !x(e), Ps = (e) => Fe(e, Zo, ir), w = (e) => Fo.test(e), we = (e) => Fe(e, qo, ks), _1 = (e) => Fe(e, Ts, E), Es = (e) => Fe(e, To, ir), Is = (e) => Fe(e, Do, Ls), Rs = (e) => Fe(e, ir, Ss), x = (e) => Ho.test(e), qe = (e) => He(e, qo), Ns = (e) => He(e, Ds), $s = (e) => He(e, To), Os = (e) => He(e, Zo), zs = (e) => He(e, Do), Bs = (e) => He(e, Zs, !0), Fe = (e, t, r) => {
  const n = Fo.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, He = (e, t, r = !1) => {
  const n = Ho.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, To = (e) => e === "position", Fs = /* @__PURE__ */ new Set(["image", "url"]), Do = (e) => Fs.has(e), Hs = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Zo = (e) => Hs.has(e), qo = (e) => e === "length", Ts = (e) => e === "number", Ds = (e) => e === "family-name", Zs = (e) => e === "shadow", qs = () => {
  const e = U("color"), t = U("font"), r = U("text"), n = U("font-weight"), i = U("tracking"), a = U("leading"), s = U("breakpoint"), c = U("container"), d = U("spacing"), l = U("radius"), p = U("shadow"), u = U("inset-shadow"), f = U("drop-shadow"), h = U("blur"), _ = U("perspective"), C = U("aspect"), S = U("ease"), A = U("animate"), b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], g = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], m = () => ["auto", "hidden", "clip", "visible", "scroll"], y = () => ["auto", "contain", "none"], v = () => [x, w, d], k = () => [Ie, "full", "auto", ...v()], I = () => [Ce, "none", "subgrid", x, w], O = () => ["auto", {
    span: ["full", Ce, x, w]
  }, Ce, x, w], W = () => [Ce, "auto", x, w], H = () => ["auto", "min", "max", "fr", x, w], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], ne = () => ["start", "end", "center", "stretch"], V = () => ["auto", ...v()], ae = () => [Ie, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...v()], N = () => [e, x, w], me = () => [zn, qe, we], T = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    x,
    w
  ], Z = () => ["", E, qe, we], Se = () => ["solid", "dashed", "dotted", "double"], nt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    h,
    x,
    w
  ], _e = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", x, w], Le = () => ["none", E, x, w], Me = () => ["none", E, x, w], De = () => [E, x, w], Pe = () => [Ie, "full", ...v()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ye],
      breakpoint: [ye],
      color: [As],
      container: [ye],
      "drop-shadow": [ye],
      ease: ["in", "out", "in-out"],
      font: [Ms],
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
        aspect: ["auto", "square", Ie, w, x, C]
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
        columns: [E, w, x, c]
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
        object: [...g(), w, x]
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
        z: [Ce, "auto", x, w]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ie, "full", "auto", c, ...v()]
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
        flex: [E, Ie, "auto", "initial", "none", w]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", E, x, w]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", E, x, w]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ce, "first", "last", "none", x, w]
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
        col: O()
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
        "grid-rows": I()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: O()
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
        "auto-cols": H()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": H()
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
        justify: [...F(), "normal"]
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
        content: ["normal", ...F()]
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
        "place-content": F()
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
        m: V()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: V()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: V()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: V()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: V()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: V()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: V()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: V()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: V()
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
        size: ae()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [c, "screen", ...ae()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          c,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...ae()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          c,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [s]
          },
          ...ae()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...ae()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...ae()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...ae()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, qe, we]
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
        font: [n, x, _1]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", zn, w]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ns, w, t]
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
        tracking: [i, x, w]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [E, "none", x, _1]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...v()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", x, w]
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
        list: ["disc", "decimal", "none", x, w]
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
        placeholder: N()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: N()
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
        decoration: [E, "from-font", "auto", x, we]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: N()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [E, "auto", x, w]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", x, w]
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
        content: ["none", x, w]
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
        bg: [...g(), $s, Es]
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
        bg: ["auto", "cover", "contain", Os, Ps]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ce, x, w],
          radial: ["", x, w],
          conic: [Ce, x, w]
        }, zs, Is]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: N()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: me()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: me()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: me()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: N()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: N()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: N()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: T()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": T()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": T()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": T()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": T()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": T()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": T()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": T()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": T()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": T()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": T()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": T()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": T()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": T()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": T()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: Z()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Z()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Z()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Z()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Z()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Z()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Z()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Z()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Z()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Z()
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
        "divide-y": Z()
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
        border: N()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": N()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": N()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": N()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": N()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": N()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": N()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": N()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": N()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: N()
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
        "outline-offset": [E, x, w]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", E, qe, we]
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
          Bs,
          Rs
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: N()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", x, w, u]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": N()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: Z()
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
        ring: N()
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
        "ring-offset": N()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": Z()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": N()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [E, x, w]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...nt(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": nt()
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
          x,
          w
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Te()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [E, x, w]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [E, x, w]
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
          x,
          w
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", E, x, w]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [E, x, w]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", E, x, w]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [E, x, w]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", E, x, w]
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
          x,
          w
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Te()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [E, x, w]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [E, x, w]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", E, x, w]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [E, x, w]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", E, x, w]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [E, x, w]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [E, x, w]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", E, x, w]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", x, w]
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
        duration: [E, "initial", x, w]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", S, x, w]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [E, x, w]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", A, x, w]
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
        perspective: [_, x, w]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": _e()
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
        skew: De()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": De()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": De()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [x, w, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: _e()
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
        accent: N()
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
        caret: N()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", x, w]
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
        "will-change": ["auto", "scroll", "contents", "transform", x, w]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...N()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [E, qe, we, _1]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...N()]
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
}, Vs = /* @__PURE__ */ ms(qs);
function R(...e) {
  return Vs(ns(e));
}
const ve = (e) => {
  const t = document.createElement("style");
  return t.innerHTML = e, t;
};
function Vo(e, t) {
  const r = { ...e };
  for (const n of t) delete r[n];
  return r;
}
const js = (e) => e.split(" ").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(" "), Oe = (e, t) => (t || document).querySelector(e), Us = (e, t) => Array.from(document.querySelectorAll(e)), Gs = () => {
  var e;
  return (e = Oe("[vp]")) == null ? void 0 : e.closest("[vw]");
}, ar = {
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
  isActive: !1
}, L = Be()(
  mo(
    (e) => ({
      isOpenWidget: !1,
      isLoaded: !1,
      isActive: !1,
      setIsOpenWidget: (t) => e({ isOpenWidget: t }),
      setIsLoaded: (t) => e({ isLoaded: t }),
      reset: () => e(ar)
    }),
    {
      name: "@vlibras-widget-plus",
      partialize: (e) => Vo(e, ["textReader", "dictionary"]),
      version: 1
    }
  )
);
L.subscribe((e, t) => {
  const n = Object.keys(Vo(ar, ["isActive"])).some((i) => {
    const a = e[i];
    return ["textReader", "textColor", "dictionary"].includes(i) ? a == null ? void 0 : a.isActive : !!a;
  });
  t.profile && (e.profile, t.profile), n !== t.isActive && (e.isActive = n), window.VLibrasWidgetPlus && (window.VLibrasWidgetPlus.isOpen = e.isOpenWidget);
});
const Re = "vwp-app-root", w1 = {}, Ws = () => {
  if (!w1[Re]) {
    let n = document.getElementById(Re);
    n || (n = document.createElement("div"), n.id = Re, document.body.appendChild(n)), w1[Re] = n;
  }
  const e = w1[Re], t = e.shadowRoot || e.attachShadow({ mode: "open" });
  return { root: e, shadowRoot: t, isRootActive: () => e.getAttribute("data-active") === "true" };
}, sr = (e, t) => {
  const n = ["html", "input", "head", "script", "style", "iframe", "meta", "canvas", "noscript"], i = e.tagName.toLowerCase(), a = n.includes(i), s = e.classList.contains("vwp-ignore"), c = e.closest("[vw]");
  return e.id !== Re && !a && !s && !c;
}, Xs = async (e, t) => {
  const r = [
    new FontFace("VLibrasWidget_Font", `url(${e}/assets/fonts/rawline/rawline-500.ttf) format('truetype')`, {
      weight: "500"
    }),
    new FontFace("VLibrasWidget_Font", `url(${e}/assets/fonts/rawline/rawline-500i.ttf) format('truetype')`, {
      weight: "500",
      style: "italic"
    })
  ];
  await lr(r, (n) => {
    t.adoptedStyleSheets = [...t.adoptedStyleSheets, ...n];
  });
}, Ks = async (e) => {
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
  await lr(t, (r) => {
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, ...r];
  });
}, Ys = async (e) => {
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
  await lr(t, (r) => {
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, ...r];
  });
}, lr = async (e, t) => {
  await Promise.all(e.map((r) => r.load())), e.forEach((r) => document.fonts.add(r)), t && t(document.adoptedStyleSheets);
}, x1 = G(({ children: e, disabled: t, variant: r = "default", className: n, ...i }, a) => /* @__PURE__ */ o(
  "button",
  {
    ref: a,
    className: R(
      "cursor-pointer text-foreground flex justify-center items-center gap-x-2",
      "size-9 hover:bg-muted rounded-full",
      "[&>svg]:pointer-events-none [&>svg]:fill-foreground/80 hover:[&>svg]:fill-foreground",
      t && "!pointer-events-none *:!pointer-events-none opacity-50",
      r === "destructive" && "hover:bg-destructive/10 hover:[&>svg]:fill-destructive",
      n
    ),
    type: i.type || "button",
    ...i,
    children: e
  }
)), Qs = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M4.675 15.425L3.65 18.275C3.56667 18.5083 3.43333 18.6875 3.25 18.8125C3.06667 18.9375 2.85833 19 2.625 19C2.24167 19 1.9375 18.8375 1.7125 18.5125C1.4875 18.1875 1.44167 17.8417 1.575 17.475L5.975 5.75C6.05833 5.51667 6.2 5.33333 6.4 5.2C6.6 5.06667 6.81667 5 7.05 5H7.95C8.2 5 8.42083 5.06667 8.6125 5.2C8.80417 5.33333 8.94167 5.51667 9.025 5.75L13.45 17.5C13.5833 17.8667 13.5375 18.2083 13.3125 18.525C13.0875 18.8417 12.7833 19 12.4 19C12.1667 19 11.95 18.9333 11.75 18.8C11.55 18.6667 11.4083 18.4833 11.325 18.25L10.325 15.425H4.675ZM5.4 13.4H9.6L7.55 7.6H7.45L5.4 13.4ZM18 13H16C15.7167 13 15.4792 12.9042 15.2875 12.7125C15.0958 12.5208 15 12.2833 15 12C15 11.7167 15.0958 11.4792 15.2875 11.2875C15.4792 11.0958 15.7167 11 16 11H18V9C18 8.71667 18.0958 8.47917 18.2875 8.2875C18.4792 8.09583 18.7167 8 19 8C19.2833 8 19.5208 8.09583 19.7125 8.2875C19.9042 8.47917 20 8.71667 20 9V11H22C22.2833 11 22.5208 11.0958 22.7125 11.2875C22.9042 11.4792 23 11.7167 23 12C23 12.2833 22.9042 12.5208 22.7125 12.7125C22.5208 12.9042 22.2833 13 22 13H20V15C20 15.2833 19.9042 15.5208 19.7125 15.7125C19.5208 15.9042 19.2833 16 19 16C18.7167 16 18.4792 15.9042 18.2875 15.7125C18.0958 15.5208 18 15.2833 18 15V13Z" })
    ]
  }
), Js = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M2.5875 19.4125C2.97917 19.8042 3.45 20 4 20H20C20.55 20 21.0208 19.8042 21.4125 19.4125C21.8042 19.0208 22 18.55 22 18V6C22 5.45 21.8042 4.97917 21.4125 4.5875C21.0208 4.19583 20.55 4 20 4H4C3.45 4 2.97917 4.19583 2.5875 4.5875C2.19583 4.97917 2 5.45 2 6V18C2 18.55 2.19583 19.0208 2.5875 19.4125ZM5.17 14.83C5.95 15.61 6.89333 16 8 16H10.4C10.6267 16 10.8167 15.9233 10.97 15.77C11.1233 15.6167 11.2 15.4267 11.2 15.2C11.2 14.9733 11.1233 14.7833 10.97 14.63C10.8167 14.4767 10.6267 14.4 10.4 14.4H8C7.33333 14.4 6.76667 14.1667 6.3 13.7C5.83333 13.2333 5.6 12.6667 5.6 12C5.6 11.3333 5.83333 10.7667 6.3 10.3C6.76667 9.83333 7.33333 9.6 8 9.6H10.4C10.6267 9.6 10.8167 9.52333 10.97 9.37C11.1233 9.21667 11.2 9.02667 11.2 8.8C11.2 8.57333 11.1233 8.38333 10.97 8.23C10.8167 8.07667 10.6267 8 10.4 8H8C6.89333 8 5.95 8.39 5.17 9.17C4.39 9.95 4 10.8933 4 12C4 13.1067 4.39 14.05 5.17 14.83ZM9.03 12.57C9.18333 12.7233 9.37333 12.8 9.6 12.8H14.4C14.6267 12.8 14.8167 12.7233 14.97 12.57C15.1233 12.4167 15.2 12.2267 15.2 12C15.2 11.7733 15.1233 11.5833 14.97 11.43C14.8167 11.2767 14.6267 11.2 14.4 11.2H9.6C9.37333 11.2 9.18333 11.2767 9.03 11.43C8.87667 11.5833 8.8 11.7733 8.8 12C8.8 12.2267 8.87667 12.4167 9.03 12.57ZM13.03 15.77C13.1833 15.9233 13.3733 16 13.6 16H16C17.1067 16 18.05 15.61 18.83 14.83C19.61 14.05 20 13.1067 20 12C20 10.8933 19.61 9.95 18.83 9.17C18.05 8.39 17.1067 8 16 8H13.6C13.3733 8 13.1833 8.07667 13.03 8.23C12.8767 8.38333 12.8 8.57333 12.8 8.8C12.8 9.02667 12.8767 9.21667 13.03 9.37C13.1833 9.52333 13.3733 9.6 13.6 9.6H16C16.6667 9.6 17.2333 9.83333 17.7 10.3C18.1667 10.7667 18.4 11.3333 18.4 12C18.4 12.6667 18.1667 13.2333 17.7 13.7C17.2333 14.1667 16.6667 14.4 16 14.4H13.6C13.3733 14.4 13.1833 14.4767 13.03 14.63C12.8767 14.7833 12.8 14.9733 12.8 15.2C12.8 15.4267 12.8767 15.6167 13.03 15.77Z"
        }
      )
    ]
  }
), el = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M11 18.15V15C11 14.7167 11.0958 14.4792 11.2875 14.2875C11.4792 14.0959 11.7167 14 12 14C12.2833 14 12.5208 14.0959 12.7125 14.2875C12.9042 14.4792 13 14.7167 13 15V18.125L14.075 17.025C14.275 16.825 14.5167 16.725 14.8 16.725C15.0833 16.725 15.325 16.825 15.525 17.025C15.725 17.225 15.825 17.4667 15.825 17.75C15.825 18.0334 15.725 18.2751 15.525 18.475L12.7 21.3C12.6 21.4 12.4917 21.4709 12.375 21.5125C12.2583 21.5542 12.1333 21.575 12 21.575C11.8667 21.575 11.7417 21.5542 11.625 21.5125C11.5083 21.4709 11.4 21.4 11.3 21.3L8.44999 18.45C8.24999 18.25 8.15415 18.0125 8.16249 17.7375C8.17082 17.4625 8.27499 17.225 8.47499 17.025C8.67499 16.825 8.91249 16.725 9.18749 16.725C9.46249 16.725 9.69999 16.825 9.89999 17.025L11 18.15ZM11 5.85005L9.87499 6.97505C9.67499 7.17505 9.44165 7.27505 9.17499 7.27505C8.90832 7.27505 8.67499 7.17505 8.47499 6.97505C8.27499 6.77505 8.17499 6.53755 8.17499 6.26255C8.17499 5.98755 8.27499 5.75005 8.47499 5.55005L11.3 2.70005C11.4 2.60005 11.5083 2.52922 11.625 2.48755C11.7417 2.44588 11.8667 2.42505 12 2.42505C12.1333 2.42505 12.2583 2.44588 12.375 2.48755C12.4917 2.52922 12.6 2.60005 12.7 2.70005L15.55 5.55005C15.75 5.75005 15.85 5.98338 15.85 6.25005C15.85 6.51672 15.75 6.75005 15.55 6.95005C15.35 7.15005 15.1125 7.25005 14.8375 7.25005C14.5625 7.25005 14.325 7.15005 14.125 6.95005L13 5.85005V9.00005C13 9.28338 12.9042 9.52088 12.7125 9.71255C12.5208 9.90422 12.2833 10 12 10C11.7167 10 11.4792 9.90422 11.2875 9.71255C11.0958 9.52088 11 9.28338 11 9.00005V5.85005Z" })
    ]
  }
), tl = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M6.7 21.3C6.5 21.5 6.26667 21.6 6 21.6C5.73334 21.6 5.5 21.5 5.3 21.3L2.7 18.7C2.5 18.5 2.4 18.2667 2.4 18C2.4 17.7333 2.5 17.5 2.7 17.3L5.3 14.7C5.5 14.5 5.73334 14.4 6 14.4C6.26667 14.4 6.5 14.5 6.7 14.7C6.9 14.9 7 15.1375 7 15.4125C7 15.6875 6.9 15.925 6.7 16.125L5.825 17H18.175L17.3 16.125C17.1167 15.925 17.0208 15.6875 17.0125 15.4125C17.0042 15.1375 17.1 14.9 17.3 14.7C17.5 14.5 17.7333 14.4 18 14.4C18.2667 14.4 18.5 14.5 18.7 14.7L21.3 17.3C21.5 17.5 21.6 17.7333 21.6 18C21.6 18.2667 21.5 18.5 21.3 18.7L18.7 21.3C18.5 21.5 18.2667 21.6 18 21.6C17.7333 21.6 17.5 21.5 17.3 21.3C17.1 21.1 17 20.8625 17 20.5875C17 20.3125 17.1 20.075 17.3 19.875L18.175 19H5.825L6.7 19.875C6.88334 20.075 6.97917 20.3125 6.9875 20.5875C6.99583 20.8625 6.9 21.1 6.7 21.3ZM7.35 11.8L10.775 2.6C10.8417 2.41667 10.9542 2.27083 11.1125 2.1625C11.2708 2.05417 11.45 2 11.65 2H12.35C12.55 2 12.7292 2.05417 12.8875 2.1625C13.0458 2.27083 13.1583 2.41667 13.225 2.6L16.65 11.825C16.75 12.1083 16.7167 12.375 16.55 12.625C16.3833 12.875 16.15 13 15.85 13C15.6667 13 15.4958 12.9458 15.3375 12.8375C15.1792 12.7292 15.0667 12.5833 15 12.4L14.25 10.2H9.8L9 12.425C8.93333 12.6083 8.825 12.75 8.675 12.85C8.525 12.95 8.35834 13 8.175 13C7.85834 13 7.6125 12.8708 7.4375 12.6125C7.2625 12.3542 7.23334 12.0833 7.35 11.8ZM10.35 8.6H13.65L12.05 4.05H11.95L10.35 8.6Z" }),
      " "
    ]
  }
), rl = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M5 16C4.45 16 3.97917 15.8042 3.5875 15.4125C3.19583 15.0208 3 14.55 3 14V10C3 9.45 3.19583 8.97917 3.5875 8.5875C3.97917 8.19583 4.45 8 5 8H19C19.55 8 20.0208 8.19583 20.4125 8.5875C20.8042 8.97917 21 9.45 21 10V14C21 14.55 20.8042 15.0208 20.4125 15.4125C20.0208 15.8042 19.55 16 19 16H5ZM19 10H5V14H19V10Z" }),
      /* @__PURE__ */ o("path", { d: "M5 5.5C5 4.67157 5.67157 4 6.5 4H17.5C18.3284 4 19 4.67157 19 5.5C19 6.32843 18.3284 7 17.5 7H6.5C5.67157 7 5 6.32843 5 5.5Z" }),
      /* @__PURE__ */ o("path", { d: "M5 18.5C5 17.6716 5.67157 17 6.5 17H17.5C18.3284 17 19 17.6716 19 18.5C19 19.3284 18.3284 20 17.5 20H6.5C5.67157 20 5 19.3284 5 18.5Z" }),
      " "
    ]
  }
), nl = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("g", { clipPath: "url(#clip0_1_148)", children: /* @__PURE__ */ o("path", { d: "M19.2535 0.622806C19.3084 0.240758 19.3471 0.0804978 19.3932 0.0451324C19.4789 -0.0206635 19.5056 -0.0169822 19.5926 0.0724691C19.6724 0.154597 19.9771 1.09947 20.0779 1.57791C20.1352 1.84951 20.135 1.88989 20.0759 2.13771C19.9652 2.6008 19.6335 2.99013 19.1006 3.28241C18.9851 3.34574 18.6504 3.45983 18.3568 3.53592C17.6512 3.71874 17.2297 3.86298 16.6183 4.13083C16.3401 4.25267 16.1052 4.35943 16.0961 4.36813C16.087 4.37678 16.0979 4.40271 16.1203 4.42574C16.1492 4.45543 16.1959 4.44896 16.2814 4.4035C16.4124 4.33378 16.5502 4.35454 16.5502 4.44395C16.5502 4.47481 16.5344 4.50007 16.515 4.50007C16.4958 4.50007 16.4276 4.54543 16.3636 4.60085C16.1919 4.74959 16.153 4.94505 16.23 5.27227C16.4027 6.00515 16.4017 6.31432 16.2248 6.90867C16.1409 7.19097 16.1305 7.78395 16.204 8.10319C16.2764 8.41752 16.5183 8.91056 16.7329 9.18098C16.9939 9.50977 17.2719 9.71782 17.7142 9.91544C18.3958 10.2199 18.5918 10.4187 18.4804 10.6927C18.4052 10.878 18.0014 11.3848 17.7604 11.5963C17.5332 11.7959 17.2539 11.9842 16.8998 12.1767C16.7628 12.2512 16.6378 12.3507 16.609 12.4082C16.5812 12.4638 16.5461 12.6806 16.5308 12.8901C16.5156 13.0995 16.4839 13.2872 16.4601 13.3072C16.4364 13.3272 16.3449 13.3634 16.2569 13.3875C16.0586 13.4422 16.0299 13.485 16.139 13.5635C16.3328 13.7033 16.3293 13.7678 16.1085 14.1161C15.7627 14.6622 15.5852 15.232 15.4256 16.3081C15.3178 17.0344 15.2468 17.1655 14.9046 17.2695C14.7149 17.3271 12.514 16.953 12.108 16.7942C12.0481 16.7707 11.9722 16.7795 11.8698 16.8217C11.7411 16.8747 11.6952 16.9297 11.5518 17.2029C11.4596 17.3785 11.302 17.7121 11.2015 17.9442L11.0188 18.3664L11.1826 18.6055C11.3396 18.8345 11.3486 18.8634 11.3972 19.2935C11.4369 19.6445 11.4696 19.7806 11.5474 19.9171C11.6255 20.0542 11.6373 20.1038 11.6025 20.147C11.5645 20.1941 11.5446 20.1929 11.4653 20.1394C11.3005 20.0283 11.3201 20.1208 11.4978 20.2926C11.7142 20.5018 11.9786 20.9245 12.1167 21.2819C12.1749 21.4328 12.3047 21.8998 12.405 22.3198C12.5051 22.7387 12.6975 23.4938 12.8331 24H3.00041C2.98473 24.0403 3.01575 23.9574 3.00041 24C3.16755 23.5707 3.4904 22.8509 3.8808 22.252C4.46487 21.3561 5.02401 20.2783 5.51163 19.1083C5.90984 18.153 6.38331 17.7143 6.38331 17.7143C6.26008 17.6461 6.61797 17.7551 6.61797 17.6382C6.61797 17.5579 6.95175 16.9075 7.18483 16.5336C7.41605 16.1626 7.56918 16.0665 7.81704 16.1369C8.03326 16.1984 8.13338 16.1546 8.21257 15.9642C8.44094 15.4149 8.80668 14.3393 8.92336 13.8742C9.09575 13.1867 9.09445 13.1799 8.59894 12.1515C7.87567 10.6507 7.07851 9.43031 6.08246 8.29901C5.30939 7.4209 4.92823 6.89207 4.53928 6.1577C4.44428 5.97837 4.352 5.83166 4.33416 5.83166C4.27867 5.83166 4.2574 5.96502 4.29268 6.09167C4.33792 6.25393 4.28061 6.35286 4.20245 6.24751C4.09167 6.09833 4.0688 5.80017 4.11919 5.16328C4.16417 4.59497 4.17478 4.54327 4.27559 4.39958C4.33507 4.31487 4.49186 4.16043 4.62398 4.05642C4.86278 3.86847 4.95514 3.74635 5.20995 3.28159C5.42598 2.88755 6.07318 2.27883 6.17007 2.37854C6.18754 2.39651 6.12596 2.59367 6.03326 2.81675C5.94055 3.03979 5.87255 3.24333 5.88218 3.2691C5.89398 3.30074 6.03748 3.25265 6.3254 3.12058C6.55955 3.01315 7.18784 2.73145 7.72155 2.49458C8.76213 2.0328 9.98105 1.42003 10.7474 0.973443C11.3249 0.636944 11.4547 0.576866 11.8752 0.451541C12.4345 0.284896 12.9336 0.260615 14.431 0.327233C15.1596 0.359661 15.7719 0.396397 15.7914 0.40889C15.8718 0.46 15.8169 0.533433 15.6409 0.609921C15.454 0.691226 15.3534 0.806369 15.4018 0.88411C15.4356 0.938705 16.9252 1.61359 17.2819 1.73598C17.4341 1.78822 17.6956 1.86067 17.8631 1.89705C18.5205 2.03985 18.8096 1.96939 18.9947 1.6215C19.1339 1.35987 19.164 1.24355 19.2535 0.622806Z" }) })
    ]
  }
), ol = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M8.65 20.5L2.5 14.35C2.33333 14.1833 2.20833 14 2.125 13.8C2.04167 13.6 2 13.3916 2 13.175C2 12.9583 2.04167 12.75 2.125 12.55C2.20833 12.35 2.33333 12.1666 2.5 12L8.25 6.27498L6.375 4.39998C6.15833 4.18331 6.04583 3.92498 6.0375 3.62498C6.02917 3.32498 6.13333 3.05831 6.35 2.82498C6.56667 2.59164 6.83333 2.47498 7.15 2.47498C7.46667 2.47498 7.74167 2.59164 7.975 2.82498L17.15 12C17.3167 12.1666 17.4375 12.35 17.5125 12.55C17.5875 12.75 17.625 12.9583 17.625 13.175C17.625 13.3916 17.5875 13.6 17.5125 13.8C17.4375 14 17.3167 14.1833 17.15 14.35L11 20.5C10.8333 20.6666 10.65 20.7916 10.45 20.875C10.25 20.9583 10.0417 21 9.825 21C9.60833 21 9.4 20.9583 9.2 20.875C9 20.7916 8.81667 20.6666 8.65 20.5ZM9.825 7.84998L4.475 13.2H15.175L9.825 7.84998ZM19.8 21C19.2 21 18.6917 20.7875 18.275 20.3625C17.8583 19.9375 17.65 19.4166 17.65 18.8C17.65 18.35 17.7625 17.925 17.9875 17.525C18.2125 17.125 18.4667 16.7333 18.75 16.35L19.225 15.75C19.375 15.5666 19.5708 15.4708 19.8125 15.4625C20.0542 15.4541 20.25 15.5416 20.4 15.725L20.9 16.35C21.1667 16.7333 21.4167 17.125 21.65 17.525C21.8833 17.925 22 18.35 22 18.8C22 19.4166 21.7833 19.9375 21.35 20.3625C20.9167 20.7875 20.4 21 19.8 21Z" })
    ]
  }
), il = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M21 5V15.725C21 15.9583 20.9417 16.15 20.825 16.3C20.7083 16.45 20.5583 16.5667 20.375 16.65C20.1917 16.7333 20.0083 16.7625 19.825 16.7375C19.6417 16.7125 19.4667 16.6167 19.3 16.45L7.55001 4.7C7.38335 4.53333 7.28751 4.35833 7.26251 4.175C7.23751 3.99167 7.26668 3.80833 7.35001 3.625C7.43335 3.44167 7.55001 3.29167 7.70001 3.175C7.85001 3.05833 8.04168 3 8.27501 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5ZM5.00001 21C4.45001 21 3.97918 20.8042 3.58751 20.4125C3.19585 20.0208 3.00001 19.55 3.00001 19V5.8L2.10001 4.9C1.91668 4.71667 1.82501 4.48333 1.82501 4.2C1.82501 3.91667 1.91668 3.68333 2.10001 3.5C2.28335 3.31667 2.51668 3.225 2.80001 3.225C3.08335 3.225 3.31668 3.31667 3.50001 3.5L20.5 20.5C20.6833 20.6833 20.775 20.9167 20.775 21.2C20.775 21.4833 20.6833 21.7167 20.5 21.9C20.3167 22.0833 20.0833 22.175 19.8 22.175C19.5167 22.175 19.2833 22.0833 19.1 21.9L18.2 21H5.00001ZM14.175 17L12.075 14.9L11.25 16L9.40001 13.525C9.30001 13.3917 9.16668 13.325 9.00001 13.325C8.83335 13.325 8.70001 13.3917 8.60001 13.525L6.60001 16.2C6.46668 16.3667 6.45001 16.5417 6.55001 16.725C6.65001 16.9083 6.80001 17 7.00001 17H14.175Z" }),
      " "
    ]
  }
), al = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M11.6875 22L9.7375 17.1667L6 20.5V2L19 14.5833L13.9625 15.25L15.9125 20.1667L11.6875 22ZM10.3875 14.5833L12.5813 19.9167L13.9625 19.25L11.6875 14L15.5063 13.5L7.4625 5.66667V17.1667L10.3875 14.5833Z" })
    ]
  }
), sl = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M9.47259 13.2703L8.37438 16.3514C8.28509 16.6036 8.14223 16.7973 7.94581 16.9324C7.74938 17.0676 7.52616 17.1351 7.27616 17.1351C6.86545 17.1351 6.53956 16.9595 6.29848 16.6081C6.05741 16.2568 6.00831 15.8829 6.15116 15.4865L10.8654 2.81081C10.9547 2.55856 11.1065 2.36036 11.3208 2.21622C11.5351 2.07207 11.7672 2 12.0172 2H12.9815C13.2494 2 13.486 2.07207 13.6913 2.21622C13.8967 2.36036 14.044 2.55856 14.1333 2.81081L18.8744 15.5135C19.0172 15.9099 18.9681 16.2793 18.7271 16.6216C18.486 16.964 18.1601 17.1351 17.7494 17.1351C17.4994 17.1351 17.2672 17.0631 17.0529 16.9189C16.8387 16.7748 16.6869 16.5766 16.5976 16.3243L15.5262 13.2703H9.47259ZM10.2494 11.0811H14.7494L12.5529 4.81081H12.4458L10.2494 11.0811Z" }),
      /* @__PURE__ */ o("path", { d: "M5.30804 21.6892C5.51339 21.8964 5.76786 22 6.07143 22H18.9286C19.2321 22 19.4866 21.8964 19.692 21.6892C19.8973 21.482 20 21.2252 20 20.9189C20 20.6126 19.8973 20.3559 19.692 20.1486C19.4866 19.9414 19.2321 19.8378 18.9286 19.8378H6.07143C5.76786 19.8378 5.51339 19.9414 5.30804 20.1486C5.10268 20.3559 5 20.6126 5 20.9189C5 21.2252 5.10268 21.482 5.30804 21.6892Z" }),
      " "
    ]
  }
), ll = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M10 15C10.2833 15 10.5208 14.9042 10.7125 14.7125C10.9042 14.5208 11 14.2833 11 14V10C11 9.71667 10.9042 9.47917 10.7125 9.2875C10.5208 9.09583 10.2833 9 10 9C9.71667 9 9.47917 9.09583 9.2875 9.2875C9.09583 9.47917 9 9.71667 9 10V14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15ZM14 15C14.2833 15 14.5208 14.9042 14.7125 14.7125C14.9042 14.5208 15 14.2833 15 14V10C15 9.71667 14.9042 9.47917 14.7125 9.2875C14.5208 9.09583 14.2833 9 14 9C13.7167 9 13.4792 9.09583 13.2875 9.2875C13.0958 9.47917 13 9.71667 13 10V14C13 14.2833 13.0958 14.5208 13.2875 14.7125C13.4792 14.9042 13.7167 15 14 15ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 11.4667 2.04167 10.9333 2.125 10.4C2.20833 9.86667 2.33333 9.34167 2.5 8.825C2.58333 8.55833 2.75417 8.37917 3.0125 8.2875C3.27083 8.19583 3.51667 8.21667 3.75 8.35C4 8.48333 4.17917 8.67917 4.2875 8.9375C4.39583 9.19583 4.40833 9.46667 4.325 9.75C4.225 10.1167 4.14583 10.4875 4.0875 10.8625C4.02917 11.2375 4 11.6167 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C11.6 4 11.2042 4.02917 10.8125 4.0875C10.4208 4.14583 10.0333 4.23333 9.65 4.35C9.36667 4.43333 9.1 4.425 8.85 4.325C8.6 4.225 8.41667 4.05 8.3 3.8C8.18333 3.55 8.17917 3.29583 8.2875 3.0375C8.39583 2.77917 8.58333 2.60833 8.85 2.525C9.35 2.34167 9.86667 2.20833 10.4 2.125C10.9333 2.04167 11.4667 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM5.5 7C5.08333 7 4.72917 6.85417 4.4375 6.5625C4.14583 6.27083 4 5.91667 4 5.5C4 5.08333 4.14583 4.72917 4.4375 4.4375C4.72917 4.14583 5.08333 4 5.5 4C5.91667 4 6.27083 4.14583 6.5625 4.4375C6.85417 4.72917 7 5.08333 7 5.5C7 5.91667 6.85417 6.27083 6.5625 6.5625C6.27083 6.85417 5.91667 7 5.5 7ZM6 12C6 10.3333 6.58333 8.91667 7.75 7.75C8.91667 6.58333 10.3333 6 12 6C13.6667 6 15.0833 6.58333 16.25 7.75C17.4167 8.91667 18 10.3333 18 12C18 13.6667 17.4167 15.0833 16.25 16.25C15.0833 17.4167 13.6667 18 12 18C10.3333 18 8.91667 17.4167 7.75 16.25C6.58333 15.0833 6 13.6667 6 12Z" }),
      " "
    ]
  }
), cl = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM13 18H20V6H13V18ZM18.25 15C18.4667 15 18.6458 14.9292 18.7875 14.7875C18.9292 14.6458 19 14.4667 19 14.25C19 14.0333 18.9292 13.8542 18.7875 13.7125C18.6458 13.5708 18.4667 13.5 18.25 13.5H14.75C14.5333 13.5 14.3542 13.5708 14.2125 13.7125C14.0708 13.8542 14 14.0333 14 14.25C14 14.4667 14.0708 14.6458 14.2125 14.7875C14.3542 14.9292 14.5333 15 14.75 15H18.25ZM18.25 12.5C18.4667 12.5 18.6458 12.4292 18.7875 12.2875C18.9292 12.1458 19 11.9667 19 11.75C19 11.5333 18.9292 11.3542 18.7875 11.2125C18.6458 11.0708 18.4667 11 18.25 11H14.75C14.5333 11 14.3542 11.0708 14.2125 11.2125C14.0708 11.3542 14 11.5333 14 11.75C14 11.9667 14.0708 12.1458 14.2125 12.2875C14.3542 12.4292 14.5333 12.5 14.75 12.5H18.25ZM18.25 10C18.4667 10 18.6458 9.92917 18.7875 9.7875C18.9292 9.64583 19 9.46667 19 9.25C19 9.03333 18.9292 8.85417 18.7875 8.7125C18.6458 8.57083 18.4667 8.5 18.25 8.5H14.75C14.5333 8.5 14.3542 8.57083 14.2125 8.7125C14.0708 8.85417 14 9.03333 14 9.25C14 9.46667 14.0708 9.64583 14.2125 9.7875C14.3542 9.92917 14.5333 10 14.75 10H18.25Z" }),
      " "
    ]
  }
), dl = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M8.20101 12.3166L11.1558 9.36181C11.397 9.1206 11.6784 9 12 9C12.3216 9 12.603 9.1206 12.8442 9.36181L15.799 12.3166C16 12.5176 16.0503 12.7387 15.9497 12.9799C15.8492 13.2211 15.6583 13.3417 15.3769 13.3417L8.62312 13.3417C8.34171 13.3417 8.15075 13.2211 8.05025 12.9799C7.94975 12.7387 8 12.5176 8.20101 12.3166Z" }),
      /* @__PURE__ */ o("path", { d: "M2 13.5C2 12.6716 2.67157 12 3.5 12H20.5C21.3284 12 22 12.6716 22 13.5C22 14.3284 21.3284 15 20.5 15H3.5C2.67157 15 2 14.3284 2 13.5Z" }),
      " "
    ]
  }
), ul = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M4.99999 7.84999L4.09999 8.72499C3.91665 8.90832 3.68749 8.99999 3.41249 8.99999C3.13749 8.99999 2.89999 8.89999 2.69999 8.69999C2.51665 8.51665 2.42499 8.28332 2.42499 7.99999C2.42499 7.71665 2.51665 7.48332 2.69999 7.29999L5.29999 4.69999C5.39999 4.59999 5.50832 4.52915 5.62499 4.48749C5.74165 4.44582 5.86665 4.42499 5.99999 4.42499C6.13332 4.42499 6.25832 4.44582 6.37499 4.48749C6.49165 4.52915 6.59999 4.59999 6.69999 4.69999L9.29999 7.29999C9.48332 7.48332 9.57915 7.71249 9.58749 7.98749C9.59582 8.26249 9.49999 8.49999 9.29999 8.69999C9.11665 8.88332 8.88749 8.97915 8.61249 8.98749C8.33749 8.99582 8.09999 8.90832 7.89999 8.72499L6.99999 7.84999V16.15L7.89999 15.275C8.08332 15.0917 8.31249 15 8.58749 15C8.86249 15 9.09999 15.1 9.29999 15.3C9.48332 15.4833 9.57499 15.7167 9.57499 16C9.57499 16.2833 9.48332 16.5167 9.29999 16.7L6.69999 19.3C6.59999 19.4 6.49165 19.4708 6.37499 19.5125C6.25832 19.5542 6.13332 19.575 5.99999 19.575C5.86665 19.575 5.74165 19.5542 5.62499 19.5125C5.50832 19.4708 5.39999 19.4 5.29999 19.3L2.69999 16.7C2.51665 16.5167 2.42082 16.2875 2.41249 16.0125C2.40415 15.7375 2.49999 15.5 2.69999 15.3C2.88332 15.1167 3.11249 15.0208 3.38749 15.0125C3.66249 15.0042 3.89999 15.0917 4.09999 15.275L4.99999 16.15V7.84999ZM13 19C12.7167 19 12.4792 18.9042 12.2875 18.7125C12.0958 18.5208 12 18.2833 12 18C12 17.7167 12.0958 17.4792 12.2875 17.2875C12.4792 17.0958 12.7167 17 13 17H21C21.2833 17 21.5208 17.0958 21.7125 17.2875C21.9042 17.4792 22 17.7167 22 18C22 18.2833 21.9042 18.5208 21.7125 18.7125C21.5208 18.9042 21.2833 19 21 19H13ZM13 13C12.7167 13 12.4792 12.9042 12.2875 12.7125C12.0958 12.5208 12 12.2833 12 12C12 11.7167 12.0958 11.4792 12.2875 11.2875C12.4792 11.0958 12.7167 11 13 11H21C21.2833 11 21.5208 11.0958 21.7125 11.2875C21.9042 11.4792 22 11.7167 22 12C22 12.2833 21.9042 12.5208 21.7125 12.7125C21.5208 12.9042 21.2833 13 21 13H13ZM13 6.99999C12.7167 6.99999 12.4792 6.90415 12.2875 6.71249C12.0958 6.52082 12 6.28332 12 5.99999C12 5.71665 12.0958 5.47915 12.2875 5.28749C12.4792 5.09582 12.7167 4.99999 13 4.99999H21C21.2833 4.99999 21.5208 5.09582 21.7125 5.28749C21.9042 5.47915 22 5.71665 22 5.99999C22 6.28332 21.9042 6.52082 21.7125 6.71249C21.5208 6.90415 21.2833 6.99999 21 6.99999H13Z" })
    ]
  }
), cr = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M10.6 13.8L8.45 11.65C8.26667 11.4667 8.03333 11.375 7.75 11.375C7.46667 11.375 7.23333 11.4667 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.1 16.1 10.3333 16.2 10.6 16.2C10.8667 16.2 11.1 16.1 11.3 15.9L16.95 10.25C17.1333 10.0667 17.225 9.83333 17.225 9.55C17.225 9.26667 17.1333 9.03333 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z" }),
      " "
    ]
  }
), dr = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M18.3 5.70998C18.2075 5.61727 18.0976 5.54372 17.9766 5.49354C17.8557 5.44336 17.726 5.41753 17.595 5.41753C17.464 5.41753 17.3343 5.44336 17.2134 5.49354C17.0924 5.54372 16.9825 5.61727 16.89 5.70998L12 10.59L7.11 5.69998C7.01749 5.60727 6.9076 5.53372 6.78663 5.48354C6.66565 5.43336 6.53597 5.40753 6.405 5.40753C6.27403 5.40753 6.14435 5.43336 6.02338 5.48354C5.9024 5.53372 5.79251 5.60727 5.7 5.69998C5.31 6.08998 5.31 6.71998 5.7 7.10998L10.59 12L5.7 16.89C5.31 17.28 5.31 17.91 5.7 18.3C6.09 18.69 6.72 18.69 7.11 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10998C18.68 6.72998 18.68 6.08998 18.3 5.70998Z" }),
      " "
    ]
  }
), pl = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M12 21C9.9 21 8.04167 20.3625 6.425 19.0875C4.80833 17.8125 3.75833 16.1833 3.275 14.2C3.20833 13.95 3.25833 13.7208 3.425 13.5125C3.59167 13.3042 3.81667 13.1833 4.1 13.15C4.36667 13.1167 4.60833 13.1667 4.825 13.3C5.04167 13.4333 5.19167 13.6333 5.275 13.9C5.675 15.4 6.5 16.625 7.75 17.575C9 18.525 10.4167 19 12 19C13.95 19 15.6042 18.3208 16.9625 16.9625C18.3208 15.6042 19 13.95 19 12C19 10.05 18.3208 8.39583 16.9625 7.0375C15.6042 5.67917 13.95 5 12 5C10.85 5 9.775 5.26667 8.775 5.8C7.775 6.33333 6.93333 7.06667 6.25 8H8C8.28333 8 8.52083 8.09583 8.7125 8.2875C8.90417 8.47917 9 8.71667 9 9C9 9.28333 8.90417 9.52083 8.7125 9.7125C8.52083 9.90417 8.28333 10 8 10H4C3.71667 10 3.47917 9.90417 3.2875 9.7125C3.09583 9.52083 3 9.28333 3 9V5C3 4.71667 3.09583 4.47917 3.2875 4.2875C3.47917 4.09583 3.71667 4 4 4C4.28333 4 4.52083 4.09583 4.7125 4.2875C4.90417 4.47917 5 4.71667 5 5V6.35C5.85 5.28333 6.8875 4.45833 8.1125 3.875C9.3375 3.29167 10.6333 3 12 3C13.25 3 14.4208 3.2375 15.5125 3.7125C16.6042 4.1875 17.5542 4.82917 18.3625 5.6375C19.1708 6.44583 19.8125 7.39583 20.2875 8.4875C20.7625 9.57917 21 10.75 21 12C21 13.25 20.7625 14.4208 20.2875 15.5125C19.8125 16.6042 19.1708 17.5542 18.3625 18.3625C17.5542 19.1708 16.6042 19.8125 15.5125 20.2875C14.4208 20.7625 13.25 21 12 21Z" }),
      " "
    ]
  }
), fl = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M12 5C11.7167 5 11.4792 4.90417 11.2875 4.7125C11.0958 4.52083 11 4.28333 11 4V2C11 1.71667 11.0958 1.47917 11.2875 1.2875C11.4792 1.09583 11.7167 1 12 1C12.2833 1 12.5208 1.09583 12.7125 1.2875C12.9042 1.47917 13 1.71667 13 2V4C13 4.28333 12.9042 4.52083 12.7125 4.7125C12.5208 4.90417 12.2833 5 12 5ZM16.95 7.05C16.7667 6.86667 16.675 6.6375 16.675 6.3625C16.675 6.0875 16.7667 5.85 16.95 5.65L18.35 4.225C18.55 4.025 18.7875 3.925 19.0625 3.925C19.3375 3.925 19.575 4.025 19.775 4.225C19.9583 4.40833 20.05 4.64167 20.05 4.925C20.05 5.20833 19.9583 5.44167 19.775 5.625L18.35 7.05C18.1667 7.23333 17.9333 7.325 17.65 7.325C17.3667 7.325 17.1333 7.23333 16.95 7.05ZM20 13C19.7167 13 19.4792 12.9042 19.2875 12.7125C19.0958 12.5208 19 12.2833 19 12C19 11.7167 19.0958 11.4792 19.2875 11.2875C19.4792 11.0958 19.7167 11 20 11H22C22.2833 11 22.5208 11.0958 22.7125 11.2875C22.9042 11.4792 23 11.7167 23 12C23 12.2833 22.9042 12.5208 22.7125 12.7125C22.5208 12.9042 22.2833 13 22 13H20ZM12 23C11.7167 23 11.4792 22.9042 11.2875 22.7125C11.0958 22.5208 11 22.2833 11 22V20C11 19.7167 11.0958 19.4792 11.2875 19.2875C11.4792 19.0958 11.7167 19 12 19C12.2833 19 12.5208 19.0958 12.7125 19.2875C12.9042 19.4792 13 19.7167 13 20V22C13 22.2833 12.9042 22.5208 12.7125 22.7125C12.5208 22.9042 12.2833 23 12 23ZM5.65 7.05L4.225 5.65C4.025 5.45 3.925 5.20833 3.925 4.925C3.925 4.64167 4.025 4.40833 4.225 4.225C4.40833 4.04167 4.64167 3.95 4.925 3.95C5.20833 3.95 5.44167 4.04167 5.625 4.225L7.05 5.65C7.23333 5.83333 7.325 6.06667 7.325 6.35C7.325 6.63333 7.23333 6.86667 7.05 7.05C6.85 7.23333 6.61667 7.325 6.35 7.325C6.08333 7.325 5.85 7.23333 5.65 7.05ZM18.35 19.775L16.95 18.35C16.7667 18.15 16.675 17.9125 16.675 17.6375C16.675 17.3625 16.7667 17.1333 16.95 16.95C17.1333 16.7667 17.3625 16.675 17.6375 16.675C17.9125 16.675 18.15 16.7667 18.35 16.95L19.775 18.35C19.975 18.5333 20.0708 18.7667 20.0625 19.05C20.0542 19.3333 19.9583 19.575 19.775 19.775C19.575 19.975 19.3333 20.075 19.05 20.075C18.7667 20.075 18.5333 19.975 18.35 19.775ZM2 13C1.71667 13 1.47917 12.9042 1.2875 12.7125C1.09583 12.5208 1 12.2833 1 12C1 11.7167 1.09583 11.4792 1.2875 11.2875C1.47917 11.0958 1.71667 11 2 11H4C4.28333 11 4.52083 11.0958 4.7125 11.2875C4.90417 11.4792 5 11.7167 5 12C5 12.2833 4.90417 12.5208 4.7125 12.7125C4.52083 12.9042 4.28333 13 4 13H2ZM4.225 19.775C4.04167 19.5917 3.95 19.3583 3.95 19.075C3.95 18.7917 4.04167 18.5583 4.225 18.375L5.65 16.95C5.83333 16.7667 6.0625 16.675 6.3375 16.675C6.6125 16.675 6.85 16.7667 7.05 16.95C7.25 17.15 7.35 17.3875 7.35 17.6625C7.35 17.9375 7.25 18.175 7.05 18.375L5.65 19.775C5.45 19.975 5.20833 20.075 4.925 20.075C4.64167 20.075 4.40833 19.975 4.225 19.775ZM12 18C10.3333 18 8.91667 17.4167 7.75 16.25C6.58333 15.0833 6 13.6667 6 12C6 10.3333 6.58333 8.91667 7.75 7.75C8.91667 6.58333 10.3333 6 12 6C13.6667 6 15.0833 6.58333 16.25 7.75C17.4167 8.91667 18 10.3333 18 12C18 13.6667 17.4167 15.0833 16.25 16.25C15.0833 17.4167 13.6667 18 12 18ZM12 16C13.1 16 14.0417 15.6083 14.825 14.825C15.6083 14.0417 16 13.1 16 12C16 10.9 15.6083 9.95833 14.825 9.175C14.0417 8.39167 13.1 8 12 8C10.9 8 9.95833 8.39167 9.175 9.175C8.39167 9.95833 8 10.9 8 12C8 13.1 8.39167 14.0417 9.175 14.825C9.95833 15.6083 10.9 16 12 16Z" }),
      " "
    ]
  }
), hl = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M12 21C9.48333 21 7.35417 20.1292 5.6125 18.3875C3.87083 16.6458 3 14.5167 3 12C3 9.70002 3.75 7.70418 5.25 6.01252C6.75 4.32085 8.66667 3.33335 11 3.05002C11.2167 3.01668 11.4083 3.04585 11.575 3.13752C11.7417 3.22918 11.875 3.35002 11.975 3.50002C12.075 3.65002 12.1292 3.82502 12.1375 4.02502C12.1458 4.22502 12.0833 4.41668 11.95 4.60002C11.6667 5.03335 11.4542 5.49168 11.3125 5.97502C11.1708 6.45835 11.1 6.96668 11.1 7.50002C11.1 9.00002 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.0167 12.9 17.5292 12.825 18.0375 12.675C18.5458 12.525 19 12.3167 19.4 12.05C19.5833 11.9333 19.7708 11.8792 19.9625 11.8875C20.1542 11.8958 20.325 11.9417 20.475 12.025C20.6417 12.1083 20.7708 12.2333 20.8625 12.4C20.9542 12.5667 20.9833 12.7667 20.95 13C20.7167 15.3 19.7375 17.2083 18.0125 18.725C16.2875 20.2417 14.2833 21 12 21ZM12 19C13.4667 19 14.7833 18.5958 15.95 17.7875C17.1167 16.9792 17.9667 15.925 18.5 14.625C18.1667 14.7083 17.8333 14.775 17.5 14.825C17.1667 14.875 16.8333 14.9 16.5 14.9C14.45 14.9 12.7042 14.1792 11.2625 12.7375C9.82083 11.2958 9.1 9.55002 9.1 7.50002C9.1 7.16668 9.125 6.83335 9.175 6.50002C9.225 6.16668 9.29167 5.83335 9.375 5.50002C8.075 6.03335 7.02083 6.88335 6.2125 8.05002C5.40417 9.21668 5 10.5333 5 12C5 13.9333 5.68333 15.5833 7.05 16.95C8.41667 18.3167 10.0667 19 12 19Z" }),
      " "
    ]
  }
), gl = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M11 18.15V15C11 14.7167 11.0958 14.4792 11.2875 14.2875C11.4792 14.0959 11.7167 14 12 14C12.2833 14 12.5208 14.0959 12.7125 14.2875C12.9042 14.4792 13 14.7167 13 15V18.125L14.075 17.025C14.275 16.825 14.5167 16.725 14.8 16.725C15.0833 16.725 15.325 16.825 15.525 17.025C15.725 17.225 15.825 17.4667 15.825 17.75C15.825 18.0334 15.725 18.275 15.525 18.475L12.7 21.3C12.6 21.4 12.4917 21.4709 12.375 21.5125C12.2583 21.5542 12.1333 21.575 12 21.575C11.8667 21.575 11.7417 21.5542 11.625 21.5125C11.5083 21.4709 11.4 21.4 11.3 21.3L8.44999 18.45C8.24999 18.25 8.15415 18.0125 8.16249 17.7375C8.17082 17.4625 8.27499 17.225 8.47499 17.025C8.67499 16.825 8.91249 16.725 9.18749 16.725C9.46249 16.725 9.69999 16.825 9.89999 17.025L11 18.15ZM5.87499 13L6.97499 14.075C7.17499 14.275 7.27499 14.5167 7.27499 14.8C7.27499 15.0834 7.17499 15.325 6.97499 15.525C6.77499 15.725 6.53332 15.825 6.24999 15.825C5.96665 15.825 5.72499 15.725 5.52499 15.525L2.69999 12.7C2.59999 12.6 2.52915 12.4917 2.48749 12.375C2.44582 12.2584 2.42499 12.1334 2.42499 12C2.42499 11.8667 2.44582 11.7417 2.48749 11.625C2.52915 11.5084 2.59999 11.4 2.69999 11.3L5.52499 8.47505C5.72499 8.27505 5.96249 8.17505 6.23749 8.17505C6.51249 8.17505 6.74999 8.27505 6.94999 8.47505C7.14999 8.67505 7.24999 8.91255 7.24999 9.18755C7.24999 9.46255 7.14999 9.70005 6.94999 9.90005L5.84999 11H8.99999C9.28332 11 9.52082 11.0959 9.71249 11.2875C9.90415 11.4792 9.99999 11.7167 9.99999 12C9.99999 12.2834 9.90415 12.5209 9.71249 12.7125C9.52082 12.9042 9.28332 13 8.99999 13H5.87499ZM18.15 13H15C14.7167 13 14.4792 12.9042 14.2875 12.7125C14.0958 12.5209 14 12.2834 14 12C14 11.7167 14.0958 11.4792 14.2875 11.2875C14.4792 11.0959 14.7167 11 15 11H18.125L17.025 9.92505C16.825 9.72505 16.725 9.48338 16.725 9.20005C16.725 8.91672 16.825 8.67505 17.025 8.47505C17.225 8.27505 17.4667 8.17505 17.75 8.17505C18.0333 8.17505 18.275 8.27505 18.475 8.47505L21.3 11.3C21.4 11.4 21.4708 11.5084 21.5125 11.625C21.5542 11.7417 21.575 11.8667 21.575 12C21.575 12.1334 21.5542 12.2584 21.5125 12.375C21.4708 12.4917 21.4 12.6 21.3 12.7L18.45 15.55C18.25 15.75 18.0167 15.8459 17.75 15.8375C17.4833 15.8292 17.25 15.725 17.05 15.525C16.85 15.325 16.75 15.0875 16.75 14.8125C16.75 14.5375 16.85 14.3 17.05 14.1L18.15 13ZM11 5.85005L9.87499 6.97505C9.67499 7.17505 9.44165 7.27505 9.17499 7.27505C8.90832 7.27505 8.67499 7.17505 8.47499 6.97505C8.27499 6.77505 8.17499 6.53755 8.17499 6.26255C8.17499 5.98755 8.27499 5.75005 8.47499 5.55005L11.3 2.70005C11.4 2.60005 11.5083 2.52922 11.625 2.48755C11.7417 2.44588 11.8667 2.42505 12 2.42505C12.1333 2.42505 12.2583 2.44588 12.375 2.48755C12.4917 2.52922 12.6 2.60005 12.7 2.70005L15.55 5.55005C15.75 5.75005 15.85 5.98338 15.85 6.25005C15.85 6.51672 15.75 6.75005 15.55 6.95005C15.35 7.15005 15.1125 7.25005 14.8375 7.25005C14.5625 7.25005 14.325 7.15005 14.125 6.95005L13 5.85005V9.00005C13 9.28338 12.9042 9.52088 12.7125 9.71255C12.5208 9.90422 12.2833 10 12 10C11.7167 10 11.4792 9.90422 11.2875 9.71255C11.0958 9.52088 11 9.28338 11 9.00005V5.85005Z" }),
      " "
    ]
  }
), jo = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M23 9.00002C23 10.15 22.7958 11.2458 22.3875 12.2875C21.9792 13.3292 21.425 14.275 20.725 15.125C20.525 15.3583 20.275 15.4833 19.975 15.5C19.675 15.5167 19.4083 15.4083 19.175 15.175C18.9583 14.9583 18.8583 14.7 18.875 14.4C18.8917 14.1 18.9917 13.825 19.175 13.575C19.675 12.9417 20.0625 12.2333 20.3375 11.45C20.6125 10.6667 20.75 9.85002 20.75 9.00002C20.75 8.15002 20.6125 7.34168 20.3375 6.57502C20.0625 5.80835 19.675 5.10835 19.175 4.47502C18.975 4.22502 18.8708 3.95002 18.8625 3.65002C18.8542 3.35002 18.9583 3.08335 19.175 2.85002C19.3917 2.61668 19.6542 2.50418 19.9625 2.51252C20.2708 2.52085 20.525 2.64168 20.725 2.87502C21.425 3.72502 21.9792 4.67085 22.3875 5.71252C22.7958 6.75418 23 7.85002 23 9.00002ZM18.45 9.00002C18.45 9.53335 18.3667 10.0458 18.2 10.5375C18.0333 11.0292 17.8 11.4833 17.5 11.9C17.3167 12.15 17.0708 12.2792 16.7625 12.2875C16.4542 12.2958 16.1833 12.1833 15.95 11.95C15.7333 11.7333 15.6208 11.4708 15.6125 11.1625C15.6042 10.8542 15.675 10.5583 15.825 10.275C15.925 10.0917 16.0042 9.89168 16.0625 9.67502C16.1208 9.45835 16.15 9.23335 16.15 9.00002C16.15 8.76668 16.1208 8.54168 16.0625 8.32502C16.0042 8.10835 15.925 7.90002 15.825 7.70002C15.675 7.41668 15.6042 7.12502 15.6125 6.82502C15.6208 6.52502 15.7333 6.26668 15.95 6.05002C16.1833 5.81668 16.4542 5.70418 16.7625 5.71252C17.0708 5.72085 17.3167 5.85002 17.5 6.10002C17.8 6.51668 18.0333 6.97085 18.2 7.46252C18.3667 7.95418 18.45 8.46668 18.45 9.00002ZM9 13C7.9 13 6.95833 12.6083 6.175 11.825C5.39167 11.0417 5 10.1 5 9.00002C5 7.90002 5.39167 6.95835 6.175 6.17502C6.95833 5.39168 7.9 5.00002 9 5.00002C10.1 5.00002 11.0417 5.39168 11.825 6.17502C12.6083 6.95835 13 7.90002 13 9.00002C13 10.1 12.6083 11.0417 11.825 11.825C11.0417 12.6083 10.1 13 9 13ZM1 19V18.2C1 17.65 1.14167 17.1333 1.425 16.65C1.70833 16.1667 2.1 15.8 2.6 15.55C3.45 15.1167 4.40833 14.75 5.475 14.45C6.54167 14.15 7.71667 14 9 14C10.2833 14 11.4583 14.15 12.525 14.45C13.5917 14.75 14.55 15.1167 15.4 15.55C15.9 15.8 16.2917 16.1667 16.575 16.65C16.8583 17.1333 17 17.65 17 18.2V19C17 19.55 16.8042 20.0208 16.4125 20.4125C16.0208 20.8042 15.55 21 15 21H3C2.45 21 1.97917 20.8042 1.5875 20.4125C1.19583 20.0208 1 19.55 1 19Z" }),
      " "
    ]
  }
), vl = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M7 17C5.61667 17 4.4375 16.5125 3.4625 15.5375C2.4875 14.5625 2 13.3833 2 12C2 10.6167 2.4875 9.4375 3.4625 8.4625C4.4375 7.4875 5.61667 7 7 7H10C10.2833 7 10.5208 7.09583 10.7125 7.2875C10.9042 7.47917 11 7.71667 11 8C11 8.28333 10.9042 8.52083 10.7125 8.7125C10.5208 8.90417 10.2833 9 10 9H7C6.16667 9 5.45833 9.29167 4.875 9.875C4.29167 10.4583 4 11.1667 4 12C4 12.8333 4.29167 13.5417 4.875 14.125C5.45833 14.7083 6.16667 15 7 15H10C10.2833 15 10.5208 15.0958 10.7125 15.2875C10.9042 15.4792 11 15.7167 11 16C11 16.2833 10.9042 16.5208 10.7125 16.7125C10.5208 16.9042 10.2833 17 10 17H7ZM9 13C8.71667 13 8.47917 12.9042 8.2875 12.7125C8.09583 12.5208 8 12.2833 8 12C8 11.7167 8.09583 11.4792 8.2875 11.2875C8.47917 11.0958 8.71667 11 9 11H15C15.2833 11 15.5208 11.0958 15.7125 11.2875C15.9042 11.4792 16 11.7167 16 12C16 12.2833 15.9042 12.5208 15.7125 12.7125C15.5208 12.9042 15.2833 13 15 13H9ZM14 17C13.7167 17 13.4792 16.9042 13.2875 16.7125C13.0958 16.5208 13 16.2833 13 16C13 15.7167 13.0958 15.4792 13.2875 15.2875C13.4792 15.0958 13.7167 15 14 15H17C17.8333 15 18.5417 14.7083 19.125 14.125C19.7083 13.5417 20 12.8333 20 12C20 11.1667 19.7083 10.4583 19.125 9.875C18.5417 9.29167 17.8333 9 17 9H14C13.7167 9 13.4792 8.90417 13.2875 8.7125C13.0958 8.52083 13 8.28333 13 8C13 7.71667 13.0958 7.47917 13.2875 7.2875C13.4792 7.09583 13.7167 7 14 7H17C18.3833 7 19.5625 7.4875 20.5375 8.4625C21.5125 9.4375 22 10.6167 22 12C22 13.3833 21.5125 14.5625 20.5375 15.5375C19.5625 16.5125 18.3833 17 17 17H14Z" }),
      " "
    ]
  }
), ml = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M10.475 22C10.0083 22 9.57082 21.9 9.16249 21.7C8.75416 21.5 8.40832 21.2167 8.12499 20.85L3.09999 14.475C2.96666 14.325 2.90832 14.1458 2.92499 13.9375C2.94166 13.7292 3.01666 13.5583 3.14999 13.425C3.48332 13.075 3.88332 12.8667 4.34999 12.8C4.81666 12.7333 5.24999 12.825 5.64999 13.075L7.49999 14.2V6C7.49999 5.71667 7.59582 5.47917 7.78749 5.2875C7.97916 5.09583 8.21666 5 8.49999 5C8.78332 5 9.02499 5.09583 9.22499 5.2875C9.42499 5.47917 9.52499 5.71667 9.52499 6V11H17C17.8333 11 18.5417 11.2917 19.125 11.875C19.7083 12.4583 20 13.1667 20 14V18C20 19.1 19.6083 20.0417 18.825 20.825C18.0417 21.6083 17.1 22 16 22H10.475ZM11.975 9C11.6917 9 11.4542 8.90417 11.2625 8.7125C11.0708 8.52083 10.975 8.28333 10.975 8C10.975 7.96667 11.0167 7.8 11.1 7.5C11.2333 7.26667 11.3333 7.02917 11.4 6.7875C11.4667 6.54583 11.5 6.28333 11.5 6C11.5 5.16667 11.2083 4.45833 10.625 3.875C10.0417 3.29167 9.33332 3 8.49999 3C7.66666 3 6.95832 3.29167 6.37499 3.875C5.79166 4.45833 5.49999 5.16667 5.49999 6C5.49999 6.28333 5.53332 6.54583 5.59999 6.7875C5.66666 7.02917 5.76666 7.26667 5.89999 7.5C5.94999 7.58333 5.98332 7.66667 5.99999 7.75C6.01666 7.83333 6.02499 7.91667 6.02499 8C6.02499 8.28333 5.93332 8.52083 5.74999 8.7125C5.56666 8.90417 5.33332 9 5.04999 9C4.86666 9 4.69582 8.95 4.53749 8.85C4.37916 8.75 4.25832 8.625 4.17499 8.475C3.95832 8.10833 3.79166 7.71667 3.67499 7.3C3.55832 6.88333 3.49999 6.45 3.49999 6C3.49999 4.61667 3.98749 3.4375 4.96249 2.4625C5.93749 1.4875 7.11666 1 8.49999 1C9.88332 1 11.0625 1.4875 12.0375 2.4625C13.0125 3.4375 13.5 4.61667 13.5 6C13.5 6.45 13.4417 6.88333 13.325 7.3C13.2083 7.71667 13.0417 8.10833 12.825 8.475C12.7417 8.625 12.625 8.75 12.475 8.85C12.325 8.95 12.1583 9 11.975 9Z" }),
      " "
    ]
  }
), Uo = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M13 17.05C13.7333 16.7 14.4708 16.4375 15.2125 16.2625C15.9542 16.0875 16.7167 16 17.5 16C18.1 16 18.6875 16.05 19.2625 16.15C19.8375 16.25 20.4167 16.4 21 16.6V6.7C20.45 6.46667 19.8792 6.29167 19.2875 6.175C18.6958 6.05833 18.1 6 17.5 6C16.7167 6 15.9417 6.1 15.175 6.3C14.4083 6.5 13.6833 6.8 13 7.2V17.05ZM12 19.475C11.7667 19.475 11.5458 19.4458 11.3375 19.3875C11.1292 19.3292 10.9333 19.25 10.75 19.15C10.1 18.7667 9.41667 18.4792 8.7 18.2875C7.98333 18.0958 7.25 18 6.5 18C5.8 18 5.1125 18.0917 4.4375 18.275C3.7625 18.4583 3.11667 18.7167 2.5 19.05C2.15 19.2333 1.8125 19.225 1.4875 19.025C1.1625 18.825 1 18.5333 1 18.15V6.1C1 5.91667 1.04583 5.74167 1.1375 5.575C1.22917 5.40833 1.36667 5.28333 1.55 5.2C2.33333 4.81667 3.1375 4.52083 3.9625 4.3125C4.7875 4.10417 5.63333 4 6.5 4C7.46667 4 8.4125 4.125 9.3375 4.375C10.2625 4.625 11.15 5 12 5.5C12.85 5 13.7375 4.625 14.6625 4.375C15.5875 4.125 16.5333 4 17.5 4C18.3667 4 19.2125 4.10417 20.0375 4.3125C20.8625 4.52083 21.6667 4.81667 22.45 5.2C22.6333 5.28333 22.7708 5.40833 22.8625 5.575C22.9542 5.74167 23 5.91667 23 6.1V18.15C23 18.5333 22.8375 18.825 22.5125 19.025C22.1875 19.225 21.85 19.2333 21.5 19.05C20.8833 18.7167 20.2375 18.4583 19.5625 18.275C18.8875 18.0917 18.2 18 17.5 18C16.75 18 16.0167 18.0958 15.3 18.2875C14.5833 18.4792 13.9 18.7667 13.25 19.15C13.0667 19.25 12.8708 19.3292 12.6625 19.3875C12.4542 19.4458 12.2333 19.475 12 19.475ZM14 8.775C14 8.625 14.0542 8.47083 14.1625 8.3125C14.2708 8.15417 14.3917 8.05 14.525 8C15.0083 7.83333 15.4917 7.70833 15.975 7.625C16.4583 7.54167 16.9667 7.5 17.5 7.5C17.8333 7.5 18.1625 7.52083 18.4875 7.5625C18.8125 7.60417 19.1333 7.65833 19.45 7.725C19.6 7.75833 19.7292 7.84167 19.8375 7.975C19.9458 8.10833 20 8.25833 20 8.425C20 8.70833 19.9083 8.91667 19.725 9.05C19.5417 9.18333 19.3083 9.21667 19.025 9.15C18.7917 9.1 18.5458 9.0625 18.2875 9.0375C18.0292 9.0125 17.7667 9 17.5 9C17.0667 9 16.6417 9.04167 16.225 9.125C15.8083 9.20833 15.4083 9.31667 15.025 9.45C14.725 9.56667 14.4792 9.55833 14.2875 9.425C14.0958 9.29167 14 9.075 14 8.775ZM14 14.275C14 14.125 14.0542 13.9708 14.1625 13.8125C14.2708 13.6542 14.3917 13.55 14.525 13.5C15.0083 13.3333 15.4917 13.2083 15.975 13.125C16.4583 13.0417 16.9667 13 17.5 13C17.8333 13 18.1625 13.0208 18.4875 13.0625C18.8125 13.1042 19.1333 13.1583 19.45 13.225C19.6 13.2583 19.7292 13.3417 19.8375 13.475C19.9458 13.6083 20 13.7583 20 13.925C20 14.2083 19.9083 14.4167 19.725 14.55C19.5417 14.6833 19.3083 14.7167 19.025 14.65C18.7917 14.6 18.5458 14.5625 18.2875 14.5375C18.0292 14.5125 17.7667 14.5 17.5 14.5C17.0667 14.5 16.6417 14.5375 16.225 14.6125C15.8083 14.6875 15.4083 14.7917 15.025 14.925C14.725 15.0417 14.4792 15.0375 14.2875 14.9125C14.0958 14.7875 14 14.575 14 14.275ZM14 11.525C14 11.375 14.0542 11.2208 14.1625 11.0625C14.2708 10.9042 14.3917 10.8 14.525 10.75C15.0083 10.5833 15.4917 10.4583 15.975 10.375C16.4583 10.2917 16.9667 10.25 17.5 10.25C17.8333 10.25 18.1625 10.2708 18.4875 10.3125C18.8125 10.3542 19.1333 10.4083 19.45 10.475C19.6 10.5083 19.7292 10.5917 19.8375 10.725C19.9458 10.8583 20 11.0083 20 11.175C20 11.4583 19.9083 11.6667 19.725 11.8C19.5417 11.9333 19.3083 11.9667 19.025 11.9C18.7917 11.85 18.5458 11.8125 18.2875 11.7875C18.0292 11.7625 17.7667 11.75 17.5 11.75C17.0667 11.75 16.6417 11.7917 16.225 11.875C15.8083 11.9583 15.4083 12.0667 15.025 12.2C14.725 12.3167 14.4792 12.3083 14.2875 12.175C14.0958 12.0417 14 11.825 14 11.525Z" }),
      " "
    ]
  }
), Bn = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
  "svg",
  {
    width: e * 1,
    height: e * 0.4,
    viewBox: "0 0 32 13",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M16 3L28 13H4L16 3Z", fill: "#2670E8" }),
      /* @__PURE__ */ o(
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
), Cl = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M7.74687 1.00812C7.66942 1.02044 7.51497 1.11665 7.40368 1.22196C7.20272 1.41219 7.20164 1.41645 7.24371 1.87875C7.26705 2.1347 7.31392 2.69232 7.34776 3.11796C7.61178 6.43593 7.65513 7.42951 7.53904 7.5022C7.34378 7.62448 7.23611 7.43996 5.4151 3.86266C4.79087 2.63635 4.67189 2.50711 4.2859 2.63614C3.67367 2.84085 3.72185 3.15023 4.69994 5.29459C4.82544 5.56968 4.92804 5.80618 4.92804 5.82021C4.92804 5.83432 5.03816 6.08815 5.17297 6.38423C5.90324 7.98987 6.09352 8.6429 5.85782 8.73457C5.69079 8.79947 5.39329 8.63804 5.14872 8.34994C5.02431 8.20336 4.87122 8.02534 4.80861 7.95439C4.7459 7.88354 4.56811 7.66583 4.41348 7.47076C4.25885 7.27569 4.11761 7.10162 4.0996 7.08383C4.0816 7.06614 3.78704 6.71341 3.4451 6.29999C3.10309 5.88657 2.77897 5.53109 2.72474 5.51001C2.41291 5.38882 2 5.62798 2 5.92975C2 6.1932 2.62513 7.25305 3.92633 9.19547C4.74183 10.4127 4.93347 10.851 5.11805 11.9204C5.50893 14.1859 6.04086 15.5747 6.72906 16.1271C7.19756 16.5032 7.21077 16.506 8.31382 16.4582L9.32404 16.4145L10.0917 15.3766C10.5139 14.8057 10.8924 14.2951 10.9331 14.2418C11.2275 13.8553 11.9934 12.4858 11.9934 12.346C11.9934 12.326 11.5954 12.3281 11.1089 12.3505C10.51 12.3781 10.0939 12.3655 9.81996 12.3116C9.34503 12.2179 8.74686 11.9422 8.41869 11.6655C7.90078 11.2289 7.74859 10.454 8.07143 9.89599C8.31256 9.47909 8.64688 9.30024 9.34964 9.21197C9.91759 9.14074 10.5252 8.97299 11.4046 8.64492L11.8661 8.47277V7.71973C11.8661 6.94826 12.0114 4.25775 12.1217 2.98899C12.2083 1.99134 12.2097 2.00218 11.968 1.75726C11.8009 1.58811 11.6985 1.53801 11.5195 1.53801C11.0687 1.53801 11.0441 1.60107 10.5976 3.89255C10.3765 5.02711 10.1557 6.18752 10.1069 6.47123C10.0003 7.09053 9.9166 7.31878 9.77581 7.3735C9.59186 7.44509 9.41968 7.15323 9.33698 6.62999C9.29518 6.36535 9.18624 5.66997 9.09485 5.08477C8.92565 4.00081 8.58735 1.97013 8.51505 1.60372C8.47162 1.38388 8.1867 1.05499 8.00266 1.01237C7.93951 0.99773 7.82441 0.995796 7.74687 1.00812ZM16.2263 7.64538C15.9431 7.71349 15.12 8.01544 14.7447 8.18897C14.5251 8.29054 14.3287 8.37358 14.3083 8.37358C14.288 8.37358 13.7516 8.63383 13.1164 8.952C11.7752 9.62364 10.2221 10.1791 9.68469 10.1793C9.31526 10.1794 8.91769 10.3451 8.88702 10.5115C8.85291 10.6978 9.23971 11.0663 9.62615 11.2154C9.9688 11.3476 10.0583 11.3531 11.2858 11.3164C12.3829 11.2837 12.6156 11.2932 12.7917 11.3779C13.0946 11.5234 13.1779 11.7716 13.0775 12.2305C12.9753 12.6983 12.4059 13.8553 11.947 14.5277C11.6488 14.9647 9.87371 17.3579 8.84259 18.7132C8.47461 19.197 8.45814 19.4434 8.77256 19.762C9.17981 20.1745 9.12724 20.2112 11.3156 17.9827C13.3582 15.9029 13.5287 15.7665 13.6211 16.1396C13.6772 16.3662 13.6901 16.3331 12.782 18.2958C12.6283 18.6278 12.5026 18.9087 12.5026 18.9198C12.5026 18.9309 12.3989 19.167 12.2723 19.4445C11.2318 21.7231 11.1894 21.8762 11.4905 22.2639C11.5982 22.4027 11.6723 22.4313 11.9185 22.4297C12.0822 22.4286 12.2603 22.3923 12.3142 22.349C12.3682 22.3058 12.6808 21.7772 13.009 21.1742C13.584 20.1178 13.9216 19.5059 14.2076 19.0011C15.2641 17.1362 15.2589 17.1438 15.4502 17.1438C15.5724 17.1438 15.5758 17.1739 15.538 17.9338C15.5035 18.6276 15.4165 19.4544 15.1769 21.3677C15.0863 22.09 15.0979 22.6972 15.2049 22.8402C15.3309 23.0086 15.7683 23.0562 15.9687 22.9233C16.1743 22.7867 16.2702 22.4417 16.5086 20.9808C17.0134 17.8841 17.14 17.2951 17.34 17.1118C17.4632 16.9988 17.472 16.9989 17.6007 17.1169C17.6739 17.1841 17.7601 17.2887 17.7921 17.3494C17.8242 17.41 17.9206 18.1358 18.0065 18.9623C18.2479 21.2883 18.2687 21.4088 18.4576 21.5773C18.6664 21.7635 18.8796 21.7613 19.0981 21.571C19.2645 21.426 19.2741 21.3836 19.3292 20.5554C19.3608 20.08 19.3739 19.1397 19.3582 18.4657C19.3278 17.1534 19.3875 16.0546 19.5099 15.6715C19.5515 15.5414 19.7501 15.0432 19.9513 14.5643C20.1526 14.0855 20.4383 13.3165 20.5862 12.8554C21.0422 11.4342 21.0078 10.2932 20.4931 9.76903C20.3838 9.65775 20.0548 9.43637 19.7619 9.27714C19.3877 9.07383 19.0357 8.80332 18.5784 8.36772C18.056 7.87024 17.8702 7.73311 17.6375 7.67371C17.3547 7.60166 16.4811 7.58406 16.2263 7.64538ZM21.1923 9.53069C21.1675 9.60989 21.2138 9.82614 21.3071 10.0665C21.5134 10.5978 21.5604 11.0656 21.4707 11.6947C21.3551 12.5054 21.3599 12.5943 21.5214 12.6176C21.7393 12.649 21.8504 12.3982 21.9315 11.6911C22.0198 10.9209 21.9423 10.334 21.6807 9.79231C21.4926 9.40282 21.2697 9.28347 21.1923 9.53069ZM22.3483 9.75326C22.3295 9.80267 22.372 10.0276 22.4425 10.253C22.6088 10.7841 22.5769 11.6232 22.366 12.2625C22.234 12.6626 22.2301 12.7103 22.3218 12.8033C22.5391 13.0235 22.7617 12.7194 22.9131 11.9954C23.0736 11.2284 23.006 10.2756 22.7576 9.80542C22.6731 9.64546 22.4022 9.6109 22.3483 9.75326ZM4.7516 15.2847C4.6205 15.4175 4.66339 15.6069 4.9389 16.112C5.4065 16.9693 6.53615 17.9508 6.7999 17.7292C6.98675 17.5721 6.91282 17.4272 6.5205 17.1819C6.03028 16.8754 5.59868 16.3776 5.27512 15.7453C5.01716 15.2414 4.898 15.1365 4.7516 15.2847ZM3.84671 15.6918C3.74599 15.8148 3.82653 16.119 4.12023 16.7246C4.52341 17.556 5.39555 18.4088 5.71531 18.2844C5.8846 18.2187 5.84099 17.9585 5.64067 17.8386C5.10936 17.5206 4.59317 16.8063 4.323 16.0153C4.18248 15.6036 4.01319 15.4886 3.84671 15.6918Z" }),
      " "
    ]
  }
), yl = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M8.5 22C8.08333 22 7.72917 21.8542 7.4375 21.5625C7.14583 21.2708 7 20.9167 7 20.5V7.5C7 7.08333 7.14583 6.72917 7.4375 6.4375C7.72917 6.14583 8.08333 6 8.5 6C8.91667 6 9.27083 6.14583 9.5625 6.4375C9.85417 6.72917 10 7.08333 10 7.5V20.5C10 20.9167 9.85417 21.2708 9.5625 21.5625C9.27083 21.8542 8.91667 22 8.5 22ZM15.5 16C15.0833 16 14.7292 15.8542 14.4375 15.5625C14.1458 15.2708 14 14.9167 14 14.5V7.5C14 7.08333 14.1458 6.72917 14.4375 6.4375C14.7292 6.14583 15.0833 6 15.5 6C15.9167 6 16.2708 6.14583 16.5625 6.4375C16.8542 6.72917 17 7.08333 17 7.5V14.5C17 14.9167 16.8542 15.2708 16.5625 15.5625C16.2708 15.8542 15.9167 16 15.5 16ZM3 4C2.71667 4 2.47917 3.90417 2.2875 3.7125C2.09583 3.52083 2 3.28333 2 3C2 2.71667 2.09583 2.47917 2.2875 2.2875C2.47917 2.09583 2.71667 2 3 2H21C21.2833 2 21.5208 2.09583 21.7125 2.2875C21.9042 2.47917 22 2.71667 22 3C22 3.28333 21.9042 3.52083 21.7125 3.7125C21.5208 3.90417 21.2833 4 21 4H3Z" }),
      " "
    ]
  }
), bl = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M3 22C2.71667 22 2.47917 21.9042 2.2875 21.7125C2.09583 21.5208 2 21.2833 2 21C2 20.7167 2.09583 20.4792 2.2875 20.2875C2.47917 20.0958 2.71667 20 3 20H21C21.2833 20 21.5208 20.0958 21.7125 20.2875C21.9042 20.4792 22 20.7167 22 21C22 21.2833 21.9042 21.5208 21.7125 21.7125C21.5208 21.9042 21.2833 22 21 22H3ZM8.5 18C8.08333 18 7.72917 17.8542 7.4375 17.5625C7.14583 17.2708 7 16.9167 7 16.5V3.5C7 3.08333 7.14583 2.72917 7.4375 2.4375C7.72917 2.14583 8.08333 2 8.5 2C8.91667 2 9.27083 2.14583 9.5625 2.4375C9.85417 2.72917 10 3.08333 10 3.5V16.5C10 16.9167 9.85417 17.2708 9.5625 17.5625C9.27083 17.8542 8.91667 18 8.5 18ZM15.5 18C15.0833 18 14.7292 17.8542 14.4375 17.5625C14.1458 17.2708 14 16.9167 14 16.5V9.5C14 9.08333 14.1458 8.72917 14.4375 8.4375C14.7292 8.14583 15.0833 8 15.5 8C15.9167 8 16.2708 8.14583 16.5625 8.4375C16.8542 8.72917 17 9.08333 17 9.5V16.5C17 16.9167 16.8542 17.2708 16.5625 17.5625C16.2708 17.8542 15.9167 18 15.5 18Z" }),
      " "
    ]
  }
), Go = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M7.85894 17.8215C7.69777 17.8215 7.5603 17.7803 7.44654 17.6979C7.34225 17.6064 7.29011 17.4783 7.29011 17.3135V17.1625C6.68336 17.7208 5.85856 18 4.8157 18C4.39856 18 4.0146 17.9405 3.66382 17.8215C3.32253 17.7117 3.02863 17.5515 2.78214 17.341C2.53565 17.1213 2.3413 16.8604 2.19909 16.5584C2.06636 16.2563 2 15.9176 2 15.5423C2 14.6545 2.3176 13.9954 2.95279 13.5652C3.58798 13.135 4.50759 12.9199 5.71161 12.9199H7.16212C7.20952 12.9199 7.24271 12.9382 7.26167 12.9748C7.28063 13.0114 7.29011 13.0206 7.29011 13.0023C7.29011 12.508 7.13368 12.1236 6.82082 11.849C6.50797 11.5652 5.99602 11.405 5.28499 11.3684C4.93421 11.3501 4.58817 11.3776 4.24687 11.4508C3.91506 11.524 3.59272 11.6247 3.27986 11.7529C3.09974 11.8261 2.93383 11.8307 2.78214 11.7666C2.63993 11.6934 2.56883 11.5561 2.56883 11.3547V11.0801C2.56883 10.8146 2.71104 10.6316 2.99545 10.5309C3.82973 10.2563 4.64031 10.119 5.42719 10.119C7.80679 10.119 8.99659 11.2632 8.99659 13.5515V17.3135C8.99659 17.46 8.94919 17.5835 8.85439 17.6842C8.75958 17.7757 8.62212 17.8215 8.44199 17.8215H7.85894ZM5.6405 14.1831C5.2044 14.1831 4.84888 14.2014 4.57395 14.238C4.3085 14.2746 4.09519 14.3295 3.93402 14.4027C3.78233 14.476 3.6733 14.5675 3.60694 14.6773C3.55006 14.7872 3.51688 14.9153 3.5074 15.0618C3.49792 15.1167 3.49318 15.167 3.49318 15.2128C3.50266 15.2494 3.51688 15.2952 3.53584 15.3501C3.61168 15.5515 3.76337 15.6796 3.9909 15.7346C4.21843 15.7895 4.55973 15.8169 5.01479 15.8169C5.29921 15.8169 5.54096 15.8032 5.74005 15.7757C5.93914 15.7391 6.10031 15.6705 6.22355 15.5698C6.3468 15.46 6.43686 15.3043 6.49375 15.103C6.55063 14.9016 6.57907 14.627 6.57907 14.2792C6.57907 14.2426 6.56959 14.2197 6.55063 14.2105C6.54115 14.1922 6.50797 14.1831 6.45109 14.1831H5.6405Z" }),
      /* @__PURE__ */ o("path", { d: "M19.7531 17.8078C19.592 17.8078 19.4498 17.7712 19.3265 17.6979C19.2127 17.6156 19.1322 17.492 19.0848 17.3272L18.7861 16.0778C18.7672 15.9954 18.7435 15.9451 18.715 15.9268C18.6866 15.8993 18.6297 15.8856 18.5444 15.8856H14.1075C14.0032 15.8856 13.9369 15.8993 13.9084 15.9268C13.88 15.9451 13.861 15.9771 13.8515 16.0229L13.6098 17.3272C13.5813 17.5011 13.5007 17.6247 13.368 17.6979C13.2448 17.7712 13.1026 17.8078 12.9414 17.8078H11.2349C11.0737 17.8078 10.9315 17.7712 10.8083 17.6979C10.6945 17.6156 10.6376 17.4966 10.6376 17.341C10.6376 17.2586 10.6566 17.1762 10.6945 17.0938L15.2309 6.4119C15.3447 6.1373 15.5675 6 15.8993 6H16.7526C17.0844 6 17.3072 6.1373 17.4209 6.4119L21.9431 17.0938C21.981 17.1762 22 17.2586 22 17.341C22 17.4966 21.9384 17.6156 21.8151 17.6979C21.7014 17.7712 21.5686 17.8078 21.417 17.8078H19.7531ZM16.3259 9.14416L14.7332 13.5789C14.7237 13.5881 14.719 13.6156 14.719 13.6613C14.719 13.7071 14.7711 13.73 14.8754 13.73H17.7764C17.8523 13.73 17.895 13.7208 17.9044 13.7025C17.9234 13.6842 17.9329 13.6705 17.9329 13.6613C17.9329 13.6064 17.9281 13.5744 17.9187 13.5652L16.3259 9.14416Z" }),
      " "
    ]
  }
), _l = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M16.775 19.575C16.5917 19.6916 16.4083 19.8 16.225 19.9C16.0417 20 15.85 20.0916 15.65 20.175C15.4 20.2916 15.1458 20.2916 14.8875 20.175C14.6292 20.0583 14.45 19.8666 14.35 19.6C14.25 19.35 14.2625 19.1041 14.3875 18.8625C14.5125 18.6208 14.7 18.4416 14.95 18.325C15.0167 18.2916 15.0792 18.2583 15.1375 18.225C15.1958 18.1916 15.2583 18.1583 15.325 18.125L12 14.8V17.575C12 18.025 11.7958 18.3375 11.3875 18.5125C10.9792 18.6875 10.6167 18.6166 10.3 18.3L7 15H4C3.71666 15 3.47916 14.9041 3.2875 14.7125C3.09583 14.5208 3 14.2833 3 14V9.99998C3 9.71664 3.09583 9.47914 3.2875 9.28748C3.47916 9.09581 3.71666 8.99998 4 8.99998H6.2L2.1 4.89998C1.91666 4.71664 1.825 4.48331 1.825 4.19998C1.825 3.91664 1.91666 3.68331 2.1 3.49998C2.28333 3.31664 2.51666 3.22498 2.8 3.22498C3.08333 3.22498 3.31666 3.31664 3.5 3.49998L20.5 20.5C20.6833 20.6833 20.775 20.9166 20.775 21.2C20.775 21.4833 20.6833 21.7166 20.5 21.9C20.3167 22.0833 20.0833 22.175 19.8 22.175C19.5167 22.175 19.2833 22.0833 19.1 21.9L16.775 19.575ZM19 11.975C19 10.5916 18.6333 9.32914 17.9 8.18748C17.1667 7.04581 16.1833 6.19164 14.95 5.62498C14.7 5.50831 14.5167 5.32914 14.4 5.08748C14.2833 4.84581 14.2667 4.59998 14.35 4.34998C14.45 4.08331 14.6292 3.89164 14.8875 3.77498C15.1458 3.65831 15.4083 3.65831 15.675 3.77498C17.2917 4.49164 18.5833 5.58331 19.55 7.04998C20.5167 8.51664 21 10.1583 21 11.975C21 12.525 20.95 13.0708 20.85 13.6125C20.75 14.1541 20.6083 14.675 20.425 15.175C20.2917 15.5416 20.0875 15.7708 19.8125 15.8625C19.5375 15.9541 19.2833 15.9583 19.05 15.875C18.8167 15.7916 18.6292 15.6416 18.4875 15.425C18.3458 15.2083 18.3417 14.9583 18.475 14.675C18.6583 14.2416 18.7917 13.8041 18.875 13.3625C18.9583 12.9208 19 12.4583 19 11.975ZM14.775 8.42498C15.325 8.77498 15.75 9.29998 16.05 9.99998C16.35 10.7 16.5 11.3666 16.5 12V12.25C16.5 12.3333 16.4917 12.4166 16.475 12.5C16.4417 12.7166 16.325 12.8583 16.125 12.925C15.925 12.9916 15.7417 12.9416 15.575 12.775L14.3 11.5C14.2 11.4 14.125 11.2875 14.075 11.1625C14.025 11.0375 14 10.9083 14 10.775V8.84998C14 8.64998 14.0875 8.50414 14.2625 8.41248C14.4375 8.32081 14.6083 8.32498 14.775 8.42498ZM9.75 6.94998C9.65 6.84998 9.6 6.73331 9.6 6.59998C9.6 6.46664 9.65 6.34998 9.75 6.24998L10.3 5.69998C10.6167 5.38331 10.9792 5.31248 11.3875 5.48748C11.7958 5.66248 12 5.97498 12 6.42498V7.99998C12 8.23331 11.9 8.39164 11.7 8.47498C11.5 8.55831 11.3167 8.51664 11.15 8.34998L9.75 6.94998Z" }),
      " "
    ]
  }
), wl = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M12 10.8L8.1 14.7C7.91667 14.8834 7.68334 14.975 7.4 14.975C7.11667 14.975 6.88334 14.8834 6.7 14.7C6.51667 14.5167 6.425 14.2834 6.425 14C6.425 13.7167 6.51667 13.4834 6.7 13.3L11.3 8.70002C11.5 8.50002 11.7333 8.40002 12 8.40002C12.2667 8.40002 12.5 8.50002 12.7 8.70002L17.3 13.3C17.4833 13.4834 17.575 13.7167 17.575 14C17.575 14.2834 17.4833 14.5167 17.3 14.7C17.1167 14.8834 16.8833 14.975 16.6 14.975C16.3167 14.975 16.0833 14.8834 15.9 14.7L12 10.8Z" }),
      " "
    ]
  }
), xl = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M12 4.00305C11.9087 4.00102 11.817 4 11.725 4C9.49167 4 7.45417 4.6 5.6125 5.8C3.77083 7 2.31667 8.58333 1.25 10.55C1.16667 10.7 1.10417 10.8542 1.0625 11.0125C1.02083 11.1708 1 11.3333 1 11.5C1 11.6667 1.02083 11.8292 1.0625 11.9875C1.10417 12.1458 1.16667 12.3 1.25 12.45C2.31667 14.4167 3.77083 16 5.6125 17.2C7.45417 18.4 9.49167 19 11.725 19C11.817 19 11.9087 18.999 12 18.9969V15.9928C11.9094 15.9976 11.8177 16 11.725 16C10.475 16 9.4125 15.5625 8.5375 14.6875C7.6625 13.8125 7.225 12.75 7.225 11.5C7.225 10.25 7.6625 9.1875 8.5375 8.3125C9.4125 7.4375 10.475 7 11.725 7C11.8177 7 11.9094 7.00241 12 7.00722V4.00305Z" }),
      /* @__PURE__ */ o("path", { d: "M12 8.81222C11.9101 8.80407 11.8184 8.8 11.725 8.8C10.975 8.8 10.3375 9.0625 9.8125 9.5875C9.2875 10.1125 9.025 10.75 9.025 11.5C9.025 12.25 9.2875 12.8875 9.8125 13.4125C10.3375 13.9375 10.975 14.2 11.725 14.2C11.8184 14.2 11.9101 14.1959 12 14.1878V8.81222Z" }),
      /* @__PURE__ */ o("path", { d: "M12 18.9939C14.1259 18.9465 16.0717 18.3475 17.8375 17.1969C19.6792 15.9969 21.1333 14.4136 22.2 12.4469C22.2833 12.2969 22.3458 12.1428 22.3875 11.9844C22.4292 11.8261 22.45 11.6636 22.45 11.4969C22.45 11.3303 22.4292 11.1678 22.3875 11.0094C22.3458 10.8511 22.2833 10.6969 22.2 10.5469C21.1333 8.58028 19.6792 6.99695 17.8375 5.79695C16.0717 4.64638 14.1259 4.0474 12 4V6.0005C13.777 6.04659 15.4145 6.54124 16.9125 7.48445C18.4875 8.47611 19.6917 9.81361 20.525 11.4969C19.6917 13.1803 18.4875 14.5178 16.9125 15.5094C15.4145 16.4527 13.777 16.9473 12 16.9934V18.9939Z" }),
      /* @__PURE__ */ o("path", { d: "M12 15.9897C13.1316 15.9297 14.1024 15.4946 14.9125 14.6844C15.7875 13.8094 16.225 12.7469 16.225 11.4969C16.225 10.2469 15.7875 9.18445 14.9125 8.30945C14.1024 7.49933 13.1316 7.06424 12 7.00416V8.80916C12.6321 8.86641 13.1779 9.12483 13.6375 9.58445C14.1625 10.1094 14.425 10.7469 14.425 11.4969C14.425 12.2469 14.1625 12.8844 13.6375 13.4094C13.1779 13.8691 12.6321 14.1275 12 14.1847V15.9897Z" }),
      " "
    ]
  }
), Al = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M12 22C10.6333 22 9.34167 21.7375 8.125 21.2125C6.90833 20.6875 5.84583 19.9708 4.9375 19.0625C4.02917 18.1542 3.3125 17.0917 2.7875 15.875C2.2625 14.6583 2 13.3667 2 12C2 10.6167 2.27083 9.31667 2.8125 8.1C3.35417 6.88333 4.0875 5.825 5.0125 4.925C5.9375 4.025 7.01667 3.3125 8.25 2.7875C9.48333 2.2625 10.8 2 12.2 2C13.5333 2 14.7917 2.22917 15.975 2.6875C17.1583 3.14583 18.1958 3.77917 19.0875 4.5875C19.9792 5.39583 20.6875 6.35417 21.2125 7.4625C21.7375 8.57083 22 9.76667 22 11.05C22 12.9667 21.4167 14.4375 20.25 15.4625C19.0833 16.4875 17.6667 17 16 17H14.15C14 17 13.8958 17.0417 13.8375 17.125C13.7792 17.2083 13.75 17.3 13.75 17.4C13.75 17.6 13.875 17.8875 14.125 18.2625C14.375 18.6375 14.5 19.0667 14.5 19.55C14.5 20.3833 14.2708 21 13.8125 21.4C13.3542 21.8 12.75 22 12 22ZM6.5 13C6.93333 13 7.29167 12.8583 7.575 12.575C7.85833 12.2917 8 11.9333 8 11.5C8 11.0667 7.85833 10.7083 7.575 10.425C7.29167 10.1417 6.93333 10 6.5 10C6.06667 10 5.70833 10.1417 5.425 10.425C5.14167 10.7083 5 11.0667 5 11.5C5 11.9333 5.14167 12.2917 5.425 12.575C5.70833 12.8583 6.06667 13 6.5 13ZM9.5 9C9.93333 9 10.2917 8.85833 10.575 8.575C10.8583 8.29167 11 7.93333 11 7.5C11 7.06667 10.8583 6.70833 10.575 6.425C10.2917 6.14167 9.93333 6 9.5 6C9.06667 6 8.70833 6.14167 8.425 6.425C8.14167 6.70833 8 7.06667 8 7.5C8 7.93333 8.14167 8.29167 8.425 8.575C8.70833 8.85833 9.06667 9 9.5 9ZM14.5 9C14.9333 9 15.2917 8.85833 15.575 8.575C15.8583 8.29167 16 7.93333 16 7.5C16 7.06667 15.8583 6.70833 15.575 6.425C15.2917 6.14167 14.9333 6 14.5 6C14.0667 6 13.7083 6.14167 13.425 6.425C13.1417 6.70833 13 7.06667 13 7.5C13 7.93333 13.1417 8.29167 13.425 8.575C13.7083 8.85833 14.0667 9 14.5 9ZM17.5 13C17.9333 13 18.2917 12.8583 18.575 12.575C18.8583 12.2917 19 11.9333 19 11.5C19 11.0667 18.8583 10.7083 18.575 10.425C18.2917 10.1417 17.9333 10 17.5 10C17.0667 10 16.7083 10.1417 16.425 10.425C16.1417 10.7083 16 11.0667 16 11.5C16 11.9333 16.1417 12.2917 16.425 12.575C16.7083 12.8583 17.0667 13 17.5 13Z" }),
      " "
    ]
  }
), kl = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M10 22C8.61667 22 7.4375 21.5125 6.4625 20.5375C5.4875 19.5625 5 18.3833 5 17C5 16.15 5.19167 15.3667 5.575 14.65C5.95833 13.9333 6.46667 13.35 7.1 12.9C7.33333 12.7333 7.58333 12.675 7.85 12.725C8.11667 12.775 8.33333 12.9167 8.5 13.15C8.66667 13.3833 8.72917 13.6333 8.6875 13.9C8.64583 14.1667 8.50833 14.3833 8.275 14.55C7.89167 14.8333 7.58333 15.1875 7.35 15.6125C7.11667 16.0375 7 16.5 7 17C7 17.8333 7.29167 18.5417 7.875 19.125C8.45833 19.7083 9.16667 20 10 20C10.5 20 10.9625 19.8833 11.3875 19.65C11.8125 19.4167 12.1667 19.1083 12.45 18.725C12.6167 18.4917 12.8333 18.3542 13.1 18.3125C13.3667 18.2708 13.6167 18.3333 13.85 18.5C14.0833 18.6667 14.225 18.8833 14.275 19.15C14.325 19.4167 14.2667 19.6667 14.1 19.9C13.65 20.5333 13.0667 21.0417 12.35 21.425C11.6333 21.8083 10.85 22 10 22ZM18 22C17.7167 22 17.4792 21.9042 17.2875 21.7125C17.0958 21.5208 17 21.2833 17 21V17H12C11.45 17 10.9792 16.8042 10.5875 16.4125C10.1958 16.0208 10 15.55 10 15V9C10 8.45 10.1958 7.97917 10.5875 7.5875C10.9792 7.19583 11.45 7 12 7C12.4 7 12.7458 7.0875 13.0375 7.2625C13.3292 7.4375 13.6417 7.71667 13.975 8.1C14.725 9 15.4042 9.65833 16.0125 10.075C16.6208 10.4917 17.275 10.7667 17.975 10.9C18.2583 10.95 18.5 11.075 18.7 11.275C18.9 11.475 19 11.7167 19 12C19 12.2833 18.8958 12.5167 18.6875 12.7C18.4792 12.8833 18.2417 12.95 17.975 12.9C17.2417 12.7667 16.5292 12.5333 15.8375 12.2C15.1458 11.8667 14.5333 11.4833 14 11.05V14.5H17C17.55 14.5 18.0208 14.6958 18.4125 15.0875C18.8042 15.4792 19 15.95 19 16.5V21C19 21.2833 18.9042 21.5208 18.7125 21.7125C18.5208 21.9042 18.2833 22 18 22ZM12 6C11.45 6 10.9792 5.80417 10.5875 5.4125C10.1958 5.02083 10 4.55 10 4C10 3.45 10.1958 2.97917 10.5875 2.5875C10.9792 2.19583 11.45 2 12 2C12.55 2 13.0208 2.19583 13.4125 2.5875C13.8042 2.97917 14 3.45 14 4C14 4.55 13.8042 5.02083 13.4125 5.4125C13.0208 5.80417 12.55 6 12 6Z" }),
      " "
    ]
  }
), Sl = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20ZM12 18C10.3333 18 8.91667 17.4167 7.75 16.25C6.58333 15.0833 6 13.6667 6 12C6 10.3333 6.58333 8.91667 7.75 7.75C8.91667 6.58333 10.3333 6 12 6C13.6667 6 15.0833 6.58333 16.25 7.75C17.4167 8.91667 18 10.3333 18 12C18 13.6667 17.4167 15.0833 16.25 16.25C15.0833 17.4167 13.6667 18 12 18ZM12 16C13.1 16 14.0417 15.6083 14.825 14.825C15.6083 14.0417 16 13.1 16 12C16 10.9 15.6083 9.95833 14.825 9.175C14.0417 8.39167 13.1 8 12 8C10.9 8 9.95833 8.39167 9.175 9.175C8.39167 9.95833 8 10.9 8 12C8 13.1 8.39167 14.0417 9.175 14.825C9.95833 15.6083 10.9 16 12 16ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14Z" }),
      " "
    ]
  }
), Ll = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M12.275 15.525C13.4417 15.525 14.4333 15.15 15.25 14.4C16.0667 13.65 16.475 12.7417 16.475 11.675C16.475 10.725 16.1708 9.92083 15.5625 9.2625C14.9542 8.60417 14.2167 8.275 13.35 8.275C12.5667 8.275 11.9042 8.525 11.3625 9.025C10.8208 9.525 10.55 10.1417 10.55 10.875C10.55 11.1917 10.6042 11.5042 10.7125 11.8125C10.8208 12.1208 11.0083 12.3917 11.275 12.625C11.5417 12.8583 11.8083 12.9542 12.075 12.9125C12.3417 12.8708 12.5583 12.7583 12.725 12.575C12.8917 12.3917 12.9875 12.1708 13.0125 11.9125C13.0375 11.6542 12.9333 11.4167 12.7 11.2C12.6667 11.1667 12.6333 11.125 12.6 11.075C12.5667 11.025 12.55 10.9667 12.55 10.9C12.55 10.7167 12.625 10.5708 12.775 10.4625C12.925 10.3542 13.1167 10.3 13.35 10.3C13.6833 10.3 13.9583 10.4375 14.175 10.7125C14.3917 10.9875 14.5 11.3167 14.5 11.7C14.5 12.2167 14.2875 12.6542 13.8625 13.0125C13.4375 13.3708 12.9167 13.55 12.3 13.55C11.5167 13.55 10.8542 13.2333 10.3125 12.6C9.77083 11.9667 9.5 11.1917 9.5 10.275C9.5 9.95833 9.5375 9.65 9.6125 9.35C9.6875 9.05 9.8 8.76667 9.95 8.5C10.0833 8.25 10.15 7.9875 10.15 7.7125C10.15 7.4375 10.05 7.2 9.85 7C9.65 6.8 9.40833 6.70417 9.125 6.7125C8.84167 6.72083 8.625 6.84167 8.475 7.075C8.14167 7.54167 7.89167 8.04167 7.725 8.575C7.55833 9.10833 7.475 9.66667 7.475 10.25C7.475 11.7167 7.94167 12.9625 8.875 13.9875C9.80833 15.0125 10.9417 15.525 12.275 15.525ZM7 22C6.71667 22 6.47917 21.9042 6.2875 21.7125C6.09583 21.5208 6 21.2833 6 21V17.7C5.05 16.8333 4.3125 15.8208 3.7875 14.6625C3.2625 13.5042 3 12.2833 3 11C3 8.5 3.875 6.375 5.625 4.625C7.375 2.875 9.5 2 12 2C14.0833 2 15.9292 2.6125 17.5375 3.8375C19.1458 5.0625 20.1917 6.65833 20.675 8.625L21.975 13.75C22.0583 14.0667 22 14.3542 21.8 14.6125C21.6 14.8708 21.3333 15 21 15H19V18C19 18.55 18.8042 19.0208 18.4125 19.4125C18.0208 19.8042 17.55 20 17 20H15V21C15 21.2833 14.9042 21.5208 14.7125 21.7125C14.5208 21.9042 14.2833 22 14 22H7Z" })
    ]
  }
), Ml = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M8.63849 19C8.34916 19 8.11045 18.9212 7.92238 18.7636C7.74878 18.606 7.66198 18.3983 7.66198 18.1404V17.8395C7.06884 18.4699 6.24423 18.7851 5.18815 18.7851C4.39247 18.7851 3.67637 18.5917 3.03982 18.2049C2.40328 17.8181 1.90418 17.2736 1.54251 16.5716C1.18084 15.8553 1 15.0458 1 14.1433C1 13.1404 1.217 12.1734 1.65101 11.2421C2.08501 10.2966 2.69262 9.53009 3.47383 8.94269C4.26951 8.3553 5.18092 8.0616 6.20806 8.0616C6.87354 8.0616 7.47391 8.15473 8.00919 8.34097C8.54446 8.51289 9.10143 8.72779 9.68011 8.98567V17.9255C9.68011 18.212 9.57884 18.4628 9.3763 18.6776C9.17377 18.8925 8.92783 19 8.63849 19ZM5.34005 16.7865C5.75959 16.7865 6.16466 16.7006 6.55527 16.5287C6.96034 16.3567 7.29308 16.149 7.55348 15.9054L7.61858 10.2966C7.19904 10.1246 6.74334 10.0387 6.25146 10.0387C5.62939 10.0387 5.07965 10.2321 4.60224 10.6189C4.12484 10.9914 3.75593 11.4928 3.49553 12.1232C3.23513 12.7393 3.10493 13.3983 3.10493 14.1003C3.10493 14.9742 3.30023 15.6404 3.69083 16.0989C4.08144 16.5573 4.63118 16.7865 5.34005 16.7865Z" }),
      /* @__PURE__ */ o("path", { d: "M21.915 18.8066C21.3942 18.8066 21.0542 18.563 20.8951 18.0759L19.3327 13.606L14.9058 14.5731L13.4953 18.0974C13.4085 18.298 13.2783 18.4628 13.1047 18.5917C12.9455 18.7206 12.743 18.7851 12.4971 18.7851C12.2077 18.7851 11.9546 18.6848 11.7376 18.4842C11.5206 18.2837 11.4121 18.0473 11.4121 17.7751C11.4121 17.5888 11.4627 17.3739 11.564 17.1304L12.432 14.9814C12.3452 14.9527 12.2801 14.9241 12.2367 14.8954C11.8605 14.7092 11.6725 14.394 11.6725 13.9499C11.6725 13.692 11.7448 13.4699 11.8895 13.2837C12.0486 13.0974 12.2511 12.9756 12.4971 12.9183L13.3 12.7464L16.5116 4.66619C16.5984 4.45129 16.7359 4.28653 16.9239 4.17192C17.112 4.05731 17.3145 4 17.5315 4C17.763 4 17.9655 4.05731 18.1391 4.17192C18.3127 4.28653 18.4429 4.46562 18.5297 4.70917L22.8481 17.1089C22.8626 17.1375 22.8915 17.2235 22.9349 17.3668C22.9783 17.4957 23 17.6318 23 17.7751C23 18.0473 22.8987 18.2908 22.6962 18.5057C22.4937 18.7063 22.2333 18.8066 21.915 18.8066ZM18.6165 11.6074L17.4447 8.14756L15.8172 12.2092L18.6165 11.6074Z" }),
      " "
    ]
  }
), Pl = () => {
  const { toggleTheme: e, theme: t } = $o(), { setIsOpenWidget: r, reset: n, isActive: i } = L(), { t: a } = $(), { version: s } = nr();
  return /* @__PURE__ */ o("div", { className: "flex gap-2 items-center justify-between w-full border-b-1 border-border p-4 max-sm:p-2.5", children: [
    /* @__PURE__ */ o(
      "a",
      {
        tabIndex: -1,
        href: "https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras",
        target: "_blank",
        rel: "noreferrer noopener",
        className: R(
          "bg-primary transition-all size-8 sm:size-9 relative overflow-hidden",
          "rounded-sm grid place-items-center hover:brightness-110"
        ),
        children: /* @__PURE__ */ o(
          nl,
          {
            "aria-hidden": !0,
            size: 22,
            className: "text-white absolute size-6 sm:size-7 bottom-0",
            iconTitle: "VLibras Widget+ Logo"
          }
        )
      }
    ),
    /* @__PURE__ */ o("div", { className: "flex flex-col ml-1 leading-tight max-sm:hidden relative -top-0.5", children: [
      /* @__PURE__ */ o("p", { className: "text-lg font-bold text-foreground", children: "VLibras Widget+" }),
      /* @__PURE__ */ o("span", { className: "text-xs font-medium text-muted-foreground", children: [
        "v",
        s
      ] })
    ] }),
    /* @__PURE__ */ o("div", { className: "ml-auto flex items-center gap-x-1", children: [
      i && /* @__PURE__ */ o(x1, { title: a("titles.reset"), onClick: n, children: /* @__PURE__ */ o(pl, { "aria-hidden": !0, size: 22, iconTitle: a("titles.reset") }) }),
      /* @__PURE__ */ o(x1, { title: a("titles.toggle_theme"), onClick: e, children: [
        t === "light" && /* @__PURE__ */ o(fl, { "aria-hidden": !0, size: 22, iconTitle: a("titles.reset") }),
        t === "dark" && /* @__PURE__ */ o(hl, { "aria-hidden": !0, size: 22, iconTitle: a("titles.reset") })
      ] }),
      /* @__PURE__ */ o(x1, { variant: "destructive", title: a("titles.close"), onClick: () => r(!1), children: /* @__PURE__ */ o(dr, { "aria-hidden": !0, size: 22, iconTitle: a("titles.close") }) })
    ] })
  ] });
}, El = ({ children: e }) => /* @__PURE__ */ o("div", { className: R("overflow-y-auto rounded-sm p-4 gap-4 max-sm:grid-cols-1 grid grid-cols-2 auto-rows-min"), children: e }), te = G(
  ({ children: e, disabled: t, className: r, ...n }, i) => /* @__PURE__ */ o(
    "button",
    {
      tabIndex: t ? -1 : 0,
      ref: i,
      className: R(
        "cursor-pointer text-foreground rounded-md flex justify-center items-center gap-x-2",
        t && "pointer-events-none *:!pointer-events-none opacity-50",
        r
      ),
      type: n.type || "button",
      ...n,
      children: e
    }
  )
), Il = G(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ o(
    te,
    {
      ref: n,
      type: "button",
      className: R(
        "w-full relative group rounded-full border-1 border-border hover:border-primary bg-white",
        "leading-none text-sm justify-start px-2 h-12 dark:bg-background",
        "[&>svg]:bg-accent [&>svg]:fill-foreground [&>svg]:p-1.5 [&>svg]:rounded-full",
        "data-[active=true]:!border-primary data-[active=true]:!bg-primary/20",
        "data-[active=true]:[&>svg]:bg-primary data-[active=true]:[&>svg]:fill-primary-foreground",
        t
      ),
      ...r,
      children: e
    }
  )
), We = G(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ o(
    "p",
    {
      ref: n,
      className: R("text-foreground/80 tex-base font-bold leading-normal col-[1/-1]", t),
      ...r,
      children: e
    }
  )
);
G(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ o("div", { ref: n, className: R("w-full col-[1/-1] h-[1px] bg-border", t), ...r, children: e })
);
const Rl = [
  {
    nameKey: "profiles.blind",
    icon: Sl
  },
  {
    nameKey: "profiles.dyslexic",
    icon: Go
  },
  {
    nameKey: "profiles.low_vision",
    icon: xl
  },
  {
    nameKey: "profiles.daltonic",
    icon: Al
  },
  {
    nameKey: "profiles.mobility",
    icon: kl
  },
  {
    nameKey: "profiles.cognitive",
    icon: Ll
  }
], Nl = () => {
  const { t: e } = $(), { profile: t, reset: r } = L(), [n, i] = z(!1), a = es("(max-width: 640px)");
  M(() => {
    const { profile: c } = L.getState();
    c && s(c, !0);
  }, []);
  const s = (c, d) => {
    if (!d && t === c) return r();
    const l = { ...ar, isActive: !0, profile: c };
    switch (c) {
      case "profiles.blind":
        break;
      case "profiles.dyslexic": {
        L.setState({
          ...l,
          dyslexicFont: "open-dyslexic",
          fontSize: "large",
          letterSpacing: "medium"
        });
        break;
      }
      case "profiles.low_vision":
        L.setState({
          ...l,
          fontSize: "very_large",
          letterSpacing: "large",
          highlightLinks: !0,
          highlightTitles: !0
        });
        break;
      case "profiles.daltonic":
        break;
      case "profiles.mobility":
        L.setState({
          ...l,
          largeCursor: !0
        });
        break;
      case "profiles.cognitive":
        L.setState({
          ...l,
          pauseAnimations: !0,
          disableSound: !0
        });
        break;
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      style: { boxShadow: n ? "2px 2px 15px -5px rgba(0, 0, 0, .2)" : "" },
      className: R(
        "col-[1/-1] dark:bg-muted dark:!shadow-none border-1 rounded-lg",
        t && "border-primary/50",
        t && n && "border-primary"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-x-2 p-2 pl-4 max-sm:pl-3 relative", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ o("span", { className: "text-xs sm:text-sm text-muted-foreground h-4.5 sm:h-[22px]", children: [
              t && /* @__PURE__ */ o(cr, { className: "inline relative -top-[3px] mr-1.5 size-4 fill-primary" }),
              e(t || "deactivated")
            ] }),
            /* @__PURE__ */ o(We, { className: "line-clamp-1 break-all max-sm:text-sm", children: e("sections.accessibility_profiles") })
          ] }),
          /* @__PURE__ */ o(
            te,
            {
              "aria-label": e("al.open_accessibility_profiles"),
              title: e(n ? "collapse" : "expand"),
              onClick: () => i(!n),
              className: "size-7 sm:size-10 fill-muted-foreground absolute right-2 hover:fill-foreground",
              children: /* @__PURE__ */ o(wl, { className: R("transition-all rotate-180 size-5 sm:size-6", n && "rotate-0") })
            }
          )
        ] }),
        /* @__PURE__ */ o(
          "div",
          {
            className: R(
              "grid grid-cols-1 sm:grid-cols-2 gap-2 transition-all overflow-hidden px-2 sm:px-4",
              n ? "pb-2 sm:pb-4 sm:pt-2 max-h-[400px]" : "!max-h-0 [&>*]:!pointer-events-none"
            ),
            children: Rl.map(({ nameKey: c, icon: d }) => {
              const l = c === t, p = ["profiles.blind", "profiles.daltonic"].includes(c);
              return /* @__PURE__ */ o(
                Il,
                {
                  disabled: p,
                  "aria-label": `${e("sections.accessibility_profiles")}: ${e(c)}`,
                  onClick: () => s(c),
                  tabindex: n ? 0 : -1,
                  "data-active": l,
                  children: [
                    /* @__PURE__ */ o(d, { size: 32 }),
                    /* @__PURE__ */ o("span", { children: e(c) })
                  ]
                },
                c
              );
            })
          }
        )
      ]
    }
  );
}, Ve = [
  { key: "medium", value: 1.25 },
  { key: "large", value: 1.5 },
  { key: "very_large", value: 2 }
];
function $l() {
  const { fontSize: e } = L(), { current: t } = ie(/* @__PURE__ */ new Map()), [r, n] = z(-1), [i, a] = z();
  M(() => {
    t.size || s();
    const l = Ve.find(({ key: p }) => p === e);
    n(Ve.findIndex(({ key: p }) => p === e)), a(l), d(e);
  }, [e]);
  const s = () => {
    document.querySelectorAll(
      "p, span, a, strong, h1, h2, h3, h4, h5, h6, b, em, i, code, mark, pre, blockquote, abbr, cite, q, time"
    ).forEach((l) => {
      if (!sr(l)) return;
      const p = window.getComputedStyle(l);
      t.set(l, {
        fontSize: Number.parseFloat(p.fontSize),
        inlineFontSize: l.style.fontSize || ""
      });
    });
  }, c = () => {
    const l = r + 1 < Ve.length ? r + 1 : -1, p = Ve[l] || void 0;
    n(l), a(p), L.setState({ fontSize: p == null ? void 0 : p.key });
  }, d = (l) => {
    const p = Ve.find(({ key: u }) => u === l);
    t.forEach(({ inlineFontSize: u, fontSize: f }, h) => {
      h.style.fontSize = p ? `${f * p.value}px` : u || "";
    });
  };
  return { increaseFontSize: c, index: r, option: i };
}
const K = G(({ children: e, className: t, disabled: r, isActive: n, showActiveIndicator: i, ...a }) => {
  const s = ie(null);
  return M(() => {
    const c = s.current;
    c == null || c.addEventListener("click", () => L.setState({ profile: void 0 }));
  }, []), /* @__PURE__ */ o(
    te,
    {
      ref: s,
      className: R(
        "cursor-pointer bg-muted fill-foreground/80 text-foreground/80 border-1 border-border",
        "flex flex-col items-center justify-center rounded-lg h-32 p-4 font-bold relative",
        "hover:text-foreground hover:fill-foreground hover:border-primary",
        n && "!bg-primary/10 border-primary [&>*]:text-primary [&>*]:fill-primary",
        r && "!cursor-not-allowed pointer-events-none *:pointer-events-none !text-muted-foreground opacity-80 !border-border !bg-muted/30",
        t
      ),
      ...a,
      children: [
        e,
        !r && i && n && /* @__PURE__ */ o(Ol, {})
      ]
    }
  );
}), Ol = () => {
  const { t: e } = $();
  return /* @__PURE__ */ o("div", { "aria-hidden": !0, className: "absolute top-2 right-2 fill-primary", children: /* @__PURE__ */ o(cr, { iconTitle: e("actived"), size: 16 }) });
}, Ct = ({ size: e, actived: t }) => t < 0 ? null : /* @__PURE__ */ o("div", { className: "absolute top-2 right-2 flex items-center gap-1", children: Array.from({ length: e }).map((r, n) => /* @__PURE__ */ o(
  "div",
  {
    className: R(
      "w-2.5 h-2.5 rounded-full border-1 border-primary/50",
      t === n ? "bg-primary" : "bg-transparent"
    )
  },
  n
)) }), Y = G(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ o("span", { ref: n, className: R("text-[15px] leading-tight font-semibold", t), ...r, children: e })
), Q = G(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ o("span", { ref: n, className: R("text-[13.5px] text-muted-foreground font-medium", t), ...r, children: e })
), J = G(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ o("span", { ref: n, className: R(t), ...r, children: e })
), zl = () => {
  const { t: e } = $(), { increaseFontSize: t, option: r, index: n } = $l();
  return /* @__PURE__ */ o(K, { "aria-label": e("al.font_increase"), isActive: !!r, onClick: t, children: [
    /* @__PURE__ */ o(Ct, { size: 3, actived: n }),
    /* @__PURE__ */ o(J, { children: /* @__PURE__ */ o(Qs, { iconTitle: e("al.font_increase"), size: 36 }) }),
    /* @__PURE__ */ o(Y, { children: e("font_increase") }),
    /* @__PURE__ */ o(Q, { children: e((r == null ? void 0 : r.key) || "deactivated") })
  ] });
}, Bl = "body.vwp-highlight-links a:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus){outline:2px solid yellow!important;font-weight:700!important;background:#000!important;transition:transform .3s ease!important;color:#fff!important}body.vwp-highlight-links a:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) *{color:#fff!important}body.vwp-highlight-links a:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) button{background:#000!important}body.vwp-highlight-links a:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus):hover{transform:scale(1.05)!important}", A1 = "vwp-highlight-links", Fl = () => {
  const { highlightLinks: e } = L();
  return M(() => {
    const r = ve(Bl);
    return document.head.appendChild(r), () => document.head.removeChild(r);
  }, []), M(() => (document.body.classList.toggle(A1, !!e), () => document.body.classList.remove(A1)), [e]), { toggle: (r) => {
    const n = r !== void 0 ? r : !e;
    document.body.classList.toggle(A1, n), L.setState({ highlightLinks: n });
  }, isActive: !!e };
}, Hl = () => {
  const { t: e } = $(), { toggle: t, isActive: r } = Fl();
  return /* @__PURE__ */ o(K, { showActiveIndicator: !0, "aria-label": e("al.highlight_links"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ o(J, { children: /* @__PURE__ */ o(Js, { iconTitle: e("al.highlight_links"), size: 36 }) }),
    /* @__PURE__ */ o(Y, { children: e("highlight_links") }),
    /* @__PURE__ */ o(Q, { children: e(r ? "actived" : "deactivated") })
  ] });
}, je = [
  { key: "medium", value: 1.5 },
  { key: "large", value: 3 },
  { key: "very_large", value: 6 }
];
function Tl() {
  const { letterSpacing: e } = L(), { current: t } = ie(/* @__PURE__ */ new Map()), [r, n] = z(-1), [i, a] = z();
  M(() => {
    t.size || s();
    const l = je.find(({ key: p }) => p === e);
    n(je.findIndex(({ key: p }) => p === e)), a(l), d(e);
  }, [e]);
  const s = () => {
    document.querySelectorAll(
      "p, span, a, strong, h1, h2, h3, h4, h5, h6, b, em, i, code, mark, pre, blockquote, abbr, cite, q, time"
    ).forEach((l) => {
      if (!sr(l)) return;
      const p = window.getComputedStyle(l);
      t.set(l, {
        letterSpacing: Number.parseFloat(p.letterSpacing) || 1,
        inlineLetterSpacing: l.style.letterSpacing || ""
      });
    });
  }, c = () => {
    const l = r + 1 < je.length ? r + 1 : -1, p = je[l] || void 0;
    n(l), a(p), L.setState({ letterSpacing: p == null ? void 0 : p.key });
  }, d = (l) => {
    const p = je.find(({ key: u }) => u === l);
    t.forEach(({ inlineLetterSpacing: u, letterSpacing: f }, h) => {
      h.style.letterSpacing = p ? `${f * p.value}px` : u ?? "";
    });
  };
  return { increaseLetterSpacing: c, index: r, option: i };
}
const Dl = () => {
  const { t: e } = $(), { increaseLetterSpacing: t, option: r, index: n } = Tl();
  return /* @__PURE__ */ o(K, { "aria-label": e("al.letter_spacing"), isActive: !!r, onClick: t, children: [
    /* @__PURE__ */ o(Ct, { size: 3, actived: n }),
    /* @__PURE__ */ o(J, { children: /* @__PURE__ */ o(tl, { iconTitle: e("al.letter_spacing"), size: 36 }) }),
    /* @__PURE__ */ o(Y, { children: e("letter_spacing") }),
    /* @__PURE__ */ o(Q, { children: e((r == null ? void 0 : r.key) || "deactivated") })
  ] });
}, Zl = () => {
  const { readingMask: e } = L();
  return { toggle: (r) => {
    const n = r !== void 0 ? r : !e;
    L.setState({ readingMask: n, readingGuide: !1 });
  }, isActive: !!e };
}, ql = () => {
  const { t: e } = $(), { toggle: t, isActive: r } = Zl();
  return /* @__PURE__ */ o(K, { showActiveIndicator: !0, "aria-label": e("al.reading_mask"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ o(J, { children: /* @__PURE__ */ o(rl, { iconTitle: e("al.reading_mask"), size: 36 }) }),
    /* @__PURE__ */ o(Y, { children: e("reading_mask") }),
    /* @__PURE__ */ o(Q, { children: e(r ? "actived" : "deactivated") })
  ] });
}, Vl = "body.vwp-highlight-titles *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) h1,body.vwp-highlight-titles *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) h2,body.vwp-highlight-titles *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) h3,body.vwp-highlight-titles *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) h4,body.vwp-highlight-titles *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) h5,body.vwp-highlight-titles *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) h6{text-decoration:underline!important;color:#1351b4!important;font-weight:700!important}", k1 = "vwp-highlight-titles", jl = () => {
  const { highlightTitles: e } = L();
  return M(() => {
    const r = ve(Vl);
    return document.head.appendChild(r), () => document.head.removeChild(r);
  }, []), M(() => (document.body.classList.toggle(k1, !!e), () => document.body.classList.remove(k1)), [e]), { toggle: (r) => {
    const n = r !== void 0 ? r : !e;
    document.body.classList.toggle(k1, n), L.setState({ highlightTitles: n });
  }, isActive: !!e };
}, Ul = () => {
  const { t: e } = $(), { toggle: t, isActive: r } = jl();
  return /* @__PURE__ */ o(
    K,
    {
      showActiveIndicator: !0,
      "aria-label": e("al.highlight_titles"),
      isActive: r,
      onClick: () => t(),
      children: [
        /* @__PURE__ */ o(J, { children: /* @__PURE__ */ o(sl, { iconTitle: e("al.highlight_titles"), size: 36 }) }),
        /* @__PURE__ */ o(Y, { children: e("highlight_titles") }),
        /* @__PURE__ */ o(Q, { children: e(r ? "actived" : "deactivated") })
      ]
    }
  );
}, Gl = "body.vwp-text-color *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) *{color:var(--vwp-text-color)!important}", Fn = "vwp-text-color", Wl = "--vwp-text-color", Xl = () => {
  const { textColor: e } = L();
  M(() => {
    const n = ve(Gl);
    return document.head.appendChild(n), () => document.head.removeChild(n);
  }, []), M(() => {
    if (e != null && e.color)
      return document.body.classList.toggle(Fn, !!(e != null && e.isActive)), document.body.style.setProperty(Wl, e.color), () => document.body.classList.remove(Fn);
  }, [e]);
  const t = (n) => {
    (n !== void 0 ? n : !(e != null && e.isActive)) ? r(e == null ? void 0 : e.color) : L.setState({
      textColor: {
        isActive: !1,
        color: e == null ? void 0 : e.color
      }
    });
  }, r = (n) => {
    n && L.setState({ textColor: { color: n, isActive: !0 } });
  };
  return { toggle: t, apply: r, textColor: e, isActive: e == null ? void 0 : e.isActive };
}, Kl = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
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
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M23.6019 15.1087L21.7116 13.145L19.4778 14.0037L15.869 18.7013L16.41 21.6289L17.9793 22.3565C20.6327 20.8247 22.7482 18.2949 23.6019 15.1087Z",
          fill: "#FF4B00"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M17.9794 22.3566L15.869 18.7013L9.99633 19.4778L8.05611 21.2804L8.89127 23.6019C12.0775 24.4557 15.3261 23.8885 17.9794 22.3566Z",
          fill: "#FF9F00"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M9.99633 19.4778L5.29873 15.869L2.41214 15.237L1.64342 17.9794C3.17531 20.6327 5.70505 22.7482 8.89127 23.6019L9.99633 19.4778Z",
          fill: "#66BB00"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M5.29873 15.869L4.5222 9.99633L2.63465 8.03335L0.398081 8.89128C-0.455664 12.0775 0.111525 15.3261 1.64342 17.9794L5.29873 15.869Z",
          fill: "#00CC71"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M8.13102 5.29873L8.88739 2.62762L6.02063 1.64342C3.36731 3.17531 1.25183 5.70505 0.398081 8.89128L4.5222 9.99633L8.13102 5.29873Z",
          fill: "#0095FF"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M14.0037 4.5222L15.8983 2.88957L15.1087 0.398081C11.9225 -0.455665 8.67394 0.111526 6.02063 1.64342L8.13102 5.29873L14.0037 4.5222Z",
          fill: "#6B77E8"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M21.5212 7.6523L22.3566 6.02067C20.8247 3.36731 18.2949 1.25183 15.1087 0.398081L14.0037 4.5222L18.7013 8.13102L21.5212 7.6523Z",
          fill: "#B760EA"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M19.4778 14.0037L23.6019 15.1087C24.4557 11.9225 23.8885 8.67394 22.3566 6.02063L18.7013 8.13102C19.6925 9.84785 20.0302 11.942 19.4778 14.0037Z",
          fill: "#FF193D"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M19.4778 14.0037L17.8027 12.0976L15.399 12.9108L13.7586 15.046L14.3728 18.1003L15.869 18.7013C17.5858 17.7101 18.9254 16.0653 19.4778 14.0037Z",
          fill: "#FF7816"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M15.869 18.7013L13.7586 15.046L11.0892 15.399L9.22425 16.9208L9.99633 19.4778C12.058 20.0302 14.1521 19.6925 15.869 18.7013Z",
          fill: "#FDBF00"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M11.0892 15.399L8.95403 13.7586L7.1861 13.63L5.29873 15.869C6.28994 17.5858 7.93468 18.9254 9.99633 19.4778L11.0892 15.399Z",
          fill: "#77DD00"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M8.95403 13.7586L8.601 11.0892L6.84093 9.16042L4.5222 9.99633C3.96978 12.058 4.30751 14.1521 5.29873 15.869L8.95403 13.7586Z",
          fill: "#00DD7B"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M10.2414 8.95404L10.8417 6.01262L8.13102 5.29873C6.41418 6.28994 5.07462 7.93468 4.5222 9.99633L8.601 11.0892L10.2414 8.95404Z",
          fill: "#3AAAFF"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M12.9108 8.601L14.7789 7.06757L14.0037 4.5222C11.942 3.96978 9.84785 4.30751 8.13102 5.29873L10.2414 8.95404L12.9108 8.601Z",
          fill: "#7984EB"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M17.9515 10.8624L18.7013 8.13102C17.7101 6.41418 16.0653 5.07462 14.0037 4.5222L12.9108 8.601L15.046 10.2414L17.9515 10.8624Z",
          fill: "#CB75F6"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M18.7013 8.13102L15.046 10.2414L15.399 12.9108L19.4778 14.0037C20.0302 11.942 19.6925 9.84785 18.7013 8.13102Z",
          fill: "#FF4949"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M13.7586 15.046C14.539 14.5954 15.1479 13.8478 15.399 12.9108L14.425 11.1926L12 12L12.515 14.8826L13.7586 15.046Z",
          fill: "#FF9F00"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M11.0892 15.399C12.0263 15.6501 12.9782 15.4965 13.7586 15.046L12 12L10.0598 13.8025L11.0892 15.399Z",
          fill: "#FFD400"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M8.95403 13.7586C9.4046 14.539 10.1522 15.1479 11.0892 15.399L12 12L9.11739 12.515L8.95403 13.7586Z",
          fill: "#89F900"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M12 12L10.4524 10.1281L8.601 11.0892C8.34992 12.0263 8.50346 12.9782 8.95403 13.7586L12 12Z",
          fill: "#00EE84"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M12 12L11.8667 9.77845L10.2414 8.95404C9.461 9.40461 8.85208 10.1522 8.601 11.0892L12 12Z",
          fill: "#73BCFF"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M12.9108 8.601C11.9737 8.34992 11.0218 8.50346 10.2414 8.95404L12 12L13.2149 10.1853L12.9108 8.601Z",
          fill: "#979FEF"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M15.046 10.2414C14.5954 9.461 13.8478 8.85208 12.9108 8.601L12 12L14.2216 11.8667L15.046 10.2414Z",
          fill: "#DA90F8"
        }
      ),
      /* @__PURE__ */ o("path", { d: "M15.399 12.9108C15.6501 11.9737 15.4965 11.0218 15.046 10.2414L12 12L15.399 12.9108Z", fill: "#FF6C6C" })
    ]
  }
), Yl = () => {
  const e = ie(null), { t } = $(), { apply: r, toggle: n, textColor: i, isActive: a } = Xl(), s = () => {
    var l;
    a || (l = e.current) == null || l.click(), n();
  }, c = () => {
    var l;
    return (l = e.current) == null ? void 0 : l.click();
  }, d = (l) => {
    const p = l.target.value;
    r(p);
  };
  return /* @__PURE__ */ o(K, { "aria-label": t("al.text_color"), isActive: a, onClick: s, children: [
    /* @__PURE__ */ o(J, { children: /* @__PURE__ */ o(ol, { iconTitle: t("al.text_color"), size: 36 }) }),
    /* @__PURE__ */ o(Y, { children: t("text_color") }),
    /* @__PURE__ */ o(Q, { children: t(a ? "custom" : "default") }),
    /* @__PURE__ */ o(
      "div",
      {
        "aria-label": t("color_picker"),
        tabindex: 0,
        onClick: c,
        onKeyDown: () => {
        },
        style: { backgroundColor: (i == null ? void 0 : i.color) || "#000" },
        className: "absolute top-2 right-2 size-6 rounded-full border-1 grid place-content-center",
        children: !(i != null && i.color) && /* @__PURE__ */ o(Kl, { size: 24 })
      }
    ),
    /* @__PURE__ */ o(
      "input",
      {
        ref: e,
        onChange: d,
        type: "color",
        className: "pointer-events-none absolute top-2 right-2 size-6 sr-only"
      }
    )
  ] });
}, Ql = "body.vwp-large-cursor *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus){cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAA0CAYAAAAACoF6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJtSURBVHgBzZmN0aIwEIbfuwoogQ6kA7CCswPmKuDrADqwBK4DSsAOtAPsAK0glwXDxJiEAAF8ZnZGIMLjZvOjAkCBL4Lhi4TYK0p8AUyKikeAHWFKXPcUYppoeITYAfZNQoPA+XzeXWh4OFGW5a5CbzJEXdcsCAJZqOURYQM+ZIjr9aoTSrAyWhmiaRoWhqHabSlWxChjEfrBSlhlLEIFVmBUZkshJxmibVsWRdGqQs4yQuh0OqlCZ3hikowgTVNVqIQHZskQRVF4X/Fny1iEQsxkkYxBqJkrtFjGp5AXGcLHiu9NhqiqSl1gSch5xfcqQxhWfCch7zLE3BV/FRmL0M8uMhahYheZqUKryxAuK/5vbMD9fu+CL67go0y+lENa8X+hN+zgHwBzeDwe3cNut9vwWhw/n8/u3Aj/ePztHLCwm7IsU9M/NRrKkJfMXC4XHI9HWxNKzZ3HTXotjp+vc72DS2aoAGlmNZEkifxJax5/0M+6k/Y3ozJiaNIDTSjf01vMxCpD2ZDnCMqQKXPKepRgBkYZ2hIoD2B5nhuzQ9fw3lV+ZJQbD0FyJiiLSvvJ++EPGc1QbdDXQXdMexYTSiHnmMhbPcRxrIqIHX8uztkKmX5OwYJCHt6sWcxKqV0gX6OHmlhSyKZZUZfiSlynrjSxpJB1IqmhbQKpkG3DXLnf9D0w+j6OR9rXoj1NdL4LWR4xoUP7TLyH9icmNDOy0zAXIyaEGwGkYS4XMnUPSRwOB13XZy43LzF9csohDXMSooJWZ2u8F/Fqv5ZGwOgepX1JH7ABQyHjMwvUJZv+GZJoJGLsCI1A6govWfgPEfBNVkVYxn8AAAAASUVORK5CYII=),pointer!important}", S1 = "vwp-large-cursor", Jl = () => {
  const { largeCursor: e } = L();
  return M(() => {
    const r = ve(Ql);
    return document.head.appendChild(r), () => document.head.removeChild(r);
  }, []), M(() => (document.body.classList.toggle(S1, !!e), () => document.body.classList.remove(S1)), [e]), { toggle: (r) => {
    const n = r !== void 0 ? r : !e;
    document.body.classList.toggle(S1, n), L.setState({ largeCursor: n, textReader: void 0 });
  }, isActive: !!e };
}, e7 = () => {
  const { t: e } = $(), { toggle: t, isActive: r } = Jl();
  return rr() ? null : /* @__PURE__ */ o(K, { showActiveIndicator: !0, "aria-label": e("al.large_cursor"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ o(J, { children: /* @__PURE__ */ o(al, { iconTitle: e("al.large_cursor"), size: 36 }) }),
    /* @__PURE__ */ o(Y, { children: e("large_cursor") }),
    /* @__PURE__ */ o(Q, { children: e(r ? "actived" : "deactivated") })
  ] });
}, Ue = [
  { key: "medium", value: 1.1 },
  { key: "large", value: 1.2 },
  { key: "very_large", value: 1.3 }
];
function t7() {
  const { lineSpacing: e } = L(), { current: t } = ie(/* @__PURE__ */ new Map()), [r, n] = z(-1), [i, a] = z();
  M(() => {
    t.size || s();
    const l = Ue.find(({ key: p }) => p === e);
    n(Ue.findIndex(({ key: p }) => p === e)), a(l), d(e);
  }, [e]);
  const s = () => {
    document.querySelectorAll(
      "p, span, a, strong, h1, h2, h3, h4, h5, h6, b, em, i, code, mark, pre, blockquote, abbr, cite, q, time"
    ).forEach((l) => {
      if (!sr(l)) return;
      const p = window.getComputedStyle(l), u = Number.parseFloat(p.fontSize), f = p.lineHeight === "normal" ? u * 1.2 : Number.parseFloat(p.lineHeight);
      t.set(l, {
        lineHeight: f,
        inlineLineHeight: l.style.lineHeight || ""
      });
    });
  }, c = () => {
    const l = r + 1 < Ue.length ? r + 1 : -1, p = Ue[l] || void 0;
    n(l), a(p), L.setState({ lineSpacing: p == null ? void 0 : p.key });
  }, d = (l) => {
    const p = Ue.find(({ key: u }) => u === l);
    t.forEach(({ lineHeight: u, inlineLineHeight: f }, h) => {
      let _ = u;
      const C = window.getComputedStyle(h), S = Number.parseFloat(C.fontSize);
      C.lineHeight.endsWith("px") && (_ = Number.parseFloat(C.lineHeight) / S), h.style.lineHeight = p ? `${_ * p.value}` : f || "";
    });
  };
  return { increaseLineSpacing: c, index: r, option: i };
}
const r7 = () => {
  const { t: e } = $(), { increaseLineSpacing: t, option: r, index: n } = t7();
  return /* @__PURE__ */ o(K, { "aria-label": e("al.line_spacing"), isActive: !!r, onClick: t, children: [
    /* @__PURE__ */ o(Ct, { size: 3, actived: n }),
    /* @__PURE__ */ o(J, { children: /* @__PURE__ */ o(ul, { iconTitle: e("al.line_spacing"), size: 36 }) }),
    /* @__PURE__ */ o(Y, { children: e("line_spacing") }),
    /* @__PURE__ */ o(Q, { children: e((r == null ? void 0 : r.key) || "deactivated") })
  ] });
}, n7 = "body.vwp-hide-images *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) img,body.vwp-hide-images *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) figure{display:none!important}", L1 = "vwp-hide-images", o7 = () => {
  const { hideImages: e } = L();
  return M(() => {
    const r = ve(n7);
    return document.head.appendChild(r), () => document.head.removeChild(r);
  }, []), M(() => (document.body.classList.toggle(L1, !!e), () => document.body.classList.remove(L1)), [e]), { toggle: (r) => {
    const n = r !== void 0 ? r : !e;
    document.body.classList.toggle(L1, n), L.setState({ hideImages: n });
  }, isActive: !!e };
}, i7 = () => {
  const { t: e } = $(), { toggle: t, isActive: r } = o7();
  return /* @__PURE__ */ o(K, { showActiveIndicator: !0, "aria-label": e("al.hide_images"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ o(J, { children: /* @__PURE__ */ o(il, { iconTitle: e("al.hide_images"), size: 36 }) }),
    /* @__PURE__ */ o(Y, { children: e("hide_images") }),
    /* @__PURE__ */ o(Q, { children: e(r ? "actived" : "deactivated") })
  ] });
}, a7 = "body.vwp-pause-animations *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) *{animation-play-state:paused!important}", M1 = "vwp-pause-animations", s7 = () => {
  const { pauseAnimations: e } = L();
  return M(() => {
    const r = ve(a7);
    return document.head.appendChild(r), () => document.head.removeChild(r);
  }, []), M(() => (document.body.classList.toggle(M1, !!e), () => document.body.classList.remove(M1)), [e]), { toggle: (r) => {
    const n = r !== void 0 ? r : !e;
    document.body.classList.toggle(M1, n), L.setState({ pauseAnimations: n });
  }, isActive: !!e };
}, l7 = () => {
  const { t: e } = $(), { toggle: t, isActive: r } = s7();
  return /* @__PURE__ */ o(
    K,
    {
      showActiveIndicator: !0,
      "aria-label": e("al.pause_animations"),
      isActive: r,
      onClick: () => t(),
      children: [
        /* @__PURE__ */ o(J, { children: /* @__PURE__ */ o(ll, { iconTitle: e("al.pause_animations"), size: 36 }) }),
        /* @__PURE__ */ o(Y, { children: e("pause_animations") }),
        /* @__PURE__ */ o(Q, { children: e(r ? "actived" : "deactivated") })
      ]
    }
  );
}, c7 = () => {
  const { readingGuide: e } = L();
  return { toggle: (r) => {
    const n = r !== void 0 ? r : !e;
    L.setState({ readingGuide: n, readingMask: !1 });
  }, isActive: !!e };
}, d7 = () => {
  const { t: e } = $(), { toggle: t, isActive: r } = c7();
  return /* @__PURE__ */ o(K, { showActiveIndicator: !0, "aria-label": e("al.reading_guide"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ o(J, { children: /* @__PURE__ */ o(dl, { iconTitle: e("al.reading_guide"), size: 36 }) }),
    /* @__PURE__ */ o(Y, { children: e("reading_guide") }),
    /* @__PURE__ */ o(Q, { children: e(r ? "actived" : "deactivated") })
  ] });
}, u7 = () => {
  const { t: e } = $();
  return /* @__PURE__ */ o(K, { disabled: !0, showActiveIndicator: !0, "aria-label": e("al.reader_mode"), isActive: !1, onClick: void 0, children: [
    /* @__PURE__ */ o(J, { children: /* @__PURE__ */ o(cl, { iconTitle: e("al.reader_mode"), size: 36 }) }),
    /* @__PURE__ */ o(Y, { children: e("reader_mode") }),
    /* @__PURE__ */ o(Q, { className: "italic", children: [
      e("upcomming"),
      "..."
    ] })
  ] });
}, p7 = "body *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) .vwp-text-reader{cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXkSURBVHgBzVlNSBxXHP+/t+qukBBPie0hbKF6S5uESgyNdkMCpcmhLQULPW3SWynRY4MGlaDNLbH0Wj8uPQhp7KHpJSWb1sOCpWvw5hY6eEn0UkVBV9338n6zzu7szHu7s+6syQ+G2Z2P9/7fX8MujO8MMGL9pCAltTGiNtKBkWWfJSucSVokyZJMrjMhn+d5fn1h8NgiHTFY99juU0VMgkKCEsaiAHMkU2Asfac1RQ0E6x7P/ackGaeGgqUkiTlB+8/C1hK7MJb732g2jYHFJJuTe/mJ9GirRXVCmVBO0msDS5Gg6fSdlhk6JF4zA0VYJNjIYRh5UxhwYOVp7/Na/ITTm4V4hJozSqhTiWEZyC+PhIG3TjD7qAHJnZbdTPfwdrzag6Gb0LnTjM6rA+eOU4yORcvvb+WIllcl/ZVVx7KkFxvm7dUdlSTZQCXfCC0PXDvD1VEgvBb8syLp9yVJj5dEpcdG04PREd2NuhkAwUPXI9R+guoCGBn/TZg1IlhSp4m6fODrS5x+/Kp+4gGY3fSNCPV9YCCJy+musa2zvsul4qw2DF7ndPNSuDHgWIyo/6p5XRWhHnmjE7eryhoB4mHzjQI0a2Aivh3dG3Zf4Iyxdapx8UYSX20fJuVA993thPOfCyksCgjE8rDNBsiu6qNQ/xWuzx88UtQCZyQ3KCDgsI3AmIo+OGb/LmcCPnHrik5gMuFogXOKBKo7oM4woo0OTu74aV7Yic6N3k59bmEs8inOvGW32aIA6OsKlqA2VWIHIR/f36cP7+1TciqvNY/sWikLw96Rsbd2iGYX/M/2dvj3FkwmbQZSo8qJnX7XAJQEHSeDMfDtz3madEkS9u01DxCanMzbzOE5mEpfV8FUHi/5Exm07y1J0ITBjOy3mKSKZhS0PICk/13V3/OahyNxRzs9B1KGVrxmBAYhRC8kZ+/bDKgmPEUVoFOhDigHTACxjsmAoJ7Owpoo7IC3XdFmc0cGpeFAA2p6QBUQlvOCCd3vIGjXhFM1ATlrMxDbj1U0oaC1fG8Hr7iGY4ogHuU0cP504Z3ltZLUj8f8+3Wc8q+p3miz37YdGQ12nUDIM2XpW1fLr8MHwBRKcMDxBV0PYQIcuan4Tyo/YJSgOoE6CZIGQS9Vinz3JNGXXbwsEMAHHn5T2hq+kTnwH2M1aoCLAfGMWDhlQk8nIldpLZ0JuqWMCAVm3Rrx4oWhXigygBGgGnKt64ZckFA1P0AE+jMraH6ZtE0JNIBIgujjXcsJvV4zc8Pg9FaT+5/KBw+UGY14n8qsKOmc0S5gEz3xpCDBSoCJ4Jj4g+gTJWVkX4eRe19EbKYr5ZvsmiZES1nOgMmMCi/7F0eWvf2wYi+rBXrglxuiWBwiTLdX0XBGk2MY8cUyaguTZH80MjXcurQfFCBIK1UN3E7uBhKwX9wiP+q9BPvTLbBZ50QmaDLLGDI82xPPfQzYWtAUd4gUXtQ4rDr0+7q9EfYx3W7SviGF0gKfcl9ynNDtaHBESDGoKThACL32XrD+wgmxfhr5NE5GEei+3GDDmZtNgTNlvYDto+z2VqcKlhp0vYMf5sCr8QVIAiHzKAD/Qm+hIR7dzIjz08gAfEFNLB54ryMiTc43nokfnkhTbrHcE7qKtUM01zxqcuhGMQHJo4Mzzkp3xWX336phoPv77bgUPKMrMVAWGEcfhwBs/rtf8sauTtXPI+mhaJlpB9r54t3cZ5LTI909OHa9wy5IfXZB2g291uZtsOn0YMsN31UKiO6x7aQ3tLrhMAKtHI8Gn2BUJ5wKMX8odll3qybdgwlJ/H61z7JO5Wk3J7FS6Qwis6vovgrNf2YlSP7QS754l2oEfEIlkaeN/zhOWpv3ombDTd9utWK5lnOQDDUOFmM8UY14oK7wYWsjz6bUnC9BIcD+JqZ6kiCEOwgl/tmMCDUxZqr0OIxpKSeVjOZad6MzhQFDcIQTwF24OL73kRQioQjCzCau0lHc4/QWOik0Iyo0L8Zyzb/WSrQbrwDCzLLGTU5efAAAAABJRU5ErkJggg==),pointer!important;text-decoration:underline!important}", f7 = {
  event: null,
  isActive: !1,
  onClick: void 0,
  type: "button",
  element: null,
  listener: null,
  render: void 0
}, Ae = Be()(() => ({
  ...f7
})), h7 = Array.from([document.body, ...document.body.children]), P1 = Gs(), E1 = Oe(".vp-guide-container"), g7 = (e) => {
  var t;
  return ge(e, ["IMG"]) ? e.alt : ur(e) ? e.value : ge(e, ["SELECT"]) ? (t = Oe(`[value="${e.value}"]`, e)) == null ? void 0 : t.innerText : e.innerText.trim() || "";
}, Wo = (e) => {
  let t = e;
  for (; t && !h7.includes(t); ) {
    if (v7(t) || t.onclick && !y7(t)) return t;
    t = t.parentNode;
  }
  return null;
}, Hn = (e) => P1 != null && P1.contains(e) || E1 != null && E1.contains(e) || e.matches(".vw-links") ? !1 : b7(e) || Wo(e) || ur(e) || m7(e) || C7(e), ge = (e, t) => t.includes(e.tagName), v7 = (e) => ge(e, ["A", "BUTTON"]), ur = (e) => ge(e, "INPUT") && e.type === "submit", m7 = (e) => ge(e, "IMG") && e.alt && e.alt.trim(), C7 = (e) => ge(e, "SELECT"), y7 = (e) => ge(e, ["SVG", "PATH"]), b7 = (e) => {
  const t = (r) => {
    var n;
    return r.nodeType === Node.TEXT_NODE && ((n = r == null ? void 0 : r.textContent) == null ? void 0 : n.trim());
  };
  return Array.from(e.childNodes).some((r) => t(r));
}, _7 = (e) => {
  if (!e.parentElement) return;
  const t = Oe("input", e.parentElement);
  t && ["radio", "checkbox"].includes(t.type) && (t.checked = !t.checked);
}, w7 = (e, t) => {
  var f, h;
  const r = (f = document.caretPositionFromPoint) == null ? void 0 : f.call(document, e, t);
  if (!r) return null;
  const n = r.offsetNode, i = r.offset;
  if (!n || n.nodeType !== Node.TEXT_NODE) return null;
  const a = n.textContent ?? "";
  if (!a.trim()) return null;
  const s = a.slice(0, i), c = a.slice(i), d = s.match(/[\wÀ-ú’-]+$/), l = c.match(/^[\wÀ-ú’-]+/), p = `${(d == null ? void 0 : d[0]) ?? ""}${(l == null ? void 0 : l[0]) ?? ""}`;
  if (!p) return null;
  const u = i - (((h = d == null ? void 0 : d[0]) == null ? void 0 : h.length) ?? 0);
  return { word: p, node: n, offset: u };
}, x7 = (e) => {
  document.querySelectorAll(`span.${e}`).forEach((t) => {
    const r = t.parentNode;
    if (!r) return;
    const n = document.createTextNode(t.textContent || "");
    r.replaceChild(n, t), r.normalize();
  });
}, Xo = ({ callback: e, isWordByWord: t, markWordClss: r, hoverClss: n }) => {
  if (t && !(r != null && r.trim())) throw new Error("markWordClss is required when isWordByWord is true");
  const i = (d) => {
    if (!n) return;
    const l = d.target;
    Hn(l) && l.classList.add(n);
  }, a = (d) => {
    r && x7(r), Ae.setState({ isActive: !1 });
    const l = window.getSelection(), p = l == null ? void 0 : l.toString().trim(), u = d.target;
    if (!Hn(u)) return;
    if (p && !t) return e(p);
    if (d.preventDefault(), d.stopPropagation(), t && r) {
      const { word: h, node: _, offset: C } = w7(d.clientX, d.clientY) || {};
      if (h && _ && typeof C == "number") {
        const S = document.createRange();
        S.setStart(_, C), S.setEnd(_, C + h.length);
        const A = document.createElement("span");
        A.className = r, A.textContent = h, S.deleteContents(), S.insertNode(A), e(h);
      }
    } else {
      const h = g7(u);
      h != null && h.trim() && e(h);
    }
    const f = u.tagName === "A" ? u : Wo(u);
    f && c(f, d), ge(u, "LABEL") ? _7(u) : (ge(u, "BUTTON") || ur(u)) && c(u, d);
  }, s = (d) => {
    if (!n) return;
    d.target.classList.remove(n);
  }, c = (d, l) => {
    Ae.setState({
      isActive: !0,
      event: l,
      type: d.tagName.toLowerCase() === "a" ? "link" : "button",
      onClick: () => {
        d.dispatchEvent(new MouseEvent("click", { bubbles: !0 })), Ae.setState({ isActive: !1 });
      }
    });
  };
  return document.body.addEventListener("mouseover", i), document.body.addEventListener("mouseout", s), document.body.addEventListener("click", a, !0), () => {
    document.body.removeEventListener("mouseover", i), document.body.removeEventListener("mouseout", s), document.body.removeEventListener("click", a, !0);
  };
}, A7 = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-ES"
};
let pe = null;
const q1 = (e, t) => {
  if (!("speechSynthesis" in window))
    return console.error(Io("speech_is_not_supported", { locale: (t == null ? void 0 : t.locale) || "pt" })), null;
  const r = () => {
    const n = A7[(t == null ? void 0 : t.locale) || "pt"] || "pt-BR", i = speechSynthesis.getVoices();
    pe = new SpeechSynthesisUtterance(e);
    let a = i.find((s) => s.lang === n);
    a || (console.warn(`Voz para ${n} não encontrada. Usando fallback en-US.`), a = i.find((s) => s.lang === "en-US")), pe.lang = n, pe.rate = (t == null ? void 0 : t.velocity) || 1, pe.pitch = 1, pe.volume = 1, pe.voice = a || null, speechSynthesis.cancel(), speechSynthesis.speak(pe), pe.onend = () => speechSynthesis.cancel();
  };
  return speechSynthesis.getVoices().length === 0 ? window.speechSynthesis.onvoiceschanged = () => r() : r(), pe;
}, Ko = () => {
  "speechSynthesis" in window && speechSynthesis.cancel();
}, k7 = () => {
  const { textReader: e } = L();
  return M(() => {
    const r = ve(p7);
    return document.head.appendChild(r), () => document.head.removeChild(r);
  }, []), M(() => {
    const r = e != null && e.isActive ? Xo({
      hoverClss: "vwp-text-reader",
      callback: (n) => q1(n, { velocity: e == null ? void 0 : e.velocity })
    }) : void 0;
    return () => {
      r == null || r();
    };
  }, [e]), { toggle: (r) => {
    const n = r !== void 0 ? r : !(e != null && e.isActive);
    n ? q1(Io("text_reader_is_actived")) : Ko(), L.setState({ textReader: { isActive: n }, largeCursor: void 0, dictionary: void 0 });
  }, isActive: !!(e != null && e.isActive) };
}, S7 = () => {
  const { t: e } = $(), { toggle: t, isActive: r } = k7(), n = "speechSynthesis" in window;
  return /* @__PURE__ */ o(
    K,
    {
      disabled: !n,
      showActiveIndicator: !0,
      "aria-label": e("al.text_reader"),
      isActive: r,
      onClick: () => t(),
      children: [
        /* @__PURE__ */ o(J, { children: /* @__PURE__ */ o(jo, { iconTitle: e("al.text_reader"), size: 36 }) }),
        /* @__PURE__ */ o(Y, { children: e("text_reader") }),
        /* @__PURE__ */ o(Q, { children: e(n ? r ? "actived" : "deactivated" : "no_support") })
      ]
    }
  );
}, L7 = "body *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) .vwp-dictionary{cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAY4SURBVHgBzVlNTFRXFD73jTKQaLQbf7qwNBF3WGlqxNSfIZI0wqK0pDRxRXHVpi0s26KBiYWyU9omrsrPpkmpiXShTZM2Dtom00AK6g5M+sJCxY0YTWCAudfzvcfAzHv3vXmPmUG+ZPLm/d17vnvP/c6554ljvYsdgkQ7MZSi3YJoN+kgyLSOSthHUiYpMpVQ80Kqu2kjPT/euWOKNhmitmfpFhsToyKBB2NKghypBIglL1YkqIQQtb2p/3kkK6mkEAlFclTSylixZ0kc60k99XSb0sAUSoyq5XR/Ml5hUoFgF0opemUQCZI0lLxYNkwbxCsmsAaTpOjeCJGtQiADM03LH4RZJwZtLVRGaPskD+pgrEsFWpdbjUAGrYtlS5O1XQuV+R4sugvtjAo6e1hQ1R78iPZzaNwRte+9SBE9mlf06BnRnRlFk7P479093+EgKTr81kbR4kDNAUHnTxjWMQxuTysamZAWGR/Ek53Rbt2Nggns3yWoszG84U6AyPd/Se8ZkaJVNxMFEWg5alijnnGRQvFikeinv6U1IzqwQtU4FcpYT87CAYa3nyme8cCOcqL2eoPaTui1hRXqulOdDCurDAkY79VJMeDTfuVCdLkr+4IhhJinEIDblNL4DECi5R13P0KpjtpLC7HMuSGVNCkgsGDPn9i80IG+0KcLRmRtFgxB6hkFxJf1xfX5fMCa+KZRN2AqlpmFbQZFsAHJ15Ylk6eq3KPxH+v37RlJU7N2kEKwAkkEsIMcyBqr1yXW79kjB4hOV7nl+G0+xzVnnBAi8j4fEgKrmsP2U8qDvuYInXQQ+PzndL4AtEYeCPJsAxPudIw6iH/BfWUDUfrfzuhrVsv5YgH88NqnEdf1d/tWKAyQZrQctUe0aq+dYmAWpueUlVqMjNv6/89X21zvvnd5xXo2B1LWWVSFIt/0NUyUhZHahce49lmEPmICmIeb96QVtHDcCf0/4y8OmBknlCHesqhKbMBJNHm9fOpQcAJDbRF6vqiodTDtuocRb76apsca2dCNejYwYxrErLdQPYAeeWHfLgoEzNRDzmXE6n+dz3/M2g5jsl0IhPMBguAED/oRi0D5SvkUL2TPl71cwglM8837cAlbsXQEDrLhY6xEv0zYuQ+kEs/ur/bv43WNDdz6bsuxEnFEY95geyCo9sPVMh2BjO49qMmv44oezNnnj7nnkYn8MwCiTqCasu54SiX4Sow2CBgMV9jHBPbx+XPeJ51kQr/fzzXuh3MROrRXFC0gZhGQYyT0SpAJOH5oYBeAqmQMPlsNNzL4PHcxP2DJHODnZubWA1nNG4L6Poz4tg938yWAEiAXueZ1RS5sMrBF9MO3N3LVBUQmZ91KBHeBKDQcNkIt4of6jY6Zo10cD66wG3U7n5phf63aQ77QSaPumi4gBoGuLXb7XAJebjTzBOwL2zIC+XIhP+A9JwQZUy6rdNVqKMAfHe5AEzaVCApdUGu+uuKaBf4c0OR+UqbjZBix7EtYQNB0Z0qB+IB7KKNAy535jb0O1ksnfrkQnkUM0cUcbPh1LiSW5V2tX+iSO3T647lc/80kV34KhY7hOiDacNhfPr3a02a9LPvJC+V1+gREyTjvdQazL6EB5ywE0XJLcaqDrR9dexh9bRqujCEcPFvWrQUYM9y2bdN2ZQiGrQPa5M/kQteb+OOdw2ItOICGEKw2CwN39L6PUnzmrycBBDauWFxxXsemY2ATSPgUuMzsCp3vLiKa2h5f+zrpaLyUJHzbX5J12ae+BKwsVcg67D91nfRzLdO1zSsA8Pn+P32MV9Tt/K4WSB6OX0o1KYOu6+5hYXfUuzf8YQGp7bmh363ZEEPJzrJPXFcpIGp7Flqd0poNyCuqdqdCEoHhGHHfisWq5utuheoNJBQZl/0+y2JGrBrSIVTV7HNEYAAughFGcjj9hFPveyqAC+pHfkMELBLf8WcfZdwq/cdxsn3+QjTu90joQmfy6wqzPFVWg5Gh0sEUwojlMx4oaOVZs5EWg1zni1ERYH0T4z1JEMMzKDzJp1UikivGglOPjbgWL1IlaLRiKTpsFxiCoygEsnG8d/m0kjLGBh1h/6xkRa90LHoTOylsRliap8pT238La3Q2XgKRMujGoESLwAAAAABJRU5ErkJggg==),pointer!important}body *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus) .vwp-mark-word{background:#2670e8;border-radius:4px;color:#fff;padding:0 2px;position:relative;display:inline-block;transition:all .3s ease}", Yo = () => {
  const { dictionary: e } = L();
  return M(() => {
    const r = ve(L7);
    return document.head.appendChild(r), () => document.head.removeChild(r);
  }, []), M(() => {
    const r = e != null && e.isActive ? Xo({
      hoverClss: "vwp-dictionary",
      markWordClss: "vwp-mark-word",
      isWordByWord: !0,
      callback: (n) => L.setState({ dictionary: { ...e, word: n } })
    }) : void 0;
    return () => {
      r == null || r();
    };
  }, [e]), { toggle: (r) => {
    const n = r !== void 0 ? r : !(e != null && e.isActive);
    L.setState({
      dictionary: { isActive: n },
      textReader: void 0,
      largeCursor: void 0
    });
  }, isActive: !!(e != null && e.isActive) };
}, M7 = () => {
  const { t: e } = $(), { toggle: t, isActive: r } = Yo();
  return /* @__PURE__ */ o(K, { showActiveIndicator: !0, "aria-label": e("al.dictionary"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ o(J, { children: /* @__PURE__ */ o(Uo, { iconTitle: e("al.dictionary"), size: 36 }) }),
    /* @__PURE__ */ o(Y, { children: e("dictionary") }),
    /* @__PURE__ */ o(Q, { children: e(r ? "actived" : "deactivated") })
  ] });
}, P7 = "body[data-vwp-font=open-dyslexic] *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus){font-family:OpenDyslexic_Font,sans-serif!important}body[data-vwp-font=comic-neue] *:not(.vwp-ignore,[vw],[vw] *,vlibras-widget-plus){font-family:ComicNeue_Font,sans-serif!important}", I1 = ["open-dyslexic", "comic-neue"], E7 = () => {
  const [e, t] = z([]), { dyslexicFont: r } = L(), { path: n } = nr(), [i, a] = z(-1), [s, c] = z();
  M(() => {
    const p = ve(P7);
    return document.head.appendChild(p), () => document.head.removeChild(p);
  }, []), M(() => {
    a(I1.findIndex((p) => p === r)), c(r), l(r);
  }, [r]);
  const d = () => {
    const p = i + 1 < I1.length ? i + 1 : -1, u = I1[p] || void 0;
    a(p), c(u), L.setState({ dyslexicFont: u });
  }, l = async (p) => {
    switch (p) {
      case "open-dyslexic":
        e.includes("open-dyslexic") || await Ks(n), t((u) => [...u, "open-dyslexic"]);
        break;
      case "comic-neue":
        e.includes("comic-neue") || await Ys(n), t((u) => [...u, "comic-neue"]);
    }
    if (!p) return document.body.removeAttribute("data-vwp-font");
    document.body.dataset.vwpFont = p;
  };
  return { toggleFont: d, index: i, option: s };
}, I7 = () => {
  const { t: e } = $(), { toggleFont: t, option: r, index: n } = E7();
  return /* @__PURE__ */ o(K, { "aria-label": e("al.dyslexic_font"), isActive: !!r, onClick: t, children: [
    /* @__PURE__ */ o(Ct, { size: 2, actived: n }),
    /* @__PURE__ */ o(J, { children: r === "comic-neue" ? /* @__PURE__ */ o(Ml, { iconTitle: e("al.dyslexic_font"), size: 36 }) : /* @__PURE__ */ o(Go, { iconTitle: e("al.dyslexic_font"), size: 36 }) }),
    /* @__PURE__ */ o(Y, { children: e("dyslexic_font") }),
    /* @__PURE__ */ o(Q, { children: e(r ? "actived" : "deactivated") })
  ] });
}, R7 = () => {
  const { disableSound: e } = L();
  M(() => {
    L.getState().disableSound && t(!0);
  }, []);
  const t = (r) => {
    const n = r !== void 0 ? r : !e;
    L.setState({ disableSound: n }), Us("audio, video").forEach((i) => {
      i.muted = !n;
    });
  };
  return { toggle: t, isActive: !!e };
}, N7 = () => {
  const { t: e } = $(), { isActive: t, toggle: r } = R7();
  return /* @__PURE__ */ o(K, { showActiveIndicator: !0, "aria-label": e("al.disable_sound"), isActive: t, onClick: () => r(), children: [
    /* @__PURE__ */ o(J, { children: /* @__PURE__ */ o(_l, { iconTitle: e("al.disable_sound"), size: 36 }) }),
    /* @__PURE__ */ o(Y, { children: e("disable_sound") }),
    /* @__PURE__ */ o(Q, { children: e(t ? "actived" : "deactivated") })
  ] });
};
G(
  ({ children: e, className: t, ...r }, n) => {
    const { setContent: i, isOpen: a } = yt(), s = r;
    return M(() => {
      if (a)
        return i(
          /* @__PURE__ */ o(
            "div",
            {
              ...s,
              ref: n,
              style: { boxShadow: "0 0 15px -5px rgba(0, 0, 0, .2)" },
              className: R(
                "animate-move-up bg-popover border-1 p-4 absolute bottom-2 z-[999999999] left-2 right-2 rounded-lg",
                t
              ),
              children: e
            }
          )
        ), () => i(null);
    }, [a, e, i, t, n, s]), null;
  }
);
G(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ o("div", { ref: n, className: R("flex flex-col leading-snug", t), ...r, children: e })
);
G(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ o("p", { ref: n, className: R("text-base font-bold text-foreground", t), ...r, children: e })
);
G(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ o("span", { ref: n, className: R("text-sm text-muted-foreground font-normal", t), ...r, children: e })
);
G(
  ({ children: e, className: t, ...r }, n) => {
    const { setIsOpen: i } = yt();
    return /* @__PURE__ */ o(te, { onClick: () => i(!0), ref: n, className: R(t), ...r, children: e });
  }
);
G(
  ({ children: e, className: t, ...r }, n) => {
    const { setIsOpen: i } = yt();
    return /* @__PURE__ */ o(te, { onClick: () => i(!1), ref: n, className: R(t), ...r, children: e });
  }
);
const $7 = () => {
  const { content: e } = yt();
  return e;
}, yt = Be((e) => ({
  isOpen: !1,
  setContent: (t) => e({ content: t }),
  setIsOpen: (t) => e((r) => ({ isOpen: typeof t == "function" ? t(r.isOpen) : t }))
})), O7 = () => {
  const { t: e } = $(), { isOpenWidget: t, isLoaded: r } = L();
  return /* @__PURE__ */ o(
    "div",
    {
      className: R(
        "spacing flex flex-col gap-0 transition-[bottom] duration-500 overflow-hidden rounded-xl pt-0 border-1 tracking-normal",
        "leading-normal fixed z-[2147483647] -bottom-[80dvh] right-2 bg-background",
        "sm:w-[420px] w-[248px] h-[80dvh] data-[active='true']:bottom-2"
      ),
      style: { boxShadow: "0 0 30px -5px rgba(0, 0, 0, 0.2)" },
      "data-active": t && r,
      children: [
        /* @__PURE__ */ o(Pl, {}),
        /* @__PURE__ */ o(El, { children: [
          /* @__PURE__ */ o(Nl, {}),
          /* @__PURE__ */ o(We, { children: e("sections.text_and_typography") }),
          /* @__PURE__ */ o(zl, {}),
          /* @__PURE__ */ o(Dl, {}),
          /* @__PURE__ */ o(r7, {}),
          /* @__PURE__ */ o(I7, {}),
          /* @__PURE__ */ o(Yl, {}),
          /* @__PURE__ */ o(We, { children: e("sections.focus_and_visibility") }),
          /* @__PURE__ */ o(Ul, {}),
          /* @__PURE__ */ o(Hl, {}),
          /* @__PURE__ */ o(e7, {}),
          /* @__PURE__ */ o(We, { children: e("sections.reading_and_comprehension") }),
          /* @__PURE__ */ o(S7, {}),
          /* @__PURE__ */ o(ql, {}),
          /* @__PURE__ */ o(d7, {}),
          /* @__PURE__ */ o(u7, {}),
          /* @__PURE__ */ o(M7, {}),
          /* @__PURE__ */ o(We, { children: e("sections.distraction_reduction") }),
          /* @__PURE__ */ o(l7, {}),
          /* @__PURE__ */ o(i7, {}),
          /* @__PURE__ */ o(N7, {})
        ] }),
        /* @__PURE__ */ o($7, {})
      ]
    }
  );
}, z7 = ({ children: e, root: t }) => {
  const { theme: r } = $o();
  return M(() => {
    const n = t || document.documentElement;
    (n instanceof ShadowRoot ? n.host : n).classList.toggle("dark", r === "dark");
  }, [r, t]), e;
}, B7 = () => {
  const e = ie(null), t = ie(null), r = ie(null), n = rr(), { t: i } = $(), { height: a } = No(), { y: s } = Ro();
  M(() => {
    c(s || a / 2);
  }, [s, a]), M(() => {
    n && c(a / 2);
  }, [n, a]);
  function c(d) {
    if (!t.current || !r.current) return;
    t.current.style.height = `${(d > a - 54 ? a - 54 : d) - (d < 4 ? 0 : 48)}px`, r.current.style.height = `${a - (d < 58 ? 56 : d) - 48}px`;
    let l = d - 24;
    l < 32 ? l = 32 : l > a - 78 && (l = a - 78), e.current && (e.current.style.top = `${l}px`);
  }
  return /* @__PURE__ */ o("div", { className: "z-[9999999] relative", children: [
    n && /* @__PURE__ */ o(
      te,
      {
        ref: e,
        onTouchMove: (d) => {
          d.preventDefault(), c(d.touches[0].clientY);
        },
        className: R(
          "w-8 h-12 top-[calc(45dvh+20px)] rounded-l-none rounded-r-[8px] items-center fixed left-0 bg-primary"
        ),
        "aria-label": i("al.move_reading_mask"),
        children: /* @__PURE__ */ o(el, { size: 24, className: "fill-white", iconTitle: i("al.move_reading_mask") })
      }
    ),
    /* @__PURE__ */ o(
      "div",
      {
        ref: t,
        className: "top-0 h-[45dvh] pointer-events-none w-full fixed bg-black/40 left-0 border-b-8 border-primary"
      }
    ),
    /* @__PURE__ */ o(
      "div",
      {
        ref: r,
        className: "bottom-0 pointer-events-none h-[45dvh] left-0 fixed border-t-8  w-full border-primary bg-black/20"
      }
    )
  ] });
}, F7 = () => {
  const e = ie(null), t = ie(null), r = ie(null), n = rr(), { t: i } = $(), { width: a, height: s } = No(), { x: c, y: d } = Ro();
  M(() => {
    c && d && l(c, d);
  }, [d, c]), M(() => {
    n && l(a / 2, 24);
  }, [n, a]);
  function l(p, u) {
    if (!t.current) return;
    const f = t.current.offsetWidth;
    if (n || (t.current.style.left = `${p - f / 2}px`, t.current.style.top = `${u < 30 ? 16 : u - 16}px`), e.current && r.current && n) {
      const h = p < 24 ? 4 : p > a - 40 ? a - 54 : p - 24;
      t.current.style.top = `${u < 24 ? 14 : u > s - 32 ? s - 42 : u - 10}px`, e.current.style.top = `${u < 24 ? 20 : u > s - 32 ? s - 37 : u - 5}px`, e.current.style.left = `${h}px`, r.current.style.left = `${h + 12}px`, r.current.style.top = `${u < 24 ? 6 : u > s - 36 ? s - 49 : u - 17.1}px`;
    }
  }
  return /* @__PURE__ */ o("div", { className: "z-[9999999] relative", children: [
    n && /* @__PURE__ */ o(
      te,
      {
        ref: e,
        onTouchMove: (p) => {
          p.preventDefault(), l(p.touches[0].clientX, p.touches[0].clientY);
        },
        className: R(
          "w-12 h-8 z-[9999999] left-1/2 fixed bg-primary border-2 border-white border-t-primary top-0 rounded-b-md rounded-t-none"
        ),
        "aria-label": i("al.move_reading_mask"),
        children: /* @__PURE__ */ o(gl, { size: 22, className: "fill-white", iconTitle: i("al.move_reading_mask") })
      }
    ),
    /* @__PURE__ */ o(
      "div",
      {
        ref: t,
        className: R(
          "w-xl fixed top-4 left-[calc(50dvw-36rem/2)] h-2 grid place-items-center border-2 border-white bg-primary rounded-full",
          n && "translate-none !left-0 !right-0 !w-auto rounded-none"
        ),
        children: !n && /* @__PURE__ */ o(Bn, { iconTitle: "", className: "bottom-[3.7px] absolute" })
      }
    ),
    /* @__PURE__ */ o("span", { ref: r, className: R("absolute bottom-[3.7px]", n ? "fixed" : "hidden"), children: /* @__PURE__ */ o(Bn, { iconTitle: "" }) })
  ] });
}, H7 = () => {
  const e = ie(null), { t } = $(), { type: r, event: n, onClick: i, isActive: a, render: s } = Ae(), [c, d] = z({ x: 0, y: 0 });
  return M(() => {
    const l = (p) => {
      e.current && !e.current.contains(p.target) && Ae.setState({ isActive: !1 });
    };
    return a ? document.addEventListener("click", l) : document.removeEventListener("click", l), () => {
      document.removeEventListener("click", l);
    };
  }, [a]), M(() => {
    if (n) {
      const { pageX: l, pageY: p } = n;
      d({ x: l, y: p });
      const u = e.current;
      u && (u.classList.remove("animate-scale"), u.offsetWidth, u.classList.add("animate-scale"));
    }
  }, [n]), /* @__PURE__ */ o(
    te,
    {
      ref: e,
      onClick: i,
      style: {
        left: `${c.x}px`,
        top: `${c.y - 32}px`,
        boxShadow: "2px 2px 10px 4px rgba(0, 0, 0, .2)"
      },
      className: R(
        "group text-primary-foreground rounded-md absolute z-[2147483647] -translate-x-6 -translate-y-full px-3 h-9 animate-scale"
      ),
      children: [
        s || /* @__PURE__ */ o(re, { children: [
          r === "button" ? /* @__PURE__ */ o(ml, { size: 20, iconTitle: t("interact") }) : /* @__PURE__ */ o(vl, { size: 20, iconTitle: t("access_link") }),
          /* @__PURE__ */ o("span", { className: "relative bottom-0.5 font-medium text-base", children: t(r === "button" ? "interact" : "access_link") })
        ] }),
        /* @__PURE__ */ o("span", { className: "absolute inset-0 bg-primary group-hover:brightness-85 rounded-md -z-[1]" }),
        /* @__PURE__ */ o("span", { className: "size-4 rotate-45 absolute brightness-85 -translate-x-1/2 -z-[2] -bottom-5 left-6 bg-primary" })
      ]
    }
  );
}, T7 = ["masculino", "feminino", "neutro"], V1 = async (e) => {
  var d, l, p, u, f, h;
  const t = e.trim().replace(".", "");
  if (!t) return null;
  const i = await (await fetch(((_) => `https://pt.wiktionary.org/w/api.php?action=parse&redirects=1&format=json&origin=*&utf8=1&page=${encodeURIComponent(
    _.toLowerCase().replace(".", "")
  )}&prop=text&formatversion=2`)(t))).json(), a = (d = i == null ? void 0 : i.parse) == null ? void 0 : d.text;
  if (!a) return null;
  const s = D7(a, t);
  if ((((l = s.plural) == null ? void 0 : l.toLowerCase()) !== t.toLowerCase() || ((p = s.definitions) == null ? void 0 : p.some((_) => _.toLowerCase().includes("plural de")))) && !(s.definitions && s.definitions.length > 3)) {
    if (s.plural) return await V1(s.plural);
    let _;
    const C = (f = (u = s.definitions) == null ? void 0 : u.find((S) => S.toLowerCase().includes("plural de"))) == null ? void 0 : f.match(/plural de (.+)/i);
    if (_ = (h = C == null ? void 0 : C[1]) == null ? void 0 : h.trim(), _)
      return await V1(_);
  }
  return { ...s, title: t };
};
function D7(e, t) {
  var _, C, S, A, b, g, m;
  const n = new DOMParser().parseFromString(e, "text/html"), i = (S = (C = (_ = n.querySelector("tbody")) == null ? void 0 : _.innerHTML.match(new RegExp(`title="(?<gender>${T7.join("|")})"`))) == null ? void 0 : C.groups) == null ? void 0 : S.gender, a = Array.from(n.querySelectorAll("ol > li")).map((y) => {
    var k;
    const v = y == null ? void 0 : y.querySelectorAll("span.mw-cite-backlink");
    return v == null || v.forEach((I) => I.remove()), (k = y == null ? void 0 : y.textContent) == null ? void 0 : k.trim();
  }).filter((y) => y !== t).filter((y, v, k) => k.indexOf(y) === v).filter(Boolean), s = (b = (A = n.querySelector("h2")) == null ? void 0 : A.textContent) == null ? void 0 : b.trim(), c = Array.from(n.querySelectorAll("b")).find(
    (y) => y.innerHTML.includes("<u>") || y.innerHTML.includes(".")
  ), d = (g = c == null ? void 0 : c.textContent) == null ? void 0 : g.trim(), l = Z7(n), p = {}, u = n.querySelector("table.traduções");
  u && u.querySelectorAll("tr").forEach((v) => {
    var O;
    const k = v.querySelector("td"), I = v.querySelectorAll("td ~ td a");
    if (k && I.length > 0) {
      const W = (O = k.textContent) == null ? void 0 : O.trim().toLowerCase(), H = Array.from(I).map((F) => {
        var ne;
        return (ne = F.textContent) == null ? void 0 : ne.trim();
      }).filter(Boolean);
      W && (p[W] = H);
    }
  });
  const f = ((m = n.querySelector("img")) == null ? void 0 : m.getAttribute("src")) || void 0, h = Object.keys(p).length > 0 ? p : void 0;
  return {
    wordClass: s,
    pronunciation: d,
    definitions: a,
    etymology: l,
    gender: i,
    imgUrl: f,
    translations: h
  };
}
function Z7(e) {
  var n, i, a;
  let t;
  const r = Array.from(e.querySelectorAll("h2, h3")).find(
    (s) => {
      var c;
      return (c = s.textContent) == null ? void 0 : c.toLowerCase().includes("etimologia");
    }
  );
  if (r) {
    const s = (n = r.parentElement) == null ? void 0 : n.nextElementSibling;
    t = (a = (i = s == null ? void 0 : s.firstChild) == null ? void 0 : i.textContent) == null ? void 0 : a.trim();
  }
  return t;
}
const q7 = G(({ className: e, size: t = 24, ...r }, n) => /* @__PURE__ */ o(re, { children: /* @__PURE__ */ o(
  "span",
  {
    className: R("flex text-primary items-center justify-center aspect-square", e),
    ref: n,
    ...r,
    children: [
      /* @__PURE__ */ o(
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
          children: /* @__PURE__ */ o("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
        }
      ),
      /* @__PURE__ */ o("span", { className: "sr-only", children: "Loading..." })
    ]
  }
) })), V7 = () => {
  const { t: e } = $();
  return /* @__PURE__ */ o("div", { className: "flex flex-col items-center py-8 justify-center gap-2", children: [
    /* @__PURE__ */ o(q7, { size: 32, className: "relative top-0.5" }),
    /* @__PURE__ */ o("span", { className: "animate-pulse text-sm", children: e("status.searching") })
  ] });
}, j7 = {
  data: null,
  isSearchOpen: !1,
  isFetching: !1
}, Ye = Be()(() => ({
  ...j7
})), U7 = () => {
  var r, n;
  const { data: e } = Ye();
  if (!e) return null;
  const t = (((r = e.definitions) == null ? void 0 : r.length) || 0) > 1;
  return /* @__PURE__ */ o("div", { className: "text-base space-y-4", children: [
    /* @__PURE__ */ o("p", { children: [
      /* @__PURE__ */ o("strong", { className: "italic", children: (n = e.pronunciation) == null ? void 0 : n.split(".").join("-").replace(":", "") }),
      e.gender && `, ${e.gender}`
    ] }),
    /* @__PURE__ */ o(R1, { label: t ? "Definições" : "Definição", value: e.definitions }),
    /* @__PURE__ */ o(R1, { label: "Classe gramatical", value: e.wordClass }),
    /* @__PURE__ */ o(R1, { label: "Etimologia", value: e.etymology })
  ] });
};
function R1({ label: e, value: t }) {
  return t != null && t.length ? Array.isArray(t) ? /* @__PURE__ */ o("div", { children: [
    /* @__PURE__ */ o("p", { className: "text-muted-foreground text-base font-semibold", children: e }),
    /* @__PURE__ */ o("ol", { className: R(t.length > 1 && "list-decimal ps-2 list-inside space-y-1"), children: t.slice(0, 5).map((r, n) => /* @__PURE__ */ o("li", { children: r }, n)) })
  ] }) : /* @__PURE__ */ o("div", { children: [
    /* @__PURE__ */ o("p", { className: "text-muted-foreground text-base font-semibold", children: e }),
    /* @__PURE__ */ o("span", { children: t.split(`
`).map((r, n) => /* @__PURE__ */ o("span", { children: [
      r,
      /* @__PURE__ */ o("br", {})
    ] }, n)) })
  ] }) : null;
}
const Qo = ({ size: e = 24, iconTitle: t, ...r }) => /* @__PURE__ */ o(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...r,
    "aria-hidden": t ? "false" : "true",
    children: [
      /* @__PURE__ */ o("title", { children: t }),
      /* @__PURE__ */ o("path", { d: "M9.95229 17.9046C7.75215 17.9046 5.87674 17.1292 4.32604 15.5785C2.77535 14.0278 2 12.1524 2 9.95229C2 7.75215 2.77535 5.87674 4.32604 4.32604C5.87674 2.77535 7.75215 2 9.95229 2C12.1524 2 14.0278 2.77535 15.5785 4.32604C17.1292 5.87674 17.9046 7.75215 17.9046 9.95229C17.9046 10.721 17.7919 11.4831 17.5666 12.2386C17.3413 12.994 17.0033 13.6899 16.5527 14.326L21.5626 19.336C21.8542 19.6276 22 19.9987 22 20.4493C22 20.8999 21.8542 21.271 21.5626 21.5626C21.271 21.8542 20.8999 22 20.4493 22C19.9987 22 19.6276 21.8542 19.336 21.5626L14.326 16.5527C13.6899 17.0033 12.994 17.3413 12.2386 17.5666C11.4831 17.7919 10.721 17.9046 9.95229 17.9046ZM9.95229 14.7237C11.2777 14.7237 12.4042 14.2598 13.332 13.332C14.2598 12.4042 14.7237 11.2777 14.7237 9.95229C14.7237 8.62691 14.2598 7.50033 13.332 6.57256C12.4042 5.6448 11.2777 5.18091 9.95229 5.18091C8.62691 5.18091 7.50033 5.6448 6.57256 6.57256C5.6448 7.50033 5.18091 8.62691 5.18091 9.95229C5.18091 11.2777 5.6448 12.4042 6.57256 13.332C7.50033 14.2598 8.62691 14.7237 9.95229 14.7237Z" }),
      " "
    ]
  }
), G7 = () => {
  const [e, t] = z(""), { dictionary: r } = L(), { t: n } = $(), i = () => {
    Ye.setState({ isSearchOpen: !1 });
  }, a = () => {
    L.setState({ dictionary: { ...r, isActive: !0, word: e.trim() } });
  };
  return /* @__PURE__ */ o("div", { className: "flex items-center w-full gap-4", children: [
    /* @__PURE__ */ o(
      "input",
      {
        autofocus: !0,
        onKeyDown: (c) => {
          c.key === "Enter" && e.trim().length >= 3 && a();
        },
        className: "w-full h-10 border-1 animate-move-up placeholder:text-sm rounded-full px-4 focus:outline-solid outline-primary outline-1 focus:border-primary",
        placeholder: n("al.dictionary.search"),
        type: "text",
        value: e,
        onInput: (c) => t(c.currentTarget.value)
      }
    ),
    /* @__PURE__ */ o(
      te,
      {
        disabled: e.trim().length < 3,
        onClick: a,
        title: n("al.dictionary.search"),
        "aria-label": n("al.dictionary.search"),
        className: "h-10 aspect-square bg-primary group ml-auto rounded-full",
        children: /* @__PURE__ */ o(Qo, { className: "fill-primary-foreground", iconTitle: n("al.dictionary.search"), size: 20 })
      }
    ),
    /* @__PURE__ */ o(
      te,
      {
        onClick: i,
        title: n("al.close"),
        "aria-label": n("al.close"),
        className: "h-10 hover:bg-destructive/10 hover:[&>svg]:fill-destructive aspect-square hover:border-destructive/20 border-1 group ml-auto rounded-full",
        children: /* @__PURE__ */ o(dr, { className: "fill-muted-foreground group-hover:fill-foreground", iconTitle: n("al.close"), size: 20 })
      }
    )
  ] });
}, W7 = G(({ children: e, content: t, offset: r = 12, align: n = "center", placement: i = "top", className: a, ...s }, c) => {
  const [d, l] = z(!1), p = `vwp-tooltip-${Math.random().toString(36).slice(2, 9)}`;
  return t ? /* @__PURE__ */ o(
    "div",
    {
      className: "relative inline-block",
      onMouseEnter: () => l(!0),
      onMouseLeave: () => l(!1),
      onFocus: () => l(!0),
      onBlur: () => l(!1),
      children: [
        /* @__PURE__ */ o("span", { "aria-describedby": p, children: e }),
        d && /* @__PURE__ */ o(
          "div",
          {
            ref: c,
            id: p,
            role: "tooltip",
            style: { boxShadow: "2px 2px 15px -5px rgba(0, 0, 0, .2)", ...(() => {
              switch (i) {
                case "top":
                  return { top: `calc((-100% + 8px) - ${r}px)` };
                case "bottom":
                  return { bottom: `calc((-100% + 8px) - ${r}px)` };
                case "left":
                  return { left: `calc((-100% + 8px) - ${r}px)` };
                case "right":
                  return { right: `calc((-100% + 8px) - ${r}px)` };
                default:
                  return { top: `calc((-100% + 8px) - ${r}px)` };
              }
            })() },
            className: R(
              "absolute border-1 px-3 py-1.5 z-[2147483647] text-sm text-popover-foreground bg-popover rounded-md shadow-lg transition-opacity duration-200",
              i === "bottom" && "left-1/2 -translate-x-1/2 translate-y-1/2",
              i === "right" && "top-1/2 translate-x-1/2 -translate-y-1/2",
              i === "top" && "left-1/2 -translate-1/2",
              i === "left" && "top-1/2 -translate-y-1/2",
              n === "start" && "!left-0 right-auto translate-x-0",
              n === "end" && "!right-0 translate-x-0 left-auto",
              a
            ),
            ...s,
            children: t
          }
        )
      ]
    }
  ) : e;
}), X7 = () => {
  const { t: e } = $(), { dictionary: t } = L(), { data: r, isFetching: n, isSearchOpen: i } = Ye(), a = "speechSynthesis" in window, [s, c] = z(!1);
  M(() => {
    Ko();
  }, [r]), M(() => {
    const u = Oe("[vw-access-button]");
    c(!!u);
  }, []);
  const d = () => {
    Ye.setState({ isSearchOpen: !0 });
  }, l = (u) => {
    Ae.setState({
      isActive: !0,
      event: u,
      onClick: () => {
        const f = Oe("[vw-access-button]");
        f ? f.click() : alert("VLibras Widget não encontrado!");
      },
      render: /* @__PURE__ */ o(re, { children: "Abrir VLibras Widget" })
    });
  }, p = ht(() => {
    var h, _, C;
    const f = `${(((h = r == null ? void 0 : r.definitions) == null ? void 0 : h.length) || 0) > 1 ? "Definições" : "Definição"} de ${r == null ? void 0 : r.title}: ${(C = (_ = r == null ? void 0 : r.definitions) == null ? void 0 : _.slice(0, 5)) == null ? void 0 : C.join(". ")}`;
    q1(r ? f : e(t != null && t.word ? "dictionary.no_result" : "dictionary.select_word"));
  }, [r, e, t == null ? void 0 : t.word]);
  return /* @__PURE__ */ o("div", { className: R(n && "pointer-events-none opacity-50", "flex items-center gap-4 p-4 border-t-1"), children: [
    !i && /* @__PURE__ */ o(re, { children: [
      /* @__PURE__ */ o(
        te,
        {
          disabled: !s,
          "aria-label": e("al.definition_to_libras"),
          onClick: l,
          className: "bg-primary text-primary-foreground px-4 h-10 rounded-md hover:brightness-90 hidden",
          children: [
            /* @__PURE__ */ o(Cl, { "aria-hidden": !0, size: 20 }),
            e("definition_to_libras")
          ]
        }
      ),
      /* @__PURE__ */ o(
        W7,
        {
          offset: 8,
          align: "start",
          className: "w-72",
          placement: "top",
          content: a ? void 0 : e("speech_is_not_supported"),
          children: /* @__PURE__ */ o(
            te,
            {
              disabled: !a,
              "aria-label": e("al.read_definition"),
              onClick: p,
              className: R(
                r ? "px-4" : "aspect-square",
                "bg-primary text-primary-foreground h-10 rounded-full hover:brightness-90"
              ),
              children: [
                /* @__PURE__ */ o(jo, { size: 18 }),
                r && e("read_definition")
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ o(
        te,
        {
          onClick: d,
          title: e("al.dictionary.search"),
          "aria-label": e("al.dictionary.search"),
          className: "h-10 px-4 border-1 group hover:bg-muted ml-auto rounded-full",
          children: [
            /* @__PURE__ */ o(
              Qo,
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
    i && /* @__PURE__ */ o(G7, {})
  ] });
}, K7 = () => {
  var p;
  const [e, t] = z("bottom"), { toggle: r } = Yo(), { dictionary: n } = L(), { t: i } = $(), { data: a, isLoading: s, error: c } = rs(
    ht(() => V1((n == null ? void 0 : n.word) || ""), [n == null ? void 0 : n.word])
  );
  M(() => {
    Ye.setState({ data: a, isFetching: s });
  }, [a, s]);
  const d = () => {
    t(e === "top" ? "bottom" : "top");
  }, l = !!a && (n == null ? void 0 : n.word) !== (a == null ? void 0 : a.title);
  return c && console.error(c), /* @__PURE__ */ o(
    "div",
    {
      style: { boxShadow: "2px 2px 15px -5px rgba(0, 0, 0, .2)" },
      className: R(
        "fixed z-[2147483647] left-2 transition-all animate-move-up bg-background border-1 rounded-xl sm:w-lg max-sm:right-2",
        e === "top" ? "top-2" : "bottom-2"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex justify-between gap-2 w-full border-b-1 p-4", children: [
          ((p = n == null ? void 0 : n.word) == null ? void 0 : p.trim()) && /* @__PURE__ */ o("p", { className: "text-xl font-semibold leading-none line-clamp-2 pt-2 break-all", children: [
            /* @__PURE__ */ o(Uo, { size: 24, iconTitle: i("dictionary"), className: "inline mr-2 relative -top-1", "aria-hidden": !0 }),
            js(n.word),
            " ",
            l && /* @__PURE__ */ o("span", { className: "text-muted-foreground font-medium text-sm", children: [
              "(",
              a == null ? void 0 : a.title,
              ")"
            ] })
          ] }),
          !(n != null && n.word) && /* @__PURE__ */ o("p", { className: "pt-1", children: i("dictionary.select_word") }),
          /* @__PURE__ */ o(
            te,
            {
              title: i(e === "top" ? "move_bottom" : "move_top"),
              "aria-label": i(e === "top" ? "move_bottom" : "move_top"),
              onClick: d,
              className: "size-9 [&>svg]:not-hover:!fill-muted-foreground ml-auto hover:bg-muted rounded-md aspect-square",
              children: e === "top" ? /* @__PURE__ */ o(bl, { pointerEvents: "none", size: 22 }) : /* @__PURE__ */ o(yl, { pointerEvents: "none", size: 22 })
            }
          ),
          /* @__PURE__ */ o(
            te,
            {
              className: "rounded-md bg-destructive fill-destructive-foreground hover:brightness-90 size-9 aspect-square",
              title: i("dictionary.close"),
              onClick: () => r(!1),
              children: /* @__PURE__ */ o(dr, { "aria-hidden": !0, size: 22, iconTitle: i("dictionary.close") })
            }
          )
        ] }),
        (n == null ? void 0 : n.word) && /* @__PURE__ */ o("div", { className: "p-4 max-h-[calc(32dvh)] overflow-y-auto overflow-hidden", children: [
          s && /* @__PURE__ */ o(V7, {}),
          a && !s && /* @__PURE__ */ o(U7, {}),
          !a && !s && /* @__PURE__ */ o("p", { className: "text-center py-8", children: [
            i("dictionary.no_result"),
            "..."
          ] })
        ] }),
        /* @__PURE__ */ o(X7, {})
      ]
    }
  );
}, Y7 = () => {
  const { readingMask: e, readingGuide: t, dictionary: r } = L(), { isActive: n } = Ae();
  return /* @__PURE__ */ o(re, { children: [
    e && /* @__PURE__ */ o(B7, {}),
    t && /* @__PURE__ */ o(F7, {}),
    n && /* @__PURE__ */ o(H7, {}),
    (r == null ? void 0 : r.isActive) && /* @__PURE__ */ o(K7, {})
  ] });
}, Q7 = `/*! tailwindcss v4.0.15 | MIT License | https://tailwindcss.com */@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs--line-height:calc(1/.75);--text-sm--line-height:calc(1.25/.875);--text-base--line-height: 1.5 ;--text-lg--line-height:calc(1.75/1.125);--text-xl--line-height:calc(1.75/1.25);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-normal:0em;--leading-tight:1.25;--leading-snug:1.375;--leading-normal:1.5;--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--tw-translate-y:0;--tw-translate-x:0}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:color-mix(in oklab,currentColor 50%,transparent)}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*{--tw-border-style:solid;border-style:solid;border-color:var(--border);outline-color:color-mix(in oklab,var(--ring)50%,transparent)}:host{border-color:var(--border);fill:var(--foreground);color:var(--foreground)}}@layer components;@layer utilities{.\\!pointer-events-none{pointer-events:none!important}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:calc(var(--spacing)*0)}.-top-0\\.5{top:calc(var(--spacing)*-.5)}.-top-1{top:calc(var(--spacing)*-1)}.-top-\\[3px\\]{top:-3px}.top-0{top:calc(var(--spacing)*0)}.top-0\\.5{top:calc(var(--spacing)*.5)}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing)*2)}.top-4{top:calc(var(--spacing)*4)}.top-\\[calc\\(45dvh\\+20px\\)\\]{top:calc(45dvh + 20px)}.\\!right-0{right:calc(var(--spacing)*0)!important}.right-2{right:calc(var(--spacing)*2)}.right-7{right:calc(var(--spacing)*7)}.right-auto{right:auto}.-bottom-2{bottom:calc(var(--spacing)*-2)}.-bottom-5{bottom:calc(var(--spacing)*-5)}.-bottom-\\[80dvh\\]{bottom:-80dvh}.bottom-0{bottom:calc(var(--spacing)*0)}.bottom-0\\.5{bottom:calc(var(--spacing)*.5)}.bottom-2{bottom:calc(var(--spacing)*2)}.bottom-\\[3\\.7px\\]{bottom:3.7px}.\\!left-0{left:calc(var(--spacing)*0)!important}.left-0{left:calc(var(--spacing)*0)}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing)*2)}.left-6{left:calc(var(--spacing)*6)}.left-\\[calc\\(50dvw-36rem\\/2\\)\\]{left:calc(50dvw - 18rem)}.left-auto{left:auto}.-z-\\[1\\]{z-index:-1}.-z-\\[2\\]{z-index:-2}.z-10{z-index:10}.z-\\[9999999\\]{z-index:9999999}.z-\\[99999999\\]{z-index:99999999}.z-\\[100000000\\]{z-index:100000000}.z-\\[999999999\\]{z-index:999999999}.z-\\[2147483647\\]{z-index:2147483647}.col-\\[1\\/-1\\]{grid-column:1/-1}.mr-1\\.5{margin-right:calc(var(--spacing)*1.5)}.mr-2{margin-right:calc(var(--spacing)*2)}.ml-1{margin-left:calc(var(--spacing)*1)}.ml-auto{margin-left:auto}.line-clamp-1{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.aspect-square{aspect-ratio:1}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.size-7{width:calc(var(--spacing)*7);height:calc(var(--spacing)*7)}.size-8{width:calc(var(--spacing)*8);height:calc(var(--spacing)*8)}.size-9{width:calc(var(--spacing)*9);height:calc(var(--spacing)*9)}.h-2{height:calc(var(--spacing)*2)}.h-2\\.5{height:calc(var(--spacing)*2.5)}.h-4{height:calc(var(--spacing)*4)}.h-4\\.5{height:calc(var(--spacing)*4.5)}.h-8{height:calc(var(--spacing)*8)}.h-9{height:calc(var(--spacing)*9)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.h-32{height:calc(var(--spacing)*32)}.h-\\[1px\\]{height:1px}.h-\\[45dvh\\]{height:45dvh}.h-\\[80dvh\\]{height:80dvh}.h-full{height:100%}.\\!max-h-0{max-height:calc(var(--spacing)*0)!important}.max-h-\\[400px\\]{max-height:400px}.max-h-\\[calc\\(32dvh\\)\\]{max-height:32dvh}.\\!w-auto{width:auto!important}.w-2\\.5{width:calc(var(--spacing)*2.5)}.w-8{width:calc(var(--spacing)*8)}.w-12{width:calc(var(--spacing)*12)}.w-72{width:calc(var(--spacing)*72)}.w-\\[248px\\]{width:248px}.w-full{width:100%}.w-xl{width:576px}.-translate-1\\/2{--tw-translate-x: -50% ;--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-6{--tw-translate-x:calc(var(--spacing)*-6);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-1\\/2{--tw-translate-x: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-full{--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-1\\/2{--tw-translate-y: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-none{translate:none}.rotate-0{rotate:none}.rotate-45{rotate:45deg}.rotate-180{rotate:180deg}.animate-move-up{animation:.2s ease-in-out move-up}.animate-pulse{animation:var(--animate-pulse)}.animate-scale{animation:.2s ease-in-out scale}.animate-spin{animation:var(--animate-spin)}.\\!cursor-not-allowed{cursor:not-allowed!important}.cursor-pointer{cursor:pointer}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.auto-rows-min{grid-auto-rows:min-content}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.place-content-center{place-content:center}.place-items-center{place-items:center}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-start{justify-content:flex-start}.gap-0{gap:calc(var(--spacing)*0)}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.gap-x-1{column-gap:calc(var(--spacing)*1)}.gap-x-2{column-gap:calc(var(--spacing)*2)}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-none{border-radius:0}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:calc(var(--radius) + 4px)}.rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.rounded-l-none{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-\\[8px\\]{border-top-right-radius:8px;border-bottom-right-radius:8px}.rounded-b-md{border-bottom-right-radius:calc(var(--radius) - 2px);border-bottom-left-radius:calc(var(--radius) - 2px)}.border,.border-1{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t-1{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t-8{border-top-style:var(--tw-border-style);border-top-width:8px}.border-b-1{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-8{border-bottom-style:var(--tw-border-style);border-bottom-width:8px}.\\!border-border{border-color:var(--border)!important}.border-border{border-color:var(--border)}.border-primary{border-color:var(--primary)}.border-primary\\/50{border-color:color-mix(in oklab,var(--primary)50%,transparent)}.border-white{border-color:var(--color-white)}.border-t-primary{border-top-color:var(--primary)}.\\!bg-muted\\/30{background-color:color-mix(in oklab,var(--muted)30%,transparent)!important}.\\!bg-primary\\/10{background-color:color-mix(in oklab,var(--primary)10%,transparent)!important}.\\!bg-transparent{background-color:#0000!important}.bg-background{background-color:var(--background)}.bg-black\\/20{background-color:color-mix(in oklab,var(--color-black)20%,transparent)}.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black)40%,transparent)}.bg-border{background-color:var(--border)}.bg-destructive{background-color:var(--destructive)}.bg-muted{background-color:var(--muted)}.bg-popover{background-color:var(--popover)}.bg-primary{background-color:var(--primary)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.fill-\\[\\#2c9e2c\\]{fill:#2c9e2c}.fill-destructive-foreground{fill:var(--destructive-foreground)}.fill-foreground\\/80{fill:color-mix(in oklab,var(--foreground)80%,transparent)}.fill-muted-foreground{fill:var(--muted-foreground)}.fill-primary{fill:var(--primary)}.fill-primary-foreground{fill:var(--primary-foreground)}.fill-white{fill:var(--color-white)}.p-2{padding:calc(var(--spacing)*2)}.p-4{padding:calc(var(--spacing)*4)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-8{padding-block:calc(var(--spacing)*8)}.ps-2{padding-inline-start:calc(var(--spacing)*2)}.pt-0{padding-top:calc(var(--spacing)*0)}.pt-1{padding-top:calc(var(--spacing)*1)}.pt-2{padding-top:calc(var(--spacing)*2)}.pb-2{padding-bottom:calc(var(--spacing)*2)}.pl-4{padding-left:calc(var(--spacing)*4)}.text-center{text-align:center}.text-base{font-size:calc(var(--font-size)*1);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:calc(var(--font-size)*1.125);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:calc(var(--font-size)*1.25);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:calc(var(--font-size)*.75);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[13\\.5px\\]{font-size:13.5px}.text-\\[15px\\]{font-size:15px}.leading-none{--tw-leading:1;line-height:1}.leading-normal{--tw-leading:var(--leading-normal);line-height:var(--leading-normal)}.leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-normal{--tw-tracking:var(--tracking-normal);letter-spacing:var(--tracking-normal)}.break-all{word-break:break-all}.\\!text-muted-foreground{color:var(--muted-foreground)!important}.text-foreground{color:var(--foreground)}.text-foreground\\/80{color:color-mix(in oklab,var(--foreground)80%,transparent)}.text-muted-foreground{color:var(--muted-foreground)}.text-popover-foreground{color:var(--popover-foreground)}.text-primary{color:var(--primary)}.text-primary-foreground{color:var(--primary-foreground)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.italic{font-style:italic}.opacity-50{opacity:.5}.opacity-80{opacity:.8}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline,.outline-1{outline-style:var(--tw-outline-style);outline-width:1px}.outline-primary{outline-color:var(--primary)}.brightness-85{--tw-brightness:brightness(85%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[bottom\\]{transition-property:bottom;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-500{--tw-duration:.5s;transition-duration:.5s}:is(.\\*\\:\\!pointer-events-none>*){pointer-events:none!important}:is(.\\*\\:pointer-events-none>*){pointer-events:none}@media (hover:hover){.group-hover\\:fill-foreground:is(:where(.group):hover *){fill:var(--foreground)}.group-hover\\:brightness-85:is(:where(.group):hover *){--tw-brightness:brightness(85%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}}.placeholder\\:text-sm::placeholder{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}@media (hover:hover){.hover\\:border-destructive\\/20:hover{border-color:color-mix(in oklab,var(--destructive)20%,transparent)}.hover\\:border-primary:hover{border-color:var(--primary)}.hover\\:bg-destructive\\/10:hover{background-color:color-mix(in oklab,var(--destructive)10%,transparent)}.hover\\:bg-muted:hover{background-color:var(--muted)}.hover\\:fill-foreground:hover{fill:var(--foreground)}.hover\\:text-foreground:hover{color:var(--foreground)}.hover\\:brightness-90:hover{--tw-brightness:brightness(90%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.hover\\:brightness-110:hover{--tw-brightness:brightness(110%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}}.focus\\:border-primary:focus{border-color:var(--primary)}.focus\\:outline-solid:focus{--tw-outline-style:solid;outline-style:solid}.data-\\[active\\=\\'true\\'\\]\\:bottom-2[data-active=true]{bottom:calc(var(--spacing)*2)}.data-\\[active\\=\\'true\\'\\]\\:grid[data-active=true]{display:grid}.data-\\[active\\=true\\]\\:\\!border-primary[data-active=true]{border-color:var(--primary)!important}.data-\\[active\\=true\\]\\:\\!bg-primary\\/20[data-active=true]{background-color:color-mix(in oklab,var(--primary)20%,transparent)!important}@media (width<40rem){.max-sm\\:right-2{right:calc(var(--spacing)*2)}.max-sm\\:hidden{display:none}.max-sm\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.max-sm\\:p-2\\.5{padding:calc(var(--spacing)*2.5)}.max-sm\\:pl-3{padding-left:calc(var(--spacing)*3)}.max-sm\\:text-sm{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}}@media (width>=40rem){.sm\\:size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.sm\\:size-7{width:calc(var(--spacing)*7);height:calc(var(--spacing)*7)}.sm\\:size-9{width:calc(var(--spacing)*9);height:calc(var(--spacing)*9)}.sm\\:size-10{width:calc(var(--spacing)*10);height:calc(var(--spacing)*10)}.sm\\:h-\\[22px\\]{height:22px}.sm\\:w-\\[420px\\]{width:420px}.sm\\:w-lg{width:512px}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:px-4{padding-inline:calc(var(--spacing)*4)}.sm\\:pt-2{padding-top:calc(var(--spacing)*2)}.sm\\:pb-4{padding-bottom:calc(var(--spacing)*4)}.sm\\:text-sm{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}}.dark\\:bg-background:is(:host(.dark) *){background-color:var(--background)}.dark\\:bg-muted:is(:host(.dark) *){background-color:var(--muted)}.dark\\:\\!shadow-none:is(:host(.dark) *){--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.\\[\\&\\>\\*\\]\\:\\!pointer-events-none>*{pointer-events:none!important}.\\[\\&\\>\\*\\]\\:fill-primary>*{fill:var(--primary)}.\\[\\&\\>\\*\\]\\:text-primary>*{color:var(--primary)}.\\[\\&\\>svg\\]\\:pointer-events-none>svg{pointer-events:none}.\\[\\&\\>svg\\]\\:rounded-full>svg{border-radius:3.40282e38px}.\\[\\&\\>svg\\]\\:bg-accent>svg{background-color:var(--accent)}.\\[\\&\\>svg\\]\\:fill-foreground>svg{fill:var(--foreground)}.\\[\\&\\>svg\\]\\:fill-foreground\\/80>svg{fill:color-mix(in oklab,var(--foreground)80%,transparent)}.\\[\\&\\>svg\\]\\:p-1\\.5>svg{padding:calc(var(--spacing)*1.5)}.\\[\\&\\>svg\\]\\:not-hover\\:\\!fill-muted-foreground>svg:not(:hover){fill:var(--muted-foreground)!important}@media not (hover:hover){.\\[\\&\\>svg\\]\\:not-hover\\:\\!fill-muted-foreground>svg{fill:var(--muted-foreground)!important}}@media (hover:hover){.hover\\:\\[\\&\\>svg\\]\\:fill-destructive:hover>svg{fill:var(--destructive)}.hover\\:\\[\\&\\>svg\\]\\:fill-foreground:hover>svg{fill:var(--foreground)}}.data-\\[active\\=true\\]\\:\\[\\&\\>svg\\]\\:bg-primary[data-active=true]>svg{background-color:var(--primary)}.data-\\[active\\=true\\]\\:\\[\\&\\>svg\\]\\:fill-primary-foreground[data-active=true]>svg{fill:var(--primary-foreground)}}:host{--background:oklch(1 0 0);--foreground:oklch(25% 0 0);--popover:oklch(1 0 0);--popover-foreground:oklch(.145 0 0);--primary:oklch(56.99% .1959 259.98);--primary-foreground:oklch(1 0 0);--secondary:oklch(.97 0 0);--secondary-foreground:oklch(.205 0 0);--muted:oklch(.97 0 0);--muted-foreground:oklch(.556 0 0);--accent:oklch(.97 0 0);--accent-foreground:oklch(.205 0 0);--destructive:oklch(.577 .245 27.325);--destructive-foreground:oklch(.985 0 0);--border:oklch(.922 0 0);--input:oklch(.922 0 0);--ring:oklch(.708 0 0);--radius:10px;--spacing:4px;--font-sans:"VLibrasWidget_Font",sans-serif;--font-size:16px}:host(.dark){--background:oklch(.16 0 0);--foreground:oklch(.985 0 0);--popover:oklch(.2 0 0);--popover-foreground:oklch(.985 0 0);--primary:oklch(56.99% .1959 259.98);--primary-foreground:oklch(1 0 0);--secondary:oklch(.269 0 0);--secondary-foreground:oklch(.985 0 0);--muted:oklch(.2 0 0);--muted-foreground:oklch(.708 0 0);--accent:oklch(.269 0 0);--accent-foreground:oklch(.985 0 0);--destructive:oklch(.637 .237 25.331);--destructive-foreground:oklch(.985 0 0);--border:oklch(.269 0 0);--input:oklch(.269 0 0);--ring:oklch(.439 0 0)}:host{font-family:var(--font-sans)!important}:host ::-webkit-scrollbar{height:calc(var(--spacing)*2.5);width:calc(var(--spacing)*2.5)}:host ::-webkit-scrollbar-track{background-color:#0000}:host ::-webkit-scrollbar-thumb{border-style:var(--tw-border-style);--tw-border-style:solid;background-color:var(--border);background-clip:padding-box;border:1px solid #0000;border-radius:3.40282e38px}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}@keyframes scale{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes move-up{0%{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}`, J7 = ({ children: e, root: t }) => /* @__PURE__ */ o(z7, { root: t, children: [
  /* @__PURE__ */ o("style", { children: Q7 }),
  /* @__PURE__ */ o(Y7, {}),
  e
] }), ec = () => {
  const { isActive: e } = L(), { t } = $();
  return /* @__PURE__ */ o(
    "div",
    {
      className: "data-[active='true']:grid hidden place-items-center size-4 aspect-square z-[100000000] absolute -bottom-2 right-7 bg-white",
      "data-active": e,
      children: /* @__PURE__ */ o(cr, { className: "w-full h-full fill-[#2c9e2c]", iconTitle: t("actived") })
    }
  );
}, tc = () => (M(() => {
  var n;
  const e = (n = document.getElementById("vwp-app-wrapper")) == null ? void 0 : n.shadowRoot, t = e == null ? void 0 : e.getElementById("vwp-access-wrapper"), r = document.createElement("div");
  ke(/* @__PURE__ */ o(ec, {}), r), t == null || t.appendChild(r);
}, []), null), rc = () => /* @__PURE__ */ o(re, { children: /* @__PURE__ */ o(tc, {}) }), { root: nc, shadowRoot: j1, isRootActive: Tn } = Ws();
function oc() {
  const { setIsOpenWidget: e, isLoaded: t, setIsLoaded: r } = L(), { path: n } = nr();
  return M(() => {
    if ((async () => (await Xs(n, j1), r(!0)))(), !t) return;
    e(Tn());
    const i = new MutationObserver(() => e(Tn()));
    return i.observe(nc, {
      attributes: !0,
      attributeFilter: ["data-active"]
    }), () => i.disconnect();
  }, [n, e, t, r]), /* @__PURE__ */ o(J7, { root: j1, children: [
    /* @__PURE__ */ o(O7, {}),
    /* @__PURE__ */ o(rc, {})
  ] });
}
ke(/* @__PURE__ */ o(oc, {}), j1);
